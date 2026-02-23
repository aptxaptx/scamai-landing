import { generatePageMetadata } from '@/lib/seo';
import type { Locale } from '@/lib/seo';
import NewsletterDetail from '@/components/newsletter/NewsletterDetail';
import Link from 'next/link';

interface Article {
  title: string;
  url: string;
  source: string;
  publishedAt: string;
  takeaway?: string;
  description?: string;
  imageUrl?: string;
}

interface Section {
  title: string;
  articles: Article[];
}

interface Newsletter {
  id: number;
  edition: number;
  title: string;
  date: string;
  reading_time: number;
  summary: string;
  executiveSummary: string;
  top3Articles: Article[];
  sections: Section[];
}

async function getNewsletter(id: string): Promise<Newsletter | null> {
  const apiUrl = process.env.NEWSLETTER_API_URL || 'http://localhost:3014';
  try {
    const res = await fetch(`${apiUrl}/api/newsletters/${id}`, {
      next: { revalidate: 300 },
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data.newsletter || null;
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale; id: string }> }) {
  const { locale, id } = await params;
  const newsletter = await getNewsletter(id);

  return generatePageMetadata({
    locale,
    path: `/newsletter/${id}`,
    title: newsletter ? `${newsletter.title} - Edition ${newsletter.edition}` : 'Newsletter',
    description: newsletter?.executiveSummary?.slice(0, 160) || 'Read the latest Deepfake Weekly newsletter from ScamAI.',
    keywords: ['newsletter', 'deepfake news', 'AI security', 'weekly digest'],
  });
}

export default async function NewsletterDetailPage({ params }: { params: Promise<{ locale: Locale; id: string }> }) {
  const { locale, id } = await params;
  const newsletter = await getNewsletter(id);

  if (!newsletter) {
    return (
      <main className="min-h-screen bg-black text-white">
        <section className="relative px-4 py-24 sm:px-6" style={{ paddingTop: '140px' }}>
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold">Newsletter Not Found</h1>
            <p className="mb-8 text-lg text-gray-300">
              This newsletter edition could not be found or is no longer available.
            </p>
            <Link
              href={`/${locale}/newsletter`}
              className="inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-gray-100"
            >
              View All Newsletters
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <NewsletterDetail newsletter={newsletter} locale={locale} />
    </main>
  );
}
