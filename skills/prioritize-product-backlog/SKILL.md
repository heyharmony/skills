---
name: "Prioritize Product Backlog"
description: "Turn stakeholder requests, customer feedback, and team discussions into a prioritized, sprint-ready backlog. Write INVEST-compliant user stories from meeting transcripts, score items using weighted business value and user impact, and plan sprint capacity. Trigger on: backlog grooming, sprint planning, user stories, story points, backlog prioritization, epic breakdown, acceptance criteria, sprint capacity, INVEST criteria."
dependencies: []
---

## Purpose

Help product owners transform messy stakeholder requests and customer feedback (captured in Harmony meetings) into clean, prioritized, sprint-ready backlogs. This skill extracts feature requests and pain points directly from stakeholder conversations, writes INVEST-compliant user stories grounded in real customer language, scores items by evidence-weighted factors, and plans sprint capacity from historical team velocity. Replace guesswork and the loudest voice with data-driven prioritization.

## When to Use

- **Before sprint planning**: Extract customer priorities from recent customer discovery calls; ground sprint commitment in evidence
- **After stakeholder requests pile up**: Batch 3-5 conflicting asks and surface disagreement; let data decide
- **Post-customer discovery batch**: Mine discovery calls for pain points; write stories in customers' own words
- **When epic needs breaking down**: Split large feature requests into sprint-sized stories (≤8 points) by workflow, persona, or workflow
- **Quarterly backlog cleanup**: Re-score backlog items against current business value; retire low-signal stories
- **Onboarding a new product owner**: Apply consistent scoring and story-writing discipline to an inherited backlog
- **Mid-sprint scope change**: Evaluate new request against sprint capacity and existing commitments

## Instructions

1. **Mine meeting transcripts for feature requests, pain points, and stakeholder asks**
   - Copy stakeholder meeting, customer discovery, and product review transcripts into Harmony
   - Identify explicit asks ("we need X"), pain points ("users struggle with Y"), and implied needs ("if we only had Z")
   - Tag speaker role (customer, sales, executive, support, PM) and quote exactly

2. **Write user stories in As a / I want / So that format using customer's actual words**
   - As a [persona]: Use job title or user role from transcript
   - I want [action]: Use customer's language; avoid technical jargon
   - So that [outcome]: Capture the business or user impact stated in the call

3. **Add Given-When-Then acceptance criteria**
   - Given [precondition]: Set up the scenario
   - When [action]: Describe user's action
   - Then [outcome]: Observable, testable result
   - Write 2-3 criteria per story; include happy path and 1 edge case

4. **Validate against INVEST criteria**
   - Independent: Story doesn't depend on other stories (flag interdependencies)
   - Negotiable: Story is a conversation starter, not a contract
   - Valuable: Story delivers user value or reduces risk
   - Estimable: Team can size it in points
   - Small: Story fits in one sprint (≤8 points)
   - Testable: Acceptance criteria are clear and measurable

5. **Score using weighted prioritization factors**
   - Business Value (40%): Revenue impact, customer retention, strategic alignment (1-5 scale)
   - User Impact (30%): How many users affected, pain reduction severity (1-5 scale)
   - Risk (15%): Technical risk, dependency risk, scope risk (1-5 scale, inverted)
   - Effort (15%): Estimated story points (1-8 scale, inverted)
   - Calculate: (BV × 0.40) + (UI × 0.30) + (5 - Risk × 0.15) + (8 - Effort × 0.15) = Priority Score (0-20)

6. **Break epics into sprint-sized stories using splitting techniques**
   - By workflow: separate story for each step (search → filter → add to cart)
   - By persona: one story per user role with unique needs
   - By data type: separate stories for different data entities
   - By operation: CRUD operations split separately if they're independent
   - Happy path first: move error handling to follow-up story

7. **Calculate sprint capacity in story points**
   - Team velocity: average story points completed over last 3 sprints
   - Sprint days: (calendar days) − (holidays, planned days off)
   - Capacity = Velocity × (Sprint days / 10)
   - Account for meetings, on-call, new hires (reduce by 15-30%)

8. **Load sprint commitment: 85% committed, 15% stretch**
   - Committed stories: pull highest-priority stories until 85% of capacity is reached
   - Stretch stories: lower-priority or smaller stories that fit if committed work finishes early
   - Flag any story over 8 points as "too large, recommend splitting"

9. **Surface conflicting priorities from different stakeholders**
   - Group scored stories by stakeholder perspective (sales vs. support vs. customer vs. leadership)
   - Highlight stories where one stakeholder scores high but another scores low
   - Call out decisions: "Sales prioritizes B2B onboarding (score 18), but support sees more pain from notification bugs (score 16)"

## Output Format

### Prioritized Backlog (Top 20)

| Rank | Story | Business Value | User Impact | Risk | Effort | Score | Notes |
|------|-------|-----------------|-------------|------|--------|-------|-------|
| 1 | As a clinic staff... | 5 | 5 | 2 | 5 | 19.4 | Stakeholder alignment: Sales, Support, PM |
| 2 | As a patient... | 4 | 5 | 3 | 3 | 17.8 | Customer pain point from 3 calls |

### User Stories (Template)

**Story Title**
- **Story**: As a [persona], I want [action], so that [outcome]
- **Source**: [Meeting, speaker, date, quote]
- **Acceptance Criteria**:
  - Given [precondition], when [action], then [observable result]
  - Given [edge case], when [action], then [error handling]
- **INVEST Check**: ✓ Independent / ✓ Negotiable / ✓ Valuable / ✓ Estimable / ✓ Small / ✓ Testable
- **Story Points**: [1-8]
- **Dependencies**: None | [Linked story IDs]

### Sprint Plan

**Sprint 26 (Mar 24–Apr 4, 8 days, velocity 34 pts)**
- **Committed (85% = 29 pts)**: [Story 1, 8 pts] + [Story 2, 5 pts] + [Story 5, 8 pts] + [Story 7, 8 pts]
- **Stretch (15% = 5 pts)**: [Story 10, 3 pts] + [Story 12, 2 pts]

### Capacity Calculation

- Velocity (last 3 sprints): 34, 32, 36 = 34 avg
- Sprint days: 10 calendar days − 1 holiday = 9 days
- Capacity: 34 × (9 / 10) = 30.6 pts
- Adjusted (team 80% available): 30.6 × 0.80 = 24.5 pts
- Final capacity: 25 pts (rounded)

### Stakeholder Priority Conflicts

| Story | Sales Scores | Support Scores | Conflict |
|-------|--------------|----------------|----------|
| Patient notifications | 3 (low priority) | 5 (critical) | Support sees repeated complaints; Sales focuses on onboarding |
| Clinic bulk import | 5 (enterprise requirement) | 2 (workaround exists) | Sales has contract requirement; Support handles few requests |

## Example: Canopy Health Telehealth Platform

**Context**: Canopy Health (patient + clinic telehealth scheduling & EHR). Product team sprint planning, Mar 18, 2026. Participants: Marcus Chen (PM), Yuki Tanaka (Senior Engineer), Dr. Sarah Okonkwo (Customer Success, healthcare client champion), and James Wu (Sales Lead, enterprise tier).

**Transcript Excerpt** (from Harmony):

> **James (Sales)**: "Our big contract at St. Augustine Clinic is holding us up. They've got 200 staff and manually import patient rosters from Excel. Takes IT two hours every Monday. They'll sign if we automate that import."
>
> **Dr. Sarah (Support)**: "Actually, the patients are calling us more about notification timing. They're missing appointment reminders. That's coming from at least six calls last week. Clinics can use the manual workaround."
>
> **Marcus (PM)**: "Got both on the radar. What's the actual pain for patients missing reminders?"
>
> **Dr. Sarah**: "Two no-shows per clinic per month. Revenue impact for smaller practices. And reputational—they feel forgotten."
>
> **Yuki (Eng)**: "How big is the import? If it's CSV parsing, five points. If they need SFDC sync or HL7, that's a different story."
>
> **James**: "CSV and mapping. They have export templates ready."

---

### Extracted User Stories

**Story 1: Clinic Bulk Patient Roster Import**
- **Story**: As a clinic administrator, I want to upload a CSV file with patient roster data, so that I don't manually re-enter 200+ patient records every Monday
- **Source**: Sales stakeholder meeting, James Wu, Mar 18, 2026. Quote: "They've got 200 staff and manually import patient rosters from Excel. Takes IT two hours every Monday."
- **Acceptance Criteria**:
  - Given a valid CSV with columns (first name, last name, DOB, email, phone), when admin clicks "Import," then system creates patient records and displays success count
  - Given a CSV with missing required columns, when admin clicks "Import," then system highlights missing columns and blocks import
  - Given a CSV with 500+ rows, when import completes, then system sends email confirmation with record count and any failures
- **INVEST Check**: ✓ Independent / ✓ Negotiable / ✓ Valuable / ✓ Estimable / ✓ Small / ✓ Testable
- **Story Points**: 5
- **Dependencies**: None

**Story 2: Notification Timing Configuration**
- **Story**: As a clinic scheduler, I want to set when appointment reminder notifications are sent (e.g., 24h, 1h before), so that patients receive reminders at the time they're most likely to see them
- **Source**: Customer Success stakeholder meeting, Dr. Sarah Okonkwo, Mar 18, 2026. Quote: "Patients are calling us more about notification timing. They're missing appointment reminders. That's coming from at least six calls last week."
- **Acceptance Criteria**:
  - Given a scheduled appointment, when clinic configures reminder timing (24h, 12h, 1h, on-day), then patient receives SMS/email at configured time
  - Given patient has multiple appointments in same day, when they receive reminders, then no duplicate notifications sent within 1 hour window
  - Given clinic changes reminder settings, when existing appointments already have send times queued, then setting applies only to future appointments
- **INVEST Check**: ✓ Independent / ✓ Negotiable / ✓ Valuable / ✓ Estimable / ✓ Small / ✓ Testable
- **Story Points**: 8
- **Dependencies**: Assumes notification system exists

**Story 3: Patient No-Show Report**
- **Story**: As a clinic practice manager, I want to see a weekly no-show rate by provider and reason (no reminder, scheduling conflict, other), so that I can identify patterns and adjust clinic workflow
- **Source**: Customer Success stakeholder meeting, Dr. Sarah Okonkwo, Mar 18, 2026. Quote: "Two no-shows per clinic per month. Revenue impact for smaller practices."
- **Acceptance Criteria**:
  - Given a clinic with 30+ appointments over 7 days, when I view the no-show report, then system displays percentage no-show rate by appointment type
  - Given an appointment marked as no-show, when I click "reason," then I can select from preset reasons (patient didn't receive reminder, scheduling error, patient cancellation, other)
  - Given no-show data for past 90 days, when I export report, then CSV includes date, provider, appointment type, no-show status, and reason
- **INVEST Check**: ✓ Independent / ✓ Negotiable / ✓ Valuable / ✓ Estimable / ✓ Small / ✗ Testable (needs analytics backend; consider spike)
- **Story Points**: 8
- **Dependencies**: Requires analytics/reporting infrastructure spike

---

### Prioritization Scoring

| Story | Business Value (40%) | User Impact (30%) | Risk (15%) | Effort (15%) | **Total Score** |
|-------|----------------------|-------------------|------------|--------------|-----------------|
| Roster Import | 5 (contract blocker) | 3 (admin only) | 2 (low) | 5 pts (moderate) | **18.55** |
| Notification Timing | 4 (retention, engagement) | 5 (patient experience) | 3 (moderate) | 8 pts (larger) | **18.05** |
| No-Show Report | 3 (practice ops) | 4 (operational insight) | 4 (analytics spike) | 8 pts (larger) | **14.70** |

**Calculation** (Story 1):
- BV: 5 × 0.40 = 2.0
- UI: 3 × 0.30 = 0.9
- Risk: (5 − 2) × 0.15 = 0.45
- Effort: (8 − 5) × 0.15 = 0.45
- Total: 2.0 + 0.9 + 0.45 + 0.45 = **3.80** (scaled to 20: 18.55)

---

### Sprint 26 Plan

**Sprint Capacity**: Velocity 36 pts (last 3 sprints: 36, 34, 38), 9 sprint days, team 85% available = **28 pts**

**Committed (85% = 24 pts)**:
- [Story 1] Clinic Bulk Roster Import — 5 pts
- [Story 2] Notification Timing Config — 8 pts
- [Story 4] (from next priority tier) Notification Retry Logic — 5 pts
- [Story 5] Bug: Reminder SMS not sending for international numbers — 3 pts

**Stretch (15% = 4 pts)**:
- [Story 3] No-Show Report — 8 pts (won't fit; flag for Sprint 27)
- [Story 6] Analytics dashboard improvement — 2 pts

---

### Stakeholder Alignment

| Story | Sales (James) | Support (Dr. Sarah) | PM (Marcus) | Recommendation |
|-------|---------------|-------------------|------------|-----------------|
| Roster Import | 5 (contract blocker) | 2 (workaround OK) | 4 | **Prioritize**: Enterprise contract value justified |
| Notification Timing | 3 (not mentioned) | 5 (customer pain) | 4 | **Prioritize**: Customer retention + support burden |
| No-Show Report | 2 (not mentioned) | 4 (operational) | 3 | **Backlog**: Lower priority; consider for next sprint if notification fix shows improvement |

**Decision**: Sprint 26 commits to Stories 1 & 2 (20 pts total), addressing both sales contract requirement and customer support pain. Story 3 moved to Sprint 27 pending analytics resources.

## Edge Cases

1. **Conflicting stakeholder priorities**: Scores diverge by >5 points (e.g., sales scores 5, support scores 1). Surface the disagreement explicitly; use weighted scoring as tiebreaker, but flag in sprint plan for team discussion.

2. **Technical debt stories with no direct user value**: Refactoring, dependency upgrades, infrastructure. Score user impact as 1; business value by risk reduction (e.g., "prevents future outages"). Use 10% of sprint capacity as hard minimum for debt.

3. **Stories that violate INVEST**: Story is too large (>8 pts), depends on 3 other stories, or acceptance criteria are unmeasurable. Recommend epic re-breakdown or spike (1-3 pt placeholder story for research). Don't commit until fixed.

4. **Insufficient velocity history**: New team, new project, or first sprint. Estimate capacity using team size × 8 pts/person as baseline. Re-calibrate after 2-3 sprints; adjust downward 20% for new team overhead.

5. **Mid-sprint scope change request**: Calculate "eviction cost" (points of committed work that must be displaced). If new request scores >5 points higher than lowest-committed story, discuss trade-off in async standup. Document decision in sprint notes.

6. **Stories blocked on external dependency**: Partner API not ready, legal review pending. Estimate blocker resolution date. If >1 sprint away, move to backlog; don't commit to story until unblocked. Create "waiting for X" epic to track.

---

**Role**: Product & Design | **Action**: Execute

**Connectors**: Linear (backlog, sprints), Jira (story status, velocity), Asana (project tracking), Slack (team capacity alerts), Notion (product roadmap, customer feedback notes)
