---
title: "Hard-to-tune and hard-to-build are the failure modes customers most want to avoid"
summary: "57% want to avoid 'difficult to tune or improve the agent'; 52% want to avoid 'challenging to build'. The read/learn + content segment rated both at 73%."
date: 2026-05-18
tags: [build-experience, tuning, customization, friction]
citations:
  - source: agent-building-preferences-2025
    quote: "The big two were 'Difficult to tune or improve the agent's language, logic, or guardrails' (57%) and 'Challenging to build (e.g. technically complex, or poor documentation)' (52%). This was especially important to avoid for the read/learn + content segment, who rated them at 73%."
  - source: agent-building-preferences-2025
    quote: "Third is 'Weak parity with existing search ranking/rules' at 36%."
---

## Finding

Across all segments, the two most consistent failure modes respondents wanted an agentic platform to *not* have were:

1. **Difficult to tune or improve the agent's language, logic, or guardrails** — 57% overall, 73% in the read/learn + content segment.
2. **Challenging to build (technically complex, poor documentation)** — 52% overall, 73% in the read/learn + content segment.
3. **Weak parity with existing search ranking/rules** — 36% overall.

The report explicitly notes this is the most consistent signal in the data: "_As opposed to 'good things they wanted,' respondents across all segments were very consistent on 'bad outcomes to avoid.'_" Whatever else customers want, they all want the build-and-tune surface to feel light.

## Mechanism (hypothesized)

Agents are non-deterministic — every adjustment to logic, guardrails, or prompts is a small experiment whose effect the customer has to observe, not deduce. If each cycle of "adjust → run → observe → adjust again" is expensive (slow build, hard to find the right knob, weak documentation), the cost of iteration kills the work before it ever reaches a customer-facing improvement. The "hard to tune" friction sits squarely on the loop the strategy promises to make virtuous.

The market-research evidence quoted earlier in the report — that companies are trying to get basic agentic experiences up quickly first and refine later — reinforces this: the *refine* step is where these customers say they break.

## Counter-evidence to look for

- Customers who are comfortable with technical complexity (research labs, well-staffed eng teams) may not weight tune/build friction the same way. The segments most worried (read/learn + content at 73%) are also the segments with the leanest dev resources per the qualitative research the report references.
- A platform that's hard to *build on* but produces dramatically better outcomes might still win some segments. The data doesn't measure that trade-off.
- Some "difficult to tune" complaints may decompose to specific surfaces (e.g. "I can't tune retrieval weights" vs. "I can't add a guardrail") that need different fixes — the survey question is aggregate.
