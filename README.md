# DAM Project

This repository contains an accessible HTML prototype: `dam_intro_game_html_prototype_v_0.3.html` — an interactive, keyboard-first introduction to accessibility using the POUR model (Perceivable, Operable, Understandable, Robust).

Quick start — preview locally

- Option A (recommended in-editor): Install the VS Code "Live Server" extension (Ritwick Dey). Open `dam_intro_game_html_prototype_v_0.3.html` and click "Go Live". The page will auto-reload on save.

- Option B (already available): Start the Ruby server from the project folder then open http://localhost:8000/dam_intro_game_html_prototype_v_0.3.html

```bash
cd "/Users/jsj0112/DAM Project"
ruby -run -ehttpd . -p8000
# stop with Ctrl+C
```

- Option C (if you install Node later):
```bash
npm install -g live-server
cd "/Users/jsj0112/DAM Project"
live-server --port=5500
```

Branching & PR workflow

Work on your changes in the `import/prototype` branch (already pushed). Open a Pull Request on GitHub to review and merge into `main` when ready:

https://github.com/julijames-unt/dam_project/compare/import/prototype?expand=1

Contributing

- Edit the HTML directly for content tweaks.
- Commit small, focused changes so PRs are easy to review.

License

Add a license file if you want to publish this repository publicly.
