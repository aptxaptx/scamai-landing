import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

import SiteShell from "@/components/SiteShell";
import { type Locale } from "@/i18n/config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Business.Page" });
  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
  };
}

export default function BusinessPage() {
  const t = useTranslations("Business.Page");
  const cards = [
    {
      title: t("cards.0.title"),
      desc: t("cards.0.description"),
      image: "/kyc.webp",
      tag: t("cards.0.tag"),
      link: "/business/kyc",
    },
    {
      title: t("cards.1.title"),
      desc: t("cards.1.description"),
      image: "/dating.webp",
      tag: t("cards.1.tag"),
      link: "/business/dating",
    },
    {
      title: t("cards.2.title"),
      desc: t("cards.2.description"),
      image: "/impersonation.webp",
      tag: t("cards.2.tag"),
      link: "/business/impersonation",
    },
    {
      title: t("cards.3.title"),
      desc: t("cards.3.description"),
      image: "/fakenews.webp",
      tag: t("cards.3.tag"),
      link: "/business/fake-news",
    },
    {
      title: t("cards.4.title"),
      desc: t("cards.4.description"),
      image: "/copyright.webp",
      tag: t("cards.4.tag"),
      link: "/business/ip-copyright",
    },
    {
      title: t("cards.5.title"),
      desc: t("cards.5.description"),
      image: "/legal.webp",
      tag: t("cards.5.tag"),
      link: "/business/legal-compliance",
    },
  ];

  return (
    <SiteShell>
      {/* Hero Section */}
      <section className="mt-16 mb-12 max-w-6xl mx-auto px-4">
        <div className="text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {t("hero.title")}
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl leading-relaxed">
            {t("hero.description")}
          </p>
        </div>
      </section>

      {/* Category grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cards.map((card) => (
          <article key={card.title} className="relative rounded-2xl p-6 md:p-8 overflow-hidden min-h-[260px] md:min-h-[320px] z-10">
            <div
              className="absolute inset-0 z-0 opacity-100 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${card.image})` }}
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 z-0 bg-black/20"
              aria-hidden="true"
            />

            <h2 className="relative z-10 mt-4 text-lg font-semibold tracking-tight text-white">
              {card.title}
            </h2>
            <p className="relative z-10 mt-2 text-sm text-white/90">
              {card.desc}
            </p>
            <span className="absolute right-4 bottom-4 z-10 text-xs text-white/80">
              {card.tag}
            </span>
          </article>
        ))}
      </section>

      {/* Background with same styling as landing page + dark overlay */}
      <div className="hero-image-bg fixed inset-0 -z-10" aria-hidden />
      <div className="hero-image-vignette fixed inset-0 -z-10" aria-hidden />
      <div className="fixed inset-0 -z-10 bg-black/50" aria-hidden />
    </SiteShell>
  );
}
