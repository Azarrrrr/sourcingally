import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const blogDir = path.resolve('src/content/blog');
const allowedLanguages = new Set(['en', 'es', 'pt', 'ru', 'tr', 'fr']);
const files = (await readdir(blogDir)).filter((file) => /\.(md|mdx)$/i.test(file));
const groups = new Map();
const errors = [];
const warnings = [];

function parseFrontmatter(text, file) {
  const match = text.match(/^---\s*\n([\s\S]*?)\n---/);
  if (!match) {
    errors.push(`${file}: missing YAML frontmatter.`);
    return {};
  }
  const result = {};
  for (const line of match[1].split('\n')) {
    const item = line.match(/^([A-Za-z][\w-]*):\s*["']?(.+?)["']?\s*$/);
    if (item) result[item[1]] = item[2];
  }
  return result;
}

for (const file of files) {
  const text = await readFile(path.join(blogDir, file), 'utf8');
  const data = parseFrontmatter(text, file);
  if (!data.title || !data.description || !data.lang) {
    errors.push(`${file}: title, description, and lang are required.`);
    continue;
  }
  if (!allowedLanguages.has(data.lang)) {
    errors.push(`${file}: unsupported lang '${data.lang}'.`);
    continue;
  }
  const fallbackKey = file.replace(/\.(md|mdx)$/i, '').replace(/\.(en|es|pt|ru|tr|fr)$/i, '');
  const translationKey = data.translationKey || fallbackKey;
  if (!groups.has(translationKey)) groups.set(translationKey, []);
  groups.get(translationKey).push({ file, lang: data.lang, draft: data.draft === 'true' });
}

console.log('Multilingual Journal validation\n');
for (const [translationKey, entries] of [...groups.entries()].sort()) {
  const languageCounts = new Map();
  for (const entry of entries) languageCounts.set(entry.lang, (languageCounts.get(entry.lang) || 0) + 1);
  for (const [lang, count] of languageCounts) {
    if (count > 1) errors.push(`${translationKey}: ${count} files declare lang '${lang}'. Keep one per language.`);
  }
  const published = entries.filter((entry) => !entry.draft).map((entry) => entry.lang).sort();
  const missing = [...allowedLanguages].filter((lang) => !entries.some((entry) => entry.lang === lang));
  if (published.length && missing.length) warnings.push(`${translationKey}: published in ${published.join(', ')}; missing ${missing.join(', ')}.`);
  console.log(`- ${translationKey}: ${entries.map((entry) => `${entry.lang}${entry.draft ? ' (draft)' : ''}`).join(', ')}`);
}

if (warnings.length) {
  console.log('\nWarnings');
  for (const warning of warnings) console.log(`- ${warning}`);
}
if (errors.length) {
  console.error('\nErrors');
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log('\nNo blocking translation-key or language-frontmatter errors found.');
}
