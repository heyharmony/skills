---
name: "Audit Email Deliverability"
description: "Run a structured deliverability audit — check authentication (SPF, DKIM, DMARC), sender reputation, bounce rates, spam triggers, and inbox placement. Produce a scored report with prioritized fixes. Trigger on: email deliverability, emails going to spam, bounce rate, sender reputation, inbox placement, authentication check, DMARC."
dependencies: []
connectors:
  - name: "HubSpot"
    reason: "Pull email campaign metrics — open rates, bounce rates, and spam complaint data to ground the audit"
  - name: "Gmail"
    reason: "Check inbox placement and authentication headers for recent sends"
  - name: "Slack"
    reason: "Surface team discussions about deliverability issues, customer complaints about missing emails"
  - name: "Google Drive"
    reason: "Store audit reports and track remediation progress over time"
author: "Harmony"
version: "1.0.0"
icon: "sparkles"
cover: ""
screenshots: []
category: "Marketing"
---

## Purpose

A structured email deliverability audit diagnoses why emails land in spam, fail to reach inboxes, or bounce. It analyzes technical authentication (SPF, DKIM, DMARC, BIMI), sender reputation signals (IP age, blacklist status, complaint rate), list quality (bounce rates, spam traps), and engagement trends. The output is a scored report with a ranked remediation roadmap—what to fix first, second, and third—grounded in your actual sending data.

Deliverability is often invisible until it breaks. A client's emails might suddenly drop from 24% opens to 11% without warning, or they discover 18% of their list bounces hard. This skill surfaces the root causes before that crisis happens, and provides a clear path to recovery.

## When to Use

**Trigger this skill when:**
- Email open rates drop 5+ points month-over-month
- Bounce rate exceeds 3% (hard bounces) or 8% (soft bounces)
- Team reports "emails going to spam" or "customers say they didn't receive them"
- Launching a new domain or sender address
- Moving to a new ESP or IP pool
- Scaling email volume (10x+ increase planned)
- After a list purchase or cold outreach campaign
- Quarterly health check (best practice: 2-4x per year)
- Before a major send (product launch email, re-engagement campaign)

**Do NOT use this skill for:**
- Writing email copy or subject lines (use Craft Email Subject Lines)
- Designing email templates (use Email Template Audit)
- Building email sequences (use Plan Email Nurture Sequence)
- Fixing authentication records directly (this skill diagnoses; you implement)

## Instructions

Follow this 10-step framework to run a complete deliverability audit:

**Step 1: Gather Program Context**
Ask your marketing lead or ESP admin:
- Current ESP (HubSpot, Klaviyo, ActiveCampaign, SendGrid, etc.)
- List size and growth rate (e.g., "52K subscribers, +3K/month")
- Send frequency (daily digest? weekly campaign? trigger-based?)
- Sender domain (one domain or multiple?)
- IP pool type (dedicated, shared, or warm-up in progress?)
- Known issues from the past 90 days (e.g., "Outlook blocks us," "Gmail spam folder spiked")
- Recent changes (new domain, IP migration, list import, template overhaul?)

Pull this context from Slack discussions, recent marketing team calls, or direct input. Document it in the audit report.

**Step 2: Check Authentication Records**
Request the DNS records for the sender domain from the technical contact (DevOps, IT, or domain registrar). Verify these exist and are configured correctly:

- **SPF (Sender Policy Framework):** Should list all authorized mail servers. Check the TXT record. If missing or incorrect, ISPs treat emails as suspicious.
- **DKIM (DomainKeys Identified Mail):** Private key signs outgoing emails; public key in DNS. Each selector (often "default," "mail," or "k1") should have a valid public key TXT record.
- **DMARC (Domain-based Message Authentication Reporting & Conformance):** Policy record (usually on _dmarc.[domain].com) that tells ISPs what to do with authentication failures. Recommended: p=quarantine or p=reject (not p=none if you have strong authentication).
- **BIMI (Brand Indicators for Message Identification):** Optional; displays your logo in Gmail/Yahoo inboxes if present. Check for _bimi TXT record and linked SVG logo.

Score this section: 10 = all four present and strict, 7 = SPF + DKIM correct + DMARC p=quarantine, 5 = SPF + DKIM only, 2 = partial or p=none, 0 = missing or broken.

**Step 3: Assess Sender Reputation**
Check via free tools and ESP data:

- **Domain Age:** Is the sending domain >6 months old? New domains have lower trust (score -2 if <3 months, -1 if 3-6 months, 0 if >6 months).
- **Blacklist Status:** Check domain and IP against Spamhaus, Barracuda, Validity, and Abusix via mxtoolbox.com or similar. Each listing = -3 points. If clean, +1 point.
- **Complaint Rate:** Divide spam complaints by emails sent over last 30 days. Industry benchmark: <0.1%. Above 0.3% = major red flag. Score: >0.5% = -5, 0.3-0.5% = -3, 0.1-0.3% = -1, <0.1% = +2.
- **List Quality Age:** When was the list last cleaned? If >12 months, assume stale addresses exist. Score -2. If cleaned in last 3 months, +1.

**Step 4: Analyze Bounce Rates**
Pull bounce data from your ESP for the last 90 days. Separate hard bounces (permanent failures: invalid address, domain doesn't exist) from soft bounces (temporary: full inbox, server down).

- **Hard Bounce Rate:** Target <2%. Above 5% signals list quality issues or typos at signup. Score: >5% = -5, 3-5% = -2, <2% = +1.
- **Soft Bounce Rate:** Target <3%. Above 8% means subscriber inboxes are full or servers are throttling you. Score: >8% = -3, 3-8% = 0, <3% = +1.
- **Bounce Rate by Segment:** Identify which segments bounce most (e.g., enterprise domains, free email providers like Gmail). Note outliers for remediation.

**Step 5: Review Spam Trigger Patterns**
Analyze rejected emails and complaints. Ask:

- **Content Patterns:** Do certain keywords trigger blocks? (e.g., "free," "limited time," "act now"). Review subject lines and body text of complained-about emails.
- **Sending Patterns:** Do you send from a single IP? Volume spikes? Inconsistent send times? Sending all emails in one hour = red flag. Stagger sends over 8-12 hours.
- **Link/Attachment Patterns:** Shortened URLs, tracking pixels, or PDFs can trigger blocks. Check if complained emails use unusual link patterns.
- **Sender Header Alignment:** Does "From" domain match authentication records? Misalignment (e.g., "from: noreply@other-domain.com" when you're sending from your domain) = -2 points.

Score: Major trigger patterns found = -4, Minor issues = -1, Clean = +2.

**Step 6: Check List Hygiene**
Request list segmentation data from your CRM:

- **Invalid Addresses:** Count email addresses that fail validation (no @, typos). Target: <1%. Above 3% = -3 points.
- **Spam Traps:** Role-based addresses (no-reply@, admin@, support@, abuse@) and honeypot addresses can trigger blacklists. Audit for these; remove any found. Found >10 = -4, Found 1-10 = -2, None = +1.
- **Unengaged Subscribers:** How many have never opened in 12+ months? If >40% of list, -2 points. Above 60%, -4 points (this drags down your complaint rate).
- **Duplicate Addresses:** Check for duplicate email entries in your database. Above 2% = -1 point.

Score total list hygiene: Clean = +3, Minor issues = 0, Major issues = -3 to -4.

**Step 7: Evaluate Engagement Metrics vs. Benchmarks**
Pull open rates, click rates, and unsubscribe rates for last 30 days. Compare to industry benchmarks (varies by vertical: B2B SaaS ~20-30%, DTC ecommerce ~15-25%, non-profit ~25-35%).

- **Open Rate:** Your rate vs. benchmark. If ≥ benchmark, +2. If 5-10 points below, 0. If >10 points below, -2 (suggests deliverability issues).
- **Click Rate:** Similar logic. Industry avg ~2-4%. If low, could be engagement problem or inbox placement problem.
- **Unsubscribe Rate:** Industry avg 0.1-0.5%. Above 0.5% = -1 point (suggests list sentiment is negative).

Score: Strong engagement = +2, Average = 0, Poor = -2.

**Step 8: Score Each Area and Produce Overall Health Score**
Tally scores from Steps 2-7:

| Area | Max Points | Your Score |
|------|-----------|-----------|
| Authentication | 10 | \_\_\_ |
| Sender Reputation | 10 | \_\_\_ |
| Bounce Rates | 10 | \_\_\_ |
| Spam Triggers | 10 | \_\_\_ |
| List Hygiene | 10 | \_\_\_ |
| Engagement | 10 | \_\_\_ |
| **Total** | **60** | **\_\_\_** |
| **Health %** | **100%** | **\_\_\_% ** |

Convert total to percentage. Health grade:
- **90-100%:** Excellent. Maintain current practices; audit again in 6 months.
- **75-89%:** Good. 2-3 medium-priority fixes needed; plan 30-day remediation.
- **60-74%:** Fair. Multiple issues; 60-90 day remediation roadmap required.
- **Below 60%:** Critical. Immediate action required; high risk of continued deliverability decline.

**Step 9: Prioritize Fixes by Impact**
Create a remediation roadmap. Assign each fix to one of three tiers:

**Critical (Fix in Week 1):**
- Fix any broken DKIM/SPF records (impacts all mail)
- Remove >20 spam traps from list
- Correct sender domain misalignment
- Unsubscribe unengaged subscribers (>18 months inactive)

**High (Fix in Weeks 2-3):**
- Implement DMARC p=quarantine if not done
- Reduce hard bounce rate below 3% via list cleaning
- Segment unengaged subscribers and re-engagement campaign
- Stagger send volume if causing throttling

**Medium (Fix in Weeks 4-8):**
- Optimize subject lines (review complaint patterns)
- Implement double opt-in for new subscribers
- Audit link/image use in templates
- Review and adjust send frequency based on engagement

**Step 10: Deliver Audit Report**
Compile findings into a clear report (see Output Format below). Include:
- 1-page executive summary (health score, top 3 fixes, timeline)
- Detailed scorecard (all 6 areas with drill-down data)
- Remediation roadmap (what, who, when, expected lift)
- Appendix: raw data (bounce rates by segment, spam complaint trends, authentication check results)

Deliver to marketing leadership and technical point of contact. Set a follow-up audit date (30-60 days post-remediation).

## Output Format

**Audit Report Structure:**

```
DELIVERABILITY AUDIT REPORT
[Company Name] | [Date]

EXECUTIVE SUMMARY
- Overall Health Score: [__]% ([Grade: Excellent/Good/Fair/Critical])
- Key Findings (3-5 bullet points)
- Recommended Timeline: [30/60/90 days]

SCORECARD

Authentication: [__]/10
- SPF: [Present/Broken/Missing] | Domain Age: [6mo+/3-6mo/<3mo]
- DKIM: [Configured/Partial/Missing] | Selectors Found: [__]
- DMARC: [p=reject/p=quarantine/p=none/Missing]
- BIMI: [Present/Not set up]

Sender Reputation: [__]/10
- Domain Age: [__] years
- Blacklist Status: [Clean / Listed on: ___]
- Complaint Rate: [__]% (Industry benchmark: <0.1%)
- List Quality: Last cleaned [__ months ago]

Bounce Rates: [__]/10
- Hard Bounce Rate: [__]% (Target: <2%)
- Soft Bounce Rate: [__]% (Target: <3%)
- Top Bouncing Segments: [___]

Spam Triggers: [__]/10
- Content Patterns: [Findings]
- Sending Patterns: [Findings]
- Link/Header Issues: [Findings]

List Hygiene: [__]/10
- Invalid Addresses: [__]% (Target: <1%)
- Spam Traps Found: [__]
- Unengaged (12mo+): [__]% of list
- Duplicates: [__]%

Engagement vs. Benchmarks: [__]/10
- Open Rate: [__]% (Benchmark: [__]%)
- Click Rate: [__]% (Benchmark: [__]%)
- Unsubscribe Rate: [__]% (Benchmark: <0.5%)

REMEDIATION ROADMAP

Critical (Week 1):
1. [Fix] - Owner: [Name] - Impact: [Expected open rate lift]
2. [Fix] - Owner: [Name]
3. [Fix] - Owner: [Name]

High (Weeks 2-3):
1. [Fix] - Owner: [Name]
2. [Fix] - Owner: [Name]

Medium (Weeks 4-8):
1. [Fix] - Owner: [Name]
2. [Fix] - Owner: [Name]

EXPECTED OUTCOMES (30-60 days post-remediation)
- Open Rate: [Current __]% → [Target __]%
- Bounce Rate: [Current __]% → [Target __]%
- Inbox Placement: [Current estimate __]% → [Target __]%
- Complaint Rate: [Current __]% → [Target __]%

NEXT AUDIT
Scheduled: [Date] | Owner: [Name]
```

## Example

**Scenario:** BrightLoop (B2B project management SaaS) — 45K subscriber list, sending 2x weekly. Open rates dropped from 24% (Jun 2025) to 14% (Dec 2025). Customer support reports "clients say they're not getting our emails."

**Context Gathering:**
- ESP: HubSpot
- List size: 45,021 (down from 51K due to unsubscribes)
- Sender domain: hello@brightloop.io (primary); noreply@brightloop.io (transactional)
- Send frequency: Tuesdays + Thursdays, ~8 AM ET
- IP pool: Shared HubSpot pool
- Recent changes: Migrated from Constant Contact in October; new cold outreach list imported (8K contacts, cold list, no prior engagement)

**Authentication Check:**
- SPF: Present, includes HubSpot servers ✓
- DKIM: Configured, selector "hubspot" ✓
- DMARC: p=none (weak) ✗
- BIMI: Not set up ○
Score: 6/10 (DMARC too permissive)

**Sender Reputation:**
- Domain age: 3.2 years ✓
- Blacklist status: brightloop.io listed on Spamhaus CSS (newly migrated IP triggered listing) ✗
- Complaint rate: 0.28% (up from 0.08% in Oct) ✗
- List quality: Cold list added in Oct, not cleaned
Score: 2/10 (critical issue: blacklist + complaint spike)

**Bounce Rates:**
- Hard bounces: 5.2% (industry avg 2%) ✗
- Soft bounces: 4.1% (good)
- By segment: Cold list = 11.2% hard bounce rate (rest of list 2.8%) ✗
Score: 3/10 (cold list dragging metrics)

**Spam Triggers:**
- Review of complained emails: Heavy use of "limited time" and "act now" in cold outreach subject lines
- Send pattern: All 45K sent within 45 minutes (concentrated send)
Score: 4/10 (both content and sending pattern issues)

**List Hygiene:**
- Invalid addresses: 0.7% ✓
- Spam traps: Found 3 (no-reply@, admin@, support@ addresses signed up in Oct cold import) ✗
- Unengaged (12mo+): 8,200 addresses (18% of list, all pre-July 2024 acquisitions)
- Duplicates: 0.2% ✓
Score: 5/10 (traps + unengaged segment)

**Engagement:**
- Open rate: 14% (benchmark 22%) ✗
- Click rate: 0.8% (benchmark 2.5%) ✗
- Unsubscribe: 0.35% (acceptable)
Score: 2/10 (both open and click far below benchmark)

**Total Health Score:** 22/60 = 37% (Critical)

**Remediation Roadmap:**

| Priority | Fix | Owner | Timeline | Impact |
|----------|-----|-------|----------|--------|
| Critical | Delist from Spamhaus (submit removal request to host) | CTO Maya Chen | Day 1-3 | +5-8% open rate (unlocks mailbox) |
| Critical | Remove 3 spam trap addresses | Marketing Ops | Day 1 | Prevents IP reputation harm |
| Critical | Set DMARC p=quarantine | CTO Maya Chen | Day 2 | Hardens domain; prevents impersonation |
| Critical | Segment + suppress cold list (re-engagement campaign separate) | Marketing Ops | Day 3-5 | Reduces bounce rate from 5.2% → 2.1% |
| High | Re-engagement campaign (cold list only): "We miss you" series, 4-email sequence | Content + Ops | Weeks 2-3 | Recovers 15-20% of cold list or purges unresponsive |
| High | Refresh subject lines in standard campaigns (A/B test: remove "urgent" language) | Content | Week 2 | -0.5-1% complaint rate |
| High | Implement send stagger: distribute 45K over 3-4 hours instead of 45 min | Ops | Week 2 | Reduces soft bounce throttling |
| Medium | Implement double opt-in on web signup form | Product | Weeks 4-6 | Stops future invalid addresses |
| Medium | Quarterly list cleaning: remove hard bounces + 18mo+ unengaged | Ops | Ongoing quarterly | Maintains <2% bounce rate |

**Expected Outcomes (60 days post-remediation):**
- Open rate: 14% → 20% (+6 points)
- Bounce rate: 5.2% → 2.0%
- Complaint rate: 0.28% → 0.08%
- Inbox placement: ~60% (estimated current) → 85% (estimated)

## Edge Cases

**1. Multi-domain sending:**
If you send from multiple domains (marketing@domain-a.com, support@domain-b.com), audit each separately. High-volume domains need dedicated attention. Score each domain, then average.

**2. Cold outreach programs:**
New domains + cold lists = guaranteed deliverability hit. Score cold and warm lists separately. Cold list hard bounce rates of 8-12% are normal (typos, business address churn). Plan dedicated re-engagement workflow.

**3. Shared IP pools:**
On shared IPs (standard HubSpot, SendGrid tier), reputation is collective. If neighbors are spammy, you suffer. If your metrics are clean but deliverability is poor, request dedicated IP or investigate sender pool quality via ESP.

**4. Non-English languages:**
Some ISPs (Yandex, Mail.ru) are stricter with non-Latin characters. If sending in CJK, Arabic, or Cyrillic, audit inbox placement separately. Test with 100-address samples before scaling.

**5. Transactional vs. marketing email:**
Transactional (receipts, password resets) has different reputation from marketing (newsletters). Many ESPs separate IPs. If transactional bounces spike, check your order fulfillment and account data quality separately.

**6. List purchased or rented:**
Third-party lists often contain spam traps, duplicates, and invalid addresses. Audit separately. Score: -3 points for any list purchase <3 months old until cleaned and validated.

**7. High-frequency sends (daily):**
More sends = more reputation opportunity, but also more risk if engagement drops. Monitor engagement weekly, not monthly. If open rate drops >3 points in one week, pause sends and audit.

**8. ISP-specific blocks:**
Sometimes Gmail, Outlook, or Yahoo will block you specifically while others accept. Check authentication headers in test sends to those ISPs. If only one ISP blocks, it's usually a DMARC or complaint rate issue specific to that ISP.

---

Next Steps: Share your current email metrics (list size, open/bounce rates, domains, ESP) and I'll run a full audit using this framework. Or, if you'd like to implement fixes first, I can map the remediation roadmap to your team's capacity. Ready to push this to docs?
