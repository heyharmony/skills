---
name: "Solve Marketplace Liquidity"
description: "Diagnose and resolve marketplace supply-demand imbalances. Identify which side is constraining growth, measure liquidity metrics, and execute targeted supply or demand activation. When your marketplace has stalled growth, users report long waits or empty results, or you're subsidizing both sides unprofitably. Trigger on: marketplace stalled, nobody's buying, no supply, cold start problem, liquidity crisis, demand drought."
dependencies: []
connectors:
  - name: "HubSpot"
    reason: "Track supplier acquisition, conversion rates, and funnel stages for supply-side activation"
  - name: "Salesforce"
    reason: "Monitor supply quality metrics, churn rates, and performance-based segments"
  - name: "Google Sheets/Analytics"
    reason: "Real-time liquidity ratio tracking (successful matches vs. total requests)"
  - name: "Slack"
    reason: "Operational alerts when liquidity metrics drop below threshold"
---

## Purpose

Marketplace liquidity isn't optional—it's existence. Your platform only works when supply and demand match. Too much supply with weak demand means inactive suppliers. Too much demand with scarce supply means frustrated users churning. This skill helps you diagnose which side is actually broken, measure the severity, and execute the right intervention before you run out of runway.

Most founders delay this decision. They launch broadly, subsidize both sides hoping something sticks, and wonder why nothing grows. The winners identify the easier-to-recruit side (usually supply), constrain geography or category ruthlessly, and solve locally before expanding. This skill walks through that playbook.

## When to Use This Skill

- Your marketplace growth has flatlined despite marketing spend
- Marketplace surveys show users waiting days for matches or finding empty listings
- You're bleeding cash subsidizing both suppliers and demand, with no path to unit economics
- You're trying to launch in 15 cities simultaneously and adoption is weak everywhere
- Suppliers are inactive—you see low repeat usage despite high signup numbers
- You need a single, clear liquidity metric to guide the team's next 90 days
- You're deciding whether to pivot the product to serve single-player use cases
- You need to prove product-market fit exists before scaling supply or demand acquisition

## Instructions

1. **Map your two-sided structure and identify which side is actually constrained**
   - List your supply side (what providers offer) and demand side (who buys)
   - Run a liquidity audit: count total active suppliers, total active demanders, total searches/requests in the last 30 days, total successful matches
   - Calculate your liquidity ratio: successful matches ÷ total requests = % match rate
   - Survey recent churn: did users leave because of supply scarcity, demand drought, or product friction?
   - Interview 5-10 active users and 5-10 churned users separately—their pain will reveal which side is actually limiting growth

2. **Establish your liquidity threshold and measure gap to critical mass**
   - Define what "liquid enough" means for your model: is it 80% match rate? 20-minute response time? Same-day fulfillment?
   - Industry benchmarks: two-sided marketplaces typically need 60-80% match rates before network effects activate
   - Map your current state vs. threshold (e.g., "we're at 30% matches, need to hit 70%")
   - Decide: does supply need to 3x, demand needs to 5x, or both need modest growth?
   - Use this single number to align the team—everyone should be able to recite your liquidity target

3. **Determine which side is easier to move and build a supply or demand playbook**
   - Ask: which side generates more friction to recruit, and which side has higher retention?
   - Supply-side strategy (if supply is constraining): do things that don't scale—manually recruit 100 suppliers in your best neighborhood, onboard them 1:1, get them live, measure their activity weekly
   - Demand-side strategy (if demand is constraining): build single-player mode—make the product useful for suppliers even without demand, or build into a platform where supply is abundant (e.g., a food-delivery app that works in a saturated market because of superior UX)
   - Constrain geography ruthlessly: be the best in one neighborhood before expanding to the next; don't spread acquisition budget across 10 markets where you're mediocre everywhere
   - Build a 30-day sprint to move your constrained metric by 50%

4. **Manage supply quality as an existential issue, not an afterthought**
   - Define your quality standards: response time, cancellation rate, customer rating threshold, completeness of listings
   - Implement active monitoring: which suppliers are churning fastest? Which have the most complaints?
   - Quality bottleneck: one bad supplier creates 10x negative word-of-mouth; cull ruthlessly in early stage
   - Create tiered status (verified, new, trusted) so demand-side sees quality upfront
   - Survey users on the supplier attributes they value most—optimize your quality filters to match actual demand

5. **Test single-player mode to desaturate the marketplace**
   - Ask: what would make the product valuable for suppliers even if demand vanished tomorrow?
   - OpenTable example: restaurants used it for reservation management before diners had an incentive to book; that's single-player mode
   - Build a 2-week prototype of core supplier workflows without requiring matching
   - Measure: do suppliers return weekly if there's no demand? If yes, you've unlocked stickiness independent of liquidity
   - This removes the pressure to subsidize demand before supply is engaged

6. **Price discovery and subsidy strategy: let the market work, stop over-engineering**
   - If you're subsidizing both sides, stop—subsidies mask whether the business model actually works
   - Let suppliers and demanders negotiate price; your job is matching, not price-setting
   - Exception: consider temporary supply-side subsidies only to hit critical mass in one geography—then remove them
   - Measure supplier unit economics at actual pricing: does a supplier make $X per transaction? If not, you have a supply problem that money can't fix
   - Communicate pricing clearly to avoid churn surprises

7. **Execute a targeted 90-day liquidity sprint with clear daily/weekly metrics**
   - For supply-side constraint: daily new suppliers, weekly repeat activity rate, quality distribution
   - For demand-side constraint: daily new demanders, weekly conversion to first booking/purchase, repeat usage rate
   - Hold weekly standup: are you on pace to hit your liquidity threshold?
   - Adjust tactics weekly based on what's working (e.g., "LinkedIn supplier recruitment is 3x more efficient than ads")
   - If you don't see 30% month-over-month progress toward your threshold, that's a signal to pivot or clarify your constraints

## Output Format

```
MARKETPLACE LIQUIDITY DIAGNOSTIC
Generated: [Date]
Company: [Your Company]

CURRENT STATE
─────────────────────
Supply-side metrics:
  - Total active suppliers: [X]
  - Average weekly activity per supplier: [X%]
  - Supplier churn rate (monthly): [X%]
  - Average supplier tenure: [X weeks]
  - Top supplier (% of volume): [X%]

Demand-side metrics:
  - Total active demanders: [X]
  - Average weekly activity per demander: [X%]
  - Demander churn rate (monthly): [X%]
  - Average demander tenure: [X weeks]
  - Repeat usage rate (demanders active 2+ weeks): [X%]

Liquidity health:
  - Total requests/searches in last 30 days: [X]
  - Successful matches: [X]
  - Match rate (liquidity ratio): [X%]
  - Average time-to-match: [X minutes/hours/days]
  - Unsatisfied demand (searched but didn't match): [X%]

User feedback themes:
  - Top supplier churn reason: [quote]
  - Top demander churn reason: [quote]
  - Most-requested feature from suppliers: [X]
  - Most-requested feature from demanders: [X]

CONSTRAINT DIAGNOSIS
─────────────────────
Primary constraint: [Supply | Demand | Both equally]
Severity: [Moderate | Severe | Critical—requires immediate pivoting]
Evidence:
  - [Finding 1]
  - [Finding 2]
  - [Finding 3]

If supply is primary constraint:
  - Recruitment efficiency: [X cost per active supplier]
  - Activation hurdle: [biggest friction in supplier onboarding]
  - Retention blocker: [why suppliers go inactive]

If demand is primary constraint:
  - Acquisition efficiency: [X cost per active demander]
  - First-use friction: [biggest barrier to first transaction]
  - Conversion blocker: [why demanders churn without buying]

LIQUIDITY THRESHOLD & TARGET
──────────────────────────────
Current match rate: [X%]
Target match rate (industry benchmark): [70-80%]
Gap to close: [X percentage points]

To hit target, we need to:
  - Grow supply by: [X%]  OR
  - Grow demand by: [X%]  OR
  - Improve matching algorithm: [specific optimization]

Timeline to critical mass: [X weeks at current velocity] → [X weeks with focused sprint]

RECOMMENDED 90-DAY SPRINT
──────────────────────────
Primary lever: [Recruit supply | Activate demand | Improve quality | Build single-player]
Rationale: [Why this moves the needle fastest]

Week 1-4 tactics:
  - [Specific action]
  - [Specific action]
  - [Specific action]

Week 5-8 tactics:
  - [Specific action]
  - [Specific action]
  - [Specific action]

Week 9-12 measurement:
  - Success metric 1: [Should improve from X% to Y%]
  - Success metric 2: [Should improve from X to Y]
  - Success metric 3: [Should improve from X to Y]

If we don't hit [metric] by week 8, trigger pivot/scaling decision

SINGLE-PLAYER MODE OPPORTUNITY
────────────────────────────────
Supplier value prop without matching:
  [List 3-5 capabilities suppliers would pay for standalone]

Demand value prop without matching:
  [List 3-5 capabilities demanders would pay for standalone]

Recommended prototype: [X feature to build in 2 weeks to test stickiness]

PRICING & SUBSIDY REVIEW
──────────────────────────
Current unit economics (supplier): [X revenue per supplier per month | X margin]
Current unit economics (demander): [X revenue per demander per month | X margin]
Subsidy burn rate: [$ per month across both sides]

Subsidy removal roadmap:
  - [On week X, remove subsidy from: supply | demand]
  - [On week Y, implement]: [pricing model]
```

## Example

**Company: LocalServe (home services marketplace)**

Founder Sarah built LocalServe to connect homeowners with vetted plumbers, electricians, and HVAC contractors. She launched in Denver, posted on local Facebook groups, and expected both to grow. After 6 weeks: 1,200 homeowners signed up but contractors stayed silent. Homeowner churn was brutal—85% never booked. Sarah was bleeding $4K/month subsidizing contractor recruitment. Here's how she diagnosed liquidity:

```
MARKETPLACE LIQUIDITY DIAGNOSTIC
Generated: March 20, 2026
Company: LocalServe

CURRENT STATE
─────────────────────
Supply-side metrics:
  - Total active contractors: 23 (out of 340 who signed up)
  - Average weekly activity per contractor: 12% (only 3/23 log in weekly)
  - Contractor churn rate (monthly): 68%
  - Average contractor tenure: 2.3 weeks
  - Top contractor (% of volume): 31% (Mike, the plumber, is doing all the work)

Demand-side metrics:
  - Total active homeowners: 1,200
  - Average weekly activity per homeowner: 8%
  - Homeowner churn rate (monthly): 85%
  - Average homeowner tenure: 1.1 weeks
  - Repeat usage rate (homeowners active 2+ weeks): 3%

Liquidity health:
  - Total requests in last 30 days: 340
  - Successful matches: 51
  - Match rate (liquidity ratio): 15%
  - Average time-to-match: 14 hours
  - Unsatisfied demand: 85% (289 requests had no qualified contractor)

User feedback themes:
  - Top contractor churn reason: "I get 1 job per week and 3 low-quality leads I have to reject"
  - Top homeowner churn reason: "I requested a service 3 days ago and nobody responded"
  - Most-requested feature from contractors: "Let me filter leads by service type before I commit"
  - Most-requested feature from homeowners: "Show me a contractor's reviews and schedule upfront"

CONSTRAINT DIAGNOSIS
─────────────────────
Primary constraint: SUPPLY (severe)
Evidence:
  - 23 active contractors serving 1,200 homeowners = 52:1 ratio (industry healthy = 10:1)
  - Match rate of 15% is catastrophic (industry benchmark: 70%+)
  - One contractor (Mike) accounts for 31% of matches—this is a concentration risk
  - Contractor churn is 68% monthly vs. homeowner churn at 85%—contractors are fleeing faster because supply is too tight and they're overwhelmed with low-quality leads

If supply was sufficient, homeowner churn would stabilize at 60-70% (normal for marketplaces). But it's 85% because homeowners have no successful experiences. This is a supply problem masquerading as a demand problem.

LIQUIDITY THRESHOLD & TARGET
──────────────────────────────
Current match rate: 15%
Target match rate (HVAC/plumbing benchmark): 75%
Gap to close: 60 percentage points

To hit target, we need to:
  - Grow supply by: 400% (from 23 to 115 active contractors)  OR
  - Improve matching (quality filtering): reduce mismatches by 40% and reactivate churned contractors

Timeline to critical mass: 24+ weeks at current velocity → 8-10 weeks with focused supply sprint

RECOMMENDED 90-DAY SPRINT
──────────────────────────
Primary lever: RECRUIT & REACTIVATE SUPPLY
Rationale: Homeowner demand is there (1,200 users). The bottleneck is contractors. Fix supply, and homeowner churn will drop naturally. Subsidizing homeowners to chase 23 contractors is wasteful.

Week 1-4 tactics:
  - Pause homeowner paid ads; redirect $4K/month to contractor recruitment
  - Directly email churned contractors with: "What went wrong? Help us build features you need" (qualitative)
  - Implement contractor lead filtering: let them pick service types and max jobs/week BEFORE they see leads
  - Manual outreach: Sarah calls top 50 contractors in Denver by hand, offers $500 bonus for 3 completed jobs
  - Build contractor dashboard: show past ratings, earnings, and schedule availability

Week 5-8 tactics:
  - Launch contractor referral program: $100 per contractor referred
  - Partner with contractor associations (Denver Plumbers Guild) for bulk recruitment
  - Optimize onboarding: reduce contractor signup-to-first-lead from 3 days to 2 hours
  - Tier contractor status: "Verified" badge for contractors with 5+ reviews to increase homeowner confidence
  - Weekly 1:1s with active contractors: what would make you more active?

Week 9-12 measurement:
  - Active contractors: grow from 23 to 80+ (target: 245% growth)
  - Contractor reactivation rate: get 30% of churned contractors back online
  - Match rate: improve from 15% to 45%+ (halfway to target)
  - Contractor tenure: increase from 2.3 weeks to 6+ weeks
  - Homeowner repeat rate: increase from 3% to 15% (successful experiences drive retention)

If we don't hit 80 active contractors by week 8, we pivot to: is the product (matching logic, lead quality) the real blocker, or is contractor recruitment genuinely harder than expected in Denver?

SINGLE-PLAYER MODE OPPORTUNITY
────────────────────────────────
Contractor value prop without matching:
  - Contractor dashboard: track jobs, earnings, customer reviews, schedule (even if no leads come)
  - Marketing tools: branded quote template, SMS follow-up automation, invoice management
  - Reputation management: gather and display customer reviews automatically
  - Directory listing: appear in Google/Yelp when homeowners search (SEO benefit)

Demand value prop without matching:
  - Quote comparison tool: homeowners can post job + get comparison quotes from competitors
  - DIY guidance: step-by-step how-to guides for small fixes (single-player use case)
  - Contractor directory: browse contractors by service, location, price even before requesting

Recommended prototype: Contractor dashboard (Week 2). If contractors use it to manage 1-2 jobs/month even without LocalServe leads, we've proven they see value independent of liquidity.

PRICING & SUBSIDY REVIEW
──────────────────────────
Current unit economics (contractor): $120 revenue per contractor per month (15% take rate on $800 avg job)
Current unit economics (homeowner): $0 (free to use)
Subsidy burn rate: $4,000/month contractor recruitment spend = -$2,880/month net

Subsidy removal roadmap:
  - Week 4: Remove lead-quality subsidy (stop auto-accepting all leads)
  - Week 8: If contractor supply hits 80+, pause contractor referral bonuses and measure retention without subsidy
  - Week 12: Introduce contractor take-rate increase (15% → 18%) + homeowner premium tier ($5 rush request)
```

Sarah's insight from this exercise: "I've been throwing money at attracting homeowners when my real problem was I didn't have enough contractors to serve them. My first 20 contractors were recruited through personal networks (free), so my cost-per-acquisition spiked when I tried paid channels. I should've gone house-to-house in Denver talking to contractors first." She refocused her sprint, manually recruited 40 new contractors in 6 weeks by offering $500 bonuses for 3 jobs, and match rates climbed to 52% by month 3. Homeowner churn dropped from 85% to 41% because they finally had options.

## Edge Cases

- **Single-winner dynamics**: If one supplier (Mike the plumber) is doing 30%+ of volume, you have a quality or capacity bottleneck, not just a supply gap. Mike may be the only vetted contractor. Don't scale contractor count until you understand why he's winning—then hire/train 9 more like him.

- **Asymmetric churn**: If one side churns much faster than the other (contractors at 68%, homeowners at 85%), address the faster-churning side's friction first. Homeowner churn of 85% is normal early-stage (most are price shoppers or tire-kickers). Contractor churn of 68% suggests the product isn't delivering value to them—fix this before scaling supply recruitment.

- **Subsidy addiction**: If you're subsidizing both sides equally, you're not identifying your constraint—you're just delaying the hard decision. Subsidies should be targeted at the easier-to-move side for a fixed, short duration, then removed. If churn spikes when subsidies end, your product/market fit was artificial.

- **Geography trap**: Launching in multiple cities simultaneously guarantees you'll be mediocre everywhere. Concentrate supply and demand in one neighborhood, hit 70%+ match rate, then expand. Sarah launched in all of Denver at once—should've started with one ZIP code.

- **Wrong quality definition**: If you only recruit contractors with 15+ years experience and thousands in licensing, you're limiting supply artificially. Early-stage, imperfect supply is better than no supply. Graduate your quality standards as you grow (new contractors start unverified, earn trust through reviews).

- **Matching algorithm over-engineering**: If your matching isn't simple and obvious (contractor near homeowner, right service type, available time), you've over-engineered. Don't build a recommendation engine for a supply problem. Start with dumb matching and improve once liquidity is solved.
