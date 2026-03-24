# Audit Revenue Pipeline

## Overview

Audit Revenue Pipeline is a Harmony marketplace skill for Sales & Revenue teams. It cross-references pipeline forecasts from sales meetings with actual customer conversation signals to expose forecast risk, stuck deals, and conversion gaps.

Most pipeline reviews rely on rep self-reporting. A rep might say "This deal is 80% likely to close" while the customer's actual call transcript reveals they're still evaluating three options. This skill bridges that gap by analyzing the real customer signals in call transcripts alongside pipeline data, surfacing where internal confidence diverges from external reality.

## Key Features

- **Confidence Gap Analysis**: Compare rep-stated deal probabilities against what customer conversations actually reveal
- **Stuck Deal Detection**: Identify deals stalled in a stage for too long with no forward momentum in recent calls
- **True Conversion Rates**: Calculate actual (observed) conversion rates per stage, not team-reported rates
- **Stage Velocity Analysis**: Understand which deals move fast (and why) versus slow, to predict close timelines
- **Pipeline Coverage Assessment**: Measure pipeline adequacy against revenue targets and flag shortfalls
- **Actionable Recommendations**: Receive prioritized actions to advance, downgrade, disqualify deals and source gaps

## When to Use

- Preparing for weekly pipeline reviews and sales standups
- Building monthly or quarterly forecasts for board presentations
- Drilling into specific at-risk deals or accounts
- Diagnosing funnel conversion leakage and stage velocity issues
- Onboarding new sales leaders to assess pipeline health and quality

## How It Works

1. **Extract** pipeline claims (deals, stages, amounts, rep confidence) from sales meetings
2. **Cross-reference** with customer-facing call transcripts (buying signals, objections, timelines)
3. **Score** each deal for confidence gaps and flag mismatches
4. **Analyze** stage velocity and conversion rates based on actual deal progression
5. **Assess** pipeline coverage against revenue targets and identify gaps
6. **Report** findings with clear recommendations (advance/downgrade/disqualify/source)

## Outputs

- Pipeline Health Summary (metrics overview)
- Deal-by-Deal Confidence Gap Table
- Stuck Deal Alert List with reasons
- Stage Conversion Funnel with actual rates
- Velocity Analysis (days in stage, trends)
- Coverage Ratio Dashboard
- Prioritized Recommendations

## Data Sources

Requires access to:
- Sales meeting notes or internal pipeline/forecast records
- Customer-facing call transcripts (from Gong, Slack recordings, or manual notes)
- CRM pipeline data (HubSpot, Salesforce, Pipedrive)

## Connectors

- **HubSpot** — pipeline data, deal records, activities
- **Salesforce** — opportunities, stages, opportunity history
- **Pipedrive** — deals, stages, deal flow
- **Slack** — meeting notes, call links, quick context
- **Gong** — call transcripts, call transcription, buying signals

## Use Cases

### Weekly Pipeline Review
Audit the current pipeline before Friday sales standup to catch forecast risks and ensure the team has accurate visibility into deal status.

### Monthly Forecast
Build a board-ready forecast with confidence tiers grounded in conversation evidence, not rep opinion. Use true conversion rates and velocity insights.

### Deal Inspection
Drill into a single $500K+ deal to understand the real status, timeline, and risk relative to what the rep is saying.

### Funnel Diagnosis
Identify where deals are getting stuck (e.g., 65% convert discovery→demo, but only 38% convert negotiation→close) and invest in targeted improvements.

## Edge Cases

- **No recorded calls**: Audits based on internal signals (emails, timestamps, notes); flag limited visibility
- **PLG models**: Supplement call data with product usage signals and success metrics
- **Multi-threaded deals**: Score by stakeholder and surface conflicting signals
- **EOQ pipeline stuffing**: Flag stage advances without recent call activity as likely to slip
- **Channel/partner pipeline**: Use partner feedback calls and success check-ins as proxies

## Role & Action

- **Role**: Sales & Revenue
- **Action**: Analyze
