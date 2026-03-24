# Audit Email Deliverability

> Why do our emails land in spam? This skill runs a 10-step diagnostic to find out.

## What It Does

Diagnoses email deliverability problems — spam landing, low open rates, high bounce rates — by analyzing:
- **Technical authentication** (SPF, DKIM, DMARC records)
- **Sender reputation** (domain age, blacklist status, complaint rate)
- **List quality** (bounce rates, spam traps, unengaged subscribers)
- **Spam trigger patterns** (subject lines, sending patterns, link use)
- **Engagement metrics** vs. industry benchmarks

Produces a scored health report (0-100%) with a three-tier remediation roadmap: what to fix first, what's important, and what can wait.

## Who It's For

**Marketing leaders** diagnosing why open rates dropped or customers report missing emails.
**Email ops teams** running quarterly health checks or launching new domains.
**Growth teams** scaling cold outreach or importing purchased lists.
**Product teams** troubleshooting transactional email delivery issues.

## Use Cases

- **Open rates dropped 5+ points month-over-month** — Uncover root cause (authentication, list quality, engagement)
- **Bounce rate exceeds 3% (hard) or 8% (soft)** — Identify which segments bounce and why
- **Launching a new domain or sender address** — Pre-flight checklist before scaling volume
- **Moving to a new ESP or IP pool** — Verify authentication and reputation are clean
- **Cold outreach campaign planned** — Baseline health before importing new cold lists
- **Quarterly audit** — Best practice: 2-4 per year to catch issues early
- **Customer complaints: "We didn't get your email"** — Rule out spam folder or authentication failure

## Connectors

- **HubSpot** — Pull email campaign metrics (open rates, bounces, complaints)
- **Gmail** — Test inbox placement and verify authentication headers
- **Slack** — Capture team discussions about deliverability problems
- **Google Drive** — Store audit reports and track fixes over time

## Setup

Install and go. Gather your ESP name, list size, and recent campaign metrics (open rate, bounce rate, complaint rate). If you have access to DNS records for your sending domain, that speeds up the authentication check. The skill walks you through the 10-step framework and asks for data as needed.

## What You Get

- **Scorecard** — 6-area breakdown (authentication, reputation, bounce rates, triggers, hygiene, engagement) with specific findings
- **Health percentage** — 0-100% grade (Critical / Fair / Good / Excellent)
- **Remediation roadmap** — Prioritized list of fixes (Critical this week, High next week, Medium over 4 weeks)
- **Outcome projections** — Expected lift in open rates, bounce rates, and inbox placement post-fix
- **Follow-up audit date** — Scheduled check-in (30-60 days) to confirm improvements

## Common Workflows

- **Monthly pulse check**: Run a lightweight audit (Steps 1–3 only) to catch authentication or reputation changes early
- **Pre-campaign launch**: Audit before a major send to avoid deliverability disasters on your highest-stakes email
- **Post-migration verification**: After switching ESPs or IP pools, verify authentication and warm-up status
- **Quarterly full audit**: Run the complete 10-step framework to maintain inbox placement above 95%
- **Incident response**: When open rates suddenly drop or customers report missing emails, diagnose the root cause fast

---

_Seeing open rates decline? Paste your recent campaign metrics and I'll run the diagnostic._
