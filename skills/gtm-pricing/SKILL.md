---
name: "Design Pricing Strategy"
description: "Design a pricing strategy for your product — model options, positioning, packaging tiers, and discount guidelines. Grounded in customer willingness-to-pay from discovery calls and competitive positioning. Trigger on: pricing strategy, pricing model, pricing tier, package design, pricing options, how much should we charge, go-to-market pricing."
dependencies: []
connectors:
  - name: "HubSpot"
    reason: "Pull deal sizes and win/loss data from closed deals to calibrate pricing against what customers actually pay"
  - name: "Salesforce"
    reason: "Extract opportunity values and deal velocity by price point to validate pricing assumptions"
  - name: "Gmail"
    reason: "Surface customer emails and price negotiation history to understand price sensitivity and budget constraints"
  - name: "Slack"
    reason: "Share pricing decision framework and recommendation with leadership team for collaborative input"
  - name: "Notion"
    reason: "Pull competitor pricing data and strategic docs for positioning context"
---

## Purpose

Design a pricing strategy grounded in customer willingness-to-pay (from discovery calls and conversations in Harmony), competitive positioning, and cost structure. The skill recommends multiple pricing models (value-based, cost-plus, competitive, freemium) with trade-offs, helps you pick the right model, and creates packaging tiers with positioning. Works from Harmony conversation data when available (what customers said about budget, value, and price sensitivity), and from provided research (competitor pricing, cost structure) when it's not. Helps founders, PMs, and GTM leaders answer "How much should we charge?"

## When to Use

- Launching a new product or entering a new market — establish pricing from day one
- Scaling an early MVP with manual pricing into a packaged offering
- Repositioning after shifting to a new ICP or use case
- Competitive pricing pressure — need to articulate value to justify pricing
- Revenue optimization — review pricing tiers to improve mix and LTV
- International expansion — adjust pricing for new regions
- Planning a price increase — model impact and positioning

## Instructions

### 1. Gather context

Start by asking what the user knows about their business:

**Product & market:**
- **What are you selling?** (Product, feature, service, subscription?)
- **Who's your ICP?** (Segment, company size, use case?)
- **What problem does it solve?** (Quantify if possible: time saved, cost reduction, revenue increase?)
- **What's your go-to-market?** (Self-serve, sales-led, hybrid?)

**Financial & cost:**
- **Cost structure:** What's your COGS, hosting, support? (Needed to validate minimum pricing)
- **Target margins:** What gross margin do you need? (80% for SaaS, 60% for professional services, etc.)
- **Revenue goal:** How much ARR do you need from this product?

**Competitive & market:**
- **Competitors:** Who else solves this? What do they charge?
- **Customer feedback:** What did prospects say about price? (Budget, value perception, alternatives?)

If Harmony data exists, pull:
- Discovery calls: "What's your budget?" responses and budget ranges mentioned
- Customer interviews: Price sensitivity, value drivers, objection patterns
- Sales calls: Negotiation patterns, willingness-to-pay signals
- Competitor mentions: How prospects position your alternative pricing

### 2. Analyze willingness-to-pay

Evaluate what customers are willing to spend:

**From conversations:**
- What budget ranges did prospects mention? ($10K, $100K, $500K annually?)
- What did they say about value? (Time saved, revenue impact, cost reduction?)
- Price sensitivity: Did they balk at any number?
- Buying triggers: When do they decide to buy? (ROI threshold, pain intensity, timeline?)

**From market research:**
- Competitor pricing: What do alternatives cost?
- Market benchmarks: What do similar products charge in your category?
- Customer interviews: Typical budgets, value drivers, buying process

### 3. Define pricing models

Evaluate 3–4 models and recommend the best fit:

**Value-based pricing:**
- Price based on value delivered (e.g., "saves 10 hours/week" = $X/month)
- Works when: Clear ROI, high-value outcomes, enterprise/sales-led
- Risk: Hard to communicate simply; requires strong sales

**Cost-plus pricing:**
- Price based on cost + margin (e.g., COGS $20 + 50% margin = $30 retail)
- Works when: Commodity/clear competition, high volume needed, cost is main driver
- Risk: Ignores value; leaves money on table if value is high

**Competitive pricing:**
- Price relative to competitors (e.g., "10% cheaper than Category Leader")
- Works when: Clear incumbents, differentiation hard to articulate, price-sensitive market
- Risk: Race to bottom; ignores your unique value

**Freemium / Usage-based:**
- Free tier to acquire, then charge by usage (e.g., per API call, per user, per integration)
- Works when: Self-serve, SMB market, low friction adoption matters
- Risk: Conversion challenges, free tire abuse, unpredictable revenue

### 4. Design packaging

Choose tier structure (3-tier is standard):

**Entry (SMB/self-serve tier):**
- Price: $X/month (low friction, self-serve)
- Features: Core use case, limited users/integrations, email support
- Goal: Easy conversion, high volume

**Mid-market (growth tier):**
- Price: $X–$Y/month (2–3x entry)
- Features: Advanced analytics, more users/integrations, support response SLA
- Goal: Highest margin tier (target here)

**Enterprise (custom/sales-led tier):**
- Price: Custom (quote-based, $Y+/month)
- Features: Everything, unlimited users/integrations, dedicated support, SLA
- Goal: High-value accounts, long sales cycle okay

**Optional: Free tier or trial**
- Free: Freemium strategy only (limited functionality)
- Trial: 14–30 day free trial to reduce friction

### 5. Create positioning strategy

Articulate how pricing communicates value:

- **Pricing narrative:** "We charge by [metric] because [reason]" (e.g., "per user because each user creates value")
- **Value alignment:** How does each tier match customer growth? (Entry → Mid → Enterprise)
- **Discount policy:** When can you discount? (Early adopter, annual upfront, bundle?)
- **Price increase plan:** When/how will you raise prices without churn?

### 6. Model economics and validate

Project impact:

- Revenue: If you acquire X customers at each tier, what's ARR?
- Churn risk: Will this pricing cause churn or cap ACV?
- LTV: Lifetime value at each tier
- Unit economics: CAC payback period, magic number

## Output Format

# GTM Pricing Strategy
_Product: [Product Name] | Date: [Date]_

## Executive Summary
[1–2 sentences: Pricing model chosen, price point(s), and rationale]

## Product & Market Context
- **Product:** [What it is, core use case]
- **ICP:** [Target segment, company size]
- **Problem solved:** [Quantified: e.g., "saves 10 hours/week" or "reduces costs by 30%"]
- **Go-to-market:** [Self-serve, sales-led, hybrid]

## Willingness-to-Pay Analysis

### Customer Feedback on Budget
_From discovery calls or Harmony conversations:_
- Typical budget mentioned: $[X]–$[Y]/month (or /year)
- Price sensitivity: [High / Medium / Low]
- Key value drivers: [1. Feature], [2. Feature], [3. Feature]
- Competitive alternatives mentioned: [Competitor 1], [Competitor 2]

### Competitor Pricing
| Competitor | Model | Entry | Mid-Market | Enterprise |
|------------|-------|-------|-----------|-----------|
| [Name] | [Pricing model] | $X/mo | $Y/mo | Custom |

### Benchmarks
[Market data on pricing for similar products in your category]

## Pricing Model Evaluation

| Model | Price Point | Pros | Cons | Fit for Our ICP |
|-------|-------------|------|------|-----------------|
| Value-based | $X–Y/mo | Aligns with customer value; higher prices | Requires strong sales; harder to scale self-serve | ✓ / ✗ |
| Cost-plus | $X/mo | Simple; predictable margins | Ignores value; leaves money on table | ✓ / ✗ |
| Competitive | $X (vs comp at $Y) | Clear positioning; defensible | Race to bottom; ignores unique value | ✓ / ✗ |
| Freemium | Free + $X/mo | Low friction; high conversion | Conversion challenges; cannibalization risk | ✓ / ✗ |

**Recommended model:** [Model name] because [reason aligned with ICP and go-to-market]

## Packaging & Pricing

### Tier Structure

**Starter**
- **Price:** $[X]/month (or $/year with discount)
- **Users:** [X]
- **Core features:** [Feature 1], [Feature 2], [Feature 3]
- **Support:** Email
- **Target:** [SMB, self-serve, entry buyers]

**Professional**
- **Price:** $[Y]/month
- **Users:** [Y+]
- **Features:** Everything in Starter, plus [Feature 4], [Feature 5]
- **Support:** Email + Chat, [response time]
- **Target:** [Mid-market, growth]

**Enterprise**
- **Price:** Custom (typically $[Z]+/month)
- **Users:** Unlimited
- **Features:** Everything + [Advanced feature 1], [Advanced feature 2]
- **Support:** Dedicated account manager, 24/7 support, custom SLAs
- **Target:** [Large accounts, sales-led, custom requirements]

### Trial & Onboarding
- **Free trial:** [14/30 days] (includes all features, [limitation if any])
- **No credit card required:** Yes / No
- **Goal:** [X% free-to-paid conversion]

## Pricing Narrative & Positioning

**Why we price by [metric]:**
[Explain how the pricing metric aligns with customer value. E.g., "We charge per user because each user generates value through their contributions; as your team grows, you pay more, reflecting the value you get."]

**How tiers map to growth:**
[Describe how customer progression works: SMB starts at Starter, grows to Professional as team expands, moves to Enterprise when they need custom.]

**Competitive positioning:**
[How does your pricing compare to alternatives? E.g., "We're 30% cheaper than [Competitor] because we focus on [use case], not [alternative use case]."]

## Economics & Validation

| Metric | Assumption | Projection | Notes |
|--------|-----------|-----------|-------|
| **Starter tier** | X customers/year | $[X] ARR | [Notes] |
| **Professional tier** | Y customers/year | $[Y] ARR | [Notes] |
| **Enterprise tier** | Z customers/year | $[Z] ARR | [Notes] |
| **Total Year 1 ARR** | — | $[TOTAL] | — |

| Metric | Unit | Value |
|--------|------|-------|
| **Gross margin target** | % | [X]% |
| **CAC** | $/customer | $[X] |
| **LTV** | $/customer | $[X] (Starter) / $[Y] (Prof) |
| **LTV:CAC ratio** | — | [X:1] (target ≥3:1) |
| **Payback period** | months | [X] (target <12) |

## Discount Policy

**When can we discount?**
- [Scenario 1]: Up to [X]% (e.g., early adopter, annual prepay)
- [Scenario 2]: Up to [Y]%
- [Scenario 3]: Requires [approval level]

**Do NOT discount if:**
- [Scenario 1] (e.g., customer doesn't fit ICP, just price shopping)

## Price Increase & Optimization Plan

**Year 1:** Lock in pricing; focus on acquisition
**Year 2:** Analyze cohort LTV; optimize tier mix
**Year 2–3:** Consider [+10–15%] price increase for new customers; grandfather existing

---

## Example

**User:** "We're launching a new API analytics product for mid-market engineering teams. We've done 15 discovery calls. Competitors charge $200–500/month. Our cost is about $50/customer/month. What should we charge?"

**Output:**

# GTM Pricing Strategy
_Product: Pulse API Analytics | Date: 2026-03-22_

## Executive Summary
Recommend **value-based, tiered pricing** starting at **$299/month (Starter)** for small teams and scaling to **$1,200+/month (Professional)** for mid-market. Positions against expensive alternatives (Datadog) by charging for the specific value (API monitoring) rather than general infrastructure. Projects $420K–$650K Year 1 ARR with 40% gross margins.

## Product & Market Context
- **Product:** Real-time API monitoring and debugging platform (traffic analysis, breaking change detection, consumer impact mapping)
- **ICP:** Mid-market engineering teams (50–500 people, Series A–C)
- **Problem solved:** Cuts API debugging time from 8 hours/week (manual investigation) to 30 minutes (with Pulse); prevents production breaks caused by API version conflicts
- **Go-to-market:** Hybrid (self-serve for SMB, sales-led for enterprise)

## Willingness-to-Pay Analysis

### Customer Feedback on Budget
_From 15 discovery calls (Feb–Mar 2026):_
- Typical budget mentioned: $200–$800/month for developer tools (11 of 15 prospects mentioned this range)
- Price sensitivity: Medium-High (concerned about tool sprawl; want ROI clear)
- Key value drivers:
  1. **Reduces debugging time** (mentioned by 14/15 as #1 pain)
  2. **Prevents customer-facing outages** (mentioned by 12/15)
  3. **Replaces 3+ internal dashboards** (mentioned by 8/15)
- Competitive alternatives: Datadog ($300–$2K+/mo, but perceived as overkill for API-only needs), in-house dashboards, partial solutions

**Sample quotes:**
- "We'd pay $500/month to stop spending 8 hours a week on API debugging." — VP Eng, CloudSync
- "Datadog is expensive and overkill. We'd prefer a tool designed specifically for APIs." — CTO, Relay
- "We're currently paying $150/month for our internal dashboard system. We'd move if a better option existed." — Eng Manager, Modular

### Competitor Pricing
| Competitor | Model | Entry | Mid-Market | Enterprise |
|------------|-------|-------|-----------|-----------|
| Datadog | Usage-based (per host) + APM | $300–500/mo | $1K–$5K/mo | Custom |
| New Relic | Subscription per user | $250/mo | $800+/mo | Custom |
| Splunk | Usage-based (per GB ingested) | $300+/mo | $2K+/mo | Custom |
| Segment/mParticle (CDP comparable) | MTU pricing | $300/mo | $1K+/mo | Custom |

**Key finding:** Competitors are 2–3x more expensive, but not API-specific. Our positioning: focused, affordable, designed for APIs.

### Benchmarks
- API monitoring tools (Postman, ReadyAPI): $20–100/month (feature-limited)
- Developer-focused SaaS: $100–$500/month entry, $500–$2K mid-market
- Mid-market typical tool budget: $50–$500/month per tool; total stack ~$2K–$5K/month

## Pricing Model Evaluation

| Model | Price Point | Pros | Cons | Fit for Our ICP |
|-------|-------------|------|------|-----------------|
| Value-based | $300–$1,200/mo | Aligns with debugging time saved ($50K+/year in eng salary savings = $2K+/mo in value); justifies price vs. Datadog; strong margin | Requires sales education; may have pricing power ceiling | ✓ YES |
| Usage-based (per API call) | $0.01–$0.05/call | Variable cost to customer; aligns with usage; low entry friction | Unpredictable revenue; high-volume customers end up expensive; hard to position | ✗ Lower priority |
| Competitive | $299–$600/mo (vs Datadog at $1K) | Clear positioning; lower than incumbents | Leaves value on table; seems cheap; may attract bargain hunters not true fits | ✓ Secondary strategy |
| Freemium | Free (10M calls/mo) + $299 | High adoption; low friction for trials; SMB friendly | Free tier cannibalization; hard to convert; SMB not revenue driver | ✗ Not recommended |

**Recommended model:** **Value-based, tiered subscription** because it aligns with real customer value (debugging time saved = engineering salary savings = $50K+/year), allows us to undercut Datadog while maintaining healthy margins, and supports both self-serve (Starter) and sales-led (Enterprise) motions.

## Packaging & Pricing

### Tier Structure

**Starter**
- **Price:** $299/month (or $3,188/year = save 10%)
- **API volume:** Up to 50M calls/month
- **Teams:** Up to 5 team members
- **Core features:** Real-time API traffic, breaking change detection, consumer impact alerts, basic dashboards
- **Support:** Email + Community Slack, 24-hour response time
- **Target:** Early-adopters, small teams, SMB, teams with < $1M technical spend/year

**Professional**
- **Price:** $799/month (or $8,587/year = save 10%)
- **API volume:** Up to 200M calls/month
- **Teams:** Up to 20 team members
- **Features:** Everything in Starter, plus: Advanced analytics, custom alerts, integrations (Slack, PagerDuty, webhooks), audit logs, SSO, 30-day data retention
- **Support:** Email + Slack + Chat, 2-hour response time
- **Target:** Mid-market engineering teams (100–500 people), growth stage

**Enterprise**
- **Price:** Custom (typically $1,500–$3K+/month based on call volume and team size)
- **API volume:** Unlimited (or up to 2B+ calls/month)
- **Teams:** Unlimited
- **Features:** Everything, plus: Dedicated account manager, custom integrations, white-label option, 90-day data retention, 99.99% SLA
- **Support:** Dedicated Slack channel, 15-minute response time, quarterly business review
- **Target:** Large engineering orgs (500+ people), mission-critical APIs, multi-team deployments

### Trial & Onboarding
- **Free trial:** 14 days (full access to Professional tier features)
- **No credit card required:** Yes
- **Conversion goal:** 15–20% free-to-paid (industry benchmark: 10–25% for dev tools)

## Pricing Narrative & Positioning

**Why we charge by API call volume (with team-size tiers):**
"We charge based on API volume and team size because that's where value is created. More API calls = more opportunities for something to break. More team members = more people who benefit from visibility. As you grow, your subscription cost grows with your API complexity — not exponentially, but proportionally to the risk you're managing."

**How tiers map to growth:**
- **Starter → Professional:** "You outgrow Starter when you hit 50M calls/month or need more than 5 engineers troubleshooting APIs. Professional gives you advanced monitoring, more data retention, and faster support."
- **Professional → Enterprise:** "You're ready for Enterprise when you have dedicated infrastructure for APIs, need white-label options, or have SLA requirements. Custom pricing ensures you get support at your scale."

**Competitive positioning:**
"We're 50–70% cheaper than Datadog (which charges per host/agent) because we're obsessively focused on APIs, not general infrastructure. We don't charge for logs, metrics, or traces—just API monitoring. That focus means fewer features, but the features you need at a price that makes sense."

## Economics & Validation

| Metric | Assumption | Projection | Notes |
|--------|-----------|-----------|-------|
| **Starter tier** | 40 customers by EOY | $143K ARR | Conservative: 3–4 signups/month, $299 × 12 × 40 |
| **Professional tier** | 20 customers by EOY | $192K ARR | Target segment; higher ACVand lower churn |
| **Enterprise tier** | 3 customers by EOY | $90K ARR | Sales cycles are longer; custom pricing |
| **Total Year 1 ARR** | — | **$425K** | Conservative estimate; upside to $650K if conversion outperforms |

| Metric | Unit | Value |
|--------|------|-------|
| **COGS (hosting, support, ops)** | $/customer/month | $50 (Starter), $80 (Prof), $150 (Ent) |
| **Gross margin target** | % | 40–50% (at scale: 60–70% for SaaS) |
| **CAC (blended)** | $/customer | $3K (assuming $30K/year sales+marketing, 10 customers closed) |
| **LTV (Starter, 2-year horizon)** | $/customer | $4,776 ($299 × 12 × 2 months, minus churn assumption) |
| **LTV:CAC ratio** | — | 1.6:1 (Year 1 is investment phase; target 3:1+ by Year 2) |
| **Payback period** | months | ~11 months (CAC $3K ÷ monthly margin $299 – $50) |

**Validation:**
- Per discovery calls, 12 of 15 prospects said they'd try Pulse at $299–$599 (validates Starter–Professional)
- 8 of 15 mentioned current spend of $100–$300/month on API-related tools (TAM replacement motion)
- 6 of 15 engineering teams have 5+ people managing APIs (addressable market for Professional tier)

## Discount Policy

**When can we discount?**
- **Annual prepay:** Up to 10% (drives retention, improves cash flow)
- **Volume commitments (Enterprise):** Up to 20% for 3-year deals
- **Non-profit / student:** 50% discount (brand building, ecosystem)

**Do NOT discount if:**
- Customer is price shopping against Datadog (competitor discount war = bad strategy)
- Customer doesn't fit ICP (e.g., <10M API calls/month = use Starter; don't build custom pricing)
- Objection is "your competitors are cheaper" (respond with value education, not discount)

## Price Increase & Optimization Plan

**Year 1 (2026):** Lock in pricing; focus on acquisition and product-market fit.

**Mid-Year 2 (late 2026):** Analyze cohort economics. If churn <3% and LTV:CAC >2.5, consider:
- Increasing Starter → $349 (9% raise)
- Increasing Professional → $899 (12% raise)
- Grandfather existing customers at current price for 1 year

**Year 3+:** Continue annual 8–10% increases for new customers; evaluate expansion revenue (additional teams, add-ons).

---

## Now What?

1. **This week:** Validate pricing with 3–5 late-stage prospects ("If we charged $299/month, would you buy?")
2. **Next week:** Design landing page and pricing page (show tiers, value props, comparison to alternatives)
3. **Before launch:** Set up billing/payment system and trial automation
4. **Launch:** Track conversion from free trial → Starter → Professional; optimize based on real data
5. **30-day review:** Measure free-to-paid conversion, churn, and customer feedback on pricing

---

## Edge Cases

- **Customer objects to price:** Don't discount immediately. Explore: "What price would you feel good about?" Often they'll suggest close to your ask if value is clear.
- **Very early-stage customers (<10M API calls/month):** Offer steep discount or free tier; focus on product love, not revenue. Upsell later.
- **Enterprise customer wants custom deal:** Standard playbook: Lock Starter/Professional as minimum, add custom SLA/features as upcharges. Don't discount list price.
- **Competitor launches lower pricing:** Don't panic-discount. Double down on differentiation (API-specific features, customer success) and explain value difference.
- **High churn from Starter tier:** Investigate: Are they getting value? Do they need help? Maybe Starter packaging is incomplete, not price.
