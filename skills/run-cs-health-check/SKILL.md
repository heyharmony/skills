---
name: "Run CS Health Check"
description: "Assess customer account health by analyzing conversation patterns — engagement frequency, sentiment trends, feature adoption discussions, executive sponsor involvement, and expansion signals across onboarding calls, QBRs, and support escalations. Trigger on: customer health, account health, CS health check, QBR prep, renewal risk, customer success review, account review, expansion signals, customer sentiment, health score, account health score."
dependencies: []
author: "Harmony"
version: "1.0.0"
icon: "sparkles"
cover: ""
screenshots: []
category: "Customer Success"
---

## Purpose

CRM health scores are lagging indicators — by the time you update the score, the damage is done. The real signals live in conversations. A customer who stops asking questions in calls has disengaged. A champion who starts hedging language ("we'll see," "maybe next quarter") is cooling. An exec sponsor who stops attending QBRs is a red flag. This skill analyzes the full arc of customer conversations in Harmony to build a real-time health picture: engagement trajectory, sentiment over time, feature adoption depth, stakeholder involvement changes, and expansion/contraction signals. Instead of waiting for quarterly CRM reviews, CS teams get continuous, conversation-driven account health visibility.

## When to Use

- **Pre-QBR Account Review**: Run this 1 week before a scheduled QBR to understand sentiment, adoption depth, and stakeholder dynamics before the call.
- **Monthly CS Portfolio Review**: Track health trajectories across your entire book to surface accounts needing intervention before problems escalate.
- **Renewal Prep (60 Days Before)**: Assess relationship strength and expansion potential when renewal conversations should begin; identify risks early.
- **After Negative Customer Interaction**: Understand if a support issue or escalation reflects isolated frustration or broader disengagement.
- **Expansion Opportunity Assessment**: Evaluate whether an account has the adoption depth, stakeholder buy-in, and expansion signals to justify upsell investment.
- **New CSM Inheriting Accounts**: Get instant context on each account's health, relationship state, and near-term risks without 30-day ramp delay.
- **Executive Business Review Prep**: Synthesize customer sentiment and outcomes data for exec alignment on portfolio health and growth opportunities.

## Instructions

**Step 1: Gather Conversation Data**
Pull all conversations for the account over the last 90 days. This includes QBRs, monthly check-ins, support calls, onboarding/training sessions, and ad-hoc meetings. If available, retrieve call transcripts or meeting notes from Harmony, HubSpot activity logs, Slack threads, or Zendesk interactions. Exclude one-off async emails unless they signal major escalations.

**Step 2: Score Engagement Health**
Measure call frequency trend: are calls increasing, stable, or declining month-over-month? Quantify no-show rate and response time to meeting requests (prompt = engaged, slow = cooling). Count stakeholder breadth: how many people from the customer attend meetings? Single point of contact = fragile; multi-threaded = resilient.

**Step 3: Score Sentiment Health**
Analyze language patterns across calls. Look for progression: enthusiastic ("excited to implement," "this is exactly what we needed") → neutral ("sounds good") → frustrated ("this isn't working for our team") → hostile ("we may need to find another solution"). Count complaints vs. praise. Note escalation language ("frustrated," "not acceptable," "considering other options").

**Step 4: Score Adoption Health**
Track which features are discussed in calls. Are they learning ("how do I set up X?") or defensive ("this feature isn't relevant to us")? Count training requests and hands-on support questions — high engagement signal. Note workflow integration mentions ("we've built this into our daily process") vs. orphaned features ("we tried that once").

**Step 5: Score Relationship Health**
Assess champion strength: is the primary contact actively advocating internally, or just relaying your updates? Judge executive sponsor engagement: are they attending QBRs, or delegating to junior staff? Measure multi-threading depth: how many departments and seniority levels do you have relationships with?

**Step 6: Score Expansion Signals**
Listen for new use-case mentions ("we're thinking about applying this to X"), team growth ("we just hired 5 new people in this group"), budget discussions, requests for adjacent features ("can you also do X?"), and competitive evaluation language — both positive ("we've looked at other tools") and concerning ("we're comparing your solution to Y"). Contraction signals include "we're sunsetting this," "headcount reductions," or "budget freeze."

**Step 7: Composite Health Scoring**
Combine engagement, sentiment, adoption, relationship, and expansion dimensions into an overall health score (Green/Yellow/Red). Display dimension breakdown with trend arrows (↑ improving, → stable, ↓ declining). A Yellow account might have strong adoption but declining engagement; a Red account might show hostile sentiment despite active calls. Nuance matters.

**Step 8: Generate Action Plan**
For Green accounts: protect (ensure renewal) and expand (prepare upsell conversation). For Yellow accounts: investigate (schedule a diagnostic call) and intervene (address the specific weakness). For Red accounts: escalate (involve leadership) and prepare save strategy (concessions, executive alignment, or pivot approach).

## Output Format

**Account Health Dashboard**
- Composite score (Green/Yellow/Red) with confidence level
- Five-dimension breakdown (Engagement, Sentiment, Adoption, Relationship, Expansion) with individual scores and trend arrows
- Risk level summary (critical/high/medium/low)
- Days to renewal (if applicable)

**Conversation Timeline**
- Chronological list of conversations over the 90-day window
- Key moments annotated: champion mention, sentiment shift, adoption trigger, escalation, expansion signal
- Direct quotes that support health assessment

**Stakeholder Map**
- Names, titles, departments, and engagement level for each contact
- Champion identification and relationship strength assessment
- Exec sponsor presence/absence and delegation patterns

**Risk/Opportunity Register**
- Specific risks: "Champion has been promoted and less available" or "Three support escalations in Q1, sentiment cooling"
- Expansion opportunities: "New VP Finance has questioned workflow — expansion conversation ready" or "Customer opening 2 new sites, needs scaling discussion"

**Action Plan**
- Prioritized actions (by risk/opportunity potential)
- Owner (CSM, Sales, Product)
- Due date
- Success metric (e.g., "Schedule exec alignment by 4/15, measure by renewal acceptance by 5/30")

**QBR Prep Brief** (if QBR is within 14 days)
- Agenda recommendations (what to discuss based on signals)
- Preparation reminders (champion transition, expansion conversation readiness, renewal logistics)
- Executive talking points

## Example

**Account: Northern Grid Utilities**
- Product: Windmill Energy Analytics Platform
- ARR: $185K | Tenure: 14 months | Renewal: 75 days away | Stakeholders: 4

**Conversation Summary (Last 90 Days)**
- Jan 15: Onboarding check-in with Jr. Analyst (Mike), VP Operations attended (enthusiastic, "this will transform how we monitor assets")
- Feb 3: Monthly check-in with Mike only; tone neutral ("things are stable")
- Feb 28: Support escalation from Operations Manager (Linda); complaint: "reporting dashboard is slow, we've had 2 incidents"
- Mar 10: Check-in with Mike; sentiment cooling ("we're evaluating if this is worth the investment")
- Mar 18: Ad-hoc call with new VP (Mike promoted to manager, now VP Finance owns tech decisions); Linda also attended; expansion signal: "we're opening two new substations in Q3, need to understand licensing impact"

**Health Scores**
- **Engagement**: ↓ Yellow (3 calls/month → 1 call, escalation required, but multi-threading improving)
- **Sentiment**: ↓ Yellow (champion-led enthusiasm fading; operations team frustrated)
- **Adoption**: → Green (active feature use in monitoring workflows, training requests slowed)
- **Relationship**: ↑ Yellow (champion transitioned but new exec sponsor engaged; rebuilding required)
- **Expansion**: ↑ Green (clear expansion signal with new substations; budget talk emerging)

**Composite Health Score: Yellow**
Engagement and sentiment are declining, but relationship is rebuilding with new sponsor and expansion signal is strong. Without intervention, this trends Red. With proactive outreach, could trend Green by renewal.

**Risk Register**
- **Critical**: Support escalations + cooling sentiment = renewal risk if not addressed
- **High**: Champion role change = lost internal advocacy and onboarding context
- **Medium**: New exec sponsor unfamiliar with value delivered; needs executive alignment

**Opportunity Register**
- **High**: Two new substations in Q3 = expansion conversation ready (license uplift, training, support scaling)
- **Medium**: Finance buy-in from new VP = budget discussion potential if ROI is clear

**Action Plan**
| Action | Owner | Due | Success Metric |
|--------|-------|-----|-----------------|
| Schedule support review call (address dashboard performance) | CSM | Mar 25 | Incident root cause identified, remediation plan in place |
| Executive alignment call with VP Finance & VP Operations | Account Exec + CSM | Apr 1 | Understanding of expansion needs, initial budget discussion |
| Prepare expansion proposal for 2 substations | Product Specialist | Apr 8 | Proposal sent, call scheduled for Apr 15 |
| Renewal conversation kickoff | CSM | Apr 15 | Renewal intent confirmed, timeline secured |

**Outcome**: Proactive intervention on support + fast-follow expansion conversation likely converts Yellow → Green and secures renewal + 35% upsell.

## Edge Cases

1. **New Account (<3 Months Data)**: Onboarding velocity is the primary health signal. High engagement, fast feature adoption, and multi-stakeholder buy-in = Green despite limited conversation history. Use trend arrows cautiously; baseline building.

2. **Enterprise Account (20+ Stakeholders)**: Aggregate sentiment and engagement by department. Likely to see mixed signals (Finance conservative, Operations enthusiastic). Build a stakeholder heatmap, prioritize by influence and adoption. Composite score should weight champion + exec sponsor heavily.

3. **Account with No Recent Calls** (silence = Red flag): Don't assume disengagement is intentional. Could signal: successful go-live (customer is self-sufficient), CSM neglect (dangerous), or customer in planning mode. Requires immediate outreach to diagnose. Default to Red until proven otherwise.

4. **CS Handoff** (CSM change): Previous CSM's notes are gold. Weigh recent sentiment heavily (account's true current state) but flag historical relationships that need rebuilding. New CSM needs to reconnect with all stakeholders ASAP.

5. **All Signals Green, But Renewal Budget at Risk** (external factor): Health check surfaces the account's strength; finance/procurement delays are not health issues. Flag separately as deal risk, not account health risk. Escalate to leadership for deal management.

