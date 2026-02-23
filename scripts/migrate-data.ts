/**
 * One-time migration script: SQLite → Neon Postgres
 *
 * Usage:
 *   1. Set DATABASE_URL in .env.local to your Neon connection string
 *   2. Run the schema first (paste schema.sql into Neon dashboard or run this script)
 *   3. npx tsx scripts/migrate-data.ts
 *
 * Prerequisites:
 *   npm install better-sqlite3 @types/better-sqlite3 --save-dev
 */

import Database from 'better-sqlite3';
import { neon } from '@neondatabase/serverless';
import { config } from 'dotenv';
import path from 'path';
import fs from 'fs';

config({ path: path.resolve(process.cwd(), '.env.local') });

const SQLITE_PATH = path.resolve(
  process.env.SQLITE_DB_PATH ||
    path.join(process.env.HOME || '', 'Downloads/Newsletter-master/newsletter/newsletters.db')
);

async function migrate() {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    console.error('DATABASE_URL not set in .env.local');
    process.exit(1);
  }

  if (!fs.existsSync(SQLITE_PATH)) {
    console.error(`SQLite database not found at: ${SQLITE_PATH}`);
    process.exit(1);
  }

  const sql = neon(databaseUrl);
  const sqlite = new Database(SQLITE_PATH, { readonly: true });

  console.log(`Migrating from: ${SQLITE_PATH}`);
  console.log(`Migrating to: Neon Postgres`);

  // Run schema
  const schemaPath = path.resolve(process.cwd(), 'src/lib/db/schema.sql');
  const schema = fs.readFileSync(schemaPath, 'utf-8');
  const statements = schema
    .split(';')
    .map((s) => s.trim())
    .filter(Boolean);

  for (const stmt of statements) {
    await sql.query(stmt);
  }
  console.log('Schema created.');

  // Migrate newsletters
  const newsletters = sqlite
    .prepare('SELECT * FROM newsletters ORDER BY id')
    .all() as Array<{
    id: number;
    edition: number;
    title: string;
    date: string;
    reading_time: number | null;
    summary: string | null;
    content: string;
    created_at: string;
    published: number;
  }>;

  console.log(`Found ${newsletters.length} newsletters to migrate.`);

  for (const nl of newsletters) {
    await sql`
      INSERT INTO newsletters (id, edition, title, date, reading_time, summary, content, created_at, published)
      VALUES (${nl.id}, ${nl.edition}, ${nl.title}, ${nl.date}, ${nl.reading_time}, ${nl.summary}, ${nl.content}::jsonb, ${nl.created_at}, ${nl.published === 1})
    `;
  }

  // Reset sequence
  if (newsletters.length > 0) {
    const maxId = newsletters[newsletters.length - 1].id;
    await sql.query(`SELECT setval('newsletters_id_seq', ${maxId})`);
  }

  console.log(`Migrated ${newsletters.length} newsletters.`);

  // Migrate articles
  const articles = sqlite
    .prepare('SELECT * FROM newsletter_articles ORDER BY id')
    .all() as Array<{
    id: number;
    newsletter_id: number;
    title: string;
    source: string | null;
    description: string | null;
    url: string | null;
    published_at: string | null;
    category: string | null;
  }>;

  console.log(`Found ${articles.length} articles to migrate.`);

  for (const art of articles) {
    await sql`
      INSERT INTO newsletter_articles (id, newsletter_id, title, source, description, url, published_at, category)
      VALUES (${art.id}, ${art.newsletter_id}, ${art.title}, ${art.source}, ${art.description}, ${art.url}, ${art.published_at}, ${art.category})
    `;
  }

  if (articles.length > 0) {
    const maxId = articles[articles.length - 1].id;
    await sql.query(`SELECT setval('newsletter_articles_id_seq', ${maxId})`);
  }

  console.log(`Migrated ${articles.length} articles.`);

  // Verify
  const nlCount = await sql`SELECT COUNT(*)::int as count FROM newsletters`;
  const artCount = await sql`SELECT COUNT(*)::int as count FROM newsletter_articles`;
  console.log(`\nVerification:`);
  console.log(`  Newsletters: ${nlCount[0].count} (expected ${newsletters.length})`);
  console.log(`  Articles: ${artCount[0].count} (expected ${articles.length})`);
  console.log('\nMigration complete!');

  sqlite.close();
}

migrate().catch((err) => {
  console.error('Migration failed:', err);
  process.exit(1);
});
