"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";
import UseCasesMore from "./UseCasesMore";

export default function AboutContent() {
  const t = useTranslations("Company.About");
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isDark = mounted && resolvedTheme === "dark";

  useEffect(() => {
    setMounted(true);
  }, []);
  const heading = isDark ? "text-white" : "text-zinc-100";
  const muted = isDark ? "text-white/70" : "text-zinc-400";
  const soft = isDark ? "text-white/60" : "text-zinc-300";
  const panel = isDark
    ? "border border-white/15 bg-zinc-900/5"
    : "border border-zinc-800 bg-zinc-900 shadow-sm";

  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <div className="text-center">
            <p className={`text-xs tracking-widest uppercase ${muted}`}>
              {t("hero.kicker")}
            </p>
            <h1 className={`mt-3 text-4xl md:text-6xl font-semibold tracking-tight ${heading}`}>
              {t("hero.title")}
            </h1>
            <p className={`mt-4 max-w-2xl mx-auto text-base md:text-lg leading-relaxed ${soft}`}>
              {t("hero.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <div className="text-center">
            <h2 className={`text-sm font-semibold tracking-wider ${muted}`}>
              {t("mission.kicker")}
            </h2>
            <p className={`mt-3 text-2xl md:text-[28px] leading-snug max-w-3xl mx-auto ${isDark ? "text-white/90" : "text-zinc-200"}`}>
              {t("mission.line1")}
              <br />
              {t("mission.line2")}
            </p>
          </div>
        </div>
      </section>

      {/* What we build */}
      <section className="py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <div className="text-center">
            <h2 className={`text-sm font-semibold tracking-wider ${muted}`}>
              {t("build.kicker")}
            </h2>
          </div>
          <p className={`mt-3 text-2xl md:text-[28px] leading-snug max-w-3xl mx-auto text-center ${isDark ? "text-white/90" : "text-zinc-200"}`}>
            {t("build.line1")}
            <br />
            {t("build.line2")}
          </p>
          <div className="mt-4 grid gap-6">
            <div className="grid gap-5">
              {/* Foundation layer */}
              <div id="foundation" className={`rounded-3xl p-5 md:p-6 ${panel}`}>
                <div className="mb-5 flex items-baseline justify-between gap-4">
                  <div className={`${heading} font-semibold`}>{t("build.foundation.title")}</div>
                  <div className={`text-xs tracking-widest uppercase ${muted}`}>
                    {t("build.foundation.label")}
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-4 md:gap-6">
                  <MiniCard
                    title={t("build.foundation.cards.0.title")}
                    description={t("build.foundation.cards.0.description")}
                    isDark={isDark}
                  />
                  <MiniCard
                    title={t("build.foundation.cards.1.title")}
                    description={t("build.foundation.cards.1.description")}
                    isDark={isDark}
                  />
                  <MiniCard
                    title={t("build.foundation.cards.2.title")}
                    description={t("build.foundation.cards.2.description")}
                    isDark={isDark}
                  />
                </div>
              </div>

              {/* Application Layer */}
              <div className={`rounded-3xl p-5 md:p-6 ${panel}`}>
                <div className="mb-5 flex items-baseline justify-between gap-4">
                  <div className={`${heading} font-semibold`}>{t("build.applications.title")}</div>
                  <div className={`text-xs tracking-widest uppercase ${muted}`}>
                    {t("build.applications.label")}
                  </div>
                </div>
                <p className={`text-sm mb-4 ${soft}`}>
                  {t("build.applications.description")}
                </p>
                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                  <MiniCard
                    title={t("build.applications.cards.0.title")}
                    badge={t("build.applications.cards.0.badge")}
                    description={t("build.applications.cards.0.description")}
                    isDark={isDark}
                  />
                  <MiniCard
                    title={t("build.applications.cards.1.title")}
                    badge={t("build.applications.cards.1.badge")}
                    description={t("build.applications.cards.1.description")}
                    isDark={isDark}
                  />
                  <MiniCard
                    title={t("build.applications.cards.2.title")}
                    description={t("build.applications.cards.2.description")}
                    isDark={isDark}
                  />
                  <MiniCard
                    title={t("build.applications.cards.3.title")}
                    badge={t("build.applications.cards.3.badge")}
                    description={t("build.applications.cards.3.description")}
                    isDark={isDark}
                  />
                </div>
                <UseCasesMore />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <div className="text-center mb-6">
            <h2 className={`text-sm font-semibold tracking-wider ${muted}`}>
              {t("values.kicker")}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <MiniCard
              title={t("values.cards.0.title")}
              description={t("values.cards.0.description")}
              isDark={isDark}
            />
            <MiniCard
              title={t("values.cards.1.title")}
              description={t("values.cards.1.description")}
              isDark={isDark}
            />
            <MiniCard
              title={t("values.cards.2.title")}
              description={t("values.cards.2.description")}
              isDark={isDark}
            />
            <MiniCard
              title={t("values.cards.3.title")}
              description={t("values.cards.3.description")}
              isDark={isDark}
            />
          </div>
        </div>
      </section>

      {/* Team & partners CTAs */}
      <section className="py-12 md:py-20">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            <CTA
              title={t("cta.people.title")}
              subtitle={t("cta.people.subtitle")}
              isDark={isDark}
            />
            <CTA
              title={t("cta.partnership.title")}
              subtitle={t("cta.partnership.subtitle")}
              isDark={isDark}
            />
          </div>
        </div>
      </section>
    </>
  );
}

type CardProps = { title: string; description: string; badge?: string; isDark: boolean };

function MiniCard({ title, description, badge, isDark }: CardProps) {
  const titleColor = isDark ? "text-white" : "text-zinc-100";
  const badgeColor = isDark
    ? "text-white/70 border-white/15"
    : "text-zinc-300 border-zinc-800 bg-zinc-900";
  const bodyColor = isDark ? "text-white/70" : "text-zinc-300";
  const surface = isDark ? "border-white/10 bg-zinc-900/5" : "border-zinc-800 bg-zinc-900 shadow-sm";
  return (
    <div className={`rounded-2xl border p-5 ${surface}`}>
      <div className="flex items-center gap-2">
        <div className={`text-base font-semibold ${titleColor}`}>{title}</div>
        {badge ? (
          <span className={`text-[10px] uppercase tracking-wider rounded-full px-2 py-0.5 ${badgeColor}`}>
            {badge}
          </span>
        ) : null}
      </div>
      <p className={`mt-1.5 text-sm leading-relaxed ${bodyColor}`}>{description}</p>
    </div>
  );
}

type CtaProps = { title: string; subtitle: string; isDark: boolean };

function CTA({ title, subtitle, isDark }: CtaProps) {
  const titleColor = isDark ? "text-white" : "text-zinc-100";
  const bodyColor = isDark ? "text-white/70" : "text-zinc-300";
  const surface = isDark ? "border-white/10 bg-zinc-900/5" : "border-zinc-800 bg-zinc-900 shadow-sm";
  return (
    <div className={`rounded-2xl border p-5 md:p-6 ${surface}`}>
      <div className="flex items-center justify-between gap-4">
        <div>
          <div className={`text-base md:text-lg font-semibold ${titleColor}`}>{title}</div>
          <div className={`mt-1 text-sm ${bodyColor}`}>{subtitle}</div>
        </div>
      </div>
    </div>
  );
}
