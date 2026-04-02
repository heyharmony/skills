---
name: "Brainstorm Domain Names"
description: "Generate creative domain name ideas based on brand attributes, product description, and target audience — with availability patterns and TLD alternatives. Trigger on: domain name, website name, brand name ideas, domain brainstorm, what should we call it, naming session."
dependencies: []
connectors:
  - name: "Slack"
    reason: "Pull naming discussions and brand attribute conversations from team channels"
  - name: "Notion"
    reason: "Reference brand guidelines, positioning docs, and prior naming work"
  - name: "Google Drive"
    reason: "Store naming shortlists and domain research in shared brand folders"
author: "Harmony"
version: "1.0.0"
icon: "sparkles"
cover: ""
screenshots: []
category: "Marketing"
---

## Purpose

This skill generates creative domain name ideas grounded in brand attributes, product purpose, and target audience. It explores multiple naming strategies (compound words, portmanteaus, metaphors, invented names, abbreviations), scores candidates on memorability, spellability, brandability, and SEO potential, checks availability patterns across TLDs, and delivers a prioritized shortlist with rationale. Output informs domain purchase decisions and brand naming strategy.

## When to Use

**Trigger conversations in Harmony:**
- "We're building a new AI tool for remote team meetings. What should we call it and what domains are available?"
- "Brainstorm domain names for an e-commerce platform focused on sustainable fashion"
- "We need a rebrand. Generate 30 domain name candidates that match our brand positioning"
- "What domain names fit our HR tech product? We want something memorable and professional"
- "What social media handles should we reserve alongside our domain?"

**Ideal for:**
- Pre-launch startup naming
- Product rebranding initiatives
- Sub-product or feature naming
- Market entry in new regions (localized domain strategy)
- Internal naming workshopping and decision-making
- Brand identity and messaging workshops

## Instructions

### Step 1: Gather Brand Context
Collect the following inputs (from Harmony conversation, Notion docs, or direct brief):
- **What it does**: Product/service description in 1–2 sentences
- **Who it's for**: Target audience and user persona
- **Brand personality**: Descriptors (e.g., professional, playful, bold, trustworthy, innovative, minimalist)
- **Key benefits**: Top 2–3 value propositions
- **Industry/vertical**: Market category (HR tech, e-commerce, SaaS, etc.)
- **Geographic scope**: Primary markets (US-only vs. global)
- **Competitive context**: Are there dominant naming patterns in the space?

**Example Input**:
> Product: AI meeting assistant that records, transcribes, and summarizes video calls for remote teams
> Audience: Mid-market companies (50–500 employees), operations and HR leaders
> Personality: Professional yet approachable, modern, efficient
> Key Benefits: Save time on meeting notes, keep teams aligned, compliance-ready
> Vertical: Enterprise communication/collaboration
> Markets: US, Canada, UK (English-speaking first)

### Step 2: Define Naming Constraints
Establish parameters that guide ideation:
- **Length**: Prefer short (1–2 syllables) or multi-word? Brand guidelines?
- **TLD preference**: .com only? Open to .app, .co, .io, .ai, etc.?
- **Budget**: Premium domain budget? Priority on exact .com match?
- **Spelling/Pronunciation**: Avoid complex spellings or hard-to-pronounce names?
- **Avoid**: Words or themes to exclude (competitor names, profanity, negative connotations, weak URLs, hard-to-spell)
- **Naming style**: Prefer real words, invented words, acronyms, metaphors, or hybrid?

**Example Constraints**:
> Length: 1–3 syllables (easy to say in calls)
> TLD: .com priority; .app acceptable as secondary
> Budget: Willing to pay for premium domain
> Spelling: Must be simple and phonetic
> Avoid: Competitor names (Zoom, Slack, Asana); industry clichés
> Style: Open to invented names and metaphors; prefer real words + modifiers

### Step 3: Generate Naming Ideas Across Multiple Strategies

Generate 20–30 candidates using diverse naming strategies:

**Strategy 1: Real Words + Modifier**
- Take a word associated with the product/benefit and pair with descriptor
- Examples: CallHub, NoteMate, SyncPulse, MeetFlow, ConvoStack

**Strategy 2: Compound Words**
- Combine two simple words into one cohesive name
- Examples: MeetFlow, CallConnect, SyncUp, TimeCapture, VoiceNote

**Strategy 3: Portmanteaus**
- Blend two words together into a new word
- Examples: Convize (conversation + capsize), Syntalk (sync + talk), Alignd (align + mind)

**Strategy 4: Metaphors & Analogies**
- Use metaphorical language related to the product benefit
- Examples: Confluence (shared flow), Lattice (framework), Beacon (guiding light), Compass (direction)

**Strategy 5: Invented Words**
- Create entirely new words that sound professional and brandable
- Examples: Vocara, Hexagon, Nimbus, Prismo, Vexa

**Strategy 6: Abbreviations & Acronyms**
- Use acronyms or shortened forms (with caution — harder to remember)
- Examples: AURA (Automated Unified Recording Assistant), MVR (Meeting Voice Record)

**Strategy 7: Verb-Based Names**
- Action verbs that describe what the product does
- Examples: Capture, Amplify, Transpose, Articulate, Clarify

**Strategy 8: Audience-Centric Names**
- Reference the user or their outcome
- Examples: LeaderBoard, TeamSense, AlignHub, OpsMaster

**Generation Template**:
```
STRATEGY 1: Real Words + Modifier
- CallMate, MeetMate, SyncMate, NoteHub, CallFlow, RecordHub

STRATEGY 2: Compound Words
- MeetCapture, CallAlign, VoiceSync, TeamNotes, FlowSync

STRATEGY 3: Portmanteaus
- Convize, Syntalk, Alignd, Voxsync, Recorb

STRATEGY 4: Metaphors
- Confluence, Beacon, Compass, Prism, Lattice

STRATEGY 5: Invented Words
- Vocara, Nimbus, Prismo, Hexuma, Vesper

STRATEGY 6: Abbreviations
- AURA, MVR, SYNC, LINK, HUB

STRATEGY 7: Verb-Based
- Capture, Clarify, Align, Amplify, Transpose

STRATEGY 8: Audience-Centric
- TeamHub, OpsMaster, LeaderBoard, AlignHub
```

### Step 4: Score Candidates on Evaluation Criteria

Create a scoring matrix. Rate each candidate 1–5 on:

| Criterion | Weight | Description |
|-----------|--------|-------------|
| **Memorability** | 25% | Easy to remember after hearing once? Distinct sound? |
| **Spellability** | 20% | Easy to spell? Intuitive spelling even if unfamiliar? |
| **Brandability** | 20% | Feels like a brand name? Professional? Scalable to other products? |
| **SEO/Search Potential** | 15% | Does it include relevant keywords? Will it rank in search? |
| **Domain Availability** | 20% | Is .com available or affordable? Secondary TLDs viable? |

### Step 5: Check Availability Patterns

For top 10–15 candidates, research availability across three dimensions:

- **Domain**: Check .com first (primary), then .co, .app, .io, .ai. Note pricing for premium domains.
- **Trademark**: Quick Google search for "[Candidate] brand" and "[Candidate] company." Check USPTO/WIPO for international expansion plans.
- **Social handles**: Check Twitter, Instagram, LinkedIn, GitHub. If exact match unavailable, propose consistent alternatives (@namehq, @nameco, @nameai).

### Step 6: Create Prioritized Shortlist

Narrow to top 10 candidates ranked by overall fit. Tiers: Rank 1–3 (strong across all criteria), Rank 4–6 (good with minor trade-offs), Rank 7–10 (acceptable backups). Provide 1–2 sentences of rationale per candidate.

### Step 7: Suggest Social Handle Strategy

Map platform-specific handle recommendations. Prioritize platforms by business model (LinkedIn for B2B, TikTok for consumer). Recommend reserving handles early and listing additional TLDs to register alongside the primary domain.

### Step 8: Deliver Naming Report

Compile findings into a structured report for stakeholder review and decision-making:

**Report Format**:
- Executive summary (1 paragraph on recommendation)
- Brand context recap (what we learned about the product/audience)
- All 30 candidates with scoring (for transparency)
- Top 10 shortlist with ranked rationale
- Availability summary table
- Social handle strategy
- Decision framework (how to choose among top 3)
- Next steps (reserve domains, run brand testing, etc.)

Store in Notion, Google Drive, or email shortlist to decision-makers.

## Output Format

```
# Domain Name Brainstorm Report
[Product Name] | [Date] | Brainstorm Led By: [Name]

## Executive Summary
[1–2 sentences with top recommendation and rationale]

## Brand Context
**Product**: [Description]
**Audience**: [Target user + persona]
**Personality**: [Brand adjectives]
**Key Benefits**: [2–3 value props]
**Naming Constraints**: [Preferences re: length, TLD, style]

## Candidate Generation Summary
- Total candidates generated: [Number]
- Strategies used: [List]
- Scoring criteria: Memorability (25%), Spellability (20%), Brandability (20%), SEO (15%), Domain Availability (20%)

## Scoring Matrix (All Candidates)
| Candidate | Mem | Spell | Brand | SEO | Domain | TOTAL | RANK |
|-----------|-----|-------|-------|-----|--------|-------|------|
| [Name] | 5 | 4 | 5 | 3 | 4 | 21/25 | 1 |
| [Name] | 4 | 5 | 4 | 4 | 3 | 20/25 | 2 |
[...continue for all candidates...]

## Top 10 Shortlist

### 1. [Top Candidate]
**Domain**: [URL, price]
**Score**: [X/25]
**Rationale**: [Why this is #1]
**Social Handles**: [@handles available]
**Availability**: ✓ Clear

### 2. [Second Candidate]
[Same structure]

[...continue for top 10...]

## Availability Summary

| Candidate | .com Status | Alternative TLD | Price | Social Conflict? | Trademark Risk |
|-----------|---|---|---|---|---|
| [Name] | Available | — | $45/yr | None | Clear |
| [Name] | Premium ($2K+) | .co, .app | $25/yr | Minor | Clear |

## Social Handle Strategy
- Primary handles: [@]
- Backup handles: [@alternatives]
- Platforms to prioritize: [List]
- Domains to reserve alongside primary: [Additional TLDs]

## Decision Framework

### Choose This If:
- **[Top 1]**: You prioritize brandability, memorability, and immediate .com availability
- **[Top 2]**: You want a descriptive name with SEO value
- **[Top 3]**: You prefer a metaphor-based, creative positioning

### Next Steps
1. [ ] Review shortlist with exec team / stakeholders
2. [ ] Narrow to final 3 candidates
3. [ ] Run user testing (quick poll: which name resonates?)
4. [ ] Reserve domains and social handles for top 3
5. [ ] Final decision and domain purchase
6. [ ] Update brand guidelines, set up email and social

## Backup Names
If top choices are unavailable or don't resonate:
- [Candidate 11–15 with brief rationale]

```

## Example

**Scenario**: New startup building an AI meeting assistant for remote teams. Product name TBD. Target: Mid-market ops and HR leaders. Goal: Generate domain names and shortlist top options.

### Executive Summary
Recommend **BEACON** as primary choice: strong .com availability, memorable one-syllable name, professional brandability, and clear metaphor aligning with product value (guiding teams to meeting clarity). Secondary recommendations: **MEETFLOW** (descriptive, SEO-friendly but requires premium .com or .co compromise) and **LATTICE** (creative metaphor, strong brandability).

### Brand Context
**Product**: AI-powered meeting assistant that records, transcribes, summarizes, and surfaces action items from video calls
**Audience**: Operations directors and HR leaders at mid-market companies (50–500 employees), US/Canada/UK
**Personality**: Professional, approachable, efficient, modern
**Key Benefits**: Save 5+ hours/week on meeting notes, keep teams aligned on decisions, compliance-ready (SOC 2)
**Naming Constraints**: 1–2 syllables preferred, .com priority, budget available for premium domain, avoid industry clichés

### Candidate Generation Summary
- Total candidates generated: 28
- Strategies: Real words + modifier (4), Compound words (5), Portmanteaus (4), Metaphors (5), Invented words (4), Abbreviations (2), Verb-based (3), Audience-centric (3)
- Scoring: Memorability (25%), Spellability (20%), Brandability (20%), SEO Potential (15%), Domain Availability (20%)

### Scoring Matrix (Top 10)

| Candidate | Mem | Spell | Brand | SEO | Domain | TOTAL | Rank |
|-----------|-----|-------|-------|-----|--------|-------|------|
| Beacon | 5 | 5 | 5 | 3 | 5 | 23/25 | 1 |
| Lattice | 5 | 5 | 5 | 2 | 5 | 22/25 | 2 |
| MeetFlow | 4 | 5 | 4 | 5 | 3 | 21/25 | 3 |
| Clarify | 5 | 5 | 4 | 5 | 2 | 21/25 | 3 |
| Convize | 5 | 4 | 4 | 2 | 4 | 19/25 | 5 |
| Compass | 5 | 5 | 4 | 3 | 2 | 19/25 | 5 |
| Nimbus | 4 | 4 | 5 | 2 | 3 | 18/25 | 7 |
| Vocara | 4 | 3 | 5 | 1 | 4 | 17/25 | 8 |
| TeamFlow | 3 | 5 | 3 | 4 | 4 | 19/25 | 5 |
| Hexuma | 3 | 3 | 5 | 1 | 4 | 16/25 | 10 |

### Top 3 Shortlist

**1. BEACON** | beacon.com ($45/yr) | 23/25
One-syllable, professional, instantly memorable. Metaphor: "guiding teams to meeting clarity." .com available, all social handles clear. Scales to product suite (Beacon Pro, Beacon for Teams).

**2. LATTICE** | lattice.com ($42/yr) | 22/25
Creative metaphor (structure, interconnection). Strong brandability and professional feel. .com available. Minor SEO trade-off — compensated by memorability.

**3. MEETFLOW** | meetflow.co ($25/yr) or premium .com ($3,500) | 21/25
Descriptive compound word with strong SEO (contains "meet"). .co affordable; .com available at premium. Social handles slightly contested.

### Availability Summary

| Candidate | .com | Alt TLD | Social | Trademark |
|-----------|------|---------|--------|-----------|
| Beacon | Available ($45/yr) | .ai, .app | Clear | Clear |
| Lattice | Available ($42/yr) | — | Clear | Clear |
| MeetFlow | Premium ($3,500) | .co, .app | Minor conflicts | Clear |
| Clarify | Likely owned | .ai, .cloud | Clear | Check |
| Convize | Not available | .co, .app | Clear | Clear |

### Next Steps
1. Share top 3 with executive team for feedback
2. Run quick poll with 10–15 target users — which name resonates?
3. Reserve domain + social handles for final choice
4. Register email addresses (hello@, founders@)
5. Update brand guidelines and launch materials

---
_Want me to create tasks for these steps, or draft the brand naming brief for your team?_

## Edge Cases

**Domain Already Owned**
- If preferred domain not available, evaluate .co, .app, .ai, .cloud alternatives
- Consider historical domains: sometimes existing owners willing to sell (use domain brokers like Sedo)
- Test alternative TLDs with users before committing; some may feel weak compared to .com

**Trademark Conflicts**
- Common words (Beacon, Compass, Lattice) may have existing trademarks
- Always run USPTO and international trademark search before final purchase
- If conflict exists, consult trademark attorney on co-existence or brand pivot

**Pronunciation Ambiguity**
- Invented names (Convize, Vocara) risk mispronunciation and misspelling
- Mitigation: Add tagline or descriptor in first 6 months (e.g., "Convize — pronounced con-VEEZ")
- Consider adding phonetic pronunciation to launch materials

**Social Handle Fragmentation**
- If exact handles unavailable on all platforms, adopt consistent alternatives (e.g., @beaconco, @beaconai)
- Risk: Users land on wrong accounts; mitigation is linking social bio and email signature

**International Expansion**
- For global brands, research domain availability in new markets (localized TLDs)
- Some names may have negative connotations in different languages — research before expansion
- Example: "Convize" may not translate well in non-English markets

