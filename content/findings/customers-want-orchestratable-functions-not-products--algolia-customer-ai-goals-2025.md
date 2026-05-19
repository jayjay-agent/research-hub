---
title: "Customers explicitly want orchestratable, multi-agent functions — not monolithic AI products"
summary: "Customers can't rearchitect for big AI suites; they want nimble, agent-callable Algolia primitives they can compose. The report uses the language \"multi-agentic\" and recommends MCP investment."
date: 2026-05-13
tags: [multi-agent, mcp, orchestration, architecture]
citations:
  - source: algolia-customer-ai-goals-2025
    quote: "The core recommendation is not to build out the exact products they described, but rather produce smaller orchestratable functions that speak to their desired workflows and end user experiences. This would require us to invest strategically in MCP and multi-agentic frameworks"
  - source: algolia-customer-ai-goals-2025
    quote: "they want to harness us as multiple agents to make smarter decisions about their implementation."
  - source: algolia-customer-ai-goals-2025
    quote: "The lack of easy orchestration/communication between Algolia tools, because they're built to be UI first rather than logic systems or \"agentically\" first, as one participant put it"
---

## Finding

The report's explicit top-line recommendation is **not to ship the dream products as integrated suites**, because customers don't have the resources or appetite to rearchitect around a big AI release. Instead: ship smaller, orchestratable functions and invest in MCP + multi-agent frameworks. The phrasing comes straight from a customer ("agentically first").

This isn't a fringe view — the report cites it as the customer-side recommendation, the Algolia-side recommendation, *and* a feasibility argument (orchestratable primitives are also more nimble against a rapidly shifting AI landscape).

## Mechanism (hypothesized)

The "UI-first" architecture customers cite is what makes Algolia's existing primitives expensive to compose. When ranking, rules, and recommend each have their own surface and don't share state, customer-side orchestration becomes a coordination problem across siloed teams (which the report notes is itself a top obstacle). Exposing the same primitives as agent-callable functions inverts the cost curve: one customer dev wires up an agent that drives all three, instead of three teams coordinating UIs.

The MCP framing matters because it's how customers (and their existing ChatGPT licenses) can consume those primitives without building bespoke integrations.

## Counter-evidence to look for

- "Customers want LEGO bricks" is a common research-interview answer that doesn't always survive procurement. Customers may say they want orchestratable primitives but pay for the suite that ships first.
- The report's recommendation is editorial — written by the researcher, not directly elicited from every participant. Verify by counting participants who specifically endorsed the multi-agent framing vs. those who just described their dream products.
- Smaller customers (out of sample) may genuinely want the all-in-one product and lack the dev capacity to compose primitives.
