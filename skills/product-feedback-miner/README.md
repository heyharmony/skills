# Product Feedback Miner

> Turn scattered customer feedback into structured, prioritized product intelligence — patterns, segments, and signal separated from noise.

## What It Does

Product Feedback Miner transforms scattered feedback from support tickets, user interviews, reviews, NPS surveys, Slack channels, and call transcripts into **structured product insights** that drive roadmap decisions.

Instead of swimming through dozens of feedback sources and reaching different conclusions than your CEO, this skill:

- **Extracts feedback** from any text source (call transcripts, tickets, reviews, chat logs)
- **Categorizes** each piece: feature requests, bugs, UX friction, praise, churn signals
- **Identifies patterns** that matter—distinguishing widespread issues from "one person's problem"
- **Segments by customer type**—enterprise vs. SMB, new vs. established, high-value vs. low-value—so you see which segments are most affected
- **Scores urgency and impact** to guide prioritization
- **Connects feedback to product areas** so engineering knows what to focus on
- **Separates signal from noise**—highlighting what you should act on vs. what's an outlier

The output is **ranked, evidence-based** product intelligence ready for roadmap planning, investor updates, or sprint planning.

## Who It's For

- **Product Managers**: Synthesizing customer feedback into data-driven roadmap recommendations
- **Founders & CEOs**: Understanding customer pain points driving churn or retention
- **Customer Success teams**: Identifying trends in support tickets that indicate systematic problems
- **Engineering leaders**: Getting clear priorities based on customer impact and frequency
- **Research teams**: Analyzing interview transcripts and survey data for patterns
- **Revenue leadership**: Flagging churn signals and win/loss indicators in customer conversations

## Use Cases

### Use Case 1: Quarterly Roadmap Planning
Your company has collected feedback from Q1: 15 support tickets, 40 NPS survey responses, 6 customer calls, and scattered Slack feedback. Rather than cherry-picking quotes or gut-feel prioritization, feed all this feedback into Product Feedback Miner to get:
- The top 5 patterns affecting customers, ranked by impact × urgency
- Which customer segments are most affected by each issue
- Clear recommendations on what to build vs. what to monitor vs. what to defer
- Data to present to the board showing why you're prioritizing X over Y

### Use Case 2: Churn Investigation
A key enterprise customer is churning. You want to understand why and whether this is an isolated case or a sign of a broader problem. Feed their interactions (support tickets, call transcripts, NPS comment) into the skill to extract their specific pain points, then analyze against feedback from similar customers (other enterprise accounts). You'll see if their complaint is unique or if you have an enterprise-specific issue affecting multiple accounts.

### Use Case 3: Feature Request Validation
Your sales team says "every prospect asks for Slack integration." Your product team says "we get maybe 2 requests per month." Feed your actual customer conversations (calls, support tickets, surveys) into Product Feedback Miner to quantify how many customers actually want this and whether it's a deal blocker or a nice-to-have.

### Use Case 4: Post-Release Impact Analysis
You shipped a major feature. Now you're getting mixed feedback—some customers love it, others say it doesn't solve their problem. Extract and analyze all feedback about this feature to understand:
- Is it working as intended for the target use case?
- Which customer segments find it valuable vs. unhelpful?
- What edge cases or follow-up work is needed?
- Is this a win or a miss?

### Use Case 5: Support Ticket Root Cause Analysis
Your support queue is growing. Rather than assigning all tickets individually, extract the top issues from your ticket database to identify if there's a systemic problem (onboarding gap, undocumented feature, performance issue) vs. isolated edge cases. Prioritize fixes that will reduce ticket volume.

### Use Case 6: Win/Loss Analysis
You're losing deals to competitors. Analyze the customer conversations (demos, follow-up calls, proposal rejections, trial exit feedback) to extract why they chose a competitor instead. Look for patterns:
- Missing feature in 4 different accounts? Time to build it.
- Perception that you're too expensive vs. cheaper alternative? Pricing/positioning issue.
- Your UI was confusing, so they didn't see the value? Product or marketing issue.

### Use Case 7: Customer Segment Deep Dive
You want to understand if your SMB customers have different pain points than your enterprise customers. Analyze feedback tagged by company size and customer tenure to see segment-specific patterns. This tells you if you should build different features for different tiers or if you have a shared problem affecting everyone.

## Setup

**No setup required.** Product Feedback Miner works on any text feedback you provide:
- Copy/paste support ticket content
- Paste call transcript excerpts
- Paste NPS survey responses
- Include Slack channel discussion
- Upload or paste customer interview notes

The skill handles multiple feedback sources in a single input and automatically identifies source type and relevance.

**Best practices for inputs:**
- Include as much feedback as possible (more data = better pattern detection)
- Include date context if available (helps identify if issues are recent or long-standing)
- Include customer segment info if known (company size, tenure, deal size, use case)
- Include source type (call, ticket, review, survey, etc.)
- Combine feedback from multiple months/quarters for seasonal patterns

## What You Get

### 1. Structured Feedback Report
A ranked analysis of customer feedback patterns with:
- Each pattern explained with evidence (quotes, frequency, affected segments)
- Impact and urgency scores for prioritization
- Connected to specific product areas
- Recommended actions

### 2. Segment-Specific Insights
Breakdown of what matters to different customer types:
- Enterprise vs. SMB pain points
- New customer friction vs. long-term customer expectations
- High-value account concerns vs. standard tier feedback

### 3. Signal vs. Noise Assessment
Clear distinction between:
- **High-confidence patterns** (3+ mentions, multiple customers) → Act on these
- **Moderate signals** (2 mentions, emerging) → Monitor and investigate
- **Noise** (single mentions) → De-prioritize

### 4. Prioritization Matrix
A ranked table showing:
- Pattern name
- Impact score (how much it matters)
- Urgency score (how time-sensitive)
- Effort estimate (complexity to fix)
- Recommended action (roadmap, sprint, backlog, monitor)

### 5. Contradiction Resolution
When customers give opposite feedback, the skill explains why:
- "Feature X is essential" (from enterprise customer) vs. "Feature X is not important" (from SMB customer)
- Different customer types have different needs
- Recommendations adjust for segment-specific value

### 6. Churn Signal Extraction
Explicitly flagged:
- Mentions of considering competitors or switching
- Problems blocking ROI or adoption
- High-severity complaints from high-value customers
- Sentiment intensity and likelihood of churn

### 7. Actionable Recommendations
Not just problems, but specific next steps:
- "Add sort/filter UI for custom fields (low effort, high visibility)"
- "Investigate export bug with large datasets (likely hotfix)"
- "Design Slack API for notifications (medium effort, high competitive value)"

---

## Example Output

For a project management SaaS tool, analyzing Q1 feedback from 12 customers across support tickets, NPS surveys, and customer calls:

**Top Finding:** Performance degradation with 500+ tasks is a **tier-1 churn risk** affecting enterprise customers. One $150K customer explicitly stated they're "considering alternatives" if not fixed within 60 days.

**Second Finding:** Export functionality is broken for large datasets, blocking enterprise reporting workflows. This is preventing ROI for paying customers.

**Third Finding:** Custom field sorting would improve SMB workflow efficiency but is a low-priority UX improvement, not a dealbreaker.

**Recommendation:** Prioritize performance optimization (enterprise churn risk) and export bug fix (customer-blocking) in next sprint. Queue custom field UX improvement for following sprint.

**Segment breakdown:** All churn signals come from enterprise; SMB feedback is positive with feature requests as minor friction. New customers struggling with onboarding; long-term customers expecting feature parity with competitors.

---

## Who Uses This

- **Notion**, **Slack**, and other B2B platforms use feedback synthesis to guide product roadmap
- **Stripe** publishes "What we're building" based on aggregate customer feedback signals
- **PostHog** analyzes customer interview feedback to validate feature ideas before building
- **Figma** community feedback drives their quarterly prioritization

---

## FAQ

**Q: Can this work with just support tickets, or do I need multiple sources?**
A: Works with a single source, but more diverse sources give better signal. Support tickets tend to over-weight problems; surveys tend to be more balanced. Call transcripts add nuance. Combining sources reveals patterns that tickets alone would miss.

**Q: What if feedback is contradictory?**
A: The skill segments contradictions by customer type. If enterprise says "feature X is critical" and SMB says "feature X doesn't matter," that's actually useful information—it tells you what matters to whom. You can then decide to build feature X as an enterprise-only feature or note it as low priority for SMB.

**Q: How recent should the feedback be?**
A: Recent feedback (last 30-90 days) is most relevant for roadmap planning. Older feedback is still useful for identifying long-standing issues. Date-tag feedback so the analysis can note if issues are new vs. long-standing.

**Q: Can I use this for competitive analysis?**
A: Partially. Feedback mentions of "your competitor has X" are useful signals of missing features. But primary use is understanding your own customer pain points, not tracking competitors. Use in conjunction with dedicated competitive analysis tools.

**Q: What if I only have 3 pieces of feedback?**
A: You can run it, but pattern detection works better with 10+ data points. With 3 pieces, expect broad observations rather than high-confidence patterns. Ideal input is 10-30 feedback units per analysis.

**Q: Does this replace user research or customer interviews?**
A: No, it synthesizes existing feedback. If you don't have feedback, you still need to do user research. But if you have feedback scattered across channels, this organizes and prioritizes it for you.

---

## Learn More

- [The Feedback Loop: How to Build Products Customers Love](https://www.reforge.com/) - Product strategy courses on feedback synthesis
- [Jobs to be Done](https://jtbd.info/) - Framework for understanding why customers use products
- [Continuous Discovery](https://www.producttalk.org/) - Methods for gathering and using customer feedback
- [The Mom Test](https://www.themomtest.com/) - How to ask customers the right questions

---

**Ready to turn customer feedback chaos into clear product priorities?**

Provide your feedback sources (support tickets, NPS responses, call transcripts, reviews) and get back a prioritized, evidence-based roadmap recommendation.
