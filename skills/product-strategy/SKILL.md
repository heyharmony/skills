---
name: "Build Product Strategy Canvas"
description: "Create a comprehensive product strategy using the 9-section Product Strategy Canvas — vision, segments, costs, value propositions, trade-offs, metrics, growth, capabilities, and defensibility. Use when building a product strategy, creating a strategic plan, or defining product direction. Trigger on: product strategy, strategy canvas, strategic plan, product strategy document, product direction."
dependencies: []
---

## Purpose

Generate a comprehensive product strategy using a 9-section canvas that covers vision, market segments, costs, value propositions, trade-offs, metrics, growth, capabilities, and defensibility. Produces a coherent strategy where every element reinforces the others — plus testable hypotheses and validation experiments. Grounds strategic choices in real conversation data when available.

## When to Use

- Building or revising a product strategy
- Preparing for a strategy offsite or planning cycle
- Defining product direction for a new product or major pivot
- Creating a strategic plan for investors, board, or leadership
- After a round of customer discovery that changes assumptions

## Instructions

You are an experienced product strategist developing a comprehensive product strategy for **$ARGUMENTS**.

### Input

Your task is to create a detailed Product Strategy Canvas that outlines how the product will compete, win, and grow in the market.

If the user provides product descriptions, market data, competitive intel, customer insights, or financial data, read and analyze them directly. If Harmony conversation data is available — customer interviews, sales calls, strategy discussions, investor meetings — extract strategic signals: customer problems, willingness to pay, competitive mentions, unmet needs, and market dynamics.

Use web search to fill gaps in market data, competitive landscape, and industry trends.

### The 9-Section Canvas

Work through each section in order. Ensure every section is consistent with the others — a good strategy is a system, not a list.

**1. Vision**
- How can we inspire people?
- What are we aspiring to achieve?
- What values do we uphold?
- The vision should be ambitious enough to guide 3-5 years of decisions

**2. Market Segments**
- Market defined by people's problems, not demographics
- Jobs to Be Done (JTBD), desired outcomes, constraints
- Who is our first segment? Why this segment first?
- 2-3 segments, prioritized with reasoning

**3. Relative Costs**
- Do we optimize for low cost (like Southwest Airlines)?
- Or do we emphasize unique value (like Starbucks)?
- Cost position relative to competitors
- How does this cost choice shape product decisions?

**4. Value Proposition**
For each target segment:
- **What before**: The customer's current situation, pain, or need
- **How**: How the product delivers the solution
- **What after**: The improved outcome or future state
- **Alternatives**: What customers use today instead

**5. Trade-offs**
- What will we NOT do?
- What features, markets, or segments are explicitly out of scope?
- How does saying "no" create focus and amplify value?
- Which competitor strengths are we deliberately ceding?

**6. Key Metrics**
- **North Star Metric**: Single metric that captures customer value delivered
- **OMTM (One Metric That Matters)**: The one metric to optimize this quarter
- Why these metrics align with the strategy

**7. Growth**
- Sales-Led Growth or Product-Led Growth (or hybrid)?
- Primary acquisition channels
- How do we scale? What are the unit economics?
- Viral, network, or content loops to exploit

**8. Capabilities**
- What competencies and resources do we need to win?
- What do we build vs. buy vs. partner for?
- What capabilities must we develop in the next 12 months?
- Team, technology, and operational requirements

**9. Defensibility (Can't / Won't)**
- Why can't competitors easily copy this?
- Network effects, switching costs, IP, brand, data moats?
- What barriers to entry exist for new competitors?
- How does defensibility strengthen over time?

### Synthesis Steps

After completing the 9 sections:

10. **Coherence Check**: Ensure all elements reinforce each other — vision drives segments, segments drive value props, value props drive metrics, etc.
11. **Critical Hypotheses**: Surface 3-5 things that must be true for this strategy to work
12. **Validation Experiments**: Suggest low-effort experiments to test each hypothesis
13. **Strategy Narrative**: Write a 1-paragraph strategy summary that a team member could recite from memory

## Output Format

### Strategy Summary
One paragraph that captures the entire strategy — readable, memorable, shareable.

### Conversation Signals (if Harmony data available)
- Customer problems and JTBD signals from real conversations
- Competitive mentions and market dynamics heard in calls
- Willingness-to-pay signals and pricing reactions

### 1. Vision
- Aspirational statement (1-2 sentences)
- Values and principles that guide decisions
- 3-5 year north star

### 2. Market Segments

| Segment | JTBD | Desired Outcome | Why Now | Priority |
|---------|------|-----------------|---------|----------|
|         |      |                 |         |          |

- First segment rationale
- Expansion path to subsequent segments

### 3. Relative Costs
- Cost positioning: low-cost leader / premium value / hybrid
- Implications for pricing, features, and go-to-market
- Cost advantages or structural efficiencies

### 4. Value Proposition
*For each segment:*
- **What before** →
- **How** →
- **What after** →
- **Alternatives** →

### 5. Trade-offs
- Explicit "won't do" list with reasoning
- Competitor strengths we deliberately cede
- How these trade-offs sharpen our positioning

### 6. Key Metrics
- **North Star Metric**: [Metric] — [Definition] — [Why it matters]
- **OMTM**: [Metric] — [Definition] — [This quarter's target]
- Alignment: How these metrics reflect the strategy

### 7. Growth
- Growth model: [PLG / SLG / Hybrid]
- Primary channels and acquisition loops
- Unit economics snapshot
- Scaling levers

### 8. Capabilities
- Must-have capabilities (next 12 months)
- Build vs. buy vs. partner decisions
- Team and hiring implications
- Technology bets

### 9. Defensibility
- Primary moat(s)
- How defensibility compounds over time
- Vulnerability assessment: where we're exposed

### Coherence Map
Brief assessment of how the 9 sections reinforce each other. Flag any tensions or inconsistencies.

### Critical Hypotheses

| # | Hypothesis | Confidence | Impact if Wrong |
|---|-----------|------------|-----------------|
| 1 |           |            |                 |
| 2 |           |            |                 |
| 3 |           |            |                 |

### Validation Experiments

| Hypothesis | Experiment | Effort | Signal |
|-----------|-----------|--------|--------|
|           |           |        |        |

## Example

**Input**: "Product strategy for an AI-powered note-taking app targeting product managers at B2B SaaS companies"

**Output** (abbreviated):

### Strategy Summary
We help product managers at B2B SaaS companies turn messy meeting notes into structured product artifacts — PRDs, user stories, decision logs — in minutes instead of hours. We win by being the only note-taking tool that understands product management workflows natively, starting with the underserved mid-market PM segment and expanding to product teams.

### 1. Vision
Eliminate the gap between conversations and product decisions. Every meeting should produce an actionable artifact, not an orphaned doc.

### 2. Market Segments

| Segment | JTBD | Desired Outcome | Why Now | Priority |
|---------|------|-----------------|---------|----------|
| Mid-market PMs (Series A-C SaaS) | Turn meeting notes into product artifacts | Spend less time on docs, more on decisions | AI quality now sufficient; PM tooling fragmented | 1st |
| Product teams (5-15 PMs) | Keep decisions and context accessible | Team alignment without meeting overload | Remote-first teams losing context | 2nd |

### 5. Trade-offs
- **Won't do**: General-purpose note-taking (Notion, Google Docs territory)
- **Won't do**: Project management features (Linear, Jira territory)
- **Won't do**: Enterprise (>500 employees) in Year 1 — compliance and procurement overhead
- **Deliberately cede**: Flexibility to competitors; we trade customization for PM-specific magic

### Critical Hypotheses

| # | Hypothesis | Confidence | Impact if Wrong |
|---|-----------|------------|-----------------|
| 1 | PMs spend 5+ hrs/week turning notes into artifacts | Medium | Core value prop collapses |
| 2 | AI can reliably convert unstructured notes to PRD-quality output | Medium | Product doesn't deliver on promise |
| 3 | PMs will pay $15-25/mo for a specialized tool vs. free alternatives | Low | Business model doesn't work |

### Validation Experiments

| Hypothesis | Experiment | Effort | Signal |
|-----------|-----------|--------|--------|
| PMs spend 5+ hrs/week | Survey 50 PMs + 10 diary studies | 2 weeks | >60% confirm 4+ hrs |
| AI output quality | Prototype with 20 real meeting transcripts, have PMs rate output | 3 weeks | >70% "usable with minor edits" |
| Willingness to pay | Landing page with pricing, measure conversion intent | 1 week | >5% "start trial" click rate |

## Edge Cases

- **Pre-product / idea stage**: Focus on hypothesis generation and validation experiments; mark strategy sections as "to be validated" where data is missing
- **Pivot scenario**: Highlight which canvas sections change and which carry over from the previous strategy
- **Multiple products**: Create one canvas per product; note shared capabilities and potential conflicts
- **No conversation data**: Rely on web research and user input; recommend customer discovery interviews as the highest-priority validation step

## Best Practices

- Strategy is a system — if one section changes, check how it affects the others
- Trade-offs are the hardest section and the most valuable; push for specificity
- Hypotheses should be falsifiable — "customers will love it" is not a hypothesis
- Revisit quarterly as market conditions change
- When Harmony conversation data is available, cite specific moments that informed strategic choices
- A strategy that can't be summarized in one paragraph is probably two strategies
