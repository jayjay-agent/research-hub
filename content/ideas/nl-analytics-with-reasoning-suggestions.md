---
title: "Natural-language analytics with reasoning-backed config suggestions"
summary: "A primitive that takes NL questions over search performance + customer context and returns insights plus reasoned, optionally-implementable config recommendations."
date: 2026-05-13
tags: [idea, analytics, natural-language, tuning, merchandising]
citations:
  - source: algolia-customer-ai-goals-2025
    quote: "The core ability they wanted was to ask this solution natural-language queries about search performance, such as \"How has interest in our new purple colorway performed with search interest and conversion?\""
  - source: algolia-customer-ai-goals-2025
    quote: "Making suggestions of how to optimize Algolia settings for particular searches"
---

## Idea

Two-part primitive:

1. **NL query → analytics answer**: takes plain-English questions, runs them against search analytics + (eventually) ingested CRM/Google Analytics data, returns an answer with cited data sources.
2. **NL question → config recommendation with reasoning**: same input shape, but the output is a concrete, customer-applicable config change (e.g., "boost price-point weight on collection X for query class Y") with an explicit "because" trace.

Both are agent-callable, so customers can pipe them into their own dashboards or merch tools. Some customers want autonomous A/B-test execution as a third tier — keep that on the roadmap but ship the manual-apply versions first.

## Why this idea fits the research

- Second-most-named dream AI product in the report.
- Has the merchandising audience explicitly mapped (devs with merch responsibilities are the buyer profile).
- Returns *reasoning* by design, which aligns with [[g-explain-every-ranking-and-tuning-decision]].
- Doesn't need a custom UI to deliver value — can ship as primitives and let customers compose surfaces.

## Open questions

- Where does the AI's understanding of "good Algolia config" come from? Public best-practices doc? Per-customer learned baselines? Something else?
- How do we prevent plausible-but-wrong recommendations from eroding trust faster than no recommendations?
- Should the autonomous A/B-test tier ever ship, or is the trust ceiling on autonomous tuning too low to chase?
