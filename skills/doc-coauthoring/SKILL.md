---
name: "Document Co-Author"
description: "Turn meeting discussions into polished documents through structured collaboration. Gather context, refine section-by-section, test comprehension. Trigger on: write a document, turn this into a doc, create a proposal, document our discussion, write a report, collaborative writing..."
dependencies: []
---

## Purpose
Document co-authoring bridges the gap between spoken ideas and written clarity. Many teams capture raw meeting notes but struggle to transform them into well-structured, audience-appropriate documents. This skill walks you through three deliberate stages—gathering missing context, building section-by-section with iterative refinement, and testing comprehension with fresh eyes—to produce documents that actually resonate with readers.

## When to Use
- Converting meeting notes and transcripts into formal project proposals or status updates
- Creating technical documentation from team discussions and captured institutional knowledge
- Drafting internal announcements, newsletters, or company-wide communications from leadership conversations
- Building customer-facing guides or case studies from project postmortems and success stories
- Turning brainstorm sessions into structured strategy documents, roadmaps, or vision statements
- Converting interview transcripts into hiring decision summaries or feedback compilations
- Creating FAQ or troubleshooting guides from customer support conversations and ticket patterns

## Instructions

### 1. Intake Stage: Understand Your Document's DNA
Ask and record answers to these questions. If you have meeting transcripts, extract relevant sections:
- **Doc type**: Is this a proposal? Report? Announcement? Guide? Roadmap?
- **Audience**: Who reads this? Executives? Engineers? Customers? Compliance?
- **Core goal**: What should readers believe, decide, or do after reading?
- **Constraints**: Length limits? Regulatory requirements? Tone expectations? Deadline?
- **Stakes**: What happens if this document fails? What's the upside if it's great?

### 2. Gap Analysis: Surface Missing Information
Review meeting transcripts (if available) and your answers above. Identify blind spots:
- Does the audience context reveal unstated assumptions in the meeting discussion?
- Are there data points, quotes, or context from meetings that feel incomplete?
- What questions will your specific reader ask that the meetings didn't address?
- Are there edge cases, counterarguments, or competing priorities not yet discussed?
Document these as clarifying questions to answer before drafting.

### 3. Outline from First Principles
Create a hierarchical outline that mirrors your audience's mindset:
- Start with what they care about (for execs: business impact; for engineers: architecture)
- Use the meeting transcripts to populate supporting points and evidence
- Flag sections where you need to synthesize multiple conversation threads
- Order sections so each builds logical momentum toward your core goal
Include section word counts (e.g., intro: 100 words, main body: 600 words).

### 4. Draft Section-by-Section with Synthesis
For each outline section:
- Identify relevant meeting quotes, data points, and decision threads
- Write a rough draft (don't polish yet)
- Highlight quotes or specific conversation moments that support the point
- If meetings are absent, brainstorm talking points and pick the strongest
- Move to the next section—don't revise yet

### 5. First Curate Pass: Tighten and Link
Read your full draft once. On a second pass:
- Remove redundancy (same idea mentioned twice in different sections)
- Strengthen transitions so each section builds on the last
- Cut anything that doesn't serve your core goal
- Ensure audience-specific tone (data-heavy for analysts; narrative for storytellers)
- Mark any lingering ambiguities or unsupported claims

### 6. Iterate: Audience Simulation
Imagine your reader halfway through. At each section break, ask:
- Is my core claim clear yet?
- Do I have enough evidence or examples to believe this?
- What's the next logical question this raises?
- Would this reader skim or read carefully? Am I matching their pace?
Adjust pacing, examples, and emphasis accordingly.

### 7. Comprehension Test: Outside Eye
Share your draft with someone not in the meetings. Ask them:
- What's the main point you took away?
- What did you want to know more about?
- Did anything feel unclear or out of place?
- What surprised you or changed your thinking?
Treat honest feedback as a roadmap, not a critique. Revise weak spots.

### 8. Final Polish and Go-Live
- Copy-edit for grammar, consistency, voice
- Ensure all formatting, headers, and visual hierarchy match your brand (use brand-guidelines skill if needed)
- Add a short "Now what?" at the end: what action, decision, or next conversation does this document trigger?
- Version it and track changes if collaborative

## Output Format

```markdown
# [Document Title]

**Audience:** [Role/Title]
**Purpose:** [One sentence: what should they believe/decide/do?]
**Last Updated:** [Date]

---

## Executive Summary
[150 words max. Lead with the decision or insight. Assume they read only this.]

## Context
[Why now? What changed? What was the conversation or trigger?]

## [Section 1 Name]
[Key finding or argument. Evidence from meetings/data. Sub-bullets with supporting detail.]

## [Section 2 Name]
[Next logical piece. How does it connect to Section 1?]

## Key Decisions / Next Steps
[Bulleted list of what this document asks the reader to believe, approve, or act on.]

## FAQs
[4-6 common questions your audience will ask, with concise answers.]

---

**Questions?** Reach out to [owner] at [contact].
```

## Example

**Input (from meeting transcript):**
- Meeting attendees: Sarah (Product Lead), Marcus (Engineering), Jen (Marketing)
- Topic: Deciding whether to pivot the mobile app toward offline-first architecture
- Key points: Marcus mentioned current sync issues cause 30% of support tickets. Jen worried about launch timeline. Sarah sees opportunity but needs budget buy-in.

**Output Document:**

```markdown
# Offline-First Architecture Proposal

**Audience:** Executives (CFO, CRO, VP Product)
**Purpose:** Seek approval and budget allocation for a 3-month initiative to pivot to offline-first mobile sync architecture.
**Last Updated:** March 2026

---

## Executive Summary

Cirrus Mobile currently loses 8-12 users per day due to sync failures that degrade performance during poor connectivity. By shifting to an offline-first architecture, we can eliminate 30% of support tickets (volume: ~200/month), improve retention by an estimated 2-3%, and reduce engineering toil by 400 hours/quarter. This proposal requests $180k (team costs) over 3 months to rebuild the sync layer and customer-facing persistence logic.

---

## Context: Why Now?

Over the past 6 months, our support team has tracked a pattern: 30% of all mobile app tickets stem from sync failures when users lose connectivity. Our current architecture assumes persistent connectivity; data queues fail silently, leaving users frustrated and our team scrambling. Marketing has also fielded repeated customer complaints from enterprise accounts relying on the app during travel or fieldwork.

With iOS 18's new SQLite improvements and our team's growing expertise in local-first sync patterns, we have both the timing and the capability to execute this migration without a full rewrite.

---

## The Problem: Sync Architecture as a Bottleneck

**Volume and Cost:** Our support queue shows sync-related issues cluster around mobile usage (65% of support volume). Each ticket averages 15 minutes to triage and costs ~$8 per resolution. Annually, that's 52,000 minutes (~$6,500) in support overhead that doesn't improve the product.

**User Experience:** Users in weak connectivity environments (transit, rural areas, basement offices) experience blank screens, lost data, and forced re-entry. This is especially painful for our enterprise customers who use Cirrus in manufacturing and logistics—areas with unreliable networks.

**Engineering Velocity:** Marcus (Engineering Lead) estimates the team spends 25-30% of each sprint addressing sync edge cases, regressions, and customer escalations. This is velocity we're not putting toward new features or strategic initiatives.

---

## The Solution: Offline-First Sync

Instead of assuming the network is reliable and the app must fail gracefully, we flip the model: the local device becomes the source of truth. Users continue working offline. The app queues changes locally and syncs when connectivity returns.

**Architecture Overview:**
- Replace network-dependent state with local SQLite as primary store
- Implement background sync queue with exponential retry and conflict resolution
- Add UI indicators for sync status (synced, queued, conflict)
- Migrate customer data one workspace at a time to reduce blast radius

**Proof of Concept:** Marcus's team built a POC in 2 weeks on a single feature. Sync latency improved from unpredictable (0-60s) to deterministic (2-4s on re-connect). Zero data loss in testing.

---

## Implementation Plan and Timeline

| Phase | Duration | Deliverable | Owner |
|-------|----------|-------------|-------|
| Phase 1: Core Sync Layer | 4 weeks | SQLite schema, sync queue, conflict resolution | Marcus (Eng) |
| Phase 2: Migrate Features | 6 weeks | Roll out to 3-5 high-impact features; telemetry | Sarah (Product) + Eng |
| Phase 3: Testing & Hardening | 3 weeks | Load testing, edge case validation, rollout readiness | QA + Eng |
| **Total** | **13 weeks** | Production-ready offline-first mobile app | Shared |

**Team:** 2 senior engineers (Marcus + 1 IC), 1 QA engineer (50%), product support from Sarah.

**Cost Estimate:** $180,000 (salaries + contractor backfill).

---

## Success Metrics

- **Support volume:** Reduce sync-related tickets by 80% (from ~200/month to ~40/month) within 60 days of launch
- **Retention:** Improve 30-day active user retention by 2-3% in regions with poor connectivity
- **Engineering efficiency:** Free up 400 engineering hours/quarter for feature development
- **User satisfaction:** Achieve 4.5+ stars on app store (current: 3.8) within 90 days

---

## Risks and Mitigation

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|-----------|
| Data conflicts on re-sync | Medium | Lost user work; support spike | Extensive testing; user-facing CTA for conflict resolution |
| Migration complexity | Medium | Timeline slip | Phased rollout; rollback plan for each feature |
| Performance regression during transition | Low | User experience decline | Continuous performance monitoring; A/B test before full rollout |

---

## Budget Breakdown

| Line Item | Cost | Notes |
|-----------|------|-------|
| Engineering (2 FTE × 13 weeks) | $120,000 | Senior engineers at $80k base, prorated |
| QA and Testing (0.5 FTE) | $25,000 | Prorated senior QA |
| Contingency (10%) | $15,000 | For unknowns or scope expansion |
| **Total** | **$160,000** | Budget rounded to $180k for safety margin |

---

## Frequently Asked Questions

**Q: Will users lose data during migration?**
A: No. We migrate one feature at a time and validate data integrity before and after each migration. Rollback is available for 48 hours after each phase.

**Q: How long until customers see the benefit?**
A: Phase 1 (core sync) is 4 weeks. First customer-facing features land in week 6. Full benefit (all features migrated) in 13 weeks.

**Q: What if this breaks the app?**
A: We have a rollback plan for each feature. If a feature regression occurs, we revert to the old sync model within 4 hours and investigate separately.

**Q: Why now and not later?**
A: Timing: iOS 18 and SQLite improvements are available today. Team expertise is ready. Support volume is quantified and costing us. Delaying pushes this to next quarter and extends customer pain.

**Q: How does this affect roadmap priorities?**
A: This does displace feature work for 13 weeks. However, it frees up 400 hours/quarter *after* completion, which more than offsets the time.

---

**Decision:** Approved / Pending / Not Approved
**Next Steps:**
1. Finalize team assignments and backfill plan
2. Kick off Phase 1 planning (detailed work breakdown)
3. Schedule weekly sync with product, engineering, and finance

**Questions?** Contact Sarah (Product Lead) or Marcus (Engineering Lead).
```

---

## Edge Cases

- **Meeting transcripts absent:** Use brainstorming and expert interviews to synthesize points. Apply the same outline rigor; the comprehension test becomes even more critical.
- **Audience is mixed (engineers AND executives):** Create two lightweight versions (technical + executive summary), or use an appendix model where the main doc is executive-friendly and technical depth lives in the appendix.
- **Tight deadline (same-day turnaround):** Compress stages. Spend 30 min on gaps, 60 min drafting from a tight outline, and 20 min on one feedback round. Prioritize accuracy over polish.
- **Document is sensitive or involves disagreement:** Explicitly surface opposing viewpoints in a "Considerations" section. This builds trust and neutralizes tension.
- **Stakeholders disagree on the document's purpose:** Run step 1 with the *sponsor* (the person asking for the doc) first, then surface their intent to co-authors. Align before drafting.
- **Document grows too long (>3000 words):** Use the "modular" pattern: write a 500-word executive summary that stands alone, then add optional deep-dive sections. Readers choose their depth.
