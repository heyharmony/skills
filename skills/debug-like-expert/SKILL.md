---
name: "Debug With Structured Method"
description: "Systematically diagnose code problems using evidence-based debugging — reproduce, isolate, hypothesize, test, verify. Ground in error messages, stack traces, team standup discussions, or past bug patterns. Trigger on: debug this issue, diagnose the bug, why is this failing, debug strategy, systematic debugging, root cause analysis."
dependencies: []
connectors:
  - name: "Linear"
    reason: "Pull bug reports with reproduction steps, error logs, and historical context from similar issues to accelerate diagnosis"
  - name: "GitHub"
    reason: "Reference recent commits, PR discussions, and code changes that may have introduced the bug; review similar debugging discussions"
  - name: "Slack"
    reason: "Pull team discussions from retrospectives about past bugs, debugging patterns, or common failures in your codebase"
  - name: "Notion"
    reason: "Access architecture docs, data flow diagrams, and system boundaries to guide hypothesis formation"
---

## Purpose

Guide systematic debugging of code problems — moving from "it's broken" to "here's the root cause and how to fix it" using evidence-based reasoning. Expert debugging is not flailing; it's a disciplined process: gather data, form testable hypotheses, isolate variables, test predictions. When conversation data exists — team standup discussions about bugs, retro analysis of past incidents, or PR comments about confusing behavior — the debugging strategy is grounded in patterns your team has seen. Works standalone from error messages and code context when conversation data isn't available.

## When to Use

- You have an error and no idea where to start (stack trace is cryptic, issue is intermittent)
- A bug appears in production and you need a systematic approach to isolate the cause fast
- You've been debugging for hours and want a structured framework to force progress
- You're helping a junior engineer debug and want to teach the right mindset (evidence over intuition)
- You're analyzing a post-mortem and need to understand how the bug slipped through

## Instructions

### 1. Gather evidence and establish baseline

Ask what the user has:

- **What's the symptom?** How does the user experience the problem? (not "database is slow" but "API call takes 5 sec instead of 200ms")
- **Error message or logs?** Stack trace, exception, error code?
- **How to reproduce?** Can you make it happen on demand, or is it intermittent?
- **When did it start?** Today? After a deploy? After changes to which component?
- **Who's affected?** All users, specific region, specific account type?

If Harmony conversation data exists, pull:
- Team standup discussions about recent changes or known flaky tests
- Retro analysis: "We had a similar bug 3 months ago; turns out it was X"
- PR comments: "Did you check for this race condition?"
- Post-mortem: What patterns do past bugs in your system have? (async boundaries, timezone handling, cache invalidation, etc.)

### 2. Establish reproduction: is it repeatable?

Repeatable bugs are easier to diagnose. Intermittent bugs require different strategies.

**If reproducible:**
- Write down exact steps: "Click button → Field shows 'Error' → System returns 500"
- Try on different browser/device/environment (rules out environment issues)
- Try with different data (is it specific to one account or data type?)

**If intermittent:**
- When was the last occurrence? What was happening? (timing matters)
- Is there a pattern? Time of day, after specific actions, under load?
- Can you make it happen faster by hammering the system? (race condition indicator)
- Check for external factors: network latency, concurrent requests, resource exhaustion

**Reproducibility score:**
- Reliable (always happens) = 5/5, easiest to debug
- Frequent (happens >80% of the time) = 4/5, still good
- Occasional (happens <50% of the time) = 2/5, hard; need logs and telemetry
- Rare (happens <5%) = 1/5, very hard; need to infer from logs

### 3. Isolate the layers: where does the problem live?

Most systems have layers: Frontend (UI) → API → Database → Infrastructure. The problem lives in exactly one layer (usually). Isolate it.

**Diagnosis matrix:**

| Symptom | Frontend | API | Database | Infrastructure |
|---------|----------|-----|----------|-----------------|
| UI shows wrong data | ✓ rendering issue | ✓ wrong response | ✓ stale data | N/A |
| Slow API response | N/A | ✓ compute heavy | ✓ slow query | ✓ network/resource |
| 500 error | N/A | ✓ code exception | ✓ constraint violation | ✓ OOM/crash |
| Intermittent failures | ~ race condition | ✓ async issue | ✓ deadlock/lock timeout | ✓ resource contention |
| Request never comes back | ✓ network issue | ✓ hang/timeout | ✓ hang | ✓ network partition |

**Isolation tests:**

- **Frontend layer:** Open DevTools, check Network tab. Is the request being sent? What's the response?
- **API layer:** Call the endpoint directly (curl, Postman). Does it work? Same error or different?
- **Database layer:** Connect directly to the database. Can you run the query? Does it perform?
- **Infrastructure:** Check logs, resource usage (CPU, memory, disk), network connectivity

### 4. Form testable hypotheses

Expertise is having good hypotheses. Bad hypothesis: "It's slow." Good hypothesis: "The SELECT query on the `orders` table does a full table scan because the `created_at` index was dropped."

**Hypothesis format:**
- **What:** [Specific claim about what's broken]
- **Why:** [Root cause mechanism]
- **Test:** [How to prove or disprove]
- **If true:** [What we'd expect to observe]

**Example hypotheses:**

| Weak | Strong |
|------|--------|
| "The database is slow" | "The `JOIN` on `users` and `orders` is missing an index on `user_id`, causing N+1 query behavior. I expect to see 1000s of queries in the log." |
| "It's a race condition" | "Two requests are reading and writing to the same cache key without a lock, causing one to overwrite the other. I expect to see conflicting values in the cache during high concurrency." |
| "The API is broken" | "The JSON parsing code assumes a field exists, but recent changes made that field optional. I expect to see a `KeyError` when the field is missing." |

**Ranking hypotheses by likelihood:**
1. Changes you made recently (highest likelihood)
2. Changes teammates made recently (high)
3. Known fragile areas (medium)
4. Environmental changes (lower)
5. Truly bizarre stuff (very rare)

### 5. Test hypotheses systematically

For each hypothesis, design a test that can disprove it:

**Test design:**
- **Isolate variables:** Only change one thing at a time
- **Control group:** What's the expected behavior? Use that as your baseline
- **Observation:** What do you actually see? Don't assume
- **Repeatability:** Can you reproduce the test result?

**Examples:**

| Hypothesis | Test | Expected If True | Expected If False |
|-----------|------|------------------|-------------------|
| Index missing on `user_id` | Run `EXPLAIN PLAN` on the query | Seq scan, high cost estimate | Index scan, low cost |
| Race condition in cache | Load test with 100 concurrent requests | Inconsistent values in response | All values consistent |
| JSON parsing fails on missing field | Send request with missing field | 500 error with KeyError | 200 OK or graceful default |
| Network latency increased | `ping` + `traceroute` to service | High latency, packet loss | Normal latency |

### 6. Analyze the root cause, not just the symptom

Once you've isolated the failure, dig for the root cause:

- **Symptom:** API returns 500
- **Cause (first level):** NullPointerException at line 42
- **Root cause:** Code assumes `user.email` exists, but new signup flow allows null emails
- **Why it wasn't caught:** No unit test for the null case; QA didn't test that path

True understanding: the bug wasn't the NPE; it was the missing validation and missing test.

### 7. Verify the fix and prevent recurrence

Before shipping a fix:

- **Verify:** Does the fix actually address the root cause, not just the symptom?
- **Regression:** Could this fix introduce new problems?
- **Prevention:** How do we prevent this bug from happening again? (tests, validation, monitoring, design)

**Prevention strategies:**

| Category | Example |
|----------|---------|
| **Testing** | Add unit test for null email; add integration test for new signup flow |
| **Validation** | Add schema validation in API to enforce required fields |
| **Monitoring** | Alert on NullPointerException rate spike |
| **Design** | Refactor to use Optional<T> instead of nullable types (forces explicit handling) |
| **Documentation** | Document data contract: which fields are nullable, why, what to do if missing |

## Output Format

# Debugging Report — [System/Feature Name]
_Prepared [date] · Status: [Reproduced/Isolated/Root Cause Found/Fixed]_

## Executive Summary
[What's broken, impact, and current status in 2–3 sentences]

## Symptom & Reproduction
- **What's broken:** [User-facing symptom]
- **How to reproduce:** [Step-by-step; include environment if relevant]
- **Reproducibility:** [Always / Frequent / Occasional / Rare]
- **Impact:** [How many users, how much data, how critical]

## Evidence Gathered
- **Error message/logs:** [Paste relevant errors]
- **Stack trace:** [If applicable]
- **Timing:** [When it started, when it happens]
- **Context:** [Recent changes, deploy timeline, external factors]

## Layer Isolation
[Which system layer has the problem?]

| Layer | Status | Evidence |
|-------|--------|----------|
| Frontend | [✓ Good / ✗ Problem / ? Unknown] | [test result] |
| API | [✓ Good / ✗ Problem / ? Unknown] | [test result] |
| Database | [✓ Good / ✗ Problem / ? Unknown] | [test result] |
| Infrastructure | [✓ Good / ✗ Problem / ? Unknown] | [test result] |

**Isolated to layer:** [API / Database / etc.]

## Hypotheses & Testing

| Hypothesis | Likelihood | Test | Result | Disproven? |
|-----------|-----------|------|--------|-----------|
| [hypothesis] | [High/Med/Low] | [test design] | [pass/fail] | [Y/N] |

**Leading hypothesis:** [Most likely root cause based on tests]

## Root Cause Analysis

**Root cause:** [Specific mechanism that causes the bug]

**Why it happened:** [Missing validation, recent code change, external factor, etc.]

**Why it wasn't caught:** [Test gap, assumption, design issue, etc.]

## Fix & Verification

**Proposed fix:** [Code change or operational mitigation]

**How fix addresses root cause:** [Explain the link]

**Regression risks:** [What could go wrong if we deploy this?]

**Testing plan before rollout:**
1. [Unit test to verify fix]
2. [Integration/regression test]
3. [Manual verification in staging]
4. [Monitoring after production rollout]

## Prevention Strategy

| Category | Action | Owner | Timeline |
|----------|--------|-------|----------|
| **Testing** | [Test to add] | [who] | [when] |
| **Validation** | [Validation rule to add] | [who] | [when] |
| **Monitoring** | [Alert to set up] | [who] | [when] |
| **Design** | [Design change] | [who] | [when] |

## Now What?
- **Deploy fix:** Stage it → test → code review → production rollout (with monitoring)
- **Track metrics:** Did error rate drop? Did fix work?
- **Add tests:** Prevent recurrence; make the next person's debug job easier
- **Update docs:** Document the bug, root cause, and fix so teammates learn
- **Retro:** Did anything about our debugging process fail? (Could we have found this faster?)

---

## Example

**User:** "Our API is returning 500 errors for 10% of requests. Started this morning after a deploy. Stack trace shows `NullPointerException` in the `price_calculator.go` file at line 42."

**Output:**

# Debugging Report — Payment API Price Calculator
_Prepared 2026-03-22 · Status: Root Cause Found_

## Executive Summary
Payment API is returning 500 errors for ~10% of requests (affecting roughly 500 transactions/hour). NPE in price calculation code introduced by this morning's deploy. Root cause: missing discount code validation allowing null values where not expected. Fix verified in staging; rolling out now.

## Symptom & Reproduction

- **What's broken:** `POST /calculate-price` returns 500 with "NullPointerException" message
- **How to reproduce:** Send request with empty `discount_code` field: `{"cart": {...}, "discount_code": ""}`
- **Reproducibility:** Always (100% — easy to diagnose)
- **Impact:** ~10% of traffic (estimated based on request volume); affects all users; high priority (payment failures)

## Evidence Gathered

- **Error message:**
```
java.lang.NullPointerException
  at PriceCalculator.applyDiscount(price_calculator.go:42)
  at PaymentService.calculatePrice(payment_service.go:125)
```

- **Stack trace:** Points to `applyDiscount()` method trying to call `.isValid()` on null discount code
- **Timing:** Started 09:15 UTC (matches deploy at 09:10 UTC)
- **Recent changes:** Deploy included new discount system refactor (commit abc123def)
- **External factors:** None; infrastructure metrics normal

## Layer Isolation

| Layer | Status | Evidence |
|-------|--------|----------|
| Frontend | ✓ Good | Frontend sending valid JSON; no malformed requests |
| API | ✗ Problem | 500 errors in API logs; stack trace points to price_calculator |
| Database | ✓ Good | Database queries execute fine; no deadlocks or timeouts |
| Infrastructure | ✓ Good | CPU/memory normal; no OOM; no service restarts |

**Isolated to layer:** API (server-side code, specifically price calculation)

## Hypotheses & Testing

| Hypothesis | Likelihood | Test | Result | Disproven? |
|-----------|-----------|------|--------|-----------|
| Null discount code passed to `.isValid()` | High | Send request with `discount_code: ""` (empty string) | NPE reproduced | N (confirmed) |
| New discount system code doesn't validate inputs | High | Read commit abc123def; check for input validation | No null check before `.isValid()` call | N (confirmed) |
| Database returns unexpected null for discount | Medium | Query discount table directly | Discount table is fine; issue is in code | Y (disproven) |
| Old code path still being called | Low | Check deploy process; verify new code is live | New code is definitely live | Y (disproven) |

**Leading hypothesis:** New refactor removed input validation. Discount code is optional in API request, but code now assumes it's always set.

## Root Cause Analysis

**Root cause:** Commit abc123def refactored discount code to use a new `DiscountValidator` object. The refactor removed the null-check that was in the old code:

**Old code:**
```go
if discount_code != nil && discount_code != "" {
  discount := getDiscount(discount_code)
  // ...
}
```

**New code:**
```go
discount := getDiscount(discount_code)  // <-- no null check
validator := DiscountValidator(discount)
if validator.isValid() {  // <-- crashes if discount_code was empty
  // ...
}
```

**Why it happened:** Refactor focused on moving logic to `DiscountValidator`, but accidentally removed the null-guard during the move.

**Why it wasn't caught:**
- No unit test for the "empty discount code" case (test suite only tested valid discount codes)
- Manual testing in staging didn't test the empty code path
- PR reviewer didn't notice the removed null-check (code review was surface-level on the refactor)

## Fix & Verification

**Proposed fix:** Re-add null/empty check before calling `DiscountValidator`:

```go
func applyDiscount(discount_code string) {
  if discount_code == "" {
    return // no discount
  }
  discount := getDiscount(discount_code)
  validator := DiscountValidator(discount)
  if validator.isValid() {
    // apply discount
  }
}
```

**How fix addresses root cause:** Re-introduces the guard that prevents calling `.isValid()` on a null discount. Empty discount codes now gracefully return "no discount applied" instead of crashing.

**Regression risks:**
- Could break code that expects discounts to always be processed (unlikely; code is defensive)
- Edge case: what if discount_code is whitespace-only? (Added `strings.TrimSpace()` to handle this)

**Testing plan before rollout:**
1. Unit test: `TestApplyDiscount_EmptyCode()` — verify empty code returns no-discount
2. Integration test: `POST /calculate-price` with empty `discount_code` — verify 200 OK
3. Staging: Load test with 10% empty discount codes mixed in — verify no errors
4. Monitoring: Alert on `NullPointerException` count; expect to see 0 after deploy

## Prevention Strategy

| Category | Action | Owner | Timeline |
|----------|--------|-------|----------|
| **Testing** | Add unit test for empty/null discount code to test suite | Sarah (QA) | Before next deploy |
| **Validation** | Add schema validation in API gateway to reject invalid discount_code format early | Tom (Backend) | This sprint |
| **Monitoring** | Set up alert on `NullPointerException` spike in payment service; page on-call | DevOps | Today |
| **Design** | Use `Optional<String>` type hint instead of nullable string (forces explicit handling) | Sarah (Code review) | Code review checklist update |
| **Documentation** | Document discount code contract: can be empty or valid ID, not null (update API spec) | Product | This week |

## Incident Timeline

| Time | Event |
|------|-------|
| 09:10 UTC | Deploy abc123def to production |
| 09:15 UTC | Error rate spike detected (monitoring alert) |
| 09:20 UTC | On-call engineer investigates, finds 500 errors |
| 09:25 UTC | Reproduction confirmed (empty discount code = NPE) |
| 09:30 UTC | Root cause identified (null check removed in refactor) |
| 09:40 UTC | Fix coded, tested in staging |
| 09:50 UTC | Fix deployed to production |
| 10:00 UTC | Error rate returns to baseline; incident resolved |

**Total time-to-resolution: 50 minutes** (acceptable; could be faster with automated tests)

## Now What?
- **Deploy fix:** Rollout to production (low-risk one-line change); monitor error rates for 1 hour
- **Verify metrics:** Check that 500 error rate drops from 10% to 0%
- **Add tests:** Unit test for empty discount code to prevent recurrence
- **Update schema:** Mark `discount_code` as optional in OpenAPI spec; add validator rule
- **Post-mortem:** Scheduled for Thursday; discuss why null-check removal wasn't caught in code review
- **Communicate:** Notify affected customers that payment API is restored; no customer data was lost (requests failed gracefully)

---

## Edge Cases

- **Intermittent 500 errors (hard to debug):** Set up structured logging to capture full context (request ID, inputs, stack trace). Use log aggregation (Datadog, ELK) to correlate patterns.
- **Bug only happens under load:** Could be race condition, resource exhaustion, or cache invalidation issue. Use load testing tool (k6, JMeter) to reproduce; watch for timing-dependent failures.
- **Bug happens in production but not staging:** Environment differences (data volume, concurrency, time zones, feature flags). Check: production vs. staging config, data distribution, external services.
- **Intermittent cascading failures:** One service fails; upstream service retries; downstream service crashes. Use distributed tracing (Jaeger, Datadog) to see the cascade; add circuit breakers.
- **Users reporting bug but logs show success:** Users might be looking at stale cached data, or the bug is in client-side logic, not the server. Check: browser cache, client-side state, whether the error is in data vs. the request itself.
