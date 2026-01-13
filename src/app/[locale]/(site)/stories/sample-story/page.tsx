import { MDXRemote } from "next-mdx-remote/rsc";

import SiteShell from "@/components/SiteShell";
import type { Locale } from "@/i18n/config";
import { getMdxContent } from "@/lib/mdx";

export default async function SampleStoryPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const { source } = await getMdxContent("sample-story", locale, "stories");

  return (
    <SiteShell>
      <div className="prose prose-slate max-w-none">
        <MDXRemote source={source} />
      </div>
    </SiteShell>
  );
}
