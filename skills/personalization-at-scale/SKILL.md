---
name: "Personalize Outreach at Scale"
description: "Create personalized outreach for 100+ prospects at once — pulling company intel, common pain points, and customized talking points from research data and your own conversations — so every email feels 1:1, not templated. Trigger on: personalized outreach, cold email campaign, prospecting sequence, bulk prospecting, custom email templates, outreach personalization."
dependencies: []
connectors:
  - name: "HubSpot"
    reason: "Pulls contact and company data to populate personalization variables; syncs outreach sequences and response tracking"
  - name: "Salesforce"
    reason: "Provides account intelligence and contact records for personalization; tracks email opens and responses"
  - name: "Gmail"
    reason: "Sends personalized emails and tracks opens/clicks; surfaces prior email history for context"
  - name: "Slack"
    reason: "Notifies team of responses and high-intent replies; posts summaries of personalized campaign results"
  - name: "Google Drive"
    reason: "Stores prospect lists and personalization data; enables bulk template generation and sharing"
author: "Harmony"
version: "1.0.0"
icon: "sparkles"
cover: ""
screenshots: []
category: "Sales"
---

## Purpose

Create truly personalized outreach for 100+ prospects at once without spending hours writing emails. Instead of one template that goes to everyone, generate a unique version for each prospect that references their company news, recent hiring, product positioning, or your shared connections. The skill pulls from research data, company announcements, your own Harmony conversations with similar companies, and warm intro paths through your network. Output is 100+ personalized emails (or cold email sequences with day-by-day variations) that feel human, not scalable. Works from prospect lists (CSV, HubSpot export) and your existing conversation data.

## When to Use

- You have a list of 50 companies you want to target this quarter; you want each email personalized, not templated
- You're launching an outbound campaign (ABM, segment targeting, new product launch) and want every prospect to feel special
- SDR asks "Can you help me write emails to 30 prospects?" instead of each one taking 20 minutes
- You want to test which personalization hooks work best (company news, funding, hiring, warm intro)
- You're selling into different industries/verticals and want industry-specific talking points
- You need to scale outreach without sounding like outreach
- Team is doing a "batch and blast" outreach week and needs personalization to increase response

## Instructions

### 1. Clarify the outreach goal and constraints

Ask:

- **What's the campaign objective?** (Product launch, new service, account-based marketing, event, expansion?)
- **Who are you reaching?** (Prospect list, account list, role-based targeting?)
- **How many people?** (10, 100, 1000?)
- **Format?** (Single email, multi-step sequence, LinkedIn message, template for manual follow-up?)
- **Personalization level desired?** (Light: "Hi [Company], congrats on [news]" | Deep: "Your industry is X, you likely have pain Y, here's why it matters")
- **What data do you have on each prospect?** (Company name, role, hiring data, funding, hiring? Or just names and emails?)

### 2. Gather research and your conversation data

Collect:

- **Your conversation data:** Do you have past calls with similar companies or roles? Extract: common pain points, what convinced them, what language resonated
- **Company research data:** Recent funding, hiring in key roles, product updates, market announcements, competitive positioning
- **Warm intro paths:** Using Harmony, can you find anyone on your team who knows people at the target companies?
- **Industry insights:** Are there vertical-specific pain points, trends, or events relevant to this campaign?
- **Your best talking points:** What's worked in past campaigns? What objections come up?

### 3. Define personalization variables

For each prospect, identify:

- **Company-level:**
  - Company name
  - Industry / vertical
  - Company size
  - Recent funding, hiring, announcements (if available)
  - Your shared connections (warm intro paths)
  - What you know about their problem (from research or conversations with similar companies)

- **Prospect-level:**
  - First name, last name, title
  - Department
  - Are they a new hire? If so, when?
  - What's their likely pain in their role?

- **Campaign-level:**
  - What's the hook? (Funding round, product launch, new feature you launched, industry trend)
  - What's the ask? (Coffee call, demo, feedback, webinar, intro)
  - What's the time frame? (When are you doing outreach, and when do you want responses?)

### 4. Build personalization templates with conditional logic

Instead of one template, create conditional templates:

**If they have recent funding:**
"Congrats on your [round] round in [month]. We work with companies at your stage on [problem]."

**If they hired [role] recently:**
"I see you hired a new [role] last month. That usually means [opportunity]. We help [solution]."

**If they're in [industry]:**
"In your space, we typically see [pain]. Have you run into that?"

**If warm intro exists:**
"[Mutual contact] mentioned you're working on [topic]. Thought you'd find [relevant insight] useful."

**If no warm intro:**
"Not sure if you're open to cold outreach, but wanted to share [research-backed insight specific to their company]."

**Default (minimal data):**
"[Company] seems to be growing into [market]. We help companies like you [outcome]."

Build 3–5 conditional email templates based on what data exists for each prospect.

### 5. Generate personalized emails

For each prospect, fill in the template:

- Pull their company data from research
- Check if warm intro path exists
- Pull talking points from your past conversations with similar companies
- Customize subject line if possible ("Heads up on [their industry trend]" vs. "Quick thought")
- Customize body with research + your talking points
- Customize CTA based on campaign goal

Output: 100+ unique emails, each different but built from templates and research.

### 6. Optimize for response

For each email, ensure:

- **Credibility:** Why are you reaching out? (Research you've done, warm intro, shared connection, relevant expertise)
- **Specificity:** Reference something specific about them, not generic.
- **Brevity:** 3–4 sentences, max. White space. Easy to scan.
- **Clear ask:** Coffee call? Demo? Feedback? Make it obvious.
- **Signature:** Your name, title, company, phone. No disclaimer spam that kills response.

## Output Format

```markdown
# Personalized Outreach Campaign — [Campaign Name]
_Created: [date] · Prospects: [count] · Personalization level: [Light / Medium / Deep]_

## Campaign Overview
**Objective:** [What are you trying to achieve]
**Hook:** [What makes this relevant to them right now]
**Call to action:** [What do you want them to do]
**Timeline:** [When will you send, when expect responses]

## Personalization Strategy
**Data available:** [Company name, size, industry, recent news, warm intros?]
**Conditional templates:** [How many different templates based on available data?]
**Talking points:** [What are the 2–3 core talking points that apply across all?]

## Email Templates

### Template A: [Scenario, e.g., "Recent Funding"]
[Full email template with [variables] marked]

### Template B: [Scenario, e.g., "No Funding, but Hiring Signal"]
[Full email template]

### Template C: [Default template for minimal data]
[Full email template]

## Personalized Email Examples (First 5)

### Example 1: [Prospect Name], [Company Name]
**Subject:** [Subject line]

[Full personalized email, with personalization highlighted]

---

### Example 2: [Prospect Name], [Company Name]
**Subject:** [Subject line]

[Full personalized email]

---

[Examples 3–5...]

## Prospect List Summary
| # | Company | Contact | Title | Data Available | Template Used | Notes |
|---|---------|---------|-------|----------------|---------------|-------|
| 1 | [co] | [name] | [title] | [size, recent hiring] | Template A | Warm intro via Sarah |
| 2 | [co] | [name] | [title] | [size, funding] | Template B | No warm intro |
| 3 | [co] | [name] | [title] | [size only] | Template C | Default |

## Campaign Metrics Setup
**Metric to track:** [Open rate, click rate, response rate, meeting booked rate?]
**Success benchmark:** [What's a good response rate for this type of outreach?]
**A/B test?** [Are you testing subject lines, hooks, CTAs across groups?]

---

**Now what?** Customize further if needed. Add your email signature. Set up in HubSpot or email tool. Send in batches (don't spam). Track opens and replies. After 1 week, analyze which hooks worked best. Iterate for round 2.
```

## Example

**User:** "I'm launching our new feature for logistics companies. I have a list of 30 mid-market logistics companies I want to target. Can you personalize outreach for all 30? I've done some customer calls with logistics companies (check my Harmony), and I know a few of them from LinkedIn. I want the emails to feel personal, not blasted."

**Output:**

```markdown
# Personalized Outreach Campaign — Logistics Platform Feature Launch
_Created: 2026-03-05 · Prospects: 30 · Personalization level: Deep_

## Campaign Overview
**Objective:** Launch awareness of new real-time shipment visibility feature to mid-market logistics companies
**Hook:** "This feature solves the exact problem your team mentioned" (backed by customer insights) or "I saw you hired a new ops lead — this is what they'll ask for"
**Call to action:** 15-minute virtual walk-through of the feature
**Timeline:** Send March 10–11 (Monday–Tuesday). Expect first responses by Thursday. Follow-up sequence starts Thursday evening.

## Personalization Strategy
**Data available:** Company name, size (80–250 people), recent hiring (ops, VP Ops), funding rounds, LinkedIn profiles
**Conditional templates:** 3 templates based on: (A) Recent ops/VP ops hire, (B) Recent funding round, (C) No recent signals
**Talking points:**
- "Real-time visibility reduces shipment delays by 15–20% (from customer data)"
- "Your team likely spends 5+ hours/week on status dashboards"
- "Ops leads we work with see payback in 6–8 weeks"

## Email Templates

### Template A: Recent Ops/VP Ops Hire
Subject: [First name], welcome to [Company]? One thing that helped me scale (VP Ops perspective)

Hi [First Name],

Noticed you just joined [Company] as [Title]. Congrats — scaling ops at [Company Size]-person logistics companies is no joke.

The one thing every ops hire asks about: How do I get real-time visibility across all active shipments without building dashboards? Your team is probably doing it in spreadsheets + Slack right now.

We just launched a feature that solves exactly that. 15-minute walkthrough?

[Your name]
[Title]
[Company]
[Phone]

---

### Template B: Recent Funding
Subject: [First name], great round at [Company] 👏 One thing you'll optimize first

Hi [First Name],

Saw [Company] just raised Series [B/C] — congrats on the growth. First thing teams do post-funding: scale operations without proportionally scaling headcount.

We work with logistics companies on exactly this. Real-time visibility, automated reporting, faster decision-making. One call with your ops team?

Curious if [Company]'s scaling ops right now too.

[Your name]
[Title]
[Company]
[Phone]

---

### Template C: No Recent Signals (Standard)
Subject: [First name], quick thought on logistics scaling

Hi [First Name],

We work with mid-market logistics companies on a specific problem: coordinating shipments and ops across regions without manual dashboards.

Thought it might be relevant given [Company]'s size and growth.

15 minutes to see if it fits?

[Your name]
[Title]
[Company]
[Phone]

---

## Personalized Email Examples (First 5)

### Example 1: Marcus Chen, Velocity Logistics
**Subject:** Marcus, welcome to Velocity? One thing that helped me scale (VP Ops perspective)

Hi Marcus,

Noticed you just joined Velocity as VP Operations. Congrats — scaling ops at 120-person logistics companies is no joke.

The one thing every ops hire asks about: How do I get real-time visibility across all active shipments without building dashboards? Your team is probably doing it in spreadsheets + Slack right now.

We just launched a feature that solves exactly that. 15-minute walkthrough?

[Your name]
VP Sales, [Company]
[Phone]

---

### Example 2: Sarah Nguyen, Clarity Dispatch
**Subject:** Sarah, great Series B 👏 One thing you'll optimize first

Hi Sarah,

Saw Clarity Dispatch just raised Series B in February — congrats on the growth. First thing teams do post-funding: scale operations without proportionally scaling headcount.

We work with logistics companies on exactly this. Real-time visibility, automated reporting, faster decision-making. One call with your ops team?

Curious if Clarity's scaling ops right now too.

[Your name]
VP Sales, [Company]
[Phone]

---

### Example 3: James Park, Momentum Logistics
**Subject:** James, quick thought on logistics scaling

Hi James,

We work with mid-market logistics companies on a specific problem: coordinating shipments and ops across regions without manual dashboards.

Thought it might be relevant given Momentum's size and growth.

15 minutes to see if it fits?

[Your name]
VP Sales, [Company]
[Phone]

---

### Example 4: Alex Kim, TrustFreight (Warm Intro Available)
**Subject:** Alex — [Mutual contact] mentioned you're scaling

Hi Alex,

[Mutual contact] mentioned you're leading ops scaling at TrustFreight. He thought I should show you what we just built.

One call to walk through? 15 min.

[Your name]
VP Sales, [Company]
[Phone]

---

### Example 5: Priya Patel, Streamline Logistics
**Subject:** Priya, one thing ops teams ask for

Hi Priya,

Every ops leader we work with asks the same question: How do I get real-time visibility without manual dashboards?

We just launched it. Worth a conversation?

15 minutes?

[Your name]
VP Sales, [Company]
[Phone]

---

## Prospect List Summary
| # | Company | Contact | Title | Data Available | Template Used | Notes |
|---|---------|---------|-------|----------------|---------------|-------|
| 1 | Velocity Logistics | Marcus Chen | VP Operations | Size, recent hire (Jan 2026) | Template A | New VP Ops hire — high signal. Warm intro via James Park. |
| 2 | Clarity Dispatch | Sarah Nguyen | VP Operations | Size, Series B funding (Feb 2026) | Template B | Just funded. High probability. |
| 3 | Momentum Logistics | James Park | Operations Director | Size only | Template C | No recent signals. Standard approach. |
| 4 | TrustFreight | Alex Kim | Head of Ops | Size, warm intro available | Template A + warmth | Use warm intro explicitly in subject. |
| 5 | Streamline Logistics | Priya Patel | VP Operations | Size, LinkedIn active | Template C | Active on LinkedIn, likely engaged. |
| [6–30] | [More prospects] | ... | ... | ... | ... | ... |

## Campaign Metrics Setup
**Metric to track:** Email open rate, click rate, "interested" replies, calls booked
**Success benchmark:** 25% open rate, 5% reply rate, 1 call per 10 emails sent (3 calls from 30 emails)
**A/B test?** Test Template A (recent hire) vs. Template B (funding) to see which hook gets higher response. Run at 15 prospects each.

---

**Now what?**
1. Verify the list: Make sure all email addresses are correct and names are spelled right.
2. Customize 2–3 more examples and share with your manager for feedback before sending all 30.
3. Add your real signature and company details to all templates.
4. Set up in HubSpot or your email tool; schedule sending Monday morning (don't send all at once — batch in groups of 10 per hour).
5. Set up tracking: Spreadsheet or HubSpot to track opens, replies, and calls booked by template type.
6. After 5 business days, check response rate by template. Double down on the winner.
7. Follow-up sequence: For non-responders, send a gentler follow-up day 7 asking if they got your email.
```

## Edge Cases

- **You have very little data on some prospects:** Use the default template. It's better than nothing, and at scale, you'll still get 3–5% response from minimal personalization.
- **Some prospects are competitors:** Skip them or deprioritize. They're unlikely to respond positively.
- **You have warm intros to multiple people at the same company:** Send to the most senior (they can forward internally). Or send to 2–3 different people on same team with slightly different angles. Your choice.
- **Prospect list has duplicates or bad data:** Clean it first (remove duplicates, verify email addresses, remove no-emails). Garbage in, garbage out.
- **You want to test different subject lines:** Create A/B groups. Send Template A with subject line V1 to group 1, V2 to group 2. Track results.
- **Prospect is already in your CRM/database:** Check: Have you emailed them before? If yes, don't resend — they'll see you're blasting. Follow up instead.

```
