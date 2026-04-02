---
name: "Find Stale Prospects to Re-Engage"
description: "Identify which prospects have changed roles, moved companies, or shown new buying signals since you last engaged — automatically surface re-engagement opportunities with fresh context. Trigger on: prospect updates, account review, prospect check-in, account status, sales territory review, lead refresh."
dependencies: []
connectors:
  - name: "LinkedIn"
    reason: "Monitor prospect role changes, company moves, and career progression to identify re-engagement timing"
  - name: "HubSpot"
    reason: "Track prospect history, last interaction date, and previous deal outcomes to inform refresh strategy"
  - name: "Salesforce"
    reason: "Surface opportunity history and contact status to identify stale relationships worth reconnecting"
  - name: "Gmail"
    reason: "Review email thread closure status and last communication to determine when to re-engage"
author: "Harmony"
version: "1.0.0"
icon: "sparkles"
cover: ""
screenshots: []
category: "Sales"
---

## Purpose

Surface old prospects who have undergone material changes — new role, company move, changed title, or company news creating urgency — so you can re-engage with fresh context instead of cold outreach. When Harmony conversation data exists, understand exactly what was discussed before and how to reframe the conversation now that circumstances have changed. Sales teams use this to reactivate sleeping prospects efficiently, avoiding irrelevant follow-ups while focusing on prospects whose situations have evolved in ways that create new opportunity.

## When to Use

- Territory review — systematically check which old prospects have changed companies or roles
- Quarterly account review — identify which stale deals might have new decision-makers
- After product launch — check which old prospects might now be a good fit based on new features
- Competitive threat spotted — find which prospects are at companies evaluating alternatives and could be re-engaged
- Reactivation campaign — build a list of prospects to contact based on material changes in their situation

## Instructions

### 1. Define the prospect pool

Start with what the user needs refreshed:
- **All prospects in my territory** — Everyone in a geographic region or segment
- **Lost deals from past year** — Opportunities that didn't close, might be worth revisiting
- **Stale leads from campaign** — Prospects you reached out to but never converted
- **Specific prospect list** — Hand-picked list of accounts you want to check in on

### 2. Check for role and company changes

For each prospect, gather:
- **Current company:** Where are they now? (LinkedIn, email domain)
- **Current role:** Promotion, demotion, or lateral move? (LinkedIn)
- **Tenure in role:** New in position (within 6 months) or established?
- **Company change:** Did they leave the company we were targeting? (LinkedIn)
- **New company size/stage:** Moved from startup to enterprise or vice versa?

### 3. Surface company buying signals

For their current or previous company, identify:
- **Funding announcement:** Series A, B, C, down round, acquisition
- **Executive changes:** New CEO, VP Sales, CFO, CTO hired or departed
- **Product launches:** New product line that creates selling opportunity
- **Hiring spree:** Job postings suggest growth and budget availability
- **Market events:** IPO, acquisition, major partnership, compliance certification
- **Industry news:** Regulation, market consolidation, competitive threat

### 4. Assess re-engagement opportunity

For each prospect with changes, evaluate:
- **Opportunity tier:** High / Medium / Low
- **Type of change:** Role change, company move, company news, personal seniority increase
- **New angle:** How does their new situation create opportunity?
- **Champion potential:** Is this change making them a better champion for your product?
- **Timing:** How fresh is the change? (Within 2 months = urgent, within 6 months = timely, >1 year = cool)

### 5. Build the refresh output

Create:
- List of all prospects with material changes
- Categorized by re-engagement opportunity level
- Context for each (what changed, when, why it matters)
- Recommended re-engagement angle and timing
- Draft outreach message for each

## Output Format

# Prospect Refresh Report — [Territory/List Name]
_Prepared [date] · Last full review: [date]_

## Executive Summary
- **Total prospects reviewed:** [count]
- **Prospects with changes:** [count] ([%])
- **High-opportunity refresh targets:** [count]
- **Recommended outreach this week:** [count]

## HIGH-OPPORTUNITY PROSPECTS (Re-engage This Week)

### Prospect 1: [Name] / [Previous Company] → [New Company]
- **Previous situation:** [Role at company we were targeting]
- **What changed:** [Moved to new company, got promoted, company raised funding, etc.]
- **Change date:** [When did this happen?]
- **New opportunity:** [Why this change creates a selling opportunity]
- **Recommended approach:** [How to re-engage]
- **Draft message opener:** "[Hook that references the change]"
- **Data source:** [LinkedIn, Crunchbase, company news, etc.]

### Prospect 2: [Name] / [Company]
- **Previous situation:** [What was their situation before]
- **What changed:** [Change that happened]
- **Change date:** [When]
- **New opportunity:** [Why it matters]
- **Recommended approach:** [Re-engagement strategy]
- **Draft message opener:** "[Hook]"
- **Data source:** [Source]

[Continue for top high-opportunity prospects...]

## MEDIUM-OPPORTUNITY PROSPECTS (Re-engage This Month)

| Prospect | Company | What Changed | When | Why It Matters | Recommended Timing |
|----------|---------|--------------|------|---------------|--------------------|
| [Name] | [Company] | [Change type] | [Date] | [Opportunity] | [This month] |

[List 3–5 medium-opportunity prospects with context]

## LOW-OPPORTUNITY PROSPECTS (Monitor, Don't Re-engage Yet)

| Prospect | Company | What Changed | Status | Next Review Date |
|----------|---------|--------------|--------|------------------|
| [Name] | [Company] | [Change] | [e.g., "Moved to competitor, not opportunity yet"] | [Date] |

[Brief list of prospects with changes that don't create immediate opportunity]

## Refresh Playbook: By Change Type

### Prospect Got Promoted
- **What it means:** New authority, new budget, new mandate
- **How to re-engage:** "Congrats on the promotion to [role]. I imagine you're mapping out priorities for your first 90 days..."
- **Angle:** Help them look good in their first months by solving a known pain point from their previous role
- **Timing:** Within 2–4 weeks of promotion (they're in listening mode)

### Prospect Changed Companies
- **What it means:** New company, new systems, new pain points, new opportunities
- **How to re-engage:** "I saw you moved to [new company]. One thing we found valuable at [previous company] was..."
- **Angle:** Your solution already solved a problem at their last company; there may be a similar need here
- **Timing:** Within 1 month of company change (they're ramping and open to learning)

### Prospect's Company Got Funding
- **What it means:** Budget is available, growth initiatives are launching, decision velocity increases
- **How to re-engage:** "Saw [company] just raised [round]. That kind of growth usually means new challenges around [problem]. Curious if that's on your roadmap?"
- **Angle:** Growth creates new problems; your solution scales with their expansion
- **Timing:** Within 2 weeks of announcement (momentum is high)

### Prospect's Company Hired Key Exec
- **What it means:** New priorities, new strategic direction, new decision-makers
- **How to re-engage:** "Your new [exec title] likely has a mandate to improve [area]. That was a known pain point before. Still a priority?"
- **Angle:** New executive often wants to make a mark; enabling quick wins builds credibility
- **Timing:** Within 1 month of exec hiring (they're setting direction)

### Prospect's Company Had Product Launch
- **What it means:** Company is growing, revenue is increasing, operational needs change
- **How to re-engage:** "Great to see the new [product]. That expansion usually means growth in [area where you can help]."
- **Angle:** New product line needs supporting infrastructure; your solution enables scaling
- **Timing:** 4–6 weeks after launch (they've moved past launch week chaos)

### Prospect Was a Past Lost Deal
- **What it means:** They said no before; circumstances may have changed
- **How to re-engage:** "It's been [timeframe] since we last talked. Lots has changed on our side. Worth a conversation?"
- **Angle:** You've likely improved product, added features, changed pricing; context is different now
- **Timing:** If they said no due to timing/budget: 6+ months, when situation might have changed. If they said no due to product gap: only re-engage after you've genuinely closed that gap

## Now What?

1. Prioritize the HIGH-OPPORTUNITY prospects and draft personalized re-engagement emails for each
2. Set up LinkedIn monitoring on HIGH and MEDIUM prospects to catch more changes in real-time
3. Schedule weekly 15-minute prospect refresh scan to identify new changes
4. For each High prospect, customize the draft message with specific context from their past role
5. Track which re-engagement attempts convert — learn what types of changes drive highest response rates

---
_Want me to monitor these prospects for updates, or help draft personalized re-engagement emails for the high-opportunity list?_

## Example

**User:** "Refresh my lost deals from 2025. Which ones might be worth reaching back out to?"

**Output:**

# Prospect Refresh Report — Lost Deals from 2025
_Prepared 2026-03-22 · Last full review: Never (first refresh)_

## Executive Summary
- **Total lost deals reviewed:** 12
- **Prospects with material changes:** 8 (67%)
- **High-opportunity refresh targets:** 3
- **Recommended outreach this week:** 2

## HIGH-OPPORTUNITY PROSPECTS (Re-engage This Week)

### Prospect 1: Alex Rodriguez / CloudScale Inc. → NetCore (Promoted)
- **Previous situation:** Sales Operations Manager at CloudScale (2025); we pitched a sales automation tool, they said "we're not ready yet"
- **What changed:** Promoted to VP Sales Operations at NetCore Inc. (announced March 2026)
- **Change date:** March 2026 (2 weeks ago)
- **New opportunity:** Alex now has authority to make infrastructure decisions. At CloudScale, Alex identified same pain points but CFO blocked spend. At NetCore, Alex is making strategic decisions about sales ops. This is a new champion with budget authority.
- **Recommended approach:** Congratulate on promotion, reference specific pain point Alex mentioned at CloudScale (reps not logging activity), and position as "helping her look good in the first 90 days" at NetCore
- **Draft message opener:** "Alex, congrats on the promotion to VP Sales Operations at NetCore. I remember you mentioning at CloudScale that reps weren't logging activity — curious if that's still a pain point at your new company?"
- **Data source:** LinkedIn (job change announcement)

### Prospect 2: Maria Gutierrez / TechVenture → Series C Funding
- **Previous situation:** SVP Sales at TechVenture; we proposed deal, they said "budget frozen until after Series C"
- **What changed:** TechVenture announced $60M Series C funding (March 2026)
- **Change date:** March 2026 (just closed)
- **New opportunity:** Budget is no longer frozen. $60M gives them runway to invest in sales infrastructure. Maria likely has a new mandate to scale the sales team. This is the exact scenario where they said they'd revisit post-funding.
- **Recommended approach:** Acknowledge the funding win, note that budget constraints have probably lifted, and position as "the infrastructure that scales with your growth plan"
- **Draft message opener:** "Saw the Series C close for TechVenture — massive congrats. Now that funding is secured, the infrastructure question probably moved up the priority list. Worth revisiting?"
- **Data source:** Crunchbase (funding announcement)

### Prospect 3: James Chen / RetailCorp (New CFO)
- **Previous situation:** VP Finance at RetailCorp; we pitched, said "finance isn't the buyer, sales leader needs to approve this," never got CFO air cover
- **What changed:** New CFO hired (March 2026), previous CFO departed
- **Change date:** March 2026 (1 month ago)
- **New opportunity:** New CFO may have different priorities and a mandate to improve operational efficiency. Previous CFO was blockers. Fresh decision-maker = fresh opportunity. Also, new CFO is building credibility by making strategic decisions; this could be an easy win to show impact.
- **Recommended approach:** Research new CFO's background and priorities, position as helping the finance team demonstrate ROI on sales investments, and offer a non-threatening intro call with new CFO
- **Draft message opener:** "James, I saw your new CFO just came on board. Typically one of their early priorities is improving finance/sales alignment and demonstrating impact on revenue. Would be interesting to chat about how that's shaping up?"
- **Data source:** LinkedIn

## MEDIUM-OPPORTUNITY PROSPECTS (Re-engage This Month)

| Prospect | Company | What Changed | When | Why It Matters | Recommended Timing |
|----------|---------|--------------|------|---------------|--------------------|
| Sarah Kim | InnovateTech | Promoted to Director of Sales Operations (from Manager) | February 2026 | New authority to make procurement decisions; was a champion before but lacked authority | Late March (give her 1 month to settle into role) |
| Marcus White | GlobalCorp | Company announced new product line (manufacturing SaaS) | February 2026 | New product = new go-to-market = new sales ops needs | Late March (product team usually sets GTM strategy by then) |
| Lisa Park | StartupXYZ | Series A funding raised, hiring spree announced (5 new AE roles) | Early March 2026 | Rapid team growth creates onboarding and ramp challenges you can solve | This month (hiring likely starts mid-April) |

## LOW-OPPORTUNITY PROSPECTS (Monitor, Don't Re-engage Yet)

| Prospect | Company | What Changed | Status | Next Review Date |
|----------|---------|--------------|--------|------------------|
| David Torres | FormCo | Moved to competitor (SalesForce's sales ops team) | Competitor now, not opportunity | Quarterly check (if he ever moves to a prospect company again) |
| Michelle Zhang | OldTech Inc. | Company acquired by larger firm; she stayed but may be deprioritized | Post-acquisition, budget likely frozen for 6+ months | June 2026 (let acquisition integration finish) |

## Refresh Playbook: By Change Type

### Prospect Got Promoted
- **What it means:** New authority, new budget, new mandate
- **How to re-engage:** "Congrats on the promotion to [role]. I imagine you're mapping out priorities for your first 90 days..."
- **Angle:** Help them look good in their first months by solving a known pain point from their previous role
- **Timing:** Within 2–4 weeks of promotion (they're in listening mode)
- **Example:** Alex was blocked at CloudScale by CFO. At NetCore as VP Sales Operations, Alex IS the decision-maker. Old blocker is gone.

### Prospect Changed Companies
- **What it means:** New company, new systems, new pain points, new opportunities
- **How to re-engage:** "I saw you moved to [new company]. One thing we found valuable at [previous company] was..."
- **Angle:** Your solution already solved a problem at their last company; there may be a similar need here
- **Timing:** Within 1 month of company change (they're ramping and open to learning)
- **Example:** Alex's pain point (reps not logging) exists at most SaaS companies. NetCore probably has the same problem.

### Prospect's Company Got Funding
- **What it means:** Budget is available, growth initiatives are launching, decision velocity increases
- **How to re-engage:** "Saw [company] just raised [round]. That kind of growth usually means new challenges around [problem]. Curious if that's on your roadmap?"
- **Angle:** Growth creates new problems; your solution scales with their expansion
- **Timing:** Within 2 weeks of announcement (momentum is high)
- **Example:** TechVenture explicitly said "budget frozen until Series C." Series C just closed. Budget constraint is gone.

### Prospect's Company Hired Key Exec
- **What it means:** New priorities, new strategic direction, new decision-makers
- **How to re-engage:** "Your new [exec title] likely has a mandate to improve [area]. That was a known pain point before. Still a priority?"
- **Angle:** New executive often wants to make a mark; enabling quick wins builds credibility
- **Timing:** Within 1 month of exec hiring (they're setting direction)
- **Example:** James' new CFO needs early wins to build credibility. A smart finance/sales alignment initiative could be exactly that.

## Now What?

1. Send personalized re-engagement emails to Alex, Maria, and James this week (while changes are fresh)
2. Set up LinkedIn monitoring on all 12 prospects to catch more changes going forward
3. Add the 3 medium-opportunity prospects to a weekly check-in — re-engage end of March
4. Track which re-engagement attempts convert — identify the highest-ROI change types
5. Run this refresh report quarterly as a standard pipeline-building exercise

---
_Want me to draft the full re-engagement email for Alex, or analyze which change type converts best based on your past data?_

## Edge Cases

- **Prospect is now at a competitor:** Flag clearly. Only re-engage if they're at a company that's still a prospect (not a direct competitor of yours). If they're at a competitor, note for future reference (they might move again).
- **Prospect got demoted or changed to a less relevant role:** Mark as deprioritized unless they move again to a relevant role. Don't force engagement if they're less relevant now.
- **No changes detected but long time since last contact:** Flag as "stale but no recent change." Only re-engage if you have new product/positioning to share. Don't re-engage without fresh context.
- **Multiple prospects at the same company:** If company news (funding, acquisition, new product) shows up, mark all of them as high-opportunity. Coordinate a multi-threaded outreach.
- **Prospect explicitly said "no forever":** Don't refresh unless circumstances change materially (company news, role change). Respect past hard NOs unless context shifts.
- **Past conversation data shows they evaluated and chose competitor:** Note this. Don't re-engage unless you've closed the gap that made competitor win. Re-engage only if you can credibly say "we've addressed the gap that mattered."
