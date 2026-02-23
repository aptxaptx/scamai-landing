import { NextResponse } from 'next/server';
import { validateSession, unauthorizedResponse } from '@/lib/admin-auth';
import { getNewsletterById, deleteNewsletter } from '@/lib/db/newsletters';

export async function GET(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!(await validateSession())) return unauthorizedResponse();

  const { id } = await params;
  const result = await getNewsletterById(Number(id));
  if (!result) return NextResponse.json({ error: 'Newsletter not found' }, { status: 404 });
  return NextResponse.json({ newsletter: result.newsletter, articles: result.articles });
}

export async function DELETE(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!(await validateSession())) return unauthorizedResponse();

  const { id } = await params;
  await deleteNewsletter(Number(id));
  return NextResponse.json({ success: true });
}
