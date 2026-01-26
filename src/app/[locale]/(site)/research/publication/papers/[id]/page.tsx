import Image from "next/image";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getTranslations } from "next-intl/server";

import SiteShell from "@/components/SiteShell";
import { rtlLocales, type Locale } from "@/i18n/config";
import { Link } from "@/i18n/navigation";
import { getAllPapers, getMdxBySlug } from "@/lib/mdx";
import ShareButton from "./ShareButton";

type PaperFrontmatter = {
  title: string;
  authors: string[];
  venue: string;
  year: number;
  publishDate: string;
  description: string;
  pdfUrl: string;
  category: string;
  tags: string[];
  image: string;
};

export default async function PaperPage({
  params,
}: {
  params: Promise<{ id: string; locale: Locale }>;
}) {
  const { id, locale } = await params;
  const t = await getTranslations({ locale, namespace: "Research.Paper" });
  const { source, frontmatter } = await getMdxBySlug<PaperFrontmatter>(
    id,
    locale,
    "research"
  );
  const papers = await getAllPapers(locale);
  const paper = papers.find((item) => item.id === id);
  const isRtl = rtlLocales.includes(locale);

  if (!paper) {
    notFound();
  }

  const dateFormatterLong = new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const dateFormatterShort = new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  const publishDate = frontmatter.publishDate
    ? dateFormatterLong.format(new Date(frontmatter.publishDate))
    : "";
  const relatedDate = (date: string) =>
    date ? dateFormatterShort.format(new Date(date)) : "";

  return (
    <SiteShell>
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Header */}
        <header className="mb-8">
          <p className="text-white/70 mb-2">
            {publishDate}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {(frontmatter.tags ?? []).map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm font-medium text-white/80 border border-white/20 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
            {frontmatter.title}
          </h1>
          
          <p className="text-xl text-white/80 mb-8 leading-relaxed">
            {frontmatter.description}
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href={frontmatter.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-zinc-100 font-semibold rounded-xl hover:bg-zinc-900/90 transition-colors"
            >
              {t("readPaper")}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <ShareButton />
          </div>
        </header>

        {/* Content */}
        <article className="rounded-2xl p-8 md:p-12 mb-16">
          <div
            className="prose dark:prose-invert max-w-none"
            dir={isRtl ? "rtl" : "ltr"}
          >
            <MDXRemote source={source} />
          </div>
          
          {/* Authors */}
          <section className="border-t border-white/20 pt-8 mt-12">
            <h3 className="text-lg font-semibold text-white mb-4">{frontmatter.year}</h3>
            <div className="text-white/80">
              <strong>{t("authorsLabel")}</strong>{" "}
              {(frontmatter.authors ?? []).join(", ")}
            </div>
          </section>
        </article>

        {/* Keep Reading Section */}
        <section>
          <h2 className="text-2xl font-bold tracking-tight mb-6 text-white">
            {t("keepReading")}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {papers
              .filter((related) => related.id !== paper.id)
              .map((relatedPaper) => (
                <Link
                  key={relatedPaper.id}
                  href={`/research/publication/papers/${relatedPaper.id}`}
                  className="group block"
                >
                  <article className="rounded-xl overflow-hidden transition-all duration-200">
                    <div className="aspect-video bg-gray-100 overflow-hidden">
                      <Image 
                        src={relatedPaper.image} 
                        alt={relatedPaper.title}
                        width={400}
                        height={225}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-200"
                      />
                    </div>
                    <div className="px-0 pt-4">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-2 py-1 text-xs font-medium bg-zinc-900/10 text-white/80 rounded-md border border-white/20">
                          {relatedPaper.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors leading-tight">
                        {relatedPaper.title}
                      </h3>
                      <p className="text-sm text-white/70">
                        {relatedDate(relatedPaper.publishDate)}
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
