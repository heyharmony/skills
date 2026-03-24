# Build AI Product Strategy

> AI is not a feature; it's a tool for solving specific problems. Start with the problem, not the technology.

## What It Does

This skill helps you build AI into your product strategy without falling into the "AI for AI's sake" trap. It guides you to identify what becomes possible with AI that wasn't before, define where humans and algorithms should make decisions, and design for failure modes (because AI will fail). You'll learn to make disciplined build-vs-buy decisions by evaluating defensibility, cost, and true strategic value, not just novelty. You'll create feedback loops that continuously improve your model over time and establish evaluation frameworks that prove AI is actually delivering customer value. Critically, you'll learn to measure success by adoption and business metrics, not model accuracy.

## Who It's For

- **Product managers** deciding whether and how to add AI features to existing products
- **Founders** building AI-first companies who need to think beyond the model
- **Engineering leaders** implementing AI features and managing model deployment and improvement
- **Data scientists** who want to ensure their models actually solve customer problems
- **Growth leaders** exploring how AI can unlock new use cases or markets
- **Security and compliance teams** thinking through risks and fairness implications of AI
- **ML engineers** designing feedback loops and evaluation frameworks that compound model value
- **Finance and business leaders** evaluating whether AI investments are defensible or just hype

## Use Cases

- **LLM integration planning**: You want to use Claude or GPT in your product. Before you build, define the human-AI boundary, failure modes, and evaluation criteria → you ship something users actually trust
- **Build vs. buy decision**: Should you train a custom model, fine-tune an existing one, or use an API? Evaluate cost, defensibility, and differentiation → you avoid overspending on models that are actually commodity
- **Scaling AI feature**: Your AI feature works in beta. Now what? How do you monitor model performance, improve it based on feedback, and keep cost reasonable at scale → you build infrastructure that compounds over time
- **AI competitive response**: A competitor launched an AI feature. Is it genuine differentiation or marketing? Reverse-engineer their moat → you can compete where they're actually weak
- **Data strategy for a new product**: You're building an AI-first product and need to understand data infrastructure, feedback loops, and cost implications → you plan for long-term model improvement, not just launch
- **Fairness and bias concerns**: Your AI model might discriminate against certain groups. How do you monitor for and mitigate bias → you build products that are fair and avoid regulatory risk

## Connectors

**Works standalone**, but richer with:
- **Notion**: Document AI strategy, human-AI boundary decisions, failure modes, and build-vs-buy framework
- **GitHub**: Track model evaluation metrics, feedback loop implementation, and retraining workflows
- **Slack**: Share AI product decisions and gather feedback on model performance from beta users
- **Linear**: Manage data labeling work, model improvement iterations, and feedback loop engineering
- **Google Drive**: Collaborate on competitive analysis and failure scenario documentation
- **Mixpanel or analytics tools**: Measure adoption and business impact of AI features, not just model metrics

## Setup

1. Identify a customer problem you want to solve with AI (or validate whether AI is needed)
2. Define what the algorithm will handle and what humans will handle
3. Create a baseline for comparison (human performance, random, or heuristic rule)
4. Set target accuracy and decide acceptable error rates for failure modes
5. Plan your evaluation framework and feedback loop infrastructure
6. Make a build-vs-buy decision based on defensibility and cost
7. Document the strategy and share with engineering and product teams

## What You Get

- A clear problem statement showing why AI matters (not hype) and what becomes possible with AI that wasn't before
- A human-AI boundary definition that prevents either over-automation or missed opportunities
- A documented failure mode analysis and UX approach for when the model is wrong (graceful degradation)
- An evaluation framework showing how you'll measure whether AI is actually working (adoption + business metrics, not just accuracy)
- A data flywheel plan explaining how user actions improve the model over time
- A build-vs-buy decision with cost and defensibility reasoning (are you buying time to build defensibility?)
- A 6-12 month roadmap showing how you'll evolve the AI feature and generate compounding value
- Competitive analysis showing what makes your AI approach defensible vs. commodity

## Key Insight

AI is only strategic if it compounds over time. A one-time model that doesn't improve is just an expensive feature. Before building, ensure you have (1) a feedback loop that captures signal, (2) the ability to retrain, and (3) a clear decision boundary that makes AI value obvious to users. Without all three, you're probably not buying much defensibility.

## Pro Tips

- Start with baselines. How well does random perform? How well does a simple heuristic perform? Your AI should beat both. If a rule beats your model, use the rule.
- Plan for failure. How will your product gracefully degrade when the model is wrong? What's the user experience of an error?
- Don't optimize for accuracy alone. Optimize for business impact: adoption, retention, revenue. A 70% accurate model that users trust outperforms a 95% model they don't use.
