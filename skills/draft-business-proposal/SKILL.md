---
name: "Draft Business Proposal"
description: "Generate tailored business proposals using the prospect's own language from discovery calls, demos, and stakeholder meetings. Maps your solution to their stated problems, addresses objections raised in conversation, and structures pricing around their decision criteria. Trigger on: business proposal, sales proposal, RFP response, proposal draft, deal proposal, customer proposal, solution proposal, proposal template, write proposal, send proposal."
dependencies: []
author: "Harmony"
version: "1.0.0"
icon: "sparkles"
cover: ""
screenshots: []
category: "Communication"
---

## Purpose

Generic proposals lose deals. When a prospect told you in a discovery call "we're drowning in manual reconciliation" and your proposal says "our platform provides automated data processing," you've lost the language match. This skill mines Harmony transcripts from discovery calls, demos, and internal deal discussions to build proposals that mirror the buyer's exact language, address the specific objections they raised, reference the use cases they care about, and structure pricing around the decision criteria they actually mentioned. The result: proposals that feel written for *them*, not templates adapted to them.

## When to Use

- **Post-discovery call**: Write the proposal while the prospect's language and concerns are fresh. The closer to the call, the stronger the language match.
- **RFP response**: Map the RFP requirements back to what the prospect told you in conversations, so your response addresses their real priorities, not just checkbox features.
- **Enterprise deal requiring multi-stakeholder proposal**: Different stakeholders heard different pitches. Use this skill to create sections tailored to each stakeholder's concerns (Finance cares about ROI, IT cares about integration, Operations cares about timelines).
- **Competitive deal**: The prospect is evaluating alternatives. Emphasize the differentiators they specifically mentioned valuing in discovery calls, and address the competitive concerns they raised.
- **Renewal proposal with expansion**: Reference the original use cases and outcomes they achieved, and position expansion into new problems they've now surfaced.
- **Follow-up proposal after demo**: When the next step was "send us something in writing," use the specific questions and concerns they raised during the demo to structure the proposal.

## Instructions

1. **Mine discovery/demo transcripts** for: stated problems (capture their exact words), desired outcomes and success metrics, decision criteria they mentioned explicitly, budget signals (ballpark ranges, cost-per-unit expectations), timeline and urgency signals, stakeholders involved and their individual concerns or priorities, competitive alternatives they mentioned and why they're considering them.

2. **Build problem-solution map**: For each stated problem, document your specific capability that addresses it, the outcome or metric it delivers, and the impact they care about. Example: Problem = "40 hrs/week manual reconciliation" → Capability = "automated matching with exception handling" → Outcome = "Recover 40 hrs/week, reduce errors by 99%."

3. **Structure executive summary in buyer's language**: Don't lead with your company or product. Lead with their problem in their words. Use their language, their metrics, their timeline. Reference the discovery call if helpful ("Based on our conversation with your Finance team, you're losing 40 hours weekly...").

4. **Write solution section organized around their use cases**: Not your feature list. Organize by the specific workflows or problems they care about. If they care most about compliance, lead with compliance. If they care about time-to-value, emphasize rapid implementation.

5. **Address objections preemptively**: For each concern or objection raised in calls, include a dedicated section with evidence, a case study, or a guarantee that neutralizes it. Name the objection: "Concern: Long implementation timelines. Response: [evidence]."

6. **Structure pricing around their decision framework**: If they care about ROI and payback period, lead the pricing section with ROI math and break-even timeline. If they care about risk, include guarantees or staged payment terms. If they care about unit economics, show cost-per-transaction or cost-per-user.

7. **Include social proof tailored to their industry/size/use case**: Reference customers of similar size, industry, or use case. Generic case studies dilute impact. A customer story from their vertical is worth 10 generic ones.

8. **Add implementation timeline based on their stated urgency and constraints**: If they said "we need this before September audit," commit to a September implementation. If they have a peak season, time implementation around it.

## Output Format

The proposal should include these sections in order:

- **Executive Summary** (1/2–1 page): Their problem in their words, your solution in one sentence, the key outcome, and the timeline.
- **Problem-Solution Map** (1 page): A visual or tabular mapping of each stated problem to your capability and the outcome it delivers.
- **Solution Detail** (2–4 pages): Organized by their use cases or priorities, not your product structure.
- **Objection Handlers with Evidence** (1 page): Each concern raised in conversation, with a response backed by data or case study.
- **Pricing Section** (1 page): Framed per their decision criteria (ROI, risk, cost-per-unit, payback period).
- **Social Proof** (½ page): Case studies or testimonials from similar customers (size, industry, use case).
- **Implementation Timeline** (½ page): Phases, milestones, and dates aligned to their stated urgency.
- **Next Steps + Call to Action** (¼ page): Clear, specific next actions and contact info.

## Example

**Scenario**: Prism (data observability SaaS) is proposing to Northfield Bank, a mid-market bank with 800 employees.

**Discovery Call Insights**:
- Pain: VP of Data Ops said, "Our compliance team is drowning in manual data quality checks—it's taking 40 hours per week just to verify data lineage for audit trails."
- Compliance driver: Northfield failed a regulatory audit last quarter because they couldn't prove data lineage for a critical reconciliation report.
- Decision criteria: "We need this solved before our next audit in September. It's non-negotiable."
- Competitive context: Evaluating two other vendors; primary concern is implementation risk (they don't have capacity for a long ramp-up).
- Stakeholders: VP Data (operational pain), Chief Compliance Officer (regulatory risk), CFO (budget authority, skeptical of CapEx, prefers OpEx).

**Proposal mirrors this language**:

**Executive Summary** (excerpt):
> Northfield Bank's compliance audit revealed a critical gap: lack of automated data lineage tracking. This gap creates two risks: ongoing manual effort (40 hours/week burned on QC) and regulatory exposure for the next audit in September. Prism solves this with automated lineage discovery and audit-ready compliance reporting. Timeline: Full deployment by August 31, 2026, well ahead of your September audit window.

**Problem-Solution Map** (excerpt):
| Stated Problem | Your Capability | Outcome |
|---|---|---|
| "40 hrs/week manual data quality checks" | Automated lineage discovery + exception handling | Recover 40 hrs/week; reduce errors by 99% |
| "Failed audit due to missing data lineage" | Audit-ready compliance reporting + point-in-time snapshots | Pass next audit; regulatory confidence |
| "Skeptical of implementation complexity" | 90-day rapid deployment SLA with dedicated onboarding | Live before September audit; zero risk |

**Objection Handler** (excerpt):
> **Concern: Long implementation timelines and integration complexity.** Response: Northfield's timeline is non-negotiable (September audit). Prism commits to a 90-day rapid deployment SLA, with dedicated implementation team. [Case study: Similar mid-market bank live in 72 days.] We absorb integration complexity; you focus on audit readiness.

**Pricing Section** (excerpt—framed for CFO skepticism):
> **Investment & Payback**: Annual platform fee of $180,000. ROI: Recover 40 hrs/week × 50 weeks/year = 2,000 hours saved. At $85/hour burdened cost, this is $170,000 in annual labor recovery. Payback period: Under 13 months, before Year 2. Plus: Regulatory risk mitigation (unquantifiable but critical for Northfield's Board).

**Implementation Timeline** (excerpt):
> Phase 1 (Weeks 1–4): Data discovery and integration planning. Phase 2 (Weeks 5–10): Live pilot with one critical data pipeline. Phase 3 (Weeks 11–12): Full rollout and compliance sign-off. **Target: August 31, 2026—one month before your September audit.**

## Edge Cases

1. **No discovery call data available**: Generate a strong generic proposal, but flag in the cover note: "Let's schedule a 20-minute call so I can tailor this to your specific priorities—I'm confident I can sharpen this significantly based on your input." This turns a constraint into a reason to call.

2. **Multi-stakeholder deal with conflicting priorities**: Create multiple executive summaries or priority-mapped sections. Example: "For your VP of Finance" (ROI and cost), "For your VP of Operations" (timelines and integration), etc. Prospect can route each section to the right stakeholder.

3. **Prospect explicitly shared budget constraints**: Address pricing sensitivity directly in the pricing section. Example: "We understand your capex budget is constrained. Here's why we recommend the OpEx model, and here's how it compares to your expected TCO."

4. **RFP with rigid format requirements**: Adapt the output to the required template, but overlay this skill's language-matching approach. Mine the RFP for clues about buyer priorities (what questions are asked most? what weight is given to each section?), then emphasize those in your responses.

5. **Competitive displacement deal**: Include a "Migration and Switching Cost" section that acknowledges the incumbent and shows how Prism's rapid deployment and risk guarantees lower the cost and risk of switching. Make switching easier than staying.
