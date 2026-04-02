---
name: "Define North Star Metric"
description: "Define a North Star Metric and 3-5 supporting input metrics that form a metrics constellation. Classifies the business game (Attention, Transaction, Productivity) and validates against 7 criteria. Use when choosing a North Star Metric, setting up a metrics framework, learning about the North Star Framework, or deciding what to measure. Trigger on: North Star metric, north star, key metric, what to measure, metrics framework, OMTM, input metrics."
dependencies: []
author: "Harmony"
version: "1.0.0"
icon: "sparkles"
cover: ""
screenshots: []
category: "Product"
---

## Purpose

Identify a single North Star Metric (NSM) and 3-5 Input Metrics that form a metrics constellation. Classifies the business game being played, validates the NSM against seven criteria, and defines the leading indicators that teams can directly influence. Grounds metric selection in real product usage and customer conversation signals when available.

## When to Use

- Defining a company's key metric framework
- Setting up a metrics tracking system
- Choosing what to measure and optimize for
- Evaluating potential North Star candidates
- After customer interviews or product reviews that reveal what users truly value

## Domain Context

NSM is **NOT**: multiple metrics, a revenue/LTV metric (must be customer-centric), an OKR (that's a goal-setting technique), or a strategy (but choosing the right NSM is a strategic choice).

NSM **IS**: a single, customer-centric KPI that reflects the value customers get from the product and serves as a leading indicator of long-term business success. You can use Key Results (OKRs) to express expected change in NSM.

Free resource: [The North Star Framework 101 (PDF)](https://learn.productcompass.pm/nsm101)

## The Three Business Games

Before identifying a North Star, classify the business:

| Game | Core Question | Examples |
|------|--------------|----------|
| **Attention** | How much time do customers spend using the product? | Facebook, Spotify, YouTube, TikTok |
| **Transaction** | How many transactions occur on the platform? | Amazon, Uber, Airbnb, PayPal |
| **Productivity** | How efficiently can someone complete their work? | Canva, Dropbox, Loom, Notion |

## Instructions

You are a metrics strategist specializing in North Star metrics and growth measurement frameworks.

### Input

Given the following business context: **$ARGUMENTS**

If the user provides product data, usage metrics, or customer feedback, analyze them directly. If Harmony conversation data is available — customer interviews, onboarding calls, product reviews — extract signals about what users value most, their "aha moments," and the outcomes they care about.

### Analysis Steps (Think Step by Step)

**Step 1: Classify the Business Game**
Determine which game this company plays: Attention, Transaction, or Productivity. Explain the reasoning — some businesses straddle two games, so identify the primary one.

**Step 2: Identify the North Star Metric**
Suggest a single metric that meets all seven criteria:

1. **Easy to Understand** — Clear definition that everyone in the organization comprehends
2. **Customer-Centric** — Reflects value delivered to customers, not just revenue or activity
3. **Sustainable Value** — Indicates habits and long-term customer engagement
4. **Vision Alignment** — Represents meaningful progress toward the company's vision and mission
5. **Quantitative** — Measurable with clear, numeric tracking
6. **Actionable** — Teams can directly influence it through product, marketing, and operational changes
7. **Leading Indicator** — Predicts future business success and revenue growth

**Step 3: Identify Input Metrics**
Define 3-5 Input Metrics (leading indicators) that most directly drive the North Star. Each input metric should:
- Be easier to move in the short term
- Directly contribute to the North Star outcome
- Map to a team or function that owns it
- Help identify where optimization efforts should focus

**Step 4: Validate & Stress-Test**
- Check: does the NSM pass all 7 criteria?
- Check: could optimizing the NSM hurt the business? (Goodhart's Law)
- Check: do the Input Metrics collectively explain movement in the NSM?

## Output Format

### Business Game Classification
- Game: [Attention / Transaction / Productivity]
- Reasoning: Why this classification fits
- Secondary game (if applicable): When the business straddles two games

### Conversation Signals (if Harmony data available)
- What customers describe as the core value they get
- "Aha moment" signals from onboarding or product calls
- Outcomes customers mention caring about most

### North Star Metric

**Metric**: [Metric name]
**Definition**: [Precise, measurable definition — no ambiguity]
**Measurement**: [How to calculate it, what data sources, cadence]

**Criteria Validation**:

| Criterion | Pass? | Reasoning |
|-----------|-------|-----------|
| Easy to Understand | | |
| Customer-Centric | | |
| Sustainable Value | | |
| Vision Alignment | | |
| Quantitative | | |
| Actionable | | |
| Leading Indicator | | |

### Input Metrics (Metrics Constellation)

For each input metric:

**[Input Metric Name]**
- Definition: What it measures and how
- Why it matters: How it drives the North Star
- Owner: Which team or function owns this metric
- Levers: What actions move this metric

### Metrics Constellation Map

```
         [North Star Metric]
        /    |    |     \
  [Input 1] [Input 2] [Input 3] [Input 4]
```

### Stress Test
- **Goodhart's Law check**: Could teams game this metric in harmful ways? Mitigations?
- **Coverage check**: Do the input metrics collectively explain most NSM movement?
- **Lagging vs. leading**: Is the NSM truly a leading indicator of revenue?
- **Alternative candidates**: 1-2 other NSM candidates considered and why this one was chosen

### Recommended Next Steps
- How to start tracking the NSM and input metrics
- Suggested review cadence (weekly / monthly)
- Key experiments to validate the metric choice

## Example

**Input**: "We're building a B2B SaaS product that helps sales teams record and analyze their calls to improve close rates. We have 200 paying teams."

**Output**:

### Business Game Classification
- **Game**: Productivity
- **Reasoning**: The core value is helping sales reps close more deals, faster. Customers pay for efficiency and outcomes, not time spent in the product.

### North Star Metric

**Metric**: Weekly Calls Analyzed per Active Team
**Definition**: Number of sales calls that are recorded, transcribed, and reviewed (>30 seconds of playback or summary viewed) per paying team per week.
**Measurement**: Count of calls where at least one team member viewed the analysis, aggregated weekly per team.

| Criterion | Pass? | Reasoning |
|-----------|-------|-----------|
| Easy to Understand | Yes | "How many calls does each team actually analyze per week?" — clear to everyone |
| Customer-Centric | Yes | Reflects value received — analyzing calls is the core product value |
| Sustainable Value | Yes | Teams that analyze more calls build coaching habits and improve over time |
| Vision Alignment | Yes | Company vision: "every sales conversation makes the next one better" |
| Quantitative | Yes | Discrete count, measurable weekly |
| Actionable | Yes | Product (UX), marketing (activation), CS (onboarding) can all influence it |
| Leading Indicator | Yes | Teams analyzing 10+ calls/week retain at 95% vs. 60% for <3 calls/week |

### Input Metrics

**1. Calls Recorded per Team per Week**
- Definition: Number of calls successfully recorded and transcribed
- Why: Can't analyze what you don't capture — this is the top of the funnel
- Owner: Product (integrations, recording reliability)
- Levers: Integration setup, auto-record settings, meeting bot reliability

**2. Analysis View Rate**
- Definition: % of recorded calls where at least one team member views the summary or playback
- Why: Bridges capture to value — recorded but unviewed calls deliver zero value
- Owner: Product (notifications, UX), Customer Success (adoption)
- Levers: Email digests, Slack notifications, homepage feed design

**3. Team Activation Rate**
- Definition: % of new teams that analyze 5+ calls in their first 14 days
- Why: Early habit formation predicts long-term retention
- Owner: Growth, Customer Success
- Levers: Onboarding flow, setup wizard, first-call experience

**4. Insight Action Rate**
- Definition: % of analyzed calls where a user takes an action (creates task, shares clip, adds to CRM)
- Why: Actions downstream of analysis confirm the insight was valuable
- Owner: Product
- Levers: One-click actions, CRM integrations, sharing UX

### Stress Test
- **Goodhart's Law**: Teams could "analyze" calls by opening and immediately closing — mitigate with a minimum engagement threshold (>30s view time)
- **Coverage**: Input metrics 1-4 map the full funnel: capture → view → activate → act
- **Leading indicator**: Correlation with NRR confirmed — teams above median analysis rate have 2.1x higher expansion revenue

## Edge Cases

- **Pre-launch or pre-revenue product**: Focus on engagement-based NSM candidates; note that the metric may evolve post-PMF
- **Marketplace or two-sided business**: Consider separate NSMs for supply and demand sides, but recommend one primary NSM that captures the transaction between them
- **User provides revenue metrics as candidates**: Explain why revenue is typically a lagging indicator and redirect to customer-value metrics while noting revenue as a validation metric
- **Multiple products or business units**: Recommend a single company-level NSM with product-level input metrics; flag if the products are too different for one NSM

## Tips for Best Results

- Provide details about your business model and revenue model
- Share your company's vision, mission, or long-term goals
- Include current metrics you're tracking
- Mention key customer segments and use cases
- Describe the primary value you deliver to customers
- Point to Harmony conversations (customer interviews, onboarding calls) for grounded signals about what users value
