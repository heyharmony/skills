---
name: "Count Outbound-Ready Leads"
description: "Count and segment leads ready for outbound — high-intent prospects from your sales process. Filter by company size, industry, stage, and conversation context. Trigger on: how many leads can we call, callable leads, outbound pipeline, lead count, ready to call, working leads."
dependencies: []
connectors:
  - name: "HubSpot"
    reason: "Import deal stages, pipeline contacts, lead scoring, and custom properties to identify callable leads at scale"
  - name: "Salesforce"
    reason: "Pull opportunity stages, account records, and lead scoring to find prospects ready for direct outreach"
  - name: "Gmail"
    reason: "Track email engagement patterns to verify leads are responding and receptive to outreach"
  - name: "Slack"
    reason: "Push real-time callable lead counts and summaries to sales channels for team alignment"
---

## Purpose

Identify and count leads that are ready for outbound sales engagement — prospects who have shown explicit interest, fit your ICP, and are at the right stage in your process. The count is grounded in real conversation data when available (discovery calls, emails, prior meetings in Harmony), and works from CRM data or direct lead lists when it's not. Helps sales leaders quickly answer "How many callable leads do we have right now?" and "Who should we focus on this week?"

## When to Use

- Weekly sales huddle — leadership wants to know the size of the callable opportunity pool
- Planning an outbound blitz or campaign — determine team capacity and lead volume
- Evaluating pipeline health — identify which accounts/segments have the most momentum
- Quarterly planning — assess growth potential based on callable lead supply
- After a campaign or event — quickly count warm inbound leads worth immediate follow-up
- Mid-month pipeline check — see if you're on track to hit outbound targets

## Instructions

### 1. Gather context

Start by asking what filters matter most:
- **What's your definition of "callable"?** (Lead stage in CRM, intent signal, conversation history, time since last touch?)
- **What's your ICP?** (Company size, industry, role/seniority, geography?)
- **What data sources are available?** (HubSpot, Salesforce, custom lists, Harmony conversations?)
- **What's the time window?** (Last 7 days, last 30 days, all time?)

If Harmony conversation data exists, pull:
- Recent discovery calls, product demos, or exploratory meetings with prospects
- Email threads showing engagement or objections
- Accounts mentioned in sales calls with buying intent
- Conversation sentiment to gauge lead quality

### 2. Define "callable" criteria

Establish what qualifies a lead as callable for your team:

**Explicit signals (must-haves):**
- CRM stage indicates active pipeline (e.g., "qualified," "opportunity," "proposal")
- Lead was contacted in last 14 days or replied to outreach
- Role is a decision maker or strong influencer
- Company size matches ICP

**Intent signals (nice-to-haves):**
- Downloaded content or attended webinar
- Demo request or pricing inquiry
- Responded to previous email or call
- Conversation indicates need or pain point

### 3. Pull and segment the data

Gather lead lists from your source (HubSpot, Salesforce, or provided list):
- Filter by ICP criteria (company size, industry, role)
- Filter by stage (opportunities in active pipeline only)
- Filter by recency (contacted or engaged in last 14–90 days)
- Flag leads with high-intent signals (recent conversation, explicit request)
- Group by segment (company size, industry, or stage) for visibility

### 4. Assess conversation quality

For each segment, evaluate conversation quality if data exists:
- High quality: Recent meeting shows clear problem statement and timeline
- Medium quality: Email thread shows interest but timeline unclear
- Low quality: Cold outreach only, no response yet

### 5. Produce the count and summary

Format as a segmented count with actionable intelligence for the sales team.

## Output Format

# Callable Lead Count Report
_Report date: [date] | Period: [last 7/30/90 days]_

## Executive Summary
- **Total callable leads:** [Number]
- **High-priority leads (call this week):** [Number]
- **Active opportunities:** [Number]
- **Expected outbound capacity:** [team size × calls/week] = [number] leads/week

## Breakdown by Segment

### By Company Size
| Size | Count | % of Total | Avg. Deal Size |
|------|-------|------------|----------------|
| [Segment] | [#] | [%] | [$] |

### By Industry
| Industry | Count | % of Total | Conversation Quality |
|----------|-------|------------|----------------------|
| [Industry] | [#] | [%] | [High/Medium/Low] |

### By Stage
| Stage | Count | Last Contacted | Days Since |
|-------|-------|-----------------|-----------|
| Qualified/Opportunity | [#] | [date] | [days] |
| Demo Scheduled | [#] | [date] | [days] |
| Proposal Out | [#] | [date] | [days] |

## High-Priority Leads (Callable This Week)
_Leads with explicit intent + recent engagement + ICP fit_

| Company | Contact | Title | Last Touch | Days Since | Next Action |
|---------|---------|-------|------------|-----------|------------|
| [Company] | [Name] | [Title] | [date] | [#] | [Call/Demo/Email] |

## Pipeline Velocity Indicators

- **New callable leads (last 7 days):** [#]
- **Leads contacted (last 7 days):** [#]
- **Response rate:** [%]
- **Conversion to opportunity:** [#] of [#] ([%])
- **Estimated outbound capacity:** [#] leads/week at [#] calls/rep

## Conversation Quality Snapshot

| Quality Level | Count | % | Next Steps |
|---------------|-------|---|-----------|
| High (clear problem + timeline) | [#] | [%] | Call this week |
| Medium (interested, timeline unclear) | [#] | [%] | Discovery call |
| Low (early stage, no urgency) | [#] | [%] | Nurture sequence |

## Red Flags & Opportunities

- **Stalled leads (>30 days no contact):** [#] leads to re-engage
- **Inactive industries:** [Industry] pipeline is light — consider sourcing
- **Hot segments:** [Segment] has [#] high-quality leads ready to scale

## Now What?

- **This week:** Call [#] high-priority leads
- **This month:** Schedule [#] demos from qualified pipeline
- **Capacity planning:** Current inbound supplies [#] leads/week; outbound can handle [#] more

---

## Example

**User:** "Pull callable leads from HubSpot for our outbound team. We're selling sales automation to mid-market SaaS. Include leads we've talked to recently."

**Output:**

# Callable Lead Count Report
_Report date: 2026-03-22 | Period: Last 30 days_

## Executive Summary
- **Total callable leads:** 47
- **High-priority leads (call this week):** 12
- **Active opportunities:** 18
- **Expected outbound capacity:** 6 reps × 8 calls/week = 48 leads/week

## Breakdown by Segment

### By Company Size
| Size | Count | % of Total | Avg. Deal Size |
|------|-------|------------|----------------|
| 50–200 employees | 28 | 60% | $85K |
| 200–500 employees | 15 | 32% | $150K |
| 500+ employees | 4 | 8% | $250K |

### By Industry
| Industry | Count | % of Total | Conversation Quality |
|----------|-------|------------|----------------------|
| Financial Services | 18 | 38% | High (3 recent calls) |
| B2B SaaS | 16 | 34% | Medium (2 calls, 1 month old) |
| Tech/Consulting | 10 | 21% | Low (no recent contact) |
| Other | 3 | 6% | Low |

### By Stage
| Stage | Count | Last Contacted | Days Since |
|-------|-------|-----------------|-----------|
| Qualified | 28 | 2026-03-18 | 4 |
| Demo Scheduled | 12 | 2026-03-20 | 2 |
| Proposal Out | 7 | 2026-03-10 | 12 |

## High-Priority Leads (Callable This Week)
_Leads with explicit intent + recent engagement + ICP fit_

| Company | Contact | Title | Last Touch | Days Since | Next Action |
|---------|---------|-------|------------|-----------|------------|
| Compass Financial | Sarah Chen | VP Operations | Email: 2026-03-21 | 1 | Call to schedule demo |
| Vertex Tech | Marcus Rodriguez | Sales Director | Call: 2026-03-20 | 2 | Demo this week |
| Atlas SaaS | Jennifer Kim | CFO | Demo sched. | 2026-03-25 | Confirm prep call |
| Pinnacle Services | David Walsh | COO | Email: 2026-03-19 | 3 | Follow-up call |
| Sterling Advisors | Rachel Murphy | Head of Ops | Call: 2026-03-18 | 4 | Discovery follow-up |
| Nexus Group | Patricia Lim | VP Finance | Demo sched. | 2026-03-24 | Prep call |
| Forge Analytics | Tom Bennett | Sales Leader | Email: 2026-03-20 | 2 | Call for pricing discussion |
| Beacon Systems | Lisa Huang | Director of Finance | Call: 2026-03-19 | 3 | Proposal review call |
| Meridian Corp | James Allen | SVP Operations | Email: 2026-03-21 | 1 | Initial discovery |
| Horizon Partners | Nicole Edwards | VP Technology | Call: 2026-03-17 | 5 | Follow-up on objection |
| Velocity Consulting | Chris Parker | Operations Lead | Demo sched. | 2026-03-25 | Confirm attendance |
| Global Strategies | Anna Kowalski | Chief Finance Officer | Email: 2026-03-20 | 2 | Schedule deep-dive |

## Pipeline Velocity Indicators

- **New callable leads (last 7 days):** 8
- **Leads contacted (last 7 days):** 14
- **Response rate:** 64%
- **Conversion to opportunity:** 18 of 47 (38%)
- **Estimated outbound capacity:** 48 leads/week at 8 calls per rep

## Conversation Quality Snapshot

| Quality Level | Count | % | Next Steps |
|---------------|-------|---|-----------|
| High (clear problem + timeline) | 12 | 26% | Call this week — move to demo |
| Medium (interested, timeline unclear) | 21 | 45% | Discovery call to qualify timeline |
| Low (early stage, no urgency) | 14 | 29% | Nurture with 2-week re-contact |

## Red Flags & Opportunities

- **Stalled leads (>30 days no contact):** 3 leads from tech/consulting segment to re-engage immediately
- **Inactive industries:** Healthcare has no callable leads — consider targeted sourcing
- **Hot segments:** Financial Services has highest conversation quality (18 leads, 6 with scheduled demos) — double down here

## Now What?

1. **This week:** Schedule calls with 12 high-priority leads — target 3 demos closed
2. **Assign outbound:** 28 qualified leads split across 6 reps = 4–5 leads per rep to work
3. **Capacity check:** We can handle 48 calls/week; we have 47 leads. Sourcing should target +10 new leads/week to maintain pipeline
4. **Follow up:** Create Slack task to track calls made and outcomes by segment
5. **By March 29:** Re-qualify medium-priority leads to find additional high-priority opportunities

---

## Edge Cases

- **No CRM available — manual list provided:** Use recency of last contact and conversation quality to estimate callable tier. Ask if list is pre-qualified or raw.
- **Leads in CRM but no recent activity:** Flag as "dormant but ICP fit" — may need nurture re-engagement before calling.
- **Mixed quality data (some leads have Harmony conversations, others don't):** Separate into two groups: conversation-backed (higher confidence) and CRM-only (require verification).
- **User asks for "all leads" vs. "callable leads":** Clarify definition — all leads in CRM is 10x larger; callable = stage + recency + ICP. Give both counts with guidance on outbound capacity.
- **High churn in callable list (different counts day-to-day):** Investigate: are leads moving through stages fast, or is data refreshing inconsistently? Set weekly snapshot cadence.
