---
name: "Diagnose Org Health"
description: "Assess organizational health by analyzing meeting patterns — decision velocity, topic recurrence, participation balance, cross-functional collaboration, and escalation frequency. Surfaces systemic issues that surveys miss. Trigger on: org health, team health, organizational assessment, team dynamics, decision velocity, meeting effectiveness, collaboration health, culture diagnostic, team sentiment, organizational diagnostic."
dependencies: []
---

# Diagnose Org Health

## Purpose

Surveys tell you what people are willing to write down. Meetings tell you what's actually happening. This skill analyzes conversation patterns across your organization to diagnose health: how fast decisions get made, whether the same problems recur meeting after meeting, who dominates and who stays silent, how well teams collaborate across boundaries, and whether escalations resolve or just circulate. The output is an evidence-based diagnostic — not opinions, but patterns.

## When to Use

- **Quarterly leadership health check**: Regular pulse on organizational effectiveness
- **Post-reorg assessment**: Understand how restructuring is actually flowing through the organization
- **Before strategic planning**: Assess execution capacity — can we deliver on new initiatives?
- **When "something feels off"**: You sense dysfunction but can't pinpoint it — data surfaces the root
- **Board health update**: Provide evidence-based organizational status to the board
- **New leader onboarding**: Understand team dynamics, decision patterns, and cultural rhythms quickly

## Instructions

1. **Analyze decision velocity**: Track how many meetings it takes for a decision to go from proposed → made → communicated. Examine 4-6 weeks of calendar and meeting notes. Flag decisions that stall or recycle.

2. **Detect topic recurrence**: Identify issues discussed 3+ times without resolution in the same period. Each recurrence signals a decision bottleneck or escalation failure. Log specific topics and meeting dates.

3. **Measure participation balance**: Calculate talk-time ratio by person, role, and seniority level. Who dominates meetings? Who stays silent? Does seniority correlate with talk time? Are individual contributors heard?

4. **Assess cross-functional collaboration**: Examine joint meetings between teams (engineering-product, sales-operations, etc.). Do they produce action items and next steps, or are they status-only updates? Track outcomes vs. meetings.

5. **Track escalation patterns**: What issues get escalated? To whom? How often? Does escalation resolve the issue or does it bounce around? Escalation loop = sign of unclear authority or bottleneck.

6. **Score meeting effectiveness**: Calculate percentage of meetings with clear outcomes, documented action items, owners, and actual follow-through. Review calendar over 4-6 weeks.

7. **Compile 6-dimension health scorecard**: Rate each dimension 1-5:
   - **Decision Velocity**: How fast decisions move (1=stalled, 5=crisp)
   - **Topic Resolution**: How often issues get resolved vs. recycled (1=chronic recycling, 5=closure)
   - **Participation**: Balance of voices and inclusion (1=dominated by few, 5=balanced)
   - **Cross-functional Collaboration**: Quality of joint team outcomes (1=siloed, 5=seamless)
   - **Escalation Health**: Escalations resolve cleanly (1=loops, 5=resolved)
   - **Meeting Effectiveness**: Outcome clarity and follow-through (1=theater, 5=productive)

8. **Identify top 3 systemic issues**: For each dimension scoring 3 or below, develop a root cause hypothesis and 1-2 recommended interventions.

## Output Format

**6-Dimension Health Scorecard** (visual or numeric)
- Each dimension scored 1-5 with brief rationale

**Evidence Table**
- Specific patterns with meeting examples: dates, attendees, outcomes (or lack thereof)

**Topic Recurrence Map**
- List of recycled issues: topic, # of times discussed, last date, status

**Participation Balance Chart**
- Talk-time distribution by role and seniority level

**Top 3 Systemic Issues**
- Issue name, root cause hypothesis, recommended interventions (actionable), owner suggestion

## Example: Helix Financial (Fintech, ~100 people)

**6-Dimension Scorecard:**
- Decision Velocity: 2/5 (average 4.2 meetings per decision; pricing discussion needed 6 meetings over 8 weeks)
- Topic Resolution: 2/5 (pricing strategy discussed 7 times in 6 weeks without resolution; roadmap prioritization recycled 4 times)
- Participation: 3/5 (3 executives dominate 65% of talk time; engineers and PMs speak 20%, junior staff <5%)
- Cross-functional Collaboration: 4/5 (product-engineering sync productive; sales-ops needs work)
- Escalation Health: 2/5 (CEO becomes bottleneck; 8 decisions escalated to executive team in 6 weeks; only 3 fully resolved)
- Meeting Effectiveness: 3/5 (60% of meetings have documented action items; 40% lack clear next steps or owners)

**Evidence Table:**
| Topic | Meetings | Dates | Pattern |
|-------|----------|-------|---------|
| Pricing Strategy | 7 | Mar 1, Mar 8, Mar 15, Mar 22, Mar 29, Apr 5, Apr 12 | Same disagreement (cost vs. margin) recycled without resolution |
| Q2 Roadmap | 4 | Mar 10, Mar 17, Mar 24, Mar 31 | Prioritization deferred each session; no decision maker present first 2 meetings |
| API Rate Limits | 5 | Mar 5, Mar 12, Mar 19, Mar 26, Apr 2 | Engineering blocked; no clear decision authority |

**Topic Recurrence Map:**
- Pricing Strategy (7 times) — unresolved, decision authority unclear
- Q2 Roadmap (4 times) — waiting for budget alignment
- API Rate Limits (5 times) — blocked on exec decision

**Participation Balance:**
- Execs (3 people): 65% talk time
- Product & Engineering (12): 25% talk time
- Operations & Support (6): 8% talk time
- Individual Contributors: <2% talk time

**Top 3 Issues:**

1. **CEO Bottleneck**: CEO escalates to themselves; decisions await CEO availability. Root cause: unclear delegation of authority below CEO level. Intervention: establish decision-making framework (RACI) for common decision types; empower functional leads.

2. **Pricing Decision Paralysis**: Same discussion 7 times without resolution. Root cause: finance vs. product misalignment on cost-margin tradeoff; no decision framework. Intervention: schedule 1-on-1 between CFO and VP Product to establish pricing criteria; document and communicate.

3. **Weak Sales-Ops Collaboration**: Sales and operations meetings are status only. Root cause: conflicting KPIs (sales wants speed, ops wants process). Intervention: joint OKR workshop; shared metrics; monthly partnership review.

## Edge Cases

- **Small teams**: When everyone's in every meeting, individual participation metrics are less meaningful; focus on decision velocity and topic resolution instead.
- **Remote-first orgs**: Async decisions (Slack, Loom, docs) may not show up in calendar analysis; request meeting notes and decision logs to capture full picture.
- **Seasonal patterns**: Q4 slowdown or crunch periods don't indicate unhealthy orgs; normalize for seasonal context or run analysis over 12 weeks to smooth cycles.
- **New teams with no baseline**: First diagnostic is a baseline, not a judgment; compare future quarters to establish trend, not absolute health.
- **Sensitive findings**: If data surfaces performance issues (CEO bottleneck, exec dominance), share diagnostic with HR/board privately before broader communication; data is neutral but delivery matters.
