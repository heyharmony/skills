---
name: "Run Product Operations"
description: "Execute product operations strategy to standardize processes, manage metrics infrastructure, and route customer feedback. What it does: builds systems that scale PM decision-making across teams and codify best practices. When to use it: launching new product processes, setting up cross-functional handoffs, establishing experiment tracking, reducing cycle time, and ensuring consistent feedback routing. Trigger on: process mapping, metrics framework, launch standardization, cross-functional alignment, feedback triage."
dependencies: []
connectors:
  - name: "Salesforce"
    reason: "Customer feedback data, pipeline velocity metrics, sales handoff timing"
  - name: "GitHub"
    reason: "Engineering process metrics, deployment frequency, cycle time from commit to production"
  - name: "Linear"
    reason: "Issue tracking, sprint metrics, team workload distribution, velocity trends"
  - name: "Slack"
    reason: "Cross-functional communication patterns, feedback channel activity, team collaboration signals"
author: "Harmony"
version: "1.0.0"
icon: "sparkles"
cover: ""
screenshots: []
category: "Product"
---

## Purpose

Product operations is the connective tissue that enables product teams to scale. It's the infrastructure that lets one PM's judgment become a system that shapes decisions across the entire organization. Rather than the PM being the bottleneck in every decision, product ops encodes their decision-making into processes, playbooks, and dashboards that distribute good judgment across the team.

This skill helps you build product operations capabilities that remove friction from how your organization ships. That means standardizing how launches happen, creating systems where customer feedback automatically routes to the right PM, establishing metrics everyone trusts, and identifying bottlenecks before they slow you down.

## When to Use This

- **Standardizing your launch process**: Your teams are launching features inconsistently—some with pre-launch customer validation, others without. You need one repeatable playbook.
- **Establishing a feedback funnel**: Customer feedback arrives in email, Slack, calls, survey platforms. You have no system for deciding what matters or where it goes.
- **Building a metrics infrastructure**: Everyone agrees cycle time matters, but people are measuring it differently. You need a single source of truth.
- **Creating cross-functional handoffs**: The handoff from PM to engineering takes two weeks of meetings. The handoff from product to sales GTM is unclear. Friction is high.
- **Tracking experiment velocity**: You're running experiments but have no visibility into how many you're running, how long they take, or what you're learning.
- **Identifying process bottlenecks**: Work is moving through your organization slowly but you're not sure where the slowdown is. You need data to point at the problem.
- **Building decision-making playbooks**: Your senior PMs have strong judgment, but that judgment isn't documented. New PMs have to reverse-engineer how decisions get made.

## Instructions

1. **Map your current product delivery workflow from idea through customer use**
   - Walk through your last 5 launches end-to-end
   - Document each stage: discovery, spec, review, build, test, launch, monitor
   - Identify who participates at each stage and how long each stage takes
   - Note where decisions stall, where communication breaks down, where rework happens
   - If you have Harmony transcript data, pull speaker attribution from cross-functional meetings to see who's actually involved in which decisions

2. **Define standardized process stages and minimum criteria for each stage**
   - Agree with leadership on 4-6 core stages (e.g., Discovery > Spec > Dev > Launch > Measure)
   - For each stage, define "definition of done" — what must be true to move to the next stage
   - Document required inputs to each stage and expected outputs
   - Assign decision-makers and approvers explicitly
   - Create a one-page visual template teams can reference while shipping

3. **Establish your metrics framework and identify the systems you need**
   - List the metrics that matter for your business and product (cycle time, deployment frequency, feature adoption, retention impact)
   - Map those metrics to data sources (GitHub for deployment frequency, product analytics for adoption, Salesforce for customer fit)
   - Decide which metrics go on which dashboard for which audience (exec dashboard, PM dashboard, team dashboard)
   - If using connectors like GitHub and Linear, pull historical data to establish baselines
   - Create a metrics dictionary — one definition of "cycle time" that everyone uses

4. **Build your feedback routing system and intake process**
   - Identify all feedback sources: customer calls, support tickets, surveys, community forums, sales insights, feature requests
   - Create a triage framework: What's a bug? What's a feature request? What's strategic feedback? What's noise?
   - Define how feedback gets tagged and routed (e.g., "mobile performance issue" → goes to mobile team PM)
   - If using Slack, create a structured intake channel where feedback arrives in a consistent format
   - Document SLAs for feedback acknowledgment (e.g., feature request gets triaged within 48 hours)

5. **Design your launch checklist and pre-launch validation flow**
   - Build a template that specifies: customer interview count, analytics event setup, sales enablement materials, communication timeline, rollout strategy
   - Include gating criteria: "Can't launch without 5+ customer conversations confirming the problem"
   - Define rollout options: big bang, phased by user segment, region, or cohort
   - Create a sign-off process: PM, eng lead, and one other stakeholder must approve
   - Make the checklist visible and trackable (use Linear or Notion if available)

6. **Set up experiment tracking infrastructure and cadence**
   - Document your current experiment velocity: how many experiments per month, average duration, completion rate
   - Create an experiment registry that tracks: hypothesis, success criteria, duration, owner, learnings
   - Establish a regular cadence for experiment reviews (weekly or bi-weekly)
   - Define who decides experiment prioritization and resource allocation
   - If using Google Analytics or product analytics, ensure experiment results automatically populate the registry

7. **Create and document playbooks for recurring decisions**
   - Identify your most frequent decisions: Should we add this feature? Should we fix this bug? Should we ship this now or wait? When do we sunset features?
   - For each decision type, document: Who decides? What information do they need? What criteria do they use? What's the timeline?
   - Include real examples from your backlog to make the playbook concrete
   - Share playbooks in a searchable location (Confluence, Notion, or wiki)
   - Update playbooks quarterly based on what you learn from using them

8. **Implement a weekly cadence to surface bottlenecks and health metrics**
   - Schedule a 30-minute product ops sync with PM leads, eng leadership, and a designer
   - Review your core metrics: cycle time, deployment frequency, feedback volume, experiment velocity
   - Highlight flagged bottlenecks: Where did things take longer than expected? Where is feedback piling up?
   - Discuss one process change per week based on what the data shows
   - Document decisions and track follow-up actions

9. **Measure and communicate the impact of your ops improvements**
   - After implementing a process change, measure the impact: Did this reduce cycle time? Did this improve feedback routing?
   - Track productivity metrics over time to show your ops work is generating value
   - Share quarterly reports showing: cycle time trends, experiment velocity, feature adoption rates, customer satisfaction trends
   - Celebrate wins with the full team so people understand why processes matter
   - Use data to make the case for continued investment in product ops infrastructure

## Output Format

When you run product operations effectively, you produce:

```yaml
Product Operations Execution Report:

Current State Assessment:
  Launch Process:
    - Current cycle time (concept to customer): [X weeks]
    - Average time in each stage: Discovery [X days] | Spec [X days] | Dev [X days] | Launch [X days]
    - Process variation: [High/Medium/Low] — Teams follow the process differently
    - Top bottleneck: [Description]

  Feedback Infrastructure:
    - Sources currently tracked: [List]
    - Sources untracked: [List]
    - Average triage time: [X days]
    - Feedback reaching product leadership: [%]

  Metrics & Visibility:
    - Metrics currently tracked: [List]
    - Metrics available but not tracked: [List]
    - Dashboards in use: [List]
    - Single source of truth for [metric]: [Yes/No]

  Cross-Functional Handoffs:
    - Time in PM-Eng handoff: [X days/hours]
    - Time in Product-Sales handoff: [X days/hours]
    - Rework rate due to unclear specs: [%]

Standardized Processes & Playbooks:
  Launch Playbook:
    - Stage 1: [Name] | DoD: [Criteria] | Owner: [Role] | SLA: [X days]
    - Stage 2: [Name] | DoD: [Criteria] | Owner: [Role] | SLA: [X days]
    - [Additional stages]
    - Gating criteria before launch: [List]
    - Post-launch monitoring plan: [Details]

  Feedback Routing Framework:
    - Source: [Channel] → Triage: [Criteria] → Route to: [Owner] → SLA: [Timeline]
    - [Additional source mappings]

  Metrics Dictionary:
    - Cycle Time: [Definition] | Source: [System] | Audience: [Who views it]
    - Deployment Frequency: [Definition] | Source: [System] | Target: [Benchmark]
    - [Additional metrics]

Infrastructure & Tooling:
  Dashboards Created:
    - Executive dashboard: [Metrics included]
    - PM dashboard: [Metrics included]
    - Team dashboard: [Metrics included]

  Automation Implemented:
    - Feedback tagging: [Automated/Manual]
    - Metrics population: [Automated/Manual]
    - Weekly report generation: [Automated/Manual]

Success Metrics (30-90 Day Impact):
  - Cycle time change: [X% reduction]
  - Deployment frequency change: [X% increase]
  - Feedback routing SLA compliance: [X%]
  - Experiment velocity: [X experiments/month]
  - Team perception of process clarity: [X/10]
  - Time spent in admin vs. decision-making: [Baseline → Target]
```

## Example

**Scenario: TechFlow (B2B project management software) runs product operations audit**

TechFlow's CEO noticed product launches are slowing down—features that should ship in 6 weeks are taking 12. They have customer feedback in three different Slack channels and a shared email inbox. Two engineering teams launch on different schedules. The metric "cycle time" means different things to different people.

The VP of Product initiates a product ops engagement:

**Step 1-2: Process Mapping & Standardization**

TechFlow audits their last 5 launches. They discover:
- Team A (Integrations) takes 8 weeks: 2 weeks discovery → 1 week spec → 4 weeks dev → 1 week launch
- Team B (Automation) takes 4 weeks: 3 days discovery → 2 days spec → 3 weeks dev → 3 days launch
- No standard for what "done discovery" or "done spec" means
- PM Sarah sometimes reviews designs, sometimes skips design review
- Engineering sometimes gets specs via email, sometimes via Jira, sometimes verbally in standup

They create a standardized playbook:
```
1. Discovery (5 days max)
   - DoD: 3+ customer conversations confirming problem
   - Spec includes: problem statement, success metric, edge cases
   - Owner: PM, sign-off from Head of Product

2. Design & Spec (5 days max)
   - PM and Designer review together, iterate with eng lead
   - DoD: engineering can estimate the work without questions
   - Spec lives in Linear, visible to all teams

3. Development (varies by scope)
   - Eng lead confirms scope, creates ticket breakdown
   - Automated SLA: once spec approved, engineering starts within 1 day

4. Review & Launch
   - Pre-launch: 2+ customer conversations validating the solution
   - Launch: coordinated comms, sales enablement, monitored rollout
```

Result after 3 months: Team A now ships in 6.5 weeks (standardized earlier in process), Team B maintains 4-week velocity, but both teams follow the same definition of "done."

**Step 3-4: Metrics & Feedback Routing**

TechFlow pulls current state:
- Salesforce shows 47 customer issues logged last month
- GitHub shows 23 "customer feedback" issues across 5 repos with no routing logic
- Slack has feedback scattered across #product, #sales-input, #bugs-reported
- Metrics tracked: revenue, ARR (but not cycle time, feature adoption, or churn impact)

They implement:
- **Feedback intake template in Slack** (one channel, #product-feedback):
  ```
  Feedback type: [Bug / Feature / Strategy / Pricing]
  Customer: [Name]
  Impact: [One customer / Segment / Market-wide]
  Priority: [Critical / High / Medium / Low]
  Route to: [Mobile PM / API PM / Design lead]
  ```
- **Metrics dashboard** showing:
  - Cycle time by team (currently: 6.5 wks vs 4 wks, targeting parity)
  - Deployment frequency (1x/week target)
  - Feature adoption curve (% of users engaging with feature in week 1, 4, 12)
  - Churn impact by feature (do users who adopt feature X have lower churn?)

**Step 5-8: Launch Checklist, Experiment Tracking, Playbooks, Weekly Sync**

TechFlow creates:
- **Launch checklist** (now in Linear, part of every feature ticket):
  ```
  Pre-launch validation: 3+ customer conversations ✓
  Analytics instrumented: Metrics defined in Amplitude ✓
  Sales enablement: One-pager and demo video ✓
  Customer communication: Email draft in Notion ✓
  Rollout plan: 25% → 50% → 100% over 2 weeks ✓
  ```
- **Experiment registry**: TechFlow runs 1-2 experiments/month. New registry tracks hypothesis, metric, winner/loser, learnings. Reviewed bi-weekly.
- **Decision playbooks**:
  - "When do we ship a feature vs. wait?" → Playbook: if 3+ customers ask and retention impact is positive, ship. If only 1 customer, defer unless strategic.
  - "When do we fix a bug?" → Playbook: Critical bugs (users can't complete core task) ship same day. High bugs ship in sprint. Medium/Low bugs go to backlog.
- **Weekly ops sync** (30 min, Tuesdays 11am):
  - Review metrics: cycle time trending down ✓, deployment frequency stable at 1x/week, 60% of feedback processed in 48hrs
  - Surface bottleneck: Design review is taking 4 days (longer than target 2 days). Decision: add senior designer to review queue.

**Results (90 days in)**
- Cycle time: down from 9 weeks avg to 6.5 weeks across both teams
- Feedback response time: 85% triaged within 48 hrs (was ad-hoc)
- Experiment velocity: running 3-4 experiments/month (was 1-2)
- Team satisfaction: "I know what 'done' means and when my feature ships" (was vague)

## Edge Cases

- **You have highly specialized workflows**: Not all features fit your standard process. Create a "fast track" for critical bugs (bypass design review) and a "strategic track" for multi-quarter initiatives (extend timeline, add more stakeholder input). Document when each applies.

- **Feedback volume overwhelms your system**: Triage becomes a bottleneck when you receive 100+ feedback items weekly. Solution: implement tiered triage (auto-categorize by keyword, route to PM, they decide if it needs strategic discussion) and define what feedback never reaches PMs (duplicates, product misuse).

- **Engineering's metrics conflict with PM's metrics**: Engineering measures code review time (wants short cycles). PM measures customer validation (wants longer discovery). Align on shared outcome metrics (cycle time, experiment velocity) rather than input metrics.

- **You have no baseline for "good" cycle time**: Different industries have different benchmarks. B2B APIs might be 8-week cycles. Consumer products might be 2-week sprints. Set benchmarks based on your industry and iteration cadence, not absolute numbers.

- **Process becomes the bottleneck**: If your ops team is reviewing every feature, slowing things down, you've built bureaucracy, not operations. The goal is to encode good judgment so PMs and engineers move faster, not to add approval layers. Keep processes minimal.

- **Leadership doesn't commit to the new process**: If your CEO or CTO doesn't follow the launch checklist, the rest of the team won't either. Operations only works if leadership models it. Make sure you have exec buy-in before rolling out.
