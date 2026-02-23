import { NextResponse } from 'next/server';
import { validateSession, unauthorizedResponse } from '@/lib/admin-auth';
import { getStats } from '@/lib/db/newsletters';

export async function GET() {
  if (!(await validateSession())) return unauthorizedResponse();

  const stats = await getStats();
  return NextResponse.json(stats);
}
