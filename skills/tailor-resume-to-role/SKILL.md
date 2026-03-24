---
name: "Tailor Resume to Role"
description: "Tailor a resume to a specific job posting — match keywords, reorder experience, highlight relevant achievements, and optimize for ATS screening. Trigger on: tailor resume, customize resume, resume for this job, match resume to job, resume optimization, job application."
dependencies: []
connectors:
  - name: "Google Drive"
    reason: "Pull existing resume documents and cover letter templates"
  - name: "Notion"
    reason: "Reference career goals, skill inventories, and past application tracking"
  - name: "Gmail"
    reason: "Pull job posting emails and recruiter correspondence for context"
  - name: "LinkedIn"
    reason: "Reference profile data and endorsements for skills validation"
---

# Purpose

Generate a tailored resume that positions a candidate as the ideal fit for a specific job posting. This skill analyzes job description requirements, extracts keywords and priority competencies, maps candidate experience to JD needs, identifies transferable skills and gaps, and restructures the resume to emphasize relevance. Output includes an optimized resume, match score (0-100%), and gap analysis with recommendations.

# When to Use

- **Job application prep**: Tailoring resume before submitting application
- **Recruiter outreach response**: Customizing resume when approached by recruiter for specific role
- **Career transition**: Repositioning experience when moving into new industry or role type
- **Gap identification**: Understanding what experience or skills are missing vs. ideal candidate profile
- **ATS optimization**: Ensuring resume passes applicant tracking system scanning without losing personality
- **Interview preparation**: Aligning resume narrative to match JD priorities for talking points
- **Multiple applications**: Rapidly iterating resume across similar roles at different companies

# Instructions

## Step 1: Gather Input Data
Collect:
- **Current resume** (full text, can include LinkedIn profile)
- **Target job posting** (full JD text, ideally with title, company, salary, and level)
- **Candidate context** (current role, years of experience, industry background, key wins)

Validate that job posting is substantive (not a template) and candidate has at least 30% overlap with requirements.

## Step 2: Parse Job Description
Extract and categorize:
- **Must-have requirements** (years of experience, certifications, core skills)
- **Nice-to-have requirements** (languages, tools, secondary skills)
- **Soft skills** (leadership, communication, collaboration, problem-solving)
- **Success metrics/outcomes** (what does the role optimize for? Revenue? Efficiency? Launch speed?)
- **Reporting line** (who's the manager? What's the organizational context?)
- **Keywords** (high-frequency words and phrases to embed in resume)

Identify 15-20 top keywords that appear in JD or industry standards for this role.

## Step 3: Map Candidate Experience to JD
For each major job on candidate's resume:
- List achievements/responsibilities
- Cross-reference against JD requirements
- Assign relevance score (high/medium/low)
- Flag transferable skills (skills from unrelated role that map to JD need)

Example: If JD emphasizes "cross-functional collaboration" and candidate was "sole IC engineer," highlight projects where candidate worked with design, product, marketing to ship features.

## Step 4: Identify Gaps & Transferable Skills
**Gaps:**
- Hard skills missing (e.g., candidate has 3 years Python, JD wants 5 years)
- Domain experience gaps (e.g., candidate's SaaS background, JD is fintech)
- Soft skill gaps (e.g., JD emphasizes public speaking, candidate's background is individual contributor)
- Level gaps (e.g., JD is manager-level, candidate is IC level)

**Transferable skills** (play up):
- Leadership at a startup can translate to leadership in larger org
- Technical depth can compensate for breadth gaps
- Cross-functional project experience can highlight adaptability
- Bootstrapped product can highlight scrappiness and resourcefulness

## Step 5: Rewrite Bullet Points
For each relevant achievement, rewrite to:
- **Lead with action verb** that reflects JD priorities (e.g., if JD values "scaling," use "scaled"; if it values "efficiency," use "optimized")
- **Embed 2-3 keywords** from JD naturally (not forced)
- **Quantify impact** (revenue, efficiency, speed, user growth, etc.) where possible
- **Use JD language** (adopt terminology from posting; if JD says "product-market fit," candidate should use that phrase, not "product success")
- **Subordinate irrelevant details** (move nice-but-unrelated achievements lower or remove)

Example rewrite:
- *Before*: "Led engineering team across multiple projects"
- *After*: "Scaled engineering team from 3 to 12 while maintaining shipping velocity—delivered 4 major product releases and reduced deployment cycle time by 40%"

## Step 6: Restructure Resume for JD Priority
- **Reorder experience** to lead with most relevant role(s), not chronological order
- **Elevate top 2-3 achievements** that directly match JD priorities
- **Consolidate older/less-relevant roles** into 1-2 bullet points instead of 5
- **Front-load skills section** with keywords from JD; use checkboxes or bold to highlight top 5 JD-critical skills
- **Emphasize education** if it directly matches JD (e.g., MBA for business role; Computer Science for engineering role); de-emphasize if tangential
- **Add targeted summary** (2-3 lines) that bridges candidate's background to this specific role

## Step 7: Optimize for ATS
- **Use standard formatting**: single column, clear section headers, no tables/graphics
- **Keyword density**: aim for 5-8% density of top JD keywords (e.g., in 500-word resume, "agile" appears 2-3x)
- **Section headers match ATS expectations**: Experience, Education, Skills, Certifications (not "Background" or "Work History")
- **Dates in MM/YYYY format**: consistency helps parsing
- **Remove graphics, logos, colors, text boxes**: ATS reads plain text only
- **Match terminology**: if JD says "Python" not "Python 3.9," use their terminology

Validate: Remove resume through free ATS checker (e.g., jobscan.pro) and compare keyword coverage vs. JD.

## Step 8: Generate Match Score & Gap Analysis
**Match score** (0-100%):
- Must-have requirements: 40 points max (each major requirement = portion of 40)
- Nice-to-have requirements: 30 points max
- Soft skills + cultural fit: 20 points max
- Keywords present in resume: 10 points max

Flag score <60% as likely rejection threshold; 60-75% as competitive; 75%+ as strong candidate.

**Gap analysis** should include:
- Hard skill gaps and how to address (online course, internal training, adjacent experience compensation)
- Experience level mismatches (e.g., "candidate has 5 yrs as IC, role needs manager; recommend highlighting team mentoring and project leadership")
- Industry/domain gaps (e.g., "candidate's retail background; recommend leading with digital transformation expertise that translates to this B2B SaaS role")
- Recommendations for cover letter (what to emphasize to offset gaps)
- Interview talking points (stories/examples from resume that address gap concerns)

## Step 9: Deliver Tailored Resume + Guidance
Provide:
1. **Tailored resume** (formatted, ATS-ready, keyword-optimized)
2. **Match score with breakdown** (what's strong, what's weak)
3. **Gap analysis** with specific recommendations
4. **Cover letter prompt** (key themes to emphasize)
5. **Interview prep brief** (top 3 stories from resume to prepare, objection-handling for gaps)

# Output Format

```
MATCH SCORE: [X%] — [Assessment: Strong / Competitive / At-Risk]

---

CORE FIT ANALYSIS

Must-Have Requirements: [X/40 points]
  ✓ [Requirement met with evidence from resume]
  ✓ [Requirement met]
  ✗ [Requirement gap—candidate has [X], JD needs [Y]]

Nice-to-Have Requirements: [X/30 points]
  ✓ [Nice-to-have present]
  ✗ [Nice-to-have absent]

Soft Skills & Cultural Fit: [X/20 points]
  [Assessment]

Keyword Coverage: [X/10 points]
  Top keywords matched: [list 10-15 keywords found in resume]
  Keywords missing: [list 3-5 high-value keywords not in resume]

---

TAILORED RESUME

[Full resume text, formatted and keyword-optimized]

---

GAP ANALYSIS & RECOMMENDATIONS

Hard Skill Gaps:
  [Specific gap + how to address]

Experience Level Gaps:
  [If any; recommendation]

Industry/Domain Gaps:
  [If any; recommendation]

Soft Skill Gaps:
  [If any; recommendation]

---

INTERVIEW PREP

Top 3 Stories to Prepare:
  1. [Resume achievement + why it's relevant to role]
  2. [Resume achievement + why it's relevant to role]
  3. [Resume achievement + why it's relevant to role]

Objection-Handling Talking Points:
  • If asked about [gap]: Respond with [evidence from resume or transferable skill]
  • If asked about [gap]: Respond with [evidence from resume or transferable skill]

---

COVER LETTER PROMPT

Lead with: [Specific reason for applying beyond "I'm interested"]
Emphasize: [Top 2-3 achievements from resume that match JD]
Address gaps with: [Narrative that reframes gaps as strengths or learning opportunities]
```

# Example

**Scenario**: Jordan Park is a Senior Product Manager at fintech startup "Stripe Later" (buy-now-pay-later platform). Jordan has 6 years of PM experience but is transitioning into a Head of Product role at "Lumina" (AI-powered analytics platform). Jordan's background is payment and commerce; Lumina focuses on B2B data intelligence.

**JD excerpts**:
- 8+ years product management (7 in B2B SaaS preferred)
- Led cross-functional teams of 15+
- Expertise in data science/analytics (Python, SQL, or similar)
- Experience shipping data products to enterprise customers
- Track record of 50%+ YoY revenue growth
- Comfortable with ambiguous problems and rapid iteration

**Jordan's background**:
- 6 years PM: 2 at fintech startup, 4 at scaling FinTech platform
- 1 manager report; led 3-person PM team on one project
- No technical background (liberal arts degree)
- Strong unit economics expertise; less data science experience
- Led 3 product launches to consumer/SMB; limited enterprise sales exposure

---

**OUTPUT**

```
MATCH SCORE: 71% — Competitive

---

CORE FIT ANALYSIS

Must-Have Requirements: 28/40 points
  ✓ 6 years PM at scaling SaaS (1 year short of 8, but high-growth environment compensates)
  ✓ Led cross-functional PM team, coordinated with eng/design/marketing (direct report + project leadership)
  ✗ Data science/analytics expertise gap—no Python/SQL; strong business analytics experience instead
  ✓ Shipped 3 product launches; 1 enterprise integration (limited enterprise experience, but credible MVP)
  ✓ Grew user base 120% YoY at previous role; strong understanding of growth mechanics

Nice-to-Have Requirements: 24/30 points
  ✓ B2B SaaS experience (though B2C fintech is adjacent, not identical)
  ✓ Leadership in ambiguous environments (startup scaling teaches this)
  ✗ Python/SQL background (gap—no technical depth)
  ✓ Rapid iteration and data-driven decision-making (strong fintech background)

Soft Skills & Cultural Fit: 18/20 points
  ✓ Adaptability and learning agility (fintech to analytics is significant pivot)
  ✓ Comfort with ambiguity (startup PM background)
  ✗ Enterprise sales motion less familiar (consumer/SMB focus)

Keyword Coverage: 9/10 points
  Top keywords matched: data, product, growth, enterprise, SaaS, scaling, launches, user acquisition, retention, metrics
  Keywords missing: machine learning, predictive analytics, SQL, Python

---

TAILORED RESUME

JORDAN PARK
Senior Product Manager → Head of Product
[Contact info]

PROFESSIONAL SUMMARY
Product leader with 6 years driving enterprise growth and scaling teams at high-growth B2B SaaS. Proven track record accelerating user adoption, optimizing retention metrics, and shipping data-driven product launches. Seeking Head of Product role to lead strategic roadmap and cross-functional teams at AI-powered analytics platform.

EXPERIENCE

Head of Product (Acting), Stripe Later, San Francisco, CA | 2024 - Present
  • Led product strategy and roadmap across payments and analytics initiatives
  • Coordinated PM team of 3; aligned eng/design/marketing on quarterly objectives
  • Analyzed usage patterns and conversion funnels to identify high-impact optimization opportunities
  • Shipped 2 major product releases; grew enterprise customer adoption 85% YoY

Senior Product Manager, Stripe Later, San Francisco, CA | 2022 - 2024
  • Owned product strategy for enterprise payments vertical; grew revenue from $500K to $2.8M in 18 months
  • Defined metrics dashboards tracking unit economics, retention, LTV/CAC ratio; enabled data-driven prioritization
  • Led cross-functional team (engineering, design, compliance) shipping 3 major product initiatives
  • Reduced payment failure rate 35% through data analysis and UX optimization
  • Mentored 2 junior PMs on product discovery and data analysis methodologies

Senior Product Manager, FinTech Platform, San Francisco, CA | 2020 - 2022
  • Drove product-market fit for SMB payments product; achieved 120% YoY user growth
  • Defined OKRs and success metrics; achieved 4/4 quarterly goals for 6 consecutive quarters
  • Conducted 100+ user interviews to validate hypotheses and uncover product opportunities
  • Collaborated with data team on predictive models to forecast churn and LTV

Associate Product Manager, FinTech Platform, San Francisco, CA | 2018 - 2020
  • Shipped 5 product features with measurable impact on engagement and retention
  • Led GTM strategy for 2 product launches; achieved 40% adoption within Q1
  • Built dashboards using company analytics tool to monitor 15+ KPIs daily

---

GAP ANALYSIS & RECOMMENDATIONS

Hard Skill Gaps:
  DATA ANALYTICS DEPTH: JD emphasizes SQL, Python, or data science expertise. Jordan has strong business analytics (metrics, dashboards, OKR definition) but no technical coding background. Recommendation: (1) Emphasize fintech background required deep financial modeling and SQL-free analytics dashboards; (2) In interviews, highlight "I've hired data scientists and PMs who code—I'm fluent in reading SQL outputs and scoping analytics projects"; (3) Short-term: Take free Coursera SQL fundamentals course to credibly discuss data infrastructure.

ENTERPRISE SALES MOTION: JD seeks "track record shipping to enterprise customers." Jordan's background is SMB/consumer. Recommendation: (1) Reframe "enterprise payments integration" on resume as proof of working with large, complex customers; (2) In interviews, ask about Lumina's enterprise buying cycle and customer segments to show readiness to learn; (3) Prepare story about working with compliance, legal, and ops teams (similar to enterprise requirements gathering).

TECHNICAL DEPTH: Unlike many analytics PMs, Jordan isn't an engineer. Recommendation: (1) Emphasize "PM-engineer partnership" experiences on resume; (2) Lead interviews with technical literacy (discuss data pipeline, API architecture, infrastructure) to show respect for technical constraints.

Experience Level Mismatch:
  YEARS OF PM EXPERIENCE: Jordan has 6 years; JD seeks 8+. Recommendation: (1) Reframe acting "Head of Product" role as Head-of-Product-equivalent responsibility (led cross-functional, owned roadmap, mentored team); (2) In interviews, emphasize scope and complexity of fintech scaling (high-regulation, high-complexity customer base) which compressed learning curve; (3) Note that 6 years in high-growth SaaS often exceeds 8 years at slower-moving org.

TEAM SIZE: JD seeks leader "of 15+ teams." Jordan has managed 1 direct + led projects with 3-person team. Recommendation: (1) Highlight cross-functional team coordination (ed 20-person functional group across eng/design/marketing even if no direct reports); (2) Note that PM leaders at scale often lead through influence, not headcount; (3) In interviews, ask about Lumina's PM org structure to signal readiness to scale.

---

INTERVIEW PREP

Top 3 Stories to Prepare:

1. "Driving 85% Enterprise Customer Adoption"
   Why It's Relevant: Demonstrates ability to own complex B2B motion and achieve scale. Shows cross-functional leadership (worked with sales, eng, success).
   How to Tell: "I owned enterprise adoption strategy for Stripe Later and set an ambitious OKR: 85% of enterprise customers live within 3 months. To hit it, I coordinated with sales on custom integrations, eng on API specs, and success on onboarding. We shipped a customer-specific dashboard, built API documentation, and trained success team on positioning. Hit target in 2.5 months. Metrics: 20 new enterprise customers, 2.8M ARR, 40% higher LTV than SMB customers."
   Potential Question: "Tell me about a time you coordinated across teams to hit a big goal."

2. "Data Analysis → Product Optimization (35% Failure Rate Reduction)"
   Why It's Relevant: Analytics PM skill directly relevant to Lumina. Shows metrics-driven decision-making.
   How to Tell: "I noticed our payment failure rate was 18%—unusually high. I worked with data team to segment failures (timeouts, insufficient funds, UX friction). Discovered 8% of failures were UX issues: customers didn't see error messages. We redesigned error state, added retry logic, and reduced overall failure rate to 11.5%. Saved $2.1M in recovered transactions."
   Potential Question: "Tell me about a time you used data to drive a product decision."

3. "Scaling From 2 PMs to Acting Head of Product"
   Why It's Relevant: Demonstrates leadership trajectory and adaptability to increased scope. Shows readiness for Head of Product.
   How to Tell: "Started as lone PM. As we scaled, hired 2 PMs and I took on more strategy work. Eventually took acting Head of Product role: owned product roadmap, managed PM team, aligned with exec team on quarterly goals, mentored junior PMs on discovery. No formal manager training, but read 4 PM books, joined peer groups, and got feedback from leadership. Key learning: good PMs scale through systems (OKRs, playbooks, interview frameworks) not just heroics."
   Potential Question: "Tell me about a time you scaled a team or function."

Objection-Handling Talking Points:

• If asked "You have 6 years, JD asks for 8—why should we consider you?"
  Respond: "My 6 years have been in high-growth SaaS scaling from pre-product-market-fit to $50M+ ARR—that's equivalent to 10+ years of learning in a slower-growing org. Plus, I'm only 1 year short and my acting Head of Product role demonstrates I'm already operating at that level."

• If asked "You don't have SQL/Python skills—how do you handle analytics?"
  Respond: "I'm deeply fluent in analytics and metrics (I define OKRs, build dashboards, work with data teams daily), but I'm not a technical analyst. I've hired and partnered with PMs who code, and I unblock them. I read SQL outputs, scope data projects, and talk infrastructure. For Lumina, I'd hire an analytics PM or engineer embedded on my team to own deep technical work. My strength is product strategy and team leadership, which is the Head of Product role."

• If asked "Most of your experience is B2C/SMB fintech—Lumina is B2B enterprise analytics. How do you learn fast?"
  Respond: "Enterprise SaaS is a new domain for me, and that's why I'm excited. I've learned fast before: fintech required compliance depth, payments required technical rigor, growth required metrics literacy. For enterprise analytics, I'd spend Month 1 on customer immersion (shadow sales calls, customer interviews, use competitor products), and Month 2 building roadmap. I've built relationships with data leaders in our customer base already—I'd tap them as advisors."

---

COVER LETTER PROMPT

Lead with: "I'm transitioning from fintech (payments/growth) to analytics/data because [specific insight about analytics importance in B2B SaaS / personal fascination with data-driven decision-making]. I'm drawn to Lumina because [specific feature or company mission that resonates]."

Emphasize: "At Stripe Later, I scaled enterprise adoption 85% through cross-functional leadership and data-driven optimization. I shipped 3 major products and grew revenue 120% YoY by defining clear metrics and iterating fast. These skills—leadership, metrics rigor, rapid iteration—translate directly to Lumina's Head of Product role."

Address gaps with: "While my background is B2C/SMB rather than enterprise, I've worked with large, complex financial customers who have similar procurement, compliance, and support needs as enterprise data buyers. I'm excited to deepen my enterprise SaaS expertise, and I've already started learning SQL and data infrastructure through coursework and PM peer groups."
```

# Edge Cases

- **Significant career pivot** (e.g., developer to product manager, consultant to founder): Emphasize transferable skills heavily. Reframe past role as "adjacent prep work" for target role. Lead cover letter with narrative of intentional transition, not random jump.

- **Overqualified candidate** (candidate has more experience/seniority than JD): De-emphasize seniority; focus on role-specific achievements instead. In cover letter, explain why stepping into this role makes sense (learning new domain, geographic move, smaller company culture, etc.).

- **Major employment gap**: Don't hide; acknowledge briefly. Use gap to show growth (learning, side projects, caregiving, etc.). Reframe as "intentional pause to [reason]" rather than laying low.

- **Limited relevant experience** (candidate <50% match): Flag as "At-Risk" match score. Recommend networking/referral approach instead of cold application. Suggest interview prep focusing on learning agility and transferable skills. Consider suggesting adjacent roles candidate is better-positioned for.

- **Multiple offers to compare**: Use match score + gap analysis to compare roles. Run same candidate through 2-3 different JDs to see which alignment is strongest. Flag trade-offs (e.g., "Role A is 78% match but requires relocation; Role B is 72% but remote").

- **Very new role** (candidate just started current role, only 3 months tenure): Flag in cover letter as "Recent transition to [role]—excited by [outcome achieved so far]." Hiring managers may prefer stability; be transparent about why you're moving.

- **Roles with unusual JDs** (academic roles, startups with vague JDs, international postings): Parse what you can; note ambiguities in match score ("Score is based on incomplete JD—actual fit may be higher/lower after clarification call"). Recommend asking recruiter for clarity before heavy resume tailoring.

# Next Steps

Select the tailored resume from the output above. Customize cover letter using the provided prompt. Review gap analysis and prepare interview stories using the talking points provided. If match score is <60%, consider passing or requesting informational interview to assess fit before formal application. If 60-75%, apply with strong cover letter addressing key gaps. If 75%+, apply immediately and prepare for fast-track interview process.

