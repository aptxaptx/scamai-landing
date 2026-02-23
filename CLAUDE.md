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
      newsletter/[id]/ # Public newsletter detail (supports slug or numeric ID)
    admin/           # Admin CMS (newsletter management)
      login/         # Google OAuth login page
      (authenticated)/ # Protected routes (session-gated layout)
        newsletter/    # Dashboard + editor pages
    api/
      auth/[...nextauth]/ # NextAuth Google OAuth
      admin/newsletter/   # Admin API routes (direct DB queries)
        [id]/content/     # PUT - save all newsletter content
        [id]/toggle-publish/ # POST - publish/unpublish
        [id]/summary/     # PUT - update executive summary
        import/           # POST - import from markdown file
  components/
    admin/           # Admin UI components (shadcn/ui)
      editor/        # Newsletter editor sub-components
        EditorHeader.tsx
        ExecutiveSummaryEditor.tsx
        TopArticlesEditor.tsx
        ArticleCard.tsx        # Reusable article edit form
        SectionsEditor.tsx
        SectionBlock.tsx       # Collapsible section with articles
        ConfirmDialog.tsx      # Reusable confirmation dialog
    newsletter/      # Public newsletter components
    new-site/        # Main site components
    ui/              # shadcn/ui components (button, card, input, etc.)
  lib/
    auth.ts          # NextAuth config (Google OAuth, allowed emails)
    admin-auth.ts    # Server-side session validation (used by API routes)
    utils.ts         # cn() utility (clsx + tailwind-merge)
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
- **Database**: Neon Postgres via `@neondatabase/serverless`. All queries in `src/lib/db/newsletters.ts`. Content stored as JSONB. Newsletters have a `slug` column for SEO-friendly URLs.
- **Newsletter generation**: `NewsFetcher` pulls from NewsAPI, `NewsletterGenerator` scores/categorizes/summarizes articles. Ollama optional (template fallback for production).
- **i18n**: next-intl with `[locale]` dynamic segment. Translations in `src/messages/`.
- **Styling**: Tailwind CSS 4 with `@tailwindcss/postcss`. Dark theme throughout. Admin uses shadcn/ui components (Button, Card, Input, Textarea, Dialog, Collapsible, etc.). CSS variables for shadcn defined in `globals.css`.
- **Admin API routes**: Direct Neon Postgres queries with `validateSession()` auth check. No separate backend needed.
- **Newsletter URLs**: Public newsletters use slug-based URLs (`/newsletter/deepfake-weekly`). Old numeric IDs still work as fallback.

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

## Newsletter CMS Operations Guide

### How the CMS Works
The admin CMS is at `/admin/newsletter` (requires Google OAuth login). It manages newsletters stored in Neon Postgres with content as JSONB.

### Newsletter Data Structure
Each newsletter has:
- **Title** and **Date** (editable in the editor header)
- **Slug** (auto-generated from title, used for SEO-friendly public URLs)
- **Executive Summary** (main summary paragraph)
- **Top 3 Articles** (each with: title, URL, source, publishedAt, takeaway)
- **Sections** (categorized groups like "Security Breaches", "Technology & Tools", each containing articles with: title, URL, source, description)

### Creating a Newsletter
1. **Auto-generate**: Click "Generate Newsletter" on dashboard — fetches articles from NewsAPI, scores/categorizes them, creates a draft
2. **Import Markdown**: Click "Import MD" and upload a `.md` file with this format:
   ```markdown
   ---
   title: "Newsletter Title"
   edition: 10
   date: "February 23, 2026"
   summary: "One-line summary"
   readingTime: 5
   ---
   Executive summary paragraph here.

   ## Top Stories
   - [Article Title](https://url.com) - Source Name
     Takeaway or description text.

   ## Section Name
   - [Article Title](https://url.com) - Source Name
     Description text.
   ```

### Editing a Newsletter
1. Click "Edit" on any newsletter in the dashboard
2. Edit **title**, **date**, **executive summary** inline
3. Edit any **article field** (title, URL, source, takeaway/description)
4. **Add/remove articles** using the + and trash buttons
5. **Reorder articles** using the up/down arrows
6. **Add/remove/rename sections** — sections are collapsible
7. Click **"Save Changes"** (top right) to persist all edits at once
8. Changes are NOT saved until you click Save — the button shows "Save Changes" when there are unsaved edits

### Publishing
- Toggle publish/unpublish from the dashboard using the "Publish"/"Unpublish" button
- Published newsletters appear at `/[locale]/newsletter/[slug]`
- Draft newsletters are only visible in the admin

### Batch Operations
- Select multiple newsletters with checkboxes
- "Select All" checkbox in the table header
- "Delete Selected" button appears when items are selected

### API Endpoints (for programmatic access)
All require authenticated session (Google OAuth).
- `GET /api/admin/newsletter` — list all newsletters
- `POST /api/admin/newsletter` — auto-generate new newsletter
- `DELETE /api/admin/newsletter` — batch delete `{ ids: number[] }`
- `GET /api/admin/newsletter/[id]` — get newsletter detail
- `DELETE /api/admin/newsletter/[id]` — delete single newsletter
- `PUT /api/admin/newsletter/[id]/content` — save all content `{ executiveSummary, top3Articles, sections, title, date }`
- `POST /api/admin/newsletter/[id]/toggle-publish` — toggle publish status
- `POST /api/admin/newsletter/import` — import from markdown `{ markdown: string }`
- `GET /api/admin/newsletter/stats` — get total/published/drafts counts

### Database
- `newsletters` table: id, edition, title, slug, date, reading_time, summary, content (JSONB), published, created_at
- `newsletter_articles` table: id, newsletter_id (FK CASCADE), title, source, description, url, published_at, category
- Key functions in `src/lib/db/newsletters.ts`: `insertNewsletter()`, `updateContent()`, `updateMeta()`, `deleteNewsletter()`, `deleteNewsletters()`, `togglePublish()`, `getPublishedNewsletterBySlug()`

### Deployment
- Push to `main` triggers Vercel auto-deploy, or run `npx vercel --prod`
- `NEXTAUTH_URL` must be `https://www.scam.ai` on Vercel (domain redirects to www)
- Google OAuth callback: `https://www.scam.ai/api/auth/callback/google`
- `DATABASE_URL` must NOT include `channel_binding=require`
