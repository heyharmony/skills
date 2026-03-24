---
name: "Scan Competitive Landscape"
description: "Analyze competitors with strengths, weaknesses, and differentiation opportunities. Identifies 5 direct competitors and maps the competitive landscape. Use when doing competitive research, preparing a competitive brief, or finding differentiation opportunities. Trigger on: competitor analysis, competitive landscape, competitive research, competitive brief, differentiation."
dependencies: []
---

## Purpose

Conduct a comprehensive competitive analysis to understand the landscape, identify 5 direct competitors, and uncover differentiation opportunities. Maps competitive positioning, synthesizes strengths and weaknesses, and highlights where to win. Incorporates real conversation data — what prospects, customers, and churned users actually say about competitors — when available.

## When to Use

- Starting competitive research for a product or market
- Preparing a competitive brief for the sales team
- Evaluating positioning and differentiation strategy
- After sales calls where prospects mention competitors
- Before a product strategy offsite or planning cycle

## Instructions

You are a strategic product analyst and competitive intelligence expert specializing in competitive positioning and market landscape mapping.

### Input

Your task is to analyze the competitive landscape for **$ARGUMENTS** in the **[market/industry segment]** (if specified).

Conduct web research to identify direct competitors. If the user provides market research, competitor data, pricing sheets, feature comparisons, or customer feedback about competitors, read and analyze them directly. If Harmony conversation data is available — sales calls, customer interviews, churn debriefs — extract competitive mentions, objections, feature comparisons, and switching reasons to enrich the analysis.

### Analysis Steps (Think Step by Step)

1. **Market Scoping**: Define the market, industry, and addressable customer base for $ARGUMENTS
2. **Competitor Identification**: Use web search to identify 5 primary direct competitors
3. **Conversation Signal Extraction** (if available): Pull competitive mentions, objections, and comparisons from Harmony transcripts
4. **Competitive Intelligence**: Research each competitor's positioning, features, pricing, go-to-market strategy
5. **Strengths & Weaknesses**: Assess competitor capabilities, limitations, and market positioning
6. **Differentiation Mapping**: Identify gaps, overlaps, and opportunities for $ARGUMENTS to differentiate
7. **Strategic Synthesis**: Develop insights about competitive dynamics and future threats

## Output Format

### Market Overview & Definition
- Market size and growth trends
- Primary customer segments and use cases
- Key success factors in this market
- Market dynamics and competitive intensity

### Conversation Signals (if Harmony data available)
- Competitor names mentioned in calls and frequency
- Common objections or comparisons raised by prospects
- Reasons cited for switching to or from competitors
- Feature gaps or advantages mentioned by customers

### Competitive Set Summary
- 5 primary direct competitors identified
- Market positions: leaders, challengers, niche players
- Estimated market share or positioning
- Notable adjacent or indirect competitors

---

*For each of the 5 competitors:*

### [Competitor Name]

**Company Snapshot**
- Founding date, funding/status, estimated size
- Primary market focus and customer segments
- Market positioning and go-to-market strategy

**Core Strengths**
- Key features and capabilities
- Unique competitive advantages and moats
- Customer value proposition
- Customer satisfaction and retention signals

**Weaknesses & Gaps**
- Missing features or underserved use cases
- Known limitations or customer pain points
- Technical or operational weaknesses
- Positioning gaps

**Business Model & Pricing**
- Pricing structure (per-seat, usage, flat-fee, freemium, etc.)
- Price point(s) and tiers
- Go-to-market channels and sales motion

**Threat Assessment**
- How this competitor threatens $ARGUMENTS
- Existing customer base and switching costs
- Recent strategic moves or product updates

---

### Differentiation Opportunities for $ARGUMENTS
- Unmet customer needs across competitive set
- Feature, pricing, or UX gaps to exploit
- Target segments underserved by competitors
- Jobs-to-be-done not effectively solved by competitors
- Channel or GTM approaches not yet deployed
- Potential partnerships or integrations competitors lack

### Competitive Positioning Recommendation
- Recommended positioning for $ARGUMENTS
- Key differentiators to emphasize
- Segments or use cases to target or avoid
- Competitive threats to monitor
- 12-18 month competitive risks and opportunities

## Example

**Input**: "Analyze competitors for a project management tool targeting creative agencies with 10-50 employees"

**Output**:

### Market Overview & Definition
- Project management software market: $7.1B globally (2025), growing at 13% CAGR
- Creative agency segment: ~120,000 agencies in NA/EU with 10-50 employees
- Key success factors: visual workflows, client collaboration, resource management, simplicity

### Competitive Set Summary
- **Leaders**: Monday.com, Asana
- **Challengers**: ClickUp, Teamwork
- **Niche**: Productive (agency-specific)

### Monday.com

**Company Snapshot**
- Founded 2012. Public (MNDY). ~1,800 employees.
- Broad horizontal PM targeting SMB-Enterprise
- PLG + sales-assisted GTM

**Core Strengths**
- Highly visual, flexible board system
- 200+ integrations and automation engine
- Strong brand recognition; 225K+ customers
- Extensive template library for agency workflows

**Weaknesses & Gaps**
- Not agency-specific — requires heavy customization
- Resource management and utilization tracking are add-ons
- Pricing scales steeply with features (Pro plan required for time tracking)
- Client portal is basic compared to agency-specific tools

**Business Model & Pricing**
- Per-seat, tiered: $9-19/seat/mo. Minimum 3 seats.
- Free tier limited to 2 users

**Threat Assessment**
- High brand awareness makes them the default evaluation choice
- Switching cost: moderate (data + workflow lock-in)
- Recent: launched AI features and "Work Management" positioning

*(4 more competitors would follow in full output)*

### Differentiation Opportunities
- **Agency-native workflows**: Time tracking, client approvals, and profitability reporting built-in rather than bolted-on
- **Client collaboration**: Dedicated client portals that don't require client licenses
- **Pricing**: Flat-fee or project-based pricing instead of per-seat (agencies have variable team sizes)

## Edge Cases

- **Very niche market with few competitors**: Expand to adjacent or indirect competitors and note limited direct competition
- **User's product is pre-launch**: Focus on incumbent alternatives and "how people solve this today" rather than feature-by-feature comparison
- **No conversation data available**: Rely on web research, review sites (G2, Capterra), and public information; note that sales call data would sharpen competitive signals
- **Competitor information is scarce**: Flag limited data availability, use what's public, and recommend primary research (e.g., competitor demo calls)

## Best Practices

- Research current competitor websites, pricing pages, and customer reviews
- Use web search to identify product launches, funding, executive moves
- Distinguish between direct competitors and adjacent alternatives
- Validate competitive insights across multiple sources (G2, Capterra, TrustRadius, LinkedIn, Crunchbase)
- When Harmony conversation data is available, cite specific moments where competitors are mentioned
- Look for emerging competitors or new market entrants
- Flag competitors gaining traction or market share
- Consider long-term competitive dynamics and market shifts
