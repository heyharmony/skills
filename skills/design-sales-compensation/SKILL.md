---
name: "Design Sales Compensation"
description: "Build comp plans that drive revenue and retention without destroying culture through complexity or misaligned incentives. Account for base, commission, accelerators, SPIFs, territory fairness, clawback, and team dynamics. When to use it: hiring first sales reps, scaling sales team, experiencing unintended sales behaviors, comp plan review cycle. Trigger on: 'comp plan', 'commission structure', 'sales compensation', 'quota', 'OTE', 'accelerator'."
dependencies: []
connectors:
  - name: "Notion"
    reason: "Store comp plan documentation, quota assignments, and commission tracking for transparency"
  - name: "Salesforce"
    reason: "Integrate quota and actual revenue to calculate commissions and track ramp progress"
author: "Harmony"
version: "1.0.0"
icon: "sparkles"
cover: ""
screenshots: []
category: "Sales"
---

## Purpose

Comp plans drive behavior more than anything you say in a speech. If you reward the wrong metrics, you get the wrong outcomes. This skill teaches you to:

- **Design base/variable split** — 50/50 for AEs, 60/40 for SDRs (standard; adjust for market conditions)
- **Set OTE at market rate** — On-Target Earnings should reflect geography, deal size, and stage of company
- **Build realistic quotas** — 60-70% of reps should hit quota; if everyone hits, it's too low; if nobody hits, it's too high
- **Use accelerators to reward top performers** — 1.5-2x commission rate above quota; keeps high performers from capping
- **Deploy SPIFs strategically** — Special incentives for new product adoption, multi-year deals, or strategic expansions
- **Keep plans simple** — If reps can't calculate their commission in their head, the plan is too complex
- **Include clawback provisions** — If a customer churns in first 90 days, sales rep loses some commission (aligns with CS)
- **Avoid mid-year changes** — Comp plan changes destroy trust; lock it in for the year

Compensation is the fastest way to align behavior. Get it right upfront.

## When to Use This Skill

- **Hiring your first sales rep** — You need a comp plan before you hire; don't figure it out after
- **Scaling from 2 to 5+ reps** — Team dynamics change; territory fairness becomes critical
- **Experiencing unintended sales behaviors** — Reps chasing big deals instead of closing small ones? Comp is misaligned
- **Reviewing comp at year-end** — Time to evaluate what worked, what didn't, and plan for next year
- **Entering new market or geography** — Market rates change; OTE may need adjustment
- **Launching new product line** — You want salespeople to sell the new product; use SPIF to drive adoption
- **High churn or customer dissatisfaction** — If clawback isn't in place, reps don't care about retention

## Instructions

1. **Establish base salary + commission split**
   - **For Account Executives:** 50% base / 50% commission is the standard at early stage
     - Example: $100K base = $100K target commission at 100% quota = $200K OTE
     - Variation: 60/40 for very early-stage startups (more security for new reps); 40/60 for mature scaling (more upside)
   - **For SDRs:** 60% base / 40% commission (SDR roles are more pipeline, less closing, so more security needed)
     - Example: $50K base = $20K target bonus at 100% of metrics = $70K OTE
   - **For Sales Manager/Player-Coach:** 70% base / 30% commission (they're managing + closing; need salary security)
   - **Rationale:** Base ensures reps can pay bills and aren't desperate; variable aligns incentives with company success
   - Avoid: All base (no incentive alignment) or all commission (too risky, reps won't join you)

2. **Set OTE (On-Target Earnings) at market rate**
   - OTE = base salary + commission at 100% quota
   - Research market rates for your geography and deal size (use salary surveys like Radford, Comp.ly, or internal surveys)
   - Early-stage startup ($1-10M ARR): AE OTE = $100-130K | SDR OTE = $60-80K
   - Scaling startup ($10-50M ARR): AE OTE = $150-200K | SDR OTE = $80-120K
   - If you pay below market, you'll lose reps to better opportunities; if you pay above market, your unit economics suffer
   - Adjust for: geography (SF Bay = +20% vs. Austin), deal size (enterprise AEs paid more than SMB AEs), and experience (first-time AE paid less than 10-year veteran)

3. **Calculate quota based on revenue target divided by rep**
   - **Formula:** Annual company revenue target ÷ # of reps = Average quota per rep
   - **Example:** $1M ARR target ÷ 2 AEs = $500K quota each
   - **Adjustment:** Not all reps are equal; adjust for territory, tenure, and expected ramp
     - New rep: 60-70% of mature rep quota (ramp year 1)
     - Mature rep: 100% quota
     - Top performer: 100% quota (accelerators reward exceeding quota, not reduced quota)
   - **Validation:** Quota should be 4-5x the rep's OTE
     - Example: $135K OTE × 4.5 = $607.5K quota (reasonable for SMB AE)
   - **Sanity check:** Can 60-70% of your reps realistically hit quota? If everyone hits, quota is too low; if nobody hits, it's too high

4. **Design commission structure by quota tier**
   - **Below 75% of quota:** 0% commission (no commission in ramp; they get base salary)
     - Rationale: New rep should focus on learning, not closing under pressure for small deals
   - **75-100% of quota:** 1% of revenue (standard commission rate)
     - Example: Rep closes $500K at quota → $5K commission (1% of base salary, roughly)
   - **100-150% of quota:** 1.5% of revenue (accelerator for overperformance)
     - Example: Rep closes $600K (120% of quota) → $9K commission on overages, not just flat 1%
     - Accelerators keep top performers motivated; prevents "I hit quota, now I'm coasting"
   - **150%+ of quota:** 2% of revenue (double rate for top performers)
   - **Simplified alternative (if reps resist complexity):** Flat 2% commission above quota, 1% below (easier to calculate, still rewarding)

5. **Add accelerators for strategic outcomes**
   - **Accelerators above quota** (automatically built into structure above)
   - **SPIFs (Special Performance Incentive Funds)** — One-time bonuses for specific behaviors
     - New product adoption: "Close 3 deals with Product X by year-end → $5K bonus per deal"
     - Multi-year contracts: "Sell 3-year deal instead of 1-year → +$10K bonus on deal"
     - Cross-sell/upsell: "Expand existing customer by $50K → $5K bonus"
     - Strategic accounts: "Close [strategic customer name] → $25K bonus"
   - Rationale: Accelerators focus effort on high-leverage outcomes without changing the base plan
   - Limitation: SPIFs should be temporary (1-2 quarters); permanent SPIFs become expected and lose impact

6. **Set territory and quota assignments with fairness in mind**
   - **Avoid:** One rep gets easier territory (bigger companies or warmer intros) and higher quota unfairly
   - **Method:** Assess territory by opportunity size (TAM, qualified leads, deal size potential)
     - Territory A: $2M TAM, avg deal $30K → Quota $500K (16-17 deals/year)
     - Territory B: $1M TAM, avg deal $15K → Quota $250K (16-17 deals/year)
   - **Alternative:** Sales cycle-based quotas
     - If some reps sell SMB (3-week cycle) and others sell mid-market (8-week cycle), adjust quota to reflect realistic annual capacity
   - **Adjustment:** Account for ramp (new rep gets 70% of mature rep quota in year 1)
   - **Communication:** Be transparent about why quotas differ; if reps feel quotas are unfair, morale tanks

7. **Include clawback provisions for customer retention alignment**
   - **Standard clawback:** If customer churns within 90 days of close, sales rep loses 50% of commission
   - Rationale: Aligns sales (close good customers) with CS (keep them happy)
   - Alternative: 30-day clawback (stricter) or 180-day (more lenient)
   - Document: Make clear which customers count toward clawback (usually net-new customers, not expansions)
   - Example: Rep closes $10K deal, earns $100 commission; customer churns on day 45 → rep loses $50

8. **Add team bonus for collaboration (optional but recommended)**
   - **Team bonus:** If whole team hits a combined target, everyone gets a bonus
   - Example: "If combined team closes $1M ARR, each rep gets $10K bonus"
   - Rationale: Prevents zero-sum competition where one rep's success is another's loss
   - Keeps: Individual commission (rewards individual effort) + team bonus (rewards collaboration)
   - Typical: Team bonus is 5-10% of individual OTE, paid if team hits 90%+ of combined target

9. **Keep the plan simple and transparent**
   - **Test:** Can a rep calculate their commission for a $50K deal in under 30 seconds? If not, too complex
   - **Example simple plan:**
     - Base: $100K
     - Commission: 1% of revenue at and above quota; 0% below 75% of quota; 1.5% for overage above quota
     - Quota: $500K
     - Clawback: 50% if customer churns <90 days
   - **Avoid:** Multiple tiers, bonus caps, cliffs (where small change in revenue dramatically changes pay), and weighted metrics
   - **Transparency:** Post comp plan in shared doc; all reps can see commission calculations; no surprises
   - **Review quarterly:** Is the plan driving the behaviors you want? If not, wait until year-end to change (don't mid-year flip)

10. **Document and communicate comp plan changes carefully**
    - **Rule:** Lock comp plan in for the calendar year; no changes mid-year
    - **When to change:** January (annual review) → publish new plan, discuss with team, set expectations for year
    - **How to announce:** In writing + in person + on shared doc; explain what's changing and why
    - **If you must change mid-year** (rare): Grandfathering (old plan still applies to deals already in pipeline) or bonus buyout (one-time payout to keep rep from leaving)
    - **Never do:** Quietly change commission rates; announces SPIFs without warning; retroactively apply changes to prior months
    - **Impact:** Reps who trust comp plans will push harder; reps who worry about sudden changes will job-search

## Output Format

```
SALES COMPENSATION PLAN

Company Context
═════════════════
Company: [Name] | Stage: [Seed/Series A/B] | Current ARR: $[Amount]
Annual revenue target: $[Amount] | Number of sales reps: [#] | Mix: [# AEs, # SDRs, # other roles]

Position: Account Executive
═════════════════════════════
Industry benchmarks (your geography):
  Market OTE range: $[Low] - $[High]
  Base salary range: $[Low] - $[High]
  Commission rate standard: [0.5-2%] of revenue

This company's offer:
  Base salary: $[Amount]
  Target commission rate: [%] of revenue at 100% quota
  Target OTE (at 100% quota): $[Amount]
  Annual quota: $[Amount]
  Validation: OTE × 4 = $[Amount] (should equal roughly annual quota)

Commission Structure:
  0-75% of quota: 0% commission (ramp protection, base only)
  75-100% of quota: [1.0%] of revenue
  100-150% of quota: [1.5%] of revenue (accelerator)
  150%+ of quota: [2.0%] of revenue (top performer rate)

Example calculations:
  Rep closes $375K (75% of $500K quota):
    └─ Commission: 0% (under 75% threshold)
    └─ Total earnings: $100K base only (ramp scenario)

  Rep closes $500K (100% of $500K quota):
    └─ Commission: $5,000 (1% of $500K)
    └─ Total earnings: $105K ($100K base + $5K commission)

  Rep closes $650K (130% of quota):
    └─ Calculation: ($500K × 1%) + ($150K × 1.5%) = $5K + $2.25K = $7.25K
    └─ Total earnings: $107.25K ($100K base + $7.25K commission)

  Rep closes $800K (160% of quota):
    └─ Calculation: ($500K × 1%) + ($300K × 1.5%) = $5K + $4.5K = $9.5K
    └─ Total earnings: $109.5K

Additional provisions:
  Clawback: If customer churns <90 days of close, rep loses [50%] of commission on that deal
  Team bonus: If combined team hits $[Amount] ARR, each AE gets $[Amount] bonus
  SPIFs: [List any current SPIFs, e.g., "Multi-year deals: +$5K per deal"]

Position: SDR (Sales Development Rep)
══════════════════════════════════════
Base salary: $[Amount]
Bonus structure: [40%] of base, paid quarterly based on metrics

Quarterly bonus criteria:
  Qualified meetings booked: [#] meetings/month × [# months] = [#] meetings → $[Amount] bonus
  Discovery calls completed: [#] calls/month × [# months] = [#] calls → $[Amount] bonus
  Meeting show rate: >[%] show rate → $[Amount] bonus
  Total possible quarterly bonus: $[Amount]
  Target annual bonus (at 100% of all metrics): $[Amount]
  Target OTE: $[Amount]

Validation: OTE × 5 = $[Amount] (should roughly equal pipeline value SDR generates annually)

Territory & Quota Assignments
════════════════════════════════
Rep 1 (Name): [Territory/region/customer segment]
  TAM (Total Addressable Market): $[Amount]
  Average deal size: $[Amount]
  Expected deals/year: [#] (TAM ÷ avg deal size)
  Territory quota: $[Amount]
  Rep tenure: [New / Mature / Top performer] → Adjusted quota: [%] of base quota

Rep 2 (Name): [Territory/region/customer segment]
  TAM: $[Amount]
  Average deal size: $[Amount]
  Expected deals/year: [#]
  Territory quota: $[Amount]
  Rep tenure: [New / Mature / Top performer] → Adjusted quota: [%] of base quota

Fairness check: Rep 1 quota ($X) ÷ Rep 1 TAM ($Y) = [%] vs. Rep 2 quota ($Z) ÷ Rep 2 TAM ($W) = [%]
  If % differ by >10%, adjust quotas or territories to make fair

Quota Achievability Analysis
══════════════════════════════
Total company target: $[Amount]
Total quota assigned: $[Amount]
# of reps at 100% of quota: [#] reps × $[quota each] = $[Amount]
Stretch goal (if 80% of reps hit quota): $[Amount]
Conservative estimate (if 60% of reps hit quota): $[Amount]

Question: Is the company target achievable?
  ✓ If conservative estimate ≥ company target → Quota is realistic
  ✗ If conservative estimate < company target → Quota is too high; adjust down or hire more reps

Historical context (if applicable):
  Last year: [#] reps hit [%] of quota | Only [X]% of reps hit 100% | Average rep performance: [%] of quota
  Question: Does this year's quota build on that baseline or represent a jump?

SPIFs (Special Performance Incentive Funds)
════════════════════════════════════════════
SPIF 1: [Goal] | Criteria: [Close 3+ deals for Product X by Q2] | Payout: $[Amount] per deal
  Duration: [Jan-Jun 2026]
  Budget: $[Amount] (max payout if 5 reps each close 3 deals)
  Expected impact: [Increase Product X adoption from [%] to [%] of new deals]

SPIF 2: [Goal] | Criteria: [Multi-year contracts] | Payout: $[Amount] bonus for 3-year deal vs. 1-year
  Duration: [Full year 2026]
  Budget: $[Amount]
  Expected impact: [Increase NRR by extending customer commitment]

SPIF 3: [Goal] | Criteria: [Strategic account acquisition] | Payout: $[Amount] if [Specific customer] closes
  Duration: [By Q3 2026]
  Budget: $[Amount] (one-time)
  Expected impact: [Land anchor customer for reference + market credibility]

Compensation Compliance & Legal
═════════════════════════════════
Plan effective date: [Date, e.g., Jan 1, 2026]
Plan locked through: [Date, e.g., Dec 31, 2026] — No changes mid-year
Legal review: [✓ Completed / ◯ In progress / ✗ Not started] | Attorney: [Name/Firm]

Compliance items:
  ☐ Plan complies with state wage & hour laws
  ☐ Clawback provisions are enforceable
  ☐ OTE defined clearly (no ambiguity in commission calculation)
  ☐ Quota methodology documented
  ☐ Plan documented in writing (not verbal)
  ☐ All reps have signed acknowledgment of plan

Communication Plan
═════════════════════
Reps informed of plan: [Date]
Method: [Email + in-person meeting / written doc shared]
Questions addressed: [Date of Q&A session]
Shared document location: [Link to Google Doc / Notion / wherever reps can access]

Annual review schedule:
  December: Plan review (what worked, what didn't, suggested changes for next year)
  December 31: Finalize next year's plan (quotas, comp rates, SPIFs)
  January 1: Announce next year's plan; locked through December 31
  Monthly: Commission tracking (reps can see what they've earned YTD)

Compensation Budget
═════════════════════
Annual payroll budget for sales team: $[Amount]
Breakdown:
  AE 1 base: $[Amount] + target commission $[Amount] = $[Amount] OTE
  AE 2 base: $[Amount] + target commission $[Amount] = $[Amount] OTE
  SDR base: $[Amount] + target bonus $[Amount] = $[Amount] OTE
  Manager/overhead: $[Amount]
  Total sales team comp: $[Amount]
  As % of revenue target: [%] (typical: 30-40% for early-stage, 25-30% for scaling)

Actual spend (quarterly reviews):
  Q1 actual vs. budget: [Amount] vs. [Budget] = [+/- variance]
  Q2 actual vs. budget: [Amount] vs. [Budget] = [+/- variance]
  Trend: [On track / Exceeding commission budget / Below budget]
```

## Example

```
SALES COMPENSATION PLAN

Company Context
═════════════════
Company: Pipeline Analytics | Stage: Series A ($3M raised) | Current ARR: $180K
Annual revenue target: $750K (Year 2 target) | Number of sales reps: 2 | Mix: 2 AEs, 0 SDRs yet

Position: Account Executive
═════════════════════════════
Industry benchmarks (Denver, SaaS mid-market):
  Market OTE range: $120K - $160K
  Base salary range: $75K - $100K
  Commission rate standard: 0.5-1.5% of revenue

This company's offer:
  Base salary: $90,000
  Target commission rate: 1.0% of revenue at 100% quota
  Target OTE (at 100% quota): $135,000
  Annual quota: $450,000
  Validation: $135K × 3.3 = $445.5K (roughly matches quota)

Commission Structure:
  0-75% of quota: 0% commission (ramp protection, base only)
    └─ Applies to new rep in first 6-9 months
  75-100% of quota: 1.0% of revenue
  100-150% of quota: 1.5% of revenue (accelerator)
  150%+ of quota: 2.0% of revenue (top performer rate)

Example calculations (using $450K quota):
  Rep closes $300K (67% of quota — early ramp):
    └─ Commission: 0% (under 75% threshold)
    └─ Total earnings: $90K base only

  Rep closes $450K (100% of quota):
    └─ Commission: $4,500 (1% of $450K)
    └─ Total earnings: $94,500 ($90K base + $4.5K commission)

  Rep closes $600K (133% of quota):
    └─ Calculation: ($450K × 1%) + ($150K × 1.5%) = $4.5K + $2.25K = $6.75K
    └─ Total earnings: $96,750

  Rep closes $750K (167% of quota):
    └─ Calculation: ($450K × 1%) + ($300K × 1.5%) = $4.5K + $4.5K = $9K
    └─ Total earnings: $99K

Additional provisions:
  Clawback: If customer churns <90 days of close, rep loses 50% of commission on that deal
    └─ Example: Closed $50K deal, earned $500 commission; customer churns day 30 → lose $250
  Team bonus: If both AEs hit combined $900K ARR (same as 2× individual quotas), each gets $10K bonus
    └─ Drives collaboration; prevents "I got mine, you're on your own" behavior
  SPIFs:
    ├─ Multi-year deals: Close 3-year contract (vs. 1-year) → +$5K bonus per deal (encourage commitment)
    ├─ Strategic accounts: Close DataFlow Inc. (target account) → +$20K bonus (one-time)

Position: SDR (Sales Development Rep) — Planned hire Q3 2026
══════════════════════════════════════════════════════════════════
Base salary: $50,000
Bonus structure: 40% of base, paid quarterly based on metrics

Quarterly bonus criteria:
  Qualified meetings booked: 8 meetings/month × 3 months = 24 meetings → $5K bonus
  Discovery calls completed: 25 calls/month × 3 months = 75 calls → $5K bonus
  Meeting show rate: >75% show rate → $2.5K bonus
  Total possible quarterly bonus: $12,500 (but realistic: $7.5K/quarter if hitting 2/3 metrics)
  Target annual bonus (at 100% of all metrics): $12.5K × 4 = $50K
  Target OTE: $100K

Validation: $100K OTE generating ~300 meetings/year × $2.5K avg deal size = $750K pipeline value (matches company target)

Territory & Quota Assignments
════════════════════════════════
Rep 1 (Sarah Martinez): Enterprise/mid-market accounts (45-500 employees, $2M+ revenue)
  TAM: ~$8M (identified target accounts in this segment in Denver/Southwest)
  Average deal size: $35K/year
  Expected deals/year: 8-10 (assuming 35-40% close rate from qualified pipeline)
  Territory quota: $450K (assumes 12-13 deals closed)
  Rep tenure: New rep (hired March 2026; ramping) → 70% of mature quota in Year 1 = $315K adjusted for months 3-12
  Note: As Sarah ramps, she'll move from $315K to $450K by month 12

Rep 2 (John Chen): SMB segment (10-50 employees, $1-5M revenue) + land-and-expand from existing customers
  TAM: ~$4M (larger addressable market but smaller deal size, faster close)
  Average deal size: $15K/year
  Expected deals/year: 20-25 (higher volume, 40-50% close rate from qualified pipeline)
  Territory quota: $450K (assumes 30 deals closed)
  Rep tenure: Mature rep (5 years experience; starting April 2026) → 100% quota from day one
  Note: More deals, smaller size; compensation is same, but John may close more deals and hit accelerators

Fairness check:
  Sarah quota ($450K) ÷ TAM ($8M) = 5.6% × average deal size ($35K) = expected 12-13 deals
  John quota ($450K) ÷ TAM ($4M) = 11.25% × average deal size ($15K) = expected 30 deals
  Analysis: John's territory is more competitive but he's more experienced; Sarah's territory is bigger TAM but deals are larger
  Outcome: Quotas are fair given territory and rep experience

Quota Achievability Analysis
══════════════════════════════
Total company target: $750K ARR (Year 2 goal)
Total quota assigned: $450K + $450K = $900K (two reps at 100%)
Baseline: Only one rep (Sarah) is fully ramped by mid-year

Conservative estimate (if Sarah hits 70%, John hits 100% by month 9):
  Sarah: $450K × 70% = $315K
  John: $450K × 100% = $450K
  Total: $765K → Achieves company target ✓

Stretch estimate (if both hit 100%):
  Sarah: $450K
  John: $450K
  Total: $900K → 20% upside

Question: Is the company target achievable?
  ✓ Yes — Conservative estimate ($765K) exceeds target ($750K)
  ✓ Upside clear — If both reps perform, $900K is achievable

SPIFs (Special Performance Incentive Funds)
════════════════════════════════════════════
SPIF 1: Multi-year contracts
  Criteria: Close 3-year contract (vs. 1-year standard) → +$5K bonus per deal
  Duration: Full year 2026
  Budget: $30K (assumes ~6 deals/year convert to 3-year)
  Expected impact: Increase customer NRR from 85% (current) to 95% (goal)
  Rationale: Founder wants longer customer commitments to smooth revenue and reduce churn risk

SPIF 2: Strategic account (DataFlow Inc.)
  Criteria: Close DataFlow Inc. (named account) with $50K+ contract
  Payout: $20K bonus (one-time)
  Duration: By Q3 2026
  Budget: $20K
  Expected impact: Land marquee customer for case study and market validation; use as reference for similar accounts
  Note: Both reps can pursue; whoever closes it gets the bonus

SPIF 3: Product expansion (Analytics Module)
  Criteria: Sell new Analytics Module add-on to 5 existing customers
  Payout: $3K per customer × 5 customers = $15K total
  Duration: Q2-Q3 2026 (while module is new, high priority)
  Budget: $15K
  Expected impact: Increase ARPU from existing customers by avg $5K/customer = $25K incremental revenue
  Rationale: Lower CAC to expand existing customers than acquire new ones

Compensation Compliance & Legal
═════════════════════════════════
Plan effective date: April 1, 2026 (Sarah's start) + July 1, 2026 (John's start)
Plan locked through: December 31, 2026 — No changes mid-year
Legal review: ✓ Completed by Mitchell Law Group | Attorney: Heather Chen
  └─ Reviewed clawback enforceability, quota documentation, OTE definition, wage & hour compliance

Compliance items:
  ☑ Plan complies with Colorado wage & hour laws (no issues identified)
  ☑ Clawback provisions are enforceable (90-day window is reasonable per attorney review)
  ☑ OTE defined clearly (1% commission rate on revenue; no ambiguity)
  ☑ Quota methodology documented (territory-based, adjusted for ramp)
  ☑ Plan documented in writing (Google Doc shared with all reps)
  ☑ All reps signed acknowledgment of plan (signature date recorded)

Communication Plan
═════════════════════
Reps informed of plan:
  Sarah Martinez: March 25, 2026 (before start date April 1)
  John Chen: June 15, 2026 (before start date July 1)
  Method: Email + in-person meeting + shared Google Doc with all details
  Q&A session: April 15 (all-hands, both reps + manager + founder to discuss comp, quotas, SPIFs)

Ongoing transparency:
  Monthly commission tracking: Shared doc updated by 5th of each month (reps can see YTD earnings)
  Quarterly review: All-hands to discuss pipeline health, comp actuals vs. budget, SPIF progress
  Annual review: December planning meeting to discuss next year's plan

Annual review schedule:
  December 5: Comp plan review meeting (reps provide feedback on what worked/didn't)
  December 15: Finalize next year's plan (quotas, comp rates, SPIFs for 2027)
  December 31: Announce next year's plan (locked through Dec 31, 2027)
  January 1: New plan takes effect

Compensation Budget
═════════════════════
Annual payroll budget for sales team: $255,000
Breakdown:
  Sarah (AE) base: $90,000 + target commission $4,500 (9 months, partial year) = $94,500
  John (AE) base: $90,000 + target commission $4,500 (6 months, starting July) = $94,500
  Team bonus (if both hit targets): $10,000 (one-time, if both hit combined target)
  Total sales team comp: ~$199,000 (conservative; doesn't include SPIFs or accelerators)
  SPIFs budget: $65,000 (multi-year + strategic account + product expansion)
  Total with SPIFs: ~$264,000

As % of revenue target: $264K ÷ $750K = 35% (reasonable for early-stage; typical 30-40%)

Note: Budget is estimate; actual will vary based on deals closed and accelerators/SPIFs earned

Quarterly commission tracking (runs through the year):
  Q1 (Jan-Mar): Sarah not yet hired; no commissions
  Q2 (Apr-Jun): Sarah ramping; likely $0-5K actual commission (below 75% of quota)
  Q3 (Jul-Sep): Both Sarah and John active; expect $5-15K combined commissions (both ramping)
  Q4 (Oct-Dec): Both ramping well; expect $15-30K combined commissions (accelerators kicking in)
  Full year estimate: $20-50K actual commission (vs. $45K target at full OTE × 2 reps; variance due to ramp)
```

## Edge Cases

1. **Top performer caps at quota and stops trying**
   - How it breaks: Rep hits quota by October; for last 3 months, they coast or take vacation time
   - Prevention: Build accelerators into plan (1.5-2x commission above quota) so exceeding quota is more lucrative
   - Recovery: Implement SPIF mid-quarter to create new goal, or manually bonus rep who stays engaged

2. **Clawback creates tension with customer success**
   - How it breaks: Sales rep thinks CS should have done more to keep customer happy; CS blames sales for selling to wrong customer
   - Prevention: Define clawback criteria upfront (which customers count? is it all churn or only preventable churn?)
   - Recovery: Align sales + CS with shared metric (e.g., CS also bonused if customer stays 90+ days)

3. **Mid-year change to comp plan destroys trust**
   - How it breaks: Founder decides to change commission rates in July; reps feel ambushed; top reps start job-searching
   - Prevention: Lock comp plan in for full year; explain this when hiring
   - Recovery: If you must change (rare), grandfather existing pipeline (old commission applies to deals signed before change) or offer one-time buyout to affected reps

4. **Territory-based quotas feel unfair**
   - How it breaks: Rep A gets early-stage, high-growth companies (easier to close); Rep B gets mature, cautious companies (harder to close); both have same quota
   - Prevention: Adjust quotas by territory opportunity; use historical close rates and deal sizes to calibrate
   - Recovery: After first year of data, adjust quotas to match territory difficulty; communicate the adjustment openly

5. **Commission rate drives wrong behavior (e.g., discount wars)**
   - How it breaks: If commission is flat % of revenue, reps discount heavily to close bigger deals; margins suffer
   - Prevention: Tie commission to profitability, not just revenue; or cap discounts in playbook
   - Recovery: Add SPIF for "no-discount deals" or "deals closed at list price"; reframe commission as "per-customer value" not "per-dollar"

6. **SPIFs become permanent expectations**
   - How it breaks: "Multi-year SPIF" runs for one quarter; reps expect it to continue; when it ends, morale drops
   - Prevention: Always communicate SPIF as time-limited ("through Q2 only"); set end dates upfront
   - Recovery: Plan next SPIF before current one ends; keep goals and motivation pipeline flowing
