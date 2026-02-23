import { NextResponse } from 'next/server';
import { validateSession, unauthorizedResponse } from '@/lib/admin-auth';
import { getAllNewsSources, insertNewsSource, deleteNewsSource } from '@/lib/db/newsletters';

export async function GET() {
  if (!(await validateSession())) return unauthorizedResponse();

  const sources = await getAllNewsSources();
  return NextResponse.json({ sources });
}

export async function POST(req: Request) {
  if (!(await validateSession())) return unauthorizedResponse();

  try {
    const { name, url, type } = await req.json();
    if (!name || !url) {
      return NextResponse.json({ error: 'name and url are required' }, { status: 400 });
    }
    const id = await insertNewsSource(name, url, type || 'rss');
    return NextResponse.json({ success: true, id });
  } catch (error) {
    console.error('Error adding news source:', error);
    return NextResponse.json({ error: 'Failed to add news source' }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  if (!(await validateSession())) return unauthorizedResponse();

  try {
    const { id } = await req.json();
    if (!id) {
      return NextResponse.json({ error: 'id is required' }, { status: 400 });
    }
    await deleteNewsSource(Number(id));
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting news source:', error);
    return NextResponse.json({ error: 'Failed to delete news source' }, { status: 500 });
  }
}
