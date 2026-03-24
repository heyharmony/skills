---
name: "Score Challenger Sale Call"
description: "Assess your sales calls using Challenger Sale methodology — teaching a unique perspective, tailoring around insight, taking control of the sale. Score rep performance and identify coaching opportunities. Trigger on: Challenger Sale, sales call review, rep coaching, teaching insight, sale control, sales coaching, call scoring, sales methodology."
dependencies: []
connectors:
  - name: "Salesforce"
    reason: "Pull call recordings, opportunity stage, and win/loss data to measure Challenger behaviors and outcomes"
  - name: "HubSpot"
    reason: "Extract call recordings and prospect profile data to analyze teaching moments and rep handling of customer context"
  - name: "Slack"
    reason: "Pull team discussions about competitor moves, market shifts, and insights to enrich Challenger teaching framework"
  - name: "Google Drive"
    reason: "Reference industry research, competitive analysis, and customer data to ground Challenger insights"
---

## Purpose

Evaluate sales calls through the lens of the Challenger Sale methodology. Research shows that successful reps teach customers something new, tailor insights around their customer's specific situation, and take control of the sales process. This skill scores reps on these three dimensions, identifies missed opportunities, and recommends specific coaching. When conversation data is available — call recordings, transcripts, Harmony-captured meetings — the analysis is grounded in what was actually said. When it's not, the skill works from a brief summary and asks diagnostic questions to assess Challenger behaviors.

## When to Use

- Weekly sales coaching; want to systematize feedback across the team using a proven methodology
- Rep is struggling despite product knowledge; might not be teaching or controlling the sale effectively
- Quarterly rep assessment; want to measure progress on Challenger Sale behaviors beyond just deal won/lost
- New rep onboarding; want to train on Challenger methodology using real call examples
- Competitive win/loss analysis; understand whether Challenger behaviors drove the win or loss
- Sales leadership reporting to board; demonstrate that rep quality is tied to Challenger methodology, not just effort

## Instructions

### 1. Gather context and the call

Start by asking what the user has. Don't assume — ask:

- **Which call are we analyzing?** (Deal stage, prospect company size, deal size, rep tenure)
- **Do you have the recording or transcript?** (Audio/video, Harmony transcript, or call summary)
- **What was the outcome?** (Deal won, lost, still in progress? Stage moved, stalled, rejected?)
- **What's your coaching hypothesis?** (What did the rep do well or poorly?)

If the user points to a Harmony call or transcript, pull:
- Moments where the rep taught or asked thought-provoking questions
- How well the rep tailored to the specific prospect's situation (or made generic pitches)
- Who controlled the conversation (rep driving agenda vs. customer asking all the questions)
- How the rep handled objections or competitor mentions
- The rep's closing behavior (took control or asked for permission)

For calls without Harmony data, ask the user to provide a 5-minute call summary or key moments.

### 2. Define the Challenger Sale framework

Remind the user of the three Challenger Sale pillars:

**1. Teach (Unique Perspective)**
- Does the rep offer a perspective the customer wouldn't have otherwise?
- Is it based on industry data, competitive patterns, or customer data?
- Does it challenge the customer's thinking, or is it just a feature pitch?

**2. Tailor (Around Insight)**
- Does the rep reference the prospect's specific situation, company, or challenges?
- Is it generic (could be said to any prospect) or specific (only makes sense for this company)?
- Does the rep demonstrate that they understand the customer's constraints, incentives, and stakeholders?

**3. Take Control (Sales Process Control)**
- Does the rep drive the agenda, or does the customer?
- Does the rep push back on objections or accept them?
- Does the rep move toward a decision, or leave it open-ended?

### 3. Analyze the call

Listen or read the transcript, and score the call across these dimensions. For each pillar, identify:

- **What went well:** Specific moments where the rep demonstrated the behavior
- **What was missed:** Opportunities where the rep could have taught, tailored, or taken control but didn't
- **Impact:** Did this behavior move the deal forward or backward?

### 4. Build the scorecard

Create a detailed scorecard showing:

- **Teach score:** (1–5) How much did the rep offer a unique perspective?
- **Tailor score:** (1–5) How much did the rep customize to the prospect?
- **Control score:** (1–5) How much did the rep drive the sales process?
- **Overall Challenger score:** Average of the three; context on where the rep is strongest/weakest
- **Call outcome momentum:** Did this call move the deal forward? (Yes, No, Neutral)

### 5. Identify coaching moments

Extract 3–5 specific moments from the call where coaching is needed or there's a strength to reinforce:

- **Moment:** Timestamp + exact quote or description of what happened
- **Behavior:** What did the rep do (or not do)?
- **Coach:** What should they do differently next time?
- **Why:** How would this change the outcome?

### 6. Recommend next coaching steps

Suggest:

- **Immediate:** What to address in the next coaching conversation
- **Pattern:** Is this a one-time miss or a recurring pattern? If pattern, what's the root cause?
- **Practice:** Specific scenario or role-play to build the skill
- **Measure:** How to know the coaching worked (next call, similar situation)

## Output Format

```markdown
# Challenger Sale Scorecard — [Rep Name]
_Call date: [date] · Prospect: [Company] · Call duration: [minutes] · Rep tenure: [months]_

## Call Summary
**Prospect company:** [Company name, industry, size]
**Deal stage:** [Stage — e.g., "Early exploration," "Evaluation," "Negotiation"]
**Deal size:** [Estimated ACV]
**Deal outcome:** [Won, lost, in progress; probability change]

## Challenger Sale Scores

### 1. TEACH (Unique Perspective) — [Score: 1–5]

**Definition:** Does the rep offer a perspective the customer wouldn't have otherwise? Is it based on data, patterns, or deep insight — not just a feature pitch?

**Evidence from call:**
- Moment 1 (timestamp [XX:XX]): "[Rep quote]" — Assessed as: Teaching / Generic pitch / Deflecting
- Moment 2 (timestamp [XX:XX]): "[Rep quote]" — Assessed as: Teaching / Generic pitch / Deflecting

**Examples of what the rep did well:**
- [Specific teaching moment and why it was effective]

**Missed opportunities:**
- [When rep could have taught but didn't; example: when competitor was mentioned, rep defended instead of teaching]

**Teaching quality assessment:**
- Teaching was: [High-insight (rare insight) / Mid-insight (solid point, somewhat common) / Low-insight (feature-focused or industry standard)]
- Grounding: [Data-backed / Customer example / Rep assertion]
- Prospect reaction: [Engaged / Skeptical / Dismissive / Neutral]

**TEACH Score Rationale:** [Why 1–5? What would need to improve to move the score up?]

### 2. TAILOR (Around Insight) — [Score: 1–5]

**Definition:** Does the rep customize around the prospect's specific situation? Or is the pitch generic (could be said to anyone)?

**Evidence from call:**
- Moment 1 (timestamp): "[Rep mentions specific company context or constraint]" — Assessed as: Specific / Generic
- Moment 2 (timestamp): "[Rep's assumption about the prospect]" — Assessed as: Researched / Assumed

**Examples of what the rep did well:**
- [Specific tailoring example — e.g., "Rep referenced the prospect's Q3 expansion; this showed research"]

**Missed opportunities:**
- [When rep could have tailored to situation but didn't — e.g., "Prospect mentioned they just integrated Salesforce; rep didn't tie solution to that"]
- [Generic language used instead of specific — e.g., "said 'enterprises' instead of 'financial services companies like yours'"]

**Stakeholder understanding:**
- Did the rep identify key stakeholders and their incentives? [Yes / Partial / No]
- Did the rep reference who needs to approve this? [Yes / Partial / No]

**TAILOR Score Rationale:** [Why 1–5?]

### 3. TAKE CONTROL (Sales Process Control) — [Score: 1–5]

**Definition:** Does the rep drive the agenda and move toward a decision? Or does the customer drive and the rep react?

**Evidence from call:**
- Agenda setting: Rep drove agenda / Customer drove agenda / Shared control
- Objections: Rep pushed back respectfully / Rep accepted without probing / Rep deflected
- Closing: Rep moved toward decision / Rep asked for decision / Rep left it open-ended

**Who controlled the conversation:**
- Opening: Rep set the agenda with [specific opening statement] — Control level: [Strong / Moderate / Weak]
- Middle: When prospect raised [objection/concern], rep [addressed it by teaching / accepted it / pushed back] — Control: [Strong / Moderate / Weak]
- Closing: Rep [moved toward next step decisively / asked prospect preference / left it open] — Control: [Strong / Moderate / Weak]

**Examples of strong control:**
- [Rep pushed back on objection with insight: "Many companies in your situation try [approach], but we see that [outcome] happens instead because..."]

**Missed control opportunities:**
- [Rep accepted objection without exploring] — Better approach: "I hear that. What's driving that concern?"
- [Customer dictated next steps] — Better: "Here's what I think makes sense next..."

**TAKE CONTROL Score Rationale:** [Why 1–5?]

## Overall Challenger Sale Assessment

**Combined Challenger Score:** [Average of Teach, Tailor, Control]

**Strongest pillar:** [Teach / Tailor / Control] — [Why?]
**Weakest pillar:** [Teach / Tailor / Control] — [Why?]

**Call outcome momentum:**
- Did this call move the deal forward? [Yes / No / Neutral]
- Why? [Rep's Challenger behaviors moved it forward / Prospect situation moved it / Rep's Challenger gaps held it back]
- Probability of close: [Increased / Unchanged / Decreased] by [%]

## Coaching Opportunities

### Coaching Moment 1
**Timestamp:** [XX:XX]
**What happened:** "[Direct quote or situation]"
**What the rep did:** [Specific behavior]
**What to coach:** [What should they do differently next time]
**Why it matters:** [How it would change the outcome]
**Practice scenario:** [Role-play or next call opportunity to apply this coaching]

### Coaching Moment 2
[Same structure]

### Coaching Moment 3
[Same structure]

## Root Cause Analysis

**If Teach score is low:**
- Does the rep have industry insights to draw from? [Yes / Needs training]
- Does the rep know the customer's competitive landscape? [Yes / Needs research]
- Is the rep leading with features instead of insights? [Habit to break / Methodology misunderstanding]

**If Tailor score is low:**
- Did the rep research the company? [Yes / No / Partially]
- Does the rep ask diagnostic questions to understand the prospect? [Yes / No / Surface-level]
- Is the rep using a generic pitch? [Yes / Needs customization]

**If Control score is low:**
- Does the rep hesitate to push back? [Yes / Needs confidence building]
- Does the rep lack conviction in their point of view? [Yes / Needs training on Challenger methodology]
- Does the rep get flustered by objections? [Yes / Needs objection handling practice]

## Rep Progress & Pattern

**Is this a one-time miss or a recurring pattern?**
- Recent calls analyzed: [#]
- Teach scores: [list]
- Tailor scores: [list]
- Control scores: [list]
- Pattern: [Rep consistently weak on teaching / Strong on tailor, weak on control / Improving across all pillars]

## Next Coaching Steps

### This Week
- **Coach:** [Specific coaching conversation topic — e.g., "How to teach a perspective in opening 2 minutes"]
- **Prep:** [Give the rep the teaching framework or competitive intel they need]

### Next Call
- **Focus:** [What to focus on in the next live call — e.g., "Practice pushing back respectfully on pricing objection"]
- **Scenario:** [Likely objection or prospect situation to watch for]

### Measurement
- **Success metric:** [In the next [3/5/10] calls, [rep demonstrates X behavior Y% of the time]
- **Check-in date:** [Next coaching conversation date]

## Call Recording & Transcript References
- Harmony call ID: [Link or reference]
- Transcript: [Available / Needs transcription]
- Key moments (timestamps): [List]
```

## Example

**User:** "Score a call. Rep is Marcus (6 months tenure), prospect is Acme (mid-market, $50K deal), deal is in evaluation stage. I have the Harmony transcript."

**Output:**

```markdown
# Challenger Sale Scorecard — Marcus
_Call date: 2026-03-18 · Prospect: Acme Inc. (MarTech, 150 people) · Call duration: 42 min · Rep tenure: 6 months_

## Call Summary
**Prospect company:** Acme Inc., MarTech, 150 employees, $40M ARR
**Deal stage:** Evaluation (3 of 5)
**Deal size:** $50K ACV (likely 2-year contract)
**Deal outcome:** Evaluation → Negotiation (moved forward); probability: 40% → 55%

## Challenger Sale Scores

### 1. TEACH (Unique Perspective) — 2/5

**Definition:** Does the rep offer a perspective the customer wouldn't have otherwise?

**Evidence from call:**
- Timestamp [06:15]: "[Rep]: 'Most companies your size try to build email segmentation manually; we see that takes 400 hours a year and creates data quality issues.'" — Assessed as: **Solid teaching moment** (industry insight with data)
- Timestamp [18:30]: "[Prospect]: 'How do you compare to [competitor]?' [Rep]: 'Well, [competitor] is great at X. We focus on Y.'" — Assessed as: **Generic deflection** (not a perspective, just feature differentiation)
- Timestamp [34:45]: "[Rep]: 'Your use case is pretty standard for your vertical.'" — Assessed as: **Missed opportunity** (rep could have taught insight about vertical trends)

**Examples of what the rep did well:**
- Opening insight about manual segmentation time/cost was specific and data-backed. Prospect noted it and said "Yeah, that's us."

**Missed opportunities:**
- When prospect asked about competitive difference, rep listed features instead of teaching a perspective ("Customers in your situation typically prioritize [outcome]. Here's why [competitor] doesn't own that..."
- Prospect mentioned they're planning a rebrand campaign; rep didn't offer insight on how MarTech companies typically handle retention during rebrand (could have taught here)

**Teaching quality assessment:**
- Teaching was: **Mid-insight** (solid point, likely known to MarTech companies but useful)
- Grounding: **Data-backed** (referenced industry research)
- Prospect reaction: **Engaged** (prospect said "Wow, 400 hours is actually our number")

**TEACH Score Rationale:** Rep delivered one strong insight early and then defaulted to generic feature talk. Strong start, but didn't sustain teaching throughout. Teach score 2/5 — needs more insights, less feature comparison.

### 2. TAILOR (Around Insight) — 4/5

**Definition:** Does the rep customize around prospect's specific situation?

**Evidence from call:**
- Timestamp [02:00]: Rep said "I see you just announced the rebrand campaign last month; how is that affecting your marketing operation?" — **Specific & researched**
- Timestamp [14:20]: "Your team is 12 people, so processes need to be lightweight; let me show you the fastest implementation path." — **Specific to company size**
- Timestamp [28:00]: Rep referenced prospect's CRM (Hubspot), and showed integration with Hubspot-specific workflows — **Specific to their stack**
- Timestamp [39:00]: "Your stakeholder list includes Sarah (campaigns) and Michael (ops); what's going to matter most to Michael?" — **Identified stakeholders by name**

**Examples of what the rep did well:**
- Research was evident. Rep knew the company's rebrand, CRM choice, and team structure before the call.
- Tied features to outcomes specific to them ("Your size means you need lightweight; our quickstart is 2 weeks not 2 months").

**Missed opportunities:**
- Prospect mentioned "Our CEO wants this done by Q2." Rep didn't ask about CEO involvement or decision timeline implications.

**Stakeholder understanding:**
- **Did rep identify key stakeholders and incentives?** Yes (Sarah: faster campaigns; Michael: operational efficiency)
- **Did rep reference approval path?** Partial (asked about stakeholder priorities, but didn't ask "Who signs off on budget decisions?")

**TAILOR Score Rationale:** Rep did excellent homework and customized around company size, tools, and personnel. Could have been 5/5 if rep had explored approval/decision process more deeply. Tailor score 4/5.

### 3. TAKE CONTROL (Sales Process Control) — 2/5

**Definition:** Does the rep drive the agenda and move toward a decision?

**Evidence from call:**
- **Agenda setting:** Prospect largely drove. Prospect opened with "We're evaluating 3 tools; let me ask you questions about each." Rep accepted agenda instead of guiding. — **Control: Weak**
- **Objections:** At [18:30] prospect said "That seems expensive compared to [competitor]." Rep said "Yeah, our pricing is premium because of [reasons]." Then asked "Any other questions?" — **Accepted without pushing back** — Control: Weak
- **Closing:** At [40:00] rep said "Happy to answer more questions. When would be a good time to talk next?" — **Prospect dictated timeline** — Control: Weak

**Who controlled the conversation:**
- **Opening:** Prospect set agenda with "Here are my questions." Rep didn't redirect to discovery or needs-based conversation. Control: **Weak**
- **Middle:** Prospect asked 6 questions; rep answered. Rep asked maybe 2 questions back. Control: **Weak**
- **Closing:** Rep asked "When works for next steps?" instead of proposing "Here's what makes sense: Let's do a focused demo with Sarah next Wednesday on campaign workflows." Control: **Weak**

**Examples of strong control:**
- None. Rep was reactive throughout.

**Missed control opportunities:**
- [06:15] Rep could have said: "I appreciate you evaluating tools. Before I walk through features, let me ask — what's the single outcome that would make this a success?" This would establish control through curiosity.
- [18:30] Prospect said "Your pricing is expensive." Rep could have pushed back: "Compared to the 400 hours of manual work, the ROI is 30%. Are you factoring that into the comparison?"
- [40:00] Rep could have said: "Here's what I recommend next. Sarah reviews the campaign workflows demo this week; Michael reviews the ops setup Friday. Let's reconvene Monday to align you both."

**TAKE CONTROL Score Rationale:** Rep was entirely reactive. Prospect drove every agenda item and closed the call. This is a major coaching opportunity. Control score 2/5.

## Overall Challenger Sale Assessment

**Combined Challenger Score: 2.7/5** (Weak overall; strong tailor, weak teach, weak control)

**Strongest pillar:** **Tailor (4/5)** — Marcus did excellent homework and customized around the prospect's situation.
**Weakest pillar:** **Control (2/5)** — Marcus was passive; prospect drove the entire conversation.

**Call outcome momentum:**
- **Did this call move the deal forward?** Yes (Evaluation → Negotiation; 40% → 55%)
- **Why?** Despite weak Challenger performance, Marcus's homework and genuine interest moved it forward. But opportunity was missed to accelerate.
- **Probability of close:** Increased 15 points, but could have been 25+ points if Marcus had demonstrated Challenger behaviors.

## Coaching Opportunities

### Coaching Moment 1: TEACH — Opening Insight
**Timestamp:** [00:00–02:00]
**What happened:** Prospect opened with "We're evaluating 3 competitors; here are my questions." Marcus said "Happy to walk through our solution" and answered their questions.
**What the rep did:** Accepted prospect's agenda instead of reframing with insight.
**What to coach:** "Before we go question-by-question, let me share something that's relevant to your rebrand situation. Most MarTech teams discover mid-campaign that their segment logic is fragmented across 3 tools. The rebrand is a perfect moment to consolidate. Here's why that matters: [insight]. Does that resonate?" — This establishes control AND teaches before answering questions.
**Why it matters:** Opens with a perspective only Marcus has (based on customer data), makes the prospect think, and positions Marcus as a guide (not just an answerer).
**Practice scenario:** In the next call, Marcus should open with a teaching moment. Provide Marcus with 3 industry insights to practice (written on index cards) so he can pick one relevant to the prospect.

### Coaching Moment 2: CONTROL — Objection Response
**Timestamp:** [18:30]
**What happened:** Prospect: "Your pricing is expensive compared to [competitor]." Marcus: "Our pricing is premium because [reasons]." Then moved on.
**What the rep did:** Defensive; accepted the objection as valid instead of reframing.
**What to coach:** "I hear that. Let's talk about total cost of ownership. If [competitor] requires 400 hours of manual work per year, and your team is paid $50/hour, that's $20K/year in labor cost. Our pricing is $50K for 2 years, but saves you that manual work. So the real difference is [X]. What does that change in your mind?" — This is teaching (TCO) + control (pushed back respectfully).
**Why it matters:** Objections are selling opportunities. Marcus deflected instead of selling.
**Practice scenario:** Role-play objection handling. Give Marcus 3 common objections (price, competitor features, implementation burden). For each, Marcus should respond with a teaching moment + reframe.

### Coaching Moment 3: CONTROL — Closing
**Timestamp:** [40:00]
**What happened:** Rep: "Happy to answer more questions. When would be a good time to talk next?" Prospect: "Let me check calendars and get back to you."
**What the rep did:** Passive close; left the next step undefined and delegated to the prospect.
**What to coach:** "Here's what I recommend next. You'll want Sarah (campaigns) and Michael (ops) to see this in different ways. What if we do this: Sarah sees a focused demo on campaign workflows Wednesday at 2pm. Michael sees the ops setup Thursday at 10am. Then Monday, we all align and you're ready to make a decision. Does that work?" — This is specific, confident, and moved the deal forward.
**Why it matters:** Weak closing leaves deals in purgatory. Specific next steps move deals forward.
**Practice scenario:** Next 3 calls, Marcus should practice proposing the next step (not asking). Provide a template: "Here's what makes sense: [specific milestone] by [date]. We'll [action]. Does that work?"

## Root Cause Analysis

**If Teach score is low:** Marcus has the customer data and competitive insights (he used them in tailor). **Root cause:** Methodology gap. Marcus isn't trained on how to open with or weave in teaching moments. **Fix:** Provide Marcus with 5–7 key insights to use in opening/closing. Practice script.

**If Tailor score is low:** Not the issue here. Marcus did excellent research.

**If Control score is low:** **Root cause:** Confidence gap or learned behavior. In Marcus's first 6 months, maybe he was trained to "let the customer drive" or "answer all questions." **Fix:** Teach Marcus that Challenger Sale means respecting the prospect while taking charge of the process. Role-play 5 control moments: opening, responding to objection, establishing timeline, introducing stakeholders, closing.

## Rep Progress & Pattern

**Recent calls analyzed:** 3 (this call + 2 prior calls reviewed)
- **Teach scores:** [2, 2, 3] — Trending slightly up; still weak
- **Tailor scores:** [4, 3, 4] — Consistently strong
- **Control scores:** [1, 2, 2] — Consistently weak

**Pattern:** Marcus is a researcher who does homework. But he doesn't establish authority; he's a facilitator. This is a coaching pattern, not a one-time miss. Teach + Control need systematic training.

## Next Coaching Steps

### This Week
- **Coach:** Challenger Sale opening framework. Use Marcus's industry insights (which he has) to open with teaching.
- **Prep:** Provide Marcus with 3 opening frameworks:
  1. "Here's what I'm seeing in your vertical..."
  2. "We work with companies like yours, and they often discover..."
  3. "Your rebrand timing is actually a moment where most companies find..."

### Next Call
- **Focus:** Opening teaching moment (30 seconds) + asking discovery questions + proposing specific next step.
- **Scenario:** High-probability next call with Acme to review demo with Sarah.
- **Success:** Marcus opens with a teaching moment related to campaign workflows. Asks 3 discovery questions. Closes with "Here's what I recommend next: [specific milestone]."

### Measurement
- **Success metric:** In the next 5 calls, Marcus should hit average Teach+Control score of 3.5+ (up from 2/5).
- **Check-in date:** Debrief after call #1 (opening framework) and call #3 (control framework).

## Call Recording & Transcript References
- **Harmony call ID:** [Link to Harmony transcript]
- **Transcript:** Available in Harmony
- **Key moments (timestamps):** [06:15 - opening insight], [18:30 - objection deflection], [40:00 - weak close]

---

**Coaching plan:** Marcus has strong research skills but needs confidence/methodology training on Challenger teach/control. Two 30-minute coaching sessions (opening framework + control framework) + 3–5 live call debriefs should move the needle. Target: 3.5+ Challenger score within 4 weeks.
```

## Edge Cases

- **Rep is excellent but lost the deal:** Don't penalize the score for the outcome. Separate rep performance (Challenger behaviors) from deal outcome (market, timing, competitor, budget). A 4/5 Challenger score that loses to budget constraints is still excellent execution.
- **Call is early-stage (first meeting):** Challenger behaviors look different. Teaching in meeting #1 matters; control is more about discovery. Adjust the rubric accordingly.
- **Call is final negotiation:** Control is paramount. Teach matters less. Adjust emphasis.
- **Rep is new (< 3 months):** Don't expect Challenger mastery. Focus on foundational control (asking discovery questions, proposing next steps). Teach can come later.
- **Rep struggles but deal advanced anyway:** This is an outlier. Investigate why. Was it the prospect's buying timeline, a product advantage, or strong prior relationship? Don't let one win hide a rep who needs coaching.
