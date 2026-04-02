---
name: "Uncover Jobs-to-Be-Done"
description: "Uncover the functional, emotional, and social jobs customers are trying to accomplish — not just the product they're buying. Analyze customer conversations to build job stories and personas. Trigger on: jobs to be done, JTBD, customer jobs, functional job, emotional job, job story, what's the job, customer motivation, underlying need."
dependencies: []
connectors:
  - name: "Salesforce"
    reason: "Pull opportunity notes and lost deal feedback to identify the job customers were trying to do and why they chose (or didn't choose) your solution"
  - name: "HubSpot"
    reason: "Extract customer interview notes and feedback to build job stories grounded in real customer language"
  - name: "Gmail"
    reason: "Surface customer email threads discussing their challenges to understand the emotional and functional context of the job"
  - name: "Slack"
    reason: "Pull support conversations and customer feedback to identify patterns in the jobs customers are trying to accomplish"
  - name: "Google Drive"
    reason: "Reference user research documents and interview transcripts to enrich job analysis"
author: "Harmony"
version: "1.0.0"
icon: "sparkles"
cover: ""
screenshots: []
category: "Product"
---

## Purpose

Move beyond features and segments to understand the *job* customers are trying to accomplish. Jobs-to-be-Done (JTBD) is a framework for understanding customer motivation at the deepest level: the functional job (what do they want to accomplish?), the emotional job (how do they want to feel?), and the social job (how do they want to be perceived?). When conversation data exists in Harmony — customer interviews, sales calls, support tickets — the analysis is grounded in verbatim customer language. When it's not, the skill works from provided context and asks diagnostic questions to uncover the real job. The output is a set of job stories and personas that drive better product, marketing, and sales decisions.

## When to Use

- Building a new product; need to understand what job you're solving before shipping features
- Analyzing customer churn; customers say they like your product but don't use it — might indicate you're solving the wrong job
- Competitor displacement challenge; customers prefer competitor not because of features but because competitor solves a different (better) job
- Repositioning a product after launch; market feedback suggests you've been selling the wrong job
- Creating buyer personas that actually predict purchase behavior
- Understanding why some customer segments love your product and others don't

## Instructions

### 1. Gather context and conversations

Start by asking what the user already has. Don't assume — ask:

- **What product or service are we analyzing?** (The thing customers are buying)
- **Which customer segment or use case?** (Different segments may have different jobs)
- **Do you have customer conversations?** (Interviews, sales calls, support tickets, user research)
- **What's your hypothesis?** (What job do you *think* customers are trying to do?)

If the user points to Harmony conversations, extract:
- Verbatim language customers use to describe the problem they're solving
- The emotional context ("I'm stressed," "I feel behind," "I want to impress my boss")
- What they were doing *before* they had your solution (or competitor's)
- What happens if they don't accomplish the job (consequences)
- What success looks like to them (emotional payoff, not just feature adoption)

### 2. Identify the core functional job

What is the customer trying to accomplish? Ask:

- **What does the customer want to do?** (Don't say "use our software"; say "reduce debugging time" or "close deals faster")
- **Why?** (What problem is blocking them from doing that now?)
- **In their own words, what's the job?** (Use direct quotes from conversations when available)

Distinguish between:
- **Core job:** The primary goal (e.g., "Understand which code change broke production")
- **Related jobs:** Secondary jobs that support the core (e.g., "Reduce time spent in meetings about the problem")
- **False jobs:** Things that sound like jobs but are really features (e.g., "Use a dashboard" is not a job; "Monitor API health" is)

### 3. Identify the emotional job

How do they want to *feel* while or after accomplishing the job? Ask:

- **How do they feel when they're struggling with this job today?** (Stressed? Embarrassed? Overwhelmed?)
- **How do they want to feel?** (In control? Confident? Respected by peers?)
- **What's the emotional payoff of solving this job?** (Relief, pride, confidence, autonomy, belonging)

Use customer language from conversations. Emotional jobs are often unstated but drive purchase decisions more than features.

### 4. Identify the social job

How do they want to be *perceived* by others? Ask:

- **Who are they trying to impress?** (Boss, teammates, customers, peers, themselves)
- **What image do they want to project?** (Competent, innovative, thoughtful, in control, trustworthy)
- **What status or identity do they want?** (Expert, leader, early adopter, conscientious, efficient)

Social jobs are subtle but powerful. Someone might buy a "productivity tool" because the real social job is "be seen as organized and on top of things by my manager."

### 5. Build job stories

Translate the functional, emotional, and social jobs into a job story:

**Functional job story:** "When [situation], I want to [core job], so that [outcome]."
Example: "When a customer reports a bug in production, I want to pinpoint the exact code change that caused it, so that I can fix it before more customers are affected."

**Emotional + social context:** "I want to feel [emotion], and I want to be seen as [identity/status]."
Example: "I want to feel in control of the situation, and I want my team to see me as the person who can quickly resolve crises."

### 6. Map job moments: before, during, after

Understand the full job context:

- **Before:** What's the situation or trigger that makes the job come alive?
- **During:** What's hard about accomplishing the job right now? What friction exists?
- **After:** What's the payoff? How do they know they've succeeded?

Use this to identify where your product (or a competitor) fits in the job timeline.

### 7. Build JTBD-based personas

Create personas organized around jobs, not demographics:

- **Persona name:** [Something that evokes the job, not the person]
- **The job they're trying to do:** [Functional + emotional + social]
- **Situation/trigger:** When does this job become urgent?
- **Current approach:** How are they trying to solve it today? (Manual, competitor, workaround, doing nothing)
- **Jobs-related goals:** What success looks like
- **Frustrations:** Where the current approach fails
- **Relevant behaviors:** How they work, who they consult, what they care about

## Output Format

```markdown
# Jobs-to-be-Done Analysis — [Product/Customer Segment]
_Prepared [date] · Data source: [N customer interviews, sales calls, support conversations]_

## Executive Summary
[2–3 sentences: the primary job customers are trying to accomplish, key insight about why current solutions fail, and how your product (or proposed product) solves it better]

## Primary Job

### Functional Job
**Job:** [When X, I want to Y, so that Z]
**Core elements:**
- What: [What are they trying to accomplish?]
- Why: [What outcome do they need?]
- Current approach: [How are they solving it today?]
- Friction points: [What makes it hard?]

**Customer quotes:**
> "[Direct quote from conversation]" — [Customer role, company]
> "[Direct quote]" — [Customer role, company]

### Emotional Job
**Feeling they want:** [Relief, confidence, control, autonomy, belonging, pride]
**Why it matters:** [How does this emotion drive the decision to buy?]

**Supporting evidence:**
> "[Customer quote showing emotional context]" — [Source]

### Social Job
**Status/identity they want:** [Who do they want to be seen as?]
**Who are they impressing:** [Boss, teammates, customers, peers, industry]

**Supporting evidence:**
> "[Customer quote]" — [Source]

## Job Moments: Before, During, After

| Phase | Context | Challenge | Emotion |
|-------|---------|-----------|---------|
| **Before** | [What triggers the job] | [What problem exists?] | [How do they feel?] |
| **During** | [Job in progress] | [What makes it hard?] | [Current emotion] |
| **After** | [Job complete] | [What needs to happen next?] | [Desired emotion] |

## How You Fit the Job

### Where Your Solution Fits
- [How you solve the functional job]
- [How you address the emotional job]
- [How you enable the social job]

### Where Competitors Fit (or Don't)
- **Competitor A:** Solves functional job but ignores emotional/social → [Customer consequence]
- **Competitor B:** Solves functional job differently → [Why customers might prefer it]
- **Workaround/status quo:** [How customers solve the job today without a product solution]

## JTBD-Based Personas

### Persona 1: [Name Reflecting Job, e.g., "The Incident Responder"]
- **Primary job:** [Functional + emotional + social, one sentence]
- **Trigger/situation:** [When does this job become urgent?]
- **Current approach:** [Manual, competitor, workaround, nothing]
- **Success metrics:** [How do they know they've succeeded?]
- **Key frustrations:** [Where current approach fails]
- **Relevant behaviors:**
  - How they work: [Style, pace, collaboration needs]
  - Who they consult: [Peers, managers, specialists]
  - Tools/resources they trust: [What they currently use]
- **Relevant context:**
  - Company size / role: [Who in the org has this job?]
  - Industry implications: [Why this job is more critical in some industries]

### Persona 2: [Name Reflecting Different Job Variant]
[Same structure, but different job or different context]

## Competitive Positioning (Jobs Lens)

### Why You Win
- [Competitor solves functional job but we own the emotional job better]
- [We solve the job in the moment it matters most (during, not before)]
- [We reduce friction that competitors accept]

### Where Competitors Win
- [Competitor owned social job first (established brand, perception)]
- [Competitor solves related job better]

### Win/Loss Pattern
- **We win when:** [Job context: high urgency, emotional component matters, social component matters]
- **We lose when:** [Job context: low urgency, commodity solution, competitor already solved social job]

## Opportunities for Product / Marketing / Sales
### Product Insights
- Feature [X] actually solves the emotional job (not the one we marketed)
- Feature [X] is solving the wrong job for segment B; they're using a workaround
- We're missing a job moment: [before/during/after]

### Marketing / Messaging Insights
- Messaging around [feature] should emphasize [emotional job], not [functional job]
- Segment B responds to messaging about [social job]; segment A doesn't
- Competitor owns messaging around [emotional job]; we need to claim a different emotional win

### Sales / GTM Insights
- Sales conversations succeed when we lead with [emotional job], not features
- Churn happens when customer accomplished the functional job but not the emotional one
- Time-to-value is [timeframe]; selling must focus on the emotional payoff in [phase of job]

## Validation Needed
- **Assumption 1:** [The job we've identified is actually the primary driver of purchase] — Currently: [untested/partially validated/validated]
- **Assumption 2:** [This emotional job actually matters more than feature parity] — Currently: [untested/partially validated/validated]
- **Assumption 3:** [The social job is a real differentiator vs. competitor] — Currently: [untested/partially validated/validated]

## Next Steps
1. [Immediate action: often customer research or interview deeper]
2. [This week: messaging test, sales conversation test, or feature prioritization update]
3. [Before next phase: validate riskiest assumption]
```

## Example

**User:** "Analyze the jobs our customers are doing with our sales intelligence tool. We've done 15 customer interviews."

**Output:**

```markdown
# Jobs-to-be-Done Analysis — Clarity (Sales Intelligence)
_Prepared 2026-03-20 · Data source: 15 customer interviews + 8 sales call recordings_

## Executive Summary
Sales reps are trying to do the job: "Win deals by knowing more about the buyer than competitors." But the real functional job is narrower: "Answer a specific question about the prospect in 90 seconds without looking like I don't know them." The emotional job is even deeper: "Feel confident and prepared going into a call, so I don't get caught off guard." Current solutions (CRM notes, manual research, asking colleagues) are slow and unreliable. Clarity solves the confidence job better than competitors because it provides the exact intel in the exact moment, not after the call.

## Primary Job

### Functional Job
**Job:** When I'm 90 seconds before a call with a prospect, I want to instantly know their company's recent funding, leadership changes, and competitive alternatives, so that I can speak credibly about their situation without getting caught flatfooted.

**Core elements:**
- What: Get specific, recent intel about the prospect's company in <90 seconds
- Why: Avoid being caught off-guard; speak with confidence; show I've done my homework
- Current approach: Ask colleague ("Hey, who's the new CTO at Acme?"), search LinkedIn, check Crunchbase, review CRM notes (often stale), guess
- Friction points: Takes too long (5–10 minutes), often comes up empty, happens during or after the call, not before

**Customer quotes:**
> "I get to the call and realize I don't know if they just raised funding or got acquired. I feel stupid." — AE, Series B SaaS
> "90% of our reps don't prep because it takes too long. They wing it." — VP Sales, MarTech
> "The moment when the prospect says something about their company and I don't have context — that's where we lose credibility." — Sales Manager, FinTech

### Emotional Job
**Feeling they want:** Confidence, preparedness, control. Feeling like an expert who did their homework.

**Why it matters:** Reps who feel confident close deals 23% faster (internal stat from customer interviews). Reps who feel caught off-guard lose momentum and credibility.

**Supporting evidence:**
> "I hate that moment when a prospect says 'we just hired a VP of Product' and I'm nodding like I knew that." — AE
> "If I feel prepared, I can lead the conversation instead of reacting." — Top performer
> "Our best reps prep obsessively. Our average reps don't, because it's too much work." — VP Sales

### Social Job
**Status/identity they want:** "I'm the rep who always knows what's going on. I ask smart questions. I don't waste the prospect's time."

**Who are they impressing:** Their VP Sales (to be seen as high-performer), the prospect (to be seen as thoughtful, not generic), their peer group (to stand out as the prepared one).

**Supporting evidence:**
> "I want my VP to think I'm the rep who actually does research, not someone who just follows a script." — AE
> "If I have a specific insight about their company, the prospect takes me more seriously." — Top AE

## Job Moments: Before, During, After

| Phase | Context | Challenge | Emotion |
|-------|---------|-----------|---------|
| **Before** | AE gets calendar invite 5 minutes to 2 days before call | How do I get intel without spending 30 minutes? | Anxious, rushed |
| **During** | Call starts; prospect talks about their business | Do I have enough context to ask smart questions? Can I reference something specific? | Confident or nervous |
| **After** | Call ends | Did I position my product against what actually matters to them? | Satisfied or regretful |

## How You Fit the Job

### Where Clarity Fits
- **Functional:** Pulls recent company news, funding, leadership changes, competitors mentioned in their industry in <10 seconds. Intel delivered in the pre-call moment, not after.
- **Emotional:** Reps who use Clarity report 73% higher confidence going into calls. Built-in expertise reduces anxiety.
- **Social:** Reps using Clarity ask higher-quality questions; prospects perceive them as more knowledgeable. Reps get recognized by VP Sales as "the ones who use Clarity" — positive signal.

### Where Competitors Fit (or Don't)
- **CRM (HubSpot, Salesforce):** Captures notes you manually input. Doesn't surface news or changes. Stale by design.
- **Manual research (LinkedIn, Crunchbase):** Works but takes 5–10 minutes. Reps skip it when busy. No structure.
- **Research assistants / data providers:** Expensive, slow. Requires manual request. Not in the moment.
- **Status quo / asking a colleague:** Fast but unreliable. Colleague might not know. Creates distractions in shared environment.

## JTBD-Based Personas

### Persona 1: "The Prepared Performer"
- **Primary job:** Win calls by bringing specific intelligence that shows I've done my homework; feel expert, not generic
- **Trigger:** Calendar reminder for prospect call; 5 minutes to 2 days before
- **Current approach:** Asks colleague, checks CRM, searches LinkedIn, hopes for the best
- **Success metrics:** Prospect says "you've clearly done your research"; I ask a question they're surprised I know the answer to; I close the deal
- **Key frustrations:** Intelligence gathering takes too long; information is often stale; no time to prep when call is last-minute
- **Relevant behaviors:**
  - How they work: Methodical, prep-focused, wants to feel ready
  - Who they consult: Peers, VP Sales, experienced reps
  - Tools they trust: LinkedIn, CRM (when it has data), colleague expertise
- **Relevant context:**
  - Usually: High performers, 2+ years tenure, competitive personality
  - Industry: Any, but especially sales-intensive (SaaS, insurance, FinTech)

### Persona 2: "The Efficient Closer"
- **Primary job:** Close deals quickly without wasting time on prep work; get to the conversation, not the research
- **Trigger:** Call scheduled; lots of other deals to work
- **Current approach:** Quick LinkedIn check, skip CRM if busy, rely on product knowledge to carry conversation
- **Success metrics:** Close rate > pipeline, short sales cycle, deals signed
- **Key frustrations:** Feel penalized for not prepping as thoroughly as peers; want shortcuts; don't want to look unprepared
- **Relevant behaviors:**
  - How they work: Fast-moving, conversation-driven, relationship-focused
  - Who they consult: Teammates, product experts
  - Tools they trust: Slack (ask team), product knowledge
- **Relevant context:**
  - Usually: Mid-tenure, high-activity reps, strong closers
  - Industry: High-volume sales (enterprise SaaS, insurance)

### Persona 3: "The New Hire"
- **Primary job:** Ramp fast; not look stupid in front of prospects; learn the ins and outs of competitive landscape
- **Trigger:** First weeks / months on the job; every call feels high-stakes
- **Current approach:** Asks manager before every call, reads company wiki, researches competitors, over-prepares
- **Success metrics:** Hit ramp metrics; close first deal; gain confidence; be seen as sharp by manager
- **Key frustrations:** Don't know what's in the CRM vs. outdated; scared of getting caught not knowing something; slow to ramp
- **Relevant behaviors:**
  - How they work: Hungry to learn, ask lots of questions, eager to impress
  - Who they consult: Manager, onboarding buddy, sales team
  - Tools they trust: Company wiki, manager, peer advice
- **Relevant context:**
  - Usually: 0–6 months tenure, high motivation, need to prove themselves

## Competitive Positioning (Jobs Lens)

### Why You Win
- **Moment matters most:** You deliver intel in the pre-call moment. Competitors (CRM, manual research) deliver it too late.
- **Emotional job ownership:** You own the "confidence" job. Competitors own "data completeness."
- **Specific intelligence:** You pull specific facts (funding, news, competitor mentions). Generic CRM notes don't compare.

### Where Competitors Win
- **CRM integration:** HubSpot owns the "single source of truth" narrative. Clarity is an add-on.
- **Established trust:** Sales leaders know HubSpot. Clarity is new for many orgs.
- **Historical data:** If CRM has good notes, that's a substitute for Clarity's real-time intel.

### Win/Loss Pattern
- **We win when:** Rep has <5 minutes to prep; call is high-stakes (large deal, competitor discount); rep is new or wants to look sharp
- **We lose when:** Rep prepped days in advance already; prospect is a repeat customer; deal is low-priority or commoditized

## Opportunities for Product / Marketing / Sales

### Product Insights
- Feature: Real-time company news actually solves the emotional job (confidence). It's not about data completeness; it's about pre-call readiness.
- Gap: New hires need different intel than top performers. Consider a "ramp mode" with competitive narrative included.
- Expansion: Support conversations (after close) solve a different job (expand account). Reps want pre-expansion intel too.

### Marketing / Messaging Insights
- **For Prepared Performers:** Messaging = "Go into every call with the intel your competitor doesn't have." Emphasize confidence, specificity.
- **For Efficient Closers:** Messaging = "Get the facts you need in 30 seconds, not 30 minutes." Emphasize speed, simplicity.
- **For New Hires:** Messaging = "Onboard in half the time. Your team stays focused on selling, not training."
- **Not messaging:** "Complete data on every prospect." That's boring. Message the emotional job.

### Sales / GTM Insights
- Best sales conversations start with: "Picture this: it's 2 minutes before the call and you don't know they just raised $20M. We fix that."
- Churn happens when: Reps stop prepping because they ramp quickly. Consider different value props by rep tenure (new hire vs. experienced).
- Expansion opportunity: After reps adopt pre-call intel, they want competitive intel during negotiation and expansion planning.

## Validation Needed
- **Assumption 1:** The pre-call moment (90 seconds before) is when intel matters most — Currently: **Validated** (14/15 interviews mentioned this timing)
- **Assumption 2:** Confidence in pre-call prep directly drives close rate — Currently: **Partially validated** (customer data shows correlation, but need controlled test)
- **Assumption 3:** Emotional job (confidence) drives feature adoption more than functional job (data) — Currently: **Needs testing** (customers report emotional payoff; need to test if messaging about emotion drives adoption better)

## Next Steps
1. **This week:** Test messaging emphasizing confidence/emotional job vs. current messaging (data completeness). A/B test with prospect list.
2. **Next 2 weeks:** Build "New Hire Mode" feature based on Persona 3 insights. Test with 5 onboarding teams.
3. **Next month:** Validate that pre-call intel drives close-rate improvement. Run experiment: give half the team Clarity, measure close rates at 30, 60, 90 days.

---
_Want me to draft the new hire onboarding feature, or design the A/B test for messaging?_
```

## Edge Cases

- **Job is too broad or too vague:** Help the user narrow it. "Grow faster" is not a job. "Identify which feature to build next by analyzing customer conversation patterns" is a job. Dig deeper with follow-up questions.
- **Different segments have completely different jobs:** That's okay. Create separate analyses for each. Show how your product can solve multiple jobs, or recommend focusing on one segment first.
- **Emotional and social jobs are unstated:** Dig into language from conversations. Emotional jobs often show up in complaints or hesitations, not in stated needs. Look for language like "I felt," "embarrassed," "in control," "confident," "behind," "under pressure."
- **Current solution is a workaround, not a competitor:** Understand the workaround deeply. Why do they accept that friction? What would convince them to switch? Often the answer reveals the emotional job they're not getting from the workaround.
- **Job is already well-understood but product isn't solving it:** This is a product problem, not an analysis problem. Flag it. Product should be repositioned or redesigned.
