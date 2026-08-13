from pathlib import Path
import json
import re
from openai import OpenAI

ROOT = Path('/home/ubuntu/sourcingally')
SOURCE = ROOT / 'src/data/questions.ts'
OUT = ROOT / 'src/data/questions-locales.ts'
client = OpenAI()
source_text = SOURCE.read_text(encoding='utf-8')
source_text = source_text[source_text.index('export const questionGroups'):source_text.index('export const allQuestions')]
slugs = re.findall(r"slug: '([^']+)'", source_text)
if len(slugs) != 15:
    raise RuntimeError(f'Expected 15 source questions, found {len(slugs)}')

TARGETS = {
    'es': 'neutral, natural Latin American Spanish for international buyers',
    'pt': 'natural professional Brazilian Portuguese for international buyers',
    'ru': 'clear, natural professional Russian for international buyers',
    'tr': 'clear, natural professional Turkish for international buyers',
    'fr': 'natural professional international French for international buyers',
}

schema = {
    'type': 'json_schema',
    'json_schema': {
        'name': 'localized_questions',
        'strict': True,
        'schema': {
            'type': 'object',
            'properties': {
                'groups': {
                    'type': 'array',
                    'items': {
                        'type': 'object',
                        'properties': {
                            'title': {'type': 'string'},
                            'intro': {'type': 'string'},
                            'questions': {
                                'type': 'array',
                                'items': {
                                    'type': 'object',
                                    'properties': {
                                        'slug': {'type': 'string'},
                                        'category': {'type': 'string'},
                                        'question': {'type': 'string'},
                                        'shortAnswer': {'type': 'string'},
                                        'answer': {'type': 'string'},
                                        'relatedLabels': {'type': 'array', 'items': {'type': 'string'}},
                                    },
                                    'required': ['slug', 'category', 'question', 'shortAnswer', 'answer', 'relatedLabels'],
                                    'additionalProperties': False,
                                },
                            },
                        },
                        'required': ['title', 'intro', 'questions'],
                        'additionalProperties': False,
                    },
                },
            },
            'required': ['groups'],
            'additionalProperties': False,
        },
    },
}

system = """You are a senior website localization editor specializing in China sourcing content. Translate every visible reader-facing field in the supplied TypeScript question library into the requested target language. Preserve all confirmed facts exactly, including company name Sourcing Ally, Shenzhen, Chinese city names, 5%, $150 per day, and the scope limitations. Do not add claims, recommendations, or citations. Use natural professional wording, not literal translation. Keep the exact group and question structure, preserve every slug unchanged, and provide a translated related-label string for every related link. Return only structured JSON matching the schema."""

localized = {}
for code, target in TARGETS.items():
    response = client.chat.completions.create(
        model='gpt-5-mini',
        messages=[
            {'role': 'system', 'content': system},
            {'role': 'user', 'content': f'Target language and register: {target}.\n\nSource TypeScript library:\n{source_text}'},
        ],
        response_format=schema,
        max_completion_tokens=10000,
    )
    result = json.loads(response.choices[0].message.content)
    translated = [question for group in result['groups'] for question in group['questions']]
    translated_slugs = [question['slug'] for question in translated]
    if len(result['groups']) != 5 or translated_slugs != slugs:
        raise RuntimeError(f'{code}: unexpected localization structure or slug order')
    for question in translated:
        if not all(question[key].strip() for key in ('category', 'question', 'shortAnswer', 'answer')):
            raise RuntimeError(f'{code}/{question["slug"]}: empty localization')
        if len(question['relatedLabels']) != 2 or not all(label.strip() for label in question['relatedLabels']):
            raise RuntimeError(f'{code}/{question["slug"]}: related-label mismatch')
    localized[code] = result
    print(f'Generated {code}')

OUT.write_text('export const questionLocales = ' + json.dumps(localized, ensure_ascii=False, indent=2) + ' as const;\n', encoding='utf-8')
print(f'Wrote {OUT}')
