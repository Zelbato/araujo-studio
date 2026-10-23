import { Blocks, Monitor, Plug, Smartphone } from 'lucide-angular';
import { Service } from '../models/content.models';

export const SERVICES: Service[] = [
  {
    number: '01',
    title: 'Sites e aplicações web',
    summary:
      'Sites institucionais, landing pages e aplicações web responsivas, pensadas para a experiência de quem usa, com bom desempenho e conteúdo organizado.',
    includes: ['Sites institucionais', 'Landing pages', 'Aplicações web responsivas'],
    icon: Monitor,
  },
  {
    number: '02',
    title: 'Sistemas personalizados',
    summary:
      'Sistemas para gerenciar informações, automatizar tarefas repetitivas e controlar processos que planilhas e ferramentas genéricas já não resolvem.',
    includes: ['Gestão de informações', 'Automação de tarefas', 'Controle de processos'],
    icon: Blocks,
  },
  {
    number: '03',
    title: 'APIs e integrações',
    summary:
      'APIs REST e integrações que conectam plataformas, serviços e aplicações, para que os dados circulem entre eles sem retrabalho manual.',
    includes: ['APIs REST', 'Integração entre plataformas', 'Conexão entre serviços'],
    icon: Plug,
  },
  {
    number: '04',
    title: 'Aplicações mobile',
    summary:
      'Aplicativos multiplataforma com Ionic e Angular, com foco em usabilidade e integrados aos sistemas web que o seu negócio já utiliza.',
    includes: ['Android e iOS', 'Ionic e Angular', 'Integração com sistemas web'],
    icon: Smartphone,
  },
];
