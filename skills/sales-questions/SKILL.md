---
name: "Draft Discovery Questions"
description: "Draft targeted discovery questions, objection responses, and outreach language tailored to prospect context, industry, and role — supporting SPIN, Challenger, and MEDDPICC. Trigger on: discovery questions, what should I ask, sales discovery, objection handling, prospect research, outreach planning, how to open the call."
dependencies: []
---

## Purpose

Accelerate deal velocity by generating discovery questions and outreach messaging that demonstrate deep prospect understanding, uncover critical buying criteria, and build credibility before calls. When Harmony conversation data is available, grounds personalization in real patterns from successful sales conversations.

## When to Use

- **Discovery Planning**: Before first call or meeting with a prospect
- **Mid-Deal Advancement**: When you need to uncover budget, timeline, or decision-making criteria
- **Outreach Creation**: Generating cold email or LinkedIn messages that stand out
- **Objection Preparation**: Preparing responses to common pushbacks ("we're not interested," "we use a competitor")
- **Multi-Threading**: Developing conversation tracks for multiple stakeholders (CFO, CTO, VP Sales)
- **Deal Reactivation**: Reviving stalled or dead opportunities with fresh angles
- **Competitive Displacement**: Building questions that highlight gaps in prospect's current solution

## Instructions

1. **Gather prospect context**: Provide company name, prospect title/role, industry, company stage (early stage/mid-market/enterprise), and their current solution (if applicable)

2. **Input previous interactions** (if available): Share any prior email exchanges, call notes, or Harmony conversation data to personalize questions around what the prospect has already shared

3. **Define sales objective**: Specify whether you're seeking pain discovery, budget uncovering, timeline identification, competitive differentiation, or decision-process mapping

4. **Select methodology**: Choose from SPIN (Situation/Problem/Implication/Need), Challenger (teach/tailor/take control), MEDDPICC (budget/decision/timeline), or balanced approach

5. **Specify role targeting**: Confirm prospect's function (Finance, Engineering, Operations, Sales, Marketing, Executive) to tailor question depth and language

6. **Set context on deal stage**: Indicate if this is cold outreach, early exploration, active evaluation, or reactivation scenario

7. **Request outreach variants**: Ask for email subject lines, opening hooks, value propositions, and follow-up sequences for different response scenarios

## Output Format

```markdown
## Discovery Questions

### Priority Questions
- [Question designed to uncover specific pain or criteria]
- [Question that probes decision process]
- [Question that uncovers budget or resource constraints]

### Follow-Up Probes
- [Secondary question to dig deeper]
- [Question that reveals competitive landscape thinking]

### Industry/Role-Specific Questions
**[Role title] context:**
- [Tailored question specific to their function and priorities]

## Objection Responses

### "We're happy with our current solution"
**Acknowledgment & Bridge**: [Response that validates their statement, then pivots to a specific gap or capability]

**Redirect with Proof Points**: [Short example of specific improvement or use case they might not have considered]

### "We don't have budget for this"
**Reframe**: [Response that emphasizes ROI or cost savings without discounting]

## Outreach Sequence

### Cold Outreach

**Subject Line Options**
- [Specific, non-generic subject that shows research]
- [Alternative that emphasizes specific value or pain point]

**Opening Hook** (1-2 sentences)
[Demonstrates specific knowledge of their company/situation]

**Value Proposition** (clear and specific)
[Benefit stated in terms of their business outcome, not feature]

**Call to Action** (specific and low-friction)
[Single, clear next step; usually 15-min exploratory call]

---

### Follow-Up After No Response (3-5 days)
[Brief, value-add message with new angle or insight]

### Follow-Up After Initial Interest
[Questions and next steps that build momentum]

### Handling Objections in Sequence
[Specific messaging for most common "noes"]

## Context-Aware Personalization Notes

- If Harmony data provided: Reference specific quotes or situations the prospect mentioned in prior calls
- Adjust question sophistication based on company stage and role seniority
- Surface competitive alternatives the prospect might be evaluating
- Align questions with current economic/industry shifts relevant to their sector
```

## Example

### Input

**Prospect Context**
- Company: TechFlow Innovations (Series B fintech, 80 employees)
- Prospect: Sarah Chen, VP Operations
- Industry: Financial Services / SaaS
- Deal Stage: Cold outreach (warm intro from mutual connection)
- Current Solution: Basic reporting in spreadsheets and Tableau
- Objective: Position advanced analytics platform for operational efficiency
- Additional Context: Recent Series B funding ($25M), scaling ops team from 8 to 20 people over next 12 months

**Previous Interactions** (from warm intro email)
- Mutual contact mentioned Sarah's frustration with real-time visibility into payment processing
- Recent LinkedIn post from Sarah about "building scalable ops infrastructure"

---

### Output

## Discovery Questions

### Priority Questions
- What does a typical week look like for you in terms of operational reporting, and where do you spend the most time manually compiling data?
- As you're scaling the ops team from 8 to 20 people, how are you planning to maintain visibility and control over payment processing metrics?
- When you identify a bottleneck or anomaly in payment processing (like failed transactions trending up), how quickly can you get the full picture today—and how does that slow down your response time?
- What would change for your team if you had real-time visibility into every transaction, pipeline, and operational metric without needing Tableau refreshes or manual reports?

### Follow-Up Probes
- You mentioned building scalable ops infrastructure in your recent post—when you think about scalability, what's the biggest friction point with your current spreadsheet and Tableau setup?
- In a typical month, how many ad-hoc questions does your team get that you can't answer quickly because the data isn't aggregated?
- If you could snap your fingers and fix one thing about how you access and act on operational data, what would it be?

### Industry/Role-Specific Questions
**VP Operations context (financial services):**
- With payment processing criticality, how do you currently validate data accuracy across your systems, and how much manual QA do you need to do?
- What's your biggest concern about compliance and audit readiness as you scale, and how does your current reporting structure support that?
- When you're hiring those 10 additional ops people, how much time will you need to spend training them on your current data tools and processes?

## Objection Responses

### "We're happy with our current solution"
**Acknowledgment & Bridge**: "I hear you—and honestly, spreadsheets and Tableau have gotten your team pretty far, especially through rapid growth. I'm curious though: as you add 12 more ops people, are you planning to multiply your reporting infrastructure effort by 1.5x? That's what we typically see with the scaling ops teams face. Most teams we work with realized their setup worked great until 15-20 people—then it broke. Have you thought through how you'll scale reporting without it becoming a bottleneck?"

**Redirect with Proof Points**: "A few of your peers at companies like Ramp and Mercury faced the exact same situation—they had reporting they felt was working. What changed for them was that board and finance started asking real-time questions that required data they didn't have in spreadsheets. Does that resonate at all?"

### "We don't have budget for this"
**Reframe**: "Totally understood—and honestly, I wouldn't recommend squeezing it in if there's other priorities. What I usually see though is that the 50+ hours per month your ops team spends on manual reporting and ad-hoc data requests costs you roughly $[calculated based on team size and fully-loaded cost]—which usually exceeds platform cost significantly. Would it make sense to run a quick analysis on what your current reporting setup costs you?"

### "We use Tableau and it covers everything"
**Bridge with Specificity**: "Tableau's great for what it does—and I'm not suggesting you rip and replace. Most teams we work with actually keep Tableau. What they add is a real-time operational layer that Tableau wasn't designed for. For example, for payment processing visibility, you want immediate alerts and dashboards that update every minute, not on-demand analysis. Does that distinction matter for your use case, or is batch reporting really what you need?"

## Outreach Sequence

### Cold Outreach

**Subject Line Options**
- "Quick thought on scaling ops reporting at TechFlow"
- "Real-time ops visibility question for VP-level teams (like yours)"
- "Sarah—operational analytics questions I'm seeing at Series B companies"

**Opening Hook** (1-2 sentences)
"Hi Sarah, I saw your recent post about building scalable ops infrastructure at TechFlow—and it resonated because I've been talking to a lot of VP Operations at scaling fintech companies facing the exact same transition: how do you keep real-time visibility into payment processing and ops metrics as you go from 8 to 20-person teams?"

**Value Proposition** (clear and specific)
"What we're seeing is that spreadsheet and Tableau setups work great until about 15 people—then the manual reporting effort becomes a major bottleneck. Most ops teams end up spending 40-60+ hours a month on reporting instead of strategy. We work with companies like Ramp and Mercury to flip that: real-time operational dashboards that require zero manual updates, plus automated alerts for payment and ops anomalies."

**Call to Action** (specific and low-friction)
"Curious whether this resonates for your scaling situation. Totally happy to just brainstorm your ops reporting challenge—no pitch, 15 minutes, that's it. Does next Tuesday or Wednesday work for a quick call?"

---

### Follow-Up After No Response (3-5 days)
Subject: "One specific thing I was wondering about re: your Series B"

"Hey Sarah, I realized I should have asked a more specific question in my first note. With the Series B raise and your ops team doubling, I imagine investor board reports are getting asked more frequently. Are board reporting requests creating a new kind of pressure on your finance and ops reporting? If yes, this might be worth 15 minutes of conversation. If not, no worries at all."

### Follow-Up After Initial Interest
Subject: "Quick ops reporting audit for TechFlow?"

"Great to hear from you. Before our call, I'd love to understand your current setup better. Quick context-setting: Can you walk me through what a typical week of reporting requests looks like for your team? And—totally candid—what's the most frustrating part of your current Tableau/spreadsheet setup today?"

### Handling Objections in Sequence

**If "we're not ready yet":**
"Totally fair. I'd suggest revisiting this conversation once you hit 15 people on the ops team—that's usually the inflection point. I'm happy to check back in Q3. In the meantime, if you hit a point where reporting becomes painful, feel free to reach out."

**If "our tech stack is locked down":**
"Got it. Most of the time this isn't a Tableau vs. us conversation—it's about adding a real-time layer your current stack doesn't have. A lot of teams integrate us alongside Tableau. But worth understanding: are you locked down on a vendor, or locked down on budget?"

## Context-Aware Personalization Notes

- **Harmony Data**: If prior calls revealed that Sarah mentioned "can't get real-time payment stats," reference that directly: "When we talked to [mutual contact], you mentioned real-time payment visibility was a pain point..."
- **Company Stage**: Series B signals growth capital is available; frame as "growth enabler" not cost-reduction
- **Role Alignment**: VP Operations means CFO/CEO stakeholders matter; questions should uncover both operational and board-reporting needs
- **Competitive Landscape**: If using competitor (like Datadog, Perforce Helix Core), call out specific gaps rather than direct comparison
- **Industry Timing**: Fintech is post-FTX emphasizing operational rigor; lean into compliance and audit angles

## Edge Cases

### Cold Outreach with No Warm Intro
If no mutual connection or prior interaction, lead with extreme specificity about their industry/company stage rather than generic value prop. Example: "I work with Series B fintech companies where ops teams are stuck between spreadsheets and expensive data warehouses—I've noticed TechFlow recently hired 3 ops analysts, which usually signals you're hitting the scaling pain point."

### Reactivating a Dead Deal
If prospect previously said "not now," avoid re-pitching. Instead: "I remember we chatted 6 months ago and the timing wasn't right. Since then, we've worked with companies very similar to yours (Ramp, Mercury) and solved a specific problem I think you're probably hitting now—real-time ops visibility as you scaled ops team. Worth 15 minutes to see if this still doesn't fit?" Reference the specific context from dead deal to show you did your homework.

### Multi-Threaded Deals (Multiple Stakeholders)
Generate different question sets for different roles:
- **CFO**: Budget, ROI, efficiency metrics, board-reporting impact
- **VP Operations**: Workflow integration, team adoption, manual work reduction
- **CTO**: Data architecture, API integrations, security and compliance

Use outreach sequence to route each stakeholder to the right conversation angle.

### Competitor Displacement
If prospect currently uses competitor (e.g., Tableau, Looker), don't attack the tool. Instead ask: "What can your current solution not do that you wish it could?" This uncovers gaps your platform fills without positioning as direct replacement. Example objection response: "Looker is great for analysis. We're built for real-time operations—different use case entirely. Most teams use both."

### No Prior Interaction & Cold Outreach
Invest heavily in research (LinkedIn, recent news, funding announcements, job postings). Lead with a very specific observation about their company or industry trend. Example: "I noticed TechFlow posted for 2 ops analyst roles last month—that usually indicates you're moving from founder-led ops to scaling ops infrastructure. Is that accurate?"
