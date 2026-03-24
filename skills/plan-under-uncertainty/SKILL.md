---
name: "Plan Under Uncertainty"
description: "Builds plans that survive changing conditions by identifying assumptions, creating decision points, and keeping options open. Helps teams plan without pretending to know the future. Trigger on: uncertain requirements, market shifts, 'what if', contingency planning, strategic planning, scenario analysis, decision frameworks, 'if X happens'."
dependencies: []
connectors:
  - name: "Notion"
    reason: "Captures strategic assumptions, decision logs, and plan versions. Useful for documenting what you thought was true versus what you learned."
  - name: "Slack"
    reason: "Shows decision discussions and their context. Helps understand when assumptions shifted and triggered pivots."
  - name: "Google Docs"
    reason: "Strategy documents, business cases, and assumption statements. Provides the baseline of what you planned to do and why."
  - name: "Linear"
    reason: "Tracks features based on customer discovery and market feedback. Shows which planned features proved valuable versus which assumptions were wrong."
---

## Purpose

Most plans fail because they assume certainty where none exists. The future is unknown: customer needs shift, market conditions change, technical options expand, priorities evolve. Instead of pretending to predict the future, this skill builds plans that are robust to change.

The approach: Identify your core assumptions explicitly (what must be true for your plan to work). Create decision points (if X happens by date Y, we do Z). Invest in optionality (keep doors open as long as it's cheap). Use scenario planning (best case, base case, worst case). Test before committing (prototype to learn what you don't know). This isn't avoiding commitment—it's committing smartly, with contingencies built in. Agile planning isn't chaos; it's structured uncertainty management.

## When to Use

- **Strategy is unclear or contested**: Multiple possible futures exist. Use scenario planning to map them and choose which to optimize for while hedging against others.

- **Market is shifting**: Customer needs are evolving, competitive landscape is moving. Build a plan that adapts when signals suggest a pivot.

- **Requirements are vague or changing**: Product brief was intentionally loose or stakeholders haven't aligned. Build a plan that learns requirements through iterative work instead of pretending you know them upfront.

- **Making a big bet with high risk**: New market, new technology, unproven customer need. Use this skill to test assumptions cheaply before committing all resources.

- **Multiple strategic options exist**: Build feature A, B, or C? Enter market X or Y? Use scenario planning to see which creates more optionality.

- **Timeline is long and unpredictable**: 12-month project. Too much can change. Build decision points and adaptation triggers instead of a rigid waterfall plan.

- **You're repeating past failures**: Last project assumed X and failed when X turned out false. Use this skill to identify assumptions upfront and test them early.

## Instructions

1. **Identify Your Core Assumptions Explicitly**
   - Assumptions are the things you believe are true, but might not be
   - Answer: What must be true for this plan to succeed?
   - Examples: "Users will adopt feature X if we build Y," "Competitor won't launch in this space for 6 months," "Our tech stack can scale to 1M users," "This will cost <$500k," "Q3 is the right launch window"
   - Get the team in a room and brainstorm assumptions for 30 minutes
   - Write each one down—don't filter, just capture
   - You'll usually find 5-10 core assumptions that, if wrong, break your plan
   - Distinguish between: Assumptions you're confident in (90%), assumptions you're unsure about (50%), and assumptions you're guessing on (20%)
   - The 20% ones are your biggest risks—figure out how to de-risk them

2. **Create Scenarios: Best Case, Base Case, Worst Case**
   - Best case: Your assumptions are right, execution is smooth. What happens?
   - Base case: Some assumptions are wrong; some execution friction. More realistic outcome?
   - Worst case: Multiple assumptions fail; execution is hard. But you don't go out of business—you adapt. What's the floor?
   - Write each scenario as a narrative, not a guess
   - Example scenario: "Base case: Customer adoption is 10% of addressable market (not 30%), scaling takes 2x longer than planned, one key competitor launches similar feature by Q4. We still have 18 months of runway, ship a leaner version, pivot if data says so."
   - For each scenario, trace implications: budget, timeline, team size, scope
   - Ask: Which scenario do we think is most likely? (Usually it's not best case)

3. **Test Your Core Assumptions Early**
   - For every major assumption, ask: Can we test this before committing all resources?
   - Assumption: "Users want feature X"? Don't build feature X. Build a mockup, test with 10 users, see what they actually want. Cost: 2 days. Value: Clarifies a 6-month project direction.
   - Assumption: "We can integrate with third-party API Y"? Don't design around it. Spike the integration first. Cost: 2-3 days. Value: Reveals if it's even possible.
   - Assumption: "We'll have $2M budget"? Don't hire 5 people. Clarify funding first.
   - For each assumption, decide: Spike it early (test cheaply, learn, then commit) or accept the risk and budget for course-correction
   - Cheapest tests win

4. **Map Decision Points: If-Then Triggers**
   - Instead of one rigid plan, create decision points: "If X happens by date Y, we do Z"
   - Example: "If customer adoption by end of Q2 is <5%, we pivot to B2B model instead of B2C. If it's >15%, we invest in scaling. If it's 5-15%, we continue current path."
   - Example: "If competitor launches by Q4, we accelerate feature Y. If they don't launch by Q4, we defer feature Y to next year."
   - Example: "If the ETL pipeline performs at >10M rows/day, we stick with plan. If it's <5M rows/day, we rearchitect."
   - Each decision point has: A trigger (metric or date), a condition (X > Y or X by date Z), and two+ possible actions
   - Set the decision date now (not "we'll decide later")—this forces clarity

5. **Invest in Optionality: Keep Doors Open**
   - Optionality = having choices at low cost
   - Instead of architecting for Feature A only, architect so you can build Feature A or Feature B (small extra cost, huge upside)
   - Instead of hiring a team for Product Path 1 only, hire generalists who can pivot to Path 2
   - Instead of over-committing to a vendor, keep an alternative vendor as a backup (slightly higher cost, way lower risk)
   - Use the one-way vs two-way door framework (Bezos): Reversible decisions (low cost if wrong) are fast. Irreversible decisions (high cost if wrong) are slow and deliberate.
   - Example one-way doors: Hiring, major partnership, brand pivot, technology stack. Make these slowly, with confidence.
   - Example two-way doors: Feature variants, market experiments, design choices. Make these fast; you can undo them.
   - Invest in optionality on two-way doors

6. **Plan for What You'll Learn, Not Just What You'll Build**
   - Traditional plan: "We'll build A, then B, then C"
   - Uncertainty plan: "We'll build A (and learn X, Y, Z from it), then based on what we learn, build B or C"
   - Example: "We'll ship deal scorecards (and learn how reps prioritize deals), then based on that data, decide if we build forecasting or mobile next"
   - Structure your work in learning phases: Phase 1 tests assumption A and builds learning around it. Phase 2 uses those learnings to commit to Phase 3.
   - Every release should answer a question: "Did users adopt this? How did they use it differently than we thought? What do they ask for next?"
   - Use this learning to update your assumptions and adjust the plan

7. **Document Your Plan as Assumptions + Scenarios + Triggers**
   - Don't write: "We'll build Features 1-10 by Q4."
   - Write: "Core assumptions: [List]. We think this plan has 70% success. Best case: [Scenario]. Worst case: [Scenario]. If adoption drops below 5% by month 2, we pivot to [Alternative]."
   - This framing is clear about uncertainty while still being decisive
   - Share this plan with stakeholders—they'll understand the contingencies and feel less blindsided when you adapt
   - Revisit this document monthly and update it: Which assumptions are now confirmed? Which are disproven? What new decisions do we need to make?

8. **Use Scenario Planning for Major Decisions**
   - Before a big decision (pivot, new market, new product line), write out 3+ scenarios
   - Example: "Product decision: Expand to SMB market or stay focused on Enterprise?"
   - Scenario A (SMB): Larger TAM but higher CAC, slower sales cycles, features fragmentation. Revenue potential: Higher long-term. Timeline: 18 months to breakeven.
   - Scenario B (Enterprise): Smaller TAM, sticky customers, longer sales but bigger deals. Revenue potential: Faster revenue. Timeline: 8 months to first enterprise deals.
   - Scenario C (Both): Hire specialized teams for each, higher overhead. Revenue potential: Highest, but capital intensive. Timeline: 2 years to optimize.
   - For each scenario, trace: Budget, timeline, team size, resource constraints
   - This isn't analysis paralysis—you get clarity and can decide based on constraints and upside

9. **Create Tripwires: Automatic Decision Triggers**
   - Tripwires are automatic signals that force a decision or pivot
   - Example: "If monthly churn is >5% for 2 consecutive months, we pause new features and focus on retention"
   - Example: "If customer NPS is <50 after month 2, we redesign based on feedback"
   - Example: "If any critical security vulnerability is found, we pause feature work and fix it"
   - Example: "If revenue is below 80% of forecast for 2 consecutive months, we reduce spend by 20%"
   - Tripwires prevent you from ignoring reality. They force action before situations get worse
   - Set tripwires at plan time, not mid-project—this prevents rationalization

10. **Review Assumptions Weekly and Pivot When Data Says So**
    - Every week (or every 2 weeks), ask: Have our core assumptions held true?
    - Document what you learned: "We assumed Feature X would be used by 80% of users. Actual: 40%. New assumption: Feature X is nice-to-have, not core."
    - Update your scenarios: "Given what we learned, our base case now looks more like this..."
    - Use learning to adjust the plan: "We planned to ship Features A-E in order. Learning shows users want D and E first, not A. Resequence."
    - This is agile in the best sense—you're committed to a direction, but responsive to data
    - Framework: Assumptions → Plan → Learn → Update Assumptions → Adapt Plan

## Output Format

```
=== PLAN UNDER UNCERTAINTY: [Project/Strategy Name] ===

STRATEGIC OVERVIEW
Timeframe: [X months / Years]
Scope: [What you're trying to achieve]
Uncertainty Level: [High / Medium / Low] — Why?

CORE ASSUMPTIONS (What Must Be True For This Plan to Succeed)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
High Confidence (80%+ confident these are true):
□ [Assumption 1]: Why you believe this
□ [Assumption 2]: Why you believe this

Medium Confidence (50-80%):
□ [Assumption 3]: Why you believe this; what would change your mind
□ [Assumption 4]: Why you believe this; what would change your mind

Low Confidence (20-50%, guessing):
□ [Assumption 5]: This is risky; how will you test it?
□ [Assumption 6]: This is risky; how will you test it?

ASSUMPTION TESTING PLAN
[Assumption]: How to test cheaply before committing
→ Test method: [Spike / User interviews / Prototype / Market research]
→ Timeline to decide: [Date]
→ Cost to test: [Days / Budget]
→ Decision gate: "If [metric], we proceed. If [metric], we pivot."

[Repeat for each risky assumption]

SCENARIO PLANNING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
BEST CASE: [Narrative, 2-3 sentences]
What happens: [Timeline, scope, outcomes]
Budget needed: [X]
Team size: [Y people]
Odds we're in this scenario: [X%]

BASE CASE: [Narrative, 2-3 sentences]
What happens: [Timeline, scope, outcomes]
Budget needed: [X]
Team size: [Y people]
Odds we're in this scenario: [X%] — This is what we plan for

WORST CASE: [Narrative, 2-3 sentences — not catastrophe, just "things don't go as hoped"]
What happens: [Timeline, scope, outcomes]
Budget needed: [X]
Team size: [Y people]
Odds we're in this scenario: [X%]
Floor/Backup plan: [How we survive and don't go out of business]

DECISION POINTS (If-Then Triggers)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Decision 1:
Trigger: [Metric or Date]
Condition: [If X > Y or If X by date Z]
If true → Action A: [What we do]
If false → Action B: [What we do instead]
Decision date: [Date we decide, not "later"]

[Repeat for 3-5 key decision points]

OPTIONALITY INVESTMENTS
What reversible decisions are we keeping flexible (two-way doors)?
- [Decision]: Why we're keeping this flexible, not committing yet
- [Decision]: Why we're keeping this flexible, not committing yet

What irreversible decisions must we make carefully (one-way doors)?
- [Decision]: Why this is irreversible; how we're vetting it
- [Decision]: Why this is irreversible; how we're vetting it

TRIPWIRES (Automatic Decision Triggers)
If [metric] reaches [threshold] for [duration], we [action].
Example: If churn >5% for 2 months, pause new features and focus on retention.
Example: If NPS <50 after month 2, conduct user research and redesign.

[List 3-5 tripwires that force action]

LEARNING PLAN
What will each phase teach us?
Phase 1 ([Timeline]): Build [scope] → Learn: [What you'll discover about assumptions]
Phase 2 ([Timeline]): Based on Phase 1 learning, build [scope] → Learn: [Next unknowns]
Phase 3+ ([Timeline]): Based on Phase 2 learning...

ASSUMPTION TRACKER (Updated Monthly)
[Assumption] | Status: ✓ Confirmed / ⚠ Unclear / ✗ Disproven | Evidence: [What you learned]

[Repeat for each assumption]

PIVOT READINESS
If we need to pivot, what's our fastest path?
Scenario: Customer adoption is 50% lower than expected. Pivot option: [Alternative approach 1] (2 weeks to execute) or [Alternative approach 2] (4 weeks).
Scenario: Competitor launches with Feature X. Pivot option: [Differentiation strategy] (timeline to execute).

Plan B is not failure—it's learning.
```

## Example

**Project: B2B Sales Intelligence Tool for Vertex Analytics**

```
=== PLAN UNDER UNCERTAINTY: Sales Intelligence Tool ===

STRATEGIC OVERVIEW
Timeframe: 12 months (MVP in 6 months, full product in 12)
Scope: Build a deal intelligence and forecasting tool for mid-market sales teams
Uncertainty Level: High — Market positioning, customer needs, and competitive landscape all shifting. But we have early customer signals.

CORE ASSUMPTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
High Confidence (80%+):
□ Mid-market sales teams spend 3+ hours per day on manual deal tracking: We've seen this in 12 user interviews
□ They'd pay $50-150/user/month if it solved this: Pricing feedback from 8 conversations

Medium Confidence (50-80%):
□ Deal AI (using conversation data to predict deal health) is differentiation: We've seen interest, but no one's built it yet
□ Sales ops teams are the buyer, not sales reps: Some evidence, but could be wrong; reps could be co-buyers
□ 6-month timeline is achievable with 4-person team: Based on similar products, but untested for our stack

Low Confidence (20-50%, risky):
□ We can integrate with all major CRMs (Salesforce, HubSpot, Pipedrive): APIs exist, but breadth is unknown
□ Sales leaders will enable conversation intelligence for coaching: Privacy/adoption risk; might be legal issue
□ We can build a defensible moat around deal prediction: Competitors could copy; only defensible if network effects emerge

ASSUMPTION TESTING PLAN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
"Sales ops teams are the buyer" → User interviews with 10 new prospects; ask about buying decision / approval
→ Timeline to decide: Month 1 (by April 15)
→ Cost: 3 days, travel budget $1k
→ Decision gate: If 70%+ say "ops team decides," continue pitch to ops. If <40%, pivot to "reps + ops co-buy."

"CRM integration is feasible" → Technical spike with Salesforce and HubSpot APIs; build 1 working integration
→ Timeline to decide: Month 2 (by May 15)
→ Cost: 5 engineering days
→ Decision gate: If spike shows both integrations are <2 weeks, unblock engineering. If either is >4 weeks, reconsider scope.

"Deal AI is valuable" → Ship deal scoring (simple rules-based, not ML) → Measure: Do users check deal scores daily? Do they act on scores?
→ Timeline to decide: Month 3-4 (feedback by June 30)
→ Cost: 10 engineering days (MVP deal scoring)
→ Decision gate: If 60%+ of users check scores 2+ times/week, invest in ML model. If <30%, it's nice-to-have, not core.

SCENARIO PLANNING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
BEST CASE: "Category winner — we're first and lock it in"
Product fits market; early adopters evangelize; salespeople trust deal scores; integrations work smoothly. Launch MVP in 5 months (month 5). Acquire first 10 customers by month 8. Revenue: $10k/month. Series A-ready by end of year.
Budget: $400k (team + 1 contractor)
Team: 4-person core team
Odds: 20% (highly competitive, but possible)

BASE CASE: "Steady adoption, but not category winner — we're solid alternative"
Product is useful but not transformational. Deal AI is interesting but not magic. Customers adopt slowly; need to land-and-expand over time. Launch MVP in 6 months (month 6). Acquire first 10 customers by month 10. Revenue: $5k/month. More time to Series A, maybe need bridge funding.
Budget: $500k (team + contractor + paid ads)
Team: 4-person core team + 1 part-time marketer
Odds: 60% (this is what we plan for)

WORST CASE: "Interest but slow adoption — we're niche"
Sales leaders want it, but adoption is slow (only 20-30% of users actually use it). Deal AI doesn't deliver as hoped. Revenue is $2k/month; we burn cash. Either pivot to B2B consulting, or optimize hard for unit economics and slow-grow the product.
Budget: $600k (longer runway, slower revenue)
Team: Same 4 + contractor, but we slow hiring
Odds: 20%
Floor/Backup: If adoption doesn't hit 10 paying customers by month 8, pivot to consulting (turn product into managed service, much higher revenue but lower scale). Or cut team in half and become a part-time project.

DECISION POINTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Decision 1: "Who's the buyer?"
Trigger: Month 1 user research (10 interviews)
Condition: If 70%+ say ops team → continue with ops as buyer persona
If 30-70% → both ops and reps are buyers; design for both
If <30% → reps are primary, ops is nice-to-have
Decision date: April 15
If ops is buyer → tailor product to ops use cases (analytics, alerts, team management)
If reps are buyer → emphasize ease-of-use and deal insights

Decision 2: "Do we ship with AI deal scoring or rules-based?"
Trigger: Month 3 user feedback (after MVP with rules-based scoring ships)
Condition: If users engage with rules-based scoring 2+ times/week → invest in ML model (worth it)
If <1x/week → rules-based is fine; punt ML to later
Decision date: June 30
If ML is valuable → allocate 2 engineers for 6 weeks to build model
If rules-based works → move to other features; revisit ML in year 2

Decision 3: "Do we stay B2B sales or expand to adjacent use case?"
Trigger: Month 6 revenue and customer type data
Condition: If we're getting strong adoption in sales teams AND we see interest from customer success teams → expand to CS use case
If adoption in sales is slow BUT CS expressed interest → pivot to CS instead of doubling down on sales
Decision date: August 31
If sales is working → stay focused, nail the motion
If sales is slow but CS is interested → pivot and test CS market (might be faster-growing)

OPTIONALITY INVESTMENTS
What reversible decisions are we keeping flexible (two-way doors)?
- Feature roadmap: We're not locking features until we see what users value; prioritize by usage, not founder gut feel
- Pricing model: Testing per-user subscription, but keeping option to do per-team or freemium if that's better
- Market positioning: Talking to both sales ops and sales leaders; if one segment is clearly better, we'll focus but haven't committed yet

What irreversible decisions are we making carefully (one-way doors)?
- Technology stack: JavaScript + Python + Postgres. This is hard to change; we're vetting it thoroughly (spike complete)
- CRM integration choice: We're building Salesforce first, HubSpot second. Pipedrive third. If we get the order wrong, we've wasted engineering time. We're vetting with customers first.
- Brand positioning: "The intelligence layer for sales." This is hard to walk back; we're testing it with customers before fully committing.

TRIPWIRES (Automatic Decision Triggers)
If we acquire fewer than 3 paying customers by month 5, we pause scaling and focus on product-market fit.
If churn is >15% per month, we conduct exit interviews and redesign based on feedback; existing roadmap is suspended.
If any customer converts deal AI predictions to revenue impact and validates it, we immediately hire an ML engineer.
If Salesforce adds competing feature, we accelerate our differentiation (either on analytics or on AI, depending on what Salesforce did).

LEARNING PLAN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Month 1-2 (MVP Planning + Spike):
Build: CRM integration spike (Salesforce, HubSpot), deal dashboard MVP, basic rules-based scoring
Learn: Is CRM integration feasible? What do users actually want from dashboard? What deal metrics matter?

Month 3-4 (MVP + Early Customers):
Build: MVP shipped; 3-5 early access customers on-boarded
Learn: Which deal metrics do users trust? Who's the actual buyer (ops vs reps)? Is deal AI interesting or nice-to-have?

Month 5-6 (Scaling MVP):
Build: Expand to 10-20 customers; iterate based on feedback
Learn: Is product stickiness high enough to justify Series A? What features do customers pay for? Is pricing right?

Month 7-12 (Series A + Scaling):
Build: Based on learnings, invest in highest-impact features (deal AI if validated, deeper CRM integrations, analytics, etc.)
Learn: Can we build a defensible product? What's our unit economics? What's our customer acquisition cost?

ASSUMPTION TRACKER (Updated Monthly)
Sales teams spend 3+ hours/day on tracking | ✓ Confirmed by user interviews
Sales ops is the buyer | ⚠ Unclear — mixed signals from customers (ops says yes, sales leaders say maybe)
$50-150/user/month is right price | ⚠ Unclear — early customers willing to pay, but sample size small
CRM integrations are feasible | ✓ Confirmed by technical spike
Deal AI is valuable | ⚠ Unclear — rules-based scoring is used, but ML model not tested yet

PIVOT READINESS
If adoption is slow in sales but customer success wants the product → Pivot: Reposition tool for CS team (different KPIs, different use cases). Timeline: 4 weeks to reposition and test.
If Salesforce or HubSpot launches competing feature → Pivot: Focus on deal intelligence (analysis, alerts, automation) instead of dashboard. Timeline: 2-3 months to differentiate.
If churn is high → Pivot: Convert to usage-based pricing or land-and-expand model (deeper integration, not breadth). Timeline: 6 weeks to repricing and support model.
```

## Edge Cases

- **Plan changes and you lose stakeholder confidence**: You planned to launch by Q2, now it's Q3. This isn't failure—it's learning. Pre-emptively communicate: "We've learned customer adoption will take longer than estimated. We're moving the launch to Q3 to validate demand first. This gives us a better shot at Series A." Transparency beats surprises.

- **Two scenarios seem equally likely and you can't decide**: Don't pick one. Hedge. "We're optimizing for base case but building options for best case and worst case." Spend 60% of energy on base case, 20% on each extreme. This costs more upfront but is way cheaper than committing to the wrong scenario and pivoting late.

- **A tripwire fires and forces a decision you don't want to make**: Churn hit 15% and you said you'd pause features. Now leadership wants to launch anyway. Honor the tripwire. It exists specifically to prevent rationalization. If you override it, your planning discipline collapses.

- **Learning contradicts an assumption you were confident about**: You were 80% confident on an assumption; learning shows it's wrong. This is not failure—it's the system working. Update the assumption, adjust the plan, move forward. This is literally why you have assumptions.

- **Pivoting would require throwing away months of work**: You're 4 months into a 12-month plan and data says you should pivot. Sunk cost fallacy is real, but so is momentum. Pivot if the data is clear. The 4 months of work taught you something valuable; that's not waste, that's learning.
