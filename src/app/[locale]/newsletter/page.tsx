export const dynamic = 'force-dynamic';

import { generatePageMetadata, pageMetadata } from '@/lib/seo';
import type { Locale } from '@/lib/seo';
import NewsletterList from '@/components/newsletter/NewsletterList';
import { getPublishedNewsletters } from '@/lib/db/newsletters';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return generatePageMetadata({
    locale,
    path: '/newsletter',
    ...pageMetadata.newsletter,
  });
}

export default async function NewsletterPage() {
  const newsletters = await getPublishedNewsletters();

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative px-4 py-24 sm:px-6" style={{ paddingTop: '140px' }}>
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl">
            News
          </h1>
        </div>
      </section>

      <NewsletterList newsletters={newsletters} />
    </main>
  );
}
