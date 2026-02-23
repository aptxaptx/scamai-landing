CREATE TABLE IF NOT EXISTS newsletters (
  id SERIAL PRIMARY KEY,
  edition INTEGER NOT NULL,
  title TEXT NOT NULL,
  slug TEXT,
  date TEXT NOT NULL,
  reading_time INTEGER,
  summary TEXT,
  content JSONB NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  published BOOLEAN DEFAULT FALSE
);

CREATE TABLE IF NOT EXISTS newsletter_articles (
  id SERIAL PRIMARY KEY,
  newsletter_id INTEGER NOT NULL REFERENCES newsletters(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  source TEXT,
  description TEXT,
  url TEXT,
  published_at TIMESTAMPTZ,
  category TEXT
);

CREATE INDEX IF NOT EXISTS idx_newsletters_published ON newsletters(published);
CREATE INDEX IF NOT EXISTS idx_newsletters_edition ON newsletters(edition DESC);
CREATE INDEX IF NOT EXISTS idx_newsletters_slug ON newsletters(slug);
CREATE INDEX IF NOT EXISTS idx_newsletter_articles_newsletter_id ON newsletter_articles(newsletter_id);

CREATE TABLE IF NOT EXISTS news_sources (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  url TEXT NOT NULL UNIQUE,
  type TEXT NOT NULL DEFAULT 'rss',
  active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Migration: Add slug column to existing tables
-- ALTER TABLE newsletters ADD COLUMN IF NOT EXISTS slug TEXT;
-- CREATE INDEX IF NOT EXISTS idx_newsletters_slug ON newsletters(slug);
-- UPDATE newsletters SET slug = LOWER(REGEXP_REPLACE(REGEXP_REPLACE(title, '[^a-zA-Z0-9]+', '-', 'g'), '^-+|-+$', '', 'g')) WHERE slug IS NULL;
