---
name: "Meeting Topic Suggester"
description: "Analyzes conversation history and action items to recommend prioritized agenda topics for upcoming meetings — flagging blockers, overdue commitments, and deferred discussions. Trigger on: what should we discuss, meeting agenda, topic suggestions, what did we leave unresolved, what topics are we missing, meeting prep."
dependencies: []
---

## Purpose

The Meeting Topic Suggester ensures you enter every meeting fully prepared and never drop an unresolved thread. It analyzes your meeting history with specific attendees to identify topics that must be discussed, should be discussed, or could be discussed—ranked by business impact and urgency.

## When to Use

- **Before recurring meetings** (weekly syncs, monthly reviews, quarterly planning)
- **Before one-off meetings** with key stakeholders where context matters
- **When preparing for critical discussions** where decisions or commitments are needed
- **When a meeting series feels repetitive** or you sense something's been deferred

## Instructions

1. **Identify the upcoming meeting**: Note the attendees, meeting type (recurring vs. one-off), title/purpose, and scheduled duration.

2. **Retrieve recent meeting history**: Extract the last 3–5 meetings with the same attendees (or core attendees if the group varies).

3. **Scan for unresolved items**: Look for:
   - Open questions or decisions that remain pending
   - Action items that aren't yet marked complete
   - Commitments with due dates (especially overdue ones)
   - Discussions explicitly marked "to revisit" or "parking lot"

4. **Check for new context**: Identify information that emerged since the last meeting relevant to this group:
   - Deal progress, customer updates, or metric changes
   - Bug fixes, feature launches, or product updates
   - Policy changes, headcount changes, or organizational updates
   - External events that affect priorities

5. **Categorize topics by priority**:
   - **Must-Discuss**: Blockers, overdue commitments, decisions needed to move forward
   - **Should-Discuss**: Key updates, pending decisions, items referenced multiple times
   - **Could-Discuss**: Ideas, long-term topics, exploration items

6. **Add context and rationale**: For each topic, include:
   - Why it matters (blocker, follow-up, decision needed, update)
   - Reference to previous meeting(s) where it was mentioned or deferred
   - Suggested time allocation (minutes)
   - Key questions to answer or decisions to make

7. **Flag deferred discussions**: Note if a topic has been pushed multiple meetings in a row, and recommend addressing it.

8. **Surface sensitive topics**: If a topic involves interpersonal issues, performance, or layoffs, flag it as needing careful framing.

9. **Suggest total agenda**: Ensure the total suggested time doesn't exceed the meeting duration; highlight trade-offs if needed.

## Output Format

```markdown
# Agenda for [Meeting Name] — [Date]
**Attendees**: [Names]  
**Meeting Type**: [Recurring / One-off]  
**Suggested Duration**: [X minutes]  
**Based on**: [Number] previous meetings analyzed

---

## MUST-DISCUSS (High Priority)
### Topic Name
- **Why**: [Reason—blocker, overdue, decision needed]
- **Context**: [Reference to previous meeting(s) or event]
- **Suggested Time**: X min
- **Key Questions**: 
  - [Question 1]
  - [Question 2]

---

## SHOULD-DISCUSS (Medium Priority)
### Topic Name
- **Why**: [Reason—update, pending decision, multi-meeting reference]
- **Context**: [Reference to previous meeting(s) or event]
- **Suggested Time**: X min
- **Key Questions**: 
  - [Question 1]

---

## COULD-DISCUSS (Lower Priority / If Time)
### Topic Name
- **Why**: [Reason—idea, exploration, long-term planning]
- **Context**: [Background]
- **Suggested Time**: X min

---

## Flags & Notes
- **Deferred Items**: [List any topics pushed multiple meetings; recommend addressing]
- **Sensitive Topics**: [Flag if any topics involve interpersonal issues, performance, or major changes]
- **Total Suggested Time**: [X min] (vs. [scheduled duration])
- **Trade-offs**: [If overbooked: "Recommend moving [Topic X] to next meeting or scheduling 15 min extension"]
```

## Example

**Input:**
- Upcoming meeting: Weekly product sync with Sarah Chen (PM), Marcus Rodriguez (Eng Lead), Nina Patel (Design), 60 min, Thursday 10 AM
- Last 3 meetings analyzed (weekly syncs from past 3 weeks)

**Context from previous meetings:**
- **Week 1**: Marcus mentioned the mobile payment integration had a critical bug. Marked as "investigating." No resolution yet. Also: Sarah committed to finalizing pricing for new feature by Week 2; not yet done.
- **Week 2**: Nina presented 3 design options for the checkout flow. Sarah said "we need engineering input, let's table until next week." Marcus did not attend (sick day). No pricing decision.
- **Week 3**: Sarah mentioned customer feedback from Q1 reviews flagged checkout flow as confusing. Marcus is now back. No update on payment bug or design options.

**New context since Week 3:**
- Support team reported 2 new bug reports on checkout (both related to mobile payment flow)
- Pricing manager sent preliminary pricing matrix to Sarah (but not shared with group yet)
- Nina has 1 week left before design freeze for Q2 roadmap

---

**Output:**

```markdown
# Agenda for Weekly Product Sync — Thursday, March 13
**Attendees**: Sarah Chen (PM), Marcus Rodriguez (Eng Lead), Nina Patel (Design)  
**Meeting Type**: Recurring (weekly)  
**Suggested Duration**: 60 minutes  
**Based on**: 3 previous meetings analyzed

---

## MUST-DISCUSS (High Priority)

### Mobile Payment Integration Bug Resolution
- **Why**: Blocker to launch. Now compounded by 2 new customer-reported bugs.
- **Context**: Marcus identified critical bug in Week 1; status unknown. 2 new support tickets filed since Week 3.
- **Suggested Time**: 20 min
- **Key Questions**:
  - What is the current status and root cause?
  - What is the fix timeline? Does it block Q2 launch?
  - Can we hotfix and roll out to production, or is a deeper refactor needed?

### Checkout Flow Design Sign-Off
- **Why**: Design freeze deadline is 1 week away. Decision has been pending for 2 meetings.
- **Context**: Nina presented 3 options in Week 2. Marcus was absent. Customer feedback in Week 3 reinforced need for change.
- **Suggested Time**: 15 min
- **Key Questions**:
  - Marcus: Which design option is most feasible given the payment bug?
  - Do we address the payment bug before or after design changes?
  - Final decision: Which design do we move forward with?

---

## SHOULD-DISCUSS (Medium Priority)

### Pricing Strategy for New Feature
- **Why**: Update on pending decision. Sarah has preliminary matrix from Pricing; team needs alignment.
- **Context**: Sarah committed to finalizing pricing by Week 2; Week 3 update shows preliminary data available.
- **Suggested Time**: 10 min
- **Key Questions**:
  - Sarah: What are the top 2–3 pricing models under consideration?
  - Are there engineering or design constraints that affect pricing tiers?

### Q1 Customer Feedback Themes
- **Why**: Checkout confusion is now tied to 2 bug reports. Important signal for prioritization.
- **Context**: Sarah mentioned Q1 feedback in Week 3; now validated by support tickets.
- **Suggested Time**: 5 min
- **Key Questions**:
  - Beyond checkout, what other themes came up in Q1 reviews?
  - Should any of these be pulled into Q2 roadmap?

---

## COULD-DISCUSS (Lower Priority / If Time)

### Q2 Roadmap Status & Design Freeze Checkpoint
- **Why**: Context for future planning; low-pressure update.
- **Context**: Nina mentioned design freeze deadline approaching; team input helps with forward planning.
- **Suggested Time**: 5 min

---

## Flags & Notes

- **Deferred Items**: Checkout design sign-off has been pushed 2 weeks in a row. Recommend final decision this week given design freeze.
- **Sensitive Topics**: None flagged.
- **Total Suggested Time**: 55 min (vs. 60 min scheduled)
- **Trade-offs**: Slight buffer if discussions run long; all must-discuss and should-discuss items fit comfortably.
```

## Edge Cases

**First meeting with someone (no history)**
- No previous meetings to analyze. Instead, ask: What is the stated purpose/goal of this meeting? Recommend preparing a brief context document (e.g., "Here's what we've discussed so far" or "Here are the open items I'm aware of") to start the meeting. Flag this as a listening and relationship-building meeting rather than a decision meeting.

**Recurring meeting that's gotten stale**
- If the same topics repeat with no progress across 3+ meetings, flag as "This meeting needs a refresh." Recommend narrowing the scope, changing attendees, or pairing down to once-monthly instead of weekly. Example: A weekly standup where no blockers are ever raised; may not need to happen as frequently.

**Too many topics for the time slot**
- If suggested time exceeds meeting duration by >20%, clearly call out trade-offs. Recommend: (a) extending meeting by 15 min, (b) deferring could-discuss items to next week, or (c) scheduling a separate decision-making meeting to handle must-discuss items more thoroughly.

**Sensitive topics** (interpersonal conflict, performance issues, layoffs, etc.)
- If a topic touches on interpersonal tension or organizational change, flag it explicitly. Suggest: (a) addressing it in a separate 1-on-1 before the group meeting, (b) framing it carefully to avoid ambushing individuals, or (c) ensuring HR/leadership is looped in if appropriate.

**Attendee absence**
- If a key attendee (e.g., decision-maker) missed a recent meeting, note which topics need their input and were deferred as a result. Flag "Marcus was absent Week 2; needs to review Nina's design options before we can decide."

**External context unknown**
- If the skill detects a reference to external events (e.g., "customer called with urgent request") but doesn't have access to the full details, flag it as "Recommend Marcus bring latest customer context to the meeting."
