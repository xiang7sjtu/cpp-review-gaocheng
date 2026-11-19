(function () {
  "use strict";

  const STORAGE_KEY = "cpp-review-desk-state-v1";
  const LEVELS = {
    0: { label: "完全掌握", className: "mastered", dueMinutes: null },
    1: { label: "有点模糊", className: "fuzzy", dueMinutes: 10 },
    2: { label: "还不明白", className: "unknown", dueMinutes: 2 }
  };
  const FILTERS = ["review", "all", "mastered"];
  const REMOTE_CONSENT_KEY = "cpp-review-judge0-consent-v1";
  const JUDGE0_ENDPOINT =
    "https://ce.judge0.com/submissions?base64_encoded=false&wait=true";
  const JUDGE0_CPP_LANGUAGE_ID = 105;

  const data = window.COURSE_DATA;
  if (!data || !Array.isArray(data.cards)) {
    document.body.innerHTML =
      '<main style="padding:40px;font-family:sans-serif"><h1>课件数据未加载</h1><p>请确认 data.js 与 index.html 位于同一目录。</p></main>';
    return;
  }

  const elements = {
    appTitle: document.getElementById("appTitle"),
    appSubtitle: document.getElementById("appSubtitle"),
    sourceNote: document.getElementById("sourceNote"),
    lessonNav: document.getElementById("lessonNav"),
    cardList: document.getElementById("cardList"),
    emptyState: document.getElementById("emptyState"),
    resultSummary: document.getElementById("resultSummary"),
    searchInput: document.getElementById("searchInput"),
    masteredRatio: document.getElementById("masteredRatio"),
    progressBar: document.getElementById("progressBar"),
    progressFill: document.getElementById("progressFill"),
    reviewQueueCount: document.getElementById("reviewQueueCount"),
    todayReviewCount: document.getElementById("todayReviewCount"),
    accuracyCount: document.getElementById("accuracyCount"),
    reviewFilterCount: document.getElementById("reviewFilterCount"),
    allFilterCount: document.getElementById("allFilterCount"),
    masteredFilterCount: document.getElementById("masteredFilterCount"),
    heroSuggestion: document.getElementById("heroSuggestion"),
    startReviewButton: document.getElementById("startReviewButton"),
    resetButton: document.getElementById("resetButton"),
    openDashboardButton: document.getElementById("openDashboardButton"),
    dashboardDialog: document.getElementById("dashboardDialog"),
    dashboardContent: document.getElementById("dashboardContent"),
    showAllButton: document.getElementById("showAllButton"),
    toastRegion: document.getElementById("toastRegion"),
    footerVersion: document.getElementById("footerVersion"),
    judgeModeBadge: document.getElementById("judgeModeBadge"),
    judgeBlockLabel: document.getElementById("judgeBlockLabel"),
    remoteJudgeButton: document.getElementById("remoteJudgeButton")
  };

  let state = loadState();
  let currentFilter = "review";
  let searchTerm = "";
  let lastFocusedCardId = null;
  let exactJudgeAvailable = false;

  function todayKey(date = new Date()) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  function defaultState() {
    return {
      version: data.meta.version || 1,
      cards: {},
      exercises: {},
      daily: {},
      lastOpenedAt: new Date().toISOString()
    };
  }

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return defaultState();
      const parsed = JSON.parse(raw);
      return {
        ...defaultState(),
        ...parsed,
        cards: parsed.cards && typeof parsed.cards === "object" ? parsed.cards : {},
        exercises:
          parsed.exercises && typeof parsed.exercises === "object"
            ? parsed.exercises
            : {},
        daily: parsed.daily && typeof parsed.daily === "object" ? parsed.daily : {}
      };
    } catch (error) {
      console.warn("无法读取学习进度，已使用初始状态。", error);
      return defaultState();
    }
  }

  function saveState() {
    state.lastOpenedAt = new Date().toISOString();
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (error) {
      console.warn("无法保存学习进度。", error);
      showToast("浏览器未能保存进度，请检查隐私模式或存储权限。");
    }
  }

  function getCardState(cardId) {
    if (!state.cards[cardId]) {
      state.cards[cardId] = {
        level: null,
        attempts: 0,
        correct: 0,
        wrong: 0,
        correctStreak: 0,
        lastReviewedAt: null,
        dueAt: null,
        masteredAt: null,
        collapsed: false,
        draft: "",
        stdin: null
      };
    }
    return state.cards[cardId];
  }

  function ensureDaily() {
    const key = todayKey();
    if (!state.daily[key]) {
      state.daily[key] = { reviewed: [], practiceCorrect: 0, practiceWrong: 0 };
    }
    return state.daily[key];
  }

  function lessonById(lessonId) {
    return data.lessons.find((lesson) => lesson.id === lessonId);
  }

  function cardNumber(cardId) {
    const index = data.cards.findIndex((card) => card.id === cardId);
    return String(index + 1).padStart(2, "0");
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function normalizeCode(code) {
    return code
      .replace(/\/\*[\s\S]*?\*\//g, " ")
      .replace(/\/\/[^\n\r]*/g, " ")
      .replace(/\r/g, "")
      .replace(/[ \t]+/g, " ")
      .replace(/\n+/g, " ")
      .trim();
  }

  function testPattern(code, pattern, flags = "i") {
    try {
      return new RegExp(pattern, flags).test(code);
    } catch (error) {
      console.error("无效判题正则：", pattern, error);
      return false;
    }
  }

  function checkExercise(card, answer) {
    const exercise = card.exercise;
    const normalized = normalizeCode(answer);
    const checks = exercise.checks.map((check) => ({
      label: check.label,
      passed: testPattern(normalized, check.pattern, check.flags || "i")
    }));
    const passedCount = checks.filter((check) => check.passed).length;
    const missing = checks.filter((check) => !check.passed).map((check) => check.label);
    const braceBalance = countChar(normalized, "{") - countChar(normalized, "}");
    const parenthesisBalance =
      countChar(normalized, "(") - countChar(normalized, ")");
    const syntaxWarnings = [];

    if (braceBalance !== 0) syntaxWarnings.push("花括号可能没有配对。");
    if (parenthesisBalance !== 0) syntaxWarnings.push("圆括号可能没有配对。");
    if (normalized.length === 0) syntaxWarnings.push("答案为空。");

    return {
      correct: passedCount === checks.length && syntaxWarnings.length === 0,
      partial: passedCount > 0 && passedCount < checks.length,
      checks,
      missing,
      syntaxWarnings,
      passedCount,
      total: checks.length
    };
  }

  function countChar(text, char) {
    return [...text].filter((item) => item === char).length;
  }

  async function fetchWithTimeout(url, options = {}, timeoutMs = 22000) {
    const controller = new AbortController();
    const timer = window.setTimeout(() => controller.abort(), timeoutMs);
    try {
      return await fetch(url, { ...options, signal: controller.signal });
    } finally {
      window.clearTimeout(timer);
    }
  }

  function loadRemoteJudgeConsent() {
    try {
      return localStorage.getItem(REMOTE_CONSENT_KEY) === "true";
    } catch (error) {
      return false;
    }
  }

  function saveRemoteJudgeConsent(enabled) {
    try {
      if (enabled) {
        localStorage.setItem(REMOTE_CONSENT_KEY, "true");
      } else {
        localStorage.removeItem(REMOTE_CONSENT_KEY);
      }
    } catch (error) {
      console.warn("无法保存联网编译设置。", error);
    }
  }

  function updateJudgeModeDisplay() {
    if (!elements.judgeModeBadge) return;
    if (exactJudgeAvailable) {
      elements.judgeModeBadge.dataset.mode = "online";
      elements.judgeModeBadge.textContent = "联网编译 · Judge0";
      elements.judgeModeBadge.title =
        "代码和测试输入会发送至第三方 ce.judge0.com。关闭联网编译后不再发送。";
      if (elements.judgeBlockLabel) elements.judgeBlockLabel.textContent = "联网编译";
      if (elements.remoteJudgeButton) {
        elements.remoteJudgeButton.textContent = "关闭联网编译";
        elements.remoteJudgeButton.dataset.enabled = "true";
      }
    } else {
      elements.judgeModeBadge.dataset.mode = "offline";
      elements.judgeModeBadge.textContent = "共享版 · 结构判题";
      elements.judgeModeBadge.title =
        "默认不向第三方发送代码；只检查关键结构，也可复制代码到本地编译器。";
      if (elements.judgeBlockLabel) elements.judgeBlockLabel.textContent = "结构检查";
      if (elements.remoteJudgeButton) {
        elements.remoteJudgeButton.textContent = "开启联网编译";
        elements.remoteJudgeButton.dataset.enabled = "false";
      }
    }
  }

  function setRemoteJudgeEnabled(enabled) {
    exactJudgeAvailable = Boolean(enabled);
    saveRemoteJudgeConsent(exactJudgeAvailable);
    updateJudgeModeDisplay();
    renderCards();
    showToast(
      exactJudgeAvailable
        ? "联网编译已开启。点击“检查答案”时，代码和测试输入会发送给 ce.judge0.com。"
        : "联网编译已关闭，已恢复为仅在本机浏览器内进行结构检查。"
    );
  }

  async function detectExactJudge() {
    exactJudgeAvailable = loadRemoteJudgeConsent();
    updateJudgeModeDisplay();
    return exactJudgeAvailable;
  }

  function normalizeOutput(value) {
    const lines = String(value ?? "")
      .replace(/\r\n/g, "\n")
      .replace(/\r/g, "\n")
      .split("\n")
      .map((line) => line.trimEnd());
    while (lines.length && lines[lines.length - 1] === "") lines.pop();
    return lines.join("\n");
  }

  function makeOutputDiff(expected, actual) {
    const expectedLines = normalizeOutput(expected).split("\n");
    const actualLines = normalizeOutput(actual).split("\n");
    const max = Math.max(expectedLines.length, actualLines.length);
    const rows = [];
    for (let index = 0; index < max; index += 1) {
      const left = expectedLines[index] ?? "";
      const right = actualLines[index] ?? "";
      if (left !== right) {
        rows.push(`第 ${index + 1} 行：期望 ${JSON.stringify(left)}，实际 ${JSON.stringify(right)}`);
      }
      if (rows.length >= 8) {
        rows.push("...");
        break;
      }
    }
    return rows.join("\n") || "输出不一致。";
  }

  async function runJudge0(source, stdinText) {
    let response;
    try {
      response = await fetchWithTimeout(
        JUDGE0_ENDPOINT,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            source_code: source,
            language_id: JUDGE0_CPP_LANGUAGE_ID,
            stdin: stdinText,
            cpu_time_limit: 3,
            wall_time_limit: 6,
            memory_limit: 131072
          })
        },
        18000
      );
    } catch (error) {
      return {
        serviceError:
          error?.name === "AbortError"
            ? "联网编译请求超过 18 秒，已中止等待。"
            : "无法连接 ce.judge0.com。请检查网络，或关闭联网编译后继续使用结构检查。"
      };
    }

    let payload;
    try {
      payload = await response.json();
    } catch (error) {
      return {
        serviceError: "ce.judge0.com 返回了无法解析的结果。"
      };
    }

    if (!response.ok) {
      return {
        serviceError:
          payload?.message ||
          payload?.error ||
          `联网编译服务返回 HTTP ${response.status}。`
      };
    }

    const status = String(payload.status?.description ?? "");
    const compiled = Boolean(status) && status !== "Compilation Error";
    const runOk = status === "Accepted";
    return {
      compiled,
      runOk,
      timedOut: status === "Time Limit Exceeded",
      compileOutput: String(payload.compile_output || "").trim(),
      stdout: payload.stdout || "",
      stderr: payload.stderr || "",
      message: status
    };
  }

  function compilerFailure(serviceError, missing = [serviceError]) {
    return {
      mode: "compiler",
      correct: false,
      partial: false,
      checks: [],
      missing,
      syntaxWarnings: [],
      passedCount: 0,
      total: 1,
      serviceError
    };
  }

  async function checkExactExercise(card, answer, stdinText = "") {
    const exercise = card.exercise;
    const userResult = await runJudge0(answer, stdinText);
    if (userResult.serviceError) {
      return compilerFailure(userResult.serviceError);
    }

    let expectedOutput =
      typeof exercise.expectedOutput === "string" ? exercise.expectedOutput : null;
    let expectedSource = expectedOutput == null ? null : "configured";
    let referenceError = "";

    if (expectedOutput == null && typeof exercise.solution === "string") {
      const referenceResult = await runJudge0(exercise.solution, stdinText);
      if (
        !referenceResult.serviceError &&
        referenceResult.compiled &&
        referenceResult.runOk
      ) {
        expectedOutput = referenceResult.stdout;
        expectedSource = "reference";
      } else {
        referenceError =
          referenceResult.serviceError ||
          "参考解未能编译或运行，无法自动生成期望输出。";
      }
    }

    const checks = [
      { label: "g++ 编译通过", passed: Boolean(userResult.compiled) }
    ];
    if (userResult.compiled) {
      checks.push({ label: "程序正常结束", passed: Boolean(userResult.runOk) });
      if (expectedOutput != null && userResult.runOk) {
        checks.push({
          label:
            expectedSource === "reference"
              ? "标准输出与参考解一致"
              : "标准输出与期望一致",
          passed:
            normalizeOutput(userResult.stdout) === normalizeOutput(expectedOutput)
        });
      }
    }

    const missing = checks.filter((check) => !check.passed).map((check) => check.label);
    const syntaxWarnings = [];
    if (userResult.timedOut) syntaxWarnings.push("程序运行超过 3 秒，已终止。");
    if (userResult.stderr) {
      syntaxWarnings.push("程序向 stderr 输出了内容，请检查运行时错误。");
    }

    const outputChecked =
      expectedOutput != null && userResult.runOk && !userResult.timedOut;
    const outputPass = outputChecked
      ? normalizeOutput(userResult.stdout) === normalizeOutput(expectedOutput)
      : null;
    const diff =
      outputChecked && !outputPass
        ? makeOutputDiff(expectedOutput, userResult.stdout)
        : "";
    const correct =
      Boolean(userResult.compiled) &&
      Boolean(userResult.runOk) &&
      (outputPass !== false);

    return {
      mode: "compiler",
      correct,
      partial:
        !correct &&
        Boolean(userResult.compiled) &&
        (outputChecked || Boolean(userResult.stderr)),
      checks,
      missing,
      syntaxWarnings,
      passedCount: checks.filter((check) => check.passed).length,
      total: checks.length,
      compileOutput: userResult.compileOutput || "",
      stdout: userResult.stdout || "",
      stderr: userResult.stderr || "",
      expectedOutput,
      expectedSource,
      referenceError,
      outputChecked,
      outputPass,
      diff,
      timedOut: Boolean(userResult.timedOut),
      outputLimited: false
    };
  }

  function markReviewed(cardId) {
    const daily = ensureDaily();
    if (!daily.reviewed.includes(cardId)) {
      daily.reviewed.push(cardId);
    }
  }

  function setLevel(cardId, level) {
    const cardState = getCardState(cardId);
    cardState.level = level;
    cardState.lastReviewedAt = new Date().toISOString();
    cardState.masteredAt = level === 0 ? new Date().toISOString() : null;
    cardState.collapsed = level === 0;
    const dueMinutes = LEVELS[level].dueMinutes;
    cardState.dueAt =
      dueMinutes == null
        ? null
        : new Date(Date.now() + dueMinutes * 60 * 1000).toISOString();
    markReviewed(cardId);
    saveState();
    render();
    const message =
      level === 0
        ? "已标记为完全掌握，并移出待复习队列。"
        : level === 1
          ? "已标记为有点模糊，约 10 分钟后进入下一轮。"
          : "已标记为还不明白，约 2 分钟后优先复习。";
    showToast(message);
  }

  async function submitExercise(cardId, answer, stdinText = "") {
    const card = data.cards.find((item) => item.id === cardId);
    if (!card) return;
    const cardState = getCardState(cardId);
    const result = exactJudgeAvailable
      ? await checkExactExercise(card, answer, stdinText)
      : checkExercise(card, answer);
    const daily = ensureDaily();

    cardState.attempts += 1;
    cardState.lastReviewedAt = new Date().toISOString();
    cardState.draft = answer;
    cardState.stdin = stdinText;
    markReviewed(cardId);

    if (result.correct) {
      cardState.correct += 1;
      cardState.correctStreak += 1;
      daily.practiceCorrect += 1;
    } else {
      cardState.wrong += 1;
      cardState.correctStreak = 0;
      daily.practiceWrong += 1;
      if (cardState.level !== 0) {
        cardState.level = 2;
        cardState.dueAt = new Date(Date.now() + LEVELS[2].dueMinutes * 60 * 1000).toISOString();
      }
    }

    state.exercises[cardId] = {
      ...result,
      answeredAt: new Date().toISOString()
    };
    saveState();
    renderCards();
    showToast(
      result.correct
        ? result.mode === "compiler"
          ? "编译、运行与输出检查通过。请选择真实的掌握程度。"
          : "结构检查通过。请选择你真实的掌握程度。"
        : result.partial
          ? "还差一些关键结构，请查看反馈后修改。"
          : "答案尚未满足要求，已安排更早复习。"
    );
  }

  function renderCompilerDetails(result) {
    if (result.mode !== "compiler") return "";
    const details = [];
    if (result.serviceError) {
      details.push(`<p><strong>服务错误：</strong>${escapeHtml(result.serviceError)}</p>`);
    }
    if (result.compileOutput) {
      details.push(
        `<details><summary>查看编译输出</summary><pre>${escapeHtml(
          result.compileOutput
        )}</pre></details>`
      );
    }
    if (result.stdout) {
      details.push(
        `<details><summary>查看实际输出</summary><pre>${escapeHtml(
          result.stdout
        )}</pre></details>`
      );
    }
    if (result.stderr) {
      details.push(
        `<details><summary>查看 stderr</summary><pre>${escapeHtml(
          result.stderr
        )}</pre></details>`
      );
    }
    if (result.outputChecked && !result.outputPass) {
      details.push(
        `<details open><summary>期望输出与差异</summary><pre>${escapeHtml(
          result.expectedOutput
        )}\n\n${escapeHtml(result.diff || "输出不一致")}</pre></details>`
      );
    }
    if (result.referenceError) {
      details.push(
        `<p><strong>参考解检查：</strong>${escapeHtml(result.referenceError)}</p>`
      );
    }
    const outputStatus = result.outputChecked
      ? result.outputPass
        ? result.expectedSource === "reference"
          ? "已用同一测试输入运行参考解，标准输出匹配。"
          : "标准输出匹配。"
        : "标准输出不一致。"
      : "未获得可比较的期望输出，已检查编译与运行状态。";
    details.unshift(`<p>${outputStatus}</p>`);
    return `<div class="compiler-details">${details.join("")}</div>`;
  }

  function renderFeedback(cardId, result) {
    const container = document.querySelector(`[data-feedback="${cardId}"]`);
    if (!container) return;
    const card = data.cards.find((item) => item.id === cardId);
    const feedbackClass = result.correct
      ? "success"
      : result.partial
        ? "partial"
        : "error";
    const title = result.correct
      ? "检查通过"
      : result.partial
        ? "部分完成"
        : "需要修正";
    const missingItems = result.missing
      .map((item) => `<li>${escapeHtml(item)}</li>`)
      .join("");
    const syntaxItems = result.syntaxWarnings
      .map((item) => `<li>${escapeHtml(item)}</li>`)
      .join("");

    container.className = `feedback ${feedbackClass}`;
    container.innerHTML = `
      <h4>${title} · ${result.passedCount}/${result.total} 项通过</h4>
      <p>${
        result.correct
          ? result.mode === "compiler"
            ? "联网 g++ 编译运行检查通过。"
            : "代码包含题目要求的主要结构。"
          : "请对照以下未通过项检查代码。"
      }</p>
      ${missingItems ? `<ul>${missingItems}</ul>` : ""}
      ${syntaxItems ? `<ul>${syntaxItems}</ul>` : ""}
      ${renderCompilerDetails(result)}
      ${
        result.correct
          ? ""
          : `<details><summary>查看参考写法与讲解</summary><pre>${escapeHtml(
              card.exercise.solution
            )}</pre><p>${escapeHtml(card.exercise.explanation)}</p></details>`
      }
    `;
  }

  function cardMatchesSearch(card) {
    if (!searchTerm) return true;
    const example = card.example || {};
    const noteText = Array.isArray(example.notes)
      ? example.notes.map((note) => note.text)
      : [];
    const haystack = [
      card.title,
      card.overview,
      ...card.tags,
      ...card.keyPoints,
      ...card.pitfalls,
      card.exercise ? card.exercise.prompt : "",
      example.title || "",
      example.code || "",
      example.explanation || "",
      ...noteText
    ]
      .join(" ")
      .toLocaleLowerCase("zh-CN");
    return haystack.includes(searchTerm);
  }

  function isMastered(cardId) {
    return getCardState(cardId).level === 0;
  }

  function isReviewable(cardId) {
    return !isMastered(cardId);
  }

  function sortCardsForReview(cards) {
    return [...cards].sort((left, right) => {
      const a = getCardState(left.id);
      const b = getCardState(right.id);
      const levelA = a.level == null ? 3 : a.level;
      const levelB = b.level == null ? 3 : b.level;
      const dueA = a.dueAt ? new Date(a.dueAt).getTime() : 0;
      const dueB = b.dueAt ? new Date(b.dueAt).getTime() : 0;
      const indexA = data.cards.findIndex((card) => card.id === left.id);
      const indexB = data.cards.findIndex((card) => card.id === right.id);
      return dueA - dueB || levelB - levelA || indexA - indexB;
    });
  }

  function getFilteredCards() {
    let cards = data.cards.filter(cardMatchesSearch);
    if (currentFilter === "review") {
      cards = sortCardsForReview(cards.filter((card) => isReviewable(card.id)));
    } else if (currentFilter === "mastered") {
      cards = cards.filter((card) => isMastered(card.id));
    }
    return cards;
  }

  function statusPill(cardId) {
    const cardState = getCardState(cardId);
    if (cardState.level == null) {
      return '<span class="status-pill new">未评估</span>';
    }
    const level = LEVELS[cardState.level];
    return `<span class="status-pill ${level.className}">${level.label}</span>`;
  }

  function render() {
    elements.appTitle.textContent = data.meta.title;
    elements.appSubtitle.textContent = data.meta.subtitle;
    elements.sourceNote.textContent = String(data.meta.sourceNote || "").replace(
      /支持本地精确编译判题。?/,
      "共享版默认结构判题，可手动开启 Judge0 联网编译。"
    );
    elements.footerVersion.textContent = `数据版本 ${data.meta.version} · 更新于 ${data.meta.updatedAt}`;
    renderLessonNav();
    renderStats();
    renderCards();
  }

  function renderLessonNav() {
    elements.lessonNav.innerHTML = data.lessons
      .map((lesson) => {
        const lessonCards = data.cards.filter((card) => card.lessonId === lesson.id);
        return `
          <button class="lesson-link" type="button" data-lesson="${escapeHtml(
            lesson.id
          )}" aria-label="查看 ${escapeHtml(lesson.title)}">
            <span class="lesson-number">L${lesson.number}</span>
            <span class="lesson-copy">
              <strong>${escapeHtml(lesson.title)}</strong>
              <small>${escapeHtml(lesson.subtitle)} · ${lessonCards.length} 个知识点</small>
            </span>
          </button>
        `;
      })
      .join("");
  }

  function renderStats() {
    const total = data.cards.length;
    const mastered = data.cards.filter((card) => isMastered(card.id)).length;
    const reviewQueue = data.cards.filter((card) => isReviewable(card.id)).length;
    const ratio = total === 0 ? 0 : Math.round((mastered / total) * 100);
    const daily = ensureDaily();
    const totalAttempts = data.cards.reduce(
      (sum, card) => sum + getCardState(card.id).attempts,
      0
    );
    const totalCorrect = data.cards.reduce(
      (sum, card) => sum + getCardState(card.id).correct,
      0
    );
    const accuracy =
      totalAttempts === 0 ? "--" : `${Math.round((totalCorrect / totalAttempts) * 100)}%`;

    elements.masteredRatio.textContent = `${mastered} / ${total}`;
    elements.progressBar.setAttribute("aria-valuenow", String(ratio));
    elements.progressFill.style.width = `${ratio}%`;
    elements.reviewQueueCount.textContent = String(reviewQueue);
    elements.todayReviewCount.textContent = String(daily.reviewed.length);
    elements.accuracyCount.textContent = accuracy;
    elements.reviewFilterCount.textContent = String(reviewQueue);
    elements.allFilterCount.textContent = String(total);
    elements.masteredFilterCount.textContent = String(mastered);

    const unknownCount = data.cards.filter(
      (card) => getCardState(card.id).level === 2
    ).length;
    const fuzzyCount = data.cards.filter(
      (card) => getCardState(card.id).level === 1
    ).length;
    elements.heroSuggestion.textContent =
      unknownCount > 0
        ? `优先处理 ${unknownCount} 个“还不明白”`
        : fuzzyCount > 0
          ? `巩固 ${fuzzyCount} 个“有点模糊”`
          : reviewQueue > 0
            ? `先评估 ${reviewQueue} 个新知识点`
            : "全部掌握，可以自由回看";
  }

  function renderCards() {
    const cards = getFilteredCards();
    const openIds = new Set(
      [...elements.cardList.querySelectorAll(".knowledge-card.open")].map(
        (card) => card.dataset.cardId
      )
    );

    elements.cardList.innerHTML = cards.map(renderCard).join("");
    elements.emptyState.hidden = cards.length !== 0;
    elements.cardList.hidden = cards.length === 0;

    cards.forEach((card) => {
      const cardElement = document.querySelector(`[data-card-id="${card.id}"]`);
      const cardState = getCardState(card.id);
      if (!cardElement) return;
      const shouldOpen =
        openIds.has(card.id) ||
        (cardState.level !== 0 && !cardState.collapsed && lastFocusedCardId === card.id);
      if (shouldOpen) cardElement.classList.add("open");
      if (lastFocusedCardId === card.id) {
        cardElement.classList.add("focused");
      }
    });

    elements.resultSummary.textContent = buildResultSummary(cards.length);
    document.querySelectorAll("[data-filter]").forEach((button) => {
      button.classList.toggle("active", button.dataset.filter === currentFilter);
    });
  }

  function buildResultSummary(count) {
    if (count === 0) return "";
    if (currentFilter === "review") {
      return `按遗忘风险排序，共 ${count} 张待复习卡片。`;
    }
    if (currentFilter === "mastered") {
      return `已掌握 ${count} 张。仍可展开回看，但不会进入复习队列。`;
    }
    return `共显示 ${count} 张知识点卡片。`;
  }

  function renderAnnotatedCode(code, notes) {
    const keyLines = new Set(notes.map((note) => note.line).filter((line) => line > 0));
    const codeLines = String(code || "").split("\n");
    const codeHtml = codeLines
      .map((line, index) => {
        const lineNo = index + 1;
        const cls = keyLines.has(lineNo) ? "code-line key-line" : "code-line";
        return `<span class="${cls}"><span class="line-no">${lineNo}</span><span class="line-text">${
          escapeHtml(line) || " "
        }</span></span>`;
      })
      .join("");
    const notesHtml = notes.length
      ? `<div class="key-notes">
          <h4>关键行讲解</h4>
          <ol>${notes
            .map(
              (note) =>
                `<li>${
                  note.line > 0 ? `<span class="note-line">第 ${note.line} 行</span>` : ""
                }<span>${escapeHtml(note.text)}</span></li>`
            )
            .join("")}</ol>
        </div>`
      : "";
    return `<div class="code-wrap"><pre class="annotated-code">${codeHtml}</pre></div>${notesHtml}`;
  }

  function renderExampleSection(card) {
    const ex = card.example;
    if (!ex) return "";
    const allNotes = Array.isArray(ex.notes) ? ex.notes : [];
    const sections =
      Array.isArray(ex.sections) && ex.sections.length
        ? ex.sections
        : [{ code: ex.code || "", notes: allNotes }];
    const hasSections = Array.isArray(ex.sections) && ex.sections.length > 0;
    const sectionsHtml = sections
      .map((section, index) => {
        const notes = hasSections
          ? allNotes.filter((note) => (note.section || 0) === index)
          : allNotes;
        return `
          ${
            section.label
              ? `<h4 class="code-section-label">${escapeHtml(section.label)}</h4>`
              : ""
          }
          ${renderAnnotatedCode(section.code, notes)}`;
      })
      .join("");
    const hints = Array.isArray(ex.blankHints) ? ex.blankHints : [];
    const hintsHtml = hints.length
      ? `<div class="blank-hints"><h4>课件填空答案</h4><ul>${hints
          .map((hint) => `<li>${escapeHtml(hint)}</li>`)
          .join("")}</ul></div>`
      : "";
    return `
      <section class="example-block">
        <div class="block-title">
          <h3>${escapeHtml(ex.title)}</h3>
          <span class="source-badge">${escapeHtml(ex.source || "参考示例")}</span>
        </div>
        ${sectionsHtml}
        ${
          ex.output
            ? `<div class="code-wrap"><div class="output-line"><strong>结果</strong><span>${escapeHtml(
                ex.output
              )}</span></div></div>`
            : ""
        }
        <p class="example-explanation">${escapeHtml(ex.explanation)}</p>
        ${hintsHtml}
      </section>`;
  }

  function renderExerciseSection(card, draft, stdinValue, feedback) {
    return `
      <section class="exercise-block">
        <div class="block-title">
          <h3>轮到你来写</h3>
          <span>${exactJudgeAvailable ? "联网编译" : "结构检查"}</span>
        </div>
        <div class="exercise-content">
          <p class="exercise-prompt">${escapeHtml(card.exercise.prompt)}</p>
          ${
            exactJudgeAvailable
              ? `<div class="code-editor-label stdin-label">
                  <span>测试输入（可选）</span>
                  <span>会与参考解使用同一输入比对输出</span>
                </div>
                <textarea
                  class="stdin-editor"
                  data-stdin="${escapeHtml(card.id)}"
                  spellcheck="false"
                  rows="3"
                  aria-label="${escapeHtml(card.title)}测试输入"
                >${escapeHtml(stdinValue)}</textarea>`
              : ""
          }
          <div class="code-editor-label">
            <span>使用 C++ 作答</span>
            <span>Tab 可插入缩进</span>
          </div>
          <textarea
            class="code-editor"
            data-code="${escapeHtml(card.id)}"
            spellcheck="false"
            aria-label="${escapeHtml(card.title)}练习代码"
          >${escapeHtml(draft)}</textarea>
          <div class="exercise-actions">
            <button
              class="primary-button"
              type="button"
              data-action="submit"
              data-card="${escapeHtml(card.id)}"
            >检查答案</button>
            <button
              class="secondary-button"
              type="button"
              data-action="copy-code"
              data-card="${escapeHtml(card.id)}"
            >复制 C++ 代码</button>
            <button
              class="secondary-button"
              type="button"
              data-action="restore"
              data-card="${escapeHtml(card.id)}"
            >恢复起始代码</button>
          </div>
          <p class="exercise-hint">提示：${escapeHtml(card.exercise.hint)}</p>
          <div
            class="feedback ${feedback ? (feedback.correct ? "success" : feedback.partial ? "partial" : "error") : ""}"
            data-feedback="${escapeHtml(card.id)}"
            ${feedback ? "" : "hidden"}
          >
            ${feedback ? renderFeedbackMarkup(card, feedback) : ""}
          </div>
        </div>
      </section>`;
  }

  function renderCard(card) {
    const cardState = getCardState(card.id);
    const lesson = lessonById(card.lessonId);
    const isMasteredCard = cardState.level === 0;
    const openClass =
      !isMasteredCard && !cardState.collapsed && lastFocusedCardId === card.id
        ? " open"
        : "";
    const focusedClass = lastFocusedCardId === card.id ? " focused" : "";
    const masteredClass = isMasteredCard ? " mastered" : "";
    const draft = cardState.draft || (card.exercise ? card.exercise.starter : "");
    const stdinValue =
      cardState.stdin ?? (card.exercise ? card.exercise.sampleInput : "") ?? "";
    const feedback = state.exercises[card.id];

    return `
      <article
        class="knowledge-card${openClass}${focusedClass}${masteredClass}"
        data-card-id="${escapeHtml(card.id)}"
      >
        <div class="card-head">
          <div class="card-index">${cardNumber(card.id)}</div>
          <div class="card-heading">
            <div class="card-meta">
              <span>L${lesson ? lesson.number : "?"}</span>
              <span>·</span>
              <span>${escapeHtml(lesson ? lesson.title : "")}</span>
              ${statusPill(card.id)}
            </div>
            <h2>${escapeHtml(card.title)}</h2>
          </div>
          <div class="card-head-actions">
            <button
              class="check-button${isMasteredCard ? " checked" : ""}"
              type="button"
              data-action="master"
              data-card="${escapeHtml(card.id)}"
              aria-pressed="${isMasteredCard}"
              title="标记为完全掌握"
            >
              <span class="check-box" aria-hidden="true">${isMasteredCard ? "✓" : ""}</span>
              <span class="check-label">完全掌握</span>
            </button>
            <button
              class="icon-button"
              type="button"
              data-action="toggle"
              data-card="${escapeHtml(card.id)}"
              aria-expanded="${openClass ? "true" : "false"}"
              aria-label="展开或收起 ${escapeHtml(card.title)}"
            >
              <span class="expand-icon" aria-hidden="true">⌄</span>
            </button>
          </div>
        </div>
        <div class="card-body">
          <p class="overview">${escapeHtml(card.overview)}</p>
          <div class="knowledge-grid">
            <section class="info-block">
              <h3><span>01</span>必须记住</h3>
              <ul>${card.keyPoints.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
            </section>
            <section class="info-block pitfalls">
              <h3><span>!</span>容易出错</h3>
              <ul>${card.pitfalls.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
            </section>
          </div>
          ${
            card.example
              ? renderExampleSection(card)
              : `<p class="example-missing">本卡是知识点归纳；课件原题见本课例题卡。</p>`
          }
          ${card.exercise ? renderExerciseSection(card, draft, stdinValue, feedback) : ""}
          <div class="mastery-row">
            <span>完成练习后，按真实情况评估：</span>
            ${renderStatusButton(card.id, 0, "✓ 完全掌握")}
            ${renderStatusButton(card.id, 1, "◐ 有点模糊")}
            ${renderStatusButton(card.id, 2, "○ 还不明白")}
          </div>
          <p class="mastery-hint">掌握标准：${escapeHtml(card.masteryHint)}</p>
        </div>
      </article>
    `;
  }

  function renderStatusButton(cardId, level, label) {
    const active = getCardState(cardId).level === level;
    return `
      <button
        class="status-button${active ? " active" : ""}"
        type="button"
        data-action="level"
        data-level="${level}"
        data-card="${escapeHtml(cardId)}"
        aria-pressed="${active}"
      >${label}</button>
    `;
  }

  function renderFeedbackMarkup(card, feedback) {
    const missingItems = (feedback.missing || [])
      .map((item) => `<li>${escapeHtml(item)}</li>`)
      .join("");
    const syntaxItems = (feedback.syntaxWarnings || [])
      .map((item) => `<li>${escapeHtml(item)}</li>`)
      .join("");
    return `
      <h4>${feedback.correct ? "检查通过" : feedback.partial ? "部分完成" : "需要修正"} · ${
        feedback.passedCount
      }/${feedback.total} 项通过</h4>
      <p>${
        feedback.correct
          ? feedback.mode === "compiler"
            ? "联网 g++ 编译运行检查通过。"
            : "代码包含题目要求的主要结构。"
          : "请对照以下未通过项检查代码。"
      }</p>
      ${missingItems ? `<ul>${missingItems}</ul>` : ""}
      ${syntaxItems ? `<ul>${syntaxItems}</ul>` : ""}
      ${renderCompilerDetails(feedback)}
      ${
        feedback.correct
          ? ""
          : `<details><summary>查看参考写法与讲解</summary><pre>${escapeHtml(
              card.exercise.solution
            )}</pre><p>${escapeHtml(card.exercise.explanation)}</p></details>`
      }
    `;
  }

  function toggleCard(cardId) {
    const card = document.querySelector(`[data-card-id="${cardId}"]`);
    if (!card) return;
    const isOpen = card.classList.toggle("open");
    const button = card.querySelector('[data-action="toggle"]');
    if (button) button.setAttribute("aria-expanded", String(isOpen));
    const cardState = getCardState(cardId);
    cardState.collapsed = !isOpen;
    saveState();
  }

  function focusCard(cardId) {
    lastFocusedCardId = cardId;
    const card = document.querySelector(`[data-card-id="${cardId}"]`);
    if (!card) return;
    card.classList.add("open");
    document
      .querySelectorAll(".knowledge-card.focused")
      .forEach((element) => element.classList.remove("focused"));
    card.classList.add("focused");
    card.scrollIntoView({ behavior: "smooth", block: "start" });
    const textarea = card.querySelector("textarea");
    if (textarea) {
      window.setTimeout(() => textarea.focus({ preventScroll: true }), 350);
    }
  }

  function openDashboard() {
    const total = data.cards.length;
    const mastered = data.cards.filter((card) => isMastered(card.id)).length;
    const fuzzy = data.cards.filter(
      (card) => getCardState(card.id).level === 1
    ).length;
    const unknown = data.cards.filter(
      (card) => getCardState(card.id).level === 2
    ).length;
    const unevaluated = total - mastered - fuzzy - unknown;
    const attempts = data.cards.reduce(
      (sum, card) => sum + getCardState(card.id).attempts,
      0
    );
    const correct = data.cards.reduce(
      (sum, card) => sum + getCardState(card.id).correct,
      0
    );
    const days = Object.keys(state.daily).length;
    const accuracy = attempts ? `${Math.round((correct / attempts) * 100)}%` : "--";

    elements.dashboardContent.innerHTML = `
      <div class="dashboard-grid">
        <div class="dashboard-stat"><span>知识点总数</span><strong>${total}</strong></div>
        <div class="dashboard-stat"><span>练习次数</span><strong>${attempts}</strong></div>
        <div class="dashboard-stat"><span>累计正确率</span><strong>${accuracy}</strong></div>
      </div>
      <div class="distribution">
        ${distributionRow("完全掌握", mastered, total, "mastered-fill")}
        ${distributionRow("有点模糊", fuzzy, total, "fuzzy-fill")}
        ${distributionRow("还不明白", unknown, total, "unknown-fill")}
        ${distributionRow("尚未评估", unevaluated, total, "fuzzy-fill")}
      </div>
      <p class="dashboard-note">
        已记录 ${days} 个学习日。进度保存在当前浏览器的 localStorage 中；更换浏览器或清理站点数据后不会自动同步。
      </p>
    `;
    if (typeof elements.dashboardDialog.showModal === "function") {
      elements.dashboardDialog.showModal();
    } else {
      elements.dashboardDialog.setAttribute("open", "");
    }
  }

  function distributionRow(label, count, total, fillClass) {
    const percent = total ? Math.round((count / total) * 100) : 0;
    return `
      <div class="distribution-row">
        <span>${label}</span>
        <div class="mini-track"><span class="${fillClass}" style="width:${percent}%"></span></div>
        <strong>${count}</strong>
      </div>
    `;
  }

  function showToast(message) {
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = message;
    elements.toastRegion.appendChild(toast);
    window.setTimeout(() => toast.remove(), 2800);
  }

  function changeFilter(filter) {
    if (!FILTERS.includes(filter)) return;
    currentFilter = filter;
    lastFocusedCardId = null;
    renderCards();
  }

  function startReview() {
    const candidates = sortCardsForReview(
      data.cards.filter((card) => isReviewable(card.id) && cardMatchesSearch(card))
    );
    if (!candidates.length) {
      showToast("没有待复习知识点，全部已掌握。");
      return;
    }
    currentFilter = "review";
    renderCards();
    const first = candidates[0];
    lastFocusedCardId = first.id;
    renderCards();
    focusCard(first.id);
  }

  function resetProgress() {
    const confirmed = window.confirm(
      "确定重置全部熟练度、练习答案和复习记录吗？此操作不可撤销。"
    );
    if (!confirmed) return;
    state = defaultState();
    saveState();
    lastFocusedCardId = null;
    currentFilter = "review";
    render();
    showToast("学习进度已重置。");
  }

  elements.lessonNav.addEventListener("click", (event) => {
    const button = event.target.closest("[data-lesson]");
    if (!button) return;
    const lessonId = button.dataset.lesson;
    currentFilter = "all";
    searchTerm = "";
    elements.searchInput.value = "";
    renderCards();
    const lessonCards = data.cards.filter((card) => card.lessonId === lessonId);
    if (lessonCards.length) {
      lastFocusedCardId = lessonCards[0].id;
      renderCards();
      focusCard(lessonCards[0].id);
    }
  });

  if (elements.remoteJudgeButton) {
    elements.remoteJudgeButton.addEventListener("click", () => {
      if (exactJudgeAvailable) {
        setRemoteJudgeEnabled(false);
        return;
      }
      const confirmed = window.confirm(
        "开启联网编译后，点击“检查答案”会把当前 C++ 代码、测试输入以及用于比对的参考解发送到第三方服务 ce.judge0.com。\n\n" +
          "不点击联网检查就不会发送代码。是否继续开启？"
      );
      if (confirmed) setRemoteJudgeEnabled(true);
    });
  }

  elements.cardList.addEventListener("click", async (event) => {
    const actionButton = event.target.closest("[data-action]");
    if (!actionButton) return;
    const action = actionButton.dataset.action;
    const cardId = actionButton.dataset.card;
    if (action === "toggle") {
      toggleCard(cardId);
    } else if (action === "master") {
      setLevel(cardId, isMastered(cardId) ? 1 : 0);
    } else if (action === "level") {
      setLevel(cardId, Number(actionButton.dataset.level));
    } else if (action === "submit") {
      const textarea = document.querySelector(`[data-code="${cardId}"]`);
      const stdinEditor = document.querySelector(`[data-stdin="${cardId}"]`);
      if (!textarea) return;
      const previousLabel = actionButton.textContent;
      actionButton.disabled = true;
      actionButton.textContent = exactJudgeAvailable ? "联网编译中..." : "检查中...";
      try {
        await submitExercise(cardId, textarea.value, stdinEditor?.value ?? "");
      } finally {
        if (actionButton.isConnected) {
          actionButton.disabled = false;
          actionButton.textContent = previousLabel;
        }
      }
    } else if (action === "restore") {
      const card = data.cards.find((item) => item.id === cardId);
      const textarea = document.querySelector(`[data-code="${cardId}"]`);
      const stdinEditor = document.querySelector(`[data-stdin="${cardId}"]`);
      if (!card || !textarea) return;
      textarea.value = card.exercise.starter;
      const cardState = getCardState(cardId);
      cardState.draft = card.exercise.starter;
      cardState.stdin = card.exercise.sampleInput ?? "";
      if (stdinEditor) stdinEditor.value = cardState.stdin;
      saveState();
      showToast("已恢复起始代码。");
    } else if (action === "copy-code") {
      const textarea = document.querySelector(`[data-code="${cardId}"]`);
      if (!textarea) return;
      try {
        await navigator.clipboard.writeText(textarea.value);
        showToast("C++ 代码已复制，可粘贴到本地编译器验证。");
      } catch (error) {
        textarea.focus();
        textarea.select();
        document.execCommand("copy");
        showToast("C++ 代码已选中并尝试复制。");
      }
    }
  });

  elements.cardList.addEventListener("input", (event) => {
    const codeEditor = event.target.closest("[data-code]");
    const stdinEditor = event.target.closest("[data-stdin]");
    if (codeEditor) {
      const cardState = getCardState(codeEditor.dataset.code);
      cardState.draft = codeEditor.value;
      window.clearTimeout(codeEditor._saveTimer);
      codeEditor._saveTimer = window.setTimeout(saveState, 250);
    }
    if (stdinEditor) {
      const cardState = getCardState(stdinEditor.dataset.stdin);
      cardState.stdin = stdinEditor.value;
      window.clearTimeout(stdinEditor._saveTimer);
      stdinEditor._saveTimer = window.setTimeout(saveState, 250);
    }
  });

  elements.cardList.addEventListener("keydown", (event) => {
    const textarea = event.target.closest("[data-code]");
    if (!textarea || event.key !== "Tab") return;
    event.preventDefault();
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    textarea.setRangeText("    ", start, end, "end");
    textarea.dispatchEvent(new Event("input", { bubbles: true }));
  });

  document.querySelectorAll("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => changeFilter(button.dataset.filter));
  });

  elements.searchInput.addEventListener("input", (event) => {
    searchTerm = event.target.value.trim().toLocaleLowerCase("zh-CN");
    lastFocusedCardId = null;
    renderCards();
  });

  elements.startReviewButton.addEventListener("click", startReview);
  elements.showAllButton.addEventListener("click", () => changeFilter("all"));
  elements.resetButton.addEventListener("click", resetProgress);
  elements.openDashboardButton.addEventListener("click", openDashboard);

  ensureDaily();
  saveState();
  updateJudgeModeDisplay();
  render();
  detectExactJudge().then(() => renderCards());

  window.CppReview = {
    data,
    getState: () => JSON.parse(JSON.stringify(state)),
    checkExercise,
    checkExactExercise,
    normalizeCode,
    setLevel,
    submitExercise,
    startReview,
    detectExactJudge,
    setRemoteJudgeEnabled,
    isExactJudgeAvailable: () => exactJudgeAvailable
  };
})();
