---
title: "Data ingestion is the gating blocker for every dream AI product"
summary: "Customers universally want Algolia to ingest CDP/CMS/CRM/training-manual data; without it, the personalization and conversational-search dreams can't be delivered."
date: 2026-05-13
tags: [data-ingestion, integrations, cdp, crm, latency]
citations:
  - source: algolia-customer-ai-goals-2025
    quote: "the biggest one by far would be the ability to give Algolia way more data input so we could be smarter about what they needed."
  - source: algolia-customer-ai-goals-2025
    quote: "all participants wanted Algolia to access more key data to take discovery to the next level (e.g. CDP, CMS)"
  - source: algolia-customer-ai-goals-2025
    quote: "A few customers had attempted to give Algolia more useful contextual information like sales numbers, but the latency made it not worth it."
---

## Finding

The most cross-cutting theme across all customer dreams is **more data inputs to Algolia**. Specifically named: CRM, CDP, CMS, historical purchase data, internal sales numbers, business goals/KPIs, seasonal-and-product-specific targets, and domain knowledge (e.g. internal training manuals for shop assistants — both home-construction retailers mentioned this).

Some customers have already tried to push richer contextual data (e.g. sales numbers), and **latency killed the experiment**. So it's not just an integration-ergonomics problem — there's a hard architectural constraint at the data layer.

## Mechanism (hypothesized)

Every dream product the report enumerates depends on this data: conversational search needs intent context, 1:1 personalization needs identity-resolved 1P data, the analytics assistant needs cross-system metrics, the visualization personalizer needs preference graphs. None of them ship usefully without it. That makes data ingestion a **gating dependency** rather than one feature among many.

The latency observation is the sharpest finding here. It implies that even if a CDP connector ships tomorrow, naïve pull-on-query won't work — the ingestion has to be precomputed/indexed at write time, which is a deeper architectural commitment.

## Counter-evidence to look for

- Customers may name data ingestion as the blocker but really be blocked on internal data quality (the report notes data is "not in an ideal place" for most participants). A great connector wouldn't unblock them. Verify which side the bottleneck is really on.
- Privacy/security review for richer data ingestion may extend deployment timelines past the AI-feature ROI window.
- "Latency killed it" is one anecdote; we don't know the customer's specific architecture or what data volume they tried to push. Treat as a leading signal, not a quantified finding.
