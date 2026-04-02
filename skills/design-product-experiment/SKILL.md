---
name: "Design Product Experiment"
description: "Turn product hunches into rigorous experiments — write testable hypotheses, define success metrics, estimate sample sizes, and establish stopping rules to reduce bias and accelerate learning. Trigger on: product experiment, A/B test, hypothesis, experiment design, test this idea, how do we validate, sample size, success metric."
dependencies: []
author: "Harmony"
version: "1.0.0"
icon: "sparkles"
cover: ""
screenshots: []
category: "Product"
---

## Purpose

Product teams constantly face decisions shaped by anecdotes, debates, and intuition. This skill transforms those moments—a customer call where three users mentioned friction, a sprint review where the team split on a feature direction, a support ticket spike on a specific flow—into structured experiments. By grounding hypotheses in observation, defining what "success" looks like before launch, and calculating statistical confidence upfront, teams reduce the risk of shipping changes that look good in meetings but flop in production. The skill mines conversation data from customer calls, sprint discussions, and team reviews to surface experiment candidates, then guides you through the rigorous design process so you ship faster with confidence.

## When to Use

- **After customer calls** where 2+ users independently mention the same friction point or request
- **During sprint planning** when the team debates whether a change will move the needle (and opinions diverge)
- **In product review meetings** when you're unsure if a shipped feature is actually working or if early wins are just a honeymoon effect
- **Before major redesigns** to establish a baseline and hypothesis so you can measure impact (not guess)
- **When backlog prioritization stalls** due to disagreement—run an experiment to replace opinion with data
- **After a support spike** or a series of similar bug reports suggesting a UX problem
- **To validate risky platform changes** (onboarding flow, pricing model, core interaction) before rolling out to 100%

## Instructions

1. **Identify the trigger from recent conversations**
   - Scan recent customer call transcripts, sprint notes, or product review recordings
   - Look for repeated mentions of a specific pain point, feature request, or debate
   - Pull a direct quote or paraphrase to ground your hypothesis in reality (e.g., "Three of last week's enterprise customers mentioned the export button is hard to find")

2. **Write a testable hypothesis in If/Then/Because format**
   - **If** [specific change you'll make]: "we move the export button to the top-right corner"
   - **Then** [measurable outcome you expect]: "users will complete exports 25% faster"
   - **Because** [the mechanism or user behavior you believe]: "reducing visual search time and clicks lowers friction on a high-value task"
   - Avoid vague language ("users will be happier") and make it falsifiable

3. **Define three levels of metrics**
   - **Primary metric**: The one thing that must move for the experiment to be a success (e.g., time-to-export, export completion rate). Tie it directly to your hypothesis
   - **Guardrail metrics**: 2–4 metrics that should *not* get worse (e.g., overall page load time, user error rate). These catch unintended side effects
   - **Secondary metrics**: Nice-to-haves that inform future decisions but aren't make-or-break (e.g., button click-through rate, user satisfaction survey score)

4. **Estimate sample size and duration**
   - Use the template baseline: daily active users in the experiment group, typical conversion/metric rate, and target effect size (e.g., 25% lift)
   - Rule of thumb: A well-powered experiment needs 2–4 weeks at typical traffic to detect a 15–20% lift with 80% confidence and 95% statistical significance
   - State clearly: "We expect to see reliable results in ~10 days at 50% rollout, or 20 days at 10% rollout"
   - Document your assumptions (traffic, baseline rate, acceptable false-positive risk)

5. **Score and prioritize using ICE**
   - **Impact**: How much will it move your metric if successful? (1–10 scale: 10 = doubles the metric, 1 = barely moves)
   - **Confidence**: How confident are you in the hypothesis and mechanism? (1–10: 10 = customer feedback + past wins, 1 = wild guess)
   - **Ease**: How simple is it to build and ship? (1–10: 10 = change a config flag, 1 = redesign the whole flow)
   - Multiply: Impact × Confidence ÷ Ease = ICE score. Prioritize high scores first

6. **Set a decision rule upfront**
   - Define what you'll do if primary metric goes up, down, or stays flat (and how confident you need to be)
   - Example: "If export completion rate lifts >20% with p < 0.05, roll out to 100%. If it drops or stays flat after 2 weeks, revert."
   - Include decision rules for guardrail metrics: "If page load time increases >100ms, stop immediately."

7. **Create a launch checklist**
   - Confirm backend logging captures all metrics (export start, completion, error state, time elapsed)
   - Set up dashboard with real-time primary and guardrail metrics
   - Brief customer success team on what to watch for in support tickets
   - Define communication: who makes the go/no-go call, and when

8. **Document statistical guardrails**
   - Acknowledge common pitfalls: peeking at results too early, running too long, multiple comparisons
   - Commit to stopping rules: "We stop on day 14 regardless of results" or "We stop immediately if guardrail metric drops >5%"
   - Plan for post-launch: how will you monitor for novelty effects wearing off?

9. **Get alignment before launch**
   - Share the hypothesis, metrics, and ICE score with stakeholders (product, design, engineering, leadership)
   - Confirm everyone agrees on what "success" looks like
   - Flag any concerns about timeline, traffic, or side effects

10. **Launch, monitor, and interpret**
    - Roll out to a small percentage (5–10%) first if the change is risky
    - Check primary and guardrail metrics daily; watch for unexpected patterns
    - Avoid cherry-picking results; stick to your decision rule
    - Once you reach sample size or timeline, write a clear conclusion (not "interesting trends" or "directional signs"—say what you *know* and what you *don't know*)

## Output Format

```markdown
# Experiment: [Experiment Name]

## Hypothesis
- **If**: [Specific change]
- **Then**: [Expected outcome]
- **Because**: [User behavior or mechanism]

## Metrics

### Primary Metric
- **Name**: [e.g., Time-to-Export (seconds)]
- **Baseline**: [Current value; e.g., 47 seconds]
- **Target Lift**: [e.g., 25% → 35 seconds]
- **How to Measure**: [e.g., time elapsed from button click to download complete]

### Guardrail Metrics
1. **[Metric Name]**: Baseline [X], must not drop below [acceptable threshold]
2. **[Metric Name]**: Baseline [X], must not drop below [acceptable threshold]

### Secondary Metrics
1. **[Metric Name]**: [What this tells us]
2. **[Metric Name]**: [What this tells us]

## Sample Size & Duration
- **Daily Active Users in Experiment Group**: [e.g., 500 at 10% rollout]
- **Baseline Primary Metric Rate**: [e.g., 68% completion]
- **Target Effect Size**: [e.g., 25% improvement → 85% completion]
- **Statistical Power**: 80% (probability of detecting true effect if it exists)
- **Significance Level (α)**: 0.05 (5% false-positive risk)
- **Estimated Runtime**: [e.g., 14 days at 10% rollout, 7 days at 25% rollout]
- **Key Assumptions**: [e.g., traffic stable, no seasonal events during experiment window]

## Prioritization (ICE Score)
- **Impact**: [1–10] — [Reasoning]
- **Confidence**: [1–10] — [Reasoning]
- **Ease**: [1–10] — [Reasoning]
- **ICE Score**: [Impact] × [Confidence] ÷ [Ease] = **[Score]**

## Decision Rules
- **Primary Success**: If [metric] lifts [X]% with p < 0.05, then [action: roll out 100%, keep experiment, iterate]
- **Primary Failure**: If [metric] drops [X]% or stays flat after [duration], then [action: revert or iterate]
- **Guardrail Trigger**: If [guardrail metric] declines [X]% at any point, [action: stop immediately and revert]

## Launch Checklist
- [ ] Logging in place for all metrics; validated in staging
- [ ] Dashboard created and shared with team (real-time updates)
- [ ] Customer success & support briefed on experiment intent
- [ ] Rollout plan defined (start at 5–10%, ramp if healthy)
- [ ] Decision-maker identified; communication cadence set
- [ ] Monitoring alert configured for guardrail metrics

## Context & Motivation
- **Trigger**: [Where did this idea come from? Customer calls, support spike, sprint debate, past data?]
- **Expected Impact**: [Why this matters to the business or users]
- **Risk**: [What could go wrong? Unintended side effects?]

## Notes
[Any additional context, alternative hypotheses considered, or open questions]
```

## Example

**Context**: Headwind (a task management tool for remote teams) noticed that export feature adoption was low. In customer calls this month, two enterprise clients and one mid-market prospect mentioned the export button was hard to find. The product team debated whether moving it would help or whether the real problem was missing use cases.

---

## Hypothesis
- **If**: We move the export button from a dropdown menu (Settings > Export) to a sticky button in the top-right corner of the task list
- **Then**: Users will complete exports 40% faster (from ~90 seconds to ~54 seconds) and export completion rate will lift from 12% to 18% of users taking at least one export per month
- **Because**: Reducing search friction and making the action more visible will lower the barrier to using the export feature, and faster completion will reinforce the behavior

## Metrics

### Primary Metric
- **Name**: Export Completion Time (seconds from click to download)
- **Baseline**: 90 seconds (avg of users who export)
- **Target Lift**: 40% improvement → 54 seconds
- **How to Measure**: Timestamp from export button click to successful file download event in logging

### Guardrail Metrics
1. **Page Load Time**: Baseline 1.2s, must not exceed 1.4s (adding button to sticky header)
2. **Task List Interaction Error Rate**: Baseline 2%, must not exceed 3% (ensure button doesn't interfere with core interaction)
3. **Browser Session Crash Rate**: Baseline 0.3%, must not exceed 0.5%

### Secondary Metrics
1. **Monthly Export Users**: Current 12% of DAU, track if this grows (indicator of habit formation)
2. **Export Feature Activation Rate**: % of new users who export within 30 days (leading indicator of value realization)
3. **User Satisfaction (NPS on export flow)**: Post-export survey; expect +5-point lift

## Sample Size & Duration
- **Daily Active Users in Experiment Group**: ~1,200 at 10% rollout (Headwind's DAU ~12,000)
- **Baseline Export Completion Rate**: 68% of users who click the button complete the export
- **Target Effect Size**: 25% improvement in completion rate (68% → 85%)
- **Statistical Power**: 80% (industry standard)
- **Significance Level (α)**: 0.05 (95% confidence; 5% chance of false positive)
- **Estimated Runtime**:
  - At 10% rollout (~1,200 users/day): **14–16 days** to detect 25% lift with 95% confidence
  - At 25% rollout (~3,000 users/day): **6–7 days**
- **Key Assumptions**: Daily active users remain stable; no major product changes during window; traffic not concentrated on weekends

## Prioritization (ICE Score)
- **Impact**: 8 — Export is used by enterprise customers; faster exports could unlock new workflows (templates, reporting integrations). A 40% improvement is meaningful even if adoption is modest today
- **Confidence**: 7 — Direct customer feedback from 2 recent calls + 1 prospect; we've moved buttons before with success (referral invite button +23% clicks). Mechanism (friction reduction) is well-established
- **Ease**: 8 — Button move is low-risk CSS/layout change; logging already in place; ~2 hours of engineering work
- **ICE Score**: 8 × 7 ÷ 8 = **7.0** (high priority; front of backlog)

## Decision Rules
- **Primary Success**: If export completion time drops >30% (below 63s) AND completion rate lifts >15% (above 78%) with p < 0.05, roll out to 50% for 1 week, then 100% if guardrails hold
- **Primary Failure**: If both metrics are flat or decline after 2 weeks, revert the change and document lessons (e.g., "button placement alone doesn't address core blocker")
- **Guardrail Trigger**: If page load time exceeds 1.4s or error rate climbs above 3%, stop experiment immediately and revert

## Launch Checklist
- [ ] Logging validation: export button click, dropdown navigation, download completion, timestamps—all firing correctly in staging
- [ ] Dashboard created in Headwind's analytics tool; primary, guardrail, and secondary metrics displayed in real-time
- [ ] Customer success and support briefed: "We're testing a more visible export button. Watch for export-related support volume trends."
- [ ] Rollout plan: Start at 5% (60 users/day) on Tuesday morning, monitor for 2 days, ramp to 10% if no issues
- [ ] Decision-maker: Sarah (Product Lead). Sync on results every 3 days. Final decision window: Day 14
- [ ] Alert configured: Slack notification if page load time exceeds 1.4s or error rate hits 3%

## Context & Motivation
- **Trigger**: Customer call notes from Feb 27 (Acme Corp) and Mar 1 (TechStart Inc.) both mentioned export discovery; also noted in Mar 8 prospect demo feedback
- **Expected Impact**: If export adoption grows from 12% to 18% of users, that's 720 additional monthly exports. Enterprises often export to build reporting dashboards and integrations; this unblocks that category
- **Risk**: Adding a sticky button could clutter the interface if it conflicts with other UI patterns; users may click it accidentally (low severity, caught by guardrail metrics)

## Notes
- Alternative hypothesis considered: "The real blocker is export file format (CSV vs. JSON)." Decision: test button placement first (lower cost, faster feedback); if that doesn't lift adoption, revisit formats in a follow-up
- Post-launch: If the experiment succeeds, plan a follow-up to test guided export (tour or walkthrough) to see if we can lift adoption further
- Engineering note: Button must be accessible (keyboard navigation, color contrast) and responsive on mobile
