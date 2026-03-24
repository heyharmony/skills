---
name: "Synthesize User Research"
description: "Synthesize findings from multiple user research sessions — interviews, usability tests, surveys, call recordings — into a structured report with cross-session themes and prioritized recommendations. Trigger on: research synthesis, user research, interview findings, usability findings, research report, user insights, what did we learn from research."
dependencies: []
---

## Purpose

Transform raw research data from multiple sources and sessions into evidence-backed insights that drive product decisions. This skill helps research teams move from scattered notes and recordings to structured, actionable recommendations tied to specific evidence.

## When to Use

- After completing a series of user interviews, usability tests, or surveys
- When consolidating feedback from multiple research methods
- During product strategy or redesign planning
- Before presenting research findings to stakeholders
- When creating user personas or updating segment definitions
- When you need to prioritize features or changes based on user evidence
- To identify contradictions or gaps in your current understanding

## Instructions

1. **Gather Research Sessions**: Provide summaries, transcripts, or key findings from each research session (interviews, tests, surveys, recordings). Include participant details (role, company size, use case) when relevant.

2. **Identify Raw Findings**: List the direct observations and stated feedback from each session without interpretation.

3. **Extract Themes**: Review all sessions and group findings by topic (usability issues, feature requests, workflow challenges, pain points, etc.).

4. **Assess Evidence Strength**: For each theme, track:
   - How many sessions mention this (frequency)
   - Severity (critical blocker vs. minor inconvenience)
   - Whether it's observed behavior or stated preference
   - Confidence level (high/medium/low)

5. **Map to Segments**: Group findings by user segment or persona when applicable (by role, company size, industry, use case).

6. **Prioritize Findings**: Rank findings using a combination of frequency, severity, and business impact.

7. **Generate Recommendations**: Create actionable next steps tied directly to evidence (e.g., "Recommendation: Simplify the configuration flow [Observed in 6/8 interviews]").

8. **Flag Edge Cases**: Highlight outliers, contradictions, and assumptions that need validation.

## Output Format

```markdown
# Research Synthesis Report

## Overview
- **Research Period**: [dates]
- **Methods**: [interviews, usability tests, surveys, etc.]
- **Total Participants**: [number]
- **Segments Covered**: [list]

## Key Findings (Prioritized)

### Finding 1: [Clear, specific insight]
- **Frequency**: [X/Y sessions]
- **Severity**: [Critical/High/Medium/Low]
- **Type**: [Observed Behavior / Stated Preference / Both]
- **Evidence**: [1-2 specific quotes or examples]
- **Affected Segment(s)**: [user roles/personas]
- **Confidence**: [High/Medium/Low]

### Finding 2: [Next prioritized finding]
...

## Insights by Segment

### [Segment/Persona Name]
- [Key findings for this segment]
- [Distinct needs or pain points]
- [Recommended focus areas]

## Recommendations

1. **[Action Title]** [Linked to Finding X]
   - Why: [Brief explanation of impact]
   - Evidence: Observed in [X] sessions
   - Priority: [High/Medium/Low]

2. **[Next Action]** ...

## Contradictions & Nuance

- **[Contradiction A]**: [Description and potential explanations]
- **[Assumption to Validate]**: [What needs follow-up research]

## Research Quality Notes

- **Gaps**: [What wasn't covered well]
- **Limitations**: [Sample size, methodology constraints]
- **Follow-up Research Needed**: [Specific questions to explore]
```

## Example

### Input
Research for B2B analytics product redesign:
- 8 in-depth interviews with data analysts and managers
- 2 usability tests with new users
- 1 survey of 20+ current users
- Recordings and notes from all sessions
- Participant roles: Data Analysts (5), Analytics Managers (4), C-suite (3)

### Output

```markdown
# Research Synthesis Report: Analytics Platform Redesign

## Overview
- **Research Period**: January 15 - February 28, 2026
- **Methods**: User interviews, usability testing, online survey
- **Total Participants**: 30+ (8 interviews, 2 usability tests, 20+ survey respondents)
- **Segments Covered**: Data Analysts, Analytics Managers, Executive Users

## Key Findings (Prioritized)

### Finding 1: Navigation Complexity Blocks Power Users
- **Frequency**: 7/8 interviews + 2/2 usability tests
- **Severity**: Critical
- **Type**: Observed Behavior
- **Evidence**: "I have to hunt for the advanced filters every time. It's buried under three menus." - Sarah Chen, Data Analyst, TechCorp. During usability test, both participants spent 3+ minutes searching for drill-down feature.
- **Affected Segment(s)**: Data Analysts, Analytics Managers
- **Confidence**: High

### Finding 2: Managers Want Pre-built Dashboards for Executive Reporting
- **Frequency**: 6/8 interviews
- **Severity**: High
- **Type**: Stated Preference (with some observed behavior in survey write-ins)
- **Evidence**: "We spend 40% of our time building custom dashboards for executive presentations. Pre-built templates would save us days each quarter." - Marcus Johnson, Analytics Manager, RetailCo. 65% of survey respondents requested dashboard templates.
- **Affected Segment(s)**: Analytics Managers, Executive Users
- **Confidence**: High

### Finding 3: Data Freshness Expectations Vary by Role
- **Frequency**: 4/8 interviews
- **Severity**: Medium
- **Type**: Stated Preference
- **Evidence**: Analysts want real-time data; managers prioritize accuracy over speed. "I don't need live updates—give me reliable data even if it's 2 hours old." - David Park, VP Analytics, FinanceInc.
- **Affected Segment(s)**: Analytics Managers, Executive Users
- **Confidence**: Medium

### Finding 4: Mobile Access is Nice-to-Have, Not Critical
- **Frequency**: 2/8 interviews (spontaneously mentioned)
- **Severity**: Low
- **Type**: Stated Preference
- **Evidence**: Only brought up by mobile-first companies; not a blocker for others.
- **Affected Segment(s)**: All segments
- **Confidence**: Medium

## Insights by Segment

### Data Analysts
- **Primary Pain Point**: Hidden or non-obvious advanced features
- **Workflow**: Build custom reports, drill into anomalies, export for stakeholders
- **Recommendation Focus**: Surface advanced features, keyboard shortcuts, favorites/saved queries

### Analytics Managers
- **Primary Pain Points**: Time spent building executive dashboards, proving ROI of analytics
- **Workflow**: Aggregate findings, create presentations, manage team
- **Recommendation Focus**: Templates, automated reporting, collaboration features

### Executive Users
- **Primary Needs**: Fast insights, clear visualizations, confidence in accuracy
- **Workflow**: Review dashboards, make quick decisions, ask follow-up questions to analysts
- **Recommendation Focus**: KPI-focused views, drill-down to understand data, mobile when on-the-go

## Recommendations

1. **Reorganize Navigation to Surface Advanced Features** [Finding 1]
   - Why: Power users can't access critical functionality; impacts efficiency
   - Evidence: Observed in 9/10 usability/interview sessions
   - Priority: High (do this first)
   - Approach: Create analytics power-user menu, add search/command palette

2. **Build 5-10 Pre-built Dashboard Templates for Common Use Cases** [Finding 2]
   - Why: Saves managers 2-3 days per month; unblocks reporting workflows
   - Evidence: Requested by 6 managers, 65% of survey respondents
   - Priority: High (strong ROI)
   - Approach: Partner with customers to design templates for Sales, Marketing, Finance use cases

3. **Implement Configurable Data Refresh Intervals** [Finding 3]
   - Why: Aligns system design with actual user needs; enables cost optimization
   - Evidence: Varies by role; real-time is want, not need for most
   - Priority: Medium (post-launch)
   - Approach: Let admins set refresh schedules per dashboard; document trade-offs

4. **Defer Mobile App Development** [Finding 4]
   - Why: Not a blocker; responsive web design meets current needs
   - Evidence: Only 2/8 interviewees mentioned; not a deal-breaker
   - Priority: Low (evaluate in 12 months)

## Contradictions & Nuance

### Contradiction 1: Customization vs. Simplicity
- Data Analysts want extreme customization ("I need to build exactly what I want")
- Executive Users want pre-built simplicity ("Just show me the KPIs")
- **Resolution**: Offer both—basic dashboard templates for executives, advanced builder for analysts

### Contradiction 2: Feature Requests vs. Actual Usage
- Managers requested 15+ new features in interviews
- Survey results showed only 4 of those features had majority interest
- **Explanation**: Interviews surface "nice-to-haves"; surveys reveal what's truly blocking work

### Assumption to Validate
- We assumed data freshness was critical across the board. Findings suggest it's role-dependent.
- **Follow-up Research**: Quantify impact of delayed data on decision quality; test different refresh intervals with analysts.

## Research Quality Notes

- **Gaps**: Limited representation from very small companies (SMB); no international users interviewed
- **Limitations**: Usability tests were with power users (not first-time users); survey may have selection bias (power users more likely to respond)
- **Follow-up Research Needed**: 
  - Validate navigation design with first-time users in a follow-up study
  - Test dashboard template designs with a wider manager segment
  - Run quantitative survey on data freshness preferences (larger sample)
```

## Edge Cases

**Small Sample Sizes**: If you have fewer than 3-4 sessions, flag findings as exploratory. Avoid high-confidence claims.

**Contradictory Findings**: Don't hide contradictions. Segment them clearly ("Analysts want X; managers want Y"). This is data, not failure.

**Stakeholder Bias**: If findings contradict what leaders believe, be explicit about evidence. Example: "While leadership expected mobile to be critical, only 2/8 interviewees mentioned it. Survey confirmed it's not a blocker."

**Challenging Assumptions**: If research upends current product strategy, highlight this carefully with clear evidence. Give stakeholders context and suggest follow-up validation.

**Stated vs. Observed Gaps**: Users often say they want Feature X but don't actually use similar features. Always note the difference and recommend behavioral validation before building.

**Outliers**: One person's feedback isn't a finding. Flag interesting outliers separately from patterns with 3+ mentions.
