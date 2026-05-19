---
title: "Run quantitative research on self-hosted vs. managed MCP deployment preferences by company size"
summary: "The qualitative report flags directional signal — enterprises lean multi-server, smaller teams lean managed — but explicitly calls out the need for quantitative validation before committing to deployment architecture."
date: 2026-05-19
tags: [todo, research, mcp, deployment, self-hosted, managed]
status: open
citations:
  - source: mcp-perceptions-ecosystem-2025
    quote: "Interview feedback suggests that enterprises and smaller teams may differ in how they want to deploy MCP. Larger organizations seem to prefer multi-server setups for compliance, uptime, and data isolation, while smaller teams lean toward managed instances that reduce maintenance effort. These observations are directional and should be validated through additional research to understand how deployment preferences align with team size, maturity, use cases, and security requirements."
  - source: mcp-perceptions-ecosystem-2025
    quote: "Participants also did not explicitly distinguish between self-hosted and Algolia-hosted MCP; their preferences were driven instead by the level of control, isolation, and operational effort they need. More research is required to understand how teams weigh self-hosting versus using a managed Algolia option."
---

## What to do

Run a quantitative survey (n=80+) of Algolia customers and target non-customers on MCP deployment preferences, segmented by:

- **Company size** (SMB / MM / Enterprise)
- **Team maturity** (early experimentation / building / production)
- **Use case profile** (the three use-case clusters from the prior research)
- **Security/compliance posture** (regulated industry / standard / liberal)

Ask explicitly:

1. Preference between Algolia-hosted managed MCP and self-hosted MCP, with the trade-offs named.
2. Multi-server vs. single-server preference (and why).
3. Specific permission/isolation requirements (per-index, per-API, per-tenant) that drive the choice.
4. Maintenance-effort tolerance vs. control-required tolerance.
5. Willingness to pay for managed vs. self-hosted.

## Done criteria

- [ ] Quantitative survey designed and pre-registered.
- [ ] n ≥ 80 with representative segment coverage.
- [ ] Findings ingested back into the workspace as their own source (`mcp-deployment-preferences-quant-2026`).
- [ ] Decision implication written: which deployment options Agent Studio commits to as v1, and which are future-state.

## Why this is queued

Deployment architecture is high-cost to change after launch. Getting it wrong means either over-engineering for an enterprise audience that's smaller than expected, or under-investing in flexibility for an enterprise audience that's larger than expected. The qualitative signal points both directions; quantitative validation is the cheap unlock before committing to architecture.

## Strategy alignment

- **Persona:** affects both developer/implementer persona and the strategy's locked decision-maker persona — they evaluate different aspects of the deployment choice.
- **Metric:** indirect on **TTFT** (managed cuts setup time) and **NDR of test-running customers** (deployment that fits the customer's compliance posture sustains retention).
- **Track:** **Track 2 — Agent runtime on the existing Algolia surface** (deployment is a runtime question).
