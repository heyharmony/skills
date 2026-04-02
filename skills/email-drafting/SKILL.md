---
name: "Draft Follow-Up Email"
description: "Drafts a polished follow-up email from a Harmony conversation — matching tone, audience, and purpose, grounded in what was actually said. Trigger on: draft email, write email, follow-up email, send recap, email from meeting."
dependencies: []
author: "Harmony"
version: "1.0.0"
icon: "sparkles"
cover: ""
screenshots: []
category: "Productivity"
---

## Purpose

Turns a Harmony transcript or summary into a ready-to-send email. Pulls the relevant points from what was actually said — names, dates, commitments — and crafts an email that matches the right tone and level of detail for the recipient. No blank-page syndrome, no misquoted details.

## When to Use

- After a sales call, to send a follow-up with next steps and commitments.
- After an internal meeting, to share a recap with someone who wasn't there.
- When a conversation surfaces a request that needs a written response (e.g., pricing, status update).
- Anytime you'd say "I need to send an email about what we just discussed."

## Instructions

1. **Pull the data** — Retrieve the Harmony transcript, summary, or Insights for the referenced conversation. Identify the recipient, purpose, and any specific commitments or topics to include.
2. **Process** — Match tone to the audience: formal for external stakeholders, conversational for teammates, warm but professional for clients. Determine length — short and punchy for action-oriented emails, more detailed for recaps.
3. **Draft the output** — Write a subject line and body. Lead with purpose, include specifics sourced from the conversation (names, dates, commitments), close with a clear call to action or next step. Format as structured Markdown.
4. **Deliver** — Return the email in chat, ready to copy-paste or push via integration (Slack, HubSpot, etc.).

## Output Format

```markdown
### Email Draft

**To:** [Recipient name or role]
**Subject:** [Concise, specific subject line]

---

[Email body — 2-5 paragraphs depending on purpose]

[Closing + signature placeholder]
```

## Example

**Input:** Harmony transcript of a 20-minute sales discovery call with Acme Corp. User says: "Draft a follow-up email to the VP of Engineering, formal tone."

**Output:**

```markdown
### Email Draft

**To:** Jamie Rivera, VP of Engineering — Acme Corp
**Subject:** Follow-up: Integration timeline and next steps

---

Hi Jamie,

Thank you for taking the time to walk us through your current workflow today. It was great to hear how your team is handling the migration, and I have a much clearer picture of where we can help.

A few things I want to confirm based on our conversation:

- **Timeline:** You mentioned aiming to have the new pipeline live by end of Q2, with a hard cutover in July. We can support a phased rollout starting mid-April.
- **Technical requirements:** Your team needs SSO support and audit logging before moving to production. Both are available on our Enterprise plan — I'll send the spec sheet separately.
- **Next step:** You suggested looping in Dana from Security for a quick technical review. I'll send a calendar invite for next Wednesday at 2pm, as discussed.

If any of the above needs adjusting, just let me know. Looking forward to the next conversation.

Best regards,
[Your name]
```

## Edge Cases

- **No specific conversation referenced:** Ask the user to provide a meeting link, transcript snippet, or key points. Do not fabricate conversation details.
- **Multiple topics discussed:** Focus on the user's stated purpose. If unclear, draft separate emails per topic and let the user choose.
- **Sensitive content in transcript:** Flag potentially confidential information (compensation, legal, personnel) and ask the user to confirm before including.
- **Recipient not identified:** Use a generic salutation and flag "[Recipient name]" as a placeholder.
