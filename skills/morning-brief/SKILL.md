---
name: "Brief My Sales Day"
description: "Start your day with a sales briefing — top priorities, hot deals, overdue tasks, and important context from yesterday. Pull from Harmony meetings, CRM updates, and task status. Trigger on: morning brief, daily briefing, start my day, what should I focus on, sales update, priority list."
dependencies: []
connectors:
  - name: "HubSpot"
    reason: "Surface deals that changed stage yesterday, upcoming close dates, and key contact updates"
  - name: "Salesforce"
    reason: "Pull opportunity updates, account activity, and recent stage changes from yesterday's activity"
  - name: "Google Calendar"
    reason: "Show today's meetings so you can prep with account context before calls"
  - name: "Gmail"
    reason: "Surface recent emails from top accounts and unread priority messages from prospects/customers"
  - name: "Slack"
    reason: "Deliver briefing to sales team Slack channel each morning for async visibility"
---

## Purpose

Give a sales rep or leader a focused, actionable briefing each morning: what changed yesterday (deals, tasks, emails), who they're meeting today, and where to focus first. Pulls from Harmony conversation data when available (yesterday's sales calls, customer interactions), CRM activity, and task status to create a personalized daily agenda. Works without Harmony data too — just CRM updates and calendar — but is richer with it.

## When to Use

- Every morning as an AE or SDR — start the day knowing your top 3 priorities
- Sales leadership — get a 5-minute daily pulse on team activity and deal movement
- After a busy day of calls — recap what happened and what's due today
- Before a critical week — daily briefing tracks momentum and flags risks
- For distributed teams — Slack briefing keeps everyone aligned without a sync meeting
- Onboarding new reps — morning brief provides context for the day's calls and follows

## Instructions

### 1. Gather context

Ask what the user wants to focus on:
- **Whose briefing?** (Personal AE briefing, team leader's pulse, or entire team broadcast?)
- **Which accounts/deals matter most?** (Top X by pipeline size, accounts closing this month, assigned territory?)
- **What changed yesterday?** (Check Harmony meetings, CRM activity, calendar invites, unread emails)
- **What's due today?** (Calendar, task lists, close dates, follow-ups)

If Harmony data exists, pull:
- Yesterday's sales calls (recordings, transcripts, or meeting notes)
- Key conversations: who did you talk to, what did they say?
- Action items flagged during calls
- Any risks or blockers mentioned

### 2. Extract last 24 hours of activity

Pull recent changes from available sources:

**From CRM (HubSpot/Salesforce):**
- Deals that moved stage (opportunity closed, demo scheduled, proposal sent)
- Deals with approaching close dates (due within 7 days)
- New contacts added to accounts
- Activity flagged by sales team (calls, emails, tasks)

**From Harmony:**
- Sales calls from yesterday (who, what accounts, key topics)
- Customer interactions showing momentum or concerns
- Action items or follow-ups committed during meetings

**From Email/Calendar:**
- Unread messages from key prospects or customers
- Today's scheduled calls and prep needs

### 3. Identify and rank priorities

Create a ranked priority list:

**Immediate (today):**
- Calls/meetings scheduled today — what context do they need?
- Deals closing this week — what's the blocker?
- Overdue follow-ups or tasks
- VIP or high-value accounts with pending next steps

**This week:**
- Deals closing in 7 days
- Proposals out with decision dates
- Demos that need scheduling

**Watch list:**
- Stalled opportunities (>10 days no activity)
- Risk deals (conversation flagged concerns)
- New opportunities (pipeline momentum)

### 4. Map today's activities

Extract:
- **Scheduled calls:** Who, when, what account, prep notes?
- **Email follow-ups due:** From yesterday's calls or hot prospects?
- **Prep work:** Any proposals to review, slides to update, research needed?
- **Personal tasks:** Overdue, due today, or critical this week?

### 5. Format and deliver

Create a scannable briefing that takes <5 minutes to read.

## Output Format

# Sales Morning Brief
_[Date] | [Rep/Team Name]_

## Today at a Glance
- **Top priority:** [1-line description of the single most important thing today]
- **Deals closing this week:** [#]
- **Calls scheduled:** [#]
- **Overdue follow-ups:** [#]

## Scheduled Today

| Time | Prospect/Account | Contact | Prep Notes |
|------|------------------|---------|-----------|
| [HH:MM] | [Account] | [Name, Title] | [1-2 key questions or context] |

## Hot Deals (Closing in 7 Days)

| Deal | Company | Stage | Close Date | Status | Your Action |
|------|---------|-------|-----------|--------|------------|
| [Deal name] | [Company] | [Stage] | [Date] | [On track / At risk / Blocked] | [Next step] |

## Yesterday's Calls Recap

_From your meetings or Harmony data:_
- **[Account Name]** — [Contact name] said [1 key point]. Next step: [action]
- **[Account Name]** — [Contact name] mentioned [key concern or signal]. Follow up with: [specific action]

## Priority Tasks Due Today

| Task | Account | Due | Owner | Notes |
|------|---------|-----|-------|-------|
| [Task] | [Account] | Today | [You/Team] | [Context] |

## Emails That Need Replies

| From | Subject | Last Received | Priority |
|------|---------|---------------|----------|
| [Name, Company] | [Subject] | [Time ago] | High / Medium |

## Week Ahead Preview

- **Monday-Wed:** [What's happening — meetings, closings, prep work]
- **Wed-Fri:** [Continuation of priorities]
- **Closing this week:** [Deal count and aggregate value]
- **At risk:** [Count and names if relevant]

## This Week's Targets

| Metric | Current | Target | Status |
|--------|---------|--------|--------|
| New meetings scheduled | [#] | [#] | On track / Behind |
| Proposals sent | [#] | [#] | On track / Behind |
| Calls completed | [#] | [#] | On track / Behind |
| Deals closed | [#] | [#] | On track / Behind |

## Red Flags & Opportunities

- **Deal risk:** [Account/Deal] — [reason, e.g., "no movement in 10 days"]
- **Good news:** [Account/Deal] — [positive signal, e.g., "contact replied to proposal, wants demo Friday"]
- **Follow-up needed:** [Account] — [action required today]

---

## Example

**User:** "Give me a morning brief for Sarah (top AE). She's got 6 deals in progress, 3 closing this month. Check yesterday's calls in Harmony and her CRM."

**Output:**

# Sales Morning Brief
_2026-03-23 | Sarah Johnson, Account Executive_

## Today at a Glance
- **Top priority:** Call Atlas SaaS before 10am — they're ready to sign, just need final sign-off from CEO
- **Deals closing this week:** 2
- **Calls scheduled:** 3
- **Overdue follow-ups:** 1 (Forge Analytics proposal review)

## Scheduled Today

| Time | Prospect/Account | Contact | Prep Notes |
|------|------------------|---------|-----------|
| 9:00am | Atlas SaaS | Michael Chen, VP Ops | READY TO CLOSE — CEO approval pending. Have contract ready. Ask about implementation timeline. |
| 2:00pm | Compass Financial | Sarah Torres, CFO | Discovery call. They're evaluating three vendors. Prepare comparison deck. Focus on security & compliance. |
| 4:00pm | Meridian Corp | James Baker, Director IT | Demo follow-up. They have 15 users. Ask about their approval process for next steps. |

## Hot Deals (Closing in 7 Days)

| Deal | Company | Stage | Close Date | Status | Your Action |
|------|---------|-------|-----------|--------|------------|
| Atlas SaaS Implementation | Atlas SaaS | Contract Review | 2026-03-25 | At risk (waiting for CEO sign-off) | Call Michael @ 9am to confirm timing |
| Pinnacle Services Annual | Pinnacle Services | Proposal | 2026-03-28 | On track | Follow up with pricing question answer by EOD |

## Yesterday's Calls Recap

_From Harmony: Your sales calls on 2026-03-22_

- **Atlas SaaS** — Michael Chen confirmed they want to move forward. CEO needs to sign contract. He'll have it by EOD today. "We're excited to go live by Q2. What's your fastest onboarding timeline?" → Action: Call before 10am to confirm CEO approval and discuss implementation.
- **Compass Financial** — Sarah Torres is evaluating three vendors (you, Competitor A, Competitor B). She values "easy integration with existing finance tools." → Action: In today's 2pm discovery call, focus on your integrations story and ask about their current stack.
- **Forge Analytics** — Sent proposal on 2026-03-20. Chris Parker (VP Sales) hasn't reviewed yet. Out until Wednesday. → Action: Email reminder + mention you'll check in Thursday.

## Priority Tasks Due Today

| Task | Account | Due | Owner | Notes |
|------|---------|-----|-------|-------|
| Send contract to Michael | Atlas SaaS | EOD Today | You | Prep before 9am call |
| Prepare comparison deck | Compass Financial | Before 2pm | You | Highlight integration capabilities |
| Follow up on proposal | Forge Analytics | EOD | You | Email reminder, call Thursday |
| Demo prep | Meridian Corp | Before 4pm | You | Research their current 15-user setup for context |

## Emails That Need Replies

| From | Subject | Last Received | Priority |
|------|---------|---------------|----------|
| Michael Chen (Atlas SaaS) | Re: Implementation timeline | 2026-03-22, 5pm | High |
| Sarah Torres (Compass Financial) | Quick question on pricing models | 2026-03-22, 3pm | High |
| Chris Parker (Forge Analytics) | Out until Wednesday | 2026-03-22, 9am | Medium |

## Week Ahead Preview

- **Today (Mon):** Close Atlas SaaS (contract), discovery with Compass, demo follow-up with Meridian
- **Tue:** Compass wants to see ROI model — prep and send
- **Wed:** Forge Analytics re-engagement call with Chris (he's back)
- **Thu:** Expect decision from Compass on vendor choice
- **Fri:** Meridian follow-up; close out week with 2 deals done

**Closing this week:** 2 deals (Atlas SaaS + Pinnacle Services) = $185K
**At risk:** Compass Financial (competing against 2 others) — high probability but not guaranteed

## This Week's Targets

| Metric | Current | Target | Status |
|--------|---------|--------|--------|
| New meetings scheduled | 1 | 2 | Behind (schedule one more) |
| Proposals sent | 0 | 1 | Behind (could send Compass ROI model) |
| Calls completed | 3 | 5 | On track (need 2 more) |
| Deals closed | 0 | 2 | On track (Atlas + Pinnacle expected) |

## Red Flags & Opportunities

- **Deal risk:** Compass Financial — you're 1 of 3 vendors being evaluated. Differentiation is critical. Focus on integration story today.
- **Good news:** Atlas SaaS is ready to sign. CEO approval is just a formality. This closes this week.
- **Follow-up needed:** Forge Analytics — Chris is out until Wednesday. Send email today with reminder; call Thursday to close if proposal landed well.
- **Opportunity:** Meridian Corp demo is today at 4pm. They have 15 users and seem engaged. If this demo goes well, could close by end of month.

---

## Edge Cases

- **User has no scheduled meetings today:** Still provide briefing on email follow-ups, tasks due, and deal status. Suggest 2-3 outbound calls to focus on.
- **No Harmony data available:** Pull briefing entirely from CRM and calendar. Flag that briefing would be richer with yesterday's call context.
- **Very new rep (< 1 month):** Include more prep notes and account context. Suggest priority activities vs. just reporting status.
- **Team-wide briefing vs. individual:** Team brief is summary of all reps' closing deals, hot accounts, blockers. Individual brief is personal daily plan. Clarify which the user needs.
- **Multiple time zones:** Clearly timestamp all meetings and actions with user's local timezone.
