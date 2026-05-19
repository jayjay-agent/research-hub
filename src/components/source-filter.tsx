import Link from "next/link";

interface Props {
  category: string;
  sources: { slug: string; title: string }[];
  activeSlug: string | null;
}

/**
 * Pill row that filters a category page to one source via ?source=<slug>.
 * Server-component compatible — uses real links, no client state.
 * Caller is responsible for deciding when to render (e.g. hide on /sources,
 * hide when fewer than 2 sources are represented).
 */
export function SourceFilter({ category, sources, activeSlug }: Props) {
  if (sources.length < 2) return null;

  const base = `/${category}`;
  const pillBase =
    "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium transition";
  const inactive = "border-ink-200 bg-white text-ink-600 hover:border-accent-500 hover:text-accent-700";
  const active = "border-accent-700 bg-accent-700 text-white";

  return (
    <div className="-mx-1 flex flex-wrap items-center gap-1.5">
      <span className="px-2 text-[10px] font-semibold uppercase tracking-wider text-ink-400">
        Filter by source
      </span>
      <Link
        href={base}
        className={`${pillBase} ${activeSlug === null ? active : inactive}`}
      >
        All
      </Link>
      {sources.map((s) => {
        const isActive = activeSlug === s.slug;
        return (
          <Link
            key={s.slug}
            href={`${base}?source=${s.slug}`}
            className={`${pillBase} ${isActive ? active : inactive}`}
            title={s.title}
          >
            <span className="max-w-[14rem] truncate">{s.title}</span>
          </Link>
        );
      })}
    </div>
  );
}
