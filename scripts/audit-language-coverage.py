from collections import Counter, defaultdict
from pathlib import Path
import re

ROOT = Path('/home/ubuntu/sourcingally')
DIST = ROOT / 'dist'
LOCALES = ('en', 'es', 'pt', 'ru', 'tr', 'fr')

lang_attr = re.compile(r'<html\s+lang="([^"]+)"', re.I)
robots = re.compile(r'<meta\s+name="robots"\s+content="([^"]+)"', re.I)
title = re.compile(r'<title>(.*?)</title>', re.I | re.S)

records = []
for html_path in sorted(DIST.rglob('index.html')):
    relative = html_path.relative_to(DIST)
    parts = relative.parts
    locale = parts[0] if parts and parts[0] in LOCALES else 'root'
    path = '/' + '/'.join(parts[:-1]) + ('/' if parts[:-1] else '')
    text = html_path.read_text(encoding='utf-8')
    declared = (lang_attr.search(text).group(1) if lang_attr.search(text) else 'missing')
    robot_value = (robots.search(text).group(1) if robots.search(text) else '')
    page_title = re.sub(r'\s+', ' ', title.search(text).group(1)).strip() if title.search(text) else ''
    records.append({
        'locale': locale,
        'path': path,
        'declared': declared,
        'noindex': 'noindex' in robot_value.lower(),
        'title': page_title,
    })

summary = defaultdict(lambda: Counter())
for record in records:
    summary[record['locale']]['total'] += 1
    summary[record['locale']]['noindex'] += int(record['noindex'])
    summary[record['locale']]['indexable'] += int(not record['noindex'])
    summary[record['locale']]['declared_match'] += int(record['locale'] == record['declared'])

out = ROOT / 'docs/language-coverage-audit.md'
lines = [
    '# Language Coverage Audit',
    '',
    'This audit reports **route language**, declared HTML language, and interim `noindex` safeguards. A language-specific URL is not treated as a complete translation merely because it exists.',
    '',
    '| Locale | Routes built | Indexable | Interim noindex fallback | HTML lang matches route |',
    '|---|---:|---:|---:|---:|',
]
for locale in (*LOCALES, 'root'):
    item = summary[locale]
    if item['total']:
        lines.append(f"| {locale} | {item['total']} | {item['indexable']} | {item['noindex']} | {item['declared_match']} |")

lines.extend([
    '',
    '## Interim fallback pages by locale',
    '',
])
for locale in LOCALES:
    fallback_paths = [record['path'] for record in records if record['locale'] == locale and record['noindex']]
    lines.append(f'### {locale}')
    if fallback_paths:
        lines.extend([f'- `{path}`' for path in fallback_paths])
    else:
        lines.append('- None')
    lines.append('')

mismatches = [record for record in records if record['locale'] in LOCALES and record['locale'] != record['declared']]
lines.extend(['## Declared-language mismatches', ''])
if mismatches:
    lines.extend([f"- `{record['path']}` declares `{record['declared']}`" for record in mismatches])
else:
    lines.append('- None')

out.write_text('\n'.join(lines) + '\n', encoding='utf-8')
print(out)
print(f'Total pages: {len(records)}')
for locale in LOCALES:
    item = summary[locale]
    print(f"{locale}: total={item['total']}, indexable={item['indexable']}, noindex={item['noindex']}, declared-match={item['declared_match']}")
