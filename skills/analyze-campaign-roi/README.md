# Analyze Campaign ROI – Harmony Skill

A Harmony marketplace skill that evaluates marketing campaign performance across channels using multi-touch attribution, funnel analysis, and ROI benchmarking. Uniquely combines hard metrics from dashboards and ad platforms with qualitative context from team meetings and discussions to explain *why* campaigns over- or underperform.

## Overview

Marketing teams rely on dashboards and analytics platforms to report campaign metrics (ROAS, CPA, CTR, CVR). But the story behind those numbers lives in weekly syncs, QBRs, and cross-functional meetings. Why did paid social underperform last month? Was it the creative, the targeting, a technical issue, or market conditions? This skill bridges the gap.

By analyzing Harmony conversation transcripts alongside campaign metrics, it produces actionable intelligence that explains anomalies, validates assumptions, and informs budget decisions—moving from "here's what happened" to "here's why it happened and what to do next."

## Use Cases

- **Monthly/quarterly campaign reviews:** Assess multi-channel performance, justify budget decisions
- **Budget reallocation:** Determine which channels deserve more investment based on ROI, ROAS, and team feedback
- **New channel evaluation:** Understand if a freshly launched channel is working and at what cost
- **Post-campaign debrief:** Analyze what worked, what didn't, why—using meeting notes as evidence
- **Executive reporting:** Present board-ready analysis tying campaign metrics to business outcomes
- **Diagnosing underperformance:** Identify why a channel is breaking down (targeting, creative, platform changes, etc.)

## How It Works

1. **Collect campaign data** from your ad platforms and CRM (HubSpot, Salesforce, Google Ads, Meta, etc.)
2. **Mine Harmony transcripts** for team context: targeting changes, creative pivots, market shifts, technical issues, team sentiment
3. **Calculate core metrics:** ROI, ROAS, CPA, CAC, CTR, CVR
4. **Apply attribution modeling:** Choose First-Touch, Last-Touch, Linear, Time-Decay, or Position-Based based on your sales cycle
5. **Run funnel analysis:** Identify where conversion drops happen, stage by stage
6. **Benchmark against industry standards:** Compare performance to typical SaaS, e-commerce, or lead-gen benchmarks
7. **Synthesize insights:** Explain anomalies using meeting context (e.g., "ROAS dipped because targeting was misconfigured for two weeks, as noted in the Feb 28 sync")
8. **Recommend action:** Suggest budget shifts with confidence levels (high, medium, low)

## Key Features

### Multi-Touch Attribution
Choose the right attribution model for your business:
- **First-Touch** – Best for awareness-focused campaigns
- **Last-Touch** – Best for conversion-focused campaigns
- **Linear** – Balanced view across all touchpoints
- **Time-Decay** – When later touches matter more (longer sales cycles)
- **Position-Based (40-20-40)** – When first and last touches are critical (B2B SaaS)

### Funnel Analysis
Track conversion rates by stage (awareness → interest → consideration → decision → purchase) for each channel. Quickly spot where a channel breaks down and why.

### Industry Benchmarking
Built-in benchmarks for:
- **SaaS (B2B):** ROAS 3–5:1, CPA $500–$2,000, CAC payback 12–18 months
- **E-commerce:** ROAS 2–4:1, CPA $5–$100+
- **Lead generation:** CTR 1–3%, CVR 2–5%, CPA $20–$150
- **Social (organic):** CTR 0.5–2%, CVR 1–4%

### Qualitative + Quantitative Synthesis
Move beyond dashboards. Connect data anomalies to real team discussions:
- "Email CVR is 8% (above benchmark)"
  - Team noted in March 1 sync: new subject line test had 2.3x engagement
  - Copy redesign mentioned by Head of Marketing as highest quality to date
  - **Confidence: High** – Multiple validations

### Actionable Recommendations
Output includes budget reallocation suggestions with confidence levels, next-step actions, and reassessment timelines.

## Data Inputs

The skill works with:
- **Campaign metrics:** Spend, impressions, clicks, conversions, revenue per channel
- **Funnel data:** Traffic by stage (awareness, interest, consideration, decision, purchase)
- **Harmony transcripts:** Team discussions about campaign performance, targeting changes, creative pivots, technical issues
- **Industry context:** Benchmarks for your vertical

### Supported Connectors
- **HubSpot** – Campaign data, funnel conversions
- **Salesforce** – Opportunity pipeline, deal velocity
- **Google Drive** – Analytics sheets, dashboards
- **Slack** – Ad-hoc discussion context
- **Notion** – Campaign calendars, performance notes

## Output Format

The skill produces a structured report with:
1. **Executive Summary** – Top insight, recommended action, confidence level
2. **Channel Performance Table** – ROI, ROAS, CPA, CTR, CVR, benchmark comparison
3. **Attribution Breakdown** – Contribution % per channel under chosen model
4. **Funnel Analysis** – Stage-by-stage drop-off by channel
5. **Anomaly Explanations** – Why metrics deviate from benchmark, with meeting quotes as evidence
6. **Budget Recommendations** – Which channels to increase, maintain, or pause; confidence levels

See `SKILL.md` for a complete template and real-world example (Clearpath Analytics, Q1 review).

## Example Scenario

**Company:** Clearpath Analytics (B2B data platform)
**Period:** Q1 2026
**Channels:** Paid Search, Paid Social, Email, Organic
**Challenge:** Paid Social underperforming; need to explain why and decide whether to scale, pause, or fix

**Analysis Output:**
- Paid Social ROAS: 3:1 (vs. 4.2:1 benchmark) ❌
- Root cause: VP of Demand Gen noted in Feb 28 sync that "Facebook/Instagram conversion pixel broke Feb 24–26"
- 3 days of tracking loss; actual conversions likely higher but underreported
- Pixel re-verified March 1; early April data shows CTR improving to 2.8%
- **Recommendation:** Pause Paid Social spend at $15K (down from $28K); reassess April 1 when data is clean

**Related finding:**
- Email ROAS: 18:1 (vs. 4:1 benchmark) ✅
- Team noted March 1 sync: "New email copy strategy launched; segmentation by company size now live"
- Confidence: High
- **Recommendation:** Scale Email budget from $8K to $11K

**Total action:** Reallocate $13K from Paid Social to Paid Search ($15K increase) + Email ($3K increase). Net result: $73K → $79K total budget; higher ROI portfolio.

## Edge Cases Handled

1. **Insufficient data** – Early campaigns with few conversions; use engagement proxies and team context; set explicit follow-up date
2. **Single-channel companies** – Run funnel analysis within the channel; use team context to diagnose quality issues
3. **Long B2B sales cycles (6+ months)** – Use Time-Decay or Position-Based attribution; align on conversion definition (MQL, SQL, opportunity, closed deal)
4. **Conflicting team narratives** – Request specific examples, check dates, reconcile using data + context
5. **Brand vs. conversion goals** – Swap metrics (impressions, brand lift, CTR, share of voice instead of ROI/ROAS)

## Getting Started

1. **Gather campaign data:**
   - Export spend, conversions, revenue by channel from ad platforms and CRM
   - Include date ranges so you can map spend to outcomes

2. **Share relevant Harmony transcripts:**
   - Weekly syncs, QBRs, post-campaign debriefs, channel-specific discussions
   - The skill will surface context about targeting, creative, platform issues, team sentiment

3. **Specify your business context:**
   - Sales cycle length (affects attribution model choice)
   - Primary vertical (affects benchmark selection)
   - Campaign goal (conversion, awareness, branding)

4. **Run the skill** and review the output:
   - Validate data accuracy
   - Confirm attribution model makes sense
   - Use budget recommendations to inform next quarter's plan

## Connectors & Integrations

- **HubSpot:** Pull campaign performance, funnel data, lead source attribution
- **Salesforce:** Access closed deal data, opportunity pipeline, deal velocity
- **Google Drive:** Import analytics sheets, dashboard screenshots, performance notes
- **Slack:** Capture ad-hoc team commentary for context
- **Notion:** Reference campaign calendars, performance tracking databases

## FAQs

**Q: How do I choose an attribution model?**
A: It depends on your sales cycle. Short cycles (e-commerce): Last-Touch. Long cycles (B2B SaaS): Time-Decay or Position-Based. Unsure: Default to Linear. See `SKILL.md` for details.

**Q: What if my data is incomplete?**
A: The skill can work with partial data. Missing revenue? Use conversions. Missing impressions? Use clicks. Low volume? Set an explicit reassessment date. The output will note limitations and confidence levels.

**Q: Can I compare across different time periods?**
A: Yes. Specify your comparison periods (e.g., "Q1 2025 vs. Q1 2026," "January 2026 vs. February 2026") and the skill will normalize metrics and identify trends.

**Q: How does Harmony context improve the analysis?**
A: Dashboards show *what* happened (ROAS dropped 15%). Harmony shows *why* (VP mentioned pixel misconfiguration, team discussed new targeting strategy, platform outage occurred). This context turns data into narrative and informs decision-making.

**Q: Can I use this for brand campaigns that don't measure conversions?**
A: Yes. The skill adapts to brand-goal metrics: impressions, brand lift, CTR, video completion rate, share of voice, sentiment. See "Edge Cases" in `SKILL.md`.

## Support & Feedback

For questions, feature requests, or troubleshooting:
- Check the "Edge Cases" section in `SKILL.md` for common scenarios
- Review the full example (Clearpath Analytics) for a real-world walkthrough
- Reach out to the Harmony marketplace team

---

**Version:** 1.0
**Last Updated:** 2026-03-22
**Role:** Marketing | Action: Analyze
**Connectors:** HubSpot, Google Drive, Salesforce, Slack, Notion
