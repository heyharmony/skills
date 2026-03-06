---
name: "Conversation Research Brief"
description: "Researches a topic that surfaced in a Harmony conversation and produces a structured briefing with findings, sources, and next steps — grounded in what was actually discussed. Trigger on: research this, look into, brief me on, dig into, what do we know about."
dependencies: []
---

## Purpose

When a topic, competitor, or question comes up during a conversation, this skill takes it from "someone mentioned it" to "here's what we know." It gathers relevant information, synthesises it into a structured briefing, and ties it back to the original conversation context so the team knows exactly why it matters.

## When to Use

- A prospect mentions a competitor or technology during a sales call and you need a quick competitive brief.
- A teammate raises a question in a meeting ("Has anyone looked into GDPR implications for this?") and nobody has the answer.
- Leadership wants a deeper look at a market trend referenced in a strategy discussion.
- Anytime a conversation surfaces a knowledge gap that needs filling.

## Instructions

1. **Pull the data** — Extract the specific topic, question, or entity from the Harmony transcript or user prompt. Note who raised it, when, and in what context. Check Harmony's conversation history for prior mentions.
2. **Process** — Gather from available sources: Harmony conversation history, workspace Notes, and general knowledge. Prioritise relevance to the conversation context. Synthesise into background, key findings, and connection to the team's situation.
3. **Format the output** — Structure as Markdown: background, numbered findings with sources, relevance to the conversation, and recommended next steps.
4. **Deliver** — Return in chat or post to a Harmony Note linked to the originating conversation.

## Output Format

```markdown
### Research Brief — [Topic]

**Requested by:** [Who raised it, or "User"]
**Conversation context:** [Meeting title + date, or "Ad hoc request"]
**Depth:** [Quick / Standard / Deep]

#### Background
[2-3 sentences establishing what this topic is and why it's relevant right now.]

#### Key Findings
1. **[Finding 1]** — [Detail with source or reference]
2. **[Finding 2]** — [Detail with source or reference]
3. **[Finding 3]** — [Detail with source or reference]

#### Relevance to Your Situation
[1-2 paragraphs connecting the findings to what was discussed in the conversation. Quote or reference the original discussion where helpful.]

#### Recommended Next Steps
- [Action 1]
- [Action 2]

#### Sources
- [Source 1]
- [Source 2]
```

## Example

**Input:** During a product strategy meeting, the CTO said: "I keep hearing about Model Context Protocol — should we be thinking about MCP support?" User triggers: "Research MCP, standard depth."

**Output:**

```markdown
### Research Brief — Model Context Protocol (MCP)

**Requested by:** CTO (product strategy meeting)
**Conversation context:** Product Strategy Sync, 2026-03-03
**Depth:** Standard

#### Background
Model Context Protocol (MCP) is an open standard introduced by Anthropic in late 2024 for connecting AI assistants to external tools, data sources, and APIs. It provides a universal interface so AI models can access live context without custom integrations per tool. Adoption has grown significantly across developer tooling and enterprise AI platforms.

#### Key Findings
1. **Growing ecosystem** — As of early 2026, MCP is supported by major AI platforms including Claude, Cursor, and several enterprise copilot frameworks. The open-source spec has 40k+ GitHub stars.
2. **Competitive relevance** — Three direct competitors (Gong, Fireflies, Otter) have announced or shipped MCP server implementations, allowing their conversation data to be queried by AI assistants.
3. **Implementation effort** — A basic MCP server exposing read-only conversation data typically takes 2-4 weeks for a small team. The spec is well-documented with reference implementations available.

#### Relevance to Your Situation
In the strategy meeting, the CTO noted that customers are increasingly asking about AI interoperability — "they want their tools to talk to each other without us building point-to-point integrations" (12:34). MCP directly addresses this: shipping a Harmony MCP server would let customers query conversation data from any MCP-compatible AI assistant, reducing integration requests while expanding Harmony's surface area.

#### Recommended Next Steps
- Review competitor MCP implementations to benchmark scope and capabilities.
- Estimate engineering effort for a Harmony MCP server (start with read-only transcript and insights access).
- Add to Q2 roadmap discussion with a lightweight proposal.

#### Sources
- Anthropic MCP specification (modelcontextprotocol.io)
- GitHub: MCP reference implementations
- Competitor announcements: Gong AI Hub (Feb 2026), Fireflies MCP release notes (Jan 2026)
```

## Edge Cases

- **No specific conversation referenced:** Treat as an ad hoc request. Produce the briefing without the "Relevance to Your Situation" section and note that no conversation context was provided.
- **Topic too broad:** Ask the user to narrow the focus (e.g., "Competitor pricing" → "Competitor pricing for enterprise plans in EMEA"). If no clarification given, default to a "Quick" depth overview.
- **Topic already researched in a previous conversation:** Surface the prior research from Harmony's history and highlight what has changed since.
- **Sensitive or speculative topics:** Stick to verifiable information. Clearly label anything that is an inference or estimate.
