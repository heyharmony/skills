---
name: "Map Business Model Canvas"
description: "Generate a Business Model Canvas with all 9 building blocks — partners, activities, resources, value propositions, relationships, channels, segments, costs, and revenue. Use when creating a business model, documenting how a business creates value, or analyzing an existing business model. Trigger on: business model canvas, BMC, business model, how we make money, revenue model, value creation."
dependencies: []
author: "Harmony"
version: "1.0.0"
icon: "sparkles"
cover: ""
screenshots: []
category: "Strategy"
---

## Purpose

Generate a comprehensive Business Model Canvas covering all 9 building blocks that explains how a business creates, delivers, and captures value. Produces a structured, internally consistent model with financial viability checks and testable assumptions. Grounds the canvas in real conversation data — customer interviews, sales calls, investor discussions — when available through Harmony.

## When to Use

- Creating a business model for a new product or venture
- Documenting how an existing business creates value
- Preparing business model slides for investors or board
- Analyzing a competitor's or partner's business model
- After customer discovery calls that reveal willingness to pay, channel preferences, or relationship expectations

## Instructions

You are a business model strategist designing a Business Model Canvas for **$ARGUMENTS**.

### Input

Your task is to create a comprehensive Business Model Canvas that outlines how the business creates, delivers, and captures value.

If the user provides product descriptions, market data, financial projections, or competitive context, read and analyze them directly. If Harmony conversation data is available — customer interviews, sales calls, pricing discussions, partnership conversations — extract signals about willingness to pay, preferred channels, relationship expectations, cost sensitivities, and partnership opportunities.

Use web search to fill gaps in market data, pricing benchmarks, and competitive business models.

### Analysis Steps (Think Step by Step)

Work through the canvas in this order — right side (customer-facing) first, then left side (operational), then bottom (financial):

1. **Customer Segments**: Who are we creating value for? Define segments by problems, not demographics
2. **Value Propositions**: What value do we deliver to each segment?
3. **Channels**: How do customers discover, evaluate, purchase, and receive value?
4. **Customer Relationships**: How do we establish, maintain, and grow relationships?
5. **Revenue Streams**: How does each segment pay, and how much?
6. **Key Resources**: What assets are essential to make this model work?
7. **Key Activities**: What must we do exceptionally well?
8. **Key Partners**: Who do we need to work with?
9. **Cost Structure**: What are the major cost drivers?
10. **Viability Check**: Does LTV > 3x CAC? Do unit economics work at scale?
11. **Assumption Mapping**: What must be true for this model to succeed?

## Output Format

### Canvas Overview
One paragraph summarizing how the business model works end-to-end — how value flows from creation through delivery to capture.

### Conversation Signals (if Harmony data available)
- Willingness-to-pay signals from pricing discussions or sales calls
- Channel preferences expressed by customers
- Relationship expectations (self-serve vs. high-touch)
- Cost sensitivities or budget constraints mentioned
- Partnership or integration requests from conversations

---

### Right Side: Delivering Value

#### 7. Customer Segments
- Primary segments defined by problems and needs
- Segment characteristics and constraints
- Segment sizing (if data available)
- Model type: mass market / niche / segmented / multi-sided platform

#### 4. Value Propositions
*For each segment:*
- What value do we deliver?
- Which customer problems do we solve?
- What needs are satisfied?
- Quantitative value (price, speed, quality) vs. qualitative value (design, experience, status)

#### 6. Channels

| Stage | Channel | Owned/Partner |
|-------|---------|---------------|
| Awareness | | |
| Evaluation | | |
| Purchase | | |
| Delivery | | |
| After-sales | | |

#### 5. Customer Relationships
- Relationship type per segment: personal assistance / self-service / automated / community / co-creation
- Acquisition approach
- Retention mechanisms
- Expansion and upsell strategy

---

### Center: The Value Proposition

#### 4. Value Propositions (Detail)
- Product/service bundles per segment
- Key differentiators vs. alternatives
- Value hierarchy: must-have → nice-to-have → delight

---

### Left Side: Creating Value

#### 8. Key Partners
- Strategic partners and their role in the model
- Supplier relationships
- Activities handled by partners vs. in-house
- Joint ventures or co-creation opportunities
- Partnership risks and dependencies

#### 7. Key Activities
- Critical activities to deliver value
- Production / problem-solving / platform activities
- In-house vs. outsourced decisions
- Activities that must be done exceptionally well to win

#### 6. Key Resources
- Physical assets
- Intellectual property and data
- Human capital and expertise
- Financial resources
- Minimum viable resource set to operate

---

### Bottom: Financial Viability

#### 8. Cost Structure

| Cost Category | Fixed/Variable | Estimate | Driver |
|--------------|---------------|----------|--------|
|              |               |          |        |

- Cost-driven or value-driven model?
- Economies of scale or scope?
- Major cost optimization levers

#### 9. Revenue Streams

| Segment | Revenue Model | Pricing | Mechanism |
|---------|--------------|---------|-----------|
|         |              |         |           |

- Revenue models: subscription / transaction / licensing / freemium / advertising / marketplace take-rate
- Pricing mechanisms: fixed / dynamic / value-based / tiered
- Unit economics snapshot:
  - Customer Acquisition Cost (CAC)
  - Customer Lifetime Value (LTV)
  - LTV:CAC ratio
  - Payback period
  - Gross margin

---

### Viability Assessment
- Does LTV > 3x CAC?
- Are unit economics positive at current scale? At 10x scale?
- What's the path to break-even?
- Where are the biggest financial risks?

### Canvas Alignment Check
Brief assessment of how the 9 blocks reinforce each other. Flag tensions — e.g., high-touch relationships with low-price revenue streams, or premium value propositions with cost-driven structures.

### Key Assumptions & Risks

| # | Assumption | Block(s) | Confidence | What Breaks if Wrong |
|---|-----------|----------|------------|---------------------|
| 1 |           |          |            |                     |
| 2 |           |          |            |                     |
| 3 |           |          |            |                     |

### Recommended Validations
- Highest-risk assumptions to test first
- Suggested experiments or data to gather
- Conversations to have (customer, partner, investor)

## Example

**Input**: "Business model canvas for a B2B SaaS platform that helps recruiting teams screen candidates with AI-powered video interviews"

**Output** (abbreviated):

### Canvas Overview
Recruiting teams upload job requirements and receive AI-scored video interview assessments. The platform replaces the first-round phone screen, saving recruiters 10+ hours per week. Revenue comes from per-seat subscriptions with usage-based overage for high-volume hiring. Key partners include ATS integrations (Greenhouse, Lever) and video infrastructure providers.

### 7. Customer Segments
- **Primary**: In-house recruiting teams at companies with 200-2,000 employees hiring 50+ roles/year
- **Secondary**: Staffing agencies managing high-volume screening for clients
- Model: Segmented — same core product, different packaging and pricing per segment

### 4. Value Propositions
**For in-house recruiters**:
- Screen 5x more candidates in the same time
- Standardized, bias-reduced first-round assessments
- Candidates complete interviews on their schedule (async)
- Every screening decision traced to specific response data

### 6. Channels

| Stage | Channel | Owned/Partner |
|-------|---------|---------------|
| Awareness | Content marketing, HR conferences, G2 reviews | Owned |
| Evaluation | Free trial, demo calls, case studies | Owned |
| Purchase | Self-serve (SMB), sales-assisted (mid-market) | Owned |
| Delivery | Web app, ATS integration | Owned + Partner |
| After-sales | In-app support, CSM for paid tiers | Owned |

### 9. Revenue Streams

| Segment | Revenue Model | Pricing | Mechanism |
|---------|--------------|---------|-----------|
| In-house teams | Per-seat subscription | $149/recruiter/mo | Annual contract, monthly billing |
| Staffing agencies | Platform + usage | $99/seat/mo + $5/interview over 200 | Annual contract |

- LTV (in-house): $149 x 5 seats x 24 months = $17,880
- CAC: ~$3,500 (blended content + sales)
- LTV:CAC = 5.1x
- Payback: ~4.7 months

### Key Assumptions & Risks

| # | Assumption | Block(s) | Confidence | What Breaks if Wrong |
|---|-----------|----------|------------|---------------------|
| 1 | AI scoring is accurate enough to replace human phone screens | Value Prop | Medium | Core value prop fails; becomes a recording tool, not a screening tool |
| 2 | Recruiters adopt async video (candidates willing to record) | Channels, Segments | Medium | Low completion rates kill the funnel |
| 3 | ATS integrations drive >40% of new sign-ups | Partners, Channels | Low | Need to invest heavily in direct acquisition |

## Domain Context

### Business Model Canvas vs. Lean Canvas vs. Startup Canvas

**Business Model Canvas** (Strategyzer, Alexander Osterwalder) is the most widely used canvas framework. It provides a balanced, holistic view of how value flows through an organization. Known limitations for product strategy:

- **No vision**: Doesn't address why the team is motivated or what the company aspires to
- **No defensibility test**: Key Resources hint at moats but don't force a "Can't/Won't copy" analysis
- **No trade-offs**: What you choose NOT to do creates focus — BMC doesn't capture this
- **No key metrics**: How do you know the model is working? BMC has no metrics section
- **Low-value for startups**: Key Partnerships and Key Resources are often sparse for early-stage companies

**When to use BMC**: Established businesses, corporate strategy, investor materials where you need to show how all operational pieces connect. Best for businesses past product-market fit.

**Alternatives**:
- **Lean Canvas** (Ash Maurya): Replaces Partners/Activities/Resources with Problem/Solution/Unfair Advantage. Better for hypothesis testing and early-stage startups.
- **Startup Canvas** (Pawel Huryn): Separates strategy (9 sections from the Product Strategy Canvas) from business model (Cost Structure + Revenue Streams). Recommended for new products where strategic clarity matters as much as the business model.

Consider pairing this skill with the **Product Strategy Canvas** skill for a complete strategy + business model view.

## Edge Cases

- **Pre-revenue or pre-launch**: Mark revenue streams and cost structure as projections; focus on assumptions that need validation before investing
- **Marketplace or multi-sided platform**: Create explicit value propositions, channels, and revenue streams for each side of the marketplace
- **Pivoting business**: Show the current canvas and the proposed canvas side-by-side; highlight which blocks change and which carry over
- **No conversation data available**: Rely on user input and web research; recommend customer interviews to validate willingness to pay, channel preferences, and relationship expectations

## Best Practices

- Start with the customer (right side), not the operations (left side)
- Every block should reinforce the others — if you change one, check the impact on adjacent blocks
- Revenue must exceed costs at scale; check unit economics early
- The strongest canvases have clear, defensible value propositions at the center
- When Harmony conversation data is available, cite specific moments that inform pricing, channel, or relationship decisions
- Use this alongside the Product Strategy Canvas for a complete strategic + operational view
- Revisit when the business model changes — new segments, pricing shifts, or channel pivots
