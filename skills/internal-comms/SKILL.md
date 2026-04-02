---
name: "Internal Communications"
description: "Craft clear, engaging internal updates for your team and company—3P updates, newsletters, FAQs, status reports, leadership announcements. Trigger on: team update, company announcement, internal comms, write a newsletter, team sync update, status report, leadership update..."
dependencies: []
author: "Harmony"
version: "1.0.0"
icon: "sparkles"
cover: ""
screenshots: []
category: "Operations"
---

## Purpose
Internal communications often falls into a trap: too vague, too long, or buried in unnecessary context. Whether you're sharing project progress, announcing changes, answering common questions, or rallying teams around a direction, your message should land clearly, build trust, and drive action. This skill helps you craft internal comms in multiple formats—from quick 3P updates to longer newsletters—that match your audience, purpose, and organizational culture.

## When to Use
- Weekly or monthly team progress updates (Progress/Plans/Problems format) for leadership visibility
- Company-wide announcements about changes, initiatives, or milestones that need to land clearly
- FAQ or knowledge-base responses that explain company policy, process, or decision rationale
- Project status reports for cross-functional stakeholders tracking deliverables and blockers
- Leadership updates sharing vision, strategy, or directional decisions with senior teams
- Incident or crisis communications that are factual, reassuring, and action-oriented
- Recurring newsletters (product updates, engineering insights, culture highlights) that build community

## Instructions

### 1. Clarify Your Message Context
Before writing, lock in these details:
- **Format:** Which template? (3P update, newsletter, FAQ, status report, announcement, etc.)
- **Audience:** Who reads this? (all-hands, leadership, specific department, cross-functional team)
- **Tone:** What's the vibe? (data-driven and factual, celebratory, serious/urgent, transparent and vulnerable)
- **Frequency:** One-off or recurring? If recurring, what's the cadence?
- **Success:** What's one thing you want readers to believe, know, or do after reading?
- **Constraints:** Length limit? Deadline? Approval chain? Sensitive topics?

### 2. Gather Source Material
Pull from the most recent and relevant:
- Meeting transcripts (Harmony conversation data) for project details, decisions, and quotes
- Slack threads, email chains, and wiki pages for context
- Data or metrics (product metrics, hiring progress, customer feedback) that support your message
- Recent wins, challenges, or decisions from your team or company
Organize these into buckets that roughly map to your audience's interests.

### 3. Choose Your Format and Outline
Different formats require different structures:

**3P Update (30-60 second read):**
- Progress: 1-3 bullets on what shipped/completed this period
- Plans: 1-3 bullets on what's coming next
- Problems: 1-3 bullets on blockers or risks

**Newsletter (300-500 words):**
- Headline that hooks
- Lead section (2-3 sentences on the theme or big picture)
- 3-5 bite-sized stories or sections
- Call to action or "now what?"

**FAQ (5-7 Q&As, 150-300 words):**
- Sort questions by priority (most common first, or most important strategically first)
- Answer directly; avoid hedging

**Status Report (500-800 words):**
- Executive summary (what changed, why it matters)
- Section per workstream or project
- Metrics and evidence
- Key decisions and next steps
- FAQ section for anticipated questions

**Leadership Announcement (300-600 words):**
- What's changing and why (the decision)
- What it means for the audience (implications and benefits)
- What happens next (timeline and action)
- FAQ or "how to respond" section

### 4. Draft from Your Outline
Write in your chosen voice. If it's data-driven and matter-of-fact:
- Lead with numbers and outcomes
- Use shorter sentences
- Avoid speculation; stick to facts
- Use tables for complex information

If it's celebratory or narrative:
- Start with a specific moment or win
- Use second-person ("you") when appropriate
- Include quotes from team members if available (pull from meeting transcripts)
- Show the human side; don't just list facts

For all formats: write first, polish later. Don't stall on the phrasing.

### 5. Add Specificity and Personality
Vague comms get ignored. Replace generic language:
- ❌ "We made progress on the product"
- ✅ "We shipped offline-first sync, reducing support tickets by 30% and improving 30-day retention by 2%"

Include real names, numbers, and quotes. If using meeting transcripts, pull a direct quote from a decision-maker or contributor. This makes your comms feel authentic and builds trust.

### 6. Test for Clarity
Read once for understanding. Then ask:
- If I read only the headline and first sentence, do I know what this is about?
- Is the most important information in the first paragraph?
- Are there jargon terms that need definition?
- Would someone reading this on mobile easily scan it?
- Is the tone consistent throughout?
Trim ruthlessly. Cut anything that doesn't serve your core message.

### 7. Add a "Now What?"
Every internal communication should suggest next action:
- 3P updates → "Questions for [person]? Drop in Slack"
- Announcements → "RSVP here" or "More details in the FAQ below"
- Status reports → "Next milestone: [date]. Key decision needed on [topic]"
- FAQs → "Still have questions? Reply to this email or file a ticket"
- Newsletters → "Try this feature" or "Read the full story at [link]"

### 8. Review Before Sending
- Copy-edit for tone consistency and grammar
- Ensure names and titles are correct (pull from org data if available)
- Check that any links or resources are live
- Add a metadata line: To: [audience], From: [your name], Subject: [one-liner], Sent: [date]
- Consider who needs to see this first (legal, comms, your manager?) and get approval if needed

## Output Format

```markdown
---
To: [Audience: e.g., "All Engineering", "Leadership", "Cross-Functional Team"]
From: [Your Name, Title]
Subject: [One-liner headline]
Date: [YYYY-MM-DD]
Format: [3P Update / Newsletter / FAQ / Status Report / Announcement]
---

# [Main Headline]

> [Optional: one-sentence context or teaser]

## Key Takeaway
[2-3 sentences. What's the core message? What should readers remember?]

---

## [Section 1: Progress / Story / Context]
[Specific details, metrics, quotes from meetings, or narrative. 50-100 words.]

## [Section 2: Plans / Implications / Details]
[What's next? What does this mean? 50-100 words.]

## [Section 3 (if applicable): Problems / Timeline / Additional Info]
[Challenges, blockers, or next milestones. 50-100 words.]

---

## FAQ

**Q: [Common question]**
A: [Direct answer with specific detail.]

**Q: [Follow-up question]**
A: [Answer with context or decision rationale.]

---

## Now What?
[Call to action. Questions? RSVP? Feedback welcome? Read more at [link]?]

---

*Last updated: [date]. Questions? Reach out to [name] at [contact].*
```

## Example

**Input Scenario:**
- Engineering team shipped offline-first mobile sync (the doc-coauthoring skill example project)
- Leadership approved the budget and timeline in a meeting 2 weeks ago
- First phase (core sync layer) is complete; rolling out to customers next week
- Support team reports excitement; 2 early beta customers report great experience
- Next phase starts in 3 weeks

**Output: 3P Update Email**

```
---
To: All Hands
From: Sarah Chen, VP Product
Subject: Offline-First Mobile Sync is Live (30% fewer support headaches)
Date: 2026-03-22
Format: 3P Update
---

# Offline-First Mobile Sync is Live

> We shipped the initiative the engineering team has been hammering on. It's already working.

## Progress 🟢

✅ **Offline-first sync layer is production-ready.** The engineering team completed Phase 1 and we're rolling out to all customers starting Monday. In beta testing (2 week pilot with Acme Manufacturing and Riverside Logistics), we're seeing zero data loss and sync latency cut from 8-15 seconds to 2-4 seconds. Support is already seeing early wins: fewer "my data disappeared" tickets.

✅ **Estimated impact: 30% reduction in mobile support tickets.** That's ~200 tickets/month that we're eliminating. Marcus and the team estimate this frees up 100+ hours/month of support and engineering triage time.

## Plans 📋

→ **Customer rollout:** Starting Monday, all new users will use the offline-first architecture. Existing users will migrate gradually over 2 weeks (per the Feature Flag strategy we locked in).

→ **Phase 2 kicks off:** Next week, engineering starts migrating the remaining 4 features (messaging, calendar sync, file uploads, collaboration). If Phase 1 velocity holds, Phase 2 completes by end of Q2.

## Problems ⚠️

No blockers. One thing we're watching: on older Android devices (API 24-26, ~3% of our base), SQLite query performance is slower than expected. Engineering is optimizing query patterns and indexing. No user impact yet, but we're keeping close tabs.

---

## FAQ

**Q: Will my data transfer over when we roll this out?**
A: Yes. If you're an existing user, your data migrates automatically during the gradual rollout. Your app will appear offline for 3-5 seconds during the migration; no data is lost.

**Q: I'm in beta. Do I need to do anything?**
A: Nope. Keep using the app as normal. The new architecture is already handling all your syncs in the background.

**Q: Why does this matter to me as a user?**
A: Three reasons: (1) Your app now works offline—no more blank screens if you lose signal. (2) Your changes sync faster and more reliably. (3) We're spending less time fixing sync bugs and more time building new features you've asked for.

**Q: What if something breaks during rollout?**
A: We have a rollback plan. If we detect issues, we can revert a customer to the old sync model within minutes. No data loss.

---

## Now What?

**Users:** Update to the latest version next week and enjoy offline access.

**Support Team:** New troubleshooting playbook is in Confluence (link). Expect sync-related tickets to drop significantly. File any edge cases you discover in Slack #bugs.

**Engineering:** Grats on shipping this. Time to celebrate, then regroup for Phase 2 kickoff next week.

---

_Questions? Ping Sarah (VP Product) in Slack, or drop a comment in the launch thread in #announcements._
```

---

**Input Scenario (Alternative Example):**
- Monthly company newsletter
- Want to celebrate team wins, share product updates, and build culture
- Have clips from all-hands meeting, recent customer feedback, hiring news

**Output: Newsletter Format**

```
---
To: All Hands
From: James Rodriguez, CEO
Subject: March Wins, Q2 Focus, and Why We're Hiring
Date: 2026-03-22
Format: Newsletter
---

# The March Dispatch: What We're Building

> Every month we pause to share what's shipped, what's coming, and what we're proud of.

---

## 🚀 What Shipped This Month

**Offline-First Mobile Sync.** Our engineering team crushed a 13-week initiative to rebuild how the app syncs data. Result: zero data loss, 75% faster sync, and a pile of support tickets that vanish. Two beta customers (Acme Manufacturing and Riverside Logistics) reported they can now work reliably in areas with spotty connectivity—a huge deal for their teams. Sarah Chen (VP Product) sent the full breakdown yesterday; check your email.

**New Dashboard for Finance Customers.** The product team shipped a new revenue recognition dashboard for our finance vertical. One customer, NextGen Accounting, said: *"This cut our month-end close time from 6 hours to 2. We're saving 80 hours per quarter."* That's the kind of impact we're here for.

**Hiring: We're Growing.** We posted 5 new roles this month in Engineering, Product, and Sales. If you know someone awesome, send them our way—internal referrals get a $5k bonus if they land the role. We're specifically looking for senior engineers who've shipped at scale and a product manager who's led international expansion.

---

## 📈 What We're Focused On in Q2

At the all-hands last week, we locked in three bets for Q2:

1. **Offline-first on all platforms** (Phase 2 of the sync project). By end of Q2, desktop and web will have the same resilience we just shipped on mobile. This unblocks enterprise customers in regulated industries where data sovereignty and offline access are deal-breakers.

2. **Expand into Japan and APAC.** Our product is strong in North America, but we're seeing demand spike in Tokyo, Singapore, and Sydney. We're hiring a VP of APAC next month and building out localization and support infrastructure.

3. **AI-assisted insights** (early days). We're experimenting with an AI co-pilot that helps users surface patterns in their data. Nothing public yet, but we'll share early prototypes with interested customers in April.

---

## 💡 A Note on Remote Work

As we grow, we want to be intentional about how we work together. Starting April 1st, we're moving to a "remote-first, office-optional" model. Here's what that means:

- **Default:** Everyone works from home unless they have a specific reason to be in the office
- **In-office days:** Tuesdays and Thursdays are "sync days" where we encourage in-person collaboration
- **Flexibility:** Need to be in the office? Book a desk in Slack. Need to work from home full-time? That's fine too.

We'll have a Q&A with HR and operations next week. Details are in the handbook update (link).

---

## 🎉 Shout-Outs

- **Marcus and the engineering team:** For shipping offline-first on time and under budget. That's world-class execution.
- **Jen's marketing team:** For landing the NextGen Accounting case study. The messaging landed so well, they referred two other customers.
- **Operations:** For processing our expansion into Japan faster than we expected. Visas, legal, vendor setup—you guys moved mountains.

---

## What's Next

Next month: we'll update you on Q2 progress, introduce the new APAC lead, and share early results from the AI co-pilot experiment. We also have an engineering tech talk scheduled on March 30th (5 PM PT): "How We Ship Offline-First Systems at Scale." Marcus will walk through the mobile sync architecture.

Have a story or win from March you think the company should hear about? Reply to this email or ping me in Slack.

---

_James_
_CEO_
```

---

## Edge Cases

- **Sensitive topic or bad news:** Lead with transparency and what's being done about it. Avoid sugar-coating, but include next steps and support. "We had an outage on [date] that affected [users]. Here's what happened, here's what we did to fix it immediately, and here's what we're doing to prevent it next time."

- **Audience is split (some excited, some concerned):** Acknowledge both perspectives. "This change will free up engineering time to focus on [feature], which engineering is pumped about. It also means [concern], and we're committed to [mitigation]."

- **Information is still evolving or uncertain:** Use conditional language. "We're planning to ship [feature] in Q2. Pending legal review, we may need to adjust scope. We'll have clarity by [date]."

- **Announcement involves a layoff, reorganization, or departure:** Have HR review first. Lead with context and empathy. Be clear about timeline and next steps for affected teams. Don't bury the lead; state it in the first paragraph.

- **Communication needs to be brief (one-liner Slack update):** Condense to two sentences max: "[What happened or what we did]." "[Why it matters in one sentence]." Point to longer docs for detail.

- **Multiple teams need slightly different messages:** Write one core message, then customize the "Now What?" section for each audience. Keep the facts consistent; adjust the implications.
