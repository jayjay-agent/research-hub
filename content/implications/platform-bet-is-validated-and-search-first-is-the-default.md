---
title: "The 'agents on the search platform' bet is externally validated — and search-first is the runtime default"
summary: "60–79% prefer building agents in the search platform; 74% want search-first fallback when agents fail. The strategy's approach has hard customer evidence underneath it."
date: 2026-05-18
tags: [implication, approach-validation, runtime, fallback]
citations:
  - source: agent-building-preferences-2025
---

## What the research implies

Two findings reinforce each other and lock in a default behavior:

1. The platform preference is decisive: 1.3/3 search-platform vs. 2/3 LLM vs. 2.6/3 proprietary. 60% directly choose the search platform; 79% with neutrals. The stated reasons — perceived ease of maintenance, ease of build, parity to ranking rules — are exactly the inheritance the strategy's approach claims.
2. The fallback question is the *most opinionated* slider in the entire survey: 74% want failed agentic interactions to drop to plain search results, not preserve agent assistive behavior. This held across nearly every segment.

Read together, customers don't just want agents *near* their search platform — they want agents to be a layer *on top of* search, with search as the durable substrate. When agents work, agents win; when agents fail, search wins. The runtime is search-first by default.

## Concrete implications

1. **The strategy's approach has external customer evidence underneath it.** This is not a research finding that *informs* strategy — it's a research finding that *defends* strategy. Use it.
2. **Search-first fallback should be a runtime default, not a configuration choice.** 74% strength of preference, near-universal across segments, means flipping the default for any individual flow needs to be a deliberate per-template decision, not a global setting. The Agent runtime track owns this.
3. **Customers want to see search-vs-agent in the same lens.** The platform preference is partly about not having two analytics dashboards. The Observability & trust track should make agent behavior comparable side-by-side with the search baseline that's about to catch every agent failure.
4. **The marketing language the report calls for is on-strategy.** "Build agents where your search is" is the product strategy, the runtime default, *and* the marketing positioning, all at once.

## Strategy alignment

- **Metrics moved:** **Verdict-confidence rate** (search-first fallback gives a measurable baseline every agent A/B test can be compared against) and **TTFT** (one platform, one onboarding, one mental model). **Promote-to-100% rate** (customers more willing to promote when the failure mode is search-fallback, not failure-to-respond).
- **Tracks served:** **Track 2 — Agent runtime on the existing Algolia surface** (the runtime is search-first) and **Track 3 — Observability & trust** (agent-vs-search comparable views).
- **Approach alignment:** maximum. This *is* the approach.
- **Persona alignment:** primary persona squarely — they're already operating Algolia search and trust its failure modes.

## What's still unknown

- Whether "search-first fallback" is the right phrasing for product surfaces where there isn't a clean search baseline (multi-turn conversational, agent-driven workflows). The research framed the question at a generic agent-interaction level.
- Whether the platform preference is durable as LLM providers ship retrieval and ranking primitives that erode the "no second mental model" advantage.
- Whether the 21% who *didn't* prefer the search platform (LLM or proprietary) cluster in a way that's predictable from segment data. Those customers may be a coherent "build elsewhere" sub-segment we should design around or explicitly let go.
