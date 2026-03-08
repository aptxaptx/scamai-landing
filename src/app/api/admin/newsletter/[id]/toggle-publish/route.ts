import { NextResponse } from 'next/server';
import { validateSession, unauthorizedResponse } from '@/lib/admin-auth';
import { togglePublish } from '@/lib/db/newsletters';

export async function POST(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!(await validateSession())) return unauthorizedResponse();

  const { id } = await params;
  const newsletterId = Number(id);
  if (!Number.isInteger(newsletterId) || newsletterId <= 0) {
    return NextResponse.json({ error: 'Invalid newsletter id' }, { status: 400 });
  }

  const published = await togglePublish(newsletterId);
  return NextResponse.json({ success: true, published });
}
