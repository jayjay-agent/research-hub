---
title: "H — Industry-named templates with first-class customization lift TTFT and NDR"
summary: "If Agent Studio ships a library of industry-shaped templates with a deep customization workflow, both new-customer time-to-first-test and test-running-customer retention will improve materially."
date: 2026-05-18
tags: [hypothesis, templates, customization, ttft, ndr]
confidence: 4
citations:
  - source: agent-building-preferences-2025
    quote: "Our strategy should be to provide a wide breadth of ready-to-go search agent templates that users can adopt quickly to demonstrate value, and easily tune as they go."
  - source: agent-building-preferences-2025
    quote: "Those who tried out Agent Studio and churned from it voted extremely strongly for 'more customization options' as a very important feature to have (71%), the highest of any cohort for that feature."
---

## Hypothesis

**If** Agent Studio ships a library of named, industry-shaped templates (B2C shopper guide, B2B catalog assistant, content discovery, etc.) with a first-class customization workflow underneath each,
**then** Time-to-first-production-test (TTFT) lifts ≥30% on activation and NDR among test-running customers lifts ≥10 points within two quarters,
**because** the research shows (a) customers prefer template-driven adoption over modular kits, even when modular kits are more powerful (free-response evidence), (b) Agent Studio churners specifically named "limited ability to customize a search-specific template not optimized for your industry" as the failure mode, and (c) the market-research context describes customers wanting to "get basic agentic experiences up quickly first, to refine later" — a sequence templates + deep customization addresses directly.

## Persona / metric / track

- **Persona:** strategy's primary (growth/personalization leads who A/B test ranking). Templates lower the activation bar; deep customization keeps them iterating past the first test.
- **Metrics:** primary — **TTFT** (activation gate) and **NDR of test-running customers** (retention gate). Secondary — **Active agent A/B tests in production** (templates lower marginal cost of starting a new test).
- **Track:** primarily **Track 4 — Activation & adoption workflow** for the template side; **Track 2 — Agent runtime on the existing Algolia surface** for the customization-depth side.

## How to test

Two-cell, sequential:

1. **Activation cell:** roll out a 4–6 template library to new Agent Studio signups; measure TTFT against the prior baseline. Confidence in 4–6 weeks.
2. **Retention cell:** roll out a customization-depth surface (decompose to specific knobs via [[todo-deep-churner-customization-interviews]] first) to test-running customers; measure week-12 active-test rate and 90-day NDR cohort.

Pre-register the templates and customization surfaces before the test starts so success can be measured against a stated bet, not retrofitted.

## Risks to the hypothesis

- **"Customization" turns out to be ill-defined.** If the churner signal decomposes to four incompatible feature requests, "more customization" is a category error and the lift won't appear.
- **Template names don't resonate.** The report explicitly says naming matters as much as function; if the names don't map to how customers self-describe, activation lift won't happen.
- **The persona mismatch.** Churners and the strategy persona may overlap less than assumed. If churners are more sophisticated than typical Agent Studio buyers, customization-depth solves the wrong problem.
- **NDR has long lag.** A 10-point NDR move takes 2+ quarters to read cleanly; interim signal will need to come from active-test concurrency.
