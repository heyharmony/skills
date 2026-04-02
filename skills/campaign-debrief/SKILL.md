---
name: "Debrief Campaign Results"
description: "Debrief campaign results — what worked, what didn't, and what to do next. Produce a structured post-campaign analysis with metrics, qualitative insights, and prioritized recommendations. Trigger on: campaign debrief, campaign results, how did the campaign do, post-campaign review, what worked, campaign performance, next campaign planning."
dependencies: []
author: "Harmony"
version: "1.0.0"
icon: "sparkles"
cover: ""
screenshots: []
category: "Marketing"
---

## Purpose

Transform scattered campaign data, team observations, and market feedback into a structured, 
honest analysis that isolates what actually drove results—and what didn't. Move beyond metrics 
alone to understand the *why*, surface emerging patterns, and generate specific, prioritized 
recommendations for the next campaign iteration.

## When to Use

- **Post-campaign analysis**: After a marketing campaign, product launch, or promotional push concludes
- **Performance troubleshooting**: Campaign underperformed targets; need to understand root causes
- **Campaign comparison**: Evaluating multiple campaigns run in parallel to identify winners
- **Team alignment**: Synthesizing diverse team perspectives (sales, marketing, product, leadership) into a unified debrief
- **Planning next iteration**: Using learnings to inform the strategy for the next campaign cycle
- **Channel audit**: Assessing performance across multiple marketing channels in a single campaign
- **Stakeholder reporting**: Creating a clear narrative of what happened and why for leadership or clients

## Instructions

1. **Gather campaign metadata**
   - Campaign name, dates (launch to end), channels used, budget allocated
   - Primary objective(s) and success metrics defined upfront
   - Target audience segment(s)

2. **Collect quantitative results**
   - Actual performance against each metric (reach, impressions, clicks, conversions, revenue, etc.)
   - Data by channel if multi-channel
   - Comparison to targets and historical benchmarks if available
   - Attribution data (if available) showing which touchpoints drove conversions

3. **Gather qualitative signals**
   - Sales team feedback: What did customers say about the campaign? Common objections? Enthusiasm level?
   - Customer feedback: Direct responses, social sentiment, support tickets, survey comments
   - Team retrospective observations: What felt different about this campaign? What surprised us?
   - Market conditions: External factors that may have influenced performance (seasonality, competitor activity, news cycles, etc.)

4. **Analyze channel and messaging performance**
   - Which channels had highest engagement, conversion, or ROI?
   - Which messaging resonated vs. fell flat? Where did messaging miss the mark?
   - Audience response by segment (if data available): Did the campaign land differently for different personas?

5. **Identify patterns and inflection points**
   - When did performance spike or dip during the campaign?
   - Were there pivotal moments (creative refresh, targeting change, external event) that shifted results?
   - Are there leading indicators suggesting what drove success or failure?

6. **Conduct root-cause analysis**
   - For metrics that hit target: What specific factors enabled this? Replicable elements?
   - For metrics that missed: Was it reach (too few saw it), resonance (saw it but didn't engage), or conversion (engaged but didn't convert)?
   - Isolate controllable factors (our decisions, execution, timing) from uncontrollable ones (market, competition, external shocks)

7. **Score campaign health**
   - Overall health: 1–5 scale (1=failure, 5=exceptional)
   - Rationale: Specific metrics and learnings that drove the score
   - Confidence level in score (high/medium/low) based on data completeness

8. **Build "Repeat / Stop / Start" framework**
   - **Repeat**: What worked? What elements should absolutely go into the next campaign?
   - **Stop**: What didn't work? What should we deprioritize or discontinue?
   - **Start**: New ideas or approaches to test, informed by gaps or market signals identified

9. **Generate prioritized recommendations**
   - 3–5 specific, actionable recommendations for the next campaign
   - Rationale for each (based on analysis above)
   - Estimated impact and effort for each

10. **Synthesize narrative**
    - Create a clear, honest story: What we tried, what happened, why, and what we'll do differently
    - Avoid sugar-coating failures or over-claiming credit for wins
    - Acknowledge data gaps or uncertainty

## Output Format

```markdown
# Campaign Debrief: [Campaign Name]

## Overview
- **Campaign**: [Name]
- **Dates**: [Start] – [End]
- **Channels**: [List]
- **Budget**: [Amount]
- **Primary Objective**: [Statement]
- **Target Audience**: [Description]

## Results at a Glance
| Metric | Target | Actual | Status |
|--------|--------|--------|--------|
| [Metric 1] | [Target] | [Actual] | [✓/✗] |
| [Metric 2] | [Target] | [Actual] | [✓/✗] |
| [Revenue / Conversions / Other] | [Target] | [Actual] | [✓/✗] |

## Campaign Health Score
**Overall Score**: [1–5] | **Confidence**: [High/Medium/Low]

**Rationale**: [2–3 sentences explaining the score, grounded in metrics and insights]

## What Worked

### [Channel / Approach 1]
- **Evidence**: [Specific metric, comparison, or feedback]
- **Why**: [Root cause analysis—what about this element drove results?]
- **Replicable**: [Yes/No] — [Specific elements to repeat]

### [Channel / Approach 2]
- **Evidence**: [Specific metric, comparison, or feedback]
- **Why**: [Root cause analysis]
- **Replicable**: [Yes/No] — [Specific elements to repeat]

## What Didn't Work

### [Channel / Approach 1]
- **Evidence**: [Specific metric, comparison, feedback, or observation]
- **Why**: [Root cause—was it reach, resonance, conversion, or external factors?]
- **Insight**: [What does this tell us about our audience, market, or approach?]

### [Channel / Approach 2]
- **Evidence**: [Specific metric or feedback]
- **Why**: [Root cause]
- **Insight**: [Takeaway]

## Channel Performance Breakdown
| Channel | Reach | Engagement Rate | Conversions | Cost/Conv | Notes |
|---------|-------|-----------------|-------------|-----------|-------|
| [Channel 1] | [#] | [%] | [#] | [$] | [Summary] |
| [Channel 2] | [#] | [%] | [#] | [$] | [Summary] |

## Qualitative Signals

### Sales Team Feedback
[Summary of what sales heard from prospects / customers during the campaign period]

### Customer & Audience Response
[Direct feedback, social sentiment, survey results, or support tickets related to campaign messaging]

### Team Observations
[Retrospective insights from marketing, product, or leadership about what felt different or surprising]

### Market Context
[External factors—seasonality, competitor moves, news cycles, industry events—that may have influenced performance]

## Repeat / Stop / Start

### Repeat
- [Element 1 with brief rationale]
- [Element 2 with brief rationale]

### Stop
- [Element 1 with brief rationale]
- [Element 2 with brief rationale]

### Start
- [New approach 1 with rationale]
- [New approach 2 with rationale]

## Recommendations for Next Campaign

1. **[Title]**
   - Action: [Specific, concrete step]
   - Rationale: [Why this matters based on analysis above]
   - Impact: [Expected outcome] | Effort: [Low/Medium/High]

2. **[Title]**
   - Action: [Specific step]
   - Rationale: [Why]
   - Impact: [Expected outcome] | Effort: [Low/Medium/High]

3. **[Title]**
   - Action: [Specific step]
   - Rationale: [Why]
   - Impact: [Expected outcome] | Effort: [Low/Medium/High]

## Data Gaps & Caveats
- [Any missing data that would strengthen analysis]
- [Limitations in attribution or measurement]
- [Assumptions made in analysis]

---
*Debrief completed [Date]. Review with [Relevant teams].*
```

## Example

**Input**: 
- Campaign: "DataFlow AI Series B Launch"
- Dates: February 1–28, 2026
- Channels: LinkedIn organic, LinkedIn paid ads, email, webinar, tech press outreach
- Budget: $85K
- Target: 500 qualified leads, 20 demos booked, 2 closed deals
- Sales feedback: "LinkedIn outreach felt spammy, but the webinar generated really interested people. Email list was cold."
- Customer feedback: "Value prop unclear at first, but the webinar walkthrough convinced us."
- Team observation: "Press outreach didn't move the needle—probably wrong outlets or bad timing."

**Output**:

```markdown
# Campaign Debrief: DataFlow AI Series B Launch

## Overview
- **Campaign**: DataFlow AI Series B Launch
- **Dates**: February 1–28, 2026
- **Channels**: LinkedIn organic, LinkedIn paid ads, email, webinar, tech press outreach
- **Budget**: $85,000
- **Primary Objective**: Generate qualified leads and pipeline for Series B sales push
- **Target Audience**: CFOs, VP Finance, Finance Ops leaders at mid-market tech/SaaS companies

## Results at a Glance
| Metric | Target | Actual | Status |
|--------|--------|--------|--------|
| Qualified Leads | 500 | 287 | ✗ |
| Demo Bookings | 20 | 16 | ✗ |
| Closed Deals | 2 | 1 | ✗ |
| Webinar Registrations | 200 | 312 | ✓ |
| LinkedIn Impressions | 50K | 78K | ✓ |

## Campaign Health Score
**Overall Score**: 2.5 / 5 | **Confidence**: Medium

**Rationale**: Campaign significantly underperformed lead and pipeline targets, but webinar revealed strong demand with right audience and messaging. Execution challenges in LinkedIn strategy and email list quality degraded overall ROI; however, the foundation for a successful relaunch is clear.

## What Worked

### Webinar Event
- **Evidence**: 312 registrations (156% of target), 67% attendance rate, 16 of 20 demos booked came from webinar attendees
- **Why**: Live product demo with customer success story (Vertex Inc. case study) resonated. Attendees could see DataFlow in action and ask real-time questions. Interactive format built trust that static content didn't.
- **Replicable**: Yes — Webinar format, customer case study, product demo, live Q&A. Plan 2–3 webinars per quarter.

### LinkedIn Organic Content
- **Evidence**: 5 organic posts achieved 18K impressions, 3.2% engagement rate, 42 direct message inquiries
- **Why**: Founder thought leadership (3 posts from CEO about AI in finance) outperformed product promotion. Audience engaged with perspective, not pitch. DMs indicated genuine interest.
- **Replicable**: Yes — Thought leadership > product push on LinkedIn. Weekly CEO content + monthly deep-dive posts.

## What Didn't Work

### LinkedIn Paid Ads
- **Evidence**: 32K impressions, 1.2% CTR, 52 clicks, cost per click $1.63, only 8 conversions to lead form (15% conversion rate post-click)
- **Why**: Audience targeting too broad (included non-decision-makers, wrong verticals). Ad creative focused on features ("AI-powered reconciliation") rather than outcomes. A/B test showed outcome-focused creative underperformed feature-focused—suggests our audience wasn't familiar enough with DataFlow to care about features vs. outcomes.
- **Insight**: Paid ads best used for retargeting known audiences, not cold outreach. Organic + events > paid ads for brand-new audiences.

### Cold Email Campaign
- **Evidence**: 6K emails sent, 180 opens (3% open rate), 12 clicks (6.7% CTR of opens), 2 lead form submissions (0.03% conversion)
- **Why**: Email list sourced from purchased data; poor quality and likely stale. "Series B launch" subject line had low open rate. Follow-up cadence was 2 emails only, insufficient for cold outreach.
- **Insight**: Purchased lists don't work for B2B tech. Build owned lists through content + events. Increase follow-up sequences.

### Press Outreach
- **Evidence**: Outreach to 50 fintech + enterprise tech publications. 2 interviews secured, 0 resulted in lead generation. Coverage appeared in Fintech Brief and CloudTech Weekly—low-authority, low-traffic publications.
- **Why**: Wrong outlets (too niche, low authority). Timing poor (Valentine's Day week, slow news cycle). Outreach lacked exclusive angle or newsworthy narrative.
- **Insight**: Press is a branding play, not a lead channel. Prioritize Tier 1 outlets (TechCrunch, VentureBeat, Forbes) with exclusive, newsworthy angle tied to Series B momentum.

## Channel Performance Breakdown
| Channel | Reach | Engagement Rate | Conversions | Cost/Conv | Notes |
|---------|-------|-----------------|-------------|-----------|-------|
| LinkedIn Organic | 23K | 3.2% | 42 DMs → ~15 leads | N/A | Strong for thought leadership. Underinvested. |
| LinkedIn Paid | 32K | 1.2% | 8 leads | $10.63 | Broad targeting, weak creative. Needs reset. |
| Email | 6K | 3% | 2 leads | $42.50 | Poor list quality. Skip until list improves. |
| Webinar | 312 reg | 67% attend | 16 demos | $5.31 | Strongest ROI and engagement. Repeat. |
| Press | 15K est reach | Unknown | 0 leads | N/A | Branding only. Wrong outlets. Reset strategy. |

## Qualitative Signals

### Sales Team Feedback
Sales team reported frustration with LinkedIn paid ads: "felt spammy, lots of tire-kickers." However, webinar attendees were high-quality. Sales noted that prospects who watched the webinar demo had much shorter sales cycles (12 days avg) vs. cold email leads (47 days avg, only 2 converted). One sales rep: "The webinar people already understood what we do. Email people had no idea."

### Customer & Audience Response
Webinar attendees provided unsolicited positive feedback during Q&A about product usability and customer success story. Post-webinar survey (48% response rate): "Before this, we didn't understand how DataFlow was different from [competitors]. The walkthrough convinced us." One prospect (later customer): "We moved from 'interested' to 'serious buyer' after seeing it live."

### Team Observations
Product team noted that LinkedIn paid ad creative didn't explain *why* AI reconciliation matters—just that it exists. Marketing team felt rushed on email list sourcing ("We grabbed what we could in 48 hours"). CEO thought leadership posts were more fun to write and generated more engagement. Operations flagged that press contacts were sourced from a 2-year-old list ("some emails were bad").

### Market Context
February is a slow period for enterprise software (post-holiday budget allocation, pre-Q1 planning). However, Q1 typically sees uptick in finance tech purchases for FY2026 planning. Competitor Reconcile Inc. launched a competing product on Feb 15, which may have increased search interest but fragmented mindshare.

## Repeat / Stop / Start

### Repeat
- **Webinar events with product demo** — Only tactic that hit/exceeded targets. Attendees converted to high-value leads and customers.
- **Founder thought leadership on LinkedIn** — Strong engagement, built authority, generated warm inbound. Continue CEO posts 1x/week.
- **Customer success stories as proof points** — Vertex case study was most-referenced proof point in sales conversations.

### Stop
- **Purchased email lists** — 0.03% conversion rate is unacceptable. Stop cold email until we build owned list.
- **Broad LinkedIn paid targeting** — CTR and conversion rate too low to justify spend. Pause until we've built retargeting audiences.
- **Low-authority press outreach** — Fintech Brief and CloudTech Weekly didn't deliver leads or brand impact. Reset to Tier 1 outlets only.

### Start
- **Targeted LinkedIn paid retargeting** — Use webinar registrants + website visitors as custom audiences. Test outcome-focused creative on warm audiences.
- **Owned list building** — Create 3-email nurture sequence for webinar non-attendees. Add website visitors to retargeting list.
- **Sales-assisted outreach** — Have sales reps do personalized LinkedIn outreach to target accounts (vs. paid ads). Quality > volume.
- **Tier 1 press strategy** — Build relationships with TechCrunch, VentureBeat reporters covering AI + finance. Plan exclusive news angle around Series B.

## Recommendations for Next Campaign

1. **Make webinars the centerpiece; plan 2–3 per quarter with product demos and customer case studies**
   - Action: Schedule webinars for end of each quarter (before sales push). Secure 2–3 customer speakers per session. Invest in high-production video and demo.
   - Rationale: Only channel with >50% conversion to next step. Highest lifetime value. Justifies dedicated budget.
   - Impact: Potential 50+ demos/quarter | Effort: Medium

2. **Rebuild email strategy around owned list and sales workflow**
   - Action: Stop purchasing lists. Build owned list through webinar registrations, website signups, and LinkedIn organic reach. Design 5-email nurture for non-converters.
   - Rationale: Current email list had 0.03% conversion. Owned list + sales-aligned messaging will 10x this.
   - Impact: 30–50 qualified leads per campaign | Effort: Medium

3. **Shift LinkedIn paid from awareness to retargeting; increase organic thought leadership investment**
   - Action: Pause broad LinkedIn paid ads. Instead, retarget webinar non-attendees and website visitors with outcome-focused creative. Commit CEO to 1 thought leadership post per week.
   - Rationale: Paid ads worked at 1.2% CTR. Retargeting custom audiences historically 5–10x better. Organic was free and outperformed paid.
   - Impact: 2–3x better CTR, 30–40% reduction in CAC | Effort: Low

4. **Upgrade press strategy to Tier 1 outlets with exclusive, newsworthy narratives**
   - Action: Identify 5 primary reporters at TechCrunch, VentureBeat, Axios, Forbes covering AI + fintech. Build 6-month relationship plan. Develop exclusive news angle around Series B competitive positioning.
   - Rationale: Current press outreach generated 0 leads. Tier 1 coverage builds brand authority and indirectly drives inbound (not measurable in 1 campaign but critical for long-term).
   - Impact: 1–2 major stories | Effort: High (but amortized over 6 months)

5. **Add sales-assisted LinkedIn outreach to target accounts**
   - Action: Provide sales team with 20 target account lists (by segment). Coach reps on personalized LinkedIn outreach (not spam). Track response rates and meetings booked.
   - Rationale: Sales team felt LinkedIn paid was spammy; sales-led, personalized outreach will feel authentic and likely higher conversion.
   - Impact: 15–25 initial meetings | Effort: Medium (training + weekly check-ins)

## Data Gaps & Caveats
- **Attribution**: We don't have full multi-touch attribution. Some leads may have come from multiple channels (e.g., saw LinkedIn post, then attended webinar, then received follow-up email). Webinar conversions may be overstated if these prospects were already in-market.
- **Competitor impact**: Competitor launch on Feb 15 may have siphoned inbound or shifted search behavior. Hard to isolate impact.
- **Sales cycle data**: We tracked pipeline, not closed revenue. Impact on actual ARR won't be clear for 2–3 months.
- **Segment breakdown**: We didn't segment results by company size or vertical. Future campaigns should track conversion rates by segment to identify which verticals are most responsive.
- **Press coverage reach**: We estimated reach from press articles but didn't track referral traffic or lead source attribution. Hard to quantify press ROI.

---
*Debrief completed March 5, 2026. Review with Sales, Marketing, and Leadership. Plan follow-up campaign for Q2 2026.*
```

## Edge Cases

### Campaign with Incomplete Data
**Scenario**: Campaign ran, but you don't have access to full engagement metrics (e.g., email platform data lost, social analytics not set up, sales CRM wasn't tagged).

**Handling**:
1. **Gather what you have**: Hard metrics (emails sent, impressions, clicks), qualitative feedback (sales, customer comments), outcome data (demos booked, closed deals).
2. **Acknowledge gaps upfront**: In "Data Gaps & Caveats," list what's missing and how it affects confidence in the analysis.
3. **Weight heavily toward outcomes and qualitative data**: If you don't have engagement metrics, lean on sales feedback and actual conversions/deals.
4. **Recommend future measurement**: In recommendations, include "implement campaign tagging in CRM" or "turn on analytics tracking" to close gaps for next campaign.
5. **Score confidence lower**: A campaign debrief with 40% data gaps should score "Low" confidence.

### Multi-Channel Attribution Challenges
**Scenario**: You don't know which channel truly drove conversions. A prospect might have seen LinkedIn ads, clicked a webinar email, attended the event, then clicked a blog post before converting.

**Handling**:
1. **Use last-touch attribution as default**: Note which channel the lead filled out a form or met with sales.
2. **Supplement with sales feedback**: Ask reps, "Of prospects who converted, which touchpoint was most memorable or convincing?"
3. **Highlight high-engagement channels**: Even if you can't isolate cause-and-effect, channels with high engagement and low cost-per-engagement are worth repeating.
4. **Test with future campaigns**: Recommend turning off one channel at a time in next iteration to isolate its contribution.
5. **Acknowledge uncertainty**: "We believe webinars drove ~70% of conversions, but this is based on last-touch attribution and sales feedback, not controlled testing."

### "Nothing Worked" Scenario
**Scenario**: Campaign underperformed across all channels. No positive metrics. Team feels demoralized.

**Handling**:
1. **Find the least-bad data point**: Even in a failed campaign, something usually has a higher conversion rate, engagement rate, or cost-per-outcome than others. Lead with that.
   - Example: "Email had 0.03% conversion, but webinar had 5.1%. Not great, but 170x better. Let's understand why."
2. **Separate execution from strategy**: Did the campaign fail because the idea was bad, or because execution was poor?
   - Bad execution: "We launched in a slow month with no sales support." → Fix: run again in Q1 with sales alignment.
   - Bad strategy: "Our audience didn't care about this product capability." → Pivot: shift positioning or target segment.
3. **Identify external factors**: Market timing, competitor moves, budget constraints, team changes. Acknowledge what was outside your control.
4. **Extract one learning**: Even failed campaigns teach something. "We learned that [audience segment / messaging angle / channel] doesn't work for us. That's valuable."
5. **Recommend a pivot, not a repeat**: Don't just try the same thing again. Recommend a strategic shift (different audience, different message, different channels, different timing).
6. **Maintain team morale**: Frame as "We ran an experiment, it didn't work, and now we know to do X differently." Not "We failed."

