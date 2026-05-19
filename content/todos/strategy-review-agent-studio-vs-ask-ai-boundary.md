---
title: "Surface the Agent Studio / Ask AI segmentation question to a strategy review"
summary: "The research implies a clean segmentation between the two products' personas. STRATEGY.md doesn't currently name what Agent Studio is not for. Worth a /ce-strategy update."
date: 2026-05-18
tags: [todo, strategy, segmentation, ask-ai, strategy-drift]
status: open
citations:
  - source: agent-building-preferences-2025
    quote: "the second segment might be more relevant for the Agent Studio team to consider, whereas the first group may be of more interest to the Ask AI team."
---

## What to do

Bring the research-implied Agent Studio / Ask AI segmentation to a `/ce-strategy` update conversation. The current `STRATEGY.md` skipped the optional "Not working on" section; the research is now strong enough to consider naming the segments Agent Studio is *not* for, explicitly.

Specific questions to settle in the review:

- Is the Agent Studio primary persona scoped only to the **industry-relevant metrics** segment (search assistant, B2C, purchase-physical-good)? If yes, the conversational/B2B/read-learn/stream segments belong to Ask AI and should be named as such in `STRATEGY.md`.
- Or is Agent Studio expected to also serve the conversational-assistant segment (34% of respondents)? If yes, the current persona scope ("growth/personalization leads who A/B test deterministic ranking") is too narrow — it needs a second persona named.
- What's the boundary signal a customer hits that routes them to Agent Studio vs. Ask AI in product onboarding?

## Done criteria

- [ ] `/ce-strategy` run with a targeted "persona" or "not working on" update.
- [ ] If Agent Studio scope is held: "Not working on" section names the Ask-AI-shaped segments explicitly.
- [ ] If Agent Studio scope is widened: secondary persona added, metrics re-checked for whether they still apply, tracks re-checked for whether they cover both personas.
- [ ] Decision documented as an implication or update to [[agent-studio-vs-ask-ai-segmentation]].

## Why this is queued

The strategy currently passes the research alignment check on the half of the market it names. The other half is a structural gap — not a drift in the wrong direction, but a missing piece. Naming it is cheap; pretending it's not there is the more expensive failure mode.

## Strategy alignment

This is a meta-todo (changes the strategy itself rather than working within it). Not metric- or track-bound directly; the output is a sharpened `STRATEGY.md`.
