---
name: "Sort Invoices for Tax"
description: "Organize invoices and receipts by tax category — flag missing documentation, identify deductions, and produce a tax-ready expense summary. Works from uploaded files or finance meeting context. Trigger on: sort invoices, organize receipts, tax prep, expense categorization, tax deductions, receipt organization, quarterly taxes."
dependencies: []
connectors:
  - name: "Google Drive"
    reason: "Pull invoice PDFs and receipt images from shared finance folders"
  - name: "Stripe"
    reason: "Pull subscription and payment data for SaaS expense categorization"
  - name: "Gmail"
    reason: "Surface invoice emails and receipt confirmations for completeness checks"
  - name: "Notion"
    reason: "Reference vendor lists, budget categories, and past tax filing notes"
---

## Purpose
This skill automatically organizes invoices and receipts by standard tax categories, flags documentation gaps, identifies overlooked deductions, and delivers a tax-ready expense report. It bridges finance team workflows and accounting preparation by transforming raw expense data into structured, audit-ready summaries.

## When to Use
- Quarterly or annual tax preparation
- End-of-year expense reconciliation
- Multi-vendor expense categorization (10+ vendors)
- Missing receipt recovery or documentation flagging
- Tax credit and deduction discovery
- Expense audit readiness
- Multi-currency or cross-state expense organization

## Instructions

### Step 1: Gather Expense Data
Collect invoices and receipts from multiple sources:
- Uploaded PDF/image files from your device
- Google Drive shared folders (finance, accounting, receipts)
- Gmail inbox (invoice emails, receipt confirmations)
- Notion expense tracking pages or vendor lists
- Stripe payment history for SaaS subscriptions
- Direct expense descriptions from conversation context

### Step 2: Extract Key Fields
For each invoice/receipt, identify and record:
- **Vendor name** (exact business name)
- **Invoice/receipt date** (MM/DD/YYYY)
- **Amount** (USD or currency with exchange rate noted)
- **Description** (brief item/service description)
- **Payment method** (cash, credit card, bank transfer, check)
- **Receipt status** (attached, missing, partial)

### Step 3: Categorize by Tax Category
Assign each expense to one of these standard categories:
- **Office & Supplies** (furniture, stationery, equipment under $2,500)
- **Travel & Meals** (flights, hotels, meals, mileage; track business vs. personal)
- **SaaS & Software** (subscriptions, licenses, cloud services)
- **Professional Services** (legal, accounting, consulting, freelancers)
- **Utilities & Internet** (office internet, phone, electricity)
- **Advertising & Marketing** (ad spend, design, content creation)
- **Contractors & Freelancers** (1099 services, hourly contractors)
- **Equipment & Depreciation** (assets over $2,500, capitalize separately)
- **Insurance** (business liability, health, disability)
- **Other Deductible Expenses** (dues, training, vehicle maintenance)

### Step 4: Flag Incomplete Items
Identify and list:
- Missing receipts (flag vendors for reissue request)
- Incomplete descriptions (ambiguous expense purpose)
- Missing dates or amounts (reconcile against bank statements)
- Personal vs. business ambiguity (clarify before deduction)
- Currency or payment method mismatches

### Step 5: Identify Potential Deductions & Credits
Cross-reference expense categories against:
- Qualified home office deduction (if applicable)
- Meal & entertainment caps (50% deductible, with exceptions)
- Vehicle mileage (standard rate vs. actual; track separately)
- Equipment depreciation schedules
- R&D tax credits (if eligible)
- Startup costs (if within first year)
- Section 179 deductions (equipment purchased this year)
- Foreign earned income exclusion (if travel-related)

### Step 6: Calculate Summaries
Produce totals by:
- Tax category (sum per category)
- Payment method (credit card, check, cash, ACH)
- Vendor (top 10 vendors by spend)
- Time period (monthly, quarterly, year-to-date)
- Currency (separate USD, EUR, GBP, etc. if multi-currency)

### Step 7: Cross-Reference & Reconcile
- Compare against prior-year expense patterns
- Reconcile totals against bank/credit card statements
- Flag unusual or one-time expenses
- Check for duplicate entries or receipts
- Validate against departmental or project budgets

### Step 8: Deliver Tax-Ready Report
Output a structured expense report including:
- Category breakdown with totals
- Incomplete items list with action items
- Deduction and credit recommendations
- Quarterly and annual summaries
- Audit-ready backup file list (organized by category)

## Output Format

**Tax-Ready Expense Summary**
```
EXPENSE CATEGORY BREAKDOWN
==========================
Office & Supplies: $3,240
Travel & Meals: $8,900
SaaS & Software: $12,150
Professional Services: $6,800
Contractors & Freelancers: $9,200
Advertising & Marketing: $4,110
Insurance: $2,400
Other Deductible Expenses: $210
________________________________________
TOTAL DEDUCTIBLE EXPENSES: $47,010

QUARTERLY BREAKDOWN
===================
Q4 2025: $47,010

INCOMPLETE ITEMS (ACTION REQUIRED)
==================================
• Slack invoice (Nov 8) — missing receipt confirmation
• Lyft receipts (Nov 12, 14, 22) — no business purpose noted
• Stripe processing fees — requires reconciliation statement

POTENTIAL DEDUCTIONS & CREDITS
===============================
• Home office deduction: $2,400/year (if eligible)
• Vehicle mileage: 847 miles × $0.67 = $568
• Section 179 equipment eligibility: Check purchased laptop ($1,899)

TOP 10 VENDORS BY SPEND
=======================
1. Heroku (SaaS): $2,400
2. Stripe (SaaS): $1,800
3. Segment (SaaS): $1,600
4. AWS (SaaS): $3,950
5. Mixpanel (SaaS): $1,200
6. Kelly Chen Consulting (Professional Services): $3,200
7. Delta Airlines (Travel): $2,800
8. Google Workspace (SaaS): $840
9. Zoom (SaaS): $600
10. Notion (SaaS): $360

NEXT STEPS
==========
1. Obtain missing Slack receipt confirmation
2. Add business purpose notes to Lyft transactions
3. Retrieve Stripe processing fee statement for Q4
4. Confirm home office deduction eligibility
5. Prepare Section 179 equipment list for accountant
6. Schedule tax review call with CPA by 12/31
```

## Example: Threadline Q4 2025 Tax Prep

**Context:** Nadia Okafor, CFO at Threadline (e-commerce analytics SaaS, 12-person team), organizing Q4 2025 expenses for annual tax filing. Budget cap was $50,000; actual spend: $47,010.

**Uploaded Files:**
- `threadline-q4-invoices.zip` (18 vendor PDFs)
- `receipts-folder/` (35 receipt images from Gmail)
- `threadline-budget-2025.csv` (Notion export)

**Extracted Data (Sample):**
- Heroku hosting: $2,400 (invoice 11/01) ✓ receipt
- Delta flights (SF → NYC, 3 trips): $2,800 (dates: 10/15, 11/22, 12/10) ✓ receipts
- Kelly Chen Consulting (product roadmap workshop): $3,200 (10/30 invoice) ✓ receipt
- Stripe processing fees: $1,800 (auto-deducted; statement needed)
- Slack subscription (12 seats): $600 (10/01 invoice) — **missing renewal receipt for 11/01 renewal**
- Lyft rides (SF office → airport, 4 trips): $180 (11/12, 11/14, 11/22, 12/01) — **no business purpose noted; needs clarification**
- AWS compute: $3,950 (monthly invoices 10–12) ✓ receipts
- Google Workspace (12 users): $840 (10/01, 11/01, 12/01) ✓ receipts
- Segment CDP: $1,600 (10/01 invoice) ✓ receipt
- Mixpanel analytics: $1,200 (10/15 invoice) ✓ receipt

**Categorization:**
- SaaS & Software: $12,150 (Heroku, Stripe, Slack, AWS, Google Workspace, Segment, Mixpanel, Notion $360, Zoom $600)
- Travel & Meals: $8,900 (Delta flights $2,800, Lyft $180, hotel in NYC $1,920, meals during travel $3,000, car rental $1,000)
- Professional Services: $6,800 (Kelly Chen $3,200, Acme Legal (contract review) $2,100, Pivot Accounting (bookkeeping) $1,500)
- Contractors & Freelancers: $9,200 (Dev contractor Alex Liu $4,500, Design contractor Sarah Kim $3,200, Marketing contractor Raj Patel $1,500)
- Office & Supplies: $3,240 (desk chairs $1,200, standing desk $1,600, monitor $440)
- Advertising & Marketing: $4,110 (LinkedIn ads $1,800, Google Ads $1,200, content design $1,110)
- Insurance: $2,400 (E&O insurance annual premium)
- Other: $210 (professional membership dues)

**Flagged Items:**
- Slack renewal receipt missing (need to request from Slack billing)
- Lyft business purpose unclear (was this client meeting or general commute?)
- Stripe fees reconciliation needed (may qualify for merchant services deduction)

**Deductions Identified:**
- Home office: Nadia works from dedicated 120-sq-ft office; qualifies for $2,400 deduction
- Vehicle mileage: 847 business miles at $0.67/mile = $568 (separate from Lyft)
- Section 179 candidate: standing desk ($1,600), monitor ($440)

**Output:** Tax-ready report delivered; accountant receives organized backup files by category and vendor, ready for e-file submission.

## Edge Cases

**Multi-Currency Expenses**
- Convert all amounts to USD using the exchange rate on the transaction date
- Document original currency and conversion rate in the report
- Flag for accountant if foreign tax credits apply

**Personal vs. Business Ambiguity**
- Meal expenses: flag if attendee count or business purpose is unclear (50% deduction cap)
- Vehicle mileage: prompt for business vs. commute clarification
- Home office: calculate only eligible deductible portion

**Missing or Disputed Receipts**
- Flag for resubmission request (vendor can often reissue)
- If permanently missing and < $75, document as memo entry (if allowable per tax code)
- For large missing receipts (> $500), do not assume deductibility; escalate to accountant

**Duplicate Entries**
- Cross-check invoice numbers and dates to catch duplicates
- Flag if same vendor, amount, and date appear twice
- Note if monthly recurring charges appear separately (e.g., Slack charged twice in Nov)

**Contractor vs. Employee Classification**
- Payments to individuals: verify 1099 status and withholding requirements
- Payments to businesses/consultancies: categorize as Professional Services
- Flag any suspicious amount changes (e.g., contractor pay spike) for review

**Estimated Taxes & Quarterly Filings**
- Calculate quarterly expense totals for estimated tax calculation
- Flag if cumulative expenses suggest quarterly payment adjustments
- Note if any deductions are time-sensitive (e.g., Section 179 deadline)

**Related-Party Transactions**
- Flag if any vendor is a known related entity or family business
- Ensure arm's-length pricing and documentation

**International or Remote Team Expenses**
- Separate domestic travel from international travel (different deduction rules)
- Track contractor payments by country (potential 1099-NEC vs. foreign reporting)
