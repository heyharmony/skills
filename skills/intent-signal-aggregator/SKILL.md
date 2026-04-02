---
name: "Spot Buying Signals"
description: "Scan conversations for buying signals — budget mentions, timeline pressure, champion emergence, competing tools mentioned, ROI language — and synthesize into a single intent score that predicts deal probability. Trigger on: buying signals, deal momentum, purchase intent, sales readiness, intent signals, opportunity scoring."
dependencies: []
connectors:
  - name: "HubSpot"
    reason: "Pulls deal stage, contact properties, and activity history to contextualize signals within the full sales cycle"
  - name: "Salesforce"
    reason: "Provides opportunity records and relationship history to validate signal strength across multiple touchpoints"
  - name: "Gmail"
    reason: "Surfaces email threads for signal confirmation (budget approvals, timeline commitments, RFP requests)"
  - name: "Slack"
    reason: "Captures team discussions about deals that indicate internal urgency or champion support"
  - name: "Google Calendar"
    reason: "Maps meeting frequency and attendee escalation to predict buying timeline acceleration"
author: "Harmony"
version: "1.0.0"
icon: "sparkles"
cover: ""
screenshots: []
category: "Sales"
---

## Purpose

Identify the strongest buying signals buried in your sales conversations and calculate a real-time intent score. This skill listens for specific language patterns — budget allocated, timeline mentioned, champion identified, competitors evaluated, ROI discussed, approval needed — and weights them based on their predictive value. The output helps sales teams focus on high-intent deals first and coaches AEs on what signals they should be hunting for. Works from Harmony conversation transcripts when available; when it's not, works from call notes and email summaries you provide.

## When to Use

- After a discovery call to immediately score whether this buyer is serious
- Before a sales review to prioritize which opportunities to push hardest
- Midway through a deal when momentum feels uncertain and you need objective signals
- When deciding whether to escalate to AE from SDR based on buyer maturity
- After a customer meeting to assess expansion or upsell likelihood
- When coaching a sales rep on what signals to listen for in their calls
- Weekly to track intent score movement across your entire pipeline

## Instructions

### 1. Gather conversation context

Start by identifying what you have:

- **Which conversations?** Recent discovery calls, demo follow-ups, needs analysis calls, champion meetings?
- **What format?** Harmony transcripts, call recordings, call notes, email threads?
- **What's the deal stage?** Early prospect, qualified lead, advanced discussions, negotiation?

If Harmony conversation data exists, pull transcripts from all meetings with this prospect/deal. If working from notes or email, use what's available.

Extract the raw signal data:
- Direct mentions of budget, timeline, approval process, competitive evaluation
- Attendee roles and seniority escalation (SDR → buying committee)
- Emotional language (frustration, urgency, relief at finding solution)
- Buying questions vs. exploratory questions

### 2. Identify and weight individual signals

For each conversation, scan for these signal categories and assign a preliminary strength (Low/Medium/High based on explicitness and specificity):

**Budget signals (weight: 20%):**
- Budget already allocated: "We have $X in the budget for this" (High)
- Budget available: "We're looking to spend in this range" (High)
- Vague budget: "This is in our pricing ballpark" (Medium)
- No budget mentioned (Low)

**Timeline signals (weight: 25%):**
- Hard deadline: "We need this live by end of Q2" (High)
- Soft deadline: "We're thinking about this for next quarter" (Medium)
- Vague timeline: "Soon-ish" (Low)
- No timeline mentioned (Low)

**Champion emergence (weight: 20%):**
- C-level or budget owner on call (High)
- Department head driving evaluation (High)
- Mid-level operator pushing solution (Medium)
- Multiple stakeholders engaged (Medium)
- Single point of contact (Low)

**Competitive context (weight: 15%):**
- Comparing directly to named competitor (High)
- Mentioned trying alternatives (Medium)
- Vague "looking at other options" (Low)
- No alternatives mentioned (Low)

**ROI/value language (weight: 15%):**
- Specific ROI expectations stated: "We'd save $X/month" (High)
- General value language: "This would help us work faster" (Medium)
- Problem-focused only, no value discussion (Low)

**Approval process (weight: 5%):**
- Clear approval chain defined: "Finance needs to review, then CEO signs off" (High)
- Approval needed but unclear process (Medium)
- No approval process mentioned (Low)

### 3. Synthesize signal strength across conversations

If multiple conversations exist, aggregate:

- **Consistency:** Do signals appear across multiple calls or just one?
- **Escalation:** Are stronger stakeholders engaging over time?
- **Deepening:** Is language becoming more specific (vague → concrete timeline)?
- **Breadth:** Are multiple signal categories being hit (not just budget, but budget + timeline + champion)?

Average the weighted scores. Flag any contradictions (e.g., champion pushing hard but timeline just shifted out).

### 4. Calculate intent score and deal readiness

Produce a 0–100 intent score:
- **80–100:** High intent. Champion is active, timeline is real, budget allocated. Sales action: Move to demos or close next week.
- **60–79:** Medium-high intent. Most signals present but one or two weak. Sales action: Qualify harder; identify what's missing (budget? champion?).
- **40–59:** Medium intent. Some signals, gaps in others. Sales action: Needs another call to strengthen signals before advancing.
- **20–39:** Low intent. Mostly exploratory. Sales action: Continue nurture, don't push hard.
- **0–19:** Very low intent. Few or no signals. Sales action: Move to low-touch nurture; revisit in 3+ months.

### 5. Recommend next actions

Based on score and signal composition, suggest:

- **What's missing:** Which signals would most increase confidence? (Budget conversation? Executive alignment? Timeline clarity?)
- **Next ask:** What should the AE do on the next call to strengthen signals?
- **Escalation flag:** Should this go to AE/manager for acceleration? When?
- **Risk flag:** Are there contradictions or negative signals (timeline just extended, champion gone quiet) that suggest momentum is stalling?

## Output Format

```markdown
# Intent Signal Scan — [Company Name] / [Prospect Name]
_Analyzed: [date] · Conversations analyzed: [count] · Overall intent score: [0–100]_

## Intent Score Card
| Category | Signal | Strength | Evidence | Weight |
|----------|--------|----------|----------|--------|
| Budget | [signal type] | [Low/Med/High] | [specific quote or fact] | [%] |
| Timeline | [signal type] | [Low/Med/High] | [specific quote or fact] | [%] |
| Champion | [signal type] | [Low/Med/High] | [specific quote or fact] | [%] |
| Competitive | [signal type] | [Low/Med/High] | [specific quote or fact] | [%] |
| Value/ROI | [signal type] | [Low/Med/High] | [specific quote or fact] | [%] |
| Approval | [signal type] | [Low/Med/High] | [specific quote or fact] | [%] |

**Overall Intent Score: [0–100]**
**Confidence: [High / Medium / Low]** (based on signal consistency and breadth)

## Deal Readiness Assessment
**Status:** [High Intent — Ready to Advance | Medium-High Intent — Needs One More Signal | Medium Intent — Continue Qualification | Low Intent — Nurture Track]

### What We Know
[2–3 sentences: The clearest signals. The strongest indicators the buyer is serious.]

### What's Missing
[What signals would strengthen deal probability most? Budget clarity? Timeline? Executive alignment?]

### Signal Consistency Check
[Are signals consistent across conversations, or contradictory? Example: "Champion says Q2 timeline, but last call they said 'when we get to it.' Flag this."]

## Conversation Timeline & Signals
| Date | Attendees | Topic | Key Signals | Score Shift |
|------|-----------|-------|-------------|------------|
| [date] | [who was on call] | [what was discussed] | [which signals emerged] | [did score go up/down and why] |

## Voice of Customer — Raw Signal Quotes
> "[Budget quote if available]" — [Role, Company]

> "[Timeline quote if available]" — [Role, Company]

> "[Champion/ROI quote if available]" — [Role, Company]

_Source: [Meeting dates, Harmony transcripts]_

## Recommended Next Actions
1. **Before next meeting:** [Objective — example: "Confirm budget has been reserved" or "Get C-level alignment on timeline"]
2. **On next call:** [Ask — example: "Help me understand your approval process" or "When would you want this live by?"]
3. **Between calls:** [Stakeholder or proof action — example: "Send case study from similar company" or "Offer a technical deep-dive with your team"]
4. **Escalation trigger:** [If X happens (timeline confirmed, champion confirms budget), escalate to AE/manager]

## Risk & Momentum Flags
[Anything that suggests momentum is stalling, timeline is slipping, or champion influence is waning? Call it out explicitly.]

---

**Now what?** Update CRM deal stage based on score. Create a task for your next call using the recommended actions. Share this score with your manager before your next pipeline review.
```

## Example

**User:** "I just did a discovery call with TechFlow — a Series B logistics startup. Here's what happened on the call (I have the transcript in Harmony under my calls from March 3). Before that, we had an initial intro call on Feb 28 where the VP Ops, Marcus Chen, just asked general questions about how we work. Now he wants a demo next week and brought two more people from his team. Can you score this for me?"

**Output:**

```markdown
# Intent Signal Scan — TechFlow / Marcus Chen (VP Operations)
_Analyzed: 2026-03-05 · Conversations analyzed: 2 (intro call Feb 28, discovery call Mar 3) · Overall intent score: 72_

## Intent Score Card
| Category | Signal | Strength | Evidence | Weight |
|----------|--------|----------|----------|--------|
| Budget | Budget available, not yet allocated | Medium | "We've set aside $150K for operational tools this year. Logistics automation is a priority category." — Marcus Chen, Mar 3 | 20% |
| Timeline | Soft deadline, 90-day window | Medium | "We're hoping to have something in place by end of Q2. Ideally before our summer peak season." — Marcus Chen, Mar 3 | 25% |
| Champion | VP-level champion, expanding team | High | Marcus (VP Ops) now involving Aisha (Director, Automation) and Raj (Tech Lead). Escalation from 1:1 to 3-person team. | 20% |
| Competitive | Comparing to named competitor, evaluating 2–3 options | High | "We looked at Convoy's platform, but it's really geared toward brokers. We also built a scrappy internal tool. Neither fits where we are." — Aisha, Mar 3 | 15% |
| Value/ROI | Specific value language, quantified pain | High | "We're losing $8K–$12K every month to missed shipment optimization. If we could capture half of that, it pays for itself in 6 months." — Marcus Chen, Mar 3 | 15% |
| Approval | Approval process vague, but Marcus has authority | Low | No mention of CFO, board, or formal approval. Marcus controls the $150K budget for his department. | 5% |

**Overall Intent Score: 72**
**Confidence: High** (strong signals across 5 of 6 categories, consistency across two calls)

## Deal Readiness Assessment
**Status:** Medium-High Intent — Ready to Move to Demo & Technical Eval

### What We Know
Marcus Chen, a VP-level decision-maker with budget authority, has allocated $150K for operational automation. His team is actively evaluating and has moved past initial exploration (expanding from 1:1 to multi-person evaluation). They have a concrete pain point ($8–12K/month) and a timeline window (end of Q2). Competitive context is clear: they've looked at alternatives and found them misaligned.

### What's Missing
One thing strengthens this deal significantly: **Get confirmation that Marcus can commit without further approvals.** The approval signal was weak — we don't know if CFO sign-off is needed for this $150K spend. This is the only gap. Everything else is strong.

### Signal Consistency Check
All signals are consistent and strengthening. The team went from one person on Feb 28 (exploratory) to three people on Mar 3 (evaluation), which indicates internal urgency. Timeline language shifted from vague to concrete ("before summer peak"). This is positive momentum.

## Conversation Timeline & Signals
| Date | Attendees | Topic | Key Signals | Score Shift |
|------|-----------|-------|-------------|------------|
| Feb 28 | Marcus Chen (VP Ops) | Initial intro — problem exploration | One stakeholder, general questions, no budget mention yet | Low baseline (30) |
| Mar 3 | Marcus Chen, Aisha Patel (Dir. Automation), Raj Mehta (Tech Lead) | Deep discovery — pain quantification, competitive landscape | $150K budget available; $8–12K/month pain; Q2 timeline; 2–3 team members now engaged | Strong jump (72) |

## Voice of Customer — Raw Signal Quotes
> "We've set aside $150K for operational tools this year. Logistics automation is a priority category." — Marcus Chen (VP Operations), TechFlow, Mar 3

> "We looked at Convoy's platform, but it's really geared toward brokers. We also built a scrappy internal tool. Neither fits where we are." — Aisha Patel (Director of Automation), TechFlow, Mar 3

> "We're losing $8K–$12K every month to missed shipment optimization. If we could capture half of that, it pays for itself in 6 months." — Marcus Chen, Mar 3

_Source: Discovery call, Mar 3 2026 in Harmony_

## Recommended Next Actions
1. **Before demo (this week):** Confirm that the $150K budget spend doesn't require CFO approval. Ask Marcus: "Is this within your signature authority, or will you need finance to sign off?" This de-risks the approval process.
2. **On demo call (next week):** Show a 15-minute focused demo of optimization impact, using logistics-specific examples. Ask Raj about technical integration (database, APIs) they'll need.
3. **After demo:** Send a case study from a similar Series B logistics company showing ROI timeline. Reference the $8–12K/month pain point explicitly.
4. **Escalation trigger:** If Marcus confirms budget + timeline + no additional approvals needed, flag to AE manager immediately. Deal is ready to move to "Proposal" stage.

## Risk & Momentum Flags
**None detected.** Momentum is strong and consistent. Only watch for: timeline slip (if they say "actually Q3" on next call, score drops 15 points).

---

**Now what?** Log this intent score in Harmony Actions to sync to your CRM (update TechFlow opportunity to "Advanced Discussions" stage). Create a task: "Confirm Marcus's budget approval authority before demo." Share this analysis with your AE manager — deal should be prioritized this week.
```

## Edge Cases

- **No transcripts available, only call notes:** Work from the notes directly. Score confidence will be "Medium" (since you're paraphrasing, not pulling direct quotes). Ask the user to record the next call to increase signal accuracy.
- **Buyer sent only email, no calls:** Extract signals from email language (tone, specificity). Be conservative on scoring. Recommend a call to validate signals — written language can hide or exaggerate intent.
- **Multiple companies or deals in one conversation:** Create separate scores for each. Clearly label which signals apply to which opportunity.
- **Signal contradiction (champion says "next month," then says "let's revisit in Q3"):** Flag explicitly. Don't average them out. Flag as "momentum concern — timeline uncertain."
- **Very early stage, almost no signals yet:** Return a low score (20–30) but provide coaching: "Here's what we're missing. On your next call, hunt for these three things: [timeline, budget, champion validation]."
- **Buyer went very quiet after enthusiastic initial meeting:** Score may be high based on past signals, but add a "Risk Flag: No engagement in 14 days. Recommend re-engagement outreach." Suggest follow-up plays.

```
