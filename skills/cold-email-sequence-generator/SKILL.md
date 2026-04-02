---
name: "Build Cold Email Sequence"
description: "Build multi-touch cold email campaigns with rotating angles, proof points, and resources. Generate 4-5 email sequences with specific timing, subject lines, and personalization. Trigger on: email sequence, cold email campaign, email cadence, follow-up sequence, multi-touch email, prospecting sequence, email outreach."
dependencies: []
connectors:
  - name: "Gmail"
    reason: "Pull past email templates and successful subject lines to inform new sequences; ground angle rotation in what your team already sends"
  - name: "HubSpot"
    reason: "Log sequences as automated workflows, track reply rates by angle, and measure sequence performance over time"
  - name: "Slack"
    reason: "Post sequence performance summaries weekly so the team can quickly see which angles and proof points are winning"
  - name: "Linear"
    reason: "Create tasks to test new angles and track which subject line variations outperform baselines"
author: "Harmony"
version: "1.0.0"
icon: "sparkles"
cover: ""
screenshots: []
category: "Sales"
---

## Purpose

Build a complete multi-touch email sequence (3-5 emails) for cold prospecting that rotates angles, proof points, and resources — so each follow-up gives the recipient a new reason to engage instead of feeling like spam. Each email stands alone, lands in the primary inbox, and adds genuine value. When Harmony conversation data exists, grounds angle rotation and proof points in what actually works from successful sales conversations.

## When to Use

- Building outbound sequences for a new ICP
- Scaling campaigns that worked for one persona to other personas
- Testing angle rotation — does the problem statement work, or should you lead with proof first?
- Improving reply rates on existing sequences by freshening angles or proof points
- Grounding sequences in real customer language extracted from successful sales calls

## Instructions

### 1. Gather input and context

Ask what the user has:
- **Who are you reaching?** Role, title, company size, segment
- **What's your core value?** One-sentence problem/solution fit
- **What proof do you have?** Case studies, metrics, customer logos, testimonials
- **What's the ask?** Meeting, demo, intro, conversation
- **Any Harmony data?** Successful sales calls where you can extract winning language and proof points

If Harmony conversation data exists, pull:
- Exact phrases prospects use to describe their problem
- Which proof points (metrics, logos, case studies) resonate most
- Questions that open discovery conversations
- Common objections and how your best closers handle them

If no conversation data, work from user-provided case studies and ask which value angle has worked best so far.

### 2. Define the angle rotation strategy

Identify 4-5 different angles to rotate through the sequence:
- **Angle 1: Problem statement** — Lead with a recognition of the pain
- **Angle 2: Proof/social proof** — Lead with a customer result or metric
- **Angle 3: Resource/education** — Lead with a useful piece of content or framework
- **Angle 4: Trigger-based** — Lead with a company signal (funding, hiring, product launch)
- **Angle 5 (breakup email)** — Final touch with a clear "I'll stop emailing you"

Each angle should feel like a different person reaching out with different info, not like an automated "just checking in."

### 3. Write personalized openings

For each email, create a personalized opening that:
- References the prospect directly (company, role, a LinkedIn post, company news)
- Connects personalization to the angle for that email (not random compliments)
- Naturally leads into why you're reaching out

Template: "I noticed [signal] → which usually means [challenge] → here's why that matters."

### 4. Match proof points to angles

For each angle, select the strongest proof point:
- **Problem statement angle:** Use a customer quote about the pain
- **Proof point angle:** Use a metric or case study result
- **Resource angle:** Use a framework, report, or playbook
- **Trigger angle:** Use a company signal that validates the problem
- **Breakup angle:** Use one social proof (logo or brief testimonial) as a last appeal

### 5. Calibrate tone by role

Adjust voice for the persona:
- **C-suite:** Ultra-brief, peer-level, one metric, low-friction ask
- **Director/Manager:** More specific value statement, slightly more detail, proof of ROI
- **IC/Practitioner:** Technical precision, no hype, proof of ease of use or integration

### 6. Create the sequence output

Format as individual emails with subject lines, timing, and clear reasoning for each angle.

## Output Format

# Cold Email Sequence — [Target Role/Segment]
_Prepared [date] · Recommended cadence: [# weeks]_

## Targeting & Strategy
- **Target:** [Role / Persona]
- **Problem:** [Core problem statement in prospect's words]
- **Value:** [One-sentence value proposition]
- **Primary Ask:** [Meeting / Demo / Reply / Intro]
- **Angle Rotation:** [Brief summary of angles across 5 emails]

## Email 1 — [Angle: e.g., Problem Recognition]

**Subject line:** [subject]

**Body:**
[Full email with personalization, opening, value statement, proof, CTA]

**Timing:** Initial outreach
**Reasoning:** Why this angle and proof point work for this audience

---

## Email 2 — [Angle: e.g., Social Proof]

**Subject line:** [subject]

**Body:**
[Full email]

**Timing:** +3–4 days
**Reasoning:** Why this angle extends the conversation

---

## Email 3 — [Angle: e.g., Resource/Framework]

**Subject line:** [subject]

**Body:**
[Full email]

**Timing:** +6–7 days
**Reasoning:** Why this positions you as helpful, not salesy

---

## Email 4 — [Angle: e.g., Trigger-Based]

**Subject line:** [subject]

**Body:**
[Full email]

**Timing:** +10–12 days
**Reasoning:** Why this signal validates the urgency

---

## Breakup Email — [Final Touch]

**Subject line:** [subject]

**Body:**
[Full email]

**Timing:** +15–20 days
**Reasoning:** Honor the prospect's likely lack of interest; leave door open

## Performance Tips

- **A/B test subject lines** on email 1 to find what works for your segment
- **Track angle rotation effectiveness** — which angles get the most replies for each persona?
- **Rotate proof points** if you get no traction; try customer logos vs. metrics vs. case studies
- **Adjust timing** based on reply velocity; if you see replies after 5 days, move email 2 earlier
- **Personalize at scale** — use LinkedIn, web research, company news; make each opening specific enough that removing it breaks the email

## Now What?

- **Set up in email platform:** Log sequence in HubSpot workflows or Gmail templates so you can deploy at scale
- **Track performance:** Measure open rate, reply rate, and CTR by angle; identify which angles win for this persona
- **A/B test:** Run two subject lines on email 1 for the first 50 contacts; double down on the winner
- **Iterate:** If reply rate is <5%, try a different angle rotation or proof point for the next batch
- **Build angle library:** Document what worked and reuse winning angles for similar personas

---

## Example

**User:** "Build a sequence for VP Sales at 100–300 person SaaS companies. We sell conversation intelligence. I've recorded a few successful sales calls with VPs talking about ramp time and rep performance variability."

**Output:**

# Cold Email Sequence — VP Sales / Series B–C SaaS
_Prepared 2026-03-22 · Recommended cadence: 3–4 weeks_

## Targeting & Strategy
- **Target:** VP Sales, Series B–C SaaS (100–300 people)
- **Problem:** New reps take 4–6 months to ramp; top performers do something different but it's not documented
- **Value:** Reduce ramp time 30–40% by identifying exactly what your best reps do and building it into onboarding
- **Primary Ask:** 15-minute conversation about your ramp process
- **Angle Rotation:** 1) Problem recognition, 2) metric/proof, 3) case study, 4) hiring signal, 5) breakup

## Email 1 — Problem Recognition

**Subject line:** ramp variability

**Body:**
Hi Amanda,

Quick question: when you bring new AEs onto your team, how do you make sure they end up closing at the same rate as your best reps?

Most VPs we talk to say the same thing — their top 2–3 closers crush it, but it takes the average rep 4–6 months to get there. And nobody can articulate exactly what the top reps are doing differently.

We work with sales teams at [similar company] and [similar company]. They use call recordings to identify the exact discovery techniques and objection handling that top performers use, then build it into onboarding. One VP we worked with cut ramp from 6 months to 10 weeks.

Worth exploring for your team?

[Link to 15-min booking link]

**Timing:** Initial outreach
**Reasoning:** Opens with a problem Amanda likely faces (scaling the team means more ramping reps), uses a question to engage, keeps it short, and offers a specific proof point grounded in real conversation data.

---

## Email 2 — Metric/Proof Point

**Subject line:** ramp math

**Body:**
Amanda — quick follow-up. I pulled some data on ramp velocity.

If your team averages 5 new AEs per year and each ramp takes 6 months at 50% productivity, that's about 7.5 months of lost productivity per hire. At a fully-loaded cost of $200K per AE, that's $125K in lost productivity per hire.

If you could cut that to 3 months, you're saving $60K per person. With 5 hires a year, that's $300K in recovered productivity.

Your best reps are holding that knowledge in their heads. We help teams codify it.

Happy to share what's working for other VPs.

**Timing:** +3–4 days
**Reasoning:** Different angle — instead of a problem, leads with the math. Amanda might not have calculated the cost of slow ramp. This validates the pain with numbers.

---

## Email 3 — Content/Framework

**Subject line:** sales team scaling

**Body:**
Amanda — we put together a short breakdown of what the fastest-ramping sales teams do differently across discovery, negotiation, and objection handling. No signup required, just a 2-minute read.

[PDF link: "The Ramp Time Playbook"]

One pattern that surprised us: the fastest reps spend 40% MORE time on discovery, not less. Everyone assumes it's about speed. It's actually about precision.

If that pattern holds for your team, might be worth a conversation.

**Timing:** +6–7 days
**Reasoning:** Provides actual value (content) that Amanda can consume on her own time. Leads with a counterintuitive insight (spend more time on discovery) which differentiates from typical "move faster" advice.

---

## Email 4 — Trigger-Based Angle

**Subject line:** team growth

**Body:**
Amanda — I noticed you posted 3 new AE roles this month. Congrats on the growth.

Quick thought: scaling the team 40% means you're bringing in a lot of new reps, which means ramp is probably your biggest variable in Q2–Q3 revenue. If you could compress that 4–6 month cycle, you'd feel it immediately in your quota attainment.

We've seen sales teams cut ramp time 30–40% using call analysis to codify what their top reps already do.

Worth 15 minutes to explore?

**Timing:** +10–12 days
**Reasoning:** Uses a public signal (job posting) to show we're paying attention. Connects the growth hiring to ramp urgency (it's not an abstract problem, it's immediate with 3 new people).

---

## Breakup Email — Final Touch

**Subject line:** closing the loop

**Body:**
Amanda — I'm going to stop filling your inbox.

If you ever get to a point where reducing rep ramp time becomes a priority, happy to pick this back up. Good luck with the hiring push.

[My email / Calendly link if you want to chat]

**Timing:** +15–20 days
**Reasoning:** Honors her likely lack of interest while leaving the door open. Shows respect for her inbox. If she reads this, the "I'll stop now" can actually trigger a reply from interested prospects.

---

## Performance Tips

- **A/B test Email 1 subject lines:** Try "ramp variability" vs. "sales team scaling" vs. "rep performance" on first 50 contacts; track open rates and choose the winner for the next batch
- **Track which angle converts best:** Are VPs more likely to reply to the metric angle or the problem statement angle? Document it.
- **Personalize the opening:** Instead of generic name use, reference Amanda's LinkedIn post about hiring, her company's funding round, or a product feature they recently launched
- **Adjust timing if needed:** If you see reply velocity spike between days 4–6, move Email 3 earlier. If most replies come after 2 weeks, extend the sequence.

---

## Now What?

- **Set up in HubSpot workflows:** Create a 5-email workflow that sends based on persona (VP Sales) and segment (Series B–C SaaS)
- **A/B test subject lines:** Run two versions of Email 1 subject line for first 50 contacts
- **Track metrics:** Measure open rate (target 25–35%), reply rate (target 5–8%), and CTC by angle
- **Iterate:** If reply rate drops below 3%, test a different angle rotation or proof point
- **Personalize at scale:** Use LinkedIn research to add 1-2 specific openers; make it clear you looked at their company, not just their title

---

## Edge Cases

- **No conversation data available:** Use case studies and metrics you have; note that angles would be stronger if grounded in real sales call patterns. Recommend reviewing your top 5 closed deals to extract winning language.
- **Multiple personas in sequence:** Build separate sequences for each (VP Sales, SVP Sales, Sales Manager); use different angles and proof points for each role.
- **Getting 0% reply rate on Email 1:** Subject line or opening probably doesn't resonate. Try a different angle — maybe this segment responds to metrics better than problem statements. Test with next batch.
- **High open rate but low reply rate:** Emails are interesting but CTAs aren't compelling. Try lower-friction asks (e.g., "Worth a conversation?" instead of "Ready for a demo?").
- **Longer sales cycles (6+ month deals):** Extend sequence to 6–7 emails; increase gaps between emails to match buying cycle. Add a "check-in after your budget cycle" email.
- **Very competitive market (many similar vendors):** Lead with proof/logos, not problem. Differentiate by showing specific results others can't claim.
