import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const helperUrl = new URL('./sanityPublic.ts', import.meta.url);
const journalUrl = new URL('../pages/[lang]/blog/index.astro', import.meta.url);
const detailUrl = new URL('../pages/[lang]/blog/[...slug].astro', import.meta.url);

test('uses published SourcingAlly Sanity records for the archive and reader routes', async () => {
  const [helper, journal, detail] = await Promise.all([readFile(helperUrl, 'utf8'), readFile(journalUrl, 'utf8'), readFile(detailUrl, 'utf8')]);
  assert.match(helper, /siteKey == "sourcing-ally"/);
  assert.match(helper, /locale == \$locale/);
  assert.match(journal, /siteKey == "sourcing-ally"/);
  assert.match(journal, /Unable to load published SourcingAlly articles/);
  assert.match(journal, /articles\.map\(\(article\)/);
  assert.match(detail, /siteKey == "sourcing-ally"/);
  assert.match(detail, /getStaticPaths/);
  assert.match(detail, /bodyMarkdown/);
});

test('contains no local Markdown collection or fallback reader dependency', async () => {
  const [journal, detail] = await Promise.all([readFile(journalUrl, 'utf8'), readFile(detailUrl, 'utf8')]);
  for (const source of [journal, detail]) {
    assert.doesNotMatch(source, /astro:content/);
    assert.doesNotMatch(source, /getCollection\(/);
    assert.doesNotMatch(source, /isSanityProxy/);
    assert.doesNotMatch(source, /sanity-article/);
    assert.doesNotMatch(source, /Markdown fallback/);
  }
});
