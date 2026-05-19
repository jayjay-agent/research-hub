---
title: "Trust signals — example docs, runnable demos, permission models, transparency — are first-class product deliverables, not marketing"
summary: "Developers use documentation maturity as a proxy for product maturity. Agent Studio and MCP can burn inherited Algolia trust faster than build it back if launch docs are thin."
date: 2026-05-19
tags: [implication, trust, documentation, developer-experience, launch-quality]
citations:
  - source: mcp-perceptions-ecosystem-2025
---

## What the research implies

The single recommendation in the report rated **Critical** is about documentation. Not features, not capabilities, not pricing — documentation. The reason: developers treat doc quality as evidence of operational rigor, and the inherited Algolia trust is conditional on Agent Studio / MCP meeting Algolia's existing doc bar.

This has a sharper consequence than it looks like. The standard "ship the feature, then write the docs later" sequencing doesn't work here: thin docs at launch actively burn the trust prior customers brought in with them. By the time docs catch up, the customer has updated their model and decided Agent Studio is less mature than Algolia search. Re-earning that trust costs more than building it would have at launch.

Three specific surfaces the research names as load-bearing:

1. **Example-driven, runnable demos** — a developer who can run the demo in their environment within 10 minutes treats this as evidence the system is well-built.
2. **Clear permission models** — what an agent can access and how to bound it. "It's a bit scary to kind of give an AI agent access to an MCP server that could potentially delete indexes in production. That I probably would not do."
3. **Data-handling transparency** — explicit statements about whether and where customer data is stored, what privacy guarantees apply, how data flows.

## Concrete implications

1. **Docs are a shipping gate for Agent Studio and MCP, not a follow-on workstream.** A feature without launch-quality docs should not ship — the trust cost of a thin-docs launch is higher than the cost of delay.
2. **Permission models are a product surface.** They need to be designed, named, and documented as deliverables — not buried in API reference. Customers want to bound agent access *before* they grant it.
3. **The runnable demo is the canonical artifact.** For Agent Studio, the equivalent might be: "spin up a working agent against a sample index in under 5 minutes." This is the activation surface that converts the inherited Algolia trust into an actual first-test.
4. **Documentation quality should be on the dashboard.** TTFT lifts and falls with how good the activation path feels; doc quality is one of the few variables the team can directly improve to move TTFT.

## Strategy alignment

- **Metrics moved:** **TTFT** (directly — the runnable-demo + clear-permission-model surface is the activation experience). Indirectly **NDR of test-running customers** (trust that survives launch translates to retention).
- **Tracks served:** **Track 4 — Activation & adoption workflow** (primary owner — docs and demos are activation artifacts). Cuts across all tracks because every track ships customer-facing surfaces that need this bar.
- **Approach alignment:** strong — credible trust signals are what let customers actually act on the inherited eval-primitives bet.
- **Persona alignment:** developer persona primarily, but the inherited Algolia trust applies to decision-makers too. Both customer-journey stages benefit.

## What's still unknown

- The exact bar for "Algolia-grade docs." Is it the bar set by Algolia's core search documentation today? By the best-in-class AI vendor (Anthropic, OpenAI)? The research notes the bar is high but doesn't quantify it.
- Permission-model design itself is a meaningful product question. What's the right granularity? Per-API, per-index, per-record-type, per-operation? Worth a design exploration before locking the surface.
- Whether documentation quality alone closes the trust gap, or whether other signals (uptime SLAs, security certifications, customer logos) also matter at launch.
