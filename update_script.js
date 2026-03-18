const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, 'script.js');
let content = fs.readFileSync(targetPath, 'utf8');

// 1. Rename portfolioData to portfolioDataPT
content = content.replace('const portfolioData = {', 'const portfolioDataPT = {');


const portfolioDataEN = `
const portfolioDataEN = {
  name: "Matheus Henrique da Silva Figueiredo Bueno",
  headline:
    "I develop systems, platforms, and tools that solve real problems using web, automation, and AI.",
  about:
    "I develop web systems, automations, and internal tools focused on real-world use. I am interested in software that solves real problems: operational platforms, APIs, AI flows, and interfaces that make sense in daily routines.",
  services: [
    "Web systems for internal operations, customer service, and administrative control",
    "AI platforms for analysis, recommendation, and flow automation",
    "Dashboards, panels, and products focused on real use and clear navigation",
    "Full stack architectures with frontend, backend, and external integrations",
  ],
  skills: [
    "Next.js", "React", "TypeScript", "Node.js", "Fastify", "FastAPI", "Python",
    "Flask", "SQLite", "C#", "WPF", "Docker", "Socket.io", "UI Systems"
  ],
  workflow: [
    "I understand the problem, the user's routine, and the main surface of the product.",
    "I transform the structure into a clear, navigable interface with consistent visual identity.",
    "I validate responsiveness, presentation, and details so the case stands strong in practice.",
  ],
  contacts: [
    { label: "Email", value: "Matheushsfbueno@gmail.com", href: "mailto:Matheushsfbueno@gmail.com" },
    { label: "LinkedIn", value: "Matheus Bueno", href: "https://www.linkedin.com/in/matheus-henrique-da-silva-figueiredo-bueno-8b73211ba/" },
    { label: "GitHub", value: "github.com/Kraunser", href: "https://github.com/Kraunser" },
  ],
  featuredCaseId: "gestao-ti",
  caseStudies: [
    {
      id: "gestao-ti",
      accent: "#6aa6ff",
      initialShot: 9,
      title: "IT Management Portal",
      category: "Corporate web system",
      summary:
        "IT management portal with tickets, assets, inventory, administration, and internal utilities in a single experience.",
      description:
        "A Next.js system designed for day-to-day operations. The case mixes support flow, executive reading, equipment management, and auxiliary tools, with various real screens to show the product's depth.",
      stack: ["Next.js", "React", "SQLite", "Recharts"],
      highlights: [
        "17 real screens covering login, tickets, assets, inventory, admin, and tools.",
        "Complete ticket flow: queue, side details, opening, and tracking.",
        "Operational reading and executive reading coexisting within the same platform.",
      ],
      architecture: [
        "Next.js + React",
        "Route handlers + auth",
        "SQLite + local configurations",
        "Tickets, assets, and internal utilities",
      ],
      repoUrl: "https://github.com/Kraunser/ticket-manager-app",
      gallery: galleryFrom("gestao-ti", [
        ["01-login.png", "Login", "Initial entry to the demands portal."],
        ["02-forgot-password.png", "Recovery", "Forgotten password flow for internal access."],
        ["03-change-password.png", "New password", "Secure credentials update."],
        ["04-tickets-list.png", "Tickets", "Main ticket queue with filters and SLA."],
        ["05-ticket-details-sheet.png", "Details", "Side panel for context, updates, and assignee."],
        ["06-new-ticket.png", "New ticket", "Structured opening of requests."],
        ["07-manager-dashboard.png", "Area dashboard", "Tactical view of volume, priority, and status."],
        ["08-assets.png", "Assets", "Visual map of equipment by sector."],
        ["09-inventory.png", "Inventory", "Stock control, availability, and dispatch."],
        ["10-admin-dashboard.png", "Executive panel", "Administrative indicators and operation insights."],
        ["11-admin-users.png", "Users", "Management of people and access levels."],
        ["12-admin-sectors.png", "Sectors", "Configuration of the organization's sectors."],
        ["13-tools-home.png", "Tools", "Internal hub for IT utilities."],
        ["14-tools-remove-profile.png", "Remove profile", "Automation for profile maintenance."],
        ["15-tools-service-manager.png", "Service manager", "Auxiliary flow for technical support."],
        ["16-tools-disk-cleanup.png", "Disk cleanup", "Integrated utility for maintenance."],
        ["17-settings.png", "Settings", "General platform adjustments."],
      ]),
    },
    {
      id: "abyssalvtt",
      accent: "#62f0c0",
      initialShot: 3,
      title: "AbyssalVTT",
      category: "Collaborative platform for RPG",
      summary:
        "An atmospheric virtual tabletop for Call of Cthulhu campaigns, with distinct experiences for game master and player.",
      description:
        "The selection now prioritizes screens that best sell the product: entry, guided creation, lobby, active campaign, character sheet, and grimoire. The result is more cinematic and easier to read as a case study.",
      stack: ["React", "Vite", "Pixi.js", "Socket.io"],
      highlights: [
        "Curated gallery with 7 key screens across entry, campaign, character sheet, and grimoire.",
        "Nautical and Lovecraftian art direction applied from initial access to the active table.",
        "Distinct flows for campaign discovery, guided creation, and consultation during the session.",
      ],
      architecture: [
        "React + Vite + Pixi.js",
        "FastAPI + Socket.IO",
        "Redis + PostgreSQL",
        "RAG with PDFs and knowledge engine",
      ],
      repoUrl: "https://github.com/Kraunser/VTT_CoC",
      gallery: galleryFrom("abyssalvtt", [
        ["vtt-login.png", "Entry", "Access screen with strong atmosphere and product universe identity."],
        ["vtt-builder-cadastro.png", "Guided creation", "Investigator registration flow with step-oriented onboarding."],
        ["vtt-lobby.png", "Harbor of Shadows", "Experience entry with featured campaign and more editorial reading."],
        ["vtt-campaign-lobby.png", "Campaign lobby", "Active campaign view with selected character sheet and ready summary to enter the session."],
        ["vtt-ficha-dashboard.png", "Investigator sheet", "Character sheet dashboard with attributes, resources, and quick state reading."],
        ["vtt-gm-grimorio.png", "Grimoire", "Knowledge consultation and integrated PDF into the table flow."],
        ["vtt-player-grimorio.png", "Active table", "Simultaneous use of character sheet and grimoire during the ongoing session."],
      ]),
    },
    {
      id: "overtrack",
      accent: "#ffb347",
      initialShot: 0,
      title: "OverTrack",
      category: "AI platform for Overwatch",
      summary:
        "Platform for reading lobbies, builds, counters, and Overwatch news in a tactical-analytical interface.",
      description:
        "This case combines API, AI, and visual product. The interface transforms data, compositions, and match reading into screens designed for quick consultation, focusing on players who want to interpret the meta and make better decisions during the match.",
      stack: ["Fastify", "FastAPI", "Gemini", "OverFast API"],
      highlights: [
        "6 real screens showing homepage, lobby analyzer, builds, counters, and news.",
        "Architecture divided between gateway and intelligence service for reading the game.",
        "Consistent visual with gaming product language, without losing analytical clarity.",
      ],
      architecture: [
        "React frontend",
        "Fastify gateway",
        "FastAPI AI service",
        "OverFast API + Gemini 2.5 Flash",
      ],
      repoUrl: "https://github.com/Kraunser/ow-coach-ai",
      gallery: galleryFrom("overtrack", [
        ["HomePage.png", "Home", "Main entry of the product with proposal summary and shortcuts to modules."],
        ["LobbyAnalyser.png", "Lobby analyzer", "Lobby reading to compare comps, map, and matchup before the match."],
        ["Stadium Builds.png", "Stadium builds", "Builds screen with guidelines, attributes, and hero context."],
        ["Counter Picks.png", "Counter picks", "Counter analysis for real-time decision making."],
        ["News.png", "News", "News area and updates to track the meta."],
        ["stadium-tech-preview.png", "Tech preview", "Expanded preview of the builds module and visual reading of the system."],
      ]),
    },
    {
      id: "davinci",
      accent: "#59f89d",
      initialShot: 0,
      title: "DaVinci Decoder",
      category: "Decryption workbench",
      summary:
        "A workbench to analyze ciphertext, files, and multimedia payloads with auto-detect and prioritized output.",
      description:
        "The product mixes heuristics, machine learning support, and a strong interface for triage. Here the portfolio shows the main screen in different formats, focusing on presenting the flow between input, detection, and result.",
      stack: ["Python", "Flask", "scikit-learn", "PyCryptodome"],
      highlights: [
        "3 real captures with framing designed for the portfolio.",
        "Interface with its own identity for decode workstation, input, and output channel.",
        "Visual narrative aligned with the technical theme of analysis, preview, and discovery.",
      ],
      architecture: [
        "Triage web frontend",
        "Flask API",
        "Engine with 95+ algorithms",
        "Crypto, heuristics, and ML for scoring",
      ],
      repoUrl: "https://github.com/Kraunser/Davinci_Decoder",
      gallery: galleryFrom("davinci", [
        ["portfolio-shot-wide.png", "Wide layout", "Broad view of the decode workstation and results."],
        ["portfolio-shot.png", "Workbench", "Main screen with ciphertext input and prioritized output."],
        ["portfolio-shot-hero.png", "Hero crop", "Presentation framing for the product."],
      ]),
    },
  ],
};

let currentLang = "pt";
let portfolioData = portfolioDataPT;

const staticText = {
  pt: {
    heroEyebrow: "Portfólio 2026",
    navProfile: "Perfil",
    navProjects: "Projetos",
    navContact: "Contato",
    navCta: "Vamos conversar",
    btnViewProjects: "Ver projetos",
    btnContact: "Falar comigo",
    spotlightCase: "Case em foco",
    featuredProject: "Projeto em destaque",
    openCase: "Abrir case completo",
    profileEyebrow: "Perfil",
    profileTitle: "Código, design de interface e narrativa visual trabalhando juntos.",
    profileIntro: "O portfólio agora gira em torno de produto real: cases com prints, galerias navegáveis e uma linguagem visual mais atual.",
    bentoSummary: "Resumo",
    bentoDeliver: "O que eu entrego",
    bentoStack: "Stack principal",
    bentoFlow: "Fluxo",
    projectsEyebrow: "Projetos principais",
    projectsTitle: "Cases com galerias reais, stack clara e arquitetura resumida.",
    projectsIntro: "Cada projeto abaixo mostra produto real, fluxo navegável, stack e a arquitetura principal por trás da entrega.",
    contactEyebrow: "Contato",
    contactTitle: "Vamos conversar sobre software, produto e oportunidades.",
    contactIntro: "Se você quer conversar sobre projetos, engenharia de software ou oportunidades como desenvolvedor, pode me chamar.",
    metricsProjects: "projetos principais",
    metricsShots: "prints reais integrados",
    metricsStack: "web, IA e desktop",
    screensCount: "telas",
    caseStudyLabel: "Case study",
    architectureLabel: "Arquitetura",
    viewCode: "Ver código",
    talkAboutProject: "Conversar sobre o projeto",
    prevScreenAria: "Tela anterior",
    nextScreenAria: "Próxima tela",
    portfolioTitle: "Portfólio",
  },
  en: {
    heroEyebrow: "Portfolio 2026",
    navProfile: "Profile",
    navProjects: "Projects",
    navContact: "Contact",
    navCta: "Let's talk",
    btnViewProjects: "View projects",
    btnContact: "Contact me",
    spotlightCase: "Featured case",
    featuredProject: "Featured project",
    openCase: "Open full case",
    profileEyebrow: "Profile",
    profileTitle: "Code, interface design, and visual narrative working together.",
    profileIntro: "The portfolio now revolves around real products: cases with screenshots, navigable galleries, and a modern visual language.",
    bentoSummary: "Summary",
    bentoDeliver: "What I deliver",
    bentoStack: "Main stack",
    bentoFlow: "Workflow",
    projectsEyebrow: "Main projects",
    projectsTitle: "Cases with real galleries, clear stack, and summarized architecture.",
    projectsIntro: "Each project below shows a real product, navigable flow, stack, and the main architecture behind the delivery.",
    contactEyebrow: "Contact",
    contactTitle: "Let's talk about software, product, and opportunities.",
    contactIntro: "If you want to talk about projects, software engineering, or opportunities as a developer, hit me up.",
    metricsProjects: "main projects",
    metricsShots: "real integrated shots",
    metricsStack: "web, AI, and desktop",
    screensCount: "screens",
    caseStudyLabel: "Case study",
    architectureLabel: "Architecture",
    viewCode: "View code",
    talkAboutProject: "Talk about project",
    prevScreenAria: "Previous screen",
    nextScreenAria: "Next screen",
    portfolioTitle: "Portfolio",
  }
};

function applyStaticTranslations() {
  const t = staticText[currentLang];
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (t[key]) {
      el.textContent = t[key];
    }
  });
}

function setLanguage(lang) {
  if (currentLang === lang) return;
  currentLang = lang;
  portfolioData = lang === "pt" ? portfolioDataPT : portfolioDataEN;
  
  // Re-render arrays
  document.getElementById("hero-metrics").innerHTML = "";
  document.getElementById("featured-tags").innerHTML = "";
  document.getElementById("services-list").innerHTML = "";
  document.getElementById("skills-list").innerHTML = "";
  document.getElementById("workflow-list").innerHTML = "";
  document.getElementById("case-studies").innerHTML = "";
  document.getElementById("contact-list").innerHTML = "";

  renderHero();
  renderProfile();
  renderCaseStudies();
  renderContacts();
  applyStaticTranslations();

  // Update language toggle buttons visually
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("is-active", btn.dataset.lang === currentLang);
  });
}
`;

content = content.replace('};\\n\\nfunction setText', '};\\n' + portfolioDataEN + '\\nfunction setText');

// Replaces in renderHero
content = content.replace(
  '[projectCount, "projetos principais"],\\n    [String(totalShots), "prints reais integrados"],\\n    ["Full stack", "web, IA e desktop"],',
  '[projectCount, staticText[currentLang].metricsProjects],\\n    [String(totalShots), staticText[currentLang].metricsShots],\\n    ["Full stack", staticText[currentLang].metricsStack],'
);

content = content.replace(
  '\\${featuredProject.gallery.length} telas',
  '\\${featuredProject.gallery.length} \\${staticText[currentLang].screensCount}'
);

// Replaces in renderProfile
content = content.replace(
  'document.title = \\`Portfólio | \\${portfolioData.name}\\`;',
  'document.title = \\`\\${staticText[currentLang].portfolioTitle} | \\${portfolioData.name}\\`;'
);

// Replaces in createGallery
content = content.replace(
  'aria-label="Tela anterior"',
  'aria-label="\\${staticText[currentLang].prevScreenAria}"'
);
content = content.replace(
  'aria-label="Próxima tela"',
  'aria-label="\\${staticText[currentLang].nextScreenAria}"'
);

// Replaces in createArchitecture
content = content.replace(
  'title.textContent = "Arquitetura";',
  'title.textContent = staticText[currentLang].architectureLabel;'
);

// Replaces in createCaseStudy
content = content.replace(
  '<p class="case-kicker">Case study</p>',
  '<p class="case-kicker">\\${staticText[currentLang].caseStudyLabel}</p>'
);
content = content.replace(
  'createChip(\\`\\${project.gallery.length} telas\\`',
  'createChip(\\`\\${project.gallery.length} \\${staticText[currentLang].screensCount}\\`'
);
content = content.replace(
  'repoLink.textContent = "Ver código";',
  'repoLink.textContent = staticText[currentLang].viewCode;'
);
content = content.replace(
  'contactLink.textContent = "Conversar sobre o projeto";',
  'contactLink.textContent = staticText[currentLang].talkAboutProject;'
);

// Add applyStaticTranslations at the very end
content += '\\napplyStaticTranslations();\\n';

fs.writeFileSync(targetPath, content, 'utf8');
console.log('script.js updated successfully!');
