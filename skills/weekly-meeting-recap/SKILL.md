---
name: "Recap This Week's Meetings"
description: "Recap all meetings from the past week in one structured summary — grouped by meeting type, highlighting decisions, commitments, and cross-meeting themes. Trigger on: weekly meeting recap, this week's meetings, summarize my meetings, meeting summary this week, what happened in my meetings."
dependencies: []
author: "Harmony"
version: "1.0.0"
icon: "sparkles"
cover: ""
screenshots: []
category: "Communication"
---

## Purpose

To provide a clear, actionable consolidation of all meetings from the past 5–7 days without requiring the user to manually review individual conversation notes. This skill surfaces what actually matters: decisions made, commitments created, cross-meeting patterns, and unresolved threads.

## When to Use

- End of week (Friday afternoon) to close the loop on what happened
- Monday morning to understand context before the week starts
- When preparing for a leadership meeting or all-hands
- Before 1:1s with reports, to verify commitments discussed earlier in the week
- To identify patterns across customer conversations (pricing questions, feature requests, churn signals)
- When context-switching between roles and you need rapid re-entry into ongoing discussions

## Instructions

1. **Identify the time window**: Retrieve all conversations from the past 5–7 days (use current date/time as reference point)
2. **Filter and classify**: Categorize meetings by type:
   - **Customer Calls** (external customers, prospects, partners)
   - **Internal Syncs** (team meetings, cross-functional alignments, standups)
   - **1:1s** (direct reports, peer coaching, skip-level meetings)
   - **Planning Sessions** (roadmap, quarterly planning, sprint planning)
   - **Ad-Hoc** (watercooler, impromptu huddles, quick syncs)
3. **Summarize each meeting**: Capture 1–2 sentence key outcomes (not full transcript; focus on decisions, deliverables, blockers)
4. **Extract decisions**: List all decisions made across the week with who decided and by when
5. **Identify commitments**: Pull all actions, deliverables, and DRIs (Directly Responsible Individuals) with due dates
6. **Surface themes**: Find patterns across meetings (e.g., "3 customers mentioned integration delays," "pricing concern in 2 sales calls," "all team leads flagged resource constraints")
7. **Flag unresolved threads**: Capture discussions that started but didn't reach closure (follow-ups still needed)
8. **Extract the signal**: Synthesize 2–3 patterns that the user should pay attention to moving forward

## Output Format

```markdown
# Weekly Meeting Recap — [Week of DATE]

## By the Numbers
- **Total Meetings**: [count]
- **Attendees Across All**: [count]
- **Customer Facing**: [count]
- **Internal**: [count]
- **New Decisions**: [count]
- **Commitments Created**: [count]

## Meetings by Category

### Customer Calls ([n] meetings)
- **[Date] - [Company/Name]**: [1–2 sentence summary of key outcomes]
  - Attendees: [names]
  - Decision/Outcome: [if any]

### Internal Syncs ([n] meetings)
- **[Date] - [Meeting Name/Team]**: [1–2 sentence summary]
  - Attendees: [names]
  - Decision/Outcome: [if any]

### 1:1s ([n] meetings)
- **[Date] - [Name]**: [1–2 sentence summary]
  - Topics: [topic1, topic2]
  - Follow-up: [if needed]

### Planning Sessions ([n] meetings)
- **[Date] - [Session Name]**: [1–2 sentence summary]
  - Key Decision: [decision]
  - Next Step: [next step]

### Ad-Hoc ([n] meetings)
- **[Date] - [Brief Title]**: [sentence]

## Cross-Meeting Themes

- **[Theme 1]**: [Why it matters + which meetings surfaced it]
- **[Theme 2]**: [Why it matters + which meetings surfaced it]

## All Decisions Made This Week
| Decision | Owner | By When | Context |
|----------|-------|---------|---------|
| [Decision] | [Name] | [Date] | [Meeting/Context] |

## All Commitments & Action Items
| Action | Owner | Due Date | Meeting | Status |
|--------|-------|----------|---------|--------|
| [Action] | [Name] | [Date] | [Meeting] | [Open/On Track] |

## Unresolved Threads
- [Thread 1]: [Brief description + which meeting it came from]
- [Thread 2]: [Requires follow-up with whom?]

## This Week's Signal
**Watch these 2–3 patterns** as you plan next week:
- [Signal 1]: [What it means + why it matters]
- [Signal 2]: [Concrete implication]
```

## Example

### Input
A Head of Sales with 14 meetings across 1 week:
- 6 customer calls (Acme Corp, TechFlow, NexGen, RetailCo, DataCore, CloudSync)
- 3 internal syncs (Sales team standup, Product sync, Finance review)
- 3 1:1s (Sales Manager with Direct Reports)
- 2 planning sessions (Q2 planning, sales kickoff)

All meetings 1 week prior to today (2026-02-25 to 2026-03-03).

### Output

```markdown
# Weekly Meeting Recap — Week of Feb 25, 2026

## By the Numbers
- **Total Meetings**: 14
- **Attendees Across All**: 47
- **Customer Facing**: 6
- **Internal**: 5
- **New Decisions**: 8
- **Commitments Created**: 23

## Meetings by Category

### Customer Calls (6 meetings)
- **Mon Feb 25 - Acme Corp**: Discussed Q1 performance; Acme is 15% below usage targets. Requested custom integrations with their ERP system—blockers on their side, not ours. Interest in volume discounts for expanded seats.
  - Attendees: Sarah Chen (Head of Sales), Tom Bradley (VP Sales), Acme CFO + CTO
  - Decision/Outcome: Sarah to send integration requirements by EOW; Acme to review internally

- **Tue Feb 26 - TechFlow Inc**: Expansion conversation. Current 45 seats, want to grow to 150. Technical team has concerns about our dashboard performance at scale. Pricing conversation tabled pending performance demo.
  - Attendees: Sarah Chen, Product Lead Marcus Wong, TechFlow Procurement
  - Decision/Outcome: Marcus will schedule performance deep-dive; pricing hold until then

- **Wed Feb 27 - NexGen**: Renewal at risk. Account Manager reported customer is evaluating 2 competitors. Root cause: missing real-time reporting feature they committed to in renewal contract. Escalated to product.
  - Attendees: Sarah Chen, Account Manager Lisa Park, NexGen SVP Operations
  - Decision/Outcome: Sarah committed to product review by Monday; customer will pause eval until then

- **Thu Feb 28 - RetailCo**: New prospect. Warm intro from investor. They have 6-month evaluation timeline. Budget confirmed ($500K annual). Need API access by week of March 10.
  - Attendees: Sarah Chen, Solutions Engineer Dev, RetailCo CTO + VP Product
  - Decision/Outcome: Dev to provision sandbox by EOW; Sarah owns contract negotiation

- **Fri Mar 1 - DataCore + CloudSync back-to-backs**: DataCore: exploratory call, low intent, moved to pipeline. CloudSync: High-intent enterprise prospect (800 seats potential), technical requirements alignment session, procurement aligned on budget, ready to move forward.
  - Attendees: Sarah Chen, multiple SDRs/AEs
  - Decision/Outcome: CloudSync: Contract to be drafted by Monday morning; DataCore: nurture track

### Internal Syncs (5 meetings)
- **Mon Feb 25 - Sales Team Standup**: Weekly pipeline review. Highlighted: 3 deals in final negotiation (Acme, RetailCo, CloudSync). Churn notice from mid-market customer due to feature gaps. Team morale solid.
  - Attendees: Sarah Chen, 12 sales reps
  - Decision/Outcome: Added "churn" as standing agenda item

- **Tue Feb 26 - Product Sync**: Quarterly roadmap review with Product Lead. Discussed: TechFlow's performance scaling concerns align with Q2 roadmap item already planned. NexGen's missing real-time reporting is now P1 priority. Sarah requested early access to beta.
  - Attendees: Sarah Chen, Product Lead Marcus Wong, Head of Engineering
  - Decision/Outcome: Product to deliver real-time reporting beta by March 15 (tied to NexGen renewal risk); performance optimization moved to March sprint

- **Wed Feb 27 - Finance Review**: Q1 close-out. Sarah reviewed pipeline velocity against quota. On track for Q1. Discussion: high CAC on two recent logos, need to optimize acquisition channel.
  - Attendees: Sarah Chen, Finance Controller, CFO
  - Decision/Outcome: Sarah to audit channel strategy by March 10; reduce spend on underperforming channels

- **Thu Feb 28 - Sales Kickoff Planning**: 30-min prep session for Q2 kickoff (full event next week). Themes: execution excellence, customer obsession, AI-powered tools adoption. Sarah to open with sales org wins from Q1.
  - Attendees: Sarah Chen, Sales Manager
  - Decision/Outcome: Sarah to submit 3 case studies by Monday

- **Fri Mar 1 - Weekly Wins Celebration**: Informal standup. CloudSync deal celebration (projected $1.2M ARR). RetailCo advance win ($500K). Team morale high.
  - Attendees: Sarah Chen, 14 reps
  - Decision/Outcome: CloudSync team to be recognized at kickoff

### 1:1s (3 meetings)
- **Wed Feb 27 - Marcus (Sales Manager)**: Discussed hiring plan for 2 new AEs. Reviewed Q2 territories and quota allocation. Marcus flagged burnout concern on one rep (overloaded with large deals). Coaching on delegation.
  - Topics: hiring, territories, burnout, delegation coaching
  - Follow-up: Sarah to meet 1:1 with overloaded rep next week

- **Thu Feb 28 - Jordan (Account Manager)**: Career development conversation. Jordan interested in transitioning to sales management. Discussed timeline and gap areas. Positive, motivated.
  - Topics: career path, management readiness, skill gaps
  - Follow-up: Create 90-day development plan

- **Fri Mar 1 - Casey (Sales Development Rep)**: Pipeline feedback. Casey's conversion rate is 18% (team avg 15%). High performer. Discussed bigger opportunities, advancement path. Retention conversation.
  - Topics: performance, advancement, retention
  - Follow-up: Define promotion track for Casey

### Planning Sessions (2 meetings)
- **Mon Feb 25 - Q2 Sales Planning**: 1-hour planning session. Reviewed: market expansion into EU, new vertical (healthcare), sales process improvements. Quota set at $4.2M team OKR. Budget approved for 3 new team members.
  - Key Decision: EU expansion approved (hire 2 reps); healthcare vertical launch targeted for Q2
  - Next Step: Hire plan + GTM strategy due by March 10

- **Fri Mar 1 - Q2 Kickoff Prep (partial)**: Finalized messaging for Monday's all-hands sales kickoff. Crafted headline: "Scale with Intelligence." Themes locked in.
  - Key Decision: Keynote format confirmed; CEO to close with customer testimonial
  - Next Step: Sarah to submit case studies by Monday EOD

## Cross-Meeting Themes

- **Performance & Scaling Concerns**: TechFlow, NexGen, and internal product sync all flagged that our platform may not handle their growth trajectories. Two deals are contingent on solving this by mid-March. This is our #1 bottleneck this quarter.

- **Feature Gaps Driving Churn/Eval Risk**: NexGen renewal (contract already in place but at risk), mid-market churn notice, and TechFlow all cite missing real-time reporting or custom integrations. Product's Q2 roadmap aligns, but timing is critical.

- **Pricing Sensitivity in Growth Deals**: Acme, TechFlow, and RetailCo all brought up discounts or volume pricing. Signal: standard enterprise pricing may need flexibility for 3–5 seat expansions to 100+ seat deals.

- **Deal Velocity is Strong**: 3 deals in final negotiation (Acme, RetailCo, CloudSync), 2 high-intent new logos (RetailCo, CloudSync), and 1 renewal at risk but recoverable. Assuming no delays, pipeline looks healthy for Q1 close-out and Q2 ramp.

## All Decisions Made This Week

| Decision | Owner | By When | Context |
|----------|-------|---------|---------|
| Send integration requirements for Acme ERP sync | Sarah Chen | EOW (Mar 3) | Acme Corp call, blockers on their end |
| Schedule TechFlow performance deep-dive demo | Marcus Wong (Product) | EOW (Mar 3) | TechFlow call, defer pricing until resolved |
| Product review of NexGen missing real-time reporting | Sarah Chen + Marcus Wong | Monday (Mar 5) | Renewal at risk, P1 escalation |
| Provision RetailCo API sandbox | Dev (Solutions Engineer) | EOW (Mar 3) | New prospect, contractual requirement |
| Draft CloudSync contract | Sarah Chen | Monday (Mar 5) | High-intent deal, ready to move |
| Added "churn" as standing agenda for sales syncs | Sarah Chen | Ongoing | Response to mid-market churn notice |
| Real-time reporting beta delivery | Marcus Wong (Product) | March 15 | Tied to NexGen renewal, 2 other deals |
| Performance optimization sprint | Head of Engineering | March sprint | TechFlow + NexGen blocker |
| Audit channel acquisition strategy | Sarah Chen | March 10 | High CAC on 2 recent logos |
| Q2 EU expansion + healthcare vertical approved | Sarah Chen + Leadership | Start Q2 | Quota +30% to $4.2M, 3 new hires |
| Submit Q1 case studies for kickoff | Sarah Chen | Monday (Mar 5) | Q2 kickoff opening remarks |
| Create 90-day development plan for Jordan | Sarah Chen | March 10 | Career path coaching (potential manager) |
| CEO customer testimonial for kickoff | CEO/Sarah Chen | Monday (Mar 5) | Finalize keynote closing |

## All Commitments & Action Items

| Action | Owner | Due Date | Meeting | Status |
|--------|-------|----------|---------|--------|
| Send Acme ERP integration requirements | Sarah Chen | Mar 3 | Acme Corp call | Open |
| Prep TechFlow performance deep-dive | Marcus Wong | Mar 3 | Product Sync | Open |
| Review real-time reporting for NexGen | Product Team | Mar 5 | Product Sync + NexGen call | Open |
| Deliver real-time reporting beta | Product Team | Mar 15 | Product Sync | On Track |
| Provision RetailCo API sandbox | Dev (Solutions Engineer) | Mar 3 | RetailCo call | On Track |
| Negotiate RetailCo contract | Sarah Chen | Mar 10 | RetailCo call | Open |
| Draft CloudSync contract | Sarah Chen | Mar 5 | Internal sales standup | Open |
| Optimize performance for scale | Engineering Team | March sprint | Product Sync + customer calls | On Track |
| Audit channel acquisition strategy | Sarah Chen | Mar 10 | Finance Review | Open |
| Submit case studies for kickoff | Sarah Chen | Mar 5 | Kickoff prep | Open |
| Hire 2 EU sales reps | Sarah Chen + HR | Q2 | Q2 Planning | Open |
| Develop EU GTM strategy | Sarah Chen | Mar 10 | Q2 Planning | Open |
| Develop healthcare vertical GTM | Sarah Chen | Mar 10 | Q2 Planning | Open |
| 1:1 with overloaded sales rep | Sarah Chen | Week of Mar 5 | 1:1 with Marcus | Open |
| Create Jordan's development plan | Sarah Chen | Mar 10 | 1:1 with Jordan | Open |
| Finalize CEO testimonial for kickoff | CEO/Sarah Chen | Mar 5 | Kickoff prep | Open |

## Unresolved Threads

- **Acme ERP Integration Blockers**: Acme side has implementation challenges; Sarah's requirements-send is step 1, but timeline unclear. Follow-up meeting needed after Acme reviews.

- **TechFlow Pricing Hold**: Price conversation tabled pending performance demo. Performance review must happen by EOW to unblock—currently scheduled, but if delayed, pricing negotiation pushes to following week.

- **NexGen Renewal Status**: Contract technically renewed, but customer is actively evaluating competitors due to feature gaps. Product team committed to March 15 beta, but escalation check-in with NexGen needed by Monday to confirm they'll hold through then.

- **Channel Acquisition High CAC**: Finance flagged high CAC on 2 recent logos. Root cause analysis pending (Sarah's audit due Mar 10). May require mid-quarter budget reallocation if channel underperforming.

- **Mid-Market Churn Notice**: General churn alert came through but specific customer not named in standup. Sales Manager Marcus to provide details Monday morning to prioritize save conversation.

- **Jordan's Manager Track Timeline**: Jordan interested in management, but 90-day plan not yet drafted. Timing vs. upcoming manager opening on team TBD.

## This Week's Signal

**Watch these 3 patterns** as you plan next week:

1. **Scaling is the Gatekeeper**: Our performance limitations are blocking deals at expansion and retention stages (TechFlow 100-seat grow, NexGen contract at risk, Acme integration needed). If Product's March sprint delivers, Q2 upside is real. If delayed, we may see 2–3 deals slip. Prioritize unblocking engineering.

2. **Feature Parity Matters at Enterprise Scale**: Real-time reporting, custom integrations, and performance at scale are now table-stakes for prospects 50+ seats. Our competitors are mentioning these. Revisit standard feature set for enterprise vs. SMB to stay competitive.

3. **Volume Pricing Flexibility Needed**: Three separate deals (Acme, TechFlow, RetailCo) brought up discounts or volume pricing. Current list pricing may not scale to land large seat expansions. Work with Finance to define volume pricing bands (50–100 seats, 100–500 seats, 500+ seats) before Q2 pitching.

---

**Recap Generated**: Friday, March 1, 2026 | **Next Week's Forecast**: Focus on product delivery (NexGen blocker, TechFlow demo), close CloudSync deal, and finalize Q2 kickoff messaging.
```

## Edge Cases

**No meetings this week**: If the user had zero meetings, return a brief "clear week" message with note that this might indicate: time off, sabbatical, or async-only work period. Suggest checking calendar directly if unexpected.

**30+ meetings in the week**: Collapse categories by grouping similar meetings (e.g., "4 customer discovery calls with logistics companies" instead of individual recaps). Prioritize by meeting length, attendee seniority, and explicit decisions made. Flag if the week was abnormally busy and suggest consolidating routine syncs.

**Meetings the user wasn't in but appears in notes/follow-up**: Surface these separately in a "Meetings You Should Know About" section at the end. Include: who attended, what was decided, and why it affects the user (shared commitment, blockers to their work, etc.).

**Recurring meetings with no new content**: Collapse recurring standup cadences (e.g., "daily standup, Mar 3–7") into one line with note "no significant decisions." Don't repeat recap.

**Incomplete transcript or participant list**: Note in output if data is partial (e.g., "2 of 14 meetings missing full transcript—summaries based on available notes + attendee list"). Continue with available data; don't halt.

**Timezone or date ambiguity**: Use user's local timezone for "this week" window. If ambiguous (e.g., user spans multiple zones), ask for clarification or default to their primary business location.

