import NewsletterEditor from '@/components/admin/NewsletterEditor';
import { getNewsletterById } from '@/lib/db/newsletters';

export default async function EditNewsletterPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const result = await getNewsletterById(Number(id));

  if (!result) {
    return (
      <div className="py-16 text-center">
        <h1 className="mb-4 text-2xl font-bold text-white">Newsletter Not Found</h1>
        <a href="/admin/newsletter" className="text-[#245FFF] hover:underline">
          Back to Dashboard
        </a>
      </div>
    );
  }

  return <NewsletterEditor newsletter={result.newsletter} />;
}
