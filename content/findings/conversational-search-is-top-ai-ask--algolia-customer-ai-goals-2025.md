---
title: "Conversational search is the #1 dream AI solution — but customers reject chatbot UI"
summary: "9 of 10 customers named conversational search the most desirable AI solution; near-universally, they care about interpretation/execution of intent, not the chat UI itself."
date: 2026-05-13
tags: [conversational-search, ui, intent-interpretation]
citations:
  - source: algolia-customer-ai-goals-2025
    quote: "All participants except one brought up \"conversational search\" as the most desirable dream AI solution that would solve their biggest needs."
  - source: algolia-customer-ai-goals-2025
    quote: "it was universally more important that the solution was capable of interpreting and executing on conversational end user demands, rather than the UI/content of responses acting conversationally themselves."
  - source: algolia-customer-ai-goals-2025
    quote: "participants were averse to any UI imitating \"chatbots of yore.\""
---

## Finding

Conversational search was the single most-named dream AI solution across the 10 interviews (9 of 10 raised it unprompted). But the demand is structurally about **intent interpretation and execution against the catalog**, not about a chat-shaped UI. Customers actively reject "chatbot of yore" surfaces and instead point to in-results modules (Supergoop / Envive), side panels (ChatGPT Canvas–style), or query-suggestion drawers (Bed Bath & Beyond). Two home-goods retailers want this for in-store kiosks specifically.

Customers also expect this surface to **coexist with traditional keyword search**, because keyword still dominates query volume today — and they don't want to signal that "old" search is going away.

## Mechanism (hypothesized)

What customers seem to be asking for is a **reasoning layer** that sits between the user's natural-language need and Algolia's ranking/recommend/rules primitives. The chat surface is one possible UX expression of that layer, but customers see it as interchangeable with non-chat surfaces. The thing they don't want to lose is the interpretation power — the ability for the system to translate "skincare bundle for dry, aging skin, on a budget" into a coherent multi-step product retrieval plan.

This matches the report's broader thesis that the dream solution is "a multi-agentic system that could be called to change search rankings for each individual, use a different batch of Rules, offer different products in Recommend modules" — the chat UI is *one consumer* of that system, not the system itself.

## Counter-evidence to look for

- The forthcoming wide-scale survey may show that smaller customers (not represented in this 10-person enterprise sample) actually want the chat UI as a turnkey deliverable, because they can't build their own interpretation layer.
- Customer-stated UI preferences are notoriously unreliable. End-user telemetry from sites running Envive-style modules vs. traditional chatbots would be the real evidence — neither is in this report.
- The interview prompt may have framed conversational search in a way that primed "interpretation > UI" answers. Verify against unprompted mentions in support tickets or sales calls.
