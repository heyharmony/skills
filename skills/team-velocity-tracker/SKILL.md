---
name: "Track Team Delivery Velocity"
description: "Measure real team delivery velocity by cross-referencing what was committed in standups, sprint planning, and retros against what actually shipped. Use conversation data to surface patterns: which teams over-commit, which deliver reliably, where bottlenecks emerge from the words people say. Trigger on: velocity analysis, team performance metrics, delivery tracking, sprint retrospective, capacity planning, bottleneck identification."
dependencies: []
connectors:
  - name: "Linear"
    reason: "Pulls actual tickets shipped vs. promised. Maps cycle time, completion rate, and scope changes to surface real vs. estimated velocity"
  - name: "Google Calendar"
    reason: "Analyzes meeting time, interruptions, and focus blocks to correlate team meetings with delivery capacity"
  - name: "Slack"
    reason: "Parses standup updates and team discussions to extract sentiment, blocker patterns, and delivery confidence signals from team language"
  - name: "GitHub"
    reason: "Pulls PR/commit data, code review time, and deployment frequency to measure shipping velocity across branches and teams"
  - name: "Notion"
    reason: "Tracks sprint goals, scope, and roadmap commitments to compare planned vs. actual delivery across multiple teams"
author: "Harmony"
version: "1.0.0"
icon: "sparkles"
cover: ""
screenshots: []
category: "Operations"
---

## Purpose

Velocity isn't a number. It's a pattern. "Team A says they'll ship 8 points but consistently ship 5. Team B says 6 and ships 7." This skill measures real team delivery by bridging conversation data (what teams *say* they'll do) with execution data (what they *actually* shipped). By analyzing standups, sprint planning, retros, and Slack discussions, it identifies velocity patterns: which teams over-commit, which have hidden blockers, where scope creep happens, which teams improve each sprint. Works from Harmony conversation data to extract velocity signals (team confidence, blocker language, scope negotiation) and maps them to Linear/GitHub execution data. Surface the patterns so leaders can understand real capacity and teams can improve estimation.

## When to Use

- You're doing sprint retrospective and need to understand why velocity fluctuates. Why was last sprint low?
- Capacity planning for a big initiative. Which team has the bandwidth? Whose velocity is predictable?
- A team says they're doing great, but Linear shows they shipped way less than they promised. Understand the gap.
- Your org is growing and you're scaling teams. Which teams should you model new hires' estimation after?
- A team's velocity is declining sprint after sprint. Understand why from the words they use in standups (blockers, frustration, context switching).
- You're trying to forecast when a major feature will ship. Use velocity history + current sprint breakdown to predict.
- Retro blame game: "Why didn't we ship?" Use velocity data to understand if it's estimation, blockers, scope change, or team capacity.

## Instructions

### 1. Gather sprint and execution context

Start by asking:

- **What time period?** (Last 3 sprints, last quarter, all of last year?)
- **Which teams?** (Specific team, entire engineering org, cross-functional product team?)
- **What's the sprint structure?** (1 week, 2 weeks, monthly?) How are sprints tracked in Linear/Jira?

Pull data from Harmony:
- Sprint planning meetings
- Daily standups (Slack channel, video recordings, or text updates)
- Retro meetings
- Sprint review/demo meetings

Pull data from Linear/GitHub:
- Tickets committed per sprint
- Tickets completed per sprint
- Cycle time (creation to close)
- Scope changes (tickets added/removed mid-sprint)
- Blockers (issues, PRs stuck in review)

### 2. Extract velocity signals from conversation data

Analyze what teams *say* about their capacity and progress.

**In sprint planning:**
- How confident are they? ("We can definitely do this" vs. "This might be stretch" vs. "We'll try")
- Do they negotiate scope? (Pushback on workload, asking for less, asking for more?)
- What dependencies do they call out? (Other teams, external APIs, infrastructure blockers?)

**In daily standups:**
- What's the tone? (Energized, flat, frustrated, overwhelmed?)
- What blockers are mentioned? (Same blockers repeating? New ones emerging? Resolved?)
- How much context switching? ("I spent 2 hours on the incident, then worked on feature X")
- How much unplanned work? ("Customer escalation," "Fixing prod bug," "Helping other team")

**In retros:**
- What did they identify as limiting velocity? (Meetings, unclear specs, blockers, team capacity, estimation error)
- Did they commit to process improvements?
- Do they acknowledge over-commit pattern, or blame external factors?

**Language patterns that indicate risk:**
- "We're hoping to..." (low confidence)
- "It depends on..." (external dependency, uncontrolled timeline)
- "We'll probably need to push..." (realizing mid-sprint they won't make it)
- "That was a blocker, then we..." (unplanned blockers eating time)
- "We got interrupted by..." (context switch + unplanned work)

**Positive velocity signals:**
- "We crushed this sprint" (team confidence)
- "We're clearing blockers before they hit us" (proactive)
- "We underestimated, so we did extra" (delivery over promises)
- "Scope is stable, timeline is clear" (predictable conditions)

### 3. Compare promised vs. delivered

For each sprint, extract:

**Promised (from sprint planning):**
- How many points/tickets did team commit to?
- What's the scope (features, bugs, tech debt)?
- What were assumptions/risks called out?

**Delivered (from Linear/GitHub):**
- How many tickets were completed?
- Were they the same tickets promised, or did scope change?
- How many new tickets were added mid-sprint (scope creep)?
- How many were removed (descope)?
- What happened to tickets that didn't ship? (Moved to next sprint, abandoned, reopened?)

**Math:**
- Promised velocity: [points/tickets committed]
- Actual velocity: [points/tickets completed]
- Variance: [Actual - Promised]
- Consistency: [Does this match their pattern?]

### 4. Extract blockers and patterns from language

Go deeper on *why* velocity varies.

**Blocker patterns:**
- What blockers are mentioned repeatedly across sprints? (Code review slowness, flaky tests, waiting on design, API team delay)
- How long does each blocker take to resolve? (30 minutes vs. 3 days)
- Are blockers owned or external? (Team's own CI problem vs. waiting on another team)

**Unplanned work:**
- How much time goes to incidents, escalations, and unplanned work?
- Is it predictable? (We lose X hours to incidents each sprint)
- Is it trending? (Getting better or worse?)

**Context switching:**
- How many different projects/areas is the team touching?
- Are interruptions from within the team or external?
- Does context switching correlate with lower velocity?

**Process friction:**
- Do retros mention meetings, specs, approval gates?
- Is the team frustrated with "how we work" or just focused on "what we ship"?

### 5. Calculate velocity metrics and trends

For the time period in scope:

**Per-team metrics:**
- **Average velocity:** [points/tickets per sprint]
- **Velocity variance:** [Std dev — how predictable is this team?]
- **Promised-to-delivered ratio:** [Actual / Promised % — do they over-promise?]
- **Scope stability:** [% of planned tickets that shipped vs. added/removed]
- **Blocker frequency:** [Blockers per sprint, avg resolution time]

**Trend analysis:**
- Is velocity improving sprint-over-sprint?
- Did a process change (meeting reduction, new tool) correlate with velocity change?
- When did velocity dip, and what changed that sprint? (Incident, team change, project priority shift)

**Comparative metrics:**
- Which teams have highest velocity? Why? (Experience, process, scope)
- Which teams have most predictable velocity? Why?
- Which teams over-commit most? Which under-commit?

### 6. Surface patterns and recommendations

For each team, create a velocity narrative:

**Team profile:**
- Average velocity and consistency
- Are they over-committers, accurate estimators, or conservative?
- Are they blocked by external factors or internal process?

**What's working:**
- [Specific behavior or condition that drives high velocity]

**What's limiting:**
- [Specific blocker, process friction, or estimation error]

**Trend:**
- [Improving / Stable / Declining] — What's the reason?

**Recommendation:**
- [Specific action to improve velocity or unlock blocked capacity]

## Output Format

```markdown
# Team Velocity Report — [Sprint / Quarter / Team Name]
_Period: [dates] · Data from: Harmony conversations + Linear/GitHub execution_

## Executive Summary
[2–3 sentences: Overall velocity health across teams. Highest performers. Biggest opportunities. One key pattern to address.]

## Velocity Overview
| Team | Avg Velocity | Promised-to-Delivered | Variance (±) | Trend | Status |
|------|-------------|----------------------|-------------|-------|--------|
| [Team A] | [XX points/sprint] | [XX%] | [+/- points] | ↗ / → / ↘ | [Healthy / At risk / Declining] |
| [Team B] | [XX points/sprint] | [XX%] | [+/- points] | ↗ / → / ↘ | [Healthy / At risk / Declining] |

## Per-Team Deep Dives

### [Team A Name]
**Profile:** [Avg velocity] points/sprint, [consistency: Predictable / Volatile]

**Over-commit pattern?** [Yes (promise 10, deliver 6) / No (promise 6, deliver 7) / Balanced]

**Promised vs. Delivered (last 3 sprints):**
| Sprint | Promised | Delivered | Variance | Notes |
|--------|----------|-----------|----------|-------|
| Sprint N-2 | [XX] | [XX] | [±XX] | [What happened] |
| Sprint N-1 | [XX] | [XX] | [±XX] | [What happened] |
| Sprint N | [XX] | [XX] | [±XX] | [What happened] |

**Blocker Analysis:**
- [Blocker 1]: [Frequency, resolution time, who owns it]
- [Blocker 2]: [Frequency, resolution time, who owns it]
- [Scope creep]: [% of tickets added mid-sprint, typical reasons]

**Team Language & Signals:**
- Confidence level in planning: [High / Medium / Low]
- Blocker language in standups: [Examples from actual standups]
- Retro insights: [What team identified as limiting velocity]

**Trend:**
- Last 3 sprints: [↗ Improving / → Stable / ↘ Declining]
- Why: [Reason from conversation data + execution data]

**Capacity & Utilization:**
- Estimated focus time (no meetings): [X hours/week]
- Actual focus time (from calendar analysis): [X hours/week]
- Interruption load: [% of time spent on unplanned work / incidents]

**What's Working:**
- [Specific behavior, process, or condition]

**What's Limiting:**
- [Specific blocker or friction point]

**Recommendation:**
- [Specific action to improve velocity]

## Velocity Trends Across Teams
[Graph or narrative of how each team's velocity has evolved]

## Blockers & Bottlenecks (Organization-wide)
| Blocker | Frequency | Owner | Status | Impact |
|---------|-----------|-------|--------|--------|
| [Blocker 1] | [# teams, # sprints] | [Team / External] | [Active / Resolved] | [Velocity impact: ±X points] |
| [Blocker 2] | [# teams, # sprints] | [Team / External] | [Active / Resolved] | [Velocity impact: ±X points] |

## Capacity Forecast
[Based on current velocity and team composition, estimate:]
- **Feature X:** At current velocity, ships by [date]
- **Feature Y:** At current velocity, ships by [date]
- **If velocity improves by [X]:** Ships by [earlier date]
- **If new blocker emerges:** Ships by [later date]

## Top 3 Velocity Levers (Quick Wins)
1. [Specific action + estimated velocity impact]
2. [Specific action + estimated velocity impact]
3. [Specific action + estimated velocity impact]

---

**Now what?** Address the top 3 levers immediately (they unlock bandwidth). Use team profiles in 1:1s and capacity planning discussions. Forecast major features based on current velocity. Track whether velocity improvements stick after process changes.
```

## Example

**User:** "We're planning Q2. I need to understand our team's real velocity so I can commit to the roadmap. Can you pull data from the last quarter and show me which teams are over-committers vs. reliable?"

**Output:**

```markdown
# Team Velocity Report — Engineering Team, Q1 2026
_Period: Jan 1 – Mar 31, 2026 · Data from: Harmony standups + Linear_

## Executive Summary
3 engineering teams, 13 sprints (4 per team). Average velocity: 28 points/sprint across org. Pattern: Backend team (Chen) consistently over-commits (promises 35, delivers 26); Frontend team (Alex) is conservative and reliable (promises 18, delivers 19); Platform team (Priya) has high variance (28–42 points, unpredictable). Biggest velocity drag: code review bottleneck (avg 3 days per PR) and infrastructure blockers. Opportunity: Clear code review SLA, unblock platform team's infra work. Q2 roadmap should account for Backend team's actual 26-point velocity, not their promised 35.

## Velocity Overview
| Team | Avg Velocity | Promised-to-Delivered | Variance (±) | Trend | Status |
|------|-------------|----------------------|-------------|-------|--------|
| Backend (Chen, Marcus) | 26 pts/sprint | 74% (promise 35, deliver 26) | -9 pts | ↘ (declining) | At Risk |
| Frontend (Alex, Yuki) | 19 pts/sprint | 106% (promise 18, deliver 19) | +1 pts | ↗ (improving) | Healthy |
| Platform (Priya, James) | 35 pts/sprint | 88% (promise 40, deliver 35) | -5 pts | → (flat/volatile) | Volatile |

## Per-Team Deep Dives

### Backend Team (Chen, Marcus)
**Profile:** 26 points/sprint average, highly predictable (consistent under-delivery)

**Over-commit pattern?** YES — Consistently promise 35, deliver 26. Variance: -9 points/sprint (worst in org)

**Promised vs. Delivered (last 3 sprints):**
| Sprint | Promised | Delivered | Variance | Notes |
|--------|----------|-----------|----------|-------|
| Sprint 10 | 35 | 25 | -10 | Code review delays on OAuth refactor; pushed 3 PRs to Sprint 11 |
| Sprint 11 | 35 | 28 | -7 | Same code review bottleneck; added unplanned API incident mid-sprint |
| Sprint 12 | 35 | 25 | -10 | Kafka evaluation work (unplanned) + code review pile-up |

**Blocker Analysis:**
- **Code review slowness:** Appears in standups 8/12 days last sprint. Avg resolution: 2–4 days per PR. Chen noted: "I have 5 PRs waiting for review from James, he's on vacation next week." Impact: -4 points/sprint estimated.
- **Unplanned work:** Incidents + escalations. Sprint 11: "Prod API memory leak," 1.5 days of Chen's time. Sprint 12: "Kafka evaluation from leadership," 2 days of Marcus's time. Pattern: 1–2 days/sprint of unplanned work.
- **Scope clarity:** In retro, Marcus said "we weren't clear on OAuth scope, so we broke it into 6 PRs instead of 3." Over-scoped, then couldn't finish in sprint.

**Team Language & Signals:**
- Confidence level in planning: Medium (Chen: "I think we can do this, but if James gets blocked, we're toast")
- Blocker language in standups: "Waiting for review," "code review queue is long," "we're backlogged on reviews"
- Retro insights: "Code review is our bottleneck. We need a clear SLA. Also, can we get more notice on unplanned work?"

**Trend:**
- Last 3 sprints: ↘ Declining velocity (35→35→35 promised, 25→28→25 delivered, getting worse)
- Why: Code review backlog worsening. Unplanned work increasing. New team members take longer to review/write code.

**Capacity & Utilization:**
- Estimated focus time (no meetings): 32 hours/week
- Actual focus time (from calendar): 24 hours/week (8 hours in meetings + blockers)
- Interruption load: 15% of time on incidents/unplanned work

**What's Working:**
- Auth refactor is solid (good architecture, even if over-scoped)
- Team communicates blockers clearly in standups
- Marcus pushed back on scope mid-sprint, which is good

**What's Limiting:**
- **Code review bottleneck (#1):** PRs sitting 2–4 days waiting for review. James (only senior reviewer) is overloaded. New team members (Yuki came in Jan) slow down review velocity.
- **Scope creep:** Consistently over-promise in planning because they don't account for uncertainty (reviews, incidents, clarifications). Should plan for 26 points, not 35.
- **Unplanned work:** 1–2 days/sprint lost to incidents + escalations + "leadership asks." No buffer in plan.

**Recommendation:**
1. **Implement code review SLA:** Max 24 hours for PR review. Add second senior reviewer (pair with Frontend team's Alex for 3 sprints to build capacity).
2. **Reduce planned velocity to 26 points** (from 35). Add back in 1–2 points as "unplanned work buffer."
3. **In-cycle scope negotiation:** After 3 days into sprint, if velocity looks low, descope rather than pushing to next sprint.

---

### Frontend Team (Alex, Yuki)
**Profile:** 19 points/sprint average, highly predictable (consistently meet/exceed estimates)

**Over-commit pattern?** NO — Promise 18, deliver 19. Variance: +1 point/sprint (most reliable)

**Promised vs. Delivered (last 3 sprints):**
| Sprint | Promised | Delivered | Variance | Notes |
|--------|----------|-----------|----------|-------|
| Sprint 10 | 18 | 19 | +1 | Shipped 1 extra story; good velocity |
| Sprint 11 | 18 | 20 | +2 | Built extra design components; good team energy |
| Sprint 12 | 18 | 17 | -1 | Waiting on Backend API (auth refactor). Delivered what they could; marked API-dependent story blocked. |

**Blocker Analysis:**
- **Backend API dependency:** Sprint 12, 3-day wait for OAuth API. Alex noted: "We're done with UI, but can't test without the API." Blocker was external (Backend code review delays).
- **Design clarity:** Occasionally wait for product specs (avg 1 day/sprint). Resolved quickly when escalated.
- **Unplanned work:** Very low (0.5 days/sprint on average). Team is focused.

**Team Language & Signals:**
- Confidence level in planning: High (Alex: "We know exactly what we're building; we'll hit this")
- Blocker language in standups: Rare. When blockers do come up, Alex asks for unblock explicitly. "Backend API is 3 days late, so we're moving to Polish work."
- Retro insights: "We're limited by what Backend can ship. We'd like clearer handoffs on API timelines."

**Trend:**
- Last 3 sprints: ↗ Improving (consistent delivery, growing confidence)
- Why: Clear scope, good team cohesion. Yuki (new hire) ramps fast.

**Capacity & Utilization:**
- Estimated focus time: 32 hours/week
- Actual focus time: 30 hours/week (minimal meetings)
- Interruption load: Very low (0.5 hours/week on average)

**What's Working:**
- Clear scope = accurate estimation = reliable delivery
- Team owns their commitments and communicates early when blocked
- Proactive planning (Alex plans "Polish work" as fallback if Backend slips)
- Yuki integrates well; ramping faster than expected

**What's Limiting:**
- **Dependency on Backend:** When Backend slips, Frontend hits a ceiling. Can't test without APIs.
- Minor: Design specs occasionally late (1 day/sprint), but team escalates and resolves

**Recommendation:**
1. **API-first planning:** Frontend team should get API specs 2 weeks early so they can build stubs and start testing before Backend finishes.
2. **Fallback scope:** Keep "Polish work" in plan as intentional buffer for Backend delays (you're already doing this, keep it up).
3. **Pair with Backend on code review:** Since Frontend writes clean code, pair Alex with Backend team on reviews to build mutual code quality practices.

---

### Platform Team (Priya, James)
**Profile:** 35 points/sprint average, HIGH VARIANCE (28–42 points, hard to forecast)

**Over-commit pattern?** MODERATE — Promise 40, deliver 35. Variance: -5 points/sprint, but range is huge (28–42)

**Promised vs. Delivered (last 3 sprints):**
| Sprint | Promised | Delivered | Variance | Notes |
|--------|----------|-----------|----------|-------|
| Sprint 10 | 40 | 42 | +2 | Kafka migration prep went smoothly; team shipped extra infrastructure work |
| Sprint 11 | 40 | 28 | -12 | AWS account issue + DNS migration conflict. Unplanned infra work ate 2 days. |
| Sprint 12 | 40 | 35 | -5 | Better (back to trend), but CI/CD delays still lingering from Sprint 11 |

**Blocker Analysis:**
- **Infrastructure incidents:** Unpredictable. Sprint 11: AWS account misconfiguration (2 days to resolve). This wasn't planned. Pattern: 1 major incident per 2–3 sprints (1–3 days impact).
- **Dependency management:** CI/CD pipeline is fragile. Priya noted: "We're doing Kafka migration, but we also have to maintain legacy CI. It's context-switching between old and new."
- **Unplanned maintenance:** 2–3 days/sprint on "keeping the lights on" (patching, security updates, upgrades).

**Team Language & Signals:**
- Confidence level in planning: Medium-Low (Priya: "We're planning 40, but if there's an incident, we'll drop to 25")
- Blocker language in standups: "Incident in prod," "DNS is broken," "CI pipeline is flaky," "we're on-call this week" (increases blockers)
- Retro insights: "We're managing too many systems at once. Kafka migration + legacy CI + on-call duties = scattered focus. We need to descope one thing."

**Trend:**
- Last 3 sprints: → Volatile (42, then 28, then 35). Hard to forecast.
- Why: Infrastructure unpredictability. On-call roulette increases incident load some weeks.

**Capacity & Utilization:**
- Estimated focus time: 32 hours/week
- Actual focus time: 22 hours/week (4 hours in meetings, 6 hours on unplanned incidents)
- Interruption load: 20% of time on incidents + on-call duties

**What's Working:**
- Team is technically strong; when focused, they deliver big (42 points in Sprint 10)
- Kafka migration is progressing (good project ownership)
- Incident response is solid (they fix things fast)

**What's Limiting:**
- **Infrastructure unpredictability:** Major incidents (1 every 2–3 sprints) derail planning
- **On-call burden:** Distributed on-call duties, but still eats focus time and adds stress
- **Context switching:** Kafka migration + legacy CI maintenance + on-call = three contexts at once
- **Scope creep:** They commit to 40, but lose 5–15 points to unplanned work

**Recommendation:**
1. **Descope one commitment:** Choose: Kafka migration OR legacy CI maintenance. Not both. "What's the business priority for Q2?"
2. **Reduce planned velocity to 28 points** (match realistic delivery). Add 7-point unplanned buffer (incidents + maintenance).
3. **On-call rotation:** Evaluate if current on-call model is sustainable. Can you hire on-call engineers, or rotate more people to dilute load?
4. **Infrastructure hardening:** Dedicate 1 sprint (4 weeks) to stabilize CI/CD and prevent repeat incidents. ROI: Lower incident frequency = higher baseline velocity.

## Velocity Trends Across Teams

```
Sprint 10  Sprint 11  Sprint 12
Backend:  25        28        25    (declining, code review bottleneck worsening)
Frontend: 19        20        17    (blocked by Backend, but team is solid)
Platform: 42        28        35    (volatile, infrastructure unpredictability)
Org avg:  28/sprint (forecast: 26-28 is realistic, not higher)
```

## Blockers & Bottlenecks (Organization-wide)
| Blocker | Frequency | Owner | Status | Impact |
|---------|-----------|-------|--------|--------|
| Code review (Backend) | Every sprint | Backend (James overloaded) | Active | -4 pts/sprint |
| Infrastructure incidents | 1 per 2 sprints | Platform | Active | -5 to -12 pts when it hits |
| Backend API delays | 2x/quarter | Backend dependencies | Active | -2 to -3 pts/sprint (Frontend waiting) |
| Design spec delays | Weekly | Product | Resolving | -0.5 pts/sprint |

## Capacity Forecast (Q2 2026)

**Realistic velocity assumption:** 26 points/sprint (org average, accounting for over-commitment patterns)

- **Feature: Dark Mode UI** (estimated 20 pts): Ships by mid-May (2.5 sprints at 26 pts/sprint, includes 1-sprint margin)
- **Feature: Kafka Migration** (estimated 60 pts): Ships by end-June IF Priya descopes CI maintenance (3 sprints at 35 pts/sprint, Platform focused)
- **Feature: Performance Optimization** (estimated 45 pts): Ships by end-June (2 sprints Backend + 1 sprint Platform, assumes code review improves)
- **If code review SLA implemented:** Velocity could improve by 4–6 pts/sprint. Timeline: all above ships 1–2 weeks earlier.
- **If infrastructure incident occurs:** Timeline adds 1–2 weeks (depending on severity).

## Top 3 Velocity Levers (Quick Wins)

1. **Code review SLA + second reviewer** (Backend): Implement 24-hour max code review window. Pair Frontend's Alex with Backend's James 3 days/week to build review capacity. Estimated velocity gain: **+4 points/sprint** (recover -9 blocker). Can start next sprint.

2. **Reduce Platform planned velocity + descope one commitment:** Platform commits to 28 points (not 40) and chooses one: Kafka migration or CI maintenance. Adds stability to forecasting. Estimated velocity gain: **+predictability** (no change in actual velocity, but 28 points becomes achievable vs. 40 being aspirational). Also reduces team stress.

3. **API-first handoff process** (Backend + Frontend): Backend publishes API specs 2 weeks before implementation. Frontend can build stubs + tests early. Reduces wait time for Frontend and unblocks parallel work. Estimated velocity gain: **+2–3 points/sprint** (Frontend no longer blocked on auth/API delays). Can start Sprint 13.

## Q2 Roadmap Commitments (Calibrated for Real Velocity)

**What leadership should plan for:**
- At 26 points/sprint baseline, you can commit to 78 points of work/quarter (3 sprints)
- Add 20% buffer for incidents/escalations = 62 points of net delivery expected
- Ask: What 60 points of value is most important for Q2?

**What NOT to do:**
- Don't assume Backend can do 35 points (they'll deliver 26)
- Don't assign major work to Platform without descoping something (they're context-switching and unstable)
- Don't put Frontend on critical path without API specs 2 weeks early

---

**Now what?** Schedule 1:1s with each team lead:
1. **Chen (Backend):** Discuss code review bottleneck + over-commitment pattern. Agree to plan for 26 points, not 35. Get buy-in on SLA experiment.
2. **Alex (Frontend):** Affirm they're solid + predictable. Discuss API-first handoff process. Pair with Chen on code reviews.
3. **Priya (Platform):** Descope Q2 commitment (pick one: Kafka or CI). Plan for 28 points, not 40. Discuss on-call load.
4. **All teams:** Share velocity report in all-hands. Frame as "here's our real capacity so we can commit reliably" (not blame).

Use these profiles in roadmap planning. Commit to 62 points of Q2 work (not 100). Then deliver it all.
```

## Edge Cases

- **New team member ramping:** Frontend's Yuki (started Jan) will lower velocity for 1–2 more sprints as she ramped. Alex accounted for it; velocity stayed stable. Good team, no coaching needed.
- **Planned productivity investment:** Platform might do a "hardening sprint" (no new features, just fix incidents). Velocity dips to 15 points. But ROI is worth it (incident frequency drops, baseline velocity improves next quarter). Flag as investment, not failure.
- **Seasonal velocity dips:** If holidays, vacations, or org changes align with a sprint, velocity will dip. Mark it as "planned" in your trend analysis so it doesn't skew forecasts.
- **Tool / process change impact:** If you implement new CI/CD tool or change sprint length, velocity will be noisy for 2–3 sprints. Expected. Track it, but don't overreact; give it time to stabilize.
- **Team composition changes:** New hire (Yuki), senior developer (James) split focus on on-call = velocity variance. Call it out. Understand impact timeline.
- **Over-commit culture:** If a team always delivers 120% (promises 20, ships 24 consistently), they're under-planning. Celebrate them, but also ask: Are they burning out? Should we increase their planned velocity to match reality?

