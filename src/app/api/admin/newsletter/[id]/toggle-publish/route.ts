import { NextResponse } from 'next/server';
import { validateSession, unauthorizedResponse } from '@/lib/admin-auth';
import { togglePublish } from '@/lib/db/newsletters';

export async function POST(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!(await validateSession())) return unauthorizedResponse();

  const { id } = await params;
  const published = await togglePublish(Number(id));
  return NextResponse.json({ success: true, published });
}
