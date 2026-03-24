---
name: Build Sales Enablement Assets
description: Create sales collateral (decks, one-pagers, objection handling docs, demo scripts, battlecards) grounded in real conversation data
role: Sales & Revenue
action: Create
connectors:
  - hubspot
  - salesforce
  - slack
  - gmail
  - google-drive
---

## Purpose
Sales teams close more deals when they trust their materials. This skill creates battle-tested collateral by mining Harmony's conversation data—actual objections, competitive mentions, buyer language, and proven talking points from your pipeline. Whether you're refreshing a sales deck, building competitive battlecards, or scripting demos, this skill ensures every asset reflects what actually resonates with your buyers.

## When to Use This Skill

1. **Creating or refreshing a sales deck** — You need a 10-12 slide story arc (problem → cost → shift → approach → proof → case study → implementation → ROI → pricing → next steps) that lands with your buyer personas.

2. **Building a one-pager** — Quick leave-behind or email attachment structured for 30-second scans: problem, solution, differentiators, proof, CTA.

3. **Developing objection handling docs** — You want organized responses to common pushback (price, timing, competition, authority, status quo, technical) tied to winning language from past deals.

4. **Scripting a demo** — You need a customized opening, discovery recap, solution walkthrough, and close tailored to a specific buyer persona or deal stage.

5. **Building a competitive battlecard** — You're losing deals to a known competitor and need positioning, feature comparison, proof points, and counter-messaging all in one reference card.

6. **Addressing low adoption of sales materials** — Reps aren't using your existing collateral. This skill analyzes why and regenerates assets in the language and format reps actually trust.

7. **Capturing post-sale validation** — Customer success calls reveal what buyers loved about your approach post-purchase. Extract and weave that proof into new materials.

## Instructions

**Step 1: Gather Conversation Data**
Pull call transcripts, deal notes, and email threads from your connected sources (HubSpot deal records, Salesforce opportunities, Slack deal discussions, Gmail prospect threads). Focus on recent wins, losses, and stalled deals. Pay special attention to objection moments, competitive mentions, and buyer language that shifted momentum.

**Step 2: Identify Collateral Type & Persona**
Decide which asset you're building (deck/one-pager/battlecard/objection doc/demo script). Define your target buyer persona—title, company size, buying trigger, success metric. If you're addressing low adoption, specify which reps or segments aren't using current materials.

**Step 3: Extract Winning Language & Objections**
Mine the transcript data for: (a) exact phrases buyers used that resonated, (b) objections they raised and how winning deals overcame them, (c) competitor names and how they were differentiated against, (d) proof points (metrics, case studies, timeline wins) that moved deals forward.

**Step 4: Map to Collateral Structure**
For sales decks: organize insights into the 10-12 slide arc. For one-pagers: distill problem + solution + proof into scannable format. For objection docs: group by objection type and pair with proven rebuttals. For demo scripts: build opening hook, discovery questions, and close around the persona's pain and success metrics. For battlecards: structure as positioning statement, feature matrix, proof points, and counter-messaging.

**Step 5: Draft & Validate Language**
Write the first draft using conversation data as your source of truth. Avoid corporate jargon—use the exact language your buyers and reps used. Share draft with 2-3 reps for feedback: "Does this match how you actually talk to buyers?"

**Step 6: Iterate & Lock**
Refine based on rep feedback. Lock final version and distribute through Slack, email, or your sales enablement platform with clear guidance on when/how to use each asset.

## Output Format

Output a structured asset file (YAML or Markdown) containing:

```
---
asset_type: [sales-deck | one-pager | objection-handler | demo-script | battlecard]
persona: [buyer title, company size, buying trigger]
created_date: [ISO 8601]
version: 1.0
source_conversations: [# of calls/emails analyzed]
---

# Asset Title

## Asset Overview
[2-3 sentence summary of what this asset addresses and when to use it]

## Content Blocks
[For decks: slide-by-slide outline with key talking points]
[For one-pagers: problem | solution | differentiators | proof | CTA, each ≤2 lines]
[For objection docs: objection category → rebuttal → proof point]
[For demo scripts: opening hook → discovery questions → walkthrough → close]
[For battlecards: positioning statement | competitor matrix | proof points | counter-messaging]

## Proof Points
[Metrics, customer quotes, win/loss data grounded in conversation analysis]

## Conversation Sources
[List of 3-5 specific deal moments, customer calls, or competitor discussion threads that informed this asset]

## Rep Notes
[Key reminders for field usage—when to deploy this, how to customize for persona variation, common objections it addresses]
```

## Example

```yaml
---
asset_type: battlecard
persona: Data Engineering Lead, Series B SaaS, evaluating data integration platforms
created_date: 2026-03-22
version: 1.0
source_conversations: 8 discovery calls, 3 loss analyses, 12 Slack #competitive-intel posts
---

# Prismflow vs. DataBridge — Competitive Battlecard

## Asset Overview
Prismflow is a data integration platform for modern data stacks. DataBridge is the incumbent competitor in your space. This card helps Prismflow reps position against DataBridge in evaluation conversations, specifically addressing the 5 objections that historically stall deals.

## Positioning Statement
**Prismflow:** Data integration built for cloud-native teams. Real-time connectors, no custom code, scales with your data volume. DataBridge was designed when data was centralized; Prismflow was built for decentralized, multi-cloud data architectures.

## Competitor Matrix

| Dimension | Prismflow | DataBridge |
|-----------|-----------|-----------|
| Setup Time | 2-3 days (UI-driven) | 4-6 weeks (requires engineering) |
| Real-time Sync | Yes (sub-minute latency) | Batch-only (6-24hr delays) |
| Supports Modern Warehouses | Snowflake, BigQuery, Databricks | Redshift-primary (legacy) |
| Data Quality Rules | Built-in schema detection & monitoring | Manual configuration |
| Pricing Model | Per-GB processed | Per-connector (unpredictable overages) |

## Top 5 Objections & Rebuttals

### Objection 1: "DataBridge is already integrated with our data stack."
**Rebuttal (Conversation Source: Acme Corp loss analysis):** "DataBridge connectors are read-only and batch. You're waiting 24 hours for data to land. Prismflow gives you real-time with code-free setup—in week 1, you'll see fresher data than you do today."
**Proof Point:** Reforge integrated Prismflow in 3 days; their data freshness improved 10x, reducing report latency from 12 hours to 45 minutes.

### Objection 2: "DataBridge pricing is predictable; we don't trust per-GB cost models."
**Rebuttal (Conversation Source: Coder Slack thread, Mar 18):** "DataBridge's per-connector fee adds up fast. Once you integrate 15+ data sources, they cost 3x Prismflow. We're transparent: you pay for data moved, nothing hidden. Budget a 20% buffer and you'll stay under."
**Proof Point:** TechStart, 50M rows/day, $8K/mo on Prismflow vs. $24K/mo DataBridge quote for equivalent throughput.

### Objection 3: "We've already bought DataBridge; migration is too risky."
**Rebuttal (Conversation Source: WebScale customer call, Feb success story):** "You run Prismflow parallel for 2 weeks. No migration risk, no downtime. WebScale did it in a sprint. Once you see real-time data flowing, you'll realize batch delays cost more in lost opportunities than the migration effort."
**Proof Point:** WebScale parallel-ran both platforms for 14 days; zero data loss. Full cutover took 4 hours.

### Objection 4: "Our IT team says DataBridge is more secure (SOC 2 Tier 2)."
**Rebuttal (Conversation Source: FortressData vendor call, Jan):** "Prismflow holds SOC 2 Type II and FedRAMP certification. We exceed DataBridge on security posture. Bring your security team into a technical review; we'll prove it."
**Proof Point:** FortressData's CISO approved Prismflow for classified workloads in a single review cycle (28 days). DataBridge required 6 months of back-and-forth.

### Objection 5: "DataBridge is 'good enough'—why migrate?"
**Rebuttal (Conversation Source: Compass post-win call, Mar 12):** "Good enough costs you. Your analytics team waits 24 hours for stale data. Your ML training uses yesterday's signals. Your customer success team can't react to churn signals in real time. Prismflow costs less, ships real-time, and saves you in operational velocity. The ROI shows up in week 4."
**Proof Point:** Compass (comparable scale) reported $400K/year in avoided churn by moving to real-time alerting post-Prismflow implementation.

## Proof Points & Customer Evidence
- **Reforge:** 10x faster data delivery (12 hrs → 45 min report latency)
- **TechStart:** 3x cost savings vs. DataBridge ($8K vs. $24K/mo)
- **WebScale:** Zero-downtime parallel migration in 14 days
- **FortressData:** SOC 2 Type II approval in 28 days (vs. DataBridge's 6-month security review)
- **Compass:** $400K/year avoided churn through real-time alerting

## Rep Notes
- **Timing:** Deploy this when you're in evaluation against DataBridge (usually discovery → POC phase).
- **Customization:** If prospect has a Redshift-only stack, lead with Prismflow's cost advantage (they'll hit DataBridge overage limits). If they're cloud-native (BigQuery/Snowflake), lead with real-time freshness.
- **Proof Point Tailoring:** Use Reforge example for data-driven orgs; use TechStart for cost-sensitive buyers; use Compass for churn-focused leaders.
- **Avoid:** Bashing DataBridge's UI or team. Stay factual. Position as "built for modern architectures DataBridge predates."
- **Escalation:** If CFO gets involved, email the TechStart cost comparison. If CISO gets involved, offer technical security review.

## Conversation Sources Summary
1. Acme Corp loss analysis (Jan 2026) — "batch delays kept us from real-time analytics"
2. Coder Slack #competitive-intel (Mar 18) — DataBridge overage complaints from 4 reps
3. WebScale customer call (Feb 2026) — successful parallel migration story
4. FortressData vendor call (Jan 2026) — security posture discussion, FedRAMP path
5. Compass post-win call (Mar 12) — customer revealed $400K churn savings from real-time alerting
```

## Edge Cases

1. **No conversation data available:** Build the asset using industry research, known buyer personas, and your product roadmap. Flag that the asset needs validation from 2-3 customer conversations within 4 weeks.

2. **Conflicting messages from different reps:** Identify the source conversation (e.g., one rep's success vs. another's loss). Present both narratives to the team; consensus usually clarifies which message is stronger. Include both in the battlecard if both are valid for different personas.

3. **Competitive landscape shifts:** If a competitor launches a new feature mid-quarter, update the battlecard within 48 hours. Pull new Slack discussions and deal notes. Don't let reps sell against last month's competitive story.

4. **Asset never gets used by field:** This usually means language doesn't match rep vernacular or structure doesn't match their workflow. Re-run this skill with rep feedback as input: "Why aren't you using the one-pager?" Their answers often reveal the real problem (too long, not mobile-friendly, uses terms buyers reject, missing proof points).

5. **Single data point misrepresented:** A one-call mention of a competitor shouldn't become a major positioning pillar. Only elevate themes that appear in 3+ deal moments or Slack discussions. Weigh enterprise wins more heavily than early-stage experiments.

6. **Deal is won but buyer uses different language than your asset:** This is gold. Update the asset to reflect the winning language. Schedule a rep debrief to capture the exact buyer quote and use it in future versions.
