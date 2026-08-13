from difflib import SequenceMatcher
from pathlib import Path
import re
from bs4 import BeautifulSoup

ROOT = Path('/home/ubuntu/sourcingally')
DIST = ROOT / 'dist'
LOCALES = ('es', 'pt', 'ru', 'tr', 'fr')


def main_text(path: Path) -> str:
    soup = BeautifulSoup(path.read_text(encoding='utf-8'), 'html.parser')
    main = soup.find('main') or soup
    for tag in main.find_all(['script', 'style', 'noscript']):
        tag.decompose()
    text = ' '.join(main.get_text(' ', strip=True).split())
    return text

english = {}
for page in (DIST / 'en').rglob('index.html'):
    english[page.relative_to(DIST / 'en')] = main_text(page)

records = []
for locale in LOCALES:
    for page in (DIST / locale).rglob('index.html'):
        relative = page.relative_to(DIST / locale)
        current = main_text(page)
        source = english.get(relative, '')
        ratio = SequenceMatcher(None, source, current).ratio() if source else 0.0
        records.append({
            'locale': locale,
            'relative': relative,
            'ratio': ratio,
            'source_chars': len(source),
            'current_chars': len(current),
        })

categories = {
    'likely_english_fallback': lambda record: record['ratio'] >= 0.92,
    'mixed_or_partial': lambda record: 0.35 <= record['ratio'] < 0.92,
    'likely_localized': lambda record: record['ratio'] < 0.35,
}

out = ROOT / 'docs/main-content-language-comparison.md'
lines = [
    '# Main Content Language Comparison',
    '',
    'This compares text inside each page’s `<main>` element with its English counterpart. It is an automated screening tool, not a linguistic-quality guarantee.',
    '',
    '| Locale | Likely English fallback | Mixed or partial | Likely localized |',
    '|---|---:|---:|---:|',
]
for locale in LOCALES:
    local = [record for record in records if record['locale'] == locale]
    counts = {name: sum(test(record) for record in local) for name, test in categories.items()}
    lines.append(f"| {locale} | {counts['likely_english_fallback']} | {counts['mixed_or_partial']} | {counts['likely_localized']} |")

for category, predicate in categories.items():
    lines.extend(['', f'## {category.replace("_", " ").title()}', ''])
    for locale in LOCALES:
        selected = [record for record in records if record['locale'] == locale and predicate(record)]
        lines.append(f'### {locale} ({len(selected)})')
        for record in selected:
            route = '/' + str(record['relative'].parent).replace('\\', '/') + '/'
            if route == '/./':
                route = '/'
            lines.append(f"- `{route}` — similarity `{record['ratio']:.2f}`")
        lines.append('')

out.write_text('\n'.join(lines) + '\n', encoding='utf-8')
print(out)
for locale in LOCALES:
    local = [record for record in records if record['locale'] == locale]
    counts = {name: sum(test(record) for record in local) for name, test in categories.items()}
    print(locale, counts)
