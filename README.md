# Agent Studio · Research & Strategy

Your research-to-strategy workspace for Agent Studio. Two pieces:

1. **A Claude Code skill** — `/research-strategy` — that ingests a research URL or document and writes structured, citation-grounded strategy artifacts as markdown.
2. **A small Next.js web UI** — a clean reader for the markdown corpus with sidebar navigation, full-text search, citation pills, and reverse backlinks from source to artifact.

No database. Markdown is the source of truth. Everything lives in `content/`.

## The discipline

Every non-source artifact in `content/` **must cite the source research it was grounded in**. Citations are part of the frontmatter; the UI renders them inline and as backlinks. If a hypothesis, idea, or design goal can't cite, it doesn't get written — it's flagged as an ungrounded idea in the chat report so you can decide whether to investigate it further. This is what keeps the workspace grounded instead of drifting into wish-fulfillment.

## Quick start

```bash
pnpm install
pnpm dev          # http://localhost:3000
```

To ingest a research document:

```
/research-strategy https://example.com/path-to-paper
```

The skill will:

1. Fetch the source and write `content/sources/<slug>/source.md`.
2. Write `content/summaries/<slug>.md` — a tight TL;DR.
3. Write per-finding files under `content/findings/`, each with a verbatim quote citation.
4. Write `content/implications/<slug>.md` — what this means specifically for Agent Studio.
5. Optionally append drafts under `hypotheses/`, `design-goals/`, `ideas/`, `todos/` — each cited, each marked low-confidence for you to refine.
6. Report back: file counts, the sharpest implications, and any ungrounded ideas it considered but didn't commit.

Refresh the UI — your new artifacts show up under the right categories.

## Folder layout

```
content/
├── sources/             # one folder per research doc, each has source.md (ground truth)
│   └── <slug>/source.md
├── summaries/           # TL;DRs (one per source)
├── findings/            # discrete cited findings
├── implications/        # what findings mean for Agent Studio
├── hypotheses/          # testable bets (with confidence 1-5)
├── design-goals/        # design objectives
├── ideas/               # brainstorms and concept sketches
└── todos/               # concrete actions (status: open|in-progress|done|blocked)
```

See `content/README.md` for frontmatter conventions and slug rules.

The Claude Code skill itself lives at `.claude/skills/research-strategy/SKILL.md` — open it to see exactly how the workflow is structured, or to tune the conventions to your taste.

## The web UI

- **Sidebar** — library navigation by category with live counts, plus search.
- **Home** — workspace overview and recent activity.
- **Category pages** — `/sources`, `/findings`, etc. — listing every artifact in that category.
- **Doc pages** — render the markdown with citations rendered as inline pills + a "Grounded in" panel that links back to the source.
- **Source pages** — render the original research, plus an "Artifacts grounded in this source" backlink list at the bottom so you can see everything you've derived from that one paper.
- **Search** — `/api/search` over titles, summaries, tags, and body via fuse.js; live results from the sidebar input.

## Scripts

```bash
pnpm dev          # local dev
pnpm build        # production build
pnpm start        # serve the production build
pnpm typecheck    # tsc --noEmit
pnpm lint         # next lint
```

## Deploying to Vercel

This is a stock Next.js 15 App Router project. Push to a Git repo and import it on Vercel, or run `vercel deploy` from the CLI. Markdown content is read from disk at request time — Vercel Fluid Compute handles this fine, no DB needed.

## What lives where

| Where | What |
|---|---|
| `content/` | All markdown. The source of truth. |
| `src/app/` | Next.js App Router pages (home, category, doc reader, search API). |
| `src/components/` | UI components (sidebar, search box, doc card, citation pill, backlinks). |
| `src/lib/` | Markdown loader (`content.ts`), renderer (`markdown.ts`), search (`search.ts`), types. |
| `.claude/skills/research-strategy/` | The skill that produces the artifacts. |

## Example seed

A placeholder source — `content/sources/_example-agentic-ui/` — ships with the project so the UI has something to render on first run. Delete the folder (and its derived artifacts in `summaries/`, `findings/`, `implications/`, `hypotheses/`, `design-goals/`, `ideas/`, `todos/`) once you've ingested your first real research doc.
