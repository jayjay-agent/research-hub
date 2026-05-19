---
title: "Audit current Agent Studio and MCP docs against the launch-quality bar (runnable demo + permission model + data-handling)"
summary: "Before shipping the next surface, score every existing customer-facing surface against the three trust-signal deliverables. Anything below bar is a remediation candidate."
date: 2026-05-19
tags: [todo, documentation, audit, launch-quality, trust, agent-studio, mcp]
status: open
citations:
  - source: mcp-perceptions-ecosystem-2025
    quote: "Deliver complete, example-driven documentation and transparent testing for MCP at launch. Include runnable demos, permission explanations, and clear system behavior visibility."
  - source: mcp-perceptions-ecosystem-2025
    quote: "I think we have a lack of maturity on the AI/MCP side right now."
---

## What to do

Audit every existing customer-facing Agent Studio and MCP surface against the three launch-quality criteria from [[mcp-launch-quality-bar-runnable-demos-and-permissions]]:

1. **Runnable demo** — does a copy-paste working example exist? Can a developer run it in under 10 minutes against a sample index?
2. **Permission model** — is there an explicit statement of what the surface can access, how to bound it, and what the worst-case access looks like?
3. **Data-handling statement** — is data flow / storage / retention / privacy explicitly documented?

For each surface, produce a 0/1/2 score on each criterion (0 = missing, 1 = thin, 2 = launch-quality), with specific gaps named.

## Done criteria

- [ ] Surface inventory complete (list of every Agent Studio and MCP customer-facing artifact in scope).
- [ ] Score sheet produced (surface × criterion matrix).
- [ ] Top 5 gaps ranked by inherited-trust risk (gap × visibility).
- [ ] Remediation list with owners and target dates.
- [ ] Bar enforced going forward — the audit becomes a recurring quality gate, not a one-time exercise.

## Why this is queued

The "Critical" recommendation in this research is documentation. Every day Agent Studio and MCP run with thin trust signals is a day inherited Algolia trust gets re-evaluated downward. The cost of the audit is small relative to the cost of trust burn — and the prior quote from a customer ("we have a lack of maturity on the AI/MCP side right now") suggests the bar is already not being met for at least some surfaces.

## Strategy alignment

- **Persona:** developer / implementer (the audience that evaluates docs) and growth lead (the audience that has to defend the choice internally).
- **Metric:** **TTFT** (better docs → faster activation) and **NDR of test-running customers** (trust signals carry into retention conversations).
- **Track:** **Track 4 — Activation & adoption workflow** (the user-facing surfaces) with a cross-track quality bar.

## See also

- [[trust-and-docs-are-first-class-product-deliverables]]
- [[g-algolia-grade-trust-signals-are-product-deliverables]]
- [[mcp-launch-quality-bar-runnable-demos-and-permissions]]
