# Content

This folder is the **source of truth** for the Research & Strategy workspace. Every file here is a markdown document with YAML frontmatter; the Next.js app reads from here at request time.

## Folder layout

| Folder | What goes here | Slug convention |
|---|---|---|
| `sources/` | Original research docs imported by the `/research-strategy` skill. **One folder per source**, containing `source.md`. | `sources/<short-slug>/source.md` |
| `summaries/` | TL;DR of one specific source. Read these first. | `summaries/<source-slug>.md` |
| `findings/` | One discrete finding per file, cited to its source. | `findings/<topic>--<source-slug>.md` |
| `implications/` | What a finding (or cluster of findings) means for Agent Studio. | `implications/<topic>.md` |
| `hypotheses/` | Testable bets grounded in research. | `hypotheses/h-<slug>.md` |
| `design-goals/` | Design objectives derived from research. | `design-goals/g-<slug>.md` |
| `ideas/` | Brainstorms and concept sketches. | `ideas/<slug>.md` |
| `todos/` | Concrete actions to take. | `todos/<slug>.md` |

## Frontmatter

Every non-source artifact **must** include `citations:` pointing at the source slug(s) it was grounded in. The UI uses this to:

- Render citation pills inline.
- Render reverse backlinks on the source page.
- Refuse to display "ungrounded" strategy — if a finding can't cite a source, it doesn't belong here.

Minimum frontmatter for a derived artifact:

```yaml
---
title: "Users want explainable agent decisions"
summary: "Across two studies users abandoned agents that took action without rationale."
date: 2026-05-13
tags: [trust, explainability]
citations:
  - source: agentic-ui-trust-study-2026
    quote: "73% of participants disengaged after the agent acted without surfacing reasoning."
---
```

For a source:

```yaml
---
title: "Trust in Agentic UIs (Smith et al., 2026)"
url: "https://example.com/paper"
author: "Smith et al."
date: 2026-04-10
tags: [trust, agentic-ui]
summary: "Two studies on user trust in agent-driven interfaces."
---
```

## Adding new research

The recommended workflow is the Claude Code skill:

```
/research-strategy <url-or-path>
```

It will:

1. Fetch / read the source.
2. Write `content/sources/<slug>/source.md` with cleaned-up content and frontmatter.
3. Write `content/summaries/<slug>.md` — a tight TL;DR.
4. Write one or more `content/findings/...md` files — discrete findings, each cited.
5. Write `content/implications/<slug>.md` — what this means for Agent Studio.
6. Optionally append starter entries to `hypotheses/`, `design-goals/`, `ideas/`, `todos/` — flagged as drafts for you to refine.

You can also write any of these by hand — the UI doesn't care, it just reads markdown.
