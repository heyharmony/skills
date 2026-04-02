---
name: "Run Dogfooding Programs"
description: "Execute a structured dogfooding program to get rapid feedback on new features and identify issues before customers do. What it does: creates a system where your team regularly uses the product in real scenarios and surfaces bugs and insights quickly. When to use it: before major launches, when introducing new features, when onboarding new team members, or during periods of rapid iteration. Trigger on: product feedback loop, internal testing, quality assurance, feature validation, team feedback."
dependencies: []
connectors:
  - name: "Google Drive"
    reason: "Centralized dogfooding session notes, feedback documentation, and tracking"
  - name: "Linear or Jira"
    reason: "Dogfood bugs and findings surface as prioritized issues with clear triage"
  - name: "Slack"
    reason: "Real-time dogfooding feedback channel and urgent issue escalation"
  - name: "Zoom"
    reason: "Recorded dogfooding sessions for asynchronous review and pattern detection"
author: "Harmony"
version: "1.0.0"
icon: "sparkles"
cover: ""
screenshots: []
category: "Product"
---

## Purpose

Using your own product is the fastest feedback loop available. If you discover an issue while actually using your product, you feel the pain immediately — and issues that cause team members pain get fixed fast. The key is making dogfooding deliberate and structured, not ad-hoc.

A good dogfooding program answers a critical question: "If we won't use it, why should customers?" It creates a regular cadence where your team actually works with the product in real scenarios, surfaces bugs before customers encounter them, and provides direct feedback on usability, performance, and feature completeness.

The best dogfooding programs treat internal feedback seriously without confusing personal preference with real product issues. A PM saying "I don't like the color" is different from a PM saying "I can't find the settings menu." The second is a bug. The first is style preference. This skill teaches you how to distinguish between them and create a reliable feedback loop that improves product quality.

## When to Use This

- **Before launching a major feature**: You've built something big and want to catch obvious issues internally before customers see them. Run a structured dogfooding sprint, not just developer testing.

- **Introducing new onboarding or user flows**: New flows are especially prone to confusing UX issues. Get the team through the flow (especially non-product people) before customers do.

- **Building internal tools or behind-the-scenes features**: Features customers don't directly see (admin panels, API integrations, reporting) still affect user experience. Have team members actually complete tasks using them.

- **After a significant redesign or rebuild**: A redesigned interface might be beautiful in design tools but confusing in actual use. Use the product yourself at scale before customers do.

- **Running a high-iteration sprint**: You're releasing small changes weekly. Dogfooding helps you catch issues quickly and validate that small improvements compound into good user experience.

- **Onboarding new team members**: New PMs and designers don't know your product deeply. Have them go through a structured dogfooding exercise — they'll find issues that feel "normal" to long-time users.

- **Addressing a quality crisis**: If customer complaints about bugs or UX are rising, dogfooding sessions often uncover what you're missing. Get your whole team using the product and identifying pain points.

## Instructions

1. **Define dogfooding program goals and decide on cadence**
   - Clarify the goal: Are you launching a new feature and want to find bugs? Or are you building a culture of using your own product?
   - If feature-specific: dogfooding happens before launch, usually 2-4 weeks out
   - If cultural: establish a recurring cadence (weekly dogfooding session, monthly deep dives, etc.)
   - Specify scope: all teams participate, or just product/design/engineering?
   - Document the program so new team members understand why you do it
   - If using Slack, create a #dogfooding channel for async feedback collection

2. **Create concrete dogfooding scenarios based on real customer workflows**
   - Don't dogfood in the abstract. Create specific tasks that mirror how customers actually use your product
   - Examples: "Complete your first project onboarding," "Invite 3 team members and assign tasks," "Integrate with Slack and send your first automated notification"
   - Base scenarios on your customer research, support tickets, and sales conversations
   - Vary scenarios to cover different user personas (new users, power users, occasional users, integrations users)
   - Document each scenario with expected flow and time estimate
   - If using Harmony transcript data, pull from customer calls to understand what workflows matter most

3. **Schedule dogfooding sessions and assign participants strategically**
   - Schedule concentrated sessions (1-2 hours) rather than asking people to dogfood "whenever"
   - Include non-product people — sales, support, and marketing often catch things PMs miss
   - Assign scenarios: pair up participants, give each pair one scenario to work through
   - Create a rule: at least one person per session is using the product for the first time (catches obvious confusions)
   - Time box each scenario so people complete the flow without getting stuck indefinitely
   - Make it low-stress — position as learning, not judgment

4. **Conduct the dogfooding session and capture detailed feedback**
   - Assign a facilitator to observe and take notes
   - Have participants work through their assigned scenario while thinking aloud
   - Capture: what worked smoothly, what confused them, where they got stuck, what took longer than expected
   - Use "I like / I wish / What if" structure to keep feedback constructive
   - For remote sessions, use Zoom to record (with permission) so you can watch and notice patterns later
   - Take screenshots of any UI confusions or surprising workflows
   - Don't interrupt or explain — let them discover issues themselves

5. **Distinguish dogfood bugs from personal preferences and document findings**
   - Create a simple framework to categorize findings:
     - **Real bugs**: Functionality doesn't work as intended, task can't be completed, data is lost or incorrect
     - **UX issues**: Feature works but is confusing, requires too many clicks, contradicts mental models
     - **Performance issues**: Slow load times, laggy interactions, timeouts during normal use
     - **Personal preferences**: "I don't like this color," "I'd use a different icon," "This doesn't match my workflow"
   - Classify each piece of feedback honestly — some are preferences, not issues
   - For each real issue, document: what was the task, what went wrong, how severe is it, can users work around it?
   - Create a shared document (Google Drive or Notion) with findings so the whole team can see what was discovered
   - If using Linear, create tickets for each finding and assign severity tags

6. **Triage findings against your launch timeline and product roadmap**
   - Separate "must fix before launch" from "nice to fix" from "backlog"
   - Critical bugs (users can't complete core tasks) are always "must fix"
   - UX issues might block launch if they block all users, but not if they affect experienced users
   - Personal preferences almost never block launch unless they're consistent across multiple users and indicate a real problem
   - Agree on triage criteria with your team so everyone calibrates the same way
   - Create a prioritization list that the engineering team can immediately start on

7. **Document the rationale for why something is or isn't a real problem**
   - Don't just say "we're not fixing that"
   - Explain: "This feature works as designed, users with strong workflows around it will succeed, it doesn't block core tasks, so it stays in backlog"
   - This documentation helps future dogfooders and reduces debate
   - Share rationale in the same document as findings so decisions are transparent
   - Use this to build a shared language around "what counts as a bug"

8. **Create a feedback-to-fix tracking system and measure cycle time**
   - Document in Linear or Google Drive: date dogfooding feedback identified → date issue fixed → date fix verified in production
   - Track which dogfood findings make it to the shipped product vs. which stay in backlog
   - Measure average time from dogfood discovery to fix (target: critical bugs < 3 days, high bugs < 1 week)
   - Celebrate when dogfood findings get fixed — it reinforces why dogfooding matters
   - Share monthly updates: "We found 24 issues in dogfooding, 18 are already fixed, 6 are prioritized for next sprint"

9. **Iterate on your dogfooding process based on what you learn**
   - After each dogfooding session, ask: What worked well? What was confusing? What scenarios should we add?
   - Track which types of issues dogfooding surfaces most (usability, performance, edge cases?)
   - Refine your scenarios based on real customer feedback and support tickets
   - If certain team members consistently find more issues, involve them more deeply
   - If dogfooding keeps finding the same bug multiple times, improve your bug documentation so it doesn't happen again
   - Use Slack retrospectives to discuss improvements to the dogfooding program itself

## Output Format

When you run a structured dogfooding program, you produce:

```yaml
Dogfooding Program Report:

Program Definition:
  Goal: [Feature launch / Cultural / Quality improvement]
  Cadence: [Weekly sessions / Monthly deep dive / Pre-launch only]
  Scope: [All teams / Product + Design + Eng / Product only]
  Participants this cycle: [Names/roles]

Dogfooding Scenarios Executed:
  Scenario 1: [Name]
    - Description: [What task participants complete]
    - Expected duration: [X minutes]
    - Participants: [Names]
    - Completion status: [Completed / Blocked / Aborted]
    - Time actual: [X minutes]
    - Observations: [What happened, what surprised them]

  [Additional scenarios]

Findings & Triage:
  Real Bugs Found: [X]
    Bug 1:
      - Task: [What they were trying to do]
      - Issue: [What happened]
      - Severity: [Critical / High / Medium / Low]
      - Root cause: [Technical issue / Design confusion / Edge case]
      - Status: [Fixed / In progress / Backlog / Defer]

  UX Issues Found: [X]
    Issue 1:
      - Task: [What they were trying to do]
      - Problem: [What was confusing]
      - Severity: [Critical / High / Medium / Low]
      - Impact: [Affects new users / Power users / Edge cases]
      - Status: [Fixed / In progress / Backlog / Defer]

  Performance Issues Found: [X]
  Personal Preferences (not fixing): [X]

  Total findings: [X]
  Must-fix before launch: [X]
  Can launch with these: [X]

Feedback-to-Fix Tracking:
  Finding: [Description]
    - Found date: [Date]
    - Issue created: [Ticket #]
    - Fix started: [Date]
    - Fixed date: [Date]
    - Verified in prod: [Date]
    - Total cycle time: [X days]

  [Additional findings]

Impact Metrics:
  Average dogfood-to-fix cycle time: [Critical: X days | High: X days | Medium: X days]
  % of dogfood findings that shipped fixed: [X%]
  % of dogfood findings deferred to backlog: [X%]
  Bugs caught before customer use: [X]
  Estimated customer impact prevented: [Description]

Program Refinements:
  What worked well: [List]
  What to improve: [List]
  New scenarios to add: [List]
  Participant feedback: [Notes]
```

## Example

**Scenario: CrowdBuild (collaborative design platform) runs dogfooding before major launch**

CrowdBuild is launching a redesigned comment system with mentions, threading, and reactions. It's a big change and they want to catch issues before their 500+ design teams start using it.

**Step 1-2: Program Planning & Scenarios**

CrowdBuild decides on a 1-week intensive dogfooding sprint. They're launching in 3 weeks, so this is pre-launch dogfooding. Participants: 3 PMs, 2 designers, 2 engineers, 1 customer success manager (gets customer perspective), 1 sales rep (understands user personas).

Scenarios created:
- **Scenario A (New user)**: "Start a new comment thread. Reply to someone's comment with a mention. Add a reaction."
- **Scenario B (Power user)**: "Find an old conversation in a large project. Reply to a specific comment. Resolve a thread."
- **Scenario C (Integration flow)**: "Invite someone to a comment who isn't already in the project. See their mention notification. Add them to the project based on the comment."

**Step 3-4: Session & Capture**

Monday 10am: First dogfooding session. 8 participants break into 4 pairs. Each pair gets a scenario.

**Pair 1 (Sarah, PM + Jamie, Engineer) — Scenario A (New user)**
- Assigns: "Start a new comment thread"
- Sarah opens the design file, finds the comment button... it's not obvious. She hovers around but doesn't immediately see it.
- Jamie: "Oh, it's this icon up here" (points to top right)
- Sarah: "I would never find that without being told"
- Issue flagged: comment button iconography is unclear for new users
- They successfully reply to a comment and mention @ someone
- Mention autocomplete works great — finds the person in 2 keystrokes
- Reactions: they can add emoji reactions easily
- Time: 8 minutes (expected 5 minutes)

**Pair 2 (Alex, Designer + Pat, CSM) — Scenario B (Power user)**
- Assigns: "Find an old conversation in a large project"
- Alex and Pat search for a comment by username... the search function doesn't support that
- They scroll through 100+ comments looking for the thread. This takes 5 minutes.
- Pat (customer perspective): "Our biggest customers have projects with thousands of comments. They'll hate this scroll experience."
- Issue flagged: comment search needs to support searching by username and date
- They resolve a thread successfully
- Time: 15 minutes (expected 8 minutes)

**Pair 3 (Morgan, PM + Casey, Designer) — Scenario C (Integration flow)**
- Assigns: "Invite someone to a comment who isn't in the project"
- They look for an invite-from-comment flow... it doesn't exist
- Current flow: must add user to project first, then mention them
- Morgan: "This is a gap. Users want to pull people into projects via comments, not the other way around"
- Issue flagged: missing feature gap — can't invite someone to project from comment context
- Time: 12 minutes (expected 8 minutes, but blocked halfway through)

**Pair 4 (River, Sales + Taylor, PM) — Scenario A (variant)**
- Same scenario as Pair 1, different participants
- River (sales rep): "I talk to teams every day. They want to resolve comments when they're done. Is that possible?"
- They find the resolve button and use it successfully
- But no notification goes to the commenter that the thread was resolved
- Issue flagged: commenter doesn't know when their feedback was addressed
- Time: 7 minutes

**Step 5-7: Triage & Documentation**

Friday meeting: team reviews all findings. Facilitator created a shared Google Doc with all observations.

Findings:
1. **Comment button is hard to find for new users** (UX Issue - High)
   - Severity: High — new users won't discover comment feature without help
   - Affects: New users only, power users know where it is
   - Decision: Fix before launch — improve button visibility or move to more discoverable location
   - Rationale: This blocks core use case for new users

2. **Can't search comments by username** (Real Bug - High)
   - Severity: High — in large projects, comment search is critical
   - Affects: Power users with large projects (most engaged customers)
   - Decision: Must fix before launch — this was supposed to be in scope
   - Rationale: This will generate support complaints from biggest customers

3. **Can't invite someone to project from comment mention** (Feature Gap - Medium)
   - Severity: Medium — this is a new workflow, not a regression
   - Affects: Teams onboarding people into shared work
   - Decision: Defer to post-launch — add to roadmap for next release
   - Rationale: Feature launch doesn't require this, customers can work around it

4. **Comment resolver isn't notified when thread resolves** (UX Issue - Medium)
   - Severity: Medium — commenter misses closure feedback
   - Affects: Everyone who leaves comments
   - Decision: Fix before launch — this changes the thread interaction model, should close the loop
   - Rationale: Incomplete feedback loop damages trust in comments feature

5. **Comment button icon is unclear** (Preference vs UX - Low)
   - Severity: Low — clear once you know it's there
   - Affects: First-time use only
   - Decision: Defer to post-launch — monitor if this generates support questions
   - Rationale: Tooltip on hover solves this; not worth delaying launch

Summary: 5 findings, 3 must-fix, 1 defer to post-launch, 1 backlog

**Step 8-9: Tracking & Refinement**

CrowdBuild creates Linear tickets for each finding:
- Comment button iconography: Fix in progress, expected 2 days
- Comment search by username: Fix in progress, expected 3 days
- Notify commenter on resolve: Fix in progress, expected 2 days
- Invite from comment: Backlog feature, added to next roadmap cycle

Launch delayed by 5 days (from finding issues to fixing them). But now they launch with confidence that the comment system will work well.

Post-launch metrics:
- Dogfood findings: 5
- Fixed before launch: 3
- Bugs found by customers in first week: 0 (vs. typical 8-12 for major features)
- Customer support questions about comments: minimal
- Comment feature adoption: 95% of teams using comments by week 2

**Program Refinement Note**: CrowdBuild realizes they should have included a customer in the dogfooding session from the start. Adding external users earlier in the process would have surfaced the comment search gap even sooner. They add "include 1-2 friendly customers in major feature dogfooding" to their program going forward.

## Edge Cases

- **Dogfooding finds only minor issues**: This can mean your product is actually good, or it can mean your dogfooding isn't realistic. Check: are your scenarios matching real customer workflows? Are non-product people participating? Are participants using the product fresh, or are they so familiar they skip normal discovery steps?

- **The same person always finds more bugs**: Some people are naturally better at finding issues (they're not afraid to break things, or they're more observant). Pair strong finders with others so their approach rubs off. Don't rely on one person as your entire quality filter.

- **Dogfood feedback conflicts with design intent**: Your designer built the comment button small because they wanted it subtle. But dogfooders can't find it. This is real tension. Resolve by separating "does it work?" from "do I like it?" If users can't find it, it doesn't work. That's not preference, that's failure.

- **You don't have time for structured dogfooding**: "We'll dogfood as we go" usually means dogfooding doesn't happen. Block 2-4 hours for concentrated dogfooding before launch. It saves 10x that time in customer support and fixes post-launch.

- **One team blocks on a bug, won't dogfood**: If a critical bug makes the feature unusable, fix that first, then reschedule dogfooding. But don't skip dogfooding entirely. Known blockers are different from unknown confusions.

- **Customers want to help dogfood**: This is great, but keep it structured. Don't use customer dogfooding as QA outsourcing. Have clear scenarios, document that they're testing pre-launch work (not judging the final product), and give them context on what you're learning.
