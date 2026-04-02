---
name: "Prep Next Meeting"
description: "Prepare a brief for an upcoming meeting — attendee history, past decisions, open action items, unresolved topics, and suggested agenda — so you walk in fully prepared. Trigger on: prep me for my meeting, meeting prep, prepare for my call, brief me before my meeting, get ready for my meeting, what should I know before my call, meeting context."
dependencies: []
author: "Harmony"
version: "1.0.0"
icon: "sparkles"
cover: ""
screenshots: []
category: "Communication"
---

## Purpose

Make sure you never walk into a meeting cold. This skill pulls together everything relevant from past conversations — what was discussed, what was decided, what's still open, and what each attendee cares about — into a single prep brief you can scan in 2 minutes. If a Google Calendar event exists, it uses the attendees, title, and description to personalize the brief automatically.

## When to Use

- Before any meeting where you need context from past conversations
- When meeting with someone you haven't spoken to in a while
- Before a customer call where you need to remember what was promised
- Before a recurring meeting (weekly sync, 1:1) to pick up where you left off
- When stepping into a meeting for a colleague and need their conversation history

## Instructions

### 1. Identify the meeting

Determine which meeting the user is preparing for:

- **Specific meeting:** "Prep me for my 2pm call with Sarah from Acme"
- **Next meeting:** "Prep me for my next meeting" → Check Google Calendar for the next upcoming event
- **Recurring meeting:** "Prep me for my weekly sync with the product team"
- **Person-based:** "I'm meeting with James Park tomorrow — what should I know?"

Extract from the calendar event (if available):
- Meeting title and description
- Attendees (names and emails)
- Scheduled time and duration
- Any agenda or links in the description

### 2. Gather context from past interactions

For each attendee (or the meeting topic), search Harmony for:

**Recent meetings with these people:**
- When did you last meet? What was discussed?
- What decisions were made?
- What action items were assigned — and are any still open?

**Open threads:**
- Unresolved questions from previous conversations
- Topics that were "parked" or deferred
- Promises made that haven't been fulfilled yet (by either side)

**Relationship context:**
- What does this person care about? What are their priorities?
- What communication style do they prefer? (Direct, data-driven, big-picture, detail-oriented)
- Any sensitivities or topics to be careful with?

**For customer/external meetings — also gather:**
- Deal stage and pipeline status (if available)
- Products/features they use or are evaluating
- Recent support tickets or issues
- Competitor mentions from past calls
- Their stated goals or success criteria

### 3. Identify what's changed since last meeting

Look for new information since the last interaction:
- Did any action items get completed or missed?
- Did anything relevant happen internally (product launch, pricing change, team change)?
- Did the customer's situation change (funding round, leadership change, public announcement)?
- Are there new insights from other conversations that are relevant?

### 4. Suggest an agenda

Based on open items, past context, and the meeting's stated purpose, propose:
- **Must-cover items:** Open action items, unresolved questions, decisions needed
- **Should-discuss items:** Updates since last meeting, new context
- **Nice-to-have items:** Relationship building, forward-looking topics
- **Watch-out items:** Potential sensitive topics, known disagreements, things to avoid

### 5. Prepare talking points

For the most important agenda items, provide:
- **Context:** What happened before
- **Your position:** What you think / recommend (if applicable)
- **Questions to ask:** What you need to learn from this meeting
- **Potential objections:** What pushback to expect and how to handle it

## Output Format

```markdown
# Meeting Prep: [Meeting Title or Attendees]
_Scheduled: [date, time, duration] · [Location/Link]_

## Quick Context
[2-3 sentences: who you're meeting, what it's about, and the one thing you most need to walk in knowing]

## Attendees
| Name | Role | Last Interaction | What They Care About |
|------|------|-----------------|---------------------|
| [name] | [title, company] | [date, topic] | [priorities/style] |

## Since Last Meeting
- [What happened since you last spoke — completed items, changes, new info]
- [Relevant internal updates they should know about]
- [External changes in their world]

## Open Items
| # | Item | Origin | Owner | Status |
|---|------|--------|-------|--------|
| 1 | [open action item or unresolved question] | [which meeting] | [who] | [status] |
| 2 | [item] | [origin] | [who] | [status] |

## Suggested Agenda
### Must Cover
1. [Topic] — [Why: open action item, decision needed, etc.]
2. [Topic] — [Why]

### Should Discuss
3. [Topic] — [Why]

### Watch Out For
- [Sensitive topic or potential friction point — and how to handle it]

## Talking Points
### [Key Topic 1]
- **Context:** [What happened before]
- **Your position:** [What to propose or recommend]
- **Questions to ask:** [What you need to learn]
- **If they push back:** [How to respond]

### [Key Topic 2]
- **Context:** [What happened before]
- **Questions to ask:** [What you need to learn]

## Key Quotes from Past Conversations
> "[Something they said that's relevant to today's meeting]" — [Name, date]
> "[Something they said]" — [Name, date]
```

## Example

**User:** "Prep me for my 3pm call with Sarah Chen from Acme."

**Output:**

```markdown
# Meeting Prep: Acme Corp — Follow-Up Call
_Scheduled: March 5, 2026, 3:00 PM · 30 min · Zoom_

## Quick Context
This is your second call with Sarah Chen (VP Engineering, Acme). Last time was a product demo 2 weeks ago — she was very interested in real-time alerting but the deal is blocked on SSO. You promised to send the SSO roadmap doc. Check: did Maria send it?

## Attendees
| Name | Role | Last Interaction | What They Care About |
|------|------|-----------------|---------------------|
| Sarah Chen | VP Engineering, Acme | Demo call, Feb 19 | Real-time alerting, API integration, team rollout. Data-driven, asks detailed questions. |
| James Park | CTO, Acme | Demo call, Feb 19 | SSO and security compliance. Decision-maker. Direct style — wants bottom-line answers. |

## Since Last Meeting
- **SSO roadmap doc:** Maria was supposed to send by Feb 21. ⚠️ Confirm this was sent — if not, address immediately.
- **Trial account:** Was set up on Feb 20. Acme has had 5 seats active for 2 weeks.
- **API docs & sandbox:** Maria sent on Feb 22. No follow-up questions from Acme.
- **Their side:** Acme announced a $25M Series C last week. May affect timeline and budget positively.

## Open Items
| # | Item | Origin | Owner | Status |
|---|------|--------|-------|--------|
| 1 | SSO roadmap & timeline | Demo call, Feb 19 | Maria (us) | ⚠️ Verify sent |
| 2 | Technical deep-dive with Raj (platform eng) | Demo call, Feb 19 | Alex (us) | Not yet scheduled |
| 3 | Annual pricing options | Demo call, Feb 19 | Alex (us) | Not yet sent |
| 4 | Infosec review requirements | Demo call, Feb 19 | James (Acme) | Waiting on them |

## Suggested Agenda
### Must Cover
1. **Trial feedback** — They've had the product for 2 weeks. How's it going? Any issues?
2. **SSO timeline** — This is the blocker. Give a clear answer or the deal stalls.
3. **Technical deep-dive scheduling** — Still not booked. Get a date on the calendar today.

### Should Discuss
4. **Annual pricing** — They asked about it. Come with a number.
5. **Full rollout plan** — If SSO timeline works, what does deployment to 40 engineers look like?

### Watch Out For
- If SSO roadmap doc wasn't sent, own the miss immediately. Don't make excuses — propose a solution.
- James may bring up the infosec review. Be ready with: what you can share now, what needs legal review, and timeline for a security questionnaire response.

## Talking Points
### Trial Feedback
- **Context:** 5 seats active since Feb 20. You don't have usage data in front of you — ask.
- **Questions to ask:** "What has the team's experience been? Any friction in setup? Which features are getting the most use?"
- **If they had issues:** Acknowledge, ask for specifics, promise to resolve before full rollout.

### SSO Timeline
- **Context:** James was clear: no SSO = no company-wide rollout. They're on Okta.
- **Your position:** Share confirmed timeline. If Q2, say "targeting end of May" not "sometime Q2."
- **If they push back:** Offer a workaround — can they use SAML in the interim? Can we prioritize Okta specifically?
- **If they ask for a commitment:** Don't promise what you can't deliver. "Our engineering team has this as a Q2 priority. I'll get you a specific milestone date by [date]."

## Key Quotes from Past Conversations
> "This is exactly what we've been trying to build internally for 6 months." — Sarah Chen, Feb 19
> "We can trial with 5 people, but company policy won't let us roll out to the full team without SSO." — James Park, Feb 19
> "We spend 8 hours a week just figuring out which API version broke what." — Sarah Chen, Feb 19
```

## Edge Cases

- **No past conversations with these attendees:** Build the brief from the calendar event context (title, description, attendees' roles). Recommend research questions to ask in the meeting. Suggest the user check LinkedIn or the company website for context.
- **Recurring meeting with same team (weekly sync):** Focus on what changed since last week. Pull action items from last meeting and check status. Keep the brief short — the team doesn't need relationship context, they need "what's open."
- **User is stepping in for a colleague:** Summarize the full relationship history, not just the last meeting. Flag the handoff: "This is [colleague]'s relationship — here's what you need to know to avoid awkward gaps."
- **Meeting is with someone internal (1:1 with manager/report):** Focus on: last 1:1 topics, open action items, any feedback to give or receive, career development threads. Keep personal/sensitive items brief.
- **No calendar event found:** Ask the user who they're meeting with and what it's about. Build the brief from conversation history with those people.
- **Meeting is in 5 minutes (urgent prep):** Skip the full brief. Produce a "speed prep" — 5 bullet points: who, last interaction, open items, one thing to address, one question to ask.
