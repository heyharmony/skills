---
name: "Plan Next Iteration"
description: "Turn feedback from shipped work, user testing, or experiments into a concrete plan for the next iteration — clear objectives, first deliverable, and a 5-rep progression map. Trigger on: next iteration, what to build next, iteration plan, learn from launch, post-ship review, what did we learn."
dependencies: []
connectors:
  - name: "Linear"
    reason: "Pull completed issues and cycle velocity to scope the next iteration realistically"
  - name: "Slack"
    reason: "Surface team feedback and user-reported issues from channels"
  - name: "HubSpot"
    reason: "Pull customer feedback and support ticket themes that should inform the next build"
  - name: "Notion"
    reason: "Reference product roadmap docs and past iteration retrospectives"
---

## Purpose

The Plan Next Iteration skill transforms what you shipped (and learned) into a specific 4–8 week plan for the next iteration. It's built on the principle that **100 reps beats 100 hours of study**: Small, rapid ships teach faster than planning. This skill turns vague goals ("improve the CLI") into concrete objectives, a clear Week 1 deliverable, and a 5-rep progression map that ships something real every week.

The output is a **quest** (specific 4–8 week goal), a **Rep 1** (first shippable product this week), and a playback of weeks 2–5 showing how each ship builds. It starts from real data: what shipped, what the team learned, what users actually need.

---

## When to Use

**Trigger Phrases:**
- "What should we build next?"
- "Let's plan the next iteration"
- "What did we learn from shipping X?"
- "Post-ship review: what's next?"
- "How do we iterate on the CLI launch?"
- "What's the game plan for next cycle?"

**Common Scenarios:**
1. **Product/Design:** Just shipped MVP; now what? Feature had mixed adoption; iterate why. User testing revealed gaps.
2. **Engineering:** Launched new infrastructure; measure impact. Shipped performance fix; what's the follow-up?
3. **Ops/Growth:** Campaign shipped; analyze results. Paid channel is hot; scale how?
4. **Content/Marketing:** Guide published; how do we amplify? Webinar landed; what's the series?

**Not a good fit:**
- Strategic pivots (needs leadership alignment, not just iteration).
- First-time product conception (use product discovery skills instead).
- Purely reactive firefighting (use Kaizen for process fixes instead).

---

## Instructions

### Step 1: Gather What Was Shipped & Learned
Pull evidence from the last iteration using Harmony sources:

- **Linear:** What got shipped? How many issues closed? Velocity this cycle?
- **Slack:** What's the team saying? Any unexpected wins or struggles?
- **HubSpot:** What are customers saying about the shipped feature? Support themes?
- **Notion:** Any retro docs or post-ship notes from the team?

**Output:** 3–5 concrete learnings with sources.

**Example:**
- "Shipped CLI tool; 120 beta users signed up (HubSpot)."
- "Team feedback (Slack retro): Great onboarding, but docs are sparse."
- "Support tickets show 40% ask for scripting examples (HubSpot)."
- "Cycle velocity was 32 points; we can handle 35–38 next cycle (Linear)."
- "Unexpected win: power users requesting plugin architecture (Slack #feature-ideas)."

### Step 2: Extract Core Lessons
Distill what worked, what didn't, what surprised. Use a simple framework:

**What Worked:**
- Feature adoption rate, user sentiment, team velocity, external feedback.

**What Didn't:**
- Low adoption on feature X, confusion on Y, blockers during ship.

**What Surprised:**
- User requests you didn't anticipate, internal friction you didn't expect, external demand shifts.

**What We're Still Unsure About:**
- Unclear user persona, unclear feature/product fit, unclear if we have the right metric.

**Output:** A 2–3 sentence reflection for each category (avoid walls of text).

**Example:**
- **Worked:** Fast onboarding; 70% of beta users activated within 1 day. Slack integration resonated.
- **Didn't:** Docs; 40% asked for examples. Advanced features (plugin system) were premature; only 5% asked.
- **Surprised:** Enterprises want API access more than UI; we thought UI-first was priority.
- **Unsure:** Will plugins drive meaningful adoption? Can we monetize advanced features?

### Step 3: Define the Quest
A **quest** is a specific, 4–8 week objective. It's not vague ("improve the CLI"); it's specific ("increase scripting adoption from 8% to 30% by shipping plugin system").

**Quest template:**
- **Change:** What are you trying to shift?
- **From:** Current state (metric, behavior, or problem).
- **To:** Target state (metric, behavior, or outcome).
- **By:** What's the primary lever? (Feature, process, market move, positioning.)
- **Time horizon:** 4, 6, or 8 weeks?

**Example:**
- **Change:** Increase advanced user engagement.
- **From:** 8% of users try scripting; most give up due to poor docs/examples.
- **To:** 30% of users ship a custom script; average time-to-first-script drops from 2h to 15min.
- **By:** Shipping: scripting guide, CLI code generator, plugin template, community examples repo.
- **Time:** 6 weeks.

**Rules:**
- One quest per iteration, not three.
- Quest must be provable (you'll measure it).
- Quest should feel ambitious but not impossible (stretch goal, not moonshot).

### Step 4: Design Rep 1 (This Week's Ship)
**Rep 1** is the smallest shippable version that moves the needle toward the quest. It ships this week or early next week.

**Template:**
- **What:** 1–2 sentence product description.
- **Why it matters:** How does it move toward the quest?
- **Ship criteria:** What makes it "done"?
- **Owner:** Who builds it?
- **Measurement:** What's the first data point?

**Example:**
- **What:** Ship CLI code generator: `cli generate script [task]` → outputs a runnable Python script template for automating [task].
- **Why it matters:** Lowers time-to-first-script from 2h (blank page) to 15min (template edit).
- **Ship criteria:** Generator works for 5 common tasks (data export, batch process, deployment, sync, report). Documented in help text. Tested on 5 beta users.
- **Owner:** Jasmine (Backend), 3 days.
- **Measurement:** % of new users who try generator within week 1; avg time-to-customization.

**Rep 1 rule:** Don't solve the whole quest in week 1. Just prove the direction is right and move the needle slightly.

### Step 5: Map Reps 2–5 (Progressive Builds)
Each rep builds on the last, shipping incrementally more value. By Rep 5 (week 5–6), you're approaching the quest target.

**Progressive build template (for each rep):**
- **Rep number & week**
- **What ships**
- **Why it builds on Rep X-1**
- **Owner & timeline**
- **Success metric (what changes)**

**Example map:**

| Rep | Week | What Ships | Why It Matters | Owner | Metric |
|---|---|---|---|---|---|
| 1 | W1 | CLI code generator (5 templates) | Proves fast scripts work; lowers entry barrier | Jasmine | 20% of users try generator |
| 2 | W2–3 | Interactive scripting guide + 20 code examples | Answers "how do I do X?"; kills support tickets | Deena (docs) | Support scripting Q drops 50% |
| 3 | W3–4 | Plugin system alpha (beta testers); plugin template | Enables power users to extend CLI; unlocks ecosystem | Raj (core eng) | 5 power users ship custom plugins |
| 4 | W4–5 | Community examples repo; showcase top plugins | Social proof; drives adoption of plugins | Marcus (devrel) | 15 community examples; 50 plugin stars on GitHub |
| 5 | W5–6 | Official plugin marketplace (discovery, ratings) | Full ecosystem play; monetization lever | Sarah (product) | 25 plugins published; 30% advanced users try plugin |

**Rep rule:** Each rep is shippable on its own (don't bundle them). Each rep teaches you something about the direction.

### Step 6: Identify Blockers & Dependencies
Call out what could slow you down:

**Dependency types:**
- **Technical:** Does Rep 1 require backend work from another team first?
- **Design:** Do you need design review? How long does that usually take?
- **External:** Waiting on customer data, vendor API, or external launch date?
- **People:** Does this need someone specific, and are they available?

**Template per blocker:**
- **What:** The dependency or blocker.
- **Impact:** If this blocks, what slips?
- **Mitigation:** What can you do to unblock or parallel-path?
- **Owner of resolution:** Who owns making this not a blocker?

**Example:**
- **Blocker:** Raj (core eng) is 30% allocated to legacy system fixes through W2. Plugin system needs him full-time.
- **Impact:** Rep 3 (plugin system alpha) slips from W3–4 to W4–5.
- **Mitigation:** Jasmine (backend) can prototype plugin API in W1–2; Raj joins to polish in W3. Move legacy work out.
- **Owner:** Sarah (product manager) confirms priorities with Raj's manager by EOW.

### Step 7: Deliver Iteration Plan
Package the full plan into a single doc (Notion, Google Doc, or Markdown). Structure:

1. **Quest statement** (1 sentence; put it at the top)
2. **What we learned** (from last iteration)
3. **Why this quest matters** (strategic rationale)
4. **Rep 1–5 progression** (table or timeline)
5. **Success metrics** (before/after; measurement method)
6. **Blockers & dependencies** (with mitigation)
7. **Team sync dates** (kickoff, mid-cycle checkpoint, end-cycle retro)
8. **Next-cycle hypothesis** (what you'll learn that informs the next quest)

---

## Output Format

Deliver a **Iteration Plan** document with:

1. **Executive summary** (2–3 sentences: the quest, why it matters, target outcome).
2. **Learning recap** (what worked, didn't work, surprised, unsure).
3. **Quest definition** (change / from / to / by / time horizon).
4. **Rep 1–5 progression table** (what / why / owner / metric for each).
5. **Success metrics before & after** (baseline state, target state, how measured).
6. **Blockers & mitigation** (dependencies called out with owners).
7. **4-week calendar** (kickoff, mid-cycle sync, ship dates, retro date).
8. **Next-cycle hypothesis** (what you'll learn; what quest comes next).

---

## Example: Stackline CLI Tool Launch (Developer Tools)

**Stackline** is a CLI tool for dependency scanning and security automation. They shipped a public beta (CLI v0.5) 4 weeks ago targeting developer teams at mid-market SaaS companies. Now they're planning the next iteration.

---

### Learning Recap

**What Worked:**
- Fast onboarding; 65% of beta signups completed the getting-started guide in <10 min. Slack integration (showing scan results in channels) drove engagement; 80% of active users have it enabled.
- Developer experience; fast feedback loop on issues. Shipped 3 bug fixes in beta cycle; users saw them within 48h.

**What Didn't:**
- Documentation; 40% of support tickets were "How do I do X?" questions that should've been in docs. Advanced features (custom policies, plugin system) underused (only 8% of users), so we over-invested there.
- Monetization angle unclear; gave beta away free; still don't know if users will pay.

**What Surprised:**
- Enterprises asked for API access (not in v0.5); currently blocked. 12 companies flagged this as dealbreaker.
- Community demand for security posture dashboards and CI/CD integrations higher than expected (15 feature requests vs. 3 for plugins).

**What We're Unsure About:**
- Will API unlock enterprise deals? Is API-first the right monetization lever?
- Are we targeting SMB DevOps teams, or Enterprise security teams? Different needs.

---

### Quest Definition

**Change:** Shift from "dev tool for indie devs" to "enterprise security platform."

**From:** CLI-only; 8% feature adoption (advanced users); 0% enterprise revenue; users pay $0.

**To:** CLI + API + dashboard; 35% feature adoption; 3 paying enterprise customers; average deal size $50k.

**By:** Shipping: REST API, GraphQL playground, cloud dashboard (scans, policies, insights), enterprise auth (SSO/SAML).

**Time horizon:** 8 weeks.

---

### What We Learned (Detailed)

- **Worked:** Quick onboarding loop. Slack integration was a hit; 80% use it.
- **Didn't:** Docs were sparse; 40% of support load was FAQ-able questions. Advanced features (plugins) only 8% adoption; we over-invested.
- **Surprised:** Enterprises want API + dashboard, not CLI-only. 12 companies flagged API as blocker. Demand for CI/CD integrations higher than expected.
- **Unsure:** Is enterprise API the right bet? Can we compete on dashboard? Will SMB + enterprise be one product or two?

---

### Rep 1–5 Progression

| Rep | Week | Ship | Why It Builds | Owner | Success Metric |
|---|---|---|---|---|---|
| 1 | W1–2 | REST API (v1 alpha) + Swagger docs. Read-only: list scans, get results. | Proves API works; unblocks enterprise pilots. | Raj (core eng) | 5 enterprise beta partners run 50 scans/day via API |
| 2 | W2–3 | Cloud dashboard (beta): view scan history, policy results, trends. Auth: email + password. | API data needs a UI; proves cloud story. | Sarah (product) + Asha (frontend) | 80% of API beta users log in to dashboard within week 1 |
| 3 | W3–4 | GraphQL endpoint + interactive playground. Mutation support (create policies, run ad-hoc scans). | GraphQL = easier for power users; enables advanced integrations. | Raj + intern | 30% of API users run mutations; avg query response <50ms |
| 4 | W4–5 | Enterprise auth: SSO/SAML config + team management (roles, permissions). First SSO customer on-boarded. | Removes "I can't give my token to a team" blocker; table-stakes for enterprise. | Ava (infra) + Raj | 1 customer signs SSO SLA; team can have separate roles |
| 5 | W5–6 | CI/CD integrations: GitHub Actions, GitLab CI templates. Ship 3 templates. | Devs want "scan on every PR"; reduces manual work; increases stickiness. | Marcus (devrel) + Jasmine (eng) | 50 users install GitHub action; avg 20 scans/day via CI |

**Reps 6–8 (into next iteration):** Pricing & billing, premium policies, marketplace for community templates, customer dashboard (for Stackline to manage accounts).

---

### Success Metrics Before & After

| Metric | Current (W0) | Target (W8) | Measurement |
|---|---|---|---|
| **API adoption** | 0% (no API yet) | 40% of new trials use API | HubSpot signup field: API vs CLI |
| **Enterprise NRR** | 0 (no customers yet) | 3 paying customers at $50k each | Stripe + Sales CRM |
| **Support load** | 40% of tickets are "how to" | 15% of tickets are "how to" | Linear support ticket tags |
| **Dashboard login rate** | N/A (no dashboard) | 70% of API users log in | Cloud analytics |
| **CI/CD integration adoption** | 0% | 30% of users have GitHub Action installed | GitHub repo stars (proxy) |
| **Feature adoption (advanced)** | 8% (plugins) | 35% (API + dashboard + custom policies) | Product analytics: feature usage % |
| **Time-to-enterprise-value** | N/A (no enterprise flow) | <1 week from signup to first API call | Sales cycle tracking |

---

### Blockers & Dependencies

| Blocker | Impact | Mitigation | Owner |
|---|---|---|---|
| **Design review cycle:** Dashboard design needs 2–3 weeks of iterative feedback. Slows Rep 2 ship. | Rep 2 slips W2–3 to W3–4; cascades Rep 3–5. | Start design async in W0; Asha (frontend) prototypes in parallel; Sarah (product) gives feedback dailyish. | Sarah (product) owns design velocity |
| **Enterprise auth complexity:** SSO/SAML setup with Okta/Azure takes time; Ava has competing infrastructure work. | Rep 4 (SSO) at risk. Enterprise pilots can't use product without it. | Ava prioritizes SSO over other infra. Start Okta integration in W1 (not W4). | Engineering lead confirms Ava's priorities by EOW |
| **Legal/Security review:** Enterprise deals require security audit + SOC2 roadmap. Takes 2–4 weeks. | Enterprise closes delayed; revenue impact. | Start audit conversation in W0; Ava + Sarah schedule audit in parallel with builds. | Sarah + Finance own audit timeline |
| **API performance under load:** If API gets hammered in beta, we might need database tuning. Unknown unknowns. | Ship date doesn't change, but quality risk. | Raj load-tests API in W1 (5 users → 50 users simulated). Flag if tuning needed. | Raj owns API perf testing |

---

### 4-Week Calendar & Checkpoints

**Week 1 (Mar 24–30):**
- Mon 10am: Iteration kickoff (whole team). Confirm quest, Rep 1 scope, blockers.
- Tue: Raj starts REST API v1 build.
- Wed: Sarah + Asha start dashboard design (async).
- Thu: Ava starts Okta SSO scoping.
- Fri 4pm: Mid-week sync (15 min). Blockers? On track?

**Week 2 (Mar 31–Apr 6):**
- Mon: Rep 1 (API v1) code review + internal testing.
- Tue–Wed: Asha iterates dashboard design; Sarah gives feedback.
- Thu: API alpha ready for 5 beta partners; send invites.
- Fri 4pm: Sync. API feedback early signals?

**Week 3–4 (Apr 7–20):**
- Mon (W3): Rep 2 (dashboard) build starts.
- W3 mid-week: API beta running; first feedback loops.
- W4 Fri: Target Rep 2 ship (beta); Rep 3 (GraphQL) builds start.
- Fri 4pm: Cycle checkpoint (30 min). On track for week 5?

**Week 5+ (Apr 21+):**
- Reps 3–5 progress in parallel.
- Weekly standups (Mon 10am).
- End-of-cycle retro (Fri W6): Did we hit metrics? What did we learn for next quest?

---

### Next-Cycle Hypothesis

**What we'll learn in next 8 weeks:**
1. Does API + dashboard unlock enterprise deals? (Metric: # customers signing contracts.)
2. Are CI/CD integrations the stickiness lever? (Metric: retention of users with GitHub Action vs. without.)
3. Can we compete on dashboard alone, or do we need to differentiate on data/insights? (Metric: compare our dashboard usage to competitors' free tier.)

**Next quest (post-8 weeks):** If API + dashboard hit targets, next cycle is likely: **"Monetize self-serve; drive SMB adoption to 1000 paying users."** If enterprise is sticky but SMB stalls, quest becomes: **"Enterprise-only; land 10 $100k+ deals and consolidate product."**

---

### Rollout Timeline & Owner Responsibilities

| Owner | Primary Rep(s) | Responsibility | Availability |
|---|---|---|---|
| Raj (core eng) | 1, 3, 4 | API, GraphQL, SSO backend. | Full-time. Priority: API over legacy work. |
| Sarah (product) | 2 (design) + overall | Dashboard design direction. Owns quest health + enterprise strategy. | 80% (20% sales support). |
| Asha (frontend) | 2, 5 | Dashboard UI, GitHub Actions template. | Full-time after W1 design phase. |
| Ava (infra) | 4 | SSO/SAML setup. Database perf as needed. | 50% (50% platform stability). |
| Marcus (devrel) | 5 | CI/CD integrations, community outreach. | 30% (70% developer relations). |

---

## Edge Cases

**Edge Case 1: Unclear what actually worked from last ship**
→ Go back and ask the team in a retro. "What's one win you're proud of? What's one thing that frustrated you?" Concrete stories beat vague sentiment.

**Edge Case 2: Too many possible reps; can't fit in 8 weeks**
→ Pick the ONE most important. Defer the rest to the next iteration. Clear prioritization beats scope sprawl.

**Edge Case 3: Blocker means this quest is impossible**
→ Call it out. Reframe the quest to be achievable given the blockers, or elevate to leadership to solve the blocker. Don't ship a plan that's already broken.

**Edge Case 4: Team says "Can we just do everything?"**
→ No. One quest per iteration. If you ship reps 1–5 successfully, you have another iteration to ship the next quest. Pace wins.

**Edge Case 5: Enterprise wants a custom feature mid-iteration**
→ Add it to the backlog for *next* iteration, not this one. Protect the iteration from scope creep. Document the ask; it might inform your next quest.

**Edge Case 6: Success metric is ambiguous**
→ Redefine it. Instead of "increase adoption," use "% of users who run an API call within 2 weeks of signup" or "# of enterprise API integrations in production."

**Edge Case 7: Mid-cycle, we're off track**
→ That's what the checkpoint is for. Re-scope Rep 3–5 or simplify; don't just push harder and burn the team out.
