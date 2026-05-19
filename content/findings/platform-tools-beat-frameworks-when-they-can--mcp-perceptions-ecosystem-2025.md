---
title: "Developers prefer platform tools over external frameworks — and use frameworks out of necessity, not preference"
summary: "When developers reach for LangChain/AutoGen, it's because Agent Studio (or whatever platform they're on) doesn't give them what they need yet — not because they prefer the framework."
date: 2026-05-19
tags: [platform-vs-framework, langchain, agent-studio, build-preference]
citations:
  - source: mcp-perceptions-ecosystem-2025
    quote: "Most explained that this choice was based on necessity rather than preference. They said they would rather build in platform environments such as Algolia's Agent Studio because they expect those tools to be simpler, easier to maintain, and more reliable."
  - source: mcp-perceptions-ecosystem-2025
    quote: "They typically turn to external frameworks (e.g. LangChain or AutoGen) out of necessity such as when platform tools do not fully meet their technical requirements, flexibility, or cost constraints."
  - source: mcp-perceptions-ecosystem-2025
    quote: "Right now we're using our own custom code, but if Algolia Agent Studio could have full access to the API, I'd consider using it because it would save time. The key is flexibility... if I can still customize, then yes."
---

## Finding

Developers' default preference is to build agents on a platform tool (Agent Studio, OpenAI Agents, AgentForce, etc.) rather than on a framework (LangChain, AutoGen, CrewAI). When they pick a framework, it's because the platform tool fell short on:

- **Capability** ("if Algolia Agent Studio could have full access to the API, I'd consider using it")
- **Flexibility** ("The key is flexibility... if I can still customize, then yes")
- **Cost** ("We are trying to reduce the cost of all of that")

Quantitatively, the build-preference split is:

| Build preference | Customers (N=8) | Non-customers (N=4) |
| --- | --- | --- |
| Platform with built-in agent tools | 3 | 2 |
| Build independently (LangChain, AutoGen, CrewAI, custom code) | 2 | 1 |
| Both, depending on the project | 3 | 1 |

The recommendation: "Deepen native MCP integration within Agent Studio before expanding to external frameworks like LangChain or AutoGen."

## Mechanism (hypothesized)

Framework adoption has a hidden tax developers know about: every external framework adds maintenance surface, version churn, and integration glue. Platform tools amortize all of that — when they work. Developers reach for frameworks when the platform tool's limits are visible to them and the framework's tax is lower than working around the limit.

Two implications follow:

1. The customers using frameworks today are a recoverable population. They're not lost on principle — they're lost on capability/flexibility/cost.
2. Adding framework compatibility ("Agent Studio also runs LangChain agents") is not the play. Closing capability/flexibility/cost gaps on the platform is the play.

## Counter-evidence to look for

- A subset of customers may have ideological commitment to open frameworks regardless of capability parity (e.g. portability concerns, avoiding lock-in). The survey didn't probe this directly.
- "Platform tool" includes OpenAI Agents and AgentForce as well as Agent Studio. Some customers may prefer *a* platform tool but not Algolia's. The data doesn't separate this.
- The "necessity not preference" framing may understate developer pride — a developer who's invested in a LangChain codebase has retroactive preference for the framework that's hard to surface in a one-shot interview.
