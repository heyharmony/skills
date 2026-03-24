---
name: "Run Effective Meetings"
description: "Design and execute meetings where decisions get made and alignment happens fast. What it does: Prepares meeting structure, identifies the right format, and ensures action comes out the other side. When to use it: Before planning a meeting or when you sense a meeting is spinning wheels. Trigger on: meeting prep, decision-making, alignment meeting, kickoff, retrospective, standup, all-hands."
dependencies: []
connectors:
  - name: "Google Calendar"
    reason: "Pulls meeting details, attendees, and prior calendar patterns"
  - name: "Gmail"
    reason: "Surfaces relevant email context and pre-reads"
  - name: "Slack"
    reason: "Captures ongoing discussion threads and decisions already made"
  - name: "Notion"
    reason: "Stores meeting templates, decision logs, and follow-up tracking"
---

## Purpose

Most meetings are bloated status updates where few decisions happen and even fewer people leave with clarity. Effective meetings separate strategic discussion from operational updates, move sync work to async, and end with crystal-clear decisions, ownership, and communication plans. This skill helps you design and run meetings that actually move things forward.

## When to Use

- Planning an important decision-making meeting
- Sensing that a recurring meeting has stopped being valuable
- Preparing an all-hands or team sync that needs to land
- Designing a kickoff, retrospective, or strategic planning session
- When you feel a meeting spinning or people seeming disengaged

## Instructions

1. **Define the Meeting's Purpose First.** Ask: "What decision needs to be made here?" or "What alignment must happen?" If you can't answer either, skip the meeting. Consider: Can this be a Slack thread, a doc review, or a quick 1:1 instead?

2. **Separate Strategic from Operational.** Strategic meetings have debate, trade-off exploration, and new information. Operational meetings are status, coordination, or process. Don't mix them. If people are sharing updates, that should be async (email, dashboard, doc) before the meeting.

3. **Run the Priming Phase.** Send a pre-read 24 hours before. Include: meeting objective, critical context, questions you want debated, and any data or artifacts people need to review. This prevents meeting time spent on information transfer. People come prepared with opinions.

4. **Design the Format to Fit the Purpose.**
   - Decision meeting: structured debate, present all options with trade-offs, clear recommendation with reasoning, alignment on next steps
   - Alignment meeting: agenda-setting to surface concerns and blockers, discussion of constraints and tradeoffs, clear next steps and ownership
   - All-hands: CEO or leader address on strategy/vision, Q&A to surface concerns, celebrate wins/progress, preview what's coming next
   - Retrospective: what went well (acknowledge wins), what could be better (specific situations, not blame), focused action items only for next cycle
   - Brainstorm: loose agenda with problem statement, facilitate idea generation without judgment, capture ideas in shared doc, iterate async and decide later

5. **Minimize Attendees Ruthlessly.** Only invite people who need to contribute or decide. More people = slower decision, less engagement. Default to small. Pull in others for specific topics if needed (async or later meetings).

6. **Use State Changes to Maintain Engagement.** Switch between formats: presentation, small-group discussion, individual reflection, whole-group debate. Static meetings bore people. Move bodies (virtual or in-person), change who talks, break into breakouts.

7. **Move Updates Asynchronously.** Before the meeting, ask: "What can be shared as a pre-read or dashboard instead of live updates?" Suggested format: Highlights (wins, learnings) | Priorities (what's next) | Metrics (numbers that matter). This frees 30-50% of meeting time for actual discussion.

8. **Clear Your Deciders' Calendar.** Major decisions need undistracted thinking. For important meetings, ask stakeholders to clear distractions: no emails, no second screens, no back-to-backs. Cognitive load matters.

9. **End with Three Questions.** Every meeting ends with clarity on: (1) "What did we decide?" (2) "Who's doing what and by when?" (3) "Who needs to know?" Write these down, share in Slack immediately after.

10. **Close the Loop.** Follow up within 24 hours with: decision summary, action items with owners/deadlines, next steps, and who needs to communicate what to whom. Store this in a decision log for reference and continuity.

## Output Format

The skill produces a meeting design template and post-meeting summary:

**Pre-Meeting Brief:**
- Meeting objective (decision, alignment, information-sharing, brainstorm)
- Attendees and decision-maker(s)
- Pre-read content (relevant context, data, questions to consider)
- Time allocation (agenda breakdown by topic and format)
- Potential debate points and trade-offs to explore
- Decision framework (how you'll choose between options)
- Success metric (what does a successful meeting look like?)

**Live Meeting Facilitation Notes:**
- Key points raised and by whom
- Trade-offs explored
- Objections voiced and addressed
- Decision or consensus summary

**Post-Meeting Summary (shared within 24 hours):**
- **What we decided:** Clear statement of each decision made
- **Who's doing what:** Action items with owner names, deadlines, and success criteria
- **Who needs to know:** Communication plan (who tells whom, when, how)
- **Open questions:** Any ambiguities to resolve in follow-up
- **Next meeting:** Date and purpose if a sequel is needed

## Example

**Pre-Meeting Brief: Product Roadmap Q2 Planning at CloudSync**

Objective: Decide which three features to prioritize for Q2 (the team has five candidate features ranked by customer requests and engineering complexity).

Attendees: VP Product (Sarah), Head of Engineering (Marcus), Customer Success lead (James), CFO (David). Sarah is the decision-maker; others inform the decision.

Pre-read (sent 2 days prior):
- Feature candidates with customer impact, engineering effort, and revenue potential
- Customer request data (which accounts want each feature, how many)
- Engineering capacity and dependencies
- Competing initiatives (infrastructure debt, hiring)

Agenda:
- Context: Where we are, what we're optimizing for (10 min, presentation)
- Customer perspective: James shares top 5 customer asks (5 min)
- Trade-off debate: Which features, in what order, given constraints (20 min)
- Decision: Announce priority and next steps (5 min)

Decision framework: Pick features that deliver high customer value AND fit engineering capacity, with preference for features that unblock multiple customers.

---

**Post-Meeting Summary (CloudSync Roadmap)**

**What we decided:**
- Q2 Priority 1: SSO integration (Customer demand: 8 accounts requesting, Revenue impact: Medium, Engineering effort: 4 weeks)
- Q2 Priority 2: Advanced audit logging (Security compliance request, Revenue impact: Deal-unlock, Engineering effort: 3 weeks)
- Q2 Priority 3: API rate-limiting improvements (Customer experience, Infrastructure foundation, Engineering effort: 2 weeks)

Deprioritized: Mobile app redesign (lower customer demand now, push to Q3), Advanced analytics (nice-to-have, not blocking deals)

**Who's doing what:**
- Marcus (Engineering): Sequence these three features into sprints by end of week. Flag any dependencies. (Deadline: Friday)
- Sarah (Product): Document feature specs and acceptance criteria for each. (Deadline: Next Wednesday)
- James (CS): Notify the eight SSO customers we're shipping it Q2. Alert the compliance customer on audit logging timeline. (Deadline: Tomorrow)
- David (CFO): Update board materials on roadmap. (Deadline: Next Tuesday)

**Who needs to know:**
- Engineering team: Sarah and Marcus co-present in Monday standup
- Sales: James briefs sales team on new messaging (SSO + compliance wins)
- Board: David shares in next monthly update

**Next meeting:** 2 weeks (mid-sprint check-in on pace and blockers)

## Edge Cases

**Distributed or Async-First Teams.** Pre-reads become even more critical. Record the meeting and post a summary so async folks see decisions and reasoning. Consider having real-time decision meetings during overlapping hours with async input beforehand. Use Slack threads or collaborative docs to gather async perspective before the live meeting. Give people 24 hours to submit written input rather than expecting them to be fully present at an inconvenient time.

**Large Group Decisions (30+ people).** Don't debate in the room. Use a small core group to explore options (written discussion or smaller meeting), then present the recommendation to the larger group with Q&A. Large meetings default to politics, not insights. Transparency matters more than participation—people want to understand the reasoning even if they didn't influence the decision.

**Urgent Meeting (No Prep Time).** Be explicit: "We don't have pre-reads, so spend first 10 minutes on context sharing, then debate." Reduce decision complexity if possible (make the decision with imperfect information rather than delaying for more data). Accept that the decision might need revisiting once you have better information—it's still faster than delaying for perfect data.

**Meeting Is Really a Status Update Theater.** Redirect: Move status to async dashboard or Slack thread. Ask the real question: "What's the actual decision or alignment needed here?" If there isn't one, cancel the meeting and save people the time. Recurring status meetings should default to off unless there's a clear purpose.

**Cross-Functional Team with Different Agendas.** Be crystal clear on meeting scope. "Today we're deciding X. We're NOT deciding Y (that's next week). We ARE discussing Z as context." Set guardrails so debate stays focused. Call out when someone is veering into out-of-scope territory: "That's important but let's track it separately."

**Someone Dominates the Conversation.** Invite quieter voices: "Marcus, we haven't heard your perspective on this trade-off. What are you thinking?" Call out patterns: "Let's hear from people who haven't spoken yet." Use written input before verbal to balance participation. Sometimes ask people to write down their thinking individually before group discussion to prevent early talkers from anchoring the room.

**Decision Took Longer Than Expected.** Don't extend the meeting indefinitely. If you're running out of time, decide: "We're over time. Let's table this, gather more input async, and reconvene [specific date]." A rushed decision made under time pressure is often weaker than a delayed decision made well.
