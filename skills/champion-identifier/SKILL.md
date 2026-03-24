---
name: "Spot the Deal Champion"
description: "Identify internal champions and decision makers from sales calls — who has power, who influences, and who blocks. Extract seniority, title, concerns, and buying authority. Trigger on: identify champion, find decision maker, who has authority, sales call analysis, deal stakeholder map, decision maker extraction."
dependencies: []
connectors:
  - name: "Salesforce"
    reason: "Pull account and opportunity records to cross-reference champion titles, roles, and deal stage against identified stakeholders"
  - name: "HubSpot"
    reason: "Map identified champions to contact records, track engagement history, and update deal associations with stakeholder info"
  - name: "Slack"
    reason: "Post champion identification summary to deal channels so sales team has a shared view before next call"
  - name: "Linear"
    reason: "Create stakeholder research tasks for info gaps and track follow-up conversations needed"
---

## Purpose

Identify who actually makes decisions in a prospect organization by analyzing sales call transcripts and conversations. Extracts decision makers, influencers, blockers, and champions — their titles, concerns, buying authority, veto power, and relationships. When Harmony conversation data exists, pulls direct evidence (quotes, behavioral signals, stated roles) to map the true decision structure. Works standalone from user-provided call summaries or transcripts when conversation data isn't available.

## When to Use

- After discovery calls to build a stakeholder map before the next meeting
- When you've talked to multiple people in an account and need to understand power dynamics
- Preparing for deal reviews to brief leadership on who needs to approve the deal
- Finding gaps in your stakeholder knowledge (who's missing, who blocks, who influences)
- Building a negotiation strategy for complex deals with multiple stakeholders

## Instructions

### 1. Gather context and identify stakeholders

Ask what data the user has:
- **What conversation(s) do you have?** Transcript, recording, or summary?
- **Who did you talk to?** Names, titles, what they said?
- **Multiple conversations?** With different people in the same account?
- **Any known blockers or champions?** Information from the sales team?

If Harmony conversation data exists, pull:
- Every person mentioned by name (speakers, decision makers referenced, competitors)
- Their stated title and function
- Direct quotes about concerns, priorities, and decision criteria
- Signals of authority ("I decide," "I need to check with," "nobody moves without")
- Relationships mentioned ("I work closely with," "my peer," "reports to")
- Timeline urgency or budget signals that indicate power

If no conversation data, work from what the user provides and fill gaps with follow-up questions.

### 2. Map title and authority level

For each stakeholder identified:
- **Title and function** — Exact title if mentioned, inferred role if not
- **Level** — C-suite, VP/Director, Manager, IC, other
- **Power type** — Decision maker, budget holder, influencer, veto power, technical gatekeeper, approver, end user
- **Buying authority** — Do they decide alone, need approval, just advise?

Scoring logic:
- C-suite + "I decide" = Full authority (5/5)
- VP + "I need to check with" = Approval authority (4/5)
- Manager + "my team uses this" = User influence (2/5)
- Finance + title = Budget gatekeeper (3/5)
- Engineer + veto mention = Technical veto (3/5)

### 3. Extract concerns and motivations

For each stakeholder, pull:
- **Top concern** — Verbatim quote if possible, inferred if not
- **Winning proof** — What would convince them (speed, cost, compliance, integration, support)
- **Relationship to solution** — Do they benefit directly, manage users, control budget, or need to approve?

Example mapping:
- CTO concern: "We can't integrate another vendor into our stack" → needs proof of API simplicity
- CFO concern: "We're not budgeting for new tools this year" → needs ROI calculation
- End user concern: "Your UI looks complicated" → needs demo or training

### 4. Identify relationships and influence

Map how stakeholders relate to each other:
- **Reports to** — Who's in the power chain?
- **Peer relationships** — Who influences whom at the same level?
- **Cross-functional dependencies** — Who needs to sign off on technical vs. financial vs. operational decisions?

This reveals:
- True decision path (A reports to B, B needs C's approval)
- Coalition builders (who influences skeptics)
- Blockers (who's at risk of killing the deal)

### 5. Find gaps and recommend next steps

Based on what you've learned, identify missing stakeholders:
- **Budget owner** — If not identified, who's CFO or Finance lead?
- **Technical gatekeeper** — If engineer wasn't mentioned, who reviews integrations?
- **Executive sponsor** — If not identified, who might champion this up?
- **End user voice** — If you've only talked to decision makers, who actually uses the product?

Recommend which conversations to schedule next and who to involve.

### 6. Create stakeholder output

Format as structured stakeholder map with scores, concerns, and power dynamics clearly visible.

## Output Format

# Stakeholder Map — [Account Name]
_Prepared [date] · Updated based on [# conversations]_

## Executive Summary
[1-2 sentences: how many stakeholders identified, who holds the key decisions, any critical gaps]

## Decision Authority Hierarchy
| Stakeholder | Title | Level | Authority | Budget Power? | Veto Power? |
|---|---|---|---|---|---|
| [Name] | [Title] | [C-suite/VP/Manager/IC] | [Full/Approval/Influence/Advisory] | [Yes/No] | [Yes/No] |

## Detailed Stakeholder Profiles

### [Stakeholder Name]
**Title:** [exact title]
**Level:** [C-suite/VP/Director/Manager/IC]
**Power Type:** [Decision maker / Budget holder / Influencer / Veto / Approver]
**Key Concern:** "[Direct quote or inferred concern]"
**Winning Proof:** [What would convince them — speed, cost, security, integration, ease, compliance]
**Relationship to Decision:** [How they benefit or control this decision]
**Quote:** "[Key quote that reveals priorities or authority]"

_(Repeat for each stakeholder)_

## Power Dynamics & Relationships

**Decision Path:**
- [Name] reports to [Name]
- [Name] coordinates with [Name] on technical decisions
- [Name] controls budget and final sign-off

**Coalition/Blockers:**
- [Potential champion]: [Why they might advocate]
- [Potential blocker]: [Why they might resist]

## Gaps & Recommendations

| Gap | Why It Matters | Who to Talk To | When |
|---|---|---|---|
| [Gap] | [Why important] | [Role/Name] | [Timeline] |

**Immediate next steps:**
1. [Conversation/info needed]
2. [Conversation/info needed]
3. [Follow-up prep]

## Now What?

- **Update CRM:** Sync this stakeholder map to Salesforce/HubSpot so entire team sees the authority structure
- **Schedule next touchpoints:** Recommend specific people and questions for next round of calls
- **Brief the team:** Share this map with your manager and deal team on Slack
- **Prep for objections:** Use blocker insights to build objection handling strategy

---

## Example

**User:** "We had two calls at Acme Corp — one with the VP of Operations and one with the CTO. Here are the transcripts. Who should we focus on?"

**Output:**

# Stakeholder Map — Acme Corp
_Prepared 2026-03-22 · Updated based on 2 conversations_

## Executive Summary
Acme has a distributed decision structure. VP Ops (Marcus) has budget authority but CTO (Raj) controls technical approval. Both must agree, but Raj is the likelier blocker based on integration concerns expressed in his call.

## Decision Authority Hierarchy
| Stakeholder | Title | Level | Authority | Budget Power? | Veto Power? |
|---|---|---|---|---|---|
| Marcus Chen | VP Operations | VP | Full + Budget | Yes | No (unless he wants) |
| Raj Patel | VP Engineering | VP | Technical approval | No | Yes |
| Patricia Okonkwo | Finance Director | Director | Budget review | Approval only | No |

## Detailed Stakeholder Profiles

### Marcus Chen
**Title:** VP Operations
**Level:** VP
**Power Type:** Decision Maker + Budget Holder
**Key Concern:** "We need something that fits our workflow without ripping out what we already have."
**Winning Proof:** Minimal integration effort, rapid adoption (4 weeks or less), team efficiency gain with hard metrics
**Relationship to Decision:** Controls budget, signs off on ops tools, measured on team productivity
**Quote:** "I've got 12 people on my team doing manual work every week. If this cuts that in half, I want to move fast."
**Authority Score:** 5/5 (Full authority + budget)

### Raj Patel
**Title:** VP Engineering
**Level:** VP
**Power Type:** Technical Gatekeeper + Veto
**Key Concern:** "Every new vendor we add becomes a security and maintenance burden."
**Winning Proof:** SOC 2 certification, API-first architecture, no custom integrations required, documented support for tech stack (Python/AWS)
**Relationship to Decision:** Vetos any tool that impacts engineering infrastructure or security posture; needs to approve before Marcus spends budget
**Quote:** "We got burned last year with a tool that promised easy integration but it was a nightmare to maintain."
**Authority Score:** 4/5 (Veto power, but Marcus can override if ROI is strong enough)

### Patricia Okonkwo
**Title:** Finance Director
**Level:** Director
**Power Type:** Budget Approver
**Key Concern:** "We're in cost optimization mode. Can you prove ROI in the first 90 days?"
**Winning Proof:** Clear savings calculation (hours × loaded cost), cost per FTE reduction, payback period
**Relationship to Decision:** Reviews budget request, needs justification, doesn't block if Marcus and Raj agree but will push for cost proof
**Quote:** "Show me the math on labor savings before we talk pricing."
**Authority Score:** 2/5 (Advisory, but can slow down if budget is questioned)

## Power Dynamics & Relationships

**Decision Path:**
- Marcus (VP Ops) owns the decision and budget
- Raj (VP Engineering) must approve before Marcus commits (veto authority)
- Patricia (Finance) reviews the business case after Marcus and Raj align

**Coalition/Blockers:**
- **Potential champion:** Marcus — Owns the problem, motivated by team efficiency, has budget authority. He's your champion if you can prove quick integration and measurable ROI.
- **Blocker risk:** Raj — Very skeptical of vendor risk. Says the previous tool "was a nightmare." Won't sign off until he's confident on architecture, security, and support SLAs.

## Gaps & Recommendations

| Gap | Why It Matters | Who to Talk To | When |
|---|---|---|---|
| Depth of Marcus's use case | Does he need this for all 12 people or a subset? Affects ROI proof | Marcus directly — ask to observe one workflow | Next call |
| Raj's existing vendor standards | What questions must we answer to pass his approval? | Raj directly — request a 30-min technical discovery | This week |
| Patricia's baseline labor cost | Needed for ROI calculation. What's the loaded cost per FTE hour? | Patricia or Marcus | Before proposal |

**Immediate next steps:**
1. Schedule a technical deep-dive with Raj on security/API architecture (address his "nightmare vendor" concern head-on)
2. Ask Marcus to share 1-2 workflow recordings so we can show precise time savings
3. Have Patricia send budget vs. savings baseline (FTE cost, hours per week on this task)

## Now What?

- **Update Salesforce:** Create stakeholder records for Marcus, Raj, and Patricia; flag Raj as veto risk; tag Marcus as champion
- **Build objection handler:** Use Raj's past vendor scare to build a "vendor security risk" objection response (SOC 2 + references + API docs)
- **Schedule next calls:** Technical deep-dive with Raj (30 min), Marcus + Patricia call to review ROI math (45 min)
- **Draft proposal deck:** Lead with Marcus's use case, include Raj's security requirements, embed Patricia's ROI math
- **Slack alert:** Post this map to the Acme deal channel so AE, SE, and manager all see the decision path

---

## Edge Cases

- **Multiple people with same title:** Distinguish by function, concerns, and stated authority level. "The first Marcus isn't the decision maker; that's his boss, also Marcus" — ask clarifying questions.
- **Extremely hierarchical org (everything goes to CEO):** Identify CEO and direct reports, note that grassroots champion approach won't work, focus on executive sponsor path.
- **Conflicting authority signals:** If Marcus says "Raj decides" but Raj says "Marcus owns the budget," report both perspectives. Recommend clarifying call to understand true decision path.
- **Very flat org / consensus-based:** Identify all voices, note that blocking happens via coalition, recommend broader stakeholder alignment (not just talking to one person).
- **Large enterprise with procurement bureaucracy:** Identify legal/procurement gatekeepers in addition to functional stakeholders. Note that technical and financial approval may not be sufficient if procurement has vetoing power.
- **Incomplete data from one call:** Flag which stakeholders are still unknown or under-understood. Recommend conversations to fill gaps before proposing or negotiating.
