"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { NewsletterDetail } from "@/types/newsletter";

function formatDate(dateStr: string) {
  try {
    return new Date(dateStr).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return dateStr;
  }
}

function cleanTitle(title: string) {
  return title.replace(/^\[.*?\]\s*/, "");
}

export default function NewsletterEditor({
  newsletter: initial,
}: {
  newsletter: NewsletterDetail;
}) {
  const router = useRouter();
  const [newsletter, setNewsletter] = useState(initial);
  const [summary, setSummary] = useState(initial.executiveSummary);
  const [savingSummary, setSavingSummary] = useState(false);
  const [summaryDirty, setSummaryDirty] = useState(false);
  const [takeaways, setTakeaways] = useState(
    initial.top3Articles.map((a) => a.takeaway || "")
  );
  const [savingTakeaway, setSavingTakeaway] = useState<number | null>(null);
  const [takeawayDirty, setTakeawayDirty] = useState<boolean[]>(
    initial.top3Articles.map(() => false)
  );

  async function handleSaveSummary() {
    setSavingSummary(true);
    try {
      const res = await fetch(`/api/admin/newsletter/${newsletter.id}/summary`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ executiveSummary: summary }),
      });
      if (res.ok) {
        setSummaryDirty(false);
      }
    } catch { /* ignore */ }
    setSavingSummary(false);
  }

  async function handleSaveTakeaway(index: number) {
    setSavingTakeaway(index);
    try {
      const res = await fetch(
        `/api/admin/newsletter/${newsletter.id}/top3/${index}/takeaway`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ takeaway: takeaways[index] }),
        }
      );
      if (res.ok) {
        setTakeawayDirty((prev) => {
          const next = [...prev];
          next[index] = false;
          return next;
        });
      }
    } catch { /* ignore */ }
    setSavingTakeaway(null);
  }

  return (
    <div>
      {/* Back Link + Header */}
      <div className="mb-6">
        <a
          href="/admin/newsletter"
          className="inline-flex items-center gap-1.5 text-sm text-gray-500 transition hover:text-white"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Dashboard
        </a>
      </div>

      <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">{newsletter.title}</h1>
          <div className="mt-1 flex items-center gap-3 text-sm text-gray-500">
            <span>Edition {newsletter.edition}</span>
            <span>{newsletter.date}</span>
            {newsletter.published ? (
              <span className="inline-flex items-center rounded-full bg-green-900/30 px-2 py-0.5 text-xs font-medium text-green-400">
                Published
              </span>
            ) : (
              <span className="inline-flex items-center rounded-full bg-yellow-900/30 px-2 py-0.5 text-xs font-medium text-yellow-400">
                Draft
              </span>
            )}
          </div>
        </div>
        <a
          href={`/en/newsletter/${newsletter.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-gray-500 transition hover:text-white"
        >
          Preview Public Page
        </a>
      </div>

      {/* Executive Summary */}
      <section className="mb-8 rounded-xl border border-gray-800 bg-gray-900/40 p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-white">Executive Summary</h2>
          <button
            onClick={handleSaveSummary}
            disabled={savingSummary || !summaryDirty}
            className="rounded-lg bg-[#245FFF] px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-[#1a4fd4] disabled:opacity-30"
          >
            {savingSummary ? "Saving..." : "Save"}
          </button>
        </div>
        <textarea
          value={summary}
          onChange={(e) => {
            setSummary(e.target.value);
            setSummaryDirty(true);
          }}
          rows={4}
          className="w-full resize-y rounded-lg border border-gray-700 bg-black px-4 py-3 text-sm text-gray-200 outline-none transition placeholder:text-gray-600 focus:border-[#245FFF]"
          placeholder="Enter the executive summary..."
        />
      </section>

      {/* Top 3 Articles */}
      {newsletter.top3Articles.length > 0 && (
        <section className="mb-8">
          <h2 className="mb-4 text-lg font-semibold text-white">Top Articles</h2>
          <div className="space-y-4">
            {newsletter.top3Articles.map((article, index) => (
              <div
                key={index}
                className="rounded-xl border border-gray-800 bg-gray-900/40 p-5"
              >
                <div className="mb-3 flex items-start gap-3">
                  <span className="inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#245FFF] text-xs font-bold text-white">
                    {index + 1}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-semibold text-white">
                      {cleanTitle(article.title)}
                    </h3>
                    <div className="mt-1 flex flex-wrap gap-2 text-xs text-gray-500">
                      <span>{article.source}</span>
                      <span>{formatDate(article.publishedAt)}</span>
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#245FFF] hover:underline"
                      >
                        View Article
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-3">
                  <label className="mb-1.5 block text-xs font-medium text-gray-500">
                    Key Takeaway
                  </label>
                  <div className="flex gap-2">
                    <textarea
                      value={takeaways[index]}
                      onChange={(e) => {
                        const next = [...takeaways];
                        next[index] = e.target.value;
                        setTakeaways(next);
                        setTakeawayDirty((prev) => {
                          const d = [...prev];
                          d[index] = true;
                          return d;
                        });
                      }}
                      rows={2}
                      className="flex-1 resize-y rounded-lg border border-gray-700 bg-black px-3 py-2 text-sm text-gray-200 outline-none transition placeholder:text-gray-600 focus:border-[#245FFF]"
                      placeholder="Enter key takeaway..."
                    />
                    <button
                      onClick={() => handleSaveTakeaway(index)}
                      disabled={savingTakeaway === index || !takeawayDirty[index]}
                      className="self-end rounded-lg bg-[#245FFF] px-3 py-2 text-xs font-semibold text-white transition hover:bg-[#1a4fd4] disabled:opacity-30"
                    >
                      {savingTakeaway === index ? "..." : "Save"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Other News Sections */}
      {newsletter.sections.length > 0 && (
        <section>
          <h2 className="mb-4 text-lg font-semibold text-white">Other News</h2>
          {newsletter.sections.map((section, sIndex) => (
            <div key={sIndex} className="mb-6">
              <h3 className="mb-3 text-sm font-semibold text-gray-400 uppercase tracking-wider">
                {section.title}
              </h3>
              <div className="space-y-2">
                {section.articles.map((article, aIndex) => (
                  <div
                    key={aIndex}
                    className="flex items-start justify-between gap-3 rounded-lg border border-gray-800 bg-gray-900/30 p-4"
                  >
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-white">
                        {cleanTitle(article.title)}
                      </p>
                      <div className="mt-1 flex flex-wrap gap-2 text-xs text-gray-500">
                        <span>{article.source}</span>
                        <span>{formatDate(article.publishedAt)}</span>
                      </div>
                      {article.description && (
                        <p className="mt-1 text-xs text-gray-500 line-clamp-2">
                          {article.description}
                        </p>
                      )}
                    </div>
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 text-xs text-[#245FFF] hover:underline"
                    >
                      View
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      )}
    </div>
  );
}
