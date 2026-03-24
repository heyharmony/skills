---
name: "Link Related Documents"
description: "Map connections between documents, meetings, and threads — surface hidden relationships, identify knowledge gaps, and build a navigable knowledge network. Trigger on: connect documents, link related, knowledge map, find connections, related meetings, thread together."
dependencies: []
connectors:
  - name: "Notion"
    reason: "Pull docs, databases, and wikis to find cross-references and related content"
  - name: "Google Drive"
    reason: "Surface related documents, spreadsheets, and shared files across the org"
  - name: "Slack"
    reason: "Find discussion threads that reference or extend document topics"
  - name: "Confluence"
    reason: "Pull wiki pages and knowledge base articles for cross-linking"
---

## Purpose

Uncover hidden relationships between scattered documents, meetings, and conversations. This skill extracts key entities (people, projects, decisions, dates), finds semantic connections, maps relationship strength, and builds a visual knowledge network. The output reveals what's connected, what's isolated, and where knowledge gaps exist.

## When to Use

- **Post-initiative review:** After a major project, connect all related docs, meetings, and decisions into one navigable map
- **Onboarding new team member:** Build knowledge map so they see how decisions, docs, and past work connect
- **Compliance or audit prep:** Find all related docs for a topic (e.g., "all privacy decisions") and trace decision lineage
- **Knowledge gap discovery:** Identify where docs exist but aren't linked, or where decisions are made without recorded justification
- **Strategic planning:** Connect past initiatives to new planning docs to avoid repeating work or missing context
- **Team transition:** When someone leaves, map their projects and decisions so knowledge doesn't disappear
- **Cross-functional alignment:** Help teams in different departments see how their work relates

## Instructions

### 1. Gather the Document Set

Define the scope of documents to analyze:

**Boundary options:**
- **Topic-based:** All docs about "compliance initiative" or "customer support redesign"
- **Time-based:** All docs created in Q1 2026 or modified in the past 30 days
- **Person-based:** All docs authored by or assigned to [person name]
- **Project-based:** All docs linked to a Linear project or Notion database
- **Folder-based:** All docs in a Slack channel, Google Drive folder, or Notion workspace section

**Gather from:**
- Notion: Pages, databases, wikis, decision records
- Google Drive: Docs, spreadsheets, presentations, shared folders
- Slack: Pinned messages, thread summaries, searchable channels
- Confluence: Pages, spaces, recent edits
- Google Calendar: Meeting notes, agendas, attendee lists

**Document the scope:** How many docs? Date range? Estimated total word count? This sets expectations for analysis depth.

### 2. Extract Key Entities

Parse each document for entities (structured data points). Record:

**People:**
- Author, contributors, decision-makers, stakeholders mentioned
- Format: Full name + email + role (if available)

**Projects & Initiatives:**
- Project names, codes, initiatives, programs
- Format: Project name + status (active/completed/archived) + owner

**Decisions & Outcomes:**
- Major decisions made, approvals granted, changes decided
- Format: Decision + date decided + decision-maker + impact/outcome

**Dates & Deadlines:**
- Launch dates, review deadlines, milestones, important dates mentioned
- Format: Date + event/milestone + associated project

**Topics & Keywords:**
- Primary topics (compliance, security, performance, UX, etc.)
- Format: Topic + frequency (how many docs mention it)

**Create a spreadsheet or database** capturing these entities. Example row:
| Doc Title | Author | Project | Decision | Date | Topics |
|-----------|--------|---------|----------|------|--------|
| "Compliance Q1 roadmap" | Sarah | Compliance 2026 | Approve external audit in Feb | 2026-01-15 | compliance, audit, external |

### 3. Find Semantic Connections

Identify relationships between documents using these connection types:

**Direct references:**
- Doc A explicitly cites Doc B (e.g., "Per the Jan 15 decision memo...")
- One doc links to another
- Same file appears in multiple conversations

**Entity overlap:**
- Same project mentioned in multiple docs
- Same decision-maker or stakeholder appears across docs
- Same person authored multiple related docs

**Temporal relationships:**
- Doc B follows Doc A chronologically (e.g., "Planning doc" → "Implementation doc")
- Meeting notes from meeting mentioned in a decision memo
- Milestone completion triggering next phase

**Topic relationships:**
- Docs share primary topics (e.g., two "compliance" docs)
- Docs address the same problem from different angles
- Docs are part of the same initiative or epic

**Causal relationships:**
- Doc A (problem identification) → Doc B (solution proposal) → Doc C (implementation plan)
- Decision in Doc A enables or blocks work in Doc B
- Feedback in Doc A drives changes in Doc B

**Record each connection** as a link with:
- **Source doc + target doc**
- **Connection type** (direct reference, entity overlap, temporal, topic, causal)
- **Strength** (strong/medium/weak based on evidence)
- **Description** (1-2 sentence explanation)

### 4. Score Relationship Strength

For each connection, assign strength (1–5 scale):

**Scoring criteria:**
- **5 (Very Strong):** Direct citation, same project + decision-maker, explicit dependency, causality clear
- **4 (Strong):** Same topic + author, temporal proximity (within 1 week), shared entity, significant overlap
- **3 (Moderate):** Topic overlap, same project but different actors, temporal connection (within 1 month)
- **2 (Weak):** Distant topic match, tangential reference, temporal connection (within 3 months)
- **1 (Very Weak):** Minimal overlap, requires inference to connect

**Example scoring:**
- Compliance roadmap (Jan 15) → Audit planning memo (Jan 18): **5** (direct consequence, same project, 3 days apart)
- Compliance roadmap (Jan 15) → Data security doc (Dec 1, 2025): **3** (same topic, different project, older)
- Compliance roadmap (Jan 15) → Marketing rebrand memo (Jan 16): **1** (no overlap, coincidental timing)

### 5. Identify Gaps

Surface three types of knowledge gaps:

**Missing connections:**
- Docs that should be related but aren't linked
- Example: "We made a decision in Q1 but there's no implementation plan doc"

**Orphaned documents:**
- Docs with few or no connections (low in-degree, low out-degree)
- Often indicates outdated, duplicate, or forgotten docs

**Missing documentation:**
- Decisions made but not recorded in docs
- Projects that have Slack threads but no planning docs
- Decisions with no clear owner or justification recorded

**Record gaps with:** Gap type + description + recommended action (link existing docs, create new doc, archive, etc.)

### 6. Build the Link Map

Organize the connections into a visual and narrative map:

**Visual map** (network diagram):
- **Nodes:** Each document (represented as a bubble or box)
- **Edges:** Connections between docs (lines between nodes)
- **Node size:** Proportional to document importance (number of connections, recency, stakeholder significance)
- **Line thickness:** Proportional to connection strength (thicker = stronger)
- **Colors:** Group by type (compliance docs = red, planning docs = blue, decision memos = green, etc.)
- **Tool options:** Notion database with relations, Miro board, Lucidchart, or simple ASCII diagram

**Narrative map** (written summary):
- **Overview:** How many docs, date range, primary topics, key decision-makers
- **Clusters:** Group related docs by theme (e.g., "Compliance Initiative Docs," "Team Onboarding Docs," "Q1 Planning")
- **Key flows:** Trace 3–5 important causal chains (Problem → Decision → Implementation → Outcome)
- **Isolated documents:** List orphaned or weakly connected docs

### 7. Deliver with Recommendations

Create final deliverable with three sections:

**Section 1: Knowledge Network Map**
- Visual diagram (network map)
- Legend (connection types, node colors, sizes)
- Overview stats (total docs, avg connections per doc, strongest clusters)

**Section 2: Document Catalog**
- Spreadsheet or table listing all docs with:
  - Title, author, date, project, topic tags, number of connections, last modified, status (active/archived)
  - Sort by: strength (most connected first), recency, project, topic

**Section 3: Insights & Recommendations**
- **Strongest clusters:** Which topics have the most documentation and alignment? (e.g., "Compliance Q1 is well-documented and tightly connected")
- **Orphaned documents:** Which docs are isolated and why? Should they be archived, linked, or updated?
- **Missing documentation:** What decisions lack recorded justification? What projects lack planning docs?
- **Knowledge risks:** Whose departure would most impact the network? Which topics lack diverse authorship?
- **Next actions:** Suggest 3–5 priority actions (link existing docs, create missing docs, deprecate old ones, add context to orphans)

## Output Format

**Primary deliverable:** Knowledge Network Report (Notion page or Google Drive doc)

**Sections:**
1. **Executive summary** (2–3 sentences on network health)
2. **Network visualization** (diagram with legend)
3. **Network statistics** (doc count, avg connections, strongest clusters)
4. **Document catalog** (searchable table with metadata)
5. **Connection index** (all links with type, strength, description)
6. **Gap analysis** (missing docs, orphaned docs, undocumented decisions)
7. **Recommendations** (prioritized actions)
8. **Appendix:** Raw entity extraction (people, projects, decisions, dates)

**Optional deliverables:**
- Interactive dashboard (Notion database with filters by topic, author, status)
- Embedded Miro/Lucidchart diagram with clickable links to docs
- Timeline visualization showing doc flow over time

## Example: Meridian Health (HealthTech Startup)

**Context:** Meridian Health (telehealth + AI diagnostics) recently completed a major compliance initiative for HIPAA certification. They have scattered docs (meeting notes, decision memos, implementation plans, audit prep) across Notion, Google Drive, and Slack. A new compliance officer is joining next month, and leadership wants a complete map of decisions and work so nothing is lost.

**Scope:** All docs created or modified between Nov 1, 2025 and Mar 15, 2026, related to "HIPAA compliance initiative"

---

### Extracted Entities

| Category | Entities |
|----------|----------|
| **People** | Dr. Amelia Chen (CEO), Rajesh Patel (CTO), Sofia Martinez (Compliance), Tom Wu (QA Lead), Dana Lewis (Legal) |
| **Projects** | HIPAA Compliance 2026, Data Security Hardening, Vendor Risk Audit |
| **Decisions** | Dec 1: Hire compliance officer; Dec 15: Audit with external firm; Jan 10: Require all staff training; Feb 1: Encryption mandate for all patient data |
| **Dates** | Nov 15 (kickoff), Dec 15 (external audit start), Jan 30 (training deadline), Feb 15 (encryption complete), Mar 15 (certification review) |
| **Topics** | HIPAA, compliance, security, audit, training, encryption, vendor management, data retention |

---

### Connection Map (Visual)

```
                           [CEO Decision Memo - Dec 1]
                                      |
                      (causality) ----+---- (causality)
                      |                       |
        [Compliance Kickoff - Nov 15]  [Audit Plan - Dec 15]
               |                              |
    (same project)                (temporal + entity)
               |                              |
        [Team Training Plan]        [Vendor Risk Assessment]
               |                              |
               +--------+----------+----------+
                        |
               [Encryption Roadmap - Jan 10]
                        |
              (causality + temporal)
                        |
             [Implementation Status - Feb 15]
                        |
              (temporal + entity)
                        |
        [Certification Readiness - Mar 15]
```

**Clusters:**
- **Cluster 1 (Planning & Decision):** CEO Decision, Kickoff, Audit Plan — high interconnection, strong alignment
- **Cluster 2 (Implementation):** Training, Vendor Assessment, Encryption, Status — moderate interconnection, temporal flow
- **Cluster 3 (Governance):** Legal review, Data retention policy — weak external connection, isolated

---

### Document Catalog (Sample Rows)

| Title | Author | Date | Project | Topics | Connections | Strength | Status |
|-------|--------|------|---------|--------|-------------|----------|--------|
| HIPAA Compliance Kickoff | Sofia | Nov 15 | HIPAA 2026 | compliance, audit, team | 4 | 5 (hub) | Active |
| CEO Decision: Hire Compliance Officer | Amelia | Dec 1 | HIPAA 2026 | compliance, staffing | 3 | 5 (hub) | Active |
| Audit Planning Memo | Sofia + Dana | Dec 15 | HIPAA 2026 | audit, compliance, vendor | 5 | 5 (hub) | Active |
| All-Staff HIPAA Training Plan | Sofia | Jan 10 | HIPAA 2026 | training, compliance | 2 | 4 (moderate) | In progress |
| Vendor Risk Assessment | Rajesh + Sofia | Jan 15 | HIPAA 2026 | vendor, security, audit | 4 | 4 (strong) | Complete |
| Encryption Rollout Roadmap | Rajesh | Jan 10 | Data Security | security, encryption | 3 | 4 (strong) | In progress |
| Encryption Implementation Status | Rajesh | Feb 15 | Data Security | security, encryption | 2 | 4 (strong) | Complete |
| Data Retention Policy v2 | Dana | Feb 1 | HIPAA 2026 | legal, retention, compliance | 1 | 2 (weak) | Active |
| Certification Readiness Review | Sofia | Mar 10 | HIPAA 2026 | audit, compliance | 2 | 4 (strong) | In progress |
| Q1 Planning Notes | Amelia | Jan 5 | General | strategy, roadmap | 1 | 1 (weak) | Archived |

---

### Key Findings

**Strongest clusters:**
- **Compliance initiative hub:** 5 core docs (Kickoff, CEO Decision, Audit Plan, Training, Vendor Assessment) tightly connected with very strong links (strength 4–5)
- **Implementation pipeline:** Encryption roadmap flows into status → certification readiness (clean causal chain)
- **Legal governance isolated:** Data retention policy exists but has only 1 connection; likely needs review and external linking

**Orphaned documents:**
- **"Q1 Planning Notes"** (Jan 5): Only mentions HIPAA in passing; should link to kickoff or archive
- **"Data Retention Policy v2"** (Feb 1): 1 connection; should link to audit plan and compliance roadmap to show justification

**Missing documentation:**
- **No implementation log:** Training completed, encryption deployed, but no summary of what was done vs. planned (risk for auditors)
- **No risk mitigation log:** Vendor assessment identified risks, but no follow-up docs showing how they were addressed
- **No post-audit debrief:** Audit completed Jan 20; no recorded learnings or next steps

**Knowledge risks:**
- **Sofia dependency:** Sofia is author on 6 of 9 docs (67% authorship). If she leaves, knowledge is concentrated.
- **Single path to certification:** Most docs point through Sofia's kickoff doc; no parallel documentation threads

---

### Connection Index (Top Links)

| Source → Target | Type | Strength | Reason |
|-----------------|------|----------|--------|
| CEO Decision (Dec 1) → Compliance Kickoff (Nov 15) | Causal | 5 | CEO decision to hire drove kickoff planning |
| Compliance Kickoff (Nov 15) → Audit Plan (Dec 15) | Causal | 5 | Kickoff identified need for external audit |
| Audit Plan (Dec 15) → Vendor Assessment (Jan 15) | Causal | 4 | Audit includes vendor compliance review |
| Vendor Assessment (Jan 15) → Encryption Roadmap (Jan 10) | Topic overlap | 3 | Both address data security gaps |
| Encryption Roadmap (Jan 10) → Status (Feb 15) | Temporal + causal | 5 | Implementation follows plan |
| Status (Feb 15) → Certification Review (Mar 10) | Temporal + entity | 4 | Status feeds into certification readiness |
| Training Plan (Jan 10) → Certification Review (Mar 10) | Topic overlap | 3 | Training required for compliance certification |
| Data Retention (Feb 1) → Certification Review (Mar 10) | Topic overlap + entity | 2 | Policy component of certification but weak reference |

---

### Recommendations

**Priority 1 (This week):**
1. **Link Data Retention Policy to Compliance Roadmap** — Currently orphaned; add explicit reference to compliance kickoff to show how retention policy supports audit strategy
2. **Create Implementation Log** — Summarize what was delivered (training completed 100%, encryption done 95%, etc.) for certification auditors. This is missing but critical.

**Priority 2 (Next week):**
3. **Distribute knowledge authorship** — Have Rajesh (CTO) co-author or review training plan and vendor assessment so knowledge doesn't depend on Sofia alone
4. **Archive Q1 Planning Notes or relink** — This doc is orphaned; either delete or update to reference HIPAA initiative explicitly

**Priority 3 (Before certification review):**
5. **Create post-audit debrief doc** — Capture learnings from Jan 20 audit (what went well, what needs work, how we'll improve) and link to certification review for transparency

**Next for new compliance officer:** Share this network map on Day 1 onboarding. All 9 core docs are mapped and contextualized; should take 2–3 hours to review instead of days of searching.

---

## Edge Cases

- **Cross-workspace chaos:** Docs split across Notion, Google Drive, Slack, and Confluence. Provide unified index pointing to source; recommend future consolidation
- **Outdated or duplicate docs:** Same doc stored in 3 places. Note in map, recommend single source of truth, plan archival
- **Non-English content:** If docs in multiple languages, note language in catalog; group by language if significant
- **No author metadata:** Some docs lack author info (pdfs, screenshots, etc.). Note as risk; document to stakeholder for future metadata discipline
- **Highly connected individual:** If one person is central to many docs, note as knowledge risk; recommend knowledge transfer or co-authorship
- **Rapid change velocity:** If many docs are <1 week old, note as sign of active work; recommend follow-up in 2 weeks to see if earlier docs are updated with outcomes
- **Confidential or sensitive docs:** If docs contain salaries, medical data, or secrets, exclude from shared map; provide redacted version for general circulation
