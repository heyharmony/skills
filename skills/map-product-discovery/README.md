# Map Product Discovery

> Turn messy customer conversations into a clear product strategy in one structured artifact.

## What It Does

This skill transforms raw research data—customer interviews, problem validation calls, and discovery meeting transcripts—into a crisp product discovery framework. It builds an **Opportunity Solution Tree** that maps customer problems to solution opportunities, layers in assumptions about desirability, viability, feasibility, and usability (DVFU), and surfaces which assumptions are riskiest and easiest to test. Grounded in Harmony's meeting transcripts and speaker data, it helps cross-functional teams align on the customer need, surface hidden disagreements, and plan a focused 10-day discovery sprint that tests the most critical unknowns first.

## Who It's For

- **Product managers** who run discovery but struggle to move from interview notes to a coherent strategy document and sprint plan.
- **Design leaders** who need to advocate for customer research before committing to a visual design; use this to surface usability assumptions early.
- **Engineering leads** who want visibility into which technical risks should be addressed in parallel with customer validation.
- **Startup founders** bootstrapping product strategy with limited research budgets; use this to prioritize learning over building.
- **UX researchers** who need a structured framework to present findings to skeptical leadership.
- **Ops & legal teams** (in regulated industries) who use this to map compliance assumptions and plan audit-readiness discovery.

## Use Cases

**Scenario 1: Post-Interview Synthesis**
- *Before:* You've completed 4 customer interviews. You have 12 pages of notes, a Slack thread full of reactions, and no consensus on whether to build Feature A or Feature B.
- *After:* Run this skill. You get a single-page OST that maps both features to the same customer need, shows that Feature A addresses a "Proven" desirability but has "Assumed" feasibility, and Feature B is the reverse. Decision becomes clear: validate feasibility (4-day spike) before committing to design.

**Scenario 2: Assumption Auditing**
- *Before:* Your roadmap has 6 quarters of work planned. The team has never articulated which assumptions are proven vs. risky. You're building off hunches.
- *After:* Run this skill with your roadmap as input. You get a DVFU map of every assumption. The riskiest three (e.g., "customer will pay $2k/month," "users will adopt a new dashboard," "third-party API is stable") bubble to the top. You design 10 days of research to test only those.

**Scenario 3: Cross-Functional Alignment**
- *Before:* In standup, engineering says "we can't build this," design says "the UX is unclear," and product says "the customer wants it." No shared language for disagreement.
- *After:* Map the same feature to the OST using DVFU. Now everyone sees: desirability is proven (customer quote), but feasibility and usability are both assumed. The conversation shifts from "can we build it?" to "what's the smallest experiment to validate UX?"

**Scenario 4: Pivot or Repositioning**
- *Before:* You're entering a new vertical (e.g., healthcare instead of fintech). Your roadmap is built for the old segment. You're not sure which assumptions hold and which break.
- *After:* Run this skill with healthcare customer data. You get a new OST that shows which opportunities are segment-agnostic (e.g., "evidence collection") and which are vertical-specific (e.g., "HIPAA templates"). Roadmap decision emerges.

**Scenario 5: Disagreement Resolution in Real Time**
- *Before:* The team debates whether to build a dashboard or a Slack integration. No data; it's opinion vs. opinion.
- *After:* Use this skill to map both solutions to the same OST. The assumption test (user observation with 3 ops admins) takes 2 days and kills the debate.

**Scenario 6: Fundraising or Stakeholder Buy-In**
- *Before:* You pitch an idea to investors or leadership. They ask, "How do you know customers want this?" You hand over interview notes.
- *After:* Hand over the OST. It shows which assumptions are proven (with quotes) and which are testable bets. Investors see a disciplined discovery process, not guesswork. You get buy-in for a 10-day sprint instead of a 6-month roadmap.

## Connectors

**Works standalone.** You provide the customer conversation data, and this skill creates the framework. But the skill is much richer with:

- **Harmony** — Automatically pulls transcripts and speaker attribution from discovery calls and customer interviews. Skill surfaces verbatim quotes and multi-meeting context to ground the OST in real evidence.
- **Notion** — Exports the OST and assumption testing plan as a Notion database. Each assumption becomes a trackable task with owner, deadline, and output artifact.
- **Linear** — Creates Linear epics and stories for each assumption test. Tie engineering feasibility assessments (from spikes) directly to the OST.
- **Slack** — Posts the OST and sprint plan to a discovery channel. Enables real-time team feedback. Automatically reminds assignees of assumption test due dates.
- **Google Docs** — Syncs the OST output to a Google Doc for collaborative real-time editing. Useful for co-creation with cross-functional teams.
- **Jira** — Maps assumption tests to Jira epics if your team uses Jira for roadmapping.

## Setup

Install and go. No configuration needed.

If you've got Harmony calls with customer interviews or problem validation meetings, give this skill access to those transcripts for richer evidence. Otherwise, paste your interview notes or meeting summaries, and the skill works just fine.

## What You Get

A production-ready product discovery artifact in 30–45 minutes:

1. **Opportunity Solution Tree** — A single visual/textual map of your customer segment, their core job-to-be-done, 3–5 customer needs, and 2–3 solution opportunities per need. Fully traced back to customer quotes and meeting dates.

2. **DVFU Assumption Map** — For each opportunity, a clear assessment of desirability, viability, feasibility, and usability. You see at a glance which bets are proven and which are risky.

3. **10-Day Discovery Sprint Plan** — A prioritized list of 5–8 assumption tests with owner, deadline, and deliverable. Tests are ordered by impact (which assumption unblocks the most valuable decision?) and effort (can we learn this in 10 days?).

4. **Key Disagreements & Resolution Tests** — Surfaced and ranked by criticality. Each disagreement gets a proposed experiment to resolve it.

5. **30-Day Milestones** — Actionable next steps: sprint cadence, decision gates, and roadmap outcome.

**Use this artifact to:**
- Lock the team on a single customer problem.
- Decide what to learn in the next 10 days (not what to build).
- Plan a discovery sprint instead of a guesswork roadmap.
- Fundraise, pitch leadership, or onboard stakeholders with a clear, evidence-backed strategy.
