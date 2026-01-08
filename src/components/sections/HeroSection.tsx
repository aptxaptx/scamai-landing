"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();
  
  return (
    <section className="relative w-full min-h-[500px] bg-white flex items-center justify-center border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-32 text-center">
        <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-6">
          {t("hero.title")}
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          {t("hero.subtitle")}
        </p>
        <div className="flex gap-4 justify-center">
          <button 
            className="px-8 py-3 text-white rounded transition-colors"
            style={{ backgroundColor: '#0047FF' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0039CC'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0047FF'}
          >
            {t("hero.primary")}
          </button>
          <button className="px-8 py-3 border border-gray-300 text-gray-900 rounded hover:bg-gray-50 transition-colors">
            {t("hero.secondary")}
          </button>
        </div>
      </div>
    </section>
  );
}
