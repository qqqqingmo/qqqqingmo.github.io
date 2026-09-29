/* Deterministic presentation rules shared by browser and Node tests. */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory(require('./quiz-content.js'));
  else root.PsychologyQuizEngine = factory(root.PsychologyQuizContent);
})(typeof globalThis !== 'undefined' ? globalThis : this, function (content) {
  'use strict';
  if (!content) throw new Error('Load quiz-content.js before quiz-engine.js.');
  const own = (obj, key) => Object.prototype.hasOwnProperty.call(obj, key);
  const questionIds = content.questions.map(q => q.id);
  const questionMap = new Map(content.questions.map(q => [q.id, q]));
  const profileMap = new Map(content.profiles.map(p => [p.id, p]));
  const sign = value => Math.sign(value - 3);
  const copy = value => JSON.parse(JSON.stringify(value));
  const labels = new Map(content.scale.map(item => [item.value, item.label]));

  function validateAnswers(input) {
    if (!input || typeof input !== 'object' || Array.isArray(input)) throw new TypeError('Answers must be a plain questionId → integer object.');
    const answers = {};
    for (const key of Object.keys(input)) {
      if (!questionMap.has(key)) throw new RangeError('Unknown question: ' + key);
      const value = input[key];
      if (!Number.isInteger(value) || value < 1 || value > 5) throw new RangeError('Invalid answer at ' + key);
      answers[key] = value;
    }
    return { answers, missingIds: questionIds.filter(id => !own(answers, id)) };
  }

  function checkContent() {
    if (new Set(questionIds).size !== 12 || questionIds.length !== 12) throw new Error('Expected 12 unique questions.');
    if (content.profiles.length !== 8 || profileMap.size !== 8) throw new Error('Expected 8 unique profiles.');
    for (const p of content.profiles) {
      const ids = Object.keys(p.targets);
      if (ids.length !== 3 || ids.some(id => !questionMap.has(id))) throw new Error('Invalid target set: ' + p.id);
      if (ids.some(id => ![-1, 1].includes(p.targets[id]))) throw new Error('Invalid target direction.');
      if (p.requiredIds.some(id => !ids.includes(id))) throw new Error('Invalid anchor.');
      for (const [key, v] of Object.entries(p.variants)) {
        if (key !== [...v.evidenceIds].sort().join('+')) throw new Error('Variant key mismatch.');
        if (v.evidenceIds.length < 2 || v.evidenceIds.some(id => !ids.includes(id))) throw new Error('Invalid variant evidence.');
        if (!p.requiredIds.every(id => v.evidenceIds.includes(id))) throw new Error('Variant without required anchor.');
        if (!v.tagline || v.paragraphs.length < 1) throw new Error('Empty copy.');
      }
    }
    const refIds = new Set(content.references.map(r => r.id));
    if (content.knowledge.length !== 12) throw new Error('Expected 12 research cards.');
    for (const k of content.knowledge) {
      if (!questionMap.has(k.questionId) || k.referenceIds.some(id => !refIds.has(id))) throw new Error('Broken research reference.');
    }
    const extremes = content.extremeResults || [];
    if (new Set(extremes.map(card => card.id)).size !== extremes.length) throw new Error('Duplicate extreme result.');
    for (const card of extremes) {
      if (![1, 5].includes(card.value) || !card.name || !card.tagline || !card.paragraphs.length ||
          card.researchQuestionIds.length < 2 || card.researchQuestionIds.length > 3 ||
          card.researchQuestionIds.some(id => !questionMap.has(id))) throw new Error('Invalid extreme result.');
    }
    return true;
  }
  checkContent();

  // Ranking uses three explicit priorities, never an arbitrary per-profile bonus:
  // more supporting topics; fewer opposed topics; stronger directional agreement.
  function compareRank(a, b) {
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return a[i] > b[i] ? -1 : 1;
    }
    return 0;
  }
  function evaluateProfile(p, answers) {
    const ids = Object.keys(p.targets);
    const supportIds = ids.filter(id => sign(answers[id]) === p.targets[id]).sort();
    if (supportIds.length < 2 || !p.requiredIds.every(id => supportIds.includes(id))) return null;
    const oppositeIds = ids.filter(id => sign(answers[id]) === -p.targets[id]).sort();
    const neutralIds = ids.filter(id => answers[id] === 3).sort();
    const variantId = supportIds.join('+');
    if (!own(p.variants, variantId)) throw new Error('Missing supported variant: ' + p.id + '/' + variantId);
    const agreement = ids.reduce((sum, id) => sum + p.targets[id] * (answers[id] - 3), 0);
    return { profileId: p.id, variantId, supportIds, oppositeIds, neutralIds,
      rank: [supportIds.length, -oppositeIds.length, agreement] };
  }

  function classify(input) {
    const { answers, missingIds } = validateAnswers(input);
    if (missingIds.length) return { status: 'incomplete', missingIds, primaryIds: [], secondaryIds: [], candidates: [] };
    const candidates = content.profiles.map(p => evaluateProfile(p, answers)).filter(Boolean);
    candidates.sort((a, b) => compareRank(a.rank, b.rank) || a.profileId.localeCompare(b.profileId));
    if (!candidates.length) {
      const state = questionIds.every(id => answers[id] === 3) ? 'neutral' : 'unmatched';
      return { status: state, answers, primaryIds: [], secondaryIds: [], candidates: [], fallback: copy(content.fallbacks[state]) };
    }
    const best = candidates[0].rank;
    const primaryIds = candidates.filter(c => compareRank(c.rank, best) === 0).map(c => c.profileId);
    let secondaryIds = [];
    if (primaryIds.length === 1 && candidates.length > 1) {
      const second = candidates[1].rank;
      if (second[0] === best[0] && second[1] === best[1] && best[2] - second[2] === 1) {
        secondaryIds = candidates.filter(c => compareRank(c.rank, second) === 0).map(c => c.profileId);
      }
    }
    return { status: primaryIds.length > 1 ? 'tied' : 'matched', answers, primaryIds, secondaryIds, candidates };
  }

  function getProfileCard(result, profileId) {
    if (!result || !['matched', 'tied'].includes(result.status)) throw new Error('A classified result is required.');
    if (![...result.primaryIds, ...result.secondaryIds].includes(profileId)) throw new Error('This profile was not selected by the ranking.');
    const candidate = result.candidates.find(c => c.profileId === profileId);
    const p = profileMap.get(profileId);
    const v = p.variants[candidate.variantId];
    const matches = content.nuances.filter(n => n.profileId === profileId &&
      Object.entries(n.requires).every(([id, dir]) => sign(result.answers[id]) === dir));
    const nuance = matches.length ? copy(matches[0]) : null;
    const evidence = candidate.supportIds.map(id => ({...copy(questionMap.get(id)), value: result.answers[id], label: labels.get(result.answers[id])}));
    const knowledgeIds = content.knowledge.filter(k => candidate.supportIds.includes(k.questionId)).map(k => k.id);
    return { profileId, name: p.name, variantId: candidate.variantId, tagline: v.tagline,
      paragraphs: [...v.paragraphs], nuance, evidence, knowledgeIds,
      tiedWithIds: result.primaryIds.filter(id => id !== profileId),
      isSecondary: result.secondaryIds.includes(profileId) };
  }

  function getResearchCard(questionId, answers) {
    const checked = validateAnswers(answers).answers;
    const item = content.knowledge.find(k => k.questionId === questionId);
    if (!item) throw new RangeError('Unknown research question.');
    const q = questionMap.get(questionId);
    const value = checked[questionId];
    const direction = value === undefined ? null : sign(value);
    const summary = direction === null ? '' : item.answerSummary[direction === 0 ? 'neutral' : direction > 0 ? 'positive' : 'negative'];
    return {...copy(item), question: copy(q), value, label: labels.get(value) || '', summary,
      references: item.referenceIds.map(id => copy(content.references.find(r => r.id === id)))};
  }

  // This extra reading comes first for exact all-1/all-5 answers. The eight
  // topic-based profiles retain their original ranking and tied results.
  function getExtremeCard(input) {
    const { answers, missingIds } = validateAnswers(input);
    if (missingIds.length) return null;
    const card = (content.extremeResults || []).find(item => questionIds.every(id => answers[id] === item.value));
    if (!card) return null;
    return { ...copy(card), isExtreme: true, nuance: null,
      evidence: questionIds.map(id => ({...copy(questionMap.get(id)), value: answers[id], label: labels.get(answers[id])})) };
  }
  return Object.freeze({version: content.version, validateAnswers, checkContent, classify, getProfileCard, getResearchCard, getExtremeCard});
});
