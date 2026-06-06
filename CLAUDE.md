# Portfolio Project

Angular 21 personal portfolio website with AWS CDK infrastructure.

## Quick Start

**Prerequisites:**

- Node.js >=24.0.0
- PNPM (install: `npm install -g pnpm`)

**Development:**

```bash
pnpm install          # Install dependencies
pnpm start            # Dev server → http://localhost:4200
pnpm build            # Production build → dist/
pnpm lint             # Run ESLint
pnpm test             # Run Karma tests
pnpm prettier:check   # Check formatting
pnpm prettier:write   # Auto-fix formatting
```

## Project Structure

```
/src                  # Angular application
  /app/components/
    /containers/      # Smart components (about, certifications, etc.)
    /pages/          # Routed page components
  /shared/           # Reusable utilities
  /environments/     # Environment configs
/infra               # AWS CDK infrastructure (see infra/CLAUDE.md)
/.github/workflows   # CI/CD pipelines
```

**Note:** This is a PNPM workspace. Root `pnpm install` handles both app and infra dependencies.

## Code Style

- **Prettier + ESLint** enforced via Husky pre-commit hook
- Angular component selector prefix: `app-`
- Standalone components (Angular 21 default)
- OnPush change detection recommended

## Tech Stack

- Angular 21.2.x (zoneless, signals, modern APIs)
- PrimeNG 21.1.x (UI components)
- Tailwind CSS 4.x (styling)
- RxJS 7.8 (reactive programming)
- Karma + Jasmine (testing)

## Gotchas

1. **PNPM required**: Don't use `npm` or `yarn` — this is a PNPM workspace
2. **Node >=24**: Project requires latest Node.js LTS
3. **Bundle size**: Production build has strict budgets (500kB warning, 1MB error)
4. **Pre-commit checks**: Prettier + lint auto-run; fix issues before committing
5. **Infrastructure**: For CDK/AWS deployment details, see `/infra/CLAUDE.md`
