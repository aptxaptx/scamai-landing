import { generatePageMetadata, pageMetadata } from '@/lib/seo';
import type { Locale } from '@/lib/seo';
import NewsletterList from '@/components/newsletter/NewsletterList';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return generatePageMetadata({
    locale,
    path: '/newsletter',
    ...pageMetadata.newsletter,
  });
}

interface Newsletter {
  id: number;
  edition: number;
  title: string;
  date: string;
  reading_time: number;
  summary: string;
  created_at: string;
}

async function getNewsletters(): Promise<Newsletter[]> {
  const apiUrl = process.env.NEWSLETTER_API_URL || 'http://localhost:3014';
  try {
    const res = await fetch(`${apiUrl}/api/newsletters`, {
      next: { revalidate: 300 },
    });
    if (!res.ok) return [];
    const data = await res.json();
    return data.newsletters || [];
  } catch {
    return [];
  }
}

export default async function NewsletterPage() {
  const newsletters = await getNewsletters();

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative px-4 py-24 sm:px-6" style={{ paddingTop: '140px' }}>
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#245FFF]">
            SCAM.AI <span className="text-white">NEWSLETTER</span>
          </p>
          <h1 className="mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Stay ahead of the curve with the latest insights and news
          </h1>
        </div>
      </section>

      <NewsletterList newsletters={newsletters} />
    </main>
  );
}
