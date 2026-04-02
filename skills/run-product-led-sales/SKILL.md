---
name: "Run Product-Led Sales"
description: "Execute a product-led sales motion to convert engaged users into customers. When teams are trying to scale customer acquisition without traditional cold outreach. Trigger on: PQL, product-qualified lead, sales handoff, conversion, upgrade, activation milestone, demo request."
dependencies: []
connectors:
  - name: "Salesforce"
    reason: "Tracks deal pipeline, sales rep activity, and customer lifecycle during handoffs"
  - name: "HubSpot"
    reason: "Captures user behavior milestones and syncs qualified leads to sales"
  - name: "Slack"
    reason: "Real-time alerts when leads meet activation criteria; sales team coordination"
  - name: "Google Drive"
    reason: "Stores playbooks, call scripts, and sales enablement resources"
author: "Harmony"
version: "1.0.0"
icon: "sparkles"
cover: ""
screenshots: []
category: "Product"
---

## Purpose

Product-led sales merges the efficiency of product self-service with the power of consultative sales. Instead of chasing cold prospects, your product generates qualified leads by tracking behavior — users who've hit activation milestones, invited team members, or exceeded free tier limits. Sales reaches out at precisely the right moment: when intent is highest and the customer already understands core value. This skill bridges the gap between product activation and revenue, eliminating wasted outreach and turning engaged users into loyal customers.

## When to Use This

- Your product has a free tier or trial generating thousands of signups monthly
- You're seeing natural activation patterns — certain user actions predict conversion
- Sales and product teams operate in silos; handoffs feel jarring or poorly timed
- You want to reduce customer acquisition cost while improving close rates
- You're losing customers to competitor solutions before sales can engage
- Your sales team struggles to connect with users on technical implementation details
- You're trying to scale without hiring a massive SDR (sales development rep) team

## Instructions

1. **Define Product-Qualified Leads (PQLs) from Behavioral Data**
   - Analyze your product analytics to identify activation milestones (users who invited 2+ team members, created 5+ assets, used advanced features)
   - Map these behaviors to sales-ready signals in your tracking system
   - Set conservative thresholds initially — quality over quantity
   - Document scoring logic and share with sales leadership for buy-in
   - Create a simple dashboard showing daily PQL count and sales response time

2. **Establish a Natural Sales Handoff Trigger**
   - Build automation that alerts sales when a user hits PQL criteria (within your sales tool or Slack)
   - Create an in-app prompt that lets PQLs request a demo or sales conversation directly
   - Include context in every handoff: user company size, feature adoption, use case inferred from behavior
   - Set a clear SLA for sales response (target: within 24 hours)
   - Avoid "spammy" outreach — one touchpoint at activation, then wait for engagement signal

3. **Equip Sales with Product Context and Talking Points**
   - Provide sales reps with a briefing on each PQL: their activation journey, which features they've used, apparent business problem
   - Create role-based playbooks (e.g., technical buyer, procurement, executive sponsor) so reps know conversation frame
   - Train sales to lead with helping, not selling — "I see you've built 50+ templates; let me show you how other teams scale this"
   - Build a shared knowledge base of common objections and feature questions
   - Enable sales to pull live product data during calls (usage graphs, ROI estimates)

4. **Design a Clear Upgrade Path and Pricing Trigger**
   - Set a ceiling in self-serve features (e.g., 5 team members, 1000 records) that creates natural friction
   - Price self-serve tiers clearly so users know what unlocks at upgrade (no mystery)
   - Segment PQLs by upgrade probability: high-intent (requested demo) vs. curious (exploring limits)
   - Create tiered engagement for each segment (high-intent gets direct call, curious gets educational webinar)
   - Use pricing psychology: anchor the annual price, show ROI relative to their current spend

5. **Track and Optimize Handoff Quality**
   - Monitor conversion rate by PQL source and segment (e.g., "users who invited 3 team members convert at 35%")
   - Measure days-to-response, average sales cycle length, and win rate for PQL-sourced deals
   - Run monthly retrospectives with sales and product: which behavioral signals predict close? Which trigger too-early outreach?
   - Identify failed handoffs — PQLs who went cold — and adjust timing or messaging
   - Create feedback loop: sales notes specific objections, product tests messaging or feature gaps

6. **Maintain Product-Sales Alignment**
   - Hold bi-weekly sync between product and sales leadership to review PQL trends
   - Share activation data with product — if users plateau at a feature, product knows to invest
   - Involve sales in feature prioritization: which features correlate with conversions?
   - Celebrate wins publicly: feature launched that increased PQL volume, sales closed biggest deal from product motion
   - Create shared KPI dashboard visible to both teams (PQL volume, conversion rate, average deal size)

7. **Build Momentum Through Case Studies and Social Proof**
   - Extract stories from successful PQL-to-customer conversions and document them
   - Create short case studies (2-3 min video or written) showing how companies scaled using your platform
   - Use these in targeted outreach to similar PQL cohorts (industry-specific, company-size-specific)
   - Share customer wins in your in-app messaging to build confidence in free-tier users considering upgrade
   - Train sales to reference other customers' outcomes, not features

## Output Format

```
## Product-Led Sales Campaign Report

**Reporting Period:** [Date Range]

### PQL Generation Metrics
- Total Free Users Active: [X]
- PQLs Generated: [X] (trend: ↑/↓)
- PQL Activation Rate: [X]% (users hitting milestone)
- Days-to-PQL Average: [X] days from signup

### Sales Handoff Performance
- Handoffs Delivered to Sales: [X]
- Sales Response Rate (within 24h): [X]%
- Handoff-to-Meeting Rate: [X]%
- Average Sales Cycle (PQL-to-Close): [X] days

### Conversion Metrics by Segment
| Segment | PQL Count | Meetings | Conversions | Close Rate |
|---------|-----------|----------|-------------|-----------|
| High-Intent (Requested Demo) | X | X | X | X% |
| Feature Explorers | X | X | X | X% |
| Multi-Seat Users | X | X | X | X% |
| Free-to-Paid Repeat Users | X | X | X | X% |

### Most Effective PQL Signals
1. **[Signal A]** — [X]% convert (e.g., "invited 3+ team members")
2. **[Signal B]** — [X]% convert (e.g., "created custom workflow")
3. **[Signal C]** — [X]% convert (e.g., "integrated third-party tool")

### Sales Feedback
- Top Objections Heard: [List 3 with frequency]
- Feature Gaps Identified: [Product backlog items mentioned]
- Messaging That Works: [Quote from successful demo]

### Churn Risk Signals (PQLs Not Converting)
- Likely Reasons: [e.g., pricing misalignment, competitor overture, feature not matured]
- Intervention Tests Running: [e.g., special offer, feature demo, competitive response]

### Next Month Focus
- Optimize [signal] to improve conversion
- Sales training topic: [e.g., handling "we need board approval" objection]
- Product experiment: [e.g., raise free tier limit to attract larger companies]

### Revenue Impact (if available)
- PQL-Sourced ARR (this month): [X]
- PQL-Sourced ARR (lifetime): [X]
- PQL Close Rate vs. Traditional Sales: [X]% vs [Y]%
- Projected PQL-Sourced Revenue (12mo): [X]
```

## Implementation Considerations

Before launching your PLS motion, assess these key factors:

- **Free-to-Paid Economics:** Calculate the cost of acquisition via free tier versus traditional sales. If free users generate $1,000+ LTV and convert at 30%+, the math works. If they generate $200 LTV and convert at 5%, you may need a different motion.

- **Product Stickiness:** PQLs work best when the product has already demonstrated clear value. Users who've spent time in the product understand what they'd get at premium tiers. If activation is surface-level, PQLs won't convert.

- **Sales Team Readiness:** Traditional sales teams trained to overcome objections may struggle with PQL sales, which require consultative selling. Training and mindset shift matter. Some reps thrive in this environment; others resist.

- **Data Infrastructure:** You need clean product usage data (who did what, when?) flowing into your sales tool. If your product doesn't track user behavior or can't export it to your CRM, PLS won't work. Invest in instrumentation first.

- **Support Load:** As PQL volume grows, your support team may field more onboarding questions from users considering upgrade. Plan for this. Some companies solve it by routing PQL support to dedicated success team.

- **Legal and Compliance:** In regulated industries (healthcare, finance), behavioral tracking and automated outreach must comply with privacy rules. Document your data practices and get legal review before launching.

## Example

**Company:** DataFlow Analytics (data visualization platform)

**Scenario:** DataFlow offers a free tier for up to 3 team members and 500 data rows. Users who add 5+ team members or exceed 2,000 rows see a "Collaborate Better" upgrade prompt. Over three months, the team applied product-led sales.

### Month 1: Baseline

DataFlow had 4,200 free-tier users but didn't systematically track activation. They identified three PQL signals:
- Users who invited 4+ teammates (previous month: 85 users)
- Users who hit data-row limits and contacted support (28 users)
- Users who enabled team admin controls (23 users)

Sales reached out to all 136 potential PQLs at once using the same cold template. Response rate: 12%. Meeting rate: 4%. Close rate: 18%.

### Month 2: Apply Product-Led Sales

Product and sales jointly defined PQLs: "At least 4 team members invited AND has used the report-sharing feature in past 7 days." This refined the monthly PQL count to 34 high-confidence leads.

Sales responded within 12 hours with personalized notes:
- "Hi Priya — I noticed your team at BuildCo has created 8 shared reports. Our enterprise plan includes audit logs and advanced permissions. Can I show you what other teams in construction are building?"

New metrics: Response rate 62%, meeting rate 44%, close rate 41%. Average deal size: $4,200/year (vs. $1,900 for traditional sales sourced deals).

### Month 3: Optimize for Velocity

Product added in-app prompt: "Ready to give your team advanced access controls?" Clicking led to a 2-minute demo video, then a sales calendar link. This created a "qualified request" signal even stronger than inferred activation.

DataFlow also created a usage brief for each sales conversation:
- Company: BuildCo
- Team size (free): 7 people
- Most-used feature: Report Sharing
- Inferred use case: "Sharing analytics dashboards with non-technical stakeholders"
- Similar customer success story: "Acme Corp scaled from 4 to 22 users and saved 15 hours/week on manual reporting"

Results: 42 PQLs, 28 meetings requested, 18 conversions. Close rate: 43%. Revenue from product-led sales that month: $76,000. Customer acquisition cost from PQL: $280 (vs. $600 for traditional outreach).

### Key Lessons Learned

- **Specificity beats volume:** Refining PQL criteria from 136 to 34 candidates tripled close rate
- **Speed matters:** 12-hour response time doubled meeting acceptance
- **Context sells:** Showing customers how they compare to similar companies (social proof) closed deals faster
- **Free users are assets:** DataFlow's free tier was their best sales channel, not a loss leader

---

## Edge Cases

1. **Low Free-Tier Conversion Risk:** If fewer than 5% of free users can hit your PQL criteria, the motion may not work. Consider: are activation thresholds too high? Is the problem market-fit related? Test lowering the threshold or revisiting your free tier design.

2. **Sales Team Fatigue with Handoffs:** If sales complains of too many low-quality PQLs, narrow criteria, not widen. A sales rep ignoring 50 leads per month is worse than closing 2. Quality > quantity always.

3. **Competitive Pressure During Free Trial:** If competitors are aggressively courting free users with special offers, activate sales faster. Consider shortening the time window between PQL detection and outreach to 6 hours rather than 24.

4. **Expansion Within Free Tier:** Some high-value companies exploit free limits intentionally (multiple accounts, workarounds). This is a feature, not a bug — treat them as ultra-premium PQLs and route to top sales performers.

5. **Privacy and Data Sensitivity:** In regulated industries (healthcare, finance), some customers resent in-app prompts or behavioral tracking. Be transparent about why you're reaching out ("We noticed strong adoption...") and offer opt-out for behavior-based outreach.

6. **Free-to-Paid Friction at Scale:** As you add more PQLs, the sales team may become a bottleneck. If you reach 100+ PQLs monthly, invest in scalable handoff (automated onboarding, webinar-first model) before losing customers to frustration.
