---
name: "Assess Customer Health Signals"
description: "Extract customer health signals and growth metrics from conversations — usage frequency, feature adoption, satisfaction trends, expansion signals. Grounds analysis in actual customer conversations and NPS comments. Trigger on: customer health, customer metrics, expansion signals, churn risk, customer satisfaction analysis, growth metrics, customer outcomes."
dependencies: []
connectors:
  - name: "HubSpot"
    reason: "Pull customer account data, interaction history, and account health scores to correlate conversation sentiment with CRM tracking"
  - name: "Stripe"
    reason: "Cross-reference conversation data with subscription metrics, usage frequency, and revenue trends to validate customer health claims"
  - name: "Slack"
    reason: "Pull customer success team comments and customer Slack channel activity to track engagement velocity and sentiment shifts"
  - name: "Notion"
    reason: "Reference account plans, success plans, and customer goals to measure progress and identify at-risk accounts"
---

## Purpose

Extract customer health and growth signals from conversations — success calls, check-ins, feature reviews, support conversations. When conversation data exists in Harmony, the skill analyzes what customers actually said about their usage, progress toward goals, feature adoption, and satisfaction to identify expansion opportunities and churn risks. When conversation data doesn't exist, the skill works from CRM-provided metrics and helps you identify what data to collect on the next customer call to build a health baseline.

## When to Use

- Customer success QBRs (quarterly business reviews) to identify expansion opportunities backed by conversation evidence
- At-risk account interventions — customers saying things on calls that predict churn (product underutilization, unmet goals)
- Expansion planning — which customers are ready for upsell based on usage signals and expressed needs on calls
- Cohort analysis — do customers acquired in Q4 show healthier adoption signals than Q3? What's different in their conversations?
- Product roadmap validation — customers on calls repeatedly mention a missing feature; quantify how many would benefit

## Instructions

### 1. Gather customer and conversation context

Ask what data the user has:

- **Which customers?** Specific account, segment, cohort, or full customer base?
- **Conversation types:** Success check-ins? Support calls? NPS interviews? Usage reviews?
- **Time period:** Last month, last quarter, year-to-date?
- **Product usage data:** Do you have product telemetry (feature adoption, login frequency, etc.)? Or just conversation-based signals?
- **Success metrics:** What defines "healthy" for your customers? (revenue growth, feature adoption targets, time-to-value milestones?)

If Harmony conversation data exists, pull:
- Customer success calls, check-in meetings, QBRs
- Support conversations (especially escalations or frustrated customers)
- NPS interviews and customer feedback calls
- Customer advisory board meetings or user interviews
- Any call where customer discussed their usage or outcomes

### 2. Define health scoring framework

Create a customer health model (0–100 score) measuring:

- **Usage frequency (25 points):** How often do they use the product? Benchmark: >weekly usage = healthy
- **Feature adoption (20 points):** Are they using core features we expected them to adopt? Benchmark: >50% of product surface
- **Goal progress (20 points):** Are they making progress toward stated success metrics? (e.g., "Wanted to reduce manual work by 30%")
- **Engagement with your team (15 points):** Attending check-ins, responding to initiatives, active in communication channels
- **Expressed satisfaction (10 points):** Sentiment in conversations, Net Promoter, likelihood to expand

Scoring thresholds:
- 80–100: Healthy (expanding, fully engaged, exceeding goals)
- 60–79: Stable (using product, some adoption gaps, goals on track)
- 40–59: At risk (underutilization, goal delays, engagement declining)
- 0–39: Critical (high churn risk, frustrated, unmet expectations)

### 3. Extract conversation signals

For each customer call, capture:

- **Usage patterns mentioned:** "We use this 2x per week" or "We haven't logged in since the implementation" (opposite signals)
- **Progress vs. goals:** "We've reduced manual processes by 40% — exactly what we wanted" vs. "We haven't seen the ROI yet"
- **Feature adoption comments:** "The automation part is amazing, but we haven't figured out the reporting yet" = partial adoption
- **Satisfaction indicators:** Tone, willingness to recommend, requests for expanded scope, complaints about gaps
- **Expansion signals:** "This is working so well; I want to expand to our other division" vs. "We're evaluating alternatives"
- **Risk signals:** Budget concerns, personnel changes, technical issues, unmet timelines

### 4. Correlate conversation signals with usage data

Compare what customers said on calls against what the data shows:

- **Self-reported vs. actual usage:** Customer says "We use this weekly" but telemetry shows quarterly logins = misalignment
- **Expansion claims:** Customer says "Ready to expand to 3 additional teams" but hasn't enabled single sign-on yet = not actually ready
- **Goal achievement:** Customer says "We hit our targets" but revenue/usage metrics confirm it = credible
- **Satisfaction vs. behavior:** Customer says "Very happy" but hasn't attended last 2 check-in meetings = disengagement despite happy words

### 5. Surface expansion and churn opportunities

For each customer, identify:

- **Expansion opportunity:** Specific feature or use case they mentioned that's not yet adopted. (e.g., "They said they do A and B manually, but haven't tried our automation for C yet")
- **Expansion timeline:** When should you approach them? (after they stabilize on current use case, or immediately?)
- **Expansion value:** Revenue impact if they adopt X, Y, Z? (e.g., "Expanding to 5 teams would 3x their contract value")
- **At-risk signals:** What red flags appeared on last 2 calls? (budget freeze, leadership change, unmet ROI deadline, competitive eval)
- **Intervention needed:** If at-risk, what support does this customer need to get back on track?

### 6. Aggregate to cohort and trend analysis

Roll up findings to show:

- **Health distribution:** % of customers in each health tier (healthy, stable, at-risk, critical)
- **Cohort performance:** Do customers from Q4 onboarding show better health signals than Q3? Why?
- **Expansion pipeline:** How much revenue is available from expansion? Which customers are ready now vs. need preparation?
- **Churn risk value:** How much ARR is at risk from customers scoring <50? What interventions would save highest-value at-risk accounts?
- **Adoption trends:** Are customers adopting features faster/slower than last quarter? What changed?

## Output Format

# Customer Health Report — [Segment / Cohort]
_Prepared [date] · Customer review period: [date range]_

## Executive Summary
[2–3 sentences: total customers analyzed, health distribution, key expansion opportunities, churn risk value, recommended actions]

## Customer Health Scorecard
| Metric | Value | Target | Status | Trend |
|--------|-------|--------|--------|-------|
| Total customers analyzed | [#] | — | — | — |
| Healthy (80–100) | [# / X%] | >70% | [status] | ↑↓→ |
| Stable (60–79) | [# / X%] | <20% | [status] | ↑↓→ |
| At-risk (40–59) | [# / X%] | <8% | [status] | ↑↓→ |
| Critical (<40) | [# / X%] | <2% | [status] | ↑↓→ |
| Expansion revenue potential | $[amount] | — | [timeline] | ↑↓→ |
| Churn risk value | $[amount] | <$X | [status] | ↑↓→ |

## Customer-by-Customer Analysis

### [Customer Name] — $[ARR] | [Status: Healthy / Stable / At-Risk / Critical]
**Health Score:** [XX/100]
**Last Check-in:** [date] | **Next Scheduled:** [date]

**Health Drivers:**
- **Usage:** [# logins/week, feature adoption %, key metrics]
- **Goal Progress:** [Progress toward stated success metrics; e.g., "45% of target reduction in manual work"]
- **Engagement:** [Attending meetings, responding to communications, active/passive]
- **Satisfaction Signals:** [Tone from last call, specific quotes]

**Conversation Highlights:**
> "[Key quote from customer about their progress, satisfaction, or needs]"

**Expansion Opportunity:**
[Specific feature, use case, or expansion they mentioned but haven't yet adopted. Include timeline and revenue impact.]

**Intervention (if at-risk):**
[If score <60: specific support needed to get back on track. e.g., "Technical enablement call to unblock automation workflow adoption"]

_(Repeat for each customer)_

## Expansion Pipeline
| Customer | Current ARR | Expansion Opportunity | Est. Additional ARR | Readiness | Next Step | Timeline |
|---|---|---|---|---|---|---|
| [name] | $[amount] | [feature/use case] | +$[amount] | Now / Prepare / Later | [action] | [date] |

## Churn Risk Summary
| Customer | Current ARR | Risk Level | Key Issue | Intervention | Timeline |
|---|---|---|---|---|---|
| [name] | $[amount] | High / Medium / Low | [issue] | [support needed] | [when] |

## Adoption Trends by Cohort
| Cohort | Count | Avg Health Score | Usage Frequency | Feature Adoption % | Trend |
|---|---|---|---|---|---|
| Q4 2025 onboarding | [#] | [XX] | [frequency] | [X]% | ↑↓→ |
| Q3 2025 onboarding | [#] | [XX] | [frequency] | [X]% | ↑↓→ |

## Product Feature Adoption (from conversation signals)
| Feature | Mentioned in # Calls | Actually Adopted | Adoption Gap | Customer Feedback |
|---|---|---|---|---|
| [feature] | [#] | [Y/N or %] | [gap if any] | [quote or summary] |

## Now What?

- **This week:** Reach out to customers in "At-risk" category for immediate check-ins; address specific concerns from last calls
- **Expansion outreach:** Schedule expansion conversations with healthy customers showing readiness signals
- **At-risk support:** Assign success manager or technical support to customers scoring <50; create recovery plan
- **Product feedback:** Compile feature adoption gaps and unmet customer needs; share with product team
- **Next review:** Schedule follow-up customer health review in [30/60 days]; measure progress on at-risk interventions

---

## Example

**User:** "I need to understand which of our 8 main customers are healthy and which ones are at risk. We have monthly check-in calls with all of them. Last month, one customer talked about evaluating competitors. I want to understand who's actually going to expand and who might leave."

**Output:**

# Customer Health Report — Enterprise Segment
_Prepared 2026-03-22 · Customer review period: Feb 2026 to Mar 2026_

## Executive Summary
Analyzed 8 enterprise customers ($6.2M total ARR) across 12 recent conversations. Health distribution: 5 healthy (62%), 2 stable (25%), 1 critical (13%). Strong expansion pipeline of $1.8M from healthy customers ready for feature extensions. One customer showing serious churn risk ($280K ARR) due to unmet ROI timeline and competitive eval; immediate intervention needed. Key action: expand conversations with 3 ready customers; rescue 1 at-risk account this week.

## Customer Health Scorecard
| Metric | Value | Target | Status | Trend |
|--------|-------|--------|--------|-------|
| Total customers analyzed | 8 | — | — | — |
| Healthy (80–100) | 5 (62%) | >70% | Good | ↑ |
| Stable (60–79) | 2 (25%) | <20% | Watch | → |
| At-risk (40–59) | 1 (13%) | <8% | Alert | ↑ |
| Critical (<40) | 0 | <2% | Good | → |
| Expansion revenue potential | $1.8M | — | Ready now | ↑ |
| Churn risk value | $280K | <$X | Alert | ↑ |

## Customer-by-Customer Analysis

### CloudSync Solutions — $580K ARR | [HEALTHY]
**Health Score:** 88/100
**Last Check-in:** Mar 15, 2026 | **Next Scheduled:** Apr 19, 2026

**Health Drivers:**
- **Usage:** 4.2 logins/week per user, 68% feature adoption (automation, reporting, API integration active)
- **Goal Progress:** 55% reduction in manual process time (target was 50%) — exceeding expectations
- **Engagement:** VP Ops attending all check-ins; team actively using product; responding to feature updates
- **Satisfaction Signals:** Positive tone throughout call; asked about expansion; zero complaints

**Conversation Highlights:**
> "This automation has completely changed how we think about our ops function. We're now looking at expanding this to our European operations."

**Expansion Opportunity:**
Multi-region expansion + workflow approval module (which they're currently handling manually). Estimated additional ARR: +$220K. Readiness: Immediate (already using core platform successfully). Timeline: Expand by end of Q2.

**Intervention:** None — maintain quarterly cadence, introduce expansion scope in next QBR.

### Vertex Systems — $420K ARR | [HEALTHY]
**Health Score:** 82/100
**Last Check-in:** Mar 8, 2026 | **Next Scheduled:** Apr 12, 2026

**Health Drivers:**
- **Usage:** 3.1 logins/week, 64% feature adoption (automation, basic reporting; advanced analytics not yet adopted)
- **Goal Progress:** 40% reduction in ops team time on manual work (target was 35%) — on track
- **Engagement:** Operations Director actively engaged; IT team attending technical reviews; responding to all outreach
- **Satisfaction Signals:** Overall positive; expressed interest in advanced analytics; no complaints on last call

**Conversation Highlights:**
> "We're getting strong value. I'd like to explore the advanced analytics module to give our team better visibility into process bottlenecks."

**Expansion Opportunity:**
Advanced analytics module + executive dashboard. Estimated additional ARR: +$180K. Readiness: High (once they complete core adoption). Timeline: 60 days (let them stabilize on current rollout first, then expand).

**Intervention:** Technical enablement call on advanced analytics; schedule POD with analytics PM to scope integration.

### TechFlow Inc. — $340K ARR | [STABLE]
**Health Score:** 71/100
**Last Check-in:** Mar 12, 2026 | **Next Scheduled:** Apr 9, 2026

**Health Drivers:**
- **Usage:** 2.1 logins/week, 48% feature adoption (automation adopted; reporting and integrations not fully explored)
- **Goal Progress:** 25% reduction in manual work (target was 40%) — lagging expectations
- **Engagement:** Ops Manager engaged but busy; declining to attend technical reviews; delayed responses to outreach
- **Satisfaction Signals:** Neutral tone; said "meeting expectations so far" but no enthusiasm for expansion; raised budget concern

**Conversation Highlights:**
> "We're getting some value but it's slower to implement than we expected. With the budget freeze coming, we're not sure about additional features."

**Expansion Opportunity:**
None immediate. They need to stabilize on current use case and exceed their initial ROI target before considering expansion.

**Intervention:** Schedule technical enablement call to accelerate feature adoption and hit 40% time reduction target; tie success to Q3 budget conversations.

### DataStream Analytics — $280K ARR | [CRITICAL - CHURN RISK]
**Health Score:** 35/100
**Last Check-in:** Mar 14, 2026 | **Next Scheduled:** [Not scheduled]

**Health Drivers:**
- **Usage:** 0.8 logins/week (declining; was 2+ per week in Jan), 32% feature adoption (only using core automation; everything else dormant)
- **Goal Progress:** 15% reduction in manual work (target was 35%) — missing target by 20 percentage points
- **Engagement:** Sr. Director stopped attending check-ins; delayed responses; new person (Ops Analyst, lower authority) sitting in instead
- **Satisfaction Signals:** Frustrated tone on last call; raised ROI questions; mentioned "evaluating alternatives"

**Conversation Highlights:**
> "Honestly, we're not seeing the ROI we were promised. We've hit some technical roadblocks with integration and it's taken longer to onboard than we expected. We're looking at other options to see if there's a better fit."

**Expansion Opportunity:** None. Churn risk mitigation is only priority.

**Intervention — URGENT:**
1. Schedule call with Sr. Director AND CFO this week (not ops analyst) — address ROI and timeline concerns directly
2. Technical deep-dive on integration blockers that slowed adoption (likely fixable)
3. Offer 2-week intensive implementation support to accelerate time-to-value (remove "slow onboarding" complaint)
4. Recovery plan: Hit 35% manual work reduction target by end of April; prove ROI before renewal (Aug)
5. Success: If not addressed by April 30, high likelihood of non-renewal (risk: $280K ARR loss)

### CloudScale Corp. — $180K ARR | [STABLE]
**Health Score:** 65/100
**Last Check-in:** Mar 10, 2026 | **Next Scheduled:** Apr 3, 2026

**Health Drivers:**
- **Usage:** 2.5 logins/week, 52% feature adoption (basic automation adopted; advanced features untouched)
- **Goal Progress:** 30% reduction in process time (target 35%) — slightly behind but tracking toward target
- **Engagement:** Ops Manager engaged but sporadic attendance at check-ins; team responsiveness is good
- **Satisfaction Signals:** Positive overall but passive; said "Happy enough" but no enthusiasm for expansion

**Intervention:** Engagement nudge — schedule technical workshop to show advanced features and build expansion appetite.

## Expansion Pipeline
| Customer | Current ARR | Expansion Opportunity | Est. Additional ARR | Readiness | Next Step | Timeline |
|---|---|---|---|---|---|---|
| CloudSync | $580K | Multi-region + approval workflows | +$220K | Now | Expansion QBR | End Q2 |
| Vertex Systems | $420K | Advanced analytics + executive dashboard | +$180K | 60 days | Tech enablement call | Apr 5 |
| TechFlow Inc. | $340K | Full adoption + advanced features | +$120K | Prepare | Adoption acceleration support | Q3 |
| CloudScale | $180K | Advanced analytics | +$80K | Prepare | Feature workshop | Apr 15 |
| DataStream | $280K | [NONE — churn risk] | N/A | N/A | Churn mitigation | URGENT |

**Total Expansion Potential:** $580K from ready-now customers; $200K from prepare-phase customers. Total pipeline: $780K expansion ARR.

## Churn Risk Summary
| Customer | Current ARR | Risk Level | Key Issue | Intervention | Timeline |
|---|---|---|---|---|---|
| DataStream Analytics | $280K | CRITICAL | Unmet ROI, integration delays, evaluating alternatives | Sr Director call, intensive implementation support, recovery plan | This week |

## Adoption Trends by Cohort
| Cohort | Count | Avg Health Score | Usage Frequency | Feature Adoption % | Trend |
|---|---|---|---|---|---|
| 2025 Q4 onboarding | 3 (CloudSync, Vertex, CloudScale) | 79 | 3.3 logins/week | 61% | ↑ Strong |
| 2025 Q3 onboarding | 5 (TechFlow, DataStream, others) | 58 | 1.9 logins/week | 44% | ↓ Declining |

Q4 cohort showing 36% higher health scores and 38% higher usage than Q3. Suggests improvements in onboarding or product changes in Q4 contributed to better outcomes.

## Product Feature Adoption (from conversation signals)
| Feature | Mentioned in # Calls | Actually Adopted | Adoption Gap | Customer Feedback |
|---|---|---|---|---|
| Core automation | 10/12 | 8/8 (100%) | None | "This is the most valuable part for us" |
| Reporting & analytics | 8/12 | 3/8 (38%) | 62% gap | "We haven't gotten to this yet; focused on core automation first" |
| Advanced analytics | 3/12 | 0/8 (0%) | 100% gap | "Would be valuable but haven't had bandwidth" |
| Approval workflows | 4/12 | 1/8 (13%) | 87% gap | "We're still doing approvals manually; would love to automate" |
| Executive dashboard | 2/12 | 0/8 (0%) | 100% gap | "Nice to have but not critical" |
| API integrations | 6/12 | 2/8 (25%) | 75% gap | "We want to connect to Salesforce and Jira; technical setup is a blocker" |

Largest adoption gap: Reporting, approval workflows, and integrations. Suggests customers need more guidance, support, or product improvements in these areas to drive adoption.

## Now What?

- **Today (Mar 22):**
  - Call DataStream Sr. Director to address churn risk; schedule recovery plan (target: intensive implementation support starting Mar 25)
  - Email CloudSync VP Ops to set up expansion QBR for end of Q2
- **This week (by Mar 29):**
  - Technical enablement call with Vertex Systems on advanced analytics
  - Integration troubleshooting session with DataStream IT team (identify blockers)
  - Feature workshop with CloudScale on advanced analytics
- **Next month (April):**
  - Quarterly review with TechFlow to address ROI gap; present adoption acceleration plan
  - Measure DataStream progress toward 35% manual work reduction target (go/no-go for renewal)
  - Expansion kickoff with CloudSync for multi-region rollout
- **Product feedback:**
  - Share feature adoption gaps with product: Reporting, approval workflows, and integrations need better onboarding/guidance
  - Consider product-led resources or in-app tutorials for 62% adoption gap on reporting
- **Next health review:** April 30, 2026 (measure DataStream recovery progress; finalize Q2 expansion roadmap with CloudSync and Vertex)

---

## Edge Cases

- **Customer with low activity but high satisfaction ("offline usage"):** Some customers use product heavily offline (export data, work asynchronously). Ask on next call: "How often are you actually working in the tool vs. offline?" If answer is low but outcomes are strong, may indicate product UX issue (should be easier to do in-tool) but customer is still getting value.
- **New customer (onboarded <60 days ago):** Don't compare to mature customer benchmarks. Focus on: Are they meeting their onboarding milestones? Is engagement trajectory positive or declining? New customers who are disengaging at 30 days are at risk; healthy new customers show increasing activity week-over-week.
- **Customer with seasonal usage:** Some customers use product heavily only during certain periods (end-of-month close, annual planning, etc.). Adjust benchmarks for their industry and seasonality. Flag high-usage months to understand when they're most engaged.
- **Conversation data unavailable for this customer:** Work from CRM activity log (last contact, open tasks, renewal date) and product usage data alone. Note in report that conversation data would increase confidence in health assessment. Flag for next check-in call.
- **Customer says positive things but behavior is disengaging:** Flag as "satisfaction-behavior mismatch" — customer is being polite but actually losing interest. Higher churn risk than customer who is direct about concerns. Recommend deep-dive conversation to uncover real issues.
- **Multiple stakeholders with conflicting signals:** Some say "very happy," others say "evaluating alternatives." Investigate split in the organization. May indicate champion is satisfied but financial buyer or technical team has reservations. Address specific concerns with those stakeholders directly.
