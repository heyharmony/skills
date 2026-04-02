---
name: "Conduct Hiring Interviews"
description: "Execute structured behavioral interviews with deep technical probing. Assess how candidates think through problems, learn from failure, and approach preparation. Trigger on: interview prep, candidate scheduled, technical assessment needed, interview debrief."
dependencies: []
connectors:
  - name: "LinkedIn"
    reason: "Candidate background, previous roles, and professional history context"
  - name: "Google Calendar"
    reason: "Interview scheduling, time blocking, and candidate preparation time"
  - name: "Slack"
    reason: "Interview coordination with hiring team, real-time interview notes"
  - name: "Notion"
    reason: "Centralized interview rubric, scoring templates, and team calibration"
  - name: "Gmail"
    reason: "Candidate communication, feedback sharing with interview panel"
author: "Harmony"
version: "1.0.0"
icon: "sparkles"
cover: ""
screenshots: []
category: "Operations"
---

## Purpose

Structure interviews to reveal genuine capability beneath polished presentation. Move beyond scripted responses and hypothetical scenarios to observe how candidates think, learn, and approach unfamiliar problems. Use behavioral anchors and persistent questioning to distinguish depth from surface knowledge.

## When to Use

- **Before any hiring meeting** — prepare structured questions and calibrate evaluation criteria with hiring team
- **Technical role assessment** — when depth of expertise is critical to success
- **Leadership or judgment-heavy roles** — where past decisions reveal thinking patterns
- **Cross-functional interviews** — when multiple team members need to assess different competencies
- **Extended hiring pipelines** — when candidates may be interviewed by 3+ people over weeks
- **High-stakes replacements** — roles where hiring mistakes are expensive
- **Founder/C-suite hiring** — when the person shapes company culture and strategy

## Instructions

1. **Prepare the interview rubric before meeting the candidate**
   - Define 4-5 competencies you're actually assessing (not generic "communication" but "communicates ambiguity to skeptics")
   - Create 2-3 behavioral anchor questions per competency
   - Establish a scoring scale (0-5: clear no, no, maybe, yes, clear yes)
   - Share rubric with co-interviewers 24 hours before

2. **Ask how they prepared for the interview**
   - This reveals thinking style, diligence, and whether they researched your company
   - Listen to what they chose to prioritize — shows judgment
   - Note: rushed prep suggests low interest or disorganization

3. **Start with open biographical prompts, then drill six levels deep**
   - "Walk me through your last major project" (observe narrative structure)
   - Level 2: "What was your specific role?" (isolate their contribution)
   - Level 3: "What was the hardest part?" (reveals where they struggle)
   - Level 4: "What would you do differently now?" (shows learning)
   - Level 5: "What did you learn that applies here?" (connects to job)
   - Level 6: "Tell me when you faced that same challenge elsewhere" (depth pattern)

4. **Use the PEARL framework for behavioral stories**
   - **Problem**: "What was the situation you inherited?"
   - **Epiphany**: "When did you realize what needed to change?"
   - **Action**: "What specifically did you do?" (detail matters)
   - **Result**: "What actually happened? With numbers if possible"
   - **Learning**: "What would you do differently? What stuck with you?"

5. **Always ask the failure question**
   - "Tell me about your biggest product flop or professional setback"
   - Watch for: accountability vs. blame-shifting, specific learning, pattern recognition
   - Candidates who can't articulate failure haven't been tested enough

6. **Test working together through simulation**
   - Present a real (or realistic) problem they'd face in role
   - Observe their questions (what do they ask first?), assumptions, problem-solving approach
   - You're not grading the answer — you're watching their craft in action
   - "Walk me through how you'd approach this"

7. **End with open architecture**
   - "Is there anything else I should know about you?" or "What haven't we talked about that's important?"
   - Often the most important thing emerges when structure dissolves
   - Best answers come when candidates own the agenda

8. **Avoid these patterns**
   - Hypothetical questions ("What would you do if...") — ask what they actually did
   - Polished elevator pitches — interrupt and ask for specifics
   - Selling the role — you're assessing, not convincing
   - Following up on what you wanted to hear — dig on inconsistencies instead

9. **Score immediately after, before discussing with co-interviewers**
   - Write your assessment before group debrief
   - Separate observation from group influence
   - Note: specific quotes beat general impressions

10. **Share scoring and listen for red flags from other interviewers**
    - One interviewer's "no" is worth ten "maybes"
    - Look for patterns across interviewers vs. outlier disagreement
    - Push on character/integrity concerns — culture rot starts with tolerance

## Output Format

```
INTERVIEW ASSESSMENT — [Candidate Name]

Role: [Position Title]
Date: [Interview Date]
Interviewer: [Your Name]

COMPETENCY SCORES (0-5 scale: 0=Clear No, 3=Maybe, 5=Clear Yes)
─────────────────────────────────────────
Problem-Solving Depth: [0-5]
  - Evidence: [specific example from interview]
  - Quote: "[exact statement revealing thinking]"

Technical Mastery (if applicable): [0-5]
  - Evidence: [how they explained architecture/approach]
  - Concern/Strength: [specific technical assessment]

Learning Agility: [0-5]
  - Evidence: [example of learning from failure]
  - Quote: "[how they described what they'd do differently]"

Communication Clarity: [0-5]
  - Evidence: [how well they explained complex idea]
  - Strength/Gap: [can they hold attention/explain ambiguity?]

Preparation & Interest: [0-5]
  - Evidence: [what research did they do? what questions did they ask?]
  - Signal: [does their interest level match your needs?]

OVERALL ASSESSMENT
─────────────────
Overall Score: [0-5]
Recommendation: [Clear Yes / Yes / Maybe / No / Clear No]
Fit Confidence: [High / Medium / Low]

KEY SIGNALS
───────────
✓ Strengths:
  - [1-2 specific patterns that impressed you]

⚠ Concerns:
  - [1-2 patterns that worried you, if any]

RED FLAGS (if present):
  - [Character, integrity, or pattern concerns]

RECOMMENDATION FOR NEXT ROUND
──────────────────────────────
[ ] Advance to [next stage]
[ ] Hold for discussion with hiring team
[ ] Pass — recommend [reason]

QUESTIONS FOR CO-INTERVIEWERS
──────────────────────────────
- [What should they probe on further?]
- [Did you see something different?]
```

## Example

```
INTERVIEW ASSESSMENT — Marcus Chen

Role: Senior Product Manager
Date: March 18, 2026
Interviewer: Sarah Kim

COMPETENCY SCORES (0-5 scale)
─────────────────────────────
Problem-Solving Depth: 4
  - Evidence: When asked about scaling metrics infrastructure, he immediately asked about user growth patterns, infrastructure constraints, and existing instrumentation before proposing solutions. Then walked back his first answer when I probed assumptions.
  - Quote: "Actually, I should've asked about your current bottleneck. The infrastructure matters more than the framework choice."

Technical Mastery: 3
  - Evidence: Understands data fundamentals and can converse with engineers. Gaps in DevOps and cloud infrastructure, but willing to defer to specialists.
  - Concern: Leaned on previous company's approach; may need coaching on our specific tech stack

Learning Agility: 5
  - Evidence: Described a failed product launch where engagement dropped 40%. Spent 6 months understanding why (not just defensive), which led to completely different GTM approach on next product. Changed fundamental assumptions about their customer base.
  - Quote: "I realized I'd been optimizing for the wrong metric. That taught me to listen to usage data, not my hypothesis."

Communication Clarity: 4
  - Evidence: Explained complex marketplace dynamics clearly. When I asked him to walk through a supply-demand imbalance scenario, he worked through it methodically, acknowledged what he didn't know, and asked clarifying questions.
  - Strength: Comfortable with ambiguity; doesn't pretend certainty

Preparation & Interest: 5
  - Evidence: Asked detailed questions about current metrics challenges, referenced our blog post from two months ago, named three people he'd want to learn from on the team.
  - Signal: High genuine interest; not just interviewing everywhere

OVERALL ASSESSMENT
──────────────────
Overall Score: 4.2
Recommendation: Yes
Fit Confidence: High

KEY SIGNALS
──────────
✓ Strengths:
  - Shows intellectual humility; willing to change course when data suggests it
  - Probes before proposing; reduces risk of wrong solutions
  - Demonstrates real product judgment across multiple markets

⚠ Concerns:
  - May need ramp time on technical infrastructure specifics
  - Previous experience in larger, slower-moving orgs; we're much faster-paced

RECOMMENDATION FOR NEXT ROUND
─────────────────────────────
[X] Advance to panel round with engineering + analytics leads
[ ] Hold for discussion with hiring team
[ ] Pass

Questions for co-interviewers:
- How does his technical depth compare to what you need in this role?
- Did he ask good technical questions? Does he know what he doesn't know?
- Does his speed/pace feel right for our organization?
```

## Edge Cases

**Candidate prepares perfectly canned answers** — Interrupt with "I want the real story, not the polished version" or ask a variant you didn't signal. Prepared responses suggest coaching but maybe not authentic depth.

**They claim they haven't failed** — This is a yellow flag. Either they haven't been tested, they're risk-averse, or they won't admit fallibility. Press: "Tell me a time you'd do something differently" or "Describe a project that missed expectations."

**Technical interview with non-technical co-interviewer** — Assign this interviewer to assess communication clarity, collaboration, and how they explain technical decisions to non-technical stakeholders instead.

**Candidate interviews with multiple people over weeks** — Reset your rubric between panels. Different interviewers should probe different competencies. Share feedback after first round so you're not duplicating questions.

**Great interview performance, weak reference checks** — Weight references heavily. 2-3 years of working together outweighs 45 minutes of performing. Ask the same PEARL questions in references you asked in interviews.

**Candidate is moving from industry you don't understand** — Ask them to explain their domain, then translate core competencies to your world. "What's the equivalent challenge you'd solve here?" If they can't bridge, they may not transfer.
