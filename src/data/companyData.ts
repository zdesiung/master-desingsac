import { ServiceDetail, PortfolioItem, FAQItem, TestimonialItem } from '../types';

export const COMPANY_INFO = {
  legalName: 'MASTER DESIGN S.A.C.',
  tradeName: 'MASTER DESIGN',
  ruc: '20608945123',
  address: 'Av. Los Ficus 420, Surquillo / Ate, Lima - Perú',
  phone1: '+51 968 108 836',
  phone1Raw: '51968108836',
  phone2: '+51 962 674 574',
  phone2Raw: '51962674574',
  email: 'contacto@masterdesignsac.pe',
  schedule: 'Lunes a Viernes: 8:00 AM - 6:30 PM | Sábados: 8:30 AM - 1:00 PM',
  experienceYears: 12,
  completedProjects: '1,850+',
  satisfactionRate: '99.8%',
  precisionMetric: '0.1 mm',
  socials: {
    whatsapp: 'https://wa.me/51968108836',
    instagram: 'https://instagram.com/masterdesign_pe',
    facebook: 'https://facebook.com/masterdesignsac',
    linkedin: 'https://linkedin.com/company/masterdesignsac',
    tiktok: 'https://tiktok.com/@masterdesignperu',
    behance: 'https://behance.net/masterdesignsac',
  },
};

export const SERVICES_DATA: ServiceDetail[] = [
  {
    id: 'web',
    number: '01',
    title: 'Desarrollo Web & E-commerce de Alto Rendimiento',
    tagline: 'Arquitectura moderna en Next.js, React y Tailwind con conversión agresiva',
    description:
      'Construimos plataformas digitales corporativas y tiendas e-commerce ultrarrápidas, optimizadas para Google Core Web Vitals (carga < 1.2s), SEO local e internacional, pasarelas peruanas e internacionales (Niubiz, Culqi, Mercado Pago, Stripe, Yape y Plin) y flujos automáticos de conversión directa a WhatsApp.',
    image: '/src/assets/images/desarrollo_web_pro_1793149976449.jpg',
    highlights: [
      'Next.js App Router, React 19 y Tailwind CSS para máxima velocidad',
      'Pasarelas integradas: Yape, Plin, Niubiz, Culqi y tarjetas de crédito',
      'Arquitectura orientada a CRO (optimización de tasa de conversión)',
      'SEO técnico estructurado para captar clientes B2B de forma orgánica',
      'Panel de control administrativo simple e intuitivo sin dependencias',
    ],
    specs: [
      { label: 'Velocidad Google PageSpeed', value: '98-100 / 100' },
      { label: 'Pasarelas de Pago', value: 'Culqi / Niubiz / Stripe / Yape' },
      { label: 'Tiempo de Entrega', value: '7 a 20 días hábiles' },
      { label: 'Garantía Técnica', value: '12 meses de soporte y backups' },
    ],
    ctaLabel: 'Cotizar Proyecto Web',
  },
  {
    id: 'textil',
    number: '02',
    title: 'Serigrafía y Estampado Textil de Alta Gama',
    tagline: 'Master printing sobre Algodón Pima Peruano con efectos táctiles de nivel internacional',
    description:
      'Taller industrial propio de serigrafía de alta precisión. Dominamos cuatricromías de alta fidelidad, indexados fotográficos, efectos 3D Puff de alto relieve, tintas al agua con tacto cero y descargas (discharge), foiling metalizado en oro y plata líquida sobre prendas 100% Algodón Pima peinado 30/1, 24/1 y 20/1.',
    image: '/src/assets/images/serigrafia_textil_pro_1793149975542.jpg',
    highlights: [
      'Efectos especiales: 3D Puff de alto relieve, Foil metálico Oro/Plata y Glitter',
      'Tintas al agua ecológicas y Discharge (descarga química tacto cero)',
      'Prendas en 100% Algodón Pima Peruano de exportación preencogido',
      'Curado en horno de túnel infrarrojo a 160°C para +70 lavadas sin fisuras',
      'Capacidad para producciones de 25 hasta 50,000 unidades mensuales',
    ],
    specs: [
      { label: 'Calidad de Tejido', value: '100% Algodón Pima 30/1 & 20/1' },
      { label: 'Técnicas Especiales', value: '3D Puff / Cuatricromía / Discharge' },
      { label: 'Prueba de Lavado', value: '+70 lavadas garantizadas' },
      { label: 'Lote Mínimo', value: 'Desde 25 unidades' },
    ],
    ctaLabel: 'Cotizar Serigrafía Textil',
  },
  {
    id: 'carpinteria',
    number: '03',
    title: 'Carpintería Fina & Mobiliario Especializado',
    tagline: 'Fabricación a medida con maderas nobles y tableros hidrófugos de alta resistencia',
    description:
      'Diseño estructural, modelado 3D fotorrealista y fabricación milimétrica de mobiliario corporativo, counters de recepción comercial, vitrinas y exhibidores modulares para tiendas retail, y mobiliario arquitectónico de lujo en maderas selectas (Nogal, Cedro, Tornillo) y MDF hidrófugo Pelíkano con acabados en poliuretano.',
    image: '/src/assets/images/carpinteria_mobiliario_1793149976821.jpg',
    highlights: [
      'Fabricación a medida con modelado 3D previo y despiece milimétrico',
      'Uso de maderas nobles curadas (Cedro, Roble, Nogal) y MDF hidrófugo',
      'Herrajes de cierre suave premium (Blum, Hettich o Ducasse) con garantía',
      'Acabados en laca poliuretano satinado o mate anti-rayaduras',
      'Instalación técnica limpia en obra residencial y comercial en todo Lima',
    ],
    specs: [
      { label: 'Tolerancia de Ensamble', value: '±0.1 mm con fresado CNC' },
      { label: 'Materiales Principales', value: 'MDF RH Pelíkano & Maderas Nobles' },
      { label: 'Modelado Previo', value: 'Render 3D fotorrealista incluido' },
      { label: 'Instalación', value: 'Servicio llave en mano con entrega limpia' },
    ],
    ctaLabel: 'Cotizar Mobiliario & Muebles',
  },
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: 'port-web-1',
    pillar: 'web',
    title: 'Plataforma E-commerce D2C Textil "Atelier Pima"',
    client: 'Marca de Moda Streetwear Independiente (Lima)',
    category: 'E-commerce & Web App',
    description:
      'Desarrollo integral con Next.js 14, pasarela multi-moneda (Soles y USD) vía Niubiz y Culqi, checkout en un solo paso y sincronización de stock en tiempo real.',
    image: '/src/assets/images/desarrollo_web_pro_1793149976449.jpg',
    metrics: '+215% Conversión de compra móvil en los primeros 90 días',
    deliverables: ['Tienda Virtual Next.js', 'Checkout Rápido Yape/Tarjetas', 'Panel de Pedidos'],
    techOrMaterials: ['Next.js App Router', 'Tailwind CSS', 'Stripe & Culqi API', 'Vercel Edge'],
  },
  {
    id: 'port-textil-1',
    pillar: 'textil',
    title: 'Colección Corporativa "Gold Edition" con 3D Puff & Foil',
    client: 'Agencia de Tecnología & Marketing B2B',
    category: 'Serigrafía Textil de Alta Gama',
    description:
      'Estampado de alta precisión combinando tinta 3D Puff de alto relieve negro mate sobre algodón Pima 30/1, con escudo central en hot-stamping foil oro líquido.',
    image: '/src/assets/images/serigrafia_textil_pro_1793149975542.jpg',
    metrics: '1,200 unidades entregadas con 0 fallas de registro en 5 días',
    deliverables: ['Polos Pima 30/1 preencogidos', '3D Puff 1.5mm relieve', 'Etiquetado satinado propio'],
    techOrMaterials: ['Tinta Puff Plastisol HD', 'Foil Dorado Térmico', 'Algodón Pima 100% Peinado'],
  },
  {
    id: 'port-carp-1',
    pillar: 'carpinteria',
    title: 'Counter de Recepción Escultural & Exhibidores en Roble',
    client: 'Boutique de Fragancias & Cosmética de Lujo',
    category: 'Carpintería & Mobiliario Retail',
    description:
      'Fabricación milimétrica de counter curvo con panelado acanalado en roble natural, cubierta en mármol sintetizado y módulos de almacenamiento interno con herrajes push-open ocultos.',
    image: '/src/assets/images/carpinteria_mobiliario_1793149976821.jpg',
    metrics: 'Fabricación y montaje completo en 12 días calendario',
    deliverables: ['Counter curvo acanalado', 'Vitrinas con iluminación LED cálida', 'Caja de seguridad integrada'],
    techOrMaterials: ['Roble macizo seleccionado', 'MDF Hidrófugo Pelíkano', 'Poliuretano satinado anti-manchas'],
  },
  {
    id: 'port-web-2',
    pillar: 'web',
    title: 'Sistema de Cotización y Catálogo B2B Industrial',
    client: 'Distribuidora Mayorista de Herrajes & Madera',
    category: 'Ingeniería Digital B2B',
    description:
      'Web corporativa de alta velocidad con catálogo interactivo de más de 3,000 SKUs y generador de cotizaciones en PDF con envío instantáneo a WhatsApp comercial.',
    image: '/src/assets/images/desarrollo_web_pro_1793149976449.jpg',
    metrics: 'Reducción del 65% en el tiempo de respuesta comercial a prospectos',
    deliverables: ['Catálogo B2B indexado', 'Integración WhatsApp Business API', 'Generador automático de proformas'],
    techOrMaterials: ['React 19', 'Tailwind CSS', 'TypeScript', 'Node.js Express'],
  },
  {
    id: 'port-textil-2',
    pillar: 'textil',
    title: 'Edición Merchandising para Cadena de Restaurantes Gourmet',
    client: 'Grupo Gastronómico (Lima / Cusco)',
    category: 'Estampado Textil & Tintas al Agua',
    description:
      'Uniformes de sala y mandiles de cocina con estampado en técnica Discharge (descarga que blanquea la fibra y tiñe el tejido sin dejar ninguna capa plástica sobre la tela), resistentes a grasa y lavado industrial.',
    image: '/src/assets/images/serigrafia_textil_pro_1793149975542.jpg',
    metrics: '+80 ciclos de lavado industrial sin desvanecimiento de color',
    deliverables: ['Mandiles de gabardina pesada', 'Poleras French Terry', 'Tintas base agua certificadas'],
    techOrMaterials: ['Tintas Discharge al agua', 'Gabardina 100% algodón', 'Costuras reforzadas con atraques'],
  },
  {
    id: 'port-carp-2',
    pillar: 'carpinteria',
    title: 'Mobiliario Corporativo Integral para Oficinas Coworking',
    client: 'Centro Empresarial San Isidro',
    category: 'Mobiliario Comercial a Medida',
    description:
      'Diseño y fabricación de mesas de directorio para 14 personas con pasacables invisibles de aluminio anodizado, mamparas divisorias acanaladas y lockers inteligentes.',
    image: '/src/assets/images/carpinteria_mobiliario_1793149976821.jpg',
    metrics: 'Espacio adaptado para 45 puestos de trabajo con acústica mejorada',
    deliverables: ['Mesa de directorio 4.20m', 'Lockers con cerradura digital', 'Isletas de trabajo modulares'],
    techOrMaterials: ['Estructura metálica electropintada', 'Melamina Nogal Terracota 18mm', 'Cantos de 2mm termo-adheridos'],
  },
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    pillar: 'general',
    popular: true,
    question: '¿Quién es MASTER DESIGN S.A.C. y cómo garantizan la formalidad?',
    answer:
      'MASTER DESIGN S.A.C. es una empresa peruana formalmente constituida con RUC 20608945123. Emitimos factura y boleta electrónica por cada proyecto. Brindamos contratos de prestación de servicios con hitos claros, cronograma de entregas y garantía técnica por escrito.',
  },
  {
    id: 'faq-2',
    pillar: 'textil',
    popular: true,
    question: '¿Cuál es el pedido mínimo para serigrafía textil y qué telas usan?',
    answer:
      'Trabajamos pedidos corporativos y de marcas desde 25 prendas en adelante. Producimos en 100% Algodón Pima Peruano peinado (título 30/1, 24/1 y 20/1), Algodón Tangüis y French Terry pesado de 400 gramos para poleras y hoodies. Para grandes producciones (1,000 a 50,000 unidades) ofrecemos precios de escala preferencial.',
  },
  {
    id: 'faq-3',
    pillar: 'textil',
    popular: true,
    question: '¿Qué es el estampado 3D Puff y las tintas Discharge?',
    answer:
      'El 3D Puff es una tinta termoplástica de microesferas que se expande bajo calor, creando un relieve tridimensional limpio de hasta 2 mm con una textura táctil impactante. La técnica Discharge (descarga química al agua) des-tiñe el color original de la fibra y tiñe la tela desde adentro, logrando un tacto completamente cero que no se siente al pasar la mano y es hiper transpirable.',
  },
  {
    id: 'faq-4',
    pillar: 'web',
    popular: true,
    question: '¿Qué tecnologías utilizan en el desarrollo web y cuánto demoran?',
    answer:
      'Utilizamos el stack moderno más veloz del mundo: Next.js (React), TypeScript, Tailwind CSS y Node.js. Esto garantiza tiempos de carga inferiores a 1.2 segundos y puntajes de 95-100 en Google PageSpeed. Una Landing Page de alta conversión se entrega en 7 días hábiles, mientras que un E-commerce o plataforma SaaS requiere entre 14 y 21 días.',
  },
  {
    id: 'faq-5',
    pillar: 'web',
    popular: false,
    question: '¿La web incluye pasarela de pago para cobrar en Perú con Yape, Plin y tarjetas?',
    answer:
      'Sí. Integramos pasarelas oficiales peruanas e internacionales: Niubiz, Culqi, Mercado Pago, Stripe, así como botones de pago directo por QR de Yape y Plin, además de un flujo inteligente que redirige al carrito de WhatsApp para cerrar ventas inmediatas con atención humana.',
  },
  {
    id: 'faq-6',
    pillar: 'carpinteria',
    popular: true,
    question: '¿Hacen visita técnica y renders 3D para proyectos de carpintería y muebles?',
    answer:
      'Sí, coordinamos una visita técnica a su local o domicilio en Lima Metropolitana para realizar el levantamiento de medidas exactas. Posteriormente entregamos una propuesta con render 3D fotorrealista para que visualice cómo quedará el mueble antes de cortar la primera pieza de madera o tablero.',
  },
  {
    id: 'faq-7',
    pillar: 'carpinteria',
    popular: false,
    question: '¿Qué maderas y tableros utilizan para garantizar durabilidad comercial?',
    answer:
      'Utilizamos maderas nobles estacionadas como Cedro, Tornillo, Nogal y Roble, combinadas con tableros de MDF y melamina hidrófuga RH (Resistente a la Humedad) de marcas líderes como Pelíkano, sellados con tapacantos gruesos de 2 mm y acabados en laca poliuretano de alta resistencia al rayado.',
  },
  {
    id: 'faq-8',
    pillar: 'general',
    popular: true,
    question: '¿Realizan envíos o instalaciones en provincias fuera de Lima?',
    answer:
      'Por supuesto. Para serigrafía textil y merchandising despachamos a todo el Perú mediante agencias de confianza (Shalom, Marvisur, Olva Courier con código de rastreo). Para desarrollo web el servicio es 100% digital a nivel global. En carpintería comercial despachamos mobiliario pre-ensamblado o enviamos cuadrilla técnica para montaje en obra.',
  },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test-1',
    author: 'Carlos Mendoza Ramos',
    role: 'Director de Marca & Operaciones',
    company: 'Nórdico Apparel (Moda Streetwear)',
    city: 'Lima',
    service: 'Serigrafía 3D Puff & Pima 30/1',
    quote:
      'Habíamos probado 3 talleres en Gamarra y ninguno lograba el relieve nítido en el 3D Puff sin agrietarse al estirar. MASTER DESIGN S.A.C. nos entregó 1,500 hoodies y polos con acabado impecable. El estándar es de exportación.',
    results: 'Cero devoluciones y agotamos el stock en 72 horas.',
  },
  {
    id: 'test-2',
    author: 'Valeria Quispe Arana',
    role: 'Head of Growth & Ecommerce',
    company: 'Biolab Cosméticos Perú',
    city: 'Miraflores, Lima',
    service: 'Desarrollo Web Next.js & Pasarelas',
    quote:
      'Nuestra tienda anterior tardaba 5 segundos en cargar y perdíamos el 70% del tráfico de Instagram. Con la nueva web en Next.js desarrollada por MASTER DESIGN, la carga es instantánea y el checkout con Yape y tarjeta disparó las ventas.',
    results: '+180% en ventas web el primer mes de relanzamiento.',
  },
  {
    id: 'test-3',
    author: 'Ing. Rodrigo Benavides',
    role: 'Gerente de Infraestructura & Retail',
    company: 'Café Origen Espresso Bar',
    city: 'San Isidro / Barranco',
    service: 'Carpintería Fina & Muebles a Medida',
    quote:
      'Necesitábamos una barra principal en roble con curvas complejas y resistencia al agua hirviendo y café. La precisión milimétrica del ensamble y el laqueado de MASTER DESIGN S.A.C. superó todas nuestras expectativas.',
    results: 'Montaje completado 3 días antes de la fecha de inauguración.',
  },
];
