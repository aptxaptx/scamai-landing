# CLAUDE.md

## Project Overview
ScamAI landing site + newsletter admin CMS. Built with Next.js 15 (App Router), React 19, Tailwind CSS 4, and TypeScript.

## Commands
- `npm run dev` — Start dev server (port 3000)
- `npm run build` — Production build
- `npm run lint` — ESLint
- `npx tsc --noEmit` — Type-check

## Project Structure
```
src/
  app/
    [locale]/        # i18n public pages (next-intl)
    admin/           # Admin CMS (newsletter management)
      login/         # Google OAuth login page
      (authenticated)/ # Protected routes (session-gated layout)
    api/
      auth/[...nextauth]/ # NextAuth Google OAuth
      admin/newsletter/   # Admin API proxy routes
  components/
    admin/           # Admin UI components
    newsletter/      # Public newsletter components
    new-site/        # Main site components
  lib/
    auth.ts          # NextAuth config (Google OAuth, allowed emails)
    admin-auth.ts    # Server-side session validation (used by API routes)
  messages/          # i18n translation files
  middleware.ts      # next-intl middleware
```

## Key Patterns
- **Auth**: Google OAuth via next-auth v4. Allowed emails configured in `ALLOWED_ADMIN_EMAILS` env var. `validateSession()` in `admin-auth.ts` is the single auth check used by all admin API routes.
- **i18n**: next-intl with `[locale]` dynamic segment. Translations in `src/messages/`.
- **Styling**: Tailwind CSS 4 with `@tailwindcss/postcss`. Dark theme throughout admin.
- **Admin API routes**: Proxy pattern — admin routes in `src/app/api/admin/newsletter/` call `validateSession()` then forward to the backend `NEWSLETTER_API_URL`.

## Environment Variables
```
RESEND_API_KEY          # Email sending via Resend
NEWSLETTER_API_URL      # Newsletter backend URL
GOOGLE_CLIENT_ID        # Google OAuth
GOOGLE_CLIENT_SECRET    # Google OAuth
NEXTAUTH_SECRET         # NextAuth session encryption
NEXTAUTH_URL            # Canonical URL (http://localhost:3000 dev, https://scam.ai prod)
ALLOWED_ADMIN_EMAILS    # Comma-separated list of authorized admin emails
```
