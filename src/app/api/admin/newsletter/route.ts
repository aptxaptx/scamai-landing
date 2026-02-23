import { NextResponse } from 'next/server';
import { validateSession, unauthorizedResponse } from '@/lib/admin-auth';

const BACKEND_URL = process.env.NEWSLETTER_API_URL || 'http://localhost:3014';

export async function GET() {
  if (!(await validateSession())) return unauthorizedResponse();

  const res = await fetch(`${BACKEND_URL}/api/admin/newsletters`, { cache: 'no-store' });
  const data = await res.json();
  return NextResponse.json(data);
}

export async function POST() {
  if (!(await validateSession())) return unauthorizedResponse();

  const res = await fetch(`${BACKEND_URL}/api/admin/generate`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });
  const data = await res.json();
  return NextResponse.json(data, { status: res.status });
}
