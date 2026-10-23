import { Project } from '../models/content.models';

/**
 * Projetos reais. Descrições baseadas na documentação e no código de cada projeto.
 * Para adicionar um projeto, inclua um novo item; sem capturas, use `images: []`
 * e a interface exibirá uma área reservada.
 */
export const PROJECTS: Project[] = [
  {
    slug: 'newcareers',
    name: 'NewCareers',
    category: 'Plataforma web',
    status: 'Projeto pessoal · em desenvolvimento',
    summary:
      'Plataforma de orientação profissional que aplica testes vocacionais e relaciona as respostas a perfis, áreas e profissões.',
    context:
      'Nasceu como trabalho acadêmico (TCC) e está evoluindo para uma plataforma pública de orientação vocacional. O produto ainda não foi lançado em produção.',
    features: [
      'Teste vocacional com cálculo de afinidade realizado no servidor',
      'Resultado com perfis, áreas profissionais e profissões relacionadas',
      'Cadastro, login, perfil e histórico de testes concluídos',
      'Resultados preservados por versão do teste',
    ],
    architecture:
      'A interface em Angular, com renderização no servidor (SSR), conduz a jornada do usuário. Uma API REST em Laravel valida as respostas, controla o acesso e calcula as afinidades. Cada tentativa guarda a versão do teste utilizada, para que alterações futuras não modifiquem resultados já entregues.',
    currentState:
      'Em desenvolvimento ativo, com testes automatizados no backend. As capturas mostram telas da versão atual em desenvolvimento.',
    stack: ['Angular', 'TypeScript', 'Laravel', 'MySQL', 'Tailwind CSS'],
    images: [
      {
        basePath: 'images/projects/newcareers-home',
        widths: [720, 1280],
        width: 1280,
        height: 576,
        alt: 'Página inicial do NewCareers com o título “Descubra quais carreiras combinam com quem você é” e um exemplo de perfil com compatibilidade por área.',
        caption: 'Página inicial',
      },
      {
        basePath: 'images/projects/newcareers-como-funciona',
        widths: [720, 1280],
        width: 1280,
        height: 576,
        alt: 'Página “Como funciona” do NewCareers, relacionando interesses, habilidades, personalidade, preferências e ambiente ideal.',
        caption: 'Como funciona',
      },
      {
        basePath: 'images/projects/newcareers-areas',
        widths: [720, 1280],
        width: 1280,
        height: 576,
        alt: 'Página de áreas profissionais do NewCareers com busca e filtros por categoria, como tecnologia, saúde e engenharias.',
        caption: 'Áreas profissionais',
      },
      {
        basePath: 'images/projects/newcareers-resultado',
        widths: [720, 1280],
        width: 1280,
        height: 576,
        alt: 'Prévia do resultado do teste no NewCareers, com gráfico das cinco áreas de maior afinidade e seus percentuais.',
        caption: 'Prévia do resultado do teste',
      },
    ],
    links: {
      repository: 'https://github.com/Zelbato/Teste-Vocacional',
    },
  },
  {
    slug: 'gestao-sorveteria',
    name: 'Gestão Sorveteria',
    category: 'Sistema de pedidos',
    status: 'Projeto para empresa',
    summary:
      'Sistema para organizar pedidos e atendimento de uma loja de açaí e sorvetes, com cardápio digital para o cliente.',
    context:
      'Desenvolvido para organizar o funcionamento de uma loja de açaí e sorvetes em uma interface simples, conectada a uma base de dados para consulta e atualização das informações.',
    features: [
      'Cadastro de produtos, categorias e pedidos em uma única área',
      'Cardápio e carrinho para o cliente montar o pedido',
      'Consulta dos pedidos realizados pelo cliente',
      'Fluxo simples para atendimento e consulta de informações',
    ],
    architecture:
      'Front-end em Angular com TypeScript consumindo uma API em Laravel, com dados persistidos em MySQL.',
    stack: ['Angular', 'TypeScript', 'Laravel', 'MySQL'],
    images: [
      {
        basePath: 'images/projects/gestao-sorveteria-home',
        widths: [720, 1280],
        width: 1280,
        height: 574,
        alt: 'Tela inicial do Gestão Sorveteria com navegação para cardápio, meus pedidos e cartão fidelidade, e o título “Explosão de sabor”.',
        caption: 'Tela inicial do cliente',
      },
    ],
    links: {
      repository: 'https://github.com/Zelbato/pedy',
    },
  },
];
