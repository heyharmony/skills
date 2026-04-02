---
name: "Extract Article Insights"
description: "Extract key insights, arguments, and action items from any web article or blog post — produce a structured knowledge card for research, sharing, or reference. Trigger on: extract article, summarize article, article insights, read this article, what does this article say, article breakdown."
dependencies: []
connectors:
  - name: "Notion"
    reason: "Save extracted insights directly to a research database or wiki"
  - name: "Slack"
    reason: "Share article summaries to relevant team channels"
  - name: "Google Drive"
    reason: "Store article knowledge cards in shared research folders"
author: "Harmony"
version: "1.0.0"
icon: "sparkles"
cover: ""
screenshots: []
category: "Marketing"
---

## Purpose

Extract Article Insights transforms any web article or blog post into a structured, reusable knowledge card. Rather than just pulling a summary, this skill identifies the author's core thesis, maps supporting arguments with evidence, pulls meaningful quotes, and surfaces actionable takeaways. The result is a clean card that you can save, share, or reference — ideal for research, competitive analysis, or team knowledge sharing.

## When to Use

- **Research & Investigation**: Reading competitor articles, industry reports, or trend pieces and need to capture key points fast.
- **Content Curation**: Building a research database and want structured, comparable knowledge cards for each source.
- **Team Sharing**: Found something your team should know but they don't have time to read — send them the card instead.
- **Decision Making**: Evaluating a new tool, strategy, or vendor and need to extract the core claims and evidence.
- **Knowledge Base Building**: Converting external insights into a format you can tag, search, and reference in your wiki or CMS.

## Instructions

1. **Receive the Input**: Accept either a direct URL or pasted article text from the user.
2. **Fetch & Clean Content**: Navigate to the URL or work with the text provided. Extract the main body content, removing ads, navigation, and boilerplate. Handle paywalls gracefully (note if content is partial).
3. **Identify Core Thesis**: Read the headline, intro, and structure to pinpoint the article's central argument or claim. Write this in 1–2 sentences.
4. **Map Supporting Arguments**: Break down the article into 3–5 key claims or sections. For each, note what evidence or examples the author uses (data, quotes, studies, anecdotes).
5. **Extract Key Quotes**: Pull 2–4 direct quotes that encapsulate the main ideas or most compelling statements. Include enough context so they stand alone.
6. **Assess Source Credibility**: Note the author's role, publication name, date, and any obvious biases or limitations (e.g., "vendor-sponsored" or "based on internal data").
7. **Map Relevance to User Context**: If you have access to Harmony conversation history, identify which projects, teams, or decisions this article relates to. Otherwise, ask the user what problem they're trying to solve and connect the insights to that.
8. **Generate Action Items**: Extract 2–4 concrete things the user should consider or do based on the article (e.g., "Test personalization on mobile," "Review our pricing model," "Schedule demo with this vendor").
9. **Deliver Structured Card**: Format the output as a clean, scannable knowledge card (see Output Format section). Offer to save it to Notion, Google Drive, or Slack.

## Output Format

```
INSIGHT CARD
─────────────

Title: [Article Headline]
Source: [Publication] | Author: [Name] | Date: [YYYY-MM-DD]
URL: [Link]
Credibility: [High/Medium/Low] — [Brief note on source quality & bias]

CORE THESIS
───────────
[1–2 sentence summary of the article's main argument or finding]

KEY ARGUMENTS
─────────────
1. [Claim] → Evidence: [Supporting detail, stat, quote, or example]
2. [Claim] → Evidence: [Supporting detail, stat, quote, or example]
3. [Claim] → Evidence: [Supporting detail, stat, quote, or example]
4. [Claim] → Evidence: [Supporting detail, stat, quote, or example]

NOTABLE QUOTES
──────────────
"[Quote 1]" — [Source/Context]
"[Quote 2]" — [Source/Context]
"[Quote 3]" — [Source/Context]

ACTION ITEMS
────────────
□ [Specific action tied to this article]
□ [Specific action tied to this article]
□ [Specific action tied to this article]
□ [Specific action tied to this article]

RELEVANCE
─────────
Projects/Teams: [e.g., "Product roadmap," "Marketing experiments"]
Related Conversations: [Link to relevant Harmony threads or notes]
Next Review: [Suggested follow-up date or trigger]
```

## Example

**Input**: URL to TechCrunch article "Why AI-Powered Customer Support Is the New Battleground"

**Output**:

```
INSIGHT CARD
─────────────

Title: Why AI-Powered Customer Support Is the New Battleground
Source: TechCrunch | Author: Maria Santos | Date: 2026-03-15
URL: https://techcrunch.com/2026/03/15/ai-customer-support-battleground/
Credibility: High — Established tech publication, author is former VP of Product at two SaaS companies

CORE THESIS
───────────
Companies that deploy AI-powered customer support in 2026–2027 will gain a 30–40% cost advantage and 2x faster resolution times, forcing competitors to follow suit or lose market share. The differentiator is not AI itself—it's how well teams integrate it with human support and product feedback loops.

KEY ARGUMENTS
─────────────
1. Cost Economics Shifting → Evidence: Gartner reports that AI support agents cost 60% less per ticket than human agents, and ROI breakeven is now 6–8 months (down from 18 months in 2024)
2. Resolution Speed Improves → Evidence: Case study: e-commerce company reduced first-response time from 8 hours to 12 minutes using Zendesk + Claude integration
3. Human Agents Become Trainers, Not Ticket-Takers → Evidence: Forward-thinking companies are retraining 40% of support staff as quality reviewers and product feedback specialists
4. Customer Expectations Rise Fast → Evidence: 73% of surveyed customers now expect immediate AI response, but only 31% are satisfied with current AI support quality (disconnect = market opportunity)

NOTABLE QUOTES
──────────────
"The companies winning in 2026 won't be the ones with the best AI. They'll be the ones with the best humans managing the AI." — Maria Santos, TechCrunch

"We thought AI would replace support teams. Instead, it eliminated the job of 'answering common questions' and created the job of 'training AI and listening to customers.'" — James Liu, VP Support at Proximo (customer success platform)

"If you're not piloting AI support by Q2 2026, you're already behind." — Analyst Report, Forrester Wave: Customer Service AI Solutions

ACTION ITEMS
────────────
□ Schedule 2-hour brainstorm with Product and Support teams on AI integration roadmap
□ Request demo of Zendesk AI module and review integration with Proximo's existing ticketing system
□ Audit current support ticket volume and identify top 20 issue categories (quick AI wins)
□ Plan pilot: route 5–10% of tickets to AI agent, track resolution rate and CSAT by category

RELEVANCE
─────────
Projects/Teams: Proximo Product Roadmap (Q2 2026 OKRs), Support Operations (efficiency initiative)
Related Conversations: Slack #product-innovation thread "AI investment priorities," Design review "Escalation workflows"
Next Review: 2026-05-15 (post-pilot, before full rollout decision)
```

## Edge Cases

- **Paywalls & Gated Content**: If the article is behind a paywall, note this clearly in the card and extract what you can from the preview/snippet. Suggest the user obtain access if the topic is critical.
- **Video/Interactive Content**: If the article embeds key video or interactive elements, note that and describe the content briefly. Offer to generate a separate summary if needed.
- **Opinionated vs. Data-Driven**: Assess the article's tone. If highly opinionated, note this and extract the opinion as a distinct data point (don't present opinion as fact).
- **Rapidly Updating Topics**: For breaking news or fast-moving topics, note the publication date prominently and suggest a follow-up review date soon.
- **No Clear Thesis**: Some articles are roundups or collections of perspectives. Adapt the format to note "Multiple Perspectives" instead of a single thesis, and list each viewpoint as a separate argument.
- **Very Long Articles (5000+ words)**: Extract the first 3–5 key arguments and note that a full deep-dive exists. Offer to create a longer research brief if needed.

## Pro Tips & Best Practices

### Building Your Research Library
- **Tagging Strategy**: Tag each insight card with topic area, industry vertical, and time relevance (e.g., "AI + SaaS + Q1 2026 Trend"). This makes cards searchable and comparable across your research database. Use consistent naming so filters work across all cards.
- **Dating & Versioning**: Always capture publication date and a "next review" date. Markets move fast — a 6-month-old article may need re-evaluation in light of new developments. Set reminders to revisit key articles quarterly.
- **Cross-Reference Links**: When saving to Notion, link related cards to each other. Build a knowledge graph that shows how insights relate across topics and time. This helps surface patterns when reading multiple cards on the same topic.
- **Archive Older Insights**: As new research emerges, mark outdated cards as "superseded" rather than deleting them. This preserves decision history and context.

### Extracting Actionable Insights
- **Avoid Generic Actions**: Don't extract action items like "Consider this approach." Instead, aim for specificity: "Pilot this approach with segment X in Q2, measuring Y metric."
- **Connect to Decisions**: Map each article to a specific business decision or problem the user is trying to solve. This turns passive research into active input for strategy.
- **Evidence Weight**: Not all evidence is equal. Note whether claims are backed by peer-reviewed research, analyst reports, proprietary data, or anecdotes. Assess reliability accordingly.

### Credibility Assessment
- **Author Track Record**: If the author has a public background (LinkedIn, previous publications), note their expertise and potential biases. A former VP of Product writing about product strategy carries more weight than a generalist blogger.
- **Publication Reputation**: Recognize the difference between breaking news (often updated), opinion pieces (subjective), and analysis (usually deeper). Adjust your confidence accordingly. Tier publications: tier-1 (Gartner, McKinsey, Harvard Business Review), tier-2 (industry-specific), tier-3 (blogs, personal sites).
- **Citation Depth**: Articles that cite original research or primary sources are more credible than those making unsourced claims. Note the depth. An article citing Gartner research is more credible than one saying "according to industry experts."
- **Recency vs. Timelessness**: Newer isn't always better. A 5-year-old foundational article may be more useful than a trendy 1-week-old take. Note both age and applicability.

### Integration with Your Workflow
- **Slack Auto-Sharing**: Set up the skill to automatically share key articles to relevant team channels (e.g., articles about AI go to #product-innovation).
- **Notion Sync**: Create a weekly digest of new article insights in your research wiki, organized by theme or business vertical.
- **Decision Inputs**: Use insight cards as primary source material when building strategy docs, competitive analyses, or making major product decisions.

## Limitations & When Not to Use

- **Primary Research**: This skill extracts *existing* insights from published content. It's not a substitute for original user research, surveys, or customer interviews.
- **Behind Closed Paywalls**: If an article is fully behind a paywall and you don't have access, the skill can't extract the full content. It can work with previews, but the card will be incomplete.
- **Highly Visual Content**: Articles that rely heavily on charts, infographics, or interactive visualizations may lose context in text extraction. Consider reading the original if visuals are critical.
- **Real-Time News**: Breaking news articles are updated frequently. Cards based on very recent articles may need re-evaluation as facts emerge.

## Common Workflows

### Competitive Intelligence Workflow
1. Extract insights from competitor articles, press releases, and founder interviews.
2. Link cards in Notion with a "Competitor Analysis" tag.
3. Feed aggregated insights into your Competitive Battlecard skill to build sales enablement materials.
4. Share key competitive threats with product and leadership teams quarterly.

### Market Research Workflow
1. Systematically extract insights from 5–10 sources on an emerging trend (e.g., "Product-Led Growth in 2026").
2. Tag all cards with the trend name and date range.
3. Use Summarize Research Findings to create a comprehensive briefing document.
4. Present findings in a strategy meeting with action recommendations.

### Content Inspiration Workflow
1. Extract insights from industry articles and thought leadership pieces.
2. Use those insights as seed ideas for your own content (blog posts, videos, whitepapers).
3. Link your content back to the original insights as research sources.
4. Over time, build a content library informed by the best thinking in your space.

## Related Skills

- **Summarize Research Findings**: When you have *multiple* articles on related topics, use this skill to synthesize findings across sources into a comprehensive brief.
- **Deep Research**: Use that skill to do original investigation before or after reading published articles — combine both for comprehensive understanding.
- **Competitive Battlecard**: Extract article insights about competitors and feed them into competitive positioning and sales battlecards.
- **Meeting Prep**: Use extracted insights to prepare for calls with customers, investors, or partners. Reference specific data points and quotes from credible sources.

