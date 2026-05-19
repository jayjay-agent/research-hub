---
title: "Idea: Industry-shaped template library as the Agent Studio entry surface"
summary: "Ship a library of named, industry-resonant templates (B2C shopper guide, B2B catalog assistant, content discovery, ticket/reservation finder) — functionally similar under the hood, but presented in customer-shaped language."
date: 2026-05-18
tags: [idea, templates, activation, ttft]
citations:
  - source: agent-building-preferences-2025
    quote: "Marketing language should emphasize these points, and we should also consider providing a wide assortment of templates whose names instantly resonate with different use cases and are easy to start with, even if they are functionally very similar under the hood."
  - source: agent-building-preferences-2025
    quote: "customers have historically repeatedly shown they trust our expertise in how a default template should be set up, and frequently want it to be highlighted."
---

## Sketch

The Agent Studio home screen is a template library, not a blank canvas. Templates are named in the customer's language:

- **B2C shopper guide** — for retail catalogs; agent surfaces relevant products with brief rationale
- **B2B catalog assistant** — for industrial / wholesale catalogs; agent handles spec matching, bundle extraction
- **Content discovery assistant** — for media, publishers; agent finds and summarizes relevant content
- **Ticket / reservation finder** — for services, events, hospitality
- **Recipe / project-list extractor** — for inventory matching against an end-user spec (Leroy Merlin shape)
- **Analytics co-pilot (Algolia-internal facing)** — for analytics-assistant customers (potentially Ask AI overlap; flagged)

Each template ships with strong defaults the customer can run as-is, an A/B-able representation against a search-baseline control, and a clearly named customization surface underneath.

Per the research, templates can be "functionally very similar under the hood" — the win is in the *naming and framing*, not in radically different implementations. A B2C shopper guide and a B2B catalog assistant might share 80% of their runtime; what makes them distinct is the prompt, the analytics view, the default fallback, and the example queries.

## Why this is grounded

- The research recommendation is essentially this idea, verbatim.
- Churners flagged the absence of "industry-not-optimized" templates as the failure mode to avoid.
- Market research (referenced in the report) describes customers wanting fast-prototype-then-refine, which a template library satisfies.

## Strategy alignment

- **Persona:** primary (growth/personalization leads).
- **Metrics:** **TTFT** (most directly), **Active agent A/B tests in production**.
- **Track:** **Track 4 — Activation & adoption workflow** (primary), with hooks into **Track 2** (the runtime exposes consistent customization surfaces underneath each template).

## Open questions

- How many templates? 4? 8? 20? The research suggests breadth matters; the upper bound is whatever stays maintainable.
- Should template *names* be industry-shaped (B2B catalog) or use-case-shaped (search assistant)? The research hints at industry but doesn't test naming directly.
- How does a template evolve into a custom agent? At what point does the template ancestry become a liability?
- Which templates should ship first to maximize TTFT impact? Probably the segments largest in the customer base (B2C goods, B2B goods per the survey distribution).

## See also

- [[g-templates-are-the-entry-customization-is-the-depth]]
- [[h-templates-with-deep-customization-lift-ttft-and-ndr]]
