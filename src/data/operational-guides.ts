export const operationalGuideLanguages = ['en', 'es', 'pt', 'ru', 'tr', 'fr'] as const;
export type OperationalGuideLanguage = (typeof operationalGuideLanguages)[number];

export const operationalGuides = {
  "en": {
    "shippingReadiness": {
      "metaTitle": "Shipping Readiness for China Orders | Sourcing Ally",
      "metaDescription": "Prepare a China order for handover by connecting the product reference, packaging, commercial information, delivery terms, timing, and forwarder questions.",
      "eyebrow": "SHIPPING READINESS GUIDE",
      "title": "Before goods leave the factory, make the handover question clear.",
      "lede": "Shipping readiness is not only booking transport. It is the point where the approved product, finished quantity, packaging, documents, delivery terms, timing, and destination questions need to make sense together.",
      "situationsTitle": "When this guide is useful",
      "situations": [
        {
          "title": "Finished goods are getting close",
          "text": "You need to connect the final product, quantity, carton information, quality status, and collection timing before a forwarder is asked to arrange a handover."
        },
        {
          "title": "Several people are handling different pieces",
          "text": "The supplier, buyer, forwarder, importer, warehouse, or packaging contact may each hold part of the information. A shared handover record reduces avoidable uncertainty."
        },
        {
          "title": "The delivery term or destination is unclear",
          "text": "Before cargo moves, the buyer should know which named place and delivery term are being used, who is arranging which step, and which questions still need the forwarder or importer to answer."
        }
      ],
      "evidenceTitle": "Create one usable shipment handover record",
      "evidenceIntro": "A useful handover record does not replace freight, customs, insurance, or legal advice. It gives the people responsible for those tasks a clearer starting point and exposes what still needs to be confirmed.",
      "evidence": [
        {
          "number": "01",
          "title": "Freeze the product and quantity reference",
          "text": "State the current product version, finished quantity, variations, labels, accessories, approved packaging, and any points that still affect whether goods are ready to hand over."
        },
        {
          "number": "02",
          "title": "Make packaging and cargo information visible",
          "text": "Ask for the final package count, carton dimensions, gross and net weight, shipping marks, pallet or loading information where relevant, and photos when they help resolve a practical question."
        },
        {
          "number": "03",
          "title": "Name the delivery term and place",
          "text": "Record the agreed trade term, named place or port, and version where applicable. Do not assume that a short trade-term label explains every payment, document, title, insurance, customs, or destination obligation."
        },
        {
          "number": "04",
          "title": "Align commercial and transport information",
          "text": "The commercial invoice, packing details, product description, quantities, and shipment instructions should refer to the same goods. Inconsistencies should be clarified before documents or cargo are released."
        },
        {
          "number": "05",
          "title": "Confirm the open questions with the responsible parties",
          "text": "A chosen forwarder and the importer should confirm route, collection, required information, destination requirements, insurance choices, and clearance responsibilities for the actual shipment."
        }
      ],
      "limitsTitle": "What shipping readiness does not decide",
      "limits": [
        {
          "title": "A trade term is not a complete shipping plan",
          "text": "Trade terms allocate particular delivery tasks, costs, and risks, but they do not settle every contract issue, payment detail, document requirement, customs obligation, or dispute question."
        },
        {
          "title": "A document list changes by product and destination",
          "text": "Commercial and transport documents can be common, while certificates, labels, import permissions, testing, declarations, duties, and clearance requirements depend on the goods and destination."
        },
        {
          "title": "Readiness is not a delivery guarantee",
          "text": "A clear handover record can reduce uncertainty, but it cannot guarantee a carrier schedule, customs outcome, insurance claim, destination clearance, cost, damage-free transit, or delivery date."
        }
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
        {
          "href": "/quality-control-plan/",
          "title": "Quality-control planning",
          "text": "Connect shipment timing with the product and packaging checks that should be defined before goods are released.",
          "label": "Plan quality control"
        },
        {
          "href": "/services/packaging/",
          "title": "Packaging coordination",
          "text": "Treat cartons, labels, inserts, packing method, and shipping marks as part of the product handover rather than an afterthought.",
          "label": "Explore packaging"
        },
        {
          "href": "/blog/what-freight-forwarder-handles-china-shipment/",
          "title": "Freight forwarder guide",
          "text": "Use the Journal guide to prepare questions for a forwarder without confusing logistics support with destination-specific advice.",
          "label": "Read the Journal guide"
        }
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
        {
          "title": "You want to meet suppliers in person",
          "text": "A factory meeting is most useful when you know why each supplier is on the route, what needs to be observed, and what decision the meeting should help you make."
        },
        {
          "title": "Your trip has more than one city or factory",
          "text": "Shenzhen, Guangzhou, Foshan, Dongguan, Zhongshan, Huizhou, Yiwu, and other sourcing areas can involve real travel time. A route should be based on confirmed locations and meeting priorities, not only a map."
        },
        {
          "title": "You need help making the visit practical",
          "text": "Language support, factory addresses, meeting timing, product context, and a record of open questions can make the day more useful without turning an observation into a guarantee."
        }
      ],
      "evidenceTitle": "Build the trip around evidence and follow-up",
      "evidenceIntro": "The goal is not to visit as many places as possible. It is to use limited travel time to answer the questions that matter for supplier selection, samples, production, quality, packaging, or the next commercial decision.",
      "evidence": [
        {
          "number": "01",
          "title": "Define the decision behind each visit",
          "text": "State whether a meeting is about supplier identity, product capability, sample review, materials, production flow, packaging, quality questions, or a specific unresolved issue."
        },
        {
          "number": "02",
          "title": "Confirm the exact meeting plan",
          "text": "Before setting the route, confirm the factory address, contact, date, meeting duration, attendees, language needs, product version, and whether the relevant people and areas will be available."
        },
        {
          "number": "03",
          "title": "Travel with the right product evidence",
          "text": "Bring or share the current brief, sample, drawings, photos, material notes, measurements, packaging points, and a short agenda so the visit refers to the same product version as the written discussion."
        },
        {
          "number": "04",
          "title": "Verify travel and entry details independently",
          "text": "Entry, transit, accommodation, carrier rules, registration, payment access, telecommunications, and local travel conditions can change. Confirm your own requirements through relevant official sources, your carrier, accommodation, and the applicable embassy or consulate before departure."
        },
        {
          "number": "05",
          "title": "Record the next decision after every meeting",
          "text": "Capture what was observed, which questions were answered, what remained unclear, and whether the supplier should move to a sample, quotation revision, another check, trial order, or no further step."
        }
      ],
      "limitsTitle": "What factory travel support does not provide",
      "limits": [
        {
          "title": "It is not immigration or travel advice",
          "text": "Sourcing Ally cannot decide entry eligibility, visa or transit requirements, registration duties, security choices, insurance, or traveller-specific obligations. These must be verified by the traveller through appropriate official and professional channels."
        },
        {
          "title": "A visit is an observation, not a supplier guarantee",
          "text": "A meeting or factory observation can document what is seen and discussed on that day. It cannot guarantee future capacity, product quality, delivery, business status, or the actions of other parties."
        },
        {
          "title": "Independent travel support needs an agreed scope",
          "text": "When a client orders directly from a factory rather than through Sourcing Ally, independent factory travel support is quoted at US$150 per day. The itinerary, locations, language needs, tasks, expenses, and deliverables should be agreed before travel."
        }
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
        {
          "href": "/factory-visits/",
          "title": "Factory visit planning",
          "text": "Use the dedicated guide to decide what a factory visit should observe and what it cannot prove.",
          "label": "Plan a factory visit"
        },
        {
          "href": "/china-route/",
          "title": "China Route Map",
          "text": "Explore sourcing locations and turn factory addresses into a more realistic regional route.",
          "label": "Explore the route map"
        },
        {
          "href": "/fees-and-scope/",
          "title": "Fees and scope",
          "text": "Review the confirmed US$150 daily rate for independent factory travel support and the scope that should be agreed before travel.",
          "label": "Review travel scope"
        }
      ],
      "ctaTitle": "Plan the trip around the question you need China to answer.",
      "ctaText": "A short project brief can identify useful supplier meetings, product context, likely travel areas, language support needs, and the decisions to capture after each visit.",
      "ctaLabel": "Build a project brief"
    }
  },
  "es": {
    "shippingReadiness": {
      "metaTitle": "Preparación de envíos para pedidos desde China | Sourcing Ally",
      "metaDescription": "Prepare un pedido desde China para la entrega conectando la referencia del producto, el embalaje, la información comercial, los términos de entrega, el calendario y las preguntas para el agente de carga.",
      "eyebrow": "GUÍA DE PREPARACIÓN DE ENVÍOS",
      "title": "Antes de que las mercancías salgan de la fábrica, deje clara la cuestión de la entrega.",
      "lede": "La preparación de envío no es solo reservar transporte. Es el momento en el que el producto aprobado, la cantidad finalizada, el embalaje, los documentos, los términos de entrega, el calendario y las preguntas sobre el destino deben encajar entre sí.",
      "situationsTitle": "Cuando esta guía es útil",
      "situations": [
        {
          "title": "Los productos terminados están próximos",
          "text": "Necesita conectar el producto final, la cantidad, la información de los cartones, el estado de calidad y el momento de la recogida antes de pedir a un agente de carga que organice la entrega."
        },
        {
          "title": "Varias personas están encargadas de distintos aspectos",
          "text": "El proveedor, el comprador, el agente de carga, el importador, el almacén o el contacto de embalaje pueden tener cada uno parte de la información. Un registro de entrega compartido reduce la incertidumbre evitable."
        },
        {
          "title": "El término de entrega o el destino no están claros",
          "text": "Antes de mover la carga, el comprador debe saber qué lugar nombrado y qué término de entrega se están usando, quién organiza cada etapa y qué preguntas todavía deben responder el agente de carga o el importador."
        }
      ],
      "evidenceTitle": "Cree un registro de entrega utilizable",
      "evidenceIntro": "Un registro de entrega útil no reemplaza el asesoramiento de transporte, aduanas, seguros o legal. Proporciona a las personas responsables de esas tareas un punto de partida más claro y muestra lo que aún necesita confirmarse.",
      "evidence": [
        {
          "number": "01",
          "title": "Fije la referencia del producto y la cantidad",
          "text": "Indique la versión actual del producto, la cantidad final, variaciones, etiquetas, accesorios, embalaje aprobado y cualquier punto que aún afecte si las mercancías están listas para la entrega."
        },
        {
          "number": "02",
          "title": "Haga visible la información de embalaje y carga",
          "text": "Solicite el conteo final de paquetes, las dimensiones de los cartones, el peso bruto y neto, las marcas de envío, la información de paletización o carga cuando corresponda, y fotos cuando ayuden a resolver una cuestión práctica."
        },
        {
          "number": "03",
          "title": "Especifique el término y lugar de entrega",
          "text": "Registre el término comercial acordado, el lugar o puerto nombrado, y la versión cuando aplique. No asuma que una etiqueta corta del término comercial explica todas las obligaciones de pago, documentación, titularidad, seguro, aduanas o destino."
        },
        {
          "number": "04",
          "title": "Alinee la información comercial y de transporte",
          "text": "La factura comercial, los detalles del embalaje, la descripción del producto, las cantidades y las instrucciones de envío deben referirse a las mismas mercancías. Las inconsistencias deben aclararse antes de liberar documentos o carga."
        },
        {
          "number": "05",
          "title": "Confirme las preguntas abiertas con las partes responsables",
          "text": "El agente de carga seleccionado y el importador deben confirmar la ruta, la recogida, la información requerida, los requisitos del destino, las opciones de seguro y las responsabilidades de despacho para el envío real."
        }
      ],
      "limitsTitle": "Lo que la preparación de envío no decide",
      "limits": [
        {
          "title": "Un término comercial no es un plan de envío completo",
          "text": "Los términos comerciales asignan tareas, costos y riesgos concretos de entrega, pero no resuelven todos los asuntos contractuales, detalles de pago, requisitos documentales, obligaciones aduaneras o cuestiones de disputa."
        },
        {
          "title": "La lista de documentos cambia según el producto y el destino",
          "text": "Los documentos comerciales y de transporte pueden ser comunes, mientras que certificados, etiquetas, permisos de importación, pruebas, declaraciones, aranceles y requisitos de despacho dependen de las mercancías y del destino."
        },
        {
          "title": "La preparación no es una garantía de entrega",
          "text": "Un registro de entrega claro puede reducir la incertidumbre, pero no puede garantizar el horario del transportista, el resultado en aduanas, una reclamación de seguro, el despacho en destino, el costo, el tránsito sin daños ni la fecha de entrega."
        }
      ],
      "prepareTitle": "Prepare lo siguiente antes de solicitar la entrega del envío",
      "prepare": [
        "La referencia del producto y del embalaje aprobados, incluidas variaciones y etiquetas",
        "Cantidad final, conteo de paquetes, dimensiones de cartones y peso bruto y neto cuando estén disponibles",
        "El término de entrega acordado, el lugar nombrado y las partes responsables de organizar el transporte",
        "Factura comercial e información de embalaje que coincidan con las mercancías reales",
        "Datos de contacto del agente de carga y del importador, además de las preguntas sobre el destino que deben confirmarse"
      ],
      "routesTitle": "Conecte el envío con las decisiones previas",
      "routes": [
        {
          "href": "/quality-control-plan/",
          "title": "Planificación del control de calidad",
          "text": "Conecte el calendario de envío con las inspecciones del producto y del embalaje que deben definirse antes de liberar las mercancías.",
          "label": "Planificar control de calidad"
        },
        {
          "href": "/services/packaging/",
          "title": "Coordinación del embalaje",
          "text": "Considere los cartones, etiquetas, inserciones, método de embalaje y marcas de envío como parte de la entrega del producto y no como un añadido posterior.",
          "label": "Explorar embalaje"
        },
        {
          "href": "/blog/what-freight-forwarder-handles-china-shipment/",
          "title": "Guía del agente de carga",
          "text": "Use la guía del Journal para preparar preguntas para un agente de carga sin confundir el soporte logístico con asesoramiento específico del destino.",
          "label": "Leer la guía del Journal"
        }
      ],
      "ctaTitle": "Defina la cuestión de la entrega antes de solicitar que la carga se mueva.",
      "ctaText": "Un breve resumen del proyecto puede poner en evidencia el producto, el embalaje, el calendario y las cuestiones logísticas pendientes antes del siguiente compromiso operativo.",
      "ctaLabel": "Crear un resumen del proyecto"
    },
    "chinaBusinessTravel": {
      "metaTitle": "Viajes de negocios a China y planificación de visitas a fábricas | Sourcing Ally",
      "metaDescription": "Planifique un viaje a fábricas en China con propósito conectando la pregunta de la visita, reuniones con proveedores, ruta de viaje, evidencias del producto, aspectos prácticos locales y decisiones de seguimiento.",
      "eyebrow": "GUÍA DE VIAJES DE NEGOCIOS A CHINA",
      "title": "Un viaje a fábricas en China es más efectivo cuando cada día responde a una decisión.",
      "lede": "Un viaje de sourcing puede concretar una conversación con un proveedor, pero solo si antes del viaje se preparan las reuniones adecuadas, las preguntas, las referencias del producto, la ruta y el plan de seguimiento.",
      "situationsTitle": "Cuando esta guía es útil",
      "situations": [
        {
          "title": "Desea reunirse con proveedores en persona",
          "text": "Una reunión en fábrica es más útil cuando sabe por qué cada proveedor está en la ruta, qué debe observarse y qué decisión debe ayudar a tomar esa reunión."
        },
        {
          "title": "Su viaje incluye más de una ciudad o fábrica",
          "text": "Shenzhen, Guangzhou, Foshan, Dongguan, Zhongshan, Huizhou, Yiwu y otras zonas de sourcing pueden implicar tiempos de traslado reales. La ruta debe basarse en ubicaciones confirmadas y prioridades de reuniones, no solo en un mapa."
        },
        {
          "title": "Necesita ayuda para que la visita sea práctica",
          "text": "Soporte de idioma, direcciones de fábrica, horarios de reunión, contexto del producto y un registro de preguntas abiertas pueden hacer el día más útil sin convertir una observación en una garantía."
        }
      ],
      "evidenceTitle": "Organice el viaje en torno a la evidencia y el seguimiento",
      "evidenceIntro": "El objetivo no es visitar la mayor cantidad de lugares posible. Es usar el tiempo de viaje limitado para responder las preguntas que importan para la selección de proveedores, muestras, producción, calidad, embalaje o la siguiente decisión comercial.",
      "evidence": [
        {
          "number": "01",
          "title": "Defina la decisión detrás de cada visita",
          "text": "Indique si la reunión trata sobre la identidad del proveedor, capacidad del producto, revisión de muestras, materiales, flujo de producción, embalaje, cuestiones de calidad o un asunto específico sin resolver."
        },
        {
          "number": "02",
          "title": "Confirme el plan exacto de la reunión",
          "text": "Antes de fijar la ruta, confirme la dirección de la fábrica, el contacto, la fecha, la duración de la reunión, los asistentes, las necesidades de idioma, la versión del producto y si las personas y áreas relevantes estarán disponibles."
        },
        {
          "number": "03",
          "title": "Viaje con la evidencia de producto adecuada",
          "text": "Lleve o comparta el brief actual, la muestra, los dibujos, fotos, notas de materiales, medidas, puntos de embalaje y una agenda corta para que la visita se refiera a la misma versión del producto que la discusión por escrito."
        },
        {
          "number": "04",
          "title": "Verifique de forma independiente los detalles de viaje y entrada",
          "text": "Entrada, tránsito, alojamiento, reglas del transportista, requisitos de registro, acceso a pagos, telecomunicaciones y condiciones de viaje locales pueden cambiar. Confirme sus propios requisitos a través de las fuentes oficiales pertinentes, su transportista, el alojamiento y la embajada o consulado aplicable antes de la salida."
        },
        {
          "number": "05",
          "title": "Registre la próxima decisión después de cada reunión",
          "text": "Capture lo observado, qué preguntas se respondieron, qué quedó sin aclarar y si el proveedor debe avanzar a muestra, revisión de cotización, otra verificación, pedido de prueba o no dar pasos adicionales."
        }
      ],
      "limitsTitle": "Qué no ofrece el soporte de viajes a fábricas",
      "limits": [
        {
          "title": "No es asesoría migratoria ni de viajes",
          "text": "Sourcing Ally no puede decidir la elegibilidad de entrada, requisitos de visa o tránsito, obligaciones de registro, opciones de seguridad, seguros ni responsabilidades específicas del viajero. Estos deben verificarse por el viajero a través de los canales oficiales y profesionales apropiados."
        },
        {
          "title": "Una visita es una observación, no una garantía del proveedor",
          "text": "Una reunión u observación en fábrica puede documentar lo que se ve y discute ese día. No puede garantizar capacidad futura, calidad del producto, entrega, estado comercial ni las acciones de otras partes."
        },
        {
          "title": "El soporte de viaje independiente requiere un alcance acordado",
          "text": "Cuando un cliente ordena directamente a una fábrica en lugar de hacerlo a través de Sourcing Ally, el soporte de viaje independiente a la fábrica se cotiza en US$150 por día. El itinerario, ubicaciones, necesidades de idioma, tareas, gastos y entregables deben acordarse antes del viaje."
        }
      ],
      "prepareTitle": "Prepare esto antes de un viaje de sourcing a China",
      "prepare": [
        "El propósito y la pregunta de decisión para cada reunión con proveedor o fábrica",
        "Direcciones confirmadas, contactos, horarios de reunión, asistentes y tiempo de viaje realista entre ubicaciones",
        "El brief del producto, muestra, dibujos, fotos, medidas y puntos de embalaje para discutir",
        "Sus arreglos de entrada, tránsito, alojamiento, transportista, pagos, conexiones y viajes locales verificados de forma independiente",
        "Una agenda de la visita y un formato simple para registrar observaciones, fotos, preguntas abiertas y próximas acciones"
      ],
      "routesTitle": "Planifique el viaje en contexto",
      "routes": [
        {
          "href": "/factory-visits/",
          "title": "Planificación de visitas a fábrica",
          "text": "Use la guía dedicada para decidir qué debe observar una visita a fábrica y qué no puede probar.",
          "label": "Planear una visita a fábrica"
        },
        {
          "href": "/china-route/",
          "title": "Mapa de rutas por China",
          "text": "Explore las ubicaciones de sourcing y convierta direcciones de fábricas en una ruta regional más realista.",
          "label": "Explorar el mapa de rutas"
        },
        {
          "href": "/fees-and-scope/",
          "title": "Tarifas y alcance",
          "text": "Revise la tarifa confirmada de US$150 por día para soporte de viaje independiente a fábricas y el alcance que debe acordarse antes del viaje.",
          "label": "Revisar el alcance del viaje"
        }
      ],
      "ctaTitle": "Planifique el viaje en torno a la pregunta que necesita que China responda.",
      "ctaText": "Un breve brief de proyecto puede identificar reuniones útiles con proveedores, contexto del producto, áreas probables de viaje, necesidades de soporte de idioma y las decisiones que deben capturarse después de cada visita.",
      "ctaLabel": "Elaborar un brief de proyecto"
    }
  },
  "pt": {
    "shippingReadiness": {
      "metaTitle": "Prontidão de Embarque para Pedidos da China | Sourcing Ally",
      "metaDescription": "Prepare um pedido da China para entrega conectando a referência do produto, embalagem, informações comerciais, termos de entrega, cronograma e perguntas para o agente de carga.",
      "eyebrow": "GUIA DE PRONTIDÃO DE EMBARQUE",
      "title": "Antes de as mercadorias saírem da fábrica, esclareça a questão da entrega.",
      "lede": "Prontidão para embarque não é apenas reservar transporte. É o momento em que o produto aprovado, a quantidade finalizada, a embalagem, os documentos, os termos de entrega, o cronograma e as questões de destino precisam fazer sentido em conjunto.",
      "situationsTitle": "Quando este guia é útil",
      "situations": [
        {
          "title": "Produtos acabados estão quase prontos",
          "text": "Você precisa conectar o produto final, a quantidade, as informações das caixas, o status de qualidade e o cronograma de coleta antes de pedir a um agente de carga para organizar a entrega."
        },
        {
          "title": "Várias pessoas estão cuidando de partes diferentes",
          "text": "O fornecedor, comprador, agente de carga, importador, armazém ou contato de embalagem podem cada um ter parte das informações. Um registro de entrega compartilhado reduz incertezas evitáveis."
        },
        {
          "title": "O termo de entrega ou destino não está claro",
          "text": "Antes do deslocamento da carga, o comprador deve saber qual local nomeado e termo de entrega estão sendo usados, quem está organizando cada etapa e quais perguntas ainda precisam ser respondidas pelo agente de carga ou importador."
        }
      ],
      "evidenceTitle": "Crie um único registro de entrega utilizável",
      "evidenceIntro": "Um registro de entrega útil não substitui aconselhamento sobre frete, alfândega, seguro ou jurídico. Ele dá às pessoas responsáveis por essas tarefas um ponto de partida mais claro e expõe o que ainda precisa ser confirmado.",
      "evidence": [
        {
          "number": "01",
          "title": "Fixar a referência do produto e da quantidade",
          "text": "Informe a versão atual do produto, a quantidade finalizada, variações, rótulos, acessórios, embalagem aprovada e quaisquer pontos que ainda afetem se as mercadorias estão prontas para entrega."
        },
        {
          "number": "02",
          "title": "Tornar visíveis as informações de embalagem e carga",
          "text": "Solicite a contagem final de pacotes, dimensões das caixas, peso bruto e líquido, marcas de embarque, informações sobre paletes ou carregamento quando relevantes, e fotos quando ajudarem a resolver uma questão prática."
        },
        {
          "number": "03",
          "title": "Nomear o termo e o local de entrega",
          "text": "Registre o termo comercial acordado, o local nomeado ou porto e a versão quando aplicável. Não presuma que um rótulo curto do termo comercial explique todas as obrigações de pagamento, documentação, titularidade, seguro, alfândega ou destino."
        },
        {
          "number": "04",
          "title": "Alinhar as informações comerciais e de transporte",
          "text": "A fatura comercial, os detalhes de embalagem, a descrição do produto, as quantidades e as instruções de envio devem referir‑se às mesmas mercadorias. Inconsistências devem ser esclarecidas antes que documentos ou cargas sejam liberados."
        },
        {
          "number": "05",
          "title": "Confirmar as questões em aberto com as partes responsáveis",
          "text": "O agente de carga escolhido e o importador devem confirmar rota, coleta, informações necessárias, exigências do destino, opções de seguro e responsabilidades de desembaraço para o embarque real."
        }
      ],
      "limitsTitle": "O que a prontidão de embarque não decide",
      "limits": [
        {
          "title": "Um termo comercial não é um plano completo de envio",
          "text": "Os termos comerciais alocam tarefas, custos e riscos específicos de entrega, mas não resolvem todas as questões contratuais, detalhes de pagamento, exigências documentais, obrigações alfandegárias ou pontos de disputa."
        },
        {
          "title": "A lista de documentos varia conforme o produto e o destino",
          "text": "Documentos comerciais e de transporte podem ser comuns, enquanto certificados, rótulos, permissões de importação, testes, declarações, impostos e requisitos de desembaraço dependem das mercadorias e do destino."
        },
        {
          "title": "A prontidão não é uma garantia de entrega",
          "text": "Um registro de entrega claro pode reduzir a incerteza, mas não pode garantir a programação do transportador, o resultado na alfândega, uma reclamação de seguro, o desembaraço no destino, o custo, o transporte sem avarias ou a data de entrega."
        }
      ],
      "prepareTitle": "Prepare o seguinte antes de solicitar a entrega da carga",
      "prepare": [
        "A referência do produto e da embalagem aprovados, incluindo variações e rótulos",
        "Quantidade finalizada, contagem de pacotes, dimensões das caixas e peso bruto e líquido quando disponíveis",
        "O termo de entrega acordado, o local nomeado e as partes responsáveis por organizar o transporte",
        "Fatura comercial e informações de embalagem que correspondam às mercadorias reais",
        "Detalhes de contato do agente de carga e do importador, além das questões de destino que precisam de confirmação"
      ],
      "routesTitle": "Conecte o envio às decisões que o antecedem",
      "routes": [
        {
          "href": "/quality-control-plan/",
          "title": "Planejamento de controle de qualidade",
          "text": "Conecte o cronograma de embarque com as verificações do produto e da embalagem que devem ser definidas antes da liberação das mercadorias.",
          "label": "Planejar controle de qualidade"
        },
        {
          "href": "/services/packaging/",
          "title": "Coordenação de embalagens",
          "text": "Considere caixas, etiquetas, inserções, método de embalagem e marcas de embarque como parte da entrega do produto, não como um adendo.",
          "label": "Saiba mais sobre embalagens"
        },
        {
          "href": "/blog/what-freight-forwarder-handles-china-shipment/",
          "title": "Guia do agente de carga",
          "text": "Use o guia do Journal para preparar perguntas ao agente de carga, sem confundir suporte logístico com aconselhamento específico para o destino.",
          "label": "Leia o guia do Journal"
        }
      ],
      "ctaTitle": "Defina a questão de entrega antes de solicitar o deslocamento da carga.",
      "ctaText": "Um breve briefing do projeto pode tornar visíveis o produto, a embalagem, o cronograma e as questões logísticas em aberto antes do próximo comprometimento operacional.",
      "ctaLabel": "Monte um briefing do projeto"
    },
    "chinaBusinessTravel": {
      "metaTitle": "China Business Travel and Factory Visit Planning | Sourcing Ally",
      "metaDescription": "Planeje uma viagem produtiva a fábricas na China conectando a questão da visita, reuniões com fornecedores, roteiro de viagem, evidências do produto, questões locais e decisões de acompanhamento.",
      "eyebrow": "GUIA DE VIAGENS DE NEGÓCIOS NA CHINA",
      "title": "Uma viagem a fábricas na China é mais eficaz quando cada dia tem uma decisão por trás.",
      "lede": "Uma viagem de sourcing pode tornar a conversa com o fornecedor mais concreta, mas somente se as reuniões certas, as perguntas, as referências do produto, o roteiro e o plano de acompanhamento forem preparados antes do início da viagem.",
      "situationsTitle": "Quando este guia é útil",
      "situations": [
        {
          "title": "Você quer encontrar fornecedores pessoalmente",
          "text": "Uma reunião na fábrica é mais útil quando você sabe por que cada fornecedor está no roteiro, o que precisa ser observado e qual decisão a reunião deve ajudar a tomar."
        },
        {
          "title": "Sua viagem inclui mais de uma cidade ou fábrica",
          "text": "Shenzhen, Guangzhou, Foshan, Dongguan, Zhongshan, Huizhou, Yiwu e outras áreas de sourcing podem envolver tempo real de deslocamento. Um roteiro deve basear-se em localizações confirmadas e prioridades de reunião, não apenas em um mapa."
        },
        {
          "title": "Você precisa de ajuda para tornar a visita prática",
          "text": "Apoio linguístico, endereços de fábricas, horários de reunião, contexto do produto e um registro de perguntas em aberto podem tornar o dia mais útil sem transformar uma observação em uma garantia."
        }
      ],
      "evidenceTitle": "Construa a viagem com base em evidências e acompanhamento",
      "evidenceIntro": "O objetivo não é visitar o maior número possível de lugares. É usar o tempo de viagem limitado para responder às perguntas que importam para a seleção de fornecedores, amostras, produção, qualidade, embalagem ou a próxima decisão comercial.",
      "evidence": [
        {
          "number": "01",
          "title": "Defina a decisão por trás de cada visita",
          "text": "Indique se a reunião trata da identidade do fornecedor, capacidade do produto, revisão de amostras, materiais, fluxo de produção, embalagem, questões de qualidade ou um tema específico ainda não resolvido."
        },
        {
          "number": "02",
          "title": "Confirme o plano exato da reunião",
          "text": "Antes de definir o roteiro, confirme o endereço da fábrica, o contato, a data, a duração da reunião, os participantes, as necessidades linguísticas, a versão do produto e se as pessoas e áreas relevantes estarão disponíveis."
        },
        {
          "number": "03",
          "title": "Viaje com as evidências corretas do produto",
          "text": "Leve ou compartilhe o brief atual do produto, amostras, desenhos, fotos, anotações sobre materiais, medidas, pontos de embalagem e uma agenda curta para que a visita se refira à mesma versão do produto discutida por escrito."
        },
        {
          "number": "04",
          "title": "Verifique detalhes de viagem e entrada de forma independente",
          "text": "Entrada, trânsito, acomodação, regras do transportador, registro, acesso a pagamento, telecomunicações e condições locais de deslocamento podem mudar. Confirme seus próprios requisitos por meio de fontes oficiais relevantes, seu transportador, acomodação e a embaixada ou consulado aplicável antes da partida."
        },
        {
          "number": "05",
          "title": "Registre a próxima decisão após cada reunião",
          "text": "Registre o que foi observado, quais perguntas foram respondidas, o que permaneceu incerto e se o fornecedor deve avançar para amostra, revisão de cotação, outra verificação, pedido de teste ou nenhuma ação adicional."
        }
      ],
      "limitsTitle": "O que o suporte a viagens a fábricas não fornece",
      "limits": [
        {
          "title": "Não é conselho de imigração ou viagem",
          "text": "A Sourcing Ally não pode decidir elegibilidade para entrada, requisitos de visto ou trânsito, obrigações de registro, escolhas de segurança, seguro ou obrigações específicas do viajante. Estes devem ser verificados pelo viajante junto aos canais oficiais e profissionais apropriados."
        },
        {
          "title": "Uma visita é uma observação, não uma garantia do fornecedor",
          "text": "Uma reunião ou observação na fábrica pode documentar o que foi visto e discutido naquele dia. Não pode garantir capacidade futura, qualidade do produto, entrega, situação comercial ou ações de outras partes."
        },
        {
          "title": "Suporte de viagem independente exige escopo acordado",
          "text": "Quando um cliente encomenda diretamente de uma fábrica em vez de passar pela Sourcing Ally, o suporte de viagem independente a fábricas é cotado em US$150 por dia. Itinerário, localizações, necessidades linguísticas, tarefas, despesas e entregáveis devem ser acordados antes da viagem."
        }
      ],
      "prepareTitle": "Prepare isto antes de uma viagem de sourcing à China",
      "prepare": [
        "O propósito e a pergunta de decisão para cada reunião com fornecedor ou fábrica",
        "Endereços confirmados, contatos, horários de reunião, participantes e tempo de deslocamento realista entre locais",
        "O resumo do produto, amostra, desenhos, fotos, medidas e pontos de embalagem a serem discutidos",
        "Seus arranjos de entrada, trânsito, acomodação, transportadora, pagamento, conexão e deslocamento local verificados de forma independente",
        "Uma agenda de visita e um formato simples de registro para observações, fotos, questões em aberto e próximas ações"
      ],
      "routesTitle": "Planeje a viagem no contexto",
      "routes": [
        {
          "href": "/factory-visits/",
          "title": "Factory visit planning",
          "text": "Use o guia dedicado para decidir o que uma visita à fábrica deve observar e o que ela não pode comprovar.",
          "label": "Planejar uma visita à fábrica"
        },
        {
          "href": "/china-route/",
          "title": "China Route Map",
          "text": "Explore locais de sourcing e transforme endereços de fábricas em um roteiro regional mais realista.",
          "label": "Explorar o mapa de rotas"
        },
        {
          "href": "/fees-and-scope/",
          "title": "Fees and scope",
          "text": "Revise a taxa confirmada de US$150 por dia para suporte de viagem independente a fábricas e o escopo que deve ser acordado antes da viagem.",
          "label": "Rever o escopo de viagem"
        }
      ],
      "ctaTitle": "Planeje a viagem em torno da pergunta que você precisa que a China responda.",
      "ctaText": "Um resumo sucinto do projeto pode identificar reuniões úteis com fornecedores, contexto do produto, áreas de viagem prováveis, necessidades de apoio linguístico e as decisões a serem registradas após cada visita.",
      "ctaLabel": "Elaborar um resumo de projeto"
    }
  },
  "ru": {
    "shippingReadiness": {
      "metaTitle": "Готовность к отправке заказов из Китая | Sourcing Ally",
      "metaDescription": "Подготовьте китайский заказ к передаче, согласовав товарную позицию, упаковку, коммерческую информацию, условия поставки, сроки и вопросы для экспедитора.",
      "eyebrow": "РУКОВОДСТВО ПО ГОТОВНОСТИ К ОТПРАВКЕ",
      "title": "Перед тем как товар покинет фабрику, уточните вопрос передачи.",
      "lede": "Готовность к отправке — это не только бронирование транспорта. Это момент, когда утверждённый товар, окончательное количество, упаковка, документы, условия поставки, сроки и вопросы по месту назначения должны иметь логичную согласованность.",
      "situationsTitle": "Когда это руководство будет полезно",
      "situations": [
        {
          "title": "Готовая продукция близка к отправке",
          "text": "Вам нужно связать финальную версию продукта, количество, данные по коробкам, статус качества и сроки забора до того, как просить экспедитора организовать передачу."
        },
        {
          "title": "Несколько людей занимаются разными частями",
          "text": "Поставщик, покупатель, экспедитор, импортер, склад или контакт по упаковке могут иметь часть информации. Общая запись о передаче снижает предотвратимую неопределённость."
        },
        {
          "title": "Условие поставки или место назначения неясны",
          "text": "До перемещения груза покупатель должен знать, какое именно место и условие поставки используются, кто отвечает за какие этапы и какие вопросы ещё нужно прояснить с экспедитором или импортером."
        }
      ],
      "evidenceTitle": "Создайте единый удобный документ передачи партии",
      "evidenceIntro": "Полезная запись о передаче не заменяет консультаций по фрахту, таможне, страховке или юридическим вопросам. Она даёт ответственным за эти задачи более ясную отправную точку и показывает, что ещё необходимо подтвердить.",
      "evidence": [
        {
          "number": "01",
          "title": "Зафиксируйте версию товара и количество",
          "text": "Укажите текущую версию продукта, окончательное количество, варианты, этикетки, аксессуары, утверждённую упаковку и любые моменты, которые всё ещё влияют на готовность товара к передаче."
        },
        {
          "number": "02",
          "title": "Сделайте видимыми данные по упаковке и грузу",
          "text": "Запросите окончательное количество мест, размеры коробок, брутто и нетто вес, оттиски/маркировку, информацию о паллетах или способе загрузки там, где это актуально, а также фотографии, если они помогают решить практический вопрос."
        },
        {
          "number": "03",
          "title": "Укажите условие поставки и место",
          "text": "Занесите согласованный торговый термин, указанное место или порт и его версию, если применимо. Не предполагайте, что краткая пометка по условию поставки объясняет все вопросы по оплате, документам, правам собственности, страховке, таможенным обязательствам или требованиям пункта назначения."
        },
        {
          "number": "04",
          "title": "Согласуйте коммерческие и транспортные данные",
          "text": "Коммерческий инвойс, упаковочные данные, описание товара, количества и инструкции по отправке должны относиться к одним и тем же товарам. Несоответствия следует выяснить до выпуска документов или груза."
        },
        {
          "number": "05",
          "title": "Подтвердите открытые вопросы с ответственными сторонами",
          "text": "Выбранный экспедитор и импортер должны подтвердить маршрут, порядок забора, необходимую информацию, требования пункта назначения, варианты страховки и ответственность за таможенное оформление для конкретной отгрузки."
        }
      ],
      "limitsTitle": "Что не решает готовность к отправке",
      "limits": [
        {
          "title": "Торговый термин — это не полное транспортное решение",
          "text": "Торговые термины распределяют отдельные задачи по доставке, расходы и риски, но они не решают все контрактные вопросы, детали оплаты, требования к документам, таможенные обязательства или спорные моменты."
        },
        {
          "title": "Список документов зависит от товара и места назначения",
          "text": "Коммерческие и транспортные документы могут быть стандартными, тогда как сертификаты, этикетки, разрешения на импорт, тестирование, декларации, пошлины и требования к оформлению зависят от конкретного товара и пункта назначения."
        },
        {
          "title": "Готовность — не гарантия доставки",
          "text": "Чёткая запись о передаче может сократить неопределённость, но она не может гарантировать график перевозчика, исход таможенных процедур, выплату по страховке, оформление в пункте назначения, стоимость, отсутствие повреждений в пути или дату доставки."
        }
      ],
      "prepareTitle": "Подготовьте это перед запросом передачи груза",
      "prepare": [
        "Утверждённая ссылка на продукт и упаковку, включая варианты и этикетки",
        "Окончательное количество, число упаковочных мест, размеры коробок и брутто/нетто вес, если они доступны",
        "Согласованный торговый термин, указанное место и стороны, ответственные за организацию транспорта",
        "Коммерческий инвойс и упаковочные данные, соответствующие фактическим товарам",
        "Контактные данные экспедитора и импортёра, а также вопросы по пункту назначения, требующие подтверждения"
      ],
      "routesTitle": "Свяжите отгрузку с решениями, которые предшествуют ей",
      "routes": [
        {
          "href": "/quality-control-plan/",
          "title": "Планирование контроля качества",
          "text": "Соотнесите сроки отгрузки с проверками продукта и упаковки, которые должны быть определены до выпуска товара.",
          "label": "План контроля качества"
        },
        {
          "href": "/services/packaging/",
          "title": "Координация упаковки",
          "text": "Рассматривайте коробки, этикетки, вкладыши, способ упаковки и маркировку как часть передачи товара, а не как доделку.",
          "label": "Узнать об упаковке"
        },
        {
          "href": "/blog/what-freight-forwarder-handles-china-shipment/",
          "title": "Руководство по работе с экспедитором",
          "text": "Используйте руководство в Journal, чтобы подготовить вопросы для экспедитора, не смешивая общую логистическую поддержку с советами, специфичными для пункта назначения.",
          "label": "Прочитать руководство в Journal"
        }
      ],
      "ctaTitle": "Определите вопрос передачи до того, как попросите груз отправить.",
      "ctaText": "Краткое описание проекта может сделать видимыми товар, упаковку, сроки и открытые логистические вопросы до следующего операционного обязательства.",
      "ctaLabel": "Составить описание проекта"
    },
    "chinaBusinessTravel": {
      "metaTitle": "Деловые поездки и планирование визитов на фабрики в Китае | Sourcing Ally",
      "metaDescription": "Спланируйте целенаправленную поездку на фабрику в Китае, увязав цель визита, встречи с поставщиками, маршрут, подтверждающие материалы по продукту, местные практические моменты и последующие решения.",
      "eyebrow": "РУКОВОДСТВО ПО ДЕЛОВЫМ ПОЕЗДКАМ В КИТАЙ",
      "title": "Поездка на фабрику в Китае эффективнее, когда за каждым днём стоит конкретное решение.",
      "lede": "Поездка по поиску поставщиков может сделать разговоры с ними более конкретными, но только если до отъезда заранее подготовлены нужные встречи, вопросы, материалы по продукту, маршрут и план последующих шагов.",
      "situationsTitle": "Когда это руководство пригодится",
      "situations": [
        {
          "title": "Вы хотите встретиться с поставщиками лично",
          "text": "Встреча на фабрике наиболее полезна, когда вы понимаете, почему каждый поставщик включён в маршрут, что нужно наблюдать и какое решение должна помочь принять эта встреча."
        },
        {
          "title": "В вашей поездке несколько городов или фабрик",
          "text": "Шэньчжэнь, Гуанчжоу, Фошань, Дунгуань, Чжуншань, Хуйчжоу, Иу и другие районы закупок требуют реального времени на переезды. Маршрут должен строиться на подтверждённых адресах и приоритетах встреч, а не только на карте."
        },
        {
          "title": "Вам нужна помощь в практической организации визита",
          "text": "Языковая поддержка, адреса фабрик, время встреч, контекст продукта и запись открытых вопросов помогут сделать день более продуктивным, не превращая наблюдение в гарантию."
        }
      ],
      "evidenceTitle": "Планируйте поездку на основании доказательств и последующих шагов",
      "evidenceIntro": "Цель — не посетить как можно больше мест, а использовать ограниченное время в поездке, чтобы ответить на ключевые вопросы, важные для выбора поставщика, образцов, производства, качества, упаковки или следующего коммерческого решения.",
      "evidence": [
        {
          "number": "01",
          "title": "Определите решение, стоящее за каждым визитом",
          "text": "Укажите, касается ли встреча идентификации поставщика, возможностей продукта, проверки образца, материалов, производственного процесса, упаковки, вопросов качества или конкретной нерешённой проблемы."
        },
        {
          "number": "02",
          "title": "Уточните точный план встречи",
          "text": "Перед построением маршрута подтвердите адрес фабрики, контакт, дату, длительность встречи, список участников, языковые потребности, версию продукта и доступность нужных людей и участков производства."
        },
        {
          "number": "03",
          "title": "Едьте с подходящими подтверждениями по продукту",
          "text": "Возьмите с собой или заранее поделитесь актуальным брифом, образцом, чертежами, фотографиями, заметками о материалах, измерениями, пунктами по упаковке и краткой повесткой, чтобы визит относился к той же версии продукта, что и письменное обсуждение."
        },
        {
          "number": "04",
          "title": "Проверьте детали поездки и въезда самостоятельно",
          "text": "Требования к въезду, транзиту, проживанию, правила перевозчика, регистрация, доступ к платежам, связь и условия местных поездок могут меняться. Заранее подтвердите свои требования через соответствующие официальные источники, перевозчика, место проживания и компетентное посольство или консульство."
        },
        {
          "number": "05",
          "title": "Фиксируйте следующее решение после каждой встречи",
          "text": "Записывайте, что было замечено, какие вопросы получили ответ, что осталось неясным и следует ли от поставщика ожидать перехода к образцу, пересмотру коммерческого предложения, ещё одной проверке, пробному заказу или прекращению дальнейших шагов."
        }
      ],
      "limitsTitle": "Чего не включает поддержка при поездке на фабрику",
      "limits": [
        {
          "title": "Это не иммиграционная или туристическая консультация",
          "text": "Sourcing Ally не принимает решения о праве на въезд, требованиях по визам или транзиту, обязанностях по регистрации, вопросах безопасности, страховании или индивидуальных обязательствах путешественника. Эти моменты должен проверять сам путешественник через соответствующие официальные и профессиональные каналы."
        },
        {
          "title": "Визит — это наблюдение, а не гарантия от поставщика",
          "text": "Встреча или осмотр на фабрике может зафиксировать то, что увидено и обсуждено в конкретный день. Это не может гарантировать будущую производственную способность, качество продукции, доставку, статус бизнеса или действия третьих лиц."
        },
        {
          "title": "Для независимой поддержки поездки требуется согласованный объём работ",
          "text": "Если клиент заказывает напрямую у фабрики, а не через Sourcing Ally, независимая поддержка при поездке на фабрику оценивается в 150 долларов США в день. Маршрут, локации, языковые потребности, задачи, расходы и результативность работ должны быть согласованы до поездки."
        }
      ],
      "prepareTitle": "Подготовьте это перед поездкой по закупкам в Китае",
      "prepare": [
        "Цель и вопрос-решение для каждой встречи с поставщиком или на фабрике",
        "Подтверждённые адреса, контакты, время встреч, участники и реальное время в пути между точками",
        "Бриф по продукту, образец, чертежи, фотографии, измерения и моменты по упаковке для обсуждения",
        "Самостоятельно подтверждённые детали по въезду, транзиту, проживанию, перевозчику, платежам, связям и местным перемещениям",
        "Повестка визита и простой формат записи для наблюдений, фотографий, открытых вопросов и последующих действий"
      ],
      "routesTitle": "Планируйте поездку с учётом контекста",
      "routes": [
        {
          "href": "/factory-visits/",
          "title": "Планирование визита на фабрику",
          "text": "Используйте специальное руководство, чтобы определить, что следует наблюдать при визите на фабрику и что визит не может подтвердить.",
          "label": "Спланировать визит на фабрику"
        },
        {
          "href": "/china-route/",
          "title": "Карта маршрутов по Китаю",
          "text": "Изучите места закупок и превратите адреса фабрик в более реалистичный региональный маршрут.",
          "label": "Изучить карту маршрута"
        },
        {
          "href": "/fees-and-scope/",
          "title": "Тарифы и объём услуг",
          "text": "Ознакомьтесь с подтверждённой ставкой 150 долларов США в день для независимой поддержки поездки на фабрику и с объёмом услуг, который следует согласовать до поездки.",
          "label": "Ознакомиться с объёмом поддержки поездки"
        }
      ],
      "ctaTitle": "Планируйте поездку вокруг вопроса, на который должен ответить Китай.",
      "ctaText": "Краткий проектный бриф поможет определить полезные встречи с поставщиками, контекст продукта, вероятные районы поездок, потребности в языковой поддержке и решения, которые следует зафиксировать после каждого визита.",
      "ctaLabel": "Составить проектный бриф"
    }
  },
  "tr": {
    "shippingReadiness": {
      "metaTitle": "Çin Siparişleri İçin Sevkiyata Hazırlık | Sourcing Ally",
      "metaDescription": "Ürün referansı, ambalaj, ticari bilgiler, teslim koşulları, zamanlama ve nakliyeci sorularını birbirine bağlayarak bir Çin siparişini devre teslimine hazırlayın.",
      "eyebrow": "SEVKİYATA HAZIRLIK REHBERİ",
      "title": "Malları fabrikadan ayrılmadan önce teslim devri sorusunu netleştirin.",
      "lede": "Sevkiyata hazırlık yalnızca taşıma ayırtmak değildir. Onaylanmış ürün, tamamlanan miktar, ambalaj, belgeler, teslim koşulları, zamanlama ve varış yeri sorularının birlikte anlamlı olması gereken noktadır. Sourcing Ally, alıcılara kararlaştırılmış tedarik, numuneler, fabrika kontrolleri, kalite kontrol, ambalaj, çeviri ve seyahat desteği görevlerinin koordinasyonunda yardımcı olur. Şirket tehlikeli veya askeri nitelikli ürünlerle çalışmaz.",
      "situationsTitle": "Bu rehber ne zaman yardımcı olur",
      "situations": [
        {
          "title": "Tamamlanmış mallar yaklaşıyor",
          "text": "Bir nakliyeciye teslim düzenlemesi sorulmadan önce son ürün, miktar, karton bilgileri, kalite durumu ve toplama zamanını birbirine bağlamanız gerekir."
        },
        {
          "title": "Birden fazla kişi farklı parçaları yönetiyor",
          "text": "Tedarikçi, alıcı, nakliyeci, ithalatçı, depo veya ambalaj sorumlusu her biri bilginin bir kısmına sahip olabilir. Paylaşılan bir teslim kayıtı önlenebilir belirsizlikleri azaltır."
        },
        {
          "title": "Teslim koşulu veya varış yeri belirsiz",
          "text": "Kargo hareket etmeden önce alıcı hangi isimlendirilmiş yerin ve teslim koşulunun kullanılacağını, kimin hangi adımı düzenleyeceğini ve hangi soruların hâlâ nakliyeci veya ithalatçıdan cevap gerektirdiğini bilmelidir."
        }
      ],
      "evidenceTitle": "Kullanılabilir bir sevkiyat teslim kaydı oluşturun",
      "evidenceIntro": "Kullanışlı bir teslim kaydı navlun, gümrük, sigorta veya hukuki tavsiyenin yerine geçmez. Bu kayıt, bu görevlerden sorumlu kişilere daha net bir başlangıç noktası verir ve hangi konuların hâlâ teyit edilmesi gerektiğini ortaya koyar. Bu rehber eğitim amaçlıdır ve alıcının nakliyecisinin, ithalatçısının, gümrük müşavirinin, sigortacısının veya ilgili profesyonelin tavsiyesinin yerine geçmez. Hiçbir garanti, yasal, gümrük, vize, uygunluk, sigorta, rota, tasfiye, navlun, teslimat veya kusursuz sonuç vaat edilmez. Şirket tehlikeli veya askeri nitelikli ürünlerle çalışmaz.",
      "evidence": [
        {
          "number": "01",
          "title": "Ürün ve miktar referansını sabitleyin",
          "text": "Mevcut ürün versiyonunu, tamamlanmış miktarı, varyasyonları, etiketleri, aksesuarları, onaylı ambalajı ve malların teslim için hazır olup olmadığını hâlen etkileyen noktaları belirtin."
        },
        {
          "number": "02",
          "title": "Ambalaj ve kargo bilgisini görünür kılın",
          "text": "Nihai paket sayısını, karton ölçülerini, brüt ve net ağırlığı, nakliye işaretlerini, gerekliyse palet veya yükleme bilgilerini ve pratik bir sorunu çözdüklerinde fotoğrafları talep edin."
        },
        {
          "number": "03",
          "title": "Teslim koşulunu ve yeri belirtin",
          "text": "Kararlaştırılan ticaret terimini, isimlendirilmiş yeri veya limanı ve varsa versiyonunu kaydedin. Kısa bir teslim-terimi etiketi her ödeme, belge, mülkiyet, sigorta, gümrük veya varış yeri yükümlülüğünü açıklamaz diye varsaymayın."
        },
        {
          "number": "04",
          "title": "Ticari ve taşıma bilgisini uyumlu hâle getirin",
          "text": "Ticari fatura, paketleme detayları, ürün tanımı, miktarlar ve sevkiyat talimatları aynı mallara atıfta bulunmalıdır. Tutarsızlıklar belgeler veya kargo serbest bırakılmadan önce netleştirilmelidir."
        },
        {
          "number": "05",
          "title": "Açık soruları sorumlu taraflarla teyit edin",
          "text": "Seçilen bir nakliyeci ve ithalatçı, gerçek sevkiyat için rota, toplama, gerekli bilgiler, varış yeri gereksinimleri, sigorta tercihleri ve tasfiye sorumluluklarını teyit etmelidir."
        }
      ],
      "limitsTitle": "Sevkiyata hazırlığın karar vermediği konular",
      "limits": [
        {
          "title": "Bir ticaret terimi eksiksiz bir sevkiyat planı değildir",
          "text": "Ticaret terimleri belirli teslim görevlerini, maliyetleri ve riskleri paylaştırır, ancak her sözleşme maddesini, ödeme detayını, belge gerekliliğini, gümrük yükümlülüğünü veya uyuşmazlık konusunu çözmez."
        },
        {
          "title": "Belge listesi ürüne ve varış yerine göre değişir",
          "text": "Ticari ve taşıma belgeleri yaygın olabilir; sertifikalar, etiketler, ithalat izinleri, testler, beyanlar, vergiler ve tasfiye gereksinimleri ise mal ve varış yerine göre değişir."
        },
        {
          "title": "Hazırlık, teslimat garantisi değildir",
          "text": "Açık bir teslim kayıtı belirsizliği azaltabilir, ancak bir taşıyıcı programını, gümrük sonucunu, sigorta talebini, varış yeri tasfiyesini, maliyeti, hasarsız taşımayı veya teslim tarihini garanti edemez."
        }
      ],
      "prepareTitle": "Bir sevkiyat teslimi istemeden önce bunu hazırlayın",
      "prepare": [
        "Onaylanmış ürün ve ambalaj referansı; varyasyonlar ve etiketler dahil",
        "Tamamlanan miktar, paket sayısı, karton ölçüleri ve varsa brüt ile net ağırlık",
        "Kararlaştırılmış teslim koşulu, isimlendirilmiş yer ve taşımayı düzenlemekten sorumlu taraflar",
        "Gerçek mallarla uyuşan ticari fatura ve paketleme bilgileri",
        "Nakliyeci ve ithalatçı iletişim bilgileri ile teyit edilmesi gereken varış yeri soruları"
      ],
      "routesTitle": "Sevkiyatı öncesindeki kararlarla bağlayın",
      "routes": [
        {
          "href": "/quality-control-plan/",
          "title": "Kalite kontrol planlaması",
          "text": "Mallara serbest bırakılmadan önce tanımlanması gereken ürün ve ambalaj kontrolleri ile sevkiyat zamanlamasını bağlayın.",
          "label": "Kalite kontrolünü planlayın"
        },
        {
          "href": "/services/packaging/",
          "title": "Ambalaj koordinasyonu",
          "text": "Kartonlar, etiketler, ekler, paketleme yöntemi ve nakliye işaretlerini ürün tesliminin bir parçası olarak ele alın; sonradan düşünülmemeli.",
          "label": "Ambalajı inceleyin"
        },
        {
          "href": "/blog/what-freight-forwarder-handles-china-shipment/",
          "title": "Nakliyeci rehberi",
          "text": "Journal rehberini kullanarak bir nakliyeci için soruları hazırlayın; lojistik desteği varış yerine özgü tavsiye ile karıştırmayın.",
          "label": "Journal rehberini okuyun"
        }
      ],
      "ctaTitle": "Kargoyu hareket ettirmeden önce teslim devri sorusunu tanımlayın.",
      "ctaText": "Kısa bir proje özeti, bir sonraki operasyonel taahhütten önce ürün, ambalaj, zamanlama ve açık lojistik sorularını görünür kılabilir.",
      "ctaLabel": "Bir proje özeti oluşturun"
    },
    "chinaBusinessTravel": {
      "metaTitle": "Çin İş Seyahati ve Fabrika Ziyareti Planlaması | Sourcing Ally",
      "metaDescription": "Ziyaret amacını, tedarikçi görüşmelerini, seyahat rotasını, ürün kanıtlarını, yerel uygulamaları ve takip kararlarını birbirine bağlayarak amaçlı bir Çin fabrika gezisi planlayın.",
      "eyebrow": "ÇİN İŞ SEYAHATİ REHBERİ",
      "title": "Her günün arkasında bir karar olduğunda Çin fabrika gezisi daha güçlüdür.",
      "lede": "Bir tedarik gezisi tedarikçi görüşmelerini somutlaştırabilir, ancak uygun toplantılar, sorular, ürün referansları, rota ve takip planı seyahat günü başlamadan önce hazırlanmışsa.",
      "situationsTitle": "Bu rehber ne zaman işe yarar",
      "situations": [
        {
          "title": "Tedarikçilerle şahsen görüşmek istiyorsunuz",
          "text": "Her tedarikçinin rotada olma nedenini, nelerin gözlemlenmesi gerektiğini ve görüşmenin hangi karara yardımcı olması gerektiğini bildiğinizde fabrika görüşmesi en faydalı olur."
        },
        {
          "title": "Seyahatiniz birden fazla şehir veya fabrika içeriyor",
          "text": "Shenzhen, Guangzhou, Foshan, Dongguan, Zhongshan, Huizhou, Yiwu ve diğer tedarik bölgeleri ciddi seyahat süresi gerektirebilir. Rota sadece bir haritaya değil, teyit edilmiş konumlara ve toplantı önceliklerine dayanmalıdır."
        },
        {
          "title": "Ziyareti pratik hale getirmek için yardıma ihtiyacınız var",
          "text": "Dil desteği, fabrika adresleri, toplantı zamanlaması, ürün bağlamı ve açık soruların kaydı, gözlemi bir garantiye dönüştürmeden günü daha verimli kılabilir."
        }
      ],
      "evidenceTitle": "Geziyi kanıtlara ve takibe göre planlayın",
      "evidenceIntro": "Amaç mümkün olduğunca çok yer gezmek değil. Sınırlı seyahat süresini tedarikçi seçimi, numuneler, üretim, kalite, ambalaj veya bir sonraki ticari karar için önemli olan soruları yanıtlamak üzere kullanmaktır.",
      "evidence": [
        {
          "number": "01",
          "title": "Her ziyaretin arkasındaki kararı tanımlayın",
          "text": "Görüşmenin tedarikçi kimliği, ürün yeteneği, numune incelemesi, malzemeler, üretim akışı, ambalaj, kalite soruları veya belirli çözülmemiş bir konu hakkında olup olmadığını belirtin."
        },
        {
          "number": "02",
          "title": "Kesin toplantı planını teyit edin",
          "text": "Rotayı belirlemeden önce fabrika adresini, iletişim bilgisini, tarihi, toplantı süresini, katılımcıları, dil ihtiyaçlarını, ürün versiyonunu ve ilgili kişilerin/alanların müsait olup olmadığını teyit edin."
        },
        {
          "number": "03",
          "title": "Doğru ürün kanıtıyla seyahat edin",
          "text": "Ziyaretin yazılı tartışmayla aynı ürün versiyonuna atıfta bulunması için mevcut brief, numune, çizimler, fotoğraflar, malzeme notları, ölçüler, ambalaj noktaları ve kısa bir gündemi getirin veya paylaşın."
        },
        {
          "number": "04",
          "title": "Seyahat ve giriş detaylarını bağımsız olarak doğrulayın",
          "text": "Giriş, transit, konaklama, taşıyıcı kuralları, kayıt, ödeme erişimi, telekomünikasyon ve yerel seyahat koşulları değişebilir. Kendi gereksinimlerinizi ilgili resmi kaynaklar, taşıyıcınız, konaklamanız ve ilgili elçilik veya konsolosluk aracılığıyla ayrıntılı olarak teyit edin."
        },
        {
          "number": "05",
          "title": "Her görüşmeden sonra bir sonraki kararı kaydedin",
          "text": "Gözlemlenenleri, hangi soruların yanıtlandığını, neyin belirsiz kaldığını ve tedarikçinin numune, teklif revizyonu, başka bir kontrol, deneme siparişi veya ileri adım gerektirip gerektirmediğini kaydedin."
        }
      ],
      "limitsTitle": "Fabrika seyahat desteğinin sağlamadıkları",
      "limits": [
        {
          "title": "Bu bir göçmenlik veya seyahat tavsiyesi değildir",
          "text": "Sourcing Ally giriş uygunluğunu, vize veya transit gereksinimlerini, kayıt zorunluluklarını, güvenlik tercihlerini, sigortayı veya yolcuya özel yükümlülükleri belirleyemez. Bunlar yolcu tarafından uygun resmi ve profesyonel kanallar aracılığıyla doğrulanmalıdır."
        },
        {
          "title": "Ziyaret bir gözlemdir, tedarikçi garantisi değildir",
          "text": "Bir görüşme veya fabrika gözlemi, o gün görülenleri ve konuşulanları belgeleyebilir. Gelecekteki kapasiteyi, ürün kalitesini, teslimatı, işletme durumunu veya diğer tarafların eylemlerini garanti edemez."
        },
        {
          "title": "Bağımsız seyahat desteği için mutabık kalınmış bir kapsam gerekir",
          "text": "Bir müşteri Sourcing Ally yerine doğrudan bir fabrikadan sipariş verdiğinde, bağımsız fabrika seyahat desteği günlük 150 ABD Doları üzerinden fiyatlandırılır. Güzergah, konumlar, dil ihtiyaçları, görevler, masraflar ve teslimatlar seyahat öncesi mutabık kalınmalıdır."
        }
      ],
      "prepareTitle": "Çin tedarik gezisi öncesinde hazırlayın",
      "prepare": [
        "Her tedarikçi veya fabrika görüşmesinin amacı ve karar sorusu",
        "Teyit edilmiş adresler, iletişimler, toplantı saatleri, katılımcılar ve konumlar arasındaki gerçekçi seyahat süreleri",
        "Görüşülecek ürün briefi, numune, çizimler, fotoğraflar, ölçüler ve ambalaj noktaları",
        "Bağımsız olarak doğruladığınız giriş, transit, konaklama, taşıyıcı, ödeme, bağlantı ve yerel seyahat düzenlemeleriniz",
        "Görüşme gündemi ve gözlemler, fotoğraflar, açık sorular ile sonraki eylemler için basit bir kayıt formatı"
      ],
      "routesTitle": "Seyahati bağlam içinde planlayın",
      "routes": [
        {
          "href": "/factory-visits/",
          "title": "Fabrika ziyareti planlaması",
          "text": "Fabrika ziyaretinin neleri gözlemlemesi gerektiğine ve neleri kanıtlayamayacağına karar vermek için ayrıntılı rehberi kullanın.",
          "label": "Bir fabrika ziyareti planlayın"
        },
        {
          "href": "/china-route/",
          "title": "Çin Rota Haritası",
          "text": "Tedarik bölgelerini keşfedin ve fabrika adreslerini daha gerçekçi bir bölgesel rotaya dönüştürün.",
          "label": "Rota haritasını keşfedin"
        },
        {
          "href": "/fees-and-scope/",
          "title": "Ücretler ve kapsam",
          "text": "Bağımsız fabrika seyahat desteği için teyit edilmiş günlük 150 ABD Doları ücretini ve seyahat öncesi üzerinde anlaşılması gereken kapsamı gözden geçirin.",
          "label": "Seyahat kapsamını gözden geçirin"
        }
      ],
      "ctaTitle": "Seyahati Çin'den yanıt beklediğiniz soruya göre planlayın.",
      "ctaText": "Kısa bir proje briefi, yararlı tedarikçi görüşmelerini, ürün bağlamını, muhtemel seyahat bölgelerini, dil desteği ihtiyaçlarını ve her ziyaretten sonra kaydedilmesi gereken kararları belirleyebilir.",
      "ctaLabel": "Bir proje briefi oluşturun"
    }
  },
  "fr": {
    "shippingReadiness": {
      "metaTitle": "Prêt à l'expédition pour commandes depuis la Chine | Sourcing Ally",
      "metaDescription": "Préparez une commande depuis la Chine pour la remise en rassemblant la référence produit, l'emballage, les informations commerciales, les conditions de livraison, le calendrier et les questions pour le transitaire. Sourcing Ally (Shenzhen) aide les acheteurs à coordonner le sourcing convenu, les échantillons, les contrôles d'usine, le contrôle qualité, l'emballage, la traduction et l'assistance voyage ; nous ne traitons pas les marchandises dangereuses ni les produits à usage militaire.",
      "eyebrow": "GUIDE DE PRÉPARATION À L'EXPÉDITION",
      "title": "Avant que les marchandises ne quittent l'usine, clarifiez la question de la remise.",
      "lede": "La préparation à l'expédition ne se limite pas à réserver le transport. C'est le moment où la version approuvée du produit, la quantité finale, l'emballage, les documents, les conditions de livraison, le calendrier et les questions liées à la destination doivent être cohérents entre eux.",
      "situationsTitle": "Quand ce guide est utile",
      "situations": [
        {
          "title": "Les produits finis sont presque prêts",
          "text": "Vous devez relier la version finale du produit, la quantité, les informations sur les cartons, l'état qualité et le calendrier de collecte avant de demander à un transitaire d'organiser la remise."
        },
        {
          "title": "Plusieurs intervenants gèrent différentes parties",
          "text": "Le fournisseur, l'acheteur, le transitaire, l'importateur, l'entrepôt ou le contact emballage peuvent chacun détenir une partie des informations. Un enregistrement de remise partagé réduit les incertitudes évitables."
        },
        {
          "title": "La condition de livraison ou la destination n'est pas claire",
          "text": "Avant que le fret ne soit déplacé, l'acheteur doit savoir quel lieu nommé et quelle condition de livraison sont utilisés, qui organise chaque étape et quelles questions nécessitent encore une réponse du transitaire ou de l'importateur."
        }
      ],
      "evidenceTitle": "Créez un seul enregistrement de remise d'expédition exploitable",
      "evidenceIntro": "Un enregistrement de remise utile ne remplace pas les conseils en matière de fret, douane, assurance ou juridique. Il fournit aux responsables de ces tâches un point de départ plus clair et met en évidence ce qui reste à confirmer. Ce guide est à titre éducatif et ne se substitue pas aux conseils du transitaire, de l'importateur, du courtier en douane, de l'assureur ou d'un autre professionnel compétent.",
      "evidence": [
        {
          "number": "01",
          "title": "Fixez la référence produit et la quantité",
          "text": "Indiquez la version actuelle du produit, la quantité finale, les variantes, les étiquettes, les accessoires, l'emballage approuvé et tout élément qui influence encore la disponibilité des marchandises pour la remise."
        },
        {
          "number": "02",
          "title": "Rendez visibles les informations d'emballage et de cargaison",
          "text": "Demandez le nombre final de colis, les dimensions des cartons, le poids brut et net, les marques d'expédition, les informations sur les palettes ou le chargement si pertinent, et des photos lorsque cela aide à résoudre une question pratique."
        },
        {
          "number": "03",
          "title": "Indiquez la condition de livraison et le lieu",
          "text": "Consignez le terme commercial (Incoterm) convenu, le lieu ou le port nommé, et la version lorsque cela s'applique. N'assumez pas qu'un simple libellé d'incoterm explique toutes les obligations relatives aux paiements, documents, transfert de propriété, assurance, douane ou destination."
        },
        {
          "number": "04",
          "title": "Alignez les informations commerciales et de transport",
          "text": "La facture commerciale, les détails d'emballage, la description du produit, les quantités et les instructions d'expédition doivent concerner les mêmes marchandises. Les incohérences doivent être clarifiées avant la remise des documents ou du fret."
        },
        {
          "number": "05",
          "title": "Confirmez les questions en suspens avec les parties responsables",
          "text": "Le transitaire choisi et l'importateur doivent confirmer l'itinéraire, la collecte, les informations requises, les exigences de la destination, les choix d'assurance et les responsabilités de dédouanement pour l'expédition concernée."
        }
      ],
      "limitsTitle": "Ce que la préparation à l'expédition ne décide pas",
      "limits": [
        {
          "title": "Un terme commercial n'est pas un plan d'expédition complet",
          "text": "Les termes commerciaux répartissent certaines tâches de livraison, coûts et risques, mais ils ne règlent pas tous les aspects contractuels, détails de paiement, exigences documentaires, obligations douanières ou questions de litige."
        },
        {
          "title": "La liste des documents varie selon le produit et la destination",
          "text": "Les documents commerciaux et de transport peuvent être courants, tandis que les certificats, étiquettes, autorisations d'importation, tests, déclarations, droits et exigences de dédouanement dépendent des marchandises et de la destination."
        },
        {
          "title": "La préparation n'est pas une garantie de livraison",
          "text": "Un enregistrement de remise clair peut réduire l'incertitude, mais il ne peut pas garantir le calendrier d'un transporteur, l'issue des formalités douanières, une prise en charge d'assurance, le dédouanement à destination, le coût, l'absence de dommages pendant le transport ou la date de livraison."
        }
      ],
      "prepareTitle": "Préparez ceci avant de demander une remise d'expédition",
      "prepare": [
        "La référence produit et emballage approuvée, y compris les variantes et les étiquettes",
        "La quantité finale, le nombre de colis, les dimensions des cartons et le poids brut et net lorsque disponibles",
        "La condition de livraison convenue, le lieu nommé et les parties responsables de l'organisation du transport",
        "La facture commerciale et les informations d'emballage correspondant aux marchandises réelles",
        "Les coordonnées du transitaire et de l'importateur ainsi que les questions relatives à la destination nécessitant confirmation"
      ],
      "routesTitle": "Reliez l'expédition aux décisions qui la précèdent",
      "routes": [
        {
          "href": "/quality-control-plan/",
          "title": "Planification du contrôle qualité",
          "text": "Alignez le calendrier d'expédition avec les contrôles produit et emballage qui doivent être définis avant la libération des marchandises.",
          "label": "Planifier le contrôle qualité"
        },
        {
          "href": "/services/packaging/",
          "title": "Coordination de l'emballage",
          "text": "Considérez les cartons, étiquettes, inserts, méthode d'emballage et marques d'expédition comme faisant partie de la remise du produit et non comme un ajout de dernière minute.",
          "label": "Explorer l'emballage"
        },
        {
          "href": "/blog/what-freight-forwarder-handles-china-shipment/",
          "title": "Guide du transitaire",
          "text": "Utilisez le guide Journal pour préparer les questions à poser à un transitaire sans confondre le support logistique avec des conseils spécifiques à une destination.",
          "label": "Lire le guide Journal"
        }
      ],
      "ctaTitle": "Définissez la question de remise avant de demander le déplacement du fret.",
      "ctaText": "Un bref cahier des charges de projet peut rendre visibles le produit, l'emballage, le calendrier et les questions logistiques en suspens avant le prochain engagement opérationnel.",
      "ctaLabel": "Rédiger un cahier des charges"
    },
    "chinaBusinessTravel": {
      "metaTitle": "Planification de voyages d'affaires et de visites d'usine en Chine | Sourcing Ally",
      "metaDescription": "Planifiez un voyage d'usine en Chine avec un objectif précis en reliant la question de la visite, les rendez‑vous fournisseurs, l'itinéraire, les éléments probants du produit, les aspects pratiques locaux et les décisions de suivi.",
      "eyebrow": "GUIDE DES VOYAGES D'AFFAIRES EN CHINE",
      "title": "Un voyage en usine en Chine est plus efficace lorsque chaque journée a une décision claire derrière elle.",
      "lede": "Un voyage d'approvisionnement peut rendre une conversation avec un fournisseur plus concrète, mais seulement si les bons rendez‑vous, questions, références produit, itinéraire et plan de suivi sont préparés avant le départ.",
      "situationsTitle": "Quand ce guide est utile",
      "situations": [
        {
          "title": "Vous souhaitez rencontrer les fournisseurs en personne",
          "text": "Une réunion d'usine est la plus utile lorsque vous savez pourquoi chaque fournisseur figure sur l'itinéraire, ce qu'il faut observer et quelle décision la rencontre doit vous aider à prendre."
        },
        {
          "title": "Votre voyage comprend plusieurs villes ou usines",
          "text": "Shenzhen, Guangzhou, Foshan, Dongguan, Zhongshan, Huizhou, Yiwu et d'autres zones d'approvisionnement impliquent des temps de trajet réels. Un itinéraire doit se fonder sur des lieux confirmés et des priorités de rendez‑vous, pas seulement sur une carte."
        },
        {
          "title": "Vous avez besoin d'aide pour rendre la visite pratique",
          "text": "L'assistance linguistique, les adresses d'usine, la planification des réunions, le contexte produit et un enregistrement des questions en suspens peuvent rendre la journée plus efficace sans transformer une observation en garantie."
        }
      ],
      "evidenceTitle": "Organisez le voyage autour des éléments probants et du suivi",
      "evidenceIntro": "L'objectif n'est pas de visiter le plus d'endroits possible. Il s'agit d'utiliser un temps de déplacement limité pour répondre aux questions essentielles à la sélection des fournisseurs, aux échantillons, à la production, à la qualité, à l'emballage ou à la prochaine décision commerciale.",
      "evidence": [
        {
          "number": "01",
          "title": "Définissez la décision visée par chaque visite",
          "text": "Indiquez si une réunion porte sur l'identité du fournisseur, les capacités produit, l'examen d'échantillons, les matériaux, le flux de production, l'emballage, des questions de qualité ou un problème non résolu spécifique."
        },
        {
          "number": "02",
          "title": "Confirmez le plan de réunion exact",
          "text": "Avant d'établir l'itinéraire, confirmez l'adresse de l'usine, le contact, la date, la durée de la réunion, les participants, les besoins linguistiques, la version du produit et la disponibilité des personnes et zones concernées."
        },
        {
          "number": "03",
          "title": "Voyagez avec les bons éléments probants du produit",
          "text": "Apportez ou partagez le brief actuel, l'échantillon, les dessins, les photos, les notes sur les matériaux, les mesures, les points d'emballage et un court ordre du jour afin que la visite se réfère à la même version du produit que la discussion écrite."
        },
        {
          "number": "04",
          "title": "Vérifiez de manière indépendante les modalités de voyage et d'entrée",
          "text": "Les conditions d'entrée, de transit, d'hébergement, les règles des transporteurs, l'enregistrement, l'accès aux paiements, les télécommunications et les conditions locales de déplacement peuvent évoluer. Confirmez vos propres exigences auprès des sources officielles concernées, de votre transporteur, de votre hébergement et de l'ambassade ou du consulat compétent avant le départ."
        },
        {
          "number": "05",
          "title": "Consignez la décision suivante après chaque réunion",
          "text": "Consignez ce qui a été observé, les questions traitées, ce qui reste incertain et si le fournisseur doit passer à l'échantillon, une révision du devis, une autre vérification, une commande d'essai ou aucun suivi."
        }
      ],
      "limitsTitle": "Ce que l'assistance aux déplacements en usine ne fournit pas",
      "limits": [
        {
          "title": "Ce n'est pas un conseil en immigration ou en voyage",
          "text": "Sourcing Ally ne peut pas décider de l'admissibilité à l'entrée, des exigences de visa ou de transit, des formalités d'enregistrement, des choix de sécurité, de l'assurance ou des obligations spécifiques au voyageur. Celles-ci doivent être vérifiées par le voyageur auprès des autorités et professionnels compétents."
        },
        {
          "title": "Une visite est une observation, pas une garantie du fournisseur",
          "text": "Une réunion ou une observation d'usine peut documenter ce qui a été vu et discuté ce jour‑là. Elle ne peut garantir ni la capacité future, ni la qualité du produit, ni la livraison, ni la situation commerciale, ni les actions d'autres parties."
        },
        {
          "title": "L'assistance de voyage indépendante nécessite un périmètre convenu",
          "text": "Lorsque le client commande directement auprès d'une usine plutôt que par l'intermédiaire de Sourcing Ally, l'assistance de voyage indépendante en usine est facturée US$150 par jour. L'itinéraire, les lieux, les besoins linguistiques, les tâches, les dépenses et les livrables doivent être convenus avant le déplacement."
        }
      ],
      "prepareTitle": "Préparez ceci avant un voyage d'approvisionnement en Chine",
      "prepare": [
        "L'objet et la question décisionnelle pour chaque rendez‑vous avec un fournisseur ou une usine",
        "Adresses, contacts, horaires de réunion, participants confirmés et temps de trajet réaliste entre les lieux",
        "Le brief produit, l'échantillon, les dessins, les photos, les mesures et les points d'emballage à discuter",
        "Vos modalités d'entrée, de transit, d'hébergement, de transporteur, de paiement, de connexion et de déplacement local vérifiées de manière indépendante",
        "Un ordre du jour de visite et un format simple de compte rendu pour les observations, photos, questions ouvertes et actions suivantes"
      ],
      "routesTitle": "Planifiez le voyage dans son contexte",
      "routes": [
        {
          "href": "/factory-visits/",
          "title": "Planification de la visite d'usine",
          "text": "Utilisez le guide dédié pour décider ce qu'une visite d'usine doit observer et ce qu'elle ne peut pas établir.",
          "label": "Planifier une visite d'usine"
        },
        {
          "href": "/china-route/",
          "title": "Carte des itinéraires en Chine",
          "text": "Explorez les zones d'approvisionnement et transformez les adresses d'usines en un itinéraire régional plus réaliste.",
          "label": "Explorer la carte des itinéraires"
        },
        {
          "href": "/fees-and-scope/",
          "title": "Tarifs et périmètre",
          "text": "Consultez le tarif confirmé de US$150 par jour pour l'assistance indépendante en déplacement en usine et le périmètre qui doit être convenu avant le voyage.",
          "label": "Consulter le périmètre de voyage"
        }
      ],
      "ctaTitle": "Organisez le voyage autour de la question à laquelle vous voulez que la Chine réponde.",
      "ctaText": "Un bref cahier des charges de projet peut identifier les rendez‑vous fournisseurs utiles, le contexte produit, les zones probables de déplacement, les besoins en assistance linguistique et les décisions à consigner après chaque visite.",
      "ctaLabel": "Rédiger un cahier des charges"
    }
  }
} as const;
