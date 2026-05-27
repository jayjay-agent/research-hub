"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import * as Popover from "@radix-ui/react-popover";
import { Command } from "cmdk";

interface SourceOption {
  slug: string;
  title: string;
  date?: string;
  author?: string;
  count: number;
}

interface Props {
  category: string;
  sources: SourceOption[];
  selectedSlugs: string[];
}

/**
 * Multi-select source filter for category pages.
 *
 * URL contract: `?source=slug1,slug2,...` — OR semantics across the slugs.
 * Empty/omitted = no filter. Single-slug URLs (legacy) still work.
 *
 * Selected sources appear inline as removable chips. The `+ Add source`
 * trigger opens a searchable popover; selected items are pinned to the top
 * of the list and remain visible regardless of the search query. Each
 * dropdown row shows a right-aligned count of how many docs in this
 * category cite that source — turning the picker into a signal-density
 * scan instead of a guessing game at scale.
 */
export function SourceFilter({ category, sources, selectedSlugs }: Props) {
  const router = useRouter();
  const [, startTransition] = useTransition();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  if (sources.length < 2) return null;

  const selectedSet = new Set(selectedSlugs);
  const selectedSources = selectedSlugs
    .map((slug) => sources.find((s) => s.slug === slug))
    .filter((s): s is SourceOption => Boolean(s));

  const q = query.trim().toLowerCase();
  const unselectedMatches = sources
    .filter((s) => !selectedSet.has(s.slug))
    .filter((s) => (q ? s.title.toLowerCase().includes(q) : true));

  const navigate = (slugs: string[]) => {
    const csv = slugs.join(",");
    const url = csv ? `/${category}?source=${csv}` : `/${category}`;
    startTransition(() => router.push(url));
  };

  const toggle = (slug: string) => {
    const next = selectedSet.has(slug)
      ? selectedSlugs.filter((s) => s !== slug)
      : [...selectedSlugs, slug];
    navigate(next);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && query.length === 0 && selectedSlugs.length > 0) {
      e.preventDefault();
      navigate(selectedSlugs.slice(0, -1));
    }
  };

  const renderRow = (s: SourceOption, isSelected: boolean) => (
    <Command.Item
      key={s.slug}
      value={s.slug}
      onSelect={() => toggle(s.slug)}
      className="flex cursor-pointer items-start gap-2 rounded px-2 py-1.5 text-sm aria-selected:bg-ink-50 data-[selected=true]:bg-ink-50"
    >
      <span
        className={`mt-0.5 w-3 flex-shrink-0 text-center ${
          isSelected ? "text-accent-700" : "text-transparent"
        }`}
        aria-hidden
      >
        ✓
      </span>
      <span className="min-w-0 flex-1">
        <span className="block truncate text-ink-900">{s.title}</span>
        {(s.date || s.author) && (
          <span className="block truncate text-xs text-ink-500">
            {[s.date, s.author].filter(Boolean).join(" · ")}
          </span>
        )}
      </span>
      <span
        className="mt-0.5 flex-shrink-0 text-xs tabular-nums text-ink-400"
        aria-label={`${s.count} ${s.count === 1 ? "artifact" : "artifacts"}`}
      >
        {s.count}
      </span>
    </Command.Item>
  );

  return (
    <div className="-mx-1 flex flex-wrap items-center gap-1.5">
      <span className="px-2 text-[10px] font-semibold uppercase tracking-wider text-ink-400">
        Filter by source
      </span>
      <Popover.Root open={open} onOpenChange={setOpen}>
        <Popover.Trigger asChild>
          <button
            type="button"
            className="inline-flex items-center gap-1.5 rounded-full border border-dashed border-ink-300 bg-white px-3 py-1 text-xs font-medium text-ink-600 transition hover:border-accent-500 hover:text-accent-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
            aria-label="Add source filter"
          >
            <span>+ Add source</span>
            <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none" aria-hidden>
              <path
                d="M3 5l3 3 3-3"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content
            align="start"
            sideOffset={6}
            className="z-50 w-[22rem] overflow-hidden rounded-lg border border-ink-200 bg-white shadow-lg outline-none"
          >
            <Command shouldFilter={false} loop className="flex flex-col">
              <div className="border-b border-ink-100 p-2">
                <Command.Input
                  autoFocus
                  value={query}
                  onValueChange={setQuery}
                  onKeyDown={handleInputKeyDown}
                  placeholder={`Search ${sources.length} sources…`}
                  className="w-full rounded-md border border-ink-200 px-2 py-1.5 text-sm outline-none focus:border-accent-500"
                />
              </div>
              <Command.List className="max-h-72 overflow-y-auto p-1">
                {selectedSources.length > 0 && (
                  <Command.Group>
                    {selectedSources.map((s) => renderRow(s, true))}
                  </Command.Group>
                )}
                {selectedSources.length > 0 && unselectedMatches.length > 0 && (
                  <Command.Separator className="my-1 border-t border-ink-100" />
                )}
                {unselectedMatches.length > 0 && (
                  <Command.Group>
                    {unselectedMatches.map((s) => renderRow(s, false))}
                  </Command.Group>
                )}
                {selectedSources.length === 0 && unselectedMatches.length === 0 && (
                  <div className="px-2 py-3 text-sm text-ink-500">
                    {query
                      ? `No sources match "${query}".`
                      : "No sources to filter by."}
                  </div>
                )}
                {selectedSources.length > 0 &&
                  unselectedMatches.length === 0 &&
                  query.length > 0 && (
                    <div className="px-2 py-3 text-sm text-ink-500">
                      No other sources match &ldquo;{query}&rdquo;.
                    </div>
                  )}
              </Command.List>
              {selectedSources.length > 0 && (
                <div className="border-t border-ink-100 p-2">
                  <button
                    type="button"
                    onClick={() => navigate([])}
                    className="text-xs font-medium text-ink-500 hover:text-accent-700 focus:outline-none focus-visible:underline"
                  >
                    Clear all
                  </button>
                </div>
              )}
            </Command>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
      {selectedSources.map((s) => (
        <button
          key={s.slug}
          type="button"
          onClick={() => toggle(s.slug)}
          className="inline-flex items-center gap-1.5 rounded-full border border-accent-700 bg-accent-700 px-3 py-1 text-xs font-medium text-white transition hover:bg-accent-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
          aria-label={`Remove ${s.title}`}
          title={s.title}
        >
          <span className="max-w-[14rem] truncate">{s.title}</span>
          <span aria-hidden>×</span>
        </button>
      ))}
    </div>
  );
}
