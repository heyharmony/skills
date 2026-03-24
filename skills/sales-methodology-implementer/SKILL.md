---
name: "Score Call Against Methodology"
description: "Coach reps on a sales methodology — MEDDIC, Sandler, Consultative Selling — by analyzing calls against the framework, scoring adherence, and recommending where to adjust approach. Trigger on: methodology coaching, call analysis against framework, MEDDIC audit, sales process alignment, call quality score."
dependencies: []
connectors:
  - name: "Salesforce"
    reason: "Pull opportunity history, deal stages, and close rates to contextualize why methodology adherence matters for this team's specific metrics"
  - name: "HubSpot"
    reason: "Access deal records and activity history to show correlation between methodology adherence and deal progression"
  - name: "Slack"
    reason: "Post coaching recommendations and methodology adherence scores to rep channels; create accountability via team visibility"
  - name: "Google Calendar"
    reason: "Map upcoming customer calls so coaching can be applied in real time (prep before calls, debrief after)"
---

## Purpose

Analyze sales calls against a specific sales methodology (MEDDIC, Sandler, Consultative, SPIN, SNAP, or custom framework) to identify where reps are strong and where they're missing critical steps. When Harmony conversation data exists, pulls direct quotes and call moments to show exactly where the methodology was applied or skipped. Works from CRM deal notes and rep summaries when conversation data isn't available, then recommends targeted practice areas and next calls to analyze.

## When to Use

- Coaching calls to show reps where they nailed the methodology and where they drifted
- Training new reps on the company's chosen framework by analyzing calls from top performers
- Root-causing low win rates or long sales cycles — often methodology adherence is the gap
- Evaluating whether your team is actually using the methodology you've trained them on
- Preparing coaching plans for individual reps with specific call-by-call feedback

## Instructions

### 1. Establish the framework and scoring criteria

Start by asking:

- **Which methodology?** MEDDIC, Sandler, SPIN Selling, Consultative, SNAP, or custom?
- **What's your definition?** If custom, provide the key steps or stages the rep should follow.
- **What does good look like?** Examples: "Good discovery means asking 3+ discovery questions," "Good qualification means confirming budget authority before moving to proposal."

Define scoring for each step (0–5 scale):
- 5 = Clear, explicit, evidence-based (rep asked the question, got a clear answer, referenced it later)
- 3 = Partially addressed (rep touched on it but didn't go deep)
- 1 = Missed or weak (rep skipped it or the answer was vague)
- 0 = Ignored entirely

### 2. Gather conversation data

Ask what the user has:
- **Which call(s)?** Specific meeting, or multiple calls to compare?
- **Rep to coach?** Or analyzing a call from a top performer as an example?
- **What's the goal?** One-time feedback, ongoing coaching, or training?

If Harmony conversation data exists, pull:
- Full transcript or recording of the call
- Speaker labels (who said what, when)
- Any Harmony Insights flagging key moments (buying signals, objections, timelines mentioned)
- Meeting metadata (attendees, duration, customer sentiment if available)

### 3. Analyze the call step-by-step

Go through the methodology framework in order:

For each step:
- **Did the rep do it?** Yes/No
- **How well?** Score 0–5 with evidence
- **Quote or moment:** Exact text from the call showing the step (or the missed opportunity)
- **Impact:** Why this step matters (qualification prevents wasted time, discovery builds rapport, etc.)

Example for MEDDIC:
- **Metrics:** "Did rep ask about the customer's current solution and benchmarks?" Quote: "How are you measuring success today?"
- **Economic Buyer:** "Did rep identify or confirm the person who controls budget?" Quote: Rep said "Who's involved in the budget decision?" and customer said "My CFO needs to sign off."
- **Decision Criteria:** "Did rep uncover what the customer will evaluate?" Quote: "We need integration with Salesforce and support for 500+ users."

### 4. Score and identify gaps

Create a methodology adherence scorecard:

- **Overall adherence score** = Average of all steps
- **Strengths** = Steps scored 4–5 (rep consistently nailed these)
- **Weaknesses** = Steps scored 0–2 (rep skipped or barely touched)
- **Impact on deal** = How did the gaps affect this deal's progression? Did the rep move the deal forward despite missing steps, or did gaps cause friction?

### 5. Develop coaching recommendations

For each gap (score <3), provide:

- **What to do differently:** Specific change for the next call
- **Why it matters:** How this step unlocks the deal
- **How to practice:** What the rep should ask on the next customer call, or a role-play scenario to practice first
- **Success metric:** What does good look like? (Clear answer, customer nods, decision confirmed)

### 6. Create output with next steps

Format the coaching so the rep can immediately apply it. Include call replays (exact quotes) so they learn from what happened, not just abstract advice.

## Output Format

# Sales Methodology Coaching — [Methodology Name]
_Analyzed by: [Coach/Manager] · Rep: [Rep Name] · Date: [date]_

## Call Overview
| Customer | Company | Call Type | Date | Duration | Outcome |
|---|---|---|---|---|---|
| [name] | [company] | [discovery/demo/negotiation] | [date] | [min] | [moved forward / needs follow-up / stalled] |

## Methodology Adherence Scorecard
| Framework Step | Score | Evidence | Status |
|---|---|---|---|
| [Step 1] | [0–5] | "[Quote or observation]" | [✓ Nailed / ⚠ Partial / ✗ Missed] |
| [Step 2] | [0–5] | "[Quote or observation]" | [✓ Nailed / ⚠ Partial / ✗ Missed] |

**Overall Adherence Score:** [X/5] = [Good / Developing / Needs work]

## Detailed Feedback

### [Step] — Score: [X/5]
**What happened:**
- [Specific moment or quote showing what the rep did]
- [Why it worked or didn't work]

**Your strength:** [What the rep did well]

**Where to adjust:** [What to do differently on the next call]

**Practice this:** [Specific language to use, or role-play scenario]

---

## Coaching Summary

**Top Strength:** [Rep's clearest methodology skill]

**Primary Gap:** [Most important thing to improve]

**Next Step:** [Specific call or practice session]

**Success Metric:** By [date], you'll [specific improvement goal]

## Now What?

- **Before next customer call:** [Brief prep task — e.g., "Script out 3 discovery questions on budget authority"]
- **Schedule practice:** [Role-play or peer example to review before next call]
- **Debrief after next call:** [When you'll review how this coaching landed in a real call]

---

## Example

**User:** "I just listened to Sarah's call with TechCorp — she's a newer rep. Walk me through where she nailed MEDDIC and where she needs coaching."

**Output:**

# Sales Methodology Coaching — MEDDIC
_Analyzed by: Manager · Rep: Sarah Chen · Date: 2026-03-22_

## Call Overview
| Customer | Company | Call Type | Date | Duration | Outcome |
|---|---|---|---|---|---|
| Marcus Johnson, VP Ops | TechCorp Inc. | Discovery | Mar 20 | 38 min | Advanced to proof of value |

## Methodology Adherence Scorecard
| MEDDIC Step | Score | Evidence | Status |
|---|---|---|---|
| Metrics | 5 | "We're looking to cut manual processing by 60% and hit that in 90 days" | ✓ Nailed |
| Economic Buyer | 2 | Marcus mentioned "my CFO" once but no follow-up | ⚠ Partial |
| Decision Criteria | 4 | "Need Salesforce integration and API-first architecture" | ✓ Nailed |
| Decision Process | 1 | No questions asked about approval steps or timeline | ✗ Missed |
| Identify Pain | 5 | "We're spending 8 hours a week on manual exports" (verbatim pain stated) | ✓ Nailed |
| Champion | 3 | Marcus is clearly a champion ("we've been looking for this for 2 years") but no explicit champion identification | ⚠ Partial |

**Overall Adherence Score:** 3.3/5 = Developing

## Detailed Feedback

### Metrics — Score: 5/5
**What happened:**
Marcus clearly stated the success metric: "We need to cut manual processing by 60% and hit that in 90 days." Sarah repeated it back to confirm: "So 60% reduction in 90 days is the winning metric for this."

**Your strength:** You anchored the entire deal on a number. That's the gold standard for metrics. Marcus will remember this, and you have a measurable win condition.

**Where to adjust:** None. This was excellent.

---

### Economic Buyer — Score: 2/5
**What happened:**
Marcus said: "I'll need to run this by my CFO before we move forward." Sarah replied: "Got it. We'll send you some information to review." Then she moved on.

**Your strength:** You heard the CFO mention. You didn't ignore it.

**Where to adjust:** This is the biggest gap. You need to dig:
1. Ask who the CFO is and what their specific concerns might be (cost? Integration? Support?)
2. Confirm whether Marcus controls the budget or just influences it
3. Get the CFO on a call before you spend time on a proof of value

The risk: You could build a perfect POV and the CFO could kill it because she wasn't involved.

**Practice this:**
When you hear "I need to check with my CFO," respond with:
- "Great. Who should I know about [CFO name]? What's their main concern — is it cost, integration, or something else?"
- "When we send the proposal, does it go to you or straight to [CFO name]?"
- "Should we include [CFO name] on our next call to make sure we address all the concerns upfront?"

**Before your next TechCorp call:** Send Marcus a message: "Quick question — should we get your CFO on our next call to walk through the ROI math together? That way we can address any financial concerns head-on instead of in a second round."

---

### Decision Criteria — Score: 4/5
**What happened:**
Sarah asked: "What does the perfect solution need to do?" Marcus answered: "Needs Salesforce integration and API-first architecture." Sarah wrote it down and confirmed: "So Salesforce integration, API-first, and minimal setup time."

**Your strength:** You got specific criteria, not vague ones. Salesforce integration is testable. API-first is testable. You can now build a POV that directly validates these criteria.

**Where to adjust:** You could have gone one level deeper: "When you say API-first, are you concerned about vendor lock-in, or mainly about integration speed?" That one question would've revealed the underlying fear and let you address it in the POV.

**Practice this:** After getting criteria, ask "And the reason [Criteria X] is important is...?" Listen for the pain behind the requirement.

---

### Decision Process — Score: 1/5
**What happened:**
You never asked when they decide, who else is involved, or what approval steps come after evaluation.

**Your strength:** (None on this one — you skipped it entirely)

**Where to adjust:** This is your second priority after Economic Buyer. You need to know:
- "After we do the POV and you see the results, what's the approval process?" (Might be CFO review, might be procurement, might be board approval)
- "How long does that process typically take?" (Could be 2 weeks or 3 months)
- "Is there a target decision date you're working toward?" (Helps you know if timeline is realistic)

Without this, you could prove the solution works and still have the deal stall in procurement for 6 months.

**Practice this:**
Script: "So if the POV shows the 60% reduction, what's the next step in getting approval? Is it budget review with your CFO, procurement sign-off, or something else?" Let Marcus answer, then: "And how long does that usually take?" This gives you the real decision timeline, not the optimistic one.

**Before your next call:** Add this to your agenda: "Walk Marcus through the decision process after POV — who approves, how long does it take, and when would you ideally want to be decided?"

---

### Identify Pain — Score: 5/5
**What happened:**
Sarah asked: "Walk me through your current process." Marcus described hours of manual exports, spreadsheet management, and error-prone handoffs. Sarah then asked: "And how much time do you spend on this every week?" Marcus said: "My team and I probably spend 8 hours a week total on manual processing and tracking." Sarah confirmed: "So 8 hours a week of your team's time is tied up in this?"

**Your strength:** You got the customer to quantify their pain. 8 hours a week is a number you can work with. It's also big enough to justify a solution.

**Where to adjust:** None. This was textbook Identify Pain.

---

### Champion — Score: 3/5
**What happened:**
Marcus clearly wants to solve this: "We've been looking for a solution like this for 2 years. It's been a real pain point." But Sarah never explicitly said, "So you're going to be the internal champion for this?" or "How would you pitch this to your CFO?"

**Your strength:** You built rapport with Marcus and he clearly likes you. That's the foundation for a champion. He's motivated.

**Where to adjust:** Explicitly identify and enlist him as the champion:
- "It sounds like you've felt the impact of this more than anyone — how would you describe it to your CFO?"
- "If we move forward, what role would you play in getting the team aligned?"
- This confirms he's willing to advocate for you internally, not just be a fan.

**Practice this:** Late in the discovery call, say: "Marcus, it sounds like you're really motivated to solve this. If we move forward, I want to make sure I'm supporting you as the champion internally. What concerns do you think your CFO will have that we should address upfront?"

---

## Coaching Summary

**Top Strength:** Metrics and Pain Identification — you're nailing the "Why now?" questions. Marcus knows why he needs this and what success looks like.

**Primary Gap:** Economic Buyer and Decision Process — you need to identify the full buying committee and the real approval timeline before you invest in a POV.

**Next Step:** Before you schedule the POV, get the CFO on a call. Use that call to confirm Marcus's criteria, understand the CFO's cost concerns, and map the actual decision timeline.

**Success Metric:** By your next TechCorp call, you'll confirm: (1) who the CFO is and what their main concern is, (2) whether Marcus has budget authority or just influence, and (3) when they need to decide.

## Now What?

- **Before next call:** Send Marcus a message asking if his CFO should join the next conversation (frame as "making sure we address all angles upfront")
- **Role-play:** We'll do a 15-minute Economic Buyer + Decision Process role-play before your next customer call
- **Debrief after CFO call:** We'll review how you handled Economic Buyer and Decision Process questions on the CFO call, and celebrate the wins

---

## Edge Cases

- **Rep nailed the methodology but deal still stalled:** Methodology adherence doesn't guarantee deals close (timing, budget, competition matter). Note in coaching that execution was sound but external factors intervened. Use as positive example.
- **Rep completely skipped a step but customer was so engaged they didn't notice:** Acknowledge the engagement worked, but explain that skipping steps creates risk. Without MEDDIC discipline, wins are luck, not repeatable.
- **Customer volunteer answers that skip ahead (e.g., reveals Economic Buyer immediately):** No need to re-ask. Rep's job is to fill gaps, not be robotic. Score credit for the information, note that it was proactive customer input.
- **Call was very short due to customer time constraints:** Don't penalize the rep for missing steps if the call was 15 minutes. Note what was covered well in that time, and recommend what to address on the next call.
- **Rep's methodology differs from company standard:** Use as coaching opportunity. Explain why the company's chosen methodology exists and how it protects the rep. Show how the company's framework would have handled this call better.
- **Top performer skips steps but consistently wins:** Analyze why (they're so strong at rapport that customers answer proactively? They read the room and adjust?). Pull the coaching up to share with the team — methodologies should adapt to individual strengths, not restrict them.
