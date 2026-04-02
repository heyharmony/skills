---
name: "Evaluate Candidates"
description: "Synthesize interview data, reference checks, and work samples into a structured ranking. Weight signals correctly: reference checks over interviews, agency over credentials, strengths over absence of weaknesses. Trigger on: candidate debrief, reference check complete, final round decision, hiring committee meeting."
dependencies: []
connectors:
  - name: "HubSpot"
    reason: "Centralized candidate CRM, interview scoring, and hiring pipeline visibility"
  - name: "Notion"
    reason: "Structured evaluation rubric, candidate comparison matrices, scoring templates"
  - name: "Google Drive"
    reason: "Work samples, portfolio review, side projects, and case study analysis"
  - name: "Slack"
    reason: "Reference check coordination, quick team feedback, final decision communication"
  - name: "Gmail"
    reason: "Reference follow-ups, feedback from interviewers, candidate communications"
author: "Harmony"
version: "1.0.0"
icon: "sparkles"
cover: ""
screenshots: []
category: "Operations"
---

## Purpose

Move past individual interview impressions to a data-backed candidate ranking. Separate signal from noise, weight different sources of information correctly, and identify which candidates are actually world-class at what matters. Avoid hiring mistakes driven by urgency, pedigree shortcuts, or overweighting one interview perspective.

## When to Use

- **After interview rounds complete** — synthesize multiple interviewer perspectives into one assessment
- **Before reference checks** — identify top 2-3 candidates worth investing in deeper validation
- **Reference check debrief** — incorporate past performance data into final ranking
- **Candidate committee meetings** — provide structured comparison when multiple stakeholders have opinions
- **Tie-breaker decisions** — two strong candidates remain; use deeper analysis to separate them
- **Post-hire onboarding review** — compare hiring assessment to actual performance; iterate rubric
- **Recurring hiring** — build institutional knowledge of which signals actually predicted success

## Instructions

1. **Separate observation from interpretation before reviewing interview scores**
   - Re-read interviewer notes with focus on: specific behaviors observed, exact quotes, questions asked
   - Note assumptions ("they seem collaborative" vs. "they asked about team dynamics and paused to listen")
   - Flag where you see inference, not data

2. **Map what you actually need on the team**
   - Audit current team: who does what well? Where are gaps?
   - Avoid "unicorn" hiring — prioritize filling the specific gap
   - Ask: "If we only hired one person, what would make our team stronger?"
   - Document: technical skills needed, collaboration style, decision-making approach

3. **Weight reference checks above interviews**
   - Reference checks carry years of working together; interviews carry 45 minutes
   - Call references asking for specifics: "When did they struggle? What would they do differently?"
   - Look for pattern consistency: do multiple references describe same strengths/gaps?
   - Red flag: "They're talented but..." or vague praise without examples

4. **Use paid work trials for roles where possible**
   - Before final offer, give candidates a real (paid) project or take-home challenge
   - Observe: Do they ask clarifying questions? Solve for the right problem? Iterate based on feedback?
   - You're not assessing output; you're seeing their craft and collaboration style
   - Real work reveals what interviews hide

5. **Rank candidates on two axes separately**
   - Axis 1: Strength at core competency (0-5)
   - Axis 2: Fit with team & company culture (0-5)
   - Plot each candidate on 2x2; top-right is obvious yes
   - Question top-left (strong performer, poor cultural fit) and bottom-right (great fit, weak performer)

6. **Identify world-class strengths, not absence of weaknesses**
   - Candidate who's good at everything is mediocre at everything
   - Look for: what is this person exceptional at? Where would you want them leading?
   - Weakness inventory is less important than strength clarity
   - Ask: "If we hired them, what would they immediately unlock for us?"

7. **Force stack-ranking to build self-awareness**
   - Rank your top 3 candidates from best to third-best
   - Write the ranking; write why. Forcing a hard choice reveals what you actually value
   - Share ranking with hiring team; discuss disagreements
   - Often the conversation about ranking matters more than the ranking itself

8. **Use Bar Raiser model for final veto**
   - Assign one outsider (not directly recruiting, no emotional investment) to review full assessment
   - Give them veto power on final hire
   - Their role: sanity check before offer, ask "Would you hire this person for your own team?"

9. **Create a candidate comparison matrix**
   - Columns: each candidate name
   - Rows: core competencies, reference check strength, work trial performance, team gap filled, upside potential
   - Populate with scores and brief evidence
   - Visual comparison often clarifies who's actually stronger

10. **Document your reasoning before hiring committee discussion**
    - Write a memo: "Why we're recommending Candidate X over Candidate Y"
    - Separate emotion from data
    - Share before meeting so discussion focuses on gaps, not persuasion
    - This protects against groupthink and helps you learn post-hire

## Output Format

```
CANDIDATE EVALUATION SUMMARY

Position: [Role Title]
Date: [Evaluation Date]
Evaluator: [Your Name]
Status: [Candidate Name]

CANDIDATE PROFILE
─────────────────
Background: [1-2 sentence summary of relevant experience]
Years of Experience: [X years in domain/role]
Key Strength Areas: [top 2-3 things they're exceptional at]
Current Role: [Where they're coming from]

INTERVIEW ASSESSMENT (Data from multiple interviewers)
──────────────────────────────────────────────────────
Core Competency #1 Score: [0-5]
  Evidence (across all interviewers):
  - [Specific observation from interview]
  - [Quote or pattern noted]

Core Competency #2 Score: [0-5]
  Evidence:
  - [What interviewer observed]

Team Fit Score: [0-5]
  Evidence: [Do they align with your team's collaboration style and values?]

Growth/Learning Potential: [0-5]
  Evidence: [What suggests they can grow into the role?]

REFERENCE VALIDATION
────────────────────
References Checked: [X of Y]

Reference 1 (Manager): [Name, Company, Tenure]
  Strength: [What does manager highlight?]
  Caution: [Any gaps mentioned?]
  Quote: "[Most telling statement]"

Reference 2 (Peer/Skip-level): [Name, Company, Tenure]
  Strength: [Colleague's perspective]
  Caution: [Anything they'd develop?]

WORK TRIAL / CASE STUDY RESULTS (if applicable)
────────────────────────────────────────────────
Task Given: [What did we ask them to do?]
Outcome: [What did they deliver?]
Process: [How did they approach it? Questions asked? Iterations?]
Signal Strength: [High / Medium / Low — how predictive is this?]

COMPARISON TO TEAM GAPS
───────────────────────
Primary Gap You're Filling:
  - This candidate strength: [How they address gap]
  - Secondary impact: [What else improves on team?]

Secondary Gap They DON'T address:
  - [What you'll still need to hire for later]

WORLD-CLASS STRENGTH IDENTIFICATION
────────────────────────────────────
At what is this candidate genuinely exceptional?
  - [Strength #1 — specific, not generic]
  - [Strength #2 — what would unlock?]

Where would you want them leading the team?
  - [Specific initiatives or domains]

RISK ASSESSMENT
───────────────
Green Flags:
  ✓ [Specific pattern that reduces hiring risk]
  ✓ [Another confidence signal]

Yellow Flags (Development needs, not disqualifiers):
  ⚠ [Growth area you'll coach]
  ⚠ [Skill they'll need to build]

Red Flags (Consider carefully before proceeding):
  ✗ [Pattern that concerns you — character, collaboration, integrity]
  ✗ [Any integrity or collaboration red flags?]

FINAL ASSESSMENT
─────────────────
Overall Evaluation: [Clear Yes / Yes / Maybe / No / Clear No]
Confidence Level: [High / Medium / Low]
Compared to Role Requirement: [Exceeds / Meets / Near / Below]
Time to Productive: [Months to full contribution]

RECOMMENDATION
───────────────
[ ] Offer immediately — clear yes, reference checks confirm
[ ] Offer pending reference confirmation — strong on interviews
[ ] Hold for [reason] — gather more data before deciding
[ ] Pass — [specific reason — not enough information, gaps matter for this role, better candidates available]

IF RECOMMENDING: Offer level, start date, and compensation rationale
────────────────
Expected Offer Level: [Level/Band based on experience]
Suggested Compensation: [Range based on market/role]
Signing Bonus Appropriate: [Yes/No — if hiring urgency or competition]

POST-HIRE CALIBRATION (to be completed 6 months in)
─────────────────────────────────────────────────
Actual vs. Predicted Performance: [How did they compare to assessment?]
Learning: [What signals were most predictive? Which misled us?]
```

## Example

```
CANDIDATE EVALUATION SUMMARY — Carmen Rodriguez

Position: Head of Demand Generation
Date: March 20, 2026
Evaluator: David Park
Status: Recommend Offer

CANDIDATE PROFILE
──────────────────
Background: 8 years B2B SaaS demand gen, scaled pipeline from $2M ARR to $50M at previous company
Key Strength Areas: Campaign orchestration, data-driven attribution, team building
Current Role: Director of Demand Gen at large enterprise (wants early-stage environment)

INTERVIEW ASSESSMENT (Data from multiple interviewers)
──────────────────────────────────────────────────────
Campaign Strategy & Execution: 5/5
  Evidence (across all interviewers):
  - Marketing SVP asked her to walk through $10M pipeline campaign; she showed metrics discipline (CAC tracking, attribution rigor) not generic playbook thinking
  - CEO noted she asked about our current funnel bottleneck before proposing strategy — diagnostic-first approach
  - Quote: "I'd need to understand whether your problem is pipeline quantity or quality before recommending channels. Those are opposite diagnoses."

Team Building & Judgment: 4/5
  Evidence:
  - Built team from 2 to 12 people at last company; interviewers consistently noted her references to hiring, onboarding, delegation
  - One development area: scaled her last team when company was predictable; may need coaching on hiring fast in uncertain environment

Analytical Rigor: 5/5
  Evidence:
  - Debugged her own campaign performance in case study; caught her own data error mid-discussion (rare signal of self-awareness)
  - Finance SVP asked technical questions about attribution; she answered confidently but admitted what she'd outsource to analytics

Adaptability: 4/5
  Evidence:
  - Moved from SaaS to fintech-adjacent; described learning curve honestly (not pretending expertise she didn't have)
  - Asked thoughtful questions about our stage, market, and constraints; showed flexibility in approach based on our reality

REFERENCE VALIDATION
─────────────────────
References Checked: 3 of 3

Reference 1 — Former CEO (8 years tenure):
  Strength: "She turned demand gen from cost center into strategic lever. Built repeatable systems other departments copied."
  Caution: "She can be impatient with slower stakeholders; needs partner in ops to execute her plans."
  Quote: "Best demand gen leader I've hired. Would hire her again."

Reference 2 — Peer, VP Sales (worked together 4 years):
  Strength: "We had true partnership. She helped me understand what sales really needed, not just what marketing thought we should do."
  Caution: "May move faster than some teams are comfortable with — she likes to ship, test, iterate."

Reference 3 — Skip-level, Senior Marketer (direct report):
  Strength: "She invested in my growth, gave me ownership, asked great questions in 1:1s."
  Caution: "Sometimes expected us to move at her pace without explaining the strategic why."

CASE STUDY RESULTS
────────────────────
Task Given: "We have 40% MQL-to-SAL conversion. Design how you'd diagnose and fix this."
Outcome:
  - Flagged 3 potential causes (lead quality, sales follow-up timing, qualification mismatch)
  - Recommended testing plan for each diagnostic
  - Provided timeline and success metrics
  - Didn't over-promise, scoped to "90-day discovery phase"
Process:
  - Asked about current tools and data quality before designing solution
  - Showed she'd studied our market and competitive positioning
  - Proposed working with sales to validate assumptions (collaboration signal)
Signal Strength: High — showed methodology, data thinking, and pragmatism

COMPARISON TO TEAM GAPS
───────────────────────
Primary Gap You're Filling: Strategic demand gen leadership
  - Carmen's strength: Takes portfolio approach (channels + campaigns + team) not tactical execution
  - Team impact: Your current team has strong individual contributors; Carmen coaches and elevates

Secondary Needs Not Addressed:
  - Product marketing (she's demand gen focused) — you'll still need to hire for positioning
  - Paid social expertise (her background is mostly content/email; she'll learn or hire specialist)

WORLD-CLASS STRENGTH IDENTIFICATION
────────────────────────────────────
At what is Carmen genuinely exceptional?
  - Attribution and ROI thinking — she measures everything, obsesses over what drives real business growth
  - Building high-ownership teams — creates cultures where people want to do their best work
  - Diagnosing before prescribing — doesn't jump to "let's do a campaign"; asks what you actually need

Where would you want her leading?
  - Running all of growth/marketing as company scales (not just demand gen)
  - Mentoring individual contributors into leadership track

RISK ASSESSMENT
────────────────
Green Flags:
  ✓ All three references independently highlighted strategic thinking + team building
  ✓ Case study showed diagnostic rigor; didn't default to "do more campaigns"
  ✓ Admitted what she doesn't know (product marketing, paid social expertise)
  ✓ Asked good questions about our market, stage, constraints — genuine curiosity

Yellow Flags (Development needs):
  ⚠ May move faster than some team members prefer — coach on context-setting
  ⚠ Previous role was predictable (large company); she's never done scrappy early-stage hiring sprint
  ⚠ Fintech background different from our vertical; ramp time on domain-specific customer knowledge

Red Flags: None identified

FINAL ASSESSMENT
─────────────────
Overall Evaluation: Clear Yes
Confidence Level: High
Compared to Role Requirement: Exceeds requirements
Time to Productive: 2-3 months (domain knowledge ramp) / 6+ months (full strategic impact)

RECOMMENDATION
───────────────
[X] Offer immediately — clear yes, reference checks confirm
[ ] Offer pending [_____]
[ ] Hold for [_____]
[ ] Pass

OFFER RATIONALE
────────────────
She's operating 1-2 levels above role requirements. Hiring her means you have room to grow (she can eventually own all growth). References are glowing and specific. Case study showed problem-solving discipline. One thing to coach: early-stage speed; she may be used to more structure than we have initially.

Expected Offer Level: Manager+1 level (VP trajectory) — not just this role
Suggested Compensation: $180k-200k base, 0.5-0.75% equity
Signing Bonus: Not needed — she's genuinely interested, not courting

POST-HIRE CALIBRATION (6 months)
─────────────────────────────────
[To be completed September 2026]
Actual vs. Predicted: [Did she deliver strategic impact? How'd the team ramp go?]
Learning: [Which signals were most predictive? Did speed/impatience play out as predicted?]
```

## Edge Cases

**High interview performance, weak reference checks** — Weight references heavily. Years of working together beat 45 minutes of performing. If references show gaps interviewers didn't catch, they may have been "interviewing" not assessing. Ask references the same tough questions you asked in interviews.

**Candidate A is stronger culturally, Candidate B stronger technically** — Use your gap analysis. If you're hiring to fix a technical gap, Candidate B wins. If you're hiring for team cohesion and sustainability, Candidate A wins. Don't try to optimize both; choose the gap you're actually filling.

**Unicorn candidate who could do everything** — They'll be overqualified and leave. Instead, hire world-class at one thing (the thing you need most) and good-enough at others. Specialization predicts retention better than versatility.

**Your best interviewer thinks candidate is weak, everyone else thinks they're strong** — Listen to your skeptic. One "no" carries weight. That interviewer may have seen something others missed. Ask them to articulate the concern before overriding.

**Candidate had paid work trial that was mediocre but interviewed well** — Trust the work trial. How someone performs under real conditions (time pressure, real stakes, actual feedback loops) matters more than how they perform in an interview. Mediocre work + great interview = performer.

**You need the hire yesterday but the best candidate wants to negotiate for 3 months** — Don't use urgency to override judgment. A 3-month delay is better than a 3-year regret. If you can't wait 12 weeks, hire someone good-enough and plan to backfill or upskill.

**Reference says "They're talented but weren't ready for the role"** — Press: Ready for what, specifically? That tells you their development edge. Some people aren't ready for scale; some aren't ready for ambiguity. Your role might be where they're ready. Or it might be the same mistake twice.
