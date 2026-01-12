import SiteShell from "@/components/SiteShell";
import { Link } from "@/i18n/navigation";
import { getAllPapers } from "@/lib/mdx";

export default async function ResearchPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const papers = await getAllPapers(locale);

  return (
    <SiteShell>
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-semibold">Research</h1>
          <p className="text-slate-600 mt-2">
            Publications, datasets, and long-form analysis from the ScamAI team.
          </p>
        </div>

        <div className="grid gap-6">
          {papers.map((paper) => (
            <article
              key={paper.id}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex flex-col gap-2">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                  {paper.venue} • {paper.year}
                </p>
                <h2 className="text-xl font-semibold text-slate-900">
                  {paper.title}
                </h2>
                {paper.description ? (
                  <p className="text-slate-600">{paper.description}</p>
                ) : null}
                <div className="mt-2 flex flex-wrap gap-3 text-sm">
                  <Link
                    href={`/research/publication/papers/${paper.id}`}
                    className="font-semibold text-indigo-600 hover:text-indigo-800"
                  >
                    Read summary
                  </Link>
                  {paper.pdfUrl ? (
                    <a
                      href={paper.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 hover:text-slate-900"
                    >
                      View PDF
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </SiteShell>
  );
}
