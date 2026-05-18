const translations = {
  en: {
    "nav.label": "Primary navigation",
    "nav.home": "Home",
    "nav.demo": "Demo",
    "language.target": "中文",
    "language.title": "Switch to Chinese",
    "theme.dark": "Switch to dark mode",
    "theme.light": "Switch to light mode",
    "profile.name": "Jiangyue Zeng",
    "hero.kicker": "Project",
    "demo.kicker": "Demo",
    "hero.title": "Dunhuang Pattern Visualization",
    "hero.subtitle": "敦煌纹样可视化系统",
    "hero.lead":
      'An interactive frontend visualization web page for <strong>Dunhuang caisson and pattern image data</strong>, organizing image browsing, pattern filtering, detail analysis, and statistical charts into a continuous research data exploration path.',
    "meta.type": "Type",
    "meta.typeValue": "Research Visualization",
    "meta.focus": "Focus",
    "meta.focusValue": "Cultural heritage data, Visual analytics, Frontend interaction",
    "meta.role": "My role",
    "meta.roleValue": "Frontend system, Data preparation, Visual analytics, UI design",
    "demo.title": "System walkthrough",
    "demo.desc":
      "Covers the complete interaction path from <strong>cover animation, global statistics, gallery filtering</strong> to <strong>individual image details</strong>, providing various analytical views such as <strong>count statistics, co-occurrence matrix, network graph, and color clustering</strong>; supports filtering by dynasty, location, and other dimensions, allowing viewing of <strong>metadata, typical patterns, local regions, color analysis, cave location</strong>, and <strong>related samples</strong> for individual images.",
    "role.kicker": "Work",
    "role.title": "Contribution",
    "role.frontend.title": "Frontend system",
    "role.frontend.desc":
      'Independently designed and implemented the frontend page, building a complete interaction flow from <strong>cover, global statistics, gallery to detail pages</strong>.',
    "role.frontend.li1": "Designed page structure, routing relationships, and main interaction states.",
    "role.frontend.li2": "Implemented image browsing, conditional filtering, detail page switching, and chart display.",
    "role.frontend.li3": "Organized the showcase version, enabling the research project to be presented as an accessible web demo.",
    "role.data.title": "Data and analytics",
    "role.data.desc":
      'Completed data processing, statistical analysis, and backend statistics code, organizing raw research data into a <strong>clear frontend data structure</strong>.',
    "role.data.li1": "Classified patterns, image metadata, and organized statistical fields.",
    "role.data.li2": "Implemented pattern counting, co-occurrence relationships, color clustering, and other analysis results.",
    "role.data.li3": "Analyzed outputs and mapped them to the required data formats.",
    "role.visual.title": "Visualization design",
    "role.visual.desc":
      'Responsible for <strong>complete UI design</strong>, translating cultural heritage data into more readable interface expressions, balancing academic information density and web usability.',
    "role.visual.li1": "Selected expression forms such as gallery, matrix, network graph, and clustering views based on research questions.",
    "role.visual.li2": "Controlled the page narrative rhythm, guiding the browsing path from overall overview to detailed analysis.",
    "footer.back": "Back to Homepage",
  },
  zh: {
    "nav.label": "主导航",
    "nav.home": "首页",
    "nav.demo": "演示",
    "language.target": "EN",
    "language.title": "切换到英文",
    "theme.dark": "切换到深色模式",
    "theme.light": "切换到浅色模式",
    "profile.name": "曾姜月",
    "hero.kicker": "项目",
    "demo.kicker": "演示",
    "hero.title": "敦煌纹样可视化系统",
    "hero.subtitle": "Dunhuang Pattern Visualization",
    "hero.lead":
      '面向<strong>敦煌藻井与纹样图像数据</strong>的交互式前端可视化网页，将图像浏览、纹样筛选、详情分析和统计图表组织成一条连续的研究数据探索路径。',
    "meta.type": "类型",
    "meta.typeValue": "研究可视化",
    "meta.focus": "关注点",
    "meta.focusValue": "文化遗产数据、可视化分析、前端交互",
    "meta.role": "我的角色",
    "meta.roleValue": "前端系统、数据整理、可视化分析、界面设计",
    "demo.title": "系统概览",
    "demo.desc":
      "系统涵盖从<strong>封面动画、全局统计、图库筛选</strong>到<strong>单图详情</strong>的完整交互路径，提供<strong>计数统计、共现矩阵、网络图、颜色聚类</strong>等多种分析视图；支持按朝代、位置等维度筛选，可查看单张图像的<strong>元信息、典型纹样、局部区域、色彩分析、所在洞窟</strong>以及<strong>相关样本</strong>。",
    "role.kicker": "工作",
    "role.title": "贡献",
    "role.frontend.title": "前端系统",
    "role.frontend.desc":
      '基本独立完成前端页面设计与实现，搭建从<strong>封面、全局统计、图库到详情页</strong>的完整交互流程。',
    "role.frontend.li1": "设计页面结构、路由关系和主要交互状态。",
    "role.frontend.li2": "实现图像浏览、条件筛选、详情页切换和图表展示。",
    "role.frontend.li3": "整理作品展示版本，使研究型项目可以作为可访问的网页 demo 呈现。",
    "role.data.title": "数据与分析",
    "role.data.desc":
      '完成数据处理、统计分析和后端侧统计代码，将原始研究数据整理为<strong>前端清晰的数据结构</strong>。',
    "role.data.li1": "分类纹样、图像元信息和整理统计字段。",
    "role.data.li2": "实现纹样计数、共现关系、颜色聚类等分析结果。",
    "role.data.li3": "分析输出并映射到所需的数据格式。",
    "role.visual.title": "可视化设计",
    "role.visual.desc":
      '负责<strong>完整UI设计</strong>，把文化遗产数据转译为更易阅读的界面表达，在学术信息密度和网页可用性之间平衡。',
    "role.visual.li1": "根据研究问题选择图库、矩阵、网络图和聚类视图等表达形式。",
    "role.visual.li2": "控制页面叙事节奏，使浏览路径从整体概览逐步进入局部分析。",
    "footer.back": "返回首页",
  },
};

const themeToggle = document.querySelector("[data-theme-toggle]");
const languageToggle = document.querySelector("[data-language-toggle]");
const languageTarget = document.querySelector("[data-language-target]");
const header = document.querySelector(".project-header");
let currentLanguage = "en";
let currentTheme = "light";

const applyLanguage = (language) => {
  currentLanguage = language === "zh" ? "zh" : "en";
  const dictionary = translations[currentLanguage];

  document.documentElement.lang = currentLanguage === "zh" ? "zh-CN" : "en";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = dictionary[element.dataset.i18n];
    if (value !== undefined) {
      element.textContent = value;
    }
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const value = dictionary[element.dataset.i18nHtml];
    if (value !== undefined) {
      element.innerHTML = value;
    }
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const value = dictionary[element.dataset.i18nAria];
    if (value !== undefined) {
      element.setAttribute("aria-label", value);
    }
  });

  if (languageToggle && languageTarget) {
    languageTarget.textContent = dictionary["language.target"];
    languageToggle.setAttribute("aria-label", dictionary["language.title"]);
    languageToggle.setAttribute("title", dictionary["language.title"]);
  }

  localStorage.setItem("homepage-language", currentLanguage);
};

const applyTheme = (theme) => {
  currentTheme = theme;
  document.documentElement.setAttribute("data-theme", currentTheme);
  const dictionary = translations[currentLanguage];
  if (themeToggle) {
    const label = currentTheme === "dark" ? dictionary["theme.light"] : dictionary["theme.dark"];
    themeToggle.setAttribute("aria-label", label);
    themeToggle.setAttribute("title", label);
  }
  localStorage.setItem("homepage-theme", currentTheme);
};

const getInitialTheme = () => {
  const saved = localStorage.getItem("homepage-theme");
  if (saved === "dark" || saved === "light") {
    return saved;
  }
  return "light";
};

const getInitialLanguage = () => {
  const params = new URLSearchParams(window.location.search);
  const requested = params.get("lang");
  if (requested === "zh" || requested === "en") {
    return requested;
  }
  const saved = localStorage.getItem("homepage-language");
  if (saved === "zh" || saved === "en") {
    return saved;
  }
  return "en";
};

if (themeToggle) {
  applyTheme(getInitialTheme());
  themeToggle.addEventListener("click", () => {
    applyTheme(currentTheme === "dark" ? "light" : "dark");
  });
}

if (languageToggle) {
  applyLanguage(getInitialLanguage());
  languageToggle.addEventListener("click", () => {
    applyLanguage(currentLanguage === "zh" ? "en" : "zh");
  });
}

const updateHeaderState = () => {
  if (!header) {
    return;
  }
  header.classList.toggle("scrolled", window.scrollY > 24);
};

updateHeaderState();
window.addEventListener("scroll", updateHeaderState, { passive: true });
