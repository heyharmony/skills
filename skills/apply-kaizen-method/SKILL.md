---
name: "Apply Kaizen Method"
description: "Apply Kaizen continuous improvement — run 5 Whys analysis, map cause-and-effect, and propose incremental fixes to any process or workflow. Works from retro transcripts, standup patterns, or described problems. Trigger on: kaizen, continuous improvement, root cause, 5 whys, process improvement, why does this keep happening."
dependencies: []
connectors:
  - name: "Slack"
    reason: "Pull team discussions about recurring problems and frustrations"
  - name: "Linear"
    reason: "Reference issue history and cycle data to identify bottleneck patterns"
  - name: "Jira"
    reason: "Pull sprint data, bug trends, and blocked tickets for process analysis"
  - name: "Notion"
    reason: "Reference existing process docs and past improvement initiatives"
---

## Purpose

The Apply Kaizen Method skill transforms recurring frustrations and bottlenecks into concrete, incremental improvements. Kaizen (continuous improvement) is rooted in the principle that small, structured changes accumulate into major gains. This skill runs a disciplined root-cause analysis using the 5 Whys method and Cause-and-Effect (fishbone) mapping, then proposes 3–5 low-risk, high-impact fixes scoped for a 2-week sprint.

Unlike broad process redesigns, Kaizen focuses on the actual conditions teams face today—data from recent retros, standup chatter, ticket patterns, or user feedback. The output is actionable: each improvement has a success metric, an owner, and a clear first step.

---

## When to Use

**Trigger Phrases:**
- "Why does [X] keep happening?"
- "We need better [process]"
- "I want continuous improvement around [topic]"
- "What's the root cause of our bottleneck?"
- "Let's do a Kaizen sprint on [workflow]"
- "Why are we still stuck on this?"

**Common Scenarios:**
1. **Operations/Engineering:** Long customer onboarding cycles, repeated production incidents, deployment friction.
2. **Product/Design:** High volume of rework feedback, slow design-to-dev handoff, unclear requirements.
3. **Sales/Support:** Long ticket resolution times, missed follow-ups, inconsistent customer data entry.
4. **Leadership/Teams:** High meeting load, unclear decision-making, duplicate work across squads.

**Not a good fit:**
- One-time strategic pivots (use strategic planning skills instead).
- Situations requiring external expertise (e.g., hiring, fundraising).
- Problems where blame is the real issue (Kaizen assumes systems, not people, are the problem).

---

## Instructions

### Step 1: Define the Problem Statement
Clarify the single, measurable problem you're solving. Avoid multi-issue sprawl.

**Questions to ask:**
- What is the current state (time, cost, defects, wait)?
- What is the desired state?
- How often does this occur?
- Who feels the pain most acutely?

**Output:** A 1–2 sentence problem statement. Example: "Customer onboarding (trial signup → first automated report) averages 3 weeks; we target 5 business days."

### Step 2: Gather Evidence
Pull data from Harmony sources: Slack channels, Linear issues, Jira sprints, Notion retros, or user feedback. Look for:

- **Frequency:** How many times has this been reported/observed?
- **Duration:** How long does the process take (vs. ideal)?
- **Cost:** What is lost (time, money, morale, customer satisfaction)?
- **Patterns:** Does it happen at specific points or with certain people/tools?

**Action:** Surface at least 3 concrete data points. "Retro notes from Jan–Feb show 7 mentions of slow design handoff. Linear shows 6 blocked product tasks this cycle, averaging 4-day wait for design review."

### Step 3: Run 5 Whys Analysis
Ask "Why?" five times to drill past surface symptoms to root causes. Each layer should answer the previous "why."

**Template:**
1. Why does [problem] occur?
2. Why does [that reason] happen?
3. Why does [that] happen?
4. Why does [that] happen?
5. Why does [that] happen? (Usually here you hit process, system, or awareness gaps.)

**Rule:** Each answer must be provable or testable from your gathered evidence. Avoid speculation.

### Step 4: Build Cause-and-Effect Map (Fishbone Diagram)
Organize root causes into categories. Standard Kaizen categories are:

- **People:** Skills gaps, awareness, communication, training.
- **Process:** Unclear steps, missing gates, repeated handoffs.
- **Tools:** Wrong tool, misconfigured tool, manual workarounds.
- **Materials/Environment:** Missing data, external blockers, unclear specs.

**Format (Markdown fishbone sketch):**
```
                          [PROBLEM EFFECT]
                                  |
      People                       |                  Tools
      -------                      |                  -----
   - Unclear ownership ------+     |     +------ No Slack integration
   - Knowledge silos --------+     |     +------ Manual data entry
                                   |
      Process                      |              Environment
      -------                      |              -----------
   - 3-step review gate -----+     |     +------ Missing handoff docs
   - Design sync time -------+     |     +------ No template for brief
```

### Step 5: Score Root Causes by Frequency × Impact
Rank causes by: (how often it blocks) × (how much time/money lost). Use a simple scale (1–5).

**Example scoring:**
| Root Cause | Frequency | Impact | Score | Priority |
|---|---|---|---|---|
| No Slack integration (tool) | 5 | 4 | 20 | HIGH |
| Design review gate misaligned (process) | 4 | 4 | 16 | HIGH |
| Knowledge silos (people) | 3 | 2 | 6 | LOW |
| No template (environment) | 4 | 2 | 8 | MEDIUM |

Focus fixes on HIGH-priority causes.

### Step 6: Propose 3–5 Kaizen Improvements
Each improvement must be:
- **Small:** Implementable in 3–5 days, not weeks.
- **Incremental:** Builds on current systems, doesn't replace them.
- **Testable:** Has a clear success metric.
- **Reversible:** If it doesn't work, you can undo it.

**Template per improvement:**
- **What:** Clear 1-sentence description.
- **Why it fixes:** Which root cause(s) does it address?
- **Owner:** Who drives this?
- **Timeline:** When starts, when ships.
- **Success Metric:** How will you measure if it worked?

### Step 7: Define Success Metrics
Each improvement needs 1–2 metrics, measured before and after the 2-week sprint.

**Types:**
- **Time:** Reduce cycle time from X to Y hours/days.
- **Volume:** Decrease blocked tickets from X to Y per cycle.
- **Quality:** Lower rework rate from X% to Y%.
- **Adoption:** X% of team uses new process by sprint end.

### Step 8: Create 2-Week Improvement Sprint Plan
Bundle the 3–5 improvements into a sprint. Assign owners, set daily huddles, and plan mid-sprint check-ins.

**Format:**
- **Week 1:** Launch 2–3 improvements; measure baseline; run daily standup.
- **Mid-week checkpoint:** Any blockers? Need to adjust scope?
- **Week 2:** Iterate on feedback; launch remaining improvements; measure results.
- **Retro:** Did we hit metrics? What's the next Kaizen cycle?

---

## Output Format

Deliver a structured improvement plan document with:

1. **Problem Statement** (1–2 sentences)
2. **Evidence & Data** (3+ data points with source)
3. **5 Whys Drill** (all 5 layers, numbered)
4. **Cause-and-Effect Map** (fishbone diagram in markdown)
5. **Root Cause Scoring Table** (frequency × impact ranking)
6. **3–5 Improvements** (each with What/Why/Owner/Timeline/Metric)
7. **Success Metrics Baseline** (current state, target state, measurement method)
8. **2-Week Sprint Plan** (week-by-week roadmap, owners, checkpoints)
9. **Next Kaizen Cycle** (what to measure/learn for the next round)

---

## Example: Veltrix Customer Onboarding (B2B SaaS)

**Problem Statement:**
Veltrix (AI data platform, $2M ARR) launched a trial program 8 weeks ago. Customer onboarding (trial signup → first automated report) averages 3 weeks; product goal is 5 business days. This gap is causing 40% of trials to go dark before activation.

---

### Evidence & Data

- **Retro notes (Feb):** 12 team mentions of "slow onboarding," "customers asking where their data is," "support queue flooded with where's my report questions."
- **Linear:** 8 blocked customer support tasks this cycle (avg 4–6 day wait). Root issue tags: "waiting for CS config," "unclear customer data format," "manual report gen."
- **Slack #support:** 23 messages in past 2 weeks asking "when will customer X get their first report?"
- **HubSpot:** 41 new trial signups in Feb; only 11 activated; 18 dormant >7 days; 12 churn before week 1.

---

### 5 Whys Drill

1. **Why do trials take 3 weeks to activate?**
   → Because Veltrix CSMs manually build each customer's data pipeline and test the first report before enabling.

2. **Why do CSMs do this manually?**
   → Because the product doesn't have a self-service data upload wizard; customers get stuck when they don't know data format/schema.

3. **Why doesn't the product have a wizard?**
   → Because the API documentation is incomplete and the UI is designed for power users, not first-time trial users.

4. **Why is onboarding designed for power users?**
   → Because the product team built for existing enterprise customers; trial users were added later without re-designing the flow.

5. **Why wasn't the flow re-designed for trials?**
   → Because there was no feedback loop between support (handling trial issues) and product (building features). No one tracked trial activation as a metric until recently.

---

### Cause-and-Effect Map

```
                    [3-week trial activation lag]
                                    |
         People                     |                    Tools
         ------                     |                    -----
    - CSM knowledge only ----+      |      +---- No self-service wizard
    - No escalation path ----+      |      +---- Incomplete API docs
    - Support overwhelmed ---+      |      +---- UI assumes expert users
                                    |
         Process                    |               Environment
         -------                    |               -----------
    - No handoff from sales --+     |      +---- No trial SLA
    - Manual config --------+       |      +---- No activation dashboard
    - No feedback loop prod-support +      +---- Support doesn't track activation %
```

---

### Root Cause Scoring

| Root Cause | Frequency | Impact | Score | Priority |
|---|---|---|---|---|
| No self-service wizard (tools) | 5 | 5 | 25 | **CRITICAL** |
| Manual config by CSM (process) | 5 | 4 | 20 | **HIGH** |
| No feedback loop (people) | 4 | 4 | 16 | HIGH |
| Incomplete API docs (tools) | 4 | 3 | 12 | MEDIUM |
| Support overwhelmed (people) | 3 | 3 | 9 | MEDIUM |

---

### Proposed Kaizen Improvements

**Improvement 1: Launch Quick-Start Template**
- **What:** Create a 5-minute guided template inside the product UI that auto-generates a sample data pipeline for new trials.
- **Why it fixes:** Removes manual CSM config for 70% of trial types; lets customers self-serve.
- **Owner:** Sarah (Product Lead)
- **Timeline:** Start Mon, ship Thu.
- **Success Metric:** 60% of new trials use template; CSM config time drops from 2 hours to 30 min.

**Improvement 2: Auto-Generate First Report**
- **What:** When customer data passes validation, trigger an automated report generation (pre-configured dashboard snapshot) instead of waiting for CSM to hand-craft.
- **Why it fixes:** Cuts manual bottleneck; delivers value within 24h of data upload.
- **Owner:** Raj (Backend Eng)
- **Timeline:** Start Mon, ship Tue (leverages existing report engine).
- **Success Metric:** First report generated within 4 hours of data upload; support tickets drop 30%.

**Improvement 3: Sync Support Tickets → Product Backlog**
- **What:** Set up a weekly 30-min sync between support lead (Marcus) and product lead (Sarah). Marcus surface top 3 trial friction points; Sarah threads into product backlog.
- **Why it fixes:** Closes feedback loop; product sees real trial pain; prioritizes high-impact fixes.
- **Owner:** Marcus (Support Lead)
- **Timeline:** Start next Mon, recurring weekly.
- **Success Metric:** Top 3 support friction points addressed in next cycle; support queue <1 day avg wait.

**Improvement 4: Publish Simplified API Guide for Trials**
- **What:** Create a 2-page "trial data format" guide with 3 copy-paste examples (CSV, JSON, webhook). Post in help center and send with trial welcome email.
- **Why it fixes:** Removes confusion about data schema; supports self-serve path.
- **Owner:** Deena (Technical Writer)
- **Timeline:** Start Wed, ship Fri.
- **Success Metric:** 50% of new trials reference guide before contacting support.

**Improvement 5: Add Trial Activation Dashboard**
- **What:** Create a Notion dashboard CSMs and product check daily: trial signups, data uploaded, reports generated, activation status (trial → paid, churned, dormant).
- **Why it fixes:** Makes progress visible; surfaces stuck customers early; enables rapid intervention.
- **Owner:** Sarah (Product) + Marcus (Support)
- **Timeline:** Start Tue, ship Wed.
- **Success Metric:** CSMs identify stuck trials within 24h; re-engage 20% of at-risk trials before churn.

---

### Success Metrics Baseline

| Metric | Current (Baseline) | Target (Week 2) | Measurement | Owner |
|---|---|---|---|---|
| Trial activation cycle time | 21 days | 8 days | From signup to first report generated | Sarah |
| % trials activating | 27% | 50% | HubSpot trial activation rate | Marcus |
| CSM config time per trial | 120 min | 30 min | Support ticket resolution time log | Marcus |
| Support queue avg wait | 4.2 days | 1.5 days | Linear ticket age report | Marcus |
| Self-serve rate | 0% | 60% | Quick-start template adoption | Sarah |

---

### 2-Week Sprint Plan

**Week 1: Foundation**
- Mon 10am: Kickoff sync (all owners). Confirm scopes & timelines.
- Mon–Tue: Quick-Start Template ship (Sarah + Raj). Auto-report engine live (Raj).
- Tue–Wed: API guide drafted (Deena). Dashboard shell created (Sarah).
- Wed 3pm: Mid-week checkpoint (15 min). Measure baseline metrics. Any blockers?
- Thu–Fri: Support-Product sync cadence established (Marcus + Sarah). Dashboard populated with live trial data.

**Week 2: Launch & Iterate**
- Mon: All 5 improvements live. New trials onboarded via template.
- Tue–Wed: Monitor support queue, template adoption, report generation time. Daily standup (10 min).
- Thu 2pm: Retro + metrics review. Did we hit targets? What's working? What needs another cycle?
- Fri: Document learnings. Plan next Kaizen cycle (e.g., "Improve paid plan onboarding," "Reduce support volume on X topic").

---

### Next Kaizen Cycle

After this sprint, measure:
- Did trials using template activate 3x faster?
- Is support queue back to <1 day?
- Which trial customer profiles still churn early? (Next cycle focus.)
- What's the next high-pain process to improve?

**Recommended follow-up:** In 2 weeks, run a second Kaizen sprint on "Reduce trial-to-paid friction" (now that activation is fixed, why don't 50% convert?).

---

## Edge Cases

**Edge Case 1: Feedback is vague ("We're just slow")**
→ Push back gently. Ask: "Can you point me to one customer who complained?" or "Show me a ticket that was painful." Kaizen requires data, not feelings.

**Edge Case 2: Root cause requires re-architecture**
→ That's not Kaizen; that's a bigger project. Call it out: "This fix requires 6 weeks and new staffing. Let's find a smaller Kaizen win first, then propose the re-arch separately."

**Edge Case 3: Team says "We've tried this before"**
→ Ask what was different last time. Was it a different tool, wrong owner, no buy-in, or wrong metric? Kaizen often fails because implementation wasn't rigged to succeed, not because the idea was wrong.

**Edge Case 4: Multiple bottlenecks, can't prioritize**
→ Pick ONE problem statement. Run the full analysis on that. Ship it. Then do the next Kaizen sprint on the second problem. Spread it across 3–4 sprints if needed.

**Edge Case 5: Success metric is hard to measure**
→ Pick a proxy. Can't measure "morale"? Measure "avg support tickets per week" or "% team saying process is clearer in survey." Perfection is the enemy of progress.
