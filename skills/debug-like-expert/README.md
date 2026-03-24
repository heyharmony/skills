# Debug Like an Expert

> Transform "it's broken" into "here's the root cause" — systematic debugging that moves from flailing to evidence-based diagnosis in minutes, not hours.

## What It Does

Guides you through disciplined, evidence-based debugging — a structured process that moves from symptom to root cause. Expert debugging isn't random; it's reproduce → isolate → hypothesize → test → verify. Grounds strategies in code context, error messages, and stack traces. When you have conversation data from team retrospectives or past incident discussions, it extracts patterns your team has seen before. Works standalone from error messages and code context alone.

## Who It's For

- **Junior engineers** learning systematic debugging from experienced peers
- **On-call engineers** who need to diagnose production issues fast under pressure
- **QA engineers** preparing detailed bug reports that developers can act on immediately
- **Tech leads** teaching debugging discipline to their teams
- **Founders** needing to unblock a critical production issue with no expert on staff

## Use Cases

- You have an error message and no clue where to start → Systematic isolation process to identify which layer (frontend, API, database) has the problem
- Bug is intermittent and you've been flailing for hours → Structured hypothesis formation and testing to force progress
- You need to fix a production issue in 30 minutes → Fast isolation framework that prioritizes likelihood and ease of testing
- You want to teach a junior engineer how to debug properly → Walk through the framework together on a real bug
- You're writing a detailed incident post-mortem → Root cause analysis template that goes beyond "we added a null check"

## Connectors

Works standalone, but richer with these integrations:

- **Linear** — Pull bug reports, reproduction steps, and historical context from similar issues to accelerate hypothesis formation
- **GitHub** — Reference recent commits and PR discussions that may have introduced the bug; learn from past debugging discussions in comment threads
- **Slack** — Pull team discussions from retrospectives about past bugs and common failure patterns in your codebase
- **Notion** — Access architecture docs and data flow diagrams to guide hypothesis formation

## Setup

Install and go. Works best when you have an error message, stack trace, or reproduction steps written down. If you have team discussions about debugging patterns or past incidents, even better.

## What You Get

A complete debugging workflow starting with evidence gathering (error logs, stack traces, timing) and reproducibility assessment (repeatable vs. intermittent). Layer isolation matrix (frontend vs. API vs. database vs. infrastructure) pinpoints where the problem lives. Hypothesis formation framework ranks likely causes by probability and ease of testing. Evidence-based testing protocols force you to test predictions instead of guessing. Root cause analysis goes beyond symptoms to understand why the bug wasn't caught (missing test, design issue, assumption). Fix verification checklist ensures the fix addresses the root cause and doesn't introduce regressions. Prevention strategies (monitoring, testing, design changes) document how to prevent recurrence. Real incident report template with metrics tracking time-to-resolution, and edge case handling for intermittent, cascading, and environment-specific bugs.
