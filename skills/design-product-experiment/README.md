# Design Product Experiment

> Turn hunches into data. Go from "we think users want this" to "here's what we know, and when we'll know more."

## What It Does

This skill transforms product intuition into rigorous experiments. You start with an observation from customer calls, sprint debates, or support spikes. You write a testable hypothesis (If/Then/Because), define what success looks like *before* launch (primary, guardrail, and secondary metrics), estimate how long the experiment will run and who'll be in it, prioritize against other work using ICE scoring, and establish decision rules so you're not tempted to interpret results after the fact.

The output: a structured experiment design that reduces bias, clarifies assumptions, and lets you ship changes with statistical confidence instead of guesswork. Works standalone, but gains richer context when pulled from Harmony conversation data—customer call transcripts, sprint review notes, and team discussions become the seed for your hypothesis.

## Who It's For

- **Product Managers**: Replace debates with data. When the team disagrees on a feature direction, run an experiment. You'll know what works in 1–3 weeks instead of arguing for a quarter.
- **Design & UX Leaders**: Validate UX changes (flows, copy, visual hierarchy) at scale before the rebrand. Catch unintended side effects with guardrail metrics.
- **Engineering Leads**: De-risk major platform changes (authentication flows, API redesigns, performance optimizations). Move fast without breaking trust.
- **Data Analysts**: Get a clear spec for what to measure, how long to run it, and what threshold matters. No more "interesting trends"—just signal and noise clearly separated.
- **Growth & Monetization Teams**: Test pricing, onboarding, and retention funnels. A structured approach saves you from shipping a change that looks good on day 3 but tanks by week 4.
- **Startup Founders & Solo PMs**: Validate your riskiest assumptions before they become $100k mistakes. Use this to focus on the bets that matter.

## Use Cases

### Before Launch: Reduce Shipping Risk

**Before**: You ship a redesigned onboarding flow because "we think it will reduce drop-off." After launch, you're unsure: Did it work? Is it trending down or just variance? Do we need to iterate?

**After**: You design the experiment first. Hypothesis: "If we simplify the signup form from 7 fields to 3, then signup completion will lift from 68% to 80% because reducing cognitive load and friction will help users commit faster." You calculate you'll need 2 weeks at normal traffic. You set a decision rule: "Roll out if we see >10% lift with p < 0.05 and guardrail metrics hold." You launch at 10%, monitor daily, and by day 12 you have your answer—not a guess.

### In Sprint Planning: Resolve Disagreements

**Before**: Half the team thinks a feature will move the needle; half thinks it's a distraction. You're stuck in a debate loop with no way to resolve it.

**After**: You write the hypothesis together. "If we add a 'save for later' button, then users will engage with content 3+ times per session instead of 1–2 times, because async consumption reduces decision friction." You estimate 10 days to detect the effect. You prioritize it using ICE: Impact (high—increases engagement) × Confidence (medium—untested in your user base) ÷ Ease (high—new button). Score: 6.7. You run it, and 10 days later the answer is clear. You move on instead of debating.

### After a Support Spike: Validate a Fix

**Before**: You get 30+ support tickets about a feature in one week. The team proposes a fix, but you're not sure if the fix addresses the real problem or just adds complexity.

**After**: You write a hypothesis grounded in the ticket themes: "If we add a tooltip and reorder the settings panel, then users will find the payment method option within 2 clicks instead of 5, because visual clarity and information architecture will reduce support volume by 25%." You run a 1-week experiment. If the metric moves, you ship it. If not, you know the real problem is something else (maybe the feature itself shouldn't exist).

### Before a Major Redesign: Establish Baselines

**Before**: You redesign the entire task creation flow. Three months later, adoption looks good, but you don't know if it's the redesign or just novelty.

**After**: You run a pre-launch experiment on key metrics (time-to-create, task completion rate, user error rate). You establish a baseline. You ship the redesign. You measure the same metrics post-launch. You can now attribute changes to your work instead of guessing. And if something got worse, you catch it fast.

### To Validate Pricing Experiments: Reduce Revenue Risk

**Before**: You want to test a new pricing tier. You're worried it might cannibalize higher-tier sales or confuse the market.

**After**: You design an experiment: "If we offer a 'Teams' tier at $200/month, then we'll acquire 20 new customers in the price band without cannibalizing 'Pro' upgrades by more than 10%, because the tier fills a gap between Solo and Enterprise." You run it at 20% of incoming signups for 4 weeks. Guardrail metric: Pro tier conversions must not drop below 80% of baseline. You get your answer, and you know the risk profile.

## Connectors

**Works standalone, but richer with:**
- **Slack**: Sync experiment results and decision moments to a channel; link to discussion threads where the hypothesis was debated
- **Linear / Jira**: Link experiment to associated issues and roadmap items; track go/no-go decisions as status updates
- **Notion**: Store experiment results and learnings in a shared database; build a historical view of what worked
- **Transcript-based systems** (Harmony, Otter, gong): Pull direct customer quotes as triggers for experiment hypotheses ("Three users mentioned X this week")
- **Analytics platforms** (Mixpanel, Amplitude, Segment): Pre-validate baseline metrics and segment audiences
- **Google Sheets**: Export experiment results and analysis for cross-team review

## Setup

Install and go—no setup required. If you have access to Harmony or a transcript tool, pull recent customer calls or sprint notes to seed your hypothesis. Otherwise, start with a product observation (support spike, sprint debate, customer feedback) and follow the workflow.

## What You Get

A complete experiment design in 30–45 minutes that includes a testable hypothesis grounded in observation, quantified success criteria (primary, guardrail, and secondary metrics), sample size and duration estimates so you know when you'll have an answer, ICE prioritization so you ship the highest-leverage bets first, and a decision rule so the team aligns upfront on what "success" means and how you'll interpret results. You'll ship faster, reduce bias, and build a culture where data beats opinion. Every experiment you run also builds a learning library—patterns in what works for your users, and guardrails that protect your product as you scale.
