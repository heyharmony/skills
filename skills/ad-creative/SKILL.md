---
name: "Generate Ad Creative"
description: "Create and optimize ad copy across platforms using conversation insights, performance data, and platform specifications"
purpose: "Transform messaging into high-converting ad copy by extracting customer language patterns, addressing objections, and tailoring to platform constraints"
role: "Marketing"
action: "Create"
connectors:
  - name: "HubSpot"
    purpose: "Track conversion rates by ad variation and lead quality scores"
  - name: "Slack"
    purpose: "Gather team feedback on ad performance and competitive examples"
  - name: "Gmail"
    purpose: "Extract customer language patterns from email threads and support tickets"
  - name: "Google Drive"
    purpose: "Access brand guidelines, existing ad creative, and performance reports"
tags: ["advertising", "copywriting", "messaging", "seo-ppc", "conversion-optimization"]
---

# Generate Ad Creative

## Purpose
Turn every conversation into sharper ad copy. This skill extracts the exact language prospects use when describing their problems and desired outcomes — the golden source for high-converting ads. It handles both starting from scratch AND iterating based on what's actually working in market.

## When to Use
- **Starting fresh**: You have a product or service but copy feels generic. Extract real language from customer calls and emails.
- **Testing new angles**: Your current ads plateau. Use objection patterns and competitor mentions to unlock new messaging angles.
- **Platform-specific copy**: Need headlines for Google Ads RSA, longer-form copy for Meta, or snappy text for Twitter/TikTok. Each has different constraints.
- **Variation generation**: Launch 6–12 ad variants fast to test pain-point vs. outcome vs. social-proof angles.
- **Data-driven iteration**: Your analytics show which ad segments underperform. Rewrite copy addressing common objections from call transcripts.
- **Brand consistency**: Ensure new ads follow existing tone and guidelines while adapting to platform specs.
- **Competitive differentiation**: Competitor ads mention features. Your customer calls mention outcomes. Lean into that gap.

## Instructions

1. **Gather conversation data** (optional but powerful)
   - Scan recent customer calls, support emails, or Slack threads. Look for: How prospects describe their pain, exact words they use for desired outcomes, objections they raise, successful closing language.
   - If no transcript data, work from your existing messaging and brief market research. Harmony ads work without conversation grounding too.

2. **Define your angle**
   - Choose one: **Pain point** (highlight what breaks), **Outcome** (emphasize what improves), **Social proof** (show others' results), **Curiosity** (tease a gap or reveal), **Objection flip** (address common hesitation directly).
   - Pull specific language from customer calls if available: "Compliance audits take 3 weeks" beats "Streamline audits."

3. **Identify target platform(s) and constraints**
   - Google Ads RSA: 30 characters max per headline (3–15 headlines). Prioritize specificity and benefit.
   - Meta (Facebook/Instagram): 2,200 characters primary text. Opens and first 125 chars visible before "See More." Hook early.
   - LinkedIn: 150 characters max for intro. Professional, outcome-focused.
   - TikTok: 80–100 characters recommended. Conversational, attention-grabbing, no formal tone.
   - Twitter/X: 280 characters max. Sharp, punchy, clear CTA.

4. **Draft copy with quality standards**
   - **Specificity over vagueness**: "Cut audit time from 3 weeks to 1 day" > "Faster audits." Numbers stick.
   - **Lead with benefit, not feature**: "Stop waiting for compliance approval" > "Real-time compliance tracking."
   - **Active voice**: "We cut your response time in half" > "Response time was reduced."
   - **Include proof when possible**: "Trusted by 500+ enterprises" or "94% report faster decisions."

5. **Generate variations across angles**
   - Create at least 3 versions per platform, each hitting a different angle. Pain point version, outcome version, social proof version.
   - For Google Ads RSA, aim for 6–9 headlines covering: benefit statement, pain relief, outcome, specificity, proof point, speed/scale, authority, objection flip.

6. **Align to platform and brand**
   - Tone: Match your existing brand voice. LinkedIn copy stays professional; TikTok leans conversational.
   - Visual hooks: Mention where supporting visuals (product screenshot, customer testimonial, demo clip) could amplify copy.
   - CTA clarity: Always clear what the next step is (sign up, watch video, start free trial).

7. **Test and iterate** (when performance data available)
   - Once ads run, track which angle resonates: pain point, outcome, or social proof. Rewrite underperforming variants using new insights.
   - Check HubSpot conversion rates per ad variant and Gmail for new customer language patterns to cycle back in.

## Output Format

For each ad variant, provide:

**Platform:** [Google Ads RSA / Meta / LinkedIn / TikTok / Twitter]
**Angle:** [Pain point / Outcome / Social proof / Curiosity / Objection flip]
**Headline / Primary Text:** [Copy, exactly as it would appear]
**Character count:** [X/Y max]
**Visual hook (optional):** [Description of supporting image or video]
**Call-to-action:** [Learn more / Sign up / Start free trial / etc.]

---

## Example

**Company:** Vaultkey (cybersecurity SaaS for compliance automation)
**Goal:** Drive sign-ups for free trial via Google Ads RSA and Meta
**Source:** 5 recent customer calls mention: "Compliance audits took 3 weeks, we were terrified of gaps," "approval workflows were a nightmare," "now we sleep at night."
**Angle:** Pain relief (audit burden) + Outcome (speed) + Social proof (trust)

### Google Ads RSA Headlines (30 chars max)
1. **Cut audit time from weeks to days** (31 chars — adjust: "Cut audit weeks into days" = 26)
2. **Stop compliance bottlenecks now** (32 chars — adjust: "End compliance delays fast" = 26)
3. **Compliance approval in real-time** (33 chars — adjust: "Real-time approval workflows" = 27)
4. **500+ enterprises trust Vaultkey** (31 chars)
5. **Never miss a compliance deadline** (32 chars)
6. **Automate your audit prep today** (30 chars)
7. **Compliance audits made simple** (30 chars)

### Meta Ad (Primary text, ~2,200 chars available; opening 125 chars crucial)
**Headline:** Are compliance audits eating your life?

**Body:**
Three weeks to audit. Two more to get approvals. Sound familiar?

Vaultkey automates the entire compliance workflow — from evidence collection to sign-off. Your team doesn't have to choose between speed and accuracy anymore.

**What's different:**
- Real-time evidence tracking (not spreadsheets)
- Approval routing that doesn't loop through email
- Audit-ready reports generated in minutes, not weeks

**Social proof:**
500+ enterprises, including [Name], cut audit prep from 3+ weeks to under 2 days. 94% report zero missed controls.

**CTA:**
See how Vaultkey works. Free trial, no card needed.

### LinkedIn Ad (150 chars max, professional tone)
Compliance audits took 3 weeks. Now? 2 days. See how Vaultkey cut audit prep time by 93%. Start free.

### TikTok Ad (80–100 chars, conversational)
Compliance audits are killing me 😅 Then Vaultkey automated everything. Finally sleeping at night.

---

## Edge Cases

1. **No conversation data available**
   - If you lack call transcripts or emails, work from your positioning doc and 2–3 market research articles. Use industry pain points (not made-up ones). Harmony excels when grounded in real language, but reasonable assumptions work too.

2. **Conflicting angles across your audience**
   - Example: CFOs care about cost/ROI; Risk Officers care about gaps. Generate two angle sets. Test pain point messaging to CFOs, proof point messaging to Risk Officers.

3. **Platform constraint creates awkward copy**
   - Google Ads 30-char limit is tight. Prioritize benefit phrasing (outcome + speed/scale) over exact claims. "Cut audit weeks" outweighs a long feature list.

4. **Competitor mentions in calls suggest you're late-stage messaging**
   - If prospects say "Your competitor has X," your messaging isn't at awareness stage; it's at consideration. Shift from "what it does" to "why it's better." Extract that differentiation from calls.

5. **Ad copy tests show no winner**
   - If pain point, outcome, and social proof variants perform equally, check if your audience is mixed. Segment by persona. Test again with segment-specific angles.

6. **Brand guidelines conflict with platform norms**
   - Example: Brand guide says "formal," but TikTok demands conversational. Adapt tone while keeping core message. "Transform compliance workflows" (formal) → "Finally automated compliance" (conversational) retains meaning.

## Platform Quick Reference

| Platform | Max Length | Tone | Key Constraint | Best Angle |
|----------|-----------|------|----------------|------------|
| Google Ads RSA | 30 chars/headline | Direct, benefit-led | Headlines must work independently and in any combination | Specificity + numbers |
| Meta (FB/IG) | 2,200 chars (125 visible) | Conversational, hook-first | First 125 chars before "See More" — front-load the hook | Pain point → outcome story |
| LinkedIn | 150 chars intro, 70 headline | Professional, outcome-focused | B2B audience expects credibility signals | Authority + proof |
| TikTok | 80-100 chars | Casual, authentic, fast | Feels like a person talking, not a brand | Relatable pain + quick win |
| Twitter/X | 280 chars | Sharp, punchy | Every word earns its place | Curiosity + contrast |

## Headline Quality Checklist

Before finalizing any headline, verify it passes these checks:
- **Specific over vague**: Contains a number, timeframe, or concrete outcome
- **Benefit over feature**: Leads with what changes for the reader, not what the product does
- **Active voice**: Subject acts, no passive constructions
- **Character count validated**: Fits within platform limits exactly
- **Standalone clarity**: Makes sense without surrounding context (critical for RSA headlines that combine randomly)
