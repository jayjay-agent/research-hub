# Agent Studio · Research & Strategy

A research-to-strategy workspace for **Agent Studio**. Markdown-first knowledge base + small Next.js reader. No database — `content/` is the source of truth.

## Stack

- Next.js 15 (App Router), React 19, TypeScript, Tailwind 3
- Markdown pipeline: `gray-matter` + `remark` / `rehype` / `unified`
- Search: `fuse.js` (server) via `/api/search`
- Package manager: **pnpm** (see `pnpm-workspace.yaml`, `.npmrc`)
- Deploys to Vercel (Fluid Compute reads markdown from disk at request time)

## Commands

```bash
pnpm dev          # http://localhost:3000
pnpm build
pnpm start
pnpm typecheck    # tsc --noEmit
pnpm lint         # next lint
```

Always run `pnpm typecheck` after editing TypeScript. There is no test suite — verify behavior in the browser.

## The discipline (load-bearing rule)

**Every non-source artifact in `content/` must cite the source research it was grounded in.** Citations live in frontmatter (`citations: [{ source, quote?, url? }]`). The UI:

- Renders citation pills inline.
- Renders reverse backlinks on the source page ("Artifacts grounded in this source").
- Refuses to display ungrounded strategy.

If a hypothesis/idea/design-goal can't cite a source, don't write it to disk — surface it as an ungrounded idea in chat so the user can decide whether to investigate. This is what keeps the workspace honest.

## Repo layout

```
content/                            # source of truth (markdown + YAML frontmatter)
├── sources/<slug>/source.md        # one folder per research doc
├── summaries/<slug>.md             # TL;DR per source
├── findings/<topic>--<slug>.md     # discrete cited findings
├── implications/<slug>.md          # what findings mean for Agent Studio
├── hypotheses/h-<slug>.md          # testable bets (confidence 1-5)
├── design-goals/g-<slug>.md
├── ideas/<slug>.md
└── todos/<slug>.md                 # status: open|in-progress|done|blocked

src/
├── app/                            # Next.js App Router
│   ├── page.tsx                    # home
│   ├── [category]/page.tsx         # category listing
│   ├── [category]/[slug]/page.tsx  # doc reader
│   └── api/search/                 # fuse.js search endpoint
├── components/                     # sidebar, search-box, citation-pill, backlinks, etc.
└── lib/
    ├── content.ts                  # loader: loadCategory, loadDoc, findBacklinks, findReferencedBy, resolveSlug
    ├── markdown.ts                 # remark/rehype pipeline
    ├── search.ts
    ├── wikilinks.ts                # [[slug]] → resolved links
    └── types.ts                    # ContentCategory, ContentDoc, ContentFrontmatter, Citation

.claude/skills/research-strategy/   # the /research-strategy skill definition
STRATEGY.md                         # Agent Studio strategy (problem, approach, persona, metrics, tracks)
```

Frontmatter contract and slug rules: see `content/README.md`. Type definitions: `src/lib/types.ts`.

## Working in this repo

- **Content edits** — write markdown directly. The UI reads disk at request time; refresh the browser to see changes. No build step required for content.
- **New research** — prefer the `/research-strategy <url-or-path>` skill. It writes `source.md`, summary, findings (each with a verbatim quote citation), implications, and optional drafts under `hypotheses/ideas/design-goals/todos/`. It reports counts + sharpest implications + ungrounded ideas it considered but didn't commit.
- **Reader UI changes** — components live in `src/components/`. The doc renderer is `src/lib/markdown.ts` with wikilink resolution in `src/lib/wikilinks.ts`.
- **Adding a category** — extend `ContentCategory` + `ALL_CATEGORIES` + `CATEGORY_META` in `src/lib/types.ts`; `loadCategory` handles the rest unless layout differs (sources is the only special case — folder-per-doc with `source.md`).
- **Slugs are expected to be globally unique** across categories (`resolveSlug` returns first match).

## STRATEGY.md grounding

`STRATEGY.md` is the current Agent Studio strategy: target problem (customers can't evaluate non-deterministic AI with deterministic measurement), approach (agents on existing Algolia eval primitives), persona (growth/personalization leads at e-commerce/marketplace who A/B test ranking), five key metrics, four tracks. Implications and hypotheses should connect back to this — when ingesting research, ask "what does this mean for one of the four tracks?"

## Deployment

Stock Next.js 15 on Vercel. Push to git and import, or `vercel deploy`. No DB. Vercel CLI not installed locally — install with `npm i -g vercel` if needed for `vercel env pull` / `vercel logs`.
