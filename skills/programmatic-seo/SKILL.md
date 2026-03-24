---
name: Programmatic SEO
description: Build SEO-driven pages at scale using templates, data, and keyword-driven playbooks
role: Marketing
action: Create
connectors:
  - Google Drive: keyword research, competitive data, source spreadsheets
  - HubSpot: customer integrations list, feature requests, demand signals
  - Slack: team input on high-value comparisons, integration requests from sales
  - Notion: page templates, content frameworks, page inventory tracking
  - Linear: dev tickets for page generation automation, performance issues
keywords:
  - programmatic SEO
  - template pages
  - pages at scale
  - directory pages
  - comparison pages
  - integration pages
  - pSEO
  - location pages
  - data-driven pages
---

# Programmatic SEO

## Purpose
Create hundreds of SEO-winning pages at scale by choosing a playbook (comparisons, integrations, locations, etc.), designing a template, sourcing data, and building internal linking architecture. This skill guides you from keyword validation through launch, ensuring every generated page adds unique value to your site structure.

## When to Use
1. **You have keyword patterns but need pages**: You've identified 40+ similar searches (e.g., "Fieldwork vs Competitor A", "Fieldwork vs Competitor B"). A template removes the manual writing bottleneck.
2. **Sales/support reveals recurring questions**: Your team hears the same comparison request (e.g., "How does Fieldwork compare to ServiceMax?") or integration request (e.g., "Do you integrate with Slack?") repeatedly across calls.
3. **You want to rank for long-tail variants**: Instead of writing 10 comparison pages by hand, generate 40+ and capture "Fieldwork vs Zapier", "Fieldwork vs Make", "Fieldwork vs Power Automate" with one template.
4. **You have structured data but no pages**: Your HubSpot lists 200 integrations or your database has 500 locations. Programmatic pages turn that data into organic traffic.
5. **Competitors dominate specific keyword clusters**: A competitor has 30 comparison pages and you have zero. Quickly close the gap with a reproducible template.
6. **Your content team is resource-constrained**: You can't hire 10 writers to cover all variants. Automation lets 2 people scale to 200 pages.
7. **You need internal linking architecture**: These templated pages create natural hub-and-spoke linking (all comparisons link to main "integrations" hub), boosting site authority.

## Instructions

**Step 1: Identify keyword patterns and validate demand**
- Pull your top 100 organic keywords from Google Search Console. Look for repeating patterns: "X vs Y", "X integration", "X for [industry]", "X in [location]".
- Run 5–10 patterns through a keyword research tool (Google Keyword Planner, Ahrefs, SEMrush). Target 50+ searches/month per pattern (e.g., "Fieldwork vs Jira" = 180 searches/month).
- Validate demand through internal signals: Slack search for "vs", support tickets mentioning competitors, HubSpot notes about feature requests.
- Document your top 3–5 playbook opportunities. Example: "Comparison pages" (400 potential URLs), "Integration pages" (200 URLs), "Industry guides" (50 URLs).

**Step 2: Choose your playbook**
- Match keyword patterns to a playbook type:
  - **Comparisons**: "X vs Y" → comparative analysis pages
  - **Integrations**: "X with Y" → how-to integration pages
  - **Locations**: "X in [city]" → local landing pages
  - **Glossary**: "What is X" → definition + use case pages
  - **Personas**: "[Role] guide to X" → audience-specific guides
  - **Examples**: "X case studies" → customer story collections
  - **Directory**: "X partners", "X tools" → curated lists
  - **Profiles**: "X alternatives" → alternative/competitor profiles
- Prioritize by search volume × relevance. Start with one playbook; prove the model before expanding.

**Step 3: Design your page template**
- Map the unique value for each page variation. Example: a comparison page must have 5+ unique sections (feature matrix, ROI analysis, migration path, customer use cases, pricing comparison).
- Outline the template structure:
  - **Intro**: Hook + thesis (e.g., "Fieldwork and Zapier solve automation, but differ in [2–3 key ways]")
  - **Core sections**: 3–5 unique comparison/analysis blocks
  - **Unique data**: 1–2 proprietary elements per page (e.g., customer case studies mentioning both tools)
  - **CTA**: Specific next step (demo for Fieldwork, test drive, comparison guide download)
  - **Internal links**: 3–5 links to related pages (other comparisons, solution pages, integration guides)
- Use Notion to document the template. Include fields for dynamic content (tool name, product category, pricing data) and static copy.

**Step 4: Source your data**
- **Prioritize proprietary data**: Customer interviews reveal which integrations matter most; Slack archives show which competitors come up in deals; HubSpot lists show feature requests.
- **Supplement with public data**: Competitor websites, G2 reviews, integration marketplace listings, public APIs.
- **Structure in a spreadsheet** (Google Drive or Notion database):
  - Column 1: Page slug (e.g., "fieldwork-vs-zapier")
  - Columns 2–10: Template fields (tool name, category, unique stat, customer use case, integration steps, etc.)
  - Flag data quality (proprietary, verified, estimated) so you know what needs review.
- **Validate completeness**: Before templating, manually write 2–3 high-value pages to test the template. Refine based on what feels repetitive vs. unique.

**Step 5: Define your URL structure**
- Use **subfolder structure, not subdomains**. Example: `/comparisons/fieldwork-vs-zapier`, not `comparisons.example.com`.
- Subfolder structure keeps link juice in one domain and makes internal linking easier.
- Organize by playbook: `/comparisons/`, `/integrations/`, `/locations/`, `/glossary/`.
- Use keyword-rich slugs: `/integrations/fieldwork-slack-integration` beats `/integrations/slack-123`.

**Step 6: Build your internal linking architecture**
- Design a **hub-and-spoke model**:
  - **Hub**: One main "Integrations" page linking to all 200 integration pages
  - **Spokes**: Each integration page links back to the hub + 3–5 related integration pages (e.g., Fieldwork-Slack links to Fieldwork-Zapier, Fieldwork-Make, related comparison pages)
  - Hub page gets power: Rank for "Fieldwork integrations" (high volume), and passes link equity to spokes
- Use contextual anchor text: "See all [topic]" links back to hub; "Related: [similar page]" for spoke-to-spoke links.
- Limit spoke-to-spoke links to prevent over-linking: 3–5 per page keeps it clean.

**Step 7: Implement quality checks and indexation strategy**
- **Pre-launch QA**: Run each page template through a checklist:
  - [ ] Core content is unique per page (not just find-and-replace names)
  - [ ] Internal links work and use keyword-rich anchor text
  - [ ] Page has clear CTA relevant to comparison/integration (not generic)
  - [ ] Meta title and description are unique and under 60/160 chars
  - [ ] No duplicate content across playbooks (e.g., a comparison page shouldn't repeat info from a glossary page)
- **Indexation**: Add a sitemap pointing to all generated URLs. Manually submit 20–30 high-value pages to Google Search Console. Set crawl budget (Google crawls most frequently accessed pages first).
- **Monitor first 30 days**: Use Google Search Console to check indexation status. If pages aren't indexing, check for noindex tags or robots.txt blocks.

**Step 8: Launch and monitor**
- Batch-generate pages (don't launch all 200 at once; start with 50, wait 2 weeks, assess indexation and CTR).
- Track metrics:
  - Indexation rate (%) within 30 days
  - Click-through rate (%) from SERP
  - Average position for each page's primary keyword
  - Internal link click-through (are users clicking hub → spokes?)
- Iterate: High-CTR pages → double down on those keywords. Low performers → refine template or prioritize different keywords.

## Output Format

When you execute this skill, generate:

1. **Keyword Opportunity Report** (1 page)
   - Pattern identified (e.g., "Comparisons")
   - Primary keywords + search volume
   - Estimated page count
   - Playbook type chosen
   - High-confidence (>80% rank potential) opportunities

2. **Page Template Documentation** (2–3 pages)
   - Template name and purpose
   - URL structure and slug pattern
   - Content sections with field mappings (static copy + dynamic fields)
   - Example of one filled-in page
   - Internal linking strategy
   - Meta title/description formula

3. **Data Source Inventory** (1 page)
   - Playbook type
   - Data fields needed
   - Source location (HubSpot? Google Drive? Slack?)
   - Data quality notes (proprietary, public, verified)
   - Missing data gaps to address

4. **Quality Checklist** (1 page)
   - Pre-launch QA steps
   - Indexation monitoring checklist
   - 30-day success metrics
   - Escalation criteria (when to pause generation and debug)

5. **Next Steps & Timeline** (0.5 pages)
   - Month 1: Design + 20-page pilot
   - Month 2: Analyze pilot + scale to 100 pages
   - Month 3: Monitor + iterate on template
   - Links to Notion templates and Linear tickets

## Example

### Scenario: Fieldwork (field service management SaaS) launches integration pages at scale

**Keyword opportunity identified**: "Fieldwork integration" variations.
- "Fieldwork Slack integration" = 320 searches/month
- "Fieldwork Zapier integration" = 280 searches/month
- "Fieldwork with Make integration" = 210 searches/month
- 38 high-demand integrations identified (100–500 searches/month each)
- Estimated total search volume: 9,200 monthly searches

**Playbook chosen**: Integration playbooks (how to integrate Fieldwork with X).

**Page template for Fieldwork-Slack**:
- **URL**: `/integrations/fieldwork-slack-integration`
- **Meta title**: "Connect Fieldwork to Slack: Instant Job Alerts & Team Updates" (59 chars)
- **Meta description**: "Integrate Fieldwork with Slack to get real-time job notifications, team updates, and mobile push alerts. Step-by-step setup." (117 chars)

**Template sections**:
1. **Intro**: "Fieldwork's Slack integration keeps your team in sync. Get instant notifications when jobs are assigned, completed, or blocked—without leaving Slack."
2. **Benefits table**:
   - Real-time job notifications (unique: Fieldwork's automation)
   - Two-way updates (unique: team can ack jobs in Slack)
   - Mobile-first alerts (shared value with competitors)
3. **How it works** (step-by-step with screenshots):
   - Install Fieldwork Slack app
   - Authenticate Fieldwork account
   - Configure notification rules
   - Test with a job
4. **Use case**: "A landscaping crew using Fieldwork saved 2 hours/week by routing jobs through Slack instead of switching apps. Team response time improved 40%."
5. **Pricing**: "Free with Fieldwork. No separate Slack subscription required."
6. **Related pages**: Internal links to:
   - `/integrations/` (hub)
   - `/integrations/fieldwork-zapier-integration` (spoke)
   - `/integrations/fieldwork-make-integration` (spoke)
   - `/comparisons/fieldwork-vs-jira` (adjacent)
   - `/glossary/field-service-automation` (contextual)

**Data sources**:
- HubSpot: Integration list, customer use cases, support ticket volume by integration
- Slack: #integrations channel mentions of Fieldwork + Slack (demand signal)
- Google Drive: Public integration marketplace data + competitor feature comparison
- Notion: Template framework + page inventory tracker

**Generated URLs** (first wave, 20 pages):
- `/integrations/fieldwork-slack-integration`
- `/integrations/fieldwork-zapier-integration`
- `/integrations/fieldwork-make-integration`
- ... (17 more)

**Hub page** (`/integrations/`):
- Title: "Fieldwork Integrations: 38 Tools to Streamline Field Service"
- Content: Overview of integration categories (workflow automation, CRM, accounting, comms)
- Links: All 38 integration pages + ecosystem guides
- Expected ranking: "Fieldwork integrations", "field service management integrations"
- Expected traffic: 500–800 visits/month (hub), 100–150 visits/month per spoke

**Quality checks**:
- [ ] Each page highlights 1–2 unique benefits (not generic "Get real-time updates")
- [ ] Meta titles vary by integration (Slack ≠ Zapier)
- [ ] Internal links use contextual anchor text ("See all Fieldwork integrations" links back to hub)
- [ ] No pagination issues (all pages crawlable)
- [ ] No duplicate content (glossary pages define terms; integration pages show applications)

**Success metrics** (Month 1):
- Indexation: 18/20 pages indexed within 14 days (90%)
- Impressions: 450 impressions across all pages in month 1
- CTR: 8–12% from SERP (typical for comparisons/integrations)
- Onsite traffic: 30–40% of visitors click to hub or related integration

**Month 2 iteration**:
- Scale to 38 full integrations
- Add "vs integrations" section to top performers (e.g., Fieldwork-Zapier page also compares Zapier alternatives)
- Double down on Slack/Zapier/Make (top traffic drivers)

## Edge Cases

1. **Your data is incomplete**: You have 15 integrations but want to rank for 38. Start with those 15; don't force pages without data. Or: Batch-create placeholder pages and fill data as it comes in (risks thin content—avoid).
2. **Competitor launches similar pages**: You're not alone. Differentiate by adding proprietary data (customer case studies, internal benchmarks). Speed matters: first to market captures ranking for 6+ months.
3. **Your template becomes outdated**: Set a quarterly refresh schedule. When a major competitor launches a feature, audit affected pages and add differentiation (e.g., "Fieldwork vs Zapier 2026: Here's what changed").
4. **Thin content risk**: If every page is <800 words, Google may deprioritize. Add depth: case studies, integration troubleshooting, pricing breakdowns, team collaboration scenarios. Aim for 1,200+ words.
5. **Cannibalization within playbook**: Your "Fieldwork vs Zapier" page and "Zapier alternatives" page both target the same keyword. Use different angles: comparison (vs page) is buyer-focused; alternatives page is explorer-focused. Link between them.
6. **Indexation stalled at 50%**: Check robots.txt, meta robots, crawl budget. Submit sitemap to GSC. If still stuck, reduce page count and quality-focus: 50 great pages beat 200 mediocre ones.

---

**Next Steps**:
- Audit your top 100 keywords in Google Search Console for pattern opportunities
- Scan Slack for recurring "vs" and "integration" questions
- Choose one playbook and design 1–2 pilot pages by hand
- Document your template in Notion and share with team
- Create a Linear ticket for page generation and indexation tracking

