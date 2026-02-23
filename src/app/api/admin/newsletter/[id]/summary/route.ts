import { NextResponse } from 'next/server';
import { validateSession, unauthorizedResponse } from '@/lib/admin-auth';

const BACKEND_URL = process.env.NEWSLETTER_API_URL || 'http://localhost:3014';

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!(await validateSession())) return unauthorizedResponse();

  const { id } = await params;
  const body = await req.json();
  const res = await fetch(`${BACKEND_URL}/api/admin/newsletters/${id}/summary`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  return NextResponse.json(data, { status: res.status });
}
