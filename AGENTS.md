# Repository Guidelines
## Project Structure & Module Organization
The Nuxt 3 app lives in `pages/`, where each `.vue` file defines a route-level view using Composition API and Tailwind classes. Shared UI and form logic sit in `components/AppForm` and `components/Base`; keep reusable atoms there rather than duplicating code in `pages/`. Static assets land in `public/`. `slidev/` contains the slide deck used for demos and should be updated only when presentation material changes. Generated output (`.nuxt/`, `.output/`) stays untracked; avoid editing it directly. End-to-end scripts and reports reside in `testsprite_tests/`.

## Build, Test, and Development Commands
Run `pnpm install --shamefully-hoist` after cloning to mirror CI. `pnpm dev` starts the local server on `http://localhost:3000`. Use `pnpm build` for production bundles, `pnpm preview` to smoke-test the build, and `pnpm generate` when producing static snapshots. `pnpm postinstall` is handled automatically by Nuxt; no manual invocation is required.

## Coding Style & Naming Conventions
Use two-space indentation inside Vue SFCs and keep `<script setup>` the default. Name Vue components in PascalCase (`AppFormProfile.vue`) and props/events in kebab-case when used in templates. Prefer double-quoted strings in JavaScript/TypeScript. Tailwind utility classes should follow mobile-first ordering: layout -> spacing -> color. No lint script is wired up yet, so rely on editor linting and ensure code passes `pnpm build` without warnings before submitting.

## Testing Guidelines
Playwright-based regression scripts live in `testsprite_tests/*.py`. Start the dev server and then run a scenario, e.g. `python testsprite_tests/TC001_Profile_Management___Update_Profile_Information.py`. Keep new tests async and reuse the helper patterns in existing files (shared timeouts, `goto` sequence). Update `testsprite_tests/testsprite_frontend_test_plan.json` when coverage changes and attach the generated HTML report to PRs touching critical flows.

## Commit & Pull Request Guidelines
Follow the existing `type(scope): summary` style seen in `feat:`, `apps:`, and `test:` commits; keep the summary under 72 characters. Each PR should describe the user impact, link relevant issues, and include screenshots or recordings for UI updates. Request at least one reviewer, note any manual test steps performed, and confirm that `pnpm build` and critical Playwright scripts were run before merging.
