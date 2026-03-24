# Analyze Product Metrics

> Define, track, and interpret product KPIs tied to real product decisions—grounded in what your team has been saying about metrics in meetings.

## What It Does

This skill helps product teams select the right metric framework (AARRR, North Star, or HEART), design dashboards for different audiences, run cohort and retention analysis, and build narratives around metric movements that connect to product changes. When Harmony captures team discussions about metrics—sprint reviews, product reviews, board prep—this skill surfaces what was said and ties it to the data.

**Key capabilities:**
- **Framework selection**: Choose AARRR, North Star, or HEART based on product stage (pre-PMF, growth, mature)
- **KPI definition**: Set primary (1–2), guardrail (2–3), and secondary (4–8) metrics
- **Dashboard design**: Build three layers (executive, product health, feature-level) for different stakeholders
- **Cohort & retention analysis**: Track retention curves, spot trends (improving cohorts, cliff patterns), and diagnose churn
- **Metric narrative**: Connect movements to product events; build talking points for board, all-hands, and sprint reviews
- **Harmony integration**: Surface team conversations about metrics and link them to data insights

## Who It's For

- **Product managers** launching new products or reviewing quarterly performance
- **Founders** defining KPIs when metrics don't exist yet
- **Growth teams** chasing acquisition and CAC payback targets
- **Product designers** evaluating feature adoption and activation impact
- **Engineering leads** understanding why metrics are trending a certain way
- **Executives** preparing board decks or all-hands updates with metric context

## Use Cases

1. **New product launch**: Define KPIs before day 1; decide whether to optimize for North Star (traction) or AARRR (monetization).
2. **Quarterly metric review**: Rebaseline targets, examine cohort trends, and update guardrails based on new learnings.
3. **Retention cliff**: Diagnose whether drop-off is onboarding friction, feature adoption gap, or segment-specific churn.
4. **Board prep**: Build a metric narrative that ties movements to product changes ("We shipped smart onboarding Feb 15, and W4 retention jumped 4%").
5. **Feature launch measurement**: Plan which secondary metrics to track; design cohort splits before rollout.
6. **New PM onboarding**: Explain why existing KPIs were chosen and what each dimension reveals about product health.

## Connectors

Connect your existing tools to enrich metric analysis:

- **HubSpot**: Pulls customer plan, ARR, and churn cohort by segment (which plan tier has highest churn?)
- **Salesforce**: Links sales pipeline to product adoption; see if customers with high feature adoption expand faster
- **Notion**: Pulls product roadmap and feature-ship dates; automatically timestamps metric changes
- **Slack** (Harmony integration): Surfaces team meeting discussions of metrics ("In sprint review, team said retention metrics looked weak"; connect to data)

Each connector is optional; the skill works standalone with exported CSV data from your analytics platform (Amplitude, Mixpanel, Looker, etc.).

## Setup

1. **Export your data**: From your analytics platform, pull:
   - Cohort retention table (% active by signup week, 13-week lookback)
   - KPI metrics by week (MAU, DAU, activation rate, churn, LTV/CAC, etc.)
   - Feature adoption rates
   - Revenue metrics (MRR, ARR, ARPU)

2. **Connect optional integrations**:
   - Link HubSpot to auto-pull churn by plan and ARR per segment
   - Link Notion to auto-pull product roadmap dates
   - Link Slack/Harmony for team meeting context

3. **Run the skill**: Provide product stage, framework choice, and metric data. The skill outputs:
   - Metric framework with rationale
   - KPI table (primary, guardrail, secondary)
   - Dashboard spec (executive, product health, feature layers)
   - Cohort analysis with retention curves
   - Interpretation and recommendations

## What You Get

**Deliverable**: A metric analysis document (Markdown) ready to share with your team:

```
# Product Metrics Analysis

## Metric Framework Selection
- Product Stage: [Growth]
- Framework Chosen: [AARRR]
- Rationale: [SaaS with monetized users; AARRR funnel reveals drop-off stages]

## KPI Definition
| Tier | Metric | Target | Owner |
|------|--------|--------|-------|
| Primary | WAU | 2,200 | Product |
| Guardrail | W4 Retention | ≥32% | Product |
| Secondary | Time-to-Value | ≤3 days | Onboarding |

## Dashboard Specification
[Executive, product health, and feature layers with metrics and cadences]

## Cohort & Retention Analysis
[Retention curves, trends, and diagnostic insights]

## Interpretation & Recommendations
- Current health: [1 sentence]
- Key insights: [2–3 bullets]
- Actions: [2–3 prioritized actions with expected impact]
- Risk: [1 guardrail metric to watch]
```

**Example**: See the Relay (project coordination SaaS) analysis in SKILL.md for a complete real-world example with retention tables, time-to-value trends, and actionable recommendations tied to product changes.

---

**Questions?** Refer to the edge cases section in SKILL.md for guidance on pre-revenue products, two-sided marketplaces, or teams with vanity metrics.
