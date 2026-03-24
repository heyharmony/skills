---
name: "Score Pipeline Health"
description: "Score pipeline health across deals, forecasts risk, and surfaces interventions needed — win probability, velocity, deal age, and stage-to-close gaps. Trigger on: pipeline health, deal health score, forecast risk, pipeline assessment, deal risk, sales velocity."
dependencies: []
connectors:
  - name: "Salesforce"
    reason: "Pull opportunity records, deal stages, historical close dates, and forecast categories to calculate deal velocity and stage progression"
  - name: "HubSpot"
    reason: "Access deal pipeline, stage duration, and deal activity timelines to identify stalled deals and acceleration opportunities"
  - name: "Slack"
    reason: "Post pipeline health alerts and risk summaries to sales team channels for visibility on deals needing immediate attention"
  - name: "Google Calendar"
    reason: "Map customer meetings and touchpoints to understand deal momentum and engagement frequency"
---

## Purpose

Score the health and risk profile of individual deals and entire pipelines by analyzing stage progression, deal age, win probability, and engagement signals. When Harmony conversation data exists — sales calls, discovery meetings, negotiation discussions — the health score incorporates engagement depth and buying signals. When it's not available, the skill works from CRM data and meeting metadata to calculate velocity and surface at-risk deals for sales manager intervention.

## When to Use

- Weekly pipeline reviews to forecast accuracy and identify risks before they become misses
- One-on-ones with sales reps to coach on deal progression and stage exit criteria
- Pipeline clinics or deal reviews where deals need deeper context on why they're stuck
- Forecasting clean-up before board meetings or investor calls
- Identifying which deals need activity injection vs. strategic intervention

## Instructions

### 1. Gather pipeline context

Ask what data the user has access to:

- **How many deals?** Full pipeline, specific segment, or targeted slice?
- **What's your current forecast accuracy?** What % of forecast actually closed last quarter?
- **Do you have meeting data?** Harmony recordings of sales calls, discovery meetings?
- **What's your average deal size and cycle?** Context for what "at risk" means in your business.

If Harmony conversation data exists, pull:
- All sales calls and customer meetings associated with deals
- Buying signals and decision timeline discussions
- Objection patterns and engagement sentiment across touchpoints
- Stakeholder involvement (are multiple people from the customer talking to you?)

### 2. Define scoring criteria

Create a weighted health score (0–100) using:

- **Stage appropriateness (25%)** — Is the deal in the right stage for its age? New deals fast, mature deals slower.
- **Velocity (20%)** — Days since last stage advancement. Benchmark: how long should each stage take?
- **Engagement frequency (20%)** — Call/meeting cadence in last 14 days. Sales teams with momentum have 1+ touchpoints/week per deal.
- **Stakeholder involvement (15%)** — Multiple people engaged (champion, decision maker, technical approver) = higher score.
- **Win probability (10%)** — Pull from CRM if available, infer from conversation signals if not.

Scoring thresholds:
- 80–100: Strong (on track, normal cadence, engaged stakeholders)
- 60–79: Caution (slowing, stage-appropriate concern)
- 40–59: Risk (aging, low engagement, unclear decision path)
- 0–39: Critical (seriously at-risk, needs intervention this week)

### 3. Calculate stage velocity

For each deal:
- **Days in current stage** — How long has it been here?
- **Benchmark for stage** — If you have historical close data, compare to average. If not, use general: discovery 7–14 days, proof of value 20–30 days, negotiation 10–20 days.
- **Velocity score** — On schedule (5), slightly behind (3), significantly behind (1).

Alert flag: If a deal is 50%+ over the benchmark for its stage without scheduled advancement, it's a stall.

### 4. Extract engagement signals from conversations

If meeting data exists in Harmony:
- **Call count last 30 days** — How many touchpoints? Less than 1/week is disengagement.
- **Who's involved?** Pull attendee list from each meeting. More stakeholders = stronger signal.
- **Decision timeline clarity** — Did the customer state a decision date? Is it still on track?
- **Buying signals or hesitations?** Extract sentiment, objections, next steps discussed.
- **Proposal/demo status** — Did the customer see what they needed to decide?

If no conversation data, work from CRM activity log (emails, tasks, activity timestamps) to infer momentum.

### 5. Surface at-risk deals and recommendations

For every deal scoring below 60:
- **Why it's at risk** — Specific issue: aging, low engagement, stakeholder gap, unclear decision path.
- **Recommended intervention** — What the sales rep should do immediately: call for status, bring in a new stakeholder, accelerate proof of value, address blockers.
- **Success criteria** — What needs to happen in the next 7 days to move back to green (next meeting scheduled, decision date confirmed, blocker addressed).

### 6. Aggregate to pipeline view

Roll up individual deal scores to:
- **Forecast accuracy** — % of deals in "commit" stage that are actually healthy (score >70).
- **At-risk count** — Number of deals below 60 that could miss forecast.
- **Velocity trend** — % of deals aging vs. progressing normally. Upward trend is warning.
- **Engagement health** — % of deals with adequate meeting cadence (≥1 per week).

## Output Format

# Pipeline Health Report — [Sales Team / Rep Name]
_Prepared [date] · Pipeline snapshot as of [date]_

## Executive Summary
[2–3 sentences: total pipeline value, forecast confidence, number of at-risk deals, key concern]

## Pipeline Health Scorecard
| Metric | Value | Trend | Status |
|--------|-------|-------|--------|
| Total pipeline | [value] | [↑↓→] | [on track / at risk / concerning] |
| Forecast commits | [value] | [↑↓→] | [confidence %] |
| Healthy deals (>70) | [count] | [↑↓→] | [% of total] |
| At-risk deals (40–60) | [count] | [↑↓→] | [% of total] |
| Critical deals (<40) | [count] | [↑↓→] | [requires action] |
| Avg deal velocity | [days in stage] | [↑↓→] | [vs. benchmark] |

## At-Risk Deals Detail

### [Deal Name] — [Company] — [Stage]
**Health Score:** [XX/100]
**Deal Size:** $[amount] | **Days in Stage:** [#] | **Benchmark:** [#] days
**Key Issue:** [Aging / Low engagement / Stakeholder gap / Unclear decision path]
**Last Activity:** [# days ago: meeting type / email]
**Conversation Signals:**
- [Key quote or observation from calls if available]
- [Stakeholder concern or buying signal]

**Recommended Action:**
1. [Specific intervention — call for status, schedule demo, address objection]
2. [Timeline: within this week]
3. [Success metric: next milestone to reach by [date]]

_(Repeat for each deal below 60)_

## Engagement Health
| Rep / Deal | Calls (14d) | Stakeholders | Decision Timeline | Momentum |
|---|---|---|---|---|
| [deal] | [#] | [# of people] | [date or TBD] | [strong / stable / declining] |

## Stage Velocity Trend
| Stage | Avg Days | On Track | Slowing | Count |
|---|---|---|---|---|
| [stage name] | [#] | [#] | [#] | [#] |

## Forecast Confidence
- **Commits:** [#] deals, $[value] — [% confidence]
- **Best case:** [#] deals, $[value] — [% confidence]
- **Pipeline:** [#] deals, $[value]
- **Forecast miss risk:** [#] deals at risk of slipping

## Now What?

- **This week:** Schedule individual coaching calls with reps owning critical-risk deals (score <40)
- **CRM updates:** Flag at-risk deals with "Health: Yellow/Red" tag; schedule next milestone dates
- **Pipeline clinic:** Prepare to review [X] deals in next pipeline meeting with intervention plan
- **Next week:** Post momentum summary to sales Slack channel for team visibility

---

## Example

**User:** "Give me a health check on our enterprise segment pipeline — 8 deals, $4.2M total. I have recent calls on most of them."

**Output:**

# Pipeline Health Report — Enterprise Segment
_Prepared 2026-03-22 · Pipeline snapshot as of 2026-03-22_

## Executive Summary
Enterprise segment has $4.2M in pipeline across 8 deals. Forecast confidence is moderate — 3 commits are solid, but 2 deals are showing engagement gaps and 1 is aged significantly in a proof-of-value stage. $800K at meaningful risk of slipping; recommend immediate intervention on TechFlow and DataStream deals.

## Pipeline Health Scorecard
| Metric | Value | Trend | Status |
|--------|-------|-------|--------|
| Total pipeline | $4.2M | → | On track |
| Forecast commits | $1.8M | ↑ | 70% confidence |
| Healthy deals (>70) | 5 deals | ↑ | 62% of pipeline |
| At-risk deals (40–60) | 2 deals | ↑ | 25% of pipeline |
| Critical deals (<40) | 1 deal | → | Needs immediate attention |
| Avg deal velocity | 21 days | → | Benchmark: 18 days (slight delay) |

## At-Risk Deals Detail

### TechFlow Platform — TechFlow Inc. — Proof of Value
**Health Score:** 38/100
**Deal Size:** $280K | **Days in Stage:** 45 | **Benchmark:** 28 days
**Key Issue:** Significantly aging in proof-of-value; engagement dropped off in past two weeks
**Last Activity:** 13 days ago (email from AE asking for status)
**Conversation Signals:**
- On the final discovery call (Mar 8), CTO said, "We need to see real metrics before budgeting for this."
- Haven't heard back on POV results shared Mar 15.
- No follow-up call scheduled; unclear if they're reviewing internally or deprioritized.

**Recommended Action:**
1. Call Marcus (CTO) directly tomorrow: "Following up on the POV results — what's your team's assessment? What questions came up?"
2. If data is weak, offer to run a deeper validation week (tight timeline to reignite momentum).
3. Success metric: POV debrief call scheduled by Thursday; clear decision date by next Friday.

### DataStream Analytics — DataStream Inc. — Discovery
**Health Score:** 52/100
**Deal Size:** $320K | **Days in Stage:** 12 | **Benchmark:** 14 days
**Key Issue:** Only one stakeholder engaged (Ops Manager); no technical or finance visibility yet
**Last Activity:** 4 days ago (one 30-min discovery call)
**Conversation Signals:**
- Ops Manager (Jennifer) is clearly a champion: "We've been searching for something like this for two years."
- But she said: "I'll need to run this by my VP and the CTO before we move forward."
- No technical requirements conversation yet; integration complexity unknown.

**Recommended Action:**
1. Ask Jennifer for a multi-stakeholder meeting next week: her, CTO (integration questions), VP Finance (budget approval).
2. Prep technical deep-dive on API integration before that call (address likely CTO concerns upfront).
3. Success metric: Multi-stakeholder call scheduled by end of week; no surprises on technical fit.

### CloudScale Services — CloudScale Corp. — Commit
**Health Score:** 85/100
**Deal Size:** $1.1M | **Days in Stage:** 8 | **Benchmark:** 15 days (on track)
**Key Issue:** None — healthy deal
**Last Activity:** 2 days ago (contract review call with CFO)
**Conversation Signals:**
- CFO confirmed budget is allocated: "We're ready to move as soon as legal clears it."
- Three stakeholders actively engaged (VP Ops, CTO, CFO).
- Legal review underway; expected back by Mar 29.

**Recommended Action:**
- Maintain weekly cadence with legal contact to ensure no surprises.
- Prepare implementation kickoff for T+3 days post-signature (they want fast onboarding).

## Engagement Health
| Deal | Calls (14d) | Stakeholders | Decision Timeline | Momentum |
|---|---|---|---|---|
| CloudScale (Commit) | 3 | 3 people | Mar 30 (legal) | Strong ↑ |
| TechFlow (POV) | 1 | 1 person | Unclear | Declining ↓ |
| DataStream (Discovery) | 1 | 1 person | Unclear | Stable → |
| AcmeFlow (negotiation) | 2 | 2 people | Apr 15 (estimate) | Stable → |
| Vertex (late stage) | 4 | 4 people | Apr 8 (hard) | Strong ↑ |

## Stage Velocity Trend
| Stage | Avg Days | On Track | Slowing | Count |
|---|---|---|---|---|
| Discovery | 14 | 2 | 1 | 3 |
| Proof of Value | 28 | 1 | 1 | 2 |
| Negotiation | 15 | 1 | 0 | 1 |
| Legal/Commit | 10 | 2 | 0 | 2 |

## Forecast Confidence
- **Commits:** 3 deals ($1.8M) — 75% confidence (legal, integration risks tracked)
- **Best case:** 5 deals ($2.9M) — 40% confidence (assumes TechFlow and DataStream accelerate)
- **Pipeline:** 8 deals ($4.2M)
- **Forecast miss risk:** 2 deals ($600K) at material risk if TechFlow slips or DataStream stalls

## Now What?

- **This week:** Call Marcus at TechFlow to understand POV status and create recovery plan; coordinate multi-stakeholder call at DataStream.
- **CRM updates:** Tag TechFlow as "At Risk — POV Aging"; tag DataStream as "Multi-stakeholder Required"; move CloudScale legal date to task calendar.
- **Next meeting:** Prepare detailed intervention playbook for TechFlow in manager 1-on-1 (Thursday). Review how to avoid similar aging in future POVs.
- **Follow-up:** Post this summary to Sales Slack #enterprise-deals channel so entire team sees health status and knows which deals need support.

---

## Edge Cases

- **Deal with no recent conversation data:** Default to "age in stage" and CRM activity as proxy. Flag that adding a call would increase confidence. If no activity in 21+ days, assume disengagement and score as yellow/red regardless of deal size.
- **Large deal with many stakeholders but low engagement from buying committee:** High stakeholder count doesn't compensate for low meeting cadence. Score remains yellow unless rep can prove recent multi-person meeting scheduled in next 7 days.
- **New deal (first week) scoring lower than expected:** Don't penalize — new deals don't have velocity history. Focus only on whether next step (discovery call, follow-up meeting) is scheduled. Once in stage 2+, apply velocity benchmarks.
- **Deal with contract out for signature (legal hold):** Can't accelerate. Score based on whether legal review is on track and all stakeholders have approved internally. Focus on legal follow-up cadence (should be weekly at minimum).
- **Historical data missing (new rep, transferred accounts, CRM gaps):** Use peer benchmarks for "days in stage." Flag to manager that better CRM discipline is needed to build velocity history. Don't over-score deals if you don't have baseline.
- **Pipeline heavily weighted to one large deal:** Note concentration risk explicitly in summary. If that one deal slips, forecast is dramatically off. Recommend activity on smaller deals to create backup in case large deal misses.
