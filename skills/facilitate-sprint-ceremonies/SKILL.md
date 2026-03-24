---
name: "Facilitate Sprint Ceremonies"
description: "Improve sprint ceremony effectiveness by analyzing patterns across standup, planning, review, and retrospective recordings. Surfaces recurring blockers, tracks retro action items, measures ceremony health, and suggests format improvements. Trigger on: sprint ceremonies, scrum ceremonies, standup effectiveness, sprint planning, sprint review, retrospective, retro action items, sprint health, ceremony improvement, agile ceremonies, daily standup."
dependencies: []
---

# Facilitate Sprint Ceremonies

## Purpose

Sprint ceremonies are meant to accelerate delivery, but without feedback loops they become rituals. Standups run 45 minutes because two people go deep on debugging. Retro action items get written down and never mentioned again. Sprint reviews become status updates instead of stakeholder feedback sessions. This skill analyzes ceremony transcripts across sprints to identify effectiveness patterns: time allocation, recurring topics, blocker resolution velocity, retro action item follow-through, and participation balance. It turns your ceremonies from rituals into continuous improvement engines.

## When to Use

- **Sprint retrospective**: Synthesize themes across all ceremonies this sprint, track whether action items from the previous retro were actually implemented
- **Sprint planning**: Pull context from prior sprint review and retro findings to inform scope commitments
- **Standup effectiveness audit**: Answer: are daily standups working? Running long? Highlighting real blockers or just status theater?
- **After a failed sprint**: Trace what went wrong across all ceremonies—planning failures, unresolved blockers, communication breakdowns
- **New scrum master takeover**: Establish baseline ceremony health and identify quick wins for team trust-building
- **Quarterly ceremony health review**: Trend analysis across 10+ sprints to spot seasonal patterns or structural issues

## Instructions

1. **Pull ceremony transcripts** for the last 2–3 sprints (standups, planning, review, retro). If transcripts don't exist, work from meeting notes, recording timestamps, or participant recalls.

2. **Measure standup health**: Calculate average duration, count topics that went off-track into deep dives, tally blockers raised vs. blockers resolved within the sprint, assess participation balance (Is everyone speaking 1–2 times, or do 2 people dominate?).

3. **Measure planning health**: Compare committed story points to delivered story points. Identify stories where confusion surfaced later in standups or reviews (signal of poor definition upfront).

4. **Measure review health**: Count attendees (especially product/stakeholder presence). Evaluate whether feedback was actionable or vague. Note whether demo stories were rehearsed or ad-hoc (quality signal).

5. **Measure retro health**: List all action items created. For each one, track forward: Was it mentioned in subsequent standup discussions? Did it get resolved, deferred, or abandoned?

6. **Identify recurring themes**: Find blockers appearing in 3+ standups without resolution, topics debated in multiple retros without decision, scope changes mid-sprint, and repeating failure modes.

7. **Score overall ceremony effectiveness** (1–10) with dimensional breakdown: standup health, planning quality, review engagement, retro follow-through.

8. **Recommend specific improvements**: Shorten standups via parking lot timer, escalate structural blockers, rotate retro formats, rehearse sprint reviews, re-calibrate planning estimates.

## Output Format

- **Ceremony Health Dashboard**: Scores for standups, planning, review, retro with radar chart or simple table
- **Standup Analysis**: Time distribution, participation heatmap, blocker categories, resolution velocity
- **Retro Action Item Tracker**: Each action from all sprints with status (done, in-progress, deferred, dropped)
- **Recurring Theme Report**: Blockers, debates, scope changes ranked by frequency
- **Sprint-over-Sprint Trend**: Scores and duration charts across most recent 3–5 sprints
- **Improvement Recommendations**: Prioritized by impact, with rationale and implementation steps

## Example

**Jetstream Engineering** is a 12-person team at a B2B analytics startup. Analysis of their last 3 sprints reveals:

- **Standups** averaging 28 minutes (target: 15). Same CI/CD blocker raised 11 times across 3 sprints without resolution. Participation: 2 engineers speak 60% of the time; 5 say nothing.
- **Planning** committed 55 points; delivered 38 points (69% hit rate). Three stories marked "ready" in backlog had missing acceptance criteria, discovered in standup.
- **Review** scheduled for 1 hour; ran 55 minutes. Product attendance dropped from 5 people in Sprint 1 to 2 in Sprint 3. Demos: Sprint 1 rehearsed, Sprint 2 live-coded, Sprint 3 pre-recorded.
- **Retro** created 6 action items last sprint. Five were never mentioned again. One ("improve code review turnaround") marked done, but actual code review times increased by 20%.

**Recommendations**:
1. Install parking lot timer in standups; deep dives go to async Slack thread.
2. Escalate CI/CD blocker to VP Eng; it's blocking 3+ sprints.
3. Add acceptance criteria checklist to sprint planning definition of done.
4. Re-invite product lead to co-facilitate reviews; frame as "feedback forum," not status theater.
5. Retro action item owner accountability: call out last retro's items in planning, track in Jira.
6. Pilot 20-minute standups for 2 sprints; measure blocker signal strength.

## Edge Cases

1. **Remote/async standups**: If your team posts written updates instead of synchronous calls, analyze the written updates for topic distribution and blocker patterns. Async ceremonies have different effectiveness measures (response time, update depth, follow-up velocity).

2. **Team new to scrum**: Don't optimize yet; focus on ceremony *purpose* education. Standups discover blockers; retros close the loop on improvements. Measure participation and engagement first, velocity later.

3. **Sprint with major incident**: Ceremonies disrupted or repurposed for incident response. Analyze separately. Don't penalize standup duration if the team was in incident mode; instead, review how ceremonies adapted.

4. **Large team (15+)**: Traditional ceremonies don't scale. Standups become status broadcasts. Measure whether standup topic depth suffers. Recommend squad splitting, parallel standups, or async updates.

5. **Team that skips ceremonies**: Don't just mandate more meetings. Diagnose why: ceremonies don't align with work rhythm, no visible outcomes, team doesn't trust the process. Address the root cause before adding structure.

---

**Role**: Operations | **Action**: Execute
**Connectors**: Linear, Jira, Slack, Notion, Google Calendar
