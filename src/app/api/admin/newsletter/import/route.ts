import { NextResponse } from 'next/server';
import { validateSession, unauthorizedResponse } from '@/lib/admin-auth';
import { insertNewsletter, insertArticles } from '@/lib/db/newsletters';

interface ParsedArticle {
  title: string;
  url: string;
  source: string;
  description: string;
  publishedAt: string;
  takeaway?: string;
}

interface ParsedSection {
  title: string;
  articles: ParsedArticle[];
}

function parseFrontmatter(markdown: string) {
  const match = markdown.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/);
  if (!match) return { meta: {}, body: markdown };

  const meta: Record<string, string> = {};
  for (const line of match[1].split('\n')) {
    const colonIdx = line.indexOf(':');
    if (colonIdx === -1) continue;
    const key = line.slice(0, colonIdx).trim();
    let value = line.slice(colonIdx + 1).trim();
    // Strip surrounding quotes
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    meta[key] = value;
  }
  return { meta, body: match[2] };
}

function parseMarkdownBody(body: string): { executiveSummary: string; sections: ParsedSection[] } {
  const lines = body.split('\n');
  let executiveSummary = '';
  const sections: ParsedSection[] = [];
  let currentSection: ParsedSection | null = null;
  let collectingSummary = true;
  let lastArticle: ParsedArticle | null = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Section header
    if (line.startsWith('## ')) {
      collectingSummary = false;
      lastArticle = null;
      currentSection = { title: line.slice(3).trim(), articles: [] };
      sections.push(currentSection);
      continue;
    }

    // Executive summary: paragraphs before first ##
    if (collectingSummary) {
      const trimmed = line.trim();
      if (trimmed) {
        executiveSummary += (executiveSummary ? ' ' : '') + trimmed;
      }
      continue;
    }

    // Article line: - [Title](url) - Source
    const articleMatch = line.match(/^-\s+\[(.+?)\]\((.+?)\)\s*(?:-\s*(.+))?$/);
    if (articleMatch && currentSection) {
      lastArticle = {
        title: articleMatch[1],
        url: articleMatch[2],
        source: articleMatch[3]?.trim() || '',
        description: '',
        publishedAt: new Date().toISOString(),
      };
      currentSection.articles.push(lastArticle);
      continue;
    }

    // Indented text after article = description/takeaway
    if (lastArticle && line.match(/^\s{2,}/) && line.trim()) {
      if (!lastArticle.description) {
        lastArticle.description = line.trim();
      } else {
        lastArticle.description += ' ' + line.trim();
      }
    }
  }

  return { executiveSummary, sections };
}

export async function POST(req: Request) {
  if (!(await validateSession())) return unauthorizedResponse();

  try {
    const { markdown } = await req.json();
    if (!markdown || typeof markdown !== 'string') {
      return NextResponse.json({ error: 'markdown string is required' }, { status: 400 });
    }

    const { meta, body } = parseFrontmatter(markdown);
    const { executiveSummary, sections } = parseMarkdownBody(body);

    const title = meta.title || 'Imported Newsletter';
    const edition = Number(meta.edition) || 1;
    const date = meta.date || new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    const summary = meta.summary || executiveSummary.slice(0, 150);
    const readingTime = Number(meta.readingTime) || 5;

    // First section (or "Top Stories") becomes top3Articles
    const topSectionIdx = sections.findIndex(s => s.title.toLowerCase().includes('top'));
    const topIdx = topSectionIdx >= 0 ? topSectionIdx : 0;
    const topSection = sections[topIdx];
    const top3Articles = (topSection?.articles || []).slice(0, 3).map(a => ({
      ...a,
      takeaway: a.description || '',
    }));
    const remainingSections = sections.filter((_, i) => i !== topIdx);

    const content = {
      title,
      edition,
      date,
      executiveSummary,
      top3Articles,
      sections: remainingSections.map(s => ({
        title: s.title,
        articles: s.articles,
      })),
      totalArticles: sections.reduce((sum, s) => sum + s.articles.length, 0),
      summary,
      readingTime,
    };

    const id = await insertNewsletter({
      edition,
      title,
      date,
      readingTime,
      summary,
      content,
    });

    // Insert articles into the separate articles table
    await insertArticles(id, sections.map(s => ({
      title: s.title,
      articles: s.articles.map(a => ({
        title: a.title,
        source: a.source,
        description: a.description,
        url: a.url,
        publishedAt: a.publishedAt,
      })),
    })));

    return NextResponse.json({
      success: true,
      newsletter: { id, edition, title },
    });
  } catch (error) {
    console.error('Error importing newsletter:', error);
    return NextResponse.json({ error: 'Failed to import newsletter' }, { status: 500 });
  }
}
