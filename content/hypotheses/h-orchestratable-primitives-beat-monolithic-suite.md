---
title: "H1 — Orchestratable Agent Studio primitives win over a monolithic AI suite"
summary: "If Agent Studio leads with MCP-exposed primitives instead of an integrated AI product, enterprise customers will adopt faster because they can deploy piecemeal."
date: 2026-05-13
tags: [hypothesis, product-direction, multi-agent, mcp]
confidence: 4
citations:
  - source: algolia-customer-ai-goals-2025
    quote: "The core recommendation is not to build out the exact products they described, but rather produce smaller orchestratable functions that speak to their desired workflows and end user experiences. This would require us to invest strategically in MCP and multi-agentic frameworks"
---

## Hypothesis

**If** Agent Studio leads with MCP-exposed, composable primitives (ranking, rules, recommend, perso, analytics) instead of a bundled "Algolia AI Assistant" product,
**then** enterprise customers will adopt Agent Studio meaningfully faster (measured by accounts wiring at least one production agent within 90 days of beta),
**because** the report identifies a structural mismatch between integrated AI suites and customer rearchitecture limits — and the customer-stated dream products are *consumers* of primitives, not substitutes for them.

## How to test

- Pick two enterprise design partners. Ship the primitive-first version to one, a turnkey assistant prototype to the other.
- Measure: time to first production-grade agent call, number of distinct primitives integrated, internal team friction (qualitative).
- Watch for the failure mode: design partner with primitives stalls because they can't decide where to start. That would invalidate the hypothesis as stated.

## Risks to the hypothesis

- Confidence is 4 (not 5) because customer-stated preferences don't always survive procurement. The report's recommendation is also editorial — endorsement count per participant is not given.
- Smaller customers may genuinely need the turnkey product because they lack dev capacity to compose primitives. Hypothesis may be enterprise-only.
- "Orchestratable primitives" may turn out to mean different things to different customers (composable APIs vs. agent-callable functions vs. MCP tools). Need to scope precisely before testing.
