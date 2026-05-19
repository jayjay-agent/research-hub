---
title: "Agent building preferences research report"
url: "https://algolia.atlassian.net/wiki/spaces/UR/pages/6349127889/Agent+building+preferences+research+report"
author: "Zen Ren (Algolia Research & Insights)"
date: 2025-12-08
tags: [agent-studio, platform-preferences, customer-research, survey, build-experience, ask-ai]
summary: "Survey of 90 customers and non-customers (n=90, 75% customers) shows clear preference for building search agents inside the search platform rather than via LLM providers — driven by perceived ease of maintenance, parity to ranking rules, and built-in analytics."
---

# Topline summary

_We surveyed 90 Algolia customers (75%) and non-customers (25%) who work in search and are familiar with agents about their preferences in how agentic search experiences should work. The purpose of this research was to identify what selling points and features would appeal most in a landscape where there's many options to choose from as it comes to building search agents._

**Overall, respondents preferred to build search agents inside their search platform (vs. through an LLM provider), primarily because they perceive it to be more easy to set up and maintain given its proximity to their search data.** Some segments are also attracted to the idea that building in the search platform might mean having closer parity to existing search rankings and better built-in search analytics for their use case.

The most important and consistent preference that users showed was building in a platform that was easy to customize/guardrail and fast to prototype at the same time. **Our strategy should be to provide a wide breadth of ready-to-go search agent templates that users can adopt quickly to demonstrate value, and easily tune as they go.** In free responses, respondents considered template customization to be much more preferable to a platform that requires building systems from scratch, even if what we provide are robust and powerful modular elements. This matches up with the pressures identified in market research (McKinsey state-of-AI, McKinsey LLM-to-ROI retail) that companies are trying to get basic agentic experiences up quickly first, to refine later.

For qualitative research on what customers expect when building with MCP specifically, see the related MCP Research Report (Confluence page 6321438743).

# Full findings

### First, some context on the segments referenced here: use cases, industry, and end goal

We asked which agentic experience the respondent felt would be most useful for their company's needs. The majority of the survey asked them about their preferences around their selected use case. The examples were deliberately broad to accommodate many industries, and are based on the findings from the Key AI Dreams and Needs report (Confluence page 6037897687):

| Hypothetical agentic use case usefulness preference | % of respondents (n=91) |
| --- | --- |
| A **search assistant** that returns the most relevant records (e.g. consumer goods, businesses, media, etc.) based on their queries/provided contexts | 47% |
| A **conversational assistant** that answers end user questions with useful summarized information or insights pulled from your content | 34% |
| An internal-facing **analytics assistant** that tells you insights about your end users' search behavior | 19% |

_In the concurrent qualitative MCP research report, respondents indicated an interest in automating search quality and analytics feedback loops._

We also asked two questions around what kind of records they have, and what kind of end goal was associated with finding the record. Although it's expected that most B2C companies want end users to "purchase a physical good," there's plenty of diversity with actual end goals, highlighting how important it is that we're specific when discussing "use case," since sometimes what purchasers want doesn't align with what ecommerce wants.

|  | Purchase a physical good | Read/learn from it | Stream, experience, or download the media | Make an appointment, reservation, ticket purchase, or RSVP |
| --- | --- | --- | --- | --- |
| B2B goods (n=18) | 100.00% |  |  |  |
| B2C goods (n=47) | 74.47% | 8.51% | 10.64% | 6.38% |
| Content or media (n=13) |  | 61.54% | 30.77% | 7.69% |
| Services, businesses, vendors (n=4) |  | 50.00% |  | 50.00% |
| Grand Total | 63.10% | 19.05% | 10.71% | 7.14% |

_(The table excludes "other" answers and tiny segments.)_

One important segment that is repeatedly called out in this research is the combined group of "Read/learn from it" end goal and "Content or media" record type, which will be referred to as the **read/learn + content segment**. They are frequently closely aligned on what they want, and are also a significantly sized segment, comprising around a third of responses.

## The most important traits to have/avoid when evaluating an agentic platform

Respondents preferred the agentic platform to have tools and analytics optimized for specific industries (rather than search), combined with high transparency for monitoring and more customization options. This also matched up with problems they wanted to avoid, like difficulties around tuning the experience.

**Recommendation: The platform should highlight how easy it is for them to continuously iterate, while having clear directions from us on how to tune these experiences for their company's unique needs.** As a counterexample, an agentic system advertised as robust and powerful with plenty of connectors and modular setup would not be as appealing.

### Features and benefits preferences

We asked respondents about benefits they would want the agentic platform to have if they were evaluating which platform would be best for their selected use case. Overall, respondents were clear about what would be most important for the platform to have: "**Agent analytics and tuning tools are optimized for your specific industry** (rather than general search experiences)," with 41% opting for it as a clear top choice above the rest.

The two benefits ranked #2 and #3 in interest also were a top interest for a few specific segments:

* Conversational assistant and B2C groups' top choice was "**More customization options** for agents (e.g. language, logic, guardrails)" at 41%.
* Analytics assistant and B2B groups had strong interest in "**High transparency and observability when monitoring** agent behavior" at 36%.
* The group for "Stream/experience/download media" top choice was "**Quick prototyping** through pre-made agent templates based on general search experiences", at 55%.

### Downsides and problems they wanted to avoid

We also asked respondents what issues they'd want to avoid in an agentic platform when considering their specific use case. _As opposed to "good things they wanted," respondents across all segments were very consistent on "bad outcomes to avoid."_:

* The big two were "**Difficult to tune or improve** the agent's language, logic, or guardrails" (57%) and "**Challenging to build** (e.g. technically complex, or poor documentation)" (52%). This was especially important to avoid for the read/learn + content segment, who rated them at 73%. _This segment's reluctance to invest a lot of time or technical resources into building is also corroborated in our qualitative research, and other trends here._
* Third is "**Weak parity with existing search ranking/rules**" at 36%.

Additional notes on segments' unique preferences:

* For the "Analytics Assistant" group, their second most important outcome to avoid was "Agent analytics capabilities are **not optimized for your industry**" (41%).
* One of B2B's top outcomes to avoid was "**Limited ability to customize** a search-specific template not optimized for your industry" at 42%. _B2B respondents were consistently more interested in having resources optimized to their industry compared to other segments, a trend also corroborated in previous quantitative research._

## Okay, but some benefits oppose each other. When it comes down to it, which one would you actually prefer?

Overall, participants showed strong preferences for building agents on their search platform (as opposed to a 3rd party LLM), for reasons including **perceived ease of maintenance, ease of build, and parity to ranking rules**. These perceptions around relying on Algolia-backed tools was echoed in the qualitative MCP research report.

**Recommendation: Marketing language should emphasize these points, and we should also consider providing a wide assortment of templates whose names instantly resonate with different use cases and are easy to start with, _even if they are functionally very similar under the hood_.** While it's also important that these templates offer easy ways to tune and adjust quickly, customers have historically repeatedly shown they trust our expertise in how a default template should be set up, and frequently want it to be highlighted.

The ultimate goal of this research was to determine the likelihood that users might prefer building agents on a third party LLM provider, using a proprietary tool or through their search provider. This was done through a variety of techniques focusing on indirect end goals and benefits. But to be comprehensive, at the end of the survey we also asked them explicitly about platforms. **Participants clearly preferred to build where the search platform was (ranked 1.3/3)**. After that, they felt middling on an LLM (2/3) and had an anti-preference for proprietary tool (2.6/3).

Many questions asked through goal-oriented methods about how much they preferred different features that were directly pitted against each other on a sliding scale. Either ends of the scale described opposing benefits that might exist when building agents on a search platform, through a proprietary 3rd party tool, or on an AI/LLM provider such as OpenAI.

We made respondents pick their preferences on a few different sliders that pitted benefits from building on one kind of agentic platform over another. **They're ordered below in order of most opinionated preference**:

### 1) Fallback behavior: search-first

When there were problems with an interactive agent experience, participants overwhelmingly preferred a search-first fallback prioritizing rote results (74%), versus an agent-first fallback that preserved assistive behaviors. This question was uniquely opinionated, with nearly all segments answering with the strongest possible preference toward search-first and away from agent-first.

### 2) Where to build: same platform where search was

60% preferred _building_ in the same platform where search was and a further 19% were neutral.

* Related question: when asked whether they preferred search agentic _functionality_ to be centralized where search was or where other agents were, 60% preferred the first option.
* For both questions, the read/learn + content segment had a bump in preference for building/centralizing in the LLM, but their overall preference was still with the search platform.

### 3) Analytics optimization: very opinionated tie between search and industry

43% prefer that analytics were optimized for search/discovery metrics, 39% prefer it optimized for industry-relevant metrics (like add-to-cart). Segments also showed different preferences:

* Optimized for search/discovery metrics: conversational assistant, B2B, read/learn + content (especially strong), stream/experience
* Optimized for industry-relevant metrics: search assistant, B2C, purchase a physical good

The results from this question points to the importance of **offering customization tools around analytics**, which also emerged as a frequent request in the free responses. Additionally, the second segment might be more relevant for the Agent Studio team to consider, whereas the first group may be of more interest to the Ask AI team.

### 4) Behavioral alignment: somewhat opinionated tie between search and industry

43% preferred that their agentic use case would have closer parity to current search ranking and rules, and 40% preferred that it be closer to industry best practices. In line with their other preferences, the read/learn + content segment had a stronger preference for search parity compared to other segments (53%).

_The next two preferences were not strong drivers - as in, it's better to not over-index on optimizing these:_

### 5) Number of connections required: lukewarm tie

Respondents were split/neutral on whether or not they wanted their use case to have more connection points or fewer. This was also the question where the highest number of respondents said they weren't familiar enough with the tradeoffs to answer (10%).

### 6) Cost optimization: lukewarm tie

Respondents were very neutral about whether they wanted the agentic solution to optimize cost effectiveness with their search provider vs. an LLM, with no segments deviating from this opinion.

## Why build agents in Algolia specifically?

When current customers were asked why they would prefer building in Algolia specifically, 33% said it was because of the "**ease of maintaining search and agents in one place,**" an opinion that was strongest amongst the search assistant and B2B segments.

The other benefits of note are "ability to plug in your own LLM to your search platform," "smoother integration/ranking rules parity with index," which were of special interest for B2B and B2C segments, and overall held interest at 15% each.

### Willingness to pay for this platform if it were on Algolia

Respondents were more price-sensitive than usual, but a deeper monetization study would be necessary to make any big decisions off this information.

A deeper monetization study is necessary to make strong assertions here, but we wanted to lay the groundwork for potential future exploration. When customers were re-shown the key benefits they wanted from building in Algolia, 37% said they wouldn't want to pay more, and 52% said they were willing to pay 0-20% more to get what they wanted. This is a slightly higher sensitivity on cost compared to other monetization studies offering brand new AI features.

The group that was most willing to pay more was the segment whose biggest preference was "the ease of maintaining agents and search functions in one place" - a good number of which were B2B. The group that was least willing to pay more were those primarily interested in an analytics assistant use case, which aligns with previous research showing that respondents tend to consider analytics as both vital and table-stakes.

_Future monetization studies should show discrete numbers and packages in a direct comparison (conjoint analysis, or techniques similar to past studies) to get a clearer picture on actual preferences._

### What other agentic use cases are they interested in?

Respondents were asked about their interest in a list of other potential agentic functions we could offer, pulled from our hackathon and proposals for next steps. There was no strong preference overall, with most tied around 18% preference, so we might benefit more from having a wide buffet of disparate options to peel off from. Agents are a new and experimental space for a lot of companies, as discussed in qualitative research, and the clearest ideas they have around it frequently revolve around chat experiences, or boosting existing experiences like Recommend-type modules or the search bar. In free response, some respondents emphasized that they were having trouble imagining alternative agentic use cases.

There are some segment preferences:

* Analytics assistant segment had 53% interest in a co-pilot that analyzes your search setup and makes suggestions for improving it.
* Some segments' strongest interest was **an extractor that could take an end-user provided recipe or a project list and extract all the necessary parts of it from the inventory**. (Segments included conversational assistant and the read/learn + content groups). This has also been a use case of interest in qualitative research, with our customer Leroy Merlin mentioning it's been a huge differentiator for them on the market (they built it outside of Algolia).
* B2B was especially interested in an agent that could dynamically change the UI of the site to match the end-user's behavior to drive outcomes.

### What did the people who tried out Agent Studio and churned feel about all this?

Those who tried out Agent Studio and churned from it voted extremely strongly for **"more customization options" as a very important feature to have (71%)**, the highest of any cohort for that feature. Although the potential use case of Dynamic cost optimization with tool coordination was the lowest-interest use case in general, for Agent Studio churners, it was actually their top choice, tied with shopper guides.

Churners were also unusually consistent about what they wanted to avoid, which was a similar flavor: "limited ability to customize a search-specific template not optimized for your industry." In terms of what problems they didn't care about, they rated few connector options and weak parity with search rules and ranking.
