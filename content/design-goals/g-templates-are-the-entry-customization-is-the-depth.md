---
title: "Goal: Templates are the entry surface; customization is the depth surface"
summary: "Agent Studio should be optimized for two motions: minutes-to-first-test via named templates, and weeks-of-iteration via first-class customization. Neither is optional."
date: 2026-05-18
tags: [design-goal, templates, customization, build-experience]
citations:
  - source: agent-building-preferences-2025
---

## The goal

Agent Studio's build experience should be structured as two motions, not one. The first motion is *minutes-to-first-test*: a customer picks a named template that matches their industry/use case, points it at their index, ships it as an A/B test against a real control. The second motion is *weeks-of-iteration*: they tune prompts, retrieval, ranking weights, guardrails, fallback logic — and every change is itself testable. Both motions need first-class product surface; neither can be a "next phase" that ships behind a door.

## What this means concretely

- **Template selection is a discoverable, named, industry-aware experience.** Not a list of YAML files; not a "starter project" zip. A library with strong defaults the customer can run as-is.
- **Customization is a workflow, not a settings page.** Each customization surface (prompt, retrieval weights, guardrails, fallback, tool list) is a first-class object with a history, a diff, an A/B-able representation.
- **The two motions share state.** The template the customer started from is still legible after 20 customization edits — they can see what they changed, roll back, or fork. This is what stops "I customized so much I lost the plot."
- **Customization is bounded by what the template names.** Templates set the "shape" of the agent; customization tunes within that shape. Customers who want to leave a template's shape go to a different (more advanced) entry point — but that's a small minority.

## How we'd know we got it right

- TTFT drops materially among customers who pick a template (vs. customers who don't).
- Active-test concurrency rises among customers who've been on the platform >30 days — they're iterating, not one-shot testing.
- Agent Studio churn from the customization-gap cohort drops; win-back conversations cite the customization workflow specifically.
- Customers describe Agent Studio in their own words as "templates plus tuning," not "an agent builder."

## How we'd know we got it wrong

- Customers pick templates, ship the default, and never come back. (TTFT good, retention flat — the customization surface didn't carry them.)
- Customers bypass templates and build from scratch. (We're not delivering on entry; the modular-kit failure mode is back.)
- Customization edits keep landing in the same one or two surfaces (e.g. prompts only). (The depth surface is unbalanced — other knobs aren't being used because they're hidden or hard to find.)

## Strategy alignment

- **Persona:** primary — growth/personalization leads need both the speed of templates and the depth of customization to stick with a platform across multiple agent tests.
- **Metrics:** **TTFT**, **NDR of test-running customers**, **Active agent A/B tests in production**.
- **Tracks:** primary on **Track 4 — Activation & adoption workflow** (templates) and **Track 2 — Agent runtime on the existing Algolia surface** (customization depth). **Track 3 — Observability & trust** is the third leg — the customization workflow is dead without seeing what changed and what the agent did.

## Counter-evidence to watch

- If a small but loud segment of customers wants raw modular kits (no templates) and they're disproportionately strategic accounts, the two-motion model may need a third entry point for them. The data suggests this segment is small but doesn't rule it out.
