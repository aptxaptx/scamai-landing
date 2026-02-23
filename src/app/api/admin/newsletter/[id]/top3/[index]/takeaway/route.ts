import { NextResponse } from 'next/server';
import { validateSession, unauthorizedResponse } from '@/lib/admin-auth';

const BACKEND_URL = process.env.NEWSLETTER_API_URL || 'http://localhost:3014';

export async function POST(req: Request, { params }: { params: Promise<{ id: string; index: string }> }) {
  if (!(await validateSession())) return unauthorizedResponse();

  const { id, index } = await params;
  const body = await req.json();
  const res = await fetch(`${BACKEND_URL}/admin/newsletter/${id}/top3/${index}/takeaway`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  return NextResponse.json(data, { status: res.status });
}
