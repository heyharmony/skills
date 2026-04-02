---
name: "Set OKRs & Goals"
description: "Create strategic goals and OKRs aligned to company strategy. Balances quantitative metrics, qualitative measures, and financial indicators. Limits goals to three for focus, avoids gaming through metrics, and embeds systems for progress. When defining quarterly/annual strategy, planning budget allocation, or cascading goals to teams. Trigger on: set goals, quarterly planning, OKRs, key results, strategy, annual plan, goal setting, targets, outcomes."
dependencies: []
connectors:
  - name: "Notion"
    reason: "Create goal tracker; visualize strategy cascade to teams"
  - name: "Salesforce"
    reason: "Maps sales goals to revenue targets; shows customer segment alignment"
  - name: "Linear"
    reason: "Links work (tickets, epics) to OKRs; measure progress"
  - name: "Google Sheets"
    reason: "Simple goal tracking, metric updates, progress dashboard"
  - name: "Slack"
    reason: "Weekly goal updates via automated reminders; surfaces blockers"
author: "Harmony"
version: "1.0.0"
icon: "sparkles"
cover: ""
screenshots: []
category: "Product"
---

## Purpose

Goals fail when they're disconnected from strategy, buried under cascading layers, or so ambitious that teams don't believe them. This skill helps you set 3 focused goals that are actually ambitious enough to change how you operate, connect them directly to company strategy (not through 5 layers of cascading), and build systems that make progress automatic instead of heroic. The skill also covers what to measure—absolute numbers not ratios, mix of hard and soft metrics—and how to review goals for learning, not just grading.

## When to Use

- **Beginning of planning cycle** (annual, quarterly). You need to define strategic goals and cascade them to teams.
- **Mid-cycle check-in.** Goals aren't aging well. You need to adjust (not abandon them, but make them real).
- **When you're about to set goals without strategy.** Stop. Do this skill first. Strategy informs goals, not vice versa.
- **When your last goals were too many, vague, or ignored.** ("15 OKRs nobody tracked" or "Goals that describe activity not outcomes.") Reset with discipline.
- **Annual planning for budget allocation.** You need to decide where money/people go, and that follows from goals.
- **When teams are moving in different directions.** Goals clarify what matters and give teams a shared target.
- **Before a strategic pivot** (new market, new product, new model). Goals are how you operationalize the pivot.

## Instructions

1. **Start with strategy, not goals.**
   - Ask leadership: "What are we optimizing for in the next 12 months?" (Growth? Profitability? Product quality? Market share? Retention?)
   - Not all of those. Pick the 1–3 dimensions you're willing to trade other things for.
   - Write it in one paragraph: "In 2026, we're optimizing for [X]. We're willing to slow down [Y] and defer [Z] to win in [X]."
   - If using Harmony transcripts, look for repeated themes in board meetings or strategy conversations. What do leaders keep saying matters? That's the strategy.
   - If you don't have clear strategy, don't set goals yet. Go clarify strategy first. Goals without strategy are wishes, not commitments.

2. **Gather baseline metrics and understand the starting point.**
   - For each strategic priority, what do we currently measure? Revenue? Customer satisfaction? Feature velocity? User engagement?
   - What's the current baseline? (E.g., "NPS is 42. We want 60. Annual growth is 30%. We want 50%.")
   - Don't make up targets yet. First, understand where you are and what would constitute meaningful progress.
   - Ask teams: "What metrics do you care about? What would feel like success to you?" This gives you buy-in early.

3. **Limit yourself to three goals for the entire organization.**
   - Three. Not five, not ten. Three.
   - If you have more than three strategic priorities, that's a strategy problem, not a goals problem. Fix the strategy first.
   - Forcing prioritization is the point. "We want to grow, improve quality, *and* reduce costs" usually means you don't know what you want. Which is most important? Start there.
   - Three goals is focused enough that leadership can reinforce them consistently and teams can orient toward them.

4. **Use this framework for each goal: "What + How + Target."**
   - **What:** The outcome you want. (E.g., "Increase enterprise customer retention.")
   - **How:** How will you get there (optional, but clarifying). (E.g., "by improving onboarding experience and reducing implementation time.")
   - **Target:** Specific, measurable, ambitious. (E.g., "From 85% year-1 retention to 92%.")
   - Formula: "[Outcome] by [approach] to [metric] [baseline] → [target]."
   - Example goal: "Increase enterprise customer retention by improving onboarding and implementation support from 85% to 92%."

5. **Balance three types of metrics; don't just use one.**
   - **Quantitative/Hardcore numbers:** Revenue, growth rate, user count, defect rate, deployment frequency. (What you can count.)
   - **Qualitative/Soft metrics:** Customer satisfaction (NPS, CSAT), team engagement, brand perception, product quality perception. (What you measure through surveys, interviews, or observation.)
   - **Financial indicators:** Margin, unit economics, customer acquisition cost, lifetime value, operating expense. (Money metrics.)
   - Example: Goal "Dominate mid-market segment" might measure: Revenue from mid-market (hardcore), NPS from mid-market customers (soft), CAC and LTV in segment (financial).
   - Avoid pure activity metrics ("Launch 12 features"; "Hire 10 engineers"). Those are means, not ends.

6. **Use absolute numbers, not ratios.**
   - **Don't say:** "Increase revenue by 25%." (Denominator gaming: you could cut costs and hit the target.)
   - **Do say:** "Reach $50M annual recurring revenue." (Absolute number; can't game it.)
   - **Don't say:** "Improve conversion rate from 2% to 3%." (If you narrow targeting, you can hit it without real improvement.)
   - **Do say:** "Increase signups from 10k/month to 15k/month." (Absolute; harder to game.)
   - Absolutes force real improvement and prevent denominator manipulation.

7. **Score OKRs for learning, not grading.**
   - **Grading** a goal (you aimed for 100%, hit 75%, so grade is C-) teaches you that failure is bad. People sand-bag targets (set them low so they look good).
   - **Learning** from goals (you aimed for 100%, hit 75%, what does this teach about your market, your team, your estimate?) teaches you that failure is data.
   - After the quarter: "We hit 75%. We planned for 100. Why?" Answers might be: "Market adopted slower than expected" (learn about TAM), "We got blocked on infrastructure" (learn about execution bottlenecks), "We estimated wrong" (learn about estimation), "External event changed things" (learn about risk).
   - The real value is not the OKR percentage; it's the analysis of why you hit or missed. Build that into your review culture.

8. **Connect goals to teams and make one owner per goal.**
   - Each goal has a single owner (usually a VP or head of function). They're accountable for the outcome and for decisions that affect it.
   - Map which teams contribute: "Revenue goal owns by SVP Sales. It depends on Product (feature roadmap), Marketing (pipeline generation), and Support (customer health)."
   - But don't cascade goals down. Cascading ("Company goal is $100M revenue; Sales goal is $80M, Product goal is 50 new features") creates alignment theater. Teams become accountable for their slice, not the outcome.
   - Instead: Tell teams the strategic goal, let them decide what work moves the needle. "Our goal is $100M revenue. How does your team contribute? You decide."
   - This prevents the problem where cascading goals conflict (Sales' goal benefits Retention goal; Engineering's goal benefits Speed goal but hurts Quality goal).

9. **Build systems and practices alongside goals, so progress is automatic.**
   - Don't set a goal and hope heroic effort carries you. Build a system.
   - Goal: "Increase NPS from 42 to 60." System: Weekly customer interviews (who does this? when?), monthly feedback analysis, product roadmap aligned to feedback, tracking of implemented vs. ignored feedback.
   - Goal: "Grow revenue 50%." System: Weekly sales pipeline review, monthly cohort analysis, quarterly product-market fit checks.
   - System examples: standing meetings, dashboards, automated reports, clear responsibilities, regular review cadence.
   - The system is what makes progress happen without constant executive pressure.

10. **Review goals monthly and adjust if reality changes.**
    - Monthly check-in (20-minute sync): Are we on track? Do we need to adjust the goal (scope, timeline, or target)? Are we learning something that changes strategy?
    - Quarterly deep-dive: Did we hit the goal? What did we learn? If we missed, was it forecast error (we didn't estimate right) or execution error (we couldn't deliver) or strategy error (goal wasn't aligned to market)?
    - Adjust, don't abandon. If you set a goal in January and by March you have new information (market shifted, competitor moved, customer feedback changed), adjust the target. That's not failure; that's responsiveness.
    - But don't adjust every month. Give goals 3–6 months to settle before you re-evaluate.

11. **Cascade strategy, not goals.**
    - The CEO sets 3 goals: grow revenue, improve product quality, increase customer satisfaction.
    - The VP Product doesn't then get sub-goals: "you own 20% of revenue, 15% of quality." Instead, VP Product asks: "How does my roadmap affect these three goals? What's my contribution?"
    - VP Engineering asks the same. VP Sales asks the same. They align on the work that moves the needle without creating a goal tree.
    - This keeps autonomy (each leader decides their contribution) while maintaining alignment (all three know the company goal).

12. **Communicate goals clearly and often.**
    - First communication: "Here are our three goals and why we chose them. Here's what we're willing to slow down or defer."
    - Monthly: "Here's progress on our goals. Here's what we learned."
    - Celebrate progress, even if below target. "Revenue is tracking toward $35M; we aimed for $50M. Earlier than expected, we learned that enterprise segment maturation is slower. We're adjusting strategy. Here's next month."
    - Use consistent language. Say "goal" and "OKR" consistently (they're interchangeable; don't confuse teams by sometimes saying one, sometimes the other).

## Output Format

```
# OKRs & Goals for [Company Name] [Year/Quarter]

## Strategy Statement

[One paragraph: What we're optimizing for, what we're willing to trade, why now.]

## Company Goals

**Goal 1: [Outcome] by [approach]**
- Current metric: [baseline]
- Target metric: [ambition]
- Absolute target: [clear number]
- Owner: [Name, Title]
- Key contributors: [Teams/functions that enable this goal]

**Success looks like:** [Qualitative description of what "done" means]

**Metrics to track:**
- Hardcore metric: [Measure + cadence] (e.g., Revenue: monthly)
- Soft metric: [Measure + cadence] (e.g., Customer satisfaction: monthly survey)
- Financial metric: [Measure + cadence] (e.g., CAC in segment: quarterly)

**Key systems we're building/embedding:**
- [System 1: what, who, cadence]
- [System 2: what, who, cadence]
- [System 3: what, who, cadence]

---

**Goal 2: [Outcome] by [approach]**
- Current metric: [baseline]
- Target metric: [ambition]
- Absolute target: [clear number]
- Owner: [Name, Title]
- Key contributors: [Teams/functions that enable this goal]

**Success looks like:** [Qualitative description]

**Metrics to track:**
- Hardcore metric: [Measure + cadence]
- Soft metric: [Measure + cadence]
- Financial metric: [Measure + cadence]

**Key systems we're building/embedding:**
- [System 1]
- [System 2]
- [System 3]

---

**Goal 3: [Outcome] by [approach]**
- Current metric: [baseline]
- Target metric: [ambition]
- Absolute target: [clear number]
- Owner: [Name, Title]
- Key contributors: [Teams/functions that enable this goal]

**Success looks like:** [Qualitative description]

**Metrics to track:**
- Hardcore metric: [Measure + cadence]
- Soft metric: [Measure + cadence]
- Financial metric: [Measure + cadence]

**Key systems we're building/embedding:**
- [System 1]
- [System 2]
- [System 3]

## What We're Not Optimizing For (This Year)

[1–3 things we're deferring or slowing down to focus on goals]

## How Teams Contribute

[Table mapping teams to goals]

| Team | Goal 1 | Goal 2 | Goal 3 | Unique Contribution |
|------|--------|--------|--------|---------------------|
| Product | Primary | Supporting | - | Roadmap prioritization |
| Engineering | Supporting | Primary | Supporting | Architecture & delivery |
| Sales | Supporting | - | Primary | Customer segment focus |
| Marketing | Supporting | Supporting | Primary | Demand gen in segments |
| Support | Primary | Supporting | Primary | Churn reduction, retention |

## Review Cadence

- **Monthly:** 20-min sync on metric updates. Are we on track? Any blockers? Do we need to adjust assumptions?
- **Quarterly:** 90-minute deep-dive. Did we hit the goal? What did we learn? Adjust or reaffirm.
- **Annual:** Full retrospective. Did the goals serve the strategy? What did we learn? What should next year's goals be?

## Success Metrics Review Template

**[Goal Name] — Month [#]**

| Metric | Baseline | Target | Current | Progress | Notes |
|--------|----------|--------|---------|----------|-------|
| [Metric 1] | [Baseline] | [Target] | [Current] | [%] | [Any learning or blockers] |
| [Metric 2] | [Baseline] | [Target] | [Current] | [%] | [Any learning or blockers] |
| [Metric 3] | [Baseline] | [Target] | [Current] | [%] | [Any learning or blockers] |

**Narrative:** [What happened this month? What did we learn? Any adjustments?]
```

## Example

```
# OKRs for Momentum App, 2026

## Strategy Statement

In 2026, we're optimizing for enterprise product-market fit and expansion revenue. We're willing to slow down consumer feature velocity and defer geographic expansion to focus on enterprise adoption and retention. Enterprise customers are 10x lifetime value; if we nail this segment, we can fund growth for years. The market is moving from collaboration tools to operational intelligence; we need to be the operational backbone for mid-market teams.

## Company Goals

**Goal 1: Achieve 90% year-1 enterprise customer retention (up from 75%)**
- Current metric: 75% year-1 retention
- Target metric: 90%
- Absolute target: Track 12-month cohorts; ensure March 2026 cohort has 90% retention by March 2027
- Owner: VP Product (Sarah)
- Key contributors: Customer Success, Sales, Product, Engineering (infrastructure reliability)

**Success looks like:** A year-1 cohort of enterprise customers stays active, expands their user count, and renews for year 2 without escalations.

**Metrics to track:**
- Hardcore metric: Year-1 retention by cohort, tracked monthly
- Soft metric: NPS by customer segment (enterprise target: 70+), monthly survey
- Financial metric: CAC payback period by segment, quarterly

**Key systems we're building/embedding:**
- Monthly customer health reviews (Sarah + CS lead; every enterprise account scored)
- Weekly product feedback loop (CS collects, Product reviews, roadmap prioritizes)
- Quarterly product-market fit check (interview 5 enterprise customers; listen for "must have" vs "nice to have")

---

**Goal 2: Grow enterprise revenue to $25M ARR (from $8M) through land-and-expand**
- Current metric: $8M ARR
- Target metric: $25M ARR
- Absolute target: $25M annual recurring revenue by end of 2026
- Owner: SVP Sales (James)
- Key contributors: Sales, Marketing, Product (feature velocity), Customer Success (expansion)

**Success looks like:** Sales team grows enterprise customer base from 40 to 120 accounts, and average account size grows from $200k to $300k.

**Metrics to track:**
- Hardcore metric: ARR, monthly bookings, customers added, quarterly (monthly bookings update)
- Soft metric: Sales team confidence and NPS (monthly pulse)
- Financial metric: CAC per segment, LTV, contribution margin, quarterly

**Key systems we're building/embedding:**
- Weekly sales pipeline review (James + sales team; forecast accuracy check)
- Monthly expansion tracking (which customers are growing? why? not growing?)
- Quarterly product demos to prospects (Product + Sales alignment on feature stories)

---

**Goal 3: Reduce mean time to value for new enterprise customers to 4 weeks (from 8 weeks)**
- Current metric: 8-week MTTV
- Target metric: 4 weeks
- Absolute target: 80% of new 2026 enterprise customers achieve first value milestone in 4 weeks
- Owner: VP Customer Success (Maria)
- Key contributors: Product (onboarding product), Sales (scoping alignment), Engineering (implementation support)

**Success looks like:** A new enterprise customer completes their first workflow, sees ROI, and is confident in their decision by week 4 instead of week 8.

**Metrics to track:**
- Hardcore metric: MTTV by cohort, tracked weekly
- Soft metric: Onboarding satisfaction (NPS of onboarding experience), monthly
- Financial metric: Correlation of faster MTTV to year-1 retention and expansion, quarterly

**Key systems we're building/embedding:**
- Standardized implementation playbook (Maria + Product; 3-week initial phase, customer-specific config)
- Weekly onboarding status check (Maria + implementation leads; flag at-risk accounts)
- Monthly root-cause analysis of slow implementations (why did that customer take 12 weeks? What can we do differently?)

## What We're Not Optimizing For (This Year)

- **Consumer segment:** Deferring consumer feature requests; consumer product is on life support until enterprise is established
- **Geographic expansion:** No investment in APAC or EMEA until enterprise is 40%+ of revenue
- **Platform vision:** Deferring architectural refactor to focus on feature velocity for enterprise

## How Teams Contribute

| Team | Goal 1: Retention | Goal 2: Revenue | Goal 3: MTTV | Unique Contribution |
|------|------|--------|----------|---------------------|
| Product | Primary | Supporting | Primary | Roadmap prioritizes pain points → retention; onboarding flows |
| Engineering | Primary (reliability) | Supporting | Supporting | Uptime, performance, MTTV features |
| Sales | Supporting | Primary | Supporting | Right customer fit, fair scoping |
| Marketing | - | Supporting | - | Enterprise pipeline generation |
| Customer Success | Primary (expansion) | Supporting (expansion) | Primary | Onboarding quality, health checks, expansion |
| Finance | - | Primary (tracking) | - | ARR measurement, CAC/LTV analysis |

## Review Cadence

- **Weekly:** Sales team + James: pipeline review, bookings tracking, forecast accuracy
- **Monthly:** Goal owners (Sarah, James, Maria) sync with CEO (15 min): metric update, blockers, adjustment needs
- **Monthly:** All-hands: 5-min update on progress and learning from current month
- **Quarterly:** Deep-dive review: CEO + Goal owners (90 min): Did we hit targets? What did we learn? Adjust if needed?
- **Annual:** Full retrospective: Did these goals serve strategy? What's next year?

## Success Metrics Review Template

**Goal 1: 90% Year-1 Enterprise Retention — Month 3 (March)**

| Metric | Baseline (Jan) | Target (Dec) | Current (Mar) | Progress | Notes |
|--------|---|---|---|---|---|
| Year-1 retention (current cohort) | 75% | 90% | 78% (early signal) | 4% gain | 2026 cohorts are newer; full year data comes Dec 2026. Early customers look good. |
| Enterprise NPS | 62 | 70 | 65 | +3 | Recent onboarding improvements; customers noting faster value. |
| CAC payback period | 22 months | 18 months | 21 months | -1 month | Improving. On track for 18 by year-end. |

**Narrative:** Early signals are positive. March cohorts show 78% expected retention (extrapolated). One customer (Acme Inc.) expanded usage by 50% after onboarding improvements; strong retention signal. Q2 focus: implement monthly health reviews + product feedback loop.

**Goal 2: $25M ARR — Month 3 (March)**

| Metric | Baseline (Jan) | Target (Dec) | Current (Mar) | Progress | Notes |
|--------|---|---|---|---|---|
| ARR | $8M | $25M | $10.5M | +$2.5M in Q1 | On track for $30M+ if we maintain this pace. |
| New customers | 40 | 120 (+80 net) | 52 (+12) | +12 in Q1 | Sales team is hot. Pipeline is strong. |
| Avg account value | $200k | $300k | $210k | +$10k | Expansion starting (one account from 200k→350k). |
| Forecast accuracy | - | 95% | 92% | - | James says 92% confidence in forecast. Good. |

**Narrative:** Q1 blew past expectations. Booked $2.5M ARR, added 12 new customers, and started expansion momentum. Sales pipeline is healthy ($8M in "likely to close" stage). Risk: can we maintain hiring pace to manage growth? No issues with churn yet.

**Goal 3: 4-Week MTTV — Month 3 (March)**

| Metric | Baseline (Jan) | Target (Dec) | Current (Mar) | Progress | Notes |
|--------|---|---|---|---|---|
| MTTV (% at 4 weeks) | 20% | 80% | 45% | +25% | Onboarding playbook working. Three customers hit milestone in 3 weeks. |
| Onboarding NPS | 55 | 70 | 62 | +7 | Product onboarding flows (new feature in Mar) driving satisfaction. |
| Avg implementation time | 8 weeks | 4 weeks | 6.5 weeks | -1.5 weeks | Trend is good. One team (Acme) custom config took 10 weeks; root cause analysis: unclear scope at sales time. Coaching sales on better scoping. |

**Narrative:** Good progress. MTTV is trending toward 4 weeks, but not there yet. Root cause of slow implementations is often scope creep or unclear customer expectations (sales over-promising). Implementing scoping checklist in sales process to prevent. Monthly root-cause analysis starting in April.
```

## Edge Cases

1. **You're setting goals without clear strategy.** Stop. This will fail. Go clarify strategy with leadership first. "What are we optimizing for?" If you don't have a clear answer, your goals will be a wish list with conflicting priorities.

2. **You have 10+ goals and can't pick three.** That's a strategy problem, not a goals problem. You're trying to do too much. Go back to leadership and force the conversation: "Which THREE things matter most?" If everything matters, nothing matters.

3. **Goals are too easily achievable.** If everyone hits 100% of their goals, you're sand-bagging. Goals should be ambitious (maybe 70% is a win). If 100% is easy, you didn't stretch. Raise the bar.

4. **Goals are so ambitious they're demotivating.** If the team thinks "we have zero chance of hitting this," they give up. Ambitious should feel hard but possible. "We're currently at 8k signups/month and aiming for 15k" is ambitious. "We're at 8k and aiming for 100k" feels impossible.

5. **Teams have conflicting goals.** Sales' goal (ship new premium feature) conflicts with Engineering's goal (reduce technical debt). Escalate: these goals can't both be true. Which matters more? Make the call; then align both teams to the trade-off.

6. **You hit all goals but the company's strategy is wrong.** Goals are on track, but you're optimizing for the wrong thing. This happens when strategy was unclear or the market shifted. Use the quarterly review to catch it: "We're hitting goals, but revenue growth isn't translating to profitability. Our strategy assumptions were wrong. Let's adjust."

7. **Goal owners aren't reviewing monthly.** If there's no monthly check-in, goals become set-and-forget. By quarter end, you're scrambling and the goal owner is hoping for the best. Build the monthly review as a non-negotiable ritual (20 min; data and quick conversation).
