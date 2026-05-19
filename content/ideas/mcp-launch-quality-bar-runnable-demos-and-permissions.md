---
title: "Idea: MCP / Agent Studio launch-quality bar — every shipped surface has a runnable demo, an explicit permission model, and a data-handling statement before GA"
summary: "Treat the trust signals (demo + permission + data) as launch-gating deliverables. No surface ships without all three. The inherited Algolia trust depends on it."
date: 2026-05-19
tags: [idea, launch-quality, documentation, trust, permissions, agent-studio, mcp]
citations:
  - source: mcp-perceptions-ecosystem-2025
    quote: "Developers see thorough, example-driven documentation and transparent testing as proof of a product's reliability and maturity. Runnable demos, clear permission models, and visibility into system behavior reinforce the confidence customers already place in Algolia."
  - source: mcp-perceptions-ecosystem-2025
    quote: "Good documentation is key... bad one could make adoption difficult... I think we have a lack of maturity on the AI/MCP side right now."
---

## Sketch

A launch-quality bar that gates every Agent Studio / MCP shipment. Three deliverables, all required:

1. **Runnable demo.** A copy-paste-able working example a developer can run in their environment in under 10 minutes. Includes a sample index or sandbox to point it at. Not a tutorial — a working artifact.
2. **Permission model statement.** What the surface can access. How to bound it (per-index, per-API, per-operation). What the worst-case access looks like and how to prevent it. Specifically addresses the failure-mode developers fear: *"I'd not want to give an AI agent access to an MCP server that could potentially delete indexes in production."*
3. **Data-handling statement.** Where data flows. Whether it's stored, where, for how long. How it compares to existing Algolia API access. Privacy guarantees and certifications.

Concretely: a shipping checklist that PMs and engineering leads sign off on before GA, plus a public-facing "launch artifacts" section attached to every feature in the changelog.

## Why this is grounded

The single recommendation rated **Critical** in this research is exactly this: "Deliver complete, example-driven documentation and transparent testing for MCP at launch. Include runnable demos, permission explanations, and clear system behavior visibility." The research is unusually direct about the framing — these aren't features, they're trust deliverables.

## Strategy alignment

- **Persona:** developer persona (this research) primarily; growth/personalization leads via their engineering teams secondarily.
- **Metrics:** **TTFT** (runnable demo is the activation surface); **NDR of test-running customers** (trust at launch carries into retention).
- **Tracks:** **Track 4 — Activation & adoption workflow** (the demos and docs are activation artifacts). Process discipline cuts across every track.

## Open questions

- **Where do these deliverables live?** Inside the docs site? As separate launch artifacts? Embedded in the dashboard?
- **Who owns the bar?** Engineering for the demo, PM for the permission model, legal/security for the data-handling statement — but someone needs to enforce the gate.
- **What about iteration?** When a feature changes post-GA, do the trust deliverables get versioned with it?
- **What's the cost?** Holding the bar may slow feature velocity. The cost is worth quantifying against the counterfactual cost of burning inherited trust at launch.

## See also

- [[trust-and-docs-are-first-class-product-deliverables]]
- [[g-algolia-grade-trust-signals-are-product-deliverables]]
- [[documentation-is-the-trust-gate--mcp-perceptions-ecosystem-2025]]
