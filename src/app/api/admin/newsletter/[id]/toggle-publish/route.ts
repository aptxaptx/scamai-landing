import { NextResponse } from 'next/server';
import { validateSession, unauthorizedResponse } from '@/lib/admin-auth';

const BACKEND_URL = process.env.NEWSLETTER_API_URL || 'http://localhost:3014';

export async function POST(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!(await validateSession())) return unauthorizedResponse();

  const { id } = await params;
  const res = await fetch(`${BACKEND_URL}/api/admin/newsletters/${id}/toggle-publish`, {
    method: 'POST',
  });
  const data = await res.json();
  return NextResponse.json(data, { status: res.status });
}
