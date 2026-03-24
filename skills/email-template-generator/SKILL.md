---
name: "Create Reusable Email Templates"
description: "Generate reusable email templates for sales scenarios — discovery calls, demos, follow-ups, proposals, objection handling, and closes. Create templates with personalization placeholders, subject lines, and tone guidance for different buyer personas. Trigger on: email template, sales email, follow-up email, proposal email, demo email, discovery template, sales outreach template."
dependencies: []
connectors:
  - name: "Gmail"
    reason: "Store generated templates in Gmail drafts or signature templates; track which templates get replies and which ones get deleted"
  - name: "HubSpot"
    reason: "Save templates as HubSpot email sequences; track usage and reply rates by template and persona"
  - name: "Slack"
    reason: "Share templates with sales team so everyone uses consistent, tested messaging across outreach"
  - name: "Notion"
    reason: "Create a shared template library where reps can view templates, results, and notes on which ones work for each persona"
---

## Purpose

Generate reusable email templates for common sales scenarios — discovery call invites, demo follow-ups, objection handling, proposal intros, and closing emails. Each template includes subject lines, personalization guidance, tone notes, and tactical advice for different buyer personas. Templates are designed to work across multiple messages without requiring heavy customization, while still leaving room for personalization that matters. Works standalone from sales experience and best practices; becomes richer when grounded in what actually works from Harmony conversation data (successful sales calls, patterns in reply rates).

## When to Use

- Building a sales email template library for your team
- Creating templates for a new sales motion or persona
- Scaling outreach — you've found a winning email format and want to make it repeatable
- Improving reply rates — analyzing what worked in past emails and turning it into a template
- Coaching new reps — templates codify best practices so junior reps follow the same patterns as top performers

## Instructions

### 1. Define the scenario and persona

Ask what the user needs:
- **What sales scenario?** Discovery call invite, demo follow-up, objection response, etc.
- **What persona?** Title, seniority, company size, industry
- **What's the ask?** Meeting, demo, reply, intro
- **What's the relationship?** Cold, warm intro, existing conversation
- **Key context?** Product, ICP, proof points, common objections

If Harmony conversation data exists, pull:
- Successful emails from past deals with this persona (extract tone, structure, proof points)
- Which openings and CTAs got replies (subject lines, personalization angles)
- Common objections this persona raises and how top reps handle them
- Patterns in what convinced this persona to move forward

### 2. Choose template structure

Select a framework based on the scenario:
- **Discovery invite:** Personalization → value statement → low-friction ask → CTA
- **Demo follow-up:** Recap what you discussed → why they said they're interested → propose next step → CTA
- **Objection response:** Acknowledge concern → provide evidence/context → alternative approach → CTA
- **Proposal intro:** What you're proposing → why (based on their criteria) → timeline → CTA
- **Closing email:** What we've aligned on → next immediate step → urgency if applicable → CTA

### 3. Write with persona in mind

Calibrate voice, length, and proof points for the buyer:
- **C-suite:** Ultra-brief (3–4 sentences), one metric/proof, subtle ask
- **VP/Director:** Slightly longer (5–7 sentences), 1–2 proof points, clear value statement
- **Manager/IC:** More detail (8–10 sentences), specific use case, technical proof, relatable voice

### 4. Build personalization placeholders

Include placeholders that signal what to customize:
- `[Company name]` — Not just {{company}} (make it clear what goes there)
- `[Specific signal]` — E.g., "[Product launch announcement]" instead of [news]
- `[Your proof point]` — E.g., "[Customer in similar role saved X hours/month]"
- `[Specific question]` — E.g., "[Question about their current process]"

Comment on how to personalize: "Use a specific LinkedIn post, product launch, or company news, not a generic observation."

### 5. Add tactical guidance

Include notes on:
- **Best time to send** — "Send on Tuesday–Thursday, 9–11am in prospect's timezone"
- **Subject line variations** — "Try [option A] if they responded to a cold intro, [option B] if it's a warm intro"
- **Reply rate expectations** — "This template typically gets 8–12% reply rate on cold outreach"
- **When to use this** — "Use this after a demo, not before"

### 6. Create the template output

Format as a complete, copy-pasteable template with clear sections and placeholders.

## Output Format

# Email Template — [Scenario] / [Persona]
_Created [date] · Replaces: [if updating existing] · Expected reply rate: [baseline]_

## Scenario Summary
- **Use case:** [When to send this email]
- **Best for:** [Persona / Seniority / Relationship type]
- **Goal:** [What response you want]
- **Timing:** [When in sales cycle]

## Template

**Subject line:**
[Subject — 2–4 words, boring, internal-looking]

*Alternative subjects:*
- [Option A] — [When to use]
- [Option B] — [When to use]

**Body:**

[Full email]

## Personalization Guidance

| Placeholder | What goes here | How to find it | Example |
|---|---|---|---|
| `[Specific signal]` | Recent company news, product launch, LinkedIn post, hiring | LinkedIn, company blog, web search | "Saw you posted about your new API roadmap" |
| `[Proof point]` | Metric or case study relevant to their role | CRM, sales playbook, Harmony | "Saved a similar SaaS company 400 ops hours/year" |

## Tactical Notes

- **Best send time:** [Day/time that gets highest open rates]
- **Email length:** [Expected word count and why]
- **Tone:** [Brief voice guidance — e.g., "Peer-level, slightly casual, not pushy"]
- **Expected performance:** [Reply rate, open rate if data available]
- **Pair with:** [What should follow this email if they don't reply]

## When to Use This Template

- ✓ [Appropriate scenario]
- ✓ [Appropriate scenario]
- ✗ [Do NOT use for this]
- ✗ [Do NOT use for this]

## Common Variations

**Variation 1 — [Different persona]:**
[Adjusted version for different seniority or industry]

**Variation 2 — [Different relationship]:**
[Adjusted version for cold vs. warm vs. existing relationship]

## Reply Handling

If they reply with:
- **Enthusiasm:** [Suggested response — move to next stage]
- **Question:** [Suggested response — addresses concern]
- **Objection:** [Suggested response — handles blocker]
- **No reply:** [Suggested follow-up — when/what to send]

## Now What?

- **Test it:** Use this template for your next 10 outreach emails; track open rate and reply rate
- **Refine:** If reply rate is <5%, try a different subject line; if open rate is <20%, personalization might feel generic
- **Share with team:** Post this in Slack or email template library so other reps use the same pattern
- **Measure:** Track which templates win for which personas; update this doc quarterly

---

## Example

**User:** "Create a template for a discovery call follow-up email. The persona is CFO at a mid-market SaaS company, 5 days after we had an initial call."

**Output:**

# Email Template — Post-Discovery Call Follow-Up / CFO
_Created 2026-03-22 · Expected reply rate: 15–20% (warm relationship)_

## Scenario Summary
- **Use case:** Follow-up after a discovery call to reinforce value, move toward next step
- **Best for:** CFO / VP Finance / Finance Director at mid-market SaaS (Series B–D, $50–300M ARR)
- **Goal:** Confirm interest, lock in next meeting (demo or technical deep-dive)
- **Timing:** 2–5 days after discovery call

## Template

**Subject line:**
next steps

*Alternative subjects:*
- [Specific problem mentioned] → approach
- timeline for [solution area]
- quick follow-up from our call

**Body:**

Hi [Name],

Really enjoyed our call last week. The [specific challenge] you mentioned is something we see a lot at [similar company size/industry], and it usually surfaces when [underlying reason from call].

A few things resonated:
1. Your team's pushing to [specific goal they mentioned]
2. Today you're spending [time or cost impact] on [current approach]
3. You'd ideally want [outcome they described]

I put together a quick outline of how we'd approach this for you — basically [1-sentence core value]. I'll send it as a separate note, but wanted to check: does next Tuesday or Wednesday work for a 20-minute technical deep-dive? [SE name] would join to walk through the specifics.

If neither works, happy to find another time.

**Personalization Guidance**

| Placeholder | What goes here | How to find it | Example |
|---|---|---|---|
| `[Name]` | First name of CFO | Call notes | "Sarah" |
| `[Specific challenge]` | Exact pain they mentioned verbatim | Call transcript or notes | "Expense reporting takes way too long" |
| `[Similar company size/industry]` | Comparable account | CRM or mental model | "mid-market fintech" |
| `[Specific goal]` | What they want to achieve, their words | Call notes | "cut finance ops headcount" |
| `[Time or cost impact]` | Quantified pain if mentioned | Call notes or estimate | "12 hours per week" or "$400K/year in FTE cost" |
| `[Current approach]` | How they solve it today | Call notes | "manual spreadsheet and 3 tools" |
| `[Outcome they described]` | What success looks like, their words | Call notes | "one system that talks to our ERP" |
| `[1-sentence core value]` | Your value prop in their language | Sales playbook | "Single expense system that syncs directly to your GL" |
| `[SE name]` | Sales engineer who will do the technical deep-dive | Deal team | "Mike" |

## Tactical Notes

- **Best send time:** 2–3 days after discovery call (while they still remember the call); early morning (9–11am their time) on Tuesday–Thursday
- **Email length:** 90–110 words (short, respectful of their time as CFO)
- **Tone:** Peer-level, helpful, not pushy. Shows you listened (repeats their challenges back). Makes the next step easy (just confirm yes/no on times).
- **Expected performance:** 15–20% reply rate (warm relationship after discovery); 35–40% open rate
- **Pair with:** If no reply after 5 days, send a brief check-in with a single alternative time

## When to Use This Template

- ✓ 2–5 days after a discovery call
- ✓ When they showed interest on the call
- ✓ When you have specific notes on their challenges and goals
- ✗ Do NOT use if they said "we're not interested" or "send me info"
- ✗ Do NOT use if you don't have a specific next step (demo, technical review)

## Common Variations

**Variation 1 — VP Finance (Director level, more tactical):**

Hi [Name],

Loved our conversation last week about [problem]. The [specific pain] you described is a classic pattern we see, especially at companies in [growth stage/industry] like yours.

You mentioned three priorities:
1. [Priority 1]
2. [Priority 2]
3. [Priority 3]

Here's the approach we'd take: [2–3 sentence explanation of how you solve it].

Quick question: which of those three is causing the most friction right now? And does the approach resonate, or should we think about it differently?

Happy to do a 20-minute technical walkthrough with [SE name] if it makes sense.

**Variation 2 — Warm intro (internal reference already mentioned):**

Hi [Name],

[Mutual contact] mentioned I should reach out — great to hear you had a solid conversation about [topic] last week.

Quick context: we help companies like [similar company] solve [problem]. The pattern we see is [insight from their situation], and the outcome is usually [result].

[Mutual contact] thought you should see how we'd approach [their specific challenge]. Would Tuesday or Wednesday work for a brief technical deep-dive?

## Reply Handling

**If they say "Yes, let's do Tuesday":**
Send: "Perfect. Tuesday at [time] — I'll send a calendar invite. Here's what we'll cover: [1. Specific tech question], [2. Implementation approach], [3. Next steps if it makes sense]."

**If they ask "What's the cost?":**
Send: "Great question. Pricing depends on [your variable], but for a company your size with [specific need], it's typically [range]. Happy to get more specific once we understand your exact use case better. Still good for Tuesday?"

**If they say "We're currently evaluating [competitor]":**
Send: "Good context. We'd approach this differently because [specific differentiation]. Most of the clients we work with started evaluating [competitor] too, but they chose us because [reason]. Worth a 20-minute look to see if it applies to you?"

**If no reply after 5 days:**
Send: "Quick follow-up — wanted to check if Tuesday or Wednesday still works, or should we find another time? No worries if it's not a priority right now."

---

## Edge Cases

- **You don't have detailed call notes:** Use generic personalization placeholders but note that the template is weaker. Recommend recording calls in Harmony so you can extract exact language.
- **They said "interesting" but no clear next step on the call:** Use softer language ("worth exploring together?") instead of confident next-step proposal.
- **Very formal, slow-moving organization:** Extend email slightly, be more explicit about the process (discovery → technical review → proposal → negotiation).
- **They preferred email over calls:** Skip the "let's schedule" request; instead ask "Does this direction make sense?"

## Performance Tracking

Use this template for 10 outreach emails:
- **Track:** Open rate (target: 35–40%), Reply rate (target: 15–20%), Meeting rate (target: 60–70% of replies)
- **If open rate is low:** Subject line or sender reputation is an issue. Try alternative subjects.
- **If open rate is high but reply rate is low:** Email content might feel generic. Increase personalization specificity.
- **If reply rate is high but meeting rate is low:** Next step might be too specific or inconvenient. Try "worth a conversation?" instead of a specific time.
