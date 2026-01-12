import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

import matter from "gray-matter";

import { defaultLocale } from "@/i18n/config";

type MdxResult = {
  source: string;
  locale: string;
  filePath: string;
};

type MdxWithFrontmatter<TFrontmatter> = {
  source: string;
  frontmatter: TFrontmatter;
  locale: string;
  filePath: string;
};

export async function getMdxContent(
  slug: string,
  locale: string,
  folder: string
): Promise<MdxResult> {
  const { source, locale: resolvedLocale, filePath } = await readMdxFile(
    slug,
    locale,
    folder
  );
  return { source, locale: resolvedLocale, filePath };
}

export async function getMdxBySlug<TFrontmatter>(
  slug: string,
  locale: string,
  folder: string
): Promise<MdxWithFrontmatter<TFrontmatter>> {
  const { source, locale: resolvedLocale, filePath } = await readMdxFile(
    slug,
    locale,
    folder
  );
  const parsed = matter(source);
  return {
    source: parsed.content,
    frontmatter: parsed.data as TFrontmatter,
    locale: resolvedLocale,
    filePath,
  };
}

type PaperFrontmatter = {
  title: string;
  authors: string[];
  year: number;
  pdfUrl: string;
  venue: string;
  image: string;
  publishDate?: string;
  description?: string;
  category?: string;
  tags?: string[];
};

type PaperRecord = {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  publishDate: string;
  date: string;
  description: string;
  pdfUrl: string;
  category: string;
  tags: string[];
  image: string;
  content: string;
};

export async function getAllPapers(locale: string): Promise<PaperRecord[]> {
  const folder = "research";
  const baseDir = path.join(process.cwd(), "src", "content", folder);
  const entries = await readdir(baseDir, { withFileTypes: true });
  const matched = new Map<
    string,
    { locale: string; filePath: string; slug: string }
  >();

  for (const entry of entries) {
    if (entry.isFile() && entry.name.endsWith(".mdx")) {
      const [slug, entryLocale] = entry.name.replace(".mdx", "").split(".");
      if (!slug || !entryLocale) continue;
      if (entryLocale === locale) {
        matched.set(slug, {
          slug,
          locale: entryLocale,
          filePath: path.join(baseDir, entry.name),
        });
      } else if (entryLocale === defaultLocale && !matched.has(slug)) {
        matched.set(slug, {
          slug,
          locale: entryLocale,
          filePath: path.join(baseDir, entry.name),
        });
      }
    }

    if (entry.isDirectory()) {
      const slug = entry.name;
      const dirPath = path.join(baseDir, slug);
      const nestedEntries = await readdir(dirPath);
      const localizedName = `${locale}.mdx`;
      const fallbackName = `${defaultLocale}.mdx`;

      if (nestedEntries.includes(localizedName)) {
        matched.set(slug, {
          slug,
          locale,
          filePath: path.join(dirPath, localizedName),
        });
      } else if (nestedEntries.includes(fallbackName) && !matched.has(slug)) {
        matched.set(slug, {
          slug,
          locale: defaultLocale,
          filePath: path.join(dirPath, fallbackName),
        });
      }
    }
  }

  const results: PaperRecord[] = [];
  for (const { slug, locale: resolvedLocale, filePath } of matched.values()) {
    const source = await readFile(filePath, "utf8");
    const parsed = matter(source);
    const frontmatter = parsed.data as PaperFrontmatter;

    results.push({
      id: slug,
      title: frontmatter.title ?? slug,
      authors: frontmatter.authors ?? [],
      venue: frontmatter.venue ?? "",
      year: frontmatter.year ?? 0,
      publishDate: frontmatter.publishDate ?? "",
      date: frontmatter.publishDate ?? "",
      description: frontmatter.description ?? "",
      pdfUrl: frontmatter.pdfUrl ?? "",
      category: frontmatter.category ?? "Research",
      tags: frontmatter.tags ?? [],
      image: frontmatter.image ?? "",
      content: parsed.content,
    });
  }

  return results.sort((a, b) => b.year - a.year);
}

async function readMdxFile(
  slug: string,
  locale: string,
  folder: string
): Promise<MdxResult> {
  const baseDir = path.join(process.cwd(), "src", "content", folder);
  const localizedCandidates = [
    path.join(baseDir, slug, `${locale}.mdx`),
    path.join(baseDir, `${slug}.${locale}.mdx`),
  ];
  const fallbackCandidates = [
    path.join(baseDir, slug, `${defaultLocale}.mdx`),
    path.join(baseDir, `${slug}.${defaultLocale}.mdx`),
  ];

  for (const candidate of localizedCandidates) {
    try {
      const source = await readFile(candidate, "utf8");
      return { source, locale, filePath: candidate };
    } catch {
      // Try next candidate.
    }
  }

  for (const candidate of fallbackCandidates) {
    try {
      const source = await readFile(candidate, "utf8");
      return { source, locale: defaultLocale, filePath: candidate };
    } catch {
      // Try next candidate.
    }
  }

  throw new Error(`MDX file not found for slug: ${slug}`);
}
