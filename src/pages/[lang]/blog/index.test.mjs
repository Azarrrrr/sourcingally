import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

test('SourcingAlly journal uses build-time Sanity records with searchable twelve-card pages', async () => {
  const source = await readFile(new URL('./index.astro', import.meta.url), 'utf8');
  assert.match(source, /generatedSanityArticles/);
  assert.match(source, /const pageSize=12/);
  assert.match(source, /name="search"/);
  assert.match(source, /filteredArticles/);
  assert.match(source, /journal-pagination/);
  assert.match(source, /data-journal-search/);
});
