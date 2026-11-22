import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUTPUT = path.join(ROOT, 'src', 'data', 'blog-route-map.json');
const ENDPOINT = 'https://jbonouxr.api.sanity.io/v2025-02-19/data/query/production';
const LOCALES = ['en', 'es', 'pt', 'ru', 'tr', 'fr', 'ja', 'de', 'ar', 'id', 'it'];
const query = '*[_type == "article" && siteKey == "sourcing-ally" && defined(locale) && defined(slug)]{slug,locale}';

const response = await fetch(`${ENDPOINT}?query=${encodeURIComponent(query)}`);
if (!response.ok) throw new Error(`Unable to load published SourcingAlly article routes: ${response.status}`);

const { result = [] } = await response.json();
const routes = Object.fromEntries(LOCALES.map((locale) => [locale, new Set()]));
for (const article of result) {
  if (!routes[article.locale]) continue;
  const slug = typeof article.slug === 'string' ? article.slug : article.slug?.current;
  if (typeof slug === 'string' && slug.trim()) routes[article.locale].add(`/blog/${slug.trim()}/`);
}

const serialized = Object.fromEntries(
  Object.entries(routes).map(([locale, paths]) => [locale, [...paths].sort()]),
);
fs.mkdirSync(path.dirname(OUTPUT), { recursive: true });
fs.writeFileSync(OUTPUT, `${JSON.stringify(serialized, null, 2)}\n`);
console.log(`Generated blog route map for ${result.length} published Sanity records.`);
