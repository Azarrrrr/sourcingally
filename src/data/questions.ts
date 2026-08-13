export type SourcingQuestion = {
  slug: string;
  category: string;
  question: string;
  shortAnswer: string;
  answer: string;
  related: { label: string; href: string }[];
};

export const questionGroups: { title: string; intro: string; questions: SourcingQuestion[] }[] = [
  {
    title: 'Choosing a sourcing partner',
    intro: 'Start by deciding what work you need completed locally—not simply whether someone can find a supplier name.',
    questions: [
      {
        slug: 'what-does-a-china-sourcing-agent-do', category: 'Choosing an agent', question: 'What does a China sourcing agent do?',
        shortAnswer: 'A sourcing agent can help research suppliers, communicate requirements, arrange samples, coordinate visits, monitor agreed work, and support quality or packaging tasks.',
        answer: 'The exact scope varies. A useful conversation begins with the product, quantity, destination, timing, budget assumptions, and the decision you need help making. Sourcing Ally can support supplier research, sample checks, factory or supplier checks, final-product checks, packaging coordination, factory travel, and translation as agreed for the project.',
        related: [{ label: 'Explore services', href: '/en/services/' }, { label: 'How to import from China', href: '/en/guides/how-to-import-from-china/' }]
      },
      {
        slug: 'when-is-a-sourcing-agent-useful', category: 'Choosing an agent', question: 'When is a sourcing agent useful?',
        shortAnswer: 'Local support can be useful when distance, language, product risk, factory access, or coordination makes it difficult to manage the work yourself.',
        answer: 'An agent is not automatically necessary for every purchase. It can be especially useful when you need a factory visit, a second set of eyes on a sample, help translating product requirements, support comparing suppliers, or someone to check an agreed part of the process in China. First define what you can manage directly and what requires local work.',
        related: [{ label: 'Factory travel support', href: '/en/services/factory-travel/' }, { label: 'Supplier sourcing', href: '/en/services/supplier-sourcing/' }]
      },
      {
        slug: 'how-do-sourcing-agent-fees-work', category: 'Choosing an agent', question: 'How do Sourcing Ally fees work?',
        shortAnswer: 'When a client orders through Sourcing Ally, the minimum sourcing service fee is 5%. Independent factory-travel support is $150 per day when the client does not order through Sourcing Ally.',
        answer: 'The final scope and fee treatment should be agreed before work begins because a product, travel plan, inspection task, and coordination request can require different levels of work. Ask what is included, what information you need to provide, what outputs you will receive, and how additional travel or third-party costs would be handled before confirming a project.',
        related: [{ label: 'Sourcing fee guide', href: '/en/guides/china-sourcing-agent-fees/' }, { label: 'Contact Sourcing Ally', href: '/en/start-project/' }]
      }
    ]
  },
  {
    title: 'Suppliers, samples, and MOQ',
    intro: 'A stronger first brief and a consistent comparison method reduce many avoidable sourcing mistakes.',
    questions: [
      {
        slug: 'how-many-suppliers-should-i-compare', category: 'Suppliers and samples', question: 'How many suppliers should I compare?',
        shortAnswer: 'Compare suppliers against the same written requirements, then shortlist based on capability, communication, sample quality, commercial fit, and verification—not price alone.',
        answer: 'There is no universal number. The more important point is to compare like with like. Give each potential supplier the same product brief, quantity range, materials, packaging requirements, destination market, timing, and questions. A low quotation can mean different materials, an incomplete scope, a different quantity assumption, or a different lead-time assumption.',
        related: [{ label: 'Supplier verification checklist', href: '/en/guides/supplier-verification-checklist/' }, { label: 'Supplier sourcing service', href: '/en/services/supplier-sourcing/' }]
      },
      {
        slug: 'what-should-i-check-in-a-product-sample', category: 'Suppliers and samples', question: 'What should I check in a product sample?',
        shortAnswer: 'Check whether the sample matches the written product brief, and test the things that matter to its actual use, materials, dimensions, finish, function, packaging, and destination market.',
        answer: 'A sample should not be approved only because it looks good in a photograph. Record the sample version, measure important dimensions, compare materials and color to the brief, test the product in the way a customer would use it, and write down every correction. The sample becomes more useful when feedback is specific and documented before production begins.',
        related: [{ label: 'Sample sourcing', href: '/en/services/sample-sourcing/' }, { label: 'Quality-control checklist', href: '/en/guides/quality-control-checklist/' }]
      },
      {
        slug: 'what-does-moq-mean', category: 'Suppliers and samples', question: 'What does MOQ mean when sourcing from China?',
        shortAnswer: 'MOQ means minimum order quantity: the smallest quantity a supplier is prepared to produce or sell under a particular specification.',
        answer: 'MOQ can change with material color, logo, tooling, packaging, components, and production process. A supplier may offer a lower MOQ at a higher unit price, or a higher MOQ when customization is involved. Ask whether the MOQ applies to the exact product, color, packaging, and customization you need—not only to a generic product listing.',
        related: [{ label: 'MOQ guide', href: '/en/guides/moq-and-order-quantities/' }, { label: 'Product guides', href: '/en/products/' }]
      }
    ]
  },
  {
    title: 'Factory checks and quality control',
    intro: 'A visit or inspection should answer a defined question. It does not replace a clear specification or make a supplier risk-free.',
    questions: [
      {
        slug: 'what-can-a-factory-visit-confirm', category: 'Factory and quality', question: 'What can a factory visit confirm?',
        shortAnswer: 'A visit can help check the actual location, visible equipment, production environment, communication, and the specific questions agreed before the visit.',
        answer: 'A factory visit is most useful when you decide in advance what evidence matters: address, product process, sample status, machinery, packaging, production stage, or a particular concern. It cannot guarantee future performance, final product quality, legal compliance, or every detail that may matter later. Document observations and connect them to a written follow-up plan.',
        related: [{ label: 'Factory and supplier checks', href: '/en/services/supplier-factory-checks/' }, { label: 'Factory travel support', href: '/en/services/factory-travel/' }]
      },
      {
        slug: 'when-should-products-be-inspected', category: 'Factory and quality', question: 'When should products be inspected?',
        shortAnswer: 'The right stage depends on the product and risk, but quality questions are usually easier to resolve before a full batch has been completed or shipped.',
        answer: 'A useful quality plan may include sample checks, checks while production is underway, and a final check before shipment. Decide the product requirements, acceptable tolerances, functional tests, packaging checks, and documentation requirements before inspection. If the expectations are unclear, an inspection can identify a problem without showing what should happen next.',
        related: [{ label: 'Quality control service', href: '/en/services/quality-control/' }, { label: 'Quality-control checklist', href: '/en/guides/quality-control-checklist/' }]
      },
      {
        slug: 'what-is-the-difference-between-a-factory-check-and-final-inspection', category: 'Factory and quality', question: 'What is the difference between a factory check and a final product inspection?',
        shortAnswer: 'A factory check focuses on the supplier or production environment; a final inspection focuses on finished goods against the agreed requirements.',
        answer: 'They answer different questions. A factory check may look at the location, visible operations, process, and communication. A final-product inspection may look at quantity, appearance, function, measurements, packaging, and agreed defects or tolerances. Both need a written scope and should be connected to the actual product brief.',
        related: [{ label: 'Factory checks', href: '/en/services/supplier-factory-checks/' }, { label: 'Final quality checks', href: '/en/services/quality-control/' }]
      }
    ]
  },
  {
    title: 'China locations and travel',
    intro: 'City pages are useful for planning questions and routes. They are not proof that a particular factory is suitable.',
    questions: [
      {
        slug: 'what-is-shenzhen-known-for-in-sourcing', category: 'China locations', question: 'What is Shenzhen known for in sourcing?',
        shortAnswer: 'Shenzhen is commonly associated with electronics and a broader network of product development, component, packaging, and logistics activity in southern China.',
        answer: 'The useful question is not only “what is Shenzhen known for?” but “what process, supplier capability, product component, or meeting do I need to research?” A city association does not verify a supplier. Request the actual address, define the visit purpose, and document the product questions you need answered.',
        related: [{ label: 'Shenzhen sourcing guide', href: '/en/cities/shenzhen/' }, { label: 'Electronics guide', href: '/en/products/electronics/' }]
      },
      {
        slug: 'can-sourcing-ally-travel-outside-shenzhen', category: 'China locations', question: 'Can Sourcing Ally travel outside Shenzhen?',
        shortAnswer: 'Sourcing Ally is based in Shenzhen and can work across nearby Guangdong locations. Travel elsewhere in China can be discussed when the project requires it.',
        answer: 'For nearby areas such as Guangzhou, Foshan, Dongguan, Zhongshan, and Huizhou, local travel may be practical. For farther locations such as Yiwu, a trip should be planned around real factory addresses, objectives, timing, and the decision you need to make. Independent factory-travel support is $150 per day when the client does not order through Sourcing Ally.',
        related: [{ label: 'China cities', href: '/en/cities/' }, { label: 'Start a project brief', href: '/en/start-project/' }]
      },
      {
        slug: 'is-yiwu-a-factory-or-a-market', category: 'China locations', question: 'Is Yiwu a factory location or a wholesale market?',
        shortAnswer: 'Yiwu is strongly associated with wholesale-market activity, but a market visit and a factory visit serve different purposes.',
        answer: 'A market may help you discover product types, trading companies, suppliers, or product ideas. It does not automatically show where a product is manufactured. If the goal is supplier verification or production discussion, confirm the actual factory address and arrange a visit that matches your decision criteria.',
        related: [{ label: 'Yiwu guide', href: '/en/cities/yiwu/' }, { label: 'Supplier verification', href: '/en/guides/supplier-verification-checklist/' }]
      }
    ]
  },
  {
    title: 'Shipping, compliance, and communication',
    intro: 'These subjects are important, but product, market, and commercial details should be checked for each real shipment.',
    questions: [
      {
        slug: 'what-should-i-check-before-shipping-from-china', category: 'Shipping and compliance', question: 'What should I check before shipping goods from China?',
        shortAnswer: 'Before shipping, confirm the agreed product, quantity, packaging, commercial documents, transport plan, destination-market requirements, and who is responsible for each task.',
        answer: 'Shipping questions depend on the product, route, commercial terms, importer, freight provider, and destination country. Make a written checklist that covers finished-product checks, packaging, invoice and packing-list details, labeling, relevant testing or certification questions, handover timing, and the responsible party. Obtain current logistics and customs guidance for the actual shipment.',
        related: [{ label: 'Shipping guide', href: '/en/guides/shipping-from-china/' }, { label: 'Disclaimer', href: '/en/disclaimer/' }]
      },
      {
        slug: 'how-do-i-check-product-compliance', category: 'Shipping and compliance', question: 'How do I check product compliance before importing?',
        shortAnswer: 'Start with the product, intended use, user group, destination market, importer role, labels, and applicable test or certification questions. Then verify the current requirements with qualified sources.',
        answer: 'There is no single compliance checklist for every product. A children’s product, electronic item, textile, furniture item, food-contact product, or ordinary home good can create different requirements. General sourcing guidance can help you identify questions, but it is not legal, customs, tax, safety, or testing advice for a real shipment.',
        related: [{ label: 'Compliance guide', href: '/en/guides/product-certification-and-compliance/' }, { label: 'Terms of use', href: '/en/terms/' }]
      },
      {
        slug: 'why-is-clear-supplier-communication-important', category: 'Shipping and compliance', question: 'Why is clear communication with Chinese suppliers important?',
        shortAnswer: 'Clear written requirements reduce the risk that different people interpret product, quality, packaging, timing, or price expectations differently.',
        answer: 'Use a written brief with product dimensions, materials, color references, branding, packaging, quantity range, target market, timeline, acceptance criteria, and questions. Do not rely on assumed meaning. When a change is made, record it clearly and confirm which sample, drawing, file, or specification is the current version.',
        related: [{ label: 'Translation and communication', href: '/en/services/translation/' }, { label: 'Business culture guide', href: '/en/guides/china-sourcing-culture-and-communication/' }]
      }
    ]
  }
];

export const allQuestions = questionGroups.flatMap((group) => group.questions);
