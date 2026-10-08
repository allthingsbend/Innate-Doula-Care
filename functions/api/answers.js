// Receives questionnaire answers from /questions/.
// 1. Saves a copy in Cloudflare KV (backup, readable at /results/?key=YOUR_KEY).
// 2. Forwards them to a Google Sheet through the Apps Script in google-sheet-script.gs,
//    when the SHEET_WEBHOOK_URL secret is set in Cloudflare.

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json' } });

export async function onRequestPost({ request, env }) {
  const raw = await request.text();
  if (raw.length > 40000) return json({ ok: false, error: 'too large' }, 413);

  let body;
  try {
    body = JSON.parse(raw);
  } catch {
    return json({ ok: false, error: 'bad request' }, 400);
  }

  // Hidden field real people never fill in. Bots do. Pretend it worked.
  if (body.website) return json({ ok: true });

  const answers = Array.isArray(body.answers)
    ? body.answers.slice(0, 40).map((x) => ({ q: String(x.q || '').slice(0, 200), a: String(x.a || '').slice(0, 4000) }))
    : [];
  if (!answers.some((x) => x.a)) return json({ ok: false, error: 'empty' }, 400);

  const at = new Date().toISOString();
  const record = { at, answers };
  let saved = false;
  let sheet = false;

  if (env.ANSWERS) {
    try {
      await env.ANSWERS.put(`answers:${at}`, JSON.stringify(record));
      saved = true;
    } catch {}
  }

  // Forward to the Google Sheet. Apps Script answers a POST with a redirect to the
  // real response, so follow that one hop by hand.
  let sheetNote = 'SHEET_WEBHOOK_URL is not set in Cloudflare';
  if (env.SHEET_WEBHOOK_URL) {
    try {
      let r = await fetch(env.SHEET_WEBHOOK_URL.trim(), {
        method: 'POST',
        headers: { 'content-type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(record),
        redirect: 'manual',
      });
      if (r.status >= 300 && r.status < 400 && r.headers.get('location')) {
        r = await fetch(r.headers.get('location'), { redirect: 'follow' });
      }
      const text = await r.text();
      sheet = text.includes('"ok":true');
      sheetNote = sheet ? 'ok' : `HTTP ${r.status}: ${text.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 300)}`;
    } catch (err) {
      sheetNote = `request failed: ${String(err).slice(0, 200)}`;
    }
  }
  // Leave a note for the results page so a broken sheet connection is easy to spot.
  if (env.ANSWERS) {
    try {
      await env.ANSWERS.put('status:sheet', JSON.stringify({ at, ok: sheet, note: sheetNote }));
    } catch {}
  }

  // Success as long as the answers landed somewhere Mitch can read them.
  if (!saved && !sheet) return json({ ok: false, error: 'could not save' }, 500);
  return json({ ok: true, saved, sheet });
}
