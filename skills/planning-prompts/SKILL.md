---
name: "Write Better AI Prompts"
description: "Write clear, structured prompts that guide AI models toward better, more useful outputs — context, constraints, examples, reasoning steps. Ground in team discussions about model behavior, past prompts that worked, or user feedback on AI output quality. Trigger on: write a prompt for AI, improve AI output, prompt engineering, prompt design, make Claude better, structure a request to AI, AI prompt template."
dependencies: []
connectors:
  - name: "Slack"
    reason: "Pull team discussions about AI output quality issues, patterns of what prompts work well vs. poorly, and user feedback on AI-generated results"
  - name: "Notion"
    reason: "Access past prompt templates, documented best practices, and AI output examples to inform prompt structure"
  - name: "GitHub"
    reason: "Reference AI-generated code or documentation in PRs, code reviews that flag output quality issues, and commit messages explaining what worked"
  - name: "Linear"
    reason: "Track issues where users complain about AI output quality, feature requests for prompt improvements, and A/B tests of different prompt versions"
---

## Purpose

Write prompts that consistently produce high-quality AI output. Good prompts are structured: they provide context (what is this for?), state constraints (what's in/out of scope?), show examples (what does good look like?), and request explicit reasoning (how should you think about this?). When conversation data is available — team discussions about prompt iterations, user feedback on output quality, or past A/B tests of prompts — the design is grounded in what actually works for your use case. Works standalone from your task description and quality criteria when conversation data isn't available.

## When to Use

- You're asking an AI to do something important (write code, analyze data, draft comms) and you want better output than the default
- You've been getting mediocre AI results and want to understand why (almost always: your prompt is unclear)
- You're building a product that uses AI in the loop and need consistent, quality outputs for users
- You're teaching someone how to get good results from AI models
- You're building prompts for a team or across a company and want consistency

## Instructions

### 1. Gather context: what's the actual task?

Ask what the user is trying to accomplish:

- **What's the task?** What do you want the AI to produce? (Not "summarize this" but "extract 3 key risks from this board transcript, ranked by likelihood")
- **Who uses the output?** What will they do with it? (Changes how detailed/format the output should be)
- **What's the quality bar?** How will you judge if the output is good? (Be specific: 90% accuracy, includes X and Y but not Z)
- **What constraints exist?** Length, format, required sections, guardrails (what the AI should NOT do)?
- **What context does the model need?** Background info, definitions, previous outputs?

If Harmony conversation data exists, pull:
- Team discussions about "the AI keeps doing X wrong" (indicates missing constraint)
- Examples of good and bad AI outputs to use as reference
- User feedback on what worked and didn't work with past prompts
- Past A/B tests: "This version of the prompt got 85% user approval vs. 60%"

### 2. Define the output format explicitly

Vague output = vague AI results. Be specific about structure.

**Format options:**

| Format | Use When | Example |
|--------|----------|---------|
| **Markdown table** | You need structured, comparative data | "3 columns: Risk, Likelihood, Mitigation" |
| **Numbered list** | You need sequential items | "5–7 insights in priority order" |
| **JSON** | You need to parse it programmatically | Specific schema with required fields |
| **Paragraph prose** | You need narrative (blog post, email draft) | "2–3 paragraphs per section" |
| **Executive summary + detail** | You need both high-level and depth | "1-sentence summary, then 3–5 detailed findings" |

**Format specification template:**
```
Output format:
## [Section 1]
[Content type and length]

## [Section 2]
[Content type and length]

## [Section 3]
[Content type and length]
```

### 3. Provide context and background

The model can't read your mind. Provide:

**Context layers:**
1. **Purpose:** Why are you asking? What will you do with this?
2. **Role/perspective:** Should the AI think like a [product manager / investor / engineer / customer support]?
3. **Domain knowledge:** Define jargon, provide background information
4. **Constraints:** What's in scope? What's explicitly out of scope?

**Example:**
Instead of: "Analyze this deal."
Better: "You are a revenue ops manager reviewing a $500K enterprise deal. Our close rate is 40%; our average sales cycle is 120 days. This deal is at 90 days and has 3 stakeholders. Analyze and identify the top 3 risks to close, ranked by probability. Focus on decision-maker authority and timeline. Ignore pricing objections (handled separately)."

### 4. Show examples

Examples are the fastest way to train a model on what you want.

**Example structure:**
- **Good example:** One example of output you actually want (best case)
- **Acceptable example:** One example of output that's okay but not great (helps define the floor)
- **Bad example:** One example of what NOT to do (teaches the boundary)

**Example template:**
```
Example input: [sample]

Example output (GOOD):
[Detailed, realistic example of what you want]

Example output (ACCEPTABLE):
[Output that passes but isn't great]

Example output (POOR — avoid):
[Output that fails your criteria]
```

### 5. Request explicit reasoning

Make the model show its work. This catches errors and makes the output more useful.

**Reasoning patterns:**

| Pattern | When to Use | Example |
|---------|-------------|---------|
| **Step-by-step** | Breaking down complex analysis | "First, identify the problem. Second, rank causes. Third, recommend solutions." |
| **Confidence scores** | When uncertainty matters | "For each recommendation, include a 1–5 confidence score with brief reasoning." |
| **Trade-off analysis** | When there are competing concerns | "For each option, list 2 pros and 2 cons." |
| **Source citations** | When accuracy is critical | "Cite the specific statement/quote that led to each conclusion." |

### 6. Test and iterate

The first prompt is rarely perfect. Test with real inputs and refine.

**Iteration loop:**
1. Write prompt, test on 3–5 representative inputs
2. Evaluate: Does output meet your quality bar? Yes → ship. No → diagnose.
3. Diagnose: Is the AI confused about the format? Scope? Constraints?
4. Refine: Adjust the prompt to address the gap
5. Repeat until output consistently meets your bar

## Output Format

# Prompt Template — [Task Name]
_Prepared [date] · Quality bar: [80% accuracy / high helpfulness / <200 words / etc.]_

## Task Definition
[1–2 sentences: what output do you need and why]

## Context & Background
[Information the model needs to know to do this well]

## Role / Perspective
You are a [role]. Your job is to [specific responsibility].

## Scope
**In scope:**
- [What to analyze/consider]
- [What to focus on]

**Out of scope:**
- [What to explicitly NOT do]
- [What to avoid]

## Quality Criteria
[How will you judge if the output is good?]
- [Criterion 1]
- [Criterion 2]
- [Criterion 3]

## Output Format
```
[Exact structure the AI should follow]
[Include all required sections]
[Specify length/depth for each section]
```

## Example Input

[Sample input the AI should process]

## Example Output — GOOD

[Ideal example of what you want. This is your gold standard.]

## Example Output — ACCEPTABLE

[Output that's okay but not great. Shows the minimum bar.]

## Constraints & Notes
- [Any special rules]
- [Tradeoffs to consider]
- [What matters most if you had to choose]

## Reasoning Request
[How the model should show its work]

Example: "For each recommendation, explain your reasoning in 1–2 sentences."

## Now What?
- **Test the prompt:** Run it on 5 representative inputs; assess against quality criteria
- **Iterate:** If output misses the bar, diagnose why (unclear scope? missing context? bad example?)
- **Document:** Share this prompt with your team so others can use and improve it
- **Version:** Track prompt versions (v1, v2, etc.) when iterating; note what changed
- **Monitor:** If AI output is embedded in a product, track user feedback; refine based on real-world results

---

## Example

**User:** "We want Claude to analyze customer support calls and extract the top issue each customer faced. Right now, it's extracting 10+ issues per call and missing the obvious main one. How do I write a better prompt?"

**Output:**

# Prompt Template — Customer Support Issue Extraction
_Prepared 2026-03-22 · Quality bar: Correct main issue identified in 90% of calls_

## Task Definition
Extract the single primary issue from customer support call transcripts. The primary issue is the one that consumes the most time and attention and the customer is most frustrated about. Secondary issues exist but should not be reported.

## Context & Background
- **Support volume:** We handle 500+ calls/day across product features, billing, and general questions
- **Use case:** We use extracted issues to populate a weekly dashboard for the product team to prioritize fixes
- **Accuracy matters:** If we report the wrong main issue, the product team spends time on the wrong problem
- **Call length:** Calls range from 5 to 45 minutes; some meander; not all issues mentioned are equally important

## Role / Perspective
You are a support quality analyst. Your job is to identify what the customer's primary pain point was — what issue drove them to call and what they most needed resolved.

## Scope

**In scope:**
- The issue that consumed the most call time
- The issue the customer expressed most frustration about (tone, repetition, emotional intensity)
- The issue that the support agent focused on resolving
- Product bugs, missing features, unclear documentation, billing errors

**Out of scope:**
- Politeness issues (customer was rude, support was slow)
- Secondary questions (customer asked about a feature but didn't care much)
- Vague concerns (don't extract "the product is confusing" unless specifically about one feature)
- Issues the customer mentioned in passing but moved on from quickly

## Quality Criteria
- **Accuracy:** Extracted issue matches what human reviewer would identify 90% of the time
- **Specificity:** Issue is named specifically (e.g., "Export to CSV not working" not "Feature is broken")
- **Brevity:** Extracted issue is 5–10 words max (concise enough for dashboard)
- **Relevance:** Issue is tied to something the product team can act on

## Output Format
```
## Primary Issue
[Issue name in 5–10 words]

## Confidence
[High / Medium / Low]

## Why This Is the Primary Issue
[2–3 sentences explaining your reasoning. What signals made this the main issue?]

## Secondary Issues Mentioned (not reported)
- [Issue], but [reason it's secondary: mentioned in passing / customer didn't care / support resolved quickly]
```

## Example Input

**Call transcript excerpt:**
"...So I've been trying to export my report to CSV all week. It just keeps erroring. Very frustrating because I have a board meeting tomorrow and I need the data. By the way, do you have plans to support Google Sheets? That would be nice. Anyway, the CSV thing — I tried three times yesterday and gave up. Can you help? [Agent spends 15 minutes troubleshooting CSV export, finds it's a browser compatibility issue, resolves] Great, that's fixed. Hey, one more thing — can you send me an invoice for the Professional plan upgrade? [Agent emails invoice, call ends]"

## Example Output — GOOD

```
## Primary Issue
CSV export fails on Safari; blocks quarterly reporting

## Confidence
High

## Why This Is the Primary Issue
Customer spent 15+ minutes on this issue; expressed clear frustration ("very frustrating"); explicitly stated it blocked an urgent need (board meeting tomorrow). Support agent focused 80% of call time on this. Secondary issue (Google Sheets feature request) was mentioned casually and didn't require support attention. Tertiary issue (invoice) was administrative, not a product problem.

## Secondary Issues Mentioned (not reported)
- Google Sheets support request, but customer mentioned casually; not a blocker for them
- Invoice delivery, but administrative; not a product issue
```

## Example Output — ACCEPTABLE

```
## Primary Issue
CSV export not working

## Confidence
High

## Why This Is the Primary Issue
Customer mentioned it multiple times. Support spent time on it.

## Secondary Issues Mentioned (not reported)
- Google Sheets feature request
- Invoice needed
```

(Less detailed reasoning; still identifies the right issue, but doesn't provide the "why" clearly)

## Example Output — POOR (AVOID)

```
## Primary Issue
Multiple issues: CSV export fails, customer wants Google Sheets, needs invoice

## Confidence
Medium

## Why This Is the Primary Issue
Customer had several issues during the call.

## Secondary Issues Mentioned (not reported)
None identified separately
```

(Reports 3 issues instead of 1; misses the priority signal; unclear reasoning)

## Constraints & Notes
- If a call has a real technical blocker AND a feature request, the blocker is always primary
- If a customer mentions multiple issues with equal emphasis, pick the one the support agent spent the most time on
- Don't extract vague issues ("the product is hard to use"); always be specific to a feature/workflow
- Some calls are pure feature requests with no issues (e.g., "Will you add export to PDF someday?"). Mark confidence as "Low" and note that no primary issue exists

## Reasoning Request
For each extraction, explain:
1. What signals made you identify this as primary? (time spent, frustration level, urgency, support focus)
2. Why are other issues secondary? (mentioned in passing, feature request vs. bug, resolved quickly)

## Testing Checklist
- [ ] Run on 5 real support calls from this week; human reviewer agrees with 90%+ of extractions
- [ ] Try on a "meander" call where customer brings up 5+ topics; correctly identifies the main one
- [ ] Try on a call with a feature request (no actual issue); correctly outputs "No primary issue"
- [ ] Review confidence scores; make sure "High" matches human agreement

## Now What?
- **Test the prompt:** Run on a sample of yesterday's support calls; have a human QA verify 5–10
- **Iterate:** If accuracy is <85%, diagnose which calls failed (vague issue? secondary issue ranked first?) and refine
- **Document:** Share this prompt in the #support-analytics Slack channel so others can use it
- **Version:** Tag this as v1.0; when you iterate, update the template and version to v1.1
- **Monitor:** After deploying to production, track: % of extractions that match human review (aim for 90%+); refine monthly

---

## Edge Cases

- **Call with multiple issues of equal weight:** Customer called about Feature A bug AND Feature B feature request, both took 20 min each. In this case, report the bug as primary (bugs are always higher priority than feature requests).
- **Customer was angry about process, not product:** Call is mostly customer complaining they had to wait on hold. The actual product issue (which gets resolved in 2 min) was secondary. Extract the original issue, not the process complaint.
- **Call is pure feature request:** Customer calls to ask if you'll add X feature. No actual issue/bug. Output: "No primary issue" with confidence "N/A". Don't force an issue where none exists.
- **Vague wording:** Customer says "the dashboard is confusing." Dig into the call: which part? They struggled with the reporting wizard. Extract: "Reporting wizard UX unclear" (specific, actionable).
- **Call is in a language other than English:** Works fine; Claude handles multiple languages. Just note the language in the output if relevant.
- **Very short call (2 minutes):** Might not have enough data to extract main issue. If the call is too short to judge, output confidence "Low" and explain why.

## Prompt Iteration Example

**v1.0:** "Extract the main issue from this support call."
- **Result:** Too vague; model extracted 3–4 issues per call
- **Diagnosis:** Missing constraints about what "main" means

**v1.1:** "Extract the issue the customer was most frustrated about."
- **Result:** Better (2–3 issues), but sometimes picked emotional tone over actual impact
- **Diagnosis:** Missing definition of "primary" (time spent vs. frustration level)

**v2.0:** (Above example output)
- **Result:** 85% accuracy on test set
- **Next iteration:** Add example of "multiple equal issues" to clarify tie-breaking

**v2.1:** (With added constraint about bug > feature request priority)
- **Result:** 92% accuracy; ready for production
