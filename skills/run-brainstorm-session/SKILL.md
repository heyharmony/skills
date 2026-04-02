---
name: "Run Brainstorm Session"
description: "Facilitate a structured brainstorm — ask probing questions, explore alternatives, and converge on a validated design or plan. Works from meeting discussions or scratch ideas. Trigger on: brainstorm, ideate, idea session, think through, explore options, whiteboard session."
dependencies: []
connectors:
  - name: "Slack"
    reason: "Pull team discussions and idea threads to seed the brainstorm with existing thinking"
  - name: "Notion"
    reason: "Reference existing docs, wikis, and decision records for context"
  - name: "Google Calendar"
    reason: "Identify upcoming meetings where brainstorm output will be presented"
  - name: "Linear"
    reason: "Link brainstorm outcomes to existing project work and issues"
author: "Harmony"
version: "1.0.0"
icon: "sparkles"
cover: ""
screenshots: []
category: "Operations"
---

## Purpose

Transform rough ideas into fully-formed designs through structured facilitation. This skill guides teams through a proven Socratic questioning process that diverges (generates many options), stress-tests (challenges assumptions), and converges (selects winners). The output is actionable concepts ready for validation or implementation.

## When to Use

- **Ideation blocked:** Team is stuck on a problem and needs fresh perspectives
- **Design decisions pending:** Multiple competing approaches need evaluation
- **Strategy alignment:** Stakeholders need to explore options before committing
- **Product direction:** Exploring user onboarding, feature prioritization, or revenue models
- **Process improvement:** Teams wanting to redesign workflows or operations
- **Pre-meeting prep:** Generating options to discuss in an upcoming decision meeting

## Instructions

### 1. Gather the Seed

Begin by clarifying what needs brainstorming. Ask the team:
- What's the core question or problem?
- Is this about a feature, workflow, business model, or something else?
- Who are the key stakeholders and users?

If working from existing discussions (Slack threads, meeting notes, Linear issues), review them first to ground the brainstorm in actual context rather than starting cold. Extract the constraints and goals from these sources.

**Example seed:** "We're seeing 40% of new users drop after the first login flow. We need 5-8 concepts for redesigning onboarding to reduce friction."

### 2. Clarify Constraints and Goals

Make constraints explicit before ideating:
- **Timeline:** What's the deadline for a decision? (e.g., "decision by April 15")
- **Resources:** Budget, engineering capacity, design bandwidth
- **Technical limits:** API capabilities, platform constraints, integrations required
- **Success metric:** What outcome proves the idea worked? (e.g., "reduce drop-off to <25%")
- **Non-negotiables:** What must the solution include or avoid?

Document these in 3-5 bullets. Constraints enable better ideation, not worse.

### 3. Diverge: Generate 8–12 Ideas Rapidly

Use rapid-fire brainstorming. For 45 minutes, generate as many distinct approaches as possible:

**Divergence techniques:**
- **Flip the problem:** Instead of "reduce onboarding steps," ask "what if onboarding was completely optional?"
- **Steal from other industries:** How do mobile games onboard users? How do fitness apps? How do financial apps?
- **Extreme constraints:** Design for "1-click onboarding" or "zero text" or "$0 in resources"
- **User journey reimagining:** What if the first step wasn't signup? What if it was community? What if it was social proof?
- **Role-play:** Present from the perspective of a power user, a skeptical user, a competitor, a user with no tech background

**Record all ideas, no filtering.** Quantity beats quality here. Aim for 10–12 raw concepts, even if some seem impractical.

### 4. Stress-Test: Ask "What Could Go Wrong?"

For each of the 8–12 ideas, spend 5–10 minutes examining risks:

**Stress-test questions:**
- What would cause this to fail with users?
- What's the biggest operational or technical risk?
- How would competitors respond?
- What happens if adoption is slow?
- What could break our product or brand?
- Are there regulatory or compliance issues?
- What if this alienates existing users?

Document 2–3 key risks per idea. This isn't about killing ideas; it's about surfacing assumptions and building mitigation plans into the final designs.

### 5. Converge: Rank by Feasibility × Impact

Score each idea on two axes (1–5 scale):

- **Impact:** How much does this reduce the 40% drop-off? How aligned is it with company strategy?
- **Feasibility:** Can we build/launch this in the timeline with available resources?

Plot ideas on a 2×2 matrix:
- **High impact, high feasibility:** Top candidates (target 3–5)
- **High impact, low feasibility:** "Big bets" (might require expanded scope)
- **Low impact, high feasibility:** "Quick wins" (quick launch, reduced drop-off ~5–10%)
- **Low impact, low feasibility:** Deprioritize

Keep the top 3–4 ideas for refinement.

### 6. Refine Top 3 into Actionable Concepts

For each finalist, flesh out a 1-page concept that includes:

**Concept Template:**
- **Name:** Catchy, memorable label
- **1-sentence summary:** The core idea in one sentence
- **User journey:** 3-step walkthrough (what the user sees and does)
- **Success metrics:** What we're measuring and target values
- **Launch scope:** MVP vs. full version; what's in v1?
- **Technical requirements:** APIs, integrations, infrastructure
- **Risks & mitigations:** 2–3 top risks and how to address them
- **Timeline:** Design, build, launch estimates

### 7. Present for Validation

Prepare a 20–30 minute presentation:
- **Context:** Show the 40% drop-off problem and constraints
- **Process:** Briefly explain the brainstorm (diverge/stress-test/converge)
- **Top 3 concepts:** 6–8 minutes each, using the concept template above
- **Recommendation:** Which concept should we pursue first and why?
- **Next steps:** If approved, what's the first 2-week sprint?

Invite feedback on assumptions, especially from product, engineering, and customer success leads.

### 8. Deliver Structured Output

Create a concise brainstorm deliverable:

**Brainstorm Report (shared in Notion or Google Drive):**
- Executive summary (why we brainstormed, what we're solving)
- Constraints & goals (timeline, resources, success metrics)
- Divergence log (all 8–12 ideas in 1-2 sentences each)
- Convergence analysis (2×2 matrix showing scores and ranking)
- Top 3 concepts (full 1-page concept briefs)
- Recommended next steps (approval path, sprint planning)
- Appendix: Risk log and technical considerations

## Output Format

**Primary deliverable:** Brainstorm Report (Notion doc or Google Drive)

**Sections:**
1. **Executive Summary** (2–3 sentences)
2. **Constraints & Success Metrics** (3–5 bullets)
3. **Divergence: Raw Ideas** (8–12 ideas, 1 sentence each)
4. **Convergence Matrix** (visual 2×2 with scoring)
5. **Top 3 Concepts** (full 1-page briefs per concept)
6. **Risk Analysis** (2–3 risks per finalist with mitigations)
7. **Recommendation & Next Steps**

**Optional deliverables:**
- Presentation deck (20–30 minutes)
- Prototype or wireframe sketches for top 2 concepts
- User testing plan for validation

## Example: Canopy (Project Management SaaS)

**Context:** Canopy's onboarding flow sees 40% of users drop after account creation. The team wants to brainstorm new onboarding approaches to increase Day-7 activation (users returning 7+ days after signup) from 35% to 55%.

**Constraints:**
- Timeline: 6 weeks (decision by April 15, launch by May 31)
- Resources: 1 PM, 1 designer, 2 engineers
- Must work for both solo users and teams
- Budget: $0 in paid acquisition or incentives

---

### Divergence: 10 Raw Ideas

1. **"Instant empty project"** — Skip form filling; create a blank project immediately, let user invite teammates and set up in context
2. **"Community templates"** — Pre-built project templates from Canopy community; users pick one, customize, go live
3. **"Invite-first flow"** — Start with "who's on your team?" before creating a project; GitHub/Gmail import
4. **"Driven onboarding"** — Interactive chat-based assistant walks through key features in real time
5. **"Video walkthrough"** — 3-minute video showing Day-1 workflow (create task, assign, comment, close); skip if user wants
6. **"Competitor comparison"** — Show how Canopy compares to Asana/Monday; let power users migrate data in 1-click
7. **"Problem-first wizard"** — "What are you trying to solve?" (team alignment, timeline management, etc.) → contextual setup
8. **"Zero-config team workspace"** — Workspace auto-created on signup; invite 1 person instantly, collaborate in 30 seconds
9. **"Social proof carousel"** — Show 5 case studies (Stripe onboarded via Canopy, etc.) before and after signup; increase trust
10. **"Async video tour"** — Pre-recorded 90-second tours of key flows; user clicks to watch specific features on demand

---

### Stress-Test Findings

**Idea #1 (Instant empty project):**
- **Risk:** Users create project but don't know what to do next; churn increases
- **Risk:** No data validation; malformed project names or structures
- **Mitigation:** Follow up with 1-email series at 2 hours, 1 day, 3 days with next steps
- **Mitigation:** Auto-generate example task to seed the project

**Idea #2 (Community templates):**
- **Risk:** Community templates are poor quality; user tries template, hates it, churns
- **Risk:** Requires community moderation effort
- **Mitigation:** Launch with 5 high-quality templates from Canopy team only; community templates in v2
- **Mitigation:** Assign PM 2 hours/week for community QA

**Idea #8 (Zero-config team workspace):**
- **Risk:** Users invited without consent; privacy/compliance backlash
- **Risk:** Onboarding loop too quick; user feels lost
- **Mitigation:** Require explicit invite (not auto-add)
- **Mitigation:** Follow up with interactive tutorial at 10-minute mark

---

### Convergence Matrix & Scores

| Idea | Impact (1–5) | Feasibility (1–5) | Cell | Notes |
|------|-------|-----------|------|-------|
| Instant empty project | 4 | 5 | **High/High** | Removes friction; low build effort |
| Community templates | 4 | 2 | High/Low | High upside but requires curation |
| Invite-first flow | 4 | 4 | **High/High** | Natural for team users |
| Driven onboarding | 3 | 2 | Low/Low | High build effort; medium impact |
| Video walkthrough | 2 | 5 | Low/High | Quick to build; limited impact |
| Competitor comparison | 2 | 3 | Low/Medium | Helps power users; alienates beginners |
| Problem-first wizard | 4 | 3 | High/Medium | Contextual but adds complexity |
| Zero-config team workspace | 5 | 2 | **High/Low** | Highest impact; needs careful design |
| Social proof carousel | 3 | 5 | Low/High | Easy to build; mostly for acquisition |
| Async video tour | 2 | 5 | Low/High | Low friction; limited engagement |

**Top 3 selected for refinement:**
1. **Instant empty project** (High/High, quick win)
2. **Invite-first flow** (High/High, addresses team users)
3. **Zero-config team workspace** (High/Low, big bet if we expand scope)

---

### Top 3 Concepts (Refined)

**Concept 1: Instant Empty Project**
- **1-sentence:** Skip the setup wizard; create a blank project on signup, onboard in-app
- **User journey:**
  1. User signs up → redirect to blank "My First Project"
  2. See 3 example tasks; user can delete or edit
  3. At 1-hour mark, email suggests "Invite your team or add more tasks"
- **Success metrics:** Day-7 activation 35% → 50%; time-to-first-task < 2 minutes
- **Launch scope:** MVP is blank project + 3 example tasks; delete examples in v1.1
- **Technical requirements:** Auto-create project on signup; seed with template tasks
- **Risks:** User lost without guidance → Follow-up email series with next steps; User creates empty project then abandons → Track engagement, send re-engagement email
- **Timeline:** Design 3 days, build 5 days, launch 7 days

**Concept 2: Invite-First Flow**
- **1-sentence:** Flip the flow; ask "who's on your team?" first, then create project together
- **User journey:**
  1. User signs up → see "Add your team" step
  2. Enter 2–5 email addresses or import from Gmail/GitHub
  3. Invites sent; redirect to waiting page with setup checklist
  4. As teammates join, project auto-seeds with onboarding tasks
- **Success metrics:** Day-7 activation 35% → 55%; team projects created 2x faster
- **Launch scope:** Email invites + 1-click import; SMS invites in v1.1
- **Technical requirements:** Invite service, email delivery, Gmail/GitHub OAuth
- **Risks:** Invited users don't join → Send 3-email reminder sequence; Large teams slow signup → Cap invite at 10 people, warn after 5
- **Timeline:** Design 4 days, build 7 days, launch 10 days

**Concept 3: Zero-Config Team Workspace**
- **1-sentence:** Auto-create a shared workspace on signup; invite 1 person instantly to collaborate in 30 seconds
- **User journey:**
  1. User signs up → workspace auto-created with name "[User Name]'s Workspace"
  2. See 1-click "Invite" button (not in-app form, but instant share link)
  3. Copy link, send to teammate; teammate clicks → joins workspace instantly (no signup needed)
  4. Both users land in blank project; see "You're ready to go" with 2 quick tips
- **Success metrics:** Day-7 activation 35% → 60%; team workspace creation 3x faster; time-to-first-collaboration < 1 minute
- **Launch scope:** Instant invite links + workspace auto-create; require sign-in in v1.1
- **Technical requirements:** Workspace service, invite links with 24-hour expiry, async project seeding
- **Risks:** Security: invite links expose workspace to non-intended users → 24-hour expiry + re-shareable link; Complexity: users confused by workspace vs. project abstraction → Simplify naming and add 30-second video tip
- **Timeline:** Design 5 days, build 10 days, launch 14 days

---

### Risk Analysis (All Top 3)

| Risk | Mitigation |
|------|-----------|
| Users drop after first action (high churn) | Send triggered email at +2hr, +1day, +3days with next steps |
| Team users never complete signup | Concept 2 & 3 prioritize team invites; measure invite-to-join rate |
| Workspace complexity confuses users | Limit terminology; hide workspace settings until user requests; add 30-sec video |
| Invite links shared too broadly | 24-hour expiry; require password for high-security workspaces (v1.1) |

---

### Recommendation & Next Steps

**Recommended approach:** Launch **Concept 1 (Instant Empty Project)** in week 1–2, **Concept 2 (Invite-First Flow)** in week 3–4, **Concept 3 (Zero-Config)** in week 5–6 as big bet.

**Why this order?**
- Concept 1 is lowest risk, quickest win; reduces friction immediately
- Concept 2 addresses team users specifically (our highest-value segment)
- Concept 3 is ambitious but highest upside; if team wants to overdeliver, pursue it

**Next sprint (April 2–13):**
- Monday: Stakeholder review & approval (30 min)
- Wednesday: Design review for Concept 1 (60 min, 1 designer + PM)
- Thursday: Engineering estimation (60 min, 2 engineers + PM)
- Friday: Decision on scope/timeline (30 min sync)

**Success criteria for first launch:**
- 70% of new users reach "first action" (create/complete task) within 5 minutes
- Day-7 activation improves from 35% to 45% within 2 weeks of launch
- Support tickets about onboarding drop by 20%

## Edge Cases

- **Cold-start problem:** Users with no context or team may still churn. Mitigate with follow-up email series pointing to docs, templates, and community forum.
- **Enterprise users:** May skip onboarding entirely or require SSO + workspace pre-provisioning. Plan separate flow for enterprise via sign-up gate.
- **Mobile users:** Onboarding designed for web first; mobile version requires adapter. Launch on web, mobile in v1.1.
- **Power users (existing tools):** May resist Canopy terminology or structure. Offer "Import from Asana/Monday" fast-track in future iteration.
- **Localization:** Onboarding text not yet translated. Launch in English only; add 5 additional languages in v2.
