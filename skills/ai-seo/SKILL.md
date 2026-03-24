---
title: AI Search Optimization (AEO) Analyzer
description: Audit and optimize content for AI search visibility across ChatGPT, Perplexity, Google AI Overviews, Claude, and Gemini. Analyze extractability, authority signals, and citation opportunities to maximize zero-click AI search presence.
role: Marketing
action: Analyze
name: ai-seo
connectors:
  - Google Drive: Access existing blog posts, guides, and content docs to audit for AI extractability and structure
  - Slack: Tap team conversations to identify proprietary insights, customer language, and competitive positioning themes
  - Gmail: Mine customer conversations for authority angles, pain points, and language patterns AI models cite
  - HubSpot: Extract customer data and deal language to validate AI-optimized messaging aligns with buyer conversations
  - Notion: Reference content calendars and editorial guidelines to batch optimize upcoming content
---

## Purpose

AI search engines (ChatGPT, Perplexity, Claude, Gemini, Google AI Overviews) answer user queries by synthesizing and citing content from across the web. Unlike traditional SEO, AI Search Optimization (AEO) focuses on making your content **extractable, citable, and authority-rich** so AI models pull your insights into answers users see first.

This skill audits your current AI visibility, identifies gaps in structure and authority, and recommends optimizations that increase the likelihood your content appears in AI-generated responses—without requiring Google rank.

---

## When to Use This Skill

1. **Launching a new content pillar** — Before publishing a guide, benchmark AI visibility and build authority signals from day one
2. **Competitive content analysis** — Understand why competitor content ranks in AI Overviews and ChatGPT summaries, then out-structure them
3. **Refreshing underperforming content** — Content with good Google traffic but zero AI citations needs extractability and authority tuning
4. **Building thought leadership** — Ensure your expert research and original insights surface in AI-cited sources, not as generic summaries
5. **Planning content strategy** — Use Harmony conversation data (sales calls, customer interviews) to identify topics and angles AI models need more coverage on
6. **Audit before major campaigns** — Validate that web properties and third-party presences are AI-bot accessible and properly formatted
7. **Monitoring AI citation rates** — Track which content pieces appear in AI responses over time and optimize the laggards

---

## Instructions

**Step 1: Map Your Current AI Visibility**

Identify 8–12 core topics or content pieces your audience cares about. Search each topic in ChatGPT, Perplexity, Google Search (look for AI Overviews), and Claude with identical prompts. Document:
- Whether your content appears in cited sources
- Which competitor or third-party content the AI returns instead
- The exact passage the AI extracts (if yours is cited)
- Position in the response (top cite vs. lower mention)

Store results in a spreadsheet with columns: Topic | Your Content | Competitor 1 | Competitor 2 | AI Citation Status | Current Gap.

**Step 2: Audit Content Extractability**

Review your 3–5 highest-priority content pieces. For each, check:
- **Definition blocks**: Does the piece open with a clear, one-sentence definition of the core term?
- **Comparison tables**: For how-to or versus content, are comparisons in structured table format (not buried in prose)?
- **FAQ sections**: Does the piece include an FAQ block with 5–8 Q&A pairs matching user intent?
- **Data/statistics**: Are original findings or third-party stats cited with sources, author attribution, and publication date?
- **Subheading clarity**: Can a reader skim subheadings and understand the piece's argument without reading body text?

Rate each piece on a scale (Poor | Fair | Good | Excellent) and flag 2–3 quick wins (low-effort, high-impact edits).

**Step 3: Evaluate Your Authority Signals**

Check Harmony conversation data (sales calls, customer interviews, Slack discussions) for:
- **Unique research or data**: Do you have proprietary survey results, case studies, or performance benchmarks customers mention?
- **Expert credentials**: Are your authors' titles, credentials, or past work prominently featured?
- **Third-party validation**: Do customer testimonials, peer reviews, or analyst mentions exist on your domain or off-domain?
- **Consistency of voice**: Do multiple content pieces reflect the same consistent POV or methodology?

List 3–4 authority signals you already have. Identify 2–3 you're missing (e.g., "We don't cite customer wins in our guides" or "No author bios").

**Step 4: Check AI Bot Access & Robots.txt**

Verify your robots.txt and meta tags allow AI crawlers:
- Confirm `User-agent: *` (or specific AI bots like `CCBot`, `GPTBot`, `Bingbot`) are not blocked
- Check that key content pages have no `noindex` or `nofollow` tags
- Test accessibility: Open your site in an incognito browser and confirm content loads without paywalls or sign-up walls

If content is blocked, document which pages and why. Note any paywall or login barriers that prevent AI models from accessing full text.

**Step 5: Map Content Structure Gaps**

Using Harmony call transcripts, Slack discussions, or customer emails, identify:
- **Definition gaps**: Topics customers ask about repeatedly but your content lacks clear upfront definitions
- **Comparison opportunities**: Customer conversations revealing "X vs. Y" questions your content doesn't address
- **FAQ gaps**: Recurring questions from calls that aren't answered in your guides
- **Attribution gaps**: Insights or statistics mentioned in calls that could be sourced or attributed in content

Create a list of 3–5 structural edits to apply across your top content pieces.

**Step 6: Recommend Optimizations**

For each content piece, recommend:
- **Quick wins** (30 min–1 hr edits): Add definition block, insert comparison table, create FAQ section
- **Medium effort** (2–4 hrs): Rewrite subheadings for clarity, add author bio with credentials, cite new sources
- **Larger projects** (1–2 days): Incorporate new research or case study data, restructure guide around AI-friendly sections

Prioritize optimizations that address authority gaps first (customers cite you less because credibility is unclear), then extractability (content can't be parsed by AI).

**Step 7: Set Up Citation Monitoring**

Establish a monthly or quarterly check:
- Re-run searches from Step 1 using identical prompts
- Compare citation frequency month-over-month
- Flag which optimizations moved the needle
- Identify new competitor content entering AI responses

Document baseline metrics before and after optimization.

---

## Output Format

Create a comprehensive audit report (30–50 lines minimum) with these sections:

```
AI SEARCH OPTIMIZATION AUDIT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

EXECUTIVE SUMMARY
Current AI Visibility Score: [X/10]
Key Finding: [One sentence summary of biggest gap or opportunity]
Recommended Priority: [Quick Wins / Authority / Extractability]

CURRENT AI VISIBILITY MAP
Topic | Content Title | Cited in ChatGPT? | Cited in Perplexity? | Cited in GEO? | Primary Competitor | Gap Assessment
[Fill with 8–12 rows of data]

CONTENT EXTRACTABILITY AUDIT
Content Piece: [Title]
  Definition Block: [Poor | Fair | Good | Excellent] — Notes
  Comparison Tables: [Rating] — Notes
  FAQ Coverage: [Rating] — Notes
  Author Attribution: [Rating] — Notes
  Data & Sources: [Rating] — Notes
  Subheading Clarity: [Rating] — Notes
  Overall Extractability: [Rating]
  Quick Wins: [2–3 specific edits, estimated effort]

[Repeat for 3–5 pieces]

AUTHORITY SIGNAL ASSESSMENT
✓ Existing Strengths:
  - [Signal 1] — Why this matters for AI
  - [Signal 2]
  - [Signal 3]

✗ Gaps (Blocking AI Citations):
  - [Gap 1] — Impact on citations
  - [Gap 2]
  - [Gap 3]

AI BOT ACCESS VERIFICATION
  Robots.txt Status: [Allows AI crawlers: Yes | No | Partial]
  Noindex Tags: [Present on: (list pages)]
  Paywall/Login Barriers: [Present on: (list pages)]
  Accessibility Score: [Green | Yellow | Red]

STRUCTURE OPTIMIZATION ROADMAP
Quick Wins (Week 1):
  1. [Specific edit, estimated time]
  2. [Specific edit, estimated time]
  3. [Specific edit, estimated time]

Medium Effort (Weeks 2–3):
  1. [Structural change, effort estimate]
  2. [Structural change, effort estimate]

Larger Projects (Month 1):
  1. [New research, data integration, or major rewrite]

CITATION MONITORING BASELINE
[Include current citation counts before optimization]

NEXT STEPS
- [ ] Schedule content update planning meeting
- [ ] Brief product/design on schema markup needs (if applicable)
- [ ] Add to content calendar: [X updates across Y pieces]
- [ ] Set reminder for 60-day re-audit
```

---

## Example

**AUDIT: Meridian Analytics — "What is predictive analytics?" Content Pillar**

**EXECUTIVE SUMMARY**
Current AI Visibility Score: 4/10
Key Finding: Competitors dominate AI responses for predictive analytics queries, but Meridian's guides lack clear definitions and third-party mentions that AI models cite.
Recommended Priority: Authority signals + Extractability

**CURRENT AI VISIBILITY MAP**

| Topic | Content | ChatGPT | Perplexity | GEO | Competitor | Gap |
|-------|---------|---------|-----------|-----|------------|-----|
| What is predictive analytics? | Meridian guide (2024) | No | Mentioned 2x | No | Gartner, IBM | Low authority signal; definition buried in intro |
| Predictive analytics vs. descriptive | Meridian comparison (2023) | No | No | No | Microsoft, DataCamp | Competitor content better structured as table |
| Predictive analytics for retail | Meridian case study (2024) | No | No | No | Harvard Business Review, McKinsey | Meridian data too internal; needs third-party quotes |
| Time series forecasting | No Meridian content | — | — | — | Statsmodels, Kaggle | Gap: No Meridian perspective |
| Demand forecasting tools | Meridian product guide | No | Partial (1 cite) | No | Gartner Magic Quadrant | Product guide lacks independent validation |

**CONTENT EXTRACTABILITY AUDIT**

*Meridian Guide: "What is Predictive Analytics?" (2024)*

- **Definition Block**: Fair — Opens with history, not definition. AI models struggle to extract core concept in first two sentences.
  - Quick Win: Rewrite first paragraph to start with: "Predictive analytics is the practice of using historical data, statistical models, and machine learning to forecast future outcomes."

- **Comparison Tables**: Poor — "Differences between predictive and descriptive" buried in prose across 400 words.
  - Medium Effort: Extract into 4-column table (Dimension | Predictive | Descriptive | When to Use).

- **FAQ Coverage**: Good — 6 Q&As included, but positioned at bottom (AI models may truncate before reaching).
  - Quick Win: Move FAQ above related links. Retitle section "Common Questions."

- **Author Attribution**: Fair — Author name listed, no title or credentials.
  - Quick Win: Add one-line bio: "Sarah Chen, Data Science Lead at Meridian, 8+ years in predictive modeling."

- **Data & Sources**: Poor — Original research mentioned (500+ customer implementations) but not formally cited.
  - Medium Effort: Create callout box: "Meridian analyzed 500+ customer implementations (2023–2024) and found predictive models improved forecast accuracy by 34% on average."

- **Subheading Clarity**: Good — Subheadings are topic-focused, but some are passive.
  - Quick Win: Change "How predictive analytics is used" to "Five ways predictive analytics improves business decisions."

**Overall Extractability: Fair (4.5/7)** → Target: Excellent (7/7) after quick wins.

**AUTHORITY SIGNAL ASSESSMENT**

✓ Existing Strengths:
- Meridian case studies demonstrate real-world application (but need external validation).
- Author has relevant background, needs visible bio.
- Content volume: 12 pieces on analytics topics (consistency signal).

✗ Gaps (Blocking AI Citations):
- No third-party validation (analyst mentions, awards, media features).
- Proprietary data not positioned as independent research (feels internal).
- No expert quotes from academia or industry peers.
- Missing Wikipedia or industry association mentions (AI models weight these as authoritative).

**AI BOT ACCESS VERIFICATION**
- Robots.txt Status: ✓ Allows all AI crawlers (User-agent: *)
- Noindex Tags: ✓ None detected
- Paywall/Login Barriers: ✗ Meridian Academy (companion content) is login-gated; guides are open.
- Accessibility Score: Green

**STRUCTURE OPTIMIZATION ROADMAP**

*Quick Wins (Week 1):*
1. Rewrite definition block in "What is Predictive Analytics?" (30 min).
2. Move FAQ to mid-content, retitle section (20 min).
3. Add author bios to 5 core guides (45 min).
4. Extract "Predictive vs. Descriptive" prose into table (1 hr).

*Medium Effort (Weeks 2–3):*
1. Formalize customer data as case study: "Meridian's 2024 Implementation Report—Predictive Accuracy Gains" (4 hrs, requires legal review).
2. Rewrite subheadings for active voice and AI extraction across 6 guides (3 hrs).
3. Add external expert quote to each guide (identify 3 industry partners) (2 hrs research + interviews).

*Larger Projects (Month 1):*
1. Pitch analyst mention: Submit Meridian for Gartner Magic Quadrant review or similar (ongoing).
2. Academic partnership: Collaborate with university on predictive analytics research; publish jointly (2–3 weeks).

**CITATION MONITORING BASELINE**
- ChatGPT "predictive analytics" query: 0 Meridian citations (baseline).
- Perplexity "how to forecast demand": 1 Meridian citation (product guide mention).
- Google AI Overview "predictive vs. descriptive": 0 Meridian citations (baseline).

**Post-optimization target (60 days):** ≥3 ChatGPT citations, ≥2 Perplexity citations, ≥1 GEO mention.

---

## Edge Cases

1. **Content Behind Paywalls or Login Walls**: AI models can't extract what they can't access. If your best research is gated, consider an open-access summary or teaser on your public domain with full version behind login. Monitor whether AI citations increase after removing friction.

2. **Niche or Technical Topics**: Smaller audiences mean fewer web links and thus fewer training examples for AI models. Compensate by building authority on adjacent, higher-traffic topics, then linking to niche content. Cite yourself.

3. **New Company or Domain**: If your domain is under 6 months old, AI models may weight you lower (low backlink history). Prioritize third-party placements (guest posts, Reddit, Twitter/X mentions) to build off-domain authority faster than SEO.

4. **Real-Time or News-Driven Content**: AI models trained on snapshots of the web may lag current events. If your content is timely, include publication date, last-updated timestamp, and cite current sources clearly. Monitor AI responses to trending queries.

5. **Multi-Language or Regional Content**: Some AI models handle non-English content differently. If you serve multiple regions, audit each language version separately. Check robots.txt doesn't inadvertently block regional variants.

6. **Competitive Pricing or Proprietary Models**: If you can't share exact pricing or methodology due to competition, focus on authority and third-party validation instead (customer wins, analyst reports, media mentions). AI models cite these signals even if product details are closed.

---

## Harmony Integration Notes

This skill pulls power from Harmony conversation data:
- **Sales calls**: Customer language in pitches reveals how AI models should phrase your insights.
- **Customer interviews**: Discovery calls highlight gaps or angles competitors miss; feed these into content strategy.
- **Slack discussions**: Team conversations about customer wins, complaints, or competitive positioning surface topics AI models need.
- **Email threads**: Customer questions in email reveal recurring pain points and authority angles content should address.

Link audit findings back to conversation transcripts. If Harmony data shows customers often ask "How does X differ from Y?" but your content lacks a comparison, that's a high-confidence optimization signal.
