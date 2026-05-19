---
title: "Automating search-quality and analytics feedback loops is the top-ranked MCP use case (with human approval)"
summary: "Above multi-source search and external bridges, customers most want an agent that monitors search performance, flags no-results / poorly-ranked queries, and proposes relevance fixes for human review."
date: 2026-05-19
tags: [use-cases, feedback-loop, search-quality, analytics, human-in-the-loop]
citations:
  - source: mcp-perceptions-ecosystem-2025
    quote: "Participants consistently highlighted automation of search performance and relevance as the most common and practical use case. They want agents that can analyze logs, detect 'no results' patterns, and suggest relevance adjustments while still allowing human approval before implementation."
  - source: mcp-perceptions-ecosystem-2025
    quote: "We want the AI agent to automatically tune indexes, check what's in the catalog vs. what's searchable, and make the proper adjustments... If customers are searching for products in the catalog but not finding them, have it run checks and fix that."
  - source: mcp-perceptions-ecosystem-2025
    quote: "It could automatically produce reports and attempt some rules on its own to improve efficiency based on clickthrough rates... I would like to first validate the changes made by the AI."
---

## Finding

Across three ranked use cases for MCP — search-quality feedback loops, multi-source context-aware search, and outbound bridges to ChatGPT/AgentForce/Gemini — the feedback-loop use case was the only one rated HIGH interest *and* called out as "low-risk, high-value." The report's recommendation rates it at **High** priority and explicitly frames it as the first-shipped MCP use case:

> "AI Assist team should consider leading the development of a preconfigured 'search optimization' MCP workflow that automates analytics and relevance recommendations with human approval, in close collaboration with the MCP team."

The specific shape customers described is consistent:

- The agent watches search logs and analytics continuously.
- It detects "no results" patterns, low-CTR queries, and catalog-vs-searchable mismatches.
- It proposes relevance rules or index adjustments.
- A human approves (or rejects) before anything ships to production.

The human-in-the-loop pattern is not optional in the customer description — it's the thing that makes the use case feel safe enough to adopt. Customers explicitly want to "validate the changes made by the AI."

## Mechanism (hypothesized)

This use case is the perfect match for the strategy's locked approach (agents on existing eval primitives) for three reasons:

1. **The inputs already exist.** Search logs, click data, no-results indicators — these are Algolia's existing analytics primitives. The agent doesn't need new data infrastructure.
2. **The outputs are already understood.** Relevance rules, index adjustments, search configuration — these are surfaces every Algolia customer already operates. The agent isn't proposing alien changes.
3. **The human-approval gate makes verdict-confidence trivial.** Every proposed change is itself a small A/B test (apply the rule → measure search performance change → decide whether to keep). The eval-primitive substrate the strategy bets on is *what makes this use case work*.

This is why customers describe it as "low-risk, high-value": the failure mode is bounded (a bad proposal gets rejected by the human; nothing ships), the value is measurable (search performance metrics customers already track), and the data and surfaces required are all already part of how Algolia customers operate.

## Counter-evidence to look for

- This use case may appeal disproportionately to mid-market customers with mature search analytics already in place. Customers without strong analytics may not benefit and not even understand the proposal.
- The "human approval" gate may not scale — at high volumes, customers may end up rubber-stamping or ignoring proposals, defeating the safety story.
- Some customers may want the agent to *also* take some actions autonomously (within bounds) rather than always requiring approval. The data doesn't decompose the autonomy spectrum.
- Cross-reference with [[customers-want-orchestratable-functions-not-products--algolia-customer-ai-goals-2025]] and the prior workspace finding that customers want orchestratable primitives — the feedback-loop agent is *one* shape; the underlying primitive (search analytics + index management as agent tools) may matter more than the specific agent.
