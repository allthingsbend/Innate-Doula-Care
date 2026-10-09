// All of the site's words, prices and photos live in the JSON files in /content.
// Aleah edits those through Pages CMS (see .pages.yml); this file only loads them
// and shapes them for the page templates. Nothing here needs editing for a content change.
import fs from 'node:fs';
import path from 'node:path';

const DIR = path.join(process.cwd(), 'content');
const read = (f) => JSON.parse(fs.readFileSync(path.join(DIR, f), 'utf8'));
const readAll = (folder) =>
  fs.readdirSync(path.join(DIR, folder))
    .filter((f) => f.endsWith('.json'))
    .map((f) => ({ ...read(`${folder}/${f}`), _file: f.replace(/\.json$/, '') }))
    .sort((a, b) => (a.order ?? 999) - (b.order ?? 999) || a._file.localeCompare(b._file));
// The CMS can leave empty strings and empty lists behind. Treat those as "not there".
const full = (list) => (Array.isArray(list) && list.length ? list : undefined);
const text = (v) => (typeof v === 'string' ? v.trim() : '');
const digits = (v) => String(v || '').replace(/\D/g, '');

// ---- Business details ----
const settings = read('settings.json');
export const business = {
  ...settings,
  phoneHref: `tel:${digits(settings.phone)}`,
  smsHref: `sms:+1${digits(settings.phone)}`,
  social: Object.fromEntries((settings.social || []).map((x) => [x.label, x.url])),
};

export const home = read('home.json');
export const about = read('about.json');
export const areas = read('areas.json');
export const resources = read('resources.json');

// ---- Photos ----
// A photo is { image, stock, alt }. `image` is a file uploaded through the CMS. `stock` is an
// Unsplash placeholder used until a real photo is uploaded.
export const photoUrl = (p, w = 1600, h) => {
  if (!p) return '';
  if (text(p.image)) return p.image;
  return `${p.stock}?auto=format&fit=crop&w=${w}${h ? `&h=${h}` : ''}&q=70`;
};

// ---- Services ----
export const services = readAll('services').map((s) => ({
  ...s,
  path: s._file,
  facts: (s.facts || []).map((f) => [f.label, f.value]),
  intro: s.intro || [],
  includes: (s.includes || []).map((x) => [x.title, x.text]),
  pricing: (s.pricing || []).map((x) => [x.name, x.price, text(x.note) || undefined]),
  faqs: (s.faqs || []).filter((f) => text(f.q)),
  gallery: s.gallery || [],
  sections: (s.sections || []).map((x) => ({
    title: x.title,
    pairs: full(x.items)?.map((i) => [i.title, i.text]),
    groups: full(x.groups)?.map((g) => ({ h: g.heading, items: g.items || [] })),
    list: full(x.list),
  })),
}));

// ---- Towns ----
// `servicePages: true` gives a town its own page for every service (/redmond/birth-doula/).
// Every town gets a hub page (/redmond/) either way.
export const towns = readAll('towns').map((t) => ({
  ...t,
  slug: t._file,
  min: Number(t.minutes) || 0,
  faq: text(t.faqQuestion) ? { q: t.faqQuestion, a: t.faqAnswer } : undefined,
  gallery: t.gallery || [],
}));
business.towns = towns.map((t) => t.name);
export const townPages = towns.filter((t) => t.min > 0);
export const serviceTowns = towns.filter((t) => t.servicePages).map((t) => t.slug);

// Town-specific notes for one service, for example car seat checks in Redmond.
export const townServices = Object.fromEntries(
  towns.map((t) => [
    t.slug,
    Object.fromEntries(
      (t.serviceNotes || []).filter((n) => text(n.service)).map((n) => [
        n.service,
        { note: text(n.note) || undefined, faq: text(n.faqQuestion) ? { q: n.faqQuestion, a: n.faqAnswer } : undefined },
      ]),
    ),
  ]),
);

// ---- URL structure: /central-oregon/<service>/ is the main page, /<town>/<service>/ the local one ----
export const region = { slug: 'central-oregon', name: 'Central Oregon', min: 0, region: true };
export const hasPage = (townSlug, servicePath) =>
  townSlug === region.slug || serviceTowns.includes(townSlug) || Boolean(townServices[townSlug]?.[servicePath]);
export const svcUrl = (s, townSlug = region.slug) => `/${hasPage(townSlug, s.path) ? townSlug : region.slug}/${s.path}/`;

// The one line each service says about a town. Written per service in the CMS, with {town} and {minutes} filled in here.
export const localLine = (s, t) =>
  (text(s.townLine) || 'I offer this in {town}, and visits happen where you are.')
    .replaceAll('{town}', t.name)
    .replaceAll('{minutes}', t.min);
