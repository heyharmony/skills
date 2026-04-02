---
name: "Design Org Structure"
description: "Analyze your organizational model and recommend structural changes. Evaluates speed vs coherence trade-offs, identifies bottleneck layers, and aligns structure to strategy. When facing execution slowness, product quality gaps, or strategic pivots. Trigger on: org structure, reporting lines, organization design, restructure, layers, dependencies, team alignment, accountability."
dependencies: []
connectors:
  - name: "HubSpot"
    reason: "Maps team ownership to revenue goals and customer segments"
  - name: "Slack"
    reason: "Analyzes communication patterns to identify cross-team friction and bottleneck managers"
  - name: "Linear"
    reason: "Shows work distribution, feature ownership, and cross-team dependencies"
  - name: "Google Calendar"
    reason: "Reveals meeting loads and coordination overhead by role and team"
author: "Harmony"
version: "1.0.0"
icon: "sparkles"
cover: ""
screenshots: []
category: "Operations"
---

## Purpose

Your organizational structure is the operating system for execution. The wrong structure creates bottlenecks (too many approvals, unclear ownership), misses markets (too centralized to respond quickly), or fragments the product experience (too decentralized with no coherence). This skill diagnoses your structure against your strategy and recommends moves that unblock execution or improve customer outcomes.

## When to Use

- **After a missed strategic goal.** When speed or quality slipped, structure might be the constraint rather than talent.
- **Before a new market expansion.** Consider: do you need local responsiveness (decentralize) or unified brand (centralize)?
- **When you're adding layers of management.** Ask if the layer adds decision speed or slows it down.
- **After a restructure that underperformed.** You copied another company's org chart instead of designing for your strategy.
- **When teams are bottlenecked on one person or function.** Indicates single points of failure and unclear delegation.
- **During strategy refresh.** Strategy and structure must align—if strategy changed, org probably should too.
- **When hiring costs grow faster than output.** Too many coordination layers or non-essential middle management.

## Instructions

1. **Clarify your strategic priorities.** What must you execute on in the next 12 months? (E.g., "Expand into enterprise" vs "Improve product quality" vs "Move fast in a fragmented market.")
   - If using Harmony transcripts, look for repeated strategic themes in board meetings or all-hands.
   - If no transcript data, ask the user or reference recent strategy docs (Notion, Confluence).

2. **Map your current structure.** Gather the actual org chart—roles, teams, reporting lines, team sizes.
   - Ask for headcount per team, key dependencies between teams, and current pain points.
   - If using Slack, analyze communication channels to understand actual vs formal structure.

3. **Identify your model type.** Are you primarily:
   - **Functional** (engineering, product, design, sales report to executives separately)?
   - **Product/Market** (teams organized by product line or customer segment)?
   - **Hybrid** (some functional, some product-aligned)?
   - Document the current model explicitly.

4. **Diagnose speed vs coherence.** For each major initiative, ask:
   - How many approval gates must it pass?
   - Which teams must align to move forward?
   - Who has final decision authority?
   - If answers show 4+ approval gates or unclear ownership, you have a coherence problem. If teams can't align on basic standards, you have a speed problem.

5. **Stress-test against strategy.** Map each strategic priority to the teams responsible:
   - Can the responsible team execute without waiting on other teams?
   - Do they have budget and hiring authority, or do they ask for both?
   - If "yes, but they have to ask for it," structure is slow.
   - If strategic priority spans 4+ teams with no clear owner, you have fragmentation.

6. **Identify concrete bottlenecks.** Look for:
   - Managers who don't know the work (skip levels, no direct involvement in execution).
   - Teams reporting to people who don't understand their craft (design reporting to finance, engineering reporting to sales).
   - Single points of failure (one person all decisions pass through).
   - Layers that exist for "coordination" but create delay instead.

7. **Recommend structural moves.** Based on strategy and bottlenecks:
   - **To increase speed:** flatten layers, merge teams with frequent dependencies, push decision authority closer to execution.
   - **To improve coherence:** centralize standards (design, architecture, security), create shared platforms teams depend on, align teams to customer journeys.
   - **To fix accountability:** ensure one owner per strategic goal, make that owner directly responsible for success metrics.
   - Acknowledge the trade-off explicitly (you gain X speed but lose Y coherence, or vice versa).

8. **Propose a transition path.** Don't recommend a perfect structure that destabilizes the company:
   - Identify which moves are low-risk (team merges, clearer reporting).
   - Flag which moves require careful change management (separating teams, shifting accountability).
   - Suggest a 6-month roadmap for implementation.

9. **Surface culture implications.** Structural change is cultural change:
   - Note which current managers may need to grow into the new model.
   - Identify which team dynamics will improve (less siloing) and which may suffer (loss of autonomy).
   - Recommend what messaging and support leaders should provide during transition.

10. **Create a decision framework.** Give the leadership team a clear rubric for when to restructure again:
    - "If this metric (e.g., time-to-market for features, post-launch defect rate) hits this threshold, restructure."
    - "We review structure annually against these strategic priorities."

## Output Format

```
# Organizational Structure Analysis for [Company Name]

## Current State

**Structure Model:** [Functional / Product-Based / Hybrid]

**Headcount & Organization:**
- [Team Name]: [X] people, reports to [Manager], responsible for [scope]
- [Team Name]: [X] people, reports to [Manager], responsible for [scope]
- [Team Name]: [X] people, reports to [Manager], responsible for [scope]

**Strategic Priorities (Next 12 Months):**
1. [Priority] — owned by [teams] — decision authority: [person/team]
2. [Priority] — owned by [teams] — decision authority: [person/team]
3. [Priority] — owned by [teams] — decision authority: [person/team]

## Diagnostics

**Speed Analysis:**
- Approval gates for major initiatives: [X]
- Average time from proposal to green light: [Y] days
- Frequency of "blocked waiting for another team": [frequency]
- Bottleneck manager(s): [name, scope]

**Coherence Analysis:**
- Consistency of customer experience across products: [assessment]
- Standard platforms/services shared across teams: [list]
- Decision conflicts between teams: [examples]
- Clarity of strategy cascade to individual teams: [assessment]

**Accountability Analysis:**
- Strategic goal owners with full P&L responsibility: [count] of [total priorities]
- Managers who participate in execution vs supervise from distance: [assessment]
- Single points of failure: [list and impact]

## Key Bottlenecks

1. **[Bottleneck Name]:** [Description of how it slows execution or hurts coherence]
   - Impact on strategy: [which priorities does this block?]
   - Root cause: [structure, skill gap, unclear authority, or other]

2. **[Bottleneck Name]:** [Description]
   - Impact on strategy: [which priorities does this block?]
   - Root cause: [structure, skill gap, unclear authority, or other]

3. **[Bottleneck Name]:** [Description]
   - Impact on strategy: [which priorities does this block?]
   - Root cause: [structure, skill gap, unclear authority, or other]

## Recommended Structure

**Vision:** [One sentence: what you're optimizing for and why]

**Proposed Model:** [Functional / Product-Based / Hybrid with description]

**Changes:**
- **Merge/Separate:** [What teams change relationship and why]
- **Reporting Changes:** [Who reports to whom, why]
- **Decision Authority:** [Clarify who decides what, push down authority]
- **New Roles/Groups:** [If needed to reduce bottlenecks]

**Trade-offs:**
- You gain: [Speed / Coherence / Accountability benefit]
- You trade: [What you lose or becomes harder]

## Transition Plan

**Phase 1 (Months 1-2):** [Quick wins, communication, role clarity]
- [Specific move]
- [Specific move]

**Phase 2 (Months 3-4):** [Structural changes]
- [Specific move]
- [Specific move]

**Phase 3 (Months 5-6):** [Embedding new practices, measurement]
- [Specific move]
- [Specific move]

**People Changes:**
- [Manager] → [new role/transition needed] because [reason]
- [Manager] → [growth opportunity] in new structure

**Communication Timeline:**
- Week 1: Board/exec alignment on rationale and trade-offs
- Week 2: Town hall explaining "why" before "what"
- Week 3: Role-specific 1:1s with impacted managers
- Week 4: Full announcement with FAQ

## Decision Framework for Future Restructures

**Review Triggers:**
- If [metric] reaches [threshold], revisit structure
- Quarterly review of bottlenecks against priority list
- Post-mortem on any failed initiative should include: "Did structure slow us down?"

**Annual Rhythm:**
- [Month]: Strategy refresh + structure alignment check
- [Month]: Mid-year pulse on team dynamics and dependencies
- [Month]: End-of-year review of speed and coherence metrics

## Success Metrics

Track for 6 months post-restructure:
- **Time to decision** on strategic initiatives: baseline vs post-restructure
- **Defect rate / quality regressions:** has coherence improved?
- **Manager span of control and depth:** baseline vs post-restructure
- **Cross-team dependencies:** are there fewer unplanned blockers?
- **Employee engagement in "clarity of role and decision authority":** baseline vs post-restructure
```

## Example

```
# Organizational Structure Analysis for Tempo Tech

## Current State

**Structure Model:** Functional with some product overlay

**Headcount & Organization:**
- Engineering: 12 people, reports to VP Engineering, responsible for platform and all product features
- Product: 3 people, reports to CEO, responsible for roadmap but no hire/budget authority
- Design: 2 people, reports to VP Engineering (NOT to Product), responsible for UI/visual consistency
- Sales: 5 people, reports to VP Sales, responsible for enterprise deals
- Customer Success: 2 people, reports to VP Sales, responsible for onboarding and retention

**Strategic Priorities (Next 12 Months):**
1. Launch product in European market (localization, compliance, sales presence) — owned by Product, Engineering, Sales — decision: CEO + VP Sales
2. Reduce feature request backlog from 18 months to 6 months — owned by Engineering, Product, Design — decision: VP Engineering
3. Improve customer satisfaction (NPS 45 → 60) — owned by Product, Customer Success, Design — decision: Product Lead (conflicted, since she has no P&L authority)

## Diagnostics

**Speed Analysis:**
- Approval gates for major initiatives: 4–5 (idea → product → engineering → VP eng → CEO)
- Average time from proposal to green light: 6–8 weeks (mostly waiting on VP Eng and CEO calendars)
- Frequency of "blocked waiting for another team": Weekly (Design waiting on Eng priorities, Sales waiting on Product for new features)
- Bottleneck manager(s): VP Engineering (all features pass through him), CEO (final call on most strategic moves)

**Coherence Analysis:**
- Consistency of customer experience across products: Degrading. Design standards aren't enforced because Design reports into Engineering, not a design-led function.
- Standard platforms/services shared across teams: None. Each feature team builds its own API layer.
- Decision conflicts between teams: Frequent. Sales promises features, Product wants them, but Engineering deprioritizes based on technical debt. No clear arbiter.
- Clarity of strategy cascade to individual teams: Low. Teams know the three priorities but don't know what to say "no" to.

**Accountability Analysis:**
- Strategic goal owners with full P&L responsibility: 1 of 3 (VP Sales owns European market but doesn't own Eng resources)
- Managers who participate in execution vs supervise from distance: VP Engineering knows every feature; Design manager is hands-on but marginalized; Sales VP distant from product team
- Single points of failure: VP Engineering (all features), CEO (strategy decisions)

## Key Bottlenecks

1. **Design is under-resourced and organizationally isolated.** Engineering makes UI trade-offs without design input. Design has no authority to enforce consistency.
   - Impact on strategy: Coherence for EU market depends on consistent brand experience; currently at risk.
   - Root cause: Structure. Design reports to VP Engineering (functional logic for colocation) but has no voice in feature prioritization.

2. **Product has vision but no execution authority.** The Product Lead can propose features but cannot hire, budget, or force Engineering to commit. Results in 18-month backlog and frustrated sales team.
   - Impact on strategy: Reducing backlog is constrained; Sales can't close deals with committed timelines.
   - Root cause: Unclear delegation. CEO needs to decide if Product owns the roadmap or VP Engineering does.

3. **CEO is the only arbiter of cross-team conflict.** When Sales promises features Product wants but Engineering won't commit to, decision bubbles to CEO. Scales poorly as company grows.
   - Impact on strategy: All three priorities slow down when conflicts arise (happens monthly).
   - Root cause: No clear decision authority in the structure. Each functional leader has veto power.

## Recommended Structure

**Vision:** Unblock product execution by moving decision authority from VP Engineering and CEO to Product-led teams, while keeping Design as a coherent function (not scattered across features).

**Proposed Model:** Product-Based Hybrid

**Changes:**
- **Separate Design from Engineering.** Create a Design Director role (1 person) who owns design standards, UX, and reports to CEO. Design team (2) now reports to Design Director, not VP Eng.
  - Why: Design is currently invisible in feature decisions. By separating and elevating, design input becomes mandatory before features launch.

- **Shift feature prioritization to Product.** Give Product Lead (now "VP Product") hiring and budget authority for a dedicated feature team.
  - Why: Current Product Lead has the roadmap but no power. VP Product will own outcomes (backlog, NPS improvement) and have the resources to deliver.

- **Create a Product-focused Engineering subteam.** 6 engineers report to the "VP Product" (they're embedded). Remaining 6 engineers report to "VP Engineering – Platform" and own shared infrastructure.
  - Why: Speeds decision-making for features (product team decides priorities without waiting for VP Eng). Platform team focuses on scalability, not every feature.

- **Establish a steering committee.** CEO, VP Product, VP Sales, VP Engineering (Platform), and Design Director meet weekly for 30 min to resolve cross-team conflicts.
  - Why: Prevents conflicts from bubbling to CEO; ensures visibility on EUR market launch, backlog reduction, and NPS improvement.

**Trade-offs:**
- You gain: Faster feature decisions, clearer accountability (VP Product owns backlog reduction + NPS), stronger design coherence, faster European market entry.
- You trade: Some complexity (now two engineering leads instead of one), risk that feature team moves so fast they miss platform debt (requires discipline), Product and Engineering may clash more openly (but that's healthy, they'll escalate to steering committee, not CEO).

## Transition Plan

**Phase 1 (Months 1-2): Roles and Clarity**
- Promote Product Lead to VP Product; clarify hiring/budget authority in writing.
- Hire or promote Design Director (can be internal if the 2 designers have a leader ready).
- Announce "Platform Engineering" vs "Product Engineering" split; let VP Eng interview product team volunteers (6 engineers).
- Establish steering committee; schedule weekly for 6 months.

**Phase 2 (Months 3-4): Team Moves**
- 6 engineers move to product team (desks, Slack channels, stand-ups).
- Design team moves reporting line; update all systems (org chart, 1:1 cadence, meetings).
- First backlog review: VP Product assesses current 18-month backlog, targets 50% reduction in 6 months.

**Phase 3 (Months 5-6): Embedding and Measurement**
- Steering committee reviews: time-to-decision on features, Design Director feedback on launch readiness, VP Sales confidence in feature timelines.
- Run retrospective: did the new structure work? What wasn't expected?
- Finalize backlog reduction target and NPS improvement plan.

**People Changes:**
- VP Engineering → stays, now owns only Platform (infrastructure, APIs, scaling). Growth opportunity: become "CTO-like" strategic leader, not feature approver.
- Product Lead → VP Product. Gets hiring/budget authority; needs executive coach on delegation (currently very hands-on, needs to lead a team).
- Design Manager → Design Director. Gets reporting line and authority. Needs training on product strategy (has been heads-down on UI).
- Sales VP → stays; gets weekly steering committee visibility on feature timelines (reduces need to lobby CEO).

**Communication Timeline:**
- Week 1: Board alignment. Explain: current structure penalizes speed; new structure moves decisions closer to execution.
- Week 2: All-hands. Announce three changes (Design reports to CEO, VP Product gets full authority, Product/Platform Engineering split). Emphasize: better for customers, clearer for teams.
- Week 3: Engineering town hall. Explain Platform vs Product team difference. Invite volunteers for product team.
- Week 4: 1:1s with all managers. Role changes, growth opportunities, what's expected.
- Ongoing: Steering committee is transparent (decisions posted to Slack after each meeting).

## Decision Framework for Future Restructures

**Review Triggers:**
- If feature backlog exceeds 12 months or NPS drops below 50, we misstructured for execution.
- If Design Director reports that she's blocking more than 3 features per month (over-centralized), consider re-embedding designers.
- If Platform Engineering team says "product team is bypassing us and breaking infrastructure," we have siloing, revisit.

**Annual Rhythm:**
- Q1: Strategy refresh + structure alignment check. Does the org still match our strategic priorities?
- Q2: Mid-year pulse on team dynamics, dependencies, and bottleneck changes.
- Q4: End-of-year review of speed (time-to-decision), coherence (design consistency, architecture quality), and engagement.

## Success Metrics

Track for 6 months post-restructure:
- **Time to decision on features:** baseline (currently 6–8 weeks) → target 2 weeks for product team
- **Design coherence:** consistency audit baseline vs 6-month (did Design Director reduce regressions?)
- **Feature backlog:** baseline 18 months → target 6 months
- **NPS:** baseline 45 → target 55
- **Manager span of control:** VP Product, VP Eng (Platform), Design Director should each have 5–8 direct reports (healthy range)
- **Cross-team blockers:** baseline (weekly conflicts) → target (steering committee handles all, no CEO escalation)
- **Employee engagement:** "I know what I'm accountable for" and "I can make decisions without waiting for approvals" (pulse survey)
```

## Edge Cases

1. **Startup with flat structure (everyone reports to CEO).** Structure isn't your bottleneck yet; focus on hiring craft leaders (VP Eng, VP Product) first, then reorganize. Premature org structure wastes time.

2. **Company mid-acquisition or post-acquisition.** Don't restructure for 6 months post-acquisition. Focus on integration first, then structure. Restructuring while cultures are still clashing makes everything worse.

3. **One exceptional manager holding everything together.** If one person is the bottleneck (all decisions, all context), the problem isn't structure, it's delegation. Address that first. Restructuring without fixing the manager will just move the bottleneck.

4. **You're copying another company's org chart.** Airbnb's structure works for Airbnb because it's aligned to their strategy and culture. If you're copying without understanding "why," you'll inherit the inefficiencies, not the benefits.

5. **Structure change conflicts with individual career goals.** If someone expects a promotion that the new structure doesn't offer, have that conversation early. Surprise demotions destroy trust. Offer growth in a different direction or flag it before the announcement.

6. **Your strategy is unclear, so structure can't follow.** If leadership hasn't agreed on "are we optimizing for speed, coherence, or margin?" you can't design a structure. Go clarify strategy first, then restructure. Reorganizing before strategy is clear creates churn.
