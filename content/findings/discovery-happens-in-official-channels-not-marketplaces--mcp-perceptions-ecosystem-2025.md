---
title: "Discovery happens in Algolia's official channels and major package registries — marketplaces are actively distrusted"
summary: "12/12 expect to find MCP directly from Algolia; 7/12 expect it in registries (npm, NuGet, Claude connectors); only 4/12 in marketplaces, with one calling marketplaces 'full of new boom businesses that confuse you and promise false hope.'"
date: 2026-05-19
tags: [distribution, discovery, npm, nuget, marketplace, developer-experience]
citations:
  - source: mcp-perceptions-ecosystem-2025
    quote: "Not in the marketplace. Marketplace is full of these new boom businesses that confuse you and promise you false hope. I'd prefer a registry or vendor website because that way you can hold them accountable instead of marketplace mishaps."
  - source: mcp-perceptions-ecosystem-2025
    quote: "I would expect to find Algolia's MCP in the documentation together with SDKs and developer tools."
  - source: mcp-perceptions-ecosystem-2025
    quote: "Directly from Algolia or vendor (website/docs) | 8 | 4"
---

## Finding

When asked where they'd expect to discover a connector to Algolia for an AI agent, the distribution was lopsided:

| Channel | Customers (N=8) | Non-customers (N=4) | Total / 12 |
| --- | --- | --- | --- |
| Directly from Algolia (website/docs/dashboard) | 8 | 4 | 12 |
| Package registry (npm, NuGet, Claude connectors) | 4 | 3 | 7 |
| Marketplace (Salesforce, OpenAI tools) | 1 | 3 | 4 |

Every respondent expected to find MCP through Algolia's own channels first. Roughly half also expected to find it in major package registries (npm, NuGet). Marketplaces — including Salesforce's, OpenAI's, and Microsoft's — were actively distrusted by some respondents, who associated them with "low-quality or unsupported tools."

## Mechanism (hypothesized)

Marketplaces compete with the developer's accountability model. When a developer adopts a tool from a vendor's official channel (npm/Algolia docs/dashboard), they can hold the vendor accountable for the tool's behavior. Marketplaces dilute that — the marketplace operator (Salesforce, Microsoft) isn't the tool author, the tool author may have no relationship with the developer, and reviews/ratings are unreliable. The cost of trust verification in a marketplace is higher than just going to the vendor.

The strong preference for "directly from Algolia" also reflects the trust transfer noted in [[algolia-trust-transfers-to-mcp-and-agent-studio--mcp-perceptions-ecosystem-2025]] — the vendor's official channel is where the inherited brand trust applies.

## Counter-evidence to look for

- Some customer segments (especially those primarily working inside Salesforce or Microsoft ecosystems) may prefer marketplaces because they're where the customer's existing procurement, billing, and security review flow already operates.
- The 3/4 non-customers who picked "marketplace" may signal that enterprise procurement/security teams (who weren't in this sample) have a stronger marketplace preference than working developers.
- "Marketplaces are full of new boom businesses" is partially a Salesforce/Microsoft marketplace experience; the OpenAI ChatGPT App Store or Anthropic Claude connector registry are newer and may not have accumulated the same distrust yet.
