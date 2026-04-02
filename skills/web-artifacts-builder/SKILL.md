---
name: "Web Artifacts Builder"
description: "Build interactive web dashboards, data visualizations, and internal tools as single-file HTML artifacts using React, TypeScript, and Tailwind CSS. Trigger on: build web dashboard, create interactive tool, data visualization, web artifact, interactive prototype, internal tool UI."
dependencies: []
author: "Harmony"
version: "1.0.0"
icon: "sparkles"
cover: ""
screenshots: []
category: "Product"
---

## Purpose

Transform business needs into production-grade web artifacts that teams can use immediately. This skill compiles modern React components with TypeScript type safety and Tailwind CSS styling into a self-contained HTML file—no build server, no dependencies, no installation. Perfect for dashboards, KPI trackers, client reports, survey tools, and interactive decision-making aids that knowledge workers can share via link or email.

## When to Use

- Building a real-time KPI dashboard that executives check during standups
- Creating an interactive data visualization for quarterly business reviews
- Prototyping an internal tool for lead scoring, candidate screening, or expense tracking
- Designing a client-facing report with interactive charts and filters
- Building a survey or intake form that captures structured data
- Creating a team planning tool or capacity planner with drag-and-drop interfaces
- Generating a visual portfolio or capability showcase that stands out from templates

## Instructions

### 1. Define the Artifact Purpose and Data Structure

- Clarify the core function: Is this a dashboard (view-only), a tool (interactive), or a report (presentation)?
- Identify key metrics, data points, or user inputs that drive the interface
- Decide on interactivity: filtering, sorting, real-time updates, form submissions
- Map out the visual hierarchy: what's the primary action or insight?

### 2. Establish Design Direction (Before Code)

- Define aesthetic intent: modern/minimal, bold/energetic, corporate/trustworthy, playful/approachable
- Choose a cohesive color palette (5-7 colors maximum) via CSS variables
- Select typography: avoid defaults, pick 2-3 font weights that establish voice
- Determine spacing and grid: consistent padding, margins, and component sizing
- Plan micro-interactions: hover states, transitions, loading states

### 3. Structure React Components with TypeScript

- Create a root component as the container with state management
- Build reusable sub-components: cards, charts, filters, buttons, input fields
- Use TypeScript interfaces for all data structures and props
- Implement React hooks (useState, useEffect, useContext) for state and side effects
- Add accessibility attributes: aria-labels, role attributes, semantic HTML

### 4. Style with Tailwind CSS and Custom CSS

- Use Tailwind utility classes for layout, spacing, and responsive design
- Create custom CSS variables in a style block for brand colors and typography
- Implement dark mode support if the artifact requires it
- Add smooth transitions and animations (e.g., fade-in, slide-in effects)
- Ensure responsive behavior on mobile, tablet, and desktop screens

### 5. Bundle into Single HTML File

- Use Vite to build the React project with minified output
- Embed all CSS (Tailwind + custom) directly in the HTML head
- Inline all JavaScript—no external script imports
- Include minimal polyfills if needed for older browser support
- Strip all development tools and source maps

### 6. Test and Validate Output

- Open the HTML file in a browser without any server
- Verify all interactive elements work (buttons, forms, filters, dynamic content)
- Check responsive behavior by resizing the browser window
- Test on different browsers (Chrome, Firefox, Safari) if possible
- Confirm the file size is under 5MB for easy sharing

### 7. Prepare for Sharing and Documentation

- Add a title and footer with metadata (creation date, version, owner)
- Include a brief in-app help section or tooltip guide for complex features
- Generate a README or usage guide if the artifact requires context
- Create a version control system if the artifact will evolve
- Document any API endpoints or data sources the artifact expects

## Output Format

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{Artifact Name}}</title>
  <style>
    /* Tailwind CSS + Custom CSS Variables */
    :root {
      --color-primary: #[HEX];
      --color-secondary: #[HEX];
      --color-text: #[HEX];
      --font-sans: '[Font Name]', system-ui;
      --spacing-unit: 1rem;
    }

    /* Include full Tailwind build or custom framework */
    [Complete Tailwind CSS or lightweight framework]

    /* Custom animations and component styles */
    @keyframes slideIn {
      from { transform: translateX(-10px); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
  </style>
</head>
<body class="bg-white text-gray-900 font-sans">
  <div id="root"></div>

  <script type="module">
    // React + TypeScript compiled to inline JavaScript

    // Root component with all sub-components
    const App = () => {
      const [data, setData] = React.useState(initialState);
      return (
        <div className="container mx-auto p-6">
          {/* Component structure */}
        </div>
      );
    };

    // ReactDOM render
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<App />);
  </script>
</body>
</html>
```

## Example

**Input Scenario:** Create an interactive Q1 2026 OKR tracking dashboard for Meridian Tech's leadership team to monitor departmental progress against key results.

**Artifact Name:** meridian-q1-okr-tracker.html

**Expected Output:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Meridian Q1 2026 OKR Tracker</title>
  <style>
    :root {
      --primary: #0f172a;
      --accent: #3b82f6;
      --success: #10b981;
      --warning: #f59e0b;
      --danger: #ef4444;
    }

    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Inter', sans-serif; background: #f8fafc; color: #1e293b; }

    .container { max-width: 1200px; margin: 0 auto; padding: 2rem; }
    .header { margin-bottom: 2rem; }
    .header h1 { font-size: 2rem; font-weight: 700; color: var(--primary); }
    .header p { color: #64748b; font-size: 0.95rem; margin-top: 0.5rem; }

    .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; }

    .card {
      background: white;
      border-radius: 8px;
      padding: 1.5rem;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
      transition: box-shadow 0.2s ease;
    }
    .card:hover { box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15); }

    .card-title { font-weight: 600; font-size: 1.1rem; margin-bottom: 0.5rem; color: var(--primary); }
    .card-department { font-size: 0.85rem; color: #94a3b8; margin-bottom: 1rem; }

    .progress-bar {
      width: 100%;
      height: 8px;
      background: #e2e8f0;
      border-radius: 4px;
      overflow: hidden;
      margin: 1rem 0;
    }
    .progress-fill {
      height: 100%;
      border-radius: 4px;
      transition: width 0.3s ease;
    }
    .progress-fill.on-track { background: var(--success); }
    .progress-fill.at-risk { background: var(--warning); }
    .progress-fill.off-track { background: var(--danger); }

    .status-badge {
      display: inline-block;
      padding: 0.4rem 0.8rem;
      border-radius: 4px;
      font-size: 0.85rem;
      font-weight: 600;
    }
    .status-badge.on-track { background: #d1fae5; color: #065f46; }
    .status-badge.at-risk { background: #fef3c7; color: #92400e; }
    .status-badge.off-track { background: #fee2e2; color: #991b1b; }

    .stat { display: flex; justify-content: space-between; padding: 0.5rem 0; border-bottom: 1px solid #f1f5f9; font-size: 0.9rem; }
    .stat:last-child { border-bottom: none; }
    .stat-label { color: #64748b; }
    .stat-value { font-weight: 600; color: var(--primary); }

    .filter-group { display: flex; gap: 1rem; margin-bottom: 1.5rem; flex-wrap: wrap; }
    .filter-btn {
      padding: 0.6rem 1.2rem;
      background: white;
      border: 1px solid #cbd5e1;
      border-radius: 6px;
      cursor: pointer;
      font-size: 0.9rem;
      transition: all 0.2s ease;
    }
    .filter-btn.active { background: var(--accent); color: white; border-color: var(--accent); }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Q1 2026 OKR Tracker</h1>
      <p>Real-time progress against strategic objectives across all departments</p>
    </div>

    <div class="filter-group">
      <button class="filter-btn active" onclick="filterOKRs('all')">All Departments</button>
      <button class="filter-btn" onclick="filterOKRs('engineering')">Engineering</button>
      <button class="filter-btn" onclick="filterOKRs('sales')">Sales & Growth</button>
      <button class="filter-btn" onclick="filterOKRs('product')">Product</button>
    </div>

    <div class="grid" id="okr-grid">
      <!-- Cards populated by JavaScript -->
    </div>
  </div>

  <script>
    const okrData = [
      {
        id: 1,
        objective: "Reduce API response time by 40%",
        owner: "Engineering",
        progress: 75,
        status: "on-track",
        kr1: { name: "P95 latency < 100ms", progress: 80 },
        kr2: { name: "Database query optimization", progress: 70 },
        updated: "Mar 20, 2026"
      },
      {
        id: 2,
        objective: "Acquire 500 enterprise customers",
        owner: "Sales & Growth",
        progress: 45,
        status: "at-risk",
        kr1: { name: "Land 15 Fortune 500 accounts", progress: 33 },
        kr2: { name: "Close $2.5M ARR", progress: 55 },
        updated: "Mar 21, 2026"
      },
      {
        id: 3,
        objective: "Launch AI-powered features",
        owner: "Product",
        progress: 90,
        status: "on-track",
        kr1: { name: "Intelligent recommendations live", progress: 100 },
        kr2: { name: "NLP sentiment analysis", progress: 85 },
        updated: "Mar 22, 2026"
      }
    ];

    let currentFilter = "all";

    function filterOKRs(department) {
      currentFilter = department;
      document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
      event.target.classList.add('active');
      renderOKRs();
    }

    function renderOKRs() {
      const grid = document.getElementById('okr-grid');
      grid.innerHTML = '';

      const filtered = currentFilter === 'all'
        ? okrData
        : okrData.filter(okr => okr.owner.toLowerCase() === currentFilter);

      filtered.forEach(okr => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
          <div class="card-title">${okr.objective}</div>
          <div class="card-department">${okr.owner}</div>

          <div class="progress-bar">
            <div class="progress-fill ${okr.status}" style="width: ${okr.progress}%"></div>
          </div>

          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
            <span style="font-weight: 600; font-size: 1.3rem;">${okr.progress}%</span>
            <span class="status-badge ${okr.status}">${okr.status.replace('-', ' ').toUpperCase()}</span>
          </div>

          <div class="stat">
            <span class="stat-label">${okr.kr1.name}</span>
            <span class="stat-value">${okr.kr1.progress}%</span>
          </div>
          <div class="stat">
            <span class="stat-label">${okr.kr2.name}</span>
            <span class="stat-value">${okr.kr2.progress}%</span>
          </div>

          <div style="font-size: 0.8rem; color: #94a3b8; margin-top: 1rem; padding-top: 1rem; border-top: 1px solid #f1f5f9;">
            Updated ${okr.updated}
          </div>
        `;
        grid.appendChild(card);
      });
    }

    renderOKRs();
  </script>
</body>
</html>
```

**Deliverable Details:**
- Single HTML file (85 KB minified)
- Three departments tracked with color-coded progress bars
- Interactive filtering by department with instant visual updates
- Each OKR card shows primary objective, key results with progress, and last update timestamp
- Responsive grid adapts to mobile, tablet, and desktop screens
- No external dependencies—works offline, shareable via link or email

## Edge Cases

- **Large datasets (100+ OKRs):** Implement pagination or a modal search feature to avoid overwhelming the DOM. Use virtual scrolling if the list exceeds 50 items.
- **Real-time data updates:** If the artifact needs live data, use WebSocket or polling via JavaScript. Include a manual "Refresh" button as fallback.
- **Missing or incomplete data:** Show placeholder states (skeleton loaders or "Not updated yet" text) for fields without data. Never leave cells blank if they're critical to the narrative.
- **Different user roles (viewer vs. editor):** Build role-based UI—hide edit buttons for read-only users, show form controls for admins. Store role in localStorage or URL parameter.
- **Browser compatibility:** Test on Chrome, Firefox, Safari, and Edge. Use CSS fallbacks for older browsers (no CSS Grid on IE11; use flexbox as fallback).
- **Accessibility:** Ensure color isn't the only status indicator (add icons or text labels). Include ARIA attributes for screen readers. Test with keyboard-only navigation.

Now what? Share the artifact with your team, gather feedback on UX/clarity, iterate on the design, and integrate real data sources if it's a prototype.
