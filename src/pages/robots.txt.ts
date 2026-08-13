export function GET() {
  return new Response('User-agent: *\nAllow: /\n\nSitemap: https://sourcingally.com/sitemap.xml\n', {
    headers: { 'Content-Type': 'text/plain' },
  });
}
