---
title: "Input/output session trace as a first-class Agent Studio surface"
summary: "Builders prioritize I/O session tracking for prompt iteration above any other observability surface. Make it a primary feature, not a debug pane."
date: 2026-05-13
tags: [idea, observability, traces, prompt-iteration, primitive]
citations:
  - source: market-agentic-use-cases-2026
    quote: "The majority wanted a way to track inputs and outputs easily for quality iteration as the top priority monitoring technique. Respondents prioritized trackable sessions and logs over more comprehensive health-style dashboards with graphs."
---

## Idea

Treat the **I/O session trace** as Agent Studio's primary observability surface. Every agent run produces a structured trace: inputs, intermediate steps (retrieval calls, ranking decisions, rule firings), outputs, and a link to the prompt/configuration that produced it.

Key design properties:

- The trace is the **primary debugging UI**, not a tucked-away logs tab.
- One-click "edit prompt or rule and re-run with the same inputs" loop.
- Strict-rule firings appear inline in the trace (per [[g-separate-strict-and-flexible-rule-paths]]).
- Customers can pipe traces into their own observability stack (Datadog, etc.) — not locked into Agent Studio's UI.

## Why this idea fits the research

- Direct fit: the majority of respondents named this as the top monitoring priority.
- Maps to the dominant builder workflow (define scope → integrate → iterate prompts until predictable). The trace is *the* iteration surface.
- Aligns with the reasoning-surface design goal ([[g-explain-every-ranking-and-tuning-decision]]) — the trace is how reasoning gets exposed in practice.
- As confidence grows, we can add summative dashboards on top of the trace data without disrupting the load-bearing surface.

## Open questions

- Storage cost / retention model: traces can get heavy. Customer-controlled retention vs. platform default?
- Privacy: traces will contain PII for many use cases. How do we redact / scope access?
- The pending **agent monitoring research** ([[ingest-agent-monitoring-research]]) is cited by the source as having more context — that source should land before this idea graduates to a roadmap proposal.
