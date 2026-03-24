---
name: "Evaluate Trade-Offs"
description: "Make trade-offs explicit and visible. Every product decision involves choosing what to optimize for and what to sacrifice. When to use it: During roadmap planning, when teams disagree on priorities, in crisis mode, or when strategy feels misaligned. Trigger on: 'Speed vs. quality', 'This is a trade-off', 'Short-term vs. long-term', 'Scope vs. timeline', 'Do nothing', 'Reversible vs. irreversible'."
dependencies: []
connectors:
  - name: "Notion"
    reason: "Document trade-off decisions, decision matrices, and reasoning for future teams to understand why choices were made"
  - name: "Slack"
    reason: "Async discussion of trade-offs with leadership; surface disagreements and frame them as tradeoff analysis"
  - name: "Google Drive"
    reason: "Create decision matrices and collaborative trade-off analysis with weighted criteria"
---

## Purpose

Every product decision is a trade-off. Speed vs. quality. Scope vs. timeline. Short-term revenue vs. long-term market position. Features vs. technical debt. Growth vs. profitability.

The mistake teams make is pretending there are no trade-offs. They try to optimize for everything: "We want to ship fast AND maintain code quality AND expand to three new markets AND build an API AND improve retention."

You can't. Something gives.

Harmony helps you:
- Make trade-offs explicit and visible to the whole team
- Use decision matrices to evaluate options systematically
- Distinguish reversible from irreversible decisions
- Document reasoning so future teams understand why you chose X over Y
- Resolve disagreements by reframing them as "What are we optimizing for?"

The clarity that comes from naming trade-offs is worth the discomfort of making them.

## When to Use It

- **Roadmap planning**: You have 15 potential projects and capacity for 5. Instead of debating which features matter, ask "What are we optimizing for this year?" and use that to evaluate the tradeoff.
- **Crisis mode**: A production outage, key customer churn, or market shift forces urgent decisions. Explicitly state what you're sacrificing (marketing? New feature launches? Tech debt work?) so teams know the plan and can course-correct.
- **Team disagreement**: Sales wants customer features, engineering wants to pay down tech debt, marketing wants expansion into new markets. Frame as tradeoff: "We're optimizing for [X], so we're saying no to [Y] this quarter. Here's the reasoning."
- **Investment decisions**: Build custom infrastructure or use a vendor solution? Train a custom model or use an API? Evaluate the tradeoff: cost, speed, control, differentiation.
- **One-way door decisions**: Some decisions are nearly impossible to reverse (architecture choice, market exit, pricing model). Invest in analysis. Use tradeoff frameworks to decide deliberately.
- **Two-way door decisions**: Some decisions are easy to reverse (feature flag, launch in one region, beta with select customers). Decide fast. Don't over-analyze.
- **Org structure change**: More centralized or distributed? Specialized or cross-functional? Each has tradeoffs. Name them explicitly so the change isn't a surprise.

## Instructions

1. **Identify the decision you're facing**
   - Name it specifically: "How do we prioritize between paying down technical debt and launching new features?"
   - Avoid vague framing: "What's best for the company?" (too broad)
   - Include context: Who is affected? What's the timeline? What will change?
   - Document: "We have 10 engineering weeks. Do we allocate them to [option A], [option B], or [option C]? We can't do all three."

2. **List all realistic options, including "do nothing"**
   - What are the 2-4 real alternatives?
   - Include "do nothing" as an option—sometimes the best trade-off is accepting the current state
   - Example options: "Launch in US only" vs. "Launch in US + EU simultaneously" vs. "Delay launch 3 months until ready for all regions"
   - Avoid strawman options that are obviously bad—you need real tradeoffs

3. **Define what you're optimizing for**
   - Be honest: What matters most right now?
   - Examples: "We're optimizing for speed to market," "We're optimizing for long-term retention," "We're optimizing for cost," "We're optimizing for differentiation"
   - This is often the crux of disagreement: "You're optimizing for quality, I'm optimizing for speed. Of course we disagree."
   - Once you name the optimization, everything else becomes secondary

4. **Create a decision matrix**
   - List criteria that matter: Speed, cost, risk, learning, long-term differentiation, customer impact, team morale
   - Weight each criterion: 1-5 (where 5 = critical)
   - Score each option against each criterion: 1-5 (where 5 = best)
   - Multiply weight × score to get total
   - The matrix won't tell you what to do, but it makes the tradeoff visible

5. **Distinguish reversible from irreversible decisions**
   - **One-way doors** (nearly impossible to reverse): Architecture choice, market exit, pricing model, major acquisition
   - **Two-way doors** (easy to reverse): Feature launch, hiring decision, process change, tool trial
   - **Amazon principle**: One-way doors deserve extensive analysis. Two-way doors should be decided quickly and corrected if needed.
   - Many teams over-analyze two-way doors and under-analyze one-way doors. Calibrate accordingly.

6. **Evaluate second-order consequences**
   - Option A gets you here. But what does it enable or prevent downstream?
   - Example: Choosing custom infrastructure (instead of vendors) gets you differentiation, but locks your team into maintenance debt for 5 years
   - Example: Acquiring a competitor gets you market share, but your cultures clash and your best people leave
   - Second-order consequences often outweigh first-order benefits

7. **Name what you're sacrificing**
   - If you choose option A, what are you saying no to?
   - Be specific: "We're choosing to launch one region only, which means we're sacrificing EU revenue in 2026" (not "we're saying no to growth")
   - Document the sacrifice so teams understand the cost
   - This also helps you revisit later: "We sacrificed EU. Is it time to reverse that decision?"

8. **Set a time horizon for revisiting**
   - Decisions made for "now" might need changing in 6 months
   - Example: "We're optimizing for speed in Q1 2026 to capture market window. In Q2, we'll optimize for profitability." Make this explicit.
   - Document: "When should we revisit this decision? What would have to change?"
   - This prevents tribal knowledge and reduces "we've always done it this way" inertia

9. **Document the reasoning**
   - Write a 1-2 page memo explaining:
     - The decision, options, and what you chose
     - What you're optimizing for and why
     - What you're sacrificing
     - Timeline for revisiting
     - Key assumptions that would change the decision
   - Archive this so future teams understand the context
   - When someone says "Why did we make that choice?", you have an answer

10. **Communicate the tradeoff and get buy-in**
    - Don't hide the sacrifice: "We chose speed, so quality took a hit. Here's what that means."
    - Address the disappointed party: "Marketing, I know you wanted expansion. Here's why we chose to delay it. Here's when we'll revisit."
    - Build trust by acknowledging the cost, not pretending there isn't one
    - Once the team understands the tradeoff and the reasoning, alignment is much easier

## Output Format

```
# Trade-Off Analysis: [Decision Name]

## The Decision
[What specifically are we deciding?]
[Timeline: When must we decide?]
[Who's affected?]

## Options

### Option A: [Name]
[Description of what this entails]
- Cost: [Financial, time, risk]
- Timeline: [How long to implement?]
- First-order benefit: [What we gain]
- Second-order consequence: [What else changes?]

### Option B: [Name]
[Repeat structure]

### Option C: [Name - Do Nothing]
[Repeat structure]

## What We're Optimizing For
[Be honest about the primary objective]
- Primary: [What matters most?]
- Secondary: [What also matters?]
- Not optimizing for: [What are we explicitly NOT chasing?]

## Decision Matrix

| Criterion | Weight (1-5) | Option A Score | Score | Option B Score | Score | Option C Score | Score |
|-----------|---|---|---|---|---|---|---|
| [Criterion 1] | [Weight] | [1-5] | W×S | [1-5] | W×S | [1-5] | W×S |
| [Criterion 2] | [Weight] | [1-5] | W×S | [1-5] | W×S | [1-5] | W×S |
| **Total** | | | **XX** | | **XX** | | **XX** |

## What We're Choosing
**Decision:** [Option X], because it optimizes for [primary objective] while [secondary objective].

## What We're Sacrificing
- [Sacrifice 1: Concrete impact. When will this hurt? What's the cost?]
- [Sacrifice 2: Concrete impact]
- [Sacrifice 3: Concrete impact]

## One-Way vs. Two-Way Door
This is a [one-way/two-way] door because:
- [If one-way: Why is it hard to reverse?]
- [If two-way: Why can we easily course-correct?]
- [Analysis investment accordingly]

## Timeline to Revisit
[When should we reevaluate this decision?]
[What signals would indicate we chose wrong?]
[What would have to change for us to reverse course?]

## Key Assumptions
[What has to be true for this decision to work?]
- [Assumption 1: Is this true?]
- [Assumption 2: How will we validate?]

## Stakeholder Impact
- **Sales/Revenue team:** [How does this affect them?]
- **Engineering team:** [What's their burden?]
- **Customers:** [Who benefits? Who's disappointed?]
- **Long-term strategy:** [Does this move us toward or away from vision?]

---

## Archive & Reasoning
**Decided on:** [Date]
**Decision owner:** [Who made the call?]
**Context:** [What was happening that made this urgent/important?]
**Revisit date:** [When to reevaluate]
```

## Example

```
# Trade-Off Analysis: Expansion to Tier 2 Markets

## The Decision
Do we launch Braintree's product in Tier 2 markets (Mexico, India, Southeast Asia) in 2026, or continue focusing on Tier 1 (US, UK, EU)?

Timing: Decision needed by March 2026 for Q2 execution
Who's affected: 3-person go-to-market team, sales, customer success, product

## Options

### Option A: Launch in Tier 2 Markets (Mexico, India, SEA)
- Hire country managers in each region
- Build compliance infrastructure and payment integrations
- Launch with localized features (local payment methods, currency, language)
- Timeline: 6 months to first customer
- Cost: $2M in year one (hiring, localization, compliance)
- First-order benefit: 3x TAM expansion; $10M revenue potential by 2027
- Second-order consequence: Engineering must support multiple payment integrations; compliance complexity increases 10x; focus splits across regions

### Option B: Wait 18 Months (Continue US/EU Focus)
- Double down on US and EU markets; build enterprise features
- Achieve higher market penetration in existing regions
- Timeline: No new cost; redeployment of go-to-market team to upsell existing customers
- Cost: Opportunity cost of $10M Tier 2 potential; risk of competitors entering those markets
- First-order benefit: Deeper relationships in core markets; simpler product; higher gross margin
- Second-order consequence: Competitors (Stripe, Wise) may establish dominance in Tier 2 before we enter; slower growth; may reduce future startup credibility in growth markets

### Option C: Partner with Local Players
- Partner with payment aggregators in Tier 2 markets instead of building directly
- Faster time to market; lower cost
- Revenue split with partners
- Timeline: 2 months to first partnership agreement
- Cost: 10-15% of revenue to partners
- First-order benefit: Fast entry, low risk
- Second-order consequence: Less control over customer experience; slower iteration; partner may prioritize their business over ours; scaling is capped by partner capacity

## What We're Optimizing For
- **Primary:** Long-term market dominance in payments infrastructure
- **Secondary:** Reducing risk while scaling
- **Not optimizing for:** Near-term profitability (we'll sacrifice margin to build market position)

## Decision Matrix

| Criterion | Weight (1-5) | Option A Score | Score | Option B Score | Score | Option C Score | Score |
|-----------|---|---|---|---|---|---|---|
| Growth potential | 5 | 5 | **25** | 2 | **10** | 3 | **15** |
| Risk level | 4 | 2 | **8** | 4 | **16** | 4 | **16** |
| Differentiation/moat | 5 | 5 | **25** | 3 | **15** | 1 | **5** |
| Time to revenue | 3 | 2 | **6** | 4 | **12** | 5 | **15** |
| Execution simplicity | 3 | 2 | **6** | 5 | **15** | 4 | **12** |
| **Total** | | | **70** | | **68** | | **63** |

## What We're Choosing
**Decision: Option A (Launch in Tier 2 Markets)**, because it optimizes for long-term market dominance and defensibility, while accepting near-term complexity and risk. The market window is closing—in 18 months, competitors will have established local dominance. Our 3x TAM expansion outweighs the execution complexity.

## What We're Sacrificing
- **Simplicity:** Our product and operations become 10x more complex. Engineering team must support regional payment integrations, compliance, localization.
- **Near-term profitability:** We'll spend $2M to build the foundation. ROI is 18-24 months out.
- **Team stability:** We're hiring rapidly in new regions, recruiting people we've never worked with. Execution risk is high.
- **Focus:** Go-to-market team is split. US/EU motion may slow if we pull top talent to launch new regions.

## One-Way vs. Two-Way Door
This is a **one-way door**:
- Entering a market requires building relationships, compliance, infrastructure. Walking back 12 months later wastes $2M and reputation.
- Competitors will move in and establish dominance if we wait.
- Our current team and code aren't designed for multiple regions—we can't easily spin this down.
- **Decision weight:** This deserves heavy analysis. (And we think we've done it.)

## Timeline to Revisit
**Full review:** Q4 2026 (after 6 months of launch in first market)
**Kill signal:** If revenue from new region is <$100k after 12 months, and partner is not improving, revisit the strategy
**Upgrade signal:** If revenue is tracking above projections in month 6, accelerate entry into fourth region

## Key Assumptions
- **Local payment integrations exist:** We assume we can integrate with UPI (India), local credit systems, etc. True? Yes, we've mapped this with our vendor.
- **We can hire strong country managers:** We assume we can hire or poach good people in these regions. Risk? High—this is a hiring execution problem.
- **Market timing is now:** We assume competitors won't dominate before we enter. If Stripe enters India in Q3 2026, our window closes. We should move fast.
- **Compliance is solvable:** We assume local payment regulations are navigable. We need a compliance partner. Cost and timeline risk here.

## Stakeholder Impact
- **Sales/Revenue team:** Significant change. Split focus between existing customers (upsell) and new regional acquisition. Compensation may need to change.
- **Engineering team:** Heavy burden. Multiple payment integrations, regional compliance, localization. Hire 2 engineers to support this.
- **Customers:** US/EU customers may experience slower feature velocity while we build regional infrastructure. Set expectations.
- **Long-term strategy:** This is a bet on becoming the global payments infrastructure. If we nail it, we 3x the TAM and prevent Stripe/Wise from dominating. If we fail, we've blown $2M and our 2026 roadmap.

---

## Archive & Reasoning
**Decided on:** March 2026
**Decision owner:** CEO + VP Product + VP Engineering
**Context:** Stripe announced entry into India in early 2026. Market window is closing. We can either lead or follow.
**Revisit date:** Q4 2026, or if revenue tracking is off by >30% vs. projections

## Tradeoff Memo (1 year later)
[This section gets filled in when you revisit. Did you make the right call? What changed? What would you do differently?]
```

## Edge Cases

- **Decision matrix says one thing, you feel another**: Trust the feeling. The matrix is incomplete. You're sensing something—team appetite, risk, or context—that isn't captured in the criteria. Adjust the matrix or add criteria. Example: "Engineering is burnt out; we're not adding more complexity this year." That's not in the matrix but it's real.

- **You can't decide because the options seem equally good**: You don't have enough information. Instead of deciding, run an experiment. "Launch in one region as a pilot" (two-way door). Gather data. Then decide on full rollout.

- **One team gains while another loses**: Inevitable. Name it explicitly. Sales wants expansion, engineering wants to stabilize. You choose expansion. "Engineering, here's what that costs you. Here's when we'll come back to technical debt." Honesty builds trust.

- **You discover your optimization is wrong after shipping**: "We optimized for speed and now we're stuck with a crappy codebase." This happens. Acknowledge it. Decide: Do you course-correct now (expensive) or live with it? Document the lesson: "Speed optimization created technical debt. Next time we'll add code quality as a weighted criterion."

- **Stakeholders disagree on what to optimize for**: Sales wants growth, finance wants profitability, founders want market dominance. These are real conflicts. Escalate. The CEO or board has to decide. Frame it as "What matters more this year: [A] or [B]?" Once decided, the tradeoff cascades down.

- **You don't have the data to make a smart decision**: Sometimes you can't. Forecast or guess. Document your assumptions. Plan to revisit quickly. "We're assuming Tier 2 markets will be 20% of TAM. We'll know in 6 months. If they're 5%, we'll pivot."

- **The tradeoff has unexpected political dimensions**: Choosing option A means publicly saying option B isn't a priority. Some people bet their careers on option B. Be kind. Acknowledge the disappointment. Over-communicate the reasoning. Build trust.

- **You realize the decision was already made**: Often, by the time you analyze a decision, you've already committed (hired people, started work). Acknowledge it. Analyze anyway so you understand the tradeoff you made, and document it for the future.
