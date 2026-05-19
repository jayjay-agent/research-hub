import Link from "next/link";
import { loadDoc } from "@/lib/content";
import type { Citation } from "@/lib/types";

/**
 * Compact list of source pills shown on listing cards. Lets a reader scan
 * which research a derived artifact was grounded in without opening it,
 * and surfaces cross-source synthesis (multiple pills) at a glance.
 *
 * Renders nothing if the doc has no citations.
 */
export function SourcePills({ citations }: { citations: Citation[] | undefined }) {
  if (!citations?.length) return null;
  const seen = new Set<string>();
  const items: { slug: string; title: string; date?: string }[] = [];
  for (const c of citations) {
    if (seen.has(c.source)) continue;
    seen.add(c.source);
    const src = loadDoc("sources", c.source);
    items.push({
      slug: c.source,
      title: src?.frontmatter.title ?? c.source,
      date: src?.frontmatter.date,
    });
  }
  items.sort((a, b) => (a.date ?? "").localeCompare(b.date ?? ""));
  return (
    <div className="flex flex-wrap items-center gap-1.5">
      {items.map((s) => (
        <Link
          key={s.slug}
          href={`/sources/${s.slug}`}
          className="inline-flex max-w-[18rem] items-center gap-1 rounded-sm border border-ink-200 bg-ink-50 px-1.5 py-0.5 text-[10px] font-medium text-ink-600 transition hover:border-accent-500 hover:text-accent-700"
          title={s.title}
        >
          <span className="h-1 w-1 rounded-full bg-accent-500" />
          <span className="truncate">{s.title}</span>
        </Link>
      ))}
    </div>
  );
}
