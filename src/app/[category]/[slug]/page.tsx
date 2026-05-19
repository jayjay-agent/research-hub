import { notFound } from "next/navigation";
import Link from "next/link";
import { loadCategory, loadDoc } from "@/lib/content";
import { renderMarkdown } from "@/lib/markdown";
import { ALL_CATEGORIES, CATEGORY_META, type ContentCategory } from "@/lib/types";
import { CitationList } from "@/components/citation-pill";
import { Backlinks } from "@/components/backlinks";

export async function generateStaticParams() {
  const params: { category: string; slug: string }[] = [];
  for (const category of ALL_CATEGORIES) {
    for (const d of loadCategory(category)) {
      params.push({ category, slug: d.slug });
    }
  }
  return params;
}

interface Props {
  params: Promise<{ category: string; slug: string }>;
}

export default async function DocPage({ params }: Props) {
  const { category, slug } = await params;
  if (!ALL_CATEGORIES.includes(category as ContentCategory)) notFound();
  const cat = category as ContentCategory;
  const doc = loadDoc(cat, slug);
  if (!doc) notFound();

  const html = await renderMarkdown(doc.body);
  const meta = CATEGORY_META[cat];

  // On source pages, embed the matching summary at top so the TL;DR is the
  // first thing the reader sees. Falls back gracefully when no summary exists.
  const summaryDoc = cat === "sources" ? loadDoc("summaries", slug) : null;
  const summaryHtml = summaryDoc ? await renderMarkdown(summaryDoc.body) : null;

  return (
    <article className="space-y-6">
      <nav className="text-xs text-ink-500">
        <Link href="/" className="hover:text-accent-700">
          Workspace
        </Link>
        {" / "}
        <Link href={`/${cat}`} className="hover:text-accent-700">
          {meta.title}
        </Link>
      </nav>

      <header className="border-b border-ink-200 pb-6">
        <div className="text-[11px] font-semibold uppercase tracking-widest text-accent-700">
          {meta.title}
        </div>
        <h1 className="mt-2 font-serif text-3xl font-semibold leading-tight text-ink-900">
          {doc.frontmatter.title}
        </h1>
        {doc.frontmatter.summary && (
          <p className="mt-3 text-lg leading-relaxed text-ink-600">{doc.frontmatter.summary}</p>
        )}
        <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-ink-500">
          {doc.frontmatter.date && <span>{doc.frontmatter.date}</span>}
          {doc.frontmatter.author && <span>· {doc.frontmatter.author}</span>}
          {doc.frontmatter.url && (
            <a
              href={doc.frontmatter.url}
              target="_blank"
              rel="noreferrer"
              className="text-accent-700 hover:underline"
            >
              ↗ original
            </a>
          )}
          {doc.frontmatter.status && (
            <span className="rounded bg-ink-100 px-2 py-0.5 capitalize">
              {doc.frontmatter.status}
            </span>
          )}
          {typeof doc.frontmatter.confidence === "number" && (
            <span className="rounded bg-ink-100 px-2 py-0.5">
              confidence {doc.frontmatter.confidence}/5
            </span>
          )}
          {doc.frontmatter.tags?.map((t) => (
            <span key={t} className="rounded bg-ink-100 px-2 py-0.5">
              #{t}
            </span>
          ))}
        </div>
      </header>

      {summaryHtml && summaryDoc && (
        <section
          aria-label="Summary"
          className="rounded-lg border border-accent-500/30 bg-accent-50/50 p-6"
        >
          <div className="mb-3 flex items-baseline justify-between gap-3">
            <div className="text-[10px] font-semibold uppercase tracking-widest text-accent-700">
              TL;DR
            </div>
            <Link
              href={summaryDoc.href}
              className="text-[11px] text-ink-500 hover:text-accent-700"
            >
              standalone summary ↗
            </Link>
          </div>
          <div
            className="prose prose-ink prose-sm"
            dangerouslySetInnerHTML={{ __html: summaryHtml }}
          />
        </section>
      )}

      {summaryHtml && (
        <div className="flex items-center gap-4 pt-2">
          <div className="text-[10px] font-semibold uppercase tracking-widest text-ink-500">
            Full research text
          </div>
          <div className="h-px flex-1 bg-ink-200" />
        </div>
      )}

      <div className="prose prose-ink" dangerouslySetInnerHTML={{ __html: html }} />

      {cat !== "sources" && doc.frontmatter.citations && (
        <CitationList citations={doc.frontmatter.citations} />
      )}

      <Backlinks slug={doc.slug} />
    </article>
  );
}
