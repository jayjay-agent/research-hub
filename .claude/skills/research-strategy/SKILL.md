---
name: research-strategy
description: Ingest a research document (URL or local path) authored by the research team and turn it into Agent Studio strategy artifacts — summary, findings, implications, hypotheses, design goals, ideas, and to-dos — all grounded with citations back to the source. Use whenever the user shares a research URL, asks to "analyze this research", "ingest this paper", "what does this mean for Agent Studio", or wants to derive hypotheses/design goals/ideas from research evidence.
---

# /research-strategy — Research → Agent Studio strategy

You are operating in the user's **Agent Studio research-to-strategy workspace**
(`/Users/john.iseghohi/Documents/Research`). The user is a strategy/product lead who
works closely with a research team and ships strategy work for Agent Studio. They
will bring you research documents — usually as URLs to papers, reports, or memos
authored by research experts — and your job is to turn each one into a set of
**research-grounded** strategy artifacts they can act on.

There are two grounding lenses you operate under at all times:

1. **Research grounding** — every artifact you write must cite the research it
   was drawn from. No ungrounded findings, no invented quotes, no hypotheses
   without evidence.
2. **Strategy grounding** — every derived artifact (implication, hypothesis,
   design goal, idea, todo) should connect to Agent Studio's current strategy
   as recorded in `STRATEGY.md` at the workspace root. If an artifact would help
   a different persona, sharpen a different problem, or require reinventing
   primitives the strategy explicitly leverages, that's **drift** — surface it,
   don't bury it.

These lenses are complementary. Research grounding stops you from inventing
facts. Strategy grounding stops you from inventing the wrong product. An
artifact can be impeccably cited and still be off-strategy; an artifact can be
on-strategy and still be unsupported by evidence. Reject both.

## What "grounded" means

- Every non-`sources/` file you create MUST include `citations:` in frontmatter,
  pointing at the slug of the source under `content/sources/`.
- Quotes in citations must be **verbatim** from the source. If you can't quote it,
  don't put it in quotes.
- Inference is allowed and encouraged, but it must be labelled. Use sections like
  "Mechanism (hypothesized)" or "What's still unknown" — never blend speculation
  into a finding.
- If the user asks for a hypothesis, idea, or design goal that the research
  doesn't support, **say so**, and offer to either (a) capture it as an open
  question that needs new research, or (b) draft it but mark
  `confidence: 1` and add a "Counter-evidence to look for" section.

## What "on-strategy" means

`STRATEGY.md` at the workspace root captures Agent Studio's target problem, our
approach, the primary persona, the key metrics, and the active tracks of work.
Use it as a lens when deriving artifacts:

- **Target problem alignment** — does this finding/implication/hypothesis
  sharpen the problem the strategy names, or does it sharpen a different
  problem? Both are legitimate; only the first goes in unflagged.
- **Approach alignment** — does the artifact reuse or strengthen the bet the
  strategy makes (for Agent Studio: agents on the customer's existing eval
  primitives), or does it require breaking that bet? Anything that requires
  breaking the bet is a separate bet and must be flagged as such.
- **Persona alignment** — does this artifact help the strategy's primary
  persona, a secondary persona, or a different persona entirely? Note the
  answer.
- **Metric alignment** — does this artifact plausibly move one of the strategy's
  key metrics? If yes, name the metric. If no, that's a flag.
- **Track alignment** — does this artifact fit inside one of the active tracks,
  or does it imply a new track? New tracks are legitimate but rare and must be
  surfaced explicitly.

Drift is not a reason to refuse the artifact — sometimes the research really
does point somewhere new, and that's worth knowing. The rule is: **never let
drift go unflagged**. Either align the artifact to strategy, mark it as a
candidate strategy update, or capture it in the report (Step 8) as an
off-strategy idea worth discussing.

## Workflow

### Step 1 — Get oriented

If `content/` doesn't exist yet at the repo root, stop and ask the user to run
the project setup first. Otherwise:

1. Read `content/README.md` once so you know the conventions.
2. Read `STRATEGY.md` at the workspace root. If it exists, hold it open
   alongside the research as you work. If it doesn't exist, tell the user once
   and offer to run `/ce-strategy` — then proceed without it, but skip the
   strategy-alignment checks below.
3. Read what's already in `content/sources/` so you don't duplicate.

### Step 2 — Acquire the source

The user will give you a URL, a local path, or pasted text.

- **URL** → use `WebFetch` to get the content. If the page is JS-heavy or
  paywalled, ask the user to paste the text or save a copy locally.
- **Local path** → `Read` it.
- **Pasted text** → use what was pasted.

Pick a short, descriptive slug for the source (kebab-case, ~3-5 words). Examples:
`agentic-ui-trust-study-2026`, `enterprise-copilot-adoption-q1`,
`multi-turn-context-effectiveness`. Confirm the slug with the user if it's
non-obvious.

### Step 3 — Write `content/sources/<slug>/source.md`

Frontmatter (all required unless noted):

```yaml
---
title: "Full title as the researchers wrote it"
url: "https://… (omit if not applicable)"
author: "Researcher name(s) or team"
date: YYYY-MM-DD             # publication date if known, else today
tags: [topic1, topic2]
summary: "One sentence the user can scan in the library."
---
```

Body: a clean version of the source. Preserve the researchers' headings,
findings, numbers, and direct quotes. Strip site chrome, ads, navigation. If the
source is long, keep it long — this is the ground truth. Do not editorialize in
the source file; analysis goes in the derived artifacts.

### Step 4 — Write `content/summaries/<slug>.md`

Frontmatter:

```yaml
---
title: "Summary: <source title>"
summary: "One sentence TL;DR."
date: 2026-05-13            # today's date
tags: [...]
citations:
  - source: <slug>
---
```

Body sections:

- **TL;DR** — 3-5 bullets the user could read in 20 seconds.
- **Why it matters for Agent Studio** — one paragraph. If it doesn't matter for
  Agent Studio, say so — that's a useful signal.
- **What's still open** — questions the source raises but doesn't answer.

### Step 5 — Write `content/findings/<topic>--<slug>.md`

One file per **discrete finding**. A finding is a specific, citable claim the
research supports — not a synthesis or a recommendation. Aim for 3-6 findings per
source. Each file:

```yaml
---
title: "Active-voice statement of the finding"
summary: "One sentence."
date: 2026-05-13
tags: [...]
citations:
  - source: <slug>
    quote: "Verbatim quote from the source that supports this finding."
---
```

Body sections:

- **Finding** — restate it cleanly with the numbers if applicable.
- **Mechanism (hypothesized)** — *labelled* speculation about why it's true.
- **Counter-evidence to look for** — what would falsify or qualify the finding.

### Step 6 — Write `content/implications/<topic>.md`

One file (sometimes more) per source about **what this means specifically for
Agent Studio**. This is where you connect research to product. Implications are
synthetic — they may draw on multiple findings — but they must still cite.

```yaml
---
title: "Implication framed as a design conclusion"
summary: "One sentence."
date: 2026-05-13
tags: [...]
citations:
  - source: <slug>
  # cite more sources if the implication draws on multiple
---
```

Body sections:

- **What the research implies** — connect findings to Agent Studio's context.
- **Concrete implications** — numbered list of specific design or strategy
  consequences.
- **Strategy alignment** — if `STRATEGY.md` exists, name explicitly which
  metric(s) this implication plausibly moves and which track(s) it lives
  inside. If it doesn't move any current metric or live in any current track,
  say so and treat it as a candidate strategy signal in Step 8.
- **What's still unknown** — gaps that would change the implication if filled.

### Step 7 — Append drafts to `hypotheses/`, `design-goals/`, `ideas/`, `todos/`

These categories are the user's working files. **Do not invent entries** here —
only write a new file if the research clearly supports it. Each draft you write
gets `status: open` (for todos) or `confidence: 1-5` (for hypotheses) and the
user will refine.

For each draft, run the strategy-alignment check:

- Which **persona** does this help — the strategy's primary, a secondary, or a
  different one? Note it in the body.
- Which **metric** does this plausibly move? Name it explicitly. Hypotheses
  especially should be framed against a strategy metric where possible
  ("If we ship X, then [metric] lifts by Y, because [mechanism grounded in
  cited research]").
- Which **track** does this fit inside? If none, it's likely a new bet — flag
  it in the report rather than silently committing it.

If a draft fails the alignment check on all three (different persona, no
strategy metric moved, no current track), do **not** commit it — list it as an
off-strategy idea in Step 8 and let the user decide whether to keep it,
reframe it, or use it to update strategy.

Slug conventions:

- Hypotheses: `h-<short-slug>.md`, frontmatter `confidence: N` (1-5).
- Design goals: `g-<short-slug>.md`.
- Ideas: `<short-slug>.md`.
- Todos: `<short-slug>.md`, frontmatter `status: open|in-progress|done|blocked`.

Every entry must cite. If you want to write something but can't cite it, list it
in the final report (Step 8) as an "ungrounded idea" instead of committing it.

### Step 8 — Report back

After writing files, summarize in chat:

- The source you ingested (with slug and link).
- File count by category that you wrote.
- The 2-3 sharpest implications for Agent Studio, briefly.
- **Strategy alignment summary** — if `STRATEGY.md` was loaded, list which
  current metric(s) and track(s) the new artifacts plausibly move/serve. Be
  specific: "Two new findings strengthen the case for the Observability & trust
  track; one hypothesis is framed against verdict-confidence rate."
- **Strategy drift** — anything you noticed in the research that points at a
  different persona, a different problem, a different approach, or a new track
  that isn't currently in the strategy. Don't editorialize; just surface it so
  the user can decide whether to update `STRATEGY.md` via `/ce-strategy`.
- **Ungrounded ideas** you considered but didn't commit because the research
  doesn't support them.
- **Off-strategy ideas** you considered but didn't commit because the research
  supports them but they don't fit current strategy. Distinct from "ungrounded"
  — these are real signals pointing somewhere the team hasn't committed to yet.
- Suggested next research the source points at.

Do not auto-run the dev server. Tell the user the files are written; they can
refresh the UI to see them.

## Brainstorming mode

If the user asks to "brainstorm" or "ideate" against an existing source (not
ingest a new one):

1. Load `STRATEGY.md` if it exists.
2. Load every artifact under `content/` that cites the relevant source.
3. Spread the findings and implications in front of you as evidence.
4. Generate ideas — but each idea you commit to `content/ideas/<slug>.md` must
   (a) cite at least one source AND (b) pass the strategy-alignment check
   (helps the primary persona, plausibly moves a strategy metric, fits inside a
   current track). Ideas that pass research grounding but fail strategy
   alignment are surfaced in chat as off-strategy ideas, not committed.

This is the core discipline: **the workspace is a record of what the research
supports AND what the strategy says we should care about — not what we hope is
true and not where we wish we were headed**.

## Anti-patterns to avoid

- ❌ Writing a hypothesis that "feels right" without citing a finding.
- ❌ Putting paraphrases inside quote marks. Quotes are verbatim or absent.
- ❌ Editorializing in `sources/*` — analysis belongs in derived artifacts.
- ❌ Burying disagreement. If two sources conflict, write that into the
  implication explicitly — that's high-value signal.
- ❌ Creating duplicate findings across sources. Cross-reference instead.
- ❌ Skipping the "What's still unknown" sections. The gaps are as important as
  the findings.
- ❌ Silently committing artifacts that drift from `STRATEGY.md`. Drift is
  worth knowing about — surface it in the report instead of hiding it.
- ❌ Refusing to commit a research-grounded artifact *just* because it's
  off-strategy. The research may be pointing at a strategy update; don't
  pre-decide that for the user. Surface it and let them choose.

## Done criteria

Before you say you're done:

- [ ] `content/sources/<slug>/source.md` exists with valid frontmatter.
- [ ] `content/summaries/<slug>.md` exists and cites the source.
- [ ] At least 2 files in `content/findings/` cite the source, each with a quote.
- [ ] At least 1 file in `content/implications/` cites the source.
- [ ] Every other file you wrote cites at least one source.
- [ ] If `STRATEGY.md` exists, every implication and committed
      hypothesis/design-goal/idea/todo names the metric(s) and track(s) it
      serves — or you reported it as off-strategy.
- [ ] You've reported any ungrounded ideas you considered but didn't commit.
- [ ] You've reported any off-strategy ideas (research-grounded but outside
      current strategy) and any strategy-drift signals worth a
      `/ce-strategy` update.
