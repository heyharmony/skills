---
name: "Align Strategic Priorities"
description: "Detect strategic misalignment across teams by comparing stated company priorities against what people actually discuss, commit to, and work on in meetings. Surfaces where execution drifts from strategy before it shows up in results. Trigger on: strategic alignment, OKR review, priority alignment, cross-functional alignment, strategy execution gap, team priorities, alignment check, quarterly priorities, strategic planning."
dependencies: []
---

## Purpose

Strategy fails at the seams between teams. This skill compares your stated priorities—OKRs, board commitments, annual plan—against what teams actually discuss and commit to in their meetings. When the CEO says "enterprise is our focus" but 70% of marketing meeting time is spent on SMB campaigns, that's a strategy-execution gap. Harmony captures the evidence in every standup, planning session, and cross-functional sync. This skill surfaces where reality diverges from intent before it shows up in quarterly results.

## When to Use

- **Quarterly OKR review**: Validate that teams are executing against committed OKRs, not just tracking toward them
- **Pre-board meeting alignment check**: Verify your leadership team's narrative matches what's actually happening in the org
- **After leadership offsite**: Did the new strategic direction cascade? Are teams talking about it in their meetings?
- **When teams seem busy but results lag**: Diagnose whether effort is going to the right priorities or scattered across conflicting goals
- **New strategic direction**: Launch a new company priority and measure adoption and alignment within two weeks
- **Post-reorg when responsibilities shift**: Verify teams understand their new role in the strategic plan and haven't orphaned critical initiatives

## Instructions

1. **Define stated priorities** — Pull from your most recent OKRs, board deck, strategy document, or the leadership meeting where priorities were set. List 3–5 core strategic priorities with their intent.

2. **Mine team meetings across functions** — Analyze meeting transcripts, notes, or summaries (standups, planning sessions, syncs, retrospectives) from the past 2–4 weeks across Engineering, Sales, Marketing, Product, and Customer Success. Track: topic frequency, time allocation, and explicit commitments made.

3. **Map priorities to team activity** — For each stated priority, identify which teams are spending meeting time on it vs. not. Quantify: What % of meeting time does each team allocate to each priority?

4. **Detect drift signals** — Identify topics consuming significant meeting time that aren't tied to any stated priority. Rank them by team consensus and time spent. These are where energy is leaking.

5. **Score alignment per team** — Assign each team an alignment score (Strong / Partial / Weak / Misaligned) against stated priorities. Provide evidence: meeting quotes, time spent, number of commitments made.

6. **Identify cross-team dependency gaps** — Flag assumptions: Team A says "Team B is handling X," but Team B never mentions X in their meetings. These are critical blind spots.

7. **Build alignment heat map** — Create a matrix: priorities × teams. Cells show alignment level (Strong/Partial/Weak/Misaligned) and time % allocated. Visual clarity on where the org is pulling together and where it's fragmented.

8. **Recommend realign or redefine** — For each misalignment: decide whether to realign execution (change behavior) or redefine strategy (change the priority to match reality). Propose 2–3 concrete next steps per recommendation.

## Output Format

**Strategic Priority List**
- Stated priority (from OKR or board deck)
- Strategic intent
- Expected outcome

**Team Alignment Heat Map**
- Priorities × Teams matrix
- Alignment level (Strong/Partial/Weak/Misaligned)
- % of meeting time allocated

**Drift Signal Report**
- Off-strategy topics consuming time
- Which teams are discussing them
- Time spent, number of mentions
- Representative quotes from meetings

**Dependency Gap Analysis**
- Assumed handoffs that aren't happening
- Teams affected
- Risk or missed opportunity

**Alignment Score per Team**
- Team name and score (Strong/Partial/Weak/Misaligned)
- Summary of where aligned and where drifting
- Key evidence (meeting quotes)

**Recommendations**
- For each misalignment: realign or redefine?
- 2–3 concrete next steps
- Owner and timeline

## Example: Arcline (B2B Workflow Automation, 85 employees)

**Stated Priority**: "Move upmarket to enterprise; build recurring revenue in mid-market and above."

**Analysis Results**:

**Team Alignment Scores**:
- **Engineering**: Strong (85% aligned) — "We're shipping SSO, audit logs, and API rate limiting for enterprise." Multiple meetings focused on compliance and scalability. Clear commitment to building enterprise-grade infrastructure.
- **Sales**: Partial (50% aligned) — Half the pipeline conversation is mid-market+ deals; half is still SMB because "quick wins pay the bills." Team explicitly noted tension: "We should stop chasing $5k deals, but we need the quarterly revenue."
- **Marketing**: Misaligned (20% aligned) — 100% of content strategy, webinar topics, and case study planning targets "startup persona." When asked about enterprise campaigns, response was "That's sales' job." Marketing is not reinforcing the upmarket narrative.
- **Product**: Strong (80% aligned) — Roadmap meetings centered on features that block enterprise deals (data export, compliance, multi-org). Identified three "enterprise-killer" bugs that are now top-priority fixes.
- **Customer Success**: Strong (90% aligned) — Onboarding playbook for enterprise accounts created. Upsell strategy written and executed. Team proactively identified churn risks in SMB segment.

**Drift Signals**:
- **Tech debt sprint**: Engineering allocated 20% of sprint capacity to fixing infrastructure issues. Not directly tied to enterprise strategy, but necessary to enable it.
- **SMB support overhead**: CS team spending 15 hours/week on SMB customer issues. Mentioned in retros: "We're stretched thin supporting low-revenue accounts."
- **Product-led growth research**: Product conducted user research on free-tier activation. Not in stated priorities. Emerging tension: "Is PLG a path to enterprise, or distraction?"

**Dependency Gap**:
- Sales assumes "Marketing will create enterprise content." Marketing assumes "Sales is responsible for enterprise positioning." Result: No enterprise content created in Q1.
- Sales assumes "Product will slow down SMB features." Product assumes "Sales will stop selling SMB deals." Result: Both constraints exist; neither actually enforced.

**Recommendations**:
1. **Realign Marketing** (Owner: CMO | Timeline: 2 weeks) — Redirect one content creator to enterprise buyer persona. Redefine webinar series to include use cases that appeal to mid-market/enterprise. Measure: 30% of content targets enterprise by month-end.
2. **Realign Sales incentives** (Owner: VP Sales | Timeline: Monthly) — Adjust commission structure to reward upmarket ACV. Run a 30-day "no SMB" sprint to test if team can hit quota upmarket-only. Measure: % of new pipeline ACV $50k+.
3. **Redefine Product-led growth** (Owner: VP Product | Timeline: OKR setting) — Decide: Is PLG an enterprise acquisition channel or a separate business? If separate, explicitly resource it and set distinct OKR. If path-to-enterprise, align roadmap to PLG→enterprise conversion funnel.

## Edge Cases

- **No formal OKRs exist**: Derive priorities from the most recent CEO/leadership meeting where strategic direction was discussed. Interview CEO and CFO on top 3 priorities. Treat that as your baseline.
- **Remote/async teams with fewer meetings**: Supplement meeting analysis with Slack channel activity, async updates, and one-on-one notes. Look for signals in written communication: what topics come up repeatedly?
- **Priorities that legitimately conflict** (e.g., growth vs. profitability): Don't flag as misalignment; instead, ask leadership to clarify trade-offs. Analyze how teams are *prioritizing* between conflicting goals. Which teams lean growth? Which lean profitability?
- **Teams aligned but working on wrong priorities**: This skill will show strong alignment to a strategic priority that leadership later realizes was wrong. Use this as a signal to revisit strategy, not to blame teams.
- **New hire teams with no meeting history**: Exclude from heat map until they have 2–3 weeks of meetings. Flag in report that analysis is incomplete.
