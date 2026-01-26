"use client";

import SiteShell from "@/components/SiteShell";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useLocale, useTranslations } from "next-intl";

interface NewsItem {
  id: number;
  link: string;
  publishedDate: string;
  backgroundImage: string;
  categoryKey:
    | "business-fraud"
    | "deepfake-abuse"
    | "celebrity-impersonation"
    | "technology-threat"
    | "policy-regulation";
}

const newsData: NewsItem[] = [
  {
    id: 1,
    link: "https://www.wsj.com/articles/ai-drives-rise-in-ceo-impersonator-scams-2bd675c4?gaa_at=eafs&gaa_n=ASWzDAg-W0QOlzm3Hy894fsd0yMKcrKT1FFIkQe0NgtT7NnHzjvidgLbWi8Hbnl8L9Q%3D&gaa_ts=68a630c3&gaa_sig=TrMPhMpwWpDZs5NOk8MWqEgFQAyO0M4HcwDownBifis2pwlXrLUk7wVCnVPFjIwYZssGPdG3lw_Lp85vNk-5_g%3D%3D",
    publishedDate: "2025-08-19",
    backgroundImage: "/wsj.webp",
    categoryKey: "business-fraud",
  },
  {
    id: 2,
    link: "https://www.cbsnews.com/news/ai-generated-porn-scandal-university-of-hong-kong/",
    publishedDate: "2025-07-16",
    backgroundImage: "/hku.webp",
    categoryKey: "deepfake-abuse",
  },
  {
    id: 3,
    link: "https://www.cnn.com/2025/07/31/health/video/gupta-fake-ai-health-ads-digvid-16x9",
    publishedDate: "2025-08-01",
    backgroundImage: "/cnn.webp",
    categoryKey: "celebrity-impersonation",
  },
  {
    id: 4,
    link: "https://www.ap.org/news-highlights/spotlights/2025/creating-realistic-deepfakes-is-getting-easier-than-ever-fighting-back-may-take-even-more-ai/",
    publishedDate: "2025-07-28",
    backgroundImage: "/apnews.webp",
    categoryKey: "technology-threat",
  },
  {
    id: 5,
    link: "https://www.weforum.org/stories/2025/07/why-detecting-dangerous-ai-is-key-to-keeping-trust-alive/",
    publishedDate: "2025-07-07",
    backgroundImage: "/wef.webp",
    categoryKey: "policy-regulation",
  },
  {
    id: 6,
    link: "https://www.nytimes.com/interactive/2025/06/29/business/ai-video-deepfake-google-veo-3-quiz.html?searchResultPosition=2",
    publishedDate: "2025-06-29",
    backgroundImage: "/nyt.webp",
    categoryKey: "technology-threat",
  },
  {
    id: 7,
    link: "https://www.cbsnews.com/news/meta-facebook-sexualized-ai-deepfake-celebrity-images-spread/",
    publishedDate: "2025-02-18",
    backgroundImage: "/meta.webp",
    categoryKey: "deepfake-abuse",
  },
];

export default function NewsClient() {
  const t = useTranslations("Stories.News");
  const locale = useLocale();
  const [activeFilter, setActiveFilter] = useState<
    | "all"
    | "business-fraud"
    | "deepfake-abuse"
    | "celebrity-impersonation"
    | "technology-threat"
    | "policy-regulation"
  >("all");
  const [sortBy, setSortBy] = useState<
    "newest" | "oldest" | "alphabetical-az" | "alphabetical-za"
  >("newest");
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setSortDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const categoryLabels = {
    "business-fraud": t("categories.businessFraud"),
    "deepfake-abuse": t("categories.deepfakeAbuse"),
    "celebrity-impersonation": t("categories.celebrityImpersonation"),
    "technology-threat": t("categories.technologyThreat"),
    "policy-regulation": t("categories.policyRegulation"),
  } as const;

  // Get unique categories and their counts
  const categories = {
    all: newsData.length,
    "business-fraud": newsData.filter(
      (item) => item.categoryKey === "business-fraud"
    ).length,
    "deepfake-abuse": newsData.filter(
      (item) => item.categoryKey === "deepfake-abuse"
    ).length,
    "celebrity-impersonation": newsData.filter(
      (item) => item.categoryKey === "celebrity-impersonation"
    ).length,
    "technology-threat": newsData.filter(
      (item) => item.categoryKey === "technology-threat"
    ).length,
    "policy-regulation": newsData.filter(
      (item) => item.categoryKey === "policy-regulation"
    ).length,
  };

  const localizedItems = newsData.map((item, index) => ({
    ...item,
    title: t(`items.${index}.title`),
    summary: t(`items.${index}.summary`),
  }));

  // Apply filters
  const filteredItems = localizedItems.filter((item) => {
    if (activeFilter === "all") return true;
    return item.categoryKey === activeFilter;
  });

  // Apply sorting
  const sortedItems = filteredItems.sort((a, b) => {
    switch (sortBy) {
      case "newest":
        return (
          new Date(b.publishedDate).getTime() -
          new Date(a.publishedDate).getTime()
        );
      case "oldest":
        return (
          new Date(a.publishedDate).getTime() -
          new Date(b.publishedDate).getTime()
        );
      case "alphabetical-az":
        return a.title.localeCompare(b.title);
      case "alphabetical-za":
        return b.title.localeCompare(a.title);
      default:
        return (
          new Date(b.publishedDate).getTime() -
          new Date(a.publishedDate).getTime()
        );
    }
  });

  return (
    <SiteShell>
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-2xl backdrop-blur-sm">
        <div className="relative z-10 text-center p-8 md:p-12 lg:p-14">
          <h1 className="text-[clamp(32px,7vw,64px)] font-bold tracking-tight">
            {t("hero.title")}
          </h1>
          <p className="mt-4 text-white/85 text-[clamp(15px,2.2vw,20px)] max-w-3xl mx-auto">
            {t("hero.description")}
          </p>
        </div>
      </section>

      {/* Filter/Sort Bar */}
      <section className="mt-8 mb-8 mr-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4 flex-wrap">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-3 py-1 text-sm rounded-md transition-colors ${
                activeFilter === "all"
                  ? "bg-zinc-900 text-zinc-100 font-medium"
                  : "text-white/70 hover:text-white hover:bg-zinc-900/10"
              }`}
            >
              {t("filters.all")} ({categories.all})
            </button>
            <button
              onClick={() => setActiveFilter("business-fraud")}
              className={`px-3 py-1 text-sm rounded-md transition-colors ${
                activeFilter === "business-fraud"
                  ? "bg-zinc-900 text-zinc-100 font-medium"
                  : "text-white/70 hover:text-white hover:bg-zinc-900/10"
              }`}
            >
              {t("filters.businessFraud")} ({categories["business-fraud"]})
            </button>
            <button
              onClick={() => setActiveFilter("deepfake-abuse")}
              className={`px-3 py-1 text-sm rounded-md transition-colors ${
                activeFilter === "deepfake-abuse"
                  ? "bg-zinc-900 text-zinc-100 font-medium"
                  : "text-white/70 hover:text-white hover:bg-zinc-900/10"
              }`}
            >
              {t("filters.deepfakeAbuse")} ({categories["deepfake-abuse"]})
            </button>
            <button
              onClick={() => setActiveFilter("celebrity-impersonation")}
              className={`px-3 py-1 text-sm rounded-md transition-colors ${
                activeFilter === "celebrity-impersonation"
                  ? "bg-zinc-900 text-zinc-100 font-medium"
                  : "text-white/70 hover:text-white hover:bg-zinc-900/10"
              }`}
            >
              {t("filters.celebrityImpersonation")} (
              {categories["celebrity-impersonation"]})
            </button>
            <button
              onClick={() => setActiveFilter("technology-threat")}
              className={`px-3 py-1 text-sm rounded-md transition-colors ${
                activeFilter === "technology-threat"
                  ? "bg-zinc-900 text-zinc-100 font-medium"
                  : "text-white/70 hover:text-white hover:bg-zinc-900/10"
              }`}
            >
              {t("filters.technologyThreat")} (
              {categories["technology-threat"]})
            </button>
            <button
              onClick={() => setActiveFilter("policy-regulation")}
              className={`px-3 py-1 text-sm rounded-md transition-colors ${
                activeFilter === "policy-regulation"
                  ? "bg-zinc-900 text-zinc-100 font-medium"
                  : "text-white/70 hover:text-white hover:bg-zinc-900/10"
              }`}
            >
              {t("filters.policyRegulation")} (
              {categories["policy-regulation"]})
            </button>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-white/50 text-sm">{t("sort.label")}</span>
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setSortDropdownOpen(!sortDropdownOpen)}
                className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900/10 text-white rounded-lg hover:bg-zinc-900/20 transition-colors text-sm"
              >
                {sortBy === "newest" && t("sort.newest")}
                {sortBy === "oldest" && t("sort.oldest")}
                {sortBy === "alphabetical-az" && t("sort.az")}
                {sortBy === "alphabetical-za" && t("sort.za")}
                <svg
                  className={`w-4 h-4 transition-transform ${
                    sortDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m19 9-7 7-7-7"
                  />
                </svg>
              </button>

              {sortDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-zinc-900 rounded-lg shadow-lg border border-zinc-800 py-2 z-10">
                  <button
                    onClick={() => {
                      setSortBy("newest");
                      setSortDropdownOpen(false);
                    }}
                    className={`w-full px-4 py-2 text-left text-sm hover:bg-zinc-800 flex items-center gap-3 ${
                      sortBy === "newest"
                        ? "text-blue-600 font-medium"
                        : "text-zinc-300"
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                        sortBy === "newest"
                          ? "border-blue-600"
                          : "border-zinc-700"
                      }`}
                    >
                      {sortBy === "newest" && (
                        <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                      )}
                    </div>
                    {t("sort.newest")}
                  </button>
                  <button
                    onClick={() => {
                      setSortBy("oldest");
                      setSortDropdownOpen(false);
                    }}
                    className={`w-full px-4 py-2 text-left text-sm hover:bg-zinc-800 flex items-center gap-3 ${
                      sortBy === "oldest"
                        ? "text-blue-600 font-medium"
                        : "text-zinc-300"
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                        sortBy === "oldest"
                          ? "border-blue-600"
                          : "border-zinc-700"
                      }`}
                    >
                      {sortBy === "oldest" && (
                        <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                      )}
                    </div>
                    {t("sort.oldest")}
                  </button>
                  <button
                    onClick={() => {
                      setSortBy("alphabetical-az");
                      setSortDropdownOpen(false);
                    }}
                    className={`w-full px-4 py-2 text-left text-sm hover:bg-zinc-800 flex items-center gap-3 ${
                      sortBy === "alphabetical-az"
                        ? "text-blue-600 font-medium"
                        : "text-zinc-300"
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                        sortBy === "alphabetical-az"
                          ? "border-blue-600"
                          : "border-zinc-700"
                      }`}
                    >
                      {sortBy === "alphabetical-az" && (
                        <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                      )}
                    </div>
                    {t("sort.az")}
                  </button>
                  <button
                    onClick={() => {
                      setSortBy("alphabetical-za");
                      setSortDropdownOpen(false);
                    }}
                    className={`w-full px-4 py-2 text-left text-sm hover:bg-zinc-800 flex items-center gap-3 ${
                      sortBy === "alphabetical-za"
                        ? "text-blue-600 font-medium"
                        : "text-zinc-300"
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                        sortBy === "alphabetical-za"
                          ? "border-blue-600"
                          : "border-zinc-700"
                      }`}
                    >
                      {sortBy === "alphabetical-za" && (
                        <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                      )}
                    </div>
                    {t("sort.za")}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="mr-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedItems.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <article className="rounded-xl overflow-hidden transition-all duration-200 h-full flex flex-col">
                {/* Image */}
                <div className="aspect-video bg-gray-100 overflow-hidden">
                  <Image
                    src={item.backgroundImage}
                    alt={item.title}
                    width={400}
                    height={225}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-200"
                  />
                </div>

                {/* Content */}
                <div className="px-0 pt-4 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 text-xs font-medium bg-zinc-900/10 text-white/80 rounded-md border border-white/20">
                      {categoryLabels[item.categoryKey]}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors leading-tight">
                    {item.title}
                  </h3>

                  <p className="text-sm text-white/70 mb-3">
                    {new Date(item.publishedDate).toLocaleDateString(locale, {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>

                  <p className="text-sm text-white/60 line-clamp-3 flex-1">
                    {item.summary}
                  </p>
                </div>
              </article>
            </a>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-16 text-center mr-8">
        <div className="bg-zinc-900/5 rounded-2xl p-8 md:p-12">
          <h2 className="text-2xl font-bold tracking-tight mb-4">
            {t("cta.title")}
          </h2>
          <p className="text-white/70 text-lg mb-6 max-w-2xl mx-auto">
            {t("cta.description")}
          </p>
          <Link
            href="/demo"
            className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-zinc-100 font-semibold rounded-xl hover:bg-zinc-900/90 transition-colors"
          >
            {t("cta.button")}
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
