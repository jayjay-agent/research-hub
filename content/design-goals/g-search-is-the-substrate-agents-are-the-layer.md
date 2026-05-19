---
title: "Goal: Search is the substrate; agents are the layer"
summary: "Every agentic interaction in Agent Studio should be built on a working search baseline. When agents work, agents win; when agents fail, search wins."
date: 2026-05-18
tags: [design-goal, fallback, runtime, search-first]
citations:
  - source: agent-building-preferences-2025
---

## The goal

Agent Studio's runtime should treat the customer's existing Algolia search index as the substrate under every agent, not as a peer system. Agents enhance search behavior when they have a confident, well-formed response; agents step out of the way and let search behave normally when they don't. This is the runtime-level expression of the strategy's approach.

## What this means concretely

- **Search-first fallback is the default for every template**, not a setting customers have to discover.
- **Every agent A/B test runs against a search-baseline control by default.** Customers shouldn't have to construct the control — it's the search experience they already trust.
- **Agent failure modes are visible against the search baseline**, not in isolation. "The agent did X; search would have done Y" is a first-class observability primitive.
- **Customers can promote, retract, or scope an agent per query class** without leaving the search behavior they rely on. Agents are additive to search, not replacements for it.

## How we'd know we got it right

- Verdict-confidence rate is structurally higher because every agent test has a known-good baseline.
- Customers describe Agent Studio as "search with agents on top," not "agents that search."
- Promote-to-100% rate rises because the failure mode of a promoted agent is bounded — worst case, customers see their existing search behavior.

## How we'd know we got it wrong

- Customers turn off the fallback default in droves to preserve in-flight agent state. (The default is wrong for the use cases driving adoption.)
- The agent and the search baseline drift apart over time and the comparison becomes meaningless. (Observability isn't keeping the two views aligned.)
- Customers ship agents that *replace* search behavior wholesale; the substrate model breaks.

## Strategy alignment

- **Persona:** primary — these are customers whose operational confidence comes from search behaving well; the fallback default protects that confidence while agents are still earning trust.
- **Metrics:** **Verdict-confidence rate** (load-bearing) and **Promote-to-100% rate**.
- **Tracks:** **Track 2 — Agent runtime on the existing Algolia surface** (the substrate model lives in the runtime) and **Track 3 — Observability & trust** (the comparison surface).
- **Approach alignment:** this is the cleanest restatement of the strategic approach. "Agents on the customer's existing eval primitives" expressed at the runtime level.
