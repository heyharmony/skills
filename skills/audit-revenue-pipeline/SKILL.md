---
name: "Audit Revenue Pipeline"
description: "Cross-reference pipeline forecasts from sales meetings with actual customer conversation signals to expose forecast risk, stuck deals, and conversion gaps. Flags where rep confidence diverges from prospect reality. Trigger on: pipeline review, revenue pipeline, forecast accuracy, deal inspection, pipeline hygiene, pipeline audit, sales forecast, conversion analysis, stage velocity, pipeline health, revenue operations."
dependencies: []
author: "Harmony"
version: "1.0.0"
icon: "sparkles"
cover: ""
screenshots: []
category: "Sales"
---

## Purpose

Pipeline reviews rely on rep self-reporting: "This deal is 80% likely to close." But Harmony has the actual customer conversations. When the rep says "commit" but the prospect said "we're still evaluating three options" in the call, that's a forecast risk signal. This skill cross-references pipeline stage assessments from internal sales meetings with sentiment, commitment language, and buying signals from customer-facing calls. It surfaces deals where internal confidence diverges from external reality, identifies stuck stages with no forward momentum, calculates true conversion rates based on observed deal progression, and flags pipeline coverage gaps that threaten revenue targets.

## When to Use

- **Weekly pipeline review prep**: Audit the deals going into Friday sales standup to flag high-risk forecasts before the meeting
- **Monthly/quarterly forecast**: Build board-ready forecast with confidence tiers based on conversation signals, not rep opinion
- **Board meeting pipeline section**: Present actual conversion rates and coverage ratios with evidence, not assumptions
- **Deal inspection for at-risk accounts**: Drill into a single large deal to understand the real status vs. reported status
- **Funnel conversion diagnosis**: Identify which stages have the biggest leakage and where deals typically get stuck
- **New sales leader onboarding**: Assess pipeline quality and forecast reliability when joining or taking over a territory

## Instructions

1. **Extract pipeline claims from internal sales meetings**: Pull deal names, pipeline stages, close dates, amounts, and rep confidence levels (probability %, commit vs. forecast designation, activity summaries) from sales meeting notes or CRM records.

2. **Cross-reference with customer-facing call transcripts**: Match deals to actual customer conversations (discovery, demo, negotiation calls). Extract buying signals (budget confirmed, decision timeline stated, competitive intent mentioned), objections and concerns, competitive mentions, prospect-stated evaluation timelines, and decision-maker engagement level.

3. **Score each deal for confidence gap**: Calculate Confidence Gap = (rep assessment probability) minus (conversation evidence score). Flag any deal where gap > 2 points (e.g., rep says 80% likely, calls show early-stage signals = ~30%, gap of 50 points).

4. **Identify stuck deals**: Flag deals in the same stage for >2x average stage duration with no forward-moving language in recent calls (e.g., prospect still asking basic questions, no budget discussion, timeline pushed again).

5. **Calculate actual conversion rates per stage**: Track deals that entered each stage in the past 3–6 months; measure what percentage actually advanced to the next stage. This is observed, not reported conversion.

6. **Analyze stage velocity**: Calculate average days in each stage (discovery, demo, negotiation, close). Flag deals moving significantly faster or slower than the norm, and surface reasons (e.g., all fast deals had champion; slow deals lack stakeholder buy-in).

7. **Assess pipeline coverage**: Calculate total pipeline vs. revenue target, weighted (probability-adjusted) pipeline vs. commit, and coverage ratio by segment. Typical healthy coverage is 3x for 85% confidence.

8. **Build pipeline health report with recommendations**: Synthesize findings into advance/downgrade/disqualify actions and source-gap recommendations. Prioritize moves by deal size and confidence gap.

## Output Format

- **Pipeline Health Summary**: High-level metrics (total pipeline, weighted pipeline, coverage ratio, forecast confidence %)
- **Deal-by-Deal Confidence Gap Table**: Deal name | Stage | Rep $ | Rep % | Transcript Evidence Score | Gap | Action (advance/hold/downgrade)
- **Stuck Deal Alert List**: Deal name | Stage | Days in Stage | Avg Stage Duration | Recent Call Summary | Why Stuck
- **Stage Conversion Funnel**: Stage | Deals Entered | Deals Advanced | Conversion % | vs. Target
- **Velocity Analysis**: Stage | Avg Days | Fastest Deal | Slowest Deal | Outliers & Reasons
- **Coverage Ratio Dashboard**: Total Pipeline | Weighted Pipeline | Target Revenue | Coverage Ratio | Segments Below Target
- **Recommendations**: List of deals to advance (and why), downgrade (and why), disqualify (and why), and source gaps (amount needed, segment priority)

## Example

**Company**: Vantage (B2B supply chain SaaS, $2M ARR, 8-person sales team)

**Pipeline Review Input**: 28 deals totaling $3.2M pipeline. Team forecast: $2.8M commit. Rep confidence: 6 deals at 80%+, 12 at 60–80%, 10 at 40–60%.

**Audit Output**:

| Deal | Stage | Rep $ | Rep % | Call Evidence | Gap | Status |
|------|-------|-------|-------|---------------|-----|--------|
| Logistics Co. | Negotiation | $420K | 85% | Still evaluating 3 vendors; budget not confirmed | +50 | DOWNGRADE |
| Supply Chain Inc. | Close | $320K | 90% | Waiting on steering committee sign-off; positive signals | +10 | ADVANCE |
| RegionalNet | Demo | $180K | 70% | Early-stage questions; CFO not yet involved | +45 | DOWNGRADE |
| DistroHub | Negotiation | $280K | 75% | Prospect: "Ready to move if pricing works" | -5 | HOLD |
| GlobalTrade | Qualification | $160K | 50% | No champion identified; initial conversation only | +20 | DISQUALIFY |

**Stuck Deal Alerts** (3 deals):
- Logistics Co. (Negotiation, 48 days in stage; avg 18 days): Circular conversations, no new decision-makers
- RegionalNet (Demo, 32 days): Scheduled follow-up after CFO review; no demo date
- DistroHub (Negotiation, 42 days): Pricing negotiation stalled; last call was 14 days ago

**True Stage Conversion**:
- Qualification → Discovery: 78% (16 of 20 deals from past 6 months)
- Discovery → Demo: 65% (12 of 18)
- Demo → Negotiation: 52% (10 of 19)
- Negotiation → Close: 38% (6 of 16) — *team reports 55%; actual is much lower*

**Velocity**:
- Avg days: Qual (8), Discovery (14), Demo (22), Neg (28), Close (15)
- Fastest deals: All had a champion by discovery; avg 34 days cycle
- Slowest deals: Multi-threaded, multiple decision-makers; avg 73 days cycle

**Coverage Analysis**:
- Total pipeline: $3.2M (target $2.4M for 85% confidence)
- Weighted pipeline (by rep %): $2.1M
- Coverage ratio: 1.4x (needs 3x for 85% forecast confidence)
- Shortfall: $1.2M
- Highest-risk segment: Mid-market (avg deal stuck longer; lower qual-to-demo conversion)

**Recommendations**:
- **Advance**: Supply Chain Inc. ($320K) — close support for steering committee review; target 30 days
- **Downgrade**: Logistics Co., RegionalNet ($600K combined) — demote from commit to forecast; reassess after next stakeholder calls
- **Disqualify**: GlobalTrade, 2 other early-stage deals with no champion ($340K) — redeploy effort
- **Source**: Need $1.2M additional pipeline; focus on mid-market with champion validation in discovery

---

## Edge Cases

1. **No customer-facing calls recorded**: Audit relying only on internal signals (email chains, activity timestamps, rep notes). Flag limited visibility and recommend implementing call recording or note-taking discipline.

2. **PLG pipeline (self-serve + sales-assist mixed funnel)**: Adjust methodology for lower conversation frequency. Use product signals (usage depth, expansion intent) as proxy for buying signals; cross-reference with occasional sales calls.

3. **Multi-thread deals with conflicting signals**: Different stakeholders express different intent. Score separately by stakeholder and flag risk (e.g., champion is positive, procurement is skeptical); recommend timeline adjustment.

4. **End-of-quarter pipeline stuffing**: Sudden stage advances without corresponding call activity in prior weeks. Flag as likely to slip; recommend downgrade until post-call validation.

5. **Channel/partner pipeline**: Limited direct conversation data. Supplement with partner feedback calls, customer success check-ins, or recorded partner pitch reviews. Lower confidence in conversion predictions.

---

**Role**: Sales & Revenue
**Action**: Analyze
**Connectors**: HubSpot, Salesforce, Pipedrive, Slack, Gong
