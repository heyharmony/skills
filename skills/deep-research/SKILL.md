---
name: "Deep-Research Any Topic"
description: "Deep-research any topic and produce a structured report — from a quick 1-page overview to a 10+ page deep dive you can reference and share. Standalone research not tied to a specific meeting. Trigger on: research this topic, deep dive on, what's the full picture on, put together research on, build me a report about, I need to understand."
---

## Purpose

Turn any topic into a well-structured, source-backed research report the user can reference, share with colleagues, or use to make decisions. The report adapts in depth based on the user's needs — from a quick executive overview to a thorough deep dive with multiple perspectives and actionable recommendations.

## When to Use

- The user needs to get smart on a topic quickly before a meeting, presentation, or decision.
- Someone asks for a "research report" or "deep dive" on a subject.
- The user wants to understand a market, technology, competitor, trend, or concept in depth.
- A decision needs to be informed by structured research with different perspectives considered.
- The user wants something they can save as a reference document and come back to later.

## Gathering Context

Before diving in, collect three pieces of information. If the user's prompt already covers them, skip ahead. Otherwise, ask briefly:

1. **Topic** — What specifically should the report cover? Encourage the user to be specific (e.g., "AI in healthcare diagnostics" rather than just "AI").
2. **Depth** — How thorough should this be?
   - *Quick overview* — ~1 page, executive-level summary. Good for getting oriented fast.
   - *Standard* — 3–5 pages with supporting evidence and multiple perspectives. The default if not specified.
   - *Deep dive* — 10+ pages, comprehensive treatment with detailed findings, data, and extensive sourcing.
3. **Context** — Why is the user researching this? Knowing whether it's for a board presentation, a product decision, personal learning, or competitive analysis changes what to emphasize. Also ask if there are specific angles or questions they care most about.

If the user doesn't specify depth, default to Standard.

## Research Process

### 1. Scoping

Based on the topic and context, identify the key dimensions to investigate. Think about:
- What background does the reader need to understand the topic?
- What's happening right now that makes this relevant?
- What are the main findings or data points that matter?
- Who are the key players or stakeholders, and what do they think?
- What does this mean for the user's specific situation?
- What should the user actually do with this information?

### 2. Gathering Information

Use web search extensively to find current, high-quality sources. Prioritize:
- Primary sources (official reports, research papers, company announcements) over secondary coverage
- Recent information — flag anything older than 12 months as potentially outdated
- Multiple perspectives on contested or evolving topics
- Quantitative data where available (market sizes, growth rates, adoption statistics)

Keep track of every source as you go. You'll need them for the Sources section.

### 3. Synthesis

Don't just compile facts — synthesize them into a narrative that answers the user's underlying question. Connect the dots between findings. Highlight tensions or contradictions in the evidence. Make it clear what the user should take away.

## Report Structure

Use this structure, adapting section depth to the chosen research level. For a Quick overview, the Executive Summary and Key Findings may be sufficient. For a Deep dive, every section should be substantive.

```markdown
# [Topic] — Research Report

**Date:** [Today's date]
**Depth:** [Quick overview / Standard / Deep dive]
**Prepared for:** [User's context if provided, otherwise omit]

---

## Executive Summary

[3–5 key findings as concise bullet points. This section should stand alone — someone reading only this should walk away informed.]

**Bottom line:** [One sentence capturing the overall conclusion.]

**Recommended action:** [One sentence on what to do next, if applicable.]

---

## Background & Context

[What this topic is and why it matters now. Set the stage so a reader unfamiliar with the subject can follow the rest of the report. Include key definitions, brief history if relevant, and why this is timely.]

---

## Current State

[What's happening today. Recent developments, key statistics, market dynamics, regulatory changes — whatever paints an accurate picture of where things stand right now. Use data and cite sources.]

---

## Key Findings

### Finding 1: [Clear, declarative heading]
[Supporting evidence, data, and source references. Explain why this finding matters.]

### Finding 2: [Clear, declarative heading]
[Supporting evidence, data, and source references.]

### Finding 3: [Clear, declarative heading]
[Supporting evidence, data, and source references.]

[Add more findings as the topic warrants. Quick overview: 2–3 findings. Standard: 3–5. Deep dive: 5+.]

---

## Different Perspectives

[This section is important for giving the user a balanced view. Present the main schools of thought or stakeholder positions on the topic.]

**Perspective A — [Label]:** [Who holds this view and why. What evidence supports it.]

**Perspective B — [Label]:** [Who holds this view and why. What evidence supports it.]

**Areas of consensus:** [What most informed people agree on.]

**Areas of active debate:** [Where opinions diverge and why.]

[For Quick overview, this can be a brief paragraph. For Deep dive, give each perspective real space.]

---

## Implications

[Connect the research back to the user's context. What does this mean for them, their industry, or their decision? Be specific.]

**Risks to consider:**
[What could go wrong or what downside scenarios exist.]

**Opportunities to explore:**
[What upside scenarios or openings does the research reveal.]

---

## Recommended Actions

[Concrete, prioritized next steps based on the findings. These should follow logically from the research — not generic advice. Include timeline if the user's context makes that relevant.]

1. [Action 1 — with brief rationale]
2. [Action 2 — with brief rationale]
3. [Action 3 — with brief rationale]

---

## Sources

[List every source used. For each, include enough detail that the user could find it themselves. Note the type and recency of each source.]

1. [Source title / description] — [URL or publication reference] *(type: [official report / news / research paper / etc.], date: [publication date])*
2. [Continue for all sources]

**Source reliability note:** [Brief assessment of overall source quality. Flag any areas where sourcing was thin or where the user should verify independently.]

---

## Questions for Further Research

[What couldn't be fully answered? What would benefit from deeper investigation, expert interviews, or access to proprietary data? This section is honest about the limits of what desk research can achieve.]

- [Question 1]
- [Question 2]
```

## Quality Standards

- **Be specific over generic.** "The market is growing" is weak. "The global conversational AI market reached $13.2B in 2025, growing at 21.8% CAGR" is useful.
- **Cite as you go.** Every factual claim should trace back to a source in the Sources section.
- **Flag uncertainty.** If data is conflicting, estimates vary widely, or sources disagree — say so explicitly rather than picking one version and presenting it as fact.
- **Tailor to the user.** If they told you why they're researching this, the Implications and Recommended Actions sections should speak directly to that context.
- **Be honest about gaps.** The Questions for Further Research section exists because no report covers everything. Use it.

## Delivery

Save the final report as a markdown file named with the topic (e.g., `deep-research-ai-healthcare-diagnostics.md`). Place it in the user's workspace folder so they can access and share it.

If the report is a Deep dive (10+ pages), consider also providing a one-page executive summary as a separate file for quick sharing.

## Edge Cases

- **Topic is too broad:** Ask the user to narrow it. If they don't, default to a Quick overview that maps the landscape and suggests 2–3 more focused follow-up topics.
- **Very little information available:** Be transparent. Deliver what you can find, clearly mark the gaps, and suggest alternative research approaches (e.g., expert interviews, proprietary databases).
- **User provides specific angles or questions:** Weave answers to their specific questions throughout the relevant sections rather than creating a separate Q&A section. Make sure every question they raised is addressed somewhere.
- **Sensitive or speculative topics:** Stick to verifiable information. Label inferences, forecasts, and estimates clearly. Present multiple viewpoints on politically or ethically charged topics.
- **User asks for a specific format (PDF, docx, etc.):** The default is markdown, but accommodate format requests using the appropriate document skills.
