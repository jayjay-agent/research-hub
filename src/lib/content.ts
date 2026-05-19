import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import {
  ALL_CATEGORIES,
  type ContentCategory,
  type ContentDoc,
  type ContentFrontmatter,
} from "./types";

const CONTENT_ROOT = path.join(process.cwd(), "content");

function ensureContentRoot() {
  if (!fs.existsSync(CONTENT_ROOT)) {
    fs.mkdirSync(CONTENT_ROOT, { recursive: true });
  }
}

function normalizeDate(value: unknown): string | undefined {
  if (!value) return undefined;
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  if (typeof value === "string") return value;
  return String(value);
}

function readDocAt(filePath: string, category: ContentCategory, slug: string): ContentDoc {
  const raw = fs.readFileSync(filePath, "utf8");
  const parsed = matter(raw);
  const rawFm = parsed.data as Record<string, unknown>;
  const frontmatter: ContentFrontmatter = {
    ...(rawFm as unknown as ContentFrontmatter),
    title: (rawFm.title as string | undefined) ?? slug,
    date: normalizeDate(rawFm.date),
  };
  const body = parsed.content.trim();
  const excerpt = body
    .replace(/^#.*$/m, "")
    .replace(/[#*_`>\-]/g, "")
    .trim()
    .split(/\n+/)
    .filter(Boolean)
    .slice(0, 2)
    .join(" ")
    .slice(0, 240);
  const wordCount = body.split(/\s+/).filter(Boolean).length;
  const href = `/${category}/${slug}`;
  return {
    category,
    slug,
    href,
    frontmatter,
    body,
    excerpt,
    wordCount,
  };
}

/**
 * Load all docs in a category.
 * - For most categories: each .md file directly under content/<category>/ is a doc, slug = filename without .md
 * - For sources: each folder under content/sources/ is a doc, slug = folder name, body = <slug>/source.md
 */
export function loadCategory(category: ContentCategory): ContentDoc[] {
  ensureContentRoot();
  const dir = path.join(CONTENT_ROOT, category);
  if (!fs.existsSync(dir)) return [];

  const docs: ContentDoc[] = [];

  if (category === "sources") {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (!entry.isDirectory()) continue;
      const sourceFile = path.join(dir, entry.name, "source.md");
      if (!fs.existsSync(sourceFile)) continue;
      docs.push(readDocAt(sourceFile, category, entry.name));
    }
  } else {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (!entry.isFile() || !entry.name.endsWith(".md")) continue;
      const slug = entry.name.replace(/\.md$/, "");
      docs.push(readDocAt(path.join(dir, entry.name), category, slug));
    }
  }

  // Newest first by frontmatter date, then alpha by title.
  docs.sort((a, b) => {
    const ad = a.frontmatter.date ?? "";
    const bd = b.frontmatter.date ?? "";
    if (ad !== bd) return bd.localeCompare(ad);
    return a.frontmatter.title.localeCompare(b.frontmatter.title);
  });

  return docs;
}

export function loadAll(): ContentDoc[] {
  return ALL_CATEGORIES.flatMap(loadCategory);
}

export function loadDoc(category: ContentCategory, slug: string): ContentDoc | null {
  const docs = loadCategory(category);
  return docs.find((d) => d.slug === slug) ?? null;
}

export function countByCategory(): Record<ContentCategory, number> {
  const out = {} as Record<ContentCategory, number>;
  for (const cat of ALL_CATEGORIES) out[cat] = loadCategory(cat).length;
  return out;
}

/**
 * Reverse-lookup: given a source slug, find every artifact that cites it.
 */
export function findBacklinks(sourceSlug: string): ContentDoc[] {
  return loadAll().filter((d) =>
    (d.frontmatter.citations ?? []).some((c) => c.source === sourceSlug),
  );
}

/**
 * Reverse-lookup for any artifact slug. Returns distinct docs that reference
 * the slug via either:
 *  - `citations[].source === slug` (citation mechanism — typically sources)
 *  - `[[slug]]` appearing in the body (wikilink mechanism — any artifact)
 * Self-references are excluded.
 */
export function findReferencedBy(slug: string): ContentDoc[] {
  const wikilinkPattern = new RegExp(
    `\\[\\[${slug.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\]\\]`,
  );
  return loadAll().filter((d) => {
    if (d.slug === slug) return false;
    const cited = (d.frontmatter.citations ?? []).some((c) => c.source === slug);
    if (cited) return true;
    return wikilinkPattern.test(d.body);
  });
}

/**
 * Distinct sources cited by docs in a category, sorted by source publication
 * date (newest first). Used by the source-filter pills on category pages.
 */
export function sourcesInCategory(
  category: ContentCategory,
): { slug: string; title: string; date?: string }[] {
  const docs = loadCategory(category);
  const slugs = new Set<string>();
  for (const d of docs) {
    for (const c of d.frontmatter.citations ?? []) {
      slugs.add(c.source);
    }
  }
  const sources = loadCategory("sources");
  const out: { slug: string; title: string; date?: string }[] = [];
  for (const slug of slugs) {
    const src = sources.find((s) => s.slug === slug);
    out.push({
      slug,
      title: src?.frontmatter.title ?? slug,
      date: src?.frontmatter.date,
    });
  }
  out.sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""));
  return out;
}

/**
 * Resolve a slug to its doc — searches every category in ALL_CATEGORIES order.
 * Slugs are expected to be globally unique in practice; first-found wins on
 * collision. Used by the wikilink renderer.
 */
export function resolveSlug(
  slug: string,
): { href: string; title: string; category: ContentCategory } | null {
  for (const cat of ALL_CATEGORIES) {
    const d = loadDoc(cat, slug);
    if (d) {
      return { href: d.href, title: d.frontmatter.title, category: cat };
    }
  }
  return null;
}
