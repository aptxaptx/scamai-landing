Analyze and refactor code for better maintainability, readability, and adherence to project patterns.

## Argument
$ARGUMENTS — File path, component name, or area to refactor (e.g., "newsletter editor", "API routes")

## Process

### 1. Analysis
- Read the target code specified in $ARGUMENTS
- Map dependencies (what imports it, what it imports)
- Identify code smells:
  - Functions longer than 50 lines
  - Deeply nested conditionals (>3 levels)
  - Duplicated logic across files
  - Mixed concerns (data fetching + rendering + business logic)
  - Overly complex state management
  - God components (doing too many things)

### 2. Refactoring Plan
Before making changes, present a plan:
- What will change and why
- Files affected
- Risk assessment (breaking changes?)
- Expected improvement

### 3. Execute Refactoring
Apply changes following project patterns:
- Extract reusable components to `src/components/`
- Extract business logic to utility functions in `src/lib/`
- Extract database operations to `src/lib/db/`
- Use composition over inheritance
- Keep components focused (single responsibility)
- Preserve existing behavior (no feature changes)

### 4. Verification
- Run `npx tsc --noEmit` — zero type errors
- Run `npm run lint` — zero lint errors
- Run `npm run build` — build succeeds
- Verify no functionality changed (same behavior, better code)

## Output
- Summary of changes made
- Before/after comparison of key improvements
- Any follow-up refactoring suggested but not done (to keep scope manageable)
