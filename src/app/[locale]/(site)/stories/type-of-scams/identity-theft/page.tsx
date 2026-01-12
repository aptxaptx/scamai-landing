import SiteShell from "@/components/SiteShell";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function IdentityTheftPage() {
  const t = useTranslations("Stories.IdentityTheft");
  return (
    <SiteShell>
      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-8 pt-16 sm:pt-24 pb-12">
        
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-medium text-white mb-6 leading-tight">
            {t("hero.title")}
          </h1>
          <p className="text-lg text-white/90 max-w-4xl mx-auto leading-[1.77] text-left">
            {t("hero.description")}
          </p>
          
          {/* Image */}
          <div className="my-12">
            <Image 
              src="/identity-theft-scam.png" 
              alt={t("hero.imageAlt")}
              width={800}
              height={400}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        </section>

        {/* What is Identity Theft */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-white mb-6 mt-12">
            {t("whatIs.title")}
          </h2>
          <p className="text-lg text-white/80 leading-[1.77] mb-6">
            {t("whatIs.description")}
          </p>
          
          {/* Highlighted Box */}
          <div className="border-l-4 border-white bg-white/5 p-6 my-12">
            <p className="text-xl text-white font-medium leading-[1.77]">
              {t("whatIs.highlight")}
            </p>
          </div>
        </section>

        {/* Warning Signs */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-white mb-6 mt-12">
            {t("warning.title")}
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-white text-lg">•</span>
              <p className="text-lg text-white/80 leading-[1.77]">
                {t("warning.items.0")}
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-white text-lg">•</span>
              <p className="text-lg text-white/80 leading-[1.77]">
                {t("warning.items.1")}
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-white text-lg">•</span>
              <p className="text-lg text-white/80 leading-[1.77]">
                {t("warning.items.2")}
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-white text-lg">•</span>
              <p className="text-lg text-white/80 leading-[1.77]">
                {t("warning.items.3")}
              </p>
            </div>
          </div>
        </section>

        {/* How to Protect Yourself */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-white mb-6 mt-12">
            {t("protect.title")}
          </h2>
          <p className="text-lg text-white/80 leading-[1.77] mb-8 text-left">
            {t("protect.description")}
          </p>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-white text-lg">•</span>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {t("protect.items.0.title")}
                </h3>
                <p className="text-lg text-white/80 leading-[1.77]">
                  {t("protect.items.0.description")}
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <span className="text-white text-lg">•</span>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {t("protect.items.1.title")}
                </h3>
                <p className="text-lg text-white/80 leading-[1.77]">
                  {t("protect.items.1.description")}
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <span className="text-white text-lg">•</span>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {t("protect.items.2.title")}
                </h3>
                <p className="text-lg text-white/80 leading-[1.77]">
                  {t("protect.items.2.description")}
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <span className="text-white text-lg">•</span>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {t("protect.items.3.title")}
                </h3>
                <p className="text-lg text-white/80 leading-[1.77]">
                  {t("protect.items.3.description")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Product CTA Section */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold text-white mb-6 mt-12">
            {t("cta.title")}
          </h2>
          <div className="bg-white/5 rounded-lg p-8">
            <p className="text-lg text-white/80 leading-[1.77] mb-6">
              {t("cta.description")}
            </p>
            <Link 
              href="/demo"
              className="inline-block px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-white/90 transition-colors text-lg"
            >
              {t("cta.button")}
            </Link>
          </div>
        </section>

        {/* Navigation */}
        <div className="mt-16 pt-8 border-t border-white/10 flex justify-between items-center">
          <Link 
            href="/stories/type-of-scams"
            className="text-sm text-white/70 hover:text-white transition-colors"
          >
            {t("nav.back")}
          </Link>
          <Link 
            href="/stories/type-of-scams/financial-investment"
            className="text-sm text-white/70 hover:text-white transition-colors"
          >
            {t("nav.next")}
          </Link>
        </div>
      </div>
    </SiteShell>
  );
}
