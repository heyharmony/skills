---
name: "Size Your Market"
description: "Estimate market size using TAM, SAM, and SOM with top-down and bottom-up approaches. Use when sizing a market opportunity, estimating addressable market, preparing for investor pitches, or evaluating market entry. Trigger on: market sizing, TAM SAM SOM, addressable market, market opportunity, market entry."
dependencies: []
author: "Harmony"
version: "1.0.0"
icon: "sparkles"
cover: ""
screenshots: []
category: "Strategy"
---

## Purpose

Estimate the Total Addressable Market (TAM), Serviceable Addressable Market (SAM), and Serviceable Obtainable Market (SOM) for a product or business. Includes both top-down and bottom-up estimation approaches, growth projections, and key assumptions to validate. Grounds estimates in real conversation data — customer interviews, sales calls, investor discussions — wherever available.

## When to Use

- Sizing a new market opportunity before entering
- Preparing market slides for investor pitches or board decks
- Evaluating whether a segment is worth pursuing
- Cross-validating internal assumptions with external data
- After discovery calls or customer interviews that reveal market signals

## Instructions

You are a strategic market analyst specializing in market sizing, opportunity assessment, and growth forecasting.

### Input

Your task is to estimate the market size for **$ARGUMENTS** within the specified market constraints (geography, industry vertical, customer type, etc.).

If the user provides market research, industry reports, financial data, or competitor information, read and analyze them directly. If Harmony conversation data is available — customer interviews, sales calls, investor meetings — extract relevant market signals (willingness to pay, segment size clues, competitive mentions, unmet needs) and incorporate them into the analysis.

Use web search to find current market data, industry reports, and growth projections.

### Analysis Steps (Think Step by Step)

1. **Market Definition**: Define the market boundaries — what problem space, which customer segments, what geography or constraints apply
2. **Conversation Signal Extraction** (if available): Pull pricing signals, segment clues, competitive mentions, and demand indicators from Harmony transcripts and insights
3. **Top-Down Estimation**: Start from total industry size and narrow to the relevant slice
4. **Bottom-Up Estimation**: Build from unit economics (customers x price x frequency) to cross-validate
5. **SAM Scoping**: Identify which portion of TAM is realistically serviceable given product capabilities, channels, and constraints
6. **SOM Estimation**: Estimate achievable share in the next 1-3 years based on competitive position and go-to-market capacity
7. **Growth Projection**: Forecast how TAM, SAM, and SOM may evolve over the next 2-3 years
8. **Assumption Mapping**: Surface the key assumptions underlying each estimate

## Output Format

### Market Definition
- Problem space and customer need
- Geographic and segment boundaries
- Key constraints or scoping decisions

### Conversation Signals (if Harmony data available)
- Relevant signals from customer calls, interviews, or sales conversations
- Cited quotes or insights that inform sizing assumptions

### TAM (Total Addressable Market)
- Top-down estimate with sources and reasoning
- Bottom-up estimate for cross-validation
- Reconciliation of the two approaches
- Current TAM value (annual revenue opportunity)

### SAM (Serviceable Addressable Market)
- Which portion of TAM the product can realistically serve
- Constraints: geography, language, channels, product capabilities, pricing tier
- SAM as percentage of TAM with reasoning

### SOM (Serviceable Obtainable Market)
- Realistic share achievable in 1-3 years
- Basis: competitive position, go-to-market capacity, current traction
- SOM as percentage of SAM with reasoning

### Market Summary

| Metric | Current Estimate | 2-3 Year Projection |
|--------|-----------------|---------------------|
| TAM    |                 |                     |
| SAM    |                 |                     |
| SOM    |                 |                     |

### Growth Drivers & Trends
- Key factors that could expand or contract the market
- Technology, regulatory, demographic, or behavioral shifts
- Emerging segments or adjacent markets

### Key Assumptions & Risks
- Critical assumptions behind each estimate (numbered)
- Confidence level for each (high / medium / low)
- How to validate the most uncertain assumptions
- What would materially change the estimates

## Example

**Input**: "Size the market for AI-powered meeting assistants targeting mid-market B2B companies in North America"

**Output**:

### Market Definition
- Problem space: AI tools that record, transcribe, and extract action items from business meetings
- Geography: North America (US + Canada)
- Segment: Mid-market B2B companies (100-1,000 employees)
- Constraint: SaaS delivery, English-language meetings

### TAM (Total Addressable Market)
**Top-down**: Global meeting technology market valued at $18.3B (2025, Gartner). AI meeting assistant sub-segment ~$4.1B globally. North America represents ~42% → **$1.72B**.

**Bottom-up**: ~85,000 mid-market companies in NA with avg 200 knowledge workers. Assume 60% hold regular meetings. At $15/user/month → 85,000 x 120 users x $180/yr = **$1.84B**.

**Reconciled TAM**: ~$1.7-1.8B annually.

### SAM (Serviceable Addressable Market)
- Product supports English only, integrates with top 5 video platforms
- Targets teams of 50-500 users; excludes enterprises needing on-prem
- SAM: ~35% of TAM → **$600-630M**

### SOM (Serviceable Obtainable Market)
- Year 1-3 target: 2-3% of SAM based on current GTM capacity and brand awareness
- SOM: **$12-19M** annually by Year 3

### Market Summary

| Metric | Current Estimate | 2-3 Year Projection |
|--------|-----------------|---------------------|
| TAM    | $1.75B          | $2.8B               |
| SAM    | $615M           | $1.1B               |
| SOM    | $6M             | $19M                |

### Key Assumptions & Risks
1. Mid-market adoption rate of AI tools at 60% (confidence: medium)
2. Average seat price holds at $15/mo (confidence: medium — downward pressure from free tiers)
3. English-only constraint limits TAM by ~15% (confidence: high)
4. **Validate**: Survey 20 target buyers on willingness to pay and current spend

## Edge Cases

- **Emerging or undefined market**: State that sizing is speculative, use analogous markets as proxies, and flag wide confidence intervals
- **No conversation data available**: Rely on web research and industry reports; note that estimates would sharpen with customer interview data
- **User provides conflicting data**: Present both data points, note the discrepancy, and explain which estimate each supports
- **Very narrow niche**: If bottom-up yields <$50M TAM, flag that the market may be too small for VC-backed growth and suggest adjacent segments to explore

## Best Practices

- Always provide both top-down and bottom-up estimates to triangulate
- Use web search for current industry data, analyst reports, and market benchmarks
- Cite sources for market data — avoid unsupported numbers
- Be explicit about assumptions; label estimates vs. data
- Distinguish between value-based (revenue) and volume-based (users/units) sizing
- Consider currency and purchasing power parity for international markets
- Flag where estimates have wide confidence intervals
- Recommend specific data sources or research to sharpen estimates
- When Harmony conversation data is available, cite specific moments that inform assumptions
