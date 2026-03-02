# Email Drafting

## Description

Drafts professional emails based on a brief, adjusting tone and structure to match the intended audience and purpose.

## Triggers

- Manual invocation

## Inputs

| Name      | Type   | Required | Description                                  |
| --------- | ------ | -------- | -------------------------------------------- |
| brief     | string | yes      | What the email should convey                 |
| tone      | string | no       | Tone (formal, friendly, neutral)             |
| recipient | string | no       | Audience context (e.g. client, team, manager)|

## Outputs

A ready-to-send email with subject line and body.
