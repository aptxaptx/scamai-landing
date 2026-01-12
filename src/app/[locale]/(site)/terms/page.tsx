import { MDXRemote } from "next-mdx-remote/rsc";
import { getTranslations } from "next-intl/server";

import SiteShell from "@/components/SiteShell";
import { rtlLocales, type Locale } from "@/i18n/config";
import { getMdxBySlug } from "@/lib/mdx";

type LegalFrontmatter = {
  title: string;
};

export default async function TermsOfService({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Legal" });
  const { source, frontmatter } = await getMdxBySlug<LegalFrontmatter>(
    "terms",
    locale,
    "legal"
  );
  const isRtl = rtlLocales.includes(locale);

  return (
    <SiteShell>
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-light text-white mb-8">
          {frontmatter.title}
        </h1>
        <div className="text-gray-300 space-y-6 leading-relaxed">
          <p className="text-sm text-gray-500 mb-8">
            {t("lastUpdated", { date: new Date().toLocaleDateString(locale) })}
          </p>
          <div
            className="prose dark:prose-invert max-w-none"
            dir={isRtl ? "rtl" : "ltr"}
          >
            <MDXRemote source={source} />
          </div>
        </div>
      </div>
    </SiteShell>
  );
}
