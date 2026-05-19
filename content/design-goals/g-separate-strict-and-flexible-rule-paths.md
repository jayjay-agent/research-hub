---
title: "Separate paths for strict and flexible rules"
summary: "Strict (always/never, data-scope) and flexible (behavioral) rules need different expression surfaces and different enforcement guarantees — not the same prompt field."
date: 2026-05-13
tags: [design-goal, rules, primitives, predictability]
citations:
  - source: market-agentic-use-cases-2026
    quote: "We should offer clear and potentially separate methods of efficiently managing the flexible/strict rules distinction."
  - source: market-agentic-use-cases-2026
    quote: "Prompt iteration posed a unique challenge to respondents: sometimes rules needed to be flexible (more like behavioral recommendations) whereas others needed to be absolute."
---

## Goal

Provide **two distinct surfaces** for rule expression:

1. **Strict rules** — declarative, scope-aware, enforced by deterministic Algolia logic (Rules engine, scope filters, output validators). Either obeyed or returns a clear failure mode.
2. **Flexible rules** — prompt-shaped, behavioral, applied by the underlying model with no hard guarantee.

Both compose into the same agent step; the builder picks the right surface per rule. The platform never silently collapses them into one prompt field.

## What "achieving this goal" looks like

- A builder can declare "never return product results with stock = 0" once, and the agent honors it across every retrieval in the workflow without re-prompting.
- A builder can declare "prefer concise responses" in the flexible surface, and the model treats it as a preference.
- Strict-rule violations are visible in the I/O trace (see [[g-explain-every-ranking-and-tuning-decision]]) — not as silent agent decisions.
- The strict-rule surface reuses Algolia's existing Rules, scope filters, and ranking primitives rather than building a parallel system.

## What this rules out

- Single-prompt rule expression with hopeful-tone "STRICT RULE" upgrades. The research is explicit that this is what builders do today as a workaround, and it doesn't work.
- Treating "rules" as model-only. Strict rules are platform-enforced primitives; the model doesn't get to vote.
- Burying rule definition in agent step configuration with no visibility into when each rule fired. The trace has to show it.
