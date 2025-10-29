import { STORY } from './story.js';

// --- Minimal accessible engine ---
const $ = (sel) => document.querySelector(sel);
const sceneTitle = $('#sceneTitle');
const sceneText  = $('#sceneText');
const choicesEl  = $('#choices');
const progressBar= $('#progressBar');

const state = { storyId: STORY.id, nodeId: STORY.start, history: [] };
const nodeMap = new Map(STORY.nodes.map(n => [n.id, n]));

function percentProgress(){
  const unique = new Set(state.history.concat(state.nodeId));
  return Math.round((unique.size / STORY.nodes.length) * 100);
}

function render(){
  const node = nodeMap.get(state.nodeId);
  sceneTitle.textContent = node.title;
  sceneText.innerHTML = node.text;
  const p = percentProgress();
  progressBar.style.width = p + '%';
  choicesEl.innerHTML = '';
  (node.choices || []).forEach((ch, idx) => {
    const btn = document.createElement('button');
    btn.className = 'choice';
    btn.textContent = `${idx+1}. ${ch.text}`;
    btn.setAttribute('data-key', String(idx+1));
    btn.addEventListener('click', () => go(ch));
    choicesEl.appendChild(btn);
  });
  sceneTitle.setAttribute('tabindex','-1');
  sceneTitle.focus({ preventScroll: true });
}

function go(choice){
  if(choice.next && nodeMap.has(choice.next)){
    state.history.push(state.nodeId);
    state.nodeId = choice.next;
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
