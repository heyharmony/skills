---
name: "Ship Products"
description: "Orchestrates a launch from planning through execution, identifying blockers, building momentum, and ensuring cross-team alignment. Helps teams move from talking about shipping to actually shipping. Trigger on: launch planning, shipping delays, cross-team misalignment, 'when do we ship', demo day, go-live checklist, shipping blocker."
dependencies: []
connectors:
  - name: "Linear"
    reason: "Tracks feature completeness, bug list, and deployment checklist. Shows whether engineering is truly ready to ship."
  - name: "Slack"
    reason: "Surfaces shipping blockers from team discussions and communication patterns. Identifies where cross-team alignment is breaking down."
  - name: "GitHub"
    reason: "Monitors PR merge rate, build health, and deployment frequency. Reveals whether the team's shipping muscle is atrophied."
  - name: "Zoom"
    reason: "References shipping meetings and launch reviews to understand team alignment and confidence."
  - name: "Google Calendar"
    reason: "Identifies availability windows for launch and QA, catches conflicts that delay shipping."
author: "Harmony"
version: "1.0.0"
icon: "sparkles"
cover: ""
screenshots: []
category: "Product"
---

## Purpose

Shipping is not a one-day event—it's a capability that compounds. Every team that ships frequently gets better at shipping. This skill operationalizes the shipping process: turning vague launch goals into concrete checklists, surfacing the real blockers (usually cross-team, not technical), and building a launch cadence that becomes the team's default mode.

Most teams don't lack the ability to ship; they lack the decision-making framework and discipline. They debate, re-scope, wait for perfection, or misalign across engineering, design, and product. This skill removes that friction by establishing what "ship-ready" means, creating pre-launch rituals that catch problems early, and defining what happens after launch.

## When to Use

- **Launch is imminent but timeline feels hazy**: You have a rough target date but no concrete plan. Define ship-ready criteria, identify cross-team dependencies, and build a realistic schedule.

- **Team is shipping slowly or irregularly**: You ship quarterly instead of monthly. Use shipping rituals and a weekly shipping checklist to build momentum and make shipping the default.

- **Quality gates are undefined**: You're waiting for "it's ready" but nobody knows what ready means. This skill sets explicit quality standards (what must be true before launch).

- **Cross-team blockers derail launches**: Product says it's ready, but engineering finds critical bugs three days before launch. Use this skill to surface misalignment earlier.

- **Post-launch planning is chaotic**: You shipped, but now customer communication, support onboarding, and monitoring are scrambled. This skill includes the full launch sequence, not just the deployment moment.

- **Launch anxiety paralyzes the team**: Fear of shipping imperfectly prevents shipping at all. This skill reframes shipping as learning, with clear gates to manage risk.

- **You're not sure if you can actually hit the timeline**: Get realistic estimates, identify the critical path, and spot where you'll get stuck.

## Instructions

1. **Define "Ship-Ready": Quality Gates and Non-Negotiables**
   - Ask: What must be true before we can hit the launch button?
   - Distinguish between hard gates (show-stoppers, cannot ship without) and soft gates (nice, but not blocking)
   - Document in writing—this prevents last-minute scope debates
   - Example hard gates: Zero data loss, no security vulnerabilities, core workflows don't crash
   - Example soft gates: UI polish, advanced reporting, mobile optimization
   - Get cross-team alignment: If engineering says "X is a hard gate" but product disagrees, surface that now
   - Run a pre-mortem: "Ship date is in 2 weeks. What could go wrong?" List the ways you'll miss launch

2. **Decompose the Launch into Weekly Milestones**
   - Work backwards from launch date to today—what must happen each week?
   - Week 1: Core features complete and merged (code freeze begins)
   - Week 2: QA finds and logs all bugs; high-priority bugs get fixed
   - Week 3: Final QA pass, support docs finalized, monitoring ready
   - Day of launch: Deploy, monitor, support on standby
   - Day after: Post-launch retrospective and communication
   - Assign owners to each milestone (Product, Eng, QA, Design, Support, Ops)
   - Update this weekly—adjust as you learn

3. **Surface Cross-Team Dependencies Explicitly**
   - What does design need to complete before engineering starts building?
   - What does QA need from engineering to begin testing?
   - What does support need to onboard customers?
   - What does marketing need to launch announcements?
   - Create a dependency map: Feature A → Test Plan → Support Doc → Marketing Assets
   - If Feature A is late, everything downstream slips
   - Identify your critical path (the sequence of tasks that can't be parallelized)
   - Review this with all teams—surprises in week 3 kill launches

4. **Run a Weekly Shipping Sync**
   - 30 minutes, same time every week, includes: Product, Engineering Lead, QA, Design
   - Template: "What's on track? What's at risk? What blockers do we have?"
   - Track three numbers: % of features complete, % of bugs resolved, % of quality gates met
   - If anything is <80% complete and you're in the final 3 weeks, that's a red flag
   - Identify blockers in real-time: "Marketing can't finish copy until design finalizes UX"
   - This meeting is where the real decisions happen—not in standups or Slack
   - Decisions made in shipping sync are binding; no re-litigation

5. **Create a Definition of Done for Each Feature**
   - Every feature ships with: code complete, tests passing, reviewed, no critical bugs, documented
   - Example: A "deal sync" feature isn't done until: code merged, integration tests pass, QA verified data accuracy, support docs written, no crashes in staging
   - Before a feature is marked "done," it must meet this definition
   - Prevents engineers from declaring victory when QA still has work, or product from promising customers features not yet documented
   - Attach this checklist to every feature/epic in your tracking system (Linear, Jira, etc.)
   - Own: Product or Engineering, depending on your process

6. **Lock Scope 2 Weeks Before Launch**
   - At the 2-week mark, no new features are added
   - Any requests after this go to post-launch or next cycle
   - This isn't arbitrary—it's the point where you need certainty to plan QA and launch activities
   - Communicate this date upfront; nobody gets blindsided
   - If scope disputes are still happening at week 2, that means step 1 (define ship-ready) didn't work—address it now
   - Once locked, scope is frozen; if something breaks, you either fix it or defer it

7. **Create Pre-Launch Quality Gates Checklist**
   - 3 days before launch, checklist of must-pass items:
     - Code deployed to staging, all features working end-to-end
     - All critical bugs fixed and verified resolved
     - No regressions detected in final QA pass
     - Documentation complete and reviewed
     - Support and customer success onboarded (understands the feature and any gotchas)
     - Monitoring and alerts configured (will you know if it breaks?)
     - Rollback plan documented (how do we undo this if it goes wrong?)
     - Customer communication ready (email, changelog, announcements)
   - Any item not checked: do not launch
   - This isn't paranoia; it's the difference between a launch and a disaster

8. **Run a Launch Ritual: Pre-Launch Review**
   - Day before launch, 1-hour meeting with the full cross-functional team
   - Go through the checklist: "Are we ready?"
   - Each team (Eng, QA, Support, Product, Ops) must confirm their part is done
   - Someone says "I'm not ready"? You surface it now, not at 11pm on launch day
   - Agree on launch timing (what timezone? what time of day? who's awake to monitor?)
   - Agree on rollback criteria: "If X happens, we roll back immediately"
   - This meeting is authoritative—you have no better data than what you have here
   - Confidence check: "On a scale of 1-10, how confident are we in launching tomorrow?" If <7, escalate

9. **Establish Launch Day Protocol**
   - Identify the launch lead (usually Product or a Program Manager) who owns the day
   - Real-time communication channel: Slack or Zoom bridge, not email
   - All teams on standby for 2 hours post-deploy
   - Someone monitoring production: watching logs, error rates, user complaints
   - Clear escalation: If something breaks, who decides to rollback? (Usually: Engineering Lead + Product Lead)
   - Celebrate when you ship—5 minutes to acknowledge the effort, then get back to monitoring
   - Post-launch: 24-hour follow-up to catch any issues users found that monitoring didn't surface

10. **Schedule Post-Launch Review and Next Steps**
    - 2-3 days after launch: "How'd we do? What can we improve?"
    - Review against your launch goals: "Did we hit the date? Did quality gates work? What surprised us?"
    - Document: "What made this launch smooth? What nearly broke it?"
    - Build this into your shipping rituals—each launch informs the next one
    - Plan next launch or next feature cycle: "Given what we learned, how do we ship faster?"
    - The goal isn't perfect launches; it's shipping frequently and improving every time

## Output Format

```
=== SHIP PRODUCTS: [Project/Feature Name] ===

LAUNCH OVERVIEW
Target Launch Date: [Date]
Scope: [Number of features/epics]
Teams Involved: [Engineering, Design, QA, Support, Marketing, Ops]
Launch Lead: [Name, Team]

SHIP-READY CRITERIA (Quality Gates)
Hard Gates (Must Have Before Launch):
☐ [Gate 1]: Why this is non-negotiable
☐ [Gate 2]: Why this is non-negotiable
☐ [Gate 3]: Why this is non-negotiable

Soft Gates (Nice But Not Blocking):
☐ [Gate A]: Why this can wait if we're cutting close
☐ [Gate B]: Why this can wait if we're cutting close

PRE-MORTEM (What Could Go Wrong?)
Risk: [Something breaks in production]
Impact: [Users can't use core feature]
Mitigation: [Rollback plan, monitoring, load testing]

[Repeat for 3-5 top risks]

TIMELINE: WEEK BY WEEK
────────────────────────────
WEEK 1 (Today - [Date]): ENGINEERING SPRINT
Goals: All features complete, merged, and deployed to staging
Owner: Engineering Lead
Status: [On Track / At Risk / Blocked]

Feature 1: [% Complete]
Feature 2: [% Complete]
Feature 3: [% Complete]

Dependencies from Product/Design: [What are we waiting on?]
Blockers: [Anything that will slow us down?]

────────────────────────────
WEEK 2 ([Date] - [Date]): QA AND BUG FIX
Goals: QA identifies all bugs, high-priority bugs fixed, no new features after [date]
Owner: QA Lead

Known Issues/Bugs: [List and severity]
% of Bugs Resolved: [X%]
Blockers: [Any testing delays?]

SCOPE LOCK DATE: [Date at 3pm] — After this, no new features

────────────────────────────
WEEK 3 ([Date] - [Date]): FINAL QA AND LAUNCH PREP
Goals: Final QA pass, documentation complete, support onboarded, monitoring ready
Owner: Product Manager

Remaining Bugs: [List critical only]
Documentation Status: [% Complete]
Support Onboarding: [Complete / In Progress]
Monitoring Configured: [Yes / No]

────────────────────────────
LAUNCH DAY ([Date]): DEPLOY AND MONITOR
Owner: Launch Lead + Engineering + Ops

5am: Final checklist reviewed, all hands on deck
6am: Deploy to production
6am-8am: Real-time monitoring, support on standby
8am+: Monitor for 24 hours for issues users find

────────────────────────────
DAY AFTER LAUNCH ([Date]): RETROSPECTIVE
Post-launch review: What went well? What nearly broke? What do we improve for next launch?

CRITICAL PATH (Things That Can't Slip Without Delaying Launch)
1. [Feature X]: If this is late, entire launch is late
2. [Feature Y]: If this is late, entire launch is late
3. [QA critical bug resolution]: Must finish by [Date]

CROSS-TEAM DEPENDENCIES
Engineering → QA: Code deployed to staging by [Date]
QA → Support: Test results and gotchas by [Date]
Design → Engineering: Final designs approved by [Date]
Product → Marketing: Feature announcements by [Date]

[Add visual map if complex]

CONFIDENCE LEVEL
Engineering Confidence: [50% / 70% / 90%] — "Reason"
QA Confidence: [50% / 70% / 90%] — "Reason"
Product Confidence: [50% / 70% / 90%] — "Reason"

If any team is below 70%, list why and what needs to change.

SHIPPING MUSCLE: LAUNCH FREQUENCY
Current shipping cadence: [Every 4 weeks / Every 2 weeks / Weekly / Ad-hoc]
Goal shipping cadence: [We want to ship every X weeks]
Bottleneck preventing faster shipping: [What slows us down?]

Post-launch, commit to shipping cadence: [We ship every X weeks, no exceptions]
```

## Example

**Project: Notification Preferences for Logan Analytics**

```
=== SHIP PRODUCTS: Notification Preferences ===

LAUNCH OVERVIEW
Target Launch Date: March 31, 2026
Scope: 5 features (notification types, frequency, channels, templates, admin controls)
Teams Involved: Engineering (2), Design (1), QA (1), Support (1), Product (1)
Launch Lead: Sarah Chen (Product Manager)

SHIP-READY CRITERIA (Quality Gates)
Hard Gates (Must Have Before Launch):
☐ Email notification delivery 99.5% reliable (test with 10k+ recipients)
☐ No data loss when users update preferences (data integrity tests pass)
☐ Security: No unauthorized access to other users' notification settings
☐ UI works on desktop and mobile without crashing
☐ Support team can troubleshoot any issue without escalating to Engineering

Soft Gates (Nice But Not Blocking):
☐ SMS notifications (great to have, but email is the core MVP)
☐ Advanced scheduling (e.g., "don't notify me between 6pm-8am")
☐ Notification digest summaries

PRE-MORTEM (What Could Go Wrong?)
Risk: Email service outage during launch
Impact: Users can't receive notifications; might blame our app
Mitigation: Use backup email provider; monitor both; clear communication if service degrades

Risk: Notification preferences database performs poorly under load
Impact: Slow UI; user frustration
Mitigation: Load test with 50k users; optimize queries; scale database replicas before launch

Risk: Marketing launches too soon; customers confused by feature
Impact: Support overwhelmed; users don't understand how to use it
Mitigation: Stagger launch—internal team (Friday), early adopters (Monday), general availability (Tuesday)

Risk: QA finds critical bugs the day before launch
Impact: Launch delayed 1-2 weeks
Mitigation: Code freeze 2 weeks out; final QA pass done 3 days early

TIMELINE: WEEK BY WEEK
────────────────────────────
WEEK 1 (Mar 17-21): ENGINEERING SPRINT
Goals: All 5 features complete, merged, deployed to staging
Owner: James Wu (Engineering Lead)

Email Notifications: 85% complete
Notification Types (email, in-app, SMS): 60% complete
User Preference API: 90% complete
Admin Controls: 40% complete
UI Components: 75% complete

Dependencies from Product/Design:
- Waiting on Design approval of SMS UI (expected Mar 19)
- Product needs to finalize admin controls spec by Mar 18

Blockers:
- Email service API rate limiting; may need to request higher quota

Status: ON TRACK, but SMS may slip if design approval is late

────────────────────────────
WEEK 2 (Mar 24-28): QA AND BUG FIX
Goals: QA identifies all bugs, high-priority bugs fixed, no new features after Mar 27 3pm
Owner: Maya Patel (QA Lead)

Known Issues/Bugs:
- Email delivery delay under 5k concurrent users (High): Fix in progress, ETA Mar 26
- SMS field validation broken on mobile (High): Will fix by Mar 26
- Typo in confirmation message (Low): Fix if time permits
- Notification digest missing sent date (Medium): Post-launch feature

% of Bugs Resolved: 60%

Blockers:
- Engineering needs to prioritize the email delivery lag; could be a launch blocker

SCOPE LOCK DATE: March 27, 3pm — After this, no new features (SMS already at risk)

────────────────────────────
WEEK 3 (Mar 29-30): FINAL QA AND LAUNCH PREP
Goals: Final QA pass, documentation complete, support onboarded, monitoring ready
Owner: Sarah Chen (Product Manager)

Remaining Bugs:
- Email delivery under load (tracking in production)
- Edge case on mobile preferred (monitoring)

Documentation Status: 85% (waiting on final copy from Product)
Support Onboarding: Complete
Monitoring Configured:
  ☐ Email delivery rate
  ☐ Preference update latency
  ☐ Error rate
  ☐ User adoption rate

────────────────────────────
LAUNCH DAY (Mar 31): DEPLOY AND MONITOR
Owner: Sarah Chen + James Wu + Maya Patel

5am: Final checklist reviewed, all hands on deck
6am: Deploy to production (only James + Ops)
6am-8am: Real-time monitoring (Sarah monitoring Slack, Maya watching error logs, James on standby)
8am-8pm: Support on standby for user questions

Rollback trigger: >1% error rate or >100 customer complaints = immediate rollback

────────────────────────────
DAY AFTER LAUNCH (Apr 1): RETROSPECTIVE
What went well: Email delivery rock-solid, no downtime, users adopted fast
What nearly broke: Mobile SMS validation was last-minute fix; came in at midnight
What we improve: Need earlier mobile testing; should have started SMS work 1 week earlier

Next launch cadence: Every 2 weeks for this product line

CRITICAL PATH (Things That Can't Slip Without Delaying Launch)
1. Email notification delivery (core feature, most complex)
2. User preference API (blocks all UI from working)
3. QA bug resolution (if bugs are found but not fixed, launch slips)

CROSS-TEAM DEPENDENCIES
Engineering → QA: Code deployed to staging by Mar 24 (ACTUAL: Mar 23 ✓)
QA → Support: Test results and gotchas by Mar 29 (ACTUAL: Mar 28 ✓)
Design → Engineering: Final designs approved by Mar 19 (ACTUAL: Mar 18, but SMS was late)
Product → Marketing: Feature announcements by Mar 30 (IN PROGRESS)

CONFIDENCE LEVEL
Engineering Confidence: 85% — "Main risk is email service API, but workaround is ready"
QA Confidence: 75% — "Mobile testing found issues late; could have caught these earlier"
Product Confidence: 90% — "Feature is solid; support is ready; monitoring is good"

Overall confidence: 83% — Launch is go, but email service needs monitoring.

SHIPPING MUSCLE: LAUNCH FREQUENCY
Current shipping cadence: Every 4 weeks
Goal shipping cadence: Every 2 weeks for core features
Bottleneck preventing faster shipping: Mobile testing comes late; QA doesn't start until code freeze
Post-launch, commit to: Shipping every 2 weeks, starting next cycle (April 14)
```

## Edge Cases

- **Major bug found 3 days before launch**: You have three options: (a) Fix it in time (only if it's a real blocker, not just uncomfortable), (b) Rollback the feature that contains it and push to next cycle, or (c) Launch with a known issue and a clear warning to support. Decide based on severity and confidence in the fix. If you're uncertain, rollback.

- **One team says "we're not ready" the day before launch**: This is a real signal—don't override it. Either give them 24 hours more if it's a real blocker, or scope out their part if it's not. But if engineering says "we're not ready," believe them. If support says "we're not ready," that's usually fixable (they need 2 more hours of onboarding).

- **Scope creep during the launch cycle**: Someone asks to add a "quick feature" during week 2. Scope is locked. "Great idea, it goes into next cycle." No exceptions. If they push back, escalate to leadership, but don't let scope drift happen in real-time.

- **Launch date is immovable (regulatory, event-based, customer-committed)**: Work backwards from that date and cut scope ruthlessly. Use the Scope & Cut skill to decide what ships. Don't stretch people and resources hoping to fit more in. Acknowledge the constraint early and plan accordingly.

- **Team is exhausted after launch and wants to rest**: This is normal—schedule 1-2 weeks of lower intensity after a major launch. But don't let the team stop shipping. Smaller launches and cleanup work keep momentum going. After 2 weeks, restart the cadence.

- **Post-launch, users ask for a feature you intentionally cut**: This is valuable feedback. Add it to the next cycle. Don't rush a reactive update; prioritize thoughtfully. This is how you learn what really matters.
