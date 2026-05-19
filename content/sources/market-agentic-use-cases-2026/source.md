---
title: "Market agentic use cases research report"
url: "https://algolia.atlassian.net/wiki/spaces/UR/pages/6749126682/Market+agentic+use+cases+research+report"
author: "Zen Ren (Algolia Research & Insights)"
date: 2026-04-21
tags: [algolia, market-research, agentic, automation, integrations, observability, builder-personas, internal-use-cases]
summary: "Unmoderated interviews with 19 technically-proficient non-customers who had built at least one agent, on how they use, evaluate, and measure agentic platforms — internal workflow automation dominates, integrations and strict-rule handling drive perceived value, and time-to-value substitutes for measurable ROI."
---

# Market agentic use cases research report

> Source: Confluence — Research & Insights (UR) space. Authored by Zen Ren. Unmoderated study, N=19 non-Algolia-customer technically-proficient agent builders. Not screened for working on search SaaS products, though a few did.

We interviewed 19 people (unmoderated) about their personal use cases building agents. They were non-customers, all technically proficient, with existing experience having built one functional agent. They were not screened for working on search SaaS products, but a few did.

**Respondents evaluate agentic platforms primarily by whether the agents can be effectively embedded into workflows, rather than viewing them as an end-to-end experiences enabling brand new functions.** The dominant metric they check for impact is often soft/indirect measures of time saved and work removed/produced.

Key points:

* Respondents are often harnessing agents as a more intelligent step in existing automation workflows, frequently internal ones
* An Algolia "search and discovery agent" would have many competitors: productivity platforms, LLMs that customers already own, and - for internal use cases - any native agentic retrieval on the particular platform they're pulling from.
* Proving ROI, despite being tricky in this area, will be easier if we also focus on proving time to value, even if that value cannot initially be clearly tied to metrics

## Our use case competitors aren't just other *agentic/AI* platforms: productivity is key

We should consider search/discovery agents not just as new end-to-end frontend experiences, but also **productivity accelerators for existing internal workflows**. There are still concerns about agent accuracy; internal use cases were regarded as more safe, easier to set up, and prove initial value. At the same time, the increased retrieval capabilities of agents themselves make this a complex entry point we should treat with strategic care.

Participants treated "agentic platform" as a wide category, including AI products, cloud ML stacks, developer copilots, and especially low-code automation tools. By far and away the main use cases were internal, the most common kinds being workflow automation or decision support/analytics. A particularly commonly described structure followed:

1. Incoming ticket/request
2. Categorizing the kind of problem. Sometimes deterministically, sometimes using some form of AI
3. Creating a solution/response to the ticket/request. Frequently agentic, even if the previous step was deterministic.
4. (Human-in-the-loop frequently appeared here for more sensitive tasks)
5. Pushing the solution to another destination, or even making it go live.

For example, an agent might handle incoming Jira bug reports by generating partial code or some framework that could begin to address the issue. For non-risky decisions, the agent might take it a step further: in one workflow for design artifact requests, the agent went ahead and made actual mockups and code. In most cases, *this general workflow already existed*, but involved significantly more human work, or more deterministic steps that struggled with inconsistent inputs. The utility of the agent was to handle the simpler or rote parts of the existing human step.

**A quarter of respondents had explicit search/discovery agent use cases, which were all search for internal support use.** For example, support teams used agents to easily reference across multiple kinds of documentation and especially logs to respond quicker to customer issues. Agents pose an increased blurring of lines between general retrieval and high quality search, which affects how we should think about our market. If any agentic platform can do sufficiently high-quality retrieval with flexible logic even just for backend needs, this is a variety of search and discovery too; do we want to serve this use case more deliberately? The competition for this search/discovery internal use case is being blown wide and will something we need to watch.

Many respondents are not evaluating agentic workflows as valuable in of themselves the same way they were exploring LLMs of open-ended potential - instead, **they're trying to harness a smarter form of an assistive automation that reliably integrates with their current resources.** Several respondents openly questioned the boundary between "agent" and "automation," or even used them almost interchangeably, which may impact how we want to consider market positioning. A majority used already used Zapier and n8n, and were easily able to incorporate agentic steps in those workflows as their primary use case.

## Measuring quality on agentic platforms

Although respondents feel like it's especially tricky with agentic/AI platforms to measure precise ROI in money or exact time saved, we may be able to mitigate it with time to some other form of ROI. **Two key drivers of this perception are an agentic platform that already boasts plentiful integrations to their current stack, and builders that allow for easy prompt iteration/testing that handled different kinds of rules well.**

### Evaluation of platform usability is tied to integrations and prompt iteration ease

Respondents frequently described a build process where they defined the agent's initial scope, integrated to data sources and other tools, then continually iterated prompts and examples until outputs became sufficiently predictable. Both the integration and prompt iteration for quality steps posed critical challenges.

In this research and upcoming agent monetization research, **the quality and number of integrations was emphasized as extremely important**. Respondents have experienced significant pain hooking up their existing stack with AI workflows, whether that was ensuring data was normalized, in the right schema, or wrangling poor documentation; an agentic platform that already offered strong integrations to their stack was regarded as incredibly valuable and a critical competitive differentiator.

**New big theme alert: absolute/strict rules**

**Prompt iteration posed a unique challenge to respondents: sometimes rules needed to be flexible (more like behavioral recommendations) whereas others needed to be absolute.** However, respondents had trouble establishing this distinction with agents prompts. Some repeated variations on absolute rules in the hopes that the agent would "take it more seriously"; a few others split up flexible reasoning agent steps from more strict ones. Importantly, it was the *ability to adhere to strict rules when asked* that respondents felt was a key value indicator, sometimes valuing this just as much as the overall model quality itself. Predictability being this important aligns with the perception of agents being part of automation as well as quality being tied to confidence; if one kind of output is *predictably* insufficient the same way each time, at least it can be consistently dealt with through a different tool. **We should offer clear and potentially separate methods of efficiently managing the flexible/strict rules distinction.**

Strict rules included:

* always/never concepts (e.g. in the same message, never recommend combinations of drugs that would be toxic)
* referencing specific data/locations of data (e.g. in API docsearch, only reference the guidance from the specific API version the customer was using)

(Note: this theme ended up repeating in the product strategy/monetization research done specifically on search and discovery agents.)

**Respondents iterated agentic prompts/workflows especially carefully compared to how they iterate other kinds of AI workflows**, needing more time reviewing outputs to build confidence as opposed to when they reviewed other kinds of workflows. Easy ways to test, straightforward evaluation tools linked to iteration workflows, and rollbacks will likely resonate well.

### The challenge of determining value may be uniquely mitigated by time to value

**All respondents' perception of value was heavily influenced by time saved and efficiency gains from replacing manual work.** However, this information was usually gleaned through anecdotal feedback or, occasionally, indirect metrics (reduction of tickets) from other tools rather than direct metrics the agentic/AI platform itself could offer. Because a lot of use cases were centered around productivity gains, the issues with determining ROI match known challenges in the automation field: as more time clears out, other work or more complex work pours in, blurring the impact. We may be able to take cues from the productivity/automation industry on how to better address this and increase confidence in value.

**Proving return on value remains important, and most respondents cited frustration that they didn't have a better way to measure productivity gains even if they didn't expect to have a very clear "hours work/units saved" type metric**. However, this frustration was frequently mitigated by several factors that respondents said were why they still felt investment was valuable nonetheless:

1. The inclusion of agent building tools in existing licenses (no new investments as necessary)
2. Templates or strong existing frameworks drastically reducing time-to-value
3. Very clear templates that demonstrate what it's for (versus language that leans towards imaginative versatility)

Speed to *comprehending* value gives some temporary permission for that value to be more nebulously defined than clear stakeholder report numbers. Marketing an agent builder that allows for fast setup could be an important differentiator. However, as this market matures, we should not expect this to hold true.

## Needs around observability/monitoring are still varied, dependent on confidence in agents

One of the key challenges is tracking return on investment. Precise monitoring of return value is difficult, in part because productivity enablement is historically difficult to measure, but also because current tools feel limited. Measuring investment is also challenging because the agentic platform/builder is typically bundled into an existing license or tool, so the true cost is obscured.

The more confident a respondent was about an agent's capabilities, the more they were interested in automatic retries, more robust templates/integrations, and other out-of-the-box features, and the more comfortable they were on relying on summative graphs for observation. **Many respondents *wanted* to be able to trust more autonomous behaviors from agents, and wanted to build confidence through the prompt iteration and rigorous testing.** This is a noticeable change in comfort level compared to AI research a year ago, where most didn't trust it and also didn't necessarily want to trust it.

The majority wanted a way to track inputs and outputs easily for quality iteration as the top priority monitoring technique. Respondents prioritized trackable sessions and logs over more comprehensive health-style dashboards with graphs. This, along with the majority of observation/monitoring findings, were confirmations of what was discovered in the parallel agent monitoring research, which will contain more context.

Although there's not a strong expectation (just a hope) that observability/monitoring would easily answer *return* on investment, they did still expect it to clearly illustrate engagement and direct costs incurred.

On a pure pricing perspective, being able to define marginal cost and return in clearer terms should have a positive impact on willingness to pay, especially because our products will be competing with general-purpose LLM and productivity tools too.

## Related research referenced

- **Agent monetization / pricing foundational study** (search & discovery agent–specific): cited as where the strict-rules theme also surfaced.
- **Agent monitoring research**: cited as the deeper context for the observability findings.
