# Prioritize Product Backlog

> Transform stakeholder debate into data-driven sprint plans. Extract feature requests from customer calls, write INVEST-compliant stories, score by evidence, and load sprints with confidence.

## What It Does

Extracts feature requests, pain points, and customer feedback directly from Harmony meeting transcripts and turns them into a prioritized, sprint-ready backlog. The skill:

- **Mines Harmony conversations** for customer asks and stakeholder priorities with speaker attribution
- **Writes INVEST-compliant user stories** grounded in real customer language (As a / I want / So that)
- **Adds testable acceptance criteria** (Given-When-Then)
- **Scores items by evidence**, not loudest voice: Business Value (40%), User Impact (30%), Risk (15%), Effort (15%)
- **Breaks epics** into sprint-sized stories (≤8 points) using workflow, persona, and data type splits
- **Plans sprint capacity** from historical team velocity and availability
- **Surfaces conflicting priorities** across stakeholder groups (sales vs. support vs. leadership)

Replaces gut-feel backlog management with structured, meeting-grounded prioritization.

## Who It's For

- **Product owners and managers**: Need to move fast without losing customer context
- **Scrum masters**: Facilitate sprint planning with data on team capacity and velocity
- **Engineering leads**: Understand story quality and dependencies before committing
- **Product teams** in customer-facing roles: Ground decisions in real customer language from calls

## Use Cases

- **Sprint planning**: Extract top priorities from recent customer discovery calls; load sprint with evidence
- **Backlog grooming**: Batch conflicting stakeholder requests; let weighted scoring resolve disagreement
- **Epic breakdown**: Split large feature asks into independent sprint-sized stories
- **Quarterly planning**: Re-score entire backlog against current business value; retire low-signal items
- **Onboarding**: Apply consistent story-writing and prioritization discipline to inherited backlog
- **Mid-sprint requests**: Evaluate new asks against current sprint capacity; calculate eviction cost

## Connectors

| Connector | What It Provides |
|-----------|-----------------|
| **Harmony** (primary) | Meeting transcripts, speaker roles, real customer language, stakeholder debate |
| **Linear** | Backlog storage, sprint tracking, velocity history, linking stories |
| **Jira** | Historical story points, velocity data, sprint planning board, risk tracking |
| **Asana** | Project roadmap context, task dependencies, workload visibility |
| **Slack** | Alerts for backlog changes, sprint capacity notifications, blocking discussions |
| **Notion** | Product roadmap, customer feedback database, Definition of Done templates |

## Setup

1. **Connect Harmony**: Skill mines transcripts from recent product meetings, customer discovery, and stakeholder reviews
2. **Link your project management tool**: Linear or Jira for backlog, sprint, and velocity context
3. **Optional**: Connect Slack for sprint planning notifications and Notion for product roadmap reference
4. **Have ready**: Team velocity (points per sprint from last 3 sprints), sprint calendar, Definition of Done

## What You Get

- **Prioritized backlog table** (top 20 stories, ranked by weighted score)
- **User stories in INVEST format** with acceptance criteria and source attribution
- **Sprint plan** (committed 85%, stretch 15%) loaded by capacity
- **Capacity calculation** showing velocity, sprint days, adjustments
- **Stakeholder priority conflicts** exposed (where sales scores differ from support)
- **Splitting recommendations** for oversized epics
- **Edge case flags**: stories that violate INVEST, blockers, technical debt
