# Team Velocity Tracker

> Stop guessing which teams can actually deliver. Measure real velocity by comparing what they say in standups to what actually ships, then use the patterns to forecast reliably.

## What It Does

Velocity isn't a number printed by a tool. It's a pattern in how teams talk and deliver. "We'll ship 8 points this sprint" is a promise; actually shipping 5 is execution. This skill bridges them by analyzing what teams say in standups and sprint planning (from Harmony) and comparing it to what they shipped (from Linear/GitHub). You see which teams consistently over-commit, which have hidden blockers, where scope creep happens, which improve each sprint. Use that to forecast correctly, plan realistically, and coach teams to improve estimation.

## Who It's For

- **Engineering Leaders & VPs** — You're forecasting a roadmap. Who can you trust with a 60-point feature? Whose velocity is predictable vs. volatile? This skill shows you.
- **Scrum Masters & Agile Coaches** — Sprint velocity fluctuates. You need to understand why: Estimation error? External blockers? Team capacity? Use this to coach teams on better planning.
- **Product Managers & Program Managers** — You're committing features to customers or stakeholders. Base those commitments on real velocity, not hopeful velocity.
- **Engineering Managers** — Your team says they'll ship X. Do they? Track the pattern to improve estimation and identify coaching opportunities.

## Use Cases

- **Roadmap planning** — "Can we ship Feature X by end of Q2?" Check the team's velocity history. At 20 points/sprint with 12 weeks, do the math: realistic or wishful?
- **Over-commit pattern coaching** — Team promises 40 points, ships 25 every sprint. Use velocity data to show the pattern and coach on realistic estimation.
- **Capacity planning** — New initiative coming. Which team should own it? Pick the team with predictable, high velocity. Let other teams ramp up.
- **Bottleneck diagnosis** — Engineering says they're "too busy." Pull velocity data and conversation signals: Is it meetings? Unplanned incidents? Code review backlogs? External blockers?
- **Forecast accuracy** — "When will this feature ship?" Use velocity trend + scope estimate. If velocity dips 20% every time there's an incident, adjust forecast for incident risk.
- **Retro accountability** — Sprint review: "Why didn't we hit 40 points?" Data shows: 1 unexpected incident (-3 pts), code review delays (-4 pts), scope unclear (-2 pts). Specific coaching, not blame.

## Connectors

Works standalone, but richer with these integrations:

- **Linear / Jira** — The source of truth for shipped tickets. Velocity tracker compares promised tickets against actual completion to measure variance.
- **Google Calendar** — Maps meeting time and calendar blocks. Correlates high-meeting sprints with lower velocity to identify meeting overload.
- **Slack** — Standup updates and team discussions. Extracts blocker language ("waiting on code review," "incident," "design unclear") to understand *why* velocity varies.
- **GitHub** — PR/commit data and deployment frequency. Measures shipping velocity across repos, branches, and teams.
- **Notion** — Roadmap and sprint goal tracking. Compares planned roadmap against actual velocity to forecast reliably.

## Setup

Install and go. Works best when you use Linear/Jira for tracking sprints, Slack or written standups for team updates, and Harmony for recording planning and retro meetings.

## What You Get

A velocity report: team-by-team breakdown of promised vs. delivered velocity, trend analysis (improving / stable / declining), blocker and bottleneck diagnosis, capacity utilization metrics, forecasts for major features based on real velocity, and specific recommendations for velocity levers (what changes would unlock capacity). Designed to replace guesswork with data so you can forecast reliably and coach teams to improve delivery.

