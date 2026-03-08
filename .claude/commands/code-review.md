Review recent code changes for quality, maintainability, and adherence to project patterns.

## Argument
$ARGUMENTS — Optional: specific files or PR to review. If empty, reviews uncommitted changes.

## Process

### 1. Gather Changes
- If $ARGUMENTS contains a PR number, fetch it with `gh pr diff`
- If $ARGUMENTS contains file paths, read those files
- Otherwise, run `git diff` and `git diff --staged` for current changes
- Run `git log --oneline -10` for recent context

### 2. Code Quality Review
- **Naming**: Variables, functions, and files follow project conventions
- **TypeScript**: Proper types used (no `any`, no type assertions without justification)
- **Error handling**: Try/catch blocks, proper error propagation
- **DRY**: No unnecessary duplication
- **Complexity**: Functions aren't too long or deeply nested
- **Comments**: Meaningful comments where logic is non-obvious (not redundant)

### 3. Pattern Compliance
- Server vs Client components used correctly
- shadcn/ui components used instead of custom equivalents
- `cn()` utility used for conditional classes
- API routes follow the validateSession → try/catch → response pattern
- Database queries use parameterized statements
- i18n keys used for user-facing text
- Imports are clean (no unused imports, proper order)

### 4. Potential Issues
- Race conditions in async code
- Missing null/undefined checks
- Unhandled promise rejections
- Memory leaks (event listeners, timers not cleaned up)
- Missing loading/error states in UI

### 5. Output
Provide a review with:
- **Summary**: Overall assessment (1-2 sentences)
- **Approve / Request Changes / Needs Discussion**
- **Issues**: Grouped by severity (blocker, major, minor, nit)
- **Positive notes**: Things done well
- Each issue includes file:line reference and suggested fix
