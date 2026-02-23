import { NextResponse } from 'next/server';
import { validateSession, unauthorizedResponse } from '@/lib/admin-auth';
import { getNewsletterContent, updateContent } from '@/lib/db/newsletters';

export async function POST(req: Request, { params }: { params: Promise<{ id: string; index: string }> }) {
  if (!(await validateSession())) return unauthorizedResponse();

  const { id, index } = await params;
  const { takeaway } = await req.json();

  const row = await getNewsletterContent(Number(id));
  if (!row) return NextResponse.json({ error: 'Newsletter not found' }, { status: 404 });

  const content = typeof row.content === 'string' ? JSON.parse(row.content) : row.content;
  const articleIndex = parseInt(index);

  if (!content.top3Articles || !content.top3Articles[articleIndex]) {
    return NextResponse.json({ error: 'Article not found' }, { status: 404 });
  }

  content.top3Articles[articleIndex].takeaway = takeaway;
  await updateContent(Number(id), content);
  return NextResponse.json({ success: true });
}
