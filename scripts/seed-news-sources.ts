import { getDb } from '../src/lib/db/index';

const feeds = [
  {
    name: 'Google Alerts - Deepfake',
    url: 'https://www.google.com/alerts/feeds/07444114088075802697/6311992675371346504',
    type: 'rss',
  },
  {
    name: 'Google Alerts - Age Verification',
    url: 'https://www.google.com/alerts/feeds/07444114088075802697/10048729549441548054',
    type: 'rss',
  },
  {
    name: 'Google Alerts - Deepfake Regulation',
    url: 'https://www.google.com/alerts/feeds/07444114088075802697/6311992675371345189',
    type: 'rss',
  },
];

async function main() {
  const sql = getDb();

  // Create table if not exists
  await sql`
    CREATE TABLE IF NOT EXISTS news_sources (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      url TEXT NOT NULL UNIQUE,
      type TEXT NOT NULL DEFAULT 'rss',
      active BOOLEAN DEFAULT TRUE,
      created_at TIMESTAMPTZ DEFAULT NOW()
    )
  `;

  for (const feed of feeds) {
    const rows = await sql`
      INSERT INTO news_sources (name, url, type)
      VALUES (${feed.name}, ${feed.url}, ${feed.type})
      ON CONFLICT (url) DO UPDATE SET name = ${feed.name}, active = TRUE
      RETURNING id
    `;
    console.log(`  [${rows[0].id}] ${feed.name}`);
  }

  console.log('\nDone! All news sources seeded.');
  process.exit(0);
}

main().catch((err) => {
  console.error('Failed to seed news sources:', err);
  process.exit(1);
});
