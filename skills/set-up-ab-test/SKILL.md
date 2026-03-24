---
name: "Set Up A/B Test"
description: "Turn marketing hypotheses into statistically rigorous A/B test plans — sample size calculation, variant design, success metrics, and stopping rules. Catches 'we should test that' moments from team meetings and structures them into executable experiments. Trigger on: A/B test, split test, experiment setup, test hypothesis, conversion test, variant test, statistical significance, test plan, multivariate test."
dependencies: []
---

## Purpose

Marketing teams constantly say "we should test that" in meetings — and then never do, or do it without proper statistical rigor. This skill catches those moments from Harmony meeting transcripts and structures them into executable A/B test plans. It defines hypotheses, calculates sample sizes, designs variants, sets stopping rules, and establishes success criteria so your team runs fewer, better experiments.

## When to Use

- Landing page optimization (headline, hero image, CTA placement)
- Email subject line testing (open rate improvements)
- Pricing page variants (price anchoring, packaging options)
- CTA copy changes (button text, urgency language, value prop)
- Onboarding flow experiments (step complexity, feature sequencing)
- Checkout optimization (field reduction, trust signals, payment options)

## Instructions

**Step 1: Surface Test Candidates from Meeting Transcripts**
Listen for the conversational cues: "We should test whether...", "I think [variant] would convert better than [control]", "What if we changed [element]?", or clear disagreements where different team members favor different approaches. These are your test ideas waiting to be formalized.

**Step 2: Write Hypothesis in If/Then/Because Format**
Transform the meeting comment into a testable hypothesis: "If we [change X], then [metric Y] will [increase/decrease by Z%], because [mechanism]." Example: "If we change the hero headline from ROI-focused to compliance-focused, then landing page conversion rate will increase by 15%, because compliance-focused messaging resonates better with our target buyer persona."

**Step 3: Define Primary Metric + Guardrail Metrics**
Identify the key metric you're optimizing (primary): conversion rate, click-through rate, sign-up rate, etc. Then define guardrails to ensure you're not gaming the system: bounce rate, time-on-page, return visitor rate. Run the test until the primary metric reaches significance; stop immediately if a guardrail metric degrades significantly.

**Step 4: Calculate Minimum Sample Size**
Use this plain-language formula: **Sample size per variant = (Baseline conversion rate × [1 + Minimum Detectable Effect]) with 95% confidence and 80% power.** More specifically: Multiply your baseline conversion rate by two distinct values—one for the control, one for the variant—then use a sample size calculator (or rough estimate: divide 15,500 by your baseline rate for a 20% MDE at 95% confidence, 80% power). Example: 3.2% baseline, 20% MDE (0.032 × 1.20 = 3.84%) → ~2,450 visitors per variant.

**Step 5: Design Control and Variant(s)**
Explicitly define what changes and what stays identical:
- Control: Current live version or baseline
- Variant A: Specific change (e.g., "Headline changed to: '[New text]'")
- Variant B (optional): Alternative treatment (e.g., "Headline changed to: '[Alternative text]'")
Document pixel-perfect specs so your team can implement with zero ambiguity. Include screenshots, copy, layout changes, and timing.

**Step 6: Set Duration and Stopping Rules**
Calculate expected duration: traffic per day ÷ sample size per variant = days to reach significance. Set a hard stop date (no peeking before statistical significance is achieved; no "stopping early because winner is obvious"). If you reach 21 days without significance, decide: continue for X more days, or call it inconclusive.

**Step 7: Build Results Interpretation Framework**
Establish upfront: What p-value threshold = statistical significance? (typically p < 0.05). What is the minimum practical effect size that justifies implementation? (a 1% lift might be statistically significant but not worth the engineering effort). Document how you'll handle edge cases: seasonal patterns, user cohort effects, multi-test interactions.

## Output Format

Present your A/B test plan as a **Test Brief** containing:

1. **Hypothesis** (If/Then/Because format)
2. **Primary Metric** + Guardrail Metrics
3. **Sample Size Calculation** (baseline rate, MDE, confidence level, visitors per variant, total sample)
4. **Test Duration** (expected days, hard stop date)
5. **Variant Specifications** (control details, variant details, changes listed explicitly)
6. **Stopping Rules** (significance threshold, guardrail thresholds, decision rules)
7. **Success Criteria** (statistical significance threshold, practical significance minimum, implementation decision)

## Example: Greenhouse (Sustainability Reporting SaaS)

**Context:** Marketing meeting excerpt—"Our hero headline leads with ROI. But compliance is what actually keeps our target buyer awake at night. Should we test a compliance-first headline instead?"

**Test Brief:**

**Hypothesis**
If we change the landing page hero headline from "Reduce ESG Reporting Costs by 40%" to "Eliminate ESG Compliance Risk in 30 Days," then landing page conversion rate will increase by 15%, because compliance concerns drive more urgency than ROI in the regulatory landscape our buyers navigate.

**Metrics**
- Primary: Landing page conversion rate (visitor → lead signup)
- Guardrails: Bounce rate (no increase >3%), time-on-page (no decrease >10%), return visitor rate (no decline >5%)

**Sample Size Calculation**
- Baseline conversion rate: 3.2%
- Minimum Detectable Effect: 20% (0.032 → 0.0384)
- Confidence level: 95%, Power: 80%
- Sample size per variant: 2,450 visitors
- Total sample needed: 4,900 visitors
- Current traffic: ~4,200 visitors/month to landing page
- Expected duration: ~28 days (accounting for seasonal variation)

**Variants**
- Control: Hero headline = "Reduce ESG Reporting Costs by 40% | The Automation Platform Built for Compliance Teams" | Hero CTA = "Start Free Trial"
- Variant A: Hero headline = "Eliminate ESG Compliance Risk in 30 Days | The Platform Regulatory Teams Trust" | Hero CTA = "Start Free Trial" (all other elements unchanged)

**Duration & Stopping Rules**
- Hard stop date: April 19, 2026 (28 days)
- No peeking at results before day 21
- Stop early only if a guardrail metric degrades below threshold OR if you reach statistical significance (p < 0.05)
- If inconclusive after 28 days: declare test inconclusive, gather more traffic for 7 additional days, or fold test and move to next hypothesis

**Success Criteria**
- Variant A is "winner" if: conversion rate increases ≥15% (p < 0.05) AND guardrail metrics remain stable
- If conversion lifts 8-14% (statistically significant but <15% MDE): Discuss whether lift justifies implementation effort; may implement depending on resource constraints
- If conversion lift is <5% (statistically significant): Do not implement; invest in higher-impact tests

## Edge Cases

**Low-Traffic Site (< 500 visitors/month to test page)**
You won't reach statistical significance in reasonable time. Alternative approaches: extend test duration to 3–6 months, increase MDE to 50%+ (test only high-impact changes), run sequential testing (smaller cohorts, ongoing decision-making), or combine with user research (interviews, usability testing) to reduce reliance on pure statistical power.

**Multiple Concurrent Tests on Same Page**
Risk: interaction effects (variant A + variant B together ≠ variant A alone). Mitigate: Run tests in sequence, or if parallel testing is necessary, ensure variants are on independent page elements (headline + button copy are safe; headline + traffic split logic are risky). Document interactions post-hoc.

**Logged-In vs. Anonymous Users**
Behavior often differs dramatically between cohorts. Run stratified analysis: sample size must account for splitting traffic into both cohorts, or set a guardrail to ensure variant's effect is consistent across both groups. Consider separate tests if conversion pathways differ significantly.

**Seasonal Traffic Patterns**
March peaks don't replicate to October. If your baseline conversion rate varies seasonally, set guardrails to detect month-over-month anomalies. Extend test into stable period if running during season-change weeks. Document seasonal factors in results interpretation.

**Winner is Statistically Significant but Practically Insignificant**
A 1.2% absolute lift (0.5% relative) may reach p < 0.05 with large N, but implementation effort may exceed benefit. Set your MDE and practical significance threshold upfront to avoid this trap. Document: "This test is powered to detect ≥X% lift; if actual lift is below Y%, do not implement."
