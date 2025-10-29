export const STORY = {
  id: 'dam-microcredential-v01',
  start: 'opening',
  metadata: {
    estimatedTime: '12-15 minutes',
    version: 'microcredential',
    totalChallenges: 4,
    maxScore: 8
  },
  nodes: [
    // ═══════════════════════════════════════════════════════════
    // OPENING (3 minutes)
    // ═══════════════════════════════════════════════════════════
    
    {
      id: 'opening',
      title: 'Sunday Evening',
      text: `<p>It's Sunday evening. You're prepping for tomorrow's class when an email notification catches your eye:</p>
             <blockquote style="border-left: 3px solid #666; padding-left: 1em; margin: 1em 0; font-style: italic;">
             <strong>Subject: Trouble accessing course materials</strong><br><br>
             "Professor, I tried to complete the Week 2 assignment but couldn't access the PDF syllabus with my screen reader. I had to ask my roommate to read it to me. Is there another way you could share these materials?"<br>
             — Marcus
             </blockquote>
             <p>Your stomach drops. This isn't the first time you've heard this. And with the dean's accessibility review scheduled for next month, you can't put this off any longer.</p>`,
      choices: [
        { text: 'Continue', next: 'matrix-intro' }
      ]
    },

    {
      id: 'matrix-intro',
      title: 'A Guide Appears',
      text: `<p>As you stare at your course site, wondering where to begin, a notification appears:</p>
             <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 1.5em; border-radius: 8px; margin: 1em 0;">
             <p style="margin: 0;"><strong>The Digital Accessibility Matrix</strong></p>
             <p style="margin: 0.5em 0 0 0;">"I can help you help Marcus. In the next 15 minutes, I'll guide you through the four most critical accessibility barriers—one fix for each principle of accessible design."</p>
             </div>
             <p><strong>The four principles (POUR):</strong></p>
             <ul>
               <li><strong>Perceivable</strong> - Can students with different abilities perceive your content?</li>
               <li><strong>Operable</strong> - Can students navigate without a mouse?</li>
               <li><strong>Understandable</strong> - Is your content clear and predictable?</li>
               <li><strong>Robust</strong> - Does it work across devices and technologies?</li>
             </ul>
             <p><strong>The Matrix:</strong> "Each fix helps real students. Let's begin."</p>`,
      choices: [
        { text: 'Start the challenges', next: 'challenge-1-perceivable' }
      ]
    },

    // ═══════════════════════════════════════════════════════════
    // CHALLENGE 1: PERCEIVABLE (2 minutes)
    // ═══════════════════════════════════════════════════════════

    {
      id: 'challenge-1-perceivable',
      title: '👁️ Challenge 1: Perceivable',
      text: `<div style="background: #fef3c7; padding: 1em; border-left: 3px solid #f59e0b; margin: 1em 0;">
             <strong>Challenge 1 of 4: Perceivable</strong><br>
             Current Score: 0/8
             </div>
             <p>You open your Week 1 lecture video. It's a 20-minute explanation of key concepts. There are no captions.</p>
             <p><strong>The Matrix:</strong> "Meet Aisha—she's deaf. Without captions, she can't access this lecture. Auto-captions exist, but they're often hilariously wrong. 'Accessibility' becomes 'acessabiity.'"</p>
             <p>"What do you do?"</p>`,
      choices: [
        { text: 'Generate auto-captions, then edit them for accuracy', next: 'p-outcome-good' },
        { text: 'Provide a text transcript alongside the video', next: 'p-outcome-good' },
        { text: 'Just use auto-captions as-is', next: 'p-outcome-bad' }
      ]
    },

    {
      id: 'p-outcome-good',
      title: '✓ Captions Fixed',
      autoAdvance: 'challenge-2-operable',
      autoAdvanceDelay: 5000,
      text: `<p>You spend 30 minutes editing the auto-captions for accuracy.</p>
             <div style="background: #dcfce7; border-left: 3px solid #22c55e; padding: 1em; margin: 1em 0;">
             <strong>The Matrix glows.</strong><br><br>
             <strong>✓ Impact:</strong>
             <ul style="margin: 0.5em 0;">
             <li>Aisha can now fully engage with your lecture</li>
             <li>3 non-native English speakers better understand the content</li>
             <li>Students can study with sound off in noisy environments</li>
             </ul>
             <strong>+2 Points</strong> (2/8)
             </div>
             <p><em>Moving to Challenge 2: Operable...</em></p>`,
      choices: []
    },

    {
      id: 'p-outcome-bad',
      title: '⚠ Not Quite',
      autoAdvance: 'challenge-2-operable',
      autoAdvanceDelay: 5000,
      text: `<p>You enable auto-captions and move on.</p>
             <div style="background: #fef2f2; border-left: 3px solid #ef4444; padding: 1em; margin: 1em 0;">
             <strong>The Matrix dims.</strong><br><br>
             <strong>⚠ Outcome:</strong>
             <ul style="margin: 0.5em 0;">
             <li>The transcript reads: "Today we discuss acessabiity in higher ed you cation"</li>
             <li>Aisha is more confused than helped</li>
             <li>Your accessibility review flags this as non-compliant</li>
             </ul>
             <strong>+0 Points</strong> (0/8)
             </div>
             <p><em>Moving to Challenge 2: Operable...</em></p>`,
      choices: []
    },

    // ═══════════════════════════════════════════════════════════
    // CHALLENGE 2: OPERABLE (2 minutes)
    // ═══════════════════════════════════════════════════════════

    {
      id: 'challenge-2-operable',
      title: '⌨️ Challenge 2: Operable',
      text: `<div style="background: #dbeafe; padding: 1em; border-left: 3px solid #3b82f6; margin: 1em 0;">
             <strong>Challenge 2 of 4: Operable</strong><br>
             Current Score: <span id="score-display">[calculated]</span>/8
             </div>
             <p>You look at the PDF syllabus Marcus mentioned in his email. It's a scan of your printed document—text saved as an image.</p>
             <p><strong>The Matrix:</strong> "This is Marcus's original problem. His screen reader can't read images of text. It just announces 'image, image, image.' Keyboard navigation doesn't work. Search doesn't work. It's a locked box."</p>
             <p>"How do you fix it?"</p>`,
      choices: [
        { text: 'Convert to an accessible PDF with selectable text', next: 'o-outcome-good' },
        { text: 'Recreate as an HTML page with real text', next: 'o-outcome-good' },
        { text: 'Keep the scanned PDF—it looks professional', next: 'o-outcome-bad' }
      ]
    },

    {
      id: 'o-outcome-good',
      title: '✓ Marcus Can Access It!',
      autoAdvance: 'challenge-3-understandable',
      autoAdvanceDelay: 5000,
      text: `<p>You recreate the syllabus with actual, selectable text.</p>
             <div style="background: #dcfce7; border-left: 3px solid #22c55e; padding: 1em; margin: 1em 0;">
             <strong>The Matrix brightens.</strong><br><br>
             <strong>✓ Impact:</strong>
             <ul style="margin: 0.5em 0;">
             <li><strong>Marcus can now access your syllabus!</strong> (This was his original complaint—solved!)</li>
             <li>Mobile students can read without endless zooming and scrolling</li>
             <li>Students can search and copy text for studying</li>
             </ul>
             <strong>+2 Points</strong> <span id="score-update">[new total]</span>/8
             </div>
             <p><em>Moving to Challenge 3: Understandable...</em></p>`,
      choices: []
    },

    {
      id: 'o-outcome-bad',
      title: '⚠ Marcus Still Can\'t Access It',
      autoAdvance: 'challenge-3-understandable',
      autoAdvanceDelay: 5000,
      text: `<p>You leave the scanned PDF as-is.</p>
             <div style="background: #fef2f2; border-left: 3px solid #ef4444; padding: 1em; margin: 1em 0;">
             <strong>The Matrix dims.</strong><br><br>
             <strong>⚠ Outcome:</strong>
             <ul style="margin: 0.5em 0;">
             <li><strong>Marcus sends another email: "I still can't access the syllabus"</strong></li>
             <li>You'll need to provide individual accommodations</li>
             <li>This is the same barrier from his original email—unfixed</li>
             </ul>
             <strong>+0 Points</strong> <span id="score-update">[same total]</span>/8
             </div>
             <p><em>Moving to Challenge 3: Understandable...</em></p>`,
      choices: []
    },

    // ═══════════════════════════════════════════════════════════
    // CHALLENGE 3: UNDERSTANDABLE (2 minutes)
    // ═══════════════════════════════════════════════════════════

    {
      id: 'challenge-3-understandable',
      title: '💡 Challenge 3: Understandable',
      text: `<div style="background: #dcfce7; padding: 1em; border-left: 3px solid #22c55e; margin: 1em 0;">
             <strong>Challenge 3 of 4: Understandable</strong><br>
             Current Score: <span id="score-display">[calculated]</span>/8
             </div>
             <p>You review your course links. Every link says "click here":</p>
             <ul>
               <li>"Click here for the syllabus"</li>
               <li>"Click here for Week 1 readings"</li>
               <li>"Click here to submit"</li>
             </ul>
             <p><strong>The Matrix:</strong> "Marcus's screen reader has a 'list all links' feature. For your course, it reads: 'Click here. Click here. Click here. Click here.' He has no idea which one is which. He has to listen to all the surrounding text to figure out where each link goes."</p>
             <p>"How do you fix this?"</p>`,
      choices: [
        { text: 'Rewrite with descriptive labels: "Download Syllabus (PDF, 3 pages)"', next: 'u-outcome-good' },
        { text: 'Use meaningful link text for all links', next: 'u-outcome-good' },
        { text: 'Leave "click here"—it\'s standard web language', next: 'u-outcome-bad' }
      ]
    },

    {
      id: 'u-outcome-good',
      title: '✓ Links Clarified',
      autoAdvance: 'challenge-4-robust',
      autoAdvanceDelay: 5000,
      text: `<p>You rewrite every link with descriptive text.</p>
             <div style="background: #dcfce7; border-left: 3px solid #22c55e; padding: 1em; margin: 1em 0;">
             <strong>The Matrix glows.</strong><br><br>
             <strong>✓ Impact:</strong>
             <ul style="margin: 0.5em 0;">
             <li>Marcus can now scan link lists and jump directly to what he needs—10x faster navigation</li>
             <li>All users know where links lead before clicking</li>
             <li>Better SEO and usability for everyone</li>
             </ul>
             <strong>+2 Points</strong> <span id="score-update">[new total]</span>/8
             </div>
             <p><em>Moving to final challenge: Robust...</em></p>`,
      choices: []
    },

    {
      id: 'u-outcome-bad',
      title: '⚠ Links Remain Vague',
      autoAdvance: 'challenge-4-robust',
      autoAdvanceDelay: 5000,
      text: `<p>You keep "click here" throughout.</p>
             <div style="background: #fef2f2; border-left: 3px solid #ef4444; padding: 1em; margin: 1em 0;">
             <strong>The Matrix dims.</strong><br><br>
             <strong>⚠ Outcome:</strong>
             <ul style="margin: 0.5em 0;">
             <li>Marcus takes 3x longer to find content</li>
             <li>All users must read surrounding text for context</li>
             <li>Poor experience for everyone</li>
             </ul>
             <strong>+0 Points</strong> <span id="score-update">[same total]</span>/8
             </div>
             <p><em>Moving to final challenge: Robust...</em></p>`,
      choices: []
    },

    // ═══════════════════════════════════════════════════════════
    // CHALLENGE 4: ROBUST (2 minutes)
    // ═══════════════════════════════════════════════════════════

    {
      id: 'challenge-4-robust',
      title: '🔧 Challenge 4: Robust',
      text: `<div style="background: #f3e8ff; padding: 1em; border-left: 3px solid #a855f7; margin: 1em 0;">
             <strong>Challenge 4 of 4: Robust</strong><br>
             Current Score: <span id="score-display">[calculated]</span>/8
             </div>
             <p>You test your course on your laptop—everything looks perfect. But when you check on your phone, the text is tiny, navigation is cramped, and videos don't display properly.</p>
             <p><strong>The Matrix:</strong> "Meet Sofia and David. Sofia can't afford a laptop—she accesses everything on her phone. David sometimes uses a tablet. If your course doesn't work on mobile, you're excluding about 30% of students—and discriminating against those who can't afford fancy equipment."</p>
             <p>"What do you do?"</p>`,
      choices: [
        { text: 'Test across devices and optimize for mobile, tablet, and desktop', next: 'r-outcome-good' },
        { text: 'Make the course responsive—works on any screen size', next: 'r-outcome-good' },
        { text: 'Students should use laptops for coursework', next: 'r-outcome-bad' }
      ]
    },

    {
      id: 'r-outcome-good',
      title: '✓ Works Everywhere',
      autoAdvance: 'completion',
      autoAdvanceDelay: 5000,
      text: `<p>You optimize the course for all devices.</p>
             <div style="background: #dcfce7; border-left: 3px solid #22c55e; padding: 1em; margin: 1em 0;">
             <strong>The Matrix glows brightly.</strong><br><br>
             <strong>✓ Impact:</strong>
             <ul style="margin: 0.5em 0;">
             <li>Sofia can fully participate using her phone</li>
             <li>David can switch between devices seamlessly</li>
             <li>Works on older/budget devices</li>
             <li>Future-proofed for new technologies</li>
             </ul>
             <strong>+2 Points</strong> <span id="score-update">[new total]</span>/8
             </div>
             <p><em>Calculating your impact...</em></p>`,
      choices: []
    },

    {
      id: 'r-outcome-bad',
      title: '⚠ Mobile Excluded',
      autoAdvance: 'completion',
      autoAdvanceDelay: 5000,
      text: `<p>You require laptop access for the course.</p>
             <div style="background: #fef2f2; border-left: 3px solid #ef4444; padding: 1em; margin: 1em 0;">
             <strong>The Matrix dims.</strong><br><br>
             <strong>⚠ Outcome:</strong>
             <ul style="margin: 0.5em 0;">
             <li>30% of students can't fully participate</li>
             <li>Disproportionately affects lower-income students</li>
             <li>Creates equity barrier in addition to accessibility barrier</li>
             </ul>
             <strong>+0 Points</strong> <span id="score-update">[same total]</span>/8
             </div>
             <p><em>Calculating your impact...</em></p>`,
      choices: []
    },

    // ═══════════════════════════════════════════════════════════
    // COMPLETION (2-3 minutes)
    // ═══════════════════════════════════════════════════════════

    {
      id: 'completion',
      title: 'Your Impact',
      text: `<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 1.5em; border-radius: 8px; margin: 1em 0; text-align: center;">
             <h2 style="margin-top: 0;">🏆 Assessment Complete</h2>
             <p style="font-size: 1.5em; margin: 0.5em 0;"><strong>Final Score: <span id="final-score">[calculated]</span>/8</strong></p>
             </div>
             
             <div style="background: #dcfce7; border: 2px solid #22c55e; padding: 1.5em; margin: 1em 0;">
             <h3 style="margin-top: 0;">Students You've Helped</h3>
             <p><strong>✓ Marcus</strong> (screen reader user) - Can now access your PDFs and navigate by links<br>
             <strong>✓ Aisha</strong> (deaf) - Can follow your video lectures<br>
             <strong>✓ Jennifer</strong> (colorblind) - Can distinguish information<br>
             <strong>✓ David</strong> (motor disability) - Can access on any device<br>
             <strong>✓ Sofia</strong> (uses mobile) - Can fully participate on her phone</p>
             
             <p style="margin-top: 1em;"><strong>Plus:</strong> Non-native speakers, students in noisy environments, students with slow internet, and everyone who benefits from clearer content.</p>
             </div>
             
             <div style="background: #f0f9ff; border-left: 3px solid #3b82f6; padding: 1em; margin: 1em 0;">
             <h3>The Four Principles (POUR)</h3>
             <p>In just 15 minutes, you experienced the four key principles of digital accessibility:</p>
             <ul>
               <li><strong>Perceivable</strong> - Captions for Aisha ✓</li>
               <li><strong>Operable</strong> - Real text for Marcus ✓</li>
               <li><strong>Understandable</strong> - Clear links for navigation ✓</li>
               <li><strong>Robust</strong> - Mobile access for Sofia ✓</li>
             </ul>
             </div>`,
      choices: [
        { text: 'Show me next steps', next: 'next-steps' }
      ]
    },

    {
      id: 'next-steps',
      title: 'Your Action Plan',
      text: `<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 1.5em; border-radius: 8px; margin: 1em 0;">
             <p style="margin: 0;"><strong>The Matrix:</strong></p>
             <p style="margin: 0.5em 0 0 0;">"These four fixes—captions, accessible documents, clear links, mobile optimization—cover 80% of accessibility barriers with 20% of the effort. You now know what matters most."</p>
             </div>
             
             <h3>Apply This Today:</h3>
             <ol>
               <li><strong>Fix Marcus's problem:</strong> Convert one scanned PDF to accessible text</li>
               <li><strong>Help Aisha:</strong> Add captions to one key video</li>
               <li><strong>Quick win:</strong> Fix "click here" links in one module</li>
               <li><strong>Test:</strong> Open your course on your phone—what breaks?</li>
             </ol>
             
             <h3>Continue Learning:</h3>
             <ul>
               <li><strong>Run your LMS accessibility checker</strong> to find more issues</li>
               <li><strong>Test with keyboard only</strong> (use Tab key—no mouse)</li>
               <li><strong>Explore the full version</strong> with 8 more challenges (45 min)</li>
               <li><strong>Share what you learned</strong> with colleagues</li>
             </ul>
             
             <div style="background: #dcfce7; border-left: 3px solid #22c55e; padding: 1em; margin: 1em 0;">
             <strong>Remember:</strong> Every accessibility improvement you make helps more students than you realize. The students who benefit most often never tell you—they just succeed more easily.
             </div>
             
             <div style="text-align: center; margin: 2em 0;">
             <p><strong>🎓 Digital Accessibility Matrix: Foundation Complete</strong></p>
             <p><em>You're now equipped to create more inclusive learning experiences.</em></p>
             </div>`,
      choices: [
        { text: 'Restart to explore different choices', next: 'opening' }
      ]
    }
  ]
};
