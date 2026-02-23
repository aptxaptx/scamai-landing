import NewsletterDashboard from '@/components/admin/NewsletterDashboard';
import type { Newsletter, Stats } from '@/types/newsletter';

const BACKEND_URL = process.env.NEWSLETTER_API_URL || 'http://localhost:3014';

async function getNewsletters(): Promise<Newsletter[]> {
  try {
    const res = await fetch(`${BACKEND_URL}/api/admin/newsletters`, { cache: 'no-store' });
    if (!res.ok) return [];
    const data = await res.json();
    return data.newsletters || [];
  } catch {
    return [];
  }
}

async function getStats(): Promise<Stats> {
  try {
    const res = await fetch(`${BACKEND_URL}/api/admin/stats`, { cache: 'no-store' });
    if (!res.ok) return { total: 0, published: 0, drafts: 0 };
    return await res.json();
  } catch {
    return { total: 0, published: 0, drafts: 0 };
  }
}

export default async function AdminNewsletterPage() {
  const [newsletters, stats] = await Promise.all([getNewsletters(), getStats()]);

  return <NewsletterDashboard newsletters={newsletters} stats={stats} />;
}
