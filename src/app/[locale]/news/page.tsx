import EmptyPage from "@/components/new-site/EmptyPage";
import { generatePageMetadata, pageMetadata } from '@/lib/seo';
import type { Locale } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return generatePageMetadata({
    locale,
    path: '/news',
    ...pageMetadata.news,
    noindex: true,
  });
}

export default function NewsPage() {
  return <EmptyPage title="News" />;
}
