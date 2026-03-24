# Extension Authoring Guide

> Turn a browser extension idea into production-ready code — from architecture decisions through manifest design, component structure, and app store submission.

## What It Does

Guides you through building a browser extension from concept to launch. Helps you decide on the right architecture (content script vs. background worker vs. popup), map product requirements to browser APIs, design permissions (minimal surface area), and plan implementation with performance budgets. Works from your product requirements and browser constraints alone, but gets richer with conversation data about technical discussions, user feedback on desired behaviors, or engineering constraints from past projects.

## Who It's For

- **Junior engineers** building their first extension and needing architecture guidance
- **Product managers** shipping browser extensions and needing to explain permissions to users
- **Technical leads** architecting extension projects for their team to implement
- **DevOps/infosec teams** reviewing extension permissions for compliance and security
- **Founders** launching browser extension products and needing to understand store requirements

## Use Cases

- You want to build an extension but don't know if it should use a content script or background worker → Architecture mapping and decision tree
- Your extension needs API access, but you're not sure which permissions are actually required → Permissions mapping and minimal-surface-area approach
- You're redesigning an extension after performance degradation → Architecture review and performance budget planning
- You need to explain to an engineer why certain browser APIs are unavailable in content scripts → Clear component responsibilities and API access matrix
- You're preparing for Chrome Web Store review and need to document why each permission is necessary → Permissions justification template

## Connectors

Works standalone, but richer with these integrations:

- **GitHub** — Reference similar open-source extensions, review architecture patterns in existing code, understand how others handled content script messaging or API limitations
- **Slack** — Pull engineering team discussions about extension feature scope, performance constraints, or browser API changes
- **Linear** — Reference existing issues and feature requests for extensions to ensure architecture supports planned features without scope creep
- **Notion** — Access product specs and browser extension guidelines to ensure compliance with platform policies (Chrome Web Store, Firefox AMO)

## Setup

Install and go. Works best when you have product requirements written down and understand what browsers you're targeting. If you have team discussions about technical constraints or user feedback, even better.

## What You Get

A complete extension authoring blueprint: scope definition with v1/out-of-scope callouts, capability-to-API mapping showing which browser APIs power which features, four architecture patterns (content-script-only, content+background, full-featured with popup, modern V3 patterns) with decision tree guidance, production-ready manifest.json template, component architecture with responsibilities (content script, background service worker, popup), message passing protocols, data/state management strategy (chrome.storage.sync vs. local), performance targets (<500ms load, <50MB memory), browser compatibility matrix, comprehensive testing checklist, rollout phases with success metrics, and implementation roadmap with code examples.
