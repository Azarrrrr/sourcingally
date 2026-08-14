import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const DIST = path.join(ROOT, 'dist');
const BLOG = path.join(ROOT, 'src', 'content', 'blog');
const LANGS = ['en', 'es', 'pt', 'ru', 'tr', 'fr'];
const ASSET_EXTENSIONS = new Set(['.css', '.js', '.mjs', '.svg', '.png', '.jpg', '.jpeg', '.webp', '.gif', '.ico', '.xml', '.txt', '.webmanifest', '.pdf']);

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

function routeForFile(file) {
  const relative = path.relative(DIST, file).replaceAll(path.sep, '/');
  return relative === 'index.html' ? '/' : `/${relative.replace(/\/index\.html$/, '/')}`;
}

function normalizeHref(value) {
  const href = value.trim().split('#')[0].split('?')[0];
  if (!href || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('http:') || href.startsWith('https:') || href.startsWith('//') || href.startsWith('javascript:')) return null;
  return href.startsWith('/') ? href : null;
}

function targetExists(href) {
  if (href === '/') return fs.existsSync(path.join(DIST, 'index.html'));
  const ext = path.extname(href);
  if (ASSET_EXTENSIONS.has(ext)) return fs.existsSync(path.join(DIST, href.slice(1)));
  return fs.existsSync(path.join(DIST, href.slice(1), 'index.html')) || fs.existsSync(path.join(DIST, href.slice(1)));
}

const htmlFiles = walk(DIST).filter((file) => file.endsWith('.html'));
const brokenLinks = [];
const englishLinksFromOtherLocales = [];
const fallbackPages = [];
const languagePageCounts = Object.fromEntries(LANGS.map((lang) => [lang, 0]));

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, 'utf8');
  const route = routeForFile(file);
  const match = route.match(/^\/(en|es|pt|ru|tr|fr)(?:\/|$)/);
  if (match) languagePageCounts[match[1]] += 1;
  const isFallbackJournalPage = html.includes('article-availability');
  if (html.includes('locale-source-only')) fallbackPages.push(route);
  const anchors = [...html.matchAll(/<a\b[^>]*\bhref="([^"]+)"[^>]*>/g)];
  for (const anchor of anchors) {
    const href = normalizeHref(anchor[1]);
    if (href && !targetExists(href)) brokenLinks.push({ route, href });
    if (match && match[1] !== 'en' && !isFallbackJournalPage && href?.startsWith('/en/')) englishLinksFromOtherLocales.push({ route, href });
  }
}

const translationGroups = new Map();
for (const file of walk(BLOG).filter((entry) => entry.endsWith('.md') || entry.endsWith('.mdx'))) {
  const raw = fs.readFileSync(file, 'utf8');
  const key = raw.match(/^translationKey:\s*["']?([^\n"']+)/m)?.[1]?.trim() ?? path.basename(file).replace(/\.(en|es|pt|ru|tr|fr)\.(md|mdx)$/, '');
  const lang = raw.match(/^lang:\s*["']?([a-z]{2})/m)?.[1] ?? (path.basename(file).match(/\.(en|es|pt|ru|tr|fr)\.(md|mdx)$/)?.[1] ?? 'en');
  if (!translationGroups.has(key)) translationGroups.set(key, new Set());
  translationGroups.get(key).add(lang);
}

const articleLanguageCoverage = Object.fromEntries(LANGS.map((lang) => [lang, 0]));
for (const languages of translationGroups.values()) for (const lang of languages) if (lang in articleLanguageCoverage) articleLanguageCoverage[lang] += 1;
const fullyTranslatedArticles = [...translationGroups.values()].filter((languages) => LANGS.every((lang) => languages.has(lang))).length;

const result = {
  generatedPages: htmlFiles.length,
  languagePageCounts,
  brokenInternalLinks: brokenLinks,
  englishNavigationLinksOnNonEnglishPages: englishLinksFromOtherLocales,
  fallbackMarkerPages: fallbackPages,
  journal: {
    articleTopics: translationGroups.size,
    languageCoverage: articleLanguageCoverage,
    fullyTranslatedTopics: fullyTranslatedArticles,
  },
};

console.log(JSON.stringify(result, null, 2));
if (brokenLinks.length || englishLinksFromOtherLocales.length) process.exitCode = 1;
