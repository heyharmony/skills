---
name: "Run Scenario Analysis"
description: "Stress-test strategic decisions by modeling best, worst, and likely scenarios using assumptions and risks surfaced in team discussions. Identifies trigger points for plan B and builds contingency playbooks."
tags:
  - scenario-planning
  - what-if-analysis
  - stress-test
  - contingency-plan
  - risk-scenario
  - plan-b
  - strategic-decision
  - decision-modeling
dependencies: []
role: "Leadership & Finance"
action: "Analyze"
connectors:
  - "Google Drive"
  - "Notion"
  - "Slack"
  - "HubSpot"
  - "Salesforce"
author: "Harmony"
version: "1.0.0"
icon: "sparkles"
cover: ""
screenshots: []
category: "Leadership & Finance"
---

## Purpose

Leadership teams make big bets—market expansion, pricing changes, headcount plans, product pivots—but rarely stress-test the assumptions behind them. "What if enterprise sales take 50% longer than projected?" surfaces in a pipeline review but nobody models the downstream impact on cash runway, hiring plans, and customer commitments. This skill captures the assumptions and risks discussed across meetings, builds structured best/worst/likely scenarios with financial and operational implications, and identifies the specific trigger points that should activate contingency plans. The result is a decision brief that lets leadership make bets with eyes open, knowing what could break their plan and what to do when it does.

## When to Use

- **Before major strategic investment**: Market expansion, new product line, geographic launch, or acquisition offer
- **Annual or quarterly planning**: Lock in realistic scenario ranges before committing to targets
- **When a key assumption changes**: Lost a major customer, competitor launched unexpectedly, hiring market dried up, or regulatory environment shifted
- **Before board presentation**: Anticipate investor "what if" questions and show you've thought through downside
- **Hiring plan stress-testing**: Model cash impact if ramp-down is needed; identify where headcount cuts hurt most
- **Pricing or packaging change evaluation**: Stress-test churn assumptions, upsell velocity, and runway impact

## Instructions

1. **Extract assumptions from recent leadership discussions**: Identify the 3–5 core assumptions driving your decision (sales targets, hiring timelines, customer adoption rates, market timing, competitive dynamics, retention assumptions). Source them: "In the Feb pipeline review, you said 60% conversion by Q3. In the board prep call, you mentioned 14-month enterprise sales cycle as a risk. In Slack, you noted we might lose 2 key hires to startup offers." List each assumption, its source, and the date.

2. **Identify the decision being stress-tested and its key variables**: What is the bet? "Expand into European market." What are the top 3 variables that make or break it? (Enterprise sales cycle length, regulatory approval timeline, hiring velocity for London office.) What is the default plan if all goes well?

3. **Build three scenarios**:
   - **Best Case**: Optimistic but plausible. Everything breaks your way but not magic-wand unlikely. (4-month sales cycle, fast regulatory approval, hire team 20% faster than expected.)
   - **Base Case**: Most likely given current trajectory and historical data. (9-month sales cycle, standard regulatory timeline, hire to plan with 1–2 slips.)
   - **Worst Case**: Pessimistic but survivable. You don't go bankrupt, but the plan hurts. (14-month sales cycle, regulatory delays, hiring misses by 3 months and you lose 2 key people mid-hire.)

4. **For each scenario, model the impact**: Revenue (how much does slower sales affect annual ARR?), cash runway (how many months do you have if this scenario hits?), team capacity (can the core product team support the new market while hiring?), customer impact (do existing customers get deprioritized?), timeline shifts (what launches slip or delay?).

5. **Identify trigger points**: Specific, observable signals that tell you which scenario is unfolding. (Example: "If we have fewer than 3 EU enterprise pipeline meetings by April 15, we're tracking worst case. If we hit 6+, we're in best case.") Triggers should be measurable by end of month or quarter, not vague.

6. **Design contingency actions for each trigger point**: When you see the trigger, what do you do? Who decides? How fast? (Example: "Trigger: <3 EU meetings by April 15 → Decision: Partner-led entry instead of direct sales. Owner: VP Sales + CEO. Timeline: 2 weeks to activate.") Include: what to do, who owns it, what it costs, how it changes the plan.

7. **Stress-test the stress test**: What scenario did we not consider? (e.g., "We modeled sales cycle but not customer implementation complexity." "We didn't model losing a key investor relationship.") What's the true worst case—the one you're not comfortable saying out loud? Add it.

8. **Present as decision brief**: 1-page recommendation + three 1-page scenario models + one-page trigger/contingency dashboard. Recommendation should say: "We recommend [decision] because [reason]. Best case delivers [outcome]. Base case is [outcome]. Worst case is [outcome]. We monitor [triggers] and activate contingency [if/when]. Board should know: [one scary thing]."

## Output Format

- **Decision Brief Header**: Decision title, decision owner, timeline, core question being stress-tested
- **Assumption Registry**: Table of assumptions (assumption | source meeting | date | confidence level | variable impact: high/medium/low)
- **Three Scenario Models**: Each includes narrative (1 paragraph describing the scenario and how it unfolds), financial model (revenue, cash, headcount), operational impact (what's at risk), timeline impact (what slips)
- **Trigger Point Dashboard**: Table of observable signals (trigger | scenario it indicates | how to measure it | by when | owner)
- **Contingency Playbook**: For each trigger point: action (what to do), owner (who decides), timeline (how fast), cost (financial or organizational), what it changes (impact on original plan)
- **Blind Spot Check**: What scenarios were we overconfident about? What key variable did we underweight? What is the truly scary scenario we haven't modeled?

## Example

**Ridgeline (Series B SaaS, 120 people) — Decision: Expand into European market**

**Assumption Registry**:
- Enterprise sales cycle in EU = 9 months (based on analyst report; confidence: medium; high impact on Year 1 revenue)
- Regulatory approval (SOC 2 EU, data residency) = 4 months (based on past US audit; confidence: medium; could slip if we're not ready)
- Hiring velocity for London office = 1 senior eng/month + 1 GTM person/month (confidence: low; tight UK talent market)
- Retention in EU market = 90%+ (same as US; confidence: low; EU customers more price-sensitive)

**Scenarios**:

**Best Case** (30% confidence): Sales cycle 5 months, regulatory approval 2 months, hire 1.5 people/month, 92% retention → Year 2 ARR from EU: $800k. Cash runway: 18 months. "We hit it right. EU prospects move fast. We get first 3 deals in Q2/Q3, use them as reference. London team ramps quick."

**Base Case** (50% confidence): Sales cycle 9 months, regulatory approval 4 months, hire 1 person/month, 90% retention → Year 2 ARR from EU: $200k. Cash runway: 16 months. "Standard enterprise sales. Regulatory is normal. We miss 2 hires in first 6 months. We invest $400k in Year 1, break even in Year 2."

**Worst Case** (20% confidence): Sales cycle 14 months, regulatory approval 6 months, hire 0.5 people/month + lose 2 people mid-year, 85% retention → Year 2 ARR from EU: $50k. Cash runway: 13 months. "Market moves slower. Regulatory surprises. We burn $550k in Year 1 and don't hit break-even until Year 3. Product team gets distracted supporting new market. We lose 2 senior people because London hiring is slow and they're needed at SF HQ."

**Trigger Dashboard**:
- Trigger: <3 EU enterprise pipeline conversations by May 31 → Scenario: Worst case
  - Action: Pause London hiring beyond 2 people. Activate partner strategy instead of direct sales.
  - Owner: CEO + VP Sales. Timeline: decide in 1 week.

- Trigger: Regulatory approval not in hand by August 1 → Scenario: Worst case
  - Action: Delay EU go-live 2 months. Compress US roadmap to fund delay.
  - Owner: VP Engineering + Chief Legal. Timeline: notify board in 1 week if we know it's at risk.

- Trigger: London office filled to 5+ people by October with <2 departures → Scenario: Best/Base case
  - Action: Accelerate Q4 hiring plan. Budget additional GTM hire.
  - Owner: VP People + CEO.

**Contingency Playbook**: (if worst case triggers)
- Week 1: CEO + VP Sales reassess direct sales ROI. Cost to stay direct: $550k Year 1.
- Week 2: Identify 2–3 European partners (resellers, implementation partners) to pitch.
- Week 3: Pause hiring beyond committed 2 people in London. Redeploy that headcount budget to partner enablement.
- Month 2: Launch partner-led entry. Lower upfront cost, later revenue, but preserves cash runway.

**Blind Spot Check**:
- We modeled sales cycle but not customer implementation complexity. EU customers may demand more customization (higher delivery cost, longer implementation cycles).
- We didn't model what happens if we lose the VP Sales (key hire risk in tight market). If that happens in Month 6, do we restart hiring or double down on partnerships?
- True worst case: We get 6 months in and realize EU market is 3 years away, not 1 year. Then we've burned $300k+ and the team is distracted. Do we kill the initiative mid-way or push?

## Edge Cases

- **Too many variables to model**: Narrow to the top 3 that move the needle most. (Don't model 15 variables if 3 account for 80% of the outcome.)

- **All scenarios look bad**: Present that honestly. "All paths require we cut headcount, extend runway, or raise capital." Recommend the least-bad path and the triggers that matter most.

- **Optimism bias from leadership**: "The founder says sales cycle will be 4 months." Anchor to data: "Analyst research shows 9 months. Our past deals averaged 8 months. We recommend 9 months as base case." Give leadership permission to be optimistic in best case, but not in base case.

- **Fast-moving crisis where scenarios change weekly**: Scenario analysis is forward-looking. In a crisis, assume it's base case or worse and act fast. Re-run scenario analysis monthly, not weekly.

- **Scenario planning for product decisions**: This skill works for feature bets too ("Launch AI copilot vs. invest in integrations"). Model user adoption, retention impact, engineering capacity, revenue upside, and contingency if the feature flops.

## Notes for Implementation

- **Use recent meeting notes as the source**: Pull from board memos, leadership standup recordings, Slack channels, sales pipeline reviews.
- **Make it executive-readable**: One-page brief for each section. Charts are better than tables. Narrative matters—"If X happens, here's why, and here's what we do."
- **Update quarterly**: Scenarios don't stay true for long. As you get new data (pipeline velocity, hiring progress, competitor moves), re-run analysis and surface if you're shifting scenarios.
- **Activate triggers proactively**: Don't wait until Month 7 to check if Q2 pipeline hit the target. Track it monthly. If you're off track by March, start executing contingencies early.
