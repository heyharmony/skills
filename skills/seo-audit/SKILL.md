---
name: SEO Audit
description: Conduct comprehensive technical and on-page SEO analysis. Identify crawlability issues, indexation problems, Core Web Vitals gaps, meta tag optimization opportunities, heading structure issues, content quality gaps, E-E-A-T signals, internal linking weaknesses, keyword cannibalization, and rank-tracking issues. Perfect for diagnosing why traffic dropped, understanding why you're not ranking, checking site health, or planning content strategy overhauls. Covers robots.txt, sitemaps, site architecture, mobile performance, HTTPS configuration, title/description optimization, heading hierarchy, content depth, brand authority signals, anchor text quality, and keyword targeting conflicts.
role: Marketing
action: Analyze
connectors:
  - name: Google Drive
    reason: Access existing SEO audits, keyword research spreadsheets, competitor analysis docs
  - name: Slack
    reason: Reference team discussions about traffic drops, ranking issues, or site changes
  - name: HubSpot
    reason: Correlate page performance metrics with conversions and lead quality
  - name: Notion
    reason: Review content calendars, SEO documentation, and historical audit findings
author: "Harmony"
version: "1.0.0"
icon: "sparkles"
cover: ""
screenshots: []
category: "Marketing"
---

# SEO Audit

## Purpose
This skill performs a systematic SEO audit across technical foundations, on-page optimization, content quality, and site health. It surfaces actionable issues ranked by impact, helping marketing and product teams understand why traffic dropped, why specific keywords aren't ranking, or what needs to improve before scaling paid or organic campaigns.

## When to Use This
- **Traffic declined** — Diagnose what technical or indexation issues may have caused drops
- **Not ranking for target keywords** — Identify on-page gaps, content depth issues, or E-E-A-T weaknesses
- **Planning a content overhaul** — Baseline current state before restructuring site architecture or adding new pillar content
- **Launching a new product site** — Pre-launch SEO health check to avoid indexation or crawlability problems
- **Competitive positioning review** — Understand how your SEO foundation compares to market leaders
- **Quarterly SEO health check** — Routine audit to catch Core Web Vitals regression, new crawl errors, or broken internal links
- **After a major site migration or redesign** — Verify no pages were lost, redirects work, and crawlability recovered

## Instructions

1. **Gather site context and SEO goals.**
   - Identify the domain and current primary keyword targets (e.g., "HR software for SMBs," "managed cybersecurity services").
   - Note recent traffic changes, ranking losses, or business priorities (e.g., "traffic dropped 30% last month," "want to rank for 'enterprise scheduling' in next quarter").
   - Clarify audience type (B2B, B2C, local, global) and conversion goal (leads, SaaS trials, e-commerce, content consumption).

2. **Audit crawlability and indexation.**
   - Check robots.txt for disallowed paths that shouldn't be blocked (e.g., /blog, /pricing, /resources).
   - Review sitemap.xml — verify it exists, is submitted to Google Search Console, and includes high-priority pages.
   - Inspect site architecture: Is navigation shallow (2–3 clicks to any page) or deep? Are category and filter pages creating crawl traps?
   - Look for canonicalization issues: self-referential canonicals, chains, or incorrect cross-domain canonicals.

3. **Evaluate technical foundations.**
   - Core Web Vitals: Check Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS). Identify pages below Google's "good" thresholds.
   - Mobile responsiveness: Verify no horizontal scroll, text readability, tap target size (48px minimum). Test on real devices or use mobile-friendly test tools.
   - HTTPS and mixed content: Confirm all assets load over HTTPS; flag mixed-content warnings.
   - Server health: Identify 4xx (404, 401) and 5xx errors; prioritize 404s on high-traffic pages.

4. **Review on-page optimization.**
   - Title tags: Check length (50–60 characters), keyword inclusion, uniqueness, and call-to-action clarity.
   - Meta descriptions: Verify presence, length (155–160 characters), keyword relevance, and uniqueness; note any missing.
   - Heading structure: Confirm H1 presence and singularity; verify H2–H6 hierarchy follows logical flow; flag keyword repetition.
   - Image alt text: Audit for descriptive (not keyword-stuffed) alt text on all images; flag missing or generic alts.

5. **Assess content quality and E-E-A-T signals.**
   - Content depth: Compare word count and topic coverage (main keyword + related keywords) to top-ranking competitors.
   - Author authority: Check author bios, credentials, or bylines; verify author pages exist for branded content.
   - Brand trust signals: Identify reviews, case studies, testimonials, trust badges, or certifications visible on high-priority pages.
   - Content freshness: Flag pages not updated in 12+ months if topic requires recency (news, trends, how-tos).

6. **Analyze internal linking structure.**
   - Link density: Identify pages with excessive internal links (>100) or orphaned pages with <3 inbound links.
   - Anchor text: Flag over-optimized (all-keyword) anchors vs. natural, branded, or generic; note missing keyword targets.
   - Pillar-to-cluster links: Verify pillar pages link to topic clusters and clusters link back to pillars.
   - Broken links: Run crawl to surface 404 or redirect chains (more than one hop).

7. **Check keyword targeting and cannibalization.**
   - Keyword mapping: Verify each page targets distinct primary + secondary keywords without overlap.
   - Cannibalization: Flag multiple pages ranking for the same keyword; recommend consolidation or specialization.
   - Long-tail coverage: Assess whether you're capturing related keywords (e.g., "how to," "best," "vs.", problem-based) alongside main terms.
   - Search intent match: Confirm page format (guide, product, comparison, news) aligns with keyword intent.

8. **Prioritize findings by impact and effort.**
   - High impact: Indexation blockers, crawl errors on high-traffic pages, Core Web Vitals failures, missing/thin H1s, keyword cannibalization on money pages.
   - Medium impact: Meta description gaps, slow mobile pages, missing author bios, internal link orphans.
   - Low impact: Image alt text improvements, heading hierarchy tweaks, minor content updates.
   - Quick wins: Focus on changes deliverable in 1–2 weeks (title/meta updates, redirects, internal link adjustments).

9. **Document recommendations with rationale and timeline.**
   - For each finding, state the issue, why it matters (traffic, rankings, user experience), affected page count, and specific fix.
   - Suggest phased rollout: week 1 (indexation fixes), week 2–4 (on-page optimization), week 5+ (content depth and E-E-A-T).
   - Note dependencies: e.g., "Fix Core Web Vitals before expecting ranking gains for new content."

10. **Prepare output for stakeholder review and action.**
    - Create a ranked dashboard showing issue count by category (crawlability, technical, on-page, content).
    - Attach concrete data (traffic impact estimates, affected page counts, example pages).
    - Assign ownership (dev, content, product, marketing) and timelines.

## Output Format

Use this structure for your audit report:

```
SEO AUDIT REPORT: [Domain]
Audit Date: [Date]
Auditor: [Name/Role]
Primary Keywords: [List top 3–5 target keywords]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

EXECUTIVE SUMMARY
Overall Health Score: [X/100]
- Critical Issues: [Count]
- High-Priority Fixes: [Count]
- Quick Wins Available: [Count]
Traffic Impact (Est.): [0–20%, 20–50%, or 50%+]
Recommended Timeline: [2–8 weeks]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. CRAWLABILITY & INDEXATION
   Issue: [Title]
   Status: [Blocked/Warning/Review]
   Affected Pages: [Count/Examples]
   Impact: [What users/rankings lose]
   Fix: [Specific action]
   Effort: [1–5 days]

2. TECHNICAL FOUNDATIONS
   [Same structure as above]

3. ON-PAGE OPTIMIZATION
   [Same structure as above]

4. CONTENT QUALITY & E-E-A-T
   [Same structure as above]

5. INTERNAL LINKING
   [Same structure as above]

6. KEYWORD STRATEGY
   [Same structure as above]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

IMPLEMENTATION ROADMAP
Week 1: [Crawlability/indexation fixes]
Week 2–3: [Technical + on-page quick wins]
Week 4–6: [Content depth and E-E-A-T improvements]
Week 7–8: [Validation and monitoring]

Success Metrics:
- [e.g., Core Web Vitals "good" across top 20 pages]
- [e.g., Reduce crawl errors from 500 to <50]
- [e.g., Add author bios to top 10 content pieces]

Next Audit: [3 months or trigger-based]
```

## Example

```
SEO AUDIT REPORT: canopyhealthsoftware.com
Audit Date: March 2026
Auditor: Marketing SEO Team
Primary Keywords: Healthcare scheduling software, Patient engagement platform, EHR integration

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

EXECUTIVE SUMMARY
Overall Health Score: 62/100
- Critical Issues: 3
- High-Priority Fixes: 8
- Quick Wins Available: 12
Traffic Impact (Est.): 20–50% (likely from Core Web Vitals + keyword cannibalization)
Recommended Timeline: 6–8 weeks

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. CRAWLABILITY & INDEXATION
   Issue: Sitemap missing 47 high-traffic blog posts published in last 6 months
   Status: Blocked
   Affected Pages: 47 blog articles, 3–4 months live without sitemap inclusion
   Impact: Delayed indexing = slower ranking; missed organic visibility window
   Fix: Regenerate XML sitemap with date-based filtering; submit to GSC immediately
   Effort: 2 days (dev) + 1 day validation

   Issue: robots.txt disallows /resources/ directory (conversion-focused landing pages)
   Status: Blocked
   Affected Pages: 12 high-intent landing pages, 5K+ monthly clicks blocked from crawl
   Impact: Critical pages not crawled; zero ranking potential for target keywords
   Fix: Remove disallow rule; allow /resources/ in robots.txt
   Effort: 1 day

   Issue: Duplicate canonicals on /pricing page variants (?utm_source, ?ref parameters)
   Status: Warning
   Affected Pages: 1 page, but 50+ URL variants in search index
   Impact: Index bloat; diluted ranking signal; tracking parameters create crawl waste
   Fix: Add parameter handling in GSC; implement URL canonicalization in code; use UTM stripping
   Effort: 3 days (dev + analytics coordination)

2. TECHNICAL FOUNDATIONS
   Issue: LCP (Largest Contentful Paint) averages 3.2s on homepage, target <2.5s
   Status: Failing (Core Web Vitals)
   Affected Pages: Homepage, 12 landing pages, 8 key product pages
   Impact: ~18% CTR loss from SERPs; potential ranking drop if metric degrades further
   Fix: Optimize hero image (WebP + responsive srcset), defer non-critical JS, increase server response time
   Effort: 5–7 days (design + dev)

   Issue: CLS (Cumulative Layout Shift) = 0.18 on product pages; target <0.1
   Status: Failing (Core Web Vitals)
   Affected Pages: /product-features, /pricing, /demo-request, 15+ pages
   Impact: Poor UX → lower time-on-page, higher bounce; ranking penalty in progress
   Fix: Add size attributes to images/embeds; lazy-load ad slots; stabilize CTA button position
   Effort: 4 days (dev)

   Issue: 312 crawl errors (4xx, 5xx) in GSC; 89 are 404s on high-traffic product pages
   Status: Warning
   Affected Pages: Redirected product pages, deprecated help articles, /integrations/* pages
   Impact: Lost internal link equity; poor UX when users land on 404s
   Fix: Implement 301 redirects from old URLs; audit /integrations architecture; fix server errors
   Effort: 3 days (dev + QA)

3. ON-PAGE OPTIMIZATION
   Issue: 34 pages missing unique meta descriptions (auto-generated or identical copy)
   Status: Warning
   Affected Pages: Blog category pages, resource library landing pages
   Impact: CTR loss in SERPs (no preview); duplicate descriptions dilute click signal
   Fix: Write 34 unique, keyword-rich (155–160 char) meta descriptions; prioritize high-traffic pages first
   Effort: 2–3 days (content)

   Issue: Heading hierarchy broken on 8 blog articles (multiple H1s, H2 before H1)
   Status: Warning
   Affected Pages: 8 blog articles, each 3–5K words
   Impact: Reduced topical clarity for search engines; weaker keyword signal
   Fix: Restructure headings (single H1, logical H2–H3 flow); verify keyword in H1
   Effort: 1 day (content)

   Issue: 18 landing pages lack image alt text or have generic alts ("image123", "chart")
   Status: Low priority (but low-effort fix)
   Affected Pages: Case studies, webinar pages, /benefits section
   Impact: Minimal ranking impact; accessibility + image search opportunity
   Fix: Add descriptive, keyword-adjacent alt text (e.g., "EHR integration architecture diagram for healthcare software")
   Effort: 1 day (content)

4. CONTENT QUALITY & E-E-A-T
   Issue: Top 5 "healthcare scheduling software" pages lack author bios or credentials
   Status: High priority
   Affected Pages: /product overview, /use-cases/clinic, /use-cases/hospital, /blog/epic-integration, /blog/fhir-compliance
   Impact: Missing trust signal for E-E-A-T; competitors with author bios rank higher on similar keywords
   Fix: Add author bylines with credentials (e.g., "By Dr. Jane Smith, MD, Healthcare IT Specialist"); create author pages
   Effort: 2 days (content + design)

   Issue: Blog content averages 1.8K words; competitors average 3.5K+ for same keywords
   Status: High priority
   Affected Pages: 34 blog posts in "how-to" and "best practices" categories
   Impact: Thin content likely factor in not ranking; competitor articles have 2–3x more topical depth
   Fix: Audit top 20 posts; expand best performers to 3K+ words; add comparison tables, case study snippets, expert quotes
   Effort: 4–6 weeks (rolling content work)

   Issue: Case studies lack specific metrics; mostly testimonial-style (vague success language)
   Status: High priority
   Affected Pages: 7 case studies on /case-studies directory
   Impact: Weak social proof; reduced conversion on trust-critical pages; missing E-E-A-T signal
   Fix: Quantify results (e.g., "Reduced scheduling time by 34%," "Improved clinic utilization by 22%"), add before/after metrics, include customer details (size, specialty)
   Effort: 2 days (sales + marketing interviews)

5. INTERNAL LINKING
   Issue: 12 high-value blog posts have 0–2 internal links from product pages
   Status: High priority
   Affected Pages: Blog: /fhir-compliance, /epic-integration, /hl7-standards; Product pages not linking
   Impact: Blog authority/rankings capped; missed opportunity to guide users from product → educational content → conversion
   Fix: Map blog content to product pages; add contextual links from /integrations, /product-features to supporting blog posts
   Effort: 2 days (content + dev)

   Issue: Orphaned resource pages: 8 guides have 0 inbound internal links
   Status: Medium priority
   Affected Pages: /guide/patient-data-security, /guide/workflow-optimization, and 6 others
   Impact: Crawl depth issues; minimal internal ranking lift; no user path to these pages
   Fix: Add to /resources hub footer; create context-based links from related blog and product pages
   Effort: 1 day (content + design)

6. KEYWORD STRATEGY
   Issue: Keyword cannibalization: 3 pages competing for "patient engagement platform"
   Status: High priority
   Affected Pages: /product, /product/patient-engagement, /blog/patient-engagement-guide
   Impact: Rankings diluted; CTR lost; unclear to users which page is "canonical"
   Fix: Assign /product/patient-engagement as primary; add 301 from /product (if duplicate); differentiate blog post toward educational intent; consolidate internal links
   Effort: 2 days

   Issue: Missing long-tail cluster pages
   Status: Medium priority
   Affected Pages: None (gap)
   Impact: Not capturing "how-to," "best," "vs." variants of main keywords; competitor capturing these volume
   Fix: Create 8–12 cluster pages: /how-to-choose-healthcare-scheduling, /best-healthcare-ehr-for-clinics, /epic-vs-cerner-integration, etc.
   Effort: 6–8 weeks (research + writing + linkbuilding)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

IMPLEMENTATION ROADMAP
Week 1: Fix crawlability (robots.txt, sitemap, canonical), remove disallows, resubmit to GSC
Week 2–3: Core Web Vitals optimization (LCP images, CLS fixes), 404 redirects, meta descriptions, heading fixes
Week 4–6: Author bios, case study metrics, blog content expansion (rolling), internal linking updates
Week 7–8: Keyword consolidation, monitor GSC for crawl recovery, validate Core Web Vitals improvement

Success Metrics:
- Core Web Vitals "good" (LCP <2.5s, CLS <0.1) on 100% of top 20 pages by end week 6
- Reduce crawl errors from 312 to <50 by end week 3
- Index sitemap + blog posts within 48 hours of publication by week 2
- Add author bios to top 5 ranking pages by week 5
- Keyword cannibalization resolved: 1 primary + clear secondary ranking intent per page by week 7

Next Audit: June 2026 (quarterly) or sooner if traffic changes >10%
```

## Edge Cases

1. **Sites with no GSC/Analytics data.** Conduct crawl-based audit using SEO tools (Screaming Frog, Semrush, Ahrefs) to surface issues; focus on technical SEO, on-page structure, and content quality. Recommend setting up GSC/Analytics before re-audit.

2. **New or very small sites (<10K pages).** Full crawl is feasible; prioritize indexation + quick-win on-page fixes. Skip competitor benchmarking if insufficient similar-sized competitors; focus on fundamentals.

3. **Sites post-redesign or migration.** Prioritize crawlability, redirects, and indexation recovery. Expect 2–4 week lag before ranking stabilizes; re-audit at 4 and 8 weeks post-launch.

4. **International/multilingual sites.** Check hreflang implementation, language tag accuracy, and per-region indexation status in GSC. Audit each language variant separately if site structure permits.

5. **Content-heavy sites (100K+ pages).** Sample top 5% by traffic/priority; crawl secondary sections on rotation. Recommend ongoing monitoring (quarterly) vs. one-time audit.

6. **Ecommerce with dynamic filtering.** Address parameter handling in robots.txt/sitemap; audit faceted navigation for crawl waste. May need URL parameter tool in GSC to consolidate filter combinations.
