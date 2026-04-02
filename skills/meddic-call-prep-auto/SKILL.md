---
name: "Prep MEDDIC Call Brief"
description: "Prepare for sales calls using the MEDDIC framework — automatically pull account context, surface previous objections, and generate pre-call research brief with prepared questions. Trigger on: call prep, sales call preparation, MEDDIC prep, discovery call prep, account research, call readiness."
dependencies: []
connectors:
  - name: "Salesforce"
    reason: "Pull account history, opportunity stage, previous interactions, and company profile to ground pre-call research in real CRM data"
  - name: "HubSpot"
    reason: "Access contact info, deal history, activity timeline, and engagement scoring to understand buyer temperature and readiness"
  - name: "Harmony"
    reason: "Pull previous calls with this account or similar companies to surface objections, competitive mentions, and buying signals from past conversations"
  - name: "Google Calendar"
    reason: "Confirm attendee details, map stakeholder relationships, and review calendar history to understand who's attended past calls"
author: "Harmony"
version: "1.0.0"
icon: "sparkles"
cover: ""
screenshots: []
category: "Sales"
---

## Purpose

Automate pre-call prep using the MEDDIC framework — automatically pull account research, identify stakeholders and their interests, surface previous objections you'll likely hear again, and generate a ready-to-go call agenda with prepared questions. When Harmony conversation data exists, it pulls lessons from similar calls (objections heard, how they were handled, what worked) to prep the rep with battle-tested approaches. Works from CRM data alone when conversation data isn't available, creating a thorough research brief with questions ready to ask.

## When to Use

- 30 minutes before a discovery call — quick research + agenda refresh
- First call with a new account — deep research on company, industry, potential objections
- Call with a new stakeholder at an existing account — research their role and likely concerns
- High-stakes calls (large deals, executives, prospects from lost deals) — maximum prep to avoid missing critical information
- Preparing for back-to-back calls when you don't have time for manual research

## Instructions

### 1. Establish the call context

Ask the user:

- **When is the call?** Date/time (to understand urgency)
- **Who are we meeting with?** Name, title, company, department
- **What's the goal?** Discovery, demo, negotiation, executive alignment, other?
- **Is this a new account or existing deal?** (Determines depth of research)
- **Any prior context?** Warm intro, inbound lead, outbound outreach, customer referral?

### 2. Pull account and stakeholder research

If CRM data is available, pull:
- **Company profile:** Industry, company size, growth stage, recent news, funding/acquisition
- **Job title and function:** What does this person do, what's their likely concern?
- **Previous interactions:** Last call date, topics discussed, commitments made
- **Deal stage and history:** How long in sales process, what stage, any blockers flagged
- **Related contacts:** Other people from the account you've talked to; their concerns; relationships

If Harmony data is available, also pull:
- **Previous calls with this company or similar companies:** Objections they heard, concerns raised, buying signals
- **Competitive mentions:** What alternatives did similar companies consider? Why did they move toward or away from you?
- **Objection patterns in this industry:** What common concerns come up for this company size / vertical?

### 3. Research the stakeholder

For the specific person on the call:

- **Title and role:** What's their function? (CEO = strategy/ROI, CTO = technical fit, CFO = budget/payback)
- **Likely concerns:** Based on their role and company situation, what do they probably care about?
- **Company's recent news:** Any layoffs, funding, new product launches? (Signals their priorities)
- **LinkedIn or company bio:** Any clues on their background, industry experience, or stated priorities?
- **Previous interactions:** Did you talk to them before? What did they ask about?

Scoring: Build a "stakeholder profile" that predicts their concerns and buying criteria.

### 4. Surface relevant objections and approaches

If conversation data exists:

- **Common objections for this role/industry:** Pull from similar calls. If a CTO usually asks about security, prepare your security answer.
- **How other reps handled similar calls:** What approaches worked? What didn't?
- **Competitive context:** If similar companies mentioned your competitor, what was their concern?

Map objections to prep:
- **Likely objection:** "[From past calls: CTOs ask about security integration]"
- **How to handle:** "[From top rep's call: Answer with SOC 2 cert + reference customer in same industry]"
- **Proof to have ready:** "[SOC 2 cert link, customer reference name]"

### 5. Generate pre-call research brief

Create a document the rep can skim in 5 minutes:

- **Company snapshot:** 1 sentence on industry, size, recent news
- **Stakeholder profile:** Title, likely concerns, buying criteria
- **Previous interactions:** What happened on last call, what was promised
- **Likely objections:** Top 3 objections this stakeholder or role typically raises
- **Prepared responses:** How to answer each objection with evidence
- **Call agenda:** 5–7 prepared questions to ask in order
- **Success metric:** What should happen on this call (discovery completed, next step scheduled, etc.)

### 6. Prepare MEDDIC-aligned questions

Generate 5–7 prepared questions aligned to MEDDIC:

- **Metrics question:** "How do you measure success in [their area]?"
- **Economic buyer question:** "Who approves budget for solutions like this?"
- **Decision criteria question:** "What does an ideal solution need to do?"
- **Decision timeline question:** "When do you need to make a decision?"
- **Champion identification question:** "Who internally would be most excited about solving this?"

Questions should be open-ended and allow the stakeholder to lead. Don't ask all 7 — ask 2–3 based on where the conversation goes.

### 7. Structure for immediate use

Format the brief so the rep can review it on the way to the call and reference it during if needed.

## Output Format

# MEDDIC Call Prep — [Rep Name] · [Customer Name]
_Prepared [date] · Call [date/time]_

## Call Context
| Field | Value |
|---|---|
| **Date/Time** | [date and time] |
| **Duration** | 30 min (adjust if known) |
| **Stakeholder** | [Name, Title, Department] |
| **Call Goal** | [Discovery / Demo / Negotiation / Alignment / Other] |
| **Call Type** | [First call / Follow-up / High-stakes / Back-to-back] |

## Company Snapshot
**[Company Name]**
- **Industry:** [industry]
- **Company size:** [# employees]
- **Stage:** [Series X / Profitable / Public / Private]
- **Recent news:** [Any funding, layoff, acquisition, new product that signals priorities]

## Stakeholder Profile
**[Name] — [Title]**
- **Function:** [What they do, what team they lead]
- **Likely primary concern:** [Based on role: cost, technical fit, adoption, security, etc.]
- **Secondary concerns:** [Role-specific concerns]
- **Company context:** [How their priorities fit into company situation]
- **Buying authority:** [Do they decide, influence, approve, or recommend?]

## Previous Interactions
| Date | What Happened | Commitments | Outcome |
|---|---|---|---|
| [date] | [brief recap of call] | [who committed to what] | [did it happen?] |

## Likely Objections & Prepared Responses

### Objection #1: "[Most common concern for this role]"
**Why they might raise it:** [Context — e.g., "CTOs always ask about integration complexity because their team maintains infrastructure"]
**How to handle:** [Specific response using evidence]
**Proof to reference:** [Data, customer story, demo, certification, etc.]
**Example response:** "That's a great question. Here's how we think about it: [response]. In fact, [similar company] initially had the same concern — here's how we addressed it..."

_(Repeat for Objections #2, #3)_

## MEDDIC-Aligned Call Agenda

**Your goal this call:** [Discovery completed / Decision criteria clear / Next milestone scheduled / etc.]

**Time breakdown:** 5 min intro, 15 min discovery, 10 min close/next steps

### 1. Intro (1 min)
- "Thanks for taking the time. I want to learn more about [their challenge]. I'll ask some questions, and please jump in with anything that feels off-base."

### 2. Metrics Question (3 min)
**Question:** "[Open-ended question about how they measure success]"
**What you're listening for:** [Specific metric or goal statement]
**Follow-up if needed:** [If they're vague, ask: "And how are you tracking that today?"]

### 3. Economic Buyer Question (2 min)
**Question:** "[Who approves budget for solutions like this?]"
**What you're listening for:** [Specific name and role]
**Note:** If it's not them, ask to include that person on the next call

### 4. Decision Criteria Question (3 min)
**Question:** "[What does an ideal solution look like?]"
**What you're listening for:** [3–5 specific requirements]
**Follow-up:** "And if a solution could do [criteria 1], would that be valuable?" (Confirm each criterion matters)

### 5. Decision Timeline Question (2 min)
**Question:** "[When do you need to make a decision?]"
**What you're listening for:** [Specific date or timeframe]
**Note:** If vague ("sometime this quarter"), push: "To make this real, when would be ideal — April, May, June?"

### 6. Champion Identification (2 min)
**Question:** "[Who internally would be most excited about solving this?]"
**What you're listening for:** [Name, role, why they'd care]
**Note:** Plan to include them on next call

### 7. Close (3 min)
**Assuming they've engaged well:**
"Based on this, it sounds like [recap decision criteria]. I think [solution] could address this. I'd like to set up a [next step] to show you specifically how. Does [timeframe] work?"

**If objections arose:**
"I hear you on [objection]. Let me [address it] and send over [proof]. Let's reconnect [date] to see if it makes sense."

## Success Metric for This Call
**You'll know this call succeeded when:**
- [ ] You confirm the top 3 decision criteria
- [ ] You identify the economic buyer (or know why they're not on the call)
- [ ] You get a decision timeline (even if "May")
- [ ] You have a next step scheduled (demo, proposal, multi-stakeholder call, etc.)

**If all 4 happen:** Call was successful. Schedule the next milestone.
**If 3 happen:** Good progress. Follow up with the missing piece via email.
**If 2 happen:** They're interested but unclear. Send research/resources and schedule another call.

## Pre-Call Checklist
- [ ] Sent calendar invite with Zoom link (if virtual)
- [ ] Reviewed company news and stakeholder profile (takes 3 min)
- [ ] Reviewed previous interactions and commitments (any credibility issues?)
- [ ] Prepared objection responses with evidence ready to share
- [ ] MEDDIC questions are written down (not memorized — helps if you blank on delivery)
- [ ] Confirmed attendees and their roles (who else is joining?)
- [ ] Tested Zoom/Teams if virtual (nothing breaks credibility like tech issues)

## Now What?

- **During call:** Take notes on their answers to MEDDIC questions. Flag objections you didn't prepare for.
- **Immediately after:** Write down the 3–5 decision criteria they mentioned. Review which MEDDIC steps were clear and which need follow-up.
- **Within 2 hours:** Send a follow-up email with next steps confirmed and any proof/resources promised
- **Log in CRM:** Update opportunity with decision criteria, economic buyer name, and decision timeline
- **Debrief with manager:** Share how stakeholder responded to objection handling; flag if new objections came up

---

## Example

**User:** "I have a call tomorrow at 2pm with Maya Patel, VP Operations at DataFlow (Series B, 200 people, in logistics tech). This is a first call. I don't have previous conversation data. Give me a prep brief."

**Output:**

# MEDDIC Call Prep — [Rep Name] · DataFlow Inc.
_Prepared 2026-03-21 · Call tomorrow 2pm PT_

## Call Context
| Field | Value |
|---|---|
| **Date/Time** | Mar 22, 2:00pm PT (30 min) |
| **Duration** | 30 min |
| **Stakeholder** | Maya Patel, VP Operations |
| **Call Goal** | Discovery / Initial qualification |
| **Call Type** | First call (warm intro from mutual connection) |

## Company Snapshot
**DataFlow Inc.**
- **Industry:** Logistics tech / Supply chain visibility
- **Company size:** 200 employees
- **Stage:** Series B (likely $30–100M ARR estimate)
- **Recent news:** Raised $40M Series B in Nov 2025 (6 months in); likely focused on growth and feature expansion

## Stakeholder Profile
**Maya Patel — VP Operations**
- **Function:** Runs day-to-day logistics operations for DataFlow's platform; likely manages 20–30 person team; owns customer success and operational efficiency
- **Likely primary concern:** Team efficiency, customer adoption, time-to-value for customers (her team trains customers)
- **Secondary concerns:** Scalability (as they grow to 300+ employees), tool integration, cost control
- **Company context:** Series B means they're scaling fast; Maya probably dealing with growing customer base and pressure to scale her team efficiently
- **Buying authority:** Recommends or approves ops tools; likely needs CFO approval for budget but has strong voice

## Previous Interactions
None (first call). But check: Was this a warm intro from someone? If so, note what they said about her.

## Likely Objections & Prepared Responses

### Objection #1: "We already have a process for this"
**Why she might raise it:** VP Ops gets protective of processes they've built. Changing tools = re-training the team.
**How to handle:** Don't position as "replace," position as "enhance." Acknowledge the process is working, but probe on pain.
**Proof to reference:** Customer case study of a logistics ops team that integrated with existing process (not replaced it)
**Example response:** "I hear you — you've built a solid operation. I'm curious: where do you see the team spending the most time today? [Listen.] That's exactly what we help logistics teams optimize. We actually integrate *with* your current process, not replace it. [Company X] kept their playbook and cut time-on-task by 40%."

### Objection #2: "This seems complex to set up"
**Why she might raise it:** Series B ops leaders are scaling fast and don't have time for big implementations.
**How to handle:** Lead with speed and ops-focused setup (not technical).
**Proof to reference:** Average time-to-value (should be <2 weeks for ops team)
**Example response:** "I understand — you're probably not keen on a 3-month project. Here's our advantage: your ops team sets this up, not engineering. Most of our customers are live in 5–7 days and seeing efficiency gains in week 2. We did the complex part in the product; you get simplicity."

### Objection #3: "How does this integrate with Salesforce?" (likely given she manages customer data)
**Why she might raise it:** VP Ops at a SaaS company cares deeply about data flow and integration.
**How to handle:** Have the integration details ready; emphasize "zero maintenance" (not her problem).
**Proof to reference:** API documentation, customer reference (another SaaS company that integrated via Salesforce)
**Example response:** "Good question. We have a native Salesforce connector — your data syncs automatically both ways. You don't maintain it; we do. We also have customers integrating via Zapier if you prefer. Want me to walk you through the technical details, or would you prefer I set up a call with your engineering team first?"

## MEDDIC-Aligned Call Agenda

**Your goal this call:** Understand her operational pain, confirm decision criteria, identify if there's budget/timeline alignment.

**Time breakdown:** 3 min intro, 20 min discovery questions, 5 min close/next steps, 2 min buffer

### 1. Intro (3 min)
- "Thanks for taking the time, Maya. I know you're busy scaling. My goal today is just to understand how your operations team is evolving and whether we might be a fit. I'll ask some questions, and feel free to push back or jump ahead."

### 2. Metrics Question (3 min)
**Question:** "As VP Operations in a Series B, what's your biggest metric right now — are you optimizing for time-to-onboard, cost-per-customer, or team capacity?"
**What you're listening for:** Which metric she cares about most (will guide what you emphasize)
**Follow-up if needed:** "And how are you tracking that today?"

### 3. Economic Buyer Question (2 min)
**Question:** "If you found a solution that solved [the metric she cares about], who would need to sign off on it — is that you, or does it go through finance/your CEO?"
**What you're listening for:** Decision authority (is she the buyer, or does she recommend to CFO?)
**Note:** If it's CFO, ask to loop them in early or plan a follow-up call

### 4. Decision Criteria Question (5 min)
**Question:** "Tell me about your ideal ops tool. What would it need to do?"
**What you're listening for:** 3–5 specific requirements (e.g., Salesforce integration, real-time reporting, automation)
**Follow-ups:** For each criterion, ask "And if a tool could do [criterion], how impactful would that be?" (Confirm it matters)

### 5. Decision Timeline Question (2 min)
**Question:** "If we were a great fit, when would you want to have this live?"
**What you're listening for:** Specific month or quarter (not "sometime in Q2")
**Note:** Push for specificity: "Are we talking April, May, or June?"

### 6. Champion Identification (2 min)
**Question:** "If we move forward, who internally would be most excited about this — one of your team leads, or someone else?"
**What you're listening for:** Name of someone who'd advocate for this
**Plan:** Include them on next call or get their email for a follow-up

### 7. Close (2 min)
**If positive signals:**
"Based on this, it sounds like you're looking to [recap metric] by [timeline]. I think [solution] is a strong fit. What I'd suggest: let me show you how [Company X] solved this. Can we schedule 30 minutes next week for a short demo + more technical questions? Would Tuesday or Wednesday work?"

**If uncertain:**
"Thanks for walking me through this. I hear the priority is [metric]. Let me think about how we'd approach this and send over some resources. Can we hop back on [date] to discuss?"

## Success Metric for This Call
**You'll know this call succeeded when:**
- [ ] You confirm the top 2–3 operational metrics she cares about
- [ ] You know if she's the buyer or if CFO is involved
- [ ] You have a sense of timeline (this quarter or next?)
- [ ] You have a next step (demo, team introduction, follow-up call)

## Pre-Call Checklist
- [ ] Review DataFlow's website and recent Series B announcement (understand company growth story)
- [ ] Find Maya on LinkedIn and review her background (any prior SaaS experience? That signals sophistication)
- [ ] Test Zoom link and audio/video (nothing kills credibility like tech issues)
- [ ] Have objection responses written down (not memorized)
- [ ] Block 30 min + 15 min after for notes (don't back-to-back calls)
- [ ] Confirm: Does she know the call is happening? (Check email confirmation)

## Now What?

- **During call:** Take notes on: (1) metrics she cares about, (2) economic buyer confirmation, (3) decision timeline, (4) next step commitment
- **Immediately after:** Log call summary in CRM with decision criteria and timeline
- **Within 1 hour:** Send follow-up email: "Thanks for the conversation, Maya. Here's what I understood: [recap]. I'm going to send over [promised resource] and we'll schedule the demo for [date]. In the meantime, let me know if questions come up."
- **Send demo**: Within 24 hours
- **Schedule follow-up**: Book the demo debrief before you hang up the first call (increases follow-through rate)

---

## Edge Cases

- **Stakeholder cancels 5 minutes before the call:** Don't panic. Send: "No worries! I know things come up. Let's reschedule for [3 dates/times]. Which works best?" Follow up with executive sponsor if it's a high-stakes deal.
- **Call attendee isn't who you expected:** Ask early: "Thanks for jumping on. Before we dive in, are you the right person for this conversation, or should we include [expected person] as well?" Pivot gracefully if you have the wrong stakeholder.
- **Stakeholder asks a question you don't know the answer to:** Never fake it. "That's a great question — I want to give you the right answer. Let me connect you with [team member] who can walk through that in detail. What works better, email or a quick 15-min call?" Builds trust.
- **Call is getting cut short (they have to jump off):** Ask your highest-priority MEDDIC question before they leave: "Before you go — one quick question: if we solve [their pain], when would you want this live?" Get that one data point.
- **You realize halfway through they're not a fit:** Don't awkwardly finish the call. Honest approach: "I appreciate you taking the time. Based on what you've shared, I want to be respectful of your time — it sounds like [constraint] might be a blocker. Does that feel right?" If they confirm, say: "Let me think about whether we're the right fit and get back to you. In the meantime, [small helpful action]." Ends on good terms.
- **Stakeholder is silent / not engaging:** Probably nervous or skeptical. Reduce the pressure: "I realize I've been asking a lot of questions. Is there something specific you'd like to explore?" Open it up. Often they'll share their real concern once you stop "selling."
