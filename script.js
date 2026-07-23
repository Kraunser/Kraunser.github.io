const galleryFrom = (folder, entries) =>
  entries.map(([file, label, note]) => ({
    src: `./assets/${folder}/${file}`,
    label,
    note,
  }));

const portfolioDataPT = {
  name: "Matheus Henrique da Silva Figueiredo Bueno",
  heroTitle:
    "Profissional de TI focado em suporte, automação e desenvolvimento de soluções web.",
  metaDescription:
    "Portfólio de Matheus Bueno com foco em suporte corporativo, automação e desenvolvimento de soluções web.",
  headline:
    "Atuo com suporte corporativo e infraestrutura local, resolvendo incidentes, apoiando usuários e contribuindo para a continuidade da operação.",
  headlineSecondary:
    "Também desenvolvo sistemas, plataformas e automações que transformam problemas reais em soluções mais organizadas, rastreáveis e eficientes.",
  about: [
    "Minha experiência profissional está concentrada em suporte de TI, atendimento N1/N2, Windows, Microsoft 365, Active Directory, redes, ativos e ambientes industriais.",
    "Em paralelo, estudo e desenvolvo projetos pessoais utilizando tecnologias como React, Next.js, TypeScript, Python, FastAPI, PostgreSQL e Docker.",
    "Meu objetivo é unir conhecimento operacional e desenvolvimento para criar soluções que façam sentido no uso diário, não apenas aplicações tecnicamente interessantes.",
  ],
  heroMetrics: [
    { value: "17", label: "telas no Portal de Gestão de T.I." },
    { value: "Suporte", label: "chamados, ativos e inventário" },
    { value: "Full stack", label: "web e automação aplicados à operação" },
  ],
  services: [
    "Suporte técnico e melhoria de processos de TI",
    "Sistemas internos para atendimento, ativos e controle operacional",
    "Automações para reduzir tarefas manuais e padronizar rotinas",
    "Aplicações web com frontend, backend, banco de dados e autenticação",
    "Plataformas pessoais envolvendo IA, análise de dados e colaboração",
  ],
  skills: [
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Fastify",
    "FastAPI",
    "Python",
    "PowerShell",
    "Windows",
    "Microsoft 365",
    "Active Directory",
    "Redes",
    "Flask",
    "SQLite",
    "Django REST",
    "PostgreSQL",
    "Docker",
    "Socket.io",
    "UI Systems",
  ],
  workflow: [
    "Entendo o incidente, a rotina e o impacto para quem usa ou mantém o sistema.",
    "Resolvo a necessidade imediata e identifico o que pode ser padronizado ou automatizado.",
    "Uso desenvolvimento, dados e interface para tornar a operação mais clara, rastreável e sustentável.",
  ],
  contacts: [
    {
      label: "Email",
      value: "Matheushsfbueno@gmail.com",
      href: "mailto:Matheushsfbueno@gmail.com",
    },
    {
      label: "LinkedIn",
      value: "Matheus Bueno",
      href: "https://www.linkedin.com/in/matheus-henrique-da-silva-figueiredo-bueno-8b73211ba/",
    },
    {
      label: "GitHub",
      value: "github.com/Kraunser",
      href: "https://github.com/Kraunser",
    },
  ],
  featuredCaseId: "gestao-ti",
  caseStudies: [
    {
      id: "gestao-ti",
      accent: "#6aa6ff",
      initialShot: 3,
      title: "Portal de Gestão de T.I.",
      category: "Sistema web corporativo",
      summary:
        "Portal de gestão de T.I. com chamados, ativos, inventário, administração e utilitários internos na mesma experiência.",
      description:
        "Um sistema em Next.js pensado para a operação do dia a dia. O case mistura fluxo de suporte, leitura executiva, gerenciamento de equipamentos e ferramentas auxiliares, com várias telas reais para mostrar a profundidade do produto.",
      stack: ["Next.js", "React", "SQLite", "Recharts"],
      highlights: [
        "17 telas reais cobrindo login, chamados, ativos, inventário, admin e ferramentas.",
        "Fluxo completo do ticket: fila, detalhes laterais, abertura e acompanhamento.",
        "Leitura operacional e leitura executiva convivendo dentro da mesma plataforma.",
      ],
      architecture: [
        "Next.js + React",
        "Route handlers + auth",
        "SQLite + configurações locais",
        "Chamados, ativos e utilitários internos",
      ],
      repoUrl: null,
      gallery: galleryFrom("gestao-ti", [
        ["01-login.png", "Login", "Entrada inicial do portal de demandas."],
        ["02-forgot-password.png", "Recuperação", "Fluxo de senha esquecida para acesso interno."],
        ["03-change-password.png", "Nova senha", "Atualização segura de credenciais."],
        ["04-tickets-list.png", "Chamados", "Fila principal de chamados com filtros e SLA."],
        ["05-ticket-details-sheet.png", "Detalhes", "Painel lateral para contexto, atualizações e responsável."],
        ["06-new-ticket.png", "Novo chamado", "Abertura estruturada de solicitações."],
        ["07-manager-dashboard.png", "Dashboard de área", "Visão tática de volume, prioridade e status."],
        ["08-assets.png", "Ativos", "Mapa visual dos equipamentos por setor."],
        ["09-inventory.png", "Inventário", "Controle de estoque, disponibilidade e saída."],
        ["10-admin-dashboard.png", "Painel executivo", "Indicadores administrativos e insights de operação."],
        ["11-admin-users.png", "Usuários", "Gestão de pessoas e níveis de acesso."],
        ["12-admin-sectors.png", "Setores", "Configuração dos setores da organização."],
        ["13-tools-home.png", "Ferramentas", "Hub interno para utilitários de T.I."],
        ["14-tools-remove-profile.png", "Remover perfil", "Automação para manutenção de perfis."],
        ["15-tools-service-manager.png", "Service manager", "Fluxo auxiliar para suporte técnico."],
        ["16-tools-disk-cleanup.png", "Limpeza de disco", "Utilitário integrado para manutenção."],
        ["17-settings.png", "Configurações", "Ajustes gerais da plataforma."],
      ]),
    },
    {
      id: "kairon",
      accent: "#4f8cff",
      initialShot: 2,
      title: "Kairon",
      category: "Plataforma de produtividade em desenvolvimento",
      summary:
        "Plataforma full stack em desenvolvimento para rotina de estudos, criada por mim em parceria com mais duas pessoas.",
      description:
        "O Kairon está em desenvolvimento em colaboração com mais duas pessoas. O produto organiza produtividade acadêmica em um fluxo mais completo do que um task manager simples, combinando onboarding, segmentação por workspace, board operacional, sessões de foco e uma camada de progresso para manter constância de estudo.",
      stack: ["React", "TypeScript", "Django REST Framework", "PostgreSQL"],
      highlights: [
        "Projeto em andamento, desenvolvido por mim em parceria com mais duas pessoas, com 5 telas reais já integradas ao case.",
        "Arquitetura full stack com autenticação JWT, isolamento por workspace e service layer no backend.",
        "Fluxo de produto mais amplo que CRUD: planejamento, execução, foco e acompanhamento de evolução.",
      ],
      architecture: [
        "React + TypeScript + Vite",
        "Django + DRF + JWT",
        "PostgreSQL",
        "Workspaces, tasks, focus e gamificação",
      ],
      repoUrl: null,
      gallery: galleryFrom("kairon", [
        ["01-auth-screen.png", "Auth e landing", "Entrada do produto com proposta clara, prova visual e fluxo de autenticação."],
        ["02-workspace-picker.png", "Áreas de foco", "Seleção de workspaces para separar rotina, estudos e projetos em ambientes distintos."],
        ["03-board-dashboard.png", "Board de tarefas", "Visão principal de operação com métricas, filtros, colunas e cards acionáveis."],
        ["04-focus-panel.png", "Sessão de foco", "Fluxo de foco com duração configurável e vínculo opcional com tarefa ativa."],
        ["05-progress-panel.png", "Progresso e gamificação", "Painel de evolução com nível, streak, missões e badges desbloqueados."],
      ]),
    },
    {
      id: "abyssalvtt",
      accent: "#62f0c0",
      initialShot: 3,
      title: "AbyssalVTT",
      category: "Virtual tabletop para Call of Cthulhu",
      summary:
        "Um VTT que reúne mesa, fichas, regras, combate, navegação e ferramentas do Guardião em uma única sessão de Call of Cthulhu.",
      description:
        "A galeria combina a jornada de entrada com os avanços mais recentes da mesa: planta interativa do navio, registro de avarias, clima com cálculo de navegação, encontros de combate, trilha sincronizada e compêndio de regras.",
      stack: ["React", "Vite", "Pixi.js", "Socket.io"],
      highlights: [
        "8 telas curadas entre acesso, campanha, ficha e ferramentas atuais da sessão.",
        "Navio interativo, clima, navegação e encontros transformam estado de jogo em decisões operacionais.",
        "Mesa sonora e compêndio CoC reduzem a troca de ferramentas durante a campanha.",
      ],
      architecture: [
        "React + Vite + Pixi.js",
        "FastAPI + Socket.IO",
        "Redis + PostgreSQL",
        "RAG com PDFs e motor de conhecimento",
      ],
      repoUrl: null,
      gallery: galleryFrom("abyssalvtt", [
        ["vtt-login.png", "Entrada", "Tela de acesso com atmosfera forte e identidade do universo do produto."],
        ["vtt-campaign-lobby.png", "Lobby da campanha", "Visão da campanha ativa com ficha selecionada e resumo pronto para entrar na sessão."],
        ["vtt-ficha-dashboard.png", "Ficha do investigador", "Dashboard da ficha com atributos, recursos e leitura rápida de estado."],
        ["vtt-current-ship-damage.png", "Navio e avarias", "Planta interativa do navio com compartimentos, status e registro visual de danos."],
        ["vtt-current-weather-navigation.png", "Clima e navegação", "Tempestade ativa alterando a velocidade do navio e apoiando o cálculo de viagem."],
        ["vtt-current-combat-encounter.png", "Encontro de combate", "Preparação de encontro com objetivo, criaturas, atributos e início do rastreador."],
        ["vtt-current-soundboard.png", "Mesa sonora", "Trilhas sincronizadas e efeitos de cena organizados dentro da campanha."],
        ["vtt-current-rules-compendium.png", "Regras e compêndio", "Consulta centralizada de regras, perícias, criaturas, armas, ocupações e livros."],
      ]),
    },
    {
      id: "overtrack",
      accent: "#ffb347",
      initialShot: 0,
      title: "OverTrack",
      category: "Plataforma com IA para Overwatch",
      summary:
        "Plataforma para leitura de lobby, builds, counters e notícias de Overwatch em uma interface tático-analítica.",
      description:
        "Esse case combina API, IA e produto visual. A interface transforma dados, composições e leitura de partida em telas pensadas para consulta rápida, com foco em jogadores que querem interpretar o meta e decidir melhor durante a partida.",
      stack: ["Fastify", "FastAPI", "Gemini", "OverFast API"],
      highlights: [
        "6 telas reais mostrando homepage, lobby analyser, builds, counters e news.",
        "Arquitetura dividida entre gateway e serviço de inteligência para leitura do jogo.",
        "Visual consistente com linguagem de produto para gaming, sem perder clareza analítica.",
      ],
      architecture: [
        "React frontend",
        "Fastify gateway",
        "FastAPI AI service",
        "OverFast API + Gemini 2.5 Flash",
      ],
      repoUrl: null,
      gallery: galleryFrom("overtrack", [
        ["HomePage.png", "Home", "Entrada principal do produto com resumo da proposta e atalhos para os módulos."],
        ["LobbyAnalyser.png", "Lobby analyser", "Leitura do lobby para comparar comps, mapa e confronto antes da partida."],
        ["Stadium Builds.png", "Stadium builds", "Tela de builds com orientações, atributos e contexto do herói."],
        ["Counter Picks.png", "Counter picks", "Análise de counters para tomada de decisão em tempo real."],
        ["News.png", "News", "Área de notícias e atualizações para acompanhar o meta."],
        ["stadium-tech-preview.png", "Tech preview", "Preview expandido do módulo de builds e leitura visual do sistema."],
      ]),
    },
    {
      id: "davinci",
      accent: "#59f89d",
      initialShot: 0,
      title: "DaVinci Decoder",
      category: "Workbench de decifração",
      summary:
        "Uma bancada para analisar ciphertext, arquivos e payloads multimídia com auto-detect e saída priorizada.",
      description:
        "O produto mistura heurística, apoio de machine learning e uma interface forte para triagem. Aqui o portfólio mostra a tela principal em formatos diferentes, focando na apresentação do fluxo entre entrada, detecção e resultado.",
      stack: ["Python", "Flask", "scikit-learn", "PyCryptodome"],
      highlights: [
        "3 capturas reais com enquadramentos pensados para portfólio.",
        "Interface com identidade própria para decode workstation, input e output channel.",
        "Narrativa visual alinhada ao tema técnico de análise, preview e descoberta.",
      ],
      architecture: [
        "Frontend web de triagem",
        "Flask API",
        "Engine com 95+ algoritmos",
        "Cripto, heurística e ML para scoring",
      ],
      repoUrl: null,
      gallery: galleryFrom("davinci", [
        ["portfolio-shot-wide.png", "Wide layout", "Visão ampla da decode workstation e dos resultados."],
        ["portfolio-shot.png", "Workbench", "Tela principal com input de ciphertext e output priorizado."],
        ["portfolio-shot-hero.png", "Hero crop", "Enquadramento de apresentação para o produto."],
      ]),
    },
  ],
};

const portfolioDataEN = {
  name: "Matheus Henrique da Silva Figueiredo Bueno",
  heroTitle:
    "IT professional focused on support, automation, and web solution development.",
  metaDescription:
    "Matheus Bueno's portfolio focused on corporate IT support, automation, and web solution development.",
  headline:
    "I work with corporate support and local infrastructure, resolving incidents, assisting users, and helping maintain operational continuity.",
  headlineSecondary:
    "I also build systems, platforms, and automations that turn real-world problems into more organized, traceable, and efficient solutions.",
  about: [
    "My professional experience is centered on IT support, N1/N2 service, Windows, Microsoft 365, Active Directory, networks, assets, and industrial environments.",
    "In parallel, I study and develop personal projects using technologies such as React, Next.js, TypeScript, Python, FastAPI, PostgreSQL, and Docker.",
    "My goal is to combine operational knowledge and development to create solutions that make sense in everyday use, not just technically interesting applications.",
  ],
  heroMetrics: [
    { value: "17", label: "screens in the IT Management Portal" },
    { value: "Support", label: "tickets, assets, and inventory" },
    { value: "Full stack", label: "web and automation applied to operations" },
  ],
  services: [
    "Technical support and IT process improvement",
    "Internal systems for service, assets, and operational control",
    "Automations that reduce manual tasks and standardize routines",
    "Web applications with frontend, backend, databases, and authentication",
    "Personal platforms involving AI, data analysis, and collaboration",
  ],
  skills: [
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Fastify",
    "FastAPI",
    "Python",
    "PowerShell",
    "Windows",
    "Microsoft 365",
    "Active Directory",
    "Networks",
    "Flask",
    "SQLite",
    "Django REST",
    "PostgreSQL",
    "Docker",
    "Socket.io",
    "UI Systems",
  ],
  workflow: [
    "I understand the incident, the routine, and the impact on the people using or maintaining the system.",
    "I address the immediate need and identify what can be standardized or automated.",
    "I use development, data, and interface design to make operations clearer, traceable, and sustainable.",
  ],
  contacts: [
    {
      label: "Email",
      value: "Matheushsfbueno@gmail.com",
      href: "mailto:Matheushsfbueno@gmail.com",
    },
    {
      label: "LinkedIn",
      value: "Matheus Bueno",
      href: "https://www.linkedin.com/in/matheus-henrique-da-silva-figueiredo-bueno-8b73211ba/",
    },
    {
      label: "GitHub",
      value: "github.com/Kraunser",
      href: "https://github.com/Kraunser",
    },
  ],
  featuredCaseId: "gestao-ti",
  caseStudies: [
    {
      id: "gestao-ti",
      accent: "#6aa6ff",
      initialShot: 3,
      title: "IT Management Portal",
      category: "Corporate web system",
      summary:
        "An IT operations portal that brings tickets, assets, inventory, administration, and internal utilities into one product experience.",
      description:
        "A Next.js system designed for day-to-day operations. This case combines support flow, executive dashboards, equipment management, and utility tools, using real screens to show the product's depth.",
      stack: ["Next.js", "React", "SQLite", "Recharts"],
      highlights: [
        "17 real screens covering login, tickets, assets, inventory, admin, and internal tools.",
        "Complete ticket lifecycle: queue, side details, creation, and follow-up.",
        "Operational reading and executive reading coexist in the same platform.",
      ],
      architecture: [
        "Next.js + React",
        "Route handlers + auth",
        "SQLite + local configuration",
        "Tickets, assets, and internal utilities",
      ],
      repoUrl: null,
      gallery: galleryFrom("gestao-ti", [
        ["01-login.png", "Login", "Initial entry point to the internal demand portal."],
        ["02-forgot-password.png", "Recovery", "Forgot-password flow for internal access."],
        ["03-change-password.png", "New password", "Secure credential update flow."],
        ["04-tickets-list.png", "Tickets", "Main support queue with filters and SLA visibility."],
        ["05-ticket-details-sheet.png", "Details", "Side sheet for context, updates, and assignment."],
        ["06-new-ticket.png", "New ticket", "Structured request creation flow."],
        ["07-manager-dashboard.png", "Area dashboard", "Tactical view of volume, priority, and status."],
        ["08-assets.png", "Assets", "Visual overview of equipment by sector."],
        ["09-inventory.png", "Inventory", "Stock control, availability, and item output."],
        ["10-admin-dashboard.png", "Executive panel", "Administrative indicators and operational insights."],
        ["11-admin-users.png", "Users", "People management and access-level administration."],
        ["12-admin-sectors.png", "Sectors", "Organization sector configuration."],
        ["13-tools-home.png", "Tools", "Internal hub for IT-focused utilities."],
        ["14-tools-remove-profile.png", "Remove profile", "Automation for profile maintenance."],
        ["15-tools-service-manager.png", "Service manager", "Auxiliary flow for technical support."],
        ["16-tools-disk-cleanup.png", "Disk cleanup", "Integrated maintenance utility."],
        ["17-settings.png", "Settings", "General platform settings."],
      ]),
    },
    {
      id: "kairon",
      accent: "#4f8cff",
      initialShot: 2,
      title: "Kairon",
      category: "Student productivity platform in progress",
      summary:
        "A full stack study routine platform in progress, built by me in collaboration with two other people.",
      description:
        "Kairon is currently in development in collaboration with two other people. The product structures academic productivity into a broader flow than a simple task manager, combining onboarding, workspace segmentation, an operational board, focus sessions, and a progress layer built to reinforce consistency.",
      stack: ["React", "TypeScript", "Django REST Framework", "PostgreSQL"],
      highlights: [
        "Work in progress, developed by me with two collaborators, with 5 real screens already integrated into the case.",
        "Full stack architecture with JWT authentication, workspace isolation, and an explicit backend service layer.",
        "A wider product loop than CRUD alone: planning, execution, focus, and progress tracking.",
      ],
      architecture: [
        "React + TypeScript + Vite",
        "Django + DRF + JWT",
        "PostgreSQL",
        "Workspaces, tasks, focus, and gamification",
      ],
      repoUrl: null,
      gallery: galleryFrom("kairon", [
        ["01-auth-screen.png", "Auth and landing", "Product entry point with a clear promise, visual proof, and authentication flow."],
        ["02-workspace-picker.png", "Focus areas", "Workspace selection to separate study routine, projects, and goals into distinct environments."],
        ["03-board-dashboard.png", "Task board", "Main operational view with metrics, filters, columns, and actionable cards."],
        ["04-focus-panel.png", "Focus session", "Focus flow with configurable duration and optional linking to an active task."],
        ["05-progress-panel.png", "Progress and gamification", "Progress panel with level, streak, missions, and unlocked badges."],
      ]),
    },
    {
      id: "abyssalvtt",
      accent: "#62f0c0",
      initialShot: 3,
      title: "AbyssalVTT",
      category: "Virtual tabletop for Call of Cthulhu",
      summary:
        "A VTT that brings the table, investigator sheets, rules, combat, navigation, and Keeper tools into a single Call of Cthulhu session.",
      description:
        "The gallery combines the entry journey with the latest table features: an interactive ship plan, damage log, weather-driven navigation, combat encounters, synchronized audio, and a rules compendium.",
      stack: ["React", "Vite", "Pixi.js", "Socket.io"],
      highlights: [
        "8 curated screens across access, campaign, investigator sheet, and current session tools.",
        "Interactive ship, weather, navigation, and encounters turn game state into operational decisions.",
        "Synchronized audio and the CoC compendium reduce context switching during the campaign.",
      ],
      architecture: [
        "React + Vite + Pixi.js",
        "FastAPI + Socket.IO",
        "Redis + PostgreSQL",
        "RAG with PDFs and a knowledge engine",
      ],
      repoUrl: null,
      gallery: galleryFrom("abyssalvtt", [
        ["vtt-login.png", "Entry", "Access screen with strong atmosphere and product identity."],
        ["vtt-campaign-lobby.png", "Campaign lobby", "Active campaign view with selected sheet and a ready-to-play summary."],
        ["vtt-ficha-dashboard.png", "Investigator sheet", "Character dashboard with attributes, resources, and quick state reading."],
        ["vtt-current-ship-damage.png", "Ship and damage", "Interactive ship plan with compartments, status, and a visual damage log."],
        ["vtt-current-weather-navigation.png", "Weather and navigation", "An active storm changing ship speed and supporting travel-time calculation."],
        ["vtt-current-combat-encounter.png", "Combat encounter", "Encounter setup with an objective, creatures, stats, and tracker launch."],
        ["vtt-current-soundboard.png", "Session soundboard", "Synchronized tracks and scene effects organized inside the campaign."],
        ["vtt-current-rules-compendium.png", "Rules and compendium", "Centralized access to rules, skills, creatures, weapons, occupations, and books."],
      ]),
    },
    {
      id: "overtrack",
      accent: "#ffb347",
      initialShot: 0,
      title: "OverTrack",
      category: "AI platform for Overwatch",
      summary:
        "A platform for lobby reading, builds, counters, and Overwatch updates in a tactical and analytical interface.",
      description:
        "This case combines API, AI, and visual product design. The interface turns data, compositions, and match reading into screens built for quick consultation, helping players interpret the meta and decide better during matches.",
      stack: ["Fastify", "FastAPI", "Gemini", "OverFast API"],
      highlights: [
        "6 real screens showing the homepage, lobby analyzer, builds, counters, and news.",
        "Architecture split between a gateway and an intelligence service for game analysis.",
        "Product-like gaming visual language without losing analytical clarity.",
      ],
      architecture: [
        "React frontend",
        "Fastify gateway",
        "FastAPI AI service",
        "OverFast API + Gemini 2.5 Flash",
      ],
      repoUrl: null,
      gallery: galleryFrom("overtrack", [
        ["HomePage.png", "Home", "Main landing screen with a product overview and shortcuts to the core modules."],
        ["LobbyAnalyser.png", "Lobby analyzer", "Lobby reading to compare comps, map, and matchup before the round starts."],
        ["Stadium Builds.png", "Stadium builds", "Build screen with guidance, attributes, and hero context."],
        ["Counter Picks.png", "Counter picks", "Counter analysis for real-time decision-making."],
        ["News.png", "News", "News area and updates to keep track of the meta."],
        ["stadium-tech-preview.png", "Tech preview", "Expanded look at the builds module and the system's visual layer."],
      ]),
    },
    {
      id: "davinci",
      accent: "#59f89d",
      initialShot: 0,
      title: "DaVinci Decoder",
      category: "Decryption workbench",
      summary:
        "A workbench for analyzing ciphertext, files, and multimedia payloads with auto-detect and prioritized output.",
      description:
        "The product combines heuristics, machine learning support, and a strong triage interface. In the portfolio, the main screen appears in different framings to highlight the flow between input, detection, and result.",
      stack: ["Python", "Flask", "scikit-learn", "PyCryptodome"],
      highlights: [
        "3 real captures framed specifically for the portfolio.",
        "A distinct interface language for the decode workstation, input, and output channel.",
        "Visual storytelling aligned with the technical theme of analysis, preview, and discovery.",
      ],
      architecture: [
        "Web triage frontend",
        "Flask API",
        "Engine with 95+ algorithms",
        "Crypto, heuristics, and ML for scoring",
      ],
      repoUrl: null,
      gallery: galleryFrom("davinci", [
        ["portfolio-shot-wide.png", "Wide layout", "Wide view of the decode workstation and the results area."],
        ["portfolio-shot.png", "Workbench", "Main screen with ciphertext input and prioritized output."],
        ["portfolio-shot-hero.png", "Hero crop", "Presentation framing for the product."],
      ]),
    },
  ],
};

const staticText = {
  pt: {
    heroEyebrow: "Tecnologia aplicada à operação",
    navProfile: "Perfil",
    navProjects: "Projetos",
    navContact: "Contato",
    navCta: "Vamos conversar",
    btnViewProjects: "Ver Portal de Gestão de T.I.",
    btnContact: "Falar comigo",
    spotlightCase: "Case em foco",
    openCase: "Abrir case completo",
    profileEyebrow: "Perfil",
    profileTitle: "Experiência operacional com desenvolvimento aplicado.",
    bentoSummary: "Resumo",
    bentoDeliver: "O que eu entrego",
    bentoStack: "Stack principal",
    bentoFlow: "Fluxo",
    projectsEyebrow: "Projetos principais",
    projectsTitle: "Cases com galerias reais, stack clara e arquitetura resumida.",
    projectsIntro:
      "Cada projeto abaixo mostra produto real, fluxo navegável, stack e a arquitetura principal por trás da entrega.",
    contactEyebrow: "Contato",
    contactTitle: "Vamos conversar sobre tecnologia, suporte, automação e desenvolvimento.",
    contactIntro:
      "Estou aberto a oportunidades em que possa contribuir com minha experiência operacional, capacidade de resolução de problemas e desenvolvimento de soluções digitais.",
    screensCount: "telas",
    caseStudyLabel: "Case",
    architectureLabel: "Arquitetura",
    viewCode: "Ver código",
    privateCode: "Código privado",
    talkAboutProject: "Conversar sobre o projeto",
    prevScreenAria: "Tela anterior",
    nextScreenAria: "Próxima tela",
    languageSelectorLabel: "Selecionar idioma",
    portfolioTitle: "Portfólio",
  },
  en: {
    heroEyebrow: "Technology applied to operations",
    navProfile: "Profile",
    navProjects: "Projects",
    navContact: "Contact",
    navCta: "Let's talk",
    btnViewProjects: "View IT Management Portal",
    btnContact: "Contact me",
    spotlightCase: "Featured case",
    openCase: "Open full case",
    profileEyebrow: "Profile",
    profileTitle: "Operational experience with applied development.",
    bentoSummary: "Summary",
    bentoDeliver: "What I deliver",
    bentoStack: "Main stack",
    bentoFlow: "Workflow",
    projectsEyebrow: "Main projects",
    projectsTitle: "Cases with real galleries, clear stack, and summarized architecture.",
    projectsIntro:
      "Each project below shows a real product, navigable flow, stack, and the main architecture behind the delivery.",
    contactEyebrow: "Contact",
    contactTitle: "Let's talk about technology, support, automation, and development.",
    contactIntro:
      "I am open to opportunities where I can contribute my operational experience, problem-solving skills, and ability to develop digital solutions.",
    screensCount: "screens",
    caseStudyLabel: "Case study",
    architectureLabel: "Architecture",
    viewCode: "View code",
    privateCode: "Private code",
    talkAboutProject: "Talk about the project",
    prevScreenAria: "Previous screen",
    nextScreenAria: "Next screen",
    languageSelectorLabel: "Select language",
    portfolioTitle: "Portfolio",
  },
};

const portfolioDataByLang = {
  pt: portfolioDataPT,
  en: portfolioDataEN,
};

let currentLang = "pt";
let portfolioData = portfolioDataByLang[currentLang];

function setText(field, value) {
  document.querySelectorAll(`[data-field="${field}"]`).forEach((element) => {
    element.textContent = value;
  });
}

function createChip(text, className = "chip") {
  const element = document.createElement("span");
  element.className = className;
  element.textContent = text;
  return element;
}

function createMetric(value, label) {
  const item = document.createElement("li");
  const strong = document.createElement("strong");
  const span = document.createElement("span");

  strong.textContent = value;
  span.textContent = label;
  item.append(strong, span);

  return item;
}

function renderHero() {
  const t = staticText[currentLang];

  const metricList = document.getElementById("hero-metrics");
  const featuredTags = document.getElementById("featured-tags");
  metricList.replaceChildren();
  featuredTags.replaceChildren();

  portfolioData.heroMetrics.forEach(({ value, label }) => {
    metricList.appendChild(createMetric(value, label));
  });

  const featuredProject = portfolioData.caseStudies.find(
    (project) => project.id === portfolioData.featuredCaseId
  );
  const featuredShot = featuredProject.gallery[featuredProject.initialShot ?? 0];
  const spotlight = document.getElementById("hero-spotlight");

  spotlight.style.setProperty("--project-accent", featuredProject.accent);
  document.getElementById("featured-image").src = featuredShot.src;
  document.getElementById("featured-image").alt = `${featuredShot.label} - ${featuredProject.title}`;
  document.getElementById("featured-category").textContent = featuredProject.category;
  document.getElementById("featured-title").textContent = featuredProject.title;
  document.getElementById("featured-description").textContent = featuredProject.summary;
  document.getElementById("featured-count").textContent = `${featuredProject.gallery.length} ${t.screensCount}`;

  featuredProject.stack.forEach((tech) => {
    featuredTags.appendChild(createChip(tech, "tag"));
  });

  document.getElementById("featured-link").href = `#${featuredProject.id}`;
}

function renderProfile() {
  setText("name", portfolioData.name);
  setText("heroTitle", portfolioData.heroTitle);
  setText("headline", portfolioData.headline);
  setText("headlineSecondary", portfolioData.headlineSecondary);
  document.title = `${staticText[currentLang].portfolioTitle} | ${portfolioData.name}`;
  document.querySelector('meta[name="description"]').content = portfolioData.metaDescription;

  const aboutCopy = document.getElementById("about-copy");
  const servicesList = document.getElementById("services-list");
  const skillsList = document.getElementById("skills-list");
  const workflowList = document.getElementById("workflow-list");
  aboutCopy.replaceChildren();
  servicesList.replaceChildren();
  skillsList.replaceChildren();
  workflowList.replaceChildren();

  portfolioData.about.forEach((paragraph) => {
    const text = document.createElement("p");
    text.className = "bento-text";
    text.textContent = paragraph;
    aboutCopy.appendChild(text);
  });

  portfolioData.services.forEach((service) => {
    const item = document.createElement("li");
    item.textContent = service;
    servicesList.appendChild(item);
  });

  portfolioData.skills.forEach((skill) => {
    skillsList.appendChild(createChip(skill));
  });

  portfolioData.workflow.forEach((step) => {
    const item = document.createElement("li");
    item.textContent = step;
    workflowList.appendChild(item);
  });
}

function createGallery(project) {
  const t = staticText[currentLang];
  const shell = document.createElement("div");
  shell.className = "gallery-shell";
  shell.innerHTML = `
    <div class="gallery-stage">
      <div class="gallery-toolbar">
        <span class="gallery-counter">01 / 01</span>
        <div class="gallery-controls">
          <button class="gallery-control gallery-prev" type="button" aria-label="${t.prevScreenAria}">&larr;</button>
          <button class="gallery-control gallery-next" type="button" aria-label="${t.nextScreenAria}">&rarr;</button>
        </div>
      </div>
      <div class="gallery-canvas">
        <img class="gallery-image" src="" alt="" />
      </div>
      <div class="gallery-caption">
        <strong class="gallery-title"></strong>
        <p class="gallery-note"></p>
      </div>
    </div>
    <div class="gallery-strip"></div>
  `;

  const image = shell.querySelector(".gallery-image");
  const counter = shell.querySelector(".gallery-counter");
  const title = shell.querySelector(".gallery-title");
  const note = shell.querySelector(".gallery-note");
  const strip = shell.querySelector(".gallery-strip");
  const prevButton = shell.querySelector(".gallery-prev");
  const nextButton = shell.querySelector(".gallery-next");
  let activeIndex = 0;

  const thumbButtons = project.gallery.map((shot, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "gallery-thumb";
    button.setAttribute("aria-pressed", "false");
    button.innerHTML = `
      <span class="gallery-thumb-index">${String(index + 1).padStart(2, "0")}</span>
      <span class="gallery-thumb-label">${shot.label}</span>
    `;
    button.addEventListener("click", () => setActive(index));
    strip.appendChild(button);
    return button;
  });

  function setActive(index) {
    const shot = project.gallery[index];
    activeIndex = index;
    image.src = shot.src;
    image.alt = `${shot.label} - ${project.title}`;
    title.textContent = shot.label;
    note.textContent = shot.note;
    counter.textContent = `${String(index + 1).padStart(2, "0")} / ${String(
      project.gallery.length
    ).padStart(2, "0")}`;

    thumbButtons.forEach((button, buttonIndex) => {
      const isActive = buttonIndex === index;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    thumbButtons[index]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  prevButton.addEventListener("click", () => {
    setActive((activeIndex - 1 + project.gallery.length) % project.gallery.length);
  });

  nextButton.addEventListener("click", () => {
    setActive((activeIndex + 1) % project.gallery.length);
  });

  setActive(project.initialShot ?? 0);
  return shell;
}

function createArchitecture(project) {
  const section = document.createElement("section");
  section.className = "architecture-block";

  const title = document.createElement("p");
  title.className = "architecture-label";
  title.textContent = staticText[currentLang].architectureLabel;
  section.appendChild(title);

  const flow = document.createElement("div");
  flow.className = "architecture-flow";

  project.architecture.forEach((step, index) => {
    const node = document.createElement("div");
    node.className = "architecture-node";
    node.textContent = step;
    flow.appendChild(node);

    if (index < project.architecture.length - 1) {
      const arrow = document.createElement("span");
      arrow.className = "architecture-arrow";
      arrow.textContent = "↓";
      flow.appendChild(arrow);
    }
  });

  section.appendChild(flow);
  return section;
}

function applyLinkBehavior(link, href) {
  link.href = href;
  if (href.startsWith("http")) {
    link.target = "_blank";
    link.rel = "noreferrer";
  }
}

function createCaseStudy(project, index) {
  const article = document.createElement("article");
  article.id = project.id;
  article.className = `case-study reveal reveal-delay-${Math.min(index + 1, 3)}${
    index % 2 === 1 ? " is-inverted" : ""
  }`;
  article.style.setProperty("--project-accent", project.accent);

  const copy = document.createElement("div");
  copy.className = "case-copy";
  copy.innerHTML = `
    <p class="case-kicker">${staticText[currentLang].caseStudyLabel}</p>
    <p class="project-meta">${project.category}</p>
    <h3>${project.title}</h3>
    <p class="case-summary">${project.summary}</p>
    <p class="case-description">${project.description}</p>
  `;

  const metaRow = document.createElement("div");
  metaRow.className = "case-meta-row";
  metaRow.appendChild(
    createChip(`${project.gallery.length} ${staticText[currentLang].screensCount}`, "gallery-chip")
  );
  metaRow.appendChild(createChip(project.category, "gallery-chip"));
  copy.appendChild(metaRow);

  const highlightList = document.createElement("ul");
  highlightList.className = "case-highlights";
  project.highlights.forEach((highlight) => {
    const item = document.createElement("li");
    item.textContent = highlight;
    highlightList.appendChild(item);
  });
  copy.appendChild(highlightList);

  const stackRow = document.createElement("div");
  stackRow.className = "chip-cloud";
  project.stack.forEach((item) => stackRow.appendChild(createChip(item)));
  copy.appendChild(stackRow);
  copy.appendChild(createArchitecture(project));

  const actions = document.createElement("div");
  actions.className = "case-actions";

  if (project.repoUrl) {
    const repoLink = document.createElement("a");
    repoLink.className = "case-link case-link-primary";
    repoLink.textContent = staticText[currentLang].viewCode;
    applyLinkBehavior(repoLink, project.repoUrl);
    actions.appendChild(repoLink);
  } else {
    const repoStatus = document.createElement("span");
    repoStatus.className = "case-link case-link-primary case-link-disabled";
    repoStatus.textContent = staticText[currentLang].privateCode;
    actions.appendChild(repoStatus);
  }

  const contactLink = document.createElement("a");
  contactLink.className = "case-link case-link-secondary";
  contactLink.textContent = staticText[currentLang].talkAboutProject;
  applyLinkBehavior(contactLink, "#contato");
  actions.appendChild(contactLink);

  copy.appendChild(actions);
  article.append(copy, createGallery(project));
  return article;
}

function renderCaseStudies() {
  const caseList = document.getElementById("case-studies");
  caseList.replaceChildren();
  portfolioData.caseStudies.forEach((project, index) => {
    caseList.appendChild(createCaseStudy(project, index));
  });
}

function renderContacts() {
  const container = document.getElementById("contact-list");
  container.replaceChildren();
  portfolioData.contacts.forEach((contact) => {
    const link = document.createElement("a");
    link.className = "contact-link";
    link.href = contact.href;
    link.target = contact.href.startsWith("http") ? "_blank" : "_self";
    link.rel = contact.href.startsWith("http") ? "noreferrer" : "";
    link.innerHTML = `<span>${contact.label}</span><strong>${contact.value}</strong>`;
    container.appendChild(link);
  });
}

function applyStaticTranslations() {
  const t = staticText[currentLang];
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (t[key]) {
      element.textContent = t[key];
    }
  });
  document.documentElement.lang = currentLang === "pt" ? "pt-BR" : "en";
}

function updateLanguageButtons() {
  const t = staticText[currentLang];
  document.querySelector(".lang-toggle").setAttribute("aria-label", t.languageSelectorLabel);
  document.querySelectorAll(".lang-btn").forEach((button) => {
    const isActive = button.dataset.lang === currentLang;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function renderApp() {
  portfolioData = portfolioDataByLang[currentLang];
  renderHero();
  renderProfile();
  renderCaseStudies();
  renderContacts();
  applyStaticTranslations();
  updateLanguageButtons();
}

function setLanguage(lang) {
  if (!portfolioDataByLang[lang] || currentLang === lang) {
    return;
  }
  currentLang = lang;
  renderApp();
}

window.setLanguage = setLanguage;

renderApp();
