# Repository Guidelines for Agentic Coding

## Project Structure & Module Organization

The Nuxt 3 application lives in `pages/`, where each `.vue` file defines a route-level view using Composition API (`<script setup>`) and Tailwind CSS classes. Shared UI components and form logic reside in `components/AppForm` and `components/Base`; keep reusable atoms there rather than duplicating code in `pages/`. Static assets land in `public/`. The `slidev/` directory contains the slide deck used for demos and should be updated only when presentation material changes. Generated output directories (`.nuxt/`, `.output/`) stay untracked; avoid editing them directly.

## Build, Test, and Development Commands

### Core Commands
```bash
pnpm install --shamefully-hoist    # Install dependencies, mirror CI behavior
pnpm dev                          # Start local dev server at http://localhost:3000
pnpm build                        # Production bundle
pnpm preview                      # Smoke-test production build
pnpm generate                     # Generate static snapshot
pnpm postinstall                  # Auto-handled by Nuxt (nuxt prepare)
```

### Unit Testing (Vitest)
```bash
pnpm test                        # Run all unit tests in watch mode
pnpm test:run                    # Run all tests once (CI mode)
pnpm test:ui                     # Run tests with UI dashboard
pnpm test:coverage               # Run tests with coverage report

# Run a single test file
pnpm test run tests/components/Profile.test.ts
pnpm vitest run tests/unit/useAppData.test.ts

# Run tests matching a pattern
pnpm vitest run -t "應該成功渲染"
```

### End-to-End Testing (Playwright)
Playwright-based regression scripts should be placed in `testsprite_tests/`. Start the dev server first, then run:
```bash
python testsprite_tests/TC001_Profile_Management___Update_Profile_Information.py
```

Update `testsprite_tests/testsprite_frontend_test_plan.json` when coverage changes and attach the generated HTML report to PRs touching critical flows.

## Coding Style & Naming Conventions

### Vue Components
- Use **PascalCase** for component filenames: `AppFormProfile.vue`, `BaseLoading.vue`
- Props and events in templates use **kebab-case**: `update:name`, `update:desc`
- Always use `<script setup>` syntax for Composition API
- Two-space indentation inside Vue SFCs

### TypeScript/JavaScript
- **Double-quoted strings** in JavaScript/TypeScript: `"string value"`
- Use TypeScript types for function parameters and return values
- Prop types defined via `defineProps` with TypeScript syntax preferred
- Use `ref`, `computed`, `reactive` from Vue for reactive state

### Tailwind CSS
- Mobile-first utility classes ordering: **layout → spacing → color**
- Example: `class="flex items-center justify-center p-4 bg-white text-slate-800"`
- Avoid custom CSS; prefer Tailwind utilities

### Naming Conventions
| Item | Convention | Example |
|------|------------|---------|
| Components | PascalCase | `AppFormProfile.vue` |
| Props | camelCase | `imageUrl` |
| Events | kebab-case | `update:name` |
| CSS classes | kebab-case | `bg-slate-100` |
| Variables | camelCase | `const data = ref({})` |
| Constants | SCREAMING_SNAKE_CASE | `MAX_FILE_SIZE` |

### Imports & File Organization
- Group imports: Vue APIs → Third-party → Local components → Composables
- Use path aliases: `~/components/...`, `~/composables/...`, `~/utils/...`
- Keep files focused; extract reusable logic to composables

## Error Handling

- Use `try/catch` with `async/await` for API calls and async operations
- Provide user feedback via UI state (loading, error messages)
- Log errors appropriately for debugging without exposing sensitive data
- Validate props with TypeScript types and runtime checks where critical

## Testing Guidelines

### Vitest Patterns
- Import from `'vitest'` and `'@vue/test-utils'`
- Use `mount()` for component tests, `shallowMount()` when children not needed
- Test v-model behavior by checking emitted events: `expect(wrapper.emitted('update:name'))`
- Use `find('input[name="xxx"]')` for precise element selection
- Snapshot tests stored in `__snapshots__/` directories

### Test Structure
```typescript
describe('ComponentName', () => {
  it('should render correctly', () => {
    const wrapper = mount(Component, { props: {...} })
    expect(wrapper.exists()).toBe(true)
  })

  it('should emit events on user input', async () => {
    const wrapper = mount(Component)
    await wrapper.find('input').setValue('test')
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  })
})
```

## Commit & Pull Request Guidelines

Follow the `type(scope): summary` format seen in existing commits:
- `feat(form): add new profile image upload`
- `fix(preview): resolve phone frame rendering issue`
- `test(links): add unit tests for link component`
- `apps(dependencies): update to Nuxt 3.9`

Keep summary under 72 characters. Each PR should describe user impact, link relevant issues, and include screenshots/recordings for UI changes. Request at least one reviewer and confirm `pnpm build` passes before merging.
