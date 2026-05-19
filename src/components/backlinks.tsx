import Link from "next/link";
import { findReferencedBy } from "@/lib/content";
import { CATEGORY_META } from "@/lib/types";

/**
 * Reverse-link panel shown at the bottom of an artifact page.
 * Aggregates both citation-based backlinks (sources) and wikilink-based
 * backlinks (any artifact). Renders nothing when there are no inbound refs.
 */
export function Backlinks({ slug }: { slug: string }) {
  const links = findReferencedBy(slug);
  if (!links.length) return null;
  return (
    <div className="mt-10 border-t border-ink-200 pt-6">
      <div className="mb-3 text-[10px] font-semibold uppercase tracking-wider text-ink-500">
        Referenced by ({links.length})
      </div>
      <ul className="space-y-2">
        {links.map((d) => (
          <li key={d.href}>
            <Link href={d.href} className="group flex items-baseline gap-3 text-sm">
              <span className="w-32 shrink-0 text-[10px] font-semibold uppercase tracking-wider text-accent-700">
                {CATEGORY_META[d.category].title}
              </span>
              <span className="font-medium text-ink-800 group-hover:text-accent-700 group-hover:underline">
                {d.frontmatter.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
