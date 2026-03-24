# Log Key Decisions

## Overview

Log Key Decisions is a Harmony skill that extracts, documents, and organizes decisions from meeting transcripts. Instead of losing decisions in the noise of Slack channels and meeting notes, this skill automatically captures who decided what, when, why, and what alternatives were considered—building a searchable institutional memory.

## The Problem

Organizations make hundreds of decisions in meetings every month, but almost never document them systematically. Six weeks later:
- Someone asks "why did we choose Vendor A?" and no one remembers.
- The same debate resurfaces because there's no record the decision was already made.
- New team members inherit decisions without understanding the reasoning.
- Post-mortems fail because the decision chain is lost.

## The Solution

This skill mines Harmony meeting transcripts to extract decisions in real time. For each decision, it captures:
- **What** was decided (decision statement)
- **Who** made it (decision maker and attendees)
- **Why** (stated rationale)
- **What alternatives** were considered and rejected
- **When** (date and timestamp)
- **Type** (strategic, operational, technical, hiring, financial)
- **Confidence** (unanimous, majority, executive override)

The output is a searchable decision log with unique IDs, tags, and links to source transcripts.

## Key Features

- **Automatic extraction** from Harmony transcripts—no manual logging required
- **Complete context capture** — decision, maker, rationale, alternatives, attendees
- **Searchable and taggable** — find past decisions in seconds
- **Confidence tracking** — see if decisions were unanimous or controversial
- **Audit trail** — links to source transcripts and timestamps
- **Decision reversal tracking** — flag when decisions are overturned and why
- **Restricted access** — sensitive decisions (personnel, compensation) can be flagged private
- **Onboarding tool** — bring new hires up to speed on organizational choices

## Use Cases

- **After key meetings** — Capture decisions while context is fresh
- **Weekly digests** — Auto-extract from all meetings for a running log
- **Before reopening a debate** — Search to see if this was already decided and why
- **New hire onboarding** — Explain the decisions that shaped the current product, team, and strategy
- **Compliance and audit** — Demonstrate a documented decision trail
- **Quarterly reviews** — Assess whether past decisions proved sound
- **Project post-mortems** — Trace the decision chain and identify breakpoints

## How to Use

1. After a meeting with significant decisions, ask Harmony: _"Extract the key decisions from this meeting transcript"_
2. Review the extracted decisions—add any context or refinements
3. Store in your decision log (Notion, Google Drive, Confluence, or Linear)
4. Tag decisions by type, project, or stakeholder for easy searching
5. Review decisions quarterly; update status (Active, Reversed, Confirmed)

## Role

For Everyone — Product managers, leaders, engineers, and individual contributors can use this skill to understand past decisions and prevent re-litigation.

## Supported Connectors

- Harmony transcripts (audio, video, text)
- Notion (store and search decision log)
- Confluence (team wiki)
- Google Drive (shared decision spreadsheet or doc)
- Linear (link decisions to issues and epics)
- Slack (post decision summaries to channels)

## Example Output

See SKILL.md for a full worked example from a fictional logistics SaaS company (Waypoint). The example shows three decisions extracted from a single product strategy meeting, including decision statements, rationale, alternatives rejected, attendees, type, confidence, and tags.

## Tips

- **For best results:** Use this skill on decisions that emerge during longer meetings (30+ min) where debate happened before the call was made. Snap decisions in brief 5-min check-ins are harder to extract well.
- **Thread decisions:** If a decision evolved across multiple meetings, link them together in a chain.
- **Tag for searchability:** Use consistent tags (vendor, pricing, mobile, hiring, api, etc.) so you can find related decisions later.
- **Restrict sensitive decisions:** Flag HR, compensation, and layoff decisions as "Restricted Access" to limit visibility.
- **Review quarterly:** Mark decisions as Active, Confirmed, or Reversed on a regular schedule. This keeps the log current and accurate.

## Support

For issues, questions, or feature requests, contact the Harmony support team or file an issue in the skill repository.
