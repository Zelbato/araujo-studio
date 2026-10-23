/**
 * Configuração central do site: identidade, canais de contato e SEO.
 * Campos vazios ('') são ocultados automaticamente na interface.
 */
export const SITE_CONFIG = {
  name: 'Heitor Araujo',
  role: 'Desenvolvedor Full Stack',
  /** Domínio definitivo (sem barra final). Preencher antes da publicação para URLs absolutas de SEO. */
  url: '',
  contact: {
    /** Número no formato internacional, apenas dígitos (55 + DDD + número). */
    whatsapp: '5517988096975',
    whatsappMessage:
      'Olá, Heitor! Vim pelo seu site e gostaria de conversar sobre um projeto.',
    email: 'contato.heitoraraujo@gmail.com',
    linkedin: 'https://www.linkedin.com/in/heitor-araujo-9693a92a0',
    instagram: 'https://www.instagram.com/heitoraraujo.dev/',
    github: 'https://github.com/Zelbato',
  },
} as const;

export function whatsappUrl(message: string = SITE_CONFIG.contact.whatsappMessage): string {
  return `https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function mailtoUrl(subject: string, body = ''): string {
  const params = new URLSearchParams({ subject, body });
  // URLSearchParams codifica espaços como "+", que clientes de e-mail não interpretam.
  return `mailto:${SITE_CONFIG.contact.email}?${params.toString().replace(/\+/g, '%20')}`;
}

/** Extrai o identificador público (usuário) de uma URL de perfil. */
export function profileHandle(url: string): string {
  return url.replace(/\/+$/, '').split('/').pop() ?? url;
}

/** Formata um número brasileiro (55 + DDD + número) para exibição: +55 (17) 98809-6975. */
export function formatPhoneBR(digits: string): string {
  const match = digits.match(/^55(\d{2})(\d{4,5})(\d{4})$/);
  return match ? `+55 (${match[1]}) ${match[2]}-${match[3]}` : digits;
}
