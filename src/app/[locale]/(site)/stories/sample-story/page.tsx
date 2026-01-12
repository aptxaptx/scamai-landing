import { MDXRemote } from "next-mdx-remote/rsc";

import SiteShell from "@/components/SiteShell";
import { getMdxContent } from "@/lib/mdx";

export default async function SampleStoryPage({
  params,
}: {
  params: { locale: string };
}) {
  const { source } = await getMdxContent("sample-story", params.locale, "stories");

  return (
    <SiteShell>
      <div className="prose prose-slate max-w-none">
        <MDXRemote source={source} />
      </div>
    </SiteShell>
  );
}
