---
name: "Plan Change Rollout"
description: "Design a people-centered change rollout — stakeholder mapping, resistance detection, communication plan, training design, and adoption tracking — grounded in how teams actually react to change in their meetings. Trigger on: change management, change rollout, process change, tool adoption, organizational change, new tool rollout, reorg plan, change communication, adoption plan, resistance management."
dependencies: []
author: "Harmony"
version: "1.0.0"
icon: "sparkles"
cover: ""
screenshots: []
category: "Product"
---

## Purpose

Most change initiatives fail not because the change is wrong but because the rollout ignores the people side. Resistance doesn't announce itself — it shows up in meeting tone shifts, passive questions, dropped action items, and slow adoption. This skill mines Harmony transcripts for sentiment signals around announced changes, maps stakeholders by influence and support level, identifies resistance pockets and early champions, and builds a phased rollout plan with targeted communication, training, and adoption milestones.

## When to Use

- **New tool or platform rollout** — migrating to new CRM, communication platform, project management system, or analytics tool
- **Organizational restructure** — team reorganizations, reporting line changes, or new department formation
- **Process change** — new workflows, approval chains, documentation standards, or operational procedures
- **Policy change** — remote work policies, compensation structures, benefits programs, or safety protocols
- **Leadership transition** — new executive hire, promotion, or leadership model shift
- **Post-acquisition integration** — merging teams, systems, or cultures after an acquisition or merger

## Instructions

1. **Define the change**: What's changing, why now, who's affected, what stays the same, and what the desired end-state looks like
2. **Mine meeting transcripts for sentiment signals**: Look for enthusiasm, skepticism, pointed questions, resistance, confusion, and dropped commitments around the announced change
3. **Map stakeholders on 2×2**: Plot influence (high/low) against support (champion/neutral/resistant) to identify key players and resistance pockets
4. **Identify resistance root causes**: Dig into why people are hesitant — loss of control, uncertainty, bad past experience with change, workload concerns, or values conflict
5. **Design communication plan**: Tailor messaging per stakeholder group — champions get "help us lead this," resisters get "here's why this matters and how we'll support you through it"
6. **Build training plan**: Map what skills need to change, who needs what level of training (awareness/competency/mastery), and timeline
7. **Define adoption milestones**: Set leading indicators (training completion, tool login rate, question volume) and lagging indicators (usage frequency, productivity, satisfaction scores)
8. **Plan feedback loops**: Create mechanisms for people to voice concerns, escalate issues, and see that feedback is heard and acted on
9. **Set review checkpoints**: Schedule 30/60/90-day adoption reviews with clear go/no-go criteria for advancing to next phase

## Output Format

- **Change Brief**: What's changing, why, who's affected, timeline, and success definition
- **Stakeholder Map**: 2×2 grid with names/roles, influence level, current stance, and key concerns
- **Resistance Analysis**: Root causes by stakeholder group with mitigation tactics
- **Communication Plan**: Message themes and channel strategy for each audience (champions, neutrals, resisters)
- **Training Plan**: Skills inventory, learning paths by role, timeline, and delivery method
- **Adoption Milestones Dashboard**: Leading and lagging indicators with 30/60/90-day targets
- **Feedback Mechanism**: How people raise concerns, who monitors them, response timeline
- **30/60/90 Review Schedule**: Checkpoint dates, go/no-go questions, escalation path

## Example

**Scenario**: Atlas, a 300-person professional services firm, is migrating from Salesforce to HubSpot.

### Transcript Mining (Step 2)

- **Sales leadership sync (Feb 12)** — VP Sales: "We need modern integrations. Our Salesforce instance is held together with duct tape and three consultants." CRO agreed: "HubSpot's reporting is what I've been asking for." Sentiment: strongly supportive.
- **Field team standup (Feb 14)** — Senior AE Rachel Kim: "I've spent years customizing my Salesforce views — why are we starting over?" Two other reps nodded. Rep Marcus: "Will my automations carry over?" No answer given. Sentiment: resistant, rooted in loss of control and uncertainty.
- **Operations sync (Feb 15)** — Ops Manager Dena Torres: "When do we move the historical data? We have 6 years of pipeline data in there." RevOps lead: "I'm not against it, but the timing is rough with Q1 close." Sentiment: neutral but concerned about execution.
- **CS team meeting (Feb 16)** — CS lead: "Will our customer health scores port over?" Silence. Then: "I guess we'll figure it out." Sentiment: passive concern, low information.

### Stakeholder Map (Step 3)

| | High Influence | Low Influence |
|---|---|---|
| **Champion** | VP Sales, CRO (drove the decision) | 2 junior reps (excited about modern UI) |
| **Neutral** | Ops Manager (supportive if data migrates clean) | 50 field staff (will follow peers) |
| **Resistant** | Rachel Kim, Senior AE (respected peer, vocal critic) | 12 long-tenured reps (Salesforce power users) |

### Resistance Root Causes (Step 4)

| Group | Root Cause | Evidence |
|---|---|---|
| Senior AEs | Loss of control (years of custom views, automations) | "Why are we starting over?" — Rachel, Feb 14 |
| CS team | Uncertainty (no one answered their data question) | Silence after health score question — Feb 16 |
| Ops | Timing concern (Q1 close conflict) | "The timing is rough" — RevOps, Feb 15 |

### Communication Plan (Step 5)

| Audience | Message Theme | Channel | Owner | Timing |
|---|---|---|---|---|
| Champions (VP Sales, CRO) | "Help us lead this — here's how to rally your teams" | 1:1 meeting | COO | Week 1 |
| Rachel Kim (vocal resister) | "Your expertise matters — help us design the migration so your workflows carry over" | 1:1 coffee chat | VP Sales | Week 1 |
| Field reps (neutral majority) | "Here's what gets better, here's what stays the same, here's your training schedule" | Team all-hands + one-pager | Sales Enablement | Week 2 |
| CS team | "Your health scores will port — here's the migration plan and timeline" | CS team sync + FAQ doc | Ops Manager | Week 2 |
| Holdouts (power users) | "We hear you. Here's dedicated support to rebuild your custom views" | Small group bootcamp | Sales Enablement + HubSpot rep | Week 4 |

### Phased Rollout (Steps 6-9)

- **Phase 1 (Week 1–2)**: Champions go first. VP Sales and CRO use HubSpot publicly, share wins in Slack. Rachel Kim invited to co-design the migration (convert resister to co-owner).
- **Phase 2 (Week 3–5)**: Neutral majority onboards. 90-minute training sessions, one-page quick-start guide, peer buddy system (each champion supports 5 reps).
- **Phase 3 (Week 6+)**: Dedicated bootcamp for holdouts. Pair with champions. Rebuild custom views together. HubSpot rep on-site for 2 days.
- **Adoption targets**: 70% login by day 30, 85% daily active use by day 60, tool satisfaction NPS > 7 by day 90.
- **30-day review**: Check login rates, support ticket volume, sentiment in team meetings. Go/no-go for Phase 2 expansion.
- **60-day review**: Check daily active use, pipeline data completeness, dropped automations. Escalate any team below 60% adoption.
- **90-day review**: Final adoption score, NPS, and recommendation on Salesforce sunset date.

**Result**: By day 90, 92% adoption. Rachel Kim became an unofficial HubSpot champion after co-designing the migration. Three of the original 12 holdouts became peer trainers.

## Edge Cases

- **Change announced before rollout plan exists**: You're in reactive mode. Start with Step 1 immediately; communicate that a rollout plan is coming, buy trust with transparency
- **Remote team rollout**: No in-person training. Invest in recorded demos, asynchronous guides, and one-on-one video pairing sessions; extend timeline slightly
- **Executive-mandated change with no buy-in process**: High resistance risk. Double down on Step 4 (understand root causes) and Step 5 (explain the "why" to resisters first, before rolling out broadly)
- **Change fatigue**: Too many changes at once. Prioritize which changes are non-negotiable; delay or combine others; get explicit stakeholder buy-in on phasing
- **Partial rollback**: Change isn't working for one team but is for others. Separate the feedback by team; don't assume one size fits all; pilot a tweak before full rollback

## Role

Operations

## Action

Execute

## Connectors

Slack, Notion, Asana, Google Calendar, Gmail
