---
name: "Write with Clarity"
description: "Communicate complex ideas in writing so they're understood, remembered, and acted on. Transforms dense explanations into clear arguments that drive decisions. Trigger on: 'writing', 'document', 'strategy', 'RFP', 'proposal', 'communication', 'memo', 'spec'."
dependencies: []
connectors:
  - name: "Google Drive"
    reason: "Access and organize draft documents and feedback cycles"
  - name: "Notion"
    reason: "Create canonical documents and shared knowledge bases"
  - name: "Slack"
    reason: "Reference conversation context and surface questions for clarity"
  - name: "Email"
    reason: "Understand what's being discussed and what clarity is missing"
---

## Purpose

In many organizations, the people who write clearly get promoted. Not because they're better at politics, but because clarity is leadership. When you write clearly, decisions get made faster, rework disappears, and people understand what they're responsible for.

Most writing fails not because it's poorly written but because it's unclear about what it wants from the reader. Is this informational or requesting a decision? Am I explaining a problem or proposing a solution? Should you act, understand, or just be aware? When these things are invisible, readers waste energy trying to figure out your intention instead of understanding your argument.

This skill teaches you to write at clarity-at-scale: documents that work harder than conversation because they're permanent, searchable, and don't rely on memory. You'll learn to lead with conclusions instead of building a case, eliminate preamble, start at the highest relevance moment, and create documents that become canonical—the single source of truth people return to instead of asking you the same question three times.

## When to Use

Use this skill whenever you're writing something that affects decisions or actions. It's especially valuable when:

- You're communicating strategy or decisions to multiple audiences
- Something has been explained poorly and rework is happening
- People keep asking you the same question (a sign your document didn't land)
- You're writing RFPs, proposals, or specifications
- You're documenting a process that recurs and needs to be clear each time
- You're making a case for a resource decision
- You're writing something that will outlive the conversation
- New team members are asking "who decided this?" and the answer is lost

## Instructions

### Step 1: Know What You Want Your Reader to Do
Before you write a word, answer this: What should my reader do, believe, or understand as a result of reading this? Not "be informed" but specifically. Should they approve a budget? Understand why you made a decision? Know how to run a process? Apply a principle to their own work?

Write this down: "After reading this, my reader should [specific action or understanding]." Everything that follows serves this purpose. Anything that doesn't help accomplish it gets cut. This is the difference between documents that sit unread and documents that drive action.

### Step 2: Lead with Your Conclusion, Not Your Evidence
The instinct in most writing is to build a case: "Here's context. Here's background. Here's what we found. Therefore, we should do X." This makes readers wait until the end to understand your point. Instead, invert it: "We should do X. Here's why [evidence]. Here's what this means [implications]."

This isn't hiding your reasoning—it's respecting your reader's time. They can decide immediately if your conclusion is worth considering, and then evaluate the reasoning. If you put conclusion first and your evidence is weak, readers notice immediately instead of feeling misled at the end.

### Step 3: Eliminate Preamble Ruthlessly
Most documents start with unnecessary context: "As you know, our company has been growing..." or "Over the past few weeks, we've been thinking about..." This is preamble. It makes readers feel like you're winding up to get to your point. Cut it all. Start at the moment of highest relevance. If someone needs context, they'll ask or can read a separate background document.

Your opening should be your conclusion or question. "We're shifting from product focus to platform focus. Here's what this means for your team." Not "Our company has been successful in the market and competitors are emerging and we've been thinking about our positioning..."

### Step 4: Focus on How Readers Should Act
Write for action, not for information. Instead of "We updated our deployment process," write "If you're deploying to production, use the new checklist linked below. The process has changed in three ways: [specific changes that affect what they do]." The second version tells them what they need to do differently. The first makes them wonder if this applies to them.

Make actions visible and specific. "Implement this" is vague. "By Friday, run the database migration script in production. Contact [name] if you get an error." That's clear.

### Step 5: Use Full Sentences to Expose Logical Gaps
Bullet points are fast to read but hide sloppy thinking. When you write full sentences, logical gaps become obvious. "We should hire more engineers" is easy to say as a bullet. But when you write, "We should hire three more engineers because our velocity has plateaued due to on-call burden, and data shows adding engineering capacity reduces on-call burden by 40%," you expose whether that logic actually holds.

This doesn't mean all prose and no bullets. It means use bullets for lists of items, but explain reasoning in full sentences. Your thinking will be sharper and your writing will be clearer.

### Step 6: Create One Canonical Document Per Project
Stop writing the same document three times in Slack, email, and a Google Doc. Create one canonical document that becomes the source of truth. Link to it everywhere. When someone asks "what's the decision on X?" the answer is "see the project doc, section Y." When a new team member joins, they read the canonical doc, not three different explanations.

This document should be:
- Centralized (one location everyone knows about)
- Updated (not abandoned after initial decision)
- Linked everywhere (Slack topics, email signatures, team wikis)
- Structured clearly (so people can find what they need)

The canonical document is how information scales without you explaining things repeatedly.

### Step 7: Start Right Before the Bear Attack
This principle comes from narrative writing: start your story right before the moment of high stakes. Applied to documents: start right before the moment of decision or action. For strategy documents, start with the strategic question, not the history of how you got here. For process docs, start with the decision you need to make or the action you need to take.

"The bear attack is coming" is the moment of urgency. Everything before it is setup. Readers are looking for the bear attack—the point of highest relevance. Get there fast. Background can come later if someone needs it, but don't make everyone wade through setup to get to stakes.

### Step 8: Use Numbered Lists for Precise Referencing
Numbered lists make it easy for readers to reference specific items. "Follow steps 1-4 for setup, then skip to step 8 if you've already configured logging." Bullet points make referencing awkward: "The third item, you know, the one about notifications, that one..."

Use numbered lists when order matters or when you're likely to reference specific items. Use bullets for items with no hierarchy or order.

### Step 9: Repeat Important Messages Across Formats
Don't assume reading once means understanding forever. Important messages should appear in multiple places: opening, body, conclusion. They should appear in multiple formats: narrative explanation, bulleted list, maybe a diagram. Repetition isn't boring—it's how information sticks.

When you're changing a process, explain the rationale once in full. Then separately create a checklist. Then create a Slack notification. Then mention it in standup. Each format serves different needs: explanation for understanding, checklist for doing, chat for quick reference.

### Step 10: Document Recurring Explanations
If you've explained something more than once, document it. The third time someone asks "why do we do X this way?" is the time to write it down in your canonical location. This saves you from repeating and gives new team members access to institutional knowledge.

Create a FAQ section in your canonical documents for questions that come up repeatedly. "Why do we require approval from X before shipping?" Document it once. Then link to it instead of explaining again. This is how you scale without burning out.

## Output Format

Your clarity-first document should follow this structure:

**Header Section:**
- Title (your conclusion, not a label)
- Date and version
- Owner (who should people ask questions to)
- Status (in progress, decided, implemented, archived)

**Opening (1 paragraph):**
- Your core message: what should they believe or do
- Why it matters to them specifically
- How much time they need to read this

**Decision or Finding (1-2 sections):**
- The specific decision or finding
- Why this decision/finding (your reasoning)
- What changes as a result

**Details Section (2-4 sections):**
- Implementation specifics if a decision document
- Timeline and milestones
- Who is responsible for what
- Exceptions or special cases

**Impact (1 section):**
- How this affects different audiences (link to specific changes)
- What team members need to do (numbered, actionable steps)
- What staying the same (reduces confusion about scope)

**Background (1 section):**
- Context for people who need it (not required reading)
- Reasoning that didn't fit in main sections
- Links to related decisions

**Questions (1 section):**
- FAQ for the most common questions
- Who to contact with other questions
- Links to additional reading

**Length:** 3-5 pages for major decisions, 1-2 pages for operational changes

Each document should be scannable: someone should be able to skim headers and pull out the key information in under 2 minutes. Full reading should take 10 minutes max.

## Example

**Scenario:** Priya is engineering manager at Nextwave, a SaaS company. The team has been doing long pull request review cycles (3-5 days average). It's slowing down shipping. She's implemented a change to code review process: daily review windows, required approval from one person (not consensus), and blocking on test suite only (not code style).

**Her traditional approach:** Write an email explaining the change, then answer the same question in Slack five times when people ask for clarification.

**Her clarity-first approach:**

---

**DOCUMENT TITLE:** Code Review SLA: Faster Ship Speed Through Trust-Based Review

**Date:** March 22, 2026 | Owner: Priya | Status: Implemented

**OPENING:**
Code review wait times are slowing our ship speed. Starting Monday, we're changing how we review code: we'll review all PRs within 24 hours, require approval from one reviewer (not consensus), and gate only on test suite passing (not style). This means you'll ship faster and spend less time in review cycles.

**THE DECISION:**
We're implementing daily review windows and approval-based review (not consensus). See section 4 for details.

**WHY THIS MATTERS:**
Our average PR cycle is 3.5 days. Shipping takes 40% longer than it should because we're waiting for reviews. We've measured that this matters most to engineers early in their tenure (they wait longer) and on critical path work (delays compound). Faster reviews mean faster shipping, which means faster feedback from customers.

**WHAT'S CHANGING:**

1. **Review window:** All PRs are reviewed within 24 business hours. Target: within 4 hours of creation.
2. **Approval:** One reviewer approval = ready to merge (not unanimous agreement).
3. **Gating:** Only merge when tests pass. Code style is not a blocker (handled by pre-commit hooks and optional feedback).
4. **Rotating reviewers:** Use the rotation schedule in the repo README. If assigned reviewer is unavailable, pick someone with recent context.

**WHAT'S NOT CHANGING:**
- Security reviews are still required for auth/data access changes (routed to security@company)
- Architecture reviews for new major systems (routed to eng leads)
- Your right to ask for a second opinion (feedback is always welcome, just not required)

**WHAT YOU NEED TO DO:**
1. Update your local git hooks to the latest version (instructions in repo)
2. Use the reviewer rotation schedule when creating PRs
3. If you're a reviewer, check GitHub notifications twice daily (morning and late afternoon)
4. For time-sensitive PRs, mention it in Slack in #code-review channel

**TIMELINE:**
- March 24: New process starts
- April 7: Review of metrics (are reviews happening in 24 hours? Is quality acceptable?)
- April 21: Retrospective and adjustments based on data

**BACKGROUND / WHY WE MADE THIS CHOICE:**
We tried "everyone approves before merging" which is high quality but slow. We tried "ship fast, fix in prod" which is fast but risky. Data shows one careful reviewer catches 85% of real bugs; additional reviewers catch ~5% more. The quality return on waiting for consensus doesn't justify the speed penalty.

We're reducing risk with: required test suite passing, rotating reviewers so different people see different code, and optional feedback that anyone can give. We're trusting each other to be thoughtful because we've earned that through code quality we've seen.

**FAQ:**
- Q: What if a PR has been there 24 hours and nobody reviewed it?
- A: That's a failure of the system. Ping the #code-review channel. If you're regularly waiting > 24 hours, tell Priya and we'll adjust rotation.

- Q: Can I still ask for code review feedback even if I don't require approval?
- A: Absolutely. We're removing the *requirement*, not the opportunity.

- Q: What about code style?
- A: Pre-commit hooks catch most of it. Optional feedback is fine, but don't gate on it.

- Q: Will this make our code quality worse?
- A: We'll measure with our bug metrics. If we see quality drop, we'll adjust.

**CONTACT:** Priya (priya@company) for questions. Use #code-review on Slack for rotating reviewer questions.

---

**Result:** Engineers read this once. It's linked in Slack's channel topic. When a new engineer joins, they read this instead of Priya explaining it. When someone asks in Slack "why did we change code review," the answer is: "Check the code review SLA doc." Clarity scaled.

## Edge Cases

**Your reader disagrees with your conclusion:** Your document is the place to address this. Anticipate likely objections and address them in the reasoning section. "Some of you might be thinking we should do X instead. Here's why we chose Y." This acknowledges the disagreement and explains your reasoning without dismissing their concern.

**Your document is becoming too long:** You're probably mixing concerns. Split into separate documents: "Strategic Direction" and "Implementation Plan." Link between them. Someone may only need one or the other.

**The decision changes after you publish the document:** Update it immediately. Note what changed and why. Don't hide the change or publish a new doc. Update the canonical version. This builds trust that your documents are current.

**Different audiences need different versions:** Create a summary for executives (one page, key implications). Link to the full document for people who need implementation details. Don't try to write one document that works for everyone—it'll work for no one.

**People aren't reading your document:** The problem usually isn't the document; it's visibility. Does everyone know it exists? Is it easy to find? Does the title make sense? Test your title on someone who hasn't read it—does it answer their question about whether they should read?

**You find yourself explaining the same document in meetings:** The document isn't clear enough. Something in your writing is ambiguous. Rewrite the confusing section. If you have to explain it verbally, the writing isn't done.
