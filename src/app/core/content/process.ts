import { Code, MessagesSquare, Rocket, Route } from 'lucide-angular';
import { ProcessStep } from '../models/content.models';

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Entendimento',
    description:
      'Conversa inicial para identificar necessidades, objetivos e os problemas que o projeto deverá solucionar.',
    outcome: 'Objetivos e escopo inicial',
    icon: MessagesSquare,
  },
  {
    number: '02',
    title: 'Planejamento',
    description:
      'Definição das funcionalidades, da estrutura da solução e da organização das etapas de desenvolvimento.',
    outcome: 'Funcionalidades e etapas definidas',
    icon: Route,
  },
  {
    number: '03',
    title: 'Desenvolvimento',
    description:
      'Construção da aplicação, implementação das funcionalidades, integrações e testes, com acompanhamento a cada etapa.',
    outcome: 'Versões para acompanhar a evolução',
    icon: Code,
  },
  {
    number: '04',
    title: 'Entrega e evolução',
    description:
      'Validação, disponibilização da solução e definição de melhorias ou suporte, conforme o escopo contratado.',
    outcome: 'Solução publicada e próximos passos',
    icon: Rocket,
  },
];
