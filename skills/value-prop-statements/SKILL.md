---
name: "Value Proposition Statements"
description: "Generate value proposition statements for marketing, sales, and onboarding from existing value propositions. Creates segment-specific statements that emphasize benefits and highlight capabilities. Use when writing marketing copy, creating sales messaging, or crafting onboarding messages. Trigger on: value proposition statements, marketing copy, sales messaging, value statements, positioning copy, onboarding copy."
dependencies: []
---

## Purpose

Transform existing value propositions into ready-to-use statements for marketing, sales, and onboarding contexts. Each statement targets a specific audience segment, leads with the benefit, and connects capabilities to outcomes. When Harmony conversation data is available, grounds messaging in the language customers actually use.

## When to Use

- Writing marketing copy and promotional content
- Creating sales decks and pitch materials
- Crafting customer onboarding messages and welcome sequences
- Developing segment-specific messaging for campaigns
- Refreshing positioning after customer discovery calls reveal new language

## Instructions

You are an experienced product growth expert with expertise in value proposition development and targeted messaging.

### Input

Based on the following value proposition(s) for **$ARGUMENTS**, develop comprehensive value proposition statements that can be used across marketing, sales, and onboarding contexts.

If the user provides existing value propositions, positioning documents, or competitive messaging, read and analyze them directly. If Harmony conversation data is available — sales calls, customer interviews, onboarding sessions — extract the exact language customers use to describe their problems, the "aha moment" phrases, and the outcomes they celebrate. Mirror that language in the statements.

### Analysis Steps (Think Step by Step)

1. **Value Prop Audit**: Review the input value propositions for clarity, segment specificity, and benefit framing
2. **Segment Mapping**: Identify distinct audience segments each statement should address
3. **Conversation Language Extraction** (if available): Pull phrases, pain descriptions, and outcome language from Harmony transcripts
4. **Statement Generation**: For each segment and context (marketing, sales, onboarding), craft statements that lead with benefit and connect to capability
5. **Tone Calibration**: Adjust voice for context — marketing (aspirational), sales (proof-driven), onboarding (encouraging)
6. **Consistency Check**: Ensure all statements trace back to the core value proposition without contradicting each other

### Statement Requirements

For each statement, ensure it:
- Directly addresses a specific target market segment or use case
- Emphasizes the primary benefit and desired outcome first
- Highlights the key features and capabilities that make it possible
- Uses clear, compelling language that resonates with the audience
- Avoids jargon unless the audience expects it
- Is self-contained — works without surrounding context

## Output Format

### Source Value Proposition Summary
- Core value proposition restated for alignment
- Target segments identified
- Key capabilities and differentiators

### Conversation Language (if Harmony data available)
- Customer phrases that describe the problem
- "Aha moment" language from onboarding or first-use calls
- Outcome descriptions customers use in their own words

### Marketing Statements

For each target segment:

**Segment**: [Segment name and description]

**Headline** (8-12 words)
- Benefit-first, attention-grabbing

**Subheadline** (15-25 words)
- Expands on how the product delivers the benefit

**Body Statement** (2-3 sentences)
- Full value proposition statement with capability detail

**Campaign Tagline** (≤8 words)
- Memorable, shareable version

### Sales Statements

For each target segment:

**Segment**: [Segment name and description]

**Elevator Pitch** (30 seconds / ~75 words)
- Problem → solution → proof → outcome

**Objection-Aware Statement** (2-3 sentences)
- Preemptively addresses the most common hesitation for this segment

**ROI Statement** (1-2 sentences)
- Quantified or quantifiable value delivered

**Competitive Positioning Statement** (1-2 sentences)
- Why choose this over the primary alternative

### Onboarding Statements

For each target segment:

**Welcome Message** (2-3 sentences)
- Reinforces the decision to sign up; sets expectations

**First Value Moment** (1-2 sentences)
- Guides the user toward their first "aha" — what to do first and why

**Milestone Celebration** (1 sentence)
- Acknowledges progress and connects it to the promised outcome

### Statement Matrix

| Segment | Context | Statement (short form) | Key Benefit |
|---------|---------|----------------------|-------------|
|         | Marketing |                    |             |
|         | Sales     |                    |             |
|         | Onboarding |                   |             |

## Example

**Input**: "Value proposition for a conversation intelligence platform targeting sales teams: 'Record every sales call, surface what works, and coach your team to close more deals.'"

**Output**:

### Marketing Statements

**Segment**: VP of Sales at mid-market SaaS companies

**Headline**: Close more deals by learning from every conversation

**Subheadline**: Automatically record, transcribe, and analyze your sales calls so your team repeats what works and fixes what doesn't.

**Body Statement**: Your best reps already know what to say. Now your whole team can too. Record every sales conversation, surface the patterns that win deals, and coach reps with real examples — not theory. Teams using conversation intelligence see 28% faster ramp time for new hires.

**Campaign Tagline**: Every call makes the next one better.

### Sales Statements

**Segment**: VP of Sales at mid-market SaaS companies

**Elevator Pitch**: Your team runs dozens of sales calls a week, but most of what's learned stays locked in individual reps' heads. We record and analyze every conversation so you can see exactly what top performers do differently — the questions they ask, the objections they handle, the moments that move deals forward. Sales leaders using our platform cut new rep ramp time by 28% and increase win rates by 15%.

**Objection-Aware Statement**: You don't need to change how your team sells. The platform sits quietly in every call, captures what happens, and surfaces the insights you'd want from sitting in on every conversation — without the calendar overhead.

**ROI Statement**: Teams recover an average of 4 hours per manager per week previously spent on manual call reviews, while improving rep performance 15% within the first quarter.

### Onboarding Statements

**Segment**: VP of Sales at mid-market SaaS companies

**Welcome Message**: You just gave your team a serious advantage. Every sales conversation will now be captured, analyzed, and turned into coaching opportunities — automatically. Let's get your first calls recorded.

**First Value Moment**: Connect your calendar and join your next sales call as usual. We'll handle the recording and have your first call analysis ready within minutes.

**Milestone Celebration**: Your team has analyzed 50 calls — you're now seeing the patterns that separate your top closers from the rest. Time to turn those insights into team-wide playbooks.

## Edge Cases

- **No existing value proposition provided**: Ask the user for product description, target audience, and key benefits, then draft the value proposition before generating statements
- **Multiple segments with conflicting needs**: Create separate statement sets per segment; flag where messaging might conflict if segments overlap in the same campaign
- **B2B2C or platform businesses**: Generate statements for both the platform user and the end customer they serve
- **Early-stage product with no proven outcomes**: Use "designed to" and "built for" framing instead of outcome claims; recommend A/B testing statements with early users

## Best Practices

- Lead every statement with the benefit, not the feature
- Use the customer's own language when Harmony conversation data is available
- Keep marketing statements aspirational, sales statements proof-driven, onboarding statements encouraging
- Test statements with real users — the best copy mirrors how customers already describe the value
- Avoid superlatives ("best", "only", "revolutionary") unless backed by evidence
- One idea per statement — if you need "and", split it
- Ensure statements work standalone — in an ad, an email subject line, or a tooltip
