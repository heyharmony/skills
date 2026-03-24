# Diagnose Org Health

## Overview

**Diagnose Org Health** is a Harmony marketplace skill for leadership and finance teams that assesses organizational health by analyzing meeting patterns. Instead of relying on surveys or consultant reports, this skill extracts signals from real conversations: decision velocity, topic recurrence, participation balance, cross-functional collaboration, and escalation patterns.

## What It Does

This skill analyzes 4-6 weeks of meeting activity across your organization to produce a **6-dimension health scorecard**:

- **Decision Velocity**: How fast decisions move from proposal to execution
- **Topic Resolution**: Whether issues get resolved or recycled endlessly
- **Participation Balance**: Distribution of voice and inclusion across roles
- **Cross-functional Collaboration**: Quality of joint team outcomes
- **Escalation Health**: Whether escalations resolve cleanly or loop
- **Meeting Effectiveness**: Percentage of meetings with clear outcomes and follow-through

The output includes evidence tables, topic recurrence maps, participation charts, and the top 3 systemic issues with root cause hypotheses and actionable interventions.

## When to Use

- **Quarterly leadership pulse**: Regular health check on organizational effectiveness
- **Post-reorg assessment**: Understand how a restructure is flowing through the organization
- **Before strategic planning**: Validate execution capacity before committing to new initiatives
- **Something feels off**: Pinpoint dysfunction that intuition flags but lacks evidence
- **Board update**: Present evidence-based organizational health status
- **New leader onboarding**: Understand team dynamics and decision patterns rapidly

## How It Works

1. Connect Slack, Google Calendar, Notion, and/or Linear to provide conversation and meeting context
2. Specify the analysis period (4-6 weeks recommended) and org scope
3. Skill analyzes:
   - Meeting frequency and decision velocity
   - Recurring topics and decision bottlenecks
   - Speaker participation by role and seniority
   - Cross-team meeting outcomes
   - Escalation chains and resolution rates
   - Action item completion
4. Generates diagnostic report with scorecard, evidence, and recommendations

## Connector Requirements

- **Google Calendar**: Meeting invites, attendees, frequency
- **Slack**: Conversation patterns, decision threads (optional but recommended)
- **Notion/Linear**: Meeting notes, action items, decisions (optional)

At minimum, Google Calendar provides sufficient data for analysis.

## Output

- **6-Dimension Health Scorecard**: Numeric and narrative assessment
- **Evidence Table**: Specific patterns with meeting examples
- **Topic Recurrence Map**: Issues discussed 3+ times without resolution
- **Participation Balance**: Talk-time distribution by role
- **Top 3 Issues**: Root causes and recommended interventions

## Example

For "Helix Financial" (100-person fintech), analysis revealed:
- Decision Velocity 2/5: Pricing decisions average 4+ meetings
- Topic Resolution 2/5: Pricing recycled 7 times in 6 weeks
- Escalation Health 2/5: CEO becomes organizational bottleneck

Primary intervention: Establish RACI decision framework to distribute authority and unblock the CEO.

## Role & Category

**Role**: Leadership & Finance
**Action**: Analyze
**Triggers**: org health, team health, organizational assessment, team dynamics, decision velocity, meeting effectiveness, collaboration health

## Edge Cases

- Small teams: Participation metrics less meaningful; focus on decision velocity
- Remote-first orgs: Include async decision logs (Slack, Loom) for completeness
- Seasonal patterns: Normalize for Q4 or project cycles; compare year-over-year trends
- New teams: Use first diagnostic as baseline; compare future periods for trend
- Sensitive findings: Share findings with HR/board before broader communication

## Notes

This skill surfaces patterns without judgment — meeting frequency and escalations are data, not criticism. The goal is to identify systemic issues and unlock execution capacity.
