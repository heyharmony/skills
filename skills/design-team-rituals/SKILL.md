---
name: "Design Team Rituals"
description: "Replace vague meetings with named, templated rituals that every employee knows by their first Friday and can facilitate. What it does: transforms recurring meetings into repeatable ceremonies with clear purpose, facilitator guide, and participation rules. When to use it: during team formation, after scaling, when meeting bloat appears, or when onboarding new hires. Trigger on: rituals, ceremonies, meetings, standup, retro, planning, all-hands, cadence, meeting fatigue, repeatable."
dependencies: []
connectors:
  - name: "Google Calendar"
    reason: "Maps existing meeting cadence and identifies candidates for ritualization"
  - name: "Slack"
    reason: "Surfaces which recurring conversations or updates could be templated or moved offline"
  - name: "Notion"
    reason: "Stores ritual templates, facilitator guides, and decision logs for distributed teams"
  - name: "GitHub"
    reason: "Captures technical rituals like sprint planning, retrospectives, and code review ceremonies"
  - name: "Linear"
    reason: "Tracks sprint rituals, planning ceremonies, and iteration cycles"
---

## Purpose

Great companies don't have meetings. They have rituals. The difference: rituals are named, have a template, are facilitated consistently, and every new hire knows them by their first Friday. They're not "sync meetings to update status"—they're "First Friday Retro: 45 minutes, blameless, one action item."

This skill helps you design and rollout your team's core rituals. It starts by identifying which recurring meetings actually matter, gives each one a name and a template so anyone can run it, then embeds it into onboarding so the ritual survives scaling and leadership changes.

The common mistakes: too many rituals (kills adoption), no template (each person runs it differently), ritual name nobody remembers, or introducing rituals late in onboarding (new hires miss the repetition). This skill avoids all of that.

## When to Use

- **Team formation or reset**: You're building a new team and want rituals baked in from day one, not added later when habits are already formed.
- **Meeting bloat**: You count 15+ recurring meetings a week and half feel pointless; rituals help you reduce and focus.
- **Scaling moment**: You've hired 3+ people in the last quarter; rituals make culture transferable to new people.
- **Distributed team onboarding**: Remote hires don't absorb rhythm from proximity; named rituals in the calendar become their cultural compass.
- **Failed previous rituals**: You tried a weekly retro and it died; now you're designing one with template, named host, and adoption plan.
- **Leadership transition**: New manager or VP arrives; rituals ensure continuity of how your team works regardless of leader change.
- **Quarterly planning or new cycle**: Use ritual design as part of annual or quarterly review; drop what's dead, rename what's confusing.

## Instructions

1. **Audit existing meetings** (15–30 min).
   - List all recurring meetings (pull from calendar if connected).
   - For each: "What decision or outcome does this meeting need to produce?"
   - Delete: meetings with no clear outcome.
   - Keep: meetings where absence would cause organizational damage (lose communication, delay decision, break feedback loop).
   - Usually 3–5 rituals per team; more than 7 is red flag.

2. **Identify ritual candidates** from the "keep" list.
   - Not all meetings need to be rituals. Only the ones that:
     - Repeat weekly or more frequently, *and*
     - Involve the same people or role, *and*
     - Have the same purpose every time (e.g., planning, feedback, synchronization, decision-making).
   - Example rituals: standup, retrospective, sprint planning, 1:1s, all-hands, decision review, roadmap sync.

3. **Design each ritual with three required elements**.
   - **Name**: Memorable, one or two words. Not "sync meeting," but "Monday Kickoff" or "Blameless Retro."
   - **Purpose**: One sentence. "Identify blockers and dependency risks." "Reflect on how we worked together."
   - **Template**: 5–10 bullet points describing flow, time allocations, who facilitates, what the output is.

4. **Create a ritual template** (one doc per ritual) with these sections:
   - **When & Duration**: Day, time, length (e.g., "Every Monday, 10 AM, 15 minutes").
   - **Who**: Required attendees, optional attendees, facilitator role.
   - **Purpose**: What decision, reflection, or outcome does this ritual serve?
   - **Flow** (time-boxed bullets):
     - 0–2 min: Facilitator opens with focus (e.g., "Today we're identifying blockers.")
     - 2–10 min: [Specific activity, e.g., "Each person shares one blocker. No solutions yet."]
     - 10–14 min: [Next phase, e.g., "Facilitator captures top 3; team picks one to solve."]
     - 14–15 min: [Close, e.g., "Recap owner and next steps; dismiss."]
   - **Facilitator Notes**: Common pitfalls, how to keep it on time, what NOT to do.
   - **Output**: What artifact leaves the room? (e.g., blockers list in Slack, action item in Linear, retro doc with lessons).
   - **Variations**: "Async version for distributed teams" or "How to run this with half the people if attendance drops."

5. **Run a ritual pilot** (2–3 cycles) with your core team.
   - Pick one ritual to start with (often standup or retro; something frequent so feedback loops fast).
   - Run it 2–3 times using the template.
   - After each, ask facilitator and attendees: "Did the template work? What felt forced? What was missing?"
   - Refine template based on feedback.
   - Once it feels natural, move to the next ritual.

6. **Name each ritual** so it sticks.
   - Not "Engineering Sync" (generic, forgettable).
   - Try "Shipping Friday" (action-oriented), "Code Review Cadence" (specific), "Retro Blameless" (memorable).
   - New hires should be able to recall the ritual by name by their second week.

7. **Create a ritual calendar and one-pager** to share.
   - One-page visual showing all team rituals, their day/time, duration, and one-sentence purpose.
   - Post in Slack, Notion, Google Drive, or anywhere onboarding docs live.
   - Template: Simple table or calendar view. Example:
     ```
     Monday 10 AM | Kickoff | 15 min | Blockers & focus for the week
     Wednesday 2 PM | Code Review Retro | 30 min | What's slowing our reviews? How do we improve?
     Friday 4 PM | Shipping Friday | 45 min | Ship or reflect; celebrate and plan next
     ```

8. **Embed into onboarding** (critical step).
   - Week 1: New hire receives the ritual one-pager in their welcome packet.
   - First day: Manager walks through rituals in the first 1:1. "Here's what Tuesday's Kickoff is. Here's what you should expect."
   - Week 1 or 2: New hire observes or participates in at least one full cycle of rituals (if weekly, full week; if biweekly, full two weeks).
   - Onboarding checklist: "New hire can articulate the purpose of each ritual" (sign-off by manager).

9. **Train facilitators** (especially important if rituals rotate).
   - If different people facilitate the same ritual, they need to know the template.
   - Pair-facilitate the first time: experienced person + new facilitator together.
   - Let them own a ritual after one successful co-facilitation.

10. **Review and refresh rituals quarterly**.
    - Ask: "Are all five rituals still serving us? Do we need to add one? Drop one?"
    - Refine templates based on how they've evolved in practice.
    - New hiring spurt? Add an onboarding ritual. Leadership transition? Ensure decision rituals are crystal clear.

## Output Format

```
# [TEAM] Rituals Playbook
**Last updated**: [DATE] | **Owned by**: [NAME]

## Ritual Overview
This team runs [NUMBER] core rituals. Every new hire learns them by their first [FRIDAY/MONDAY].

| Ritual Name | When | Duration | Purpose |
|---|---|---|---|
| [Name] | Day/Time | X min | [One-sentence outcome] |
| [Name] | Day/Time | X min | [One-sentence outcome] |
| [Name] | Day/Time | X min | [One-sentence outcome] |

---

## Ritual 1: [NAME]

**Purpose**: [One sentence describing what this ritual serves—decision, feedback, synchronization, etc.]

**When & Duration**: [Day, time], [duration] (e.g., "Every Monday, 10:00 AM, 15 minutes")

**Attendees**:
- Required: [Roles or names]
- Optional: [If applicable]
- Facilitator: [Role or rotation method]

**Flow & Time Allocation**:
- **[0–X min]**: [Activity]. Example: Facilitator opens with the week's top priority.
- **[X–Y min]**: [Activity]. Example: Each person shares one blocker; no discussion yet.
- **[Y–Z min]**: [Activity]. Example: Team picks top blocker to solve; assign owner.
- **[Z–Duration]**: [Closing]. Example: Recap action item; dismiss.

**Facilitator Notes**:
- Common pitfall: [e.g., "Discussions drift into solution-mode; keep to blockers."]
- How to keep it on time: [e.g., "Use a visible timer. 30 seconds per blocker."]
- What NOT to do: [e.g., "Don't bring solved blockers back; they're past tense."]

**Output**: [What leaves the room?] Example: "Blockers list posted in #team-blockers; owner + deadline for top item."

**Async Version** (if distributed):
- [How to run this async or for time zones]

---

## Ritual 2: [NAME]
[Repeat structure above]

---

## How New Hires Learn Rituals

**Week 1 Onboarding**:
1. Manager hands off the ritual one-pager; explains purpose of each.
2. New hire participates in at least one full cycle.
3. Manager checks in: "Can you explain why we do Monday Kickoff?"

**First Month Check-In**: Ask new hire what surprised them or felt confusing about the rituals.

**Refreshing Rituals**: Every quarter, ask the team: "Which rituals still serve us? Should we rename, drop, or add one?"
```

## Example

**Prism AI (fictional 18-person product team, early-stage, mostly co-located with 3 remote)**

```
# Prism AI Rituals Playbook
**Last updated**: March 2026 | **Owned by**: Marcus (Head of Product)

## Ritual Overview
Prism AI runs 5 core rituals. Every new hire learns them by their first Friday.

| Ritual Name | When | Duration | Purpose |
|---|---|---|---|
| Kickoff | Monday, 10 AM | 15 min | Identify blockers and top priority for the week |
| Demo Debrief | Wednesday, 2 PM | 30 min | Show what shipped; reflect on what worked |
| Retro Blameless | Friday, 3 PM | 45 min | Reflect on how we worked together; one action item for next week |
| 1:1 Sync | Weekly, scheduled per pair | 30 min | Feedback, growth, blockers, context-setting |
| Monthly Design Critique | 2nd Thursday, 4 PM | 60 min | Deep critique of designs in progress; async prep required |

---

## Ritual 1: Kickoff

**Purpose**: Surface blockers and dependencies at the start of the week so the team can unblock each other and stay focused on the week's north star.

**When & Duration**: Every Monday, 10:00 AM, 15 minutes (remote people join Zoom; co-located team gathers at the front table).

**Attendees**:
- Required: All product team (product manager, designers, engineers, QA)
- Optional: Whoever wants to hear what's blocking the product team
- Facilitator: Rotates weekly (PM owner, but product engineer or designer can facilitate)

**Flow & Time Allocation**:
- **0–1 min**: Facilitator opens with the week's focus (e.g., "This week we're shipping the new onboarding flow and fixing the payment bug.").
- **1–11 min**: Each person (around the table / via Zoom) shares one blocker or dependency in 60 seconds. No solutions, just the blocker.
  - Examples: "Can't test the email template until copy is finalized." "Waiting on the backend API spec." "Design debt on the filters is slowing us down."
- **11–14 min**: Facilitator captures top 3 blockers. Team picks one. Assign owner and a commit: "Marcus will get copy to Sarah by Tuesday EOD."
- **14–15 min**: Recap: "This week's focus is [X]. Top blocker owner is [Y]. We meet Wednesday to debrief demos." Dismiss.

**Facilitator Notes**:
- Common pitfall: Discussions drift into "let's solve this now." STOP that. This ritual is diagnosis, not treatment.
- How to keep it on time: Use a visible timer on the screen. 60 seconds per blocker. Facilitator calls "next" at 60.
- What NOT to do: Don't re-litigate last week's blockers. "Did we fix the payment bug?" is a celebration (go to Demo Debrief), not a blocker.
- If a blocker sounds like it should've been solved: that's a retro item, not a Kickoff item.

**Output**: Blockers are captured in a Slack thread or Google Doc ("Weekly Blockers"); the top one gets an action item in Linear with owner + deadline.

**Async Version**: For remote-heavy weeks, facilitator posts the focus in Slack Sunday night. Each person replies with their blocker by Monday 9:30 AM. Facilitator synthesizes and posts top 3 + owner by 10 AM; no meeting needed.

---

## Ritual 2: Demo Debrief

**Purpose**: Show what shipped this week, celebrate, and reflect on what worked in our process. This keeps momentum visible and lets us learn from shipping successes.

**When & Duration**: Every Wednesday, 2:00 PM, 30 minutes.

**Attendees**:
- Required: Product, design, engineering, QA
- Optional: Anyone from the company (it's fun to see what's shipping)
- Facilitator: Product manager (or whoever demoed the last feature)

**Flow & Time Allocation**:
- **0–2 min**: Facilitator recaps what shipped since last debrief (or notes "nothing shipped this week; we'll demo next week").
- **2–20 min**: 2–3 demos, 4 min each. Show the feature in real product. Highlight what changed from the design brief.
  - Engineer demos the code/backend. Designer shows the flow. PM explains what happened in the user research or why we cut scope.
- **20–28 min**: Team reflects: "What went well in building this?" "What was harder than expected?" "What surprised us?"
  - Keep it lightweight. This isn't a deep retro.
- **28–30 min**: Facilitator captures one "yay" (thing we did well) for the team mood. Dismiss.

**Facilitator Notes**:
- Common pitfall: Demos run long because someone gets into the weeds. Cut it off at 4 min; deep questions go to 1:1s.
- How to keep it on time: Demo on a staging server, not live. Rehearse demos Tuesday afternoon so Wednesday flows.
- What NOT to do: Don't present incomplete work. Demo Debrief is *shipped* work only. "In progress" features go to Design Critique.

**Output**: A Slack message celebrating what shipped. No doc needed.

**Async Version**: Facilitator records a 5–7 min video demo (Loom), posts it to Slack with context. Team reacts with 👍, asks questions in thread.

---

## Ritual 3: Retro Blameless

**Purpose**: Reflect on how we worked together this week. What helped us ship? What slowed us down? Pick one thing to improve next week.

**When & Duration**: Every Friday, 3:00 PM, 45 minutes.

**Attendees**:
- Required: Product, design, engineering, QA
- Optional: Anyone who was part of the week's work
- Facilitator: Rotates weekly (engineer, designer, PM, QA, each takes a turn)

**Flow & Time Allocation**:
- **0–1 min**: Facilitator opens: "This is a blameless retro. We're reflecting on how we worked, not who messed up. Everything shared here is in service of making next week smoother."
- **1–15 min**: Sticky note / brainstorm. Each person writes 1–2 things on sticky notes:
  - One thing that helped us ship (green sticky).
  - One thing that slowed us down or was frustrating (red sticky).
  - Paste them on the wall or virtual board (Miro or Google Jam).
- **15–35 min**: Group and discuss. Facilitator groups similar notes.
  - Top group: "Testing took longer than expected." Discussion: Why? What helped when? Should we change something?
  - Top group: "Design pairing saved the feature." Discussion: Why was it so effective? Can we do more of it?
- **35–43 min**: Pick one action item. Not five. One. "Next week, we'll do a design pairing session before we code complex flows." Assign owner (often the person who had the idea).
- **43–45 min**: Celebrate the week (quick shout-outs). Close retro.

**Facilitator Notes**:
- Common pitfall: Retros become complaint sessions without actions. If someone says "we moved too fast," push: "What specific moment? What would've helped?" Turn complaints into observations.
- How to keep it on time: Use a visible timer. 1 min for each group of stickies to discuss.
- What NOT to do: Don't assign more than one action item. Too many actions = none happen.
- Psychological safety: If people seem quiet, facilitator shares their own "red sticky" first to model vulnerability.

**Output**: Photo of stickies or Retro doc with: **What helped**, **What slowed us**, **Next week's action item + owner**. Post in #team-retro or retro database.

**Async Version**: Slack poll Monday–Wednesday: "One thing that helped?" and "One thing that slowed us?" Facilitator synthesizes Friday morning and picks action item async; announces in Slack.

---

## Ritual 4: 1:1 Sync

**Purpose**: One-on-one feedback, context-setting, growth conversation, and blocker unblocking between manager and report.

**When & Duration**: Weekly, 30 minutes, scheduled per pair (can vary by manager/report availability).

**Attendees**: Manager + report.

**Facilitator**: Manager (but report can set agenda).

**Flow & Time Allocation**:
- **0–5 min**: Check-in. "How's your week? Anything on your mind?" (not work-only; personal is fine.)
- **5–15 min**: Progress on goals / context. "What are you working toward this quarter? How's progress?" "Anything blocking that?"
- **15–25 min**: Feedback or growth. "I noticed [specific behavior]. Here's why it matters. Here's what I'd suggest." Or: "What's one skill you want to develop? How can I help?"
- **25–30 min**: Close. Recap action items (if any). Next 1:1 confirmed.

**Facilitator Notes** (for managers):
- Common pitfall: 1:1s become status updates (what they shipped). Ask "What's going well?" and "What's hard?" instead.
- How to keep it focused: Report can submit a short agenda (1–2 bullets) before the meeting.
- What NOT to do: Don't use 1:1s to delegate new work. Use Kickoff or async channels for that.

**Output**: Brief notes (optional). Usually no artifact, but if there's a growth goal or action item, document it.

---

## Ritual 5: Monthly Design Critique

**Purpose**: Deeply critique designs in progress. Share design thinking, get feedback early, avoid rework.

**When & Duration**: 2nd Thursday of each month, 4:00 PM, 60 minutes.

**Attendees**:
- Required: All designers, product manager, lead engineer
- Optional: Anyone curious about design process
- Facilitator: Rotating design lead (or PM if no designer)

**Flow & Time Allocation**:
- **Pre-work** (async, Tuesday–Thursday): Designers post the design file (Figma link) + a 1-paragraph brief explaining the problem, user context, and design direction.
- **0–3 min**: Facilitator introduces the design: "Tasha is redesigning the settings page. Here's the problem. Here's the constraint."
- **3–30 min**: Silent observation (3 min), then discussion. Facilitator reads aloud one design decision (e.g., "We moved the danger zone to the bottom"). Observers ask clarifying questions. Designer explains reasoning.
- **30–45 min**: Rounds of feedback. Facilitator: "What's working?" "What's confusing?" "What needs rethinking?" Designers listen; don't defend yet.
- **45–55 min**: Designer reflects. "Here's what I'm hearing. Here's what I'll iterate on. Here's what I need help with."
- **55–60 min**: Facilitator closes. "Next critique, Tasha will show the refined version." Dismiss.

**Facilitator Notes**:
- Common pitfall: Critique devolves into "I would've done it this way." STOP that. Ask "Why did you choose that?" instead.
- How to keep it on time: Use a timer. Facilitator enforces transitions.
- What NOT to do: Don't critique unfinished work. Designers should know what they're asking for feedback on.
- Psychological safety: Normalize that critique is about ideas, not people.

**Output**: Figma link + design iteration notes. Designer updates the brief with feedback themes by next week.

---

## How New Hires Learn Rituals

**Week 1 Onboarding**:
1. First day: Manager prints a "Rituals at Prism" one-pager and walks through it in the first 1:1.
   - "Monday Kickoff is where we surface blockers. You don't have to talk first week, but listen and you'll understand how we work."
   - "Demo Debrief on Wednesday is celebratory. Friday Retro is where we improve ourselves, not blame."
2. New hire attends all five rituals in their first week (or first two if some don't happen in week 1).
3. Manager asks Friday afternoon: "What did you learn? Which ritual confused you?"

**First Month Check-In** (2-week mark):
- "Can you tell me the purpose of each ritual?" (If they can articulate them, they're integrated.)
- "Which ritual felt most useful? Least useful?"
- Feedback is used to improve rituals (often new hires catch something the team has been overlooking).

**Refreshing Rituals**: Every quarter in the team retro, we ask: "Should we change any ritual? Add one? Drop one?" This keeps rituals alive as the team evolves.

---

## Common Ritual Mistakes We're Avoiding

- ❌ Too many rituals (kills attendance). ✅ We have 5; any new ritual means dropping one.
- ❌ No template; each facilitator runs it differently. ✅ Every ritual has a documented template.
- ❌ Generic names; people forget them. ✅ "Monday Kickoff," "Demo Debrief," "Retro Blameless"—memorable.
- ❌ New hires don't learn rituals until month two. ✅ Rituals are week-one onboarding.
- ❌ Rituals are rigid; they don't evolve. ✅ Quarterly review; we adjust based on team feedback.
```

## Edge Cases

- **Async or distributed team can't all sync for a ritual**: Create an async version that's equally rigorous (recorded demos, Slack polls, Slack threads with time-boxed responses).
- **Ritual attendance drops**: Instead of forcing it, ask why. Is the ritual no longer serving the team? Does it need rescheduling? Or has the team grown beyond needing it? Revisit in retro.
- **New facilitator runs the ritual differently**: Pair-facilitate once; then they own it. If they're consistently changing the ritual, that's feedback—adjust the template or revisit the ritual design.
- **Ritual becomes a status update meeting**: If Kickoff drifts into solutions, Demo Debrief becomes performance review, or Retro becomes a complaint fest, that's the facilitator's cue to reset expectations and template. Read the template aloud at the start.
- **Remote people feel excluded from a ritual**: Ensure rituals have async versions or remote people have equal voice (e.g., Zoom cameras on, shared doc, virtual whiteboard). If in-office people bond in ways remote people can't, design a virtual equivalent or hybrid ritual.
- **Rituals survive longer than they're useful**: Quarterly review is your chance to retire a ritual. "Do we still need Demo Debrief?" is a fair question. If the answer is no, kill it. Rituals should serve the team, not the other way around.
