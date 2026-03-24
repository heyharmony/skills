---
title: Plan Paid Ad Campaigns
description: Strategy, platform selection, audience targeting, creative testing, and optimization for paid acquisition campaigns
role: Marketing
action: Create
connectors:
  - HubSpot
  - Slack
  - Gmail
  - Google Drive
  - Salesforce
---

# Plan Paid Ad Campaigns

Paid advertising is how you reach customers at the right moment with the right message. This skill walks you through building a campaign strategy that aligns with your business goals, selecting the right platforms for your audience, structuring your account for growth, and optimizing based on performance metrics that matter.

## When to Use This Skill

1. **Launching a new paid campaign** — You're starting from scratch and need a structured approach to platform selection and account setup.
2. **Planning campaign strategy** — You have goals (awareness, leads, sales) and need to define audiences, budgets, and creative angles before launching.
3. **Expanding to a new platform** — You've had success on Google Ads but want to test Meta or LinkedIn. This skill helps you think through platform fit.
4. **Optimizing underperforming campaigns** — Your CPA is too high or ROAS is declining. Use this to audit targeting, creative, and budget allocation.
5. **Allocating budget across platforms** — You have a fixed monthly budget and need to decide how much goes to search vs. demand gen vs. B2B channels.
6. **Testing creative approaches** — You've been running the same ad for months. This skill helps you structure A/B tests on concept, angle, and messaging.
7. **Building audience segments** — You want to target different personas (high-value vs. exploratory) and need guidance on segmentation and lookalike strategies.

## Instructions

**Step 1: Define Your Campaign Goals**
Clarify what you're optimizing for — brand awareness, consideration/engagement, or direct conversions. Each requires different platforms and metrics. Document your target cost per result (CPA, CPL, or ROAS target).

**Step 2: Identify Your Audience**
Sketch your ideal customer profile. Pull from Harmony calls (what language resonates), sales conversations (common objections, pain points), and CRM data (existing customer demographics). Note firmographics for B2B (company size, industry) and psychographics (values, behaviors).

**Step 3: Select Platforms**
Match your audience to where they spend time. Google Ads for high-intent search. Meta (Facebook/Instagram) for demand generation and retargeting. LinkedIn for B2B awareness and consideration. Twitter/X for tech-savvy, opinion-leader audiences. TikTok for younger demographics. Start with 1-2 platforms.

**Step 4: Structure Your Account**
Use consistent naming: [Brand]-[Platform]-[Objective]-[Audience]. Create campaigns by objective (awareness, consideration, conversion), not by random performance. Within each campaign, create ad groups around single keywords or themes. This enables faster learning and budget control.

**Step 5: Allocate Budget**
Commit 70% of budget to proven, high-performing campaigns (scaling winners). Reserve 30% for testing new audiences, creative concepts, and platforms. Monthly budget guides daily spend; never change daily budgets mid-week.

**Step 6: Build Creative and Test**
Prioritize testing concept and angle before minutiae (colors, fonts). Run 3-5 ad variations per campaign, rotating them evenly. Pause underperformers after 500-1000 conversions (or 2-4 weeks). Document what worked so you iterate, not start over.

**Step 7: Monitor and Optimize**
Weekly check-in: compare actual CPA/ROAS to targets. Move budget toward winning audiences and away from losers. Check competitor ads (Gmail/industry newsletters), adjust messaging if needed. Monthly: review creative fatigue, test new angles, analyze Slack channel discussions about campaign feedback.

**Step 8: Report and Iterate**
Pull performance data into Google Drive or your team's dashboard. Share weekly with Slack; highlight wins, losses, and next tests. Use Salesforce or HubSpot to tie paid conversions back to pipeline and revenue. Quarterly: plan next test phase.

## Output Format

When you execute this skill, Harmony returns a structured campaign brief in Google Drive (or embedded below):

**Campaign Name:** [Brand]-[Platform]-[Objective]-[Audience]

**Goal:** [Awareness / Consideration / Conversion] — Target: [CPA / ROAS / CPM]

**Platform:** [Google Ads / Meta / LinkedIn / Twitter/X]

**Audience Definition:**
- ICP: [Title, company size, industry, location]
- Lookalike data: [Source of existing audience]
- Exclusions: [Who NOT to target]

**Budget:**
- Total monthly: $[X]
- Daily: $[X / 30]
- Allocation: [X]% proven, [Y]% testing

**Creative Strategy:**
- Concept: [Main angle / hook]
- Messaging: [3-5 value props or pain-point solutions]
- Variations to test: [3-5 hooks, platforms, or CTAs]
- Success metric: [Concept A outperforms B by 10%]

**Account Structure:**
- Campaign: [Objective: Awareness]
  - Ad Group 1: [Theme/keyword group]
  - Ad Group 2: [Theme/keyword group]
- Campaign: [Objective: Consideration]
  - Ad Group 1: [Theme/keyword group]

**Key Metrics to Track:**
- Cost per result (CPA/CPL)
- Return on ad spend (ROAS)
- Click-through rate (CTR)
- Conversion rate (CVR)
- Quality score (Google) or Relevance score (Meta)

**Next Steps:**
- Week 1: Launch and monitor daily; pause poor performers by day 3
- Week 2-4: Optimize based on performance; rotate creative
- Month 2: Scale winners, test new audiences
- Quarterly: Pivot strategy if CPA/ROAS target unmet

## Example

**Gridline — Workflow Automation SaaS, Google Ads + LinkedIn Campaign**

Gridline is a mid-market workflow automation platform. Their ICP: VP of Operations, 50–500 person companies, B2B SaaS / manufacturing. Monthly budget: $15K.

**Campaign Breakdown:**

*Campaign 1: Gridline-Google-Search-Conversion*
- Goal: Drive qualified demo requests
- Budget: $7,000/month (search converts high-intent traffic)
- Audience: Keywords like "workflow automation," "process automation," "no-code workflow"
- Creatives (test 3 variations):
  - Hook A: "Automate 40% of ops tasks in 30 days"
  - Hook B: "Turn spreadsheets into workflows — no coding"
  - Hook C: "Reduce manual data entry by $50K/year"
- Target: $200 CPA
- Ad Group 1: Workflow automation keywords (15 keywords, max CPC $8)
- Ad Group 2: Competitor keywords (HubSpot, Zapier, Make) — (20 keywords, max CPC $12)
- Expected monthly conversions: 75 demos

*Campaign 2: Gridline-LinkedIn-Awareness*
- Goal: Build awareness among operations leaders; retarget site visitors
- Budget: $5,000/month (LinkedIn CPL higher, but high-quality intent)
- Audience:
  - Primary: Operations managers, VP Ops, Operations directors; companies 50–500; US/Canada
  - Lookalike: Existing customers (pull from Salesforce)
  - Exclusion: Current customers, competitor buyers
- Creatives (test 3 angles):
  - Angle A: "Ops leaders cut 15 hours/week of manual work"
  - Angle B: "Why ops teams switched to Gridline (case study teaser)"
  - Angle C: "The automation question operations teams are asking in 2026"
- Target: $80 CPL (consideration) → follow up via sales email
- Audience segment 1: Lookalike (high-value) — 2,000 audience
- Audience segment 2: Broad operations keywords — 50K audience (cost-controlled)
- Expected monthly conversions: 60 leads

*Campaign 3: Gridline-Google-Retargeting-Conversion*
- Goal: Convert site visitors who browsed demo or pricing
- Budget: $3,000/month (high-intent warm audience)
- Audience: Website visitors, last 30 days (pixel-based)
- Creatives:
  - Hook A: "See how Gridline works: 15-min demo"
  - Hook B: "Still deciding? Here's what 200+ teams chose Gridline for"
  - Hook C: "Limited-time offer: Get started in 1 week"
- Target: $150 CPA
- Expected monthly conversions: 20 demos (high conversion rate on warm audience)

**Reporting (Weekly Slack Update):**
- Search: 18 demos, $222 CPA (vs. $200 target) — Hook A underperforming; pause and scale Hook C
- LinkedIn: 14 leads, $357 CPL (vs. $80 target) — Pivot: reduce broad targeting, scale lookalike
- Retargeting: 6 demos, $167 CPA (strong; increase daily budget by 20%)

**Optimization Applied:**
- Shift $500 from Search Hook A to Hook C
- Reduce LinkedIn broad audience to 30K; increase lookalike spend by 50%
- Increase retargeting daily budget from $100 to $120

## Edge Cases

1. **Low conversion volume** — If a campaign gets <50 conversions in 2 weeks, don't optimize yet; continue test. Small sample size leads to false negatives.
2. **Platform mismatch** — Your audience may not exist on your chosen platform. If LinkedIn CPL stays above 2x target after 2 weeks, pull budget and test Meta or Google.
3. **Creative fatigue** — Same ad served 30+ days = declining CTR. Rotate creative every 3-4 weeks even if performance is solid.
4. **Seasonal campaigns** — Q4 ecommerce or holiday campaigns need higher budgets; plan 2-3 months ahead. Test creative 4-6 weeks before peak.
5. **Attribution complexity** — Sales cycle 30+ days? Track touchpoints via Salesforce or HubSpot; don't rely on platform attribution alone. Compare paid conversions to pipeline impact.
6. **Budget constraints** — If scaling a winner requires $5K but you only have $1K, test lookalike or audience expansion (cheaper) before increasing daily budget.
