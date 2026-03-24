---
name: Form CRO
description: Optimize non-signup forms to reduce friction, increase completion rates, and improve lead quality
role: Marketing
action: Analyze
connectors:
  - HubSpot
  - Slack
  - Gmail
  - Google Drive
---

# Form CRO

## Purpose
Forms are a conversation's first impression. Every field is a friction point. Every error stops momentum. This skill audits any non-signup form—lead capture, contact, demo request, application, survey, checkout, quote request—and surfaces optimization opportunities grounded in how your team actually uses the data you collect.

Harmony listening to sales calls reveals which fields actually qualify leads. Support conversations show which data your team actually relies on during follow-up. Customer interactions expose where friction costs you conversions. This skill turns that insight into a field-by-field, layout-by-layout optimization roadmap.

## When to Use

1. **Form conversion is flat or declining** — You've been running the same form for months and completion rates haven't moved. You need to identify which fields, labels, or layout decisions are driving drop-off.

2. **Your sales team complains about lead quality** — They're getting form submissions but the data is incomplete or doesn't help them qualify. You need to know which fields to add, remove, or reframe.

3. **Mobile conversions lag desktop significantly** — Your form looks good on desktop but mobile abandonment is high. You need mobile-specific layout and input optimization.

4. **Multi-step form abandonment is high** — Prospects are starting your form but bailing partway through. You need to resequence questions and measure progress visibility.

5. **You're adding new fields and want to do it right** — Before bloating your form, you need a framework for which fields add signal vs. noise.

6. **Checkout or application form has a high bounce rate** — You suspect certain fields (payment info, tax ID, SSN) are scary. You need to reframe, hide optional fields, or break the flow into steps.

7. **You're redesigning the form and want data-driven priorities** — Rather than guessing, you need to see which fields drive drop-off and which labels confuse people.

## Instructions

**Step 1: Audit the Current Form**
Take a screenshot of your form. List every field in order, note whether it's required or optional, capture the exact label text, and note the input type (text, dropdown, checkbox, radio, email, phone, etc.). Include placeholders, helper text, and any error messages you see. If the form is multi-step, map the step structure and note where abandonment happens.

**Step 2: Map Data Usage**
For each field, ask: Where does this data flow after submission? Does your sales team use it during follow-up? Does support reference it in tickets? Does it qualify the lead or is it vanity? Use Harmony's call transcripts to spot which details your team actually asks for in conversations. If a field isn't flowing to action, it's a candidate for removal.

**Step 3: Identify Drop-Off Patterns**
Pull form analytics from HubSpot (field-level abandonment, time-to-submit, form view-to-submission rate). Cross-reference with Slack discussions—do sales post complaints about missing or unclear data? Does support mention form field data in follow-up? These signals reveal which fields confuse, which feel invasive, and where the form loses momentum.

**Step 4: Analyze Label Clarity and Friction**
For each field, assess: Is the label jargon-free? Does the label promise benefit or just ask for data? Are optional fields clearly marked? Are placeholders doing the work labels should do? Long forms feel longer—are you asking for too much upfront? Can optional fields move to a later step or conditional visibility?

**Step 5: Evaluate Layout and Mobile Experience**
Is the form single-column (good for mobile) or multi-column (harder on small screens)? Are text inputs appropriately sized? Do dropdowns have clear, concise options? On mobile, does the form respect viewport height or does it sprawl? Does submit button stay accessible or require scrolling? Test on a phone.

**Step 6: Benchmark Trust and Friction Signals**
Does the form show a progress bar (multi-step forms)? Does it explain why you need certain data ("We'll use this to route you to the right specialist")? Are there trust signals (security badges, privacy link, estimated completion time)? Does the submit button feel safe ("Request Demo" vs. vague "Submit")? Are there error messages that guide correction?

**Step 7: Synthesize Recommendations**
Prioritize changes by impact: Remove or defer low-value fields. Reframe confusing labels. Break long forms into 2-3 steps. Tighten dropdown options. Add progress bars. Make optional fields conditional. Reword submit buttons to be action-specific. Test on mobile. Create an A/B test roadmap.

## Output Format

Provide a structured form optimization audit covering:

**Current State Summary** (4–6 lines)
- Form purpose and context
- Current completion rate (if available)
- Primary pain point or drop-off stage

**Field-by-Field Audit** (20–30 lines)
- For each field: label, type, required/optional, current friction, recommended change
- Highlight fields that drop-off or that your team rarely uses
- Flag jargon, unclear purpose, or invasive asks

**Layout & Multi-Step Analysis** (8–12 lines)
- Single vs. multi-column assessment
- Mobile optimization gaps
- Step structure (if multi-step) and resequencing ideas
- Progress visibility recommendations

**Trust & Friction Reduction** (6–10 lines)
- What signals build confidence (progress bar, estimated time, privacy assurance)
- What fields feel risky (payment info, SSN, medical data) and how to reframe
- Button copy and placement improvements

**Recommended Redesign** (10–15 lines)
- Consolidated field list in recommended order
- Justification for removes, reframes, and resequences
- New step breakdown (if multi-step) with rationale

**A/B Test Roadmap** (8–12 lines)
- Test 1: Field removal or resequencing
- Test 2: Label clarity improvement
- Test 3: Multi-step vs. single-step (if applicable)
- Test 4: Trust signal addition (progress bar, estimated time, etc.)
- Measurement approach (completion rate, time-to-submit, field-level drop-off)

## Example

### Skyline Consulting: Demo Request Form Audit

**Current State Summary**
Skyline Consulting's demo request form captures leads for their B2B consulting practice. Current completion rate: 32%. Primary pain point: 60% of form starts drop off after the "Company Size" field. Sales team reports that 40% of submissions lack phone numbers or job titles, making follow-up slower.

**Field-by-Field Audit**

| Field | Type | Required | Current Friction | Recommendation |
|-------|------|----------|------------------|----------------|
| Email | Text | Yes | None | Keep. Core for follow-up. |
| Full Name | Text | Yes | None | Keep. Clear label. |
| Company | Text | Yes | Vague purpose ("which company?") | Rename to "Company Name" for clarity. |
| Company Size | Dropdown | Yes | 60% drop-off. Options: "1-10, 11-50, 51-200, 200+" feel arbitrary. | Simplify to "1-50, 50-500, 500+". Add helper text: "Helps us tailor the demo." Explain *why* you ask. |
| Phone | Text | Optional | 40% skip rate. No context. | Make conditional: "Want a phone demo?" If yes, show phone field. Reduces friction. |
| Job Title | Text | Optional | Unclear label. Feels intrusive. | Make conditional on company size. Label: "Your role (optional, helps us demo faster)". Add example: "e.g., Head of Operations, Finance Director". |
| Budget | Dropdown | Optional | Most skip. Too early to ask. | Remove. Collect in follow-up call. Not a form decision. |
| How did you hear about us? | Dropdown | Optional | Useful for marketing but form goal is demo bookings. | Move to thank-you page or post-demo survey. Removes visual clutter. |
| Preferred Demo Time | Dropdown | Optional | Options change daily. Hard to maintain. | Remove from form. After submission, send calendar link via email. More flexible. |
| Message | Textarea | Optional | Most leave blank. | Remove. If they have questions, they'll ask on the call. |

**Layout & Multi-Step Analysis**
Current form: Single column, all fields on one page. On mobile, form spans 4+ screens. No progress indication.

Recommendation: Convert to 2-step form:
- **Step 1**: Email, Full Name, Company. Shows "Step 1 of 2" progress. Takes 30 seconds.
- **Step 2**: Company Size (with helper text), conditional Phone and Job Title, submit button.
On mobile, each step fits one screen. Progress bar reduces perception of effort.

**Trust & Friction Reduction**
- Add estimated completion time: "Takes 1 minute" above the form. Reduces anxiety.
- Helper text on Company Size: "Helps us tailor the demo" explains *why* you ask. Increases trust.
- Submit button: Change "Submit" to "Request Demo" (action-specific, not vague).
- Add privacy link in footer: "We respect your privacy. See how we use your data." Builds confidence.
- Consider adding: "You'll get a calendar link in the next email" as post-submit message. Sets expectations.

**Recommended Redesign**

**Step 1 (Required Info)**
1. Email
2. Full Name
3. Company Name

**Step 2 (Qualification)**
4. Company Size (with helper text)
5. [Conditional] Phone (if "Want a phone demo?")
6. [Conditional] Job Title (if company size = mid-market or enterprise)

**Removed Fields & Rationale**
- Budget, How did you hear about us, Preferred Demo Time, Message: Collected in follow-up, not needed upfront.
- These removals reduce form length by 40%, boosting completion.

**Mobile Optimization**
- Two steps = two short views on mobile, not one long scroll.
- Dropdowns: Use native mobile pickers for better UX.
- Submit button: Full width, large hit target (48px height minimum).

**Recommended Redesign**
- Change form layout from single-page to 2-step journey
- Reduce required fields from 5 to 3 on step 1 (email, name, company)
- Move qualification questions to step 2 with conditional logic
- Rename vague labels ("Company" → "Company Name")
- Add helper text explaining *why* you ask (Company Size, Job Title)
- Make phone and job title conditional on user interest/company size
- Change submit button copy: "Submit" → "Request Demo"

**A/B Test Roadmap**

**Test 1: Single-Page vs. 2-Step Form** (Duration: 2 weeks)
- Control: Current form, single page.
- Variant: 2-step form per recommendation.
- Metric: Completion rate, average time-to-submit, field-level drop-off.
- Expected outcome: 2-step form lifts completion by 15–25%.

**Test 2: Company Size Label & Helper Text** (Duration: 1 week)
- Control: Current "Company Size" label, no helper.
- Variant: "Company Size (Helps us tailor the demo)" with example options.
- Metric: Drop-off rate on this field, field completion.
- Expected outcome: Helper text reduces drop-off by 20%.

**Test 3: Conditional Phone Field** (Duration: 1 week)
- Control: Phone as optional field, always visible.
- Variant: Phone only shows after user indicates interest in phone demo.
- Metric: Phone completion rate, form submission rate.
- Expected outcome: Conditional logic increases phone capture (by removing friction for those who don't need it).

**Test 4: Trust Signals** (Duration: 1 week)
- Control: Current form, no signals.
- Variant: Add "Takes 1 minute" banner + privacy link + "Request Demo" button + post-submit confirmation message.
- Metric: Form start rate, completion rate.
- Expected outcome: Trust signals increase starts and reduce abandonment.

**Measurement Approach**
- Pull completion rate, drop-off by field, and average submission time from HubSpot.
- Check Slack for sales feedback on lead quality (phone capture, job title presence).
- Monitor time-to-submit in form analytics—if it drops, UX is better.
- Segment by device (mobile vs. desktop) to spot mobile-specific improvements.

## Edge Cases

1. **Form has conditional logic already** — Use Harmony's Slack data to see if conditionals confuse users (e.g., "Why is this field gone?"). Test: Remove conditionals that hurt completion, keep ones that reduce cognitive load.

2. **International audience, form needs multiple languages** — Add language picker at top. Test label translations: sometimes jargon doesn't translate. Example: "Company Size" may need cultural adaptation in some markets.

3. **Very long forms (10+ fields)** — Always break into 2–3 steps. Show progress bar. Remove fields that your team doesn't use. Validate that each field flows to action.

4. **Form has high bot/spam submissions** — If you're seeing junk, consider CAPTCHA, email verification, or requiring phone. But test: stricter forms often tank completion. Measure the cost.

5. **Sales team says "we need more data"** — Resist the urge to add fields. Audit: Do they actually use the data you collect now? Use Harmony call data to show which fields your team asks for during follow-up. Build the case to defer low-value questions to a follow-up survey.

6. **Mobile completion is nearly zero** — Form is broken on mobile. Test: mobile-first redesign with shorter steps, native inputs, and full-width buttons. May need to add device targeting to A/B test.

---

## Next Steps

1. **Run the audit** — Apply steps 1–7 to your form using Harmony data (sales calls, support tickets, Slack feedback).
2. **Prioritize wins** — Focus on removing low-value fields and clarifying confusing labels first.
3. **Design the test** — Pick one A/B test from the roadmap. Run for 2 weeks. Measure completion rate and lead quality.
4. **Iterate** — Use results to inform the next optimization. Retest until you've compounded gains across multiple dimensions.
5. **Document** — Capture form version history in Google Drive so your team knows what was tested and why.
