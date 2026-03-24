---
name: "Debrief Phone Call"
description: "Extract structured intelligence from phone calls and voice-only conversations — sentiment shifts, objection handling moments, coaching opportunities, and action items. Map voice-only channels (cold calls, support calls, internal phone syncs) the same way you analyze video meetings. Trigger on: phone call analysis, voice call debrief, call intelligence, phone conversation summary, objection handling, cold call review."
dependencies: []
connectors:
  - name: "HubSpot"
    reason: "Syncs voice call insights directly to deal records, flags objection patterns, tracks sentiment changes over time"
  - name: "Slack"
    reason: "Posts coaching alerts when objection-handling moments or sentiment shifts are detected; surfaces patterns for team learning"
  - name: "Help Scout"
    reason: "Extracts support call patterns — CSAT drivers, escalation triggers, resolution obstacles — to improve support coaching"
  - name: "Google Calendar"
    reason: "Maps call frequency and attendee patterns to surface relationship momentum shifts and escalation signals"
  - name: "Linear"
    reason: "Creates follow-up tasks from voice call insights: prospect follow-ups, objection research, coaching actions"
---

## Purpose

Voice calls lack the visual context of video meetings, but the conversation intelligence is just as rich. This skill extracts sentiment, objection handling, coaching moments, and action items from phone-only conversations — cold calls, support calls, internal syncs — and maps them to the same intelligence layer as video meetings. Works from Harmony's transcribed voice calls; produces structured insights that surface coachable moments, sentiment evolution, and next steps so your sales and support teams can improve from every interaction.

## When to Use

- After every cold call, pull sentiment shifts and objection handling for coaching feedback
- You're building a support team playbook — analyze phone calls to find common resolution patterns and CSAT drivers
- Sales manager reviewing call transcripts and needs to score objection handling and pitch effectiveness
- Your team had a tough call — extract what went wrong (sentiment signals, unaddressed objections) and what to improve
- Support call escalated unexpectedly — analyze sentiment trajectory to understand the breaking point
- You want to track how well reps are handling a specific objection across multiple calls
- Coaching moment: a rep asked a brilliant question or handled a tough customer beautifully — flag it as a teaching example

## Instructions

### 1. Gather call context

Start by asking:

- **What kind of call?** (Cold call, sales demo follow-up, support escalation, internal sync, customer renewal)
- **What was the goal?** (Discovery, handling objection, closing, technical support, alignment)
- **Who was on the call?** (Your role, their role; first interaction or ongoing relationship?)

Pull the call transcript from Harmony if it exists. If not, work from recorded notes.

### 2. Analyze sentiment trajectory

Extract sentiment as a *journey*, not a single point. Voice calls are dynamic; sentiment shifts are the story.

**Opening sentiment (first 2 minutes):**
- How did the person sound? (Eager, neutral, rushed, skeptical, frustrated?)
- What was their energy? (High, medium, low?)
- Were they expecting the call or surprised?

**Mid-call sentiment (main conversation):**
- How did sentiment change as the call progressed?
- What moments shifted the energy? (Specific statement, product detail, objection, question asked?)
- Are they leaning in (asking questions, engaging) or checking out (short responses, quiet)?

**Closing sentiment (last 2 minutes):**
- How did they end? (Committed, interested, uncertain, resistant?)
- What was their final energy level?
- Did they agree to next steps or push back?

**Sentiment score:** Track opening, middle, and closing. Plot the arc: ↗ (improving) → (flat) ↘ (declining)

### 3. Extract objection handling moments

Every objection is a teaching moment. Capture what happened and what could improve.

**Objections raised (what did they say):**
- List each distinct objection or concern raised
- Exact quote when possible

**How it was handled (what did you do):**
- Did you acknowledge the concern?
- Did you address it directly or deflect?
- Did you ask a follow-up question to understand deeper?
- How did the prospect respond after your answer?

**Effectiveness score (did it work):**
- Sentiment improved after your response? (Objection resolved)
- Sentiment stayed same? (Acknowledged but not satisfied)
- Sentiment got worse? (Made them more skeptical)

**Coaching opportunity:**
- What could have been done differently?
- What other reps have handled this objection better? (Reference specific call/person)

### 4. Identify coaching and learning moments

Not all insights are about problems. Highlight what went *right*.

**Strong moments:**
- When did the rep do something excellent? (Powerful question, great reframe, empathetic response)
- Exact quote + impact (how did it shift sentiment or move the deal forward?)

**Rough moments:**
- When did something derail the call? (Poor question, defensive tone, lost thread)
- What could have been said instead?

### 5. Extract commitments and next steps

What was actually decided?

**Their commitment:** "We'll evaluate by Friday," "I'll involve my boss," "Send the proposal"
**Your commitment:** "We'll follow up with the demo," "Send technical specs," "Call next week"
**Next meeting:** When, what for, who's involved?
**Timeline:** When will they decide or act?

### 6. Score voice call quality and actionability

Create a quality score (0–100) based on:

- **Sentiment arc (25 points):** Did sentiment improve or stay positive? Improving = 25, Flat positive = 15, Declining = 5, Negative = 0
- **Objection handling (25 points):** Were objections addressed? Well = 25, Adequately = 15, Poorly = 5, Avoided = 0
- **Discovery depth (20 points):** How many new things did you learn? Deep = 20, Moderate = 10, Surface-level = 5, None = 0
- **Clear next step (20 points):** Is the next action crystal clear? Yes = 20, Somewhat = 10, Vague = 5, None = 0
- **Rep coachability (10 points):** Were there clear coaching moments? Yes = 10, Minor = 5, None = 0

**Interpretation:**
- 80–100: Excellent call. Strong handling, clear progress.
- 60–79: Good call. Some rough moments, but moved forward.
- 40–59: Okay call. Objections not fully addressed; sentiment flat.
- 0–39: Difficult call. Sentiment declined or no clear outcome.

## Output Format

```markdown
# Voice Call Intelligence Report — [Person / Company Name]
_Date: [call date] · Duration: [length] · Purpose: [cold call / support / demo follow-up / etc.]_

## Call Arc Summary
[2–3 sentences: opening tone, how it progressed, closing position, one thing to act on]

## Sentiment Journey
**Opening:** [Tone + energy + quote showing opening state]
**Mid-call turning point:** [What shifted sentiment, for better or worse, + quote]
**Closing:** [Final tone + energy + commitment level]

**Sentiment arc:** ↗ / → / ↘ [with brief explanation]

## Objection Handling Scorecard
| Objection | What Was Said | How Handled | Effectiveness | Coaching Note |
|-----------|---------------|-------------|----------------|---------------|
| [Objection 1] | "[Quote]" | [What rep said/did] | [Improved/Same/Worse] | [What could improve] |
| [Objection 2] | "[Quote]" | [What rep said/did] | [Improved/Same/Worse] | [What could improve] |

## Coaching Highlights
### What Went Well
- [Strong moment 1 + impact] — "[Quote]"
- [Strong moment 2 + impact] — "[Quote]"

### What Could Improve
- [Rough moment 1 + alternative approach]
- [Rough moment 2 + alternative approach]

## Discovery & Intelligence Extracted
**About their business:**
- [Key insight they shared]
- [Pain point or priority mentioned]
- [Buying signal or timeline clue]

**About the relationship:**
- [Tone/receptiveness]
- [Interest level]
- [Trust signals]

## Commitments & Next Steps
**Their commitments:**
- [ ] [What they said they'd do — owner, due date]
- [ ] [What they said they'd do]

**Your commitments:**
- [ ] [What you said you'd do — owner, due date]
- [ ] [What you said you'd do]

**Next interaction:** [When, format (call/email/meeting), objective]

## Voice Call Quality Score: [0–100]
**Breakdown:**
- Sentiment arc: [25 pts max]
- Objection handling: [25 pts max]
- Discovery depth: [20 pts max]
- Clear next step: [20 pts max]
- Rep coachability: [10 pts max]
- **TOTAL: [score]**

**Interpretation:** [80–100: Excellent | 60–79: Good | 40–59: Okay | 0–39: Difficult]

## Rep Coaching Recommendation
[1–2 sentences on what this rep should focus on next. Reference specific moment if applicable.]

---

**Now what?** Log this in your CRM or Harmony workspace. If objection handling needs work, schedule a coaching session with the rep. If a strong moment occurred, flag it as a teaching example. Follow up on their commitments by the agreed date.
```

## Example

**User:** "I just did a cold call with Sarah at Bellweather Finance. It was my first time calling her cold. Can you analyze the transcript and tell me if I handled the objections well?"

**Output:**

```markdown
# Voice Call Intelligence Report — Sarah Kim, Bellweather Finance
_Date: March 18, 2026 · Duration: 18 minutes · Purpose: Cold call, discovery_

## Call Arc Summary
Strong opening — Sarah was curious and didn't hang up. Mid-call, you hit a significant objection ("We already use Datadog") but recovered well by positioning complementary value. She ended warm, agreed to a follow-up demo. This is a solid first call — sentiment improved from neutral to interested. One coaching note: you could have dug deeper on her Datadog limitations instead of pivoting so quickly.

## Sentiment Journey
**Opening:** Surprised but friendly. "Oh, I wasn't expecting a call, but sure, I have a minute." (Energy: Medium, open)

**Mid-call turning point:** Hit hard objection at 7:20 — "We already have Datadog, so I'm not sure what you'd add." Sentiment dipped briefly. You recovered by saying "Datadog tracks infrastructure; we focus on application behavior and cost optimization." She said, "Hmm, actually that's a gap we have." Sentiment went back up. (Energy: Medium to High)

**Closing:** "Yeah, let's do a 20-minute demo. My team needs to see how this integrates with our CI/CD pipeline." (Energy: High, committed to next step)

**Sentiment arc:** → ↘ ↗ [Neutral → Skeptical → Engaged]

## Objection Handling Scorecard
| Objection | What Was Said | How Handled | Effectiveness | Coaching Note |
|-----------|---------------|-------------|----------------|---------------|
| "We already use Datadog" | "Datadog covers infrastructure monitoring, we focus on app behavior cost." | Pivot to differentiation; didn't ask follow-up | Improved | Could have asked: "What gaps does Datadog leave for you?" before pivoting. Would've uncovered the cost issue she mentioned later. |
| "How long does implementation take?" | "Most teams go live in 2 weeks; it integrates with your existing CI/CD." | Direct answer; no proof point | Same | Could have asked about their current deployment frequency to scope it better, then given a custom estimate. |
| "What's the price?" | "Enterprise plans start at $15K/month, scales with your infra size." | Upfront, no packaging options discussed | Same | She didn't push back, but mentioning "we can structure this differently based on usage" would've left the door open. |

## Coaching Highlights
### What Went Well
- **Empathy in opening** — "I know this is sudden, I'll be quick." She appreciated the respect for her time.
- **Great recovery on Datadog objection** — You didn't get defensive; you repositioned. That's professional.
- **Asked about CI/CD integration** — That was a good question. Shows you did homework on their stack.

### What Could Improve
- **Ask before pivot** — On the Datadog objection, ask why they have it and what gaps remain before positioning yourself as complementary.
- **Scope-first pricing** — Instead of starting with your minimum plan, ask about their infra scale (Kubernetes, microservices?) so the price lands in context.
- **Confirm urgency** — You didn't ask *when* they'd want to evaluate. Leave the call knowing if this is Q2 or Q4 priority.

## Discovery & Intelligence Extracted
**About their business:**
- Using Datadog for infrastructure, but lacking application-level cost visibility
- Deploy frequently (mentioned "CI/CD pipeline" — likely multiple deploys/week)
- Team size: "my team needs to see" — sounds like 4–6 engineers, she's tech lead or architect
- Cost is a concern ("we've spent more than budgeted on infrastructure")

**About the relationship:**
- Receptive to conversation; didn't brush you off
- Curious (asked about integration and implementation timeline)
- Authority: she said "my team," not "I'd have to ask my boss," so likely decision-maker or strong influencer
- Trust: Initial skepticism on Datadog positioning, but trusted your answer and agreed to demo

## Commitments & Next Steps
**Their commitments:**
- [ ] Sarah: Attend 20-minute product demo (scheduled for March 25, 2pm PT)
- [ ] Sarah: Get CTO's time for follow-up technical call (if demo goes well)

**Your commitments:**
- [ ] Send pre-demo brief on CI/CD integration (today)
- [ ] Tailor demo to focus on cost visibility + Datadog comparison (before March 25)
- [ ] Prepare 2–3 implementation examples from similar-sized teams

**Next interaction:** Product demo, March 25, 2pm PT, 20 minutes, Sarah + engineer (TBD)

## Voice Call Quality Score: 78
**Breakdown:**
- Sentiment arc (Neutral → Skeptical → Engaged): **22/25 pts** (Good recovery, but started flat)
- Objection handling (Datadog, pricing, timeline handled): **20/25 pts** (Effective but could dig deeper)
- Discovery depth (Found Datadog gap, CI/CD, cost concern, team size): **16/20 pts** (Good, missed urgency/timeline)
- Clear next step (Demo scheduled, date/time/attendees confirmed): **20/20 pts** (Perfect)
- Rep coachability (Clear coaching moments on ask-before-pivot and scoping): **10/10 pts** (Lots to learn from)
- **TOTAL: 78/100**

**Interpretation:** Good call. Sentiment improved, objections were handled, and you secured a demo. Focus next on deeper discovery before pivoting on positioning, and always scope before pricing.

## Rep Coaching Recommendation
You did well recovering from the Datadog objection. Next time, before you pivot to differentiation, ask *why* they chose Datadog and what it doesn't do for them. That intel is gold — it tells you exactly where to position. Also, confirm timeline before hanging up. "When would your team want to evaluate something like this?" takes 5 seconds and saves you a lot of follow-up guessing.

---

**Now what?** Send Sarah the CI/CD integration brief today so she has context before the demo. Prep your demo to focus on cost visibility (she mentioned budget surprises). Before March 25, research what other teams with similar CI/CD stacks saw in implementation time so you can give her a custom estimate. After the demo, follow up within 24 hours with next steps.
```

## Edge Cases

- **Call where rep talked too much, didn't ask enough questions:** Score will be lower on discovery depth. Sentiment may flat-line or dip. Flag as coaching: "You made good points, but the prospect barely spoke. Next call, plan 2–3 questions and listen more."
- **Support call where customer was angry:** Capture the sentiment trajectory honestly. If rep handled escalation well (acknowledged frustration, didn't get defensive, offered real solution), score will show that. If rep got defensive, score reflects it. Coaching is honest.
- **Call with no objections raised (prospect seemed too easy):** That's interesting. Either they're genuinely sold, or they weren't engaged. Ask: "Did they ask any questions?" If none, flag as "need to probe deeper on next call — they may not understand what we offer."
- **Rep did everything right, but prospect said no anyway:** Score will still be high (rep quality), but note the outcome. Not every good call results in a deal. Separate rep performance from deal outcome.
- **Prospect asked a question you couldn't answer:** Capture it. If rep said "I don't know, let me find out," that's coachable + actionable. If rep made something up, that's a coaching moment too.
- **Cold call where you got the meeting, no sale expected yet:** That's success. Score sentiment, objection handling, discovery depth. The outcome metric is "did we secure next step?" not "did they buy today?"

