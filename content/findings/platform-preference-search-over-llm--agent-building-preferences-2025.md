---
title: "Customers prefer building agents in their search platform over LLM providers or proprietary tools"
summary: "Direct ranking gave search platform 1.3/3, LLM 2/3, proprietary tool 2.6/3. 60% directly chose the search platform with another 19% neutral."
date: 2026-05-18
tags: [platform-preference, build-experience, agent-studio]
citations:
  - source: agent-building-preferences-2025
    quote: "Participants clearly preferred to build where the search platform was (ranked 1.3/3). After that, they felt middling on an LLM (2/3) and had an anti-preference for proprietary tool (2.6/3)."
  - source: agent-building-preferences-2025
    quote: "60% preferred building in the same platform where search was and a further 19% were neutral."
---

## Finding

When respondents (n=90) were asked to rank where they'd prefer to build search agents, the search platform won decisively (1.3/3 vs LLM 2/3 vs proprietary 2.6/3). 60% directly chose to build in the search platform; an additional 19% were neutral. The same preference held when the question was reframed as "where should agentic *functionality* be centralized" — 60% picked the search platform on that framing too.

The reasons respondents gave were: **perceived ease of maintenance, ease of build, and parity to ranking rules**. Among current Algolia customers asked why they'd specifically build in Algolia, 33% cited "ease of maintaining search and agents in one place" as the top reason — strongest in the search-assistant and B2B segments.

## Mechanism (hypothesized)

Customers who already operate Algolia have a working mental model of indexes, ranking, and search analytics. Building agents in the same platform inherits that mental model — no second platform to learn, no integration glue to maintain, no second source of truth for what's "live." LLM providers force them to bridge two mental models; proprietary agent tools force a third entirely. The path of least cognitive overhead wins.

## Counter-evidence to look for

- Read/learn + content segment had a bump in preference for building/centralizing in the LLM (though still under 50%). Worth probing why their mental model diverges.
- Some segments may flip if LLM providers ship native search/retrieval primitives that erode the platform advantage.
- The survey selected for "people familiar with agents" working in search — a population that already has skin in the search platform. Greenfield buyers might weigh differently.
- The 2.6/3 anti-preference for proprietary tools could erode if a single proprietary tool achieved category dominance.
