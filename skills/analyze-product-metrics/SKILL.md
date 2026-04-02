---
name: "Analyze Product Metrics"
description: "Define, track, and interpret product KPIs across lifecycle stages. Select the right metric framework (AARRR, North Star, HEART), design dashboard layers, run cohort analysis, and connect metric movements to product decisions discussed in team meetings. Trigger on: product metrics, KPI definition, retention analysis, cohort analysis, dashboard design, metric framework, AARRR, North Star metric, product analytics, feature adoption."
dependencies: []
author: "Harmony"
version: "1.0.0"
icon: "sparkles"
cover: ""
screenshots: []
category: "Product"
---

## Purpose

Help product teams pick the right metrics, track them properly, and interpret movements across their product lifecycle. When Harmony conversation data is available, surface what the team has been saying about metrics in sprint reviews, product discussions, and stakeholder updates—then connect those conversations to what the data shows. This skill bridges the gap between metric frameworks and the real product decisions your team is making.

## When to Use This Skill

- **New product launch** — Define initial KPIs before launch; decide between AARRR (if monetization is early) or North Star (if traction is primary)
- **Quarterly metric review** — Rebaseline KPIs, reset targets, and examine what changed quarter-over-quarter
- **Retention cliff** — Team notices drop-off; skill helps diagnose whether it's onboarding friction, feature adoption gap, or churn in a specific cohort
- **Board prep** — Build a narrative around metric movements grounded in product changes (not just numbers in a spreadsheet)
- **New PM onboarding** — Existing dashboards exist but new PM needs to understand KPI selection rationale and what each metric tells us
- **Feature launch measurement** — Plan which secondary metrics to track for a new feature; design cohort split before launch

## Instructions

### Step 1: Select Your Metric Framework Based on Product Stage

Choose one primary framework based where your product sits:

- **AARRR** (Acquisition, Activation, Retention, Revenue, Referral): Best for products with clear monetization (subscriptions, ads, marketplace). Funnel-based; highlights drop-off stages.
- **North Star Metric**: Best for growth-stage products focused on traction, engagement, or network effects (used when revenue is secondary or deferred). Single North Star + supporting metrics.
- **HEART** (Happiness, Engagement, Adoption, Retention, Task Success): Best for feature-heavy products and internal tools. Dimensions focus on user experience quality, not just funnel.

Choose based on product stage: Pre-PMF → North Star (one metric of traction). Growth → AARRR or North Star (choose if revenue is live). Mature → AARRR + HEART (monetization + experience).

### Step 2: Define Primary, Guardrail, and Secondary Metrics

For your chosen framework, build a three-tier metric set:

- **Primary (1-2 metrics)**: The metric(s) that move with product success. For AARRR: likely Activation or Revenue. For North Star: the single metric. For HEART: Adoption or Task Success.
- **Guardrail (2-3 metrics)**: Metrics that must not degrade when primary moves. Examples: retention (don't sacrifice long-term for short-term acquisition), NPS (don't degrade experience chasing scale), unit economics (don't burn cash acquiring users).
- **Secondary (4-8 metrics)**: Diagnostic metrics that help explain primary. For Activation: time-to-value, feature completion rate. For Retention: by cohort, by segment.

### Step 3: Apply Stage-Specific KPI Guidance

**Pre-PMF / Early Stage:**
- Primary: North Star proxy (MAU, DAU, session count, invite acceptance)
- Guardrail: Churn rate (watch for rising churn = product issue)
- Secondary: Activation by onboarding variant, time-to-core-action

**Growth Stage:**
- Primary: Usually AARRR; focus on Activation (quick learning curve) and early Retention (week 1–4)
- Guardrail: CAC payback period (months to recover customer acquisition cost), Magic Moment hit rate
- Secondary: Cohort retention, feature adoption, segment-specific activation rates

**Mature Stage:**
- Primary: Usually Revenue-focused (AARRR) or North Star if engagement is key
- Guardrail: Unit economics (LTV:CAC ratio, gross margin), NPS or satisfaction score
- Secondary: Retention by segment, upsell velocity, feature churn (features users stop using)

### Step 4: Design Dashboard Layers

Build your dashboard as three layers, each for a different audience:

**Executive Layer** (board, CFO, CEO):
- 3–5 metrics: Revenue, Growth Rate, Churn, and North Star (if applicable). Monthly view. Red/yellow/green status.

**Product Health Layer** (PM team, product manager):
- 10–15 metrics organized by framework (Acquisition → Activation → Retention, etc.). Weekly cadence. Includes cohort overlays and trends.

**Feature/Diagnostic Layer** (individual PMs, designers, engineers):
- 20+ metrics; deep-dive dashboards per feature, segment, or user flow. Daily/ad-hoc. Includes event-level data, funnels, session recordings reference points.

### Step 5: Run Cohort and Retention Analysis

Break users into cohorts (by signup week, feature flag variant, acquisition channel) and measure:

- **Retention curve**: % of cohort active at week 1, 2, 4, 8, 13, 26.
- **Compare curves**: Do newer cohorts retain better than older ones? (Yes = product is improving.)
- **Segment curves**: Do SMB users (small revenue users) have different retention than Enterprise? (Informs product prioritization.)

Build a simple table:

| Cohort | W1 | W4 | W13 | W26 | Stabilized % |
|--------|----|----|-----|-----|--------------|
| Jan 1–7 | 45% | 28% | 18% | 14% | 12% |
| Feb 1–7 | 48% | 32% | 22% | 18% | 16% |
| Mar 1–7 | 52% | 35% | 26% | 22% | 20% |

Trend: Feb cohort 5% higher retention at week 4 than Jan (new feature shipped Feb 10, appears to help). Mar cohort (post-onboarding redesign Mar 20) tracking 10% higher at week 1.

### Step 6: Interpret Retention Curves — Four Patterns and What They Mean

- **Sharp drop (steep cliff at week 1–2, then flat)**: Onboarding friction. Users either get to value fast or churn quickly. Action: Review time-to-core-action, feature discovery, guided tours.
- **Gradual decline (smooth downward slope, no stabilization)**: Lack of "stickiness" or habit loop. Users try, find value, but don't return regularly. Action: Increase engagement loops, deepen feature adoption, check for competing products.
- **Flattening at low % (40% drop week 1, then flat at 5%)**: Occasional-use product (tools, not habits). Common for B2B admin tools. Not a failure. Action: Focus on quality of use, NPS, and expand adjacent use cases.
- **Improving cohorts (curves shift up over time)**: Product improvements are working. Newer cohorts have higher activation or retention. Action: Double down on winning changes; measure what caused the shift.

### Step 7: Connect Metric Movements to Product Changes

For every metric change, document the product decision:

| Metric | Period | Change | Product Event | Likely Driver |
|--------|--------|--------|---------------|---------------|
| Activation (time-to-value) | Jan–Feb | 23% → 19% days | Shipped smart onboarding flow (Feb 3) | Reduced friction |
| W4 Retention | Feb–Mar | 32% → 35% | New home dashboard shipped (Mar 15) | Improved engagement loop |
| Churn Rate | Mar | 2.1% → 2.3% | Increased plan prices (Mar 1) | Natural churn from price-sensitive segment |

### Step 8: Build Narrative for Stakeholders

Write a short narrative (2–3 paragraphs) that connects metrics to strategy:

1. **Current state**: "We're at 1,200 DAU, up 12% MoM. Activation (time-to-value) improved from 4.2 days to 3.1 days month-over-month."
2. **What changed**: "We shipped the smart-onboarding redesign (Mar 15) and activated feature flags for progressive disclosure. Cohorts since then show 35% W4 retention vs. 32% in prior month."
3. **So what**: "Faster time-to-value is reducing early churn and extending the trial-to-paid conversion window. We expect 18% revenue lift next month if this trend continues."

This narrative becomes your talking point for board, all-hands, or sprint review. If team meetings have discussed these metrics in Harmony, reference what was said ("In last sprint review, team noted Activation felt slow; data now shows the redesign cut time-to-value by 26%").

## Output Format

Use this Markdown template to organize your analysis:

```
# Product Metrics Analysis

## Metric Framework Selection
- **Product Stage**: [Pre-PMF / Growth / Mature]
- **Framework Chosen**: [AARRR / North Star / HEART]
- **Rationale**: [1–2 sentences on why this framework for this stage]

## KPI Definition
| Tier | Metric | Target | Owner |
|------|--------|--------|-------|
| Primary | [metric name] | [target] | [team] |
| Guardrail | [metric name] | [target] | [team] |
| Secondary | [metric name] | [target] | [team] |

## Dashboard Specification
**Executive Layer:**
- [3–5 metrics], monthly, [tool: Amplitude / Mixpanel / Looker]

**Product Health Layer:**
- [10–15 metrics], weekly, organized by framework

**Feature Layer:**
- [20+ metrics], daily/ad-hoc, per feature or segment

## Cohort & Retention Analysis
[Retention table by cohort, with curve patterns noted]

## Interpretation & Recommendations
- **Current health**: [1 sentence on overall product health]
- **Key insights**: [2–3 bullet points on what data shows]
- **Actions**: [2–3 prioritized actions tied to metric movements]
- **Risk**: [1 guardrail metric to watch]
```

## Example: Relay (B2B Project Coordination SaaS)

**Company**: Relay — SaaS for distributed teams to coordinate projects. ~6 months post-launch, 3,200 DAU, $45K MRR, growth stage.

**Metric Framework Selection:**
- Stage: Growth (product-market fit signals present; revenue not yet dominant; acquisition still ramping)
- Framework: AARRR (revenue launched Q3; clear monetization path) + North Star (time-spent is still our engagement thesis)

**KPI Definition:**
| Tier | Metric | Current | Target | Owner |
|------|--------|---------|--------|-------|
| Primary | Weekly Active Users (WAU) | 1,850 | 2,200 | Product |
| Primary | MRR | $45K | $55K | Growth |
| Guardrail | 4-Week Retention | 34% | ≥32% | Product |
| Guardrail | CAC Payback (months) | 8.2 | ≤7 | Growth |
| Secondary | Time-to-value (days) | 3.7 | ≤3 | Onboarding |
| Secondary | Feature adoption (%) | 52% | ≥60% | Product |
| Secondary | Churn rate (MoM) | 2.1% | ≤1.8% | Success |

**Dashboard Specification:**

**Executive Layer (Monthly):**
- WAU: 1,850 (+11% MoM) 🟢
- MRR: $45K (+15% MoM) 🟢
- 4-Week Retention: 34% (-1% from Feb) 🟡
- CAC Payback: 8.2 months (-0.4 mo. from Feb) 🟢

**Product Health Layer (Weekly):**
- Acquisition: Signup funnel (landing page → trial → signup). Landing → signup conversion: 8.3% (target: 10%).
- Activation: Time-to-value by cohort (see below). Daily-active-after-signup rate: 42% (target: 50%).
- Retention: 4-week, 8-week, and 13-week retention by monthly cohort. Churn rate by plan (Pro: 1.8%, Team: 2.3%).
- Revenue: ARPU by segment, NRR (net revenue retention) by cohort vintage.
- Referral: Invitation acceptance rate (32%), share-to-join rate.

**Feature Layer (Daily/Ad-hoc):**
- Time-to-core-action (boards created) by onboarding variant (new UX vs. old).
- Feature adoption curves: Integrations adoption (Slack, Jira), timeline view adoption, template usage.
- Session depth: Avg. actions per session, feature churn (which features are users abandoning?).

**Cohort & Retention Analysis:**

| Cohort | W1 DAU % | W2 | W4 | W8 | W13 | W26 |
|--------|----------|----|----|----|----|-----|
| Jan 1–8 | 42% | 35% | 24% | 16% | 11% | 8% |
| Feb 1–8 | 44% | 37% | 28% | 19% | 14% | 11% |
| Mar 1–8 | 48% | 41% | 32% | 23% | 17% | — |

Trend: New cohorts (Feb+) show 4–8% higher retention week 1–4. Hypothesis: Onboarding redesign (Feb 15) is working.

**Time-to-Value by Cohort:**
- Jan cohort: 4.1 days average
- Feb cohort: 3.8 days average
- Mar cohort: 3.2 days average
Insight: Redesign reduced friction; newest cohort 23% faster to first board creation.

**Interpretation & Recommendations:**

- **Current health**: Product-market fit present (34% W4 retention is above SaaS baseline of 25%); growth accelerating (11% WAU growth, 15% MRR growth) but retention edge eroding.
- **Key insights**:
  - Onboarding redesign (Feb 15) is working: newer cohorts 4% higher at W4, time-to-value down 23%.
  - Feature adoption plateaued at 52% vs. 60% target; Slack integration adoption slow (18% of users). Hypothesis: integrations hard to discover.
  - Churn spike in Team plan (2.3%) vs. Pro (1.8%); correlates with users who did not adopt integrations. Hypothesis: Team plan users need more external-tool workflows.

- **Actions**:
  1. **Prioritize (Next 2 weeks)**: Ship redesigned Integrations hub with in-app discovery & quick-add. Hypothesis: +8% adoption, +0.2% retention.
  2. **Follow-up (Next 4 weeks)**: Segment churn analysis by Team vs. Pro; build plan-specific onboarding flows if churners are integration-light users.
  3. **Monitor**: Ensure new cohorts maintain W4 retention ≥32%; if Feb's uplift is real, Feb cohorts should stabilize above 14% by W26.

- **Risk**: CAC payback at 8.2 mo. — if churn doesn't improve (Team plan users leaving), payback will slip to 9+ months. Watch Team-plan churn closely; may need to reduce acquisition spend in that segment until product fit improves.

---

## Edge Cases

**Pre-revenue product** (no monetization yet):
- Use North Star (monthly active, session count, core-action completion) instead of AARRR.
- Focus guardrails on activation and retention; ignore revenue metrics until live.
- Plan AARRR metrics now (define monetization KPIs) to ship day-1 instrumentation when revenue launches.

**Marketplace with two-sided metrics** (supply and demand):
- Use dual North Stars: Buyer MAU and Seller MAU, not a single DAU.
- Build separate AARRR funnels for each side (buyer acquisition vs. seller onboarding).
- Guardrail: Balance (don't let either side fall below a healthy ratio; e.g., 3 buyers per seller).
- Secondary: Liquidity (% of listings that get engagement), match quality (time-to-match, repeat-transaction rate).

**No historical data** (brand-new product, just launched):
- Establish baseline metrics this week (Day 1 activation rate, churn rate after 1 week).
- Rebaselinne every 2 weeks for the first 6 weeks (sufficient data to see patterns).
- Use cohort analysis sparingly; sample size too small for statistical significance. Instead, qualitative feedback (Harmony conversations) can augment quantitative metrics.

**Vanity metrics the team loves** (e.g., "we hit 10K DAU!") **but don't predict success**:
- Acknowledge the vanity metric; reframe with an actionable one.
- Example: DAU is not predictive of revenue unless paired with retention or session quality. Suggest: "Track DAU + W4 retention cohort. If W4 retention is flat or declining, DAU growth is hollow."
- Root cause: Team may conflate activity with engagement. Help them see that activation (quality of signup) and retention (return rate) matter more than raw DAU.

---

## Role & Action

**Role**: Product & Design
**Action**: Analyze

## Connectors

- **HubSpot**: [Data provided] CRM-level churn, plan data, ARR per customer segment
- **Salesforce**: [Data provided] Sales pipeline and closed-won revenue; link to product adoption metrics for post-sale retention
- **Notion**: [Data provided] Product roadmap and feature-ship dates; use to time-stamp metric changes with product events
- **Slack**: [Data provided] Harmony integration: surface team meeting discussions of metrics ("In sprint review, we discussed Q2 cohort retention"; link to data)
