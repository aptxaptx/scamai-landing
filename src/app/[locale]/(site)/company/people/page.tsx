import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";

import SiteShell from "@/components/SiteShell";
import { type Locale } from "@/i18n/config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Company.People" });
  return {
    title: t("metadata.title"),
  };
}

export default function PeoplePage() {
  const t = useTranslations("Company.People");
  return (
    <SiteShell>
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
            {t("title")}
          </h1>
          <p className="mt-3 text-white/60">{t("subtitle")}</p>
        </div>
      </section>
    </SiteShell>
  );
}

