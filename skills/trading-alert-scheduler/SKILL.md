---
name: "Schedule Trade Alerts"
description: "Schedule trading alerts and rebalancing reminders based on portfolio targets, market signals, and meeting-driven decisions. Create alert thresholds, notification schedules, and trigger conditions from deal reviews and investment discussions. Trigger on: alert scheduler, trading reminder, portfolio rebalance, market watch, price alert, investment alert."
dependencies: []
connectors:
  - name: "Slack"
    reason: "Send scheduled trading alerts and portfolio rebalancing reminders to investors and portfolio managers throughout the day"
  - name: "Google Calendar"
    reason: "Align alert scheduling with market hours, trading deadlines, and portfolio review meetings"
  - name: "Gmail"
    reason: "Surface past investment theses and position emails to extract price targets and rebalancing logic"
  - name: "Notion"
    reason: "Store investment thesis, target prices, and rebalancing rules so alerts pull from documented decision logic"
---

## Purpose

Schedule trading alerts and portfolio rebalancing reminders based on investment theses, market signals, and decisions discussed in portfolio review meetings or investment calls. When Harmony conversation data exists — board discussions, investment committee meetings, or one-on-one portfolio reviews — extract target prices, trigger conditions, and rebalancing logic directly from what was decided. Investors and portfolio managers use this to stay on top of their positions without manual monitoring, ensuring they act on decisions made in meetings rather than letting opportunities slip.

## When to Use

- Creating price-level alerts after an investment committee decides to take profits or add to positions
- Scheduling quarterly rebalancing reminders aligned to your portfolio strategy
- Setting up market-condition alerts during volatile periods when you need to monitor specific holdings
- Converting investment thesis discussions into automated monitoring — turning "watch this at $X" into a real alert
- Building alert workflows for your entire portfolio after a comprehensive review meeting

## Instructions

### 1. Gather investment context

Ask what the user needs:
- **What positions need monitoring?** Ticker, company name, investment type (equity, warrant, debt)
- **What's the investment thesis?** Why do you hold this position and what's your exit plan
- **What are the target prices?** Price at which you'd add, hold, or exit
- **What market conditions matter?** Market volatility, peer company movements, fundamental changes
- **What's the decision timeline?** Quarterly review, board meeting cycle, investment committee schedule

If Harmony conversation data exists from investment discussions, pull:
- Explicit price targets or valuation ranges mentioned
- Conditions that would trigger an action (add more, take profits, exit entirely)
- Timeline expectations for the position
- Key metrics the team is watching
- Risk thresholds that matter for this investment

### 2. Define alert conditions

For each position, establish:
- **Price targets for action:** Prices at which you'd buy more, hold, or sell
- **Metric watches:** Key business metrics that trigger reassessment (revenue growth, burn rate, customer acquisition cost)
- **Market signals:** Competitor news, market-wide movements, funding announcements that affect thesis
- **Time-based triggers:** Quarterly check-in dates, milestone dates (product launch, funding deadline)

### 3. Set alert frequency and channels

Determine:
- **Alert recipients:** Who needs to know (portfolio manager, investment committee, specific partner)
- **Frequency:** Daily during volatile periods, weekly during normal markets, monthly for long-term watches
- **Notification method:** Slack for urgent alerts, email digest for weekly summaries, calendar for scheduled reviews
- **Market hours preferences:** Trading hours only, or 24/5 if you trade globally

### 4. Build the alert schedule

Create:
- Immediate alerts for price movements triggering action
- Daily market recaps summarizing position movements
- Weekly portfolio check-in reminders at consistent time
- Quarterly comprehensive portfolio review at scheduled time
- Milestone alerts on announced dates

### 5. Document the decision logic

Capture for each alert:
- What thesis or decision drives this alert
- How the alert threshold was chosen
- What action triggers this alert should prompt
- Who decides what to do when alert fires

## Output Format

# Trading Alert Schedule — [Portfolio Name]
_Prepared [date] · Review cycle: [frequency]_

## Portfolio Overview
- **Total positions:** [count]
- **Portfolio value:** $[amount]
- **Rebalance frequency:** [quarterly / monthly / as-needed]
- **Investment committee meetings:** [schedule, e.g., quarterly on Tuesdays]

## Position Alerts

### Position 1: [Company/Ticker]
- **Current price/valuation:** $[price] / [valuation]
- **Investment thesis:** [brief summary]
- **Position size:** [# shares or $amount]
- **Time horizon:** [years / exit trigger]

**Alert Rules:**
| Trigger Condition | Price/Metric | Action | Recipient | Frequency |
|-------------------|-------------|--------|-----------|-----------|
| Add more | $[buy price] or below | Notify to consider adding | [person] | Once |
| Hold zone | $[lower]–$[upper] | No action, hold | — | Monitoring |
| Take profits | $[sell price] or above | Notify to consider taking profits | [person] | Once |
| Reassess thesis | [business metric] reaches [value] | Full portfolio review | [committee] | Ad-hoc |
| Risk alert | [metric] deteriorates to [level] | Urgent review | [person] | Immediate |

**Data Sources:** Price from [exchange], metrics from [source], news from [source]
**Last reviewed:** [date]

### Position 2: [Company/Ticker]
- **Current price/valuation:** $[price]
- **Investment thesis:** [summary]
- **Position size:** [amount]
- **Time horizon:** [years]

**Alert Rules:**
| Trigger | Threshold | Action | Recipient | Frequency |
|---------|-----------|--------|-----------|-----------|
| [condition] | [metric] | [action] | [person] | [frequency] |

**Data sources:** [sources]
**Last reviewed:** [date]

[Continue for each position...]

## Scheduled Notifications

### Daily Alerts (Market Hours)
- 9:30 AM ET: Market open summary — positions up/down >5%, significant news
- 4:15 PM ET: End-of-day recap — position changes, volumes, alerts fired
- Recipients: [Portfolio Manager], [Investment Committee lead]
- Channel: Slack #[channel], Email digest

### Weekly Alerts
- Every Monday 9:00 AM: Weekly portfolio summary — YTD performance, position status, action items
- Recipients: [Full investment committee]
- Channel: Slack + Email

### Monthly Alerts
- First Monday of month 10:00 AM: Monthly rebalancing check — portfolio vs. target allocations, drift analysis
- Recipients: [Portfolio Manager], [CFO]
- Channel: Calendar event + Slack reminder

### Quarterly Alerts
- [Date] 2:00 PM: Quarterly comprehensive review meeting
- Recipients: [Full investment committee]
- Prepare: Full position review, thesis reassessment, market environment summary
- Channel: Calendar invite + pre-meeting briefing email

## Alert Escalation Rules

| Alert Level | Condition | Timing | Recipients | Action |
|------------|-----------|--------|-----------|--------|
| **Green** | Position performing per thesis, no changes needed | Daily summary | Portfolio Manager | Continue monitoring |
| **Yellow** | Position approaching decision threshold or fundamentals shifting | Within 4 hours | Portfolio Manager + Lead | Discuss action |
| **Red** | Thesis broken or position at exit trigger | Immediate | Full committee | Call emergency review |

## Now What?

1. Set up Slack alerts for daily position updates and price threshold notifications
2. Create Google Calendar recurring events for scheduled portfolio reviews
3. Configure price feeds to monitor target prices and auto-trigger notifications
4. Document investment theses in Notion as the source of truth for why you're watching each position
5. Schedule quarterly comprehensive review meeting with full investment committee

---
_Want me to set up automated Slack alerts for these positions, or create a portfolio dashboard template?_

## Example

**User:** "Set up alerts for my portfolio. I've got three positions from our last investment committee meeting. We decided to exit TechX if it hits $45, add to BuildCo if it drops below $22, and watch the market for FutureApp's Series B announcement."

**Output:**

# Trading Alert Schedule — Venture Portfolio
_Prepared 2026-03-22 · Review cycle: quarterly + real-time alerts_

## Portfolio Overview
- **Total positions:** 18
- **Portfolio value:** $2.4M
- **Rebalance frequency:** Quarterly (every Jan, Apr, Jul, Oct)
- **Investment committee meetings:** Every Tuesday, 2:00 PM ET

## Position Alerts

### Position 1: TechX (Private Equity Position)
- **Current valuation:** $52 per share
- **Investment thesis:** Infrastructure play in AI training market. Strong team, first-mover advantage in region. Exit plan: strategic acquisition or secondary sale.
- **Position size:** 10,000 shares (~$520K at current valuation)
- **Time horizon:** 2–3 years, or earlier if acquisition offer comes

**Alert Rules:**
| Trigger Condition | Price/Metric | Action | Recipient | Frequency |
|-------------------|-------------|--------|-----------|-----------|
| Exit signal | Hits $45 or below | Notify to consider selling position | Sarah (PM) | Once when triggered |
| Hold strong | $45–$60 | Hold, no action | — | Monitoring |
| Evaluate upside | Hits $70 or above | Discuss secondary sale or hold for acquisition | Sarah + Investment Committee | Once when triggered |
| Fundamental risk | Quarterly runway drops below 18 months | Reassess thesis | Full committee | Quarterly check |
| Red flag | Key executive departure | Emergency committee call | Sarah | Immediate |

**Data sources:** PitchBook for valuations, news alerts on company website and LinkedIn, monthly financial updates from company
**Last reviewed:** 2026-03-15 (post-investment committee meeting)

### Position 2: BuildCo (Growth Equity)
- **Current valuation:** $28 per share
- **Investment thesis:** B2B SaaS platform for manufacturing. Strong unit economics, land-and-expand motion works. We're in Series B, next round in 12 months.
- **Position size:** 8,500 shares (~$238K)
- **Time horizon:** 4–5 years, Series D exit expected

**Alert Rules:**
| Trigger | Threshold | Action | Recipient | Frequency |
|---------|-----------|--------|-----------|-----------|
| Buy signal | $22 or below | Notify to consider adding 5K shares (capital available) | Sarah | Once |
| Hold zone | $22–$32 | Standard monitoring | — | Daily |
| Take profits | $40 or above | Discuss secondary sale opportunity | Sarah + Committee | Once |
| Dilution watch | Series C dilution >35% | Assess impact on ownership & returns | Sarah | Upon announcement |
| Growth check | ARR growth <25% YoY in latest quarterly | Review thesis — growth may be slowing | Committee | Quarterly |

**Data sources:** Carta for cap table updates, monthly investor reports, app usage metrics from company
**Last reviewed:** 2026-03-20

### Position 3: FutureApp (Angel Investment)
- **Current stage:** Series A fundraising (announcement expected by end of Q2)
- **Investment thesis:** Vertical SaaS in healthcare. Founder has FDA experience. Large TAM, defensible IP. Waiting for Series B to double down.
- **Position size:** $50K investment from seed round
- **Time horizon:** 5+ years

**Alert Rules:**
| Trigger | Threshold | Action | Recipient | Frequency |
|---------|-----------|--------|-----------|-----------|
| Series A announced | PR or email from founders | Mark as "watch for Series B" | Sarah + Angel group | Once |
| Funding timeline | Founder signals 6-month runway | Board will likely start Series B discussions | Sarah | Upon mention |
| Milestone hit | FDA approval for first product | Thesis derisk, consider this a strong hold | Sarah | Upon announcement |
| Risk signal | Key hire leaves or pivot announced | Reassess investment thesis | Sarah | Immediate |

**Data sources:** Founder emails, Crunchbase alerts, industry news about FDA approvals
**Last reviewed:** 2026-03-22

## Scheduled Notifications

### Daily Alerts (During Trading Hours)
- 9:30 AM ET: Open summary: TechX, BuildCo, and other liquid positions — price changes >5%, any alerts firing
- 4:15 PM ET: Close summary: end-of-day moves, whether any positions hit alert thresholds
- Recipients: Sarah (Portfolio Manager)
- Channel: Slack #portfolio-alerts

### Weekly Alerts
- Every Monday 9:00 AM: Weekly portfolio summary showing YTD gains/losses, which positions are outperforming vs. thesis, upcoming quarterly rebalance
- Recipients: Sarah + Full investment committee
- Channel: Slack + email digest

### Quarterly Alerts
- First Tuesday of Apr, Jul, Oct, Jan: 2:00 PM ET — Quarterly comprehensive review
- Agenda: Walk through each position vs. thesis, discuss BuildCo at $22 (are we adding?), check TechX for exit signal (still at $52), review FutureApp Series A timeline
- Recipients: Full investment committee (5 members)
- Pre-meeting: Briefing email with performance summaries and recommendation on any thesis reassessments

## Alert Escalation Rules

| Alert Level | Condition | Timing | Recipients | Action |
|------------|-----------|--------|-----------|--------|
| **Green** | BuildCo between $22–$32, TechX above $45, FutureApp fundraising on track | Daily monitoring | Sarah | Continue holds |
| **Yellow** | TechX drops to $46 (approaching exit threshold), BuildCo hits $23 (approaching buy signal) | Within 2 hours | Sarah + Committee lead | Discuss whether to act |
| **Red** | TechX drops below $45 (exit threshold breached), BuildCo key customer churns (thesis risk), FutureApp founder departs | Immediate, same-day | Full committee | Emergency call to decide action |

## Next Steps
1. Set up Slack alerts for TechX <$45 and BuildCo <$22 — these trigger portfolio actions
2. Create recurring Google Calendar event: "Quarterly Portfolio Review" first Tuesday each quarter at 2:00 PM
3. Add BuildCo and TechX to price monitoring feed (Carta, PitchBook, or manual daily check)
4. Send email to investment committee: "Portfolio alerts are live. You'll see daily summaries at close, quarterly full review next Tuesday."
5. If TechX drops below $50 before next committee meeting, flag to Sarah for interim discussion

---
_Want me to set up the Slack automation for price alerts, or create a portfolio dashboard showing current position status vs. targets?_

## Edge Cases

- **Position approaching alert threshold:** Flag at 90% of threshold (e.g., TechX at $46 when exit is $45) so you can discuss action before it actually hits
- **Multiple alert conditions for one position:** Prioritize the most material (exit threshold) over the less material (rebalance check). Fire highest-priority alert first.
- **Market volatility causing daily swings without thesis change:** Don't alert on normal volatility. Only alert on moves that reflect fundamental change or hit decision thresholds.
- **Founder or key metric data delayed:** Flag the alert as pending data verification. Don't trigger action alerts on incomplete information.
- **Investment thesis changes between reviews:** Update alert rules immediately and notify committee of the change. Document the old thesis and why it changed in Notion.
- **Emergency situation (key executive leaves, major loss):** Escalate to red alert immediately, call emergency committee meeting, do not wait for scheduled review.
