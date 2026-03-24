---
name: "Find Decision-Maker Contacts"
description: "Research and list decision makers, contacts, and stakeholders for a specific account or company. Find names, emails, titles, reporting structure, and LinkedIn profiles. Identify the right people to reach out to based on persona and decision-making role. Trigger on: find contacts, prospect research, build contact list, who should I email, company research, stakeholder list."
dependencies: []
connectors:
  - name: "HubSpot"
    reason: "Import discovered contacts directly into HubSpot account records and associate them with opportunities; track contact coverage and identify missing stakeholders"
  - name: "Salesforce"
    reason: "Sync found contacts to account and opportunity records; map to existing contacts to avoid duplicates; identify buying committee coverage"
  - name: "Gmail"
    reason: "Cross-reference found email addresses against your email history and past deals; identify patterns of who responds in similar companies"
  - name: "LinkedIn"
    reason: "Validate contact titles, reporting structure, and career history; find additional contacts through 'People Also Viewed' and degree connections"
---

## Purpose

Research target accounts and identify the right contacts to reach — by title, function, reporting structure, and decision-making role. Surfaces names, email addresses, LinkedIn profiles, job descriptions, and organizational hierarchy. Helps sales teams build a contact list before outreach and ensures you're talking to the right stakeholders, not just whoever answers the phone. Works from company research (LinkedIn, company websites, org charts) and available conversation data when you've already talked to people in similar accounts.

## When to Use

- Starting a new outbound campaign — need a list of 10 VPs of Sales at Series B–C SaaS companies
- Building account strategy for a named account — need to understand the full buying committee
- Prospecting a company after reading about them in news — need to identify the right decision maker
- Filling gaps in your contact list — you have one contact but need 2–3 more at the same company
- Validating a contact's actual role or reporting structure before personalizing outreach

## Instructions

### 1. Define the target and research approach

Ask what the user is looking for:
- **What company/companies?** Specific accounts or a type of company?
- **What role(s)?** VP Sales, CFO, CTO, or all decision makers?
- **Decision-making criteria?** Who needs to approve this deal, and in what order?
- **Contact info needed?** Just email, or also LinkedIn URL, phone, reporting structure?
- **How many contacts?** One champion, or the full buying committee?

If Harmony conversation data exists, pull:
- Names and titles from past conversations in similar accounts
- Reporting structure mentioned in calls
- Which roles/functions have veto power or budget authority
- Any naming patterns or org structure insights from successful deals

### 2. Research the company structure

For each target account:
- **Company size and structure** — Industry, revenue, team count, geographic presence
- **Org chart and reporting lines** — Who reports to whom, functional leadership
- **Public profiles** — CEO, C-suite, publicly announced hires
- **Recent news** — Funding rounds, product launches, new executives

Use LinkedIn, company websites, press releases, and web research.

### 3. Map buying committee roles

Identify contacts by function and decision-making role:
- **Executive sponsor** — Who's most likely to advocate internally?
- **Budget holder** — Who controls the approval and checkbook?
- **Technical gatekeeper** — Who reviews vendor integration and security?
- **End user voice** — Who uses the product day-to-day?
- **Procurement/Legal** — Who needs to sign off on contracts?

Map each role to a specific person where possible.

### 4. Validate contact information

For each contact found:
- **Verify email address** — Check company domain patterns, LinkedIn, or web research
- **Confirm title and role** — Cross-reference LinkedIn, company directory, org announcements
- **Note reporting structure** — Who do they report to (for context on decision path)?
- **Flag confidence level** — High (verified on LinkedIn + company site), Medium (LinkedIn only), Low (inferred from company structure)

### 5. Identify gaps and prioritize outreach

Determine:
- **Which contacts are missing?** Who haven't you found yet?
- **Which role is highest priority?** Who should you reach out to first?
- **What's the decision path?** In what order should you contact stakeholders?
- **Who's the most likely champion?** Which contact most likely needs your solution?

### 6. Create contact output

Format as a ranked contact list with titles, emails, reporting structure, and reason for contacting each person.

## Output Format

# Contact List — [Company Name]
_Prepared [date] · Target role(s): [job titles] · Buying committee size: [#]_

## Company Overview
- **Company:** [Name]
- **Industry:** [Industry]
- **Size:** [Employee count]
- **Stage:** [Public/Series X/Bootstrapped]
- **Key info:** [Recent funding, product launch, hiring wave, or other signal relevant to why you're reaching out]

## Buying Committee Structure

| Priority | Name | Title | Function | Reports To | Email | LinkedIn | Decision Role | Confidence |
|----------|------|-------|----------|-----------|-------|----------|---------------|-----------|
| 1 | [Name] | [Title] | [Function] | [Manager] | [email] | [URL] | Decision maker | High/Med/Low |

_(Include all identified contacts)_

## Contact Profiles

### [Contact Name]
**Title:** [Exact title]
**Function:** [Finance / Engineering / Ops / Sales / etc.]
**Reports to:** [Manager name and title]
**LinkedIn:** [URL]
**Email:** [email address]
**Confidence:** [High / Medium / Low — and why]
**Why contact them:**
- Decision role: [Budget / Technical / End user / Approver / Sponsor]
- Key concern likely: [Problem this role cares about]
- Winning proof: [What would convince them]

_(Repeat for each contact)_

## Buying Committee Map

**Decision Path:**
1. [Name] (Budget) → signs off if [Condition]
2. [Name] (Technical) → must approve [Specific concern]
3. [Name] (End user) → advises / influences

**Champion prospect:** [Most likely advocate] — [Why]
**Veto risk:** [Most likely blocker] — [Why]

## Gaps & Research Notes

| Gap | Why It Matters | How to Fill | Confidence |
|---|---|---|---|
| [Title not found] | [Why you need this person] | [Research method] | [When you can confirm] |

**Research quality notes:**
- [Note on confidence of email addresses]
- [Note on org chart sourcing]
- [Note on any unverified information]

## Outreach Strategy

**Recommended order:**
1. [Contact name] — [Role] — [Why first]
2. [Contact name] — [Role] — [Why next]
3. [Contact name] — [Role] — [Why after]

**Key questions for first call:**
- "How does your buying process work for [category]? Who else should we talk to?"
- "What's your timeline for [problem]?"
- "[Contact name] mentioned [context] — how do you work together?"

## Now What?

- **Sync to HubSpot/Salesforce:** Import these contacts to the account record; tag by role and decision authority
- **Prioritize outreach:** Reach out to the champion first, then build coalition
- **Validate info:** On first call, confirm email addresses and fill gaps in org chart
- **Build stakeholder map:** Use this contact list as the foundation for a formal stakeholder map after discovery calls
- **Update LinkedIn research:** Check for recent job moves that might have changed this list

---

## Example

**User:** "I need a contact list for Vertex Inc., a 200-person fintech company. We sell expense management software. Who should we reach out to?"

**Output:**

# Contact List — Vertex Inc.
_Prepared 2026-03-22 · Target role(s): VP Finance, VP Operations, CEO · Buying committee size: 5–6_

## Company Overview
- **Company:** Vertex Inc.
- **Industry:** Fintech (Spend Management SaaS)
- **Size:** ~200 employees
- **Stage:** Series B ($30M raised, 2026-01)
- **Key info:** Hired new VP Finance (Sarah Chen) in Jan 2026; announced partnership with JPMorgan in Feb 2026; likely scaling finance and ops teams

## Buying Committee Structure

| Priority | Name | Title | Function | Reports To | Email | LinkedIn | Decision Role | Confidence |
|----------|------|-------|----------|-----------|-------|----------|---------------|-----------|
| 1 | Sarah Chen | VP Finance | Finance | CFO/CEO | sarah.chen@vertex.io | [URL] | Budget + Champion | High |
| 2 | Marcus Johnson | VP Operations | Ops | CFO | marcus.johnson@vertex.io | [URL] | Process owner | High |
| 3 | Janet Wu | Chief Financial Officer | Finance | CEO | janet.wu@vertex.io | [URL] | Final approval | High |
| 4 | David Park | VP Engineering | Tech | CTO | david.park@vertex.io | [URL] | Technical gatekeeper | Medium |
| 5 | Priya Sharma | Manager, Finance Operations | Finance | Sarah Chen | priya.sharma@vertex.io | [URL] | End user voice | High |

## Contact Profiles

### Sarah Chen
**Title:** VP Finance
**Function:** Finance
**Reports to:** Janet Wu (CFO)
**LinkedIn:** https://linkedin.com/in/sarahchen-finance
**Email:** sarah.chen@vertex.io
**Confidence:** High (Verified on LinkedIn, company directory, recent hire announcement)
**Why contact them:**
- Decision role: Budget decision maker + likely champion (new to company, will want to implement own processes)
- Key concern likely: Standardizing expense processes as company scales; integrating with existing financial systems
- Winning proof: "Replaced 3 manual expense tools with one platform" + time savings proof

### Marcus Johnson
**Title:** VP Operations
**Function:** Operations
**Reports to:** Janet Wu (CFO)
**LinkedIn:** https://linkedin.com/in/marcusjohnson-ops
**Email:** marcus.johnson@vertex.io
**Confidence:** High (LinkedIn verified, company site org chart)
**Why contact them:**
- Decision role: Process owner, end user of expense management workflow
- Key concern likely: Adoption risk (will ops team actually use it?), training burden, integration with existing tools
- Winning proof: "Teams were using it within 2 weeks" + ease-of-use metrics

### Janet Wu
**Title:** Chief Financial Officer
**Function:** Finance
**Reports to:** CEO
**LinkedIn:** https://linkedin.com/in/janetw-cfo
**Email:** janet.wu@vertex.io
**Confidence:** High (Verified on LinkedIn, company press releases)
**Why contact them:**
- Decision role: Final approval on vendor spending
- Key concern likely: Cost vs. benefit, vendor risk, contract terms, integration with Workday/NetSuite
- Winning proof: ROI calculation + security/compliance certifications

### David Park
**Title:** VP Engineering
**Function:** Engineering / Tech
**Reports to:** CTO
**LinkedIn:** https://linkedin.com/in/davidpark-eng
**Email:** david.park@vertex.io
**Confidence:** Medium (LinkedIn verified, but not directly involved in expense tool decision)
**Why contact them:**
- Decision role: Technical gatekeeper (must approve API/integration approach)
- Key concern likely: "Will this break our existing integrations with Workday/NetSuite?" — they recently announced JPMorgan partnership so integration is critical
- Winning proof: "RESTful API" + documented integration examples + case studies with fintech

### Priya Sharma
**Title:** Manager, Finance Operations
**Function:** Finance / Finance Operations
**Reports to:** Sarah Chen (VP Finance)
**LinkedIn:** https://linkedin.com/in/priyasharma-finops
**Email:** priya.sharma@vertex.io
**Confidence:** High (Found on LinkedIn, likely manages day-to-day expense process)
**Why contact them:**
- Decision role: End user voice (will use the tool 50+ hours/month)
- Key concern likely: Will this actually save us time, or add another tool to log into?
- Winning proof: "Automated 70% of expense categorization" + "Syncs directly to accounting system"

## Buying Committee Map

**Decision Path:**
1. Sarah Chen (VP Finance, Budget) → Owns the decision and budget
2. Janet Wu (CFO, Final approval) → Must sign off on vendor + contract
3. Marcus Johnson (VP Ops, Process) → Must confirm it fits workflow
4. David Park (VP Eng, Technical) → Must confirm it integrates cleanly
5. Priya Sharma (Finance Ops, End user) → Advises / influences (heavy user)

**Champion prospect:** Sarah Chen — She's new to Vertex, will want to implement her own expense processes, and has authority to move fast without waiting for Janet's approval on small purchases.

**Veto risk:** David Park — If the integration with their Workday/NetSuite is messy, he'll block it. Also Janet Wu is a wildcard — depends on her risk tolerance with new vendors.

## Gaps & Research Notes

| Gap | Why It Matters | How to Fill | Confidence |
|---|---|---|---|
| Exact email for David Park | Cold email | Verify through company directory or LinkedIn | Next week |
| Priya Sharma's LinkedIn profile | Understand her background | LinkedIn URL might be misspelled | Next week |
| Who's the CFO's chief of staff? | They might control meeting access | Call Sarah and ask | After first conversation |

**Research quality notes:**
- Email addresses verified via company domain (vertex.io) and LinkedIn company directory — confidence is HIGH for all
- Org chart sourced from LinkedIn company page and 2 company blog posts (Jan 2026 hire announcement) — current as of March 2026
- David Park confirmed as VP Engineering from LinkedIn; CTO name not yet confirmed (noted as "CTO" but not found in public profiles)
- Priya Sharma is inferred from LinkedIn company page; exact role/reporting may differ slightly but "Finance Operations" is likely

## Outreach Strategy

**Recommended order:**
1. **Sarah Chen (VP Finance)** — First. She's new, has budget authority, and is your most likely champion. Lead with: "I noticed you just joined Vertex as VP Finance. A lot of finance leaders in scale-up mode struggle with expense management as headcount grows. Curious if that's on your list."
2. **Priya Sharma (Finance Ops Manager)** — Second (warm intro from Sarah if possible). She's the power user, will validate process fit, and can influence Sarah if she loves it.
3. **Marcus Johnson (VP Ops)** — Third. You need his buy-in on the process change. Lead with: "Expense processing impacts your ops team. Want to sync before we move forward?"
4. **David Park (VP Eng)** — Fourth. Technical validation (once Ops is aligned). Lead with: "We integrate RESTful with Workday/NetSuite. Let me show you the API docs and existing integrations."
5. **Janet Wu (CFO)** — Last. Once you have Sarah, Priya, Marcus, and David aligned, Janet's approval is formality (if CFO trust of VP Finance is high).

**Key questions for Sarah (first call):**
- "What's your #1 priority as the new VP Finance here at Vertex?"
- "How are expenses being managed today? What's working, what's not?"
- "If you could fix one process this quarter, what would it be?"
- "Walk me through who needs to approve a new vendor — just you, or does Janet also sign off?"

---

## Edge Cases

- **Couldn't find email addresses:** Note confidence level as "Low" and recommend verifying on first call or through LinkedIn message. Never cold email an unverified address.
- **Company has very flat structure:** All roles report to CEO; no clear hierarchy. Note this and recommend starting with whoever has operational responsibility for the problem (finance manager for expense management).
- **Key contact just left the company:** Flag the gap, note when they left, and identify who took over their responsibilities.
- **Company information is 6+ months old:** Note the research date; recommend refreshing org chart before major outreach (call the receptionist or use LinkedIn).
- **Contact is at an unreachable level (CEO):** Identify who reports to CEO and start there; use CEO for warm intro only after building relationship below.
- **Can't identify all decision roles:** Recommend starting with whoever owns the problem area (e.g., VP Finance for expense management) and asking "Walk me through your buying process."
