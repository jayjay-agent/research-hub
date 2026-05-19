---
title: "Orchestratable by default"
summary: "Every Agent Studio surface and primitive must be agent-callable as a first-class shape — not a UI feature with an API afterthought."
date: 2026-05-13
tags: [design-goal, multi-agent, mcp, architecture]
citations:
  - source: algolia-customer-ai-goals-2025
    quote: "The lack of easy orchestration/communication between Algolia tools, because they're built to be UI first rather than logic systems or \"agentically\" first, as one participant put it"
  - source: market-agentic-use-cases-2026
    quote: "they're trying to harness a smarter form of an assistive automation that reliably integrates with their current resources."
---

## Goal

Treat **agent-callability as the primary shape** of every Agent Studio capability. UI is one consumer of that shape; an MCP server is another; a customer-side agent is a third. Internal Algolia surfaces should consume the same primitives the customer-facing agents do.

This goal exists because customers cited UI-first architecture as a top blocker for their AI dreams — they can't compose Algolia tools into multi-step workflows when each tool's primary interface is a UI.

## What "achieving this goal" looks like

- Every new Agent Studio primitive ships with its agent-callable contract before (or alongside) any UI.
- "Can a customer's agent do everything our internal UI does?" is a regression test we can answer yes/no.
- The MCP server isn't a separate product wrapping the platform — it's a thin protocol adapter on top of primitives that were already agent-callable.

## What this rules out

- Shipping "Algolia AI X" as a UI-first product and then back-porting an API once customers ask.
- Treating MCP support as a checkbox integration project.
- Building per-product agent wrappers instead of one unified primitive surface.
