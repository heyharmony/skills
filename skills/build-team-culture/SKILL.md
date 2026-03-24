---
name: "Build Team Culture"
description: "Surface and articulate your team's actual culture rather than inventing aspirational values. What it does: transforms observed behaviors, meeting patterns, and peer feedback into documented cultural norms. When to use it: during onboarding refreshes, after team scaling events, when leadership senses a culture gap, or when preparing for new hires. Trigger on: culture, values, beliefs, team identity, distributed teams, trust, onboarding, culture mismatch, sacred cows."
dependencies: []
connectors:
  - name: "Slack"
    reason: "Analyzes conversation tone, norms, and informal rituals; identifies what people actually prioritize"
  - name: "Google Calendar"
    reason: "Maps team rhythm—meeting types, frequency, who convenes—as behavioral culture signals"
  - name: "Notion"
    reason: "Captures documented practices, informal handbooks, and emerging team standards"
  - name: "GitHub"
    reason: "Reveals code review culture, commit cadence, and collaboration norms"
  - name: "Google Drive"
    reason: "Surfaces shared documents, templates, and decision frameworks that shape behavior"
---

## Purpose

Culture isn't a mission statement on the wall—it's what happens when the boss isn't around. This skill surfaces the actual culture your team lives, reflects it back to them, and helps you articulate it so new hires, leaders, and remote employees can embody it.

Rather than inventing aspirational values that contradict how your team actually operates, Build Team Culture excavates existing norms from meeting data, transcripts, Slack patterns, and peer observations. It then structures those insights into a living document that names your sacred practices, psychological safety norms, and decision-making culture.

The skill is especially critical for distributed teams, where culture isn't absorbed by osmosis, and for leadership teams that may have drifted from their stated values. It's also your defence against the most common culture mistake: leadership imposing values that the team doesn't practice.

## When to Use

- **After scaling events**: New team members join and you realize your informal culture hasn't been made explicit; align on what's actually valued before it dilutes.
- **Distributed team onboarding**: Remote hires can't absorb culture through hallway conversations; you need documented norms and rituals.
- **Leadership transition**: New exec or manager arrives; surface how decisions are made, how feedback flows, and what "good" looks like on this team.
- **Culture mismatch signals**: You hear "that's not how we do things here" in different ways; reveals hidden norms that need naming or challenging.
- **Preparing for a funding event or acquisition**: Investors and new leadership want to understand (and potentially shift) your team dynamics.
- **Recovering from trust breach**: After conflict or misalignment, document the psychological safety norms you're rebuilding.
- **Quarterly culture audit**: Revisit as team evolves; culture is a living document, not a poster.

## Instructions

1. **Schedule a culture listening session** (60–90 min, leadership + 3–5 senior individual contributors).
   - Frame as "articulating who we are, not who we think we should be."
   - Prepare leaders: this may surface unflattering truths; listen without defending.

2. **Map behavioral patterns from available sources**.
   - If Slack is connected: what types of messages get reactions? What topics get amplified? What tone dominates?
   - If calendar is connected: what meetings are sacred? Who convenes decisions? What's the ratio of sync to async?
   - If GitHub/code is available: what's the pace of merges? How thorough are reviews? What do code comments reveal about values?
   - If Notion or Drive is available: what templates do people reuse? What docs get maintained vs abandoned?

3. **Conduct 3–5 "culture interviews"** (15 min each, individual contributor + manager level).
   - Ask: "What behavior do you see rewarded here?" "What gets you in trouble?" "Who embodies this team's best self?"
   - Listen for implicit norms: "We ship fast and iterate," "We over-communicate," "We debate hard and commit," "We hire for potential."
   - Don't ask *what values should we have*; ask *what values do we already live*.

4. **Synthesize into four cultural dimensions** (choose 2–4 of these or define your own):
   - **Decision-making**: Do you move fast or slow? Make calls by consensus, by leader decree, or by owner conviction?
   - **Communication**: Async-first or sync-happy? Transparent or need-to-know? Debate openly or avoid conflict?
   - **Shipping rhythm**: Ship fast and iterate or ship once and ship right? Tolerate errors or perfectionist?
   - **Distributed norms**: Do remote people feel included? Is your calendar respecting timezones? Async tools actually used?
   - **Psychological safety**: Can people disagree without fear? Do mistakes become learning or blame?
   - **Sacred cows and unspoken rules**: What traditions or practices feel non-negotiable? Which ones still serve you?

5. **Draft a culture document** (500–800 words) with three sections:
   - **Who we are** (narrative): One paragraph describing the team's operating style, informed by patterns you found.
   - **What we value in action** (observed behaviors): For each dimension, give 2–3 specific examples of what it looks like in practice.
   - **What we challenge** (emerging work): One or two sacred cows or norms that may no longer serve the team—name them to create space for evolution.

6. **Circulate for feedback** (async, 1 week).
   - Share with the team via Slack or email; ask "Does this feel true? What's missing? What did we get wrong?"
   - Emphasize: this is *current* culture, not *future* culture. The goal is honest reflection, not morale.

7. **Hold a culture reflection meeting** (45 min) to resolve feedback.
   - Present top three themes from responses.
   - Decide: Do we want to reinforce this? Challenge it? Add rituals to protect it?
   - Assign ownership: Who maintains the culture doc? When do we revisit (quarterly, annually)?

8. **Hardwire into onboarding**.
   - Add the culture doc to your hiring package; reference it in the first week.
   - Manager walks new hire through it: "Here's what 'shipping fast' means to us. Here's how we debate. Here's psychological safety."
   - New hire feedback loop: After 30 days, ask them if the culture doc feels accurate. What surprised them?

9. **Revisit quarterly or after major change** (merger, leadership shift, team scaling).
   - Culture is living. One pass isn't enough.
   - Ask: "Are we still living what we documented? Do we want to?"

## Output Format

```
# [TEAM NAME] Culture Document
**Last updated**: [DATE] | **Owned by**: [NAME]

## Who We Are
[1 paragraph narrative describing the team's actual operating style, tone, and philosophy. Grounded in observed patterns, not aspirations. Include distributed context if applicable.]

## Cultural Dimensions

### Decision-Making
**What we do**: [Describe actual pace, consensus level, decision authority]
**What it looks like**:
- [Specific example from recent decision or meeting]
- [Example 2: How feedback flows into decisions]
- [Example 3: Speed vs correctness trade-off you actually make]

### Communication Style
**What we do**: [Async-first? Transparent? Debate-heavy?]
**What it looks like**:
- [Example from Slack, email, or meeting pattern]
- [Example 2: How dissent is raised]
- [Example 3: How remote people experience communication]

### Shipping & Iteration
**What we do**: [Pace, quality bar, error tolerance]
**What it looks like**:
- [Example: Recent launch or deadline decision]
- [Example 2: How bugs or failures are handled]

### Distributed Norms (if applicable)
**What we do**: [Timezone respect, async-first tooling, overlap expectations]
**What it looks like**:
- [Example: Meeting scheduling, async decision velocity]
- [Example 2: Remote inclusion in brainstorms or key moments]

### Psychological Safety
**What we do**: [Feedback candor, mistake learning, disagreement norms]
**What it looks like**:
- [Example: Recent mistake and how it was handled]
- [Example 2: Dissent or disagreement in action]
- [Example 3: New idea or contrarian view welcomed/rejected]

## What We're Challenging
**Sacred cow 1**: [Name a norm that may no longer serve you, with honest assessment]
**Sacred cow 2**: [Another practice or belief worth questioning]

## How New People Learn This
- [Where is this doc shared? Who walks people through it?]
- [When is culture conversation part of onboarding?]
- [How do we update if culture shifts?]

## Questions for Continuous Reflection
- Are we still living this? Do we want to?
- What behaviors are we implicitly rewarding or punishing?
- Who feels excluded from this culture? Why?
- What's one thing from this doc we should protect? What should we change?
```

## Example

**Acme Data (fictional engineering team, 24 people across US and EU, post-Series B scaling moment)**

```
# Acme Data Culture Document
**Last updated**: March 2026 | **Owned by**: Elena (VP Eng)

## Who We Are
Acme Data operates at the speed of "go fast and fix it." We're a distributed team (8-person core in SF, 6 in Berlin, 10 remote) that values velocity and learning over polish. We debate hard in synchronous moments, then move async. We hire for problem-solving instinct over credentials. New ideas are treated with curiosity, not skepticism. We're post-honeymoon as a team—most people joined in the last 18 months—so we're actively building culture intentionally rather than relying on founder story.

## Cultural Dimensions

### Decision-Making
**What we do**: High-conviction calls made by domain owners, not by committee. We use DACI for big decisions (hire, major roadmap shift) but most choices live with the person closest to the work. We disagree and commit. Reversible decisions move async.
**What it looks like**:
- Last sprint, Yuki (backend lead) chose to migrate to a new database schema; she owned the risk, ran the proposal by engineering in Slack (async), got feedback, and executed. No steering committee.
- When Sarah proposed removing legacy code paths to speed up deploys, we debated in a Zoom call—hard disagreement—but once Elena (the VP) decided to go forward, everyone owned the outcome.
- Most hiring decisions come from the hiring manager + one other interviewer; we don't ask for consensus across the org.

### Communication Style
**What we do**: Async-first, but synchronously intense when we sync. We over-communicate in writing (every decision, rationale, and trade-off gets a Slack thread or Google Doc). Remote people get the same visibility as office people. Dissent is welcomed; silence is interpreted as consent. We avoid "just in case" meetings.
**What it looks like**:
- Engineering standup moved to async Slack post—each person writes their blocker + update. We only sync if there's a dependency or decision. This year we cut meeting time 40%.
- When Javi (mid-level IC) disagreed with the roadmap, he posted in #engineering: "I think we're solving the wrong problem. Here's why." Elena replied, "Let's talk." They had a 30-min sync; the roadmap didn't change, but Javi felt heard and understood the trade-off.
- A Berlin-based engineer was concerned we weren't explaining decisions; we added a "decision journal" doc (updated weekly) that goes to the whole org.

### Shipping & Iteration
**What we do**: We ship MVPs in 2-week cycles. We tolerate bugs in production if they're non-critical; we learn faster by seeing real user behavior than by hypothesizing in design docs. This isn't recklessness—we have a monitoring culture—but we bias toward iteration speed.
**What it looks like**:
- We shipped the new dashboard with half the features we originally planned. It felt unfinished in the room. Two weeks later, the usage data told us which features users actually needed. We're now confident in the roadmap.
- A memory leak made it to production last month. Instead of blame, we asked: "How do we catch this earlier?" Result: we added memory profiling to CI. The person who shipped it felt safe discussing it.
- We skip design docs for small features; we pair-code or do async code review. Larger changes (architecture) do get written specs, but the spec is feedback, not a gate.

### Distributed Norms
**What we do**: We protect async work time. Meeting-free afternoons (Berlin time) so EU team can think deeply. We use Slack threads heavily to avoid sync pressure. Decisions don't wait for "everyone to be awake." We over-document because remote people aren't in the hallway.
**What it looks like**:
- Brainstorm sessions are mostly async: Berlin posts ideas Friday morning (Europe time), SF responds Monday morning (their time), Berlin refines. One sync session once a month to feel connected.
- We have a "no meetings before 9:30 AM Pacific" norm (8:30 PM Berlin time); it's not a hard rule, but we respect it 95% of the time.
- Onboarding for remote hires includes a 1:1 with each team member + async intro video from the manager. The async intro took 20 minutes to record but has replaced 8 back-to-back Zooms.

### Psychological Safety
**What we do**: We learn from mistakes, not punish them. If you made a call with imperfect info and it didn't work out, we ask "What did you learn?" not "Why did you fail?" Debate is expected; if you disagree, you speak up. Silence feels like lack of trust.
**What it looks like**:
- A junior engineer shipped a feature that broke onboarding flow. It was caught in testing, not production. The retro wasn't "What did you miss?" It was "How do you catch this next time? What guardrails help?" They added a test suite. No blame.
- When Priya (product manager) proposed a pivot mid-sprint, the team pushed back hard: "We'll lose momentum." The conversation was direct, even tense. But Priya felt heard and the team ended up respecting her conviction. No resentment carried forward.
- New ideas are discussed as "interesting" or "not a fit right now," not "wrong." We ask "Under what conditions would this be a good idea?" rather than shutting it down.

## What We're Challenging

**Sacred cow 1: "Move fast and break things" is starting to feel careless.** We've had two incidents in the last quarter where speed-bias led to skipped validation steps. We're debating: Do we slow down for critical paths? Add a "correctness checklist" for data integrity features? We're not abandoning speed, but we're naming when fast breaks something that matters.

**Sacred cow 2: Our "async-first" bias may be excluding introverts who need time to think before speaking.** We're weighted toward early responders in Slack. We're trying: async brainstorms with 24-hour think time before discussion. Some decisions feel rushed; we want to protect deep thinkers' input.

## How New People Learn This

- **Hiring**: Culture doc is shared in the "welcome to Acme" email. We ask candidates: "Which of these resonates? Which would be hard for you?"
- **Week 1**: Manager walks through the culture doc in the first 1:1. "Here's how we debate. Here's what 'shipping fast' actually means."
- **30-day check-in**: We ask: "Did the culture doc feel accurate? What surprised you? What's hard to adapt to?"
- **Quarterly**: We ask the whole team: "Are we still living this? Should we adjust?"

## Questions for Continuous Reflection
- Are we still living the speed bias, or have we naturally slowed? Is that good?
- Who feels excluded from our async-first culture? Are remote people really equal?
- Do we protect psychological safety enough, or has speed started to override candor?
- What one behavior do we want to protect as we scale? What should we question?
```

## Edge Cases

- **Distributed team culture gap**: Remote and office cultures diverge. Solution: explicitly document *both*, then decide which norms apply universally and which are location-specific.
- **Leadership culture mismatch**: What leaders practice differs from what they preach. Solution: make leadership behavior the *first* example; leaders must embody documented culture or revision is needed.
- **Culture document becomes a sales tool**: Don't let HR or marketing distort the culture doc into aspirational marketing. Keep the honest version internal; communicate values to the outside world differently.
- **New hire experiences culture differently than team intended**: A new person reads "we debate openly" but experiences it as confrontational. Solution: culture doc needs behavioral examples, not just slogans; manager translates.
- **Scale kills culture**: As team grows, informal norms break down. Solution: revisit culture document every 2–3 people added; make it living rather than frozen.
- **Sacred cows prevent evolution**: A norm (e.g., "we always ship on Friday") becomes dogma even when context changes. Solution: build in a "challenging the culture" practice every quarter; name what's still serving you and what's calcifying.
