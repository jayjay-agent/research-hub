---
name: Agent Studio
last_updated: 2026-05-18
---

# Agent Studio Strategy

## Target problem

Customers have AI ideas but can't evaluate them safely. AI changes outcomes non-deterministically, and their existing measurement stack assumes deterministic ranking — they can't tell which AI bet paid off.

## Our approach

We win by pulling agents on top of the search and ranking infra customers already trust, so evaluation primitives don't have to be reinvented — letting customers tell which AI bet paid off using the same A/B and relevance evals they already defend.

## Who it's for

**Primary:** Growth and personalization leads at e-commerce and marketplace companies who currently A/B test deterministic ranking and merchandising rules. They're hiring Agent Studio to A/B test agentic experiences as confidently as they currently A/B test ranking rules — same dashboards, same significance, but agents now allowed.

## Key metrics

- **Time-to-first-production-test (TTFT)** — median days from new customer account to first agent A/B test running with real traffic. Lives in product analytics.
- **Active agent A/B tests in production** — weekly snapshot of running agent experiments across the customer base. Lives in Agent Studio's experiment DB.
- **Verdict-confidence rate** — share of concluded agent tests that reached a confident verdict (win, loss, or honest no-difference) versus tests that ended inconclusive. Lives in Agent Studio's experiment DB. *The load-bearing metric.*
- **Promote-to-100% rate** — of positive-verdict tests, the share the customer rolled out to 100% traffic. Lives in Agent Studio's experiment DB.
- **NDR of test-running customers** — net dollar retention among customers who ran ≥1 agent test in the trailing 90 days. Lives in billing joined to experiment DB.

## Tracks

### Experimentation & measurement for agents

Extend the existing A/B framework so it produces honest verdicts on non-deterministic agentic outputs — sample-size math under high variance, agentic-aware control/variant assignment, treatment of mid-test agent drift, statistical guards against the failure modes that break naive A/B on agents.

_Why it serves the approach:_ this *is* the approach. Without it, "reusing existing eval primitives" doesn't survive contact with reality.

### Agent runtime on the existing Algolia surface

Agents that read and write the same index, share the same ranking signals, and run inside the same request lifecycle customers already deploy with Algolia today — agent definitions, tool model, latency budgets, fallback paths, agent versioning, deployment targets.

_Why it serves the approach:_ if agents run somewhere else, the inherited eval primitives stop working. The whole bet is that agents live on the same surface as ranking.

### Observability & trust

Tracing, replay, sampling, qualitative review queues, side-by-side variant inspection. Customers won't promote a test to 100% on numbers alone — they need to see what the agent actually did on representative requests, and explain it to a stakeholder.

_Why it serves the approach:_ verdict-confidence and promote-to-100% both depend on customers being able to audit the agent's behavior, not just its summary stats.

### Activation & adoption workflow

The path from "customer signs up" to "customer ships their first agent test" — templates, reference agents, integration guidance, opinionated starters keyed to the persona, plus partner and CSM-grade adoption motion.

_Why it serves the approach:_ TTFT is the activation gate. A great runtime and measurement stack does nothing if customers don't reach it.
