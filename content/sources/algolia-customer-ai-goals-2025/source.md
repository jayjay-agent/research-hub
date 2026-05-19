---
title: "Key Customer AI Goals, Challenges, and Dreams Research Report"
url: "https://algolia.atlassian.net/wiki/spaces/UR/pages/6037897687/Key+Customer+AI+Goals+Challenges+and+Dreams+Research+Report"
author: "Zen Ren (Algolia Research & Insights)"
date: 2025-08-01
tags: [algolia, customer-research, gen-ai, conversational-search, personalization, multi-agent, mcp, analytics, ecommerce]
summary: "Qualitative study of 10 enterprise Algolia customers (mostly eCommerce tech leadership) on their biggest search/discovery goals and how they would ideally use generative AI to solve them."
---

# Key Customer AI Goals, Challenges, and Dreams Research Report

> Source: Confluence — Research & Insights (UR) space. Authored by Zen Ren. Internal Algolia research, August 2025. This report is the deep-qualitative phase; a wide-scale survey is planned as a follow-up.

This research project asked businesses about their biggest goals/problems with search and discovery, and included an ideation exercise on what hypothetical AI solutions could address that perfectly. *We'll follow up on these deep findings with a wide-scale survey.*

## Topline summary

We spoke to 10 current Algolia customers who were tech leadership at enterprise companies, mostly eCommerce, with a bit of content and SaaS representation. All have strong influence/final say over what new site development tools their company should buy, and are also the key person responsible for building a POC of new search/discovery software. (Mostly "tech leadership" type people.)

Participants were extremely clear about the Gen AI functions they wanted to solve their biggest needs. In summary, **most participants are entirely focused on creating conversational experiences that are exceptionally 1:1 personalized by combining many data sources (like CDPs to CMSs) with the search data**.

| **Gen AI functions** | **Context** |
| --- | --- |
| **Conversational search** | Universal agreement this would be **the most useful solution** to solve for the increase of contextual queries they're seeing / market pressures |
| **1:1 ultra-personalization (going far beyond)** | Seen as the **next frontier** of relevance and was the highest priority in most participants' actual planned work this year |
| **Analytics and tuning assistance** | Highly desired for **optimizing their configuration**, measuring ROI, and gaining experimentation insights |
| **More data inputs and integrations** | No matter the shape of the solution, all participants wanted Algolia to **access more key data** to take discovery to the next level (e.g. CDP, CMS) |

Overall, our customers strongly believe that **deep personalization on a highly contextual level** represent their immediate future needs. They're motivated by observable shifts in query data, external market changes, and the rising dominance of third-party LLMs.

The core recommendation is *not* to build out the exact products they described, but rather produce **smaller orchestratable functions** that speak to their desired workflows and end user experiences. This would require us to invest strategically in MCP and multi-agentic frameworks, which also allow us to be nimble with this changing environment and not just our customers.

## Main report findings

### Our customers' current goals and problems

For the next few years, our participants are **building deep 1:1 personalization and contending with how LLMs are rapidly changing the discoverability of their products**. They're bogged down by relevance strategies that are too spread across tons of rules and rigid custom ranking scores. Investing in AI is attractive yet challenging because of difficulties around establishing and proving ROI. A challenge we'll face is competing with ChatGPT's abilities, since they're already paying for that license.

**Key customer gap we must address**: they need more flexibility and orchestration of our tools to achieve their goals while still satisfying their end user.

#### Their upcoming work focuses on personalization and addressing LLM search

> *I want to show my customer something that they have the propensity to buy based on my knowledge of who they are - not just the one our company likes, or that's done the best on sales, or even the most relevant to their search? I mean, what is relevance? Other than (personalization), actually? **Relevance is just the strategy that gets it sold.***

**Aggressive personalization is the name of the game now; GenAI plays must loop in Perso:**

"Relevancy" has always been our customers' main goal, but the research participants now believe the best investment in achieving that is **deep 1:1 ultra-personalization** across all search and discovery touchpoints. This would go beyond our current Perso offering to use information as specific as individual preferences to enact actions as comprehensive as changing the site's UI - all to support every part of the end user's journey.

Example use case: A beauty retailer helping a customer who is a "brunette impulse shopper" should deprioritize blonde hair products while exposing "buy now" buttons right in PLPs.

Participants generally felt direct keyword relevance optimization had already been maxed out, and that shifting to **ultra-personalization would have the biggest impact now on their KPIs**. Most participants had major plans to invest in/already working on ultra-personalization for the next year, ranging from capturing more 1P data to trying Perso competitors like DynamicYield who have experimentation capabilities than us.

Third-party stats:

1. 71% of consumers expect companies to deliver personalized interactions, and 76% feel frustrated if this doesn't happen (mckinsey.com). Importantly, **84% of customers say being *treated like an individual person*, not a whole segment, is very important** to winning their business (limespot.com).
2. Many brands overestimate their personalization quality - 67% of retailers believe they excel at online personalization, but only 46% of consumers agree (contentful.com).
3. Personalization drives loyalty and higher lifetime value. Nearly 49% of shoppers say they'll become repeat buyers after a personalized shopping experience with a brand (limespot.com). Likewise, 71% of consumers would shop more frequently with companies that provide personalized experiences (contentful.com). **Critically, 83% of customers are willing to share their data if it leads to more relevant experiences** (limespot.com).
4. Marketers have nearly **doubled budget allocations for personalization**, from 22% in 2023 to ~40% now (contentful.com).

**ChatGPT's popularity has resulted in a few critical adjustments in next-year goals:**

1. In the last few months, participants have noticed a rapid increase in end users asking fully contextual queries, so they're beginning to explore possibilities around good conversational search.
2. Participants believe that more and more product discovery will now happen off-site, on third-party LLMs (some already see changes in referral traffic). **A few participants' key goal this year is to future-proof by trying to make it easier for third-party agents** to scrape and promote their products.
3. Whereas data quality used to be the most urgent problem to solve, the urgency has abated somewhat with LLMs' ability to interpret messy data. However, they still need normalization and transformation abilities for foundational things like easy faceting and consistent product names.

#### Key obstacles for us and them

The best thing we can do for our customers' key obstacles is to **add nimble functionality in a way that's reusable across multiple tools**. Their problems won't be solved by big, comprehensive product releases because they don't have the resources or interest in totally rearchitecting for foundational AI solutions despite the pressure from changing markets. However, they're very interested in how AI can enhance the behavior of various needs and aches, namely around personalization and getting the most out of their data.

The core obstacles were being able to properly use their data or enact their goals with Algolia:

* Most of our participants were highly focused on personalization goals for the next year, but the **quality of their personalization data as well as their ability to act upon it** was not high enough to do what they really wanted. As we've seen with other research, many have responded by creating huge quantities of rules to try to imitate highly specific segmentation, but what they truly want is 1:1 personalization abilities. They currently lack the development and manual task resources to properly maintain their backup solution.
* Similarly, some of these rules and custom ranking score efforts are meant to **balance their internal KPIs around things like high-margin boosting versus accuracy in results** for the user. They want to be able to pick different ranking strategies for each user/segment/collection, but it's impossible to straightforwardly change foundational ranking logic on such a case-by-case basis.
* Some participants have **large, siloed development teams** that work on different parts of the search and discovery process, making it difficult to build experiences across multiple parts of the customer journey (if discovery and checkout are different teams) or coordinate with what was built elsewhere (rules fighting with custom ranking).

There were AI-specific challenges too. Most of what prevented participants from easily implementing AI-based solutions were related to **uncertainties around AI's value, especially in the midst of so many massive changes**:

* The really big one is that all participants' companies except one **already pay for a ChatGPT license**, mostly to help with internal admin and programming tasks. But this makes it available for exploration with generative end-user-facing projects. This affects two AI adoption factors:
  * First, adopting a new highly-targeted AI tool became less appealing if they could quickly imitate the function at a close enough quality level in ChatGPT. Several AI solutions participants explored got tossed for this reason.
  * Second, most didn't want to pay for many AI licenses and wanted to consolidate where possible. Algolia is a broad enough platform to not feel immediately redundant with whipping up a quick ChatGPT solution, but generative AI products still need to offer something unique here to make investment worth it.
* Although their leadership teams were generally very interested in AI, with some pivoting this year's OKRs to explore it, this was often paired with hesitancy around truly implementing it because of **AI-generated product quality inconsistency, security concerns, and difficulty around predicting how demanding their market would really be about customer-facing AI tools**. New AI tools were often subject to deeper scrutiny and a much longer trial period to evaluate returns, compared to non-AI tools.
* It's hard to see/prove ROI on investments or simple changes, especially on expensive AI products like ours, and without A/B testing.

### The AI product ideas

Participants were extremely consistent about what kind of dream AI solution they'd want to solve their biggest needs - more than typical for this kind of research. There were also strong themes about what kind of functions they'd hope any AI search and discovery solution could offer.

Ultimately, all participants wanted **a layer of smart, contextual interpretation** of multiple needs + queries, and the ability to **automatically change the UI and search experience** as a result of that interpretation. Every tool they envisioned contained this pairing of needs.

#### Product 1: Conversational search

> *"It should be like a good salesperson in the store - they listen to what you want, they give the customer an example, the customer refines what they mean, they fetch different things. They understand the natural language. So how do you do that better, on a personal level?"* — Site Lead, B2B/B2C fashion

All participants except one brought up "conversational search" as the most desirable dream AI solution that would solve their biggest needs. Many have seen critical changes in how their users are searching, with a sudden increase of fully contextual queries that include questions, use case, and desired benefits - like the searcher is already expecting LLM capabilities. Our participants are also seeing their own competitors start offering similar experiences on their sites, and are exploring competitor tools to Algolia that offer this directly.

Users envisioned conversational search in many different ways, but it was universally more important that the solution was capable of **interpreting and executing on conversational end user demands,** rather than the UI/content of responses acting conversationally themselves. That said, for the most part, they did envision a two-way based conversation.

**However, participants were averse to any UI imitating "chatbots of yore."** They envisioned other UI possibilities: a helpful inline/in-results module on pages like Supergoop's (powered by Envive), a conversational side panel like ChatGPT's Canvas, or a query-suggestions type module underneath the search like Bed Bath & Beyond that only appears after a query begins. Both home goods retailers wanted this to work as a true assistant for their in-store search screens.

Other key functions they wanted:

* Again, **personalization was critical** - either pulling from 1P data or being able to deeply understand the uniqueness about each searcher's newly input context.
* The UI should not feel interruptive, and must work holistically with other elements on the page. **Our users want to signal that traditional keyword search is still easily accessible**, because it's currently still the majority of search queries (they estimate this will change).
* This solution might not be UI-based, but actually work as **a multi-agentic system** that could be called to change search rankings for each individual, use a different batch of Rules, offer different products in Recommend modules, or suggest a limited but highly tailored batch of results in a more chat-based interaction. This aligns with GenAI's efforts on an API toolkit and Search's work on MCP servers.

Example use case:

> *\[A beauty goods shopper\] tells our conversational assistant "I need a skincare bundle for dry, aging skin." The assistant looks up lotions that won't contradict each other but address both concerns, then shows some bundles.*
>
> *The shopper clarifies "I'm on a budget," and the assistant tries again with some new bundles that are just a limited set of the full results. Maybe the listing page also updates at the same time. Maybe the assistant says back that the shopper can keep refining and give context and then feel more confident that the rankings and suggestions are exactly meant for them and their unique needs.*

For some participants, this idea was a deep dream they said wouldn't be possible today given limitations of AI and our platform. But others had already tried to work on simpler versions of this. Their main obstacles included:

* The classic security concern of using end user data, which some had addressed by investing heavily on 1P measures this year
* The lack of easy orchestration/communication between Algolia tools, because they're built to be UI first rather than logic systems or "**agentically**" first, as one participant put it
* The impossibility of easily changing ranking scoring methods. This was two-pronged - they didn't have a way to give data to Algolia about different strategies it should consider when exposing products to end users, and the ranking scoring itself was not programmatically very changeable. Most had tried to address it by having a ton of rules and different indices for segments, which made rules management even more difficult.

Third-party stats:

1. An overwhelming **96% of shoppers say more businesses should implement chatbots instead of traditional customer service** (itransition.com). **34% have already used chatbot functions to learn about or buy products.**
2. **66% of U.S. consumers** express *strong* interest in trying generative AI–powered shopping assistants, a shift that could **double the usage** of conversational commerce channels (itransition.com).
3. In a large-scale study, shoppers who engaged with an AI chat assistant had a **12.3% purchase rate versus 3.1% without** (hellorep.ai). Returning customers who used AI chat **spent 25% more per order** than those who didn't. Shoppers complete purchases **47% faster** when assisted by AI, by quickly answering questions and refining queries.

#### Product 2: Analytics assistant

> *"What I imagine is that I have the catalog, and analytics can tell me which attributes are relevant and give them a certain score. We add analytics from Google and our CRMs, customer historical context, use them to feed one big AI engine. The analytics should also able to personalize for every individual. We should be able to send Algolia this information so it spits back a recommendation, or context tag, or something. But I want to have another layer that is NOT product data, but is known by Algolia, upon which we can strategize rules."* — Product Manager, luxury B2C parent company

The second strongest idea from participants was for an **analytics AI solution that exposed deeper insights and improvement action items**. This is a critical task done manually today: users want to optimize configurations and also determine out key product or content development needs based on queries. They want this workflow to be easier, more efficient, and optimized with Algolia's knowledge about how to best configure every setting. *This idea was more desired amongst participants with merchandising responsibilities on top of their existing development work.*

The core ability they wanted was to ask **this solution natural-language queries about search performance**, such as "How has interest in our new purple colorway performed with search interest and conversion?" It's a mirror to their desire for conversational end user search - they want the AI to understand their true intent when it comes to digging through analytics instead of manually pulling up charts. We should consider this to be less of a direct product feature request, and more just them feeling that because LLMs can now understand motivation and context, they want a way to add those inputs so that the suggestions they get are perfectly targeted.

Example use case: Generic suggestions without reasoning don't generate as much confidence compared to hearing something like "because you have highly technical records and a lot of them and your goal is to make customers save articles rather than sell products, you should improve your configuration this way."

Some of the other key functions they wanted from analytics assistance:

* **Processing query data with LLMs** so the solution's insights aren't so fixed on individual keyword performance but rather traits of them (e.g. "searches including a color", or a collection of terms related to "shirts")
* Making suggestions of **how to optimize Algolia settings for particular searches** (e.g. noticing that on certain collections, end users opted for cheaper items than typical, so price point should be given a stronger boost). A few wanted the analytics solution to have the power to run its own A/B tests and make adjustments on its own, but at minimum they wanted proactive suggestions that could be easily implemented.
* Highlighting categories of queries that did well in different ways (e.g. even if the item was infrequently searched, it had a high click or conversion rate).
* *Although a few explicitly wanted the analytics solution to look like a Merchandising Studio-style breakdown of explanations of rankings, it was not a critical ask or expectation that this solution be within the Algolia UI, but rather that these actions were possible generally, able to aggregate many different inputs.*

A few had already tried to create their own custom dashboards for this, but hadn't had the time or resources to think about an LLM layer that would answer questions more holistically. Most participants also use Google Analytics and envision Algolia data meshing more directly with what's available there and in other reporting tools.

Third-party stats:

1. By **2026, market research estimates that natural language will be a dominant interface for data querying**, improving data consumption and accessibility (ud4d.com). Some modern BI platforms now embed AI assistants for NL querying (thoughtspot.com).
2. Modern analytics tools are focusing on usability for non-analysts. For instance, **conversational BI and no-code experiment platforms** let merchandisers ask questions or set up tests without IT help. This is crucial when nearly **49% of companies say their culture lacks support for experimentation and learning from failure** (vwo.com).

#### Other AI ideas

* **Builder assistant**: this one mainly came up with those on tighter budgets and smaller development teams. They wanted a resource where they could ask about their technical configuration of Algolia, get help debugging, and recommendations for where to improve. It often came up as the backend "job to be done" of why they wanted an Analytics Assistant idea as well, which took precedence over getting code assistance.
* **Image visualization personalizer**: this came up very frequently in the context of what a truly personalized conversational search could look like. Multiple participants across B2B and B2C wanted elements of the images of their results to change to appeal to the individual consumer. For example, a B2B custom office supplier envisioned that if a bakery was looking up new stationery, the images could come pre-loaded with a bread logo. A home goods seller imagined that if the conversational search knew the user was in a cold location or had a "cold environment use case," they could show outdoor based results in a snowy background.

### Consistent themes in their dream AI solutions

Across all forms of the AI ideas, there were a few consistent themes in what participants believed would make for a perfect AI solution. The biggest one by far would be **the ability to give Algolia way more data input so we could be smarter about what they needed**. This strongly centered around CRMs and historical purchase data to help with their personalization goals, but also included being able to give deeper product data that included sales numbers and non-relevance-related context, their own business goals, desired KPIs to move (which could be seasonal and product specific). Domain knowledge for improving things like conversational search was important: both home construction retailers said they would need to upload their internal training manuals for shop assistants. A few customers had attempted to give Algolia more useful contextual information like sales numbers, but the latency made it not worth it.

Our participants imagined that our **"engines" for existing and future tools could talk with each other on the backend in some way**. Participants felt this would make it easier for them to orchestrate different logic systems, for us to make smarter optimization suggestions, and build more trustworthy conversational search responses.

As usual, everyone wanted way more ability to dive into the analytics, and deeply understand the "why" behind ranking or recommendation decisions, especially for the dream AI product. Several imagined a Merchandising Studio-like surface where they could visualize outputs and click on rankings to see how the logic shifted place by place. (We should think of this less as an actual feature request and more like them expressing their need for transparency, especially with orchestration, to make business needs like explaining value or tuning strategies a lot easier).

### A really big note on feasibility

The AI landscape is shifting very rapidly. As mentioned previously, **there's a ton of hunger and pressure for exploring new AI solutions, but the business ease around the moment of actual implementation hasn't fully caught up.** Although there's a ton of hunger around these ultra-comprehensive solutions, what you see when you look at their real recent explorations is that things are a lot more piecemeal, and oriented around time-savings and efficiency with current systems.

For example, the two companies who explored guides-like solutions from third parties and then scrapped them in favor of ChatGPT both noted that ChatGPT actually performed worse, but it was something they were already paying for, and the reason they were happy with their decision was because of how much their content and brand teams were freed up for other work. Other AI solutions that other participants tried and were satisfied with were also primarily only talked about as time savings more than anything else (though a big part of this is because this is the most provable ROI at the moment).

**Only one company currently seemed prepared to do a lot of foundational backend work to re-orient deeply around personalization.** Others attempted personalization in discrete sections, organizing by index, or creating batches of rules that they wanted to easily copy from site to site. Our participants generally believe their data is not in an ideal place for comprehensive change, and even if LLMs advance to perfectly solve the interpretation aspect of messy data, our customers still need it to be cleaner for other more UI-based reasons. They also need time to get past data restrictions to build deeper personalization data for Algolia to actually use. *Again, we may see this rapidly change in the next few months, because last year AI exploration was still a big hypothetical for most interviewees in research and not a pressing need.*

What we're seeing *for this immediate moment* is that **a solution that allows for better orchestration of logic - one that can lay the groundwork for these bigger dreams - may be more nimble and practically applicable**. Or as a few participants explicitly put it, they want to harness us as multiple agents to make smarter decisions about their implementation. Thinking about how our systems can interlink smoothly to better address every part of the end user experience is important in the upcoming months.

## Appendix

Research was based on the multi-series foundational project for the GenAI team.
