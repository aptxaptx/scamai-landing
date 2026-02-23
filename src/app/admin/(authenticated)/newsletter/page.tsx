import NewsletterDashboard from '@/components/admin/NewsletterDashboard';
import { getAllNewsletters, getStats } from '@/lib/db/newsletters';
import type { Newsletter, Stats } from '@/types/newsletter';

export default async function AdminNewsletterPage() {
  let newsletters: Newsletter[] = [];
  let stats: Stats = { total: 0, published: 0, drafts: 0 };
  try {
    [newsletters, stats] = await Promise.all([getAllNewsletters(), getStats()]);
  } catch (error) {
    console.error('Failed to fetch admin newsletter data:', error);
  }

  return <NewsletterDashboard newsletters={newsletters} stats={stats} />;
}
