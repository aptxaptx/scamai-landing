"use client";

import SimpleNav from "@/components/SimpleNav";
import SiteFooter from "@/components/SiteFooter";
import { LanguageProvider, useLanguage } from "@/contexts/LanguageContext";

function ContentArea() {
  const { t } = useLanguage();
  
  return (
    <div className="w-full bg-white py-32 text-center">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-12">
          {t("content.title")}
        </h2>
        <p className="text-xl text-gray-600">
          {t("content.subtitle")}
        </p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        {/* Simple Navigation - Always Visible */}
        <SimpleNav />

      {/* Main Content with padding for fixed header */}
      <main className="pt-[65px]">
        {/* Hero Section - Ready for Redesign */}
        <section className="relative w-full min-h-[500px] bg-white flex items-center justify-center border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-6 py-32 text-center">
            <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-6">
              Hero Section
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Ready for redesign
            </p>
        <div className="flex gap-4 justify-center">
          <button 
            className="px-8 py-3 text-white rounded transition-colors"
            style={{ backgroundColor: '#0047FF' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0039CC'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0047FF'}
          >
            Primary CTA
          </button>
          <button className="px-8 py-3 border border-gray-300 text-gray-900 rounded hover:bg-gray-50 transition-colors">
            Secondary CTA
          </button>
        </div>
          </div>
        </section>

        {/* Content Area - Ready for Redesign */}
        <ContentArea />
      </main>

        {/* Footer */}
        <SiteFooter />
      </div>
    </LanguageProvider>
  );
}
