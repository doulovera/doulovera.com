# AGENTS.md
Guidance for coding agents working in this repository.

## Project Snapshot
- Stack: Astro 5, TypeScript (strict), Tailwind CSS v4 via Vite plugin.
- Package manager: `pnpm` (`pnpm-lock.yaml` present).
- Site output: static (`output: "static"` in `astro.config.mjs`).
- Key directories: `src/pages`, `src/components`, `src/data/portfolio`, `src/styles`.
- Localization: `en` and `es` built from typed content in `src/data/portfolio`.

## Setup And Daily Commands
Run all commands from repository root.

```bash
# install
pnpm install

# dev server
pnpm dev

# production build
pnpm build

# preview build output
pnpm preview
```

`npm` equivalents exist, but prefer `pnpm` for consistency.

## Lint, Typecheck, And Validation
No dedicated linter/formatter config is checked in (no ESLint/Biome/Prettier config files found).

```bash
# Astro + TypeScript checks
pnpm exec astro check
```

Recommended pre-PR validation:

```bash
pnpm exec astro check && pnpm build
```

## Test Commands (Current State)
There is currently no test framework and no test files.
- No `test` script in `package.json`.
- No `*.test.*` or `*.spec.*` files found.

Use this validation substitute until tests are added:

```bash
pnpm exec astro check
pnpm build
```

## Running A Single Test (When Tests Are Added)
If a runner (likely Vitest) is introduced, use these patterns:

```bash
# single file
pnpm exec vitest run src/path/to/file.test.ts

# single test by name
pnpm exec vitest run -t "test name"

# single test in single file
pnpm exec vitest run src/path/to/file.test.ts -t "test name"
```

If you add a test runner, also add matching scripts in `package.json`.

## Repository Structure Guidance
- `src/pages`: routes (`index.astro`, `es/index.astro`, `[slug].astro`).
- `src/layouts`: page shells like `BaseLayout.astro`.
- `src/components/layout`: structural components (navbar/footer).
- `src/components/sections`: page sections by domain.
- `src/components/ui`: reusable UI primitives.
- `src/data/portfolio`: typed domain content, builders, locale variants.
- `src/styles/global.css`: design tokens, global styles, keyframes.

## Coding Style Guidelines

### Formatting
- Use 2-space indentation in TS, Astro frontmatter, and CSS.
- Use semicolons in TypeScript/frontmatter code.
- Use double quotes for strings.
- Keep non-trivial object/array literals multiline.
- Follow nearby formatting; avoid unrelated style churn.

### Imports
- Use relative imports (no path alias configured).
- Prefer `import type` for type-only imports.
- Keep imports at top-level in module/frontmatter.
- Keep grouping consistent in touched files (types vs values, external vs local).
- Re-export shared contracts from existing barrels where already established.

### Types And Type Safety
- Assume strict TypeScript (`astro/tsconfigs/strict`).
- Prefer `interface` for shared data contracts in `src/data/portfolio/types.ts`.
- Avoid `any`; use explicit unions/interfaces and safe narrowing.
- Keep locale values typed (`type SupportedLocale = "en" | "es"`).
- Use `?.` and `??` for optional URLs/fields.
- Prefer `satisfies` or explicit annotations for shared constructed objects.

### Naming Conventions
- Components/files: PascalCase (`HeroSection.astro`, `ButtonLink.astro`).
- Interfaces/types: PascalCase (`HeroData`, `ProjectEntry`).
- Functions: camelCase; use `getX` pattern for content builders.
- Variables: camelCase; constants: SCREAMING_SNAKE_CASE when truly constant.
- Keep route and folder names aligned with existing structure.

### Astro Component Patterns
- Define a `Props` interface where it improves clarity.
- Read props from `Astro.props` and destructure early.
- Use casts sparingly (`Astro.props as HeroData`) when necessary.
- Keep section `id` values stable for navbar anchors.
- For external links, use `target="_blank"` with `rel="noreferrer"`.

### Data And i18n Patterns
- Add copy for both locales in `src/data/portfolio/texts.ts`.
- Keep `en` and `es` key structure in sync.
- Prefer locale-aware builders (`getHero`, `getAbout`, etc.) over duplication.
- Update both default English exports and Spanish (`portfolioDataEs`) wiring.
- Keep shared assets/links centralized in `src/data/portfolio/shared.ts`.

### Styling Patterns
- Prefer Tailwind utility classes in Astro templates.
- Reuse CSS variables in `src/styles/global.css`.
- Keep existing visual language and tokens (`--mint`, `--ember`, `--panel`).
- Put global animations/keyframes in `global.css`.

### Error Handling And Defensive Coding
- Prefer deterministic fallbacks (e.g., locale fallback to `en`).
- Guard optional links before rendering actionable anchors.
- Keep static build safety in mind; avoid browser-only APIs unless safely scoped.
- Keep redirects typed and deterministic (`RedirectLink[]`).
- Let checks/build fail on invalid types instead of masking errors.

## Change Management Expectations
- Make minimal, targeted edits; avoid unrelated refactors.
- Preserve established architecture and naming unless requested otherwise.
- Keep imports/exports tidy when adding or removing modules.
- If tooling/commands change, update this file and `README.md` together.

## Cursor/Copilot Rule Files
Checked paths:
- `.cursor/rules/`
- `.cursorrules`
- `.github/copilot-instructions.md`

Current status: none of these files exist in this repository.
If these files are added later, treat them as authoritative and update this file accordingly.
