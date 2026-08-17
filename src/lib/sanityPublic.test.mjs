import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const helperUrl = new URL('./sanityPublic.ts', import.meta.url);
const journalUrl = new URL('../pages/[lang]/blog/index.astro', import.meta.url);

test('targets the SourcingAlly site key and passes localized labels to the browser reader', async () => {
  const [helper, journal] = await Promise.all([readFile(helperUrl, 'utf8'), readFile(journalUrl, 'utf8')]);
  assert.match(helper, /siteKey == "sourcing-ally"/);
  assert.match(helper, /listSanityArticles=\(locale:string\)/);
  assert.match(helper, /locale == \$locale/);
  assert.match(helper, /getSanityArticle/);
  assert.match(journal, /define:vars={{lang,t}}/);
});

test('renders a direct shared-Sanity article URL with localized browser labels', async () => {
  const journal = await readFile(journalUrl, 'utf8');
  const script = journal.match(/<script define:vars={{lang,t}}>([\s\S]*?)<\/script>/)?.[1];
  assert.ok(script, 'journal client script should be present');
  assert.match(script, /;\(async\(\)=>\{/);
  const target = { innerHTML: '' };
  const wrap = { hidden: true };
  const document = { querySelector: selector => selector === '#sanity-journal-content' ? target : selector === '#sanity-journal' ? wrap : null, querySelectorAll: () => [] };
  const article = { title: 'How to compare supplier quotes before placing an order', description: 'A practical comparison guide.', bodyMarkdown: 'Introductory guidance.\n\n## Confirm the assumptions\n\nCompare like with like.', publishedAt: '2026-08-17T00:00:00.000Z', wordCount: 256 };
  const clientBody = script.replace(/^\s*;\(async\(\)=>\{/, '').replace(/\}\)\(\);\s*$/, '');
  const run = new Function('document', 'location', 'fetch', 'URL', 'URLSearchParams', 'lang', 't', `return (async () => {${clientBody}})()`);
  await run(document, { pathname: '/en/blog/compare-supplier-quotes-before-ordering/', search: '' }, async () => ({ ok: true, json: async () => ({ result: article }) }), URL, URLSearchParams, 'en', { read: 'Read article', intro: 'Journal introduction' });
  assert.equal(wrap.hidden, false);
  assert.match(target.innerHTML, /How to compare supplier quotes before placing an order/);
  assert.match(target.innerHTML, /Confirm the assumptions/);
});
