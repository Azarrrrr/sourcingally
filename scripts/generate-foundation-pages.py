#!/usr/bin/env python3
import json
import os
from pathlib import Path
import requests

ROOT = Path('/home/ubuntu/sourcingally')
OUT = ROOT / 'src/data/foundation-pages.ts'

english = {
  "howWeWork": {
    "metaTitle": "How Sourcing Ally Works | China sourcing process",
    "metaDescription": "See how Sourcing Ally turns a product brief into a documented supplier, sample, quality, packaging, and shipment-readiness process.",
    "eyebrow": "A practical working model",
    "title": "One project. A visible sequence of decisions.",
    "lede": "Sourcing Ally works as an on-the-ground partner in Shenzhen. The work starts with the question you need answered now, then moves through the agreed evidence, actions, and next decisions.",
    "intro": "A sourcing project is rarely one task. A supplier quote can affect the sample. The sample can affect packaging. Packaging can affect a quality check and the shipping handover. Our role is to make those connections visible, not to promise that every outcome can be predicted in advance.",
    "processTitle": "The working sequence",
    "processIntro": "The sequence changes with the product and order stage, but these are the questions we normally make visible.",
    "stages": [
      {"number": "01", "title": "Clarify the brief", "text": "We start with the product, quantity, target market, timing, budget context, and the decision you need to make. If a requirement is still open, we label it as open instead of treating it as final."},
      {"number": "02", "title": "Find or assess options", "text": "For supplier work, we compare relevant responses against the same product version and stated assumptions. A low number alone is not treated as a complete answer."},
      {"number": "03", "title": "Use evidence before commitment", "text": "Depending on the project, evidence can include supplier information, a sample, a factory visit, product photos, measurements, packaging details, or a defined quality check."},
      {"number": "04", "title": "Keep the record connected", "text": "We keep the approved product version, open questions, changes, and next owner visible. This is especially important when several suppliers, packaging elements, or logistics steps are involved."},
      {"number": "05", "title": "Prepare the next handover", "text": "Before production, inspection, or cargo movement, we help make the relevant requirements, timing, packing, communication, and document questions visible to the right people."}
    ],
    "boundariesTitle": "What this way of working does—and does not—mean",
    "boundariesIntro": "The scope is agreed for each project. Local support provides useful evidence and coordination; it is not a blanket guarantee about a supplier, future production result, law, customs clearance, or commercial outcome.",
    "boundaries": [
      {"title": "We work from an agreed question", "text": "Examples include finding supplier options, checking a sample, visiting a factory, coordinating a packaging detail, or making a quality requirement clearer."},
      {"title": "We make observations and records clear", "text": "Where a visit or check is part of the scope, the useful result is what was observed, what was not observed, and what remains open."},
      {"title": "The buyer keeps the commercial decision", "text": "You decide which supplier, product version, price, order, shipment, or next action to approve. We provide agreed support and clearer information for that decision."}
    ],
    "routeTitle": "Choose the right starting point",
    "routes": [
      {"title": "I have a product idea", "text": "Turn the idea, quantity, target market, and unknowns into a supplier-ready starting brief.", "href": "/start-project/", "label": "Build a project brief"},
      {"title": "I have a supplier or order already", "text": "Identify the current gap: supplier comparison, sample, factory question, quality check, packaging, or next handover.", "href": "/service-matcher/", "label": "Use the Service Matcher"},
      {"title": "I need to visit China", "text": "Connect cities, factories, travel timing, and the evidence you want to collect during the trip.", "href": "/china-route/", "label": "Explore the China Route Map"}
    ],
    "ctaTitle": "Start with the decision in front of you.",
    "ctaText": "A short, structured brief is enough to start a useful conversation. You do not need to have every detail finished before we can identify what comes next.",
    "ctaLabel": "Start a project"
  },
  "feesAndScope": {
    "metaTitle": "Sourcing Ally fees and scope | China sourcing support",
    "metaDescription": "Understand Sourcing Ally’s confirmed 5% minimum sourcing fee, independent factory travel support at $150 per day, and the project scope that should be agreed in writing.",
    "eyebrow": "Clear scope before work starts",
    "title": "Pricing works best when the task and responsibility are visible.",
    "lede": "Sourcing Ally does not use a one-size-fits-all promise for every product or order. The scope is agreed around the work you need, the evidence required, the location, timing, and whether you order through us.",
    "intro": "Before starting, we discuss the project question, deliverables, timing, communication route, and what is outside the agreed work. This helps prevent a supplier search, factory visit, quality check, packaging coordination, or travel day from being treated as an undefined service.",
    "modelsTitle": "Two confirmed starting points",
    "models": [
      {"title": "Orders placed through Sourcing Ally", "price": "Minimum 5% of the order value", "text": "When you order through Sourcing Ally, the sourcing service fee starts at a minimum of 5% of the order value. The practical scope still needs to be agreed for the project."},
      {"title": "Independent factory travel support", "price": "$150 per day", "text": "If you choose to order directly from a factory and need independent factory travel support, the confirmed rate is $150 per day. Travel timing, location, purpose, and any additional project requirements should be agreed before the visit."}
    ],
    "scopeTitle": "What we can agree to support",
    "scopeIntro": "The exact combination depends on the project. Typical agreed tasks can include the following.",
    "scopeItems": [
      {"title": "Supplier and product work", "text": "Supplier research, product discussions, quote comparison, sample coordination, and clearer communication around requirements."},
      {"title": "On-the-ground checks", "text": "Factory visits when needed, sample checks, product-specific quality checks, production follow-up, and observations tied to the agreed question."},
      {"title": "Packaging and communication", "text": "Packaging coordination, label or artwork follow-up, and translation or communication support with Chinese suppliers."},
      {"title": "Travel support", "text": "Factory travel support in Shenzhen and nearby manufacturing areas, with farther travel possible when the project requires it and the plan is agreed."}
    ],
    "limitsTitle": "What should be agreed before a project starts",
    "limits": [
      {"title": "The product and current decision", "text": "We need to know what is being sourced or checked, which version is current, and what decision the work should help you make."},
      {"title": "The evidence and deliverable", "text": "For example, a supplier comparison, visit observations, a sample review, a quality check scope, or a travel itinerary should be described clearly."},
      {"title": "Timing, location, and handovers", "text": "Factory availability, travel distance, production dates, inspection timing, and freight handovers can affect what is realistic."},
      {"title": "Limits of the work", "text": "No general guide, site visit, sample, or quality check can guarantee future production, a supplier’s financial condition, legal compliance, customs clearance, or a commercial outcome."}
    ],
    "relatedTitle": "Explore the scope before you commit",
    "related": [
      {"title": "See every service area", "text": "Review supplier sourcing, samples, factory checks, quality control, packaging, and communication support.", "href": "/services/", "label": "Explore services"},
      {"title": "Match the task to the support", "text": "Use a short decision tool to identify which service area fits your current project stage.", "href": "/service-matcher/", "label": "Use the Service Matcher"},
      {"title": "Plan a factory or China trip", "text": "See how an on-the-ground visit can be connected to a defined product, supplier, and evidence question.", "href": "/china-route/", "label": "Explore China routes"}
    ],
    "ctaTitle": "Tell us what you need to decide next.",
    "ctaText": "Share the product, order stage, location, timing, and the support you are considering. We can then discuss an accurate scope rather than forcing your project into a generic package.",
    "ctaLabel": "Build a project brief"
  }
}

languages = {
    'es': 'natural, professional Latin American Spanish',
    'pt': 'natural, professional Brazilian Portuguese',
    'ru': 'natural, professional Russian for international buyers',
    'tr': 'natural, professional Turkish',
    'fr': 'natural, professional French for international buyers',
}

def translate(lang, language_name):
    prompt = f'''Translate the following structured Sourcing Ally website content into {language_name}.

Return only valid JSON. Preserve the exact object shape, every key, every array length, every numeric fact, and every href value. Translate all human-visible strings naturally, not word for word. Do not leave English words except the brand name “Sourcing Ally”, “WhatsApp”, and URL values.

Critical facts that must remain exact:
- Sourcing Ally is based in Shenzhen.
- Services are scoped and agreed per project.
- When an order is placed through Sourcing Ally, the sourcing service fee starts at a minimum of 5% of order value.
- Independent factory travel support when the buyer orders directly from a factory is $150 per day.
- Do not invent certifications, testimonials, guarantees, legal advice, customs promises, supplier claims, or outcomes.
- Keep clear limits: no visit, sample, guide, or check guarantees future production, legal compliance, customs clearance, financial condition, or a commercial outcome.

Source JSON:
{json.dumps(english, ensure_ascii=False)}
'''
    payload = {
        'model': 'gpt-5-mini',
        'messages': [
            {'role': 'system', 'content': 'You are an exacting multilingual website editor. Return JSON only.'},
            {'role': 'user', 'content': prompt},
        ],
        'max_completion_tokens': 16000,
        'response_format': {'type': 'json_object'},
    }
    response = requests.post(
        os.environ['OPENAI_API_BASE'].rstrip('/') + '/chat/completions',
        headers={'Authorization': f"Bearer {os.environ['OPENAI_API_KEY']}", 'Content-Type': 'application/json'},
        json=payload,
        timeout=240,
    )
    response.raise_for_status()
    data = json.loads(response.json()['choices'][0]['message']['content'])
    for page in ('howWeWork', 'feesAndScope'):
        if page not in data:
            raise RuntimeError(f'Missing {page} in {lang} translation')
    for route in data['howWeWork']['routes']:
        if not route['href'].startswith('/'):
            raise RuntimeError(f'Changed route in {lang}')
    for route in data['feesAndScope']['related']:
        if not route['href'].startswith('/'):
            raise RuntimeError(f'Changed route in {lang}')
    return data

CACHE = ROOT / 'tmp/foundation-page-locales'
CACHE.mkdir(parents=True, exist_ok=True)
all_pages = {'en': english}
for code, language in languages.items():
    cache_file = CACHE / f'{code}.json'
    if cache_file.exists():
        all_pages[code] = json.loads(cache_file.read_text(encoding='utf-8'))
        print(f'Reused {code}')
    else:
        all_pages[code] = translate(code, language)
        cache_file.write_text(json.dumps(all_pages[code], ensure_ascii=False), encoding='utf-8')
        print(f'Completed {code}')

content = "export const foundationPages = " + json.dumps(all_pages, ensure_ascii=False, indent=2) + " as const;\n\nexport type FoundationLanguage = keyof typeof foundationPages;\n"
OUT.write_text(content, encoding='utf-8')
print(OUT)
