---
name: "Run Design Reviews"
description: "Execute high-quality design reviews that improve work without demoralizing the designer. What it does: creates a structured environment where design gets critiqued based on user impact and strategy alignment, not personal preference. When to use it: before design ships, when onboarding designers, when quality has drifted, when you want to calibrate design decisions across teams. Trigger on: design critique, design feedback, design quality, design standards, design decisions."
dependencies: []
connectors:
  - name: "Figma"
    reason: "Design files to review, iteration history, component library consistency"
  - name: "Slack"
    reason: "Async design feedback channel, design review scheduling, live feedback capture"
  - name: "GitHub"
    reason: "Developer perspective on feasibility, technical constraints on design implementation"
  - name: "Zoom"
    reason: "Recorded design reviews for asynchronous feedback and pattern calibration across teams"
---

## Purpose

Design reviews are where quality is built, not just judged. They're the difference between a team shipping intuition and a team shipping strategy. A good design review is not about the designer's ego — it's about the work and the user impact. The structure matters enormously. Without structure, design reviews become either rubber stamps or flame wars.

This skill teaches you how to run design reviews that improve work, calibrate quality bar across the team, and document decisions so the next person understands why you made a choice. Good reviews separate aesthetic preferences from usability issues. They involve engineers early (design that can't be built isn't design). They use the "I like / I wish / What if" framework to keep feedback constructive. They review at the right fidelity for the stage (don't pixel-perfect a wireframe). And they create a culture where feedback is about the work, not the person.

## When to Use This

- **You're onboarding a new designer and want to calibrate quality standards**: New designers sometimes have different taste than your team's direction. Design reviews create alignment on what "good" looks like.

- **Your design quality has drifted**: Inconsistent patterns, usability issues are popping up, components aren't being reused. Weekly design reviews catch drift before it becomes a culture.

- **You're shipping a complex feature with high interaction density**: Features with lots of interactions (workflows, forms, multi-step processes) benefit from structured review before handoff to engineering.

- **Engineering is pushing back on feasibility**: Design is beautiful but engineering says it can't be built in the timeline. Early engineering participation in design review prevents this surprise.

- **You have multiple designers and want consistency**: One designer's button style doesn't match another's. Design reviews enforce component adoption and consistency across the team.

- **You're shipping to a new platform (mobile, desktop, web)**: Each platform has different conventions. Reviewing design against platform guidelines prevents jarring inconsistencies.

- **Design decisions are getting made in hallways instead of in structured forums**: If design gets decided in 1-on-1s and Slack conversations, you're not capturing rationale or building team muscle. Structured reviews centralize decisions.

## Instructions

1. **Establish design review cadence and set expectations with the team**
   - Weekly reviews: 45 minutes, same time, recurring
   - Invite: product/design leads, participating designers, one engineer per meeting, design system owner if available
   - Create a shared document or Slack channel where designs get posted 24 hours before review (async prep)
   - Set team agreement: "We critique work, not people. We focus on user impact. All feedback is about making the work stronger."
   - Document the process so new hires understand the rhythm
   - Make reviews optional for some, mandatory for major features

2. **Establish the review framework: stage-appropriate fidelity and structure**
   - Early stage (wireframe/lo-fi): Focus is structure and flow. Don't debate colors or typography.
   - Mid stage (hi-fi mockup): Focus is visual hierarchy, interaction patterns, component reuse. Pixels matter more but final polish isn't critical.
   - Late stage (pixel-perfect): Focus is polish, accessibility, edge cases. Feedback should be minimal if earlier reviews were good.
   - Define "what review stage is this" when the design is presented
   - Agreement: "We don't pixel-perfect wireframes. We don't debate flows in pixel-perfect review."
   - This prevents endless cycles where feedback at wireframe stage requires changes at pixel-perfect stage

3. **Create a shared design principles and component library to anchor reviews**
   - Document 3-5 core design principles ("Clarity first," "Consistency matters," "Accessibility is non-negotiable")
   - Build a component library showing approved button styles, input patterns, error states
   - Review against components: "Should we use the Button component or create a new variant?"
   - If design doesn't follow components, ask "Why?" — sometimes there's a good reason, sometimes it's inconsistency
   - Keep component library updated after reviews so next review uses latest
   - Use Figma file as source of truth for components

4. **Establish a structured feedback format: "I like / I wish / What if"**
   - Presenter explains: problem being solved, constraints, decisions made, open questions
   - Reviewers give feedback in this format:
     - "I like [what works well, what you got right]"
     - "I wish [what's confusing, what could improve, what contradicts principles]"
     - "What if [alternative approach, something to consider]"
   - This format keeps feedback constructive and forward-looking instead of prescriptive
   - Example:
     - "I like the clarity of the hierarchy here, the CTA stands out"
     - "I wish the secondary actions were more discoverable — they're below the fold"
     - "What if we grouped secondary actions in a dropdown to reduce visual clutter?"
   - Presenter takes notes but doesn't have to defend. Hearing the feedback is enough.

5. **Include engineering early to surface feasibility constraints and estimates**
   - Ask engineer: "Can we build this in the timeline? Are there feasibility concerns?"
   - Engineer might say: "That animation will take 2 weeks to implement, we don't have that"
   - Design responds: "Can we simplify the animation? Or remove it for launch?"
   - This prevents designing something beautiful that engineering can't ship
   - Engineer might also say: "Building this requires component architecture changes, which is actually good for us"
   - Feasibility conversation happens in the review, not afterwards
   - Don't let feasibility paralyze good design, but let it inform trade-offs

6. **Separate aesthetic preferences from usability and pattern violations**
   - Aesthetic preference: "I don't like this color" "I'd use a different icon" "This looks dated"
   - Usability issue: "Users can't find the save button" "The error message doesn't explain what went wrong" "This workflow requires 6 clicks when it should take 2"
   - Pattern violation: "We don't use this button style, we have a component for this" "This interaction contradicts what we do everywhere else"
   - Usability and pattern violations are worth debating. Aesthetic preferences usually aren't.
   - When someone says "I don't like this," ask "Is this a usability issue or a preference?" — often they clarify it's preference, and you move on
   - If multiple people have the same aesthetic concern, it might indicate a real issue

7. **Encourage questions, not demands, from reviewers**
   - Instead of "This button should be bigger," ask "Can users easily find this action? Is the button prominent enough?"
   - Instead of "Use our blue," ask "Does this contrast meet accessibility standards? Is the color choice intentional?"
   - Questions make the designer think. Demands make them defensive.
   - Questions also acknowledge that designer might have a good reason for the choice
   - Questions help junior designers learn decision-making, not just execution

8. **Document design decisions and rationale, not just the design itself**
   - After review, capture: What problem are we solving? What constraints did we work with? What options did we consider? Why this one?
   - Example:
     ```
     Feature: Comment Threading
     Problem: Long comment threads are hard to follow. Replies get lost.
     Options considered:
       1. Indent replies under parent (tried, got too deep)
       2. Highlight reply chains (too busy)
       3. Auto-collapse to show threads, expand to read (chosen)
     Rationale: Keeps conversations scannable while allowing deep reading
     Trade-offs: Slight extra interaction to expand, but improves UX for most users
     ```
   - Store this in Figma file, Notion, or wiki alongside the design
   - Next designer who touches this feature knows why you made this choice

9. **Create a design system from review patterns and version it**
   - After 4-5 weeks of reviews, patterns will emerge: "We always use this button style," "We handle errors this way"
   - Codify these patterns into a design system: component list, when to use each, do's and don'ts
   - Version the system: "Component Library v1.0, updated Mar 2026"
   - Use the system as a reference in future reviews: "Does this follow the component library?"
   - When you need to deviate, document the exception and the reason
   - Update system quarterly based on what you're learning in reviews

10. **Run a quarterly design review calibration session with senior designers**
   - Bring together your most experienced designers
   - Review 2-3 pieces of work from last 3 months
   - Discuss: What's the quality bar? Are we maintaining it? What's drifting?
   - Discuss: What decisions surprised people? What new patterns should we adopt?
   - Use this to recalibrate the bar and keep team aligned on quality
   - Document calibration decisions and share with team so everyone understands expectations

## Output Format

When you run design reviews effectively, you produce:

```yaml
Design Review Session Report:

Session Details:
  Date: [Date]
  Duration: [Minutes]
  Presenter: [Name]
  Reviewers: [List]
  Design system owner present: [Yes/No]
  Engineer present: [Yes/No]

Design Context:
  Feature: [Name]
  Problem being solved: [Description]
  Stage: [Wireframe / Hi-fi / Pixel-perfect]
  Key constraints: [Technical, time, platform]
  Open questions from presenter: [List]

Feedback Summary:

  I Like (What Works Well):
    - [Aspect 1]
    - [Aspect 2]
    - [Aspect 3]

  I Wish (Areas for Improvement):
    - Issue: [Description]
      Impact: [Affects new users / Power users / Accessibility]
      Priority: [Critical / High / Medium / Low]
    - [Additional issues]

  What If (Alternatives to Consider):
    - Suggestion: [Alternative approach]
      Rationale: [Why this might be better]
    - [Additional suggestions]

Feasibility Assessment:
  Engineer feedback: [Technically feasible / Needs scoping / Requires architecture change]
  Timeline estimate: [X days / X weeks]
  Known blockers: [List]
  Architecture impact: [None / Minor / Significant]

Decision Log:
  Pattern violation found: [Yes/No]
    - If yes: [Description] | Status: [Fix now / Defer to refactor]
  Aesthetic preference vs usability issue: [How classified]
  Key decisions made: [List]
  Deferred decisions: [List]

Design System Updates:
  New component needed: [Yes/No]
    - If yes: [Component name and description]
  Component library changes: [List]
  Pattern clarifications: [List]

Next Steps:
  Required changes before next stage: [List]
  Optional improvements: [List]
  Timeline to next review: [Date]
  Feedback incorporated by: [Date]

Rationale Documentation:
  Feature: [Name]
  Problem: [What we're solving]
  Solution chosen: [Why this approach]
  Trade-offs: [What we're giving up]
  Alternatives considered: [What we rejected and why]
```

## Example

**Scenario: DesignFlow (design collaboration platform) runs weekly design reviews**

DesignFlow has a team of 3 designers, 2 PMs, and 4 engineers. They're shipping a new "component suggestion" feature — the product suggests components from the library when you're drawing shapes.

**Setup & Context**

They have weekly 45-minute design reviews, Thursdays 2pm. This is a mid-stage hi-fi review. Designer Sarah presents. Reviewers: 2 other designers, 1 PM, 1 engineer, design system owner (part-time). Engineer is here because this feature requires API calls to component library.

Design system owner prepared by reviewing the Figma file 24 hours prior.

**Step 1-4: Presentation & Framework**

Sarah presents:
- Problem: Designers spend time searching component library for the right component. We want to suggest components as they design.
- Approach: When user draws a rectangle, show a "Did you mean?" dropdown with 3 suggested components
- Stage: Hi-fi mockup. We're reviewing interaction pattern and visual hierarchy.
- Open questions: Should suggestions be inline or as a tooltip? Should they show thumbnails?

Sarah walks through the flow:
1. Designer draws rectangle
2. "Did you mean?" dropdown appears below shape
3. Designer sees 3 options: Button, Card, Empty State
4. Hovering shows thumbnail preview
5. Clicking applies component

Feedback using "I like / I wish / What if":

**I Like:**
- Designer 1: "I like that suggestions appear without blocking the canvas. I wish it was there though, I had to look for it."
- Engineer: "I like that you're limiting to 3 suggestions. Keeps response time fast."
- Design system owner: "I like that you're showing thumbnails. Helps users recognize components."

**I Wish:**
- Designer 2: "I wish the trigger was more discoverable. Will new users see this? Or will they think it's not there?"
  - Issue flagged: Discoverability of the suggestion feature itself
- PM: "I wish we could explain why these components were suggested. Is it based on shape size? Style similarity?"
  - Issue flagged: Users won't understand suggestion logic
- Engineer: "I wish the dropdown closed automatically when a user clicks elsewhere. Right now it stays open and blocks interaction."
  - Issue flagged: UX friction

**What If:**
- Designer 1: "What if the suggestion appeared as a tooltip on hover, not a dropdown? Smaller footprint."
  - Alternative: Tooltip vs dropdown. Trade-off: tooltip is less discoverable but less intrusive.
- PM: "What if we showed a one-line explanation: 'Suggested because it matches your shape dimensions'?"
  - Alternative: Add context to suggestion. Trade-off: takes more space but improves understanding.

**Step 5-6: Feasibility & Pattern Check**

Engineer assessment:
- Feasible in 2 weeks
- Requires API call to component library (already planned)
- Tooltip vs dropdown: Tooltip is slightly easier (1 component vs 2)
- One concern: "If the dropdown stays open while user is editing, they might accidentally apply wrong component. We need smart close behavior."

Design system owner:
- "Suggestions should use our existing popover component, not a custom dropdown"
- "Thumbnails need to follow component thumbnail standards"
- No pattern violation, this is new pattern

**Step 7-8: Separation & Documentation**

Aesthetic preference flagged:
- Designer asks: "Should the dropdown have a light background or be transparent?"
- Facilitator asks: "Is this a usability issue or preference?"
- Designer clarifies: "It's preference. I think transparent looks cleaner, but either works."
- Decision: Not a blocker, designer can choose.

Usability vs preference clarified:
- "Suggestion trigger visibility" = usability issue (critical)
- "Dropdown vs tooltip" = trade-off to explore (not critical)
- "Explanation text" = usability improvement (medium)

Documentation started:
```
Feature: Component Suggestions
Problem: Designers waste time searching for components
Solution: Auto-suggest components when drawing shapes
Key insight: Suggestions appear on draw, showing 3 closest matches
Trade-off: Inline dropdown uses canvas space, but discoverability matters more than space
Alternatives considered:
  - Sidebar suggestions: Lower discoverability
  - AI-powered suggestions: Too slow
  - Picked: Inline dropdown because it's prominent and fast
```

**Step 9-10: Next Steps & Learnings**

Required changes:
- Make suggestion trigger more visible (maybe show hint on first draw?)
- Add smart close behavior (close when user starts editing)
- Use popover component from design system
- Add one-line explanation text

Optional improvements:
- Show component description on hover (can do later)
- Let users customize suggestion preferences (can do later)

Timeline: Sarah incorporates feedback by Wednesday, brings refined design to PM for final approval, ships to engineering.

Design system updates:
- New pattern documented: "When to use popover suggestions vs dropdown suggestions"
- Popover component usage clarified: "Use for non-critical suggestions"

**Result**

Component Suggestions ship 2 weeks later. The feedback led to:
- A tooltip on first use that explains the feature ("Tip: We suggest components as you draw!")
- Smart close: dropdown closes when user starts editing the shape
- One-line context: "Suggested because it matches a 200x100px rectangle"

These small changes made the feature discoverable and understandable. First week usage: 40% of designers use suggestions. One month later: 75% use them. Low feature friction because design review caught usability issues before shipping.

## Edge Cases

- **Reviewer gives prescriptive feedback ("Make the button bigger") instead of asking questions**: Facilitator intervenes: "Can you frame that as a question? Is there a usability concern?" This trains reviewers to be collaborative instead of directive.

- **Designer is defensive about feedback**: This happens when feedback feels personal. Facilitator reframes: "This is about the work, not you. We're all trying to ship the best thing for users." Follow up with 1-on-1 support if needed.

- **Review feedback directly contradicts design system or previous decision**: Ask: "We made this decision before. Has something changed? Should we revisit the system?" This prevents endless re-debate and keeps system authoritative.

- **One person dominates feedback while others stay quiet**: Facilitator solicits input: "What do others think? Engineer, any feasibility concerns? PM, does this solve the problem?" Ensures diverse perspectives.

- **Designer presents unfinished work**: Set expectation: "Only review work that's ready for feedback. Rough explorations don't help." Designers sometimes present early to avoid rework, but that makes review less useful. Review finished explorations, not brainstorms.

- **Feasibility isn't clear until after the review**: This is okay. Engineer can say "I need to scope this, let's do a 30-minute architecture review." Don't force estimation before understanding complexity. But get engineering perspective in the design review itself so surprises are minimal.

- **Design review becomes a tool for gatekeeping instead of improvement**: If reviews consistently kill designs or demoralizes designers, the process is broken. Recalibrate: reviews should improve work, not block it. If you're blocking lots of work, either your quality bar is unrealistic or your designers need more support.
