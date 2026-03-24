---
name: "Flag Missed Commitments"
description: "Automatically track commitments made across meetings and flag when reality drifts from promises. When someone says 'I'll have the proposal by Friday' in Meeting A, and Friday's standup shows no update, this skill surfaces the gap. Track promises, deadlines, and ownership across multi-meeting context. Trigger on: commitment tracking, promise monitoring, accountability check, outcome follow-up, commitment drift, delivery gap analysis."
dependencies: []
connectors:
  - name: "Google Calendar"
    reason: "Maps meeting timeline and attendees to track who made promises to whom and when commitments are due"
  - name: "Slack"
    reason: "Cross-references meeting commitments against standup updates and team discussion threads to identify drift"
  - name: "Linear"
    reason: "Compares promised deliverables to actual task creation, completion dates, and ticket status to surface unmet commitments"
  - name: "Notion"
    reason: "Tracks roadmap commitments, sprint goals, and strategic promises made in planning meetings vs. documented reality"
  - name: "HubSpot"
    reason: "Monitors sales pipeline promises — deal close dates, deliverable timelines, customer commitments — vs. actual progression"
---

## Purpose

Meetings create promises. Someone says "I'll have X by Friday." Another person says "I'll loop in engineering." A team says "We'll ship this in Q2." But follow-up is chaos. Did they do it? Is it still on track? Or did it slip quietly? This skill automatically tracks commitments made across meetings — who promised what, by when, to whom — and flags when the follow-up conversation or status update shows drift. Works from Harmony's multi-meeting context: compares what was said in Planning Meeting A against what appears in Standup B, Sprint Review C, and Slack. Surfaces accountability gaps so teams can course-correct before commitments become missed deadlines.

## When to Use

- Sprint planning happened, but engineers are working on scope creep. Review what was committed and compare to actual work.
- Sales manager closing a deal promised the customer "we'll have the custom integration ready by June." Track that promise across all meetings and flag if June is at risk.
- Product roadmap was shared with stakeholders. Now it's mid-quarter. Track what was committed and compare to what's actually shipping.
- An executive promised the board "we'll reduce churn by 10%." Track that promise through planning, execution, and results to see if it's on pace.
- Team member said they'd finish design in this sprint. Next sprint standup shows they're 60% done. Flag the gap.
- Customer success promised a customer "we'll onboard you by March 15." Check follow-up meetings to see if onboarding is happening on time.
- Retro found a pattern — promises consistently slip on timeline. Use this skill to make the pattern visible.

## Instructions

### 1. Gather promise and follow-up context

Start by asking:

- **What time period?** (Last sprint, last month, last quarter?)
- **Whose promises are you tracking?** (Specific person, team, project, product area?)
- **What kind of promises?** (Deliverables, metrics targets, process improvements, customer commitments?)

Pull meetings from Harmony during the period in scope:
- Initial promise meeting (planning, kickoff, all-hands, sales call)
- Follow-up meetings (standups, check-ins, reviews, retros)

If available, also pull:
- Slack channels where status updates happened
- Linear/Jira tickets created to track the work
- Calendar invites to map timeline

### 2. Extract and catalog promises made

Go through the initial meeting(s) and list every explicit commitment:

**What was promised:**
- Exact quote when possible
- The deliverable or outcome (not vague: "We'll improve velocity" is vague; "We'll reduce deployment time from 4 hours to 2 hours" is specific)
- Who made the promise (person, team, department)

**Success criteria (how will you know it's done):**
- What does "done" look like? (Shipped code, metric threshold, customer feedback, signed contract?)
- Is it measurable? (If not, flag it as ambiguous)

**Timeline:**
- When is it due? (Specific date, or vague like "soon"?)
- Who controls that date? (Hard deadline from customer, self-imposed, dependent on external factor?)

**Who's accountable:**
- Who owns delivery?
- Who's dependent on it? (Who will feel the impact if it slips?)

### 3. Track follow-up conversations and status

Now look at meetings, standups, and status updates that happened *after* the promise was made.

**In follow-up meetings:**
- Was the promise mentioned again?
- What was the status update? ("On track," "At risk," "Done," "Delayed," "Reprioritized")
- What evidence shows the update is real? (Code shipped, metric changed, customer onboarded?)
- Did timeline change? (Still due Friday, or now "early next week"?)

**In Slack channels (if available):**
- Did the team post updates on this commitment?
- Did they mention blockers or changes?
- Does the vibe match the official status? (If they said "on track" in the meeting but Slack shows panic, flag it)

**In task management (Linear, Jira, Asana):**
- Was a ticket created to track this work?
- When was it last updated?
- Is the due date still accurate, or has it drifted?

**In later meetings:**
- Did they acknowledge they missed it, reprioritized it, or changed scope?

### 4. Measure drift between promise and reality

For each promise, compare what was said to what actually happened:

**On-track signals:**
- Status matches promise timeline (still due Friday, and it's Thursday)
- Clear progress evidence (50% done, blocked but actively working)
- Team is acknowledging and communicating about it
- Accountability is clear (someone owns it, someone's checking)

**Drift signals:**
- Promise was never mentioned again (silence = often means trouble)
- Status changed without explanation (was Q2, now "early Q3")
- Task was created but never updated (ticket created, then abandoned)
- Conflicting signals (they said "on track," but Slack shows "we're not sure")
- Scope creep (deliverable changed, timeline didn't adjust)
- Owner is unclear or changed mid-stream (original owner moved to other project)
- Externality wasn't managed (promised dependent on external event that's now at risk)

**Missed commitment signals:**
- Due date passed, no update delivered
- Commitment was abandoned (reprioritized, no acknowledgment)
- Team is pretending it still exists, but clearly won't ship

### 5. Surface the drift with evidence

For each commitment with drift, create a clear accountability snapshot:

**What was promised:**
- [Exact quote + date and who said it]

**What was supposed to happen by [date]:**
- [Specific deliverable or metric]

**What actually happened:**
- [Latest status from meeting/Slack/ticket + date of that update]

**Timeline change (if any):**
- Was [date] → now [new date]? Or still [date]?

**Evidence:**
- [Ticket status, Slack thread, meeting note that shows real status]

**Risk level:**
- On Track / At Risk / Missed
- Why? [Specific reason: blocked, deprioritized, scope changed, owner unavailable, externality, silence]

### 6. Score accountability health

For a time period (sprint, month, quarter), calculate a commitment scorecard:

- **Total commitments made:** [number]
- **Delivered on time:** [number + %]
- **Delivered late:** [number + %]
- **Missed/abandoned:** [number + %]
- **Still in progress:** [number + %]
- **No visibility:** [number + % — these are the scariest]

**Trend:**
- Is this better or worse than last period?
- Which teams/projects over-commit?
- Which teams consistently deliver?
- Where are the blockers repeating?

## Output Format

```markdown
# Commitment Tracking Report — [Sprint / Month / Quarter / Project]
_Period: [dates] · Reporting date: [today]_

## Executive Summary
[2–3 sentences: How many promises were made? What's the health? Any critical misses or at-risk items?]

## Promise Catalog & Status
| Commitment | Owner | Due Date | Status | Evidence | Risk |
|------------|-------|----------|--------|----------|------|
| [Promise 1] | [Person/Team] | [Date] | [On track / At risk / Missed] | [Latest update from meeting/Slack/ticket] | [✓ / ⚠️ / ✗] |
| [Promise 2] | [Person/Team] | [Date] | [On track / At risk / Missed] | [Latest update] | [✓ / ⚠️ / ✗] |

## Drift Analysis
### On-Track Commitments (✓)
[List 2–3 examples with brief note on why they're tracking well]

### At-Risk Commitments (⚠️)
[For each at-risk item:]
- **[Commitment]** (Owner: [name], Due: [date])
  - Timeline: Was [original] → Now [new date?]
  - Last update: [date + what they said]
  - Blocker: [What's slowing progress?]
  - Action needed: [What would get it back on track?]

### Missed Commitments (✗)
[For each missed item:]
- **[Commitment]** (Owner: [name], Was due: [date])
  - Status: [What happened? Was it reprioritized, abandoned, or just silent?]
  - Impact: [Who's affected by this miss?]
  - Acknowledgment: [Did the team own it, or is it still undiscussed?]

## Accountability Snapshot
**Commitments made this [period]:** [number]
- ✓ Delivered on time: [number] ([%])
- ⚠️ Delivered late: [number] ([%])
- ✗ Missed/abandoned: [number] ([%])
- ⏳ Still in progress: [number] ([%])
- ❓ No visibility: [number] ([%])

**Delivery health trend:**
- vs. last period: [Better / Same / Worse]
- Pattern: [Teams/areas that over-commit, teams that deliver reliably, repeating blockers]

## Spotlight: Critical Misses or Escalations
[If there's a commitment that impacts a customer, executive, or cross-team dependency — flag it here]
- **[Commitment]:** [Why this matters] → [Recommend immediate action]

## Team Accountability Notes
| Team / Project | Trend | Notes |
|----------------|-------|-------|
| [Team A] | Over-commits | Last 3 promises slipped 1–2 weeks |
| [Team B] | Reliable | Consistently delivers on timeline |
| [Team C] | Unclear | Making promises but no follow-up tracking |

## Recommended Actions
1. [Action for at-risk items: realign timeline, remove blocker, add support]
2. [Action for silent items: schedule check-in, demand update, reassess priority]
3. [Action for team with pattern: coaching on commitment estimation, process improvement]

---

**Now what?** Schedule check-ins on at-risk items. For at-risk commitments with clear blockers, unblock them immediately. For missed commitments, have a blameless retro: why did this slip? What process change prevents it next time? Use this data to improve how your team makes and tracks promises.
```

## Example

**User:** "We just finished a sprint. Can you check which commitments we made in the sprint planning meeting vs. what we're actually shipping in the sprint review today?"

**Output:**

```markdown
# Commitment Tracking Report — Engineering Sprint 12
_Period: March 10–21, 2026 · Reporting date: March 21, 2026 (Sprint Review Day)_

## Executive Summary
Made 8 commitments in sprint planning. 3 shipped on time, 2 are at risk (timeline slip), 2 are missed (silently reprioritized), 1 is still being debated. Delivery health is 38% on-time (should be 80%+). Pattern: over-commitment in backlog refinement without considering dependencies on API team. Action needed on all 2 at-risk items today.

## Promise Catalog & Status
| Commitment | Owner | Due Date | Status | Evidence | Risk |
|------------|-------|----------|--------|----------|------|
| Refactor auth service to use OAuth2 | Chen (Backend Lead) | March 20 | On track | Merged 4/5 PRs; final tests running today | ✓ |
| Add pagination to product API | Marcus (Backend) | March 20 | At risk | Implemented, but frontend integration waiting on Marcus | ⚠️ |
| Build user settings dashboard (UI) | Alex (Frontend) | March 20 | At risk | UI components 70% done; blocked on auth refactor from Chen | ⚠️ |
| Mobile app: fix crash on startup | Jordan (Mobile) | March 21 | Missed | Deprioritized yesterday for critical customer bug; not mentioned in retro yet | ✗ |
| Kafka migration prep (infra) | Priya (DevOps) | March 21 | Missed | No updates since Mar 13; ticket has been idle for 8 days | ✗ |
| Database indexing optimization | Chen (Backend Lead) | March 20 | In Progress | Started Mar 18; 40% done; no blockers mentioned | ⏳ |
| Support incident SOP doc (ops) | Sam (Ops Lead) | March 21 | On track | Drafted Mar 19, waiting on support team feedback today | ✓ |
| QA test automation framework (QA) | Lee (QA) | March 20 | On track | Framework created, 30 tests written, 20 more queued for today | ✓ |

## Drift Analysis
### On-Track Commitments (✓)
- **Auth refactor (Chen)** — Large piece of work. Chen cut scope smartly (deferred new SAML connector to next sprint) and communicated clearly. Team understood trade-off. ✓
- **Test automation framework (Lee)** — Smaller, well-scoped task. Tests are being written against stable API. On pace to finish today.
- **Support SOP doc (Sam)** — Simple writeup. Waiting on feedback today, but will land on time.

### At-Risk Commitments (⚠️)
- **Pagination API (Marcus)** (Due: March 20)
  - Timeline: Original March 20 → Likely March 21 (1 day slip, minor)
  - Last update: "API is done, frontend just needs to integrate" (Mar 21, 9am standup)
  - Blocker: Frontend team (Alex) is blocked on auth refactor, hasn't started pagination integration yet
  - Action needed: Have Alex and Marcus pair for 2 hours today to unblock integration. Marcus should have put this in the dependency list in planning.

- **User settings dashboard (Alex)** (Due: March 20)
  - Timeline: Original March 20 → Likely March 22–23 (2–3 day slip)
  - Last update: "UI is 70% done, but I'm waiting on the auth refactor to be done so I can test it" (Mar 21, 9am standup)
  - Blocker: Chen's auth refactor (should be done today). Alex didn't flag this dependency in planning.
  - Action needed: Get Chen's refactor shipped TODAY. Then Alex can complete and test dashboard by end of day Friday (March 22).

### Missed Commitments (✗)
- **Mobile app: fix crash on startup (Jordan)** (Was due: March 21)
  - Status: Deprioritized yesterday. Customer escalation (critical customer losing data) pulled Jordan off planned work. Not yet acknowledged in standup/retro.
  - Impact: Mobile team committed to this, but didn't communicate the change. Users of app will have crash for at least 1 more sprint.
  - Acknowledgment: Jordan mentioned the customer bug in standup, but didn't say "we're dropping the startup crash fix." This should have been explicit.
  - Lesson: Escalations happen. But you have to say "we're not doing X anymore" clearly, not just stop doing it.

- **Kafka migration prep (Priya)** (Was due: March 21)
  - Status: Ticket created (LIN-847) on March 10. Last update: March 13 ("Reviewing current Kafka config"). Silent since then. Priya didn't mention it in last 2 standups.
  - Impact: Infrastructure work. If prep isn't done, actual migration will slip. Other teams are potentially waiting on this.
  - Acknowledgment: Zero communication. This is the scariest miss — nobody said "we're delayed" or "we deprioritized it."
  - Lesson: Silence is a miss. If you're not doing it, say so. If you're stuck, ask for help.

## Accountability Snapshot
**Commitments made in sprint planning:** 8 total

- ✓ Delivered on time: 3 (38%)
- ⚠️ Delivered late: 2 (25%)
- ✗ Missed/abandoned: 2 (25%)
- ⏳ Still in progress: 1 (12%)
- ❓ No visibility: 0 (0%)

**Delivery health trend:**
- vs. Sprint 11: Worse (Sprint 11 was 5/6 on-time, 1 late. This sprint we overcommitted.)
- Pattern: Backend promises are solid (Chen, Marcus, Lee). Frontend and DevOps have dependency issues (didn't account for blockers from other teams). Mobile has prioritization clarity issue (escalations override planning without communication).

## Spotlight: Critical Misses or Escalations
- **Kafka migration prep (Priya)** — This is infrastructure work. If other teams are depending on the migration, this silence could cascade. Get Priya in a room today. Ask: What's the blocker? Is this still a priority? If deprioritized, announce it so other teams adjust plans.
- **Mobile app crash** — This is customer-facing. A critical customer is affected. Jordan made the right call dropping this for the escalation, but the team needs to know the trade-off so we adjust expectations. This should have been called out in standup.

## Team Accountability Notes
| Team / Project | Trend | Notes |
|----------------|-------|-------|
| Backend (Chen, Marcus) | Solid | Both delivered. Marcus could be better on dependencies (pagination blocking frontend). |
| Frontend (Alex) | Risk cycle | High-quality work, but over-dependent on others. Dashboard blocked on auth refactor. Need better dependency planning in backlog refinement. |
| DevOps (Priya) | Silent miss | Kafka prep is radio silent. Need to understand what happened and reset. |
| Mobile (Jordan) | Escalation handling | Good instinct to handle customer escalation. Bad communication. Need to announce scope changes in standup. |
| QA (Lee) | Reliable | Consistent delivery. Framework is on track. |

## Recommended Actions
1. **Today (March 21, end of day standup):**
   - Get Chen to ship auth refactor (he's 95% there).
   - Pair Alex + Marcus for pagination integration (1–2 hours to unblock).
   - Bring Priya into standup. Ask: "Kafka prep — where are we? Is it still a priority?" Get a clear answer.

2. **This week (before Friday):**
   - Alex finishes dashboard integration once auth refactor is done (Friday end of day).
   - Marcus and Alex ship pagination integration.
   - Priya either ships Kafka prep or formally reprioritizes it and tells dependent teams.

3. **Sprint retro (Friday):**
   - Blameless discussion: Why did we over-commit (8 items, 38% on-time is too low)?
   - Root cause: Dependencies weren't mapped in planning. Backlog refinement didn't call out "this is blocked on auth refactor."
   - Process fix: Add 15 minutes to backlog refinement to map cross-team dependencies. Use a dependency matrix.
   - Owner accountability: Jordan and Priya need to communicate scope changes explicitly, not silently.

---

**Now what?** Run a 30-minute standup right now with leads from each team. Get real status on at-risk items. For Priya's Kafka work, schedule a 1:1 later today to understand the blocker. Set clearer expectations: "Commitments don't disappear. If something changes, we communicate it." Before next sprint planning, improve the dependency-mapping process so this doesn't repeat.
```

## Edge Cases

- **Commitment had ambiguous success criteria from the start:** "Improve performance" is not a promise. Flag it in this report as "unclear commitment." Recommend: define what "improved" means (e.g., "reduce API latency from 500ms to 200ms"). Coach the team on making measurable promises.
- **Commitment was reprioritized mid-sprint, but everyone knew about it:** This is fine. Track it as "reprioritized, announced, acknowledged." No accountability gap. Document the business reason (escalation, market shift).
- **Commitment slipped, but external dependency was the cause, not the team:** E.g., "We promised to ship feature by Friday, but customer API integration wasn't ready." Track it, but note: "Blocker: external (customer API team delayed). Not a team execution issue." Lesson: Buffer for external dependencies in future planning.
- **Team made the same promise, missed it, then made it again next sprint:** This is a pattern. Flag it. This is a team commitment-estimation problem or a process problem. Recommend: discuss in retro why this keeps happening.
- **Silent miss where nobody acknowledges the commitment ever existed:** Scariest case. Team stopped working on it, nobody said "deprioritized," and it fell off the radar. Recommend: coaching on transparency. "If you're not doing it, say so loudly."
- **Commitment was done well early, but nobody updated the tracker:** Fine. Mark it as delivered on time when you find out. But note: "Update tracking consistently so we can see progress."

