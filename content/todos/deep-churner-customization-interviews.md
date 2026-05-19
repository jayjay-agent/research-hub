---
title: "Run qualitative interviews with Agent Studio churners to decompose 'customization'"
summary: "The survey flags customization depth as the churn cause (71%) but doesn't decompose it. A small qualitative pass on churners would name the specific surfaces to fix."
date: 2026-05-18
tags: [todo, research, customization, churn, agent-studio]
status: open
citations:
  - source: agent-building-preferences-2025
    quote: "Those who tried out Agent Studio and churned from it voted extremely strongly for 'more customization options' as a very important feature to have (71%), the highest of any cohort for that feature."
  - source: agent-building-preferences-2025
    quote: "Churners were also unusually consistent about what they wanted to avoid, which was a similar flavor: 'limited ability to customize a search-specific template not optimized for your industry.'"
---

## What to do

Run 5–8 qualitative interviews with respondents from the Agent Studio churner cohort to decompose what "more customization options" actually means at the product-surface level.

Specifically, name where each interviewee hit the wall:

- **Prompt-level customization** (can I shape the agent's voice, framing, persona?)
- **Retrieval-level customization** (can I tune what records get pulled, with what filters, weights?)
- **Ranking-level customization** (can I adjust how results are ordered, post-retrieval?)
- **Guardrail-level customization** (can I add domain-specific rules about what the agent can and can't say or do?)
- **Logic-level customization** (can I add branches, conditions, tool selection rules?)
- **Fallback-level customization** (can I configure what happens when the agent fails?)
- **Tool-level customization** (can I plug in my own tools or APIs alongside Algolia's primitives?)

For each surface a churner names, get a specific example: "I tried to do X, the platform only let me do Y, I went to Z to do it."

## Done criteria

- [ ] At least 5 churner interviews completed (target 7–8).
- [ ] Decomposition table written — which surfaces are hit by which share of interviewees.
- [ ] Each surface tagged with the team / track that would own the fix.
- [ ] Findings appended back into this workspace as their own source (`agent-studio-churner-customization-interviews-2026` or similar slug).
- [ ] [[h-templates-with-deep-customization-lift-ttft-and-ndr]] sharpened with the specific customization surfaces to prioritize.

## Why this is queued

This is the cheapest unlock for the largest strategic gap the research surfaced. Without decomposition, "ship more customization" is a category-error initiative. With decomposition, we can sequence the work and run [[h-templates-with-deep-customization-lift-ttft-and-ndr]] against specific surface lifts.

## Strategy alignment

- **Persona:** churners — overlap heavily with the strategy's primary persona (people far enough along to want to iterate).
- **Metric:** **NDR of test-running customers** (the eventual move) — but this todo is a research step, not a product ship.
- **Track:** **Track 3 — Observability & trust** and **Track 2 — Agent runtime on the existing Algolia surface** (both depending on which surfaces churners name).
