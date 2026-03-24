---
name: "Build Competitive Battlecard"
description: "Create a sales-ready competitive battlecard — positioning, feature comparison, objection handling, landmines, and win/loss patterns — for any competitor. Trigger on: battlecard, competitive analysis, competitor comparison, why not competitor X, competitive positioning, sales enablement, compete sheet."
dependencies: []
---

## Purpose

Build a concise, sales-ready battlecard that reps can reference during live calls. Combines web research on the competitor with internal conversation data — real objections prospects raise, how competitors get mentioned on calls, and win/loss patterns from your own deals. The output is designed to be scanned in 30 seconds, not read like a whitepaper.

## When to Use

- Preparing sales team to compete against a specific competitor
- Prospect just mentioned a competitor on a call and you need positioning fast
- Quarterly refresh of competitive materials
- New competitor entered your market
- Lost a deal to a competitor and need to understand why

## Instructions

### 1. Identify the competitor and gather context

Ask the user:
- **Which competitor?** Company name, product name, or URL
- **What do you sell?** Quick product context if not already known
- **Do you have internal data?** Win/loss records, sales call recordings mentioning this competitor, CRM notes

Then research the competitor using web search:
- Current product offerings, features, and pricing
- Target market and positioning (from their website)
- Recent product launches, funding, or strategic changes
- Customer reviews on G2, Capterra, TrustRadius, Reddit
- Glassdoor/employee sentiment for internal culture signals
- Technology and integration ecosystem

If Harmony conversations mention this competitor, extract:
- How prospects bring up the competitor (exact language)
- What specific features or capabilities they compare
- Objections prospects raise using the competitor as leverage
- Why deals were won or lost against this competitor
- How the competitor is positioned by prospects (not just by the competitor's marketing)

### 2. Build the battlecard

Structure the battlecard for speed. Every section should be scannable during a live sales call.

**Sections to include:**

#### Competitor Snapshot
- One-sentence positioning
- Founded / HQ / Funding stage / Estimated size
- Target market (who they sell to)
- Pricing model and approximate price points
- Key customers or logos (if public)

#### Head-to-Head Comparison
Compare across 6–10 capability areas relevant to your market. Be honest — mark where they win too. Credibility matters more than cheerleading.

#### Where We Win
3–5 advantages with evidence. Use customer quotes from conversations when available. Each advantage should include:
- The capability or approach
- Why it matters to the buyer
- Proof point (customer quote, metric, or technical fact)

#### Where They Win (and how to counter)
2–3 areas where they're stronger, with counter-positioning for each:
- Their advantage
- How to reframe it (not dismiss it)
- What to say to the prospect

#### Objection Responses
Top 5 objections prospects raise when comparing to this competitor. For each:
- What the prospect says (verbatim from calls when available)
- The response framework
- A specific proof point or pivot

#### Landmine Questions
4–6 questions reps should plant early in the conversation that expose the competitor's weaknesses. These should feel natural, not attacking — they guide the prospect to discover gaps on their own.

#### Win/Loss Patterns
Based on available data:
- We tend to win when... (prospect characteristics, deal dynamics)
- We tend to lose when... (gaps, timing, competitive dynamics)
- The tipping point is usually... (the factor that decides close deals)

#### Trap Plays
Specific scenarios to watch for:
- If the prospect is already using [competitor], do this
- If the prospect is evaluating both simultaneously, do this
- If the prospect brings up [competitor] late in the cycle, do this

### 3. Format for usability

The battlecard must be:
- Scannable in 30 seconds for the key positioning
- Detailed enough for 5-minute prep before a competitive call
- Structured so reps can find the exact objection response they need mid-call
- Honest about competitor strengths (builds rep credibility with prospects)

## Output Format

```markdown
# Battlecard: [Your Product] vs. [Competitor]
_Last updated: [date] · Sources: [web research, Harmony conversations, CRM data]_

## Competitor Snapshot
| | Details |
|---|---|
| **Positioning** | [One sentence] |
| **Founded** | [Year] |
| **HQ** | [Location] |
| **Stage/Funding** | [Stage or public] |
| **Estimated size** | [Employees] |
| **Target market** | [Who they sell to] |
| **Pricing** | [Model and range] |
| **Key customers** | [Notable logos] |

## Head-to-Head Comparison
| Capability | Us | Them | Edge |
|-----------|-----|------|------|
| [Area 1] | [Our approach] | [Their approach] | [Us/Them/Tie] |
| [Area 2] | [Our approach] | [Their approach] | [Us/Them/Tie] |
| [Area 3] | [Our approach] | [Their approach] | [Us/Them/Tie] |
| [Area 4] | [Our approach] | [Their approach] | [Us/Them/Tie] |
| [Area 5] | [Our approach] | [Their approach] | [Us/Them/Tie] |
| [Area 6] | [Our approach] | [Their approach] | [Us/Them/Tie] |
| Pricing | [Our model] | [Their model] | [Us/Them/Tie] |
| Support | [Our approach] | [Their approach] | [Us/Them/Tie] |

## Where We Win
1. **[Advantage]** — [Why it matters]. _"[Customer quote or proof point]"_
2. **[Advantage]** — [Why it matters]. _"[Customer quote or proof point]"_
3. **[Advantage]** — [Why it matters]. _"[Customer quote or proof point]"_

## Where They Win (+ How to Counter)
| Their Strength | How to Reframe | What to Say |
|---------------|---------------|-------------|
| [Strength] | [Reframe] | "[Talk track]" |
| [Strength] | [Reframe] | "[Talk track]" |

## Objection Responses
| Prospect Says | Respond With | Proof Point |
|--------------|-------------|-------------|
| "[Objection 1]" | [Response] | [Evidence] |
| "[Objection 2]" | [Response] | [Evidence] |
| "[Objection 3]" | [Response] | [Evidence] |
| "They're cheaper" | [Value reframe] | [TCO or ROI data] |
| "They're more established" | [Counter] | [Your advantages] |

## Landmine Questions
Ask these early to expose gaps before the prospect evaluates the competitor deeply:
1. "[Question that highlights our strength / their weakness]"
2. "[Question about a capability they lack]"
3. "[Question about a use case they handle poorly]"
4. "[Question about scalability, support, or integration area]"

## Win/Loss Patterns
- **We win when:** [Pattern — prospect type, deal dynamic, evaluation criteria]
- **We lose when:** [Pattern — gap, timing, competitive advantage]
- **Tipping point:** [The factor that usually decides close deals]

## Trap Plays
| Scenario | What to Do |
|----------|-----------|
| Prospect is already using [competitor] | [Displacement strategy] |
| Evaluating both simultaneously | [Differentiation approach] |
| [Competitor] comes up late in cycle | [Counter-move] |
| Prospect shares [competitor] pricing | [Response strategy] |

## Quick Reference (for mid-call)
**If they say [competitor] → say this:**
- "[Quick one-liner positioning against competitor]"
- "[The single strongest differentiator in one sentence]"
- "[The question that changes the conversation]"
```

## Example

**User:** "Build me a battlecard against Gong. We sell conversation intelligence for mid-market teams."

**Output:**

```markdown
# Battlecard: Harmony vs. Gong
_Last updated: 2026-03-05 · Sources: Web research, G2 reviews, 8 competitive mentions in Harmony calls_

## Competitor Snapshot
| | Details |
|---|---|
| **Positioning** | Revenue intelligence platform for enterprise sales teams |
| **Founded** | 2015 |
| **HQ** | San Francisco, CA |
| **Stage/Funding** | $584M raised, valued at $7.25B (2021) |
| **Estimated size** | ~1,800 employees |
| **Target market** | Enterprise sales organizations (500+ employees) |
| **Pricing** | $100–$150/user/month (annual contract, typically $30K+ starting) |
| **Key customers** | LinkedIn, Hubspot, Zillow, Paychex |

## Head-to-Head Comparison
| Capability | Harmony | Gong | Edge |
|-----------|---------|------|------|
| Call recording & transcription | Multi-source (bots, desktop, IVR, phone) | Primarily sales call recording | Harmony |
| AI insights & analytics | Custom insights across all conversation types | Revenue-focused deal intelligence | Tie — different focus |
| Workspace (tasks, notes, people) | Built-in, linked to conversations | Not included — separate tools needed | Harmony |
| Team coverage | Sales, CS, product, HR, all teams | Sales-focused, expanding to CS | Harmony |
| AI companion / chat | Model-agnostic, grounded in all conversations | Gong Ask (sales data only) | Harmony |
| Integrations | 35+ including CRM, support, dev tools | Deep CRM integration, fewer categories | Gong for CRM, Harmony for breadth |
| Pricing | Team-friendly, scales with usage | Enterprise pricing, high floor | Harmony |
| Enterprise features | Growing | Mature (SSO, compliance, admin controls) | Gong |

## Where We Win
1. **Beyond sales — every team, every conversation.** Gong is built for revenue teams. Harmony captures intelligence across sales, CS, product, HR, and internal meetings. _"We needed something the whole company could use, not just the sales floor." — Head of Ops, prospect call 2/18_
2. **Workspace built in.** Tasks, notes, people, and spaces are native to Harmony. Gong requires you to manage action items in separate tools. _"Half the value of recording calls is wasted if the follow-ups don't get tracked." — CS Director, prospect call 2/24_
3. **Price-to-value for mid-market.** Gong's pricing is built for enterprise budgets. Harmony delivers conversation intelligence at a price point mid-market teams can actually afford without VP-level approval.

## Where They Win (+ How to Counter)
| Their Strength | How to Reframe | What to Say |
|---------------|---------------|-------------|
| Deeper CRM integration (Salesforce) | "Gong is optimized for Salesforce-heavy sales orgs. If your world is bigger than CRM — CS calls, internal meetings, product feedback — you'll outgrow that integration fast." | "How much of your team's valuable conversation data happens outside sales calls?" |
| More enterprise features (SSO, compliance, admin) | "We're shipping enterprise features rapidly. But the bigger question is whether you need a tool built for 5,000-seat enterprises or one built for teams your size." | "What's more important right now — enterprise admin controls or a tool your whole team actually uses?" |

## Objection Responses
| Prospect Says | Respond With | Proof Point |
|--------------|-------------|-------------|
| "Gong is the market leader" | "Gong leads in enterprise sales recording. If you're a 50–500 person company that needs intelligence across all conversations, not just sales, that's a different category — and that's where we're built to win." | Mid-market customer stories |
| "Gong has better AI" | "Gong's AI is tuned for deal prediction. Ours is tuned for any conversation insight you define — custom scorecards, compliance checks, coaching across every team." | Custom insights feature demo |
| "We already use Gong" | "What percentage of your company's conversations does Gong actually capture? If it's only sales calls, you're leaving 70% of your conversation intelligence on the table." | Usage data from churned Gong customers |
| "Gong integrates with our CRM" | "So do we. The question is: do you need intelligence only in your CRM, or across your whole workspace — tasks, notes, people, and collaboration?" | Integration list + workspace demo |

## Landmine Questions
1. "How much of your team's conversation intelligence comes from non-sales calls?"
2. "Where do action items from calls end up today — and how many get lost?"
3. "How does your CS team / product team / leadership access call insights right now?"
4. "If you could ask any question across all your company's conversations, not just sales, what would you ask?"

## Win/Loss Patterns
- **We win when:** The buyer values whole-company intelligence over sales-only; team is 50–500 people; they've seen Gong's pricing and need a faster, leaner alternative; CS or product teams are also stakeholders.
- **We lose when:** Buyer is enterprise (2,000+ seats) with mature Salesforce stack; deal is driven by sales ops who only care about revenue intelligence; they need compliance features we don't have yet.
- **Tipping point:** Whether the buyer sees conversation intelligence as a sales tool or a company-wide platform. If it's company-wide, we win.

## Trap Plays
| Scenario | What to Do |
|----------|-----------|
| Already using Gong | Ask about non-sales teams. Show the gap. Position as "Gong for sales + Harmony for everything else" initially, then expand. |
| Evaluating both | Push for a whole-team pilot, not just sales. Our advantage shows when product, CS, and leadership are also using it. |
| Gong comes up late in cycle | Ask: "What made you start looking at Gong?" — usually reveals a broader need that Gong won't fully cover. |
| Prospect shares Gong pricing | Don't compete on price alone. Reframe: "For similar investment, you get intelligence across your entire company, not just sales." |

## Quick Reference (for mid-call)
**If they say Gong → say this:**
- "Gong is great for enterprise sales recording. We're built for teams that want conversation intelligence across the whole company."
- "The real question is: do you need a sales tool, or a company-wide conversation platform?"
- "How much of your team's valuable conversations happen outside of sales calls?"
```

## Edge Cases

- **Competitor is much larger / well-known brand:** Focus on agility, focus, and price-to-value ratio. Avoid feature-by-feature comparison on their terms — reframe the category.
- **Competitor is much smaller or unknown:** Don't mention them by name in the battlecard title. Focus on the capability gap they represent. Position as "if they ask about [small competitor]."
- **User has no internal win/loss data:** Build the battlecard from web research and review analysis. Flag the gap and recommend tracking competitive mentions in future calls.
- **Multiple competitors at once:** Build separate battlecards. Cross-reference in a "competitive landscape" overview, but keep each battlecard focused on one opponent.
- **Competitor just launched a major feature or pivot:** Flag the recency. Recommend a 30-day refresh after the dust settles. In the meantime, prepare a "new feature counter-positioning" section.
- **User's product is objectively weaker in most areas:** Be honest. Focus the battlecard on the 1–2 areas where you genuinely win, and build the strategy around those wedge advantages. Bad battlecards that overstate strengths destroy rep credibility.
