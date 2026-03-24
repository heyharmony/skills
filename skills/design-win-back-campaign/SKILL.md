---
name: "Design Win-Back Campaign"
description: "Design a re-engagement campaign for lapsed subscribers or churned customers — escalation sequence from soft re-engage to incentive to sunset, with timing, subject lines, and list hygiene rules. Trigger on: win-back, re-engagement, lapsed subscribers, inactive list, churned customers, sunset policy, reactivation campaign, list decay."
dependencies: []
connectors:
  - name: "HubSpot"
    reason: "Pull engagement history, last activity dates, lifecycle stages to identify lapsed contacts and segment by churn reason"
  - name: "Salesforce"
    reason: "Pull churn data, customer health scores, and last purchase dates for B2B win-back targeting and win-back priority"
  - name: "Slack"
    reason: "Surface customer success and sales discussions about churn reasons, customer feedback, and what would re-engage them"
  - name: "Gmail"
    reason: "Reference past win-back attempts and their performance to avoid repeating failed messaging or timing"
---

## Purpose

Every business loses customers. The question is whether you try to win them back or let them disappear. A win-back campaign is a series of targeted emails sent to lapsed or churned subscribers designed to re-engage them or gracefully let them go. The goal is to recover some percentage of lost customers at cost lower than acquiring new ones, while simultaneously cleaning your list of permanently inactive subscribers. Done well, a win-back campaign recovers 10–20% of lapsed subscribers, generates revenue that was otherwise lost, and improves overall list health by removing addresses that never open. Done poorly, it annoys the uninterested, damages your sender reputation, and results in high unsubscribe rates. This skill teaches you to segment lapsed audiences, design an escalation sequence that respects declining interest, use subject lines that work on cold audiences, and build sunset rules that know when to stop trying.

## When to Use

- **List decay**: Your email list is > 30% inactive (no opens in 90 days). You need a campaign to recover some of them and sunset the rest.
- **Seasonal churn**: Winter holidays, tax season, or summer slowdown causes temporary churn. You want to re-engage seasonal users after their blackout period ends.
- **Product churn**: Users tried your product, didn't get value, churned. You want to win back high-value segments (long-time customers, high LTV) with a re-engagement offer or ask.
- **Pricing change churn**: You raised prices or changed billing models. Some customers left. You want to win back the ones who bounced for cost reasons before acquiring new customers at higher price.
- **Customer success failure**: Some customers churned due to poor onboarding, lack of engagement, or perceived lack of value. You want to win back the ones who were close to success.
- **Rebranding or major product update**: Your product changed significantly. Lapsed users don't know about it. A win-back campaign re-introduces the new value prop.
- **Re-entering a market**: You exited a market or paused operations. You want to win back former users before launching new marketing.
- **Marketplace supply-side churn**: Sellers or supply-side users drop off (stop posting, stop engaging). You want to reactivate high-revenue sellers before sunsettiing low-revenue ones.

## Instructions

### 1. Define "Lapsed" for Your Business

"Lapsed" doesn't mean the same thing for everyone. Define it based on your business model:

- **B2C (eCommerce/DTC)**: No purchase in 90–180 days. If someone bought 1x and never came back, they're lapsed. If someone's purchase cycle is quarterly, 90 days = lapsed.
- **SaaS**: No login in 30–60 days. Trial expired without conversion. Free trial signup but never activated. Paid customer went inactive.
- **Content/Publishing**: No open in 60–90 days. No click in 120 days. Haven't visited the site in 6 months.
- **Marketplace (supply-side)**: No post/activity in 60 days. Seller hasn't listed a new item in 2+ months.
- **Membership/Community**: No login in 30 days. Haven't attended event or engaged in 60+ days.

Example: Canopy Health (telehealth).
- Lapsed = booked an appointment 90+ days ago, no booking in the last 90 days. (Excludes people in quiet health periods; they're not churned, just not actively sick.)
- More aggressive: No login to patient portal in 60 days.

Once you define "lapsed," you can segment your list:

- **Recently lapsed** (30–60 days inactive): Most re-engageable. They had a habit, it broke. Easy to restart.
- **Mid-lapsed** (61–120 days inactive): Less engaged, but still warm. Some will re-engage with good offer.
- **Long-term inactive** (120+ days): Cold. Low re-engagement rate. Better to sunset and improve sender reputation.

### 2. Segment the Lapsed Audience by Churn Reason

Different churn reasons need different messages:

- **Never got value** ("signed up, never used it"): They need education. Send them "here's what you've missed" + a re-introduction to value. Then a free trial or discount. Then sunset.
- **Used it, stopped using it** ("active, then silent"): They knew the product, they stopped. They either found a competitor, no longer need it, or had a bad experience. Send them "we heard you stopped, what happened?" + offer to help. Then a re-engagement offer. Then sunset.
- **Too expensive or budget cut**: They liked the product but price was the barrier. Send them "we heard cost is a concern" + discounted offer. This segment has highest re-engagement rate.
- **Competitive displacement**: They switched to a competitor. This is hard to win back. Send them "we've made X improvements since you left" + comparison. Low success rate, but high-value wins justify the effort.
- **Product issues or bad support**: They had a problem, support didn't fix it. Send them "we fixed that issue, here's how" + invite to re-try. Medium success rate.
- **Company downsizing or restructuring**: They moved teams, left company, or lost budget. Send them "we help companies like yours do X" + re-engagement offer. This segment sometimes re-engages if they move to new role.

Identify churn reason from: customer interviews, support tickets, survey responses, or proxies (did they use it before they left? did they open marketing emails?).

Example: Canopy Health segmentation.
- "Never got value": Signed up for free trial, never booked appointment. Send education + reminder free trial expires + free appointment offer.
- "Stopped using it": Booked 3–5 appointments, then silence for 90+ days. Likely found in-person doctor or competitor. Send "what would bring you back?" + free appointment offer.
- "Too expensive": Mentioned cost during onboarding or post-purchase survey. Send "we have insurance coverage for most patients" + breakdown of typical patient cost + prompt to re-book.

### 3. Design the Escalation Sequence (4–5 Emails over 2–4 Weeks)

A win-back sequence escalates: soft re-engage → social proof + value reminder → incentive offer → final warning → sunset.

**Email 1: Soft Re-Engagement (Day 0–1)**
- Goal: Remind them you exist, ask why they disappeared, show you still care
- Tone: Friendly, not salesy. "We miss you" not "Come back or we'll forget you"
- Length: Short (150–200 words)
- Subject line approach: Personal + curiosity ("We miss you, Sarah") or "quick question" approach ("Help us understand why you stopped")
- CTA: Soft (reply with feedback, take a quick survey, update preferences)
- Content: "We noticed you haven't [used product / booked / bought] in a while. We want to understand if something broke, if you moved on, or if timing just isn't right. Help us understand."
- Success metric: Get them to engage (reply, click, or forward to decision-maker)

Example Canopy: "Sarah, we miss you — did you find care elsewhere, or did something not work?"

**Email 2: Social Proof + Value Reminder (Day 4–5)**
- Goal: Remind them what they're missing, show proof others are still finding value, address their likely objection
- Tone: Helpful, proof-driven
- Length: Medium (250–300 words)
- Subject line approach: Social proof ("50K patients are using Canopy") or value reminder ("See what you've missed since you left")
- CTA: Moderate ("Browse appointments" or "See what changed")
- Content: Share what's new (feature improvements, patient testimonials, success stories), social proof (usage stats, ratings), and specific ways the product has improved since they left
- Success metric: Click rate (shows interest in considering re-engagement)

Example Canopy: "Sarah, here's what's new: our docs now handle mental health referrals, average wait time is down to 4 hours (from 6), and patients rate us 4.9 stars. We also now cover all major insurance plans."

**Email 3: Incentive Offer (Day 9–11)**
- Goal: Remove the last objection with a concrete offer
- Tone: Urgent, time-limited
- Length: Medium (250–350 words)
- Subject line approach: Specific benefit or scarcity ("$20 free credit expires tonight" or "Come back and get your first visit free")
- CTA: Direct ("Claim your offer" or "Book now at 50% off")
- Content: Spell out exactly what they get (e.g., "$25 credit, good for any doctor, any time"), remove friction (e.g., "no new insurance forms"), show it's time-limited (e.g., "offer expires Friday"), and include strong social proof (e.g., "99% of returning patients say they're glad they came back")
- Success metric: Conversion rate (how many redeem the offer)

Example Canopy: "Sarah, we have $20 in credit waiting for you — good for your first visit. No new paperwork. Use it anytime this week."

**Email 4: Final Warning (Day 16–18)**
- Goal: Create last-chance urgency, signal this is the end of the road
- Tone: Respectful but direct. "We're about to remove you" feels dramatic but gets opens.
- Length: Medium (200–300 words)
- Subject line approach: Warning or finality ("This is our last message — unless you reply")
- CTA: Direct ("Book now" or "Reply if you want to stay in touch")
- Content: "We're cleaning up our list to make sure we're emailing people who want to hear from us. If you want to stay on our list and get occasional offers like the one above, just reply or click below. Otherwise, we'll remove you next week."
- Success metric: Reply rate or re-engagement rate (this email often gets highest engagement because finality creates urgency)

Example Canopy: "Sarah, we're removing inactive subscribers next week to keep our list clean. If you ever want to re-book, just reply here and we'll set it up."

**Email 5 (Optional): Graceful Sunset (Day 23–25, if Email 4 didn't convert)**
- Goal: Let them go with respect, leave the door open, but remove from active list
- Tone: Kind, respectful, final
- Length: Short (100–150 words)
- Subject line approach: Respectful finale ("We're saying goodbye, but we'll be here if you change your mind")
- CTA: Soft ("Come back anytime" link or preference center)
- Content: "We get it — timing isn't right, or you've found another solution. No hard feelings. If things change and you want to give Canopy another try, we're here. Your patient record is safe."
- Action: After this email, move subscriber to "sunset" list. Stop marketing emails. Keep them in database (they may re-engage later), but stop active outreach.

### 4. Write Subject Lines Optimized for Cold Audiences

Win-back audiences are cold (they've ignored you for months). Subject lines have to overcome low trust and low interest. Use these frameworks:

- **Personal + curiosity**: "Sarah, quick question about Canopy" (personal name + intrigue)
- **Social proof + missing out**: "50K patients are back in touch. Have you thought about us?" (subtle FOMO)
- **Specific value or improvement**: "Your doctor wait time just dropped to 4 hours (we promise)" (concrete improvement)
- **Time-limited offer**: "Your $25 credit expires Friday" (scarcity + specificity)
- **Honest statement**: "We're removing inactive subscribers — is that you?" (honesty often beats manipulation on cold lists)
- **Direct question**: "Do you still need a telehealth doctor?" (simple, asks if they need solution)
- **Reciprocal ask**: "Help us understand why you left" (asks for their input, not their money)

Avoid:
- Generic: "We want you back," "Special offer inside," "Limited time"
- Manipulative: "Final notice," "Account under review," "Urgent: action required"
- Assumptions: "You've been missed," "Come home," "Let's try again"

### 5. Set Timing Between Emails (Space Out More Than Regular Campaigns)

Regular campaign = 1 email every 3–7 days. Win-back = 1 email every 5–7 days, with longer gaps between last touchpoints.

**Recommended spacing:**
- Email 1: Day 1
- Email 2: Day 5–6 (4–5 days later)
- Email 3: Day 10–12 (4–7 days later, with offer)
- Email 4: Day 17–19 (5–7 days later, final warning)
- Email 5 (if needed): Day 24–26 (5–7 days later, graceful sunset)

Total campaign: 3.5–4 weeks from first email to sunset.

Rationale: Win-back audiences are cold and resistant. Spacing emails out gives them time to decide between touchpoints, reduces perception of spam, and lowers unsubscribe rate. If you send them 5 emails in 2 weeks, they'll unsubscribe en masse.

### 6. Define Success Criteria (What Counts as "Re-Engaged"?)

You need a clear definition of what counts as success. Options:

- **Made a purchase** (eCommerce). Booked an appointment or logged in (SaaS). Opened an email or visited the site (content/publishing).
- **Clicked on Email 2 or Email 3**: Shows interest even if they haven't fully converted.
- **Replied to Email 1 or Email 4**: Shows they're willing to engage.
- **Completed re-engagement offer**: Redeemed discount, used trial credits, etc.

Example: Canopy Health considers someone "re-engaged" if they book an appointment during the win-back campaign or within 14 days of the campaign ending.

Once you define success, set a target re-engagement rate:
- **Best-case scenario** (high-value segment): 20–30% re-engagement
- **Typical scenario** (mid-tier segment): 10–15% re-engagement
- **Worst-case scenario** (cold segment): 3–7% re-engagement

If your actual rate is half your target, the offer or messaging needs adjustment. If it's 2x your target, you've found a winning formula—test it on less aggressive segments.

### 7. Build Sunset Rules (When to Stop and Remove)

This is critical for list health. Decide in advance when to stop trying:

**Suppress after**:
- Email 4 with no engagement (no open, no click, no reply): Remove to "unengaged" list. Stop marketing emails.
- Email 3 with no offer redemption: Move to "sunset pending" list. If they don't re-engage in next 60 days, remove.
- 2+ unsubscribes per win-back campaign: Your offer or messaging is wrong. Pause and rebuild.

**Keep in active marketing if**:
- They opened or clicked any email in the win-back series: Re-add to regular nurture list (but different segment, less frequent sending).
- They interacted (replied, forwarded): Keep trying. Personal engagement is rare on cold audiences and signals real interest.

**List health metrics to monitor**:
- Unsubscribe rate per campaign: If > 0.5%, tone is too sales-y. If > 1%, you're emailing to the wrong segment or offering wrong thing.
- Bounce rate: If > 3%, address quality is degrading. Suppress hard bounces immediately.
- Complaint rate (spam reports): If > 0.1%, subscribers think you're spam. Pause and audit messaging.

### 8. Deliver the Campaign Playbook

Document it in a format your team can implement:

```
WIN-BACK CAMPAIGN PLAYBOOK: [Product Name]

Target segment: [Definition of "lapsed"]
Goal: [Recover X% of lapsed customers]
Target re-engagement rate: [X%]

SEGMENT ANALYSIS
Total lapsed: [number]
High-value lapsed: [number, definition]
Low-value lapsed: [number, definition]

ESCALATION SEQUENCE
Email 1: [Subject line] (Day 1)
Email 2: [Subject line] (Day 5)
Email 3: [Subject line with offer] (Day 10)
Email 4: [Subject line] (Day 17)
Email 5 (optional): [Subject line] (Day 24)

[Full email copies for each]

CONDITIONAL LOGIC
If [behavior], then [action]

SUNSET RULES
After Email 4 with no engagement: Remove to "unengaged" list
After Email 3 with no conversion: Suppress marketing emails in 60 days if no re-engagement

METRICS TO TRACK
Email 1: [X% open rate target]
Email 3: [X% offer redemption target]
Campaign: [X% re-engagement rate target]

OPTIMIZATION PLAN
```

## Output Format

```
=== WIN-BACK CAMPAIGN PLAYBOOK ===

BUSINESS AND SEGMENT
Company / Product: [Name]
Definition of "lapsed": [What metric triggers re-engagement campaign?]
Target segment: [Recently lapsed, long-term inactive, churned customers?]
Segment size: [Total lapsed contacts]
Goal: [Recover X%, improve list health, clean list]

SEGMENTATION BREAKDOWN
Recently lapsed (30–60 days): [Number, re-engagement goal %]
Mid-lapsed (60–120 days): [Number, re-engagement goal %]
Long-term inactive (120+ days): [Number, re-engagement goal %]

CHURN REASON ANALYSIS
[If available: primary reason contacts lapsed, what would re-engage them]

ESCALATION SEQUENCE
Email 1: [Subject line]
  Timing: [Day X]
  Goal: [Soft re-engagement, ask why they left]
  CTA: [Reply with feedback / take survey / update preferences]

Email 2: [Subject line]
  Timing: [Day X]
  Goal: [Social proof, value reminder, address objection]
  CTA: [Browse products / see what changed / visit site]

Email 3: [Subject line]
  Timing: [Day X]
  Goal: [Incentive offer, remove last barrier]
  CTA: [Claim offer / book appointment / shop collection]
  Offer: [Specific, time-limited, easy to redeem]

Email 4: [Subject line]
  Timing: [Day X]
  Goal: [Final warning, create urgency, signal end of campaign]
  CTA: [Book / reply / claim final offer]

Email 5 (optional): [Subject line]
  Timing: [Day X]
  Goal: [Graceful sunset, respect their choice, leave door open]
  CTA: [Come back anytime / preference center / unsubscribe]

FULL EMAIL COPY
[For each email, include:
- Subject line
- Full body copy (email 1-2 = 150-250 words, email 3-4 = 250-350 words, email 5 = 150 words)
- CTA button text
- Why this email works]

SUCCESS CRITERIA
Definition of "re-engaged": [Booked, purchased, opened Email 2, etc.]
Target re-engagement rate: [X%]

SUPPRESSION AND SUNSET RULES
After Email 4, no engagement: [Move to unengaged list, suppress marketing emails]
After Email 3, no offer redemption: [Mark suppression pending; remove in 60 days if no activity]
Unsubscribe rate threshold: [If > 0.5%, pause campaign and audit]

METRICS AND TARGETS
Email 1: [X% open rate], [Y% reply rate]
Email 2: [X% open rate], [Y% click rate]
Email 3: [X% open rate], [Y% offer redemption rate]
Email 4: [X% open rate], [Y% click/reply rate]
Campaign: [X% re-engagement rate], [Y% unsubscribe rate]

OPTIMIZATION PLAN
Month 1: [What to test]
Month 2: [What to test]
Month 3: [What to test]
```

## Example

**Company: Ridgeline (outdoor gear DTC eCommerce)**

```
=== WIN-BACK CAMPAIGN PLAYBOOK ===

BUSINESS AND SEGMENT
Company: Ridgeline (outdoor gear, $89–$350 per item, 120K total email list)
Definition of "lapsed": No purchase in 120 days (normal purchase cycle for outdoor gear is 60–90 days; 120 days = clear churn)
Target segment: Customers who purchased 1–3 items in past 18 months, then went silent for 120+ days (not first-time buyers, not brand new, but had initial engagement)
Segment size: 34,500 lapsed customers
Goal: Recover 12–15% of lapsed segment (4,000–5,000 customers), generate $180K–$240K in recovered revenue, remove 60% from active list (permanent sunsets)

SEGMENTATION BREAKDOWN
Recently lapsed (120–150 days): 12,000 customers
  - Highest re-engagement potential (fresh churn, memory of brand still warm)
  - Target re-engagement: 15–20%

Mid-lapsed (150–210 days): 13,500 customers
  - Medium re-engagement potential
  - Target re-engagement: 10–15%

Long-term inactive (210+ days): 9,000 customers
  - Low re-engagement potential (likely moved on to competitor or life change)
  - Target re-engagement: 5–8%

CHURN REASON ANALYSIS
Primary reasons identified from exit surveys and purchase history:
1. "Seasonal churn" (35%): Customers bought in spring/summer for hiking/camping, went dormant in fall/winter. Message: "Gear for winter sports (snowshoeing, winter climbing)"
2. "Competitive displacement" (25%): Customers mentioned REI, Patagonia, or other brands. Message: "We've added 150+ new items since you left, including brands we used to not carry"
3. "Price sensitivity" (20%): Customers abandoned carts at checkout, mentioned "too expensive." Message: "Our outlet collection is 30–50% off — your favorite items, better prices"
4. "Perception of limited selection" (15%): Customers who browsed 3–5 items, bounced. Message: "We expanded our catalog from 800 SKUs to 2,200 SKUs. Browse new gear."
5. "Life change / trip completion" (5%): Purchased gear for specific trip (Everest, Appalachian Trail, etc.), purpose-driven churn. Message: "Plan your next adventure with us."

ESCALATION SEQUENCE

Email 1: We miss you (and want to understand why)
  Timing: Day 1
  Goal: Soft re-engagement, ask why they disappeared, show you value their input
  CTA: "Tell us what's next for you"

Email 2: Here's what's new (you might love this)
  Timing: Day 5
  Goal: Social proof, show expansion (new products, new brands), address "limited selection" reason
  CTA: "Browse new collection"

Email 3: Your favorite brands are now 40% off
  Timing: Day 10
  Goal: Incentive offer, address price sensitivity, create urgency
  CTA: "Shop outlet now"
  Offer: Exclusive 40% off outlet collection + free shipping on orders $100+, valid through Friday

Email 4: Last chance to shop our outlet sale
  Timing: Day 17
  Goal: Final warning, create urgency, move fence-sitters to action
  CTA: "Shop before it ends"

Email 5 (optional): See you next adventure
  Timing: Day 24
  Goal: Graceful sunset, respect their choice, leave door open
  CTA: "We're here when you're ready"

FULL EMAIL COPY

--- EMAIL 1 ---
Subject: What's next, Sarah?

Hi Sarah,

We noticed you haven't shopped with us in a while. Your last purchase was that Merrell hiking boot—a solid choice, by the way.

We're curious: did those boots take you places? Did you find something else you're using now? Or did life just get busy and shopping fell off your radar?

We love hearing what's next for our customers. No pressure—just want to understand.

Hit reply and tell us. What's going on?

Sarah, Ridgeline

P.S. If you ever want to come back, we've added a lot since you left. And if there's something specific you're looking for, I can help you find it.

---

--- EMAIL 2 ---
Subject: 2,200 items (it's not just us saying that)

Hi Sarah,

Since you last shopped, we tripled our selection.

We know you spent time on our hiking boots section. Back then, we had 35 options. Now we have 180. We've also added:
- 600 camping and backpacking items (was 150)
- Women's climbing gear from La Sportiva, Black Diamond, Scarpa (we didn't used to carry climbing at all)
- Budget-friendly outdoor brands (Decathlon, EMS, Moosejaw) alongside premium (Patagonia, Arc'teryx)

In short: if we didn't have what you wanted before, we probably do now.

Browse what's new, and see if anything catches your eye.

[BUTTON: See New Gear]

---

--- EMAIL 3 ---
Subject: Your favorite brands just hit 40% off (ends Friday)

Hi Sarah,

We're running our outlet sale right now.

That Merrell boot you loved? 45% off. Arc'teryx jackets from $89. Patagonia backpacks from $95. Same gear you'd find in our regular store, just last season's colors or previous model year.

40% off outlet items. Free shipping on $100+. Sale ends Friday.

[BUTTON: Shop 40% Off Outlet]

Use code COMEBACK at checkout if it doesn't auto-apply.

---

--- EMAIL 4 ---
Subject: Sarah, this sale ends tomorrow

Hi Sarah,

40% off our outlet collection expires tomorrow at midnight.

If you've been thinking about new gear, now's the time. Best prices we offer all year.

[BUTTON: Shop Sale (Ends Tomorrow)]

Questions? Reply here. I can help you find something specific or answer anything about fit, sizing, brand comparisons, etc.

—Sarah, Ridgeline

---

--- EMAIL 5 ---
Subject: See you on the trail

Hi Sarah,

We're removing our sale list tomorrow to clean things up.

If you still want to hear from us—or if you have questions later—just hit reply. We're here.

And whenever you're ready for your next adventure, Ridgeline is here.

Happy trails,
The Ridgeline team

[LINK: Manage Your Preferences]

---

SUCCESS CRITERIA
Definition of "re-engaged": Made a purchase during the campaign or within 7 days of the campaign ending
Target re-engagement rate: 12% overall (15% for recently lapsed, 10% for mid-lapsed, 5% for long-term inactive)
Revenue goal: $180K–$240K (average order value $50, 3,600–4,800 orders)

SUPPRESSION AND SUNSET RULES

After Email 4, no engagement (no open, no click):
- Move to "sunset" segment
- Stop sending marketing emails
- Remove from regular promotional campaigns
- Keep in database (may re-engage later if they naturally return)

After Email 3, no offer redemption:
- Mark "suppression pending"
- If no activity in next 60 days, move to "sunset" segment

Unsubscribe rate thresholds:
- If > 0.5% on Email 1 or 2, tone is off; audit messaging
- If > 0.8%, pause campaign and test new subject line or offer on small test segment
- If > 1.2%, campaign has serious problem; halt and rebuild

METRICS AND TARGETS
Email 1: 20% open rate, 3% reply rate
Email 2: 15% open rate, 4% click rate
Email 3: 12% open rate, 6% offer redemption rate (higher than typical email click rate because this is a concrete action—add to cart, enter code)
Email 4: 10% open rate, 5% click rate
Campaign overall: 12% re-engagement rate (4,000+ purchases), <0.5% unsubscribe rate, $180K+ recovered revenue

OPTIMIZATION PLAN

Month 1:
- Launch campaign to recently lapsed segment (12K customers) to test message and offer before rolling to mid-lapsed and long-term
- Collect baseline metrics: actual open rate, click rate, offer redemption rate
- Measure actual vs. target; identify weak email (if Email 2 click rate is 2%, social proof isn't resonating)

Month 2:
- A/B test Email 2 subject line and content: does "expanded selection" resonate better than "new brands"?
- Test Email 3 offer: does "40% off outlet" outperform "free shipping + 20% off regular items"?
- Based on Month 1 results, adjust targeting: if "seasonal churn" segment has higher engagement, send them "winter sports" email variation before the generic Email 2

Month 3:
- Roll to mid-lapsed segment with optimized emails
- Test "re-engagement" offer in Email 3: does "$30 off $100+" outperform "40% off outlet"?
- Monitor unsubscribe rate closely; if mid-lapsed has higher unsubscribe rate, consider shorter campaign (4 emails instead of 5) or less aggressive offers

Month 4:
- Roll to long-term inactive segment; use most conservative version (longer spacing between emails, softer offers)
- Expected results: lower re-engagement rate (5–8%), but still worth it if cost per recovery is low (email is cheap)
- Document learnings: which churn reasons responded best? Which offers converted? Use for future win-back campaigns
```

## Edge Cases

- **Product category and purchase cycle misalignment**: Outdoor gear has 60–90 day purchase cycles (seasonal, trip-driven). Beauty/skincare is 30–45 days (consumption-based). Define "lapsed" based on your category's natural purchase cycle, not industry averages. Too short = false positives (you're chasing people who just bought). Too long = lost customers.

- **High-value vs. low-value segment dynamics**: Your best customers (high LTV, many purchases) and worst (one-time buyers) may need different win-back strategies. Your best customers are worth more effort (longer campaign, bigger incentive). Your worst are worth less. Segment and budget accordingly.

- **Seasonal re-engagement windows**: If your business is seasonal, win-back timing matters. Running a summer-focused win-back in November wastes effort. Align win-back campaigns with demand seasons.

- **Conflict with churn prevention program**: If you're already running a churn-risk campaign to prevent churn, don't overlap it with win-back campaign to the same segment. Pick one approach.

- **Offer fatigue and brand damage**: Offering deep discounts on every win-back email trains customers to expect discounts, damaging margins and brand perception. Escalate offers carefully: Email 2 is free content/social proof, Email 3 is moderate discount, Email 4 is final/strongest offer. Don't devalue your product.

- **Unsubscribe spike on final emails**: Email 4 ("last chance") often has high unsubscribe rates. This is normal and intentional—you're filtering for people who want to stay. If unsubscribe rate is 2%+ on Email 4, soften the language slightly, but expect it.

- **Measuring campaign success accurately**: If someone received Email 2, didn't click, but then 10 days later independently visited your site and purchased, did your email drive the purchase? Probably contributed to it (you reminded them you exist). Use UTM parameters on every CTA link to track direct credit, but acknowledge that earlier emails in the sequence contributed to consideration.

- **Long-term list health vs. short-term recovery revenue**: Sunsettiing 60% of your lapsed list (removing them from active campaigns) improves sender reputation and engagement rates on your remaining list, which increases deliverability for all future emails. This has long-term value beyond the immediate win-back revenue. Balance aggressive recovery goals with list health goals.
