---
title: "Search-first fallback is the most opinionated preference in the survey"
summary: "74% prefer that when an agent experience fails, it falls back to plain search results rather than preserving assistive agent behaviors."
date: 2026-05-18
tags: [fallback, reliability, search-first, default-behavior]
citations:
  - source: agent-building-preferences-2025
    quote: "When there were problems with an interactive agent experience, participants overwhelmingly preferred a search-first fallback prioritizing rote results (74%), versus an agent-first fallback that preserved assistive behaviors. This question was uniquely opinionated, with nearly all segments answering with the strongest possible preference toward search-first and away from agent-first."
---

## Finding

Of the six sliding-scale trade-offs the survey presented, the search-first fallback question was the most opinionated: **74%** wanted failed agentic interactions to degrade to rote search results, not to preserve assistive agent behavior. The report explicitly calls this the most consistent slider in the data — nearly every segment answered with the strongest possible preference.

This is a behavioral default question, not a feature-wishlist question. Customers are saying: when the smart thing breaks, give the user a working dumb thing — don't keep trying to be smart.

## Mechanism (hypothesized)

Customers operating production search already trust search to behave well under load and under edge cases — relevance falls off gracefully, queries return *something*. They don't yet trust agentic flows to fail gracefully. A search-first fallback is a known-good safety net underneath a still-experimental agentic layer; an agent-first fallback would compound an already-broken interaction with more agentic behavior, which is exactly what fragile-trust customers want to avoid. This is consistent with the strategy's "agents on top of the existing eval primitives" approach: search is the floor agents stand on, not the other way around.

## Counter-evidence to look for

- Some agentic flows (multi-turn assistants, agent-driven workflows) may *only* make sense in agent-mode — falling back to a search bar may break the experience. The survey question was framed at a generic "interactive agent" level.
- The "still-experimental" framing decays as trust grows. If agents become reliable enough, customers may prefer "preserve as much of the assistive context as possible" instead of dropping to baseline search.
- 26% answered against the preference; understanding who they are (likely conversational-assistant skewed) would tell us whether the default should ever flip per use case.
