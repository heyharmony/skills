---
name: "Manage Timelines"
description: "Estimates project timelines using ranges instead of single points, identifies critical path, tracks progress weekly, and communicates delays before they become surprises. Helps teams move from wishful thinking to realistic planning. Trigger on: timeline estimation, 'how long will this take', deadline pressure, timeline slipping, 'are we on track', burndown concerns, estimate disagreement."
dependencies: []
connectors:
  - name: "Linear"
    reason: "Provides task granularity, effort estimates, and actual completion rates to calculate velocity and refine future estimates"
  - name: "GitHub"
    reason: "Shows PR merge patterns and deployment frequency to reveal actual team capacity and velocity"
  - name: "Asana"
    reason: "Captures task estimates and actual completion for teams using Asana; useful for comparing estimated vs actual timeline"
  - name: "Slack"
    reason: "Surfaces delays and blockers mentioned in real-time discussions before they formally impact the timeline"
  - name: "Google Calendar"
    reason: "Identifies vacation, all-hands meetings, and other calendar events that reduce available capacity during the timeline"
author: "Harmony"
version: "1.0.0"
icon: "sparkles"
cover: ""
screenshots: []
category: "Operations"
---

## Purpose

Most teams estimate timelines by picking a number and hoping it works out. Then they're surprised when reality diverges. This skill replaces wishful thinking with structured estimation: using ranges instead of single points, calculating actual velocity, identifying the critical path (what can't slip without delaying everything), and re-estimating weekly as you learn.

The planning fallacy is real—humans systematically underestimate how long things take. Ranges (2-4 weeks instead of 3 weeks) acknowledge uncertainty. Tracking actual velocity (how much work the team completes per week) replaces guesses with data. Weekly re-estimation catches problems while you can still do something about them, not 2 weeks after the deadline.

## When to Use

- **Making a commitment to leadership or customers**: You have a hard deadline. This skill creates a realistic estimate and shows what could slip if assumptions change.

- **Timeline has already slipped once**: You missed your first estimate. Use this skill to understand why (was it the estimate, hidden dependencies, or team capacity?) and build a more honest plan.

- **Team is asked "how long?" with no data**: You don't have velocity history. This skill walks you through estimating from first principles while identifying the unknowns.

- **Dependencies are unclear**: You can't see why your work is blocked. This skill maps the critical path and shows what's blocking you.

- **Leadership is breathing down your neck on status**: Weekly re-estimation gives you weekly visibility so you're never surprised by a timeline miss. You see it coming and communicate it early.

- **Estimates keep getting challenged**: Someone says "this should take 2 weeks" but the person doing the work says "4 weeks." This skill creates a framework to resolve that debate with data.

- **Post-mortem on last project**: Your timeline was wildly off. This skill helps you figure out where estimating failed and how to improve next time.

## Instructions

1. **Break the Project into Tasks, Not Epics**
   - Your first instinct: "Build a dashboard" (too big, too vague)
   - This skill: Break it into tasks that take 1-5 days each
   - Example: "API endpoint for deal data" (3 days), "Dashboard UI layout" (2 days), "Test suite for API" (2 days)
   - If a task can't be estimated in days, it's too big—break it down further
   - Aim for 20-40 tasks for a 2-month project (each task is discrete, testable, completable in a sprint)
   - Assign a task owner (who'll actually do the work, not guess about the work)

2. **Estimate in Ranges, Not Single Points**
   - For each task, ask the owner: "In best case? In worst case? Most likely?"
   - Best case: Things go smoothly, no surprises, dependencies come through on time → Low estimate
   - Worst case: You hit unexpected issues, dependencies are late, you need to rework → High estimate
   - Most likely: Reality, with some friction → Middle estimate
   - Example: "This API integration is 2-3 days best, 5-7 days worst, 4 days most likely"
   - Never use single points ("3 days"). Use ranges: "3-5 days"
   - The range acknowledges that you don't have perfect information

3. **Identify and Quantify the Unknowns**
   - For each task, ask: "What could go wrong?"
   - Unknown technical complexity: "Is the database query optimizable? We don't know until we try" → Spike it, then estimate
   - External dependencies: "Does the third-party API actually support this use case?" → Verify before you commit
   - Team availability: "Are you working on other projects?" → Account for split context
   - Integration risk: "Does this play well with existing code?" → Flag as a risk that could add 2-3 days
   - List the unknowns explicitly—don't hide them in the estimate range
   - For each unknown, decide: Do we de-risk it before committing (spike), or accept the risk and buffer for it?

4. **Calculate Your Team's Velocity**
   - Velocity = How much work your team actually completes per week (not estimates, actual completion)
   - Look at last 3-4 completed projects: How many task-days did you finish per week?
   - Example: "Last project, we estimated 120 days of work. We finished in 7 weeks. That's ~17 days per week velocity."
   - Don't confuse capacity with velocity: You might have 10 people × 5 days = 50 capacity, but velocity is usually 60-70% of capacity (meetings, context-switching, unknowns kill 30-40%)
   - If you have no history, assume 60% efficiency: 10 people × 5 days × 60% = 30 days of work per week
   - Velocity is your reality check—it's how you know if your timeline is possible

5. **Work Backwards from Your Deadline**
   - Start with the launch date (you have a hard deadline, right?)
   - Count backwards to today: How many weeks until launch?
   - Divide total estimated work by weekly velocity: "120 days / 17 days per week = 7 weeks"
   - If your launch is in 6 weeks and you need 7 weeks of work, you're underwater—scope must shrink
   - If your launch is in 8 weeks and you need 7 weeks, you have 1 week of buffer (good)
   - This forces the honest conversation early: Either reduce scope, extend timeline, or add resources

6. **Identify the Critical Path**
   - The critical path is the longest sequence of dependent tasks
   - If Task A blocks Task B, and Task B blocks Task C, and this chain is longer than anything else, that's your critical path
   - Everything not on the critical path can slip a bit without delaying the launch (they have float)
   - Everything on the critical path cannot slip—any delay delays the entire project
   - Example: Auth integration → User dashboard → Reporting → Launch (this is critical path, 6 weeks). Meanwhile, UI polish is done in parallel and has 2 weeks float.
   - Focus your energy on critical path items; if they're delayed, everything is delayed

7. **Create 2-Week Checkpoints (Not Monthly)**
   - Estimate by week for the first month, then by 2 weeks for the rest
   - Each checkpoint should have 2-4 measurable outcomes: "Auth system complete and tested", "Dashboard showing live data"
   - These aren't soft goals—they're milestones you either hit or miss
   - Track actual vs estimated: "We estimated 5 days for this, it took 7 days. Why?"
   - This is where you spot problems early (hidden complexity, dependency delays, team issue) and adjust

8. **Re-Estimate Every Week**
   - Pick a day (Wednesday is good—mid-week, you've learned something, you can adjust for the rest of the week)
   - Ask each task owner: "Still think this is X-Y days? Or have you learned something?"
   - Update estimates as you learn—don't keep original estimates that are now wrong
   - Update the critical path: Have new dependencies emerged? Is the path still the same?
   - Update the launch date forecast: "Based on velocity last week and remaining work, we'll finish on March 28" (not your original deadline, but what's realistic)
   - Share this weekly: Leadership sees you're tracking, you're re-estimating, you're honest about slips before they happen

9. **Communicate Changes Early**
   - If you spot a timeline slip early (2+ weeks before it was going to hit), communicate it immediately
   - Don't wait until the last minute. "We're going to miss the April 1 deadline by 1 week" said on March 1st is manageable. Said on March 25th is a crisis.
   - Be specific: "Why are we slipping? A, B, and C came in longer than expected, and D is blocked by missing dependency."
   - Offer options: "We can cut scope here, extend timeline, or add resources here. What works for you?"
   - This conversation is way easier when you have data (actual velocity, task breakdown, critical path)

10. **Use Confidence Levels Instead of False Certainty**
    - Don't say "We'll launch April 1." Say "We're 50% confident we launch March 28, 80% confident we launch by April 4, 95% confident we launch by April 11."
    - Confidence levels are honest about uncertainty without being alarmist
    - Example: "Best case (if no unexpected complexity), April 1. Most likely (with normal friction), April 8. Worst case (if we hit major issues), April 15."
    - Leadership understands uncertainty better when you frame it this way
    - As you execute and reduce unknowns, your confidence in the near-term increases and ranges tighten

## Output Format

```
=== MANAGE TIMELINES: [Project Name] ===

PROJECT OVERVIEW
Deadline: [Hard/Soft/Internal target]
Scope: [X features/tasks]
Team Size: [Number of people]
Available Duration: [Today to Deadline = X weeks]

TASK BREAKDOWN & ESTIMATES
[Task Name] | Owner: [Person] | Best: [Days] | Most Likely: [Days] | Worst: [Days] | Dependencies: [What blocks this]
[Task Name] | Owner: [Person] | Best: [Days] | Most Likely: [Days] | Worst: [Days] | Dependencies: [What blocks this]
[Task Name] | Owner: [Person] | Best: [Days] | Most Likely: [Days] | Worst: [Days] | Dependencies: [What blocks this]

[Repeat for all major tasks]

UNKNOWNS & RISKS
Risk: [Unknown complexity / External dependency / Team availability / Integration challenge]
Impact: [Could add X days to timeline]
De-risk approach: [Spike / Verify / Parallel work / Buffer]

[Repeat for 4-6 major unknowns]

VELOCITY CALCULATION
Historical Data: [Last 3 projects: X days estimated, completed in Y weeks]
Calculated Velocity: [X days/week]
Team Capacity: [X people × Y days/week = Z capacity]
Realistic Velocity (accounting for meetings, context-switching): [Z × 60-70% = realistic days/week]

CRITICAL PATH
Longest sequence of dependent tasks:
Task A (3 days) → Task B (5 days) → Task C (4 days) → Task D (2 days)
Critical Path Duration: [Total days on critical path]

Non-critical tasks (have float):
Task E (3 days, can start anytime, 2 weeks float)
Task F (2 days, can start anytime, 3 weeks float)

TIMELINE FORECAST
Total Estimated Work: [X days at most likely estimate]
Weekly Velocity: [Y days/week]
Weeks Needed: [X / Y = Z weeks]
Available Weeks: [From today to deadline]

Current Forecast:
- 50% confident: Launch by [Date] (if everything goes smoothly)
- 80% confident: Launch by [Date] (with normal friction)
- 95% confident: Launch by [Date] (worst case, but still reasonable)

CHECKPOINT SCHEDULE
Week 1 ([Date]): [Measurable outcome 1, outcome 2]  Status: [✓ On Track / ⚠ At Risk / ✗ Blocked]
Week 2 ([Date]): [Measurable outcome 1, outcome 2]  Status: [✓ On Track / ⚠ At Risk / ✗ Blocked]
Week 3 ([Date]): [Measurable outcome 1, outcome 2]  Status: [✓ On Track / ⚠ At Risk / ✗ Blocked]
Week 4 ([Date]): [Measurable outcome 1, outcome 2]  Status: [✓ On Track / ⚠ At Risk / ✗ Blocked]

[Continue through launch]

LAST WEEK ESTIMATE
[Re-estimated forecast based on weekly updates; updated every Wednesday]
Original deadline: [Original date]
Current forecast: [New date]
Variance: [Slipping by X days]
Reason for variance: [What's taking longer than expected?]
```

## Example

**Project: Reporting Dashboard for TechVenture Sales**

```
=== MANAGE TIMELINES: Reporting Dashboard ===

PROJECT OVERVIEW
Deadline: April 15, 2026 (Hard—committed to customer)
Scope: Deal analytics, sales rep leaderboard, pipeline forecast
Team Size: 2 engineers, 1 designer, 1 analyst
Available Duration: Today (March 24) to April 15 = 3 weeks

TASK BREAKDOWN & ESTIMATES
Data Warehouse Schema | Owner: Chen | Best: 2 | Most Likely: 3 | Worst: 5 | Dependencies: None
ETL Pipeline from CRM | Owner: Chen | Best: 3 | Most Likely: 5 | Worst: 8 | Dependencies: Schema
API Endpoints for Dashboard | Owner: Marcus | Best: 2 | Most Likely: 4 | Worst: 6 | Dependencies: ETL pipeline
Dashboard UI Layout | Owner: Sarah (Design) | Best: 1 | Most Likely: 2 | Worst: 3 | Dependencies: Requirements finalized
Analytics Components (charts, tables) | Owner: Marcus | Best: 3 | Most Likely: 5 | Worst: 7 | Dependencies: API endpoints
Rep Leaderboard | Owner: Chen | Best: 2 | Most Likely: 3 | Worst: 5 | Dependencies: ETL pipeline
Forecast Model | Owner: Analyst | Best: 2 | Most Likely: 4 | Worst: 7 | Dependencies: Historical data available
Test Suite | Owner: Marcus | Best: 2 | Most Likely: 3 | Worst: 5 | Dependencies: All features complete
Security & Permissions | Owner: Chen | Best: 1 | Most Likely: 2 | Worst: 4 | Dependencies: API endpoints
Documentation & Onboarding | Owner: Sarah | Best: 1 | Most Likely: 2 | Worst: 3 | Dependencies: Features complete

UNKNOWNS & RISKS
Risk: CRM data quality—missing fields, inconsistent formats. Impact: ETL might need custom handling. De-risk: Check data quality this week.
Risk: Forecast model complexity—do simple linear regression or build something fancier? Impact: 2-5 days. De-risk: Spike forecast model by March 27.
Risk: Rep leaderboard has performance issues with 500+ reps. Impact: Could add 2-3 days for optimization. De-risk: Load test early.
Risk: Marcus is context-switching to support bugs. Impact: Could slow dashboard work 10-20%. De-risk: Carve out protected time; shift support to Chen.
Risk: Design feedback rounds. Impact: Could add 1-2 days if Sarah needs to iterate. De-risk: Get executive sign-off on design by March 26.

VELOCITY CALCULATION
Historical Data:
- Last project (CRM Integration): Estimated 80 days, completed in 5.5 weeks = 14.5 days/week
- Previous project (Email Sync): Estimated 60 days, completed in 4 weeks = 15 days/week
- Two projects back (Mobile App): Estimated 120 days, completed in 8 weeks = 15 days/week

Calculated Velocity: ~15 days/week (most likely) = 3 engineers working in parallel
Team Capacity: 2 engineers × 5 days/week = 10 days/week + 1 analyst × 5 days/week = 15 days/week
Realistic Velocity (accounting for meetings, context-switching): 15 × 70% = 10.5 days/week (accounting for 30% overhead)

CRITICAL PATH
Task A (Data Warehouse Schema, 3 days) → ETL Pipeline (5 days) → API Endpoints (4 days) → Analytics Components (5 days) → Testing (3 days) = 20 days
Alternative path: Forecast Model (4 days) → API integration (1 day) → Dashboard display (2 days) = 7 days

Critical Path: Schema → ETL → API → Analytics → Testing = 20 days

Non-critical tasks (can run in parallel or have float):
- UI Layout (2 days): Can start while ETL is running, no dependency
- Rep Leaderboard (3 days): Depends on ETL, but not on critical path (API is on critical path)
- Security (2 days): Can run in parallel, minimal float
- Documentation (2 days): Runs after everything else, 3 days float if needed

TIMELINE FORECAST
Total Estimated Work: 3+5+4+2+5+3+4+3+2+2 = 33 days (most likely estimates)
Weekly Velocity: 10.5 days/week (realistic, accounting for overhead)
Weeks Needed: 33 / 10.5 = 3.1 weeks
Available Weeks: 3 weeks (March 24 to April 15)

We're tight. We have no buffer. A slip of 2-3 days puts us past the deadline.

Current Forecast:
- 30% confident: Launch by April 8 (if everything is smooth)
- 60% confident: Launch by April 12 (with normal friction)
- 90% confident: Launch by April 18 (if we hit some snags)

We're going to miss April 15 unless we cut scope or add resources.

CHECKPOINT SCHEDULE
Week 1 (Mar 31): Schema complete, ETL 50% done, Design approved | Status: ⚠ At Risk (Design review is tight)
Week 2 (Apr 7): ETL complete, API endpoints complete, UI + Analytics 50% done | Status: ⚠ At Risk (ETL might run over)
Week 3 (Apr 14): Everything complete except testing, testing 50% done | Status: ⚠ At Risk (Forecast model might slip)
Week 4 (Apr 21): All testing complete, launch ready | Status: TBD

LAST WEEK ESTIMATE (Updated March 24)
Original deadline: April 15
Current forecast: April 18 (3 days slipping)
Variance: +3 days vs. original plan
Reason for variance: Forecast model estimated at 4 days, was originally 2—design complexity higher. ETL might need data cleaning.

OPTIONS:
A) Cut scope: Remove forecast model, launch April 12 (satisfies April 15 deadline)
B) Extend timeline: Request April 18-20 launch date; customer announces 1 week late
C) Add resources: Bring in a contractor for data work; costs more but hits April 15
D) Parallel track: Start testing in parallel with development; might find issues early
```

## Edge Cases

- **One person's estimate is wildly different from another's**: "I think this is 2 days, but you said 5 days." This gap reveals missing information. Have the person doing the work explain the complexity to the estimator. Usually, one of you sees something the other didn't. Update both estimates with the new info, not your original guesses.

- **Velocity is lower than you expected**: You hit 8 days/week instead of 15. Before panicking, ask: Did estimates include unknowns, or were they wishful? Did the team get sidetracked? Is this the reality you need to plan with? Don't change the velocity number in next week's estimate—if you're running at 8, plan with 8. Build in reality, not hopes.

- **Critical path shifts mid-project**: Your original critical path was A→B→C. Then you discover B is easier than thought and C is harder. The critical path becomes A→C→D. This is fine—re-identify the critical path weekly. Focus on what's actually blocking you now.

- **A task is blocked and you can't estimate when it will unblock**: "We're waiting on the third-party API." Don't guess. Set a re-check date: "We'll know by March 28 if the API works." Plan as if it will be late, and celebrate if it comes early. Puts the risk where it belongs.

- **Team availability changes**: Someone gets sick, or a critical fire pulls a person off the project. Velocity drops. Re-estimate immediately. Better to tell leadership "we need 4 weeks now, not 3" than to miss the deadline.

- **Estimates are consistently off in one direction**: Every project slips 20%. This isn't project-specific; it's your team's tendency. Build a 1.2x multiplier into all estimates. If estimates say 5 days, plan 6 days. This is honest, not pessimistic.
