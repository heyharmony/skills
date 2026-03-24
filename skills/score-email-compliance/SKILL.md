---
name: "Score Email Compliance"
description: "Audit email program compliance across GDPR, CAN-SPAM, CASL, CCPA, and Australian Spam Act — score each area, flag violations, and provide remediation steps with priority ranking. Trigger on: email compliance, GDPR email, CAN-SPAM, unsubscribe compliance, email privacy, consent audit, email legal review."
dependencies: []
connectors:
  - name: "HubSpot"
    reason: "Pull consent records, subscription preferences, and unsubscribe mechanisms for audit"
  - name: "Gmail"
    reason: "Review recent email sends for required compliance elements (unsubscribe links, physical address, sender identity)"
  - name: "Notion"
    reason: "Reference privacy policies, data processing agreements, and compliance documentation"
  - name: "Slack"
    reason: "Surface legal team discussions about compliance requirements and policy updates"
---

## Purpose

Email compliance isn't optional—it's existential. A single unsubscribe failure in GDPR-land triggers fines up to 4% of revenue. CAN-SPAM violations cost $43,280 per email. CASL breaches in Canada hit $15 million. This skill systematically audits your email program against five major regulations, scores each domain (consent, unsubscribe, content, data retention, cross-jurisdiction), and delivers a remediation roadmap ranked by financial risk.

The output is a compliance scorecard that marketing leaders can present to legal and the board. Grounded in Harmony data when available: consent mechanism discussions in Slack, privacy policy edits in Notion, email send records in HubSpot and Gmail.

## When to Use

- **Quarterly compliance review**: Map your email program against regulatory landscape.
- **After a privacy policy change**: Verify your email practices still align.
- **When expanding into new geographies**: Understand what GDPR, CASL, CCPA, or Australian rules require.
- **Preparing for a security audit**: Document your consent, unsubscribe, and data retention protocols.
- **After a user complaint**: Investigate if your unsubscribe, consent, or data handling violated regulations.
- **Before hiring a new legal counsel**: Establish baseline compliance posture.
- **M&A due diligence**: Assess the target company's email compliance debt.

## Instructions

### Step 1: Map Regulatory Jurisdiction
Determine which regulations apply based on:
- **Sender location**: Where your company is legally domiciled.
- **Subscriber geography**: Where recipients live (if any are in the EU, GDPR applies; if any in Canada, CASL; if in California or other US states with privacy laws, CCPA; if in Australia, Australian Spam Act).
- **Data flows**: Where servers, processors, and backups live.

Output a matrix showing each regulation and why it applies (e.g., "GDPR applies: 4,200 EU subscribers, HubSpot EU-GDPR datacenter").

### Step 2: Audit Consent Mechanisms
For each regulation, verify:
1. **Consent type**: Explicit opt-in (GDPR, CASL), affirmative action (required), or implicit (CAN-SPAM allows). Document which you use.
2. **Consent records**: Can you prove when, how, and what each person consented to? Check:
   - HubSpot consent fields and timestamps.
   - Email verification or double opt-in records.
   - Custom consent tracking in your database.
   - Checkbox copy at signup (screenshot it).
3. **Checkbox design**: Is the consent checkbox pre-checked (violation in GDPR)? Is the language clear and separate from ToS?
4. **Consent for different lists**: Do you track consent separately for marketing vs. transactional vs. product updates?
5. **Historical consent**: For existing subscribers, do you have evidence of prior express consent (GDPR legacy)?

**Scoring**: 10 = written proof of explicit opt-in with timestamps, clearly worded, separate from T&Cs, one checkbox per purpose, and retained 3+ years. 0 = no consent records or pre-checked boxes.

### Step 3: Audit Unsubscribe Compliance
For each regulation, verify:
1. **One-click unsubscribe**: Does your email include a working unsubscribe link? Test it—does it work in one click without a login?
2. **List-unsubscribe header**: Does your email include the RFC 8058 List-Unsubscribe header? (Modern standard; Gmail rewards this.)
3. **Unsubscribe time-to-effect**: After someone unsubscribes, do you stop sending within 10 business days (CAN-SPAM) or immediately (GDPR best practice)?
4. **Unsubscribe destination**: Does clicking unsubscribe:
     - Remove from *all* marketing (blanket unsubscribe, safest)?
     - Give preference center access (allow per-list unsubscribe)?
     - Show a confirmation and next steps?
5. **Preference center**: If you offer a preference center, does it let users:
     - Unsubscribe from specific lists or categories?
     - Change frequency (e.g., "weekly instead of daily")?
     - Update contact info?
     - Re-subscribe later?
6. **Suppression list sync**: Are unsubscribes synced across all systems (ESP, CRM, email lists)? Test: unsubscribe in HubSpot, verify it blocks sends in your email tool.
7. **Physical mailing list unsubscribe**: If you send physical mail, is there a way to opt out?

**Scoring**: 10 = one-click unsubscribe, List-Unsubscribe header, immediate suppression, working preference center, cross-system sync confirmed. 5 = one-click unsubscribe only. 0 = unsubscribe link requires login or doesn't work.

### Step 4: Audit Email Content Requirements
For each regulation, verify:
1. **Sender identity**: Are emails "from" a real person or a valid business? Check:
     - From address matches brand (not noreply@randomserver.com)?
     - From name is clear (not "Sales" or "No Reply")?
     - Reply-to address works and goes to a real person?
2. **Physical mailing address**: Is your business's physical street address in every marketing email? Check footer:
     - Street address present (not just ZIP)?
     - City and state/country included?
     - PO box acceptable? (No—regulations require street address.)
3. **Subject line**: Are subject lines accurate and non-deceptive? (CAN-SPAM, CASL, GDPR all require true subject lines.)
4. **Commercial vs. transactional**: Are transactional emails (order confirmations, password resets) marked or separated from marketing? Transactional emails have looser rules.
5. **Identifier presence**: If you're a third party or white-label sender, do emails clearly identify your business or the brand sending?

**Scoring**: 10 = verified sender identity, street address in footer of every email, accurate subject lines, commercial purpose clear. 5 = most elements present. 0 = missing sender identity or physical address.

### Step 5: Audit Data Retention
For each regulation, verify:
1. **Retention policy**: Does your privacy policy state how long you keep email subscriber data (after unsubscribe, after last engagement, after customer relationship ends)?
2. **Data deletion**: After the retention period expires, do you:
     - Delete from CRM/ESP?
     - Delete from backups?
     - Delete from data warehouses?
     - Anonymize instead of delete?
3. **Inactive subscriber cleanup**: Do you delete or archive subscribers who never engaged for 24+ months (best practice for most)?
4. **Legal hold**: If there's a lawsuit, can you preserve data as required without forever storing it?
5. **Backup retention**: Are backups deleted after your stated retention period, or are they kept indefinitely?

**Scoring**: 10 = written retention policy, automated deletion/anonymization post-retention, no indefinite backups. 5 = policy exists but deletion is manual. 0 = indefinite retention or no documented policy.

### Step 6: Audit Cross-Jurisdiction Compliance
Verify your company handles multi-jurisdiction complications:
1. **Data processing agreement (DPA)**: If you use HubSpot, Mailchimp, or other ESPs, do you have a signed DPA covering GDPR data processor requirements?
2. **Sub-processor list**: Does your ESP publish a list of sub-processors? Have you reviewed and approved their GDPR compliance?
3. **Data localization**: Where does your ESP store EU data? (EU-GDPR requires EU servers or standard contractual clauses.)
4. **Consent at source**: If you buy email lists, is there proof the original owner had consent from each subscriber?
5. **Re-consent strategy**: For legacy subscribers without clear consent records, have you planned a re-consent campaign?

**Scoring**: 10 = signed DPA, approved sub-processors, EU data stored in EU, all subscribers have documented consent. 5 = DPA in place but sub-processor review incomplete. 0 = no DPA or unclear data location.

### Step 7: Calculate Regulation-Specific Scores
For each regulation (GDPR, CAN-SPAM, CASL, CCPA, Australian Spam Act), assign a score 1–10 based on how you performed in Steps 2–6:
- **GDPR**: Weighted heavily on consent, unsubscribe, data retention, DPA. Stricter standard.
- **CAN-SPAM**: Weighted on sender identity, physical address, unsubscribe, subject line accuracy. US-only requirement.
- **CASL**: Similar to GDPR; Canadian companies and any email sent to Canada. Strict on consent and unsubscribe.
- **CCPA**: Weighted on data retention, deletion rights, and opt-out mechanisms. California-focused.
- **Australian Spam Act**: Weighted on identification, unsubscribe, misleading headers. Australia-focused.

**Example scoring for fictional "Vantage Analytics" (US SaaS, 28K subscribers, US/EU/Canada mix):**
- GDPR: 4/10 (no consent records for 4,200 EU subscribers, good unsubscribe, no DPA review)
- CAN-SPAM: 8/10 (sender identity and physical address present, unsubscribe works, but subject line not always truthful in promotional blasts)
- CASL: 3/10 (Canadian subscribers have no consent proof, unclear if unsubscribe processed within 10 days)
- CCPA: 7/10 (retention policy exists, deletion process manual, no opt-out at sign-up)
- Australian Spam Act: 6/10 (physical address present, unsubscribe works, identification clear)

### Step 8: Calculate Overall Compliance Score
Weighted average of regulation scores, weighted by subscriber volume in each jurisdiction:
- GDPR: 4/10 × 15% (4.2K of 28K) = 0.6
- CAN-SPAM: 8/10 × 10% (2.8K of 28K) = 0.8
- CASL: 3/10 × 10% (2.8K of 28K) = 0.3
- CCPA: 7/10 × 5% (1.4K of 28K) = 0.35
- Domestic (US): 8/10 × 60% (16.8K of 28K) = 4.8

**Overall Score: 6.85/10 or 62/100**

### Step 9: Flag Violations by Risk Level
Categorize each compliance gap:

**Critical (Risk: Legal action, fines, company liability)**
- GDPR: No consent records for EU subscribers; no DPA; data stored outside EU without standard contractual clauses.
- CASL: Email sent to Canadian subscribers without consent.
- CCPA: No way for California residents to opt out or request data deletion.
- CAN-SPAM: Missing physical address or sender identity in emails.

**High (Risk: Complaints, ISP blocklisting, potential enforcement action)**
- Unsubscribe link broken or requires login.
- Unsubscribe not processed within required timeframe.
- Subject line deceptive or misleading.
- No List-Unsubscribe header.

**Medium (Risk: Best practice gap, potential complaints, minor enforcement risk)**
- No preference center (users can't unsubscribe by category).
- Transactional emails not separated from marketing.
- Backup retention policy unclear.
- Sub-processor list not reviewed.

### Step 10: Deliver Compliance Scorecard with Remediation Timeline

**Output format:**

```
COMPLIANCE SCORECARD: Vantage Analytics
Audit Date: 2026-03-24
Overall Score: 62/100

REGULATION SCORES:
  GDPR (4,200 EU subscribers): 4/10 — CRITICAL GAPS
  CAN-SPAM (US/non-CASL): 8/10 — MINOR GAPS
  CASL (2,800 Canadian): 3/10 — CRITICAL GAPS
  CCPA (1,400 California): 7/10 — MINOR GAPS
  Australian Spam Act (600 Australia): 6/10 — MINOR GAPS

CRITICAL VIOLATIONS:
1. No consent records for 4,200 EU subscribers (GDPR)
   - Remediation: Launch re-consent campaign; implement signed DPA with HubSpot; move EU data to EU servers.
   - Timeline: 30 days (re-consent campaign) + 15 days (DPA + server migration).
   - Owner: Legal + RevOps.
   - Risk: Up to 4% of global revenue in GDPR fines (~$340K for a $8.5M ARR company).

2. No consent proof for 2,800 Canadian subscribers (CASL)
   - Remediation: Implement explicit opt-in for Canada; clean list of non-consenting subscribers.
   - Timeline: 14 days.
   - Owner: RevOps + Compliance.
   - Risk: Up to CAD $15M per violation; ISP complaints leading to blocklisting.

3. CAN-SPAM physical address missing from 15% of transactional emails
   - Remediation: Update email template footer; test in staging.
   - Timeline: 3 days.
   - Owner: Marketing Ops.
   - Risk: $43,280 fine per email batch if FTC enforcement triggered.

HIGH VIOLATIONS:
1. Unsubscribe processing time undefined (requirement: 10 days CAN-SPAM, immediate GDPR best practice)
   - Remediation: Document current suppression time in HubSpot; target same-day or next-day processing.
   - Timeline: 7 days.
   - Owner: Email Marketing Manager.

2. List-Unsubscribe header missing from 80% of emails
   - Remediation: Add RFC 8058 header to all emails via HubSpot templates.
   - Timeline: 5 days.
   - Owner: Email Marketing Ops.

MEDIUM VIOLATIONS:
1. No preference center; users must unsubscribe entirely to reduce frequency
   - Remediation: Build preference center in HubSpot or Klaviyo.
   - Timeline: 30 days.
   - Owner: Email Marketing Manager.

2. DPA with HubSpot not reviewed; sub-processor list unknown
   - Remediation: Request and review DPA; audit sub-processor list quarterly.
   - Timeline: 14 days.
   - Owner: Legal + Data Security.

REMEDIATION ROADMAP:
  Week 1: Add List-Unsubscribe header; fix CAN-SPAM physical address in transactional emails.
  Week 2: Document unsubscribe processing timeline; draft re-consent email for EU subscribers.
  Week 3: Launch re-consent campaign for EU; finalize DPA with HubSpot.
  Week 4: Migrate EU data to EU servers (if needed); clean Canadian non-consent list.
  Month 2: Build preference center; conduct quarterly compliance check.

NEXT STEPS:
  1. Share scorecard with Legal and Compliance teams.
  2. Assign owners to each remediation item.
  3. Schedule weekly check-ins to track progress.
  4. Re-audit in 90 days to verify improvements.
```

## Output Format

Deliver a **Compliance Scorecard** document (Markdown or PDF) containing:
1. **Overall compliance score** (1–100 scale).
2. **Regulation-specific scores** (1–10 for each applicable regulation).
3. **Critical violations** (with financial risk estimates).
4. **High violations** (with enforcement risk estimates).
5. **Medium violations** (best practice gaps).
6. **Remediation roadmap** with owner, timeline, and priority.
7. **Appendix**: Detailed audit findings for each step (consent, unsubscribe, content, retention, cross-jurisdiction).

Keep it concise (2–4 pages) for legal and marketing teams to share with the board.

## Example: Full Audit for Vantage Analytics

**Company Profile:**
- B2B SaaS (business intelligence / data analytics).
- 28,000 email subscribers.
- Geography: 60% US (16,800), 15% EU (4,200), 10% Canada (2,800), 5% California (1,400), 5% Australia (1,400).
- Email platform: HubSpot.
- Current send volume: 500K marketing emails/month, 2M transactional/month.
- Privacy policy: Updated 12 months ago; states 2-year retention for subscriber data.

**Audit Findings:**

**Consent**: 4,200 EU subscribers lack documented consent. 2,800 Canadian subscribers entered list via web form (pre-checked opt-in box, now discovered). 1,400 California subscribers have no CCPA opt-out option at signup. ~18,000 US subscribers have checkbox consent, but no proof of explicit opt-in for product update list (only marketing list).

**Unsubscribe**: All emails have unsubscribe link; link works and removes from all marketing in <24 hours (verified). No List-Unsubscribe header. No preference center; users can't unsubscribe from specific list types.

**Content**: Sender identity clear (marketing@vantageanalytics.com, "Vantage Analytics Team"). Physical address in footer on 85% of emails; missing in 15% of transactional emails (order confirmations, password resets). Subject lines mostly accurate; 2 recent campaigns flagged as "misleading" by employee (tested via CAN-SPAM compliance tool).

**Data Retention**: Policy says 2-year retention; no automated deletion process. Backups retained indefinitely. No procedure for honoring GDPR "right to deletion" requests.

**Cross-Jurisdiction**: No signed DPA with HubSpot. HubSpot EU data stored in Germany (GDPR-compliant). Sub-processor list not reviewed. No re-consent campaign planned for EU legacy subscribers.

**Overall Score: 62/100.**

**Critical Actions:**
1. Re-consent EU subscribers (30 days).
2. Sign DPA with HubSpot (14 days).
3. Add List-Unsubscribe header (5 days).
4. Fix missing physical address in transactional emails (3 days).
5. Document unsubscribe processing SLA (7 days).

**Timeline to 80/100:** 60 days, with legal + marketing ops collaboration.

## Edge Cases

1. **Multi-brand company**: If you own multiple brands sending from separate domains, audit each separately. They may have different subscriber lists, consent histories, and regulatory risk.

2. **Third-party email lists**: If you use bought lists, you *cannot* email them without proof of original consent. Mark these "cold" and treat as compliant only if the vendor provides consent attestation. High risk: assume non-compliant until proven otherwise.

3. **Acquired company**: When acquiring a business with an email list, you inherit their compliance debt. Re-consent all acquired subscribers before sending. Budget 60 days for re-consent campaign.

4. **Seasonal or re-engagement campaigns**: If you re-engage lapsed subscribers after 12+ months, you're entering a gray zone. Treat as new subscribers; require explicit new consent.

5. **Co-marketing or affiliates**: If another company sends on your behalf (co-marketing), verify they have signed a processor agreement and own the consent. You're liable for their violations.

6. **Transactional emails from product**: If your product auto-sends transactional emails (receipts, alerts), ensure your privacy policy and Terms of Service explicitly cover this. Even "transactional" emails must comply with unsubscribe and identification rules in most regulations.

7. **International expansion**: If your company moves HQ or launches in a new country, re-audit. Regulations vary significantly by jurisdiction.

8. **SMS or push notifications**: This audit covers email only. SMS and push notifications have separate regulations (TCPA in US, similar rules in EU). Don't assume email compliance transfers.
