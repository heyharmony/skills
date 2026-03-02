---
name: Meeting Summary
description: Produces a structured summary from meeting notes or a transcript, extracting key decisions, action items, and discussion highlights.
---

# Meeting Summary

## Description

Produces a structured summary from meeting notes or a transcript, extracting key decisions, action items, and discussion highlights.

## Triggers

- Manual invocation

## Inputs

| Name       | Type   | Required | Description                          |
| ---------- | ------ | -------- | ------------------------------------ |
| transcript | string | yes      | Raw meeting notes or transcript      |
| format     | string | no       | Output format (bullets, narrative)   |

## Outputs

A summary containing:
- Key discussion points
- Decisions made
- Action items with owners (if identifiable)
