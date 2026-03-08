Test the application thoroughly — build verification, runtime checks, and manual test guidance.

## Argument
$ARGUMENTS — Optional: specific area to test (e.g., "newsletter editor", "auth flow", "API routes")

## Process

### 1. Static Analysis
- Run `npx tsc --noEmit` to check for type errors
- Run `npm run lint` to check for lint issues
- Report and fix any errors found

### 2. Build Verification
- Run `npm run build` to verify production build succeeds
- Check for build warnings (unused imports, missing deps, etc.)
- Verify no pages fail to compile

### 3. Code-Level Testing
If $ARGUMENTS specifies an area, focus there. Otherwise, check:

**API Routes** (`src/app/api/`)
- Read each route handler and verify:
  - Auth check with `validateSession()` is present
  - Input validation on request body
  - Proper error handling (try/catch, status codes)
  - Correct HTTP methods handled
  - Edge cases (missing params, invalid data)

**Database Queries** (`src/lib/db/`)
- Check for SQL injection risks (parameterized queries)
- Verify proper error handling
- Check for missing null/undefined guards
- Verify CASCADE behaviors are correct

**Components**
- Check for missing key props in lists
- Verify event handlers are properly bound
- Check for memory leaks (missing cleanup in useEffect)
- Verify loading/error states exist

**Auth Flow**
- Verify `validateSession()` is called in all admin API routes
- Check middleware configuration in `src/middleware.ts`
- Verify redirect behavior for unauthenticated users

### 4. Output
Provide a test report:
- **Pass/Fail** status for each check
- **Issues Found** with file:line references
- **Risk Assessment** — areas that need attention
- **Manual Test Checklist** — steps for browser testing
