---
title: "Summary: Agent building preferences research report"
summary: "Customers want to build agents inside the search platform — for ease, parity, and analytics — and want it to feel like ready-to-go templates with deep customization, not modular kits from scratch."
date: 2026-05-18
tags: [summary, agent-studio, platform-preferences]
citations:
  - source: agent-building-preferences-2025
---

## TL;DR

- **Platform preference is decisive.** Respondents ranked building in the search platform 1.3/3, LLM 2/3, proprietary tool 2.6/3. 60% directly chose "build where search is," another 19% neutral.
- **Top features wanted:** industry-optimized analytics (41%), more customization options (41% in conversational/B2C), high observability (36% in analytics/B2B), quick prototyping via templates (55% for stream/experience media).
- **Top things to avoid (very consistent across all segments):** "difficult to tune/improve the agent" (57%), "challenging to build" (52%), "weak parity with existing search ranking/rules" (36%).
- **Search-first fallback** is the single most opinionated preference: 74% want failures to fall back to plain search, not to agent assistive behavior.
- **Agent Studio churners** rated "more customization options" at 71% — the highest of any cohort — and consistently flagged "limited ability to customize a search-specific template not optimized for your industry" as the thing to avoid.

## Why it matters for Agent Studio

This is the cleanest external evidence to date that Agent Studio's locked strategic bet — agents on top of the search and ranking infra customers already trust — is what customers actually want. 60–79% of respondents would build on the search platform; the reasons they give (ease of maintenance, parity to ranking, search-aware analytics) map directly onto the strategy's approach.

The report also contains the sharpest signal we have on what's keeping Agent Studio churners from sticking: **customization depth**. 71% of them rated more customization as very important, the highest of any cohort, and they also down-rated the things our strategy bets on (search-rule parity, connector breadth). That's a *specific* product gap, not a general dissatisfaction — and it points squarely at the Activation & adoption workflow track plus the Observability & trust track.

The data points to one other live strategic decision worth surfacing: the analytics-optimization split (search/discovery vs. industry-relevant metrics) maps onto an Ask AI vs. Agent Studio team split that the research author flags explicitly. That belongs in a strategy update conversation.

## What's still open

- **How deep does "customization" need to go?** The signal is loud but the report doesn't decompose customization into discrete surfaces (guardrails vs. logic vs. language vs. retrieval vs. ranking weights). A follow-up qualitative pass on churners would unlock this.
- **The pricing signal is fuzzy.** 37% won't pay more, 52% will pay 0–20% more. A conjoint study is needed before this informs packaging.
- **The Ask AI / Agent Studio segmentation.** Is the Agent Studio team's primary persona the B2C/search-assistant cluster (industry-optimized analytics) and Ask AI's the conversational/B2B/read-learn cluster (search-optimized analytics)? The data implies this but the report doesn't make a recommendation.
- **The "extractor" use case** (recipe/project list → inventory items) gets called out repeatedly — including a Leroy Merlin success built *outside* Algolia. Worth investigating as a wedge.
