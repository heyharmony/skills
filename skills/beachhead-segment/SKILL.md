---
name: "Find Beachhead Market"
description: "Identify your first beachhead market segment — the smallest winnable market with burning pain, willingness to pay, achievable dominance, and expansion potential. Trigger on: beachhead, first market, initial segment, where to launch, crossing the chasm, market entry, first customers, niche market, market selection."
dependencies: []
---

## Purpose

Find the single best market segment to dominate first. Instead of chasing a large TAM with scattered effort, this skill evaluates potential segments against four criteria — burning pain, willingness to pay, winnability, and referral potential — and recommends the beachhead that gives you the fastest path to product-market fit and the clearest bridge to adjacent markets. When customer conversations exist in Harmony, the analysis is grounded in real pain signals, buying behavior, and expansion patterns from actual calls.

## When to Use

- Choosing where to launch a new product
- Narrowing down from too many potential customer types
- Refocusing after trying to serve too many segments at once
- Entering a new market or geography and need to pick a starting point
- Post-pivot, re-evaluating which segment to pursue first
- Validating whether your current segment is actually your best beachhead

## Instructions

### 1. Generate the candidate list

Help the user brainstorm 5–8 potential segments. Push for specificity — "mid-market SaaS" is too broad; "B2B SaaS companies with 50–200 employees that just hired their first VP of Sales" is a segment.

Segment dimensions to explore:
- **Industry vertical** — Be specific (not "healthcare" but "telehealth startups with <100 employees")
- **Company size** — Employee count AND revenue range
- **Growth stage** — Bootstrapped, seed, Series A–C, growth, enterprise
- **Job title / buyer** — Who has the pain and the budget?
- **Use case** — What specific problem are they solving?
- **Geography** — If relevant to distribution or regulatory fit
- **Trigger event** — What just happened that makes them a buyer now?

If Harmony conversations exist, mine them for segment signals:
- Which types of companies show the most pain on calls?
- Which prospects move fastest through evaluation?
- Which segments mention the most acute frustration with current solutions?
- Where do referrals come from?

### 2. Score each segment on four criteria

For each candidate segment, score 1–10 on:

#### Burning Pain (weight: 30%)
- Is the problem urgent and frequent? (daily frustration vs. annual inconvenience)
- How painful are current workarounds? (manual, expensive, fragile, nonexistent)
- Is the pain getting worse over time? (regulatory change, market shift, team growth)
- Can the prospect articulate the cost of the problem?
- Would they describe this as "hair on fire" or "nice to have"?

_Evidence from conversations:_ Look for emotional language, urgency, and quantified pain in transcripts.

#### Willingness to Pay (weight: 25%)
- Does this segment have budget allocated for this problem category?
- Is the ROI calculation straightforward? (can they do the math in their head?)
- What are they spending on workarounds today? (budget already exists)
- Does the decision-maker have budget authority?
- Are there free/DIY alternatives that are "good enough"?

_Evidence from conversations:_ Look for pricing discussions, budget mentions, ROI questions, and "how much?" urgency.

#### Winnability (weight: 25%)
- Can you realistically reach 50–70% of this segment in 12–18 months?
- How many companies are in this segment? (want 50–500 for a beachhead, not 50,000)
- Who else is competing for them? How strong?
- Do you have an unfair advantage — access, expertise, technology, network?
- How long is the sales cycle? (shorter = faster validation)

_Evidence from conversations:_ Look for competitive mentions, evaluation process length, and decision complexity.

#### Referral & Expansion Potential (weight: 20%)
- Does this segment talk to each other? (conferences, communities, Slack groups)
- Do they talk to adjacent segments you want to reach next?
- Is there a natural word-of-mouth or network effect?
- Can one customer's success create a case study that resonates broadly?
- Is there a clear "next segment" once you dominate this one?

_Evidence from conversations:_ Look for referral mentions, community references, and how prospects found you.

**Composite score** = (Pain × 0.30) + (WTP × 0.25) + (Win × 0.25) + (Referral × 0.20)

### 3. Deep-dive the top 2–3 segments

For the highest-scoring segments, build a fuller picture:

- **Customer archetype** — Specific person at a specific type of company with a specific problem
- **Day-in-the-life** — What does their frustration actually look like on a Tuesday afternoon?
- **Buying trigger** — What event makes them start looking for a solution?
- **Current solution** — What are they using today, and why isn't it enough?
- **Decision process** — Who decides, how long, what can derail it?
- **Willingness to talk** — How accessible are they for sales conversations?

### 4. Recommend the beachhead

Choose one. Not two. Explain:

- Why this segment over the runners-up
- What makes it winnable in the near term
- How success here builds a bridge to the next segment
- What needs to be true for this beachhead to work (assumptions to validate)
- How many customers you'd need to "dominate" this segment

### 5. Define the expansion path

Map the segment adjacency:

- Beachhead segment → Next segment 1 (most natural bridge)
- Next segment 1 → Next segment 2
- What capabilities or credibility does each step require?
- What's the 18-month vision from beachhead to broader market?

## Output Format

```markdown
# Beachhead Market Analysis — [Product/Company]
_Prepared [date] · Data sources: [list]_

## The Recommendation
**Beachhead segment:** [Specific segment description in one sentence]
**Why this one:** [2–3 sentence rationale]
**Target size:** [Number of companies in this segment]
**Dominance target:** [X customers = Y% of segment in Z months]

## Segment Scorecard

| Segment | Burning Pain | Willingness to Pay | Winnability | Referral Potential | **Score** |
|---------|-------------|-------------------|-------------|-------------------|-----------|
| [Segment 1] | [/10] | [/10] | [/10] | [/10] | **[/10]** |
| [Segment 2] | [/10] | [/10] | [/10] | [/10] | **[/10]** |
| [Segment 3] | [/10] | [/10] | [/10] | [/10] | **[/10]** |
| [Segment 4] | [/10] | [/10] | [/10] | [/10] | **[/10]** |
| [Segment 5] | [/10] | [/10] | [/10] | [/10] | **[/10]** |

## Deep Dive: [Recommended Beachhead]

### Customer Archetype
**Name:** [Fictional but realistic name]
**Title:** [Role]
**Company:** [Type, size, stage]
**Problem:** [Their frustration in their own words]

### Day in the Life
[2–3 sentences painting the frustration — grounded in conversation data when available]

### Buying Trigger
What event makes them start looking:
- [Trigger 1]
- [Trigger 2]
- [Trigger 3]

### Current Solution & Why It Fails
| What they use today | Why it's not enough |
|--------------------|--------------------|
| [Solution/workaround] | [Specific limitation] |
| [Solution/workaround] | [Specific limitation] |

### Decision Process
- **Decision maker:** [Role]
- **Influencers:** [Roles]
- **Timeline:** [Typical cycle]
- **Budget source:** [Where the money comes from]
- **Dealbreakers:** [What kills a deal in this segment]

### Voice of Customer
> "[Quote about the pain]" — [Role, Company type]
> "[Quote about desired outcome]" — [Role, Company type]
_Source: [Harmony conversations / interviews / reviews]_

## Why Not the Others

| Segment | Score | Why Not Now |
|---------|-------|-------------|
| [Runner-up 1] | [score] | [Specific reason — too competitive, longer sales cycle, weaker pain, etc.] |
| [Runner-up 2] | [score] | [Specific reason] |
| [Runner-up 3] | [score] | [Specific reason] |

## Expansion Path

```
[Beachhead] → [Segment 2] → [Segment 3] → [Broader market]
     ↓              ↓              ↓
 [Bridge: what     [Bridge: what   [Bridge: what
  gets you there]   gets you there]  gets you there]
```

| Phase | Segment | Bridge | Capability Needed | Timeline |
|-------|---------|--------|-------------------|----------|
| Beachhead | [segment] | — | [current product] | Now – 12 months |
| Expansion 1 | [segment] | [how beachhead success enables this] | [what to build/add] | 6–18 months |
| Expansion 2 | [segment] | [how expansion 1 enables this] | [what to build/add] | 12–24 months |

## Validation Plan

Before committing fully, validate these assumptions:

| Assumption | How to Test | Timeline | Success Signal |
|-----------|-------------|----------|---------------|
| [Pain is acute enough] | [5 discovery calls with segment] | [2 weeks] | [Prospect volunteers the pain unprompted] |
| [They'll pay $X] | [Pricing conversation in 3 calls] | [2 weeks] | [No pushback on ballpark pricing] |
| [We can reach them] | [Test outreach on LinkedIn/community] | [1 week] | [>10% response rate] |
| [They refer each other] | [Ask early customers how they found you] | [4 weeks] | [>30% come from referral] |

## Next Steps
1. [Validation action — e.g., book 5 discovery calls with this segment this week]
2. [Positioning action — e.g., tailor landing page messaging to this archetype]
3. [Sales action — e.g., build a list of 100 target companies in this segment]
```

## Example

**User:** "We built a compliance monitoring tool for financial services. We could sell to banks, fintechs, insurance companies, crypto exchanges, or wealth management firms. Where should we start?"

**Output:**

```markdown
# Beachhead Market Analysis — ComplianceIQ
_Prepared 2026-03-05 · Data sources: 12 discovery calls (Harmony), market research, competitor analysis_

## The Recommendation
**Beachhead segment:** Series A–C fintechs with 50–200 employees that just hired their first compliance officer or are preparing for their first regulatory audit.
**Why this one:** Burning pain (first audit is terrifying), fast decision-making (founder or COO decides in days, not quarters), small enough to dominate (approximately 400 companies in US/UK), and they all talk to each other in fintech Slack communities and at Money20/20.
**Target size:** ~400 companies (US + UK)
**Dominance target:** 80 customers = 20% of segment in 12 months → expand to broader fintech

## Segment Scorecard

| Segment | Burning Pain | WTP | Winnability | Referral | **Score** |
|---------|-------------|-----|-------------|----------|-----------|
| Series A–C fintechs (first compliance hire) | 9 | 8 | 9 | 9 | **8.8** |
| Crypto exchanges (compliance pressure) | 10 | 7 | 5 | 6 | **7.2** |
| Regional banks (compliance modernization) | 7 | 8 | 4 | 5 | **6.1** |
| Insurance companies (regulatory reporting) | 6 | 7 | 3 | 4 | **5.1** |
| Wealth management firms | 5 | 6 | 5 | 5 | **5.2** |

## Deep Dive: Series A–C Fintechs

### Customer Archetype
**Name:** Sarah Chen
**Title:** Head of Compliance (first compliance hire)
**Company:** Series B fintech, 120 employees, payment processing
**Problem:** "I was hired 3 months ago and I'm supposed to get us through our first SOC 2 audit. I have no team, no tools, and the audit is in 6 months."

### Day in the Life
Sarah spends her mornings in spreadsheets trying to map the company's existing processes to compliance requirements she's still learning. By afternoon, she's chasing engineering leads for evidence of security controls that may or may not exist. She stays late because she knows missing the audit deadline could delay the company's next funding round or enterprise deal.

### Buying Trigger
- Company hires first compliance officer or Head of Risk
- Board or investor requests SOC 2 / ISO 27001 certification
- Enterprise prospect requires compliance certification to close deal
- Regulatory body announces new requirements for their category

### Current Solution & Why It Fails
| What they use today | Why it's not enough |
|--------------------|--------------------|
| Google Sheets tracking compliance tasks | No automation, no evidence collection, no audit trail |
| Consulting firm on retainer | Expensive ($50K+), slow, doesn't build internal capability |
| Manual policy documents in Notion | Static, disconnected from actual system controls |

### Decision Process
- **Decision maker:** Founder/CEO or COO (at this stage, compliance reports to leadership)
- **Influencers:** Head of Engineering (needs to cooperate on evidence), legal counsel
- **Timeline:** 1–3 weeks from first demo to signed contract
- **Budget source:** Ops or legal budget, sometimes carved from engineering
- **Dealbreakers:** Must integrate with their cloud infrastructure (AWS/GCP); can't require a dedicated compliance engineer to operate

### Voice of Customer
> "I Googled 'SOC 2 for startups' at 11pm and felt like I was reading a foreign language. I need a tool that tells me exactly what to do." — Head of Compliance, Series B payments startup
> "Our Series C investors said 'no SOC 2, no deal.' That's when I got hired." — Compliance Lead, fintech lending platform
_Source: Discovery calls, Jan–Feb 2026 in Harmony_

## Why Not the Others

| Segment | Score | Why Not Now |
|---------|-------|-------------|
| Crypto exchanges | 7.2 | Pain is extreme but market is volatile. Regulatory landscape shifts quarterly. Winnability is low — they need specialized crypto compliance, not general tools. Revisit when we build crypto-specific modules. |
| Regional banks | 6.1 | Strong WTP but extremely long sales cycles (6–12 months). Require on-prem deployment and SOC 2 Type II certification from us first. Come back after we have fintech case studies. |
| Insurance companies | 5.1 | Pain is moderate (they have existing compliance teams and tools). We'd be displacing incumbents, not filling a vacuum. |
| Wealth management | 5.2 | Fragmented market, niche requirements (SEC, FINRA). Too specialized for v1 product. |

## Expansion Path

| Phase | Segment | Bridge | Capability Needed | Timeline |
|-------|---------|--------|-------------------|----------|
| Beachhead | Series A–C fintechs (first compliance hire) | — | Current product | Now – 12 months |
| Expansion 1 | Growth-stage fintechs (scaling compliance team) | Beachhead customers grow up and need more | Team features, role-based access, multi-framework | 6–18 months |
| Expansion 2 | Crypto / DeFi compliance | Fintech credibility + regulatory expertise | Crypto-specific modules (MiCA, Travel Rule) | 12–24 months |
| Expansion 3 | Regional banks (modernization) | Enterprise fintech references + compliance track record | On-prem option, SOC 2 Type II certification | 18–30 months |

## Validation Plan

| Assumption | How to Test | Timeline | Success Signal |
|-----------|-------------|----------|---------------|
| First audit triggers urgent buying | 5 calls with recently hired compliance officers | 2 weeks | 4/5 confirm audit deadline drives purchase urgency |
| They'll pay $500–$1,000/month | Include pricing in next 3 discovery calls | 2 weeks | No sticker shock; comparisons to $50K consulting alternative |
| We can reach them via fintech communities | Post in 3 fintech Slack groups + LinkedIn outreach to 50 | 1 week | >15% response rate on outreach |
| They refer to peers | Ask first 5 customers: "who else do you know dealing with this?" | 4 weeks | 3/5 provide warm introductions |

## Next Steps
1. Book 5 discovery calls with Series B fintech compliance hires this week (use LinkedIn + fintech Slack communities)
2. Tailor landing page headline: "Your first audit doesn't have to be a nightmare"
3. Build a list of 100 Series A–C fintechs that posted compliance job openings in the last 6 months
```

## Edge Cases

- **User can't narrow below 3 segments:** Force-rank by winnability. Ask: "If you could only sell to one type of company for the next 6 months, who would it be?" The constraint reveals the real priority.
- **All segments score similarly:** Tiebreak on speed — which segment can you reach, sell to, and get live in the shortest time? Speed to learning beats theoretical TAM.
- **User is B2C, not B2B:** Adapt firmographics to consumer demographics. Replace "company size" with psychographic and behavioral segments. Winnability becomes "reachability via specific channels."
- **User already has customers but never chose a beachhead:** Analyze existing customers as data. Which cohort retains best, expands most, and refers? That's your retroactive beachhead. Formalize it.
- **Segment is too small (<50 companies):** Flag that this may be a customer, not a segment. Widen the definition until you have 50–500 companies. A beachhead that's "dominated" with 10 customers isn't a market — it's a client list.
- **User wants to pursue two beachheads simultaneously:** Push back firmly. The whole point of a beachhead is focus. If they insist, split resources 70/30 and make one clearly primary. Two half-efforts are worse than one full effort.
