---
name: "Find Uncontested Market Space"
description: "Identify uncontested market space by analyzing the competition, customer needs, and strategic trade-offs. Build a strategy canvas showing where to compete differently. Trigger on: blue ocean, uncontested market, strategic repositioning, market differentiation, create new market, avoid competition, market value innovation."
dependencies: []
connectors:
  - name: "Salesforce"
    reason: "Pull competitor mentions from opportunity notes and customer feedback to map the competitive landscape and identify white space"
  - name: "HubSpot"
    reason: "Extract customer objections and what they say competitors offer to understand the current value landscape"
  - name: "Gmail"
    reason: "Surface customer language about alternatives and workarounds to identify unmet needs and new value creation opportunities"
  - name: "Slack"
    reason: "Pull team discussions about competitive positioning and customer problems to find blue ocean opportunities"
  - name: "Google Drive"
    reason: "Reference existing competitive analyses and strategy docs to avoid duplicating work and maintain context"
---

## Purpose

Identify an uncontested market space where you can compete on different terms instead of trying to beat rivals at their own game. Blue Ocean Strategy shifts focus from competing harder to competing differently — by understanding which industry factors matter (and which don't), which you can eliminate, reduce, raise, or create. When conversation data is available — customer calls, win/loss analysis, prospect feedback — the analysis is grounded in what customers actually value. When it's not, the skill works from provided market research and asks strategic questions to find white space.

## When to Use

- Feeling crowded in your current market segment; exploring new positioning
- Planning a market expansion or new product line with genuinely different value
- Analyzing why your product isn't winning despite feature parity; looking for differentiation angles
- Preparing a strategic repositioning after competitive threats
- Identifying adjacencies or new customer segments where you're not competing on the same terms as rivals
- Building a strategy for a startup entering a crowded market without massive capital

## Instructions

### 1. Gather context and map the competitive landscape

Start by asking what the user already has. Don't assume — ask:

- **What industry or market are you in?** (e.g., "project management," "API monitoring," "financial planning")
- **Who are the main competitors?** (Direct: head-to-head rivals; Indirect: alternative ways customers solve the problem)
- **What data do you have?** (Customer interviews, win/loss analysis, market research, competitive testing)
- **What's your hypothesis?** (Do you think you're competing on the wrong factors?)

If the user points to Harmony conversations, extract:
- How customers describe competitors and their trade-offs
- What features matter to customers vs. what doesn't
- What alternatives customers are considering (not just direct competitors)
- Pain points with current solutions that could open new space

Research the competitive landscape:
- Map 5–7 direct competitors and 2–3 indirect competitors (alternative solutions)
- Understand their positioning, target segments, pricing, and key strengths

### 2. Define the value landscape and industry factors

Identify the factors your industry competes on today:

- **What factors does the industry compete on?** (e.g., price, features, ease of use, speed, customization, support, reliability)
- **Which factors are taken for granted?** (Everyone offers this, but it's not a differentiator)
- **Which factors do customers actually care about?** (Ask — don't assume. Use discovery call data when available.)
- **Which factors could be eliminated?** (What are you spending resources on that customers don't value?)

### 3. Apply the Four Actions Framework

To create blue ocean space, systematically reconsider industry factors:

**Eliminate:** What factors taken for granted by the industry should be eliminated?
- Look for features, capabilities, or service elements everyone offers but customers don't value
- Question inherited assumptions: "Why do we offer this at all?"
- Be ruthless: Eliminating reduces cost and simplifies the product

**Reduce:** Which factors should be reduced below industry standard?
- Where are you spending resources that customers don't fully value?
- Can you deliver 70% of the benefit for 30% of the cost?
- Example: "We offer enterprise support; we'll reduce that to community + email for faster response time"

**Raise:** Which factors should be raised above industry standard?
- Where can you add value that competitors don't address?
- What do customers say they want but aren't getting?
- What would make the product worth more than the price?

**Create:** What factors should be created that the industry doesn't offer?
- What entirely new value can you unlock?
- What customer needs are currently unmet?
- What alternatives can you replace entirely with one solution?

### 4. Build the strategy canvas

Create a visual and narrative comparison:

- **X-axis:** Industry factors (eliminate, reduce, raise, create)
- **Y-axis:** Level of offering (low to high)
- **Current state:** Where does the industry (and competitors) compete?
- **Your blue ocean:** Where will you compete instead?

Make the visual stark: Show where you raise value that competitors ignore, and where you eliminate or reduce what they emphasize.

### 5. Validate the three prongs of differentiation

Check that your blue ocean strategy is viable:

- **Focus:** Is there a clear, simple focus? (Not "be different in every way"; more "be different on this one thing that matters")
- **Divergence:** Are you genuinely moving away from the competitive set? (Not incremental tweaks; real structural differences)
- **Compelling tagline:** Can you explain the strategy in one sentence? (If it takes three sentences, it's not clear enough)

### 6. Identify risks and test the riskiest assumption

Blue oceans can disappear fast. Identify what has to be true:

- **Can we actually deliver at this value point?** (Cost structure, technology, team capability)
- **Will customers actually pay for this value?** (Price sensitivity, switching costs, adoption friction)
- **Will competitors follow?** (How sustainable is the differentiation?)

Recommend the #1 test to validate the blue ocean hypothesis before major investment.

## Output Format

```markdown
# Blue Ocean Strategy — [Product/Company]
_Prepared [date] · Market: [industry/segment]_

## Executive Summary
[2–3 sentences: current market dynamics, where competitors are clustered, and your proposed blue ocean positioning]

## Competitive Landscape
### Direct Competitors
| Competitor | Positioning | Key Strength | Target Segment | Estimated Price |
|------------|-------------|-------------|---------------|-----------------|
| [Competitor 1] | [Positioning] | [Strength] | [Segment] | [$X] |
| [Competitor 2] | [Positioning] | [Strength] | [Segment] | [$X] |

### Indirect Competitors & Workarounds
- [Alternative solution 1]: [How customers currently solve the problem]
- [Alternative solution 2]: [Manual process or internal tool]

## Current Industry Factors
Factors the industry competes on today:
1. [Factor] — Importance: [H/M/L]; Current standard: [all offer X]
2. [Factor] — Importance: [H/M/L]; Current standard: [all offer X]
3. [Factor] — Importance: [H/M/L]; Current standard: [all offer X]

_Source: Competitive analysis + [customer discovery calls if available]_

## Four Actions Framework

### Eliminate
Factors to remove entirely (reduce cost, simplify product):
1. **[Factor]** — Why: [Customers don't value it; it adds cost without benefit]
2. **[Factor]** — Why: [Inherited assumption, not core to value]

### Reduce
Factors to reduce below industry standard (keep, but minimize):
1. **[Factor]** — Reduce from [current standard] to [new standard]. Impact: [cost savings, simplicity gain]
2. **[Factor]** — Reduce from [current standard] to [new standard]. Impact: [...]

### Raise
Factors to increase above industry standard (differentiate):
1. **[Factor]** — Raise from [current standard] to [new standard]. Why: [Customer need, competitive gap]
2. **[Factor]** — Raise from [current standard] to [new standard]. Why: [...]

### Create
Entirely new factors to introduce:
1. **[New factor]** — What: [Describe]. Why: [Unmet customer need, market opportunity]
2. **[New factor]** — What: [Describe]. Why: [...]

## Blue Ocean Strategy Canvas

### Visual Summary
[Axis labels: Industry factors (X), Level of offering (Y)]
[Plot: Competitor cluster (crowded); Your blue ocean position (clear daylight)]

### Narrative Strategy
**Our positioning:** [One-sentence statement of how you compete differently]

**Why customers will choose us:**
1. [Raise factor + why it matters]
2. [Create factor + why it's unique]
3. [Lower cost due to eliminations/reductions]

**Why we avoid head-to-head competition:**
- Competitors compete on [factors we de-prioritize]
- We compete on [factors they ignore]
- This creates structural advantage

## Target Customer in Blue Ocean
**Primary segment:** [Who benefits most from this blue ocean positioning]
- **Current problem:** [What they struggle with; what they currently use]
- **Our value prop:** [How we solve it differently]
- **Why us vs. incumbent:** [Not just feature parity; structural difference]

## Business Impact of Blue Ocean Strategy
### Value to Customer
- **Cost:** [Lower, same, or higher? Why?]
- **Experience:** [What improves? Use customer language]
- **Outcome:** [What's better about the end result?]

### Economics for Your Business
- **Pricing power:** [Why can you charge a premium, or why is lower cost an advantage?]
- **Unit economics:** [Does the model work? LTV implications?]
- **Time to market:** [Faster/slower than competing head-to-head? Why?]

## Sustainability & Risk Analysis
| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|-----------|
| Competitors copy our blue ocean | [H/M/L] | [H/M/L] | [Moat: patents, network effects, brand] |
| Customers don't value what we create | [H/M/L] | [H/M/L] | [Test with pilot; use customer feedback] |
| We can't deliver at our cost point | [H/M/L] | [H/M/L] | [Prototype economics; validate supply chain] |
| Market is too small to sustain growth | [H/M/L] | [H/M/L] | [Expand to adjacent segments; integrate vertically] |

## Riskiest Assumption to Validate First
**Assumption:** [The #1 thing that has to be true]
**Current status:** [Untested / Partially validated / Validated]
**Test:** [How to validate in 4–8 weeks with minimal spend]
**Success criteria:** [What result proves or disproves the assumption]

## Next Steps
1. [Immediate action: usually validating the riskiest assumption]
2. [This week: usually customer testing or prototyping]
3. [Before launch: operational, financial, or legal readiness]
```

## Example

**User:** "Build a blue ocean strategy for Vibe, a remote team collaboration tool. We're entering a market with Slack, Teams, and Zoom. We've done 8 customer discovery calls."

**Output:**

```markdown
# Blue Ocean Strategy — Vibe
_Prepared 2026-03-18 · Market: remote team synchronous collaboration_

## Executive Summary
The collaboration market is crowded: Slack dominates async messaging, Microsoft Teams owns email integration, Zoom dominates video. All try to be everything. Vibe takes a different path: synchronous collaboration optimized specifically for distributed teams who need to think together in real-time — without email bloat, without permission hierarchies, without meetings-instead-of-work.

## Competitive Landscape
### Direct Competitors
| Competitor | Positioning | Key Strength | Target Segment | Est. Price |
|------------|-------------|-------------|---------------|------------|
| Slack | Async messaging hub for enterprises | Integrations, ubiquity | Enterprise, all teams | $8–12.50/user/mo |
| Microsoft Teams | Integrated email + chat + video | Outlook integration, on-prem option | Enterprise, Microsoft-heavy | $6–12.50/user/mo |
| Zoom | Video conferencing for large groups | Reliability, ease of joining | All, but large meeting focus | $19.99/month pro |

### Indirect Competitors
- Google Meet: Free video, simple, but no persistent collaboration
- Miro/Mural: Whiteboarding, but no video/conversation layer; async-first
- Notion: Docs and notes, but no real-time collaboration capability

## Current Industry Factors
Factors the industry competes on today:

1. **Feature breadth** — Importance: H; Current standard: Slack and Teams offer 30+ integrations each
2. **Async messaging** — Importance: H; Current standard: All offer persistent chat with search
3. **Video quality & reliability** — Importance: H; Current standard: Zoom sets the bar at 1080p, <150ms latency
4. **Integrations** — Importance: H; Current standard: Slack: 2,000+; Teams: 200+
5. **Enterprise compliance & admin controls** — Importance: H; Current standard: SSO, audit logs, DLP
6. **Persistent video + recording** — Importance: L; Current standard: Only Slack/Teams offer; rarely used
7. **Real-time co-editing** — Importance: L; Current standard: No platform offers it natively; integrations are clunky
8. **Permission granularity** — Importance: M; Current standard: Slack/Teams use channel-based; hard to exclude someone from one conversation

_Source: 8 customer discovery calls + competitive feature audit_

## Four Actions Framework

### Eliminate
1. **Email integration** — Why: Customers say "we switched to Slack to get away from email." Vibe doesn't integrate with email; we push back: use email for formal comms, Vibe for thinking together.
2. **Integrations for integrations' sake** — Why: Slack has 2,000 integrations; customer said "I only use 3, and 90% feel like bloat." Vibe launches with 5 best-in-class integrations (GitHub, Linear, Google Drive, Stripe, Notion). Quality over quantity.
3. **Permission complexity** — Why: Slack channels are binary (in or out). Vibe: simple, granular, per-message opt-in for sensitive conversations.

### Reduce
1. **Async messaging depth** — Reduce from "replace Slack" to "complement Slack." Vibe is sync-first; async messaging is minimal (just decisions and action items preserved). Why: customers say they're drowning in messages; we liberate them.
2. **Enterprise admin controls** — Reduce from Slack/Teams enterprise feature set to "good enough" (SSO, basic audit logs, export). We'll add more later, but it's not our primary edge.

### Raise
1. **Real-time collaboration quality** — Raise to "best in class." Native co-editing, instant cursor tracking, sub-50ms latency for video/screen.
2. **Meeting productivity data** — Raise to new level: Vibe auto-analyzes every session — who spoke, for how long, decisions made, owners assigned. Every meeting auto-generates structured notes + action items.
3. **Video quality for distributed teams** — Raise with variable bitrate so 100-person meetings are smooth even on weak connections (target: 3G-viable).

### Create
1. **Synchronous-first culture** — Create a new experience where real-time co-work is the norm, async is preserved decisions/outcomes only.
2. **Persistent decision log** — Create a "decisions wall" where every meeting's decisions are automatically logged and searchable across the organization.
3. **Focus sessions** — Create a new capability: "deep work sprints" where meetings are banned for 4 hours; Vibe enables async updates instead.

## Blue Ocean Strategy Canvas

### Visual Summary
```
                          │
       Feature Breadth     │          Microsoft Teams
    & Integrations        │          Slack
                 (Eliminate)    │     ╱╱╱╱ Zoom
                          │   ╱╱╱╱  ╱╱╱
        Enterprise         │ ╱╱╱╱  ╱╱╱
       Compliance          │╱    ↓
      (Reduce to good)     │   VIBE (Sync-first)
                          │     ↑
     Real-time Quality     │  (Raise)
    & Meeting Intelligence │
        (Raise to best)    │
                          │
                          └───────────
                          Async-first ← → Sync-first
                          (eliminate) (create)
```

### Narrative Strategy
**Our positioning:** Vibe is the real-time collaboration platform for distributed teams who want to think together without the chaos of async messaging.

**Why customers will choose us:**
1. **Real-time co-work that actually feels synchronous** — Even on bad connections. Zoom-quality video, Figma-smooth collaboration, Slack-simple joining.
2. **Every meeting = structured decisions** — Vibe auto-generates decisions, action items, owners. No one reading 200 Slack messages trying to figure out what was decided.
3. **Work sync, not message sync** — We preserve decisions and actions, not 1,000 messages. Teams report 50% less Slack after switching.

**Why we avoid head-to-head competition:**
- Competitors compete on breadth (we reduce to 5 stellar integrations)
- Competitors optimize async (we optimize sync, which is where distributed teams struggle most)
- Competitors offer email integration (we explicitly don't, because email is the problem we're solving)

## Target Customer in Blue Ocean
**Primary segment:** Remote-first or distributed engineering + product teams at Series B–D companies (50–200 people)

- **Current problem:** "We use Slack for async messaging, but when we need to collaborate in real-time, it falls apart. We jump to Zoom, then everything important said on the call gets lost in Slack noise."
- **Our value prop:** Real-time co-work that preserves decisions, without message bloat.
- **Why us vs. incumbent:** Slack optimizes for async; we optimize for sync. Zoom handles calls; we handle thinking together. We're not trying to replace either — we're the bridge.

## Business Impact of Blue Ocean Strategy
### Value to Customer
- **Cost:** Same per-seat as Slack ($8–10/month), but *replaces* Zoom + reduces Slack usage (so lower total cost of collaboration)
- **Experience:** Real-time collaboration that feels synchronous even for distributed teams. Less time in meetings; more work gets decided.
- **Outcome:** Same decisions reached in 30 minutes (Vibe) instead of 60 minutes (Zoom + async follow-up). Distributed teams move faster.

### Economics for Your Business
- **Pricing power:** Charge per-seat, same as Slack. But because we reduce customer need for Zoom (enterprise: $15–20/user/month), we have TCO advantage.
- **Unit economics:** Target CAC $100, LTV $1,200 (60-month retention). Gross margin 75% (software model, minimal integrations cost).
- **Time to market:** 6 months to MVP (core: Figma-quality collaboration + Zoom-quality video). Faster than Slack (they spent years on integrations).

## Sustainability & Risk Analysis
| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|-----------|
| Slack/Teams add real-time features | High | High | **Moat:** Custom-built real-time engine (hard to retrofit). First-mover advantage in developer mind-share. |
| Companies prefer all-in-one (Slack + Teams) | High | Medium | **Positioning:** Vibe is not Slack replacement; it's Slack + Zoom optimized. Integrate deeply with both. |
| Real-time co-work adoption is slower than expected | Medium | High | **Test:** Pilot with 10 customers before full launch. Measure: adoption rate, time-in-app, churn. |
| Buildable but not commercially sustainable | Medium | Medium | **Economics:** Prove unit economics at 50 customers before Series A. If LTV:CAC <3:1, pivot. |

## Riskiest Assumption to Validate First
**Assumption:** Distributed teams will actively use real-time co-work tools (beyond video calls); adoption won't be "we tried it once."

**Current status:** Partially validated (5/8 discovery calls showed strong interest in concept; none have used product yet)

**Test:** Build a functional MVP (Figma-like editor + video) and place it with 5 beta customers (engineers + PMs) for 4 weeks. Success criteria: 30%+ of team members use Vibe at least 3x/week.

**Alternative assumption to test:** People will prefer a sync-first tool over Slack for certain use cases (e.g., design reviews, architecture planning). Current status: Not yet tested. Test: Conduct product testing with 10 design/eng teams. Ask: "Would you use this for [specific scenarios] instead of Slack + Zoom?"

## Next Steps
1. **Week 1:** Build working MVP (5-person real-time code editor + 1080p video). Aim for "usable," not "polished."
2. **Week 2:** Recruit 5 beta customers from discovery call pool (teams that showed strongest interest). Start pilots.
3. **Week 4:** Assess pilot metrics (adoption, NPS, use cases where Vibe won). Iterate based on feedback.
4. **Before Series A:** Hit $5K MRR from beta customers. Prove unit economics (LTV:CAC 3:1+). Document competitive response (did Slack/Teams copy?).

---
_Want me to create a timeline for the MVP, or draft the beta customer agreement?_
```

## Edge Cases

- **Blue ocean is too small to sustain:** If you find white space but the market segment is tiny, either expand the definition (adjacent customers who share the same jobs-to-be-done) or test whether the ocean is truly uncontested or just untested.
- **Competitors follow into your blue ocean:** This is always a risk. Document what moat protects you (first-mover advantage, switching costs, brand, network effects, technical IP, or partnerships). If there's no moat, the ocean will be temporary.
- **Your blue ocean requires a completely different business model:** If so, be explicit about it. The four actions framework might show you need to eliminate your entire sales team or invest heavily in product-led growth. That's okay — it's a strategic choice, not a bug.
- **No clear single blue ocean:** Some markets have multiple white spaces. Build separate strategy canvases for 2–3 blue ocean hypotheses, then recommend which one to bet on first based on addressable market size and defensibility.
- **User thinks they've found blue ocean but they're just repackaging red ocean:** Gently challenge: "Is this truly uncontested, or are competitors also offering this?" Use the four actions framework to test. If you're only raising factors competitors already raised, it's not blue ocean yet.
