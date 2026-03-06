---
name: "My Recent To-Dos"
description: "List all your recent to-dos and commitments from across your meetings and conversations — what you owe, what others owe you, and what's overdue. Trigger on: my todos, my to-dos, what do I need to do, my tasks, my action items, what's on my plate, my commitments, what did I promise, what's overdue."
dependencies: []
---

## Purpose

Give users a single, honest view of everything they've committed to across all their recent conversations and meetings. People make promises in meetings and forget them. This skill scans recent conversations, extracts every commitment the user made (and every commitment made to them), and presents a prioritized, trackable list — so nothing falls through the cracks.

## When to Use

- Start of day: "What do I need to do today?"
- End of week: "Did I miss anything this week?"
- Before a 1:1 with manager: "What have I committed to?"
- Feeling overwhelmed: "What's actually on my plate right now?"
- Accountability check: "What are people waiting on me for?"

## Instructions

### 1. Determine the scope

Ask or infer:
- **Time range:** Today? This week? Last 7 days? Last 14 days? Since last Monday?
- **Source:** All meetings? Meetings with a specific person or team? A specific project?
- **Perspective:** Just my to-dos? Or also things others owe me?

Default to **last 7 days, all meetings, both perspectives** unless the user specifies otherwise.

### 2. Scan conversations for commitments

Search the user's recent meetings and conversations in Harmony. Look for commitment language:

**Things the user committed to:**
- "I'll..."
- "I can take that"
- "Let me..."
- "I'll send / share / schedule / follow up / loop in / check on..."
- "Action on me to..."
- "By [date] I'll have..."
- Anything assigned to them in the meeting's action items

**Things others committed to the user:**
- "[Name] will..."
- "I'll get that to you by..."
- "We'll send over..."
- Anything where someone else took an action item that the user is waiting on

**Implicit commitments:**
- Questions asked to the user that require a follow-up ("Can you look into...?")
- Requests made in passing that the user acknowledged
- "Let's discuss offline" — who initiated, who should follow up?

### 3. Deduplicate and contextualize

- Merge duplicates (same task mentioned in multiple meetings)
- Add context: which meeting, who asked, when it was due
- Check against Harmony's existing task/action item tracking — some may already be tracked

### 4. Assess status and priority

For each item, determine:

**Status:**
- **Overdue** — Deadline has passed, no evidence it was completed
- **Due soon** — Deadline is within 2 days
- **Open** — No deadline but still pending
- **Likely done** — Evidence in later conversations that it was completed (mentioned as done, sent, etc.)
- **Unclear** — Can't determine from conversation data alone

**Priority (inferred from context):**
- **High** — Promised to a customer, executive, or with a hard deadline
- **Medium** — Promised to a colleague or team, soft deadline
- **Low** — Nice-to-have, no deadline, internal only

### 5. Present the list

Organize for quick action: overdue first, then due soon, then open. Separate "my commitments" from "waiting on others."

## Output Format

```markdown
# Your To-Dos — [Date Range]
_Scanned [X] meetings from [start] to [end]_

## ⚠️ Overdue
| # | Task | Promised To | Meeting | Due | Priority |
|---|------|------------|---------|-----|----------|
| 1 | [task] | [person] | [meeting name, date] | [date] | High |

## 📅 Due Soon
| # | Task | Promised To | Meeting | Due | Priority |
|---|------|------------|---------|-----|----------|
| 1 | [task] | [person] | [meeting name, date] | [date/timeframe] | [H/M/L] |

## 📋 Open
| # | Task | Promised To | Meeting | Due | Priority |
|---|------|------------|---------|-----|----------|
| 1 | [task] | [person] | [meeting name, date] | [none set] | [H/M/L] |

## ⏳ Waiting on Others
| # | Task | Who Owes You | Meeting | Due | Status |
|---|------|-------------|---------|-----|--------|
| 1 | [task] | [person] | [meeting name, date] | [date] | [status] |

## ✅ Likely Done
| # | Task | Evidence |
|---|------|---------|
| 1 | [task] | [how we know — mentioned in later meeting, email sent, etc.] |

## Summary
- **Total open items:** [count]
- **Overdue:** [count]
- **Waiting on others:** [count]
- **Biggest risk:** [the most important overdue or high-priority item]

---
_Want me to create tasks for these items or send a nudge for items others owe you?_
```

## Example

**User:** "What are my to-dos from this week?"

**Output:**

```markdown
# Your To-Dos — This Week
_Scanned 8 meetings from Mon Feb 28 to Thu Mar 5, 2026_

## ⚠️ Overdue
| # | Task | Promised To | Meeting | Due | Priority |
|---|------|------------|---------|-----|----------|
| 1 | Send SSO roadmap doc to Acme | Sarah Chen (Acme) | Acme Demo, Feb 19 | Feb 21 | 🔴 High |
| 2 | Share Q1 metrics report with leadership | David Liu (VP Product) | Product Sync, Mar 3 | Mar 4 | 🔴 High |

## 📅 Due Soon
| # | Task | Promised To | Meeting | Due | Priority |
|---|------|------------|---------|-----|----------|
| 1 | Schedule technical deep-dive with Raj (Acme) | Sarah Chen | Acme Demo, Feb 19 | "By end of this week" | High |
| 2 | Review and approve design mocks for settings page | Sara (Design) | Sprint Planning, Mar 3 | Mar 7 (Friday) | Medium |

## 📋 Open
| # | Task | Promised To | Meeting | Due | Priority |
|---|------|------------|---------|-----|----------|
| 1 | Write up annual pricing options for Acme | Tom (Sales) | Acme Demo, Feb 19 | No deadline set | Medium |
| 2 | Loop in Priya on SSO timeline feasibility | Internal | Acme Demo, Feb 19 | No deadline set | Medium |
| 3 | Draft onboarding email sequence for new trial users | Nina (CS) | CS Sync, Mar 4 | No deadline set | Low |

## ⏳ Waiting on Others
| # | Task | Who Owes You | Meeting | Due | Status |
|---|------|-------------|---------|-----|--------|
| 1 | Infosec review requirements from Acme | James Park (Acme) | Acme Demo, Feb 19 | No date set | No response yet |
| 2 | Updated user research findings | Jake (Research) | Product Sync, Mar 3 | Mar 5 | Due today |
| 3 | Budget approval for analytics tool | Rachel (Finance) | 1:1 with Rachel, Mar 2 | Mar 7 | Pending |

## ✅ Likely Done
| # | Task | Evidence |
|---|------|---------|
| 1 | Set up Acme trial account (5 seats) | Mentioned as active in CS Sync, Mar 4 |
| 2 | Send API docs to Acme | Maria confirmed sent in Slack, referenced in CS Sync |

## Summary
- **Total open items:** 7
- **Overdue:** 2 (both high priority — SSO doc and Q1 metrics)
- **Waiting on others:** 3
- **Biggest risk:** The SSO roadmap doc for Acme is 12 days overdue. Sarah has a follow-up call today — this needs to go out before that call.

---
_Want me to create tasks for these items or draft a nudge message for the items you're waiting on?_
```

## Edge Cases

- **No meetings in the time range:** Tell the user — "No meetings found in the last 7 days. Want me to look further back?" Offer to check 14 or 30 days.
- **User has dozens of open items:** Group by project or stakeholder. Highlight the top 5 most urgent. Offer to filter by priority or person.
- **Commitment was vague ("I'll look into it"):** Include it but mark as "Unclear scope — may need to clarify with [person] what they expect."
- **User asks "what do I owe [specific person]?":** Filter the list to only show commitments made to that person. Useful before a 1:1 or customer call.
- **Items from conversations where the user wasn't present:** Only include items explicitly assigned to the user. Don't infer ownership from mentions alone.
- **User wants to export as tasks:** Offer to create tasks in Harmony's workspace, or format as a simple checklist they can paste into their tool of choice.
