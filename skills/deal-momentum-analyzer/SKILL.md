---
name: "Score Deal Momentum"
description: "Analyze deal trajectory using meeting frequency, customer engagement, and stakeholder involvement — score momentum as accelerating, stable, or declining, with interventions. Trigger on: deal momentum, deal velocity, engagement scoring, deal stalling, sales velocity, stakeholder involvement tracking."
dependencies: []
connectors:
  - name: "Harmony"
    reason: "Analyzes all customer meetings and calls on a deal to measure engagement depth, stakeholder involvement, and sentiment trajectory"
  - name: "Google Calendar"
    reason: "Maps customer meeting frequency and gaps to surface engagement trends and identify when momentum is declining"
  - name: "Salesforce"
    reason: "Cross-references meeting activity with deal stage and close date to quantify momentum impact on forecast accuracy"
  - name: "HubSpot"
    reason: "Pulls engagement scoring and activity timelines to build a momentum index over time"
author: "Harmony"
version: "1.0.0"
icon: "sparkles"
cover: ""
screenshots: []
category: "Sales"
---

## Purpose

Score the momentum of a deal by analyzing meeting frequency, stakeholder involvement, sentiment, and engagement signals from customer conversations and activity timelines. When Harmony data exists, pulls direct call recordings and meeting notes to assess buyer engagement depth, decision urgency, and risk signals (hesitation, delays, new objections). Works from CRM activity and calendar data when conversation data isn't available, calculating velocity and forecasting which deals are likely to slip. Outputs a momentum score (accelerating/stable/declining) with specific recommendations for what the rep should do to maintain or recover momentum.

## When to Use

- Weekly or bi-weekly deal reviews to spot momentum shifts before they become misses
- Identifying which deals need activity injection vs. which are naturally progressing
- Coaching reps on "the deal feels good but something's off" — quantifying intuition with data
- Forecasting confidence calls — which deals have real momentum vs. wishful thinking
- Root-causing deal slips — when did momentum decline, and what triggered it

## Instructions

### 1. Define momentum baseline

Ask the user:

- **What's normal for this deal stage?** (Discovery should have 2+ meetings/week, negotiation might be 1/week)
- **How many days in current stage?** (Helps determine if they're on pace or slowing)
- **Is this a new deal or existing?** (New deals start fast, mature deals slow down — both can be healthy)
- **What does a healthy close look like?** (Do you see a pattern of acceleration into close, or steady state?)

### 2. Pull engagement data from Harmony (if available)

If conversation data exists, pull:
- **All meetings with this account in the past 30 days:** Who attended, how long, sentiment (buying signals or hesitation?)
- **Stakeholder count over time:** Are more people engaging (accelerating) or just the same contact (stalling)?
- **Meeting quality signals:** Did the rep ask deep discovery questions, or surface-level check-ins?
- **Buying signal mentions:** Did the customer mention budget, timeline, decision maker, or constraints?
- **Objection patterns:** Are new objections coming up, or same ones re-hashed?
- **Next step clarity:** After each call, was the next step clear and confirmed?

Scoring for each meeting:
- High-engagement: New stakeholder, deep discovery, buying signals mentioned, clear next step
- Medium-engagement: Same stakeholders, surface-level discussion, some buying signals
- Low-engagement: Brief call, no new information, vague next steps

### 3. Calculate meeting frequency and cadence

Calculate from CRM or calendar:
- **Meetings in past 30 days:** Count and type (discovery, demo, executive call, negotiation)
- **Average days between meetings:** If meetings are 14+ days apart, momentum is declining
- **Meeting initiation:** Who scheduled the last 3 meetings? (Customer initiated = accelerating; rep chasing = declining)
- **Trend:** Is cadence increasing, stable, or decreasing over the past 90 days?

Scoring:
- Accelerating: Meetings more frequent month-over-month, mostly customer-initiated
- Stable: Consistent cadence (2–3/week or 1/week depending on stage), mix of customer and rep initiated
- Declining: Fewer meetings month-over-month, rep chasing to schedule

### 4. Assess stakeholder involvement

Track from Harmony and CRM:
- **Stakeholder count:** Are more people involved now than on first call? (Good = expanding commitment)
- **Economic buyer involvement:** Is the budget holder or decision maker on calls? (Or just gatekeepers?)
- **Technical approver involvement:** Is the person who'll evaluate fit engaged?
- **Stakeholder progression:** Did the customer say "I need to involve X" and then X showed up? (Good momentum signal)

Scoring:
- Expanding: 3+ different stakeholders engaged, including economic buyer and technical approver
- Consistent: 2–3 stakeholders, mix of functional roles
- Stuck: Same 1–2 people, no new stakeholders despite rep asking

### 5. Evaluate commitment signals

From recent meetings, assess:
- **Decision timeline stated:** Did they give a date? Has it moved forward or slipped?
- **Budget discussed:** Did they confirm budget is allocated or express cost concern?
- **Approval path clarity:** Do they understand their approval process or does it still feel murky?
- **Next step clarity:** Did they commit to the next step, or was it vague?
- **Sentiment shift:** More enthusiastic than 30 days ago, same, or less engaged?

Scoring:
- Strong commitment: Clear decision date, budget confirmed, approval path understood, enthusiastic tone
- Moderate commitment: Some clarity on timeline/budget, approval path fuzzy, neutral tone
- Weak commitment: No decision date, budget uncertain, approval path unclear, hesitant tone

### 6. Calculate momentum score and trajectory

Combine the above into a deal momentum index:

**Momentum Score Calculation:**
- Meeting frequency (30%): How many meetings, how often, who's initiating
- Stakeholder expansion (25%): Are more people involved, including decision makers
- Commitment signals (25%): Decision timeline, budget, approval path clarity
- Sentiment trend (20%): Buyer enthusiasm, new objections, next step clarity

Score 0–100:
- **80–100 (Accelerating):** Meetings frequent and customer-initiated, stakeholders expanding, clear timeline/budget, enthusiastic
- **60–79 (Stable):** Meetings regular (1–2/week), 2–3 stakeholders engaged, timeline and budget somewhat clear, neutral-positive tone
- **40–59 (Declining):** Meetings slowing, same stakeholders, vague timeline/budget, hesitant tone
- **0–39 (Critical):** Meetings rare, no new stakeholders, no decision timeline, cold or defensive tone

**Trajectory (trend):**
- ↑ Accelerating (score increasing week-over-week)
- → Stable (score holding)
- ↓ Declining (score decreasing week-over-week)

### 7. Develop intervention based on momentum

For each deal scoring below 60 or showing ↓ trend:

- **Why momentum is declining:** Specific issue (long gap since last meeting, same stakeholder talking, timeline got fuzzy, new objection introduced)
- **Immediate action:** What to do in the next 5 business days to reverse momentum
- **Success criteria:** What needs to happen to move momentum back to stable (meeting scheduled, new stakeholder confirmed, objection resolved)
- **Risk:** If no intervention, forecast slip probability

For deals showing ↑ or → momentum:
- **What's working:** Specific success pattern (frequency, stakeholder types, approach)
- **Protect it:** What the rep should keep doing
- **Accelerate it:** Next step to move toward close

## Output Format

# Deal Momentum Report — [Deal Name]
_Prepared [date] · Deal stage: [stage] · Days in stage: [#]_

## Momentum Summary
| Metric | Current | Trend | Status |
|--------|---------|-------|--------|
| Momentum Score | [0–100] | [↑↓→] | [Accelerating / Stable / Declining] |
| Meeting Cadence | [# meetings/30d] | [↑↓→] | [Days between meetings] |
| Stakeholder Count | [#] | [↑↓→] | [Expanding / Same / Contracting] |
| Commitment Clarity | [High/Medium/Low] | [↑↓→] | [Decision timeline, budget, approval] |

**Overall Assessment:** [Deal is accelerating toward close / Deal is stable and on track / Deal is losing momentum and at risk / Deal is critical — intervention needed]

## Detailed Momentum Analysis

### 1. Meeting Activity
**Past 30 days:** [# meetings] · **Frequency:** [1.5/week] · **Trend:** [↑ ↓ →]

| Date | Type | Duration | Attendees | Next Step | Quality |
|---|---|---|---|---|---|
| [date] | [Discovery/Demo/Negotiation] | [min] | [names] | [stated next step] | [High/Med/Low] |

**Cadence analysis:**
- Days between meetings: [avg] days
- Customer-initiated: [#] / Rep-initiated: [#]
- Gap trend: [Meetings getting closer or drifting further apart?]

**What's working:** [Specific pattern — e.g., "Customer scheduled 2 of last 3 meetings, indicating engagement"]
**What's slowing:** [Specific gap — e.g., "12-day gap between meeting 2 and 3; no meeting scheduled in next 2 weeks"]

### 2. Stakeholder Involvement
**Current stakeholders:** [List with title and engagement level]

| Stakeholder | Title | Engagement | Concerns | Bought In? |
|---|---|---|---|---|
| [name] | [title] | [High/Med/Low] | [main concern] | [Yes/Neutral/No] |

**Expansion trend:**
- Meeting 1: [2 people]
- Meeting 2: [2 people]
- Meeting 3: [3 people] ← Expanding

**Economic buyer status:** [Identified? On calls? Concerns expressed?]
**Technical approver status:** [Identified? Involved? Will they block or approve?]

**What's accelerating:** [e.g., "Customer introduced CTO on call 3, indicating we're moving from ops discussion to implementation planning"]
**What's stalling:** [e.g., "Still only talking to Marcus; CFO hasn't joined despite 3 calls about budget"]

### 3. Commitment Signals
**Decision timeline:** [Stated date or "unclear"]
**Budget:** [Confirmed / Pending / Concerning]
**Approval path:** [Clear / Fuzzy]
**Sentiment:** [Enthusiastic / Neutral / Hesitant / Defensive]

| Signal | Status | Evidence | Change from 30d ago |
|---|---|---|---|
| Decision timeline | [date or unclear] | [Quote or observation] | [Same / Moved forward / Slipped] |
| Budget allocated | [Yes/No/Pending] | [Quote or deal stage signal] | [Confirmed / Still discussing] |
| Approval clarity | [Clear/Fuzzy] | [Do they understand who needs to say yes?] | [More clear / Same / More fuzzy] |
| Tone/enthusiasm | [Enthusiastic/Neutral/Hesitant] | [Call sentiment, word choice, pace] | [More engaged / Same / Less engaged] |

**Key quotes:**
- [Quote showing strong commitment or hesitation]
- [Quote showing new understanding or confusion]

### 4. Momentum Scoring Breakdown

**Meeting Frequency (30%):** [Score X/30]
- Calculation: [# meetings/30d and trend]
- Status: [Healthy cadence / Slowing / Concerning]

**Stakeholder Expansion (25%):** [Score X/25]
- Calculation: [# stakeholders, types, trend]
- Status: [Expanding / Stable / Stuck]

**Commitment Signals (25%):** [Score X/25]
- Calculation: [Timeline + Budget + Approval clarity + Enthusiasm]
- Status: [Strong / Moderate / Weak]

**Sentiment Trend (20%):** [Score X/20]
- Calculation: [Engagement depth from calls, new objections, next step clarity]
- Status: [Positive / Neutral / Declining]

**Total Momentum Score:** [X/100]

## Momentum Assessment

### [Deal Name] — [Current Status]

**Momentum:** [Accelerating ↑ / Stable → / Declining ↓]

**Why:** [Specific reason — e.g., "Customer initiated 2 of last 3 meetings, stakeholder count expanded from 2 to 4, and they confirmed budget by [date]. Clear acceleration."]

**Forecast confidence:** [High / Medium / Low]
- If accelerating: [Forecast is solid, likely to close on timeline]
- If stable: [On track if no new blockers emerge]
- If declining: [At risk of slipping; intervention needed by [date]]

## Intervention Strategy (if momentum is declining or critical)

### Root Cause
**Why momentum is declining:** [Specific issue — e.g., "Long gap between meetings (12 days) suggests customer deprioritized us"]

### Immediate Actions (next 5 business days)
1. [Specific action — e.g., "Call Marcus directly (don't email): 'Checking in on the evaluation. How are we progressing?' Listen for hidden objections or deprioritization."]
2. [Action 2 — e.g., "If they're slow-rolling, ask: 'What would help us move forward?' Might need to involve a more senior person or offer a quick win (e.g., free pilot)."]
3. [Action 3 — e.g., "Confirm next meeting in writing: 'Let's schedule the demo for [date]. What works — Tuesday at 2pm or Wednesday at 10am?'"]

### Success Criteria
- [ ] Meeting scheduled within 7 days
- [ ] [Specific blocker addressed — e.g., "Budget objection resolved" or "New stakeholder (CTO) on next call"]
- [ ] [Next milestone confirmed — e.g., "Demo scheduled with technical team"]

If momentum returns to stable within 2 weeks → forecast as normal
If momentum continues declining → escalate to manager; consider loss risk scenario

## Now What?

- **This week:** [Specific rep action — e.g., "Call Marcus to uncover why meetings are slowing"]
- **CRM update:** Change forecast to [date] if momentum is declining; flag risk if critical
- **Manager check-in:** [Schedule 1-on-1 to discuss intervention for at-risk deals]
- **Next review:** Re-score momentum in [7 days / 2 weeks] to see if interventions worked
- **Pattern sharing:** If deal recovered, share what worked with the team

---

## Example

**User:** "I have a $200K deal at TechVenture (deal stage: POV, 18 days in stage) that feels like it's losing steam. I've had 3 calls in the past month but nothing scheduled for the next 2 weeks. Score the momentum."

**Output:**

# Deal Momentum Report — TechVenture Custom Analytics Platform
_Prepared 2026-03-22 · Deal stage: Proof of Value · Days in stage: 18_

## Momentum Summary
| Metric | Current | Trend | Status |
|--------|---------|-------|--------|
| Momentum Score | 48/100 | ↓ Declining | High Risk |
| Meeting Cadence | 3 meetings/30d | ↓ Slowing | 10-day gap widening |
| Stakeholder Count | 2 people | → Same | No expansion (risk signal) |
| Commitment Clarity | Low | ↓ Declining | Timeline vague, budget unclear |

**Overall Assessment:** Deal is losing momentum and at risk of slipping past Q1. Action required this week.

## Detailed Momentum Analysis

### 1. Meeting Activity
**Past 30 days:** 3 meetings · **Frequency:** 1 per 10 days · **Trend:** ↓ Slowing

| Date | Type | Duration | Attendees | Next Step | Quality |
|---|---|---|---|---|---|
| Mar 5 | Initial Discovery | 45 min | Jennifer (VP Ops) | "POV proposal by Mar 10" | High |
| Mar 12 | POV Review | 30 min | Jennifer + Michael (CTO) | "Feedback by Mar 20" | Medium |
| Mar 18 | Feedback Debrief | 25 min | Jennifer only | "Let me review with Michael" | Low |

**Cadence analysis:**
- Days between meetings: 7 days (M5-12), then 6 days (M12-18)
- Pattern: Meetings getting shorter and fewer stakeholders
- No meeting scheduled; last communication was 4 days ago
- Gap trend: ↑ Widening (if no meeting in next 2 weeks, will be 12–14 day gap)

**What's working:** First meeting was high-energy; customer engaged immediately with CTO on second call
**What's slowing:** Meeting length dropped 50% (45 min → 25 min), Michael (CTO) dropped off call 3, Jennifer's responses are vague ("let me review with Michael"), and no next meeting is on the calendar

### 2. Stakeholder Involvement
**Current stakeholders:** 2 people (both engaged, but engagement is declining)

| Stakeholder | Title | Engagement | Concerns | Bought In? |
|---|---|---|---|---|
| Jennifer Chen | VP Operations | High → Medium | Implementation speed, team adoption | Conditional |
| Michael Park | VP Engineering / CTO | High → Low | Integration with existing stack, security | Conditional |

**Expansion trend:**
- Call 1: Jennifer only (champion identified)
- Call 2: Jennifer + Michael (decision maker added, which is good)
- Call 3: Jennifer only (Michael dropped off — potential red flag or just scheduling conflict?)

**Economic buyer status:** Finance leader (CFO or Finance Director) has not been involved in any calls. Jennifer owns the ops budget but likely needs CFO approval given deal size.
**Technical approver status:** Michael involved but only 1 call; his level of buy-in unknown. His absence from call 3 is concerning.

**What's accelerating:** N/A — no expansion in stakeholders
**What's stalling:** Michael disappeared after call 2 (was he overruled, did we lose him to competing priority, or just not on this call?). No finance involvement yet. Jennifer is the only one pushing forward, and her engagement is cooling.

### 3. Commitment Signals
**Decision timeline:** Unclear — Jennifer mentioned "sometime in Q2" but no hard date
**Budget:** Not discussed formally; assumed but not confirmed
**Approval path:** Unclear — Jennifer hasn't mentioned approval steps
**Sentiment:** Cooling — Jennifer's tone shifted from enthusiastic (call 1) to measured (call 3)

| Signal | Status | Evidence | Change from 30d ago |
|---|---|---|---|
| Decision timeline | Vague ("Q2") | No mention of specific date since Mar 5 | Slipped from "by end of Q1" to "sometime Q2" |
| Budget allocated | Pending (assumed but not stated) | No conversation about budget or approval | Not yet discussed |
| Approval clarity | Fuzzy | Jennifer said "let me review with Michael" but no mention of other approvers (CFO, procurement) | No progress on clarity |
| Tone/enthusiasm | Cooling | Call 1: "We've been looking for something like this." Call 3: "Let me review with Michael." Shorter, less engaged. | Was enthusiastic; now measured |

**Key quotes:**
- Call 1: "We've been evaluating tools for this for 8 months. Your POV approach really resonates." (Strong commitment signal)
- Call 3: "The results look good. Let me discuss with Michael and our team." (Vague, committee-like deflection)

**Red flag observation:** Jennifer went from "we want this" to "I need to check with Michael" — possible sign that Michael has concerns, or that buying committee is broader than Jennifer alone.

### 4. Momentum Scoring Breakdown

**Meeting Frequency (30%):** 22/30
- 3 meetings in 30 days = 1/10 days cadence (on pace for POV stage, but slowing)
- Rep-initiated all 3 meetings (customer not pushing; rep having to chase)
- Gap widening: 10d → 6d → 4d since last touch (no next meeting scheduled)
- Status: **Slowing** — healthy cadence so far, but trend is concerning

**Stakeholder Expansion (25%):** 10/25
- Started with 1 (Jennifer), expanded to 2 (Michael joined), then contracted back to 1
- No finance involvement despite deal size requiring CFO approval
- Michael's absence from call 3 is unexplained and risky
- Status: **Stuck** — no true expansion toward decision makers; contraction is worse signal

**Commitment Signals (25%):** 8/25
- Timeline mentioned but vague ("Q2" vs. "end of Q1")
- Budget not discussed (major gap at this stage)
- Approval path not discussed (Jennifer is not final decision maker)
- Status: **Weak** — should have 80% clarity by POV stage; we have ~30%

**Sentiment Trend (20%):** 8/20
- Call 1 enthusiastic, Call 3 measured; cooling is clear
- Shorter meetings (45 min → 25 min) suggest less priority
- "Let me check with Michael" sounds like possible hesitation or internal misalignment
- Status: **Declining** — momentum is eroding

**Total Momentum Score:** (22 + 10 + 8 + 8) = **48/100 — High Risk**

## Momentum Assessment

### TechVenture Custom Analytics — Declining ↓

**Momentum:** Deal is losing steam. Started strong (call 1: high energy, clear interest) but is now cooling (call 3: shorter, vague, committee dynamics unclear).

**Why:**
1. No new meetings scheduled (4-day gap now, could be 12+ days in 1 week)
2. Stakeholder Michael dropped off; his concerns or priorities unknown
3. Jennifer's language shifted from "we want this" to "let me check" (committee approval needed, which wasn't clear before)
4. Budget and approval path never discussed (should be nailed down by now in a POV stage)

**Forecast confidence:** **Low** — deal is at risk of slipping to Q2 or stalling entirely. Timeline was "end of Q1" (15 days away) but customer signaled "sometime Q2" on call 3. That's a slip.

**Risk:** If no meeting is scheduled in next 5 days, deal will likely miss forecast and slip 4+ weeks.

## Intervention Strategy

### Root Cause
Customer momentum is cooling because:
1. We don't fully understand the buying committee (Michael's role and concerns unclear)
2. Jennifer is not the final approver but is acting like she needs to convince others
3. We haven't engaged finance, which is likely required for $200K spend
4. The POV might have surfaced unexpected integration concerns (Michael's absence could signal this)

### Immediate Actions (by end of this week)

**Action 1 (Today):** Call Jennifer directly — don't email.
- "Jennifer, checking in. How's the team's review going? I noticed Michael wasn't on our last call — did the POV results raise any concerns we should address?"
- Goal: Uncover if Michael has objections or if it's just scheduling
- Listen for: Technical concerns, budget concerns, internal misalignment

**Action 2 (Tomorrow):** Schedule a 3-way call with Jennifer and Michael within 5 days.
- "I'd love to get you both on a call to walk through the results. Michael raised some great questions about integration, and I want to make sure we address them." (Frame it as solving, not selling)
- If Michael hesitates: "No pressure — just want to clear up any technical questions so you can evaluate properly."
- Goal: Get Michael back engaged and surface real objections

**Action 3 (This week):** Ask Jennifer about the approval path.
- "Help me understand the decision process on your end. Who needs to sign off after you're confident in the fit? Is it just you, or finance/procurement?"
- If finance is involved: "Would it make sense to get [finance person] on a quick call to walk through the ROI, or do you want to brief them first?"
- Goal: Identify full buying committee and don't get blindsided at close

### Success Criteria
- [ ] Michael (CTO) explains his concerns or confirms he's still interested (call this week)
- [ ] Next milestone meeting scheduled within 5 days (demo to technical team, budget review with finance, etc.)
- [ ] Clear decision date confirmed (not "Q2" but actual month/week)
- [ ] If concerns emerged, they're documented and we have a plan to address them

**If these happen:** Momentum returns to stable, forecast stays on track for Q1
**If they don't:** Escalate to manager; plan for Q2 forecast

## Now What?

- **Today:** Call Jennifer — find out what's really going on with Michael
- **Tomorrow:** Schedule 3-way call with Jennifer + Michael for next week (even if brief)
- **CRM update:** Change timeline from "Q1" to "At Risk — Q2 likely"; add "Waiting for technical review" and "Finance buy-in needed" to notes
- **Manager check-in:** Prep 5-min update for your manager: "Deal cooling slightly — CTO disappeared from POV debrief. Calling Jennifer today to understand if it's a real concern. Will know more after 3-way call next week."
- **Next momentum review:** Re-score in 7 days after 3-way call; if still declining, loss risk scenario

---

## Edge Cases

- **Customer meeting got cancelled 2x in a row:** That's a momentum killer. Don't let it slide. Call: "I notice we had to reschedule a couple times. Is this not a priority for you right now?" Honest conversation beats guessing.
- **Deal is accelerating but close date is still 90 days away:** Accelerating momentum is good, but don't get overconfident. Keep pushing for earlier clarity (decision date, budget confirmation, approval path). Acceleration can reverse if you pause.
- **Stakeholder count increased but tone is critical/defensive:** More people involved but they're challenging you, not buying. Could be a good sign (real vetting) or bad sign (building a case against you). Score slightly higher (expansion = good) but note the defensive tone as risk in assessment.
- **Customer says they're "still evaluating" but no new meetings scheduled:** That's a stall. Push for specifics: "What are you evaluating? What would help you decide?" If vague, prepare for loss.
- **Deal momentum looks stable but your intuition says something's off:** Trust the intuition but validate it. Schedule a call with the customer to ask what's really happening. Momentum scoring can miss cultural/political things happening in their org.
- **You're scoring a deal in a very early stage (first call):** Don't panic if the score is 30–40. That's normal for discovery. Focus on trend: is momentum building toward 60+ in week 2? That's healthy trajectory.
