const translations = {
  en: {
    "meta.title": "CourseWatch / 课讯 · Jiangyue Zeng",
    "meta.description": "CourseWatch is an open-source macOS app that gathers PKU course updates and deadlines in one timeline.",
    "nav.label": "Primary navigation",
    "nav.home": "Home",
    "nav.projects": "Projects",
    "profile.name": "Jiangyue Zeng",
    "language.target": "中文",
    "language.title": "Switch to Chinese",
    "theme.dark": "Switch to dark mode",
    "theme.light": "Switch to light mode",
    "hero.kicker": "Open-source macOS app",
    "hero.title": "CourseWatch",
    "hero.subtitle": "课讯",
    "hero.lead": "A calmer way to keep up with PKU courses. CourseWatch checks for <strong>new announcements, assignments, recordings, and grades</strong>, plus updates to course materials and syllabi, then brings them into one timeline.",
    "hero.github": "View on GitHub ↗",
    "hero.download": "Download for macOS ↗",
    "meta.platform": "Platform",
    "meta.stack": "Built with",
    "meta.scope": "For",
    "meta.scopeValue": "PKU students",
    "showcase.alt": "CourseWatch desktop interface with course updates, filters, and assignments",
    "showcase.caption": "Course updates, deadlines, and reading status in one view.",
    "features.kicker": "What it does",
    "features.title": "Built for the little things that are easy to miss.",
    "features.timeline.title": "One timeline",
    "features.timeline.desc": "Browse new course activity by time, type, and course. Unread items and unfinished assignments remain easy to spot.",
    "features.deadlines.title": "Deadlines with context",
    "features.deadlines.desc": "Track assignments, add your own tasks, and send due dates to Apple Calendar with advance reminders.",
    "features.sources.title": "Course sites together",
    "features.sources.desc": "Check PKU Course, with optional syncing for PKU Class and configured Gradescope courses. Add notes and pin important updates.",
    "footer.back": "Back to Projects",
  },
  zh: {
    "meta.title": "课讯 / CourseWatch · 曾姜月",
    "meta.description": "课讯是一款开源 macOS 应用，将北大课程更新和作业截止时间汇总到同一条时间线。",
    "nav.label": "主导航",
    "nav.home": "首页",
    "nav.projects": "项目",
    "profile.name": "曾姜月",
    "language.target": "EN",
    "language.title": "切换到英文",
    "theme.dark": "切换到深色模式",
    "theme.light": "切换到浅色模式",
    "hero.kicker": "开源 macOS 应用",
    "hero.title": "课讯",
    "hero.subtitle": "CourseWatch",
    "hero.lead": "每天检查北大教学网的<strong>新公告、新作业、新录播、新成绩</strong>，以及课程内容和课程大纲的更新；把动态汇总到同一条时间线，发现新内容时及时提醒～",
    "hero.github": "查看 GitHub 仓库 ↗",
    "hero.download": "下载 macOS 应用 ↗",
    "meta.platform": "平台",
    "meta.stack": "开发技术",
    "meta.scope": "适用人群",
    "meta.scopeValue": "北大学生",
    "showcase.alt": "课讯桌面应用界面，展示课程动态、筛选和作业",
    "showcase.caption": "课程更新、截止时间与阅读状态，集中在一处。",
    "features.kicker": "主要功能",
    "features.title": "让容易错过的课程动态变得一目了然。",
    "features.timeline.title": "统一时间线",
    "features.timeline.desc": "按时间、类型和课程查看动态，快速分辨未读内容与待完成作业。",
    "features.deadlines.title": "管理作业截止时间",
    "features.deadlines.desc": "跟踪作业或手动添加任务，把截止时间加入 Apple 日历并设置提前提醒。",
    "features.sources.title": "汇集多个课程网站",
    "features.sources.desc": "同步北大教学网，并可选择同步北大问学和配置过的 Gradescope 课程；支持备注与置顶。",
    "footer.back": "返回项目列表",
  },
};

const themeToggle = document.querySelector("[data-theme-toggle]");
const languageToggle = document.querySelector("[data-language-toggle]");
const languageTarget = document.querySelector("[data-language-target]");
const header = document.querySelector(".projects-header");
let currentLanguage = "en";
let currentTheme = "light";

function applyTheme(theme) {
  currentTheme = theme === "dark" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", currentTheme);
  const dictionary = translations[currentLanguage];
  const label = currentTheme === "dark" ? dictionary["theme.light"] : dictionary["theme.dark"];
  themeToggle.setAttribute("aria-label", label);
  themeToggle.setAttribute("title", label);
  localStorage.setItem("homepage-theme", currentTheme);
}

function applyLanguage(language) {
  currentLanguage = language === "zh" ? "zh" : "en";
  const dictionary = translations[currentLanguage];
  document.documentElement.lang = currentLanguage === "zh" ? "zh-CN" : "en";
  document.title = dictionary["meta.title"];
  document.querySelector('meta[name="description"]').content = dictionary["meta.description"];
  document.querySelector('meta[property="og:title"]').content = dictionary["meta.title"];
  document.querySelector('meta[property="og:description"]').content = dictionary["meta.description"];

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = dictionary[element.dataset.i18n];
    if (value !== undefined) element.textContent = value;
  });
  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const value = dictionary[element.dataset.i18nHtml];
    if (value !== undefined) element.innerHTML = value;
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const value = dictionary[element.dataset.i18nAria];
    if (value !== undefined) element.setAttribute("aria-label", value);
  });
  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const value = dictionary[element.dataset.i18nAlt];
    if (value !== undefined) element.setAttribute("alt", value);
  });

  languageTarget.textContent = dictionary["language.target"];
  languageToggle.setAttribute("aria-label", dictionary["language.title"]);
  languageToggle.setAttribute("title", dictionary["language.title"]);
  applyTheme(currentTheme);
}

currentTheme = localStorage.getItem("homepage-theme") === "dark" ? "dark" : "light";
applyLanguage("en");

themeToggle.addEventListener("click", () => applyTheme(currentTheme === "dark" ? "light" : "dark"));
languageToggle.addEventListener("click", () => applyLanguage(currentLanguage === "zh" ? "en" : "zh"));

function updateHeaderState() {
  header.classList.toggle("scrolled", window.scrollY > 24);
}
updateHeaderState();
window.addEventListener("scroll", updateHeaderState, { passive: true });
