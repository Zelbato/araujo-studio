export interface ContactRequest {
  name: string;
  projectType: string;
  message: string;
}

export type MessageFormat = 'whatsapp' | 'email';

/**
 * Protocolo curto para identificar a solicitação na conversa: HA-AAMMDD-XXXX.
 * Gerado no navegador; serve como referência, não como registro em sistema.
 */
export function createProtocol(date = new Date()): string {
  const pad = (value: number) => value.toString().padStart(2, '0');
  const day = `${pad(date.getFullYear() % 100)}${pad(date.getMonth() + 1)}${pad(date.getDate())}`;
  const alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // sem caracteres ambíguos (0/O, 1/I)
  const random = crypto.getRandomValues(new Uint8Array(4));
  const suffix = Array.from(random, (byte) => alphabet[byte % alphabet.length]).join('');
  return `HA-${day}-${suffix}`;
}

/**
 * Monta a mensagem enviada pelo formulário de contato.
 * WhatsApp: formatação nativa (*negrito*, `código`, > citação, _itálico_). E-mail: texto simples.
 *
 * Não use emojis nem outros caracteres fora do plano básico do Unicode: alguns clientes do
 * WhatsApp (desktop/Web) os corrompem ao receber o texto por link wa.me e exibem "�".
 */
export function buildContactMessage(
  request: ContactRequest,
  format: MessageFormat,
  protocol: string,
  date = new Date(),
): string {
  const whatsapp = format === 'whatsapp';
  const title = (text: string) => (whatsapp ? `*${text}*` : text);
  const heading = (text: string) => (whatsapp ? `*▸ ${text}*` : `▸ ${text.toUpperCase()}`);
  const code = (text: string) => (whatsapp ? `\`${text}\`` : text);
  const quote = (text: string) =>
    text
      .split(/\r?\n/)
      .map((line) => (whatsapp ? `> ${line}` : line))
      .join('\n');
  const note = (text: string) => (whatsapp ? `_${text}_` : text);

  const sentAt = date.toLocaleString('pt-BR', { dateStyle: 'short', timeStyle: 'short' });
  const name = request.name.trim();

  const lines = [
    title('NOVA SOLICITAÇÃO DE PROJETO'),
    `Protocolo: ${code(protocol)}`,
    '',
    `Olá, Heitor! Meu nome é ${name} e gostaria de conversar sobre um projeto.`,
    '',
    heading('Contato'),
    `Nome: ${name}`,
    '',
    heading('Tipo de projeto'),
    request.projectType || 'Ainda não definido',
    '',
    heading('Descrição'),
    quote(request.message.trim()),
    '',
    note(`Enviado pelo site · ${sentAt}`),
  ];

  return lines.join('\n');
}
