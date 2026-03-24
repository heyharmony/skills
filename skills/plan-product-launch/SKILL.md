---
name: "Plan Product Launch"
description: "Coordinate a phased product launch — pre-launch buzz, launch day execution, and 30-day momentum — using Owned/Rented/Borrowed channel strategy. Mines cross-functional meeting discussions to catch dropped commitments and align timelines. Trigger on: product launch, launch plan, launch strategy, go-live plan, feature launch, release strategy, launch checklist, Product Hunt launch, launch timeline."
dependencies: []
---

## Purpose

Most product launches don't fail because of a bad product—they fail because the left hand doesn't know what the right hand is doing. Your product team says launch is Tuesday. Marketing thinks it's Wednesday and is planning a press embargo for Thursday. Sales is already pitching it to customers without messaging guidelines. The timeline exists in three different Slack channels and a lost email thread. This skill changes that. It mines launch-related commitments, timelines, and owner assignments from product reviews, marketing syncs, sales enablement calls, engineering standups, and leadership updates. It surfaces the dropped commitments, conflicting timelines, and missing owners. Then it builds a single coordinated launch plan with clear phases, assigned owners, day-of execution steps, and post-launch momentum—so nothing falls through the cracks.

## When to Use

- **New product launch**: Launching a net-new product line or service into market
- **Major feature release**: Rolling out a significant feature that needs cross-functional coordination
- **Pricing change rollout**: Communicating and selling pricing/packaging updates to customers
- **Market expansion**: Launching into a new geography, vertical, or customer segment
- **Product Hunt launch**: Coordinating the special case of a curated launch event
- **Beta to GA transition**: Moving from closed/open beta to general availability
- **Rebrand or positioning shift**: Launching a refreshed brand, name, or market positioning

## Instructions

1. **Mine meeting transcripts for launch-related commitments, timelines, and owners** — Search for launch, go-live, release, launch day, and feature announcement across your recent meeting transcripts. Extract every commitment (e.g., "I'll have the press list by Friday"), every stated deadline (e.g., "launch is March 30th"), and every owner assignment. Create a simple table: Commitment | Owner | Stated Deadline | Status.

2. **Define launch tier** — Classify this launch into one of three tiers based on scope and audience impact. Tier 1 (Full Campaign): new product, major feature, reposition. Tier 2 (Targeted Push): incremental feature, customer segment update. Tier 3 (Changelog + Email): bug fix, minor feature, internal-only. Tier determines channel investment, team size, and day-of complexity.

3. **Map channels using ORB framework** — List every channel you'll use to reach customers and split them into three buckets. Owned (you control 100%): website, blog, email list, documentation, customer community. Rented (you pay for access): paid ads, sponsored content, email partnerships. Borrowed (you earn through relevance): press mentions, analyst reviews, influencer coverage, Product Hunt, social shares. For each channel, note: responsible owner, launch messaging, creative assets needed, timeline for activation.

4. **Build 3-phase timeline** — Create three clear phases with specific date ranges. Pre-Launch (T-30 to T-7): content prep, asset creation, internal enablement, press outreach, channel seeding. Launch Week (T-7 to T+1): press releases, campaign go-live, day-of execution, launch announcement. Momentum (T+1 to T+30): drip content, case studies, user stories, engagement campaigns, iteration cycles. Assign start and end dates to each phase.

5. **Assign owners and deadlines for every deliverable** — Go through each phase and deliverable (e.g., "write launch email," "create Product Hunt landing page," "brief sales team," "schedule tweets"). For each, write: what, owner, deadline, status. Cross-reference the commitments from step 1—if someone committed to a deliverable in a meeting, they own it. Flag items without owners or with conflicting dates.

6. **Create day-of execution checklist with hour-by-hour rundown** — Assume launch day is 9 AM. Map every action from 8 AM go-live prep through 5 PM monitoring and response. Examples: 8:00 AM, Ops team verifies servers ready; 9:00 AM, send launch email; 9:15 AM, publish blog post; 9:30 AM, post to social; 10:00 AM, sales team sends direct outreach; 11:00 AM, monitor support queue; 2:00 PM, early metrics check-in. Include who owns each action and escalation path if something breaks.

7. **Define success metrics per phase** — Pre-Launch: press list size, email list growth, content pieces published. Launch Day: uptime, email open rate, launch page traffic, signup/conversion rate. Momentum: week-1 signups, week-1 feature activation, press mentions, social reach, customer feedback sentiment. Set baseline targets and owners for tracking.

8. **Build 30-day post-launch momentum plan** — Day 1–7: respond to early feedback, celebrate wins in social/email, publish case studies. Day 8–14: drip user stories, optimize based on early data, run engagement campaigns for stragglers. Day 15–30: iterate product based on feedback, publish deeper content (webinars, podcasts), expand paid advertising. Include cadence, owners, and content ideas.

9. **Flag risks and dependencies** — Review the full plan for: commitments without assigned owners, deadlines that conflict between teams, channels with no owner, unclear messaging, dependencies (e.g., "press embargo depends on final pricing"). For each risk, write: what could go wrong, probability (high/medium/low), impact, mitigation step.

## Output Format

Your final launch plan should contain:

1. **Launch Tier Decision** — Tier 1/2/3 classification with 2–3 sentence justification
2. **ORB Channel Map** — Table with Owned | Rented | Borrowed channels, owner, messaging angle, assets needed, go-live date
3. **3-Phase Timeline** — Visual timeline (or table) with Pre-Launch, Launch Week, Momentum phases, key milestones, and owners
4. **Deliverables Checklist** — Spreadsheet-style list: deliverable, owner, deadline, status, dependencies. Color-code by phase.
5. **Day-of Execution Checklist** — Hour-by-hour plan from 8 AM to 5 PM with action, owner, success criteria, and escalation path
6. **Success Metrics Dashboard** — Table with Phase | Metric | Target | Owner | Current | Status
7. **30-Day Momentum Plan** — Weekly breakdown of content, campaigns, and iteration cycles
8. **Risk Register** — Table with Risk | Probability | Impact | Mitigation | Owner

## Example: Stackline API Monitoring Launch

Stackline is a developer-focused observability startup. They're launching a new feature: real-time API error alerting. Let's trace how this skill works:

**Meeting Excerpts (Mined from transcripts):**

- Product standup (March 5): "API alerting is feature-complete. Soft launch to beta users by March 20. Hard launch March 27." — Owner: Product team
- Marketing sync (March 6): "We need a blog post, Product Hunt prep... I can handle the post-launch drip. [Pause.] Wait, who's running Product Hunt?" — [Uncertainty, no clear owner]
- Sales enablement (March 8): "Sales team wants the feature brief by March 25. We need battlecards. I'll draft something." — Owner: Sarah (Marketing) — Deadline: March 25
- Exec standup (March 10): "Launch is March 27. Pricing discussion not finalized yet." — [Dependency risk flagged]
- Press outreach (March 12): "I've got 15 journalists lined up for embargo. Story goes live March 27 at 9 AM." — Owner: PR — Deadline: March 27, 9 AM

**Coordinated Launch Plan Built:**

| Tier | Classification |
|------|---|
| **Tier 1** | Major feature, new market angle (first API monitoring for Stackline), cross-functional effort |

| Owned Channels | Rented Channels | Borrowed Channels |
|---|---|---|
| Blog post (Product), Email (Marketing), Docs update (Eng) | Paid LinkedIn ads targeting DevOps (Media), Sponsorship of API monitoring newsletter (Media) | Product Hunt (Founder), Press mentions (PR), Dev community (Twitter, Hacker News) |

**3-Phase Timeline:**

- **Pre-Launch (T-30 to T-7):** Blog outline (March 15), Product Hunt prep (March 18), sales battlecards (March 25), press embargo setup (March 20), internal team enablement (March 24)
- **Launch Week (T-7 to T+1):** Product Hunt launch (March 27, 10 AM), blog publish (March 27, 9:15 AM), email campaign (March 27, 9:30 AM), press embargo lifts (March 27, 9 AM), sales outreach begins (March 27, 10 AM)
- **Momentum (T+1 to T+30):** Customer story interviews (March 28–April 5), webinar planning (April 2), iteration based on feedback (April 8), expanded ad spend (April 10), week-4 recap email (April 27)

**Day-of Execution Checklist (March 27):**

| Time | Action | Owner | Success Criteria |
|------|--------|-------|---|
| 8:00 AM | Verify production environment, API response times < 100ms | Eng | All systems green, Slack confirmation |
| 8:30 AM | PR confirms press embargo lift at 9 AM | PR | Embargo lifted, 15+ journalists notified |
| 9:00 AM | Publish blog post | Product | Live on website, no 404s |
| 9:15 AM | Send launch email to customer base (5K contacts) | Marketing | Email delivered, 30%+ open target |
| 9:30 AM | Post launch announcement to Twitter, LinkedIn, Hacker News | Marketing | 3+ posts live, links verified |
| 10:00 AM | Sales team begins direct outreach to top 50 accounts | Sales | CRM logged with call notes |
| 11:00 AM | Monitor support queue for issues | Support | Response time < 2 hours, escalate to Eng if bugs |
| 2:00 PM | Metrics check-in call (30 min): signups, Product Hunt rank, email engagement, press mentions | Leadership | Track trending, identify issues |
| 5:00 PM | End-of-day recap: wins logged, issues documented, day-2 priorities set | Leadership | Handoff to overnight monitoring |

**Success Metrics:**

| Phase | Metric | Target | Owner | Day-of Status |
|-------|--------|--------|-------|---|
| Launch Day | Website uptime | 99.9%+ | Eng | Green |
| Launch Day | Email open rate | 35%+ | Marketing | 38% |
| Launch Day | Blog page views | 1,200+ | Product | 1,450 |
| Launch Day | New signups | 150+ | Sales | 173 |
| Launch Day | Press mentions | 8+ | PR | 12 |
| Week 1 | Feature activation rate (of new signups) | 40%+ | Product | TBD |
| Week 4 | Feature adoption rate (of customer base) | 12%+ | Product | TBD |

**Risk Register:**

| Risk | Probability | Impact | Mitigation | Owner |
|------|---|---|---|---|
| Pricing still not finalized | Medium | High (messaging confusion) | Decision by March 24, communicate to teams by March 25 | Head of Product |
| Product Hunt no clear owner initially | Medium | Medium (missed momentum) | Founder assigned as owner March 10, pre-launch guide created | Founder |
| Press embargo miscommunication | Low | High (credibility risk) | PR confirms all 15 journalists by March 26 | PR |
| API performance under load | Low | High (launch failure) | Load testing March 24, infra scaling plan ready | Eng |

## Edge Cases

1. **No marketing team (founder-led launch)** — Founder becomes owner of ORB channels and day-of checklist. Prioritize Borrowed (press, communities, existing users) over Rented (paid ads). Pre-launch: identify 3–5 communities where the founder can be present. Automation tools (Buffer, Zapier) reduce manual load.

2. **Launch date moved up** — Re-run steps 4 and 5 immediately. Drop non-critical deliverables (e.g., full launch video → 60-second teaser). Notify all owners of new deadline via sync meeting (don't rely on async). Escalate any blocked items same-day.

3. **Competitor launches first** — Reassess positioning and messaging (step 2). Emphasize differentiation in all ORB channels. Pivot momentum plan (step 8) to capture users comparing solutions. Accelerate sales outreach to accounts in competitor's motion.

4. **Low existing audience** — Shift ORB investment toward Borrowed and Rented channels (step 3). Identify 5–10 influencers, journalists, or communities where target audience gathers. Pre-launch: build relationships. Launch day: coordinate with influencers for amplification. Extend momentum plan to 60 days to compound reach.

5. **International launch** — Define launch phases per region/timezone (step 4). Translate messaging and assets for each region (step 2). Stagger go-live times to manage server load and timezone coverage. Assign regional owners for press, community, and customer outreach. Risk: timezone coordination; mitigation: written playbooks, async decision-making.

6. **Product not feature-complete at launch date** — Define a "minimum viable launch": what ships, what's beta, what's post-launch. Update messaging (step 2) to be honest about scope. Adjust success metrics (step 7) to match reality. Communicate delays to sales and customers proactively to avoid credibility damage.
