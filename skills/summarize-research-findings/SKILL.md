---
name: "Summarize Research Findings"
description: "Synthesize insights from user research sessions, customer interviews, and external reports into a structured brief with key themes, evidence quality ratings, and recommended next steps. Trigger on: research synthesis, interview findings, research summary, user research recap, study findings, research debrief, summarize interviews."
dependencies: []
author: "Harmony"
version: "1.0.0"
icon: "sparkles"
cover: ""
screenshots: []
category: "Communication"
---

## Purpose

Turn fragmented research—scattered across Harmony meeting transcripts, customer interview recordings, and uploaded research documents—into a cohesive narrative. This skill extracts verbatim insights from user research calls and discovery sessions, clusters them into actionable themes, rates evidence strength, and surfaces contradictions that matter for product decisions. Use it to move from "we talked to 8 users" to "here's what they actually need, ranked by confidence."

## When to Use

- **After a batch of user interviews** (4–10 sessions in a sprint) — consolidate findings before the team meeting
- **Post-research sprint** — summarize a 2–4 week discovery phase into a brief leadership can act on
- **Quarterly insights review** — synthesize learnings from quarterly customer calls or usability testing
- **Onboarding a new team member** — give them the condensed research narrative so they catch up on months of interviews
- **Before product planning** — ensure the roadmap reflects what users actually said, not what you *thought* they said
- **Customer advisory board debrief** — extract themes from multi-stakeholder feedback sessions
- **Competitive or market research** — combine internal user feedback with external reports to identify white space

## Instructions

1. **Gather sources**: Copy Harmony transcript links (user research calls, interviews, discovery sessions) or upload PDFs (research reports, competitive analyses). Include 2+ sources for stronger evidence; a single interview is useful but risky.

2. **Extract key findings**: Pull verbatim quotes from speakers. Note the speaker's role (e.g., "Sarah, Product Manager at Bridgeport" or "Founder, Jan Lee"), session date, and context (e.g., "unprompted mention" vs. "in response to question about pricing").

3. **Cluster into themes**: Group related findings via affinity mapping. Themes might be: "Real-time collaboration is non-negotiable," "Mobile access is a nice-to-have," "Data export is a dealbreaker." Don't force themes—let them emerge from the data.

4. **Rate evidence strength per theme**: For each theme, score as **Strong** (5+ sources, consistent, recent), **Moderate** (2–4 sources, mostly consistent, recent-ish), or **Weak** (1 source, isolated mention, or older data). Document the basis (e.g., "Strong: mentioned by 6/8 users, unprompted, Jan–Mar 2026").

5. **Identify contradictions and gaps**: Flag instances where users disagreed (e.g., "Half want automation; half want manual control"). Note what you didn't hear about—silence is data. Example: "No one mentioned pricing concerns, which is notable given market trend toward usage-based models."

6. **Write executive summary**: 2–3 sentences capturing the headline insight and 1–2 recommended actions. Assume the reader skipped the details.

7. **Recommend next steps**: Suggest validation (e.g., "Survey 50 users to confirm pricing preference split"), deeper exploration (e.g., "Run a prototype test with the mobile-first cohort"), or quick wins (e.g., "Real-time collab is table-stakes—prioritize in Q2 roadmap").

## Output Format

```markdown
# Research Brief: [Topic]

**Date:** [MM/DD/YYYY]
**Sources:** [Count of sessions/reports; date range]
**Conducted by:** [Your name/team]

## Executive Summary

[2–3 sentences synthesizing the core insight and primary recommendation.]

## Key Themes

### Theme 1: [Title]

**Evidence Strength:** [Strong | Moderate | Weak]

**Supporting evidence:**
- [Verbatim quote + speaker, role, date]
- [Verbatim quote + speaker, role, date]
- [Summary of supporting data point]

**Interpretation:** [1–2 sentences on why this theme matters for product decisions.]

---

### Theme 2: [Title]

**Evidence Strength:** [Strong | Moderate | Weak]

**Supporting evidence:**
- [Verbatim quote + speaker, role, date]
- [Verbatim quote + speaker, role, date]

**Interpretation:** [1–2 sentences.]

---

[Repeat for all themes; aim for 3–7.]

## Contradictions & Gaps

**Areas of disagreement:**
- [Description of conflicting feedback and representative quotes.]

**Notable absences:**
- [What users didn't mention but industry trends suggest matters.]

## Source Quality Assessment

| Source | Type | Count | Recency | Notes |
|--------|------|-------|---------|-------|
| Harmony: Q1 User Interviews | Session | 6 | Jan–Mar 2026 | Engineering-heavy cohort |
| Acme Corp Report | PDF | 1 | Oct 2025 | Secondary research; 5-month-old |
| Support Ticket Analysis | Data export | N/A | Ongoing | Last 30 days, 50+ tickets |

**Credibility assessment:** Primary research (user interviews) outweighs secondary sources. Recent data (Jan 2026+) preferred over older. Engineering users may skew technical needs.

## Recommended Next Steps

1. **Validate:** Survey [target cohort] on [specific question] to confirm [theme] holds beyond current sample.
2. **Explore:** Run [prototype test / working session / follow-up interview] to dig into [gap or contradiction].
3. **Action:** Prioritize [feature/initiative] in Q2 roadmap; strong consensus from [count] users.
4. **Monitor:** Track [metric/signal] quarterly to reassess [theme] as product/market evolves.

---

**Compiled by:** [Skill name]
**Last updated:** [Auto-generated timestamp]
```

## Example

### Research Brief: Dashboard Usability & Mobile Access

**Date:** 03/15/2026
**Sources:** 6 user research interviews (Feb–Mar 2026); Bridgeport Analytics in-app feedback (Feb 2026)
**Conducted by:** Design Research, Bridgeport Analytics

#### Executive Summary

Real-time collaboration and mobile access are non-negotiable for remote analytics teams. Current dashboard forces desktop-only workflows, stranding 60% of users during field work. Recommend: (1) Fast-follow mobile view for core metrics; (2) Collaborative annotation feature by end of Q2.

#### Key Themes

##### Theme 1: Mobile Access Is Non-Negotiable for Field Teams

**Evidence Strength:** Strong

**Supporting evidence:**
- "I'm constantly on site visiting customers. I need to pull reports on my phone, not hunt for a laptop." — Marcus, VP Customer Success, Bridgeport Analytics (Mar 3, 2026)
- "We have a 10-minute standup every morning. I want to glance at yesterday's KPIs on my phone before the call." — Elena, Operations Manager, Bridgeport Analytics (Mar 5, 2026)
- "Mobile doesn't need the full dashboard—just my top 5 metrics pinned. Right now I screenshot the desktop version and email it to my team. That's broken." — Raj, Sales Director, Bridgeport Analytics (Feb 28, 2026)

**Interpretation:** Not a "nice-to-have." 5/6 users explicitly mentioned needing mobile access for real-time decision-making outside the office. Current workaround is manual, slow, and errors happen.

---

##### Theme 2: Real-Time Collaboration (Comments & Annotations) Unblocks Async Feedback

**Evidence Strength:** Moderate

**Supporting evidence:**
- "Our team is split across time zones. I want to add a note directly on a chart so the person in India sees my question when they start their day." — Sophie, Analytics Lead, Bridgeport Analytics (Mar 1, 2026)
- "Slack is overflowing with 'did you see this chart?' threads. We need in-app discussions." — Marcus, VP Customer Success, Bridgeport Analytics (Mar 3, 2026)

**Interpretation:** Solves a real workflow friction point for distributed teams. 2/6 users explicitly requested this; likely resonates beyond current sample since async work is industry standard.

---

##### Theme 3: Data Export Flexibility (CSV, Parquet, API) Required for Downstream Analysis

**Evidence Strength:** Strong

**Supporting evidence:**
- "Your CSV export is missing three columns I need for the ML pipeline. I end-run through the raw API, but that's undocumented." — Yuki, Data Science Manager, Bridgeport Analytics (Feb 25, 2026)
- "I need to export annotations and custom metrics to our data warehouse. Currently I'm manually copying into Airflow." — Dev, Analytics Engineer, Bridgeport Analytics (Mar 2, 2026)

**Interpretation:** Users need flexibility to integrate dashboards into their broader data stack. Current export is too rigid for power users.

---

##### Theme 4: Performance Under Large Datasets (1M+ Rows) Causes Frustration

**Evidence Strength:** Moderate

**Supporting evidence:**
- "Dashboard feels sluggish once we hit 2M rows in the fact table. Filtering takes 10+ seconds." — Yuki, Data Science Manager, Bridgeport Analytics (Feb 25, 2026)
- "[Unprompted] Does Bridgeport scale? We're growing fast and worried about hitting a wall in six months." — Elena, Operations Manager, Bridgeport Analytics (Mar 5, 2026)

**Interpretation:** Not yet a blocker for most users (only 2 mentioned it), but will become critical as customers scale. Address proactively to avoid churn.

#### Contradictions & Gaps

**Areas of disagreement:**
- **Real-time data refresh cadence:** Marcus wanted sub-minute latency ("I need live numbers for decisions"); Raj thought hourly was "plenty." Split may reflect roles (Customer Success vs. Sales) rather than fundamental disagreement. Recommend: Offer configurable refresh rates with pricing tiers.

**Notable absences:**
- **No one mentioned custom roles/permissions.** This is unusual given industry churn around data governance. Possible explanations: (a) all users have admin access (suggests small organizations); (b) not top-of-mind; (c) Bridgeport's current ACL model is "good enough." Recommend: Follow up in next round.
- **No discussion of dashboards embedded in customer-facing apps.** This is a growth lever for analytics SaaS. Absence may indicate current customer base is internal-use only. Consider testing with power users.

#### Source Quality Assessment

| Source | Type | Count | Recency | Notes |
|--------|------|-------|---------|-------|
| Harmony: Q1 Discovery Interviews | Session | 6 | Feb–Mar 2026 | Mixed roles (sales, ops, analytics, CS); 30–60 min each; optional second follow-up |
| In-app Feedback Widget | Data export | 12 entries | Feb 2026 | Self-selected; brief; aligns with interview themes |

**Credibility assessment:** Interview data is primary and recent. Widget feedback is noisy but provides sample validation. All users are current customers with 6+ months tenure, so bias toward "current state is OK" (newer customers might be more critical). Consider adding user research with recent churned customers.

#### Recommended Next Steps

1. **Validate:** Survey 30+ Bridgeport customers on mobile access priority to confirm 5/6 interview finding generalizes. Include question on willingness to pay for mobile-only tier.
2. **Explore:** Prototype 2–3 mobile dashboard templates (pinned metrics, alerts, trending). Test with Marcus (VP CS) and Elena (Ops) in 2-week working session.
3. **Action:** Prioritize mobile "read-only" view for core metrics in Q2 roadmap. Estimate 2–3 weeks. Launch with top 50 customers.
4. **Action:** Add inline comments on charts in Q2 (parallel workstream). Async feedback reduces Slack noise and creates audit trail.
5. **Monitor:** Track mobile app adoption, feature engagement, and NPS split (mobile vs. desktop users) to assess ROI.

---

**Compiled by:** Summarize Research Findings Skill
**Last updated:** 2026-03-15 14:32 UTC
```

## Edge Cases

- **Single source only:** If you have one interview or one report, label it as **Weak** evidence. Still extract insights, but flag that the finding needs validation before roadmap decisions. Example: "One user mentioned X; needs 2+ confirmations before prioritization."

- **Conflicting findings across interviews:** Don't resolve artificially. Call it out and hypothesize why (role, company size, use case, recency). Example: "Half the users wanted automation; half wanted manual control. Hypothesis: technical users prefer automation; business users fear black boxes. Recommend segment-specific follow-up."

- **Outdated research mixed with recent:** Weight by date. If you're mixing Jan 2025 research with Feb 2026 interviews, note the time gap and any market/product changes that might explain shifts. Example: "Jan 2025 users wanted X; Feb 2026 users don't mention it. Possible explanation: [feature added, market shifted, sample changed]."

- **Non-English sources:** Translate first, then extract. Note the translation method (human, LLM, professional service) in the Source Quality Assessment. Translation nuance matters for sentiment and specificity.

- **Very large research corpus (20+ sessions):** Cluster by theme *first*, then review sessions within each cluster. This prevents drowning in data. You might also segment by role or company size and run separate briefs.

