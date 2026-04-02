---
name: "Apply Systems Thinking"
description: "Understand complex problems by mapping all players, incentives, and feedback loops instead of optimizing individual pieces. See second, third, and fourth-order effects before making decisions. Identify leverage points where small changes create outsized impact. Use stocks and flows to understand what accumulates and what moves. Trigger on: strategy decision, product launch, process redesign, conflict resolution, market analysis, organizational change."
dependencies: []
connectors:
  - name: "Google Docs"
    reason: "Diagram systems, map stakeholders, document feedback loops and leverage points"
  - name: "Notion"
    reason: "Create decision logs and hypothesis tracking as you test system changes"
  - name: "Slack"
    reason: "Share system diagrams, gather perspectives from different teams and stakeholders"
  - name: "Linear"
    reason: "Track second and third-order consequences of feature launches or organizational changes"
author: "Harmony"
version: "1.0.0"
icon: "sparkles"
cover: ""
screenshots: []
category: "Strategy"
---

## Purpose

Systems thinking is the practice of seeing interconnected wholes instead of isolated pieces. Most problems we face aren't siloed—they're embedded in networks of cause and effect, where decisions ripple across time and stakeholders. When you optimize one part of a system without understanding the whole, you create unintended consequences. Systems thinking forces you to map all the players involved, understand what incentives drive their behavior, trace how changes propagate, and identify the highest-leverage intervention points. This discipline prevents you from solving a symptom instead of the root cause.

## When to Use

- **Strategic decisions with wide impact**: When you're deciding on pricing, go-to-market motion, or organizational structure, map the system first
- **Resolving persistent conflicts**: When the same problem keeps recurring, the symptom treatment isn't working—map the incentives driving the behavior
- **Designing marketplaces or platforms**: Two-sided networks have complex feedback loops between supply and demand, quality and volume, price and usage
- **Product launch planning**: Before launching a feature, trace what changes for users, competitors, your business, and adjacent products
- **Organizational change or restructuring**: Changing reporting lines, compensation, or processes has ripple effects you can't see without systems analysis
- **Understanding customer behavior**: Why do customers churn? Map the incentives, switching costs, and alternative options—the root cause probably isn't what you think
- **Competitive positioning**: Don't just compare features—map the entire system of how customers, competitors, and complementary products interact

## Instructions

1. **Identify the system boundaries and key players**
   - Define what you're analyzing: a product feature, a market, an organization, a process
   - List all the actors: your company, customers, competitors, suppliers, regulators, partners
   - Map their incentives: what does each player want? Money, status, convenience, control?
   - Note dependencies: who depends on whom? What happens if one player drops out?
   - Draw this as a simple diagram with boxes (players) and arrows (relationships, money flows, information flows)

2. **Define stocks and flows**
   - Stocks are quantities that accumulate: customer base, cash, brand reputation, technical debt
   - Flows are rates at which things move between states: customer acquisition rate, churn rate, hiring rate, defect rate
   - Ask for each stock: what fills it (inflow)? What drains it (outflow)? What's the current level?
   - Example: Customer base stock is filled by acquisition flow, drained by churn flow. Your pricing change affects both flows.
   - Track how your decision changes the flows, not just the stocks

3. **Trace second, third, and fourth-order effects**
   - First-order: direct impact of your decision (you lower price, more people buy)
   - Second-order: consequences of the first-order effect (more people buy, competitors respond with their own price cuts)
   - Third-order: consequences of the second-order effect (price war erodes margins, new entrants exit the market)
   - Fourth-order: long-term structural changes (consolidation happens, one dominant player emerges, innovation slows)
   - Write these out in sequence, not just mentally. Use a timeline if the effects unfold over months or years

4. **Map feedback loops and identify whether they reinforce or balance**
   - Reinforcing loops amplify: more customers → more revenue → more investment → better product → more customers
   - Balancing loops dampen: more customers → more support tickets → slower response time → customer dissatisfaction → fewer customers
   - Example: In a marketplace, more sellers attract more buyers (reinforcing), but poor seller quality repels buyers (balancing)
   - Identify which loops dominate your system: does growth accelerate or plateau?
   - Ask: are we trying to strengthen a reinforcing loop or break a balancing loop that's holding us back?

5. **Find incentive misalignments that create unintended behavior**
   - Incentivize output instead of outcome: you reward sales closed, not customers satisfied; you reward tickets resolved, not problems solved
   - Incentivize short-term instead of long-term: quarterly results over annual impact; personal goals over team goals
   - Create perverse incentives: you want quality, but you measure speed; you want collaboration, but you evaluate individuals
   - Examples: A customer success team incentivized on demo volume will demo to people who don't need the product. An engineering team incentivized on velocity will take shortcuts.
   - Map the incentives and trace what behavior they actually drive

6. **Identify leverage points for intervention**
   - Leverage points are where small changes create disproportionate impact
   - Examples: changing the feedback loop (give customers product reviews faster, they buy more), changing a stock inflow (make signing up 10% easier), changing information flow (show customers what competitors are doing)
   - Test: if we change this one thing, what else changes downstream? High-leverage points create cascades.
   - Avoid the temptation to tweak every variable—focus on the two or three highest-leverage points
   - Often, the highest-leverage intervention is changing the structure of incentives, not adding more features or resources

7. **Test your system understanding with scenarios**
   - Before you act, run "what-if" scenarios: if we do X, what happens to each player in the system?
   - Use interviews or data to validate your assumptions about incentives and behavior
   - Start small: test your intervention at small scale to see if second and third-order effects match your prediction
   - Iterate: if your system model was wrong, update it and test again
   - Document your assumptions so you can measure whether they held true

## Output Format

```
=== SYSTEM ANALYSIS ===

SYSTEM DEFINITION
[One sentence: what system are you analyzing? What's the scope?]

PLAYERS AND INCENTIVES
[Table or list format]
Player: [Name]
Incentive: [What do they want or optimize for?]
Current behavior: [What do they do now?]
Constraints: [What limits their options?]

STOCKS AND FLOWS
[For key metrics: customer base, revenue, product quality, market share]
Stock: [What accumulates?]
Inflow: [What adds to the stock? At what rate?]
Outflow: [What drains the stock? At what rate?]
Net: [Growing, stable, or declining?]

RELATIONSHIPS AND DEPENDENCIES
[Diagram format: Player A → Player B means A depends on B or affects B]

FEEDBACK LOOPS
[List format]
Loop 1: [Reinforcing or Balancing?] [Sequence of causation. What's the effect?]
Loop 2: [Reinforcing or Balancing?] [Sequence of causation. What's the effect?]

SECOND, THIRD, AND FOURTH-ORDER EFFECTS
[Timeline format: If we decide to [action]...]
Immediate (1 month): [First-order effect]
Short-term (3 months): [Second-order effects]
Medium-term (6-12 months): [Third-order effects]
Long-term (2+ years): [Fourth-order effects, structural changes]

INCENTIVE MISALIGNMENTS
[Where are we rewarding the wrong behavior?]
Problem: [What behavior are we trying to encourage?]
Incentive structure: [What are we actually rewarding?]
Unintended consequence: [What behavior actually happens?]

LEVERAGE POINTS
[Ranked by impact]
1. [Change what? Why is this high-leverage?] Impact: [What cascades?]
2. [Change what? Why is this high-leverage?] Impact: [What cascades?]
3. [Change what? Why is this high-leverage?] Impact: [What cascades?]

DECISION
[What are we doing? Which leverage point are we pulling?]
Assumptions we're making: [What has to be true?]
How we'll measure success: [What changes in the system?]
```

## Example

**Company: Velocity Logistics (B2B freight marketplace)**

```
=== SYSTEM ANALYSIS ===

SYSTEM DEFINITION
Analyzing why Velocity's freight matching algorithm improves 10% per quarter but shipper adoption stays flat. Why do happy shipper users stay, but conversion from trial to paid contract stalls?

PLAYERS AND INCENTIVES

Player: Shippers (customers)
Incentive: Lowest freight cost per shipment, reliable delivery, minimal operational burden
Current behavior: Post shipment in Velocity, but also use 5-6 legacy freight brokers simultaneously (insurance against system failure)
Constraints: Switching costs (integrating to Velocity's API takes engineering time), risk aversion (freight is mission-critical)

Player: Carriers (supply side)
Incentive: Fill trucks with high-margin loads, minimize empty miles, collect payment reliably
Current behavior: Operate on 4-5 load boards simultaneously (Velocity + competitors)
Constraints: Limited visibility into load history (can't predict which platform will have best loads)

Player: Velocity team
Incentive: Grow shipper volume, improve matching accuracy, increase carrier adoption
Current behavior: Optimize matching algorithm, add integrations, run marketing campaigns
Constraints: Revenue depends on transaction volume, not margin

Player: Legacy freight brokers
Incentive: Maintain existing shipper relationships, maximize per-shipment revenue, resist automation
Current behavior: Compete on personal relationships and service, don't match Velocity's pricing

Player: Shipping industry regulators
Incentive: Shipper safety, driver safety, fair pricing
Current behavior: Set rules on load details, driver hours, documentation

STOCKS AND FLOWS

Stock: Active shipper accounts
Inflow: Trial signups (100/month), contract conversions (5-10/month)
Outflow: Cancellations (2-3/month, mostly after 60 days of trial)
Net: Growing slowly (30-40 net new per month)
Problem: 90% of trial users churn, even if they use the product multiple times

Stock: Carrier supply (available capacity on the network)
Inflow: New carriers onboarding (20/month)
Outflow: Carriers going inactive (15/month, switching to higher-volume platforms)
Net: Stable but not growing, despite improving algorithm
Problem: Carriers don't stay if they can't find consistent loads

Stock: Average order value (AOV) per shipment
Inflow: Pricing power (match quality improvements, competition reduces over time)
Outflow: Pressure from price-sensitive shippers, margin pressure on carriers
Net: Flat, despite algorithm improvements
Problem: Better matching doesn't increase profitability if volume doesn't follow

RELATIONSHIPS AND DEPENDENCIES

Shippers → Carriers: Need capacity available on Velocity
Carriers → Shippers: Need load visibility (is this the right platform to check?)
Velocity → Shippers: API integrations, pricing, matching quality
Velocity → Carriers: Load visibility, payment reliability
Legacy brokers ← Shippers: Existing relationships, proven service

FEEDBACK LOOPS

Loop 1 [REINFORCING, but weak]: Better matching → Higher margin per load → More carriers attracted → More capacity on platform → Better matching quality.
Why weak? Carriers spread their effort across 5 platforms, so they don't reward Velocity's improvements.

Loop 2 [BALANCING, blocking growth]: More carriers → More capacity → Lower prices to compete → Lower margins → Less investment in product → Carriers look elsewhere.
Currently dominant: Velocity competes on matching quality, not price, but carriers only see price.

Loop 3 [BALANCING, creates churn]: Shipper joins Velocity, tries it → If loads available, uses it regularly → If loads unavailable at the moment, shipper doesn't return → Shipper goes back to legacy broker → Velocity loses touch.
Problem: First-time experience is unreliable (carrier supply is variable).

SECOND, THIRD, AND FOURTH-ORDER EFFECTS
If we decide to: "Build an exclusive carrier program (carriers commit to load Velocity-first, we guarantee minimum load volume)"

Immediate (1 month):
- Exclusive carriers see predictable loads, improve utilization, increase repeat usage
- Shipper experience improves (more capacity reliably available)
- Cost to Velocity increases (volume guarantees, data infrastructure)

Short-term (3 months):
- Exclusive carrier cohort improves margin per load (better utilization → can accept lower per-load fee)
- Shippers convert from trial to paid contracts faster (more reliable experience)
- Competing carriers notice Velocity has better loads, want to join the program
- Legacy brokers respond with their own loyalty programs

Medium-term (6-12 months):
- 30-40% of carrier supply becomes exclusive (the high-volume, reliable carriers)
- Shipper conversion rate doubles (more reliable supply = lower perceived risk)
- Velocity's margins improve due to better utilization (volume ÷ cost goes up)
- But some carriers drop out (don't want the constraint of load-first commitment)

Long-term (2+ years):
- Velocity owns the relationship with premium carriers and large shippers
- Legacy brokers lose scale, consolidate or disappear
- New entrants can't launch at scale (exclusive carrier programs create stickiness)
- Industry shifts from many load boards to one or two dominant platforms (like Uber + Lyft)
- Price becomes less competitive over time (Velocity has market power)

INCENTIVE MISALIGNMENTS

Problem: We want shippers to adopt Velocity as their primary platform
Incentive structure: We charge per transaction, don't penalize multi-boarding
Unintended consequence: Shippers board Velocity but keep legacy brokers as primary, use Velocity only when other platforms are slow

Problem: We want carriers to prefer Velocity, show up frequently
Incentive structure: Carriers have no incentive to specialize (they spread effort across platforms equally)
Unintended consequence: When loads are available on multiple platforms simultaneously, carriers pick the one they happened to check first, not the one with best loads

Problem: We want reliable shipper experience
Incentive structure: Algorithm optimizes for matching speed, not carrier reliability (repeat usage rate)
Unintended consequence: Great matches occasionally, but inconsistency creates shipper distrust. Shipper goes back to brokers with guaranteed capacity

LEVERAGE POINTS
1. [Change the carrier incentive model from per-transaction to committed supply]. Why: Currently carriers have no reason to specialize or prioritize Velocity. Making commitment financially attractive (revenue guarantee) flips their behavior. Impact: Reliable capacity → reliable shipper experience → higher conversion → faster growth
2. [Change shipper onboarding to prioritize high-volume accounts first, not maximizing trial signups]. Why: Trial conversion rate is 5%. High-volume shippers have more volume to test, more likely to hit critical mass faster. Impact: Smaller acquisition funnel, but higher-quality conversion. Revenue grows faster despite fewer total shippers
3. [Create transparent load matching metrics visible to both carriers and shippers]. Why: Both sides don't understand why they match poorly. Transparency creates accountability and incentives for both to optimize. Impact: Carriers double-check loads on Velocity, shippers learn which loads are reliably available

DECISION
We're building an exclusive carrier program (leverage point #1) while focusing trial expansion on high-volume shippers (leverage point #2).

Assumptions we're making:
- Carriers will accept load-first commitments in exchange for volume guarantees
- High-volume shippers have more volume to test and will convert faster than mid-market
- The math works: guaranteed carrier capacity at acceptable rates

How we'll measure success:
- Exclusive carrier cohort grows to 30%+ of supply (within 6 months)
- Shipper conversion rate from trial to paid increases 2x (from 5% to 10%)
- Average carrier utilization on Velocity increases 40%
- Shipper trial-to-paid timeline decreases from 60 days to 30 days
```

## Edge Cases

- **Systems with multiple feedback loops of equal strength**: When reinforcing and balancing loops are equally strong, small changes can tip the system into boom or bust cycles. Test interventions carefully before scaling.

- **Hidden players and incentives**: The most damaging misalignments are the ones you don't see. Customer success teams might have incentives you're unaware of (measured on cost, not outcome), which creates behavior you blame on the product.

- **Lagging indicators and time delays**: Some effects take months or years to show up. Inventory accumulation, culture change, reputation shifts. You can't rely on monthly data to validate your systems model.

- **Systems that resist intervention**: When you pull a leverage point and the system stays the same, you've either misidentified the point or underestimated the strength of the feedback loops holding the current state. Don't assume more force is the answer—rethink the model.

- **Incentive gaming**: When you create a metric or incentive to drive behavior, people optimize the metric, not the outcome. Gamification of sales goals leads to low-quality deals. Gamification of support response time leads to solving tickets without solving problems.

- **Systems with emergent properties**: Some system behaviors emerge from interactions between players and aren't predictable from individual components. Network effects, culture shifts, and market crashes are emergent. Your model should account for surprising outcomes.
