import { getPublishedNewsletters } from '@/lib/db/newsletters';

export async function GET() {
  const newsletters = await getPublishedNewsletters();
  const baseUrl = 'https://scam.ai';

  const items = newsletters
    .map(
      (nl) => `    <item>
      <title>${escapeXml(nl.title)}</title>
      <link>${baseUrl}/en/newsletter/${nl.id}</link>
      <guid isPermaLink="true">${baseUrl}/en/newsletter/${nl.id}</guid>
      <pubDate>${new Date(nl.date).toUTCString()}</pubDate>
      <description>${escapeXml(nl.summary || '')}</description>
    </item>`
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>ScamAI News</title>
    <link>${baseUrl}/en/newsletter</link>
    <description>Weekly insights on deepfake technology, AI security, and synthetic media detection from ScamAI.</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
