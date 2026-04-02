---
name: "Write Release Notes"
description: "Turn tickets, PRDs, changelogs, or Git logs into polished user-facing release notes — organized by category, written for humans, not engineers. Trigger on: release notes, changelog, what shipped, product update, version notes, what's new, ship log, product announcement."
dependencies: []
author: "Harmony"
version: "1.0.0"
icon: "sparkles"
cover: ""
screenshots: []
category: "Communication"
---

## Purpose

Transform internal tickets, PRDs, Git logs, or team conversations about what shipped into clear, engaging release notes that customers actually want to read. The skill translates technical changes into user benefits, categorizes by impact, and matches the product's voice — whether that's developer-focused, enterprise-professional, or consumer-friendly.

## When to Use

- Writing release notes for a product update or new version
- Turning a sprint's worth of Jira/Linear tickets into a customer-facing changelog
- Preparing a "What's New" announcement for an email, blog, or in-app notification
- Summarizing what shipped this week/month for customers or stakeholders
- Creating internal release notes for sales and CS teams to reference

## Instructions

### 1. Gather the raw material

Ask the user what they have:

- **Tickets:** Jira, Linear, GitHub Issues — export or list of what shipped
- **PRDs or specs:** Feature documents that describe what was built
- **Git logs or commit messages:** Technical changelog
- **Conversations:** Team meetings where features were discussed, demoed, or reviewed
- **Screenshots or videos:** Visual evidence of changes

If the user points to conversations in Harmony, extract:
- Feature demos and descriptions from team meetings
- Customer-facing language used when discussing features
- Context about why a feature was built (customer request, pain point)
- Known limitations or caveats the team discussed

If the user provides a product URL or name, research the product to understand the audience, tone, and existing release note style.

### 2. Extract and classify each change

For every item, determine:

- **What changed** — The technical fact
- **Who it affects** — Which user segment or role
- **Why it matters** — The user benefit (not the implementation detail)
- **Category:**
  - **New Features** — Entirely new capabilities users didn't have before
  - **Improvements** — Enhancements to existing features (faster, easier, more powerful)
  - **Bug Fixes** — Issues resolved that users may have encountered
  - **Breaking Changes** — Anything requiring user action (API changes, migrations, removed features)
  - **Deprecations** — Features being sunset with timeline and alternatives
  - **Security** — Security patches or improvements (mention without exposing vulnerability details)

### 3. Write each entry

**Principles:**
- **Lead with the benefit, not the implementation.** "Dashboards load 3× faster" not "Added Redis caching to API layer."
- **Use plain language.** No internal codenames, ticket numbers, or technical jargon unless the audience is developers.
- **Keep each entry to 1–3 sentences.** The title does the heavy lifting; the description adds context.
- **Be specific about what changed.** "Fixed an issue where CSV exports could fail for reports with 10,000+ rows" is better than "Fixed export bugs."
- **Name the feature or area.** Users need to find changes relevant to them quickly.

**Transformation examples:**

| Internal/Technical | User-Facing |
|-------------------|-------------|
| Implemented Redis caching layer for dashboard API endpoints | **Faster dashboards** — Dashboard pages now load up to 3× faster, so you spend less time waiting. |
| Fixed race condition in concurrent checkout flow | **Checkout reliability** — Fixed an issue where some orders could fail during high-traffic periods. |
| Migrated user auth to OAuth 2.0 PKCE flow | **Improved security** — We've upgraded our authentication system. You may need to re-login once after this update. |
| Added Elasticsearch full-text indexing for notes | **Better search** — Search now finds results inside note content, not just titles. Supports partial matches and phrases. |
| Deprecated v1 API endpoints | **API v1 sunset** — v1 API endpoints will be removed on June 1, 2026. Migrate to v2 using our [migration guide]. |

### 4. Structure the release notes

Organize by impact — most exciting changes first. Within categories, order by importance to the user, not by engineering effort.

### 5. Match the product's voice

Adjust tone based on audience:

- **Developer / API product:** Technical and precise. Include code examples, endpoint changes, and SDK versions. Respect their time — no fluff.
- **B2B SaaS / Professional:** Clean, confident, benefit-focused. Show how changes save time or reduce risk. Name the workflow that improved.
- **Consumer / SMB:** Warm, enthusiastic, simple. Focus on what they can do now that they couldn't before. Light and scannable.
- **Enterprise:** Formal, compliance-aware. Include version numbers, security notes, and admin-relevant changes. Note any action required.

### 6. Add context for internal audiences (optional)

If the user also needs internal release notes for sales/CS, add a section:
- How to talk about each feature with customers
- Customer pain point each feature addresses
- Competitive positioning implications
- FAQ for common customer questions

## Output Format

```markdown
# [Product Name] — [Version or Date]

> [One-line summary: the headline change in this release]

## New Features

### [Feature Name]
[1-2 sentences: what it does and why it matters to the user]

### [Feature Name]
[1-2 sentences: what it does and why it matters to the user]

## Improvements

- **[Area/Feature]:** [What got better and how it helps]
- **[Area/Feature]:** [What got better and how it helps]

## Bug Fixes

- Fixed an issue where [user-visible problem description]
- Fixed an issue where [user-visible problem description]

## Breaking Changes

> **Action required:** [What users need to do and by when]

- [Description of breaking change and migration path]

## Deprecations

- **[Feature/API]:** Will be removed on [date]. [Alternative and migration guide link]

---

_Questions? [Contact support / Read the docs / Join our community]_
```

## Example

**User:** "Here are the Linear tickets we shipped this sprint. Write release notes for our customers."

Provided tickets:
- LIN-342: Add Slack integration for task notifications
- LIN-356: Fix: Dashboard charts not rendering on Safari 17
- LIN-361: Improve CSV export speed (batch processing)
- LIN-370: Add dark mode support
- LIN-378: Fix: Duplicate email notifications on task assignment
- LIN-382: Deprecate legacy webhook format (v1)
- LIN-389: Add keyboard shortcuts for task management
- LIN-391: Fix: Search results not including archived projects

**Output:**

```markdown
# Harmony — March 2026 Update

> New Slack integration, dark mode, and keyboard shortcuts — plus faster exports and important bug fixes.

## New Features

### Slack Integration
Get task notifications right where your team works. Connect your Slack workspace to receive updates on task assignments, status changes, and mentions — without leaving your conversation.

### Dark Mode
Easy on the eyes, day or night. Switch to dark mode from Settings → Appearance, or let it follow your system preference automatically.

### Keyboard Shortcuts
Navigate faster with keyboard shortcuts for common task actions — create, assign, complete, and move tasks without touching your mouse. Press `?` anywhere to see the full shortcut reference.

## Improvements

- **CSV exports:** Exports now process in batches, making large reports up to 5× faster. Exports with 10,000+ rows that previously timed out now complete reliably.

## Bug Fixes

- Fixed an issue where dashboard charts wouldn't render correctly on Safari 17
- Fixed duplicate email notifications when assigning tasks to team members
- Fixed search results not including archived projects — archived content is now searchable with a toggle

## Deprecations

- **Legacy webhooks (v1):** The v1 webhook format will be removed on **June 1, 2026**. If you're using v1 webhooks, please migrate to the v2 format before then. [See the migration guide →]

---

_Questions about this release? Reach out to support@harmony.com or visit our help center._
```

## Edge Cases

- **User provides raw Git log or commit messages only:** Parse commits for meaningful changes. Group related commits. Ignore internal refactoring, dependency updates, and CI/CD changes unless they affect the user. Ask the user to confirm any changes you're unsure about.
- **Mix of small fixes and one big feature:** Lead with the big feature as a hero section. Group small fixes into a compact list. Don't let the big announcement get lost in a sea of minor items.
- **User wants internal + external versions:** Produce both. External: user-facing benefits only. Internal: add "how to talk about it," customer pain points addressed, and competitive positioning for sales/CS.
- **Nothing exciting shipped — all bug fixes and tech debt:** Honest framing: "Stability and performance release." Lead with the most impactful fix. Position reliability as a feature, not an apology.
- **User wants release notes for an API/developer product:** Switch to developer voice. Include endpoint changes, SDK versions, request/response format changes, code examples, and deprecation timelines with specific dates.
- **User provides too many items (50+ tickets):** Group into themes. Lead with 3–5 highlights, then organize the rest into categorized lists. Offer a "detailed changelog" as an appendix for completeness.
- **Breaking change that affects many users:** Lead the entire release note with it. Use a prominent callout. Include exact migration steps, timeline, and support contact. Don't bury it under new features.
