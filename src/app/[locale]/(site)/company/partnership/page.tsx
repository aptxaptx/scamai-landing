import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";

import SiteShell from "@/components/SiteShell";
import { type Locale } from "@/i18n/config";
import { Link } from "@/i18n/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Company.Partnership" });
  return {
    title: t("metadata.title"),
  };
}

export default function PartnershipPage() {
  const t = useTranslations("Company.Partnership");
  return (
    <SiteShell>
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
            {t("hero.title")}
          </h1>
          <p className="mt-4 text-white/80 leading-relaxed">
            {t("hero.lead")}
          </p>
          <p className="mt-3 text-white/70 leading-relaxed">
            {t("hero.description")}
          </p>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-5xl mx-auto px-5 md:px-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 p-6">
            <h2 className="text-xl font-semibold text-white">
              {t("sections.ngos.title")}
            </h2>
            <p className="mt-2 text-white/70 leading-relaxed">
              {t("sections.ngos.description")}
            </p>
            <ul className="mt-3 text-sm text-white/65 list-disc list-inside space-y-1">
              <li>{t("sections.ngos.items.0")}</li>
              <li>{t("sections.ngos.items.1")}</li>
              <li>{t("sections.ngos.items.2")}</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 p-6">
            <h2 className="text-xl font-semibold text-white">
              {t("sections.businesses.title")}
            </h2>
            <p className="mt-2 text-white/70 leading-relaxed">
              {t("sections.businesses.description")}
            </p>
            <ul className="mt-3 text-sm text-white/65 list-disc list-inside space-y-1">
              <li>{t("sections.businesses.items.0")}</li>
              <li>{t("sections.businesses.items.1")}</li>
              <li>{t("sections.businesses.items.2")}</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-8 pb-16">
        <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">
          <p className="text-white/60">
            {t("footer.note")}
          </p>
          <div className="mt-5 flex items-center justify-center gap-3">
            <Link
              href="https://cal.com/scamai/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 font-semibold"
            >
              {t("footer.contact")}
            </Link>
            <Link
              href="/company/about"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 font-semibold"
            >
              {t("footer.values")}
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
