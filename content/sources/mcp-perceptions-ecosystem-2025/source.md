---
title: "MCP Research Report: Perceptions, Ecosystem Expectations, and Use Cases"
url: "https://algolia.atlassian.net/wiki/spaces/UR/pages/6321438743/MCP+Research+Report+Perceptions+Ecosystem+Expectations+and+Use+Cases"
author: "Lorna Rivera (Algolia UXR)"
date: 2025-12-05
tags: [mcp, agent-studio, qualitative, perceptions, ecosystem, use-cases, confidential]
summary: "Qualitative interviews with 12 developers/engineers (8 customers, 4 non-customers) on how they perceive Algolia's MCP, which AI ecosystems they expect it to integrate with, and which use cases matter most — top three being feedback-loop automation, multi-source search, and outbound bridges to external AI platforms."
---

**Confidential:** All findings and data within this document are proprietary to Algolia & not to be shared externally

## Executive Summary

| Theme | Key Insights | Key Recommendations |
| --- | --- | --- |
| **Perception** | Customers associate MCP with Algolia's reliability and expect the same stability, transparency, and governance. Trust is high but untested. | Provide example-driven documentation, transparent testing, and clear permission models to reinforce trust and signal enterprise readiness. |
| **Ecosystem Fit** | Customers primarily work within established AI ecosystems (OpenAI, Google, Anthropic, Microsoft) and prefer integrated platform tools like Agent Studio over external frameworks. | Prioritize verified integrations with major AI ecosystems and deepen native MCP support in Agent Studio before expanding to frameworks. |
| **Use Cases** | The most valuable use cases include automating search analytics, unifying multi-source search, and extending Algolia into external AI platforms. | Launch a "search optimization" workflow as the first MCP use case, followed by connectors for multi-source search and external AI platform integrations. |

---

# Detailed Report

### Background

This report presents findings from 12 participants (8 customers and 4 non customers) about how they perceive MCP, what ecosystems they expect it to work with, and which use cases matter most to them. This research explored the top opportunities for Algolia.

### Research Objectives

Through this research, the FX team wants to:

* Understand how users perceive Algolia's MCP and its value in their workflows
* Identify which ecosystems, tools, and platforms users expect MCP to integrate with
* Uncover the most important and high-impact use cases for MCP adoption
* Validate key product hypotheses outlined in the PRD

### Who did we hear from?

UXR ran interviews with 12 participants (8 customers and 4 non customers), focusing on engineers/developers who use Algolia or manage search at their organizations. Most came from MM companies across SaaS, eCommerce, and content/media sectors. The group included Pragmatic Leaders, Scrappy Tech Experts, Tech Guardians, and Business Data Navigators. Participants were recruited via the Algolia PDB, MCP beta signups, and UserTesting's panel. Each participant needed to have experience setting up AI agents and to have built a proof of concept or new software project within the past six months.

---

# Findings

## How do customers perceive MCP?

Customers associate MCP with Algolia's reliability and expect it to deliver the same stability, transparency, and control. Clear documentation and testing are critical to maintaining that trust and positioning MCP as credible enterprise infrastructure.

### Customers project Algolia's reliability and trust onto MCP, reinforcing its potential as a trusted enterprise integration layer.

Customers have varying levels of familiarity with MCP but naturally associate an Algolia version with the company's reputation for reliability, performance, and governance. Even without detailed knowledge of the protocol, participants expect an Algolia-built MCP to provide the same stability, transparency, and enterprise-grade control they already trust in Algolia's products. This perception positions MCP as a potential gateway for driving greater API adoption and strengthening long-term customer loyalty.

> "We'd expect the same reliability and uptime as Algolia's core search." — Sr. Frontend Developer, Customer

> "I would want to get it [connector] from Algolia… I really like the integrations that you provide… They're top notch, you know, the Algolia DocSearch is wonderful." — Frontend Developer, Customer

### Developer trust in MCP depends on clear documentation, performance, and transparency in data handling.

Developers see thorough, example-driven documentation and transparent testing as proof of a product's reliability and maturity. Runnable demos, clear permission models, and visibility into system behavior reinforce the confidence customers already place in Algolia. Enterprise users expect MCP to offer the same level of stability, uptime, and data transparency as Algolia's core products. Importantly, MCP connects directly to customers' existing indices and does not store their data differently, maintaining the same security and governance standards they rely on today. Without clear documentation of these practices, MCP risks undermining the trust that defines Algolia's reputation.

> "Good documentation is key... bad one could make adoption difficult... I think we have a lack of maturity on the AI/MCP side right now." — Product Manager, Customer

> "I would expect there to be transparency and to make sure it doesn't steal data from anyone or utilize certain data in an incorrect manner and respect privacy policies." — Engineering Lead, Non Customer

## What ecosystems do they expect MCP to work with?

Participants primarily operate in major cloud and AI ecosystems (OpenAI, Google Gemini/Vertex, Anthropic Claude, and Microsoft Copilot) and expect MCP to integrate smoothly within those environments. They value official documentation and registry listings more than marketplace presence, and they want deployment flexibility that fits their team's scale and compliance needs.

### MCP must build or maintain bridges between Algolia's Agent Studio and the major AI ecosystems where customers already work.

Participants reported working primarily in established AI environments such as **OpenAI, Google Gemini, Anthropic Claude, and Microsoft Copilot**. Many expressed interest in building search-related agents directly within Algolia but emphasized that these agents must also connect to the broader ecosystems where their teams and customers already operate. For MCP to succeed, it needs to integrate seamlessly with these major AI platforms rather than compete with them. This alignment will reduce setup friction, fit naturally into existing workflows, and make Algolia the preferred environment for developing intelligent, search-driven agents.

> "We are heavily investing on creating our own AI agents and enriching our data with AI... The eventual goal is that AI-based search and discovery will replace keyword-based search... We are using ChatGPT, Microsoft Copilot, and Google Gemini for different workflows... we have paid access to GPT and Microsoft Copilot." — Backend Developer, Customer

> "We have evaluated GPT, Claude, Perplexity, Gemini, and other APIs.. we are building agentic AI experiences for our users... Currently building with LangChain and custom code but integrating across AI platforms as they improve." — Developer, Non Customer

#### Which AI/LLM platforms or tools are you currently using or planning to use?

| Platforms/tools | Customer Count (N=8) | Non Customer Count (N=4) |
| --- | --- | --- |
| ChatGPT (OpenAI) | 7 | 4 |
| Google Gemini | 6 | 3 |
| Claude (Anthropic) | 5 | 3 |
| Microsoft Copilot | 3 | 4 |
| Salesforce Agentforce | 0 | 1 |
| AWS Q | 1 | 1 |

### Discoverability in official channels builds credibility and accelerates adoption.

Developers expect to find MCP where they already look for SDKs and APIs, namely, in Algolia's official documentation, registries such as npm and NuGet, and within Agent Studio. They are skeptical of generic marketplaces, which they associate with low-quality or unsupported tools (e.g. lacking or outdated documentation). Visibility in trusted, official channels signals authenticity and accelerates onboarding among technical users.

> "I would expect directly from Algolia because that reduces my dependencies and gives me liberty to work with it... The easiest would be native integration with Algolia… just go to the dashboard and choose my MCP server, tie my data source, and that's it... low-code, no-code kind of functionality." — Engineer, Customer

> "I think the easiest would be to make it available in some sort of package registry, either as a NuGet or npm package or something, documenting it well... I would expect to find Algolia's MCP in the documentation together with SDKs and developer tools." — Backend Developer, Customer

> "Not in the marketplace. Marketplace is full of these new boom businesses that confuse you and promise you false hope. I'd prefer a registry or vendor website because that way you can hold them accountable instead of marketplace mishaps." — Engineer, Customer

#### Hypothetically, if you were trying to connect Algolia to an AI agent, where would you expect to discover the connector?

| Platforms/tools | Customer Count (N=8) | Non Customer Count (N=4) |
| --- | --- | --- |
| Directly from Algolia or vendor (website/docs) | 8 | 4 |
| In a registry (e.g. Claude connectors) | 4 | 3 |
| In a marketplace (e.g. Salesforce, OpenAI tools) | 1 | 3 |

### Customers are split between platform tools and external frameworks but prefer platform solutions when they meet their needs.

Participants were split in what they are currently using, with some relying on external frameworks and others using platform tools. Most explained that this choice was based on necessity rather than preference. They said they would rather build in platform environments such as Algolia's Agent Studio because they expect those tools to be simpler, easier to maintain, and more reliable. They typically turn to external frameworks (e.g. LangChain or AutoGen) out of necessity such as when platform tools do not fully meet their technical requirements, flexibility, or cost constraints. This indicates that Algolia should prioritize robust native MCP integrations within its own platform while preserving optional compatibility for developers with complex or specialized needs.

> "I would prefer the platform-built-in agent tools because as a company that's what they would advise us to go with. We do learn independent ones, but being a company we'd still use only the built-in tools, not external ones." — Engineer, Customer

> "Right now we're using our own custom code, but if Algolia Agent Studio could have full access to the API, I'd consider using it because it would save time. The key is flexibility... if I can still customize, then yes." — Backend Developer, Customer

> "Right now we are building with LangChain... considering they're releasing even better solutions day by day, I think for now we are just keeping it low. We are trying to reduce the cost of all of that, and for that reason we are building independently the custom codes... maybe if a bigger chunk of our operation could be handled by the vendor's platform tool, we can just add some custom changes to it in order to fit it into our pipelines." — Engineering Lead, Non Customer

#### Customer responses to "How do you usually approach building AI agents?"

| Build preference | Customer Count (N=8) | Non Customer Count (N=4) |
| --- | --- | --- |
| I use a platform with built-in agent tools (e.g., OpenAI Agents, Salesforce AgentForce, Vertex AI, AWS Q, Microsoft Copilot) | 3 | 2 |
| I build independently (custom code or frameworks like LangChain, AutoGen, CrewAI) | 2 | 1 |
| I use both depending on the project | 3 | 1 |

### Deployment preferences appear to vary by company size, but more research is needed to validate.

Interview feedback suggests that enterprises and smaller teams may differ in how they want to deploy MCP. Larger organizations seem to prefer multi-server setups for compliance, uptime, and data isolation, while smaller teams lean toward managed instances that reduce maintenance effort. These observations are directional and should be validated through additional research to understand how deployment preferences align with team size, maturity, use cases, and security requirements. Supporting both options would allow MCP to serve a broad range of customers and governance models while maintaining operational simplicity. Participants also did not explicitly distinguish between self-hosted and Algolia-hosted MCP; their preferences were driven instead by the level of control, isolation, and operational effort they need. More research is required to understand how teams weigh self-hosting versus using a managed Algolia option.

> "We would want multiple servers because we're a global company and it would reduce downtime." — Backend Developer, Customer

> "It doesn't really matter if it's a separate one [server] or not, but being able to specify the parts of the Algolia API that it would have access to would for sure be important. So if you solve that by splitting it into multiple MCP servers or just having one that you could configure to have access to certain things, that would be great... It's a bit scary to kind of give an AI agent access to an MCP server that could potentially delete indexes in production. That I probably would not do." — Backend Developer, Customer

> "If performance needs are low, one managed instance is fine, but high-performance systems may need separation." — Engineering Lead, Non Customer

## Which use cases matter most for MCP?

Participants see the greatest value in MCP use cases that automate work, unify data, and extend Algolia into existing AI tools. Its success will depend on secure, well-documented connectors that enable these workflows with minimal setup.

### MCP Top Use Case Summary

| Use Case | Tools / Connectors for Agent Studio | Interest Level |
| --- | --- | --- |
| **Automating search quality and analytics feedback loops** | Algolia Search and Analytics APIs, rule management tools, CRM or BI integrations (e.g., Slack, dashboards) for reporting and validation. | High |
| **Multi-source, context-aware search experiences** | Connectors for CMS, CRM, Documentation tools, GitHub, Stack Overflow, and cloud services. | High |
| **External discovery, support, and commerce integrations** | Connectors for external AI ecosystems (OpenAI, Salesforce, Google), support tools, and commerce systems. | Medium |

### Top Use Case: Automating search quality and analytics feedback loops.

Participants consistently highlighted automation of search performance and relevance as the most common and practical use case. They want agents that can analyze logs, detect "no results" patterns, and suggest relevance adjustments while still allowing human approval before implementation. Automating these analytics and feedback loops offers a low-risk, high-value way to adopt MCP by combining human oversight with data-informed recommendations.

> "We want the AI agent to automatically tune indexes, check what's in the catalog vs. what's searchable, and make the proper adjustments... If customers are searching for products in the catalog but not finding them, have it run checks and fix that." — Backend Developer, Customer

> "Number of clicked results and the 'no results' indicators... Keywords can be really close but are not grouped… it's painful because we have to add up close keywords manually to find what users typed most often with no results... It could automatically produce reports and attempt some rules on its own to improve efficiency based on clickthrough rates... I would like to first validate the changes made by the AI." — Product Manager, Customer

### Second Use Case: Multi-source, context-aware search experiences.

Participants described a strong need for search experiences that draw from many data types such as product catalogs, documentation, wikis, and CRM systems to deliver richer and more contextual results. They saw MCP's potential to standardize and streamline access across these systems as central to advancing AI-powered search. This capability positions MCP as the bridge between search, AI retrieval, and personalization, enabling intelligent and connected experiences without requiring major architectural changes.

> "Would want an agent that understands the customer problem or use case, pulls relevant docs to answer, but then responds in a narrative that's tailored to the workflow the customer needs to do... connect to our source code and Stack Overflow, Terraform, CRM, and cloud services... The most important thing about an agent for us is being able to combine different sources together... want the response to include the source for different information to verify." — Developer, Customer

### Third Use Case: External discovery, support, and commerce integrations.

Participants envisioned MCP as the connector that allows Algolia-powered search and content to appear directly within external AI platforms such as ChatGPT, Salesforce AgentForce, or Google Gemini. They saw value in enabling these systems to securely access verified Algolia data (e.g. product details, documentation, or catalog results) so users can find accurate information without leaving the interface they are already using. This use case positions MCP as a way to extend Algolia's reach beyond owned environments and power discovery experiences across the wider AI ecosystem. Note that this use case differs from product feeds, which push structured data to downstream systems for indexing or advertising. MCP instead provides real-time, permissioned access to Algolia data when an AI agent requests it, ensuring contextual accuracy and freshness. While this represents a compelling opportunity, further research is needed to understand how customers would want to enable and govern these connections, for example, what data they would expose and how permissions should be managed.

> "If Algolia Agent Studio could connect with my own agent, I could essentially outsource the Algolia agent to Algolia... It'd be a huge advantage if I could have whatever agent I build inside the Studio talk to my own agent... so I could use agent-to-agent communication." — Backend Developer, Customer

> "Would want an agent that helps reduce customer support tickets for when documentation doesn't exist... so the support team doesn't have to look in the deep wiki... the agent could instead, since the answer is often found there." — Frontend Developer, Customer

> "That could be quite cool... something that comes up a lot is shipping restrictions or stock availability. Customers could get that information without contacting us." — Frontend Developer, Customer

---

# Recommendations

Recommendations are listed in suggested priority order based on customer feedback.

| Recommendation | Insight + Implication | Algolia Opportunity | Priority |
| --- | --- | --- | --- |
| Deliver complete, example-driven documentation and transparent testing for MCP at launch. Include runnable demos, permission explanations, and clear system behavior visibility. | Developers see clear, example-driven documentation and testing as proof of reliability and product maturity. Poor documentation blocks adoption and weakens trust. | Algolia's trusted brand in reliability and developer experience gives it the advantage to set the standard for clarity and transparency in AI infrastructure. | Critical |
| Reinforce MCP's reliability and governance through clear messaging, uptime guarantees, and transparent product behavior. | Customers already expect MCP to meet Algolia's high standards for reliability, uptime, and observability. | Algolia can extend its reputation for reliability and compliance into the AI infrastructure space. | High |
| Integrate MCP with leading AI ecosystems (OpenAI, Google Gemini, Anthropic, Microsoft Copilot) and release verified connectors for each. | Most customers already work in major AI ecosystems and want MCP to fit seamlessly within their existing environments. | Algolia can expand its presence across key AI ecosystems and become the trusted data bridge between enterprise search and intelligent systems. | High |
| AI Assist team should consider leading the development of a preconfigured "search optimization" MCP workflow that automates analytics and relevance recommendations with human approval. | Automation of search quality is the most practical, low-risk entry point for AI adoption. | Algolia can showcase AI-driven ROI while maintaining human oversight. | High |
| Deepen native MCP integration within Agent Studio before expanding to external frameworks like LangChain or AutoGen. | Customers prefer platform-based tools like Agent Studio for simplicity and reliability, using frameworks only when platform options fall short. | Algolia's control of the full Agent Studio experience allows it to deliver a reliable, low-friction MCP integration. | Medium |
| Build standard connectors for multi-source data systems (CRM, CMS, wikis) to enable context-aware, unified search. | Customers want unified search that draws from multiple data types for richer results. | Algolia can power multi-source AI search while maintaining performance and governance. | Medium |
| Publish MCP across official channels like npm, Docker, and the Algolia Dashboard to reinforce legitimacy and developer trust. | Developers trust official documentation and registries far more than AI marketplaces. | Algolia's established brand authority can position MCP as the reliable, officially supported choice. | Medium |
| Experiment with proof-of-concept connectors for external AI platforms like ChatGPT, Salesforce AgentForce, and Gemini. | Customers want Algolia's data and content accessible inside external AI tools to expand discovery and support. | Algolia can become the secure data bridge that connects enterprise content to the broader AI ecosystem. | Medium |
| Offer both self-hosted and managed MCP deployment options, and conduct more research to validate preferences by company size. | Early feedback suggests enterprises prefer multi-server setups while smaller teams want managed simplicity. | Algolia's flexible infrastructure could allow it to support both models efficiently. | Low |

---

# Participant Details

The study included 12 participants (8 customers and 4 non-customers), focusing on engineers/developers who use Algolia or manage search at their organizations. Most represented MM companies across SaaS, eCommerce, and content/media sectors.

| Participant | Job Title / Focus | Status | Industry | B2B/C | Account | Company |
| --- | --- | --- | --- | --- | --- | --- |
| P1 | Backend Developer | Customer | eCommerce | B2B | Enterprise | Vikings Raja |
| P2 | Frontend Developer | Customer | SaaS | B2B | MM | CelerData |
| P3 | Web Developer | Customer | Education | B2C | MM | Unspecified (beta signup) |
| P4 | Backend Developer | Customer | eCommerce | B2B2C | MM | Komplett Services |
| P5 | Product Manager | Customer | Cloud Storage | B2B | MM | Scaleway |
| P6 | Engineer | Customer | Media | B2B2C | Enterprise | Monotype |
| P7 | Frontend Developer | Customer | eCommerce | B2B2C | MM | Master of Malt |
| P8 | Engineer/ Developer | Customer | eCommerce | B2C | MM | Unspecified (UT Panelist) |
| P9 | Engineer/ Developer | Non Customer | SaaS | B2B | MM | Unspecified (UT Panelist) |
| P10 | Engineer/ Developer | Non Customer | SaaS | B2C | MM | Unspecified (UT Panelist) |
| P11 | Engineer/ Developer | Non Customer | eCommerce | B2C | MM | Unspecified (UT Panelist) |
| P12 | Engineer/ Developer | Non Customer | SaaS | B2B | MM | Unspecified (UT Panelist) |
