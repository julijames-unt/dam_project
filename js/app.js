// Story with setup + POUR menu (unchanged logic)
const STORY = {
  id: 'dam-intro-v03',
  start: 'intro-1',
  nodes: [
    // --- SETUP (Intro) ---
    {
      id: 'intro-1',
      title: 'Start Here',
      text: `<p>It’s prep day. You’re updating your LMS and pulling in last semester’s materials. Accessibility is on the list, but it’s felt abstract and time-consuming.</p>
             <p>Today you’ll take a practical, bite-sized pass to remove a few barriers right away.</p>`,
      choices: [
        { text: 'Okay — what’s the context for this check?', next: 'intro-2' },
        { text: 'Skip setup and jump to the menu', next: 'menu' }
      ]
    },
    {
      id: 'intro-2',
      title: 'What you’re optimizing for',
      text: `<ul>
               <li><strong>Students using keyboard only</strong> (no mouse).</li>
               <li><strong>Students using screen readers</strong> who rely on structure and alt text.</li>
               <li><strong>Students on mobile</strong> or low-bandwidth connections.</li>
             </ul>
             <p>Small changes in the right places help everyone — not just students with accommodations.</p>`,
      choices: [
        { text: 'Got it — how will we decide what to fix first?', next: 'intro-3' },
        { text: 'Jump to menu', next: 'menu' }
      ]
    },
    {
      id: 'intro-3',
      title: 'Your guide',
      text: `<p>You’ll use the <em>Digital Accessibility Matrix</em> to pick focused actions across four areas: Perceivable, Operable, Understandable, Robust (POUR).</p>
             <p>Pick one area to start. You can circle back and explore others anytime.</p>`,
      choices: [
        { text: 'Open the menu', next: 'menu' },
        { text: 'Remind me what each section covers', next: 'intro-4' }
      ]
    },
    {
      id: 'intro-4',
      title: 'POUR at a glance',
      text: `<ul>
               <li><strong>Perceivable</strong>: Captions, alt text, contrast.</li>
               <li><strong>Operable</strong>: Keyboard access, proper headings.</li>
               <li><strong>Understandable</strong>: Plain language, meaningful links, consistent layout.</li>
               <li><strong>Robust</strong>: Works across devices and assistive tech.</li>
             </ul>`,
      choices: [ { text: 'Open the menu', next: 'menu' } ]
    },

    // --- MENU ---
    {
      id: 'menu',
      title: 'Where do you want to start?',
      text: `<p>Pick a section of the Digital Accessibility Matrix to begin. You can return here anytime.</p>`,
      choices: [
        { text: 'Perceivable (captions, alt text, contrast)', next: 'p-intro' },
        { text: 'Operable (keyboard access, headings, real text)', next: 'o-intro' },
        { text: 'Understandable (clear language, meaningful links)', next: 'u-intro' },
        { text: 'Robust (works across devices & with AT)', next: 'r-intro' },
        { text: 'Replay the setup', next: 'intro-1' }
      ]
    },

    // --- PERCEIVABLE ---
    {
      id: 'p-intro',
      title: 'Perceivable: Get the basics right',
      text: `<p>Information must be presented in ways users can perceive: captions for audio/video, alt text for images, adequate color contrast, and no info by color alone.</p>`,
      choices: [
        { text: 'Add captions/transcripts to Week 1 video', next: 'p-video' },
        { text: 'Audit images and write concise alt text', next: 'p-alt' },
        { text: 'Check color contrast & color-only cues', next: 'p-contrast' },
        { text: 'Back to menu', next: 'menu' }
      ]
    },
    { id: 'p-video', title: 'Video: captions/transcript', text: `<p>Your lecture video lacks captions. What\'s your move?</p>`,
      choices: [
        { text: 'Generate auto-captions, then edit for accuracy', next: 'p-done' },
        { text: 'Provide a transcript if captions aren\'t ready yet', next: 'p-done' },
        { text: 'Skip for now (not recommended)', next: 'p-remind' }
      ]
    },
    { id: 'p-alt', title: 'Images: alternative text', text: `<p>Images need alt text that conveys purpose. Decorative images should be marked decorative.</p>`,
      choices: [
        { text: 'Write meaningful alt text for key diagrams', next: 'p-done' },
        { text: 'Mark purely decorative images correctly', next: 'p-done' },
        { text: 'Use the file name as alt text (nope)', next: 'p-remind' }
      ]
    },
    { id: 'p-contrast', title: 'Color & contrast', text: `<p>Ensure 4.5:1 (normal text) / 3:1 (large text) contrast and avoid color-only meaning.</p>`,
      choices: [
        { text: 'Run a contrast checker and fix low-contrast text', next: 'p-done' },
        { text: 'Add icons/patterns to supplement color cues', next: 'p-done' },
        { text: 'Leave green/red alone (problematic)', next: 'p-remind' }
      ]
    },
    { id: 'p-remind', title: 'Not quite there', text: `<p>These items are high-impact for many learners. Plan a fix soon.</p>`, choices: [ { text: 'Back to Perceivable', next: 'p-intro' }, { text: 'Menu', next: 'menu' } ] },
    { id: 'p-done', title: 'Perceivable improvements made', text: `<p>Nice. You\'ve improved perceivability. Keep going or explore another area.</p>`, choices: [ { text: 'More in Perceivable', next: 'p-intro' }, { text: 'Menu', next: 'menu' } ] },

    // --- OPERABLE ---
    {
      id: 'o-intro', title: 'Operable: Navigate by keyboard',
      text: `<p>Users must be able to operate content with keyboard alone. Ensure focus order, real headings, and avoid text-as-image.</p>`,
      choices: [
        { text: 'Test Week 1 page with Tab/Shift+Tab', next: 'o-keyboard' },
        { text: 'Convert image-of-text slides to real text', next: 'o-text' },
        { text: 'Apply proper H1–H3 heading structure', next: 'o-headings' },
        { text: 'Back to menu', next: 'menu' }
      ]
    },
    { id: 'o-keyboard', title: 'Keyboard first', text: `<p>Tab through the page. You find a focus trap in a modal.</p>`,
      choices: [
        { text: 'Add a close button and trap focus inside the modal with escape support', next: 'o-done' },
        { text: 'Leave it; users can refresh (not accessible)', next: 'o-remind' }
      ]
    },
    { id: 'o-text', title: 'Real text, not images', text: `<p>Scanned PDFs and slide images block keyboard/screen readers.</p>`,
      choices: [
        { text: 'Replace with accessible PDFs or native documents', next: 'o-done' },
        { text: 'Keep as-is (students will struggle)', next: 'o-remind' }
      ]
    },
    { id: 'o-headings', title: 'Headings that work', text: `<p>Apply semantic headings so users can navigate by heading.</p>`,
      choices: [
        { text: 'Use built-in H1–H3 styles instead of bolding', next: 'o-done' },
        { text: 'Leave visual styling only (not semantic)', next: 'o-remind' }
      ]
    },
    { id: 'o-remind', title: 'Not quite there', text: `<p>These changes remove major barriers for keyboard users. Circle back soon.</p>`, choices: [ { text: 'Back to Operable', next: 'o-intro' }, { text: 'Menu', next: 'menu' } ] },
    { id: 'o-done', title: 'Operable improvements made', text: `<p>Great. Navigation is improving.</p>`, choices: [ { text: 'More in Operable', next: 'o-intro' }, { text: 'Menu', next: 'menu' } ] },

    // --- UNDERSTANDABLE ---
    {
      id: 'u-intro', title: 'Understandable: Clear & consistent',
      text: `<p>Use plain language, consistent structure, and meaningful link text so learners know what to do and where a link goes.</p>`,
      choices: [
        { text: 'Rewrite instructions in plain, concise steps', next: 'u-plain' },
        { text: 'Replace “click here” with descriptive link text', next: 'u-links' },
        { text: 'Standardize weekly layouts for predictability', next: 'u-structure' },
        { text: 'Back to menu', next: 'menu' }
      ]
    },
    { id: 'u-plain', title: 'Plain language', text: `<p>Your Week 1 page uses long, academic sentences.</p>`,
      choices: [
        { text: 'Refactor into short action steps with bullets', next: 'u-done' },
        { text: 'Leave as-is (cognitive load stays high)', next: 'u-remind' }
      ]
    },
    { id: 'u-links', title: 'Meaningful links', text: `<p>Change vague link labels to clear destinations, e.g., “Download Syllabus (PDF).”</p>`,
      choices: [
        { text: 'Relabel links with purpose/destination', next: 'u-done' },
        { text: 'Keep “click here” everywhere', next: 'u-remind' }
      ]
    },
    { id: 'u-structure', title: 'Predictable structure', text: `<p>Make each week follow the same order: Overview → Materials → Activities → Assessments.</p>`,
      choices: [
        { text: 'Adopt a weekly template and stick to it', next: 'u-done' },
        { text: 'Vary week-by-week (harder to parse)', next: 'u-remind' }
      ]
    },
    { id: 'u-remind', title: 'Not quite there', text: `<p>Clarity & predictability boost success for all students. Revisit soon.</p>`, choices: [ { text: 'Back to Understandable', next: 'u-intro' }, { text: 'Menu', next: 'menu' } ] },
    { id: 'u-done', title: 'Understandable improvements made', text: `<p>Excellent. Instructions and links now guide learners effectively.</p>`, choices: [ { text: 'More in Understandable', next: 'u-intro' }, { text: 'Menu', next: 'menu' } ] },

    // --- ROBUST ---
    {
      id: 'r-intro', title: 'Robust: Works across tech',
      text: `<p>Content should work on multiple devices and with assistive technologies. Use built-in accessibility checkers and test across platforms.</p>`,
      choices: [
        { text: 'Run the LMS/Office accessibility checker', next: 'r-checker' },
        { text: 'Test on phone, tablet, and desktop', next: 'r-multi' },
        { text: 'Fix flagged issues (missing alt, low contrast, reading order)', next: 'r-fix' },
        { text: 'Back to menu', next: 'menu' }
      ]
    },
    { id: 'r-checker', title: 'Use built-in checkers', text: `<p>Open the Accessibility Assistant and resolve issues by category.</p>`,
      choices: [ { text: 'Fix issues now', next: 'r-done' }, { text: 'Ignore warnings', next: 'r-remind' } ] },
    { id: 'r-multi', title: 'Multiple contexts', text: `<p>Try your materials with a mobile screen reader and desktop keyboard testing.</p>`,
      choices: [ { text: 'Log issues per device and remediate', next: 'r-done' }, { text: 'Assume it\'s fine everywhere', next: 'r-remind' } ] },
    { id: 'r-fix', title: 'Address cross-platform issues', text: `<p>Fix reading order, add alt text, ensure forms/interactive elements have labels.</p>`,
      choices: [ { text: 'Make the fixes', next: 'r-done' }, { text: 'Defer fixes', next: 'r-remind' } ] },
    { id: 'r-remind', title: 'Not quite there', text: `<p>Robustness ensures longevity and compatibility. Don\'t skip it.</p>`, choices: [ { text: 'Back to Robust', next: 'r-intro' }, { text: 'Menu', next: 'menu' } ] },
    { id: 'r-done', title: 'Robust improvements made', text: `<p>Great. Your course is more durable across tech and AT.</p>`, choices: [ { text: 'More in Robust', next: 'r-intro' }, { text: 'Menu', next: 'menu' } ] }
  ]
};

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
