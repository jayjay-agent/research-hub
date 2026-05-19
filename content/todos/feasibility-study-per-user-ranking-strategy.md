---
title: "Feasibility study: per-user / per-segment ranking-strategy primitive"
summary: "Before this becomes a roadmap bet, confirm whether the current ranking-engine architecture can support agent-callable strategy selection per query."
date: 2026-05-13
status: open
tags: [feasibility, ranking, architecture, primitive]
citations:
  - source: algolia-customer-ai-goals-2025
    quote: "the impossibility of easily changing ranking scoring methods. This was two-pronged - they didn't have a way to give data to Algolia about different strategies it should consider when exposing products to end users, and the ranking scoring itself was not programmatically very changeable."
---

## Task

Run a feasibility / spike with the ranking-engine team to answer:

1. Can the current engine accept a per-query strategy parameter that meaningfully changes ranking logic, or is it pinned to per-index configuration?
2. If yes, what's the latency cost? (Customers killed previous data-pushing experiments over latency.)
3. If no, what's the minimum architectural change needed? Is it weeks or quarters?
4. How would this primitive compose with existing Rules and custom ranking — additive, exclusive, or replacement?

This task blocks [[per-user-ranking-strategy-primitive]] graduating from an idea to a roadmap candidate.

## Why now

This primitive is load-bearing for the personalization dream described across multiple findings. If it's infeasible, the strategic story shifts substantially — we'd need to find another way to deliver 1:1 lift that doesn't require ranking-strategy programmability. Better to know the answer before building a roadmap on top of the assumption.

## Done when

A short technical memo exists answering all four questions, with the ranking-engine team's sign-off on the conclusions.
