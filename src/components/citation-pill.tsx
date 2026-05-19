import Link from "next/link";
import { loadDoc } from "@/lib/content";
import type { Citation } from "@/lib/types";

export function CitationPill({ citation }: { citation: Citation }) {
  const source = loadDoc("sources", citation.source);
  const title = source?.frontmatter.title ?? citation.source;
  return (
    <Link
      href={`/sources/${citation.source}`}
      className="citation"
      title={citation.quote ?? title}
    >
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M6 4h9l5 5v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
        <path d="M14 4v6h6" />
      </svg>
      <span>{title}</span>
    </Link>
  );
}

export function CitationList({ citations }: { citations: Citation[] }) {
  if (!citations.length) return null;
  return (
    <div className="mt-6 rounded-lg border border-ink-200 bg-ink-50 p-4">
      <div className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-ink-500">
        Grounded in
      </div>
      <ul className="space-y-2">
        {citations.map((c, i) => {
          const source = loadDoc("sources", c.source);
          const title = source?.frontmatter.title ?? c.source;
          return (
            <li key={`${c.source}-${i}`} className="text-sm">
              <Link
                href={`/sources/${c.source}`}
                className="font-medium text-accent-700 hover:underline"
              >
                {title}
              </Link>
              {c.quote && (
                <blockquote className="mt-1 border-l-2 border-accent-300 pl-3 italic text-ink-600">
                  &ldquo;{c.quote}&rdquo;
                </blockquote>
              )}
              {c.url && (
                <a
                  href={c.url}
                  target="_blank"
                  rel="noreferrer"
                  className="ml-2 text-xs text-ink-500 hover:text-accent-700"
                >
                  ↗ open
                </a>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
