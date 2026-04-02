---
name: "Build Platform Strategy"
description: "Create a platform strategy that enables third-party developers to build on top of your product. When evaluating whether to stay vertical or open an ecosystem. Trigger on: developer experience, ecosystem, API strategy, third-party integration, marketplace, platform launch, governance."
dependencies: []
connectors:
  - name: "Linear"
    reason: "Tracks platform development roadmap, API features, developer feedback"
  - name: "Slack"
    reason: "Developer community channel for feedback, support, and ecosystem coordination"
  - name: "Notion"
    reason: "Stores developer documentation, API specs, governance framework"
  - name: "Google Drive"
    reason: "Hosts integration guides, technical specs, partner agreements"
  - name: "Intercom"
    reason: "Manages developer support tickets and feature requests from third parties"
author: "Harmony"
version: "1.0.0"
icon: "sparkles"
cover: ""
screenshots: []
category: "Product"
---

## Purpose

A platform transforms your product from a closed system into an ecosystem where developers build on top of it, expanding capability without increasing your team. Platforms create network effects: more developers → more apps → more users → more developers. The shift from product to platform is not about adding APIs and calling it done. It requires rethinking everything: governance (what can third parties do?), developer experience (how fast can someone build?), economics (how do you capture value?), and go-to-market (who are your developer champions?). This skill guides you through deciding whether a platform is right for your company, building it in phases, and measuring ecosystem health.

## When to Use This

- You've achieved strong product-market fit but growth is plateauing despite adding features
- Customers repeatedly ask for integrations or custom extensions you can't build alone
- You're seeing users build workarounds or middleware; opportunity cost of building is clear
- Your roadmap is constrained by trying to serve every vertical use case
- You want to compete with larger platforms without building everything yourself
- You're losing deals to competitors with richer ecosystems
- Your product is mature enough to be stable; developer-facing features won't destabilize core
- You have the engineering resources to support a public API and developer community
- You're comfortable trading some control for faster innovation at the edges

## Instructions

1. **Evaluate Platform Timing and Market Fit**
   - Assess your product maturity: is core product stable enough for external developers? (target: <1% daily API failures, documented patterns)
   - Map customer requests: are 20%+ of inbound asks about integrations, plugins, or custom extensions?
   - Research adjacent pain points: which use cases are outside your roadmap but highly requested?
   - Analyze competitor ecosystems: how many apps does your closest competitor have? How active is their marketplace?
   - Calculate internal capacity: how many engineers would it take to build the top 10 customer requests in-house? (if >3 FTE, platform economics favor opening)
   - Talk to 20 customers about a hypothetical platform: would they build on it? What integrations matter most?
   - Decision framework: if you can honestly say "we don't have enough engineers to serve all use cases," a platform is likely right

2. **Define Platform Boundaries and Governance**
   - Decide what developers CAN build: Can they access user data? Modify core workflows? Create revenue-sharing deals?
   - Create a tier system: basic integrations (webhooks, read-only APIs) vs. advanced (full data access, custom UI in your app)
   - Write down what developers CANNOT do: no competing product category, no scraping, no reverse-engineering, no spam
   - Design revenue share (if applicable): 70/30, 80/20, or free tier with premium revenue share?
   - Specify enforcement: how do you manage apps that break rules? Removal process? Appeal process?
   - Document security requirements: data encryption, auth standards, API rate limits, audit logging
   - Create a simple one-page platform policy; clarity prevents disputes

3. **Build Developer Experience as Your Product**
   - Create API documentation that enables a developer to build an app in <2 hours without contacting support
   - Provide SDKs in the languages your users code in (if you're a design tool, JavaScript; if a backend service, Python/Go)
   - Build a sandbox environment where developers test without hitting production
   - Create a developer console dashboard where devs manage API keys, see usage, debug errors in real-time
   - Write 5-10 example integrations (Slack notifications, Google Sheets sync, CRM import) to show what's possible
   - Set up a 20-minute onboarding call template; some developers need human help despite great docs
   - Measure time-to-first-API-call: target <30 minutes from signup to working code
   - Create a support channel: dedicated Slack community, Discord server, or email alias for developer questions

4. **Launch a Minimal Viable Ecosystem**
   - Start with read-only APIs and webhooks; avoid complex state-changing operations initially
   - Open to 50-100 trusted developers first (beta); avoid public launch until you've solved governance edge cases
   - Identify 5 "seed" developers (customers who've built workarounds) and co-develop apps with them
   - Create a lightweight app marketplace or directory (even a simple table on your website)
   - Recruit 2-3 champion developers who become your advocates; make them feel like co-creators
   - Measure: days-to-first-app, number of developers building, volume of API calls
   - If you hit 20 developers, 5 published apps, 1M+ API calls/month, you're ready to expand

5. **Build and Maintain Developer Community**
   - Create a weekly developer office hours (30 min, open Q&A) to build relationships
   - Publish a monthly developer newsletter: new API features, featured apps, community wins
   - Highlight top developers: feature them in your blog, give them free credits, invite to customer advisory board
   - Create a developer Slack community where devs help each other (reduces support burden)
   - Host an annual or quarterly developer conference (even virtual); make it a big deal
   - Solicit feature requests formally: "What API feature would unlock your next app?"
   - Track sentiment: are developers excited or frustrated? Survey them quarterly

6. **Design the Marketplace (When Ready)**
   - Decide: centralized marketplace (you vet apps) or open app store (anyone publishes)?
   - Create app listing standard: name, description, logo, pricing (free/paid), permissions required, user reviews
   - Build review process: security check, user experience check, data privacy audit
   - Implement app ratings and reviews: social proof drives adoption
   - Enable revenue sharing: if an app charges, developers get 70%, you get 30%
   - Ensure fair app discovery: featured apps, category browse, search, trending list
   - Set growth targets: 100 published apps in year one, 50+ active developers
   - Plan marketplace moderation: remove broken apps, spam, or malicious integrations quickly

7. **Measure Platform Health and Growth**
   - **Developer Health:** Active developers (monthly), app published count, time-to-first-app
   - **Usage Health:** API calls/month, webhook events/month, average dev quota usage (% of limit)
   - **Ecosystem Contribution:** Apps that reduce support tickets, customer churn prevented by key integrations
   - **Revenue Impact:** Third-party-influenced ARR (customers who cite app use as stickiness factor), revenue from partner revenue share
   - **Satisfaction:** Developer NPS, support resolution time, feature request velocity
   - Create a monthly platform scorecard; share with exec team and product team
   - If API calls are stagnant for 2 months, investigate: Are docs unclear? Did an app break? Do devs need new features?
   - Benchmark against competitors: how many developers, apps, and API calls do they have? Healthy platforms grow 30%+ YoY

8. **Avoid Platform Pitfalls**
   - Don't compete with your ecosystem: if a top developer builds an app, don't build the same thing and push it as "official"
   - Don't change API contracts without warning: versioning matters; keep old versions alive for >1 year
   - Don't neglect security: one data breach or hacked app damages trust in the whole platform
   - Don't promise marketplace revenue if you can't deliver: transparent economics beat optimistic projections
   - Don't ignore toxic developers: one bad actor ruins community morale

## Output Format

```
## Platform Strategy Review

**Review Date:** [Month/Year]

### Market Context
- Product maturity level: [e.g., 3+ years, stable core, <1% API error rate]
- Customer demand signal: [X]% of inbound requests are integration/extension asks
- Competitor ecosystem size: [Competitor] has [X] apps, [X] developers
- Internal resource constraint: Would take [X] FTE to build top 10 customer requests in-house

### Strategic Decision
- Platform status: [Considering / Early Stage / Beta / Public / Mature]
- Platform thesis: "We believe [X] developers will build integrations that solve [Y use cases] we don't have time for"
- Go-to-market timeline: [e.g., "Beta launch with 50 developers in Q2, public marketplace in Q3"]

### Governance Framework
- Data access tier: [Read-only, read-write, custom data fields]
- Revenue share: [e.g., "Free tier: 70/30 split; Premium tier: 80/20 split"]
- Enforcement process: [Quick summary of how broken apps are handled]
- Security requirements: [e.g., OAuth2, data encryption, rate limits]

### Developer Experience Status
| Metric | Target | Current | Status |
|--------|--------|---------|--------|
| Time-to-first-API-call | <30 min | [X] min | ✓/✗ |
| Documentation coverage | 100% | [X]% | ✓/✗ |
| SDK availability | Python, JS, Go | [List] | ✓/✗ |
| Support response time | <24h | [X]h | ✓/✗ |
| Sandbox environment | Available | Yes/No | ✓/✗ |

### Ecosystem Health
- Active developers (monthly): [X] (trend: ↑/↓)
- Published apps: [X] (trend: ↑/↓)
- API calls/month: [X] (trend: ↑/↓)
- Developer NPS: [X] (target: >50)
- Churn rate: [X]% of developers per month

### Featured Integrations
1. **[App Name]** — [Use case], [X] users, [Impact]
2. **[App Name]** — [Use case], [X] users, [Impact]
3. **[App Name]** — [Use case], [X] users, [Impact]

### Community Activity
- Slack community members: [X]
- Support tickets/month: [X]
- Feature requests received: [X]
- Developer satisfaction: [Quote or sentiment]

### Business Impact (if applicable)
- Revenue from ecosystem: [X]
- Customers citing integrations as stickiness factor: [X]%
- Churn prevention: [X] customer accounts retained due to key integrations

### Roadmap (Next 90 Days)
- Developer experience: [e.g., "Launch Python SDK", "Improve webhook documentation"]
- Governance: [e.g., "Finalize revenue share model"]
- Ecosystem growth: [e.g., "Recruit 20 more beta developers"]
- Community: [e.g., "Launch developer office hours"]

### Risks and Mitigations
| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|-----------|
| [e.g., "App quality issues damage trust"] | High | High | [e.g., "Implement app review process"] |
| [e.g., "Developers can't find quality docs"] | Medium | High | [e.g., "Hire docs engineer"] |
| [e.g., "Marketplace revenue splits don't attract top devs"] | Medium | Medium | [e.g., "Provide co-marketing to top developers"] |
```

## Example

**Company:** BuildSync (project management platform for construction)

**Scenario:** BuildSync launched in 2020 as a vertical-specific project management tool. By 2024, they had 8,000 paying customers but growth was slowing. Customers repeatedly asked for QuickBooks integration, Slack notifications, and custom field types. BuildSync was considering a platform strategy.

### Market Evaluation

BuildSync surveyed 30 customers: 73% said integrations would make them less likely to switch to Procore or Monday.com. BuildSync's engineering team estimated 4-6 FTE for the top 10 integration requests over the next year.

Building the platform made economic sense: 4-6 FTE ≈ $600K-$900K in annual cost. An ecosystem of developers building integrations could deliver the same value at a fraction of the cost, with faster time-to-value.

### Phase 1: Beta (Q2 2024)

BuildSync designed a minimal governance framework:
- Read-only APIs (project data, task status, team members)
- Webhook events (task created, project updated)
- OAuth 2.0 authentication
- Revenue share: 70 developer / 30 BuildSync (if developers charge)
- Policy: no competing products, no data scraping, no spam

They documented the API (took 3 weeks), built a sandbox, and recruited 30 beta developers from their customer base.

Key integrations launched:
- **QuickBooks Sync** (built by a construction accountant) — import hours worked, push to payroll
- **Slack Notifications** (built by a BuildSync customer) — real-time task updates to Slack
- **Custom Fields** (built by BuildSync internally as a sample) — show how to extend data model

After 8 weeks: 25 developers actively building, 3 published apps, 800K+ API calls/month. Developer NPS: 47 (not great, but improving).

### Phase 2: Improvements (Q3 2024)

BuildSync addressed developer feedback:
- "API docs need examples" → Added 20 Postman examples
- "Webhook retries are failing" → Improved webhook reliability (went from 97% to 99.9% delivery)
- "Hard to debug in production" → Built a webhook replay tool in developer console
- "How do I monetize?" → Simplified revenue share setup

### Phase 3: Public Launch (Q4 2024)

BuildSync launched a public app marketplace. Criteria for publishing:
- App must pass security review (OAuth, data encryption)
- Must solve a real problem (e.g., "integrate with tool X")
- Must have documentation and support contact
- Rating system: other BuildSync users rate integrations

First 90 days of public marketplace:
- 12 new apps published
- 150+ new developers signed up
- 5M+ API calls/month (6x growth from beta)
- Developer NPS improved to 62
- 2 apps earning >$10K/month in revenue (80/20 split)
- 300 paying customers reporting "integrations influenced our renewal" in surveys

### Key Learnings

- **Developer-first mentality pays off:** When BuildSync prioritized developer experience (docs, sandbox, office hours), NPS and engagement jumped
- **Seed developers are co-creators:** The accountant who built QuickBooks Sync became BuildSync's top evangelist; they featured her in case studies and product updates
- **Revenue share is credibility:** The first apps earning real money proved developers could build viable businesses on BuildSync, attracting higher-quality developers
- **Ecosystem compounds growth:** Each new app made BuildSync more "sticky" and reduced churn; customers on 2+ integrations had 95% annual retention vs. 72% for single-product users

---

## Edge Cases

1. **Platform Too Early (No Product-Market Fit):** If your core product isn't stable or customers are churning for core feature gaps, a platform wastes resources. Fix the core product first. Platforms are for companies past the PMF phase, not those still searching.

2. **Ecosystem Cannibalization:** If a top developer builds a competing feature (e.g., advanced reporting) that outshines yours, you face a choice: kill the app (erode trust) or compete fairly (dilutes focus). Governance frameworks help prevent this, but some friction is inevitable. Plan for it; don't be caught off-guard.

3. **Low Developer Adoption:** If 6 months in you have <20 active developers, the platform may not be the right motion. Reasons: unfamiliar API patterns, missing SDKs, or simply that developers prefer your product to be closed and simple. Pivot to narrow integrations (pre-built only) rather than open platform.

4. **Quality Control at Scale:** As your marketplace grows to 100+ apps, maintaining quality becomes expensive. One malicious or broken app damages trust in the entire ecosystem. Invest in automated security scanning, user reviews, and quick removal processes.

5. **Revenue Models That Don't Work:** If marketplace apps don't generate revenue and you can't subsidize developers forever, growth stalls. Consider: free tools with premium support, freemium models where developers upgrade for higher rate limits, or co-marketing partnerships.

6. **Developer Churn:** If developers stop building after their first app, you've failed. Reasons: low user demand, unclear monetization, better platforms elsewhere. Track why developers churn and re-engage top performers with new opportunities.
