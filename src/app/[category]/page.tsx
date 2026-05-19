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

  const activeSlug = typeof source === "string" && source.length > 0 ? source : null;
  const docs = activeSlug
    ? allDocs.filter((d) =>
        (d.frontmatter.citations ?? []).some((c) => c.source === activeSlug),
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
        <SourceFilter category={cat} sources={sources} activeSlug={activeSlug} />
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
          No {meta.title.toLowerCase()} cite that source. Try a different filter.
        </div>
      ) : (
        <>
          <div className="text-xs text-ink-500">
            {docs.length} {docs.length === 1 ? "artifact" : "artifacts"}
            {activeSlug && ` cite the selected source`}
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
