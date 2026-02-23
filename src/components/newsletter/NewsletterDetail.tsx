"use client";

import { Link } from "@/i18n/navigation";

interface Article {
  title: string;
  url: string;
  source: string;
  publishedAt: string;
  takeaway?: string;
  description?: string;
  imageUrl?: string;
}

interface Section {
  title: string;
  articles: Article[];
}

interface Newsletter {
  id: number;
  edition: number;
  title: string;
  date: string;
  reading_time: number;
  summary: string;
  executiveSummary: string;
  top3Articles: Article[];
  sections: Section[];
}

function formatDate(dateStr: string) {
  try {
    return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return dateStr;
  }
}

function cleanTitle(title: string) {
  return title.replace(/^\[.*?\]\s*/, "");
}

export default function NewsletterDetail({
  newsletter,
  locale,
}: {
  newsletter: Newsletter;
  locale: string;
}) {
  return (
    <div className="px-4 sm:px-6" style={{ paddingTop: "100px" }}>
      <div className="mx-auto max-w-3xl pb-24">
        {/* Back Link */}
        <Link
          href="/newsletter"
          className="mb-6 inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          All Newsletters
        </Link>

        {/* Newsletter Card */}
        <div className="overflow-hidden rounded-2xl border border-gray-800">
          {/* Header */}
          <div
            className="relative overflow-hidden px-8 py-10 text-center sm:px-12 sm:py-14"
            style={{
              background:
                "radial-gradient(ellipse at top, rgba(36, 95, 255, 0.4) 0%, transparent 70%), linear-gradient(180deg, #0a1228 0%, #060d1f 50%, #000000 100%)",
            }}
          >
            {/* Noise overlay */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
              }}
            />
            <div className="relative z-10">
              <h1 className="mb-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                {newsletter.title}
              </h1>
              <div className="flex items-center justify-center gap-2 text-sm text-white/80">
                <span>Edition {newsletter.edition}</span>
                <span className="text-white/40">|</span>
                <span>{newsletter.date}</span>
                {newsletter.reading_time && (
                  <>
                    <span className="text-white/40">|</span>
                    <span>{newsletter.reading_time} min read</span>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Executive Summary */}
          {newsletter.executiveSummary && (
            <div className="border-b border-gray-800 bg-[#245FFF]/[0.03] px-8 py-6 sm:px-12">
              <h2 className="mb-3 border-b-2 border-[#245FFF] pb-2 text-sm font-semibold uppercase tracking-wider text-gray-300">
                Executive Summary
              </h2>
              <p className="text-sm leading-relaxed text-gray-300">
                {newsletter.executiveSummary}
              </p>
            </div>
          )}

          {/* Top Articles */}
          {newsletter.top3Articles.length > 0 && (
            <div className="border-b border-gray-800 px-8 py-8 sm:px-12">
              <h2 className="mb-6 border-b-2 border-[#245FFF] pb-3 text-xl font-bold text-white">
                Top Deepfake News
              </h2>

              <div className="space-y-4">
                {newsletter.top3Articles.map((article, index) => (
                  <div
                    key={index}
                    className="group rounded-lg border-l-4 border-[#245FFF] bg-gray-900/40 p-5 transition-all duration-200 hover:bg-gray-900/60"
                  >
                    <div className="flex gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="mb-2 flex items-center gap-3">
                          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#245FFF] text-xs font-bold text-white">
                            {index + 1}
                          </span>
                          <div className="flex flex-wrap gap-2 text-xs text-gray-500">
                            <span>{article.source}</span>
                            <span>{formatDate(article.publishedAt)}</span>
                          </div>
                        </div>

                        <h3 className="mb-2 text-base font-semibold text-white sm:text-lg">
                          <a
                            href={article.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-colors hover:text-[#245FFF]"
                          >
                            {cleanTitle(article.title)}
                          </a>
                        </h3>

                        {article.takeaway && (
                          <div className="mb-3 rounded-md border-l-2 border-[#245FFF]/50 bg-[#245FFF]/5 px-3 py-2 text-sm text-gray-300">
                            <span className="mr-1 font-semibold text-[#245FFF]">Key Takeaway:</span>
                            {article.takeaway}
                          </div>
                        )}

                        <a
                          href={article.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm font-semibold text-[#245FFF] transition-all hover:gap-2"
                        >
                          Read Full Article
                          <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Other News Sections */}
          {newsletter.sections.length > 0 && (
            <div className="bg-gray-950/40 px-8 py-8 sm:px-12">
              <h2 className="mb-6 border-b-2 border-[#245FFF] pb-3 text-xl font-bold text-white">
                Other News
              </h2>

              {newsletter.sections.map((section, sIndex) => (
                <div key={sIndex} className="mb-8 last:mb-0">
                  <h3 className="mb-4 text-base font-semibold text-gray-200">
                    {section.title}
                  </h3>

                  <div className="space-y-3">
                    {section.articles.map((article, aIndex) => (
                      <div
                        key={aIndex}
                        className="rounded-lg border border-gray-800 bg-black/40 p-4 transition-all duration-200 hover:border-gray-700"
                      >
                        <h4 className="mb-1 text-sm font-semibold text-white">
                          <a
                            href={article.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-colors hover:text-[#245FFF]"
                          >
                            {cleanTitle(article.title)}
                          </a>
                        </h4>
                        <div className="mb-2 flex flex-wrap gap-2 text-xs text-gray-500">
                          <span>{article.source}</span>
                          <span>{formatDate(article.publishedAt)}</span>
                        </div>
                        {article.description && (
                          <p className="mb-2 text-sm text-gray-400 line-clamp-2">
                            {article.description}
                          </p>
                        )}
                        <a
                          href={article.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-semibold text-[#245FFF] hover:underline"
                        >
                          Read full article →
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Footer */}
          <div className="border-t border-gray-800 bg-gray-900/20 px-8 py-6 text-center sm:px-12">
            <p className="text-xs text-gray-500">
              Curated weekly newsletter tracking deepfake technology, security breaches, and policy updates.
              <br />
              Powered by Reality Inc
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
