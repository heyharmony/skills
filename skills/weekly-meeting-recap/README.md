# Weekly Meeting Recap

> Stop asking "what even happened this week?" — get a clear, actionable recap in 2 minutes.

## What It Does

Weekly Meeting Recap consolidates all your conversations from the past week into a single structured document. Instead of scrolling through individual meeting notes, you get:

- **Meetings organized by category** (customer calls, internal syncs, 1:1s, planning sessions, ad-hoc)
- **One-sentence summaries** of each meeting—key outcomes only, no full transcripts
- **Cross-meeting themes** (e.g., "3 customers mentioned pricing concerns this week")
- **All decisions and commitments** surfaced in tables (who owns what, by when)
- **Unresolved threads** flagged so nothing falls through the cracks
- **Weekly signals** — 2–3 patterns to watch as you plan next week

Perfect for end-of-week closeout, Monday morning context, or prep before a leadership meeting.

---

## Who It's For

**Anyone who juggles multiple meetings and can't afford to lose context**:

- **Sales Leaders**: Track pipeline movement, cross-deal themes (pricing, scaling concerns), customer signals
- **Product Managers**: Spot feature gaps, understand customer scaling issues, surface competitive threats
- **Engineering Leads**: Identify blockers, see which customer problems matter most, understand timeline pressure
- **Operations/Finance**: Monitor deal health, commitment tracking, resource planning signals
- **Executive Teams**: Get board-ready narrative of what's happening across the org without 10 individual meeting notes
- **Managers/Skip-Levels**: Prepare for 1:1s by reviewing week's discussions; verify commitments made to reports
- **Founders/CEOs**: Rapid context on org health, customer momentum, team signals—one document instead of chaos

*Anyone, really.* If you have 5+ meetings a week, this saves you 30 minutes of Friday afternoon scrolling.

---

## Use Cases

### Sales Leader End-of-Week Ritual
Sarah, Head of Sales, runs Weekly Recap every Friday at 3 PM. In 2 minutes, she knows:
- Which deals are moving (3 in final negotiation)
- Which customers are at risk (NexGen renewal contingent on product delivery)
- What's blocking progress (TechFlow waiting for performance demo)
- What the team is worried about (2 reps flagged burnout, 1 mid-market churn alert)
- What to communicate to leadership Monday morning

**Result**: She walks into CEO sync fully prepped, no surprises.

### Product Manager Competitive Intelligence
James, PM, uses Weekly Recap to track what *customers* are asking for vs. what *competitors* are offering:
- Week 1: 2 customer calls mention "real-time reporting"
- Week 2: 1 additional customer + 1 prospect cite same gap; competitor analysis confirms it's a differentiator
- Week 3: Flag to engineering, prioritize roadmap

**Result**: Data-driven feature decisions, not guesswork.

### Manager Prep for Direct Reports
Lisa manages 4 AEs. Before Monday's team standup, she runs Weekly Recap and sees:
- Which reps closed deals (recognition moment)
- Which reps have open blockers (support needed)
- Cross-team themes (e.g., all reps struggled with one customer's procurement timeline)
- Who made commitments (follow-up on delivery)

**Result**: Standup is focused, supportive, strategic—not a status report.

### Founder Context Switching
It's Tuesday morning; the Founder just finished a board meeting and is context-switching to product review. Instead of reading 3 days of meeting notes, they:
- Run Weekly Recap from the previous week
- Scan "This Week's Signal" section
- See that customers are asking for X, internal team committed to Y, and there's a resource conflict on Z
- Walk into product review with full context in 3 minutes

**Result**: Decisions made faster, fewer re-explains, less time wasted.

### Asynchronous Org Alignment
Distributed team, multiple time zones. Weekly Recap becomes the source of truth for:
- What happened across all meetings (even ones you couldn't attend)
- What commitments you need to track
- What themes matter to the broader org

Post it in Slack or your team wiki. Everyone reads the same recap.

---

## Setup

### Prerequisites
- Access to Harmony conversation data (transcripts, participant lists, timestamps)
- Meeting data from the past 5–7 days

### How to Use

**Via Harmony Chat:**
```
"Give me a recap of this week's meetings"
"Summarize my past 7 days of conversations"
"Show me this week's meeting summary"
"What are the key takeaways from meetings this week?"
```

**Via API/Integration:**
Trigger the skill weekly (Friday afternoon or Monday morning) and route output to:
- Notion / Confluence (team wiki)
- Slack (direct message or channel post)
- Email (digest to leadership)
- Calendar (block Friday 4 PM to read it)

### Customization

The skill works out of the box, but you can customize:
- **Time Window**: Default is past 5–7 days; adjust to past 10 days or past 2 weeks if preferred
- **Meeting Categories**: Add custom categories if your org has unique meeting types (e.g., "Customer Health Reviews," "Engineering Design Reviews")
- **Threshold for Themes**: Adjust from "3+ mentions" to "2+ mentions" if you want more sensitivity to patterns
- **Output Format**: Request CSV export, Notion embed, or Slack thread format

---

## What You Get

### A Single Recap Document With:

1. **By the Numbers**
   - Total meetings, attendee count, customer vs. internal split
   - How many decisions and commitments created this week

2. **Meetings Organized by Category**
   - Customer Calls
   - Internal Syncs
   - 1:1s
   - Planning Sessions
   - Ad-Hoc
   
   Each with: date, who attended, 1–2 sentence summary, key outcomes

3. **Cross-Meeting Themes**
   - Patterns across all meetings (not just one-off mentions)
   - Why each theme matters + which meetings surface it
   - Example: "3 customers mentioned pricing concerns" or "All team leads flagged resource constraints"

4. **All Decisions Made This Week**
   - Decision | Owner | Deadline | Context
   - No decision falls through the cracks

5. **All Commitments & Action Items**
   - Action | Owner | Due Date | Meeting | Status
   - Track who committed to what (yours, theirs, engineering, product, etc.)

6. **Unresolved Threads**
   - Discussions that started but didn't finish
   - Who do you need to follow up with?
   - What's still pending?

7. **This Week's Signal**
   - 2–3 patterns to watch moving forward
   - Concrete implications (e.g., "Performance scaling is gating 2 deals; prioritize engineering")
   - Helps you plan next week proactively

8. **Next Week's Forecast** (one-liner)
   - What's coming, what matters most

