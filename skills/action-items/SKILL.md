---
name: "Extract Action Items"
description: "Extract every action item from your last meeting — who owns it, what's the deadline, and what's the context. Trigger on: action items, what came out of the meeting, meeting actions, follow-ups from the call, what did we agree to do, meeting takeaways, tasks from the meeting, who's doing what, meeting outcomes."
dependencies: []
author: "Harmony"
version: "1.0.0"
icon: "sparkles"
cover: ""
screenshots: []
category: "Productivity"
---

## Purpose

Pull every action item from a specific meeting and present them in a clear, assignable format. Unlike a general to-do list that spans multiple meetings, this skill focuses on one meeting and extracts everything that needs to happen next — who owns each item, when it's due, and the context behind it. The goal is to turn a messy conversation into a clean list that the team can execute against immediately.

## When to Use

- Right after a meeting ends: "What are the action items from that call?"
- Sending a meeting follow-up email: "Pull the action items so I can share them"
- Updating a project tracker: "What tasks should I create from this meeting?"
- Catching up on a meeting you missed: "What was decided and who's doing what?"
- Sprint or planning meeting wrap-up: "List everything we committed to in planning"

## Instructions

### 1. Identify the meeting

Ask or infer which meeting the user wants action items from:

- **Most recent meeting:** Default if the user says "the meeting" or "that call"
- **Specific meeting:** Match by name, attendee, or date if the user specifies (e.g., "the Acme call on Tuesday")
- **Multiple meetings:** If the user asks for action items from several meetings, process each separately and label clearly

If no meeting can be identified, ask: "Which meeting do you want action items from? I can see your recent meetings — want me to list them?"

### 2. Extract action items from the conversation

Scan the meeting transcript for commitment and task language:

**Explicit action items:**
- "I'll..." / "I'm going to..." / "Let me..."
- "[Name] will..." / "[Name] can take that"
- "Action item: ..." / "Next step: ..."
- "Can you...?" followed by agreement
- "We need to..." with someone taking ownership
- "By [date], we should have..."

**Implicit action items:**
- Questions that need answers after the meeting ("We should find out if...")
- Requests acknowledged but not fully addressed ("Let's take that offline")
- Decisions that require follow-up implementation ("Ok, so we'll go with option B" — someone needs to implement option B)
- Promises to share information ("I'll send that over" / "Let me pull those numbers")

**Not action items (exclude):**
- General discussion points without ownership
- Opinions or preferences stated without follow-up commitment
- Background information or status updates
- Items explicitly deferred to a future discussion ("Let's revisit in Q3")

### 3. Determine ownership

For each action item, identify the owner:

- **Named owner:** Someone explicitly took it or was assigned
- **Implied owner:** Based on role, expertise, or context ("the design team should..." = design lead)
- **Unassigned:** No clear owner — flag this, it's the #1 reason action items get dropped
- **Shared:** Multiple people need to collaborate — identify the lead and contributors

If the user is the owner, mark clearly. If someone else is the owner, note their name and role.

### 4. Assess deadlines and priority

**Deadlines:**
- **Explicit:** "By Friday" / "Before the next sprint" / "End of month"
- **Implicit:** Urgency language ("ASAP", "this is blocking us", "before the launch")
- **None stated:** Mark as "No deadline set" — recommend the user assign one

**Priority (inferred from context):**
- 🔴 **High:** Blocking other work, customer-facing, executive request, or hard deadline
- 🟡 **Medium:** Important but not blocking, team commitment, soft deadline
- 🟢 **Low:** Nice-to-have, internal cleanup, no deadline pressure

### 5. Add context

For each action item, include enough context that someone reading the list can understand what's needed without re-watching the meeting:
- What triggered this item (what problem or decision led to it)
- Any constraints or requirements mentioned
- Related items or dependencies ("this depends on Jake finishing the API review first")

### 6. Present the action items

Organize for immediate use — the team should be able to copy this into their project tracker.

## Output Format

```markdown
# Action Items — [Meeting Name]
_[Date] · [Duration] · Attendees: [names]_

## Action Items ([count] total)

### 🔴 High Priority
| # | Action Item | Owner | Deadline | Context |
|---|------------|-------|----------|---------|
| 1 | [task] | [name] | [date/timeframe] | [brief context] |

### 🟡 Medium Priority
| # | Action Item | Owner | Deadline | Context |
|---|------------|-------|----------|---------|
| 1 | [task] | [name] | [date/timeframe] | [brief context] |

### 🟢 Low Priority
| # | Action Item | Owner | Deadline | Context |
|---|------------|-------|----------|---------|
| 1 | [task] | [name] | [date/timeframe] | [brief context] |

### ⚠️ Unassigned (Needs Owner)
| # | Action Item | Suggested Owner | Why Unassigned | Context |
|---|------------|----------------|----------------|---------|
| 1 | [task] | [suggestion] | [reason] | [brief context] |

## Decisions Made
_Key decisions from this meeting that provide context for the action items:_
1. [decision] — [brief rationale]

## Dependencies
_Action items that are linked or sequential:_
- [Item #X] depends on [Item #Y] — [why]

## Summary
- **Total action items:** [count]
- **Your items:** [count] ([list item numbers])
- **Unassigned (needs follow-up):** [count]
- **Items with hard deadlines:** [count]

---
_Want me to create tasks for these in Linear, draft a follow-up email, or check which items are already tracked?_
```

## Example

**User:** "What are the action items from the sprint planning meeting?"

**Output:**

```markdown
# Action Items — Sprint 14 Planning
_Tuesday, Mar 3, 2026 · 55 min · Attendees: Alex (PM), Priya (Eng Lead), Jake (Sr. Engineer), Sara (Design), Maria (QA)_

## Action Items (9 total)

### 🔴 High Priority
| # | Action Item | Owner | Deadline | Context |
|---|------------|-------|----------|---------|
| 1 | Fix payment processing timeout bug (PROD-1247) | Jake | Wed Mar 4 | 3 enterprise customers hitting this daily; escalated by CS team. Jake confirmed he can reproduce and estimates a 1-day fix. |
| 2 | Complete security review for SSO feature | Priya | Thu Mar 5 | Blocking Acme deal ($180K ARR). Legal requires sign-off before launch. Priya said she's 80% done — needs to validate token rotation. |
| 3 | Ship onboarding redesign to staging | Sara + Jake | Fri Mar 6 | Sara's designs are final. Jake needs to implement the 3 updated screens. Must be on staging by Friday for stakeholder review Monday. |

### 🟡 Medium Priority
| # | Action Item | Owner | Deadline | Context |
|---|------------|-------|----------|---------|
| 4 | Write API documentation for new webhook endpoints | Jake | End of sprint (Mar 13) | Developer customers keep asking for webhook docs. Jake wrote the endpoints and knows the edge cases best. |
| 5 | Set up A/B test for new pricing page | Alex | Next Monday (Mar 9) | Agreed on testing 3 pricing tiers vs. current 2-tier model. Alex needs to define variants and success metrics, then hand off to eng. |
| 6 | Review and merge Sara's component library PR | Priya | Wed Mar 4 | PR has been open for 5 days. Sara needs this merged to unblock the dashboard redesign work scheduled for next sprint. |

### 🟢 Low Priority
| # | Action Item | Owner | Deadline | Context |
|---|------------|-------|----------|---------|
| 7 | Clean up unused feature flags from Q4 | Maria | End of sprint (Mar 13) | Tech debt item. 14 stale flags identified. Maria volunteered since she's familiar with the test coverage implications. |
| 8 | Draft RFC for event-driven architecture migration | Priya | No deadline set | Long-term initiative. Priya wants to propose the approach before Q2 planning. Not sprint-committed, background work. |

### ⚠️ Unassigned (Needs Owner)
| # | Action Item | Suggested Owner | Why Unassigned | Context |
|---|------------|----------------|----------------|---------|
| 9 | Investigate Sentry error spike from last weekend | Jake or Maria | Team discussed but nobody explicitly took it | Error rate was 3x normal Saturday. Not customer-facing but could indicate a deeper issue. Needs someone to look at the logs. |

## Decisions Made
_Key decisions from this meeting that provide context for the action items:_
1. **SSO launches to Acme first as private beta** — not GA until security review + 2 weeks of monitoring
2. **Pricing A/B test runs for 2 weeks minimum** — agreed not to make a call before statistically significant results
3. **Onboarding redesign is sprint-committed** — team agreed this is the top priority behind the payment bug

## Dependencies
_Action items that are linked or sequential:_
- Item #3 (onboarding to staging) depends on Item #6 (merge Sara's PR) — Sara's component library is needed for the new screens
- Item #5 (A/B test setup) depends on Alex defining variants before eng can implement

## Summary
- **Total action items:** 9
- **Your items (Alex):** 1 (Item #5 — pricing A/B test)
- **Unassigned (needs follow-up):** 1 (Item #9 — Sentry investigation)
- **Items with hard deadlines:** 4 (Items #1–3, #6)

---
_Want me to create Linear tickets for these, draft a follow-up email to the team, or check which items are already tracked?_
```

## Edge Cases

- **Meeting had no clear action items:** It happens — some meetings are purely informational or brainstorming. Say so honestly: "This meeting was primarily a discussion. I found [0/few] explicit action items. Here's what was discussed that might lead to future actions: [list topics]." Offer to help the user define action items from the discussion.
- **Action items are vague ("look into it", "think about it"):** Include them but flag: "⚠️ Vague — may need to clarify with [person] what specific output or timeline is expected."
- **Same person assigned too many items:** Note it in the summary: "[Name] has [X] action items from this meeting. Consider redistributing or prioritizing."
- **Meeting was chaotic / overlapping conversations:** Do your best to extract items. Flag low-confidence items: "This may be an action item — it was discussed but ownership wasn't clearly established."
- **User wasn't in the meeting:** Still extract all action items. Highlight which ones involve the user (if any were assigned to them in absentia) and which are informational.
- **User wants to combine action items from multiple meetings:** Process each meeting separately, then merge into a unified list. Flag duplicates or conflicts ("In Monday's meeting Jake said he'd handle the API docs, but in Wednesday's meeting it was reassigned to you").
