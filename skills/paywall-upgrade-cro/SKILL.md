# Paywall & Upgrade Screen Optimization

**Role:** Marketing
**Action:** Create

---

## Purpose
Design and optimize in-app paywalls, upgrade screens, and feature gates that convert free users to paid plans. Harmony surfaces when users hit friction—trial expiration, feature limits, or usage caps—and this skill helps you create compelling moments that drive conversion rather than churn.

---

## When to Use This Skill

1. **Feature gates are blocking adoption** — You want to convert users encountering a locked capability (timeline view, bulk actions, integrations) into subscribers.

2. **Trial expiration is approaching** — Design a final upgrade window with personalized value messaging based on their trial activity.

3. **Usage limits are hitting hard** — Free users consuming all their monthly API calls or seats need a friction moment that feels fair, not punitive.

4. **Time-based upsells** — You want to insert an upgrade prompt at natural moments (end of first week, after creating 10 projects, pre-meeting) without disrupting workflow.

5. **Conversion rate is flat** — Your paywalls exist but aren't moving the needle. A/B test messaging, CTA placement, or social proof elements.

6. **Support and sales are overwhelmed** — Paywalls should deflect requests by making the value of paid features self-evident in-app.

7. **You need pricing psychology applied** — Feature comparison tables, anchoring, scarcity, and social proof can be optimized for your specific audience.

---

## Instructions

**Step 1: Identify your trigger point**
Map where free users naturally encounter limits: a specific feature gate, a usage threshold, trial day 14, or calendar-based (weekly, monthly). Export this from product analytics, Stripe, or Intercom user segments. Note which users convert after seeing the paywall (HubSpot lifecycle stage shifts).

**Step 2: Extract value signals from conversations**
Pull Harmony transcripts from customer calls where users discuss what they love about your paid tier. Look for mentions of features they'd pay for ("I wish we had timeline view"), objections they raised ("it's expensive"), or alternative tools they considered. Slack threads and Intercom conversations show real friction language.

**Step 3: Design paywall structure**
Map five core sections: headline (benefit-driven, not feature-list), a 15–30 second value demo (animation, screenshot, or side-by-side), feature comparison (paid vs free, 4–6 key differences), pricing display (anchoring, billing frequency toggle, optional discount), and CTA (primary action like "Upgrade to Pro", secondary escape like "Maybe later").

**Step 4: Choose paywall type**
Feature-lock paywalls show immediately when accessing a locked capability. Usage-limit paywalls trigger at 80% or 100% of free allotment. Trial-expiration paywalls appear 2–3 days before free trial ends. Time-based upsells slot in after natural milestones (day 3, week 2, after first saved project).

**Step 5: Write conversion-focused copy**
Headline should echo language from customer conversations—avoid generic "Unlock Premium." Use specific outcomes: "See your full project timeline." CTAs should be benefit-driven ("Start timeline view free" or "Upgrade now, no commitment") rather than neutral ("Upgrade").

**Step 6: Add credibility and social proof**
Include customer count ("Join 2,000+ teams"), testimonial snippet from a similar company, or a trust badge (SOC 2, etc.). Intercom and HubSpot data reveal which proof points resonate with different user segments (SMBs vs enterprises).

**Step 7: Plan A/B testing and iteration**
Set conversion goal (% of users who click upgrade CTA, % who complete payment). Plan test variants: different headlines, CTA colors, feature comparison depth, or timing. Measure with Stripe (MRR impact), Intercom (click-through), and HubSpot (conversion rate by segment).

---

## Output Format

Deliver a paywall design specification as a structured brief:

```
PAYWALL SPECIFICATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TRIGGER
  Type: [Feature Gate | Usage Limit | Trial Expiration | Time-Based]
  Moment: [e.g., "User clicks Timeline button"; "80% of API calls used"]
  Target Segment: [Free tier, specific country, signup age, etc.]

HEADLINE & SUBHEADING
  Headline: [Benefit-focused, <12 words, from customer language]
  Subheading: [Single sentence, emotional or outcome-oriented]

VALUE DEMO
  Format: [Static screenshot | Side-by-side comparison | Short animation]
  Focus: [Primary benefit user gains by upgrading]

FEATURE COMPARISON
  Free Tier | Pro Tier
  ──────────────────
  ✓ Feature A | ✓ Feature A + enhancement
  ✗ Feature B | ✓ Feature B
  [4–6 rows, avoid overwhelming detail]

PRICING DISPLAY
  Primary Price: [$X/mo or $X/year]
  Billing Toggle: [Monthly | Annual | Show savings]
  Social Proof: [e.g., "Save 30% on annual", "2,000+ teams upgraded"]

CTA DESIGN
  Primary CTA: [Button text, e.g., "Start free week", "Upgrade to Pro"]
  Secondary CTA: [e.g., "Maybe later", "Show pricing", "Contact sales"]
  Risk Reversal: [e.g., "30-day money back", "Downgrade anytime"]

EDGE CASE HANDLING
  - Existing subscriber sees this? → Dismiss or show upsell to higher tier
  - User on trial? → Show days remaining, emphasize no re-entry fee
  - Mobile user? → Simplified comparison, full-width CTA, scrollable table
  - Non-profit / educator? → Link to discount program

MEASUREMENT
  Success Metric: [e.g., "20% CTR on primary CTA", "8% of free users convert to Pro/month"]
  A/B Test Plan: [Primary variant, one alternative, duration, sample size]

TIMING & FREQUENCY
  First appearance: [Day/event when user first sees this paywall]
  Max frequency: [e.g., "Show once per session, max 2 times/week"]
  Re-show trigger: [e.g., "After 7 days if declined", "Never if clicked Escape Hatch"]
```

---

## Example

**Deskflow — Project Management SaaS**

```
PAYWALL SPECIFICATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TRIGGER
  Type: Feature Gate
  Moment: User clicks "Timeline View" button on free plan
  Target Segment: Free tier, active (3+ projects created)

HEADLINE & SUBHEADING
  Headline: "See your whole project at a glance"
  Subheading: "Timeline view helps teams ship on schedule. Upgrade to Pro."

VALUE DEMO
  Format: 4-second animation showing Gantt chart with task dependencies, milestone markers
  Focus: Visual clarity of project roadmap; spotting bottlenecks in real-time

FEATURE COMPARISON
  Free Tier | Pro Tier
  ──────────────────
  Board + List views | + Timeline + Calendar views
  Up to 3 projects | Unlimited projects
  Manual task assignments | Automated workflows
  Email notifications only | Slack + Teams integrations
  1 workspace | Team workspaces (unlimited members)
  Basic reporting | Advanced reporting + custom dashboards

PRICING DISPLAY
  Primary Price: $15/user/month (billed annually: $150/year)
  Billing Toggle: Monthly | Annual (Save 20%)
  Social Proof: "2,100+ teams use timeline view to ship 40% faster"

CTA DESIGN
  Primary CTA: "Try Timeline for 7 days free"
  Secondary CTA: "Show me pricing" | "Ask sales team"
  Risk Reversal: "No credit card required. Downgrade anytime."

EDGE CASE HANDLING
  - Pro subscriber: Hide paywall, enable timeline immediately
  - Trial user (5 days left): Show "Timeline unlocked for your trial" + "Upgrade to keep it"
  - Mobile app: Show simplified 2-column feature table, full-width CTA
  - Education domain: Link to "Academic discount program" in secondary CTA

MEASUREMENT
  Success Metric: 22% CTR on primary CTA; 6% of free users upgrade to Pro within 30 days
  A/B Test Plan:
    Control: Current design (headline + animation + comparison)
    Variant A: Headline only ("Organize with Timeline") + single testimonial ("Saved us 8hrs/week")
    Duration: 14 days, 50/50 split
    Goal: Increase CTR to 28%

TIMING & FREQUENCY
  First appearance: When user first clicks Timeline button
  Max frequency: Once per day, max 3 times before converting or declining
  Re-show trigger: If "Maybe later" clicked, show again in 48 hours with variant copy
```

---

## Edge Cases

1. **Subscriber clicks a locked feature** — Don't show paywall. Instead, toast: "You have access to this." Prevent friction for paying customers.

2. **Free user with large seat count (3+ people on workspace)** — Highlight team collaboration features ("Collaborate with your whole team on Pro"). Adjust price anchor upward or offer bulk discount.

3. **Trial ending in <24 hours** — Escalate urgency. Paywall copy: "Your trial ends tomorrow. Upgrade to keep all your work." Offer 7-day extension if they provide feedback.

4. **User declined paywall 3+ times** — Stop showing modal. Instead, insert sticky banner at bottom of page with softer messaging ("Add timeline view") or offer to contact sales.

5. **Mobile web vs. desktop** — Mobile should simplify feature comparison (2-column table max), increase CTA size, reduce modal height so secondary CTA remains visible without scroll.

6. **Non-English locales** — Test pricing display and urgency language. Some regions respond to "Limited offer" differently; others prefer directness. Localize copy, not just translate.

---

## Tags
`paywall` `upgrade` `feature-gate` `trial-expiration` `freemium-conversion` `cro` `pricing` `modal` `upsell`
