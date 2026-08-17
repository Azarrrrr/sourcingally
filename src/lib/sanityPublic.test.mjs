import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

test('targets the SourcingAlly site key and accepts a locale parameter', async () => {
  const source = await readFile(new URL('./sanityPublic.ts', import.meta.url), 'utf8');
  assert.match(source, /siteKey == "sourcing-ally"/);
  assert.match(source, /listSanityArticles=\(locale:string\)/);
  assert.match(source, /locale == \$locale/);
});
