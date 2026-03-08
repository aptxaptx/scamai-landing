import { NextResponse } from 'next/server';
import { validateSession, unauthorizedResponse } from '@/lib/admin-auth';
import { getNewsletterContent, updateContent } from '@/lib/db/newsletters';

export async function POST(req: Request, { params }: { params: Promise<{ id: string; index: string }> }) {
  if (!(await validateSession())) return unauthorizedResponse();

  const { id, index } = await params;

  let body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const { takeaway } = body;
  if (typeof takeaway !== 'string' || takeaway.length > 5000) {
    return NextResponse.json({ error: 'Invalid takeaway' }, { status: 400 });
  }

  const articleIndex = parseInt(index, 10);
  if (!Number.isInteger(articleIndex) || articleIndex < 0 || articleIndex >= 3) {
    return NextResponse.json({ error: 'Invalid article index' }, { status: 400 });
  }

  const newsletterId = Number(id);
  if (!Number.isInteger(newsletterId) || newsletterId <= 0) {
    return NextResponse.json({ error: 'Invalid newsletter id' }, { status: 400 });
  }

  const row = await getNewsletterContent(newsletterId);
  if (!row) return NextResponse.json({ error: 'Newsletter not found' }, { status: 404 });

  let content;
  try {
    content = typeof row.content === 'string' ? JSON.parse(row.content) : row.content;
  } catch {
    return NextResponse.json({ error: 'Invalid newsletter data' }, { status: 500 });
  }

  if (!content.top3Articles || !content.top3Articles[articleIndex]) {
    return NextResponse.json({ error: 'Article not found' }, { status: 404 });
  }

  content.top3Articles[articleIndex].takeaway = takeaway;
  await updateContent(newsletterId, content);
  return NextResponse.json({ success: true });
}
