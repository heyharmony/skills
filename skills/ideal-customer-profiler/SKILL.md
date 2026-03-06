---
name: "Ideal Customer Profiler"
description: "Build a data-backed ideal customer profile — demographics, behaviors, jobs to be done, pain points, and disqualification criteria — from customer conversations, research data, and usage patterns. Trigger on: ICP, ideal customer profile, target customer, customer segmentation, who to sell to, best-fit customer, customer persona, PMF survey analysis."
dependencies: []
---

## Purpose

Define who your best customers are — and why — so every team makes sharper decisions about who to target, what to build, and how to sell. This skill synthesizes customer conversations, research data, and usage patterns into a structured ICP that goes beyond firmographics to include behavioral patterns, jobs to be done, and concrete disqualification criteria.

## When to Use

- Defining your ICP for the first time based on early customers
- Refining ICP after analyzing product-market fit survey data
- Segmenting customers to find your highest-value cohort
- Aligning sales, marketing, and product on who to prioritize
- Evaluating whether a new segment is worth pursuing
- Post-churn analysis to sharpen who you should stop selling to

## Instructions

### 1. Gather what exists

Ask the user what data they have. Don't assume — probe:

- **Customer conversations in Harmony?** Discovery calls, sales calls, onboarding recordings, churn calls, success check-ins
- **Survey data?** PMF surveys, NPS results, onboarding feedback
- **Usage or revenue data?** LTV, churn rates, expansion patterns, time-to-value
- **Sales data?** Win/loss records, deal cycle length, common objections
- **Existing documentation?** Prior personas, market research, competitive intel

If conversations are available in Harmony, extract:
- How customers describe their own problem (verbatim language)
- What they were doing before your product (current state)
- What triggered them to look for a solution (catalyst moments)
- How they evaluate alternatives (decision criteria)
- Who else is involved in buying (stakeholders mentioned)
- What success looks like to them (desired outcomes)

### 2. Identify your highest-value customers

Before profiling, segment by value. Ask the user to identify or help them determine:

- **Highest retention** — Who stays longest and why?
- **Fastest activation** — Who gets value quickest?
- **Highest expansion** — Who grows their usage or spend?
- **Strongest advocacy** — Who refers, reviews, or champions publicly?
- **Best margin** — Who costs least to acquire and serve?

The ICP should describe the intersection of these — the customers who score high across multiple dimensions, not just one.

### 3. Build the demographic profile

Extract firmographic and role patterns from the high-value cohort:

**Company level:**
- Industry / vertical (be specific — "B2B SaaS, 50-200 employees" not just "tech")
- Company size range (employees and/or revenue)
- Growth stage (bootstrapped, seed, Series A-C, enterprise)
- Geography and market focus
- Tech stack and tool ecosystem
- Organizational maturity signals

**Buyer level:**
- Job title and seniority
- Department and reporting structure
- Years in role / career trajectory
- Team size they manage or influence
- Budget authority (direct, influencer, or champion)

### 4. Map behavioral patterns

How these customers find, evaluate, buy, and adopt:

**Discovery & evaluation:**
- Where they learn about solutions (channels, communities, peers)
- How they evaluate options (POC, free trial, demo, committee)
- Typical evaluation timeline
- Key stakeholders involved and their roles

**Buying signals:**
- Trigger events that start a search (new hire, lost deal, board pressure, broken process)
- Language they use when ready to buy vs. just exploring
- Deal-breakers and must-haves during evaluation

**Adoption:**
- Onboarding speed and self-serve capability
- Feature adoption breadth (power user vs. narrow use)
- Internal champion behavior (do they evangelize?)
- Support needs and engagement pattern

### 5. Define jobs to be done

Articulate what these customers are actually trying to accomplish, in three layers:

**Functional jobs** — The practical task:
- Primary job: What outcome are they paying for?
- Supporting jobs: What secondary tasks enable the primary job?
- Frequency and stakes: How often, and what happens if they fail?

**Emotional jobs** — How they want to feel:
- Confidence, control, relief, pride, security
- What frustrates them about current solutions (emotional dimension)
- What "winning" feels like in their role

**Social jobs** — How they want to be perceived:
- By their team, their manager, their customers
- Status and credibility implications
- How solving this problem changes their standing

Ground every job in evidence — customer quotes from conversations when available, survey data, or behavioral patterns.

### 6. Document pain points and needs

For each major pain point, capture the full picture:

- **The problem** — What specifically is broken or missing?
- **Current workaround** — What do they do today instead?
- **Cost of the problem** — Time, money, missed opportunities, stress
- **Quote** — Customer's own words describing it (from conversations if available)
- **Severity** — Critical / High / Medium (based on frequency and impact)

### 7. Define disqualification criteria

Equally important: who is NOT your ICP. Define clear signals:

- Company characteristics that predict churn or low value
- Buying behaviors that indicate bad fit (e.g., price-only shoppers, no executive sponsor)
- Use cases your product doesn't serve well
- Red flags from sales conversations
- "Looks like ICP but isn't" — segments that appear similar but don't retain

## Output Format

```markdown
# Ideal Customer Profile — [Product/Company Name]
_Last updated: [date] · Based on: [data sources]_

## One-Line ICP
[Single sentence: Who they are + what they need + why they're your best customer]

## Snapshot
| Dimension | Profile |
|-----------|---------|
| Company size | [range] |
| Industry | [verticals] |
| Growth stage | [stage] |
| Geography | [regions] |
| Buyer title | [titles] |
| Department | [dept] |
| Budget range | [range] |
| Team size | [range] |

## Why These Customers Win (Value Evidence)
| Metric | ICP Cohort | Overall Average |
|--------|-----------|-----------------|
| Retention (12-month) | [%] | [%] |
| Time to value | [days] | [days] |
| Expansion rate | [%] | [%] |
| NPS | [score] | [score] |
| CAC payback | [months] | [months] |

## Behavioral Profile

### How they find us
[Discovery channels and patterns]

### How they evaluate
[Evaluation process, timeline, stakeholders]

### Trigger events
- [Event 1 — what changes that makes them start looking]
- [Event 2]
- [Event 3]

### Buying signals
- [Signal 1 — language or behavior that indicates readiness]
- [Signal 2]
- [Signal 3]

## Jobs to Be Done

### Functional jobs
| Job | Frequency | Stakes | Current Solution |
|-----|-----------|--------|-----------------|
| [Primary job] | [freq] | [stakes] | [what they do today] |
| [Supporting job] | [freq] | [stakes] | [what they do today] |

### Emotional jobs
- [How they want to feel — with evidence]

### Social jobs
- [How they want to be perceived — with evidence]

## Voice of Customer
> "[Quote about their problem]" — [Role, Company]
> "[Quote about what they need]" — [Role, Company]
> "[Quote about desired outcome]" — [Role, Company]
_Source: [Harmony conversations / surveys / interviews]_

## Pain Points
| # | Pain Point | Current Workaround | Cost | Severity |
|---|-----------|-------------------|------|----------|
| 1 | [pain] | [workaround] | [cost] | Critical |
| 2 | [pain] | [workaround] | [cost] | High |
| 3 | [pain] | [workaround] | [cost] | High |
| 4 | [pain] | [workaround] | [cost] | Medium |
| 5 | [pain] | [workaround] | [cost] | Medium |

## Disqualification Criteria
**Do not pursue if:**
- [Red flag 1 — specific, observable signal]
- [Red flag 2]
- [Red flag 3]
- [Red flag 4]

**Looks like ICP but isn't:**
| Segment | Why it looks right | Why it doesn't work |
|---------|-------------------|-------------------|
| [segment] | [similarity] | [difference that matters] |

## Implications
| Team | What this means for you |
|------|----------------------|
| Sales | [targeting, qualification, messaging] |
| Marketing | [channels, content, positioning] |
| Product | [roadmap priorities, feature focus] |
| CS | [onboarding, expansion, risk signals] |

## Next Steps
1. [Validation action — e.g., test with next 10 sales calls]
2. [Distribution action — e.g., share with sales team]
3. [Iteration action — e.g., revisit in 90 days with fresh data]
```

## Example

**User:** "Help me define our ICP. We have a project management tool for agencies. I've done a bunch of customer interviews — check my recent calls. We also have NPS data showing our best customers are 10-50 person agencies."

**Output:**

```markdown
# Ideal Customer Profile — FlowPM
_Last updated: 2026-03-05 · Based on: 14 customer interviews (Harmony), NPS survey (n=240), churn analysis_

## One-Line ICP
Creative agencies with 15–40 people running 8+ concurrent client projects, where the ops lead or project director needs real-time visibility across all accounts without building spreadsheet dashboards.

## Snapshot
| Dimension | Profile |
|-----------|---------|
| Company size | 15–40 employees |
| Industry | Creative / digital agencies (design, dev, content, full-service) |
| Growth stage | Established (3+ years, $1M–$8M revenue) |
| Geography | US, UK, Australia, Canada (English-speaking markets) |
| Buyer title | Head of Operations, Project Director, COO |
| Department | Operations / Project Management |
| Budget range | $200–$800/month |
| Team size | 4–8 project managers using the tool daily |

## Why These Customers Win (Value Evidence)
| Metric | ICP Cohort (15-40 ppl agencies) | Overall Average |
|--------|-------------------------------|-----------------|
| Retention (12-month) | 94% | 71% |
| Time to value | 6 days | 18 days |
| Expansion rate | 35% (add seats within 6 months) | 12% |
| NPS | 62 | 34 |
| CAC payback | 3.2 months | 7.8 months |

## Behavioral Profile

### How they find us
Agency Slack communities, peer recommendations, "project management for agencies" Google searches. 9 of 14 interviewed customers found FlowPM through a recommendation from another agency owner.

### How they evaluate
Typical process: ops lead finds us → runs a 2-week trial with one client project → shows results to founder/partner → team-wide rollout. Average 21-day evaluation. No formal procurement.

### Trigger events
- Agency wins 2-3 new clients in a quarter and existing tools buckle under the load
- A major project misses a deadline because nobody saw the cascade effect
- New ops hire joins and refuses to work with the existing spreadsheet chaos

### Buying signals
- Asks about multi-project views and cross-client reporting in first call
- Mentions they've already tried Asana/Monday/Basecamp and it "didn't fit agencies"
- Ops lead, not founder, is driving the evaluation (means it's an operational need, not curiosity)

## Jobs to Be Done

### Functional jobs
| Job | Frequency | Stakes | Current Solution |
|-----|-----------|--------|-----------------|
| See real-time status across all client projects in one view | Daily | High — missed deadlines = lost clients | Spreadsheet dashboards updated manually 2x/week |
| Prevent resource conflicts before they cause delays | Weekly | High — overallocation causes burnout and quality drops | "Walk around and ask people" or Slack check-ins |
| Report project health to clients without manual assembly | Weekly | Medium — time sink, not existential | Copy-paste from 3 tools into a Google Doc |

### Emotional jobs
- Want to feel **in control** — "I need to know nothing is falling through the cracks" (Head of Ops, BrightPath)
- Want to feel **credible** — "When a client asks for a status update, I want to answer in 10 seconds, not 10 minutes"

### Social jobs
- Want to be seen as the person who **professionalized the agency's operations**
- Want founders to trust them to run projects without daily check-ins

## Voice of Customer
> "We were running 12 client projects on a mix of Asana, spreadsheets, and Slack. Nobody knew the real status of anything." — Head of Ops, BrightPath
> "I tried Monday.com for 6 months. It's built for internal teams, not agencies juggling 15 clients." — Project Director, Kite Studio
> "The moment I could show our founder a single dashboard with every project's health, she stopped coming to my desk three times a day." — COO, Ember Creative
_Source: Customer interviews, Jan–Feb 2026 in Harmony_

## Pain Points
| # | Pain Point | Current Workaround | Cost | Severity |
|---|-----------|-------------------|------|----------|
| 1 | No cross-project visibility | Manual spreadsheet dashboards | 5+ hrs/week for ops lead | Critical |
| 2 | Resource conflicts discovered too late | Slack check-ins and gut feel | Missed deadlines, client churn | Critical |
| 3 | Client reporting is manual | Copy-paste from multiple tools | 2-3 hrs/week per account | High |
| 4 | Onboarding new PMs takes too long | Tribal knowledge, no standard process | 3-4 weeks to productivity | High |
| 5 | Can't forecast capacity for new business | Spreadsheet guesswork | Over-commit or under-sell | Medium |

## Disqualification Criteria
**Do not pursue if:**
- Fewer than 10 employees (won't have enough project complexity to need us)
- Solo freelancers or contractors (need a simpler tool)
- In-house teams at large companies (different buying process, different needs)
- Agencies that run fewer than 5 concurrent projects (pain isn't acute enough)

**Looks like ICP but isn't:**
| Segment | Why it looks right | Why it doesn't work |
|---------|-------------------|-------------------|
| Large agencies (80+) | Same industry, same pain | Need enterprise features, SSO, custom integrations — our product isn't there yet |
| Dev shops / software agencies | Similar size, similar structure | Workflow is sprint-based; they need Jira-like tools, not client-project tools |
| Marketing agencies (media buying) | Right size, agency model | Their "projects" are campaigns with different rhythms; our templates don't fit |

## Implications
| Team | What this means for you |
|------|----------------------|
| Sales | Qualify on: agency type, concurrent project count, and whether ops lead is driving. Disqualify dev shops and solo freelancers early. |
| Marketing | Double down on agency Slack communities and "project management for agencies" SEO. Peer proof (case studies from similar agencies) is the #1 conversion driver. |
| Product | Prioritize cross-project dashboards, resource forecasting, and client-facing reports. Don't build sprint/Kanban features — that pulls us toward dev shops. |
| CS | Onboard with a "first client project" template. Time-to-value target: live dashboard within 5 days. Expansion signal: when they add a 3rd PM seat. |

## Next Steps
1. Share this ICP with sales team and test as qualification criteria on next 20 inbound leads
2. Create a "looks like ICP" cheat sheet for SDRs to catch false positives early
3. Revisit in 90 days with updated retention and expansion data from the ICP cohort
```

## Edge Cases

- **No customer data yet (pre-launch):** Build a hypothesis ICP from founder assumptions and market research. Label it clearly as "v0 — hypothesis" and recommend a validation plan (5–10 customer discovery calls).
- **Too many customer types, no clear pattern:** Help the user segment by value metrics first. If data doesn't exist, use conversation sentiment and engagement as proxies. It's okay to define 2 ICPs if the data genuinely supports it — but flag the cost of split focus.
- **User has survey data but no conversations:** Work from survey data. Recommend the user record 5 follow-up interviews with highest-NPS respondents to add depth. Flag what the ICP is missing without qualitative data.
- **User wants to validate ICP, not create one:** Flip the skill — take their existing ICP, compare it against available conversation data and metrics, and produce a gap analysis showing where reality matches or diverges from the profile.
- **B2C or consumer product:** Adapt firmographics to consumer demographics (age, income, location, lifestyle). Keep JTBD framework — it works equally well for consumer products. Adjust language from "company" to "customer."
- **User provides a competitor's ICP and wants to differentiate:** Analyze where their ICP overlaps and where there's whitespace. Use conversation data to find underserved segments the competitor doesn't address well.
