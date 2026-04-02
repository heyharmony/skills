---
name: "Log Key Decisions"
description: "Extract and document decisions from meeting transcripts — who decided, what was decided, why, what alternatives were rejected, and who was present. Builds a searchable decision log that prevents revisiting settled questions. Trigger on: decision log, decision record, we decided, decision tracking, document decisions, ADR, decision journal, who decided, why did we decide, decision history."
dependencies: []
author: "Harmony"
version: "1.0.0"
icon: "sparkles"
cover: ""
screenshots: []
category: "Operations"
---

# Log Key Decisions

## Purpose

Every organization makes hundreds of decisions in meetings each month. Almost none get documented. Six weeks later, someone asks "why did we pick Vendor A?" and no one remembers. Or worse, the same decision gets relitigated because no one recorded the rationale. This skill mines Harmony transcripts to extract decisions as they happen—capturing what was decided, who made the call, the reasoning, what alternatives were considered and rejected, and who was in the room. The result is a searchable decision log that stops re-litigation and creates institutional memory.

## When to Use

- **After any meeting where a significant decision was made** — While the context is fresh, capture the decision before it becomes fuzzy
- **Weekly decision digest** — Auto-extract from all meetings to build a running log of organizational choices
- **Before revisiting a past decision** — Search the log to see if this was already settled and why
- **During onboarding** — Bring new hires up to speed on past decisions and the reasoning behind them
- **Audit/compliance needs** — Demonstrate a documented decision trail for regulatory or accountability purposes
- **Quarterly decision review** — Assess whether past decisions proved sound or should be reversed
- **Project post-mortem** — Trace the decision chain that led to current state and identify where things went wrong

## Instructions

**Step 1: Scan for decision language**
Look through meeting transcripts for markers of decisions: "we've decided," "let's go with," "the plan is," "I'm calling it," "that's the call," or extended agreement after debate. Note timestamps.

**Step 2: Extract core decision elements**
For each decision: write the decision statement (what was decided, not how), identify the decision maker(s), record the date, and capture the rationale stated by the decider.

**Step 3: Identify alternatives and rejections**
Mine the debate that precedes the decision. What options were on the table? Why were they rejected? Often alternatives are explicit ("we considered X but...") or implicit (someone proposed it, then it was dropped).

**Step 4: Note attendees**
Record who was present: stakeholders, approvers, informed parties. This matters for accountability and for understanding who was in the room when the call was made.

**Step 5: Classify decision type**
Tag the decision: strategic (affects direction), operational (affects process), technical (affects architecture), hiring (affects team), financial (affects budget/revenue model).

**Step 6: Assess decision confidence**
Was there unanimous agreement, a majority with dissent, or an executive override? Confidence level helps predict whether the decision will hold or resurface.

**Step 7: Format and tag**
Create a decision log entry with a unique ID, searchable tags, and a link to the source transcript. This makes the decision findable and traceable.

## Output Format

### Decision Log Entry Template

```
ID: DEC-2026-[YYYYMM]-[##]
Date: YYYY-MM-DD
Meeting: [Meeting Title]

DECISION STATEMENT
[Clear, specific statement of what was decided]

DECISION MAKER(S)
[Name(s) and role(s) of person(s) who made the call]

RATIONALE
[Why this decision was made, in the decider's words or synthesis]

ALTERNATIVES REJECTED
- [Alternative 1]: [Reason rejected]
- [Alternative 2]: [Reason rejected]
- [Alternative 3]: [Reason rejected]

ATTENDEES
[Names and roles of people present]

DECISION TYPE
[Strategic / Operational / Technical / Hiring / Financial]

CONFIDENCE LEVEL
[Unanimous / Majority with Dissent / Executive Override]

SOURCE
Meeting Link: [Link to transcript or recording]
Timestamp: [HH:MM:SS range]

REVIEW DATE
Proposed: [YYYY-MM-DD, typically 90 days out]
Reviewed: [Leave blank until reviewed]
Status: [Active / Reversed / Confirmed]

TAGS
[Searchable tags: vendor, pricing, mobile, hiring, api, etc.]
```

## Example

**Scenario:** Waypoint, a logistics SaaS company (60 people), held a product strategy meeting on 2026-03-15. Three significant decisions emerged.

---

### Decision 1: Delay Mobile App Launch

```
ID: DEC-2026-0315-01
Date: 2026-03-15
Meeting: Q2 Product Strategy

DECISION STATEMENT
Delay the mobile app MVP launch from Q2 to Q3 2026. All engineering effort will focus on API v2 and webhook infrastructure instead.

DECISION MAKER(S)
Sarah Chen, Chief Product Officer

RATIONALE
"Our customers have asked for a stable, extensible API more than they've asked for a mobile app. We can ship mobile on top of a solid API foundation, but we cannot do both with the engineering bandwidth we have. API-first gives us a six-month advantage and locks in customer lock-in. Mobile can wait a quarter."

ALTERNATIVES REJECTED
- Launch mobile on schedule (Q2) and delay API v2: Rejected because enterprise customers are already building integrations; we lose competitive momentum if we don't ship the API first.
- Hire contract developers for mobile: Rejected due to onboarding time (4-6 weeks) and risk of technical debt in our core platform.
- Scope down the API to ship both: Rejected because the API roadmap is already lean; cutting it further defeats the purpose.

ATTENDEES
Sarah Chen (CPO), Marcus Rodriguez (VP Engineering), Priya Patel (Head of Product Marketing), David Kim (Customer Success Lead), James Wu (Engineering Lead, Backend)

DECISION TYPE
Strategic

CONFIDENCE LEVEL
Unanimous

SOURCE
Meeting Link: [Harmony transcript link]
Timestamp: 12:35–14:20

REVIEW DATE
Proposed: 2026-06-15
Reviewed:
Status: Active

TAGS
product, api, mobile, roadmap, q2, q3, engineering-capacity
```

---

### Decision 2: Hire VP Marketing Externally

```
ID: DEC-2026-0315-02
Date: 2026-03-15
Meeting: Q2 Product Strategy

DECISION STATEMENT
Hire a VP of Marketing externally. Do not promote from within. Start recruitment immediately; target Q2 close.

DECISION MAKER(S)
Jennifer Lopez, Chief Executive Officer

RATIONALE
"We need someone with B2B SaaS scaling experience and brand-building chops. Our current marketing team is strong tactically, but we need a leader who has driven GTM at a $50M+ company and built a brand in logistics. This is a backfill role at a new level—it's not available internally."

ALTERNATIVES REJECTED
- Promote Priya Patel (current Head of Product Marketing): Rejected because Priya excels at product communication but lacks the enterprise brand experience we need; promoting her would backfill our product marketing gap and leave us hunting for a new PMM anyway.
- Reorganize and promote someone from sales: Rejected because our sales ops are working and moving a strong performer disrupts revenue cycles.

ATTENDEES
Jennifer Lopez (CEO), Sarah Chen (CPO), Mark Thompson (VP Sales), Priya Patel (Head of Product Marketing), HR lead

DECISION TYPE
Hiring

CONFIDENCE LEVEL
Executive Override (CEO decision, but Priya and Mark both agreed)

SOURCE
Meeting Link: [Harmony transcript link]
Timestamp: 14:45–15:10

REVIEW DATE
Proposed: 2026-09-15
Reviewed:
Status: Active

TAGS
hiring, marketing, leadership, vp-marketing, headcount, fy2026-budget
```

---

### Decision 3: Adopt Usage-Based Pricing for Enterprise Tier

```
ID: DEC-2026-0315-03
Date: 2026-03-15
Meeting: Q2 Product Strategy

DECISION STATEMENT
Introduce a usage-based pricing tier for enterprise customers, measured by monthly API calls and stored shipments. Retire the per-seat pricing model for new enterprise contracts effective 2026-04-01.

DECISION MAKER(S)
Sarah Chen (CPO) and Rachel Martinez (Chief Revenue Officer)

RATIONALE
"Our enterprise customers told us per-seat pricing punishes them for scaling. A usage-based model aligns our revenue with customer value, and our data shows customers will spend 2.5x more on usage-based versus flat per-seat. This also removes a major objection in our last three deals."

ALTERNATIVES REJECTED
- Hybrid per-seat plus overage model: Rejected because it creates complexity in billing and still has the seat-count friction for large teams.
- Tiered flat-rate based on API call volume: Rejected because customers with unpredictable demand prefer unit-based metering; flat-tier creates cliff effects and churn risk.
- Keep per-seat pricing, offer discounts: Rejected because discounting masks the real problem and doesn't solve the customer's incentive misalignment.

ATTENDEES
Sarah Chen (CPO), Rachel Martinez (CRO), David Kim (Customer Success Lead), Kevin Park (Finance/FP&A), Aisha Johnson (Product Manager, Enterprise)

DECISION TYPE
Financial / Strategic

CONFIDENCE LEVEL
Unanimous

SOURCE
Meeting Link: [Harmony transcript link]
Timestamp: 15:35–16:20

REVIEW DATE
Proposed: 2026-06-15
Reviewed:
Status: Active

TAGS
pricing, enterprise, revenue, go-to-market, q2-launch, fy2026-strategy
```

---

## Edge Cases

**Informal decisions (hallway, Slack, not in recorded meeting)**
Flag these with a note "Source: Informal conversation." They still belong in the log, but mark confidence as "Assumed" until confirmed in writing or in a recorded forum. Example: CEO tells VP Eng in hallway to abandon Project X. Include it, but note it lacks formal rationale documentation.

**Decision reversed later**
When a past decision is overturned, create a new decision log entry for the reversal, and link both entries together. Example: "Decision DEC-2026-0301-05 reversed by DEC-2026-0320-12. See reversal entry for new rationale." This creates a decision chain and shows why the earlier call didn't stick.

**Implicit decisions (no objection = consensus)**
If everyone stays silent or nods after a proposal, that's a decision. Capture it as "Consensus agreement after proposal by [name]" with confidence "Consensus," not "unanimous" (which implies explicit agreement). Example: "No one objected when Rachel proposed the April launch date."

**Decisions made across multiple meetings**
If a decision emerges over three meetings (debate in week 1, preliminary call in week 2, final sign-off in week 3), thread them together. Create one main log entry dated on final sign-off, but reference the earlier meetings in "Source" as "Discussed in [meeting 1], [meeting 2]; final decision in [meeting 3]."

**Sensitive decisions (personnel, compensation, layoffs)**
Flag these with a "Restricted Access" tag and store them in a separate, access-controlled section of the decision log. Include them in the log (they are decisions) but restrict who can view them based on role or security level. Example: "DEC-2026-0310-07 [Restricted Access: HR/Finance]."
