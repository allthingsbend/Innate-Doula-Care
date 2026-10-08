// Receives questionnaire answers from /questions/ and stores them in Cloudflare KV.
// Mitch reads them at /results/?key=YOUR_KEY (see functions/results.js).

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json' } });

export async function onRequestPost({ request, env }) {
  if (!env.ANSWERS) return json({ ok: false, error: 'storage not set up' }, 500);

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
  await env.ANSWERS.put(`answers:${at}`, JSON.stringify({ at, answers }));
  return json({ ok: true });
}
