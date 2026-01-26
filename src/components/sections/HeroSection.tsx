"use client";

import { useTranslations } from "next-intl";

export default function HeroSection() {
  const t = useTranslations("HomePage.Hero");
  
  return (
    <section className="relative w-full min-h-[500px] bg-zinc-900 flex items-center justify-center border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 py-32 text-center">
        <h1 className="text-5xl md:text-7xl font-light text-zinc-100 mb-6">
          {t("title")}
        </h1>
        <p className="text-xl text-zinc-400 mb-8">
          {t("subtitle")}
        </p>
        <div className="flex gap-4 justify-center">
          <button 
            className="px-8 py-3 text-white rounded transition-colors"
            style={{ backgroundColor: '#0047FF' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0039CC'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0047FF'}
          >
            {t("primaryCta")}
          </button>
          <button className="px-8 py-3 border border-zinc-600 text-zinc-100 rounded hover:bg-zinc-800 transition-colors">
            {t("secondaryCta")}
          </button>
        </div>
      </div>
    </section>
  );
}
