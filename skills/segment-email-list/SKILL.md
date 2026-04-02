---
name: "Segment Email List"
description: "Design an email segmentation strategy using RFM scoring, engagement tiers, and behavioral triggers — produce a segment map with targeting rules and content strategies per segment. Trigger on: email segmentation, segment list, RFM scoring, engagement tiers, email targeting, subscriber segments, list segmentation."
dependencies: []
connectors:
  - name: "HubSpot"
    reason: "Pull contact properties, engagement data, and deal stages to build data-driven segments"
  - name: "Salesforce"
    reason: "Pull account data, opportunity stages, and contact activity for B2B segmentation"
  - name: "Slack"
    reason: "Surface team discussions about customer segments, persona definitions, and targeting decisions"
  - name: "Notion"
    reason: "Reference existing persona docs, ICP definitions, and customer research for segment alignment"
author: "Harmony"
version: "1.0.0"
icon: "sparkles"
cover: ""
screenshots: []
category: "Marketing"
---

## Purpose

Email segmentation is the single highest-leverage tactic for improving open rates and revenue per email sent. Generic, one-size-fits-all campaigns underperform because each customer has different needs, purchase stage, and engagement level. Segmentation splits your list into micro-audiences, each receiving content tailored to their situation.

This skill designs a segmentation strategy grounded in RFM scoring (Recency, Frequency, Monetary value), engagement tiers (Champions → Dormant), behavioral triggers (product usage, purchase history, content downloads), and zero-party data (stated preferences from signup surveys). The output is a segment map showing: segment name, size estimate, targeting rules, content themes, and automation workflows.

The math is simple: if your flat-list open rate is 18%, but Champions open at 42% and Dormant open at 4%, you can redesign sends to favor Champions, suppress Dormant, and re-engage At-Risk in ways that move the overall rate to 26%+. That's an 44% lift from segmentation alone.

## When to Use

**Trigger this skill when:**
- Current email open rate is below 20% (indicates poor targeting)
- You're sending the same email to everyone regardless of purchase stage
- You have no segments, or segments are outdated (>12 months old)
- List is growing but engagement is flat or declining
- You're about to run a major campaign and want to guarantee success
- Re-doing email strategy after a merger, rebranding, or new product line
- Data from CRM shows clear customer tiers (high-value accounts, new signups, churning customers)
- Sales team complains marketing emails don't match what they're selling to each account
- You're planning a re-engagement campaign and need to identify At-Risk cohorts
- Quarterly review: best practice is to refresh segment rules every 3-6 months

**Do NOT use this skill for:**
- Building individual email campaigns (use Plan Email Campaign)
- Designing email layouts or templates (use Email Template Audit)
- Writing email copy (use Craft Email Subject Lines)
- Setting up automation or workflows (use Automation Workflow Designer)

## Instructions

Follow this 10-step framework to design a segmentation strategy:

**Step 1: Gather Current List Data**
Interview your marketing lead or database admin. Collect:
- Current list size and growth rate (e.g., "87K contacts, +2.5K/month")
- Fields available in your CRM (email, name, company, job title, signup date, last activity, purchase history, etc.)
- Historical segments (if any exist; what are they? who owns them? how often are they updated?)
- Current send volume (how many campaigns per week? triggered emails?)
- ESP or CRM platform (HubSpot, Salesforce, Klaviyo, ActiveCampaign, etc.)
- Any existing customer tiers or personas (sales qualifications, account segments, buyer journey stages)
- Data on customer lifecycle (how long is typical customer lifetime? what's churn rate?)

Document this context. It shapes what segments are realistic.

**Step 2: Define Business Goals**
Ask leadership: What are we trying to achieve with email?

- **Revenue goal:** Generate $X in attributed revenue this quarter?
- **Engagement goal:** Improve open rate from 18% to 25%? Reduce unsubscribe rate?
- **Retention goal:** Reduce churn by 5%? Re-activate 20% of dormant customers?
- **Acquisition goal:** Nurture new signups to first purchase faster? Win new accounts?
- **Content goal:** Drive traffic to blog posts, webinars, or product pages?

Map goals to segments. For example:
- **Champions:** Increase frequency (upsell/cross-sell messaging) → Revenue goal
- **Loyal:** Maintain engagement + drive referrals → Retention goal
- **At-Risk:** Re-engagement campaign → Retention goal
- **New:** Nurture to purchase → Acquisition goal
- **Dormant:** Thoughtful win-back → Revenue recovery

This keeps segmentation strategic, not just tactical.

**Step 3: Build RFM Scoring Model**
RFM = Recency + Frequency + Monetary. Each dimension is scored 1-5, combined into a composite score.

**Recency:** Days since last action (email open, click, purchase, or login).
- 5 points: Last action <7 days ago (very recent)
- 4 points: 8-30 days
- 3 points: 31-90 days
- 2 points: 91-180 days
- 1 point: >180 days

**Frequency:** Number of actions (opens, clicks, purchases) in past 90 days.
- 5 points: 10+ actions (highly engaged)
- 4 points: 6-9 actions
- 3 points: 3-5 actions
- 2 points: 1-2 actions
- 1 point: 0 actions (never engaged)

**Monetary:** Lifetime revenue generated (for customers) or engagement proxy (for prospects/free users).
- For paying customers, use actual revenue.
- For non-paying prospects, use proxy: content downloads count as 5 points, webinar attendance as 4, email clicks as 2, email opens as 1.
- 5 points: $1,000+ lifetime value (or highest engagement proxy)
- 4 points: $500-999 (or high engagement)
- 3 points: $100-499 (or medium engagement)
- 2 points: $1-99 (or low engagement)
- 1 point: $0 (no value or engagement)

**Composite RFM Score:**
For each subscriber, calculate: (R + F + M) / 3. This gives a 1.0-5.0 score.

Pull RFM data from your CRM/ESP. Most platforms (HubSpot, Klaviyo) have RFM scoring built in. If not, you can calculate in a spreadsheet:
- Recency = TODAY() - MAX(last open date, last click date, last purchase date)
- Frequency = COUNT(opens + clicks + purchases in past 90 days)
- Monetary = SUM(revenue in past 12 months) or engagement proxy

Once scored, you'll have a distribution. Export to a chart. Example:
- 8% of list scores 4.5-5.0 (Champions)
- 15% score 3.5-4.4 (Loyal)
- 22% score 2.5-3.4 (Active)
- 28% score 1.5-2.4 (At-Risk)
- 27% score 1.0-1.4 (Dormant)

**Step 4: Create Engagement Tiers**
Map RFM scores to human-readable tiers. Use these 5 standard tiers:

| Tier | RFM Range | Definition | Size | Send Frequency | Key Action |
|------|-----------|-----------|------|----------------|-----------|
| **Champions** | 4.5-5.0 | Recent, frequent, high value | 5-12% | 2x/week | Exclusive offers, VIP content |
| **Loyal** | 3.5-4.4 | Regular engagement, solid value | 12-18% | 1x/week | Product updates, new features |
| **Active** | 2.5-3.4 | Moderate engagement, growth potential | 18-28% | 1x/week | Educational content, upsell |
| **At-Risk** | 1.5-2.4 | Declining engagement, may churn | 25-35% | 1x/10 days | Re-engagement campaigns |
| **Dormant** | 1.0-1.4 | Inactive 6+ months, low value | 25-35% | 1x/month or winback series | Win-back or sunset |

Adjust percentages and send frequency based on your goals and industry. B2B SaaS may suppress Dormant entirely; DTC ecommerce may run aggressive win-back.

**Step 5: Layer Behavioral Segments**
Add product/action-based segments on top of engagement tiers. Examples:

- **Product Usage:** Free tier users vs. paid tier users (for SaaS). Send different upgrade messaging.
- **Purchase Recency:** Customers who purchased <30 days ago (onboard heavily) vs. >1 year ago (loyalty focus).
- **Content Interest:** Subscribers who clicked on "AI productivity" content vs. "automation" content get different email themes.
- **Company Size:** SMB vs. mid-market vs. enterprise accounts (B2B). Enterprise gets white-glove content.
- **Signup Source:** Organic signups vs. paid ads vs. partner referrals. Each has different intent.
- **Browser/Device:** Mobile-heavy users get mobile-optimized templates; desktop users get richer layouts.

Create a matrix. Example for a B2B SaaS:

```
[Engagement Tier] × [Product Usage] × [Company Size]
= 5 tiers × 3 product tiers × 3 company sizes = 45 possible segments

But don't activate all 45. Start with high-impact combinations:
- Champions × Paid × Enterprise (upsell/multi-product)
- At-Risk × Any (re-engagement blitz)
- New × Free × SMB (free-to-paid funnel)
```

Start simple (5 engagement tiers). Add layers only if data supports and your team can manage the complexity.

**Step 6: Add Zero-Party Data Segments**
Zero-party data = information subscribers tell you directly (not inferred). Add segmentation based on:

- **Signup Survey Responses:** "What's your biggest challenge?" Segment by answer. Send targeted solution emails.
- **Preference Center:** "Which topics interest you?" Create segments per topic. Send only matching content.
- **Stated Goals:** "Are you evaluating, implementing, or optimizing?" Match email content to stage.
- **Company Industry:** "What industry are you in?" Send industry-specific case studies and use cases.
- **Role/Title:** "Are you an engineer, product manager, or marketer?" Segment by persona.

Example: A marketing platform lets signups pick interests: SEO, Social Media, Email, Paid Ads. Create 4 segments. Each month, send one deep-dive email on their selected topic. Lift: 32% higher CTR vs. generic sends.

**Step 7: Map Segments to Content Strategies**
For each segment, define what content and messaging they get. Create a content strategy table:

| Segment | Engagement | Content Theme | Email Goal | Frequency | Subject Line Tone |
|---------|------------|----------------|------------|-----------|------------------|
| Champions (RFM 4.5+) | High | Product updates, VIP early access, case studies | Increase LTV, upsell | 2x/week | Exclusive, insider |
| Loyal (RFM 3.5-4.4) | High | How-to guides, feature announcements, tips | Drive engagement | 1x/week | Helpful, authoritative |
| Active (RFM 2.5-3.4) | Medium | Beginner guides, product basics, free resources | Move to paid / increase engagement | 1x/week | Curiosity, value |
| At-Risk (RFM 1.5-2.4) | Low | "We miss you" message, discount/incentive, quick wins | Re-engagement | 1x/10 days | Warm, personal |
| Dormant (RFM <1.5) | None | Win-back or sunset | Reactivate or remove | 1x/month | Final chance, or none |

**Step 8: Estimate Segment Sizes and Performance Lifts**
Use your RFM distribution to estimate size. Example (87K list):

| Segment | % of List | Size | Current Open Rate | Expected Open Rate | Lift |
|---------|-----------|------|-------------------|-------------------|------|
| Champions | 9% | 7,830 | 42% | 48% | +6pp |
| Loyal | 16% | 13,920 | 28% | 35% | +7pp |
| Active | 22% | 19,140 | 18% | 22% | +4pp |
| At-Risk | 30% | 26,100 | 6% | 12% | +6pp |
| Dormant | 23% | 20,010 | 2% | 8% (win-back) | +6pp |

**Blended open rate (before segmentation):** ~18%
**Blended open rate (after segmentation, with segment-tailored sends):** ~26%

**Lift: +8 percentage points (44% improvement)**

This is achievable because:
1. You're sending Champions more frequent, valuable content (they can handle it).
2. You're suppressing Dormant from generic campaigns (they drag down your rate).
3. You're sending At-Risk a focused re-engagement message (not generic product content).
4. You're timing content to match engagement level (Active gets educational; Champions get exclusive).

**Step 9: Define Automation Rules**
How do subscribers move between segments? Create movement rules:

**Upward movement (engagement improving):**
- If Dormant subscriber opens email or clicks link → move to At-Risk after 1 action
- If At-Risk subscriber opens 3+ times in 30 days → move to Active
- If Active subscriber clicks 2+ times in 30 days → move to Loyal
- If any tier subscribes to preference center topic → add to that behavioral segment

**Downward movement (engagement declining):**
- If Active subscriber goes 60+ days without engagement → move to At-Risk
- If At-Risk subscriber goes 180+ days without engagement → move to Dormant
- If Champion clicks <1 email in 30 days (unusual) → move to Loyal (but monitor)

**Rules update frequency:** Weekly or biweekly. Set up in your CRM/ESP automation. Example workflows:
- Automation 1: "New signups" → At-Risk tier (conservative; let them prove engagement)
- Automation 2: "Email opens, 3 in 30 days" → Move from At-Risk to Active
- Automation 3: "No engagement, 180+ days" → Move any tier to Dormant (except suppress list)

**Step 10: Deliver Segment Map and Implementation Guide**
Compile findings into a segment plan document. Include:
- 1-page summary (how many segments, expected lift, timeline)
- Segment map (table: name, size, RFM range, send frequency, content themes)
- Content strategy per segment (what emails each segment gets, when)
- Automation rules (how subscribers move between segments)
- Implementation checklist (which segment to launch first, second, third)
- Success metrics (track open rate, click rate, revenue per segment weekly)
- Review schedule (reassess segment rules every 3-6 months)

Share with marketing ops, email team, and leadership. Get alignment on segment rules before launching.

## Output Format

**Segment Plan Structure:**

```
EMAIL SEGMENTATION PLAN
[Company Name] | [Date]

EXECUTIVE SUMMARY
- List Size: [__] contacts
- Current Open Rate: [__]% | Expected Post-Segmentation: [__]%
- Projected Lift: [__] percentage points
- Timeline to Launch: [30/45/60 days]
- Segments to Build: [__] tiers + [__] behavioral layers

SEGMENT MAP

| Segment | RFM Range | Size | % of List | Send Frequency | Content Focus | Primary Goal |
|---------|-----------|------|-----------|----------------|----------------|--------------|
| Champions | 4.5-5.0 | [__] | [__]% | 2x/week | Exclusive access, upsell | Increase LTV |
| Loyal | 3.5-4.4 | [__] | [__]% | 1x/week | Updates, tips | Maintain engagement |
| Active | 2.5-3.4 | [__] | [__]% | 1x/week | Education, beginner guides | Increase frequency |
| At-Risk | 1.5-2.4 | [__] | [__]% | 1x/10 days | Re-engagement, incentive | Win back |
| Dormant | 1.0-1.4 | [__] | [__]% | 1x/month or series | Win-back or sunset | Reactivate or remove |

CONTENT STRATEGY PER SEGMENT

Champions:
- Email Themes: VIP early access, exclusive discounts, product roadmap sneak peeks
- Example Subject Lines: "[VIP] You're first to try our new feature," "Your exclusive early-bird pricing expires soon"
- Frequency: Tuesday morning, Saturday afternoon (test both)
- Expected Open Rate: 48% | Click Rate: 6-8%

Loyal:
- Email Themes: Feature announcements, how-to guides, tips & tricks, success stories
- Example Subject Lines: "5 ways to [common goal] with [Product]," "New: [Feature] now available"
- Frequency: Thursdays
- Expected Open Rate: 35% | Click Rate: 4-5%

Active:
- Email Themes: Getting started guides, beginner tutorials, free resources, case studies
- Example Subject Lines: "The beginner's guide to [common goal]," "3 businesses like yours just [achievement]"
- Frequency: Wednesdays
- Expected Open Rate: 22% | Click Rate: 2-3%

At-Risk:
- Email Themes: "We've missed you," special one-time discount, customer success stories (show value)
- Example Subject Lines: "Come back for 20% off + this new feature," "[Name], what changed?"
- Frequency: Biweekly, staggered (not batched with other sends)
- Expected Open Rate: 12% | Click Rate: 1-2%
- Win-back Series: 3-4 email sequence over 6 weeks, then sunset if no engagement

Dormant:
- Email Themes: Win-back offer (limited time) OR final sunset message
- Example Subject Lines: "Last chance: Come back to [Product]," "Thank you for being part of our journey"
- Frequency: 1 final email, then unsubscribe or segment to monthly nurture
- Expected Open Rate: 8% | Click Rate: 0.5-1%

BEHAVIORAL SEGMENTS (overlay on engagement tiers)

[If applicable: add table for product usage, purchase history, content interest, etc.]

AUTOMATION RULES & MOVEMENT

Upward Movement:
- Dormant → At-Risk: After 1 email open or link click
- At-Risk → Active: After 3 opens in 30 days OR 1 purchase
- Active → Loyal: After 5 opens in 30 days OR 2+ clicks per week
- Any tier → [Topic segment]: Subscribe via preference center

Downward Movement:
- Active → At-Risk: No engagement for 60 days
- At-Risk → Dormant: No engagement for 180 days
- [Topic segment] → Base tier: Unsubscribe from preference center topic

Update Frequency: Weekly

IMPLEMENTATION ROADMAP

Phase 1 (Weeks 1-2): Build & Validate
- [ ] Export list and calculate RFM scores for all contacts
- [ ] Validate segment sizes and check data quality (missing fields, duplicates)
- [ ] Create segment tags/lists in ESP/CRM
- [ ] Draft sample emails for each segment
- [ ] Internal review & approval (marketing + sales leadership)

Phase 2 (Weeks 3-4): Test & Launch
- [ ] A/B test sample emails with small cohort (5-10% of each segment)
- [ ] Monitor open, click, and bounce rates
- [ ] Adjust content or frequency based on test results
- [ ] Set up automation rules for segment movement
- [ ] Launch full rollout to all segments

Phase 3 (Weeks 5+): Monitor & Optimize
- [ ] Track open rate, click rate, unsubscribe rate per segment
- [ ] Weekly reporting: segment performance dashboard
- [ ] Adjust send times, content themes based on performance
- [ ] Reassess RFM rules and segment boundaries quarterly
- [ ] Report lift vs. baseline (pre-segmentation open rate)

SUCCESS METRICS

Track weekly:
- Open Rate per segment (compare to goal)
- Click Rate per segment
- Unsubscribe Rate per segment
- Revenue per segment (if applicable)
- Segment movement: how many moved up/down this week?

Target post-launch (30 days):
- Blended open rate: [__]% (up from [__]%)
- Blended click rate: [__]% (up from [__]%)
- Unsubscribe rate: <0.3% (industry avg)
- Revenue per email: [__] (calculate as revenue / emails sent)

REVIEW & REFRESH

Next Review Date: [Date, +90 days]
Owner: [Name]
```

## Example

**Scenario:** Threadline (DTC fashion e-commerce brand, Klaviyo) — 85K subscriber list. Current email metrics: 18% open rate, 1.8% click rate, 0.6% unsubscribe rate. Goal: Improve open rate to 26% and increase AOV (average order value) per email recipient by 15% via segmentation.

**Current state:** One weekly newsletter sent to entire list, regardless of purchase history or engagement level. Champions and Dormant mixed together, dragging down performance.

**Context gathering:**
- List size: 85,247
- Growth: +2,800/month (acquisition via paid ads, organic, influencer)
- Fields available: Email, first/last name, signup date, purchase history, product preferences (tag system: dresses, shoes, accessories), last purchase date, total spend
- Current segments: None (flat list)
- Send frequency: 1x/week newsletter (Mondays)

**RFM calculation (Klaviyo native):**
- Recency: Last purchase date or last email open
- Frequency: Number of purchases in past 12 months
- Monetary: Total spend (from Shopify integration)

Distribution (85K list):
- 7.2K (8%) RFM 4.5-5.0 (Champions) — Avg spend: $890, purchased in last 14 days
- 13.6K (16%) RFM 3.5-4.4 (Loyal) — Avg spend: $310, purchased 15-60 days ago
- 18.7K (22%) RFM 2.5-3.4 (Active) — Avg spend: $85, purchased 61-180 days ago
- 25.5K (30%) RFM 1.5-2.4 (At-Risk) — Avg spend: $22, purchased 181-365 days ago
- 20.2K (24%) RFM 1.0-1.4 (Dormant) — Avg spend: $0 or purchased 365+ days ago

**Engagement tier targets:**

| Segment | Size | Current Open | Target Open | Send Frequency | Content |
|---------|------|--------------|------------|----------------|---------|
| Champions (7.2K) | 8% | 38% | 45% | 3x/week (Tue, Thu, Sat) | New arrivals (exclusive early access), VIP sale, styling tips for their size/style |
| Loyal (13.6K) | 16% | 26% | 32% | 2x/week (Wed, Sat) | Weekly lookbook, sale announcements, customer stories |
| Active (18.7K) | 22% | 16% | 21% | 1x/week (Fri) | Beginner style guides, free shipping thresholds, trending items |
| At-Risk (25.5K) | 30% | 8% | 14% | 1x/10 days (Tue) | "We miss you" + 15% off, re-engagement series, bestsellers |
| Dormant (20.2K) | 24% | 2% | 8% | 1x/month (final) | Last-chance win-back: "Finish your look + 20% off" |

**Behavioral overlays:**
- Product preference: Segment by tag (Dresses vs. Shoes vs. Accessories). Send matching product spotlights.
- Purchase recency: New customers (<30 days) get post-purchase care emails + loyalty program intro. Repeat customers (2+ purchases) get loyalty rewards.

**Automation rules:**
- New signup → At-Risk tier (conservative), tagged with preference
- If open 2 emails in first 10 days → Move to Active
- If purchase within 30 days of signup → Move to Loyal
- If 60 days no engagement → Move to At-Risk
- If 180 days no engagement → Move to Dormant

**Content strategy:**

*Champions:*
- 3x/week sends (high tolerance)
- Subject lines: "Just for you," "48-hour early access," "Your personalized picks"
- Content: New arrivals (exclusive 48 hours before Loyal), personalized style recommendations, VIP sale invites
- CTA: "Shop now," "Unlock exclusive access"

*Loyal:*
- 2x/week sends
- Subject lines: "This week's essentials," "Trending now," "Inspired by customers like you"
- Content: Lookbook, sale announcements, style tips, customer reviews
- CTA: "Explore," "Shop the look"

*Active:*
- 1x/week send
- Subject lines: "Get started with [category]," "Free shipping on orders $50+," "4/5 stars — customers love this"
- Content: Beginner's guides ("How to style dresses"), free shipping thresholds, bestsellers, educational content
- CTA: "Learn more," "See what's trending"

*At-Risk:*
- 1x/10 days (biweekly)
- Subject lines: "We've missed you," "[Name], here's 15% off just for you," "Come back and complete your look"
- Win-back series: Email 1 (Day 1) = "We miss you + 15% off," Email 2 (Day 7) = Bestseller items, Email 3 (Day 14) = Last chance, sunset if no engagement
- CTA: "Shop now," "Claim your discount"

*Dormant:*
- 1 final email (or skip entirely if brand prefers)
- Subject line: "Last chance: [Name], don't miss out"
- Content: Final discount offer + bestsellers
- CTA: "Shop" or unsubscribe

**Performance projections (post-segmentation, 30 days):**

- Blended open rate: 18% → 26% (+8 points, +44% improvement)
- Blended click rate: 1.8% → 2.8% (+1 point)
- Revenue per email: $0.32 → $0.45 (+40% AOV lift from Champions receiving more frequent, high-intent emails)
- Unsubscribe rate: 0.6% → 0.35% (suppress Dormant; At-Risk gets win-back, not fatigue)

**Implementation timeline:**
- Week 1-2: Build RFM in Klaviyo, validate segments, draft copy
- Week 3-4: Test with 10% of each segment, monitor lift
- Week 5+: Full rollout, track performance weekly

**Success KPIs (reviewed weekly):**
- Open rate per segment ✓
- Click rate per segment ✓
- Revenue per segment (attribution from Shopify)
- Segment growth: How many moving up to Loyal? Down to At-Risk?

## Edge Cases

**1. New brand or product (list <3 months old):**
Insufficient RFM history. Start with engagement tiers only (based on email opens in first 30 days). Add behavioral segments once you have purchase data (month 2-3). Use conservative approach: new subscribers default to Active, not Champions.

**2. B2B vs. B2C segmentation:**
B2B has longer sales cycles. RFM Frequency might be low (1 purchase per year), so weight Recency and engagement (opens, demo requests) more heavily. B2C has faster cycles; Monetary and Frequency matter more.

**3. Free product (no revenue data):**
Use engagement proxy for Monetary: webinar attendance = 4 points, content download = 3, page view = 1. Adjust scoring, but keep the logic.

**4. Cold list import (e.g., purchased leads):**
Imported contacts start as Dormant by definition (zero Recency/Frequency). Run a short 2-3 email welcome series first (separate from regular segmentation). Only move to At-Risk after 1 email open. This avoids tanking list performance.

**5. Multiple products or brands under one company:**
If you have Product A (SaaS) and Product B (Services), segment by product. Each has different RFM and engagement patterns. Customers may be Champion in Product A but Dormant in Product B — respect that distinction.

**6. Mobile-only audience (app):**
Recency/Frequency data might come from app activity, not email. Calculate: last app open, number of sessions per month, in-app purchases. Adjust Monetary to app revenue. Segment logic stays the same.

**7. Seasonal business (e.g., holiday retail):**
RFM scores can swing wildly post-season (Black Friday boosters are temporarily high). Recommend quarterly re-segmentation to capture seasonal shifts. Don't let one-time holiday spenders stay in Champions tier permanently.

**8. Highly engaged list with few Dormant:**
If your list skews Champion/Loyal (e.g., <10% Dormant), compress tier ranges. Example: 4.0-5.0 Champions, 3.0-3.9 Loyal, 2.0-2.9 Active, 1.0-1.9 At-Risk. Ensures balanced segments.

**9. Regulatory constraint (e.g., can't email without consent):**
Build a "Consent" tier as a pre-segment filter. Only email those with explicit opt-in. Apply RFM logic within the consented group, not across the whole database.

**10. Suppression lists (customers, competitors):**
Segment out before RFM. Don't send marketing emails to paying customers (send transactional instead). Don't segment competitors or inactive accounts with unsubscribe requests.

---

Next Steps: Share your list size, CRM/ESP platform, and current open rate. I'll build your custom segment map and automation rules. Or, if you want to implement now, I can create your segment definitions in Klaviyo, HubSpot, or your platform of choice. Ready to push this to docs?
