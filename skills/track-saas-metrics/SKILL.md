---
name: "Track SaaS Metrics"
description: "Create a single source of truth for SaaS metrics by extracting ARR, churn, NRR, CAC, LTV, and other KPIs discussed across leadership meetings, board calls, and investor updates. Flags definition inconsistencies and benchmarks against stage-appropriate targets. Trigger on: SaaS metrics, MRR, ARR, churn rate, net revenue retention, NRR, CAC, LTV, Rule of 40, magic number, SaaS benchmarks, unit economics, quick ratio, payback period."
dependencies: []
author: "Harmony"
version: "1.0.0"
icon: "sparkles"
cover: ""
screenshots: []
category: "Product"
---

## Purpose

SaaS metrics get quoted differently by different people in different meetings. The CEO says "churn is 3%" in a board meeting; the CS lead says "we lost 8 accounts" in a team sync; finance tracks logo churn at 5% and revenue churn at 2.1%. This skill mines metric references across Harmony transcripts, reconciles definitions, builds a canonical metrics dashboard, and benchmarks against stage-appropriate targets so everyone is looking at the same numbers. One source of truth prevents misalignment in investor conversations, fundraising strategy, and operational decision-making.

## When to Use

- **Monthly/quarterly metrics review**: Refresh the canonical dashboard with latest data and flag any definition shifts
- **Board meeting prep**: Build investor-ready metric narratives backed by reconciled definitions
- **Investor pitch preparation**: Ensure metrics story is clean, consistent, and benchmarked against peers
- **Series A/B/C fundraising**: VCs will spot inconsistencies; this skill catches them first and tells you how to tell your story credibly
- **Post-pivot metric reset**: Reset canonical definitions after a business model change (e.g., shifting from enterprise to mid-market, or adding usage-based tier)
- **New CFO or RevOps hire onboarding**: Hand them a reconciled, version-controlled metrics foundation to build on

## Instructions

1. **Mine meeting transcripts for metric mentions** — Extract every reference to a SaaS metric from Harmony transcripts (board calls, investor updates, team standups, QBRs). Capture: the metric name, quoted value, timeframe (current, trailing 12m, quarterly), the person who said it, and the meeting date. Examples: "ARR hit $2.8M," "we're at 4% churn," "NRR is solid at 110%," "CAC payback is 14 months."

2. **Reconcile definitions** — Flag where the same metric is defined differently by different people or teams. Example: CEO quotes "churn is 3%" (revenue churn, annual); CS lead says "we lost 8 accounts last month" (logo churn, monthly); finance reports "2.1% revenue churn" (net revenue churn, monthly, after expansion). Note all variants and the source.

3. **Establish canonical definitions for each metric** — Create a reference table with one official definition per metric. Be explicit: "ARR" = annual run rate of all active subscription contracts as of month-end, includes multi-year contracts annualized, excludes one-time services. "Gross churn" = revenue lost from customers who churned (excluding contraction). "Net churn" = gross churn minus expansion revenue. This prevents future ambiguity.

4. **Build the metrics dashboard** — Calculate and display: ARR/MRR, growth rate (% YoY or QoQ), gross churn rate, net churn rate, NRR (net revenue retention, %). CAC (customer acquisition cost), LTV (customer lifetime value), LTV:CAC ratio, payback period (months to recover CAC), gross margin (%), burn rate (monthly), runway (months at current burn). Show both current and previous quarter/year for trend.

5. **Benchmark each metric against stage-appropriate targets** — Compare your numbers to peer benchmarks. Seed stage: NRR >100% is good, CAC payback 12–18 months, Rule of 40 score 30+. Series A: NRR 110–115% expected, CAC payback 9–12 months, Rule of 40 score 40+. Series B+: NRR 120%+ expected, CAC payback 6–9 months, Rule of 40 score 50+. Flag any metrics significantly below stage targets.

6. **Calculate composite health scores** — Rule of 40 (growth rate % + profit margin %, or adjusted burn rate %). SaaS Quick Ratio (new + expansion MRR divided by churned + contraction MRR; >1.25 is healthy). Magic Number (new ARR divided by sales & marketing spend; >0.5 is good). These composite scores roll multiple inputs into a single health indicator.

7. **Identify trends** — For each metric, plot the last 3 quarters. Is it improving, stable, or declining? Pull context from meeting discussions: "We're improving churn because of the new onboarding program," or "CAC is rising because we're testing mid-market which has longer sales cycles." Trends + context tell the story.

8. **Surface the metric narrative** — What story do these numbers tell an investor? Where are you strong (e.g., "NRR 115% shows land-and-expand is working")? Where are you vulnerable (e.g., "CAC payback 16 months vs. peer average 9 months — need to tighten sales efficiency")? Draft a 1-page investor narrative that leads with strengths and acknowledges challenges with a plan.

## Output Format

- **Canonical Metric Definitions Table**: Metric name, official definition, unit (%, $, months), source of truth
- **SaaS Metrics Dashboard**: Current values, previous quarter, YoY change, trend (↑ ↓ →)
- **Benchmark Comparison**: Your metric vs. stage-appropriate target, variance (% above/below), flag (green/yellow/red)
- **Inconsistency Report**: Metric name, who said what, date, how it differs from canonical definition
- **Composite Health Scores**: Rule of 40, SaaS Quick Ratio, Magic Number with interpretation
- **Metric Narrative** (1-pager): Investor-ready summary of where you stand, strengths, challenges, and next steps

## Example

**Company: Beacon** (Series A, vertical SaaS for property management, raised $8M seed, now at Series A)

**Source transcripts:**
- Board call (Jan): CEO: "ARR grew to $2.8M, up 110% YoY. Churn is low, maybe 3%. NRR is strong."
- Finance sync (Jan): CFO: "Recognized ARR is $2.6M. Another $200K is under annual contracts signed but not yet invoiced. Revenue churn is 2.1% monthly, logo churn is 4.2%."
- CS standup (Jan): CS Lead: "We lost 8 accounts last month, so churn is 4% of our base."
- Sales call (Dec): "CAC is about $18K. LTV is rougly $54K based on 36-month horizon."

**Reconciliation:**
- ARR discrepancy: CEO quotes $2.8M (includes contracted-not-yet-invoiced). CFO quotes $2.6M (recognized revenue only). Canonical: $2.6M recognized + $200K contracted = $2.8M pipeline ARR. Use $2.6M for GAAP reporting, $2.8M for growth narrative.
- Churn discrepancy: Logo churn 4.2% (8 of ~190 accounts) per CS. Revenue churn 2.1% (accounts are small, most churn is small logos). Canonical: Logo churn 4.2%, revenue churn 2.1%, NRR = 100% - 2.1% + 6.5% (expansion) = 104.4%.

**Dashboard (current, as of Jan 31):**
| Metric | Current | Prev Q | YoY | Trend |
|--------|---------|--------|-----|-------|
| ARR (recognized) | $2.6M | $2.4M | 110% | ↑ |
| MRR | $216K | $200K | 108% | ↑ |
| Growth Rate (QoQ) | 6.7% | 8.1% | — | → |
| Gross Churn (revenue) | 2.1% | 2.3% | — | ↑ |
| Logo Churn | 4.2% | 4.8% | — | ↑ |
| NRR | 104.4% | 105.2% | — | ↓ |
| CAC | $18.0K | $16.5K | 109% | ↓ |
| LTV | $54.0K | $52.0K | 104% | ↑ |
| LTV:CAC | 3.0x | 3.15x | — | → |
| CAC Payback | 11.3 mo | 10.8 mo | — | ↓ |
| Gross Margin | 72% | 71% | — | ↑ |
| Burn Rate | $85K/mo | $92K/mo | — | ↑ |
| Runway | 23 mo | 21 mo | — | ↑ |

**Benchmark Comparison (Series A targets):**
| Metric | Your Value | Target | Variance | Status |
|--------|------------|--------|----------|--------|
| NRR | 104.4% | 110–120% | -6% | 🟡 Below |
| CAC Payback | 11.3 mo | 9–12 mo | +0.3 mo | 🟢 On target |
| Rule of 40 | 50 (6.7% growth + 43% adjusted burn margin) | 40+ | +10 | 🟢 Healthy |
| Magic Number | 0.68 | 0.5+ | +0.18 | 🟢 Good |
| Burn Rate | $85K/mo | <$90K (for runway) | Within | 🟢 Healthy |

**Inconsistency Report:**
| Metric | Who Said It | Date | Value | Canonical | Explanation |
|--------|-------------|------|-------|-----------|-------------|
| ARR | CEO | Jan board call | $2.8M | $2.6M (or $2.8M contracted) | CEO includes signed-not-invoiced; CFO uses GAAP |
| Churn | CEO | Jan board call | 3% | 2.1% (revenue) or 4.2% (logo) | CEO was rounding; varies by type |
| Churn | CS Lead | Jan standup | 4% (8 accounts) | 4.2% (8/190) | Logo churn, correct; CS was approximating |

**Composite Health Scores:**
- **Rule of 40**: Growth rate (6.7%) + adjusted margin (43%) = 49.7. Slightly above healthy threshold; shows a growth company managing burn well.
- **SaaS Quick Ratio**: (New MRR + expansion MRR) / (churned + contraction MRR) = ($28K + $14K) / $4.5K = 9.3x. Excellent — new growth outpacing churn by 9x.
- **Magic Number**: New ARR last quarter ($140K) / S&M spend ($200K) = 0.70. Strong (>0.5); shows sales & marketing efficiency.

**Metric Narrative (investor-ready 1-pager):**

*Beacon is a Series A SaaS company serving property managers. We've hit $2.6M ARR (recognized), growing 110% YoY. Here's what the metrics tell us:*

*Strengths:* NRR at 104% shows land-and-expand is working — we're retaining customers and expanding within existing accounts. Magic Number at 0.70 means we're generating $0.70 in new ARR for every $1 in sales & marketing spend, which is strong for our stage. CAC payback at 11.3 months is on target for Series A, and our LTV:CAC of 3x is healthy. Rule of 40 score of 50 shows we're balancing growth and efficiency well.

*Challenge:* NRR at 104% is slightly below Series A peer median of 110–120%. This is driven by churn in small-logo customers (4.2% logo churn on lower-value accounts). We're investing in improved onboarding and customer success to move NRR to 115%+ in the next 2–3 quarters.

*Path forward:* We're profitable on cash flow, with 23 months of runway. We'll focus on improving NRR (better onboarding, expansion within existing accounts), holding CAC payback steady, and reinvesting savings into product & market expansion.

---

## Edge Cases

1. **Pre-revenue company** — Metrics like ARR, churn, and NRR don't exist yet. Instead, track activation metrics (% of users returning weekly), engagement (feature adoption, session frequency), conversion (% free-to-paid), and unit economics estimates (projected CAC, estimated LTV). Set baseline benchmarks once you have paid users.

2. **Usage-based pricing** — MRR is variable (depends on customer usage each month). Canonical approach: track committed vs. metered revenue separately. Committed = predictable subscription base. Metered = variable usage above committed. Churn and NRR apply to committed base only. Report both to show true variability and predictability.

3. **PLG with freemium** — Separate free and paid metrics entirely. Free users: track activation, engagement, conversion funnel. Paid users: track ARR, churn, NRR (paid only), CAC from freemium conversion (often $0, so don't use LTV:CAC—use a payback period based on time to profitability per customer instead).

4. **Metric definitions changing over time** — If your company pivoted (e.g., switched from annual to monthly billing) or changed how you calculate something, version the dashboard. Example: "Dashboard v1.0 (Q1 2025, annual contracts only)" vs. "Dashboard v2.0 (Q2 2025, includes monthly contracts)." Always show the version and what changed so comparisons are clear.

5. **Team resists standardization** — Show the cost of inconsistency with a real example: "Last month, the CEO told an investor we're at $2.8M ARR and 3% churn. The investor asked the CFO to verify, and the CFO said $2.6M ARR and 2.1% revenue churn. The investor lost confidence in our numbers. Here's the reconciliation." People adopt standards once they see the downside of not having them.
