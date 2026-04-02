---
name: "Enrich Prospect Profile"
description: "Enrich prospect profiles with buying signals, company financials, competitive context, and buying committee insights — combining CRM data, web intelligence, and meeting context to build a comprehensive pre-call brief. Trigger on: prospect research, prospect profile, company research, buying committee, prospect intelligence, account intelligence."
dependencies: []
connectors:
  - name: "HubSpot"
    reason: "Pull contact history, past interactions, and company records to establish baseline relationship and activity patterns"
  - name: "Salesforce"
    reason: "Surface account hierarchy, past opportunities, and historical interactions with similar companies to identify patterns"
  - name: "Gmail"
    reason: "Extract email threads with this prospect or their company to surface specific challenges they've mentioned and tone of engagement"
  - name: "Google Calendar"
    reason: "Review past meeting history and attendee patterns to understand who influences decisions and how often you've engaged"
  - name: "LinkedIn"
    reason: "Pull recent role changes, company news, and team composition to identify new buying triggers or personnel changes"
author: "Harmony"
version: "1.0.0"
icon: "sparkles"
cover: ""
screenshots: []
category: "Sales"
---

## Purpose

Build a comprehensive prospect profile that goes beyond name and title — enriched with company financials, competitive context, buying signals, and organizational intelligence. When Harmony conversation data exists from past calls, it grounds the analysis in what this prospect and their company have actually said, what problems matter to them, and who influences their decisions. Sales teams use this to prepare for calls without spending an hour on web research, and to spot buying signals hiding in their own conversation history.

## When to Use

- 30 minutes before a discovery call — get a complete brief on the prospect, their company, and what matters
- Preparing for a follow-up call — review what they said last time and what's changed since
- Building a lead list for a new campaign — enrich each prospect with buying signals and urgency indicators
- Spotting competitive threats — understand which alternatives they're evaluating and why
- Identifying the buying committee — understand who influences decisions and what each person cares about

## Instructions

### 1. Gather prospect baseline

Start with what the user provides:
- **Who are they?** Name, title, company, email/LinkedIn
- **How do you know them?** Cold outreach, referral, existing relationship
- **What's the context for this call?** Discovery, follow-up, re-engagement, proposal review

Pull from CRM:
- Contact history and past interactions
- Company record and deal history
- Email activity and engagement patterns

If Harmony conversation data exists, pull:
- Past calls with this prospect and what was discussed
- Problems they've explicitly mentioned
- Objections they've raised
- Buying signals (timeline, budget, decision-making comments)

### 2. Research company fundamentals

For the prospect's company, gather:
- **Recent company news:** Funding, new products, executive changes, earnings
- **Competitive positioning:** Who are their main competitors, where do they stand in market
- **Financial indicators:** Public company financials (if available), venture funding stage, burn rate if known
- **Growth signals:** New markets entered, hiring spree, partnerships announced
- **Market context:** Industry headwinds or tailwinds affecting their business

### 3. Identify the buying committee

Map:
- **Economic buyer:** Who has budget authority (usually CFO, COO, or department head)
- **Influencers:** Who evaluates options but doesn't decide (technical teams, operations)
- **Champion:** Who inside the company wants to make this change (often someone with a pain point)
- **Blockers:** Who might oppose change (legacy system owners, risk-averse stakeholders)

Sources:
- LinkedIn to see org structure and role titles
- Harmony conversation data (who speaks up in calls, whose opinions matter)
- CRM to see who you've interacted with at the company

### 4. Extract buying signals and urgency

Identify:
- **Timeline signals:** "We need this by Q3", "New initiative starting in April"
- **Budget signals:** "We've allocated budget", "This is discretionary spend"
- **Competitive pressure:** "We're evaluating alternatives", "Competitor just launched"
- **Problem urgency:** "This is costing us", "Our team is spending too much time on"
- **Business changes:** Hiring, new product, market expansion that creates the need

### 5. Synthesize the brief

Create:
- 1-page prospect summary with key facts, buying committee, and signals
- Conversation history showing what they care about
- Competitive alternatives and how to position against them
- Recommended next steps and conversation angle for this call

## Output Format

# Prospect Brief — [Prospect Name / Company]
_Prepared [date] · Next call: [date/time]_

## Prospect Overview
- **Name:** [full name]
- **Title:** [current title and tenure]
- **Company:** [company name, founded [year], [stage]]
- **Location:** [HQ location]
- **Relationship status:** [new prospect / existing contact / re-engagement]
- **Last interaction:** [date and type, e.g., "email on 2026-03-15"]

## Company Profile
- **Description:** [1–2 sentences on what they do]
- **Stage:** [growth, mature, struggling]
- **Size:** [employee count]
- **Recent news:** [funding round, product launch, executive hire, earnings]
- **Key financials:** [if public or known: revenue growth, profit/loss]
- **Market position:** [market leader, challenger, niche player]
- **Competitive pressure:** [main competitors and how they position vs. alternatives]

## Buying Committee Map
| Role | Name (if known) | Title | Likely Stance | What They Care About |
|------|-----------------|-------|----------------|---------------------|
| Economic Buyer | [name] | [title] | [likely, neutral, unknown] | [priorities] |
| Technical Influencer | [name] | [title] | [stance] | [priorities] |
| Operations Champion | [name] | [title] | [stance] | [priorities] |
| Potential Blocker | [name] | [title] | [stance] | [concerns] |

## Buying Signals & Urgency
- **Timeline:** [When do they need to decide?]
  - Source: [how you know this]
- **Budget status:** [Budget allocated / discussing / unknown]
  - Source: [how you know]
- **Competitive landscape:** [Who else are they evaluating?]
  - Source: [conversation / web research / LinkedIn]
- **Business context:** [Why now? What changed?]
  - Source: [news / conversation / funding round]
- **Urgency indicators:** [High / Medium / Low]
  - Reasons: [specific factors]

## Conversation History
### Most Recent Interaction
- **Date:** [date]
- **Type:** [call / email / meeting]
- **Attendees:** [who was on the call]
- **Key points discussed:**
  - Problem 1: [what they mentioned]
  - Problem 2: [what they care about]
  - Objection: [if any concerns raised]
  - Next step:** [what was agreed]
- **Source:** [Harmony call, email thread, etc.]

### Previous Interactions [if applicable]
- [Summary of each past conversation]
- [Patterns you notice across interactions]

## Competitive Context
- **Alternatives they're evaluating:** [other vendors they've mentioned]
- **How to position against each:**
  - vs. [Competitor A]: [positioning]
  - vs. [Competitor B]: [positioning]
- **Unique differentiators for this prospect:** [what matters to them specifically]

## Red Flags & Opportunities
**Opportunities:**
- [Hiring spree suggests growth and need for tooling]
- [Recent funding means budget is available]
- [Their competitor just launched feature they lack]

**Red Flags:**
- [Recent exec departure suggests instability]
- [Burn rate accelerating suggests cost focus]
- [Market headwind suggests budget freeze coming]

## Call Preparation
**Call Objective:** [What are you trying to achieve?]
**Key message:** [One-sentence value prop for this prospect]
**Questions to ask:** [3–5 specific questions based on their situation]
**Points to emphasize:** [What matters to them specifically]
**Objections to prepare for:** [Common concerns for this type of company]
**Next step if interested:** [What's your ask?]

## Now What?

1. Review Harmony call history — if 2+ past calls, look for patterns in what they care about
2. Check their recent LinkedIn activity — any job changes or company news that signals urgency
3. Prepare 3 questions specific to their situation (not generic questions)
4. Review competitive positioning — know how you stack up against alternatives they're evaluating
5. Decide on call objective: discovery, qualification, proposal review, or negotiation

---
_Want me to pull the last 3 calls with this prospect, or draft a competitive positioning doc?_

## Example

**User:** "Build me a brief for a call with Sarah Chen at Acme Corp tomorrow at 2 PM. She's a VP Sales there. We haven't talked in a few months."

**Output:**

# Prospect Brief — Sarah Chen / Acme Corp
_Prepared 2026-03-22 · Next call: 2026-03-23 at 2:00 PM ET_

## Prospect Overview
- **Name:** Sarah Chen
- **Title:** VP Sales (tenure 2.5 years)
- **Company:** Acme Corp (founded 2019, Series C)
- **Location:** San Francisco, CA
- **Relationship status:** Existing contact, 3-month gap since last interaction
- **Last interaction:** Email on 2026-01-14 (reply to check-in, she was busy with Q1 planning)

## Company Profile
- **Description:** B2B SaaS for enterprise operations management. Platform helps COOs and ops teams reduce process waste and improve visibility.
- **Stage:** Growth (Series C, post-profitability)
- **Size:** 280 employees (hiring actively)
- **Recent news:** Series C funding ($45M) announced Feb 2026; launched horizontal product line for manufacturing (Jan 2026); VP Engineering promoted to Chief Product Officer (Jan 2026)
- **Key financials:** $15M ARR (2025), targeting $30M ARR by end of 2026 (100% YoY growth goal)
- **Market position:** Market challenger in ops management, competing with ServiceNow (enterprise, complex) and lighter-weight process tools
- **Competitive pressure:** ServiceNow, ProcessMaker, UiPath; also emerging startups focused on specific verticals (Acme is horizontal play)

## Buying Committee Map
| Role | Name (if known) | Title | Likely Stance | What They Care About |
|------|-----------------|-------|----------------|---------------------|
| Economic Buyer | Unknown | CFO or COO | Neutral/unknown | Unit economics, sales productivity, revenue growth |
| Sales Ops Champion | Michael Torres | VP Sales Operations (promoted to SVP) | Likely positive | Sales team effectiveness, CRM data quality, rep adoption |
| Technical Influencer | Engineering team | VP Eng → Chief Product Officer (new) | Neutral | Integration, API quality, feature roadmap |
| Executive Champion | Sarah Chen | VP Sales | Likely positive | Sales team scaling, competitive positioning, go-to-market |

## Buying Signals & Urgency
- **Timeline:** Q2 2026 (next 6 weeks)
  - Source: Series C funding just closed, Q2 hiring push starts, 100% growth goal requires faster sales execution
- **Budget status:** Budget allocated (post-Series C funding)
  - Source: $45M Series C, VP Sales being consulted on headcount and tooling budget
- **Competitive landscape:** Evaluating sales productivity platforms (Salesforce enhancements, sales intelligence, conversation intelligence tools)
  - Source: Jan 2026 call where Sarah mentioned "we need better ramp time for new reps"
- **Business context:** Scaling sales team 50% in 2026 (growing from 60 AEs to 90); new product vertical launching; exec team reshuffled
  - Source: LinkedIn (job postings showing 12 open sales roles), Crunchbase (recent funding), prior conversation
- **Urgency indicators:** High
  - Reasons: New $45M in bank, aggressive 100% growth goal, 50% sales team expansion, new product launch = multiple concurrent initiatives requiring tooling support

## Conversation History

### Most Recent Interaction
- **Date:** 2026-01-14
- **Type:** Email exchange
- **Attendees:** Sarah Chen (VP Sales)
- **Key points discussed:**
  - Sarah: "Q1 planning is crazy, we're mapping out the new go-to-market for the manufacturing product line and scaling the team"
  - Problem mentioned: "New reps take 4–6 months to ramp, and we need to compress that if we're hiring 30 people this year"
  - Business context: Series C funding was being finalized at that time (now closed as of Feb 2026)
  - Next step: "Let's talk again in a few weeks when the chaos settles" (she never followed up, may have been consumed with Series C close)
- **Source:** Email thread in Gmail

### Previous Interaction — Oct 2025
- **Date:** 2026-10-15
- **Type:** Zoom call (45 min)
- **Attendees:** Sarah Chen (VP Sales), Michael Torres (VP Sales Operations)
- **Key points:**
  - Problem: Sales team split across 3 time zones, reps aren't logging activity consistently, forecast accuracy is suffering
  - Pain: "We spend 10 hours a week just trying to figure out where deals actually stand because Salesforce is a graveyard"
  - Michael was engaged and asked technical questions about integration
  - Sarah's driver: "If we fix the data pipeline, we can actually trust our forecast and make smart decisions about where to allocate resources"
  - Objection: "We just implemented Salesforce 18 months ago; another tool feels like overkill"
  - Response to objection (how you handled it): "This isn't another tool, it's an intelligence layer on top of Salesforce that makes it actually useful"
  - Next step: "We'll likely evaluate next quarter once we see how the new product launch goes"
- **Source:** Harmony call recording from Oct 2025

### Pattern Across Calls
- Sarah is data-driven, focused on forecast accuracy and rep productivity
- Michael (Ops) is a technical evaluator and will influence platform choice
- Previous objection about "another tool" suggests they're tool-fatigued → need to position as Salesforce enabler, not replacement
- Timeline from Oct: "next quarter" = should be evaluating now (Q1) but was consumed by Series C close and product launch planning

## Competitive Context
- **Alternatives they're likely evaluating:**
  - Salesforce Einstein (CRM-native AI, easier sell, limited depth)
  - Slack (team communication, not sales-specific)
  - Outreach (sales engagement platform, strong for outbound sequences)
  - Internal build (Michael has asked about "custom workflow automation")

- **How to position against each:**
  - vs. Salesforce Einstein: "Einstein gives you predictions. This gives you the intelligence to know what to predict. You need both."
  - vs. Outreach: "Outreach is for cadences and sequences. This is for understanding why deals move or stall once they're open."
  - vs. Internal build: "You could spend 6 months building this internally. We have it live in 4 weeks. Your team stays focused on selling."

- **Unique differentiator for Sarah/Acme:** They need forecast accuracy to hit aggressive growth targets. With 50% team expansion, new reps need to ramp fast. Your platform directly solves this.

## Red Flags & Opportunities

**Opportunities:**
- Series C funding just closed = budget is available right now before being allocated
- Aggressive 100% growth goal = real business pressure to improve sales efficiency
- 30 new sales hires coming = perfect time to implement tooling before bad habits form
- VP Eng promoted to CPO = engineering priorities shifting, might ease integration concerns
- Last call was Oct (5 months ago) = likely reevaluated internally, may be ready to move

**Red Flags:**
- Michael (your technical champion) was promoted to SVP = different focus now, may be less involved in implementation decisions
- Team was "consumed by Series C close" in Jan/Feb = may have deprioritized non-critical initiatives
- Three concurrent initiatives (product launch, team scaling, go-to-market planning) = very busy, may have limited bandwidth for new projects
- "Just implemented Salesforce" 18 months ago = stakeholders may resist changing CRM-adjacent workflows

## Call Preparation

**Call Objective:** Qualify urgency of forecast accuracy challenge with new team expansion; understand what changed since Oct call; re-establish momentum and schedule a brief technical evaluation with Michael.

**Key message:** "With 30 new hires and a 100% growth goal, forecast accuracy and rep ramp speed become your competitive advantage. You've got a 4-week window to implement before hiring accelerates."

**Questions to ask:**
1. "Since we last talked in October, has forecast accuracy become more or less of a priority?" (Probe for changed urgency)
2. "With 30 new AEs coming on board, how are you planning to accelerate their ramp time?" (Understand their current plan)
3. "When the hiring push kicks off in April, will you have the ops infrastructure to support 50% team growth?" (Surface capacity constraint)
4. "What changed with Michael being promoted to SVP? Who's owning sales ops strategy now?" (Understand new decision-maker)
5. "What would need to be true for this to be a priority in April?" (Uncover real barriers)

**Points to emphasize:**
- Growth goal requires forecast accuracy — you can't hit 100% if you don't know where deals stand
- Ramp acceleration solves a real problem — new reps typically take 6 months, you need them productive in 3
- Timing is right — implement before hiring spree, not after
- Low risk — 4-week implementation, Salesforce-native, Michael's team already knows Salesforce

**Objections to prepare for:**
- "We're too busy with product launch and Series C integration" → "This is exactly why you need it now — the team is chaos without visibility"
- "We just updated Salesforce" → "This makes Salesforce actually work. Complements, doesn't replace."
- "Michael's too busy as SVP" → "One technical kickoff call. The rest is handled by our implementation team."
- "We'll do this after Q1" → "By then you'll have 15 new reps ramping with bad habits already formed. Now is the window."

**Next step if interested:** "Let's get Michael 30 minutes next week to walk through the technical spec. If it looks good, we'll do a POC with 5 reps in the second half of April."

## Now What?

1. Review the Oct 2025 Harmony call recording before the meeting — familiarize yourself with the last conversation and Michael's questions
2. Check Acme's recent news — any new product announcements or exec changes since Oct
3. Prepare 2-3 case studies from Series C SaaS companies with similar scaling challenges
4. Draft a quick technical spec showing Salesforce integration — Michael will ask
5. Call with objective of re-engaging Sarah on forecast accuracy + ramp speed, not pushing a full sales pitch

---
_Want me to pull the Oct call recording and pull out Michael's technical questions, or create a 3-slide overview of the use case for Acme?_

## Edge Cases

- **Prospect has recently changed jobs:** Update the company research but note that internal champion may be gone. Ask about the transition and who's now driving sales strategy decisions.
- **Company is in cost-cutting mode (news of layoffs, hiring freeze):** Reframe from "opportunity cost" to "efficiency with existing team". Push back on the timeline — this becomes a priority when growth returns.
- **Prospect hasn't responded to recent outreach:** Don't assume they're uninterested. They might be consumed by another initiative (product launch, acquisition, leadership change). Re-engage with fresh context (news or new data) that suggests urgency.
- **You have no Harmony conversation history:** Rely entirely on LinkedIn, web research, and CRM history. Note in the brief that the profile would be stronger with past conversation data.
- **Multiple people from company in your CRM:** Aggregate their interactions to map the buying committee. Pull conversation patterns from all of them to understand who influences decisions.
- **Prospect explicitly said "no" in past:** Don't re-engage unless something material changed (company news, new challenge, personnel change). Reference the prior objection and ask what would need to change for them to reconsider.
