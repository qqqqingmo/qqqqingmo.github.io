const translations = {
  en: {
    "meta.title": "Projects / Jiangyue Zeng",
    "meta.description":
      "Selected research and system design projects by Jiangyue Zeng, spanning cultural heritage visualization and interactive image generation.",
    "nav.label": "Primary navigation",
    "nav.home": "Home",
    "language.target": "中文",
    "language.title": "Switch to Chinese",
    "theme.dark": "Switch to dark mode",
    "theme.light": "Switch to light mode",
    "profile.name": "Jiangyue Zeng",
    "hero.kicker": "Projects",
    "hero.title": "Selected Projects",
    "hero.lead":
      "  ",
    "projects.label": "Project list",
    "project.dunhuang.alt": "Dunhuang Pattern Visualization demo poster",
    "project.dunhuang.type": "Research Visualization",
    "project.dunhuang.title": "Dunhuang Pattern Visualization",
    "project.dunhuang.desc":
      "Interactive visualization for cultural heritage image data, including browsing, filtering, detail analysis, and chart views.",
    "project.kaleidoscope.type": "Interactive System",
    "project.kaleidoscope.title": "Kaleidoscope Pattern Generator",
    "project.kaleidoscope.alt": "Kaleidoscope Pattern Generator pattern preview",
    "project.kaleidoscope.desc":
      "An interactive image-pattern system for region sampling, transformation structures, parameter control, and export.",
    "footer.back": "Back to Homepage",
  },
  zh: {
    "meta.title": "项目 / 曾姜月",
    "meta.description": "曾姜月的研究与系统设计项目，涵盖文化遗产可视化与交互式图像生成。",
    "nav.label": "主导航",
    "nav.home": "首页",
    "language.target": "EN",
    "language.title": "切换到英文",
    "theme.dark": "切换到深色模式",
    "theme.light": "切换到浅色模式",
    "profile.name": "曾姜月",
    "hero.kicker": "项目",
    "hero.title": "研究与设计项目",
    "hero.lead": "  ",
    "projects.label": "项目列表",
    "project.dunhuang.alt": "敦煌纹样可视化系统演示封面",
    "project.dunhuang.type": "研究可视化",
    "project.dunhuang.title": "敦煌纹样可视化系统",
    "project.dunhuang.desc":
      "面向文化遗产图像数据的交互式可视化网页，包含浏览、筛选、详情分析与统计图表视图。",
    "project.kaleidoscope.type": "交互系统",
    "project.kaleidoscope.title": "万花筒图案生成器",
    "project.kaleidoscope.alt": "万花筒图案生成器纹样预览图",
    "project.kaleidoscope.desc":
      "面向图像局部采样与纹样生成的交互系统，支持结构切换、参数控制与结果导出。",
    "footer.back": "返回首页",
  },
};

const themeToggle = document.querySelector("[data-theme-toggle]");
const languageToggle = document.querySelector("[data-language-toggle]");
const languageTarget = document.querySelector("[data-language-target]");
const header = document.querySelector(".projects-header");
let currentLanguage = "en";
let currentTheme = "light";

const setMetaContent = (selector, value) => {
  const element = document.querySelector(selector);
  if (element) {
    element.setAttribute("content", value);
  }
};

const applyLanguage = (language) => {
  currentLanguage = language === "zh" ? "zh" : "en";
  const dictionary = translations[currentLanguage];

  document.documentElement.lang = currentLanguage === "zh" ? "zh-CN" : "en";
  document.title = dictionary["meta.title"];
  setMetaContent('meta[name="description"]', dictionary["meta.description"]);
  setMetaContent('meta[property="og:title"]', dictionary["meta.title"]);
  setMetaContent('meta[property="og:description"]', dictionary["meta.description"]);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = dictionary[element.dataset.i18n];
    if (value !== undefined) {
      element.textContent = value;
    }
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const value = dictionary[element.dataset.i18nAria];
    if (value !== undefined) {
      element.setAttribute("aria-label", value);
    }
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const value = dictionary[element.dataset.i18nAlt];
    if (value !== undefined) {
      element.setAttribute("alt", value);
    }
  });

  if (languageToggle && languageTarget) {
    languageTarget.textContent = dictionary["language.target"];
    languageToggle.setAttribute("aria-label", dictionary["language.title"]);
    languageToggle.setAttribute("title", dictionary["language.title"]);
  }

  localStorage.setItem("homepage-language", currentLanguage);
  applyTheme(currentTheme);
};

const applyTheme = (theme) => {
  currentTheme = theme === "dark" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", currentTheme);
  const dictionary = translations[currentLanguage] || translations.en;
  if (themeToggle) {
    const label = currentTheme === "dark" ? dictionary["theme.light"] : dictionary["theme.dark"];
    themeToggle.setAttribute("aria-label", label);
    themeToggle.setAttribute("title", label);
  }
  localStorage.setItem("homepage-theme", currentTheme);
};

const getInitialTheme = () => {
  const saved = localStorage.getItem("homepage-theme");
  return saved === "dark" || saved === "light" ? saved : "light";
};

const getInitialLanguage = () => {
  const params = new URLSearchParams(window.location.search);
  const requested = params.get("lang");
  if (requested === "zh" || requested === "en") {
    return requested;
  }
  const saved = localStorage.getItem("homepage-language");
  return saved === "zh" || saved === "en" ? saved : "en";
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
