# Evaluate Pricing Model

**Audit your pricing model using customer willingness-to-pay signals from sales calls, churn conversations, and expansion discussions.**

## Quick Start

This skill mines pricing-related conversations in Harmony to evaluate whether your value metric, tier structure, and price points align with actual customer willingness to pay. It identifies revenue leaks—underpriced segments, missing tiers, expansion friction—and builds a data-grounded case for pricing changes.

### When to trigger:
- Annual pricing review
- Preparing a price increase
- Launching a new tier or plan
- Post-acquisition pricing harmonization
- High win rate (possible underpricing signal)
- Churn spike mentioning price

## What It Does

**1. Mines conversations for pricing signals**
Extracts customer objections, competitive comparisons, expansion frustrations, and churn reasons mentioning price from Harmony transcripts.

**2. Categorizes signals into five dimensions**
- Willingness-to-pay ceiling
- Value perception gaps
- Competitive anchors
- Expansion triggers
- Downgrade patterns

**3. Audits your pricing model**
Evaluates value metric fit (per-seat vs. usage vs. outcome), tier structure alignment, and competitive positioning based on what *customers actually say*.

**4. Identifies revenue leaks**
Red flags: conversion >40%, unchanged pricing 2+ years, churn citing price, upsell friction, misaligned tier gating.

**5. Models revenue impact**
Builds 2–3 scenarios (conservative, restructuring, value metric shift) to quantify upside and downside of proposed changes.

**6. Recommends action with stakeholder plan**
Synthesizes findings into an actionable recommendation with implementation timeline and customer communication plan.

## Output

You'll receive:

- **Pricing Health Scorecard**: Current metrics, signals detected, red flags, overall health rating
- **Signal Evidence Table**: Direct quotes from conversations organized by pricing dimension
- **Tier Audit**: Current structure assessment with recommendations to retain, rename, reprice, or retire tiers
- **Competitive Position Map**: Visual positioning vs. competitors based on what customers say
- **Revenue Impact Model**: 3 scenarios with estimated ARR impact and churn risk
- **Recommendation + Communication Plan**: 1-page actionable recommendation with implementation roadmap and talking points for sales/CS

## Example

**Halo Compliance** (compliance automation SaaS, $2.2M ARR, 110 customers):
- **Finding**: Per-seat pricing leaves $400K+ on table in enterprise; customers with 8+ seats hit expansion friction
- **Action**: Introduce Mid-Market tier ($2,500/month) to bridge $1,500–$4,000 gap
- **Impact**: +$480K ARR, 90% retention, no net churn from pricing change
- **Timeline**: Month 1 grandfather, Month 2 sales rollout, Month 3 launch to all customers

## Key Concepts

### Value Metric
How your pricing scales with customer value delivered:
- **Per-seat**: Best when value compounds with team size (true for most collaboration tools)
- **Usage-based**: Best when customer value correlates with API calls, compute, data processed (enables land-and-expand but increases customer anxiety on unpredictability)
- **Outcome-based**: Rare, high-margin (e.g., "% of revenue increase"); hardest to credibly tie to price
- **Flat-fee**: Creates pricing friction for small customers, leaves money on table from large accounts

### Tier Structure
Good-better-best (or custom) alignment with customer segments:
- **Good** for SMB/startups, **Better** for mid-market/growth-stage, **Best** for enterprise
- Feature gating should force upgrades when customers need them, not create frustration and churn
- Natural "expansion triggers" let customers upgrade when they've outgrown the current tier

### Red Flags
- **Conversion >40%**: Possible underpricing (also could indicate low qualification, but combined with other signals)
- **Unchanged pricing 2+ years**: Market has moved; leaves money on table
- **Churn citing price**: Distinguish true price sensitivity from value delivery gaps
- **Upsell friction**: Expansion conversations ending without upgrade (customers wanted to stay, deal died over price)
- **Feature complaints from lower tiers**: Tier structure misaligned with customer needs

## How It Works With Harmony

This skill leverages Harmony's ability to capture pricing discussions across your entire business—not just sales calls, but customer success check-ins, churn conversations, and even slack/email threads. Instead of relying on published competitor rates or quarterly surveys, you ground pricing decisions in what customers *actually say* about price, value, and willingness to pay.

**Typical workflow**:
1. Run this skill with Harmony as data source
2. Skill mines transcripts for pricing signals (objections, comparisons, expansion friction, churn reasons)
3. You receive a comprehensive pricing audit with evidence, red flags, and scenarios
4. Use recommendation to build your board deck, pricing strategy docs, or sales enablement
5. Implement with talking points and communication plan provided

## Use Cases

### Annual Pricing Review
Benchmark your model against 12 months of customer feedback. Identify which segments are underpriced, which are price-sensitive, which are expanding faster than expected.

### Preparing a Price Increase
Identify which segments can tolerate higher prices and which are price-sensitive. Build customer communication plan that emphasizes value delivered since last increase.

### Launching a New Tier
Test feature-to-price alignment before committing. Avoid launching a tier that customers don't want or that creates holes in your tier structure.

### Post-Acquisition Pricing Harmonization
Evaluate whether two customer bases should be on the same pricing model or if acquisition created new customer segments that need different tiers.

### High Win Rate Alert
A 35%+ win rate often signals underpricing. Use this skill to confirm that customers are willing to pay more and identify where to raise prices.

### Churn Spike Root Cause
If you see a churn spike mentioning price, use this skill to distinguish whether it's true price sensitivity (you're overpriced) or value delivery gaps (customers didn't realize ROI).

## Connectors

This skill integrates with:
- **Harmony**: Primary data source for conversation transcripts
- **HubSpot/Salesforce**: Sales pipeline data, win/loss reasons, customer expansion metrics
- **Slack**: Real-time alerts when pricing conversations spike
- **Stripe**: Billing data to cross-reference with pricing audit findings
- **Notion**: Output workspace for storing pricing audit docs and recommendations

## FAQ

**Q: What if we don't have many pricing conversations in Harmony?**
A: Pivot to proxy signals—expansion friction (customers hit tier ceilings), churn exit interviews mentioning budget, sales pipeline data (win/loss reasons), customer surveys on pricing perception. Complement with sales team interviews to fill gaps.

**Q: How often should we run this skill?**
A: Annually for a full audit; quarterly for pulse checks on specific segments (e.g., if you're seeing expansion friction in mid-market, run the skill to monitor that cohort).

**Q: Can we use this for international pricing?**
A: Yes. Segment the analysis by geography—currency, local pricing power, and competitive alternatives vary significantly. Run separate audits for EMEA, APAC, Americas.

**Q: What if we have a freemium model?**
A: Adapt the framework to evaluate the conversion funnel (free → paid) rather than tier structure. Look for signals on why free users don't convert (pricing too high, features mismatch, value not realized) vs. why paid users expand or churn.

**Q: How do we handle usage-based pricing uncertainty?**
A: Listen for customer anxiety in conversations: "We don't know what we'll be charged," "The bill came higher than expected." This signals the need for price ceilings, volume commitments, or hybrid per-seat + usage models to reduce customer anxiety.

## Learn More

- **Source**: Adapted from "pricing-strategy" skill by alirezarezvani/claude-skills
- **Key reference**: Van Westendorp price sensitivity analysis for identifying psychological price points
- **Best practice**: Price elasticity varies by segment—don't apply a uniform price increase across SMB, mid-market, and enterprise

---

**Harmony Pricing Intelligence Skill | Role: Marketing | Action: Analyze**
