const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, 'Portfólio_Matheus_Bueno.html');
let content = fs.readFileSync(targetPath, 'utf8');

content = content.replace('<a href="#sobre">Perfil</a>', '<a href="#sobre" data-i18n="navProfile">Perfil</a>');
content = content.replace('<a href="#projetos">Projetos</a>', '<a href="#projetos" data-i18n="navProjects">Projetos</a>');
content = content.replace('<a href="#contato">Contato</a>', '<a href="#contato" data-i18n="navContact">Contato</a>');

content = content.replace('</nav>', '  <div class="lang-toggle">\\n          <button class="lang-btn is-active" data-lang="pt" onclick="setLanguage(\\'pt\\')">PT</button>\\n          <button class="lang-btn" data-lang="en" onclick="setLanguage(\\'en\\')">EN</button>\\n        </div>\\n      </nav>');
content = content.replace('<a class="nav-cta" href="#contato">Vamos conversar</a>', '<a class="nav-cta" href="#contato" data-i18n="navCta">Vamos conversar</a>');

content = content.replace('<p class="eyebrow">Portfólio 2026</p>', '<p class="eyebrow" data-i18n="heroEyebrow">Portfólio 2026</p>');
content = content.replace('<a class="button button-primary" href="#projetos">Ver projetos</a>', '<a class="button button-primary" href="#projetos" data-i18n="btnViewProjects">Ver projetos</a>');
content = content.replace('<a class="button button-secondary" href="#contato">Falar comigo</a>', '<a class="button button-secondary" href="#contato" data-i18n="btnContact">Falar comigo</a>');

content = content.replace('<span class="spotlight-label">Case em foco</span>', '<span class="spotlight-label" data-i18n="spotlightCase">Case em foco</span>');
content = content.replace('<h2 id="featured-title">Projeto em destaque</h2>', '<h2 id="featured-title" data-i18n="featuredProject">Projeto em destaque</h2>');
content = content.replace('<a class="inline-link" id="featured-link" href="#projetos">', '<a class="inline-link" id="featured-link" href="#projetos" data-i18n="openCase">');

content = content.replace('<p class="eyebrow">Perfil</p>', '<p class="eyebrow" data-i18n="profileEyebrow">Perfil</p>');
content = content.replace('<h2>Código, design de interface e narrativa visual trabalhando juntos.</h2>', '<h2 data-i18n="profileTitle">Código, design de interface e narrativa visual trabalhando juntos.</h2>');
content = content.replace('<p class="section-intro">\\n            O portfólio', '<p class="section-intro" data-i18n="profileIntro">\\n            O portfólio');

content = content.replace('<span class="bento-label">Resumo</span>', '<span class="bento-label" data-i18n="bentoSummary">Resumo</span>');
content = content.replace('<span class="bento-label">O que eu entrego</span>', '<span class="bento-label" data-i18n="bentoDeliver">O que eu entrego</span>');
content = content.replace('<span class="bento-label">Stack principal</span>', '<span class="bento-label" data-i18n="bentoStack">Stack principal</span>');
content = content.replace('<span class="bento-label">Fluxo</span>', '<span class="bento-label" data-i18n="bentoFlow">Fluxo</span>');

content = content.replace('<p class="eyebrow">Projetos principais</p>', '<p class="eyebrow" data-i18n="projectsEyebrow">Projetos principais</p>');
content = content.replace('<h2>Cases com galerias reais, stack clara e arquitetura resumida.</h2>', '<h2 data-i18n="projectsTitle">Cases com galerias reais, stack clara e arquitetura resumida.</h2>');
content = content.replace('<p class="section-intro">\\n            Cada projeto', '<p class="section-intro" data-i18n="projectsIntro">\\n            Cada projeto');

content = content.replace('<p class="eyebrow">Contato</p>', '<p class="eyebrow" data-i18n="contactEyebrow">Contato</p>');
content = content.replace('<h2>Vamos conversar sobre software, produto e oportunidades.</h2>', '<h2 data-i18n="contactTitle">Vamos conversar sobre software, produto e oportunidades.</h2>');
content = content.replace('<p class="contact-text">\\n              Se você', '<p class="contact-text" data-i18n="contactIntro">\\n              Se você');

fs.writeFileSync(targetPath, content, 'utf8');
console.log('HTML updated successfully!');
