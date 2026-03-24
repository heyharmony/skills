---
name: "Close Enterprise Deals"
description: "Navigate complex enterprise sales cycles by mapping buying committees, quantifying ROI, and managing multi-stakeholder negotiations. Prevents single-threaded deals and premature discounting. When to use it: long sales cycles (6+ months), multiple approval layers, procurement requirements, large contracts ($100K+). Trigger on: 'procurement', 'buying committee', 'security review', 'legal review', 'enterprise deal', 'stakeholder alignment'."
dependencies: []
connectors:
  - name: "Salesforce"
    reason: "Track deal stages, multi-threaded contacts, and procurement timelines in a unified pipeline view"
  - name: "HubSpot"
    reason: "Map buying committee relationships and communication history with all stakeholders"
  - name: "Google Calendar"
    reason: "Coordinate complex multi-stakeholder meetings and executive sponsor alignment sessions"
---

## Purpose

Enterprise deals fail not because of product problems but because you didn't navigate the buying process. This skill teaches you to:

- **Map the decision-making unit** (economic buyer, technical buyer, user buyer, coach) before you spend six months with the wrong person
- **Quantify value in the customer's language** — show ROI tied to their specific pain (not generic ROI)
- **Manage procurement as the real sales motion** — security questionnaires, legal reviews, and compliance checks aren't obstacles, they're the actual sale
- **Multi-thread deals** — never depend on a single champion; build relationships across the organization
- **Execute proof of concept strategically** — position it as validation, not a test
- **Maintain pricing discipline** — negotiate on value, not discounts

Enterprise sales is predictable if you understand that you're selling to a buying committee, not an individual.

## When to Use This Skill

- **Deal size exceeds $100K** — complexity justifies the effort
- **Multiple approval layers required** — your contact isn't the final decision-maker
- **Procurement process is mandated** — security, legal, and compliance reviews ahead
- **Longer cycles detected** — 6+ months from first meeting to signature
- **Stakeholder expansion needed** — you've hit a plateau with your initial contact
- **Reference customers requested** — buying committee wants industry-specific proof points
- **Value negotiation stalled** — customer wants to cut price instead of discussing ROI

## Instructions

1. **Map the buying committee before first pitch**
   - Identify the economic buyer (controls budget), technical buyer (evaluates fit), user buyer (daily use), and coach (your internal champion)
   - Use LinkedIn and your contact to build the org chart
   - Ask directly: "Who else will be involved in this decision?" in discovery calls
   - Document each person's priorities and concerns in your CRM

2. **Conduct value-based discovery**
   - Focus on quantifiable business outcomes they care about (reduce time-to-market, lower operational costs, minimize security risk, increase revenue)
   - Ask about current state metrics: "How much are you spending on this today?" "What's the cost of the current problem?"
   - Connect product capabilities to their KPIs, not features
   - If they say "10x improvement," ask "What would that mean in revenue/cost savings for your team?"

3. **Build your executive sponsor relationship in parallel**
   - An exec from your side should meet their equivalent (executive sponsor on their end)
   - This prevents deals from stalling at mid-levels and shows commitment
   - Your exec can make product/roadmap commitments and discuss partnership approaches
   - Schedule quarterly business reviews with both executives involved

4. **Prepare for procurement as the main event**
   - Assume they have a security questionnaire, compliance requirements, and legal review
   - Build a procurement playbook: common questions, security documentation, compliance certifications (SOC2, ISO, etc.)
   - Assign one person to shepherd procurement; don't make the customer chase you
   - Start procurement conversations early; don't wait until they ask

5. **Pilot or proof of concept with success criteria**
   - Never position a pilot as a test; frame it as "validation of the value we've discussed"
   - Define success metrics upfront with the buying committee (adoption rate, performance target, business outcome)
   - Assign a dedicated customer success lead to ensure pilot succeeds
   - Use the pilot to uncover additional use cases and expand the contract

6. **Multi-thread through relationships, not manipulation**
   - Introduce technical buyer to your CTO or head of product (value alignment)
   - Connect user buyer to your customer success team (build confidence)
   - Have your champion advocate for you, but meet everyone directly
   - Reference checks should come from your champion's peers (not just CEO)

7. **Negotiate on value, not discounts**
   - If they ask for a discount, ask: "What would need to be true for this to be a yes at full price?"
   - Build an ROI document showing the payback period and annual value
   - Show comparable deals (anonymized) at the same price point
   - If you discount, tie it to contract length (annual instead of monthly) or expansion scope

8. **Maintain momentum through legal and security reviews**
   - Create a shared Slack channel or email thread for legal/security questions
   - Respond to security questionnaires within 48 hours (missing SLAs lose deals)
   - Don't make the customer's legal team negotiate with your legal team alone; be in the room
   - Escalate stalled reviews to your exec sponsor after 2 weeks of silence

9. **Plan land-and-expand from day one**
   - Enterprise deals rarely start at max contract value; prove value in one department first
   - Identify adjacent departments with similar pain (sales ops, finance, marketing)
   - Build a success plan for the first 90 days that creates expansion opportunities
   - Have customer success document expansion criteria (adoption %, new use cases)

10. **Close the contract with clear next steps**
    - Don't celebrate until the money is in the bank and the contract is signed
    - Have a post-signature onboarding plan ready (kick-off meeting, training schedule, success metrics dashboard)
    - Get executive sponsor involvement in the contract signature (CEO-to-CEO preferred for large deals)
    - Agree on board-level metrics you'll both track for renewal conversations

## Output Format

```
ENTERPRISE DEAL ANALYSIS & NAVIGATION PLAN

Deal Basics
═════════════
Deal Name: [Company Name + Product/Solution Area]
Deal Size: $[Amount] | Deal Stage: [Discovery/POC/Legal/Negotiation/Closed]
Expected Close Date: [Date] | Months in Cycle: [#]
Customer Industry: [Industry] | Company Size: [Employees/Revenue]

Buying Committee Map
═════════════════════
Economic Buyer: [Name, Title, Email, Priorities & Blockers]
  └─ What controls their success metric? [Revenue/Cost/Risk/Time]
  └─ Best way to reach them? [Email/LinkedIn/Executive intro]
  └─ Known concerns about our solution? [List]

Technical Buyer: [Name, Title, Email, Technical Requirements]
  └─ What are their evaluation criteria? [Security/Performance/Integration/Scalability]
  └─ Have they validated technical fit? [Yes/No/In Progress]
  └─ Will they be involved in procurement? [Yes/No]

User Buyer: [Name, Title, Email, Daily Use Case]
  └─ How do they use the product? [Primary workflow/pain point]
  └─ Have they tried a demo? [Yes/No/When]
  └─ Do they champion internally? [Strong/Moderate/Neutral/Against]

Coach/Champion: [Name, Title, Email, Relationship Strength]
  └─ How strong is their internal advocacy? [Rate 1-10]
  └─ Can they influence other committee members? [Yes/No/Which ones]
  └─ What do they gain from this deal? [Career advancement/Problem solved/etc]

Our Executive Sponsor: [Name, Title, Company]
  └─ Have they met their counterpart? [Yes/No/Scheduled]
  └─ Relationship strength: [Strong/Building/Not started]

Value Articulation
═══════════════════
Primary Pain (Customer's Language): [Specific, quantified problem]
  └─ Current state cost: $[Amount] per [time period]
  └─ Our solution impact: [Reduces/Increases] by [%] based on [metric]
  └─ Payback period: [# of months]
  └─ Annual ROI: [%] or $[Amount]

Secondary Value Drivers:
  1. [Pain 2 + Impact + ROI]
  2. [Pain 3 + Impact + ROI]

How We're Different: [vs. their current state AND vs. competitors they're evaluating]

Deal Status & Blockers
═══════════════════════
Current Stage: [Discovery/Evaluation/POC/Procurement/Legal/Negotiation/Closed]
  └─ Stage entry date: [Date]
  └─ Expected advancement date: [Date]
  └─ Blocking issues: [List specific, not vague]

Procurement Checklist:
  ☐ Security questionnaire issued: [Date] | Due: [Date] | Status: [In Progress/Submitted/Approved]
  ☐ Legal review started: [Date] | Key terms: [NDA/DPA/MSA status]
  ☐ Compliance requirements: [SOC2/ISO/HIPAA/Other] | Our status: [Certified/In process/N/A]
  ☐ Finance approval required: [Yes/No] | Finance contact: [Name/Title]

POC Plan (if applicable):
  ├─ Success criteria: [3-5 measurable outcomes both sides agreed to]
  ├─ Duration: [# of weeks] | Start date: [Date] | End date: [Date]
  ├─ Our dedicated resource: [Name/Title]
  ├─ Customer's dedicated resource: [Name/Title]
  └─ Success metrics dashboard: [Link to shared dashboard]

Next Steps & Timeline
══════════════════════
This Week: [Specific action 1], [Specific action 2], [Specific action 3]
Next 2 Weeks: [Decision from buying committee by DATE], [Procurement response by DATE]
Next Month: [POC launch/Contract signed/Security review approved]
Expected Close Date: [DATE] — Confidence: [High/Medium/Low] based on [reason]

Risk Assessment
════════════════
Downside risks: [Deal stalls, contact leaves, procurement blocked, etc.]
Mitigation plan: [How you'll prevent each risk from derailing the deal]
Tier 2 champion: [If primary contact leaves, who else can advocate for us?]

Land & Expand Plan
═══════════════════
Initial scope: [Departments/teams/use cases covered in first contract]
Adjacent opportunities: [Other departments with similar pain]
Year 1 expansion target: [New team/use case + $ growth]
Success metrics for expansion: [Adoption rate/ROI proof/upsell triggers]
```

## Example

```
ENTERPRISE DEAL ANALYSIS & NAVIGATION PLAN

Deal Basics
═════════════
Deal Name: Acme Corp - Revenue Operations Platform
Deal Size: $500K | Deal Stage: POC (Week 2 of 4)
Expected Close Date: June 30, 2026 | Months in Cycle: 5 months (started in January)
Customer Industry: SaaS (B2B productivity software) | Company Size: 450 employees

Buying Committee Map
═════════════════════
Economic Buyer: James Chen, VP Finance | james.chen@acmecorp.com
  └─ What controls their success? Revenue per employee (OpEx reduction + revenue growth)
  └─ Best way to reach? Exec sponsor meeting (CEO-to-CEO) scheduled for April 15
  └─ Known concerns: Implementation timeline won't impact Q2 guidance

Technical Buyer: Sarah Williams, Head of Revenue Ops | sarah.williams@acmecorp.com
  └─ Technical requirements: API integration with Salesforce, data sync latency <1 hour, HIPAA-compliance not needed but SOC2 critical
  └─ Validation status: In POC, running 4-week pilot covering sales forecasting + commission calculations
  └─ Procurement involvement: Yes, leading security assessment

User Buyer: Marcus Rodriguez, Sales Director (West) | marcus.rodriguez@acmecorp.com
  └─ Primary workflow: Commission accuracy (currently takes 15 hours/month manual audits), forecasting visibility
  └─ Demo status: Attended 2 demos + 1 hands-on training; running pilot with 8 reps
  └─ Internal advocacy: Strong (9/10) — reps are already seeing time savings

Coach/Champion: Rebecca Park, VP Revenue | rebecca.park@acmecorp.com
  └─ Internal advocacy strength: 9/10 (she championed the project internally; convinced VP Finance to fund POC)
  └─ Influence on committee: Strong with James Chen (peer meetings), trusted by Sarah (hired her), credible with Marcus (works closely)
  └─ What she gains: Success metric improvement (reduce sales ops hiring needs, improve forecast accuracy), career advancement (CEO is watching revenue ops)

Our Executive Sponsor: David Kim, CEO (Harmony) | david@harmony.co
  └─ Met James Chen: Yes, Feb 20 — discussed product roadmap, strategic partnership potential
  └─ Relationship strength: Building (2nd meeting scheduled for April for contract negotiation)

Value Articulation
═══════════════════
Primary Pain (Customer's Language): Commission calculations and audits are a nightmare—currently manual, error-prone, consuming 15 hours/week across the revenue ops team.
  └─ Current state cost: 1 FTE @ $85K/year + error correction overhead = ~$110K/year in wasted capacity
  └─ Our solution impact: Automate 80% of commission calculations + audits = recover ~880 hours/year
  └─ Payback period: 6 months (first year ROI = $110K value - $50K platform cost = $60K net benefit)
  └─ Annual ROI: 120% ($60K net benefit ÷ $50K platform cost, Year 1; recurring benefit $110K/year post-payback)

Secondary Value Drivers:
  1. Forecast visibility: Sales leaders currently spend 20% of pipeline reviews debating forecast accuracy. Better data = 15% more accurate forecasts, which CFO values at $500K (improved guidance to investors)
  2. Scaling for growth: Every sales rep hire adds 1 week of onboarding for commission setup. Our solution scales that to 2 hours. At 50 new hires/year, that's 8 weeks of ops time = $34K/year value

How We're Different: Competitors (Stripe, Icertis) focus on contract management or pure payment processing. We're revenue operations platform + analytics + commission intelligence. No competitor bundles commission accuracy + forecasting intelligence + data quality. Acme evaluated two competitors; both required 6+ month implementation and separate integrations.

Deal Status & Blockers
═══════════════════════
Current Stage: POC (Week 2 of 4)
  └─ Stage entry date: March 20, 2026
  └─ Expected advancement date: April 24, 2026 (POC ends)
  └─ Blocking issues: None currently — POC is tracking well, adoption with sales team exceeds expectations

Procurement Checklist:
  ☐ Security questionnaire: Issued March 22 | Due April 15 | Status: IN PROGRESS (Sarah answered 40/80 questions)
  ☐ Legal review: NDA signed Feb 28 | MSA being reviewed by their counsel (standard, no show-stoppers so far)
  ☐ Compliance: SOC2 Type II certified ✓ | GDPR compliant ✓ | No other compliance blockers
  ☐ Finance approval: James Chen approved $500K budget pending POC success + legal sign-off

POC Plan:
  ├─ Success criteria: (1) 95%+ commission calculation accuracy vs. manual, (2) <1 hour avg data sync lag, (3) Sales team adoption >80% by week 4, (4) No critical bugs found in 100+ transactions
  ├─ Duration: 4 weeks | Start: March 20 | End: April 18, 2026
  ├─ Our resource: Tom Bradley, Customer Success Manager (dedicated)
  ├─ Their resource: Sarah Williams + 2 engineering hours/week from IT
  └─ Dashboard: Shared via Notion (commission accuracy %, data sync health, adoption metrics, bugs logged/resolved)

Next Steps & Timeline
══════════════════════
This Week (March 24-28):
  • Friday March 28: Follow up with Sarah on remaining 40 security questions (she's on track)
  • Schedule legal review sync with their counsel (target date: April 1)
  • POC check-in with Marcus to confirm sales team satisfaction (currently 8/8 reps active in pilot)

Next 2 Weeks (March 31 - April 13):
  • April 1: Legal review sync (resolve any MSA sticking points)
  • April 10: POC success review with Sarah (confirm all success criteria on track)
  • April 15: Executive sponsor meeting between David (CEO) + James Chen (Finance) to discuss contract terms & partnership approach

Next 30 Days (April 14 - May 14):
  • April 24: POC conclusion & final success metrics review
  • May 1: Contract negotiation (David + Rebecca + James) — expected 2-3 rounds of revisions, unlikely to stall
  • May 15: Target signature (pending legal final approval)

Expected Close Date: June 30, 2026 — Confidence: HIGH (90%) based on: POC tracking perfectly, no compliance blockers, economic buyer funded, champion well-connected, legal has no major sticking points

Risk Assessment
════════════════
Downside Risks & Mitigations:
  1. Sarah leaves mid-POC (person risk) → Mitigation: Tom (our CSM) is the POC operational owner; we brief her replacement on day 1
  2. Security questionnaire stalls → Mitigation: Our Security team is triaging responses weekly; we've provided completed Q&A for 40/80 already
  3. Finance budget gets reallocated mid-year → Mitigation: David (our CEO) has relationship with James; they agreed to protect budget
  4. Legal redline on DPA/liability → Mitigation: Our legal team has template already built; unlikely to stall based on their counsel's comments so far

Tier 2 Champion: Marcus Rodriguez (Sales Director) — if Rebecca leaves, he's second-most-influential and passionate about the product (his reps love it). He has direct relationship with James Chen (peer meetings on sales ops topics).

Land & Expand Plan
═══════════════════
Initial Scope (Month 1): Sales commission calculations + forecasting for Sales org (7 sales reps + leadership)
  ├─ Departments covered: Sales only (revenue ops + 7 AEs)
  ├─ Primary use case: Commission accuracy + executive dashboard

Expansion Opportunities Identified:
  1. Customer Success team: 12-person CS org also needs commission tracking (expansion: +$50K, close probability 85%)
  2. Finance analytics: CFO wants revenue per customer metrics (expansion: +$75K for finance-grade reporting, close probability 70%)
  3. HR/Payroll integration: Finance wants to link compensation data to Workday (expansion: +$100K + implementation, close probability 60% within Year 2)

Year 1 Success Metrics for Expansion:
  • Sales commission calculation time: <2 hours/month (baseline: 15 hours) ← Trigger: CS team adoption if successful
  • Forecast accuracy: 90%+ vs. current 75% ← Trigger: Finance dashboard expansion
  • Payroll processing cycle time: 2 days (vs. 5 today) ← Trigger: HR integration interest
  • NPS with initial customer: 60+ ← Prerequisite for all expansions

Year 1 Expansion Target: Add CS team + Finance analytics module | Revenue impact: +$125K ARR (25% uplift) | Confidence: 75%
```

## Edge Cases

1. **Champion leaves mid-deal**
   - How it breaks: Your only contact is gone; deal stalls while new person onboards
   - Prevention: Multi-thread from day one; build relationships with economic and technical buyers in parallel, not just the champion
   - Recovery: Have your exec sponsor reach out to the champion's replacement within 48 hours; offer to restart discovery

2. **Security questionnaire stalls for weeks**
   - How it breaks: They can't answer SOC2 questions because their security team is understaffed; deal freezes in limbo
   - Prevention: Provide pre-filled answers based on your docs; make it easy for them to say yes
   - Recovery: Offer to have your security team speak directly to theirs; this usually unblocks things within 2 days

3. **Procurement insists on discounted pricing after POC**
   - How it breaks: "We love the product, but we need 20% off to make the business case work"
   - Prevention: Agree to contract length (annual vs. monthly) instead; show ROI math that justifies full price
   - Recovery: Only discount if they agree to multi-year commitment or expanded scope (add another department)

4. **Their executive sponsor loses interest between meetings**
   - How it breaks: Initial C-level excitement fades; deal deprioritizes; timelines extend
   - Prevention: Keep executive sponsor engaged with quarterly business reviews; share ROI updates and industry benchmarks
   - Recovery: Have your executive offer to present to their board (shows confidence); this re-elevates urgency

5. **You discover late they don't have budget approved**
   - How it breaks: You're 4 months in; they love the POC; then you learn "budget will be decided in Q3"
   - Prevention: Ask about budget approval process and timeline in discovery; confirm economic buyer has approved allocation
   - Recovery: Adjust close date; don't push; use the time to deepen relationships and expand the opportunity scope

6. **Legal negotiation uncovers non-negotiable terms (e.g., IP ownership clause)**
   - How it breaks: Their counsel won't budge on data ownership; your legal can't accept it; deal deadlocks
   - Prevention: Get legal involved early; understand their requirements (especially for data, liability, indemnification)
   - Recovery: Escalate to your legal and their legal (not just your sales team vs. their procurement); sometimes executive sponsor involvement breaks the logjam
