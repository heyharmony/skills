---
name: "Build Go-to-Market Strategy"
description: "Build a go-to-market strategy — channels, messaging, metrics, and launch timeline — grounded in customer conversations, discovery calls, and market research. Trigger on: GTM strategy, go-to-market plan, launch strategy, market entry plan, GTM playbook, product launch plan."
dependencies: []
author: "Harmony"
version: "1.0.0"
icon: "sparkles"
cover: ""
screenshots: []
category: "Product"
---

## Purpose

Build a structured, evidence-based go-to-market strategy for a product, feature, or market entry. When conversation data is available — discovery calls, sales recordings, customer interviews — the strategy is grounded in what prospects and customers actually said. When it's not, the skill works from provided context and asks the right questions to fill the gaps.

## When to Use

- Planning a new product or feature launch
- Entering a new market segment or geography
- Rebuilding GTM after a pivot or repositioning
- Creating the first GTM plan for an early-stage product
- Preparing a launch brief for leadership sign-off

## Instructions

### 1. Gather context

Start by asking what the user already has. Don't assume — ask:

- **What are you launching?** Product, feature, expansion, repositioning?
- **Who is it for?** Segment, persona, company size, geography?
- **What's the timeline?** Hard deadline or flexible?
- **What data do you have?** Customer interviews, discovery calls, survey results, competitive research?
- **What constraints exist?** Budget, team size, channel limitations?

If the user points to specific meetings or transcripts in Harmony, pull insights from them:
- Customer language and pain points (verbatim quotes)
- Objections and hesitations raised during discovery
- Competitor mentions and how prospects position alternatives
- Buying signals and decision criteria mentioned on calls

### 2. Define the market position

Using available data, define:

- **Target segment** — Who exactly, and why them first?
- **Core problem** — What pain exists, in the customer's own words when available?
- **Value proposition** — One sentence: what changes for them?
- **Key differentiators** — Why you vs. alternatives? Ground in real objections if conversation data exists.
- **Positioning statement** — For [target], [product] is the [category] that [key benefit] unlike [alternative] because [reason to believe].

### 3. Select and prioritize channels

Recommend 3–5 channels ranked by fit. For each channel:

- **Why this channel** — Evidence for audience presence
- **What to do there** — Specific tactic, not just the channel name
- **Expected effort** — Low / Medium / High
- **Time to impact** — Days / Weeks / Months
- **Dependency** — What needs to be true for this to work?

Channel categories to evaluate:
- Product-led (free tier, viral loops, community)
- Content & inbound (SEO, thought leadership, social)
- Outbound & sales (direct outreach, partnerships, events)
- Paid acquisition (search, social, display, sponsorships)
- Community & ecosystem (forums, integrations, developer relations)

### 4. Develop messaging

Create messaging for the primary persona:

- **Headline** — The one line on the landing page
- **Supporting statement** — 1–2 sentences expanding the value
- **3 proof points** — Why believe it? Use customer quotes from conversations when available
- **Objection handling** — Top 3 objections and responses, grounded in real conversations if data exists
- **CTA** — What you want them to do next

If conversation data is available, include a "Voice of Customer" section with direct quotes that should inform copy.

### 5. Define success metrics

For each phase, define specific KPIs:

**Pre-launch (awareness)**
- Target metric, current baseline, goal, measurement method

**Launch (activation)**
- Target metric, current baseline, goal, measurement method

**Post-launch (growth)**
- Target metric, current baseline, goal, measurement method

Always include: CAC target, conversion funnel benchmarks, and a "North Star" metric for the launch.

### 6. Build the launch timeline

Create a phased plan:

- **T-minus 4–6 weeks** — Positioning locked, channels prepped, content pipeline started
- **T-minus 2 weeks** — Soft launch to beta/waitlist, collect early feedback
- **Launch week** — Coordinated push across selected channels
- **T-plus 2 weeks** — First metrics review, optimize messaging
- **T-plus 30 days** — Full retrospective, double down or pivot

Adjust timeline to match user's stated constraints.

## Output Format

```markdown
# GTM Strategy — [Product/Feature Name]
_Prepared [date] · Target launch: [date]_

## Executive Summary
[2–3 sentences: what we're launching, for whom, and the core bet we're making]

## Market Position
- **Target segment:** [segment]
- **Core problem:** [problem — customer quote if available]
- **Value proposition:** [one sentence]
- **Positioning:** For [target], [product] is the [category] that [benefit] unlike [alt] because [reason].

## Voice of Customer
> "[Direct quote from conversation]" — [Role, Company]
> "[Direct quote from conversation]" — [Role, Company]
_Source: [meeting name/date in Harmony]_

## Channel Strategy
| Priority | Channel | Tactic | Effort | Time to Impact |
|----------|---------|--------|--------|----------------|
| 1 | [channel] | [specific tactic] | [L/M/H] | [days/weeks/months] |
| 2 | [channel] | [specific tactic] | [L/M/H] | [days/weeks/months] |
| 3 | [channel] | [specific tactic] | [L/M/H] | [days/weeks/months] |

## Messaging
**Headline:** [headline]
**Supporting:** [1-2 sentences]
**Proof points:**
1. [proof point]
2. [proof point]
3. [proof point]

**Top objections:**
| Objection | Response | Evidence |
|-----------|----------|----------|
| [objection] | [response] | [conversation reference if available] |

## Success Metrics
| Phase | Metric | Baseline | Target | How Measured |
|-------|--------|----------|--------|--------------|
| Pre-launch | [metric] | [current] | [goal] | [method] |
| Launch | [metric] | [current] | [goal] | [method] |
| Post-launch | [metric] | [current] | [goal] | [method] |

**North Star:** [single metric that defines launch success]

## Launch Timeline
| Week | Phase | Key Activities | Owner | Deliverable |
|------|-------|---------------|-------|-------------|
| T-6 | Prep | [activities] | [role] | [deliverable] |
| T-4 | Prep | [activities] | [role] | [deliverable] |
| T-2 | Soft launch | [activities] | [role] | [deliverable] |
| T-0 | Launch | [activities] | [role] | [deliverable] |
| T+2 | Optimize | [activities] | [role] | [deliverable] |
| T+4 | Scale | [activities] | [role] | [deliverable] |

## Risks & Mitigations
| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| [risk] | [H/M/L] | [H/M/L] | [action] |

## Next Steps
1. [Immediate action]
2. [This week]
3. [Before launch]
```

## Example

**User:** "Build me a GTM strategy for our new API analytics product. We're targeting mid-market engineering teams. I've done about 10 discovery calls — check my recent meetings."

**Output:**

```markdown
# GTM Strategy — Pulse API Analytics
_Prepared 2026-03-05 · Target launch: 2026-04-15_

## Executive Summary
Pulse helps mid-market engineering teams (100–1,000 employees) understand API usage patterns, catch breaking changes early, and reduce debugging time. Based on 10 discovery calls, the core bet is that engineering managers will pay to replace stitched-together internal dashboards with a purpose-built tool.

## Market Position
- **Target segment:** Mid-market engineering teams (Series B–D, 100–1,000 employees)
- **Core problem:** "We built three internal tools to monitor our APIs and they still don't talk to each other" — VP Engineering, CloudSync
- **Value proposition:** See every API call, catch every breaking change, fix issues before your customers notice.
- **Positioning:** For mid-market engineering teams, Pulse is the API analytics platform that replaces fragile internal dashboards with real-time observability — unlike Datadog, which requires a dedicated platform team to configure.

## Voice of Customer
> "We spend 8 hours a week just figuring out which API version broke what." — Sr. Engineer, Modular
> "Datadog does everything, which means it does nothing well for our API-specific needs." — VP Engineering, CloudSync
> "If I could see exactly which customers hit deprecated endpoints, I'd save my team 20 hours a month." — CTO, Relay
_Source: Discovery calls, Feb 2026 in Harmony_

## Channel Strategy
| Priority | Channel | Tactic | Effort | Time to Impact |
|----------|---------|--------|--------|----------------|
| 1 | Product-led | Free tier for teams <5 with self-serve onboarding | High | 4–8 weeks |
| 2 | Content | "API debugging horror stories" blog series + dev community posts | Medium | 6–10 weeks |
| 3 | Outbound | Direct outreach to ICP companies using LinkedIn + warm intros | Medium | 2–4 weeks |

## Messaging
**Headline:** Stop guessing which API broke production.
**Supporting:** Pulse gives engineering teams real-time visibility into every API call, version conflict, and breaking change — without building another internal tool.

**Proof points:**
1. Catches breaking changes 4x faster than manual monitoring
2. Replaces 3+ internal dashboards with one view
3. 10-minute setup, no dedicated platform team required

**Top objections:**
| Objection | Response | Evidence |
|-----------|----------|----------|
| "We already use Datadog" | Datadog monitors infrastructure. Pulse monitors API behavior — versions, deprecations, consumer impact. Complementary, not competitive. | 6/10 discovery calls mentioned Datadog; all said it doesn't solve API-specific problems |
| "We can build this ourselves" | You can — and 8/10 teams we talked to did. They all said it took 3+ months and still has gaps. | "We've rebuilt our API dashboard twice and it still misses edge cases" — CTO, Relay |
| "Is this just another dashboard?" | It's an API-aware engine. Dashboards show data. Pulse detects breaking changes, maps consumer dependencies, and alerts before customers complain. | Discovery call pattern: teams want prevention, not just visibility |

## Success Metrics
| Phase | Metric | Baseline | Target | How Measured |
|-------|--------|----------|--------|--------------|
| Pre-launch | Waitlist signups | 0 | 200 | Landing page form |
| Launch | Free tier activations (week 1) | 0 | 50 | Product analytics |
| Post-launch | Free → Paid conversion (60 days) | 0% | 8% | Billing system |

**North Star:** Weekly active teams with ≥1 alert configured

## Launch Timeline
| Week | Phase | Key Activities | Owner | Deliverable |
|------|-------|---------------|-------|-------------|
| T-6 | Prep | Finalize positioning, build landing page | Marketing | Landing page live |
| T-4 | Prep | Write 3 blog posts, set up outbound sequences | Content + Sales | Content calendar |
| T-2 | Soft launch | Invite 20 discovery call participants to beta | Product | Beta feedback |
| T-0 | Launch | Product Hunt, blog post, LinkedIn push, email waitlist | All hands | Launch day metrics |
| T+2 | Optimize | Review activation funnel, adjust onboarding | Product | Funnel report |
| T+4 | Scale | Double down on top channel, launch referral program | Growth | 30-day retro |

## Risks & Mitigations
| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| Low free-tier activation | Medium | High | Simplify onboarding to <5 min; add interactive demo |
| Datadog launches competing feature | Low | High | Move fast; deepen API-specific features they can't match |
| Engineering teams too busy to try new tools | High | Medium | Offer white-glove onboarding for first 50 teams |

## Next Steps
1. Lock positioning and share with team for feedback (this week)
2. Build landing page and waitlist (next week)
3. Invite discovery call participants to private beta (T-2)
```

## Edge Cases

- **No conversation data available:** Work entirely from user-provided context. Ask deeper questions about target audience, competitive landscape, and constraints. Flag that the strategy would be stronger with customer conversation evidence.
- **Very early stage / pre-product:** Focus on validation strategy before full GTM. Recommend a "learn launch" — small-scale channel test to validate messaging and demand before committing resources.
- **Launching into a crowded market:** Add a competitive positioning matrix. Pull competitor mentions from conversations if available. Emphasize differentiation in messaging section.
- **No clear timeline:** Default to a 6-week launch framework. Flag that timeline should be adjusted once dependencies are clearer.
- **User asks for GTM for an internal tool or process:** Adapt to internal launch — replace external channels with internal comms, replace CAC with adoption metrics, replace revenue with usage/satisfaction.
