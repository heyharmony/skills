---
name: "Qualify Inbound Lead"
description: "Score and qualify inbound leads in real-time — is this a good fit for sales, or should it go to nurture? Rate on ICP fit, buying intent, company size, and budget signals. Provide a recommended action: prioritize, nurture, or pass. Trigger on: lead qualification, qualify lead, should we pursue this, lead scoring, good fit, sales qualified lead."
dependencies: []
connectors:
  - name: "HubSpot"
    reason: "Import lead qualification scores directly into contact records; flag high-quality leads for immediate sales follow-up; automate nurture sequences for lower-scoring leads"
  - name: "Salesforce"
    reason: "Sync lead scores to Salesforce leads; tag with ICP fit; auto-assign to appropriate queue (sales, nurture, or recycling)"
  - name: "Slack"
    reason: "Post real-time alerts to sales channel when a high-quality lead comes in so the team responds within minutes instead of hours"
  - name: "Gmail"
    reason: "Track response time to inbound inquiries; identify which leads convert and when to adjust qualification criteria"
author: "Harmony"
version: "1.0.0"
icon: "sparkles"
cover: ""
screenshots: []
category: "Sales"
---

## Purpose

Evaluate inbound leads against your ICP and buying signals to determine if they're ready for sales or should enter nurture. Scores leads on company fit, role fit, buying intent, and deal potential — and recommends whether to prioritize (pass to sales immediately), nurture (automated sequences), or pass (not a fit). Works from lead information provided (company, role, email source, inquiry details) and becomes richer with Harmony conversation data (if you've talked to similar leads before, extract what patterns indicate high quality).

## When to Use

- Someone fills out your demo form — should AE call them in the next hour, or can marketing nurture them?
- Inbound demo request during off-hours — qualify them so the morning team knows who's hot vs. who can wait
- Lead from a partner/referral source — validate they're a good fit before the partner thinks you're ignoring them
- Large spike in inbound (after webinar, content, or ad campaign) — quickly separate hot leads from tire-kickers
- Unusual inquiry (very small company, very large company, wrong use case) — is it worth investigating further?

## Instructions

### 1. Gather lead information

Ask what data is available:
- **Company name and size** — How many employees, estimated ARR, stage (startup, Series X, public)?
- **Lead role and seniority** — Title, function, decision authority?
- **Source** — Where did they come from? (Form, partner referral, organic search, ad campaign, content?)
- **Explicit intent signals** — What did they say they want to do? (Demo, pricing info, pilot, technical evaluation?)
- **Timeline** — Did they say when they want to move? (This month, next quarter, exploring?)
- **Company signals** — Any signs of buying urgency? (Funding round, new hire, product launch, process change?)

If Harmony conversation data exists, pull:
- Previous conversations with similar companies/roles — what signals indicated they were high-quality?
- Patterns in companies that converted vs. churned — what made the difference?
- Typical sales cycle for this ICP — are 2-week timelines realistic, or is it usually 4–6 months?

### 2. Score on ICP fit

Evaluate the lead against your ideal customer profile:
- **Company size (fit/no-fit):** Does the company size match your ICP? (E.g., your ICP is 50–500 people; a 10-person startup is a no-fit)
- **Industry/vertical (fit/no-fit):** Is the company in an industry you serve or support? (E.g., your ICP is B2B SaaS; a restaurant is no-fit)
- **Use case (fit/no-fit):** Does their stated problem match your core solution? (E.g., you sell expense management; they need HR software — no-fit)
- **Role and buying authority (strong/medium/weak):** Is the lead a decision maker, influencer, or end user?

Scoring: Fit = +2, Medium fit = +1, No fit = 0

### 3. Score on buying intent and signals

Evaluate signals that indicate urgency or seriousness:
- **Explicit intent** (+3): Demo request, pricing question, technical evaluation, pilot interest
- **Implicit intent** (+2): Attending webinar, downloading content, filling out form, asking general question
- **Low intent** (+1): Visiting website, vague inquiry ("tell me about your product")
- **Timeline** (+3 if immediate, +2 if next quarter, +1 if exploring)
- **Company signals** (+2 if recent funding, new hire, product announcement; +1 if none mentioned)
- **Personal urgency** (+2 if they say "urgent" or "this month"; +1 if "whenever"; 0 if no timeline)

### 4. Assess deal potential

Estimate the deal size and cycle:
- **Expected deal size:** Based on company size and use case (e.g., 50-person SaaS company, 18-month cycle = likely $50K–150K ACV)
- **Sales cycle length:** How long does it typically take companies like this to buy? (Early-stage = fast, Enterprise = slow)
- **Number of stakeholders:** Does this role need to get approval from others?
- **Budget year visibility:** In what fiscal period would they likely buy?

### 5. Generate recommendation

Based on scores and assessment:
- **Prioritize (Score 8+):** Sales should call within 2 hours. High ICP fit + explicit intent + immediate timeline = hot lead.
- **Engage (Score 5–7):** Sales can call same-day or next-day. Good fit + interest, but timeline is flexible or authority is unclear.
- **Nurture (Score 3–4):** Send to automated nurture sequence. Decent fit but low immediacy, or good intent but role is too junior to buy.
- **Pass (Score <3):** Not a fit now. Low ICP fit, low intent, or both. Recycle to nurture list quarterly to catch them when they become buyers.

### 6. Create output

Format as a scored lead profile with fit assessment, signals, and clear recommendation.

## Output Format

# Lead Qualification Report
_Lead: [Name] | Company: [Company] | Date: [Today]_

## Lead Profile
- **Name:** [Name]
- **Title:** [Title]
- **Company:** [Company Name]
- **Company size:** [Employee count]
- **Industry:** [Industry]
- **Source:** [Where they came from]

## ICP Fit Assessment

| Criterion | Your ICP | Lead Profile | Fit |
|-----------|----------|--------------|-----|
| Company size | [e.g., 50–500 people] | [Company size] | ✓ / ✗ |
| Industry/vertical | [e.g., B2B SaaS] | [Industry] | ✓ / ✗ |
| Core use case | [e.g., Expense management] | [Their stated problem] | ✓ / ✗ |
| Decision role | [e.g., VP Finance, CFO] | [Their title/authority] | Strong / Medium / Weak |

**ICP fit score:** [X/4]

## Intent & Buying Signals

| Signal | Score | Evidence |
|--------|-------|----------|
| **Explicit intent** | +3 / +2 / +1 / 0 | [Demo request, pricing question, etc.] |
| **Timeline** | +3 / +2 / +1 / 0 | [This month, next quarter, exploring] |
| **Company signals** | +2 / +1 / 0 | [Funding, hiring, product launch, or none] |
| **Personal urgency** | +2 / +1 / 0 | [Direct quote or implied] |

**Intent score:** [X/8]

## Overall Qualification Score

**Total score: [X/10]**

- Fit: [X/4]
- Intent: [X/8]

## Recommendation

**Action: [PRIORITIZE / ENGAGE / NURTURE / PASS]**

**Reasoning:**
[1–2 sentences explaining why this score and what it means for sales action]

---

**If Prioritize:**
- Sales should call within 2 hours
- Key questions for the call: [List 3–4 discovery questions]
- Expected next step: [Demo, technical evaluation, proposal, etc.]

**If Engage:**
- Sales can call same-day or next-day
- Set expectation for follow-up: [When]
- If they don't respond in 3 days, [Move to nurture]

**If Nurture:**
- Add to [nurture sequence name]
- Best next touch: [Educational content, webinar invite, etc.]
- Re-qualify in: [30/60/90 days]

**If Pass:**
- Reason: [What disqualifies them]
- Recycle date: [When to check back] or [Trigger that would re-qualify them]
- Nurture strategy: [Annual re-engagement, content track, or archive]

## Red Flags & Fit Issues

- [Issue]: [What it indicates]

## Good Signals

- [Positive signal]: [Why it matters]

## Deal Potential Estimate

- **Estimated ACV:** [e.g., $50K–150K]
- **Likely sales cycle:** [e.g., 90–120 days]
- **Stakeholder count:** [e.g., 3–5 approvers]
- **Budget year likely:** [e.g., Q3 2026]

## Follow-Up Notes

[Any additional context or recommendations for the sales rep]

---

## Example

**Input:** Sarah Johnson, VP Operations at Acme Corp (180 people), filled out demo form this morning. Said "We need to streamline our expense management process and we're looking at solutions this quarter."

**Output:**

# Lead Qualification Report
_Lead: Sarah Johnson | Company: Acme Corp | Date: 2026-03-22_

## Lead Profile
- **Name:** Sarah Johnson
- **Title:** VP Operations
- **Company:** Acme Corp
- **Company size:** ~180 employees
- **Industry:** Mid-market B2B SaaS
- **Source:** Demo form (organic visit)

## ICP Fit Assessment

| Criterion | Your ICP | Lead Profile | Fit |
|-----------|----------|--------------|-----|
| Company size | 50–500 people | ~180 people | ✓ Perfect fit |
| Industry/vertical | B2B SaaS | B2B SaaS (fintech) | ✓ Perfect fit |
| Core use case | Expense management | Expense management | ✓ Perfect fit |
| Decision role | CFO, VP Finance, VP Ops | VP Operations | ✓ Strong fit |

**ICP fit score:** 4/4 — Textbook ICP match.

## Intent & Buying Signals

| Signal | Score | Evidence |
|--------|-------|----------|
| **Explicit intent** | +3 | Demo form submission (high intent signal) |
| **Timeline** | +3 | "Looking at solutions this quarter" = immediate |
| **Company signals** | +1 | No mention of funding/hiring; implies process review |
| **Personal urgency** | +2 | "Need to streamline" = pain is present |

**Intent score:** 9/10 — Strong buying intent.

## Overall Qualification Score

**Total score: 9.5/10 — Highly Qualified**

- Fit: 4/4
- Intent: 9/10

## Recommendation

**Action: PRIORITIZE**

**Reasoning:**
Sarah is in your ideal ICP (mid-market SaaS, right title, right use case), filled out a demo form (explicit intent), and said she's evaluating solutions this quarter (immediate timeline). This is a hot lead. Sales should call within 2 hours while she's still thinking about the problem.

---

**Immediate actions for sales:**
- Call Sarah within 2 hours with: "Hi Sarah, thanks for filling out the form. I wanted to reach out directly — what's driving the expense management project right now?"
- Expected next step: Demo call or technical deep-dive this week
- Goal: Get her to see the product, understand her timeline and stakeholders, identify the buying committee

**Key discovery questions for the call:**
1. "You mentioned needing to streamline expense management — what's the main pain point right now?" (Get her #1 problem)
2. "Walk me through your current process — how many people are involved?" (Understand workflow + stakeholder count)
3. "When you say 'this quarter' — does that mean you need to decide by end of Q2, or implement by end of Q2?" (Clarify timeline)
4. "Who else is involved in the decision — Finance, Procurement, IT?" (Map the committee)

**If she agrees to demo:**
- Schedule for this week
- Send prep email with a brief agenda: "We'll show you how [product] would handle your expense workflow, answer any questions, and map out next steps if it looks like a fit."
- Sales engineer or product person should join

---

## Potential Next Steps

1. **Today:** Sales calls Sarah (target: <2 hours)
2. **This week:** Demo call (30–45 min)
3. **Next week:** Technical evaluation or proposal (if demo goes well)
4. **Following week:** Close or move to legal/procurement

---

## Red Flags

- None detected. This lead is strong.

## Good Signals

- **Perfect ICP match** — Company size, industry, and use case all align perfectly
- **Explicit intent** — Demo form is a strong signal of active evaluation
- **Relevant title** — VP Operations is the right decision maker for this use case
- **Immediate timeline** — "This quarter" means she's in active buying mode
- **Clear problem statement** — She knows what she needs to solve

## Deal Potential Estimate

- **Estimated ACV:** $75K–150K (180-person SaaS company, 18-month deal)
- **Likely sales cycle:** 90–120 days (mid-market, Q2 close likely if she moves fast)
- **Stakeholder count:** 3–4 (VP Ops + Finance + potentially IT)
- **Budget year likely:** Q2–Q3 2026 (she said "this quarter")

---

## Follow-Up Notes

This is a high-priority lead. If first call is positive, move fast — get her to demo this week, proposal by mid-April, and close by end of Q2. Mid-market companies often move faster than enterprise, and she's already in active evaluation mode.

---

## Edge Cases

- **Lead came from competitor's event:** Check if they're evaluating you or just gathering intel. If it's competitive research, still qualify but adjust timeline expectations (might take longer).
- **Very large company (5,000+ people):** Outside normal ICP but might be high value. Engage AE to assess — could be bigger opportunity if it's a new division or pilot.
- **Very small company (10 people):** Below ICP size. Probably not enough budget. Option: nurture until they grow, or pass and recycle annually.
- **Vague inquiry ("Tell me about your product"):** Low explicit intent, but might be serious researcher. Qualify on ICP fit + traffic source. If traffic source is relevant (industry publication, peer recommendation), engage. If random web search, nurture.

## Recycle & Re-qualification

**If this lead is passed or nurtured:**
- Check back when [specific trigger]: Funding round announcement, product launch, team expansion, or quarterly cadence (every 90 days)
- Re-qualify using this same form to see if context has changed
- If trigger occurs (e.g., they raise funding), bump back to Engage or Prioritize

---

## Using This Score

- **Sales:** Use the recommendation to know how urgently to call and what to discover first
- **Marketing:** Use the score to know if lead should go to sales or stay in nurture; optimize lead gen to produce more high-scoring leads
- **Leadership:** Use aggregate scores to track quality of inbound (are we getting more 8+ leads, or more 3–4 leads?)
