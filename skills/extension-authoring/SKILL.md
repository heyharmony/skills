---
name: "Design Browser Extension"
description: "Write a browser extension from concept to launch-ready code — capabilities, permissions, manifest, content scripts, background services. Ground in product requirements, user research, or technical constraints from dev meetings. Trigger on: build an extension, write a browser extension, extension architecture, Chrome extension, Firefox addon, browser automation."
dependencies: []
connectors:
  - name: "GitHub"
    reason: "Reference similar open-source extensions, review existing extension code patterns, and track architecture decisions from PR comments"
  - name: "Slack"
    reason: "Pull engineering team discussions about desired extension capabilities, performance constraints, and user feedback from extension beta testing"
  - name: "Linear"
    reason: "Track feature requirements and technical debt related to extension development; reference browser compatibility requirements and bug reports"
  - name: "Notion"
    reason: "Access product specs, design docs, and browser extension guidelines to ensure compliance with platform policies"
author: "Harmony"
version: "1.0.0"
icon: "sparkles"
cover: ""
screenshots: []
category: "Product"
---

## Purpose

Guide the authoring of a browser extension from conceptual design through production-ready code. A solid extension starts with clarity about what it needs to do (capabilities), how it integrates with the browser (content scripts vs. background workers), and what permissions it requires (security). When conversation data is available — team standups about feature scope, user research on desired behaviors, technical discussions about performance or compatibility — the design is grounded in real constraints. Works standalone from product requirements and browser environment knowledge when conversation data isn't available.

## When to Use

- Starting a new browser extension project and need architecture guidance before writing code
- Redesigning an extension after performance issues or permission scope creep
- Preparing a manifest and permissions audit for store review or security compliance
- Planning extension evolution (v1 MVP → v2 with advanced features while managing tech debt)
- Teaching a junior engineer how to structure an extension project end-to-end

## Instructions

### 1. Gather context and define extension scope

Ask what the user wants to build:

- **What's the core job?** What does the extension do for the user? (e.g., "block ads," "summarize page," "fill forms")
- **Where does it operate?** Current page only? All pages? Specific domains?
- **What data does it need access to?** Page content, cookies, user history, passwords, network requests?
- **What's the minimum viable extension?** v1 scope — one clear job, no scope creep
- **What's the platform?** Chrome, Firefox, Edge, Safari? Multi-browser or single?

If Harmony conversation data exists, pull:
- User research about what users want from extensions (qualitative feedback from interviews)
- Engineering team discussions about performance budgets, persistence strategy, or browser API changes
- Product requirements from team meetings about desired features, user flows, or privacy constraints
- Past technical decisions on similar projects (why was state kept in localStorage vs. IndexedDB, etc.)

### 2. Map capabilities and browser API dependencies

List everything the extension needs to do, then map to required browser APIs:

| Capability | Browser API | Permission Required | Complexity | Notes |
|-----------|------------|-------------------|-----------|-------|
| Block ads on page | Content Script + DOM manipulation | `activeTab`, `scripting` | Low | Runs in isolation; can't access certain APIs |
| Read current tab URL | Content Script → Background | `activeTab` | Low | Safe, minimal permission |
| Intercept network requests | `webRequest` API | `webRequest`, host patterns | High | Deprecated in Manifest V3; use `declarativeNetRequest` |
| Store user preferences | `storage` API | `storage` | Low | Synced if user signed in (Chrome) |
| Add context menu items | Background Script | `contextMenus` | Low | Can tie to content actions |
| Access user's browsing history | Background Script | `history` | High | Requires explicit permission; privacy sensitive |
| Modify page content before load | Content Script + `document_start` timing | `content_scripts`, host pattern | Medium | Timing is critical for performance |
| Sync data to cloud | Background + Fetch API | Network permission (implicit) | Medium | Requires backend; user data privacy concerns |

### 3. Design the extension architecture

Choose your structure based on capabilities and constraints:

**Architecture patterns:**

| Pattern | Use When | Pros | Cons |
|---------|----------|------|------|
| **Content Script Only** | Extension only modifies DOM, no persistent state | Simple, fast, low permission surface | Can't access certain APIs; limited to page context |
| **Content Script + Background (Service Worker)** | Extension needs persistence, messaging, or browser API access | Flexible, can access all APIs, clean separation | More complex; message passing overhead |
| **Popup + Background + Content Script** | Extension has options menu, needs user interaction | Full-featured; user can customize | Larger codebase; more testing required |
| **Offscreen Document (Manifest V3)** | Extension needs DOM access in background context | Clean separation; better performance than older V2 | Requires understanding of new APIs |

**Decision tree:**

- Does the extension need to persist state across page reloads? → Background Script
- Does it need to modify pages in real-time without user action? → Content Script with early timing
- Does it need user interaction (popup, options menu)? → Add popup + messaging
- Does it need to run periodically (e.g., sync data)? → Alarms API + Background Script
- Does it need network access (fetch, send data)? → Background Script (content scripts limited)

### 4. Define permissions and manifest design

Permissions are the contract between your extension and the user. Narrow permissions = higher trust.

**Permission strategy:**

- Start minimal: only request what's absolutely necessary
- Use content script host patterns to limit scope (e.g., `*://example.com/*` instead of `<all_urls>`)
- Avoid `<all_urls>` unless truly necessary; justify in store description
- Use `activeTab` permission instead of `tabs` when possible (only current tab, granted on-demand)
- Avoid `webRequest` (deprecated in V3) unless you have specific interception needs; prefer `declarativeNetRequest`
- Document why each permission is needed (users will ask; app stores will question you)

**Manifest V3 structure:**

```json
{
  "manifest_version": 3,
  "name": "Extension Name",
  "version": "1.0.0",
  "description": "What it does",
  "permissions": ["storage", "activeTab"],
  "host_permissions": ["https://example.com/*"],
  "background": {
    "service_worker": "background.js"
  },
  "content_scripts": [
    {
      "matches": ["https://example.com/*"],
      "js": ["content.js"],
      "run_at": "document_start"
    }
  ],
  "action": {
    "default_title": "Extension popup title"
  }
}
```

### 5. Implement core components (pseudo-code architecture)

**Content script** (`content.js`):
```
- Runs in page context (isolated from extension)
- Can access DOM, but can't call extension APIs
- Must message background script for anything requiring permissions
- Should be lightweight; defer heavy logic to background
```

**Background service worker** (`background.js`):
```
- Runs persistently (woken on-demand for events)
- Has access to browser APIs (storage, webRequest, tabs, etc.)
- Listens for messages from content scripts and popup
- Handles periodic tasks (alarms, timers)
```

**Popup** (optional):
```
- User-facing interface when extension icon is clicked
- Can access storage, send messages to background
- Keep lightweight; avoid long-running tasks
```

### 6. Plan testing, performance, and rollout

Define:
- **What success looks like:** Extension works on target sites, permissions audit passes, performance is acceptable
- **Performance budgets:** Load time <500ms, memory footprint <50MB, no jank on page interactions
- **Store review readiness:** Privacy policy, permissions justified, no policy violations
- **Rollout strategy:** Beta on a small % of users, monitor crashes/permissions issues, gradual ramp

## Output Format

# Extension Architecture — [Extension Name]
_Prepared [date] · Target platforms: [Chrome/Firefox/Both]_

## Overview
[What the extension does, target users, core job in 2–3 sentences]

## Scope & Capabilities
[List of 3–7 core features the v1 extension must have]

**Out of scope for v1:**
- [Feature that's tempting but can wait]
- [Feature that adds technical debt]

## Capability-to-API Mapping
| Capability | Browser API | Required Permission | Complexity | Implementation Notes |
|-----------|------------|-------------------|-----------|----------------------|
| [capability] | [API] | [permission] | [Low/Medium/High] | [notes] |

## Recommended Architecture
[Describe the chosen pattern and why. Include diagram or flowchart showing Content Script, Background, Popup, and how they communicate]

**Architecture rationale:**
- Why this pattern over alternatives?
- What constraints drove the choice? (performance, permissions, browser API availability)

## Manifest & Permissions Design
```json
{
  "manifest_version": 3,
  "name": "[name]",
  "version": "1.0.0",
  "description": "[description]",
  "permissions": [[list permissions]],
  "host_permissions": [[list hosts]],
  "background": { "service_worker": "background.js" },
  "content_scripts": [{...}],
  "action": { "default_title": "[title]" }
}
```

**Permissions justification:**
| Permission | Why Required | Scoped To |
|-----------|-------------|----------|
| [permission] | [reason] | [scope: all sites / specific domain / none] |

## Component Architecture

### Content Script (`content.js`)
- **Runs in:** Page context
- **Can access:** DOM, `window` object, page JavaScript
- **Cannot access:** Extension APIs (storage, browser functions)
- **Responsibilities:** [list of tasks this component owns]
- **Message protocol:** [how it communicates with background]

### Background Service Worker (`background.js`)
- **Runs in:** Extension context (persistent, event-driven)
- **Can access:** All browser APIs (storage, tabs, webRequest, alarms, etc.)
- **Cannot access:** Page DOM
- **Responsibilities:** [list of tasks this component owns]
- **Event listeners:** [what events trigger this component]

### Popup (optional) (`popup.html`, `popup.js`)
- **Triggered by:** User clicking extension icon
- **Responsibilities:** [UI, user preferences, etc.]
- **Message protocol:** [how it communicates with background]

## Data & State Management

**Where data lives:**
- **Extension state** (preferences, settings): `chrome.storage.sync` (user-specific, synced across devices)
- **Persistent data** (cache, history): `chrome.storage.local` (device-local only)
- **Server sync:** [Backend service if applicable, with offline-first strategy]

**State machine:**
[Diagram or description of how state transitions: disabled → enabled → syncing → error → disabled]

## Performance & Constraints

**Performance targets:**
- Extension load time: <500ms
- Content script injection: <100ms
- Memory footprint: <50MB
- Popup responsiveness: <200ms

**Browser compatibility:**
| Feature | Chrome | Firefox | Edge | Notes |
|---------|--------|---------|------|-------|
| [feature] | ✓ | ✓ | ? | [compatibility notes] |

## Testing & Quality Checklist

- [ ] Core functionality works on target sites (manual testing)
- [ ] Permissions audit passed (minimize permissions, document each one)
- [ ] Performance profiled (load time, memory, no jank)
- [ ] Error handling: network failures, permission denials, missing DOM elements
- [ ] Store submission: no policy violations, privacy policy clear
- [ ] Crash reporting: configured to catch runtime errors in content scripts
- [ ] Multi-browser: tested on primary platform (Chrome/Firefox)

## Rollout Strategy

| Phase | Timeline | Scope | Success Metrics |
|-------|----------|-------|-----------------|
| Beta | Week 1–2 | 1% of target users | 0 critical crashes, 80% daily active |
| Gradual ramp | Week 3–4 | 10% → 50% → 100% | Crash rate <0.1%, permission denial <5% |
| Launch | Week 5 | 100% of target users | Positive reviews, <1% uninstall |

## Now What?
- **Build the manifest:** Create `manifest.json` with your approved architecture
- **Set up project structure:** Create folders for content scripts, background, popup; establish message protocol
- **Implement core feature:** Start with v1 core job; resist scope creep
- **Test locally:** Use Chrome DevTools extension inspector to debug, profile performance
- **Set up store submission:** Prepare privacy policy, permissions justification, screenshots
- **Plan maintenance:** Document how to add features without exploding permissions scope

---

## Example

**User:** "We want an extension that summarizes web pages for quick reading. I want it to work on article sites without slowing down the page. What should the architecture look like?"

**Output:**

# Extension Architecture — PageSummarizer
_Prepared 2026-03-22 · Target platforms: Chrome, Firefox_

## Overview
PageSummarizer helps readers quickly understand long-form articles by generating 2–3 sentence summaries in the page header. It works on news sites, blogs, and Medium articles. Target: students, researchers, busy professionals who want to decide if an article is worth reading before investing 10+ minutes.

## Scope & Capabilities

**v1 MVP:**
1. Detect article content on page (extract title, body)
2. Generate 2–3 sentence summary using Claude API
3. Display summary in a clean sidebar; user can dismiss
4. Remember user preference (show summaries by default or not)

**Out of scope for v1:**
- Custom summary length (fixed 2–3 sentences)
- AI model selection (Claude only)
- Translation
- PDF/video support
- Save/export summaries

## Capability-to-API Mapping
| Capability | Browser API | Required Permission | Complexity | Implementation Notes |
|-----------|------------|-------------------|-----------|----------------------|
| Detect and extract article | Content Script DOM parsing | `activeTab` | Low | Use standard library (e.g., Readability.js) |
| Call Claude API | Fetch from background | `webRequest` (none needed if using background) | Medium | Send extracted text to background; no direct fetch from content script |
| Store user preferences | chrome.storage.sync | `storage` | Low | Remember "always summarize" toggle |
| Inject summary UI | Content Script DOM mutation | `activeTab` | Low | Append styled div to page |
| Handle API errors | Background + messaging | `activeTab` | Low | Notify user if API call fails |

## Recommended Architecture

**Pattern: Content Script + Background Service Worker + Minimal Popup**

This architecture keeps performance tight: content script extracts article text from the DOM (fast, <50ms), messages the background service worker with the text payload, which calls Claude API and returns the summary to the content script for injection.

**Why this pattern:**
- Content script stays lightweight (only DOM manipulation)
- Fetch (API calls) happens in background (cleaner error handling)
- No heavy processing on main thread (avoids page jank)
- Permissions minimal: only `activeTab` and `storage`

**Architecture diagram:**

```
User visits article.com
  ↓
Content script injects UI (loading state)
  ↓
Content script extracts article using Readability.js
  ↓
Content script messages background: "Summarize this text"
  ↓
Background service worker calls Claude API (via fetch)
  ↓
Background sends summary back to content script
  ↓
Content script updates UI with summary
```

## Manifest & Permissions Design

```json
{
  "manifest_version": 3,
  "name": "PageSummarizer",
  "version": "1.0.0",
  "description": "Get 2-sentence summaries of web articles so you can decide what's worth reading",
  "permissions": ["storage", "activeTab", "scripting"],
  "host_permissions": [
    "https://*.medium.com/*",
    "https://*.news.ycombinator.com/*",
    "https://*.bbc.com/*",
    "https://*.nytimes.com/*",
    "https://*.theverge.com/*"
  ],
  "background": {
    "service_worker": "background.js"
  },
  "content_scripts": [
    {
      "matches": [
        "https://*.medium.com/*",
        "https://*.bbc.com/*",
        "https://*.nytimes.com/*",
        "https://*.theverge.com/*"
      ],
      "js": ["lib/readability.js", "content.js"],
      "run_at": "document_idle",
      "css": ["ui.css"]
    }
  ],
  "action": {
    "default_title": "Summarize this article",
    "default_popup": "popup.html"
  }
}
```

**Permissions justification:**
| Permission | Why Required | Scoped To |
|-----------|-------------|----------|
| `activeTab` | Allows content script to run and extract article text from the current tab | Current tab only (user-granted per-click) |
| `storage` | Save user preference: "Always show summary" toggle | Local device only |
| `scripting` | Inject CSS for summary UI | Limited to target sites |

**Host permissions:**
Scoped to major news/article sites where article extraction works reliably. Excludes social media, video sites, and non-article content.

## Component Architecture

### Content Script (`content.js`)

**Runs in:** Page context

**Responsibilities:**
1. Detect if page is an article (heuristics: h1, p tags, word count >500)
2. Show "Summarizing..." placeholder in UI
3. Extract article using Readability.js
4. Message background: `{ action: "summarize", text: "..." }`
5. Receive summary and update UI
6. Handle "dismiss" button (hide summary, save preference)

**Message protocol:**
```javascript
// Content → Background
chrome.runtime.sendMessage({
  action: "summarize",
  text: extracted_article_text
});

// Background → Content
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "summaryReady") {
    updateUI(message.summary);
  }
});
```

### Background Service Worker (`background.js`)

**Runs in:** Extension context (persistent)

**Responsibilities:**
1. Listen for "summarize" messages from content script
2. Call Claude API (fetch with API key from extension storage)
3. Handle API errors (rate limits, network failures, auth)
4. Send summary back to content script
5. Implement basic caching (don't re-summarize same article twice in 24h)

**Event handlers:**
```javascript
chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
  if (message.action === "summarize") {
    const summary = await callClaudeAPI(message.text);
    chrome.tabs.sendMessage(sender.tab.id, {
      action: "summaryReady",
      summary: summary
    });
  }
});
```

**API call pattern:**
```javascript
async function callClaudeAPI(text) {
  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "x-api-key": await getStoredAPIKey(),
      "content-type": "application/json"
    },
    body: JSON.stringify({
      model: "claude-3-5-sonnet-20241022",
      max_tokens: 150,
      messages: [{
        role: "user",
        content: `Summarize in 2–3 sentences:\n\n${text}`
      }]
    })
  });
  return response.json();
}
```

### Popup (`popup.html`, `popup.js`)

**Triggered by:** User clicking extension icon

**Responsibilities:**
1. Show "Toggle summaries: [On/Off]" toggle
2. Show "API Key" settings (paste your Claude key)
3. Show "Help & FAQ" link
4. Display usage stats (summaries created this month)

## Data & State Management

**Where data lives:**

| Data | Storage | Why |
|------|---------|-----|
| User API key | `chrome.storage.sync` | User's credentials, synced across devices |
| Summary cache | `chrome.storage.local` | Page URLs → summaries, local-only for privacy |
| Preference (show by default) | `chrome.storage.sync` | User settings, synced |

**State machine:**

```
Idle (waiting for user click)
  ↓
User loads article → Content script checks cache
  ├→ Cache hit → Show cached summary (instant)
  └→ Cache miss → Show "Summarizing..."
    ↓
    Background calls Claude API
    ├→ Success → Send summary, cache it, show
    ├→ Rate limit → Show "Try again in X seconds"
    └→ Auth error → Show "Check your API key"
```

## Performance & Constraints

**Performance targets:**
- Content script injection: <50ms (tiny script, no blocking)
- UI display: <100ms (just append a div)
- API call: 5–15 sec (network dependent; user expects wait)
- Memory: <30MB (simple, no heavy libraries)

**Browser compatibility:**
| Feature | Chrome | Firefox | Edge | Notes |
|---------|--------|---------|------|-------|
| Service workers | ✓ | ✓ | ✓ | Standard across modern browsers |
| chrome.storage | ✓ | ✓* | ✓ | Firefox uses `browser.` API; need wrapper |
| Fetch API | ✓ | ✓ | ✓ | Available in service workers |
| Readability.js | ✓ | ✓ | ✓ | Open-source library, no browser dependency |

*Firefox uses `browser.` instead of `chrome.` namespace; use compatibility library like WebExtensionPolyfill.

## Testing & Quality Checklist

- [ ] Extracts article text correctly from Medium, BBC, NYT (manual testing on each site)
- [ ] Summary generation works (test with Claude API locally)
- [ ] Handles missing articles (non-article pages, behind paywalls)
- [ ] Handles API failures (rate limits, network down, auth errors)
- [ ] No page jank during summarization
- [ ] Permissions audit: only `activeTab`, `storage`, scoped hosts
- [ ] Privacy: API key stored securely, summaries cached locally only
- [ ] Extension <2MB size
- [ ] Crash reporting via Sentry (optional but recommended)
- [ ] Tested on Chrome, Firefox (with polyfill)

## Rollout Strategy

| Phase | Timeline | Scope | Success Metrics |
|-------|----------|-------|-----------------|
| Alpha | Week 1 | 10 beta users (friends/colleagues) | 0 crashes, 80% of articles summarize correctly |
| Beta | Week 2–3 | 100 beta testers via Product Hunt | <5% crash rate, user feedback on quality |
| Chrome Web Store | Week 4 | Public listing | 100+ installs, >4 star reviews |
| Firefox | Week 5 | Publish to AMO (after Chrome success) | Parity on both platforms |

## Now What?
- **Set up API key management:** Create popup to store Claude API key in `chrome.storage.sync`
- **Implement Readability extraction:** Test article detection and text extraction on target sites
- **Build background worker:** Implement Claude API call with error handling
- **Design UI:** Clean, unobtrusive summary display (sidebar? tooltip? modal?)
- **Set up cache:** Store summaries by article URL to avoid re-processing
- **Test locally:** Install as unpacked extension in Chrome, verify each component
- **Write privacy policy:** Explain that summaries are generated by Claude, not stored server-side
- **Prepare store submission:** Screenshots, store description, category ("Productivity")

---

## Edge Cases

- **Non-English articles:** Claude can summarize most languages. Mention in store description.
- **Paywalled articles:** Extension can see page HTML but not paywall-blocked content. Show error: "Article blocked by paywall."
- **Very short articles (<200 words):** Summarization is overkill. Show: "Article already short." (skip API call)
- **PDF or image-heavy articles:** Readability.js struggles. Show: "This format isn't supported yet."
- **API rate limit hit:** Show countdown timer; queue summaries; suggest upgrading API plan.
- **User revokes API key:** Store submission blocked. Popup shows "Add your API key to get started."
- **Page reloads while summarizing:** Lose message context. Cache by URL so re-load uses cached summary.
