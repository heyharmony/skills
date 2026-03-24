---
name: "Evaluate Pricing Model"
description: "Evaluate your pricing model using willingness-to-pay signals from sales calls, churn conversations, and expansion discussions — assess value metric fit, tier structure, and competitive positioning to find revenue leaks. Trigger on: pricing audit, pricing model, price increase, tier structure, value metric, willingness to pay, pricing review, competitive pricing, are we priced right."
dependencies: []
---

## Purpose

Your customers tell you whether your pricing works in every sales call, churn conversation, and expansion discussion. This skill mines those signals from Harmony to evaluate whether your value metric, tier structure, and price points align with actual willingness to pay. It identifies revenue leaks—underpriced segments, missing tiers, expansion friction—and builds a data-grounded case for pricing changes. Rather than relying on published competitor rates or gut feel, this skill grounds pricing decisions in what your customers actually say about price, value, and whether they'd recommend you or switch.

## When to Use

- **Annual pricing review**: Benchmark your model against customer feedback collected over the past 12 months
- **Preparing a price increase**: Identify which segments can tolerate higher prices and which are price-sensitive
- **Launching a new tier or plan**: Test feature-to-price alignment before committing to a new tier structure
- **Post-acquisition pricing harmonization**: Evaluate whether two customer bases should be on the same pricing model
- **High win rate (>40% conversion)**: Possible signal of underpricing; use this skill to validate
- **Churn spike mentioning price**: Root-cause analysis to distinguish true price sensitivity from value delivery gaps

## Instructions

**Step 1: Mine transcripts for pricing signals**
Search Harmony for conversations where customers discuss pricing, willingness to pay, or budget constraints. Look for:
- Objections: "your pricing is too high," "we can't justify the cost," "it's not in budget"
- Comparisons: "competitor X is $50/seat cheaper," "we're comparing you to Salesforce"
- Expansion conversations: "we need more seats but the cost doubles," "moving up a tier is too expensive"
- Churn reasons: "we found a cheaper alternative," "the ROI isn't there at your price point"
- Upgrade friction: "we'd expand but your next tier has features we don't need"

**Step 2: Categorize signals into pricing dimensions**
Organize signals into five categories to see patterns:
- *Willingness-to-pay ceiling*: Maximum price customers mention they'd pay for your solution
- *Value perception gaps*: Features customers use that they don't think justify the price
- *Competitive anchors*: What customers say competitors charge (not published rates)
- *Expansion triggers*: What prompts them to consider upgrading (growth, new use case, team size)
- *Downgrade patterns*: Feature tiers customers abandon or consolidate into lower-cost plans

**Step 3: Evaluate value metric fit**
Assess whether your pricing scales with the value customers receive:
- *Per-seat*: Does value compound per user? Or do customers hit a "saturation point" where adding seats adds no value?
- *Usage-based*: Can customers predict their usage? Do variable costs deter adoption or enable land-and-expand?
- *Outcome-based*: Can you credibly tie price to customer business outcomes? (rare but high-margin)
- *Flat-fee*: Does it create pricing friction for small customers or leave money on the table from large accounts?

Listen for customers expressing frustration with your current model: "we're only using 30% of seats," "the per-API-call pricing caught us off guard," "we want to pay for what we use, not fixed seats."

**Step 4: Audit tier structure**
Review whether your good-better-best (or current) tier structure enables natural upgrade triggers:
- Are features gated in ways that force upgrades when customers need them, or do they create frustration and churn?
- Is there a "gap" where customers outgrow one tier but the next tier has unneeded features or costs too much more?
- Do expansion conversations reveal a missing mid-market or enterprise tier?
- Can customers clearly articulate which tier fits them, or do they struggle to map features to use cases?

**Step 5: Run competitive pricing comparison (customer-perceived)**
Catalog what customers say they're comparing you to and at what price points. This is more actionable than published competitor rates because it reflects the segments and use cases your customers actually consider. Note:
- Which competitors come up most in conversations?
- What price points do customers reference (per-seat, per-month, total cost of ownership)?
- Which segments perceive you as premium vs. competitive vs. underpriced relative to alternatives?

**Step 6: Identify red flags**
Flag patterns that suggest pricing misalignment:
- *Conversion >40%*: Possible underpricing signal (also could indicate low qualification, but combined with other signals, suggests ceiling is higher)
- *Unchanged pricing 2+ years*: Market may have moved; not adjusting for inflation or feature expansion leaves money on table
- *Churn citing price*: Distinguish whether it's true price sensitivity or customers outgrowing your solution cheaply
- *Upsell friction*: Expansion conversations ending without upgrade (customers wanted to stay, expansion deal died over price)
- *Feature complaints from lower tiers*: If customers in lower tiers consistently request enterprise features, your tier structure may be misaligned

**Step 7: Model revenue impact of proposed changes**
Build 2–3 scenarios to quantify upside and downside:
- *Scenario A* (conservative): +10% across-the-board price increase, assume 5% churn of price-sensitive segments
- *Scenario B* (tier restructuring): New mid-market tier at $X/month, shift 20% of enterprise accounts, retain 90% of SMB segment
- *Scenario C* (value metric shift): Move from per-seat to usage-based, assume 10–15% increase in average account value post-expansion

For each scenario, estimate: new ARR, cohort-level churn risk, sales cycle impact, and operational lift (billing system changes, customer education, sales enablement).

**Step 8: Build recommendation with stakeholder communication plan**
Synthesize findings into a 1-page recommendation covering:
1. Current pricing health (scorecard from Step 6)
2. Primary finding (e.g., "your per-seat model leaves $500K on the table in the enterprise segment")
3. Proposed change (e.g., "introduce enterprise tier at $10K/month, add usage-based add-on for overages")
4. Revenue impact (from Step 7)
5. Implementation roadmap (which customers to grandfather, how to announce, sales/CS enablement)
6. Customer communication plan (talking points for different segments, timing)

## Output Format

**Pricing Health Scorecard** (5–10 rows)
- Current value metric, tier count, range (low-to-high price)
- Signals detected (count of pricing objections, competitive comparisons, expansion triggers, churn mentions)
- Red flags present (yes/no, which ones)
- Overall health rating (green/yellow/red with reason)

**Signal Evidence Table** (10–20 rows)
- Date, customer segment, signal type, direct quote from transcript, interpretation
- Organize by signal category (willingness-to-pay, value gap, competitive anchor, expansion trigger, downgrade pattern)

**Tier Audit** (current structure + recommendations)
- For each tier: name, feature list, price, unit economics, customer count, avg expansion velocity
- Gaps identified ("enterprise customers outgrow pro tier by 2x seats but jump to custom pricing")
- Recommendation (retain, rename, reprice, or retire tier)

**Competitive Position Map** (informal grid)
- X-axis: price (low ← → high)
- Y-axis: perceived value (low ← → high)
- Plot current position, competitors mentioned by customers, ideal target position
- Annotate with sample customer quotes ("we see you as premium but close to Competitor X's features")

**Revenue Impact Model** (3 scenarios, quantified)
- Scenario name, pricing change, churn assumption, estimated new ARR, confidence level
- Highlight primary recommendation scenario

**Recommendation + Communication Plan** (1 page)
- Executive summary (finding in one sentence)
- Proposed change and rationale (grounded in customer evidence)
- Implementation timeline and customer segmentation (which cohorts to grandfather, which to move to new pricing)
- Sales/CS talking points for each segment
- Success metrics (adoption rate, churn impact, revenue impact 6 months post-launch)

## Example

**Halo Compliance: Pricing Audit for Compliance Automation SaaS**

*Setup*: Mid-market compliance automation SaaS. Current model: per-seat pricing, $500/month starter tier (1–5 seats), $1,500/month professional (6–20 seats), $4,000/month enterprise (20+ seats). ARR ~$2.2M, 110 customers, 35% win rate.

**Pricing Health Scorecard**

| Metric | Finding |
|--------|---------|
| Value Metric | Per-seat (seat expansion is primary growth driver, but plateau at 8–12 seats common) |
| Tier Structure | Good-better-best, but gap between Professional ($1,500) and Enterprise ($4,000) |
| Price Range | $500–$4,000/month; no flexibility for very large deployments (100+ compliance entities) |
| Signals Detected | 18 pricing objections, 7 competitive comparisons, 12 expansion conversations, 4 churn mentions citing price |
| Red Flags | Win rate 35% (slightly elevated), unchanged pricing 3 years, 2 large customers (15+ seats) on negotiated custom deals |
| Health Rating | **Yellow**: Leaving money on table in enterprise; underserving large organizations; expansion friction above 10 seats |

**Signal Evidence Table** (sample)

| Date | Segment | Signal Type | Quote | Interpretation |
|------|---------|-------------|-------|-----------------|
| 2026-01-15 | Mid-market | Pricing Objection | "We're using this for 8 entities across 3 legal teams. Moving from Professional to Enterprise is $2,500/month more—that's $30K annually. We'd need to show ROI to justify it." | Expansion friction at tier boundary; customer willing to pay but feels jump is too steep |
| 2026-01-28 | Enterprise | Competitive Anchor | "OneTrust charges per-entity, not per-user. If we had to pay by user across all our legal and compliance teams, you'd be 3x their cost." | Competitor pricing model (per-entity) resonates for this customer; per-seat pricing misaligned with customer org structure |
| 2026-02-02 | SMB | Expansion Trigger | "We're adding a second legal team. That means more users, but also more entities to track. Would love to stay with you, but I need to check if the Professional tier still makes sense." | Upgrade trigger tied to organizational growth, not just seat count; value metric mismatch |
| 2026-02-10 | Churn | Price Sensitivity | "OneTrust is $8K/year for the scope we need. You're $18K. The feature difference isn't worth 2.25x the cost for us." | Price-sensitive segment; competitor price anchor is 2.25x lower; feature parity perceived as weak |

**Tier Audit**

| Tier | Monthly Price | Max Seats | Key Features | Customer Count | Avg Expansion | Issues |
|------|---------------|-----------|--------------|-----------------|---|----------|
| Starter | $500 | 5 | Basic compliance templates, 1 workflow | 35 | 2–3 seats in year 2 | Most convert to Professional; feels restrictive early |
| Professional | $1,500 | 20 | Advanced templates, 5 workflows, integrations | 65 | 2–5 seats, then stall or churn | Large gap to Enterprise; customers feel trapped |
| Enterprise | $4,000 | Unlimited | Custom workflows, SSO, API, support | 8 | Limited (mostly retained) | Price jump 2.67x; no upsell path; custom deals negotiated |
| **Recommendation** | Introduce **Mid-Market** tier at $2,500/month (21–50 seats) to bridge Professional–Enterprise gap; consider per-entity add-on ($200/entity/month) for enterprises with 50+ compliance entities | — | — | — | — |

**Competitive Position Map**

```
High Value
    ^
    |  OneTrust ⭐
    |     ↑ (perceived as premium + comprehensive)
    |  Halo (current)  Competitor X
    |     ↑ ↑         ↑
    |     |  |        |
    |     |  +─────────┴────→ Low Value
    +────────────────────────→
    Low Price                High Price
```

*Interpretation*: Halo is perceived as comparable value to Competitor X but at premium pricing. OneTrust is premium on both dimensions but has different positioning (per-entity model appeals to large enterprises). Halo's opportunity: add Mid-Market tier to serve expansion phase better, OR shift to per-entity model to compete with OneTrust for enterprise deals.

**Revenue Impact Model**

| Scenario | Change | Assumption | New ARR | 6-Mo Churn Risk | Confidence |
|----------|--------|-----------|---------|-----------------|-----------|
| **A: 10% Increase** | Across-the-board +10% price | 5% of price-sensitive SMB churn | $2.53M (+$330K) | Low | High |
| **B: New Mid-Market Tier** (Recommended) | Add $2,500/month tier, retain all current customers, migrate 20 Professional customers | 90% retention, 15% of Professional segment migrates | $2.68M (+$480K) | Low–Medium | High |
| **C: Per-Entity Model** | Shift to $1,200/month + $200/entity; map current seats to estimated entities | 50% of enterprise upside, 10% SMB churn | $2.55M (+$350K in year 1, higher in year 2) | Medium | Medium |

**Recommendation + Communication Plan**

**Finding**: Halo's per-seat pricing works for SMB/low-mid-market but leaves $400K+ on table in enterprise. Customers with 8+ seats hit expansion friction; large organizations (100+ compliance entities) see Halo as expensive vs. per-entity competitors. Win rate of 35% suggests slight underpricing in competitive deals.

**Proposed Change**: Introduce Mid-Market tier ($2,500/month, 21–50 seats) as bridge between Professional and Enterprise. Rationale: Closes the $1,000/month gap; enables natural upgrade path for growing customers; research shows customers with 15+ seats perceive next tier jump as too steep.

**Implementation Timeline**:
- *Month 1*: Announce to sales; grandfather all current Professional customers for 6 months at current rate
- *Month 2*: Begin new customer/expansion conversations on Mid-Market tier
- *Month 3*: Launch to all customers; CS outreach to Professional customers with 15+ seats (target migration)
- *Month 6*: Evaluate migration rate; adjust positioning if needed

**Customer Segmentation**:
- **Starter customers** (≤5 seats): Grandfather pricing for 6 months; sales should target Professional tier upgrade during renewal
- **Professional customers** (6–20 seats): Grandfather for 6 months; CS to identify accounts with 15+ seats for Mid-Market migration
- **Enterprise customers** (20+ seats): Grandfather custom deals; new enterprise deals quoted at $4,000+ with per-entity add-ons

**Sales Talking Points**:
- *SMB*: "Starter builds compliance muscle; Professional adds team collaboration for growing orgs"
- *Mid-Market*: "Professional works up to ~15 seats; at 20+ seats, Mid-Market tier simplifies billing and gives you dedicated support"
- *Enterprise*: "Enterprise tier unlocks API, SSO, custom workflows. For orgs with 100+ compliance entities, we offer per-entity pricing to align with your structure"

**CS Talking Points**:
- *Upgrade conversation*: "I see you're approaching the limit on your Professional tier. Let's explore Mid-Market—it gives you room to grow without the jump to Enterprise"
- *Churn prevention*: "If pricing is the concern, Mid-Market might bridge the gap. Let's talk about what features matter most, and I'll show you the ROI"

**Success Metrics** (6 months post-launch):
- 50%+ of Professional customers with 15+ seats migrate to Mid-Market
- No net churn from pricing change (any churn offset by new customer revenue)
- Enterprise deals close 10% faster (less negotiation on pricing structure)
- Overall ARR reaches $2.68M+

---

## Edge Cases

**No pricing conversations in data**: If Harmony data contains few explicit pricing discussions, pivot to proxy signals: expansion friction (customers hit tier ceilings but don't upgrade), churn exit interviews mentioning budget, sales pipeline data (win/loss reasons), customer surveys on pricing perception. Complement with sales team interviews.

**Freemium model evaluation**: Adapt the framework: evaluate the conversion funnel (free → paid) rather than tier structure. Look for signals on why free users don't convert (pricing too high, features mismatch, value not realized) vs. why paid users expand or churn. Benchmark conversion rate (2–5% typical) against customer-stated willingness to pay.

**Mid-contract price increase negotiation**: Use this skill to identify which customer segments are least price-sensitive and which are likely to churn on a mid-contract increase. Run the revenue impact model with realistic churn assumptions by cohort. Build communication plan that emphasizes value delivered since deal inception.

**International pricing differences**: If you serve global customers, segment the analysis by geography. Currency fluctuations, local pricing power, and competitive alternatives vary significantly. Run separate pricing audits for EMEA, APAC, and Americas; look for signals that local pricing models are needed.

**Usage-based pricing with unpredictable costs**: If you're considering or have implemented usage-based pricing, listen for customer anxiety in conversations: "We don't know what we'll be charged," "The bill came higher than expected," "We had to shut down integrations to control costs." These signals indicate the need for price ceilings, volume commitments, or hybrid per-seat + usage models to reduce customer anxiety.
