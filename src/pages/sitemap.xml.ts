import { services, products, cities, guides } from '../data/site-data';
import { allQuestions } from '../data/questions';

const base = 'https://sourcingally.com';
const urls = [
  '/en/', '/en/services/', '/en/products/', '/en/cities/', '/en/guides/', '/en/questions/', '/en/blog/', '/en/start-project/',
  '/en/privacy/', '/en/terms/', '/en/disclaimer/', '/en/editorial-policy/',
  ...services.map((item) => `/en/services/${item.slug}/`),
  ...products.map((item) => `/en/products/${item.slug}/`),
  ...cities.map((item) => `/en/cities/${item.slug}/`),
  ...guides.map((item) => `/en/guides/${item.slug}/`),
  ...allQuestions.map((item) => `/en/questions/${item.slug}/`),
  '/en/blog/working-with-a-china-sourcing-agent/',
];

export function GET() {
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map((url) => `<url><loc>${base}${url}</loc></url>`).join('')}</urlset>`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
}
