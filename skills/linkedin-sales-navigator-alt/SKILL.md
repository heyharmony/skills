---
name: "Research Account on LinkedIn"
description: "Research a target account using public LinkedIn data — identify decision-makers, map hierarchy, surface recent hiring/funding, and uncover warm introduction paths using your existing network. Trigger on: account research, prospect research, LinkedIn research, company profile, who should I target, find a contact, decision-maker identification."
dependencies: []
connectors:
  - name: "HubSpot"
    reason: "Match prospects found via research back to existing CRM contacts; avoid duplicate outreach and find existing relationships"
  - name: "Gmail"
    reason: "Find emails of prospects; identify past communications with their companies; discover warm intros through shared email history"
  - name: "Slack"
    reason: "Search past conversations for mentions of companies, people, or networks; find colleagues who know the target company"
  - name: "Google Calendar"
    reason: "Identify mutual connections through meeting attendees; spot if anyone on your team has already met the target contact"
  - name: "Linear"
    reason: "Track prospect research tasks and prospect research workflows within project boards"
author: "Harmony"
version: "1.0.0"
icon: "sparkles"
cover: ""
screenshots: []
category: "Sales"
---

## Purpose

Build a research brief on any target account, starting from public LinkedIn data and your own Harmony data. Without needing to visit LinkedIn directly, you get a structured brief: who's leading what department, what recent signals exist (funding, hiring, leadership changes), how to reach them (direct email, warm introduction path through your network), and what to research before outreach. The output helps AEs quickly learn who to call and why they'll care about your solution. Works purely from public data and Harmony connection mapping.

## When to Use

- Before cold outreach to a new account, quickly understand their structure and find a door opener
- Building an outbound list, research the top 20 accounts you want to target this quarter
- Prospect mentions a competitor or related company, quickly research whether they're a fit
- Your SDR hands off a company name with no contact name, research and provide the target list
- Account-based marketing planning, build profiles on your top 10 accounts with decision-maker hierarchy
- Preparing for a customer call, understand who else is at their company and recent company news
- When a prospect's LinkedIn profile seems too junior, research the full company to find who actually decides

## Instructions

### 1. Clarify the target and intent

Ask the user:

- **What company?** Name and industry/vertical if known
- **What department/role are you targeting?** (Sales, Ops, Finance, IT, etc.)
- **What's the use case?** Are you selling to them, or researching them for partnership/competitive intel?
- **Do you have any existing relationships?** Anyone from your company already know someone there?

If the user is researching a company their prospect works at, pull their existing CRM data to see if there are other contacts or past interactions.

### 2. Build the company snapshot

Using public information available to you (company size, funding, location, industry), create:

- **Company overview:** Industry, size range, recent funding/news, product/service
- **Growth signals:** Recent hiring announcements, funding rounds, expansion into new markets
- **Organizational structure:** Which departments exist, likely reporting structure
- **Recent leadership changes:** CEO changes, new hires in key roles, departures

### 3. Identify target decision-makers

Based on the department the user is targeting, identify who likely holds budget/influence:

**If selling to Sales:**
- VP Sales, Sales Director, Sales Manager
- Look for hiring in sales roles (suggests growth, budget, pain)

**If selling to Operations:**
- VP Operations, Head of Ops, Operations Manager
- Look for process/efficiency pain signals

**If selling to IT/Engineering:**
- CTO, VP Engineering, IT Director
- Look for infrastructure/security announcements

**If selling to Finance:**
- CFO, Finance Manager, Controller
- Look for financial announcements, funding rounds

For each role, list:
- Title and likely seniority
- Department and reporting line
- Years typical in role
- Likely pain points they care about

### 4. Find warm introduction paths

Using Harmony data (past contacts, meetings, email history), search for:

- **Direct relationships:** Do you or anyone on your team know someone at the target company?
- **Second-degree paths:** Do your Harmony contacts know people at the target company?
- **Shared networks:** Do you share industry communities, alumni networks, or associations?
- **Email patterns:** Have you emailed anyone at this company in the past (Gmail history)?

For any potential warm intro path, note:
- Who you/your team know
- Their company and role
- How close the relationship is
- Whether they'd likely be willing to intro you

### 5. Recommend research actions and outreach approach

Based on findings, recommend:

- **Who to target first:** The highest-leverage person given your ICP and use case
- **Why they'd care:** What signals (recent hiring, funding, expansion) or pain points align with your solution
- **How to reach them:** Direct email vs. warm intro; which warm path is best if multiple exist
- **Pre-call research:** What to research on the company before calling (recent news, employee commentary, their product positioning)
- **Credibility hook:** What fact from your research can you use in outreach to show you've done homework

## Output Format

```markdown
# Account Research Brief — [Company Name]
_Researched: [date] · Intent: [why researching this company] · Warm intro available: [Yes/No]_

## Company Snapshot
| Field | Data |
|-------|------|
| Industry | [vertical] |
| Company size | [employee count estimate] |
| Founded | [year] |
| HQ location | [location] |
| Recent funding | [round, date, amount if known] |
| Key product/service | [what they do] |
| Recent news | [major announcement, expansion, leadership change] |

## Growth Signals
[3–5 bullet points: hiring spree in specific department, funding round, market expansion, leadership change, product announcement]

## Target Departments & Decision-Makers
### [Department 1: e.g., Sales]
| Title | Likely Seniority | Pain Points | Notes |
|-------|-----------------|------------|-------|
| VP Sales | Senior | Pipeline coverage, rep productivity, deal velocity | Likely has $500K+ budget |
| Sales Director | Mid | Forecast accuracy, rep retention, coaching | Reports to VP Sales |

### [Department 2: e.g., Operations]
| Title | Likely Seniority | Pain Points | Notes |
|-------|-----------------|------------|-------|
| VP Ops | Senior | Process efficiency, team scaling, data quality | CFO-adjacent; budget-conscious |

## Warm Introduction Paths
**Path 1 (Strongest):**
- **Connection:** [Your colleague] knows [Target contact name] from [context]
- **Relationship strength:** [Close / Friendly / Acquaintance]
- **Why they'd help:** [They've worked together, same alumni network, etc.]
- **Intro message starter:** [Your colleague could say something like...]

**Path 2 (Secondary):**
[If multiple warm paths exist]

**Direct outreach option (if no warm intro):**
[Suggest direct email template starter and timing]

## Recommended First Call Target
**Who:** [Specific title + name if known]
**Why now:** [Recent signal that makes them relevant right now]
**Why they'd care:** [Specific pain point or use case aligned with your solution]
**How to reach:** [Direct email / warm intro through X / LinkedIn message]

## Pre-Call Research Checklist
- [ ] [Research action 1 — e.g., "Read their latest product announcement"]
- [ ] [Research action 2 — e.g., "Check their engineering team LinkedIn profiles for recent hires"]
- [ ] [Research action 3 — e.g., "Look at their job postings — what roles are hiring?"]

## Credibility Hooks for Outreach
[2–3 specific facts you discovered that show you've done research and understand their context]
- "I saw you hired 4 new sales reps last month — congratulations. We often help teams onboard that quickly."
- "Your Series B announcement mentioned scaling to new verticals — we specialize in [vertical]."

## Company Overview for Your Prep
[2–3 sentences: what they do, who they serve, recent growth, relevant context]

---

**Now what?** Use the Warm Introduction Path to get an intro, or send the first cold email with the credibility hooks. Schedule a call. Bring this brief to the call so you have the organizational context.
```

## Example

**User:** "I want to target Velocity Logistics, a Series B company in the logistics space. I want to reach the VP Operations. Do we have anyone who knows them? What should I know before I call?"

**Output:**

```markdown
# Account Research Brief — Velocity Logistics
_Researched: 2026-03-05 · Intent: Outbound prospecting (Operations tech) · Warm intro available: Yes_

## Company Snapshot
| Field | Data |
|-------|------|
| Industry | Logistics SaaS / Supply Chain Operations |
| Company size | 85–120 employees (estimate) |
| Founded | 2019 |
| HQ location | Austin, TX |
| Recent funding | Series B, $18M (Aug 2025) |
| Key product/service | Real-time shipment visibility and logistics planning platform for mid-market carriers |
| Recent news | Expanded into international logistics (UK/Canada); hired new VP Sales |

## Growth Signals
- **Series B funding (Aug 2025):** $18M from Sapphire Ventures and existing investors. Suggests 18–24 month runway for hiring and expansion.
- **Hiring surge in Sales (Q4 2025–Q1 2026):** 4 new sales roles posted in Jan, 2 filled. Team growing from 8 → 15 sales reps.
- **International expansion announced (Feb 2026):** Now serving carriers in UK and Canada. Likely ops pain scaling beyond US.
- **New VP Sales (Dec 2025):** Hired external VP Sales (came from Convoy). Suggests aggressive growth targets for 2026.
- **Job postings active:** Currently hiring for Director of Operations and Senior Ops Analyst. Suggests process scaling pain.

## Target Departments & Decision-Makers
### Operations (Primary Target)
| Title | Likely Seniority | Pain Points | Notes |
|-------|-----------------|------------|-------|
| VP Operations | Senior | Process scalability, team efficiency, new market onboarding | Budget owner; reports to COO or CEO |
| Director of Operations | Mid | Day-to-day process improvement, system integration, team training | Posts directly to VP Ops |
| Head of Logistics Ops | Mid | Carrier management, shipment workflow, compliance | Domain-specific ops leader |

### Sales (Secondary Target — if you sell to Sales)
| Title | Likely Seniority | Pain Points | Notes |
|-------|-----------------|------------|-------|
| VP Sales | Senior (new hire) | Sales enablement, onboarding new team, competitive positioning | Recently hired from Convoy; aggressive targets |
| Sales Director | Mid | Rep productivity, deal velocity, customer references | Likely managing the new team ramp |

## Warm Introduction Paths
**Path 1 (Strongest):**
- **Connection:** James Park (your colleague, Sr. AE at TechFlow) knows Marcus Chen (Velocity's VP Ops) from their time at Flexport (2021–2023).
- **Relationship strength:** Friendly; stayed in touch after Flexport.
- **Why they'd help:** James still speaks highly of Marcus and they occasionally grab coffee.
- **Intro message starter:** "Marcus, I wanted to connect you with James Park — he's at [your company] now and works with a lot of logistics operators. He mentioned you're scaling Velocity's operations internationally and that might be a fit for what we do."

**Path 2 (Secondary):**
- **Connection:** Sarah Nguyen (your Customer Success Manager) went to UT Austin with Aisha Patel (Velocity's Director of Operations).
- **Relationship strength:** Acquaintance; both in the UT alumni network.
- **Why they'd help:** Alumni network bias; Sarah could remind Aisha of the connection.
- **Intro message starter:** "Aisha, my colleague Sarah went to UT with you — she mentioned you're at Velocity now. Would love to grab 15 minutes this month."

**Direct outreach option (if warm paths don't work):**
- Email the VP Ops directly with research showing you understand their expansion challenge. Subject: "Velocity's international ops — one question"
- Credibility hook: Reference the UK/Canada expansion and new Director of Ops hiring.
- Timing: Target Tuesday–Thursday, mid-morning.

## Recommended First Call Target
**Who:** Marcus Chen, VP Operations, Velocity Logistics
**Why now:** Velocity just announced UK/Canada expansion (Feb). VP Ops is typically responsible for launching in new markets. This is a moment of high pain and high attention.
**Why they'd care:** International expansion = new processes, new team, new compliance/carrier relationships. Logistics ops platform companies always struggle with scaling workflows across regions.
**How to reach:** Warm intro through James Park (your colleague). Mention the international expansion to open the conversation.

## Pre-Call Research Checklist
- [ ] Read Velocity's last customer case study or press release about UK expansion
- [ ] Check Marcus Chen's recent LinkedIn activity (what's he been posting about?)
- [ ] Look at the Director of Operations job posting — what skills are they hiring for? Tells you their pain.
- [ ] Research Convoy (where the new VP Sales came from) — what's different about Velocity's approach?
- [ ] Find any Velocity carrier testimonials or reviews (G2, Capterra) — what do customers praise/complain about?

## Credibility Hooks for Outreach
- "I see you're scaling into UK and Canada — that's a big lift on your ops team. We work with Series B logistics platforms on international launch processes."
- "Your job posting for Director of Ops mentions 'multi-region workflow optimization' — that's a specialty for us."
- "You brought in a new VP Sales from Convoy. We've helped their product get adopted across multiple carrier types — curious if you're seeing the same adoption curves."

## Company Overview for Your Prep
Velocity Logistics is a Series B (funded Aug 2025) SaaS platform serving mid-market carriers with real-time shipment visibility and planning. Founded 2019, now ~100 employees. Recently expanded internationally to UK/Canada, which is putting pressure on their Operations team to scale processes beyond the US model. VP Sales is new (came from Convoy), suggesting aggressive 2026 growth. They're hiring heavily in Ops roles, indicating scaling pain. This is a company in hyper-growth mode after funding, with clear operations pain and the budget to solve it.

---

**Now what?** Get James Park to warm-intro you to Marcus Chen this week. Prep for the call using the research above. Bring this brief to the conversation so you can reference specific signals (UK expansion, new Director hire) that show you've done homework. This is a high-intent target — move fast.
```

## Edge Cases

- **Company is private, little public information:** Work with what's available (company size estimate, founder background, limited recent news). Recommend the user ask their SDR to gather more context via email or LinkedIn message first.
- **No warm intro path exists in your network:** Provide a strong direct outreach template that leverages the research you've done (recent hiring, funding, expansion). Make the credibility hooks extra sharp.
- **User wants to research a competitor instead of a prospect:** Adapt the output to competitive positioning — what are they doing better/worse, how should you position against them.
- **Target is a small company (10 people), flat structure:** Adjust decision-maker hierarchy. Everyone is closer to decision-making. Research founder/CEO directly.
- **User has outdated information about the company:** Acknowledge it and note what needs fresh research before outreach.
- **Prospect works at a remote/distributed company with no clear HQ:** Focus on department and function rather than location. Map influence differently.

```
