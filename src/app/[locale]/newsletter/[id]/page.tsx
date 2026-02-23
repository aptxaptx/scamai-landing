import { generatePageMetadata } from '@/lib/seo';
import type { Locale } from '@/lib/seo';
import NewsletterDetail from '@/components/newsletter/NewsletterDetail';
import Link from 'next/link';
import { getPublishedNewsletter } from '@/lib/db/newsletters';

async function getNewsletter(id: string) {
  return getPublishedNewsletter(Number(id));
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
