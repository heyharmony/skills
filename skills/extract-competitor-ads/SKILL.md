---
name: "Extract Competitor Ads"
description: "Extract and analyze competitors' ads from Meta, Google, and LinkedIn ad libraries — surface messaging patterns, creative strategies, spend signals, and positioning gaps. Trigger on: competitor ads, ad intelligence, what are competitors running, competitive ads, ad library, competitive creative."
dependencies: []
connectors:
  - name: "HubSpot"
    reason: "Pull competitor mentions from deal notes and contact records for targeted research"
  - name: "Slack"
    reason: "Surface competitive intel shared by sales and marketing teams in channels"
  - name: "Google Drive"
    reason: "Store ad screenshots and analysis in shared competitive intelligence folders"
  - name: "Notion"
    reason: "Update competitive wiki pages with latest ad intelligence findings"
author: "Harmony"
version: "1.0.0"
icon: "sparkles"
cover: ""
screenshots: []
category: "Sales"
---

## Purpose

This skill systematically discovers and analyzes competitors' advertising across Meta Ad Library, Google Ads Transparency Center, and LinkedIn Ads to identify messaging patterns, creative strategies, call-to-action approaches, and spending signals. The output surfaces positioning gaps, creative innovation, and competitive threats that inform product positioning, marketing strategy, and campaign planning.

## When to Use

**Trigger conversations in Harmony:**
- "What are our competitors running on paid advertising?"
- "Pull ads from PeopleForce, WorkStack, and TalentHub so we can benchmark messaging"
- "I need competitive creative analysis for our Q2 positioning workshop"
- "Find out how much our competitors are spending on LinkedIn ads"
- "What messaging themes are competitors using in their ad copy?"

**Ideal for:**
- Quarterly competitive analysis cycles
- Pre-launch campaign planning and positioning
- Sales enablement (arming reps with competitive intel)
- Marketing performance benchmarking
- Budget allocation decisions
- Creative ideation workshops
- Positioning strategy meetings

## Instructions

### Step 1: Define Scope and Competitors
- List 3–5 primary competitors by name and industry vertical
- Define research parameters: platforms (Meta, Google, LinkedIn), date range (30/60/90 days), geographic regions (US/EMEA/APAC), audience segments
- Identify if research is reactive (triggered by sales intel, customer feedback) or proactive (quarterly benchmark)

### Step 2: Extract Ads from Meta Ad Library
- Navigate to Facebook Ads Library (facebook.com/ads/library)
- Search each competitor company by name
- Collect 15–25 active ads per competitor
- Screenshot or export: headline, primary text, CTA button, image/video, estimated spend range, date active
- Note: Meta shows estimated spend levels (Low/Medium/High) but not exact figures

### Step 3: Extract Ads from Google Ads Transparency Center
- Visit Google Ads Transparency Center (adstransparency.google.com)
- Search each competitor domain
- Identify active search and display ads
- Export: ad headline, landing page URL, estimated impressions and spend
- Note: Google data is less granular; focus on messaging and landing page strategy

### Step 4: Extract Ads from LinkedIn Campaign Manager (if available)
- If you have LinkedIn premium or company admin access, use LinkedIn Campaign Manager to research competitor ads
- Alternate: Review organic LinkedIn posts with high engagement that signal paid amplification
- Catalog: headline, copy, CTA, creative asset type (carousel, video, static), engagement metrics

### Step 5: Catalog Creative Elements
- For each ad, extract and standardize:
  - **Headline**: Primary value proposition stated in first line
  - **Copy**: Body text (tone, length, pain point framing, benefit focus)
  - **CTA**: Button text and action (Learn More, Free Trial, Watch Demo, Schedule Call)
  - **Visual**: Asset type (photo, video, carousel, infographic), primary color palette, subject (people, product, data, lifestyle)
  - **Landing Page**: URL destination, page type (pricing, product tour, webinar, free tool)
  - **Date Active**: When ad was first detected and last active date
  - **Estimated Spend**: Range if available (Meta only)

### Step 6: Identify Messaging Patterns
- Group ads by theme: product benefits, cost/ROI, ease of use, customer success, industry authority, trust/security, time-saving, competitive differentiation
- Count frequency of each theme across all competitors
- Note dominant narratives (e.g., "3 of 5 competitors emphasize ROI/payback")
- Identify whitespace: themes competitors are NOT using

### Step 7: Score Ad Effectiveness Signals
- **Longevity**: Ads running 60+ days signal strong performance; newer ads signal testing
- **Variations**: Multiple ad variants from same competitor indicate optimization and budget investment
- **Spend Level**: High spend on specific ads indicates performance and market focus
- **Landing Page Coherence**: Ad copy-to-landing-page alignment signals mature campaign management
- **CTA Consistency**: Repeated CTAs across ads indicate strategic prioritization

### Step 8: Deliver Competitive Ad Report
- Create structured output with sections: Executive Summary, Competitor Profiles, Messaging Benchmarks, Creative Strategies, Spend Signals, Positioning Gaps, Recommendations
- Highlight 2–3 key competitive threats and 2–3 positioning opportunities
- Attach screenshots or links for reference
- Store in shared competitive intelligence folder (Notion wiki, Google Drive, or HubSpot)

## Output Format

```
# Competitive Ad Intelligence Report
[Date] | Analyzed: [Company Names] | Platforms: Meta, Google, LinkedIn

## Executive Summary
[1–2 sentences on key findings and strategic implications]

## Competitor Profiles

### Competitor 1: [Name]
- **Platforms Active On**: [List]
- **Ad Volume**: [Number of unique ads]
- **Estimated Spend Level**: [Low/Medium/High]
- **Primary Messaging Themes**: [List 3–4]
- **CTA Strategy**: [Dominant CTA buttons]
- **Creative Approach**: [Visual style, asset types used]
- **Landing Pages**: [Destination strategy]

### Competitor 2: [Name]
[Same structure]

## Messaging Benchmarks

### Theme Frequency Analysis
| Theme | Competitor 1 | Competitor 2 | Competitor 3 | Industry Avg |
|-------|---|---|---|---|
| ROI/Payback | 8 ads | 5 ads | 3 ads | 5.3 ads |
| Ease of Use | 6 ads | 4 ads | 7 ads | 5.7 ads |
| [Theme] | [Count] | [Count] | [Count] | [Avg] |

### Messaging Gaps
- **Underutilized**: [Themes used by <2 competitors]
- **Whitespace**: [Themes used by 0 competitors]

## Creative Strategies

### Visual Approaches
- [Competitor 1]: [Description of dominant visual strategy]
- [Competitor 2]: [Description]

### Copy Tone & Length
- [Tone findings and word count ranges observed]

### CTA Analysis
- Most Common CTAs: [List with frequency]
- Emerging CTAs: [New or less common buttons]

## Spend Signals
- [High-spend ads and probable focus areas]
- [Budget allocation patterns]

## Positioning Gaps & Opportunities
1. **Gap 1**: [Identified whitespace] → Opportunity for [Your Positioning]
2. **Gap 2**: [Competitive vulnerability] → Recommendation: [Action]

## Recommendations
- [Strategic action 1]
- [Strategic action 2]
- [Strategic action 3]

## Supporting Materials
- [Links to ad library screenshots]
- [Shared folder location]
```

## Example

**Scenario**: Brightpath (fictional HR tech platform for mid-market companies) is analyzing Q1 competitor ads. Target competitors: PeopleForce (enterprise HR), WorkStack (SMB HR platform), TalentHub (hybrid ATS + HR).

### Executive Summary
Competitive analysis across Meta, Google, and LinkedIn reveals three distinct positioning strategies: PeopleForce emphasizes enterprise compliance and scale (estimated high spend), WorkStack focuses on ease-of-use and fast ROI (8 active ads with 30–60 day lifespan), and TalentHub leads with talent acquisition efficiency (strong video creative, emerging spend). Opportunity identified: no competitor is emphasizing "company culture" or "employee engagement," a whitespace positioning for Brightpath.

### Competitor Profiles

**PeopleForce**
- Platforms Active: Meta (12 ads), Google (7 ads), LinkedIn (3 sponsored posts)
- Ad Volume: 22 unique ads across Q1
- Estimated Spend: High (red indicator on Meta Ad Library)
- Primary Messaging Themes: Compliance + Scale, Global Payroll, Admin Efficiency, Enterprise Trust
- CTA Strategy: "Schedule Demo" (9 ads), "Free Trial" (4 ads), "Learn More" (6 ads)
- Creative Approach: Blue/white color palette, headshot + dashboard screenshots, professional tone, video length 20–45 seconds
- Landing Pages: Demo booking form (peopleforce.com/demo), product tour video, case study pages

**WorkStack**
- Platforms Active: Meta (8 ads), Google (5 ads)
- Ad Volume: 13 unique ads across Q1
- Estimated Spend: Medium (yellow indicator on Meta)
- Primary Messaging Themes: Faster Setup, Cost Savings, SMB-Friendly, 2-Week Payback
- CTA Strategy: "Start Free Trial" (6 ads), "See ROI Calculator" (3 ads)
- Creative Approach: Green/white, animated calculator graphics, customer testimonial videos, casual tone
- Landing Pages: Free trial signup, ROI calculator, SMB comparison guide

**TalentHub**
- Platforms Active: Meta (6 ads), LinkedIn (8 sponsored posts), Google (2 ads)
- Ad Volume: 16 unique ads across Q1
- Estimated Spend: Medium-High
- Primary Messaging Themes: Hiring Speed, Candidate Quality, AI-Powered Matching, Time-to-Hire
- CTA Strategy: "Book Demo" (5 ads), "Get Demo" (7 ads), "View Case Study" (2 ads)
- Creative Approach: Dynamic video (hiring workflows), diverse candidate visuals, modern brand colors (teal/purple), LinkedIn-native carousel ads
- Landing Pages: Hiring demo, case study library, free assessment tool

### Messaging Benchmarks

**Theme Frequency**
| Theme | PeopleForce | WorkStack | TalentHub | Frequency |
|-------|---|---|---|---|
| Compliance/Security | 6 ads | 1 ad | 0 ads | 33% |
| Cost/ROI | 2 ads | 8 ads | 1 ad | 37% |
| Speed/Efficiency | 4 ads | 3 ads | 7 ads | 47% |
| Ease of Use | 2 ads | 6 ads | 2 ads | 33% |
| Culture/Engagement | 0 ads | 0 ads | 0 ads | 0% |
| AI/Automation | 1 ad | 1 ad | 5 ads | 23% |

**Messaging Gaps**
- Underutilized: Company culture, employee engagement, retention and development, employer brand building
- Whitespace: Generational workforce planning, work-life balance, DE&I compliance

### Creative Strategies

**Visual Approaches**
- PeopleForce: Dashboard screenshots + executive headshots, professional photography, enterprise aesthetic
- WorkStack: Animated explainers, customer quote cards, ROI graphics and calculators
- TalentHub: Video-first approach, diverse candidate/hiring manager visuals, workflow animations

**Copy Tone & Length**
- PeopleForce: Formal, compliance-focused, 20–40 words in ad body
- WorkStack: Benefit-driven, conversational, 15–30 words (emphasis on speed and ROI metrics)
- TalentHub: Action-oriented, data-backed, 18–35 words (quotes from hiring managers)

**CTA Analysis**
- Most Common: "Schedule Demo" (14 ads), "Free Trial" (10 ads), "Learn More" (6 ads)
- Emerging: "Book Demo," "View Case Study," "Try Free"
- Observation: Demo bookings outnumber free trial signups 2:1, indicating enterprise-focused sales motion

### Spend Signals
- **High-Spend Ads**: PeopleForce compliance module ads (estimated high spend, 90+ day lifespan) signaling major market focus and ROI
- **Budget Allocation**: Competitors are splitting 60% to SMB/mid-market cost messaging, 25% to compliance/scale, 15% to speed/AI
- **Platform Allocation**: Meta dominance (36 ads total) indicates B2B2C targeting of HR decision-makers; LinkedIn underutilized (11 ads)

### Positioning Gaps & Opportunities

1. **Gap: Employee Engagement & Culture**
   - No competitor is messaging on company culture, retention, or engagement outcomes
   - Opportunity: Brightpath can position as "The HR platform that builds company culture" vs. operational efficiency narratives
   - Action: Test messaging that bridges compliance + culture (differentiation from WorkStack's cost focus)

2. **Gap: Retention & Development**
   - Competitors focus on hiring speed and payroll, not talent development
   - Opportunity: Create campaign emphasizing 401k, PTO, development tools, retention metrics
   - Action: Develop case study around "reduced turnover" and "improved retention rates"

3. **Gap: Video Creative on LinkedIn**
   - TalentHub only has 8 LinkedIn ads; clear underinvestment vs. Meta
   - Opportunity: Increase LinkedIn video ads emphasizing long-term talent strategy vs. tactical hiring
   - Action: Produce 5–6 LinkedIn videos targeting HR leaders (VPs/Directors)

### Recommendations

1. **Messaging Strategy**: Lead with "Company Culture Driven by HR" positioning — test messaging on employee engagement, retention, and employer brand alongside compliance and efficiency
2. **Creative Testing**: Develop 3 video creative variants (culture-focused, ROI-focused, ease-of-use-focused) for A/B testing on Meta; track engagement to inform Q2 strategy
3. **Platform Allocation**: Increase LinkedIn spend to match TalentHub (currently 5% of competitor ads on LinkedIn); test more video-first creative on LinkedIn targeting HR leaders
4. **Sales Enablement**: Arm sales team with competitive positioning sheet noting Brightpath's culture + engagement differentiation vs. WorkStack's cost focus and PeopleForce's enterprise compliance

## Edge Cases

**Limited Public Ad Data**
- Some competitors may have minimal public ad spend (private companies, limited budgets)
- Workaround: Supplement with organic social listening (LinkedIn posts, Twitter mentions) and manual competitor site research
- Flag in report: "Limited ad data available for [Competitor]; insights based on organic channels"

**Rapidly Changing Ad Creative**
- Ads are frequently updated; snapshots can be outdated within weeks
- Best Practice: Set a recurring research cadence (monthly or quarterly) and note date ranges in report
- Track historical changes to identify strategic shifts

**Regional/Audience-Based Ad Variation**
- Meta and Google show different ads to different users based on location, interests, demographics
- Mitigation: Run research from multiple geographic regions or audience profiles (if possible with LinkedIn Premium)
- Note in methodology: "Ad data collected from [Region/Profile]"

**Platform Availability Differences**
- Google Ads Transparency Center shows less detail than Meta Ad Library
- Expect fewer impressions/spend estimates from Google
- Prioritize Meta and LinkedIn for detailed competitive analysis

**Privacy and Legal Considerations**
- Ad library data is public and intended for research; no scraping violations
- Do not use competitor data for direct email targeting or list building
- Flag sensitive findings (exact spend, confidential messaging) as internal use only

## Support

For questions on running this skill or interpreting competitive findings, refer to:
- [Harmony Competitive Research Best Practices](link)
- [Ad Library Navigation Guide](link)
- Your marketing strategy lead or VP of Marketing
