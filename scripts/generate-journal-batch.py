from pathlib import Path
from datetime import date
import re
from openai import OpenAI

ROOT = Path('/home/ubuntu/sourcingally')
OUT = ROOT / 'src/content/blog'
client = OpenAI()

sources = """
Use these sources only for the specific factual points below. Do not invent quotations, laws, certifications, logistics costs, inspection outcomes, or Sourcing Ally case studies.

1. U.S. International Trade Administration, ‘Know Your Incoterms’ — Incoterms 2020 has 11 rules; it allocates tasks, costs, and risk between buyer and seller. It does not itself settle price, payment timing, ownership transfer, product conformity, delay liability, or disputes. https://www.trade.gov/know-your-incoterms
2. International Chamber of Commerce, ‘Incoterms 2020’ — ICC describes the rules as a way to clarify buyer and seller responsibilities and to allocate cost, risk, and obligations. https://iccwbo.org/business-solutions/incoterms-rules/incoterms-2020/
3. U.S. International Trade Administration, ‘Perform Due Diligence’ — due diligence helps protect a company from problems, loss, and liability and should continue as a business expands. https://www.trade.gov/perform-due-diligence
"""

articles = [
    {
        'slug': 'how-to-compare-chinese-suppliers-beyond-lowest-quote',
        'title': 'How to Compare Chinese Suppliers Beyond the Lowest Quote',
        'description': 'A practical framework for comparing supplier responses, clarifying quote assumptions, and deciding what to verify before an order.',
        'category': 'Supplier sourcing',
        'tags': ['supplier comparison', 'China sourcing', 'RFQ', 'due diligence'],
        'reading': '9 min read',
        'key': 'compare-chinese-suppliers-beyond-lowest-quote',
        'brief': """Write an evidence-led guide for a first-time or growing buyer who has received several different quotes from China. Explain why a quote is a response to an assumption, not proof that the suppliers offered identical things. Build a usable comparison sheet: product version, material/grade, dimensions/tolerances, unit basis, MOQ, tooling or setup, sample cost, packaging, labeling, test/compliance responsibilities, lead time, payment milestones, delivery term, quote validity, exclusions, and open questions. Explain how to compare by written requirement rather than merely price, how to locate a quote that is deceptively incomplete without accusing suppliers of bad faith, and when to pause and request clarification. Include a short ‘what not to conclude from a quote’ section and a written next-step checklist. Tie due diligence to a decision record, without claiming a factory visit guarantees an outcome."""
    },
    {
        'slug': 'factory-visit-checklist-china-what-to-record',
        'title': 'A Factory Visit Checklist for China: What to Record, Not Just What to See',
        'description': 'Use a factory visit to collect decision-ready evidence about a supplier, production process, sample, and next steps.',
        'category': 'Factory visits',
        'tags': ['factory visit', 'supplier verification', 'quality control', 'China sourcing'],
        'reading': '10 min read',
        'key': 'china-factory-visit-checklist-record',
        'brief': """Write a practical field guide for an international buyer planning a factory visit in China, whether attending personally or using local travel support. Start with the point that a visit is not a trophy or a guarantee; it is a way to test named questions. Structure the article around preparation, arrival, observations, records, and post-visit decisions. Cover what the visitor can reasonably record: address and legal/company identity shown, contact people and roles, current product or sample stage, production areas relevant to the item, equipment seen in relation to the claimed process, incoming materials when visible, in-process and final quality checkpoints, packaging flow, traceability or records when available, questions asked, photos permitted, and uncertainties that remain. Explain what cannot be proven by a short visit. Include a concise template for the visit brief and a decision-ready visit report. Do not claim audit certification, legal verification, or supplier approval."""
    },
    {
        'slug': 'incoterms-first-time-china-buyers-what-they-change',
        'title': 'Incoterms for First-Time China Buyers: What They Change—and What They Do Not',
        'description': 'Understand the role of Incoterms in a China purchase: tasks, costs, risk, named places, and the contract questions they do not answer.',
        'category': 'Shipping and logistics',
        'tags': ['Incoterms 2020', 'shipping from China', 'importing', 'freight'],
        'reading': '8 min read',
        'key': 'incoterms-first-time-china-buyers',
        'brief': """Write a careful introductory guide for a buyer importing from China for the first time. Explain that Incoterms are trade terms that allocate tasks, costs, and risk but do not replace the sales contract. Explain why the named place and version matter, with plain-language examples of an EXW, FCA, FOB, CIF, DAP, and DDP conversation—but do not provide a universal recommendation or legal advice. Distinguish sea/inland-waterway terms from rules for any mode of transport at a high level and say buyers should confirm the selected rule and named place with their freight professional and contract advisers. Include a practical pre-payment checklist: exact term, Incoterms 2020, named place, packaging requirements, export documents, insurance, inspection arrangement, payment milestone, and who is handling destination formalities. Link the key factual statements to the official ICC and ITA sources in a References section."""
    },
]

system = """You are an experienced trade-education editor writing for Sourcing Ally, a Shenzhen-based sourcing partner. Produce a complete, useful, original article in natural professional English. The writing should sound like a careful human editor: concrete, structured, occasionally candid about ambiguity, and not promotional in every paragraph. Do not try to evade AI detection, imitate a named writer, insert deliberate errors, or claim personal experience you do not have. Never fabricate client results, years of experience, certifications, warehouse capability, legal conclusions, customs outcomes, or specific supplier facts. Keep the guidance general, explain limits, and avoid legal, customs, tax, or safety advice. Use clear H2/H3 headings, short paragraphs, and at least one actionable checklist. Do not include a frontmatter block or an H1 title; the publishing workflow adds them. End with a brief ‘When to ask for local support’ section that accurately describes a sourcing partner’s role without promises. End with a ‘References’ section containing only the official source links actually used. Aim for 1,300–1,700 words."""

for item in articles:
    prompt = f"""{sources}\n\nArticle title: {item['title']}\n\nAssignment:\n{item['brief']}\n\nReturn only the finished Markdown article body."""
    response = client.chat.completions.create(
        model='gpt-5',
        messages=[{'role': 'system', 'content': system}, {'role': 'user', 'content': prompt}],
        max_completion_tokens=5000,
        extra_body={'reasoning': {'effort': 'medium'}},
    )
    body = (response.choices[0].message.content or '').strip()
    body = re.sub(r'^#\s+.*?\n+', '', body, count=1)
    words = len(re.findall(r"\b[\w’'-]+\b", body))
    if words < 1000:
        raise RuntimeError(f"Draft for {item['slug']} is too short: {words} words")
    frontmatter = f"""---
title: \"{item['title']}\"
description: \"{item['description']}\"
pubDate: {date.today().isoformat()}
author: \"Sourcing Ally\"
updatedDate: {date.today().isoformat()}
lang: en
category: \"{item['category']}\"
tags: {item['tags']}
readingTime: \"{item['reading']}\"
translationKey: \"{item['key']}\"
featured: false
draft: false
---

"""
    path = OUT / f"{item['slug']}.md"
    path.write_text(frontmatter + body + '\n', encoding='utf-8')
    print(f"{path.name}: {words} words")
