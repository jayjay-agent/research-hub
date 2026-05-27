# Source Filter Combobox Implementation Plan

> **Status:** Superseded by `2026-05-27-source-filter-combobox-with-counts.md`.
> The 2026-05-27 plan is the one that shipped (combobox + per-source counts).
> Kept for historical reference.

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the flat pill-row source filter with a compact multi-select combobox that scales to 50+ research papers.

**Architecture:** `SourceFilter` becomes a Client Component built on `@radix-ui/react-popover` + `cmdk`. URL contract extends `?source=<slug>` to comma-separated slugs with OR semantics. Server filter (`src/app/[category]/page.tsx`) parses the CSV and intersects against `citations[].source`. Single-slug legacy URLs continue to work.

**Tech Stack:** Next.js 15 App Router · React 19 · TypeScript · Tailwind 3 · `@radix-ui/react-popover` (new) · `cmdk` (new) · pnpm.

**Source of truth spec:** `docs/superpowers/specs/2026-05-21-source-filter-combobox-design.md`. If a step contradicts the spec, the spec wins — surface the conflict.

**Verification note:** This repo has no test suite (per `CLAUDE.md`). Verification is `pnpm typecheck` + `pnpm lint` + manual browser checks. Each task that touches code ends with both gates passing.

---

## File structure

| File | Action | Responsibility |
|---|---|---|
| `src/lib/content.ts` | Modify | Extend `sourcesInCategory` to include `author` in the returned shape. |
| `package.json` / `pnpm-lock.yaml` | Modify | Add `@radix-ui/react-popover` and `cmdk` deps. |
| `src/components/source-filter.tsx` | Rewrite | Client Component combobox with inline tags, popover with searchable list, keyboard nav. |
| `src/app/[category]/page.tsx` | Modify | Parse `source` as CSV → `selectedSlugs[]`. Filter docs via Set membership. Update count copy. Pass new prop shape to `SourceFilter`. |

---

## Task 1: Extend `sourcesInCategory` to include `author`

**Files:**
- Modify: `src/lib/content.ts:143-165`

- [ ] **Step 1: Update the return type and implementation**

Replace the existing `sourcesInCategory` function (lines 143-165) with this version:

```ts
/**
 * Distinct sources cited by docs in a category, sorted by source publication
 * date (newest first). Used by the source-filter combobox on category pages.
 */
export function sourcesInCategory(
  category: ContentCategory,
): { slug: string; title: string; date?: string; author?: string }[] {
  const docs = loadCategory(category);
  const slugs = new Set<string>();
  for (const d of docs) {
    for (const c of d.frontmatter.citations ?? []) {
      slugs.add(c.source);
    }
  }
  const sources = loadCategory("sources");
  const out: { slug: string; title: string; date?: string; author?: string }[] = [];
  for (const slug of slugs) {
    const src = sources.find((s) => s.slug === slug);
    out.push({
      slug,
      title: src?.frontmatter.title ?? slug,
      date: src?.frontmatter.date,
      author: src?.frontmatter.author,
    });
  }
  out.sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""));
  return out;
}
```

- [ ] **Step 2: Confirm typecheck passes**

Run: `pnpm typecheck`
Expected: exit 0, no errors. The existing call site in `src/app/[category]/page.tsx` passes the return value straight to `SourceFilter` — the wider shape is structurally compatible with the current `{ slug; title }[]` consumer because TypeScript narrows on the consumer side.

- [ ] **Step 3: Commit**

```bash
git add src/lib/content.ts
git commit -m "Add author to sourcesInCategory return shape

Preparation for source-filter combobox, which surfaces date + author
in dropdown rows to disambiguate similar titles at scale."
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
Expected: both exit 0. New deps have their own types, so no `@types/*` follow-up.

- [ ] **Step 3: Commit**

```bash
git add package.json pnpm-lock.yaml
git commit -m "Add @radix-ui/react-popover and cmdk

Headless primitives for the source-filter combobox. Together ~30 KB."
```

---

## Task 3: Rewrite `SourceFilter` as a client combobox

**Files:**
- Rewrite: `src/components/source-filter.tsx`

This task ships the new component in isolation. Its new prop contract (`selectedSlugs: string[]`) is not yet consumed by `page.tsx` — Task 4 wires that up. Between these two tasks the TypeScript build will fail; land them together (or commit Task 3 first and Task 4 immediately after without pushing).

- [ ] **Step 1: Replace the entire contents of `src/components/source-filter.tsx`**

Overwrite the file with:

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
 * of the list and remain visible regardless of the search query.
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

- [ ] **Step 2: Confirm typecheck reports the expected page.tsx mismatch**

Run: `pnpm typecheck`
Expected: ONE error in `src/app/[category]/page.tsx` about `activeSlug` not assignable / `selectedSlugs` missing. This is intentional — Task 4 fixes it. If you see errors anywhere else, stop and investigate.

- [ ] **Step 3: Do not commit yet**

Hold the commit until Task 4 lands so the repo never has a broken main. Proceed to Task 4.

---

## Task 4: Update `[category]/page.tsx` for CSV + multi-select copy

**Files:**
- Modify: `src/app/[category]/page.tsx`

- [ ] **Step 1: Replace the entire contents of `src/app/[category]/page.tsx`**

Overwrite the file with:

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
git commit -m "Replace source pill row with multi-select combobox

The flat pill row didn't scale past a handful of sources. Replaces
it with a Radix Popover + cmdk combobox that supports multi-select,
search, and shows date/author meta to disambiguate similar titles.

URL contract extends from single slug to comma-separated slugs with
OR semantics. Single-slug links continue to work.

Spec: docs/superpowers/specs/2026-05-21-source-filter-combobox-design.md"
```

---

## Task 5: Browser verification

**Files:** none modified by default. Open polish fixes in this task if anything looks off.

- [ ] **Step 1: Start the dev server**

Run: `pnpm dev`
Expected: server boots on http://localhost:3000.

- [ ] **Step 2: Walk the happy path on `/findings`**

Open http://localhost:3000/findings and confirm each of:

1. The `+ Add source` button is visible. Old pill row is gone.
2. Click `+ Add source` → popover opens, search input has focus.
3. Placeholder reads `Search N sources…` where N matches the cited-source count.
4. Sources are listed newest first by date. Each row shows title + small `<date> · <author>` line.
5. Type part of a title → list filters in place.
6. Click a source → row gains a ✓, an orange chip appears inline next to `+ Add source`, URL becomes `/findings?source=<slug>`, artifact list re-renders.
7. Click a second source → both chips visible, URL becomes `/findings?source=a,b`, artifact list now shows the union.
8. Selected sources stay pinned at the top of the dropdown even when you clear the search input and re-type.
9. Click the `×` on a chip → chip removed, URL drops that slug, list re-renders.
10. With ≥1 source selected, click `Clear all` in the popover footer → URL drops `?source=` entirely, list shows everything.

- [ ] **Step 3: Walk the legacy / edge URLs**

1. Visit `/findings?source=mcp-perceptions-ecosystem-2025` (single slug). The chip should appear, filter should apply. Single-slug legacy URLs continue to work.
2. Visit `/findings?source=mcp-perceptions-ecosystem-2025,does-not-exist`. The known slug applies as a chip; the unknown slug is silently dropped (it produces no chip and no row in the dropdown).
3. Visit `/sources`. Combobox is NOT rendered.
4. Visit a category whose docs cite fewer than two distinct sources (if any in current content). Combobox is NOT rendered.

- [ ] **Step 4: Walk keyboard nav**

With the dropdown open:

1. ↑ / ↓ moves the highlight through visible rows.
2. Enter on a row toggles its selection; the popover stays open.
3. Escape closes the popover and returns focus to the trigger button.
4. With search input empty and ≥1 chip selected, press Backspace inside the input → the rightmost chip is removed.

- [ ] **Step 5: Confirm count copy**

In the docs section just above the artifact list:

- 0 selected → `47 artifacts` (or whatever count, no trailing clause)
- 1 selected → `12 artifacts cite the selected source`
- 2+ selected → `8 artifacts cite any of 2 sources`

- [ ] **Step 6: Confirm empty state**

Select a source that no artifacts in the current category cite (e.g., select sources one at a time until you trigger 0 matches). The page should render the dashed `No <category> cite the selected source(s). Try a different filter.` block, NOT the artifact list.

- [ ] **Step 7: If anything looks visually off, fix it in place and commit**

Likely small issues (cap each fix in a short commit):
- Popover offset / alignment looks weird on narrow viewports.
- Chip wraps in a clunky way next to the `+ Add source` button.
- Focus ring colors don't match the rest of the page.

If you make adjustments, run `pnpm typecheck && pnpm lint` again before committing.

```bash
git add src/components/source-filter.tsx
git commit -m "Polish source-filter combobox <specific thing>"
```

---

## Self-review checklist (for the implementer)

After all tasks complete, re-skim the spec at `docs/superpowers/specs/2026-05-21-source-filter-combobox-design.md` and confirm:

- [ ] Closed state shows `+ Add source` button + 0..N removable chips on one wrapping line.
- [ ] Popover shows search input with autofocus, scrollable list, optional footer `Clear all`.
- [ ] Selected items pinned at top with ✓; separator only when both groups have visible rows.
- [ ] Unselected sources sorted by date desc.
- [ ] Each row shows `<title>` + `<date> · <author>` meta.
- [ ] URL contract: `?source=a,b,c` works; `?source=a` (legacy single) works; no param = no filter.
- [ ] OR semantics in server filter (`some + includes`).
- [ ] Stale slugs in URL are silently ignored.
- [ ] Backspace-on-empty-input removes rightmost chip.
- [ ] `Clear all` footer only renders when ≥1 selected.
- [ ] Combobox hidden when `sources.length < 2`, hidden on `/sources`.
- [ ] Count copy handles 0 / 1 / N+ cases.
- [ ] A11y: trigger has `aria-label`, chips have `aria-label="Remove …"`, focus rings visible.
- [ ] No console errors in the browser during normal use.
