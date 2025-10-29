## Summary

Provide a concise summary of the changes in this pull request. Focus on the narrative/content changes and any behavioral changes to the prototype.

## Type of change
- [ ] Story / narrative content
- [ ] UI/interaction logic
- [ ] Styles/CSS
- [ ] Build/config
- [ ] Other (describe): _______

## Checklist — Narrative & Accessibility Review
Please ensure the following are done before requesting a review or merging.

- [ ] Branch was created from `feature/narrative` (or `import/prototype`) and is up-to-date with the base branch.
- [ ] Story edits are confined to `js/story.js` or clearly documented files.
- [ ] Text revisions are proofread and use plain language where possible.
- [ ] Headings and structure remain semantic (use real H1–H3 where appropriate).
- [ ] Any new images include descriptive `alt` attributes or are marked decorative.
- [ ] Keyboard navigation tested (Tab order, Enter/Space, 1–9 choices, B to go back).
- [ ] Screen reader behavior spot-checked (scene title focuses, aria-live updates where expected).
- [ ] Color contrast checked for new or changed visual elements (4.5:1 for normal text).
- [ ] No content relies on color alone to convey meaning.
- [ ] Local testing steps included in the PR description (how to run & URL to preview).
- [ ] README updated if the change affects usage or setup.

## Testing steps
Describe the exact steps you used to test the change locally so reviewers can reproduce.

Example:
1. Start the dev server: `ruby -run -ehttpd . -p8000`
2. Open: `http://localhost:8000/`
3. Navigate through the story, verify the edited scenes appear and keyboard navigation works.

## Notes for reviewers
Add any context, open questions, or things you'd like reviewers to pay attention to.
