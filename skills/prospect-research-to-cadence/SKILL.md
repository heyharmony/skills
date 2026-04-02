---
name: "Turn Research Into Outreach Cadence"
description: "Convert prospect research into personalized outreach sequences — based on company signals, buying signals from calls, and ICP fit. Creates email/call cadences grounded in actual research and prior conversations. Trigger on: outreach sequence, personalized cadence, multi-touch sequence, prospect strategy, research-based outreach, buying signal followup."
dependencies: []
connectors:
  - name: "HubSpot"
    reason: "Pull prospect company data, contact history, past interactions to personalize outreach and avoid duplicate efforts"
  - name: "Salesforce"
    reason: "Cross-reference opportunity records to ensure outreach aligns with existing deals or previous conversations"
  - name: "Gmail"
    reason: "Track sent emails and responses to measure cadence effectiveness and update engagement status"
  - name: "LinkedIn"
    reason: "Pull prospect title, company signals, recent activity, and mutual connections to inform personalization and timing"
author: "Harmony"
version: "1.0.0"
icon: "sparkles"
cover: ""
screenshots: []
category: "Sales"
---

## Purpose

Create a personalized, multi-touch outreach cadence that's grounded in actual research about the prospect and (when available) prior conversation signals. The skill converts prospect research — company signals, hiring, funding, job changes, industry trends — into specific, credible reasons to reach out at the right time. When conversation data exists (discovery calls, cold calls, webinar attendee interactions), the skill pulls buying signals and conversation history to inform the cadence and personalize the message. When conversation data doesn't exist, the skill builds the outreach sequence on research and creates prompts for discovery calls to gather initial signals.

## When to Use

- Building an outreach sequence for a new prospect after research shows they're a fit
- Following up on a buying signal (prospect mentioned a pain, attended a webinar, viewed pricing page) with a timely cadence
- Creating a re-engagement sequence for a prospect who went dark after an initial conversation
- Designing a multi-touch campaign targeting a specific company segment or buyer profile
- Personalizing outreach after a prior conversation or initial discovery call ended without commitment

## Instructions

### 1. Gather prospect and research context

Ask what data the user has:

- **Prospect profile:** Name, title, company, industry, company size, location
- **Company signals:** Recent hiring, funding, product launches, earnings, leadership changes, news mentions?
- **Buying signals (if any prior contact):** Did they open emails? Click links? View pricing? Attend webinar? Get a call?
- **Prior conversations:** Any discovery calls, demos, webinar interactions with this prospect or company?
- **ICP fit assessment:** How well does this prospect match your ideal customer profile? (e.g., "Perfect fit," "Close fit," "Strategic but different model")
- **Goal of outreach:** What's the goal? (discovery call, demo, partnership conversation, reconnect)

If Harmony conversation data exists, pull:
- Prior calls or interactions with this prospect or company
- Buying signals mentioned ("We're evaluating tools for this," "Budget is available in Q2")
- Objections or concerns raised
- Decision timeline discussed
- Stakeholders or other people involved
- Reason conversation went cold (if applicable)

### 2. Build research-backed reasons to reach out

For this specific prospect, identify:

- **Company signal:** What changed at their company that creates urgency? (e.g., "They just hired a VP of Ops — new person probably evaluating their tech stack")
- **Industry trend:** What's happening in their industry that affects them? (e.g., "Their industry is moving to API-first; we enable that")
- **Competitive context:** Is a competitor in their space doing something? (e.g., "Competitor just raised $X; procurement teams in this space are evaluating tools")
- **Mutual connection:** Do you have a mutual connection who could introduce you? (higher credibility)
- **Prior interaction:** If you've talked before, what was unresolved? (e.g., "They said 'Let's reconnect in Q2' — now it's Q2")
- **Personal signal:** Did the prospect do something that indicates buying readiness? (job change, company news, content engagement)

Use research to build a specific, credible hook for each touch — not generic "We help companies like you" but "I noticed you just hired a VP of Ops; usually that means you're evaluating your ops stack — thought you might be interested in a quick conversation."

### 3. Define cadence strategy

For this specific prospect, determine:

- **Cadence length:** How many touches? (typically 5–7 for new prospect, 3–4 for warm/previous contact)
- **Touch mix:** Emails, calls, LinkedIn messages, warm intros? (Sequence should vary channels)
- **Timing:** Days between touches? (typically 3–5 days between touches; don't go dark for 2+ weeks)
- **Success metrics:** What counts as "engaged"? (opened email, clicked link, replied, agreed to call)
- **Escalation path:** If prospect doesn't respond after X touches, do you stop or try a different approach/angle?

### 4. Create personalized touch sequence

For each touch, specify:

- **Channel:** Email, call, LinkedIn message, warm intro (and by whom?)
- **Timing:** When in the sequence, and when (day of week/time)?
- **Hook/reason:** The specific research or signal that makes this credible
- **Call-to-action:** What do you want them to do? (book call, reply with thoughts, forward to colleague)
- **Personalization:** What makes this specifically about them, not a template?

If prior conversation data exists, reference it: "You mentioned on our Feb 15 call that you were evaluating tools for X. Following up because..."

### 5. Plan for outcomes and branches

For each possible response, outline next steps:

- **No response after full cadence:** Do you stop, try again in 3 months, or try a different angle?
- **Negative response:** How do you handle "Not interested now"? (Archive, try later, ask why?)
- **Positive response:** What's the next step? (Calendar invite for call, send additional info, intro to sales?)
- **Partial response:** (Clicked email but didn't reply) — Does this trigger a follow-up touch or escalation?

## Output Format

# Prospect Outreach Cadence — [Prospect Name] at [Company]
_Prepared [date] · Goal: [discovery call / demo / partnership conversation]_

## Prospect Summary
**Name:** [Prospect name] | **Title:** [Title]
**Company:** [Company] | **Industry:** [Industry] | **Size:** [# employees]
**ICP Fit:** [Perfect / Close / Strategic / Stretch]

## Prospect Research
**Company Signals:**
- [Signal 1 with source, e.g., "VP of Ops hired — LinkedIn, Mar 2026"]
- [Signal 2 with source]
- [Signal 3 with source]

**Prior Interactions (if any):**
- [Date, type of interaction, outcome, next steps discussed]

**Buying Signals (if any):**
- [Signal 1, e.g., "Attended webinar on process automation, Feb 15"]
- [Signal 2, e.g., "Opened email about API integration, clicked link"]

## Outreach Strategy
**Goal:** [Specific goal: discovery call, demo request, partnership exploration]
**Cadence:** [# touches over # weeks]
**Success Definition:** [What counts as success? e.g., "Agreed to 30-min call"]
**Escalation Rule:** [If no response after # touches, then: stop / try again later / switch approach]

## Touch Sequence

### Touch 1: [Channel — Email / Call / LinkedIn / Warm Intro]
**Timing:** [Day 1 of cadence, [Day of week, e.g., Tuesday]]
**Hook/Why Now:** [The specific research or signal that makes this timely]
**Message Angle:** [Brief description of what you'll say/write]
**CTA:** [What you want them to do]

**Message Template:**
> [Actual email/call script — personalized, credible, specific to this prospect]

### Touch 2: [Channel]
**Timing:** [Day 4]
**Hook/Why Now:** [If they didn't respond to touch 1, why are you reaching out again? What's different?]
**Message Angle:** [Slight variation on angle, or new information]
**CTA:** [Call to action]

**Message Template:**
> [Actual message, slightly different angle than Touch 1]

_(Repeat for each touch in sequence)_

## Response Scenarios & Next Steps

| Scenario | Indicator | Next Step |
|----------|-----------|-----------|
| **Engaged** | Responded to email, clicked link, or agreed to call | Send calendar invite for discovery call; prep talking points |
| **Partially engaged** | Opened email but didn't click; viewed LinkedIn message but no reply | Send Touch 3 with new angle or additional info |
| **No response after full cadence** | 0 interactions after all 6 touches | Archive prospect; try again in 90 days with new company signal |
| **Negative response** | "Not interested" or "Remove from list" | Respect request; document in CRM; note why for future reference |
| **Warm intro secured** | Mutual contact willing to introduce | Send warm intro message with both parties cc'd; let intro take priority over cold email |

## Success Metrics & Tracking
- **Response rate target:** [X]% (industry benchmark: 5–10% for cold outreach)
- **Meeting rate target:** [X]% of responses (industry benchmark: 20–30% of engaged prospects book a call)
- **Tracking method:** HubSpot, Gmail, LinkedIn — log each interaction and reason (opened, clicked, replied, ignored)

## Now What?

- **This week:** Send Touch 1 on [specific day]; monitor for response
- **Tracking:** Log all opens, clicks, replies in CRM; update cadence based on response
- **If engaged:** Prep for discovery call; review prior conversation notes (if any) before meeting
- **If no response after cadence:** Archive prospect; set calendar reminder to re-research in 90 days

---

## Example

**User:** "I've identified a prospect at CloudScale Corp — VP of Ops (Sarah Chen). The company just hired her 2 weeks ago; they're a perfect ICP fit. I had a discovery call with their previous Ops Lead 6 months ago that went cold. I want to re-engage Sarah with a personalized cadence that acknowledges she's new but connects back to what we discussed with her predecessor."

**Output:**

# Prospect Outreach Cadence — Sarah Chen at CloudScale Corp
_Prepared 2026-03-22 · Goal: 30-minute discovery call to understand their ops stack and automation opportunity_

## Prospect Summary
**Name:** Sarah Chen | **Title:** VP of Operations
**Company:** CloudScale Corp | **Industry:** Financial Services | **Size:** 350 employees
**ICP Fit:** Perfect (mid-market, process-heavy, hiring Ops leadership = building out function)

## Prospect Research
**Company Signals:**
- Sarah Chen hired as VP of Ops, February 2026 (LinkedIn profile updated, company announcement)
- CloudScale raised $25M Series B in January 2026 (TechCrunch article)
- Expanded from 200 to 350 employees in past 12 months (growth signal = likely investing in operations)
- Cloud infrastructure company (API-first = good fit for our integration capabilities)

**Prior Interactions:**
- December 2025: Discovery call with Jason Martinez (Ops Manager at CloudScale). Discussion: They're doing lots of manual process work (data syncs between 5 tools, manual approval workflows). Jason said "We need to automate this but don't have a formal Ops strategy yet." Said: "Let's reconnect in Q2 when we have a new Ops lead who can make decisions." (Perfect setup for Sarah!)

**Buying Signals:**
- Company is actively hiring ops/automation staff (2 job postings on LinkedIn for "Process Improvement Specialist")
- Sarah's background: VP Ops at fintech company (Relay), likely has automation experience and budget authority
- Growth trajectory suggests they're investing in operations infrastructure

## Outreach Strategy
**Goal:** Get Sarah on a 30-minute call to discuss CloudScale's process automation opportunity; eventually explore whether they'd benefit from our platform
**Cadence:** 6 touches over 3 weeks (email, call, email, LinkedIn, warm intro attempt, final email)
**Success Definition:** Sarah agrees to 30-minute discovery call within 3 weeks
**Escalation Rule:** If Sarah doesn't respond after all 6 touches, set reminder to try again in 60 days (likely in transition/busy phase as new VP); watch for new company signals in September

## Touch Sequence

### Touch 1: Email — Welcome to CloudScale + Context from Predecessor
**Timing:** Monday, March 25, 9 AM PT
**Hook/Why Now:** Sarah just started (2 weeks in); likely in mode of understanding current state. Previous Ops lead mentioned needing automation strategy. Perfect moment.
**Message Angle:** "Congratulations on new role; we just talked with Jason about your automation opportunity — wanted to reconnect with you"
**CTA:** Quick intro call to understand where you're landing on ops priorities

**Message Template:**
> Subject: Quick question about your process automation roadmap @CloudScale
>
> Hi Sarah,
>
> Congratulations on joining CloudScale as VP of Operations! I came across your profile and noticed you just started—perfect timing.
>
> In December, I had a conversation with Jason Martinez (previous Ops Manager) about CloudScale's plans to automate manual processes across your stack. He mentioned you were hiring a VP of Ops to formalize the strategy—and that's you!
>
> Rather than start from scratch, I thought it'd be helpful to loop back in. We've learned a lot since talking with Jason about the specific integration gaps they were facing, and it might save you time in your ops strategy.
>
> Would you be open to a quick 20-minute call next week? I'm happy to share what we learned from Jason and see if it's relevant to your roadmap.
>
> Let me know what works—
> [Your name]

### Touch 2: Call — If No Response After Touch 1
**Timing:** Wednesday, March 27, 2 PM PT (3 days after email)
**Hook/Why Now:** Giving her time to read email; now making it harder to ignore via phone
**Message Angle:** "Trying to reach you quickly to share context from your predecessor—might save you time"
**CTA:** Get her on the phone, even briefly

**Call Script:**
> "Hi Sarah, this is [Name] with [Company]. I'm reaching out because I had a conversation with your predecessor, Jason, back in December about process automation at CloudScale—and now that you're in the VP Ops role, I wanted to reconnect and share what we learned about your specific gaps. I know you're new and swamped, but I promise this will save you time. Do you have 10 minutes this week for a quick call?"
>
> [If yes:] Great! Let me send over a calendar invite for Thursday at [time]
> [If no/busy:] Totally understand. What day next week works best? Or I can send something over for you to look at first?
> [If no direct answer:] No problem. I'll send a quick summary email and maybe we can find 20 minutes later this week or next.

### Touch 3: Email — Summary of Prior Context + New Signal
**Timing:** Friday, March 29 (if no call happened)
**Hook/Why Now:** Giving her the info she needs to make a decision without a live conversation (lower barrier)
**Message Angle:** "Here's what we learned from Jason about your process gaps; also noticed your recent funding and team expansion"
**CTA:** Read summary, reply with thoughts or calendar availability

**Message Template:**
> Subject: CloudScale ops automation opportunity—what Jason shared (saves you research time)
>
> Hi Sarah,
>
> Following up on my earlier note. Since you might be transitioning in and building out your ops strategy, I thought it'd be helpful to share directly what Jason told us in December about your current state.
>
> **The gap:** CloudScale is currently syncing data manually between 5 tools (Salesforce, internal database, approval system, reporting warehouse, GL). Each sync takes 2–3 hours/week and errors happen regularly. Approval workflows are also manual (emails, spreadsheets). Jason said the team spends ~40% of their time on manual process work that should be automated.
>
> **Why it matters:** With your recent $25M raise and 75% headcount growth, scaling your ops without automation will require hiring significantly more ops staff. Solving this now could free up your team to focus on strategy instead of maintenance.
>
> **What we do:** We automate exactly this—multi-tool integrations and approval workflows—without custom code.
>
> I suspect this might be on your roadmap. Would be happy to do a quick 20-minute call to see if we're a fit for your Q2 planning.
>
> Availability this or next week?
>
> [Your name]

### Touch 4: LinkedIn Message — Personal, Lower-Pressure
**Timing:** Tuesday, April 2 (if no email response)
**Hook/Why Now:** Different channel; feels less formal; sometimes breaks through email fatigue
**Message Angle:** "Saw your background in ops; thought you'd find this useful"
**CTA:** Casual intro, nudge to respond

**Message Template:**
> Hi Sarah, saw your move to CloudScale—congrats! I connected with your predecessor on a pretty specific challenge around multi-tool process automation (data syncs, approvals). Given your fintech background, I'm guessing this might be top-of-mind for you in your first 100 days.
>
> Would be happy to grab 15 min to share what we learned. No pressure if timing's off.
>
> [Your name]

### Touch 5: Warm Intro Attempt — If You Have Mutual Connection
**Timing:** Wednesday, April 3 (if LinkedIn message didn't get response)
**Hook/Why Now:** Warm intros have 5–10x higher response rates than cold outreach
**Message Angle:** Use the mutual connection's credibility to open the door
**CTA:** Get the intro email sent

**Script for Mutual Connection (if you have one):**
> "Hi [Mutual connection], I'm reaching out because I know Sarah Chen who just joined CloudScale as VP of Operations. I had a conversation about 6 months ago with their previous Ops Manager about some process automation gaps they were facing—and now that Sarah's in the role, I think she'd benefit from hearing what we learned.
>
> Would you be willing to make a quick intro via email? Just a 20-minute call to share context, nothing pushy.
>
> Thanks!"

**If you can get the intro, the intro email becomes Touch 5.**

### Touch 6: Final Email — Lower-Pressure Offer
**Timing:** Friday, April 5 (if warm intro didn't work or didn't get response)
**Hook/Why Now:** Last touch before archiving; giving clear next step
**Message Angle:** "I'll step back if not interesting, but wanted to leave this here"
**CTA:** Final offer to reconnect; asking for permission to try again later

**Message Template:**
> Subject: Last note—CloudScale ops automation (no worries if not interested)
>
> Hi Sarah,
>
> I've reached out a couple of times about the process automation conversation we had with Jason. I'm guessing you're either (a) already working on this, (b) waiting for the right time in your first 100 days, or (c) just not interested right now.
>
> All totally fair. I'll step back, but wanted to leave this here in case it's useful:
> - [Link to relevant resource, case study, or article about fintech ops automation]
>
> If you ever want to explore whether we could help with your automation roadmap, happy to jump on a call. Or feel free to reach out in a few months if timing is better.
>
> Good luck with the onboarding!
>
> [Your name]

## Response Scenarios & Next Steps

| Scenario | Indicator | Next Step |
|----------|-----------|-----------|
| **Engaged** | Sarah replies "Yes, let's talk" or books a call | Send calendar invite for Monday, April 8, 2 PM PT. Prep talking points: prior conversation with Jason, specific process gaps, how we solve it, what success looks like. Goal: schedule demo for the following week. |
| **Partially engaged** | Clicked link in email, viewed LinkedIn profile but no reply | Send Touch 6 (final email). If no response after Touch 6, archive prospect. |
| **No response after full cadence** | 0 interactions across all 6 touches over 3 weeks | Archive prospect; set reminder for June 2026 to re-research (likely still ramping). Watch for company signals: new hires, product launches, earnings that might create urgency. |
| **Negative response** | "Not interested right now" | Ask why (budget timing, already have solution, not a priority). Document reason in CRM. If it's timing, set reminder for 90 days. If it's competition, add to competitive intel. If it's budget, don't follow up until next fiscal year. |
| **Warm intro happens** | Mutual connection connects you two | Let the intro take priority over remaining planned touches. Respond quickly to the intro email, keep it brief (30 sec pitch), and make the ask clear (20-min call). This has highest chance of conversion. |

## Success Metrics & Tracking
- **Response rate target:** 15% (higher than typical cold outreach due to prior conversation context)
- **Meeting rate target:** 40% of engaged prospects (2–3 of ~5–6 people who respond) = 3–4 discovery calls
- **Tracking method:**
  - HubSpot: Log each touch, date, channel, response (opened, clicked, replied, called, agreed to meeting)
  - Gmail: Track opens and clicks automatically
  - LinkedIn: Note views and message reads manually

## Now What?

- **Monday, March 25 (AM):** Send Touch 1 email to Sarah
- **Wednesday, March 27 (2 PM):** If no response, make call (Touch 2)
- **Daily:** Check for replies, opens, clicks; log in CRM
- **Friday, March 29:** If no call happened, send summary email (Touch 3)
- **If engaged by April 2:** Move to discovery call prep; review Jason's prior conversation notes; prepare demo deck
- **If no response by April 6:** Archive prospect; set reminder for June 15 to re-research

---

## Edge Cases

- **Prospect is new to company (too early to reach out):** Wait 2–3 weeks for them to get settled. Use the time to learn their background and build more targeted messaging. Initial outreach early is better than too late in their ramp.
- **Prospect has changed jobs since research was done:** Update your research. They may be newly hired into a bigger role (more budget, more authority) or moved to a company with different needs. Adjust messaging to new company and role.
- **Prior conversation ended with "We'll revisit in Q3":** Respect the timeline. Reach out in early Q3 (August/September), not before. Reference the prior conversation directly: "We talked about this in December; you mentioned revisiting in Q3—we're here if you want to move forward."
- **Prospect is in a high-touch sales cycle (enterprise, complex deal):** 6 touches might not be enough. Extend to 8–10 touches over 4–6 weeks. Mix in phone calls and warm intros more heavily. Enterprise deals often require multiple voices/touchpoints before they engage.
- **You get a response but they want more info before a call:** Send a highly relevant, concise resource (case study, ROI calculator, comparison guide — not a 20-page whitepaper). Make it relevant to their situation, not generic. Offer a call to discuss what they read.
- **Prospect asks "Are we already a customer of yours?":** Clarify immediately. If they're an existing customer, route to customer success. If they're a prospect, this is a positive signal — they may know your product already.
- **Multiple people at the company show interest:** Encourage cross-functional alignment. Book a call with the strongest champion first; ask them to include stakeholders (CTO, CFO, etc.) on the call so everyone's aligned.
