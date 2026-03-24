---
name: "Frontend Design"
description: "Build distinctive, production-grade web interfaces and landing pages with intentional design—custom typography, cohesive color themes, strategic animations, and unconventional composition. Trigger on: design a landing page, create a frontend, web interface design, design a website, UI design, interactive prototype, custom web design."
dependencies: []
---

## Purpose

Transform vague design direction into pixel-perfect, production-ready frontend code that moves beyond AI templates and generic aesthetics. This skill establishes clear aesthetic direction first—defining purpose, tone, and visual differentiation—then executes in HTML, CSS, and JavaScript with intentional typography, cohesive color systems, strategic motion, and unconventional spatial composition. Produces frontend code ready to ship, remix with backends, or export as static sites. Works equally well for landing pages, internal tool UIs, marketing microsites, and interactive prototypes.

## When to Use

- Designing a distinctive landing page for a B2B SaaS product that breaks from blue-and-white templates
- Creating a custom admin dashboard UI that's both beautiful and functional
- Building a marketing microsite or one-pager that stands out from Webflow clones
- Prototyping an interactive product demo or feature preview before development
- Designing a brand-new website from scratch with custom typography, color system, and micro-interactions
- Building a portfolio or case study showcase that demonstrates design craftsmanship
- Creating a consulting firm or agency website that conveys expertise and aesthetic sensibility

## Instructions

### 1. Define Aesthetic Direction (Before Code)

- Clarify purpose: Is this a corporate reassurance site, a bold startup pitch, an educational tool, or a creative portfolio?
- Establish tone: Authoritative vs. playful? Minimalist vs. maximalist? Timeless vs. trendy? Be specific, not vague.
- Identify visual differentiation: What makes this site visually unique? What would make someone stop scrolling and pay attention?
- Avoid clichés: No purple gradients, centered layouts, or "modern minimalism" without intentionality. What's the *reason* for every choice?
- Document constraints: What's off-limits? What brand elements must be respected? What technical requirements exist?
- Define success: Will users feel trusted, delighted, informed, or transformed after visiting? Design should reinforce that outcome.

### 2. Establish Typography System

- Choose 2-3 typefaces with intentional voice: Serif for authority/tradition, sans-serif for modernity, mono for technical/playful
- Avoid defaults: Skip Inter, Poppins, system fonts. Choose distinctive families (Fraunces, Sohne, Maax, Plex, Crimson, etc.)
- Build hierarchy: Define exact sizes for H1, H2, H3, body, captions, metadata (e.g., 64px, 48px, 32px, 16px, 12px, 10px)
- Control spacing: Set line-height (1.4–1.8), letter-spacing, margin-bottom consistently across all text sizes
- Create rhythm: Use modular scale or golden ratio for proportional relationships between sizes
- Test readability: Ensure 60-character line length for body text; 4.5:1 contrast ratio for accessibility
- Establish font-weight hierarchy: Bold for emphasis, regular for neutral, light for supporting info

### 3. Design Color System via CSS Variables

- Select 5-8 colors maximum: Primary, secondary, accent, neutral tones (light/dark), success/warning/error
- Define emotional intent for each: Why this blue? What does this gold communicate? Avoid random choices.
- Build color relationships: Complementary, analogous, triadic? How do colors interact spatially and conceptually?
- Create semantic naming: --color-primary, --color-text, --color-border, --color-accent—not --color-blue
- Test contrast: Use WebAIM contrast checker to ensure WCAG AA compliance (4.5:1 for text, 3:1 for graphics)
- Plan dark mode: If needed, define inverted palette upfront. Not an afterthought.
- Lock the palette: No additional colors mid-build. Discipline creates cohesion.

### 4. Plan Spatial Composition and Layout

- Define grid structure: 12-column grid, asymmetrical zones, card-based layout, or custom proportions?
- Establish margins and padding: Consistent spacing creates order. Use a modular unit (8px, 1rem) and scale up/down (8, 16, 24, 32, 48, 64)
- Create visual hierarchy: What's the primary focal point? Where does the eye move next? Design the journey.
- Use asymmetry strategically: Offset columns, uneven spacing, non-centered elements create visual tension and sophistication
- Integrate whitespace: Empty space is not wasted space. It's composition. Too much information crushes the eye.
- Plan breakpoints: Mobile-first approach. How does the layout reflow at 480px, 768px, 1024px, 1440px?
- Consider motion: Where will animations occur? Which interactions need micro-transitions (hover, focus, loading)?

### 5. Build Semantic HTML Structure

- Use proper semantic elements: header, nav, main, section, article, footer—not divs everywhere
- Structure for accessibility: Logical heading hierarchy (h1 → h2 → h3), alt text for images, aria-labels for buttons
- Plan for content scalability: Can the layout accommodate variable-length text, more items, different screen sizes?
- Include form elements: accessible inputs, labels, error states, success feedback
- Optimize for SEO: Meta tags, structured data, semantic markup that search engines understand

### 6. Style with CSS: Colors, Type, Motion

- Create CSS variable system: All colors, spacing, fonts, and transitions defined at top of stylesheet
- Build utility classes: Reusable layout, typography, and effect classes—but only if they reduce code bloat
- Implement responsive typography: Font-size scales with viewport (clamp() function)
- Add micro-interactions: Hover effects (0.2s transitions), focus states, active button states, loading spinners
- Design animations: Subtle fade-ins on load, slide-in sections, hover transformations—nothing jarring
- Use CSS Grid and Flexbox: Modern layout tools. Avoid floats and absolute positioning unless intentional.
- Control transitions: Consistent easing function (ease-out), duration (200–400ms), and delay patterns

### 7. Test, Validate, and Optimize

- Browser testing: Chrome, Firefox, Safari, Edge. Check responsive behavior at all breakpoints.
- Accessibility testing: Keyboard navigation, screen reader compatibility, color contrast, WCAG compliance
- Performance: Optimize images, minimize CSS/JS, lazy-load below-the-fold content. Aim for <3s load time.
- Cross-device testing: Test on actual mobile phones, tablets, desktop monitors—not just browser dev tools.
- Usability: Are CTAs clear? Is the information hierarchy obvious? Can users accomplish goals intuitively?
- Final polish: Remove dead code, rename classes clearly, add comments, document color/font choices

## Output Format

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{Site Title}}</title>
  <style>
    /* CSS Variables: Colors, Typography, Spacing */
    :root {
      --color-primary: #[HEX];
      --color-secondary: #[HEX];
      --color-accent: #[HEX];
      --color-text: #[HEX];
      --color-bg: #[HEX];
      --color-border: #[HEX];

      --font-serif: '[Serif Font]', serif;
      --font-sans: '[Sans Font]', sans-serif;

      --spacing-unit: 1rem;
      --transition-ease: cubic-bezier(0.4, 0, 0.2, 1);
    }

    /* Reset and Base Styles */
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: var(--font-sans); color: var(--color-text); background: var(--color-bg); line-height: 1.6; }

    /* Typography */
    h1 { font-family: var(--font-serif); font-size: 3.5rem; font-weight: 700; line-height: 1.2; margin-bottom: 1.5rem; }
    h2 { font-family: var(--font-serif); font-size: 2.5rem; font-weight: 600; margin-bottom: 1rem; }
    p { font-size: 1rem; margin-bottom: 1.5rem; max-width: 60ch; }

    /* Layout Grid and Spacing */
    .container { max-width: 1200px; margin: 0 auto; padding: 2rem; }
    .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; }

    /* Components */
    .button {
      background: var(--color-primary);
      color: white;
      padding: 0.75rem 1.5rem;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background 0.3s var(--transition-ease);
    }
    .button:hover { background: var(--color-accent); }

    /* Animations */
    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
    .fade-in { animation: fadeIn 0.6s ease-out; }
  </style>
</head>
<body>
  <header class="header">
    <nav class="nav">
      <!-- Navigation -->
    </nav>
  </header>

  <main>
    <section class="hero">
      <!-- Hero section -->
    </section>

    <section class="features">
      <!-- Features section -->
    </section>
  </main>

  <footer>
    <!-- Footer -->
  </footer>

  <script>
    // Minimal JavaScript for interactivity
  </script>
</body>
</html>
```

## Example

**Input Scenario:** Design a distinctive landing page for "Prism"—a B2B data analytics company that wants to position itself as thoughtful, design-conscious, and different from competitor commodities.

**Aesthetic Direction:**
- Purpose: Build trust through thoughtful design; convey sophistication and expertise
- Tone: Authoritative yet approachable; premium but not stuffy; forward-thinking but grounded
- Visual differentiation: Asymmetrical grid, rich earth-tone color palette, striking serif typography, intentional use of whitespace
- Constraints: Must include logo, product screenshots, testimonials; must be mobile-responsive; must convert with clear CTA

**Frontend Code Output:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Prism Analytics: Transform data into decisions.">
  <title>Prism Analytics</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
  <style>
    :root {
      --primary: #2d1810;
      --secondary: #8b7355;
      --accent: #d4a574;
      --light: #f5f2ed;
      --text: #1a1a1a;
      --border: #e0dcd7;

      --font-serif: 'Crimson Text', serif;
      --font-sans: 'Inter', sans-serif;
      --spacing: 1rem;
    }

    * { margin: 0; padding: 0; box-sizing: border-box; }

    body {
      font-family: var(--font-sans);
      color: var(--text);
      background: var(--light);
      line-height: 1.6;
      font-size: 16px;
    }

    /* Typography */
    h1 {
      font-family: var(--font-serif);
      font-size: clamp(2.5rem, 8vw, 4.5rem);
      font-weight: 600;
      line-height: 1.1;
      margin-bottom: 1.5rem;
      color: var(--primary);
    }

    h2 {
      font-family: var(--font-serif);
      font-size: clamp(1.75rem, 5vw, 3rem);
      font-weight: 600;
      margin-bottom: 1rem;
      color: var(--primary);
    }

    p {
      font-size: 1rem;
      line-height: 1.8;
      margin-bottom: 1.5rem;
      max-width: 65ch;
      color: #333;
    }

    .small-text {
      font-size: 0.875rem;
      color: var(--secondary);
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }

    /* Layout */
    .container {
      max-width: 1400px;
      margin: 0 auto;
      padding: 4rem 2rem;
    }

    .container-narrow {
      max-width: 900px;
      margin: 0 auto;
    }

    /* Header & Navigation */
    header {
      padding: 2rem;
      border-bottom: 1px solid var(--border);
      background: white;
    }

    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1400px;
      margin: 0 auto;
    }

    .logo {
      font-family: var(--font-serif);
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--primary);
    }

    .nav-links {
      list-style: none;
      display: flex;
      gap: 2rem;
    }

    .nav-links a {
      text-decoration: none;
      color: var(--text);
      font-size: 0.95rem;
      transition: color 0.3s ease;
    }

    .nav-links a:hover {
      color: var(--accent);
    }

    /* Hero Section */
    .hero {
      background: white;
      padding: 6rem 2rem;
    }

    .hero-content {
      max-width: 1400px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
    }

    .hero-text h1 {
      margin-bottom: 1.5rem;
    }

    .hero-text p {
      font-size: 1.1rem;
      margin-bottom: 2rem;
    }

    .hero-visual {
      background: linear-gradient(135deg, #8b7355 0%, #d4a574 100%);
      border-radius: 8px;
      height: 400px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 1.2rem;
      text-align: center;
      padding: 2rem;
    }

    /* Buttons */
    .btn {
      display: inline-block;
      padding: 0.875rem 2rem;
      background: var(--primary);
      color: white;
      text-decoration: none;
      border: none;
      border-radius: 4px;
      font-size: 1rem;
      cursor: pointer;
      transition: all 0.3s ease;
      font-weight: 500;
    }

    .btn:hover {
      background: var(--secondary);
      transform: translateY(-2px);
    }

    .btn-secondary {
      background: transparent;
      color: var(--primary);
      border: 2px solid var(--primary);
    }

    .btn-secondary:hover {
      background: var(--primary);
      color: white;
    }

    /* Features Section */
    .features {
      background: var(--light);
      padding: 6rem 2rem;
    }

    .features-header {
      text-align: center;
      max-width: 800px;
      margin: 0 auto 4rem;
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    .feature-card {
      background: white;
      padding: 2.5rem;
      border-radius: 8px;
      border-left: 4px solid var(--accent);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .feature-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
    }

    .feature-card h3 {
      font-family: var(--font-serif);
      font-size: 1.5rem;
      margin-bottom: 1rem;
      color: var(--primary);
    }

    .feature-card p {
      font-size: 0.95rem;
      color: #666;
    }

    /* Testimonials */
    .testimonials {
      background: white;
      padding: 6rem 2rem;
    }

    .testimonials-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    .testimonial {
      background: var(--light);
      padding: 2rem;
      border-radius: 8px;
    }

    .testimonial p {
      font-size: 1rem;
      margin-bottom: 1.5rem;
      font-style: italic;
    }

    .testimonial-author {
      font-weight: 600;
      color: var(--primary);
    }

    .testimonial-role {
      font-size: 0.85rem;
      color: var(--secondary);
    }

    /* CTA Section */
    .cta {
      background: var(--primary);
      color: white;
      padding: 6rem 2rem;
      text-align: center;
    }

    .cta h2 {
      color: white;
      margin-bottom: 2rem;
    }

    .cta p {
      color: rgba(255, 255, 255, 0.9);
      max-width: 600px;
      margin: 0 auto 2rem;
    }

    /* Footer */
    footer {
      background: #1a1a1a;
      color: white;
      padding: 3rem 2rem;
      text-align: center;
    }

    footer p {
      color: rgba(255, 255, 255, 0.7);
      margin-bottom: 0.5rem;
    }

    /* Responsive */
    @media (max-width: 768px) {
      .hero-content {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .nav-links {
        gap: 1rem;
        font-size: 0.9rem;
      }

      h1 { font-size: 2.5rem; }
      h2 { font-size: 1.75rem; }

      .container {
        padding: 2rem 1.5rem;
      }
    }

    /* Animations */
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .feature-card {
      animation: fadeInUp 0.6s ease-out;
    }
  </style>
</head>
<body>
  <header>
    <nav>
      <div class="logo">Prism</div>
      <ul class="nav-links">
        <li><a href="#features">Features</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#cta"><button class="btn">Get Started</button></a></li>
      </ul>
    </nav>
  </header>

  <main>
    <section class="hero">
      <div class="hero-content">
        <div class="hero-text">
          <p class="small-text">Transform Data Into Decisions</p>
          <h1>Analytics Made Thoughtful</h1>
          <p>Prism helps teams discover actionable insights from complex data. Beautiful dashboards. Intelligent queries. Real impact.</p>
          <div>
            <button class="btn">Start Free Trial</button>
            <button class="btn btn-secondary" style="margin-left: 1rem;">Watch Demo</button>
          </div>
        </div>
        <div class="hero-visual">
          Dashboard Preview
        </div>
      </div>
    </section>

    <section id="features" class="features">
      <div class="features-header">
        <h2>Why Teams Choose Prism</h2>
      </div>
      <div class="features-grid">
        <div class="feature-card">
          <h3>Beautiful by Default</h3>
          <p>Dashboards that look thoughtfully designed, not template-generated. Your data deserves to be presented well.</p>
        </div>
        <div class="feature-card">
          <h3>Instant Insights</h3>
          <p>Ask questions in plain language. Prism understands context and returns insights in seconds, not hours.</p>
        </div>
        <div class="feature-card">
          <h3>Collaborate with Confidence</h3>
          <p>Share findings with stakeholders through interactive reports. Everyone sees the same truth from the same source.</p>
        </div>
      </div>
    </section>

    <section id="testimonials" class="testimonials">
      <div class="container-narrow">
        <h2 style="text-align: center; margin-bottom: 3rem;">What Teams Are Saying</h2>
        <div class="testimonials-grid">
          <div class="testimonial">
            <p>"Prism cut our reporting time in half. What used to take a week now takes a day. Our executives love the clarity."</p>
            <div class="testimonial-author">Sarah Chen</div>
            <div class="testimonial-role">VP of Operations, Lumina</div>
          </div>
          <div class="testimonial">
            <p>"The design isn't just nice—it actually helps our team understand data faster. Form follows function perfectly here."</p>
            <div class="testimonial-author">James Rodriguez</div>
            <div class="testimonial-role">Data Lead, Nexus Analytics</div>
          </div>
          <div class="testimonial">
            <p>"We've tried five analytics tools. Prism is the only one our non-technical team members actually use without hand-holding."</p>
            <div class="testimonial-author">Emma Thompson</div>
            <div class="testimonial-role">Chief of Staff, Innovate Labs</div>
          </div>
        </div>
      </div>
    </section>

    <section id="cta" class="cta">
      <h2>Ready to Transform Your Data?</h2>
      <p>Join 200+ teams using Prism to make better decisions. Free forever for small teams.</p>
      <button class="btn" style="background: var(--accent); border: none;">Get Started Free</button>
    </section>
  </main>

  <footer>
    <p>&copy; 2026 Prism Analytics. All rights reserved.</p>
    <p><a href="#" style="color: var(--accent); text-decoration: none;">Privacy</a> | <a href="#" style="color: var(--accent); text-decoration: none;">Terms</a></p>
  </footer>
</body>
</html>
```

**Design Details:**
- Serif headline font (Crimson Text) conveys authority and thoughtfulness
- Earth-tone palette (brown, tan, accent gold) signals premium positioning
- Asymmetrical two-column hero (1fr 1fr grid) with uneven visual weight
- Feature cards include left border accent (not typical centered boxes)
- Subtle animations on hover and scroll maintain polish
- Responsive grid adapts to mobile without visual compromise
- CTA uses accent color for urgency and differentiation

## Edge Cases

- **Video or animated hero:** If the design includes auto-playing video, ensure fallback image for older browsers and mobile data-savers. Control autoplay with muted attribute.
- **Complex forms:** If the site includes multi-step forms, design clear progress indicators, error messages, and validation feedback states.
- **Accessibility for low-vision users:** Test with WCAG AA contrast ratios; include icon + text labels (not icons alone); support keyboard navigation throughout.
- **Performance on slow networks:** Optimize images aggressively; defer non-critical JavaScript; consider lazy-loading below-the-fold sections.
- **Dark mode support:** If needed, define inverted color variables and test contrast ratios in both light and dark modes.
- **International text:** Some languages (CJK, Arabic, RTL) require different spacing and font-loading. Design with text length variability in mind.

Now what? Deploy the frontend to a hosting service (Vercel, Netlify, GitHub Pages), gather user feedback on navigation and clarity, iterate on micro-interactions based on actual user behavior, and integrate with backend systems as needed.
