---
title: "H — A search-first fallback default lifts verdict-confidence rate"
summary: "If failed agentic interactions degrade to plain search by default, customers can compare every agent A/B test against a measurable baseline, raising the share of tests that reach a confident verdict."
date: 2026-05-18
tags: [hypothesis, fallback, verdict-confidence, runtime-default]
confidence: 3
citations:
  - source: agent-building-preferences-2025
    quote: "When there were problems with an interactive agent experience, participants overwhelmingly preferred a search-first fallback prioritizing rote results (74%), versus an agent-first fallback that preserved assistive behaviors."
---

## Hypothesis

**If** Agent Studio defaults every agentic flow to a search-first fallback (failed agent step → plain search results) as a runtime primitive,
**then** Verdict-confidence rate on agent A/B tests lifts ≥15 percentage points,
**because** (a) every test gets a known-good baseline that the agent variant can be compared against, even when the agent variant fails on a subset of requests, (b) the research shows 74% of customers want this behavior, so the default doesn't fight customer expectation, and (c) the strategy's eval-primitive bet assumes search is the substrate under agents — the fallback default operationalizes that substrate.

## Persona / metric / track

- **Persona:** strategy's primary, plus all other segments — this was the most universal preference in the survey, so the default benefits every Agent Studio customer.
- **Metric:** primary — **Verdict-confidence rate** (the load-bearing strategy metric). Secondary — **Promote-to-100% rate** (a test with a clean fallback is safer to promote because the failure mode is bounded).
- **Track:** **Track 2 — Agent runtime on the existing Algolia surface** (the runtime owns the default behavior).

## How to test

- Make search-first fallback the runtime default for new templates.
- Compare verdict-confidence rate on agent A/B tests run on the new default vs. tests run on the prior default (or on a control that opts out).
- Stratify by use case — the conversational-assistant segment may behave differently than search-assistant.

## Risks to the hypothesis

- **Some flows don't have a clean search baseline.** Multi-turn conversational agents may not have a single search query to fall back to; the default may be wrong for those.
- **Customers may opt out widely.** If templates have to be heavily customized before launch anyway, the default doesn't drive the customer-visible behavior.
- **Verdict-confidence depends on more than the fallback.** Sample-size math, variance handling, and stat guards all matter; the fallback default is necessary but not sufficient.
- **The 26% who *didn't* prefer search-first may cluster in segments important to Agent Studio.** The data is aggregate; if conversational-assistant customers are the 26%, the default is wrong for them.
