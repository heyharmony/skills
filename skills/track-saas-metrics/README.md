# Track SaaS Metrics

## Overview

**Track SaaS Metrics** is a Harmony skill that creates a single source of truth for SaaS financial metrics. It reconciles metric definitions that vary across teams, builds a canonical dashboard, and benchmarks your numbers against stage-appropriate targets.

## Problem

SaaS metrics get quoted inconsistently across meetings. The CEO says "churn is 3%" in a board call, the CS lead says "we lost 8 accounts" in a standup, and finance tracks logo churn at 4.2% vs. revenue churn at 2.1%. When investors ask for metrics, teams have different answers. Misalignment erodes confidence and slows decision-making.

## Solution

This skill:
- **Extracts metric references** from meeting transcripts (Harmony) and surfaces every quote with date, source, and value
- **Reconciles definitions** by flagging inconsistencies and establishing one canonical definition per metric
- **Builds a dashboard** showing ARR, MRR, churn, NRR, CAC, LTV, and 8+ other key metrics with current and trend data
- **Benchmarks against targets** by comparing your metrics to stage-appropriate peer benchmarks (Seed, Series A, Series B+)
- **Calculates composite health scores** (Rule of 40, SaaS Quick Ratio, Magic Number) for quick health assessment
- **Surfaces narrative** — a 1-page investor-ready summary of strengths, vulnerabilities, and next steps

## When to Use

- **Monthly/quarterly metrics review** — refresh the canonical dashboard and catch definition shifts
- **Board meeting prep** — build investor-ready metrics narrative
- **Fundraising (Series A/B/C)** — clean, consistent metrics build investor confidence
- **Post-pivot** — reset metric definitions after a business model change
- **New finance or RevOps hire** — give them a version-controlled metrics foundation

## What You'll Get

- **Canonical Metric Definitions** — one official definition per metric (ARR, churn, NRR, CAC, LTV, etc.)
- **SaaS Metrics Dashboard** — current values, previous quarter, YoY trends, visual indicators
- **Benchmark Comparison** — your metrics vs. stage targets, with variance and status flags
- **Inconsistency Report** — who said what, when, and how it differs from the canonical definition
- **Composite Health Scores** — Rule of 40, SaaS Quick Ratio, Magic Number with plain-English interpretation
- **Metric Narrative (1-pager)** — investor-ready summary: strengths, challenges, path forward

## How It Works

1. Mine Harmony transcripts for metric mentions (board calls, investor updates, team standups, QBRs)
2. Extract values, definitions, timeframes, and sources
3. Reconcile definitions (flag where the same metric is defined differently)
4. Build the canonical dashboard with ARR, MRR, churn, NRR, CAC, LTV, payback period, margins, burn, runway
5. Benchmark against stage-appropriate targets
6. Calculate composite health scores (Rule of 40, Quick Ratio, Magic Number)
7. Identify trends over last 3 quarters with context from meeting discussions
8. Draft investor narrative highlighting strengths, challenges, and next steps

## Role & Action

- **Role**: Leadership & Finance
- **Action**: Analyze

## Connectors

- Stripe
- HubSpot
- Salesforce
- Google Drive
- Notion

## Edge Cases Handled

- **Pre-revenue**: Track activation, engagement, conversion, projected unit economics
- **Usage-based pricing**: Separate committed (predictable) from metered (variable) revenue
- **PLG with freemium**: Separate free and paid metrics; track conversion funnel
- **Definition changes**: Version the dashboard when calculations shift (e.g., annual → monthly billing)
- **Team resistance**: Show cost of inconsistency with real examples to drive adoption

## Key Metrics Covered

ARR, MRR, growth rate, gross churn, net churn, net revenue retention (NRR), customer acquisition cost (CAC), lifetime value (LTV), LTV:CAC ratio, payback period, gross margin, burn rate, runway, Rule of 40, SaaS Quick Ratio, Magic Number.

## Example Output

See SKILL.md for a detailed example: Beacon (Series A property management SaaS) with reconciled definitions, dashboard, benchmarks, and investor narrative showing how to surface the metric story.
