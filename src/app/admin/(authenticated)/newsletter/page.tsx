import NewsletterDashboard from '@/components/admin/NewsletterDashboard';
import { getAllNewsletters, getStats } from '@/lib/db/newsletters';

export default async function AdminNewsletterPage() {
  const [newsletters, stats] = await Promise.all([getAllNewsletters(), getStats()]);

  return <NewsletterDashboard newsletters={newsletters} stats={stats} />;
}
