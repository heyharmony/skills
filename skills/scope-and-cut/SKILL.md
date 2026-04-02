---
name: "Scope & Cut Ruthlessly"
description: "Identifies what to remove from a plan or feature roadmap to accelerate delivery. Helps teams define the minimal viable version, cut scope without compromising quality, and ship the core value first. Trigger on: scope creep, feature bloat, timeline pressure, 'what should we cut', prioritization questions, 'too many features'."
dependencies: []
connectors:
  - name: "Linear"
    reason: "Provides issue backlog, feature list, and current sprint context to identify what can be deferred or removed"
  - name: "Notion"
    reason: "Accesses product roadmap and prioritization frameworks to align cuts with strategy"
  - name: "Slack"
    reason: "Captures team discussions about scope disputes and shipping decisions for context"
author: "Harmony"
version: "1.0.0"
icon: "sparkles"
cover: ""
screenshots: []
category: "Product"
---

## Purpose

This skill helps teams escape the trap of trying to build everything at once. It operates on a simple principle: shipping beats perfection, and the fastest way to deliver value is to cut mercilessly from your V1. The skill guides teams through identifying the core problem they're solving, distinguishing between essential and nice-to-have, and making ruthless trade-offs when time or resources are constrained.

Most teams don't fail because they built something bad—they fail because they tried to build something too big. This skill is the antidote to scope creep and feature bloat.

## When to Use

- **Timeline pressure**: You have a hard deadline and too much work. Identify what can ship in V1 versus later iterations.
- **Feature debates**: The team can't agree on priorities. Use this skill to force clarity on the core problem and eliminate features that don't solve it.
- **Redesigning a product**: You're rethinking a feature but drowning in ideas. Cut to the simplest version that addresses the key user problem.
- **Stakeholder requests piling up**: Customers or executives are asking for everything. Use this to say "not in V1" with confidence.
- **Quality vs. speed tradeoff**: You're choosing between slower-but-perfect or faster-but-rough. This skill helps cut scope, never quality.
- **Unclear core value**: The team hasn't agreed on what the product is really about. Cutting forces that clarity.
- **Launch anxiety**: You're nervous about shipping something incomplete. This skill reframes incompleteness as strategy, not failure.

## Instructions

1. **Name the core problem you're solving**
   - In one sentence, what's the user pain point?
   - Ignore features, timelines, and stakeholder requests for now
   - Example: "Sales reps spend 40% of time on manual data entry instead of selling"
   - Write this down—this is your north star

2. **List everything currently scoped**
   - Export or capture the full feature list, epic breakdown, or requirements
   - Include estimated effort (complexity, days, unknown effort)
   - Note which items were requested by customers, executives, or teams
   - Don't filter yet—capture the complete picture

3. **Run the "what would we NOT build" exercise**
   - For each feature, ask: "Does this directly solve the core problem?"
   - Features that don't solve the core problem are candidates for removal
   - Be honest—gut check, not analysis paralysis
   - Group features into tiers: Essential (solves core), Helpful (makes it better), Nice (polish/edge cases)

4. **Test your cuts against real usage**
   - If you have conversation data, search for how users actually describe the problem
   - Look at support tickets, feedback, or sales calls—what do they ask for first?
   - Does your essential tier match what users most want?
   - Adjust if your cuts miss something users depend on

5. **Apply the "cupcake not wedding cake" principle**
   - Define the smallest version that delivers core value
   - Ask: What's the cheapest way to learn if users actually want this?
   - Example: "Text-based templates before visual editor. CLI before UI dashboard."
   - Can you launch with zero of something and add it post-launch?

6. **Make the hard cuts**
   - For everything not in Essential tier, ask: "Can this wait 4 weeks?"
   - If yes, cut it. Create a backlog item for post-launch.
   - If no, challenge it—does it truly block shipping, or does it just feel safer to include?
   - For every feature you keep, you slow down launch by 2-5 days

7. **Define your quality floor**
   - Scope shrinks; quality doesn't. Set the minimum bar for what ships.
   - Example: "No data loss. Crashes are blocker. Slow UI is acceptable."
   - This prevents cuts from destroying user trust
   - Quality floor is non-negotiable; everything else is negotiable

8. **Create a post-V1 roadmap**
   - Everything you cut goes into a prioritized backlog
   - Show the team what they're deferring, not deleting
   - Psychological win: "We're not removing features, we're phasing them"
   - Makes the V1 cut feel like strategy, not loss

9. **Time-box the cutting decision**
   - If debate on a feature takes more than 10 minutes, you need more data or it doesn't matter
   - Move disputed items to post-V1 without further discussion
   - Decision fatigue kills shipping—cut decisively and move on
   - Aim to have final scope locked within 2-3 hours of this exercise

10. **Sequence the riskiest work first**
    - Once you've cut scope, reorder remaining features by risk
    - Do the most uncertain piece early (technical spike, user validation)
    - This prevents discovering late that you can't ship what you promised
    - Example: "Auth integration first, then reporting, then UI polish"

## Output Format

```
=== SCOPE & CUT RUTHLESSLY: [Project/Feature Name] ===

CORE PROBLEM (North Star)
[Single sentence describing the user pain point you're solving]
Validation: [How you know this is the real problem—ticket data, sales calls, transcript snippet if available]

CURRENT SCOPE INVENTORY
Total Features/Epics: [Count]
Estimated Total Effort: [Range, e.g., 40-60 days]

[Feature Name] | Complexity: [Low/Medium/High] | Effort: [Days] | Type: [Customer request/Executive/Team idea]
[Repeat for each major feature]

TIER ANALYSIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ESSENTIAL (Solves Core Problem)
- [Feature]: Why this is non-negotiable
- [Feature]: Why this is non-negotiable

HELPFUL (Makes It Better)
- [Feature]: Value it adds
- [Feature]: Value it adds

NICE (Polish/Edge Cases)
- [Feature]: Why it can wait
- [Feature]: Why it can wait

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

THE CUT
Original Scope: [Total effort]
V1 Scope: [Reduced effort]
Time Saved: [X days]
Removed From V1: [List of features moving to post-launch]

QUALITY FLOOR (Non-Negotiable)
- [Requirement]: Why it's critical
- [Requirement]: Why it's critical

POST-V1 ROADMAP
Phase 2 (Weeks 5-8): [First batch of deferred features]
Phase 3 (Weeks 9-12): [Second batch]

WORK SEQUENCE (By Risk)
1. [Riskiest item first—new tech, user validation needed]
2. [Second riskiest]
3. [Foundational work]
4. [Build features in dependency order]
5. [Polish and quality gates]

CONFIDENCE & ASSUMPTIONS
Confidence in V1 scope: [50% / 80% / 95%]
Key assumption: [If X doesn't hold, scope needs to change]
Re-estimate date: [Bi-weekly check-in]
```

## Example

**Project: Sales Sync Dashboard for Meridian CRM**

```
=== SCOPE & CUT RUTHLESSLY: Sales Sync Dashboard ===

CORE PROBLEM (North Star)
Sales reps waste 4 hours per week manually checking deal status across email, calendar, and spreadsheets instead of selling.

Validation: In last 6 support calls (Jan-Feb), 5 reps mentioned "status checking" as top friction. Search transcript snippet: "I wish I could see all my open deals in one place without switching between three tools."

CURRENT SCOPE INVENTORY
Total Features/Epics: 8
Estimated Total Effort: 85-110 days

Deal Scorecards | Complexity: High | Effort: 22 days | Type: Customer request
Email Thread Integration | Complexity: Medium | Effort: 14 days | Type: Team idea
Deal Forecast Graph | Complexity: Medium | Effort: 18 days | Type: Executive feature
Multi-User Collaboration | Complexity: High | Effort: 26 days | Type: Enterprise request
Mobile App | Complexity: High | Effort: 28 days | Type: Team idea
Advanced Filtering | Complexity: Low | Effort: 8 days | Type: Nice-to-have
Bulk Actions | Complexity: Low | Effort: 6 days | Type: Customer request
Dark Mode | Complexity: Low | Effort: 3 days | Type: Polish

TIER ANALYSIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ESSENTIAL (Solves Core Problem)
- Deal Scorecards: Central list of all open deals with last update date—directly solves "where's my deal status"
- Basic Filtering: Filter by stage, owner, close date—users can find their deals fast
- Email Thread Integration: See latest email thread in sidebar without context-switching—solves the "going back to Gmail" tax

HELPFUL (Makes It Better)
- Bulk Actions: Batch update deal stage, reduces individual edits—nice for closing loops
- Deal Forecast Graph: Visual trend showing pipeline velocity—helps with forecasting, not core to status checking

NICE (Polish/Edge Cases)
- Multi-User Collaboration: Edit same deal with teammates—enterprise feature, post-launch
- Mobile App: On-the-go access—add post-V1 when web is proven
- Dark Mode: Cosmetic polish—add after user feedback
- Advanced Filtering: Complex queries like "deals over $50k in SaaS vertical"—add when users ask

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

THE CUT
Original Scope: 95 days (midpoint)
V1 Scope: 42 days (Deal Scorecards 22 + Email Integration 14 + Filtering 6)
Time Saved: 53 days (6 weeks acceleration)
Removed From V1: Forecast Graph, Multi-User, Mobile, Dark Mode, Advanced Filters, Bulk Actions (deferred to Phase 2)

QUALITY FLOOR (Non-Negotiable)
- Real-time data sync: Deal changes appear within 30 seconds of CRM update
- Zero data loss: Every deal visible, no hidden records
- Reliable email parsing: No broken threads or parsing errors

WORK SEQUENCE (By Risk)
1. Email thread parsing (Most uncertain—if API unreliable, we pivot to summaries instead)
2. CRM data sync integration (Dependency for everything else)
3. Deal scorecards UI and layout
4. Basic filter logic (stage, owner, date)
5. End-to-end testing and QA

POST-V1 ROADMAP
Phase 2 (Weeks 5-7): Bulk Actions, Deal Forecast Graph, Collaboration (light version)
Phase 3 (Weeks 8-10): Mobile, Advanced Filters, Dark Mode

CONFIDENCE & ASSUMPTIONS
Confidence in V1 scope: 80%
Key assumption: Email API stable; if not, we ship with CRM data only and add email later
Re-estimate date: Every Monday standup for 3 weeks
```

## Edge Cases

- **Stakeholder insists on feature that isn't core**: Acknowledge the request, add to post-V1 roadmap, set a re-evaluation date. "We'll add this in week 6 if we're on pace." Removes pressure to include it in V1.

- **Cutting a feature breaks a dependency**: When you remove Feature A that Feature B depends on, you either remove B too (saves more time) or restore A. Resequence work to identify these chains early.

- **Your "core problem" is actually 3 different problems**: You've identified too broad a scope. Get specific. "Sales reps check status" is too general—narrow to "in morning standup, each rep spends 10 minutes hunting current deal status." This specificity kills feature bloat.

- **You run this exercise and nothing gets cut**: Either your scope was already ruthless, or you didn't get honest about core value. Try the "what would we NOT build" exercise again, or ask: "If we could only ship one of these three things, what wins?" That forces cuts.

- **Post-V1 backlog is huge and demoralizes the team**: Frame it as phased value, not sacrifice. "Week 1-4 solves the core pain. Week 5-8 we add polish and advanced features." Shows the path forward, not a graveyard of deleted features.

- **The cut reduces scope so much the product feels incomplete**: Your core problem identification was off. Go back to step 1. The core problem should be narrow enough that solving it completely doesn't require 20 features.
