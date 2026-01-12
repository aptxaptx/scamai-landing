import { readFile } from "node:fs/promises";
import path from "node:path";

import { defaultLocale } from "@/i18n/config";

type MdxResult = {
  source: string;
  locale: string;
  filePath: string;
};

export async function getMdxContent(
  slug: string,
  locale: string,
  folder: string
): Promise<MdxResult> {
  const baseDir = path.join(process.cwd(), "src", "content", folder);
  const localizedPath = path.join(baseDir, `${slug}.${locale}.mdx`);
  const fallbackPath = path.join(baseDir, `${slug}.${defaultLocale}.mdx`);

  try {
    const source = await readFile(localizedPath, "utf8");
    return { source, locale, filePath: localizedPath };
  } catch {
    const source = await readFile(fallbackPath, "utf8");
    return { source, locale: defaultLocale, filePath: fallbackPath };
  }
}
