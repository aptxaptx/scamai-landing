import { generatePageMetadata, pageMetadata } from '@/lib/seo';
import type { Locale } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return generatePageMetadata({
    locale,
    path: '/products/vision-detection',
    ...pageMetadata.visionDetection,
  });
}

export default function VisionDetectionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
