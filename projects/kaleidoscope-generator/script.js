const translations = {
  en: {
    "meta.title": "Kaleidoscope Pattern Generator / 万花筒图案生成器",
    "meta.description":
      "Kaleidoscope Pattern Generator: a project case for an image-pattern generation tool with a browser-side Canvas live demo.",
    "nav.label": "Primary navigation",
    "nav.home": "Home",
    "nav.projects": "Projects",
    "nav.demo": "Live demo",
    "language.target": "中文",
    "language.title": "Switch to Chinese",
    "theme.dark": "Switch to dark mode",
    "theme.light": "Switch to light mode",
    "profile.name": "Jiangyue Zeng",
    "hero.kicker": "Project",
    "hero.title": "Kaleidoscope Pattern Generator",
    "hero.subtitle": "万花筒图案生成器",
    "hero.lead":
      'A project case refined from a <strong>PyQt + OpenCV image-processing tool</strong>: users select a local image region, then generate seamless patterns through mirroring, rotation, tiling, parameter controls, and export.',
    "meta.type": "Type",
    "meta.typeValue": "Interactive System / Image Processing",
    "meta.focus": "Focus",
    "meta.focusValue": "Interactive visualization, Image processing, Pattern generation",
    "meta.role": "My role",
    "meta.roleValue": "System design, Visual design, Frontend implementation",
    "demo.kicker": "Live Demo",
    "demo.title": "Interactive pattern generation",
    "demo.desc":
      'This demo reconstructs the core interaction with <strong>Canvas</strong>: choose a texture focus, switch generation structures, adjust rotation/scale/repetition, and render results in real time. Uploaded images are processed locally in the browser and are not added to the repository or sent to a server.',
    "demo.source": "Source texture",
    "demo.sourceHint": "Drag inside the image",
    "demo.output": "Generated pattern",
    "controls.image": "Image",
    "controls.upload": "Upload local image",
    "controls.randomize": "Other sample",
    "controls.pattern": "Pattern type",
    "controls.weave": "Cross weave",
    "controls.triangle": "Triangle",
    "controls.square": "Square",
    "controls.segments": "Segments",
    "controls.density": "Weave density",
    "controls.rotation": "Rotation",
    "controls.scale": "Texture scale",
    "controls.tiles": "Tiles",
    "controls.repeatX": "H",
    "controls.repeatY": "V",
    "controls.options": "Options",
    "controls.mirror": "Mirror alternate slices",
    "controls.mirrorWeave": "Mirror weave",
    "controls.animate": "Motion",
    "controls.download": "Export PNG",
    "role.kicker": "Work",
    "role.title": "Design Rationale",
    "role.product.title": "System design",
    "role.product.desc":
      'Built a complete interaction flow around <strong>pattern generation, parameter control, and export</strong>: clarifying user flow, core interactions, parameter control, and output capabilities. It generates continuous patterns by mirroring, rotating, and tiling the selected image region.',
    "role.engineering.title": "Computational approach",
    "role.engineering.desc":
      "The original project uses PyQt for UI and OpenCV for region cropping, mirroring, and tiling. This demo recreates this core experience in browser-side Canvas, demonstrating the ability to abstract interaction models across different technology stacks.",
    "role.frontend.title": "Frontend implementation",
    "role.frontend.desc":
      'The current web demo is built with vanilla JavaScript and the Canvas 2D API, rendering patterns in real time within a lightweight static page structure. The original Python project uses PyQt for its UI framework.',
    "boundary.kicker": "Boundary",
    "boundary.title": "Showcase version notes",
    "boundary.item1":
      "This page does not include the full dataset, executable build, cache files, or the original project source code.",
    "boundary.item2":
      "The live demo includes two curated sample inputs; local uploads stay inside the browser session.",
    "boundary.item3":
      "The page is a static implementation and GitHub Pages friendly, deployable without server configuration or private paths.",
    "footer.projects": "Back to Projects",
  },
  zh: {
    "meta.title": "万花筒图案生成器 / Kaleidoscope Pattern Generator",
    "meta.description":
      "万花筒图案生成器：一个图像纹样生成工具的项目展示页，包含浏览器端 Canvas 实时 demo。",
    "nav.label": "主导航",
    "nav.home": "首页",
    "nav.projects": "项目",
    "nav.demo": "实时 demo",
    "language.target": "EN",
    "language.title": "切换到英文",
    "theme.dark": "切换到深色模式",
    "theme.light": "切换到浅色模式",
    "profile.name": "曾姜月",
    "hero.kicker": "项目",
    "hero.title": "万花筒图案生成器",
    "hero.subtitle": "Kaleidoscope Pattern Generator",
    "hero.lead":
      '一个从 <strong>PyQt + OpenCV 图像处理工具</strong>整理出的项目案例：用户选择局部图像后，系统通过镜像、旋转和平铺生成连续纹样，并提供参数化控制与导出功能。',
    "meta.type": "类型",
    "meta.typeValue": "交互系统 / 图像处理",
    "meta.focus": "关注点",
    "meta.focusValue": "交互可视化、图像处理、纹样生成",
    "meta.role": "我的角色",
    "meta.roleValue": "系统设计、视觉设计、前端实现",
    "demo.kicker": "实时 demo",
    "demo.title": "交互实时纹样生成",
    "demo.desc":
      '基于 <strong>Canvas</strong> 的交互式纹样生成系统：选择纹理焦点、切换生成结构、调整旋转/缩放/重复次数，在浏览器内实时渲染结果。上传的图片只在本地浏览器处理，不会进入仓库或服务器。',
    "demo.source": "输入纹理",
    "demo.sourceHint": "拖拽选区中心",
    "demo.output": "生成结果",
    "controls.image": "图像",
    "controls.upload": "上传本地图片",
    "controls.randomize": "切换示例",
    "controls.pattern": "纹样结构",
    "controls.weave": "十字编织",
    "controls.triangle": "三角",
    "controls.square": "方形",
    "controls.segments": "镜像切片",
    "controls.density": "编织密度",
    "controls.rotation": "纹理旋转",
    "controls.scale": "纹理缩放",
    "controls.tiles": "平铺",
    "controls.repeatX": "水平",
    "controls.repeatY": "竖直",
    "controls.options": "选项",
    "controls.mirror": "交替镜像",
    "controls.mirrorWeave": "镜像编织",
    "controls.animate": "动态预览",
    "controls.download": "导出 PNG",
    "role.kicker": "工作",
    "role.title": "设计思路",
    "role.product.title": "系统设计",
    "role.product.desc":
      '围绕<strong>纹样生成、参数控制与导出流程</strong>构建完整交互：将图案探索、参数比较与结果保存组织为连贯工作流，使创作尝试能够快速迭代并沉淀为可用输出。',
    "role.engineering.title": "计算方法",
    "role.engineering.desc":
      "原项目使用 PyQt 构建界面、OpenCV 处理选区裁切与镜像平铺；本 demo 用 Canvas 在浏览器端复刻核心体验，展示跨技术栈抽象同一交互模型的能力。",
    "role.frontend.title": "前端实现",
    "role.frontend.desc":
      '当前网页 demo 基于原生 JavaScript 与 Canvas 2D API 构建，在轻量的静态页面结构内实现纹样的实时渲染。原项目使用 PyQt 作为界面框架。',
    "boundary.kicker": "边界",
    "boundary.title": "展示版本说明",
    "boundary.item1": "页面不包含完整数据集、可执行构建、缓存文件或原项目完整源码。",
    "boundary.item2": "实时 demo 仅包含两个展示用输入样例；本地上传图片只停留在当前浏览器会话。",
    "boundary.item3": "页面为静态实现，适配 GitHub Pages，不需要服务器配置或私有路径。",
    "footer.projects": "返回项目列表",
  },
};

const themeToggle = document.querySelector("[data-theme-toggle]");
const languageToggle = document.querySelector("[data-language-toggle]");
const languageTarget = document.querySelector("[data-language-target]");
const header = document.querySelector(".project-header");
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

const initKaleidoscopeDemo = () => {
  const sourceCanvas = document.querySelector("#source-canvas");
  const resultCanvas = document.querySelector("#result-canvas");
  if (!sourceCanvas || !resultCanvas) {
    return;
  }

  const sourceCtx = sourceCanvas.getContext("2d");
  const resultCtx = resultCanvas.getContext("2d");
  const textureCanvas = document.createElement("canvas");
  textureCanvas.width = sourceCanvas.width;
  textureCanvas.height = sourceCanvas.height;
  const textureCtx = textureCanvas.getContext("2d");

  const controls = {
    upload: document.querySelector("#image-upload"),
    randomize: document.querySelector("#randomize-source"),
    patternButtons: Array.from(document.querySelectorAll("[data-pattern]")),
    segments: document.querySelector("#segments"),
    rotation: document.querySelector("#rotation"),
    scale: document.querySelector("#scale"),
    repeatX: document.querySelector("#repeat-x"),
    repeatY: document.querySelector("#repeat-y"),
    mirror: document.querySelector("#mirror-source"),
    mirrorLabel: document.querySelector("#mirror-label"),
    animate: document.querySelector("#animate-output"),
    download: document.querySelector("#download-pattern"),
    segmentsLabel: document.querySelector("#segments-label"),
    segmentsValue: document.querySelector("#segments-value"),
    rotationValue: document.querySelector("#rotation-value"),
    scaleValue: document.querySelector("#scale-value"),
    repeatXValue: document.querySelector("#repeat-x-value"),
    repeatYValue: document.querySelector("#repeat-y-value"),
  };

  const patternPresets = {
    weave: { segments: 2, repeatX: 3, repeatY: 3, scale: 122 },
    triangle: { segments: 12, repeatX: 2, repeatY: 3, scale: 112 },
    square: { segments: 8, repeatX: 3, repeatY: 3, scale: 126 },
  };

  const state = {
    pattern: "triangle",
    seed: 18,
    sampleIndex: 0,
    sourceRevision: 0,
    focusX: textureCanvas.width * 0.54,
    focusY: textureCanvas.height * 0.48,
    segments: 12,
    rotation: 0,
    scale: 1.12,
    repeatX: 2,
    repeatY: 3,
    mirror: true,
    animate: false,
    dragActive: false,
    phase: 0,
    animationFrame: 0,
  };

  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

  const createRandom = (seed) => {
    let value = seed % 2147483647;
    if (value <= 0) {
      value += 2147483646;
    }
    return () => {
      value = (value * 16807) % 2147483647;
      return (value - 1) / 2147483646;
    };
  };

  const drawSyntheticTexture = () => {
    const w = textureCanvas.width;
    const h = textureCanvas.height;
    const random = createRandom(state.seed);

    const gradient = textureCtx.createLinearGradient(0, 0, w, h);
    gradient.addColorStop(0, "#e9f5f4");
    gradient.addColorStop(0.38, "#f8d8b8");
    gradient.addColorStop(0.72, "#b9d6c7");
    gradient.addColorStop(1, "#314f63");
    textureCtx.fillStyle = gradient;
    textureCtx.fillRect(0, 0, w, h);

    textureCtx.globalCompositeOperation = "multiply";
    for (let i = 0; i < 42; i += 1) {
      const x = random() * w;
      const y = random() * h;
      const radius = 22 + random() * 86;
      const hue = [12, 38, 176, 202, 318][Math.floor(random() * 5)];
      const alpha = 0.15 + random() * 0.28;
      const spot = textureCtx.createRadialGradient(x, y, 0, x, y, radius);
      spot.addColorStop(0, `hsla(${hue}, 72%, 56%, ${alpha})`);
      spot.addColorStop(1, `hsla(${hue}, 72%, 56%, 0)`);
      textureCtx.fillStyle = spot;
      textureCtx.beginPath();
      textureCtx.arc(x, y, radius, 0, Math.PI * 2);
      textureCtx.fill();
    }

    textureCtx.globalCompositeOperation = "screen";
    textureCtx.lineCap = "round";
    for (let i = 0; i < 18; i += 1) {
      textureCtx.save();
      textureCtx.translate(random() * w, random() * h);
      textureCtx.rotate(random() * Math.PI * 2);
      textureCtx.strokeStyle = `hsla(${170 + random() * 70}, 82%, 72%, ${0.3 + random() * 0.28})`;
      textureCtx.lineWidth = 2 + random() * 7;
      textureCtx.beginPath();
      const length = 80 + random() * 170;
      textureCtx.moveTo(-length * 0.5, 0);
      textureCtx.bezierCurveTo(-length * 0.2, -40, length * 0.24, 40, length * 0.5, 0);
      textureCtx.stroke();
      textureCtx.restore();
    }
    textureCtx.globalCompositeOperation = "source-over";

    textureCtx.fillStyle = "rgba(255, 255, 255, 0.36)";
    for (let i = 0; i < 68; i += 1) {
      const size = 1.5 + random() * 4.5;
      textureCtx.beginPath();
      textureCtx.arc(random() * w, random() * h, size, 0, Math.PI * 2);
      textureCtx.fill();
    }
  };

  const drawImageCover = (image) => {
    const w = textureCanvas.width;
    const h = textureCanvas.height;
    const scale = Math.max(w / image.width, h / image.height);
    const drawW = image.width * scale;
    const drawH = image.height * scale;
    textureCtx.clearRect(0, 0, w, h);
    textureCtx.drawImage(image, (w - drawW) * 0.5, (h - drawH) * 0.5, drawW, drawH);
  };

  const resetFocus = () => {
    state.focusX = sourceCanvas.width * 0.5;
    state.focusY = sourceCanvas.height * 0.5;
  };

  const showBundledSample = (index) => {
    state.sampleIndex = index;
    state.sourceRevision += 1;
    const requestRevision = state.sourceRevision;

    if (index === 0) {
      state.seed = 18;
      drawSyntheticTexture();
      resetFocus();
      render();
      return;
    }

    const image = new Image();
    image.onload = () => {
      if (requestRevision !== state.sourceRevision) {
        return;
      }
      drawImageCover(image);
      resetFocus();
      render();
    };
    image.src = "assets/sample-02.jpg";
  };

  const selectorPoints = () => {
    const size = 72 + Number(controls.scale.value) * 0.44;
    if (state.pattern === "square" || state.pattern === "weave") {
      return [
        [-size * 0.5, -size * 0.5],
        [size * 0.5, -size * 0.5],
        [size * 0.5, size * 0.5],
        [-size * 0.5, size * 0.5],
      ];
    }
    const angleOffset = state.pattern === "triangle" ? -Math.PI / 2 : -Math.PI / 6;
    return [0, 1, 2].map((index) => {
      const angle = angleOffset + index * ((Math.PI * 2) / 3);
      return [Math.cos(angle) * size * 0.68, Math.sin(angle) * size * 0.68];
    });
  };

  const drawSource = () => {
    const w = sourceCanvas.width;
    const h = sourceCanvas.height;
    sourceCtx.clearRect(0, 0, w, h);
    sourceCtx.drawImage(textureCanvas, 0, 0, w, h);

    sourceCtx.save();
    sourceCtx.translate(state.focusX, state.focusY);
    sourceCtx.rotate((state.rotation * Math.PI) / 180);
    sourceCtx.beginPath();
    selectorPoints().forEach(([x, y], index) => {
      if (index === 0) {
        sourceCtx.moveTo(x, y);
      } else {
        sourceCtx.lineTo(x, y);
      }
    });
    sourceCtx.closePath();
    sourceCtx.fillStyle = "rgba(255, 255, 255, 0.18)";
    sourceCtx.strokeStyle = "rgba(190, 90, 56, 0.92)";
    sourceCtx.lineWidth = 2.5;
    sourceCtx.fill();
    sourceCtx.stroke();
    sourceCtx.restore();

    sourceCtx.save();
    sourceCtx.fillStyle = "rgba(15, 23, 42, 0.42)";
    sourceCtx.beginPath();
    sourceCtx.arc(state.focusX, state.focusY, 4, 0, Math.PI * 2);
    sourceCtx.fill();
    sourceCtx.restore();
  };

  const drawRepeatedTexture = (ctx, drawScale) => {
    ctx.scale(drawScale, drawScale);
    const x = -state.focusX;
    const y = -state.focusY;
    for (let row = -1.5; row <= 1.5; row += 1) {
      for (let col = -1.5; col <= 1.5; col += 1) {
        ctx.drawImage(textureCanvas, x + col * textureCanvas.width, y + row * textureCanvas.height);
      }
    }
  };

  const drawUnit = (ctx, x, y, width, height, index) => {
    const radius = Math.hypot(width, height);
    const angle = (Math.PI * 2) / state.segments;
    const halfWidth = Math.tan(angle * 0.5) * radius;
    const baseScale =
      (Math.max(width / textureCanvas.width, height / textureCanvas.height) * state.scale * 1.32);
    const bleed = 1;

    ctx.save();
    ctx.beginPath();
    ctx.rect(x - bleed, y - bleed, width + bleed * 2, height + bleed * 2);
    ctx.clip();
    ctx.translate(x + width * 0.5, y + height * 0.5);

    for (let i = 0; i < state.segments; i += 1) {
      ctx.save();
      ctx.rotate(i * angle);
      if (state.mirror && i % 2 === 1) {
        ctx.scale(1, -1);
      }
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(radius, -(halfWidth + bleed));
      ctx.lineTo(radius, halfWidth + bleed);
      ctx.closePath();
      ctx.clip();
      ctx.rotate((state.rotation * Math.PI) / 180 + state.phase);
      drawRepeatedTexture(ctx, baseScale);
      ctx.restore();
    }

    ctx.restore();
  };

  const drawWeaveTriangle = (ctx, points, x, y, width, height, rotation, mirrored) => {
    const sampleSize = clamp(460 / state.scale, 108, textureCanvas.width);
    const sourceX = clamp(state.focusX - sampleSize * 0.5, 0, textureCanvas.width - sampleSize);
    const sourceY = clamp(state.focusY - sampleSize * 0.5, 0, textureCanvas.height - sampleSize);
    const extent = Math.hypot(width, height);

    ctx.save();
    ctx.beginPath();
    points.forEach(([pointX, pointY], index) => {
      if (index === 0) {
        ctx.moveTo(pointX, pointY);
      } else {
        ctx.lineTo(pointX, pointY);
      }
    });
    ctx.closePath();
    ctx.clip();
    ctx.translate(x + width * 0.5, y + height * 0.5);
    ctx.rotate(rotation + (state.rotation * Math.PI) / 180 + state.phase);
    if (state.mirror && mirrored) {
      ctx.scale(-1, 1);
    }
    ctx.drawImage(
      textureCanvas,
      sourceX,
      sourceY,
      sampleSize,
      sampleSize,
      -extent * 0.5,
      -extent * 0.5,
      extent,
      extent
    );
    ctx.restore();
  };

  const drawWeaveCell = (ctx, x, y, width, height, alternate) => {
    const centerX = x + width * 0.5;
    const centerY = y + height * 0.5;
    const turns = alternate ? Math.PI : 0;
    const pieces = [
      [[x, y], [x + width, y], [centerX, centerY]],
      [[x + width, y], [x + width, y + height], [centerX, centerY]],
      [[x + width, y + height], [x, y + height], [centerX, centerY]],
      [[x, y + height], [x, y], [centerX, centerY]],
    ];

    pieces.forEach((points, index) => {
      drawWeaveTriangle(
        ctx,
        points,
        x,
        y,
        width,
        height,
        turns + index * (Math.PI / 2),
        (index + Number(alternate)) % 2 === 1
      );
    });
  };

  // Original Icon 5 approach: diagonal triangle masks, mirrored partners, then a 45 degree woven repeat.
  const drawWeaveResult = (ctx, width, height) => {
    const density = state.segments;
    const tileWidth = width / (state.repeatX * density);
    const tileHeight = height / (state.repeatY * density);
    const diagonal = Math.hypot(width, height);
    const columns = Math.ceil(diagonal / tileWidth) + 4;
    const rows = Math.ceil(diagonal / tileHeight) + 4;
    const offsetX = (width - columns * tileWidth) * 0.5;
    const offsetY = (height - rows * tileHeight) * 0.5;

    ctx.save();
    ctx.translate(width * 0.5, height * 0.5);
    ctx.rotate(Math.PI / 4);
    ctx.translate(-width * 0.5, -height * 0.5);
    for (let row = 0; row < rows; row += 1) {
      for (let col = 0; col < columns; col += 1) {
        drawWeaveCell(
          ctx,
          offsetX + col * tileWidth,
          offsetY + row * tileHeight,
          tileWidth + 1,
          tileHeight + 1,
          (row + col) % 2 === 1
        );
      }
    }
    ctx.restore();
  };

  const drawResult = () => {
    const w = resultCanvas.width;
    const h = resultCanvas.height;
    resultCtx.clearRect(0, 0, w, h);
    resultCtx.fillStyle = "#f8fafc";
    if (document.documentElement.getAttribute("data-theme") === "dark") {
      resultCtx.fillStyle = "#111827";
    }
    resultCtx.fillRect(0, 0, w, h);

    if (state.pattern === "weave") {
      drawWeaveResult(resultCtx, w, h);
    } else {
      const tileW = w / state.repeatX;
      const tileH = h / state.repeatY;
      for (let row = 0; row < state.repeatY; row += 1) {
        for (let col = 0; col < state.repeatX; col += 1) {
        resultCtx.save();
        resultCtx.translate(col * tileW + tileW * 0.5, row * tileH + tileH * 0.5);
        if (col % 2 === 1) {
          resultCtx.scale(-1, 1);
        }
        if (row % 2 === 1) {
          resultCtx.scale(1, -1);
        }
        resultCtx.translate(-tileW * 0.5, -tileH * 0.5);
        drawUnit(resultCtx, 0, 0, tileW, tileH, row + col);
        resultCtx.restore();
        }
      }
    }

    resultCtx.save();
    resultCtx.globalCompositeOperation = "multiply";
    resultCtx.fillStyle = "rgba(14, 159, 178, 0.04)";
    resultCtx.fillRect(0, 0, w, h);
    resultCtx.restore();
  };

  const render = () => {
    drawSource();
    drawResult();
  };

  const updateOutputs = () => {
    controls.segmentsValue.textContent = String(state.segments);
    controls.rotationValue.textContent = `${state.rotation}°`;
    controls.scaleValue.textContent = `${Math.round(state.scale * 100)}%`;
    controls.repeatXValue.textContent = String(state.repeatX);
    controls.repeatYValue.textContent = String(state.repeatY);
  };

  const syncControlsFromState = () => {
    const isWeave = state.pattern === "weave";
    controls.segments.min = isWeave ? "1" : "4";
    controls.segments.max = isWeave ? "5" : "20";
    controls.segments.value = String(state.segments);
    controls.rotation.value = String(state.rotation);
    controls.scale.value = String(Math.round(state.scale * 100));
    controls.repeatX.value = String(state.repeatX);
    controls.repeatY.value = String(state.repeatY);
    controls.mirror.checked = state.mirror;
    controls.animate.checked = state.animate;
    controls.patternButtons.forEach((button) => {
      button.classList.toggle("is-active", button.dataset.pattern === state.pattern);
    });
    const segmentsKey = isWeave ? "controls.density" : "controls.segments";
    controls.segmentsLabel.dataset.i18n = segmentsKey;
    controls.segmentsLabel.textContent = translations[currentLanguage][segmentsKey];
    const mirrorKey = isWeave ? "controls.mirrorWeave" : "controls.mirror";
    controls.mirrorLabel.dataset.i18n = mirrorKey;
    controls.mirrorLabel.textContent = translations[currentLanguage][mirrorKey];
    updateOutputs();
  };

  const updateFocusFromEvent = (event) => {
    const rect = sourceCanvas.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * sourceCanvas.width;
    const y = ((event.clientY - rect.top) / rect.height) * sourceCanvas.height;
    state.focusX = clamp(x, 0, sourceCanvas.width);
    state.focusY = clamp(y, 0, sourceCanvas.height);
    render();
  };

  const startAnimation = () => {
    if (state.animationFrame) {
      return;
    }
    const tick = () => {
      if (!state.animate) {
        state.animationFrame = 0;
        render();
        return;
      }
      state.phase += 0.006;
      render();
      state.animationFrame = window.requestAnimationFrame(tick);
    };
    state.animationFrame = window.requestAnimationFrame(tick);
  };

  const setPattern = (pattern) => {
    const preset = patternPresets[pattern];
    if (!preset) {
      return;
    }
    state.pattern = pattern;
    state.segments = preset.segments;
    state.repeatX = preset.repeatX;
    state.repeatY = preset.repeatY;
    state.scale = preset.scale / 100;
    syncControlsFromState();
    render();
  };

  controls.patternButtons.forEach((button) => {
    button.addEventListener("click", () => setPattern(button.dataset.pattern));
  });

  controls.segments.addEventListener("input", () => {
    state.segments = Number(controls.segments.value);
    updateOutputs();
    render();
  });

  controls.rotation.addEventListener("input", () => {
    state.rotation = Number(controls.rotation.value);
    updateOutputs();
    render();
  });

  controls.scale.addEventListener("input", () => {
    state.scale = Number(controls.scale.value) / 100;
    updateOutputs();
    render();
  });

  controls.repeatX.addEventListener("input", () => {
    state.repeatX = Number(controls.repeatX.value);
    updateOutputs();
    render();
  });

  controls.repeatY.addEventListener("input", () => {
    state.repeatY = Number(controls.repeatY.value);
    updateOutputs();
    render();
  });

  controls.mirror.addEventListener("change", () => {
    state.mirror = controls.mirror.checked;
    render();
  });

  controls.animate.addEventListener("change", () => {
    state.animate = controls.animate.checked;
    if (state.animate) {
      startAnimation();
    } else if (state.animationFrame) {
      window.cancelAnimationFrame(state.animationFrame);
      state.animationFrame = 0;
      render();
    }
  });

  controls.randomize.addEventListener("click", () => {
    showBundledSample(state.sampleIndex === 0 ? 1 : 0);
  });

  controls.upload.addEventListener("change", () => {
    const file = controls.upload.files && controls.upload.files[0];
    if (!file) {
      return;
    }
    const image = new Image();
    const objectUrl = URL.createObjectURL(file);
    state.sampleIndex = -1;
    state.sourceRevision += 1;
    const requestRevision = state.sourceRevision;
    image.onload = () => {
      if (requestRevision !== state.sourceRevision) {
        URL.revokeObjectURL(objectUrl);
        return;
      }
      drawImageCover(image);
      URL.revokeObjectURL(objectUrl);
      resetFocus();
      render();
    };
    image.src = objectUrl;
  });

  controls.download.addEventListener("click", () => {
    render();
    controls.download.href = resultCanvas.toDataURL("image/png");
  });

  sourceCanvas.addEventListener("pointerdown", (event) => {
    state.dragActive = true;
    sourceCanvas.setPointerCapture(event.pointerId);
    updateFocusFromEvent(event);
  });

  sourceCanvas.addEventListener("pointermove", (event) => {
    if (state.dragActive) {
      updateFocusFromEvent(event);
    }
  });

  sourceCanvas.addEventListener("pointerup", (event) => {
    state.dragActive = false;
    sourceCanvas.releasePointerCapture(event.pointerId);
  });

  sourceCanvas.addEventListener("pointerleave", () => {
    state.dragActive = false;
  });

  window.addEventListener("resize", render, { passive: true });

  drawSyntheticTexture();
  syncControlsFromState();
  render();
};

initKaleidoscopeDemo();
