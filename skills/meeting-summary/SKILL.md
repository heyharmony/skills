---
name: "Meeting Summary"
description: "Generates a structured post-meeting summary — decisions, action items, key moments, and sentiment — from a Harmony transcript. Trigger on: meeting summary, recap, debrief, meeting notes, what did we decide, what happened in that meeting."
dependencies: []
---

## Purpose

Turns a raw Harmony transcript into a concise, actionable summary any stakeholder can scan in under 60 seconds. Decisions, owners, and next steps — all traced back to what was actually said. No more re-watching 45-minute calls.

## When to Use

- After any recorded meeting finishes in Harmony.
- When a teammate asks "what did I miss?" or "what were the action items?"
- Before a follow-up meeting to recap the previous session.
- When you need to share meeting outcomes with people who weren't on the call.

## Instructions

1. **Pull the data** — Retrieve the full transcript and Harmony's auto-generated Insights (topics, questions, action items) for the meeting.
2. **Process** — Extract decisions made, action items with owners and deadlines (if mentioned), key discussion points, open questions, and overall sentiment. For each decision and action item, include a brief quote or timestamp so readers can verify context.
3. **Format the output** — Structure as Markdown with tables for decisions and action items, bullet lists for discussion points and open questions, and a one-line sentiment read.
4. **Deliver** — Post to the linked Harmony Note for the meeting, or return in chat.

## Output Format

```markdown
### Meeting Summary — [Meeting Title], [Date]

**Attendees:** [List of participants]
**Duration:** [Length]

#### Decisions
| # | Decision | Proposed By | Context |
|---|----------|-------------|---------|
| 1 | [Decision text] | [Speaker] | "[Brief quote or timestamp]" |

#### Action Items
| # | Task | Owner | Due | Source |
|---|------|-------|-----|--------|
| 1 | [Task description] | [Name] | [Date or "TBD"] | "[Quote or timestamp]" |

#### Key Discussion Points
- **[Topic 1]** — [1–2 sentence summary with speaker attribution]
- **[Topic 2]** — [1–2 sentence summary with speaker attribution]

#### Open Questions
- [Question still unresolved, with who raised it]

#### Sentiment
[One-line read on the overall tone: aligned, tense, productive, etc.]
```

## Example

**Input:** Harmony transcript of a 30-minute sprint retrospective with 5 participants.

**Output:**

```markdown
### Meeting Summary — Sprint 14 Retro, 2026-03-04

**Attendees:** Maya, Ravi, Chen, Priya, Leo
**Duration:** 28 min

#### Decisions
| # | Decision | Proposed By | Context |
|---|----------|-------------|---------|
| 1 | Move to 2-week sprints starting next cycle | Ravi | "Two weeks gives us tighter feedback loops — I think we ship faster." (04:32) |
| 2 | Add a tech-debt ticket to every sprint | Chen | "We keep deferring this. Let's make it mandatory." (18:10) |

#### Action Items
| # | Task | Owner | Due | Source |
|---|------|-------|-----|--------|
| 1 | Draft updated sprint cadence proposal | Ravi | 2026-03-07 | (04:55) |
| 2 | Create tech-debt label in Linear | Chen | 2026-03-05 | (18:45) |
| 3 | Share retro summary with stakeholders | Maya | 2026-03-04 | (26:00) |

#### Key Discussion Points
- **Sprint velocity** — Leo noted velocity dropped 15% this sprint due to unplanned support work. Team agreed to ring-fence 20% capacity for interrupts.
- **QA bottleneck** — Priya flagged that PRs are sitting in review for 2+ days. Team will trial a daily review slot at 10am.

#### Open Questions
- Should we invite Product to retros? (raised by Maya, no consensus reached)

#### Sentiment
Constructive and energised. Team aligned on cadence change; mild tension around tech-debt backlog but resolved with a clear action.
```

## Edge Cases

- **Transcript under 5 minutes:** Produce a shorter "Quick Sync" format — skip the table structure and output a bullet list of takeaways.
- **No clear decisions or action items:** Explicitly state "No formal decisions were recorded" and surface the top 3 discussion topics instead.
- **Multiple languages in transcript:** Summarise in the primary language of the meeting (majority of spoken words). Note any segments in other languages.
- **Overlapping speakers / unclear attribution:** Mark the owner as "Unattributed" and flag for the user to confirm.
