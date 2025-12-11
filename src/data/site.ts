// src/data/site.ts
// Config base por ejecutiva. Este archivo se cambia por repo (Erika / María Inés)

export const SITE = {
  // Nombre de la ejecutiva
  name: 'Erika Zuñiga', // Ej: "Erika", "María Inés"

  // Teléfono sin espacios ni signos (solo números)
  phone: '942874934',

  // Mensaje predeterminado para WhatsApp
  whatsappMsg: 'Hola, quiero cotizar un plan UCM.',

  // Email de contacto (puede ser Gmail o corporativo)
  email: 'ezuniga@ucmchile.cl',

  // Ciudad o áreas atendidas
  city: 'Santiago y V Región',

  // Dominio real del sitio (sin slash al final)
  domain: 'https://www.rescatesmedicos.cl',

  // Imagen para OpenGraph (relativa a /public)
  ogImage: '/images/og-default.jpg',

  // Título SEO opcional (si se deja vacío, usamos el de UCM_SEO)
  title: '',

  // Descripción SEO opcional
  description: ''
}

export const LINKS = {
  wa: () => `https://wa.me/56${SITE.phone}?text=${encodeURIComponent(SITE.whatsappMsg)}`,
  call: () => `tel:+569${SITE.phone}`
}
