---
name: "Analyze Financial Data"
description: "Synthesize financial discussions from leadership meetings, board reviews, and investor calls into structured analysis — P&L review, cash flow, unit economics, and budget variance with the narrative context that explains the numbers. Trigger on: financial analysis, P&L review, cash flow, unit economics, budget variance, burn rate, financial review, revenue analysis, cost analysis, financial summary, runway analysis."
dependencies: []
author: "Harmony"
version: "1.0.0"
icon: "sparkles"
cover: ""
screenshots: []
category: "Strategy"
---

## Purpose

Numbers without narrative are dangerous. A 15% revenue miss looks catastrophic until you hear the CFO explain that two enterprise deals slipped to next quarter with signed LOIs. This skill combines financial data with the explanatory context from leadership meetings, board reviews, and investor calls. It structures P&L reviews, cash flow analysis, unit economics, and budget variance—grounding every number in what leadership actually said about why it happened and what they're doing about it. The result is actionable financial intelligence, not spreadsheets detached from reality.

## When to Use

- **Monthly/quarterly financial review**: Turn scattered commentary about revenue, costs, and variance into a coherent financial narrative
- **Board meeting prep (financial section)**: Package financial performance and forward guidance for board-level discussion
- **Investor update drafting**: Combine financial results with contextual explanations from leadership meetings to build compelling investor narratives
- **Budget variance investigation**: Understand why actuals diverged from plan, grounded in what leadership discussed
- **Cash runway planning**: Project burn rate and cash runway based on current trajectory and forward commitments discussed in meetings
- **Unit economics deep dive**: Analyze CAC, LTV, payback period, and gross margin per customer for pricing or growth decisions

## Instructions

1. **Gather financial context from recent meetings** — Mine transcripts for revenue commentary, cost discussions, variance explanations, forward guidance, and market context. Flag any misses, surprises, or strategic shifts mentioned by leadership.

2. **Structure P&L review** — Organize revenue by segment/product, map COGS, calculate gross margin, break out operating expenses by department (sales, engineering, G&A), and derive EBITDA. Link each line item to relevant meeting commentary.

3. **Analyze cash flow** — Calculate operating cash flow (cash from operations, accounts receivable/payable timing), investing activities, financing activities, net cash position, and runway at current burn rate.

4. **Calculate unit economics** — Derive CAC (cost of customer acquisition), LTV (lifetime value), LTV:CAC ratio (target 3:1 or better), payback period, and gross margin per customer. Segment by customer cohort or acquisition channel if data allows.

5. **Run budget variance analysis** — Compare actual results to plan for each major line item (revenue, COGS, OpEx by department). For material variances, include the narrative explanation from meeting context (e.g., "Two enterprise deals pushed to Q1 with signed LOIs; new SDR team not yet productive on cost side").

6. **Identify financial risks and opportunities** — Surface delayed deals, unexpected cost increases, one-time items, expansion opportunities, and market shifts mentioned in discussions. Assess impact on runway and forward projections.

7. **Build forward projections** — Create 3-month and 12-month cash and P&L views based on current trajectory, commitments discussed in meetings (signed LOIs, pipeline visibility), and strategic initiatives (hiring, product launches).

8. **Package for audience** — Tailor output: board-level summary (1 page of key metrics, risks, and asks), management detail (3–5 pages covering full P&L, cash flow, unit economics, and variance), investor narrative (financial results + forward momentum + path to next milestone).

## Output Format

- **Financial Summary Dashboard** — Key metrics (ARR, burn rate, runway, CAC, LTV:CAC) with month-over-month and year-over-year change
- **P&L with Variance + Narrative** — Revenue, COGS, gross margin, OpEx by department, EBITDA; actual vs. plan with leadership commentary
- **Cash Flow Statement** — Operating, investing, financing activities; ending cash balance; runway projection
- **Unit Economics Table** — CAC, LTV, payback period, gross margin per customer; segmented by cohort or channel if relevant
- **Risk/Opportunity Register** — Financial headwinds and tailwinds identified in meetings; impact on runway and growth trajectory
- **Forward Projection** — 3-month and 12-month cash and P&L views with key assumptions
- **Audience-Specific Summaries** — Board brief (1 page), management deep dive (3–5 pages), investor narrative (2–3 pages)

## Example

**Trellis (Series A B2B Procurement SaaS, $4.2M ARR)**

**Q4 Financial Review Summary**

*Revenue Performance:*
- Total ARR: $4.2M (92% of plan)
- New logo revenue: $580K (slightly below plan; two enterprise deals—DataCorp ($200K) and SupplyChain Inc. ($180K)—slipped from Q4 to Q1 with signed LOIs)
- Expansion revenue: $240K (up 40% YoY; strong net retention from existing mid-market accounts)
- Net revenue retention: 118%

*Cost Structure:*
- COGS: 22% of revenue (payment processing, hosting); stable
- Gross margin: 78% (healthy for SaaS stage)
- OpEx: $980K/month ($11.8M annualized)
  - Sales & marketing: $420K (up; new SDR team of 4 not yet productive; expect ramp in Q2)
  - Engineering: $350K (on plan)
  - G&A: $210K (on plan)

*Unit Economics & Variance:*
- CAC: $8.2K (up from $6.8K prior year; new SDR team adds cost before revenue attribution)
- LTV: $52K (estimated; 72-month horizon)
- LTV:CAC: 6.3:1 (healthy; trending up as SDR productivity ramps)
- Payback period: 5.9 months (acceptable for B2B SaaS)
- Budget variance: OpEx +8% vs. plan due to SDR hiring acceleration (discussed in Q3 leadership sync as growth lever)

*Cash Flow & Runway:*
- Operating cash flow (Q4): +$320K (collections strong; payables timing favorable)
- Cash position: $1.85M
- Burn rate: $280K/month (cash burn; approaching breakeven on EBITDA)
- Runway: 14 months at current burn (adequate; improving as expansion revenue scales)

*Risk & Opportunity:*
- Risk: SDR team productivity delayed (target ramp Q2; if slips to Q3, CAC could rise further)
- Opportunity: DataCorp and SupplyChain Inc. deals in Q1 will add $380K ARR (strong enterprise segment emerging)
- Opportunity: Net retention at 118% suggests pricing power; expansion revenue growing faster than new logos

*Forward Projection (12-month view):*
- ARR at end of 2026: $6.2M (driven by Q1 enterprise closures + consistent expansion)
- Burn: Path to cash flow breakeven by Q4 2026 if expansion revenue continues to scale
- Key milestones: SDR productivity ramp Q2, Series B positioning in H2 2026

*Board-Level Narrative:*
"We hit 92% of plan in Q4, with two major enterprise deals signed and ready to close in Q1. Expansion revenue is outpacing new logo growth, demonstrating strong retention and net retention of 118%. New SDR investment is a cost in the near term but positions us for accelerated new logo growth in 2026. Runway is 14 months; we're on track for cash flow breakeven by year-end."

## Edge Cases

1. **Pre-revenue startup** — Focus on burn rate, runway, key milestones (product launch, first customer, pilot program). Unit economics are forward-looking assumptions, not historical fact.

2. **Mixed currencies** — International operations complicate revenue and cash analysis. Consolidate using consistent exchange rates; flag FX headwinds/tailwinds in risk register.

3. **Financial data not discussed in meetings** — Ask for P&L, cash flow, and unit economics spreadsheets; supplement with available meeting context. Document data gaps.

4. **Sensitive compensation/equity discussions** — Financial conversations sometimes touch on compensation plans, equity grants, or investor terms. Flag for restricted access; do not include in shared summaries.

5. **Rapid growth distorting unit economics** — High growth can mask unit economics problems (e.g., CAC rising, LTV:CAC declining). Conduct cohort-based analysis to identify trends across customer acquisition phases.

---

**Role:** Leadership & Finance
**Action:** Analyze
**Connectors:** Stripe, HubSpot, Salesforce, Google Drive, Notion, Slack
