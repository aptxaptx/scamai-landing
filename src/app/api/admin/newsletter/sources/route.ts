import { NextResponse } from 'next/server';
import { validateSession, unauthorizedResponse } from '@/lib/admin-auth';
import { getAllNewsSources, insertNewsSource, deleteNewsSource } from '@/lib/db/newsletters';

export async function GET() {
  if (!(await validateSession())) return unauthorizedResponse();

  const sources = await getAllNewsSources();
  return NextResponse.json({ sources });
}

// Block private/internal IP ranges and localhost to prevent SSRF
function isUrlSafe(urlString: string): boolean {
  try {
    const parsed = new URL(urlString);
    if (!['http:', 'https:'].includes(parsed.protocol)) return false;
    const hostname = parsed.hostname.toLowerCase();
    const blockedHosts = ['localhost', '127.0.0.1', '0.0.0.0', '::1', '169.254.169.254'];
    if (blockedHosts.includes(hostname)) return false;
    // Block private IP ranges
    if (/^(10\.|172\.(1[6-9]|2\d|3[01])\.|192\.168\.)/.test(hostname)) return false;
    if (hostname.endsWith('.internal') || hostname.endsWith('.local')) return false;
    return true;
  } catch {
    return false;
  }
}

export async function POST(req: Request) {
  if (!(await validateSession())) return unauthorizedResponse();

  try {
    let body;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
    }

    const { name, url, type } = body;
    if (!name || typeof name !== 'string' || name.length > 200) {
      return NextResponse.json({ error: 'Valid name is required (max 200 chars)' }, { status: 400 });
    }
    if (!url || typeof url !== 'string' || url.length > 2000) {
      return NextResponse.json({ error: 'Valid url is required (max 2000 chars)' }, { status: 400 });
    }
    if (!isUrlSafe(url)) {
      return NextResponse.json({ error: 'Invalid or blocked URL. Must be a public http/https URL.' }, { status: 400 });
    }
    if (type && !['rss', 'atom', 'api'].includes(type)) {
      return NextResponse.json({ error: 'type must be rss, atom, or api' }, { status: 400 });
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
    let body;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
    }

    const { id } = body;
    const numId = Number(id);
    if (!Number.isInteger(numId) || numId <= 0) {
      return NextResponse.json({ error: 'Valid positive integer id is required' }, { status: 400 });
    }
    await deleteNewsSource(numId);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting news source:', error);
    return NextResponse.json({ error: 'Failed to delete news source' }, { status: 500 });
  }
}
