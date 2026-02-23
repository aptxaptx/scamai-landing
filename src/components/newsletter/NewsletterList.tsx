"use client";

import { useState } from "react";
import { Link } from "@/i18n/navigation";

interface Newsletter {
  id: number;
  edition: number;
  title: string;
  date: string;
  reading_time: number;
  summary: string;
  created_at: string;
}

// Generate a consistent gradient based on edition number
const gradients = [
  "from-blue-500/20 via-indigo-400/10 to-purple-300/20",
  "from-cyan-400/20 via-blue-400/10 to-indigo-300/20",
  "from-violet-500/20 via-purple-400/10 to-pink-300/20",
  "from-sky-400/20 via-cyan-400/10 to-teal-300/20",
  "from-indigo-500/20 via-blue-400/10 to-cyan-300/20",
  "from-fuchsia-500/20 via-pink-400/10 to-rose-300/20",
];

function formatDate(dateStr: string) {
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  } catch {
    return dateStr;
  }
}

const categories = ["All", "Security", "Technology", "Policy", "Industry"];

export default function NewsletterList({ newsletters }: { newsletters: Newsletter[] }) {
  const [activeCategory, setActiveCategory] = useState("All");

  if (newsletters.length === 0) {
    return (
      <section className="px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-2xl border border-gray-800 bg-gray-900/40 p-16 text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gray-800/60">
              <svg className="h-10 w-10 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
            <h2 className="mb-3 text-2xl font-bold text-white">No Newsletters Yet</h2>
            <p className="text-gray-400">
              The first edition is being prepared. Check back soon!
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Category Filter Tabs */}
      <section className="px-4 sm:px-6">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-5 py-2 text-sm font-medium transition-all duration-200 ${
                activeCategory === category
                  ? "border-[#245FFF] bg-[#245FFF]/10 text-white"
                  : "border-gray-700 bg-transparent text-gray-400 hover:border-gray-500 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Newsletter Card Grid */}
      <section className="px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {newsletters.map((newsletter, index) => (
              <Link
                key={newsletter.id}
                href={`/newsletter/${newsletter.id}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/30 transition-all duration-300 hover:border-gray-700 hover:bg-gray-900/50 hover:shadow-lg hover:shadow-black/20"
              >
                {/* Thumbnail Area */}
                <div className={`relative h-48 overflow-hidden bg-gradient-to-br ${gradients[index % gradients.length]}`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm">
                      <svg className="h-8 w-8 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                      </svg>
                    </div>
                  </div>
                  {/* Edition Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center rounded-full bg-black/40 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                      Edition {newsletter.edition}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-5">
                  <h2 className="mb-2 text-lg font-bold text-white transition-colors group-hover:text-[#245FFF]">
                    {newsletter.title}
                  </h2>
                  {newsletter.summary && (
                    <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-400 line-clamp-3">
                      {newsletter.summary}
                    </p>
                  )}
                  {/* Date */}
                  <div className="mt-auto flex items-center gap-2 text-xs text-gray-500">
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>
                    <span>{formatDate(newsletter.date)}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900/20 px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold sm:text-4xl">
            Stay ahead of deepfake threats
          </h2>
          <p className="mb-8 text-lg text-gray-300">
            Protect your platform with AI-powered detection. Start with 200 free images per month.
          </p>
          <a
            href="https://app.scam.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="rainbow-button inline-block"
          >
            <span className="rainbow-button-inner">
              Start Free Trial
            </span>
          </a>
        </div>
      </section>
    </>
  );
}
