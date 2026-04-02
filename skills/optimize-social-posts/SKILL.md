---
name: "Optimize Social Posts"
description: "Score and optimize social media posts for maximum reach — analyze hooks, structure, engagement triggers, and platform-specific best practices for Twitter/X and LinkedIn. Trigger on: optimize post, social media post, improve my tweet, LinkedIn post, make this viral, post review, social copy."
dependencies: []
connectors:
  - name: "Slack"
    reason: "Pull draft posts shared in marketing channels for optimization"
  - name: "Notion"
    reason: "Reference content calendar, brand voice guidelines, and past top-performing posts"
  - name: "HubSpot"
    reason: "Pull audience persona data and campaign context to inform messaging"
author: "Harmony"
version: "1.0.0"
icon: "sparkles"
cover: ""
screenshots: []
category: "Marketing"
---

# Purpose

Optimize social media posts for maximum algorithmic reach and engagement. This skill analyzes draft posts for hook strength, narrative structure, engagement triggers, and platform-specific best practices, then delivers a confidence score (1-100) and 3 rewrite variants at different tones. Use it to iterate on posts before publishing to Twitter/X, LinkedIn, or Threads.

# When to Use

- **Draft review**: Paste a draft post and get immediate scoring + suggestions
- **Pre-publish validation**: Run posts through this before scheduling
- **Content strategy iteration**: Compare multiple versions to find the strongest angle
- **Performance troubleshooting**: Revive underperforming post types with AI-driven rewrites
- **Cross-platform adaptation**: Take a post and optimize specific variants for Twitter vs. LinkedIn audiences
- **Campaign launches**: Optimize announcements, product launches, thought leadership threads

# Instructions

## Step 1: Receive Draft & Context
Collect the draft post text, target platform (Twitter/X, LinkedIn, or Threads), audience segment (e.g., "founders," "marketing leaders," "engineers"), and any campaign context (new feature, thought leadership, content series, engagement play).

## Step 2: Score the Hook (1-10)
Evaluate the opening line for:
- **Specificity**: Does it name a concrete problem or outcome?
- **Curiosity**: Does it make the reader want to keep reading?
- **Relevance**: Does it speak directly to the audience's interests?
- **Brevity**: Can it be grasped in 2 seconds?

Deduct points for vagueness, corporate jargon, or generic openings.

## Step 3: Analyze Structure
- **Readability**: Are there visual breaks (line breaks, numbered lists, bullet points)?
- **Length**: Is it platform-appropriate? (Twitter: under 280; LinkedIn: 1300-2300 chars; Threads: flexible)
- **Flow**: Does each sentence build on the previous one logically?
- **Whitespace**: Is there adequate breathing room between ideas?

Flag wall-of-text posts, inconsistent formatting, or rambling conclusions.

## Step 4: Identify Engagement Triggers
Scan for:
- **Questions**: Direct asks that invite replies
- **Data/numbers**: Surprising statistics, metrics, or proof points
- **Controversy**: Non-inflammatory opinions that spark discussion
- **Storytelling**: Personal anecdotes, before-after narratives, or case studies
- **Call-to-action**: What do you want readers to do? (Comment, share, click, apply)
- **Emotion**: Does it resonate on a human level (humor, vulnerability, inspiration)?

## Step 5: Apply Platform-Specific Algorithm Insights
### Twitter/X
- **Replies > retweets**: Design for conversation, not broadcast
- **Thread performance**: Open-ended questions and numbered insights outperform single posts
- **Timing**: US-based audiences engage 8-10am ET, 12-1pm ET, 5-7pm ET on weekdays
- **Visual breaks**: Use line breaks liberally; dense text underperforms
- **Hashtag strategy**: 1-2 highly targeted hashtags; oversaturation reduces reach

### LinkedIn
- **Dwell time**: Native text posts (no links) keep people on LinkedIn longer, boosting algorithmic favor
- **Comments > likes**: Posts that spark substantive discussion rank higher
- **Paragraph structure**: Short, punchy paragraphs outperform walls of text
- **Personal voice**: Posts from individuals outrank company pages; authenticity signals high engagement
- **CTA clarity**: "What's your take?" outperforms generic "Let me know in comments"
- **Hashtag strategy**: 3-5 strategic hashtags; avoid spam tags; use trending industry keywords

### Threads
- **First thread post**: Critical—must hook reader in opening line
- **Thread length**: 8-15 posts optimal; longer threads see engagement drop-off
- **Breakpoints**: End each post with tension or intrigue to keep readers scrolling
- **Call-to-action**: Final post should include clear CTA (follow, share, reply)

## Step 6: Generate Overall Post Score (1-100)
Calculate score as:
- Hook strength: 20 points
- Engagement triggers: 25 points
- Platform alignment: 20 points
- Structure & readability: 20 points
- Originality & authenticity: 15 points

Posts scoring 75+ are ready to publish. 60-74 need iteration. <60 need significant rework.

## Step 7: Generate 3 Rewrite Variants
Provide three distinct approaches:
1. **Data-driven**: Lead with surprising stat or insight; appeal to logical minds
2. **Narrative/emotional**: Lead with story, vulnerability, or human insight; appeal to hearts
3. **Provocative/opinionated**: Lead with contrarian take or bold statement; appeal to engagement-seekers

Each variant should be platform-ready and include revised CTA.

## Step 8: Suggest Posting Strategy
- **Optimal posting time** based on platform and audience
- **Hashtag recommendations** (platform-specific)
- **Companion content suggestion** (follow-up thread, stats graphic, video, etc.)
- **Engagement playbook** (how to respond to replies for maximum visibility)

# Output Format

```
ORIGINAL POST SCORE: [X/100]
Hook Score: [X/10]

---

ANALYSIS

Structure & Readability: [Assessment + specific feedback]
Engagement Triggers Present: [List strengths and gaps]
Platform Fit ([Platform]): [Assessment]
Originality: [Assessment]

---

VARIANT 1 — Data-Driven [Score: X/100]
[Rewritten post text]

---

VARIANT 2 — Narrative/Emotional [Score: X/100]
[Rewritten post text]

---

VARIANT 3 — Provocative/Opinionated [Score: X/100]
[Rewritten post text]

---

PUBLISHING STRATEGY

Optimal Posting Time: [Day/time + reasoning]
Hashtags: [Platform-specific recommendations]
Engagement Playbook: [How to fuel discussion]
Companion Content: [Suggested follow-up or visual support]
```

# Example

**Scenario**: Maya Chen is a VP of Marketing at Mosaic (design collaboration tool). She's announcing a new AI-powered design layout feature and wants to optimize a LinkedIn post.

**Original draft**:
> We're excited to announce AI-powered layout suggestions in Mosaic! This will help teams save time and improve design consistency across projects. Learn more in our blog.

---

**OUTPUT**

```
ORIGINAL POST SCORE: 42/100
Hook Score: 3/10

---

ANALYSIS

Structure & Readability: Wall-of-text format with no visual breaks. No line breaks between ideas. Feels corporate and broadcast-y rather than conversational.

Engagement Triggers Present:
- ✓ News hook (new feature)
- ✗ No question or intrigue
- ✗ No data or quantified benefit
- ✗ No personal voice or story
- ✗ Weak CTA (generic "learn more")

Platform Fit (LinkedIn): Underutilizes platform strengths. Generic company-speak. No invitation for discussion. Too short for LinkedIn's dwell-time advantage (< 200 chars).

Originality: Feels like a standard feature announcement. No insight into *why* teams need this, no contrarian angle, no human element.

---

VARIANT 1 — Data-Driven [Score: 76/100]

Our design teams were spending 6+ hours per week on layout iteration alone.

We just released AI-powered layout suggestions in Mosaic—and early data is striking:

• 68% reduction in layout review cycles
• 12x faster design-to-handoff
• 89% of teams adopted it within 48 hours

How it works: Describe your design system rules once. The AI learns your brand patterns and suggests layouts in real-time.

No more "does this match our standards?" questions.

What's changed for your design process this year? Curious what's still eating up your team's time.

---

VARIANT 2 — Narrative/Emotional [Score: 81/100]

Last week, I watched one of our design leads spend 45 minutes... adjusting component spacing.

Not because she enjoyed it. Because it had to be *perfect* and *consistent*.

This is what great design teams deal with: the gap between vision and execution.

Today, we're closing that gap.

Meet AI-powered layout suggestions in Mosaic. You describe your design system rules once. The AI learns them. Then it suggests layouts in real-time, right in context.

No tedium. No second-guessing. Just more time for the creative work that actually matters.

If your team's design process involves this kind of repetition, give it a try. And tell me: what design task would you eliminate if you could?

---

VARIANT 3 — Provocative/Opinionated [Score: 74/100]

Hot take: Design teams are wasting 15% of their capacity on layout busywork.

Alignment. Spacing. Consistency checks. Pixel-perfection verification.

All things that *should* be algorithmic.

We just released AI-powered layout suggestions in Mosaic—and it's already eliminating that waste for teams across design, product, and operations.

The AI learns your design system in minutes. Then it suggests layouts that match your standards automatically.

Your designers get 8+ hours back per week. Your design system stays bulletproof.

Spicy opinion: If you're not automating layout consistency yet, you're leaving money and morale on the table.

Are you still doing this manually? Or has your team moved past it?

---

PUBLISHING STRATEGY

Optimal Posting Time: Tuesday–Thursday, 10:30am ET (post-standup, pre-lunch when engagement is high on LinkedIn). Avoid Mondays (crowded feed) and Fridays (lower engagement).

Hashtags: #DesignOps #DesignSystems #AI #ProductLed #DesignTools #Productivity (avoid #design alone—too noisy)

Engagement Playbook:
- Reply to every comment within 30 min with thoughtful follow-up questions
- If someone shares a design tool/process story, engage by asking follow-up on *their* workflow
- Encourage designers to share specific time-savings in replies (social proof amplification)
- Pin the highest-engagement variant in feed for 3 days

Companion Content: 1) 45-second demo video showing AI layout generation in action (insert as carousel); 2) Blog deep-dive on design system automation ROI
```

# Edge Cases

- **Product not yet launched**: Use future tense or embargo date. Focus on problem/vision rather than feature specifics.
- **Controversial or polarizing topic**: Flag if post risks backlash. Suggest tone adjustments to maintain respectability without diluting authenticity.
- **Highly technical audience vs. executive audience**: Create separate variants; technical audiences reward precision and data; executives reward business outcome clarity.
- **Personal brand vs. company brand**: Personal LinkedIn posts (1st person) outperform company announcements. If posting as founder/exec, emphasize personal POV and vulnerability.
- **Underperforming post type**: If retweeting/resharing fails, suggest reframing as original narrative or contrarian take rather than aggregation.
- **Limited time to publish**: If user needs immediate go/no-go, prioritize Variant 1 (Data-Driven); it scores highest and requires least copy rework.

# Next Steps

Review the output variants and select one, or blend elements from multiple variants. Test the chosen variant using the publishing strategy timing and hashtag guidance. Track engagement metrics (replies, shares, saves on LinkedIn; retweets, replies on Twitter) for 24 hours, then iterate for next post.

