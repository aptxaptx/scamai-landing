Implement a feature or fix following the project's established patterns and conventions.

## Argument
$ARGUMENTS — Description of what to build or fix

## Process

1. **Understand the request**: Parse $ARGUMENTS to determine what needs to be built
2. **Research existing patterns**: Read related files to understand conventions
3. **Plan the implementation**: Identify which files to create/modify
4. **Build it**: Write the code following project patterns
5. **Verify**: Run `npx tsc --noEmit` and `npm run lint` to catch issues

## Project Conventions to Follow

### File Structure
- Pages go in `src/app/[locale]/` (public) or `src/app/admin/` (admin)
- Reusable components go in `src/components/` under the appropriate subdirectory
- API routes go in `src/app/api/`
- Database queries go in `src/lib/db/newsletters.ts`
- Utility functions go in `src/lib/`

### Code Patterns
- Use TypeScript with proper types (no `any`)
- Server components by default; add `"use client"` only when needed
- Use shadcn/ui components from `src/components/ui/`
- Use `cn()` from `src/lib/utils` for conditional classNames
- Use next-intl for i18n (`useTranslations` hook or `getTranslations`)
- API routes use `validateSession()` from `src/lib/admin-auth` for auth
- Database uses `@neondatabase/serverless` — queries in `src/lib/db/`

### Styling
- Tailwind CSS 4 utility classes
- Dark theme using CSS variables from globals.css
- Mobile-first responsive design

### After Building
- Run type checker: `npx tsc --noEmit`
- Run linter: `npm run lint`
- Fix any issues found
- Summarize what was built and any decisions made
