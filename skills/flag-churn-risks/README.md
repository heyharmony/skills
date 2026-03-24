# Flag Churn Risks

Detect early churn signals from customer success calls, QBRs, and internal account reviews — before customers cancel.

## Quick Start

This skill mines conversation data (CS calls, business reviews, support interactions) to identify accounts at risk of churn before they reach the cancel button. It uses conversation sentiment, engagement patterns, and escalation language to score each account's risk level and recommend targeted intervention playbooks.

**Why conversation intelligence matters**: By the time usage metrics show a problem, it's often too late. Churn signals appear first in what customers and your team *say* — frustration, disengagement, competitor exploration, unresolved issues, declining QBR tone. This skill catches those signals early.

## Use Cases

**Scenario 1: Weekly CS Sync**
Your CS team meets Monday morning to review account health. Instead of guessing who's at risk, run this skill on last week's calls and QBRs to surface Critical/High-risk accounts, see the specific churn signals, and assign interventions before customer sentiment deteriorates further.

**Scenario 2: Pre-Renewal Planning**
With Q2 renewals approaching, you want to know which accounts need extra care. Run this skill 90 days before renewal to identify at-risk accounts early, giving your team time to intervene (executive calls, feature unlocks, pricing discussions) before the formal renewal conversation.

**Scenario 3: Escalation Spike Response**
Support tickets spike for a customer segment this month. This skill correlates those escalations with recent call sentiment and internal team discussions to identify which accounts are truly churn-risk vs. just having a bad week.

**Scenario 4: NPS Dip Investigation**
Your NPS dropped 5 points this quarter. Use this skill to segment and analyze calls from accounts that scored low, pinpoint the frustration drivers, and prioritize interventions by ARR and renewal timing.

**Scenario 5: Quarterly Health Check**
Every quarter, audit your Tier 1 and 2 accounts to ensure you're catching churn risk early. This skill creates a repeatable audit trail showing which interventions worked, your overall save rate, and which accounts need deeper attention.

## How It Works

1. **Signal Detection**: The skill searches customer conversations (calls, QBRs, support tickets, internal notes) for churn language markers:
   - Frustration: "this isn't working," "we're not seeing ROI"
   - Disengagement: "considering alternatives," "evaluating other tools"
   - Escalation: Unresolved issues, ghosting, missing scheduled calls
   - Competitor mentions: Direct competitor comparisons
   - Tonal decline: QBR conversations becoming shorter, cooler, less engaged

2. **Multi-Dimensional Scoring**: Each signal is scored across sentiment (negative/neutral/positive), frequency (one-off vs. pattern), recency (7/30/90 days), and severity (mild frustration vs. active evaluation). These combine into an account-level risk score.

3. **Risk Tiers**: Accounts are classified as Critical, High, Medium, or Low risk. Critical accounts get immediate executive intervention; High accounts get dedicated CS focus; Medium accounts get structured QBRs; Low accounts stay in standard cadence.

4. **Intervention Mapping**: Each risk level gets a tailored playbook (executive calls, feature unlocks, pricing reviews, training, roadmap previews). The skill recommends which action to take first and what success looks like.

5. **Save Offer Design**: For critical accounts, the skill can design one-time save offers (pause, downgrade, discount, feature unlock, dedicated support) based on the root cause. Key principle: one offer per attempt, respect the customer's choice.

6. **Outcome Tracking**: The skill creates a tracking template to measure which interventions actually work — save rate, time-to-resolution, which playbooks are most effective.

## Input Data

The skill works best with:
- **Call recordings or transcripts**: CS calls, QBRs, customer meetings (last 30-90 days)
- **Internal discussion context**: CS team Slack channels, account notes, manager check-ins
- **Account metadata**: ARR, renewal dates, contract terms, historical engagement
- **Support/ticket history**: Open issues, response times, escalation frequency

Minimal data works too — even email-only conversations, support ticket language, and Slack exchanges can surface churn signals.

## Output

You'll get:
- **At-Risk Account Dashboard**: Sortable table of Critical/High-risk accounts with risk scores, key signals, recommended actions, owners, and deadlines
- **Signal Evidence**: Direct quotes from conversations with timestamps and context
- **Intervention Playbooks**: Customized action steps, talking points, and success criteria for each account
- **Save Offer Matrix**: If needed, specific offer terms tailored to root cause
- **Outcome Tracking Template**: Measure intervention effectiveness and build institutional knowledge

## Example Output

Three Mosaic (event management platform) accounts at different risk levels:

| Account | ARR | Risk | Primary Signal | Recommended Action | Owner | Deadline |
|---------|-----|------|--------|-------------|-------|----------|
| TechConf Productions | $42K | Critical | "Looking at other platforms" | Executive sponsor call + feature unlock + automation training | Sarah Chen | Mar 28 |
| Startup Summit Inc. | $18K | High | Unresolved support tickets + feature frustration | Dedicated success manager + UI training + champion rebuild | Marcus Rodriguez | Apr 5 |
| Event Logistics Corp | $156K | Medium | Organizational M&A activity | Executive business review + contract flexibility discussion | Priya Patel | May 15 |

For TechConf, the intervention includes a 90-day premium tier upgrade (at no cost) plus a 4-week automation training sprint, offered as a partnership reset before renewal negotiation.

## Edge Cases & Nuance

**Email-only customers**: Mine support ticket tone and email responsiveness. Missing calls is itself a churn signal.

**Frustrated but engaged customers**: Distinguish feature frustration ("we wish this existed") from churn frustration ("this doesn't work for us"). The former is an upgrade opportunity; the latter is churn risk.

**Mixed signals in large accounts**: Multiple stakeholders may have different sentiment. Score by role (executive vs. operator) and identify champion strength.

**Seasonal patterns**: Budget cycles and event seasonality can create false signals. Context-adjust risk scoring for your industry.

**New customers**: Early onboarding stalls and activation delays are higher-correlation churn signals than for mature accounts.

## Best Practices

1. **Act fast on Critical signals**: Days 1-7 matter. If a customer says "we're looking at alternatives," your response in the first week predicts save rate. Schedule executive call within 3 days.

2. **One offer per attempt**: Don't counter-offer repeatedly. If a save offer is declined, respect that choice and plan a clean exit. Pushing hard damages your brand.

3. **Save rate baseline**: Industry benchmarks suggest 10-15% save rates (of truly at-risk accounts that decline). Track yours; 20%+ means you have strong champions or early detection. Below 10% suggests you're either catching them too late or your interventions don't match root cause.

4. **Intervention speed matters**: Research shows accounts where intervention happens within 5-10 days of signal detection have 25-35% better recovery rates. Build process to alert CS team within 24 hours.

5. **Respect customer choice**: If a customer is truly ready to leave despite intervention, a smooth, professional exit preserves brand reputation and future re-sales. Sometimes churn is the right outcome.

6. **Build a save playbook over time**: Track which interventions work best for which segments (company size, product tier, industry, tenure). Update playbooks quarterly.

## Integration

Works with:
- **Slack**: Direct flagging of at-risk accounts to #cs-alerts channel
- **HubSpot/Salesforce**: Pull account data, call transcripts, update account health scores
- **Intercom/Zendesk**: Correlate support ticket escalations with conversation sentiment
- **Calendly/Google Calendar**: Identify ghosted calls (missed scheduled QBRs)
- **Outreach/SalesLoft**: Trigger automated cadences for at-risk accounts

## Support & Questions

For implementation help or methodology questions:
- What conversation data do we need to start?
- How do we handle multi-stakeholder accounts?
- What's our target save rate?
- Which intervention playbooks have worked in our industry?

---

**Last Updated**: March 2026 | **Version**: 1.0
