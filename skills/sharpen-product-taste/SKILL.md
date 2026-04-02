---
name: "Sharpen Product Taste"
description: "Develop the ability to make thousands of micro-decisions that compound into a coherent, delightful experience. Build pattern recognition through systematic analysis of great and terrible products. When to use it: During design reviews, when evaluating feature iterations, when onboarding new PMs, or when product feels incoherent. Trigger on: 'Design critique', 'This product is great', 'Why does this work', 'Product taste', 'Coherent experience', 'Design principles'."
dependencies: []
connectors:
  - name: "Notion"
    reason: "Build a personal library of products analyzed, design principles documented, and taste references cataloged"
  - name: "Slack"
    reason: "Share design critiques and taste-building observations with the team; discuss why certain decisions work"
  - name: "Google Drive"
    reason: "Collaborate on product teardowns, comparative analysis, and design principle documentation"
author: "Harmony"
version: "1.0.0"
icon: "sparkles"
cover: ""
screenshots: []
category: "Product"
---

## Purpose

Product taste is not preference. It's pattern recognition built through exposure to thousands of intentional design decisions, the ability to articulate *why* something works, and the discipline to make coherent choices that add up to a delightful experience.

Great taste means knowing what to leave out. It means understanding that every feature has a cost—not just in code, but in complexity, cognitive load, and coherence. A product with taste feels inevitable, not overloaded.

Harmony helps you sharpen product taste by:
- Creating a system for analyzing great and terrible products
- Documenting the principles that make them work
- Building pattern libraries you can reference in design decisions
- Training your eye through repeated exposure and critique
- Connecting micro-decisions to the overall coherence of the experience

Taste is opinionated but not dogmatic. The best product people can articulate the reasoning behind their opinions and adjust them as context changes.

## When to Use It

- **Design reviews**: Before approving a new feature or flow, evaluate it through the lens of taste. Does it fit the coherent experience you're building, or does it add visual or interaction noise?
- **Feature critique**: A designer proposes a new interaction pattern. You want to evaluate whether it's delightful or confusing. Analyze it against principles from products you admire.
- **Competitive teardown**: A competitor ships something interesting. Analyze it to understand the principle, then decide whether it fits your product.
- **Onboarding PMs or designers**: Teach them your product's taste by building a shared library of "this is what great looks like for us."
- **Resolving design disagreement**: Two designers disagree on an approach. Build a taste framework so the decision is principled, not subjective.
- **Evaluating third-party integrations**: A vendor suggests embedding their tool. Does it fit your product's coherence, or does it feel bolted-on?
- **Product refinement cycle**: Every quarter, audit your product against your taste principles. What's accumulated complexity? What doesn't belong?

## Instructions

1. **Study products you love**
   - Pick 3-5 products you genuinely enjoy using
   - Use them for an hour without reading help docs or tutorials
   - Take screenshots of moments where you thought "That's elegant" or "That surprised me"
   - Ask: Why did the designer make that choice? What principle are they following?
   - Document the principle: "Dropbox hides complexity by defaulting to 'on' rather than asking permission" (principle: assume benign intent, don't block by default)

2. **Study products you hate**
   - Pick 3-5 products that frustrate you
   - Identify the specific moment that frustrated you
   - Ask: What principle did the designer violate? What would I do differently?
   - Don't stop at "it's bad"—understand the bad decision so you can avoid it
   - Example: "Enterprise software requires clicking through 7 nested menus to find one setting." Principle violated: "Don't make users guess." Better approach: global search for settings.

3. **Build your taste library**
   - Create a Notion database with entries:
     - **Product name & category**: What is this?
     - **What works**: Screenshot + explanation
     - **Principle**: The design rule that makes this work
     - **When to apply**: What context makes this appropriate?
     - **Counter-example**: When does this principle fail?
   - Add at least 1 new product each week
   - Review your library before design reviews

4. **Analyze design details, not just surface aesthetics**
   - Taste isn't about colors or fonts (though those matter)
   - It's about the flow of information and decision-making
   - Ask these questions about any product you encounter:
     - Where is the attention drawn first?
     - What's hidden? What's revealed? Why?
     - What assumptions does the designer make about the user?
     - Where could the user get confused? How does the design prevent it?
     - What's the principle underneath the visual choice?
   - Example analysis: "Slack's sidebar shows only the 10 most recent channels, with overflow hidden. Principle: Reduce cognitive load. Most users need quick access to recent channels; older ones can be searched. This simplicity is a competitive advantage."

5. **Identify your product's taste principles**
   - Don't import principles from other products wholesale
   - Derive them from your product's values and constraints
   - Examples of taste principles:
     - "We trust the user to understand tradeoffs, so we show all options rather than hide power-user features"
     - "We optimize for the first-time user over the daily user, because acquisition matters more than daily delight right now"
     - "We hide technical details; users think in terms of outcomes, not mechanics"
   - Write them down. Teach them to your team.
   - Revisit quarterly: Do these still hold? Should they evolve?

6. **Create a product teardown practice**
   - Each week, pick a competitor or adjacent product
   - Spend 30 minutes using it
   - Document: "What are they optimizing for? What principle guides their design?"
   - Compare to your product: "Where do we follow the same principle? Where do we diverge?"
   - Share with your team: "Here's what Notion does well with white space. Should we adopt this principle?"

7. **Use taste in design disagreement**
   - When two approaches conflict, don't default to the loudest voice
   - Ask: "Which approach better serves our taste principles?"
   - Make decisions based on coherence, not individual preference
   - Example disagreement: "Should we add a 'pro' badge to premium users?" Some say it's gamification and fun, others say it's visual clutter. Taste decision: "Our principle is minimalism. The badge adds clutter. We'll skip it and trust retention metrics instead."

8. **Iterate and refine your taste**
   - Taste isn't static. It evolves as you ship, learn, and see what works
   - Ask for feedback: "Does this feel on-brand?" from both power users and new users
   - Watch how users actually interact with your product (not how you designed them to)
   - Adjust principles if needed: "We assumed users wanted lots of options. They actually prefer clarity. New principle: When in doubt, simplify."

9. **Build taste into hiring and team culture**
   - Taste is learnable. Hire for willingness to learn and clarity of thought, not just "natural taste"
   - Train new team members on your taste library
   - Make design critique a regular practice; discuss the principles underlying decisions
   - Create psychological safety around taste: "I love this for product X but not product Y" is a thoughtful take, not a contradiction

## Output Format

```
# Taste Breakdown: [Product Name]

## Product Overview
[What is this product? For whom? What problem does it solve?]

## Screenshots & Analysis

### Moment 1: [What's being analyzed?]
[Screenshot]
**What works:** [Why is this choice elegant?]
**Principle:** [What design rule or principle makes this work?]
**When to apply:** [Under what conditions should we make similar choices?]
**Counter-example:** [When does this principle fail or conflict with another?]

### Moment 2: [Next example]
[Repeat structure]

## Overall Taste Principles
[Based on the moments above, what 2-3 principles define this product's taste?]

## Principle Library Entry
**Principle:** [Concise statement of the rule]
**Definition:** [1-2 sentences explaining what this means]
**Example from [Product]:** [How does this product demonstrate it?]
**Example from our product:** [Do we follow this? Should we?]
**When to apply:** [What context makes this appropriate?]
**Warning:** [When does this principle backfire?]

---

## Reflection: Applying to [Your Product]

**Opportunities:** [2-3 ways we could adopt a principle from this product]
**Contraindications:** [2-3 ways this product's approach wouldn't work for us]
**Worth shipping:** [Would adopting any of these improve our product? Which one, and why?]
```

## Example

```
# Taste Breakdown: Linear (Product Management Tool)

## Product Overview
Linear is a modern issue tracking tool for engineering teams. It competes with Jira and Asana by optimizing for speed, simplicity, and beautiful design. Users can create, navigate, and close issues in seconds, not minutes.

## Screenshots & Analysis

### Moment 1: Creating an Issue
[Imagine screenshot showing a command palette with issue creation]
**What works:** You press Cmd+K from anywhere in the app and type your issue. No clicking to navigate to a form. The issue appears in your list instantly.
**Principle:** Minimize friction for the most common action. Make it so fast and easy that it becomes the default way people work.
**When to apply:** When you've identified the 80% action (create issue, send message, add task), make it a keyboard shortcut available everywhere.
**Counter-example:** Not everything should be keyboard-accessible. Destructive actions (delete) need friction to prevent accidents.

### Moment 2: Issue Details
[Imagine screenshot showing a side panel with issue metadata, comments, relationships]
**What works:** Issue details appear in a side panel without navigating away from the list. Everything you need is on screen. Comments live in the sidebar, not a separate tab.
**Principle:** Context switching is expensive. Show related information without navigation.
**When to apply:** For tools with hierarchical information (issues > comments > attachments), keep the hierarchy visible and accessible without clicks.
**Counter-example:** On mobile, side panels don't work. Linear's mobile app uses a bottom sheet instead, adapting the principle to the constraint.

### Moment 3: Keyboard Navigation
[Imagine screenshot showing arrow keys selecting an issue, Enter opening it, j/k jumping between items]
**What works:** You can navigate the entire issue list with arrow keys. It feels like a video game controller, not business software.
**Principle:** Respect power users' efficiency. Keyboard shortcuts should feel natural and discoverable (vi keybindings, not random)
**When to apply:** For tools used daily by technical audiences, keyboard navigation is table stakes, not a luxury.
**Counter-example:** Over-optimizing for keyboard can alienate mouse users or less technical audiences.

### Moment 4: Drag-to-Reorder
[Imagine screenshot showing issues being dragged to reorder in the list]
**What works:** You can drag issues to change priority or grouping. It feels smooth and responsive, not janky.
**Principle:** When interactions feel good, they encourage use. A 200ms drag interaction is more satisfying than a number field.
**When to apply:** For tools where users frequently change order or priority, make the interaction tactile and responsive.
**Counter-example:** Dragging doesn't work well on mobile or in accessibility contexts. Provide alternatives.

## Overall Taste Principles
1. **Speed over polish**: Linear chose keyboard navigation and command palette over beautiful gradients and animations. The taste is "go fast" not "look pretty."
2. **Hierarchy and context**: Related information is always visible (sidebar, not separate page). Never force the user to navigate away to understand something.
3. **Respectful of power users**: Linear assumes the user will use this daily. Keyboard shortcuts and vim bindings are default, not hidden in settings.
4. **Less is more**: The interface is uncluttered. You don't see optional features until you need them. This makes the product feel simple even though it's powerful.

## Principle Library Entry
**Principle:** Make the 80% action a keyboard shortcut available everywhere

**Definition:** Identify the single most common action your users take (e.g., create issue, send message). Make that action available via keyboard shortcut from any screen without navigation. Reduce friction below the threshold of conscious thought.

**Example from Linear:** Cmd+K creates an issue. It's always available. Most issues are created this way, which trains users into a fast habit.

**Example from our product (Project Harmony):** Right now, creating a skill requires navigating to a form page. Instead, we could make Cmd+Shift+S create a new skill from anywhere, even mid-conversation. Users would create more skills.

**When to apply:**
- When you've analyzed usage and identified a true 80% action
- When the action is reversible (creating is okay; deleting from a keyboard shortcut is risky)
- When your audience uses the tool daily (keyboard shortcuts are power-user features)

**Warning:**
- Keyboard shortcuts can be a barrier for non-technical users. Provide mouse alternatives.
- If you have 10 keyboard shortcuts, users won't remember them. Keep the list short.
- On mobile, this principle doesn't work. Design for each platform separately.

---

## Reflection: Applying Linear's Taste to Harmony

**Opportunities:**
1. Skill creation: Right now, users navigate to a form page. Could we add a modal or command palette shortcut to create skills from any conversation? (Principle: minimize friction for 80% action)
2. Keyboard navigation: Power users might want to navigate skills with arrow keys and open them with Enter. This would feel delightful.
3. Side panel for details: When viewing a skill, show related actions (edit, fork, share) in a side panel instead of a toolbar. This reduces navigation.

**Contraindications:**
1. Linear optimizes for power users. Harmony needs to work for non-technical users who attend meetings. We can't lean as hard on keyboard shortcuts.
2. Linear's simplicity works because issue tracking is a well-understood domain. Harmony is newer; we need more onboarding and guided experiences.

**Worth shipping:**
1. Skill creation keyboard shortcut (Cmd+Shift+S) - Low friction, high payoff
2. Command palette for navigating skills - Medium effort, increases efficiency
3. Side panel for skill details - Medium effort, reduces navigation
```

## Edge Cases

- **You love a product for the wrong reason**: You admire a product's taste but it doesn't actually drive their success. Be critical. Ask: "Is this principle working because it's inherently good, or because of their specific context?" Example: Superhuman's genius shortcuts are delightful to power users but alienate the mainstream. For a mass-market email tool, they wouldn't work.

- **Your taste preferences conflict with data**: You think something is elegant, but analytics show users are confused. Listen to the data. Adjust your taste principle. Example: You love hiding advanced options, but 30% of users need them. Your principle was "simplicity"; the better principle is "progressive disclosure—show simple by default, but make power features discoverable."

- **Team can't agree on taste**: Different people have different taste. That's okay. Make it explicit: "This product values speed and power-user features. This product values simplicity and onboarding. We're choosing to optimize for [one], which means we're saying no to [another]." Alignment comes from clarity about tradeoffs, not consensus about aesthetics.

- **Taste drifts over time**: You shipped 5 features with different design philosophies, and now your product feels incoherent. This happens to every product. Acknowledge it and plan a refinement cycle where you audit and consolidate. Don't expect perfection; expect coherence that improves over time.

- **Copying taste from wrong sources**: You admire Stripe's taste (minimal, sophisticated, trust-focused) and try to copy it. But Stripe's audience is developers who value engineering culture. Your audience might be compliance officers who want reassurance and lots of options. Copying taste from a different context creates incoherence.

- **You confuse taste with trend-chasing**: You adopt a design trend (glass morphism, dark mode, AI badges) without understanding the principle. Your product feels dated after 6 months. Taste is about principles, not trends. Trends come and go; principles endure.
