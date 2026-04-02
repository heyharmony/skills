---
name: "Map Product Discovery"
description: "Map structured product discovery — build Opportunity Solution Trees, validate customer problems, and prioritize opportunities from conversation data and assumption mapping. Trigger on: product discovery, opportunity solution tree, assumption mapping, customer research, discovery sprint, problem validation."
dependencies: []
author: "Harmony"
version: "1.0.0"
icon: "sparkles"
cover: ""
screenshots: []
category: "Product"
---

## Purpose
This skill transforms raw discovery data—customer interviews, user research calls, and problem validation meetings—into a structured product strategy framework. It builds an Opportunity Solution Tree (OST) that maps customer problems to solution opportunities, layers in assumptions about desirability (customer need), viability (business model), feasibility (technical capability), and usability (user experience), and identifies which assumptions to validate first. Grounded in Harmony's meeting transcripts and speaker data, it helps product and design teams articulate unknowns, surface disagreements, and prioritize the next 10 days of discovery work.

## When to Use
- **Post-discovery synthesis**: After running 3–5 customer interviews or research calls; use this to organize findings into a coherent problem-solution map.
- **Assumption auditing**: When a team has a feature roadmap but lacks clarity on which customer assumptions are proven vs. risky.
- **Sprint planning**: To design a focused 10-day discovery sprint that tests the riskiest assumptions first (not the easiest ideas).
- **Cross-functional alignment**: When engineering, product, and design have different mental models of the customer problem.
- **Pivot or repositioning**: Before launching a new market segment or feature area; use to stress-test assumptions about who the customer is and what they value.
- **Disagreement resolution**: When the team debates whether to build Feature A or Feature B; map both to the same problem tree to see which one addresses the core opportunity.

## Instructions

1. **Extract customer problems from conversation data**
   - Pull verbatim customer frustrations, pain points, and workarounds from Harmony transcripts.
   - Organize by theme (e.g., "onboarding friction," "compliance overhead," "lack of visibility").
   - Credit the speaker and meeting date for traceability.

2. **Map problems to underlying customer needs**
   - For each problem cluster, ask: "What does the customer actually *need* to be successful?"
   - Write one sentence per need; avoid jargon; use the customer's words where possible.
   - Link back to the problems that surface this need.

3. **Build the Opportunity Solution Tree**
   - **Root (top)**: One customer segment + one overarching customer job-to-be-done.
   - **Trunk branches**: 3–5 critical customer needs derived from your interviews.
   - **Sub-branches**: 2–3 specific opportunities per need (solution ideas, workflow changes, integrations).
   - Do *not* mandate a solution; capture what customer success looks like.

4. **Layer in assumptions: DVFU framework**
   - **Desirability**: Does the customer actually want this? (Proven by interview affinity or quote evidence.)
   - **Viability**: Does the business model hold? (Pricing, margins, scalability assumptions.)
   - **Feasibility**: Can engineering build it in the roadmap timeframe? (Technology debt, dependencies, team capacity.)
   - **Usability**: Will the user experience feel natural? (Workflows, learning curve, accessibility.)
   - For each opportunity, mark assumptions as "Assumed," "Partially Validated," or "Proven."

5. **Identify assumption tests (discovery activities)**
   - For each high-risk assumption, design a 2–3 day discovery activity: customer interview, prototype test, competitive audit, data analysis, or technical spike.
   - Prioritize by impact (does this assumption unlock a key decision?) and effort (can we learn this in 10 days?).
   - Assign owner and target completion date.

6. **Synthesize a 10-day discovery sprint plan**
   - Group assumption tests into phases: week 1 (customer validation), week 2 (technical + competitive deep dive).
   - Map each activity to a deliverable (e.g., "5 user research notes," "prototype feedback video," "engineering feasibility doc").
   - Include team standups and weekly synthesis meetings.

7. **Document disagreements and next steps**
   - Call out any assumption the team disagrees on or lacks data for.
   - List 3–5 milestones for the next 30 days (end of sprint → review → roadmap decision).

## Output Format

```markdown
# Product Discovery Synthesis: [Customer Segment] — [OST Root]

**Prepared by:** [Your name] | **Date:** [Today] | **Data sources:** [Meeting names/dates]

---

## Opportunity Solution Tree

### Root
**Segment:** [Customer segment, e.g., "Mid-market SaaS ops teams"]
**Job-to-be-done:** [One clear sentence about the core problem]

---

### Trunk: Customer Needs & Opportunities

#### Need 1: [Customer Need]
*Evidence:* "[Verbatim quote from call]" — [Speaker], [Meeting], [Date]

**Opportunity 1.1:** [Solution idea or outcome]
- Desirability: [Assumed / Partially Validated / Proven] — [supporting note or quote]
- Viability: [Assumed / Partially Validated / Proven] — [e.g., "pricing unclear"]
- Feasibility: [Assumed / Partially Validated / Proven] — [e.g., "requires 3rd-party API"]
- Usability: [Assumed / Partially Validated / Proven] — [e.g., "workflow unclear"]

**Opportunity 1.2:** [Solution idea or outcome]
- [DVFU assessment]

---

#### Need 2: [Customer Need]
[Same structure]

---

#### Need 3: [Customer Need]
[Same structure]

---

## Assumption Testing Plan (10-Day Sprint)

| Assumption | Activity | Owner | Target | Output |
|---|---|---|---|---|
| [Risk] | [Interview, prototype, audit, spike] | [Name] | [Day X] | [Artifact: notes, video, doc] |

---

## Key Disagreements & Unknowns
- **Disagreement:** [Description]
  *Team A believes:* [X]
  *Team B believes:* [Y]
  *Test:* [How to resolve]

---

## Next Steps (30-Day Milestones)
1. **Week 1 (Sprint):** [Complete these 3–4 assumption tests]
2. **Week 2 (Sprint):** [Technical + competitive deep dives]
3. **Post-sprint:** [Synthesis meeting, decision point]
4. **Outcome:** [Roadmap update, pivot go/no-go, or scaled customer research]
```

## Example

```markdown
# Product Discovery Synthesis: Mid-Market Ops Leaders — Compliance Workflow Automation

**Prepared by:** Maya Chen (Product) | **Date:** 2026-03-22 | **Data sources:** Customer interviews with Ripple (2026-03-15), Zenith Labs (2026-03-18), Prism Logistics (2026-03-20)

---

## Opportunity Solution Tree

### Root
**Segment:** Mid-market SaaS/fintech ops teams (10–100 employees) managing regulatory compliance
**Job-to-be-done:** Reduce manual audit-trail documentation from hours per week to near-zero while maintaining compliance confidence

---

### Trunk: Customer Needs & Opportunities

#### Need 1: Real-Time Compliance Visibility
*Evidence:* "Right now I spend every Friday afternoon cross-referencing our access logs with the compliance checklist. It takes 3–4 hours, and I'm still not 100% sure we caught everything." — Marcus (Ops Lead, Ripple), 2026-03-15

**Opportunity 1.1: Automated Compliance Dashboard**
- **Description:** System that ingests access logs, user activity, and policy definitions; surfaces compliance gaps in real-time with actionable alerts.
- Desirability: Partially Validated — Marcus and Sarah (Zenith) both cited the manual reconciliation burden as their #1 time sink. Javier (Prism) was interested but less urgent.
- Viability: Assumed — Revenue model unclear (SaaS license, per-audit fee, or compliance API?). Need to validate pricing tolerance.
- Feasibility: Partially Validated — Engineering spike confirmed we can ingest log data from major compliance platforms (Vanta, dbt Cloud). Third-party policy engine integration needed.
- Usability: Assumed — Prototype needed; unknown if ops teams will adopt a new dashboard or prefer in-line alerts within their existing tools.

**Opportunity 1.2: Slack/Email Alerts for Compliance Drift**
- **Description:** Non-intrusive notifications sent to ops channels when policy violations or gaps emerge; audit-ready summaries auto-posted to Slack.
- Desirability: Proven — All three customers said they'd prefer non-blocking notifications over a new dashboard login. "We're already in Slack all day." — Sarah (Zenith Labs)
- Viability: Assumed — Integration feasible; business model (per-notification fee?) not yet explored.
- Feasibility: Proven — Slack integration and message templating are low-lift; can prototype in 4 days.
- Usability: Partially Validated — Javier expressed concern about alert fatigue; need to test filtering/priority logic.

---

#### Need 2: Centralized Audit Trail & Evidence Collection
*Evidence:* "We maintain three separate spreadsheets and a shared Google Drive for audit evidence. It's a nightmare to find proof that something was approved when auditors ask." — Sarah (Compliance Officer, Zenith Labs), 2026-03-18

**Opportunity 2.1: Single Source of Truth for Audit Evidence**
- **Description:** Centralized repository that auto-logs policy acknowledgments, approval chains, and system changes; one-click generation of audit reports.
- Desirability: Proven — All three customers see this as table-stakes. Marcus said, "If you could eliminate our spreadsheets, I'd sign up tomorrow."
- Viability: Partially Validated — Potential to bundle with compliance dashboard for higher ACV. Unsure if vertical (fintech vs. healthcare vs. SaaS) affects willingness-to-pay.
- Feasibility: Assumed — Depends on custom integrations with each customer's auth system; scope unclearfor early launch.
- Usability: Proven — Prototype workshop with Ripple showed strong product-market fit for the interface design.

**Opportunity 2.2: Pre-Built Audit Templates (SOC2, HIPAA, ISO)**
- **Description:** Templated evidence-collection workflows that guide ops teams through the "what to collect" problem before audit season.
- Desirability: Assumed — Positive but secondary need; less urgent than real-time visibility.
- Viability: Assumed — Licensing templates vs. building custom ones per-customer is unresolved.
- Feasibility: Proven — Engineering can scaffold templates in 2–3 days.
- Usability: Assumed — Need to test with a non-technical ops admin to ensure templates are self-service.

---

#### Need 3: Policy Change Management & Team Awareness
*Evidence:* "When we update a policy, nobody knows. Last month a developer re-implemented a deprecated access pattern because they never saw the memo." — Javier (Engineering Lead, Prism Logistics), 2026-03-20

**Opportunity 3.1: Policy Versioning & Approval Workflows**
- **Description:** Lightweight versioning system for policies; auto-notification to affected teams when policies change; approval sign-offs tracked and auditable.
- Desirability: Assumed — Javier and Marcus both saw the value but didn't rank it as highly as the visibility / evidence challenges.
- Viability: Assumed — Subscription tier or add-on pricing model untested.
- Feasibility: Partially Validated — Basic versioning feasible; Slack integration for notifications confirmed in spike.
- Usability: Assumed — Prototype for review.

---

## Assumption Testing Plan (10-Day Sprint)

| Assumption | Activity | Owner | Target | Output |
|---|---|---|---|---|
| Slack alerts reduce time-to-remediation by 50%+ | User test: send sample alerts to Zenith, measure response time | Sarah (Zenith, partner) + Maya | Day 5 | Feedback video, response-time data |
| Pricing tolerance: $500–$2k/month for SMB tier | Pricing research: intercept interviews with 5 additional ops leads | David (Biz Dev) | Day 7 | Pricing memo, competitor analysis |
| Evidence dashboard UX is self-service (no training) | Usability test: 3 ops admins navigate prototype cold | Eric (Design) | Day 6 | Usability notes, video highlights |
| Policy versioning is lower priority than real-time visibility | Ranking survey: send 20-question survey to existing customer Slack | Maya | Day 4 | Prioritization data, roadmap implications |
| Third-party policy engine (Vanta API) is stable for integration | Technical spike: build sample integration, test error handling | Kenji (Engineering) | Day 5 | Feasibility doc, integration proof-of-concept |
| Vertical-specific templates (SOC2 vs. HIPAA) affect adoption | Interview: 2 healthcare and 2 fintech ops leads on template needs | Maya | Day 8 | Segmentation insights, feature scope |

---

## Key Disagreements & Unknowns

**Disagreement 1: Build a Dashboard vs. Slack-Only MVP**
- *Engineering believes:* A unified dashboard is cleaner; Slack integration feels like a workaround.
- *Product believes:* Ops teams live in Slack; ship alerts first, add dashboard later only if demand warrants.
- *Test:* User test with Zenith (Day 5) will show whether ops teams actually open a new dashboard or rely on notifications. Prototype both and gather preference data.

**Disagreement 2: Single Tenant vs. Multi-Tenant Architecture**
- *Engineering believes:* Multi-tenant is a future problem; start single-tenant, migrate later.
- *Viability believes:* Single-tenant will strangle our SMB TAM; should architect for multi-tenant from day one.
- *Test:* Cost analysis (Day 6) will model both paths; if multi-tenant adds <20% engineering effort, commit to it from launch.

**Disagreement 3: Go-to-Market: Land & Expand vs. Vertical-First**
- *Sales believes:* Fintech is hottest; go vertical-first with SOC2 templates.
- *Product believes:* Compliance is a horizontal problem; launch generic, let market pull use cases.
- *Test:* Customer research (Day 8) will clarify whether vertical-specific templates drive adoption or if horizontal positioning is sufficient.

---

## Next Steps (30-Day Milestones)

1. **Sprint Days 1–5 (Week of 2026-03-24):** Complete high-risk assumption tests (Slack alerts, usability, pricing).
2. **Sprint Days 6–10 (Week of 2026-03-31):** Technical deep dive (Vanta integration), vertical segmentation research, competitive audit.
3. **Post-Sprint Synthesis (2026-04-07):** 2-hour team review. Go/no-go decision on dashboard MVP. Confirm roadmap: Slack alerts → evidence repository → policy versioning (or reorder based on data).
4. **Outcome by 2026-04-15:** Commit to Q2 roadmap. Kick off design for Slack alert templates and evidence dashboard. Launch early-access beta with Ripple + Zenith (60-day partnership).
5. **Follow-on research (April–May):** Run 3-week beta; iterate on UX; nail down vertical-specific roadmap (SOC2-first vs. horizontal).
```

---

## Edge Cases

1. **Insufficient interview data (only 1–2 conversations)**
   - *Handling:* Mark all assumptions as "Assumed" (no evidence yet). Set a constraint: 3–5 additional customer interviews required before sprint planning. Use the OST template to guide what to ask in those conversations.

2. **Team lacks alignment on customer segment definition**
   - *Handling:* Create two parallel OSTs (one per segment hypothesis). Design assumption tests that either validate one segment's dominance or confirm a "dual segment" go-to-market. Resolve before roadmap lock.

3. **Prototype or MVP already exists; discovery feels redundant**
   - *Handling:* Reframe: map the prototype assumptions against the OST to find untested bets. Prioritize assumption tests for hypotheses *not* covered by the current prototype (e.g., viability or vertical fit).

4. **Meeting data is fragmented across multiple tools (Harmony, Slack threads, email)**
   - *Handling:* Pull verbatim quotes where available; cite source clearly (e.g., "Email from Marcus, 2026-03-15" or "Slack #product thread, 2026-03-10"). Synthesize into a single OST even if evidence is mixed-source.

5. **Customer feedback contradicts the team's assumptions (e.g., "We thought users wanted Feature X, but they asked for Y")**
   - *Handling:* Treat as a high-value discovery find. Rewrite the OST to center the customer need (Y, not X). Add a "Biggest Surprises" section. Design assumption tests to confirm the customer insight is not an outlier.

6. **Discovery uncovers a new market segment or job-to-be-done**
   - *Handling:* Create a second OST for the new segment. Document how it intersects with the original one (shared solutions? separate roadmaps?). Raise as a 30-day strategic question for leadership (expand scope or focus on original?).
