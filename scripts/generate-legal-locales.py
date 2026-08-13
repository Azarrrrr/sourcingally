from pathlib import Path
import json
from openai import OpenAI

ROOT = Path('/home/ubuntu/sourcingally')
OUT = ROOT / 'src/data/legal-locales.ts'
client = OpenAI()

english = {
    'privacy': {
        'title': 'Privacy Policy | Sourcing Ally',
        'description': 'How Sourcing Ally approaches privacy and contact information.',
        'eyebrow': 'Website policy',
        'heading': 'Privacy Policy',
        'reviewed': 'Last reviewed: 13 August 2026',
        'intro': 'This page explains the current privacy approach for the Sourcing Ally website. It is written for the present website configuration, where visitors can contact Sourcing Ally by email or WhatsApp. It should be reviewed again if forms, analytics, advertising pixels, newsletters, accounts, or other data-collection tools are added.',
        'sections': [
            {'heading': 'Information you choose to send', 'body': 'If you contact Sourcing Ally by email or WhatsApp, you may choose to share information such as your name, contact details, product requirements, quantities, destination, timing, files, or questions. Sourcing Ally uses that information to respond to the enquiry and discuss the requested sourcing work.'},
            {'heading': 'Website data', 'body': 'This website is a static Astro site. No account or customer portal is provided by this version. The final hosting, analytics, cookie, and security configuration should be checked before launch so this page accurately describes the deployed services.'},
            {'heading': 'Third-party channels', 'body': 'Email and WhatsApp are third-party communication channels. Their own privacy policies and data practices may apply when you use them. Do not send confidential documents or sensitive personal information until you understand the channel and have agreed how the information should be handled.'},
            {'heading': 'Retention and requests', 'body': 'Sourcing Ally should retain enquiry information only for as long as reasonably necessary to respond, manage an agreed project, maintain business records, or meet applicable obligations. If you have a privacy question about an enquiry, contact sourcingally@gmail.com.'},
            {'heading': 'Changes', 'body': 'This page may be updated when the website, communication channels, hosting, analytics, or legal requirements change. The last-reviewed date should be updated after a material review.'},
        ],
    },
    'terms': {
        'title': 'Terms of Use | Sourcing Ally',
        'description': 'Terms for using the Sourcing Ally website and educational content.',
        'eyebrow': 'Website policy',
        'heading': 'Terms of Use',
        'reviewed': 'Last reviewed: 13 August 2026',
        'intro': 'By using this website, you acknowledge that its pages provide general information about sourcing and importing from China. Reading the website does not create a sourcing, agency, advisory, legal, customs, tax, testing, or other professional relationship.',
        'sections': [
            {'heading': 'Educational content', 'body': 'Guides are written to help visitors ask better questions. Product, city, shipping, compliance, currency, holiday, and legal topics can change and may depend on the destination market, product, importer, and current rules. Check current requirements with an appropriately qualified professional before making a real transaction.'},
            {'heading': 'Project discussions', 'body': 'Information on this website does not constitute a quotation, guarantee, purchase order, service agreement, or promise that a particular supplier, product, price, timeline, certification, or outcome will be available. Any project scope, fee, responsibility, travel arrangement, or deliverable should be agreed separately.'},
            {'heading': 'Intellectual property', 'body': 'Unless otherwise stated, the written structure, design, branding, and original materials on this website belong to Sourcing Ally or are used with permission. Do not reproduce or republish them without permission.'},
            {'heading': 'External links and channels', 'body': 'The website may link to external sources for education. Sourcing Ally does not control external websites, their availability, or their content. Email and WhatsApp are external communication channels and may have their own terms.'},
            {'heading': 'Updates', 'body': 'Sourcing Ally may update, remove, or reorganize website content. The website should not be treated as a permanent record of a supplier, rule, price, or availability.'},
        ],
    },
    'disclaimer': {
        'title': 'Disclaimer | Sourcing Ally',
        'description': 'Important limits on Sourcing Ally educational and sourcing information.',
        'eyebrow': 'Important information',
        'heading': 'Disclaimer',
        'reviewed': 'Last reviewed: 13 August 2026',
        'intro': 'Sourcing Ally publishes general information to help international buyers understand sourcing, manufacturing, communication, quality, packaging, logistics, and importing questions. The information is not legal, tax, customs, financial, testing, engineering, safety, medical, or other professional advice.',
        'sections': [
            {'heading': 'Product and destination differences', 'body': 'Requirements can change according to the product, materials, intended use, age group, destination country, importer of record, sales channel, transport method, and current government rules. A statement that a product may need a test, label, certificate, or review is not a conclusion that a particular requirement applies to your shipment.'},
            {'heading': 'Supplier and factory information', 'body': 'Educational guidance about factories, cities, markets, suppliers, samples, inspections, or production does not guarantee a supplier’s identity, capacity, quality, ethics, availability, pricing, or future performance. Conduct appropriate due diligence for the actual project.'},
            {'heading': 'Costs and timelines', 'body': 'Examples of costs, fees, quantities, lead times, routes, or schedules are illustrative unless expressly confirmed in a separate project agreement. Sourcing Ally’s confirmed public fee wording is a minimum 5% sourcing service fee when a client orders through Sourcing Ally, and $150 per day for independent factory-travel support when the client does not order through Sourcing Ally. Scope and calculation details should be agreed for the project.'},
            {'heading': 'Professional review', 'body': 'Before placing an order, paying a supplier, shipping goods, or selling a product, obtain current advice from the relevant customs, tax, legal, testing, certification, logistics, or other professional provider for your market.'},
        ],
    },
    'editorial': {
        'title': 'Editorial Policy | Sourcing Ally',
        'description': 'How Sourcing Ally writes, reviews, updates, and limits its China sourcing educational content.',
        'eyebrow': 'Editorial standards',
        'heading': 'Useful information should be clear about what it knows—and what it does not.',
        'reviewed': 'Last reviewed: 13 August 2026',
        'intro': '',
        'sections': [
            {'heading': 'Purpose of the knowledge library', 'body': 'Sourcing Ally publishes services, product, city, sourcing-school, Journal, and Sourcing Questions pages to help international buyers understand common China sourcing decisions. The aim is to give visitors clearer questions, better preparation, and a more useful starting point for a real conversation.'},
            {'heading': 'How content is prepared', 'body': 'Pages combine confirmed Sourcing Ally service information with general educational research and practical sourcing questions. A page should explain the topic in plain language, identify what can change the answer, point to related information, and avoid promising a specific commercial, legal, logistics, testing, or supplier outcome.'},
            {'heading': 'What we do not publish as fact', 'body': 'Sourcing Ally does not publish invented client counts, testimonials, certifications, years of experience, warehouse claims, supplier networks, savings, success rates, guarantees, or case studies. Claims about a specific project should be confirmed before they are published.'},
            {'heading': 'Updates and time-sensitive content', 'body': 'Importing, customs, testing, certification, product safety, currency, transport, and legal requirements can change. Educational pages should carry a review date when the topic may be time-sensitive. Readers should check current information with qualified providers for the actual product, destination, shipment, or transaction.'},
            {'heading': 'Corrections and feedback', 'body': 'If you find an error, need clarification, or believe a page should be updated, contact sourcingally@gmail.com. Sourcing Ally can review the information and amend the page when appropriate.'},
        ],
    },
}

TARGETS = {
    'es': 'Spanish for international buyers; use neutral, natural Latin American business Spanish.',
    'pt': 'Brazilian Portuguese for international buyers; use natural professional Brazilian Portuguese.',
    'ru': 'Russian for international buyers; use clear, natural professional Russian.',
    'tr': 'Turkish for international buyers; use clear, natural professional Turkish.',
    'fr': 'French for international buyers; use natural, professional international French.',
}

schema = {
    'type': 'json_schema',
    'json_schema': {
        'name': 'localized_legal_pages',
        'strict': True,
        'schema': {
            'type': 'object',
            'properties': {
                key: {
                    'type': 'object',
                    'properties': {
                        'title': {'type': 'string'},
                        'description': {'type': 'string'},
                        'eyebrow': {'type': 'string'},
                        'heading': {'type': 'string'},
                        'reviewed': {'type': 'string'},
                        'intro': {'type': 'string'},
                        'sections': {
                            'type': 'array',
                            'items': {
                                'type': 'object',
                                'properties': {'heading': {'type': 'string'}, 'body': {'type': 'string'}},
                                'required': ['heading', 'body'],
                                'additionalProperties': False,
                            },
                        },
                    },
                    'required': ['title', 'description', 'eyebrow', 'heading', 'reviewed', 'intro', 'sections'],
                    'additionalProperties': False,
                }
                for key in english
            },
            'required': list(english.keys()),
            'additionalProperties': False,
        },
    },
}

system = """You are a senior website localization editor. Translate supplied approved English legal/trust content into the requested language. Preserve the exact meaning, proper nouns (Sourcing Ally, Astro, WhatsApp, Shenzhen, China), the 5% fee, $150/day figure, and all limitations. Do not add claims, requirements, legal conclusions, or citations. Use natural professional wording for a public website, not literal syntax. Keep the original page/section structure and preserve the number of sections in each page. Return only JSON matching the requested schema."""

localized = {'en': english}
for code, language_instruction in TARGETS.items():
    response = client.chat.completions.create(
        model='gpt-5-mini',
        messages=[
            {'role': 'system', 'content': system},
            {'role': 'user', 'content': f'Target: {language_instruction}\n\nApproved English source data:\n{json.dumps(english, ensure_ascii=False)}'},
        ],
        response_format=schema,
        max_completion_tokens=10000,
    )
    result = json.loads(response.choices[0].message.content)
    for key, source_page in english.items():
        if len(result[key]['sections']) != len(source_page['sections']):
            raise RuntimeError(f'{code}/{key}: section count mismatch')
        if not all(section['heading'].strip() and section['body'].strip() for section in result[key]['sections']):
            raise RuntimeError(f'{code}/{key}: empty translated section')
    localized[code] = result
    print(f'Generated {code}')

OUT.parent.mkdir(parents=True, exist_ok=True)
OUT.write_text('export const legalLocales = ' + json.dumps(localized, ensure_ascii=False, indent=2) + ' as const;\n', encoding='utf-8')
print(f'Wrote {OUT}')
