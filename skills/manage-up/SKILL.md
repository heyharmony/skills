---
name: "Manage Up"
description: "Communicate effectively with your manager and leadership, positioning yourself as an ally who reduces their burden. What it does: Structures how you communicate with managers and executives to get what you need and help them succeed. When to use it: Before meetings with leadership, when preparing updates, or when you need something from them. Trigger on: manage up, executive communication, skip-level, all-hands prep, company all-hands, executive update, raising an issue, recommendation to leadership."
dependencies: []
connectors:
  - name: "Slack"
    reason: "Enables async updates and quick unblocking from leadership"
  - name: "Google Calendar"
    reason: "Syncs meetings with leadership and time blocks for update prep"
  - name: "Notion"
    reason: "Stores running updates, recommendations, and leadership communication history"
  - name: "Google Drive"
    reason: "Pulls context on company strategy and executive priorities"
---

## Purpose

Your manager is a resource. Not someone to manage around or fear, but a lever to unblock work, align with strategy, and get what you need to succeed. Managing up means understanding what they care about, communicating with precision, bringing solutions not just problems, and positioning yourself as someone who reduces their burden. This skill helps you build that relationship intentionally.

## When to Use

- Before preparing a presentation or update for your manager or leadership
- When you need something from them (resources, decision, political cover)
- To prepare a difficult or risky recommendation that needs buy-in
- Before a skip-level or all-hands meeting with executives
- When you sense misalignment and need to reset expectations
- To structure your regular communication in a way that lands

## Instructions

1. **Understand Your Manager Two Levels Up.** Your manager reports to someone. Understand that person's priorities, pressures, and style. This context helps you communicate in a way that resonates through your manager upward. What keeps the CEO up at night? How does your manager's manager make decisions? What does she optimize for?

2. **Position Yourself as an Ally Who Reduces Their Burden.** Your manager is overloaded. They have 15 people, board pressure, their own boss, and a thousand fires. Show up as someone who solves problems, doesn't create them. "Here's the issue, here's my recommended solution, here's the data supporting it. I need your decision on X by Friday."

3. **Proactively Communicate Before Being Asked.** Don't wait for your manager to ask about the project. Send updates. Use structured formats: HPM (Highlights: wins and momentum, Priorities: what's next, Metrics: numbers that matter). One message, clear picture, async so they can absorb it. This prevents anxiety and last-minute surprises.

4. **Bring Recommendations, Not Just Problems.** Never bring a problem without a recommendation. "Here's what's happening. Here's what I think we should do. Here's the trade-off. What's your view?" This saves your manager time and shows competence. They can debate your recommendation, not solve your problem.

5. **Use Structured Communication Formats.** HPM (Highlights-Priorities-Metrics) is your baseline. For bigger updates: write a one-pager with executive summary, context, your recommendation, trade-offs, and decision needed. For decisions: data-first, then options, then your recommendation. Use artifacts (dashboards, docs, models), not just words.

6. **Start with Chapter 1 for Executives.** When communicating with your manager or their boss, lead with the headline and key insight. If they want details, they'll ask. "Revenue grew 12% YoY. The driver was enterprise segment (+18%), offset by SMB decline (-6%). Here's what we're doing about SMB." Then pause. Don't dump the whole story upfront.

7. **Use Concrete Artifacts, Not Words.** A dashboard is better than a status update. A doc with the decision framework is better than a conversation. A model showing the financial impact is better than "I think we should X." Artifacts are sticky and shareable. They reduce misunderstanding. They scale your influence.

8. **Run Experiments to Challenge Opinions.** When leadership has a hunch but you think they're wrong, don't argue. Run a small experiment. "Let's test this with 10% of users and see what the data says." This is how you challenge with evidence, not emotion. Executives respect this.

9. **Understand the Spirit, Then Offer Better Options.** When your manager gives you direction you think is wrong, don't just push back. Understand what they're trying to accomplish (the spirit). Then offer a different path that accomplishes the same spirit better. "I get that you want to ship fast. Here's how we can ship faster while also reducing risk."

10. **Track and Reference the U-Curve of Founder Involvement.** Early-stage founders are hands-on. As you hire and scale, great founders step back. But they step back in because they're needed again. Understand where your manager is in that curve. Is she trying to let go but anxious? Stepping back too much? Adjust how much input you seek and how much independence you take.

11. **Say What You'll Do, What You're Doing, What You Did.** Keep your manager informed across the project lifecycle. Before start: "I'm planning to X by date Y. Does that work?" Mid-project: "I'm hitting Z constraint. Adjusting plan to X instead." Post-project: "I shipped X on time. Results: Y." This prevents surprises and shows competence.

## Output Format

The skill produces structured communication templates and update formats:

**HPM Update (Weekly or Bi-Weekly):**
- Highlights (2-3 wins, momentum, noteworthy moments)
- Priorities (what's next, key focus areas)
- Metrics (numbers that matter: revenue, growth, quality, velocity)
- Any blockers or decisions needed (one or two items max)
- Format: Slack message, email, or Notion doc (3-5 min read)

**Recommendation Brief (for significant decisions):**
- Executive summary (one paragraph, headline upfront)
- Context (what led to this recommendation)
- Options considered (2-3 alternatives)
- Your recommendation (clear statement + reasoning)
- Trade-offs (what you're giving up)
- Data or evidence (dashboard, model, customer feedback)
- Timeline and decision needed by when
- Your commitment if recommendation is approved

**Meeting Prep for Leadership Conversation:**
- Your manager's priorities and pressures (what do they care about?)
- Two levels up: what matters to your manager's manager?
- Your recommendation or issue (clear, concise)
- Data or artifacts supporting your position
- Questions you're asking for (decision, resource, clarity)
- Potential objections and how you'd address them
- Alternative positions you've considered
- Proposed next steps

**Decision Log:**
- Decision that was made
- Context and options considered
- Decision chosen and by whom
- Reasoning (what mattered most in this choice)
- Implications (what changes because of this decision)
- Who needs to know and how communication will happen

## Example

**HPM Update: Sarah, VP of Platform Engineering at FinScope**

Sending to: Your manager (VP Engineering), her manager (CTO), yourself (PM for Platform)

---

**Highlights**
- API latency improved 34% this month (99th percentile: 280ms → 185ms). Database indexing + query optimization. Customers reporting faster integrations.
- Onboarded 3 new enterprise partners this week. Each mentioned API performance as a decision factor. Platform improvements helped close these.
- Team morale boost: shipped a meaningful feature after three months of infrastructure work. Engineers feeling impact.

**Priorities**
- Scaling infrastructure for Q2 growth (expecting 2x API volume). Capacity planning starts this week.
- Security audit scheduled for April. Prep work: documenting all access controls, encryption standards.
- Hiring: 2 platform engineers opening this month. Targeting Q2 start dates.

**Metrics**
- API requests/month: 2.8B (up 22% YoY)
- Latency (p99): 185ms (target: <200ms, on track)
- Error rate: 0.08% (baseline: 0.12%, improvement from indexing)
- Team velocity: 28 points/sprint (stable)
- Hiring: 2 positions open, 4 candidates in pipeline

**Blocker/Decision Needed**
- Scaling requires either new infrastructure spend (~$150K Q2) or deferring non-critical features to free up engineering time. I recommend infrastructure spend given customer growth and deal impact. Happy to model both scenarios if useful. Need decision by March 31 so we can provision in time.

---

**Recommendation Brief: Moving to Microservices Architecture (FinScope)**

Executive Summary: We should migrate from monolith to microservices architecture. Current monolith is bottlenecking feature velocity and causing cascading failures. Estimated 6-month effort, 3 engineers. Expected result: 40% faster feature delivery, 90% reduction in incident blast radius.

Context: FinScope's monolithic API handles all functions (auth, transactions, reporting, webhooks). One service failure takes down everything. This is slowing feature teams and scaring enterprise customers. We've had two major outages in Q1 caused by unrelated services affecting each other.

Options Considered:
1. Keep monolith + improve resilience (circuit breakers, better testing): Quick, low risk, doesn't solve bottleneck. Limited improvement.
2. Microservices migration (recommended): Higher upfront cost, 6-month effort, but enables parallel feature teams and isolates failures.
3. Hybrid approach: Carve out payment service as separate microservice, keep rest monolith: Medium effort, partial improvement, technical debt remaining.

Recommendation: Go with Option 2 (microservices). Here's why:
- Enterprise customers are asking about reliability (decision factor in deals)
- Feature velocity is becoming our competitive disadvantage vs. competitors
- Our hiring plan assumes we can parallelize work; monolith prevents this
- 6 months is acceptable given market window

Trade-offs:
- 6-month engineering effort (1000 engineer-hours equivalent)
- Increased operational complexity (need to manage 8+ services instead of 1)
- Real risk of mid-migration incidents if not executed carefully

Data:
- Customer feedback: 3 of last 5 enterprise RFPs mentioned reliability
- Incident review: 6 of 8 incidents in past year traced to monolith entanglement
- Benchmark: Competitors have 4+ services; feature cycle time averages 2 weeks vs. our 4-5 weeks
- Financial model: $150K infrastructure cost, offset by faster feature delivery and upsell velocity

Timeline: Kick off April 1, target November completion. Key milestones: Architecture design (April), payment service migration (May-June), auth service (July-August), reporting service (September-October), final refactor (November).

Decision Needed: Budget approval for infrastructure and engineering capacity. Happy to present to board if needed.

Next Steps: If approved, I'll work with Head of Architecture on design by March 28. We'd present implementation plan to executive team April 1.

---

**Meeting Prep: Skip-Level with CTO (Your Manager's Manager)**

Your manager is VP Engineering. Her manager is CTO. This is a 30-min monthly sync with CTO.

What the CTO cares about:
- Engineering velocity and predictability (hitting roadmap dates)
- Technical debt vs. feature work balance
- Hiring and retention
- Alignment with product strategy
- Risk exposure (security, scalability, incidents)

Your positioning:
- You're a peer of other VPs (PM, Sales, Finance) contributing to company success
- You're proactive about risk and planning, not reactive
- You're honest about constraints and trade-offs, not defensive
- You bring options and recommendations, not problems

Recommendation you want buy-in on:
- Microservices migration (the brief above)
- Need: Budget approval + organizational cover (you're pulling 3 engineers for 6 months)

Potential objections and your response:
- CTO: "Can't afford to slow down feature delivery." | You: "Migration and features run in parallel. We're allocating 3 engineers to architecture, keeping 8 on features. Plus, faster delivery post-migration compounds."
- CTO: "Last migration project ran over." | You: "Different scope and team. This time we have clear milestones, a dedicated architect, and runway in the budget."
- CTO: "Operational complexity will increase." | You: "Yes. We'll need expanded DevOps. That's already budgeted in the ops team headcount plan."

Data to bring:
- Customer impact (reliability RFP questions)
- Incident data (what breaks because of monolith)
- Competitive benchmark (other companies' architecture)
- Financial model (cost vs. revenue impact)
- Timeline and risks (realistic estimation)

Opening: "I'd like to update you on our platform roadmap. We've found a bottleneck that's affecting our competitive position and customer satisfaction. I have a proposal and want your input."

---

**Post-CTO-Meeting Decision Log:**

Decision: Approved microservices migration. $150K infrastructure budget. 3 engineers allocated.

Context: CTO asked about timing (won't this slow Q2 features?) and risk (have we done this before?). Addressed with parallel execution model and architecture risk mitigation.

Reasoning: CTO is optimizing for speed and risk. Showed that microservices enables speed long-term and that we're managing migration risk explicitly.

Implications:
- VP Engineering needs to communicate to team (feature teams continue at full velocity, platform team shifts focus)
- Sales/Product need context (improved reliability messaging to customers)
- Finance needs budget confirmation
- Hiring plan shifts (need DevOps engineer instead of platform feature engineer in this cycle)

## Edge Cases

**Your Manager is Disorganized or Unreliable.** You over-communicate to fill the gap. Structured updates, artifacts, clear asks. Don't complain about their organization. Just be the organized party and create structure through your communication.

**You Disagree with Your Manager's Approach.** Understand their reasoning first. If you still disagree, bring data and alternatives, not pushback. "I see your thinking. Here's how I'd approach it differently based on X." Respectfully challenge, don't resist.

**Your Manager Hoards Authority.** Some managers don't delegate decisions. Instead of getting frustrated, ask for clear decision criteria. "What would need to be true for me to decide this myself?" This is a professional version of understanding their constraints. Adjust by bringing more data and framing decisions as recommendations.

**Political or Organizational Change.** Your manager changes, company restructures, new leadership arrives. Reset your approach. Re-understand their priorities. Re-establish how you communicate. It's not personal; it's re-calibration.

**You're Operating in Information Asymmetry.** You know something important they don't (customer feedback, technical risk, team morale). Communicate it proactively with context. Don't withhold information to protect your position. That backfires.

**Founder or Executive Direct.** Some people report directly to the founder. This requires extreme clarity and context-setting (Chapter 1 first). Founders move fast and expect decisive recommendations. Bring options, choose one, be ready to defend it with data.
