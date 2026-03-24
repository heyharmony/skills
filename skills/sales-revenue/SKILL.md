---
name: "Track Sales Revenue"
description: "Track revenue by rep, deal, segment, or period — actual closed deals and pipeline momentum. Pull from CRM and Harmony conversation data to forecast accuracy. Trigger on: revenue report, sales numbers, revenue by rep, revenue forecast, pipeline value, deal velocity, how much are we closing."
dependencies: []
connectors:
  - name: "HubSpot"
    reason: "Pull closed deals, pipeline stages, and forecast data to track revenue against targets by rep and segment"
  - name: "Salesforce"
    reason: "Import opportunity amounts, close dates, and pipeline stages to generate accurate revenue reports and forecasts"
  - name: "Slack"
    reason: "Push weekly/monthly revenue summaries and quota updates to sales leadership and team channels"
  - name: "Stripe"
    reason: "Pull actual revenue (captured vs. pipeline) to reconcile MRR/ARR across payment systems"
---

## Purpose

Track and forecast revenue — what's closed, what's in the pipeline, what's at risk, and what's on track to close. Works from CRM pipeline data (deals, stages, close dates, amounts) and Harmony conversation data (recent sales calls showing momentum or blockers). Helps sales leaders answer "Are we on track to hit target this month/quarter?" and "Where are the risks?" Includes actual closed revenue, pipeline by stage, and forecast confidence.

## When to Use

- Weekly sales huddle or forecast review — where do we stand vs. targets?
- Month-end / quarter-end — tracking actual closings and commission payouts
- Performance reviews — measuring AE productivity and quota attainment
- Pipeline health check — are we forecasting accurately, or building pipe for next period?
- Board update or investor reporting — revenue summary with confidence levels
- Territory planning — how much revenue potential per rep or segment?

## Instructions

### 1. Gather context

Ask what metrics matter most and what data is available:
- **What period?** (This month, this quarter, YTD, trailing 12 months?)
- **What segments?** (By rep, by segment, by deal size, by vertical?)
- **What data sources?** (HubSpot, Salesforce, custom lists, Harmony conversations?)
- **Targets:** What's the revenue goal for the period?

If Harmony data exists, pull:
- Recent sales calls and their momentum (deals moving to close, objections, timeline confidence)
- Customer conversations showing receptiveness or hesitation
- Buying timeline signals from conversations
- Deal risk indicators mentioned on calls

### 2. Pull actual revenue

Extract closed deals from CRM:
- Deals closed in the period (closed date, amount, rep, segment)
- Closed deals vs. target (on track / ahead / behind)
- Deal mix (average deal size, deal count, largest deals)

**Calculate:**
- Total closed revenue (actual)
- Closed revenue by rep (commission tracking, quota attainment)
- Closed revenue by segment (vertical, company size, region)
- Closed revenue by deal size (% from <$50K, $50K–$100K, $100K+, etc.)

### 3. Analyze pipeline

Extract open opportunities:

**By stage:**
- Qualified/Opportunity: High probability
- Demo/Evaluation: Medium probability
- Proposal/Negotiation: Medium-high probability
- Close: Very high probability (expected to close this period)

**By close date:**
- This month
- This quarter
- Next quarter
- Beyond

**Calculate:**
- Pipeline value by stage
- Weighted forecast (stage × probability of close)
- Expected revenue by close month

### 4. Assess forecast confidence

Evaluate deal quality and close likelihood:

**High confidence:**
- Close stage with confirmed demo/negotiation completed
- Customer gave verbal commitment or signed LOI
- Deal appears in multiple CRM records (strong tracking)
- Recent call (< 7 days) with positive momentum

**Medium confidence:**
- Proposal out, waiting for customer feedback
- Negotiation in progress but not finalized
- No recent call (> 7 days old information)

**Low confidence:**
- Early stage (discovery/demo) with uncertain timeline
- No recent contact (> 30 days)
- Customer has competing evaluation
- Budget or approval timeline unclear

### 5. Identify risks and opportunities

Flag deals at risk and upsell opportunities:

**At risk (may slip):**
- No activity > 14 days
- Customer mentioned concerns on recent call
- Budget not confirmed
- Competing vendor in mix

**Opportunities (may accelerate or expand):**
- Recent positive call showing urgency
- Customer expanding scope
- New stakeholder engagement
- Urgency trigger mentioned (deadline, budget year-end, new hire)

### 6. Format and deliver

Create a revenue summary with actuals, forecast, and confidence.

## Output Format

# Sales Revenue Report
_Period: [Month/Quarter] | Report date: [Date] | Target: $[X]_

## Executive Summary
- **Revenue closed (actual):** $[X]
- **% of target:** [X]% ([Ahead / On track / Behind])
- **Pipeline (all open):** $[X]
- **Weighted forecast (high/med confidence):** $[X]
- **Forecast vs. target:** [Ahead / On track / Behind]

## Actual Revenue Closed

### By Rep
| Rep | Deals Closed | Revenue | % of Target | Status |
|-----|--------------|---------|------------|--------|
| [Rep name] | [#] | $[X] | [%] | [Ahead / On track / Behind] |

### By Segment
| Segment | Deals Closed | Revenue | Avg Deal Size | % of Total |
|---------|--------------|---------|---------------|------------|
| [Segment] | [#] | $[X] | $[Y] | [%] |

### Deal Mix
| Deal Size | # Deals | Revenue | % of Total |
|-----------|---------|---------|------------|
| <$50K | [#] | $[X] | [%] |
| $50K–$100K | [#] | $[X] | [%] |
| $100K+ | [#] | $[X] | [%] |

## Pipeline Summary

### By Stage (all open deals)
| Stage | # Deals | Total Value | Avg Deal | Probability |
|-------|---------|-------------|----------|------------|
| Qualified | [#] | $[X] | $[Y] | 20% |
| Demo | [#] | $[X] | $[Y] | 40% |
| Proposal | [#] | $[X] | $[Y] | 70% |
| Close | [#] | $[X] | $[Y] | 90% |
| **Total** | **[#]** | **$[X]** | — | — |

### By Close Date (expected timing)
| Period | # Deals | Pipeline Value | Weighted Forecast | Confidence |
|--------|---------|-----------------|-------------------|------------|
| This month | [#] | $[X] | $[Y] | High / Med / Low |
| This quarter | [#] | $[X] | $[Y] | High / Med / Low |
| Next quarter | [#] | $[X] | $[Y] | High / Med / Low |
| Beyond | [#] | $[X] | — | Low |

## Revenue Forecast

### Actual vs. Target
| Period | Target | Actual | Forecast | % of Target | Status |
|--------|--------|--------|----------|------------|--------|
| This month | $[X] | $[Y] | $[Z] | [%] | [Ahead / On track / Behind] |
| This quarter | $[X] | $[Y] | $[Z] | [%] | [Ahead / On track / Behind] |

**Forecast methodology:** [Weighted pipeline (stage probability) + recent conversation data (Harmony) + rep input]

## Deals at Risk (May Slip or Reduce)

| Deal | Company | Amount | Current Stage | Days Inactive | Risk Level | Mitigation |
|------|---------|--------|--------|---------|-----------|-----------|
| [Deal] | [Company] | $[X] | [Stage] | [#] | [High/Med/Low] | [Action] |

## Upsell & Expansion Opportunities

| Account | Current Deal | Opportunity | Potential | Next Step |
|---------|-----------|------------|-----------|-----------|
| [Company] | [Current deal] | [Scope expansion, add-on, multi-year] | $[X] | [Action] |

## Revenue Velocity Metrics

| Metric | Value | vs. Last Period | Trend |
|--------|-------|-----------------|-------|
| **Deal velocity (days from demo to close)** | [#] days | — | [↑/→/↓] |
| **Avg deal size** | $[X] | [+/−]% | [↑/→/↓] |
| **Win rate (closed / total worked)** | [X]% | [+/−]% | [↑/→/↓] |
| **Deals in pipeline** | [#] | [+/−] | [↑/→/↓] |
| **New deals added (this month)** | [#] | — | [↑/→/↓] |

## Conversation Insights (from Harmony, if available)

_Recent sales calls showing momentum or concerns:_
- **[Account]** — [Rep] spoke with [Contact] on [Date]. Key quote: "[Signal or concern]." Implication: [Deal likely to close / At risk / Accelerating].
- **[Account]** — [Rep] mentioned [objection or question] on call. Status: [Addressing / Resolved / Outstanding].

## Now What?

1. **At-risk deals:** Follow up with [# deals and names] this week; get updates on timeline and blockers
2. **Forecast:** If current pace continues, we'll close $[X] this period ([ahead/on track/behind] target)
3. **Acceleration opportunities:** 3 deals ([Account 1], [Account 2], [Account 3]) could close early if we push this week
4. **Team focus:** [Rep name] is [ahead/behind] pace — recommend [support/coaching]
5. **Next period prep:** [# deals] in pipeline for next quarter; consider sourcing to ensure [X] targets remain achievable

---

## Example

**User:** "Give me this month's revenue report. We're tracking against a $500K target. Pull from HubSpot and recent calls."

**Output:**

# Sales Revenue Report
_Period: March 2026 | Report date: 2026-03-22 | Target: $500K_

## Executive Summary
- **Revenue closed (actual):** $185,000 (9 deals)
- **% of target:** 37% (Behind pace for full month, but 6 days remain)
- **Pipeline (all open):** $1,240,000
- **Weighted forecast (high/med confidence):** $620,000
- **Forecast vs. target:** **On track if we close 6 deals from Proposal/Close stages this week**

## Actual Revenue Closed

### By Rep
| Rep | Deals Closed | Revenue | % of Target | Status |
|-----|--------------|---------|------------|--------|
| Sarah Johnson | 3 | $95,000 | 32% of $300K territory | On track |
| Marcus Washington | 2 | $50,000 | 22% of $225K territory | Behind |
| Jennifer Lee | 4 | $40,000 | 27% of $150K territory | On track |

### By Segment
| Segment | Deals Closed | Revenue | Avg Deal Size | % of Total |
|---------|--------------|---------|---------------|------------|
| Financial Services | 5 | $125,000 | $25,000 | 68% |
| B2B SaaS | 3 | $45,000 | $15,000 | 24% |
| Tech/Consulting | 1 | $15,000 | $15,000 | 8% |

### Deal Mix
| Deal Size | # Deals | Revenue | % of Total |
|-----------|---------|---------|------------|
| <$25K | 5 | $95,000 | 51% |
| $25K–$50K | 3 | $105,000 | 57% |
| $50K+ | 1 | $0 | 0% |

## Pipeline Summary

### By Stage (all open deals)
| Stage | # Deals | Total Value | Avg Deal | Probability |
|-------|---------|-------------|----------|------------|
| Qualified | 8 | $220,000 | $27,500 | 20% |
| Demo | 5 | $180,000 | $36,000 | 40% |
| Proposal | 9 | $580,000 | $64,444 | 70% |
| Close | 4 | $260,000 | $65,000 | 90% |
| **Total** | **26** | **$1,240,000** | — | — |

### By Close Date (expected timing)
| Period | # Deals | Pipeline Value | Weighted Forecast | Confidence |
|--------|---------|-----------------|-------------------|------------|
| This month (Mar 23–31) | 7 | $380,000 | $320,000 | High (6 deals in Close stage) |
| April | 12 | $550,000 | $330,000 | Medium (many in Proposal) |
| May+ | 7 | $310,000 | $150,000 | Low (early-stage or uncertain) |

## Revenue Forecast

### Actual vs. Target
| Period | Target | Actual | Forecast | % of Target | Status |
|--------|--------|--------|----------|------------|--------|
| March | $500,000 | $185,000 | $505,000 | **101%** | **On track if we close 6 remaining deals** |
| Q1 (Jan–Mar) | $1,400,000 | $650,000 (Jan $220K, Feb $245K, Mar $185K forecast) | $1,380,000 | **99%** | **On track** |

**Forecast methodology:**
- Deals in Close stage (probability 90%) = $260K likely this month
- Deals in Proposal stage (probability 70%) = $406K if we win 80% = $325K
- Conservative blend: $185K actual + $320K forecast = $505K

## Deals at Risk (May Slip or Reduce)

| Deal | Company | Amount | Current Stage | Days Inactive | Risk Level | Mitigation |
|------|---------|--------|--------|---------|-----------|-----------|
| Enterprise Expense Mgmt | Pinnacle Services | $150,000 | Proposal | 8 | Medium | Sarah spoke with sponsor 3/19; CEO review in progress. Follow up Wed 3/26. |
| API Monitoring Suite | Compass Financial | $95,000 | Proposal | 12 | High | No contact since 3/10. Contact (Sarah T.) out until 3/24. Sarah J. should email today to re-engage. |
| Sales Automation | Atlas SaaS | $85,000 | Close | 2 | Low | Contract signed; implementation starts 4/1. On track. |

## Upsell & Expansion Opportunities

| Account | Current Deal | Opportunity | Potential | Next Step |
|---------|-----------|------------|-----------|-----------|
| CloudSync | API Monitoring ($45K) | Professional tier upgrade + integrations | +$15,000 | Mention in implementation kickoff (4/1) |
| Relay | Sales Automation ($35K) | Multi-year prepay discount (3-year for 25% off) | +$61,250 (lifetime value) | Sarah to pitch in April review |
| Modular | Expense Mgmt ($30K) | Add Finance team (scope expansion) | +$20,000 | Mentioned in discovery; revisit after initial close |

## Revenue Velocity Metrics

| Metric | Value | vs. Last Month | Trend |
|--------|-------|-----------------|-------|
| **Deal velocity (days from demo to close)** | 28 days | −7 days | ↑ (Getting faster!) |
| **Avg deal size** | $20,556 | −$2,444 | ↓ (More SMB mix this month) |
| **Win rate (closed / total worked)** | 56% | +8% | ↑ (Better qualification) |
| **Deals in pipeline** | 26 | +3 | ↑ (Pipeline growing) |
| **New deals added (this month)** | 5 | (vs 4 in Feb) | ↑ (Sourcing improving) |

## Conversation Insights (from Harmony sales calls 3/18–3/22)

_Recent sales calls showing momentum or concerns:_

- **Atlas SaaS (Michael Chen, VP Ops)** — Sarah J. spoke with Michael on 3/22. Key quote: "Our CEO approved the contract. We can sign this week and start implementation in April." Implication: **Deal will close by 3/28. Lock it in.**

- **Compass Financial (Sarah Torres, CFO)** — Sarah J. discussed on 3/10. Key concern: "We're comparing your solution against Competitor A on integration capabilities." Status: **At risk — no recent contact. Send comparison deck this week; call 3/26 to re-engage.**

- **Pinnacle Services (James Baker, Director IT)** — Marcus spoke on 3/19. Key signal: "CEO review in progress. We should hear back by end of week." Implication: **Medium confidence. Follow up 3/24 to confirm.**

- **Relay (Chris Parker, VP Sales)** — Jennifer mentioned on 3/18: "Chris asked about multi-year pricing." Implication: **Upsell opportunity — pitch 3-year deal for 25% discount in follow-up.**

## Now What?

1. **This week (Mar 23–27):**
   - Sarah J. call Compass Financial (Sarah Torres) to re-engage after 12 days (high-risk $95K deal)
   - Sarah J. confirm with Atlas SaaS (Michael Chen) that CEO signed; aim for 3/28 close
   - Marcus reach out to Pinnacle (James Baker) on 3/24 for CEO decision update

2. **Forecast:** If we close 6 of 7 at-risk/close deals, we hit $505K and exceed $500K target by 1%

3. **Rep coaching:** Marcus is 22% of target. Review his 2 deals and pipeline. Does he need help closing Compass deal? Can he own a Proposal-stage deal to accelerate?

4. **April planning:** 12 deals in pipeline for April (good depth). Focus sourcing on $50K+ deals to improve deal mix.

5. **Commission payouts:** Sarah J. at $95K (on track); Marcus at $50K (needs push); Jennifer at $40K (solid). Q1 bonuses based on quota attainment.

---

## Edge Cases

- **Deal stuck in Proposal for 30+ days:** It's likely dead. Cycle it to Nurture or Disqualify instead of carrying as forecast. Get explicit "yes/no/reschedule" from customer.
- **Large deal (>$100K) with no recent activity:** High risk. Call customer directly; don't rely on rep forecast. Validate timeline and approval status.
- **New rep or territory with no closed deals yet:** Track pipeline and forecast instead of closed revenue. Set intermediate milestones (demos scheduled, proposals sent) vs. just closings.
- **Customer asked for discount at last minute:** Note negotiated amount in CRM, not list price. Use actual amount for revenue report. Flag if discount >20% (may indicate poor qualification earlier).
- **Deal closed but invoice/payment delayed:** Report when customer signed contract (sales credit), not when payment clears (AR). Keep separate from "cash collected" metrics for CFO.
