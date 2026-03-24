---
name: Set Up Analytics Tracking
description: Build a measurement strategy aligned to business goals, then implement GA4, Google Tag Manager, and event tracking with naming conventions, UTM strategy, and privacy compliance.
role: Marketing
action: Execute
connectors:
  - Google Drive
  - Slack
  - Notion
  - HubSpot
triggerKeywords:
  - analytics tracking
  - GA4 setup
  - Google Tag Manager
  - UTM tracking
  - event tracking
  - conversion tracking
  - measurement plan
  - tracking plan
  - what should I track
  - analytics implementation
  - data quality
---

# Set Up Analytics Tracking

## Purpose
This skill helps you establish a measurement system that answers the questions driving your business: Which channels deliver value? What's our true conversion rate? Where are users dropping off? By grounding tracking in business goals—surfaced from your team's strategy discussions, product requirements, and funnel definitions—you build analytics that actually inform decisions.

We guide you through defining what matters, designing a clean tracking architecture (GA4 + GTM), naming conventions that stick, UTM strategy, and data quality safeguards. Privacy compliance (GDPR, CCPA) is built in from the start.

## When to Use This Skill
1. **You're launching GA4** – Need to set up properties, data streams, and conversion events aligned to business goals (not just vanity metrics).
2. **Your tracking is fragmented** – Events named inconsistently ("user_signup" vs "signup_complete"), no clear UTM strategy, uncertain data quality.
3. **You're defining a measurement strategy** – Starting a new product line, campaign, or website rebuild; need to decide which user actions matter and why.
4. **You need a tracking plan** – Document event structure, properties, naming conventions, and ownership before implementation begins.
5. **You're debugging tracking issues** – Events aren't firing, UTMs are malformed, conversion attribution is wrong; need a framework to diagnose root causes.
6. **You must stay compliant** – GDPR/CCPA changes require audit of what you're collecting, how, and for how long; time to align tracking with privacy policy.
7. **You're integrating GTM** – Building a tag management system to centralize tracking, reduce code debt, and let non-engineers manage events.

## Instructions

1. **Align on business goals.** Review conversations from leadership, product, and planning meetings where KPIs and success metrics were debated. Extract 3–5 core objectives (e.g., "drive high-value signups," "improve onboarding completion," "increase feature adoption"). Document the "why" for each; this justifies every event you track.

2. **Define conversion events.** List key user actions tied to your goals: signup, demo request, payment, feature adoption, support ticket. For each, specify trigger condition (exactly when it fires), business value (why we care), and owner (who defines/maintains it). Cross-reference HubSpot funnel definitions or Notion product requirements.

3. **Design your GA4 property and data streams.** Create separate properties for dev/staging/production to avoid data pollution. Set up data streams for web, app (if applicable). Configure consent mode if GDPR applies. Test with a dummy event before going live.

4. **Build your GTM container.** Create tags for GA4 event tracking, UTM capture, and third-party tools (LinkedIn, Intercom). Use triggers to fire tags only when conditions match (form submit, page view type, user segment). Implement data layer best practices to pass event properties reliably.

5. **Establish naming conventions and properties.** Create a shared document (Google Drive or Notion) naming all events, categories, and custom properties. Use snake_case, be specific ("email_signup_form_submit" not "signup"), include a data dictionary with allowed values. Link to this doc in Slack #analytics so everyone references the same spec.

6. **Plan your UTM strategy.** Decide on source/medium/campaign/content naming for paid, organic, and internal campaigns. Document templates for each channel (e.g., LinkedIn = "utm_source=linkedin&utm_medium=social&utm_campaign=demo-ebook-q2"). Automate UTM generation in your email platform, ad tools, or spreadsheet to avoid typos.

7. **Deploy, validate, and iterate.** Use Google Analytics Debugger or GTM's Preview Mode to confirm events fire with correct properties. Set up automated alerts for data anomalies (daily users drop 50%, conversion rate spikes). Monitor Privacy violations or incomplete data, then refine your tracking. Schedule quarterly reviews to retire obsolete events and add new ones.

## Output Format

Provide a **Tracking Implementation Plan** with these sections:

- **Executive Summary** (3–5 sentences): Business goals, 2–3 key metrics, expected timeline.
- **Conversion Events Table** (event name | trigger | business value | owner).
- **GA4 Setup Checklist** (property created | data streams | consent mode | conversion events configured | alerts set).
- **GTM Configuration** (containers created | tags listed | triggers defined | variables set).
- **Event Naming & Data Dictionary** (with examples of well-formed events and their properties).
- **UTM Strategy** (naming format by channel, templates, ownership).
- **Data Quality Rules** (what's valid/invalid, sampling strategy, retention policy).
- **Privacy Compliance** (GDPR/CCPA alignment, data retention schedule, deletion procedures).
- **Success Metrics** (how you'll measure if tracking is working: daily event volume, sample of valid vs. invalid, conversion rate trend month-over-month).
- **Next Steps & Timeline** (30 days: GA4 live | 60 days: GTM live | 90 days: first insights).

## Example

**Company:** Claritylabs (B2B analytics SaaS, building marketing site + product)

**Business Goals (from planning call):**
- Attract mid-market leads (target: 50 SQLs/month at <$500 CAC)
- Improve demo-to-paid conversion (current: 15%, goal: 25%)
- Track feature adoption in-product (which modules drive retention?)

**Conversion Events Defined:**

| Event Name | Trigger | Business Value | Owner |
|---|---|---|---|
| website_form_submit | Contact form completed | Lead capture | Marketing |
| demo_request_click | "Book a Demo" button clicked | Qualified intent | Sales Dev |
| signup_complete | New account created (web) | Free user acquisition | Product |
| payment_initiated | Checkout flow started | Revenue funnel visibility | Finance |
| payment_complete | Invoice paid | Revenue | Finance |
| feature_first_use | User opens specific feature (e.g., "custom dashboards") | Feature adoption | Product |
| support_ticket_opened | Ticket submitted | Churn risk signal | Support |

**GA4 Setup Checklist:**
- ✓ GA4 property created: "Claritylabs Marketing" (measurement ID: G-XXXXX)
- ✓ Web data stream for claritylabs.com
- ✓ App data stream for iOS/Android (Firebase)
- ✓ Consent mode configured (Google Consent Mode v2 for EU)
- ✓ Conversion events: website_form_submit, demo_request_click, signup_complete, payment_complete, feature_first_use
- ✓ Alerts set: daily event count, conversion rate anomaly (>20% change), data freshness (>1hr lag)

**GTM Container Setup:**
- Container 1: "Claritylabs Marketing Website"
  - Tag: GA4 Page View (fires on every page, captures referrer, user properties)
  - Tag: GA4 Form Submit (fires on #contact-form submit, captures form_type, form_name)
  - Tag: GA4 Demo Request (fires on demo CTA click, captures button_text, page_section)
  - Tag: UTM Capture (custom JS, extracts source/medium/campaign, stores in dataLayer)
  - Tag: LinkedIn Insight (fires on page load for retargeting)

- Container 2: "Claritylabs Product App"
  - Tag: GA4 Event (Firebase SDK, auto-captures screen_view)
  - Tag: Feature Adoption (custom event, fires when user opens feature module, logs module_id, user_segment)
  - Tag: Payment Event (fires on checkout success, logs revenue, currency, product_id)

**Event Naming & Data Dictionary:**

```
website_form_submit
  - Properties: form_type (string: "contact", "newsletter", "demo"), form_name (string), form_position (string: "hero", "mid-page", "footer")
  - Example: {event: "website_form_submit", form_type: "demo", form_name: "homepage_hero_cta", form_position: "hero"}

feature_first_use
  - Properties: feature_id (string: "custom_dashboards", "alerts", "data_export"), user_segment (string: "free", "pro", "enterprise")
  - Example: {event: "feature_first_use", feature_id: "custom_dashboards", user_segment: "pro"}

payment_complete
  - Properties: revenue (number, in cents), currency (string: "USD"), product_id (string), transaction_id (string)
  - Example: {event: "payment_complete", revenue: 99900, currency: "USD", product_id: "pro_annual", transaction_id: "txn_12345"}
```

**UTM Strategy:**
- Paid Search: `utm_source=google&utm_medium=cpc&utm_campaign=seo_alternative_q1&utm_content=claritylabs_analytics`
- LinkedIn Ads: `utm_source=linkedin&utm_medium=social&utm_campaign=demo_webinar_march&utm_content=video_carousel`
- Email: `utm_source=email&utm_medium=newsletter&utm_campaign=weekly_digest_mar22&utm_content=feature_spotlight`
- Owned: `utm_source=direct&utm_medium=internal&utm_campaign=onboarding`

**Data Quality Rules:**
- Event names: alphanumeric + underscore, snake_case, ≤40 chars
- Required properties: event_timestamp (auto), user_id or user_pseudo_id (GA4 auto), event_name
- Revenue: positive number, non-null for payment events
- Invalid events (dropped): missing event_name, revenue < 0, timestamp in future
- Sampling: send 100% of conversion events, 10% of page_view events (GA4 default)
- Retention: raw event data 14 months, aggregated reports indefinite (GA4 default)

**Privacy Compliance:**
- GDPR: Consent mode v2 enabled; no user_id transmitted until explicit consent given
- CCPA: Linked to privacy policy section; users can request data deletion via support@claritylabs.com
- Data retention: align to 90-day GA4 window; no PII in events (emails, phone hashed if required)
- Review: quarterly audit of events for mission creep

**Success Metrics:**
- Daily event volume: 5,000+ (website) + 2,000+ (app) by end of month 1
- Event validity rate: >95% (no missing required properties)
- Conversion rate trend: baseline 15%, target 25% by month 3
- UTM coverage: 90%+ of traffic tagged with source/medium/campaign

**Next Steps & Timeline:**
- Week 1: GA4 property + data streams live, GTM container in test mode
- Week 2: GTM tags configured, tested in preview, promoted to production
- Week 3: Data validation; start weekly GTM reviews
- Week 4: Dashboards built in GA4; first insights shared with leadership
- Month 2: Refine events based on data; retire low-value events
- Month 3: Quarterly business review; measure impact on SQL volume and CAC

---

## Edge Cases

1. **Cross-domain tracking (subdomain or separate domain):** Use GA4's cross-domain measurement feature. In GTM, configure a custom parameter to identify "cross_domain_user" so conversions on different domains roll up to a single user journey.

2. **Mobile app + web tracking:** Use the same GA4 property for both (separate data streams). Align event names across platforms (e.g., both app and web fire "signup_complete" with same properties) so you can compare cohorts.

3. **Server-side tracking (backend events):** Use Measurement Protocol to send events from your server (e.g., "payment_complete" fired by billing system, not frontend). Validate that server events have matching event structure to client-side events.

4. **High-traffic sites (sampling limit):** GA4 enforces a 1M events/day limit for free tier. Monitor daily volume; if approaching, sample lower-priority events (page_view) or filter out internal traffic. Upgrade to GA4 360 if needed.

5. **Changing requirements mid-stream:** Don't delete old events; mark them deprecated in your data dictionary. Create a new version (e.g., "signup_complete_v2") and run both in parallel for 30 days to compare, then switch.

6. **Third-party integrations (Slack alerts, Intercom, CRM):** Use GTM Server-Side Tags or API connectors (e.g., Zapier) to push GA4 events to downstream tools. Test the pipeline end-to-end before going live.
