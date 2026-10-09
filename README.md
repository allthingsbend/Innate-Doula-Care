# Innate Doula Care - test site

A preview site for Innate Doula Care (Bend, Oregon), built with Astro and deployed on Cloudflare Pages. It is a draft for Aleah to review. It is not the live website, and every page is marked `noindex` so it stays out of Google.

## What is here

- `content/` - every word, price, FAQ and photo on the site, as plain JSON files: `settings.json` (business details), `home.json`, `about.json`, `resources.json`, `areas.json`, one file per service in `services/` and one per town in `towns/`.
- `.pages.yml` - the Pages CMS setup. It defines the editing forms for everything in `content/`. See "Editing with Pages CMS" below.
- `src/data/site.js` - loads `content/` and shapes it for the pages. No content lives here.
- `src/pages/` - home, about, service area, `/questions/`, and the `[town]/` folder: `[town]/index.astro` builds a hub per town (`/bend/`, `/redmond/`) and `[town]/[service].astro` builds the service pages (`/bend/birth-doula/`). Towns with `servicePages` switched on in their content file get a page for every service. `/central-oregon/` is the areas hub, and `/central-oregon/birth-doula/` style pages are the main page for each service (the site is positioned as a Central Oregon doula, with town pages underneath).
- `src/components/questions-form.html` - the questionnaire for Aleah.
- `functions/api/answers.js` - saves questionnaire answers to Cloudflare KV and forwards them to a Google Sheet.
- `google-sheet-script.gs` - the script to paste into the Google Sheet (Extensions > Apps Script).
- `src/components/AreaMap.astro` - the service-area map, drawn from the town coordinates in `site.js`.
- `src/components/Cta.astro` and `GetStarted.astro` - the button set at the top of each page and the "Get started" band with the request form at the bottom of every page.
- `functions/api/contact.js` - saves request form messages to Cloudflare KV.
- `functions/results.js` - private page that shows questionnaire answers and contact messages: `/results/?key=YOUR_KEY`.
- `wrangler.toml` - Cloudflare Pages settings, including the KV storage binding.

## Cloudflare Pages settings

- Framework preset: Astro
- Build command: `npm run build`
- Build output directory: `dist`
- Secret: `RESULTS_KEY` (any long password you choose). This is what unlocks `/results/`.
- Secret: `SHEET_WEBHOOK_URL` (the web app URL from the Google Sheet's Apps Script deployment). This sends each submission to the sheet.

## Editing with Pages CMS

1. Go to https://app.pagescms.org and sign in with the GitHub account that owns this repo.
2. Install the Pages CMS GitHub app on this repository when asked, then open the repository in Pages CMS.
3. Edit a form and save. Each save is a commit to `main`, and Cloudflare rebuilds the site in about a minute.
4. To let Aleah edit, invite her by email from the collaborators screen in Pages CMS. She does not need a GitHub account.

Adding a file in `content/services/` (a new entry under Services) creates a new service everywhere: menus, cards, and a page for the region and each town. The file name becomes the URL. The same goes for Towns.

Uploaded photos are saved to `public/img/uploads` and are shown as uploaded, so resize large photos (about 1600 px wide is plenty) before uploading.

## Local development

```
npm install
npm run dev
```

## Before this could ever go live

- Aleah confirms every price and detail (in Pages CMS, or the files in `content/`).
- Replace the Unsplash stock photos (each photo field has an upload slot in Pages CMS) with Aleah's own, and add her portrait on the about page.
- Aleah adds a line or two of real local detail to each town page.
- Remove the `noindex` tag in `src/layouts/Base.astro` and the `Disallow` in `public/robots.txt`.
- Set the real domain in `astro.config.mjs`.
