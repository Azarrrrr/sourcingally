import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

test('targets the SourcingAlly site key and passes localized labels to the browser reader', async () => {
  const [helper, journal] = await Promise.all([
    readFile(new URL('./sanityPublic.ts', import.meta.url), 'utf8'),
    readFile(new URL('../pages/[lang]/blog/index.astro', import.meta.url), 'utf8'),
  ]);
  assert.match(helper, /siteKey == "sourcing-ally"/);
  assert.match(helper, /listSanityArticles=\(locale:string\)/);
  assert.match(helper, /locale == \$locale/);
  assert.match(helper, /getSanityArticle/);
  assert.match(journal, /define:vars={{lang,t}}/);
});
