from pathlib import Path
import json
import re
from openai import OpenAI

ROOT = Path('/home/ubuntu/sourcingally')
SOURCE = ROOT / 'src/data/buyer-paths.ts'
OUT = ROOT / 'src/data/buyer-path-locales.ts'
client = OpenAI()
source_text = SOURCE.read_text(encoding='utf-8')
source_text = source_text[source_text.index('export const buyerPaths'):source_text.index('export const getBuyerPath')]
slugs = re.findall(r"slug: '([^']+)'", source_text)
if len(slugs) != 6:
    raise RuntimeError(f'Expected 6 Buyer Paths, found {len(slugs)}')

TARGETS = {
    'es': 'neutral, natural Latin American Spanish for international buyers',
    'pt': 'natural professional Brazilian Portuguese for international buyers',
    'ru': 'clear, natural professional Russian for international buyers; use Russian script for Chinese city names rather than Latin spellings',
    'tr': 'clear, natural professional Turkish for international buyers',
    'fr': 'natural professional international French for international buyers',
}

path_schema = {
    'type': 'object',
    'properties': {
        'slug': {'type': 'string'}, 'label': {'type': 'string'}, 'title': {'type': 'string'}, 'description': {'type': 'string'}, 'promise': {'type': 'string'},
        'stages': {'type': 'array', 'items': {'type': 'object', 'properties': {'title': {'type': 'string'}, 'text': {'type': 'string'}}, 'required': ['title', 'text'], 'additionalProperties': False}},
        'risks': {'type': 'array', 'items': {'type': 'object', 'properties': {'title': {'type': 'string'}, 'text': {'type': 'string'}}, 'required': ['title', 'text'], 'additionalProperties': False}},
        'checklist': {'type': 'array', 'items': {'type': 'string'}},
        'nextLabels': {'type': 'array', 'items': {'type': 'string'}},
    },
    'required': ['slug', 'label', 'title', 'description', 'promise', 'stages', 'risks', 'checklist', 'nextLabels'],
    'additionalProperties': False,
}

schema = {'type':'json_schema','json_schema':{'name':'localized_buyer_paths','strict':True,'schema':{'type':'object','properties':{'paths':{'type':'array','items':path_schema}},'required':['paths'],'additionalProperties':False}}}
system = """You are a senior website localization editor specializing in China sourcing content. Translate every visible reader-facing field in the supplied TypeScript Buyer Paths library into the requested language. Preserve all confirmed facts, company name Sourcing Ally, 5%, $150 per day, route slugs, and linked-route structure. Do not add claims or recommendations. Use natural professional website language, not literal syntax. Keep every slug unchanged and keep the exact number of stages, risks, checklist items, and next-link labels per path. Return only JSON matching the schema."""

localized = {}
for code, target in TARGETS.items():
    response = client.chat.completions.create(model='gpt-5-mini', messages=[{'role':'system','content':system},{'role':'user','content':f'Target language and register: {target}.\n\nSource TypeScript library:\n{source_text}'}], response_format=schema, max_completion_tokens=12000)
    result = json.loads(response.choices[0].message.content)
    if [item['slug'] for item in result['paths']] != slugs:
        raise RuntimeError(f'{code}: unexpected slug order')
    for path in result['paths']:
        if not all(path[key].strip() for key in ('label','title','description','promise')):
            raise RuntimeError(f'{code}/{path["slug"]}: empty required copy')
        if len(path['stages']) != 4 or len(path['risks']) != 3 or len(path['checklist']) != 6 or len(path['nextLabels']) != 3:
            raise RuntimeError(f'{code}/{path["slug"]}: structure mismatch')
    localized[code] = result
    print(f'Generated {code}')

OUT.write_text('export const buyerPathLocales = ' + json.dumps(localized, ensure_ascii=False, indent=2) + ' as const;\n', encoding='utf-8')
print(f'Wrote {OUT}')
