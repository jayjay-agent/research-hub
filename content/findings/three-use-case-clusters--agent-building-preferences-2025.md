---
title: "Three distinct agentic use-case clusters drive different feature preferences"
summary: "47% search assistant, 34% conversational assistant, 19% analytics assistant. Each cluster has a different top-feature and segment-affinity profile."
date: 2026-05-18
tags: [segmentation, use-cases, search-assistant, conversational-assistant, analytics-assistant]
citations:
  - source: agent-building-preferences-2025
    quote: "A search assistant that returns the most relevant records (e.g. consumer goods, businesses, media, etc.) based on their queries/provided contexts | 47%"
  - source: agent-building-preferences-2025
    quote: "A conversational assistant that answers end user questions with useful summarized information or insights pulled from your content | 34%"
  - source: agent-building-preferences-2025
    quote: "An internal-facing analytics assistant that tells you insights about your end users' search behavior | 19%"
  - source: agent-building-preferences-2025
    quote: "Optimized for industry-relevant metrics: search assistant, B2C, purchase a physical good"
  - source: agent-building-preferences-2025
    quote: "the second segment might be more relevant for the Agent Studio team to consider, whereas the first group may be of more interest to the Ask AI team."
---

## Finding

Respondents fell into three roughly stable use-case clusters with distinct feature preferences:

| Cluster | Share | Top feature wanted | Industry affinity |
| --- | --- | --- | --- |
| Search assistant | 47% | Industry-relevant analytics | B2C, purchase-physical-good |
| Conversational assistant | 34% | More customization options (41%) | B2C, content/media |
| Analytics assistant | 19% | High transparency / observability (36%) | B2B |

The report explicitly maps the analytics-optimization split onto an internal team boundary: customers who prefer industry-relevant metrics align with the **Agent Studio** team's natural persona; customers who prefer search/discovery metrics align with **Ask AI**'s natural persona.

The "read/learn + content" cross-segment (about a third of responses) is repeatedly called out as distinct: it skews toward Ask AI's analytics flavor, has the most leverage-sensitive build cohort (73% want to avoid tune/build friction), and was the only segment with a measurable bump in LLM-platform preference.

## Mechanism (hypothesized)

Search-assistant agents replace or augment an existing search UI — the customer's KPIs are still business KPIs (add-to-cart, conversion), so analytics needs to be industry-shaped. Conversational agents are a new surface where the customer hasn't yet built habits, so the leverage shifts to customization (the customer is more aware they're shaping behavior from scratch). Analytics-assistant agents are an internal-facing tool where the customer is the agent's user, so observability moves to the top of the list. Each cluster's top feature reflects how visible the agent is and to whom.

## Counter-evidence to look for

- Cluster boundaries may be artifacts of how the survey question was phrased. A customer might build all three over time; the snapshot question forces a single answer.
- The 19% analytics-assistant cluster is smaller and may be undersampled at this n.
- The Ask AI / Agent Studio mapping is an interpretation the report author offers, not a respondent statement — worth probing internally.
