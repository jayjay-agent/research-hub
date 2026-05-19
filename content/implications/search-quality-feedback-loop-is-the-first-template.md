---
title: "The search-quality feedback-loop agent is the first template Agent Studio should ship"
summary: "It's the highest-interest use case (HIGH), the lowest-risk wedge (human approval gate), and the cleanest application of Agent Studio's locked approach (agents on existing eval primitives)."
date: 2026-05-19
tags: [implication, template, feedback-loop, search-quality, agent-studio, first-template]
citations:
  - source: mcp-perceptions-ecosystem-2025
---

## What the research implies

The MCP research and the prior preferences survey converge on one specific product directive: ship a **search-quality feedback-loop agent template** as the first opinionated entry point into Agent Studio. The case is stronger than for any other template candidate because the evidence stacks across three independent angles:

- **Customer demand (qualitative):** the report calls this the most common and practical use case. Customers describe the exact agent behavior they want.
- **Risk profile:** the human-approval gate makes it explicitly low-risk. Customers describe wanting to "validate the changes made by the AI" — the failure mode is bounded.
- **Strategic fit:** the template is the cleanest expression of the strategy's locked approach. The inputs (search logs, click data, no-results indicators) are existing Algolia analytics primitives. The outputs (relevance rules, index adjustments) are existing Algolia surfaces. The eval primitive (does the proposed change improve performance?) is what makes the human-approval gate meaningful.

This is also the use case where the [[industry-shaped-template-library]] idea has its strongest first instance. The template needs an industry-resonant name — "search performance optimizer" or "relevance co-pilot" or "search quality agent" — and a working demo that runs against the customer's own analytics within minutes.

## Concrete implications

1. **The first Agent Studio template is the search-quality feedback-loop agent.** Not "search assistant," not "conversational assistant" — the optimizer. Activation TTFT improves most for customers who can run the template against their own data and see a real proposed change within their first session.
2. **Human-approval-gate is a first-class agent primitive.** This template makes the gate visible; the runtime should treat "agent proposes; human approves" as a supported workflow, not an extension. Future templates inherit it.
3. **The feedback-loop template is a recoverable win-back motion for churners.** Churners explicitly down-rated weak ranking-rule parity (this template *is* ranking-rule parity), and the customization that drove them out applies to *which signals* the agent watches and *which rule changes* it proposes — natural extensions.
4. **The template doubles as a TTFT and NDR lever.** TTFT because customers see immediate value against their existing data; NDR because the agent keeps proposing improvements over time, surfacing reasons to keep iterating.

## Strategy alignment

- **Metrics moved:** **TTFT** (primary — the template is the activation artifact), **Active agent A/B tests in production** (the agent generates testable proposals continuously), **Verdict-confidence rate** (every proposal is a small A/B test with a clean baseline), **NDR of test-running customers** (continuous-improvement story sustains retention).
- **Tracks served:** **Track 4 — Activation & adoption workflow** (template) and **Track 1 — Experimentation & measurement for agents** (the template *is* an applied eval primitive). Secondary on **Track 2** (the runtime supports the human-approval-gate primitive) and **Track 3** (observability surfaces the agent's proposed changes for review).
- **Approach alignment:** maximum. The template is "agents on the customer's existing eval primitives" rendered as a concrete product.
- **Persona alignment:** strategy's primary (growth/personalization leads who A/B test) — and additionally well-aligned with the engineering / product manager personas in the MCP research.

## What's still unknown

- The naming question — the template's name matters as much as its function (per [[agent-building-preferences-2025]]). What name actually resonates: "search optimizer," "relevance co-pilot," "search QA agent"?
- The autonomy spectrum. Customers want human-approval-gated proposals; do *some* changes belong in an autonomous fast-path (e.g. obvious synonyms, no-result expansions) while bigger changes go through approval?
- The relationship to existing Algolia analytics surfaces. Should the template live inside the current Algolia dashboard, inside Agent Studio, or both?
