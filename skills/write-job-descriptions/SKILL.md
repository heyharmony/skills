---
name: "Write Job Descriptions"
description: "Craft job descriptions that attract right-fit talent by leading with 12-month success vision and outcome-driven requirements. Move beyond task lists to define where candidates spike, frame benefits from candidate perspective, and use polarizing language to filter. Trigger on: new role approval, headcount planning, job board posting, hiring kick-off."
dependencies: []
connectors:
  - name: "Slack"
    reason: "Gather team input on role needs and success metrics from future collaborators"
  - name: "Google Drive"
    reason: "Collaborative editing, version history, and stakeholder feedback on job descriptions"
  - name: "Notion"
    reason: "Store job description templates, track which descriptions attracted good candidates"
  - name: "GitHub"
    reason: "Engineer roles can link to actual codebase, engineering standards, architecture decisions"
  - name: "HubSpot"
    reason: "Track which job descriptions attracted candidates who passed screening (iterate descriptions)"
author: "Harmony"
version: "1.0.0"
icon: "sparkles"
cover: ""
screenshots: []
category: "Operations"
---

## Purpose

Write job descriptions that attract candidates who will actually thrive in your role instead of filtering based on resume credentials or task checklists. Lead with the business outcome you need solved and the 12-month success vision, define specific competency spikes instead of generalist requirements, and use language that polarizes high-signal candidates toward your culture.

## When to Use

- **Role approval in headcount planning** — before posting on job boards
- **Existing role has chronic vacancy** — rewrite the description to attract different talent profile
- **New role, undefined scope** — job description forces you to clarify what success looks like
- **Hiring multiple people for similar roles** — inconsistent descriptions lead to inconsistent hires
- **Competitive talent market** — generic descriptions don't stand out; specific vision does
- **Domain-switching candidates** — description clarity helps them self-select if skills transfer
- **Culture fit issues in past hires** — rewrite to emphasize values, working style, and collaboration mode

## Instructions

1. **Start with the 12-month success vision**
   - Imagine clinking champagne with this person 12 months from now
   - What specifically changed? What did they build, fix, or unlock?
   - Write in measurable terms: "Pipeline grew from $X to $Y" or "Reduced customer churn by Z%"
   - Use specific number or outcome, not vague "improved performance"
   - This becomes the opening paragraph — candidates see this first

2. **Define the specific problem they're solving**
   - What's broken or missing right now?
   - Frame from business outcome: not "need engineer" but "our infrastructure costs 3x of comparable companies"
   - What would success look like differently?
   - Include context: why does this matter? Why now?

3. **Identify where they should spike (not be average)**
   - What is the one thing this person must be exceptional at?
   - Not "must know Python and JavaScript and Docker and cloud" — that's a unicorn list
   - Example spikes: "Deep expertise in supply chain logistics" or "World-class at designing systems customers love"
   - Be honest: where do they carry more weight?
   - Secondary skills: "You've worked with X, and that's helpful but we can teach Y"

4. **Frame requirements as outcomes, not tools**
   - Don't write: "5 years of React experience required"
   - Write: "Built complex UIs where performance and user clarity matter; you've optimized for both"
   - Don't write: "Salesforce experience"
   - Write: "You understand CRM workflows well enough to know when to configure vs. code"
   - Outcome framing lets candidates with adjacent skills apply (Ember experience counts toward complex UI)

5. **Be specific about team size, pace, and collaboration mode**
   - "You'll be solo IC" or "You'll manage 3-person team and contribute individual work"
   - "We move fast; expect priorities to shift weekly" or "We plan quarterly; stability in roadmap"
   - "Daily Slack synchronous collaboration" vs. "Async-first, timezone-distributed"
   - This filters for working style fit, not just skill fit

6. **Describe the company/team context with polarizing language**
   - Intentional polarization filters for people who'll thrive vs. people who'll suffer
   - Example: "We optimize for long-term compounding, not short-term metrics. If you need quarterly wins for your resume, this isn't right."
   - Example: "We deeply involve customers in product decisions. If you prefer designing in isolation, we're not a fit."
   - Example: "We debate decisions hard before committing. If you need consensus before moving, our pace will frustrate you."
   - Polarizing language = high-signal filtering

7. **Lead with what makes this role different or compelling**
   - Not "competitive salary and benefits" (assumed)
   - Lead with: "You'll design infrastructure for 100M users" or "You'll directly influence founder thinking on strategy"
   - What would make someone turn down other offers for this?
   - Specificity > generality (not "growth opportunity" but "you'd move from IC to managing a team in 18 months")

8. **Avoid generic competency lists**
   - Don't list "strong communication skills" or "team player"
   - If communication matters, show it: "You'll present to customers monthly; clarity matters"
   - If teamwork matters, describe collaboration: "We pair-program on critical systems; you'll challenge ideas respectfully"
   - Show, don't list

9. **Iterate based on who applies**
   - After first round of candidates, review applications
   - Who's applying? Are they the talent profile you need?
   - If not, rewrite. Descriptions that attract wrong candidates are wrong descriptions
   - Track: which job descriptions led to strong final hires? Replicate that language
   - Which attracted no-shows or culture mismatches? Rewrite polarizing language

10. **Include logistics clearly**
    - Salary or salary range (transparency filters self-selection)
    - Location flexibility: remote, hybrid, on-site
    - Interview timeline and process overview
    - Hiring team roles (who are they meeting?)

## Output Format

```
[COMPANY] | [ROLE TITLE] | [DEPARTMENT]
[Location: On-site/Hybrid/Remote] | [Salary range if you're including it]

──────────────────────────────────────────────────────────────────

🎯 THE OPPORTUNITY

[12-month success vision in specific terms — what changes? What outcome?]

Example: "12 months from now, our data infrastructure team is running on unified pipeline; we've cut deployment time from 6 hours to 15 minutes, and every engineer can ship features without waiting on data plumbing. You'll have built that system."

──────────────────────────────────────────────────────────────────

THE PROBLEM YOU'RE SOLVING

[What's broken or missing right now? Why does it matter?]

Example: "Right now, customer onboarding requires manual data mapping. That takes 2 weeks per customer. Half our sales time is customer success troubleshooting because the data breaks mid-pipeline. We need someone who can design for both reliability and velocity."

──────────────────────────────────────────────────────────────────

WHERE YOU'LL SPIKE

[The one core thing they must be exceptional at. 1-2 sentences.]

[Secondary 1-2 competencies where they should be strong.]

[Optional: "You haven't done X before, and that's okay — we'll teach you." This unlocks cross-industry candidates.]

Example:
"Core Spike: You've built distributed systems where reliability is non-negotiable. You optimize for both performance AND debuggability.

Strong At: API design, async systems, Python or Go, SQL query optimization.

You Haven't: Never worked on fintech systems. We'll teach you compliance/audit requirements."

──────────────────────────────────────────────────────────────────

YOUR TEAM & COLLABORATION MODE

[Size, pace, working style. Be specific about how this role collaborates.]

[Example language that polarizes for fit]

Example:
"You'll work with a 4-person data platform team; you're not solo. We pair on critical systems, so you'll challenge ideas in code review and be challenged back.

Pace: We ship features weekly. If you need months of planning before building, we'll drive you nuts. If you thrive in structured iteration, you'll love it here."

──────────────────────────────────────────────────────────────────

THE JOURNEY (12 / 6M / 3M milestones)

Month 1-3: [What success looks like early]
Month 6: [What you're owning / leading]
Month 12: [Where you've grown the team / role]

Example:
"Month 1-3: You've shipped 5 features, understood our architecture, and challenged 2 decisions that led to better designs.
Month 6: You're leading the data sync redesign; junior engineer is pairing with you.
Month 12: You've rebuilt our pipeline; you're mentoring the team on systems thinking."

──────────────────────────────────────────────────────────────────

WHAT MAKES THIS ROLE DIFFERENT

[Lead with what makes someone choose this over other opportunities]

[Specificity matters more than generic benefits]

Example:
"You'll work directly with our founders — they ask your opinion on strategy, not just execution. Your first month feedback will literally reshape our data roadmap.

You'll own the entire customer experience for one vertical — not just back-end plumbing but seeing the impact when onboarding drops from 2 weeks to 48 hours."

──────────────────────────────────────────────────────────────────

THE COLLABORATION PATTERN

[How will they actually work? Meetings, async, pairing?]

Example:
"• Daily 15min async standup in Slack
• 1:1 with your manager 1x/week
• Pair programming on critical systems (2-3x/week)
• Monthly customer calls to see impact
• Office: Tuesdays & Wednesdays (distributed Slack-first, but we sync in-person for pairing)

No meetings just to have meetings. No 'status updates' — we use written updates."

──────────────────────────────────────────────────────────────────

LOGISTICS

Compensation: $X-$Y (or range for your market)
Equity: [Yes/No, range if yes]
Location: [Remote/Hybrid/On-site]
Start Date: [ASAP or specific date]

Interview Process:
1. Initial conversation (30 min) — learn about your background
2. Technical/skill assessment (take-home or pairing, ~2-4 hours)
3. Hiring manager deep-dive (60 min) — discuss impact, collaboration style
4. Team conversation (60 min) — meet future teammates
5. Reference calls (if we're serious)

Timeline: We move quickly. If you're interested and available, this happens in 2-3 weeks.

──────────────────────────────────────────────────────────────────

APPLY

[How to apply, who to contact]
[Email or link]
```

## Example

```
AXIOM | Senior Data Infrastructure Engineer | Engineering
Remote-Friendly (NYC-preferred) | $220k-260k base + 0.3-0.5% equity | Immediate

──────────────────────────────────────────────────────────────────

🎯 THE OPPORTUNITY

In 12 months, Axiom's platform handles 10x current data volume without architectural changes. You've designed a unified ingestion system that lets customers ship data with one API call instead of five integrations. Every engineer on our platform team now moves faster because they're not debugging data plumbing. You'll have built the system that unblocks our growth.

──────────────────────────────────────────────────────────────────

THE PROBLEM YOU'RE SOLVING

Right now, customers integrate with Axiom through 5 different data pipelines. Each has its own reliability issues. Support tickets are 40% "why is my data missing?" questions. Onboarding new data sources takes 2 weeks because we add custom adapters manually. This slows our growth and drains our team.

We need someone who can design both simplicity and reliability — a system where customers trust their data will arrive, and our team can ship new connectors in days not weeks.

──────────────────────────────────────────────────────────────────

WHERE YOU'LL SPIKE

Core Spike: You've designed systems that prioritize reliability + developer experience. You understand when to optimize for performance vs. debuggability vs. cost. You've built APIs customers love using.

Strong At: Go or Rust, distributed systems, async patterns, observability (tracing, logging, metrics), cloud infrastructure (AWS/GCP).

You Haven't: Never done fintech/compliance-heavy systems. You haven't managed teams. Both are okay — we're buying systems thinking, not every credential.

──────────────────────────────────────────────────────────────────

YOUR TEAM & COLLABORATION MODE

You'll work with our 5-person platform team (1 senior engineer, 2 mid-level, 1 junior). You're not solo and not managed.

Pace: We move fast. Axiom runs on a 2-week sprint cycle. You'll ship features constantly. We don't plan 6 months out. If you need stability and predictability, we're not a fit. If you thrive in iteration, you'll love it.

Collaboration: We pair on critical systems. You'll code review 2-3 PRs daily. You'll challenge ideas. We'll challenge yours back. If you prefer writing code alone, this team won't work for you.

──────────────────────────────────────────────────────────────────

THE JOURNEY

Month 1-3:
You've onboarded to our architecture, shipped 3-4 features, and understood our data flow end-to-end. You've suggested 1-2 improvements that we implement.

Month 6:
You're leading the unified ingestion design. You've convinced the team on 2 technical decisions (and we've talked you out of 1). Junior engineer is pairing with you on critical path.

Month 12:
You've shipped the unified ingestion system. Customers migrate off old pipelines in 3 weeks instead of 3 months. Support tickets drop 30%. You're mentoring the team on systems thinking.

──────────────────────────────────────────────────────────────────

WHAT MAKES THIS ROLE DIFFERENT

You'll see impact fast. Right now, 100 customers use our platform. Your code directly touches their experience. When you reduce ingestion latency by 50%, you'll hear about it from customers.

You'll influence product strategy. Our founders ask engineers for technical opinions on market direction. Your first month, you'll sit in strategy meetings. Your perspective shapes our 12-month roadmap.

You own the team's infrastructure experience. You're not building something someone else designed. You're designing it. You'll set patterns the team follows for years.

──────────────────────────────────────────────────────────────────

THE COLLABORATION PATTERN

• Async-first with synchronous depth:
  - 9am ET daily standup (15 min Slack, on-premise option Tuesdays/Wednesdays)
  - 1:1 with your manager (1x/week, 30 min)
  - Pairing on critical systems (3x/week, 60-90 min focused blocks)
  - Friday architecture deep-dives (optional, 90 min)

• Off-site quarterly planning (we fly everyone to NYC, 3 days)

• Customer calls monthly (see real usage)

No status update meetings. No "check in" calls that could be Slack. We respect context switching.

──────────────────────────────────────────────────────────────────

LOGISTICS

Compensation: $220k-260k base, 0.3-0.5% equity (depends on level)
Location: Remote-friendly; NYC office preferred for collaboration 2 days/week
Start: Immediate (or 2-4 weeks if you need notice)

Interview Process:
1. 30-min call with hiring manager (learn about you, explain role)
2. 4-hour take-home system design (realistic problem, no framework)
3. 60-min technical deep-dive (discuss your design, challenge decisions)
4. 60-min with co-founder (talk product direction, how you think)
5. Reference calls (2-3 people we'll ask about)

Timeline: 2-3 weeks if you're ready to move fast.

──────────────────────────────────────────────────────────────────

APPLY

Email your resume + GitHub (or portfolio) to: hiring@axiom.io
Subject: "Senior Data Infrastructure Engineer — [Your Name]"

Questions? Direct message on LinkedIn: @axiom-engineering

We're serious about hiring. If you apply, you'll hear from us in 24 hours.
```

## Edge Cases

**Role changed and description is now stale** — Treat job descriptions like product docs, not fire-and-forget. If the role evolved, rewrite it. Candidates notice stale descriptions; they signal poor execution.

**You're hiring for a role that doesn't exist yet** — Lean on the 12-month success vision even harder. "In 12 months, we'll have done X. We don't know exactly how yet, but you'll figure it out." Attracts builders, not position-fillers.

**You need urgency to show in the description** — Don't write "urgency" directly. Show it: "We're hiring immediately" or "You'd start within 2 weeks." Specific timeline signals seriousness.

**Compensation range will attract wrong candidates** — That's a feature, not a bug. Market rate transparency filters for people who'll accept your range. Too low a range? That tells you your offer isn't competitive for the talent you want.

**Role requires generalist but your description screams specialist** — Clarify: Are you actually hiring a generalist who can learn, or are you underselling the specialization? If they need to spike in one thing, say it. If they need to be mediocre at everything, be honest about that.

**Job description has been running for months with no strong applicants** — Rewrite. You're filtering wrong. Either the vision is unclear, the polarizing language is off, or you're not reaching the right candidate pool. Iterate the description.
