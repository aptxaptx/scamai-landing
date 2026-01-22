import SiteShell from "@/components/SiteShell";
import { Link } from "@/i18n/navigation";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { type Locale } from "@/i18n/config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "Stories.AiGeneratedImages",
  });

  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
    keywords: t("metadata.keywords"),
    openGraph: {
      title: t("metadata.openGraphTitle"),
      description: t("metadata.openGraphDescription"),
      type: "article",
      url: "/stories/type-of-scams/ai-generated-images",
    },
    twitter: {
      card: "summary_large_image",
      title: t("metadata.twitterTitle"),
      description: t("metadata.twitterDescription"),
    },
    alternates: {
      canonical: "/stories/type-of-scams/ai-generated-images",
    },
  };
}

export default async function AIGeneratedImagesPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "Stories.AiGeneratedImages",
  });

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: t("structured.headline"),
    description: t("structured.description"),
    author: {
      "@type": "Organization",
      name: "ScamAI",
    },
    publisher: {
      "@type": "Organization",
      name: "ScamAI",
      logo: {
        "@type": "ImageObject",
        url: "/logo.svg",
      },
    },
    datePublished: "2024-01-01",
    dateModified: "2024-01-01",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "/stories/type-of-scams/ai-generated-images",
    },
    keywords: t("structured.keywords"),
    articleSection: t("structured.articleSection"),
    about: [
      {
        "@type": "Thing",
        name: t("structured.about.0"),
      },
      {
        "@type": "Thing",
        name: t("structured.about.1"),
      },
      {
        "@type": "Thing",
        name: t("structured.about.2"),
      },
    ],
  };

  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-8 pt-16 sm:pt-24 pb-12">
        {/* Hero Section */}
        <header className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-medium text-white mb-6 leading-tight">
            {t("hero.title")}
          </h1>
          <p className="text-lg text-white/90 max-w-4xl mx-auto leading-[1.77] text-left">
            {t("hero.description")}
          </p>

          {/* AI-Generated Image Example */}
          <div className="my-12 bg-red-500/20 rounded-lg h-64 flex items-center justify-center border border-red-500/30 relative overflow-hidden">
            <div className="text-center">
              <div className="w-24 h-24 bg-red-500/30 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-red-500/50">
                <span className="text-white text-4xl">⚠️</span>
              </div>
              <h3 className="text-white text-xl font-semibold mb-2">
                {t("hero.exampleTitle")}
              </h3>
              <p className="text-white/80 text-sm max-w-md">
                {t("hero.exampleDescription")}
              </p>
            </div>
            <div className="absolute top-4 right-4 bg-red-500/20 border border-red-500/50 rounded-full px-3 py-1">
              <span className="text-red-300 text-xs font-semibold">
                {t("hero.exampleBadge")}
              </span>
            </div>
          </div>
        </header>

        {/* What is an AI-Generated Images Scam */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-white mb-6 mt-12">
            {t("whatIs.title")}
          </h2>
          <p className="text-lg text-white/80 leading-[1.77] mb-6">
            {t("whatIs.description")}
          </p>

          {/* Highlighted Box */}
          <div className="border-l-4 border-white bg-white/5 p-6 my-12">
            <p className="text-xl text-white font-medium leading-[1.77]">
              {t("whatIs.highlight")}
            </p>
          </div>
        </section>

        {/* Warning Signs */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-white mb-6 mt-12">
            {t("warning.title")}
          </h2>
          <p className="text-lg text-white/80 leading-[1.77] mb-6">
            {t("warning.description")}
          </p>
          <div className="space-y-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-white text-lg">•</span>
                <p className="text-lg text-white/80 leading-[1.77]">
                  <strong className="text-white">
                    {t(`warning.items.${index}.label`)}
                  </strong>{" "}
                  {t(`warning.items.${index}.text`)}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* How to Protect Yourself */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-white mb-6 mt-12">
            {t("protect.title")}
          </h2>
          <p className="text-lg text-white/80 leading-[1.77] mb-8 text-left">
            {t("protect.description")}
          </p>

          <div className="space-y-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-white text-lg">•</span>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {t(`protect.items.${index}.title`)}
                  </h3>
                  <p className="text-lg text-white/80 leading-[1.77]">
                    {t(`protect.items.${index}.description`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Product CTA Section */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold text-white mb-6 mt-12">
            {t("cta.title")}
          </h2>
          <div className="bg-white/5 rounded-lg p-8">
            <p className="text-lg text-white/80 leading-[1.77] mb-6">
              {t("cta.description")}
            </p>
            <Link
              href="/demo"
              className="inline-block px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-white/90 transition-colors text-lg"
              title={t("cta.buttonTitle")}
            >
              {t("cta.button")}
            </Link>
          </div>
        </section>

        {/* Related Topics */}
        <section className="mt-16 mb-8">
          <h3 className="text-xl font-semibold text-white mb-4">
            {t("related.title")}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/models/deepfakes"
              className="block p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors"
              title={t("related.items.0.linkTitle")}
            >
              <h4 className="text-white font-semibold mb-2">
                {t("related.items.0.title")}
              </h4>
              <p className="text-white/70 text-sm">
                {t("related.items.0.description")}
              </p>
            </Link>
            <Link
              href="/models/voice-clones"
              className="block p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors"
              title={t("related.items.1.linkTitle")}
            >
              <h4 className="text-white font-semibold mb-2">
                {t("related.items.1.title")}
              </h4>
              <p className="text-white/70 text-sm">
                {t("related.items.1.description")}
              </p>
            </Link>
          </div>
        </section>

        {/* Navigation */}
        <nav
          className="mt-16 pt-8 border-t border-white/10 flex justify-between items-center"
          aria-label="Page navigation"
        >
          <Link
            href="/stories/type-of-scams"
            className="text-sm text-white/70 hover:text-white transition-colors"
            title={t("nav.backTitle")}
          >
            {t("nav.back")}
          </Link>
          <Link
            href="/stories/type-of-scams/identity-theft"
            className="text-sm text-white/70 hover:text-white transition-colors"
            title={t("nav.nextTitle")}
          >
            {t("nav.next")}
          </Link>
        </nav>
      </div>
    </SiteShell>
  );
}
