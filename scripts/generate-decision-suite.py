import concurrent.futures
import json
from pathlib import Path

from openai import OpenAI

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "src/data/decision-suite.ts"

PAGES = {
    "supplierVerification": {
        "metaTitle": "Verify a Chinese Supplier Before You Pay | Sourcing Ally",
        "metaDescription": "Use a practical evidence path to decide whether a Chinese supplier should move to samples, a factory visit, a trial order, or further questions.",
        "eyebrow": "SUPPLIER DECISION GUIDE",
        "title": "Before a deposit, make the supplier question more specific.",
        "lede": "Supplier verification is not one document or one video call. It is a sequence of checks that helps you decide what evidence you have, what is still unknown, and whether the supplier should move to the next stage.",
        "situationsTitle": "When this guide is useful",
        "situations": [
            {"title": "You have several quotes", "text": "You need to compare answers from different suppliers without treating the lowest number as the full decision."},
            {"title": "You are about to send money", "text": "You need a clearer picture of who is receiving the payment, what product version is being quoted, and what evidence supports the next step."},
            {"title": "The order is customized or important", "text": "A product with special materials, packaging, tooling, a larger value, or a repeat-order plan deserves a more deliberate evidence path."}
        ],
        "evidenceTitle": "Build evidence in layers",
        "evidenceIntro": "The useful question is not simply whether a supplier looks good online. It is whether the identity, product, quotation, communication, and production information make sense together.",
        "evidence": [
            {"number": "01", "title": "Clarify the entity and role", "text": "Ask who you are speaking with, whether the business is a factory, trading company, or another role, and where the relevant production activity takes place."},
            {"number": "02", "title": "Compare the quote with the brief", "text": "Check that materials, dimensions, quantities, packaging, tooling, lead time, payment terms, and stated assumptions refer to the same product version."},
            {"number": "03", "title": "Ask for product-specific evidence", "text": "Use photographs, technical answers, sample discussion, production questions, and relevant documents to test whether the supplier understands your actual requirement."},
            {"number": "04", "title": "Follow inconsistencies", "text": "A changing address, an unexplained price change, vague answers, mismatched product details, or reluctance to clarify a question should lead to another question, not an automatic rejection or approval."},
            {"number": "05", "title": "Choose the next evidence step", "text": "Depending on the project, the right next step can be a sample, a factory visit, a video call, a trial order, or a more detailed written comparison."}
        ],
        "limitsTitle": "What verification does not prove",
        "limits": [
            {"title": "A document is not a future-performance guarantee", "text": "Business information can help identify a company, but it does not guarantee future capacity, quality, financial condition, legal compliance, or delivery."},
            {"title": "A visit is a time-specific observation", "text": "A factory visit can record what is observed on that day. It cannot guarantee every future production run or every subcontracting decision."},
            {"title": "The buyer retains the commercial approval", "text": "You decide whether to pay, order, approve a supplier, or change the project. Sourcing support should provide clearer information for that decision."}
        ],
        "prepareTitle": "Prepare this before you compare suppliers",
        "prepare": ["A product description, photos, drawing, or reference sample", "Target quantity, destination market, and timing", "Known material, dimension, packaging, label, or testing requirements", "The product version that every supplier should quote", "The decision you need to make after receiving the comparison"],
        "routesTitle": "Move to the next useful page",
        "routes": [
            {"href": "/services/supplier-sourcing/", "title": "Supplier sourcing support", "text": "See how a supplier shortlist can be structured around your specific brief.", "label": "Explore supplier sourcing"},
            {"href": "/questions/supplier-verification/", "title": "Supplier verification questions", "text": "Read practical answers before you rely on an online profile or supplier statement.", "label": "Explore questions"},
            {"href": "/blog/supplier-verification-checklist-guide/", "title": "Verification checklist", "text": "Use the Journal guide to prepare an evidence-based comparison before a deposit.", "label": "Read the checklist"}
        ],
        "ctaTitle": "Start with the supplier question you need answered.",
        "ctaText": "A short brief can identify what should be compared, checked, or clarified before the next commitment.",
        "ctaLabel": "Build a project brief"
    },
    "productSamples": {
        "metaTitle": "Product Samples from China: Approval Guide | Sourcing Ally",
        "metaDescription": "Use a practical sample-approval path to define product version, review changes, record feedback, and decide what is ready for production.",
        "eyebrow": "SAMPLE DECISION GUIDE",
        "title": "A sample is useful when it becomes a recorded production decision.",
        "lede": "A sample can show a product, but it can also expose unanswered questions about materials, dimensions, function, color, packaging, and communication. The value comes from turning the review into a clear next instruction.",
        "situationsTitle": "When this guide is useful",
        "situations": [
            {"title": "You are sourcing a new product", "text": "The first sample is the moment to test whether the written brief and supplier understanding are aligned."},
            {"title": "You are changing a product or package", "text": "A revised material, finish, label, insert, artwork, or carton can create a new version that must be reviewed separately."},
            {"title": "You are close to production approval", "text": "Before production starts, the buyer needs to distinguish what is approved, what remains open, and what should be checked later."}
        ],
        "evidenceTitle": "Use the sample as a controlled review point",
        "evidenceIntro": "The sample review should connect the physical item with the written brief, the supplier quotation, and the production handover. A short, specific record is more useful than a general message saying it looks good.",
        "evidence": [
            {"number": "01", "title": "Name the version", "text": "Record the date, supplier, product name, material, color, dimensions, packaging version, and any revision number so everyone discusses the same item."},
            {"number": "02", "title": "Check the requirements that matter", "text": "Review function, appearance, measurements, materials, finish, labels, packaging, and any product-specific requirement that affects the buyer or end user."},
            {"number": "03", "title": "Separate defects from choices", "text": "A defect, an unfinished decision, and a preference are different. Mark which points must change, which are accepted, and which need a written decision."},
            {"number": "04", "title": "Create a revision record", "text": "Use photos, annotations, measurements, or a numbered list so requested changes do not become an ambiguous chat message."},
            {"number": "05", "title": "Define the production reference", "text": "If you approve a version, state what the approval covers and which elements—such as packaging, components, labels, or quality checkpoints—still require separate confirmation."}
        ],
        "limitsTitle": "What sample approval does not prove",
        "limits": [
            {"title": "One sample may not represent mass production", "text": "A handmade, engineering, or pre-production sample can differ from later production. Ask which version you are reviewing and how the factory will control consistency."},
            {"title": "Approval does not replace compliance work", "text": "Destination-market testing, labels, importer obligations, legal review, and specialist technical assessment remain separate responsibilities."},
            {"title": "A photo is not a full specification", "text": "A sample photo can support a decision, but dimensions, material details, tolerances, labels, packaging, and other requirements should still be recorded clearly."}
        ],
        "prepareTitle": "Prepare this before a sample review",
        "prepare": ["The supplier quote and the exact product version being reviewed", "Reference images, drawings, measurements, colors, and material notes", "The destination market and any known label or testing questions", "A review sheet for must-change points, accepted points, and open questions", "The production decision you want the sample to support"],
        "routesTitle": "Move to the next useful page",
        "routes": [
            {"href": "/services/sample-sourcing/", "title": "Sample sourcing support", "text": "Understand how samples can be connected to supplier questions and a clearer approval record.", "label": "Explore samples"},
            {"href": "/start-project/", "title": "Project Brief Builder", "text": "Turn an idea, quantity, and unknowns into a structured starting brief before requesting samples.", "label": "Build your brief"},
            {"href": "/quality-control-plan/", "title": "Quality-control planning", "text": "Connect an approved product version with the checks that should matter during production and before shipment.", "label": "Plan quality control"}
        ],
        "ctaTitle": "Make the next sample review easier to act on.",
        "ctaText": "Share the product version, the supplier’s sample, and the decision you need to make. The next step can then be defined more clearly.",
        "ctaLabel": "Build a project brief"
    },
    "factoryVisits": {
        "metaTitle": "Factory Visits in China: Buyer Planning Guide | Sourcing Ally",
        "metaDescription": "Decide when a factory visit is useful, what to prepare, what to observe, and what a factory visit cannot guarantee.",
        "eyebrow": "FACTORY VISIT GUIDE",
        "title": "A factory visit works best when it is built around a decision, not curiosity.",
        "lede": "A visit can make a supplier conversation more concrete. It is most useful when the buyer knows what needs to be observed, which questions must be answered, and what decision the visit should inform.",
        "situationsTitle": "When a visit can be useful",
        "situations": [
            {"title": "The product or order has meaningful stakes", "text": "Customization, technical process, higher value, repeat-order plans, or unclear production claims can justify more direct evidence."},
            {"title": "Supplier information needs to be tested", "text": "A visit can help clarify the production address, product focus, production flow, equipment, materials, communication, and the questions raised by the buyer."},
            {"title": "You are travelling in China", "text": "A travel day is more valuable when meetings, questions, product versions, factory addresses, and the reporting plan are agreed before the itinerary is set."}
        ],
        "evidenceTitle": "Plan the visit around evidence",
        "evidenceIntro": "The most useful visit has an agenda. It should connect your product requirements with the physical production context and the decisions you will make afterward.",
        "evidence": [
            {"number": "01", "title": "Set the visit question", "text": "Decide whether the visit is mainly about supplier identity, product capability, sample discussion, process flow, materials, packaging, quality checks, or another defined issue."},
            {"number": "02", "title": "Confirm the practical plan", "text": "Check the exact address, contact, date, visitor requirements, travel time, product version, and whether the right people and relevant production areas will be available."},
            {"number": "03", "title": "Observe against the brief", "text": "Use your agreed product, sample, material, packaging, quality, and capacity questions to guide what is seen and what needs clarification."},
            {"number": "04", "title": "Record what was and was not observed", "text": "Useful records may include photographs, notes, answers, production observations, open questions, and points that require documents or follow-up later."},
            {"number": "05", "title": "Make the next decision visible", "text": "After the visit, decide whether the supplier moves to a sample, a revised quotation, a trial order, another check, or should not progress."}
        ],
        "limitsTitle": "What a factory visit does not prove",
        "limits": [
            {"title": "A visit is an observation at one point in time", "text": "It does not guarantee future capacity, stable staffing, materials, production quality, or delivery performance."},
            {"title": "A facility is not the whole supply chain", "text": "A supplier may use outsourced components, subcontractors, or other locations. Ask which work happens where and how the relevant product is controlled."},
            {"title": "A visit does not replace contracts or compliance work", "text": "Commercial terms, product testing, destination-market rules, customs obligations, and legal issues must still be addressed through the appropriate process."}
        ],
        "prepareTitle": "Prepare this before a factory visit",
        "prepare": ["The product version, sample, or specification to discuss", "A short factory-visit agenda with the questions that matter most", "Exact factory address, contact, meeting time, and travel route", "The people who should attend and the language support needed", "The record you want after the visit: notes, photos, open questions, or a next-step decision"],
        "routesTitle": "Move to the next useful page",
        "routes": [
            {"href": "/services/supplier-factory-checks/", "title": "Factory and supplier checks", "text": "See how a defined on-the-ground check can be scoped around a specific question.", "label": "Explore factory checks"},
            {"href": "/china-route/", "title": "China Route Map", "text": "Connect factory locations, regional travel, and a practical sourcing itinerary.", "label": "Explore the route map"},
            {"href": "/fees-and-scope/", "title": "Fees and scope", "text": "Review the confirmed independent factory travel rate and the project details that should be agreed before travel.", "label": "Review the scope"}
        ],
        "ctaTitle": "Plan the visit around the question that matters.",
        "ctaText": "A structured brief makes it easier to decide whether a factory visit is useful and what the day should achieve.",
        "ctaLabel": "Build a project brief"
    },
    "qualityControlPlan": {
        "metaTitle": "Quality Control Plan for China Orders | Sourcing Ally",
        "metaDescription": "Create a practical quality-control plan before production and shipment by defining the approved reference, checkpoints, defects, packaging, and decisions.",
        "eyebrow": "QUALITY-CONTROL GUIDE",
        "title": "Quality control starts before the factory makes the final product.",
        "lede": "A useful quality check compares what is observed with a known reference. The clearer the product version, requirements, defect priorities, packaging, and decision process, the more useful a later check can be.",
        "situationsTitle": "When this guide is useful",
        "situations": [
            {"title": "You are moving from sample to production", "text": "The approved sample and written product details should become the reference for materials, dimensions, function, appearance, labels, and packaging."},
            {"title": "You have a product with visible or functional risk", "text": "Fragile items, electronics, textiles, custom products, multi-part products, and retail packaging often need more specific checkpoints."},
            {"title": "You are approaching shipment", "text": "Before goods leave the factory, the buyer should know what is being checked, how findings are recorded, and who decides the next action."}
        ],
        "evidenceTitle": "Build the plan before the check",
        "evidenceIntro": "Quality control is more useful when the supplier, buyer, and on-the-ground support are comparing the same product version and the same priority requirements.",
        "evidence": [
            {"number": "01", "title": "Define the approved reference", "text": "Connect the current product version with drawings, photos, sample, measurements, material notes, colors, labels, and packaging requirements."},
            {"number": "02", "title": "Separate critical requirements from preferences", "text": "Identify the points that affect safety, function, regulatory questions, customer use, major appearance, or shipment readiness, rather than treating every preference as equal."},
            {"number": "03", "title": "Choose practical checkpoints", "text": "Depending on the project, checks may be useful for samples, materials, production progress, finished goods, packaging, and loading or handover."},
            {"number": "04", "title": "Define how findings will be recorded", "text": "A useful record identifies the requirement, observed condition, evidence, affected quantity where relevant, open question, and the next decision needed."},
            {"number": "05", "title": "Decide who acts on the result", "text": "Before the check, clarify who receives the report, who approves a rework or shipment decision, and how the supplier response will be recorded."}
        ],
        "limitsTitle": "What quality control does not guarantee",
        "limits": [
            {"title": "A check is not a promise about every unit", "text": "The scope, timing, product access, sample method, and defined requirements affect what can be observed. No check can guarantee that every future unit is defect-free."},
            {"title": "Inspection and compliance are different", "text": "A quality check can observe defined product requirements. It does not replace required laboratory testing, legal advice, certifications, or destination-market compliance assessment."},
            {"title": "A report needs a buyer decision", "text": "Observations alone do not resolve an issue. The buyer and supplier still need to decide whether to accept, rework, replace, investigate, or delay a handover."}
        ],
        "prepareTitle": "Prepare this before a quality check",
        "prepare": ["The approved product and packaging reference", "Measurements, materials, functions, colors, labels, and packaging details that matter", "A practical list of critical, major, and minor concerns for the product", "Production timing, quantity, factory address, and expected check stage", "Who will review the findings and approve the next action"],
        "routesTitle": "Move to the next useful page",
        "routes": [
            {"href": "/services/quality-control/", "title": "Quality-control support", "text": "See how quality requirements can be defined around your product and project stage.", "label": "Explore quality control"},
            {"href": "/product-samples/", "title": "Product samples and approval", "text": "Connect the approved sample with a clearer production reference before a check is planned.", "label": "Review sample planning"},
            {"href": "/services/packaging/", "title": "Packaging coordination", "text": "Make packaging part of the product and shipment check, rather than a detail considered after production.", "label": "Explore packaging"}
        ],
        "ctaTitle": "Define the quality question before the goods are ready.",
        "ctaText": "A short project brief can identify the product version, priority requirements, timing, and the decision your quality check should support.",
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


def translate(task):
    page_key, lang, page = task
    client = OpenAI()
    prompt = f"""Translate the JSON content below into {TARGETS[lang]}.

This is website copy for Sourcing Ally, a Shenzhen-based sourcing agent. Preserve these facts exactly:
- Minimum 5% sourcing fee when a client orders through Sourcing Ally.
- $150 per day only for independent factory travel support when a client orders directly from a factory.
- The company does not work with dangerous or military goods.
- Never promise guarantees, compliance, legal outcomes, shipping outcomes, or defect-free production.

Rules:
1. Translate every natural-language string naturally; do not translate URL href values, the numbering strings, or JSON keys.
2. Preserve all uncertainty and limitation language.
3. Preserve meaning and lists exactly, but use natural language rather than word-for-word phrasing.
4. Return valid JSON only, with the identical object/list/key structure.

JSON:
{json.dumps(page, ensure_ascii=False)}"""
    response = client.chat.completions.create(
        model="gpt-5-mini",
        messages=[
            {"role": "system", "content": "You are an expert website localization editor. Return JSON only."},
            {"role": "user", "content": prompt},
        ],
        max_completion_tokens=8500,
    )
    raw = response.choices[0].message.content.strip()
    if raw.startswith("```"):
        raw = raw.split("\n", 1)[1].rsplit("```", 1)[0]
    result = json.loads(raw)
    if shape(result) != shape(page):
        raise ValueError(f"Structure mismatch: {page_key} / {lang}")
    for original, translated in zip(_hrefs(page), _hrefs(result)):
        if original != translated:
            raise ValueError(f"Href changed: {page_key} / {lang}: {original} != {translated}")
    return page_key, lang, result


def _hrefs(value):
    if isinstance(value, dict):
        found = []
        for key, item in value.items():
            if key == "href":
                found.append(item)
            found.extend(_hrefs(item))
        return found
    if isinstance(value, list):
        return [href for item in value for href in _hrefs(item)]
    return []


def main():
    translations = {"en": PAGES}
    tasks = [(key, lang, page) for key, page in PAGES.items() for lang in TARGETS]
    with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool:
        for page_key, lang, result in pool.map(translate, tasks):
            translations.setdefault(lang, {})[page_key] = result
            print(f"done: {page_key}.{lang}")
    data = json.dumps(translations, ensure_ascii=False, indent=2)
    OUT.write_text(
        "export const decisionLanguages = ['en', 'es', 'pt', 'ru', 'tr', 'fr'] as const;\n"
        "export type DecisionLanguage = (typeof decisionLanguages)[number];\n\n"
        f"export const decisionSuite = {data} as const;\n",
        encoding="utf-8",
    )
    print(f"wrote {OUT}")


if __name__ == "__main__":
    main()
