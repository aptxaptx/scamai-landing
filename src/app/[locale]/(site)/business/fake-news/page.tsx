import { MDXRemote } from "next-mdx-remote/rsc";
import { getTranslations } from "next-intl/server";

import SiteShell from "@/components/SiteShell";
import { rtlLocales, type Locale } from "@/i18n/config";
import { Link } from "@/i18n/navigation";
import { getMdxContent } from "@/lib/mdx";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Business.FakeNews" });
  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
  };
}

export default async function FakeNewsPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Business.FakeNews" });
  const common = await getTranslations({ locale, namespace: "Business.Common" });
  const { source } = await getMdxContent("fake-news", locale, "business");
  const isRtl = rtlLocales.includes(locale);

  return (
    <SiteShell>
      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl grid place-items-center mb-6">
        {/* Breadcrumb (left-aligned) */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-8 md:px-12 lg:px-14 mt-4">
          <div className="flex items-center justify-start text-sm">
            <div className="text-white/70">
              <Link href="/business" className="hover:text-white/90">
                {common("breadcrumb.business")}
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white/90">{t("breadcrumb")}</span>
            </div>
          </div>
        </div>

        <div className="relative z-10 text-center p-8 md:p-12 lg:p-14">
          <p className="text-white text-base mb-3">{t("eyebrow")}</p>
          <h1 className="text-[clamp(32px,7.5vw,72px)] font-normal tracking-tight max-w-4xl mx-auto">
            {t("title")}
          </h1>

          {/* Tags */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs text-white/85 bg-white/10 border border-white/15">
              {t("tags.genai")}
            </span>
          </div>
        </div>
      </section>

      {/* Supporting copy */}
      <section className="mb-8">
        <div className="text-center">
          <div
            className="mt-2 max-w-2xl mx-auto prose dark:prose-invert max-w-none text-white/80 text-lg leading-relaxed"
            dir={isRtl ? "rtl" : "ltr"}
          >
            <MDXRemote source={source} />
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <div className="mt-12 max-w-4xl mx-auto">
        <div className="relative w-full overflow-hidden rounded-lg border border-white/20 bg-gradient-to-br from-blue-500/10 to-green-500/10">
          <div className="aspect-video p-8 flex flex-col justify-center">
            <div className="text-center">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <span className="text-blue-300 text-xl">{t("demo.icon")}</span>
                </div>
                <div className="text-white text-xl font-semibold">{t("demo.kicker")}</div>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">{t("demo.title")}</h3>
              <p className="text-white/80 mb-6 max-w-2xl mx-auto">{t("demo.description")}</p>
              <div className="inline-flex items-center gap-4">
                <a href="/demo" className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-white/90 transition-colors">
                  {t("demo.cta")}
                </a>
                <div className="flex items-center gap-2 text-white/70">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  <span className="text-sm">{t("demo.status")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Value props */}
      <section className="mt-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 text-left">
            <h4 className="text-white font-semibold mb-1">{t("valueProps.0.title")}</h4>
            <p className="text-white/75 text-sm">{t("valueProps.0.description")}</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 text-left">
            <h4 className="text-white font-semibold mb-1">{t("valueProps.1.title")}</h4>
            <p className="text-white/75 text-sm">{t("valueProps.1.description")}</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 text-left">
            <h4 className="text-white font-semibold mb-1">{t("valueProps.2.title")}</h4>
            <p className="text-white/75 text-sm">{t("valueProps.2.description")}</p>
          </div>
        </div>
      </section>

      {/* CTA Card */}
      <section className="mb-12 mt-16">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-semibold text-white mb-3">{t("cta.title")}</h3>
            <p className="text-white/80 text-base mb-6">{t("cta.description")}</p>
              <a
                href="/demo"
              className="inline-block bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-white/90 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              {common("cta")}
            </a>
          </div>
        </div>
      </section>

      {/* Bottom next link */}
      <div className="mt-10 w-full max-w-6xl mx-auto px-8 md:px-12 lg:px-14">
        <div className="flex justify-end text-sm">
          <Link href="/business/ip-copyright" className="text-white/80 hover:text-white/90">
            {common("next", { label: t("nextLabel") })}
          </Link>
        </div>
      </div>

      {/* Page background */}
      <div
        className="fixed inset-0 -z-10 opacity-60 bg-cover bg-center"
        style={{ backgroundImage: "url('/fakenews.webp')" }}
        aria-hidden
      />
    </SiteShell>
  );
}
