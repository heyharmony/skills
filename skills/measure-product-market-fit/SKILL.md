---
name: "Measure Product-Market Fit"
description: "Analyze product-market fit signals across quantitative and qualitative data to understand whether you have real customer value. What it does: combines retention metrics, cohort analysis, customer feedback, and behavioral signals to measure PMF on a spectrum, not as binary. When to use it: evaluating if your product resonates with users, deciding whether to double down on your current market or pivot, understanding which customer segments have PMF vs don't. Trigger on: retention analysis, customer satisfaction, growth metrics, pivot decisions, customer segmentation."
dependencies: []
connectors:
  - name: "Google Analytics"
    reason: "Behavioral data, retention curves, cohort analysis, user engagement patterns"
  - name: "Salesforce"
    reason: "Customer health scores, churn patterns, expansion revenue signals, customer feedback"
  - name: "Linear or Jira"
    reason: "Feature request volume and quality as proxy for user demand, tracked over time"
  - name: "Gmail"
    reason: "Customer feedback from conversations, churn feedback, unsubscribe reasons"
author: "Harmony"
version: "1.0.0"
icon: "sparkles"
cover: ""
screenshots: []
category: "Product"
---

## Purpose

Product-market fit is not a binary state. You don't flip a switch and suddenly "have PMF." PMF is a spectrum. You can have strong PMF with power users and no PMF with casual users. You can have PMF in one market and miss it in another. Your job is to measure where you are on that spectrum, understand which customer segments have PMF and which don't, and make decisions based on data, not hope.

The canonical test comes from Sean Ellis: ask users "How would you feel if you could no longer use this product?" If 40%+ respond "very disappointed," you likely have PMF. But that's just one signal. The real picture comes from combining retention curves, organic growth, word-of-mouth, user behavior when the product breaks, and customer cohort analysis.

The dangerous mistake is declaring PMF too early or too late. Too early: you raise money, hire a sales team, and scale a product customers don't actually want. Too late: you lose conviction in something good and kill it. This skill teaches you how to read the signals clearly.

## When to Use This

- **You're evaluating whether to pivot or double down**: Your current strategy isn't working. Before you pivot, measure: Do you have PMF with any user segment? Is the problem that you have no PMF, or that you're not reaching the right customers? Data determines the answer.

- **You have early growth but aren't sure if it's real**: You're getting signups, maybe even customers. But is this sustainable? Or are you acquiring customers who churn quickly? Retention curves reveal the truth.

- **You're launching into a new market or customer segment**: You have PMF in Europe. Does that translate to Asia? You have PMF with SMBs. Does that extend to enterprise? Measure PMF separately for each segment.

- **Your churn is high and you're not sure why**: If users love your product, churn is low. High churn means either you don't have PMF yet, or you're acquiring the wrong customers, or you've lost PMF over time. Investigate which.

- **You're considering hiring a large sales team**: Huge investment decision. Before you hire, confirm you have PMF. If customers won't stick around or don't refer others, hiring sales won't help. Data first.

- **You're wondering if you should raise money**: Investors ask about PMF. Have the answer before you pitch. Show retention curves, cohort data, and clear signals of customer love.

- **Your retention is declining and you're not sure what changed**: PMF can be lost. Market shifts, competition, complacency, or feature misses erode what you had. Measure whether you've actually lost PMF or if it's a growth mix issue.

## Instructions

1. **Measure activation and early retention (the funnel leading to PMF)**
   - Define "activated" for your product: first login, first content created, first meaningful action
   - Track: signup → activation conversion rate (target: 25%+ for strong PMF signal)
   - Measure Day 1 retention (% of activated users who return next day)
   - If Day 1 retention is below 20%, activation is weak. Most users don't see value immediately.
   - Look at Day 7, Day 30 retention — these show whether the initial impression holds
   - If activation is low (<20%), you have an onboarding problem, not a PMF problem
   - Use Google Analytics or similar to track these cohorts over time
   - Document baseline: "Day 1 retention is currently 35%, Day 30 is 20%"

2. **Build retention cohort curves to see the true pattern**
   - Plot retention for each cohort (group of users by signup date): X-axis = days since signup, Y-axis = % retained
   - Cohort 1: Users who signed up Jan 1-7. Track % retained on day 1, 7, 14, 30, 60, 90
   - Cohort 2: Users who signed up Jan 8-14. Same tracking.
   - Create 8-12 cohorts spanning the last 6 months
   - Graph them together to spot trends
   - If curves are flattening (retention stabilizing), that's good — you've found your core users
   - If curves are declining to zero, you have a churn problem
   - Compare cohorts: are newer cohorts retaining better (improving product) or worse (product decline)?
   - If using Google Analytics, build custom reports. Use product-specific analytics if available.

3. **Define your retention targets and assess against them**
   - What is "good retention" depends on your industry and business model
   - B2B SaaS: Day 30 retention 50%+ is strong, Day 90 retention 30%+ is healthy
   - Consumer apps (not subscription): Day 7 retention 25%+ is strong, Day 30 retention 10%+ is healthy
   - Games: Day 1 retention 25%+ is expected, Day 30 retention 3-5% is normal
   - Set your own targets based on your industry and ambition
   - Compare your retention to targets: are you hitting them?
   - If not, what's the gap? Is it new user onboarding that's weak, or do users churn after they understand the product?

4. **Run the Sean Ellis PMF survey and analyze the "very disappointed" segment**
   - Survey recent active users (not churned users yet): "How would you feel if you could no longer use this product?"
   - Options: Very disappointed, Somewhat disappointed, Not disappointed
   - Target: 40%+ "very disappointed" = PMF signal
   - 25-40% = in the middle, growing toward PMF
   - <25% = weak PMF signal, more work needed
   - Segment the results: what % of each user segment is "very disappointed"?
   - Example: "Power users are 65% very disappointed. Casual users are 20% very disappointed."
   - Follow-up question: "What would you primarily use this product for?" — reveals what you're actually good at
   - Compare segments: if one segment has strong PMF, double down there

5. **Analyze organic growth and word-of-mouth signals**
   - Measure: What % of signups are organic (no paid marketing)?
   - Measure: What % of new customers come from referrals (customer told them)?
   - Strong PMF = high organic + high referral %. People use the product, like it, and tell others
   - Weak PMF = low organic + high paid. You need to buy every customer, and they don't stick
   - Look at your marketing funnel: what's your CAC (customer acquisition cost)? What's your LTV (lifetime value)?
   - If LTV < 3x CAC, your unit economics are broken. This often means weak PMF.
   - Track organic/referral rates over time. Are they growing (good PMF momentum) or shrinking (PMF erosion)?
   - If organic is low, you might have PMF with one persona but are trying to sell to the wrong people

6. **Identify what users love by studying "very disappointed" responses and usage patterns**
   - Don't just count "very disappointed." Read the qualitative responses.
   - Themes: "I use this every day for X," "This saved me from Y," "We couldn't do Z without this"
   - These comments tell you what features are actually valuable
   - Look at power user behavior: what do your most engaged users do?
   - Example: "Power users integrate with Slack and run daily notifications. Casual users never set up integrations."
   - Double down on what creates that "very disappointed" emotion
   - Look at churn feedback: what do churned users say they missed? (Inverse signal of what matters)
   - Superhuman's approach: they surveyed power users, learned they cared most about speed, and doubled down on speed
   - You're not trying to be everything. You're trying to be irreplaceable for something specific

7. **Segment your users and measure PMF separately for each segment**
   - Segment 1: Customer size (SMB, mid-market, enterprise)
   - Segment 2: Use case (marketing teams, engineering teams, sales teams)
   - Segment 3: Product tier (free, paid, power users)
   - For each segment, measure:
     - Activation rate: does this segment get value quickly?
     - Retention curve: do they stay?
     - "Very disappointed" %; how many would be sad if product disappeared?
     - Expansion rate: do they expand usage or move to higher tier?
   - Example: "Enterprise SMBs have 70% Day 30 retention and 60% 'very disappointed.' Startups have 35% Day 30 retention and 25% 'very disappointed.'"
   - This tells you: Enterprise is a better PMF fit
   - Decision: should you focus there, or fix product to serve startups better?

8. **Measure leading indicators that predict PMF without waiting for long-term retention**
   - Leading indicators are behaviors that predict retention without waiting 6 months
   - Examples: "Users who complete 5 tasks by day 7 have 80% Day 30 retention. Users who complete <1 task have 5% retention."
   - Find your leading indicator: what early user behavior predicts stickiness?
   - Once you know this, you can measure PMF faster by tracking the leading indicator, not 30-day retention
   - Use this to evaluate feature changes: "Does this feature increase the leading indicator behavior?"
   - Leading indicators for different products:
     - Productivity software: "Users who create content by day 3"
     - Marketplace: "Users who complete first transaction"
     - Social: "Users who follow 10+ people"
     - Find the behavior that predicts retention for YOUR product

9. **Detect PMF loss by monitoring retention trends and competitive signals**
   - Measure quarterly: is your retention improving, flat, or declining?
   - If retention is declining, you've lost PMF. Why?
     - New competition emerged?
     - You added features that confused existing users?
     - Market shifted?
     - You scaled sales, acquiring wrong customer type?
   - Track churn reasons: "Why did this customer leave?" (if you can ask them)
   - Track support volume: if support volume is rising while feature set is stable, product quality might be declining
   - Monitor industry trends: are competitors shipping features that are now table-stakes?
   - PMF erosion is slow at first, then sudden. Monitor quarterly to catch it early

10. **Create a PMF health dashboard and review monthly**
   - Dashboard includes:
     - Activation rate (cohort definition → first valuable action)
     - Day 1, Day 7, Day 30 retention (latest cohort)
     - "Very disappointed" % (latest survey)
     - Organic % and referral % (monthly signups)
     - Churn reasons (top 3 reasons customers leave)
     - Leading indicator metric (e.g., "users who create content by day 3")
   - Review with leadership monthly: are we improving PMF signals or declining?
   - Celebrate wins: "Our Day 30 retention improved 5 points, now at 45%"
   - Surface problems early: "Organic % dropped from 35% to 28%. Let's investigate."
   - Use this dashboard to make decisions: "Should we hire sales? Let's see our retention trend first."

## Output Format

When you measure product-market fit, you produce:

```yaml
Product-Market Fit Analysis Report:

Quantitative Signals:
  Activation:
    - Signup to activated user: [X%]
    - Definition of activated: [Behavior]
    - Time to activation (median): [X days]
    - Activation trend (last 3 months): [Improving / Flat / Declining]

  Retention Curves:
    Cohort 1 (Jan 1-7):
      - Day 1 retention: [X%]
      - Day 7 retention: [X%]
      - Day 30 retention: [X%]
      - Day 90 retention: [X%]
    [Additional cohorts]

    Summary:
      - Latest cohort Day 30 retention: [X%]
      - Retention trend (improving vs 6 months ago): [+X% / -X%]
      - Curve pattern: [Flattening / Declining / Volatile]

  Sean Ellis PMF Survey:
    - Total respondents: [X]
    - Very disappointed: [X%] (Target: 40%+)
    - Somewhat disappointed: [X%]
    - Not disappointed: [X%]
    - PMF strength: [Strong / Moderate / Weak]

    Top reasons for "very disappointed":
      - [Use case 1]
      - [Use case 2]
      - [Use case 3]

  Growth Signals:
    - Organic signup %: [X%]
    - Referral signup %: [X%]
    - Paid signup %: [X%]
    - CAC: [$ or metric]
    - LTV: [$ or metric]
    - LTV/CAC ratio: [X] (Target: 3x+)
    - Organic + referral trend: [Improving / Flat / Declining]

  Churn:
    - Monthly churn rate: [X%]
    - Top 3 churn reasons:
      1. [Reason]
      2. [Reason]
      3. [Reason]
    - Churn rate trend (improving vs 6 months ago): [+X% / -X%]

Segmentation Analysis:
  Segment A: [Description, e.g., "Enterprise > 500 users"]
    - Activation rate: [X%]
    - Day 30 retention: [X%]
    - Very disappointed: [X%]
    - LTV/CAC ratio: [X]
    - PMF strength: [Strong / Moderate / Weak]
    - Action: [Where to focus]

  [Additional segments]

  Conclusion: [Which segments have strongest PMF, where should you focus]

Leading Indicators:
  - Behavior that predicts Day 30 retention: [Description]
  - % of users exhibiting behavior: [X%]
  - Retention rate for users with behavior: [X%]
  - Retention rate for users without: [X%]
  - Correlation strength: [Strong / Moderate / Weak]
  - Action: [Use this to evaluate feature changes faster]

PMF Health Assessment:
  Overall PMF strength: [Strong PMF / Moderate / Weak / Loss of PMF]
  Confidence level: [High / Medium / Low]
  Primary evidence: [Top 3 signals supporting the assessment]
  Risks: [Signals that contradict or complicate the assessment]

Recommendations:
  If Strong PMF:
    - Action: [Scale, expand to adjacent markets, raise capital, hire]
  If Moderate PMF:
    - Action: [Invest in the segments with highest PMF, improve weakest levers]
  If Weak PMF:
    - Action: [Pivot, double down on strongest segment, rebuild product]
  If Loss of PMF:
    - Action: [Investigate root cause urgently, address before it's too late]
```

## Example

**Scenario: DataSignal (B2B analytics platform) measures PMF to decide on scaling**

DataSignal is 18 months in. They have 200 paying customers, $40k MRR, and are deciding whether to hire a sales team. CEO believes they have PMF. VP Product is less sure. They decide to measure.

**Step 1-3: Activation & Retention**

DataSignal analyzes last 6 months of signups:
- Signup → "created first dashboard" = activated
- 2,400 signups in 6 months
- 480 created first dashboard = 20% activation
- Day 1 retention: 35% (of activated)
- Day 7 retention: 22%
- Day 30 retention: 18%
- Day 90 retention: 16%

Retention curve is declining but flattening by day 30 — sign of a core user base sticking around.

Compared to targets (B2B SaaS = 50%+ Day 30):
- Day 30 retention of 18% is weak
- Conclusion: activation is weak and retention is weak
- Hypothesis: product isn't delivering clear value quickly enough

**Step 4: PMF Survey Results**

DataSignal surveys 100 active power users (>10 dashboards, >5 team members):
- Very disappointed: 58%
- Somewhat disappointed: 35%
- Not disappointed: 7%

PMF signal: Strong with power users.

Qualitative feedback from "very disappointed":
- "Our sales team uses this daily to track pipeline. Can't imagine managing without it."
- "Real-time dashboard saved us thousands in wasted marketing spend."
- "Everyone on the team references this in meetings every day."

Pattern: power users have deep integration into workflows. Casual users don't.

**Step 5-6: Growth Signals & What Users Love**

Organic growth analysis:
- Organic signups: 15%
- Referral signups: 8%
- Paid signups: 77% (mostly content marketing, some ads)
- CAC: $150
- LTV: $2,000 (for power users), $400 (for casual users)
- LTV/CAC: 13x for power users, 2.7x for casual

Insight: They're acquiring lots of casual users (via paid) who don't stick. Power users have incredible LTV, but represent small % of signups.

**Step 7: Segmentation**

DataSignal segments by use case:
- Sales analytics (sales teams tracking pipeline):
  - Day 30 retention: 45%
  - Very disappointed: 70%
  - LTV/CAC: 14x
  - PMF: Strong

- Marketing analytics (marketers tracking campaign performance):
  - Day 30 retention: 22%
  - Very disappointed: 35%
  - LTV/CAC: 3.2x
  - PMF: Weak

- Executive dashboards (execs tracking KPIs):
  - Day 30 retention: 8%
  - Very disappointed: 10%
  - LTV/CAC: 0.8x (negative unit economics)
  - PMF: None

Big revelation: they have strong PMF in sales analytics, weak PMF everywhere else. But acquisition is spread across all three segments.

**Step 8-9: Leading Indicator & Trend**

Leading indicator discovered:
- Users who create dashboard + add 2+ team members by day 7 have 70% Day 30 retention
- Users who don't have only 8% Day 30 retention

% of new users hitting indicator: 12%

This explains weak Day 30 retention: only 12% of signups get team collaboration, which is what drives stickiness.

Trend over 6 months:
- Activation rate: flat (20%)
- Day 30 retention: declining (was 22% six months ago, now 18%)
- Organic %: declining (was 20% six months ago, now 15%)

Conclusion: Product is not improving. Some signal of PMF erosion, but only in non-core segments.

**Step 10: Dashboard & Recommendation**

PMF Health Dashboard (monthly):
```
Overall PMF: Strong in Sales Analytics, Weak in Other Segments
Activation: 20% (target 30%)
Day 30 Retention: 18% (target 50%)
Very Disappointed (power users): 58%
Organic %: 15%
Churn reasons: "Doesn't track my specific metrics," "Too slow," "Too expensive"
Leading indicator hit rate: 12%
```

**Recommendation: Don't hire sales team yet.**

Instead:
1. Focus all acquisition on sales analytics segment (where PMF is strong)
2. Cut acquisition spend on executive and marketing segments (weak PMF)
3. Invest in onboarding to get team collaboration happening by day 7 (hits leading indicator)
4. After improving activation and retention, revisit sales team hiring

Result (6 months later after focusing on sales analytics + onboarding):
- Day 30 retention in sales segment: 52% (hit target!)
- Organic % in sales segment: 35% (word-of-mouth kicking in)
- Leading indicator hit rate: 35% (improved onboarding working)
- PMF confirmation: strong and growing

Now they hire sales team. They close $1.2m ARR in year 2, all focused on sales analytics. The unfocused approach would have diluted their effort across weak segments.

## Edge Cases

- **You have strong retention but low growth**: Retention is 50% (great!) but only 100 signups/month. You have PMF with a small set of people but aren't reaching the broader market. Problem isn't product, it's go-to-market. Invest in acquisition, not product.

- **You have fast growth but high churn**: Signups are growing 20%/month, but Day 30 retention is 10%. You're acquiring customers faster than they churn, creating illusion of success. Eventually the math breaks. Address churn before scaling.

- **Different metrics tell opposite stories**: Retention is declining but "very disappointed" is high. Possible: quality customers love you and stick. New customers acquired via paid marketing churn. Solution: focus acquisition on channels that bring quality customers, not volume.

- **You can't survey users because product is pre-revenue**: Run the SEMrush PMF survey on your waitlist or free tier users. Ask: "Would you be disappointed if this went away?" Still valid signal.

- **You have PMF with one persona but not others, and you're confused about which to focus on**: Pick the persona with highest LTV/CAC ratio. If SMBs have 2x CAC but startup have 10x LTV/CAC despite same CAC, focus on startups. Math decides.

- **You lost PMF due to competition or market shift**: Market conditions change. If your product became commoditized, focus on differentiation or accept that PMF shifted. Re-measure quarterly to confirm loss is real, then decide to pivot, differentiate, or exit.
