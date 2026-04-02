---
name: "Design Growth Loops"
description: "Create self-reinforcing growth cycles where user actions drive product value and attract new users. What it does: maps viral, content, paid, and data loops to identify your core growth engine. When to use it: when acquisition feels stalled or you need sustainable growth beyond paid spend. Trigger on: growth slowing, CAC rising, viral coefficient, loop design, user-generated content, network effects."
dependencies: []
connectors:
  - name: "Slack"
    reason: "Track team conversations about growth strategies and loop experiments discussed in meetings"
  - name: "Google Analytics"
    reason: "Measure loop velocity - track conversion rates between loop stages (action → output → reinvestment)"
  - name: "Salesforce"
    reason: "Segment users by loop type participation to measure revenue impact of growth loop activation"
author: "Harmony"
version: "1.0.0"
icon: "sparkles"
cover: ""
screenshots: []
category: "Product"
---

## Purpose

A growth loop is a self-reinforcing cycle: user takes action → creates output → attracts new users → new users repeat the cycle. Unlike linear funnels that require constant external acquisition fuel, loops compound internally. Your job is to identify, design, and measure growth loops that align with your product's natural user behaviors.

The best companies have multiple reinforcing loops working in parallel. Pinterest compounds through visual discovery loops. Slack compounds through team dependency. Slack also has viral recruitment loops when teams expand. PayPal had referral loops (get $10 credit for adding friends). Dropbox had install loops (earn free storage for each referral who installs).

The gap between explosive growth and plateau is often the difference between a linear funnel mindset and a loop mindset.

## When to Use This Skill

- You're analyzing why user growth has hit a ceiling despite increasing ad spend
- You're designing a new feature and want it to fuel user acquisition through natural viral mechanics
- You're struggling with CAC (customer acquisition cost) and need organic growth channels
- You're reviewing competitor growth and want to reverse-engineer their loop structures
- You're identifying which product behaviors create network effects or viral moments
- You're measuring whether usage naturally leads to new user recruitment
- You're building a data product where historical usage attracts higher-quality users

## Instructions

1. **Map your user journey and identify the atomic action**
   - What's the single action that powers the loop? (e.g., "share a pin," "invite teammate," "write a post")
   - This must be core to your product, not a secondary feature
   - Sub-bullets: Review transcript mentions of how users describe their most impactful action; look for repeated verbs (create, share, discover, invite)

2. **Identify loop type(s) and their mechanics**
   - Viral loops: product use generates invitations (inherent in network effects)
   - Content loops: user-generated content becomes discoverable, attracting new users
   - Paid loops: revenue from current users funds acquisition of next-tier users
   - Data loops: historical usage improves product recommendations, creating better experiences that drive retention and referral
   - Sub-bullets: Map which types already exist in your product; assess which are underdeveloped; prioritize one or two to optimize first

3. **Define the loop input and output**
   - Input: What triggers the action? (friction point or natural moment)
   - Action: The atomic behavior
   - Output: What does this action create or enable? (social proof, content asset, saved data, network expansion)
   - Sub-bullets: Use transcripts to understand when users naturally perform the action; identify barriers preventing input; measure output quality

4. **Measure loop efficiency and velocity**
   - Cycle time: How long from input to new user signup? (fast loops: hours/days; slow loops: weeks/months)
   - Conversion rate: % of actions that lead to new user recruitment
   - Reinvestment rate: If 100 actions occur, how many new users join and re-activate the loop?
   - Viral coefficient: If viral loop, each user recruits how many new active users? (>1.0 = exponential growth)
   - Sub-bullets: Pull data from analytics; segment by user cohort; identify leakage points; compare loop efficiency to paid CAC

5. **Design experiments to strengthen the loop**
   - Reduce friction in input phase (make the action easier to trigger)
   - Increase incentive to perform action (social credit, utility gain, status)
   - Improve output quality (ensure content/invitation/data is compelling)
   - Amplify viral reach (make sharing/discovery more visible to network)
   - Sub-bullets: A/B test invitations messaging; analyze which outputs get most shares; measure impact on loop velocity; iterate

6. **Identify loop leakage and fix it**
   - Where do users drop off? (action not taken → output not created → new user doesn't convert)
   - Common leakage: friction in sharing, weak incentives, poor output discoverability
   - Sub-bullets: Map each stage; measure drop-off rates; prioritize fixing the stage with highest loss

7. **Build multi-loop strategy**
   - Map all existing loops (viral, content, paid, data)
   - Rank by current contribution to growth and potential
   - Identify which loops reinforce each other (compounding)
   - Sub-bullets: Assess which loops are mature vs. dormant; design 1-2 new loops to activate; avoid starting too many at once

8. **Document loop mechanics for team alignment**
   - Create simple visual diagram: input → action → output → new user → repeat
   - Define metrics for each stage (conversion, velocity, viral coefficient)
   - Establish targets (e.g., viral coefficient 1.2x, 7-day cohort retention 40%)
   - Sub-bullets: Share with product, marketing, data teams; update quarterly as loop evolves

## Output Format

```
GROWTH LOOP ANALYSIS
====================

Product/Feature: [Name]
Primary Loop Type: [Viral | Content | Paid | Data | Hybrid]
Analysis Date: [Date]

---

LOOP MECHANICS

Input Trigger:
- What initiates the action?
- Friction level (1-10, 10 = highest friction):
- Natural frequency per active user:

Atomic Action:
- Core behavior:
- User motivation (intrinsic vs. extrinsic):
- Time to completion:

Output Created:
- What's produced by the action?
- Quality/virality potential (1-10):
- Persistence (temporary or permanent asset?):

New User Path:
- How does output attract new users?
- Discovery mechanism (search, social, recommendation):
- Conversion rate (output viewers → new signups):

---

LOOP EFFICIENCY METRICS

Cycle Time: [X days] (input to new user signup)
Reinvestment Rate: [X%] (% of actions that fuel new users)
Viral Coefficient: [X.Xx] (each user recruits X new active users)
Leakage Points: [Stage with highest drop-off] ([Y]% loss)
Current Monthly Loop-Driven Growth: [X%]

---

LOOP LEAKAGE ANALYSIS

Stage 1 - Input Generation:
- Current conversion rate:
- Top friction barriers:
- Optimization potential:

Stage 2 - Action Completion:
- Current completion rate:
- Why users stop:
- Proposed friction reducers:

Stage 3 - Output Quality:
- Current output virality:
- Discoverability score:
- Improvement opportunities:

Stage 4 - New User Conversion:
- Current signup rate from output viewers:
- Barriers to conversion:
- Activation steps needed:

---

COMPETITIVE LOOP BENCHMARKS

[Competitor A] Loop Type: [Type]
- Viral coefficient: [X.Xx]
- Cycle time: [Y days]
- What makes it effective:

[Competitor B] Loop Type: [Type]
- Viral coefficient: [X.Xx]
- Cycle time: [Y days]
- What makes it effective:

---

LOOP STRENGTHENING EXPERIMENTS (Priority Order)

Experiment 1: [Reduce friction in action | Improve output quality | Amplify discoverability | Other]
- Hypothesis:
- Metric to track:
- Success threshold:

Experiment 2:
- Hypothesis:
- Metric to track:
- Success threshold:

---

MULTI-LOOP STRATEGY

Current Loops Status:
1. [Loop A]: [Viral Coefficient] | Maturity: [Emerging/Growing/Mature] | Priority: [High/Medium/Low]
2. [Loop B]: [Viral Coefficient] | Maturity: [Emerging/Growing/Mature] | Priority: [High/Medium/Low]

Dormant Loops (Opportunity):
- [Loop C]: Why it's underdeveloped, activation potential

Next New Loop to Design:
- Type:
- Atomic action:
- Expected cycle time:
- Activation timeline:

---

TEAM ALIGNMENT & TARGETS

Loop Owners: [Teams responsible for each stage]
Quarterly Targets:
- Viral coefficient target: [X.Xx]
- Cycle time target: [Y days]
- Loop-driven growth target: [Z%] of total user growth

Monthly Review Cadence: [Date/Frequency]
Key Metrics Dashboard: [Link to internal tracking]
```

## Example

```
GROWTH LOOP ANALYSIS
====================

Product/Feature: TaskFlow Workspace Collaboration
Primary Loop Type: Hybrid (Viral + Data + Paid)
Analysis Date: March 2026

---

LOOP MECHANICS

Input Trigger:
- What initiates the action? Team member completes first project and TaskFlow suggests inviting collaborators
- Friction level (1-10): 3 (one-click invite)
- Natural frequency per active user: 1-2 invites per month

Atomic Action:
- Core behavior: Invite teammate via email or Slack
- User motivation: Complete project faster, share workload, get team feedback
- Time to completion: 30 seconds

Output Created:
- What's produced by the action? Invitation with project preview showing team progress/milestones
- Quality/virality potential: 8/10 (previews FOMO of missing ongoing work)
- Persistence: Permanent (invitation remains valid until accepted)

New User Path:
- How does output attract new users? Invitation emails land in team member inboxes, previews current project status and open tasks
- Discovery mechanism: Email + Social (Slack workspace mentions)
- Conversion rate: 62% (teammate opens invite, 38% sign up immediately, rest convert after seeing project value)

---

LOOP EFFICIENCY METRICS

Cycle Time: 4 days (invite sent to new user active in platform)
Reinvestment Rate: 34% (of invites, teammates sign up and become active within 7 days)
Viral Coefficient: 1.4x (each active user recruits 1.4 new users per quarter on average)
Leakage Points: Email delivery / non-open rate (22% loss)
Current Monthly Loop-Driven Growth: 28% of new enterprise signups

---

LOOP LEAKAGE ANALYSIS

Stage 1 - Input Generation:
- Current conversion rate: 47% (active users who trigger invite suggestion accept it)
- Top friction barriers: Users don't realize they can invite; feature buried in settings; batch invites require CSV upload friction
- Optimization potential: Surface invite in project completion flow, pre-populate team roster from company email domain

Stage 2 - Action Completion:
- Current completion rate: 92% (invites initiated → actually sent)
- Why users stop: Uncertainty about which teammates to invite; need approval for budget teams
- Proposed friction reducers: "Smart suggest" shows likely collaborators; one-click bulk domain invites for same company

Stage 3 - Output Quality:
- Current output virality: 8/10 (project preview in invite email is compelling, shows momentum)
- Discoverability score: 7/10 (lands in inbox, but email filters catch 22%; Slack mentions are discoverable)
- Improvement opportunities: A/B test subject lines; add visual progress bar to email preview; enable calendar integration to show meeting conflicts

Stage 4 - New User Conversion:
- Current signup rate from output viewers: 38% (email openers → signup)
- Barriers to conversion: Lack of authentication option (password fatigue); unfamiliar with how this project relates to their work
- Activation steps needed: SSO login option; email preview should mention inviter's name + project context

---

COMPETITIVE LOOP BENCHMARKS

[Asana] Loop Type: Viral + Workspace Network Effects
- Viral coefficient: 1.5x-1.8x
- Cycle time: 3 days (invite → activation)
- What makes it effective: Workspace is mandatory for team collaboration; projects visible to all members; invites embedded in interface everywhere

[Notion] Loop Type: Content + Data
- Viral coefficient: 1.3x
- Cycle time: 7 days (shared doc → collaborator signup)
- What makes it effective: Shared pages are deeply embeddable; viewers can immediately contribute; free tier removes barrier

---

LOOP STRENGTHENING EXPERIMENTS (Priority Order)

Experiment 1: Smart Collaborator Suggestions
- Hypothesis: Pre-populating invite list with ML-suggested teammates increases invite completion rate by 25%
- Metric to track: % of users who accept suggestion (vs. manual invite)
- Success threshold: >60% accept rate; cycle time remains <4 days

Experiment 2: Domain-based Auto-Invite
- Hypothesis: One-click bulk domain invites (@company.com) increase reinvestment rate by 18%
- Metric to track: Bulk invites sent; signup rate from bulk-invited users vs. individual
- Success threshold: 40% of enterprise users perform bulk invite; 35%+ signup rate

Experiment 3: Email Subject Line Optimization
- Hypothesis: Changing subject from "You're invited to TaskFlow" to "[Name] invited you to [ProjectName]" increases open rate by 15%
- Metric to track: Email open rate; downstream conversion to signup
- Success threshold: >45% open rate; 40%+ signup rate

---

MULTI-LOOP STRATEGY

Current Loops Status:
1. Viral (Team Invites): 1.4x | Maturity: Growing | Priority: High (biggest driver currently)
2. Data (Recommendation Engine): 0.9x | Maturity: Emerging | Priority: Medium (not yet self-reinforcing)
3. Paid (Enterprise expansion): 1.2x | Maturity: Mature | Priority: Medium (dependency on sales team)

Dormant Loops (Opportunity):
- Content Loop (Template Sharing): Teams create/share project templates, templates attract new users. Currently dormant; zero template discovery mechanism. Activation potential: High (competitor advantage, low build cost)

Next New Loop to Design:
- Type: Content (Community Templates)
- Atomic action: Users publish project templates to community gallery
- Expected cycle time: 14 days (template published → discovered by new user → adopted → team signup)
- Activation timeline: Q2 2026 (template gallery launch + discovery algorithm)

---

TEAM ALIGNMENT & TARGETS

Loop Owners:
- Input Generation: Product (UX surfaces invites at right moments)
- Atomic Action: Growth (incentive design, templates)
- Output Quality: Product (preview rendering, messaging)
- New User Conversion: Marketing (email optimization) + Product (SSO, onboarding)

Quarterly Targets:
- Viral coefficient target: 1.6x (Q2), 1.8x (Q3)
- Cycle time target: 3.5 days
- Loop-driven growth target: 35% of new monthly signups by end of Q2

Monthly Review Cadence: First Tuesday of month
Key Metrics Dashboard: [Internal Looker link]
```

## Edge Cases

- **High friction inputs**: If the atomic action rarely occurs naturally, the loop can't scale. Solution: Gamify or incentivize the input, or reconsider your atomic action.

- **Leakage at scale**: Loops that work for 1,000 users may break at 100,000 if discovery algorithms don't scale. Solution: Monitor viral coefficient by cohort size; invest in algorithmic discovery.

- **Multiple loop interference**: Running too many loop experiments simultaneously creates noise. Track each loop independently with separate test groups.

- **Paid loop exhaustion**: If loop depends on high CAC reinvestment, revenue constraints limit growth. Shift priority to organic loops once paid growth plateaus.

- **Network effects plateau**: Some products hit a saturation point where most relevant users are already in the loop. Solution: Design expansion loops (e.g., teams → larger organizations, geographic expansion).

- **Cultural misalignment**: If loop requires virality but your user base prefers privacy, loop won't achieve target coefficient. Solution: Segment users; design loop variants for different personas.
