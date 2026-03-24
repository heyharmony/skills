---
name: "Analyze Campaign ROI"
description: "Evaluate marketing campaign performance across channels using multi-touch attribution, funnel analysis, and ROI benchmarking. Combines hard metrics with qualitative context from team meetings to explain why campaigns over- or underperform. Trigger on: campaign performance, marketing ROI, ROAS, attribution model, funnel analysis, campaign metrics, channel performance, marketing analytics, campaign review, CPA analysis."
dependencies: []
role: Marketing
action: Analyze
connectors:
  - HubSpot
  - Google Drive
  - Salesforce
  - Slack
  - Notion
---

## Purpose

Marketing teams review dashboards and pull reports, but the real story lives in weekly syncs, QBRs, and cross-functional meetings. A campaign might show 2% ROI on paper, but the team discussed in Tuesday's sync that targeting was misconfigured for two weeks—or that a new creative resonated better than expected. This skill bridges the gap between hard metrics and human context. By combining campaign data (spend, conversions, attribution) with qualitative insights from Harmony conversations, it produces analysis that explains *why* campaigns over- or underperform, not just *what* the numbers show.

## When to Use

- **Monthly or quarterly campaign reviews** – Assess performance across channels and justify budget decisions with data plus context
- **Budget reallocation decisions** – Determine which channels deserve more investment based on ROI, attribution, and team feedback
- **New channel evaluation** – Understand if a freshly launched channel (e.g., TikTok, Bluesky) is working and at what cost
- **Post-campaign debrief** – After a major campaign ends, analyze what worked, what didn't, and why (using meeting notes as evidence)
- **Executive reporting on marketing spend** – Present board-ready analysis that ties campaign metrics to business outcomes
- **Diagnosing underperforming channels** – Use funnel analysis and team context to pinpoint where a channel is breaking down

## Instructions

1. **Gather campaign data.** Collect spend, impressions, clicks, conversions, and revenue for each channel and campaign during the period in question. Pull from HubSpot, Google Ads, Meta Ads, Salesforce, or your data warehouse. Include timestamps so you can map spend to outcomes by date.

2. **Mine meeting transcripts for qualitative context.** Search Harmony for discussions about each channel's performance. Look for mentions of: targeting changes, creative pivots, market shifts (seasonal, competitive), technical issues (platform outages, pixel misconfiguration), team sentiment ("we love LinkedIn," "Facebook is broken"), and any external events that might explain variance.

3. **Calculate core metrics per channel:**
   - **ROI** = (Revenue - Spend) / Spend × 100
   - **ROAS** = Revenue / Ad Spend
   - **CPA** = Spend / Conversions
   - **CAC** = Spend / New Customers
   - **CTR** = Clicks / Impressions × 100
   - **CVR** = Conversions / Clicks × 100

4. **Apply the right attribution model.** Different models suit different scenarios:
   - **First-Touch:** When discovery is your goal; highlights awareness channels (often organic search, paid social top-funnel)
   - **Last-Touch:** When direct response matters; highlights conversion-close channels (often paid search, email, retargeting)
   - **Linear:** When all touchpoints deserve equal credit; good default for balanced view
   - **Time-Decay:** When later touches matter more; reflects real customer behavior in long sales cycles
   - **Position-Based (40-20-40):** When first and last touches drive outcomes; common in B2B

5. **Run funnel analysis.** Map conversion rates by stage (awareness → interest → consideration → decision → purchase) for each channel. Identify where drop-off is steepest. If paid LinkedIn's awareness is strong but decision stage drops 60%, that's a diagnosis—perhaps the sales team isn't following up, or messaging is misaligned.

6. **Benchmark against industry standards.** Reference typical performance by industry:
   - **SaaS (B2B):** ROAS 3:1 to 5:1, CPA $500–$2,000, CAC payback 12–18 months
   - **E-commerce:** ROAS 2:1 to 4:1, CPA varies widely ($5–$100+)
   - **Lead generation:** CTR 1–3%, CVR 2–5%, CPA $20–$150
   - **Social (organic):** CTR 0.5–2%, CVR 1–4%

7. **Combine quantitative and qualitative.** Explain anomalies using meeting context. If LinkedIn underperforms quantitatively but the team mentioned targeting was wrong for weeks, note that. If email's CVR is 8% (well above benchmark) and the team said a recent redesign resonated, cite that as evidence of smart execution.

8. **Recommend budget reallocation.** Based on ROI, ROAS, CPA, benchmarks, and team insights, recommend which channels to increase, maintain, or pause. Assign confidence levels: high (strong ROI + positive team sentiment), medium (good ROI but mixed feedback), low (needs more data or testing).

## Output Format

Use this template:

```
# Campaign ROI Analysis: [Campaign Name or Period]

## Executive Summary
[2–3 sentences: top insight, recommended action, confidence level]

## Channel Performance Table
| Channel | Spend | Conversions | Revenue | ROI | ROAS | CPA | CTR | CVR | Benchmark | Status |
|---------|-------|-------------|---------|-----|------|-----|-----|-----|-----------|--------|
| Paid Search | $X | N | $R | X% | X:1 | $X | X% | X% | 3:1 ROAS | 🟢 |
| Paid Social | $X | N | $R | X% | X:1 | $X | X% | X% | 2:1 ROAS | 🔴 |
| Email | $X | N | $R | X% | X:1 | $X | X% | X% | 4:1 ROAS | 🟢 |
| Organic | $X | N | $R | – | – | – | X% | X% | – | 🟡 |

## Attribution Breakdown
[State which model you applied and why. Show contribution % per channel under that model.]

### First-Touch Attribution
| Channel | Contribution % | Rationale |
|---------|---|---|
| Paid Social | 45% | Drives initial awareness |
| Organic | 30% | Brand searches, discovery |
| Email | 25% | Reactivation |

## Funnel Analysis
[Channel-by-channel drop-off from awareness to decision/purchase]

| Stage | Paid Search | Paid Social | Email | Organic |
|-------|---|---|---|---|
| Awareness (Impressions) | 50K | 80K | – | 25K |
| Interest (Clicks) | 2.5K (5% CTR) | 1.6K (2% CTR) | 600 | 1.2K (4.8% CTR) |
| Decision (Conversions) | 150 (6% CVR) | 80 (5% CVR) | 84 (14% CVR) | 60 (5% CVR) |
| Revenue | $45K | $24K | $25.2K | $18K |

## Anomaly Explanations
[For any metric that deviates from benchmark or expected pattern, explain using team context]

**Email CVR is 14% (benchmark 4–8%)**
- Team noted in March 15 sync that a new subject line test ("Exclusive: 30% off") had 2.3x engagement
- Copy redesign in March 1 sync highlighted by Head of Marketing as "highest creative quality to date"
- **Confidence: High** – Multiple team validations, consistent lift

**Paid Social underperforming (1.5:1 ROAS vs 2:1 benchmark)**
- Team mentioned in Feb 28 sync: "Facebook/Instagram pixel broke for 3 days (Feb 24–26)"
- Targeting shifted March 1 to more aggressive lookalike audiences; early data shows promise
- **Confidence: Medium** – Clear technical cause identified; corrective action underway; needs 2 more weeks of data

## Budget Recommendations

| Channel | Current Spend | Recommended Spend | Change | Rationale | Confidence |
|---------|---|---|---|---|---|
| Paid Search | $30K | $40K | +33% | 4.2:1 ROAS, above benchmark; team sees scaling opportunity | High |
| Email | $5K | $8K | +60% | 5:1 ROAS, strongest performer; list growing, engagement high | High |
| Paid Social | $25K | $20K | -20% | Below benchmark; technical issues resolved; reassess in 30 days before reinvest | Medium |
| Organic | $0 | $0 | – | Baseline; no paid spend; consider investing in SEO | – |

**Total Q2 Marketing Budget:** $73K (current) → $68K (recommended) | Net impact: Reallocate underperforming spend to proven channels
```

## Example: Clearpath Analytics Campaign Review

**Scenario:** B2B data platform, Q1 performance review. Four channels, one underperforming, meeting context explains variance.

```
# Campaign ROI Analysis: Q1 2026 – Clearpath Analytics

## Executive Summary
Q1 generated $412K revenue on $73K spend (5.6:1 ROAS). Paid Search dominates with 4.2:1 ROI and strong team confidence. Paid Social underperformed due to pixel misconfiguration (Feb 24–26), now fixed. Recommend increasing Paid Search budget by $15K and Email by $3K; pause Paid Social spend pending April reassessment.

## Channel Performance Table
| Channel | Spend | Conversions | Revenue | ROI | ROAS | CPA | CTR | CVR | Benchmark (B2B SaaS) | Status |
|---------|-------|-------------|---------|-----|------|-----|-----|-----|---|---|
| Paid Search | $32K | 128 | $152K | 375% | 4.75:1 | $250 | 4.2% | 6.5% | 3:1 ROAS | 🟢 |
| Paid Social | $28K | 80 | $84K | 200% | 3:1 | $350 | 2.1% | 4.8% | 3:1 ROAS | 🟡 |
| Email | $8K | 96 | $144K | 1700% | 18:1 | $83 | – | 12% | 4:1 ROAS | 🟢 |
| Organic | $5K | 45 | $32K | 540% | 6.4:1 | $111 | 3.8% | 5.2% | – | 🟢 |

## Attribution Breakdown

**Model Applied: Time-Decay (40-20-40)**
Rationale: Clearpath Analytics operates in mid-market B2B with 45-day average sales cycle. Earlier touchpoints (brand discovery, problem awareness) and later touchpoints (solution validation, buying committee decision) both matter. Linear would underweight the critical discovery phase; last-touch would ignore the work of top-funnel channels.

### Time-Decay Contribution by Channel
| Channel | Contribution % | Details |
|---------|---|---|
| Paid Search | 42% | Strong at decision stage; captures "data platform" intent searches |
| Email | 28% | Effective nurture; reactivates MQLs, moves to SQL |
| Paid Social | 18% | Awareness and consideration; LinkedIn drives CFO and VP-level reach |
| Organic | 12% | Long-tail discovery; reduces dependency on paid |

## Funnel Analysis

| Stage | Paid Search | Paid Social | Email | Organic | Total |
|-------|---|---|---|---|---|
| Awareness (Impressions) | 760K | 1.33M | – | 120K | 2.21M |
| Interest (Clicks) | 32K (4.2%) | 28K (2.1%) | 800 | 4.6K (3.8%) | 65.4K |
| Consideration (Form fills) | 1.96K (6.1%) | 1.4K (5%) | 560 (70%) | 380 (8.3%) | 4.3K |
| Decision (Qualified opps) | 640 (32.7%) | 280 (20%) | 380 (67.9%) | 160 (42%) | 1.46K |
| Purchase (Won deals) | 128 (20%) | 80 (28.6%) | 96 (25%) | 45 (28%) | 349 |

**Key Insight:** Email's 70% form-fill rate is exceptional—higher than all paid channels. This suggests strong list quality and messaging alignment. Paid Social's consideration drop (1.4K clicks → 280 opps) suggests targeting or creative misalignment; needs immediate review.

## Anomaly Explanations

**Paid Social underperforming (3:1 ROAS vs 4.2:1 Paid Search)**

Technical Root Cause:
- VP of Demand Gen noted in Feb 28 all-hands: "Facebook/Instagram conversion pixel broke Feb 24–26 due to iOS 17 update"
- Lost 3 days of tracking; actual conversions likely higher but underreported
- Pixel re-verified and reconfigured March 1

Team Confidence in Recovery:
- March 5 weekly sync: Head of Marketing observed "LinkedIn audience expansion working; new VP-level targeting showing promise"
- March 12 sync: Team reported "early April data shows CTR improvement to 2.8%, approaching 3%"

**Confidence: Medium** — Clear technical cause identified and resolved. Recommend 30-day reassessment before reinvestment decision.

---

**Email dominates (18:1 ROAS, 12% CVR)**

Qualitative Context:
- Head of Product Marketing mentioned in March 1 sync: "January redesign finally shipped; email quality jumped. Copy now references customer pain points, not just features."
- Demand Gen lead shared in March 8 sync: "Segmentation by company size (SMB vs Enterprise) is now live; messaging matches buyer journey stage."

Data Corroboration:
- Jan ROAS: 8:1 (baseline)
- Feb ROAS: 12:1 (redesign begins)
- Mar ROAS: 18:1 (segmentation + new copy live)

**Confidence: High** — Strong ROI supported by multiple team observations and consistent uptrend. Recommend increasing Email budget.

---

**Organic exceeds benchmark (6.4:1 ROAS)**

Context from Feb 15 sync:
- SEO lead noted: "New blog on 'How to Choose a Data Platform' ranked #2 for target keyword; organic search traffic to top-level domain +45% MoM"
- Minimal paid spend ($5K) means organic is low-cost baseline; high ROAS is partly due to low denominator

**Confidence: High for organic quality; Medium for scaling opportunity** — Organic is reliable but would require Content + SEO investment to grow meaningfully. Not included in immediate budget reallocation.

## Budget Recommendations

| Channel | Q1 Spend | Q2 Recommended | Change | Rationale | Confidence |
|---------|---|---|---|---|---|
| Paid Search | $32K | $47K | +47% ($15K) | 4.75:1 ROAS well above 3:1 benchmark; team confident in scaling; keyword roadmap ready | High |
| Email | $8K | $11K | +38% ($3K) | 18:1 ROAS; exceptional CVR; list growing 8% MoM; segmentation working | High |
| Paid Social | $28K | $15K | -46% ($13K) | Pause scale until April data confirms recovery post-pixel fix; reallocate to Paid Search/Email | Medium |
| Organic | $5K | $6K | +20% ($1K) | Baseline monitoring; increase blog budget slightly if SEO hiring approved | Low |

**Total Q2 Marketing Budget:** $73K → $79K (net +$6K; offset by Paid Social pause). Return reallocated Paid Social budget when April CTR/CVR metrics confirm recovery above 3:1 benchmark.

## Next Steps
1. Monitor Paid Social daily Apr 1–14; confirm CTR ≥ 2.8%, CVR ≥ 5%
2. Scale Paid Search by $5K week-over-week if ROAS ≥ 4:1
3. A/B test Email subject lines (current champion: "Exclusive: 30% off")
4. Schedule post-mortem on Paid Social pixel issue; preventive measures for future platform updates
```

## Edge Cases

1. **Insufficient data for attribution.** Early-stage campaigns or new channels may have few conversions. Solution: Use traffic volume and engagement as proxies; lean on team context ("team believes LinkedIn is underutilized; we're testing it now"); set explicit follow-up date (e.g., "Reassess in 6 weeks with 200+ conversions").

2. **Single-channel company.** If you're entirely on Google Ads or email, attribution is trivial. Solution: Run funnel analysis within the channel (top keywords vs. long-tail; segment vs. non-segment). Use team context to diagnose quality issues ("CMO says our brand terms are underoptimized").

3. **Long B2B sales cycles (6+ months).** Attribution becomes noisy because conversions lag spend by half a year. Solution: Use Time-Decay or Position-Based attribution; align on a "conversion" definition (MQL, SQL, opportunity, or closed deal); accept that this quarter's spend may credit last quarter's revenue.

4. **Conflicting team narratives.** One person says "LinkedIn is gold," another says "It's underperforming." Solution: Request specific examples ("What did it do well?"), check dates (was the positive experience in February, when targeting was different?), then reconcile narratives in the output (e.g., "Early Feb CTR was strong at 3.2%, but slipped to 1.8% mid-Feb after we expanded targeting; recent pivot to lookalike audiences is recovering CTR to 2.4%").

5. **Campaigns with brand (not conversion) goals.** If a campaign aims for awareness or sentiment, ROI/ROAS/CPA don't apply. Solution: Use impression share, brand lift, CTR, video completion rates, share of voice, or sentiment as success metrics. Example output: "Brand awareness campaign reached 500K impressions, 8% CTR, +12% brand recall (post-campaign survey); recommend $50K continued spend for Q2."

---

**Last Updated:** 2026-03-22
**Maintained By:** Marketing Operations
**Version:** 1.0
