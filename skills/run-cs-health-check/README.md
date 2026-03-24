# CS Health Check Skill

## Overview

Run CS Health Check synthesizes account health from conversation patterns in Harmony. Instead of relying on static CRM scores that lag reality, this skill analyzes the arc of customer conversations over 90 days — engagement frequency, sentiment trends, feature adoption depth, stakeholder involvement, and expansion signals — to build a real-time health picture.

## When to Use This Skill

- **Pre-QBR**: Understand sentiment, adoption, and stakeholder dynamics before quarterly business reviews
- **Monthly Portfolio Review**: Track health trends across your entire book to surface at-risk accounts
- **Renewal Prep**: Assess relationship strength and expansion potential 60 days before renewal
- **After Escalations**: Determine if support issues reflect isolated frustration or broader disengagement
- **Expansion Evaluation**: Gauge adoption depth and stakeholder buy-in before pursuing upsells
- **Account Transitions**: Onboard new CSMs with instant context on account health and risk
- **Executive Alignment**: Synthesize sentiment and outcomes for leadership visibility into portfolio health

## What You'll Get

The skill produces five key outputs:

1. **Account Health Dashboard** — Composite Green/Yellow/Red score with breakdown across five dimensions (Engagement, Sentiment, Adoption, Relationship, Expansion) and trend arrows
2. **Conversation Timeline** — Annotated chronology of key moments (sentiment shifts, adoption triggers, escalations, expansion signals) with supporting quotes
3. **Stakeholder Map** — Names, titles, departments, engagement levels, and champion/sponsor identification
4. **Risk/Opportunity Register** — Specific risks and expansion opportunities with context
5. **Action Plan** — Prioritized next steps with owner, due date, and success metric

For QBRs within 14 days, also includes an **Agenda Brief** with discussion recommendations and executive talking points.

## How It Works

The skill analyzes conversations from multiple sources:
- Harmony call recordings and transcripts
- HubSpot activity logs and deal notes
- Slack channels and direct messages
- Zendesk support tickets
- Intercom support threads
- Notion meeting notes or shared docs

It scores health across five dimensions:

- **Engagement** — Call frequency trend, no-show rate, stakeholder breadth
- **Sentiment** — Language patterns (enthusiastic → neutral → frustrated), complaint/praise ratio, escalation language
- **Adoption** — Features discussed, training requests, workflow integration depth
- **Relationship** — Champion advocacy strength, exec sponsor engagement, multi-threading depth
- **Expansion** — New use cases, team growth, budget discussions, competitive signals, contraction risk

The composite score (Green/Yellow/Red) reflects account maturity and risk. Yellow accounts warrant investigation and intervention; Red accounts need escalation and save strategy.

## Connectors

This skill integrates with:
- **HubSpot** — Activity logs, deal pipeline, contact history
- **Salesforce** — Account records, activity history, opportunity pipeline
- **Slack** — Channel conversations, direct messages, customer interactions
- **Intercom** — Support conversations, customer insights
- **Zendesk** — Support tickets, resolution history, customer sentiment
- **Notion** — Meeting notes, QBR prep docs, account briefs

## Key Concepts

**Real-Time vs. Lagging Indicators**
CRM health scores update quarterly or less frequently. Conversations reveal account health in real time — a champion's language shift, a stakeholder no-show, an escalation, a budget discussion. This skill mines those signals.

**Conversation Arc Matters**
A single positive call doesn't mean the account is healthy; a single complaint doesn't mean it's failing. The trajectory over 90 days tells the story: improving engagement + rising sentiment + new stakeholders = thriving. Declining calls + cooling tone + champion exit = deteriorating.

**Nuance in Composite Scores**
A Yellow account might have strong product adoption but falling engagement. That nuance shapes your action: not a product problem, but a relationship/value communication problem. The dashboard exposes it.

**Multi-Threading as Insurance**
Single-threaded accounts (one contact) are fragile, even if the relationship is strong. Exec sponsors who delegate entirely are red flags. Healthy accounts have diverse, engaged stakeholders across multiple levels.

## Example Scenario

Northern Grid Utilities is a $185K ARR energy analytics customer at 14-month tenure with renewal in 75 days. Over 90 days: calls declined from 3/month to 1/month, the primary champion was promoted, support escalations rose, but new expansion opportunity emerged (2 new substations). The health check surfaces this as Yellow: strong adoption and expansion potential, but declining engagement and relationship fragility require immediate intervention. Action: executive alignment call, support issue resolution, and expansion proposal by mid-April.

## Role & Action

- **Role**: Sales & Revenue Ops
- **Action**: Analyze
- **Frequency**: Monthly portfolio review, pre-QBR, renewal windows, after escalations

## Questions?

See SKILL.md for detailed instructions, edge cases, and methodology.
