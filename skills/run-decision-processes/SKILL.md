---
name: "Run Decision Processes"
description: "Make high-quality decisions fast by making implicit assumptions explicit, distinguishing reversible from irreversible choices, and assigning clear ownership. What it does: structures decision-making so assumptions are surfaced, trade-offs are visible, and teams disagree and commit. When to use it: major roadmap choices, strategic pivots, hiring/firing, resource allocation, or whenever indecision is killing momentum. Trigger on: decision, choice, approval, sign-off, committed to, decided, next steps, irreversible, reversible."
dependencies: []
connectors:
  - name: "Slack"
    reason: "Captures decision debate, assumptions, and stakeholder input; creates decision record"
  - name: "Notion"
    reason: "Stores decision documents with assumptions, options, and rationale; living audit trail"
  - name: "Google Drive"
    reason: "Houses decision briefs and trade-off analysis"
  - name: "Linear"
    reason: "Tracks decisions that result in roadmap or org changes"
  - name: "GitHub"
    reason: "Records technical decisions (architecture, language choice, framework) in decision records or ADRs"
---

## Purpose

Hesitation kills organizations. When a team can't decide, anxiety spreads. People invest emotional energy in being right rather than moving forward.

This skill helps you make decisions fast without being reckless. It does three things: (1) makes assumptions explicit instead of implicit, so you're debating reality, not hidden beliefs; (2) distinguishes between reversible and irreversible decisions so you don't slow down on things you can change; (3) assigns clear decision-maker and process so the team doesn't relitigate settled choices.

The common mistakes: analysis paralysis (researching forever), decision by committee (slow and no one owns the outcome), treating all decisions equally (3-person roadmap debate gets same process as 100-person architecture change), or relitigating decided decisions because the rationale wasn't documented.

## When to Use

- **Major strategic decisions**: Roadmap pivots, platform changes, business model shifts. These are Type 1 (irreversible) and need structured debate.
- **Resource allocation**: Hiring, budget, team restructuring. High stakes. Need to be clear on trade-offs and assumptions.
- **Conflict or strong dissent**: Two leaders disagree on direction. Use this skill to hear both sides, surface assumptions, make a call.
- **Recurring indecision**: Team keeps re-opening the same question. Use this skill to settle it, document it, commit to it.
- **Speed is critical**: You're debating endlessly. Use this skill to set a decision deadline and commit.
- **Unfamiliar territory**: You're making a bet (new market, new technology, new hire level). Make assumptions explicit so you know what you're risking.
- **High-conviction decisions**: Something feels like "we have to do this" but it's hard to articulate why. Document the leap of faith.

## Instructions

1. **Classify the decision** (Type 1 or Type 2, using Jeff Bezos's framework).
   - **Type 1 (Irreversible)**: Once you decide, reversing is costly or impossible. Examples: picking a technology platform (switching later is expensive), hiring a new exec (firing someone damages culture), exiting a market (customer relationships break).
   - **Type 2 (Reversible)**: You can easily change your mind. Examples: shipping a feature and pulling it if it doesn't work, trying a new process (retros, standups) for a quarter and changing it, marketing experiment, pricing test.
   - Type 1 decisions deserve more rigor, time, debate. Type 2 decisions can move fast with less process.

2. **Identify the decision-maker** (using DACI or similar framework).
   - **Driver**: Who owns moving the decision forward? (Often a PM or leader.)
   - **Approver**: Who has final say? (One person, not a committee.)
   - **Contributor**: Who has relevant expertise or will be affected? List them.
   - **Informed**: Who needs to know the outcome? (Broader org.)
   - Clear decision-maker is critical. If no one owns it, it stalls.

3. **If it's Type 1 or high-stakes, create a decision brief** (async document).
   - Post in Slack or Notion with a deadline (3–5 days for input). Format:
     - **The question**: One clear sentence. "Should we rebuild our data pipeline or migrate incrementally?"
     - **Context**: Why are we deciding now? What changes if we don't?
     - **Options** (2–4): What are the real alternatives?
     - **Assumptions for each option**: "If we rebuild, we're assuming Q2 launch is flexible." "If we migrate, we're assuming the legacy system can handle hybrid mode for 3 months."
     - **Trade-offs**: What do we gain? What do we lose? For each option.
     - **Open questions**: What do we not know? What research would help?
     - **Deadline**: "Decision by Friday 5 PM."

4. **Surface implicit assumptions** (the most important step).
   - Ask: "Why does it feel like the right choice?" Often people feel strongly but can't articulate the assumption.
   - Examples:
     - "We need to be faster than competitors" (assumption: speed is the primary competitive lever right now).
     - "New hire is too risky" (assumption: we can't afford a mis-hire; current team is stretched too thin to absorb onboarding cost).
     - "We should build the platform" (assumption: short-term shipping speed is less important than long-term scale; we have 6 months of runway).
   - Document the assumptions. Ask: "Is this assumption true?" "What would change our mind?"

5. **If there's genuine dissent, use a structured debate format**.
   - Assign one person to argue FOR the option (their job is to make the strongest possible case).
   - Assign another to argue AGAINST (same rigor, find the best counter-argument).
   - Each side gets 15–20 min of uninterrupted time (meeting or async thread in Slack).
   - Then: Q&A. Each side asks clarifying questions. No cross-talk.
   - Goal: Not to win, but to surface the strongest thinking on both sides.

6. **Use curiosity loops to test assumptions** (Ada Chen Rekhi's framework).
   - Instead of debating, ask targeted questions: "Here's the assumption I'm hearing: we need to ship by Q2. Is that right? What if we shipped in Q3?"
   - Or: "You're saying the team can't handle scaling from 6 to 10 people while building the platform. Is that based on past experience? What would change if we hired 2 support people?"
   - Curiosity loops often reveal that assumptions are out of date or assumptions were different between people.

7. **Act as historian** (Anneka Gupta's advice).
   - Before a big decision, research past decisions: "Have we tried this before? Why did it fail?" or "What succeeded and why?"
   - Example: "We tried a platform approach in 2021. It took 4 months and we got halfway. We pivoted to custom. That's context for this platform debate."
   - History often reveals the real risk or assumption you're skating around.

8. **Make the decision** (with clear ownership).
   - Approver makes the call (often the leader or DACI approver). Decision doesn't need consensus; it needs clarity.
   - **Document the decision**: One-paragraph rationale explaining *why* this choice over the others, *what assumption* is driving it.
   - Example: "Decision: Rebuild the data pipeline. Rationale: We've confirmed that hybrid mode (legacy + new) will handle 3-month migration. The rebuild is faster, cleaner, and sets us up for scale. We're betting that Q3 launch is flexible enough; if we need to accelerate, we can descope features."
   - Post decision in Slack and Notion.

9. **Disagree and commit** (critical for team health).
   - If someone disagreed with the decision, ask: "Can you commit to this direction? Can you help it succeed?"
   - This is not "agree that the decision is right." It's "I disagree, but I'll execute it and help make it work."
   - If someone can't commit (they think it will damage the org), that's a signal of a deeper issue. Have a 1:1.

10. **Assign clear next steps and owners**.
    - "We're rebuilding the data pipeline. Owner: Marcus. Phase 1 (schema design) complete by [DATE]. Phase 2 (migration logic) by [DATE]."
    - Create action items in your tracking system (Linear, Asana).

11. **Revisit Type 1 decisions on a schedule**.
    - For irreversible decisions, plan a check-in. "After 3 months, we evaluate: Is this working? Did our assumptions hold?"
    - Example: "After Q2 shipping with the new platform approach, we'll assess: Did we hit timelines? Did we learn what we expected? Should we keep going?"
    - If assumptions were wrong, you adjust. But you don't relitigate the core decision unless something fundamental changed.

12. **Use decision records for high-stakes choices** (especially technical).
    - Create a simple ADR (Architecture Decision Record) or decision doc:
      - **Title**: "Decision: Migrate to GraphQL vs. stay REST"
      - **Status**: Decided (not "pending", not "discussion")
      - **Context**: Why now?
      - **Decision**: What we chose.
      - **Rationale**: Why.
      - **Consequences**: What changes.
      - **Revisit date**: When we re-evaluate.
    - This becomes your institutional memory. New hires can see why the decisions were made.

## Output Format

```
# Decision: [DECISION TITLE]

**Status**: Decided | **Decided**: [DATE] | **Decided by**: [NAME]

---

## The Question
[One clear sentence. What are we deciding?]

---

## Context
[Why are we deciding now? What changes if we don't decide? What's the urgency?]

---

## Options Considered

### Option A: [Name]
**Description**: [What does this look like?]
**Assumptions**:
- [We're assuming X]
- [We're assuming Y]

**Trade-offs**:
- **Upside**: [What do we gain?]
- **Downside**: [What do we lose?]

### Option B: [Name]
**Description**: [What does this look like?]
**Assumptions**:
- [We're assuming X]
- [We're assuming Y]

**Trade-offs**:
- **Upside**: [What do we gain?]
- **Downside**: [What do we lose?]

### Option C: [Name]
[Repeat above]

---

## Key Assumptions We're Making
- [Assumption 1]: [Why are we confident this is true?]
- [Assumption 2]: [What would change our mind?]
- [Assumption 3]: [Is there data or research?]

---

## The Decision
**We chose Option [A/B/C]: [DECISION].**

**Rationale**: [Paragraph explaining why this option, what assumption is driving it, and why the alternatives were rejected.]

**Type**: [Type 1 (irreversible) or Type 2 (reversible)]

---

## Who's Accountable
- **Owner**: [NAME]. Responsible for executing this.
- **Supporters**: [NAMES]. Will help.
- **Informed**: [Teams that need to know].

---

## What Happens Next
- [Action 1]: [Owner]. Due: [DATE].
- [Action 2]: [Owner]. Due: [DATE].
- [Action 3]: [Owner]. Due: [DATE].

---

## How We'll Know If We're Right
- [Success metric 1]: [How we measure.]
- [Success metric 2]: [How we measure.]
- [Success metric 3]: [How we measure.]

---

## Revisit Date
[For Type 1 decisions] We'll re-evaluate on [DATE] to confirm assumptions and outcomes.
```

## Example

**Gravity Labs (fictional 35-person fintech startup, Series B, debating whether to build a platform vs. stay feature-focused)**

```
# Decision: Platform vs. Feature-Led Growth

**Status**: Decided | **Decided**: March 15, 2026 | **Decided by**: Elena (CEO)

---

## The Question
Should we invest the next 6 months in building a reusable platform layer (APIs, data models, abstraction) or stay feature-led, shipping custom solutions per customer?

---

## Context

For the past 18 months, we've grown by shipping custom features for high-value customers. It's worked—we're at $2M ARR, 40 customers. But we're starting to feel the pain:
- Sales cycle is long (customers want custom integrations).
- Onboarding is slow (each customer is a snowflake; our ops team is doing manual work).
- Engineering velocity is declining (code is tangled; it's hard to ship the same feature twice).

We need to decide *now* because:
- We're hiring 4 more engineers in Q2; should they build platform or features?
- Our next customer conversation (big potential deal) will ask "Can you use a standard API?" We need to know what we're committing to.
- We're running out of Q1; Q2 is crunch time.

---

## Options Considered

### Option A: Invest in Platform (6-month effort)
**Description**: Spend Q2 + Q3 building a reusable platform: standardized data models, APIs, plugin architecture. After 6 months, new features are faster to ship and customers can integrate via APIs.

**Assumptions**:
- Q3 and Q4 have softer customer demand (can slow feature shipments).
- We have good infrastructure talent (we do—Marcus is strong).
- Customers will adopt the platform APIs (we'll validate with the big deal customer).
- 6 months is enough time for an MVP platform.

**Trade-offs**:
- **Upside**: Long-term velocity increases 30%+. Scalable. Reduces ops load. Better margins (customers self-serve).
- **Downside**: Q2 feature shipments nearly stop. Risk of losing a customer who wanted custom work in Q2. High engineering cost.

### Option B: Stay Feature-Led, Hire Ops
**Description**: Hire 2 ops / customer success people to handle custom integrations and onboarding. Keep shipping features custom. Engineering team stays focused on what they're good at.

**Assumptions**:
- We can hire good ops people (we can—we've had inbound).
- Ops can scale to 60–80 customers without platform (uncertain; depends on feature complexity).
- Sales velocity won't outpace ops ability (we're assuming 20% growth, not 50%).
- Custom work won't get so complex that engineering needs to rebuild the same thing (risky).

**Trade-offs**:
- **Upside**: Keep shipping features. Shorter sales cycles. Customer stickiness high (custom = sticky). Cash flow stays strong.
- **Downside**: Ops becomes a scaling bottleneck. We'll hit a ceiling at 60–80 customers. Margins don't improve. We're treating symptoms, not solving the problem.

### Option C: Hybrid (Platform + Features)
**Description**: Dedicate 2–3 engineers to platform (3-month MVP). Rest of team keeps shipping features. After 3 months, evaluate platform adoption before going all-in.

**Assumptions**:
- Platform MVP is achievable in 3 months (ambitious but possible).
- We can split the team and not lose momentum (we can, if platform team is isolated).
- After 3 months, we'll have data on whether platform is working (we will—customers will try it or not).

**Trade-offs**:
- **Upside**: Lower risk. We learn fast. If platform doesn't work, we pivot back to features. We keep shipping.
- **Downside**: Platform is built half-heartedly (split focus). Quality might suffer. Customers don't get full platform (it's an MVP).

---

## Key Assumptions We're Making

**Assumption 1: We'll hit a scaling wall with custom work.**
- We're seeing early signals (ops team says they're stretched; code duplication increasing).
- Research: We talked to 5 customers about their integration needs. 4 said "We'd rather use an API." 1 said "Custom is fine."
- Confidence: Medium-high. But it's possible customers will keep wanting custom even if we offer APIs.

**Assumption 2: A 6-month platform build is achievable.**
- Marcus (tech lead) estimated 4–6 months for a solid MVP (data models, APIs, plugin system).
- We've never built a platform before, so there's scope risk.
- Confidence: Medium. Risk is scope creep or technical surprises.

**Assumption 3: Q2 + Q3 customer demand is softer.**
- Looking at our pipeline, we have strong deals in Q2 (closes in April, May). Q3 pipeline is thin.
- But sales team says "If we tell customers 'No new features for 6 months,' they'll go elsewhere."
- Confidence: Low-medium. This is the biggest assumption risk.

**Assumption 4: We can execute the big customer deal with platform APIs instead of custom.**
- We haven't confirmed this with them yet.
- They're a $500K annual deal, so it's worth delaying feature work for.

---

## The Decision

**We chose Option A: Invest in Platform for 6 months.**

**Rationale**:

Gravity Labs is at an inflection point. We've outgrown the feature-led, custom-everything model. Ops is stretched, engineering velocity is declining, and we're hitting a wall where every new customer is a project instead of a repeatable motion.

The platform bet is a bet on *scale*. We're saying: "We're confident enough in our product-market fit that we can pause new custom features for 6 months and invest in infrastructure that'll let us serve 10x more customers with a smaller ops team."

The big customer deal (Zephyr Financial) is validation that customers will use APIs if we build them well. We'll use them as a beta customer for the platform. If they're happy, sales can confidently pitch the platform to new deals in Q4 and beyond.

Option B (stay feature-led) is safe but finite. We'll eventually hit a wall and then have to build the platform anyway—while managing a much larger customer base. That's harder.

Option C (hybrid) feels like a compromise, but it's actually the riskiest: we'll spend 3 months on a half-built platform that won't be adopted, then have to decide *again* whether to commit fully. We'll waste 3 months and still face this decision.

We're making a *leap of faith* that Marcus can build a solid platform MVP, that Zephyr will adopt it, and that it'll unlock growth. If we're wrong, we'll have wasted 6 months and we'll have an unhappy customer (if Zephyr bounces). But the upside—scalability, better margins, slower burn—is worth the risk.

**Type**: Type 1 (irreversible). Once we commit to 6 months of platform work, we're betting the Q2–Q3 customer growth on it. Reversing means scrambling to ship features again, which is demoralizing.

---

## Who's Accountable

- **Owner**: Marcus (CTO). Responsible for platform roadmap, architecture, MVP delivery.
- **Supporters**: Elena (CEO, handles customer narrative). Sales team (communicates platform strategy to Zephyr and pipeline). Ops (scales to support platform launch).
- **Informed**: Full engineering team, sales team, board.

---

## What Happens Next

- **Week of March 20**: Elena talks to Zephyr. "We're building a platform. You'll be our beta customer. Here's the timeline."
- **April 1**: Marcus delivers platform roadmap (phase 1: data models, phase 2: APIs, phase 3: UI/docs).
- **May 15**: Phase 1 complete and in hands of Zephyr for testing.
- **June 15**: Phase 2 complete; Zephyr is integrated and live.
- **Q3 Launch**: Platform goes public; sales uses it in all new deals.

---

## How We'll Know If We're Right

- **Zephyr is successfully live on the platform** (using APIs, no custom code) by June 30.
- **Engineering velocity in Q4 increases** (new features ship faster because we're not rebuilding the same integrations).
- **Ops load per customer decreases** by 30%+ (customers self-serve more, rely on APIs).
- **Q4 pipeline has 3+ customers asking about platform/APIs** (validation that it's a selling point).

---

## Revisit Date

**Re-evaluate on July 31, 2026.** At that point:
- Is Zephyr happy? Are they using the platform as intended?
- Did the platform take longer than expected or did we ship on time?
- Are new customers interested in APIs, or do they still want custom?
- Should we double down or pivot back to feature-led + ops scaling?

If July 31 shows we're wrong (Zephyr is unhappy, no customer traction), we'll shift strategy: hire ops aggressively and stay feature-led. It'll be a reset, but at least we'll know fast.

---

## Decision Rationale (What Didn't We Choose)

**Why not Option B (Hire Ops)?**
- It's a band-aid. Ops can buy us 12–18 months, but we'll eventually need infrastructure.
- Custom integrations don't create defensibility. Platforms do.
- We'd be optimizing for short-term cash, not long-term value.

**Why not Option C (Hybrid)?**
- It's commitment-phobia. We'd spend 3 months on a half-built platform, then face this decision again.
- Split teams rarely ship their best work.
- It signals to the team and customers that we're unsure.

---

## Postscript: Assumptions We're Least Confident About

1. **Q2 customer demand is softer than we think.** If two big deals close in Q2, we'll feel the pain of not shipping features. Mitigation: Elena will manage customer expectations now ("We're investing in platform for long-term scale.").

2. **Marcus can deliver the platform MVP in 6 months.** If it slips to 7–8 months, we've wasted a quarter. Mitigation: We'll do bi-weekly syncs on scope creep. If it's slipping, we'll descope rather than delay.

3. **Zephyr will actually use the APIs.** If they push back and want custom, we've lost a beta customer and our platform narrative is weaker. Mitigation: We'll validate with Zephyr this week before we commit.

If any of these assumptions crumble, we re-convene and reconsider.
```

## Edge Cases

- **Relitigating a settled decision**: After 2 weeks, someone says "I think we made a mistake with the platform decision." Don't re-open it. Instead: "We made the decision. Let's commit to it and see if our assumptions hold. If in 3 months the data says we're wrong, we revisit." Closing the loop prevents organizational anxiety.
- **New information emerges**: If, after the decision, new information suggests you were wrong (e.g., a key customer says "Actually, we don't want APIs"), that's a signal to revisit—not a sign you made a bad decision. Decisions are made with incomplete information. Incorporate new data.
- **Decision-maker is absent**: If the approver is sick or on leave when a decision is needed, delegate to their deputy or the driver. Don't stall. You can always revisit if the approver disagrees.
- **Consensus feels impossible**: Some decisions won't reach consensus. The driver and approver's job is to make a call, not wait for agreement. Document the dissent (who disagreed and why), then move forward.
- **Type 2 decision feels Type 1**: You thought a decision was reversible (marketing experiment) but realize it has long-term consequences (brand shift). Revisit your thinking. Use more rigor than you initially planned.
- **Decision fatigue**: If you're deciding too much, too often, something is wrong with your strategy or delegation. If every week is a "big decision," your strategic context isn't clear. Use this skill to slow down, clarify context, and reduce decision volume.

