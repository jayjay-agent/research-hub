import { notFound } from "next/navigation";
import { loadCategory, sourcesInCategory } from "@/lib/content";
import { ALL_CATEGORIES, CATEGORY_META, type ContentCategory } from "@/lib/types";
import { DocCard } from "@/components/doc-card";
import { SourceFilter } from "@/components/source-filter";

export function generateStaticParams() {
  return ALL_CATEGORIES.map((category) => ({ category }));
}

interface Props {
  params: Promise<{ category: string }>;
  searchParams: Promise<{ source?: string | string[] }>;
}

export default async function CategoryPage({ params, searchParams }: Props) {
  const { category } = await params;
  const { source } = await searchParams;
  if (!ALL_CATEGORIES.includes(category as ContentCategory)) notFound();
  const cat = category as ContentCategory;
  const meta = CATEGORY_META[cat];
  const allDocs = loadCategory(cat);

  const sourceParam = Array.isArray(source) ? source.join(",") : source;
  const selectedSlugs =
    typeof sourceParam === "string" && sourceParam.length > 0
      ? sourceParam.split(",").filter(Boolean)
      : [];

  const docs =
    selectedSlugs.length > 0
      ? allDocs.filter((d) =>
          (d.frontmatter.citations ?? []).some((c) =>
            selectedSlugs.includes(c.source),
          ),
        )
      : allDocs;

  const showFilter = cat !== "sources";
  const sources = showFilter ? sourcesInCategory(cat) : [];

  return (
    <div className="space-y-8">
      <header>
        <div className="text-xs font-medium uppercase tracking-widest text-accent-700">
          {meta.tone}
        </div>
        <h1 className="mt-2 font-serif text-3xl font-semibold leading-tight text-ink-900">
          {meta.title}
        </h1>
        <p className="mt-3 max-w-2xl text-base text-ink-600">{meta.subtitle}</p>
      </header>

      {showFilter && sources.length >= 2 && (
        <SourceFilter category={cat} sources={sources} selectedSlugs={selectedSlugs} />
      )}

      {allDocs.length === 0 ? (
        <div className="rounded-lg border border-dashed border-ink-300 bg-ink-50 p-6 text-sm text-ink-600">
          No {meta.title.toLowerCase()} yet. Add some via the{" "}
          <code className="rounded bg-white px-1 py-0.5 font-mono text-xs">/research-strategy</code>{" "}
          skill, or write a markdown file directly into{" "}
          <code className="rounded bg-white px-1 py-0.5 font-mono text-xs">content/{cat}/</code>.
        </div>
      ) : docs.length === 0 ? (
        <div className="rounded-lg border border-dashed border-ink-300 bg-ink-50 p-6 text-sm text-ink-600">
          No {meta.title.toLowerCase()} cite the selected{" "}
          {selectedSlugs.length === 1 ? "source" : "sources"}. Try a different filter.
        </div>
      ) : (
        <>
          <div className="text-xs text-ink-500">
            {docs.length} {docs.length === 1 ? "artifact" : "artifacts"}
            {selectedSlugs.length === 1 && ` cite the selected source`}
            {selectedSlugs.length > 1 && ` cite any of ${selectedSlugs.length} sources`}
          </div>
          <div className="space-y-3">
            {docs.map((d) => (
              <DocCard key={d.href} doc={d} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
