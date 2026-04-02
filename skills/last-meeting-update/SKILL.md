---
name: "Brief Me on Last Meeting"
description: "Delivers a quick, conversational brief on what was discussed in your last meeting with a specific person, team, or client — decisions, open items, commitments, and a suggested opener for next time. Trigger on: last meeting with, update me on my call, what did we talk about, brief me before my meeting, what was decided."
dependencies: []
author: "Harmony"
version: "1.0.0"
icon: "sparkles"
cover: ""
screenshots: []
category: "Communication"
---

## Purpose
Deliver a conversational, human-readable summary of your most recent meeting with a specific person, team, or organization. Rather than rehashing formal meeting notes, this skill acts like a colleague giving you a quick rundown—highlighting decisions, open items, commitments, tone, and what to do next.

## When to Use
- You're about to contact someone and need a quick refresh on the last conversation
- A meeting happened while you were busy or distracted, and you need the key points
- You're preparing for a follow-up call or meeting
- You want to understand what was decided without reading through full notes
- You need to know if any commitments were supposed to be completed since the last meeting

## Instructions
1. Identify the specific contact, team, or organization mentioned in the request
2. Locate the most recent meeting with that contact in your conversation history or calendar
3. Extract the key discussion points, decisions, and action items from that meeting
4. Note the overall tone and energy of the conversation
5. Identify any time-sensitive items or commitments that were made
6. If applicable, check whether prior commitments have been fulfilled
7. Generate a suggested opener for the next conversation with this contact
8. Format the output as a natural, conversational brief

## Output Format
```
**Last Meeting with [Contact/Team]** — [Date]

**What We Talked About**
[Conversational 2-3 sentence summary of main topics]

**Key Decisions**
- [Decision 1]
- [Decision 2]
- [Decision 3 (if applicable)]

**What's Still Open**
- [Open item 1]
- [Open item 2]
- [Open item (if applicable)]

**Your Action Items**
- [Item 1] — Due: [date if mentioned]
- [Item 2] — Due: [date if mentioned]

**Their Action Items**
- [Item 1] — Due: [date if mentioned]
- [Item 2] — Due: [date if mentioned]

**Tone**
[One sentence about the meeting's energy: positive, tense, collaborative, etc. Include any notable emotions or dynamics]

**Watch Out For**
[Any time-sensitive items, concerns, or items that need attention before the next conversation]

**What to Say Next Time**
"[Suggested conversational opener for your next interaction—something that shows you remember the conversation and are following up on what matters to them]"
```

## Example

**User Request:** "Update me on my last meeting with the Acme team"

**Output:**

**Last Meeting with Acme Inc. — March 2, 2026**

**What We Talked About**
You had a product planning session with Sarah Chen (VP Product) and Marcus Rodriguez (Engineering Lead) from Acme. They're evaluating your platform for their Q2 marketing automation initiative, and there was a good discussion about integration timelines and pricing models.

**Key Decisions**
- Acme will proceed with a pilot program for 30 days starting March 15
- Sarah wants to focus the pilot on email campaign workflows first
- You'll provide custom onboarding for their team (3 hours of training included)
- Pricing was discussed at the enterprise tier—$8,500/month with a 20% discount for the first year

**What's Still Open**
- Security audit requirements (Marcus needs SOC 2 documentation—you said you'd send it)
- Data migration strategy for their existing campaign templates
- Who from Acme will be the primary technical contact for integration

**Your Action Items**
- Send SOC 2 compliance documentation to Marcus — Due: March 5
- Schedule the pilot kickoff call for March 15 — Due: March 8
- Prepare custom onboarding agenda for their team

**Their Action Items**
- Finalize the pilot terms and sign the agreement — Due: March 10
- Identify 3-5 team members for the pilot program — Due: March 12
- Complete the security questionnaire and return to you

**Tone**
The meeting was very positive and collaborative. Sarah and Marcus were impressed with the platform capabilities, though Marcus had some legitimate concerns about integration complexity that you addressed. Everyone seemed motivated to move forward.

**Watch Out For**
The SOC 2 documentation is urgent—Marcus emphasized they can't start the pilot without it. Also, Sarah mentioned budget approval cycles happen monthly, so getting the agreement signed before March 10 is critical.

**What to Say Next Time**
"Hi Sarah, thanks again for the great discussion last week. I've got the SOC 2 docs to Marcus—I wanted to check in on the signing timeline and make sure everything's on track for that March 15 kickoff. How's the team excitement level looking?"

---

## Edge Cases

**Multiple Recent Meetings with Same Contact**
If the user has had multiple meetings with the same person or team recently, ask for clarification: "I found calls with Sarah on February 28 and March 1. Which one would you like an update on?" If the request is still unclear, assume the most recent meeting.

**Meeting Was Months Ago**
If the "last meeting" is more than 90 days old, note this in the output: "⚠️ Note: This was your last recorded meeting with this contact, but it was on [date]. You may want to reach out to reconnect."

**You Were Mentioned but Not Present**
If the user was mentioned in a conversation but didn't directly attend the meeting, provide the brief but flag it: "⚠️ Note: You weren't at this meeting, but [contact] discussed your work. Here's what was said about it..."

**No Meeting Found**
If no meeting is found with the specified contact, respond: "I don't have a record of a meeting with [contact]. Your last interaction was [type of interaction] on [date]. Would you like me to brief you on that instead?"

**Partial Information Available**
If meeting notes are incomplete or minimal (e.g., only calendar title, no transcript), provide what's available and flag gaps: "Note: I only have the calendar entry for this meeting. Based on what I know: [summary]. You may want to check your notes for additional details."
