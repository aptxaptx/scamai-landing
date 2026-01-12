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
  const t = await getTranslations({ locale, namespace: "Business.Dating" });
  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
  };
}

export default async function DatingAppsPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Business.Dating" });
  const common = await getTranslations({ locale, namespace: "Business.Common" });
  const { source } = await getMdxContent("dating", locale, "business");
  const isRtl = rtlLocales.includes(locale);

  return (
    <SiteShell>
      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl grid place-items-center mb-6">
        <Breadcrumb 
          items={[
            { label: common("breadcrumb.business"), href: "/business" },
            { label: t("breadcrumb") }
          ]}
        />

        <div className="relative z-10 text-center p-8 md:p-12 lg:p-14">
          <p className="text-white text-base mb-3">{t("eyebrow")}</p>
          <h1 className="text-[clamp(32px,7.5vw,72px)] font-normal tracking-tight max-w-4xl mx-auto">
            {t("title")}
          </h1>

          <p className="mt-4 text-white/85 text-[clamp(14px,2vw,18px)] max-w-2xl mx-auto">
            {t("subtitle")}
          </p>

          {/* Tags */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs text-white/85 bg-white/10 border border-white/15">
              {t("tags.genai")}
            </span>
            <span className="px-3 py-1 rounded-full text-xs text-white/85 bg-white/10 border border-white/15">
              {t("tags.impersonation")}
            </span>
            <span className="px-3 py-1 rounded-full text-xs text-white/85 bg-white/10 border border-white/15">
              {t("tags.deepfake")}
            </span>
          </div>
        </div>
      </section>

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

      {/* Video placeholder */}
      <div className="mt-12 max-w-4xl mx-auto">
        <div className="relative w-full overflow-hidden rounded-lg border border-white/20 bg-white/5">
          <div className="aspect-video grid place-items-center text-white/70 text-sm">
            {common("videoPlaceholder")}
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
      <div className="mt-10 w-full max-w-6xl mx-auto">
        <div className="flex justify-end text-sm">
          <Link href="/business/impersonation" className="text-white/80 hover:text-white/90">
            {common("next", { label: t("nextLabel") })}
          </Link>
        </div>
      </div>

      {/* Page background */}
      <div
        className="fixed inset-0 -z-10 opacity-60 bg-cover bg-center"
        style={{ backgroundImage: "url('/dating.webp')" }}
        aria-hidden
      />
    </SiteShell>
  );
}
