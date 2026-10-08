# Innate Doula Care - test site

A preview site for Innate Doula Care (Bend, Oregon), built with Astro and deployed on Cloudflare Pages. It is a draft for Aleah to review. It is not the live website, and every page is marked `noindex` so it stays out of Google.

## What is here

- `src/data/site.js` - business details, services, prices and FAQs. Edit copy here.
- `src/pages/` - home, about, service area, `/questions/`, and `[slug].astro`, which builds one page per service and one page per town (for example `/doula-redmond-oregon/`).
- `src/components/questions-form.html` - the questionnaire for Aleah.
- `functions/api/answers.js` - saves questionnaire answers to Cloudflare KV and forwards them to a Google Sheet.
- `google-sheet-script.gs` - the script to paste into the Google Sheet (Extensions > Apps Script).
- `src/components/AreaMap.astro` - the service-area map, drawn from the town coordinates in `site.js`.
- `functions/results.js` - private page that shows the answers: `/results/?key=YOUR_KEY`.
- `wrangler.toml` - Cloudflare Pages settings, including the KV storage binding.

## Cloudflare Pages settings

- Framework preset: Astro
- Build command: `npm run build`
- Build output directory: `dist`
- Secret: `RESULTS_KEY` (any long password you choose). This is what unlocks `/results/`.
- Secret: `SHEET_WEBHOOK_URL` (the web app URL from the Google Sheet's Apps Script deployment). This sends each submission to the sheet.

## Local development

```
npm install
npm run dev
```

## Before this could ever go live

- Aleah confirms every price and detail in `src/data/site.js`.
- Add real photos where the photo slots are (home and about).
- Aleah adds a line or two of real local detail to each town page.
- Remove the `noindex` tag in `src/layouts/Base.astro` and the `Disallow` in `public/robots.txt`.
- Set the real domain in `astro.config.mjs`.
