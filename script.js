const galleryFrom = (folder, entries) =>
  entries.map(([file, label, note]) => ({
    src: `./assets/${folder}/${file}`,
    label,
    note,
  }));

const portfolioData = {
  name: "Matheus Henrique da Silva Figueiredo Bueno",
  headline:
    "Eu desenvolvo sistemas, plataformas e ferramentas que resolvem problemas reais usando web, automacao e IA.",
  about:
    "Desenvolvo sistemas web, automações e ferramentas internas com foco em uso real. Me interesso por software que resolve problema de verdade: plataformas operacionais, APIs, fluxos com IA e interfaces que fazem sentido no dia a dia.",
  services: [
    "Sistemas web para operacao interna, atendimento e controle administrativo",
    "Plataformas com IA para analise, recomendacao e automacao de fluxo",
    "Dashboards, paineis e produtos com foco em uso real e navegacao clara",
    "Arquiteturas full stack com frontend, backend e integracoes externas",
  ],
  skills: [
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Fastify",
    "FastAPI",
    "Python",
    "Flask",
    "SQLite",
    "C#",
    "WPF",
    "Docker",
    "Socket.io",
    "UI Systems",
  ],
  workflow: [
    "Entendo o problema, a rotina do usuario e a superficie principal do produto.",
    "Transformo a estrutura em interface clara, navegavel e com identidade visual consistente.",
    "Valido responsividade, apresentacao e detalhes para que o case fique forte na pratica.",
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
      initialShot: 9,
      title: "Portal de Gestao de T.I",
      category: "Sistema web corporativo",
      summary:
        "Portal de gestao de T.I com chamados, ativos, inventario, administracao e utilitarios internos na mesma experiencia.",
      description:
        "Um sistema em Next.js pensado para operacao do dia a dia. O case mistura fluxo de suporte, leitura executiva, gerenciamento de equipamentos e ferramentas auxiliares, com varias telas reais para mostrar profundidade do produto.",
      stack: ["Next.js", "React", "SQLite", "Recharts"],
      highlights: [
        "17 telas reais cobrindo login, chamados, ativos, inventario, admin e ferramentas.",
        "Fluxo completo do ticket: fila, detalhes laterais, abertura e acompanhamento.",
        "Leitura operacional e leitura executiva convivendo dentro da mesma plataforma.",
      ],
      architecture: [
        "Next.js + React",
        "Route handlers + auth",
        "SQLite + configuracoes locais",
        "Chamados, ativos e utilitarios internos",
      ],
      repoUrl: "https://github.com/Kraunser/ticket-manager-app",
      gallery: galleryFrom("gestao-ti", [
        ["01-login.png", "Login", "Entrada inicial do portal de demandas."],
        ["02-forgot-password.png", "Recuperacao", "Fluxo de senha esquecida para acesso interno."],
        ["03-change-password.png", "Nova senha", "Atualizacao segura de credenciais."],
        ["04-tickets-list.png", "Chamados", "Fila principal de chamados com filtros e SLA."],
        ["05-ticket-details-sheet.png", "Detalhes", "Painel lateral para contexto, atualizacoes e responsavel."],
        ["06-new-ticket.png", "Novo chamado", "Abertura estruturada de solicitacoes."],
        ["07-manager-dashboard.png", "Dashboard de area", "Visao tatica de volume, prioridade e status."],
        ["08-assets.png", "Ativos", "Mapa visual dos equipamentos por setor."],
        ["09-inventory.png", "Inventario", "Controle de estoque, disponibilidade e saida."],
        ["10-admin-dashboard.png", "Painel executivo", "Indicadores administrativos e insights de operacao."],
        ["11-admin-users.png", "Usuarios", "Gestao de pessoas e niveis de acesso."],
        ["12-admin-sectors.png", "Setores", "Configuracao dos setores da organizacao."],
        ["13-tools-home.png", "Ferramentas", "Hub interno para utilitarios de T.I."],
        ["14-tools-remove-profile.png", "Remover perfil", "Automacao para manutencao de perfis."],
        ["15-tools-service-manager.png", "Service manager", "Fluxo auxiliar para suporte tecnico."],
        ["16-tools-disk-cleanup.png", "Limpeza de disco", "Utilitario integrado para manutencao."],
        ["17-settings.png", "Configuracoes", "Ajustes gerais da plataforma."],
      ]),
    },
    {
      id: "abyssalvtt",
      accent: "#62f0c0",
      initialShot: 3,
      title: "AbyssalVTT",
      category: "Plataforma colaborativa para RPG",
      summary:
        "Um virtual tabletop atmosferico para campanhas de Call of Cthulhu, com experiencia distinta para mestre e jogador.",
      description:
        "A selecao agora prioriza as telas que melhor vendem o produto: entrada, criacao guiada, lobby, campanha ativa, ficha e grimorio. O resultado fica mais cinematografico e mais facil de ler como case.",
      stack: ["React", "Vite", "Pixi.js", "Socket.io"],
      highlights: [
        "Galeria curada com 7 telas-chave entre entrada, campanha, ficha e grimorio.",
        "Direcao de arte nautica e lovecraftiana aplicada do acesso inicial ate a mesa ativa.",
        "Fluxos distintos para descoberta da campanha, criacao guiada e consulta durante a sessao.",
      ],
      architecture: [
        "React + Vite + Pixi.js",
        "FastAPI + Socket.IO",
        "Redis + PostgreSQL",
        "RAG com PDFs e engine de conhecimento",
      ],
      repoUrl: "https://github.com/Kraunser/VTT_CoC",
      gallery: galleryFrom("abyssalvtt", [
        ["vtt-login.png", "Entrada", "Tela de acesso com atmosfera forte e identidade do universo do produto."],
        ["vtt-builder-cadastro.png", "Criacao guiada", "Fluxo de cadastro do investigador com onboarding orientado por etapas."],
        ["vtt-lobby.png", "Porto das Sombras", "Entrada da experiencia com campanha em destaque e leitura mais editorial."],
        ["vtt-campaign-lobby.png", "Lobby da campanha", "Visao da campanha ativa com ficha selecionada e resumo pronto para entrar na sessao."],
        ["vtt-ficha-dashboard.png", "Ficha do investigador", "Dashboard da ficha com atributos, recursos e leitura rapida de estado."],
        ["vtt-gm-grimorio.png", "Grimorio", "Consulta de conhecimento e PDF integrado ao fluxo da mesa."],
        ["vtt-player-grimorio.png", "Mesa ativa", "Uso simultaneo de ficha e grimorio durante a sessao em andamento."],
      ]),
    },
    {
      id: "overtrack",
      accent: "#ffb347",
      initialShot: 0,
      title: "OverTrack",
      category: "Plataforma com IA para Overwatch",
      summary:
        "Plataforma para leitura de lobby, builds, counters e noticias de Overwatch em uma interface tatico-analitica.",
      description:
        "Esse case combina API, IA e produto visual. A interface transforma dados, composicoes e leitura de partida em telas pensadas para consulta rapida, com foco em jogadores que querem interpretar o meta e decidir melhor durante a partida.",
      stack: ["Fastify", "FastAPI", "Gemini", "OverFast API"],
      highlights: [
        "6 telas reais mostrando homepage, lobby analyser, builds, counters e news.",
        "Arquitetura dividida entre gateway e servico de inteligencia para leitura do jogo.",
        "Visual consistente com linguagem de produto para gaming, sem perder clareza analitica.",
      ],
      architecture: [
        "React frontend",
        "Fastify gateway",
        "FastAPI AI service",
        "OverFast API + Gemini 2.5 Flash",
      ],
      repoUrl: "https://github.com/Kraunser/ow-coach-ai",
      gallery: galleryFrom("overtrack", [
        ["HomePage.png", "Home", "Entrada principal do produto com resumo da proposta e atalhos para os modulos."],
        ["LobbyAnalyser.png", "Lobby analyser", "Leitura do lobby para comparar comps, mapa e confronto antes da partida."],
        ["Stadium Builds.png", "Stadium builds", "Tela de builds com orientacoes, atributos e contexto do heroi."],
        ["Counter Picks.png", "Counter picks", "Analise de counters para tomada de decisao em tempo real."],
        ["News.png", "News", "Area de noticias e atualizacoes para acompanhar o meta."],
        ["stadium-tech-preview.png", "Tech preview", "Preview expandido do modulo de builds e leitura visual do sistema."],
      ]),
    },
    {
      id: "davinci",
      accent: "#59f89d",
      initialShot: 0,
      title: "DaVinci Decoder",
      category: "Workbench de decifracao",
      summary:
        "Uma bancada para analisar ciphertext, arquivos e payloads multimidia com auto-detect e saida priorizada.",
      description:
        "O produto mistura heuristica, apoio de machine learning e uma interface forte para triagem. Aqui o portfolio mostra a tela principal em formatos diferentes, focando na apresentacao do fluxo entre entrada, deteccao e resultado.",
      stack: ["Python", "Flask", "scikit-learn", "PyCryptodome"],
      highlights: [
        "3 capturas reais com enquadramentos pensados para portfolio.",
        "Interface com identidade propria para decode workstation, input e output channel.",
        "Narrativa visual alinhada ao tema tecnico de analise, preview e descoberta.",
      ],
      architecture: [
        "Frontend web de triagem",
        "Flask API",
        "Engine com 95+ algoritmos",
        "Cripto, heuristica e ML para scoring",
      ],
      repoUrl: "https://github.com/Kraunser/Davinci_Decoder",
      gallery: galleryFrom("davinci", [
        ["portfolio-shot-wide.png", "Wide layout", "Visao ampla da decode workstation e dos resultados."],
        ["portfolio-shot.png", "Workbench", "Tela principal com input de ciphertext e output priorizado."],
        ["portfolio-shot-hero.png", "Hero crop", "Enquadramento de apresentacao para o produto."],
      ]),
    },
  ],
};

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
  const totalShots = portfolioData.caseStudies.reduce(
    (sum, project) => sum + project.gallery.length,
    0
  );
  const projectCount = String(portfolioData.caseStudies.length).padStart(2, "0");

  const metrics = [
    [projectCount, "projetos principais"],
    [String(totalShots), "prints reais integrados"],
    ["Full stack", "web, IA e desktop"],
  ];

  const metricList = document.getElementById("hero-metrics");
  metrics.forEach(([value, label]) => {
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
  document.getElementById("featured-count").textContent = `${featuredProject.gallery.length} telas`;

  const featuredTags = document.getElementById("featured-tags");
  featuredProject.stack.forEach((tech) => {
    featuredTags.appendChild(createChip(tech, "tag"));
  });

  document.getElementById("featured-link").href = `#${featuredProject.id}`;
}

function renderProfile() {
  setText("name", portfolioData.name);
  setText("headline", portfolioData.headline);
  setText("about", portfolioData.about);
  document.title = `Portfolio | ${portfolioData.name}`;

  const servicesList = document.getElementById("services-list");
  portfolioData.services.forEach((service) => {
    const item = document.createElement("li");
    item.textContent = service;
    servicesList.appendChild(item);
  });

  const skillsList = document.getElementById("skills-list");
  portfolioData.skills.forEach((skill) => {
    skillsList.appendChild(createChip(skill));
  });

  const workflowList = document.getElementById("workflow-list");
  portfolioData.workflow.forEach((step) => {
    const item = document.createElement("li");
    item.textContent = step;
    workflowList.appendChild(item);
  });
}

function createGallery(project) {
  const shell = document.createElement("div");
  shell.className = "gallery-shell";
  shell.innerHTML = `
    <div class="gallery-stage">
      <div class="gallery-toolbar">
        <span class="gallery-counter">01 / 01</span>
        <div class="gallery-controls">
          <button class="gallery-control gallery-prev" type="button" aria-label="Tela anterior">←</button>
          <button class="gallery-control gallery-next" type="button" aria-label="Proxima tela">→</button>
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

    thumbButtons[index].scrollIntoView({
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
  title.textContent = "Arquitetura";
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
  article.className = `case-study reveal reveal-delay-${Math.min(index + 1, 3)}${index % 2 === 1 ? " is-inverted" : ""
    }`;
  article.style.setProperty("--project-accent", project.accent);

  const copy = document.createElement("div");
  copy.className = "case-copy";
  copy.innerHTML = `
    <p class="case-kicker">Case study</p>
    <p class="project-meta">${project.category}</p>
    <h3>${project.title}</h3>
    <p class="case-summary">${project.summary}</p>
    <p class="case-description">${project.description}</p>
  `;

  const metaRow = document.createElement("div");
  metaRow.className = "case-meta-row";
  metaRow.appendChild(createChip(`${project.gallery.length} telas`, "gallery-chip"));
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

  const repoLink = document.createElement("a");
  repoLink.className = "case-link case-link-primary";
  repoLink.textContent = "Ver codigo";
  applyLinkBehavior(repoLink, project.repoUrl);
  actions.appendChild(repoLink);

  const contactLink = document.createElement("a");
  contactLink.className = "case-link case-link-secondary";
  contactLink.textContent = "Conversar sobre o projeto";
  applyLinkBehavior(contactLink, "#contato");
  actions.appendChild(contactLink);

  copy.appendChild(actions);

  article.append(copy, createGallery(project));
  return article;
}

function renderCaseStudies() {
  const caseList = document.getElementById("case-studies");
  portfolioData.caseStudies.forEach((project, index) => {
    caseList.appendChild(createCaseStudy(project, index));
  });
}

function renderContacts() {
  const container = document.getElementById("contact-list");
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

renderHero();
renderProfile();
renderCaseStudies();
renderContacts();
