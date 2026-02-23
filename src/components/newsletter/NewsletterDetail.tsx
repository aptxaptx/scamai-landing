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
  slug?: string;
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
      month: "long",
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
    <article className="relative" style={{ paddingTop: "80px" }}>
      {/* Hero */}
      <header className="relative overflow-hidden pb-16 pt-20">
        <div className="pointer-events-none absolute inset-0" style={{
          background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(36, 95, 255, 0.12) 0%, transparent 100%)",
        }} />
        <div className="relative mx-auto max-w-2xl px-6 text-center">
          <Link
            href="/newsletter"
            className="mb-8 inline-flex items-center gap-1.5 text-sm text-gray-500 transition hover:text-white"
          >
            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All Newsletters
          </Link>
          <div className="mb-5 flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gray-500">
            <span>Edition {newsletter.edition}</span>
            <span className="h-1 w-1 rounded-full bg-gray-600" />
            <span>{newsletter.date}</span>
            {newsletter.reading_time > 0 && (
              <>
                <span className="h-1 w-1 rounded-full bg-gray-600" />
                <span>{newsletter.reading_time} min read</span>
              </>
            )}
          </div>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            {newsletter.title}
          </h1>
        </div>
      </header>

      {/* Content */}
      <div className="mx-auto max-w-2xl px-6 pb-24">

        {/* Executive Summary */}
        {newsletter.executiveSummary && (
          <section className="mb-16">
            <p className="text-lg leading-8 text-gray-300" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
              {newsletter.executiveSummary}
            </p>
          </section>
        )}

        {/* Divider */}
        <div className="mb-16 flex items-center gap-4">
          <div className="h-px flex-1 bg-gray-800" />
          <svg className="h-4 w-4 text-gray-600" fill="currentColor" viewBox="0 0 16 16"><circle cx="8" cy="8" r="2" /></svg>
          <div className="h-px flex-1 bg-gray-800" />
        </div>

        {/* Top Stories */}
        {newsletter.top3Articles.length > 0 && (
          <section className="mb-16">
            <h2 className="mb-10 text-xs font-semibold uppercase tracking-widest text-gray-500">
              Top Stories
            </h2>

            <div className="space-y-12">
              {newsletter.top3Articles.map((article, index) => (
                <div key={index} className="group">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="text-3xl font-bold tabular-nums text-gray-700">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span className="font-medium text-gray-400">{article.source}</span>
                      <span className="h-1 w-1 rounded-full bg-gray-600" />
                      <span>{formatDate(article.publishedAt)}</span>
                    </div>
                  </div>

                  <h3 className="mb-3 text-xl font-bold leading-snug text-white sm:text-2xl">
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition hover:text-[#5B8AFF]"
                    >
                      {cleanTitle(article.title)}
                    </a>
                  </h3>

                  {article.takeaway && (
                    <p className="mb-4 text-base leading-7 text-gray-400" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
                      {article.takeaway}
                    </p>
                  )}

                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-[#5B8AFF] transition hover:gap-2.5"
                  >
                    Read full article
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>

                  {index < newsletter.top3Articles.length - 1 && (
                    <div className="mt-12 h-px bg-gray-800/60" />
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* More News Sections */}
        {newsletter.sections.length > 0 && (
          <section>
            {newsletter.sections.map((section, sIndex) => (
              <div key={sIndex} className="mb-14 last:mb-0">
                <div className="mb-8 flex items-center gap-4">
                  <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                    {section.title}
                  </h2>
                  <div className="h-px flex-1 bg-gray-800" />
                </div>

                <div className="space-y-8">
                  {section.articles.map((article, aIndex) => (
                    <div key={aIndex} className="group">
                      <h3 className="mb-1.5 text-base font-semibold leading-snug text-white sm:text-lg">
                        <a
                          href={article.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition hover:text-[#5B8AFF]"
                        >
                          {cleanTitle(article.title)}
                        </a>
                      </h3>

                      <div className="mb-2 flex items-center gap-2 text-xs text-gray-500">
                        <span className="font-medium text-gray-400">{article.source}</span>
                        <span className="h-1 w-1 rounded-full bg-gray-600" />
                        <span>{formatDate(article.publishedAt)}</span>
                      </div>

                      {article.description && (
                        <p className="text-sm leading-6 text-gray-400">
                          {article.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </section>
        )}

        {/* End divider */}
        <div className="mt-16 mb-12 flex items-center justify-center gap-2">
          <span className="h-1 w-1 rounded-full bg-gray-600" />
          <span className="h-1 w-1 rounded-full bg-gray-600" />
          <span className="h-1 w-1 rounded-full bg-gray-600" />
        </div>

        {/* Footer */}
        <footer className="text-center">
          <p className="mb-4 text-sm text-gray-500">
            Curated by <span className="text-gray-400">ScamAI</span> — tracking deepfake technology, security, and policy.
          </p>
          <Link
            href="/newsletter"
            className="text-sm font-medium text-[#5B8AFF] transition hover:text-white"
          >
            Browse all editions
          </Link>
        </footer>
      </div>
    </article>
  );
}
