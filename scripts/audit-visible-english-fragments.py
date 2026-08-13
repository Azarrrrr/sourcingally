from collections import Counter, defaultdict
from difflib import SequenceMatcher
from pathlib import Path
import re
from bs4 import BeautifulSoup

ROOT = Path('/home/ubuntu/sourcingally')
DIST = ROOT / 'dist'
LOCALES = ('es', 'pt', 'ru', 'tr', 'fr')
MIN_BLOCK = 45


def extract_main(path: Path) -> str:
    soup = BeautifulSoup(path.read_text(encoding='utf-8'), 'html.parser')
    main = soup.find('main') or soup
    for tag in main.find_all(['script', 'style', 'noscript', 'svg']):
        tag.decompose()
    for tag in main.select('.locale-source-only'):
        tag.decompose()
    return ' '.join(main.get_text(' ', strip=True).split())

english = {}
for page in (DIST / 'en').rglob('index.html'):
    english[page.relative_to(DIST / 'en')] = extract_main(page)

records = []
for locale in LOCALES:
    for page in (DIST / locale).rglob('index.html'):
        relative = page.relative_to(DIST / locale)
        target = extract_main(page)
        source = english.get(relative, '')
        matcher = SequenceMatcher(None, source, target, autojunk=False)
        blocks = []
        for block in matcher.get_matching_blocks():
            if block.size < MIN_BLOCK:
                continue
            fragment = target[block.b:block.b + block.size].strip()
            if len(fragment) >= MIN_BLOCK:
                blocks.append(fragment)
        unique_blocks = []
        for fragment in blocks:
            if fragment not in unique_blocks:
                unique_blocks.append(fragment)
        if unique_blocks:
            records.append({'locale': locale, 'relative': relative, 'fragments': unique_blocks})

by_locale = defaultdict(list)
for record in records:
    by_locale[record['locale']].append(record)

out = ROOT / 'docs/visible-english-fragment-audit.md'
lines = [
    '# Visible English Fragment Audit',
    '',
    'This audit compares visible `<main>` text on every non-English route with its English counterpart and flags copied blocks of 45+ characters. It excludes source-only template blocks that are not displayed to localized visitors, ignores short brand/technical terms, and focuses on meaningful reader-facing English sentences.',
    '',
    '| Locale | Pages with English fragments |',
    '|---|---:|',
]
for locale in LOCALES:
    lines.append(f'| {locale} | {len(by_locale[locale])} |')

for locale in LOCALES:
    lines.extend(['', f'## {locale}', ''])
    for record in by_locale[locale]:
        route = '/' + str(record['relative'].parent).replace('\\', '/') + '/'
        if route == '/./':
            route = '/'
        lines.append(f'### `{route}`')
        for fragment in record['fragments'][:3]:
            cleaned = fragment.replace('`', '\\`')
            lines.append(f'> {cleaned}')
        lines.append('')

out.write_text('\n'.join(lines) + '\n', encoding='utf-8')
print(out)
for locale in LOCALES:
    print(f'{locale}: {len(by_locale[locale])} pages with copied English fragments')
