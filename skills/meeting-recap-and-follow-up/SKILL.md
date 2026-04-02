---
name: "Recap Meeting and Draft Follow-Up"
description: "Generate a structured meeting summary — decisions, action items, key moments, and open questions — then draft a follow-up email ready to send to attendees. Trigger on: meeting recap, meeting summary, what happened in my meeting, summarize the call, follow-up email, after-call summary, post-meeting notes, debrief my meeting."
dependencies: []
author: "Harmony"
version: "1.0.0"
icon: "sparkles"
cover: ""
screenshots: []
category: "Communication"
---

## Purpose

Turn any meeting into a structured recap with decisions, action items, key moments, and open questions — then draft a follow-up email the user can send to attendees immediately. This is the "I just got off a call, now what?" skill. It closes the loop between talking and doing by producing both the record and the next action in one step.

## When to Use

- Right after any meeting — internal or external
- When a user asks "what happened in my last call?"
- When someone needs to send follow-up notes to attendees
- After a customer call, sales call, team sync, or 1:1
- When someone missed a meeting and needs the summary

## Instructions

### 1. Identify the meeting

Ask or determine:
- **Which meeting?** The user may say "my last call," "the meeting with Acme," or name a specific meeting
- **What type of meeting?** This shapes the summary format:
  - **Customer/sales call** → Focus on commitments, next steps, buyer signals, risks
  - **Internal team meeting** → Focus on decisions, action items, blockers, ownership
  - **1:1** → Focus on topics discussed, feedback, action items, career/personal items
  - **All-hands / town hall** → Focus on announcements, Q&A highlights, strategic updates
  - **Interview** → Focus on candidate assessment, strengths, concerns, recommendation
  - **Workshop / brainstorm** → Focus on ideas generated, votes/priorities, follow-up actions

Pull the meeting transcript and any existing Harmony summary/notes from the conversation.

### 2. Extract the core elements

From the transcript, identify:

**Decisions Made**
Statements where the group agreed on a course of action. Look for:
- "Let's go with..."
- "We've decided to..."
- "The plan is..."
- Consensus moments, even if informal ("Okay, so we're doing X then")

**Action Items**
Commitments any participant made. For each:
- **What:** The specific task
- **Who:** The person who committed (use their name)
- **When:** Any deadline mentioned (explicit or implied)
- Look for: "I'll...", "Can you...", "Let's make sure we...", "By Friday we need..."

**Key Discussion Points**
The major topics covered, with enough context that someone who missed the meeting understands what was discussed and why it matters.

**Open Questions**
Items raised but not resolved. Decisions deferred. Things someone said "we need to think about" or "let's come back to."

**Parking Lot**
Topics that came up but were explicitly set aside for later.

**Notable Quotes / Key Moments**
Specific statements that carry weight — commitments from leadership, customer pain expressed in strong language, disagreements that signal risk, or enthusiasm that signals opportunity.

### 3. Format the summary

Structure depends on meeting type, but always include:

**For customer/sales calls — add:**
- Customer sentiment (positive / neutral / cautious / negative)
- Buying signals or objections raised
- Competitive mentions
- Next steps with the customer specifically

**For internal meetings — add:**
- Blockers discussed
- Decisions that affect other teams
- Items that need escalation

**For 1:1s — add:**
- Feedback given or received
- Career development items
- Personal notes (if appropriate to document)

### 4. Draft the follow-up email

After the summary, generate a ready-to-send follow-up email that:

- **Opens with a thank-you or context-setter** (not "As per our meeting" — something human)
- **Lists key decisions** so recipients can confirm or correct
- **Lists action items with owners and deadlines** — the accountability artifact
- **Flags open questions** that still need answers
- **Closes with the next step** — what happens next, when do we meet again
- **Tone matches the relationship:**
  - Customer/external: Professional, warm, clear
  - Internal team: Direct, action-focused, brief
  - Leadership/executive: Concise, strategic, decision-focused
  - 1:1 report: Supportive, specific, encouraging

**Email length:** Keep it scannable. No one reads a 500-word follow-up email. Aim for:
- 3–5 sentences of context
- Bulleted decisions and action items
- One clear CTA or next step

### 5. Offer to create tasks

After presenting the summary and email draft, ask the user:
- "Want me to create tasks for these action items?"
- "Should I add these to your notes in Harmony?"
- "Want me to schedule a follow-up meeting based on the next steps?"

## Output Format

```markdown
# Meeting Recap: [Meeting Title or Participants]
_[Date] · [Duration] · [Attendees]_

## Summary
[2-3 sentences: what the meeting was about and the most important outcome]

## Decisions
- [Decision 1 — who decided, what was agreed]
- [Decision 2]
- [Decision 3]

## Action Items
| # | Action | Owner | Deadline | Status |
|---|--------|-------|----------|--------|
| 1 | [task] | [name] | [date/timeframe] | Pending |
| 2 | [task] | [name] | [date/timeframe] | Pending |
| 3 | [task] | [name] | [date/timeframe] | Pending |

## Key Discussion Points
### [Topic 1]
[What was discussed, positions taken, context]

### [Topic 2]
[What was discussed, positions taken, context]

## Open Questions
- [Question that wasn't resolved — who needs to answer it]
- [Question that was deferred]

## Notable Moments
> "[Important quote]" — [Speaker]
> "[Important quote]" — [Speaker]

## Parking Lot
- [Topic set aside for later]

---

## Draft Follow-Up Email

**To:** [attendee emails]
**Subject:** [Subject line]

[Email body]
```

## Example

**User:** "Recap my last call with the Acme team and draft a follow-up email."

**Output:**

```markdown
# Meeting Recap: Acme Corp — Product Demo & Pricing
_March 5, 2026 · 42 minutes · Alex (us), Maria (us), Sarah Chen (Acme VP Eng), James Park (Acme CTO)_

## Summary
Demo of our analytics platform to Acme's engineering leadership. Strong interest in the real-time alerting feature. Pricing discussion went well — no sticker shock on the Team plan. Main blocker: they need SSO before they can roll out to their full engineering team. Next step is a technical deep-dive with their platform engineer next week.

## Decisions
- Acme will proceed with a 2-week trial starting Monday using 5 seats on the Team plan
- We'll schedule a technical deep-dive with their platform engineer (Raj) to address SSO and API integration questions
- Pricing: Team plan ($400/mo for 10 seats) is within their budget — no need to escalate to procurement for this amount

## Action Items
| # | Action | Owner | Deadline | Status |
|---|--------|-------|----------|--------|
| 1 | Set up Acme trial account with 5 seats | Alex | Friday Mar 6 | Pending |
| 2 | Send SSO roadmap doc and timeline | Maria | Friday Mar 6 | Pending |
| 3 | Schedule technical deep-dive with Raj | Alex | By end of next week | Pending |
| 4 | Share API documentation and sandbox credentials | Maria | Monday Mar 9 | Pending |
| 5 | Internal: loop in Priya on SSO timeline feasibility | Alex | This week | Pending |

## Key Discussion Points
### Real-Time Alerting (Strong Interest)
Sarah was particularly engaged during the alerting demo. Asked 6 questions about threshold customization and integration with PagerDuty. Quote: "This is exactly what we've been trying to build internally for 6 months."

### SSO Requirement (Blocker for Full Rollout)
James was clear: "We can trial with 5 people, but company policy won't let us roll out to the full 40-person engineering team without SSO." He mentioned they're on Okta. SSO is on our roadmap for Q2 — need to confirm timing.

### Pricing
No pushback on $400/mo Team plan. Sarah mentioned their current monitoring tool costs "way more and does less." James asked about annual pricing — we said we'd follow up.

## Open Questions
- When exactly will SSO be available? (James needs this to plan full rollout)
- Does Acme need a BAA or specific security review? (James mentioned "infosec review" in passing)
- Annual pricing — do we offer a discount? (Need to check with our sales lead)

## Notable Moments
> "This is exactly what we've been trying to build internally for 6 months." — Sarah Chen, VP Engineering
> "We can trial with 5 people, but company policy won't let us roll out to the full team without SSO." — James Park, CTO

## Parking Lot
- Custom dashboard embedding (Sarah asked about it but we deferred to the deep-dive)
- Possible case study collaboration if they become a customer

---

## Draft Follow-Up Email

**To:** sarah.chen@acme.com, james.park@acme.com
**Cc:** maria@ourcompany.com
**Subject:** Acme × [Product] — trial setup + next steps

Hi Sarah and James,

Thanks for the great conversation today — really enjoyed walking through the alerting features with you. Clear that your team has been feeling this pain firsthand.

Here's where we landed:

**Trial:**
- We'll have your 5-seat trial account ready by Friday. I'll send login details directly.

**Next steps from our side:**
- SSO roadmap and timeline → Maria will send by Friday
- API docs and sandbox credentials → Coming Monday
- Technical deep-dive with Raj → I'll reach out to him to schedule next week

**Open items to revisit:**
- Annual pricing options — I'll follow up on this separately
- Security review requirements — let me know if your infosec team needs anything from us

Let me know if I missed anything. Looking forward to getting you up and running!

Best,
Alex
```

## Edge Cases

- **Meeting had no clear decisions or action items:** It happens. Summarize what was discussed, note that no decisions were reached, and recommend a follow-up with a specific agenda to drive resolution. The email draft should propose next steps.
- **User wants a summary but no email:** Produce just the recap. Skip the email section.
- **Meeting was recorded but very short (<5 minutes):** Likely a quick sync. Produce a compact summary — 3–5 bullet points, no formal sections. Email may not be needed.
- **Multiple meetings to recap:** Ask which one, or offer to summarize each separately. Don't merge meetings into one recap — that creates confusion.
- **User wasn't in the meeting:** They may be asking about someone else's call. Summarize from the transcript and note at the top: "You weren't an attendee — this summary is based on the recording."
- **Sensitive meeting (HR, performance review, legal):** Flag that the recap should be kept confidential. Don't include it in the email draft unless the user explicitly confirms. Offer to save as a private note instead.
- **Meeting had participants from different companies:** Be extra careful with the email draft — make sure internal notes don't leak into the external follow-up. Offer to draft separate internal and external versions.
