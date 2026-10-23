import { buildContactMessage, createProtocol } from './contact-message';

describe('contact-message', () => {
  const date = new Date(2026, 9, 23, 14, 20);
  const request = { name: '  Maria ', projectType: 'Sistema personalizado', message: ' Linha 1\nLinha 2 ' };

  it('creates a protocol with date and readable suffix', () => {
    expect(createProtocol(date)).toMatch(/^HA-261023-[A-HJ-NP-Z2-9]{4}$/);
  });

  it('formats the WhatsApp message with protocol, sections and native formatting', () => {
    const text = buildContactMessage(request, 'whatsapp', 'HA-261023-ABCD', date);
    expect(text.startsWith('*NOVA SOLICITAÇÃO DE PROJETO*\nProtocolo: `HA-261023-ABCD`')).toBe(true);
    expect(text).toContain('Nome: Maria');
    expect(text).toContain('*▸ Tipo de projeto*\nSistema personalizado');
    expect(text).toContain('*▸ Descrição*\n> Linha 1\n> Linha 2');
  });

  it('only uses characters from the Unicode basic plane (no emojis)', () => {
    const text = buildContactMessage(request, 'whatsapp', 'HA-261023-ABCD', date);
    expect([...text].every((char) => char.codePointAt(0)! <= 0xffff)).toBe(true);
  });

  it('uses plain text for e-mail and a fallback project type', () => {
    const text = buildContactMessage({ ...request, projectType: '' }, 'email', 'HA-261023-ABCD', date);
    expect(text).not.toMatch(/[*`>_]/);
    expect(text).toContain('Protocolo: HA-261023-ABCD');
    expect(text).toContain('Ainda não definido');
  });
});
