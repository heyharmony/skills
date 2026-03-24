---
name: "Write Product Requirements Doc"
description: "Create a comprehensive Product Requirements Document — problem, objectives, market segments, value propositions, solution spec, and release plan — from research, conversations, and product context. Trigger on: PRD, product requirements, feature spec, requirements document, product spec, write a PRD, product brief, feature brief."
dependencies: []
---

## Purpose

Write a complete, stakeholder-ready Product Requirements Document that communicates the what, why, and how of a product or feature initiative. When customer conversations, discovery calls, or research exist in Harmony, the PRD is grounded in real evidence — customer quotes, validated pain points, and observed behaviors — not assumptions. The output is structured to align engineering, design, leadership, and go-to-market teams around a single source of truth.

## When to Use

- Writing a PRD for a new product or feature from scratch
- Turning customer research and discovery calls into a formal spec
- Documenting requirements before kicking off engineering
- Reviewing or restructuring a messy existing PRD
- Preparing a feature brief for leadership or board approval

## Instructions

### 1. Gather context

Ask the user what they have. Don't start writing until you know:

- **What are we building?** Product, feature, enhancement, integration?
- **Why now?** What changed — customer demand, competitive pressure, strategic shift, new capability?
- **What data exists?** Customer interviews, discovery calls, survey results, usage analytics, competitive research?
- **Who are the stakeholders?** Engineering lead, design, PM, leadership, GTM?
- **What's the timeline?** Hard deadline, next sprint, next quarter, exploratory?
- **What constraints exist?** Technical debt, team size, regulatory, budget?

If conversations exist in Harmony, extract:
- Customer quotes that validate the problem
- Feature requests and how customers describe desired outcomes
- Objections or concerns raised about current solutions
- Competitor mentions and comparison points
- Priority signals — what customers say matters most

### 2. Write the PRD using the 8-section template

Write in clear, accessible language. A good PRD can be understood by anyone in the company — not just product and engineering. Avoid jargon. Use short sentences. Lead with "why" before "what."

#### Section 1: Summary
2–3 sentences covering: what we're building, who it's for, and why it matters. This is the elevator pitch for the entire initiative.

#### Section 2: Contacts
| Role | Name | Responsibility |
|------|------|---------------|
| Product Owner | [name] | Owns the PRD, makes final trade-off decisions |
| Engineering Lead | [name] | Technical feasibility, architecture, estimates |
| Design Lead | [name] | UX/UI, user flows, prototypes |
| Sponsor | [name] | Executive sponsor, budget, strategic alignment |
| Stakeholders | [names] | Input, review, approval |

#### Section 3: Background
- **Context:** What is this initiative about? What's the current state?
- **Why now:** What changed that makes this urgent or possible? (Market shift, customer demand, technical enablement, competitive threat)
- **What we've learned:** Key findings from customer conversations, research, or data. Cite specific evidence — quotes, metrics, patterns.
- **What we've tried:** Previous attempts, if any, and what we learned from them.

#### Section 4: Objective
- **Goal statement:** One clear sentence — what success looks like.
- **Strategic alignment:** How this connects to company vision and current priorities.
- **Key Results:** 3–5 measurable outcomes using SMART format.

| Key Result | Metric | Baseline | Target | Timeline |
|-----------|--------|----------|--------|----------|
| [KR1] | [metric] | [current] | [goal] | [by when] |
| [KR2] | [metric] | [current] | [goal] | [by when] |
| [KR3] | [metric] | [current] | [goal] | [by when] |

#### Section 5: Market Segments
- **Primary segment:** Who are we building for first? Be specific — role, company type, situation.
- **Secondary segment:** Who else benefits, but isn't the primary design target?
- **Not for:** Who is explicitly out of scope? (Prevents scope creep)
- **Segment evidence:** Customer quotes, data, or conversation patterns that validate these segments.

Note: Segments are defined by problems and jobs, not demographics. "Series B fintech that just hired a compliance officer" is a segment. "Companies with 50-200 employees" is a filter.

#### Section 6: Value Proposition
- **Customer jobs:** What are they trying to accomplish? (Functional, emotional, social)
- **Pain points:** What's broken, slow, expensive, or missing today?
- **Gains:** What does the ideal outcome look like for the customer?
- **Competitive advantage:** Why is our approach better than alternatives?
- **Value curve:** Where do we deliberately over-invest vs. under-invest compared to the market?

| Dimension | Market Standard | Our Approach | Why |
|-----------|----------------|-------------|-----|
| [dimension] | [what competitors do] | [what we do differently] | [strategic reason] |

#### Section 7: Solution

**7.1 User Experience**
- Key user flows (step-by-step)
- Wireframes or prototype references (if available)
- Interaction patterns and design principles
- Accessibility and edge case considerations

**7.2 Key Features**
For each feature:
| Feature | Description | Priority | Complexity | Segment |
|---------|------------|----------|-----------|---------|
| [feature] | [what it does and why] | [Must/Should/Could] | [S/M/L/XL] | [who it serves] |

**7.3 Technical Considerations** (if relevant)
- Architecture implications
- Integration requirements
- Performance and scalability needs
- Security and compliance requirements
- Data model changes

**7.4 Assumptions & Risks**

| Assumption | Confidence | How to Validate | Impact if Wrong |
|-----------|-----------|-----------------|-----------------|
| [assumption] | [High/Med/Low] | [validation method] | [consequence] |

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| [risk] | [H/M/L] | [H/M/L] | [what we'll do] |

#### Section 8: Release Plan
- **Scope philosophy:** What's in v1 vs. what we're explicitly deferring?
- **Release phases:**

| Phase | Scope | Goal | Timeline (relative) |
|-------|-------|------|-------------------|
| Alpha / Internal | [minimal scope] | [validate core assumption] | [T + X weeks] |
| Beta / Limited | [expanded scope] | [validate with real users] | [T + Y weeks] |
| GA / Full launch | [full scope] | [market launch] | [T + Z weeks] |

- **What's NOT in v1:** Explicitly list deferred items so stakeholders don't assume they're included.
- **Success criteria for each phase:** What must be true before moving to the next phase?
- **Dependencies:** What needs to happen outside the team for this to ship?

### 3. Review and polish

Before delivering the PRD:
- Every claim should have evidence (customer quote, data point, or explicit assumption label)
- Every feature should trace back to a customer job or pain point
- Assumptions are clearly flagged, not hidden in confident statements
- The document can be read and understood by someone outside the product team
- Nothing is ambiguous enough to be interpreted two different ways by engineering

## Output Format

The full PRD as a structured markdown document following the 8-section template above. Include a table of contents at the top for documents longer than 3 pages.

```markdown
# PRD: [Product/Feature Name]
_Version [X.X] · [Date] · Author: [Name]_

## Table of Contents
1. [Summary](#1-summary)
2. [Contacts](#2-contacts)
3. [Background](#3-background)
4. [Objective](#4-objective)
5. [Market Segments](#5-market-segments)
6. [Value Proposition](#6-value-proposition)
7. [Solution](#7-solution)
8. [Release Plan](#8-release-plan)

---

[Full 8-section PRD content]
```

## Example

**User:** "Write a PRD for a team inbox feature in our customer support tool. We've been hearing about it on customer calls — check my recent meetings."

**Output:**

```markdown
# PRD: Team Inbox
_Version 1.0 · 2026-03-05 · Author: Product Team_

## Table of Contents
1. Summary
2. Contacts
3. Background
4. Objective
5. Market Segments
6. Value Proposition
7. Solution
8. Release Plan

---

## 1. Summary
Team Inbox brings all customer conversations — email, chat, and social — into a single shared view where support teams can assign, collaborate, and resolve without switching tools. Based on 14 customer interviews, this is the #1 requested feature and the primary reason three Enterprise prospects paused evaluation.

## 2. Contacts
| Role | Name | Responsibility |
|------|------|---------------|
| Product Owner | Maria Chen | PRD ownership, trade-off decisions |
| Engineering Lead | James Park | Architecture, feasibility, sprint planning |
| Design Lead | Sara Ahmed | UX research, wireframes, prototypes |
| Sponsor | David Liu (VP Product) | Strategic alignment, budget approval |
| Stakeholders | Sales (Tom), CS (Nina), Eng (Platform team) | Input and review |

## 3. Background

**Context:** Our support tool currently handles email tickets well, but customers manage chat and social messages in separate tools. Support agents context-switch between 3–4 tools per shift.

**Why now:** Three things changed:
1. Enterprise prospects (Acme, GlobalTech, Relay) explicitly paused evaluation because we lack a unified inbox. Combined pipeline at risk: $180K ARR.
2. Competitors (Front, Intercom) shipped unified views in Q4 2025 — it's becoming table stakes.
3. Our new messaging infrastructure (shipped Q1) makes multi-channel ingestion technically feasible for the first time.

**What we've learned from customer conversations:**
> "My team has Zendesk for email, Intercom for chat, and Hootsuite for social. Nobody knows the full picture of any customer." — Head of Support, Acme Corp (call 2/12)
> "I'd pay 40% more for your tool if it could replace the three tools we're using." — CS Director, GlobalTech (call 2/18)
> "We literally have a Slack channel called #who-talked-to-this-customer-last." — Support Lead, Relay (call 2/24)
_Source: Customer calls, Feb 2026 in Harmony_

## 4. Objective

**Goal:** Give support teams a single view of every customer conversation across channels, reducing tool-switching and improving response time.

**Strategic alignment:** Directly supports our "platform consolidation" strategy and unblocks Enterprise segment expansion.

| Key Result | Metric | Baseline | Target | Timeline |
|-----------|--------|----------|--------|----------|
| Reduce avg. first-response time | Minutes to first reply | 12 min | 6 min | 90 days post-GA |
| Increase Enterprise pipeline conversion | Paused deals reactivated | 0/3 | 3/3 | 60 days post-GA |
| Reduce support tool count per team | Avg. tools used | 3.4 | 1.5 | 6 months post-GA |

## 5. Market Segments

**Primary:** Mid-market support teams (10–50 agents) managing customer conversations across 3+ channels, where no single person has the full customer picture.

**Secondary:** SMB support teams (2–10 agents) outgrowing shared Gmail inboxes and basic helpdesk tools.

**Not for:** Enterprise teams with 200+ agents requiring workforce management, advanced routing, or HIPAA-compliant telephony. That's phase 2.

## 6. Value Proposition

**Customer jobs:** See every customer conversation in one place. Know what a customer said on chat before replying to their email. Assign and collaborate without forwarding threads.

**Pain points:**
| Pain | Current Workaround | Cost |
|------|-------------------|------|
| No unified customer view | Agents search 3-4 tools per inquiry | 8+ minutes per ticket |
| Messages fall through cracks | Manual Slack coordination | 15% of messages get duplicate or no response |
| Can't report across channels | Export and merge spreadsheets monthly | CS lead spends 5 hrs/week on reporting |

**Competitive advantage:** Unlike Front (email-first) or Intercom (chat-first), we treat all channels as equal citizens in a single conversation thread per customer.

## 7. Solution

**7.1 User Experience**
- **Unified timeline:** Single chronological view of all messages with a customer, regardless of channel. Channel badges (email, chat, social) on each message.
- **Smart assignment:** Assign conversations to agents or teams. Auto-route by channel, topic, or customer segment.
- **Collaboration:** Internal notes on any conversation. @mention teammates. Collision detection (see who's already replying).
- **Quick actions:** Reply, assign, snooze, close — keyboard shortcuts for everything.

**7.2 Key Features**
| Feature | Description | Priority | Complexity | Segment |
|---------|------------|----------|-----------|---------|
| Unified conversation view | All channels in one chronological thread per customer | Must | L | All |
| Multi-channel compose | Reply via the same channel the customer used | Must | M | All |
| Team assignment & routing | Assign to agent/team, auto-route rules | Must | M | Mid-market |
| Internal notes & @mentions | Collaborate without the customer seeing | Must | S | All |
| Collision detection | See when another agent is already replying | Should | S | Mid-market |
| SLA tracking | Track response/resolution time by channel | Should | M | Mid-market |
| Saved replies & macros | Templated responses per channel | Could | S | All |
| Analytics dashboard | Response times, volume, CSAT by channel | Could | M | Mid-market |

**7.4 Assumptions & Risks**
| Assumption | Confidence | Validation | Impact if Wrong |
|-----------|-----------|------------|-----------------|
| Teams want all channels in one view (not per-channel tabs) | High — 11/14 interviews confirmed | Beta feedback | Redesign the core UX |
| Auto-routing reduces assignment time by 50% | Medium | Beta metrics | Feature is nice-to-have, not transformative |
| Social channels (Twitter, Instagram DMs) can be ingested via existing APIs | Medium | Engineering spike (week 1) | Delay social; launch with email + chat only |

## 8. Release Plan
| Phase | Scope | Goal | Timeline |
|-------|-------|------|---------|
| Alpha | Email + chat in unified view, manual assignment | Validate core UX with 5 internal teams | T + 4 weeks |
| Beta | Add social channels, auto-routing, collision detection | Validate with 10 external teams including Acme, GlobalTech | T + 8 weeks |
| GA | Full feature set, analytics, saved replies | Market launch, reactivate paused Enterprise deals | T + 12 weeks |

**Not in v1:** Telephony integration, AI-suggested replies, workforce management, HIPAA mode.

**Dependencies:** Messaging infrastructure team completes social channel API connectors (committed for T + 3 weeks).
```

## Edge Cases

- **User has no customer data — just an idea:** Build the PRD with explicit assumption labels on every claim. Add a "Validation Plan" section at the end recommending 5–10 discovery conversations before committing engineering resources.
- **User wants a PRD for an internal tool:** Adapt market segments to internal teams/users. Replace "value proposition" with "operational impact." Keep the same rigor — internal tools deserve good PRDs too.
- **PRD is for a small feature, not a product:** Scale down — skip sections that don't apply (may not need Market Segments for a button redesign). But keep Objective, Solution, and Release Plan.
- **User provides a messy existing PRD to restructure:** Read it, identify what's missing from the 8-section template, and rewrite it into the proper structure. Flag gaps rather than inventing answers.
- **User wants a PRD but has conflicting stakeholder requirements:** Document conflicting requirements explicitly in a "Open Questions" section. Recommend a stakeholder alignment meeting before finalizing.
- **User provides Linear/Jira tickets instead of narrative:** Synthesize tickets into the PRD structure. Group related tickets into features, extract the "why" that tickets often miss, and flag tickets that don't clearly connect to a customer problem.
