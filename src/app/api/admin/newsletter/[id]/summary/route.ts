import { NextResponse } from 'next/server';
import { validateSession, unauthorizedResponse } from '@/lib/admin-auth';
import { getNewsletterContent, updateContent } from '@/lib/db/newsletters';

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!(await validateSession())) return unauthorizedResponse();

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

  const { executiveSummary } = body;
  if (typeof executiveSummary !== 'string' || executiveSummary.length > 10000) {
    return NextResponse.json({ error: 'Invalid executive summary' }, { status: 400 });
  }

  const row = await getNewsletterContent(newsletterId);
  if (!row) return NextResponse.json({ error: 'Newsletter not found' }, { status: 404 });

  let content;
  try {
    content = typeof row.content === 'string' ? JSON.parse(row.content) : row.content;
  } catch {
    return NextResponse.json({ error: 'Invalid newsletter data' }, { status: 500 });
  }

  content.executiveSummary = executiveSummary;

  await updateContent(newsletterId, content, executiveSummary);
  return NextResponse.json({ success: true });
}
