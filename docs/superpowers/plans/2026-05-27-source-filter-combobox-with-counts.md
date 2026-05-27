# Source Filter Combobox + Per-Source Counts — Implementation Plan

> **Status:** Active. Supersedes `2026-05-21-source-filter-combobox.md`.
> **For agentic workers:** Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the flat pill-row source filter with a compact multi-select combobox that scales to 50+ research papers, and show per-source artifact counts so users know which sources are well-developed before clicking.

**Why counts:** at five sources today, "MCP Perceptions" and "Customer AI Goals" look identical in the picker. At fifty, the user has no signal about which sources have eight derived findings versus one. A small right-aligned count per row is the difference between scanning and guessing.

**Architecture:** `SourceFilter` becomes a Client Component built on `@radix-ui/react-popover` + `cmdk`. URL contract extends `?source=<slug>` to comma-separated slugs with OR semantics. Server filter (`src/app/[category]/page.tsx`) parses the CSV and intersects against `citations[].source`. Single-slug legacy URLs continue to work. `sourcesInCategory` is extended to return `count` and `author` in addition to existing `slug/title/date`.

**Tech Stack:** Next.js 15 App Router · React 19 · TypeScript · Tailwind 3 · `@radix-ui/react-popover` (new) · `cmdk` (new) · pnpm.

**Spec reference:** `docs/superpowers/specs/2026-05-21-source-filter-combobox-design.md` is the base spec. This plan adds one element: a per-source `count` field on `SourceOption`, rendered as a right-aligned muted number on each dropdown row. Sort order is unchanged — date desc primary; count is a scannable hint, not a sort key.

**Verification gates:** No test suite (per `CLAUDE.md`). Gates are `pnpm typecheck`, `pnpm lint`, and manual browser checks. Each commit lands with both gates passing.

---

## File structure

| File | Action | Responsibility |
|---|---|---|
| `src/lib/content.ts` | Modify | Extend `sourcesInCategory` to include `author` and `count` in the returned shape. |
| `package.json` / `pnpm-lock.yaml` | Modify | Add `@radix-ui/react-popover` and `cmdk` deps. |
| `src/components/source-filter.tsx` | Rewrite | Client Component combobox with inline tags, popover with searchable list + per-row counts, keyboard nav. |
| `src/app/[category]/page.tsx` | Modify | Parse `source` as CSV → `selectedSlugs[]`. Filter docs via Set membership. Update count copy. Pass new prop shape to `SourceFilter`. |

---

## Task 1: Extend `sourcesInCategory` to include `author` and `count`

**Files:**
- Modify: `src/lib/content.ts` (replace existing `sourcesInCategory`)

- [ ] **Step 1: Update the return type and implementation**

Replace `sourcesInCategory` with this version. Single pass through the docs computes both the slug set and per-slug counts.

```ts
/**
 * Distinct sources cited by docs in a category, sorted by source publication
 * date (newest first). Each entry also carries `count` — the number of docs
 * in the category that cite it — so the combobox can show signal density
 * without forcing the user to filter and read the result.
 *
 * Used by the source-filter combobox on category pages.
 */
export function sourcesInCategory(
  category: ContentCategory,
): { slug: string; title: string; date?: string; author?: string; count: number }[] {
  const docs = loadCategory(category);
  const counts = new Map<string, number>();
  for (const d of docs) {
    const seen = new Set<string>();
    for (const c of d.frontmatter.citations ?? []) {
      if (seen.has(c.source)) continue;
      seen.add(c.source);
      counts.set(c.source, (counts.get(c.source) ?? 0) + 1);
    }
  }
  const sources = loadCategory("sources");
  const out: { slug: string; title: string; date?: string; author?: string; count: number }[] = [];
  for (const [slug, count] of counts) {
    const src = sources.find((s) => s.slug === slug);
    out.push({
      slug,
      title: src?.frontmatter.title ?? slug,
      date: src?.frontmatter.date,
      author: src?.frontmatter.author,
      count,
    });
  }
  out.sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""));
  return out;
}
```

Note: the inner `seen` set per doc means a doc that cites the same source twice still counts as one — count tracks *citing docs*, not *citations*. That's the right semantic for "how many findings can I unlock if I pick this source".

- [ ] **Step 2: Confirm typecheck passes**

Run: `pnpm typecheck`
Expected: exit 0. The existing single call site in `src/app/[category]/page.tsx` accepts the wider shape structurally; the consumer doesn't read `count` until Task 3.

- [ ] **Step 3: Commit**

```bash
git add src/lib/content.ts
git commit -m "Add author + count to sourcesInCategory return shape

Preparation for source-filter combobox. The combobox surfaces:
- date + author to disambiguate similar titles at scale
- per-source artifact count so users can see which sources are
  well-developed before filtering

Count is per-citing-doc (deduped within a doc), not per-citation."
```

---

## Task 2: Install `@radix-ui/react-popover` and `cmdk`

**Files:**
- Modify: `package.json`
- Modify: `pnpm-lock.yaml`

- [ ] **Step 1: Install deps**

Run: `pnpm add @radix-ui/react-popover cmdk`
Expected: both packages resolve and lockfile updates. Versions are not pinned in this plan — accept latest stable.

- [ ] **Step 2: Confirm typecheck + lint still pass**

Run: `pnpm typecheck && pnpm lint`
Expected: both exit 0. Both packages ship their own types — no `@types/*` follow-up.

- [ ] **Step 3: Commit**

```bash
git add package.json pnpm-lock.yaml
git commit -m "Add @radix-ui/react-popover and cmdk

Headless primitives for the source-filter combobox. Together ~30 KB.
Radix handles popover positioning, focus, click-away, ARIA wiring.
cmdk handles list rendering and keyboard nav (↑↓ Enter Escape)."
```

---

## Task 3: Rewrite `SourceFilter` as a client combobox with counts

**Files:**
- Rewrite: `src/components/source-filter.tsx`

This task ships the new component in isolation. Its new prop contract (`selectedSlugs: string[]`) is not yet consumed by `page.tsx` — Task 4 wires that up. Between Task 3 and Task 4 the TypeScript build will fail. Land them as back-to-back commits.

- [ ] **Step 1: Replace the entire contents of `src/components/source-filter.tsx`**

Overwrite with:

```tsx
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
```

Visual notes:
- The count sits at the right edge of each row in `tabular-nums` so digits align column-style as the user scans down (1, 8, 24, 117 stay column-aligned).
- It's muted (`text-ink-400`) so it doesn't compete with the title.
- It carries an `aria-label` so screen readers hear "8 artifacts" not just "8".
- The closed-state chip deliberately does NOT show a count — the chip means "this is active", count there would be visual noise.

- [ ] **Step 2: Confirm typecheck reports the expected page.tsx mismatch**

Run: `pnpm typecheck`
Expected: ONE error in `src/app/[category]/page.tsx` about `activeSlug` not assignable / `selectedSlugs` missing. Intentional — Task 4 fixes it. Errors anywhere else → stop and investigate.

- [ ] **Step 3: Do not commit yet**

Hold the commit until Task 4 lands so main stays green.

---

## Task 4: Update `[category]/page.tsx` for CSV multi-select

**Files:**
- Modify: `src/app/[category]/page.tsx`

- [ ] **Step 1: Replace the entire contents**

```tsx
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
```

- [ ] **Step 2: Run typecheck and lint**

Run: `pnpm typecheck && pnpm lint`
Expected: both exit 0.

- [ ] **Step 3: Commit Task 3 + Task 4 together**

```bash
git add src/components/source-filter.tsx src/app/[category]/page.tsx
git commit -m "Replace source pill row with multi-select combobox + counts

The flat pill row didn't scale past a handful of sources. Replaces
it with a Radix Popover + cmdk combobox that supports multi-select,
search, per-row meta (date · author), and per-row counts (how many
artifacts in this category cite this source) so the picker becomes
a signal-density scan instead of a guessing game at scale.

URL contract extends from single slug to comma-separated slugs with
OR semantics. Single-slug links continue to work.

Spec: docs/superpowers/specs/2026-05-21-source-filter-combobox-design.md"
```

---

## Task 5: Browser verification

- [ ] **Step 1: Start the dev server**

Run: `pnpm dev`
Expected: server boots. (Currently on port 3001 because another app holds 3000.)

- [ ] **Step 2: Walk the happy path on `/findings`**

Open `/findings` and confirm:

1. `+ Add source` button is visible. Old pill row is gone.
2. Click it → popover opens, search input has focus.
3. Placeholder reads `Search N sources…` where N matches the cited-source count.
4. Sources are listed newest first by date. Each row shows title + small `<date> · <author>` line + right-aligned count.
5. Counts are in `tabular-nums` and stay column-aligned.
6. Type part of a title → list filters in place; counts stay accurate for visible rows.
7. Click a source → row gains a ✓, an orange chip appears inline, URL becomes `/findings?source=<slug>`, artifact list re-renders.
8. Click a second source → both chips visible, URL becomes `/findings?source=a,b`, artifact list now shows union.
9. Selected sources stay pinned at the top when search input is cleared.
10. Click `×` on a chip → chip removed, URL drops that slug.
11. With ≥1 source selected, click `Clear all` in the popover footer → URL drops `?source=` entirely.

- [ ] **Step 3: Confirm counts are correct**

For each source visible in the dropdown on `/findings`, eyeball the count against actual content:
- Pick one source, click it, count how many DocCards render below.
- That number should match the count shown next to that source's row in the dropdown.

If counts diverge from rendered cards, the `seen` dedup in `sourcesInCategory` is wrong — investigate.

- [ ] **Step 4: Walk legacy + edge URLs**

1. `/findings?source=<known-slug>` — single chip appears, filter applies.
2. `/findings?source=<known>,does-not-exist` — known applies as a chip; unknown is silently dropped.
3. `/sources` — combobox is NOT rendered.
4. Any category with <2 distinct cited sources — combobox is NOT rendered.

- [ ] **Step 5: Walk keyboard nav**

With dropdown open:
1. ↑/↓ moves through visible rows.
2. Enter on a row toggles selection; popover stays open.
3. Escape closes; focus returns to trigger.
4. Backspace inside empty search input + ≥1 chip → rightmost chip removed.

- [ ] **Step 6: Confirm count copy below filter**

- 0 selected → `N artifacts`
- 1 selected → `N artifacts cite the selected source`
- 2+ selected → `N artifacts cite any of M sources`

- [ ] **Step 7: Confirm empty state**

Select a source combination that has 0 matches. Dashed `No <category> cite the selected source(s). Try a different filter.` block renders, not the artifact list.

---

## Task 6: Supersede the old plan

- [ ] **Step 1: Mark the 2026-05-21 plan as superseded**

Prepend a banner to `docs/superpowers/plans/2026-05-21-source-filter-combobox.md`:

```
> **Status:** Superseded by `2026-05-27-source-filter-combobox-with-counts.md`.
> The 2026-05-27 plan is the one that shipped. Kept for historical reference.
```

- [ ] **Step 2: Commit the supersedence note**

```bash
git add docs/superpowers/plans/2026-05-21-source-filter-combobox.md docs/superpowers/plans/2026-05-27-source-filter-combobox-with-counts.md
git commit -m "Mark 2026-05-21 source-filter plan superseded by 2026-05-27"
```

---

## Self-review checklist

After all tasks complete, confirm:

- [ ] Closed state shows `+ Add source` button + 0..N removable chips on one wrapping line.
- [ ] Popover shows search input with autofocus, scrollable list, optional footer `Clear all`.
- [ ] Selected items pinned at top with ✓; separator only when both groups have visible rows.
- [ ] Unselected sources sorted by date desc.
- [ ] Each row shows `<title>` + `<date> · <author>` meta + right-aligned `<count>` in `tabular-nums`.
- [ ] Count carries `aria-label="N artifacts"` for screen readers.
- [ ] Counts match the number of cards rendered when that source is the only filter.
- [ ] URL contract: `?source=a,b,c` works; `?source=a` (legacy) works; no param = no filter.
- [ ] OR semantics in server filter.
- [ ] Stale slugs in URL are silently dropped.
- [ ] Backspace-on-empty-input removes rightmost chip.
- [ ] `Clear all` footer only renders when ≥1 selected.
- [ ] Combobox hidden when `sources.length < 2`, hidden on `/sources`.
- [ ] Count copy below filter handles 0 / 1 / N+ cases.
- [ ] A11y: trigger has `aria-label`, chips have `aria-label="Remove …"`, focus rings visible.
- [ ] No console errors during normal use.
- [ ] `pnpm typecheck` and `pnpm lint` both pass on every commit.
