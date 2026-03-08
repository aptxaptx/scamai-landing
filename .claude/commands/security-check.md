Perform a security audit of the codebase, focusing on OWASP Top 10 vulnerabilities and Next.js-specific risks.

## Process

### 1. Authentication & Authorization
- Verify all admin API routes call `validateSession()` from `src/lib/admin-auth.ts`
- Check that `ALLOWED_ADMIN_EMAILS` properly restricts access
- Review NextAuth configuration in `src/lib/auth.ts`
- Check for missing auth on any new routes
- Verify session token handling and expiry

### 2. Injection Attacks
- **SQL Injection**: Verify all database queries in `src/lib/db/` use parameterized queries (no string interpolation in SQL)
- **XSS**: Check for `dangerouslySetInnerHTML` usage, unsanitized user input in JSX
- **Command Injection**: Check for any `exec()` or shell command usage
- Review markdown parsing for XSS vectors (newsletter content)

### 3. Data Exposure
- Search for hardcoded secrets, API keys, or credentials in source code
- Verify `.env*` files are in `.gitignore`
- Check API responses don't leak sensitive data (full user objects, internal IDs)
- Verify error messages don't expose stack traces or internal details
- Check that `console.log` doesn't output sensitive data

### 4. Input Validation
- Verify all API route request bodies are validated
- Check for proper Content-Type enforcement
- Verify file upload handling (newsletter import) is safe
- Check URL parameters are sanitized

### 5. HTTP Security Headers
- Check `next.config.ts` for security headers (CSP, X-Frame-Options, etc.)
- Verify CORS configuration
- Check cookie settings (httpOnly, secure, sameSite)

### 6. Dependency Vulnerabilities
- Run `npm audit` to check for known vulnerabilities
- Flag any outdated packages with known CVEs

### 7. Next.js-Specific Risks
- Server Actions: verify they validate input and check auth
- API routes: verify proper method checking
- Middleware: verify it covers the right paths
- Environment variables: verify only `NEXT_PUBLIC_*` vars are safe to expose

## Output
Provide a security report:
- **Critical**: Must-fix vulnerabilities
- **High**: Should-fix soon
- **Medium**: Recommended improvements
- **Low**: Best-practice suggestions
- Include file:line references and remediation steps for each finding
