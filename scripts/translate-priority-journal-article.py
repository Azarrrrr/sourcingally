#!/usr/bin/env python3
import json
import os
from pathlib import Path
import requests

ROOT = Path('/home/ubuntu/sourcingally')
SOURCE = ROOT / 'src/content/blog/supplier-verification-checklist-guide.md'
source = SOURCE.read_text(encoding='utf-8')
parts = source.split('---', 2)
if len(parts) != 3:
    raise RuntimeError('Unexpected Markdown frontmatter structure')
body = parts[2].strip()

config = {
    'es': {
        'name': 'Spanish (neutral Latin American business Spanish)',
        'reading_time': '10 min de lectura',
        'fallback_category': 'Investigación de proveedores',
        'filename': 'supplier-verification-checklist-guide.es.md',
    },
    'ru': {
        'name': 'Russian (natural professional Russian for international buyers)',
        'reading_time': '10 минут чтения',
        'fallback_category': 'Исследование поставщиков',
        'filename': 'supplier-verification-checklist-guide.ru.md',
    },
}

for lang, settings in config.items():
    prompt = f'''Translate the following Sourcing Ally Journal article into {settings['name']}.

Write natural, human editorial prose. Do not translate word for word. Preserve every limit and qualification: supplier verification is not a guarantee; a factory visit does not guarantee future outcomes; do not invent facts, client stories, certification claims, legal advice, or product results.

Return ONLY valid JSON with these exact keys:
{{"title":"...","description":"...","category":"...","tags":["...","...","...","..."],"body":"..."}}

Requirements:
- Preserve all section structure, numbered items, and the intended meaning.
- Localize headings and link labels naturally.
- In `body`, retain Markdown formatting and internal link URLs exactly as shown. The script will update the `/en/` language prefix afterward.
- The title and description must be in the selected language. Keep the description concise and reader-focused.
- Tags must be four short phrases in the selected language.

English article body:
{body}
'''
    payload = {
        'model': 'gpt-5-mini',
        'messages': [
            {'role': 'system', 'content': 'You are a precise multilingual editor. Return strict JSON only.'},
            {'role': 'user', 'content': prompt},
        ],
        'max_completion_tokens': 12000,
        'response_format': {'type': 'json_object'},
    }
    response = requests.post(
        os.environ['OPENAI_API_BASE'].rstrip('/') + '/chat/completions',
        headers={'Authorization': f"Bearer {os.environ['OPENAI_API_KEY']}", 'Content-Type': 'application/json'},
        json=payload,
        timeout=180,
    )
    response.raise_for_status()
    data = json.loads(response.json()['choices'][0]['message']['content'])
    for key in ('title', 'description', 'category', 'tags', 'body'):
        if key not in data or not data[key]:
            raise RuntimeError(f'Missing translated {key} for {lang}')
    if not isinstance(data['tags'], list) or len(data['tags']) != 4:
        raise RuntimeError(f'Expected four translated tags for {lang}')
    translated_body = data['body'].strip().replace('/en/', f'/{lang}/')
    if len(translated_body) < 1200 or translated_body.count('## ') < 6:
        raise RuntimeError(f'Translation for {lang} appears incomplete')
    output = f'''---
title: {json.dumps(data['title'], ensure_ascii=False)}
description: {json.dumps(data['description'], ensure_ascii=False)}
pubDate: 2026-08-13
author: "Sourcing Ally"
updatedDate: 2026-08-13
lang: {lang}
translationKey: "supplier-verification-checklist-guide"
draft: false
category: {json.dumps(data['category'], ensure_ascii=False)}
tags: {json.dumps(data['tags'], ensure_ascii=False)}
readingTime: {json.dumps(settings['reading_time'], ensure_ascii=False)}
featured: false
---

{translated_body}
'''
    destination = ROOT / 'src/content/blog' / settings['filename']
    destination.write_text(output, encoding='utf-8')
    print(destination)
