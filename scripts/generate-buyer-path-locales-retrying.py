from pathlib import Path
import json
import re
import time
from openai import OpenAI

ROOT = Path('/home/ubuntu/sourcingally')
SOURCE = ROOT / 'src/data/buyer-paths.ts'
OUT = ROOT / 'src/data/buyer-path-locales.ts'
client = OpenAI()
source_text = SOURCE.read_text(encoding='utf-8')
source_text = source_text[source_text.index('export const buyerPaths'):source_text.index('export const getBuyerPath')]
slugs = re.findall(r"slug: '([^']+)'", source_text)
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

def schema_for(count):
    return {'type':'json_schema','json_schema':{'name':'localized_buyer_path_chunk','strict':True,'schema':{'type':'object','properties':{'paths':{'type':'array','items':path_schema}},'required':['paths'],'additionalProperties':False}}}

system = """You are a senior website localization editor specializing in China sourcing content. Translate only the requested Buyer Paths from the supplied TypeScript library into the target language. Preserve all confirmed facts, Sourcing Ally, 5%, $150 per day, route slugs, and linked-route structure. Do not add claims. Use natural professional website language. Keep every slug unchanged and preserve the exact stage, risk, checklist, and next-link-label count. Return only JSON matching the schema."""

localized = {}
for code, target in TARGETS.items():
    translated = []
    for chunk in (slugs[:3], slugs[3:]):
        prompt = f'Target language and register: {target}.\n\nTranslate only these path slugs: {chunk}.\n\nSource TypeScript library:\n{source_text}'
        last_error = None
        for attempt in range(3):
            try:
                response = client.chat.completions.create(
                    model='gpt-5-mini',
                    messages=[{'role':'system','content':system},{'role':'user','content':prompt}],
                    response_format=schema_for(len(chunk)),
                    max_completion_tokens=8000,
                )
                result = json.loads(response.choices[0].message.content)
                if [item['slug'] for item in result['paths']] != chunk:
                    raise RuntimeError(f'{code}: expected {chunk}, got {[item["slug"] for item in result["paths"]]}')
                for path in result['paths']:
                    if len(path['stages']) != 4 or len(path['risks']) != 3 or len(path['checklist']) != 6 or len(path['nextLabels']) != 3:
                        raise RuntimeError(f'{code}/{path["slug"]}: structure mismatch')
                translated.extend(result['paths'])
                print(f'Generated {code}: {", ".join(chunk)}')
                break
            except Exception as exc:
                last_error = exc
                time.sleep(3 * (attempt + 1))
        else:
            raise RuntimeError(f'{code}/{chunk} failed after retries: {last_error}')
    localized[code] = {'paths': translated}

OUT.write_text('export const buyerPathLocales = ' + json.dumps(localized, ensure_ascii=False, indent=2) + ' as const;\n', encoding='utf-8')
print(f'Wrote {OUT}')
