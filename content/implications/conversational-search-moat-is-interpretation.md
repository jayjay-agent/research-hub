---
title: "The conversational-search moat is interpretation and orchestration, not the chat UI"
summary: "Customers universally want intent interpretation + multi-system execution, and explicitly reject chatbot UIs. Agent Studio should productize the reasoning + orchestration layer and let customers (or partners) ship the chat surface."
date: 2026-05-13
tags: [conversational-search, ui, intent-interpretation, product-positioning]
citations:
  - source: algolia-customer-ai-goals-2025
---

## What the research implies

The conversational-search finding has two halves that point in opposite directions if you read them carelessly:

- **#1 dream AI product:** conversational search ([[conversational-search-is-top-ai-ask--algolia-customer-ai-goals-2025]]).
- **Customers reject chatbot UIs** and want the conversational *capability* expressed through in-results modules, side panels, or query-suggestion drawers — and crucially, alongside (not replacing) keyword search.

The resolution: customers are asking for an **interpretation + orchestration layer** that any of those surfaces can consume. The chat UI is one expression of that layer; it's not the layer.

This matters because the easiest product to build is the chat UI, and it's the wrong one to lead with. It's also the one that competes most directly with ChatGPT — losing on sunk-cost incumbency (see [[chatgpt-incumbency-crowds-out-targeted-ai--algolia-customer-ai-goals-2025]]).

## Concrete implications

1. **Ship the interpretation primitives first; the surface second (or never).** An "interpret this multi-turn conversational query → produce a ranking-aware retrieval plan" capability is the load-bearing thing. Customers can drop it into Envive-style modules, side panels, kiosks, voice — wherever their UX team lands.
2. **Optimize for coexistence with keyword search.** The report says customers explicitly want "to signal that traditional keyword search is still easily accessible." Any conversational primitive needs to compose with, not replace, the existing search surface.
3. **The dream-state example flow is multi-system, not single-turn.** The skincare-bundle example pulls products, filters constraints, updates the PLP UI, takes a budget refinement, replans. This is multi-step orchestration over several Algolia capabilities. Agent Studio's primitives have to support this loop natively, not just single-query enrichment.
4. **Position image-personalization and similar variants as composable extensions.** The "image visualization personalizer" idea (changing imagery per shopper) is one specific composition of orchestratable primitives over a different content surface. If the primitive layer is right, this becomes a customer-side build, not an Algolia product.

## What's still unknown

- Whether customers actually deploy "interpretation primitives" themselves, or whether they want a managed default conversational endpoint with primitives as escape hatches.
- Which non-chat surface (in-results module / side panel / kiosk) drives the most end-user value — none of those is quantified in this report.
- How interpretation primitives should expose intermediate state for customer-side observability — a hard design problem the report points at but doesn't solve.
