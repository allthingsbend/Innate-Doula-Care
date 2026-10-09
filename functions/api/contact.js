// Receives the "Send a quick request" form (bottom of every page) and stores it in Cloudflare KV.
// Messages show on the private results page: /results/?key=YOUR_KEY

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json' } });

export async function onRequestPost({ request, env }) {
  const raw = await request.text();
  if (raw.length > 12000) return json({ ok: false, error: 'too large' }, 413);
  let b;
  try {
    b = JSON.parse(raw);
  } catch {
    return json({ ok: false, error: 'bad request' }, 400);
  }
  if (b.website) return json({ ok: true }); // hidden field only bots fill in

  const clean = (v, n) => String(v || '').slice(0, n);
  const msg = { service: clean(b.service, 80), town: clean(b.town, 60), page: clean(b.page, 120), name: clean(b.name, 120), phone: clean(b.phone, 40), email: clean(b.email, 160), due: clean(b.due, 60), message: clean(b.message, 4000) };
  if (!msg.name || (!msg.email && !msg.phone)) return json({ ok: false, error: 'missing' }, 400);
  if (!env.ANSWERS) return json({ ok: false, error: 'storage not set up' }, 500);

  const at = new Date().toISOString();
  await env.ANSWERS.put(`contact:${at}`, JSON.stringify({ at, ...msg }));
  return json({ ok: true });
}
