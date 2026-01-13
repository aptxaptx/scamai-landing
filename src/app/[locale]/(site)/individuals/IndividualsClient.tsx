"use client";

import React, { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { useTranslations } from "next-intl";
import SiteShell from "@/components/SiteShell";
import { Link } from "@/i18n/navigation";

export default function IndividualsClient() {
  const t = useTranslations("Individuals.Page");
  const searchParams = useSearchParams();
  const sectionParam = searchParams.get("s");
  const didMountRef = useRef(false);

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
      return;
    }
    const targetId = sectionParam === "plugin" ? "plugin" : "mobile";
    const el = document.getElementById(targetId);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [sectionParam]);

  return (
    <SiteShell>
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-2xl backdrop-blur-sm grid place-items-center mb-8">
        <div className="relative z-10 text-center p-10 md:p-16 lg:p-20">
          <h1 className="text-[clamp(32px,7vw,64px)] font-bold tracking-tight">
            {t("hero.title")}
          </h1>
          <p className="mt-4 text-white/85 text-[clamp(15px,2.2vw,20px)] max-w-3xl mx-auto">
            {t("hero.subtitle")}
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white text-white px-8 py-3 font-semibold hover:bg-white hover:text-black transition-all duration-200"
            >
              {t("hero.cta")}
            </Link>
          </div>
        </div>
      </section>

      {/* Mobile App and Browser Plugin Sections - Side by Side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Mobile App Section */}
        <section id="mobile" className="scroll-mt-24">
          <div className="relative rounded-2xl overflow-hidden h-full">
            {/* Background Image */}
            <Image
              src="/impersonation.webp"
              alt={t("mobile.imageAlt")}
              fill
              className="object-cover"
            />
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/50"></div>
            
            {/* Content */}
            <div className="relative z-10 p-8 h-full flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white mb-3">
                  {t("mobile.title")}
                </h2>
                <p className="text-white/90 mb-6">
                  {t("mobile.description")}
                </p>
                
                <ul className="text-white/90 space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <span className="text-white">•</span>
                    <span>{t("mobile.items.0")}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-white">•</span>
                    <span>{t("mobile.items.1")}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-white">•</span>
                    <span>{t("mobile.items.2")}</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* Browser Plugin Section */}
        <section id="plugin" className="scroll-mt-24">
          <div className="relative rounded-2xl overflow-hidden h-full">
            {/* Background Image */}
            <Image
              src="/fakenews.webp"
              alt={t("plugin.imageAlt")}
              fill
              className="object-cover"
            />
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/50"></div>
            
            {/* Content */}
            <div className="relative z-10 p-8 h-full flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white mb-3">
                  {t("plugin.title")}
                </h2>
                <p className="text-white/90 mb-6">
                  {t("plugin.description")}
                </p>
                
                <ul className="text-white/90 space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <span className="text-white">•</span>
                    <span>{t("plugin.items.0")}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-white">•</span>
                    <span>{t("plugin.items.1")}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-white">•</span>
                    <span>{t("plugin.items.2")}</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
