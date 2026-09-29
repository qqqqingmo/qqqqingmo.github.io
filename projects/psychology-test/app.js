(() => {
  'use strict';
  const content = window.PsychologyQuizContent;
  const engine = window.PsychologyQuizEngine;
  const ui = content.ui;
  const storageKey = 'qqqqingmo:psychology-test:5.1.0';
  const main = document.getElementById('main');
  const profileMap = new Map(content.profiles.map(profile => [profile.id, profile]));
  const escape = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
  const paragraphs = values => values.map(value => `<p>${escape(value)}</p>`).join('');
  const number = value => String(value).padStart(2, '0');
  let answers = {};
  let index = 0;
  let view = 'home';
  let result = null;
  let activeProfile = null;
  let specialCard = null;
  let displayIds = [];
  let storageAvailable = true;
  let exporting = false;
  let toastTimer;

  function notify(message) {
    clearTimeout(toastTimer);
    document.getElementById('status').textContent = message;
    toastTimer = setTimeout(() => { document.getElementById('status').textContent = ''; }, 5000);
  }

  function disableStorage() {
    if (storageAvailable) notify('浏览器暂时无法保存进度，你仍可以在当前页面完成答题。');
    storageAvailable = false;
  }

  function restore() {
    let raw;
    try { raw = localStorage.getItem(storageKey); } catch { disableStorage(); return; }
    if (!raw) return;
    try {
      const saved = JSON.parse(raw);
      if (!saved || saved.version !== content.version || !['home', 'quiz', 'result'].includes(saved.view) ||
          !Number.isInteger(saved.index) || saved.index < 0 || saved.index >= content.questions.length) throw new Error('Invalid saved state');
      const checked = engine.validateAnswers(saved.answers);
      answers = checked.answers;
      index = saved.index;
      view = saved.view === 'result' && checked.missingIds.length ? 'quiz' : saved.view;
    } catch {
      answers = {};
      index = 0;
      view = 'home';
      try { localStorage.removeItem(storageKey); } catch { disableStorage(); }
    }
  }

  function save() {
    if (!storageAvailable) return;
    try { localStorage.setItem(storageKey, JSON.stringify({ version: content.version, answers, index, view })); }
    catch { disableStorage(); }
  }

  function authorSection(withHomepage = false) {
    return `<section class="author-section" id="author" aria-labelledby="author-title">
      <div class="author-heading"><p class="eyebrow">作者的话</p><h2 id="author-title">${escape(ui.aboutHeading)}</h2>${withHomepage ? '<a class="button secondary author-homepage" href="../../" target="_blank" rel="noopener noreferrer">作者个人主页 <span aria-hidden="true">↗</span></a>' : ''}</div>
      <div class="author-content"><p>${escape(content.about[0])}</p>
        <details><summary>读完作者的回答</summary><div class="author-expanded">${paragraphs(content.about.slice(1))}
          <div class="credits"><p>${escape(content.author)} · ${escape(content.assignment)}</p><p>${escape(content.aiNote)}</p></div>
        </div></details>
      </div></section>`;
  }

  function home() {
    const completed = Object.keys(answers).length;
    const title = `<span class="title-line">${escape(content.title.slice(0, 3))}</span><wbr><span class="title-line">${escape(content.title.slice(3, -1))}<span class="punctuation">？</span></span>`;
    main.innerHTML = `<section class="home-hero" aria-labelledby="home-title">
      <div><p class="eyebrow">心理学导论 / 一个关于人的互动测试</p>
        <h1 class="home-title" id="home-title">${title}</h1>
        <p class="subtitle">${escape(content.subtitle)}</p><p class="intro">${escape(content.intro)}</p>
        <div class="start-row"><button class="button" data-action="start">${escape(completed ? ui.continue : ui.start)} <span aria-hidden="true">→</span></button>
          <span class="save-note">${completed ? `已回答 ${completed} / 12 题` : '12 道题 · 五档选择'}</span></div>
      </div>
      <div class="hero-art" aria-hidden="true">
        <svg viewBox="0 0 440 440"><circle class="orbit" cx="220" cy="220" r="154"/><circle class="orbit orbit-two" cx="220" cy="220" r="196"/>
          <path class="orbit" d="M24 220h66m260 0h66M220 24v42m0 308v42"/>
          <text class="human" x="220" y="266" text-anchor="middle">人</text><text class="question-mark" x="280" y="174">?</text>
          <circle cx="220" cy="24" r="5" fill="#006f82"/><circle cx="375" cy="339" r="5" fill="#0e9fb2"/><circle cx="82" cy="81" r="4" fill="#dde6e8"/>
          <text class="tiny" x="220" y="311" text-anchor="middle">行为 · 感受 · 判断</text></svg>
        <span class="floating-note one">${escape(content.scale[4].label)}</span><span class="floating-note two">${escape(content.scale[0].label)}</span>
        <span class="floating-note three">${escape(content.scale[2].label)}</span>
      </div>
    </section>${authorSection()}`;
  }

  function jumpButtons() {
    return content.questions.map((question, position) => {
      const answered = Object.hasOwn(answers, question.id);
      return `<button class="jump${answered ? ' answered' : ''}${position === index ? ' current' : ''}" data-action="jump" data-index="${position}" ${answered || position === index ? '' : 'disabled'}
        aria-label="第${question.number}题：${escape(question.title)}${answered ? '，已回答' : '，未回答'}" ${position === index ? 'aria-current="step"' : ''}>${number(question.number)}</button>`;
    }).join('');
  }

  function quiz() {
    const question = content.questions[index];
    const completed = Object.keys(answers).length;
    const isLast = index === content.questions.length - 1;
    const canNext = Object.hasOwn(answers, question.id) && (!isLast || completed === content.questions.length);
    main.innerHTML = `<section class="quiz-shell" aria-labelledby="statement">
      <div class="progress-top"><p class="eyebrow">关于人的十二个问题</p><p class="progress-count"><strong>${number(index + 1)}</strong> / 12</p></div>
      <div class="progress-track" role="progressbar" aria-label="已回答题数" aria-valuemin="0" aria-valuemax="12" aria-valuenow="${completed}"><span style="width:${completed / 12 * 100}%"></span></div>
      <div class="question-card"><div class="question-meta"><span class="question-number">${number(question.number)}</span><p class="question-title">${escape(question.title)}</p></div>
        ${question.scene ? `<p class="scene">${escape(question.scene)}</p>` : ''}<h1 class="statement" id="statement" tabindex="-1">${escape(question.statement)}</h1>
      </div>
      <fieldset class="answer-field"><legend>${escape(content.instructions)}</legend><div class="answers">
        ${content.scale.map(scale => `<label class="answer"><input type="radio" name="answer" value="${scale.value}" ${answers[question.id] === scale.value ? 'checked' : ''}>
          <span class="answer-face"><span class="answer-dot" aria-hidden="true">${scale.value}</span><span class="answer-text">${escape(scale.label)}</span></span></label>`).join('')}
      </div></fieldset>
      <div class="quiz-nav"><button class="button secondary" data-action="previous" ${index === 0 ? 'disabled' : ''}><span aria-hidden="true">←</span> ${escape(ui.previous)}</button>
        <button class="button" id="next-button" data-action="next" ${canNext ? '' : 'disabled'}>${escape(isLast ? ui.submit : ui.next)} <span aria-hidden="true">→</span></button></div>
      <details class="question-index"><summary>查看 / 修改答案 <span id="completed-count">已回答 ${completed} / 12</span></summary><div class="jump-grid">${jumpButtons()}</div></details>
      <p class="session-note">${escape(storageAvailable ? ui.localSaveNote : '进度仅保留在当前页面。')}</p>
    </section>`;
  }

  function mark(profileId) {
    const position = Math.max(0, content.profiles.findIndex(profile => profile.id === profileId));
    return `<svg class="result-mark" viewBox="0 0 48 48" aria-hidden="true"><g transform="rotate(${position * 22.5} 24 24)" fill="none" stroke="currentColor" stroke-width="1.2">
      <circle cx="24" cy="24" r="18"/><ellipse cx="24" cy="24" rx="8" ry="18"/><ellipse cx="24" cy="24" rx="18" ry="8"/>
      <path d="M7 7l34 34M7 41L41 7"/></g><circle cx="24" cy="24" r="3" fill="currentColor"/></svg>`;
  }

  function nuanceHtml(nuance) {
    return nuance ? `<aside class="nuance"><h3>${escape(nuance.title)}</h3><p>${escape(nuance.text)}</p></aside>` : '';
  }

  function evidenceHtml(evidence) {
    return `<div class="evidence-list">${evidence.map(question => `<article class="evidence"><span class="evidence-num">${number(question.number)}</span><div>
      <h4>${escape(question.title)}</h4>${question.scene ? `<p>${escape(question.scene)}</p>` : ''}<p>${escape(question.statement)}</p><span class="choice-tag">我的回答：${escape(question.label)}</span>
      </div></article>`).join('')}</div>`;
  }

  function researchHtml(questionId) {
    const card = engine.getResearchCard(questionId, answers);
    return `<article class="research-card"><div class="research-head"><span>${number(card.question.number)}</span><h3>${escape(card.concept)}</h3></div>
      <div class="research-body"><p>${escape(card.body)}</p>
        <div class="my-answer"><span class="eyebrow">我的回答 / ${escape(card.label)}</span><p class="research-question">${escape(card.question.statement)}</p><p>${escape(card.summary)}</p></div>
        <details class="references"><summary>参考文献 · ${card.references.length}</summary><ol>${card.references.map(reference => `<li><a href="${escape(reference.url)}" target="_blank" rel="noopener noreferrer">${escape(reference.citation)}</a></li>`).join('')}</ol></details>
      </div></article>`;
  }

  function researchSection(card) {
    const selected = card ? (card.researchQuestionIds || card.evidence.map(question => question.id)) : content.questions.slice(0, 3).map(question => question.id);
    const other = content.questions.filter(question => !selected.includes(question.id));
    return `<section class="research-section" aria-labelledby="research-title"><div class="research-heading-row"><p class="eyebrow">从生活里的说法，到可以研究的问题</p>
      <h2 class="section-heading" id="research-title">${escape(ui.researchHeading)}</h2></div>
      ${selected.map(researchHtml).join('')}<details class="other-research"><summary>${escape(ui.otherResearchHeading)} <span>${other.length} 个问题</span></summary>${other.map(question => researchHtml(question.id)).join('')}</details>
    </section>`;
  }

  function shownCard() {
    if (specialCard && activeProfile === specialCard.id) return specialCard;
    if (activeProfile) return engine.getProfileCard(result, activeProfile);
    return { name: result.fallback.title, tagline: result.fallback.tagline, paragraphs: result.fallback.paragraphs };
  }

  function results() {
    const checked = engine.validateAnswers(answers);
    if (checked.missingIds.length) { view = 'quiz'; index = content.questions.findIndex(question => question.id === checked.missingIds[0]); quiz(); return; }
    result = engine.classify(answers);
    specialCard = engine.getExtremeCard(answers);
    displayIds = [...(specialCard ? [specialCard.id] : []), ...result.primaryIds];
    if (!displayIds.includes(activeProfile)) activeProfile = displayIds[0] || null;
    const shown = shownCard();
    const card = activeProfile ? shown : null;
    const specialSelected = !!shown.isExtreme;
    const tied = result.status === 'tied';
    const hasTabs = displayIds.length > 1;
    const label = id => specialCard?.id === id ? specialCard.name : profileMap.get(id).name;
    main.innerHTML = `<section class="result-shell"><div class="result-topline"><p class="eyebrow">12 / 12 · ${escape(specialSelected ? '特殊结果' : tied ? '并列结果' : '回答已完成')}</p>
      <button class="button text" data-action="edit">修改答案 <span aria-hidden="true">↗</span></button></div>
      ${hasTabs ? `<h2 class="tie-heading">${escape(specialCard ? '也看看具体问题里的几种看法' : ui.tieHeading)}</h2><div class="profile-tabs" role="tablist" aria-label="${specialCard ? '特殊解读与具体看法' : '同级并列结果'}">${displayIds.map(id => `<button class="profile-tab" role="tab" id="tab-${id}" aria-controls="profile-panel" aria-selected="${id === activeProfile}" tabindex="${id === activeProfile ? '0' : '-1'}" data-action="profile" data-profile="${id}">${escape(label(id))}</button>`).join('')}</div>` : ''}
      <article class="result-card" id="profile-panel" ${hasTabs ? `role="tabpanel" aria-labelledby="tab-${activeProfile}"` : 'aria-labelledby="result-name"'}>
        ${card ? mark(activeProfile) : ''}<p class="result-heading">${escape(ui.resultHeading)}${specialSelected ? ' · 特殊结果' : tied ? ' · 并列结果' : ''}</p>
        <h1 class="result-name" id="result-name" tabindex="-1">${escape(shown.name)}</h1><p class="tagline">${escape(shown.tagline)}</p>
        <div class="result-prose">${paragraphs(shown.paragraphs)}</div>${nuanceHtml(shown.nuance)}<p class="result-signature">${escape(content.author)} · ${escape(content.assignment)}</p>
      </article>
      <div class="export-row">
        <button class="button" data-action="export">${escape(ui.exportImage)} <span aria-hidden="true">↓</span></button>
        <button class="button secondary" data-action="restart">${escape(ui.restart)} <span aria-hidden="true">↻</span></button>
      </div>
      ${card ? `<details class="basis"><summary>${escape(ui.basisHeading)}</summary>${specialSelected ? `<p class="extreme-basis">${escape(shown.basis)}</p>` : ''}${evidenceHtml(card.evidence)}</details>` : ''}
      ${result.secondaryIds.length ? `<section class="secondary-results"><h2>${escape(ui.secondaryHeading)}</h2>${result.secondaryIds.map(id => {
        const secondary = engine.getProfileCard(result, id);
        return `<details><summary>${escape(secondary.name)}</summary><div class="secondary-body"><p class="tagline">${escape(secondary.tagline)}</p>${paragraphs(secondary.paragraphs)}${nuanceHtml(secondary.nuance)}${evidenceHtml(secondary.evidence)}</div></details>`;
      }).join('')}</section>` : ''}
      ${researchSection(card)}</section>${authorSection(true)}`;
  }

  function render(focus = false) {
    if (view === 'quiz') quiz();
    else if (view === 'result') results();
    else home();
    save();
    if (focus) {
      window.scrollTo({ top: 0, behavior: 'instant' });
      (document.getElementById('statement') || document.getElementById('result-name') || main).focus({ preventScroll: true });
    }
  }

  // Lay out the export with real font measurements. All content stays on this device.
  async function exportImage() {
    if (exporting || !result) return;
    const currentCard = shownCard();
    const currentResult = result;
    const tied = currentResult.status === 'tied' && !currentCard.isExtreme;
    exporting = true;
    const exportButton = main.querySelector('[data-action="export"]');
    exportButton.disabled = true;
    exportButton.textContent = '正在生成…';
    try {
      await document.fonts.ready;
      const cards = [currentCard];
      const canvas = document.createElement('canvas');
      canvas.width = 1080;
      const ctx = canvas.getContext('2d');
      if (!ctx) throw new Error('Canvas is unavailable');
      const commands = [];
      let y = 78;
      const segmenter = typeof Intl.Segmenter === 'function' ? new Intl.Segmenter('zh', { granularity: 'grapheme' }) : null;
      function textBlock(text, size, lineHeight, color = '#1e293b', serif = false, weight = 400) {
        const family = serif ? '"Songti SC", "Noto Serif CJK SC", SimSun, serif' : '"PingFang SC", "Microsoft YaHei", sans-serif';
        const font = `${weight} ${size}px ${family}`;
        ctx.font = font;
        const pieces = segmenter ? [...segmenter.segment(text)].map(item => item.segment) : Array.from(text);
        const lines = [];
        let line = '';
        for (const piece of pieces) {
          if (ctx.measureText(line + piece).width > 888 && line && !/^[，。！？；：、）》”’]$/.test(piece)) { lines.push(line); line = piece; }
          else line += piece;
        }
        if (line) lines.push(line);
        for (const value of lines) { commands.push({ type: 'text', value, font, color, y }); y += lineHeight; }
      }
      function divider() { commands.push({ type: 'line', y }); y += 42; }
      textBlock(content.title, 28, 44, '#006f82', false, 500);
      textBlock(content.subtitle, 22, 38, '#64748b');
      y += 30;
      divider();
      if (tied) {
        textBlock(ui.tieHeading, 26, 44, '#006f82');
        textBlock('并列结果：' + currentResult.primaryIds.map(id => profileMap.get(id).name).join(' / '), 22, 38, '#64748b');
        y += 26;
      }
      for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        if (i) { y += 20; divider(); }
        textBlock(ui.resultHeading + (card.isExtreme ? ' · 特殊结果' : tied ? ' · 并列结果' : ''), 24, 44, '#006f82');
        textBlock(card.name, 68, 98, '#1e293b', true, 600);
        y += 12;
        textBlock(card.tagline, 32, 54, '#006f82', false, 500);
        y += 22;
        for (const paragraph of card.paragraphs) { textBlock(paragraph, 28, 51); y += 18; }
        if (card.nuance) { y += 12; textBlock(card.nuance.title, 25, 45, '#006f82', false, 500); textBlock(card.nuance.text, 25, 46); y += 12; }
      }
      y += 28;
      divider();
      textBlock(content.author + ' · ' + content.assignment, 22, 39, '#64748b');
      textBlock(ui.footer, 20, 36, '#64748b');
      canvas.height = Math.ceil(y + 55);
      ctx.fillStyle = '#fefffe';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#006f82';
      ctx.fillRect(0, 0, canvas.width, 9);
      ctx.textBaseline = 'top';
      for (const command of commands) {
        if (command.type === 'line') { ctx.strokeStyle = '#cbdde0'; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(96, command.y); ctx.lineTo(984, command.y); ctx.stroke(); }
        else { ctx.fillStyle = command.color; ctx.font = command.font; ctx.fillText(command.value, 96, command.y); }
      }
      const blob = await new Promise((resolve, reject) => canvas.toBlob(value => value ? resolve(value) : reject(new Error('Image encoding failed')), 'image/png'));
      const url = URL.createObjectURL(blob);
      const anchor = document.createElement('a');
      anchor.href = url;
      anchor.download = `心理学-${currentCard.name}.png`;
      document.body.append(anchor);
      anchor.click();
      anchor.remove();
      setTimeout(() => URL.revokeObjectURL(url), 60000);
      notify('结果图已生成，请查看浏览器下载。');
    } catch { notify('结果图未能保存，请重试。'); }
    finally { exporting = false; if (exportButton.isConnected) { exportButton.disabled = false; exportButton.textContent = ui.exportImage + ' ↓'; } }
  }

  main.addEventListener('change', event => {
    if (!event.target.matches('input[name="answer"]') || view !== 'quiz') return;
    const value = Number(event.target.value);
    if (!Number.isInteger(value) || value < 1 || value > 5) return;
    answers[content.questions[index].id] = value;
    result = null;
    activeProfile = null;
    specialCard = null;
    displayIds = [];
    save();
    const completed = Object.keys(answers).length;
    const progress = main.querySelector('[role="progressbar"]');
    progress.setAttribute('aria-valuenow', completed);
    progress.firstElementChild.style.width = completed / 12 * 100 + '%';
    document.getElementById('next-button').disabled = index === content.questions.length - 1 && completed !== content.questions.length;
    document.getElementById('completed-count').textContent = `已回答 ${completed} / 12`;
    main.querySelector('.jump-grid').innerHTML = jumpButtons();
    if (!storageAvailable) main.querySelector('.session-note').textContent = '进度仅保留在当前页面。';
  });

  main.addEventListener('click', event => {
    const button = event.target.closest('button[data-action]');
    if (!button || button.disabled) return;
    switch (button.dataset.action) {
      case 'start': {
        view = 'quiz';
        const missing = content.questions.findIndex(question => !Object.hasOwn(answers, question.id));
        if (missing >= 0 && !Object.hasOwn(answers, content.questions[index].id)) index = missing;
        render(true); break;
      }
      case 'previous': if (index > 0) { index--; render(true); } break;
      case 'next':
        if (!Object.hasOwn(answers, content.questions[index].id)) return;
        if (index < content.questions.length - 1) index++;
        else if (!engine.validateAnswers(answers).missingIds.length) view = 'result';
        render(true); break;
      case 'jump': index = Number(button.dataset.index); render(true); break;
      case 'edit': view = 'quiz'; render(true); main.querySelector('.question-index').open = true; break;
      case 'profile': activeProfile = button.dataset.profile; render(); document.getElementById('tab-' + activeProfile).focus({ preventScroll: true }); break;
      case 'restart': answers = {}; index = 0; result = null; activeProfile = null; specialCard = null; displayIds = []; view = 'quiz'; render(true); break;
      case 'export': exportImage(); break;
    }
  });

  main.addEventListener('keydown', event => {
    if (!event.target.matches('[role="tab"]') || !['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const position = displayIds.indexOf(event.target.dataset.profile);
    const next = event.key === 'Home' ? 0 : event.key === 'End' ? displayIds.length - 1 : (position + (event.key === 'ArrowRight' ? 1 : -1) + displayIds.length) % displayIds.length;
    activeProfile = displayIds[next];
    render();
    document.getElementById('tab-' + activeProfile).focus({ preventScroll: true });
  });
  function returnHome(event) { event.preventDefault(); view = 'home'; render(true); }
  document.getElementById('home-button').addEventListener('click', returnHome);
  document.getElementById('return-home-link').addEventListener('click', returnHome);
  document.getElementById('about-link').addEventListener('click', event => {
    event.preventDefault();
    if (view === 'quiz') { view = 'home'; render(); }
    const author = document.getElementById('author');
    author.querySelector('details').open = true;
    author.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  });
  document.getElementById('footer-copy').textContent = ui.footer;
  document.getElementById('footer-author').textContent = content.author + ' · ' + content.assignment;
  restore();
  render();
})();
