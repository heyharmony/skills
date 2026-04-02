---
name: "Design for Behavior Change"
description: "Create products that change what users do, not just inform them. Apply the Fogg Behavior Model: change = motivation × ability × prompt. Reduce friction relentlessly. Design for habits through triggers and variable rewards. Use defaults, social proof, and loss aversion strategically. Nudge, don't force. Trigger on: feature design, product launch, onboarding flow, engagement plateau, conversion optimization, habit formation."
dependencies: []
connectors:
  - name: "Slack"
    reason: "Gather behavioral data from real user conversations and chat interactions"
  - name: "Notion"
    reason: "Document behavior change hypotheses, design decisions, and friction audit results"
  - name: "Google Analytics"
    reason: "Track behavior change metrics: adoption rates, feature usage, habit formation, churn patterns"
  - name: "Asana"
    reason: "Prioritize friction points to address based on behavioral impact"
author: "Harmony"
version: "1.0.0"
icon: "sparkles"
cover: ""
screenshots: []
category: "Product"
---

## Purpose

Products succeed when they change user behavior. Features don't matter if nobody uses them. The difference between a product that sits unused and one that becomes a habit is behavioral design. The Fogg Behavior Model teaches that behavior change requires three elements: motivation (why should I do this?), ability (how easy is it?), and a prompt (what reminds me to do it?). All three must be present. Most products invest heavily in motivation (marketing, value proposition) but ignore ability (friction) and prompts (habits). This skill teaches you to design products that move the needle on actual behavior, not just feature sets.

## When to Use

- **Designing a new feature**: Before you build, identify what behavior you want to change and verify all three elements of Fogg's model are present
- **Onboarding new users**: Your first 5 minutes with a user determine whether they form a habit. Design the critical path ruthlessly.
- **Plateauing engagement**: If adoption is stalled, it's usually because friction is too high or the habit loop is broken
- **Reducing churn**: Users don't leave because they don't understand the feature; they leave because they never developed a habit of using it
- **Improving conversion rates**: Every step of the funnel should reduce friction, not add it. Audit every form field, every screen, every decision point.
- **Building social features**: Leverage social proof and peer behavior to amplify adoption. Don't assume features will drive adoption without social scaffolding
- **Designing a mobile app**: Mobile has extreme friction constraints (battery, storage, data, cognitive load). Every unnecessary screen costs users

## Instructions

1. **Map the desired behavior and identify what's currently preventing it**
   - State the behavior clearly: "users run a retrospective meeting weekly" or "users review their spending weekly"
   - Describe the current state: what do users do now instead? Are they doing it manually? Using a competitor? Not doing it at all?
   - Identify the friction points: what stops users from doing the desired behavior? Login friction? Too many steps? Unclear how to start?
   - Separate true friction from false friction: is it actually hard, or do users just not believe it's worth doing?

2. **Assess motivation for the desired behavior**
   - Does the user understand the benefit? Can you articulate it in one sentence?
   - Is the benefit credible? Or does it feel like marketing?
   - How quickly does the user see the benefit? (Immediate or delayed? Immediate is much stronger)
   - Use loss aversion strategically: frame the benefit as "avoid losing X" not "gain X"
   - Test: show the value prop to 10 target users. Do they believe it's worth their time?
   - If motivation is low, stop—no amount of friction reduction will fix a product nobody believes in

3. **Audit friction ruthlessly: count the steps and decision points**
   - List every step required to achieve the behavior: click here, enter this, wait for this
   - Every step is friction. Every form field is friction. Every unclear next step is friction.
   - Category A friction: mandatory (authentication, core interaction). Category B friction: optional (upsell, information, configuration)
   - Eliminate all Category B friction before the first core behavior. You can add it later, after the habit is formed.
   - Test: can a user achieve the behavior in under 30 seconds on their first try? If not, friction is too high.
   - Benchmark: how many steps does the competitor require? How many steps does the manual process require?

4. **Design for ability: make the behavior absurdly easy**
   - Progressive disclosure: don't show all options upfront. Show the critical path, hide advanced settings.
   - Smart defaults: most people never change defaults. Choose the default that matches the most common desired behavior.
   - Shortcuts: can power users skip steps? Can you predict and pre-fill information?
   - Mobile-first: if it's hard on mobile, it's too hard. Test on a small phone.
   - Context-sensitive help: don't explain in a general help doc. Explain right where the user is confused.
   - Example: Slack's onboarding doesn't ask about integrations or advanced settings. It asks one question: what's your team working on?

5. **Design the prompt and habit loop**
   - Identify the trigger: what reminds the user to do this behavior? Is it time-based (daily), event-based (after stand-up), or in-app (when they see their dashboard)?
   - Internal triggers are stronger than external: does the user think "I should check my metrics" or do they need an email reminder?
   - Variable rewards are stronger than fixed: surprise and delight (Slack's emoji reactions, Twitter's heart) create habit faster than predictable rewards
   - Social proof amplifies habits: show what others are doing (peers, experts, the "crowd")
   - Test: does the user come back without external prompts? If they need email reminders after 30 days, the habit hasn't formed

6. **Leverage social proof and defaults strategically**
   - Show peer behavior: "3 of your teammates have completed their retrospectives" is stronger than "retrospectives help your team"
   - Make the desired behavior the default: check the "attend the meeting" box by default, not the "decline" box
   - Show activity: if others are using the feature, show that. Empty state (no activity) signals "nobody uses this"
   - Use reverse social proof carefully: "10% of teams check their spending" could mean "spending tracking is rare and weird" not "it's popular"
   - Test: does visibility of peer behavior increase adoption? Measure before and after showing activity

7. **Test behavior change with real users and iterate**
   - Define success metric: is it adoption? Daily active usage? Habit formation (returning without external prompt)? Behavior change (actually doing the desired action)?
   - Run a small cohort test: 50-100 users, measure the behavior, not just engagement
   - Identify drop-off points: where do users abandon the critical path? (First screen? Second interaction? After one week?)
   - Iterate: reduce friction at the highest drop-off point, then test again
   - Document what changes behavior and what doesn't—this becomes your product design philosophy

## Output Format

```
=== BEHAVIOR CHANGE DESIGN ===

DESIRED BEHAVIOR
[What do you want users to do? Be specific: "check expense reports weekly" not "use the app more"]

CURRENT STATE
[What do users do now? What's stopping them from your desired behavior?]

MOTIVATION ASSESSMENT
Value proposition: [1-sentence benefit that matters to users]
Time to value: [How quickly do users see the benefit? Immediate or delayed?]
Loss frame: [How does it feel to NOT do this? What do users lose?]
Credibility: [Do target users believe this benefit? What would convince them?]

FRICTION AUDIT
Steps to achieve behavior:
1. [Step]. Friction level: [Low/Medium/High]. Eliminate? [Y/N]
2. [Step]. Friction level: [Low/Medium/High]. Eliminate? [Y/N]
3. [Step]. Friction level: [Low/Medium/High]. Eliminate? [Y/N]

Target: [X] steps max to achieve core behavior (benchmark: [competitor] requires [Y] steps)

ABILITY DESIGN
Feature: [What makes this behavior easy?]
Mechanism: [How does it work?]

Progressive disclosure: [What's hidden by default? When is it revealed?]
Smart defaults: [What's the default? Why that one?]
Shortcuts: [How do power users skip steps?]
Mobile optimization: [How does this work on a 5-inch phone?]

PROMPT AND HABIT LOOP
Trigger: [What reminds users to do this behavior?] Type: [Time-based/Event-based/In-app?]
Behavior: [The desired action]
Variable reward: [What's the reward? Is it surprising or predictable?]

SOCIAL PROOF STRATEGY
Peer visibility: [Do users see what their peers are doing?]
Default behavior: [What's the default? Does it push toward desired behavior?]
Activity signals: [Do users see that others are using this feature?]

MEASUREMENT PLAN
Success metric: [What behavior will you measure? Adoption? Daily use? Habit formation?]
Baseline: [What's the current behavior? How often do users do this today?]
Target: [What's the 90-day goal? The 1-year goal?]
Drop-off analysis: [Where do users abandon the critical path? What changes it?]
```

## Example

**Company: BillRight (personal finance SaaS for freelancers)**

```
=== BEHAVIOR CHANGE DESIGN ===

DESIRED BEHAVIOR
Freelancers log their billable hours and expenses within 24 hours of work completion (instead of doing weekly or monthly reconciliation)

CURRENT STATE
Freelancers track expenses in ad-hoc ways: notes app, credit card statements, email receipts, or "remember it when tax time comes". This creates errors, forgotten expenses, and chaotic tax filing. Most freelancers batch reconciliation quarterly or annually (massive friction). BillRight's competitor requires logging in to a dashboard, categorizing expenses, and reconciling—happens once a week at best.

MOTIVATION ASSESSMENT
Value proposition: "Never lose another billable hour or deductible expense. Tax time is simple math, not archaeology."
Time to value: HIGH FRICTION. Users don't see the benefit until tax time (4-12 months later). We need to reframe to immediate benefit: "Know what you've earned THIS week" and "See deductions as they happen" (immediate).
Loss frame: "Each week you don't log, you lose ~$200 in billable hours and $50 in forgotten deductions. Over a year, that's $13,000 you're leaving on the table."
Credibility test: Asked 15 freelancers "would you pay $10/month to never lose a billable hour?" 12 said yes. High credibility.

FRICTION AUDIT
Current process (without BillRight):
1. Receive payment notification or finish project task. Friction: LOW (happens naturally)
2. Open expense tracking tool or email receipts to yourself. Friction: MEDIUM (extra app/context switch)
3. Categorize expense (is this office supplies or equipment? How many hours?). Friction: MEDIUM (requires decision-making)
4. Reconcile with other tracking (did I already log this in my notes?). Friction: HIGH (cognitive load)
5. Verify totals against last reconciliation. Friction: MEDIUM (requires memory)

BillRight current onboarding:
1. Log in. Friction: LOW
2. Create project (name, hourly rate, tax category). Friction: MEDIUM (first time only)
3. Click "log hours" and enter time/date. Friction: MEDIUM (three fields)
4. Click "add expense" and enter cost/category. Friction: MEDIUM (two fields)
5. Review weekly summary. Friction: LOW

Target: One-step logging (from notification or chat) instead of context-switching to BillRight. Eliminate step 3 (project selection) by using smart defaults based on previous context.

ABILITY DESIGN

Feature 1: Slack integration
Mechanism: Users can log hours and expenses directly in Slack chat ("log 2 hours on Acme project" or "log $47.50 office supplies"). BillRight parses the message, suggests the right project and category, and confirms.
Progressive disclosure: Slack command is simple ("@billright log 2h Acme design"). Advanced options (tags, notes, tax category override) are hidden in the reply thread.
Smart defaults: BillRight remembers the user's previous projects and categories. If the user logs hours for "Acme", the system assumes the same project next time unless they correct it.
Shortcuts: Power users can say "log 2h" and BillRight auto-fills the project if there's only one active project.
Mobile optimization: Slack is the mobile interface. No need to open BillRight app. Works perfectly on phone.

Feature 2: Receipt scanning and auto-categorization
Mechanism: User screenshots a receipt in Slack or forwards it to receipts@billright.io. Computer vision extracts the amount, merchant, and date. BillRight suggests a tax category based on the merchant. User confirms with a reaction emoji (thumbs up).
Progressive disclosure: First time, BillRight asks "is this office supplies, equipment, or other?" For a business lunch, it asks "what percentage is deductible?" Subsequent receipts auto-file if the merchant is recognized.
Smart defaults: Office Depot receipts are automatically categorized as office supplies. Coffee shops are automatically marked as 50% deductible (business meal).
Mobile optimization: Mobile camera. No typing required.

Feature 3: Weekly nudge and habit loop
Trigger: Wednesday morning (mid-week). Time-based. Slack notification: "You've logged 12 hours so far this week. [Teammates logged 18 hours]. Add your Wednesday hours?"
Variable reward: "You're on pace to earn $3,200 this week!" (shows money earned, varies based on actual time logged). Occasional surprise: "Great week! You deducted $87 in business meals."
Social proof: Comparison to teammates (if using BillRight team version): "4 teammates logged hours today."

SOCIAL PROOF STRATEGY
Peer visibility: Team dashboard shows "who logged today?" so teammates see each other's activity and habit
Default behavior: Default is "log daily" not "reconcile weekly". Asking upfront: "Will you log daily or batch weekly?" pushes toward daily.
Activity signals: Weekly summary shows activity: "You're 3 days ahead of schedule" or "Team is 25% ahead of last week"

MEASUREMENT PLAN
Success metric: Percentage of work days where freelancers log hours within 24 hours (habit formation)
Baseline: Today, 5% of freelancers log daily. 40% log weekly. 55% reconcile quarterly.
Target (90 days): 45% logging daily, 40% weekly, 15% quarterly. (Habit forming in 45% of cohort)
Target (1 year): 70% logging daily, 25% weekly, 5% quarterly. (Habit entrenched, revenue stable)

Drop-off analysis:
- Day 1: 80% of users complete onboarding
- Day 3: 45% have logged their first entry (stop here if they don't see value fast—need faster time-to-value)
- Day 7: 35% have logged 3+ entries (weekly habit forming)
- Day 14: 25% have logged 5+ entries (habit starting to stick)
- Day 30: 15% are logging 4+ times per week (daily habit formed)

If day-3 retention is low, change strategy: stop asking users to "set up" projects and categories. Instead, let them log first (Slack), configure later. Speed to first success matters more than perfect setup.
```

## Edge Cases

- **Products with delayed value realization**: Fitness tracking, learning platforms, and financial planning don't show value immediately. You need to bridge the motivation gap with interim rewards or social proof until the user sees long-term value.

- **Behavior that contradicts user incentives**: You want users to share data for privacy and security, but users' incentive is data minimization. No amount of friction reduction fixes misaligned incentives.

- **Habit formation in commodified spaces**: If a behavior is commodity-level (paying bills, submitting timesheets), even 5 steps of friction might be too many. You may need to automate the behavior entirely.

- **Network effects and cold start problem**: Two-sided products (marketplace, social, collaboration tools) have a chicken-and-egg problem: users don't come because there's no content, but there's no content until users come. Behavioral design alone won't fix this; you need to seed supply or design for single-player behavior first.

- **Dark patterns and loss of trust**: Designing for behavior change can cross into manipulation (dark patterns). Be transparent about what you're optimizing for. Users who feel tricked will leave, creating negative habits (distrust and churn).

- **Behavior that requires commitment**: Some behaviors require upfront cost (paying for a subscription, committing time to learning a tool). Friction reduction can't overcome perceived risk. You need trial, money-back guarantees, or lower commitment options.
