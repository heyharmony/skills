---
name: "Work Backwards from Outcome"
description: "Define your product through customer perspective before building. Create a compelling press release and FAQ that answer the hard questions: who benefits, what problem is solved, how it works, and why it matters. Use this method to validate strategy and surface disagreements early. Trigger on: product launch, feature planning, design review, strategy session, roadmap discussion."
dependencies: []
connectors:
  - name: "Google Docs"
    reason: "Collaborate on press release and FAQ document with stakeholders"
  - name: "Slack"
    reason: "Share and discuss the press release, gather feedback from team"
  - name: "Linear"
    reason: "Link completed press release to product roadmap and engineering tickets"
author: "Harmony"
version: "1.0.0"
icon: "sparkles"
cover: ""
screenshots: []
category: "Product"
---

## Purpose

The working backwards method flips the typical development process: instead of building a product and then figuring out how to explain it, you write the announcement first. This forces clarity about what you're solving, for whom, and why it matters before you write a single line of code or design a single screen. The method surfaces misalignment between stakeholders, reveals gaps in thinking, and grounds the entire effort in customer reality rather than internal assumptions.

## When to Use

- **Before starting a new product or major feature**: Use when you have a rough idea but haven't fully validated the concept
- **Resolving disagreement on requirements**: When your team can't agree on what to build, let the press release force the conversation
- **Evaluating whether something is worth building**: If you can't write a compelling press release, the product probably isn't worth pursuing
- **Aligning cross-functional teams**: Product, design, engineering, and marketing need to agree on the same story
- **Preparing for a product launch**: Create the announcement months before launch to ensure all decisions ladder up to customer benefit
- **Communicating strategy to leadership**: The press release becomes your north star—everything should connect to it
- **Defining edge cases and technical constraints early**: The FAQ will force engineering to answer hard feasibility questions now

## Instructions

1. **Set the timeline and scope**
   - Decide what timeframe you're writing for (launch date could be 6 months or 2 years away)
   - Define the audience scope: specific geography, industry, customer segment, or all customers?
   - Clarify what's included in this release (the one major capability, not every feature ever)
   - Set a meeting with all stakeholders: product, design, engineering, leadership, marketing

2. **Write the headline and opening paragraph**
   - Lead with the customer benefit, not the feature
   - Use clear language—if someone outside your industry won't understand it, rewrite
   - Avoid marketing hyperbole; precision beats poetry
   - Test: read it aloud. Does it make you excited? Does it explain the core value?
   - Keep to 2-3 sentences maximum for the hook

3. **Draft the press release (one page maximum)**
   - **Who is this for?**: Name the specific customer segment and their frustration
   - **What problem does it solve?**: Describe the pain point or lost opportunity in concrete terms
   - **How does it work?**: Walk through the customer journey step-by-step
   - **Why now?**: What changed in the market or technology that makes this possible?
   - **Why us?**: What's your unfair advantage (technology, data, distribution, team)?
   - **What's the outcome?**: What can customers do now that they couldn't before?
   - Include 2-3 customer testimonials (fictional or aspirational—who would say this?)
   - Add an "About" paragraph with company background

4. **Compile the internal FAQ (5-8 questions minimum)**
   - **Pricing**: How much does this cost and why? What's the unit economics?
   - **Competitive differentiation**: What do competitors do? Why is ours better or different?
   - **Technical feasibility**: Can we actually build this? What's the highest-risk engineering component?
   - **Go-to-market**: How do we sell or distribute this? What's the sales motion?
   - **Metrics for success**: How will we measure whether this succeeded? What's the target?
   - **Timeline and resource requirements**: How many people, how long, what budget?
   - **Risk and mitigation**: What's most likely to go wrong? How do we reduce the risk?
   - **Customer research validation**: Have we talked to customers? What did they say?
   - Write answers that are honest, not defensive—if you don't know, say so and identify the research needed

5. **Run the review cycle with stakeholders**
   - Share the press release with product, design, engineering, and leadership asynchronously (48 hours)
   - Schedule a 90-minute working session to align
   - Look for places where people disagree: those are the blindspots
   - Revise the press release based on feedback—it should improve each iteration
   - Make sure every person in the room can recite the core customer problem

6. **Create linked artifacts**
   - Link the press release to your roadmap—it's the north star for all subsequent decisions
   - Create a design brief from the press release (don't design until the story is clear)
   - Turn the FAQ into a living document that engineering uses during development
   - Share the press release with anyone joining the project after this point
   - Update the press release if strategy shifts materially—use it as a checkpoint

7. **Use it as a filter for decisions**
   - When you're debating features, requirements, or design, ask: "Does this serve the customer problem we articulated?"
   - When you're writing marketing copy, start from the press release
   - When you're interviewing customers or running research, use the press release as your baseline

## Output Format

```
=== WORK BACKWARDS PRESS RELEASE ===

HEADLINE
[Headline that leads with customer benefit, 1-2 sentences]

OPENING PARAGRAPH
[2-3 sentences: who this is for, what problem, core benefit]

FOR IMMEDIATE RELEASE
[Date and location]

[COMPANY NAME] Launches [PRODUCT/FEATURE], [Core benefit statement]

WHO IT'S FOR
[Name the specific customer segment. Describe their current frustration or lost opportunity.]

THE PROBLEM
[Articulate the pain point or inefficiency. Use numbers if you have them. Show what customers lose by not having this.]

HOW IT WORKS
[Walk through the customer journey. What does the user experience? What's different from competitors?]

CUSTOMER TESTIMONIAL
"[Quote from a real or aspirational customer. What does success look like for them?]" - [Title], [Company]

TECHNICAL FOUNDATION
[Why is this possible now? What changed? What's the unfair advantage?]

AVAILABILITY AND PRICING
[When available, what tiers, what price? Link to any beta program.]

ABOUT [COMPANY NAME]
[1-2 sentences on company mission and track record]

---

INTERNAL FAQ

Q: Who is the narrowest target customer and why them first?
A: [Specific segment. Why they're most underserved or have highest willingness to pay.]

Q: What does success look like in year one?
A: [Specific metric targets. Revenue, adoption, customer count, retention, etc.]

Q: What are the top three risks to execution?
A: [1. Risk. Mitigation. 2. Risk. Mitigation. 3. Risk. Mitigation.]

Q: How do we price this and why?
A: [Unit economics. Competitor pricing. Customer willingness to pay. Revenue model.]

Q: What do customers say when you show them this?
A: [Summary of customer interviews. What surprised you? What validated the need?]

Q: Why can we do this better than competitors?
A: [Unfair advantage. Technology, data, team, distribution, or customer relationships.]

Q: What does the first year of engineering look like?
A: [Team size, key milestones, highest-risk components, dependencies.]

Q: How do we bring this to market?
A: [Sales motion, distribution channels, go-to-market sequence, key partnerships needed.]
```

## Example

**Company: Luminous Labs (B2B SaaS for research teams)**

```
=== WORK BACKWARDS PRESS RELEASE ===

HEADLINE
Luminous Labs Launches ResearchSync: AI-Powered Meeting Analysis for Academic Teams

OPENING PARAGRAPH
Luminous Labs today announced ResearchSync, a platform that automatically transcribes, analyzes, and cross-references lab meeting discussions against published research, identifying gaps in team alignment and emerging insights without manual note-taking. ResearchSync helps research teams capture and act on ideas faster, preventing the loss of critical discussion points that typically disappear after meetings end.

FOR IMMEDIATE RELEASE
March 2026 | Berkeley, CA

Luminous Labs Launches ResearchSync, Bringing Lab Meeting Intelligence to Academic Research

WHO IT'S FOR
ResearchSync is built for principal investigators, lab managers, and graduate students at research institutions. Today, these teams spend hours after every meeting writing meeting notes, cross-checking claims against prior literature, and replaying conversations to find decisions they made. Time that should go to research goes to administrative busywork.

THE PROBLEM
Principal investigators lead 4-8 hours of lab meetings per week. Only 30% of discussion outcomes are documented in written notes. When team members reference a discussion from three meetings ago, someone has to remember or manually search through messy notes. Critical decisions get lost. Literature contradictions go unnoticed. The average lab wastes 2-3 hours per week recovering information from meetings.

HOW IT WORKS
ResearchSync records lab meetings and transcribes them in real-time. The system extracts key decisions, action items, and experimental findings. It then cross-references the discussion against a searchable index of published research, flagging when the team discusses something that contradicts or confirms recent publications. Team members get a summarized meeting report within minutes, not hours. When a student asks "didn't we try something like this?", the PI can search ResearchSync and find the exact moment the experiment was discussed, what the team decided, and which papers were cited.

CUSTOMER TESTIMONIAL
"ResearchSync saved us three months of redundant experiments. When we reviewed past meetings, we realized we'd discussed this exact methodology six months ago and abandoned it for a good reason. Without ResearchSync, we would have rediscovered that the hard way." - Dr. Sarah Chen, Principal Investigator, Neuroscience Lab at Stanford

TECHNICAL FOUNDATION
ResearchSync combines speech-to-text, large language models for decision extraction, and integration with research databases (PubMed, arXiv) to surface relevant published work. The system understands scientific language, jargon, and experimental methodology. It learns from each lab's conventions over time, so the more the team uses it, the smarter it becomes at identifying what matters.

AVAILABILITY AND PRICING
ResearchSync launches June 2026 with initial availability for labs at research universities. Pricing is $2,500 per lab per year (supports up to 8 team members). Early adopter beta opens April 2026 at no cost.

ABOUT LUMINOUS LABS
Luminous Labs builds conversation intelligence tools for knowledge-intensive teams. Founded in 2023, the company has worked with 40+ research labs to understand how meetings drive or hinder scientific progress.

---

INTERNAL FAQ

Q: Why start with academic research labs instead of corporate R&D?
A: Academic labs have a higher problem intensity (meetings are chaotic, notes are minimal) and lower switching costs. Corporate R&D teams are locked into Slack and enterprise tools. Academics are more willing to try new tools and give product feedback.

Q: What does year one success look like?
A: 150 active labs (1,200 users), $375K ARR, 90% usage rate (labs using ResearchSync for 80%+ of meetings), customer NPS above 50.

Q: What are the three biggest risks?
A: 1) Transcription accuracy in noisy lab environments—mitigation: start with in-person only, invest in noise-handling. 2) University IT procurement cycles are slow—mitigation: white-glove onboarding, IT champion identification. 3) Integration with existing note systems (OneNote, Google Docs) could be demanded—mitigation: start export-only, add integration later if traction justifies.

Q: How do we price and why $2,500?
A: Pricing is per-lab, not per-seat. A typical lab spends $800-1,200 on software (Slack, Zoom, storage, etc.). ResearchSync justifies cost through 3-5 hours saved per week per lab (researcher salaries $30-50/hour). $2,500 returns savings in the first six months. Competitors don't exist; pricing is based on customer value, not competitive positioning.

Q: What do labs say when we show them this?
A: Universally positive about the meeting transcription. Half are skeptical about literature cross-reference (worried about false positives). 80% want integration with Slack, not a separate tool. All express concern about data security and institutional review board approval.

Q: Why can we do this better than Gong or Chorus?
A: Sales intelligence tools are built for smooth, predictable conversations. Lab meetings are chaotic, technical, and heavily domain-specific. We've built language models specifically trained on science. We also don't care about speaker attribution (Gong's primary feature)—labs care about capturing ideas and decisions, not who said what.

Q: What does the first 12 months of engineering look like?
A: 6 engineers (3 fullstack, 1 ML, 1 infrastructure, 1 QA). Core development: transcription engine (months 1-2), decision extraction (months 2-4), literature integration (months 4-6), API for integrations (month 6), deployment on-premises options (month 8), mobile app for async review (months 8-12). Highest risk: literature matching at scale (requires efficient search across millions of papers).

Q: How do we bring this to market?
A: Direct sales to university research offices and lab manager communities. Initial partnerships with NSF-funded research centers. Marketing via academic conferences and research podcasts. Sales cycle: 6-8 weeks (shorter than enterprise, longer than consumer). Key partnership: integration with institutional knowledge management systems (SharePoint, OneDrive).

Q: What should we NOT do?
A: Don't try to sell to corporate R&D in year one (too competitive, too slow). Don't add features for teaching labs (different use case, different pricing). Don't build competitor-like features like speaker ranking or sentiment analysis—stay focused on the research use case.
```

## Edge Cases

- **Meetings without clear decisions**: Some lab meetings are exploratory and don't produce decisions. ResearchSync should still capture the exploratory path, not fail silently. Alert the team if a meeting generated zero decisions flagged.

- **Proprietary research and IP sensitivity**: Universities may have restrictions on recording or storing transcripts. Build in enterprise deployment options and clear data retention policies before launch.

- **Rapid team turnover**: Graduate students rotate out. New team members need access to historical meetings. Design the archive view and search experience assuming users need to onboard to context quickly.

- **Cross-lab collaboration**: Some researchers co-present findings across labs. Transcription and analysis should handle multiple team members from different institutions in the same meeting.

- **Offline use**: Not all lab meetings are recorded (informal discussion, confidential committee meetings). Build the tool to capture optional manual notes alongside transcripts, not treat transcription as the only input.

- **Literature that contradicts the press release**: As development progresses, you might learn that literature cross-referencing is harder than expected or less valuable than you thought. Use the FAQ as a living document to revise assumptions.
