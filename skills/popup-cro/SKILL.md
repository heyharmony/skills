---
name: Popup CRO
description: Design and optimize popups and modals for higher conversions
purpose: Help teams turn casual visitors into leads and customers through strategic popup design and messaging
role: Marketing
action: Create
connectors:
  - HubSpot
  - Slack
  - Gmail
  - Google Drive
---

# Popup CRO: Design Popups That Convert

## Purpose
Popups are your last chance to capture visitor attention. This skill helps you design modals that feel helpful (not intrusive) and actually move the needle on conversions. By understanding trigger types, design principles, and compliance rules, you'll craft popups your audience wants to see.

## When to Use This Skill
- **Exit-intent strategy**: Your bounce rate is creeping up—you need to re-engage visitors about to leave
- **Lead magnet deployment**: Launching a new offer (whitepaper, discount, free trial) and need the right container
- **Popup audit**: Your modals aren't performing—designs feel dated or CTAs get ignored
- **Email list growth**: Building your first-party audience but struggling with signup friction
- **Mobile optimization**: Desktop popups convert, but mobile users are hitting the close button instantly
- **Compliance check**: You're not sure if your popup meets GDPR rules or Google's interstitial guidelines
- **Team feedback loops**: Stakeholders disagree on timing, copy, and design—you need a framework to decide

## Instructions

### Step 1: Choose Your Trigger Type
Decide *when* your popup appears—this is half the battle.
- **Time-based** (e.g., 5 seconds after page load): Best for announcements or site-wide alerts
- **Scroll-depth** (e.g., at 50% down the page): Captures engaged readers without interrupting intent
- **Exit-intent**: Fires when cursor moves toward close/back button—perfect for last-minute saves
- **Click-triggered**: User clicks a button labeled "See Offer" or "Learn More"—friction-free and intentional
- **Behavioral** (e.g., return visitor, cart abandoner): Use Segment/HubSpot data to target warm leads

Map trigger to goal: Lead magnet = scroll-depth or click. Exit-intent discount = exit-intent trigger. Announcement = time-based.

### Step 2: Select Popup Type and Primary Goal
Match your modal to what you're asking visitors to do.
- **Email capture**: Build your list (whitepaper, template, webinar signup)
- **Discount or freebie**: Drive immediate conversions or trial signups
- **Exit-intent rescue**: Last-chance offer to re-engage abandoners
- **Announcement or notification**: Broadcast webinar, product launch, or policy change
- **Slide-in or corner takeover**: Subtle alternative to full-screen modal (better for mobile)

### Step 3: Build Your Copy Framework
Use proven formulas that work across industries.
- **Headline**: Lead with the benefit, not the ask. "Save 5 hours weekly" beats "Subscribe to our newsletter"
- **Supporting text**: Answer the implied question: "Why now?" and "What's in it for me?" (Harmony data shows visitors read 15–20 words max)
- **CTA button**: Action-oriented and specific. "Get my free template" > "Submit" or "Sign up"
- **Secondary CTA**: Offer an exit option ("No thanks, I'm good") to reduce modal fatigue and improve trust

### Step 4: Design for Clarity and Accessibility
Visual hierarchy matters—especially on mobile where space is tight.
- **Size and positioning**: Full-screen modal on desktop, center-bottom or slide-in on mobile
- **Close button**: Always visible and labeled (× or "Close"). Harmony support data shows unclear close buttons frustrate 12% of visitors
- **Contrast**: Ensure button text and CTA stand out (4.5:1 minimum contrast ratio for WCAG A compliance)
- **Images**: One focused, high-intent image (product or benefit-driven) beats cluttered layouts. Keep file size under 200KB
- **Font size**: Minimum 16px on mobile to avoid unwanted zoom-in on input fields

### Step 5: Set Frequency Caps and Rules
Respect your audience—show the same popup once per session, max 2–3 times per week per visitor.
- Implement frequency caps in your tool (HubSpot, Leadpages, Unbounce all support this)
- Suppress popup for users who already converted (flag email subscribers, trial users, customers in your CRM)
- Test: Show only to new visitors first, then expand to returning traffic

### Step 6: Audit Against GDPR, CCPA, and Google Guidelines
Compliance isn't optional—it affects both trust and SEO ranking.
- **GDPR**: If EU traffic, don't auto-check consent boxes. Users must actively opt in to email
- **Google interstitial guidelines**: Full-screen modals that delay content access can hurt mobile rankings. Use click-triggered or time-delayed popups instead. Avoid autoplay video in popups
- **Clear exit**: Close button must be as easy as the CTA button (no dark patterns)
- **Privacy link**: Always link to your privacy policy if asking for personal data

### Step 7: Measure and Iterate
Track what works via HubSpot, Slack alerts, and your analytics platform.
- **Conversion rate**: Click-through rate on CTA button (target: 10–20% depending on trigger and audience)
- **Impression rate**: % of visitors who see the popup (helps diagnose trigger timing issues)
- **Suppression rate**: % who close without interacting (high rates = timing, copy, or design mismatch)
- **Email deliverability**: Check Gmail metrics post-capture to ensure list quality
- A/B test one variable at a time: Copy vs. copy, image vs. image, color vs. color (min. 1–2 weeks per test)

## Output Format
When designing a popup, provide:

1. **Popup spec card** (markdown table):
   - Trigger type and timing
   - Popup type (email capture, discount, etc.)
   - Audience segment (new visitors, cart abandoners, etc.)
   - Headline (under 10 words)
   - Subheadline (under 20 words)
   - Primary CTA (action + benefit, max 5 words)
   - Secondary CTA (e.g., "No thanks")
   - Image or design direction (brief description)
   - Frequency cap and suppression rules
   - Device focus (desktop-first, mobile-optimized, both)
   - Compliance checklist (GDPR, CCPA, Google guidelines—yes/no)

2. **Design notes** (2–5 bullet points):
   - Visual hierarchy and layout sketch (text is fine: "CTA button on right, image left")
   - Color palette direction (e.g., brand primary + white, high contrast secondary)
   - Accessibility requirements met (font size, contrast, close button prominence)

3. **Success metrics**:
   - Target conversion rate (click-through on CTA)
   - Success threshold (e.g., "Launch if ≥15% conversion rate in QA phase")
   - Measurement approach (which platform/UTM parameters)

## Example: Basecrate's Exit-Intent Popup

**Context**: Basecrate, a premium e-commerce subscription box, has a 35% bounce rate on product pages. Customers love the box when they try it, but first-time conversions stall. Goal: Re-engage users about to leave with a "Try first" incentive.

### Popup Spec Card

| Field | Value |
|-------|-------|
| **Trigger Type** | Exit-intent (when cursor moves to browser chrome) |
| **Popup Type** | Discount/risk-reversal offer |
| **Audience** | First-time visitors, no prior purchase |
| **Headline** | Try risk-free for $19 |
| **Subheadline** | Get our full box for less. Cancel anytime in 30 days. No commitment. |
| **Primary CTA** | Get first box |
| **Secondary CTA** | Maybe later |
| **Image** | Lifestyle photo: hands opening Basecrate box (warm, genuine) |
| **Frequency Cap** | Show once per session; skip if user already clicked "Get first box" |
| **Device Focus** | Mobile-optimized; desktop uses side-panel variant |
| **Compliance** | GDPR ✓ (single opt-in for marketing), CCPA ✓ (link to preferences), Google ✓ (not autoplay, not full-screen on mobile) |

### Design Notes
- **Layout**: Center-stack modal on mobile (image top, copy and buttons below); side-panel on desktop (50/50 image-left, copy-right)
- **Colors**: Warm cream background (#FAF8F3), Basecrate brand orange button (#E67E22), gray secondary button
- **Accessibility**: 18px headline, 16px body text, close button (×) top-right, 4.8:1 contrast on orange button

### Success Metrics
- **Target conversion rate**: 18% (visitors clicking "Get first box")
- **Success threshold**: Launch to full audience if ≥16% in 3-day QA phase
- **Measurement**: HubSpot contact property "exit_popup_clicked" + UTM `utm_source=popup&utm_medium=exit_intent`

### Implementation Checklist
- [ ] Suppress popup for users with `customer_status=active` in HubSpot
- [ ] Set frequency cap: 1 per session, 3 per week per user
- [ ] Test exit-intent trigger on desktop and mobile (different threshold for mobile: 30% page scroll instead)
- [ ] A/B test image (lifestyle photo vs. product shot) after 1 week
- [ ] Monitor bounce rate weekly in Slack (target: reduce from 35% to <30% within 4 weeks)
- [ ] Check email list quality: ensure Gmail inbox placement stays >95% (watch for deliverability dips)

---

## Edge Cases

- **Touch-friendly close buttons**: Mobile users can't use exit-intent reliably (no cursor hover). Switch to scroll-depth or time-based trigger on mobile, or use sticky footer instead of modal.
- **International audiences**: GDPR compliance is stricter than CCPA. If you have both EU and US visitors, default to GDPR rules (explicit opt-in) to be safe.
- **High-traffic sites**: If you get >10K daily visitors, frequency cap is essential—repeated popups tank conversion. Test lower frequency thresholds (1 per 2 weeks) with power users.
- **Mobile-first sites**: Full-screen modals on mobile interrupt user flow sharply. Prefer slide-ins, sticky footers, or corner takeovers; reserve modals for high-intent moments (e.g., click-triggered).
- **Slow networks**: Large popup images can delay page load. Optimize for <100KB, use WebP format, and lazy-load to avoid Core Web Vitals penalties.
- **Dark mode**: Test popup contrast in both light and dark modes. Brand colors that pop in light mode may wash out in dark mode.
