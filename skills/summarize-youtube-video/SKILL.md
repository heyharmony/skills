---
name: "Summarize YouTube Video"
description: "Fetch a YouTube video transcript and produce a structured summary — key takeaways, timestamped highlights, notable quotes, and action items. Turns hours of video into minutes of reading. Trigger on: summarize video, YouTube summary, what did they say in this video, video takeaways, watch this for me."
dependencies: []
connectors:
  - name: "Notion"
    reason: "Save video summaries to a learning database or knowledge wiki"
  - name: "Slack"
    reason: "Share video summaries with team members who don't have time to watch"
  - name: "Google Drive"
    reason: "Store video summaries in shared research or learning folders"
---

## Purpose

Summarize YouTube Video transforms long-form video content into a quick, structured read. Instead of watching a 47-minute talk or a 2-hour webinar, you get key takeaways, timestamped highlights, notable quotes, and action items in 2–3 minutes. The skill works by fetching the video transcript, cleaning it, identifying critical segments, and formatting everything in a scannable card. Perfect for staying informed without burning hours, and for sharing insights with teammates who don't have time to watch.

## When to Use

- **Learning Efficiency**: You found a valuable talk or tutorial but don't have 45 minutes right now — get the key points in 2 minutes and decide if you'll watch the full video later.
- **Team Knowledge Sharing**: Your colleague recommends a video. Instead of asking them to explain it, get a structured summary to share on Slack.
- **Webinar Follow-Up**: Attended a webinar and want a quick reference card with timestamps for the sections you need to revisit.
- **Research & Trend Monitoring**: Watching conference talks or expert interviews about your industry and need to extract patterns and insights quickly.
- **Meeting Prep**: Before a call with a vendor or investor, watch their recent video summary to come prepared with informed questions.
- **Onboarding**: New team member needs to understand your product story or key company talks — give them summaries instead of asking them to spend 3 hours watching videos.

## Instructions

1. **Receive the YouTube URL**: Accept the video link from the user. Ask for any context they want highlighted (e.g., "focus on product strategy").
2. **Fetch the Transcript**: Navigate to the YouTube page and attempt to fetch the manual caption/subtitle track first. If unavailable, use the auto-generated transcript. Handle cases where captions are disabled by noting this limitation.
3. **Clean & Deduplicate**: Remove timestamps, auto-generated artifacts (stutters, "um," repeated words), and filler. Reconstruct sentences that were broken across multiple caption blocks. Create a clean, readable transcript.
4. **Identify Key Segments**: Scan the transcript and mark natural breaks (topic shifts, new speaker, major question/answer sections). Identify the 5–8 most important segments based on depth, novelty, and alignment with user's stated interest.
5. **Extract Core Arguments & Takeaways**: From each key segment, pull the main idea in 1–2 sentences. Note what evidence, stories, or examples the speaker uses to support the point.
6. **Pull Notable Quotes**: Extract 3–5 direct quotes (5–20 words each) that feel authoritative, memorable, or summarize a key point. Include the timestamp so the user can jump to that moment in the video.
7. **Generate Action Items**: Identify 2–4 concrete next steps or applications based on what the speaker recommends or what you think the user should do with this information.
8. **Deliver Structured Summary**: Format the output as a clean, scannable summary card (see Output Format section). Include video length, speaker bio, and channel info. Offer to save to Notion, Google Drive, or Slack.

## Output Format

```
VIDEO SUMMARY
──────────────

Title: [Video Title]
Creator: [Speaker Name] | Channel: [Channel Name]
URL: [YouTube Link]
Duration: [HH:MM:SS] | Published: [YYYY-MM-DD]
Speaker Bio: [1–2 sentences on speaker's expertise/role]

CORE TOPIC
──────────
[1–2 sentence summary of what the video is about and who should watch it]

KEY TAKEAWAYS
──────────────
1. [Main idea] (00:05–02:30)
   — Supporting detail or evidence

2. [Main idea] (05:45–08:15)
   — Supporting detail or evidence

3. [Main idea] (12:10–18:00)
   — Supporting detail or evidence

4. [Main idea] (24:30–32:00)
   — Supporting detail or evidence

5. [Main idea] (35:00–42:10)
   — Supporting detail or evidence

NOTABLE QUOTES
───────────────
"[Quote 1]" (00:15) — [Brief context]
"[Quote 2]" (07:45) — [Brief context]
"[Quote 3]" (28:30) — [Brief context]
"[Quote 4]" (41:00) — [Brief context]

TIMESTAMPS (Quick Jump Guide)
──────────────────────────────
00:00 — Intro & agenda
02:15 — Problem statement
05:30 — Solution overview
10:00 — Live demo
15:45 — Best practices
22:00 — Q&A begins
35:00 — Key takeaway summary
43:00 — Call to action

ACTION ITEMS
────────────
□ [Specific action tied to this video]
□ [Specific action tied to this video]
□ [Specific action tied to this video]

WATCH DECISION
──────────────
Worth Full Watch? Yes, if you're [interested in this specific angle]
Quick Watch? First 15 minutes (intro + problem + solution)
Skip? [Only if you…]
```

## Example

**Input**: YouTube URL to "Building a Product That Sells Itself" by Sarah Chen, Growth Mechanics channel (47 minutes, published 2026-03-10)

**Output**:

```
VIDEO SUMMARY
──────────────

Title: Building a Product That Sells Itself
Creator: Sarah Chen | Channel: Growth Mechanics
URL: https://www.youtube.com/watch?v=k9X4wZ2pL8Q
Duration: 47:23 | Published: 2026-03-10
Speaker Bio: Sarah Chen is SVP of Product at Velocity (AI analytics platform). Previously built go-to-market at two series B startups. 15+ years in product-led growth.

CORE TOPIC
──────────
Deep dive into product-led growth (PLG) strategy: how to build products so good that users become your sales force, and why traditional sales playbooks fail for self-serve SaaS. Essential for product and growth leaders planning 2026 launches.

KEY TAKEAWAYS
──────────────
1. The Three Laws of Product-Led Growth (02:30–06:15)
   — Products must be easy to try (free tier or trial), intuitive without training, and deliver value before asking for money
   — Evidence: Slack, Figma, and Retool all followed this pattern and achieved $1B+ valuations without significant sales teams

2. The Math on Unit Economics (08:45–12:00)
   — PLG companies spend 40% less on CAC than sales-led companies, but take 2–3x longer to close enterprise deals
   — Trade-off: high organic efficiency vs. lower average contract value
   — Data point: Chen cites Gartner report showing PLG has moved from 12% to 34% of new SaaS launches since 2020

3. Why Product-Market Fit Looks Different in PLG (14:20–19:30)
   — You know you have it when uninstall rate drops below 2% per month and weekly active users grow 30%+ without paid ads
   — Difference from sales-led: PMF happens at the user level, not the buyer level
   — Example: Stripe spent 2 years in stealth optimizing for developer delight before launching publicly

4. The Hidden Bottleneck: Activation, Not Adoption (21:00–26:45)
   — Most PLG fails because companies build great products but don't remove friction from first-use experience
   — The 5-minute rule: users decide to stay or leave in first 5 minutes; every extra click costs 15% of retention
   — Tactic: Zapier invested heavily in in-app onboarding and saw conversion from free to paid jump from 3% to 8% in 6 weeks

5. Converting Free to Paid: The Freemium Trap (28:30–35:00)
   — Freemium doesn't work for most products; instead, Chen recommends a trial-then-upgrade model with clear value walls
   — Case study: Notion offers 20 free blocks, then requires paid plan. This creates urgency and clarity on what users get
   — Common mistake: making free tier too powerful (users never upgrade) or too limiting (users don't stick around)

NOTABLE QUOTES
───────────────
"If your product needs a sales team to explain it, it's not ready to be product-led." (06:00) — Core PLG philosophy
"Your uninstall rate is your truth. Everything else is marketing." (19:45) — On measuring product-market fit
"The best sales deck is a product that works. The second-best is a 5-minute onboarding flow." (25:30) — On removing friction
"Freemium is a scaling strategy, not a customer acquisition strategy. Most teams use it backwards." (32:15) — On common mistakes

TIMESTAMPS (Quick Jump Guide)
──────────────────────────────
00:00 — Intro: "Why PLG is the future of SaaS"
02:30 — The Three Laws of PLG
08:45 — Unit economics breakdown
14:20 — Redefining product-market fit for PLG
21:00 — The activation bottleneck
28:30 — Freemium vs. trial-based models
35:00 — Common PLG failure patterns
40:15 — Q&A: How do I know if my product is PLG-ready?
45:00 — Final advice: "Start with one user, not one thousand"

ACTION ITEMS
────────────
□ Audit first 5 minutes of your product onboarding: count clicks to first "aha moment" and target <3 clicks
□ Model unit economics: calculate CAC for self-serve vs. sales-led channels and review margin impact
□ Define your activation metric (what "aha moment" looks like for your product) and track weekly
□ Schedule product strategy review: Is our current pricing/tier model freemium or trial-based? Should it change?

WATCH DECISION
──────────────
Worth Full Watch? Yes, if you're building or scaling a self-serve product, planning a PLG motion, or want to understand why your free tier isn't converting
Quick Watch? First 30 minutes (intro through activation bottleneck) covers 80% of value
Skip? Only if you've already launched a successful PLG product and are past the activation phase
```

## Edge Cases

- **No Transcript Available**: If captions are disabled or unavailable, note this clearly and offer to do a real-time watch & summarize instead. Suggest the user enable captions or contact the creator.
- **Auto-Generated Captions Only**: These can be buggy (especially with technical terms, names, or accents). Flag areas of uncertainty in the summary (e.g., "unsure if speaker said 'cohort' or 'carbon'").
- **Very Long Videos (2+ hours)**: Extract the first 6–8 key takeaways and note that a deep-dive exists. Offer to create extended summary or second part if needed.
- **Multiple Speakers**: When there are panel discussions or multiple speakers, identify each speaker and note whose perspective is which in the takeaways and quotes.
- **Highly Visual/Demo-Heavy Videos**: If the video relies on screen recording or live demo, note what you see and describe the demo outcome, but flag that some context may be lost without watching.
- **Live Chat/Q&A Videos**: If there's live chat commentary, flag this and extract only speaker-provided information to avoid noise.
- **Non-English Videos**: If captions are in another language, note this and ask if the user wants a translation or if they'd prefer to watch directly.

## Pro Tips & Best Practices

### Maximizing Video Value
- **Watch Timestamps Later**: Share the summary first; readers can jump to specific timestamps if they want deeper context. This makes team consumption async-friendly. Include the "Quick Jump Guide" timestamps in Slack previews.
- **Extract Frameworks, Not Just Facts**: If the video teaches a framework or methodology, extract the steps and key principles. Make it actionable for your team. A summary of a sales framework should include the actual steps, not just the concept.
- **Note Disagreements**: If a speaker contradicts your team's current approach, flag this explicitly. It's a signal to either update your approach or understand why you differ. Use this for constructive debate in team meetings.
- **Capture Tone & Energy**: Sometimes the speaker's emphasis tells you what's most important. Flag if a topic gets 5 minutes vs. 20 minutes, which signals priority. Time allocation = importance in most videos.
- **Compare to Prior Talks**: If the speaker has given similar talks before, note what changed in their thinking. This signals evolution in strategy or new learnings.

### Building a Video Library
- **Categorize by Topic & Skill**: Tag summaries by topic (PLG, AI/ML, leadership, etc.) and skill level (101 intro, advanced, thought leadership). Makes discovery easy. Use consistent tags so team members can filter by interest.
- **Link to Related Resources**: When saving to Notion, link to other video summaries, articles, or tools mentioned in this video. Build a knowledge graph. If a video recommends a tool, link to your own evaluation of that tool.
- **Date & Refresh**: Mark when the video was published and flag if it's likely to become outdated quickly (trends, specific product features, technical stacks). A video about "Instagram Ads in 2026" needs re-evaluation if algorithms change.
- **Creator Follow-Up**: Track creators whose content is valuable and note when they release new material. Set up alerts. Some creators publish yearly or quarterly content that becomes a "must-watch" for your team.
- **Transcript Backup**: For important videos, store the transcript in Notion alongside the summary. This preserves content if the video gets deleted or made private.

### Extracting Actionable Insights from Videos
- **Pilot vs. Strategic**: Distinguish between "quick wins" the speaker suggests (pilot in 1–2 weeks) and strategic shifts (quarter-long implementation). Make action items realistic.
- **Applicability**: After extracting action items, assess: "Does this apply to our context, or is it relevant to companies at a different stage?" Be honest about fit.
- **Resource Requirements**: Note if an action item requires new tools, hiring, or budget. This helps prioritize implementation.

### Engagement & Sharing
- **Slack Summaries**: Share key 1–2 takeaways in Slack first, with a link to the full summary for those who want details. Drives engagement without overwhelming.
- **Team Discussions**: Use action items from video summaries as discussion starters in team meetings. "Video recommended X — do we agree?"
- **Sync with OKRs**: During planning cycles, use video insights to validate or challenge your strategic priorities.

## Limitations & When Not to Use

- **Live Streaming Only**: If the video is live streaming (no transcript available), you'll need to wait for captions or a recording with captions.
- **Short-Form Video**: YouTube Shorts (under 60 seconds) don't have transcripts and aren't suitable for this skill.
- **Audio Quality Issues**: If speaker audio is poor or very heavily accented, auto-generated captions may be inaccurate. Manual review is needed.
- **Private or Unlisted Videos**: If you don't have direct access to the video, the skill can't fetch it. Share the video link privately or adjust your YouTube share settings.

## Common Workflows

### Onboarding New Team Members
1. Compile a list of "must-watch" videos on core topics (product, culture, market, competitors).
2. Summarize each video and create a Notion board with all summaries.
3. New hire reviews summaries first (2–3 hours), then watches full videos if they want deeper context.
4. Dramatically faster onboarding with less burnout than forcing 20 hours of video watching.

### Weekly Learning Sessions
1. Identify 2–3 relevant videos from thought leaders in your industry each week.
2. Summarize them and share in a Slack thread on Monday morning.
3. Team members read summaries async, add reactions/thoughts throughout the week.
4. Friday: 30-minute discussion of key takeaways and how they apply to your work.

### Competitive Trend Monitoring
1. Subscribe to competitor founder talks, webinars, and industry conference videos.
2. Summarize key videos monthly and tag with "Competitor Intelligence."
3. Feed summaries into your Competitive Battlecard skill.
4. Track how competitor messaging and strategy evolves over time.

## Related Skills

- **Extract Article Insights**: Use together when researching a topic across both video and written content — combine summaries for a comprehensive brief.
- **Meeting Summary**: Similar structure to video summaries — use for team meeting recaps or recorded presentations. Same Output Format approach.
- **Content Idea Generator**: Use video summaries as research input for content brainstorming and competitive intelligence.
- **Deep Research**: When a video touches on a complex topic, use Deep Research to complement the summary with original investigation.
- **Summarize Research Findings**: When you have multiple video and article summaries on the same topic, use this to synthesize all findings.

