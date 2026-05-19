---
title: "Agent Studio churners flag customization depth as the most-wanted feature"
summary: "Among respondents who tried Agent Studio and churned, 71% rated 'more customization options' as a very important feature — the highest of any cohort. They also flagged 'limited ability to customize a search-specific template not optimized for your industry' as the thing to avoid."
date: 2026-05-18
tags: [agent-studio, churn, customization, product-gap]
citations:
  - source: agent-building-preferences-2025
    quote: "Those who tried out Agent Studio and churned from it voted extremely strongly for 'more customization options' as a very important feature to have (71%), the highest of any cohort for that feature."
  - source: agent-building-preferences-2025
    quote: "Churners were also unusually consistent about what they wanted to avoid, which was a similar flavor: 'limited ability to customize a search-specific template not optimized for your industry.' In terms of what problems they didn't care about, they rated few connector options and weak parity with search rules and ranking."
---

## Finding

The single most direct evidence of an Agent Studio product gap is in the churner cohort: 71% rated **more customization options** (language, logic, guardrails) as very important — the highest score on that feature across every segment in the survey. The same cohort independently flagged **"limited ability to customize a search-specific template not optimized for your industry"** as the thing to avoid.

Two corroborating signals from the same cohort:

- They did *not* care about more connector options or weak parity with search ranking — those failure modes were not what drove them away.
- Their top use-case interest was "dynamic cost optimization with tool coordination" (lowest-interest use case overall), tied with shopper guides — suggesting a more advanced/sophisticated user profile than the average respondent.

## Mechanism (hypothesized)

Churners are not novices. They got far enough in Agent Studio to form an opinion, and what they found was that customization depth bottomed out before their use case did. The fact that they down-rated connector breadth and rule parity suggests they made it past the activation surface — those didn't break — and hit the wall when they tried to bend the agent's behavior to their domain. The "customization on a search-specific template not optimized for industry" framing is unusually specific: it implies they wanted templates *and* deep customization, not one or the other.

This is consistent with the broader market-research signal that companies want a fast prototype that they can refine over time. Agent Studio appears to deliver the prototype and stall on the refine.

## Counter-evidence to look for

- "Churned" sample size and selection bias — the report doesn't state n for this cohort. Churners self-select for having an opinion strong enough to vote in a survey.
- "Customization" is an umbrella term. Decomposing churner responses to specific surfaces (prompts, retrieval, ranking weights, guardrails, fallback) would be required before a fix.
- Some churners may have left for unrelated reasons (price, sales motion, internal politics) and only retrofit a product complaint when surveyed.
- The "advanced user" profile of this cohort may not be representative of where Agent Studio's strategic persona sits — but the strategy persona (growth/personalization leads who A/B test ranking) overlaps heavily.
