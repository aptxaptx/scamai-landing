CREATE TABLE IF NOT EXISTS newsletters (
  id SERIAL PRIMARY KEY,
  edition INTEGER NOT NULL,
  title TEXT NOT NULL,
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
CREATE INDEX IF NOT EXISTS idx_newsletter_articles_newsletter_id ON newsletter_articles(newsletter_id);
