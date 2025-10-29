import { STORY } from './story.js';

// --- Minimal accessible engine ---
const $ = (sel) => document.querySelector(sel);
const sceneTitle = $('#sceneTitle');
const sceneText  = $('#sceneText');
const choicesEl  = $('#choices');
const progressBar= $('#progressBar');

// Score tracking for microcredential
let currentScore = 0;
let autoAdvanceTimer = null;

const state = { storyId: STORY.id, nodeId: STORY.start, history: [] };
const nodeMap = new Map(STORY.nodes.map(n => [n.id, n]));

function percentProgress(){
  const unique = new Set(state.history.concat(state.nodeId));
  return Math.round((unique.size / STORY.nodes.length) * 100);
}

function render(){
  const node = nodeMap.get(state.nodeId);
  
  // Display node content
  displayNodeContent(node);
  
  // Detect score changes in node text
  detectScoreChange(node);
  
  // Update progress
  const p = percentProgress();
  progressBar.style.width = p + '%';
  
  // Set focus to title for accessibility
  sceneTitle.setAttribute('tabindex','-1');
  sceneTitle.focus({ preventScroll: true });
  
  // Handle auto-advance if this node has it
  if (node.autoAdvance && (!node.choices || node.choices.length === 0)) {
    const delay = node.autoAdvanceDelay || 5000;
    showCountdown(delay);
    
    // Clear any existing timer
    if (autoAdvanceTimer) {
      clearTimeout(autoAdvanceTimer);
    }
    
    // Set new auto-advance timer
    autoAdvanceTimer = setTimeout(() => {
      autoAdvanceTimer = null;
      showNode(node.autoAdvance);
    }, delay);
  }
}

// Display node content
function displayNodeContent(node) {
  sceneTitle.textContent = node.title;
  sceneText.innerHTML = node.text;
  choicesEl.innerHTML = '';
  (node.choices || []).forEach((ch, idx) => {
    const btn = document.createElement('button');
    btn.className = 'choice';
    btn.textContent = `${idx+1}. ${ch.text}`;
    btn.setAttribute('data-key', String(idx+1));
    btn.addEventListener('click', () => makeChoice(ch));
    choicesEl.appendChild(btn);
  });
}

// Show countdown timer for auto-advance
function showCountdown(delay) {
  const seconds = Math.ceil(delay / 1000);
  const contentArea = sceneText;
  
  const countdownDiv = document.createElement('div');
  countdownDiv.id = 'auto-advance-countdown';
  countdownDiv.className = 'countdown';
  countdownDiv.innerHTML = `<p><em>Continuing in ${seconds} seconds...</em></p>`;
  
  if (contentArea) {
    contentArea.appendChild(countdownDiv);
  }
  
  // Update countdown every second
  let remaining = seconds;
  const interval = setInterval(() => {
    remaining--;
    const countdownEl = document.getElementById('auto-advance-countdown');
    if (remaining > 0 && countdownEl) {
      countdownEl.innerHTML = `<p><em>Continuing in ${remaining} seconds...</em></p>`;
    } else {
      clearInterval(interval);
    }
  }, 1000);
}

// Detect score changes in node text
function detectScoreChange(node) {
  const text = node.text;
  
  if (text.includes('+2 Points')) {
    currentScore += 2;
  } else if (text.includes('+0 Points')) {
    // No change but acknowledged
  }
  
  updateAllScoreDisplays();
}

// Update all score displays in the page
function updateAllScoreDisplays() {
  // Update [calculated] and [new total] placeholders
  const scoreElements = document.querySelectorAll('[id*="score"]');
  scoreElements.forEach(el => {
    if (el.textContent.includes('[calculated]') || el.textContent.includes('[new total]') || el.textContent.includes('[same total]')) {
      el.textContent = currentScore;
    }
  });
  
  // Update final score
  const finalScore = document.getElementById('final-score');
  if (finalScore && finalScore.textContent.includes('[calculated]')) {
    finalScore.textContent = currentScore;
  }
}

// Handle user choices (cancels auto-advance)
function makeChoice(choice) {
  if (autoAdvanceTimer) {
    clearTimeout(autoAdvanceTimer);
    autoAdvanceTimer = null;
  }
  showNode(choice.next);
}

// Show a node by ID
function showNode(nodeId) {
  if (nodeMap.has(nodeId)) {
    state.history.push(state.nodeId);
    state.nodeId = nodeId;
    render();
  }
}

document.addEventListener('keydown', (e) => {
  if(e.altKey || e.ctrlKey || e.metaKey) return;
  const tag = (e.target && e.target.tagName) || '';
  if(tag === 'INPUT' || tag === 'TEXTAREA') return;
  if(/^[1-9]$/.test(e.key)){
    const btn = [...choicesEl.querySelectorAll('.choice')].find(b => b.getAttribute('data-key') === e.key);
    if(btn){ e.preventDefault(); btn.click(); }
  } else if(e.key.toLowerCase() === 'b'){
    e.preventDefault(); const prev = state.history.pop(); if(prev) { state.nodeId = prev; render(); }
  }
});

// Controls
document.getElementById('restartBtn').addEventListener('click', () => { state.nodeId = STORY.start; state.history = []; render(); });
const contrastBtn = document.getElementById('contrastBtn');
function applyContrast(on){
  document.documentElement.setAttribute('data-contrast', on ? 'high' : 'normal');
  contrastBtn.setAttribute('aria-pressed', on ? 'true' : 'false');
  sessionStorage.setItem('DAM_CONTRAST', on ? '1' : '0');
}
contrastBtn.addEventListener('click', () => {
  const on = contrastBtn.getAttribute('aria-pressed') !== 'true';
  applyContrast(on);
});
applyContrast(sessionStorage.getItem('DAM_CONTRAST') === '1');

render();
