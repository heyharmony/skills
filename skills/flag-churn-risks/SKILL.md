---
name: "Flag Churn Risks"
description: "Detect early churn signals from customer success calls, QBRs, and internal account reviews — before customers cancel. Score accounts by risk level using conversation sentiment, engagement patterns, and escalation language. Trigger on: churn risk, at-risk accounts, customer retention, churn signals, save offers, account health, customer health score, churn prevention, renewal risk, customer sentiment."
dependencies: []
---

## Purpose

By the time a customer clicks "cancel," it's too late. This skill catches churn risk early by mining customer-facing calls and internal account reviews for language patterns that predict churn — frustration, disengagement, competitor mentions, unresolved escalations, declining QBR tone. It scores each account's risk level and recommends intervention playbooks so your CS team acts before the renewal conversation.

## When to Use

- **Weekly CS team review** — Monday sync to flag accounts showing new churn signals
- **Before renewal cycle** — 90 days before contract end date to plan interventions
- **After support escalation spike** — When tickets spike or unresolved issues pile up
- **When NPS drops** — Segment by account and correlate with conversation sentiment
- **Quarterly account health audit** — Tier 1 and 2 accounts to maintain engagement
- **After onboarding stalls** — New customers not reaching activation milestones

## Instructions

1. **Mine recent customer calls for churn signal language.** Search customer-facing conversations (CS calls, QBRs, support tickets, Slack threads) for linguistic markers: frustration ("this isn't working," "we're not seeing ROI"), disengagement ("we're evaluating alternatives," "considering other options"), unresolved issues (escalations pending > 30 days), ghosting (no calls or messages past scheduled cadence), competitor mentions ("looked at [competitor]"), and tonal decline in QBR conversations.

2. **Score each signal across four dimensions:**
   - Sentiment: Negative (frustrated, angry), Neutral (questioning, comparing), Positive (engaged, optimistic)
   - Frequency: One-off comment vs. repeated pattern across multiple conversations
   - Recency: Last 7 days (urgent), 30 days (high priority), 90 days (monitoring)
   - Severity: Mild frustration vs. active evaluation vs. stated intent to leave

3. **Calculate account risk score.** Assign risk level based on signal combination:
   - **Critical**: Active evaluation + negative sentiment + recent + multiple signals
   - **High**: Repeated frustration + declining engagement + unresolved issues
   - **Medium**: Isolated concern + positive overall engagement + addressable root cause
   - **Low**: Positive sentiment + engaged + no churn language detected

4. **Cross-reference with internal discussions.** Review CS team Slack, internal account notes, and recent manager check-ins. What has your team privately said about this account? Missing champion? Stalled expansion plans? Budget pressure signals? Include this context in the risk assessment.

5. **Map each risk level to an intervention playbook:**
   - **Critical**: Executive sponsor call (VP/C-level), roadmap preview, dedicated success manager, usage training sprint
   - **High**: Feature unlock (unlock tier), usage training, pricing review, executive business review
   - **Medium**: Quarterly business review (QBR) refresh, product training, community access
   - **Low**: Standard cadence, monitor sentiment, celebrate wins

6. **Design save offers when appropriate.** Use the SaaS save offer playbook: pause (pause renewal for X months), downgrade (move to lower tier temporarily), discount (% off renewal), feature unlock (access premium feature), dedicated support (assigned CS person). Rule: one offer per intervention attempt, respect the customer's choice if they decline.

7. **Build an at-risk account dashboard** with columns: Account Name | ARR | Risk Score | Key Churn Signals | Recommended Action | Intervention Owner | Deadline | Status. Sort by risk level and renewal date.

8. **Track outcomes.** Measure intervention effectiveness: which actions moved accounts from Critical to High or Low? Calculate save rate (saved accounts / at-risk accounts), intervention speed (days from signal to action), and time-to-resolution. Share monthly trends with leadership.

## Output Format

**At-Risk Account Dashboard** (sortable table)
- Account Name, ARR, Renewal Date, Risk Level, Primary Signal, Recommended Action, Owner, Status

**Signal Evidence** (with quotes and timestamps)
- Direct conversation quotes from CS calls, QBRs, support tickets
- Date, source (call/email/ticket), signal type (frustration/disengagement/escalation)
- Context: customer's recent usage, contract terms, historical engagement

**Intervention Playbook per Account** (customized by risk level)
- Specific action steps, success criteria, owner, timeline
- Communication templates (email, call talking points)
- Alternative interventions if primary action doesn't work

**Save Offer Matrix** (if triggered)
- Offer type (discount/feature/pause/downgrade), terms, value, conditions
- Which accounts qualify, counter-offer if customer declines

**Outcome Tracking Template**
- Intervention applied, date, owner, customer response, outcome (save/churn/upgrade)
- Time from signal detection to resolution

## Example

**Mosaic** (event management platform, 5-year customer)

**Account 1: TechConf Productions** | ARR $42K | Risk: Critical
- **Signals**: In last QBR call (March 8), VP of Marketing said "we're really questioning the ROI — we're looking at other platforms." Follow-up CS call (March 14) revealed competitor demo scheduled. Internal Slack thread (March 12): "They're not using automation features we pitched, manually building all events. No engagement with community or trainings."
- **Root cause**: Feature adoption gap; customer's workflow changed post-renewal
- **Intervention**: Executive sponsor call (VP Sales to their VP Marketing) + feature unlock (add dedicated automation trainer) + usage sprint (4-week reset)
- **Save offer**: Free upgrade to premium tier (includes managed services) for 90 days, then reassess
- **Owner**: Sarah Chen (CS Manager)
- **Deadline**: March 28 (3 weeks before renewal negotiation)
- **Status**: Executive sponsor scheduled March 25

**Account 2: Startup Summit Inc.** | ARR $18K | Risk: High
- **Signals**: CS call (March 1) flagged frustration: "Your UI is confusing, we spend too much time on setup." Three support tickets filed (Feb 28-Mar 10), all still open. No response to product training offer sent Feb 20. Internal note: "New champion is operational/less strategic than previous stakeholder."
- **Root cause**: Unresolved technical friction + loss of champion relationship
- **Intervention**: Dedicated success manager + UI walkthrough + champion relationship rebuild (target original strategic contact)
- **Save offer**: 25% discount on renewal (12 months) + dedicated Slack support channel
- **Owner**: Marcus Rodriguez (CS)
- **Deadline**: April 5 (renewal June 1)
- **Status**: New CS manager assigned March 21, first call scheduled

**Account 3: Event Logistics Corp** | ARR $156K | Risk: Medium
- **Signals**: CEO mentioned in casual conversation (March 10) "we're exploring consolidation, might roll some tools together." No negative sentiment, but flagged as strategic uncertainty. Usage steady, QBR tone professional. Internal note: "They're in M&A discussions, could be acquisition target."
- **Root cause**: Organizational change, potential acquisition integration risk
- **Intervention**: Executive business review (focus on contract flexibility for merged org) + roadmap preview (new API features they requested)
- **Save offer**: None needed; focus on renewal terms that allow flexibility (e.g., expansion clause if acquired)
- **Owner**: Priya Patel (Enterprise CS)
- **Deadline**: May 15 (renewal June 15, give time before final decision)
- **Status**: CEO intro call requested for April 1

## Edge Cases

1. **No customer-facing calls (email-only accounts)**
   - Mine support ticket language, email tone, response times for disengagement signals
   - Flag missing calls as a signal itself: customer avoiding sync = potential churn risk
   - Proactively schedule call to re-engage

2. **Customer frustration that's a feature request, not churn risk**
   - Distinguish: "This feature would help us" (engagement signal) vs. "We can't use your product as-is" (churn signal)
   - If frustration is roadmap-solvable, commit publicly to timeline and track delivery
   - Re-score risk downward if customer shows patience with timeline

3. **Large account with multiple stakeholders sending mixed signals**
   - Score by stakeholder role: executive sentiment vs. operator sentiment may differ
   - Identify champion strength and champion risk (what if champion leaves?)
   - Intervene at executive level for critical misalignment

4. **Seasonal churn patterns**
   - Budget cycles: frustration spikes pre-budget freeze, engagement rises post-approval
   - Event seasonality: disengagement in off-season ≠ churn risk for event platform
   - Context-adjust risk scoring for known seasonal patterns

5. **New customer with no conversation history yet**
   - Onboarding velocity = proxy signal (stalled setup call = early churn risk)
   - Early customer frustration has higher churn correlation
   - Score Medium/High if activation milestones missed in first 60 days

## Role & Integration

- **Role**: Marketing | **Action**: Analyze
- **Best for**: CS leaders, renewal managers, account executives, customer success teams
- **Connectors**: HubSpot, Salesforce, Slack, Intercom, Zendesk
- **Frequency**: Weekly or ad-hoc on demand
- **Typical output time**: 15-30 min for Tier 1/2 accounts, 5-10 min for tier 3+
