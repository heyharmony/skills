---
name: "Find Lookalike Customers"
description: "Find prospects that match your best customers — based on company attributes, buyer behaviors, and use-case patterns — so you can replicate your sales wins. Trigger on: find more like this customer, lookalike prospecting, customer clone, high-value customers, replicate success, similar deals, customer segmentation."
dependencies: []
connectors:
  - name: "HubSpot"
    reason: "Pulls deal history, customer attributes, revenue data to identify your highest-value customers and their common attributes"
  - name: "Salesforce"
    reason: "Provides account records and opportunity history to find patterns in company size, industry, and deal characteristics"
  - name: "Slack"
    reason: "Captures team discussions about which customers are most successful and why — tribal knowledge becomes searchable"
  - name: "Google Calendar"
    reason: "Maps customer engagement patterns (call frequency, escalation) to identify high-momentum vs. stalled deals"
  - name: "Linear"
    reason: "Tracks support tickets and feature requests to understand which customer types have highest satisfaction"
author: "Harmony"
version: "1.0.0"
icon: "sparkles"
cover: ""
screenshots: []
category: "Customer Success"
---

## Purpose

Stop hunting blindly. Identify your best customers (highest LTV, fastest growth, lowest churn) and reverse-engineer why they won. Then find prospects that match their profile. This skill analyzes your best customer conversations — what they were doing before, what triggered them to buy, what pain they had, how they decide — and identifies the specific attributes (company size, industry, growth stage, buying behaviors, use-case needs) that predict success. Then it searches for prospects matching that profile so you focus sales effort on the highest-probability deals. Works from Harmony customer conversations, deal data, and CRM records.

## When to Use

- You have a handful of great customers; you want to clone them
- SDR is building an outbound target list and asks "who should we go after?"
- You're planning next quarter's pipeline and want to focus on high-probability segments
- A customer just signed; you ask "how many other companies are like this one?"
- You want to avoid low-probability customers by understanding what high-probability looks like
- Account-based marketing planning; you want to find 50 accounts that match your ICP
- Sales rep says "we won a bunch of deals in fintech" — you want to surface more fintech prospects to chase

## Instructions

### 1. Identify your best customers

Ask the user:

- **What defines "best"?** Highest revenue, fastest time-to-value, lowest churn, highest NPS, lowest support load, best expansion?
- **What's the cohort?** Top 5 customers? Top quartile? Customers signed in the last 12 months?
- **Do you have conversation data?** Harmony transcripts from their discovery calls, onboarding calls, success check-ins?
- **Do you have deal/revenue data?** Deal size, time to close, contract length, expansion rate, churn status?

If conversation data exists, pull transcripts. Extract:
- What problem were they solving (pain points, current workaround)
- What triggered them to look for a solution (catalyst)
- How they evaluated you vs. alternatives
- What success criteria mattered most
- How they use your solution today

If only CRM data exists, extract:
- Company size (employees, revenue)
- Industry / vertical
- Growth stage (funded, profitable, etc.)
- Deal size and contract terms
- Expansion and retention patterns

### 2. Cluster your best customers

Group them by patterns:

**Firmographic patterns:**
- Company size (10–50 people? 100–500? 1000+?)
- Industry or vertical (SaaS, healthcare, retail, finance?)
- Growth stage (bootstrapped, Series A–B, enterprise?)
- Geography
- Tech stack and maturity signals

**Behavioral patterns:**
- How they found you (inbound, outbound, referral?)
- Evaluation process (quick decision, committee-driven, long POC?)
- Buying criteria they cared about most
- Deal-breakers that didn't exist for them
- Who was the champion (VP-level? Manager?)

**Use-case patterns:**
- What job are they using your product for?
- What's the core workflow or problem your solution solves for them?
- What other tools do they use alongside you?
- What outcomes matter most (speed, accuracy, cost, compliance?)

**Value patterns:**
- What ROI or outcome do they cite?
- How fast do they see value (days? weeks? months?)
- What's their expansion pattern (adds seats, new departments, higher tier?)

### 3. Identify the intersection (the winning profile)

What do your best customers have in common that your average or low-value customers don't?

Don't just list attributes. Identify the intersection:

**Example:** Your top 10 customers are all:
- Series B+ funded (not bootstrapped)
- 50–250 employees
- In vertical markets (not horizontal)
- Have an ops-first culture
- Already using your adjacent tools (indicated by tech stack)
- All found you through peer recommendations
- All had a champion at VP level or above
- All saw ROI in <30 days

This is different from "any customer in SaaS" — it's the specific intersection that predicts success for you.

### 4. Define disqualification criteria

What characteristics predict low value or churn?

- Too small (no budget)
- Too large (different buying process, different needs)
- Wrong industry (pain doesn't apply)
- Too early stage (no urgency, no budget)
- Too late stage (needs enterprise features you don't have)
- No ops/process focus
- Already committed to competitor (switching cost too high)

### 5. Search for lookalikes

Using the winning profile, identify prospect sources and search criteria:

**Firmographic search:**
- Company size: X–Y employees
- Industry/vertical: [list]
- Growth stage: [stage]
- Location: [regions]

**Behavioral signals to look for:**
- Recent funding round or revenue milestone (likely increased budget)
- Recent hiring in relevant department (pain/urgency)
- Recent tool adoption (tech stack alignment)
- Active recruiting (company scaling)
- Job postings in your space (pain signal)

**Outreach strategy:**
- Where do these customers congregate? (LinkedIn groups, industry events, alumni networks, Slack communities?)
- Who's likely to refer? (Your top customers themselves)
- What channels work for reaching them? (Outbound, inbound, events, partnerships?)

## Output Format

```markdown
# Lookalike Customer Finder — Your Winning Profile
_Analyzed: [date] · Best customers studied: [count] · Lookalike prospect estimate: [count in market]_

## Your Best Customers (The Cohort)
| Company | Industry | Size | Deal Size | Year 1 ARR | Retention | Key Signal |
|---------|----------|------|-----------|-----------|-----------|------------|
| [co] | [vert] | [size] | [deal] | [arr] | [churn rate] | [what makes them great] |

## What They Have In Common — The Winning Profile

### Firmographics
- **Company size:** [range] employees
- **Industries:** [list — be specific]
- **Growth stage:** [stage]
- **Geography:** [regions]
- **Annual revenue range:** [estimate]

### Behaviors That Predict Success
- **How they find us:** [discovery channel]
- **Evaluation style:** [timeline, committee-driven, POC length]
- **Buying trigger:** [what prompted them to search]
- **Deal-breaker absence:** [what they didn't have that stops others]
- **Champion characteristics:** [seniority, department, style]

### Use-Case Patterns
| Use Case | What They Solve | Time to Value | Expansion Pattern |
|----------|----------------|----|---------|
| [Job 1] | [Pain → Solution] | [days/weeks] | [how they expand] |

### Voice of Customer — Why They're Winning
> "[Quote from best customer about their pain]" — [Role, Company]

> "[Quote about what made them decide to buy]" — [Role, Company]

> "[Quote about value they see today]" — [Role, Company]

_Source: [Harmony conversation data]_

## Disqualification Criteria
**Do NOT pursue if:**
- [Red flag 1 — e.g., bootstrapped with no funding]
- [Red flag 2 — e.g., fewer than 30 employees]
- [Red flag 3 — e.g., in horizontal software (not vertical)]
- [Red flag 4 — e.g., already signed with competitor]

## Lookalike Prospect Profile
**Company size:** [range]
**Industries to target:** [list with rationale for each]
**Growth stage:** [stage]
**Key hiring indicators:** [what job titles they're hiring for signals pain]
**Recent signals:** [funding, expansion, leadership changes]

## Where to Find Lookalikes

### Search channels
- **LinkedIn search:** [Specific search syntax with company size, industry filters]
- **Industry databases:** [G2, PitchBook, Crunchbase filters]
- **Referral source:** [Ask your top customers who else they know in their space]
- **Community:** [Slack communities, industry associations, events where these customers congregate]

### Outreach strategy for this profile
- **Why they'd care:** [What's the pain point or trigger for this profile right now?]
- **Credibility hook:** [How do you reference your best customers' wins without naming them?]
- **Timing:** [When is this profile most receptive to reaching out?]
- **Warm intro approach:** [Can your best customers refer similar companies?]

## Estimated Prospect Universe
| Filter | Count | Notes |
|--------|-------|-------|
| Base universe (all companies in your verticals, in your size range) | [X] | Using standard business databases |
| With recent funding or revenue milestone | [Y] | Suggests budget, urgency |
| With hiring in relevant department | [Z] | Suggests pain, scaling |
| **Estimated qualified prospects** | **[Z × 0.3]** | Conservative: 30% of base |

---

**Now what?** Build your target list using these search filters. Verify 10–20 prospect companies against the winning profile (do they pass all criteria?). Arm your SDRs with this profile and the credibility hooks. Ask your best customers for referrals into similar companies. Set a goal to test this profile on your next 50 outbound touches.
```

## Example

**User:** "We're a project management platform for creative agencies. Our best customers are small agencies (15–40 people) in the creative/design space. I want to find more like them. Let me check our CRM and pull some of their conversations from Harmony."

**Output:**

```markdown
# Lookalike Customer Finder — FlowPM's Winning Profile
_Analyzed: 2026-03-05 · Best customers studied: 9 (high-retention segment) · Lookalike prospect estimate: 2,400+ qualified prospects in North America_

## Your Best Customers (The Cohort)
| Company | Industry | Size | Deal Size | Year 1 ARR | Retention | Key Signal |
|---------|----------|------|-----------|-----------|-----------|------------|
| BrightPath | Design Agency | 28 | $200/mo | $2,400 | 100% (6 months) | Early expansion to 3 seats |
| Kite Studio | Dev Agency | 22 | $180/mo | $2,160 | 100% (8 months) | Referring other agencies |
| Ember Creative | Full-service Agency | 35 | $240/mo | $2,880 | 100% (4 months) | Upgrading to annual plan |
| Canvas Lab | UX/Design | 18 | $150/mo | $1,800 | 100% (5 months) | Active daily user adoption |
| Vertex Agency | Digital Services | 32 | $220/mo | $2,640 | 100% (7 months) | Highest NPS (72) |

## What They Have In Common — The Winning Profile

### Firmographics
- **Company size:** 15–40 employees (sweet spot; larger agencies don't fit, smaller don't have process pain)
- **Industries:** Creative agencies (design, development, full-service, UX, content). NOT marketing agencies or dev shops doing software engineering.
- **Growth stage:** Established, profitable, 3+ years old
- **Geography:** US, UK, Australia (English-speaking, Western agency markets)
- **Annual revenue range:** $1M–$8M (confirms they can afford $150–$250/month)

### Behaviors That Predict Success
- **How they find us:** Word-of-mouth from peer agencies (9/9 came through referral, not paid ads or SEO)
- **Evaluation style:** Fast decision (5–14 days from first call to contract); single or dual decision-maker (ops lead + founder)
- **Buying trigger:** Hit a wall scaling (won 2–3 new clients; old tools broke; hire new ops person who refused spreadsheets)
- **Deal-breaker absence:** None of these customers had internal tools built already or committed to Asana/Monday (which eliminated them before conversation)
- **Champion characteristics:** Head of Operations or Project Director (mid-level, ops-focused, not founder or exec)

### Use-Case Patterns
| Use Case | What They Solve | Time to Value | Expansion Pattern |
|----------|----------------|----|---------|
| Real-time cross-project visibility | Replace spreadsheet dashboards; see all 8–15 client projects in one view | 3–5 days (live after onboarding) | Add 2nd–3rd PM seat within 6 months; move from monthly to annual plan |
| Resource conflict prevention | Avoid double-booking; prevent burnout; catch overallocation before it cascades | 1–2 weeks (after team gets habits) | Higher retention; lower churn risk |
| Client reporting automation | Replace manual copy-paste; send status updates from one dashboard | 2–3 weeks (after templating) | Perceived as "professional" by their clients; enables account growth |

### Voice of Customer — Why They're Winning
> "We were running 12 projects on a mix of Asana, spreadsheets, and Slack. Nobody knew the real status of anything." — Head of Ops, BrightPath

> "I tried Monday.com for 6 months. It's built for internal teams, not agencies juggling 15 clients." — Project Director, Kite Studio

> "The moment I could show our founder a single dashboard with every project's health, she stopped coming to my desk three times a day." — COO, Ember Creative

_Source: Customer interviews, Jan–Feb 2026 in Harmony_

## Disqualification Criteria
**Do NOT pursue if:**
- Fewer than 12 employees (won't have the process pain yet)
- Larger than 75 people (need enterprise features, different needs)
- Software development shops / consultancies (sprint-based, need Jira, not our templates)
- Marketing agencies (campaign-driven workflows, very different structure)
- Solo freelancers / fractional teams (need simpler, lighter tools)
- Already locked into Asana, Monday, or Basecamp long-term (switching cost too high)
- Not ops-driven culture (founder control everything, no documented processes)

## Lookalike Prospect Profile
**Company size:** 15–40 employees
**Industries to target:** Creative agencies (design, development, full-service, UX), including boutique digital marketing agencies that manage client projects. NOT marketing media buying agencies or software dev shops.
**Growth stage:** Established, 3+ years old, $1M–$8M revenue (not startups)
**Key hiring indicators:** Hiring "Project Manager," "Operations Manager," "Business Operations" = pain signal (they're trying to professionalize)
**Recent signals:** Won 2+ new clients in 90 days, hired new ops/PM lead, expanding into new service lines

## Where to Find Lookalikes

### Search channels
- **LinkedIn search:** Use these filters:
  - Industry: "Design Agencies," "Development," "Full-Service Agencies," "Creative Services"
  - Company size: 15–50 employees
  - Location: US, UK, Australia
  - Keywords in company description: "agency," "boutique," "creative," "studio"
  - Staff growth: Recently hired Project Manager, Operations Manager, or PM role

- **Industry databases:**
  - Crunchbase: Filter by industry (Creative Agencies), size (15–50), location
  - PitchBook: Agency directory; filter by size and service offering
  - Google Maps: Search "Design Agency near [city]" + LinkedIn search each

- **Referral source:** Ask BrightPath, Kite Studio, Ember Creative "Who else in your network has the same scaling problem you had?" They know 10+ similar agencies.

- **Community:**
  - Agency Slack communities (AppWorks, Agency.com, local groups)
  - Industry events (AIGA (graphic designers), interaction design conferences)
  - Alumni networks (many agencies are founded by alums of same schools)
  - Peer communities (Agencies of the world, Founder's Institute)

### Outreach strategy for this profile
- **Why they'd care:** Agencies growing fast hit a process wall at 15–30 people. Project visibility and resource management become critical. They're frustrated with tools built for in-house teams.
- **Credibility hook:** "We specialize in creative agencies specifically — we have case studies from [type of agency] who went from managing projects in spreadsheets to dashboard visibility."
- **Timing:** Best time is right after they hire a new ops/PM person (that person is actively looking for solutions). Also right after they win a big new client (expansion pain).
- **Warm intro approach:** "I work with agencies like BrightPath and Kite. They referred me to you — said you might be experiencing the same scaling challenges they did."

## Estimated Prospect Universe
| Filter | Count | Notes |
|--------|-------|-------|
| Base universe (creative agencies, 15–50 employees, US/UK/AU) | 4,200 | Per business database estimates |
| With recent PM/Ops hiring or growth signals | 1,900 | 45% of base; indicates active pain/scaling |
| With funding or revenue growth <12 months | 950 | 22% of base; suggests budget |
| **Estimated qualified prospects** | **950** | Realistically, you can target all of these |

**Reality check:** Your team can realistically outreach to 50–100 of these per month. At 15% conversion, that's 7–15 new customers/month if you execute well.

---

**Now what?**
1. Export the 950 qualified prospects from LinkedIn (or buy the list from a provider)
2. Verify 20 of them manually against the winning profile
3. Build your SDR outbound sequence around the credibility hook: "You're like [best customer] — here's why we built this for agencies like yours"
4. Ask BrightPath and Kite Studio for warm intros into 5 agencies each
5. Set a goal: "Close 10 agencies matching this profile this quarter"
```

## Edge Cases

- **You don't have a clear "best customer" cohort yet:** Build a hypothesis profile based on your ICP and your 2–3 most successful deals. Label it "v0 — hypothesis" and recommend validating with 10 more customer conversations.
- **Your best customers are all different (no clear pattern):** You might have 2+ distinct ICPs. Segment them and create separate lookalike profiles for each. This is valid and better than forcing a false pattern.
- **You have great customers but don't know why they're great:** Run the analysis on them anyway. Their conversations will reveal the patterns. You might discover "I thought it was company size, but actually it's the ops leader's background" or "all my best customers came through one referral source."
- **User wants to target expansion within existing customers:** Adapt the skill — instead of finding new companies, find other departments within the same customer (e.g., "does the Finance team use this too?").
- **You sell to SMBs and the "lookalike" pool is huge:** Focus your SDRs on the highest-probability subset using secondary filters (hiring, recent funding, specific use case keyword).

```
