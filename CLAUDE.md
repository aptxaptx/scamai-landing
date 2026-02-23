# CLAUDE.md

## Project Overview
ScamAI landing site + newsletter admin CMS. Built with Next.js 15 (App Router), React 19, Tailwind CSS 4, and TypeScript. Deployed on Vercel with Neon Postgres.

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
      admin/newsletter/   # Admin API routes (direct DB queries)
  components/
    admin/           # Admin UI components
    newsletter/      # Public newsletter components
    new-site/        # Main site components
  lib/
    auth.ts          # NextAuth config (Google OAuth, allowed emails)
    admin-auth.ts    # Server-side session validation (used by API routes)
    db/
      index.ts       # Neon Postgres connection (uses DATABASE_URL)
      newsletters.ts # All newsletter DB query functions
      schema.sql     # Postgres DDL (run once to create tables)
    newsletter/
      news-fetcher.ts          # Fetches articles from NewsAPI
      newsletter-generator.ts  # Generates newsletters with scoring/categorization
      index.ts                 # Barrel export
  messages/          # i18n translation files
  middleware.ts      # next-intl middleware
scripts/
  migrate-data.ts    # One-time SQLite → Neon Postgres migration
```

## Key Patterns
- **Auth**: Google OAuth via next-auth v4. Allowed emails configured in `ALLOWED_ADMIN_EMAILS` env var. `validateSession()` in `admin-auth.ts` is the single auth check used by all admin API routes.
- **Database**: Neon Postgres via `@neondatabase/serverless`. All queries in `src/lib/db/newsletters.ts`. Content stored as JSONB.
- **Newsletter generation**: `NewsFetcher` pulls from NewsAPI, `NewsletterGenerator` scores/categorizes/summarizes articles. Ollama optional (template fallback for production).
- **i18n**: next-intl with `[locale]` dynamic segment. Translations in `src/messages/`.
- **Styling**: Tailwind CSS 4 with `@tailwindcss/postcss`. Dark theme throughout admin.
- **Admin API routes**: Direct Neon Postgres queries with `validateSession()` auth check. No separate backend needed.

## Deployment
- **Hosting**: Vercel (auto-deploys from `main` branch)
- **Database**: Neon Postgres (connection pooler endpoint)
- **Auth redirect URIs**: `https://scam.ai/api/auth/callback/google` (prod), `http://localhost:3000/api/auth/callback/google` (dev)

## Environment Variables
```
DATABASE_URL            # Neon Postgres connection string
NEWS_API_KEY            # NewsAPI.org key for article fetching
RESEND_API_KEY          # Email sending via Resend
GOOGLE_CLIENT_ID        # Google OAuth
GOOGLE_CLIENT_SECRET    # Google OAuth
NEXTAUTH_SECRET         # NextAuth session encryption
NEXTAUTH_URL            # Canonical URL (http://localhost:3000 dev, https://scam.ai prod)
ALLOWED_ADMIN_EMAILS    # Comma-separated list of authorized admin emails
OLLAMA_BASE_URL         # Optional: Ollama LLM for AI summaries (local dev only)
```
