import concurrent.futures
import json
from pathlib import Path

from openai import OpenAI

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "src/data/operational-guides.ts"

PAGES = {
    "shippingReadiness": {
        "metaTitle": "Shipping Readiness for China Orders | Sourcing Ally",
        "metaDescription": "Prepare a China order for handover by connecting the product reference, packaging, commercial information, delivery terms, timing, and forwarder questions.",
        "eyebrow": "SHIPPING READINESS GUIDE",
        "title": "Before goods leave the factory, make the handover question clear.",
        "lede": "Shipping readiness is not only booking transport. It is the point where the approved product, finished quantity, packaging, documents, delivery terms, timing, and destination questions need to make sense together.",
        "situationsTitle": "When this guide is useful",
        "situations": [
            {"title": "Finished goods are getting close", "text": "You need to connect the final product, quantity, carton information, quality status, and collection timing before a forwarder is asked to arrange a handover."},
            {"title": "Several people are handling different pieces", "text": "The supplier, buyer, forwarder, importer, warehouse, or packaging contact may each hold part of the information. A shared handover record reduces avoidable uncertainty."},
            {"title": "The delivery term or destination is unclear", "text": "Before cargo moves, the buyer should know which named place and delivery term are being used, who is arranging which step, and which questions still need the forwarder or importer to answer."}
        ],
        "evidenceTitle": "Create one usable shipment handover record",
        "evidenceIntro": "A useful handover record does not replace freight, customs, insurance, or legal advice. It gives the people responsible for those tasks a clearer starting point and exposes what still needs to be confirmed.",
        "evidence": [
            {"number": "01", "title": "Freeze the product and quantity reference", "text": "State the current product version, finished quantity, variations, labels, accessories, approved packaging, and any points that still affect whether goods are ready to hand over."},
            {"number": "02", "title": "Make packaging and cargo information visible", "text": "Ask for the final package count, carton dimensions, gross and net weight, shipping marks, pallet or loading information where relevant, and photos when they help resolve a practical question."},
            {"number": "03", "title": "Name the delivery term and place", "text": "Record the agreed trade term, named place or port, and version where applicable. Do not assume that a short trade-term label explains every payment, document, title, insurance, customs, or destination obligation."},
            {"number": "04", "title": "Align commercial and transport information", "text": "The commercial invoice, packing details, product description, quantities, and shipment instructions should refer to the same goods. Inconsistencies should be clarified before documents or cargo are released."},
            {"number": "05", "title": "Confirm the open questions with the responsible parties", "text": "A chosen forwarder and the importer should confirm route, collection, required information, destination requirements, insurance choices, and clearance responsibilities for the actual shipment."}
        ],
        "limitsTitle": "What shipping readiness does not decide",
        "limits": [
            {"title": "A trade term is not a complete shipping plan", "text": "Trade terms allocate particular delivery tasks, costs, and risks, but they do not settle every contract issue, payment detail, document requirement, customs obligation, or dispute question."},
            {"title": "A document list changes by product and destination", "text": "Commercial and transport documents can be common, while certificates, labels, import permissions, testing, declarations, duties, and clearance requirements depend on the goods and destination."},
            {"title": "Readiness is not a delivery guarantee", "text": "A clear handover record can reduce uncertainty, but it cannot guarantee a carrier schedule, customs outcome, insurance claim, destination clearance, cost, damage-free transit, or delivery date."}
        ],
        "prepareTitle": "Prepare this before asking for a shipment handover",
        "prepare": [
            "The approved product and packaging reference, including variations and labels",
            "Finished quantity, package count, carton dimensions, and gross and net weight when available",
            "The agreed delivery term, named place, and the parties responsible for arranging transport",
            "Commercial invoice and packing information that match the actual goods",
            "Forwarder and importer contact details plus the destination questions that need confirmation"
        ],
        "routesTitle": "Connect shipping with the decisions before it",
        "routes": [
            {"href": "/quality-control-plan/", "title": "Quality-control planning", "text": "Connect shipment timing with the product and packaging checks that should be defined before goods are released.", "label": "Plan quality control"},
            {"href": "/services/packaging/", "title": "Packaging coordination", "text": "Treat cartons, labels, inserts, packing method, and shipping marks as part of the product handover rather than an afterthought.", "label": "Explore packaging"},
            {"href": "/blog/freight-forwarder-guide/", "title": "Freight forwarder guide", "text": "Use the Journal guide to prepare questions for a forwarder without confusing logistics support with destination-specific advice.", "label": "Read the Journal guide"}
        ],
        "ctaTitle": "Define the handover question before you ask the cargo to move.",
        "ctaText": "A short project brief can make the product, package, timing, and open logistics questions visible before the next operational commitment.",
        "ctaLabel": "Build a project brief"
    },
    "chinaBusinessTravel": {
        "metaTitle": "China Business Travel and Factory Visit Planning | Sourcing Ally",
        "metaDescription": "Plan a purposeful China factory trip by connecting the visit question, supplier meetings, travel route, product evidence, local practicalities, and follow-up decisions.",
        "eyebrow": "CHINA BUSINESS TRAVEL GUIDE",
        "title": "A China factory trip is stronger when every day has a decision behind it.",
        "lede": "A sourcing trip can make a supplier conversation more concrete, but only if the right meetings, questions, product references, route, and follow-up plan are prepared before the travel day begins.",
        "situationsTitle": "When this guide is useful",
        "situations": [
            {"title": "You want to meet suppliers in person", "text": "A factory meeting is most useful when you know why each supplier is on the route, what needs to be observed, and what decision the meeting should help you make."},
            {"title": "Your trip has more than one city or factory", "text": "Shenzhen, Guangzhou, Foshan, Dongguan, Zhongshan, Huizhou, Yiwu, and other sourcing areas can involve real travel time. A route should be based on confirmed locations and meeting priorities, not only a map."},
            {"title": "You need help making the visit practical", "text": "Language support, factory addresses, meeting timing, product context, and a record of open questions can make the day more useful without turning an observation into a guarantee."}
        ],
        "evidenceTitle": "Build the trip around evidence and follow-up",
        "evidenceIntro": "The goal is not to visit as many places as possible. It is to use limited travel time to answer the questions that matter for supplier selection, samples, production, quality, packaging, or the next commercial decision.",
        "evidence": [
            {"number": "01", "title": "Define the decision behind each visit", "text": "State whether a meeting is about supplier identity, product capability, sample review, materials, production flow, packaging, quality questions, or a specific unresolved issue."},
            {"number": "02", "title": "Confirm the exact meeting plan", "text": "Before setting the route, confirm the factory address, contact, date, meeting duration, attendees, language needs, product version, and whether the relevant people and areas will be available."},
            {"number": "03", "title": "Travel with the right product evidence", "text": "Bring or share the current brief, sample, drawings, photos, material notes, measurements, packaging points, and a short agenda so the visit refers to the same product version as the written discussion."},
            {"number": "04", "title": "Verify travel and entry details independently", "text": "Entry, transit, accommodation, carrier rules, registration, payment access, telecommunications, and local travel conditions can change. Confirm your own requirements through relevant official sources, your carrier, accommodation, and the applicable embassy or consulate before departure."},
            {"number": "05", "title": "Record the next decision after every meeting", "text": "Capture what was observed, which questions were answered, what remained unclear, and whether the supplier should move to a sample, quotation revision, another check, trial order, or no further step."}
        ],
        "limitsTitle": "What factory travel support does not provide",
        "limits": [
            {"title": "It is not immigration or travel advice", "text": "Sourcing Ally cannot decide entry eligibility, visa or transit requirements, registration duties, security choices, insurance, or traveller-specific obligations. These must be verified by the traveller through appropriate official and professional channels."},
            {"title": "A visit is an observation, not a supplier guarantee", "text": "A meeting or factory observation can document what is seen and discussed on that day. It cannot guarantee future capacity, product quality, delivery, business status, or the actions of other parties."},
            {"title": "Independent travel support needs an agreed scope", "text": "When a client orders directly from a factory rather than through Sourcing Ally, independent factory travel support is quoted at US$150 per day. The itinerary, locations, language needs, tasks, expenses, and deliverables should be agreed before travel."}
        ],
        "prepareTitle": "Prepare this before a China sourcing trip",
        "prepare": [
            "The purpose and decision question for each supplier or factory meeting",
            "Confirmed addresses, contacts, meeting times, attendees, and realistic travel time between locations",
            "The product brief, sample, drawings, photos, measurements, and packaging points to discuss",
            "Your independently verified entry, transit, accommodation, carrier, payment, connection, and local travel arrangements",
            "A visit agenda and a simple record format for observations, photos, open questions, and next actions"
        ],
        "routesTitle": "Plan the trip in context",
        "routes": [
            {"href": "/factory-visits/", "title": "Factory visit planning", "text": "Use the dedicated guide to decide what a factory visit should observe and what it cannot prove.", "label": "Plan a factory visit"},
            {"href": "/china-route/", "title": "China Route Map", "text": "Explore sourcing locations and turn factory addresses into a more realistic regional route.", "label": "Explore the route map"},
            {"href": "/fees-and-scope/", "title": "Fees and scope", "text": "Review the confirmed US$150 daily rate for independent factory travel support and the scope that should be agreed before travel.", "label": "Review travel scope"}
        ],
        "ctaTitle": "Plan the trip around the question you need China to answer.",
        "ctaText": "A short project brief can identify useful supplier meetings, product context, likely travel areas, language support needs, and the decisions to capture after each visit.",
        "ctaLabel": "Build a project brief"
    }
}

TARGETS = {
    "es": "Spanish for international buyers. Use natural, neutral Latin-American-friendly business language.",
    "pt": "Brazilian Portuguese for international buyers. Use natural, clear business language.",
    "ru": "Russian for international buyers. Use professional, accessible Russian.",
    "tr": "Turkish for international buyers. Use natural, direct business language.",
    "fr": "French for international buyers. Use natural, professional French.",
}


def shape(value):
    if isinstance(value, dict):
        return {key: shape(item) for key, item in value.items()}
    if isinstance(value, list):
        return [shape(item) for item in value]
    return "string"


def hrefs(value):
    if isinstance(value, dict):
        output = []
        for key, item in value.items():
            if key == "href":
                output.append(item)
            output.extend(hrefs(item))
        return output
    if isinstance(value, list):
        return [href for item in value for href in hrefs(item)]
    return []


def translate(task):
    page_key, lang, page = task
    client = OpenAI()
    prompt = f"""Translate the JSON content below into {TARGETS[lang]}.

This is website copy for Sourcing Ally, a Shenzhen-based sourcing agent. Preserve these facts and boundaries exactly:
- Sourcing Ally helps buyers coordinate agreed sourcing, samples, factory checks, quality control, packaging, translation, and travel-support tasks.
- The company does not work with dangerous or military goods.
- Never promise guarantees, legal, customs, visa, compliance, insurance, route, clearance, freight, delivery, or defect-free outcomes.
- This guide is educational. It does not replace advice from the buyer's forwarder, importer, customs broker, insurer, or relevant professional.

Rules:
1. Translate every natural-language string naturally; do not translate URL href values, the numbering strings, or JSON keys.
2. Preserve all uncertainty and limitation language.
3. Preserve meaning and list structure exactly, but use natural language rather than word-for-word phrasing.
4. Return valid JSON only, with the identical object/list/key structure.

JSON:
{json.dumps(page, ensure_ascii=False)}"""
    response = client.chat.completions.create(
        model="gpt-5-mini",
        messages=[
            {"role": "system", "content": "You are an expert website localization editor. Return JSON only."},
            {"role": "user", "content": prompt},
        ],
        max_completion_tokens=7500,
    )
    raw = response.choices[0].message.content.strip()
    if raw.startswith("```"):
        raw = raw.split("\n", 1)[1].rsplit("```", 1)[0]
    result = json.loads(raw)
    if shape(result) != shape(page):
        raise ValueError(f"Structure mismatch: {page_key} / {lang}")
    if hrefs(result) != hrefs(page):
        raise ValueError(f"Href changed: {page_key} / {lang}")
    return page_key, lang, result


def main():
    translations = {"en": PAGES}
    tasks = [(key, lang, page) for key, page in PAGES.items() for lang in TARGETS]
    with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool:
        for page_key, lang, result in pool.map(translate, tasks):
            translations.setdefault(lang, {})[page_key] = result
            print(f"done: {page_key}.{lang}")
    data = json.dumps(translations, ensure_ascii=False, indent=2)
    OUT.write_text(
        "export const operationalGuideLanguages = ['en', 'es', 'pt', 'ru', 'tr', 'fr'] as const;\n"
        "export type OperationalGuideLanguage = (typeof operationalGuideLanguages)[number];\n\n"
        f"export const operationalGuides = {data} as const;\n",
        encoding="utf-8",
    )
    print(f"wrote {OUT}")


if __name__ == "__main__":
    main()
