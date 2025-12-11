export const UCM_SEO = {
  primaryKeywords: [
    'unidad coronaria móvil',
    'planes UCM',
    'atención médica a domicilio',
    'rescate médico',
    'atención 24/7',
    'plan UCM familiar',
    'plan UCM adulto mayor'
  ],

  transactionalKeywords: [
    'contratar plan UCM',
    'whatsapp UCM',
    'telefono unidad coronaria movil',
    'ejecutiva UCM Santiago',
    'cotizar plan UCM hoy',
    'contacto UCM',
    'afiliación UCM',
    'planes UCM precios',
    'planes UCM RM',
    'planes UCM Valparaíso'
  ],

  title: (executiveName: string) => `Contrata tu Plan UCM | ${executiveName} | Atención 24/7`,

  description: (city: string) =>
    `Afíliate a UCM con ejecutiva oficial. Atención médica a domicilio 24/7 en ${city}. Cotiza hoy por WhatsApp o llamada directa.`,

  headings: {
    H1: 'Contrata tu Plan UCM con Ejecutiva Oficial',

    H2: [
      'Atención médica a domicilio 24/7',
      'Planes UCM para familias y adultos mayores',
      'Unidad Coronaria Móvil – Contacto Directo',
      'Cotiza tu Plan UCM hoy',
      'Rescate Médico UCM',
      'Cobertura en Región Metropolitana y V Región'
    ],

    H3: [
      'Cobertura UCM en todo Santiago',
      'Afiliación directa y rápida',
      'Telemedicina y atención extrahospitalaria',
      'Asesoría personalizada por ejecutiva oficial',
      'Tranquilidad 24/7 para tu familia'
    ]
  },

  contentBlocks: {
    whyHere: [
      'Respuesta inmediata y directa con una ejecutiva UCM.',
      'Cotización en minutos vía WhatsApp o llamada.',
      'Asesoría personalizada según tu familia o empresa.',
      'Proceso de afiliación rápido y seguro.'
    ],

    benefits: [
      'Atención médica extrahospitalaria 24/7.',
      'Rescate ante emergencias con flota UCM.',
      'Planes familiares, senior y para empresas.',
      'Cobertura principal en Región Metropolitana y Valparaíso.'
    ]
  },

  faqs: [
    {
      q: '¿Cómo contrato un Plan UCM?',
      a: 'Puedes contratar directamente con la ejecutiva oficial vía WhatsApp o llamada. El proceso es rápido y se realiza en pocos minutos.'
    },
    {
      q: '¿Qué incluye un Plan UCM?',
      a: 'Incluye atención médica extrahospitalaria, ambulancia de rescate, cobertura 24/7 y planes para familias, adultos mayores o empresas.'
    },
    {
      q: '¿En qué zonas hay cobertura?',
      a: 'La cobertura principal es en Región Metropolitana y Valparaíso, con planes especiales según tu comuna. Consulta directamente con la ejecutiva.'
    },
    {
      q: '¿Cuánto demora en estar activo el plan?',
      a: 'En la mayoría de los casos, tu plan puede quedar activo el mismo día, una vez completado el proceso de afiliación con la ejecutiva.'
    }
  ],

  schema: (canonical: string, execName: string, phone: string, city: string) => ({
    '@context': 'https://schema.org',
    '@type': 'MedicalOrganization',
    name: `Unidad Coronaria Móvil - Ejecutiva ${execName}`,
    url: canonical,
    logo: `${canonical}/favicon.png`,
    image: `${canonical}/images/og-default.jpg`,
    description: `Ejecutiva UCM oficial para contratación de planes en ${city}.`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: `+569${phone}`,
      contactType: 'sales',
      availableLanguage: ['Spanish']
    },
    areaServed: [city, 'Santiago', 'Valparaíso']
  })
}
