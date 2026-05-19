---
title: "Ability to enforce strict rules is a top value indicator — sometimes valued equal to model quality"
summary: "Respondents distinguish flexible (behavioral) rules from absolute (always/never) rules and struggle to express both in prompts; strict-rule adherence is a key purchase criterion."
date: 2026-05-13
tags: [rules, predictability, prompt-engineering, primitives, trust]
citations:
  - source: market-agentic-use-cases-2026
    quote: "Prompt iteration posed a unique challenge to respondents: sometimes rules needed to be flexible (more like behavioral recommendations) whereas others needed to be absolute."
  - source: market-agentic-use-cases-2026
    quote: "it was the ability to adhere to strict rules when asked that respondents felt was a key value indicator, sometimes valuing this just as much as the overall model quality itself."
  - source: market-agentic-use-cases-2026
    quote: "We should offer clear and potentially separate methods of efficiently managing the flexible/strict rules distinction."
---

## Finding

Builders distinguish two rule categories that today's prompt-only interfaces collapse:

- **Flexible rules**: behavioral recommendations / soft preferences ("prefer shorter responses").
- **Strict (absolute) rules**: always/never invariants and data-location constraints. Examples cited verbatim:
  - "in the same message, never recommend combinations of drugs that would be toxic"
  - "in API docsearch, only reference the guidance from the specific API version the customer was using"

Builders **can't express the distinction reliably in prompts**. They cope by repeating absolute rules in different phrasings (hoping the agent "takes it more seriously") or by splitting the workflow into separate flexible and strict agent steps.

The strategic punchline: strict-rule adherence is **sometimes valued as much as model quality itself**, and the report explicitly recommends offering separate methods for managing the two rule types. The finding is reinforced by a parallel monetization study cited in the source.

## Mechanism (hypothesized)

Predictability is what makes an agent eligible to be an automation step. If an agent occasionally violates a strict rule, the entire workflow downstream of it has to handle the violation case — which means human-in-the-loop, which destroys the productivity gain. Builders are willing to pay for predictability *more* than they're willing to pay for marginal output quality because predictability is what unlocks autonomous deployment.

This dovetails with research #1's per-customer ranking-strategy ask ([[per-user-ranking-strategy-primitive]]): both are about giving the platform user explicit control levers over agent behavior that don't depend on prompt-engineering tricks. Strict rules are the broader version of the same primitive.

## Counter-evidence to look for

- Strict-rule failures may be model-side problems that no platform UX can solve — if so, "offering separate methods" doesn't help; the underlying model just isn't reliable enough.
- The two examples cited (drug interactions, API version pinning) are domain-specific safety cases. The strict/flexible distinction may be cleanly bimodal there but blurry in most general workflows.
- The "valued as much as model quality" framing comes from interviews — actual willingness-to-pay data would be stronger evidence.
