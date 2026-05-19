---
title: "All search/discovery agent use cases in the sample were internal support, not customer-facing"
summary: "About a quarter of respondents had explicit search/discovery agent use cases — every one was internal support (multi-doc reference, logs)."
date: 2026-05-13
tags: [search-discovery, internal-use-cases, support, retrieval]
citations:
  - source: market-agentic-use-cases-2026
    quote: "A quarter of respondents had explicit search/discovery agent use cases, which were all search for internal support use."
  - source: market-agentic-use-cases-2026
    quote: "support teams used agents to easily reference across multiple kinds of documentation and especially logs to respond quicker to customer issues."
  - source: market-agentic-use-cases-2026
    quote: "Agents pose an increased blurring of lines between general retrieval and high quality search, which affects how we should think about our market."
---

## Finding

Roughly 25% of the 19-respondent sample had search/discovery agent use cases. **All of them were internal support search** — typically a support agent that retrieves across multiple documentation sources and especially logs to speed up customer-issue resolution. None were customer-facing search experiences.

This produces a meaningful structural observation: in this builder-side sample, "search and discovery agent" reads as an internal productivity tool, not as an end-user-facing site search replacement. That's nearly the opposite of [[algolia-customer-ai-goals-2025]] where every dream AI product is customer-facing.

## Mechanism (hypothesized)

Two converging reasons:

1. **Internal use cases are safer.** The report notes internal use cases were regarded as "more safe, easier to set up, and prove initial value." Customer-facing search agents carry quality-and-brand risk that few teams will ship through first.
2. **The retrieval problem looks different from inside.** Multi-source, log-aware, fast-iterating retrieval for support is a less-bounded problem than catalog ranking — it benefits more obviously from agentic reasoning, and customer-side teams can prototype it without coordination with merchandising or UX.

This creates an asymmetry: the **buyer-side population (research #1)** is dreaming about customer-facing conversational search; the **builder-side population (this source)** is actually shipping internal support search. Both are real markets, but they imply very different Agent Studio investments.

## Counter-evidence to look for

- The sample is small (~5 of 19); generalizing "all search use cases are internal" past this sample is risky.
- This sample is non-customers and non-screened — a wider Algolia-customer survey might find more customer-facing experimentation.
- "Internal support search" is fashionable right now (Notion AI, Glean, Rovo) — the dominance may be a snapshot of where the industry is, not a durable structural fact.
- Customer-facing search agent use cases may be under-represented because they're harder to ship and fewer builders have one in production to talk about.
