import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const root = '/home/ubuntu/sourcingally/src';
const patterns = [
  ["['en','es','pt','ru','tr']", "['en','es','pt','ru','tr','fr']"],
  ["['en', 'es', 'pt', 'ru', 'tr']", "['en', 'es', 'pt', 'ru', 'tr', 'fr']"],
];

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await walk(path));
    else if (path.endsWith('.astro') || path.endsWith('.ts')) files.push(path);
  }
  return files;
}

for (const path of await walk(root)) {
  const source = await readFile(path, 'utf8');
  let updated = source;
  for (const [find, replace] of patterns) updated = updated.replaceAll(find, replace);
  if (updated !== source) {
    await writeFile(path, updated);
    console.log(path);
  }
}
