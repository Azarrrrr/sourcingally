import { services, products, cities, guides } from '../data/site-data';
import { allQuestions } from '../data/questions';
import { buyerPaths } from '../data/buyer-paths';

const base = 'https://sourcingally.com';
const languages = ['en', 'es', 'pt', 'ru', 'tr'];
const localizedCoreUrls = languages.flatMap((lang) => [
  `/${lang}/`,
  `/${lang}/paths/`,
  `/${lang}/privacy/`,
  `/${lang}/terms/`,
  `/${lang}/disclaimer/`,
  `/${lang}/editorial-policy/`,
  ...buyerPaths.map((item) => `/${lang}/paths/${item.slug}/`),
]);
const englishPlatformUrls = [
  '/en/services/', '/en/products/', '/en/cities/', '/en/guides/', '/en/questions/', '/en/blog/', '/en/start-project/', '/en/china-route/', '/en/service-matcher/',
  ...services.map((item) => `/en/services/${item.slug}/`),
  ...products.map((item) => `/en/products/${item.slug}/`),
  ...cities.map((item) => `/en/cities/${item.slug}/`),
  ...guides.map((item) => `/en/guides/${item.slug}/`),
  ...allQuestions.map((item) => `/en/questions/${item.slug}/`),
  '/en/blog/working-with-a-china-sourcing-agent/',
];
const urls = [...new Set([...localizedCoreUrls, ...englishPlatformUrls])];

export function GET() {
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map((url) => `<url><loc>${base}${url}</loc></url>`).join('')}</urlset>`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
}
