export const dynamic = 'force-dynamic';

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

  const baseUrl = 'https://scam.ai';
  const articleUrl = `${baseUrl}/${locale}/newsletter/${id}`;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: newsletter.title,
    description: newsletter.executiveSummary?.slice(0, 160) || '',
    datePublished: newsletter.date,
    dateModified: newsletter.date,
    url: articleUrl,
    mainEntityOfPage: { '@type': 'WebPage', '@id': articleUrl },
    author: { '@type': 'Organization', name: 'Reality Inc.', url: baseUrl },
    publisher: {
      '@type': 'Organization',
      name: 'ScamAI',
      url: baseUrl,
      logo: { '@type': 'ImageObject', url: `${baseUrl}/scamai-logo.svg` },
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${baseUrl}/${locale}` },
      { '@type': 'ListItem', position: 2, name: 'News', item: `${baseUrl}/${locale}/newsletter` },
      { '@type': 'ListItem', position: 3, name: newsletter.title },
    ],
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <NewsletterDetail newsletter={newsletter} locale={locale} />
    </main>
  );
}
