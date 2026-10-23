import { StackGroup } from '../models/content.models';

export const ABOUT_PARAGRAPHS: string[] = [
  'Sou desenvolvedor Full Stack, com foco na criação de aplicações web, sistemas e soluções digitais personalizadas.',
  'Trabalho com tecnologias modernas para construir aplicações organizadas, funcionais e preparadas para evoluir conforme as necessidades de cada projeto.',
];

export const ABOUT_STATEMENT =
  'Meu objetivo é transformar ideias e necessidades reais em soluções tecnológicas eficientes.';

export const STACK_GROUPS: StackGroup[] = [
  { label: 'Front-end', items: ['Angular', 'TypeScript'] },
  { label: 'Back-end', items: ['Laravel', 'PHP', 'APIs REST'] },
  { label: 'Mobile', items: ['Ionic'] },
  { label: 'Dados', items: ['MySQL'] },
];

export const WORK_PRINCIPLES: { title: string; text: string }[] = [
  {
    title: 'Problema antes da tecnologia',
    text: 'A escolha técnica parte do que precisa ser resolvido.',
  },
  {
    title: 'Código preparado para evoluir',
    text: 'Estrutura organizada para receber novas funcionalidades.',
  },
  {
    title: 'Comunicação próxima',
    text: 'Acompanhamento do planejamento à entrega.',
  },
];

/** Fotografia profissional (opcional). Enquanto for `null`, a seção exibe o monograma. */
export const ABOUT_PHOTO: { src: string; alt: string; width: number; height: number } | null = {
  src: 'images/about/heitor-araujo.webp',
  alt: 'Retrato de Heitor Araujo, de camisa polo azul.',
  width: 750,
  height: 560,
};
