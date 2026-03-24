---
name: "Mine Product Feedback From Calls"
description: "Extracts, categorizes, and synthesizes feedback from conversations, support tickets, reviews, and other sources into prioritized product insights — identifying patterns, segmenting by customer type, and separating signal from noise. Trigger on: customer feedback, feature requests, product feedback, pain points, user complaints, churn signals, feedback analysis."
dependencies: []
---

## Purpose

The Product Feedback Miner transforms scattered feedback from multiple sources (support tickets, user interviews, reviews, Slack channels, NPS comments, call transcripts) into structured, prioritized product intelligence. It separates signal from noise, identifies widespread patterns versus isolated complaints, and connects feedback to specific product areas and customer segments to guide evidence-based prioritization.

## When to Use

- You're analyzing customer feedback from multiple channels and need to find patterns
- A product team is prioritizing their roadmap and needs data-driven insights
- You've collected feedback from support tickets, surveys, or reviews and need to synthesize it
- You're investigating churn or customer dissatisfaction and need to identify root causes
- You want to distinguish between a "loud minority" and widespread product issues
- You need to segment feedback by customer type (enterprise vs. SMB, new vs. established, high-value vs. low-value)
- You're preparing a product review or quarterly roadmap planning session
- You need to validate whether a feature request is a real pattern or an outlier

## Instructions

1. **Collect all feedback sources**: Gather all available feedback text (transcripts, tickets, reviews, comments, chat logs). Note the source type (call, support ticket, review, etc.) and date for each piece.

2. **Parse feedback units**: Break down the input into individual feedback items. Each statement about a problem, desired feature, or product experience becomes a unit.

3. **Categorize by type**: For each feedback unit, assign one primary category:
   - **Feature Request**: Customer wants new functionality that doesn't exist
   - **Bug/Defect**: Product isn't working as designed
   - **UX Friction**: Design, workflow, or usability issue causing inefficiency or confusion
   - **Praise/Positive Signal**: Compliments, appreciated features, or reasons they chose the product
   - **Churn Signal**: Indicators the customer is considering leaving or has left
   - **Pricing/Commercial**: Concerns about cost or billing structure
   - **Workflow/Integration**: Feedback about how the product fits into their process

4. **Identify customer segment**: Tag each piece with:
   - **Company type**: Enterprise / Mid-market / SMB / Startup
   - **Customer tenure**: New (< 3 months) / Established (3-12 months) / Long-term (> 12 months)
   - **Revenue tier**: High-value / Standard / Low-value (based on context clues: deal size, usage, or stated importance)
   - **Use case type**: Primary use case mentioned (e.g., "project planning," "resource allocation")

5. **Pattern detection**: Identify how many times each feedback theme appears across all sources. Count exact mentions and semantic equivalents. Flag any themes that appear 3+ times as a pattern.

6. **Assess signal strength**: For each pattern, note:
   - **Frequency**: How many customers mentioned this? How many feedback units?
   - **Sentiment intensity**: Is this a mild preference or severe pain point? (1-5 scale)
   - **Consistency**: Do different customer segments all mention this, or is it isolated?

7. **Score urgency and impact**: Assign each pattern a composite score:
   - **Impact** (1-5): How much would fixing this improve customer value/retention?
   - **Urgency** (1-5): How time-sensitive is this? (Churn signals and blocking bugs score higher)
   - **Effort estimate**: Simple guess at implementation complexity (Low / Medium / High)

8. **Connect to product areas**: For each pattern, specify which product area(s) are affected:
   - Project Management
   - Reporting/Analytics
   - Integrations
   - Performance
   - Mobile/Desktop
   - Administration
   - Other (specify)

9. **Separate signal from noise**: Identify:
   - **Patterns** (mentioned 3+ times or from 3+ different customers)
   - **Outliers** (single mentions or from only one customer segment)
   - **Contradictions** (e.g., "feature X is amazing" vs. "feature X is the main problem")

10. **Generate synthesis**: Create a summary output with ranked insights, segment-specific recommendations, and data to support decision-making.

## Output Format

```markdown
# Product Feedback Synthesis Report

## Executive Summary
[2-3 sentences describing the most critical findings and their business impact]

## Key Patterns Identified

### Pattern: [Theme Name]
- **Frequency**: [X mentions across Y customers/sources]
- **Impact Score**: [X/5] | **Urgency Score**: [X/5]
- **Affected Segments**: [List customer types affected]
- **Product Areas**: [List affected areas]
- **Representative quotes**: 
  - "[Direct quote 1]"
  - "[Direct quote 2]"
- **Analysis**: [1-2 sentences explaining why this matters and what it signals]
- **Recommended action**: [How to address this]

[Repeat for 3-5 patterns, ranked by Impact × Urgency]

## Segment-Specific Insights

### Enterprise Customers
- [Key pattern affecting this segment]
- [Churn risk if not addressed]

### SMB Customers
- [Key pattern affecting this segment]
- [Retention impact]

### New Customers (< 3 months)
- [Onboarding or early-stage friction]

### Long-term Customers (> 12 months)
- [Feature maturity expectations]

## Outliers & Contradictions

### Single Mentions
- [Feedback that appeared once, noted but not prioritized]

### Contradictions
- [Conflicting feedback with analysis of why it occurs]

## Noise vs. Signal Assessment

**Clear Signal** (3+ mentions, multiple segments, high consistency):
- [List 1-2 patterns]

**Moderate Signal** (2 mentions or limited segment consistency):
- [List themes]

**Noise** (single mention, narrow segment):
- [List themes to de-prioritize]

## Recommended Prioritization

| Rank | Pattern | Impact | Urgency | Effort | Recommendation |
|------|---------|--------|---------|--------|-----------------|
| 1 | [Name] | 5/5 | 5/5 | Medium | Roadmap priority |
| 2 | [Name] | 4/5 | 4/5 | Low | Next sprint |
| 3 | [Name] | 4/5 | 2/5 | High | Backlog, research |

## Data Quality Notes
- Sources analyzed: [List types and count]
- Total feedback units: [X]
- Date range: [Period]
- Coverage: [What customer segments are over/under-represented]
```

## Example

**INPUT:**
```
Support Tickets (March 2026):
- Acme Corp (Enterprise, $150K ARR, 18 months): "Our team keeps hitting errors when exporting reports to PowerPoint. Happens ~50% of the time. We end up doing it manually, which defeats the purpose."
- TechStartup Inc (SMB, $15K ARR, 4 months): "Love the dashboard! But we can't sort by custom fields. We're using 5 custom fields for prioritization and have to do it manually. Getting annoying."
- SmallBiz LLC (SMB, $8K ARR, 2 months): "Can't figure out how to set up custom fields. The onboarding mentions it but there's no tutorial. Took me 3 days to figure it out."

Slack #feedback channel:
- "Feature request: integration with Slack so I get notifications when tasks are assigned to me. That's how I find out about work currently."
- "URGENT BUG: When I have 500+ tasks, the app becomes completely unusable. Loads take 30+ seconds."

NPS Survey Comments (Q1 2026):
- Enterprise customer A: "Great tool, but export to PDF is broken for large datasets. This is a blocker for our monthly reporting."
- Enterprise customer B: "Performance slows down significantly with large projects. We're considering alternatives."
- Enterprise customer C: "Missing Slack integration. Our team lives in Slack, you're forcing us to check another app."
- SMB customer A: "Excellent UX overall. One small thing—can't sort by custom fields, but it's not a dealbreaker."
- New customer: "Onboarding was confusing. Could use better help docs on advanced features like custom fields."
- Long-term customer: "Been using for 2 years, but you're missing features competitors have. Thinking about switching."

Call transcript snippet (March 15):
- Customer (Enterprise): "Performance is becoming a real issue. When we load projects with 1000+ tasks, it's basically frozen for 30 seconds. We're paying for enterprise and expecting this to be smooth. If you can't fix it, we might have to look at alternatives."
```

**OUTPUT:**
```markdown
# Product Feedback Synthesis Report

## Executive Summary

**Critical Finding**: Performance degradation with large datasets is a tier-1 churn risk affecting enterprise customers and driving consideration of competitors. Custom field functionality limitations are creating friction across SMB and onboarding phases. Export/reporting reliability issues are blocking enterprise workflows and preventing full ROI on the platform.

## Key Patterns Identified

### Pattern 1: Performance Degradation with Large Datasets
- **Frequency**: 4 mentions across 3 customers + 1 Slack report
- **Impact Score**: 5/5 | **Urgency Score**: 5/5 | **Effort**: Medium
- **Affected Segments**: Enterprise (primary), Mid-market
- **Customer Tenure**: Established and long-term customers most vocal
- **Product Areas**: Core performance, Database optimization
- **Representative quotes**:
  - "When I have 500+ tasks, the app becomes completely unusable. Loads take 30+ seconds."
  - "Performance slows down significantly with large projects. We're considering alternatives."
  - "When we load projects with 1000+ tasks, it's basically frozen for 30 seconds. We're paying for enterprise and expecting this to be smooth. If you can't fix it, we might have to look at alternatives."
- **Analysis**: This is a high-confidence churn signal among enterprise customers who depend on the platform for scale. The explicit mention of competitors and upgrade regret indicates this is actively driving consideration of switching. This appears tied to indexing or query optimization issues with dataset size.
- **Recommended action**: Escalate to engineering for performance audit. Prioritize query optimization and caching for large datasets. Consider rate-limiting or warnings for users approaching performance boundaries as interim measure.

### Pattern 2: Custom Field Management Limitations
- **Frequency**: 3 mentions across 2 customers + 1 SMB user feedback
- **Impact Score**: 3/5 | **Urgency Score**: 3/5 | **Effort**: Low
- **Affected Segments**: SMB, New customers
- **Customer Tenure**: New (< 3 months) and established (3-12 months)
- **Product Areas**: Data model, UI/UX
- **Representative quotes**:
  - "We can't sort by custom fields. We're using 5 custom fields for prioritization and have to do it manually."
  - "Can't figure out how to set up custom fields. The onboarding mentions it but there's no tutorial."
  - "Can't sort by custom fields, but it's not a dealbreaker."
- **Analysis**: Custom fields exist but lack critical affordances: sorting/filtering UI and onboarding guidance. This is causing workflow friction for SMB users who rely on custom fields for their process, and creating onboarding delays. Sentiment ranges from workaround-level frustration to low priority, suggesting this is an "edge case power feature" rather than core blocker.
- **Recommended action**: Add sort/filter UI for custom fields (low effort, high visibility). Enhance onboarding docs with step-by-step custom field setup tutorial. Monitor SMB churn impact.

### Pattern 3: Export/Reporting Reliability Issues
- **Frequency**: 3 mentions across 2 customers
- **Impact Score**: 4/5 | **Urgency Score**: 4/5 | **Effort**: Low-Medium
- **Affected Segments**: Enterprise (primary), general users
- **Customer Tenure**: Established and long-term
- **Product Areas**: Export functionality, Reporting
- **Representative quotes**:
  - "Export to PowerPoint errors ~50% of the time. We end up doing it manually, which defeats the purpose."
  - "Export to PDF is broken for large datasets. This is a blocker for our monthly reporting."
- **Analysis**: Export is a high-stakes feature for enterprise customers using the platform for reporting workflows. ~50% failure rate makes it unreliable and damages trust. Likely bug with specific file types or dataset sizes. This is preventing ROI on the tool.
- **Recommended action**: Investigate export bug with large datasets and PowerPoint format. Add logging to capture failure cases. Include in next hotfix or patch release.

### Pattern 4: Slack Integration Request
- **Frequency**: 2 mentions across 2 customers (one explicit request, one churn signal)
- **Impact Score**: 3/5 | **Urgency Score**: 2/5 | **Effort**: Medium-High
- **Affected Segments**: Enterprise (primary)
- **Product Areas**: Integrations, Notifications
- **Representative quotes**:
  - "Feature request: integration with Slack so I get notifications when tasks are assigned to me. That's how I find out about work currently."
  - "Missing Slack integration. Our team lives in Slack, you're forcing us to check another app."
- **Analysis**: Slack integration is a feature request from information-worker focused customers who see notifications as core to their workflow. One enterprise customer has flagged it as competitive disadvantage. This is not unique to your product but represents workflow integration gap.
- **Recommended action**: Roadmap for Q3/Q4. Design API for Slack notifications. Could be quick win if notification infrastructure exists.

### Pattern 5: Onboarding Clarity for Advanced Features
- **Frequency**: 2 mentions
- **Impact Score**: 2/5 | **Urgency Score**: 2/5 | **Effort**: Low
- **Affected Segments**: New customers (< 3 months)
- **Product Areas**: Onboarding, Documentation
- **Representative quotes**:
  - "Can't figure out how to set up custom fields. The onboarding mentions it but there's no tutorial. Took me 3 days to figure it out."
  - "Onboarding was confusing. Could use better help docs on advanced features like custom fields."
- **Analysis**: Onboarding mentions advanced features (custom fields) but lacks step-by-step guidance. This creates friction in the first 90 days but isn't a blocker. Improving this would reduce support tickets and improve time-to-value.
- **Recommended action**: Add in-app walkthroughs or video tutorials for custom fields setup. Link from onboarding to help docs. Quick documentation improvement.

## Segment-Specific Insights

### Enterprise Customers
- **Critical**: Performance degradation is an active churn driver. One customer explicitly mentioned considering alternatives.
- **High Priority**: Export reliability is blocking reporting workflows and ROI.
- **Medium Priority**: Slack integration is competitive feature gap.
- **Churn Risk**: High if performance not addressed within 60 days. Customer explicitly stated "considering alternatives."

### SMB Customers
- **Medium Priority**: Custom field sorting would improve workflow efficiency but is a workaround-level pain point, not a dealbreaker.
- **Medium Priority**: Better onboarding docs would reduce time-to-value for new SMB users.
- **Retention Risk**: Low; SMB feedback is positive overall with feature requests as minor friction.

### New Customers (< 3 months)
- **Friction Point**: Onboarding doesn't adequately explain custom fields setup.
- **Time-to-Value Impact**: 3-day delay to figure out a core feature suggests documentation gap.
- **Action**: Improve help docs and in-app guidance before this impacts upgrade conversion.

### Long-term Customers (> 12 months)
- **Churn Signal**: One long-term customer flagged missing features vs. competitors and switching consideration.
- **Retention Risk**: Moderate; combined with performance issues, product maturity expectations are not being met.

## Outliers & Contradictions

### Positive Outlier
- One SMB customer gave enthusiastic feedback: "Excellent UX overall" and downgraded custom field sorting as "not a dealbreaker." This shows SMB satisfaction is high despite feature gaps, reducing urgency for SMB-specific features.

### Contradiction
- Custom field sorting is described as "annoying" by one SMB (moderate frustration) vs. "not a dealbreaker" by another (low priority). This suggests it's a friction point but not a core blocker. Implement as low-effort quality-of-life improvement, not critical priority.

## Noise vs. Signal Assessment

**Clear Signal** (Multiple sources, multiple customers, high consistency):
- Performance degradation with large datasets (4 mentions, 3 enterprise customers, explicit churn signal)
- Export/reporting reliability issues (3 mentions, 2 enterprise customers, workflow blocking)

**Moderate Signal** (2+ mentions, emerging pattern):
- Custom field functionality gaps (3 mentions, multiple segments, but low impact individually)
- Slack integration (2 mentions, enterprise focus, competitive feature)
- Onboarding clarity (2 mentions, new customer specific, low impact)

**Noise** (Single mentions, low priority):
- None; all feedback appears to be from legitimate customers with specific use cases.

## Recommended Prioritization

| Rank | Pattern | Impact | Urgency | Effort | Recommendation |
|------|---------|--------|---------|--------|-----------------|
| 1 | Performance degradation (large datasets) | 5/5 | 5/5 | Medium | **Immediate**—Escalate to engineering. This is tier-1 churn risk. |
| 2 | Export/reporting reliability | 4/5 | 4/5 | Low-Med | **Next sprint hotfix**—High-stakes for enterprise ROI. |
| 3 | Custom field sort/filter UI | 3/5 | 3/5 | Low | **Following sprint**—Quick UX win, improves SMB/new customer experience. |
| 4 | Slack integration | 3/5 | 2/5 | Medium-High | **Q3 roadmap**—Emerging competitive feature, not yet critical. |
| 5 | Onboarding docs for advanced features | 2/5 | 2/5 | Low | **Documentation sprint**—Parallel track, improves AARRR metrics. |

## Data Quality Notes
- **Sources analyzed**: 4 types (Support tickets, Slack channel, NPS survey, call transcripts)
- **Total feedback units**: 11 pieces of feedback
- **Date range**: March 2026 (Q1)
- **Customer segments represented**:
  - Enterprise: 4 mentions (good coverage)
  - SMB: 3 mentions (good coverage)
  - New customers: 2 mentions (moderate coverage)
  - Long-term customers: 3 mentions (good coverage)
- **Coverage gaps**: Mid-market underrepresented; free tier customers not included
- **Confidence level**: High for enterprise needs (multiple sources), moderate for SMB needs (limited sample size)
```

## Edge Cases

1. **Contradictory feedback**: When two customers give opposite feedback (e.g., "feature X is essential" vs. "feature X is not important"), segment the analysis by customer type. One may be enterprise focused, the other SMB. Report both perspectives and note segment differences rather than averaging them out.

2. **Feature requests for functionality that already exists**: Flag this separately. It often indicates a UX/discoverability problem rather than a missing feature. Categorize as "UX Friction" and note that the feature exists but needs better visibility or documentation.

3. **Feedback from churned customers**: Weight heavily on "churn signals" and "alternative consideration" feedback, but note in the report that this is from a lost customer. Their feedback indicates what drove them away and is valuable for preventing similar churn. Don't discard as "they're already gone."

4. **Loud minority feedback**: If one customer mentions an issue repeatedly across multiple channels (support ticket, call, survey) but no other customer mentions it, label as "single customer issue" not "pattern." Document it but don't treat as product-wide priority without corroborating mentions.

5. **Praise mixed with complaints**: When a customer praises the product overall but mentions one issue, treat the complaint as valid signal. Praise doesn't negate the specific problem. Both insights are valuable.

6. **Vague feedback**: If feedback is too general ("the product needs to be better"), request clarification or group it with more specific mentions if a pattern emerges. Don't artificially inflate importance.

7. **Timing context**: Note if feedback clusters around a recent change, release, or new customer onboarding. Timing can indicate whether issues are new problems or long-standing friction.

8. **Paid tier correlation**: When possible, note whether feedback correlates with customer tier or plan. Enterprise complaints about performance matter more than SMB complaints if the enterprise plan promises performance SLAs.
