---
name: "Design Surveys"
description: "Create surveys that reveal customer insights without biasing responses or overwhelming respondents. What it does: structures surveys for maximum response + insight; pairs quantitative metrics with qualitative context; identifies which customers to survey and when. When to use it: measuring product-market fit, understanding churn reasons, evaluating new features, or generating customer insights. Trigger on: NPS survey, customer feedback, product-market fit, qualitative research, survey design, customer satisfaction, poll."
dependencies: []
connectors:
  - name: "Google Forms / Typeform"
    reason: "Distribute surveys and collect responses at scale"
  - name: "HubSpot"
    reason: "Segment customers by lifecycle stage and survey at the right moment (post-purchase, after churn)"
  - name: "Slack"
    reason: "Analyze support conversations and feedback mentions to inform survey questions"
  - name: "Intercom"
    reason: "Deploy targeted in-app surveys to specific user segments; measure engagement with survey"
author: "Harmony"
version: "1.0.0"
icon: "sparkles"
cover: ""
screenshots: []
category: "Product"
---

## Purpose

Surveys are powerful tools for understanding your customers, but most are poorly designed and generate worthless data. A badly designed survey will bias responses, overwhelm respondents, and leave you with answers to questions you didn't mean to ask.

A well-designed survey respects respondent time, asks clear questions, and pairs quantitative metrics (numbers) with qualitative context (why). The goal is not to accumulate survey responses; it's to generate insights that change how you build.

Your job is to identify the 3-5 critical questions you need answered, structure them to minimize bias, choose the right respondents, survey at the right moment, and actually act on the results.

## When to Use This Skill

- You want to measure product-market fit using the Sean Ellis question or NPS
- You're trying to understand why customers churn
- You need to validate a feature concept before investing engineering time
- You've noticed a common pattern in support tickets and want to quantify it across your customer base
- You're considering a major product pivot and want customer input
- Customers have feedback but you're not sure what percentage actually feel this way
- You want to segment customers by need or use case to inform roadmap prioritization

## Instructions

1. **Define the core insight you're seeking**
   - What's the one question whose answer would change how you build? (Maximum 1-3 questions)
   - Example: "Do users with less than 5 team members churn more?" not "Tell us everything about your experience"
   - Sub-bullets: Frame the question in terms of decision, not information gathering; ensure answer would drive action

2. **Choose question types: quantitative + qualitative pairs**
   - Quantitative: NPS, Likert scale (1-5), multiple choice with single answer (ranked), open-ended statement rating
   - Qualitative: Open-ended text, follow-up "Why?" to quantitative questions, ranking (which feature matters most?)
   - Pattern: Ask a structured question, then ask "Why?" or show multiple-choice follow-ups
   - Sub-bullets: Design survey with 5-7 questions max; 60% structured, 40% open-ended; avoid all quantitative (no context) or all qualitative (too long to respond)

3. **Avoid leading questions and response bias**
   - Leading question: "How great was your experience?" (assumes greatness; biases toward positive)
   - Better: "How would you describe your experience?" or "Did your experience meet expectations?"
   - Avoid assumptive language: "As you probably know..." (biases toward agreement)
   - Avoid false dichotomies: "Do you prefer A or B?" (what about both? neither?)
   - Sub-bullets: Read each question aloud; ask if it biases toward an answer; rewrite to neutral framing; test with 3 people before launch

4. **Use consistent response scales and anchors**
   - Consistency: Use 1-5 or 1-7 for all scales, not mixed (1-5 for one question, 1-10 for another = confusion)
   - Anchor the scale: "1 = Not at all likely, 5 = Very likely" (not just 1-5)
   - Avoid ambiguous middle options: 1-5 has a "neutral" middle which invites non-commitment
   - 1-7 lets strong opinions be captured (extreme low) and extreme high without forcing a middle
   - Sub-bullets: Pick 1-5 or 1-7 and stick with it; define both ends of scale; test scale with target respondents

5. **Structure the survey to start strong and end strong**
   - Lead with the most important question (engagement drops with each question)
   - Q1: Your critical quantitative question (e.g., "How likely are you to recommend this?" [NPS])
   - Q2-4: Supporting questions (usually multiple choice or Likert scale)
   - Q5-7: Open-ended follow-ups that dig into why (e.g., "What's the biggest friction point?")
   - Avoid demographic questions at the start unless critical to segment (people are more willing to share demographics after investing time)
   - Sub-bullets: Test order with users; move demographic questions to end; measure response completion rate by position

6. **Add qualitative "Why?" questions after key quantitative ones**
   - NPS without "Why?" is useless (a score of 6 could mean anything)
   - After any rating scale, ask: "What's one reason you gave this score?"
   - Keep open-ended questions to 1-2 sentences max (long text fields get skipped)
   - Example: "On a scale of 1-5, how likely are you to use this feature? [1-5] Why did you choose that score? [Text]"
   - Sub-bullets: Pair every rating with a "why"; keep follow-up copy short; measure how many people answer open-ended (if <50%, the question isn't resonating)

7. **Segment results to find hidden patterns**
   - Aggregate scores hide persona-level insights (e.g., SMB customers rate X as 4.2, enterprise rates as 3.1; average of 3.6 is meaningless)
   - Segment by: customer tier (free vs. paid, SMB vs. enterprise), tenure (new vs. long-term), use case, feature adoption, churn status
   - Example: "81% of power users would recommend this. 34% of casual users would. Overall NPS is 52%." (Last number is less useful.)
   - Sub-bullets: Decide on 2-3 segments before launching; ensure sample size in each segment is sufficient (30+ per segment); analyze separately

8. **Choose the right respondents and timing**
   - Right time: After a key moment that provokes opinion (end of trial, after support issue, after using new feature, post-churn)
   - Right people: People who've actually experienced what you're asking about
   - Avoid: Spamming all users with random survey; surveying users who haven't used the feature you're asking about
   - Sample size: 30-50 responses per segment (if segmenting) is solid; 100+ is excellent; 10 is too small
   - Sub-bullets: Identify trigger events for survey; define which customer segments to survey; set target response count before launching; plan to keep survey open until you hit target

9. **Design survey copy that's clear and respectful**
   - Respect time: Show estimated completion time ("This takes 2 minutes")
   - Avoid jargon: Use customer language, not internal terms
   - Be honest about use: "We're using this to decide whether to invest in feature X" (transparency builds trust)
   - Avoid mandatory fields (except email, if you want follow-up): Let people skip if they don't have an opinion
   - Sub-bullets: Write copy at 8th-grade reading level; read questions aloud; test with non-employees for clarity

10. **Measure response rate and iterate survey design**
    - Response rate: <20% = survey too long or poorly timed; 20-40% = solid; >40% = excellent
    - If low response rate: Make it shorter, improve subject line, survey at a better moment, or provide incentive
    - Track which questions people skip (if >20% skip a question, reword it)
    - A/B test subject lines or copy to see what drives higher response
    - Sub-bullets: Set baseline of current response rate; test changes; measure impact; retire low-response surveys

## Output Format

```
SURVEY DESIGN & ANALYSIS
=======================

Survey Title: [Name]
Goal: [Core insight you're seeking]
Target Audience: [Segment and size]
Distribution Channel: [Email, in-app, link, other]
Estimated Completion Time: [X minutes]
Target Response Count: [Y responses]
Launch Date: [Date]

---

RESEARCH QUESTION & HYPOTHESIS

Core Insight Needed:
- In one sentence, what will change your roadmap or product strategy if you learn this?
- Decision or action that depends on this insight:

Primary Research Question:
- The 1-3 core questions whose answers drive decision:
- Question 1: [Question and expected use of answer]
- Question 2: [Question and expected use]
- Question 3: [If applicable]

Secondary Questions:
- [Supporting questions that provide context or segment respondents]

---

SURVEY STRUCTURE & QUESTION DESIGN

[Question 1: Primary Quantitative]
- Type: [NPS / Likert scale 1-5 / Multiple choice / Other]
- Question copy: [Exactly as it will appear]
- Scale/Options: [e.g., "1 = Not at all likely, 5 = Very likely"]
- Why it matters: [What insight does this provide?]
- Bias check: [Is this neutral language? Any leading words?]

[Question 2: Qualitative Follow-Up to Q1]
- Type: Open-ended text
- Question copy: "Why did you give that score?"
- Max response length: [2-3 sentences requested]
- Why paired: [To understand the reasoning behind the rating]

[Question 3: Secondary Quantitative]
- Type: [Multiple choice / Likert / Other]
- Question copy: [As written]
- Scale/Options: [List all options]
- Why it matters: [Provides segmentation or context]
- Bias check: [Neutral?]

[Question 4: Qualitative Follow-Up]
- Type: Open-ended
- Question copy: [As written]
- Max length: [Brief]
- Why paired: [Context]

[Repeat for remaining questions, max 7 total]

---

SCALE CONSISTENCY AUDIT

All quantitative scales use:
- Scale type: [1-5 / 1-7 / Other]
- Anchors: [Left end: X, Right end: Y]
- Consistency: [All questions use same scale? Yes/No]
- Issues found: [Any mixed scales? Any ambiguous anchors?]

---

SEGMENTATION STRATEGY

How will you divide results?

Primary Segment: [e.g., Customer Tier]
- Segment A: [e.g., Free tier] (expected size: X)
- Segment B: [e.g., Paid tier] (expected size: Y)

Secondary Segment: [e.g., Tenure]
- Segment A: [e.g., <1 month] (expected size: X)
- Segment B: [e.g., 1-6 months] (expected size: Y)
- Segment C: [e.g., 6+ months] (expected size: Z)

Tertiary Segment (Optional): [e.g., Feature adoption]

Why segmented: [What different insights will each segment reveal?]

---

RESPONDENT TARGETING & TIMING

Target Audience: [Define exactly]
- Who: [Customer type / segment / persona]
- Size: [How many potential respondents]
- Qualification: [Must have done X to qualify for survey]

Trigger Moment: [When survey will be sent]
- Event: [Customer action that triggers survey]
- Timing: [X days after the event; example: 1 day after end of trial]
- Why timing matters: [Why this moment will generate honest, informed responses]

Distribution Channel:
- Primary: [Email / In-app / Link / SMS]
- Secondary: [If low response on primary, alternate channel]

Response Target:
- Minimum: [Y responses needed for statistical validity per segment]
- Expected response rate: [Z%] (based on audience + timing)
- Survey open for: [X days] (or until target reached)

---

BIAS AUDIT & NEUTRAL LANGUAGE CHECK

Question 1: [Copy]
- Potential bias: [Any leading language? Assumptions?]
- Revision: [If bias found, revised neutral version]
- Final status: [Approved as neutral / Revised / Approved]

[Repeat for each question]

Overall Bias Assessment: [Low / Moderate / High] (if high, revise questions)

---

SAMPLE SURVEY COPY (As Written)

Subject line: [Email subject or in-app header]

Opening copy:
"[Greeting]. We're redesigning how [feature] works, and we want to hear from you. This survey takes about 3 minutes. Your feedback directly influences our product roadmap. Thank you!"

[Full survey questions here, exactly as they'll appear]

Closing copy:
"Thank you for your time. Results will be shared with the team [by specific date]."

---

RESPONSE RATE TARGETS & INCENTIVES

Historical Response Rate for Similar Surveys: [X]%
Target Response Rate: [Y]%
Incentive (if any): [None / Raffle entry / Discount / Time savings / Other]
- If incentive: Why it makes sense for this audience

---

POST-SURVEY ANALYSIS PLAN

How You'll Analyze Results:
1. [Segment results by: X, Y, Z]
2. [Look for patterns: comparing segments, correlations]
3. [Highlight surprising findings or contradictions]
4. [Map qualitative responses to themes]

Timeline for Analysis: [When results will be compiled and reviewed]
Who Reviews: [Team members who'll look at results]
How Results Will Be Shared: [Brief + full report?]
What Decision/Action Follows: [Concrete next step based on results]

---

SURVEY METRICS & SUCCESS CRITERIA

Metric 1: Response Rate
- Target: [Y]%
- Threshold for "success": [If exceeds Y%, survey was well-timed and relevant]
- Threshold for "relaunch": [If below X%, reformat and re-send to new audience]

Metric 2: Completion Rate
- Target: [Y]% of respondents complete all questions
- If low: [Indicates survey is too long or has confusing questions]
- Threshold: [If below X%, shorten survey]

Metric 3: Open-Ended Response Quality
- Target: [Y]% of respondents answer open-ended questions substantively (2+ sentences)]
- If low: [Questions may not be resonating; rephrase]
- Threshold: [If below X%, revise follow-up questions]

Metric 4: Variance Across Segments
- Expectation: [Do you expect different segments to answer differently? Why?]
- Target variance: [If all segments answer identically, may indicate survey isn't capturing nuance]

---

COMPETITIVE & MARKET CONTEXT

Comparable Surveys You've Run:
- [Survey A]: [Response rate], [Key insight]
- [Survey B]: [Response rate], [Key insight]
- [Survey C]: [Response rate], [Key insight]

Industry Benchmark Response Rates: [For similar product category, e.g., SaaS, 20-35% response rate is typical]

---

TIMELINE & CHECKLIST

Week 1:
- [ ] Finalize survey questions
- [ ] Bias audit and revisions
- [ ] Get approval from [team]
- [ ] Set up distribution

Week 2-3:
- [ ] Launch survey
- [ ] Monitor response rate daily
- [ ] Watch for early themes in qualitative responses
- [ ] Adjust messaging if response is low

Week 4:
- [ ] Close survey (after hitting target or deadline)
- [ ] Analyze results by segment
- [ ] Identify key findings and themes
- [ ] Prepare findings report

Week 5:
- [ ] Share results with team
- [ ] Discuss implications and next steps
- [ ] Archive survey responses for future reference
```

## Example

```
SURVEY DESIGN & ANALYSIS
=======================

Survey Title: "Product-Market Fit Assessment" (Sean Ellis PMF Survey)
Goal: Measure whether users would be very disappointed if they could no longer use this product (core PMF metric)
Target Audience: All users active in past 30 days
Distribution Channel: In-app modal + email follow-up for non-respondents
Estimated Completion Time: 1 minute
Target Response Count: 100+ responses across all segments
Launch Date: March 24, 2026

---

RESEARCH QUESTION & HYPOTHESIS

Core Insight Needed:
- What % of users would be very disappointed if the product disappeared? (PMF threshold: >40% saying "very disappointed" = product-market fit)
- Decision: If <40%, we need to re-focus on core value prop or build features that make product more essential. If >40%, we can invest in growth with confidence.

Primary Research Question:
- Q1: How would you feel if you could no longer use [ProductName]? (Measure: % choosing "very disappointed")
- Expected use: If >40% very disappointed, we have PMF. If <40%, we have a retention/value problem.

Secondary Questions:
- Q2: What's the primary reason for your answer? (Understand which use cases create highest attachment)
- Q3: How long have you been using [ProductName]? (Segment by tenure; longer users likely more attached)
- Q4: What one feature would you most miss if it disappeared? (Understand most critical feature)

---

SURVEY STRUCTURE & QUESTION DESIGN

[Question 1: Primary Quantitative - Core PMF]
- Type: Multiple choice (single select)
- Question copy: "How would you feel if you could no longer use [ProductName]?"
- Options:
  1. "Very disappointed"
  2. "Somewhat disappointed"
  3. "Not disappointed—I'd find an alternative"
  4. "Not disappointed—I don't use it much"
  5. "I'm not sure"
- Why it matters: This is the Sean Ellis PMF question; measures whether product is essential
- Bias check: Neutral language; no leading words. All options are legitimate answers.

[Question 2: Qualitative Follow-Up]
- Type: Open-ended text
- Question copy: "What's the main reason you chose that answer?"
- Max response length: 2-3 sentences
- Why paired: Understand reasoning; e.g., "very disappointed" because of feature X vs. team dependency vs. workflow integration

[Question 3: Secondary Quantitative - Tenure]
- Type: Multiple choice (single select)
- Question copy: "How long have you been using [ProductName]?"
- Options:
  1. "Less than 1 month"
  2. "1-3 months"
  3. "3-6 months"
  4. "6-12 months"
  5. "More than 1 year"
- Why it matters: Tenure likely correlates with attachment; separate analysis by cohort
- Bias check: Neutral; just asking for fact

[Question 4: Qualitative Follow-Up]
- Type: Open-ended text
- Question copy: "What's the one feature you'd miss most?"
- Max response length: 1-2 sentences
- Why paired: Reveals which feature creates most stickiness; informs roadmap

[Question 5: Optional Demographic]
- Type: Multiple choice
- Question copy: "What best describes your role?"
- Options:
  1. "Individual contributor / freelancer"
  2. "Team lead / manager"
  3. "Founder / exec"
  4. "Other"
- Why it matters: Different roles may have different attachment levels
- Bias check: Neutral

---

SCALE CONSISTENCY AUDIT

All quantitative scales use:
- Scale type: Multiple choice (not numeric)
- All single-select (not ranked or multi-select)
- Consistency: Yes, all questions use same single-select format
- Issues found: None; no mixed scales

---

SEGMENTATION STRATEGY

How will you divide results?

Primary Segment: Tenure
- Segment A: New (<1 month) (expected size: 15%)
- Segment B: Early (1-3 months) (expected size: 20%)
- Segment C: Established (3-12 months) (expected size: 35%)
- Segment D: Long-term (12+ months) (expected size: 30%)

Secondary Segment: Role
- Segment A: Individual Contributor (expected size: 40%)
- Segment B: Team Lead / Manager (expected size: 45%)
- Segment C: Founder / Exec (expected size: 15%)

Tertiary Segment (Optional): Plan Type
- Segment A: Free (expected size: 40%)
- Segment B: Paid (expected size: 60%)

Why segmented:
- Tenure: Hypothesis is that long-term users show higher attachment (very disappointed %). New users unlikely to be very disappointed yet.
- Role: Team leads may be more attached because product is team-critical vs. individual contributor using for personal benefit.
- Plan type: Paid users likely more invested; may show higher PMF signal than free users.

---

RESPONDENT TARGETING & TIMING

Target Audience: All users active in past 30 days
- Who: Any customer who's logged in or used product at least once in past 30 days
- Size: ~2,500 potential respondents
- Qualification: Active user (excludes churned/dormant)

Trigger Moment: Two-step approach
- Primary: In-app modal when user logs in (everyone sees it once)
- Secondary: Email to non-respondents after 2 days

Timing: End of Q1 (March 24-31, 2026)
- Why timing: Good quarterly checkpoint; enough data accumulated; no major product launches interfering

Distribution Channel:
- Primary: In-app modal (high-visibility, high response)
- Secondary: Email to non-respondents after 2 days (capture those who don't see modal)

Response Target:
- Minimum: 100 responses (provides >30 per segment)
- Expected response rate: 30-40% for in-app + 5-10% for email follow-up = ~35% overall
- Survey open for: 7 days (or until 150 responses)

---

BIAS AUDIT & NEUTRAL LANGUAGE CHECK

Question 1: "How would you feel if you could no longer use [ProductName]?"
- Potential bias: None identified; standard PMF question
- Revision: No revision needed
- Final status: Approved as neutral

Question 2: "What's the main reason you chose that answer?"
- Potential bias: "Main reason" implies there's one; neutral enough
- Revision: Could revise to "What's one reason..." for even more neutrality
- Final status: Approved with minor revision to "What's one reason..."

Question 3: "How long have you been using [ProductName]?"
- Potential bias: None; factual question
- Revision: None
- Final status: Approved as neutral

Question 4: "What one feature would you most miss?"
- Potential bias: Assumes user would miss a feature; alternative is no missing anything
- Revision: "What feature would you miss most, if any?"
- Final status: Approved with minor revision

Question 5: "What best describes your role?"
- Potential bias: None; factual options
- Revision: None
- Final status: Approved as neutral

Overall Bias Assessment: Low (standard PMF survey; well-tested questions)

---

SAMPLE SURVEY COPY (As Written)

In-App Modal:

Title: "One Quick Question"

Copy:
"We're measuring whether [ProductName] is truly valuable to you. This takes 1 minute. Your honest feedback shapes our roadmap."

[Survey appears inline, no page load]

Question 1: "How would you feel if you could no longer use [ProductName]?"
- Very disappointed
- Somewhat disappointed
- Not disappointed—I'd find an alternative
- Not disappointed—I don't use it much
- I'm not sure

Question 2: "What's one reason you chose that answer?"
[Text field, optional]

Question 3: "How long have you been using [ProductName]?"
[Options as above]

Question 4: "What feature would you miss most, if any?"
[Text field, optional]

Question 5: "What best describes your role?"
[Options as above]

[Submit button]

Email Follow-Up (if no response after 2 days):

Subject: "Your feedback matters (1 minute survey)"

Body:
"Hi [Name],

We saw you've been using [ProductName] for [X days]. We're running a quick survey to understand how valuable it is to you. Your response helps us prioritize what to build next.

[Link to survey—takes 1 minute]

Thank you,
[Founder/Product Lead]"

---

RESPONSE RATE TARGETS & INCENTIVES

Historical Response Rate for Similar Surveys: 28% (for in-app PMF surveys; email follow-up adds 6-8%)
Target Response Rate: 35% (in-app + email combined)
Incentive: None (PMF survey tends to get good response without incentive; product is core question)
- Rationale: Users feel invested in the answer; no payment needed

---

POST-SURVEY ANALYSIS PLAN

How You'll Analyze Results:
1. Segment results by tenure, role, plan type
2. Calculate % "very disappointed" for each segment
3. Look for patterns: Do long-term users show higher PMF? Do team leads show higher than ICs?
4. Qualitative: Group open-ended responses by theme (e.g., "critical for team collaboration" vs. "saves me time")
5. Identify features mentioned most in "would miss most"

Timeline for Analysis: Launch March 24; analysis complete by March 31
Who Reviews: Product lead, founder, metrics team
How Results Will Be Shared: 1-page summary + full data by segment
What Decision/Action Follows:
- If >40% very disappointed: High PMF confidence; prioritize growth + retention
- If 30-40%: Good PMF; focus on increasing attachment for marginal users
- If <30%: PMF risk; revisit core value prop; why aren't people dependent?

---

SURVEY METRICS & SUCCESS CRITERIA

Metric 1: Response Rate
- Target: 35%
- Threshold for "success": If exceeds 35%, survey was well-executed and audience is engaged
- Threshold for "relaunch": If below 20%, survey didn't resonate; investigate timing or audience

Metric 2: Completion Rate
- Target: 85%+ of respondents answer all questions (Q2-Q5 optional, but track completion)
- If low: May indicate survey is too intrusive or unclear
- Threshold: If below 75%, survey experienced friction; review feedback

Metric 3: Open-Ended Response Quality
- Target: 70%+ of respondents answer at least one open-ended question with substantive text
- If low: Questions may not be resonating
- Threshold: If below 60%, revise follow-ups

Metric 4: Variance Across Segments
- Expectation: Yes; long-term users should show higher PMF (>45% very disappointed) vs. new users (<25%)
- Target variance: If all segments similar, may indicate survey isn't capturing differentiation
- Variance check: Compare tenure cohorts; should see clear trend

---

COMPETITIVE & MARKET CONTEXT

Comparable Surveys You've Run:
- Feature Importance Survey (Jan 2026): 32% response rate, revealed "collaboration" is #1 feature
- Customer Success Survey (Feb 2026): 25% response rate, identified churn drivers in free tier
- Competitive Analysis (informal): Competitors report PMF > 40%; benchmarking against them

Industry Benchmark Response Rates:
- In-app surveys (SaaS products): 25-40% typical for engaged users
- Email surveys: 5-15% typical
- Combined (in-app + email): 30-40% is solid benchmark

---

TIMELINE & CHECKLIST

Week 1 (by March 24):
- [x] Finalize survey questions (all 5)
- [x] Bias audit complete
- [x] Get approval from exec team (1 day)
- [x] Set up in-app modal + email template

Week 2-3 (March 24-31):
- [ ] Launch in-app survey
- [ ] Monitor response rate daily (target: 35%)
- [ ] Watch for early qualitative themes
- [ ] Send email follow-up on day 2

Week 4 (April 1-4):
- [ ] Close survey (day 7)
- [ ] Analyze results by segment
- [ ] Identify key findings (% very disappointed, feature themes, role patterns)
- [ ] Prepare 1-page summary + full data

Week 5 (by April 7):
- [ ] Share results with team
- [ ] Discuss PMF confidence and implications
- [ ] Map "would miss most" features to roadmap
- [ ] Archive survey responses for future reference
```

## Edge Cases

- **Survey is too long**: If your survey is >7 questions and takes >5 minutes, response rate plummets. Cut ruthlessly; you can always follow up with a second survey later.

- **Surveying inactive users**: Users who haven't logged in for 3 months won't give you useful data on current product quality. Survey active users or exit-interview churned users, not silent ones.

- **Ignoring segment differences**: Aggregating all responses hides that power users love you while casual users are frustrated. Always segment and analyze separately.

- **Asking the wrong people**: If you want to understand why SMBs churn, don't survey enterprise customers. Be precise about who qualifies for the survey.

- **Not acting on results**: If 70% say feature X is critical but you don't prioritize it, you've wasted respondent time and trust. Survey only if you're prepared to act on the data.

- **Leading questions destroy validity**: Even subtle bias ("As you know, feature X is excellent...") skews responses. Test all questions with someone who doesn't work on the product.
