import { LucideIconData } from 'lucide-angular';

export type SectionId = 'inicio' | 'servicos' | 'projetos' | 'processo' | 'sobre' | 'faq' | 'contato';

export interface NavItem {
  id: SectionId;
  label: string;
}

export interface Service {
  number: string;
  title: string;
  summary: string;
  includes: string[];
  icon: LucideIconData;
}

export interface ProjectImage {
  /** Caminho sem sufixo de largura, ex.: `images/projects/newcareers-home`. */
  basePath: string;
  /** Larguras disponíveis em WebP (`<basePath>-<largura>.webp`). */
  widths: number[];
  /** Proporção largura/altura usada para reservar espaço e evitar layout shift. */
  width: number;
  height: number;
  alt: string;
  caption: string;
}

export interface Project {
  slug: string;
  name: string;
  category: string;
  /** Natureza do projeto: pessoal, acadêmico, para empresa etc. */
  status: string;
  summary: string;
  context: string;
  features: string[];
  architecture?: string;
  currentState?: string;
  stack: string[];
  /** Capturas reais exibidas no carrossel. Lista vazia exibe uma área reservada. */
  images: ProjectImage[];
  links: {
    repository?: string;
    demo?: string;
  };
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  outcome: string;
  icon: LucideIconData;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface StackGroup {
  label: string;
  items: string[];
}
