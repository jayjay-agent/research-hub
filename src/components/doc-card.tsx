import Link from "next/link";
import type { ContentDoc } from "@/lib/types";
import { SourcePills } from "./source-pills";

export function DocCard({ doc }: { doc: ContentDoc }) {
  const { frontmatter, href, category } = doc;
  const showSources = category !== "sources";
  return (
    <div className="group rounded-lg border border-ink-200 bg-white p-5 transition hover:border-accent-500 hover:shadow-sm">
      <Link href={href} className="block">
        <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-accent-700">
          {category}
          {frontmatter.date && (
            <span className="font-normal text-ink-400">· {frontmatter.date}</span>
          )}
        </div>
        <div className="mt-1 font-serif text-lg font-semibold leading-snug text-ink-900 group-hover:text-accent-700">
          {frontmatter.title}
        </div>
        {(frontmatter.summary || doc.excerpt) && (
          <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-ink-600">
            {frontmatter.summary ?? doc.excerpt}
          </p>
        )}
      </Link>
      {showSources && frontmatter.citations?.length ? (
        <div className="mt-3">
          <SourcePills citations={frontmatter.citations} />
        </div>
      ) : null}
      <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-ink-500">
        {frontmatter.tags?.slice(0, 4).map((t) => (
          <span key={t} className="rounded bg-ink-100 px-2 py-0.5">
            #{t}
          </span>
        ))}
        {frontmatter.status && (
          <span className="rounded bg-ink-100 px-2 py-0.5 capitalize">{frontmatter.status}</span>
        )}
        {typeof frontmatter.confidence === "number" && (
          <span className="rounded bg-ink-100 px-2 py-0.5">
            confidence {frontmatter.confidence}/5
          </span>
        )}
      </div>
    </div>
  );
}
