import { NextResponse } from 'next/server';
import { validateSession, unauthorizedResponse } from '@/lib/admin-auth';
import { getNewsletterContent, updateContent } from '@/lib/db/newsletters';

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!(await validateSession())) return unauthorizedResponse();

  const { id } = await params;
  const { executiveSummary } = await req.json();

  const row = await getNewsletterContent(Number(id));
  if (!row) return NextResponse.json({ error: 'Newsletter not found' }, { status: 404 });

  const content = typeof row.content === 'string' ? JSON.parse(row.content) : row.content;
  content.executiveSummary = executiveSummary;

  await updateContent(Number(id), content, executiveSummary);
  return NextResponse.json({ success: true });
}
