import { NextResponse } from 'next/server';
import { validateSession, unauthorizedResponse } from '@/lib/admin-auth';
import { getAllNewsletters, insertNewsletter, insertArticles } from '@/lib/db/newsletters';
import { NewsFetcher, NewsletterGenerator } from '@/lib/newsletter';

export async function GET() {
  if (!(await validateSession())) return unauthorizedResponse();

  const newsletters = await getAllNewsletters();
  return NextResponse.json({ newsletters });
}

export async function POST() {
  if (!(await validateSession())) return unauthorizedResponse();

  try {
    const fetcher = new NewsFetcher();
    const articles = await fetcher.fetchDeepfakeNews(7);

    if (articles.length === 0) {
      return NextResponse.json({ error: 'No articles found' }, { status: 400 });
    }

    const generator = new NewsletterGenerator();
    const newsletter = await generator.generate(articles);

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
      newsletter: { id, edition: newsletter.edition, title: newsletter.title },
    });
  } catch (error) {
    console.error('Error generating newsletter:', error);
    return NextResponse.json({ error: 'Failed to generate newsletter' }, { status: 500 });
  }
}
