import NewsletterEditor from '@/components/admin/NewsletterEditor';
import type { NewsletterDetail } from '@/types/newsletter';

const BACKEND_URL = process.env.NEWSLETTER_API_URL || 'http://localhost:3014';

async function getNewsletter(id: string): Promise<NewsletterDetail | null> {
  try {
    const res = await fetch(`${BACKEND_URL}/api/admin/newsletters/${id}`, { cache: 'no-store' });
    if (!res.ok) return null;
    const data = await res.json();
    return data.newsletter || null;
  } catch {
    return null;
  }
}

export default async function EditNewsletterPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const newsletter = await getNewsletter(id);

  if (!newsletter) {
    return (
      <div className="py-16 text-center">
        <h1 className="mb-4 text-2xl font-bold text-white">Newsletter Not Found</h1>
        <a href="/admin/newsletter" className="text-[#245FFF] hover:underline">
          Back to Dashboard
        </a>
      </div>
    );
  }

  return <NewsletterEditor newsletter={newsletter} />;
}
