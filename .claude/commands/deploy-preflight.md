Run a comprehensive pre-deployment checklist to verify the app is production-ready.

## Process

### 1. Build Verification
- Run `npx tsc --noEmit` — must pass with zero errors
- Run `npm run lint` — must pass with zero errors
- Run `npm run build` — must complete successfully
- Check build output for warnings

### 2. Environment Variables
- Verify all required env vars are documented in CLAUDE.md
- Check that no secrets are hardcoded in source code
- Search for `process.env` usage and verify each variable exists
- Verify `NEXT_PUBLIC_*` vars don't contain secrets
- Check `.env.example` or `.env.local.example` is up to date

### 3. Database
- Verify `src/lib/db/schema.sql` matches current production schema
- Check for any pending migrations
- Verify connection string doesn't include `channel_binding=require`

### 4. Auth Configuration
- Verify `NEXTAUTH_URL` should be `https://www.scam.ai` for production
- Check Google OAuth callback URL matches production
- Verify `ALLOWED_ADMIN_EMAILS` is configured

### 5. SEO & Meta
- Check that all public pages have proper meta tags
- Verify `sitemap.xml` generation works
- Check `robots.txt` configuration
- Verify OpenGraph and Twitter card meta tags
- Check structured data (JSON-LD) is valid

### 6. Git Status
- Run `git status` to check for uncommitted changes
- Verify current branch is clean
- Check if branch is up to date with remote
- Verify no merge conflicts

### 7. Performance Baseline
- Check build output for page sizes
- Flag any pages with first-load JS > 100kB
- Verify images are optimized

## Output
- **Ready to Deploy** or **Blocked** with reasons
- Checklist with pass/fail for each item
- Any warnings or recommendations
- Deployment command reminder: `npx vercel --prod` or push to `main`
