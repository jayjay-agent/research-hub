---
title: "Templates with deep customization, not modular kits, is the load-bearing build surface"
summary: "Customers want ready-to-go templates they can adopt fast and tune deeply over time. Modular building blocks alone lose on both speed and confidence."
date: 2026-05-18
tags: [implication, templates, customization, build-experience]
citations:
  - source: agent-building-preferences-2025
---

## What the research implies

Three findings stack into one product conclusion:

1. The top failure modes to avoid are "difficult to tune" (57%) and "challenging to build" (52%) — consistent across every segment, especially the read/learn + content segment at 73%.
2. Free-response feedback was unambiguous: customers prefer template customization over building modular systems from scratch, even when the modular kit is "robust and powerful."
3. Agent Studio churners specifically called out "limited ability to customize a search-specific template not optimized for your industry" as the thing to avoid — they wanted *both* the template *and* the customization depth.

These do not point at "give them better blocks." They point at: **the agent surface customers want is a library of named, industry-shaped, ready-to-go templates that have a first-class customization workflow underneath them**. The template is the entry point; customization is the depth. Either alone loses.

## Concrete implications

1. **Template selection is a product-design problem, not a marketing problem.** Naming, framing, and discoverability of templates appear to matter as much as the underlying functionality — the report explicitly recommends "a wide assortment of templates whose names instantly resonate with different use cases and are easy to start with, _even if they are functionally very similar under the hood_."
2. **Customization needs to be a first-class workflow, not a settings page.** Churners are getting through activation and hitting the customization ceiling. The Activation & adoption workflow track owns the *front* of this; the customization depth question is a track-2/track-3 (runtime + observability) extension.
3. **The build path must terminate in a working agent fast, then degrade gracefully into tuning.** The market-research context the report references — "companies are trying to get basic agentic experiences up quickly first, to refine later" — implies a two-phase model: minutes-to-first-test, then weeks-of-iteration. Both have to feel light.

## Strategy alignment

- **Metrics moved:** **TTFT** (template selection drives time-to-first-test) and **NDR of test-running customers** (customization depth drives retention beyond first test). **Active agent A/B tests in production** likely also tied — customers who can tune are customers who keep iterating.
- **Tracks served:** primarily **Track 4 — Activation & adoption workflow** (templates), with significant pull on **Track 3 — Observability & trust** (the tuning loop needs visibility) and **Track 2 — Agent runtime on the existing Algolia surface** (deep customization presumes the runtime exposes the right knobs).
- **Approach alignment:** strong. "Templates on the existing search infra with industry-shaped names" *is* the strategy's bet expressed as product surface.
- **Persona alignment:** primary persona (growth/personalization leads who A/B test ranking) — they will pick up templates fastest and iterate hardest. Churner cohort overlaps heavily.

## What's still unknown

- The decomposition of "customization." Is it prompt-shaping? Retrieval weights? Guardrails? Logic branches? The data is aggregate. A follow-up qualitative pass on churners — see [[todo-deep-churner-customization-interviews]] — should unlock this.
- Where the boundary between "template" and "from-scratch agent" sits. The recommendation implies templates dominate, but doesn't speak to the long tail of customers who genuinely want a bespoke agent.
- Whether template names should be industry-shaped (B2B catalog assistant, B2C shopper guide) or use-case-shaped (search assistant, conversational assistant) or both. The survey hints at industry, but doesn't test naming directly.
