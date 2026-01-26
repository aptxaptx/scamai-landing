import { getTranslations } from "next-intl/server";

import SiteShell from "@/components/SiteShell";
import { type Locale } from "@/i18n/config";
import { Link } from "@/i18n/navigation";
import { getAllPapers } from "@/lib/mdx";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Research.Page" });
  return {
    title: t("metadata.title"),
  };
}

export default async function ResearchPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Research.Page" });
  const papers = await getAllPapers(locale);

  return (
    <SiteShell>
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-semibold">
            {t("hero.title")}
          </h1>
          <p className="text-zinc-400 mt-2">
            {t("hero.description")}
          </p>
        </div>

        <div className="grid gap-6">
          {papers.map((paper) => (
            <article
              key={paper.id}
              className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-sm"
            >
              <div className="flex flex-col gap-2">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                  {paper.venue} • {paper.year}
                </p>
                <h2 className="text-xl font-semibold text-zinc-100">
                  {paper.title}
                </h2>
                {paper.description ? (
                  <p className="text-zinc-400">{paper.description}</p>
                ) : null}
                <div className="mt-2 flex flex-wrap gap-3 text-sm">
                  <Link
                    href={`/research/publication/papers/${paper.id}`}
                    className="font-semibold text-indigo-600 hover:text-indigo-800"
                  >
                    {t("links.readSummary")}
                  </Link>
                  {paper.pdfUrl ? (
                    <a
                      href={paper.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-zinc-100"
                    >
                      {t("links.viewPdf")}
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
