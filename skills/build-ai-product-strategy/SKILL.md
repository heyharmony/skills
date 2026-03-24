---
name: "Build AI Product Strategy"
description: "Design a product strategy where AI is the tool, not the goal. Define the human-AI boundary, design for failure, create data flywheels, and make disciplined build-vs-buy decisions. When to use it: When considering AI features, before implementing LLM integrations, during AI product planning, or when evaluating AI-first opportunities. Trigger on: 'Should we use AI', 'LLM integration', 'Machine learning strategy', 'AI differentiator', 'Data moat', 'Evaluation and feedback'."
dependencies: []
connectors:
  - name: "Notion"
    reason: "Document AI strategy, human-AI boundary decisions, failure mode planning, and build-vs-buy rubric"
  - name: "GitHub"
    reason: "Track model evaluation metrics, feedback loop implementation, and retraining workflows"
  - name: "Slack"
    reason: "Share AI product decisions and gather feedback on model performance from beta users"
  - name: "Linear"
    reason: "Manage data labeling work, model improvement iterations, and feedback loop engineering"
  - name: "Google Drive"
    reason: "Collaborate on competitive analysis, use case documentation, and failure scenarios"
---

## Purpose

The biggest trap in AI product strategy is building AI for AI's sake. You integrate an LLM because it's trendy, not because it solves an actual customer problem or creates defensible value.

Harmony helps you build an AI product strategy by:
- Starting with problems, not solutions (does AI unlock something that wasn't possible before?)
- Clarifying the human-AI boundary (what should the algorithm handle, what should people handle?)
- Designing for failure states (what happens when the model is wrong?)
- Building evaluation frameworks and feedback loops (how do you improve continuously?)
- Making disciplined build-vs-buy decisions (is this your differentiator, or commodity?)
- Creating data flywheels (how do user actions improve the model?)

AI doesn't change your fundamental job as a product builder. You still need to understand problems, design great experiences, and think about defensibility. AI is just a different class of tool for solving specific problems.

## When to Use It

- **Evaluating AI feature opportunities**: A customer or your team suggests an AI-powered feature. Before you build it, understand the problem it solves and whether AI is required or just nice to have.
- **LLM integration planning**: You want to use GPT, Claude, or a custom model in your product. Where should the boundary be between model decisions and human judgment?
- **Data strategy for a new product**: You're building an AI-first product and need to understand what training data, user feedback, and infrastructure you need.
- **Competitive assessment**: A competitor launched an AI feature. Do they have a genuine moat, or did they just add an LLM wrapper? Can you differentiate?
- **Build vs. buy decision**: Should you train a custom model, fine-tune an existing one, or use an API? What's your actual defensible advantage?
- **Handling model improvements**: Your AI feature shipped. Now what? How do you improve it when the model gets smarter, or when users demand better accuracy?
- **Failure and trust**: Your AI is right 95% of the time. What happens in the 5% of cases it's wrong? Is that acceptable, or do you need to redesign the interaction?

## Instructions

1. **Start with the customer problem, not the AI technique**
   - Ask: What customer problem would be *unsolved* if AI didn't exist?
   - Example: "Our customers manually tag incoming support tickets to route them to the right team. AI can automate this." Problem: manual triage is a bottleneck. AI is the tool.
   - Counter-example: "Let's use AI to summarize meeting transcripts because LLMs are amazing." No customer asked for this; it's a solution looking for a problem.
   - Document: What does the customer do today, and what friction are they experiencing? Don't mention AI yet.
   - Test: If you removed the AI from your solution, would it still solve the customer problem? If yes, you don't need AI. If no, proceed.

2. **Define the human-AI boundary**
   - Decide: What does the algorithm handle, and what do people handle?
   - High accuracy needed: Humans approve algorithm suggestions before action (e.g., loan approval)
   - Medium accuracy: Algorithm acts, humans can override or review in context (e.g., email filters)
   - Exploratory/low-stakes: Algorithm acts, humans use it as a tool (e.g., brainstorming)
   - Document the boundary for each use case: "The model recommends, the human decides and learns."
   - Consider the workflow: Where does human judgment add the most value? Where does it create friction?
   - Example: In customer churn prediction, the model identifies risk, the human decides retention strategy. The model shouldn't decide action—that requires business context the data doesn't contain.

3. **Design for failure**
   - Assume the model will be wrong. How often? What kinds of errors?
   - Test: What happens in failure cases? Is the UX acceptable?
   - Examples of failure design:
     - Content moderation: If the model rejects legitimate speech, what's the user's path to appeal?
     - Diagnosis: If the model misses a condition, does the human interface encourage a second opinion?
     - Recommendation: If the model recommends poorly, does the user understand why so they can correct the behavior?
   - Error budget: Decide acceptable error rates by use case. Recommend a friend algorithm? 10% error is fine. Diagnose cancer? 0.1% is still too high.
   - Test with users: Show them failure scenarios. Ask: "If the AI is wrong here, can you live with that?"

4. **Build the evaluation framework**
   - Define success metrics before building (not after):
     - Accuracy metrics: Precision, recall, F1 score, AUC-ROC (depending on the task)
     - Business metrics: Time saved, error reduction, customer satisfaction
     - Fairness metrics: Does the model perform equally well across demographic groups? (If fairness matters for your use case)
   - Create a baseline: How does the AI perform vs. random, or vs. a heuristic rule?
   - Example: "Our human triage agent routes 95% of tickets correctly on first try. We'll ship AI when it hits 92% (slightly lower is acceptable because it's async and learning)."
   - Set up ongoing monitoring: Once shipped, how do you measure real-world performance? What signals indicate the model is degrading?

5. **Create data flywheels and feedback loops**
   - User action = model improvement opportunity. Design for this.
   - Example: Every email a user marks as "not spam" or "spam" should improve the spam filter.
   - Feedback loop engineering:
     - What user action signals correctness? (Mark as spam, approve suggestion, create a bookmark, click to expand)
     - When do you collect feedback? (Immediately, after a delay, when users opt in?)
     - How do you use feedback to improve? (Retrain the model? Update a heuristic rule? Tune a threshold?)
   - Data moat: Over time, your users' feedback becomes your training data. This is defensible only if:
     - You can retrain frequently (infrastructure to support this)
     - User behavior data is hard for competitors to get (proprietary or otherwise)
     - Your model improves faster than competitors' as a result of feedback
   - Document the flywheel: "User does X → We collect signal Y → We retrain model with new data → Model improves → Users get better experience"

6. **Make build-vs-buy decisions**
   - Build custom model if:
     - The problem is specific to your domain (competitors won't have the same training data)
     - You have proprietary user feedback that improves the model over time
     - The model is a key differentiator (customers choose you because of model quality)
   - Buy/API if:
     - The problem is general (standard use case like sentiment analysis, entity extraction, summarization)
     - The third-party model is good enough for your accuracy threshold
     - The cost of training/maintaining is higher than the API cost
   - Fine-tune/customize if:
     - You need better accuracy than the base model, but building from scratch is overkill
     - You have labeled data specific to your use case
     - You want some defensibility over pure API calls
   - Example decision: "Churn prediction requires knowledge of our industry's specific signals. We'll build custom. General entity extraction is commodity—we'll use Claude API."

7. **Plan infrastructure and cost**
   - Model training: Do you have the labeled data to train a model? How will you get it?
   - Inference: What's the latency requirement? Does the model run in real-time or batch?
   - Cost at scale: API cost per prediction? GPU/compute cost to serve the model?
   - Example: "At 10M predictions/month, we pay $50k/month to Claude API. If we grew to 100M, we'd build custom to reduce cost to $15k/month."
   - Versioning and rollback: How do you test new models before releasing? Can you roll back if accuracy degrades?

8. **Document the AI product strategy**
   - Create a one-pager covering:
     - The customer problem (without mentioning AI)
     - What AI unlocks that wasn't possible before
     - The human-AI boundary and why it's drawn there
     - Failure modes and acceptable error rates
     - Evaluation framework and baseline
     - Feedback loop and data flywheel
     - Build vs. buy decision and reasoning
     - Success metrics (6-12 months)
     - Known risks (fairness, robustness, cost at scale)

## Output Format

```
# AI Product Strategy: [Company Name]

## Problem & Opportunity

**Customer problem (no AI mentioned):**
[Describe what customer does today and friction they experience]

**Why AI matters:**
[What becomes possible with AI that wasn't before? Emphasis: this is the justification, not the feature.]

**Competitive context:**
[Are competitors solving this? What's your angle?]

## Human-AI Boundary

**What the model does:**
- [Decision/task 1: e.g., "Identifies high-risk support tickets requiring escalation"]
- [Decision/task 2: e.g., "Recommends knowledge base articles to display"]

**What humans do:**
- [e.g., "Decides final escalation route and tone of response"]
- [e.g., "Reviews and provides feedback on article relevance"]

**Rationale:**
[Why this boundary? What would happen if the model decided everything? What if humans decided everything?]

## Failure Modes & UX

| Failure Mode | Likelihood | Consequence | UX/Mitigation |
|---|---|---|---|
| [Model misclassifies task] | [High/Medium/Low] | [User confused/action fails/opportunity missed] | [Show confidence score / Allow override / Log for retraining] |
| [Model is slow] | [Medium] | [User waits / Session times out] | [Optimize latency / Fallback to heuristic] |
| [Model discriminates against group X] | [Unknown, test needed] | [Unfair outcome / Legal risk / Reputational] | [Monitor fairness metrics / A/B test with humans] |

## Evaluation Framework

**Success metrics:**
- Accuracy: [Precision/Recall/F1 by class, or custom metric]
- Business impact: [Time saved, cost reduction, or quality improvement]
- Fairness: [Performance gap between demographic groups, if applicable]

**Baseline:**
- Random: [X%]
- Heuristic/Human: [Y%]
- Minimum acceptable: [Z%]

**Monitoring plan:**
- What KPIs indicate model drift? [e.g., "If precision drops below 88%, retrain"]
- How often do you evaluate? [Weekly? Monthly?]
- Who owns model health? [ML Engineer? Product? Data team?]

## Data Flywheel

**User action → Model improvement:**

1. User does [action] → signals [correct/incorrect]
2. We collect [data point] from this signal
3. We [retrain/tune/adjust] based on accumulated signals
4. Model improves on [metric]
5. User experience improves → encourages more [action]

**Data moat:**
- Why is our training data defensible? [Proprietary? Hard to replicate?]
- How quickly can we improve relative to competitors? [Retrain weekly? Monthly?]
- Risk: If we can't improve faster than competitors, or if our data isn't proprietary, is this a moat? [Honest assessment]

## Build vs. Buy Decision

**We will BUILD if:**
- [ ] Problem is domain-specific and competitors won't have equivalent training data
- [ ] We have internal labeled data or can economically create it
- [ ] Model quality is a key customer differentiator
- [ ] Cost of APIs at scale exceeds build cost

**We will BUY (API) if:**
- [ ] Problem is general and solved by existing models
- [ ] Available models meet our accuracy threshold
- [ ] API cost is lower than build + maintenance cost
- [ ] We don't need ongoing customization

**Decision: [BUILD / BUY / HYBRID (fine-tune)], because [specific reasoning]**

## Implementation Roadmap

**Phase 1 (Validation):**
- Build prototype with [off-the-shelf model / Claude API / human baseline]
- Test with [X] users, measure [metric]
- Gate: Model hits [Y accuracy] or we learn something that kills the feature

**Phase 2 (Closed beta):**
- [Custom training / API optimization / feedback loop setup]
- Collect user feedback and retrain
- Measure [fairness / performance / user satisfaction]

**Phase 3 (General availability):**
- [Performance optimization / cost reduction / multi-language support]
- Scale evaluation infrastructure
- Set up ongoing monitoring

## Risks & Mitigation

| Risk | Likelihood | Mitigation |
|---|---|---|
| Model accuracy is insufficient; users lose trust | [High/Med/Low] | Test with 50 users before shipping; measure acceptable error rate |
| Cost per inference exceeds business model | [Med] | Calculate cost at 10x/100x current scale; plan model optimization |
| Model discriminates against minority group | [Med if fairness-critical] | Audit training data; A/B test with demographic split |
| Competitor's model improves faster | [High] | Focus on feedback loop and data flywheel as differentiator |
| Regulatory change affects model deployment | [Low but important] | Monitor compliance landscape; design for explainability |

---

## Success Criteria (6-12 months)

- Model accuracy: [Target metric/threshold]
- User adoption: [% of relevant users trying the feature]
- Business impact: [Time saved, cost reduction, or revenue impact]
- Defensibility: [Is the model a customer differentiator? Would we lose customers if we removed it?]

## Next Steps

1. [Validate problem with X customer interviews]
2. [Build prototype with [model/API]]
3. [Define evaluation framework and baseline]
4. [Decide build vs. buy]
```

## Example

```
# AI Product Strategy: FlowState

## Problem & Opportunity

**Customer problem (no AI mentioned):**
Engineering managers schedule code reviews as a final step before merge. Reviews are async, so PRs wait 4-8 hours for feedback. In the meantime, developers either context-switch or wait idly. This delay compounds across a team: 50 developers × 1 hour wait per day = 400 lost developer-hours per month. Managers prioritize reviewing code from senior developers first, so junior developers' PRs languish. This creates frustration and slows onboarding.

**Why AI matters:**
An AI code reviewer can surface issues in seconds, not hours. For common problems (linting, security basics, obvious logic errors), AI can catch them immediately. This unblocks developers, lets managers focus on architectural and mentoring-focused feedback, and accelerates junior developer onboarding because their PRs don't go into a queue.

**Competitive context:**
GitHub Copilot and DeepCode do static analysis. We're positioned at the code review workflow, so we're complementary. No one has built AI code review as a primary product; this is an opportunity to own the workflow.

## Human-AI Boundary

**What the model does:**
- Identifies common issues: linting violations, security anti-patterns, performance problems
- Flags logic errors: potential null pointer exceptions, infinite loops, off-by-one errors
- Recommends better patterns: "This could use a caching layer" or "This function is >200 lines; consider breaking it up"
- Routes to the right human reviewer based on expertise

**What humans do:**
- Provide architectural feedback and design critique
- Make trade-off decisions ("We'll accept performance here to ship faster")
- Mentor junior developers through explanations
- Approve and merge (AI doesn't have that power)

**Rationale:**
AI is good at pattern-matching against known issues. It's bad at understanding business context and mentoring. The human reviewer can skip obvious linting issues and focus on the review that actually makes the junior developer a better engineer. For senior developers, AI surfaces boring issues so they can discuss architecture. The boundary prevents "AI is overly cautious and blocks everything" and instead makes the human's time more valuable.

## Failure Modes & UX

| Failure Mode | Likelihood | Consequence | UX/Mitigation |
|---|---|---|---|
| AI flags issue that isn't real (false positive) | High | Developer ignores AI feedback; loses trust | Show confidence score; let developer mark "not applicable"; track false positive rate |
| AI misses a real issue | Medium | Bug reaches production | Acknowledge: AI isn't a replacement for human review; measure detection rate vs. human |
| AI is slow; developer waits | Low | Defeats purpose | Cache results; run async; show results as they arrive |
| AI recommends something the team disagrees with stylistically | Medium | Friction in code review culture | Let teams configure rules; be configurable |

## Evaluation Framework

**Success metrics:**
- Detection rate: AI catches [X%] of issues a senior developer would catch
- False positive rate: [<5%] of AI suggestions are "not applicable" per developer feedback
- Time saved: Average PR wait time drops from 4h to [<1h]
- Developer satisfaction: NPS of code review process increases by [10+ points]

**Baseline:**
- Random: 0%
- Human (senior dev reviewing): ~75% of detectable issues
- Minimum acceptable: 50% (better than nothing, but not replacing human)

**Monitoring plan:**
- Weekly: Check false positive rate and developer feedback
- Monthly: Measure time-to-review and developer satisfaction
- Quarterly: Compare AI detection rate against human reviews on the same PRs
- Gate: If false positives exceed 10% or detection rate is <40%, retrain or reconfigure

## Data Flywheel

**User action → Model improvement:**

1. Developer marks AI suggestion as "not applicable" → signals we got it wrong
2. We collect [suggestion + feedback] as training data
3. We retrain on codebase-specific patterns from [company] PRs
4. Model improves on [company's specific style and tech stack]
5. Fewer false positives → developers trust AI more → more engagement → more feedback data

**Data moat:**
- Each company's codebase generates training data specific to their tech stack, coding style, and architecture
- We can fine-tune models per company or per team using their proprietary code
- Competitors won't have access to this data (it's private to the customer)
- Risk: If we can't retrain frequently or customize per customer, this isn't a moat

## Build vs. Buy Decision

**We will BUILD a custom code reviewer if:**
- [ ] We use Claude API as the foundation and fine-tune with customer code
- [ ] Fine-tuned model detects [X%] more issues than base Claude on customer PRs
- [ ] Fine-tuning is profitable at scale (cost < value delivered)

**We will BUY (Claude API) if:**
- [ ] Base Claude API hits 70% detection rate (good enough)
- [ ] Fine-tuning cost exceeds long-term API cost
- [ ] We need general-purpose code review, not custom

**Decision: HYBRID (Claude API + fine-tuning)**

Rationale: Claude API provides a strong foundation and moves fast. We'll offer fine-tuning as a premium feature for companies that want team-specific customization. Initially, most teams get base Claude; power users opt into fine-tuning.

## Implementation Roadmap

**Phase 1 (Private beta, 6 weeks):**
- Integrate Claude API into FlowState GitHub app
- Test with 20 companies
- Measure detection rate vs. human reviews
- Gate: Reach 55% detection rate or learn fatal flaw

**Phase 2 (Closed beta, 8 weeks):**
- Build fine-tuning infrastructure (optional, for power users)
- Collect feedback and retrain base model
- Improve false positive rate
- Measure time-to-review and developer satisfaction
- Gate: Hit 65% detection, <8% false positives, NPS >40

**Phase 3 (General availability, ongoing):**
- Expand to more languages and frameworks
- Offer team-specific fine-tuning as premium feature
- Monitor and retrain monthly

## Risks & Mitigation

| Risk | Likelihood | Mitigation |
|---|---|---|
| False positive rate is too high; developers distrust AI | High | Start with conservative confidence threshold; gather feedback; retrain |
| Competitors add code review to their products; feature becomes table stakes | Medium | Differentiate with customization and team-specific fine-tuning |
| Cost per inference exceeds what customers will pay | Medium | Cache results; batch processing for async reviews; calculate cost at 10x scale |
| Code review culture varies too much across teams; one-size-fits-all doesn't work | Medium | Build configuration options; allow team-specific rules; beta fine-tuning |

---

## Success Criteria (6-12 months)

- Detection rate: 65%+
- False positive rate: <8%
- Developer NPS on code review: +15 points
- 40%+ of PRs using AI suggestions
- Defensibility: Teams report code quality improvements they attribute to AI feedback

## Next Steps

1. Finalize Claude API integration (2 weeks)
2. Private beta with 20 companies (6 weeks)
3. Analyze results; decide on fine-tuning investment
4. Build feedback loop infrastructure
```

## Edge Cases

- **AI is good but not good enough**: Model hits 60% detection rate but teams want 85%. Options: (1) Set expectations lower—"AI finds some issues, humans find others," (2) Build custom model, (3) Accept this isn't a strong product fit. Don't force it.

- **False positives create more work than they save**: AI suggests things so aggressively that developers hate it. Fix: Lower confidence threshold, add configurability, retrain on false positives. If it's structural, maybe AI isn't the right tool.

- **Your data isn't proprietary enough to be defensible**: You built a model but competitors can train similar models on public code. Differentiation isn't in the model, it's in the experience or workflow. Pivot: Use commodity models (Claude API) and invest in UX and customization instead.

- **Accuracy is great but cost is astronomical**: Model works perfectly but costs $10 per inference and your business model charges $5/month. You built the wrong thing. Either: (1) Reconsider your pricing model, (2) Build a more efficient model, (3) Only run AI on certain PRs (high-risk ones), (4) Batch it overnight instead of real-time.

- **Regulatory or compliance issues emerge**: AI-generated suggestions could create liability in regulated industries. Ensure AI is an assistant, not a decision-maker. For compliance-critical code, require human approval. Consider fairness: Is your training data biased in ways that create problems?

- **User expectations diverge from reality**: Users expect "AI understands my code" but it actually does pattern-matching. Manage expectations in onboarding and design UX that makes the AI's limitations visible.
