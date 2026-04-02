---
name: "Define the Problem"
description: "Identify and articulate the root customer problem that drives product decisions. Distinguish between symptoms, company problems, and the actual pain customers will change behavior to solve. When to use it: When you're tempted to jump to solutions, during customer interviews, before writing specs, or when teams disagree on priorities. Trigger on: 'What's the real problem', 'Why does this matter', 'Customer pain point', 'The problem we're solving', 'Is this a real problem', 'Five Whys'."
dependencies: []
connectors:
  - name: "Zoom"
    reason: "Extract customer quotes and pain signals from calls; identify where speakers move from symptoms to root causes"
  - name: "HubSpot"
    reason: "Track which customers have the problem most acutely; correlate problem severity with churn risk or expansion revenue"
  - name: "Slack"
    reason: "Capture customer feedback from sales and support channels; surface recurring pain themes from team conversations"
  - name: "Google Drive"
    reason: "Collaborate on problem documentation, impact scoring, and customer research synthesis"
author: "Harmony"
version: "1.0.0"
icon: "sparkles"
cover: ""
screenshots: []
category: "Product"
---

## Purpose

The best product teams obsess over problems, not solutions. A well-defined problem is half the solution. The skill of defining a problem is the ability to:

- Move past surface-level symptoms to root causes
- Distinguish between "nice to solve" and "hair on fire" problems
- Ground problem statements in customer verbatim, not your assumptions
- Frame problems from the customer's perspective, not the company's
- Validate problem severity through frequency and impact scoring

Many teams skip this step and jump to solutions. This creates products no one wants. Harmony helps you stay in the problem space long enough to understand what's really driving customer behavior.

## When to Use It

- **Customer interviews**: Before you pitch a solution, deeply understand the pain and its root cause. Use these techniques to avoid leading the customer toward your predetermined answer.
- **Roadmap planning**: Before you commit engineering to a feature, ensure the underlying problem is real and severe enough to justify the investment.
- **Feature request evaluation**: A customer asks for Feature X. Your job is to understand the problem Feature X is meant to solve, then explore whether Feature X is the only (or best) solution.
- **Team disagreement on priorities**: Two teams want to build different things. Define the problem each is trying to solve, then decide which problem is bigger.
- **Churn or expansion analysis**: A customer is leaving or not expanding. What unsolved problem is driving that decision? Solve the problem, not the symptom.
- **Competitive analysis**: Why do competitors' products work? What problems are they solving that you're not? Reframe as an opportunity to go deeper on customer need.
- **Product strategy or pivot**: You're considering a new market or product line. What new problems exist there? How severe are they vs. your current problems?

## Instructions

1. **Identify the symptom vs. the root cause**
   - Listen for what customers explicitly complain about: "This is slow", "This is confusing", "We have no visibility"
   - Ask "Why?" four more times after each answer. Harmony will flag where speakers jump between symptom and cause.
   - Example symptom chain: "I can't deploy fast" → "Why?" → "Our testing takes 3 hours" → "Why?" → "We don't know which tests to run" → "Why?" → "Tests aren't organized by feature" → "Why?" → "We built the codebase in silos"
   - The root cause is often about work, information, or organizational friction—not the tool
   - Document the full chain so you understand what actually needs to change

2. **Separate company problems from customer problems**
   - Company problem: "We're not growing fast enough in the SMB segment"
   - Customer problem: "Our team is growing but our process doesn't scale"
   - Listen for whose world is being disrupted: If only your business is hurt, it's not a customer problem
   - If you're solving a company problem, be honest about it (e.g., "We need to enter new verticals to grow"). But don't pretend it's a customer need.
   - The strongest products solve genuine customer problems that happen to unlock revenue for your company

3. **Extract verbatim customer quotes**
   - Record the exact words customers use when describing the problem
   - Look for emotional language: frustration, resignation, workaround acceptance
   - Quotes like "I've just accepted that this part of my week is chaos" signal a problem worth solving
   - Avoid paraphrasing—direct quotes are your evidence that the problem is real
   - Harmony will surface quotes from multiple speakers, helping you see if this is one person's issue or a systemic pain

4. **Validate problem frequency and impact**
   - How often does the problem occur? (Daily, weekly, once a quarter, once a year?)
   - What's the impact when it happens? (5 minutes lost, 1 hour lost, deal lost, customer churned?)
   - Score: Frequency × Impact. A daily 5-minute problem and a yearly 8-hour problem have different urgency.
   - How many customers have this problem? (100% of your base, 80%, 20%?)
   - Example: "10% of our customers experience churn annually due to poor mobile experience. When it happens, they leave. Frequency: annual. Impact: customer loss. Severity: high."
   - Severity matrix: Ask yourself, "What percentage of our TAM has this problem *and* would change behavior to solve it?"

5. **Frame the problem from the customer's perspective**
   - Rewrite: Instead of "Companies need better data governance," ask "What's broken in the customer's world?"
   - Better: "Finance teams spend 2 weeks reconciling data silos after every acquisition, slowing integration velocity and creating compliance risk."
   - Test your framing: Does it describe a world the customer experiences, or a world you're imagining?
   - Avoid jargon or feature language. The problem should make sense to someone outside your industry.
   - Include the context: For whom is this a problem? (Role, company size, industry, maturity level)

6. **Validate the problem with multiple customer segments**
   - Interview 5-10 people in your target role at different companies
   - Do 80%+ describe the same root cause? If not, you might have multiple problems or a persona-specific problem.
   - Harmony surfaces which speakers mention which problems, helping you spot patterns
   - If your problem only resonates with a small subset, that's valuable—you've narrowed your TAM
   - Look for convergence: Different companies using different language to describe the same underlying friction

7. **Distinguish "nice to solve" from "must solve"**
   - Nice to solve: Problem is real but customers have workarounds. They'll evaluate your solution but won't prioritize it.
   - Must solve: Problem is so painful customers are already changing behavior to escape it—switching tools, hiring people, building workarounds, accepting worse outcomes elsewhere.
   - Test: Would the customer spend money or change their process to solve this, or would they just appreciate it if it was free?
   - Example of "must solve": "Our QA bottleneck is blocking releases, costing us $1M in missed revenue per month."
   - Example of "nice to solve": "Our analytics dashboard is hard to read. We'd switch if we found something better, but it's not painful enough to justify migration risk."

8. **Create a problem statement document**
   - Write it in 1-2 paragraphs with full specificity
   - Include: who has it, what they experience, why it matters, how often it happens
   - Add 3-5 verbatim customer quotes that illustrate the problem
   - Include a severity score (frequency × impact, using matrix or similar)
   - Note: Is this a problem we should solve right now, or is it a longer-term opportunity?

## Output Format

```
# Problem Statement: [Company Name]

## The Problem (1-2 paragraphs)

[Who has this problem?] [What specifically happens?] [What's the impact?] [How often?]

When [trigger condition], [role] experiences [outcome]. This happens [frequency]. The impact is [consequence]. Without solving this, [customer behavior change or workaround].

## Evidence

**Customer quotes:**
- "[Exact quote revealing the pain]" — [Company, Role]
- "[Exact quote revealing acceptance of workaround]" — [Company, Role]
- "[Exact quote about impact]" — [Company, Role]

**Frequency and scope:**
- [X% of our customer base experiences this]
- [They experience it roughly [frequency] per [timeframe]]
- [When it happens, the impact is [cost/time/risk]]

## Root Cause Analysis (5 Whys)

**Symptom:** [Initial complaint from customer]

1. Why? [Because...]
2. Why? [Because...]
3. Why? [Because...]
4. Why? [Because...]
5. Why? [Root cause: structural issue, process gap, tool limitation]

## Comparative Analysis

**Why it's bigger than it seems:**
- [Similar problems in adjacent domains or industries]
- [Trend that's amplifying this problem: remote work, scaling, compliance changes]
- [Opportunity cost: what becomes possible if we solve this?]

## Severity Scoring

| Dimension | Score | Reasoning |
|-----------|-------|-----------|
| Frequency | [1-5] | [Daily/weekly/monthly/quarterly/annual] |
| Impact per occurrence | [1-5] | [Minute wasted/hour wasted/deal lost/customer churns] |
| Percentage of target customers | [1-5] | [100%/80%/50%/20%/5%] |
| **Overall severity** | [5-25] | [Frequency × Impact × Reach, mapped to 5-25 scale] |

## What Customers Are Doing Today

**Current workarounds:**
- [Workaround 1: What's the cost/friction?]
- [Workaround 2: Why do they accept this?]
- [Workaround 3: What's the risk?]

**Acceptance and resignation:**
- [Evidence that customers see this as inevitable]
- [Where they've given up on a better way]

## Problem vs. Opportunity

**This is a problem if:** [Company wants to solve this, customer will pay, market is sizable]

**This is an opportunity if:** [Nice to solve but not urgent, requires education, niche market]

**This is NOT our problem if:** [Happens to <20% of customers, impact is minimal, belongs to different persona]

---

## Next Steps

1. [Validate with 5 more customer interviews?]
2. [Define what solving this would look like?]
3. [Identify competitive solutions and why they fall short?]
```

## Example

```
# Problem Statement: ConnectLocal

## The Problem

Local business owners running retail shops, salons, and service businesses struggle to understand why their monthly revenue fluctuates week to week. They have sales data in the POS system, but no visibility into which customers are returning vs. new, which services are most profitable, or how seasonal trends affect cash flow planning. When a slow month hits, they're scrambling to understand if it's normal seasonality or a sign they're losing customer loyalty. This happens every quarter when they're trying to forecast cash flow for the following season.

The impact: Shop owners make hiring, inventory, or pricing decisions based on gut feel, not data. They miss retention opportunities because they don't know which high-value customers are at risk of switching to a competitor. A single month of unexpected revenue drop can force them to cut staff or deplete their working capital reserve.

## Evidence

**Customer quotes:**
- "I know I made more money last July than this July, but I can't tell you why. Did fewer people come in? Did we raise prices? Did the good customers stop coming? I have no idea." — Marcus, salon owner
- "My accountant tells me I should understand my margins by service type. I literally write everything down in a notebook and calculate it on a spreadsheet each month. It takes 3 hours." — Janet, personal training studio
- "I lost my two best clients and didn't even notice until three months later when I was reviewing who paid me. If I'd known, I could have reached out." — David, plumbing contractor

**Frequency and scope:**
- 87% of local service business owners report they don't have clear visibility into customer retention
- 73% use spreadsheets, notebooks, or remember things from memory as their primary reporting system
- Quarterly revenue forecasting is a guessing game: 60% miss their forecast by >20%
- Average shop owner spends 4-6 hours monthly on manual data work (pulling from POS, exporting to spreadsheet, calculating)

## Root Cause Analysis (5 Whys)

**Symptom:** "I don't know which customers are loyal vs. one-time, and I can't forecast seasonal trends"

1. Why? Because the POS system only shows transactions, not customer lifetime behavior or trend patterns
2. Why? Because POS vendors build for franchises and chains, not individual shop owners
3. Why? Because shop owners represent 0.1% of POS vendors' revenue and would need custom reporting
4. Why? Because shop owners historically haven't had the technical literacy to demand it
5. Root cause: Small business software is built for operations, not insight. The business intelligence layer that exists for mid-market companies (BI tools, dashboards) requires technical setup, costs $1000s/month, and assumes employees dedicated to analytics. Individual shop owners can't afford or don't know how to use these tools.

## Comparative Analysis

**Why it's bigger than it seems:**
- There are 2.3M retail/service establishments in the US <10 employees. All face this problem.
- Remote work and gig economy are amplifying this: Customers are more likely to switch to competitor, so loyalty metrics matter more
- Post-COVID, shop owners realize they should have had data when lockdowns hit (they couldn't predict recovery)
- Trend: As local service becomes more competitive and saturated, owners who understand customer behavior will outcompete those who don't

## Severity Scoring

| Dimension | Score | Reasoning |
|-----------|-------|-----------|
| Frequency | 5 | Monthly (when forecasting cash or reviewing slow month) |
| Impact per occurrence | 4 | Suboptimal decisions on hiring/pricing; missed retention opportunity; 4-6 hours manual work |
| Percentage of target customers | 5 | >90% of solo/small team service businesses lack customer insight |
| **Overall severity** | 24/25 | High-frequency, significant impact, massive addressable market |

## What Customers Are Doing Today

**Current workarounds:**
- Spreadsheet export from POS + manual calculation (time-consuming, error-prone, requires repetition)
- Monthly gut-check conversation with employees ("Are regulars still coming in?")
- Waiting for the accountant's year-end review (too late to course-correct)
- Accepting that some months are mysterious and not worth investigating

**Acceptance and resignation:**
- "That's just how it is being a small business—you don't have fancy data"
- "I can't afford a business analyst"
- "This is why I hired an accountant"

## Problem vs. Opportunity

**This is a problem if:** We can make customer insight and forecasting as simple as "open the app" with zero setup or expertise required.

**This is an opportunity if:** We charge $99/month for beautiful dashboards that require accountants to interpret.

**This is NOT our problem if:** We're building for mid-market retailers with dedicated finance teams (they're already buying BI tools).

---

## Next Steps

1. Validate with 10 service business owners across different verticals (salons, gyms, plumbing, coaching)
2. Test willingness to pay: Would they spend $49/month? $99/month? What's the break-even ROI?
3. Understand switching costs: How locked in are they to their current POS? Can we integrate, or do we need to replace?
4. Map the feature set required to solve: retention tracking, seasonal forecasting, profit by service, customer cohort analysis
```

## Edge Cases

- **You think you have the problem wrong**: Go back to customer interviews. Record calls and Harmony will flag where you're making assumptions vs. listening. Often you learn the problem is *adjacent* to what you thought—and that's valuable information.

- **The problem is real but tiny**: 5% of your target customers have this pain. It's a real problem for those people, just not a market opportunity for a standalone product. Consider it a feature in a larger product, or find a specific micro-segment where it's bigger.

- **The problem is big but customers won't pay to solve it**: They have a workaround they've accepted. This is a good problem to *give away* as a feature to increase stickiness, not a foundational product. Example: "Automatic email summaries" (nice to have) vs. "Help me understand which deals I'm losing" (need to have).

- **Multiple root causes, multiple customer segments**: You might be conflating three different problems. Break them out: "Problem A affects role X at company size Y. Problem B affects role Z at company size W." Then prioritize which one your product tackles first.

- **You're solving the problem but no one knows it**: You've misframed the problem statement. Rewrite it in customer language. Test with 3 prospects who don't know your product—do they immediately nod and say "Yes, that's our pain"? If not, rewrite.

- **Problem is solved but unsolved feelings remain**: Example: You provide data visibility, but the owner still feels anxious about cash flow. They got the feature, but you didn't solve the emotional problem. Consider: Is the underlying problem actually about financial resilience or control, not data? You may need to expand your conception of the problem.
