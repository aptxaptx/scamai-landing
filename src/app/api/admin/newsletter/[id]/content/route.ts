import { NextResponse } from 'next/server';
import { validateSession, unauthorizedResponse } from '@/lib/admin-auth';
import { updateContent, updateMeta } from '@/lib/db/newsletters';

const MAX_SUMMARY_LENGTH = 10000;
const MAX_ARTICLES = 50;
const MAX_SECTIONS = 20;
const MAX_STRING_LENGTH = 5000;

function validateArticle(article: Record<string, unknown>): boolean {
  if (!article || typeof article !== 'object') return false;
  if (typeof article.title !== 'string' || article.title.length > MAX_STRING_LENGTH) return false;
  if (article.url !== undefined && typeof article.url !== 'string') return false;
  if (typeof article.url === 'string' && article.url.length > 2000) return false;
  return true;
}

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await validateSession())) return unauthorizedResponse();

  try {
    const { id } = await params;
    const newsletterId = Number(id);
    if (!Number.isInteger(newsletterId) || newsletterId <= 0) {
      return NextResponse.json({ error: 'Invalid newsletter id' }, { status: 400 });
    }

    let body;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
    }

    const { executiveSummary, top3Articles, sections, title, date } = body;

    if (typeof executiveSummary !== 'string' || executiveSummary.length > MAX_SUMMARY_LENGTH) {
      return NextResponse.json({ error: 'executiveSummary must be a string under 10000 characters' }, { status: 400 });
    }
    if (!Array.isArray(top3Articles) || !Array.isArray(sections)) {
      return NextResponse.json({ error: 'top3Articles and sections must be arrays' }, { status: 400 });
    }
    if (top3Articles.length > 3) {
      return NextResponse.json({ error: 'top3Articles must have at most 3 items' }, { status: 400 });
    }
    if (sections.length > MAX_SECTIONS) {
      return NextResponse.json({ error: `sections must have at most ${MAX_SECTIONS} items` }, { status: 400 });
    }

    // Validate article objects
    for (const article of top3Articles) {
      if (!validateArticle(article)) {
        return NextResponse.json({ error: 'Invalid article in top3Articles' }, { status: 400 });
      }
    }
    for (const section of sections) {
      if (!section || typeof section !== 'object' || typeof section.title !== 'string') {
        return NextResponse.json({ error: 'Invalid section format' }, { status: 400 });
      }
      if (Array.isArray(section.articles) && section.articles.length > MAX_ARTICLES) {
        return NextResponse.json({ error: `Each section must have at most ${MAX_ARTICLES} articles` }, { status: 400 });
      }
    }

    if (title !== undefined && (typeof title !== 'string' || title.length > 500)) {
      return NextResponse.json({ error: 'Invalid title' }, { status: 400 });
    }
    if (date !== undefined && (typeof date !== 'string' || date.length > 100)) {
      return NextResponse.json({ error: 'Invalid date' }, { status: 400 });
    }

    const content = { executiveSummary, top3Articles, sections };
    await updateContent(newsletterId, content, executiveSummary.slice(0, 200));

    if (title || date) {
      await updateMeta(newsletterId, { title, date });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error saving newsletter content:', error);
    return NextResponse.json({ error: 'Failed to save content' }, { status: 500 });
  }
}
