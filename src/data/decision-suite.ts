import generatedDecisionSuiteTranslations from './generatedDecisionSuiteTranslations.json';

export const decisionLanguages = ['en', 'es', 'pt', 'ru', 'tr', 'fr', 'ja', 'de', 'ar', 'id', 'it'] as const;
export type DecisionLanguage = (typeof decisionLanguages)[number];

const baseDecisionSuite = {
  "en": {
    "supplierVerification": {
      "metaTitle": "Verify a Chinese Supplier Before You Pay | Sourcing Ally",
      "metaDescription": "Use a practical evidence path to decide whether a Chinese supplier should move to samples, a factory visit, a trial order, or further questions.",
      "eyebrow": "SUPPLIER DECISION GUIDE",
      "title": "Before a deposit, make the supplier question more specific.",
      "lede": "Supplier verification is not one document or one video call. It is a sequence of checks that helps you decide what evidence you have, what is still unknown, and whether the supplier should move to the next stage.",
      "situationsTitle": "When this guide is useful",
      "situations": [
        {
          "title": "You have several quotes",
          "text": "You need to compare answers from different suppliers without treating the lowest number as the full decision."
        },
        {
          "title": "You are about to send money",
          "text": "You need a clearer picture of who is receiving the payment, what product version is being quoted, and what evidence supports the next step."
        },
        {
          "title": "The order is customized or important",
          "text": "A product with special materials, packaging, tooling, a larger value, or a repeat-order plan deserves a more deliberate evidence path."
        }
      ],
      "evidenceTitle": "Build evidence in layers",
      "evidenceIntro": "The useful question is not simply whether a supplier looks good online. It is whether the identity, product, quotation, communication, and production information make sense together.",
      "evidence": [
        {
          "number": "01",
          "title": "Clarify the entity and role",
          "text": "Ask who you are speaking with, whether the business is a factory, trading company, or another role, and where the relevant production activity takes place."
        },
        {
          "number": "02",
          "title": "Compare the quote with the brief",
          "text": "Check that materials, dimensions, quantities, packaging, tooling, lead time, payment terms, and stated assumptions refer to the same product version."
        },
        {
          "number": "03",
          "title": "Ask for product-specific evidence",
          "text": "Use photographs, technical answers, sample discussion, production questions, and relevant documents to test whether the supplier understands your actual requirement."
        },
        {
          "number": "04",
          "title": "Follow inconsistencies",
          "text": "A changing address, an unexplained price change, vague answers, mismatched product details, or reluctance to clarify a question should lead to another question, not an automatic rejection or approval."
        },
        {
          "number": "05",
          "title": "Choose the next evidence step",
          "text": "Depending on the project, the right next step can be a sample, a factory visit, a video call, a trial order, or a more detailed written comparison."
        }
      ],
      "limitsTitle": "What verification does not prove",
      "limits": [
        {
          "title": "A document is not a future-performance guarantee",
          "text": "Business information can help identify a company, but it does not guarantee future capacity, quality, financial condition, legal compliance, or delivery."
        },
        {
          "title": "A visit is a time-specific observation",
          "text": "A factory visit can record what is observed on that day. It cannot guarantee every future production run or every subcontracting decision."
        },
        {
          "title": "The buyer retains the commercial approval",
          "text": "You decide whether to pay, order, approve a supplier, or change the project. Sourcing support should provide clearer information for that decision."
        }
      ],
      "prepareTitle": "Prepare this before you compare suppliers",
      "prepare": [
        "A product description, photos, drawing, or reference sample",
        "Target quantity, destination market, and timing",
        "Known material, dimension, packaging, label, or testing requirements",
        "The product version that every supplier should quote",
        "The decision you need to make after receiving the comparison"
      ],
      "routesTitle": "Move to the next useful page",
      "routes": [
        {
          "href": "/services/supplier-sourcing/",
          "title": "Supplier sourcing support",
          "text": "See how a supplier shortlist can be structured around your specific brief.",
          "label": "Explore supplier sourcing"
        },
        {
          "href": "/questions/",
          "title": "Supplier verification questions",
          "text": "Read practical answers before you rely on an online profile or supplier statement.",
          "label": "Explore questions"
        },
        {
          "href": "/blog/supplier-verification-checklist-guide/",
          "title": "Verification checklist",
          "text": "Use the Journal guide to prepare an evidence-based comparison before a deposit.",
          "label": "Read the checklist"
        }
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
        {
          "title": "You are sourcing a new product",
          "text": "The first sample is the moment to test whether the written brief and supplier understanding are aligned."
        },
        {
          "title": "You are changing a product or package",
          "text": "A revised material, finish, label, insert, artwork, or carton can create a new version that must be reviewed separately."
        },
        {
          "title": "You are close to production approval",
          "text": "Before production starts, the buyer needs to distinguish what is approved, what remains open, and what should be checked later."
        }
      ],
      "evidenceTitle": "Use the sample as a controlled review point",
      "evidenceIntro": "The sample review should connect the physical item with the written brief, the supplier quotation, and the production handover. A short, specific record is more useful than a general message saying it looks good.",
      "evidence": [
        {
          "number": "01",
          "title": "Name the version",
          "text": "Record the date, supplier, product name, material, color, dimensions, packaging version, and any revision number so everyone discusses the same item."
        },
        {
          "number": "02",
          "title": "Check the requirements that matter",
          "text": "Review function, appearance, measurements, materials, finish, labels, packaging, and any product-specific requirement that affects the buyer or end user."
        },
        {
          "number": "03",
          "title": "Separate defects from choices",
          "text": "A defect, an unfinished decision, and a preference are different. Mark which points must change, which are accepted, and which need a written decision."
        },
        {
          "number": "04",
          "title": "Create a revision record",
          "text": "Use photos, annotations, measurements, or a numbered list so requested changes do not become an ambiguous chat message."
        },
        {
          "number": "05",
          "title": "Define the production reference",
          "text": "If you approve a version, state what the approval covers and which elements—such as packaging, components, labels, or quality checkpoints—still require separate confirmation."
        }
      ],
      "limitsTitle": "What sample approval does not prove",
      "limits": [
        {
          "title": "One sample may not represent mass production",
          "text": "A handmade, engineering, or pre-production sample can differ from later production. Ask which version you are reviewing and how the factory will control consistency."
        },
        {
          "title": "Approval does not replace compliance work",
          "text": "Destination-market testing, labels, importer obligations, legal review, and specialist technical assessment remain separate responsibilities."
        },
        {
          "title": "A photo is not a full specification",
          "text": "A sample photo can support a decision, but dimensions, material details, tolerances, labels, packaging, and other requirements should still be recorded clearly."
        }
      ],
      "prepareTitle": "Prepare this before a sample review",
      "prepare": [
        "The supplier quote and the exact product version being reviewed",
        "Reference images, drawings, measurements, colors, and material notes",
        "The destination market and any known label or testing questions",
        "A review sheet for must-change points, accepted points, and open questions",
        "The production decision you want the sample to support"
      ],
      "routesTitle": "Move to the next useful page",
      "routes": [
        {
          "href": "/services/sample-sourcing/",
          "title": "Sample sourcing support",
          "text": "Understand how samples can be connected to supplier questions and a clearer approval record.",
          "label": "Explore samples"
        },
        {
          "href": "/start-project/",
          "title": "Project Brief Builder",
          "text": "Turn an idea, quantity, and unknowns into a structured starting brief before requesting samples.",
          "label": "Build your brief"
        },
        {
          "href": "/quality-control-plan/",
          "title": "Quality-control planning",
          "text": "Connect an approved product version with the checks that should matter during production and before shipment.",
          "label": "Plan quality control"
        }
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
        {
          "title": "The product or order has meaningful stakes",
          "text": "Customization, technical process, higher value, repeat-order plans, or unclear production claims can justify more direct evidence."
        },
        {
          "title": "Supplier information needs to be tested",
          "text": "A visit can help clarify the production address, product focus, production flow, equipment, materials, communication, and the questions raised by the buyer."
        },
        {
          "title": "You are travelling in China",
          "text": "A travel day is more valuable when meetings, questions, product versions, factory addresses, and the reporting plan are agreed before the itinerary is set."
        }
      ],
      "evidenceTitle": "Plan the visit around evidence",
      "evidenceIntro": "The most useful visit has an agenda. It should connect your product requirements with the physical production context and the decisions you will make afterward.",
      "evidence": [
        {
          "number": "01",
          "title": "Set the visit question",
          "text": "Decide whether the visit is mainly about supplier identity, product capability, sample discussion, process flow, materials, packaging, quality checks, or another defined issue."
        },
        {
          "number": "02",
          "title": "Confirm the practical plan",
          "text": "Check the exact address, contact, date, visitor requirements, travel time, product version, and whether the right people and relevant production areas will be available."
        },
        {
          "number": "03",
          "title": "Observe against the brief",
          "text": "Use your agreed product, sample, material, packaging, quality, and capacity questions to guide what is seen and what needs clarification."
        },
        {
          "number": "04",
          "title": "Record what was and was not observed",
          "text": "Useful records may include photographs, notes, answers, production observations, open questions, and points that require documents or follow-up later."
        },
        {
          "number": "05",
          "title": "Make the next decision visible",
          "text": "After the visit, decide whether the supplier moves to a sample, a revised quotation, a trial order, another check, or should not progress."
        }
      ],
      "limitsTitle": "What a factory visit does not prove",
      "limits": [
        {
          "title": "A visit is an observation at one point in time",
          "text": "It does not guarantee future capacity, stable staffing, materials, production quality, or delivery performance."
        },
        {
          "title": "A facility is not the whole supply chain",
          "text": "A supplier may use outsourced components, subcontractors, or other locations. Ask which work happens where and how the relevant product is controlled."
        },
        {
          "title": "A visit does not replace contracts or compliance work",
          "text": "Commercial terms, product testing, destination-market rules, customs obligations, and legal issues must still be addressed through the appropriate process."
        }
      ],
      "prepareTitle": "Prepare this before a factory visit",
      "prepare": [
        "The product version, sample, or specification to discuss",
        "A short factory-visit agenda with the questions that matter most",
        "Exact factory address, contact, meeting time, and travel route",
        "The people who should attend and the language support needed",
        "The record you want after the visit: notes, photos, open questions, or a next-step decision"
      ],
      "routesTitle": "Move to the next useful page",
      "routes": [
        {
          "href": "/services/supplier-factory-checks/",
          "title": "Factory and supplier checks",
          "text": "See how a defined on-the-ground check can be scoped around a specific question.",
          "label": "Explore factory checks"
        },
        {
          "href": "/china-route/",
          "title": "China Route Map",
          "text": "Connect factory locations, regional travel, and a practical sourcing itinerary.",
          "label": "Explore the route map"
        },
        {
          "href": "/fees-and-scope/",
          "title": "Fees and scope",
          "text": "Review the confirmed independent factory travel rate and the project details that should be agreed before travel.",
          "label": "Review the scope"
        }
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
        {
          "title": "You are moving from sample to production",
          "text": "The approved sample and written product details should become the reference for materials, dimensions, function, appearance, labels, and packaging."
        },
        {
          "title": "You have a product with visible or functional risk",
          "text": "Fragile items, electronics, textiles, custom products, multi-part products, and retail packaging often need more specific checkpoints."
        },
        {
          "title": "You are approaching shipment",
          "text": "Before goods leave the factory, the buyer should know what is being checked, how findings are recorded, and who decides the next action."
        }
      ],
      "evidenceTitle": "Build the plan before the check",
      "evidenceIntro": "Quality control is more useful when the supplier, buyer, and on-the-ground support are comparing the same product version and the same priority requirements.",
      "evidence": [
        {
          "number": "01",
          "title": "Define the approved reference",
          "text": "Connect the current product version with drawings, photos, sample, measurements, material notes, colors, labels, and packaging requirements."
        },
        {
          "number": "02",
          "title": "Separate critical requirements from preferences",
          "text": "Identify the points that affect safety, function, regulatory questions, customer use, major appearance, or shipment readiness, rather than treating every preference as equal."
        },
        {
          "number": "03",
          "title": "Choose practical checkpoints",
          "text": "Depending on the project, checks may be useful for samples, materials, production progress, finished goods, packaging, and loading or handover."
        },
        {
          "number": "04",
          "title": "Define how findings will be recorded",
          "text": "A useful record identifies the requirement, observed condition, evidence, affected quantity where relevant, open question, and the next decision needed."
        },
        {
          "number": "05",
          "title": "Decide who acts on the result",
          "text": "Before the check, clarify who receives the report, who approves a rework or shipment decision, and how the supplier response will be recorded."
        }
      ],
      "limitsTitle": "What quality control does not guarantee",
      "limits": [
        {
          "title": "A check is not a promise about every unit",
          "text": "The scope, timing, product access, sample method, and defined requirements affect what can be observed. No check can guarantee that every future unit is defect-free."
        },
        {
          "title": "Inspection and compliance are different",
          "text": "A quality check can observe defined product requirements. It does not replace required laboratory testing, legal advice, certifications, or destination-market compliance assessment."
        },
        {
          "title": "A report needs a buyer decision",
          "text": "Observations alone do not resolve an issue. The buyer and supplier still need to decide whether to accept, rework, replace, investigate, or delay a handover."
        }
      ],
      "prepareTitle": "Prepare this before a quality check",
      "prepare": [
        "The approved product and packaging reference",
        "Measurements, materials, functions, colors, labels, and packaging details that matter",
        "A practical list of critical, major, and minor concerns for the product",
        "Production timing, quantity, factory address, and expected check stage",
        "Who will review the findings and approve the next action"
      ],
      "routesTitle": "Move to the next useful page",
      "routes": [
        {
          "href": "/services/quality-control/",
          "title": "Quality-control support",
          "text": "See how quality requirements can be defined around your product and project stage.",
          "label": "Explore quality control"
        },
        {
          "href": "/product-samples/",
          "title": "Product samples and approval",
          "text": "Connect the approved sample with a clearer production reference before a check is planned.",
          "label": "Review sample planning"
        },
        {
          "href": "/services/packaging/",
          "title": "Packaging coordination",
          "text": "Make packaging part of the product and shipment check, rather than a detail considered after production.",
          "label": "Explore packaging"
        }
      ],
      "ctaTitle": "Define the quality question before the goods are ready.",
      "ctaText": "A short project brief can identify the product version, priority requirements, timing, and the decision your quality check should support.",
      "ctaLabel": "Build a project brief"
    }
  },
  "es": {
    "supplierVerification": {
      "metaTitle": "Verifique un proveedor chino antes de pagar | Sourcing Ally",
      "metaDescription": "Siga una ruta práctica basada en evidencias para decidir si un proveedor chino debe avanzar a muestras, visita a la fábrica, pedido de prueba o a más preguntas.",
      "eyebrow": "GUÍA DE DECISIÓN DE PROVEEDOR",
      "title": "Antes de un depósito, precise la pregunta sobre el proveedor.",
      "lede": "La verificación del proveedor no es un documento ni una sola videollamada. Es una secuencia de comprobaciones que le ayuda a decidir qué evidencia tiene, qué sigue sin estar claro y si el proveedor debería pasar al siguiente paso.",
      "situationsTitle": "Cuándo es útil esta guía",
      "situations": [
        {
          "title": "Tiene varias cotizaciones",
          "text": "Necesita comparar las respuestas de distintos proveedores sin tomar la cifra más baja como la decisión definitiva."
        },
        {
          "title": "Está a punto de enviar dinero",
          "text": "Necesita una imagen más clara de quién recibirá el pago, qué versión del producto se está cotizando y qué evidencia respalda el siguiente paso."
        },
        {
          "title": "El pedido es personalizado o importante",
          "text": "Un producto con materiales, embalaje, utillaje especiales, mayor valor o un plan de pedidos repetidos merece una ruta de evidencias más deliberada."
        }
      ],
      "evidenceTitle": "Construya evidencia en capas",
      "evidenceIntro": "La pregunta útil no es simplemente si un proveedor se ve bien en línea. Es si la identidad, el producto, la cotización, la comunicación y la información de producción tienen sentido en conjunto.",
      "evidence": [
        {
          "number": "01",
          "title": "Aclare la entidad y el rol",
          "text": "Pregunte con quién está hablando, si la empresa es una fábrica, una trading u otra clase de intermediario, y dónde se realiza la actividad productiva relevante."
        },
        {
          "number": "02",
          "title": "Compare la cotización con las especificaciones",
          "text": "Verifique que materiales, dimensiones, cantidades, embalaje, utillaje, plazo de entrega, condiciones de pago y supuestos declarados se refieran a la misma versión del producto."
        },
        {
          "number": "03",
          "title": "Solicite evidencia específica del producto",
          "text": "Use fotografías, respuestas técnicas, discusión sobre muestras, preguntas de producción y documentos relevantes para comprobar si el proveedor entiende su requerimiento real."
        },
        {
          "number": "04",
          "title": "Siga las inconsistencias",
          "text": "Una dirección que cambia, un cambio de precio sin explicación, respuestas vagas, detalles del producto que no coinciden o la renuencia a aclarar una pregunta deben dar lugar a otra pregunta, no a un rechazo o aprobación automáticos."
        },
        {
          "number": "05",
          "title": "Elija el siguiente paso de evidencia",
          "text": "Dependiendo del proyecto, el siguiente paso adecuado puede ser una muestra, una visita a la fábrica, una videollamada, un pedido de prueba o una comparación escrita más detallada."
        }
      ],
      "limitsTitle": "Lo que la verificación no demuestra",
      "limits": [
        {
          "title": "Un documento no es una garantía de desempeño futuro",
          "text": "La información comercial puede ayudar a identificar a una empresa, pero no garantiza capacidad futura, calidad, situación financiera, cumplimiento legal ni entrega."
        },
        {
          "title": "Una visita es una observación en un momento específico",
          "text": "Una visita a la fábrica registra lo observado ese día. No puede garantizar cada corrida de producción futura ni cada decisión de subcontratación."
        },
        {
          "title": "El comprador conserva la aprobación comercial",
          "text": "Usted decide si pagar, ordenar, aprobar un proveedor o cambiar el proyecto. El apoyo de sourcing debe aportar información más clara para tomar esa decisión."
        }
      ],
      "prepareTitle": "Prepare esto antes de comparar proveedores",
      "prepare": [
        "Descripción del producto, fotos, plano o muestra de referencia",
        "Cantidad objetivo, mercado de destino y plazos",
        "Requisitos conocidos de material, dimensiones, embalaje, etiquetado o pruebas",
        "La versión del producto que cada proveedor debe cotizar",
        "La decisión que debe tomar tras recibir la comparación"
      ],
      "routesTitle": "Vaya a la siguiente página útil",
      "routes": [
        {
          "href": "/services/supplier-sourcing/",
          "title": "Soporte para búsqueda de proveedores",
          "text": "Vea cómo una lista corta de proveedores puede estructurarse en torno a su especificación.",
          "label": "Explorar búsqueda de proveedores"
        },
        {
          "href": "/questions/",
          "title": "Preguntas de verificación de proveedores",
          "text": "Lea respuestas prácticas antes de confiar en un perfil en línea o en la declaración de un proveedor.",
          "label": "Explorar preguntas"
        },
        {
          "href": "/blog/supplier-verification-checklist-guide/",
          "title": "Lista de verificación",
          "text": "Use la guía del Journal para preparar una comparación basada en evidencias antes de un depósito.",
          "label": "Leer la lista de verificación"
        }
      ],
      "ctaTitle": "Comience con la pregunta sobre el proveedor que necesita responder.",
      "ctaText": "Un brief conciso puede identificar qué debe compararse, verificarse o aclararse antes del siguiente compromiso.",
      "ctaLabel": "Crear un brief de proyecto"
    },
    "productSamples": {
      "metaTitle": "Muestras de productos desde China: Guía de aprobación | Sourcing Ally",
      "metaDescription": "Utilice un proceso práctico de aprobación de muestras para definir la versión del producto, revisar cambios, registrar comentarios y decidir qué está listo para producción.",
      "eyebrow": "GUÍA DE DECISIÓN DE MUESTRAS",
      "title": "Una muestra es útil cuando se convierte en una decisión de producción registrada.",
      "lede": "Una muestra puede mostrar un producto, pero también puede revelar preguntas sin respuesta sobre materiales, dimensiones, función, color, empaque y comunicación. El valor está en convertir la revisión en una instrucción clara para el siguiente paso. Nota: Sourcing Ally aplica una comisión mínima de sourcing del 5% cuando un cliente realiza el pedido a través de Sourcing Ally. Si el cliente ordena directamente a una fábrica, el soporte independiente de viajes a la fábrica cuesta $150 por día. La empresa no trabaja con mercancías peligrosas ni con material de uso militar. No prometemos garantías, cumplimiento, resultados legales, resultados de envío ni producción sin defectos.",
      "situationsTitle": "Cuándo es útil esta guía",
      "situations": [
        {
          "title": "Está buscando un producto nuevo",
          "text": "La primera muestra es el momento para comprobar si el brief por escrito y la comprensión del proveedor están alineados."
        },
        {
          "title": "Está cambiando un producto o empaque",
          "text": "Un material, acabado, etiqueta, inserto, arte o caja revisados pueden crear una nueva versión que debe revisarse por separado."
        },
        {
          "title": "Está cerca de la aprobación para producción",
          "text": "Antes de iniciar la producción, el comprador debe distinguir qué está aprobado, qué queda abierto y qué debe verificarse más adelante."
        }
      ],
      "evidenceTitle": "Use la muestra como punto de revisión controlado",
      "evidenceIntro": "La revisión de la muestra debe conectar el objeto físico con el brief escrito, la cotización del proveedor y la entrega a producción. Un registro corto y específico es más útil que un mensaje general que diga que “se ve bien”.",
      "evidence": [
        {
          "number": "01",
          "title": "Nombre de la versión",
          "text": "Registre la fecha, el proveedor, el nombre del producto, el material, el color, las dimensiones, la versión de empaque y cualquier número de revisión para que todos hablen del mismo artículo."
        },
        {
          "number": "02",
          "title": "Revise los requisitos que importan",
          "text": "Revise función, apariencia, medidas, materiales, acabado, etiquetas, empaque y cualquier requisito específico del producto que afecte al comprador o al usuario final."
        },
        {
          "number": "03",
          "title": "Separe defectos de elecciones",
          "text": "Un defecto, una decisión pendiente y una preferencia son cosas distintas. Marque qué puntos deben cambiarse, cuáles se aceptan y cuáles necesitan una decisión por escrito."
        },
        {
          "number": "04",
          "title": "Cree un registro de revisiones",
          "text": "Use fotos, anotaciones, mediciones o una lista numerada para que los cambios solicitados no queden reducidos a un mensaje ambiguo en el chat."
        },
        {
          "number": "05",
          "title": "Defina la referencia de producción",
          "text": "Si aprueba una versión, especifique qué cubre la aprobación y qué elementos —como empaque, componentes, etiquetas o puntos de control de calidad— requieren confirmación por separado."
        }
      ],
      "limitsTitle": "Lo que la aprobación de una muestra no demuestra",
      "limits": [
        {
          "title": "Una muestra puede no representar la producción en masa",
          "text": "Una muestra hecha a mano, de ingeniería o preproducción puede diferir de la producción posterior. Pregunte qué versión está revisando y cómo la fábrica controlará la consistencia."
        },
        {
          "title": "La aprobación no sustituye el trabajo de cumplimiento",
          "text": "Las pruebas para el mercado de destino, las etiquetas, las obligaciones del importador, la revisión legal y la evaluación técnica especializada siguen siendo responsabilidades separadas."
        },
        {
          "title": "Una foto no es una especificación completa",
          "text": "Una foto de la muestra puede apoyar una decisión, pero las dimensiones, detalles de material, tolerancias, etiquetas, empaque y otros requisitos deben registrarse claramente."
        }
      ],
      "prepareTitle": "Prepárelo antes de una revisión de la muestra",
      "prepare": [
        "La cotización del proveedor y la versión exacta del producto que se revisa",
        "Imágenes de referencia, dibujos, medidas, colores y notas sobre materiales",
        "El mercado de destino y cualquier pregunta conocida sobre etiquetas o pruebas",
        "Una hoja de revisión para puntos que deben cambiarse, puntos aceptados y preguntas abiertas",
        "La decisión de producción que desea que la muestra respalde"
      ],
      "routesTitle": "Ir a la siguiente página útil",
      "routes": [
        {
          "href": "/services/sample-sourcing/",
          "title": "Soporte de sourcing de muestras",
          "text": "Entienda cómo las muestras pueden conectarse a preguntas del proveedor y a un registro de aprobación más claro.",
          "label": "Explorar muestras"
        },
        {
          "href": "/start-project/",
          "title": "Constructor de brief de proyecto",
          "text": "Convierta una idea, una cantidad y las incógnitas en un brief estructurado antes de solicitar muestras.",
          "label": "Crear su brief"
        },
        {
          "href": "/quality-control-plan/",
          "title": "Planificación de control de calidad",
          "text": "Conecte una versión de producto aprobada con los controles que deben importarle durante la producción y antes del envío.",
          "label": "Planificar control de calidad"
        }
      ],
      "ctaTitle": "Facilite que la próxima revisión de la muestra derive en acciones concretas.",
      "ctaText": "Comparta la versión del producto, la muestra del proveedor y la decisión que necesita tomar. Así se podrá definir el siguiente paso con más claridad.",
      "ctaLabel": "Crear un brief de proyecto"
    },
    "factoryVisits": {
      "metaTitle": "Visitas a fábricas en China: Guía de planificación para compradores | Sourcing Ally",
      "metaDescription": "Decida cuándo es útil una visita a fábrica, qué preparar, qué observar y qué no puede garantizar una visita a fábrica. La empresa no trabaja con productos peligrosos ni militares. Comisión mínima de aprovisionamiento del 5% cuando un cliente ordena a través de Sourcing Ally. $150 por día solo para soporte independiente de viaje a fábrica cuando el cliente ordena directamente de una fábrica. No se prometen garantías, cumplimiento, resultados legales, resultados de envío ni producción sin defectos.",
      "eyebrow": "GUÍA DE VISITAS A FÁBRICA",
      "title": "Una visita a fábrica funciona mejor cuando se plantea para tomar una decisión, no por curiosidad.",
      "lede": "Una visita puede concretar la conversación con un proveedor. Es más útil cuando el comprador sabe qué debe observar, qué preguntas deben responderse y qué decisión debe orientar la visita.",
      "situationsTitle": "Cuándo una visita puede ser útil",
      "situations": [
        {
          "title": "El producto o pedido tiene implicaciones relevantes",
          "text": "La personalización, procesos técnicos, mayor valor, planes de pedidos repetidos o afirmaciones de producción poco claras pueden justificar obtener evidencia directa."
        },
        {
          "title": "Es necesario comprobar la información del proveedor",
          "text": "Una visita puede ayudar a aclarar la dirección de producción, el enfoque del producto, el flujo de producción, el equipo, los materiales, la comunicación y las preguntas planteadas por el comprador."
        },
        {
          "title": "Está viajando por China",
          "text": "Un día de viaje es más valioso cuando las reuniones, las preguntas, las versiones de producto, las direcciones de fábrica y el plan de informes se acuerdan antes de fijar el itinerario."
        }
      ],
      "evidenceTitle": "Planifique la visita en torno a la evidencia",
      "evidenceIntro": "La visita más útil tiene una agenda. Debe conectar los requisitos de su producto con el contexto físico de producción y con las decisiones que tomará después.",
      "evidence": [
        {
          "number": "01",
          "title": "Defina la pregunta de la visita",
          "text": "Decida si la visita trata principalmente sobre la identidad del proveedor, la capacidad del producto, la discusión de muestras, el flujo de proceso, los materiales, el embalaje, los controles de calidad u otro asunto definido."
        },
        {
          "number": "02",
          "title": "Confirme el plan práctico",
          "text": "Verifique la dirección exacta, el contacto, la fecha, los requisitos para visitantes, el tiempo de viaje, la versión del producto y si estarán disponibles las personas y las áreas de producción relevantes."
        },
        {
          "number": "03",
          "title": "Observe en relación con el brief",
          "text": "Use sus preguntas acordadas sobre producto, muestra, material, embalaje, calidad y capacidad para guiar lo que se ve y lo que necesita aclaración."
        },
        {
          "number": "04",
          "title": "Registre lo observado y lo no observado",
          "text": "Los registros útiles pueden incluir fotografías, notas, respuestas, observaciones de producción, preguntas abiertas y puntos que requieran documentación o seguimiento posterior."
        },
        {
          "number": "05",
          "title": "Haga visible la siguiente decisión",
          "text": "Después de la visita, decida si el proveedor pasa a muestra, una cotización revisada, un pedido de prueba, otra verificación o no debe avanzar."
        }
      ],
      "limitsTitle": "Qué no demuestra una visita a fábrica",
      "limits": [
        {
          "title": "Una visita es una observación en un momento concreto",
          "text": "No garantiza capacidad futura, plantilla estable, materiales, calidad de producción ni rendimiento de entrega."
        },
        {
          "title": "Una instalación no es toda la cadena de suministro",
          "text": "Un proveedor puede usar componentes subcontratados, subproveedores u otras ubicaciones. Pregunte qué trabajo se realiza dónde y cómo se controla el producto relevante."
        },
        {
          "title": "Una visita no sustituye contratos ni trabajos de cumplimiento",
          "text": "Las condiciones comerciales, las pruebas de producto, las normas del mercado de destino, las obligaciones aduaneras y los asuntos legales deben abordarse mediante los procesos adecuados. No se prometen garantías, cumplimiento, resultados legales, resultados de envío ni producción sin defectos."
        }
      ],
      "prepareTitle": "Prepare esto antes de una visita a fábrica",
      "prepare": [
        "La versión del producto, la muestra o la especificación para discutir",
        "Una breve agenda de visita a fábrica con las preguntas que más importan",
        "Dirección exacta de la fábrica, contacto, hora de la reunión y ruta de viaje",
        "Las personas que deben asistir y el apoyo lingüístico necesario",
        "El registro que desea tras la visita: notas, fotos, preguntas abiertas o una decisión sobre el siguiente paso"
      ],
      "routesTitle": "Vaya a la siguiente página útil",
      "routes": [
        {
          "href": "/services/supplier-factory-checks/",
          "title": "Verificaciones de fábrica y proveedores",
          "text": "Vea cómo una comprobación definida sobre el terreno puede estructurarse alrededor de una pregunta concreta.",
          "label": "Explorar comprobaciones de fábrica"
        },
        {
          "href": "/china-route/",
          "title": "Mapa de ruta China",
          "text": "Conecte ubicaciones de fábrica, viajes regionales y un itinerario de aprovisionamiento práctico.",
          "label": "Explorar el mapa de ruta"
        },
        {
          "href": "/fees-and-scope/",
          "title": "Tarifas y alcance",
          "text": "Revise la tarifa confirmada de soporte independiente de viaje a fábrica ($150 por día; aplicable solo cuando el cliente ordena directamente de la fábrica) y los detalles del proyecto que deben acordarse antes del viaje. Nota: comisión mínima de aprovisionamiento del 5% cuando un cliente ordena a través de Sourcing Ally.",
          "label": "Revisar el alcance"
        }
      ],
      "ctaTitle": "Planifique la visita en torno a la pregunta que importa.",
      "ctaText": "Un brief estructurado facilita decidir si una visita a fábrica es útil y qué debe lograr el día.",
      "ctaLabel": "Elabore un brief de proyecto"
    },
    "qualityControlPlan": {
      "metaTitle": "Plan de control de calidad para pedidos en China | Sourcing Ally",
      "metaDescription": "Elabore un plan práctico de control de calidad antes de la producción y el envío, definiendo la referencia aprobada, los puntos de control, los defectos, el embalaje y las decisiones.",
      "eyebrow": "GUÍA DE CONTROL DE CALIDAD",
      "title": "El control de calidad comienza antes de que la fábrica produzca el producto final.",
      "lede": "Una inspección de calidad útil compara lo observado con una referencia conocida. Cuanto más clara esté la versión del producto, los requisitos, las prioridades de defectos, el embalaje y el proceso de decisión, más útil será la inspección posterior.",
      "situationsTitle": "Cuándo es útil esta guía",
      "situations": [
        {
          "title": "Está pasando de la muestra a la producción",
          "text": "La muestra aprobada y los detalles escritos del producto deben convertirse en la referencia para materiales, dimensiones, funcionamiento, apariencia, etiquetas y embalaje."
        },
        {
          "title": "Tiene un producto con riesgo visible o funcional",
          "text": "Los artículos frágiles, la electrónica, los textiles, los productos personalizados, los productos compuestos y el embalaje minorista suelen requerir puntos de control más específicos."
        },
        {
          "title": "Se acerca el envío",
          "text": "Antes de que las mercancías salgan de la fábrica, el comprador debe saber qué se inspecciona, cómo se registran los hallazgos y quién toma la decisión siguiente."
        }
      ],
      "evidenceTitle": "Elabore el plan antes de la inspección",
      "evidenceIntro": "El control de calidad es más útil cuando el proveedor, el comprador y el apoyo local comparan la misma versión del producto y los mismos requisitos prioritarios.",
      "evidence": [
        {
          "number": "01",
          "title": "Defina la referencia aprobada",
          "text": "Relacione la versión actual del producto con planos, fotografías, la muestra, mediciones, notas de materiales, colores, etiquetas y requisitos de embalaje."
        },
        {
          "number": "02",
          "title": "Separe los requisitos críticos de las preferencias",
          "text": "Identifique los aspectos que afectan la seguridad, la función, cuestiones regulatorias, el uso por parte del cliente, la apariencia principal o la preparación para el envío, en lugar de tratar todas las preferencias por igual."
        },
        {
          "number": "03",
          "title": "Elija puntos de control prácticos",
          "text": "Según el proyecto, las inspecciones pueden ser útiles para muestras, materiales, progreso de producción, productos terminados, embalaje y carga o entrega."
        },
        {
          "number": "04",
          "title": "Defina cómo se registrarán los hallazgos",
          "text": "Un registro útil identifica el requisito, la condición observada, la evidencia, la cantidad afectada cuando corresponda, la cuestión pendiente y la siguiente decisión necesaria."
        },
        {
          "number": "05",
          "title": "Decida quién actuará según el resultado",
          "text": "Antes de la inspección, aclare quién recibirá el informe, quién aprueba un retrabajo o la decisión de envío, y cómo se registrará la respuesta del proveedor."
        }
      ],
      "limitsTitle": "Lo que el control de calidad no garantiza",
      "limits": [
        {
          "title": "Una inspección no es una promesa sobre cada unidad",
          "text": "El alcance, el momento, el acceso al producto, el método de muestreo y los requisitos definidos afectan lo que se puede observar. Ninguna inspección puede garantizar que todas las unidades futuras estén libres de defectos."
        },
        {
          "title": "Inspección y cumplimiento son diferentes",
          "text": "Una inspección de calidad puede verificar los requisitos definidos del producto. No reemplaza las pruebas de laboratorio necesarias, el asesoramiento legal, las certificaciones ni la evaluación de cumplimiento para el mercado de destino."
        },
        {
          "title": "Un informe necesita la decisión del comprador",
          "text": "Las observaciones por sí solas no resuelven un problema. El comprador y el proveedor aún deben decidir si aceptar, retrabajar, reemplazar, investigar o retrasar la entrega."
        }
      ],
      "prepareTitle": "Prepare lo siguiente antes de una inspección de calidad",
      "prepare": [
        "La referencia aprobada del producto y del embalaje",
        "Mediciones, materiales, funciones, colores, etiquetas y detalles de embalaje que importan",
        "Una lista práctica de preocupaciones críticas, principales y menores para el producto",
        "Cronograma de producción, cantidad, dirección de la fábrica y etapa esperada de la inspección",
        "Quién revisará los resultados y aprobará la siguiente acción"
      ],
      "routesTitle": "Ir a la siguiente página útil",
      "routes": [
        {
          "href": "/services/quality-control/",
          "title": "Soporte de control de calidad",
          "text": "Vea cómo los requisitos de calidad pueden definirse según su producto y la etapa del proyecto.",
          "label": "Explorar control de calidad"
        },
        {
          "href": "/product-samples/",
          "title": "Muestras de producto y aprobación",
          "text": "Vincule la muestra aprobada con una referencia de producción más clara antes de planificar una inspección.",
          "label": "Revisar la planificación de muestras"
        },
        {
          "href": "/services/packaging/",
          "title": "Coordinación de embalaje",
          "text": "Haga del embalaje parte de la inspección del producto y del envío, en lugar de un detalle considerado después de la producción.",
          "label": "Explorar embalaje"
        }
      ],
      "ctaTitle": "Defina la pregunta de calidad antes de que las mercancías estén listas.",
      "ctaText": "Un breve resumen del proyecto puede identificar la versión del producto, los requisitos prioritarios, los plazos y la decisión que su inspección de calidad debe respaldar.",
      "ctaLabel": "Elabore un resumen del proyecto"
    }
  },
  "pt": {
    "supplierVerification": {
      "metaTitle": "Verifique um fornecedor chinês antes de pagar | Sourcing Ally",
      "metaDescription": "Use um caminho prático baseado em evidências para decidir se um fornecedor chinês deve avançar para amostras, visita à fábrica, pedido de teste ou novas perguntas.",
      "eyebrow": "GUIA DE DECISÃO DE FORNECEDOR",
      "title": "Antes do depósito, torne a pergunta sobre o fornecedor mais específica.",
      "lede": "Verificação de fornecedor não é um único documento ou uma única videochamada. É uma sequência de checagens que ajuda você a decidir quais evidências já tem, o que ainda é desconhecido e se o fornecedor deve avançar para a etapa seguinte. Observação: taxa mínima de sourcing de 5% quando o cliente faz o pedido através da Sourcing Ally. Se o cliente encomendar diretamente de uma fábrica, o suporte independente para viagens à fábrica custa $150 por dia. A empresa não trabalha com bens perigosos ou produtos militares. Não prometemos garantias, conformidade, resultados legais, resultados de envio nem produção sem defeitos.",
      "situationsTitle": "Quando este guia é útil",
      "situations": [
        {
          "title": "Você tem várias cotações",
          "text": "Você precisa comparar respostas de diferentes fornecedores sem tratar o menor valor como decisão definitiva."
        },
        {
          "title": "Você está prestes a enviar dinheiro",
          "text": "Você precisa de uma imagem mais clara de quem vai receber o pagamento, qual versão do produto está sendo cotada e quais evidências apoiam o próximo passo."
        },
        {
          "title": "O pedido é personalizado ou importante",
          "text": "Um produto com materiais especiais, embalagem, ferramental, maior valor ou plano de reordenação merece um caminho de evidências mais deliberado."
        }
      ],
      "evidenceTitle": "Construa evidências em camadas",
      "evidenceIntro": "A questão útil não é apenas saber se um fornecedor parece bom online. É se a identidade, o produto, a cotação, a comunicação e as informações de produção fazem sentido em conjunto.",
      "evidence": [
        {
          "number": "01",
          "title": "Esclareça a entidade e o papel",
          "text": "Pergunte com quem você está falando, se o negócio é uma fábrica, uma trading company ou outro tipo, e onde ocorre a atividade produtiva relevante."
        },
        {
          "number": "02",
          "title": "Compare a cotação com o briefing",
          "text": "Verifique se materiais, dimensões, quantidades, embalagem, ferramental, prazo de entrega, condições de pagamento e pressupostos declarados se referem à mesma versão do produto."
        },
        {
          "number": "03",
          "title": "Peça evidências específicas do produto",
          "text": "Use fotografias, respostas técnicas, discussão sobre amostras, questões de produção e documentos relevantes para testar se o fornecedor entende seu requisito real."
        },
        {
          "number": "04",
          "title": "Siga as inconsistências",
          "text": "Endereço que muda, alteração de preço sem explicação, respostas vagas, detalhes do produto incompatíveis ou relutância em esclarecer uma questão devem levar a outra pergunta, não a uma reprovação ou aprovação automática."
        },
        {
          "number": "05",
          "title": "Escolha o próximo passo de evidência",
          "text": "Dependendo do projeto, o próximo passo adequado pode ser uma amostra, uma visita à fábrica, uma videochamada, um pedido de teste ou uma comparação escrita mais detalhada."
        }
      ],
      "limitsTitle": "O que a verificação não prova",
      "limits": [
        {
          "title": "Um documento não é garantia de desempenho futuro",
          "text": "Informações comerciais podem ajudar a identificar uma empresa, mas não garantem capacidade futura, qualidade, condição financeira, conformidade legal ou entrega."
        },
        {
          "title": "Uma visita é uma observação específica no tempo",
          "text": "Uma visita à fábrica registra o que foi observado naquele dia. Não pode garantir todos os lotes futuros de produção nem todas as decisões de subcontratação."
        },
        {
          "title": "O comprador mantém a aprovação comercial",
          "text": "Você decide se paga, encomenda, aprova um fornecedor ou muda o projeto. O suporte de sourcing deve fornecer informações mais claras para essa decisão."
        }
      ],
      "prepareTitle": "Prepare isto antes de comparar fornecedores",
      "prepare": [
        "Uma descrição do produto, fotos, desenho ou amostra de referência",
        "Quantidade alvo, mercado de destino e prazo",
        "Requisitos conhecidos de material, dimensão, embalagem, rótulo ou testes",
        "A versão do produto que todos os fornecedores devem cotar",
        "A decisão que você precisa tomar após receber a comparação"
      ],
      "routesTitle": "Vá para a próxima página útil",
      "routes": [
        {
          "href": "/services/supplier-sourcing/",
          "title": "Apoio na seleção de fornecedores",
          "text": "Veja como uma lista restrita de fornecedores pode ser estruturada em torno do seu briefing específico.",
          "label": "Explorar seleção de fornecedores"
        },
        {
          "href": "/questions/",
          "title": "Perguntas de verificação de fornecedor",
          "text": "Leia respostas práticas antes de confiar em um perfil online ou em uma declaração do fornecedor.",
          "label": "Explorar perguntas"
        },
        {
          "href": "/blog/supplier-verification-checklist-guide/",
          "title": "Checklist de verificação",
          "text": "Use o guia do Journal para preparar uma comparação baseada em evidências antes do depósito.",
          "label": "Ler o checklist"
        }
      ],
      "ctaTitle": "Comece pela pergunta que você precisa responder sobre o fornecedor.",
      "ctaText": "Um briefing curto pode identificar o que deve ser comparado, verificado ou esclarecido antes do próximo compromisso.",
      "ctaLabel": "Elaborar um briefing do projeto"
    },
    "productSamples": {
      "metaTitle": "Amostras de Produtos da China: Guia de Aprovação | Sourcing Ally",
      "metaDescription": "Utilize um caminho prático de aprovação de amostras para definir a versão do produto, revisar alterações, registrar feedback e decidir o que está pronto para produção. Observação: taxa mínima de sourcing de 5% quando o cliente encomenda através da Sourcing Ally; $150 por dia apenas para suporte de viagem independente à fábrica quando o cliente encomenda diretamente de uma fábrica; a empresa não trabalha com produtos perigosos ou militares; nunca prometemos garantias, conformidade, resultados legais, resultados de envio ou produção sem defeitos.",
      "eyebrow": "GUIA DE DECISÃO DE AMOSTRA",
      "title": "Uma amostra é útil quando se torna uma decisão de produção registrada.",
      "lede": "Uma amostra pode mostrar um produto, mas também pode expor questões não respondidas sobre materiais, dimensões, função, cor, embalagem e comunicação. O valor vem de transformar a revisão em uma instrução clara para o próximo passo.",
      "situationsTitle": "Quando este guia é útil",
      "situations": [
        {
          "title": "Você está fazendo sourcing de um novo produto",
          "text": "A primeira amostra é o momento para testar se o briefing escrito e o entendimento do fornecedor estão alinhados."
        },
        {
          "title": "Você está alterando um produto ou embalagem",
          "text": "Um material, acabamento, rótulo, folheto, arte ou caixa revisados podem criar uma nova versão que precisa ser avaliada separadamente."
        },
        {
          "title": "Você está próximo da aprovação para produção",
          "text": "Antes do início da produção, o comprador precisa distinguir o que está aprovado, o que permanece em aberto e o que deve ser verificado depois."
        }
      ],
      "evidenceTitle": "Use a amostra como um ponto de revisão controlado",
      "evidenceIntro": "A revisão da amostra deve conectar o item físico ao briefing escrito, à cotação do fornecedor e à transição para a produção. Um registro curto e específico é mais útil do que uma mensagem genérica dizendo que está bom.",
      "evidence": [
        {
          "number": "01",
          "title": "Nomeie a versão",
          "text": "Registre a data, o fornecedor, o nome do produto, material, cor, dimensões, versão da embalagem e qualquer número de revisão para que todos discutam o mesmo item."
        },
        {
          "number": "02",
          "title": "Verifique os requisitos que importam",
          "text": "Revise função, aparência, medidas, materiais, acabamento, rótulos, embalagem e qualquer requisito específico do produto que afete o comprador ou o usuário final."
        },
        {
          "number": "03",
          "title": "Separe defeitos de escolhas",
          "text": "Um defeito, uma decisão pendente e uma preferência são coisas diferentes. Marque quais pontos devem mudar, quais são aceitos e quais precisam de uma decisão por escrito."
        },
        {
          "number": "04",
          "title": "Crie um registro de revisão",
          "text": "Use fotos, anotações, medições ou uma lista numerada para que as alterações solicitadas não virem uma mensagem ambígua em chat."
        },
        {
          "number": "05",
          "title": "Defina a referência de produção",
          "text": "Se você aprovar uma versão, explique o que a aprovação cobre e quais elementos — como embalagem, componentes, rótulos ou pontos de verificação de qualidade — ainda exigem confirmação separada."
        }
      ],
      "limitsTitle": "O que a aprovação da amostra não comprova",
      "limits": [
        {
          "title": "Uma amostra pode não representar a produção em massa",
          "text": "Uma amostra feita à mão, de engenharia ou pré-produção pode diferir da produção posterior. Pergunte qual versão você está avaliando e como a fábrica controlará a consistência."
        },
        {
          "title": "A aprovação não substitui o trabalho de conformidade",
          "text": "Testes para o mercado de destino, rótulos, obrigações do importador, revisão legal e avaliações técnicas especializadas continuam sendo responsabilidades separadas."
        },
        {
          "title": "Uma foto não é uma especificação completa",
          "text": "Uma foto da amostra pode apoiar uma decisão, mas dimensões, detalhes do material, tolerâncias, rótulos, embalagem e outros requisitos devem ser registrados claramente."
        }
      ],
      "prepareTitle": "Prepare isto antes de uma revisão de amostra",
      "prepare": [
        "A cotação do fornecedor e a versão exata do produto que será avaliada",
        "Imagens de referência, desenhos, medições, cores e notas sobre materiais",
        "O mercado de destino e quaisquer dúvidas conhecidas sobre rótulos ou testes",
        "Uma ficha de revisão para pontos que devem mudar, pontos aceitos e questões em aberto",
        "A decisão de produção que você quer que a amostra suporte"
      ],
      "routesTitle": "Siga para a próxima página útil",
      "routes": [
        {
          "href": "/services/sample-sourcing/",
          "title": "Suporte para sourcing de amostras",
          "text": "Entenda como as amostras podem ser vinculadas às dúvidas do fornecedor e a um registro de aprovação mais claro.",
          "label": "Explorar amostras"
        },
        {
          "href": "/start-project/",
          "title": "Construtor de Briefing do Projeto",
          "text": "Transforme uma ideia, quantidade e incertezas em um briefing inicial estruturado antes de solicitar amostras.",
          "label": "Elabore seu briefing"
        },
        {
          "href": "/quality-control-plan/",
          "title": "Planejamento de controle de qualidade",
          "text": "Vincule uma versão aprovada do produto às verificações que devem importar durante a produção e antes do envio.",
          "label": "Planejar controle de qualidade"
        }
      ],
      "ctaTitle": "Facilite a execução da próxima revisão de amostra.",
      "ctaText": "Compartilhe a versão do produto, a amostra do fornecedor e a decisão que você precisa tomar. O próximo passo poderá então ser definido com mais clareza.",
      "ctaLabel": "Elabore um briefing de projeto"
    },
    "factoryVisits": {
      "metaTitle": "Visitas a Fábricas na China: Guia de Planejamento para Compradores | Sourcing Ally",
      "metaDescription": "Decida quando uma visita à fábrica é útil, o que preparar, o que observar e o que uma visita não pode garantir. Taxa mínima de sourcing de 5% quando um cliente faz o pedido através da Sourcing Ally. Suporte de viagem independente à fábrica: $150 por dia somente quando o cliente encomenda diretamente de uma fábrica. A empresa não trabalha com produtos perigosos ou militares.",
      "eyebrow": "GUIA DE VISITA À FÁBRICA",
      "title": "Uma visita à fábrica funciona melhor quando é orientada por uma decisão, não pela curiosidade.",
      "lede": "Uma visita pode tornar a conversa com o fornecedor mais concreta. É mais útil quando o comprador sabe o que precisa ser observado, quais perguntas devem ser respondidas e qual decisão a visita deve embasar.",
      "situationsTitle": "Quando uma visita pode ser útil",
      "situations": [
        {
          "title": "O produto ou pedido tem riscos significativos",
          "text": "Customização, processo técnico, maior valor, planos de pedidos recorrentes ou alegações de produção pouco claras podem justificar evidências mais diretas."
        },
        {
          "title": "As informações do fornecedor precisam ser verificadas",
          "text": "Uma visita pode ajudar a esclarecer o endereço de produção, o foco do produto, o fluxo de produção, equipamentos, materiais, comunicação e as dúvidas levantadas pelo comprador."
        },
        {
          "title": "Você está viajando pela China",
          "text": "Um dia de viagem vale mais quando reuniões, perguntas, versões do produto, endereços das fábricas e o plano de relatório são combinados antes do itinerário."
        }
      ],
      "evidenceTitle": "Planeje a visita com base em evidências",
      "evidenceIntro": "A visita mais útil tem uma agenda. Deve conectar seus requisitos de produto com o contexto físico de produção e as decisões que você tomará em seguida.",
      "evidence": [
        {
          "number": "01",
          "title": "Defina a pergunta da visita",
          "text": "Decida se a visita trata principalmente de identidade do fornecedor, capacidade do produto, discussão de amostras, fluxo de processo, materiais, embalagem, controles de qualidade ou outra questão definida."
        },
        {
          "number": "02",
          "title": "Confirme o plano prático",
          "text": "Verifique o endereço exato, contato, data, exigências para visitantes, tempo de deslocamento, versão do produto e se as pessoas e áreas de produção relevantes estarão disponíveis."
        },
        {
          "number": "03",
          "title": "Observe com base no briefing",
          "text": "Use suas perguntas acordadas sobre produto, amostra, material, embalagem, qualidade e capacidade para orientar o que deve ser visto e o que precisa de esclarecimento."
        },
        {
          "number": "04",
          "title": "Registre o que foi e não foi observado",
          "text": "Registros úteis podem incluir fotografias, anotações, respostas, observações de produção, questões em aberto e pontos que exigem documentação ou acompanhamento posterior."
        },
        {
          "number": "05",
          "title": "Deixe a próxima decisão visível",
          "text": "Após a visita, decida se o fornecedor avança para uma amostra, uma cotação revisada, um pedido de teste, outra verificação ou não deve progredir."
        }
      ],
      "limitsTitle": "O que uma visita à fábrica não prova",
      "limits": [
        {
          "title": "Uma visita é uma observação em um ponto no tempo",
          "text": "Ela não garante capacidade futura, manutenção estável de equipe, disponibilidade de materiais, qualidade de produção constante ou desempenho de entrega."
        },
        {
          "title": "Uma instalação não é toda a cadeia de fornecimento",
          "text": "Um fornecedor pode usar componentes terceirizados, subcontratados ou outras localidades. Pergunte quais trabalhos ocorrem onde e como o produto relevante é controlado."
        },
        {
          "title": "Uma visita não substitui contratos nem trabalho de conformidade",
          "text": "Termos comerciais, testes de produto, regras do mercado de destino, obrigações alfandegárias e questões legais ainda devem ser tratadas pelos processos apropriados. A empresa não trabalha com produtos perigosos ou militares."
        }
      ],
      "prepareTitle": "Prepare isto antes da visita à fábrica",
      "prepare": [
        "A versão do produto, amostra ou especificação para discutir",
        "Uma agenda curta da visita com as perguntas mais importantes",
        "Endereço exato da fábrica, contato, horário da reunião e rota de deslocamento",
        "As pessoas que devem participar e o suporte de idioma necessário",
        "O registro que você deseja após a visita: notas, fotos, questões em aberto ou uma decisão sobre o próximo passo"
      ],
      "routesTitle": "Vá para a próxima página útil",
      "routes": [
        {
          "href": "/services/supplier-factory-checks/",
          "title": "Verificações de fábrica e fornecedor",
          "text": "Veja como uma verificação definida em campo pode ser planejada em torno de uma questão específica.",
          "label": "Explorar verificações de fábrica"
        },
        {
          "href": "/china-route/",
          "title": "Mapa de rotas na China",
          "text": "Conecte locais de fábricas, deslocamentos regionais e um itinerário prático de sourcing.",
          "label": "Explorar o mapa de rotas"
        },
        {
          "href": "/fees-and-scope/",
          "title": "Taxas e escopo",
          "text": "Revise a taxa confirmada de viagem independente à fábrica e os detalhes do projeto que devem ser acordados antes da viagem. Taxa mínima de sourcing de 5% quando um cliente faz o pedido através da Sourcing Ally. $150 por dia somente para suporte de viagem independente à fábrica quando o cliente encomenda diretamente de uma fábrica.",
          "label": "Rever o escopo"
        }
      ],
      "ctaTitle": "Planeje a visita em torno da pergunta que importa.",
      "ctaText": "Um briefing estruturado facilita decidir se uma visita à fábrica é útil e o que o dia deve alcançar.",
      "ctaLabel": "Criar um briefing de projeto"
    },
    "qualityControlPlan": {
      "metaTitle": "Plano de Controle de Qualidade para Pedidos da China | Sourcing Ally",
      "metaDescription": "Crie um plano prático de controle de qualidade antes da produção e do envio, definindo a referência aprovada, pontos de verificação, defeitos, embalagem e decisões.",
      "eyebrow": "GUIA DE CONTROLE DE QUALIDADE",
      "title": "O controle de qualidade começa antes da fábrica produzir o produto final.",
      "lede": "Uma verificação de qualidade útil compara o que é observado com uma referência conhecida. Quanto mais claras estiverem a versão do produto, os requisitos, as prioridades de defeitos, a embalagem e o processo decisório, mais útil será a inspeção posterior.",
      "situationsTitle": "Quando este guia é útil",
      "situations": [
        {
          "title": "Você está passando da amostra para a produção",
          "text": "A amostra aprovada e os detalhes escritos do produto devem tornar-se a referência para materiais, dimensões, função, aparência, etiquetas e embalagem."
        },
        {
          "title": "Você tem um produto com risco visível ou funcional",
          "text": "Itens frágeis, eletrônicos, têxteis, produtos personalizados, produtos com várias peças e embalagens de varejo frequentemente precisam de pontos de verificação mais específicos."
        },
        {
          "title": "Você está se aproximando do embarque",
          "text": "Antes que as mercadorias saiam da fábrica, o comprador deve saber o que será verificado, como as constatações serão registradas e quem decide a próxima ação."
        }
      ],
      "evidenceTitle": "Elabore o plano antes da inspeção",
      "evidenceIntro": "O controle de qualidade é mais útil quando o fornecedor, o comprador e o suporte local estão comparando a mesma versão do produto e as mesmas prioridades de requisitos.",
      "evidence": [
        {
          "number": "01",
          "title": "Defina a referência aprovada",
          "text": "Vincule a versão atual do produto a desenhos, fotos, amostras, medidas, notas de materiais, cores, etiquetas e requisitos de embalagem."
        },
        {
          "number": "02",
          "title": "Separe requisitos críticos de preferências",
          "text": "Identifique os pontos que afetam segurança, função, questões regulatórias, uso pelo cliente, aparência principal ou prontidão para envio, em vez de tratar toda preferência como equivalente."
        },
        {
          "number": "03",
          "title": "Escolha pontos de verificação práticos",
          "text": "Dependendo do projeto, as verificações podem ser úteis para amostras, materiais, progresso da produção, produtos acabados, embalagem e carregamento ou transferência."
        },
        {
          "number": "04",
          "title": "Defina como as constatações serão registradas",
          "text": "Um registro útil identifica o requisito, a condição observada, as evidências, a quantidade afetada quando relevante, questões em aberto e a próxima decisão necessária."
        },
        {
          "number": "05",
          "title": "Decida quem age com base no resultado",
          "text": "Antes da verificação, esclareça quem receberá o relatório, quem aprova retrabalho ou decisão de envio, e como a resposta do fornecedor será registrada."
        }
      ],
      "limitsTitle": "O que o controle de qualidade não garante",
      "limits": [
        {
          "title": "Uma verificação não é uma garantia sobre cada unidade",
          "text": "O escopo, o timing, o acesso ao produto, o método de amostragem e os requisitos definidos afetam o que pode ser observado. Nenhuma verificação pode garantir que todas as unidades futuras estarão livres de defeitos."
        },
        {
          "title": "Inspeção e conformidade são diferentes",
          "text": "Uma verificação de qualidade pode observar requisitos definidos do produto. Ela não substitui testes laboratoriais obrigatórios, aconselhamento jurídico, certificações ou a avaliação de conformidade para o mercado de destino."
        },
        {
          "title": "Um relatório exige decisão do comprador",
          "text": "Apenas as observações não resolvem um problema. Comprador e fornecedor ainda precisam decidir se aceitam, retrabalham, substituem, investigam ou adiam a transferência."
        }
      ],
      "prepareTitle": "Prepare isto antes de uma verificação de qualidade",
      "prepare": [
        "A referência aprovada do produto e da embalagem",
        "Medidas, materiais, funcionalidades, cores, etiquetas e detalhes de embalagem relevantes",
        "Uma lista prática de preocupações críticas, principais e secundárias para o produto",
        "Cronograma de produção, quantidade, endereço da fábrica e etapa esperada da verificação",
        "Quem revisará as constatações e aprovará a próxima ação"
      ],
      "routesTitle": "Vá para a próxima página útil",
      "routes": [
        {
          "href": "/services/quality-control/",
          "title": "Suporte de controle de qualidade",
          "text": "Veja como os requisitos de qualidade podem ser definidos conforme seu produto e estágio do projeto.",
          "label": "Explorar controle de qualidade"
        },
        {
          "href": "/product-samples/",
          "title": "Amostras de produto e aprovação",
          "text": "Vincule a amostra aprovada a uma referência de produção mais clara antes de planejar a verificação.",
          "label": "Revisar planejamento de amostras"
        },
        {
          "href": "/services/packaging/",
          "title": "Coordenação de embalagem",
          "text": "Inclua a embalagem como parte da verificação do produto e do envio, em vez de um detalhe considerado após a produção.",
          "label": "Explorar embalagem"
        }
      ],
      "ctaTitle": "Defina a questão de qualidade antes de as mercadorias estarem prontas.",
      "ctaText": "Um breve resumo do projeto pode identificar a versão do produto, requisitos prioritários, cronograma e a decisão que sua verificação de qualidade deve apoiar.",
      "ctaLabel": "Elaborar um resumo do projeto"
    }
  },
  "ru": {
    "supplierVerification": {
      "metaTitle": "Проверьте китайского поставщика прежде чем оплатить | Sourcing Ally",
      "metaDescription": "Используйте практическую последовательность проверок, чтобы решить, должен ли китайский поставщик перейти к образцам, визиту на фабрику, пробному заказу или к дополнительным вопросам.",
      "eyebrow": "РУКОВОДСТВО ПО ВЫБОРУ ПОСТАВЩИКА",
      "title": "До внесения депозита уточните вопросы к поставщику.",
      "lede": "Проверка поставщика — это не один документ и не один видеозвонок. Это последовательность проверок, которая помогает понять, какие у вас есть доказательства, что остаётся неизвестным и следует ли переводить поставщика на следующий этап. Sourcing Ally взимает минимум 5% комиссии за услуги по поиску при заказе через Sourcing Ally. При прямом заказе у фабрики независимая поддержка поездок на фабрику стоит $150 в день. Компания не работает с опасными или военными товарами. Мы никогда не обещаем гарантии, соответствие, юридические исходы, результаты доставки или полностью бездефектное производство.",
      "situationsTitle": "Когда это руководство полезно",
      "situations": [
        {
          "title": "У вас несколько коммерческих предложений",
          "text": "Вам нужно сравнить ответы разных поставщиков, при этом не считать самое низкое число единственным основанием для решения."
        },
        {
          "title": "Вы собираетесь отправлять деньги",
          "text": "Нужна более ясная картина того, кто получает оплату, какая версия продукта указана в смете и какие доказательства подкрепляют следующий шаг."
        },
        {
          "title": "Заказ нестандартный или важный",
          "text": "Продукт с особыми материалами, упаковкой, инструментами, большой стоимостью или планом повторных заказов требует более продуманной последовательности доказательств."
        }
      ],
      "evidenceTitle": "Формируйте доказательства слоями",
      "evidenceIntro": "Вопрос не в том, выглядит ли поставщик хорошо в интернете. Важно, согласуются ли данные о компании, продукте, смете, коммуникации и производстве друг с другом.",
      "evidence": [
        {
          "number": "01",
          "title": "Уточните юридическое лицо и роль",
          "text": "Узнайте, с кем вы ведёте коммуникацию: фабрика это, торговая компания или иная роль, и где именно происходит релевантная производственная деятельность."
        },
        {
          "number": "02",
          "title": "Сравните смету с техзаданием",
          "text": "Проверьте, что материалы, размеры, количества, упаковка, оснастка, сроки, условия оплаты и указанные допущения относятся к одной и той же версии продукта."
        },
        {
          "number": "03",
          "title": "Попросите доказательства, относящиеся к продукту",
          "text": "Используйте фотографии, технические ответы, обсуждение образцов, вопросы по производству и релевантные документы, чтобы проверить понимание поставщиком ваших реальных требований."
        },
        {
          "number": "04",
          "title": "Преследуйте несоответствия",
          "text": "Изменяющийся адрес, необъяснимое изменение цены, расплывчатые ответы, несоответствие деталей продукта или нежелание прояснить вопрос должны приводить к следующему вопросу, а не к автоматическому одобрению или отклонению."
        },
        {
          "number": "05",
          "title": "Выберите следующий этап сбора доказательств",
          "text": "В зависимости от проекта уместными следующими шагами могут быть образец, визит на фабрику, видеозвонок, пробный заказ или более детальное письменное сравнение."
        }
      ],
      "limitsTitle": "Что проверка не доказывает",
      "limits": [
        {
          "title": "Документ не является гарантией будущего выполнения",
          "text": "Информация о бизнесе может помочь идентифицировать компанию, но не гарантирует будущую производственную мощность, качество, финансовое состояние, юридическое соответствие или доставку."
        },
        {
          "title": "Визит — это наблюдение в определённый момент",
          "text": "Визит на фабрику фиксирует то, что видно в день визита. Он не может гарантировать каждую будущую производственную партию или каждое субподрядное решение."
        },
        {
          "title": "Коммерческое решение остаётся за покупателем",
          "text": "Вы решаете, платить ли, размещать заказ, утверждать поставщика или менять проект. Сопровождение при подборе поставщиков должно предоставить более ясную информацию для этого решения."
        }
      ],
      "prepareTitle": "Подготовьте это перед сравнением поставщиков",
      "prepare": [
        "Описание продукта, фотографии, чертеж или эталонный образец",
        "Целевой объём, рынок назначения и сроки",
        "Известные требования к материалам, размерам, упаковке, маркировке или тестированию",
        "Версия продукта, по которой каждый поставщик должен сделать смету",
        "Решение, которое нужно принять после получения сравнения"
      ],
      "routesTitle": "Перейдите к следующей полезной странице",
      "routes": [
        {
          "href": "/services/supplier-sourcing/",
          "title": "Поддержка в поиске поставщиков",
          "text": "Узнайте, как шорт-лист поставщиков может быть структурирован вокруг вашего конкретного техзадания.",
          "label": "Изучить поиск поставщиков"
        },
        {
          "href": "/questions/",
          "title": "Вопросы для проверки поставщика",
          "text": "Прочитайте практичные ответы перед тем, как полагаться на онлайн‑профиль или заявление поставщика.",
          "label": "Изучить вопросы"
        },
        {
          "href": "/blog/supplier-verification-checklist-guide/",
          "title": "Чеклист проверки",
          "text": "Используйте руководство в Журнале, чтобы подготовить основанное на доказательствах сравнение перед внесением депозита.",
          "label": "Прочитать чеклист"
        }
      ],
      "ctaTitle": "Начните с вопроса к поставщику, который вам нужно решить.",
      "ctaText": "Краткое техзадание поможет определить, что нужно сравнить, проверить или прояснить перед следующим обязательством.",
      "ctaLabel": "Составить техзадание"
    },
    "productSamples": {
      "metaTitle": "Образцы продукции из Китая: руководство по утверждению | Sourcing Ally",
      "metaDescription": "Практичная схема утверждения образцов, чтобы зафиксировать версию продукта, учесть изменения, записать замечания и принять решение о готовности к производству.",
      "eyebrow": "Руководство по решению по образцам",
      "title": "Образец полезен, когда он превращается в зафиксированное производственное решение.",
      "lede": "Образец может показать товар, но также выявить нерешённые вопросы по материалам, размерам, функции, цвету, упаковке и коммуникации. Ценность в том, чтобы превратить проверку в чёткую дальнейшую инструкцию. Обратите внимание: при заказе через Sourcing Ally применяется минимальная комиссия за поиск 5%. При прямых заказах у завода доступна независимая поддержка поездок на фабрику — $150 per day. Компания не работает с опасными или военными товарами. Мы не даём обещаний гарантий, соблюдения требований, юридических исходов, результатов доставки или бездефектного производства.",
      "situationsTitle": "Когда это руководство полезно",
      "situations": [
        {
          "title": "Вы закупаете новый продукт",
          "text": "Первый образец — момент проверить, совпадает ли письменное техническое задание и понимание поставщика."
        },
        {
          "title": "Вы вносите изменения в продукт или упаковку",
          "text": "Изменённый материал, отделка, маркировка, вкладыш, макет или коробка могут создать новую версию, которую нужно проверять отдельно."
        },
        {
          "title": "Вы близки к утверждению для производства",
          "text": "Перед стартом производства покупателю необходимо чётко разделить, что утверждено, что остаётся открытым и что следует проверить позже."
        }
      ],
      "evidenceTitle": "Используйте образец как контролируемую точку проверки",
      "evidenceIntro": "Проверка образца должна связать физический предмет с письменным заданием, коммерческим предложением поставщика и передачей в производство. Короткая, конкретная запись полезнее общего сообщения типа «всё хорошо».",
      "evidence": [
        {
          "number": "01",
          "title": "Назовите версию",
          "text": "Зафиксируйте дату, поставщика, название продукта, материал, цвет, размеры, версию упаковки и номер ревизии, чтобы все обсуждали один и тот же образец."
        },
        {
          "number": "02",
          "title": "Проверьте важные требования",
          "text": "Пересмотрите функцию, внешний вид, размеры, материалы, отделку, маркировку, упаковку и любые специфические требования, влияющие на покупателя или конечного пользователя."
        },
        {
          "number": "03",
          "title": "Отделяйте дефекты от решений",
          "text": "Дефект, незавершённое решение и предпочтение — разные вещи. Отметьте, что должно быть исправлено, что принимается и что требует письменного решения."
        },
        {
          "number": "04",
          "title": "Создайте запись о правках",
          "text": "Используйте фотографии, пометки, замеры или нумерованный список, чтобы запрашиваемые изменения не превратились в неоднозначное сообщение в чате."
        },
        {
          "number": "05",
          "title": "Определите производственный эталон",
          "text": "Если вы утверждаете версию, укажите, что именно покрывает утверждение и какие элементы — например упаковка, комплектующие, ярлыки или контрольные точки качества — требуют отдельного подтверждения."
        }
      ],
      "limitsTitle": "Что подтверждение образца не доказывает",
      "limits": [
        {
          "title": "Один образец может не представлять массовое производство",
          "text": "Ручной, инженерный или предпроизводственный образец может отличаться от серийного. Уточните, какую версию вы проверяете и как фабрика будет контролировать консистентность."
        },
        {
          "title": "Утверждение не заменяет работу по соответствию требованиям",
          "text": "Тестирование для целевого рынка, маркировка, обязанности импортёра, юридическая проверка и специализированная техническая экспертиза остаются отдельной ответственностью."
        },
        {
          "title": "Фото — не полная спецификация",
          "text": "Фотография образца может поддержать решение, но размеры, данные о материалах, допуски, маркировка, упаковка и другие требования всё равно должны быть чётко зафиксированы."
        }
      ],
      "prepareTitle": "Подготовьте это до проверки образца",
      "prepare": [
        "Коммерческое предложение поставщика и точная версия продукта, которая проходит проверку",
        "Контрольные изображения, чертежи, замеры, цвета и примечания по материалам",
        "Целевой рынок и любые известные вопросы по маркировке или тестированию",
        "Лист проверки для пунктов, которые нужно исправить, пунктов, которые принимаются, и открытых вопросов",
        "Решение о производстве, которое вы хотите поддержать при помощи образца"
      ],
      "routesTitle": "Переход к следующему полезному разделу",
      "routes": [
        {
          "href": "/services/sample-sourcing/",
          "title": "Поддержка в подборе образцов",
          "text": "Поймите, как образцы связаны с вопросами к поставщику и как оформить более чёткую запись об утверждении.",
          "label": "Изучить образцы"
        },
        {
          "href": "/start-project/",
          "title": "Конструктор технического задания проекта",
          "text": "Преобразуйте идею, объём и неизвестные параметры в структурированное стартовое ТЗ перед запросом образцов.",
          "label": "Собрать ТЗ"
        },
        {
          "href": "/quality-control-plan/",
          "title": "Планирование контроля качества",
          "text": "Свяжите утверждённую версию продукта с проверками, которые имеют значение в производстве и перед отгрузкой.",
          "label": "План контроля качества"
        }
      ],
      "ctaTitle": "Сделайте следующую проверку образца проще для действий.",
      "ctaText": "Поделитесь версией продукта, образцом поставщика и решением, которое нужно принять. Тогда следующий шаг можно будет определить яснее.",
      "ctaLabel": "Собрать ТЗ"
    },
    "factoryVisits": {
      "metaTitle": "Посещение фабрики в Китае: руководство для покупателя | Sourcing Ally",
      "metaDescription": "Решите, когда посещение фабрики действительно полезно, что подготовить, на что обратить внимание и чего визит не доказывает. Минимальная комиссия за sourcing — 5% при заказе через Sourcing Ally. При прямом заказе у фабрики поддержка поездок по фабрике — $150 в день (только для независимой поддержки поездок). Компания не работает с опасными или военными товарами. Sourcing Ally не даёт гарантий соответствия, юридических или транспортных результатов или отсутствия дефектов.",
      "eyebrow": "РУКОВОДСТВО ПО ПОСЕЩЕНИЮ ФАБРИК",
      "title": "Посещение фабрики наиболее эффективно, когда оно преследует решение, а не просто любопытство.",
      "lede": "Визит помогает сделать разговор с поставщиком более конкретным. Он наиболее полезен, когда покупатель заранее знает, что нужно наблюдать, какие вопросы должны получить ответ и какое решение должен прояснить визит.",
      "situationsTitle": "Когда визит может быть полезен",
      "situations": [
        {
          "title": "Продукт или заказ имеют значимые риски",
          "text": "Кастомизация, технологически сложный процесс, более высокая стоимость, планы повторных заказов или сомнительные производственные утверждения могут оправдать необходимость в более прямых доказательствах."
        },
        {
          "title": "Информацию от поставщика нужно проверить",
          "text": "Визит помогает уточнить адрес производства, специализацию продукции, производственный поток, оборудование, материалы, коммуникацию и те вопросы, которые волнуют покупателя."
        },
        {
          "title": "Вы путешествуете по Китаю",
          "text": "День поездки становится более ценным, если до составления маршрута согласованы встречи, вопросы, версии продукта, адреса фабрик и план отчётности."
        }
      ],
      "evidenceTitle": "Планируйте визит, опираясь на доказательства",
      "evidenceIntro": "Самый полезный визит проходит по заранее составленной повестке. Он должен связывать требования к продукту с реальным производственным контекстом и с теми решениями, которые вы примете после возвращения.",
      "evidence": [
        {
          "number": "01",
          "title": "Определите вопрос визита",
          "text": "Решите, касается ли визит в основном идентификации поставщика, производственных возможностей, обсуждения образцов, технологического процесса, материалов, упаковки, контроля качества или другой чётко сформулированной проблемы."
        },
        {
          "number": "02",
          "title": "Подтвердите практический план",
          "text": "Проверьте точный адрес, контактное лицо, дату, требования к посетителям, время в пути, версию продукта и то, будут ли доступны нужные люди и соответствующие производственные участки."
        },
        {
          "number": "03",
          "title": "Сравнивайте наблюдения с брифом",
          "text": "Используйте согласованные вопросы по продукту, образцу, материалам, упаковке, качеству и мощности, чтобы направлять осмотр и фиксировать, что требует уточнения."
        },
        {
          "number": "04",
          "title": "Фиксируйте, что увидели и чего не увидели",
          "text": "Полезные записи включают фотографии, заметки, ответы на вопросы, наблюдения за производством, открытые вопросы и пункты, требующие документов или последующих действий."
        },
        {
          "number": "05",
          "title": "Сделайте видимым следующее решение",
          "text": "После визита решите, переходит ли поставщик к образцу, пересмотренной калькуляции, пробному заказу, очередной проверке или не должен продвигаться дальше."
        }
      ],
      "limitsTitle": "Что посещение фабрики не доказывает",
      "limits": [
        {
          "title": "Визит — это наблюдение в один момент времени",
          "text": "Он не гарантирует будущую мощность, стабильный штат, наличие материалов, постоянство качества производства или надёжность сроков поставки."
        },
        {
          "title": "Фабрика — не вся цепочка поставок",
          "text": "Поставщик может использовать подрядные работы, субподрядчиков или другие площадки. Спрашивайте, где выполняются какие операции и как контролируется соответствующий продукт."
        },
        {
          "title": "Визит не заменяет договоры и работу по соответствию",
          "text": "Коммерческие условия, тестирование продукции, правила конечного рынка, таможенные обязательства и юридические вопросы по‑прежнему решаются через соответствующие процессы. Sourcing Ally не даёт гарантий по соответствию, юридическим результатам, транспортировке или отсутствию дефектов."
        }
      ],
      "prepareTitle": "Подготовьте это перед визитом на фабрику",
      "prepare": [
        "Версию продукта, образец или спецификацию для обсуждения",
        "Короткую повестку визита с самыми важными вопросами",
        "Точный адрес фабрики, контакт, время встречи и маршрут поездки",
        "Людей, которые должны присутствовать, и требуемую языковую поддержку",
        "Тип отчёта, который вы ожидаете после визита: заметки, фото, открытые вопросы или решение о следующем шаге"
      ],
      "routesTitle": "Перейдите на следующую полезную страницу",
      "routes": [
        {
          "href": "/services/supplier-factory-checks/",
          "title": "Проверки фабрик и поставщиков",
          "text": "Узнайте, как можно оформить очную проверку вокруг конкретного вопроса.",
          "label": "Изучить проверки фабрик"
        },
        {
          "href": "/china-route/",
          "title": "Карта маршрутов по Китаю",
          "text": "Сопоставьте расположение фабрик, региональные перемещения и практичный план закупок.",
          "label": "Изучить карту маршрутов"
        },
        {
          "href": "/fees-and-scope/",
          "title": "Тарифы и объём работ",
          "text": "Ознакомьтесь с подтверждённой ставкой за независимую поддержку поездок по фабрикам и деталями проекта, которые следует согласовать до поездки.",
          "label": "Просмотреть условия"
        }
      ],
      "ctaTitle": "Планируйте визит вокруг важного вопроса.",
      "ctaText": "Структурированный бриф помогает решить, полезен ли визит на фабрику и чего он должен добиться в течение дня.",
      "ctaLabel": "Составить бриф проекта"
    },
    "qualityControlPlan": {
      "metaTitle": "План контроля качества для заказов из Китая | Sourcing Ally",
      "metaDescription": "Разработайте практичный план контроля качества до начала производства и отгрузки, определив утверждённый образец, контрольные точки, дефекты, упаковку и правила принятия решений.",
      "eyebrow": "РУКОВОДСТВО ПО КОНТРОЛЮ КАЧЕСТВА",
      "title": "Контроль качества начинается ещё до того, как завод изготовит окончательный продукт.",
      "lede": "Полезная проверка качества сопоставляет наблюдаемое с известным эталоном. Чем чётче определены версия продукта, требования, приоритеты дефектов, упаковка и процесс принятия решений, тем более информативной будет последующая проверка.",
      "situationsTitle": "Когда это руководство полезно",
      "situations": [
        {
          "title": "Вы переходите от образца к производству",
          "text": "Утверждённый образец и письменные технические данные должны стать эталоном для материалов, размеров, функциональности, внешнего вида, маркировки и упаковки."
        },
        {
          "title": "У вас продукт с видимым или функциональным риском",
          "text": "Хрупкие изделия, электроника, текстиль, кастомные элементы, многокомпонентные изделия и розничная упаковка часто требуют более конкретных контрольных точек."
        },
        {
          "title": "Вы приближаетесь к отгрузке",
          "text": "До отправки товара покупатель должен знать, что проверяется, как фиксируются наблюдения и кто принимает решение о дальнейших действиях."
        }
      ],
      "evidenceTitle": "Составьте план до начала проверки",
      "evidenceIntro": "Контроль качества становится полезнее, когда поставщик, покупатель и местная поддержка сравнивают одну и ту же версию продукта и один и тот же набор приоритетных требований.",
      "evidence": [
        {
          "number": "01",
          "title": "Определите утверждённый эталон",
          "text": "Свяжите текущую версию продукта с чертежами, фотографиями, образцом, измерениями, заметками по материалам, цветам, маркировке и требованиями к упаковке."
        },
        {
          "number": "02",
          "title": "Отделите критические требования от предпочтений",
          "text": "Выделите моменты, влияющие на безопасность, функциональность, регуляторные вопросы, использование клиентом, ключевой внешний вид или готовность к отгрузке, вместо того чтобы приравнивать все предпочтения."
        },
        {
          "number": "03",
          "title": "Выберите практичные контрольные точки",
          "text": "В зависимости от проекта полезны проверки образцов, материалов, хода производства, готовой продукции, упаковки, а также при погрузке или передаче товара."
        },
        {
          "number": "04",
          "title": "Определите, как будут фиксироваться результаты",
          "text": "Полезная запись указывает требование, наблюдаемое состояние, доказательства, при необходимости — затронутое количество, открытый вопрос и следующее необходимое решение."
        },
        {
          "number": "05",
          "title": "Решите, кто действует по результатам",
          "text": "До проверки проясните, кто получает отчёт, кто утверждает доработку или решение об отгрузке и как будет зафиксирован ответ поставщика."
        }
      ],
      "limitsTitle": "Чего не гарантирует контроль качества",
      "limits": [
        {
          "title": "Проверка — не обещание по всем единицам",
          "text": "Объём, время, доступ к продукту, метод отбора образцов и определённые требования влияют на то, что можно наблюдать. Ни одна проверка не может гарантировать, что все последующие единицы будут лишены дефектов. Также компания не обещает гарантии, соответствие требованиям, юридические исходы, результаты доставки или отсутствие дефектов."
        },
        {
          "title": "Проверка и соответствие — не одно и то же",
          "text": "Проверка качества фиксирует соответствие определённым требованиям продукта. Она не заменяет лабораторные испытания, юридические консультации, сертификации или оценку соответствия требованиям рынка назначения. Компания не работает с опасными или военными товарами."
        },
        {
          "title": "Отчёт требует решения покупателя",
          "text": "Одних наблюдений недостаточно для решения проблемы. Покупатель и поставщик должны принять решение — принять, доработать, заменить, расследовать или отложить передачу."
        }
      ],
      "prepareTitle": "Подготовьте это перед проверкой качества",
      "prepare": [
        "Утверждённый образец продукта и эталон упаковки",
        "Измерения, материалы, функции, цвета, маркировка и детали упаковки, которые имеют значение",
        "Практичный список критических, основных и незначительных проблем для продукта",
        "Сроки производства, количество, адрес завода и ожидаемая стадия проверки",
        "Кто будет просматривать выводы и утверждать дальнейшие действия"
      ],
      "routesTitle": "Перейти к следующей полезной странице",
      "routes": [
        {
          "href": "/services/quality-control/",
          "title": "Поддержка по контролю качества",
          "text": "Узнайте, как требования к качеству можно сформулировать применительно к вашему продукту и стадии проекта.",
          "label": "Изучить контроль качества"
        },
        {
          "href": "/product-samples/",
          "title": "Образцы продукции и утверждение",
          "text": "Свяжите утверждённый образец с более чётким производственным эталоном до планирования проверки.",
          "label": "Просмотреть планирование образцов"
        },
        {
          "href": "/services/packaging/",
          "title": "Координация упаковки",
          "text": "Включите упаковку в проверку продукта и отгрузки, а не рассматривайте её как деталь после производства.",
          "label": "Изучить упаковку"
        }
      ],
      "ctaTitle": "Определите вопрос контроля качества до готовности товаров.",
      "ctaText": "Краткий проектный бриф поможет определить версию продукта, приоритетные требования, сроки и решение, которое должен поддержать ваш контроль качества. Обратите внимание: при заказе через Sourcing Ally применяется минимальный комиссионный сбор 5%. Если вы заказываете напрямую у фабрики, независимая поддержка при выезде на завод оплачивается отдельно — $150 в день.",
      "ctaLabel": "Составить проектный бриф"
    }
  },
  "tr": {
    "supplierVerification": {
      "metaTitle": "Ödemeden Önce Bir Çinli Tedarikçiyi Doğrulayın | Sourcing Ally",
      "metaDescription": "Bir Çinli tedarikçinin numuneye, fabrika ziyareti, deneme siparişine veya ek sorulara geçip geçmemesi gerektiğine karar vermek için pratik, kanıta dayalı bir yol kullanın.",
      "eyebrow": "TEDARİKÇİ KARAR REHBERİ",
      "title": "Peşinat öncesi, tedarikçi sorusunu daha özel hale getirin.",
      "lede": "Tedarikçi doğrulaması tek bir belge veya tek bir görüntülü görüşme değildir. Bu, hangi kanıtlara sahip olduğunuzu, hangi noktaların hâlâ bilinmez kaldığını ve tedarikçinin bir sonraki aşamaya geçip geçmemesi gerektiğini belirlemenize yardımcı olan ardışık kontroller dizisidir.",
      "situationsTitle": "Bu rehberin işe yaradığı durumlar",
      "situations": [
        {
          "title": "Birden fazla teklifiniz var",
          "text": "Farklı tedarikçilerin yanıtlarını karşılaştırmanız gerekir; en düşük fiyatı otomatik olarak tek karar unsuru olarak almamalısınız."
        },
        {
          "title": "Para göndermeye hazırlanıyorsunuz",
          "text": "Ödemeyi kimin alacağı, hangi ürün versiyonunun teklif edildiği ve bir sonraki adıma hangi kanıtların dayanak sağladığı konusunda daha net bir resme ihtiyacınız var."
        },
        {
          "title": "Sipariş özelleştirilmiş veya önemli",
          "text": "Özel malzemeler, ambalaj, kalıp, yüksek değer veya tekrar sipariş planı içeren bir ürün, daha dikkatli bir kanıt yolunu hak eder."
        }
      ],
      "evidenceTitle": "Kanıtı katmanlar halinde oluşturun",
      "evidenceIntro": "Yararlı soru sadece tedarikçinin çevrimiçi iyi görünüp görünmediği değildir. Asıl soru, kimlik, ürün, teklif, iletişim ve üretim bilgileri bir arada mantıklı olup olmadığıdır.",
      "evidence": [
        {
          "number": "01",
          "title": "Kurumu ve rolü netleştirin",
          "text": "Kiminle konuştuğunuzu, işletmenin fabrika mı, ticaret şirketi mi yoksa başka bir rol mü olduğunu ve ilgili üretim faaliyetinin nerede gerçekleştiğini sorun."
        },
        {
          "number": "02",
          "title": "Teklifi brief ile karşılaştırın",
          "text": "Malzemeler, boyutlar, adetler, ambalaj, kalıplama, teslim süresi, ödeme koşulları ve belirtilen varsayımların aynı ürün versiyonuna işaret ettiğinden emin olun."
        },
        {
          "number": "03",
          "title": "Ürüne özgü kanıt isteyin",
          "text": "Fotoğraflar, teknik yanıtlar, numune tartışması, üretimle ilgili sorular ve ilgili belgelerle tedarikçinin gerçek gereksiniminizi anlayıp anlamadığını test edin."
        },
        {
          "number": "04",
          "title": "Tutarsızlıkları takip edin",
          "text": "Değişen bir adres, açıklanamayan fiyat değişikliği, muğlak yanıtlar, uyuşmayan ürün detayları veya bir soruyu netleştirmekte isteksizlik, otomatik reddetme ya da onay yerine yeni bir soruya yönlendirmelidir."
        },
        {
          "number": "05",
          "title": "Bir sonraki kanıt adımını seçin",
          "text": "Projeye bağlı olarak doğru bir sonraki adım numune, fabrika ziyareti, görüntülü görüşme, deneme siparişi veya daha ayrıntılı yazılı bir karşılaştırma olabilir."
        }
      ],
      "limitsTitle": "Doğrulama neyi kanıtlamaz",
      "limits": [
        {
          "title": "Bir belge gelecekteki performansın garantisi değildir",
          "text": "Ticari bilgiler bir şirketi tanımlamaya yardımcı olabilir; ancak gelecekteki üretim kapasitesi, kalite, finansal durum, yasal uyumluluk veya teslimat için garanti vermez."
        },
        {
          "title": "Ziyaret belirli bir zamandaki gözlemdir",
          "text": "Fabrika ziyareti o gün gözlemlenenleri kaydedebilir. Her gelecek üretim koşusunu veya her taşeronluk kararını garanti edemez."
        },
        {
          "title": "Ticari onay alıcıda kalır",
          "text": "Ödemeyi yapıp yapmamaya, sipariş vermeye, bir tedarikçiyi onaylamaya veya projeyi değiştirmeye siz karar verirsiniz. Tedarik desteği bu karar için daha net bilgi sağlamalıdır."
        }
      ],
      "prepareTitle": "Tedarikçileri karşılaştırmadan önce bunu hazırlayın",
      "prepare": [
        "Bir ürün açıklaması, fotoğraflar, çizim veya referans numune",
        "Hedef miktar, varış pazarı ve zamanlama",
        "Bilinen malzeme, boyut, ambalaj, etiket veya test gereksinimleri",
        "Her tedarikçinin teklif vermesi gereken ürün versiyonu",
        "Karşılaştırmayı aldıktan sonra vermeniz gereken karar"
      ],
      "routesTitle": "Bir sonraki faydalı sayfaya ilerleyin",
      "routes": [
        {
          "href": "/services/supplier-sourcing/",
          "title": "Tedarikçi tedarik desteği",
          "text": "Bir tedarikçi kısa listesinin spesifik brief’iniz etrafında nasıl yapılandırılabileceğini görün.",
          "label": "Tedarikçi tedarikini keşfedin"
        },
        {
          "href": "/questions/",
          "title": "Tedarikçi doğrulama soruları",
          "text": "Çevrimiçi bir profil veya tedarikçi beyanına güvenmeden önce pratik yanıtları okuyun.",
          "label": "Soruları keşfedin"
        },
        {
          "href": "/blog/supplier-verification-checklist-guide/",
          "title": "Doğrulama kontrol listesi",
          "text": "Peşinat öncesi kanıta dayalı bir karşılaştırma hazırlamak için Journal rehberini kullanın.",
          "label": "Kontrol listesini okuyun"
        }
      ],
      "ctaTitle": "Yanıtlanması gereken tedarikçi sorusuyla başlayın.",
      "ctaText": "Kısa bir brief, bir sonraki taahhütten önce neyin karşılaştırılması, kontrol edilmesi veya netleştirilmesi gerektiğini ortaya koyabilir.",
      "ctaLabel": "Bir proje brief'i hazırlayın"
    },
    "productSamples": {
      "metaTitle": "Çinden Ürün Numuneleri: Onay Rehberi | Sourcing Ally",
      "metaDescription": "Ürün versiyonunu tanımlamak, değişiklikleri incelemek, geri bildirimi kaydetmek ve üretime hazır olanı belirlemek için pratik bir numune onay yolu kullanın.",
      "eyebrow": "NUMUNE KARAR REHBERİ",
      "title": "Numune, kayıtlı bir üretim kararı haline geldiğinde işe yarar.",
      "lede": "Bir numune bir ürünü gösterebilir; aynı zamanda malzeme, boyut, işlev, renk, ambalaj ve iletişimle ilgili yanıtlanmamış soruları da açığa çıkarabilir. Değer, incelemeyi net bir sonraki talimata dönüştürmekten gelir. Sourcing Ally üzerinden sipariş verildiğinde en az %5 tedarik ücreti uygulanır. Müşteri bir fabrikaya doğrudan sipariş verdiğinde, bağımsız fabrika seyahati desteği için yalnızca günde $150 ücret alınır. Şirket tehlikeli veya askeri mallarla çalışmaz. Hiçbir durumda garanti, uyumluluk, yasal sonuç, sevkiyat sonucu veya kusursuz üretim taahhüt edilmez.",
      "situationsTitle": "Bu rehber ne zaman yararlıdır",
      "situations": [
        {
          "title": "Yeni bir ürün tedarik ediyorsunuz",
          "text": "İlk numune, yazılı brief ile tedarikçi anlayışının uyumlu olup olmadığını test etmek için doğru zamandır."
        },
        {
          "title": "Bir ürün veya ambalajı değiştiriyorsunuz",
          "text": "Değişen bir malzeme, kaplama, etiket, ek, artwork veya kutu yeni bir versiyon oluşturabilir ve bu ayrı olarak incelenmelidir."
        },
        {
          "title": "Üretim onayına yakınsınız",
          "text": "Üretim başlamadan önce alıcının onaylanan, açık kalan ve daha sonra kontrol edilmesi gereken noktaları ayırt etmesi gerekir."
        }
      ],
      "evidenceTitle": "Numuneyi kontrollü bir inceleme noktası olarak kullanın",
      "evidenceIntro": "Numune incelemesi fiziksel öğeyi yazılı brief, tedarikçi teklifi ve üretim devri ile ilişkilendirmelidir. Kısa, spesifik bir kayıt, \"iyi görünüyor\" gibi genel bir mesajdan daha kullanışlıdır.",
      "evidence": [
        {
          "number": "01",
          "title": "Versiyonu adlandırın",
          "text": "Tüm tarafların aynı öğeyi tartıştığından emin olmak için tarih, tedarikçi, ürün adı, malzeme, renk, ölçüler, ambalaj versiyonu ve varsa revizyon numarasını kaydedin."
        },
        {
          "number": "02",
          "title": "Önemli gereksinimleri kontrol edin",
          "text": "Fonksiyon, görünüm, ölçüler, malzemeler, kaplama, etiketler, ambalaj ve alıcıyı veya son kullanıcıyı etkileyen ürüne özgü gereksinimleri gözden geçirin."
        },
        {
          "number": "03",
          "title": "Hataları ve tercihleri ayırın",
          "text": "Bir hata, tamamlanmamış karar ve bir tercih farklıdır. Hangi noktaların değişmesi gerektiğini, hangilerinin kabul edildiğini ve hangilerinin yazılı karara ihtiyaç duyduğunu işaretleyin."
        },
        {
          "number": "04",
          "title": "Revizyon kaydı oluşturun",
          "text": "Talep edilen değişikliklerin belirsiz bir sohbet mesajına dönüşmemesi için fotoğraflar, notlar, ölçümler veya numaralandırılmış bir liste kullanın."
        },
        {
          "number": "05",
          "title": "Üretim referansını tanımlayın",
          "text": "Bir versiyonu onaylıyorsanız, onayın neleri kapsadığını ve ambalaj, bileşenler, etiketler veya kalite kontrol noktaları gibi hangi öğelerin ayrı onay gerektirdiğini belirtin."
        }
      ],
      "limitsTitle": "Numune onayının kanıtlamadığı şeyler",
      "limits": [
        {
          "title": "Tek bir numune seri üretimi temsil etmeyebilir",
          "text": "El yapımı, mühendislik veya üretim öncesi bir numune daha sonraki üretimden farklı olabilir. Hangi versiyonu incelediğinizi ve fabrikanın tutarlılığı nasıl kontrol edeceğini sorun."
        },
        {
          "title": "Onay uyumluluk çalışmalarının yerini tutmaz",
          "text": "Hedef pazar testleri, etiketler, ithalatçı yükümlülükleri, yasal inceleme ve uzman teknik değerlendirme ayrı sorumluluklar olarak kalır."
        },
        {
          "title": "Fotoğraf tam bir spesifikasyon değildir",
          "text": "Numune fotoğrafı bir kararı destekleyebilir, ancak boyutlar, malzeme detayları, toleranslar, etiketler, ambalaj ve diğer gereksinimler yine açıkça kaydedilmelidir."
        }
      ],
      "prepareTitle": "Numune incelemesinden önce bunu hazırlayın",
      "prepare": [
        "Tedarikçi teklifi ve incelenen kesin ürün versiyonu",
        "Referans görseller, çizimler, ölçümler, renkler ve malzeme notları",
        "Hedef pazar ve bilinen etiket veya test soruları",
        "Değişmesi gerekenler, kabul edilenler ve açık sorular için bir inceleme formu",
        "Numunenin desteklemesini istediğiniz üretim kararı"
      ],
      "routesTitle": "Sonraki kullanışlı sayfaya ilerleyin",
      "routes": [
        {
          "href": "/services/sample-sourcing/",
          "title": "Numune tedarik desteği",
          "text": "Numunelerin tedarikçi soruları ve daha net bir onay kaydıyla nasıl ilişkilendirilebileceğini anlayın.",
          "label": "Numuneleri keşfedin"
        },
        {
          "href": "/start-project/",
          "title": "Proje Brief Oluşturucu",
          "text": "Numune talebinde bulunmadan önce bir fikri, adet ve bilinmezlikleri yapılandırılmış bir başlangıç briefine dönüştürün.",
          "label": "Briefinizi oluşturun"
        },
        {
          "href": "/quality-control-plan/",
          "title": "Kalite kontrol planlaması",
          "text": "Onaylanmış bir ürün versiyonunu, üretim sırasında ve sevkiyat öncesinde önemli olması gereken kontrol maddeleriyle ilişkilendirin.",
          "label": "Kalite kontrolünü planlayın"
        }
      ],
      "ctaTitle": "Bir sonraki numune incelemesini uygulanması daha kolay hale getirin.",
      "ctaText": "Ürün versiyonunu, tedarikçinin numunesini ve vermeniz gereken kararı paylaşın. Bir sonraki adım daha net tanımlanabilir.",
      "ctaLabel": "Bir proje briefi oluşturun"
    },
    "factoryVisits": {
      "metaTitle": "Factory Visits in China: Buyer Planning Guide | Sourcing Ally",
      "metaDescription": "Bir fabrika ziyaretinin ne zaman faydalı olduğunu, ne hazırlanacağını, ne gözlemleneceğini ve bir fabrika ziyaretinin hangi sonuçları garanti edemeyeceğini belirleyin. Müşteri Sourcing Ally aracılığıyla sipariş verdiğinde asgari %5 tedarik ücreti uygulanır. Müşteri doğrudan bir fabrikadan sipariş verdiğinde bağımsız fabrika seyahat desteği için yalnızca günde 150$ ücreti vardır. Şirket tehlikeli veya askeri nitelikteki ürünlerle çalışmaz. Garanti, uyumluluk, hukuki sonuçlar, sevkiyat sonuçları veya kusursuz üretim konusunda asla vaat verilmez.",
      "eyebrow": "FABRİKA ZİYARETİ KILAVUZU",
      "title": "Bir fabrika ziyareti meraktan ziyade bir karara yönelik kurulduğunda en iyi sonucu verir.",
      "lede": "Bir ziyaret tedarikçi ile konuşmayı somutlaştırabilir. Ziyaret, alıcının neyi gözlemlemesi gerektiğini, hangi soruların yanıtlanması gerektiğini ve ziyaretin hangi kararı etkileyeceğini bildiğinde en faydalıdır.",
      "situationsTitle": "Ziyaretin faydalı olabileceği durumlar",
      "situations": [
        {
          "title": "Ürün veya siparişin önemli çıkarları var",
          "text": "Özelleştirme, teknik süreç, yüksek değer, tekrar sipariş planları veya belirsiz üretim iddiaları daha doğrudan kanıt talep edebilir."
        },
        {
          "title": "Tedarikçi bilgileri test edilmeli",
          "text": "Ziyaret, üretim adresi, ürün odak alanı, üretim akışı, ekipman, malzemeler, iletişim ve alıcının gündeme getirdiği soruları netleştirmeye yardımcı olabilir."
        },
        {
          "title": "Türkiye dışından Çin’e seyahat ediyorsunuz",
          "text": "Bir seyahat günü, toplantılar, sorular, ürün versiyonları, fabrika adresleri ve raporlama planı güzergah belirlenmeden önce üzerinde anlaşılmış olduğunda daha değerlidir."
        }
      ],
      "evidenceTitle": "Ziyareti kanıta göre planlayın",
      "evidenceIntro": "En faydalı ziyaretin bir gündemi olmalıdır. Ürün gereksinimlerinizi fiziksel üretim bağlamıyla ve sonrasında vereceğiniz kararlarla ilişkilendirmelidir.",
      "evidence": [
        {
          "number": "01",
          "title": "Ziyaret sorusunu belirleyin",
          "text": "Ziyaretin esas olarak tedarikçi kimliği, ürün kabiliyeti, numune tartışması, süreç akışı, malzemeler, paketleme, kalite kontrolleri veya başka belirlenmiş bir konu hakkında mı olduğunu karar verin."
        },
        {
          "number": "02",
          "title": "Pratik planı onaylayın",
          "text": "Kesin adresi, iletişimi, tarihi, ziyaretçi gereksinimlerini, seyahat süresini, ürün versiyonunu ve doğru kişilerin ile ilgili üretim alanlarının hazır olup olmayacağını kontrol edin."
        },
        {
          "number": "03",
          "title": "Brife göre gözlemleyin",
          "text": "Görülmesi gerekenleri ve açıklama gerektirenleri yönlendirmek için üzerinde anlaşılan ürün, numune, malzeme, paketleme, kalite ve kapasite sorularınızı kullanın."
        },
        {
          "number": "04",
          "title": "Gözlemlenenleri ve gözlemlenemeyenleri kaydedin",
          "text": "Faydalı kayıtlar fotoğraflar, notlar, alınan cevaplar, üretim gözlemleri, açık kalan sorular ve sonrasında belge veya takip gerektiren noktaları içerebilir."
        },
        {
          "number": "05",
          "title": "Bir sonraki kararı görünür kılın",
          "text": "Ziyetten sonra tedarikçinin numuneye, revize teklif, deneme siparişi, başka bir kontrolde ilerleyip ilerlemeyeceğine veya ilerlememesi gerektiğine karar verin."
        }
      ],
      "limitsTitle": "Bir fabrika ziyareti neyi kanıtlamaz",
      "limits": [
        {
          "title": "Ziyaret zaman noktasında yapılan bir gözlemdir",
          "text": "Bu, gelecekteki kapasite, personel stabilitesi, malzemeler, üretim kalitesi veya teslimat performansı için garanti vermez."
        },
        {
          "title": "Bir tesis tüm tedarik zinciri değildir",
          "text": "Bir tedarikçi dış kaynaklı bileşenler, alt yükleniciler veya başka lokasyonlar kullanıyor olabilir. Hangi işin nerede yapıldığını ve ilgili ürünün nasıl kontrol edildiğini sorun."
        },
        {
          "title": "Ziyaret sözleşmelerin veya uyumluluk çalışmalarının yerini tutmaz",
          "text": "Ticari şartlar, ürün testleri, hedef pazar kuralları, gümrük yükümlülükleri ve hukuki konular uygun süreçlerle ele alınmalıdır. Ayrıca, garanti, uyumluluk, hukuki sonuçlar, sevkiyat sonuçları veya kusursuz üretim konusunda asla vaat verilmez. Şirket tehlikeli veya askeri nitelikteki ürünlerle çalışmaz."
        }
      ],
      "prepareTitle": "Bir fabrika ziyareti öncesinde hazırlayın",
      "prepare": [
        "Tartışılacak ürün versiyonu, numune veya spesifikasyon",
        "En önemli soruları içeren kısa fabrika ziyaret gündemi",
        "Kesin fabrika adresi, iletişim, toplantı saati ve seyahat güzergahı",
        "Katılması gereken kişiler ve gerekli dil desteği",
        "Ziyaret sonrası istediğiniz kayıt: notlar, fotoğraflar, açık sorular veya bir sonraki adım kararı"
      ],
      "routesTitle": "Bir sonraki faydalı sayfaya ilerleyin",
      "routes": [
        {
          "href": "/services/supplier-factory-checks/",
          "title": "Fabrika ve tedarikçi kontrolleri",
          "text": "Belirlenmiş bir saha kontrolünün nasıl spesifik bir soruya göre kapsamlandırılabileceğini görün.",
          "label": "Fabrika kontrollerini inceleyin"
        },
        {
          "href": "/china-route/",
          "title": "Çin Güzergah Haritası",
          "text": "Fabrika konumlarını, bölgesel seyahati ve pratik bir tedarik güzergahını bağlayın.",
          "label": "Güzergah haritasını inceleyin"
        },
        {
          "href": "/fees-and-scope/",
          "title": "Ücretler ve kapsam",
          "text": "Seyahat öncesinde üzerinde anlaşılması gereken proje detaylarını ve bağımsız fabrika seyahat ücretini gözden geçirin. Müşteri doğrudan fabrikadan sipariş verdiğinde bağımsız fabrika seyahat desteği için yalnızca günde 150$ ücreti uygulanır. Müşteri Sourcing Ally aracılığıyla sipariş verdiğinde asgari %5 tedarik ücreti uygulanır.",
          "label": "Kapsamı inceleyin"
        }
      ],
      "ctaTitle": "Ziyareti önemli soruya göre planlayın.",
      "ctaText": "Yapılandırılmış bir brif, bir fabrika ziyaretinin faydalı olup olmadığını ve günün neyi başarması gerektiğini belirlemeyi kolaylaştırır.",
      "ctaLabel": "Proje brifi oluşturun"
    },
    "qualityControlPlan": {
      "metaTitle": "Çin Siparişleri için Kalite Kontrol Planı | Sourcing Ally",
      "metaDescription": "On üretim ve sevkiyat öncesinde onaylı referansı, kontrol noktalarını, kusurları, ambalajı ve karar süreçlerini tanımlayarak uygulanabilir bir kalite kontrol planı oluşturun.",
      "eyebrow": "KALİTE KONTROL REHBERİ",
      "title": "Kalite kontrol, fabrika ürünü son haline getirmeden önce başlar.",
      "lede": "Yararlı bir kalite kontrol, gözlenen durumu bilinen bir referansla karşılaştırır. Ürün versiyonunun, gereksinimlerin, kusur önceliklerinin, ambalajın ve karar sürecinin ne kadar net olduğu, sonraki kontrollerin o kadar faydalı olmasını sağlar.",
      "situationsTitle": "Bu rehber ne zaman işe yarar",
      "situations": [
        {
          "title": "Numuneden üretime geçiyorsunuz",
          "text": "Onaylı numune ve yazılı ürün detayları; malzeme, ölçüler, işlev, görünüm, etiketler ve ambalaj gereksinimleri için referans olmalıdır."
        },
        {
          "title": "Görünür veya fonksiyonel riski olan bir ürününüz var",
          "text": "Kırılgan ürünler, elektronik, tekstil, özel yapım ürünler, çok parçalı ürünler ve perakende ambalaj genellikle daha spesifik kontrol noktaları gerektirir."
        },
        {
          "title": "Sevkiyata yaklaşıyorsunuz",
          "text": "Mal fabrikadan çıkmadan önce alıcının neyin kontrol edildiğini, bulguların nasıl kaydedildiğini ve sonraki kararı kimin vereceğini bilmesi gerekir."
        }
      ],
      "evidenceTitle": "Kontrol öncesi planı oluşturun",
      "evidenceIntro": "Tedarikçi, alıcı ve sahadaki destek aynı ürün versiyonunu ve öncelikli gereksinimleri karşılaştırdığında kalite kontrol daha faydalı olur.",
      "evidence": [
        {
          "number": "01",
          "title": "Onaylı referansı tanımlayın",
          "text": "Mevcut ürün versiyonunu çizimler, fotoğraflar, numune, ölçümler, malzeme notları, renkler, etiketler ve ambalaj gereksinimleri ile ilişkilendirin."
        },
        {
          "number": "02",
          "title": "Kritik gereksinimleri tercihlerden ayırın",
          "text": "Her tercihi eşit görmek yerine, güvenliği, işlevi, düzenleyici konuları, müşteri kullanımını, önemli görünümü veya sevkiyata hazır olmayı etkileyen noktaları belirleyin."
        },
        {
          "number": "03",
          "title": "Pratik kontrol noktaları seçin",
          "text": "Proje kapsamına göre; numuneler, malzemeler, üretim ilerlemesi, bitmiş ürünler, ambalaj ve yükleme veya teslim sırasında kontroller faydalı olabilir."
        },
        {
          "number": "04",
          "title": "Bulguların nasıl kaydedileceğini tanımlayın",
          "text": "Yararlı bir kayıt; gereksinimi, gözlenen durumu, kanıtı, ilgiliyse etkilenen miktarı, açık soruyu ve gerekli bir sonraki kararı belirtir."
        },
        {
          "number": "05",
          "title": "Sonuca kimin müdahale edeceğine karar verin",
          "text": "Kontrol öncesinde raporu kimin alacağını, yeniden işleme veya sevkiyat kararını kimin onaylayacağını ve tedarikçi yanıtının nasıl kaydedileceğini netleştirin."
        }
      ],
      "limitsTitle": "Kalite kontrolün garanti etmediği şeyler",
      "limits": [
        {
          "title": "Bir kontrol her bir birim için taahhüt değildir",
          "text": "Kapsam, zamanlama, ürün erişimi, numune yöntemi ve tanımlı gereksinimler gözlenenleri etkiler. Hiçbir kontrol, gelecekteki her birimin kusursuz olduğunu garanti edemez."
        },
        {
          "title": "Denetim ve uygunluk farklıdır",
          "text": "Bir kalite kontrol tanımlı ürün gereksinimlerini gözlemleyebilir. Ancak gerekli laboratuvar testlerinin, hukuki danışmanlığın, sertifikaların veya hedef pazar uygunluk değerlendirmesinin yerine geçmez."
        },
        {
          "title": "Bir rapor alıcı kararı gerektirir",
          "text": "Sadece gözlemler bir sorunu çözmez. Alıcı ve tedarikçi yine de kabul edip etmeyeceklerine, yeniden işlemeye, değiştirmeye, araştırmaya veya teslimatı ertelemeye karar vermelidir."
        }
      ],
      "prepareTitle": "Kalite kontrolünden önce bunları hazırlayın",
      "prepare": [
        "Onaylı ürün ve ambalaj referansı",
        "Önemli ölçümler, malzemeler, işlevler, renkler, etiketler ve ambalaj detayları",
        "Ürün için kritik, önemli ve küçük öncelikli hususların pratik bir listesi",
        "Üretim zamanlaması, adet, fabrika adresi ve beklenen kontrol aşaması",
        "Bulguları kim inceleyecek ve bir sonraki eylemi kim onaylayacak"
      ],
      "routesTitle": "Bir sonraki faydalı sayfaya geçin",
      "routes": [
        {
          "href": "/services/quality-control/",
          "title": "Kalite kontrol desteği",
          "text": "Ürün ve proje aşamanıza göre kalite gereksinimlerinin nasıl tanımlanabileceğini görün.",
          "label": "Kalite kontrolünü keşfedin"
        },
        {
          "href": "/product-samples/",
          "title": "Ürün numuneleri ve onayı",
          "text": "Bir kontrol planlanmadan önce onaylı numuneyi daha net bir üretim referansıyla ilişkilendirin.",
          "label": "Numune planlamasını gözden geçirin"
        },
        {
          "href": "/services/packaging/",
          "title": "Ambalaj koordinasyonu",
          "text": "Ambalajı üretim sonrası düşünülen bir detay yerine ürün ve sevkiyat kontrolünün bir parçası haline getirin.",
          "label": "Ambalajı inceleyin"
        }
      ],
      "ctaTitle": "Malları sevkiyata hazır olmadan önce kalite sorunuzu tanımlayın.",
      "ctaText": "Kısa bir proje özeti; ürün versiyonunu, öncelikli gereksinimleri, zamanlamayı ve kalite kontrolünüzün desteklemesi gereken kararı belirleyebilir.",
      "ctaLabel": "Proje özeti oluşturun"
    }
  },
  "fr": {
    "supplierVerification": {
      "metaTitle": "Vérifiez un fournisseur chinois avant de payer | Sourcing Ally",
      "metaDescription": "Suivez une démarche factuelle et pragmatique pour décider si un fournisseur chinois doit passer aux échantillons, à une visite d'usine, à une commande d'essai ou à des questions complémentaires.",
      "eyebrow": "GUIDE DE DÉCISION FOURNISSEUR",
      "title": "Avant un acompte, précisez davantage la question concernant le fournisseur.",
      "lede": "La vérification d'un fournisseur n'est pas un document unique ni un appel vidéo isolé. C'est une suite de vérifications qui vous aide à déterminer quelles preuves vous avez, ce qui reste inconnu et si le fournisseur doit passer à l'étape suivante.",
      "situationsTitle": "Quand ce guide est utile",
      "situations": [
        {
          "title": "Vous avez plusieurs devis",
          "text": "Vous devez comparer les réponses de différents fournisseurs sans considérer automatiquement le prix le plus bas comme la décision finale."
        },
        {
          "title": "Vous êtes sur le point d'envoyer de l'argent",
          "text": "Vous avez besoin d'une image plus claire de qui recevra le paiement, de la version du produit à laquelle se rapporte le devis, et des preuves qui justifient l'étape suivante."
        },
        {
          "title": "La commande est personnalisée ou importante",
          "text": "Un produit avec des matériaux spéciaux, un emballage particulier, un outillage spécifique, une valeur élevée ou un plan de réapprovisionnement mérite une démarche de vérification plus réfléchie."
        }
      ],
      "evidenceTitle": "Construire les preuves par étapes",
      "evidenceIntro": "La bonne question n'est pas seulement de savoir si un fournisseur semble crédible en ligne, mais si l'identité, le produit, le devis, la communication et les informations de production sont cohérents entre eux.",
      "evidence": [
        {
          "number": "01",
          "title": "Clarifier l'entité et son rôle",
          "text": "Demandez avec qui vous communiquez, si l'entreprise est une usine, une société commerciale ou autre, et où se déroulent les activités de production concernées."
        },
        {
          "number": "02",
          "title": "Comparer le devis avec le cahier des charges",
          "text": "Vérifiez que les matériaux, dimensions, quantités, emballage, outillage, délai de fabrication, conditions de paiement et hypothèses indiquées concernent bien la même version du produit."
        },
        {
          "number": "03",
          "title": "Demandez des preuves spécifiques au produit",
          "text": "Utilisez des photos, des réponses techniques, l'analyse d'échantillons, des questions sur la production et des documents pertinents pour vérifier si le fournisseur comprend réellement votre besoin."
        },
        {
          "number": "04",
          "title": "Suivez les incohérences",
          "text": "Une adresse qui change, une variation de prix non expliquée, des réponses vagues, des détails produit incohérents ou une réticence à clarifier doivent entraîner de nouvelles questions, pas un rejet ou une validation automatique."
        },
        {
          "number": "05",
          "title": "Choisissez la prochaine étape de vérification",
          "text": "Selon le projet, la prochaine étape appropriée peut être un échantillon, une visite d'usine, un appel vidéo, une commande d'essai ou une comparaison écrite plus détaillée."
        }
      ],
      "limitsTitle": "Ce que la vérification ne prouve pas",
      "limits": [
        {
          "title": "Un document n'est pas une garantie de performance future",
          "text": "Les informations commerciales peuvent aider à identifier une entreprise, mais elles ne garantissent pas la capacité future, la qualité, la situation financière, la conformité juridique ou la livraison."
        },
        {
          "title": "Une visite est une observation limitée dans le temps",
          "text": "Une visite d'usine permet d'enregistrer ce qui est observé ce jour-là. Elle ne peut garantir chaque future série de production ni chaque décision de sous-traitance."
        },
        {
          "title": "L'acheteur conserve l'autorisation commerciale",
          "text": "Vous décidez de payer, de commander, d'approuver un fournisseur ou de modifier le projet. L'accompagnement en sourcing doit fournir des informations plus claires pour aider à cette décision."
        }
      ],
      "prepareTitle": "Préparez ceci avant de comparer les fournisseurs",
      "prepare": [
        "Une description du produit, des photos, un plan ou un échantillon de référence",
        "Quantité cible, marché de destination et calendrier",
        "Contraintes connues sur les matériaux, dimensions, emballage, étiquetage ou exigences de test",
        "La version du produit que chaque fournisseur doit chiffrer",
        "La décision que vous devrez prendre après réception de la comparaison"
      ],
      "routesTitle": "Accédez à la page utile suivante",
      "routes": [
        {
          "href": "/services/supplier-sourcing/",
          "title": "Assistance pour la recherche de fournisseurs",
          "text": "Découvrez comment une liste restreinte de fournisseurs peut être structurée autour de votre cahier des charges.",
          "label": "Explorer la recherche de fournisseurs"
        },
        {
          "href": "/questions/",
          "title": "Questions de vérification des fournisseurs",
          "text": "Lisez des réponses pratiques avant de vous fier à un profil en ligne ou à une déclaration du fournisseur.",
          "label": "Explorer les questions"
        },
        {
          "href": "/blog/supplier-verification-checklist-guide/",
          "title": "Checklist de vérification",
          "text": "Utilisez le guide Journal pour préparer une comparaison fondée sur des preuves avant de verser un acompte.",
          "label": "Lire la checklist"
        }
      ],
      "ctaTitle": "Commencez par la question fournisseur à laquelle vous avez besoin d'une réponse.",
      "ctaText": "Un court brief peut déterminer ce qui doit être comparé, vérifié ou clarifié avant le prochain engagement.",
      "ctaLabel": "Rédiger un brief de projet"
    },
    "productSamples": {
      "metaTitle": "Échantillons de produits depuis la Chine : guide d'approbation | Sourcing Ally",
      "metaDescription": "Suivez une procédure pratique d'approbation d'échantillon pour définir la version du produit, examiner les changements, consigner les retours et décider de ce qui est prêt pour la production.",
      "eyebrow": "GUIDE DE DÉCISION SUR LES ÉCHANTILLONS",
      "title": "Un échantillon devient utile lorsqu'il se transforme en une décision de production consignée.",
      "lede": "Un échantillon peut montrer un produit, mais il peut aussi révéler des questions restées sans réponse sur les matériaux, les dimensions, la fonction, la couleur, l'emballage et la communication. La valeur réside dans la transformation de la revue en une instruction claire pour la suite.",
      "situationsTitle": "Quand ce guide est utile",
      "situations": [
        {
          "title": "Vous sourcerez un nouveau produit",
          "text": "Le premier échantillon est le moment pour vérifier si le brief écrit et la compréhension du fournisseur sont alignés."
        },
        {
          "title": "Vous modifiez un produit ou un emballage",
          "text": "Un changement de matériau, de finition, d'étiquette, d'insert, d'illustration ou de carton peut créer une nouvelle version qui doit être revue séparément."
        },
        {
          "title": "Vous êtes proche de l'approbation pour la production",
          "text": "Avant le lancement en production, l'acheteur doit distinguer ce qui est approuvé, ce qui reste ouvert et ce qui doit être contrôlé plus tard."
        }
      ],
      "evidenceTitle": "Utilisez l'échantillon comme point de revue contrôlé",
      "evidenceIntro": "La revue d'échantillon doit relier l'objet physique au brief écrit, au devis fournisseur et au passage en production. Un enregistrement court et précis est plus utile qu'un message général indiquant que « cela semble bien ».",
      "evidence": [
        {
          "number": "01",
          "title": "Nommez la version",
          "text": "Consignez la date, le fournisseur, le nom du produit, le matériau, la couleur, les dimensions, la version d'emballage et tout numéro de révision afin que chacun parle du même article."
        },
        {
          "number": "02",
          "title": "Vérifiez les exigences qui comptent",
          "text": "Examinez la fonction, l'apparence, les mesures, les matériaux, la finition, les étiquettes, l'emballage et toute exigence spécifique au produit qui affecte l'acheteur ou l'utilisateur final."
        },
        {
          "number": "03",
          "title": "Séparez les défauts des choix",
          "text": "Un défaut, une décision inachevée et une préférence sont différents. Indiquez quels points doivent être modifiés, lesquels sont acceptés et lesquels nécessitent une décision écrite."
        },
        {
          "number": "04",
          "title": "Créez un enregistrement de révision",
          "text": "Utilisez des photos, des annotations, des mesures ou une liste numérotée pour que les modifications demandées ne deviennent pas un message ambigu dans une discussion."
        },
        {
          "number": "05",
          "title": "Définissez la référence de production",
          "text": "Si vous approuvez une version, indiquez ce que couvre l'approbation et quels éléments — tels que l'emballage, les composants, les étiquettes ou les points de contrôle qualité — nécessitent encore une confirmation séparée."
        }
      ],
      "limitsTitle": "Ce que l'approbation d'un échantillon ne prouve pas",
      "limits": [
        {
          "title": "Un échantillon unique peut ne pas représenter la production de masse",
          "text": "Un échantillon fait main, d'ingénierie ou de pré-production peut différer de la production ultérieure. Demandez quelle version vous examinez et comment l'usine contrôlera la cohérence."
        },
        {
          "title": "L'approbation ne remplace pas le travail de conformité",
          "text": "Les tests pour le marché de destination, les étiquettes, les obligations de l'importateur, la revue juridique et les évaluations techniques spécialisées restent des responsabilités distinctes."
        },
        {
          "title": "Une photo n'est pas une spécification complète",
          "text": "Une photo d'échantillon peut étayer une décision, mais les dimensions, les détails de matériau, les tolérances, les étiquettes, l'emballage et autres exigences doivent toujours être consignés clairement."
        }
      ],
      "prepareTitle": "Préparez ceci avant une revue d'échantillon",
      "prepare": [
        "Le devis fournisseur et la version exacte du produit examinée",
        "Images de référence, dessins, mesures, couleurs et notes sur les matériaux",
        "Le marché de destination et toute question connue sur les étiquettes ou les tests",
        "Une fiche de revue pour les points à modifier impérativement, les points acceptés et les questions ouvertes",
        "La décision de production que vous souhaitez que l'échantillon soutienne"
      ],
      "routesTitle": "Accédez à la page suivante utile",
      "routes": [
        {
          "href": "/services/sample-sourcing/",
          "title": "Assistance pour l'approvisionnement d'échantillons",
          "text": "Comprenez comment les échantillons peuvent être reliés aux questions fournisseurs et à un enregistrement d'approbation plus clair.",
          "label": "Explorer les échantillons"
        },
        {
          "href": "/start-project/",
          "title": "Générateur de brief de projet",
          "text": "Transformez une idée, une quantité et des inconnues en un brief de départ structuré avant de demander des échantillons.",
          "label": "Construire votre brief"
        },
        {
          "href": "/quality-control-plan/",
          "title": "Planification du contrôle qualité",
          "text": "Reliez une version de produit approuvée aux contrôles qui doivent être effectués pendant la production et avant l'expédition.",
          "label": "Planifier le contrôle qualité"
        }
      ],
      "ctaTitle": "Rendez la prochaine revue d'échantillon plus facile à exploiter.",
      "ctaText": "Partagez la version du produit, l'échantillon du fournisseur et la décision que vous devez prendre. L'étape suivante pourra alors être définie plus clairement.",
      "ctaLabel": "Créer un brief de projet"
    },
    "factoryVisits": {
      "metaTitle": "Visites d'usines en Chine : Guide de planification pour acheteurs | Sourcing Ally",
      "metaDescription": "Décidez quand une visite d'usine est utile, quoi préparer, quoi observer et ce qu'une visite d'usine ne peut pas garantir.",
      "eyebrow": "GUIDE DE VISITE D'USINE",
      "title": "Une visite d'usine est la plus utile lorsqu'elle répond à une décision à prendre, et non à la simple curiosité.",
      "lede": "Une visite peut concrétiser une discussion avec un fournisseur. Elle est la plus utile lorsque l'acheteur sait ce qui doit être observé, quelles questions doivent recevoir une réponse et quelle décision la visite doit éclairer.",
      "situationsTitle": "Quand une visite peut être utile",
      "situations": [
        {
          "title": "Le produit ou la commande présente des enjeux importants",
          "text": "La personnalisation, un procédé technique, une valeur élevée, des plans de commandes répétées ou des affirmations de production peu claires peuvent justifier des preuves plus directes."
        },
        {
          "title": "Les informations du fournisseur doivent être vérifiées",
          "text": "Une visite peut aider à clarifier l'adresse de production, l'orientation produit, le flux de production, les équipements, les matériaux, la communication et les questions soulevées par l'acheteur."
        },
        {
          "title": "Vous voyagez en Chine",
          "text": "Une journée de déplacement est plus productive lorsque les réunions, les questions, les versions produit, les adresses d'usine et le plan de compte rendu sont convenus avant d'établir l'itinéraire."
        }
      ],
      "evidenceTitle": "Planifiez la visite autour des éléments de preuve",
      "evidenceIntro": "La visite la plus utile suit un ordre du jour. Elle doit relier vos exigences produit au contexte physique de production et aux décisions que vous prendrez ensuite.",
      "evidence": [
        {
          "number": "01",
          "title": "Définissez la question de la visite",
          "text": "Décidez si la visite porte principalement sur l'identité du fournisseur, la capacité produit, la discussion d'échantillon, le flux de process, les matériaux, l'emballage, les contrôles qualité ou une autre question définie."
        },
        {
          "number": "02",
          "title": "Confirmez le plan pratique",
          "text": "Vérifiez l'adresse exacte, le contact, la date, les exigences pour les visiteurs, le temps de trajet, la version du produit et si les bonnes personnes et les zones de production pertinentes seront disponibles."
        },
        {
          "number": "03",
          "title": "Observez par rapport au brief",
          "text": "Servez-vous des questions convenues sur le produit, l'échantillon, les matériaux, l'emballage, la qualité et la capacité pour orienter ce qui est observé et ce qui nécessite des clarifications."
        },
        {
          "number": "04",
          "title": "Consignez ce qui a été observé et ce qui ne l'a pas été",
          "text": "Les traces utiles peuvent inclure des photographies, des notes, des réponses, des observations de production, des questions ouvertes et des points nécessitant des documents ou un suivi ultérieur."
        },
        {
          "number": "05",
          "title": "Rendez visible la décision suivante",
          "text": "Après la visite, décidez si le fournisseur doit passer à un échantillon, une révision du devis, une commande d'essai, un nouveau contrôle, ou ne pas être retenu."
        }
      ],
      "limitsTitle": "Ce qu'une visite d'usine ne prouve pas",
      "limits": [
        {
          "title": "Une visite est une observation à un instant donné",
          "text": "Elle ne garantit pas la capacité future, la stabilité des effectifs, la disponibilité des matériaux, la qualité de production ni la performance en matière de livraison."
        },
        {
          "title": "Une installation n'est pas toute la chaîne d'approvisionnement",
          "text": "Un fournisseur peut avoir recours à des composants externalisés, des sous-traitants ou d'autres sites. Demandez quel travail s'effectue où et comment le produit concerné est contrôlé."
        },
        {
          "title": "Une visite ne remplace pas les contrats ni le travail de conformité",
          "text": "Les conditions commerciales, les tests produits, les règles du marché de destination, les obligations douanières et les questions juridiques doivent toujours être traités par les processus appropriés. La société ne travaille pas avec des produits dangereux ni avec des produits à usage militaire. Nous ne promettons pas de garanties, de conformité, de résultats juridiques, de résultats d'expédition ni une production sans défaut."
        }
      ],
      "prepareTitle": "Préparez ceci avant une visite d'usine",
      "prepare": [
        "La version du produit, l'échantillon ou le cahier des charges à discuter",
        "Un court ordre du jour de visite d'usine avec les questions les plus importantes",
        "L'adresse exacte de l'usine, le contact, l'heure de la rencontre et l'itinéraire de déplacement",
        "Les personnes qui doivent assister et le support linguistique nécessaire",
        "Le compte rendu attendu après la visite : notes, photos, questions ouvertes ou décision pour l'étape suivante"
      ],
      "routesTitle": "Accédez à la page utile suivante",
      "routes": [
        {
          "href": "/services/supplier-factory-checks/",
          "title": "Contrôles d'usine et de fournisseurs",
          "text": "Voyez comment un contrôle défini sur le terrain peut être cadré autour d'une question spécifique.",
          "label": "Explorer les contrôles d'usine"
        },
        {
          "href": "/china-route/",
          "title": "Carte d'itinéraire en Chine",
          "text": "Reliez les emplacements d'usines, les déplacements régionaux et un itinéraire d'approvisionnement pratique.",
          "label": "Explorer la carte d'itinéraire"
        },
        {
          "href": "/fees-and-scope/",
          "title": "Frais et périmètre",
          "text": "Consultez le tarif confirmé de déplacement indépendant en usine ($150 par jour seulement) et les détails du projet qui doivent être convenus avant le déplacement, y compris les frais de sourcing (minimum 5%) lorsque le client commande via Sourcing Ally.",
          "label": "Consulter le périmètre"
        }
      ],
      "ctaTitle": "Planifiez la visite autour de la question importante.",
      "ctaText": "Un brief structuré facilite la décision de savoir si une visite d'usine est utile et ce que la journée doit accomplir.",
      "ctaLabel": "Élaborer un brief de projet"
    },
    "qualityControlPlan": {
      "metaTitle": "Plan de contrôle qualité pour les commandes en Chine | Sourcing Ally",
      "metaDescription": "Élaborez un plan de contrôle qualité pratique avant la production et l'expédition en définissant la référence approuvée, les points de contrôle, les défauts, l'emballage et les décisions.",
      "eyebrow": "GUIDE DE CONTRÔLE QUALITÉ",
      "title": "Le contrôle qualité commence avant que l'usine réalise le produit final.",
      "lede": "Un contrôle qualité utile compare ce qui est observé à une référence connue. Plus la version du produit, les exigences, les priorités de défauts, l'emballage et le processus décisionnel sont clairs, plus la vérification ultérieure sera utile.",
      "situationsTitle": "Quand ce guide est utile",
      "situations": [
        {
          "title": "Vous passez de l'échantillon à la production",
          "text": "L'échantillon approuvé et les détails écrits du produit doivent devenir la référence pour les matériaux, les dimensions, la fonction, l'apparence, les étiquettes et l'emballage."
        },
        {
          "title": "Vous avez un produit présentant un risque visible ou fonctionnel",
          "text": "Les articles fragiles, l'électronique, les textiles, les produits personnalisés, les produits composés et les emballages de vente au détail nécessitent souvent des points de contrôle plus spécifiques."
        },
        {
          "title": "Vous approchez de l'expédition",
          "text": "Avant que les marchandises ne quittent l'usine, l'acheteur doit savoir ce qui est contrôlé, comment les constats sont enregistrés et qui décide de l'action suivante."
        }
      ],
      "evidenceTitle": "Élaborez le plan avant la vérification",
      "evidenceIntro": "Le contrôle qualité est plus utile lorsque le fournisseur, l'acheteur et le support sur le terrain comparent la même version du produit et les mêmes exigences prioritaires.",
      "evidence": [
        {
          "number": "01",
          "title": "Définir la référence approuvée",
          "text": "Relier la version actuelle du produit aux dessins, photos, échantillon, mesures, notes sur les matériaux, couleurs, étiquettes et exigences d'emballage."
        },
        {
          "number": "02",
          "title": "Séparer les exigences critiques des préférences",
          "text": "Identifier les points qui affectent la sécurité, la fonction, les questions réglementaires, l'usage client, l'apparence majeure ou la préparation à l'expédition, plutôt que de traiter chaque préférence de la même façon."
        },
        {
          "number": "03",
          "title": "Choisir des points de contrôle pratiques",
          "text": "Selon le projet, des contrôles peuvent être utiles pour les échantillons, les matériaux, l'avancement de la production, les produits finis, l'emballage et le chargement ou la remise."
        },
        {
          "number": "04",
          "title": "Définir comment les constats seront enregistrés",
          "text": "Un compte rendu utile identifie l'exigence, l'état observé, les preuves, la quantité affectée le cas échéant, la question ouverte et la décision suivante nécessaire."
        },
        {
          "number": "05",
          "title": "Décider qui agit sur le résultat",
          "text": "Avant la vérification, préciser qui reçoit le rapport, qui approuve une décision de retouche ou d'expédition et comment la réponse du fournisseur sera consignée."
        }
      ],
      "limitsTitle": "Ce que le contrôle qualité ne garantit pas",
      "limits": [
        {
          "title": "Une vérification n'est pas une promesse pour chaque unité",
          "text": "L'étendue, le calendrier, l'accès au produit, la méthode d'échantillonnage et les exigences définies influent sur ce qui peut être observé. Aucune vérification ne peut garantir que chaque unité future sera exempte de défauts."
        },
        {
          "title": "Inspection et conformité sont différentes",
          "text": "Un contrôle qualité peut observer des exigences produits définies. Il ne remplace pas les tests en laboratoire requis, les conseils juridiques, les certifications ou l'évaluation de conformité pour le marché de destination."
        },
        {
          "title": "Un rapport nécessite une décision de l'acheteur",
          "text": "Les seules observations ne résolvent pas un problème. L'acheteur et le fournisseur doivent toujours décider d'accepter, de retoucher, de remplacer, d'enquêter ou de retarder une remise. Nous ne promettons jamais des garanties, la conformité, des résultats juridiques, des résultats d'expédition ou une production sans défaut."
        }
      ],
      "prepareTitle": "Préparez ceci avant une vérification qualité",
      "prepare": [
        "La référence du produit et de l'emballage approuvés",
        "Les mesures, matériaux, fonctions, couleurs, étiquettes et détails d'emballage importants",
        "Une liste pratique des préoccupations critiques, majeures et mineures pour le produit",
        "Le calendrier de production, la quantité, l'adresse de l'usine et l'étape prévue du contrôle",
        "Qui examinera les constats et approuvera l'action suivante"
      ],
      "routesTitle": "Aller à la page suivante utile",
      "routes": [
        {
          "href": "/services/quality-control/",
          "title": "Soutien en contrôle qualité",
          "text": "Voyez comment les exigences qualité peuvent être définies autour de votre produit et de l'étape de votre projet.",
          "label": "Explorer le contrôle qualité"
        },
        {
          "href": "/product-samples/",
          "title": "Échantillons produits et approbation",
          "text": "Reliez l'échantillon approuvé à une référence de production plus claire avant de planifier une vérification.",
          "label": "Revoir la planification des échantillons"
        },
        {
          "href": "/services/packaging/",
          "title": "Coordination de l'emballage",
          "text": "Intégrez l'emballage au contrôle du produit et de l'expédition, plutôt qu'à un détail traité après la production.",
          "label": "Explorer l'emballage"
        }
      ],
      "ctaTitle": "Définissez la question qualité avant que les marchandises ne soient prêtes.",
      "ctaText": "Un court cahier des charges peut identifier la version du produit, les exigences prioritaires, le calendrier et la décision que votre contrôle qualité doit soutenir. Frais de sourcing minimum de 5% lorsque le client commande via Sourcing Ally. 150 $ par jour uniquement pour le soutien de déplacement indépendant à l'usine lorsque le client commande directement auprès d'une usine. La société ne travaille pas avec des marchandises dangereuses ou militaires. Nous ne promettons jamais des garanties, la conformité, des résultats juridiques, des résultats d'expédition ou une production sans défaut.",
      "ctaLabel": "Rédiger un cahier des charges"
    }
  }
} as const;

type TranslationDictionary = Record<string, string>;

function localizeValue<T>(value: T, dictionary: TranslationDictionary): T {
  if (typeof value === 'string') return (dictionary[value] ?? value) as T;
  if (Array.isArray(value)) return value.map((entry) => localizeValue(entry, dictionary)) as T;
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([key, entry]) => [key, localizeValue(entry, dictionary)])) as T;
  }
  return value;
}

const generated = generatedDecisionSuiteTranslations as Record<'ja' | 'de' | 'ar' | 'id' | 'it', TranslationDictionary>;

export const decisionSuite = {
  ...baseDecisionSuite,
  ja: localizeValue(baseDecisionSuite.en, generated.ja),
  de: localizeValue(baseDecisionSuite.en, generated.de),
  ar: localizeValue(baseDecisionSuite.en, generated.ar),
  id: localizeValue(baseDecisionSuite.en, generated.id),
  it: localizeValue(baseDecisionSuite.en, generated.it),
} as const;
