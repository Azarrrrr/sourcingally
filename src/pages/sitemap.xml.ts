import { getCollection } from 'astro:content';
import { allQuestions } from '../data/questions';
import { buyerPaths } from '../data/buyer-paths';
import { cities, guides, products, services } from '../data/site-data';

const base = 'https://sourcingally.com';
const languages = ['en', 'es', 'pt', 'ru', 'tr'];

// These pages contain fully localized core conversion or navigation content.
// Interim source-language fallback pages are intentionally excluded until reviewed.
const localizedIndexableUrls = languages.flatMap((lang) => [
  `/${lang}/`,
  `/${lang}/paths/`,
  `/${lang}/start-project/`,
  `/${lang}/service-matcher/`,
  `/${lang}/china-route/`,
]);

const englishKnowledgeUrls = [
  '/en/privacy/',
  '/en/terms/',
  '/en/disclaimer/',
  '/en/editorial-policy/',
  '/en/services/',
  '/en/products/',
  '/en/cities/',
  '/en/guides/',
  '/en/blog/',
  '/en/questions/',
  ...buyerPaths.map((item) => `/en/paths/${item.slug}/`),
  ...services.map((item) => `/en/services/${item.slug}/`),
  ...products.map((item) => `/en/products/${item.slug}/`),
  ...cities.map((item) => `/en/cities/${item.slug}/`),
  ...guides.map((item) => `/en/guides/${item.slug}/`),
  ...allQuestions.map((item) => `/en/questions/${item.slug}/`),
];

const xmlEscape = (value: string) => value.replace(/[<>&'\"]/g, (character) => ({
  '<': '&lt;',
  '>': '&gt;',
  '&': '&amp;',
  "'": '&apos;',
  '"': '&quot;',
}[character] ?? character));

export async function GET() {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  const journalUrls = posts.map((post) => `/${post.data.lang}/blog/${post.id}/`);
  const urls = [...new Set([...localizedIndexableUrls, ...englishKnowledgeUrls, ...journalUrls])].sort();
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map((url) => `<url><loc>${xmlEscape(`${base}${url}`)}</loc></url>`).join('')}</urlset>`;

  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
