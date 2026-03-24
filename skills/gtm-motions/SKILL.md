---
name: "Pick Growth Channels"
description: "Evaluate and select the right mix of go-to-market motions — Inbound, Outbound, Paid, Community, Partners, ABM, and PLG — based on your product, market, and resources. Trigger on: GTM motions, marketing channels, acquisition strategy, inbound vs outbound, channel mix, PLG strategy, growth motions, customer acquisition plan."
dependencies: []
---

## Purpose

Help teams choose and prioritize the right combination of go-to-market motions for their product, stage, and resources. Instead of defaulting to "do everything," this skill scores seven proven GTM motions against your specific situation, recommends a 2–4 motion stack, and builds a 90-day execution plan. When conversation data is available, it grounds recommendations in what customers actually said about how they discover and evaluate solutions.

## When to Use

- Selecting which marketing and sales channels to invest in
- Deciding between inbound, outbound, PLG, or paid-first approaches
- Building your first acquisition strategy as an early-stage company
- Rebalancing channel mix after a pivot, new funding, or market shift
- Planning cross-channel campaigns with limited budget or team

## Instructions

### 1. Understand the product and market context

Ask the user for — or extract from conversations in Harmony:

- **Product type:** SaaS, marketplace, API, hardware, services?
- **Price point and ACV:** Free / $0–50 / $50–500 / $500–5K / $5K+ / $50K+ per year
- **Sales cycle:** Self-serve minutes / days / weeks / months / enterprise quarters
- **Buyer:** Individual contributor, team lead, director, VP, C-suite, procurement
- **Product complexity:** Try-it-in-5-minutes vs. needs-a-demo vs. requires-implementation
- **Stage:** Pre-launch / early traction / scaling / mature
- **Team:** How many people can work on growth? What skills exist?
- **Budget:** What's available for paid channels monthly?
- **Existing traction:** Any channels already working? What data exists?

If customer conversations exist in Harmony, look for:
- How customers describe discovering the product
- What channels or communities they mention
- Whether they self-served or needed sales help
- How long their evaluation took
- Who else was involved in the decision

### 2. Score each motion against the context

Evaluate all seven motions on a 1–10 scale across four dimensions:

**The 7 GTM Motions:**

| Motion | Core Idea | Best When |
|--------|-----------|-----------|
| **Inbound** | Attract through content, SEO, thought leadership | Long sales cycles, technical buyers, brand-building phase |
| **Outbound** | Proactive direct outreach to target prospects | High ACV, clear ICP, niche markets, enterprise deals |
| **Paid Digital** | Targeted ads across search, social, display | Clear demographics, competitive keywords, budget available, fast validation |
| **Community** | Build engaged groups that spread the word | Developer tools, niche verticals, strong network effects |
| **Partners** | Co-market through ecosystem and channel partners | Platform plays, complementary products, established ecosystems |
| **ABM** | Treat high-value accounts as individual markets | Enterprise, <500 target accounts, $50K+ deal sizes |
| **PLG** | Let the product drive adoption and expansion | Self-serve products, low ACV, viral potential, SMB market |

**Scoring dimensions:**
- **Fit** (1–10): How well does this motion match the product, buyer, and sales cycle?
- **Feasibility** (1–10): Can the team execute this with current resources and skills?
- **Speed** (1–10): How quickly will this produce pipeline or revenue?
- **Scalability** (1–10): How well does this grow as the company scales?

**Composite score** = (Fit × 3 + Feasibility × 2 + Speed × 2 + Scalability × 1) / 8

### 3. Recommend the motion stack

Based on scores, recommend:

- **Primary motion** (highest composite score): Where to invest most
- **Secondary motion** (complementary): Supports primary, covers a gap
- **Experimental motion** (optional): Test with 10–15% of resources
- **Not now** motions: Explicitly state which to skip and why

For each recommended motion, provide:

- **Why this motion** — Evidence from scores and context
- **Specific tactics** — Not just "do content marketing" but exactly what to do
- **Tools needed** — Specific tools for execution
- **Team requirement** — Who and how many
- **Budget estimate** — Monthly/quarterly cost range
- **Timeline to results** — When to expect first meaningful signal
- **Key metric** — The one number that tells you if it's working

### 4. Design the motion interaction

Show how selected motions reinforce each other:

- How does motion A feed motion B?
- Where do leads from one motion get nurtured by another?
- What content or assets serve multiple motions?
- Where are the handoff points between marketing and sales?

### 5. Build the 90-day execution plan

Break into three phases:

**Days 1–30: Foundation**
- Set up tools and tracking
- Create initial assets and sequences
- Launch primary motion with minimum viable approach
- Establish baseline metrics

**Days 31–60: Optimize**
- Review first month data
- Double down on what's working
- Launch secondary motion
- A/B test messaging and targeting

**Days 61–90: Scale**
- Scale winning channels and tactics
- Start experimental motion if primary is working
- Build repeatable playbooks
- Set targets for next quarter

## Output Format

```markdown
# GTM Motion Plan — [Product/Company]
_Prepared [date] · Stage: [stage] · ACV: [range]_

## Context Summary
| Factor | Your Situation |
|--------|---------------|
| Product type | [type] |
| ACV | [range] |
| Sales cycle | [length] |
| Buyer | [role/level] |
| Team size | [number] |
| Monthly budget | [range] |
| Stage | [stage] |

## Motion Scorecard

| Motion | Fit | Feasibility | Speed | Scalability | **Score** | Verdict |
|--------|-----|------------|-------|-------------|-----------|---------|
| Inbound | [/10] | [/10] | [/10] | [/10] | **[/10]** | [Primary/Secondary/Experimental/Skip] |
| Outbound | [/10] | [/10] | [/10] | [/10] | **[/10]** | [verdict] |
| Paid Digital | [/10] | [/10] | [/10] | [/10] | **[/10]** | [verdict] |
| Community | [/10] | [/10] | [/10] | [/10] | **[/10]** | [verdict] |
| Partners | [/10] | [/10] | [/10] | [/10] | **[/10]** | [verdict] |
| ABM | [/10] | [/10] | [/10] | [/10] | **[/10]** | [verdict] |
| PLG | [/10] | [/10] | [/10] | [/10] | **[/10]** | [verdict] |

## Recommended Motion Stack

### Primary: [Motion Name]
- **Why:** [Evidence-based reasoning]
- **Tactics:** [Specific actions]
- **Tools:** [Tool list]
- **Team:** [Who and how many]
- **Budget:** [Monthly estimate]
- **Time to results:** [Timeline]
- **Key metric:** [The number to watch]

### Secondary: [Motion Name]
- **Why:** [How it complements primary]
- **Tactics:** [Specific actions]
- **Tools:** [Tool list]
- **Team:** [Who and how many]
- **Budget:** [Monthly estimate]
- **Time to results:** [Timeline]
- **Key metric:** [The number to watch]

### Experimental: [Motion Name]
- **Why:** [What you're testing]
- **Tactics:** [Minimum viable test]
- **Budget:** [Capped at X]
- **Success signal:** [What tells you to invest more]

### Skip for Now
- **[Motion]:** [Why it doesn't fit right now — and when to revisit]
- **[Motion]:** [Same]

## How Motions Reinforce Each Other
[Diagram or description of how selected motions feed each other]

## 90-Day Execution Plan

### Days 1–30: Foundation
| Week | Motion | Action | Owner | Deliverable |
|------|--------|--------|-------|-------------|
| 1 | [motion] | [action] | [role] | [output] |
| 2 | [motion] | [action] | [role] | [output] |
| 3 | [motion] | [action] | [role] | [output] |
| 4 | [motion] | [action] | [role] | [output] |

### Days 31–60: Optimize
| Week | Motion | Action | Owner | Deliverable |
|------|--------|--------|-------|-------------|
| 5–6 | [motion] | [action] | [role] | [output] |
| 7–8 | [motion] | [action] | [role] | [output] |

### Days 61–90: Scale
| Week | Motion | Action | Owner | Deliverable |
|------|--------|--------|-------|-------------|
| 9–10 | [motion] | [action] | [role] | [output] |
| 11–12 | [motion] | [action] | [role] | [output] |

## Metrics Dashboard
| Motion | Metric | Month 1 Target | Month 3 Target |
|--------|--------|---------------|----------------|
| [primary] | [metric] | [target] | [target] |
| [secondary] | [metric] | [target] | [target] |
| [experimental] | [metric] | [target] | [target] |
| **Overall** | Pipeline generated | [target] | [target] |
| **Overall** | CAC | [target] | [target] |

## Next Steps
1. [Immediate action this week]
2. [Tool setup needed]
3. [First review checkpoint]
```

## Example

**User:** "We're a Series A dev tools startup. Our product is an API testing platform, $200/month per team. We have 3 people on marketing, $15K/month budget. What motions should we run?"

**Output:**

```markdown
# GTM Motion Plan — APIForge
_Prepared 2026-03-05 · Stage: Series A · ACV: $2,400_

## Context Summary
| Factor | Your Situation |
|--------|---------------|
| Product type | Developer tool (API testing) |
| ACV | $2,400/year ($200/mo per team) |
| Sales cycle | Self-serve trial → team expansion (1–3 weeks) |
| Buyer | Engineering lead / QA lead (IC → team lead) |
| Team size | 3 marketing + founders |
| Monthly budget | $15,000 |
| Stage | Series A, early traction |

## Motion Scorecard

| Motion | Fit | Feasibility | Speed | Scalability | **Score** | Verdict |
|--------|-----|------------|-------|-------------|-----------|---------|
| Inbound | 9 | 7 | 4 | 9 | **7.3** | Secondary |
| Outbound | 4 | 5 | 6 | 4 | **4.6** | Skip |
| Paid Digital | 6 | 7 | 8 | 6 | **6.6** | Experimental |
| Community | 9 | 6 | 5 | 8 | **7.1** | Secondary |
| Partners | 5 | 3 | 3 | 7 | **4.5** | Skip |
| ABM | 2 | 2 | 3 | 3 | **2.4** | Skip |
| PLG | 10 | 8 | 8 | 10 | **9.1** | **Primary** |

## Recommended Motion Stack

### Primary: Product-Led Growth
- **Why:** $200/mo product with self-serve trial, developer audience, low ACV — this is textbook PLG. Your best customers should convert themselves.
- **Tactics:** Free tier for individual developers (limited API calls), self-serve team upgrade, in-product onboarding with "invite your team" prompt at activation moment, usage-based upgrade nudges
- **Tools:** PostHog (analytics), Intercom (in-app messaging), Stripe (billing)
- **Team:** 1 product marketer + engineering support for growth features
- **Budget:** $2K/month (tooling)
- **Time to results:** 2–4 weeks for first self-serve conversions
- **Key metric:** Free → Paid conversion rate (target: 5–8%)

### Secondary: Content + Community (combined Inbound & Community)
- **Why:** Developers trust content and peers, not ads. API testing is a topic with real SEO demand and active communities. Content builds the flywheel that PLG needs.
- **Tactics:** Weekly technical blog posts (API testing patterns, debugging guides), presence in r/programming, dev Discord servers, and Hacker News. Monthly "API horror stories" content series.
- **Tools:** Ghost or blog CMS, SEMrush (SEO), Buffer (social distribution)
- **Team:** 1 content marketer + founder thought leadership
- **Budget:** $3K/month (tools + freelance technical writer)
- **Time to results:** 8–12 weeks for organic traffic; community presence faster
- **Key metric:** Organic signups per month (target: 100 by month 3)

### Experimental: Paid Digital (Google Search)
- **Why:** "API testing tool" and related keywords have commercial intent. Test with a small budget to see if paid can accelerate while organic builds.
- **Tactics:** Google Search ads on high-intent keywords only ("API testing platform," "automated API testing tool"). No display, no social ads yet.
- **Budget:** $5K/month (capped)
- **Success signal:** CAC under $600 (25% of first-year ACV) within 30 days

### Skip for Now
- **Outbound:** At $200/mo ACV, manual outreach doesn't make economic sense. Revisit when you launch a $500+/mo enterprise tier.
- **Partners:** Too early — you need product-market fit before platform partnerships. Revisit at Series B or when you have an API/integration story.
- **ABM:** ACV is too low and target market too broad. ABM only works if you have <500 named accounts worth $50K+ each.

## How Motions Reinforce Each Other
PLG generates free users → Content educates and activates them → Community creates advocates who bring more free users → Paid accelerates the top of the PLG funnel on proven keywords.

## 90-Day Execution Plan

### Days 1–30: Foundation
| Week | Motion | Action | Owner | Deliverable |
|------|--------|--------|-------|-------------|
| 1 | PLG | Instrument activation funnel in PostHog | Eng + PM | Dashboard live |
| 1 | Content | Publish keyword research, create 90-day content calendar | Content | Calendar |
| 2 | PLG | Build "invite your team" flow at activation moment | Eng | Feature shipped |
| 2 | Community | Set up presence in 3 developer communities | Content | Active profiles |
| 3 | Content | Publish first 2 blog posts (SEO-targeted) | Content | Posts live |
| 4 | Paid | Launch Google Search campaign, 10 high-intent keywords | Marketing lead | Campaign live |

### Days 31–60: Optimize
| Week | Motion | Action | Owner | Deliverable |
|------|--------|--------|-------|-------------|
| 5–6 | PLG | Analyze activation data, optimize onboarding drop-offs | PM | Funnel improvements |
| 5–6 | Paid | Review CPL and CAC; kill underperforming keywords | Marketing lead | Optimized campaign |
| 7–8 | Content | Publish 4 more posts; repurpose top performer into community posts | Content | 6 total posts + community threads |

### Days 61–90: Scale
| Week | Motion | Action | Owner | Deliverable |
|------|--------|--------|-------|-------------|
| 9–10 | PLG | Launch usage-based upgrade nudges | PM + Eng | Feature shipped |
| 9–10 | Content | Assess SEO rankings; double down on winning topics | Content | Updated calendar |
| 11–12 | All | 90-day review: what's working, what to cut, targets for Q2 | All | Retrospective doc |

## Metrics Dashboard
| Motion | Metric | Month 1 Target | Month 3 Target |
|--------|--------|---------------|----------------|
| PLG | Free → Paid conversion | 3% | 6% |
| Content | Organic signups | 20 | 100 |
| Community | Referral signups | 10 | 50 |
| Paid | CAC from paid | <$600 | <$400 |
| **Overall** | New paying teams | 15 | 60 |
| **Overall** | MRR added | $3,000 | $12,000 |

## Next Steps
1. Set up PostHog and instrument the activation funnel (this week)
2. Publish keyword research and editorial calendar (this week)
3. Launch Google Search campaign with $5K cap (week 2)
4. First metrics review: Day 30
```

## Edge Cases

- **No budget for paid channels:** Skip paid entirely, double down on PLG + content + community. Adjust timeline expectations — organic takes longer but compounds.
- **Enterprise product with $100K+ ACV:** PLG and community likely score low. Primary is usually Outbound or ABM, secondary is Inbound (thought leadership, not SEO blog posts).
- **Pre-product (no live product yet):** Recommend a "validation motion stack" — community + content to build audience pre-launch, outbound to line up design partners. PLG can't work without a product.
- **Already doing everything poorly:** Help the user kill motions, not add them. Score current motions, recommend cutting to 2, and redirect resources.
- **Marketplace or two-sided product:** Address both sides separately. Usually PLG for one side (supply) and outbound or paid for the other (demand). Stack two plans.
- **User just wants to know which tools to use:** Provide tool recommendations organized by motion, but push back — tools without motion strategy is like buying running shoes without knowing where you're racing.
