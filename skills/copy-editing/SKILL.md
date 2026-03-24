---
name: Edit Marketing Copy
description: Systematically edit marketing copy through structured review passes to strengthen clarity, voice, emotional impact, and persuasion
role: Marketing
action: Analyze
connectors:
  - Slack
  - Gmail
  - Google Drive
  - Notion
---

# Edit Marketing Copy

## Purpose
This skill guides you through systematic editing of marketing copy using the "Seven Sweeps" framework—a proven method for transforming good copy into compelling, conversion-focused messaging. Each sweep targets a specific dimension: clarity, brand voice, emotional resonance, evidence, specificity, and persuasiveness. Rather than editing randomly, you move through copy in structured passes, knowing exactly what to evaluate at each stage.

## When to Use
- **Refining homepage copy** before launch—ensure hero sections speak directly to audience needs
- **Strengthening email campaigns** that aren't driving opens or clicks
- **Tightening product descriptions** that feel generic or miss the "why"
- **Polishing landing pages** to remove friction and clarify value
- **Reviewing social media copy** for consistency with brand personality
- **Editing sales collateral** to ensure claims are substantiated and objections addressed

## Instructions

**Step 1: Clarity Sweep**
Read the copy with fresh eyes. Does every sentence make sense on first read? Highlight words or phrases that confuse you. Look for jargon, unclear pronouns, or sentences that say too much. Test: Can you explain the main idea to a peer in one sentence? If not, the copy needs clarity work.

**Step 2: Voice & Tone Sweep**
Review your brand guidelines and any Slack discussions about brand personality. Does the copy match? Is the tone consistent throughout? Rewrite sentences that feel off-brand. Replace corporate speak ("leverage," "synergize," "best-in-class") with authentic language from customer conversations and team voice discussions.

**Step 3: So What Sweep**
For every claim or feature, ask: Why should the reader care? Each statement needs to answer a reader's implicit objection. "We offer 24/7 support" only lands if you say *why* 24/7 matters to them: "never lose momentum on your project—support is there at 3am when inspiration strikes." Check Gmail and Slack for language patterns from real customers to make this resonant.

**Step 4: Prove It Sweep**
Every promise needs proof. Numbers, testimonials, case studies, or specifics beat vague assurances. "Helps teams save time" is weak; "cuts meeting prep time by 40 minutes per week" is strong. Scan Google Drive for supporting data, customer wins, or third-party validation. Flag any claim lacking evidence and source it.

**Step 5: Specificity Sweep**
Replace abstract language with concrete details. "Powerful platform" becomes "runs A/B tests, tracks conversion, and surfaces winners in 48 hours." "Improves collaboration" becomes "turns Slack debates into structured decisions with voting, comments, and audit trails." Specificity builds trust.

**Step 6: Heightened Emotion Sweep**
Does the copy make readers *feel* something? Emotion drives action. Look for moments to add human stakes, desired outcomes, or relief from pain. Add vivid language where appropriate. Avoid manipulation—authenticity + emotion is persuasive; false drama is not.

**Step 7: Zero Risk Sweep**
Remove barriers to action. What objections do your sales calls reveal? Address them preemptively. Add trust signals: free trials, money-back guarantees, no credit card required, easy integration, expert onboarding. Check Notion for objection themes and Slack for team concerns, then bake reassurance into the copy.

## Output Format

Present edits in a clear, digestible format:

```
EDITED COPY
[Rewritten version of the copy with all sweeps applied]

SWEEP-BY-SWEEP NOTES
Clarity: [What was unclear and how you fixed it]
Voice & Tone: [Brand voice adjustments]
So What: [Where you added reader-focused rationale]
Prove It: [Claims you substantiated with specifics]
Specificity: [Abstractions replaced with concrete language]
Heightened Emotion: [Emotional elements added]
Zero Risk: [Objections addressed, trust signals added]

KEY WINS
• [Most impactful change]
• [Second-strongest improvement]
• [Optional third highlight]
```

## Example

**Original Copy (Pathwise Homepage Hero)**

"Pathwise empowers your team to learn faster and build skills that matter. Our L&D platform is designed for modern organizations that want to scale training without losing the human touch. We help teams unlock potential."

---

**EDITED COPY**

"Your team is drowning in generic training. Pathwise cuts through the noise—personalized learning paths built from what your people *actually* need to do their jobs better. In 90 days, most teams report 35% higher skill adoption and 60% faster time-to-competency. No microlearning gimmicks. No LMS bloat. Just learning that sticks."

---

**SWEEP-BY-SWEEP NOTES**

**Clarity:** Original copy was vague ("build skills that matter," "unlock potential"). Rewrite names the specific problem (drowning in generic training) and outcome (higher adoption, faster competency). Removed "designed for modern organizations"—too abstract.

**Voice & Tone:** Replaced corporate phrasing ("empowers," "scale training," "unlock potential") with direct, confident language. "No microlearning gimmicks. No LMS bloat" matches a practical, skeptical buyer persona.

**So What:** Added two reader-focused reasons to care: (1) your team is struggling with bad training, and (2) we solve it in a measurable timeframe. "Personalized learning paths built from what your people actually need" speaks to pain point directly.

**Prove It:** Added proof points—"35% higher skill adoption," "60% faster time-to-competency"—drawn from customer data. Specifics beat promises.

**Specificity:** "No microlearning gimmicks. No LMS bloat" is concrete negative proof. Original "skills that matter" is vague; rewrite shows *how* skills get selected and applied.

**Heightened Emotion:** Opened with a relatable frustration ("drowning in generic training"). Added urgency with "cuts through the noise" and relief signal with "just learning that sticks."

**Zero Risk:** Addressed common L&D buyer fear (implementation complexity) by naming what we *don't* do: no gimmicks, no bloat. Implied ease and focus.

---

## Edge Cases

**When you don't have customer data or call transcripts:** Use industry-standard language, competitive positioning, and your own logic to ground the "So What" and "Prove It" sweeps. Ask the requester for success metrics, testimonials, or customer objections to fill gaps.

**When copy is brand new:** Ensure Voice & Tone aligns with documented guidelines. If no guidelines exist, establish voice rules first before editing (grab this from Slack discussions or email chains with leadership).

**When copy is already strong:** Not every sweep yields big changes. Treat minor refinements as wins—tightening a word here, adding a proof point there. Strong copy is the goal, not rewriting for the sake of it.

**When you spot structural issues (missing value prop, wrong audience):** Flag these for the writer to address before diving into word-level edits. This skill polishes copy, not restructures strategy.

**When editing very long-form content (2,000+ words):** Don't try to sweep everything at once. Break the content into sections and run all seven sweeps on each section before moving to the next. This keeps focus tight and prevents sweep fatigue.

**When the copy targets multiple audiences:** Identify the primary audience and optimize for them. Flag sections where messaging splits between audiences and recommend splitting the content into separate pages/emails rather than trying to serve everyone.

## Word-Level Quick Checks

When a full seven-sweep process isn't needed, use these rapid improvements:

**Cut these words** (almost always filler):
very, really, extremely, incredibly, just, actually, basically, in order to, that (often unnecessary), things, stuff

**Replace corporate speak:**

| Weak | Strong |
|------|--------|
| Utilize | Use |
| Implement | Set up |
| Leverage | Use |
| Facilitate | Help |
| Innovative | New |
| Robust | Strong |
| Seamless | Smooth |
| Cutting-edge | Modern |
| Best-in-class | Leading |
| Empower | Help / Enable |

**Sentence-level rules:**
- One idea per sentence — if you need "and" to connect two different thoughts, split them
- Front-load the important information — don't bury the point after qualifications
- Vary sentence length — a short sentence after two long ones creates rhythm and emphasis
- Cap at 25 words per sentence for marketing copy (exception: storytelling sections)
- Active voice always: "We cut your reporting time" beats "Reporting time was reduced"

**Paragraph-level rules:**
- One topic per paragraph — if you're saying two things, use two paragraphs
- 2-4 sentences max for web copy — walls of text don't convert
- Strong opening sentence per paragraph — readers scan first lines and skip the rest
- White space is persuasion — dense copy signals effort, not value
