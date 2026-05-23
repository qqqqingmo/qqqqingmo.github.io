const translations = {
  en: {
    "meta.title": "Projects / Jiangyue Zeng",
    "meta.description":
      "Selected projects by Jiangyue Zeng, including visualization systems and creative image-processing tools.",
    "nav.label": "Primary navigation",
    "nav.home": "Home",
    "language.target": "中文",
    "language.title": "Switch to Chinese",
    "theme.dark": "Switch to dark mode",
    "theme.light": "Switch to light mode",
    "profile.name": "Jiangyue Zeng",
    "hero.kicker": "Projects",
    "hero.title": "Selected Projects",
    "hero.lead": "A compact index for project cases that are safe to publish and easy to inspect.",
    "projects.label": "Project list",
    "project.dunhuang.alt": "Dunhuang Pattern Visualization demo poster",
    "project.dunhuang.type": "Research Visualization",
    "project.dunhuang.title": "Dunhuang Pattern Visualization",
    "project.dunhuang.desc":
      "Interactive visualization for cultural heritage image data, including browsing, filtering, detail analysis, and chart views.",
    "project.kaleidoscope.type": "Creative Tool",
    "project.kaleidoscope.title": "Kaleidoscope Pattern Generator",
    "project.kaleidoscope.desc":
      "A showcase-safe case for an image-processing pattern generator, with a browser-side real-time Canvas demo.",
    "footer.back": "Back to Homepage",
  },
  zh: {
    "meta.title": "项目 / 曾姜月",
    "meta.description": "曾姜月的项目案例，包括可视化系统与创意图像处理工具。",
    "nav.label": "主导航",
    "nav.home": "首页",
    "language.target": "EN",
    "language.title": "切换到英文",
    "theme.dark": "切换到深色模式",
    "theme.light": "切换到浅色模式",
    "profile.name": "曾姜月",
    "hero.kicker": "项目",
    "hero.title": "项目案例",
    "hero.lead": "这里集中放置适合公开展示、也方便对方快速查看的项目页面。",
    "projects.label": "项目列表",
    "project.dunhuang.alt": "敦煌纹样可视化系统演示封面",
    "project.dunhuang.type": "研究可视化",
    "project.dunhuang.title": "敦煌纹样可视化系统",
    "project.dunhuang.desc":
      "面向文化遗产图像数据的交互式可视化网页，包含浏览、筛选、详情分析与统计图表视图。",
    "project.kaleidoscope.type": "创意工具",
    "project.kaleidoscope.title": "万花筒图案生成器",
    "project.kaleidoscope.desc":
      "一个图像处理纹样生成器的安全展示版本，包含浏览器端实时 Canvas demo。",
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
    drawKaleidoscopeThumb();
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

function drawKaleidoscopeThumb() {
  const canvas = document.querySelector("#kaleidoscope-thumb");
  if (!canvas) {
    return;
  }
  const ctx = canvas.getContext("2d");
  const w = canvas.width;
  const h = canvas.height;
  const cx = w * 0.5;
  const cy = h * 0.5;
  const radius = Math.hypot(w, h) * 0.55;
  const segmentCount = 16;
  const angle = (Math.PI * 2) / segmentCount;

  const bg = ctx.createLinearGradient(0, 0, w, h);
  bg.addColorStop(0, document.documentElement.getAttribute("data-theme") === "dark" ? "#13202b" : "#edf8f6");
  bg.addColorStop(0.5, "#f0c49a");
  bg.addColorStop(1, "#be5a38");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, w, h);

  for (let i = 0; i < segmentCount; i += 1) {
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(i * angle);
    if (i % 2 === 1) {
      ctx.scale(1, -1);
    }
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(radius, -Math.tan(angle * 0.5) * radius);
    ctx.lineTo(radius, Math.tan(angle * 0.5) * radius);
    ctx.closePath();
    ctx.clip();

    const petal = ctx.createRadialGradient(90, 0, 0, 90, 0, 210);
    petal.addColorStop(0, "rgba(255, 255, 255, 0.82)");
    petal.addColorStop(0.4, "rgba(14, 159, 178, 0.44)");
    petal.addColorStop(1, "rgba(190, 90, 56, 0)");
    ctx.fillStyle = petal;
    ctx.beginPath();
    ctx.ellipse(140, 0, 210, 42, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = "rgba(255, 255, 255, 0.5)";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.bezierCurveTo(110, -80, 230, 85, 360, -20);
    ctx.stroke();
    ctx.restore();
  }

  ctx.save();
  ctx.globalCompositeOperation = "screen";
  ctx.fillStyle = "rgba(255, 255, 255, 0.22)";
  ctx.beginPath();
  ctx.arc(cx, cy, 82, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

drawKaleidoscopeThumb();
