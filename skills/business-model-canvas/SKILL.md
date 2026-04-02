---
name: "Discover Business Model From Calls"
description: "Create a structured business model canvas — 9 key components (value proposition, customer segments, revenue streams, cost structure) — from customer conversations, market research, or strategic briefs. Grounds canvas in what customers actually need. Trigger on: business model canvas, BMC, business model design, value proposition design, revenue model, customer segments, business architecture."
dependencies: []
connectors:
  - name: "HubSpot"
    reason: "Pull customer segment data, pipeline stages, and deal history to validate target customer segments and revenue assumptions"
  - name: "Salesforce"
    reason: "Surface account data, customer profiles, and win/loss records to ground customer segments and validate value propositions"
  - name: "Gmail"
    reason: "Extract customer language from email threads to inform value proposition and channels sections"
  - name: "Slack"
    reason: "Pull internal discussions about go-to-market strategy, partnerships, and customer feedback"
  - name: "Google Drive"
    reason: "Reference existing strategy docs, competitive analysis, and product roadmaps for context"
author: "Harmony"
version: "1.0.0"
icon: "sparkles"
cover: ""
screenshots: []
category: "Strategy"
---

## Purpose

Create a concise, evidence-based business model that maps how your product creates, delivers, and captures value. When conversation data is available — customer discovery calls, sales conversations, user interviews — the canvas is grounded in what customers actually said about their needs and willingness to pay. When it's not, the skill works from provided context and asks targeted questions to fill gaps. The output is a visual and narrative business model ready to stress-test with leadership or the market.

## When to Use

- Defining or refining a business model for a new product or company
- Validating assumptions about customer segments, revenue streams, or cost structure
- Pivoting an existing business model based on market feedback
- Preparing a business model overview for investors or board discussions
- Stress-testing core business assumptions before launch or major investment
- Analyzing competitor business models to identify differentiation opportunities

## Instructions

### 1. Gather context

Start by asking what the user already has. Don't assume — ask:

- **What are you building?** Product, service, platform, marketplace?
- **Who is the primary customer?** Segment, persona, company size, pain point?
- **What problem does it solve?** What changes for the customer?
- **How do you make money?** Subscription, one-time purchase, marketplace take-rate, licensing?
- **What data do you have?** Customer interviews, discovery calls, competitor research, market sizing?

If the user points to specific meetings or transcripts in Harmony, pull insights from them:
- How customers describe the problem in their own words
- What they say they'd pay for or what they're currently spending
- Which customer segments talk about the problem most intensely
- How customers currently solve this (manual processes, competitors, workarounds)

### 2. Define customer segments and value propositions

Using available data, identify and prioritize:

- **Customer segments:** Who are the primary, secondary, and tertiary customers? (Be specific: role, company size, geography, not just "enterprises")
- **Value proposition:** For each segment, what specific jobs does your solution do? Use customer language when available.
- **Customer problems:** What pain points, gains, or outcomes does each segment care about? Ground in quotes from conversations if possible.

### 3. Map channels and customer relationships

Define how each segment discovers, tries, and stays connected to your product:

- **Customer discovery channels:** How do they learn you exist? (Direct sales, content, community, product-led, partnerships, word-of-mouth)
- **Customer acquisition channels:** How do they try or buy? (Free trial, demo, consult, direct purchase, marketplace)
- **Customer retention channels:** How do you keep them engaged and expanding? (Onboarding, support, community, success)
- **Relationship type:** What kind of relationship does each segment expect? (Self-service, white-glove, managed service, community)

### 4. Identify key resources and activities

Define what must be true for the business model to work:

- **Key resources:** What assets are non-negotiable? (Team, technology, IP, data, distribution, brand, partnerships)
- **Key activities:** What must your team do every day? (Product development, sales, marketing, customer support, data analysis)
- **Key partnerships:** Who do you need to win together? (Suppliers, resellers, integrations, content partners, community builders)

### 5. Model revenue and costs

Build financial assumptions:

- **Revenue streams:** How much does each segment pay? What's the model (per-seat, per-transaction, % of value, fixed contract)? Annual contract value, transaction size, or margin?
- **Cost structure:** What are the fixed costs (team, infrastructure) and variable costs (customer acquisition, goods sold, support)? What are the top 3 cost drivers?
- **Unit economics:** For each revenue stream, what's the customer lifetime value (LTV) relative to customer acquisition cost (CAC)? What's the gross margin?
- **Profitability timeline:** When does the model become profitable? What needs to happen?

### 6. Stress-test and document

Challenge assumptions and identify dependencies:

- **Riskiest assumptions:** What has to be true but hasn't been validated yet?
- **Interdependencies:** Which 9 boxes depend on each other? If one changes, what else shifts?
- **Scenarios:** How does the model change if a key assumption is wrong? (e.g., if customer acquisition cost is 3x higher, or if the target segment doesn't exist)

## Output Format

```markdown
# Business Model Canvas — [Product/Company Name]
_Prepared [date] · Based on [data source: e.g., "5 customer interviews", "market research", "board brief"]_

## Executive Summary
[2–3 sentences: what you're building, for whom, and the core business bet]

## Customer Segments
### Primary Segment: [Segment Name]
- **Who:** [Specific definition: role, company size, geography]
- **Problem:** [What they're trying to solve — customer quote if available]
- **Size:** [TAM estimate if available]
- **Buying power:** [Who decides, what's the approval process]

### Secondary Segment: [Segment Name]
[Same structure]

## Value Propositions
### For [Primary Segment]
- **Core value:** [One sentence: what changes for them]
- **Top 3 benefits:**
  1. [Benefit with customer evidence if available]
  2. [Benefit]
  3. [Benefit]

### For [Secondary Segment]
[Same structure]

## Channels
| Segment | Discovery | Acquisition | Retention | Relationship Type |
|---------|-----------|------------|-----------|------------------|
| [Segment 1] | [Channel] | [Channel] | [Channel] | [Type] |
| [Segment 2] | [Channel] | [Channel] | [Channel] | [Type] |

## Key Resources
- **Technology:** [Core tech, infrastructure, platforms]
- **Team:** [Critical roles and skills needed]
- **Data/IP:** [Data assets, proprietary models, brand]
- **Partnerships:** [Strategic relationships required to launch]

## Key Activities
1. [Critical activity 1] — [Why it matters]
2. [Critical activity 2] — [Why it matters]
3. [Critical activity 3] — [Why it matters]
4. [Critical activity 4] — [Why it matters]

## Revenue Streams
| Segment | Model | Price | Annual Value | Notes |
|---------|-------|-------|--------------|-------|
| [Segment 1] | [Model: SaaS/one-time/% of value] | [$X] | [$X per customer] | [Assumptions] |
| [Segment 2] | [Model] | [$X] | [$X per customer] | [Assumptions] |

**Total addressable market:** [Estimated TAM based on segments]

## Cost Structure
### Fixed Costs (Monthly/Annual)
- [Cost category]: $[X]K — [What it covers]
- [Cost category]: $[X]K — [What it covers]

### Variable Costs (Per Customer/Unit)
- [Cost category]: [Cost model] — [What it covers]
- [Cost category]: [Cost model] — [What it covers]

**Gross margin target:** [X%]
**Unit economics:** LTV:CAC ratio of [X:1] needed for sustainable growth

## Profitability Timeline
- **T-0:** Launch with [funding/revenue]
- **T-12 months:** [Key metrics: revenue, customers, burn rate]
- **T-24 months:** Break-even or profitability target
- **Key dependencies:** [What must happen to hit this timeline]

## Critical Assumptions (Riskiest First)
1. **[Assumption]:** Currently [status]. Validation method: [how you'll test this]
2. **[Assumption]:** Currently [status]. Validation method: [how you'll test this]
3. **[Assumption]:** Currently [status]. Validation method: [how you'll test this]

## Interdependencies & Scenario Analysis
### If Primary Segment Doesn't Exist
[What shifts in the model: alternate segments, channels, revenue, costs]

### If CAC is 3x Higher Than Assumed
[Does the unit economics still work? What changes?]

### If Customer Lifetime is Half What We Expect
[Does the model break? What's the mitigation?]

## Next Steps
1. [Immediate validation needed]
2. [This week]
3. [Before funding decision]
```

## Example

**User:** "Build a business model canvas for a code search tool aimed at mid-market engineering teams. We've done 12 discovery calls."

**Output:**

```markdown
# Business Model Canvas — SearchCode (Enterprise Code Search)
_Prepared 2026-03-15 · Based on 12 discovery calls, market research, competitive analysis_

## Executive Summary
SearchCode is an enterprise code search and navigation tool for mid-market engineering teams (50–500 engineers). It replaces fragile grep-based workflows and brittle internal search tools with AI-powered semantic code search. The core bet: engineering teams will pay per-engineer-seat for a tool that turns code discovery from hours into minutes.

## Customer Segments
### Primary Segment: Mid-Market Engineering Teams (Series B–D)
- **Who:** VP Engineering, Engineering Managers, Senior Engineers at SaaS/FinTech/MarTech companies, 50–500 engineers, existing Slack/GitHub
- **Problem:** "Finding the code we need takes 4+ hours per issue. Our internal search is broken. Grep doesn't scale." — VP Engineering, Modular (discovery call 2/27)
- **Size:** ~2,000 companies in US/EU with 50–500 engineers in tech
- **Buying power:** VP Engineering approves, or Engineering Manager champions + CTO approval for tools >$15K/year

### Secondary Segment: Distributed Engineering Teams (Remote-First)
- **Who:** Tech leads and architects at remote-first startups, distributed teams valuing async communication
- **Problem:** "When our team is spread across 3 time zones, pair programming to find code is impossible. We need async code discovery." — CTO, Relay
- **Size:** ~1,500 companies (fast-growing, higher growth rate)

## Value Propositions
### For Mid-Market Teams
- **Core value:** Turn code discovery from hours to minutes with AI semantic search instead of grep
- **Top 3 benefits:**
  1. **60% faster debugging** — "If I could search semantically, I'd save 20 hours a month." — Sr. Engineer, Modular (discovery call 2/27)
  2. **Onboard engineers 2 weeks faster** — New engineers can find relevant code without asking 5 people
  3. **Keep technical knowledge in the codebase** — Reduces bus factor; answers live in code, not Slack

### For Distributed Teams
- **Core value:** Enable async code discovery so engineers don't block on "pair programming" to find code
- **Top 3 benefits:**
  1. **Reduce Slack/Zoom overhead** — No more "let me hop on a call to show you where that is"
  2. **Better incident response** — Distributed on-call can handle incidents without waking the team
  3. **Ship faster across time zones** — No waiting for the person who knows the codebase

## Channels
| Segment | Discovery | Acquisition | Retention | Relationship Type |
|---------|-----------|------------|-----------|------------------|
| Mid-Market Teams | Dev community, HackerNews, engineering blogs, GitHub | Free tier (up to 5 engineers) → paid tier | In-app onboarding, Slack bot, monthly digest | Self-serve + light sales (AE for 100+ engineer deals) |
| Distributed Teams | Dev communities, remote-work forums, product blogs | Free tier + direct outreach | In-app help, async support, community Slack | Self-serve + email support |

## Key Resources
- **Technology:** Semantic code search engine (vector embeddings + HNSW index), IDE plugins (VS Code, JetBrains), GitHub/GitLab API integrations, LLM-based summarization
- **Team:** ML engineer (search ranking), 2 full-stack engineers (product + integrations), 1 DevRel, 1 product
- **Data:** Indexed codebase data (searchable via embedding space), anonymized usage patterns (what engineers search for)
- **Partnerships:** GitHub, GitLab, VS Code Marketplace, Slack, DataDog (for observability)

## Key Activities
1. **Semantic indexing** — Index every codebase update in real-time so search results are always fresh
2. **ML ranking** — Tune ranking model to surface the most relevant code (not just text matches)
3. **Integration maintenance** — Keep IDE plugins, GitHub sync, and API integrations working
4. **Community building** — Maintain developer community, collect feedback, iterate on search quality

## Revenue Streams
| Segment | Model | Price | Annual Value | Notes |
|---------|-------|-------|--------------|-------|
| Mid-Market (Self-serve) | Per-engineer-seat/month | $15/engineer/month | $9,000–$90,000/year (50–500 eng) | Free tier up to 5; convert to paid |
| Mid-Market (Sales) | Annual contract per-seat | $12/seat/month (annual, discounted) | $7,200–$72,000/year | For 100+ engineer deployments |
| Distributed Teams | Per-seat (lower price point) | $8/engineer/month | $4,800–$48,000/year | Price-sensitive segment, higher growth |

**Total addressable market:**
- 2,000 mid-market companies × $30K average = $60M TAM (conservative)
- Growing by 15% YoY as engineering teams expand and code complexity increases

## Cost Structure
### Fixed Costs (Monthly)
- **Infrastructure (compute + storage for vector search):** $40K — Hosting, GPU for indexing, database
- **Team salaries (6 headcount):** $150K — Engineers, product, DevRel
- **Support + tooling:** $8K — Customer support, monitoring, CI/CD

**Total fixed: $198K/month**

### Variable Costs (Per Customer)
- **Indexing** — $50 per customer per month (grows with codebase size)
- **API calls** — $10 per 1,000 search queries
- **Support** — $200 per customer per year (email + community support)

**Gross margin target:** 70% (at scale, fixed costs become leverage)

## Profitability Timeline
- **Month 1:** Launch with $500K seed funding. 50 free tier signups, 0 paid.
- **Month 6:** 300 free-tier users, 20 paid customers (avg $2K MRR). Burn rate $200K/month.
- **Month 12:** 1,500 free users, 80 paid customers ($15K MRR). Burn rate $180K/month.
- **Month 18:** Break-even approaching (80 customers at $18K MRR vs. $180K burn). Pause hiring, focus on sales efficiency.
- **Month 24:** Profitability. $50K MRR from 300 customers. Reinvest in product.

## Critical Assumptions (Riskiest First)
1. **Mid-market teams will pay $12–15/seat for code search:** Currently untested at scale. Validation method: Conduct pricing interviews with 10 current customers in free tier; track conversion rate from free to paid at different price points.
2. **Semantic search + ML ranking significantly outperforms grep:** Partially validated (3/12 discovery calls showed strong preference for semantic). Validation method: A/B test ranking improvements; measure time-to-answer in user studies.
3. **IDE plugins adoption is frictionless:** Not yet tested. Validation method: Track VS Code plugin install rate once launched; conduct usability testing with 5 engineers.
4. **Free tier with 5-engineer limit drives paid conversion:** Not yet tested. Validation method: Monitor free tier usage; set target conversion rate of 5% in first 6 months.

## Interdependencies & Scenario Analysis

### If Target Segment Is Smaller (1,000 companies instead of 2,000)
- **Impact:** TAM shrinks to $30M. Need to win higher % of market to reach scale.
- **Mitigation:** Expand to secondary segments (distributed teams, large enterprises buying "unlimited" contracts); consider vertical focus (FinTech, MarTech).

### If CAC Is 3x Higher ($30K instead of $10K per customer)
- **Impact:** LTV:CAC ratio drops from 3:1 to 1:1. Unit economics break at current pricing.
- **Mitigation:** Move from sales-driven (AE) to product-led (free tier). Invest in community/content to lower CAC below $5K.

### If Semantic Search Advantage Erodes (Competitors Match Quickly)
- **Impact:** Differentiation vanishes. Pricing power drops. Becomes commoditized.
- **Mitigation:** Build moat through ecosystem (integrations, API, plugins). Deepen ML/ranking beyond search (code recommendations, refactoring).

## Next Steps
1. **This week:** Interview 5 current free-tier users on pricing ($12/seat vs. $8/seat willingness-to-pay). Lock on pilot price point.
2. **Next 2 weeks:** Launch free tier to GitHub (ProductHunt, HackerNews). Target 500 signups. Measure time-to-first-search.
3. **Week 4:** Onboard first 5 paid customers (pilot at discounted rate). Collect NPS and feature feedback.
4. **Before Series A:** Hit $10K MRR with 20+ customers. Reduce burn rate to $150K/month.

---
_Want me to create a task for pricing interviews, or draft the free tier onboarding flow?_
```

## Edge Cases

- **Very early stage / pre-product:** Focus on validating the riskiest assumption first (do customers actually have the problem?). Build a simplified canvas with a "learn launch" validation approach instead of a full business model.
- **No conversation data available:** Work from provided context and market research. Ask deeper questions about target segments (who exactly is buying?), willingness to pay (what are they spending now?), and competitive landscape. Flag that the model would be stronger with customer conversation evidence.
- **Business model has multiple revenue streams or customer segments:** Create separate rows in the revenue and channels sections. Show how segments interact (e.g., marketplace dynamics where two segments depend on each other).
- **Pivoting an existing business model:** Ask what's changing and why. Highlight which assumptions in the old model failed, and what data drove the pivot. Update only the sections that changed; mark unchanged sections to reduce cognitive load.
- **User wants to compare multiple business models:** Build separate canvases (one per model), then create a side-by-side comparison highlighting differences in customer segments, revenue, and cost structure. Recommend which model has lower risk based on assumptions.
- **Business model depends on network effects or marketplace dynamics:** Add a "Growth mechanics" section showing how the model accelerates as scale increases (e.g., more supply attracts more demand, or vice versa).
