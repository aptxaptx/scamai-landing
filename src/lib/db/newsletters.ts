import { getDb } from './index';
import type {
  Newsletter,
  NewsletterDetail,
  NewsletterArticle,
  Stats,
} from '@/types/newsletter';

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 120);
}

interface NewsletterRow {
  id: number;
  edition: number;
  title: string;
  slug: string | null;
  date: string;
  reading_time: number | null;
  summary: string | null;
  content: unknown;
  created_at: string;
  published: boolean;
}

function parseNewsletterRow(row: NewsletterRow): NewsletterDetail {
  const content =
    typeof row.content === 'string' ? JSON.parse(row.content) : row.content;
  return {
    id: row.id,
    edition: row.edition,
    title: row.title,
    slug: row.slug || slugify(row.title),
    date: row.date,
    reading_time: row.reading_time ?? 0,
    summary: row.summary ?? '',
    published: row.published,
    created_at: row.created_at,
    executiveSummary: content?.executiveSummary || content?.summary || '',
    top3Articles: content?.top3Articles || [],
    sections: content?.sections || [],
    filteredArticles: content?.filteredArticles || [],
  };
}

// --- Public queries ---

export async function getPublishedNewsletters(): Promise<(Newsletter & { thumbnail?: string })[]> {
  const sql = getDb();
  const rows = await sql`
    SELECT id, edition, title, slug, date, reading_time, summary, created_at, published,
      COALESCE(
        content->'top3Articles'->0->>'imageUrl',
        content->'top3Articles'->1->>'imageUrl',
        content->'top3Articles'->2->>'imageUrl'
      ) AS thumbnail
    FROM newsletters
    WHERE published = TRUE
    ORDER BY edition DESC
  `;
  return (rows as Array<Newsletter & { slug: string | null; thumbnail: string | null }>).map(r => ({
    ...r,
    slug: r.slug || slugify(r.title),
    thumbnail: r.thumbnail || undefined,
  }));
}

export async function getPublishedNewsletter(
  id: number
): Promise<NewsletterDetail | null> {
  const sql = getDb();
  const rows = await sql`
    SELECT * FROM newsletters WHERE id = ${id} AND published = TRUE
  `;
  if (rows.length === 0) return null;
  return parseNewsletterRow(rows[0] as NewsletterRow);
}

export async function getPublishedNewsletterBySlug(
  slug: string
): Promise<NewsletterDetail | null> {
  const sql = getDb();
  const rows = await sql`
    SELECT * FROM newsletters WHERE slug = ${slug} AND published = TRUE
  `;
  if (rows.length === 0) return null;
  return parseNewsletterRow(rows[0] as NewsletterRow);
}

// --- Admin queries ---

export async function getAllNewsletters(): Promise<Newsletter[]> {
  const sql = getDb();
  const rows = await sql`
    SELECT id, edition, title, slug, date, reading_time, summary, published, created_at
    FROM newsletters
    ORDER BY edition DESC
  `;
  return (rows as Array<Newsletter & { slug: string | null }>).map(r => ({
    ...r,
    slug: r.slug || slugify(r.title),
  }));
}

export async function getNewsletterById(
  id: number
): Promise<{ newsletter: NewsletterDetail; articles: NewsletterArticle[] } | null> {
  const sql = getDb();
  const rows = await sql`
    SELECT * FROM newsletters WHERE id = ${id}
  `;
  if (rows.length === 0) return null;

  const articles = await sql`
    SELECT * FROM newsletter_articles
    WHERE newsletter_id = ${id}
    ORDER BY category, id
  `;

  return {
    newsletter: parseNewsletterRow(rows[0] as NewsletterRow),
    articles: articles as unknown as NewsletterArticle[],
  };
}

export async function getStats(): Promise<Stats> {
  const sql = getDb();
  const rows = await sql`
    SELECT
      COUNT(*)::int as total,
      COUNT(*) FILTER (WHERE published = TRUE)::int as published
    FROM newsletters
  `;
  const row = rows[0] || { total: 0, published: 0 };
  return {
    total: Number(row.total) || 0,
    published: Number(row.published) || 0,
    drafts: (Number(row.total) || 0) - (Number(row.published) || 0),
  };
}

export async function insertNewsletter(data: {
  edition: number;
  title: string;
  date: string;
  readingTime: number;
  summary: string;
  content: object;
}): Promise<number> {
  const sql = getDb();
  const slug = slugify(data.title);
  const rows = await sql`
    INSERT INTO newsletters (edition, title, slug, date, reading_time, summary, content, published)
    VALUES (${data.edition}, ${data.title}, ${slug}, ${data.date}, ${data.readingTime}, ${data.summary}, ${JSON.stringify(data.content)}, FALSE)
    RETURNING id
  `;
  return rows[0].id as number;
}

export async function insertArticles(
  newsletterId: number,
  sections: Array<{
    title: string;
    articles: Array<{
      title: string;
      source: string;
      description?: string | null;
      url: string;
      publishedAt: string;
    }>;
  }>
) {
  const sql = getDb();
  for (const section of sections) {
    for (const article of section.articles) {
      await sql`
        INSERT INTO newsletter_articles (newsletter_id, title, source, description, url, published_at, category)
        VALUES (${newsletterId}, ${article.title}, ${article.source}, ${article.description || ''}, ${article.url}, ${article.publishedAt}, ${section.title})
      `;
    }
  }
}

export async function deleteNewsletter(id: number): Promise<void> {
  const sql = getDb();
  await sql`DELETE FROM newsletters WHERE id = ${id}`;
}

export async function deleteNewsletters(ids: number[]): Promise<number> {
  if (ids.length === 0) return 0;
  const sql = getDb();
  const rows = await sql`DELETE FROM newsletters WHERE id = ANY(${ids}) RETURNING id`;
  return rows.length;
}

export async function togglePublish(id: number): Promise<boolean> {
  const sql = getDb();
  const rows = await sql`
    UPDATE newsletters SET published = NOT published WHERE id = ${id}
    RETURNING published
  `;
  return (rows[0]?.published as boolean) ?? false;
}

export async function updateContent(
  id: number,
  content: object,
  summary?: string
): Promise<void> {
  const sql = getDb();
  if (summary !== undefined) {
    await sql`
      UPDATE newsletters SET content = ${JSON.stringify(content)}, summary = ${summary} WHERE id = ${id}
    `;
  } else {
    await sql`
      UPDATE newsletters SET content = ${JSON.stringify(content)} WHERE id = ${id}
    `;
  }
}

export async function updateMeta(
  id: number,
  data: { title?: string; date?: string }
): Promise<void> {
  const sql = getDb();
  if (data.title !== undefined && data.date !== undefined) {
    const slug = slugify(data.title);
    await sql`UPDATE newsletters SET title = ${data.title}, slug = ${slug}, date = ${data.date} WHERE id = ${id}`;
  } else if (data.title !== undefined) {
    const slug = slugify(data.title);
    await sql`UPDATE newsletters SET title = ${data.title}, slug = ${slug} WHERE id = ${id}`;
  } else if (data.date !== undefined) {
    await sql`UPDATE newsletters SET date = ${data.date} WHERE id = ${id}`;
  }
}

// --- News Sources ---

export interface NewsSource {
  id: number;
  name: string;
  url: string;
  type: string;
  active: boolean;
  created_at: string;
}

export async function getActiveNewsSources(): Promise<NewsSource[]> {
  const sql = getDb();
  const rows = await sql`
    SELECT * FROM news_sources WHERE active = TRUE ORDER BY name
  `;
  return rows as unknown as NewsSource[];
}

export async function getAllNewsSources(): Promise<NewsSource[]> {
  const sql = getDb();
  const rows = await sql`
    SELECT * FROM news_sources ORDER BY name
  `;
  return rows as unknown as NewsSource[];
}

export async function insertNewsSource(name: string, url: string, type = 'rss'): Promise<number> {
  const sql = getDb();
  const rows = await sql`
    INSERT INTO news_sources (name, url, type)
    VALUES (${name}, ${url}, ${type})
    ON CONFLICT (url) DO UPDATE SET name = ${name}, active = TRUE
    RETURNING id
  `;
  return rows[0].id as number;
}

export async function deleteNewsSource(id: number): Promise<void> {
  const sql = getDb();
  await sql`DELETE FROM news_sources WHERE id = ${id}`;
}

export async function getNewsletterContent(
  id: number
): Promise<{ content: unknown } | null> {
  const sql = getDb();
  const rows = await sql`SELECT content FROM newsletters WHERE id = ${id}`;
  if (rows.length === 0) return null;
  return { content: rows[0].content };
}
