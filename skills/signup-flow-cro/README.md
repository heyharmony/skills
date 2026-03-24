# Signup Flow CRO Analysis

## Overview
This skill audits signup, registration, trial activation, and account creation flows to diagnose abandonment, reduce friction, and increase conversion rates. It systematically analyzes form fields, flow structure, and user dropoff to deliver actionable redesign recommendations.

## When to Use This Skill
Run this skill when your team asks:
- *"Why are signup completions only 12%? How do we get to 25%?"*
- *"We're seeing high mobile abandonment in our trial signup form—what can we fix?"*
- *"Should our signup be single-step or multi-step?"*
- *"Users drop off after the password field—is our password rule too strict?"*
- *"We're asking for too much info upfront—what's essential vs. nice-to-have?"*
- *"The confirmation email isn't working—people aren't verifying their accounts."*
- *"New users don't know what to do after they sign up. How do we guide them?"*

## What It Does
1. **Maps the current signup flow** — Documents field order, multi-step structure, and conditional logic
2. **Identifies dropoff points** — Pinpoints where users abandon (email field, password validation, form submit, email verification)
3. **Analyzes friction sources** — Cross-references abandonment with user feedback (Slack, support tickets, sales calls)
4. **Recommends redesign** — Proposes field consolidation, flow restructuring (single vs. multi-step), or progressive disclosure
5. **Defines test hypotheses** — Outlines A/B tests and success metrics (target completion rate, mobile parity, verification rate)

## Example Output
The skill returns a structured audit including:
- Field-by-field breakdown (necessity, placement, validation)
- Dropoff percentages at each step
- Friction diagnosis (password rules unclear? form too long on mobile? email verification failing?)
- Redesigned flow (e.g., reduce from 3 steps to 1; move company name to post-confirmation)
- A/B test plan with expected uplift (e.g., +8% completion)

## Connectors
- **HubSpot**: Pull trial signup funnel metrics, completion rates, and segment performance
- **Slack**: Surface team discussions about signup friction and user complaints
- **Notion**: Reference product requirements, wireframes, and signup flow documentation
- **Linear**: Track dev tickets for signup flow changes and A/B test implementations

## Next Steps
After running this skill:
1. Share recommendations with product and design
2. Prioritize quick wins (field removal, password rule simplification)
3. Build and A/B test top 2–3 hypotheses
4. Monitor completion rate, mobile conversion, and email verification metrics
5. Plan next iteration based on test results
