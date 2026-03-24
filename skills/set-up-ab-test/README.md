# Set Up A/B Test

## Overview

Transform casual "we should test that" moments from marketing team meetings into statistically rigorous A/B test plans. This skill guides you through hypothesis formation, sample size calculation, variant design, success metrics, and stopping rules—ensuring your experiments are executable and defensible.

## Problem It Solves

Marketing teams frequently identify test opportunities in meetings but lack a structured process to turn those ideas into proper experiments. This leads to:
- Tests run without proper sample size calculation (underpowered, inconclusive results)
- Variants built without clear specifications (implementation ambiguity)
- Results interpreted with bias (peeking at data, moving goalposts, overstating marginal effects)
- Time and traffic wasted on low-impact tests

This skill automates the rigor, so you run fewer experiments that actually matter.

## How It Works

The skill listens for test ideas in your meeting transcripts and meeting notes, then generates a formal **Test Brief** that includes:

1. **Testable Hypothesis** — Converts vague hunches into If/Then/Because statements
2. **Metrics & Guardrails** — Defines what success looks like and what NOT to sacrifice
3. **Sample Size** — Calculates visitors needed to reach statistical significance
4. **Variant Specs** — Documents control and treatment(s) in implementation-ready detail
5. **Duration & Stopping Rules** — Sets a hard stop date and no-peeking discipline
6. **Results Framework** — Pre-defines how to interpret findings (statistical vs. practical significance)

## When to Use

Trigger this skill when you hear (or write):
- "We should test whether..."
- "I bet [variant] would convert better than [control]"
- "What if we changed the [headline/CTA/pricing/copy]?"
- Disagreement in meetings about which approach is better
- Discussion of conversion rate optimization, landing page performance, or email effectiveness

## Example Use Case

**Meeting:** "Our landing page headline focuses on ROI, but our best customers care about compliance. Should we test a compliance-first headline?"

**Output:** Test Brief specifying:
- Hypothesis: Compliance messaging drives 15% higher conversion
- Baseline: 3.2% conversion, 4,200 visitors/month
- Sample size: 2,450 per variant (28-day test)
- Variants: ROI-focused (control) vs. compliance-focused (treatment)
- Success threshold: 15% lift at p < 0.05

## Key Features

- **Formula-based sample size calculation** — Adjusts for your actual traffic and desired sensitivity
- **Edge case guidance** — Handles low-traffic sites, concurrent tests, seasonal patterns, and practical significance
- **No-peeking discipline** — Built-in stopping rules prevent bias and false positives
- **Specification-driven variants** — Reduces implementation ambiguity

## Requirements

- Access to Harmony meeting transcripts or team discussion notes
- Basic marketing metrics (current conversion rate, monthly traffic)
- Clarity on desired effect size (% lift you care about)

## Connected Integrations

- **Google Analytics** — To retrieve baseline conversion rates and traffic volume
- **HubSpot** — To identify landing page or email variants already in testing
- **Notion** — To store test briefs and historical results for future reference
- **Slack** — To surface test ideas from channel discussions in real time

## Role & Action

- **Role:** Marketing
- **Action:** Execute (generate test plan documentation and hand off to team for implementation)

---

**Built for Harmony Marketing Teams** — Turn "we should test that" into "we will test that, properly."
