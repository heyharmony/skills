---
name: "Tear Down Competitor"
description: "Systematically evaluate competitor strengths, weaknesses, and positioning across 12 dimensions to inform product strategy. Trigger on: competitive mentions from sales calls, objection patterns, customer language about alternatives, win/loss analysis."
dependencies: []
---

## Purpose

Use Harmony's sales call transcripts and meeting data to build data-driven competitive intelligence. When your sales team mentions a competitor by name—whether as a lost deal, a feature objection, or a customer alternative—Harmony extracts that context and surfaces it in one structured teardown. This skill converts scattered competitive mentions into a 12-dimension scoring rubric (Features, Pricing, UX, Performance, Docs, Support, Integrations, Security, Scalability, Brand, Community, Innovation), feature-by-feature comparison matrix, SWOT analysis, and positioning map. The output is immediately actionable for product, design, and sales alignment.

## When to Use

- **Post-sales call**: A prospect mentioned a competitor's pricing model during your demo. Extract that mention and build a teardown to validate or challenge your positioning.
- **Win/loss analysis**: You lost three deals in a row to the same competitor. Pull transcripts, synthesize objections, and identify gaps to close.
- **Feature prioritization**: Your customer success team reports that three enterprise clients are evaluating your competitor's integration capabilities. Score both on 12 dimensions to inform roadmap.
- **Positioning refresh**: Sales is struggling with a messaging narrative against a rising competitor. Use competitive teardown to find differentiation vectors and messaging angles.
- **Board preparation**: Build a market positioning deck that shows how you stack up on standards customers care about (security, compliance, ease-of-use).
- **Sales enablement**: Create battle cards for your BDRs by scoring both your product and the competitor head-to-head, call out quick wins and proven objection handlers.

## Instructions

1. **Identify the competitor**
   - Scan recent sales call transcripts for named competitor mentions (use Harmony's transcript search to filter by speaker, date range, account type).
   - Note the context: Is it a lost deal? An objection? A feature request? Customer comparing alternatives?
   - Document any customer language, objection phrasing, or reasons given for why they chose the competitor.

2. **Gather data from five sources**
   - **Harmony sales calls**: Pull direct quotes from transcripts where the competitor is mentioned, including the objection, use case, or feature comparison.
   - **Company website & product marketing**: Analyze positioning, feature claims, pricing tiers, and messaging.
   - **App store reviews**: Extract aggregated sentiment on UX, performance, reliability, and support responsiveness.
   - **Job postings & team signals**: Infer product direction, team size, investment in compliance/security, and hiring velocity.
   - **Social media & community forums**: Identify brand sentiment, user pain points, and unmet needs in customer feedback.

3. **Score across 12 dimensions (0–10 scale)**
   - **Features**: Breadth and depth of core functionality vs. your product. Are they adding or shipping faster?
   - **Pricing**: Pricing model, transparency, enterprise discounts, and value-to-cost ratio vs. market alternatives.
   - **UX/Usability**: Ease of onboarding, interface intuitiveness, mobile experience, accessibility. Quote user reviews.
   - **Performance**: Speed, uptime, scalability at scale, reliability SLA adherence. Pull app store data.
   - **Documentation**: Quality of help docs, API docs, video tutorials, knowledge base, onboarding guides.
   - **Support**: Channel availability (email, chat, phone), response time SLA, proactive outreach, CSM tier.
   - **Integrations**: Native integrations, API flexibility, third-party marketplace, custom solutions, partner ecosystem.
   - **Security & Compliance**: SOC 2, GDPR, HIPAA, encryption, data governance, transparency reports, incident history.
   - **Scalability**: Ability to support millions of records, multi-tenant architecture, geographic redundancy, limits.
   - **Brand & Perception**: Market awareness, customer trust signals, analyst coverage (Gartner, Forrester), case studies.
   - **Community & Ecosystem**: User community size, forum activity, developer adoption, integration partners, thought leadership.
   - **Innovation**: R&D investment, feature velocity, emerging tech adoption (AI, automation), vision alignment with customer trends.

4. **Build a feature comparison matrix**
   - List 15–20 key features your sales team cares about (e.g., native Salesforce sync, role-based permissions, audit logs, bulk import).
   - Mark each feature: ✓ (fully supported), ~ (partial), ✗ (not supported), or --- (unknown).
   - Assign a priority tier (Must-Have, Nice-to-Have, Differentiator) based on sales call frequency and customer objections.
   - Highlight any gaps or surprises.

5. **Create SWOT analysis**
   - **Strengths**: What is the competitor best-in-class at? What do customers praise most frequently in app store reviews?
   - **Weaknesses**: What are the most common objections, complaints, or frustrations in transcripts and reviews?
   - **Opportunities**: Where are they not meeting customer needs? What do your customers ask for that they lack?
   - **Threats**: What segments or use cases are they winning? What is their product trajectory?

6. **Plot positioning map**
   - Create a 2x2 matrix on two axes your market cares about (e.g., Ease-of-Use vs. Enterprise Feature Depth; Price vs. Customization).
   - Plot your product and 2–3 competitors on the map.
   - Annotate with customer quotes or objection patterns to justify positioning.

7. **Synthesize action items (quick wins → strategic)**
   - **Quick Wins** (0–4 weeks): Ship or communicate a missing feature, update messaging, create a battle card for sales.
   - **Medium-term** (1–3 months): Launch a feature the competitor lacks; refactor UX flow; build new integration.
   - **Strategic** (6+ months): Enter a new market segment, build a new product line, or reposition against this competitor class.

8. **Present to stakeholders**
   - Outline: Competitive snapshot (1 slide), 12-dimension rubric (1 slide), feature matrix (1 slide), SWOT (1 slide), positioning map (1 slide), action items (1 slide).
   - Include specific quotes from sales calls and customer feedback to anchor each insight.
   - Recommend which dimension to improve first, based on customer frequency and strategic value.

9. **Update periodically**
   - Re-run this teardown quarterly or whenever a major competitor release or positioning shift occurs.
   - Track your own scores month-over-month to validate if improvements translate to fewer objections on sales calls.

10. **Share and iterate**
    - Distribute the teardown to product, sales, design, and leadership.
    - Use Harmony transcripts to measure whether addressing a gap reduces this objection in future calls.

## Output Format

```markdown
# Competitive Teardown: [Competitor Name]

## Executive Summary
[1-2 sentence overview: who they are, why they matter, and what we heard on sales calls]

---

## 12-Dimension Scorecard

| Dimension | [Competitor] | Your Product | Delta | Key Insight |
|-----------|:-------:|:------:|:-----:|-----------|
| Features | 8 | 7 | -1 | They have 3 features we lack; we have stronger compliance tooling. |
| Pricing | 6 | 8 | +2 | 30% cheaper but requires annual commitment; we offer monthly flexibility. |
| UX/Usability | 7 | 8 | +1 | Cleaner dashboard; steeper onboarding. 68% of reviews praise "simplicity." |
| Performance | 7 | 9 | +2 | 99.9% SLA vs. our 99.99%; they have intermittent latency issues. |
| Documentation | 5 | 8 | +3 | Sparse API docs; no video tutorials. Customer pain point. |
| Support | 6 | 8 | +2 | Email-only; no live chat. 48-hour response time vs. our 4 hours. |
| Integrations | 7 | 8 | +1 | 40 native integrations; we have 50 and better Slack/Salesforce sync. |
| Security & Compliance | 6 | 9 | +3 | No SOC 2; we're Type II certified. Regulatory gap for healthcare segment. |
| Scalability | 8 | 8 | 0 | Both handle millions of records; they scale laterally, we scale vertically. |
| Brand & Perception | 8 | 6 | -2 | Analyst favorite; 40% market awareness vs. our 15%. Strong case study library. |
| Community & Ecosystem | 7 | 5 | -2 | 8K Slack member community; active YouTube channel. Ours: 1.2K community members. |
| Innovation | 7 | 6 | -1 | Shipped AI-powered features this quarter; we announced Q2 AI roadmap. |

**Overall Score: [Competitor] 7.3 | Your Product 7.8**

---

## Feature Comparison Matrix

| Feature | [Competitor] | Your Product | Priority | Notes |
|---------|:-------:|:-----:|:--------:|--------|
| Native Salesforce sync | ✓ | ✓ | Must-Have | Both full-featured; we have 3-day approval workflow. |
| Role-based permissions | ✓ | ✓ | Must-Have | Feature parity. |
| Bulk import (CSV/API) | ✓ | ~ | Must-Have | They support 10M rows; we cap at 1M. **Gap.** |
| Audit logs & compliance export | ✓ | ✓ | Must-Have | Identical; both HIPAA-compatible. |
| Custom webhooks | ✓ | ✓ | Nice-to-Have | Parity. |
| White-label/whitelisted domains | ~ | ✓ | Differentiator | We support 20 custom domains; they charge $500/domain. |
| Mobile app (iOS/Android) | ✓ | ✗ | Nice-to-Have | They have native app; we have responsive web only. |
| Real-time collaboration | ✗ | ✓ | Differentiator | **Our strength.** Multi-user editing, live cursors. They lag. |
| Slack integration | ✓ | ✓ | Nice-to-Have | Parity. |
| AI-powered anomaly detection | ~ | ✗ | Differentiator | They launched beta in Feb; we plan Q2. |
| Custom reports builder | ✓ | ~ | Nice-to-Have | Drag-and-drop vs. our template library. Easier UX. |
| API rate limits | 1K req/s | 5K req/s | Technical | We have 5x capacity; enterprise advantage. |
| Single sign-on (SAML/OIDC) | ✓ | ✓ | Must-Have | Feature parity. |
| Data residency options | ✗ | ✓ | Differentiator | We offer US/EU/APAC; they are US-only. **Regulatory gap.** |
| Offline mode | ✗ | ✗ | Nice-to-Have | Neither supports. |

---

## SWOT Analysis

**Strengths**
- Best-in-class brand recognition (40% unaided awareness vs. our 15%).
- Established partner ecosystem (8 system integrators, 3 ISV partners).
- Strong user community (8K Slack members, active forums).
- Analyst recognition (Gartner Visionary, Forrester Strong Performer).
- Aggressive pricing for SMB segment ($29/user vs. our $59).

**Weaknesses**
- Sparse technical documentation; customers report 2-3 hours to get API working (vs. our 20 min average).
- Email-only support; 48-hour response time vs. market-leading 4-hour SLA.
- No SOC 2 Type II certification; cannot serve regulated healthcare/finance segments.
- Mobile app crashes in low-bandwidth environments (reported in 12% of app store reviews).
- Bulk import capped at 1M rows; enterprise data migration a pain point.

**Opportunities**
- **For us**: Emphasize regulatory compliance, superior documentation, real-time collaboration, and data residency as differentiators for enterprise/regulated industries.
- **For us**: Invest in mobile app to close the app store gap.
- **For us**: Highlight their bulk import limits when pitching to data-heavy verticals (e.g., healthcare systems, financial services).
- **For us**: Build integrations they lack (e.g., Tableau, Looker) to deepen customer stickiness.

**Threats**
- Their AI roadmap is ambitious; if they ship anomaly detection well, it could become table-stakes by Q4.
- They are hiring aggressively in engineering (16 job posts this month); likely shipping 2-3x faster than historical velocity.
- Strong momentum in mid-market (SMB→mid-market transition); could undercut us on price and packaging.
- Community and partner ecosystem create moat for customer retention and expansion.

---

## Positioning Map

```
                 Enterprise Feature Depth
                          ↑
                          |
         [Your Product] ★  |    ★ [Competitor]
    Ease of Use            |         Brand
         ↑                 |        Recognition
         |                 |
    -----+----------→ Ease of Use
         |                 |
         |                 |
    [Emerging Competitor]  |
         ★                 |
                           |
```

**Interpretation**: We own "Ease of Use + Enterprise Features" (balanced); Competitor owns "Brand + Features" (heavyweight); we have pricing/compliance/support as secondary moats.

---

## Sales Call Insights

**Why customers are evaluating [Competitor]:**
- "Their bulk import handles millions of records; we migrate 5M customer records annually." (Prospect: RetailCorp, Lost Deal, Feb 2026)
- "They're HIPAA and data residency certified; our regulatory team won't approve a non-certified vendor." (Customer: MedTech Inc., Eval Stage, Jan 2026)
- "Their Slack community is huge; our team finds answers fast there." (Prospect: SaaS Startup, Objection: Support, Feb 2026)
- "We can't afford both platforms; their pricing is 40% lower per user." (Prospect: Early-Stage Fintech, Budget Objection, Jan 2026)

---

## Action Items

### Quick Wins (0–4 weeks)
- [ ] **Sales enablement**: Create 1-page battle card comparing our Compliance/Documentation/Support vs. competitor's pricing. Share with AE team.
- [ ] **Messaging**: Update website homepage to emphasize "SOC 2 certified, HIPAA-ready, data residency in 3 regions" to address regulatory objection.
- [ ] **Docs**: Publish "Getting Started with [Product] API" video (10 min); close the documentation gap.

### Medium-term (1–3 months)
- [ ] **Feature**: Increase bulk import limit to 10M rows; ship in Q2 release to eliminate data migration objection.
- [ ] **Product**: Build mobile-responsive dashboard improvements; measure impact on NPS from SMB segment.
- [ ] **Integrations**: Launch 2 new integrations they lack (e.g., Looker, Tableau) to deepen stickiness with data-heavy accounts.

### Strategic (6+ months)
- [ ] **Product vision**: Ship AI-powered anomaly detection to match their Q2 roadmap; stay competitive on innovation.
- [ ] **Community**: Grow user community from 1.2K to 5K members; invest in Slack workspace, monthly webinars, case studies.
- [ ] **Pricing**: Introduce SMB tier at $39/user to defend against their aggressive pricing strategy in the lower market.
- [ ] **Partner ecosystem**: Recruit 3 systems integrators, 2 ISV partners to build a defensible moat.

---

## Measurement & Iteration

- **Track**: Does addressing bulk import limits reduce data migration objections in future sales calls?
- **Quarterly**: Re-run this teardown to monitor score changes and competitor roadmap shifts.
- **Sales metrics**: Correlate improvements (e.g., compliance messaging launched) with deal velocity, win rate, and objection frequency.

```

## Example

### Input
Sales team reports: "We lost a deal to TalentSync this week. Multi-user editing was cited as a reason they chose us, but they're all-in on their compliance story, and our lack of SOC 2 was a blocker for HR deals. Also, three customers mentioned their mobile app is polished. Can we build a teardown?"

### Output

# Competitive Teardown: TalentSync

## Executive Summary
TalentSync is a market leader in HR operations for mid-market, winning on brand, compliance certifications, and mobile UX. We've lost 4 deals to them this quarter, primarily on regulatory (SOC 2, HIPAA) and mobile app gaps. Our advantages: real-time collaboration, superior documentation, and compliance-ready roadmap. This teardown surfaces 3 quick wins and 2 strategic bets to close the gap.

---

## 12-Dimension Scorecard

| Dimension | TalentSync | Your Product | Delta | Key Insight |
|-----------|:-------:|:------:|:-----:|-----------|
| Features | 8 | 8 | 0 | Feature parity; they have employee survey module; we have collaborative workflows. |
| Pricing | 7 | 8 | +1 | $45/user/month vs. our $55; they bundle HR + payroll; we focus on talent. |
| UX/Usability | 9 | 8 | -1 | Polished mobile app (4.7★ iOS); we're web-only. Onboarding is 30 min vs. our 1 hour. |
| Performance | 8 | 9 | +1 | 99.95% SLA vs. our 99.99%; marginal difference. Both scale well. |
| Documentation | 7 | 9 | +2 | Adequate; no video tutorials. We excel here. |
| Support | 8 | 8 | 0 | Both offer 24/7 chat + phone; CSM model identical. TalentSync slightly faster (2-hour SLA). |
| Integrations | 7 | 8 | +1 | 35 native integrations; we have 40. Both strong. |
| Security & Compliance | 9 | 6 | -3 | SOC 2 Type II, HIPAA, GDPR, FedRAMP. We lack FedRAMP. **Critical gap for regulated orgs.** |
| Scalability | 8 | 8 | 0 | Both support millions of records; architecture differences negligible. |
| Brand & Perception | 8 | 5 | -3 | Deloitte partner, Gartner Leader. We're Visionary. 50% awareness vs. our 12%. |
| Community & Ecosystem | 7 | 5 | -2 | 12K Slack members, strong partner network. Ours: 2K community members. |
| Innovation | 7 | 6 | -1 | Shipped AI-resume parsing; we're in Q3 AI planning. They lead on AI adoption. |

**Overall Score: TalentSync 7.9 | Your Product 7.4**

---

## Feature Comparison Matrix

| Feature | TalentSync | Your Product | Priority | Notes |
|---------|:-------:|:-----:|:--------:|--------|
| Real-time collaboration (multi-user editing) | ✗ | ✓ | Differentiator | **Our strength.** They don't support live co-editing. |
| HIPAA compliance | ✓ | ~ | Must-Have | They're certified; we're on roadmap for Q3. |
| SOC 2 Type II | ✓ | ✗ | Must-Have | **Critical gap.** They have it; we lack it. Blocker for regulated accounts. |
| FedRAMP authorization | ✓ | ✗ | Must-Have | Government/defense customers won't buy without it. They have; we don't. |
| Native Salesforce sync | ✓ | ✓ | Must-Have | Parity. |
| Mobile app (iOS/Android) | ✓ | ✗ | Nice-to-Have | **Their strength.** Polished, 4.7★ ratings. We web-only. |
| Customizable workflows | ✓ | ✓ | Must-Have | Feature parity. |
| Employee survey/feedback | ✓ | ✗ | Nice-to-Have | They have; we don't. Low-priority objection. |
| Payroll integration (ADP, Gusto) | ✓ | ~ | Nice-to-Have | They native; we via Zapier. |
| Slack notifications | ✓ | ✓ | Nice-to-Have | Parity. |
| Custom reporting | ✓ | ✓ | Must-Have | Parity. |
| API rate limits | 500 req/s | 2K req/s | Technical | We have 4x their capacity. |
| Data residency (US/EU/APAC) | ✓ | ~ | Nice-to-Have | They offer US/EU; we're US-only. |

---

## SWOT Analysis

**Strengths**
- SOC 2 Type II + HIPAA + FedRAMP; regulated customers trust them.
- Polished mobile app (4.7★ avg rating); SMB/mid-market love the UX.
- Strong brand (Deloitte partner, Gartner Leader); 50% unaided awareness.
- Established partner network (8 implementation partners, 4 ISV integrations).
- Aggressive pricing for SMB ($45/user); bundle payroll + HR to create value.

**Weaknesses**
- No real-time collaboration; workflows are single-user or batch-mode.
- Documentation is sparse; no video tutorials. Customers report setup takes 3-4 days.
- Mobile app doesn't support all features available on desktop; offline sync is buggy.
- FedRAMP is their only compliance moat; they lack GDPR data residency options.
- Community is smaller relative to tier-1 vendors (12K vs. 50K for Workday).

**Opportunities**
- **For us**: Lead with real-time collaboration + superior documentation to win SMB with collaborative hiring teams.
- **For us**: Certify SOC 2 Type II and FedRAMP in Q3/Q4 to eliminate compliance objection.
- **For us**: Build mobile app parity to compete in on-the-go SMB segment.
- **For us**: Partner with ADP/Gusto to bundle payroll + talent, matching their bundle strategy.

**Threats**
- Their compliance roadmap includes data residency (Q3); closes one of our potential gaps.
- They are hiring 8 engineers this quarter (job posts); likely shipping 2x our velocity on features.
- Deloitte partnership gives them enterprise credibility; they can scale into Fortune 500.
- If they ship real-time collaboration, they eliminate our primary differentiation.

---

## Positioning Map

```
                    Compliance-Ready
                          ↑
                          |
         [Your Product] ★  |    ★ [TalentSync]
    Modern Collaboration   |      Brand/Mobile
         ↑                 |
         |                 |
    -----+----------→ Enterprise-Grade UX
         |                 |
         |                 |
    [Emerging Competitor]  |
         ★                 |
         (Budget SMB)      |
```

**Interpretation**: TalentSync dominates "Compliance + Enterprise UX"; we own "Collaboration + Documentation"; budget SMBs have a gap.

---

## Sales Call Insights

**Direct quotes from lost deals:**
- "Your real-time collaboration is incredible, but we can't move forward without SOC 2. Our board won't approve." (Lost deal: MediCorp, Jan 2026, Compliance objection)
- "TalentSync's mobile app is why we picked them. My team hires on-the-go; your web app doesn't cut it." (Lost deal: Tech Startup, Feb 2026, UX objection)
- "We evaluated both. TalentSync's FedRAMP is a requirement for our government contracts. Non-negotiable." (Lost deal: Federal Solutions, Dec 2025, Compliance objection)
- "Your onboarding docs are better, but their mobile app gets us up and running in 20 minutes. Support matters." (Won deal: Retail Corp, Jan 2026, Churn risk: still considering TalentSync for mobile)

---

## Action Items

### Quick Wins (0–4 weeks)
- [ ] **Sales messaging**: Create 1-page battle card: "Real-time collaboration wins on team velocity. SOC 2 roadmap: Q3 2026." Share with sales team.
- [ ] **Prospect follow-up**: Contact 3 lost deals from Jan/Feb with message: "We're certifying SOC 2 Type II in Q3. Let's revisit when it's live."
- [ ] **Docs**: Publish "Getting Started" video (15 min); address their onboarding gap perception.

### Medium-term (1–3 months)
- [ ] **Compliance**: Begin SOC 2 Type II audit process (target: Q3 completion). Communicate timeline to sales + marketing.
- [ ] **Mobile**: Ship mobile-responsive dashboard and native iOS app beta (Q2); measure NPS impact.
- [ ] **Integrations**: Build native ADP Payroll integration to compete on bundling strategy.

### Strategic (6+ months)
- [ ] **Compliance**: Complete FedRAMP authorization (Q4) to unlock federal/defense segment.
- [ ] **Product**: Ship real-time collaboration for team hiring workflows; differentiate vs. single-user competitors.
- [ ] **Community**: Grow user community to 5K members; monthly webinars, case studies from compliance-sensitive verticals.
- [ ] **Partnerships**: Partner with ADP, Gusto, BambooHR to create payroll + talent bundling strategy.

---

## Measurement & Iteration

- **Post-certification**: Track win rate lift among regulated verticals (healthcare, government) once SOC 2 + FedRAMP live.
- **Quarterly**: Re-run teardown; measure if objection frequency shifts (from compliance → innovation/mobile/price).
- **Mobile launch**: Measure NPS lift and deal velocity improvement after mobile app ships.

```

## Edge Cases

1. **Competitor is private or stealth-mode, limited public data**
   - **Handling**: Rely heavily on Harmony sales call mentions, customer feedback, and job postings to infer product direction. Note data gaps in the teardown ("Information source: sales calls, job postings; website not public"). Recommend sales team conduct customer reference calls or win/loss interviews to fill gaps.

2. **Multiple competitors, no clear leader (fragmented market)**
   - **Handling**: Score all 3–4 primary competitors in a single teardown using a shared 12-dimension framework. Use a comparison table (Competitor A | Competitor B | Competitor C | Your Product) to surface clusters and differentiation vectors. Recommend focusing on the competitor winning most deals in your target segment.

3. **Competitor has evolved significantly (major rebrand, acquisition, product pivot)**
   - **Handling**: Note the timing of the shift in the teardown ("TalentSync acquired HRFlow in Jan 2026, shipping workflow automation in Q2"). Create separate scorecards for the old and new product, or focus on the new direction. Recommend re-running teardown in 6 weeks after product changes settle.

4. **We lack conviction on how to compete (positioning unclear)**
   - **Handling**: Use the SWOT and positioning map to surface 2–3 differentiation hypotheses. Add a "Competitive Positioning Options" section outlining scenarios (e.g., "Play: Enterprise Compliance Leader" vs. "Play: SMB Collaboration Champion"). Recommend stakeholder workshop to select one and align on go-to-market messaging.

5. **Competitor is vastly superior on almost all dimensions (existential threat)**
   - **Handling**: Don't sugarcoat. Call it out in the Executive Summary ("TalentSync is superior on 9 of 12 dimensions"). Then identify the 2–3 dimensions where you can realistically win (e.g., "Collaboration, Documentation, Niche vertical"). Recommend focusing all resources on those wedges and potentially repositioning as a specialist (e.g., "Collaboration-first talent management for remote-first teams") rather than competing head-to-head.

6. **Customers mention "we love you but they have X" (respect gap, not a blocker)**
   - **Handling**: Score that dimension realistically (don't inflate your score), but in the sales call insights, note the emotional context ("Customers don't *want* to leave, but X is required by compliance/board/use case"). Recommend quick win of addressing X or a messaging/positioning shift to minimize the gap's impact.

