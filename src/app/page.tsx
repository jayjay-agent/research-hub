import Link from "next/link";
import { loadAll, loadCategory, loadDoc } from "@/lib/content";
import { CATEGORY_META, type ContentCategory } from "@/lib/types";
import { DocCard } from "@/components/doc-card";

const ROLLUP_CATEGORIES: ContentCategory[] = [
  "findings",
  "implications",
  "hypotheses",
  "design-goals",
  "ideas",
  "todos",
];

interface SourceRollup {
  slug: string;
  href: string;
  title: string;
  date?: string;
  author?: string;
  snippet?: string;
  counts: { category: ContentCategory; count: number }[];
}

function buildRollups(): SourceRollup[] {
  const sources = loadCategory("sources");
  return sources.map((src) => {
    const summary = loadDoc("summaries", src.slug);
    const snippet = summary?.frontmatter.summary ?? src.frontmatter.summary;
    const counts = ROLLUP_CATEGORIES.map((cat) => {
      const docs = loadCategory(cat);
      const count = docs.filter((d) =>
        (d.frontmatter.citations ?? []).some((c) => c.source === src.slug),
      ).length;
      return { category: cat, count };
    });
    return {
      slug: src.slug,
      href: src.href,
      title: src.frontmatter.title,
      date: src.frontmatter.date,
      author: src.frontmatter.author,
      snippet,
      counts,
    };
  });
}

function formatMonth(date: string | undefined): string | null {
  if (!date) return null;
  const m = /^(\d{4})-(\d{2})/.exec(date);
  if (!m) return date;
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const idx = parseInt(m[2], 10) - 1;
  if (idx < 0 || idx >= months.length) return date;
  return `${months[idx]} ${m[1]}`;
}

export default function HomePage() {
  const rollups = buildRollups();
  const recent = loadAll()
    .filter((d) => d.frontmatter.date && d.category !== "sources" && d.category !== "summaries")
    .slice(0, 5);

  return (
    <div className="space-y-12">
      <header>
        <div className="text-xs font-medium uppercase tracking-widest text-accent-700">
          Workspace
        </div>
        <h1 className="mt-2 font-serif text-4xl font-semibold leading-tight text-ink-900">
          Agent Studio · Research &amp; Strategy
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-600">
          A research-grounded workspace. Every strategy artifact here — a finding, a hypothesis, a
          design goal, an idea — cites the research it was drawn from. Read the source, then read
          what was built on top of it.
        </p>
      </header>

      {rollups.length === 0 ? (
        <section className="rounded-lg border border-dashed border-ink-300 bg-ink-50 p-8 text-center">
          <h3 className="font-serif text-lg font-semibold text-ink-900">Nothing here yet</h3>
          <p className="mx-auto mt-2 max-w-md text-sm text-ink-600">
            Run{" "}
            <code className="rounded bg-white px-1.5 py-0.5 font-mono text-[12px]">
              /research-strategy &lt;url-or-path&gt;
            </code>{" "}
            in Claude Code to ingest a research doc. The skill will write a summary, findings, and
            Agent Studio implications — all grounded with citations back to the source.
          </p>
        </section>
      ) : (
        <section>
          <div className="mb-4 flex items-baseline justify-between">
            <h2 className="font-serif text-lg font-semibold text-ink-900">
              Research{" "}
              <span className="text-sm font-normal text-ink-400">
                · {rollups.length} {rollups.length === 1 ? "source" : "sources"}
              </span>
            </h2>
          </div>
          <div className="space-y-4">
            {rollups.map((r) => (
              <RollupCard key={r.slug} rollup={r} />
            ))}
          </div>
        </section>
      )}

      {recent.length > 0 && (
        <section>
          <h2 className="mb-4 font-serif text-lg font-semibold text-ink-900">
            Recent{" "}
            <span className="text-sm font-normal text-ink-400">· latest derived artifacts</span>
          </h2>
          <div className="space-y-3">
            {recent.map((d) => (
              <DocCard key={d.href} doc={d} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

function RollupCard({ rollup }: { rollup: SourceRollup }) {
  const month = formatMonth(rollup.date);
  const nonZero = rollup.counts.filter((c) => c.count > 0);
  return (
    <article className="rounded-lg border border-ink-200 bg-white p-6 transition hover:border-accent-500 hover:shadow-sm">
      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] font-medium uppercase tracking-wider text-ink-500">
        <span className="text-accent-700">Research source</span>
        {month && <span className="text-ink-400">·</span>}
        {month && <span className="text-ink-500">{month}</span>}
        {rollup.author && <span className="text-ink-400">·</span>}
        {rollup.author && <span className="normal-case tracking-normal text-ink-500">{rollup.author}</span>}
      </div>
      <Link href={rollup.href} className="group block">
        <h3 className="mt-2 font-serif text-2xl font-semibold leading-snug text-ink-900 group-hover:text-accent-700">
          {rollup.title}
        </h3>
        {rollup.snippet && (
          <p className="mt-2 text-sm leading-relaxed text-ink-600">{rollup.snippet}</p>
        )}
      </Link>
      {nonZero.length > 0 && (
        <div className="mt-4 flex flex-wrap items-center gap-1.5">
          {nonZero.map((c) => (
            <Link
              key={c.category}
              href={`/${c.category}?source=${rollup.slug}`}
              className="inline-flex items-baseline gap-1.5 rounded-md border border-ink-200 bg-white px-2.5 py-1 text-xs text-ink-700 transition hover:border-accent-500 hover:text-accent-700"
            >
              <span className="font-semibold text-ink-900">{c.count}</span>
              <span className="lowercase">{CATEGORY_META[c.category].title}</span>
            </Link>
          ))}
        </div>
      )}
    </article>
  );
}
