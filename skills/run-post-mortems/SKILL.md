---
name: "Run Post-Mortems"
description: "Conduct blameless retrospectives on failures (incidents) or periodic reviews (projects). Reframes failure as growth, identifies systemic root causes, and ensures action items actually happen. When incidents occur or projects complete. Trigger on: incident post-mortem, retrospective, lessons learned, what went wrong, postmortem, retro, blameless review, failure analysis."
dependencies: []
connectors:
  - name: "Slack"
    reason: "Pull incident timeline and team communication during the failure"
  - name: "Linear"
    reason: "Track action items and follow-through; measure how many retrospective recommendations become issues"
  - name: "GitHub"
    reason: "Shows code changes and commits leading up to incident; helps understand system state"
  - name: "Zoom"
    reason: "Records post-mortem meeting for async review and clarity on what was discussed"
  - name: "Google Drive"
    reason: "Stores post-mortem document, facilitates collaborative editing and decision logging"
author: "Harmony"
version: "1.0.0"
icon: "sparkles"
cover: ""
screenshots: []
category: "Operations"
---

## Purpose

Failure teaches faster than success, but only if you're willing to learn. Post-mortems (incident reviews) and retrospectives (project reviews) are where that learning happens. The goal is not to find someone to blame—it's to identify the systems, processes, and decisions that led to the failure so you can prevent it next time. Blameless post-mortems move the focus from "who messed up?" to "how did our systems fail?" Most post-mortems fail because action items die. This skill helps you run them right and actually follow through.

## When to Use

- **After a significant incident.** A production outage, data breach, security breach, customer impact, or major financial loss. Stop and learn immediately while the failure is fresh.
- **After a failed project or initiative.** Missed deadline, scope creep, failed product launch, customer dissatisfaction, or burnout. Understand why.
- **After a big release that had unexpected problems.** Quality issues, performance degradation, or customer complaints post-launch. Don't bury the failure; dissect it.
- **Quarterly or monthly retrospectives on team performance.** Not waiting for failures; making learning part of the rhythm.
- **When you're about to repeat a past mistake.** You've seen this problem before; you're about to make the same decision again. Retrospective on the last version and learn.
- **After a significant personnel issue.** Conflict, burnout, miscommunication that led to mistakes. Understand the human and process factors.
- **When trust is fractured after failure.** People are defensive, blaming, or withdrawn. A blameless post-mortem helps restore psychological safety.

## Instructions

1. **Distinguish incident post-mortems from project retrospectives.**
   - **Incident post-mortems:** Something broke that wasn't supposed to. Production went down, data was lost, customer was harmed. Timing is urgent (days after incident, while memory is fresh).
   - **Project retrospectives:** A project completed (successfully or not). Time for periodic learning. Timing is regular (monthly, quarterly, after major release).
   - Both need structure, both need follow-through. The ceremony is slightly different, but the goal is the same: learn from what happened.

2. **Act quickly for incidents; schedule thoughtfully for retros.**
   - **Incident post-mortems:** Aim for the review 2–5 days after incident (after immediate recovery is done, but before people move on). Timing is critical—memories fade, context is lost.
   - **Project retrospectives:** Schedule at the end of the project or at a regular cadence (monthly or quarterly). Give people 1–2 days notice so they can prepare thoughts.
   - Give people 24 hours before the meeting to prepare their perspective (what went well, what they'd change, questions they have).

3. **Set up for blamelessness before you start.**
   - Establish the ground rule: "We're investigating the system and decisions, not fault. Even if one person made a mistake, we're asking: how did our processes let one person's mistake create a big problem?"
   - Call it a "retrospective" instead of a "post-mortem" if that helps with framing (though either word works—the tone is what matters).
   - Explicitly state: "We will not discipline anyone based on anything said in this room." (And actually mean it; if someone discovers a fire-able offense in the post-mortem, address it separately and carefully, not as a post-mortem consequence.)
   - Set the facilitator as someone neutral (not the most senior person, who might make people defensive).

4. **Gather the facts before the meeting.**
   - **For incidents:** Timeline of events, who was involved, what they saw, what data was available to them. (Get logs, Slack messages, monitoring alerts, what people remember.)
   - **For projects:** Scope that was planned vs actual, timeline deviation, team feedback, customer impact, quality metrics.
   - Create a chronological narrative: "At 3:15 PM, monitoring showed CPU at 80%. At 3:22 PM, customer reports [issue]. At 3:45 PM, team identified [cause]. At 4:10 PM, service recovered." (Use data, not guesses.)
   - Share the facts with participants 24 hours before the meeting so no one is ambushed.

5. **Facilitate the meeting to move from blame to systems.**
   - **Opening:** Remind people of blamelessness. "We're not finding fault. We're understanding why this system failed."
   - **Timeline review:** Walk through the facts. Ask: "At this point, what did you know? What did you decide? Why?" (Not "why did you make a bad decision?" but "what information did you have, and what looked like the right choice at the time?")
   - **Dig for root causes:** Ask "why" 5 times (or until you hit a system or process issue, not an individual choice).
     - "Why did the database go down?" → "We didn't set up auto-scaling."
     - "Why didn't we set up auto-scaling?" → "We didn't think traffic would spike."
     - "Why didn't we anticipate traffic spike?" → "We don't have forecasting based on marketing campaigns."
     - Root cause is not "engineer didn't set it up"; it's "we have no process for forecasting and planning infrastructure."
   - **Separate proximate causes from systemic causes.**
     - Proximate: "We ran out of database connections." (The immediate reason it failed.)
     - Systemic: "We have no monitoring on connection pool usage. We have no on-call rotation for database alerts. We had no plan for capacity when traffic increases." (The system didn't prevent the failure.)
   - **Identify contributing factors:** Stress, unfamiliarity, unclear documentation, lack of runbooks, single points of knowledge, decision made under time pressure, lack of testing, poor communication. These are all systemic, not individual blame.

6. **Brainstorm improvements, not blame.**
   - List all the places the system could have prevented or caught the failure earlier:
     - Better monitoring?
     - Clearer documentation?
     - Automated tests?
     - Redundancy / failover?
     - Clearer communication protocol?
     - Runbook or playbook for this scenario?
     - Cross-training so knowledge isn't concentrated?
   - Don't jump to "we need to hire people" or "people need to work harder." Focus on system changes.

7. **Convert improvements into action items with owners.**
   - Each action item: What is it? Who owns it? When is it due? How will we know it's done?
   - Prioritize: some are "must do immediately" (critical security gap), some are "should do soon" (improve monitoring), some are "nice to have" (refactor old code).
   - Default: 3–5 action items per post-mortem. If you have more than 7, you won't do them.
   - **Critical:** Assign a single owner per action item. "The team will improve monitoring" means no one will. "Alex will implement alerts for database connection pool by end of next week" means it gets done.
   - Set a follow-up date (1 week after post-mortem) to check on progress. Make it visible (Slack channel, Linear board, whatever your team uses).

8. **Document the post-mortem in a clear format.**
   - **Timeline:** Chronological facts of what happened.
   - **Root causes:** The systemic reasons, not blame.
   - **Contributing factors:** Stress, unclear process, lack of info, etc.
   - **What went well:** Any part of the response that prevented worse damage? Celebrate it. ("The on-call engineer responded in 8 minutes because of clear alerting." = praise the system.)
   - **Action items:** What we're changing, who owns it, when it's due.
   - **Follow-up:** When we'll check progress, who is accountable for follow-up.
   - **Learning:** One-liner: what did we learn? Make it memorable. ("Our infrastructure scales poorly; we need forecasting to match infrastructure to expected demand.")

9. **Distinguish learning review from grade-on-outcome post-mortem.**
   - **Learning review (more common):** "What did we do? What did we learn? What should we change?" Focus on process and decisions, not results.
   - **Grade-on-outcome review (for goals/OKRs):** "We aimed for 80% adoption; we hit 50%. Why? Not because someone failed, but because [market, decision, timing, assumption]. What does this teach us about estimation, market readiness, or execution?" The grade (hit 50% of goal) is less important than the learning (what were we wrong about?).
   - Most teams do learning review; goal reviews are less common but high-value for strategic learning.

10. **Create accountability for follow-through.**
    - Don't let action items die. Most post-mortems fail here—they generate insights that are never implemented.
    - Create a shared board (Linear, Jira, Notion) where all post-mortem action items live alongside normal work. Give them the same visibility.
    - Set a check-in at 1 week: "How many action items are in progress?" At 1 month: "How many are done?"
    - If an action item isn't done, revisit it: Was it deprioritized because something else was urgent? (That's OK; reschedule it.) Is the owner stuck? (Help them; reassign if needed.) Is it genuinely not important? (Kill it; don't pretend you'll do it later.)
    - At your next post-mortem or retro, review action items from last time: "Did we actually do this? Did it help? What did we learn?"

## Output Format

```
# Post-Mortem / Retrospective: [Incident Name or Project Name]

**Date of Incident/Project:** [When it happened or happened]
**Post-Mortem Date:** [When we're reviewing it]
**Severity:** [Critical / High / Medium / Low]
**Impact:** [Customers affected, revenue lost, duration, etc.]

## Timeline

| Time | Event |
|------|-------|
| [Time] | [What happened] |
| [Time] | [What happened] |
| [Time] | [Detection, response, or mitigation] |
| [Time] | [Resolution] |

**Total Duration:** [Time to resolution]
**Time to Detection:** [How long before we noticed]
**Time to Recovery:** [How long to fix]

## Root Causes (Systemic, Not Blame)

1. **[Root Cause Name]:** [Description of the system failure]
   - Why this happened: [What process was missing or broken]
   - Contributing factors: [Single point of failure? Lack of monitoring? Poor communication?]

2. **[Root Cause Name]:** [Description]
   - Why this happened: [What process was missing or broken]
   - Contributing factors: [Single point of failure? Lack of monitoring? Poor communication?]

3. **[Root Cause Name]:** [Description]
   - Why this happened: [What process was missing or broken]
   - Contributing factors: [Single point of failure? Lack of monitoring? Poor communication?]

## What Went Well

- [Aspect of response that prevented worse damage or helped recovery]
- [Aspect of response that showed good judgment or training]
- [Process that worked as intended]

## Action Items

| Action | Owner | Due Date | Success Criteria | Status |
|--------|-------|----------|------------------|--------|
| [What we're changing] | [Name] | [Date] | [How we'll know it's done] | To Do |
| [What we're changing] | [Name] | [Date] | [How we'll know it's done] | To Do |
| [What we're changing] | [Name] | [Date] | [How we'll know it's done] | To Do |

**Priority Levels:**
- **Critical:** Must do within 1 week (security gap, prevents same incident)
- **High:** Should do within 2 weeks (improves resilience, reduces risk)
- **Medium:** Nice to have within 1 month (improves operations, quality of life)

## Follow-Up Schedule

- **1 Week:** [Owner name] reports progress on critical action items
- **2 Weeks:** All owners report status on their action items
- **1 Month:** Retrospective on whether action items are complete and whether they actually helped

## Key Learning

[One sentence that captures the core insight: what did this teach us?]

**For the next team facing this:** [What should they know / do?]
```

## Example

```
# Post-Mortem: Payment Processing Outage

**Date of Incident:** 2026-03-15, 9:15 AM – 11:47 AM PT
**Post-Mortem Date:** 2026-03-17
**Severity:** Critical
**Impact:** 45 minutes of payment processing failures. ~200 customer transactions failed. Customers retried; all eventually succeeded. Net impact: customer confusion, support burden. No revenue lost (transactions succeeded on retry), but trust damaged.

## Timeline

| Time | Event |
|------|-------|
| 9:15 AM | Monitoring alert: Payment API response time spiking (normally 50ms, jumped to 2000ms+) |
| 9:22 AM | On-call engineer (Lisa) paged; investigated database slow queries |
| 9:35 AM | Identified root cause: database connection pool exhausted (max 100 connections, all in use) |
| 9:40 AM | VP Engineering escalated; discussed options: kill long-running queries vs. failover |
| 9:50 AM | Killed 8 long-running report queries (internal analytics); connections freed |
| 10:15 AM | Service recovered; payment processing back to normal latency |
| 10:30 AM | VP Support started reaching out to impacted customers |
| 11:47 AM | Last customer transaction succeeded; incident declared closed |

**Total Duration:** 92 minutes
**Time to Detection:** 7 minutes (monitoring alert)
**Time to Recovery:** 55 minutes (identified cause, killed queries, service recovered)

## Root Causes (Systemic, Not Blame)

1. **No connection pool monitoring or alerting:** Database connection pool was exhausted, but no alert existed. Lisa only discovered it after drilling into slow query logs. A simple metric ("connections / max_connections") would have surfaced it instantly.
   - Why: We assumed the default monitoring (CPU, disk, memory) was enough. We didn't instrument the application layer.
   - Contributing factor: No runbook for "connection pool exhausted" scenario, so Lisa had to diagnose from first principles.

2. **Long-running analytics queries compete for production connections:** Internal analytics team runs daily reports that batch-fetch all customer data. These queries hog connections during business hours, leaving fewer for customer-facing payment API.
   - Why: We use the same database for operational queries (payments) and analytical queries (reports). No isolation.
   - Contributing factor: No query prioritization—analytics queries should have lower priority and should be throttled or moved to off-peak times.

3. **No runbook for connection exhaustion:** When it happened, the response was ad hoc. VP Engineering had to decide whether to kill queries (risk losing report data) or failover (risk payment data inconsistency). No documented procedure.
   - Why: We assumed connection exhaustion wouldn't happen. We hadn't planned for it.
   - Contributing factor: No regular load testing or chaos engineering to surface failure modes.

## What Went Well

- **Excellent alerting on response time:** Monitoring caught the symptom (slow payments) immediately. Alert fired at 9:15 AM; we could have been slower.
- **Clear escalation path:** Lisa knew to page the VP Eng; leadership was available and responsive. 55 minutes to recovery is decent for an unplanned outage.
- **Honest customer communication:** VP Support reached out to customers with clear explanation and action (retry transactions). No defensiveness; owned the problem.
- **No permanent data loss:** Analytics reports were slightly incomplete but recoverable. Payment data was never at risk.

## Action Items

| Action | Owner | Due Date | Success Criteria | Status |
|--------|-------|----------|------------------|--------|
| Add monitoring for database connection pool usage and alert when >80% | Marcus (Eng) | 2026-03-24 | Alert fires in test env when we exceed 80 connections; confirmed to be reliable | To Do |
| Create runbook for "Connection Pool Exhausted" scenario | Sarah (Ops) | 2026-03-24 | Runbook includes: detection, immediate mitigation steps, long-term fix. On-call team reviewed it. | To Do |
| Move analytics queries to separate read replica or off-peak schedule | Marcus (Eng) + Rachel (Analytics) | 2026-04-07 | Analytics reports run on replica or between 12 AM-4 AM. Production connection pool reserved for user-facing queries. | To Do |
| Implement query priority levels in database (premium for payment, standard for analytics) | Marcus (Eng) | 2026-04-21 | Payment queries prioritized; analytics queries can be throttled without affecting payments. Load test to verify. | To Do |
| Run quarterly chaos engineering test: simulate connection exhaustion, verify recovery | QA Lead | 2026-03-30 | Execute chaos test; document results. Then run quarterly. | To Do |

**Priority Levels:**
- **Critical (within 1 week):** Connection pool monitoring and runbook. These directly prevent recurrence.
- **High (within 2 weeks):** Move analytics to replica or off-peak. Reduces load on production pool.
- **Medium (within 1 month):** Query prioritization and chaos testing. Improves resilience long-term.

## Follow-Up Schedule

- **March 24 (1 week):** Marcus reports on monitoring + alert status; Sarah presents runbook to on-call team
- **March 30 (2 weeks):** All owners report: any blockers? Updated timeline if needed?
- **April 17 (1 month):** Retrospective on action items: Are they complete? Have we had another connection pool incident? Did they help?

## Key Learning

Our system failed not because someone made a bad decision, but because we didn't have observability or runbooks for a foreseeable failure mode (connection exhaustion). We learned that we need to instrument the database layer, not just the infrastructure layer, and that operational and analytical workloads should not share limited resources.

**For the next team:** When you add a critical dependency (like a database), spend 2 hours mapping failure scenarios (connection pool, network partition, disk full, slow queries) and create monitoring + runbooks for each. It's boring, but it saves you 90 minutes of production outage.
```

## Edge Cases

1. **The failure was clearly someone's mistake.** They shipped code without testing, made a bad decision, took a shortcut. The team wants to blame them. Redirect: "Yes, they made a choice. But the system allowed that choice to break production. How do we fix the system?" (Maybe that's requiring code reviews, maybe it's automated testing, maybe it's better communication. The system is usually the issue.)

2. **The person responsible for the incident is in the post-mortem.** They're defensive or withdrawn. Others might be uncomfortable. Set the blameless tone explicitly at the start. If they're still defensive, address it: "I know this is uncomfortable. The goal isn't to blame you. Help us understand what happened so we fix it."

3. **Post-mortem uncovers something unethical or illegal.** Someone knew about the risk and didn't report it, or they knowingly cut corners. Handle this separately from the post-mortem. A post-mortem is not a disciplinary process. If there's a firing offense, that's a separate conversation with HR and leadership.

4. **Action items require cross-team ownership and the teams won't coordinate.** You identified that analytics and payments should be separated, but they report to different VPs who aren't aligned. Escalate: "These teams need to solve this together; if they can't, you (VP Engineering) need to make the decision and enforce it." Don't let post-mortems become unfunded wish lists.

5. **You're reviewing a project that succeeded, not an incident.** The framing is different. Instead of "what broke," ask "what did we assume that we should verify next time?" "What would we do differently if we could?" "What did we learn about our market, customer, or team?" Project retros are lower-pressure but equally valuable.

6. **You've run five post-mortems on the same system and still haven't fixed it.** You're identifying the same root cause repeatedly. Either the action items aren't being done, or the diagnosis is wrong. Call this out: "We've identified connection exhaustion three times. Either we don't believe it's a real problem, or something is preventing us from fixing it. Which is it?" Address the meta-problem (organizational will, resource constraints, priority) not just the technical problem.
