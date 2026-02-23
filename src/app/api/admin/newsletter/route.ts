import { NextResponse } from 'next/server';
import { validateSession, unauthorizedResponse } from '@/lib/admin-auth';
import { getAllNewsletters, insertNewsletter, insertArticles, deleteNewsletters, getActiveNewsSources } from '@/lib/db/newsletters';
import { NewsFetcher, RSSFetcher, NewsletterGenerator } from '@/lib/newsletter';

export async function GET() {
  if (!(await validateSession())) return unauthorizedResponse();

  const newsletters = await getAllNewsletters();
  return NextResponse.json({ newsletters });
}

export async function POST() {
  if (!(await validateSession())) return unauthorizedResponse();

  try {
    // Fetch from NewsAPI
    const newsFetcher = new NewsFetcher();
    const newsApiArticles = await newsFetcher.fetchDeepfakeNews(7);

    // Fetch from RSS/Atom sources stored in database
    const rssFetcher = new RSSFetcher();
    const sources = await getActiveNewsSources();
    const rssFeeds = sources
      .filter((s) => s.type === 'rss')
      .map((s) => ({ name: s.name, url: s.url }));
    const rssArticles = rssFeeds.length > 0
      ? await rssFetcher.fetchFeeds(rssFeeds)
      : [];

    // Merge and filter all articles
    const allArticles = newsFetcher.filterBlockedDomains([
      ...newsApiArticles,
      ...rssArticles,
    ]);

    if (allArticles.length === 0) {
      return NextResponse.json({ error: 'No articles found' }, { status: 400 });
    }

    const generator = new NewsletterGenerator();
    const newsletter = await generator.generate(allArticles);

    const id = await insertNewsletter({
      edition: newsletter.edition,
      title: newsletter.title,
      date: newsletter.date,
      readingTime: newsletter.readingTime,
      summary: newsletter.summary,
      content: newsletter,
    });

    await insertArticles(id, newsletter.sections);

    return NextResponse.json({
      success: true,
      newsletter: {
        id,
        edition: newsletter.edition,
        title: newsletter.title,
        sources: { newsapi: newsApiArticles.length, rss: rssArticles.length },
      },
    });
  } catch (error) {
    console.error('Error generating newsletter:', error);
    return NextResponse.json({ error: 'Failed to generate newsletter' }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  if (!(await validateSession())) return unauthorizedResponse();

  try {
    const { ids } = await req.json();
    if (!Array.isArray(ids) || ids.length === 0) {
      return NextResponse.json({ error: 'ids array is required' }, { status: 400 });
    }
    const deleted = await deleteNewsletters(ids.map(Number));
    return NextResponse.json({ success: true, deleted });
  } catch (error) {
    console.error('Error batch deleting newsletters:', error);
    return NextResponse.json({ error: 'Failed to delete newsletters' }, { status: 500 });
  }
}
