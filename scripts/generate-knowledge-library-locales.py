from pathlib import Path
import json
import re
import time
from openai import OpenAI

ROOT = Path('/home/ubuntu/sourcingally')
SOURCE = ROOT / 'src/data/site-data.ts'
OUT = ROOT / 'src/data/knowledge-library-locales.ts'
client = OpenAI()
text = SOURCE.read_text(encoding='utf-8')
sections = ['services', 'products', 'cities', 'guides']
targets = {
    'es': 'neutral, natural Latin American Spanish for international buyers',
    'pt': 'natural professional Brazilian Portuguese for international buyers',
    'ru': 'clear, natural professional Russian for international buyers; use Russian script for Chinese city names and general terms wherever natural',
    'tr': 'clear, natural professional Turkish for international buyers',
    'fr': 'natural professional international French for international buyers',
}

page_schema = {
    'type':'object',
    'properties':{
        'slug':{'type':'string'}, 'shortTitle':{'type':'string'}, 'title':{'type':'string'}, 'summary':{'type':'string'}, 'intro':{'type':'string'},
        'sections':{'type':'array','items':{'type':'object','properties':{'heading':{'type':'string'},'body':{'type':'string'}},'required':['heading','body'],'additionalProperties':False}},
        'questions':{'type':'array','items':{'type':'string'}},
    },
    'required':['slug','shortTitle','title','summary','intro','sections','questions'],
    'additionalProperties':False,
}
schema = {'type':'json_schema','json_schema':{'name':'localized_knowledge_collection','strict':True,'schema':{'type':'object','properties':{'pages':{'type':'array','items':page_schema}},'required':['pages'],'additionalProperties':False}}}
system = """You are a senior website localization editor specializing in China sourcing and international trade content. Translate every visible reader-facing field of the requested collection into the target language. Preserve all confirmed company facts, Sourcing Ally as a brand name, the 5% and $150-per-day terms, exact slugs, and the original factual scope. Do not invent claims, qualifications, or recommendations. Use natural professional website language, never literal code syntax. Preserve the exact page order plus exactly three content sections and three buyer questions per page. Return JSON only matching the schema."""

collections = {}
for section in sections:
    start = text.index(f'export const {section}: KnowledgePage[] =')
    next_positions = [text.find(f'export const {other}:', start + 1) for other in sections]
    ends = [p for p in next_positions if p != -1]
    end = min(ends) if ends else len(text)
    source_chunk = text[start:end]
    slugs = re.findall(r"slug:'([^']+)'", source_chunk)
    if not slugs:
        raise RuntimeError(f'No slugs parsed for {section}')
    collections[section] = {'source':source_chunk, 'slugs':slugs}

all_locales = {}
for code, target in targets.items():
    all_locales[code] = {}
    for collection, info in collections.items():
        prompt = f'Target language and register: {target}.\n\nCollection: {collection}.\n\nSource TypeScript content:\n{info["source"]}'
        last_error = None
        for attempt in range(3):
            try:
                response = client.chat.completions.create(
                    model='gpt-5-mini',
                    messages=[{'role':'system','content':system},{'role':'user','content':prompt}],
                    response_format=schema,
                    max_completion_tokens=16000,
                )
                result = json.loads(response.choices[0].message.content)
                found = [page['slug'] for page in result['pages']]
                if found != info['slugs']:
                    raise RuntimeError(f'{code}/{collection}: expected {info["slugs"]}, received {found}')
                for page in result['pages']:
                    if len(page['sections']) != 3 or len(page['questions']) != 3:
                        raise RuntimeError(f'{code}/{collection}/{page["slug"]}: structure mismatch')
                    if any(not field.strip() for field in [page['shortTitle'], page['title'], page['summary'], page['intro']]):
                        raise RuntimeError(f'{code}/{collection}/{page["slug"]}: blank content')
                all_locales[code][collection] = result['pages']
                print(f'Generated {code}/{collection}: {len(found)} pages')
                break
            except Exception as exc:
                last_error = exc
                time.sleep(4 * (attempt + 1))
        else:
            raise RuntimeError(f'{code}/{collection} failed after retries: {last_error}')

OUT.write_text('export const knowledgeLibraryLocales = ' + json.dumps(all_locales, ensure_ascii=False, indent=2) + ' as const;\n', encoding='utf-8')
print(f'Wrote {OUT}')
