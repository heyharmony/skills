---
name: page-cro
title: Page CRO Analyzer
description: Optimize marketing pages for higher conversion rates by auditing value proposition, headlines, CTAs, visual hierarchy, trust signals, objection handling, and friction points
role: Marketing
action: Analyze
connectors:
  - hubspot
  - slack
  - gmail
  - google_drive
---

# Page CRO Analyzer

## Purpose
This skill audits marketing pages (landing pages, pricing pages, product pages, feature pages) to identify conversion barriers and improvement opportunities. It grounds analysis in Harmony conversation data—pulling exact language prospects use, objections they raise, and how they talk about your solution—to surface insights that drive higher conversion rates.

## When to Use
- **Landing page underperforming.** Your page gets traffic but visitors bounce without converting.
- **Redesign validation.** You've redesigned and want to confirm the new version will convert better.
- **Competitive pricing pressure.** Prospects mention competitor alternatives in calls; need to strengthen differentiation.
- **Form abandonment.** You see drop-off in form completion or checkout flow.
- **New product launch.** You're launching a feature or product line and need messaging that resonates.
- **Messaging refresh.** Messaging has stagnated; need fresh angles that reflect actual customer language.

## How Harmony Makes This Better

Most CRO audits rely on best practices and gut instinct. Harmony adds a critical layer: the actual words your prospects use when they describe their problems, evaluate your solution, and decide whether to buy. When you have customer calls, sales recordings, or support conversations in Harmony, this skill pulls verbatim language — the phrases that should be on your page but aren't. That's the difference between a generic "improve your workflow" headline and one that mirrors exactly how your best customers describe the transformation they experienced.

## Instructions

1. **Provide the page.** Share the URL, screenshot, or content of the page you want audited. If you have Slack messages or email threads discussing this page, include those too.

2. **Extract customer voice.** Search your Harmony data (calls, Slack discussions, email threads) for language prospects use when talking about your solution, problems they mention, and objections they raise. Look for: recurring pain descriptions, the exact words used when prospects say "yes," and the hesitations that precede a "no."

3. **Audit value proposition.** Does the page clearly articulate why someone should care, in their language? Is differentiation obvious? Compare the page's messaging to what prospects actually say matters — if there's a gap, that's your highest-impact fix.

4. **Evaluate headline effectiveness.** Does the headline grab attention, address a specific pain point or desire, and make the offer clear?

5. **Assess CTA placement and copy.** Is the call-to-action clear, action-oriented, and positioned to feel like the natural next step? Are there multiple CTAs with clear hierarchy?

6. **Review visual hierarchy.** Does layout guide the eye through the argument? Does design emphasis match conversion priority?

7. **Check trust and social proof.** Are objections addressed? Is social proof present and credible? Do testimonials, logos, and security badges build confidence?

8. **Identify friction points.** What might stop someone from converting? Form fields, pricing transparency, unclear next steps, missing information?

9. **Prioritize fixes.** Rank recommendations by impact: highest-impact changes address value prop, headline, CTA, visual hierarchy; medium-impact address trust; quick wins reduce friction.

10. **Suggest A/B test hypotheses.** For top 2-3 recommendations, frame a testable hypothesis with predicted lift and measurement approach. Example: "Rewriting the headline to use prospect language ('close deals faster' vs. 'sales acceleration platform') will increase CTA clicks by 15%." Tests should isolate one variable and run for at least 2 weeks on adequate traffic.

11. **Define next steps.** End with a clear action plan: what to implement immediately (copy changes, trust signal additions), what to test (headline variants, CTA copy), and what to revisit after more conversation data accumulates.

## Output Format

**Audit Results:**

- **Overall Assessment** — 1-2 sentences on page effectiveness and primary conversion barrier.

- **Impact-Ordered Findings** (each with confidence level: High/Medium/Low)
  - **Value Proposition** — Is it clear, differentiated, and customer-centric?
  - **Headline** — Does it match prospect pain/desire and create curiosity?
  - **CTA Placement & Copy** — Is the ask clear and prominently positioned?
  - **Visual Hierarchy** — Does design guide attention to conversion path?
  - **Trust Signals** — Do testimonials, social proof, and objection-handling build confidence?
  - **Objection Handling** — Are common concerns preemptively addressed?
  - **Friction Points** — What barriers might prevent conversion?

- **Customer Language Insights** — Pull 2-3 exact phrases from your calls or emails that reveal how prospects talk about this problem or solution. Use these in messaging.

- **Recommended Fixes** (in priority order)
  - [Fix 1: High Impact] — What to change and why.
  - [Fix 2: Medium Impact] — What to change and why.
  - [Quick Win] — Fast, low-effort improvement.

- **A/B Test Hypotheses** — 2-3 testable ideas (e.g., "Headline emphasizing speed vs. cost control will increase CTR by 15%").

- **Next Steps** — What to do next (test, implement, validate with calls).

## Example: Loopback Pricing Page Audit

**Company:** Loopback (customer feedback SaaS for B2B SaaS)

**Current Headline:** "Pricing That Scales With You"

**Assessment:** The pricing page is visually clean but fails to differentiate Loopback from competitors. The headline is generic and doesn't address the core tension prospects raise in calls—fear of switching costs and not knowing if feedback tools actually move the needle. The lack of customer success stories and ROI language leaves value on the table.

**Findings:**

- **Value Proposition (High Confidence)** — The page lists features (surveys, integrations, dashboards) but doesn't articulate *why* these matter. Calls reveal prospects care about two things: reducing time-to-insight (feedback loops are slow) and proving that feedback drives product decisions. The page is feature-focused, not outcome-focused.

- **Headline (High Confidence)** — "Pricing That Scales With You" doesn't address a pain point or desire. Prospects say things like "We're drowning in feedback but can't act on it" and "We need to show our roadmap is customer-driven." The headline should own that tension.

- **CTA Placement (Medium Confidence)** — Single CTA button ("Choose Plan") is buried below the fold. Prospects need clarity on which tier to pick *before* scrolling, not after.

- **Visual Hierarchy (Medium Confidence)** — Column-heavy pricing grid draws the eye but doesn't show *what customers actually get*—workflows, templates, integrations. Feature depth is unclear.

- **Trust Signals (High Confidence)** — Zero customer logos, testimonials, or ROI metrics. No mention of onboarding support, data security, or contract terms. Prospects worry about implementation friction; this page is silent.

- **Objection Handling (High Confidence)** — Calls show prospects ask: "How long to see ROI?" (not addressed), "Can we switch costs-free?" (not addressed), "Will your tool integrate with Slack?" (mentioned but not highlighted). Pricing page doesn't preempt these.

- **Friction Points (High Confidence)** — No FAQ, no "talk to sales" option for enterprise buyers, and no clear on-ramp for free tier. Prospects can't easily tell if this is worth a conversation.

**Customer Language Insights:**
- "We're tracking feedback in five places; nobody knows what we're actually building."
- "If I can't show execs that feedback is driving roadmap, they'll cut the budget."
- "I need to know upfront if this plays well with our Slack and Jira stack."

**Recommended Fixes:**

1. **[High Impact] Rewrite headline to own prospect tension.** Current: "Pricing That Scales With You." Proposed: "Close the Loop: Customer Feedback to Product Decision in Hours, Not Weeks." This maps directly to prospect language and outcome, not feature capacity. Expected lift: 18-25% increase in CTA clicks.

2. **[High Impact] Add ROI section above pricing.** Show math: "Teams using Loopback reduce feedback analysis time by 70%, freeing up 2 hours/week. That's ~100 hours/year of product focus." Cite or back with a single customer example. Expected lift: 12-18% conversion rate increase on pricing page.

3. **[High Impact] Reorder page: ROI → Trust → Pricing → FAQ.** Move customer logos (even if just 2-3 logos of well-known companies using you) and a 1-line testimonial ("Cut feedback chaos by 80%") above the pricing grid. Build confidence before asking for commitment.

4. **[Medium Impact] Expand CTA and add secondary CTAs.** Primary CTA ("Start 14-Day Free Trial") moves above fold, right-aligned with pricing table. Secondary CTA ("Talk to Sales for Enterprise") appears below table. Expected lift: 8-12% increase in qualified inquiries.

5. **[Medium Impact] Add FAQ addressing top 3 objections.** FAQ should answer: "How long to ROI?", "What's your switching cost?", "Does it integrate with Slack/Jira?" Keep each answer to 2-3 sentences. Expected lift: 5-8% reduction in post-pricing-page bounces.

**Quick Win:** Add 3 customer logos (real or anonymized) and one 1-line testimonial ("Reduced feedback analysis time by 70%") immediately below the headline. Takes 30 min to source/design; expected 3-5% bump in perceived credibility and CTA engagement.

**A/B Test Hypotheses:**

1. **Headline test:** "Close the Loop: Customer Feedback to Decision in Hours, Not Weeks" vs. current "Pricing That Scales With You." Hypothesis: Outcome-focused headline will increase CTA CTR by 18%.

2. **Social proof placement:** Adding customer logos above pricing table (vs. below) will increase perceived trust and conversion rate by 12%.

3. **CTA copy test:** "Start Free Trial" vs. "See If We're Right for You." Hypothesis: Softer ask reduces friction and increases trials by 8%.

**Next Steps:**

- Implement high-impact fixes (headline, ROI section, trust signals) within 1 week.
- A/B test headline and CTA copy immediately; run for 2 weeks minimum.
- Pull top 5 customer success stories from calls or product; add 2 anonymized logos to pricing page.
- Revisit objection FAQ after running calls this quarter; update with real prospect language.

---

## Edge Cases

- **No conversation data yet.** If you don't have Harmony data, I'll audit based on best practices and design principles. Recommend capturing prospect calls to unlock deeper insights.
- **Multiple pages to test.** Prioritize your highest-traffic page (usually homepage or primary landing page) first. Run improvements, then audit secondary pages.
- **B2B vs. B2C messaging.** Value proposition, headline, and social proof differ sharply. Ensure examples and recommendations fit your motion (enterprise, SMB, self-serve).
- **International or localized pages.** Language nuance matters. If you have Slack or email discussions in prospects' language, include those.
- **Pricing page vs. landing page.** Pricing pages carry different conversion psychology — prospects are further in the funnel and comparing options. Audit pricing pages with a heavier emphasis on objection handling, comparison framing, and trust signals. Landing pages focus more on hook, value prop, and CTA clarity.
- **Page with multiple CTAs competing.** If a page has "Start Free Trial," "Book a Demo," and "Watch Video" all fighting for attention, the audit should identify CTA hierarchy. Recommend one primary CTA with clear visual dominance and secondary CTAs that support rather than distract.
- **Very low traffic pages.** If the page gets fewer than 500 monthly visits, conversion rate data is statistically unreliable. Focus the audit on qualitative improvements (messaging, structure, trust) rather than quantitative A/B test hypotheses. Recommend traffic-building tactics (SEO, paid) alongside CRO fixes.
