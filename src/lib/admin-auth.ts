import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';
import { authOptions, isEmailAllowed } from '@/lib/auth';

export async function validateSession(): Promise<boolean> {
  const session = await getServerSession(authOptions);
  return isEmailAllowed(session?.user?.email);
}

export function unauthorizedResponse() {
  return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
}
