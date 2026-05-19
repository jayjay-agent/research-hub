---
title: "Natural-language analytics + tuning is the second-strongest AI ask"
summary: "Customers want to ask their analytics in plain English and receive reasoning-backed config recommendations — mirroring their end-user conversational-search ask."
date: 2026-05-13
tags: [analytics, tuning, natural-language, merchandising]
citations:
  - source: algolia-customer-ai-goals-2025
    quote: "The second strongest idea from participants was for an analytics AI solution that exposed deeper insights and improvement action items."
  - source: algolia-customer-ai-goals-2025
    quote: "The core ability they wanted was to ask this solution natural-language queries about search performance"
  - source: algolia-customer-ai-goals-2025
    quote: "Generic suggestions without reasoning don't generate as much confidence compared to hearing something like \"because you have highly technical records and a lot of them and your goal is to make customers save articles rather than sell products, you should improve your configuration this way.\""
---

## Finding

The second-most-named dream is an **analytics + tuning assistant**: natural-language queries against search performance ("How has interest in our new purple colorway performed with search interest and conversion?") that return both insights *and* concrete, reasoned config recommendations. A subset of customers want it to run its own A/B tests; the rest want at least proactive, easily-implemented suggestions.

Two structural notes from the report:

- The ask is **less about a feature surface** ("doesn't need to be in the Algolia UI") and **more about a capability**: aggregate many inputs, answer in natural language, return reasoning.
- Reasoning is non-optional. Suggestions without "because" don't generate buyer confidence.

This is more attractive to customers who also have merchandising responsibilities (not just dev).

## Mechanism (hypothesized)

This is the same conversational-interpretation pattern as the end-user ask, just pointed inward. Customers see LLMs interpreting user motivation in real time and conclude: *if it can do that for my shoppers, it can do it for me when I dig into analytics*. The reasoning requirement isn't a UX preference — it's how buyers signal upward to their leadership that the AI's suggestion is defensible enough to actually implement.

This also dovetails with a long-standing customer pain (cited in the report) around "getting the most out of Algolia for their unique implementation." NL analytics is the candidate solution to a problem that already existed pre-AI.

## Counter-evidence to look for

- Customers may underestimate how much they'd trust an autonomous tuning agent vs. how much they actually would in production. Several said they wanted A/B tests run automatically — that may collapse under real-world security/governance review.
- "Reasoning" can be theater. Need to test whether plausible-but-wrong reasoning erodes trust faster than no reasoning at all.
- This is highly desired by merchandiser-developers; pure-IC developers may want the *builder assistant* variant (configuration debugging) more.
