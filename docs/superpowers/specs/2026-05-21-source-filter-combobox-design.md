# Source Filter Combobox — Design Spec

**Date:** 2026-05-21
**Status:** Approved (pending user sign-off)
**Touches:** `src/components/source-filter.tsx`, `src/app/[category]/page.tsx`, `src/lib/content.ts`, `package.json`

## Problem

The category-page source filter is a flat horizontal pill row driven by `?source=<slug>`. At four sources it already wraps onto two lines; at the target of fifty research papers it would consume more vertical space than the artifact list it filters. The pattern doesn't scale.

A second weakness: it's single-select. Strategy work often spans multiple sources — "what do our MCP papers collectively imply for Track 2?" — and the current filter forces one-source-at-a-time browsing.

## Goal

Replace the pill row with a compact, searchable, multi-select combobox that scales to hundreds of sources, keeps the page header small, and supports the "show me artifacts citing any of these sources" workflow.

## Non-goals

- Adding tag, year, or source-type facets (deferred; design leaves room for a sibling combobox if/when needed).
- Persisting filter state across category pages.
- Saved filter sets / pinning.
- AND semantics across selected sources.
- Server-side fuzzy search (in-popover filter is plain case-insensitive substring on title).

## What the user sees

Closed state — one button, then 0..N removable chips, wrapping naturally:

```
FILTER BY SOURCE

  [+ Add source ▾]  [× MCP Perceptions]  [× Agent Building Preferences]
```

Open state — popover anchored to the button:

```
┌──────────────────────────────────────────────┐
│ 🔍 Search 50 sources…                        │
│──────────────────────────────────────────────│
│ ✓ MCP Perceptions Report                     │
│     2025-12-05 · Lorna Rivera                │
│ ✓ Agent Building Preferences                 │
│     2025-12-08 · Zen Ren                     │
│ ────────────────────────────────────────────│
│   Market Agentic Use Cases                   │
│     2026-04-21 · Zen Ren                     │
│   Customer AI Goals 2025                     │
│     2025-08-01 · Zen Ren                     │
│   …46 more (scroll)                          │
│──────────────────────────────────────────────│
│ Clear all                                    │
└──────────────────────────────────────────────┘

  47 artifacts cite any of 2 sources
```

**Row ordering:** selected items pinned at the top with a checkmark; separator; then unselected sources by `date` desc (newest first). Each row shows title + a small meta line (`<date> · <author>`) so 50 similar-looking titles stay disambiguable.

**Search:** typing in the input filters the visible list to a case-insensitive substring match on title (only — author/tags are not searched in v1). Selected items remain visible at the top regardless of the search query, so users can always see and remove what's active.

**Footer:** the `Clear all` action only appears when ≥1 source is selected.

**Count line below the control:**
- 0 selected → `47 artifacts` (existing copy)
- 1 selected → `12 artifacts cite the selected source`
- ≥2 selected → `N artifacts cite any of M sources`

## URL contract

Backwards-compatible extension of the existing single-slug contract:

| Form | Meaning |
|---|---|
| (no `source` param) | No filter — all artifacts |
| `?source=mcp-perceptions-ecosystem-2025` | One source (existing links still work) |
| `?source=mcp-perceptions-ecosystem-2025,agent-building-preferences-2025` | Multiple sources, OR semantics |

OR was chosen over AND because findings typically cite one or two sources; AND would return ≈0 results in practice and serves a use case nobody asked for.

Selecting or deselecting a source in the combobox calls `router.push` with the updated CSV (or `router.push('/${category}')` when the selection drops to zero). The transition is wrapped in `useTransition` so the artifact list can show a pending state while the server re-renders.

## Architecture

### Server / client split

- `src/app/[category]/page.tsx` stays a Server Component. It parses `searchParams.source`, splits on commas, and filters `allDocs` against the resulting slug set.
- `src/components/source-filter.tsx` becomes a Client Component (`"use client"`). It owns popover open-state, search-input state, and URL updates. It receives the full source list and the current selection from the server.

### Server filter logic

Replace the existing single-slug compare in `page.tsx`:

```ts
const selectedSlugs =
  typeof source === "string" && source.length > 0
    ? source.split(",").filter(Boolean)
    : [];

const docs =
  selectedSlugs.length > 0
    ? allDocs.filter((d) =>
        (d.frontmatter.citations ?? []).some((c) =>
          selectedSlugs.includes(c.source),
        ),
      )
    : allDocs;
```

The `sourcesInCategory(cat)` helper in `src/lib/content.ts` is extended to return `{ slug, title, date, author }[]` so the combobox can render the meta line and sort by date desc.

### Client component shape

```tsx
"use client";

interface SourceFilterProps {
  category: string;
  sources: { slug: string; title: string; date?: string; author?: string }[];
  selectedSlugs: string[];
}
```

Internal state:
- `open: boolean` — popover open
- `query: string` — search input
- `pending: boolean` (from `useTransition`) — navigation in flight

Visible list is computed from `sources`, the current `query`, and `selectedSlugs`:
1. Selected sources, in URL order (left-to-right in the CSV = top-to-bottom in the list = oldest-selected-first), always visible regardless of `query`.
2. Separator (visual only) — rendered only when both selected and unselected groups have at least one visible row.
3. Unselected sources sorted by `date` desc, filtered by `query` (case-insensitive substring on title).

Toggling a row updates the slug set and calls `router.push` inside `startTransition`. The popover stays open after a selection so multi-select feels fluid.

## Implementation library

Add two minimal headless dependencies:

```
pnpm add @radix-ui/react-popover cmdk
```

- `@radix-ui/react-popover` — accessible popover with focus management, click-away, and ARIA wiring.
- `cmdk` — a small command-menu primitive (≈8 KB) that handles list rendering, keyboard navigation (↑↓ to move, Enter to select, Escape to close), and filtering hooks. Used by Linear, Vercel, and similar tools.

Styling uses this repo's existing Tailwind tokens (`ink-*`, `accent-*`) — no design-system dependency is added.

(Considered and rejected: pulling in `@algolia/satellite` for its `AutoComplete` component. Satellite is the right answer in Algolia product surfaces, but this workspace is a personal strategy tool and Satellite's peer-dependency footprint — Downshift, react-popper, framer-motion, many Radix packages — is disproportionate. The chosen primitives produce a Satellite-aligned look using ≈30 KB of dependency.)

## Empty states

| Situation | UI |
|---|---|
| 0 sources selected, category has 0 artifacts | Existing "No X yet" prompt (unchanged) |
| ≥1 source selected, 0 matching artifacts | "No artifacts cite the selected sources." + `Clear filter` button |
| Search query has 0 matches inside the popover | "No sources match '<query>'." inside the dropdown |
| Category has <2 sources represented | Combobox hidden (existing rule preserved) |
| Page is `/sources` | Combobox hidden (existing rule preserved) |

## Accessibility

- Combobox trigger button: `aria-expanded`, `aria-controls`, `aria-haspopup="listbox"`.
- Search input inside popover gets focus when the popover opens.
- Each option row has `role="option"` with `aria-selected={isSelected}`.
- Keyboard: ↑/↓ moves through visible rows, Enter toggles selection (popover stays open for multi-select), Escape closes the popover, Backspace on an empty search input removes the **rightmost chip** (last entry in the CSV).
- Chips are removable via an explicit `×` button with `aria-label="Remove <title>"`.
- All interactive elements have visible focus rings using existing Tailwind utilities (`focus-visible:ring-2 focus-visible:ring-accent-500`).

## Edge cases & invariants

- **Stale slugs in the URL** (e.g., `?source=foo,deleted-slug`): unknown slugs are silently dropped from the active filter set rather than throwing. The dropdown only shows real sources.
- **No artifacts in category at all**: the combobox is hidden (existing `sources.length < 2` rule covers this since `sourcesInCategory` only returns sources that are actually cited).
- **Single-slug legacy URLs**: still work — `split(",")` on a single-slug string yields a single-element array.
- **Very long titles**: the combobox row uses `truncate` on the title; the closed-state chip caps width at `max-w-[14rem]` (matches existing behavior) with `truncate` + tooltip on hover.

## Files touched

| File | Change |
|---|---|
| `package.json` | Add `@radix-ui/react-popover` and `cmdk` |
| `src/components/source-filter.tsx` | Rewrite as Client Component using Radix Popover + cmdk |
| `src/app/[category]/page.tsx` | Parse comma-separated `source` param; update server filter; update count copy |
| `src/lib/content.ts` | Extend `sourcesInCategory` to include `date` and `author` |

## Verification

This repo has no test suite. Verify in the browser:

1. `pnpm typecheck` and `pnpm lint` both pass.
2. `pnpm dev`. On `/findings`:
   - Closed combobox visible with `+ Add source` button.
   - Open → search input focused, list shows all sources sorted by date desc.
   - Type a query → list filters.
   - Click a source → chip appears inline, list pin-to-top updates, URL updates to `?source=<slug>`, artifact list re-renders.
   - Click a second source → both chips visible, URL becomes `?source=a,b`, artifact list shows union.
   - Click `×` on a chip → removed from URL and list.
   - `Clear all` → URL drops the `source` param entirely.
   - Refresh the page with a CSV URL → state reconstructs correctly.
3. Confirm single-slug legacy URLs (`?source=mcp-perceptions-ecosystem-2025`) still work.
4. Tab through the control — focus order is sensible, ring is visible.
5. Open dropdown, press ↑↓ Enter Escape Backspace — each behaves as specified.
6. Visit `/sources` — combobox is not rendered.
7. Visit a category with <2 represented sources — combobox is not rendered.

## Future extensions (not in this spec)

- A sibling combobox for a `tag` facet, once artifact frontmatter carries tags.
- "Recently used sources" pinned section in the dropdown header.
- Cross-page filter persistence via cookie or sessionStorage.
