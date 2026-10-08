// Private page for Mitch: /results/?key=YOUR_KEY
// The key is the RESULTS_KEY secret set in Cloudflare (never stored in this repo).

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

export async function onRequestGet({ request, env }) {
  const key = new URL(request.url).searchParams.get('key');
  if (!env.RESULTS_KEY || !key || key !== env.RESULTS_KEY || !env.ANSWERS) {
    return new Response('Not found', { status: 404 });
  }

  const list = await env.ANSWERS.list({ prefix: 'answers:' });
  const entries = [];
  for (const k of list.keys) {
    const v = await env.ANSWERS.get(k.name, 'json');
    if (v) entries.push(v);
  }
  entries.sort((a, b) => (a.at < b.at ? 1 : -1));

  const st = await env.ANSWERS.get('status:sheet', 'json');
  const sheetLine = st
    ? `<p class="st ${st.ok ? 'good' : 'bad'}"><b>Google Sheet:</b> ${st.ok ? 'last submission was added to the sheet.' : 'last submission did NOT reach the sheet. ' + esc(st.note)}</p>`
    : '<p class="st">Google Sheet: no submission has been tried since this was set up.</p>';

  const body = entries.length
    ? entries
        .map(
          (e) => `<article><h2>${esc(new Date(e.at).toLocaleString('en-US', { timeZone: 'America/Los_Angeles' }))} Pacific</h2>
${e.answers.map((x) => `<h3>${esc(x.q)}</h3><p>${x.a ? esc(x.a).replace(/\n/g, '<br>') : '<i>skipped</i>'}</p>`).join('\n')}</article>`,
        )
        .join('\n')
    : '<p>No answers yet.</p>';

  const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex"><title>Questionnaire answers</title>
<style>body{font:17px/1.55 system-ui,sans-serif;max-width:760px;margin:0 auto;padding:24px 20px 80px;background:#f7f2e8;color:#10312f}h1{font-size:30px}article{border-top:3px solid #1f6f78;margin-top:32px;padding-top:8px}h2{font-size:20px}h3{font-size:15px;text-transform:uppercase;letter-spacing:.08em;color:#a8481f;margin:20px 0 4px}p{margin:0}.st{margin-top:14px;padding:12px 14px;border-radius:10px;background:#ede4d3}.st.bad{background:#f6d9cc}.st.good{background:#d7e8df}</style></head>
<body><h1>Questionnaire answers</h1><p>${entries.length} submission${entries.length === 1 ? '' : 's'}, newest first.</p>${sheetLine}${body}</body></html>`;

  return new Response(html, { headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store' } });
}
