---
name: "Mine Calls for Content Ideas"
description: "Generate high-impact content ideas from customer conversations — blog topics, email series, guides, case studies. Grounded in actual customer language, objections, and buying signals from discovery calls and sales meetings. Trigger on: content ideas, blog topics, what to write about, customer education content, content marketing, demand gen content, asset ideas."
dependencies: []
connectors:
  - name: "Slack"
    reason: "Pull team discussions, product feedback threads, and customer questions from channels to surface recurring themes for content"
  - name: "Gmail"
    reason: "Extract customer email threads, objection responses, and frequently asked questions to identify educational content gaps"
  - name: "HubSpot"
    reason: "Pull company/contact notes, deal stage patterns, and sales activity to identify which content assets sales teams are asking for"
  - name: "Notion"
    reason: "Reference existing content calendar and editorial guidelines to avoid duplicate ideas and maintain consistent voice"
---

## Purpose

Generate a prioritized list of content ideas grounded in what your customers actually care about. When conversation data exists in Harmony — discovery calls, sales meetings, customer interviews, support conversations — the skill mines that data for recurring customer questions, objections, buying signals, and language patterns that point to gaps in your content library. When conversation data doesn't exist, the skill works from provided customer insights and helps you identify the exact topics, formats, and distribution channels that will resonate with your target audience.

## When to Use

- Monthly content planning when you want ideas rooted in real customer feedback, not guesswork
- Demand generation planning — turning customer objections from calls into educational content that nurtures leads
- Building a product education library — systematic content covering all the pain points your customers mention
- Sales enablement — creating assets that help reps answer customer questions and overcome objections without repeating themselves
- Competitive positioning — writing content that addresses competitor mentions and positions your product in the market

## Instructions

### 1. Gather conversation and research data

Ask what input you have:

- **Conversations:** Do you have recent sales calls, discovery meetings, customer interviews, or support tickets in Harmony?
- **Customer feedback:** What questions do customers ask repeatedly? What objections come up on every call?
- **Sales themes:** What are your top 5 objections? What questions stall deals?
- **Competitive mentions:** When do customers bring up competitors? What concerns trigger those conversations?
- **Target audience:** Who are you writing for? (prospects, new customers, existing users, specific roles?)

If conversation data exists in Harmony, pull:
- Verbatim customer questions and language (exact wording tells you how people search for solutions)
- Recurring objections across multiple calls (indicates content gap — you need an asset addressing this)
- Competitor mentions and how customers perceive alternatives
- Pain points mentioned in specific language (use in headlines and openings)
- Questions marked as "unresolved" or "follow up via email/resource"

### 2. Identify content themes and gaps

Extract patterns from conversations:

- **Education gaps:** What are customers confused about? (e.g., "How do I integrate this with our existing systems?" asked on 7 calls = integration guide idea)
- **Objection themes:** Which objections appear most frequently? (e.g., "We already have X tool" on 60% of calls = competitive battlecard idea)
- **Role-specific questions:** Which questions come from specific personas? (e.g., CTOs ask about architecture; CFOs ask about ROI)
- **Stage-specific needs:** What questions come up in early stage vs. late stage conversations? (early = education, late = ROI/security)
- **Buying signals:** What reassures customers most? (mentions of features, case studies, pricing info that reduced hesitation)

### 3. Score and prioritize ideas

For each content idea, estimate impact using:

- **Frequency:** How many times did this topic/question come up? (20+ conversations = high impact)
- **Revenue correlation:** Does content addressing this topic move deals forward or unblock stalled negotiations? (yes = high impact)
- **Sales demand:** Are sales reps asking for this asset to answer customer questions? (yes = high impact)
- **Competitive need:** Would this content improve positioning vs. competitors mentioned on calls? (yes = high impact)
- **Production effort:** How much work to produce this? (quick guides = low effort, case studies = high effort)

Rank by: (Frequency × Revenue Correlation × Sales Demand) / (Production Effort)

### 4. Define content format and angle

For each high-priority idea, specify:

- **Topic/title:** Specific, searchable, grounded in customer language
- **Format:** Blog post, guide, email series, video, case study, checklist, webinar?
- **Audience:** Which persona(s) will find this most valuable? (role, company size, challenge)
- **Angle:** How is this different from similar content that already exists? What customer insight drives the angle?
- **Key sections:** What will the content cover? (Use objections/questions from calls to define sections)
- **Distribution:** Where will this live? (blog, email, LinkedIn, gated resource, sales asset?)

### 5. Connect to sales impact

For each idea, outline:

- **Which deals does this unblock?** (e.g., "Integration guide unblocks deals stalled on 'How does this fit with Salesforce?'")
- **Sales rep usage:** How should reps use this? (send on first call? when objection comes up? in follow-up sequence?)
- **Lead nurture sequence:** If gated resource, where does this fit in nurture flow? (top-of-funnel education vs. late-stage decision support?)
- **Success metric:** How will you measure if this content works? (email opens, blog visits, demo requests, deal velocity change?)

## Output Format

# Content Ideas — [Company/Product Name]
_Prepared [date] · Based on [# conversations] customer conversations_

## Executive Summary
[2–3 sentences: total ideas generated, top 3 recommended priorities, expected impact, distribution timeline]

## Content Calendar Recommendations
| Priority | Topic | Format | Audience | Effort | Expected ROI | Weeks to Produce |
|----------|-------|--------|----------|--------|--------------|------------------|
| 1 | [topic] | [format] | [persona] | [L/M/H] | [High/Medium/Low] | [#] |
| 2 | [topic] | [format] | [persona] | [L/M/H] | [High/Medium/Low] | [#] |
| 3 | [topic] | [format] | [persona] | [L/M/H] | [High/Medium/Low] | [#] |

## Detailed Ideas

### [Priority 1] [Topic]
**Format:** [Blog post / Guide / Email series / Case study / Video / Checklist / Webinar]
**Audience:** [Primary persona + 1–2 supporting personas]
**Customer Language:** "[Direct quote or paraphrase from customer conversation that inspired this]"
**Why This Idea:**
- Mentioned in [#] conversations
- Directly addresses objection: "[specific objection from calls]"
- Sales reps requested asset for: [use case(s)]

**Proposed Outline:**
1. [Section 1]
2. [Section 2]
3. [Section 3]

**Distribution:** [Where this will live + how reps will use it]
**Success Metric:** [How you'll measure effectiveness]

_(Repeat for top 5–10 ideas)_

## Content Themes (Unmet Needs)

| Theme | Frequency | Why It Matters | Recommended Asset |
|-------|-----------|----------------|-------------------|
| [theme] | [# mentions] | [business impact] | [asset type] |

## Competitive Intelligence — Content Gaps
| Competitor Mention | Frequency | Your Position | Suggested Content |
|---|---|---|---|
| [competitor] | [# times] | [how you're different] | [content to explain difference] |

## Demand Generation Content Map
_Which content moves prospects through each deal stage?_

| Deal Stage | Key Questions | Recommended Content | Status |
|---|---|---|---|
| Awareness | [what they're asking] | [asset type] | New / Existing |
| Discovery | [what they're asking] | [asset type] | New / Existing |
| Proof of Value | [what they're asking] | [asset type] | New / Existing |
| Negotiation | [what they're asking] | [asset type] | New / Existing |

## Sales Enablement Recommendations
- [Asset #1 that sales reps requested]: Use in [which deals / with which objection]
- [Asset #2 that sales reps requested]: Use in [which deals / with which objection]

## Implementation Timeline
| Phase | Weeks | Deliverables | Owner |
|-------|-------|--------------|-------|
| Content planning | 1 | [list] | [role] |
| Outline & research | 2 | [list] | [role] |
| Draft & review | 2–3 | [list] | [role] |
| Final & promotion | 1 | [list] | [role] |

## Now What?

- **Week 1:** Share top 3 recommendations with content and sales teams; get feedback on priorities
- **CMS/calendar:** Add top 5 ideas to your content calendar with target publish dates
- **Sales alignment:** Brief sales team on new assets coming; explain which deals/objections each addresses
- **Measurement:** Set up tracking (blog analytics, email opens, form submissions) to measure content effectiveness
- **Next quarter:** Track which assets moved deals forward fastest; prioritize similar topics

---

## Example

**User:** "We've done about 15 discovery calls with mid-market ops teams over the past 6 weeks. I need content ideas that will help us nurture these leads and close deals faster."

**Output:**

# Content Ideas — ProcessFlow Automation
_Prepared 2026-03-22 · Based on 15 customer conversations (Feb–Mar 2026)_

## Executive Summary
Generated 12 high-impact content ideas from 15 discovery conversations. Top 3 priorities: "5 Hidden Costs of Manual Process Management" (blog, addresses #1 objection), "Ops Team Automation Playbook" (gated guide, requested by 7 prospects), and "CloudFlow vs. Zapier vs. Manual" (comparison guide, competitive enablement). Expected impact: 20–30% improvement in sales cycle through better lead nurturing. Recommended production timeline: 4 weeks for top 3 assets.

## Content Calendar Recommendations
| Priority | Topic | Format | Audience | Effort | Expected ROI | Weeks to Produce |
|----------|-------|--------|----------|--------|--------------|------------------|
| 1 | 5 Hidden Costs of Manual Process Management | Blog post | Ops managers, Directors | Medium | High | 2 |
| 2 | Ops Team Automation Playbook | Gated guide + webinar | Ops managers, Ops directors | High | High | 3 |
| 3 | ProcessFlow vs. Zapier vs. Manual Workflows | Comparison guide | VP Ops, CTO | Medium | High | 2 |
| 4 | Your First Process Automation: Case Study (FinTech) | Case study | Ops managers in financial services | High | Medium | 3 |
| 5 | Integration Checklist — Connecting to Your Stack | Checklist + video | Technical operators, DevOps | Low | Medium | 1 |
| 6 | Automation ROI Calculator | Interactive tool | All roles | High | High | 4 |
| 7 | Process Discovery Workshop Guide | Email series (3 parts) | Ops managers, team leads | Medium | Medium | 2 |

## Detailed Ideas

### [Priority 1] 5 Hidden Costs of Manual Process Management
**Format:** Blog post + LinkedIn series
**Audience:** Ops managers and directors at mid-market companies (50–500 employees)
**Customer Language:** "We're running 8 spreadsheets that don't talk to each other. Every time something changes, we have to manually update three places." — VP Ops, Relay Corp

**Why This Idea:**
- Mentioned in 12 out of 15 conversations (80% of calls)
- #1 early-stage objection: "We haven't quantified the problem — do we really need to automate this?"
- Sales team said: "Prospects need to see the business case before they get serious about evaluation"

**Proposed Outline:**
1. **The Obvious Costs (Time spent on manual updates, errors from dual entry)**
   - Average Ops manager spends 5–8 hours/week on manual process work (statistic)
   - Example: "We update the master customer list manually, then it gets copied into Salesforce, then into the support system" (quote from Relay call)
2. **The Hidden Costs (Missed insights, delayed decision-making, team frustration)**
   - Can't see cross-process bottlenecks until month-end review (too late to fix)
   - Managers guess on priorities instead of seeing real workflow time
   - Quote: "By the time we realize something's broken, we've lost a week of productivity" — Ops Director, CloudSync
3. **The Strategic Cost (Limits what your team can do)**
   - Ops team too busy with maintenance to improve processes
   - Can't onboard new markets/products faster without hiring more manual workers
4. **Quick Win: Where to Start Automating First**
   - Data sync between 2+ systems (highest ROI)
   - Repetitive approval workflows
   - Daily/weekly reporting compilations

**Distribution:**
- Publish on blog (SEO-friendly, capture searches for "process automation ROI")
- Sales reps send to prospects saying "This post sums up the challenge we're solving"
- Repurpose as 3-part LinkedIn post series (reach ops managers scrolling feed)
- Gate downloadable PDF version with cost calculator template

**Success Metric:**
- Blog post target: 2K+ views in first month; 150+ newsletter signups
- Sales: Track "saw blog post before demo" in deal notes; correlate to faster closing
- Email: 35%+ open rate on "Hidden Costs" email to nurture list

### [Priority 2] Ops Team Automation Playbook
**Format:** Gated guide (20–30 pages) + live webinar
**Audience:** Ops managers and team leads (primary), Ops directors (secondary)
**Customer Language:** "I wish we had a step-by-step guide for how to even think about which processes to automate first." — Operations Manager, Vertex Systems

**Why This Idea:**
- Requested directly by 7 out of 15 prospects ("Do you have a guide we could use?")
- Addresses discovery-stage question: "How do we even get started?"
- Sales team said: "This would be a perfect asset to send after first demo — keeps prospect engaged between meetings"

**Proposed Outline:**
1. **Chapter 1: Assess Your Current State**
   - Map existing workflows (provided template)
   - Quantify time/cost (worksheet for each process)
   - Identify pain points and quick wins
2. **Chapter 2: Prioritize Which Processes to Automate First**
   - RICE framework (Reach, Impact, Confidence, Effort)
   - Real example: "We analyzed our 12 processes and found that automating expense reports would save 15 hours/week with minimal setup"
3. **Chapter 3: Build Your Business Case**
   - Template to calculate ROI (time saved × labor cost)
   - Get buy-in from leadership (framework for selling upward)
4. **Chapter 4: Pilot, Learn, Scale**
   - How to run a 2-week pilot without disrupting operations
   - Lessons from 50+ customer implementations
5. **Appendix: ProcessFlow Integration Checklist**
   - Which tools we work best with
   - Common API questions answered

**Distribution:**
- Gate on website; nurture sequence sends access after sign-up
- Sales team uses as discovery-to-POV bridge ("Here's what we recommend reading")
- Webinar version: Live interactive walkthrough (sales pitch at end)

**Success Metric:**
- Guide downloads: 500+ in first quarter
- Webinar attendance: 100+ registrants
- Conversion: 15% of guide readers → demo request

### [Priority 3] ProcessFlow vs. Zapier vs. Manual Workflows
**Format:** Comparison guide + blog post
**Audience:** VP Ops, CTO, engineering leads (who worry we'll "lock them in")
**Customer Language:** "We already use Zapier. Why would we switch?" (objection on 6 calls) + "We're worried about vendor lock-in" (concern from CTO on 4 calls)

**Why This Idea:**
- Competitor mention frequency: Zapier mentioned on 60% of calls
- Sales blocker: "They're comparing us to Zapier and don't see the difference"
- Strategic advantage: We handle more complex workflows; Zapier is good for simple automation

**Proposed Outline:**
1. **The Comparison**
   - Feature table: ProcessFlow vs. Zapier vs. Manual (UI builder, integration depth, error handling, approval workflows)
   - Honest assessment: "Zapier is great for X; we win on Y"
2. **When Each Approach Makes Sense**
   - Use manual for: [very rare scenarios]
   - Use Zapier for: Simple 2–3 step workflows, light integration
   - Use ProcessFlow for: Complex multi-step, approval-heavy, integration-heavy workflows
3. **Real-World Example: The Deal**
   - Prospect comparison case study
   - Started with Zapier, hit limitations after 6 months
   - Switched to ProcessFlow to handle their actual complexity
4. **Total Cost of Ownership Analysis**
   - Zapier: Per-task pricing scales; ProcessFlow: flat rate
   - At what volume does each make sense?
5. **Migration Path (If You're on Zapier)**
   - Easy to migrate existing Zaps to ProcessFlow
   - We provide migration support

**Distribution:**
- Unpaid blog post (SEO target: "Zapier vs alternatives")
- Sales asset: "Here's an honest comparison" (credibility)
- LinkedIn thought leadership: VP product discussion of automation platforms

**Success Metric:**
- Blog post ranks for "Zapier vs ProcessFlow" and "automation tool comparison" (organic traffic)
- Sales usage: Track % of demos that address "Zapier comparison"
- Lead quality: Leads coming from this content have 20%+ higher close rate (solved objection early)

## Content Themes (Unmet Needs)

| Theme | Frequency | Why It Matters | Recommended Asset |
|---|---|---|---|
| "How do we prioritize which processes to automate?" | 11/15 | Blocking deal advancement from discovery → POV | Playbook + webinar |
| "How much time will we actually save?" | 10/15 | CFO asking before budget approval | ROI calculator + case studies |
| "Will this work with our existing tools?" | 9/15 | Technical requirement; integration scope unclear | Integration guide + checklist |
| "Can we start small and expand?" | 8/15 | Risk mitigation; want to prove value before full rollout | Pilot guide + template |
| "How long does setup take?" | 6/15 | Timeline concern for implementation | Implementation roadmap + case study timelines |

## Competitive Intelligence — Content Gaps
| Competitor Mention | Frequency | Your Position | Suggested Content |
|---|---|---|---|
| Zapier | 60% (9/15) | We handle complex workflows they don't; no approval workflows in Zapier | Comparison guide + feature highlight series |
| Salesforce Flow | 40% (6/15) | Locked into Salesforce only; we work with 50+ tools | "Multi-tool automation" thought leadership |
| Custom code / in-house development | 33% (5/15) | Faster to build, lower risk of bugs, no ongoing developer cost | "Build vs. buy" calculator and case study |
| Microsoft Power Automate | 20% (3/15) | Weak approval workflows; ProcessFlow has stronger governance | "Enterprise approval workflows" guide |

## Demand Generation Content Map
_Which content moves prospects through each deal stage?_

| Deal Stage | Key Questions | Recommended Content | Status |
|---|---|---|---|
| Awareness | "Do we have a process automation problem?" | Blog: 5 Hidden Costs (top-of-funnel) | New — Publish Week 1 |
| Discovery | "Where should we start?" | Guide: Ops Automation Playbook (gated, nurture) | New — Publish Week 2 |
| Proof of Value | "Will this work with our stack?" | Checklist: Integration Guide; Video: Setup walkthrough | Partially Exists — Expand |
| Negotiation | "What's this going to cost vs. Zapier?" | Comparison: ProcessFlow vs. Alternatives; ROI calculator | New — Publish Week 3 |

## Sales Enablement Recommendations
- **"5 Hidden Costs" blog post:** Sales reps send to any prospect in awareness phase saying "This resonates? Let's talk about your specific situation"
- **Ops Playbook:** After first demo, send to prospect as homework before POV planning (keeps engagement between meetings)
- **Comparison guide:** When CTO/technical stakeholder joins the conversation with questions about Zapier or alternatives
- **ROI calculator:** When CFO or approver needs budget justification
- **Integration checklist:** During POV when technical team is evaluating fit with their stack

## Implementation Timeline
| Phase | Weeks | Deliverables | Owner |
|-------|-------|--------------|-------|
| Content planning & approval | 1 | Detailed outlines for top 5 ideas | Marketing + Sales |
| Research & interviews | 1 | Customer quotes, case study data, technical specs | Marketing + Product |
| Draft & internal review | 2 | Blog posts, guides, comparison matrix | Marketing + Sales |
| Design & final production | 1 | PDFs, graphics, landing pages | Design + Marketing |
| Promotion & sales enablement | 1 | Email sequences, sales training, Slack announcement | Marketing + Sales |

## Now What?

- **This week:** Share these 12 ideas with content and sales leads; get alignment on top 3 to start immediately
- **Content calendar:** Add top 5 ideas to your Q2 plan with target publish dates (recommend: Hidden Costs week of Mar 29, Playbook week of Apr 12)
- **Sales alignment:** Brief sales team on which assets address which objections; explain how/when to use each
- **Measurement:** Set up analytics tracking for blog posts (views, time on page, conversions), guide downloads, webinar registrations
- **Feedback loop:** After first 3 assets publish, track which ones drive deal velocity improvement; double down on winners
- **Next ideas:** After these, revisit conversations from next month to identify emerging themes

---

## Edge Cases

- **Low conversation volume (<5 customer calls):** Supplement with internal feedback (sales objections, support tickets) and competitor research. Mark recommendations as "validated with [#] customer mentions + sales input." Plan to validate further after next 5 calls.
- **Conversation data from one persona only (e.g., only CTOs):** Focus content on that persona's questions first. Note in report that content for other roles (CFO, business owner) will need separate research once you have calls with those personas.
- **Competitor not mentioned on any calls:** Not a priority for content. Competitors mentioned frequently on calls indicate market perception problem you should address; those not mentioned can wait.
- **Conflicting customer feedback ("Some say A, others say B on same topic):** Both are real. Create content addressing both perspectives (e.g., "Integration guide for teams preferring vendor vs. self-hosted"). Explain in asset why different customers have different needs.
- **Sales team says "Don't create that — we have it already":** Verify asset exists and is current (if last updated >6 months ago, consider refresh). Mark as "Existing — Refresh recommended" instead of new creation.
- **Topic requested but objection is rare (<2 mentions):** Still valuable if sales team or customer advisory board identifies it as high-impact. Note as "Strategic importance / Sales request" rather than "high frequency." May want to validate with a few more customer calls before investing heavily.
