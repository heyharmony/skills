---
name: "Generate Landing Page"
description: "Generate conversion-optimized landing page copy and structure using customer language mined from sales calls and product feedback. Builds hero sections, social proof blocks, feature grids, and CTAs grounded in how customers actually describe their problems. Trigger on: landing page, sales page, product page, conversion page, lead capture page, squeeze page, landing page copy, hero section, above the fold."
dependencies: []
author: "Harmony"
version: "1.0.0"
icon: "sparkles"
cover: ""
screenshots: []
category: "Marketing"
---

## Purpose

The highest-converting landing pages use the customer's own words, not marketing jargon. This skill mines Harmony transcripts for the exact language prospects use to describe their problems, desired outcomes, and hesitations — then structures that language into a proven landing page framework: hero with outcome-driven headline, social proof, feature-benefit blocks, objection handlers, and CTA. By grounding copy in actual customer language from sales calls and product feedback, landing pages achieve higher clarity, resonance, and conversion rates.

## When to Use

- **New product or feature launch page** — turning launch announcements into conversion-focused landing pages
- **Campaign-specific landing page** — demand generation, webinar registration, trial signups tied to specific campaigns
- **Homepage refresh** — updating your main homepage with customer-validated value prop and copy
- **Competitive comparison page** — addressing how customers describe the switching decision and differentiation
- **Event or webinar registration page** — lead capture pages that speak in prospect language
- **Pricing page redesign** — landing pages that sell the value of different plans using customer outcomes

## Instructions

1. **Mine transcripts for customer language**: Review Harmony sales call transcripts, support tickets, or customer interviews. Extract:
   - How prospects describe their current problem (the pain, frustration, workflow issue)
   - The exact outcome they want ("we need X to happen faster")
   - Objections and hesitations they mention ("but won't this break Y?")
   - "Aha moment" phrases that show they get it ("so it just handles integrations for us?")

2. **Write the hero section**: Craft headline (outcome, not feature), subheadline (how it works or who it's for), and primary CTA (specific action: "Start Free Trial," "See It in Action," etc.)

3. **Build social proof block**: Include customer quotes pulled directly from calls (with permission), company logos, key metrics (# customers, % satisfaction), and trust signals (awards, certifications).

4. **Design feature-benefit grid**: 3–5 core features, each explained with the benefit/outcome customers mentioned during calls. Use "so that" language: "Automated Integrations so that you never manually sync data again."

5. **Add objection handler section**: FAQ or "But What About..." blocks sourced from actual sales calls. Address concerns like cost, complexity, security, or time-to-value.

6. **Write final CTA section**: Restate the core promise, add specificity and urgency ("Get started in minutes," "No credit card required"), and make the next action crystal clear.

7. **Structure page flow using AIDA**:
   - **Attention** (hero) — capture with customer problem language
   - **Interest** (social proof + features) — show others use it + concrete benefits
   - **Desire** (objection handlers + feature grid) — deepen interest, remove friction
   - **Action** (final CTA) — guide to conversion

8. **Output as markdown wireframe**: Format with copy blocks ready for design handoff. Include meta description, H1, H2 structure, and placeholder notes for images/logos.

## Output Format

Full page wireframe in markdown:

```
# Hero Section
## Headline
## Subheadline
### CTA Button

# Social Proof
[Quote: "..."] – Customer Name, Title
## Logos or Metrics

# Features Grid
## Feature 1 – Benefit
## Feature 2 – Benefit
## Feature 3 – Benefit

# Objection Handlers
### Q: Will this work with our existing tools?
A: Yes, because...

### Q: Is it secure?
A: Yes, because...

# Final CTA Section
## Restated Promise
### Call-to-Action Button

# Meta
Description: ...
H1: [Hero headline]
```

## Example

**Scenario**: Landing page for "Conduit," an API integration platform for mid-market companies.

**Customer language mined from calls**:
- "I'm tired of building integrations from scratch"
- "We just need it to work without babysitting"
- "Our team spends 40% of sprint time on integration bugs"
- "Does it handle our weird custom integrations?"
- "I don't want to hire another engineer"

**Landing Page Output**:

```
# Ship Integrations in Hours, Not Months

## Stop reinventing the wheel. Conduit pre-builds the integrations your team needs.

### Start Your Free Trial

---

## Trusted by 200+ mid-market companies

"We cut integration time by 75%. Our team can actually focus on product now." – Sarah Chen, VP Engineering, TechStart

"We tried three other platforms. Conduit just works." – James Rodriguez, CTO, FinServe

[Logos: Company A, Company B, Company C]

---

## How Conduit Works for Your Team

### Pre-built Connectors
200+ integrations ready to ship. So your engineers focus on business logic, not plumbing.

### Custom Integration Builder
Need something custom? Drag-drop builder, no code required. So non-technical stakeholders can unblock teams.

### Real-Time Sync
Data stays in sync automatically. So you sleep at night knowing your systems are connected.

### Security Built In
Enterprise-grade encryption, audit logs, SOC 2 certified. So compliance isn't a blocker.

---

## Still Have Questions?

### "Will Conduit work with our legacy system?"
Yes. Our API accepts any JSON payload and syncs to any database or service. If it sends data, Conduit connects it.

### "Do we need to hire engineers to set this up?"
No. Most customers go live in 2–3 days with zero engineering. Our integrations team supports you through launch.

### "Is it secure for financial data?"
Yes. We're SOC 2 Type II certified, encrypt all data in transit and at rest, and provide full audit logs. Your security team will approve it.

---

## Stop Wasting Engineering Time on Integrations

**Start free. No credit card. Takes 5 minutes.**

[Primary CTA: "Create Your Free Account"]
[Secondary CTA: "Watch 3-Minute Demo"]

---

## Meta
**Page Title**: Ship Integrations in Hours, Not Months | Conduit
**Meta Description**: Pre-built integrations for mid-market companies. Connect 200+ SaaS tools in minutes. Start free.
**H1**: Ship Integrations in Hours, Not Months
```

## Edge Cases

1. **No customer call data available** — Mine competitor review sites (G2, Capterra, ProductHunt), support community forums, and Reddit. Extract language from how prospects compare solutions.

2. **Technical product with complex features** — Use "translation" approach: feature → benefit → customer outcome. Example: "REST API with webhook support" becomes "Real-time data sync so your teams see changes instantly."

3. **Multiple audiences on one page** — Segment the page with audience callouts. Use different hero variants (SMB vs. Enterprise) and feature grids (different benefits per segment).

4. **Compliance-restricted copy** (healthcare, finance) — Work with legal early. Mine language from compliant materials (webinars, case studies) rather than raw calls. Use objection handlers to address regulatory concerns.

5. **Localization for international markets** — Don't translate; re-mine customer language from regional calls and communities. Cultural expressions, problem phrasing, and urgency vary by market.

## Role & Action

**Role**: Marketing
**Action**: Create

## Connectors

- HubSpot (pull call transcripts, notes)
- Google Drive (reference competitor landing pages, share output)
- Slack (notify team of generated landing page)
- Notion (store customer language library, competitive intel)
