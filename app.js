/* ==========================================================================
   EL REGNE DE FRACTÀRIA · MOTOR INTERACTIU, MANIPULATIU I DUA (6è PRIMÀRIA)
   ========================================================================== */

(function () {
  "use strict";

  const STORAGE_KEY = "fractaria_6e_state_v1";

  // Estat global de l'aplicació
  const state = {
    currentModule: "identificacio", // grimori | identificacio | comparacio | equivalencia | transformacio | problemes | forja
    currentLevel: 1,                // 1, 2, 3
    currentIndex: 0,                // 0..4
    currentShape: "circle",         // circle | bar | grid | line
    grimoriChapter: "concepte",

    // Gamificació
    stars: 0,
    lives: 10,
    maxLives: 10,
    streak: 0,
    attemptsLeft: 2,
    completedChallenges: {},        // { challengeId: true }

    // Preferències DUA
    easyRead: false,
    darkTheme: false,
    colorblindMode: false,
    soundEnabled: true,

    // Estat del tauler manipulatiu de la missió actual
    leftPanel: { num: 1, den: 4, maxUnits: 1, locked: false },
    rightPanel: { num: 1, den: 4, maxUnits: 1, locked: false },
    selectedSymbol: null,           // "<" | "=" | ">"
    showQuantityDistribution: false,

    // Estat del Tauler Manipulatiu de Resolució de Problemes (fora de fraccions)
    solverBlocks: [],               // Array de números (positius = afegir, negatius = restar/gastar)
    solverDivGroups: 1,             // Nombre de parts iguals per repartir el total dels blocs
    showBarModelGuide: true,        // Mostra o amaga el Model de Barres Part-Tot
    step1: { a: "", op: "+", b: "" },
    step2: { a: "", op: "+", b: "" },

    // Estat de la Forja Lliure
    freeLeft: { num: 1, den: 2, maxUnits: 1 },
    freeRight: { num: 2, den: 4, maxUnits: 1 },
    wallActive: {
      1: [0],
      2: [0],
      3: [],
      4: [0, 1],
      5: [],
      6: [0, 1, 2],
      8: [],
      10: [],
      12: []
    }
  };

  /* ==========================================================================
     1. PERSISTÈNCIA I EFECTES DE SO MÀGICS (WEB AUDIO API)
     ========================================================================== */
  function loadSavedState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw);
      if (typeof parsed.stars === "number") state.stars = parsed.stars;
      if (typeof parsed.lives === "number") state.lives = Math.max(1, Math.min(10, parsed.lives));
      if (typeof parsed.streak === "number") state.streak = parsed.streak;
      if (parsed.completedChallenges && typeof parsed.completedChallenges === "object") {
        state.completedChallenges = parsed.completedChallenges;
      }
      if (typeof parsed.easyRead === "boolean") state.easyRead = parsed.easyRead;
      if (typeof parsed.darkTheme === "boolean") state.darkTheme = parsed.darkTheme;
      if (typeof parsed.colorblindMode === "boolean") state.colorblindMode = parsed.colorblindMode;
      if (typeof parsed.soundEnabled === "boolean") state.soundEnabled = parsed.soundEnabled;
    } catch (e) {
      console.warn("No s'ha pogut carregar l'estat desat:", e);
    }
  }

  function saveState() {
    try {
      const toSave = {
        stars: state.stars,
        lives: state.lives,
        streak: state.streak,
        completedChallenges: state.completedChallenges,
        easyRead: state.easyRead,
        darkTheme: state.darkTheme,
        colorblindMode: state.colorblindMode,
        soundEnabled: state.soundEnabled
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
    } catch (e) {
      console.warn("No s'ha pogut desar l'estat:", e);
    }
  }

  let audioCtx = null;
  function playMagicSound(type) {
    if (!state.soundEnabled) return;
    try {
      if (!audioCtx) {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (!AudioContextClass) return;
        audioCtx = new AudioContextClass();
      }
      if (audioCtx.state === "suspended") {
        audioCtx.resume();
      }
      const now = audioCtx.currentTime;

      if (type === "click") {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(520, now);
        osc.frequency.exponentialRampToValueAtTime(660, now + 0.06);
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.07);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now);
        osc.stop(now + 0.07);
      } else if (type === "spell") {
        [440, 554.37, 659.25].forEach((freq, idx) => {
          const osc = audioCtx.createOscillator();
          const gain = audioCtx.createGain();
          osc.type = "triangle";
          osc.frequency.setValueAtTime(freq, now + idx * 0.05);
          gain.gain.setValueAtTime(0.09, now + idx * 0.05);
          gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.05 + 0.18);
          osc.connect(gain);
          gain.connect(audioCtx.destination);
          osc.start(now + idx * 0.05);
          osc.stop(now + idx * 0.05 + 0.18);
        });
      } else if (type === "success") {
        [523.25, 659.25, 783.99, 1046.5].forEach((freq, idx) => {
          const osc = audioCtx.createOscillator();
          const gain = audioCtx.createGain();
          osc.type = "triangle";
          osc.frequency.setValueAtTime(freq, now + idx * 0.08);
          gain.gain.setValueAtTime(0.12, now + idx * 0.08);
          gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.25);
          osc.connect(gain);
          gain.connect(audioCtx.destination);
          osc.start(now + idx * 0.08);
          osc.stop(now + idx * 0.08 + 0.25);
        });
      } else if (type === "error") {
        [300, 240].forEach((freq, idx) => {
          const osc = audioCtx.createOscillator();
          const gain = audioCtx.createGain();
          osc.type = "sawtooth";
          osc.frequency.setValueAtTime(freq, now + idx * 0.1);
          gain.gain.setValueAtTime(0.07, now + idx * 0.1);
          gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.1 + 0.18);
          osc.connect(gain);
          gain.connect(audioCtx.destination);
          osc.start(now + idx * 0.1);
          osc.stop(now + idx * 0.1 + 0.18);
        });
      }
    } catch (e) {
      // Silencia errors d'àudio si el navegador bloqueja l'autoplay
    }
  }

  /* ==========================================================================
     2. LECTOR DE VEU EN CATALÀ (TEXT-TO-SPEECH DUA)
     ========================================================================== */
  function speakCatalan(rawText) {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();

    // Neteja etiquetes HTML i converteix fraccions com 3/4 en lectura natural
    const clean = String(rawText || "")
      .replace(/<[^>]+>/g, " ")
      .replace(/&lt;/g, " menor que ")
      .replace(/&gt;/g, " major que ")
      .replace(/×/g, " multiplicat per ")
      .replace(/÷/g, " dividit entre ")
      .replace(/\s+/g, " ")
      .trim();

    if (!clean) return;

    const utter = new SpeechSynthesisUtterance(clean);
    const voices = window.speechSynthesis.getVoices();
    const catVoice = voices.find(v => v.lang && v.lang.toLowerCase().startsWith("ca"));
    if (catVoice) {
      utter.voice = catVoice;
      utter.lang = catVoice.lang;
    } else {
      utter.lang = "ca-ES";
    }
    utter.rate = 0.96;
    window.speechSynthesis.speak(utter);
  }

  /* ==========================================================================
     3. UTILITATS MATEMÀTIQUES DE FRACCIONS
     ========================================================================== */
  function gcd(a, b) {
    a = Math.abs(Math.round(a));
    b = Math.abs(Math.round(b));
    while (b !== 0) {
      const t = b;
      b = a % b;
      a = t;
    }
    return a || 1;
  }

  function areEquivalent(num1, den1, num2, den2) {
    if (!den1 || !den2) return false;
    return num1 * den2 === num2 * den1;
  }

  function formatMixedBadgeHTML(num, den) {
    if (num <= den || den <= 1) return "";
    const whole = Math.floor(num / den);
    const rem = num % den;
    if (rem === 0) {
      return `<span class="mixed-whole-number">= ${whole} u.</span>`;
    }
    return `
      <span style="font-size:0.85rem; color:var(--text-muted); font-weight:700;">=</span>
      <span class="mixed-whole-number">${whole}</span>
      <span class="frac-vertical" style="font-size:0.92rem;">
        <span class="f-num">${rem}</span>
        <span class="f-bar"></span>
        <span class="f-den">${den}</span>
      </span>
    `;
  }

  function renderVerticalFractionHTML(num, den) {
    return `
      <span class="frac-vertical">
        <span class="f-num">${num}</span>
        <span class="f-bar"></span>
        <span class="f-den">${den}</span>
      </span>
    `;
  }

  /* ==========================================================================
     4. GENERADORS VISUALS SVG I DOM DE FRACCIONS MANIPULATIVES
     ========================================================================== */
  function buildSVGDefs(uniquePrefix, activeColor) {
    return `
      <defs>
        <pattern id="cb-stripe-${uniquePrefix}" width="8" height="8" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
          <rect width="8" height="8" fill="${activeColor}" />
          <line x1="0" y1="0" x2="0" y2="8" stroke="rgba(255,255,255,0.45)" stroke-width="3" />
        </pattern>
      </defs>
    `;
  }

  function getPieceFill(isActive, uniquePrefix, activeColor) {
    if (!isActive) return "var(--piece-empty)";
    if (state.colorblindMode) return `url(#cb-stripe-${uniquePrefix})`;
    return activeColor;
  }

  // 4.1 ESCUT CIRCULAR RÚNIC (SVG)
  function renderCircleUnitSVG(unitIndex, den, activeInAllUnits, locked, panelKey, activeColor) {
    const size = 168;
    const cx = size / 2;
    const cy = size / 2;
    const r = 68;
    const prefix = `${panelKey}-u${unitIndex}`;

    let sectorsHTML = "";

    if (den === 1) {
      const globalPieceIndex = unitIndex;
      const isActive = globalPieceIndex < activeInAllUnits;
      const fill = getPieceFill(isActive, prefix, activeColor);
      sectorsHTML += `
        <circle cx="${cx}" cy="${cy}" r="${r}"
          fill="${fill}" stroke="var(--piece-stroke)" stroke-width="2.5"
          class="${locked ? "locked-svg-piece" : "interactive-svg-piece"}"
          data-panel="${panelKey}" data-piece-index="${globalPieceIndex}" />
      `;
      if (isActive && state.colorblindMode) {
        sectorsHTML += `<text x="${cx}" y="${cy + 5}" text-anchor="middle" fill="#FFF" font-weight="900" font-size="14" pointer-events="none">1/1</text>`;
      }
    } else {
      for (let i = 0; i < den; i++) {
        const globalPieceIndex = unitIndex * den + i;
        const isActive = globalPieceIndex < activeInAllUnits;
        const startAngle = (i * 2 * Math.PI) / den - Math.PI / 2;
        const endAngle = ((i + 1) * 2 * Math.PI) / den - Math.PI / 2;

        const x1 = cx + r * Math.cos(startAngle);
        const y1 = cy + r * Math.sin(startAngle);
        const x2 = cx + r * Math.cos(endAngle);
        const y2 = cy + r * Math.sin(endAngle);
        const largeArc = endAngle - startAngle > Math.PI ? 1 : 0;

        const d = `M ${cx} ${cy} L ${x1.toFixed(2)} ${y1.toFixed(2)} A ${r} ${r} 0 ${largeArc} 1 ${x2.toFixed(2)} ${y2.toFixed(2)} Z`;
        const fill = getPieceFill(isActive, prefix, activeColor);

        sectorsHTML += `
          <path d="${d}"
            fill="${fill}" stroke="var(--piece-stroke)" stroke-width="2.2"
            class="${locked ? "locked-svg-piece" : "interactive-svg-piece"}"
            data-panel="${panelKey}" data-piece-index="${globalPieceIndex}">
            <title>Peça ${globalPieceIndex + 1} (1/${den})</title>
          </path>
        `;

        if (isActive && state.colorblindMode && den <= 10) {
          const midAngle = (startAngle + endAngle) / 2;
          const tx = cx + (r * 0.6) * Math.cos(midAngle);
          const ty = cy + (r * 0.6) * Math.sin(midAngle) + 4;
          sectorsHTML += `<text x="${tx.toFixed(1)}" y="${ty.toFixed(1)}" text-anchor="middle" fill="#FFFFFF" font-weight="900" font-size="11" pointer-events="none">1/${den}</text>`;
        }
      }
    }

    return `
      <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" role="img" aria-label="Escut circular dividit en ${den} parts">
        ${buildSVGDefs(prefix, activeColor)}
        <circle cx="${cx}" cy="${cy}" r="${r + 5}" fill="none" stroke="var(--gold)" stroke-width="2" stroke-dasharray="4 3" />
        ${sectorsHTML}
      </svg>
    `;
  }

  // 4.2 BARRA DE POCIÓ DE MANA (SVG) + SUPORT PER REPARTIR QUANTITATS EN PROBLEMES
  function renderBarUnitSVG(unitIndex, den, activeInAllUnits, locked, panelKey, activeColor, perPieceQuantity) {
    const width = 270;
    const height = perPieceQuantity ? 84 : 66;
    const pad = 8;
    const innerW = width - pad * 2;
    const innerH = height - pad * 2;
    const segW = innerW / den;
    const prefix = `${panelKey}-bar-u${unitIndex}`;

    let rectsHTML = "";
    for (let i = 0; i < den; i++) {
      const globalPieceIndex = unitIndex * den + i;
      const isActive = globalPieceIndex < activeInAllUnits;
      const x = pad + i * segW;
      const fill = getPieceFill(isActive, prefix, activeColor);

      rectsHTML += `
        <rect x="${x.toFixed(2)}" y="${pad}" width="${segW.toFixed(2)}" height="${innerH}"
          fill="${fill}" stroke="var(--piece-stroke)" stroke-width="2.2" rx="3"
          class="${locked ? "locked-svg-piece" : "interactive-svg-piece"}"
          data-panel="${panelKey}" data-piece-index="${globalPieceIndex}">
          <title>Peça ${globalPieceIndex + 1} (1/${den})</title>
        </rect>
      `;

      const centerX = x + segW / 2;
      if (perPieceQuantity) {
        rectsHTML += `
          <text x="${centerX.toFixed(1)}" y="${pad + innerH / 2 - 4}" text-anchor="middle"
            fill="${isActive ? "#FFFFFF" : "var(--text-main)"}" font-weight="900" font-size="13" pointer-events="none">
            ${perPieceQuantity}
          </text>
          <text x="${centerX.toFixed(1)}" y="${pad + innerH / 2 + 14}" text-anchor="middle"
            fill="${isActive ? "#FDE68A" : "var(--text-muted)"}" font-weight="700" font-size="10" pointer-events="none">
            (1/${den})
          </text>
        `;
      } else if ((isActive && state.colorblindMode) || den <= 8) {
        rectsHTML += `
          <text x="${centerX.toFixed(1)}" y="${pad + innerH / 2 + 5}" text-anchor="middle"
            fill="${isActive ? "#FFFFFF" : "var(--text-muted)"}" font-weight="800" font-size="11" pointer-events="none">
            1/${den}
          </text>
        `;
      }
    }

    return `
      <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-label="Barra de fracció dividida en ${den} parts">
        ${buildSVGDefs(prefix, activeColor)}
        ${rectsHTML}
      </svg>
    `;
  }

  // 4.3 TAULETA DE CRISTALLS EN QUADRÍCULA (SVG)
  function renderGridUnitSVG(unitIndex, den, activeInAllUnits, locked, panelKey, activeColor, perPieceQuantity) {
    // Determina files i columnes òptimes per a la quadrícula
    let rows = 1;
    let cols = den;
    if (den === 4) { rows = 2; cols = 2; }
    else if (den === 6) { rows = 2; cols = 3; }
    else if (den === 8) { rows = 2; cols = 4; }
    else if (den === 9) { rows = 3; cols = 3; }
    else if (den === 10) { rows = 2; cols = 5; }
    else if (den === 12) { rows = 3; cols = 4; }
    else if (den > 12 && den % 4 === 0) { rows = 4; cols = den / 4; }
    else if (den > 12 && den % 3 === 0) { rows = 3; cols = den / 3; }
    else if (den > 12 && den % 2 === 0) { rows = 2; cols = den / 2; }

    const width = 220;
    const height = rows === 1 ? 74 : rows === 2 ? 120 : 155;
    const pad = 8;
    const cellW = (width - pad * 2) / cols;
    const cellH = (height - pad * 2) / rows;
    const prefix = `${panelKey}-grid-u${unitIndex}`;

    let cellsHTML = "";
    for (let i = 0; i < den; i++) {
      const rIdx = Math.floor(i / cols);
      const cIdx = i % cols;
      const globalPieceIndex = unitIndex * den + i;
      const isActive = globalPieceIndex < activeInAllUnits;
      const x = pad + cIdx * cellW;
      const y = pad + rIdx * cellH;
      const fill = getPieceFill(isActive, prefix, activeColor);

      cellsHTML += `
        <rect x="${(x + 2).toFixed(2)}" y="${(y + 2).toFixed(2)}"
          width="${(cellW - 4).toFixed(2)}" height="${(cellH - 4).toFixed(2)}"
          fill="${fill}" stroke="var(--piece-stroke)" stroke-width="2" rx="6"
          class="${locked ? "locked-svg-piece" : "interactive-svg-piece"}"
          data-panel="${panelKey}" data-piece-index="${globalPieceIndex}">
          <title>Cristall ${globalPieceIndex + 1} (1/${den})</title>
        </rect>
      `;

      const cx = x + cellW / 2;
      const cy = y + cellH / 2;
      if (perPieceQuantity) {
        cellsHTML += `
          <text x="${cx.toFixed(1)}" y="${(cy + 4).toFixed(1)}" text-anchor="middle"
            fill="${isActive ? "#FFFFFF" : "var(--text-main)"}" font-weight="900" font-size="12" pointer-events="none">
            📦${perPieceQuantity}
          </text>
        `;
      } else if (isActive && state.colorblindMode) {
        cellsHTML += `
          <text x="${cx.toFixed(1)}" y="${(cy + 4).toFixed(1)}" text-anchor="middle"
            fill="#FFFFFF" font-weight="900" font-size="11" pointer-events="none">
            1/${den}
          </text>
        `;
      }
    }

    return `
      <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-label="Safata de ${den} unitats">
        ${buildSVGDefs(prefix, activeColor)}
        ${cellsHTML}
      </svg>
    `;
  }

  // 4.4 RECTA NUMÈRICA DELS CAMINS (SVG)
  function renderNumberLineSVG(num, den, maxUnits, locked, panelKey, activeColor) {
    const width = 330;
    const height = 115;
    const padX = 26;
    const lineY = 64;
    const usableW = width - padX * 2;
    const totalSubdivisions = maxUnits * den;
    const stepW = usableW / totalSubdivisions;

    const fillW = Math.min(totalSubdivisions, num) * stepW;
    const markerX = padX + fillW;

    let ticksHTML = "";
    let clickZonesHTML = "";

    for (let i = 0; i <= totalSubdivisions; i++) {
      const x = padX + i * stepW;
      const isWhole = i % den === 0;
      const tickH = isWhole ? 16 : 9;

      ticksHTML += `
        <line x1="${x.toFixed(2)}" y1="${lineY - tickH}" x2="${x.toFixed(2)}" y2="${lineY + tickH}"
          stroke="var(--piece-stroke)" stroke-width="${isWhole ? 3 : 1.6}" />
      `;

      if (isWhole) {
        const wholeVal = i / den;
        ticksHTML += `
          <text x="${x.toFixed(2)}" y="${lineY + 34}" text-anchor="middle"
            fill="var(--text-main)" font-weight="900" font-size="14">${wholeVal}</text>
        `;
      } else if (totalSubdivisions <= 12) {
        ticksHTML += `
          <text x="${x.toFixed(2)}" y="${lineY - 14}" text-anchor="middle"
            fill="var(--text-muted)" font-weight="700" font-size="10">${i}/${den}</text>
        `;
      }

      if (i < totalSubdivisions) {
        const isActive = i < num;
        clickZonesHTML += `
          <rect x="${x.toFixed(2)}" y="${lineY - 18}" width="${stepW.toFixed(2)}" height="36"
            fill="${isActive ? activeColor : "transparent"}" fill-opacity="${isActive ? 0.35 : 0.01}"
            stroke="none"
            class="${locked ? "locked-svg-piece" : "interactive-svg-piece"}"
            data-panel="${panelKey}" data-piece-index="${i}">
            <title>Tram ${i + 1}/${den}</title>
          </rect>
        `;
      }
    }

    return `
      <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-label="Recta numèrica amb ${num}/${den}">
        <!-- Línia base -->
        <line x1="${padX}" y1="${lineY}" x2="${width - padX}" y2="${lineY}" stroke="var(--piece-stroke)" stroke-width="4" stroke-linecap="round" />
        <!-- Rastre actiu -->
        <line x1="${padX}" y1="${lineY}" x2="${markerX.toFixed(2)}" y2="${lineY}" stroke="${activeColor}" stroke-width="7" stroke-linecap="round" />
        ${clickZonesHTML}
        ${ticksHTML}
        <!-- Marcador d'heroi -->
        <circle cx="${markerX.toFixed(2)}" cy="${lineY}" r="9" fill="var(--gold-bright)" stroke="#1E1B4B" stroke-width="2.5" pointer-events="none" />
        <text x="${markerX.toFixed(2)}" y="${lineY - 22}" text-anchor="middle" fill="${activeColor}" font-weight="900" font-size="13" pointer-events="none">${num}/${den}</text>
      </svg>
    `;
  }

  // Renderitzador complet d'un panell manipulatiu (Esquerre o Dret)
  function renderWorkbenchPanelHTML(panelKey, title, panelState, options = {}) {
    const { num, den, maxUnits = 1, locked = false } = panelState;
    const activeColor = panelKey === "right" ? "var(--piece-active-2)" : "var(--piece-active-1)";
    const unitsCount = Math.max(maxUnits, Math.ceil(Math.max(1, num) / den));
    const clampedUnits = Math.min(3, Math.max(1, unitsCount));

    let unitsHTML = "";
    if (state.currentShape === "line") {
      unitsHTML = `
        <div class="single-unit-box">
          ${renderNumberLineSVG(num, den, clampedUnits, locked, panelKey, activeColor)}
          <span class="unit-caption">Fes clic als trams de la recta per moure el marcador</span>
        </div>
      `;
    } else {
      for (let u = 0; u < clampedUnits; u++) {
        let svgContent = "";
        if (state.currentShape === "circle") {
          svgContent = renderCircleUnitSVG(u, den, num, locked, panelKey, activeColor);
        } else if (state.currentShape === "bar") {
          svgContent = renderBarUnitSVG(u, den, num, locked, panelKey, activeColor, options.perPieceQuantity);
        } else {
          svgContent = renderGridUnitSVG(u, den, num, locked, panelKey, activeColor, options.perPieceQuantity);
        }
        unitsHTML += `
          <div class="single-unit-box">
            ${svgContent}
            <span class="unit-caption">Unitat ${u + 1} (${den}/${den})</span>
          </div>
        `;
      }
    }

    const percentage = Math.round((num / den) * 1000) / 10;
    const fillBarWidth = Math.min(100, (num / (den * clampedUnits)) * 100);

    // Controls de manipulació si no està bloquejat
    let controlsHTML = "";
    if (!locked) {
      controlsHTML = `
        <div class="manipulative-controls-row">
          <div class="control-pill-group">
            <span class="control-pill-label">🔺 Peces (Numerador):</span>
            <button type="button" class="step-btn" data-action="num-minus" data-panel="${panelKey}" ${num <= 0 ? "disabled" : ""}>−</button>
            <span class="control-val-display">${num}</span>
            <button type="button" class="step-btn" data-action="num-plus" data-panel="${panelKey}" ${num >= den * 3 ? "disabled" : ""}>+</button>
          </div>

          <div class="control-pill-group">
            <span class="control-pill-label">🔻 Parts/unitat (Denominador):</span>
            <button type="button" class="step-btn" data-action="den-minus" data-panel="${panelKey}" ${den <= 1 ? "disabled" : ""}>−</button>
            <span class="control-val-display">${den}</span>
            <button type="button" class="step-btn" data-action="den-plus" data-panel="${panelKey}" ${den >= 12 ? "disabled" : ""}>+</button>
          </div>

          ${options.allowAddUnit ? `
            <div class="control-pill-group">
              <span class="control-pill-label">📦 Unitats:</span>
              <button type="button" class="step-btn" data-action="unit-minus" data-panel="${panelKey}" ${clampedUnits <= 1 ? "disabled" : ""}>−</button>
              <span class="control-val-display">${clampedUnits}</span>
              <button type="button" class="step-btn" data-action="unit-plus" data-panel="${panelKey}" ${clampedUnits >= 3 ? "disabled" : ""}>+</button>
            </div>
          ` : ""}
        </div>
      `;
    } else {
      controlsHTML = `
        <div class="manipulative-controls-row">
          <span style="font-size:0.86rem; font-weight:700; color:var(--text-muted);">
            🔒 Figura de referència (${options.hideSymbolicOnLocked ? "Observa i compta les parts!" : `${num}/${den}`})
          </span>
        </div>
      `;
    }

    // Encanteris d'Alquímia (Amplificar i Simplificar) si s'activa showAlchemySpells
    let alchemyHTML = "";
    if (options.showAlchemySpells && !locked) {
      alchemyHTML = `
        <div class="alchemy-spell-bar">
          <button type="button" class="spell-chip-btn" data-spell="mult" data-factor="2" data-panel="${panelKey}">⚡ Amplifica ×2</button>
          <button type="button" class="spell-chip-btn" data-spell="mult" data-factor="3" data-panel="${panelKey}">⚡ Amplifica ×3</button>
          <button type="button" class="spell-chip-btn" data-spell="mult" data-factor="4" data-panel="${panelKey}">⚡ Amplifica ×4</button>
          <button type="button" class="spell-chip-btn" data-spell="div" data-factor="2" data-panel="${panelKey}">🗡️ Simplifica ÷2</button>
          <button type="button" class="spell-chip-btn" data-spell="div" data-factor="3" data-panel="${panelKey}">🗡️ Simplifica ÷3</button>
          <button type="button" class="spell-chip-btn" data-spell="div" data-factor="4" data-panel="${panelKey}">🗡️ Simplifica ÷4</button>
          <button type="button" class="spell-chip-btn" data-spell="div" data-factor="5" data-panel="${panelKey}">🗡️ Simplifica ÷5</button>
        </div>
      `;
    }

    const symbolicBadge = options.hideSymbolicOnLocked
      ? `<div class="frac-symbolic-badge"><span style="font-weight:900; color:var(--primary);">? / ?</span></div>`
      : `
        <div class="frac-symbolic-badge">
          ${renderVerticalFractionHTML(num, den)}
          ${formatMixedBadgeHTML(num, den)}
        </div>
      `;

    return `
      <div class="fraction-workbench-panel">
        <div class="panel-header-bar">
          <span class="panel-title">${title}</span>
          ${symbolicBadge}
        </div>

        <div class="units-visual-stage">
          ${unitsHTML}
        </div>

        ${controlsHTML}
        ${alchemyHTML}

        <div class="area-meter-wrap">
          <div class="area-meter-header">
            <span>📏 Proporció respecte a 1 unitat sencera:</span>
            <strong>${percentage}% (${ (num / den).toFixed(2).replace(".", ",") } u.)</strong>
          </div>
          <div class="area-meter-track">
            <div class="area-meter-fill" style="width: ${fillBarWidth}%; background: ${activeColor};"></div>
          </div>
        </div>
      </div>
    `;
  }

  /* ==========================================================================
     5. GESTIÓ DELS REPTES I RENDERITZACIÓ DEL TAULER
     ========================================================================== */
  function getCurrentChallenge() {
    const modData = CHALLENGES_DATA[state.currentModule];
    if (!modData) return null;
    const lvlList = modData[state.currentLevel];
    if (!lvlList) return null;
    return lvlList[state.currentIndex] || lvlList[0];
  }

  function loadChallengeIntoBoard() {
    const ch = getCurrentChallenge();
    if (!ch) return;

    state.attemptsLeft = 2;
    state.selectedSymbol = null;
    state.showQuantityDistribution = false;
    state.solverBlocks = [];
    state.solverDivGroups = 1;
    state.showBarModelGuide = true;
    state.step1 = { a: "", op: "+", b: "" };
    state.step2 = { a: "", op: "+", b: "" };
    if (ch.defaultShape) {
      state.currentShape = ch.defaultShape;
    }

    // Configura els panells segons el tipus de repte
    if (ch.type === "build_and_write" || ch.type === "identify_locked" || ch.type === "mixed_conversion" || ch.type === "problem_fraction" || ch.type === "problem_number") {
      state.leftPanel = {
        num: ch.initNum !== undefined ? ch.initNum : 0,
        den: ch.initDen !== undefined ? ch.initDen : 4,
        maxUnits: ch.maxUnits || 1,
        locked: Boolean(ch.lockedBoard)
      };
    } else if (ch.type === "compare_two") {
      state.leftPanel = {
        num: ch.leftNum,
        den: ch.leftDen,
        maxUnits: ch.maxUnits || 1,
        locked: Boolean(ch.lockFractions)
      };
      state.rightPanel = {
        num: ch.rightNum,
        den: ch.rightDen,
        maxUnits: ch.maxUnits || 1,
        locked: Boolean(ch.lockFractions)
      };
    } else if (ch.type === "equivalence_mirror" || ch.type === "alchemy_transform") {
      state.leftPanel = {
        num: ch.baseNum,
        den: ch.baseDen,
        maxUnits: ch.maxUnits || 1,
        locked: true
      };
      state.rightPanel = {
        num: ch.initRightNum !== undefined ? ch.initRightNum : 0,
        den: ch.initRightDen !== undefined ? ch.initRightDen : ch.baseDen,
        maxUnits: ch.maxUnits || 1,
        locked: false
      };
    }

    hideFeedbackBanner();
    hideHintBox();
    renderMissionHeaderAndStage();
  }

  function renderMissionHeaderAndStage() {
    updateTopHUD();
    updateNavProgressBadges();

    const grimoriSec = document.getElementById("grimoriSection");
    const missionView = document.getElementById("missionWorkspaceView");
    const forjaSec = document.getElementById("forjaSection");

    if (state.currentModule === "grimori") {
      grimoriSec.style.display = "block";
      missionView.style.display = "none";
      forjaSec.style.display = "none";
      renderGrimoriView();
      return;
    }

    if (state.currentModule === "forja") {
      grimoriSec.style.display = "none";
      missionView.style.display = "none";
      forjaSec.style.display = "block";
      renderForjaView();
      return;
    }

    grimoriSec.style.display = "none";
    missionView.style.display = "block";
    forjaSec.style.display = "none";

    const ch = getCurrentChallenge();
    if (!ch) return;

    // Botons de nivell
    document.querySelectorAll(".level-btn").forEach(btn => {
      btn.classList.toggle("active", Number(btn.dataset.level) === state.currentLevel);
    });

    // Puntets de progrés 1..5
    const dotsContainer = document.getElementById("questProgressDots");
    const lvlList = CHALLENGES_DATA[state.currentModule][state.currentLevel];
    dotsContainer.innerHTML = lvlList.map((item, idx) => {
      const isDone = Boolean(state.completedChallenges[item.id]);
      const isCurr = idx === state.currentIndex;
      return `
        <button type="button" class="quest-dot ${isCurr ? "current" : ""} ${isDone ? "completed" : ""}"
          data-quest-idx="${idx}" title="Exercici ${idx + 1}: ${item.title}">
          ${isDone ? "✓" : idx + 1}
        </button>
      `;
    }).join("");

    // Targeta del repte
    const levelNames = { 1: "⭐ Principiant", 2: "⭐⭐ Mitjà", 3: "⭐⭐⭐ Expert" };
    document.getElementById("challengeBadge").textContent = `${levelNames[state.currentLevel]} · Repte ${state.currentIndex + 1}/5`;
    document.getElementById("attemptsBadge").textContent = `🎯 Oportunitats: ${state.attemptsLeft}/2`;
    document.getElementById("challengeTitle").textContent = ch.title;
    document.getElementById("challengeLore").textContent = ch.lore ? `🛒 Situació quotidiana: ${ch.lore}` : "";
    document.getElementById("challengeInstruction").innerHTML = ch.instruction;

    // Botons de forma activa (s'amaguen si estem a Resolució de Problemes fora de fraccions)
    const shapeSelectorGroup = document.querySelector(".shape-selector-group");
    if (shapeSelectorGroup) {
      shapeSelectorGroup.style.display = ch.type === "general_problem" ? "none" : "flex";
    }
    document.querySelectorAll(".shape-btn").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.shape === state.currentShape);
    });

    renderInteractiveStageOnly();
  }

  function computeStepResult(stepObj) {
    const a = parseFloat(stepObj.a);
    const b = parseFloat(stepObj.b);
    if (isNaN(a) || isNaN(b)) return null;
    if (stepObj.op === "+") return Math.round((a + b) * 100) / 100;
    if (stepObj.op === "-") return Math.round((a - b) * 100) / 100;
    if (stepObj.op === "*") return Math.round((a * b) * 100) / 100;
    if (stepObj.op === "/") return b !== 0 ? Math.round((a / b) * 100) / 100 : null;
    return null;
  }

  function renderGeneralProblemStageHTML(ch, prevProbInput) {
    // 1. Model de Barres Part-Tot
    let barModelHTML = "";
    if (ch.barModel && state.showBarModelGuide) {
      const totalSum = ch.barModel.parts.reduce((acc, p) => acc + (p.value || 10), 0);
      const partsHTML = ch.barModel.parts.map(p => {
        const widthPct = Math.max(18, Math.round(((p.value || 10) / totalSum) * 100));
        return `
          <div class="bar-model-part ${p.isUnknown ? "unknown-part" : ""}"
               style="flex: ${widthPct}; background: ${p.color};">
            ${p.label}
          </div>
        `;
      }).join("");

      barModelHTML = `
        <div class="bar-model-box">
          <div style="font-size:0.82rem; font-weight:800; color:var(--text-muted); margin-bottom:0.35rem;">
            📊 Esquema Visual del Model de Barres (Relació Part - Tot):
          </div>
          <div class="bar-model-total-bar">${ch.barModel.totalLabel}</div>
          <div class="bar-model-parts-row">${partsHTML}</div>
        </div>
      `;
    }

    // 2. Safata de Blocs i Bitllets Manipulatius
    const blocksTotal = state.solverBlocks.reduce((acc, v) => acc + v, 0);
    const dividedVal = state.solverDivGroups > 1
      ? Math.round((blocksTotal / state.solverDivGroups) * 100) / 100
      : null;

    const blocksChipsHTML = state.solverBlocks.length === 0
      ? `<span style="color:var(--text-muted); font-size:0.9rem; font-style:italic;">Fes clic als botons de sota o a "🪄 Carrega les dades" per posar blocs i bitllets al tauler (fes clic a un bloc per treure'l).</span>`
      : state.solverBlocks.map((val, idx) => `
          <button type="button" class="math-block-chip ${val < 0 ? "negative-block" : ""}"
                  data-remove-block="${idx}" title="Fes clic per eliminar aquest bloc">
            ${val >= 0 ? `+${val}` : val} ✖
          </button>
        `).join("");

    // 3. Resultats dels passos 1 i 2
    const res1 = computeStepResult(state.step1);
    const res2 = computeStepResult(state.step2);

    return `
      <div class="problem-solver-grid">
        <!-- ESQUERRA: MODEL DE BARRES + BLOCS I BITLLETS MANIPULATIUS -->
        <div class="solver-panel-card">
          <div class="panel-header-bar">
            <span class="panel-title">🧱 1. Representació Manipulativa (Model de Barres i Blocs)</span>
            <button type="button" class="tool-btn" id="btnToggleBarModelGuide" style="font-size:0.8rem; padding:0.3rem 0.65rem;">
              📊 ${state.showBarModelGuide ? "Amaga esquema" : "Mostra esquema"}
            </button>
          </div>

          ${barModelHTML}

          <div>
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.4rem; margin-bottom:0.4rem;">
              <strong style="font-size:0.9rem;">🧰 Tauler de Blocs i Bitllets:</strong>
              <div style="display:flex; gap:0.4rem;">
                <button type="button" class="tool-btn" id="btnLoadSuggestedBlocks" style="font-size:0.8rem; padding:0.28rem 0.6rem;">
                  🪄 Carrega les dades del problema
                </button>
                <button type="button" class="tool-btn" id="btnClearSolverBlocks" style="font-size:0.8rem; padding:0.28rem 0.6rem;">
                  🗑️ Buida blocs
                </button>
              </div>
            </div>

            <div class="manipulative-blocks-tray">
              ${blocksChipsHTML}
            </div>
          </div>

          <!-- Botons ràpids per afegir bitllets/blocs i repetir/repartir -->
          <div class="manipulative-controls-row" style="justify-content:flex-start;">
            <span class="control-pill-label">➕ Afegeix ràpid:</span>
            <button type="button" class="spell-chip-btn" data-add-block="50">+50</button>
            <button type="button" class="spell-chip-btn" data-add-block="20">+20</button>
            <button type="button" class="spell-chip-btn" data-add-block="10">+10</button>
            <button type="button" class="spell-chip-btn" data-add-block="5">+5</button>
            <button type="button" class="spell-chip-btn" data-add-block="1">+1</button>
            <button type="button" class="spell-chip-btn" style="border-color:var(--ruby); color:var(--ruby);" data-add-block="-10">−10</button>
            <button type="button" class="spell-chip-btn" style="border-color:var(--ruby); color:var(--ruby);" data-add-block="-5">−5</button>
            <button type="button" class="spell-chip-btn" style="border-color:var(--ruby); color:var(--ruby);" data-add-block="-1">−1</button>
          </div>

          <!-- Afegir bloc personalitzat o repetir (Multiplicació) i repartir (Divisió) -->
          <div class="manipulative-controls-row" style="justify-content:space-between;">
            <div style="display:flex; align-items:center; gap:0.35rem; flex-wrap:wrap;">
              <input type="number" id="customBlockValInput" class="step-calc-input" style="width:66px;" placeholder="Valor" value="12" />
              <span style="font-weight:800;">×</span>
              <input type="number" id="customBlockTimesInput" class="step-calc-input" style="width:54px;" placeholder="Cops" value="1" min="1" max="20" />
              <button type="button" class="tool-btn" id="btnAddCustomBlocks" style="padding:0.35rem 0.65rem;">
                ➕ Posa bloc(s)
              </button>
            </div>

            <div class="control-pill-group">
              <span class="control-pill-label">➗ Reparteix en grups:</span>
              <button type="button" class="step-btn" id="btnDivGroupsMinus" ${state.solverDivGroups <= 1 ? "disabled" : ""}>−</button>
              <span class="control-val-display">${state.solverDivGroups}</span>
              <button type="button" class="step-btn" id="btnDivGroupsPlus">+</button>
            </div>
          </div>

          <!-- Resum automàtic del tauler de blocs -->
          <div class="area-meter-wrap" style="background:var(--primary-light); border-color:var(--primary);">
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem; font-weight:800;">
              <span>🧮 Total dels blocs al tauler: <strong style="font-size:1.15rem; color:var(--primary);">${blocksTotal}</strong></span>
              ${dividedVal !== null ? `
                <span style="background:var(--gold-light); color:#92400E; padding:0.2rem 0.65rem; border-radius:999px; border:1px solid var(--gold);">
                  ➗ Repartit en ${state.solverDivGroups} parts iguals = <strong>${dividedVal}</strong> cadascuna
                </span>
              ` : ""}
            </div>
          </div>
        </div>

        <!-- DRETA: QUADERN DE PASSOS D'OPERACIÓ (MÈTODE DUA PAS A PAS) -->
        <div class="solver-panel-card">
          <div class="panel-header-bar">
            <span class="panel-title">📝 2. Quadern d'Operacions Pas a Pas</span>
          </div>

          <p style="font-size:0.88rem; color:var(--text-muted);">
            Pots provar les operacions del problema pas a pas aquí abans d'escriure la resposta final:
          </p>

          <!-- PAS 1 -->
          <div>
            <label style="font-size:0.84rem; font-weight:800; color:var(--primary); display:block; margin-bottom:0.25rem;">
              1️⃣ Primera operació:
            </label>
            <div class="step-calc-row">
              <input type="number" id="step1A" class="step-calc-input" placeholder="Núm 1" value="${state.step1.a}" />
              <select id="step1Op" class="step-calc-select" aria-label="Operació pas 1">
                <option value="+" ${state.step1.op === "+" ? "selected" : ""}>➕</option>
                <option value="-" ${state.step1.op === "-" ? "selected" : ""}>➖</option>
                <option value="*" ${state.step1.op === "*" ? "selected" : ""}>✖️</option>
                <option value="/" ${state.step1.op === "/" ? "selected" : ""}>➗</option>
              </select>
              <input type="number" id="step1B" class="step-calc-input" placeholder="Núm 2" value="${state.step1.b}" />
              <span style="font-weight:900;">=</span>
              <span class="step-calc-result" id="step1ResBadge">${res1 !== null ? res1 : "?"}</span>
              ${res1 !== null ? `
                <button type="button" class="tool-btn" id="btnUseStep1InStep2" style="font-size:0.78rem; padding:0.25rem 0.5rem;" title="Baixa aquest resultat al Pas 2">
                  ⤵️ Baixa al Pas 2
                </button>
              ` : ""}
            </div>
          </div>

          <!-- PAS 2 -->
          <div>
            <label style="font-size:0.84rem; font-weight:800; color:var(--primary); display:block; margin-bottom:0.25rem;">
              2️⃣ Segona operació (si el problema té més d'un pas):
            </label>
            <div class="step-calc-row">
              <input type="number" id="step2A" class="step-calc-input" placeholder="Núm 1" value="${state.step2.a}" />
              <select id="step2Op" class="step-calc-select" aria-label="Operació pas 2">
                <option value="+" ${state.step2.op === "+" ? "selected" : ""}>➕</option>
                <option value="-" ${state.step2.op === "-" ? "selected" : ""}>➖</option>
                <option value="*" ${state.step2.op === "*" ? "selected" : ""}>✖️</option>
                <option value="/" ${state.step2.op === "/" ? "selected" : ""}>➗</option>
              </select>
              <input type="number" id="step2B" class="step-calc-input" placeholder="Núm 2" value="${state.step2.b}" />
              <span style="font-weight:900;">=</span>
              <span class="step-calc-result" id="step2ResBadge">${res2 !== null ? res2 : "?"}</span>
            </div>
          </div>

          <!-- RESPOSTA FINAL DEL PROBLEMA -->
          <div class="symbolic-answer-zone" style="margin-top:auto; flex-direction:column; align-items:stretch; gap:0.65rem;">
            <div style="display:flex; align-items:center; justify-content:center; flex-wrap:wrap; gap:0.6rem;">
              <label for="ansProblemNumInput" class="answer-zone-prompt">🎯 Resposta final:</label>
              <input type="number" id="ansProblemNumInput" class="whole-num-input" style="width:110px;" placeholder="?" value="${prevProbInput}" />
              <strong style="color:var(--primary);">${ch.unitLabel || ""}</strong>
            </div>

            <div style="display:flex; justify-content:center; flex-wrap:wrap; gap:0.45rem;">
              <button type="button" class="tool-btn" id="btnCopyBlocksToFinal" style="font-size:0.8rem; padding:0.3rem 0.65rem;">
                🪄 Passa del tauler de blocs (${dividedVal !== null ? dividedVal : blocksTotal})
              </button>
              ${res2 !== null ? `
                <button type="button" class="tool-btn" id="btnCopyStep2ToFinal" style="font-size:0.8rem; padding:0.3rem 0.65rem;">
                  🪄 Passa el resultat del Pas 2 (${res2})
                </button>
              ` : res1 !== null ? `
                <button type="button" class="tool-btn" id="btnCopyStep1ToFinal" style="font-size:0.8rem; padding:0.3rem 0.65rem;">
                  🪄 Passa el resultat del Pas 1 (${res1})
                </button>
              ` : ""}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function renderInteractiveStageOnly() {
    const ch = getCurrentChallenge();
    if (!ch) return;
    const stage = document.getElementById("interactiveStage");

    // Salvaguarda els valors escrits actualment a les caselles simbòliques abans de re-renderitzar
    const prevNumInput = document.getElementById("ansNumInput")?.value || "";
    const prevDenInput = document.getElementById("ansDenInput")?.value || "";
    const prevWholeInput = document.getElementById("ansWholeInput")?.value || "";
    const prevProbInput = document.getElementById("ansProblemNumInput")?.value || "";

    if (ch.type === "build_and_write" || ch.type === "identify_locked") {
      const hideBadge = ch.type === "identify_locked";
      stage.innerHTML = `
        <div class="stage-panels-grid">
          ${renderWorkbenchPanelHTML("left", "🛠️ Tauler Manipulatiu de Fraccions", state.leftPanel, {
            allowAddUnit: (ch.maxUnits || 1) > 1,
            hideSymbolicOnLocked: hideBadge
          })}
        </div>

        <div class="symbolic-answer-zone">
          <span class="answer-zone-prompt">✍️ Escriu la fracció representada:</span>
          <div class="fraction-input-widget">
            <div class="frac-input-stack">
              <input type="number" id="ansNumInput" class="frac-num-input" placeholder="Num" value="${prevNumInput}" aria-label="Numerador" />
              <div class="frac-input-divider"></div>
              <input type="number" id="ansDenInput" class="frac-den-input" placeholder="Den" value="${prevDenInput}" aria-label="Denominador" />
            </div>
          </div>
          ${!hideBadge ? `
            <button type="button" class="tool-btn" id="btnCopyFromBoard" title="Copia el numerador i denominador que tens ara mateix al tauler">
              🪄 Passa les peces del tauler a la casella (${state.leftPanel.num}/${state.leftPanel.den})
            </button>
          ` : ""}
        </div>
      `;
    } else if (ch.type === "compare_two") {
      stage.innerHTML = `
        <div class="stage-panels-grid" style="grid-template-columns: 1fr auto 1fr; align-items: center;">
          ${renderWorkbenchPanelHTML("left", "🅰️ Producte Esquerre", state.leftPanel, { allowAddUnit: (ch.maxUnits || 1) > 1 })}

          <div class="comparison-center-column" role="group" aria-label="Tria el símbol de comparació">
            <span style="font-weight:800; font-size:0.85rem; color:var(--text-muted);">Compara</span>
            <button type="button" class="comp-symbol-btn ${state.selectedSymbol === "<" ? "selected" : ""}" data-comp-sym="<">&lt;</button>
            <button type="button" class="comp-symbol-btn ${state.selectedSymbol === "=" ? "selected" : ""}" data-comp-sym="=">=</button>
            <button type="button" class="comp-symbol-btn ${state.selectedSymbol === ">" ? "selected" : ""}" data-comp-sym=">">&gt;</button>
          </div>

          ${renderWorkbenchPanelHTML("right", "🅱️ Producte Dret", state.rightPanel, { allowAddUnit: (ch.maxUnits || 1) > 1 })}
        </div>
      `;
    } else if (ch.type === "equivalence_mirror" || ch.type === "alchemy_transform") {
      const isEqualNow = areEquivalent(state.leftPanel.num, state.leftPanel.den, state.rightPanel.num, state.rightPanel.den);
      const eqStatusHTML = isEqualNow
        ? `<span style="color:var(--emerald); font-weight:900;">✨ Les dues quantitats són EQUIVALENTS!</span>`
        : `<span style="color:var(--text-muted); font-weight:700;">⚖️ Ajusta la figura de la dreta fins que ocupi exactament la mateixa quantitat</span>`;

      stage.innerHTML = `
        <div style="text-align:center; margin-bottom:0.75rem; padding:0.45rem; background:var(--bg-parchment); border-radius:8px; border:1px solid var(--border-color);">
          ${eqStatusHTML}
        </div>

        <div class="stage-panels-grid">
          ${renderWorkbenchPanelHTML("left", "📌 Fracció Inicial (Mostra)", state.leftPanel)}
          ${renderWorkbenchPanelHTML("right", "🔄 Fracció Equivalent (Manipulable)", state.rightPanel, {
            allowAddUnit: (ch.maxUnits || 1) > 1,
            showAlchemySpells: ch.type === "alchemy_transform"
          })}
        </div>

        <div class="symbolic-answer-zone">
          <span class="answer-zone-prompt">✍️ Escriu la fracció equivalent obtinguda:</span>
          <div class="fraction-input-widget">
            <div class="frac-input-stack">
              <input type="number" id="ansNumInput" class="frac-num-input" placeholder="Num" value="${prevNumInput}" aria-label="Numerador equivalent" />
              <div class="frac-input-divider"></div>
              <input type="number" id="ansDenInput" class="frac-den-input" placeholder="Den" value="${prevDenInput}" aria-label="Denominador equivalent" />
            </div>
          </div>
          <button type="button" class="tool-btn" id="btnCopyFromRightBoard">
            🪄 Passa del tauler dret a la casella (${state.rightPanel.num}/${state.rightPanel.den})
          </button>
        </div>
      `;
    } else if (ch.type === "mixed_conversion") {
      stage.innerHTML = `
        <div class="stage-panels-grid">
          ${renderWorkbenchPanelHTML("left", "🍕 Fracció Impròpia al Tauler", state.leftPanel, { allowAddUnit: true })}
        </div>

        <div class="symbolic-answer-zone">
          <span class="answer-zone-prompt">✍️ Escriu el Nombre Mixt (Unitats senceres + Fracció restant):</span>
          <div class="fraction-input-widget">
            <input type="number" id="ansWholeInput" class="whole-num-input" placeholder="U." value="${prevWholeInput}" aria-label="Unitats senceres" />
            <div class="frac-input-stack">
              <input type="number" id="ansNumInput" class="frac-num-input" placeholder="Num" value="${prevNumInput}" aria-label="Numerador" />
              <div class="frac-input-divider"></div>
              <input type="number" id="ansDenInput" class="frac-den-input" placeholder="Den" value="${prevDenInput}" aria-label="Denominador" />
            </div>
          </div>
        </div>
      `;
    } else if (ch.type === "problem_fraction") {
      stage.innerHTML = `
        <div class="stage-panels-grid">
          ${renderWorkbenchPanelHTML("left", "🛒 Tauler de Resolució del Problema", state.leftPanel, { allowAddUnit: (ch.maxUnits || 1) > 1 })}
        </div>

        <div class="symbolic-answer-zone">
          <span class="answer-zone-prompt">✍️ Fracció resultant del problema:</span>
          <div class="fraction-input-widget">
            <div class="frac-input-stack">
              <input type="number" id="ansNumInput" class="frac-num-input" placeholder="Num" value="${prevNumInput}" aria-label="Numerador resposta" />
              <div class="frac-input-divider"></div>
              <input type="number" id="ansDenInput" class="frac-den-input" placeholder="Den" value="${prevDenInput}" aria-label="Denominador resposta" />
            </div>
          </div>
          <button type="button" class="tool-btn" id="btnCopyFromBoard">
            🪄 Passa del tauler a la resposta (${state.leftPanel.num}/${state.leftPanel.den})
          </button>
        </div>
      `;
    } else if (ch.type === "problem_number") {
      const perPiece = (state.showQuantityDistribution && ch.totalQuantity && state.leftPanel.den > 0)
        ? Math.round((ch.totalQuantity / state.leftPanel.den) * 10) / 10
        : null;
      const activeTotalQty = perPiece !== null ? Math.round(perPiece * state.leftPanel.num * 10) / 10 : null;

      stage.innerHTML = `
        <div class="stage-panels-grid">
          ${renderWorkbenchPanelHTML("left", `🛒 Model Visual (Total = ${ch.totalQuantity} ${ch.unitLabel || ""})`, state.leftPanel, {
            allowAddUnit: (ch.maxUnits || 1) > 1,
            perPieceQuantity: perPiece
          })}
        </div>

        <div class="symbolic-answer-zone">
          <button type="button" class="tool-btn" id="btnToggleProblemHelper">
            🪄 ${state.showQuantityDistribution ? "Amaga el repartiment a cada peça" : `Reparteix els ${ch.totalQuantity} dins de les parts del tauler`}
          </button>

          ${activeTotalQty !== null ? `
            <span style="background:var(--gold-light); border:1px solid var(--gold); padding:0.35rem 0.7rem; border-radius:8px; font-weight:800;">
              🧮 Suma de les ${state.leftPanel.num} parts seleccionades: <strong>${activeTotalQty}</strong>
            </span>
          ` : ""}

          <div style="display:flex; align-items:center; gap:0.5rem;">
            <label for="ansProblemNumInput" class="answer-zone-prompt">✍️ Resposta:</label>
            <input type="number" id="ansProblemNumInput" class="whole-num-input" style="width:95px;" placeholder="?" value="${prevProbInput}" />
            <strong style="color:var(--primary);">${ch.unitLabel || ""}</strong>
          </div>
        </div>
      `;
    } else if (ch.type === "general_problem") {
      stage.innerHTML = renderGeneralProblemStageHTML(ch, prevProbInput);
    }
  }

  /* ==========================================================================
     6. VERIFICACIÓ DE REPTES I RETROALIMENTACIÓ FORMATIVA DUA
     ========================================================================== */
  function verifyCurrentChallenge() {
    const ch = getCurrentChallenge();
    if (!ch) return;

    let isCorrect = false;
    let feedbackMsg = "";

    if (ch.type === "build_and_write") {
      let userNum = parseInt(document.getElementById("ansNumInput")?.value, 10);
      let userDen = parseInt(document.getElementById("ansDenInput")?.value, 10);

      // Si l'alumne ha construït la fracció al tauler però no ha omplert les caselles, copiem automàticament del tauler!
      if (isNaN(userNum) && isNaN(userDen)) {
        userNum = state.leftPanel.num;
        userDen = state.leftPanel.den;
        const numEl = document.getElementById("ansNumInput");
        const denEl = document.getElementById("ansDenInput");
        if (numEl && denEl) {
          numEl.value = userNum;
          denEl.value = userDen;
        }
      }

      const boardMatchesExact = state.leftPanel.num === ch.targetNum && state.leftPanel.den === ch.targetDen;
      const inputMatchesExact = userNum === ch.targetNum && userDen === ch.targetDen;

      if (boardMatchesExact && inputMatchesExact) {
        isCorrect = true;
        feedbackMsg = `🌟 Molt bé! Has dividit la unitat en ${ch.targetDen} parts iguals i n'has seleccionat ${ch.targetNum} (${ch.targetNum}/${ch.targetDen}).`;
      } else if (!boardMatchesExact) {
        feedbackMsg = `🔍 Revisa les peces del tauler: ara mateix hi tens representat ${state.leftPanel.num}/${state.leftPanel.den}, però l'exercici demana ${ch.targetNum}/${ch.targetDen}.`;
      } else {
        feedbackMsg = `🔍 La figura del tauler és perfecta (${ch.targetNum}/${ch.targetDen}), però revisa els números que has escrit a la casella!`;
      }
    } else if (ch.type === "identify_locked") {
      const userNum = parseInt(document.getElementById("ansNumInput")?.value, 10);
      const userDen = parseInt(document.getElementById("ansDenInput")?.value, 10);

      if (isNaN(userNum) || isNaN(userDen)) {
        showFeedbackBanner(false, "✍️ Escriu el numerador (dalt) i el denominador (sota) a les caselles abans de comprovar!");
        return;
      }

      if (userNum === ch.targetNum && userDen === ch.targetDen) {
        isCorrect = true;
        feedbackMsg = `🌟 Identificació perfecta! La figura mostra exactament ${ch.targetNum}/${ch.targetDen}.`;
      } else if (userDen !== ch.targetDen) {
        feedbackMsg = `🔍 Fixa't en el denominador (número de sota): compta en quantes parts iguals està dividida UNA unitat sencera (${ch.targetDen} parts).`;
      } else {
        feedbackMsg = `🔍 El denominador (${ch.targetDen}) és correcte, però torna a comptar quantes parts estan seleccionades al numerador!`;
      }
    } else if (ch.type === "compare_two") {
      if (!state.selectedSymbol) {
        showFeedbackBanner(false, "⚖️ Selecciona un dels tres símbols de comparació (<, = o >) al centre del tauler!");
        return;
      }
      if (state.selectedSymbol === ch.correctSymbol) {
        isCorrect = true;
        feedbackMsg = `🌟 Comparació correcta! ${ch.leftNum}/${ch.leftDen} ${ch.correctSymbol} ${ch.rightNum}/${ch.rightDen}.`;
      } else {
        const leftPct = Math.round((ch.leftNum / ch.leftDen) * 100);
        const rightPct = Math.round((ch.rightNum / ch.rightDen) * 100);
        feedbackMsg = `🔍 Observa les barres de proporció: ${ch.leftNum}/${ch.leftDen} ocupa un ${leftPct}% de la unitat i ${ch.rightNum}/${ch.rightDen} n'ocupa un ${rightPct}%.`;
      }
    } else if (ch.type === "equivalence_mirror" || ch.type === "alchemy_transform") {
      let userNum = parseInt(document.getElementById("ansNumInput")?.value, 10);
      let userDen = parseInt(document.getElementById("ansDenInput")?.value, 10);

      if (isNaN(userNum) && isNaN(userDen)) {
        userNum = state.rightPanel.num;
        userDen = state.rightPanel.den;
        const numEl = document.getElementById("ansNumInput");
        const denEl = document.getElementById("ansDenInput");
        if (numEl && denEl) {
          numEl.value = userNum;
          denEl.value = userDen;
        }
      }

      const rightMatchesTarget = state.rightPanel.num === ch.targetNum && state.rightPanel.den === ch.targetDen;
      const inputMatchesTarget = userNum === ch.targetNum && userDen === ch.targetDen;

      if (rightMatchesTarget && inputMatchesTarget) {
        isCorrect = true;
        feedbackMsg = `🌟 Molt ben fet! ${ch.baseNum}/${ch.baseDen} i ${ch.targetNum}/${ch.targetDen} són fraccions equivalents i representen exactament la mateixa quantitat.`;
      } else if (!areEquivalent(ch.baseNum, ch.baseDen, state.rightPanel.num, state.rightPanel.den)) {
        feedbackMsg = `🔍 La figura de la dreta (${state.rightPanel.num}/${state.rightPanel.den}) encara no ocupa la mateixa quantitat que ${ch.baseNum}/${ch.baseDen}. Ajusta les parts!`;
      } else {
        feedbackMsg = `🔍 Molt a prop! Aquest exercici demana específicament la fracció equivalent amb denominador ${ch.targetDen} (${ch.targetNum}/${ch.targetDen}) tant al tauler dret com a la casella.`;
      }
    } else if (ch.type === "mixed_conversion") {
      const userWhole = parseInt(document.getElementById("ansWholeInput")?.value, 10);
      const userNum = parseInt(document.getElementById("ansNumInput")?.value, 10);
      const userDen = parseInt(document.getElementById("ansDenInput")?.value, 10);

      if (isNaN(userWhole) || isNaN(userNum) || isNaN(userDen)) {
        showFeedbackBanner(false, "✍️ Completa la casella d'unitats senceres i la fracció del nombre mixt!");
        return;
      }

      if (userWhole === ch.targetWhole && userNum === ch.targetNum && userDen === ch.targetDen) {
        isCorrect = true;
        feedbackMsg = `🌟 Conversió perfecta! ${ch.initNum}/${ch.initDen} equival a ${ch.targetWhole} unitats senceres i ${ch.targetNum}/${ch.targetDen}.`;
      } else {
        feedbackMsg = `🔍 Mira quantes unitats senceres estan totalment plenes al tauler (${ch.targetWhole}) i quina fracció queda a l'última unitat (${ch.targetNum}/${ch.targetDen}).`;
      }
    } else if (ch.type === "problem_fraction") {
      let userNum = parseInt(document.getElementById("ansNumInput")?.value, 10);
      let userDen = parseInt(document.getElementById("ansDenInput")?.value, 10);

      if (isNaN(userNum) && isNaN(userDen) && state.leftPanel.num > 0) {
        userNum = state.leftPanel.num;
        userDen = state.leftPanel.den;
      }

      if (isNaN(userNum) || isNaN(userDen)) {
        showFeedbackBanner(false, "✍️ Escriu la fracció de resposta o construeix-la al tauler i prem el botó de passar a la casella!");
        return;
      }

      if (areEquivalent(userNum, userDen, ch.targetNum, ch.targetDen)) {
        isCorrect = true;
        feedbackMsg = `🌟 Problema resolt amb èxit! La resposta és ${userNum}/${userDen}.`;
      } else {
        feedbackMsg = `🔍 La fracció ${userNum}/${userDen} no correspon al resultat del problema. Utilitza les pistes graduades o representa les dades al tauler!`;
      }
    } else if (ch.type === "problem_number") {
      const userVal = parseInt(document.getElementById("ansProblemNumInput")?.value, 10);
      if (isNaN(userVal)) {
        showFeedbackBanner(false, "✍️ Escriu el número de resposta a la casella abans de comprovar!");
        return;
      }
      if (userVal === ch.targetNumber) {
        isCorrect = true;
        feedbackMsg = `🌟 Fantàstic! El resultat exacte és ${ch.targetNumber} ${ch.unitLabel || ""}.`;
      } else {
        feedbackMsg = `🔍 ${userVal} no és la quantitat exacta. Prem el botó '🪄 Reparteix els ${ch.totalQuantity} dins de les parts' per veure quant val cada part!`;
      }
    } else if (ch.type === "general_problem") {
      const userVal = parseFloat(document.getElementById("ansProblemNumInput")?.value);
      if (isNaN(userVal)) {
        showFeedbackBanner(false, "✍️ Escriu el resultat a la casella de 'Resposta final' abans de comprovar!");
        return;
      }
      if (Math.abs(userVal - ch.targetNumber) < 0.01) {
        isCorrect = true;
        feedbackMsg = `🌟 Problema resolt magistralment! El resultat és ${ch.targetNumber} ${ch.unitLabel || ""}.`;
      } else {
        feedbackMsg = `🔍 ${userVal} no és el resultat final correcte. Revisa el Model de Barres, posa els blocs de dades al tauler o consulta les 3 pistes graduades!`;
      }
    }

    if (isCorrect) {
      handleSuccess(ch, feedbackMsg);
    } else {
      handleMistake(feedbackMsg);
    }
  }

  function handleSuccess(ch, msg) {
    playMagicSound("success");
    const firstTry = state.attemptsLeft === 2;
    const alreadyDone = Boolean(state.completedChallenges[ch.id]);

    if (!alreadyDone) {
      state.completedChallenges[ch.id] = true;
      state.stars += state.currentLevel;
    }

    if (firstTry) {
      state.streak += 1;
      if (state.streak % 3 === 0 && state.lives < state.maxLives) {
        state.lives += 1;
        msg += " ❤️ Ratxa de 3 encerts: recuperes +1 cor de vida!";
      }
    }

    saveState();
    updateTopHUD();
    updateNavProgressBadges();
    showFeedbackBanner(true, msg);

    // Actualitza els puntets d'exercici completat
    const lvlList = CHALLENGES_DATA[state.currentModule][state.currentLevel];
    document.querySelectorAll(".quest-dot").forEach((dot, idx) => {
      if (lvlList[idx] && state.completedChallenges[lvlList[idx].id]) {
        dot.classList.add("completed");
        dot.textContent = "✓";
      }
    });
  }

  function handleMistake(msg) {
    playMagicSound("error");
    state.streak = 0;
    state.attemptsLeft -= 1;

    if (state.attemptsLeft <= 0) {
      state.lives = Math.max(0, state.lives - 1);
      state.attemptsLeft = 2;
      msg += " 💔 Has esgotat les 2 oportunitats d'aquest intent (-1 vida). Continua provant-ho!";
    } else {
      msg += " 🎯 Et queda 1 oportunitat abans de perdre un cor.";
    }

    saveState();
    updateTopHUD();
    document.getElementById("attemptsBadge").textContent = `🎯 Oportunitats: ${state.attemptsLeft}/2`;
    showFeedbackBanner(false, msg);

    if (state.lives <= 0) {
      openGameOverModal();
    }
  }

  function showFeedbackBanner(isSuccess, text) {
    const banner = document.getElementById("feedbackBanner");
    const msgEl = document.getElementById("feedbackMessage");
    banner.className = `feedback-banner ${isSuccess ? "success" : "error"}`;
    msgEl.textContent = text;
    banner.style.display = "flex";
  }

  function hideFeedbackBanner() {
    const banner = document.getElementById("feedbackBanner");
    if (banner) banner.style.display = "none";
  }

  function hideHintBox() {
    const box = document.getElementById("hintDisplayBox");
    if (box) box.style.display = "none";
    document.querySelectorAll(".hint-btn").forEach(b => b.classList.remove("active"));
  }

  /* ==========================================================================
     7. GUIA I CONCEPTES (SIMULADOR INTERACTIU EN VIU)
     ========================================================================== */
  function renderGrimoriView() {
    const chapter = GRIMORI_CHAPTERS[state.grimoriChapter] || GRIMORI_CHAPTERS.concepte;
    document.querySelectorAll(".grimori-tab").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.chapter === state.grimoriChapter);
    });

    const card = document.getElementById("grimoriLessonCard");
    card.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem; margin-bottom:0.6rem;">
        <span class="challenge-badge">📖 Apartat de la Guia</span>
        <button type="button" class="tts-btn" id="btnSpeakGrimoriChapter">🔊 Escolta l'explicació</button>
      </div>
      ${chapter.html}
    `;

    document.getElementById("btnSpeakGrimoriChapter")?.addEventListener("click", () => {
      speakCatalan(chapter.ttsText);
    });

    updateGrimoriSimulator();
  }

  function updateGrimoriSimulator() {
    const num = parseInt(document.getElementById("grimoriNumRange")?.value || "2", 10);
    const den = parseInt(document.getElementById("grimoriDenRange")?.value || "3", 10);
    const mult = parseInt(document.getElementById("grimoriMultRange")?.value || "2", 10);

    document.getElementById("grimoriNumVal").textContent = num;
    document.getElementById("grimoriDenVal").textContent = den;
    document.getElementById("grimoriMultVal").textContent = `× ${mult}`;

    const eqNum = num * mult;
    const eqDen = den * mult;
    const unitsNeeded = Math.min(3, Math.max(1, Math.ceil(num / den)));

    let baseCircles = "";
    let eqCircles = "";
    for (let u = 0; u < unitsNeeded; u++) {
      baseCircles += renderCircleUnitSVG(u, den, num, true, "grim-base", "var(--piece-active-1)");
      eqCircles += renderCircleUnitSVG(u, eqDen, eqNum, true, "grim-eq", "var(--piece-active-2)");
    }

    const simCanvas = document.getElementById("grimoriSimCanvas");
    simCanvas.innerHTML = `
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.75rem; text-align:center;">
        <div style="background:var(--bg-stage); padding:0.75rem; border-radius:10px; border:1px solid var(--border-color);">
          <div style="font-weight:800; margin-bottom:0.35rem;">Fracció Base: ${renderVerticalFractionHTML(num, den)}</div>
          <div style="display:flex; justify-content:center; flex-wrap:wrap; gap:0.35rem;">${baseCircles}</div>
        </div>
        <div style="background:var(--bg-stage); padding:0.75rem; border-radius:10px; border:1px solid var(--border-color);">
          <div style="font-weight:800; margin-bottom:0.35rem;">Equivalent (×${mult}): ${renderVerticalFractionHTML(eqNum, eqDen)}</div>
          <div style="display:flex; justify-content:center; flex-wrap:wrap; gap:0.35rem;">${eqCircles}</div>
        </div>
      </div>
      <div style="margin-top:0.75rem; text-align:center; font-weight:800; color:var(--primary); background:var(--primary-light); padding:0.5rem; border-radius:8px;">
        ✨ ${num}/${den} = ${eqNum}/${eqDen} · Mateixa quantitat (${Math.round((num / den) * 100)}%)!
      </div>
    `;
  }

  /* ==========================================================================
     8. LABORATORI LLIURE (COMPARADOR LLIURE + MUR DE TIRES DE FRACCIONS)
     ========================================================================== */
  function renderForjaView() {
    const compContainer = document.getElementById("freeLabComparator");
    const isEq = areEquivalent(state.freeLeft.num, state.freeLeft.den, state.freeRight.num, state.freeRight.den);
    const leftVal = state.freeLeft.num / state.freeLeft.den;
    const rightVal = state.freeRight.num / state.freeRight.den;
    const sym = isEq ? "=" : leftVal < rightVal ? "<" : ">";

    compContainer.innerHTML = `
      <div style="text-align:center; margin-bottom:0.85rem;">
        <span style="display:inline-block; background:var(--gold-light); border:2px solid var(--gold); padding:0.4rem 1rem; border-radius:999px; font-weight:900; font-size:1.1rem;">
          ⚖️ Comparació en temps real: ${state.freeLeft.num}/${state.freeLeft.den} ${sym} ${state.freeRight.num}/${state.freeRight.den}
          ${isEq ? " (Són Fraccions Equivalents!)" : ""}
        </span>
      </div>
      <div class="stage-panels-grid">
        ${renderWorkbenchPanelHTML("freeLeft", "🧪 Tauler Esquerre", state.freeLeft, { allowAddUnit: true, showAlchemySpells: true })}
        ${renderWorkbenchPanelHTML("freeRight", "🧪 Tauler Dret", state.freeRight, { allowAddUnit: true, showAlchemySpells: true })}
      </div>
    `;

    renderFractionWall();
  }

  function renderFractionWall() {
    const wallContainer = document.getElementById("fractionWallContainer");
    const summaryBar = document.getElementById("wallSummaryBar");
    if (!wallContainer) return;

    const denominators = [1, 2, 3, 4, 5, 6, 8, 10, 12];
    const rowColors = {
      1: "#4338CA",
      2: "#0D9488",
      3: "#D97706",
      4: "#7C3AED",
      5: "#E11D48",
      6: "#2563EB",
      8: "#059669",
      10: "#9333EA",
      12: "#C026D3"
    };

    const activeFractionsList = [];

    wallContainer.innerHTML = denominators.map(den => {
      const activeIndices = state.wallActive[den] || [];
      if (activeIndices.length > 0) {
        activeFractionsList.push({ num: activeIndices.length, den });
      }
      let bricks = "";
      for (let i = 0; i < den; i++) {
        const isActive = activeIndices.includes(i);
        const bgStyle = isActive ? `background:${rowColors[den]};` : "";
        bricks += `
          <div class="wall-brick ${isActive ? "active" : ""}" style="${bgStyle}"
            data-wall-den="${den}" data-wall-idx="${i}">
            1/${den}
          </div>
        `;
      }
      return `<div class="wall-row">${bricks}</div>`;
    }).join("");

    if (activeFractionsList.length === 0) {
      summaryBar.innerHTML = `✨ Peces seleccionades al mur: <em>Fes clic a qualsevol peça per pintar-la i comparar amplades!</em>`;
    } else {
      const tags = activeFractionsList.map(f => `<strong>${f.num}/${f.den}</strong> (${Math.round((f.num / f.den) * 100)}%)`).join(" · ");
      summaryBar.innerHTML = `🧱 Files amb peces actives: ${tags}`;
    }
  }

  /* ==========================================================================
     9. HUD SUPERIOR, INSÍGNIES I IMPRESSIÓ DE FITXA D'EXERCICIS
     ========================================================================== */
  function getCurrentHeroRank() {
    let current = HERO_RANKS[0];
    for (const r of HERO_RANKS) {
      if (state.stars >= r.minStars) current = r;
    }
    return current;
  }

  function getCompletedCountForModule(modKey) {
    const mod = CHALLENGES_DATA[modKey];
    if (!mod) return 0;
    let count = 0;
    [1, 2, 3].forEach(lvl => {
      (mod[lvl] || []).forEach(ch => {
        if (state.completedChallenges[ch.id]) count++;
      });
    });
    return count;
  }

  function isRelicUnlocked(relic) {
    if (relic.module === "all") {
      return state.stars >= (relic.minStars || 45);
    }
    return getCompletedCountForModule(relic.module) >= (relic.minCompleted || 5);
  }

  function updateTopHUD() {
    const heartsStr = "❤️".repeat(state.lives) + "🖤".repeat(Math.max(0, state.maxLives - state.lives));
    document.getElementById("livesHeartsDisplay").textContent = heartsStr;
    document.getElementById("livesCountBadge").textContent = state.lives;
    document.getElementById("earnedStarsBadge").textContent = state.stars;
    document.getElementById("streakCountBadge").textContent = state.streak;

    const rank = getCurrentHeroRank();
    document.getElementById("playerRankBadge").textContent = rank.name;

    const unlockedCount = KINGDOM_RELICS.filter(isRelicUnlocked).length;
    document.getElementById("relicsCountBadge").textContent = `${unlockedCount}/${KINGDOM_RELICS.length}`;
  }

  function updateNavProgressBadges() {
    ["identificacio", "comparacio", "equivalencia", "transformacio", "problemes", "resolucio_problemes"].forEach(modKey => {
      const badge = document.getElementById(`prog-${modKey}`);
      if (badge) {
        badge.textContent = `${getCompletedCountForModule(modKey)}/15`;
      }
    });
  }

  function renderRelicsModal() {
    const container = document.getElementById("relicsGridContainer");
    container.innerHTML = KINGDOM_RELICS.map(relic => {
      const unlocked = isRelicUnlocked(relic);
      return `
        <div class="relic-item ${unlocked ? "unlocked" : ""}">
          <div class="relic-icon">${relic.icon}</div>
          <div class="relic-name">${relic.name}</div>
          <div class="relic-req">${unlocked ? "✅ Aconseguida!" : relic.reqText}</div>
        </div>
      `;
    }).join("");
  }

  function openGameOverModal() {
    const rank = getCurrentHeroRank();
    document.getElementById("gameOverStarsCount").textContent = state.stars;
    document.getElementById("gameOverRankName").textContent = rank.name;
    document.getElementById("gameOverModal").classList.add("open");
  }

  function generateAndPrintWorksheet() {
    const modSel = document.getElementById("printModuleSelect").value;
    const lvlSel = document.getElementById("printLevelSelect").value;

    const modulesToPrint = modSel === "all"
      ? ["identificacio", "comparacio", "equivalencia", "transformacio", "problemes", "resolucio_problemes"]
      : [modSel === "current" ? (CHALLENGES_DATA[state.currentModule] ? state.currentModule : "identificacio") : modSel];

    const levelsToPrint = lvlSel === "all"
      ? [1, 2, 3]
      : [lvlSel === "current" ? state.currentLevel : Number(lvlSel)];

    const moduleTitles = {
      identificacio: "1. Identificació i Representació de Fraccions",
      comparacio: "2. Comparació de Fraccions",
      equivalencia: "3. Fraccions Equivalents",
      transformacio: "4. Transformació: Amplificació, Simplificació i Nombres Mixtos",
      problemes: "5. Problemes de Fraccions al Supermercat",
      resolucio_problemes: "6. Resolució de Problemes (Operacions fora de fraccions)"
    };

    let itemsHTML = "";
    modulesToPrint.forEach(mKey => {
      levelsToPrint.forEach(lvl => {
        const list = CHALLENGES_DATA[mKey]?.[lvl] || [];
        list.forEach((ch, idx) => {
          itemsHTML += `
            <div class="print-exercise-item">
              <div style="font-weight:800; font-size:10.5pt; margin-bottom:4px;">
                [${moduleTitles[mKey]} · Nivell ${lvl} · Exercici ${idx + 1}] ${ch.title}
              </div>
              <div style="font-size:10pt; margin-bottom:8px;">${ch.instruction}</div>
              <div style="display:flex; align-items:center; justify-content:space-between; border-top:1px dashed #CBD5E1; padding-top:8px; font-size:9.5pt;">
                <span>Espai per dibuixar / calcular les parts:</span>
                <strong>Resposta: _______ / _______</strong>
              </div>
            </div>
          `;
        });
      });
    });

    const container = document.getElementById("printWorksheetContainer");
    container.innerHTML = `
      <div class="print-sheet-header">
        <div>
          <h1 style="font-size:16pt;">🛒 Fraccions al Dia a Dia · Fitxa d'Exercicis (6è de Primària)</h1>
          <p style="font-size:10pt;">Identificació, Comparació, Equivalències, Transformació i Problemes Quotidians</p>
        </div>
        <div style="text-align:right; font-size:10pt;">
          <div>Nom i cognoms: _______________________________</div>
          <div style="margin-top:4px;">Data: ____ / ____ / 202__</div>
        </div>
      </div>
      ${itemsHTML}
    `;

    document.getElementById("printModal").classList.remove("open");
    window.print();
  }

  /* ==========================================================================
     10. GESTIÓ D'ESDEVENIMENTS (CLICS A PECES, BOTONS DUA, NAVEGACIÓ)
     ========================================================================== */
  function getPanelObjectByKey(panelKey) {
    if (panelKey === "left") return state.leftPanel;
    if (panelKey === "right") return state.rightPanel;
    if (panelKey === "freeLeft") return state.freeLeft;
    if (panelKey === "freeRight") return state.freeRight;
    return null;
  }

  function refreshCurrentActiveView() {
    if (state.currentModule === "forja") {
      renderForjaView();
    } else if (state.currentModule === "grimori") {
      renderGrimoriView();
    } else {
      renderInteractiveStageOnly();
    }
  }

  function setupEventListeners() {
    // Pestanyes dels mòduls
    document.getElementById("moduleTabs").addEventListener("click", (e) => {
      const btn = e.target.closest(".nav-tab");
      if (!btn) return;
      playMagicSound("click");
      document.querySelectorAll(".nav-tab").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      state.currentModule = btn.dataset.module;
      state.currentIndex = 0;

      if (CHALLENGES_DATA[state.currentModule]) {
        loadChallengeIntoBoard();
      } else {
        renderMissionHeaderAndStage();
      }
    });

    // Selector de nivell (1, 2, 3)
    document.getElementById("levelBarSection").addEventListener("click", (e) => {
      const lvlBtn = e.target.closest(".level-btn");
      if (lvlBtn) {
        playMagicSound("click");
        state.currentLevel = Number(lvlBtn.dataset.level);
        state.currentIndex = 0;
        loadChallengeIntoBoard();
        return;
      }
      const dotBtn = e.target.closest(".quest-dot");
      if (dotBtn) {
        playMagicSound("click");
        state.currentIndex = Number(dotBtn.dataset.questIdx);
        loadChallengeIntoBoard();
      }
    });

    // Anterior / Següent missió
    document.getElementById("btnPrevChallenge").addEventListener("click", () => {
      playMagicSound("click");
      const list = CHALLENGES_DATA[state.currentModule]?.[state.currentLevel] || [];
      state.currentIndex = (state.currentIndex - 1 + list.length) % list.length;
      loadChallengeIntoBoard();
    });

    document.getElementById("btnNextChallenge").addEventListener("click", () => {
      playMagicSound("click");
      const list = CHALLENGES_DATA[state.currentModule]?.[state.currentLevel] || [];
      state.currentIndex = (state.currentIndex + 1) % list.length;
      loadChallengeIntoBoard();
    });

    // Selector de Forma Màgica (Cercle, Barra, Cristalls, Recta)
    document.querySelector(".shape-selector-group").addEventListener("click", (e) => {
      const btn = e.target.closest(".shape-btn");
      if (!btn) return;
      playMagicSound("click");
      state.currentShape = btn.dataset.shape;
      document.querySelectorAll(".shape-btn").forEach(b => b.classList.toggle("active", b === btn));
      refreshCurrentActiveView();
    });

    // Reinicia el tauler de la missió actual
    document.getElementById("btnResetBoard").addEventListener("click", () => {
      playMagicSound("click");
      loadChallengeIntoBoard();
    });

    // Comprova la missió
    document.getElementById("btnVerifyChallenge").addEventListener("click", () => {
      verifyCurrentChallenge();
    });

    // Pistes graduades DUA (1, 2, 3)
    document.querySelector(".hint-buttons-group").addEventListener("click", (e) => {
      const btn = e.target.closest(".hint-btn");
      if (!btn) return;
      playMagicSound("click");
      const step = Number(btn.dataset.hintStep);
      const ch = getCurrentChallenge();
      if (!ch || !ch.hints || !ch.hints[step]) return;

      document.querySelectorAll(".hint-btn").forEach(b => b.classList.toggle("active", b === btn));
      const stepLabels = ["💡 Pista 1 (Comprensió):", "🧭 Pista 2 (Manipulació):", "📜 Pista 3 (Pas resolutiu):"];
      document.getElementById("hintStepLabel").textContent = stepLabels[step] || "💡 Pista:";
      document.getElementById("hintTextContent").textContent = ch.hints[step];
      document.getElementById("hintDisplayBox").style.display = "flex";
    });

    // Botó d'accés ràpid al Grimori des de qualsevol missió
    document.getElementById("btnQuickGrimori").addEventListener("click", () => {
      playMagicSound("click");
      document.querySelectorAll(".nav-tab").forEach(b => {
        b.classList.toggle("active", b.dataset.module === "grimori");
      });
      state.currentModule = "grimori";
      renderMissionHeaderAndStage();
    });

    // Botons TTS de veu en català
    document.getElementById("btnSpeakInstruction").addEventListener("click", () => {
      const ch = getCurrentChallenge();
      if (ch) speakCatalan(`${ch.title}. ${ch.lore || ""}. ${ch.instruction}`);
    });

    document.getElementById("btnSpeakHint").addEventListener("click", () => {
      const txt = document.getElementById("hintTextContent")?.textContent;
      if (txt) speakCatalan(txt);
    });

    document.getElementById("btnSpeakFeedback").addEventListener("click", () => {
      const txt = document.getElementById("feedbackMessage")?.textContent;
      if (txt) speakCatalan(txt);
    });

    document.getElementById("btnSpeakGrimoriIntro").addEventListener("click", () => {
      speakCatalan("Benvingut a la Guia de les Fraccions i les Equivalències en el dia a dia. Tria un dels quatre apartats i experimenta amb el Simulador en Viu!");
    });

    // Delegació d'esdeveniments d'interacció manipulativa a l'escenari i a la Forja Lliure
    document.querySelector(".app-container").addEventListener("click", (e) => {
      // 1. Clic directe sobre una peça SVG d'una fracció
      const piece = e.target.closest(".interactive-svg-piece");
      if (piece) {
        const panelKey = piece.dataset.panel;
        const pieceIdx = Number(piece.dataset.pieceIndex);
        const panelObj = getPanelObjectByKey(panelKey);
        if (!panelObj || panelObj.locked) return;

        playMagicSound("click");
        // Si es fa clic a l'última peça activa, la desactiva; altrament activa fins a pieceIdx + 1
        if (panelObj.num === pieceIdx + 1) {
          panelObj.num = pieceIdx;
        } else {
          panelObj.num = pieceIdx + 1;
        }
        refreshCurrentActiveView();
        return;
      }

      // 2. Botons +/- de Numerador, Denominador i Unitats
      const stepBtn = e.target.closest(".step-btn");
      if (stepBtn) {
        const action = stepBtn.dataset.action;
        const panelKey = stepBtn.dataset.panel;
        const panelObj = getPanelObjectByKey(panelKey);
        if (!panelObj || panelObj.locked) return;

        playMagicSound("click");
        if (action === "num-minus") {
          panelObj.num = Math.max(0, panelObj.num - 1);
        } else if (action === "num-plus") {
          panelObj.num = Math.min(panelObj.den * 3, panelObj.num + 1);
          if (panelObj.num > panelObj.den * (panelObj.maxUnits || 1)) {
            panelObj.maxUnits = Math.min(3, Math.ceil(panelObj.num / panelObj.den));
          }
        } else if (action === "den-minus") {
          panelObj.den = Math.max(1, panelObj.den - 1);
          panelObj.num = Math.min(panelObj.num, panelObj.den * 3);
        } else if (action === "den-plus") {
          panelObj.den = Math.min(12, panelObj.den + 1);
        } else if (action === "unit-minus") {
          panelObj.maxUnits = Math.max(1, (panelObj.maxUnits || 1) - 1);
          panelObj.num = Math.min(panelObj.num, panelObj.den * panelObj.maxUnits);
        } else if (action === "unit-plus") {
          panelObj.maxUnits = Math.min(3, (panelObj.maxUnits || 1) + 1);
        }
        refreshCurrentActiveView();
        return;
      }

      // 3. Botons d'Encanteri d'Alquímia (Amplificar ×k / Simplificar ÷k)
      const spellBtn = e.target.closest(".spell-chip-btn");
      if (spellBtn) {
        const spell = spellBtn.dataset.spell;
        const factor = Number(spellBtn.dataset.factor);
        const panelKey = spellBtn.dataset.panel;
        const panelObj = getPanelObjectByKey(panelKey);
        if (!panelObj) return;

        if (spell === "mult") {
          if (panelObj.den * factor > 24) {
            showFeedbackBanner(false, `⚠️ El denominador ja és massa gran per multiplicar per ${factor}! Reinicia les peces si vols tornar a començar.`);
            return;
          }
          playMagicSound("spell");
          panelObj.num *= factor;
          panelObj.den *= factor;
          hideFeedbackBanner();
          refreshCurrentActiveView();
        } else if (spell === "div") {
          if (panelObj.num % factor === 0 && panelObj.den % factor === 0 && panelObj.den / factor >= 1) {
            playMagicSound("spell");
            panelObj.num /= factor;
            panelObj.den /= factor;
            hideFeedbackBanner();
            refreshCurrentActiveView();
          } else {
            playMagicSound("error");
            showFeedbackBanner(false, `🗡️ No podem simplificar ${panelObj.num}/${panelObj.den} dividint entre ${factor}, perquè tant el numerador (${panelObj.num}) com el denominador (${panelObj.den}) han de ser divisibles exactament entre ${factor}!`);
          }
        }
        return;
      }

      // 4. Botons de símbol de comparació (<, =, >)
      const compBtn = e.target.closest(".comp-symbol-btn");
      if (compBtn) {
        playMagicSound("click");
        state.selectedSymbol = compBtn.dataset.compSym;
        refreshCurrentActiveView();
        return;
      }

      // 5. Botó per copiar del tauler a la casella simbòlica
      if (e.target.closest("#btnCopyFromBoard")) {
        playMagicSound("spell");
        const numInput = document.getElementById("ansNumInput");
        const denInput = document.getElementById("ansDenInput");
        if (numInput && denInput) {
          numInput.value = state.leftPanel.num;
          denInput.value = state.leftPanel.den;
        }
        return;
      }

      if (e.target.closest("#btnCopyFromRightBoard")) {
        playMagicSound("spell");
        const numInput = document.getElementById("ansNumInput");
        const denInput = document.getElementById("ansDenInput");
        if (numInput && denInput) {
          numInput.value = state.rightPanel.num;
          denInput.value = state.rightPanel.den;
        }
        return;
      }

      // 6. Botó d'ajuda visual de repartiment en problemes d'una quantitat
      if (e.target.closest("#btnToggleProblemHelper")) {
        playMagicSound("spell");
        state.showQuantityDistribution = !state.showQuantityDistribution;
        refreshCurrentActiveView();
        return;
      }

      // 7. Clic als maons del Mur de Fraccions (Forja Lliure)
      const brick = e.target.closest(".wall-brick");
      if (brick) {
        playMagicSound("click");
        const den = Number(brick.dataset.wallDen);
        const idx = Number(brick.dataset.wallIdx);
        const arr = state.wallActive[den] || [];
        if (arr.includes(idx)) {
          state.wallActive[den] = arr.filter(x => x !== idx);
        } else {
          state.wallActive[den] = [...arr, idx].sort((a, b) => a - b);
        }
        renderFractionWall();
        return;
      }

      // 8. Controls del Tauler Manipulatiu de Resolució de Problemes (fora de fraccions)
      const addBlockBtn = e.target.closest("[data-add-block]");
      if (addBlockBtn) {
        playMagicSound("click");
        const val = Number(addBlockBtn.dataset.addBlock);
        if (!isNaN(val)) {
          state.solverBlocks.push(val);
          refreshCurrentActiveView();
        }
        return;
      }

      const rmBlockBtn = e.target.closest("[data-remove-block]");
      if (rmBlockBtn) {
        playMagicSound("click");
        const idx = Number(rmBlockBtn.dataset.removeBlock);
        state.solverBlocks.splice(idx, 1);
        refreshCurrentActiveView();
        return;
      }

      if (e.target.closest("#btnAddCustomBlocks")) {
        playMagicSound("click");
        const val = parseFloat(document.getElementById("customBlockValInput")?.value || "0");
        const times = Math.min(24, Math.max(1, parseInt(document.getElementById("customBlockTimesInput")?.value || "1", 10)));
        if (!isNaN(val) && val !== 0) {
          for (let i = 0; i < times; i++) {
            state.solverBlocks.push(val);
          }
          refreshCurrentActiveView();
        }
        return;
      }

      if (e.target.closest("#btnLoadSuggestedBlocks")) {
        playMagicSound("spell");
        const ch = getCurrentChallenge();
        if (ch && Array.isArray(ch.suggestedBlocks)) {
          state.solverBlocks = [...ch.suggestedBlocks];
          refreshCurrentActiveView();
        }
        return;
      }

      if (e.target.closest("#btnClearSolverBlocks")) {
        playMagicSound("click");
        state.solverBlocks = [];
        state.solverDivGroups = 1;
        refreshCurrentActiveView();
        return;
      }

      if (e.target.closest("#btnDivGroupsMinus")) {
        playMagicSound("click");
        state.solverDivGroups = Math.max(1, state.solverDivGroups - 1);
        refreshCurrentActiveView();
        return;
      }

      if (e.target.closest("#btnDivGroupsPlus")) {
        playMagicSound("click");
        state.solverDivGroups = Math.min(30, state.solverDivGroups + 1);
        refreshCurrentActiveView();
        return;
      }

      if (e.target.closest("#btnToggleBarModelGuide")) {
        playMagicSound("click");
        state.showBarModelGuide = !state.showBarModelGuide;
        refreshCurrentActiveView();
        return;
      }

      if (e.target.closest("#btnUseStep1InStep2")) {
        playMagicSound("spell");
        const r1 = computeStepResult(state.step1);
        if (r1 !== null) {
          state.step2.a = String(r1);
          refreshCurrentActiveView();
        }
        return;
      }

      if (e.target.closest("#btnCopyBlocksToFinal")) {
        playMagicSound("spell");
        const blocksTotal = state.solverBlocks.reduce((acc, v) => acc + v, 0);
        const valToCopy = state.solverDivGroups > 1
          ? Math.round((blocksTotal / state.solverDivGroups) * 100) / 100
          : blocksTotal;
        const ansEl = document.getElementById("ansProblemNumInput");
        if (ansEl) ansEl.value = valToCopy;
        return;
      }

      if (e.target.closest("#btnCopyStep1ToFinal")) {
        playMagicSound("spell");
        const r1 = computeStepResult(state.step1);
        const ansEl = document.getElementById("ansProblemNumInput");
        if (ansEl && r1 !== null) ansEl.value = r1;
        return;
      }

      if (e.target.closest("#btnCopyStep2ToFinal")) {
        playMagicSound("spell");
        const r2 = computeStepResult(state.step2);
        const ansEl = document.getElementById("ansProblemNumInput");
        if (ansEl && r2 !== null) ansEl.value = r2;
        return;
      }
    });

    // Actualització en temps real del Quadern d'Operacions Pas a Pas (Pas 1 i Pas 2)
    function handleStepCalcChange(e) {
      const id = e.target.id;
      if (["step1A", "step1Op", "step1B", "step2A", "step2Op", "step2B"].includes(id)) {
        state.step1.a = document.getElementById("step1A")?.value ?? state.step1.a;
        state.step1.op = document.getElementById("step1Op")?.value ?? state.step1.op;
        state.step1.b = document.getElementById("step1B")?.value ?? state.step1.b;
        state.step2.a = document.getElementById("step2A")?.value ?? state.step2.a;
        state.step2.op = document.getElementById("step2Op")?.value ?? state.step2.op;
        state.step2.b = document.getElementById("step2B")?.value ?? state.step2.b;

        const r1 = computeStepResult(state.step1);
        const r2 = computeStepResult(state.step2);
        const b1 = document.getElementById("step1ResBadge");
        const b2 = document.getElementById("step2ResBadge");
        if (b1) b1.textContent = r1 !== null ? r1 : "?";
        if (b2) b2.textContent = r2 !== null ? r2 : "?";
      }
    }
    document.querySelector(".app-container").addEventListener("input", handleStepCalcChange);
    document.querySelector(".app-container").addEventListener("change", handleStepCalcChange);

    // Netejar el Mur de Fraccions
    document.getElementById("btnClearFractionWall").addEventListener("click", () => {
      playMagicSound("click");
      Object.keys(state.wallActive).forEach(k => { state.wallActive[k] = []; });
      renderFractionWall();
    });

    // Pestanyes dels capítols del Grimori i controls del simulador
    document.querySelector(".grimori-chapter-tabs").addEventListener("click", (e) => {
      const tab = e.target.closest(".grimori-tab");
      if (!tab) return;
      playMagicSound("click");
      state.grimoriChapter = tab.dataset.chapter;
      renderGrimoriView();
    });

    ["grimoriNumRange", "grimoriDenRange", "grimoriMultRange"].forEach(id => {
      document.getElementById(id)?.addEventListener("input", () => {
        updateGrimoriSimulator();
      });
    });

    // Barra DUA desplegable i opcions d'accessibilitat
    document.getElementById("btnToggleDuaPanel").addEventListener("click", () => {
      const panel = document.getElementById("duaToolbarPanel");
      const isOpen = panel.classList.toggle("open");
      document.getElementById("btnToggleDuaPanel").setAttribute("aria-expanded", String(isOpen));
    });

    document.getElementById("btnToggleEasyRead").addEventListener("click", (e) => {
      state.easyRead = !state.easyRead;
      document.body.classList.toggle("easy-read", state.easyRead);
      e.currentTarget.classList.toggle("active", state.easyRead);
      saveState();
    });

    document.getElementById("btnToggleDarkTheme").addEventListener("click", (e) => {
      state.darkTheme = !state.darkTheme;
      document.body.classList.toggle("dark-theme", state.darkTheme);
      e.currentTarget.classList.toggle("active", state.darkTheme);
      saveState();
    });

    document.getElementById("btnToggleColorblind").addEventListener("click", (e) => {
      state.colorblindMode = !state.colorblindMode;
      document.body.classList.toggle("colorblind-mode", state.colorblindMode);
      e.currentTarget.classList.toggle("active", state.colorblindMode);
      saveState();
      refreshCurrentActiveView();
    });

    document.getElementById("btnToggleSound").addEventListener("click", (e) => {
      state.soundEnabled = !state.soundEnabled;
      e.currentTarget.classList.toggle("active", state.soundEnabled);
      e.currentTarget.textContent = state.soundEnabled ? "🔔 Sons d'Encert: Activats" : "🔇 Sons d'Encert: Silenciats";
      saveState();
    });

    document.getElementById("btnResetProgress").addEventListener("click", () => {
      if (confirm("Vols reiniciar les estrelles, les vides i els exercicis completats a zero?")) {
        state.stars = 0;
        state.lives = 10;
        state.streak = 0;
        state.completedChallenges = {};
        saveState();
        loadChallengeIntoBoard();
      }
    });

    // Modal de Relíquies
    document.getElementById("btnOpenRelicsModal").addEventListener("click", () => {
      renderRelicsModal();
      document.getElementById("relicsModal").classList.add("open");
    });
    document.getElementById("btnCloseRelicsModal").addEventListener("click", () => {
      document.getElementById("relicsModal").classList.remove("open");
    });

    // Modal d'Impressió
    document.getElementById("btnOpenPrintModal").addEventListener("click", () => {
      document.getElementById("printModal").classList.add("open");
    });
    document.getElementById("btnClosePrintModal").addEventListener("click", () => {
      document.getElementById("printModal").classList.remove("open");
    });
    document.getElementById("btnCancelPrintModal").addEventListener("click", () => {
      document.getElementById("printModal").classList.remove("open");
    });
    document.getElementById("btnGenerateAndPrint").addEventListener("click", () => {
      generateAndPrintWorksheet();
    });

    // Modal de la Font de Curació (Recuperar 10 vides)
    document.getElementById("btnRestoreLives").addEventListener("click", () => {
      playMagicSound("success");
      state.lives = 10;
      state.attemptsLeft = 2;
      saveState();
      updateTopHUD();
      document.getElementById("gameOverModal").classList.remove("open");
    });
  }

  /* ==========================================================================
     11. INICIALITZACIÓ DE L'AVENTURA
     ========================================================================== */
  function initApp() {
    loadSavedState();

    // Aplica preferències DUA desades
    document.body.classList.toggle("easy-read", state.easyRead);
    document.body.classList.toggle("dark-theme", state.darkTheme);
    document.body.classList.toggle("colorblind-mode", state.colorblindMode);
    document.getElementById("btnToggleEasyRead")?.classList.toggle("active", state.easyRead);
    document.getElementById("btnToggleDarkTheme")?.classList.toggle("active", state.darkTheme);
    document.getElementById("btnToggleColorblind")?.classList.toggle("active", state.colorblindMode);
    const soundBtn = document.getElementById("btnToggleSound");
    if (soundBtn) {
      soundBtn.classList.toggle("active", state.soundEnabled);
      soundBtn.textContent = state.soundEnabled ? "🔔 Sons d'Encert: Activats" : "🔇 Sons d'Encert: Silenciats";
    }

    setupEventListeners();
    loadChallengeIntoBoard();
  }

  document.addEventListener("DOMContentLoaded", initApp);
})();
