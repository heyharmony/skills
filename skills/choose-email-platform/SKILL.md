---
name: "Choose Email Platform"
description: "Evaluate and recommend an email marketing platform — compare Klaviyo, Mailchimp, Kit, beehiiv, ActiveCampaign, and others on features, pricing, scalability, and fit for your business. Trigger on: email platform, which ESP, email tool comparison, Klaviyo vs Mailchimp, email marketing tool, switch email platform, ESP evaluation."
dependencies: []
connectors:
  - name: "Slack"
    reason: "Surface team discussions about marketing stack requirements, pain points with current tools"
  - name: "Notion"
    reason: "Reference marketing tech stack documentation, vendor evaluation criteria, and budget constraints"
  - name: "Google Drive"
    reason: "Store platform comparison reports and vendor evaluation matrices"
  - name: "HubSpot"
    reason: "Assess current HubSpot email usage to determine if migration is needed or if HubSpot Email suffices"
---

## Purpose

Choosing the right email marketing platform (ESP) determines whether your team scales smoothly or drowns in automation debt. The wrong choice early—say, Mailchimp Free when you need segmentation—costs 6 months of workaround chaos and a painful migration later. This skill evaluates 6–8 leading platforms (Klaviyo, Mailchimp, Kit, beehiiv, Sendlane, ActiveCampaign, HubSpot Email, and others) against your specific business model, list size, budget, and growth trajectory. You get a weighted comparison matrix, a ranked recommendation with rationale, and migration complexity / cost of ownership analysis.

The output is a clear recommendation that justifies itself—"We recommend Klaviyo (score 87/100) because you're a DTC fitness brand with Shopify; Klaviyo's predictive analytics, native Shopify sync, and SMS bundling align with your needs and growth to 100K subscribers."

Grounded in Harmony data when available: marketing stack discussions in Slack, budget constraints in Notion, current HubSpot email usage in HubSpot.

## When to Use

- **Starting a new email program**: You have no ESP yet and need to choose one from scratch.
- **Scaling beyond current platform**: Your current tool (Mailchimp Free, Klaviyo) is hitting limits and you need to upgrade or switch.
- **Evaluating a vendor proposal**: A tool vendor is pitching; you want to understand how it compares to alternatives.
- **Budget crunch**: Your current platform is expensive; you want to evaluate cheaper alternatives.
- **New use case**: You want to add SMS, landing pages, or SMS+email automation to your stack and need one platform or multiple.
- **Post-acquisition**: You've acquired a company with a different ESP; you're consolidating platforms.
- **Team growing**: Your current tool's UI doesn't scale with team size or collaboration needs.

## Instructions

### Step 1: Define Your Business Context

Gather information about your company and email program:

1. **Business model**: Which applies?
     - DTC (direct-to-consumer e-commerce, Shopify/WooCommerce)
     - B2B SaaS (software, recurring revenue, long sales cycles)
     - Newsletter (creator, journalist, Substack-style)
     - Agency (managing email for clients, multi-brand)
     - B2B service (consulting, legal, accounting)
     - Non-profit or education

2. **Current list size**: How many email subscribers do you have today?

3. **Projected list size in 12 and 24 months**: What growth rate are you targeting?

4. **Monthly send volume**: Estimate total emails sent per month (marketing + transactional).

5. **Current platform**: What ESP are you using now (if any)? What pain points drive the evaluation?

6. **Budget**: What's your total annual marketing stack budget? What portion is available for email?

7. **Team size and expertise**: How many people manage email? What's their skill level (beginner, intermediate, advanced)?

8. **Integration dependencies**: What tools must your ESP integrate with? (Shopify, Salesforce, HubSpot, Slack, Zapier, etc.)

9. **Compliance needs**: Do you send internationally (GDPR, CASL)? If so, DPA requirement and data location matter.

**Example: Fictional "Peakform" (DTC fitness supplements, Shopify-based)**
- Business model: DTC e-commerce.
- List size: 35,000 today; targeting 100K in 24 months.
- Monthly sends: 800K marketing emails (daily campaigns, abandoned cart, re-engagement), 200K transactional (order confirmations, shipping, returns).
- Current platform: Mailchimp Free (hitting limits on segmentation, automation, and deliverability).
- Budget: $500/month for email (willing to go to $1,500 if ROI is clear).
- Team: 1 full-time email marketer, 1 part-time growth marketer helping with A/B tests.
- Integrations: Shopify (required), Slack (nice-to-have for alerts), Gorgias (customer service, for email escalations).
- Compliance: US-based, mostly US subscribers; some EU and Canada (GDPR/CASL apply to those).
- Pain points: Mailchimp's "free plan gymnastics" (constant upgrades), limited predictive send, no SMS bundling, slow customer support.

### Step 2: Define Must-Have vs. Nice-to-Have Features

Prioritize features into two tiers:

**Must-Haves** (non-negotiable for your use case):
- List segmentation (dynamic, rule-based)
- Email automation (triggered flows, abandonment, win-back)
- A/B testing (subject line, send time, content)
- Integrations (your critical tools: Shopify, Salesforce, Slack, Zapier)
- Analytics and reporting (open rate, click rate, revenue attribution)
- Deliverability tools (bounce handling, spam testing, authentication)
- List management (import/export, list cleanup, compliance)

**Nice-to-Haves** (important but not blocking):
- SMS channel (bundled or integrated)
- Landing pages
- AI-powered features (subject line suggestions, send-time optimization)
- API access (for custom integrations)
- Collaborative inbox or team workflows
- Multi-brand support (if you manage multiple brands)
- Preference center
- Form builders

For Peakform:
- Must-haves: Shopify native integration, predictive send time (to beat Mailchimp's "send whenever"), segmentation, A/B testing, SMS (for customer re-engagement), abandoned cart automation.
- Nice-to-haves: Landing pages, AI subject lines, Gorgias integration, Slack alerts on campaign performance.

### Step 3: Evaluate 6–8 Platforms Using Weighted Scoring

Create a matrix with these platforms (adjust based on your business model):
- **Klaviyo** (DTC leader, Shopify powerhouse)
- **Mailchimp** (affordable, broad feature set, baggage)
- **Kit (ConvertKit)** (creator-focused, newsletter-friendly)
- **beehiiv** (newsletter platform with monetization)
- **ActiveCampaign** (B2B SaaS, full CRM integration)
- **Sendlane** (e-commerce, competing with Klaviyo)
- **HubSpot Email** (all-in-one, CRM-native)
- **Braze** (enterprise, high-volume)

Score each on a 1–10 scale (10 = best-in-class) using these weighted criteria:

1. **Automation depth (20%)**
   - Can you build complex multi-step flows (abandoned cart, post-purchase, win-back)?
   - Dynamic segmentation and conditional splits?
   - API-driven triggers?
   - Score Klaviyo 9/10, Mailchimp Free 4/10, HubSpot 8/10, Braze 10/10.

2. **Deliverability reputation (20%)**
   - Known for high inbox placement rates?
   - Provides authentication help (SPF, DKIM, DMARC)?
   - ISP/spam filter relationships?
   - Score Klaviyo 9/10, Mailchimp 7/10, HubSpot 8/10, Kit 7/10.

3. **Pricing at current and projected scale (20%)**
   - Calculate cost at today's list size and at 12-month and 24-month projections.
   - Include all add-ons (SMS, landing pages, API, premium support).
   - Total cost of ownership (platform + setup + training).
   - For Peakform at 35K subscribers: Mailchimp $300/month, Klaviyo $900/month (with Shopify + SMS), Sendlane $600/month. At 100K subscribers: Mailchimp $1,500+, Klaviyo $1,800+, Sendlane $1,200+.
   - Score based on whether it fits budget at all growth stages. Don't just pick "cheapest"; a cheap platform that forces migration in 2 years costs more in total.
   - Example scoring: Mailchimp 7/10 (cheap now, expensive later), Klaviyo 6/10 (high but reasonable), HubSpot 5/10 (more expensive if you don't need full CRM).

4. **Ease of use (15%)**
   - Can a non-technical marketer use it without custom code?
   - Template builder quality?
   - Drag-and-drop automation or requires coding?
   - Documentation and learning curve?
   - Score Mailchimp 9/10, Kit 9/10, Braze 5/10 (requires engineering), Klaviyo 7/10 (steeper but powerful).

5. **Integration ecosystem (15%)**
   - Native integrations with your critical tools (Shopify, Salesforce, etc.)?
   - Zapier alternative if native integration missing?
   - API quality for custom integrations?
   - Score Klaviyo 10/10 for Shopify (deep integration), HubSpot 9/10 (owns the whole stack), Mailchimp 7/10 (good but not native Shopify).

6. **Analytics & reporting (10%)**
   - Campaign performance dashboards?
   - Revenue attribution (for DTC, this is critical)?
   - Segment-level reporting?
   - Custom reporting API?
   - Score Klaviyo 9/10, Mailchimp 6/10, HubSpot 8/10, Braze 10/10.

**Scoring template for Peakform:**

| Platform | Automation (20%) | Deliverability (20%) | Pricing (20%) | Ease of Use (15%) | Integrations (15%) | Analytics (10%) | **Total Score** |
|----------|:--------:|:----------:|:-----:|:-------:|:--------:|:-------:|:------:|
| Klaviyo | 9×0.2=1.8 | 9×0.2=1.8 | 6×0.2=1.2 | 7×0.15=1.05 | 10×0.15=1.5 | 9×0.1=0.9 | **8.25/10 (83%)** |
| Mailchimp | 5×0.2=1.0 | 7×0.2=1.4 | 7×0.2=1.4 | 9×0.15=1.35 | 6×0.15=0.9 | 6×0.1=0.6 | **6.65/10 (67%)** |
| Sendlane | 8×0.2=1.6 | 8×0.2=1.6 | 7×0.2=1.4 | 6×0.15=0.9 | 7×0.15=1.05 | 7×0.1=0.7 | **7.25/10 (73%)** |
| ActiveCampaign | 9×0.2=1.8 | 8×0.2=1.6 | 5×0.2=1.0 | 6×0.15=0.9 | 8×0.15=1.2 | 8×0.1=0.8 | **7.3/10 (73%)** |
| HubSpot Email | 8×0.2=1.6 | 8×0.2=1.6 | 5×0.2=1.0 | 8×0.15=1.2 | 9×0.15=1.35 | 8×0.1=0.8 | **7.55/10 (76%)** |

Ranking: Klaviyo (83%), HubSpot (76%), Sendlane (73%), ActiveCampaign (73%), Mailchimp (67%).

### Step 4: Assess Migration Complexity

If switching platforms, evaluate the cost and effort:

1. **Data migration**: How much subscriber data, segments, and lists do you have? How clean is it?
     - Small (< 50K subscribers): Easy, 1–2 weeks.
     - Medium (50–500K): Moderate, 2–4 weeks.
     - Large (500K+): Complex, 4–8 weeks, may require data consulting.

2. **Email template migration**: Do you have hundreds of templates or just a dozen?
     - Klaviyo and Mailchimp templates don't directly port; you'll need to rebuild or hire a contractor.
     - Estimate: 4–8 hours per template for redesign + testing.

3. **Automation rebuild**: Are you moving complex flows (3+ steps, multiple branches)?
     - Estimate: 4–8 hours per flow to rebuild, test, and validate.

4. **Integrations**: How many integrations do you need to rebuild?
     - Native integrations: Usually auto-setup (1–2 hours).
     - Custom API integrations: Require engineering; 2–4 weeks.

5. **Testing**: Deliverability testing, segment validation, A/B test migration.
     - Estimate: 1–2 weeks.

6. **Training**: Team needs to learn new platform.
     - Estimate: 2–4 sessions of 1–2 hours each.

**Total migration timeline for Peakform (Mailchimp → Klaviyo)**:
- Data migration: 2 weeks (35K clean list, straightforward export/import).
- Email templates: 10 templates × 6 hours = 60 hours (1.5 weeks for email marketer).
- Automation rebuild: 12 flows × 6 hours = 72 hours (2 weeks for email marketer + revisions).
- Shopify sync setup: 1 day (Klaviyo native integration is plug-and-play).
- Testing and validation: 1 week.
- Training: 3 sessions × 2 hours = 6 hours.
- **Total: 8 weeks (2 months), 1 full-time marketer + occasional engineering help.**
- **Cost**: $0 (internal) or $5K–$10K if hiring a consultant.

### Step 5: Calculate Total Cost of Ownership

Break down 3-year costs for the top 3 platforms:

**Platform fees** (per year):
- Klaviyo: $900/month × 12 = $10,800/year. × 3 = $32,400.
- Mailchimp: $300/month (year 1) + $800/month (year 2) + $1,500/month (year 3) = $3,600 + $9,600 + $18,000 = $31,200.
- Sendlane: $600/month × 12 = $7,200/year × 3 = $21,600.

**Migration cost** (one-time):
- Klaviyo: $5,000 (consultant, template rebuild, training).
- Mailchimp: $500 (minimal, already familiar).
- Sendlane: $3,000 (moderate).

**Training and onboarding** (one-time):
- All: $1,000–$2,000 (team training, documentation).

**Add-on costs** (integrations, SMS, support escalations):
- Klaviyo SMS: Included; support tier doesn't matter for Peakform.
- Mailchimp SMS: $0.005 per message; 50K SMS/month = $250/month = $9,000/year (not included above).
- Sendlane SMS: Included.

**3-year TCO (Total Cost of Ownership):**
- **Klaviyo: $32,400 (platform) + $5,000 (migration) + $1,500 (training) = $38,900.**
- **Mailchimp: $31,200 (platform) + $500 (migration) + $1,500 (training) + $9,000/year SMS (years 2–3) = $42,200.**
- **Sendlane: $21,600 (platform) + $3,000 (migration) + $1,500 (training) = $26,100.**

**Winner on cost: Sendlane ($26,100).**
**Winner on capability + cost: Klaviyo ($38,900 but better automation, deliverability, Shopify sync).**

### Step 6: Identify Platform-Specific "Sweet Spots"

Certain platforms are best-in-class for certain use cases:

- **Klaviyo**: DTC e-commerce with Shopify/WooCommerce, predictive analytics, SMS bundling, high-volume transactional email.
- **Mailchimp**: Non-profit, small business, creator on budget; strong basic automation, good free tier.
- **Kit (ConvertKit)**: Creator/newsletter; audience building, Substack alternative, monetization features.
- **beehiiv**: Newsletter; distribution, cross-promotion, paid subscriptions, analytics tailored to newsletters.
- **ActiveCampaign**: B2B SaaS, complex lead nurturing, CRM integration, sales enablement.
- **HubSpot Email**: All-in-one marketing/sales/service; if you're already in HubSpot, email is included.
- **Sendlane**: E-commerce, SMS-first, lower price than Klaviyo, good for 100K–1M list size.
- **Braze**: Enterprise, high-volume (1M+), omnichannel (email + SMS + push + in-app), customer data platform.

For Peakform (DTC, Shopify, 35K list, SMS needs), **Klaviyo is the sweet-spot match** because:
- Shopify integration is native and tight (real-time product syncs, customer data sync).
- Predictive send time optimizes open rates (critical for DTC).
- SMS bundling avoids juggling two platforms.
- Growth pathway smooth from 35K to 100K to 500K.

### Step 7: Produce Ranked Recommendation with Rationale

Deliver a clear recommendation in this format:

```
RECOMMENDATION: Choose Klaviyo (Score: 87/100)

RATIONALE:
Peakform is a DTC fitness e-commerce brand scaling to 100K subscribers in 24 months. Klaviyo
is the best-in-class platform for your use case because:

1. Shopify Integration (Value: ~$200/month to avoid third-party integration costs)
   - Real-time product syncs, customer purchase history, and inventory data.
   - Abandoned cart automation pre-built and native.
   - Zero friction to migrate data; Shopify-to-Klaviyo sync is automatic.

2. Predictive Send Time (Value: ~5–15% increase in open rates)
   - Learns each subscriber's best time to read and sends at optimal moment.
   - Mailchimp doesn't offer this; manual time testing wastes sends.
   - 5% open rate lift on 800K marketing emails/month = ~40K additional opens/month = incremental revenue.

3. SMS Bundling (Value: $200–$400/month vs. separate SMS platform)
   - SMS is essential for DTC (cart abandonment SMS converts 20%+ of abandoned carts).
   - Klaviyo bundles SMS at $0.01 per message (50K SMS/month = $500/month).
   - Separate platform (Twilio + Zapier) requires engineering and costs more.

4. Scalability (Value: Smooth growth path from 35K to 100K to 500K+)
   - Mailchimp becomes expensive and inflexible at 100K+ subscribers.
   - Sendlane is cheaper but lacks Shopify depth and predictive features.
   - Klaviyo pricing grows predictably; at 100K subscribers, you're paying ~$1,200/month (still <5% of revenue for a healthy DTC brand).

5. Deliverability (Value: 2–5% improvement in inbox placement)
   - Klaviyo's ISP relationships and authentication setup reduce spam folder bounces.
   - Mailchimp's shared IP pool occasionally gets dinged by ESPs for spam from other customers.

TRADE-OFFS:
- Cost: Klaviyo is $900/month vs. Mailchimp Free (or $300–$500 on Mailchimp Standard).
  But at 35K subscribers on Mailchimp Standard, you're already paying $400+, so the delta is only $500/month.
- Ease of use: Klaviyo's automation is more powerful but slightly steeper learning curve than Mailchimp.
  Your email marketer will need 1–2 weeks of hands-on training.
- Migration effort: 2 months to rebuild templates and automation, ~$5K in consulting if you want expert help.

ROI CASE:
- Investment: $38,900 over 3 years (platform + migration + training).
- Return:
  - 5–10% improvement in email revenue (from predictive send, better segmentation).
  - Current email contributes ~$500K/year (conservative for 35K-list DTC); 7% lift = $35K incremental revenue/year.
  - 3-year incremental revenue: $105K.
  - ROI: 2.7x; payback in 6 months.

RUNNER-UP: Sendlane (Score: 75/10)
- Cheaper ($21,600 over 3 years).
- Solid automation and SMS bundling.
- Shopify integration exists but less native than Klaviyo.
- Good choice if budget is extremely constrained; acceptable compromise.

NOT RECOMMENDED: Mailchimp (Score: 62/100)
- Pricing balloons as you scale (becomes cheaper-than-Klaviyo only if you stay < 50K subscribers forever).
- No predictive send; no SMS bundling under current feature set (SMS extra).
- Automation is good but not advanced enough for sophisticated DTC flows.
- Historical data lock-in (migrating 5-year email history is painful).

MIGRATION PLAN:
Week 1–2: Export data from Mailchimp, begin Klaviyo setup.
Week 3–4: Rebuild email templates (10 templates, 60 hours).
Week 5–6: Build and test automation flows (12 flows, 72 hours + revisions).
Week 7–8: Shopify sync, deliverability testing, team training.
Week 9: Go-live with gradual traffic ramp (10% of new emails to Klaviyo for 1 week, then 100%).

NEXT STEPS:
1. Schedule a 1-hour demo with Klaviyo's SMB solutions team (they specialize in DTC).
2. Request a Klaviyo trial account; replicate your 3 biggest automation flows.
3. Get a written proposal for your list size and expected growth.
4. Confirm Shopify app install and test product sync.
5. If satisfied, negotiate annual billing discount (typically 15–20%).
6. Budget 2 months for migration planning and execution.
7. Plan re-audit of email performance 90 days post-migration (should see 5%+ open rate lift).
```

### Step 8: Include Migration Complexity Summary

Add a short summary table:

| Phase | Duration | Owner | Complexity | Risk |
|-------|----------|-------|-----------|------|
| Kickoff & Setup | 1 week | RevOps | Low | Green: Standard onboarding. |
| Data Migration | 1–2 weeks | RevOps | Low | Green: 35K list is small; low risk of data loss. |
| Template Rebuild | 2 weeks | Email Marketer | Medium | Yellow: Time-consuming; requires testing. |
| Automation Rebuild | 2 weeks | Email Marketer + Engineering | High | Yellow: Complex flows; dependencies on integrations. |
| Shopify Sync | 3 days | Engineering | Low | Green: Klaviyo app handles most sync. |
| Testing & Validation | 1 week | Email Marketer + QA | Medium | Yellow: Need to test all flows, segments, reporting. |
| Training | 1 week | Marketing Manager + Klaviyo Solutions | Low | Green: Klaviyo offers guided onboarding. |
| **Total** | **8 weeks** | **Cross-functional** | **Medium** | **Yellow: Doable with proper planning; plan for 1–2 unexpected blockers.** |

## Output Format

Deliver a **platform evaluation report** (Markdown or PDF) containing:

1. **Executive summary**: 1-paragraph recommendation with score.
2. **Business context**: List size, growth projections, budget, pain points.
3. **Must-have vs. nice-to-have features**: Checklist of requirements.
4. **Evaluation matrix**: Weighted scores for all platforms.
5. **Migration complexity**: Timeline and effort estimate.
6. **Total cost of ownership**: 3-year breakdown for top 3 platforms.
7. **Ranked recommendations**: 1st, 2nd, 3rd choice with rationale and trade-offs.
8. **Platform-specific sweet spots**: Why each platform wins for certain use cases.
9. **ROI case**: If available, quantify incremental revenue or efficiency gains.
10. **Migration plan**: Week-by-week roadmap, owners, risk summary.

Keep it actionable (2–4 pages for decision-makers; appendix for detailed scoring).

## Example: Full Evaluation for Peakform

See Steps 1–8 above for complete example.

## Edge Cases

1. **Multi-platform approach**: Some teams use one platform for marketing (Klaviyo) and another for transactional email (Twilio, Sendgrid). This evaluation assumes one platform; if you're splitting, analyze integration complexity between platforms.

2. **White-label or agency**: If you manage email for multiple clients, factor in multi-brand support (HubSpot, Klaviyo support this; Mailchimp Free doesn't). This changes scoring.

3. **High-volume transactional**: If you send 5M+ transactional emails/month, ESPs like SendGrid or Amazon SES are cheaper than marketing-first platforms. Evaluate separately.

4. **Compliance-heavy (GDPR, CASL)**: If you send internationally, factor in DPA availability, data location options, and re-consent support into scoring. Klaviyo and ActiveCampaign excel here.

5. **API-first**: If you're building a custom integration or workflow, prioritize API quality and documentation. Braze and SendGrid are stronger here than Mailchimp.

6. **Existing HubSpot customer**: If you're already in HubSpot for CRM or sales, HubSpot Email is suddenly more attractive because data already syncs. Recalculate scoring with "integration cost" as zero.

7. **Budget-constrained non-profit**: Mailchimp and Kit offer free or deeply discounted plans for non-profits. Check eligibility before dismissing cost.

8. **High-frequency campaigns (daily sends)**: If you send multiple campaigns per day, factor in platform queueing, rendering speed, and ISP reputation. Braze and Klaviyo handle this better than Mailchimp.
