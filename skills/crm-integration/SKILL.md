---
name: "Push Call Data to CRM"
description: "Push conversation data from Harmony into your CRM — deal updates, next steps, contact notes, and action items. Keep HubSpot/Salesforce current without manual data entry. Trigger on: update CRM, sync to Salesforce, sync to HubSpot, update deal, add notes, create task."
dependencies: []
connectors:
  - name: "HubSpot"
    reason: "Sync call notes, next steps, deal stage recommendations, and contact activity directly from Harmony into deal and contact records"
  - name: "Salesforce"
    reason: "Push Harmony conversation data (call summaries, action items, buying signals) into Salesforce opportunities and accounts"
  - name: "Slack"
    reason: "Confirm sync success and alert sales team when CRM data has been updated from Harmony insights"
author: "Harmony"
version: "1.0.0"
icon: "sparkles"
cover: ""
screenshots: []
category: "Sales"
---

## Purpose

Reduce manual CRM data entry by pushing conversation insights from Harmony directly into HubSpot or Salesforce. After every sales call, discovery meeting, or customer conversation, the skill extracts key data (what was said, next steps, deal signals, action items) and updates the relevant deal, contact, and activity records. This keeps your CRM current with conversation context without asking reps to manually log notes. Works with any Harmony conversation (recorded, transcribed, or meeting notes) and maps to your CRM structure.

## When to Use

- After every sales call — automatically log call summary and next steps in CRM
- During deal reviews — pull the latest Harmony conversation context into CRM before the meeting
- Weekly CRM audits — bulk-sync all unsynced conversations from the past week
- When deals are stuck — pull all Harmony conversations for an account to see what's blocking
- To improve forecast accuracy — sync customer sentiment and timeline signals from calls into deal stage recommendations

## Instructions

### 1. Gather conversation context

Start by asking what the user has:
- **What conversation?** (Sales call, customer meeting, discovery call, customer success check-in?)
- **Participants:** Who was on the call? (Rep, customer contact, other reps?)
- **Related deal/account:** Which deal or account should this sync to?
- **Data source:** Is this from a Harmony recording, transcript, or meeting notes?

Extract from Harmony:
- Key topics discussed
- Action items and owners
- Next steps and timeline
- Buying signals or concerns
- Contact information (roles, names, emails)
- Deal stage indicators

### 2. Map conversation data to CRM fields

Identify what fields in your CRM should be updated:

**Deal/Opportunity fields:**
- Deal stage (recommend based on signals)
- Close date (if mentioned or implied)
- Next step
- Deal notes/summary
- Expected value (if updated)
- Risk assessment (if applicable)

**Contact/Account fields:**
- Contact name, title, email, phone
- Account name, industry, size
- Contact notes/history
- Decision role (if identified)
- Buying authority (if discussed)

**Activity/Task fields:**
- Call summary (what was discussed)
- Action items (what's due, who owns it, when)
- Follow-up required (if next step is on your team)

### 3. Extract key details

Pull structured data from the conversation:

**Action items:**
- What needs to happen next?
- Who owns it? (Customer or your team?)
- When is it due?
- What's the next milestone?

**Decision signals:**
- Are they buying or evaluating?
- What's the timeline (this month, Q2, "exploring")?
- Budget mentioned or implied?
- Approval stakeholders mentioned?

**Risk/Opportunity indicators:**
- Concerns or objections raised?
- Competitive mentions?
- Scope changes?
- Upsell opportunities?

### 4. Format data for CRM

Structure data to match your CRM fields:

**HubSpot format:**
- Deal notes (text)
- Contact properties (first name, last name, title, phone, email)
- Deal stage (select from picklist)
- Close date (date field)
- Next step (text/select)
- Associated contacts (link)

**Salesforce format:**
- Account (lookup)
- Opportunity (lookup)
- Activity/task record
- Opportunity notes (large text)
- Opportunity next step (field)
- Contact role (lookup)

### 5. Push updates and confirm

Push data to CRM and log what was synced.

## Output Format

# CRM Sync Report
_Conversation: [Meeting/Call Title] | Date: [Date] | Rep: [Name]_

## Conversation Summary
- **Date:** [Date]
- **Participants:** [Attendees from Harmony]
- **Duration:** [Length]
- **Account:** [Company]
- **Deal:** [Deal name/ID]
- **Type:** [Discovery / Demo / Negotiation / Customer Success / Other]

## Key Takeaways
[2–3 sentence summary of the conversation and main outcome]

## CRM Updates Applied

### Deal/Opportunity
| Field | Old Value | New Value | Reason |
|-------|-----------|-----------|--------|
| Stage | [Old] | [New] | [Rationale from conversation] |
| Close date | [Old] | [New] | [Customer said... or implied...] |
| Next step | [Old] | [New] | [Action item identified] |
| Notes | — | [Added] | [Key discussion points] |

### Contact Updates
| Contact | Field | Old | New | Notes |
|---------|-------|-----|-----|-------|
| [Name] | Title | [Old] | [New] | [Confirmed on call] |
| [Name] | Role in deal | — | [Role] | [Identified as decision maker / influencer / end user] |

### Action Items Created
| Action | Owner | Due Date | Priority | Status |
|--------|-------|----------|----------|--------|
| [Action] | [You / Them] | [Date] | [High/Med/Low] | [Created in CRM] |

## Buying Signals & Risk Assessment

### Positive Signals
- [Signal 1]: [What they said + implication]
- [Signal 2]: [What they said + implication]

### Concerns or Red Flags
- [Concern 1]: [What they said + implication]
- [Risk mitigation]: [Your next step]

## Forecast Confidence
**Stage:** [Current stage]
**Confidence:** [High / Medium / Low]
**Rationale:** [What makes you confident or uncertain about this deal]
**Days to close:** [Expected, based on timeline mentioned]

## Next Steps
1. [Your action with date]
2. [Customer action with expected completion]
3. [Follow-up with [contact] on [date]]

---

## Example

**User:** "Sarah just finished a discovery call with Compass Financial. They want a demo. Update the CRM."

**Output:**

# CRM Sync Report
_Conversation: Compass Financial Discovery Call | Date: 2026-03-22 | Rep: Sarah Johnson_

## Conversation Summary
- **Date:** 2026-03-22, 10:00 AM
- **Participants:** Sarah Johnson (AE), Sarah Torres (CFO), Marcus Chen (VP Operations)
- **Duration:** 45 minutes
- **Account:** Compass Financial
- **Deal:** Expense Management Platform — Compass
- **Type:** Discovery

Sarah Torres (CFO) and Marcus Chen (VP Ops) discussed their current expense management process, pain points, and need for a solution. Key insight: They have $2M annual expense volume across 200 employees. Currently using three manual systems (Excel, Concur, email). Pain point: reconciliation takes 30 hours/month. Budget: "We have $100K annual approval for this type of tool." Timeline: "We want to evaluate solutions this quarter and decide by end of Q2."

## CRM Updates Applied

### Deal/Opportunity
| Field | Old Value | New Value | Reason |
|-------|-----------|-----------|--------|
| Stage | Qualification | Demo Scheduled | Call showed explicit interest and fit. Ready for demo. |
| Close date | — | 2026-05-30 | Sarah Torres said "decide by end of Q2." Mid-May would give them 2 weeks to negotiate/approve. |
| Next step | Schedule discovery call | Schedule demo (week of 3/28) | They asked "When can you show us how it works?" |
| Notes | — | Initial discovery: 200 employees, $2M annual spend, currently using Excel + Concur + email. Pain: reconciliation = 30 hrs/month. Budget: "We have $100K annual approved." Stakeholders: CFO (Sarah Torres, decision maker) and VP Ops (Marcus Chen, influencer). They want to evaluate 2–3 vendors. No stated timeline yet; implied is Q2 close. | Conversation summary for deal history. |

### Contact Updates
| Contact | Field | Old | New | Notes |
|---------|-------|-----|-----|-------|
| Sarah Torres | Title | CFO | CFO | Confirmed |
| Sarah Torres | Phone | — | (415) 555-0123 | Got from call |
| Sarah Torres | Role in deal | — | Decision Maker | CFO making final call; budget authority |
| Marcus Chen | Name | — | Marcus Chen | New contact discovered |
| Marcus Chen | Title | — | VP Operations | Ops person driving process |
| Marcus Chen | Email | — | m.chen@compassfin.com | Got from call |
| Marcus Chen | Role in deal | — | Influencer | Using system daily; important voice in vendor selection |

### Action Items Created
| Action | Owner | Due Date | Priority | Status |
|--------|-------|----------|----------|--------|
| Send demo logistics (date/time/Zoom link) to Sarah T. and Marcus C. | Sarah Johnson | 2026-03-24 | High | Created in HubSpot |
| Demo call: Show expense workflow, ROI calculator, reconciliation automation | Sarah Johnson | 2026-03-28 | High | Scheduled |
| Follow up with Sarah T. on competitive evaluation (ask who else they're looking at) | Sarah Johnson | 2026-03-28 (after demo) | Medium | Task created |
| Prepare ROI case study showing "$2M spend × 25% time savings" = $15K annual time value | Sarah Johnson | 2026-03-26 | High | Prep for demo |

## Buying Signals & Risk Assessment

### Positive Signals
- **Explicit need + quantified pain:** $2M expense volume, 30 hours/month on reconciliation = strong ROI case
- **Budget confirmed:** "We have $100K approved" — within range; budget exists
- **Multi-stakeholder engagement:** Both CFO and VP Ops on call = broader buy-in
- **Active evaluation timeline:** "Evaluate this quarter, decide by end of Q2" = urgent, not exploratory
- **Clear problem statement:** Using three tools that don't integrate = problem is real and painful

### Concerns or Red Flags
- **Multiple vendor evaluation:** They mentioned "evaluate 2–3 vendors" — competitive situation. Need to differentiate.
- **Budget at upper range:** $100K is our high-end Starter+Professional package. Little room for upsell in Year 1.
- **Implementation complexity not discussed:** They have $2M spend across systems. Integration/migration might be concern. Flag in demo.

## Forecast Confidence
**Stage:** Demo Scheduled
**Confidence:** **High (85%)**
**Rationale:** Explicit need (quantified pain), budget confirmed, multi-stakeholder engagement, urgent timeline (Q2 decision). Two red flags: competitive evaluation and implementation complexity. But odds favor us if demo is strong.
**Days to close:** ~70 days (demo 3/28, eval 1–2 weeks, proposal 4/15, negotiation 2 weeks, close by 5/30)

## Next Steps
1. **Sarah (by 3/24):** Send demo agenda and Zoom link to Sarah T. and Marcus C. Mention: "We'll show how Compass Finance can cut reconciliation time in half and give you real-time visibility into $2M spend."
2. **Sarah (3/26):** Prepare ROI case study: "Compass Financial: From 30 hrs/month to 15 hrs/month reconciliation = $15K annual time savings"
3. **Sarah (3/28):** Demo call. Goals: (1) Show expense workflow and reconciliation automation, (2) Show integration with their existing systems, (3) Get agreement to move to proposal if demo is positive, (4) Understand approval process (finance committee? CEO sign-off?)
4. **Sarah (after demo):** Follow up on competitive landscape: "I noticed you're evaluating a few vendors. Happy to explain how we differ from [incumbent they mentioned]. What's your top priority in a solution?"
5. **Sarah (4/1):** If demo went well, send proposal draft by 4/5. If any concerns, schedule 30-min follow-up.

---

## Edge Cases

- **Call has multiple deals mentioned:** Extract separately for each deal. Sync each to its own CRM record.
- **New contact mentioned for first time:** Create contact record in CRM with name, title, company, email. Link to account.
- **Customer said something off-record:** Use your judgment. If it's strategic (budget, timeline, competitive intel), include it with attribution ("Sarah mentioned off-call..."). If personal/sensitive, leave it out.
- **Deal stage recommendation unclear:** Ask the user: "Based on this call, do you think they're ready for demo (our next step)?" Use their judgment + conversation data to recommend stage.
- **Customer mentioned budget but said "don't tell anyone":** Respect confidentiality. Log "Budget discussed" in notes, but don't put specific amount in a field others will see. Flag privately to the rep.
