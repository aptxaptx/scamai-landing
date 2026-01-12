import { MDXRemote } from "next-mdx-remote/rsc";
import { getTranslations } from "next-intl/server";

import Breadcrumb from "@/components/Breadcrumb";
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
  const t = await getTranslations({ locale, namespace: "Business.Kyc" });
  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
  };
}

export default async function KycPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Business.Kyc" });
  const common = await getTranslations({ locale, namespace: "Business.Common" });
  const { source } = await getMdxContent("kyc", locale, "business");
  const isRtl = rtlLocales.includes(locale);

  return (
    <SiteShell>
      {/* Hero above existing card(s) */}
      <section className="relative overflow-hidden rounded-2xl grid place-items-center mb-6">
        <Breadcrumb 
          items={[
            { label: common("breadcrumb.business"), href: "/business" },
            { label: t("breadcrumb") }
          ]}
          nextItem={{ label: t("nextLabel"), href: "/business/dating" }}
        />

        <div className="relative z-10 text-center p-8 md:p-12 lg:p-14">
          <p className="text-white text-base mb-4">{t("eyebrow")}</p>
          <h1 className="text-[clamp(32px,7.5vw,72px)] font-normal tracking-tight max-w-4xl mx-auto">
            {t("titleLine1")}
            <br />
            {t("titleLine2")}
          </h1>
          <p className="mt-4 text-white/85 text-[clamp(14px,2vw,18px)] max-w-2xl mx-auto">
            {t("subtitleLine1")}
            <br />
            {t("subtitleLine2")}
          </p>

          {/* Tags */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs text-white/85 bg-white/10 border border-white/15">
              {t("tags.genai")}
            </span>
            <span className="px-3 py-1 rounded-full text-xs text-white/85 bg-white/10 border border-white/15">
              {t("tags.deepfake")}
            </span>
            <span className="px-3 py-1 rounded-full text-xs text-white/85 bg-white/10 border border-white/15">
              {t("tags.liveness")}
            </span>
          </div>

          <div className="mt-8 max-w-4xl mx-auto">
            <video
              className="w-full rounded-lg shadow-lg"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/deepfake_scamai.webm" type="video/webm" />
              {common("videoFallback")}
            </video>
          </div>
        </div>
      </section>

      {/* New section about the problem */}
      <section className="mb-8">
        <div className="text-center">
          <h2 className="text-[clamp(24px,5vw,48px)] font-normal tracking-tight max-w-4xl mx-auto">
            {t("problemTitleLine1")}
            <br />
            {t("problemTitleLine2")}
          </h2>
          <div
            className="mt-8 max-w-2xl mx-auto prose dark:prose-invert max-w-none text-white/80 text-lg leading-relaxed text-center"
            dir={isRtl ? "rtl" : "ltr"}
          >
            <MDXRemote source={source} />
          </div>

          {/* Dashboard Video */}
          <div className="mt-12 max-w-4xl mx-auto">
            <video
              className="w-full rounded-lg shadow-lg"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/dashboard.webm" type="video/webm" />
              {common("videoFallback")}
            </video>
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
          <div className="mt-16 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-semibold text-white mb-4">{t("cta.title")}</h3>
              <p className="text-white/80 text-base mb-6">{t("cta.description")}</p>
              <a
                href="/demo"
                className="inline-block bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-white/90 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                {common("cta")}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom next link */}
      <div className="mt-10 w-full max-w-6xl mx-auto px-8 md:px-12 lg:px-14">
        <div className="flex justify-end text-sm">
          <Link href="/business/dating" className="text-white/80 hover:text-white/90">
            {common("next", { label: t("nextLabel") })}
          </Link>
        </div>
      </div>

      {/* Page background with card styling */}
      <div
        className="fixed inset-0 -z-10 opacity-60 bg-cover bg-center"
        style={{ backgroundImage: "url('/kyc.webp')" }}
        aria-hidden
      />
    </SiteShell>
  );
}
