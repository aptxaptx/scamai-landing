import { NextResponse } from 'next/server';
import { validateSession, unauthorizedResponse } from '@/lib/admin-auth';
import { updateContent, updateMeta } from '@/lib/db/newsletters';

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await validateSession())) return unauthorizedResponse();

  try {
    const { id } = await params;
    const body = await req.json();
    const { executiveSummary, top3Articles, sections, title, date } = body;

    if (typeof executiveSummary !== 'string') {
      return NextResponse.json({ error: 'executiveSummary is required' }, { status: 400 });
    }
    if (!Array.isArray(top3Articles) || !Array.isArray(sections)) {
      return NextResponse.json({ error: 'top3Articles and sections must be arrays' }, { status: 400 });
    }

    const content = { executiveSummary, top3Articles, sections };
    await updateContent(Number(id), content, executiveSummary.slice(0, 200));

    if (title || date) {
      await updateMeta(Number(id), { title, date });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error saving newsletter content:', error);
    return NextResponse.json({ error: 'Failed to save content' }, { status: 500 });
  }
}
