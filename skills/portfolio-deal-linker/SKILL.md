---
name: "Match Similar Past Deals"
description: "Surface relevant past deals and wins from your portfolio when discussing new prospects — extract deal patterns, buyer profiles, competitive context, and success criteria from closed deals to inform current opportunities. Trigger on: deal linking, portfolio analysis, deal pattern, similar deal, competitive positioning, win pattern."
dependencies: []
connectors:
  - name: "Salesforce"
    reason: "Pull closed deals, opportunity records, and deal amounts to build portfolio baseline and match against current prospects"
  - name: "HubSpot"
    reason: "Surface deal stages, pipeline progression, and contact history to identify which accounts and personas convert fastest"
  - name: "Gmail"
    reason: "Extract deal-closing emails and proposal language from past wins to understand what worked and why"
  - name: "Slack"
    reason: "Pull deal celebration posts and team feedback to surface win patterns and buyer personality traits"
author: "Harmony"
version: "1.0.0"
icon: "sparkles"
cover: ""
screenshots: []
category: "Sales"
---

## Purpose

Link current opportunities to the most relevant closed deals from your portfolio — extracting buyer profile patterns, competitive positioning, success criteria, and deal closure strategies. When Harmony conversation data exists from past sales calls, proposals, or closing conversations, these insights are grounded in exactly what was said and why the deal closed. Sellers and managers use this to accelerate deal progression by seeing what worked for similar buyers.

## When to Use

- Approaching a new prospect that resembles a past win — find the similar deal to replicate success patterns
- Stuck on a deal and want to see how your team closed similar ones in the past
- Preparing for a discovery call — reference how you positioned to comparable buyers before
- Building a competitive response for a prospect who's evaluating alternatives
- Analyzing your team's win patterns to coach newer reps on what works for this segment

## Instructions

### 1. Gather context

Ask what the user needs:
- **Who's the prospect?** Role, company, segment, size, industry
- **What stage are they at?** Early discovery, evaluating, negotiating, or deciding
- **What challenge do they face?** Problem statement they've described
- **What's blocking them?** Objections, budget, technical fit, competitive threats

If Harmony conversation data exists from discovery calls with this prospect, pull:
- Exact problem statement and pain indicators mentioned
- Decision criteria or evaluation framework they described
- Competitive alternatives they're considering
- Timeline and budget signals they've shared

### 2. Search portfolio for similar deals

Identify which closed deals match:
- **Same persona** — Role, company size, industry, geography
- **Same problem** — Similar pain points or business challenges
- **Same competitive context** — Same alternatives mentioned in those deals
- **Same decision process** — Committee size, timeline, approval steps

Retrieve for each matched deal:
- Deal size and contract terms
- Sales cycle length and key milestones
- Discovery questions that opened conversations
- Objections raised and how they were overcome
- Decision criteria that mattered most
- Final value prop and differentiators that won the deal

### 3. Extract buyer profile patterns

For all matched deals, synthesize:
- **Who decided?** Title and role of economic buyer(s), influencers, technical gatekeepers
- **What mattered most?** Which value prop resonated in calls — cost savings, risk reduction, ease of use, competitive advantage
- **How did they move through stages?** Average days in discovery, evaluation, negotiation phases
- **What triggered urgency?** Budget cycle, new initiative, competitive threat, deadline
- **Who were the champions?** Which roles actively pushed the deal forward

### 4. Map competitive context

From matched deals, extract:
- Which competitors came up in those conversations and how prospects positioned them
- What proof points and evidence proved most persuasive in those deals
- Pricing sensitivity patterns — what made budget seem reasonable
- Unique differentiators that mattered for this segment

### 5. Build the linkage output

Create a structured bridge between the current opportunity and past wins, including:
- Which past deals are most relevant and why
- What worked for those buyers and what you should emphasize
- Objections you've seen from this segment and proven responses
- Deal progression timeline and key milestones to expect
- Next steps to accelerate movement

## Output Format

# Deal Linkage — [Current Prospect]
_Prepared [date] · Most similar past deals: [count]_

## Prospect Profile
- **Company:** [company name and basics]
- **Role:** [primary contact(s) and their role]
- **Stated Problem:** [what they've told you]
- **Current Stage:** [discovery / evaluation / negotiation / deciding]
- **Decision Timeline:** [when they need to decide]

## Top 3 Similar Wins from Portfolio

### Deal #1: [Past Customer Name] — [Similarity Score: X/10]
- **Deal size:** $[amount]
- **Sales cycle:** [# of weeks]
- **Buyer profile match:** [roles that decided, who was champion]
- **Problem they faced:** [their stated pain]
- **Value prop that won:** [what actually closed the deal]
- **Key objections:** [what they worried about and how you addressed]
- **Timeline & milestones:** T-1: [event], T-2: [event], T-0: [closed]
- **Why relevant:** [specific parallels to current prospect]

### Deal #2: [Past Customer Name] — [Similarity Score: X/10]
- **Deal size:** $[amount]
- **Sales cycle:** [# of weeks]
- **Buyer profile match:** [who decided, champion roles]
- **Problem they faced:** [their pain]
- **Value prop that won:** [what actually closed it]
- **Key objections:** [concerns and handling]
- **Timeline & milestones:** [key dates]
- **Why relevant:** [parallel to current situation]

### Deal #3: [Past Customer Name] — [Similarity Score: X/10]
- **Deal size:** $[amount]
- **Sales cycle:** [# of weeks]
- **Buyer profile match:** [decision makers]
- **Problem they faced:** [pain]
- **Value prop that won:** [winning angle]
- **Key objections:** [obstacles overcome]
- **Timeline & milestones:** [stages]
- **Why relevant:** [connection to current deal]

## Buyer Profile Synthesis (from matched deals)
- **Decision makers:** [titles/roles involved]
- **Champion profile:** [characteristics of person who pushed deal]
- **What mattered most:** [ranked by frequency/emphasis]
  1. [criterion 1 — mentioned in 3/3 deals]
  2. [criterion 2 — mentioned in 2/3 deals]
  3. [criterion 3 — mentioned in 1/3 deals]
- **Average sales cycle:** [# weeks from first call to close]
- **Urgency signals that matter:** [what triggered timeline pressure]

## Competitive Context
| Competitor | Mentioned in Past Deals | How We Positioned | Win Rate vs. Competitor |
|-----------|------------------------|-------------------|----------------------|
| [Alt 1] | Deal 1, Deal 3 | [positioning] | [if known] |
| [Alt 2] | Deal 2 | [positioning] | [if known] |

## Playbook: What Worked for This Segment
- **Discovery questions that opened conversations:** [specific questions that got them talking]
- **Proof points that resonated:** [metrics, logos, case studies that mattered]
- **Objection patterns and responses:**
  - Objection 1: [what they worried about] → Response: [how to handle]
  - Objection 2: [concern] → Response: [proven response]
  - Objection 3: [resistance] → Response: [what worked]
- **Value prop progression:** Stage 1: [initial angle], Stage 2: [expanding value], Stage 3: [closing message]

## Next Steps for Current Deal
1. Review Deal #1 conversation recording — study how [rep name] positioned to [persona]
2. Schedule discovery call with specific agenda: [key areas to explore]
3. Prepare response to likely objection: [most common objection from past deals]
4. Target [# weeks] for evaluation phase based on similar deal progression

---
_Want me to pull the full call recordings from Deal #1, or draft discovery questions based on past wins?_

## Example

**User:** "I'm talking to Acme Corp — they're a 500-person SaaS company evaluating us for their enterprise sales team. They're concerned about implementation time and integration with Salesforce. What similar deals should I look at?"

**Output:**

# Deal Linkage — Acme Corp
_Prepared 2026-03-22 · Most similar past deals: 3_

## Prospect Profile
- **Company:** Acme Corp, 500 people, Series C SaaS (HR tech)
- **Role:** VP Sales (Sarah Chen) + Sales Ops (Michael Torres)
- **Stated Problem:** Reps aren't logging activity, they're losing context on prospects, integration pain keeps them using email instead of CRM
- **Current Stage:** Evaluation — in week 2 of POC timeline, comparing to 2 competitors
- **Decision Timeline:** Need to decide end of Q2 (8 weeks from now)

## Top 3 Similar Wins from Portfolio

### Deal #1: RelayTech Solutions — Similarity Score: 9/10
- **Deal size:** $180K ACV
- **Sales cycle:** 12 weeks
- **Buyer profile match:** VP Sales + Sales Ops owner, 400–600 person company, Series C
- **Problem they faced:** Reps staying in email, missing forecast accuracy, Salesforce integration wasn't seamless
- **Value prop that won:** "Automatic activity logging + Salesforce sync that actually works means your reps stop leaving the system"
- **Key objections:** (1) "Won't our reps still just use email?", (2) "Implementation will take 6 months", (3) "Datadog already integrates with Salesforce"
- **Timeline & milestones:** T-1: Discovery (2 weeks), T-2: Technical evaluation (3 weeks), T-3: Exec review & negotiation (2 weeks), T-4: POC runs in parallel, T-0: Close
- **Why relevant:** Identical company size, same buyer committee (Sales + Ops), same core objection about Salesforce integration, same maturity stage (Series C growing sales team)

### Deal #2: Infinite Labs — Similarity Score: 8/10
- **Deal size:** $145K ACV
- **Sales cycle:** 10 weeks
- **Buyer profile match:** VP Sales + Sales Operations Manager, 480 people, Series B-C growth stage
- **Problem they faced:** Remote team, no visibility into where deals stood, reps treating CRM as a chore instead of a tool
- **Value prop that won:** "Automation handles the logging, reps focus on selling, leadership sees exactly where every deal is"
- **Key objections:** (1) "Implementation timeline", (2) "Does it work with our custom Salesforce config?", (3) "Learning curve for the team"
- **Timeline & milestones:** T-1: Discovery (10 days), T-2: Technical fit review (2 weeks), T-3: POC with 3 pilot teams (4 weeks), T-0: Full rollout decision
- **Why relevant:** Similar-sized company in growth mode, POC approach matched how Acme wants to evaluate, same Salesforce integration concern came up

### Deal #3: CloudScale Inc. — Similarity Score: 7/10
- **Deal size:** $220K ACV (larger segment but similar buyer profile)
- **Sales cycle:** 14 weeks
- **Buyer profile match:** VP Sales, Sales Director, Sales Operations, 650 people, Series C
- **Problem they faced:** Inconsistent logging across teams, forecasting accuracy was suffering, needed clean data pipeline into BI tool
- **Value prop that won:** "Your data is clean from day one — reps log automatically, your forecast is reliable, your BI tools actually work"
- **Key objections:** (1) "What about privacy/compliance with logging?", (2) "Data latency concerns", (3) "Custom use cases we've built in Salesforce"
- **Timeline & milestones:** T-1: Discovery + technical spec (3 weeks), T-2: POC design phase (2 weeks), T-3: POC execution (4 weeks), T-4: Negotiation (2 weeks), T-0: Close
- **Why relevant:** Larger similar company, shows how integration concerns were addressed, demonstrates how to handle custom Salesforce config concerns, longest cycle but proved the integration works at scale

## Buyer Profile Synthesis (from matched deals)
- **Decision makers:** VP Sales (economic buyer) + Sales Operations or Sales Manager (technical gatekeeper, often the champion pushing internally)
- **Champion profile:** Operations-focused, pragmatic, cares about rep adoption and data quality, willing to champion if implementation doesn't disrupt the team
- **What mattered most:**
  1. Salesforce integration that actually works (mentioned in all 3 deals, primary objection)
  2. Implementation speed — "we don't want a 6-month project" (mentioned in 2/3 deals)
  3. Rep adoption without forcing behavior change (mentioned in 3/3 deals)
- **Average sales cycle:** 12 weeks (ranging 10–14)
- **Urgency signals that matter:** End-of-quarter forecasting panic, new sales goal missed due to data quality, hiring spree requiring new rep onboarding

## Competitive Context
| Competitor | Mentioned in Past Deals | How We Positioned | Win Rate vs. Competitor |
|-----------|------------------------|-------------------|----------------------|
| Datadog | Deal 1, Deal 3 | "Datadog monitors infrastructure. We monitor the human sales workflow. They're infrastructure, we're sales operations." | 2-2 (split decision in early deals, but last 3 losses were price, not functionality) |
| Outreach | Deal 1, Deal 2 | "Outreach focuses on cadence and sequences. We focus on logging and CRM hygiene so your data is clean." | 3-1 (won more often here) |
| Native Salesforce | Deal 3 | "Salesforce is a system, not intelligence. We sit on top and make it actually useful." | Rarely lost to native, lost to budget concerns |

## Playbook: What Worked for This Segment
- **Discovery questions that opened conversations:**
  - "How much time do your reps actually spend in Salesforce vs. email every week?"
  - "If you had perfect visibility into where every deal stood, what would you do differently?" (Opens up forecast accuracy conversation)
  - "What's the biggest thing your Sales Ops team spends time on?" (Usually data cleaning)
  - "When you implement new tools, what usually kills adoption?" (Reveals the real blockers)

- **Proof points that resonated:**
  - "70% of reps use email instead of CRM when forced to choose" — metrics on adoption pain
  - RelayTech case study showing 25% faster close time after 90-day implementation
  - "Installed in 4 weeks with zero rep disruption" — implementation speed proof
  - Net NPS 68 from Series B/C customers with similar team sizes

- **Objection patterns and responses:**
  - Objection: "Implementation will take 6 months and disrupt our sales team"
    → Response: "RelayTech was live in 4 weeks because we run the implementation around your sales calendar, not ours. We handle data migration and integration, your reps just use it when they're ready. Show them the RelayTech onboarding timeline."
  - Objection: "Will this actually work with our Salesforce setup? We have custom fields and workflows"
    → Response: "We've worked with 200+ Salesforce instances including some with heavy customization. Infinite Labs had a custom config similar to yours. Their implementation took a week longer but zero functionality loss. We'll do a 2-hour technical audit before POC to confirm it works with your exact setup."
  - Objection: "Our reps already have too many tools, they won't adopt this"
    → Response: "This removes tools for them. No new login, no new interface. Logging happens in the background so reps can spend more time selling, not data entry. RelayTech saw 95% adoption in month 1 because it actually reduces their workload."

- **Value prop progression:**
  - Early discovery: "A lot of deal intelligence gets stuck in email. Let's fix that." (Opens problem recognition)
  - Mid evaluation: "Imagine if your Sales Ops team spent time coaching reps instead of cleaning data." (Expands benefit)
  - Late evaluation: "RelayTech went from 67% forecast accuracy to 94% in 90 days. What would better data do for your commission forecasting?" (Closes on specific ROI)

## Next Steps for Current Deal
1. Schedule technical deep-dive with Michael (Sales Ops) — have our implementation team walk through how we handled RelayTech's Salesforce custom fields (their concern will be the same)
2. Prepare for likely objection about implementation timeline — have the RelayTech 4-week implementation plan ready to show Sarah doesn't mean risk
3. Use the "reps stay in email" discovery question in next call with Sarah — 3 out of 3 past wins mentioned this as the real problem
4. Plan for 12-week sales cycle (industry standard for this segment), with POC in weeks 4–6

---
_Want me to pull the RelayTech call recording from their discovery phase, or draft the technical audit plan for Acme's Salesforce setup?_

## Edge Cases

- **Prospect profile doesn't match any past deals:** Work from the data you have and ask clarifying questions about their specific company, team size, and problem. Flag that stronger recommendations would come from finding similar past deals if they exist. Recommend asking "Have we worked with anyone in [industry/segment] before?"
- **Past wins in different market segments:** Note the segment difference but still pull patterns — e.g., "We closed a deal in fintech but same company size and Salesforce concern. Here's what we learned."
- **Prospect is in evaluation with your competitor from a past deal:** Double-check — did you win or lose? If you lost, pull the objections and build a response. If you won, pull how you positioned against them and use that angle now.
- **Deal data incomplete or stale (>2 years old):** Include but flag the age. Note "This deal closed in 2024, market may have shifted, but the buyer profile is still relevant."
- **Multiple very similar deals (5+ in portfolio):** Rank by recency, deal size, and whether rep contact is still at company (they can often be internal references). Show top 3, offer to pull full list if useful.
- **Prospect is a direct competitor to a past customer:** Do not share specific deal details with internal names/metrics. Generalize to "similar company in [segment]" and surface playbook without deal transparency.
