# Run Post-Mortems

> **Failure is the best teacher.** But only if you're willing to learn from the system, not blame the person.

## What It Does

This skill helps you run blameless post-mortems and retrospectives that actually generate insight and action. Reframes failure as growth, identifies systemic root causes (not individual mistakes), and ensures action items get done—most post-mortems fail because recommendations die without follow-up. Covers both incident reviews (something broke that wasn't supposed to) and project retrospectives (periodic learning from work completed). The key difference: incidents are urgent (review within days); retros are scheduled (monthly or quarterly).

## Who It's For

- **Engineering & Ops Leaders** running incident post-mortems when production fails, trying to prevent "blame culture" and learn from failures.
- **Product Leaders** wanting to learn from failed launches, missed goals, or unexpected outcomes instead of hiding them.
- **Team Leads & Managers** embedding learning and accountability in your team's rhythm without creating fear or defensiveness.
- **Executives** who want their organization to learn from failure instead of covering it up or shifting blame.
- **Quality & Safety Leaders** using post-mortems to identify systemic risks, build resilience, and prevent recurrence.
- **HR & Culture Leaders** concerned that incidents are creating shame or damaging psychological safety.

## Use Cases

- **Production incident:** A service went down, data was at risk, or customers were impacted. Review while fresh; understand why the system failed, not who failed.
- **Failed product launch:** You shipped and it underperformed. Instead of burying it, retrospective: what were your assumptions? What did the market teach you?
- **Missed project deadline or budget:** Instead of pointing fingers, understand the root causes: estimate wrong? Scope creep? Lack resources? Unclear requirements?
- **Quality crisis:** More bugs than usual; rework increasing; customer complaints spiking. Post-mortem to identify if it's testing, communication, process, or skill gap.
- **Failed acquisition or merger:** Integration failed. Project failed. Process broke. Understand why so you don't repeat it.
- **Team conflict escalates to failure:** Miscommunication, unclear ownership, or interpersonal tension caused a project to collapse or incident to happen. Review the system.

## Connectors

Works standalone—you need curiosity, psychological safety, and honest people in the room.

Richer with:
- **Slack:** Pull incident timeline and communication; see how team coordinated (or didn't) during crisis; spot communication gaps
- **Linear / Jira:** Track action items and follow-up; measure how many retrospective recommendations actually become work
- **GitHub:** Shows code changes and commits leading up to incident; helps reconstruct the decision chain and context
- **Zoom:** Record the post-mortem meeting for async review; ensures clarity on what was discussed and why decisions were made
- **Google Drive:** Store post-mortem doc; collaborate on findings and action items; build searchable library for pattern detection

## Setup

No special setup needed. Bring:
- **For incidents:** Timeline of events, who was involved, what they saw, logs/data from the failure, communication during incident
- **For retros:** Project scope (planned vs actual), timeline, feedback from team and stakeholders, metrics (quality, timeline, satisfaction)
- **Psychological safety:** Commitment to blamelessness before you start; explicit ground rule that no one will be disciplined for what they say
- **Diverse perspectives:** People who were involved, people who weren't, people with different roles (eng, product, ops, sales, design)
- **Facilitator:** Someone neutral (ideally not the most senior person, who might make others defensive)

## What You Get

- **Clear timeline** of what happened (facts, not guesses or blame; chronological sequence with context)
- **Root cause analysis** that points to systems, not blame (bad process, missing monitoring, unclear ownership, not "engineer failed")
- **3–5 action items** with owners, due dates, and success criteria (not a wish list of 15 items that get forgotten)
- **Follow-up accountability** so action items don't die (1 week check-in, 1 month review; tracked publicly)
- **A documented post-mortem** you can refer back to and learn from (searchable library for pattern detection across incidents)
- **Trust and learning culture** where people admit failures, ask for help, and improve together (not hide and blame)
- **Evidence for decision-making:** Next time you're considering a risky change, you have post-mortems showing what went wrong before

## How to Use This Skill

1. **Start with the ground rule.** Spend 2 minutes at the start: "We're investigating the system, not the person. No one will be disciplined based on what they say here."
2. **Use data, not memory.** Pull logs, Slack messages, timestamps. Don't rely on what people remember; memory is unreliable.
3. **Ask 'why' 5 times.** Don't stop at the first answer. Keep digging until you hit a system or process issue, not a person choice.
4. **Separate proximate causes from systemic causes.** Proximate: "The database went down." Systemic: "We have no monitoring on database health and no on-call rotation."
5. **Action items need owners and deadlines.** "The team will improve monitoring" fails. "Alex will implement database connection pool alerts by Friday" works.
6. **Actually do the follow-up.** Check in at 1 week and 1 month. Most post-mortems fail because recommendations die. Don't let that happen.
