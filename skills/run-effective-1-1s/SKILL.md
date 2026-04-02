---
name: "Run Effective 1:1s"
description: "Conduct meaningful one-on-one meetings that develop people, not just update status. What it does: Guides you through structured 1:1s with focus on coaching, career development, and wellbeing. When to use it: Before or during any 1:1 with a direct report or mentor. Trigger on: 1:1, one-on-one, skip-level, career conversation, coaching session."
dependencies: []
connectors:
  - name: "Google Calendar"
    reason: "Pulls meeting context and attendee information"
  - name: "Slack"
    reason: "Surfaces recent messages and team dynamics"
  - name: "Notion"
    reason: "Stores 1:1 notes and career development tracking"
author: "Harmony"
version: "1.0.0"
icon: "sparkles"
cover: ""
screenshots: []
category: "Operations"
---

## Purpose

Effective 1:1s are the foundation of great management. They shift from status updates to meaningful conversations that develop people, clarify career direction, and build trust. This skill guides you through coaching-focused 1:1s that help people grow while protecting their wellbeing.

## When to Use

- Before your scheduled 1:1 to prepare structure and talking points
- When a direct report needs career guidance or a reset
- After detecting stress or disengagement signals in transcripts
- When you're defaulting to status-update theater instead of real development
- To prepare for difficult career conversations (performance, growth, role changes)

## Instructions

1. **Set the Right Agenda.** Ask your direct report what they want to discuss. Let them own the agenda—this signals trust and surfaces what matters most to them right now. If they come unprepared, ask: "What's on your mind?" or "What's been challenging or exciting this week?" Avoid dictating topics unless it's a scheduled career conversation or addressing a specific concern.

2. **Check In On Wellbeing First.** Start with recovery and joy. Ask about non-work life, recent wins, or challenges. This grounds the conversation in their whole person, not just output. Sample questions: "How was your weekend?" "Did you get time to recharge?" "Any wins outside of work I should know about?" Watch for changes in energy, tone, or body language that signal stress or disengagement.

3. **Separate Status from Coaching.** If status updates are needed, ask them to send async (email, Slack, doc) before the meeting. Use meeting time for coaching and development instead. Frame this: "Send me a quick update on X before we meet, so we can use our time to dig deeper into how I can support you."

4. **Coach, Don't Advise.** Ask powerful questions rather than giving solutions. "What do you think your next step should be?" or "What would it look like if you solved this yourself?" This builds their judgment and ownership. Follow their answer with: "What's holding you back?" or "What would you need to make that happen?" Stay curious longer before offering your perspective.

5. **Run the Career Conversation.** Every few 1:1s, explicitly discuss: their Life Story (background, values, what shaped them), Future Dreams (5-year vision, aspirations, what energizes them), and Career Action Plan (concrete steps this quarter, skills to build, projects to take on). This prevents drift and shows investment. Document these threads to track progress over time.

6. **Address the Pinch.** If you detect tension or misalignment, address it directly but gently. "I noticed you seemed hesitant about that project. What's going on?" or "Your energy felt different in the last meeting—everything okay?" Don't wait for problems to become crises. Early, honest conversations build trust and prevent resentment.

7. **Monitor the Barbell.** Consider if a standing 1:1 is optimal. Some high-performers prefer occasional deep dives over weekly check-ins. Others need consistency. Adapt frequency to their needs. Some teams use weekly 30-minute focused conversations plus monthly 60-minute career dives. Find the rhythm that works.

8. **End with Clarity.** Summarize what you heard, what you'll both do before next time, and what success looks like. Ask: "What are you taking away from this conversation?" to confirm shared understanding. Document key points and action items with clear ownership (who, what, by when).

9. **Follow Up in Writing.** Send a brief recap within 24 hours. Include: decisions made, commitments from both sides, career progress noted, and next 1:1 date. This creates accountability and reduces miscommunication. Share the doc with them so they see you tracked what matters to them.

10. **Iterate on Format.** After a few 1:1s, ask for feedback: "How are these meetings working for you? Would you prefer different timing, topics, or format?" Every 3-6 months, revisit: "Is this working for you? What would make this more valuable?" Be willing to adjust based on their needs, not just your preference.

## Output Format

The skill produces a structured 1:1 preparation document and post-meeting recap:

**Pre-Meeting Prep:**
- Person's name, role, and tenure at company
- Last 1:1 summary and open action items with completion status
- Recent calendar/transcript signals (wins, challenges, stress indicators, project changes)
- Suggested talking points (career progression, wellbeing check, specific challenges, feedback opportunities)
- Questions to ask (tailored to their development area, tied to previous conversations)
- Time allocation (wellbeing: 5 min, status/async: 5 min, coaching: 15 min, career: 5 min)
- Any sensitive topics or relationship dynamics to navigate carefully

**Post-Meeting Notes:**
- What they shared (career aspirations, challenges, celebrations, personal context)
- Coaching feedback and action items (with specific ownership and deadlines)
- Career progress (life story updates, new dreams, action plan progress, growth areas)
- Wellbeing observations (recovery, joy, stress signals, energy level, any mental health or personal concerns)
- Next 1:1 date and preliminary topics
- Summary of your commitments (skills to share, introductions to make, resources to provide)
- Decisions made and decisions deferred to future conversations
- Patterns to track over time (trends in stress, engagement, ambition, capability)

## Example

**Pre-Meeting Prep for Aisha Chen, Engineering Manager at Vertex AI**

Recent context: Aisha led a major refactor that shipped two weeks ago. Calendar shows late evening commits. Last 1:1 (3 weeks ago) discussed burnout concerns after a difficult project retrospective.

**Suggested talking points:**
- How did the refactor feel after completion? Any learnings?
- You've had some late nights—what's driving that? Is it sustainable?
- I'd like to revisit your career goals. Last time you mentioned interest in architecture.

**Pre-meeting questions:**
- "Tell me about a moment this month when you felt energized by work."
- "What would need to change for you to feel less stretched?"
- "Where do you see yourself in two years?"

---

**Post-Meeting Notes (completed after 1:1)**

Aisha shared: The refactor exceeded her expectations. She's proud of the team dynamic. However, she admitted staying late because she was anxiety-checking code quality, not because of deadline pressure. She's concerned that if she takes time off, things fall apart.

Career insight: Aisha wants to move toward architectural leadership but doubts her judgment on system design. She's also considering a sabbatical in 18 months.

Wellbeing flag: Classic high-performer anxiety pattern. She's equating her presence with team success. Needs permission to trust her team more.

Action items:
- Aisha: Pick one peer engineer to do code review on next feature (ownership + trust-building)
- Aisha: Schedule one "no-code" evening per week (recovery)
- You: Set up pairing session between Aisha and your Director of Architecture on one design decision
- You: Share story about your own delegation lessons and anxiety

Next 1:1 focus: Career development + sabbatical planning.

## Edge Cases

**Remote or Async 1:1s.** If you're distributed or they prefer async, use video recordings or structured written updates (HubSpot-style HPM format: Highlights, Priorities, Metrics). The coaching questions still apply—just adjusted for format. Video calls work better than phone for reading tone and body language. Written 1:1s should be shorter but no less thoughtful—include explicit reflection questions rather than expecting them to volunteer everything.

**New Direct Reports.** First 1:1 should be light—listen more than advise. Build trust before diving into deep career conversations. Focus on understanding their background, values, what they need from you, and what success looks like in their role. Ask: "What's your working style?" "What do you need from your manager?" "What should I know about you to support you well?" These conversations lay the foundation for future depth.

**High-Performer Who Skips Growth.** Some people focus entirely on output and resist career conversations. Frame it as curiosity: "I want to understand what energizes you and where you're headed. It helps me support you better." Start with Life Story, not Future Dreams. Sometimes framing it as "understanding your context" rather than "career planning" reduces resistance. Connect career growth to outcomes they care about (impact, autonomy, learning).

**Difficult News (Performance, Layoff, Role Change).** Separate the conversation into two parts: decision communication first (clear, direct, with hope), then implementation (action plan, resources, next steps). Never blend the bad news with coaching in the same meeting. Give yourself time to prepare emotionally and logistically. Have support resources (HR, EAP, severance info) ready before the conversation starts.

**Cross-Cultural or Language Barriers.** Adjust pace and style to their communication preference. Some cultures find direct "career questions" too intimate early on. Build context through multiple conversations. Use written follow-ups to reduce misunderstanding. Allow silence—some cultural contexts need processing time. Avoid idioms and complex English. Mirror their directness level.

**Post-Crisis Emotional Processing.** After a major setback, failure, or restructuring, the 1:1 becomes a safe space for emotional processing before problem-solving. Validate feelings first, problem-solve second. Don't skip this phase. Sometimes the 1:1 needs to be shorter and more focused on listening. "How are you doing with all this?" is enough sometimes. Offer perspective later, once they've been heard.

**Managing Your Own Manager.** If you're having 1:1s with your manager, bring structure too. Send your own updates, prepare talking points, ask for coaching. Manage up with the same intentionality you manage down. Make their job easier by showing up prepared and taking action on feedback.
