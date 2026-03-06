---
name: "Weekly Digest"
description: "Generates a comprehensive weekly summary of everything that happened across conversations, meetings, and communications — organized by impact, highlighting decisions, action items, risks, wins, and what's coming next. Trigger on: weekly digest, what happened this week, weekly summary, week recap, what did I miss this week."
dependencies: []
---

# Weekly Digest

## Purpose
Replace the Monday morning scramble to catch up. Deliver a single, structured summary that helps busy professionals understand what happened, what changed, what they missed, and what's coming. Scannable in 30 seconds, explorable in 5 minutes.

## When to Use
- **Every Monday morning** – Start your week informed
- **After vacation/PTO** – Jump back in without re-reading everything
- **Mid-week check-in** – Understand momentum and emerging issues
- **New team member onboarding** – Quick understanding of what's happening
- **Escalation context** – Gather full picture before important conversations
- **Quarter/period planning** – Reflect on what actually happened vs. what was planned

## Instructions
1. Scan all user's interactions from the past 7 days (meetings attended, conversations, email threads, messages)
2. Extract and categorize:
   - **Key Decisions**: Major choices made by user or impacting user
   - **Action Items**: Commitments and next steps assigned to user or critical for user
   - **Risks & Escalations**: Problems surfaced, conflicts, blockers, scope creep, timeline concerns
   - **Wins & Progress**: Completed milestones, positive feedback, momentum indicators
   - **Upcoming Deadlines**: Important dates in the next 14 days
3. Identify what changed from the previous week (new risks that appeared, action items completed, decisions reversed)
4. Surface items user might have missed (mentions in meetings they weren't invited to, decisions that cascade to them)
5. Extract sentiment signals: team morale, urgency/stress levels, confidence/concerns
6. Project "This Week Ahead" with key meetings, deadlines, and anticipated decisions
7. Format as scannable markdown with bold headers, short summaries, and detail sections

## Output Format
```
# Weekly Digest: [Date Range]

**Quick Stats**
- Meetings: X | Conversations: Y | Decisions: Z | Action Items: N | New Risks: M

---

## TL;DR (30-second read)
[2-3 bullet points capturing the most important things that happened]

---

## Key Decisions
- [Decision title]: [Who decided, key context, impact on user]
- [Decision title]: [Who decided, key context, impact on user]

### New This Week
- [New decision from this week]

---

## Action Items
### Assigned to You
- [Action]: Due [date] | Owner: [Name] | Status: [On track/At risk]
- [Action]: Due [date] | Owner: [Name] | Status: [On track/At risk]

### For You to Track (Others' Items)
- [Critical action]: Due [date] | Owner: [Name] | Blocks: [what]

### Completed This Week
- [Action]: Completed by [Name]
- [Action]: Completed by [Name]

---

## Risks & Escalations
- [Risk name]: [Status - new/ongoing] | Severity: [High/Medium/Low] | Owner: [Name]
- [Risk name]: [Status - new/ongoing] | Severity: [High/Medium/Low] | Owner: [Name]

---

## Wins & Progress
- [Milestone/win]: [Brief context and impact]
- [Milestone/win]: [Brief context and impact]

---

## Upcoming Deadlines (Next 14 Days)
- [Date]: [Deadline name] | Owner: [Name]
- [Date]: [Deadline name] | Owner: [Name]

---

## This Week Ahead
### Critical Meetings
- [Date, Time]: [Meeting name] | Attendees: [Key people] | Purpose: [1 line]
- [Date, Time]: [Meeting name] | Attendees: [Key people] | Purpose: [1 line]

### Anticipated Decisions
- [Decision pending]: Timeline: [This week/Next week] | Led by: [Name]

### Team Sentiment & Energy
[Brief narrative: overall morale, stress level, confidence level, any notable shifts]

---

## What Changed This Week
- [What was different from last week]
- [What was different from last week]

---

## What You Might Have Missed
- In [Meeting name]: [Key point that affects you]
- In [Conversation with person]: [Key decision/update]
```

## Example

**Scenario**: Sarah Chen, Product Manager leading a product launch at TechCorp

```
# Weekly Digest: Monday, March 3 – Friday, March 7, 2026

**Quick Stats**
- Meetings: 12 | Conversations: 23 | Decisions: 4 | Action Items: 8 | New Risks: 2

---

## TL;DR (30-second read)
- **Go/no-go decision pushed to Thursday** – Launch will proceed pending final security sign-off (on track, not on track)
- **Design handoff delayed by 3 days** – Impacts dev timeline; mitigation: parallel development starting Monday
- **Customer advisory board is excited** – Positive momentum; two Fortune 500 accounts interested in early access

---

## Key Decisions
- **Launch scope: Features ABC locked, Feature D deferred** – Led by Executive Sponsor James Park | Impact: Your roadmap adjusts; Feature D moves to post-launch
- **Beta program: 50 accounts (vs. planned 20)** – Led by Sarah Chen (you) | Reasoning: Customer demand stronger than forecast
- **Hiring freeze lifted for eng team** – Led by VP Eng Maria Gonzalez | Impact: You can staff up post-launch
- **Marketing launch date: March 24 (confirmed)** – Led by CMO David Liu | Impact: Hard deadline; your team's final build must be live by March 21

### New This Week
- Launch timeline hardened: date locked for the first time

---

## Action Items
### Assigned to You
- **Finalize launch messaging with Marketing** | Due: Wed March 12 | Status: On track | Dependencies: Design handoff
- **Conduct final security review** | Due: Thu March 13 | Status: At risk (blockers from infosec) | Escalation: Flag if not approved by Thu 5pm
- **Confirm CFO signoff on GTM budget** | Due: Tue March 11 | Status: On track | Note: CFO promised review by EOD Tue
- **Schedule customer training sessions** | Due: Fri March 14 | Status: On track | Details: 3 sessions for beta cohort

### For You to Track (Others' Items)
- **Design system handoff to engineering** | Due: Wed March 12 | Owner: Designer Tom Kumar | Blocks: Your dev sprint start
- **Security assessment completion** | Due: Thu March 13 | Owner: Infosec Lead Raja Patel | Blocks: Go/no-go decision
- **Prepare board deck** | Due: Wed March 12 | Owner: CEO Lisa Zhang | Blocks: Your March 13 board meeting

### Completed This Week
- Completed beta cohort selection (20/50 accounts finalized)
- Completed product requirements document review with execs
- Completed competitive landscape memo

---

## Risks & Escalations
- **Design handoff delay** | Status: New | Severity: High | Owner: Designer Tom Kumar | Impact: Dev team can't start UI work on schedule; mitigation in place (parallel work on backend)
- **Infosec blockers on compliance requirements** | Status: Ongoing (escalated Tue) | Severity: High | Owner: Infosec Lead Raja Patel | Impact: Go/no-go decision may slip if not resolved by Thursday; could push launch
- **CFO budget sign-off pending** | Status: New | Severity: Medium | Owner: CFO Alex Chen | Impact: Marketing can't commit final ad spend; May affect launch reach
- **Beta account technical onboarding capacity** | Status: Ongoing | Severity: Medium | Owner: Customer Success Lead Priya Kapoor | Impact: May need to stagger beta cohort onboarding

---

## Wins & Progress
- **Customer advisory board session**: All 6 attendees expressed strong excitement about the product direction. Two Fortune 500 accounts (Acme Corp, Global Finance Inc.) expressed interest in early access—potential expansion of beta cohort
- **Engineering prototype demo**: Backend team delivered working prototype ahead of schedule; team confidence in launch feasibility is high
- **Design system maturity**: New design tokens framework reduces design debt; Tom's team can ship faster
- **Marketplace partnership confirmed**: Integration partner SaaS Platform Corp confirmed they'll promote your launch on their platform—unexpected win with high reach potential

---

## Upcoming Deadlines (Next 14 Days)
- **Tue Mar 11**: CFO budget sign-off
- **Wed Mar 12**: Design handoff complete
- **Wed Mar 12**: Marketing launch messaging final
- **Wed Mar 12**: Board deck to CEO
- **Thu Mar 13**: Security assessment complete
- **Thu Mar 13**: Go/no-go decision meeting
- **Fri Mar 14**: Customer training sessions complete
- **Mon Mar 17**: Dev sprint 2 starts (final sprint before launch)
- **Fri Mar 21**: Final build live (3 days before launch)
- **Mon Mar 24**: Product launch

---

## This Week Ahead
### Critical Meetings
- **Tue Mar 11, 10am**: Weekly sync with Engineering Lead (30 min) | Led by: You
- **Tue Mar 11, 2pm**: GTM planning with Marketing (60 min) | Led by: CMO David Liu
- **Wed Mar 12, 9am**: Design handoff & dev kickoff (90 min) | Led by: You + Tom Kumar
- **Wed Mar 12, 3pm**: Board meeting (120 min) | Led by: CEO Lisa Zhang
- **Thu Mar 13, 2pm**: Go/no-go decision (60 min) | Led by: Executive Sponsor James Park | Prerequisite: Infosec approval

### Anticipated Decisions
- **Go/no-go decision**: Thu Mar 13 | Led by: James Park | Depends on: Security sign-off, CFO approval
- **Final beta cohort composition**: Likely Tue/Wed | Led by: You + Customer Success
- **Marketing budget allocation**: After CFO sign-off | Led by: CMO David Liu

### Team Sentiment & Energy
Team is energized and confident. Engineering feels good about the prototype; design team delivered efficiently. There's palpable excitement on the customer side (ABC board meeting was very positive). Slight stress from the compressed timeline and interdependencies (design delay creating pressure), but mitigation plans are in place. No burnout signals. Confidence level: High with healthy paranoia about the infosec blockers.

---

## What Changed This Week
- **Timeline hardened**: Launch date locked (was "week of March 24", now "March 24")
- **Beta scope expanded**: 50 accounts (up from planned 20) due to customer demand
- **Design delay introduced**: 3-day slip (was imperceptible, now blocking dev)
- **Hiring freeze lifted**: Previously a constraint; now a resource unlock
- **Partnership accelerated**: Marketplace integration confirmed earlier than expected

---

## What You Might Have Missed
- **In Infosec steering meeting (Tue, you weren't invited)**: Raja flagged that compliance assessments are taking longer than planned; he's working with external audit firm but may need 2 additional days. This is why the go/no-go is now "at risk". You'll want to check with him directly to understand if there's any action you can take to unblock.
- **In customer advisory board call (Wed, live)**: Both Fortune 500 accounts mentioned they'd sign annual contracts if you ship by end-of-March. This adds weight to the March 24 deadline and is new leverage you have with execs if timeline pressures build.
- **In Engineering huddle (daily standup, async)**: Tom's design system work exposed some technical debt in the API layer that the backend team didn't surface in your steering meeting. You should check the impact—it might be immaterial or it might affect launch scope.
```

## Edge Cases

**Scenario: Quiet Week (Very Little Happened)**
- Keep the structure but be honest: "This was a quiet week. Few meetings, minimal decisions. Good news: no new risks."
- Use this as an opportunity to highlight what you got done or what preparation happened in background
- Surface any medium-term deadlines and decisions coming
- Suggest: "Consider this the calm before the storm" if you know something's coming, or highlight the opportunity to focus on strategic/technical work

**Scenario: Overwhelmingly Busy Week (Too Much to Fit)**
- Ruthlessly prioritize the top 3-5 decisions and action items
- Group by severity/impact; bury nice-to-know items under "Extended View" collapse sections
- Call out explicitly: "This week had 40+ action items across your teams. Below are the 12 critical for you. Full view: [link to detailed breakdown]"
- Flag cumulative burnout risk in team sentiment section if applicable

**Scenario: User Was on PTO (Vacation)**
- Start with: "You were out [dates]. Here's what you missed."
- Focus heavily on "What You Might Have Missed" section
- Highlight any decisions made in their absence that affect them
- Call out any action items that got assigned to them while they were gone
- Surface any fires that happened

**Scenario: New to the Team (First Week or First Digest)**
- Add an extra section: "Key Context You Should Know" with organizational structure, main initiatives, key players
- Bias toward explaining the "why" behind decisions
- Call out norms/context: "This is higher velocity than typical" or "This team operates with high autonomy"
- Include relationships: "Decision made by X (works closely with Y on Z initiative)"

---

