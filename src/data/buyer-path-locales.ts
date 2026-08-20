import { buyerPaths } from './buyer-paths';
import generatedDecisionSuiteTranslations from './generatedDecisionSuiteTranslations.json';

const baseBuyerPathLocales = {
  "es": {
    "paths": [
      {
        "slug": "first-import",
        "label": "Comienza aquí",
        "title": "Tu primer pedido de producto desde China",
        "description": "Un camino práctico para compradores que tienen una idea de producto pero necesitan una ruta más clara desde la investigación inicial hasta la planificación del envío.",
        "promise": "No comiences por un nombre de proveedor. Comienza por la decisión de producto que necesitas tomar.",
        "stages": [
          {
            "title": "Define el producto",
            "text": "Escribe el uso previsto, el cliente objetivo, el rango de cantidades, los materiales, las dimensiones, el destino y el cronograma antes de solicitar una cotización."
          },
          {
            "title": "Compara opciones consistentes",
            "text": "Entrega a los proveedores potenciales el mismo brief por escrito para que las cotizaciones y las conversaciones sobre muestras puedan compararse de forma justa."
          },
          {
            "title": "Verifica lo que importa",
            "text": "Utiliza muestras, inspecciones de fábrica o proveedor y planificación de calidad para responder las preguntas que la distancia dificulta."
          },
          {
            "title": "Prepara el envío",
            "text": "Confirma el producto, el embalaje, los documentos, la responsabilidad del transporte y las cuestiones del mercado de destino antes de que las mercancías se envíen."
          }
        ],
        "risks": [
          {
            "title": "Comenzar con un brief vago",
            "text": "Un proveedor puede cotizar un producto, material o alcance diferente al que tienes en mente."
          },
          {
            "title": "Comparar solo el precio",
            "text": "Una cotización baja puede excluir embalaje, pruebas, una cantidad distinta o suponer una calidad diferente."
          },
          {
            "title": "Aprobar sin un registro escrito",
            "text": "Los cambios son más difíciles de gestionar cuando la muestra, el archivo o el requisito vigente no están claros."
          }
        ],
        "checklist": [
          "Propósito del producto y especificaciones clave",
          "Cantidad objetivo o rango de cantidades",
          "Mercado de destino y cronograma",
          "Imágenes de referencia, dibujos o enlaces al producto",
          "Requisitos de embalaje y marca",
          "La decisión principal con la que necesitas apoyo local"
        ],
        "nextLabels": [
          "Elabora tu brief de proyecto",
          "Lee la guía de importación",
          "Explora preguntas sobre abastecimiento"
        ]
      },
      {
        "slug": "brand-private-label",
        "label": "Para marcas",
        "title": "Construye un proceso de abastecimiento de marca propia más controlado",
        "description": "Un camino para marcas que necesitan personalización, muestras, embalaje, especificaciones consistentes y un registro más claro de decisiones.",
        "promise": "Tu logo es solo un detalle. El brief del producto, el proceso de muestras, las decisiones de materiales, el embalaje y el registro de aprobaciones son igual de importantes.",
        "stages": [
          {
            "title": "Define el sistema de producto",
            "text": "Describe el producto, los materiales, el caso de uso, las tolerancias, el tratamiento de la marca y el embalaje como una especificación conectada."
          },
          {
            "title": "Realiza prototipos y revisa",
            "text": "Utiliza un proceso documentado de muestras para probar el ajuste, la función, el acabado, el embalaje y los cambios entre versiones."
          },
          {
            "title": "Controla las decisiones del producto",
            "text": "Mantén la versión aprobada, el arte, las dimensiones, los materiales y los detalles de embalaje visibles antes de que comience la producción."
          },
          {
            "title": "Verifica antes del envío",
            "text": "Crea una lista de verificación de calidad y embalaje específica del producto para el lote final."
          }
        ],
        "risks": [
          {
            "title": "Tratar la personalización solo como una solicitud de logo",
            "text": "La personalización puede afectar el MOQ, el material, el arte, el embalaje, el proceso, el costo y el cronograma."
          },
          {
            "title": "Aprobar una muestra sin probar su uso",
            "text": "Una muestra debe evaluarse según la forma en que un cliente real la utilizará, no solo en cómo se fotografía."
          },
          {
            "title": "Cambiar el embalaje demasiado tarde",
            "text": "El arte del embalaje, las etiquetas y los insertos deben revisarse como parte del plan de producto."
          }
        ],
        "checklist": [
          "Referencia de producto y caso de uso",
          "Activos de marca y archivos de arte",
          "Requisitos de material, color y acabado",
          "Comentarios sobre muestras y registro de aprobación",
          "Preguntas sobre embalaje, etiquetado y códigos de barras",
          "Preguntas sobre cumplimiento en el mercado de destino"
        ],
        "nextLabels": [
          "Planifica un brief de proyecto",
          "Lee la guía sobre muestras",
          "Explora soporte de embalaje"
        ]
      },
      {
        "slug": "marketplace-seller",
        "label": "Para marketplaces",
        "title": "Abastece pensando en la ficha del producto y el cumplimiento de pedidos",
        "description": "Un camino para vendedores de marketplaces y comercio electrónico que necesitan conectar cuestiones de producto, embalaje, etiquetado, inspección, envío y reabastecimiento.",
        "promise": "Un producto no está listo para un marketplace simplemente porque un proveedor pueda fabricarlo. Su embalaje, la información, el uso por parte del cliente y las cuestiones de gestión de pedidos deben planificarse conjuntamente.",
        "stages": [
          {
            "title": "Valida el brief del producto",
            "text": "Aclara el producto, sus variaciones, expectativas de uso por el cliente, rango de cantidad, embalaje y destino antes de comparar proveedores."
          },
          {
            "title": "Prueba la muestra y el embalaje",
            "text": "Verifica la función del producto, el acabado, el embalaje orientado al cliente y cualquier duda sobre etiquetado o códigos de barras."
          },
          {
            "title": "Prepara la verificación final",
            "text": "Conecta el plan de calidad con el producto real, sus variaciones y el embalaje que recibirá el cliente."
          },
          {
            "title": "Planifica la entrega del envío",
            "text": "Confirma las responsabilidades de transporte y las cuestiones de documentación con los profesionales actuales para el envío real."
          }
        ],
        "risks": [
          {
            "title": "Confundir los requisitos del producto y del listado",
            "text": "Un producto puede ser utilizable pero aun así generar problemas de embalaje, etiquetado, variaciones o información para el cliente."
          },
          {
            "title": "Ignorar el control de variaciones",
            "text": "Diferentes colores, tallas o presentaciones pueden requerir distintos controles de producto y embalaje."
          },
          {
            "title": "Dejar las cuestiones de gestión de pedidos para el final",
            "text": "El proceso de entrega debe informar las decisiones de embalaje y etiquetado con antelación."
          }
        ],
        "checklist": [
          "Lista de producto y variaciones",
          "Expectativas de uso por el cliente y de calidad",
          "Preguntas sobre embalaje, etiquetas y códigos de barras",
          "Requisitos de muestra e inspección final",
          "Plan de destino y gestión de pedidos",
          "Preguntas sobre reabastecimiento y reemplazos"
        ],
        "nextLabels": [
          "Elabora tu brief de proyecto para marketplace",
          "Lee la guía de envío",
          "Explora las guías de producto"
        ]
      },
      {
        "slug": "product-development",
        "label": "Para nuevos productos",
        "title": "Pasa de una idea de producto a una conversación de fabricación más clara",
        "description": "Un camino para fundadores que tienen una idea, muestra de referencia, dibujo o requisito pero necesitan traducirlo a un proceso al que los proveedores puedan responder.",
        "promise": "Un fabricante no puede producir de manera confiable algo que no se ha descrito con claridad. Convierte la idea en un sistema de producto por escrito antes de solicitar una cotización confiable.",
        "stages": [
          {
            "title": "Captura el concepto",
            "text": "Describe el usuario, el caso de uso, la función del producto, preguntas sobre materiales, dimensiones, referencias visuales y restricciones."
          },
          {
            "title": "Plantea preguntas de fabricación",
            "text": "Verifica si un proveedor puede fabricar el producto previsto y qué información se necesita para evaluarlo."
          },
          {
            "title": "Usa muestras como decisiones",
            "text": "Trata la muestra como un punto de evidencia: pruébala, registra comentarios e identifica qué cambiar antes de la siguiente versión."
          },
          {
            "title": "Fija la versión aprobada",
            "text": "Antes de la producción, haz que la especificación vigente, el embalaje y las expectativas de calidad sean visibles y trazables."
          }
        ],
        "risks": [
          {
            "title": "Pedir una cotización antes de definir el producto",
            "text": "Los proveedores pueden llenar lagunas con sus propias suposiciones, lo que dificulta comparar cotizaciones."
          },
          {
            "title": "Dar retroalimentación estética sin comentar la funcionalidad",
            "text": "Un producto puede verse correcto y aun así fallar en su uso previsto."
          },
          {
            "title": "Perder el historial de versiones de la muestra",
            "text": "Los cambios deben vincularse a una versión visible, dibujo, archivo o requisito por escrito."
          }
        ],
        "checklist": [
          "Caso de uso del producto y usuario objetivo",
          "Imágenes de referencia o dibujos iniciales",
          "Dimensiones críticas y materiales",
          "Características que deben funcionar",
          "Presupuesto y supuestos de cantidad conocidos",
          "Preguntas abiertas que requieren aporte del proveedor"
        ],
        "nextLabels": [
          "Crear un brief de desarrollo de producto",
          "Leer preguntas sobre muestras",
          "Explorar la búsqueda de proveedores"
        ]
      },
      {
        "slug": "china-visit",
        "label": "Para viajes a China",
        "title": "Planifica un viaje a proveedores en China centrado en decisiones, no en turismo",
        "description": "Para compradores que desean visitar fábricas o mercados y necesitan una ruta que produzca evidencia útil y siguientes acciones.",
        "promise": "Una visita a China tiene valor cuando cada parada responde a una decisión. Comienza con las preguntas, las direcciones y la evidencia que necesitas registrar.",
        "stages": [
          {
            "title": "Define el objetivo del viaje",
            "text": "Decide si cada parada es para descubrimiento de producto, verificación de fábrica, revisión de muestras, discusión de producción o investigación de mercado."
          },
          {
            "title": "Diseña la ruta",
            "text": "Usa ubicaciones reales de proveedores y tiempos de traslado realistas; los centros cercanos de Guangdong a menudo pueden planificarse juntos."
          },
          {
            "title": "Prepara una lista de verificación para la visita",
            "text": "Registra las preguntas, referencias de producto, personas, fotos, observaciones y acciones de seguimiento importantes."
          },
          {
            "title": "Convierte las observaciones en acciones",
            "text": "Después del viaje, compara hallazgos con el brief y documenta qué proveedor, muestra o siguiente paso necesita atención."
          }
        ],
        "risks": [
          {
            "title": "Intentar visitar demasiados lugares",
            "text": "Un itinerario apresurado puede generar impresiones sin suficiente evidencia específica del producto."
          },
          {
            "title": "Confundir una visita al mercado con una visita a fábrica",
            "text": "Las dos actividades responden preguntas distintas y deben planificarse de forma diferente."
          },
          {
            "title": "Irse sin un registro de seguimiento",
            "text": "Una visita es más útil cuando las observaciones se conectan a una decisión escrita y a la siguiente acción."
          }
        ],
        "checklist": [
          "Direcciones reales de proveedores o mercados",
          "Un propósito claro para cada parada",
          "Muestras de producto, referencias y preguntas",
          "Tiempos de traslado entre ubicaciones",
          "Lista de verificación de fotos y observaciones",
          "Responsable y fecha para el seguimiento posterior a la visita"
        ],
        "nextLabels": [
          "Crear un brief para la visita a fábrica",
          "Explorar ciudades de China",
          "Leer preguntas sobre visitas a fábrica"
        ]
      },
      {
        "slug": "existing-supplier-rescue",
        "label": "Para órdenes activas",
        "title": "Reconduce una situación complicada con un proveedor hacia un proceso claro",
        "description": "Un camino para compradores que ya tienen un proveedor pero necesitan información más clara sobre calidad, comunicación, embalaje, muestras o avance de producción.",
        "promise": "Cuando un pedido resulta confuso, reduce el problema a hechos visibles: lo acordado, lo observado, la decisión pendiente y la evidencia que se necesita a continuación.",
        "stages": [
          {
            "title": "Reconstruye el registro por escrito",
            "text": "Reúne el brief actual del producto, cotizaciones, muestras, cambios, detalles de embalaje, expectativas de calidad y mensajes pendientes."
          },
          {
            "title": "Identifica el punto de decisión",
            "text": "Separa un problema de calidad, un problema de comunicación, una pregunta de producción, un cambio de embalaje o la necesidad de viajar en lugar de tratar todo como un solo asunto."
          },
          {
            "title": "Verifica la evidencia relevante",
            "text": "Una comprobación de muestras, visita a la fábrica, tarea de comunicación con el proveedor o inspección final debe estar vinculada a la preocupación real."
          },
          {
            "title": "Crea la siguiente acción por escrito",
            "text": "Confirma el requisito actual, responsable, fecha, la evidencia esperada y qué sucederá después de la respuesta."
          }
        ],
        "risks": [
          {
            "title": "Resolver por volumen de mensajes",
            "text": "Muchos mensajes no ayudan si no están claros el problema exacto, la versión aprobada y la evidencia requerida."
          },
          {
            "title": "Mezclar asuntos urgentes e importantes",
            "text": "Prioriza lo que podría afectar al producto, pago, envío o uso por parte del cliente."
          },
          {
            "title": "Usar tranquilidad general en lugar de evidencia",
            "text": "Solicita hechos específicos del producto, fotos, registros o verificaciones acordadas que coincidan con la preocupación."
          }
        ],
        "checklist": [
          "Requisitos actuales de producto y embalaje",
          "Estado del pedido y calendario",
          "Fotos, videos, muestras o documentos ya disponibles",
          "Problema exacto y resultado deseado",
          "Mensajes del proveedor y preguntas abiertas",
          "Qué verificación local o apoyo de comunicación puede ser necesario"
        ],
        "nextLabels": [
          "Crear un brief de rescate",
          "Explorar control de calidad",
          "Leer preguntas sobre abastecimiento"
        ]
      }
    ]
  },
  "pt": {
    "paths": [
      {
        "slug": "first-import",
        "label": "Comece aqui",
        "title": "Seu primeiro pedido de produto da China",
        "description": "Uma rota prática para compradores que têm uma ideia de produto, mas precisam de um caminho mais claro da pesquisa inicial ao planejamento do envio.",
        "promise": "Não comece com o nome de um fornecedor. Comece pela decisão de produto que você precisa tomar.",
        "stages": [
          {
            "title": "Defina o produto",
            "text": "Descreva o uso pretendido, cliente-alvo, faixa de quantidade, materiais, dimensões, destino e prazo antes de pedir uma cotação."
          },
          {
            "title": "Compare opções consistentes",
            "text": "Forneça aos potenciais fornecedores o mesmo briefing escrito para que cotações e conversas sobre amostras possam ser comparadas de forma justa."
          },
          {
            "title": "Verifique o que importa",
            "text": "Use amostras, verificações de fábrica ou do fornecedor e planejamento de qualidade para responder às questões que a distância torna difíceis."
          },
          {
            "title": "Prepare o embarque",
            "text": "Confirme o produto, embalagem, documentos, responsabilidades de transporte e questões sobre o mercado de destino antes do envio das mercadorias."
          }
        ],
        "risks": [
          {
            "title": "Começar com um briefing vago",
            "text": "Um fornecedor pode cotar um produto, material ou escopo diferente do que você imaginou."
          },
          {
            "title": "Comparar apenas preço",
            "text": "Uma cotação baixa pode não incluir embalagem, testes, uma quantidade diferente ou assumir uma qualidade distinta."
          },
          {
            "title": "Aprovar sem registro escrito",
            "text": "Alterações são mais difíceis de gerenciar quando a amostra, arquivo ou requisito atual não está claro."
          }
        ],
        "checklist": [
          "Finalidade do produto e especificações principais",
          "Quantidade alvo ou faixa de quantidade",
          "Mercado de destino e cronograma",
          "Imagens de referência, desenhos ou links do produto",
          "Requisitos de embalagem e marca",
          "A principal decisão para a qual você precisa de suporte local"
        ],
        "nextLabels": [
          "Elabore o briefing do seu projeto",
          "Leia o guia de importação",
          "Explore perguntas sobre sourcing"
        ]
      },
      {
        "slug": "brand-private-label",
        "label": "Para marcas",
        "title": "Construa um processo de sourcing de marca própria mais controlado",
        "description": "Uma rota para marcas que precisam de personalização, amostras, embalagem, especificações consistentes e um registro mais claro das decisões.",
        "promise": "Seu logo é apenas um detalhe. O briefing do produto, o processo de amostras, as decisões sobre materiais, a embalagem e o registro de aprovação são igualmente importantes.",
        "stages": [
          {
            "title": "Defina o sistema do produto",
            "text": "Descreva o produto, materiais, caso de uso, tolerâncias, tratamento de marca e embalagem como uma especificação conectada."
          },
          {
            "title": "Prototipar e revisar",
            "text": "Use um processo de amostras documentado para testar ajuste, função, acabamento, embalagem e as alterações entre versões."
          },
          {
            "title": "Controle as decisões do produto",
            "text": "Mantenha a versão aprovada, os arquivos de arte, dimensões, materiais e detalhes de embalagem visíveis antes do início da produção."
          },
          {
            "title": "Verifique antes do envio",
            "text": "Crie uma lista de verificação de qualidade e embalagem específica para o lote final."
          }
        ],
        "risks": [
          {
            "title": "Tratar a personalização apenas como um pedido de logotipo",
            "text": "A customização pode afetar MOQ, material, arte, embalagem, processo, custo e cronograma."
          },
          {
            "title": "Aprovar uma amostra sem testar o uso",
            "text": "Uma amostra deve ser avaliada pela forma como um cliente real a usará, não apenas por como ela fica em fotos."
          },
          {
            "title": "Alterar a embalagem muito tarde",
            "text": "A arte da embalagem, rótulos e inserções devem ser revisados como parte do plano do produto."
          }
        ],
        "checklist": [
          "Referência do produto e caso de uso",
          "Ativos de marca e arquivos de arte",
          "Requisitos de material, cor e acabamento",
          "Feedback da amostra e registro de aprovação",
          "Questões de embalagem, rotulagem e código de barras",
          "Questões de conformidade do mercado de destino"
        ],
        "nextLabels": [
          "Planeje um briefing do projeto",
          "Leia o guia de amostras",
          "Explore suporte de embalagem"
        ]
      },
      {
        "slug": "marketplace-seller",
        "label": "Para marketplaces",
        "title": "Source com a listagem do produto e o fulfilment em mente",
        "description": "Uma rota para vendedores de marketplaces e comércio eletrônico que precisam conectar questões de produto, embalagem, rotulagem, inspeção, envio e reordenação.",
        "promise": "O produto não está pronto para um marketplace apenas porque um fornecedor pode fabricá-lo. Sua embalagem, informações, uso pelo cliente e questões de fulfillment precisam ser planejadas em conjunto.",
        "stages": [
          {
            "title": "Valide o briefing do produto",
            "text": "Esclareça o produto, variações, expectativas de uso pelo cliente, faixa de quantidade, embalagem e destino antes de comparar fornecedores."
          },
          {
            "title": "Teste a amostra e a embalagem",
            "text": "Verifique a função do produto, acabamento, embalagem de apresentação ao cliente e quaisquer questões de rotulagem ou código de barras."
          },
          {
            "title": "Prepare a verificação final",
            "text": "Conecte o plano de qualidade ao produto real, suas variações e à embalagem que o cliente receberá."
          },
          {
            "title": "Planeje a entrega do embarque",
            "text": "Confirme responsabilidades de transporte e questões de documentação com os profissionais responsáveis para o embarque real."
          }
        ],
        "risks": [
          {
            "title": "Confundir requisitos do produto e da listagem",
            "text": "Um produto pode ser utilizável, mas ainda criar problemas de embalagem, rotulagem, variação ou informações ao cliente."
          },
          {
            "title": "Ignorar o controle de variações",
            "text": "Cores, tamanhos ou embalagens diferentes podem exigir verificações distintas de produto e embalagem."
          },
          {
            "title": "Deixar questões de fulfillment para o final",
            "text": "O processo de entrega deve informar decisões de embalagem e rotulagem mais cedo."
          }
        ],
        "checklist": [
          "Lista de produto e variações",
          "Expectativas de uso pelo cliente e de qualidade",
          "Questões de embalagem, rótulos e código de barras",
          "Requisitos de amostra e inspeção final",
          "Plano de destino e fulfillment",
          "Questões de reordenação e substituição"
        ],
        "nextLabels": [
          "Elabore o briefing do seu projeto para marketplace",
          "Leia o guia de envio",
          "Explore guias de produto"
        ]
      },
      {
        "slug": "product-development",
        "label": "Para novos produtos",
        "title": "Transforme uma ideia de produto em uma conversa de manufatura mais clara",
        "description": "Um caminho para fundadores que têm uma ideia, amostra de referência, desenho ou requisito, mas precisam traduzi‑los em um processo ao qual os fornecedores possam responder.",
        "promise": "Um fabricante não consegue produzir de forma confiável algo que não foi claramente descrito. Converta a ideia em um sistema de produto escrito antes de esperar uma cotação confiável.",
        "stages": [
          {
            "title": "Capture o conceito",
            "text": "Descreva o usuário, o caso de uso, a função do produto, dúvidas sobre materiais, dimensões, referências visuais e restrições."
          },
          {
            "title": "Faça perguntas de manufatura",
            "text": "Verifique se um fornecedor consegue fabricar o produto pretendido e quais informações são necessárias para avaliá‑lo."
          },
          {
            "title": "Use amostras como decisões",
            "text": "Trate a amostra como um elemento de evidência: teste‑a, registre o feedback e identifique as mudanças necessárias antes da versão seguinte."
          },
          {
            "title": "Congele a versão aprovada",
            "text": "Antes da produção, torne a especificação atual, a embalagem e as expectativas de qualidade visíveis e rastreáveis."
          }
        ],
        "risks": [
          {
            "title": "Solicitar cotação sem definir o produto",
            "text": "Fornecedores podem preencher lacunas com suas próprias suposições, tornando as cotações difíceis de comparar."
          },
          {
            "title": "Dar feedback estético sem considerar a função",
            "text": "Um produto pode parecer correto e ainda falhar em seu uso pretendido."
          },
          {
            "title": "Perder o histórico de versões de amostras",
            "text": "Mudanças devem estar vinculadas a uma versão visível, desenho, arquivo ou requisito escrito."
          }
        ],
        "checklist": [
          "Caso de uso do produto e usuário-alvo",
          "Imagens de referência ou desenhos iniciais",
          "Dimensões críticas e materiais",
          "Funcionalidades que precisam funcionar",
          "Orçamento conhecido e suposições de quantidade",
          "Perguntas em aberto que exigem input do fornecedor"
        ],
        "nextLabels": [
          "Crie um briefing de desenvolvimento de produto",
          "Leia perguntas sobre amostras",
          "Explore a prospecção de fornecedores"
        ]
      },
      {
        "slug": "china-visit",
        "label": "Para viagens à China",
        "title": "Planeje uma viagem a fornecedores na China focada em decisões — não em turismo",
        "description": "Um caminho para compradores que desejam visitar fábricas ou mercados e precisam de um roteiro que gere evidências úteis e ações seguintes.",
        "promise": "Uma visita à China é valiosa quando cada parada responde a uma decisão. Comece pelas perguntas, pelos endereços e pelas evidências que você precisa registrar.",
        "stages": [
          {
            "title": "Defina o objetivo da viagem",
            "text": "Decida se cada parada é para descoberta de produto, verificação de fábrica, revisão de amostras, discussão de produção ou pesquisa de mercado."
          },
          {
            "title": "Construa a rota",
            "text": "Use localizações reais de fornecedores e tempos de deslocamento realistas; hubs próximos em Guangdong frequentemente podem ser planejados juntos."
          },
          {
            "title": "Prepare um checklist de visita",
            "text": "Registre as perguntas, referências de produto, pessoas, fotos, observações e ações de acompanhamento relevantes."
          },
          {
            "title": "Converta observações em ações",
            "text": "Após a viagem, compare as conclusões com o briefing e documente qual fornecedor, amostra ou próxima etapa precisa de atenção."
          }
        ],
        "risks": [
          {
            "title": "Tentar visitar muitos lugares",
            "text": "Um cronograma apertado pode gerar impressões sem evidências específicas de produto suficientes."
          },
          {
            "title": "Confundir visita ao mercado com visita à fábrica",
            "text": "As duas atividades respondem a perguntas diferentes e devem ser planejadas de forma distinta."
          },
          {
            "title": "Sair sem um registro de acompanhamento",
            "text": "Uma visita é mais útil quando as observações se conectam a uma decisão escrita e a uma próxima ação."
          }
        ],
        "checklist": [
          "Endereços reais de fornecedores ou mercados",
          "Um propósito claro para cada parada",
          "Amostras de produto, referências e perguntas",
          "Tempo de deslocamento entre locais",
          "Checklist de fotos e observações",
          "Responsável e data para o acompanhamento pós‑visita"
        ],
        "nextLabels": [
          "Elabore um briefing de visita à fábrica",
          "Explore cidades chinesas",
          "Leia as perguntas para visitas a fábricas"
        ]
      },
      {
        "slug": "existing-supplier-rescue",
        "label": "Para pedidos em andamento",
        "title": "Reconduza uma situação complicada com um fornecedor para um processo claro",
        "description": "Um caminho para compradores que já têm um fornecedor, mas precisam de informações mais claras sobre qualidade, comunicação, embalagem, amostras ou andamento da produção.",
        "promise": "Quando um pedido parece incerto, reduza o problema a fatos visíveis: o que foi acordado, o que foi observado, qual decisão está em aberto e qual evidência é necessária a seguir.",
        "stages": [
          {
            "title": "Reconstrua o registro escrito",
            "text": "Reúna o briefing de produto atual, cotações, amostras, alterações, detalhes de embalagem, expectativas de qualidade e mensagens em aberto."
          },
          {
            "title": "Identifique o ponto de decisão",
            "text": "Separe um problema de qualidade, comunicação, produção, alteração de embalagem ou necessidade de viagem em vez de tratar tudo como uma única questão."
          },
          {
            "title": "Verifique as evidências relevantes",
            "text": "Uma checagem de amostra, visita à fábrica, tarefa de comunicação com o fornecedor ou inspeção final deve estar vinculada à preocupação específica."
          },
          {
            "title": "Crie a próxima ação por escrito",
            "text": "Confirme o requisito atual, responsável, prazo, evidência esperada e o que acontecerá após a resposta."
          }
        ],
        "risks": [
          {
            "title": "Resolver apenas pelo volume de mensagens",
            "text": "Muitas mensagens não ajudam se a questão exata, a versão aprovada e a evidência necessária não estiverem claras."
          },
          {
            "title": "Misturar questões urgentes e importantes",
            "text": "Priorize o que pode afetar produto, pagamento, embarque ou uso pelo cliente."
          },
          {
            "title": "Usar tranquilização genérica em vez de evidência",
            "text": "Peça fatos específicos do produto: fotos, registros ou verificações acordadas que correspondam à preocupação."
          }
        ],
        "checklist": [
          "Requisitos atuais do produto e da embalagem",
          "Status e cronograma do pedido",
          "Fotos, vídeos, amostras ou documentos já disponíveis",
          "Problema exato e resultado desejado",
          "Mensagens do fornecedor e perguntas em aberto",
          "Que verificação local ou suporte de comunicação pode ser necessário"
        ],
        "nextLabels": [
          "Crie um briefing de resgate",
          "Explore o controle de qualidade",
          "Leia perguntas sobre sourcing"
        ]
      }
    ]
  },
  "ru": {
    "paths": [
      {
        "slug": "first-import",
        "label": "Начните здесь",
        "title": "Ваш первый заказ продукта из Китая",
        "description": "Практический маршрут для покупателей, у которых есть идея продукта, но которым нужен более ясный путь от первоначального исследования до планирования отгрузки.",
        "promise": "Не начинайте с имени поставщика. Начните с решения по продукту, которое вам нужно принять.",
        "stages": [
          {
            "title": "Определите продукт",
            "text": "Опишите назначение, целевого покупателя, диапазон количества, материалы, размеры, пункт назначения и сроки до запроса коммерческого предложения."
          },
          {
            "title": "Сравнивайте сопоставимые варианты",
            "text": "Предоставьте потенциальным поставщикам одно и то же письменное бриф‑техническое задание, чтобы котировки и переговоры по образцам можно было честно сравнить."
          },
          {
            "title": "Проверьте важное",
            "text": "Используйте образцы, проверки фабрики или поставщика и планирование качества, чтобы ответить на вопросы, которые из‑за дистанции сложно решить."
          },
          {
            "title": "Подготовьте отгрузку",
            "text": "Подтвердите продукт, упаковку, документы, ответственность за транспорт и вопросы по рынку‑назначению до отправки товара."
          }
        ],
        "risks": [
          {
            "title": "Начало с расплывчатого брифа",
            "text": "Поставщик может выставить цену на другой продукт, материал или объём, чем тот, который вы представляете."
          },
          {
            "title": "Сравнение только по цене",
            "text": "Низкая цена может не включать упаковку, тестирование, иную партию по количеству или предположения о качестве."
          },
          {
            "title": "Утверждение без письменного следа",
            "text": "Изменения сложнее контролировать, когда текущий образец, файл или требование не зафиксированы."
          }
        ],
        "checklist": [
          "Назначение продукта и ключевые характеристики",
          "Целевое количество или диапазон количества",
          "Рынок‑назначение и сроки",
          "Справочные изображения, чертежи или ссылки на продукт",
          "Требования к упаковке и брендингу",
          "Основное решение, в котором вам требуется локальная поддержка"
        ],
        "nextLabels": [
          "Составить бриф проекта",
          "Прочитать руководство по импорту",
          "Изучить вопросы по подбору поставщиков"
        ]
      },
      {
        "slug": "brand-private-label",
        "label": "Для брендов",
        "title": "Построить более контролируемый процесс закупок для товаров под собственной торговой маркой",
        "description": "Маршрут для брендов, которым требуются кастомизация, образцы, упаковка, согласованные спецификации и более прозрачная фиксация принятых решений.",
        "promise": "Ваш логотип — лишь одна деталь. Не менее важны бриф по продукту, процесс работы с образцами, решения по материалам, упаковка и запись утверждений.",
        "stages": [
          {
            "title": "Определите систему продукта",
            "text": "Опишите продукт, материалы, сценарий использования, допуски, бренд‑оформление и упаковку как единую связанную спецификацию."
          },
          {
            "title": "Прототипируйте и дорабатывайте",
            "text": "Используйте задокументированный процесс работы с образцами, чтобы тестировать посадку, функциональность, отделку, упаковку и изменения между версиями."
          },
          {
            "title": "Контролируйте продуктовые решения",
            "text": "Держите утверждённую версию, макеты, размеры, материалы и детали упаковки видимыми до начала производства."
          },
          {
            "title": "Проверьте перед отгрузкой",
            "text": "Составьте продукт‑специфичный чеклист по качеству и упаковке для финальной партии."
          }
        ],
        "risks": [
          {
            "title": "Рассматривать кастомизацию только как просьбу о логотипе",
            "text": "Кастомизация влияет на MOQ, материалы, макеты, упаковку, процесс, стоимость и сроки."
          },
          {
            "title": "Утверждать образец без тестирования в использовании",
            "text": "Образец нужно оценивать с точки зрения реального использования клиентом, а не только внешнего вида на фото."
          },
          {
            "title": "Менять упаковку слишком поздно",
            "text": "Дизайн упаковки, этикетки и вкладыши следует рассматривать как часть продуктового плана."
          }
        ],
        "checklist": [
          "Справочная информация о продукте и сценарий использования",
          "Файлы бренд‑активов и макетов",
          "Требования к материалам, цвету и отделке",
          "Обратная связь по образцам и запись об их утверждении",
          "Вопросы по упаковке, маркировке и штрихкодам",
          "Вопросы соответствия требованиям рынка‑назначения"
        ],
        "nextLabels": [
          "Спланировать бриф проекта",
          "Прочитать руководство по образцам",
          "Изучить поддержку по упаковке"
        ]
      },
      {
        "slug": "marketplace-seller",
        "label": "Для маркетплейсов",
        "title": "Проводите закупки с учётом листинга и фулфилмента",
        "description": "Маршрут для продавцов маркетплейсов и электронной коммерции, которым нужно связать вопросы продукта, упаковки, маркировки, инспекции, доставки и повторных заказов.",
        "promise": "Продукт не готов к маркетплейсу только потому, что поставщик может его изготовить. Необходимо совместно спланировать упаковку, информацию, использование клиентом и вопросы фулфилмента.",
        "stages": [
          {
            "title": "Проверьте бриф по продукту",
            "text": "Уточните продукт, вариации, ожидания по использованию клиентом, диапазон количества, упаковку и пункт назначения до сравнения поставщиков."
          },
          {
            "title": "Проверьте образец и упаковку",
            "text": "Проверьте работу продукта, отделку, потребительскую упаковку и вопросы по маркировке или штрихкодам."
          },
          {
            "title": "Подготовьте финальную проверку",
            "text": "Свяжите план по качеству с фактическим продуктом, его вариациями и упаковкой, которую получит покупатель."
          },
          {
            "title": "Спланируйте передачу груза",
            "text": "Подтвердите ответственность за транспорт и вопросы документации с действующими специалистами для конкретной отгрузки."
          }
        ],
        "risks": [
          {
            "title": "Путаница между требованиями к продукту и листингу",
            "text": "Продукт может быть пригоден, но создавать проблемы с упаковкой, маркировкой, вариациями или информацией для клиента."
          },
          {
            "title": "Игнорирование контроля вариаций",
            "text": "Разные цвета, размеры или комплекты требуют отдельных проверок продукта и упаковки."
          },
          {
            "title": "Откладывание вопросов фулфилмента на конец",
            "text": "Процесс передачи должен влиять на решения по упаковке и маркировке на раннем этапе."
          }
        ],
        "checklist": [
          "Список продукта и вариаций",
          "Ожидания по использованию и качеству",
          "Вопросы по упаковке, маркировке и штрихкодам",
          "Требования к образцам и финальной инспекции",
          "План по назначению и фулфилменту",
          "Вопросы по повторным заказам и заменам"
        ],
        "nextLabels": [
          "Создать бриф проекта для маркетплейса",
          "Прочитать руководство по доставке",
          "Изучить руководства по продуктам"
        ]
      },
      {
        "slug": "product-development",
        "label": "Для новых товаров",
        "title": "Переведите идею продукта в ясное общение с производителем",
        "description": "Маршрут для основателей, у которых есть идея, эталонный образец, чертёж или требования, но которые должны перевести это в процесс, на который поставщики смогут ответить.",
        "promise": "Производитель не сможет надёжно изготовить то, что не описано чётко. Превратите идею в письменную спецификацию продукта прежде чем рассчитывать на надёжную и сопоставимую цену.",
        "stages": [
          {
            "title": "Зафиксируйте концепцию",
            "text": "Опишите пользователя, сценарий использования, функцию продукта, вопросы по материалам, размеры, визуальные референсы и ограничения."
          },
          {
            "title": "Задайте вопросы производителю",
            "text": "Проверьте, может ли поставщик изготовить предполагаемый продукт и какую информацию нужно для оценки."
          },
          {
            "title": "Используйте образцы как основу для решений",
            "text": "Рассматривайте образец как доказательство: протестируйте его, зафиксируйте обратную связь и определите, что нужно изменить перед следующей версией."
          },
          {
            "title": "Зафиксируйте утверждённую версию",
            "text": "До производства сделайте текущую спецификацию, упаковку и ожидания по качеству видимыми и отслеживаемыми."
          }
        ],
        "risks": [
          {
            "title": "Запрос цены до определения продукта",
            "text": "Поставщики могут заполнять пробелы собственными предположениями, что затрудняет сравнение предложений."
          },
          {
            "title": "Предоставление эстетической оценки без оценки функциональности",
            "text": "Продукт может выглядеть правильно, но не выдерживать предполагаемого использования."
          },
          {
            "title": "Потеря истории версий образцов",
            "text": "Изменения должны быть привязаны к видимой версии, чертежу, файлу или письменному требованию."
          }
        ],
        "checklist": [
          "Сценарий использования продукта и целевой пользователь",
          "Референсные изображения или ранние чертежи",
          "Критические размеры и материалы",
          "Функции, которые должны работать",
          "Известный бюджет и предположения по количеству",
          "Открытые вопросы, требующие ответа поставщика"
        ],
        "nextLabels": [
          "Создать бриф по разработке продукта",
          "Прочитать вопросы по образцам",
          "Изучить подбор поставщиков"
        ]
      },
      {
        "slug": "china-visit",
        "label": "Для поездок в Китай",
        "title": "Планируйте поездку к поставщикам в Китае вокруг решений — не ради экскурсий",
        "description": "Маршрут для закупщиков, которые хотят посетить фабрики или рынки и нуждаются в плане, дающем полезные доказательства и последующие действия.",
        "promise": "Поездка в Китай ценна, когда каждая остановка отвечает на конкретное решение. Начните с вопросов, адресов и доказательств, которые нужно зафиксировать.",
        "stages": [
          {
            "title": "Определите цель поездки",
            "text": "Решите, служит ли каждая остановка поиску продукта, проверке фабрики, обзору образцов, обсуждению производства или исследованию рынка."
          },
          {
            "title": "Постройте маршрут",
            "text": "Используйте реальные адреса поставщиков и реалистичное время в пути; близкие хабы в Гуандуне часто можно планировать вместе."
          },
          {
            "title": "Подготовьте чеклист для визита",
            "text": "Зафиксируйте вопросы, продуктовые референсы, контакты, фотографии, наблюдения и последующие действия, которые имеют значение."
          },
          {
            "title": "Преобразуйте наблюдения в действия",
            "text": "После поездки сопоставьте выводы с брифом и задокументируйте, какому поставщику, образцу или следующему шагу требуется внимание."
          }
        ],
        "risks": [
          {
            "title": "Пытаться посетить слишком много мест",
            "text": "Поспешный график может создать впечатления без достаточных продукт-специфичных доказательств."
          },
          {
            "title": "Путать посещение рынка с посещением фабрики",
            "text": "Две активности отвечают на разные вопросы и должны планироваться отдельно."
          },
          {
            "title": "Уходить без записи последующих действий",
            "text": "Визит полезнее, когда наблюдения связаны с письменным решением и дальнейшими действиями."
          }
        ],
        "checklist": [
          "Фактические адреса поставщиков или рынков",
          "Чёткая цель для каждой остановки",
          "Образцы продукта, референсы и вопросы",
          "Время в пути между локациями",
          "Чеклист для фото и наблюдений",
          "Ответственный за последующие действия и дата"
        ],
        "nextLabels": [
          "Составить бриф для посещения фабрики",
          "Изучить города Китая",
          "Прочитать вопросы для визита на фабрику"
        ]
      },
      {
        "slug": "existing-supplier-rescue",
        "label": "Для текущих заказов",
        "title": "Верните сложную ситуацию с поставщиком в ясный процесс",
        "description": "Маршрут для закупщиков, у которых уже есть поставщик, но требуется более ясная информация по качеству, коммуникации, упаковке, образцам или ходу производства.",
        "promise": "Когда заказ становится неясным, сведите проблему к видимым фактам: что было согласовано, что зафиксировано, какое решение остаётся открытым и какие доказательства нужны дальше.",
        "stages": [
          {
            "title": "Восстановите письменную документацию",
            "text": "Соберите текущий бриф продукта, коммерческие предложения, образцы, изменения, детали упаковки, ожидания по качеству и незакрытые сообщения."
          },
          {
            "title": "Определите точку решения",
            "text": "Разделите проблему: качество, коммуникация, вопрос производства, изменение упаковки или необходимость поездки — вместо того чтобы рассматривать всё как одну проблему."
          },
          {
            "title": "Проверьте соответствующие доказательства",
            "text": "Проверка образца, визит на фабрику, задача по коммуникации с поставщиком или финальная инспекция должны быть привязаны к реальной проблеме."
          },
          {
            "title": "Сформулируйте следующее письменное действие",
            "text": "Подтвердите текущее требование, ответственного, дату, ожидаемые доказательства и то, что произойдёт после ответа."
          }
        ],
        "risks": [
          {
            "title": "Решение проблем количеством сообщений",
            "text": "Множество сообщений не помогут, если точная проблема, утверждённая версия и требуемые доказательства не ясны."
          },
          {
            "title": "Смешивание срочных и важных вопросов",
            "text": "Приоритезируйте то, что может повлиять на продукт, оплату, отгрузку или использование клиентом."
          },
          {
            "title": "Упование на общие заверения вместо доказательств",
            "text": "Запрашивайте продукт-специфичные факты, фото, записи или согласованные проверки, соответствующие проблеме."
          }
        ],
        "checklist": [
          "Текущие требования к продукту и упаковке",
          "Статус заказа и сроки",
          "Фотографии, видео, образцы или доступные документы",
          "Точная проблема и желаемый результат",
          "Сообщения от поставщика и незакрытые вопросы",
          "Какая локальная проверка или поддержка в коммуникации может потребоваться"
        ],
        "nextLabels": [
          "Составить бриф для спасения заказа",
          "Изучить контроль качества",
          "Прочитать вопросы по снабжению"
        ]
      }
    ]
  },
  "tr": {
    "paths": [
      {
        "slug": "first-import",
        "label": "Buradan başlayın",
        "title": "Çin'den ilk ürün siparişiniz",
        "description": "Ürün fikri olan ancak ilk araştırmadan sevkiyat planlamasına kadar daha net bir yol arayan alıcılar için uygulanabilir bir yol.",
        "promise": "Tedarikçi adıyla başlamayın. Önce vermeniz gereken ürün kararıyla başlayın.",
        "stages": [
          {
            "title": "Ürünü tanımlayın",
            "text": "Fiyat talep etmeden önce kullanım amacı, hedef müşteri, miktar aralığı, malzemeler, boyutlar, varış noktası ve zamanlamayı yazılı hale getirin."
          },
          {
            "title": "Tutarlı seçenekleri karşılaştırın",
            "text": "Potansiyel tedarikçilere aynı yazılı briefi verin; böylece teklifler ve numune görüşmeleri adil şekilde karşılaştırılabilir."
          },
          {
            "title": "Önemli olanları kontrol edin",
            "text": "Uzaklığın zorlaştırdığı soruları yanıtlamak için numuneler, fabrika/tedarikçi kontrolleri ve kalite planlaması kullanın."
          },
          {
            "title": "Sevkiyatı hazırlayın",
            "text": "Malları hareket ettirmeden önce ürün, ambalaj, belgeler, taşımaya ilişkin sorumluluklar ve hedef pazarla ilgili konuları netleştirin."
          }
        ],
        "risks": [
          {
            "title": "Belirsiz bir brief ile başlamak",
            "text": "Tedarikçi, sizin hayal ettiğinizden farklı bir ürün, malzeme veya kapsam için fiyat verebilir."
          },
          {
            "title": "Sadece fiyatı karşılaştırmak",
            "text": "Düşük bir teklif ambalaj, test, farklı bir miktar veya farklı kalite varsayımını hariç tutuyor olabilir."
          },
          {
            "title": "Yazılı kayıt olmadan onaylamak",
            "text": "Geçerli numune, dosya veya gereklilik belirsizse değişiklikleri yönetmek zorlaşır."
          }
        ],
        "checklist": [
          "Ürünün amacı ve temel teknik özellikleri",
          "Hedef miktar veya miktar aralığı",
          "Hedef pazar ve zamanlama",
          "Referans görseller, çizimler veya ürün bağlantıları",
          "Ambalaj ve marka gereksinimleri",
          "Yerel destek gerektiren ana karar"
        ],
        "nextLabels": [
          "Proje briefinizi oluşturun",
          "İthalat rehberini okuyun",
          "Tedarik sorularını keşfedin"
        ]
      },
      {
        "slug": "brand-private-label",
        "label": "Markalar için",
        "title": "Daha kontrollü bir özel etiket (private-label) tedarik süreci oluşturun",
        "description": "Özelleştirme, numuneler, ambalaj, tutarlı spesifikasyonlar ve daha net bir karar kaydı gerektiren markalar için bir yol.",
        "promise": "Logonuz yalnızca bir ayrıntıdır. Ürün briefi, numune süreci, malzeme kararları, ambalaj ve onay kaydı aynı derecede önemlidir.",
        "stages": [
          {
            "title": "Ürün sistemini tanımlayın",
            "text": "Ürünü, malzemeleri, kullanım durumunu, toleransları, marka uygulamasını ve ambalajı birbirine bağlı tek bir spesifikasyon olarak tanımlayın."
          },
          {
            "title": "Prototip oluşturun ve revize edin",
            "text": "Ürünün uyumu, işlevi, yüzeyi, ambalajı ve versiyonlar arasındaki değişiklikleri test etmek için belgelenmiş bir numune süreci kullanın."
          },
          {
            "title": "Ürün kararlarını kontrol edin",
            "text": "Onaylanmış versiyon, artwork, boyutlar, malzemeler ve ambalaj detaylarını üretim başlamadan önce görünür tutun."
          },
          {
            "title": "Sevkiyat öncesi kontrol edin",
            "text": "Son parti için ürün odaklı bir kalite ve ambalaj kontrol listesi oluşturun."
          }
        ],
        "risks": [
          {
            "title": "Özelleştirmeyi yalnızca logo talebi olarak görmek",
            "text": "Özelleştirme MOQ, malzeme, artwork, ambalaj, süreç, maliyet ve zaman çizelgesini etkileyebilir."
          },
          {
            "title": "Numuneyi kullanım testinden geçirmeden onaylamak",
            "text": "Numune yalnızca fotoğraftaki görüntüsüne göre değil, gerçek bir müşterinin nasıl kullanacağı gözetilerek değerlendirilmelidir."
          },
          {
            "title": "Ambalajı çok geç değiştirmek",
            "text": "Ambalaj artwork'ı, etiketler ve ekler ürün planının parçası olarak gözden geçirilmelidir."
          }
        ],
        "checklist": [
          "Ürün referansı ve kullanım durumu",
          "Marka varlıkları ve artwork dosyaları",
          "Malzeme, renk ve yüzey gereksinimleri",
          "Numune geri bildirimi ve onay kaydı",
          "Ambalaj, etiketleme ve barkod ile ilgili sorular",
          "Hedef pazar uyumluluğu ile ilgili sorular"
        ],
        "nextLabels": [
          "Proje briefi planlayın",
          "Numune rehberini okuyun",
          "Ambalaj desteğini keşfedin"
        ]
      },
      {
        "slug": "marketplace-seller",
        "label": "Pazar yerleri için",
        "title": "Ürün listeleme ve sipariş karşılama dikkate alınarak tedarik yapın",
        "description": "Ürün, ambalaj, etiket, muayene, nakliye ve yeniden sipariş sorularını birbirine bağlaması gereken pazar yeri ve e-ticaret satıcıları için bir yol.",
        "promise": "Bir tedarikçinin ürünü yapabiliyor olması, ürünün pazar yerine hazır olduğu anlamına gelmez. Ambalajı, bilgisi, müşteri kullanımı ve sipariş karşılama ile ilgili konular birlikte planlanmalıdır.",
        "stages": [
          {
            "title": "Ürün briefini doğrulayın",
            "text": "Tedarikçi karşılaştırmasından önce ürün, varyasyonlar, müşteri kullanım beklentileri, miktar aralığı, ambalaj ve varış noktasını netleştirin."
          },
          {
            "title": "Numune ve ambalajı test edin",
            "text": "Ürünün işlevini, yüzeyini, müşteriyle temas eden ambalajı ve varsa etiketleme veya barkod konularını kontrol edin."
          },
          {
            "title": "Nihai kontrolü hazırlayın",
            "text": "Kalite planını gerçek ürüne, varyasyonlarına ve müşterinin alacağı ambalaja bağlayın."
          },
          {
            "title": "Sevkiyat devrini planlayın",
            "text": "Gerçek sevkiyat için taşıma sorumluluklarını ve belge gereksinimlerini mevcut profesyonellerle doğrulayın."
          }
        ],
        "risks": [
          {
            "title": "Ürün ile listeleme gereksinimlerini karıştırmak",
            "text": "Bir ürün kullanılabilir olsa da ambalaj, etiketleme, varyasyon veya müşteri bilgi sorunları yaratabilir."
          },
          {
            "title": "Varyasyon kontrolünü göz ardı etmek",
            "text": "Farklı renkler, bedenler veya paketler farklı ürün ve ambalaj kontrolleri gerektirebilir."
          },
          {
            "title": "Sipariş karşılama sorularını sona bırakmak",
            "text": "Devir süreci ambalaj ve etiketleme kararlarını daha erken şekilde bilgilendirmelidir."
          }
        ],
        "checklist": [
          "Ürün ve varyasyon listesi",
          "Müşteri kullanım ve kalite beklentileri",
          "Ambalaj, etiketler ve barkod ile ilgili sorular",
          "Numune ve son muayene gereksinimleri",
          "Varış noktası ve sipariş karşılama planı",
          "Yeniden sipariş ve değişim soruları"
        ],
        "nextLabels": [
          "Pazar yeri proje briefinizi oluşturun",
          "Nakliye rehberini okuyun",
          "Ürün rehberlerini keşfedin"
        ]
      },
      {
        "slug": "product-development",
        "label": "Yeni ürünler için",
        "title": "Ürün fikrinden tedarikçilerle daha net üretim görüşmesine geçin",
        "description": "Bir fikri, referans numuneyi, çizimi veya gereksinimi tedarikçilerin yanıtlayabileceği bir sürece dönüştürmeniz gereken kurucular için bir yol.",
        "promise": "Açıkça tanımlanmayan bir ürünü üretici güvenilir şekilde üretemez. Güvenilir bir teklif beklemeden önce fikri yazılı bir ürün sistemine dönüştürün.",
        "stages": [
          {
            "title": "Kavramı yakalayın",
            "text": "Kullanıcıyı, kullanım amacını, ürün işlevini, malzeme sorularını, boyutları, görsel referansları ve kısıtları tanımlayın."
          },
          {
            "title": "Üretim sorularını sorun",
            "text": "Bir tedarikçinin hedeflenen ürünü üretip üretemeyeceğini ve değerlendirmek için hangi bilgilere ihtiyaç duyulduğunu kontrol edin."
          },
          {
            "title": "Numuneleri karar aracı olarak kullanın",
            "text": "Numuneyi kanıt olarak değerlendirin: test edin, geri bildirimi kaydedin ve bir sonraki versiyondan önce neyin değişmesi gerektiğini belirleyin."
          },
          {
            "title": "Onaylı versiyonu kilitleyin",
            "text": "Üretim öncesinde mevcut spesifikasyon, ambalaj ve kalite beklentilerini görünür ve izlenebilir hale getirin."
          }
        ],
        "risks": [
          {
            "title": "Ürünü tanımlamadan önce teklif istemek",
            "text": "Tedarikçiler boşlukları kendi varsayımlarıyla doldurabilir; bu da teklifleri karşılaştırmayı zorlaştırır."
          },
          {
            "title": "Fonksiyonel geri bildirim olmadan estetik geri bildirim vermek",
            "text": "Bir ürün görsel olarak doğru görünebilir fakat amaçlanan işlevi başarısız olabilir."
          },
          {
            "title": "Numune versiyon geçmişini kaybetmek",
            "text": "Değişiklikler görünür bir versiyon, çizim, dosya veya yazılı gereksinimle ilişkilendirilmelidir."
          }
        ],
        "checklist": [
          "Ürünün kullanım senaryosu ve hedef kullanıcı",
          "Referans görseller veya erken çizimler",
          "Kritik boyutlar ve malzemeler",
          "Çalışması gereken özellikler",
          "Bilinen bütçe ve miktar varsayımları",
          "Tedarikçiden bilgi gerektiren açık sorular"
        ],
        "nextLabels": [
          "Ürün geliştirme brifi oluşturun",
          "Numune sorularını okuyun",
          "Tedarikçi teminini keşfedin"
        ]
      },
      {
        "slug": "china-visit",
        "label": "Çin ziyareti için",
        "title": "Çin tedarikçi gezisini gezi amaçlı değil, karar odaklı planlayın",
        "description": "Fabrikaları veya pazarlara ziyaret etmek isteyen alıcılar için; ziyaretlerin faydalı kanıtlar ve sonraki adımlar üretmesini sağlayan bir yol.",
        "promise": "Her durak bir karara yanıt verdiğinde Çin ziyareti değerlidir. Sorularla, adreslerle ve kaydetmeniz gereken kanıtla başlayın.",
        "stages": [
          {
            "title": "Seyahat hedefini tanımlayın",
            "text": "Her durağın ürün keşfi, fabrika doğrulama, numune incelemesi, üretim görüşmesi veya pazar araştırması için olup olmadığını belirleyin."
          },
          {
            "title": "Rotayı oluşturun",
            "text": "Gerçek tedarikçi konumları ve gerçekçi seyahat sürelerini kullanın; yakın Guangdong merkezleri genellikle birlikte planlanabilir."
          },
          {
            "title": "Ziyaret kontrol listesi hazırlayın",
            "text": "Soruları, ürün referanslarını, kişileri, fotoğrafları, gözlemleri ve önemli takip eylemlerini kaydedin."
          },
          {
            "title": "Gözlemleri eyleme dönüştürün",
            "text": "Gezi sonrası bulguları brifle karşılaştırın ve hangi tedarikçi, numune veya sonraki adımın dikkat gerektirdiğini belgeleyin."
          }
        ],
        "risks": [
          {
            "title": "Çok fazla yere gitmeye çalışmak",
            "text": "Aceleyle yapılan program, yeterli ürün odaklı kanıt olmadan izlenimler yaratabilir."
          },
          {
            "title": "Pazar ziyaretini fabrika ziyaretiyle karıştırmak",
            "text": "İki etkinlik farklı sorulara yanıt verir ve farklı planlanmalıdır."
          },
          {
            "title": "Takip kaydı olmadan ayrılmak",
            "text": "Bir ziyaret, gözlemler yazılı bir karar ve sonraki adımla ilişkilendirildiğinde daha faydalı olur."
          }
        ],
        "checklist": [
          "Gerçek tedarikçi veya pazar adresleri",
          "Her durak için açık bir amaç",
          "Ürün numuneleri, referanslar ve sorular",
          "Konumlar arası seyahat zamanlaması",
          "Fotoğraf ve gözlem kontrol listesi",
          "Ziyaret sonrası takip sorumlusu ve tarih"
        ],
        "nextLabels": [
          "Fabrika ziyaret brifi oluşturun",
          "Çin şehirlerini keşfedin",
          "Fabrika ziyaret sorularını okuyun"
        ]
      },
      {
        "slug": "existing-supplier-rescue",
        "label": "Aktif siparişler için",
        "title": "Sorunlu tedarikçi durumunu net bir sürece geri getirin",
        "description": "Zaten bir tedarikçiniz olan ancak kalite, iletişim, ambalaj, numuneler veya üretim ilerlemesi hakkında daha net bilgiye ihtiyaç duyan alıcılar için bir yol.",
        "promise": "Bir sipariş belirsiz hissettirdiğinde, problemi görünür gerçeklere indirgeyin: ne üzerinde anlaşıldı, ne gözlemlendi, hangi karar açık ve bir sonraki adım için hangi kanıt gerektiği.",
        "stages": [
          {
            "title": "Yazılı kaydı yeniden oluşturun",
            "text": "Mevcut ürün brifi, teklifleri, numuneleri, değişiklikleri, ambalaj detaylarını, kalite beklentilerini ve açık mesajları toplayın."
          },
          {
            "title": "Karar noktasını belirleyin",
            "text": "Bir kalite sorunu, iletişim sorunu, üretim sorusu, ambalaj değişikliği veya seyahat ihtiyacını ayırın; her şeyi tek bir sorun olarak ele almayın."
          },
          {
            "title": "İlgili kanıtı kontrol edin",
            "text": "Numune kontrolü, fabrika ziyareti, tedarikçi iletişim görevi veya nihai muayene somut endişeyle ilişkilendirilmeli."
          },
          {
            "title": "Bir sonraki yazılı eylemi oluşturun",
            "text": "Mevcut gereksinimi, sahibi, tarihi, beklenen kanıtı ve yanıt sonrası ne olacağını onaylayın."
          }
        ],
        "risks": [
          {
            "title": "Mesaj hacmiyle çözmeye çalışmak",
            "text": "Tam sorun, onaylı versiyon ve gereken kanıt net değilse çok sayıda mesaj yardımcı olmaz."
          },
          {
            "title": "Acil ve önemli konuları karıştırmak",
            "text": "Ürünü, ödemeyi, sevkiyatı veya müşteri kullanımını etkileyebilecek konuları önceliklendirin."
          },
          {
            "title": "Kanıt yerine genel teminat kullanmak",
            "text": "Endişeyle eşleşen ürün-spesifik gerçekler, fotoğraflar, kayıtlar veya anlaşılmış kontroller isteyin."
          }
        ],
        "checklist": [
          "Mevcut ürün ve ambalaj gereksinimleri",
          "Sipariş durumu ve zamanlaması",
          "Zaten mevcut fotoğraflar, videolar, numuneler veya belgeler",
          "Tam sorun ve arzu edilen sonuç",
          "Tedarikçi mesajları ve açık sorular",
          "Yerel kontrol veya iletişim desteğine ihtiyaç olup olmadığı"
        ],
        "nextLabels": [
          "Kurtarma brifi oluşturun",
          "Kalite kontrolünü inceleyin",
          "Tedarik sorularını okuyun"
        ]
      }
    ]
  },
  "fr": {
    "paths": [
      {
        "slug": "first-import",
        "label": "Commencez ici",
        "title": "Votre première commande de produit depuis la Chine",
        "description": "Une voie pratique pour les acheteurs qui ont une idée de produit mais qui ont besoin d’un parcours plus clair de la recherche initiale à la planification de l’expédition.",
        "promise": "Ne commencez pas par un nom de fournisseur. Commencez par la décision produit que vous devez prendre.",
        "stages": [
          {
            "title": "Définir le produit",
            "text": "Rédigez l’usage prévu, le client cible, la fourchette de quantité, les matériaux, les dimensions, la destination et les délais avant de demander un devis."
          },
          {
            "title": "Comparer des options cohérentes",
            "text": "Fournissez aux fournisseurs potentiels le même cahier des charges écrit afin que les devis et les échanges sur les échantillons puissent être comparés équitablement."
          },
          {
            "title": "Vérifier l’essentiel",
            "text": "Utilisez des échantillons, des contrôles d’usine ou du fournisseur, et une planification qualité pour répondre aux questions rendues difficiles par la distance."
          },
          {
            "title": "Préparer l’expédition",
            "text": "Confirmez le produit, l’emballage, les documents, les responsabilités de transport et les questions liées au marché de destination avant l’expédition des marchandises."
          }
        ],
        "risks": [
          {
            "title": "Commencer avec un brief vague",
            "text": "Un fournisseur peut chiffrer un produit, un matériau ou un périmètre différents de ce que vous imaginez."
          },
          {
            "title": "Comparer uniquement le prix",
            "text": "Un devis bas peut exclure l’emballage, les essais, une quantité différente ou supposer une qualité différente."
          },
          {
            "title": "Approuver sans trace écrite",
            "text": "Les changements sont plus difficiles à gérer lorsque l’échantillon actuel, le dossier ou l’exigence n’est pas clair."
          }
        ],
        "checklist": [
          "Finalité du produit et spécifications clés",
          "Quantité cible ou fourchette de quantité",
          "Marché de destination et calendrier",
          "Images de référence, dessins ou liens produit",
          "Exigences d’emballage et de marque",
          "La décision principale pour laquelle vous avez besoin d’un soutien local"
        ],
        "nextLabels": [
          "Rédiger votre brief de projet",
          "Lire le guide d’importation",
          "Explorer les questions d’approvisionnement"
        ]
      },
      {
        "slug": "brand-private-label",
        "label": "Pour les marques",
        "title": "Établir un processus d’approvisionnement en marque privée mieux contrôlé",
        "description": "Un parcours pour les marques qui ont besoin de personnalisation, d’échantillons, d’emballage, de spécifications cohérentes et d’un suivi des décisions plus clair.",
        "promise": "Votre logo n’est qu’un détail. Le cahier des charges, le processus d’échantillonnage, les choix de matériaux, l’emballage et l’historique des validations sont tout aussi importants.",
        "stages": [
          {
            "title": "Définir le système produit",
            "text": "Décrivez le produit, les matériaux, le cas d’usage, les tolérances, le traitement de la marque et l’emballage comme une spécification unique et cohérente."
          },
          {
            "title": "Prototyper et réviser",
            "text": "Utilisez un processus d’échantillonnage documenté pour tester l’ajustement, la fonctionnalité, la finition, l’emballage et les modifications entre les versions."
          },
          {
            "title": "Contrôler les décisions produit",
            "text": "Maintenez la version approuvée, les fichiers graphiques, les dimensions, les matériaux et les détails d’emballage visibles avant le lancement de la production."
          },
          {
            "title": "Contrôler avant expédition",
            "text": "Créez une checklist qualité et emballage spécifique au produit pour le lot final."
          }
        ],
        "risks": [
          {
            "title": "Considérer la personnalisation comme une simple demande de logo",
            "text": "La personnalisation peut impacter la quantité minimale de commande (MOQ), le matériau, les fichiers graphiques, l’emballage, le processus, le coût et le calendrier."
          },
          {
            "title": "Approuver un échantillon sans tester son usage",
            "text": "Un échantillon doit être évalué selon l’usage réel d’un client, pas seulement son rendu en photo."
          },
          {
            "title": "Modifier l’emballage trop tard",
            "text": "Les visuels d’emballage, les étiquettes et les notices doivent être examinés dans le cadre du plan produit."
          }
        ],
        "checklist": [
          "Référence produit et cas d’usage",
          "Actifs de marque et fichiers graphiques",
          "Exigences de matériaux, couleurs et finitions",
          "Retour sur échantillon et historique d’approbation",
          "Questions relatives à l’emballage, à l’étiquetage et aux codes-barres",
          "Questions de conformité pour le marché de destination"
        ],
        "nextLabels": [
          "Élaborer un brief de projet",
          "Lire le guide sur les échantillons",
          "Découvrir l'accompagnement pour l'emballage"
        ]
      },
      {
        "slug": "marketplace-seller",
        "label": "Pour les vendeurs sur marketplaces",
        "title": "Sourcer en gardant à l’esprit la fiche produit et l’exécution des commandes",
        "description": "Un parcours pour les vendeurs marketplace et e‑commerce qui doivent relier les questions produit, emballage, étiquetage, inspection, expédition et réapprovisionnement.",
        "promise": "Un produit n’est pas prêt pour une marketplace simplement parce qu’un fournisseur peut le fabriquer. Son emballage, ses informations, l’usage client et les aspects logistiques doivent être planifiés ensemble.",
        "stages": [
          {
            "title": "Valider le cahier des charges produit",
            "text": "Clarifiez le produit, ses variantes, les attentes d’usage client, la fourchette de quantité, l’emballage et la destination avant de comparer les fournisseurs."
          },
          {
            "title": "Tester l’échantillon et l’emballage",
            "text": "Vérifiez la fonctionnalité, la finition, l’emballage destiné au client et toute question liée à l’étiquetage ou aux codes-barres."
          },
          {
            "title": "Préparer le contrôle final",
            "text": "Reliez le plan qualité au produit réel, à ses variantes et à l’emballage que recevra le client."
          },
          {
            "title": "Planifier la remise pour l’expédition",
            "text": "Confirmez les responsabilités de transport et les questions documentaires avec les professionnels en charge pour l’expédition effective."
          }
        ],
        "risks": [
          {
            "title": "Confondre exigences produit et exigences de la fiche",
            "text": "Un produit peut être utilisable et néanmoins poser un problème d’emballage, d’étiquetage, de variantes ou d’informations client."
          },
          {
            "title": "Ignorer le contrôle des variantes",
            "text": "Différentes couleurs, tailles ou conditionnements peuvent nécessiter des contrôles produit et emballage distincts."
          },
          {
            "title": "Laisser les questions d’exécution logistique à la fin",
            "text": "Le processus de passation devrait informer plus tôt les décisions d’emballage et d’étiquetage."
          }
        ],
        "checklist": [
          "Liste des produits et variantes",
          "Attentes d’usage client et de qualité",
          "Questions d’emballage, d’étiquettes et de codes-barres",
          "Exigences pour les échantillons et l’inspection finale",
          "Plan de destination et d’exécution des commandes",
          "Questions sur les réapprovisionnements et remplacements"
        ],
        "nextLabels": [
          "Rédiger votre brief de projet marketplace",
          "Lire le guide d’expédition",
          "Explorer les guides produit"
        ]
      },
      {
        "slug": "product-development",
        "label": "Pour les nouveaux produits",
        "title": "Passer d'une idée produit à un dialogue manufacturier clair",
        "description": "Un parcours pour les fondateurs qui ont une idée, un échantillon de référence, un dessin ou un cahier des charges mais doivent le traduire en un processus auquel les fournisseurs peuvent répondre.",
        "promise": "Un fabricant ne peut pas fabriquer de manière fiable ce qui n'a pas été clairement décrit. Transformez une idée en un système produit écrit avant d'attendre un devis fiable.",
        "stages": [
          {
            "title": "Formaliser le concept",
            "text": "Décrivez l'utilisateur, le cas d'usage, la fonction du produit, les questions liées aux matériaux, les dimensions, les références visuelles et les contraintes."
          },
          {
            "title": "Poser les questions de fabrication",
            "text": "Vérifiez si un fournisseur peut fabriquer le produit prévu et quelles informations sont nécessaires pour l'évaluer."
          },
          {
            "title": "Utiliser les échantillons pour décider",
            "text": "Considérez l'échantillon comme un élément de preuve : testez-le, consignez les retours et identifiez les modifications avant la version suivante."
          },
          {
            "title": "Verrouiller la version approuvée",
            "text": "Avant la production, rendez la spécification actuelle, l'emballage et les attentes qualité visibles et traçables."
          }
        ],
        "risks": [
          {
            "title": "Demander un devis avant de définir le produit",
            "text": "Les fournisseurs peuvent combler les zones d'ombre par leurs propres hypothèses, ce qui rend les devis difficiles à comparer."
          },
          {
            "title": "Donner un retour esthétique sans retour fonctionnel",
            "text": "Un produit peut sembler correct et pourtant échouer dans sa fonction prévue."
          },
          {
            "title": "Perdre l'historique des versions d'échantillons",
            "text": "Les modifications doivent être liées à une version visible, un dessin, un fichier ou une exigence écrite."
          }
        ],
        "checklist": [
          "Cas d'usage du produit et utilisateur cible",
          "Images de référence ou dessins initiaux",
          "Dimensions critiques et matériaux",
          "Fonctions essentielles devant fonctionner",
          "Budget connu et hypothèses de quantité",
          "Questions ouvertes nécessitant l'avis d'un fournisseur"
        ],
        "nextLabels": [
          "Rédiger un brief de développement produit",
          "Lire les questions sur les échantillons",
          "Découvrir le sourcing de fournisseurs"
        ]
      },
      {
        "slug": "china-visit",
        "label": "Pour les déplacements en Chine",
        "title": "Planifiez un voyage en Chine axé sur les décisions, pas sur le tourisme",
        "description": "Un parcours pour les acheteurs souhaitant visiter des usines ou des marchés et qui ont besoin d'un itinéraire produisant des preuves utiles et des actions concrètes.",
        "promise": "Un voyage en Chine est utile lorsque chaque étape répond à une décision. Commencez par les questions, les adresses et les preuves à recueillir.",
        "stages": [
          {
            "title": "Définir l'objectif du voyage",
            "text": "Décidez si chaque étape sert à la découverte produit, la vérification d'usine, l'examen d'échantillons, la discussion sur la production ou l'étude de marché."
          },
          {
            "title": "Établir l'itinéraire",
            "text": "Utilisez les emplacements réels des fournisseurs et des temps de déplacement réalistes ; les hubs proches du Guangdong peuvent souvent être planifiés ensemble."
          },
          {
            "title": "Préparer une liste de contrôle de visite",
            "text": "Consignez les questions, références produit, personnes, photos, observations et actions de suivi importantes."
          },
          {
            "title": "Transformer les observations en actions",
            "text": "Après le voyage, comparez les constats au brief et documentez quel fournisseur, quel échantillon ou quelle étape nécessite une attention."
          }
        ],
        "risks": [
          {
            "title": "Vouloir visiter trop d'endroits",
            "text": "Un planning précipité peut produire des impressions sans preuves produit suffisantes."
          },
          {
            "title": "Confondre une visite de marché et une visite d'usine",
            "text": "Les deux activités répondent à des questions différentes et doivent être planifiées différemment."
          },
          {
            "title": "Partir sans trace de suivi",
            "text": "Une visite est plus utile quand les observations sont reliées à une décision écrite et à une action suivante."
          }
        ],
        "checklist": [
          "Adresses réelles des fournisseurs ou des marchés",
          "Un objectif clair pour chaque étape",
          "Échantillons produits, références et questions",
          "Temps de déplacement entre les sites",
          "Liste de contrôle photos et observations",
          "Responsable du suivi post-visite et date"
        ],
        "nextLabels": [
          "Rédiger un brief pour la visite d'usine",
          "Découvrir les villes chinoises",
          "Lire les questions pour une visite d'usine"
        ]
      },
      {
        "slug": "existing-supplier-rescue",
        "label": "Pour les commandes en cours",
        "title": "Remettre une situation fournisseur difficile sur un processus clair",
        "description": "Un parcours pour les acheteurs qui ont déjà un fournisseur mais qui ont besoin d'informations plus claires sur la qualité, la communication, l'emballage, les échantillons ou l'avancement de la production.",
        "promise": "Lorsque une commande paraît floue, réduisez le problème à des faits visibles : ce qui a été convenu, ce qui a été observé, quelle décision reste ouverte et quelles preuves sont nécessaires ensuite.",
        "stages": [
          {
            "title": "Reconstituer le dossier écrit",
            "text": "Rassemblez le brief produit actuel, les devis, les échantillons, les modifications, les détails d'emballage, les attentes qualité et les messages non résolus."
          },
          {
            "title": "Identifier le point de décision",
            "text": "Distinguez un problème de qualité, de communication, une question de production, un changement d'emballage ou un besoin de déplacement au lieu de tout traiter comme un seul problème."
          },
          {
            "title": "Vérifier les preuves pertinentes",
            "text": "Un contrôle d'échantillon, une visite d'usine, une tâche de communication fournisseur ou une inspection finale doit être lié au problème réel."
          },
          {
            "title": "Créer la prochaine action écrite",
            "text": "Confirmez l'exigence actuelle, le responsable, la date, les preuves attendues et ce qui se passera après la réponse."
          }
        ],
        "risks": [
          {
            "title": "Résoudre par le volume de messages",
            "text": "Beaucoup de messages n'aident pas si le problème exact, la version approuvée et les preuves requises ne sont pas claires."
          },
          {
            "title": "Mélanger urgent et important",
            "text": "Priorisez ce qui peut affecter le produit, le paiement, l'expédition ou l'usage client."
          },
          {
            "title": "Se contenter de garanties générales au lieu de preuves",
            "text": "Demandez des faits produit spécifiques, des photos, des enregistrements ou des contrôles convenus qui correspondent au problème."
          }
        ],
        "checklist": [
          "Exigences actuelles produit et emballage",
          "Statut de la commande et calendrier",
          "Photos, vidéos, échantillons ou documents déjà disponibles",
          "Problème exact et résultat souhaité",
          "Messages du fournisseur et questions en suspens",
          "Vérification locale ou support de communication éventuellement requis"
        ],
        "nextLabels": [
          "Rédiger un brief de redressement",
          "Explorer le contrôle qualité",
          "Lire les questions de sourcing"
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

function localizedPaths(dictionary: TranslationDictionary) {
  return buyerPaths.map((path) => ({
    slug: path.slug,
    label: localizeValue(path.label, dictionary),
    title: localizeValue(path.title, dictionary),
    description: localizeValue(path.description, dictionary),
    promise: localizeValue(path.promise, dictionary),
    stages: path.stages.map((stage) => ({
      title: localizeValue(stage.title, dictionary),
      text: localizeValue(stage.text, dictionary),
    })),
    risks: path.risks.map((risk) => ({
      title: localizeValue(risk.title, dictionary),
      text: localizeValue(risk.text, dictionary),
    })),
    checklist: path.checklist.map((item) => localizeValue(item, dictionary)),
    nextLabels: path.next.map((item) => localizeValue(item.label, dictionary)),
  }));
}

export const buyerPathLocales = {
  ...baseBuyerPathLocales,
  ja: { paths: localizedPaths(generated.ja) },
  de: { paths: localizedPaths(generated.de) },
  ar: { paths: localizedPaths(generated.ar) },
  id: { paths: localizedPaths(generated.id) },
  it: { paths: localizedPaths(generated.it) },
} as const;
