export type BuyerPath = {
  slug: string;
  number: string;
  label: string;
  title: string;
  description: string;
  promise: string;
  stages: { title: string; text: string; href: string }[];
  risks: { title: string; text: string }[];
  checklist: string[];
  next: { label: string; href: string }[];
};

export const buyerPaths: BuyerPath[] = [
  {
    slug: 'first-import', number: '01', label: 'Start here', title: 'Your first product order from China',
    description: 'A practical path for buyers who have a product idea but need a clearer route from initial research to shipment planning.',
    promise: 'Do not begin with a supplier name. Begin with the product decision you need to make.',
    stages: [
      { title: 'Define the product', text: 'Write the intended use, target customer, quantity range, materials, dimensions, destination, and timing before you ask for a quote.', href: '/en/guides/how-to-import-from-china/' },
      { title: 'Compare consistent options', text: 'Give potential suppliers the same written brief so the quotations and sample conversations can be compared fairly.', href: '/en/guides/supplier-verification-checklist/' },
      { title: 'Check what matters', text: 'Use samples, factory or supplier checks, and quality planning to answer the questions that distance makes difficult.', href: '/en/services/quality-control/' },
      { title: 'Prepare the shipment', text: 'Confirm the product, packaging, documents, transport responsibility, and destination-market questions before goods move.', href: '/en/guides/shipping-from-china/' }
    ],
    risks: [
      { title: 'Starting with a vague brief', text: 'A supplier may quote a different product, material, or scope from the one you imagine.' },
      { title: 'Comparing only price', text: 'A low quotation can exclude packaging, testing, a different quantity, or a different quality assumption.' },
      { title: 'Approving without a written record', text: 'Changes are harder to manage when the current sample, file, or requirement is unclear.' }
    ],
    checklist: ['Product purpose and key specifications', 'Target quantity or quantity range', 'Destination market and timing', 'Reference images, drawings, or product links', 'Packaging and branding requirements', 'The main decision you need local support with'],
    next: [{ label: 'Build your project brief', href: '/en/start-project/' }, { label: 'Read the importing guide', href: '/en/guides/how-to-import-from-china/' }, { label: 'Explore sourcing questions', href: '/en/questions/' }]
  },
  {
    slug: 'brand-private-label', number: '02', label: 'For brands', title: 'Build a more controlled private-label sourcing process',
    description: 'A path for brands that need customization, samples, packaging, consistent specifications, and a clearer record of decisions.',
    promise: 'Your logo is only one detail. The product brief, sample process, material decisions, packaging, and approval record matter just as much.',
    stages: [
      { title: 'Define the product system', text: 'Describe the product, materials, use case, tolerance, brand treatment, and packaging as one connected specification.', href: '/en/guides/how-to-import-from-china/' },
      { title: 'Prototype and revise', text: 'Use a documented sample process to test product fit, function, finish, packaging, and the changes between versions.', href: '/en/services/sample-sourcing/' },
      { title: 'Control product decisions', text: 'Keep the approved version, artwork, dimensions, materials, and packaging details visible before production begins.', href: '/en/services/packaging/' },
      { title: 'Check before shipment', text: 'Create a product-specific quality and packaging checklist for the final batch.', href: '/en/guides/quality-control-checklist/' }
    ],
    risks: [
      { title: 'Treating customization as only a logo request', text: 'Customization can affect MOQ, material, artwork, packaging, process, cost, and timeline.' },
      { title: 'Approving a sample without testing use', text: 'A sample should be evaluated for the way a real customer will use it, not only how it photographs.' },
      { title: 'Changing packaging too late', text: 'Packaging artwork, labels, and inserts should be reviewed as part of the product plan.' }
    ],
    checklist: ['Product reference and use case', 'Brand assets and artwork files', 'Material, color, and finish requirements', 'Sample feedback and approval record', 'Packaging, labeling, and barcode questions', 'Destination-market compliance questions'],
    next: [{ label: 'Plan a project brief', href: '/en/start-project/' }, { label: 'Read the sample guide', href: '/en/questions/what-should-i-check-in-a-product-sample/' }, { label: 'Explore packaging support', href: '/en/services/packaging/' }]
  },
  {
    slug: 'marketplace-seller', number: '03', label: 'For marketplaces', title: 'Source with the product listing and fulfilment in mind',
    description: 'A path for marketplace and ecommerce sellers who need product, packaging, label, inspection, shipping, and reorder questions to connect.',
    promise: 'The product is not ready for a marketplace simply because a supplier can make it. Its packaging, information, customer use, and fulfilment questions need to be planned together.',
    stages: [
      { title: 'Validate the product brief', text: 'Clarify the product, variations, customer-use expectations, quantity range, packaging, and destination before supplier comparison.', href: '/en/guides/how-to-import-from-china/' },
      { title: 'Test sample and packaging', text: 'Check product function, finish, customer-facing packaging, and any labeling or barcode questions.', href: '/en/services/sample-sourcing/' },
      { title: 'Prepare the final check', text: 'Connect the quality plan to the actual product, its variations, and the packaging a customer will receive.', href: '/en/services/quality-control/' },
      { title: 'Plan shipment handover', text: 'Confirm transport responsibilities and documentation questions with current professionals for the actual shipment.', href: '/en/guides/shipping-from-china/' }
    ],
    risks: [
      { title: 'Confusing product and listing requirements', text: 'A product can be usable but still create a packaging, labeling, variation, or customer-information problem.' },
      { title: 'Ignoring variation control', text: 'Different colors, sizes, or packs can create different product and packaging checks.' },
      { title: 'Leaving fulfilment questions until the end', text: 'The handover process should inform packaging and labeling decisions earlier.' }
    ],
    checklist: ['Product and variation list', 'Customer-use and quality expectations', 'Packaging, labels, and barcode questions', 'Sample and final-inspection requirements', 'Destination and fulfilment plan', 'Reorder and replacement questions'],
    next: [{ label: 'Build your marketplace project brief', href: '/en/start-project/' }, { label: 'Read the shipping guide', href: '/en/guides/shipping-from-china/' }, { label: 'Explore product guides', href: '/en/products/' }]
  },
  {
    slug: 'product-development', number: '04', label: 'For new products', title: 'Move from a product idea to a clearer manufacturing conversation',
    description: 'A path for founders who have an idea, reference sample, drawing, or requirement but need to translate it into a process suppliers can respond to.',
    promise: 'A manufacturer cannot reliably make what has not been clearly described. Turn an idea into a written product system before you expect a reliable quote.',
    stages: [
      { title: 'Capture the concept', text: 'Describe the user, use case, product function, material questions, dimensions, visual references, and constraints.', href: '/en/guides/how-to-import-from-china/' },
      { title: 'Ask manufacturing questions', text: 'Check whether a supplier can make the intended product and what information is needed to evaluate it.', href: '/en/services/supplier-sourcing/' },
      { title: 'Use samples as decisions', text: 'Treat the sample as an evidence point: test it, record feedback, and identify what changes before a next version.', href: '/en/services/sample-sourcing/' },
      { title: 'Lock the approved version', text: 'Before production, make the current specification, packaging, and quality expectations visible and traceable.', href: '/en/guides/quality-control-checklist/' }
    ],
    risks: [
      { title: 'Requesting a quote before defining the product', text: 'Suppliers may fill gaps with their own assumptions, which makes quotations difficult to compare.' },
      { title: 'Giving aesthetic feedback without functional feedback', text: 'A product can look correct and still fail its intended use.' },
      { title: 'Losing sample-version history', text: 'Changes should be tied to a visible version, drawing, file, or written requirement.' }
    ],
    checklist: ['Product use case and target user', 'Reference images or early drawings', 'Critical dimensions and materials', 'Features that must work', 'Known budget and quantity assumptions', 'Open questions that require supplier input'],
    next: [{ label: 'Create a product-development brief', href: '/en/start-project/' }, { label: 'Read sample questions', href: '/en/questions/what-should-i-check-in-a-product-sample/' }, { label: 'Explore supplier sourcing', href: '/en/services/supplier-sourcing/' }]
  },
  {
    slug: 'china-visit', number: '05', label: 'For China travel', title: 'Plan a China supplier trip around decisions—not sightseeing',
    description: 'A path for buyers who want to visit factories or markets and need a route that produces useful evidence and next actions.',
    promise: 'A China visit is valuable when each stop answers a decision. Start with the questions, the addresses, and the evidence you need to record.',
    stages: [
      { title: 'Define the trip objective', text: 'Decide whether each stop is for product discovery, factory verification, sample review, production discussion, or market research.', href: '/en/services/factory-travel/' },
      { title: 'Build the route', text: 'Use actual supplier locations and realistic travel time; nearby Guangdong hubs can often be planned together.', href: '/en/cities/' },
      { title: 'Prepare a visit checklist', text: 'Record the questions, product references, people, photos, observations, and follow-up actions that matter.', href: '/en/questions/what-can-a-factory-visit-confirm/' },
      { title: 'Convert observations into actions', text: 'After the trip, compare findings to the brief and document which supplier, sample, or next step needs attention.', href: '/en/start-project/' }
    ],
    risks: [
      { title: 'Trying to visit too many places', text: 'A rushed schedule can create impressions without enough product-specific evidence.' },
      { title: 'Confusing a market visit with a factory visit', text: 'The two activities answer different questions and should be planned differently.' },
      { title: 'Leaving without a follow-up record', text: 'A visit is more useful when observations connect to a written decision and next action.' }
    ],
    checklist: ['Actual supplier or market addresses', 'A clear purpose for each stop', 'Product samples, references, and questions', 'Travel timing between locations', 'Photo and observation checklist', 'Post-visit follow-up owner and date'],
    next: [{ label: 'Build a factory-visit brief', href: '/en/start-project/' }, { label: 'Explore China cities', href: '/en/cities/' }, { label: 'Read factory-visit questions', href: '/en/questions/what-can-a-factory-visit-confirm/' }]
  },
  {
    slug: 'existing-supplier-rescue', number: '06', label: 'For active orders', title: 'Bring a difficult supplier situation back to a clear process',
    description: 'A path for buyers who already have a supplier but need clearer information about quality, communication, packaging, samples, or production progress.',
    promise: 'When an order feels unclear, reduce the problem to visible facts: what was agreed, what was observed, what decision is open, and what evidence is needed next.',
    stages: [
      { title: 'Rebuild the written record', text: 'Gather the current product brief, quotations, samples, changes, packaging details, quality expectations, and open messages.', href: '/en/questions/why-is-clear-supplier-communication-important/' },
      { title: 'Identify the decision point', text: 'Separate a quality problem, communication problem, production question, packaging change, or travel need instead of treating everything as one issue.', href: '/en/questions/' },
      { title: 'Check the relevant evidence', text: 'A sample check, factory visit, supplier communication task, or final inspection should be tied to the actual concern.', href: '/en/services/supplier-factory-checks/' },
      { title: 'Create the next written action', text: 'Confirm the current requirement, owner, date, evidence expected, and what will happen after the response.', href: '/en/start-project/' }
    ],
    risks: [
      { title: 'Solving by message volume', text: 'Many messages do not help if the exact issue, approved version, and required evidence are not clear.' },
      { title: 'Mixing urgent and important issues', text: 'Prioritize what could affect product, payment, shipment, or customer use.' },
      { title: 'Using general reassurance instead of evidence', text: 'Ask for product-specific facts, photos, records, or agreed checks that match the concern.' }
    ],
    checklist: ['Current product and packaging requirements', 'Order status and timing', 'Photos, videos, samples, or documents already available', 'Exact issue and desired outcome', 'Supplier messages and open questions', 'What local check or communication support may be needed'],
    next: [{ label: 'Build a rescue brief', href: '/en/start-project/' }, { label: 'Explore quality control', href: '/en/services/quality-control/' }, { label: 'Read sourcing questions', href: '/en/questions/' }]
  }
];

export const getBuyerPath = (slug: string) => buyerPaths.find((path) => path.slug === slug);
