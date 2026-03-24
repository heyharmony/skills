---
name: "Map Deal Stakeholders"
description: "Build a stakeholder map with a Power × Interest grid, identify engagement strategies per quadrant, flag conflicts, and generate a tailored communication plan. Trigger on: stakeholder map, stakeholder analysis, stakeholder management, communication plan, stakeholder engagement, RACI, who to involve, cross-functional alignment."
dependencies: []
---

## Purpose

Map every stakeholder on a Power × Interest grid and build a concrete communication plan so nothing falls through the cracks. This skill identifies who matters, how much attention they need, what to tell them, and how often — preventing the two most common project failures: surprising a powerful stakeholder and ignoring a vocal one. When meeting recordings exist in Harmony, the skill can identify stakeholders from conversation patterns — who shows up, who gets mentioned, who raises concerns.

## When to Use

- Kicking off a new project and need to map who matters
- Preparing for a product launch with multiple teams involved
- Inheriting a project and need to understand the stakeholder landscape
- Cross-functional initiative where alignment keeps breaking down
- Stakeholder conflict is slowing decision-making and you need a strategy
- New to a company and need to map the political landscape around your area

## Instructions

### 1. Identify all stakeholders

Help the user build a comprehensive list. Push beyond the obvious names — the stakeholders who get missed are the ones who cause problems later.

**Prompt the user for:**
- Who approved or funded this initiative?
- Who will build it? (Engineering, design, data)
- Who will sell, market, or support it?
- Who will be affected by it even if they're not involved?
- Who could block or slow this down?
- Who has tried something similar before and has opinions?
- Who talks to the customers this affects?

**If Harmony conversations exist:** Scan recent project meetings for:
- People who attend meetings about this project
- People who get @mentioned or referenced but aren't in the room
- People who raise concerns, give direction, or ask probing questions
- People whose names come up in "we should loop in..." or "have you talked to...?"

**Stakeholder categories to cover:**
- Executive sponsors and leadership
- Direct team members (eng, design, PM, data)
- Adjacent teams (sales, marketing, CS, support, legal, finance, ops)
- External stakeholders (customers, partners, vendors, investors, board)
- Influencers (no formal authority but strong opinions that shape decisions)

### 2. Assess Power and Interest

For each stakeholder, assess on two dimensions:

**Power** (ability to influence the outcome):
- Can they approve or block decisions?
- Do they control budget or resources?
- Do they set strategic priorities?
- Does leadership defer to their opinion?
- Can they escalate and get attention?

| Score | Power Level | Description |
|-------|------------|-------------|
| High | Decision-maker or blocker — can approve, veto, or reallocate resources |
| Medium | Influencer — strong opinions that shape decisions but can't unilaterally block |
| Low | Contributor — does work or is affected, but limited influence on direction |

**Interest** (how much this project affects them or how engaged they are):
- Is their team's work directly affected?
- Does the outcome change their goals or metrics?
- Have they been vocal about this topic?
- Will they use or interact with the result?
- Do they care about this area personally?

| Score | Interest Level | Description |
|-------|---------------|-------------|
| High | Directly affected — outcome changes their work, goals, or metrics |
| Medium | Tangentially affected — related to their area but not core |
| Low | Minimally affected — aware of the project but not directly impacted |

### 3. Place in the Power × Interest grid

Map each stakeholder into one of four quadrants:

```
                    HIGH INTEREST          LOW INTEREST
                ┌─────────────────────┬─────────────────────┐
  HIGH POWER    │   MANAGE CLOSELY    │   KEEP SATISFIED    │
                │   Regular 1:1s,     │   Periodic updates, │
                │   involve in key    │   escalate critical │
                │   decisions early   │   issues only       │
                ├─────────────────────┼─────────────────────┤
  LOW POWER     │   KEEP INFORMED     │   MONITOR           │
                │   Regular updates,  │   Light-touch,      │
                │   gather feedback,  │   available on      │
                │   invite to demos   │   request           │
                └─────────────────────┴─────────────────────┘
```

### 4. Define engagement strategy per stakeholder

For each person, specify:

- **Communication frequency:** Daily / Weekly / Bi-weekly / Monthly / As-needed
- **Preferred channel:** 1:1 meeting / Slack / Email / Team standup / Dashboard / Async doc
- **Key message framing:** What do they care about? (Impact, timeline, risk, strategy, details, cost)
- **What they need from you:** Decisions, updates, input opportunities, heads-up on risks
- **What you need from them:** Approval, resources, feedback, air cover, alignment
- **Risk if neglected:** What goes wrong if you underinvest in this relationship?

### 5. Identify conflicts and alignment risks

Flag potential friction points:

- **Competing priorities:** Stakeholders whose goals conflict (e.g., sales wants speed, engineering wants quality)
- **Information asymmetry:** Stakeholders who have different understanding of scope or timeline
- **Historical tension:** Teams or people who've clashed before on similar initiatives
- **Hidden influencers:** People without formal power who shape opinions informally
- **Single points of failure:** Stakeholders whose absence or disagreement would stall everything

For each conflict, recommend a resolution approach.

### 6. Build the communication plan

Create a structured, actionable plan the PM can execute immediately.

## Output Format

```markdown
# Stakeholder Map — [Project/Initiative Name]
_Prepared [date] · Project lead: [name]_

## Power × Interest Grid

### Manage Closely (High Power, High Interest)
| Stakeholder | Role | Why High Power | Why High Interest |
|-------------|------|---------------|------------------|
| [name] | [role] | [reason] | [reason] |

### Keep Satisfied (High Power, Low Interest)
| Stakeholder | Role | Why High Power | Why Low Interest |
|-------------|------|---------------|-----------------|
| [name] | [role] | [reason] | [reason] |

### Keep Informed (Low Power, High Interest)
| Stakeholder | Role | Why Low Power | Why High Interest |
|-------------|------|-------------|------------------|
| [name] | [role] | [reason] | [reason] |

### Monitor (Low Power, Low Interest)
| Stakeholder | Role | Notes |
|-------------|------|-------|
| [name] | [role] | [when they might move quadrants] |

## Communication Plan

| Stakeholder | Quadrant | Frequency | Channel | Key Message | You Need From Them | Risk if Neglected |
|-------------|----------|-----------|---------|-------------|-------------------|-------------------|
| [name] | Manage Closely | Weekly 1:1 | Meeting | [framing] | [what] | [consequence] |
| [name] | Keep Satisfied | Bi-weekly | Email | [framing] | [what] | [consequence] |
| [name] | Keep Informed | Weekly | Slack + demo invite | [framing] | [what] | [consequence] |
| [name] | Monitor | Monthly | Email digest | [framing] | [what] | [consequence] |

## Conflict & Alignment Risks

| Tension | Stakeholders | Nature of Conflict | Resolution Strategy |
|---------|-------------|-------------------|-------------------|
| [tension] | [names] | [what they disagree on] | [how to resolve] |

## Quadrant Movement Watch
Stakeholders who may move quadrants as the project progresses:
| Stakeholder | Current | May Move To | Trigger | Action |
|-------------|---------|------------|---------|--------|
| [name] | Monitor | Keep Informed | [event that increases their interest] | [what to do when it happens] |

## Weekly Communication Calendar
| Day | Who | Format | Agenda/Purpose |
|-----|-----|--------|---------------|
| Monday | [name] | 1:1 (30 min) | [purpose] |
| Tuesday | [team] | Standup | [purpose] |
| Wednesday | [name] | Slack update | [purpose] |
| Friday | All stakeholders | Email digest | [purpose] |

## Next Steps
1. [Schedule first round of 1:1s with "Manage Closely" stakeholders]
2. [Set up recurring communication cadence]
3. [Address highest-priority conflict]
```

## Example

**User:** "I'm launching a new analytics dashboard for our product. Help me map stakeholders — I've had a bunch of alignment meetings recently, check my calls."

**Output:**

```markdown
# Stakeholder Map — Analytics Dashboard Launch
_Prepared 2026-03-05 · Project lead: Alex Rivera (PM)_

## Power × Interest Grid

### Manage Closely (High Power, High Interest)
| Stakeholder | Role | Why High Power | Why High Interest |
|-------------|------|---------------|------------------|
| David Liu | VP Product | Approved initiative, controls product roadmap | Personally championed this in leadership meeting |
| Priya Patel | Engineering Lead | Controls sprint priorities for the data team | Her team builds it; she's expressed concerns about scope |
| Tom Kline | Head of Sales | Drives revenue targets that dashboard serves | Has been requesting this for 6 months; told 3 prospects it's "coming soon" |

### Keep Satisfied (High Power, Low Interest)
| Stakeholder | Role | Why High Power | Why Low Interest |
|-------------|------|---------------|-----------------|
| Rachel Green | CFO | Controls budget; can block headcount requests | Cares about ROI, not feature details |
| Mark Jensen | CTO | Sets technical standards; veto on architecture | Trusts Priya; only cares if there's a scaling or security concern |

### Keep Informed (Low Power, High Interest)
| Stakeholder | Role | Why Low Power | Why High Interest |
|-------------|------|-------------|------------------|
| Nina Santos | CS Lead | No decision authority on product | Her team fields daily customer questions about reporting limitations |
| Jake Moore | Senior Data Engineer | IC, no org authority | Building the pipeline; has strong opinions on data architecture |
| Marketing team | Content + Demand Gen | No product decision authority | Planning launch messaging; need feature details for content |

### Monitor (Low Power, Low Interest)
| Stakeholder | Role | Notes |
|-------------|------|-------|
| Legal (compliance) | Regulatory review | Becomes high interest if we expose customer PII in dashboards |
| Finance ops | Billing team | Only relevant if dashboard includes billing/usage data |

## Communication Plan

| Stakeholder | Quadrant | Frequency | Channel | Key Message | Need From Them | Risk if Neglected |
|-------------|----------|-----------|---------|-------------|---------------|-------------------|
| David Liu | Manage Closely | Weekly | 1:1 (Mon) | Progress vs. milestones, decisions needed | Air cover, priority conflicts | Loses confidence, pulls support |
| Priya Patel | Manage Closely | Daily | Standup + weekly deep-dive | Scope trade-offs, blockers, technical decisions | Team capacity, feasibility calls | Scope creep, engineering misalignment |
| Tom Kline | Manage Closely | Bi-weekly | 1:1 (Thu) | What sales can promise, timeline, feature preview | Customer requirements, deal context | Overpromises to prospects, creates deadline pressure |
| Rachel Green | Keep Satisfied | Monthly | Email with exec summary | ROI projection, resource usage, on-track status | Budget approval if needed | Blocks headcount or tool spend |
| Mark Jensen | Keep Satisfied | As-needed | Slack + Priya loop-in | Only escalate: scaling risk, security, architecture | Technical sign-off on architecture | Surprise veto at the wrong moment |
| Nina Santos | Keep Informed | Weekly | Slack update + beta access | What's shipping, when, and how to talk to customers about it | Customer pain points, support ticket patterns | CS team can't support the feature at launch |
| Jake Moore | Keep Informed | Daily | Standup | Technical decisions, his input valued | Data pipeline delivery, quality | Key builder feels excluded, quality drops |
| Marketing | Keep Informed | Bi-weekly | Meeting | Feature positioning, launch timeline, assets needed | Launch plan, content, messaging | Misaligned launch messaging, missed opportunity |

## Conflict & Alignment Risks

| Tension | Stakeholders | Nature of Conflict | Resolution Strategy |
|---------|-------------|-------------------|-------------------|
| Scope vs. Speed | Priya (wants smaller scope) vs. Tom (wants everything) | Engineering wants to ship a focused v1; Sales promised prospects a full analytics suite | Align on explicit v1 vs. v2 scope in a joint meeting. Get David's backing on phased approach. |
| Data accuracy vs. ship date | Jake (wants 99.9% accuracy) vs. Alex (wants to launch by Q2) | Data team won't sign off on "good enough" metrics; PM needs to ship | Define accuracy thresholds per metric. Ship with accuracy disclaimers on beta metrics. |
| Launch timing | Tom (wants soft launch to close deals) vs. Marketing (wants a coordinated launch) | Sales wants to show prospects immediately; Marketing wants a polished launch moment | Compromise: private beta for Tom's 3 prospects (no public announcement), then coordinated GA launch 4 weeks later. |

## Quadrant Movement Watch
| Stakeholder | Current | May Move To | Trigger | Action |
|-------------|---------|------------|---------|--------|
| Legal | Monitor | Keep Informed | Dashboard exposes user-level data | Loop in for privacy review before beta |
| Rachel Green | Keep Satisfied | Manage Closely | Project goes over budget or misses deadline | Proactive escalation before she hears from someone else |
| Marketing | Keep Informed | Manage Closely | 4 weeks before GA launch | Shift to weekly syncs; they become critical for launch success |

## Weekly Communication Calendar
| Day | Who | Format | Purpose |
|-----|-----|--------|---------|
| Monday | David Liu | 1:1 (30 min) | Weekly progress, decisions, escalations |
| Daily | Priya, Jake, team | Standup (15 min) | Blockers, daily priorities |
| Tuesday | Nina Santos | Slack update | What shipped this week, what to tell customers |
| Thursday | Tom Kline | 1:1 (30 min) | Sales requirements, prospect feedback, timeline |
| Friday | All stakeholders | Email digest | Weekly summary: shipped, planned, decisions, risks |
| Bi-weekly Wed | Marketing | Meeting (45 min) | Launch planning, messaging alignment, content needs |

## Next Steps
1. Schedule Tom + Priya alignment meeting this week to lock v1 scope
2. Set up weekly email digest template (automate from project board)
3. Give Nina beta access so CS can start preparing support docs
```

## Edge Cases

- **User doesn't know all the stakeholders yet:** Build the initial map with known stakeholders. Add a "Discovery Questions" section with prompts to uncover hidden stakeholders. Recommend the user ask each known stakeholder: "Who else should I be talking to about this?"
- **Project is cross-company (vendors, partners, clients):** Add an "External Stakeholders" section. External stakeholders are almost always "Keep Satisfied" or "Manage Closely" — never "Monitor" — because you have less visibility into their concerns.
- **User is new to the company:** Focus the stakeholder map on learning, not just communicating. Add a "Relationship Building" column — first conversations should be about understanding their perspective, not pushing your project.
- **Stakeholder map for an ongoing team, not a project:** Adapt from project-based to team-based. Replace "communication plan" with "operating cadence." Focus on recurring rituals rather than one-time alignment.
- **Too many stakeholders (20+):** Group into tiers. Tier 1 (5–8 people) gets individual plans. Tier 2 (next 10–12) gets group communication strategies. Tier 3 (rest) gets broadcast updates.
- **User suspects political dynamics but doesn't want to document them:** Keep the output professional. Focus on "communication strategies" rather than naming political tensions directly. The map should be shareable, not a private political playbook.
