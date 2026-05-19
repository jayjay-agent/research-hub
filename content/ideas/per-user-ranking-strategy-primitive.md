---
title: "Per-user (or per-segment, per-collection) ranking-strategy selection primitive"
summary: "Expose ranking strategy choice as an agent-callable parameter so customers can stop proliferating Rules and indices to fake 1:1 personalization."
date: 2026-05-13
tags: [idea, ranking, personalization, primitive]
citations:
  - source: algolia-customer-ai-goals-2025
    quote: "They want to be able to pick different ranking strategies for each user/segment/collection, but it's impossible to straightforwardly change foundational ranking logic on such a case-by-case basis."
  - source: algolia-customer-ai-goals-2025
    quote: "the impossibility of easily changing ranking scoring methods... the ranking scoring itself was not programmatically very changeable. Most had tried to address it by having a ton of rules and different indices for segments, which made rules management even more difficult."
---

## Idea

Ship a primitive — agent-callable, MCP-exposed — that lets a caller select a *ranking strategy* (not just rules tweaks) for a single query. Inputs include user identity / segment / collection / business goal context; output is a query plan that applies the chosen strategy.

This is structurally different from the current Rules + custom-ranking surface, which is per-index-and-static. Customers are doing the strategy-selection logic today by proliferating indices and rule batches; that workaround is the load-bearing pain in two findings.

## Why this idea fits the research

- It's named directly as a top blocker for the 1:1 personalization dream.
- It's a primitive (not a product), so it fits the orchestratable-functions positioning.
- It's the kind of thing ChatGPT structurally cannot do — it requires access to the ranking engine, not the catalog.

## Open questions

- Is this feasible against the current ranking-engine architecture, or does it require deeper rework?
- What's the right cardinality of "strategy"? A few preset strategies? Customer-defined? Per-call composable?
- How does this compose with existing Rules? Rules pollution is already a customer pain point — adding strategy selection alongside Rules could make it worse without a migration story.
