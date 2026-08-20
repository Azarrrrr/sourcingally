import { questionGroups } from './questions';
import generatedDecisionSuiteTranslations from './generatedDecisionSuiteTranslations.json';

const baseQuestionLocales = {
  "es": {
    "groups": [
      {
        "title": "Elegir un socio de abastecimiento",
        "intro": "Empiece por decidir qué trabajo necesita completarse localmente —no solo si alguien puede encontrar el nombre de un proveedor.",
        "questions": [
          {
            "slug": "what-does-a-china-sourcing-agent-do",
            "category": "Elección de un agente",
            "question": "¿Qué hace un agente de abastecimiento en China?",
            "shortAnswer": "Un agente de abastecimiento puede ayudar a investigar proveedores, comunicar requisitos, gestionar muestras, coordinar visitas, supervisar trabajos acordados y apoyar tareas de calidad o embalaje.",
            "answer": "El alcance exacto varía. Una conversación útil empieza por el producto, la cantidad, el destino, los plazos, las suposiciones de presupuesto y la decisión que necesita ayuda para tomar. Sourcing Ally puede apoyar la investigación de proveedores, la verificación de muestras, las comprobaciones de fábrica o proveedor, las inspecciones de producto final, la coordinación del embalaje, los viajes a fábrica y la traducción según lo acordado para el proyecto.",
            "relatedLabels": [
              "Explorar servicios",
              "Cómo importar desde China"
            ]
          },
          {
            "slug": "when-is-a-sourcing-agent-useful",
            "category": "Elección de un agente",
            "question": "¿Cuándo es útil un agente de abastecimiento?",
            "shortAnswer": "El apoyo local es útil cuando la distancia, el idioma, el riesgo del producto, el acceso a la fábrica o la coordinación dificultan gestionar el trabajo por su cuenta.",
            "answer": "Un agente no es automáticamente necesario para todas las compras. Puede ser especialmente útil cuando necesita una visita a fábrica, una segunda opinión sobre una muestra, ayuda para traducir requisitos del producto, apoyo para comparar proveedores o a alguien que verifique una parte acordada del proceso en China. Primero defina qué puede gestionar directamente y qué requiere trabajo local.",
            "relatedLabels": [
              "Soporte para viajes a fábrica",
              "Búsqueda de proveedores"
            ]
          },
          {
            "slug": "how-do-sourcing-agent-fees-work",
            "category": "Elección de un agente",
            "question": "¿Cómo funcionan las tarifas de Sourcing Ally?",
            "shortAnswer": "Cuando un cliente encarga a través de Sourcing Ally, la tarifa mínima de servicio de sourcing es 5%. El soporte independiente para viajes a fábrica es $150 al día cuando el cliente no encarga a través de Sourcing Ally.",
            "answer": "El alcance final y el tratamiento de la tarifa deben acordarse antes de empezar el trabajo porque un producto, un plan de viaje, una tarea de inspección y una solicitud de coordinación pueden requerir distintos niveles de trabajo. Pregunte qué está incluido, qué información debe facilitar, qué entregables recibirá y cómo se gestionarían costes adicionales de viaje o terceros antes de confirmar un proyecto.",
            "relatedLabels": [
              "Guía de tarifas de sourcing",
              "Contactar a Sourcing Ally"
            ]
          }
        ]
      },
      {
        "title": "Proveedores, muestras y MOQ",
        "intro": "Un brief inicial más sólido y un método de comparación consistente reducen muchos errores de abastecimiento evitables.",
        "questions": [
          {
            "slug": "how-many-suppliers-should-i-compare",
            "category": "Proveedores y muestras",
            "question": "¿Cuántos proveedores debería comparar?",
            "shortAnswer": "Compare a los proveedores con los mismos requisitos escritos y luego preseleccione según capacidad, comunicación, calidad de muestra, ajuste comercial y verificación —no solo por precio.",
            "answer": "No existe un número universal. Lo más importante es comparar igual con igual. Dé a cada proveedor potencial el mismo brief del producto, rango de cantidades, materiales, requisitos de embalaje, mercado de destino, plazos y preguntas. Una cotización baja puede significar materiales distintos, un alcance incompleto, una suposición de cantidad diferente o un plazo distinto.",
            "relatedLabels": [
              "Lista de verificación para verificación de proveedores",
              "Servicio de búsqueda de proveedores"
            ]
          },
          {
            "slug": "what-should-i-check-in-a-product-sample",
            "category": "Proveedores y muestras",
            "question": "¿Qué debo revisar en una muestra de producto?",
            "shortAnswer": "Compruebe si la muestra coincide con el brief escrito y pruebe lo que importa para su uso real: materiales, dimensiones, acabado, función, embalaje y mercado de destino.",
            "answer": "No apruebe una muestra solo porque se vea bien en una foto. Registre la versión de la muestra, mida las dimensiones importantes, compare materiales y color con el brief, pruebe el producto como lo haría un cliente y anote cada corrección. La muestra es más útil cuando la retroalimentación es específica y está documentada antes de iniciar la producción.",
            "relatedLabels": [
              "Sourcing de muestras",
              "Lista de control de control de calidad"
            ]
          },
          {
            "slug": "what-does-moq-mean",
            "category": "Proveedores y muestras",
            "question": "¿Qué significa MOQ al abastecer desde China?",
            "shortAnswer": "MOQ significa cantidad mínima de pedido: la menor cantidad que un proveedor está dispuesto a producir o vender bajo una especificación determinada.",
            "answer": "El MOQ puede cambiar según color del material, logo, herramental, embalaje, componentes y proceso de producción. Un proveedor puede ofrecer un MOQ más bajo a un precio unitario mayor, o un MOQ mayor cuando hay personalización. Pregunte si el MOQ se aplica exactamente al producto, color, embalaje y personalización que necesita, no solo a un listado genérico.",
            "relatedLabels": [
              "Guía de MOQ y cantidades de pedido",
              "Guías de producto"
            ]
          }
        ]
      },
      {
        "title": "Inspecciones de fábrica y control de calidad",
        "intro": "Una visita o inspección debe responder una pregunta definida. No sustituye una especificación clara ni elimina el riesgo del proveedor.",
        "questions": [
          {
            "slug": "what-can-a-factory-visit-confirm",
            "category": "Fábrica y calidad",
            "question": "¿Qué puede confirmar una visita a fábrica?",
            "shortAnswer": "Una visita puede ayudar a comprobar la ubicación real, el equipo visible, el entorno de producción, la comunicación y las preguntas específicas acordadas antes de la visita.",
            "answer": "Una visita a fábrica es más útil cuando decide por adelantado qué evidencia importa: dirección, proceso del producto, estado de la muestra, maquinaria, embalaje, etapa de producción o una preocupación particular. No puede garantizar rendimiento futuro, calidad final del producto, cumplimiento legal ni cada detalle que pueda importar más adelante. Documente las observaciones y conéctelas a un plan de seguimiento por escrito.",
            "relatedLabels": [
              "Comprobaciones de fábrica y proveedor",
              "Soporte para viajes a fábrica"
            ]
          },
          {
            "slug": "when-should-products-be-inspected",
            "category": "Fábrica y calidad",
            "question": "¿Cuándo se deben inspeccionar los productos?",
            "shortAnswer": "La etapa adecuada depende del producto y del riesgo, pero las cuestiones de calidad suelen resolverse más fácilmente antes de que se complete o envíe un lote completo.",
            "answer": "Un plan de calidad útil puede incluir comprobaciones de muestras, controles durante la producción y una verificación final antes del envío. Decida los requisitos del producto, tolerancias aceptables, pruebas funcionales, comprobaciones de embalaje y requisitos de documentación antes de la inspección. Si las expectativas no están claras, una inspección puede identificar un problema sin mostrar cuál debe ser el siguiente paso.",
            "relatedLabels": [
              "Servicio de control de calidad",
              "Lista de control de control de calidad"
            ]
          },
          {
            "slug": "what-is-the-difference-between-a-factory-check-and-final-inspection",
            "category": "Fábrica y calidad",
            "question": "¿Cuál es la diferencia entre una comprobación de fábrica y una inspección final del producto?",
            "shortAnswer": "Una comprobación de fábrica se centra en el proveedor o el entorno de producción; una inspección final se centra en los bienes terminados según los requisitos acordados.",
            "answer": "Responden a preguntas distintas. Una comprobación de fábrica puede observar la ubicación, las operaciones visibles, el proceso y la comunicación. Una inspección de producto final puede revisar cantidad, apariencia, funcionamiento, medidas, embalaje y defectos o tolerancias acordadas. Ambas requieren un alcance por escrito y deben estar vinculadas al brief real del producto.",
            "relatedLabels": [
              "Comprobaciones de fábrica",
              "Controles de calidad finales"
            ]
          }
        ]
      },
      {
        "title": "Ubicaciones en China y viajes",
        "intro": "Las páginas de ciudades son útiles para planificar preguntas y rutas. No son prueba de que una fábrica concreta sea adecuada.",
        "questions": [
          {
            "slug": "what-is-shenzhen-known-for-in-sourcing",
            "category": "Ubicaciones en China",
            "question": "¿Por qué es conocida Shenzhen en el abastecimiento?",
            "shortAnswer": "Shenzhen se asocia comúnmente con la electrónica y una red más amplia de desarrollo de producto, componentes, embalajes y actividad logística en el sur de China.",
            "answer": "La pregunta útil no es solo “¿por qué es conocida Shenzhen?” sino “¿qué proceso, capacidad del proveedor, componente del producto o reunión necesito investigar?”. La asociación con una ciudad no verifica a un proveedor. Solicite la dirección real, defina el propósito de la visita y documente las preguntas del producto que necesita responder.",
            "relatedLabels": [
              "Guía de sourcing de Shenzhen",
              "Guía de electrónica"
            ]
          },
          {
            "slug": "can-sourcing-ally-travel-outside-shenzhen",
            "category": "Ubicaciones en China",
            "question": "¿Puede Sourcing Ally viajar fuera de Shenzhen?",
            "shortAnswer": "Sourcing Ally tiene su sede en Shenzhen y puede trabajar en lugares cercanos de Guangdong. Los viajes a otras partes de China se pueden discutir cuando el proyecto lo requiera.",
            "answer": "Para áreas cercanas como Guangzhou, Foshan, Dongguan, Zhongshan y Huizhou, el viaje local puede ser práctico. Para ubicaciones más lejanas como Yiwu, el viaje debe planificarse en torno a direcciones reales de fábrica, objetivos, tiempos y la decisión que necesita tomar. El soporte independiente para viajes a fábrica es $150 al día cuando el cliente no encarga a través de Sourcing Ally.",
            "relatedLabels": [
              "Ciudades de China",
              "Iniciar un brief de proyecto"
            ]
          },
          {
            "slug": "is-yiwu-a-factory-or-a-market",
            "category": "Ubicaciones en China",
            "question": "¿Yiwu es una zona de fábricas o un mercado mayorista?",
            "shortAnswer": "Yiwu se asocia fuertemente con la actividad de mercado mayorista, pero una visita al mercado y una visita a la fábrica tienen propósitos diferentes.",
            "answer": "Un mercado puede ayudarle a descubrir tipos de producto, empresas comerciales, proveedores o ideas de producto. No muestra automáticamente dónde se fabrica un producto. Si el objetivo es la verificación del proveedor o la discusión de producción, confirme la dirección real de la fábrica y organice una visita que coincida con sus criterios de decisión.",
            "relatedLabels": [
              "Guía de Yiwu",
              "Verificación de proveedores"
            ]
          }
        ]
      },
      {
        "title": "Envíos, cumplimiento y comunicación",
        "intro": "Estos temas son importantes, pero los detalles de producto, mercado y comercio deben verificarse para cada envío real.",
        "questions": [
          {
            "slug": "what-should-i-check-before-shipping-from-china",
            "category": "Envíos y cumplimiento",
            "question": "¿Qué debo comprobar antes de enviar mercancías desde China?",
            "shortAnswer": "Antes del envío, confirme el producto acordado, la cantidad, el embalaje, los documentos comerciales, el plan de transporte, los requisitos del mercado de destino y quién es responsable de cada tarea.",
            "answer": "Las preguntas de envío dependen del producto, la ruta, los términos comerciales, el importador, el proveedor de transporte y el país de destino. Haga una lista de verificación por escrito que incluya comprobaciones del producto terminado, embalaje, detalles de factura y packing list, etiquetado, pruebas o certificaciones pertinentes, momento de la entrega y la parte responsable. Obtenga orientación logística y aduanera actual para el envío real.",
            "relatedLabels": [
              "Guía de envíos desde China",
              "Descargo de responsabilidad"
            ]
          },
          {
            "slug": "how-do-i-check-product-compliance",
            "category": "Envíos y cumplimiento",
            "question": "¿Cómo verifico el cumplimiento del producto antes de importar?",
            "shortAnswer": "Empiece por el producto, uso previsto, grupo de usuarios, mercado de destino, rol del importador, etiquetas y las preguntas de pruebas o certificación aplicables. Luego verifique los requisitos actuales con fuentes calificadas.",
            "answer": "No existe una lista única de cumplimiento para todos los productos. Un producto para niños, un artículo electrónico, un textil, un mueble, un producto de contacto alimentario o un bien doméstico corriente pueden generar requisitos diferentes. La orientación general de sourcing puede ayudar a identificar preguntas, pero no constituye asesoría legal, aduanera, fiscal, de seguridad o de pruebas para un envío real.",
            "relatedLabels": [
              "Guía de cumplimiento y certificación de productos",
              "Términos de uso"
            ]
          },
          {
            "slug": "why-is-clear-supplier-communication-important",
            "category": "Envíos y cumplimiento",
            "question": "¿Por qué es importante la comunicación clara con los proveedores chinos?",
            "shortAnswer": "Requisitos escritos claros reducen el riesgo de que diferentes personas interpreten de forma distinta las expectativas sobre producto, calidad, embalaje, tiempos o precio.",
            "answer": "Use un brief por escrito con dimensiones del producto, materiales, referencias de color, marca, embalaje, rango de cantidades, mercado objetivo, cronograma, criterios de aceptación y preguntas. No confíe en significados asumidos. Cuando se haga un cambio, regístrelo claramente y confirme qué muestra, dibujo, archivo o especificación es la versión vigente.",
            "relatedLabels": [
              "Traducción y comunicación",
              "Guía sobre cultura y comunicación en el sourcing desde China"
            ]
          }
        ]
      }
    ]
  },
  "pt": {
    "groups": [
      {
        "title": "Escolhendo um parceiro de sourcing",
        "intro": "Comece decidindo que trabalho precisa ser realizado localmente — não apenas se alguém pode encontrar o nome de um fornecedor.",
        "questions": [
          {
            "slug": "what-does-a-china-sourcing-agent-do",
            "category": "Escolhendo um agente",
            "question": "O que faz um agente de sourcing na China?",
            "shortAnswer": "Um agente de sourcing pode ajudar a pesquisar fornecedores, comunicar requisitos, providenciar amostras, coordenar visitas, acompanhar trabalhos acordados e apoiar tarefas de qualidade ou embalagem.",
            "answer": "O escopo exato varia. Uma conversa útil começa com o produto, quantidade, destino, cronograma, pressupostos de orçamento e a decisão que você precisa tomar. A Sourcing Ally pode apoiar pesquisa de fornecedores, verificação de amostras, checagens de fábrica ou fornecedor, inspeções do produto final, coordenação de embalagem, viagens a fábricas e tradução conforme acordado para o projeto.",
            "relatedLabels": [
              "Conheça os serviços",
              "Como importar da China"
            ]
          },
          {
            "slug": "when-is-a-sourcing-agent-useful",
            "category": "Escolhendo um agente",
            "question": "Quando um agente de sourcing é útil?",
            "shortAnswer": "O suporte local pode ser útil quando a distância, o idioma, o risco do produto, o acesso à fábrica ou a coordenação tornam difícil gerenciar o trabalho por conta própria.",
            "answer": "Um agente não é automaticamente necessário para toda compra. Pode ser especialmente útil quando você precisa de uma visita à fábrica, um segundo par de olhos sobre uma amostra, ajuda para traduzir requisitos do produto, suporte para comparar fornecedores ou alguém para verificar uma parte acordada do processo na China. Primeiro defina o que você pode gerenciar diretamente e o que exige trabalho local.",
            "relatedLabels": [
              "Suporte para viagens a fábricas",
              "Busca de fornecedores"
            ]
          },
          {
            "slug": "how-do-sourcing-agent-fees-work",
            "category": "Escolhendo um agente",
            "question": "Como funcionam as taxas da Sourcing Ally?",
            "shortAnswer": "Quando um cliente encomenda por meio da Sourcing Ally, a taxa mínima de serviço de sourcing é 5%. O suporte independente para viagens a fábricas é $150 por dia quando o cliente não encomenda por meio da Sourcing Ally.",
            "answer": "O escopo final e o tratamento das taxas devem ser acordados antes do início do trabalho, porque um produto, um plano de viagem, uma tarefa de inspeção e um pedido de coordenação podem exigir níveis diferentes de esforço. Pergunte o que está incluído, quais informações você precisa fornecer, quais entregáveis receberá e como custos adicionais de viagem ou de terceiros seriam tratados antes de confirmar um projeto.",
            "relatedLabels": [
              "Guia de taxas de sourcing",
              "Entrar em contato com a Sourcing Ally"
            ]
          }
        ]
      },
      {
        "title": "Fornecedores, amostras e MOQ",
        "intro": "Um briefing inicial mais completo e um método de comparação consistente reduzem muitos erros evitáveis de sourcing.",
        "questions": [
          {
            "slug": "how-many-suppliers-should-i-compare",
            "category": "Fornecedores e amostras",
            "question": "Quantos fornecedores devo comparar?",
            "shortAnswer": "Compare fornecedores com base nos mesmos requisitos escritos e, em seguida, selecione uma lista curta com base em capacidade, comunicação, qualidade das amostras, adequação comercial e verificação — não apenas no preço.",
            "answer": "Não existe um número universal. O ponto mais importante é comparar 'igual com igual'. Dê a cada fornecedor potencial o mesmo briefing do produto, faixa de quantidade, materiais, requisitos de embalagem, mercado de destino, cronograma e perguntas. Uma cotação baixa pode significar materiais diferentes, escopo incompleto, suposição de quantidade diferente ou prazo de produção distinto.",
            "relatedLabels": [
              "Checklist de verificação de fornecedores",
              "Serviço de busca de fornecedores"
            ]
          },
          {
            "slug": "what-should-i-check-in-a-product-sample",
            "category": "Fornecedores e amostras",
            "question": "O que devo verificar em uma amostra de produto?",
            "shortAnswer": "Verifique se a amostra corresponde ao briefing escrito do produto e teste os aspectos que importam para seu uso real: materiais, dimensões, acabamento, função, embalagem e mercado de destino.",
            "answer": "Uma amostra não deve ser aprovada apenas porque parece boa numa fotografia. Registre a versão da amostra, meça dimensões importantes, compare materiais e cores com o briefing, teste o produto da forma como o cliente o usaria e escreva todas as correções. A amostra se torna mais útil quando o feedback é específico e documentado antes do início da produção.",
            "relatedLabels": [
              "Obtenção de amostras",
              "Checklist de controle de qualidade"
            ]
          },
          {
            "slug": "what-does-moq-mean",
            "category": "Fornecedores e amostras",
            "question": "O que significa MOQ ao comprar da China?",
            "shortAnswer": "MOQ significa quantidade mínima de pedido: a menor quantidade que um fornecedor está disposto a produzir ou vender sob uma especificação específica.",
            "answer": "O MOQ pode mudar com cor do material, logotipo, ferramentas, embalagem, componentes e processo de produção. Um fornecedor pode oferecer um MOQ menor a um preço unitário mais alto, ou um MOQ maior quando há customização. Pergunte se o MOQ se aplica ao produto exato, cor, embalagem e personalização que você precisa — e não apenas a um anúncio genérico.",
            "relatedLabels": [
              "Guia de MOQ e quantidades de pedido",
              "Guias de produto"
            ]
          }
        ]
      },
      {
        "title": "Inspeções de fábrica e controle de qualidade",
        "intro": "Uma visita ou inspeção deve responder a uma pergunta definida. Não substitui uma especificação clara nem torna um fornecedor isento de riscos.",
        "questions": [
          {
            "slug": "what-can-a-factory-visit-confirm",
            "category": "Fábrica e qualidade",
            "question": "O que uma visita à fábrica pode confirmar?",
            "shortAnswer": "Uma visita pode ajudar a verificar a localização real, equipamentos visíveis, ambiente de produção, comunicação e as questões específicas acordadas antes da visita.",
            "answer": "Uma visita à fábrica é mais útil quando você decide antecipadamente quais evidências importam: endereço, processo do produto, status da amostra, maquinário, embalagem, estágio de produção ou uma preocupação específica. Ela não pode garantir desempenho futuro, qualidade final do produto, conformidade legal ou cada detalhe que possa importar depois. Documente observações e conecte-as a um plano de acompanhamento por escrito.",
            "relatedLabels": [
              "Verificações de fábrica e fornecedor",
              "Suporte para viagens a fábricas"
            ]
          },
          {
            "slug": "when-should-products-be-inspected",
            "category": "Fábrica e qualidade",
            "question": "Quando os produtos devem ser inspecionados?",
            "shortAnswer": "O estágio correto depende do produto e do risco, mas questões de qualidade geralmente são mais fáceis de resolver antes que um lote completo seja concluído ou embarcado.",
            "answer": "Um plano de qualidade útil pode incluir verificações de amostras, checagens durante a produção e uma inspeção final antes do embarque. Defina os requisitos do produto, tolerâncias aceitáveis, testes funcionais, verificações de embalagem e exigências de documentação antes da inspeção. Se as expectativas estiverem pouco claras, uma inspeção pode identificar um problema sem mostrar o que deve ser feito a seguir.",
            "relatedLabels": [
              "Serviço de controle de qualidade",
              "Checklist de controle de qualidade"
            ]
          },
          {
            "slug": "what-is-the-difference-between-a-factory-check-and-final-inspection",
            "category": "Fábrica e qualidade",
            "question": "Qual a diferença entre uma verificação de fábrica e uma inspeção final do produto?",
            "shortAnswer": "Uma verificação de fábrica foca no fornecedor ou no ambiente de produção; uma inspeção final foca nas mercadorias acabadas em relação aos requisitos acordados.",
            "answer": "Elas respondem a perguntas diferentes. Uma verificação de fábrica pode observar localização, operações visíveis, processo e comunicação. Uma inspeção do produto final pode verificar quantidade, aparência, função, medidas, embalagem e defeitos ou tolerâncias acordadas. Ambas precisam de um escopo por escrito e devem estar conectadas ao briefing real do produto.",
            "relatedLabels": [
              "Verificações de fábrica",
              "Inspeções finais de qualidade"
            ]
          }
        ]
      },
      {
        "title": "Localidades na China e viagens",
        "intro": "Páginas de cidades são úteis para planejar itinerários e questões. Não constituem prova de que uma fábrica específica seja adequada.",
        "questions": [
          {
            "slug": "what-is-shenzhen-known-for-in-sourcing",
            "category": "Localidades na China",
            "question": "Pelo que Shenzhen é conhecida no sourcing?",
            "shortAnswer": "Shenzhen é comumente associada à eletrônica e a uma rede mais ampla de desenvolvimento de produto, componentes, embalagem e atividade logística no sul da China.",
            "answer": "A pergunta útil não é apenas “pelo que Shenzhen é conhecida?” mas “qual processo, capacidade do fornecedor, componente do produto ou reunião eu preciso pesquisar?” A associação com uma cidade não verifica um fornecedor. Solicite o endereço real, defina o propósito da visita e documente as questões do produto que precisam ser respondidas.",
            "relatedLabels": [
              "Guia de sourcing de Shenzhen",
              "Guia de eletrônicos"
            ]
          },
          {
            "slug": "can-sourcing-ally-travel-outside-shenzhen",
            "category": "Localidades na China",
            "question": "A Sourcing Ally pode viajar fora de Shenzhen?",
            "shortAnswer": "A Sourcing Ally está baseada em Shenzhen e pode atuar em locais próximos na província de Guangdong. Viagens a outras regiões da China podem ser discutidas quando o projeto exigir.",
            "answer": "Para áreas próximas como Guangzhou, Foshan, Dongguan, Zhongshan e Huizhou, deslocamentos locais podem ser práticos. Para locais mais distantes, como Yiwu, a viagem deve ser planejada em torno de endereços reais de fábricas, objetivos, cronograma e da decisão que você precisa tomar. O suporte independente para viagens a fábricas é $150 por dia quando o cliente não encomenda por meio da Sourcing Ally.",
            "relatedLabels": [
              "Cidades da China",
              "Iniciar um briefing de projeto"
            ]
          },
          {
            "slug": "is-yiwu-a-factory-or-a-market",
            "category": "Localidades na China",
            "question": "Yiwu é uma localização de fábrica ou um mercado atacadista?",
            "shortAnswer": "Yiwu é fortemente associada à atividade de mercado atacadista, mas uma visita ao mercado e uma visita à fábrica têm propósitos diferentes.",
            "answer": "Um mercado pode ajudar a descobrir tipos de produto, empresas comerciais, fornecedores ou ideias de produto. Não mostra automaticamente onde um produto é fabricado. Se o objetivo for verificação de fornecedor ou discussão de produção, confirme o endereço real da fábrica e agende uma visita que corresponda aos seus critérios de decisão.",
            "relatedLabels": [
              "Guia de Yiwu",
              "Verificação de fornecedores"
            ]
          }
        ]
      },
      {
        "title": "Envio, conformidade e comunicação",
        "intro": "Esses assuntos são importantes, mas detalhes de produto, mercado e comerciais devem ser verificados para cada remessa real.",
        "questions": [
          {
            "slug": "what-should-i-check-before-shipping-from-china",
            "category": "Envio e conformidade",
            "question": "O que devo verificar antes de enviar mercadorias da China?",
            "shortAnswer": "Antes do envio, confirme o produto acordado, quantidade, embalagem, documentos comerciais, plano de transporte, requisitos do mercado de destino e quem é responsável por cada tarefa.",
            "answer": "Questões de envio dependem do produto, rota, termos comerciais, importador, fornecedor de frete e país de destino. Faça uma lista de verificação por escrito que cubra checagens do produto acabado, embalagem, detalhes de fatura e packing list, rotulagem, testes ou certificações relevantes, momento da transferência de responsabilidade e a parte responsável. Obtenha orientação atualizada de logística e alfândega para a remessa real.",
            "relatedLabels": [
              "Guia de envio da China",
              "Isenção de responsabilidade"
            ]
          },
          {
            "slug": "how-do-i-check-product-compliance",
            "category": "Envio e conformidade",
            "question": "Como verifico a conformidade do produto antes de importar?",
            "shortAnswer": "Comece pelo produto, uso pretendido, público-alvo, mercado de destino, papel do importador, rótulos e questões de testes ou certificação aplicáveis. Em seguida, verifique os requisitos atuais com fontes qualificadas.",
            "answer": "Não existe uma lista única de conformidade para todo produto. Um produto infantil, item eletrônico, têxtil, móvel, produto para contato com alimentos ou bem doméstico comum podem gerar requisitos diferentes. Orientações gerais de sourcing podem ajudar a identificar questões, mas não constituem aconselhamento legal, aduaneiro, fiscal, de segurança ou de testes para uma remessa real.",
            "relatedLabels": [
              "Guia de certificação e conformidade de produto",
              "Termos de uso"
            ]
          },
          {
            "slug": "why-is-clear-supplier-communication-important",
            "category": "Envio e conformidade",
            "question": "Por que a comunicação clara com fornecedores chineses é importante?",
            "shortAnswer": "Requisitos escritos claros reduzem o risco de que pessoas diferentes interpretem de forma distinta expectativas sobre produto, qualidade, embalagem, prazos ou preço.",
            "answer": "Use um briefing por escrito com dimensões do produto, materiais, referências de cor, identidade visual, embalagem, faixa de quantidade, mercado-alvo, cronograma, critérios de aceitação e perguntas. Não confie em significados assumidos. Quando uma alteração for feita, registre-a claramente e confirme qual amostra, desenho, arquivo ou especificação é a versão atual.",
            "relatedLabels": [
              "Tradução e comunicação",
              "Guia de cultura e comunicação na China"
            ]
          }
        ]
      }
    ]
  },
  "ru": {
    "groups": [
      {
        "title": "Выбор партнёра по снабжению",
        "intro": "Начните с определения, какие задачи нужно выполнить локально — а не только с вопроса, сможет ли кто‑то найти название поставщика.",
        "questions": [
          {
            "slug": "what-does-a-china-sourcing-agent-do",
            "category": "Выбор агента",
            "question": "Чем занимается агент по снабжению в Китае?",
            "shortAnswer": "Агент по снабжению может помогать в исследовании поставщиков, передаче требований, организации образцов, координации визитов, контроле согласованной работы и поддержке задач по качеству или упаковке.",
            "answer": "Точный объём работ различается. Полезный разговор начинается с описания продукта, объёма, пункта назначения, сроков, бюджетных допущений и решения, в котором вам нужна помощь. Sourcing Ally может поддержать исследование поставщиков, проверку образцов, проверки фабрик или поставщиков, финальные проверки продукции, координацию упаковки, поездки на фабрики и перевод в рамках согласованного объёма проекта.",
            "relatedLabels": [
              "Перечень услуг",
              "Как импортировать из Китая"
            ]
          },
          {
            "slug": "when-is-a-sourcing-agent-useful",
            "category": "Выбор агента",
            "question": "Когда имеет смысл привлекать агента по снабжению?",
            "shortAnswer": "Локальная поддержка полезна, когда расстояние, язык, риск продукта, доступ к фабрике или координация делают самостоятельное управление работой затруднительным.",
            "answer": "Агент не обязателен при каждой покупке. Особенно полезно привлекать его, когда требуется визит на фабрику, второе мнение по образцу, помощь с переводом технических требований, поддержка при сравнении поставщиков или кто‑то, кто проверит согласованный этап процесса в Китае. Сначала определите, что вы можете контролировать напрямую, а что требует локальной работы.",
            "relatedLabels": [
              "Поддержка поездок на фабрики",
              "Поиск поставщиков"
            ]
          },
          {
            "slug": "how-do-sourcing-agent-fees-work",
            "category": "Выбор агента",
            "question": "Как работают сборы Sourcing Ally?",
            "shortAnswer": "Когда клиент заказывает через Sourcing Ally, минимальная плата за услуги по снабжению составляет 5%. Независимая поддержка при поездках на фабрики стоит $150 в день, когда клиент не заказывает через Sourcing Ally.",
            "answer": "Окончательный объём и порядок оплаты должны быть согласованы до начала работ, поскольку продукт, маршрут поездки, задача инспекции и запросы на координацию могут требовать разного объёма усилий. Спросите, что включено в услугу, какую информацию нужно предоставить, какие результаты вы получите и как будут оплачиваться дополнительные поездки или сторонние расходы перед подтверждением проекта.",
            "relatedLabels": [
              "Руководство по сборам за услуги по снабжению",
              "Связаться с Sourcing Ally"
            ]
          }
        ]
      },
      {
        "title": "Поставщики, образцы и минимальные объёмы заказа",
        "intro": "Чёткое первоначальное ТЗ и единый метод сравнения снижают многие избегаемые ошибки при снабжении.",
        "questions": [
          {
            "slug": "how-many-suppliers-should-i-compare",
            "category": "Поставщики и образцы",
            "question": "Сколько поставщиков стоит сравнивать?",
            "shortAnswer": "Сравнивайте поставщиков по одним и тем же письменным требованиям, затем сокращайте список по способностям, коммуникации, качеству образцов, коммерческому соответствию и верификации — а не только по цене.",
            "answer": "Нет универсального числа. Главное — сравнивать «как с каковым». Дайте каждому потенциальному поставщику одно и то же техническое задание: диапазон количества, материалы, требования к упаковке, целевой рынок, сроки и вопросы. Низкая цена может скрывать другие материалы, неполный объём работ, другое допущение по количеству или иной срок изготовления.",
            "relatedLabels": [
              "Чек-лист проверки поставщика",
              "Услуга поиска поставщиков"
            ]
          },
          {
            "slug": "what-should-i-check-in-a-product-sample",
            "category": "Поставщики и образцы",
            "question": "Что нужно проверять в образце продукции?",
            "shortAnswer": "Проверьте, соответствует ли образец письменному ТЗ, и испытайте параметры, важные для его использования: материалы, размеры, отделка, функция, упаковка и требования целевого рынка.",
            "answer": "Образец не следует утверждать только потому, что он хорошо выглядит на фотографии. Зафиксируйте версию образца, измерьте ключевые параметры, сравните материалы и цвет с ТЗ, протестируйте продукт так, как будет пользоваться покупатель, и задокументируйте каждую корректировку. Образец становится намного полезнее, когда обратная связь конкретна и оформлена письменно до начала производства.",
            "relatedLabels": [
              "Подбор образцов",
              "Чек-лист контроля качества"
            ]
          },
          {
            "slug": "what-does-moq-mean",
            "category": "Поставщики и образцы",
            "question": "Что означает минимальный объём заказа при закупках в Китае?",
            "shortAnswer": "Минимальный объём заказа — это: наименьшее количество, которое поставщик готов произвести или продать по конкретной спецификации.",
            "answer": "Минимальный объём заказа может изменяться в зависимости от цвета материала, логотипа, оснастки, упаковки, комплектующих и производственного процесса. Поставщик может предложить меньший минимальный объём заказа по более высокой цене за единицу или более высокий минимальный объём заказа при наличии кастомизации. Спросите, относится ли этот минимум к именно тому продукту, цвету, упаковке и доработкам, которые вам нужны — а не только к общему товарному предложению.",
            "relatedLabels": [
              "Руководство по минимальным объёмам заказа",
              "Руководства по товарам"
            ]
          }
        ]
      },
      {
        "title": "Проверки фабрик и контроль качества",
        "intro": "Визит или инспекция должны отвечать на чётко сформулированный вопрос. Они не заменяют подробную спецификацию и не делают поставщика безрисковым.",
        "questions": [
          {
            "slug": "what-can-a-factory-visit-confirm",
            "category": "Фабрика и качество",
            "question": "Что может подтвердить визит на фабрику?",
            "shortAnswer": "Визит помогает проверить фактическое местоположение, видимое оборудование, условия производства, коммуникацию и конкретные вопросы, согласованные заранее.",
            "answer": "Визит на фабрику наиболее полезен, когда вы заранее решаете, какие доказательства имеют значение: адрес, технологический процесс, статус образца, станки, упаковка, стадия производства или конкретная проблема. Он не может гарантировать будущую работу, качество конечного продукта, соответствие требованиям законодательства или каждую деталь, которая может быть важной позже. Задокументируйте наблюдения и свяжите их с письменным планом последующих действий.",
            "relatedLabels": [
              "Проверки фабрик и поставщиков",
              "Поддержка поездок на фабрики"
            ]
          },
          {
            "slug": "when-should-products-be-inspected",
            "category": "Фабрика и качество",
            "question": "Когда нужно проводить инспекцию продукции?",
            "shortAnswer": "Подходящая стадия зависит от продукта и рисков, но вопросы качества обычно легче решать до завершения или отгрузки полной партии.",
            "answer": "Полезный план контроля качества может включать проверку образцов, проверки в ходе производства и финальную проверку перед отгрузкой. Определите требования к продукту, допустимые отклонения, функциональные испытания, проверки упаковки и требования к документации до инспекции. Если ожидания неясны, инспекция может выявить проблему, но не покажет, что конкретно следует делать дальше.",
            "relatedLabels": [
              "Услуга контроля качества",
              "Чек-лист контроля качества"
            ]
          },
          {
            "slug": "what-is-the-difference-between-a-factory-check-and-final-inspection",
            "category": "Фабрика и качество",
            "question": "В чём разница между проверкой фабрики и финальной инспекцией продукта?",
            "shortAnswer": "Проверка фабрики ориентирована на поставщика и производственную среду; финальная инспекция — на готовую продукцию в соответствии с согласованными требованиями.",
            "answer": "Они отвечают на разные вопросы. Проверка фабрики может смотреть на местоположение, видимые операции, процесс и коммуникацию. Финальная проверка продукции может оценивать количество, внешний вид, функциональность, замеры, упаковку и согласованные дефекты или допуски. Обе процедуры требуют письменного объёма работ и должны быть связаны с фактическим ТЗ продукта.",
            "relatedLabels": [
              "Проверки фабрики",
              "Финальная проверка качества"
            ]
          }
        ]
      },
      {
        "title": "Локации в Китае и поездки",
        "intro": "Страницы по городам полезны для планирования и маршрутов. Они не являются доказательством того, что конкретная фабрика подходит.",
        "questions": [
          {
            "slug": "what-is-shenzhen-known-for-in-sourcing",
            "category": "Локации Китая",
            "question": "С чем обычно ассоциируется Шэньчжэнь в контексте снабжения?",
            "shortAnswer": "Шэньчжэнь обычно ассоциируется с электроникой и более широкой сетью активности по разработке продуктов, компонентам, упаковке и логистике в южном Китае.",
            "answer": "Важнее задать не только «с чем ассоциируется Шэньчжэнь?», но и «какой процесс, способность поставщика, компонент продукта или встреча мне нужны для исследования?». Ассоциация с городом не подтверждает надёжность поставщика. Запросите фактический адрес, определите цель визита и задокументируйте вопросы по продукту, на которые вам нужно получить ответы.",
            "relatedLabels": [
              "Руководство по Шэньчжэню",
              "Руководство по электронике"
            ]
          },
          {
            "slug": "can-sourcing-ally-travel-outside-shenzhen",
            "category": "Локации Китая",
            "question": "Может ли Sourcing Ally ездить за пределы Шэньчжэня?",
            "shortAnswer": "Sourcing Ally базируется в Шэньчжэне и может работать в близлежащих районах провинции Гуандун. Поездки в другие районы Китая обсуждаются при необходимости проекта.",
            "answer": "Для близлежащих районов, таких как Гуанчжоу, Фошань, Дунгуань, Чжуншань и Хуэйчжоу, локальные поездки могут быть практичны. Для более удалённых мест, таких как Иу, поездку следует планировать с учётом реальных адресов фабрик, целей, сроков и решения, которое вам нужно принять. Независимая поддержка при поездках на фабрики стоит $150 в день, когда клиент не заказывает через Sourcing Ally.",
            "relatedLabels": [
              "Города Китая",
              "Отправить бриф проекта"
            ]
          },
          {
            "slug": "is-yiwu-a-factory-or-a-market",
            "category": "Локации Китая",
            "question": "Иу — это место фабрик или оптовый рынок?",
            "shortAnswer": "Иу сильно ассоциируется с оптовой рыночной деятельностью, но поход на рынок и визит на фабрику служат разным целям.",
            "answer": "Рынок может помочь обнаружить типы продуктов, торговые компании, поставщиков или идеи для товара. Он не показывает автоматически, где именно продукт производится. Если цель — верификация поставщика или обсуждение производства, подтвердите фактический адрес фабрики и организуйте визит, соответствующий вашим критериям принятия решения.",
            "relatedLabels": [
              "Руководство по Иу",
              "Проверка поставщика"
            ]
          }
        ]
      },
      {
        "title": "Доставка, соответствие требованиям и коммуникация",
        "intro": "Эти темы важны, но детали продукта, рынка и коммерции следует проверять для каждой конкретной отгрузки.",
        "questions": [
          {
            "slug": "what-should-i-check-before-shipping-from-china",
            "category": "Доставка и соответствие",
            "question": "Что следует проверить перед отправкой товаров из Китая?",
            "shortAnswer": "Перед отправкой подтвердите согласованный продукт, количество, упаковку, коммерческие документы, план транспортировки, требования целевого рынка и ответственность за каждую задачу.",
            "answer": "Вопросы доставки зависят от продукта, маршрута, коммерческих условий, импортёра, перевозчика и страны назначения. Составьте письменный чек‑лист, охватывающий проверки готовой продукции, упаковку, данные в счёте‑фактуре и упаковочном листе, маркировку, актуальные требования по тестированию или сертификации, сроки передачи и ответственное лицо. Получите актуальные логистические и таможенные указания для конкретной отгрузки.",
            "relatedLabels": [
              "Руководство по отправке из Китая",
              "Отказ от ответственности"
            ]
          },
          {
            "slug": "how-do-i-check-product-compliance",
            "category": "Доставка и соответствие",
            "question": "Как проверить соответствие товара требованиям перед импортом?",
            "shortAnswer": "Начните с описания продукта, предполагаемого использования, целевой аудитории, рынка назначения, роли импортёра, маркировки и применимых вопросов по тестированию или сертификации. Затем проверьте актуальные требования у квалифицированных источников.",
            "answer": "Нет единого чек‑листа соответствия для всех товаров. Детские товары, электроника, текстиль, мебель, продукты для контакта с пищевыми продуктами или обычные хозяйственные товары могут иметь разные требования. Общее руководство по снабжению помогает выявить вопросы, но не является юридической, таможенной, налоговой, безопасностью или тестовой консультацией для конкретной отгрузки.",
            "relatedLabels": [
              "Руководство по сертификации и соответствию",
              "Условия использования"
            ]
          },
          {
            "slug": "why-is-clear-supplier-communication-important",
            "category": "Доставка и соответствие",
            "question": "Почему важна понятная коммуникация с китайскими поставщиками?",
            "shortAnswer": "Письменные чёткие требования снижают риск того, что разные люди по‑разному истолкуют ожидания в отношении продукта, качества, упаковки, сроков или цены.",
            "answer": "Используйте письменный бриф с размерами продукта, материалами, цветовыми ссылками, брендингом, требованиями к упаковке, диапазоном количества, целевым рынком, сроками, критериями приёмки и вопросами. Не полагайтесь на подразумеваемое значение. При изменениях фиксируйте их письменно и подтверждайте, какая версия образца, чертежа, файла или спецификации является актуальной.",
            "relatedLabels": [
              "Перевод и коммуникация",
              "Культура и коммуникация при снабжении в Китае"
            ]
          }
        ]
      }
    ]
  },
  "tr": {
    "groups": [
      {
        "title": "Tedarik ortağı seçimi",
        "intro": "Öncelikle yerel olarak hangi işlerin yapılması gerektiğine karar verin—sadece birinin bir tedarikçi adı bulup bulamayacağını düşünmeyin.",
        "questions": [
          {
            "slug": "what-does-a-china-sourcing-agent-do",
            "category": "Ajan seçimi",
            "question": "Bir Çin tedarik ajanı ne yapar?",
            "shortAnswer": "Bir tedarik ajanı tedarikçi araştırması yapmaya, gereksinimleri iletmeye, numuneleri ayarlamaya, ziyaretleri koordine etmeye, üzerinde anlaşılan işleri izlemeye ve kalite veya ambalajlama görevlerinde destek olmaya yardımcı olabilir.",
            "answer": "Kesin kapsam değişir. Yararlı bir görüşme ürün, miktar, varış yeri, zamanlama, bütçe varsayımları ve yardıma ihtiyaç duyduğunuz karar ile başlar. Sourcing Ally, proje için mutabık kalınan ölçüde tedarikçi araştırması, numune kontrolleri, fabrika veya tedarikçi kontrolleri, son ürün kontrolleri, ambalaj koordinasyonu, fabrika seyahati ve çeviri desteği sağlayabilir.",
            "relatedLabels": [
              "Hizmetleri inceleyin",
              "Çin'den nasıl ithal edilir"
            ]
          },
          {
            "slug": "when-is-a-sourcing-agent-useful",
            "category": "Ajan seçimi",
            "question": "Bir tedarik ajanı ne zaman faydalıdır?",
            "shortAnswer": "Mesafe, dil, ürün riski, fabrika erişimi veya koordinasyon işleri kendiniz yönetmeyi zorlaştırıyorsa yerel destek faydalı olabilir.",
            "answer": "Her satın alma için bir ajan otomatik olarak gerekli değildir. Fabrika ziyareti gerektiğinde, numuneye ikinci bir göz gerektiğinde, ürün gereksinimlerini tercüme etmede yardım gerektiğinde, tedarikçileri karşılaştırmada destek gerektiğinde veya Çin'de üzerinde anlaşılan bir sürecin bir kısmını kontrol edecek birine ihtiyaç duyduğunuzda özellikle faydalı olabilir. Önce doğrudan neleri yönetebileceğinizi ve nelerin yerel çalışma gerektirdiğini tanımlayın.",
            "relatedLabels": [
              "Fabrika seyahat desteği",
              "Tedarikçi bulma"
            ]
          },
          {
            "slug": "how-do-sourcing-agent-fees-work",
            "category": "Ajan seçimi",
            "question": "Sourcing Ally ücretleri nasıl işler?",
            "shortAnswer": "Müşteri Sourcing Ally aracılığıyla sipariş verdiğinde, asgari tedarik hizmet ücreti 5% olarak uygulanır. Müşteri Sourcing Ally aracılığıyla sipariş vermediğinde bağımsız fabrika seyahat desteği günde $150 olur.",
            "answer": "Nihai kapsam ve ücret muamelesi işe başlanmadan önce kararlaştırılmalıdır çünkü bir ürün, seyahat planı, denetim görevi ve koordinasyon talebi farklı iş seviyeleri gerektirebilir. Neyin dahil olduğunu, hangi bilgileri sağlamanız gerektiğini, hangi çıktıları alacağınızı ve ek seyahat veya üçüncü taraf maliyetlerinin nasıl ele alınacağını bir projeyi onaylamadan önce sorun.",
            "relatedLabels": [
              "Tedarik ücreti rehberi",
              "Sourcing Ally ile iletişime geçin"
            ]
          }
        ]
      },
      {
        "title": "Tedarikçiler, numuneler ve MOQ",
        "intro": "Daha güçlü bir ilk brifing ve tutarlı bir karşılaştırma yöntemi birçok önlenebilir tedarik hatasını azaltır.",
        "questions": [
          {
            "slug": "how-many-suppliers-should-i-compare",
            "category": "Tedarikçiler ve numuneler",
            "question": "Kaç tedarikçiyi karşılaştırmalıyım?",
            "shortAnswer": "Tedarikçileri aynı yazılı gereksinimlere göre karşılaştırın, sonra yetenek, iletişim, numune kalitesi, ticari uyum ve doğrulamaya göre—yalnızca fiyata bakmadan—eleme yapın.",
            "answer": "Evrensel bir sayı yoktur. Önemli olan benzer şeyleri karşılaştırmaktır. Her potansiyel tedarikçiye aynı ürün brifini, miktar aralığını, malzemeleri, ambalaj gereksinimlerini, hedef pazarı, zamanlamayı ve soruları verin. Düşük bir teklif farklı malzemeler, eksik kapsam, farklı miktar varsayımı veya farklı teslim süresi varsayımı anlamına gelebilir.",
            "relatedLabels": [
              "Tedarikçi doğrulama kontrol listesi",
              "Tedarikçi bulma hizmeti"
            ]
          },
          {
            "slug": "what-should-i-check-in-a-product-sample",
            "category": "Tedarikçiler ve numuneler",
            "question": "Bir ürün numunesinde ne kontrol etmeliyim?",
            "shortAnswer": "Numunenin yazılı ürün brifine uyup uymadığını kontrol edin ve kullanım açısından önemli olanları; malzemeler, boyutlar, yüzey işçiliği, fonksiyon, ambalaj ve hedef pazarı test edin.",
            "answer": "Bir numune sadece fotoğrafta iyi göründüğü için onaylanmamalıdır. Numune versiyonunu kaydedin, önemli ölçüleri ölçün, malzemeleri ve rengi brifle karşılaştırın, ürünü müşterinin kullanacağı şekilde test edin ve her düzeltmeyi yazılı hale getirin. Geri bildirim spesifik ve belgelenmiş olduğunda numune, üretim başlamadan önce daha faydalı olur.",
            "relatedLabels": [
              "Numune temini",
              "Kalite kontrol listesi"
            ]
          },
          {
            "slug": "what-does-moq-mean",
            "category": "Tedarikçiler ve numuneler",
            "question": "Çin'den tedarik yaparken MOQ ne anlama gelir?",
            "shortAnswer": "MOQ, minimum sipariş miktarı demektir: bir tedarikçinin belirli bir spesifikasyon altında üretmeye veya satmaya hazır olduğu en az miktar.",
            "answer": "MOQ, malzeme rengi, logo, kalıp, ambalaj, bileşenler ve üretim sürecine göre değişebilir. Bir tedarikçi daha düşük MOQ'yu daha yüksek bir birim fiyata veya özelleştirme söz konusu olduğunda daha yüksek MOQ'yu teklif edebilir. MOQ'nun tam olarak ihtiyaç duyduğunuz ürün, renk, ambalaj ve özelleştirme için geçerli olup olmadığını sorun—sadece genel bir ürün listesi için mi değil.",
            "relatedLabels": [
              "MOQ ve sipariş miktarları rehberi",
              "Ürün rehberleri"
            ]
          }
        ]
      },
      {
        "title": "Fabrika kontrolleri ve kalite kontrolü",
        "intro": "Bir ziyaret veya denetim tanımlı bir soruyu yanıtlamalıdır. Bu, açık bir spesifikasyonun yerini almaz veya bir tedarikçinin risksiz olduğunu göstermez.",
        "questions": [
          {
            "slug": "what-can-a-factory-visit-confirm",
            "category": "Fabrika ve kalite",
            "question": "Bir fabrika ziyareti neyi doğrulayabilir?",
            "shortAnswer": "Ziyaret gerçek konumu, görülebilen ekipmanı, üretim ortamını, iletişimi ve ziyaretten önce üzerinde anlaşılan özel soruları kontrol etmeye yardımcı olabilir.",
            "answer": "Bir fabrika ziyareti en faydalı olduğunda hangi kanıtın önemli olduğuna önceden karar verirsiniz: adres, ürün süreci, numune durumu, makineler, ambalaj, üretim aşaması veya belirli bir endişe. Ziyaret gelecekteki performansın, nihai ürün kalitesinin, yasal uygunluğun veya ileride önemli olabilecek her ayrıntının garantisi olamaz. Gözlemleri belgeleyin ve bunları yazılı bir takip planına bağlayın.",
            "relatedLabels": [
              "Fabrika ve tedarikçi kontrolleri",
              "Fabrika seyahat desteği"
            ]
          },
          {
            "slug": "when-should-products-be-inspected",
            "category": "Fabrika ve kalite",
            "question": "Ürünler ne zaman denetlenmelidir?",
            "shortAnswer": "Doğru aşama ürün ve riske bağlıdır, ancak kalite soruları genellikle tam bir partinin tamamlanmasından veya sevk edilmesinden önce çözülmesi daha kolaydır.",
            "answer": "Yararlı bir kalite planı numune kontrolleri, üretim sırasında kontroller ve sevkiyat öncesi son kontrol içerebilir. Ürün gereksinimlerini, kabul edilebilir toleransları, fonksiyonel testleri, ambalaj kontrollerini ve belge gereksinimlerini denetimden önce belirleyin. Beklentiler belirsizse, bir denetim sorunu tanımlayabilir ancak sonrasında ne yapılması gerektiğini göstermeyebilir.",
            "relatedLabels": [
              "Kalite kontrol hizmeti",
              "Kalite kontrol listesi"
            ]
          },
          {
            "slug": "what-is-the-difference-between-a-factory-check-and-final-inspection",
            "category": "Fabrika ve kalite",
            "question": "Fabrika kontrolü ile nihai ürün denetimi arasındaki fark nedir?",
            "shortAnswer": "Fabrika kontrolü tedarikçiye veya üretim ortamına odaklanır; nihai denetim tamamlanmış malları anlaşılan gereksinimlere göre inceler.",
            "answer": "Bunlar farklı soruları yanıtlar. Fabrika kontrolü konum, görülebilen operasyonlar, süreç ve iletişimi incelerken; nihai ürün denetimi miktar, görünüm, fonksiyon, ölçüler, ambalaj ve kabul edilen kusurlar veya toleranslara bakabilir. Her ikisi de yazılı bir kapsam gerektirir ve gerçek ürün brifi ile bağlantılı olmalıdır.",
            "relatedLabels": [
              "Fabrika kontrolleri",
              "Nihai kalite kontrolleri"
            ]
          }
        ]
      },
      {
        "title": "Çin lokasyonları ve seyahat",
        "intro": "Şehir sayfaları planlama soruları ve güzergahlar için yararlıdır. Bunlar belirli bir fabrikanın uygun olduğunu kanıtlamaz.",
        "questions": [
          {
            "slug": "what-is-shenzhen-known-for-in-sourcing",
            "category": "Çin lokasyonları",
            "question": "Shenzhen tedarikte genellikle neyle bilinir?",
            "shortAnswer": "Shenzhen genellikle elektroniklerle ve güney Çin'de ürün geliştirme, bileşen, ambalaj ve lojistik faaliyetlerinin daha geniş ağıyla ilişkilendirilir.",
            "answer": "Yararlı soru sadece \"Shenzhen ne ile bilinir?\" değil; aynı zamanda \"hangi süreç, tedarikçi yeteneği, ürün bileşeni veya görüşmeyi araştırmam gerekiyor?\" olmalıdır. Bir şehrin ilişkilendirilmesi bir tedarikçiyi doğrulamaz. Gerçek adresi talep edin, ziyaret amacını tanımlayın ve yanıtlanması gereken ürün sorularını belgeleyin.",
            "relatedLabels": [
              "Shenzhen tedarik rehberi",
              "Elektronik rehberi"
            ]
          },
          {
            "slug": "can-sourcing-ally-travel-outside-shenzhen",
            "category": "Çin lokasyonları",
            "question": "Sourcing Ally Shenzhen dışına seyahat edebilir mi?",
            "shortAnswer": "Sourcing Ally Shenzhen merkezlidir ve yakın Guangdong lokasyonlarında çalışabilir. Proje gerektiriyorsa Çin'in diğer bölgelerine seyahat tartışılabilir.",
            "answer": "Guangzhou, Foshan, Dongguan, Zhongshan ve Huizhou gibi yakın bölgeler için yerel seyahat pratik olabilir. Yiwu gibi daha uzak lokasyonlar için gezi, gerçek fabrika adresleri, hedefler, zamanlama ve almanız gereken karara göre planlanmalıdır. Bağımsız fabrika seyahat desteği, müşteri Sourcing Ally aracılığıyla sipariş vermediğinde günde $150 olarak uygulanır.",
            "relatedLabels": [
              "Çin şehirleri",
              "Proje brifi başlatın"
            ]
          },
          {
            "slug": "is-yiwu-a-factory-or-a-market",
            "category": "Çin lokasyonları",
            "question": "Yiwu bir fabrika lokasyonu mu yoksa toptan pazar mı?",
            "shortAnswer": "Yiwu güçlü şekilde toptan pazar aktivitesiyle ilişkilendirilir, ancak bir pazar ziyareti ile bir fabrika ziyareti farklı amaçlara hizmet eder.",
            "answer": "Bir pazar ürün türlerini, ticaret şirketlerini, tedarikçileri veya ürün fikirlerini keşfetmenize yardımcı olabilir. Bu, bir ürünün nerede üretildiğini otomatik olarak göstermez. Amaç tedarikçi doğrulama veya üretim görüşmesi ise gerçek fabrika adresini onaylayın ve karar kriterlerinize uygun bir ziyaret düzenleyin.",
            "relatedLabels": [
              "Yiwu rehberi",
              "Tedarikçi doğrulama"
            ]
          }
        ]
      },
      {
        "title": "Nakliye, uyumluluk ve iletişim",
        "intro": "Bu konular önemlidir, ancak ürün, pazar ve ticari ayrıntılar her gerçek sevkiyat için kontrol edilmelidir.",
        "questions": [
          {
            "slug": "what-should-i-check-before-shipping-from-china",
            "category": "Nakliye ve uyumluluk",
            "question": "Çin'den gönderim yapmadan önce neyi kontrol etmeliyim?",
            "shortAnswer": "Göndermeden önce anlaşılan ürün, miktar, ambalaj, ticari belgeler, taşıma planı, hedef pazar gereksinimleri ve her görev için kimin sorumlu olduğunu doğrulayın.",
            "answer": "Nakliye soruları ürüne, güzergaha, ticari şartlara, ithalatçıya, navlun sağlayıcısına ve varış ülkesine bağlıdır. Bitmiş ürün kontrolleri, ambalaj, fatura ve paketleme listesi detayları, etiketleme, ilgili test veya sertifikasyon soruları, devretme zamanlaması ve sorumluları kapsayan yazılı bir kontrol listesi hazırlayın. Gerçek sevkiyat için güncel lojistik ve gümrük rehberliği alın.",
            "relatedLabels": [
              "Gönderim rehberi",
              "Feragatname"
            ]
          },
          {
            "slug": "how-do-i-check-product-compliance",
            "category": "Nakliye ve uyumluluk",
            "question": "İthalattan önce ürün uyumluluğunu nasıl kontrol ederim?",
            "shortAnswer": "İlk olarak ürünü, kullanım amacını, kullanıcı grubunu, hedef pazarı, ithalatçı rolünü, etiketleri ve uygulanabilir test veya sertifikasyon sorularını belirleyin. Ardından güncel gereksinimleri nitelikli kaynaklarla doğrulayın.",
            "answer": "Her ürün için tek bir uyumluluk kontrol listesi yoktur. Bir çocuk ürünü, elektronik eşya, tekstil, mobilya öğesi, gıda teması ürünü veya sıradan ev eşyası farklı gereksinimler doğurabilir. Genel tedarik rehberliği soruları belirlemenize yardımcı olabilir, ancak gerçek bir sevkiyat için yasal, gümrük, vergi, güvenlik veya test tavsiyesi değildir.",
            "relatedLabels": [
              "Uyumluluk rehberi",
              "Kullanım koşulları"
            ]
          },
          {
            "slug": "why-is-clear-supplier-communication-important",
            "category": "Nakliye ve uyumluluk",
            "question": "Çinli tedarikçilerle net iletişim neden önemlidir?",
            "shortAnswer": "Net yazılı gereksinimler, farklı kişilerin ürün, kalite, ambalaj, zamanlama veya fiyat beklentilerini farklı yorumlaması riskini azaltır.",
            "answer": "Ürün boyutları, malzemeler, renk referansları, marka uygulaması, ambalaj, miktar aralığı, zaman çizelgesi, kabul kriterleri ve soruları içeren yazılı bir brif kullanın. Varsayılan anlamlara güvenmeyin. Bir değişiklik yapıldığında bunu açıkça kaydedin ve hangi numune, çizim, dosya veya spesifikasyonun güncel sürüm olduğunu teyit edin.",
            "relatedLabels": [
              "Çeviri ve iletişim",
              "İş kültürü rehberi"
            ]
          }
        ]
      }
    ]
  },
  "fr": {
    "groups": [
      {
        "title": "Choisir un partenaire de sourcing",
        "intro": "Commencez par déterminer le travail à réaliser localement — pas seulement par savoir si quelqu'un peut trouver le nom d'un fournisseur.",
        "questions": [
          {
            "slug": "what-does-a-china-sourcing-agent-do",
            "category": "Choisir un agent",
            "question": "Que fait un agent de sourcing en Chine ?",
            "shortAnswer": "Un agent de sourcing peut aider à rechercher des fournisseurs, communiquer les exigences, organiser des échantillons, coordonner des visites, suivre les travaux convenus et assister sur les questions de qualité ou d’emballage.",
            "answer": "L'étendue exacte varie. Une conversation utile commence par le produit, la quantité, la destination, le calendrier, les hypothèses budgétaires et la décision pour laquelle vous demandez de l'aide. Sourcing Ally peut soutenir la recherche de fournisseurs, les vérifications d'échantillons, les contrôles d'usine ou de fournisseur, les contrôles du produit fini, la coordination de l'emballage, les déplacements en usine et la traduction selon ce qui est convenu pour le projet.",
            "relatedLabels": [
              "Découvrir les services",
              "Comment importer de Chine"
            ]
          },
          {
            "slug": "when-is-a-sourcing-agent-useful",
            "category": "Choisir un agent",
            "question": "Quand un agent de sourcing est‑il utile ?",
            "shortAnswer": "Un soutien local est utile lorsque la distance, la langue, le niveau de risque produit, l'accès à l'usine ou la coordination rendent difficile la gestion directe du projet.",
            "answer": "Un agent n'est pas automatiquement nécessaire pour chaque achat. Il peut être particulièrement utile lorsque vous avez besoin d'une visite d'usine, d'un second regard sur un échantillon, d'aide pour traduire des exigences produit, d'assistance pour comparer des fournisseurs ou de quelqu'un pour vérifier une étape convenue du processus en Chine. Définissez d'abord ce que vous pouvez gérer directement et ce qui nécessite un travail local.",
            "relatedLabels": [
              "Support pour déplacements en usine",
              "Recherche de fournisseurs"
            ]
          },
          {
            "slug": "how-do-sourcing-agent-fees-work",
            "category": "Choisir un agent",
            "question": "Comment fonctionnent les frais de Sourcing Ally ?",
            "shortAnswer": "Lorsqu'un client commande via Sourcing Ally, les frais minimaux de service de sourcing sont de 5%. Le support de déplacement indépendant en usine est de 150 $ par jour lorsque le client ne commande pas via Sourcing Ally.",
            "answer": "La portée finale et le traitement des frais doivent être convenus avant le début des travaux, car un produit, un plan de déplacement, une tâche d'inspection et une demande de coordination peuvent nécessiter des niveaux de travail différents. Demandez ce qui est inclus, quelles informations vous devez fournir, quels livrables vous recevrez et comment les déplacements supplémentaires ou les coûts de tiers seraient pris en charge avant de confirmer un projet.",
            "relatedLabels": [
              "Guide des frais de sourcing",
              "Contactez Sourcing Ally"
            ]
          }
        ]
      },
      {
        "title": "Fournisseurs, échantillons et MOQ",
        "intro": "Un premier brief plus précis et une méthode de comparaison cohérente réduisent de nombreuses erreurs de sourcing évitables.",
        "questions": [
          {
            "slug": "how-many-suppliers-should-i-compare",
            "category": "Fournisseurs et échantillons",
            "question": "Combien de fournisseurs devrais‑je comparer ?",
            "shortAnswer": "Comparez les fournisseurs selon les mêmes exigences écrites, puis présélectionnez en fonction de la capacité, de la communication, de la qualité des échantillons, de l'adéquation commerciale et de la vérification — pas uniquement du prix.",
            "answer": "Il n'y a pas de nombre universel. L'important est de comparer ce qui est comparable. Donnez à chaque fournisseur potentiel le même brief produit, la même fourchette de quantités, les mêmes matériaux, exigences d'emballage, marché de destination, calendrier et questions. Une cotation basse peut signifier des matériaux différents, un périmètre incomplet, une hypothèse de quantité différente ou un délai de production différent.",
            "relatedLabels": [
              "Liste de contrôle : vérification des fournisseurs",
              "Service de sourcing de fournisseurs"
            ]
          },
          {
            "slug": "what-should-i-check-in-a-product-sample",
            "category": "Fournisseurs et échantillons",
            "question": "Que dois‑je vérifier dans un échantillon de produit ?",
            "shortAnswer": "Vérifiez si l'échantillon correspond au brief écrit et testez ce qui importe pour son usage réel : matériaux, dimensions, finition, fonction, emballage et marché de destination.",
            "answer": "Un échantillon ne doit pas être approuvé uniquement parce qu'il est esthétique sur une photo. Enregistrez la version de l'échantillon, mesurez les dimensions importantes, comparez matériaux et couleurs au brief, testez le produit comme le ferait un client et notez chaque correction. L'échantillon devient plus utile lorsque le retour est spécifique et documenté avant le début de la production.",
            "relatedLabels": [
              "Sourcing d'échantillons",
              "Liste de contrôle qualité"
            ]
          },
          {
            "slug": "what-does-moq-mean",
            "category": "Fournisseurs et échantillons",
            "question": "Que signifie MOQ lors du sourcing depuis la Chine ?",
            "shortAnswer": "MOQ signifie minimum order quantity (quantité minimale de commande) : la plus petite quantité qu'un fournisseur accepte de produire ou de vendre selon une spécification donnée.",
            "answer": "Le MOQ peut varier selon la couleur du matériau, le logo, l'outillage, l'emballage, les composants et le procédé de production. Un fournisseur peut proposer un MOQ plus bas à un prix unitaire plus élevé, ou un MOQ plus élevé lorsque la personnalisation est impliquée. Demandez si le MOQ s'applique au produit, à la couleur, à l'emballage et à la personnalisation exacts dont vous avez besoin — et pas seulement à une fiche produit générique.",
            "relatedLabels": [
              "Guide : MOQ et quantités de commande",
              "Guides produits"
            ]
          }
        ]
      },
      {
        "title": "Contrôles d'usine et contrôle qualité",
        "intro": "Une visite ou une inspection doit répondre à une question définie. Elle ne remplace pas une spécification claire et n'élimine pas les risques liés au fournisseur.",
        "questions": [
          {
            "slug": "what-can-a-factory-visit-confirm",
            "category": "Usine et qualité",
            "question": "Qu'est‑ce qu'une visite d'usine peut confirmer ?",
            "shortAnswer": "Une visite peut aider à vérifier l'emplacement réel, l'équipement visible, l'environnement de production, la communication et les questions spécifiques convenues avant la visite.",
            "answer": "Une visite d'usine est la plus utile lorsque vous décidez à l'avance quelles preuves comptent : adresse, process produit, statut des échantillons, machines, emballage, étape de production ou une préoccupation particulière. Elle ne peut pas garantir la performance future, la qualité finale du produit, la conformité légale ou chaque détail qui peut devenir pertinent ultérieurement. Documentez les observations et reliez‑les à un plan de suivi écrit.",
            "relatedLabels": [
              "Contrôles d'usine et de fournisseurs",
              "Support pour déplacements en usine"
            ]
          },
          {
            "slug": "when-should-products-be-inspected",
            "category": "Usine et qualité",
            "question": "Quand les produits doivent‑ils être inspectés ?",
            "shortAnswer": "Le bon stade dépend du produit et du risque, mais les questions de qualité sont généralement plus faciles à résoudre avant qu'un lot complet ne soit terminé ou expédié.",
            "answer": "Un plan qualité utile peut inclure des vérifications d'échantillons, des contrôles pendant la production et une inspection finale avant l'expédition. Décidez des exigences produit, des tolérances acceptables, des tests fonctionnels, des contrôles d'emballage et des exigences documentaires avant l'inspection. Si les attentes sont floues, une inspection peut identifier un problème sans indiquer la marche à suivre.",
            "relatedLabels": [
              "Service de contrôle qualité",
              "Liste de contrôle qualité"
            ]
          },
          {
            "slug": "what-is-the-difference-between-a-factory-check-and-final-inspection",
            "category": "Usine et qualité",
            "question": "Quelle est la différence entre un contrôle d'usine et une inspection finale du produit ?",
            "shortAnswer": "Un contrôle d'usine se concentre sur le fournisseur ou l'environnement de production ; une inspection finale se concentre sur les produits finis par rapport aux exigences convenues.",
            "answer": "Ils répondent à des questions différentes. Un contrôle d'usine peut examiner le site, les opérations visibles, le process et la communication. Une inspection finale du produit peut examiner la quantité, l'apparence, la fonction, les mesures, l'emballage et les défauts ou tolérances convenus. Les deux nécessitent un périmètre écrit et doivent être liés au brief produit réel.",
            "relatedLabels": [
              "Contrôles d'usine",
              "Contrôles qualité finaux"
            ]
          }
        ]
      },
      {
        "title": "Localisations en Chine et déplacements",
        "intro": "Les pages de ville sont utiles pour planifier des itinéraires et des questions logistiques. Elles ne constituent pas une preuve qu'une usine particulière convient.",
        "questions": [
          {
            "slug": "what-is-shenzhen-known-for-in-sourcing",
            "category": "Localisations en Chine",
            "question": "Pour quoi Shenzhen est‑elle connue en matière de sourcing ?",
            "shortAnswer": "Shenzhen est généralement associée à l'électronique et à un réseau plus large d'activité de développement produit, de composants, d'emballage et de logistique dans le sud de la Chine.",
            "answer": "La question utile n'est pas seulement « pour quoi Shenzhen est‑elle connue ? » mais « quel process, quelle capacité fournisseur, quel composant ou quelle réunion dois‑je rechercher ? ». L'association à une ville ne vérifie pas un fournisseur. Demandez l'adresse réelle, définissez l'objet de la visite et documentez les questions produit que vous devez voir résolues.",
            "relatedLabels": [
              "Guide de sourcing — Shenzhen",
              "Guide électronique"
            ]
          },
          {
            "slug": "can-sourcing-ally-travel-outside-shenzhen",
            "category": "Localisations en Chine",
            "question": "Sourcing Ally peut‑il se déplacer en dehors de Shenzhen ?",
            "shortAnswer": "Sourcing Ally est basé à Shenzhen et peut intervenir dans les zones proches de la province du Guangdong. Les déplacements ailleurs en Chine peuvent être discutés lorsque le projet l'exige.",
            "answer": "Pour des zones proches comme Guangzhou, Foshan, Dongguan, Zhongshan et Huizhou, les déplacements locaux peuvent être pratiques. Pour des lieux plus éloignés comme Yiwu, un déplacement doit être planifié autour d'adresses d'usine réelles, des objectifs, du calendrier et de la décision à prendre. Lorsque le client ne commande pas via Sourcing Ally, le soutien indépendant pour les déplacements en usine est facturé 150 $ par jour.",
            "relatedLabels": [
              "Villes chinoises",
              "Démarrer un brief de projet"
            ]
          },
          {
            "slug": "is-yiwu-a-factory-or-a-market",
            "category": "Localisations en Chine",
            "question": "Yiwu est‑elle un site de production ou un marché de gros ?",
            "shortAnswer": "Yiwu est fortement associée à l'activité des marchés de gros, mais une visite de marché et une visite d'usine répondent à des objectifs différents.",
            "answer": "Un marché peut vous aider à découvrir des types de produits, des sociétés commerciales, des fournisseurs ou des idées de produits. Il ne montre pas automatiquement où un produit est fabriqué. Si l'objectif est la vérification d'un fournisseur ou une discussion sur la production, confirmez l'adresse réelle de l'usine et organisez une visite qui corresponde à vos critères de décision.",
            "relatedLabels": [
              "Guide Yiwu",
              "Liste de contrôle : vérification des fournisseurs"
            ]
          }
        ]
      },
      {
        "title": "Expédition, conformité et communication",
        "intro": "Ces sujets sont importants, mais les détails produit, marché et commerciaux doivent être vérifiés pour chaque envoi réel.",
        "questions": [
          {
            "slug": "what-should-i-check-before-shipping-from-china",
            "category": "Expédition et conformité",
            "question": "Que dois‑je vérifier avant d'expédier des marchandises depuis la Chine ?",
            "shortAnswer": "Avant l'expédition, confirmez le produit convenu, la quantité, l'emballage, les documents commerciaux, le plan de transport, les exigences du marché de destination et qui est responsable de chaque tâche.",
            "answer": "Les questions d'expédition dépendent du produit, de l'itinéraire, des termes commerciaux, de l'importateur, du prestataire de fret et du pays de destination. Élaborez une checklist écrite couvrant les contrôles du produit fini, l'emballage, les détails de la facture et du packing list, l'étiquetage, les tests ou certifications pertinents, les dates de remise et la partie responsable. Obtenez des conseils logistiques et douaniers à jour pour l'envoi concret.",
            "relatedLabels": [
              "Guide : expédition depuis la Chine",
              "Clause de non-responsabilité"
            ]
          },
          {
            "slug": "how-do-i-check-product-compliance",
            "category": "Expédition et conformité",
            "question": "Comment vérifier la conformité d'un produit avant l'importation ?",
            "shortAnswer": "Commencez par le produit, l'usage prévu, le groupe d'utilisateurs, le marché de destination, le rôle de l'importateur, l'étiquetage et les questions de tests ou certifications applicables, puis vérifiez les exigences actuelles auprès de sources qualifiées.",
            "answer": "Il n'existe pas de checklist unique pour tous les produits. Un produit pour enfants, un élément électronique, un textile, un meuble, un produit en contact alimentaire ou un bien domestique courant peut générer des exigences différentes. Les conseils généraux de sourcing aident à identifier les questions, mais ils ne constituent pas un avis juridique, douanier, fiscal, de sécurité ou de test pour un envoi réel.",
            "relatedLabels": [
              "Guide : certification et conformité produit",
              "Conditions d'utilisation"
            ]
          },
          {
            "slug": "why-is-clear-supplier-communication-important",
            "category": "Expédition et conformité",
            "question": "Pourquoi une communication claire avec les fournisseurs chinois est‑elle importante ?",
            "shortAnswer": "Des exigences écrites claires réduisent le risque que différentes personnes interprètent différemment les attentes sur le produit, la qualité, l'emballage, les délais ou le prix.",
            "answer": "Utilisez un brief écrit contenant les dimensions produit, les matériaux, les références de couleur, l'identité de marque, les exigences d'emballage, la fourchette de quantité, le marché cible, le calendrier, les critères d'acceptation et les questions. Ne supposez pas que le sens est implicite. Lorsqu'un changement est effectué, consignez‑le clairement et confirmez quelle version de l'échantillon, du dessin, du fichier ou de la spécification est la version courante.",
            "relatedLabels": [
              "Traduction et communication",
              "Guide : culture commerciale et communication en Chine"
            ]
          }
        ]
      }
    ]
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

export const questionLocales = {
  ...baseQuestionLocales,
  ja: { groups: localizeValue(questionGroups, generated.ja) },
  de: { groups: localizeValue(questionGroups, generated.de) },
  ar: { groups: localizeValue(questionGroups, generated.ar) },
  id: { groups: localizeValue(questionGroups, generated.id) },
  it: { groups: localizeValue(questionGroups, generated.it) },
} as const;
