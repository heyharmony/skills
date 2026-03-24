---
name: "Design User Onboarding"
description: "Create onboarding flows that deliver value fast, reveal complexity progressively, and guide users to their first aha moment. What it does: maps user personas, identifies core value, and designs flows tailored to different user types with minimal friction. When to use it: designing first-time user experience, improving activation rates, or measuring where in onboarding users get stuck. Trigger on: activation funnel, onboarding drop-off, time to value, first-time user experience, user setup, empty states, guided tour, welcome flow."
dependencies: []
connectors:
  - name: "Google Analytics"
    reason: "Measure onboarding funnel drop-off at each step; identify which step loses most users"
  - name: "Slack"
    reason: "Monitor user feedback and support tickets about confusion during setup or early usage"
  - name: "Session Recordings (Clarity/Hotjar)"
    reason: "Watch how users actually navigate onboarding; identify unexpected friction points visually"
  - name: "Intercom"
    reason: "Target onboarding messages in-app; trigger tooltips and guides at moments when users need help"
---

## Purpose

First impressions determine whether users stay or leave. Your onboarding window is narrow—if a new user doesn't experience your core value within the first 3 days, they're likely to churn. Onboarding is not a tutorial; it's the experience of discovering why your product is worth their time.

The goal is time-to-value: how fast can someone experience the core benefit? A typical SaaS product has a 7-14 day onboarding. But the best products compress time-to-value to minutes. When you open Slack, within 60 seconds you can send a message and feel like you've done something valuable. When you open Notion, you're immediately creating a note and understanding the premise.

Your job is to map what makes your product valuable, identify which user types need different paths, reduce friction at every step, and celebrate progress. Every additional step loses users. Every moment of confusion is an exit point.

## When to Use This Skill

- Your week-1 activation rate (% of signups who hit core behavior) is below 40%
- Users are getting stuck at specific points in setup (data shows drop-off cliff at step X)
- Your product serves different user types (admin, end-user, developer) and they need different flows
- You're redesigning onboarding and want to validate the new flow against user personas
- Support is flooded with beginner questions about setup or core features
- You're evaluating whether to add feature tours, tooltips, or tutorials (and want to do it right)
- You're measuring onboarding effectiveness but don't have clear metrics

## Instructions

1. **Map user personas and their first-use expectations**
   - Identify 2-4 distinct personas (title, company size, pain point, technical level)
   - For each persona: What do they want to accomplish on day 1? What are their assumptions walking in?
   - Example: Admin (wants to set up team quickly), Developer (wants to integrate via API), Sales person (wants to track leads immediately)
   - Sub-bullets: Interview 3-5 users of each persona; note their first reaction to blank slate; map their assumed workflows

2. **Define your core value and atomic action**
   - Core value: What does your product actually solve? (e.g., "Share ideas asynchronously" not "Collaborative notes app")
   - Atomic action: The single behavior that proves value (e.g., "Write note and share with teammate" not "Set up 5 integrations")
   - Your onboarding must guide users to this action in under 5 minutes
   - Sub-bullets: Test with 5 new users; measure time to first atomic action; iterate flow if any user takes >5 minutes

3. **Identify dead zones in your current onboarding**
   - Where do users drop off most? (typically: setup > first artifact creation > collaboration moment)
   - What causes confusion? (blank page, too many options, unclear next step, no reward)
   - Use analytics or session recordings to identify step with highest abandonment
   - Sub-bullets: Map completion rate at each step; interview users who abandoned; identify common phrases of confusion

4. **Design persona-specific flows with progressive disclosure**
   - One-size-fits-all onboarding doesn't work. Admins need team setup; end-users need to start creating immediately.
   - Detect user type: ask upfront ("Are you setting up a team or personal account?") or infer from behavior
   - Progressive disclosure: show only what's needed now; hide advanced options until user is ready
   - Example: Admin sees "Invite team members" on step 1; end-user sees "Create your first doc" on step 1
   - Sub-bullets: Design 2-3 flow variants; validate each with corresponding persona; measure activation rate per flow

5. **Reduce steps relentlessly**
   - Count every step in your onboarding. Each step loses 10-20% of users.
   - 3 steps is good, 5 is risky, 10+ is a leaky bucket.
   - Combine steps: instead of "Set password" + "Verify email" + "Complete profile", combine into one flow with progressive disclosure
   - Remove information collection until it's genuinely needed (you don't need their job title on day 1)
   - Sub-bullets: List every onboarding step today; identify 2-3 to eliminate; measure impact on activation rate

6. **Use empty states as coaching moments**
   - Blank page = invisible product. New users see nothing and get confused.
   - Empty state = opportunity to show what success looks like (example content, template, or visual mockup)
   - Example: Instead of blank slate, show "Start with a template: Weekly Status Report" with one pre-filled example
   - Example: "Create your first task: Buy groceries, due tomorrow" with a sample task pre-populated
   - Sub-bullets: Screenshot competitors' empty states; identify which feel helpful vs. empty; design your own; test with new users

7. **Build contextual help that doesn't suck**
   - Tooltips and tours are band-aids. If you need them, your UX is probably too complex.
   - When tooltips are necessary: use them for non-obvious UI only (icons, advanced options); never for core flow
   - Make tooltips tiny and action-oriented: "Click 'Share' to invite teammates" not "Welcome to our sharing system!"
   - Measure: % of users who dismiss without clicking; if >40%, the tooltip isn't helpful—redesign the UI instead
   - Sub-bullets: Audit all existing tooltips; rate each as "essential" or "band-aid"; replace band-aids with UX fixes; test new tooltips for dismiss rate

8. **Celebrate small wins and show progress**
   - Humans are motivated by momentum. Breaking onboarding into micro-wins builds motivation.
   - After each atomic action, acknowledge it: "Great! You created your first task. [X]% of users get here on day 1."
   - Show progress visually: progress bar, checklist, or achievement unlock ("You unlocked collaboration 🎉")
   - Don't over-celebrate; a subtle checkmark or micro-interaction is often enough
   - Sub-bullets: List 3-5 micro-wins in your flow; add small celebratory moments; measure if they increase onboarding completion

9. **Measure funnel drop-off and fix the worst step first**
   - Track: % completing step 1, step 2, step 3 (completion rate at each step)
   - Identify the step with highest drop-off (the "cliff")
   - Fix the cliff first; measure impact; move to next cliff
   - Example: If 80% complete step 1 but only 40% complete step 2, step 2 is broken—fix it before optimizing step 3
   - Sub-bullets: Build dashboard showing drop-off by step; set target of 60%+ completing all steps; prioritize fixes by impact

10. **Set up segmented measurement by persona and path**
    - Don't aggregate all onboarding into one curve; measure by persona and flow variant
    - Activation rate should be measured per persona: admin activation ≠ end-user activation
    - A/B test flow variants and measure which persona benefits most from which variant
    - Sub-bullets: Define activation metric per persona; track separately in analytics; identify which variants work best for which personas

## Output Format

```
ONBOARDING DESIGN & ANALYSIS
============================

Product/Feature: [Name]
Current Activation Rate: [X]% (users reaching core value in week 1)
Target Activation Rate: [Y]%
Analysis Date: [Date]

---

USER PERSONAS & FIRST-USE EXPECTATIONS

[Persona A: Team Admin / IT Manager]
- Title: [Typical role]
- Company size: [Typical range]
- Primary pain point: [What they're trying to solve]
- First-use goal: Set up the product so my team can use it
- Assumption/expectation: I should be able to invite 10 team members and grant permissions quickly
- Technical level: Moderate (can use tools but not an engineer)
- Time available: 15-30 minutes

[Persona B: End User / Team Member]
- Title: [Typical role]
- Company size: [Typical range]
- Primary pain point: [What they're trying to solve]
- First-use goal: Create my first artifact and understand how to use it
- Assumption/expectation: I should be able to create something meaningful on day 1
- Technical level: Non-technical
- Time available: 3-5 minutes

[Persona C: Developer / Power User]
- Title: [Typical role]
- Company size: [Typical range]
- Primary pain point: [What they're trying to solve]
- First-use goal: Understand API or advanced features; integrate with my workflow
- Assumption/expectation: I should be able to skip onboarding and jump to documentation
- Technical level: High
- Time available: 10-20 minutes, later; skips UI tutorials

---

CORE VALUE & ATOMIC ACTION

Core Value Proposition:
- In one sentence, what problem does this product solve?
- Why do existing users love it?
- What should a new user feel in their first 3 minutes?

Atomic Action (The First Behavior That Proves Value):
- Specific behavior: [e.g., "create a doc and share with one teammate"]
- Why this action matters: [It demonstrates core value; once done, users understand why to return]
- Time to first atomic action (current): [X minutes]
- Target time: [5 minutes]
- Current achievement rate: [X]% of new users complete this in first session

---

CURRENT ONBOARDING FUNNEL & DROP-OFF ANALYSIS

Step 1: [Description]
- What user does: [Action]
- Why included: [Purpose]
- Completion rate: [X]%
- Key friction: [If drop-off exists, what causes it]

Step 2: [Description]
- What user does: [Action]
- Why included: [Purpose]
- Completion rate: [X]%
- Key friction: [If drop-off exists, what causes it]

Step 3: [Description]
- What user does: [Action]
- Why included: [Purpose]
- Completion rate: [X]%
- Key friction: [If drop-off exists, what causes it]

[Repeat for each step]

Drop-Off Analysis:
- Highest drop-off step: [Step X] ([Y]% drop from previous step)
- Root cause (from user research): [List top 3 barriers]
- Second highest drop-off: [Step X] ([Y]% drop)
- Root cause: [List barriers]

---

DEAD ZONES & FRICTION POINTS

Dead Zone 1: [Phase name]
- When it occurs: [After user does X, before they do Y]
- User sentiment: [Confused? Overwhelmed? Stuck?]
- Specific friction: [What exactly stops them?]
- Impact: [X]% of users don't progress; they abandon
- Solution (quick win): [One UX change that fixes this]

Dead Zone 2: [Phase name]
- When it occurs: [After X, before Y]
- User sentiment: [Confused? Overwhelmed? Stuck?]
- Specific friction: [What exactly stops them?]
- Impact: [X]% of users don't progress
- Solution: [One UX change that fixes this]

---

PERSONA-SPECIFIC FLOW DESIGN

Flow Variant A (For: [Persona Name])
Step 1: [Action] → [Outcome shown to user]
Step 2: [Action] → [Outcome]
Step 3: [Action] → [Atomic action reached; core value demonstrated]
Time to completion: [X minutes]
Why this flow works for this persona: [Addresses their first-use goal directly]

Flow Variant B (For: [Persona Name])
Step 1: [Action] → [Outcome]
Step 2: [Action] → [Outcome]
Step 3: [Action] → [Atomic action; value demonstrated]
Time to completion: [X minutes]
Why this flow works: [Addresses their first-use goal]

---

PROGRESSIVE DISCLOSURE STRATEGY

Information Shown on Day 1:
- [Essential piece 1] → Why it's essential for day-1 value
- [Essential piece 2] → Why it matters first
- Explicitly hidden: [Advanced option 1, Advanced option 2, Advanced option 3] (revealed after first atomic action)

Information Shown on Day 2-3:
- [Feature 2] → Why it becomes relevant after using core feature
- [Feature 3]

Information Shown on Day 7+:
- [Advanced settings, integrations, admin controls]

---

EMPTY STATE EXAMPLES & COACHING MOMENTS

Empty State 1: First Time User Sees Blank Workspace
Current state: Completely blank (confusing)
Improved state (proposed):
- Headline: "Create your first [artifact type]. Here's a template:"
- Template example: [Pre-filled example showing what users create]
- CTA: "Start from template" or "Start blank"
- Why this works: Shows what success looks like; removes blank-page paralysis

Empty State 2: [Specific moment]
Current state: [What users see now]
Improved state:
- Headline: [Proposed copy]
- Visual: [How you show what's possible]
- CTA: [Action button]
- Why this works: [Why it reduces friction]

---

CONTEXTUAL HELP & TOOLTIP AUDIT

Existing Tooltips/Tours:
1. Tooltip on [Element]: "[Copy]"
   - Usefulness rating (1-5): [X]
   - % of users who dismiss without clicking: [X]%
   - Verdict: [Keep / Replace with UX fix / Remove]

2. Tooltip on [Element]: "[Copy]"
   - Usefulness rating: [X]
   - Dismiss rate: [X]%
   - Verdict: [Keep / Replace with UX fix / Remove]

3. Tour on [Feature]: [Description]
   - Usefulness rating: [X]
   - Completion rate: [X]%
   - Verdict: [Keep / Replace with UX fix / Remove]

Proposed Help Additions (Only if UX Fix Doesn't Work):
- [Tooltip for non-obvious icon + what action it enables]
- [Context-triggered nudge at key moment in flow]

---

CELEBRATION MOMENTS & PROGRESS MARKERS

Micro-Win 1: User completes first [action]
- Celebration mechanic: [Badge, progress checkmark, confetti, micro-interaction, message]
- Why it matters: [Shows momentum; signals they're on the right path]
- Placement: [Where in UI it appears]
- Message copy: [e.g., "Done! You're [X]% of the way to your first aha moment"]

Micro-Win 2: [Action]
- Celebration: [Mechanic]
- Why it matters: [Progress signal]
- Placement: [Where]
- Message: [Copy]

Progress Indicator (Optional):
- Format: [Progress bar? Checklist? Other?]
- Labeled as: [e.g., "Getting Started (2/5)"]
- When shown: [During onboarding only, or throughout product?]

---

MEASUREMENT FRAMEWORK

Primary Metric: Week-1 Activation Rate (% reaching atomic action)
- Current: [X]%
- Target: [Y]%
- Time to atomic action: [Average X minutes]

Secondary Metrics (by Persona):
- [Persona A] activation rate: [X]%
- [Persona B] activation rate: [X]%
- [Persona C] activation rate: [X]%

Funnel Completion Rate (by Step):
- Step 1: [X]% of signups complete
- Step 2: [X]% complete
- Step 3: [X]% complete
- [Repeat for all steps]

Engagement After Onboarding:
- Day 3 retention (% returning): [X]%
- Day 7 retention: [X]%
- Day 30 retention: [X]%

Help Usage (if applicable):
- % of users who open help/tutorial: [X]%
- % who complete tutorial if opened: [X]%
- Impact on activation: [Does tutorial improve or hurt activation?]

Dashboard:
- [Link to analytics dashboard tracking all above metrics by persona and flow variant]

Review Cadence: Weekly (watch for drop-off changes); Monthly (analyze complete cohorts)

---

OPTIMIZATION ROADMAP

Week 1 Priority: Fix [Dead Zone A] → Reduce friction at [specific step]
- Change: [What you're changing in UX/copy/flow]
- Expected impact: [Expect drop-off at step X to decrease by Y%]
- Success metric: [X% of users complete step X]
- Owner: [Team responsible]

Week 2-3 Priority: Test [Flow Variant B] for [Persona]
- Change: [Design alternate flow]
- Hypothesis: [This flow will increase activation for [persona] by Z%]
- A/B test: [Split new signups 50/50 between current and new flow]
- Success metric: [New flow achieves X% activation vs. Y% for current]

Week 4 Priority: [Improvement to empty states / celebration mechanics / progressive disclosure]
- Change: [What you're changing]
- Expected impact: [How this reduces friction]
- Success metric: [X measurement]

---

POST-ONBOARDING ENGAGEMENT PLAN

Day 1-2 (Onboarding):
- Goal: [Reach atomic action]
- Touchpoints: [Setup flow, empty states, celebration moments]

Day 3-7 (Early Activation):
- Goal: [User creates X artifacts / completes first collaboration]
- Touchpoint 1: [Email or in-app message sent on day 3 if user hasn't returned]
- Touchpoint 2: [If user completed onboarding but hasn't taken next action, nudge them]
- Message: [Suggest next step based on their progress]

Day 8-14 (Habit Formation):
- Goal: [User returns at least 2x per week]
- Touchpoint: [Weekly digest email / feature reminder]

Week 3+ (Retention):
- Goal: [Integrate into user's routine]
- Touchpoint: [Measured via engagement metrics, not forced onboarding touchpoints]
```

## Example

```
ONBOARDING DESIGN & ANALYSIS
============================

Product/Feature: TeamSync (Team Project Management & Async Updates)
Current Activation Rate: 38% (users creating first project in week 1)
Target Activation Rate: 65%
Analysis Date: March 2026

---

USER PERSONAS & FIRST-USE EXPECTATIONS

[Persona A: Team Lead / Manager]
- Title: Engineering Manager, Product Manager, Designer Lead
- Company size: 10-100 people
- Primary pain point: Coordinating across distributed team; losing context in Slack; status updates take forever
- First-use goal: Get team set up so I can start getting daily standups
- Assumption/expectation: I should be able to invite my 8-person team and see their status in under 10 minutes
- Technical level: Moderate
- Time available: 15-30 minutes

[Persona B: Individual Contributor]
- Title: Engineer, Designer, Product Manager
- Company size: Any
- Primary pain point: Too many status meetings; want to share progress asynchronously
- First-use goal: Create my first status update and share it with my team
- Assumption/expectation: I should be able to create something on day 1; shouldn't need manager setup to start
- Technical level: Moderate to High
- Time available: 3-5 minutes

[Persona C: Team Member (Invited by Lead)]
- Title: Any IC
- Company size: Any
- Primary pain point: [Not aware they have a problem yet; team lead is solving this]
- First-use goal: See what my team is working on; leave feedback on status
- Assumption/expectation: I should be able to log in and see one piece of content immediately
- Technical level: Non-technical
- Time available: 2-3 minutes

---

CORE VALUE & ATOMIC ACTION

Core Value Proposition:
- Replace status meetings with async updates. Read and comment on what your team shipped this week in 5 minutes, not an hour meeting.

Atomic Action (The First Behavior That Proves Value):
- Specific behavior: User creates first status update (title + short description + one artifact/link)
- Why this action matters: Once someone creates a status update, they understand the core mechanic and why teammates would find it valuable
- Time to first atomic action (current): 8.2 minutes
- Target time: 4 minutes
- Current achievement rate: 38% of new users (unacceptable; losing 62%)

---

CURRENT ONBOARDING FUNNEL & DROP-OFF ANALYSIS

Step 1: Email Verification
- What user does: Click link in verification email
- Why included: Security; ensure valid email
- Completion rate: 91%
- Key friction: Some users don't see email; email goes to spam

Step 2: Choose Setup Path
- What user does: Select "I'm setting up a team" or "I'm a team member joining"
- Why included: Personalize flow; two personas need different paths
- Completion rate: 86%
- Key friction: Unclear difference; some users pick wrong path

Step 3: (For Team Leads) Invite Team Members
- What user does: Paste email addresses or upload CSV
- Why included: Need to get team set up to show value
- Completion rate: 54% (❌ BIG DROP)
- Key friction: Users don't know team size they'll invite; have to go back to email to find addresses; process feels administrative

Step 3b: (For Team Members) See First Update
- What user does: View a sample status update; like it
- Why included: Show what success looks like
- Completion rate: 81%
- Key friction: Only shown if link from manager; some confusion about what they're looking at

Step 4: Create First Update [ATOMIC ACTION]
- What user does: Write title, description, attach a link or file
- Why included: This is the core action
- Completion rate: 38% (from 54% or 81%, depending on path)
- Key friction: Blank page intimidation; unclear what "status update" means; example too long; users don't know what to put

Step 5: Set Frequency & Notifications
- What user does: Select when to send updates (daily/weekly/custom), enable notifications
- Why included: Establish habit
- Completion rate: 22% (❌ Another major drop)
- Key friction: Too early to ask about frequency; users haven't felt value yet; overwhelming options

Drop-Off Analysis:
- Highest drop-off step: Step 3 for team leads (54% → 38%) and Step 5 (38% → 22%)
- Root cause for Step 3: Too administrative; users don't know who to invite yet; feels disconnected from value
- Root cause for Step 5: Premature setting of preferences; user hasn't created one update yet, so frequency feels theoretical

---

DEAD ZONES & FRICTION POINTS

Dead Zone 1: "Invitation Fatigue" (Step 3)
- When it occurs: After user chooses they're setting up a team, before they create first update
- User sentiment: "This is a lot of work"
- Specific friction: "I need to go find 8 email addresses. Do I have them all? Should I start with just a few? If I invite wrong people, can I remove them?"
- Impact: 46% of team leads don't proceed past this step
- Solution (quick win): Pre-invite option: "Invite 1-3 people to start, or invite the whole team later. Let's get you creating first."

Dead Zone 2: "Blank Status Update" (Step 4)
- When it occurs: User sees empty form: [Title field] [Description field] [Attach]
- User sentiment: "What am I supposed to write? Is this like a tweet? An email? A wiki?"
- Specific friction: Example of "good status" is 3 paragraphs long; users see that and think "I don't have time for this"
- Impact: 43% of users don't complete first update
- Solution: Replace example with 1-line template: "This week I shipped: [feature]. Next week I'm focused on: [task]. Blocker: [if any]."

Dead Zone 3: "Frequency Setting Too Early" (Step 5)
- When it occurs: Right after user creates first (tentative) update
- User sentiment: "I don't even know if I'll use this next week, and you're asking me to commit to a cadence?"
- Specific friction: 5 options (daily, M/W/F, weekly, every other week, custom); no guidance on what others choose
- Impact: 42% of users don't complete onboarding
- Solution: Skip this step; ask about frequency on day 7 (after user has created 2-3 updates and feels invested)

---

PERSONA-SPECIFIC FLOW DESIGN

Flow A (For: Team Lead / Manager)
Step 1: Email verification
Step 2: Understand value prop → "See how your team shares weekly updates asynchronously"
Step 3: Create your first update [ATOMIC ACTION - shows them what they'll read from team]
Step 4: Invite team members (moved to after first update, so they've felt value)
Step 5: See example of what team members see when invited
Step 6: Done; next team members will join and add their updates

Time to completion: 6 minutes (target achieved)
Why this flow works: Team lead creates update first, so they understand what they're asking their team to do; invitation becomes contextualized by the value they experienced

Flow B (For: Team Member Joining via Link)
Step 1: Email verification (fast-tracked; might skip if coming from calendar link)
Step 2: See first status update from manager/team lead (with 1-2 comments as social proof)
Step 3: Leave a comment on the update [ATOMIC ACTION - feels like participation]
Step 4: Done; nudge to create their own update in email next day

Time to completion: 2 minutes
Why this flow works: New team member sees value immediately (what team is working on) and participates (commenting) before being asked to create their own

---

PROGRESSIVE DISCLOSURE STRATEGY

Information Shown on Day 1 (During Onboarding):
- Core concept: "Share what you shipped and what's next"
- Atomic action: Create one status update
- Social participation: Comment on a teammate's update
- Explicitly hidden: Notification settings, update templates, advanced filtering, permissions, integrations, analytics

Information Shown on Day 2-3 (First Email Nudge):
- "Create your own status update (if not done)"
- Example from another team member at company (social proof)

Information Shown on Day 7+ (First Review Email):
- "Your team created [X] updates this week. Great momentum!"
- Now ask about frequency preferences for next week
- Link to templates, if user wants guidance

Information Shown on Day 30+:
- Advanced: Team analytics, custom permissions, integrations, bulk-add team members

---

EMPTY STATE EXAMPLES & COACHING MOMENTS

Empty State 1: Blank Update Form
Current state: Text fields with placeholders "Title..." "Description..." and "Add attachments" button (confusing)

Improved state (proposed):
- Headline: "What did you ship this week?"
- Template example: "Title: Shipped user feedback modal. Next: Performance testing on mobile. Blocker: Waiting on API changes."
- CTA: "Use this template" button
- Why this works: Users see exact format; can copy and edit; removes blank-page paralysis

Empty State 2: Team Member Sees Feed with No Updates Yet
Current state: "No updates yet" message (empty and demotivating)

Improved state:
- Headline: "Your team hasn't shared updates yet."
- Visual: Small illustration of people collaborating
- Copy: "Once your team lead invites others, their updates will show up here."
- CTA: "Learn how to create your first update"
- Why this works: Explains the flow; sets expectation; offers next action

---

CONTEXTUAL HELP & TOOLTIP AUDIT

Existing Tooltips/Tours:
1. Tooltip on "Attach" button: "Add links, files, or images to your status"
   - Usefulness rating: 3/5
   - % dismiss without clicking: 65%
   - Verdict: Replace with UX fix → Rename button to "Attach file or link" (no tooltip needed)

2. Tour on first visit: 4-step guided tour of navbar
   - Usefulness rating: 2/5
   - Completion rate: 18%
   - Verdict: Remove entirely → Design cleaner navbar instead

3. Tooltip on "Frequency": "How often do you want to send updates?"
   - Usefulness rating: 4/5
   - Dismiss rate: 28%
   - Verdict: Keep it (useful; but move this step to day 7, not onboarding)

Proposed Help Additions (Only for Non-Obvious UI):
- Tooltip on "Filter" icon (if not obvious): "Filter updates by team member or week"
- Contextual nudge on day 3: "Tip: Add a link to what you shipped—teammates love seeing actual work"

---

CELEBRATION MOMENTS & PROGRESS MARKERS

Micro-Win 1: User creates first status update
- Celebration mechanic: Confetti + message "You nailed it 🎉 Your team will see this update next."
- Why it matters: Proves the core action; user knows they've succeeded
- Placement: Top banner after form submission, before next step
- Message copy: "Nice! You just created your first status update. Now invite your team to share theirs."

Micro-Win 2: User invites first team member
- Celebration: Subtle "1 teammate invited" badge in navbar
- Why it matters: Signals the loop is starting; they're not alone in the product
- Placement: Navbar, upper left
- Message: [On hover] "Waiting for John to join and share their first update"

Micro-Win 3: User leaves first comment on a teammate's update
- Celebration: Heart reaction animation + counter shows "1"
- Why it matters: Collaboration is reinforced; shows they understand two-way value
- Placement: Inline, next to comment count
- Message: [Popup after first comment] "You're part of the team loop now. Comments help everyone stay aligned."

Progress Indicator:
- Format: Simple checklist in onboarding flow
  * ☑ Create your first update
  * ☑ Invite your team
  * ☐ See their updates arrive
- Labeled as: "Getting Started (2/3)"
- When shown: Only during onboarding (days 1-3); disappears after completion

---

MEASUREMENT FRAMEWORK

Primary Metric: Week-1 Activation Rate (% creating first status update in week 1)
- Current: 38%
- Target: 65% (by Q2)
- Time to atomic action: 8.2 minutes → target 4 minutes

Secondary Metrics (by Persona):
- Team Lead activation rate: 54% (invite path)
- Team Member (new) activation rate: 81% (early invite path)
- Team Member (self-signup) activation rate: 18% (self-directed path—PROBLEM)

Funnel Completion Rate (by Step):
- Step 1 (Email verification): 91%
- Step 2 (Path selection): 86%
- Step 3 (Invite or view): 54-81%
- Step 4 (Create update): 38%
- Step 5 (Frequency setting): 22%

Engagement After Onboarding:
- Day 3 retention: 52%
- Day 7 retention: 41%
- Day 30 retention: 31%

Dashboard: [Link to Looker dashboard "TeamSync Onboarding Funnel"]
- Tracks funnel by persona, by cohort, by signup source
- Alerts if week-1 activation drops below 60%
- Shows time-to-atomic-action over time

Review Cadence: Weekly (watch for drop-off spikes); Monthly (analyze new cohorts)

---

OPTIMIZATION ROADMAP

Week 1 Priority: Fix "Invitation Fatigue" (Dead Zone 1)
- Change: Move invitation step to AFTER first update creation; add option to invite just 1-2 people to start
- Expected impact: Step 3 completion increases from 54% to 75%
- Success metric: 75% of team leads reach update creation step
- Owner: Product team

Week 2-3 Priority: Redesign Blank Update Page (Dead Zone 2)
- Change: Replace blank form with template example + "Use this template" button
- Hypothesis: Template will reduce blank-page anxiety; increase update completion from 38% to 55%
- A/B test: Show 50% of users template suggestion, 50% current blank form
- Success metric: Template group achieves 55%+ completion; current group remains ~38%
- Owner: Design + Product

Week 4 Priority: Remove Frequency Setting from Onboarding (Dead Zone 3)
- Change: Delete Step 5 from onboarding; instead ask about frequency in email on day 7
- Expected impact: Reduce abandonment at step 5; increase overall onboarding completion from 22% to 60%
- Success metric: 65% complete onboarding; day-7 email gets 40% response on frequency preference
- Owner: Product

Week 5+ Priority: Create Separate Flow for Self-Signup Team Members
- Change: Design flow variant for users signing up independently (not invited)
- Problem: Currently only 18% activate; they don't get the "see team's update first" benefit
- Solution: Send onboarding email with link to sample update; ask them to join a team; then show their team's updates
- Expected impact: Self-signup activation increases from 18% to 45%
- Owner: Product + Growth

---

POST-ONBOARDING ENGAGEMENT PLAN

Day 1-3 (Onboarding):
- Goal: Reach atomic action (create first update)
- Touchpoints: Setup flow (email → form flow → create update), celebratory moment after update creation

Day 4-7 (Early Participation):
- Goal: Create second update OR comment on team member's update
- Touchpoint 1: Email on day 3: "Your team loved your first update. Ready for week 2?" (link to create next update)
- Touchpoint 2: If user has team members, email on day 5 showing first teammate's update with CTA "See their update & add a comment"
- Message: Personalized ("John shared an update") + Social proof (comment count) + Low-friction CTA

Day 8-14 (Habit Formation):
- Goal: User logs in at least 2x per week
- Touchpoint: Weekly digest email on Friday morning: "Your team's updates from this week [summary + links] + [invite to open and comment]"

Week 3+ (Retention):
- Goal: Integrate into user's workflow; establish update cadence
- Touchpoint: Move from weekly nudges to frequency they selected; measure via in-app engagement, not forced emails
```

## Edge Cases

- **One-size-fits-all doesn't work**: If your product serves both developers and non-technical users, don't force them through the same flow. Detect user type and show relevant path.

- **Onboarding too short loses context**: If you compress onboarding to 1 step, users may not understand the value prop. Balance speed with clarity; each step should answer a question or deliver value.

- **Overuse of tooltips/tours signals UX problems**: If you're adding guided tours everywhere, your UX is probably confusing. Fix the UX instead of relying on tooltips to explain it.

- **Activation metric misalignment**: If you optimize for "users who create artifact" but your real retention metric is "users who invite teammates," you're optimizing the wrong behavior. Define activation in terms of retention prediction.

- **Persona creep**: If you add more than 3-4 persona-specific onboarding flows, maintenance becomes impossible. Consolidate to the highest-impact personas; others get default flow.

- **Progressive disclosure paradox**: Hiding features can confuse users who need them immediately. Be intentional about what's hidden vs. shown; test with users to validate each decision.
