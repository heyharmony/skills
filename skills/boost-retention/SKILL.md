---
name: "Boost Retention & Engagement"
description: "Diagnose and fix churn by measuring cohort retention curves, identifying activation metrics, and designing re-engagement campaigns. What it does: analyzes retention patterns by user segment and builds targeted strategies to keep users coming back. When to use it: when CAC is rising relative to retention, you need to understand why users leave, or you're designing engagement features. Trigger on: churn rate, DAU declining, retention curve, activation metric, engagement funnel, re-engagement campaign, cohort analysis, dead zone."
dependencies: []
connectors:
  - name: "Google Analytics"
    reason: "Track cohort retention curves, DAU/MAU trends, and identify exactly where users drop off"
  - name: "Slack"
    reason: "Analyze support tickets and user feedback to identify churn reasons and common frustration points"
  - name: "HubSpot"
    reason: "Measure lifecycle stage transitions and design win-back campaigns for at-risk or churned accounts"
  - name: "Intercom"
    reason: "Segment users for targeted re-engagement messaging based on engagement depth and last-seen data"
author: "Harmony"
version: "1.0.0"
icon: "sparkles"
cover: ""
screenshots: []
category: "Customer Success"
---

## Purpose

Retention is the only metric that matters in the long term. A product that acquires 1,000 users but keeps none of them is a waste of money. A product that acquires 100 users but keeps 50 forever wins.

The key insight: your retention curve tells the story of your product-market fit. A healthy curve dips sharply in the first week (inevitable churn), then flattens—meaning you've found your real core users. A curve that decays to zero is a broken product masquerading as growth.

Your job is to find the single behavior in week 1 that predicts whether a user will still be active in week 8. This is your activation metric. Users who hit it stick around. Users who don't hit it leave.

Then, your job is to re-engage users who haven't hit activation. And finally, to segment and resurrect users who've already churned.

## When to Use This Skill

- Your DAU/MAU ratio is below 30% (most users don't return monthly)
- You're acquiring users cheaply but they leave before paying you
- You don't have a clear hypothesis about which behaviors predict long-term retention
- A cohort from 6 months ago is gone; you need to understand why
- You're designing an engagement feature and want to measure whether it moves retention
- Support tickets or user interviews reveal churn reasons you need to address systematically
- You want to resurrect churned users but don't know which segments are worth targeting

## Instructions

1. **Build cohort retention curves and identify your baseline**
   - Define cohorts: group users by signup week or month
   - Track % of cohort active at days 1, 7, 14, 30, 60, 90
   - A healthy curve: 50%+ survive week 1, 30-40% survive month 1, flat after 60 days
   - Plot curves by user segment (freemium vs. paid, self-serve vs. sales-assisted, persona)
   - Sub-bullets: Compare current curves to competitor benchmarks; identify which segments have healthiest curves; flag cohorts with abnormal drop-off

2. **Identify your activation metric through correlation analysis**
   - Ask: What single behavior in week 1 predicts month 2 retention?
   - Common activations: Facebook (7 friends in 10 days), Slack (2K messages sent), Twitter (following 30 accounts), Duolingo (7 days in a row)
   - Test multiple candidates: completion of onboarding, creation of first artifact, time spent, social connection made
   - Segment activation by persona—power users and casual users may have different activation metrics
   - Sub-bullets: Pull user data; correlate specific actions with 60-day retention; identify the single highest-predictive action; validate across 3+ cohorts

3. **Segment users by engagement depth and trajectory**
   - Healthy: active every week, engagement steady or growing
   - At-risk: engagement declining week-over-week, approaching churn threshold
   - Churned: inactive for 14+ days (soft churn) or 30+ days (hard churn)
   - Sub-users: Group into 3-5 segments based on engagement curve; measure size of each; identify transition rates (healthy → at-risk → churned)

4. **Analyze dead zones and drop-off patterns**
   - Dead zone: the specific moment/feature where users consistently drop off
   - Common dead zones: end of onboarding (didn't feel core value), first week of usage (confusing next steps), trying core feature and it underperforms
   - Use session recordings or user interviews to understand what happens in dead zone
   - Sub-bullets: Map drop-off by feature; correlate drop-off timing with specific events (failed payment, support issue, blank slate); identify which cohort segments hit dead zones first

5. **Design habit-formation interventions**
   - Frequency: daily users have highest retention; weekly users have moderate; monthly users are vulnerable to churn
   - Intervention types: push notifications (high convert, high annoy); email digests (lower convert, lower annoy); in-app nudges (contextual, high convert)
   - Respect attention and context—don't spam users who've just seen a nudge
   - Sub-bullets: Design 3-5 intervention types; test frequency and timing; measure conversion (nudge → return) and unsubscribe rate; establish "notification hygiene" rules

6. **Build re-engagement campaigns for at-risk users**
   - Define at-risk: last active 7-14 days ago, engagement declining
   - Segment by loss reason: unfinished onboarding, feature underperformance, unmet expectation, competitive switch, life change
   - Customize message to reason: offer tutorial for confused users, highlight new features for outdated users, ask for feedback for disappointed users
   - Sub-bullets: Create 3-4 message variants; A/B test subject lines; measure open/click/re-activation rates; iterate on messaging based on response

7. **Design win-back campaigns for hard-churned users**
   - Hard churn: inactive 30+ days
   - Segment by tenure: day-1 churners (activation issue), week-2 churners (dead zone), month-3+ churners (life change or switching)
   - Target messages at highest-ROI segments: users who were active for 30+ days are more likely to reactivate than day-1 churners
   - Sub-bullets: Define win-back budget (cost per reactivation vs. LTV); set realistic targets; schedule campaigns 30/60/90 days after churn

8. **Establish retention review metrics and cadence**
   - Weekly: New DAU/MAU ratio, new cohort retention week-1 %, engagement trend (are active users staying active?)
   - Monthly: Full cohort retention curves by segment, activation metric achievement rate, re-engagement campaign performance
   - Quarterly: Churn reason analysis, dead zone identification, new intervention testing results
   - Sub-bullets: Build dashboard tracking all metrics; establish alert thresholds (e.g., week-1 retention drops below 40%); schedule monthly retention reviews with team

## Output Format

```
RETENTION & ENGAGEMENT ANALYSIS
===============================

Product/Company: [Name]
Analysis Date: [Date]
Reporting Period: [Cohorts analyzed]

---

BASELINE RETENTION HEALTH

Current Metrics:
- DAU/MAU ratio: [X]%
- Week 1 retention: [X]%
- Month 1 retention: [X]%
- Month 3 retention: [X]%
- Overall churn rate: [X]% per month

Benchmark Comparison:
- Industry average (similar category): [Y]%
- Top-quartile competitor: [Y]%
- Your position: [Above/At/Below] benchmark

---

COHORT RETENTION CURVES (by Segment)

[User Segment A: Freemium Users]
Day 1: 100%
Day 7: 35%
Day 30: 18%
Month 2: 12%
Month 3: 9%
Trend: Healthy dip and stabilization (churn front-loaded)

[User Segment B: SMB Enterprise]
Day 1: 100%
Day 7: 68%
Day 30: 52%
Month 2: 48%
Month 3: 45%
Trend: Gradual decline (may indicate active churn or seasonal usage)

[User Segment C: Power Users (>10 sessions in week 1)]
Day 1: 100%
Day 7: 92%
Day 30: 85%
Month 2: 81%
Month 3: 78%
Trend: Healthy, flat curve (high-engagement users stick)

---

ACTIVATION METRIC ANALYSIS

Primary Activation Metric: [Behavior X]
Definition: [Specific, measurable behavior in day 1-14]
Correlation with 60-day retention: [X]% (users who hit metric are X% more likely to be active at day 60)

Testing Methodology:
- Cohorts analyzed: [N]
- Sample size: [N users]
- Date range: [Start-End]
- Segmentation: [By persona/plan/cohort]

Results by Segment:
- Segment A: [X]% of users hit metric → [Y]% 60-day retention
- Segment B: [X]% of users hit metric → [Y]% 60-day retention
- Segment C: [X]% of users hit metric → [Y]% 60-day retention

Secondary Activation Metrics (Ranked by Correlation):
1. [Metric 2]: [X]% correlation with retention
2. [Metric 3]: [X]% correlation with retention
3. [Metric 4]: [X]% correlation with retention

---

ENGAGEMENT SEGMENTATION

[Healthy Segment] - Active & Growing
- Definition: Active in last 7 days, engagement steady or increasing
- Size: [X]% of active users
- Retention (month 1): [X]%
- Actions: Monitor and celebrate; identify expansion opportunities

[At-Risk Segment] - Declining Engagement
- Definition: Active 8-14 days ago, engagement declining 20%+ week-over-week
- Size: [X]% of active users
- Churn probability (next 30 days): [X]%
- Actions: Targeted re-engagement; remove friction; personalized outreach

[Soft Churn] - Silent Users
- Definition: Inactive 15-29 days
- Size: [X]% of acquired users
- Reactivation rate (on outreach): [X]%
- Actions: Win-back campaign; ask for feedback

[Hard Churn] - Gone
- Definition: Inactive 30+ days
- Size: [X]% of acquired users
- Expected reactivation rate: [X]%
- Actions: Long-term win-back; potential write-off if >90 days

---

DEAD ZONE IDENTIFICATION

Dead Zone 1: [Feature / Flow / Moment]
- When it occurs: [Day X of user lifecycle]
- Drop-off rate: [Y]% of users reach this point, [Z]% complete it
- Root causes (from user research): [List top 3-5 barriers]
- Impact on retention: Users who fail here have [X]% lower 30-day retention

Dead Zone 2: [Feature / Flow / Moment]
- When it occurs: [Day X of user lifecycle]
- Drop-off rate: [Y]% reach, [Z]% complete
- Root causes: [List barriers]
- Impact on retention: [X]% lower retention

Dead Zone 3: [Feature / Flow / Moment]
- When it occurs: [Day X of user lifecycle]
- Drop-off rate: [Y]% reach, [Z]% complete
- Root causes: [List barriers]
- Impact on retention: [X]% lower retention

---

ACTIVATION METRIC ACHIEVEMENT FUNNEL

Defined Activation Metric: [Metric]
Week 1 Achievement Rate: [X]%
Of those who achieve: [Y]% 60-day retention
Of those who don't achieve: [Z]% 60-day retention
Lift: [Y-Z]% difference (users who hit metric are X% more likely to stick)

Barrier to Activation:
- [X]% of new users don't understand the value prop
- [X]% hit a confusing step and quit
- [X]% don't see success in first attempt
- [X]% are over-onboarded and abandon before activation

Recommended Friction Reducers:
1. [UX change / educational intervention / incentive]
2. [UX change / educational intervention / incentive]
3. [UX change / educational intervention / incentive]

---

RE-ENGAGEMENT CAMPAIGN PLAYBOOK

Target Segment: At-Risk Users (last active 8-14 days ago, engagement declining)
Current Size: [X] users
Expected Response Rate: [Y]%
Expected Reactivation Cost: $[X] per user

Campaign Variant 1 - Personalized Value Reminder
- Subject/Opening: [Copy]
- Message: [Tailored to reason they visited]
- CTA: [Specific action to drive return]
- Test metric: Open %, click %, return rate
- Expected performance: [X]% open, [Y]% click, [Z]% reactivate

Campaign Variant 2 - Social Proof / FOMO
- Subject/Opening: [Copy highlighting activity from friends/colleagues]
- Message: [What they've missed, what peers are doing]
- CTA: [FOMO-based call to action]
- Test metric: Open %, click %, return rate
- Expected performance: [X]% open, [Y]% click, [Z]% reactivate

Campaign Variant 3 - Ask for Feedback
- Subject/Opening: [Copy asking why they left]
- Message: [Non-threatening inquiry, offer to help]
- CTA: [Take 1-min survey | Talk to us]
- Test metric: Response rate, reactivation rate
- Expected performance: [X]% open, [Y]% respond, [Z]% reactivate

Campaign Variant 4 - New Feature/Content
- Subject/Opening: [Copy about new capability added]
- Message: [Show how new feature solves their original need]
- CTA: [Try it now]
- Test metric: Open %, click %, return rate
- Expected performance: [X]% open, [Y]% click, [Z]% reactivate

---

HABIT-FORMATION INTERVENTION STRATEGY

Target Behavior: [Daily / Weekly use]
Current Habit Baseline: [X]% of users have forming habit
30-day target: [X]% of users in daily/weekly habit

Intervention 1 - Context-Triggered Push Notification
- When: [Specific moment in user's week when they're likely receptive]
- Message: [Personalized, specific action]
- Frequency: [X times/week]
- Opt-out: [Easy unsubscribe link]
- Expected impact: [X]% increase in return rate

Intervention 2 - Email Digest (Weekly)
- When: [Day/time when most engaged users are active]
- Content: [Personalized summary of activity, new content, peers]
- Frequency: [1x/week]
- Opt-out: [One-click unsubscribe]
- Expected impact: [X]% increase in weekly active rate

Intervention 3 - In-App Nudge (Contextual)
- Trigger: [User navigates to Y, sees nudge about Z]
- Message: [Short, specific, non-blocking]
- Frequency: [1x per session max]
- Opt-out: [Dismiss, no re-show]
- Expected impact: [X]% increase in feature adoption

Notification Hygiene Rules:
- Never show >1 notification per session
- Always include easy opt-out
- Measure unsubscribe rate; pause if exceeds [X]%
- A/B test all copy; retire low-performing variants
- Review weekly; tune frequency based on engagement impact

---

QUARTERLY RETENTION TARGETS & ROADMAP

Month 1 Priorities:
1. Reduce dead zone [X] friction by [Y]% → expect [Z]% improvement in retention
2. Launch re-engagement campaign for at-risk segment → expect [Y] reactivations
3. Implement daily habit intervention → expect [Z]% increase in DAU/MAU ratio

Month 2 Priorities:
1. Test new activation metric intervention → measure impact on week-1 achievement rate
2. Expand win-back campaign to hard-churned users → set [X]% reactivation target
3. Segment users by churn reason; build targeted retention strategies → measure by segment

Month 3 Priorities:
1. Analyze Q1 retention results; identify new dead zones or emerging patterns
2. Build loyalty program or advanced feature unlock for high-engagement users
3. Re-test all retention hypotheses with new cohorts; iterate

Key Metrics Dashboard:
- [Link to internal analytics dashboard tracking all metrics above]

Review Cadence:
- Weekly: DAU/MAU, week-1 retention for newest cohorts, re-engagement campaign performance
- Monthly: Full retention curves, activation metric achievement, segment transition rates
- Quarterly: Churn reason analysis, dead zone resolution status, new hypothesis testing
```

## Example

```
RETENTION & ENGAGEMENT ANALYSIS
===============================

Product/Company: DocFlow (Collaborative Document Editor)
Analysis Date: March 2026
Reporting Period: Q1 2026 (Jan-Mar cohorts)

---

BASELINE RETENTION HEALTH

Current Metrics:
- DAU/MAU ratio: 28%
- Week 1 retention: 42%
- Month 1 retention: 24%
- Month 3 retention: 15%
- Overall churn rate: 8.2% per month

Benchmark Comparison:
- Industry average (productivity software): 35%
- Top-quartile competitor (Notion): 48%
- Your position: Below benchmark; churn is above-average

---

COHORT RETENTION CURVES (by Segment)

[Freemium Users]
Day 1: 100%
Day 7: 38%
Day 30: 20%
Month 2: 13%
Month 3: 10%
Trend: Sharp drop and stabilization at low level (typical freemium)

[SMB (2-50 employees)]
Day 1: 100%
Day 7: 55%
Day 30: 41%
Month 2: 37%
Month 3: 34%
Trend: Healthier retention; critical cohort showing promise

[Enterprise (50+ employees)]
Day 1: 100%
Day 7: 72%
Day 30: 63%
Month 2: 59%
Month 3: 56%
Trend: Strongest retention; network effects and switching costs help

[Power Users (>20 edits in week 1)]
Day 1: 100%
Day 7: 88%
Day 30: 82%
Month 2: 79%
Month 3: 76%
Trend: Exceptional retention; high engagement is most predictive

---

ACTIVATION METRIC ANALYSIS

Primary Activation Metric: Shared Document Creation
Definition: User creates a document AND shares it with at least one team member within first 14 days
Correlation with 60-day retention: 78% (users who hit metric are 78% more likely to be active at day 60 vs. 18% for users who don't)

Testing Methodology:
- Cohorts analyzed: Jan, Feb, Mar 2026
- Sample size: 8,456 users
- Date range: Jan 1 - Mar 24
- Segmentation: By plan type, company size, onboarding path

Results by Segment:
- Freemium: 31% hit metric → 58% 60-day retention
- SMB: 67% hit metric → 82% 60-day retention
- Enterprise: 88% hit metric → 91% 60-day retention

Secondary Activation Metrics (Ranked by Correlation):
1. First comment/feedback on teammate's doc: 71% correlation
2. Used @mentions to tag teammate: 64% correlation
3. Completed first 3-step onboarding tutorial: 52% correlation
4. Attended live collaboration session: 48% correlation

---

ENGAGEMENT SEGMENTATION

[Healthy Segment] - Active & Growing
- Definition: Active in last 7 days, created or edited doc 3+ times this week
- Size: 34% of active users (1,247 users)
- Retention (month 1): 87%
- Actions: Monitor and celebrate; identify expansion opportunities; suggest premium features

[At-Risk Segment] - Declining Engagement
- Definition: Active 8-14 days ago, edits declining 30%+ week-over-week
- Size: 22% of active users (806 users)
- Churn probability (next 30 days): 62%
- Actions: Targeted re-engagement email; remove friction in sharing; personalized feature training

[Soft Churn] - Silent Users
- Definition: Inactive 15-29 days (last logged in 2-4 weeks ago)
- Size: 31% of acquired users (2,267 users)
- Reactivation rate (on outreach): 19%
- Actions: Win-back campaign; ask for specific feedback; offer 1-on-1 onboarding help

[Hard Churn] - Gone
- Definition: Inactive 30+ days
- Size: 13% of acquired users (950 users)
- Expected reactivation rate: 4%
- Actions: Long-term win-back email; potential write-off if >90 days

---

DEAD ZONE IDENTIFICATION

Dead Zone 1: "The Blank Page" (End of Onboarding)
- When it occurs: Day 2-3 of signup
- Drop-off rate: 71% of users complete onboarding, 29% abandon before first doc creation
- Root causes (from user research):
  * Don't understand why they need to create a doc (value prop unclear in tutorial)
  * Overwhelmed by editor options (font, colors, templates, collaboration options all visible at once)
  * No clear next action after template selection
  * Expect to invite team immediately but team not yet in system
- Impact on retention: Users who fail here have 12% 60-day retention vs. 65% for those who create first doc

Dead Zone 2: "First Share Friction" (Day 5-7)
- When it occurs: Attempting to share first document with team member
- Drop-off rate: 54% of users attempt sharing, 34% complete first share; 20% abandon
- Root causes:
  * Permission model is confusing (view vs. edit vs. comment)
  * Team member not in system yet (requires sending email invite first)
  * Share dialog requires multiple clicks to set permissions
  * Users expect it to work like "copy link" but system requires email address
- Impact on retention: Users who don't share docs by day 7 have 8% 60-day retention vs. 74% for sharers

Dead Zone 3: "Comment Confusion" (Day 8-14)
- When it occurs: Team member joins via share link and is expected to leave feedback
- Drop-off rate: 78% of invited team members view doc, 24% leave first comment; 54% abandon
- Root causes:
  * Invited users don't know they can comment (UI doesn't highlight comment field)
  * Comment button looks like "flag" icon, not edit
  * Inline comments are threaded but no visual indication of threads
  * No notification when original user responds to their comment
- Impact on retention: Teams with active commenting have 89% 30-day retention vs. 34% for teams that don't

---

ACTIVATION METRIC ACHIEVEMENT FUNNEL

Defined Activation Metric: Shared Document Creation (create + share with teammate in first 14 days)
Week 1 Achievement Rate: 48%
Of those who achieve: 76% 60-day retention
Of those who don't achieve: 14% 60-day retention
Lift: 62% difference (users who hit metric are 5.4x more likely to stick)

Barrier to Activation:
- 29% don't create first doc (blank page problem; see dead zone 1)
- 16% create doc but don't share (sharing friction; see dead zone 2)
- 8% share but team member doesn't engage (comment confusion; see dead zone 3)
- 5% are awaiting team member joins; give up waiting

Recommended Friction Reducers:
1. Add "Create a shared doc" pre-built template with your team member's name → guides first-time users through both creation and sharing in one flow
2. Simplify permission model: default to "view & comment" for most users, hide advanced permissions behind "advanced" toggle
3. Replace "Share" button with "Invite [Name] to Collaborate" copy that explains action clearly
4. Add comment notification system: when someone comments, original user gets Slack/email notification with quick reply button
5. Guide users to sharing via in-app nudge at day 4-5 (if they haven't shared yet, highlight share button and suggest team member name)

---

RE-ENGAGEMENT CAMPAIGN PLAYBOOK

Target Segment: At-Risk Users (active 8-14 days ago, engagement declining 30%+)
Current Size: 806 users
Expected Response Rate: 35%
Expected Reactivation Cost: $2 per user (email cost amortized)

Campaign Variant 1 - "Here's What Your Team Added"
- Subject: "[TeamName] added 8 new docs since you last logged in 👀"
- Message: "Hey [Name]! [Teammate] just created a project plan, and [Teammate2] shared some feedback on your draft. Catch up on what you missed:"
  * [List 2-3 most active teammates + their recent actions]
  * [Link to one high-activity doc relevant to this user's past edits]
- CTA: "See what changed" (direct to feed)
- Test metric: Open %, click %, return rate
- Expected performance: 38% open, 22% click, 18% reactivate

Campaign Variant 2 - "You're Missing a Feature"
- Subject: "We added @mentions (and your team is using it)"
- Message: "You can now @mention teammates directly in comments—saves you a step. [Teammate] just mentioned you on [DocName]. Want to see what they said?"
  * [Screenshot of @mention feature]
  * [Link to doc with mention]
- CTA: "See the mention"
- Test metric: Open %, click %, return rate
- Expected performance: 44% open, 28% click, 22% reactivate

Campaign Variant 3 - "Can We Help?"
- Subject: "Is DocFlow working for your team?"
- Message: "We noticed you haven't logged in for [X days]. Is everything okay? If something's unclear or we're missing a feature, we'd love to know. Reply here or book a quick call."
  * [Link to 1-question survey: "What's the main thing blocking your team from using DocFlow?"]
  * [Calendar link for 15-min call with founder]
- CTA: "Tell us what's wrong" (link to survey)
- Test metric: Open %, response rate, reactivation rate
- Expected performance: 32% open, 12% respond, 8% reactivate (but high insight value)

Campaign Variant 4 - "Your Trial Expires Soon"
- Subject: "Last chance: DocFlow premium trial expires [Date]"
- Message: "You've created 12 docs and shared with 6 teammates—that's great! If you want to keep [advanced feature], upgrade to Team plan before [Date]. No credit card needed yet; we'll ask on day 29."
  * [Pricing table]
  * [Link to upgrade]
- CTA: "Start premium trial"
- Test metric: Open %, click %, upgrade rate
- Expected performance: 41% open, 19% click, 6% upgrade (only for users with active trial)

---

HABIT-FORMATION INTERVENTION STRATEGY

Target Behavior: Weekly use (log in and make edits at least 1x per week)
Current Habit Baseline: 34% of users have weekly habit formed
30-day target: 48% of users in weekly habit (focus on at-risk segment)

Intervention 1 - Context-Triggered Push Notification (Mobile App)
- When: Monday 9 AM (weekday morning, when users are most receptive)
- Message: "[Teammate] added feedback to your draft. 2 minutes to read." (specific trigger, not generic)
- Frequency: 1x per week (Monday mornings only; don't bombard)
- Opt-out: One-tap unsubscribe in notification
- Expected impact: 12% increase in weekly return rate (from 34% → 46%)

Intervention 2 - Email Digest (Weekly Summary)
- When: Thursday 10 AM (mid-week reminder before weekend drop-off)
- Content:
  * "Here's what happened since [LastLogin]"
  * [2-3 teammate actions: "Jane commented on Budget.doc", "Tim shared Q2 Plan"]
  * "Your most active doc this week: [Name] (9 edits, 4 comments)"
  * [2-minute read estimate]
- Frequency: 1x/week
- Opt-out: One-click unsubscribe + preference center
- Expected impact: 8% increase in weekly return rate

Intervention 3 - In-App Nudge (Contextual, on Login)
- Trigger: User logs in but hasn't visited feed in 2+ days; show gentle nudge in top banner
- Message: "3 new updates from your team. [Peek] or [Dismiss]"
- Frequency: 1x per session (doesn't repeat same day)
- Opt-out: Dismiss button (remembers preference, doesn't show this nudge again this user for 1 week)
- Expected impact: 4% increase in feed engagement (users are already logging in; this drives activity)

Notification Hygiene Rules:
- Never show >1 notification per session (check push + email + in-app combined)
- Always include one-tap unsubscribe for emails, one-tap dismiss for push/in-app
- Measure unsubscribe rate weekly; if exceeds 3%, pause that intervention and review messaging
- A/B test all copy; run 1-week tests; retire variants with <15% conversion
- Review weekly; measure impact on DAU/MAU and churn rate; adjust frequency if unsubscribe spikes

---

QUARTERLY RETENTION TARGETS & ROADMAP

Month 1 (April) Priorities:
1. Reduce "blank page" dead zone friction by simplifying onboarding → target 60% completion (vs. 71% today) by adding pre-built templates
   - Owners: Product (template design), Design (UX flow)
   - Success metric: First doc creation rate improves from 71% → 85%
2. Launch re-engagement campaign for 806 at-risk users → expect 25% to reactivate (201 users)
   - Owners: Growth, Marketing
   - Success metric: 35% campaign response, 18% reactivation rate
3. Implement daily/weekly engagement nudges for active segment → prevent decline
   - Owners: Product, Growth
   - Success metric: At-risk segment size shrinks to <15% of active (vs. 22% today)

Month 2 (May) Priorities:
1. Fix "comment confusion" dead zone by adding inline comment notifications and clearer UI → target 40% of invited users leaving first comment (vs. 24% today)
   - Owners: Product, Design
   - Success metric: Comment engagement increases 50%; team retention improves
2. Expand win-back campaign to 2,267 soft-churned users → expect 19% to reactivate (431 users)
   - Owners: Growth
   - Success metric: Reactivate 300+ users at <$3 cost per user
3. Measure re-engagement campaign results from month 1; iterate top-performing variants
   - Owners: Growth
   - Success metric: Identify winning variant; scale to remaining at-risk segment

Month 3 (June) Priorities:
1. Analyze Q2 retention results; identify new dead zones or emerging patterns
   - Owners: Data, Product
   - Success metric: Pinpoint next friction point; plan month-4 experiment
2. Build loyalty program for high-engagement users (power users who create 10+ docs/month)
   - Owners: Product, Growth
   - Success metric: Create tier system; measure upgrade rate among power users
3. Re-test all retention hypotheses with new cohorts; iterate

Key Metrics Dashboard:
- [Link to Looker dashboard: "DocFlow Retention & Engagement"]
- Tracks: DAU/MAU, week-1 retention by cohort, activation metric achievement, segment transition rates, dead zone completion %, campaign performance

Review Cadence:
- Weekly: DAU/MAU ratio, week-1 retention for newest cohorts, re-engagement campaign open/click/return rates, unsubscribe rates
- Monthly: Full retention curves by segment, activation metric achievement rate, segment transition rates (healthy → at-risk → churn), dead zone completion %, experiment results
- Quarterly: Full churn analysis, new hypothesis testing results, updated competitive benchmarks
```

## Edge Cases

- **Cohort size too small**: If you're analyzing 50 users per cohort, noise dominates signal. Pool cohorts across time or segments until you have 300+ per cohort for statistical validity.

- **Seasonal churn**: Education products see summer churn; B2B sees December/August. Compare month-to-month retention, not cohort-to-cohort, to isolate product changes from seasonal effects.

- **Activation metric varies by persona**: Power users might have different week-1 activation than casual users. Build separate funnels by persona rather than one aggregate curve.

- **Re-engagement list fatigue**: If you spam at-risk users with too many campaigns, unsubscribe rate spikes. Test frequency in small groups first; cap campaigns at 1 per week per user.

- **Win-back cost exceeds LTV**: If cost to reactivate a churned user exceeds their expected lifetime value, stop win-back campaigns and focus on preventing churn upfront instead.

- **Retention improves but DAU falls**: If you're losing more new users than you're retaining existing ones, you're optimizing the wrong metric. Balance retention improvements with activation funnel fixes.
