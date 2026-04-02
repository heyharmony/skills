---
name: "Slack GIF Creator"
description: "Create custom animated GIFs optimized for Slack and messaging platforms. Generate emoji reactions (128x128), message GIFs (480x480), celebratory animations, and visual responses. Trigger on: create a GIF, animated reaction, Slack emoji, celebration animation, custom sticker, GIF for Slack."
dependencies: []
author: "Harmony"
version: "1.0.0"
icon: "sparkles"
cover: ""
screenshots: []
category: "Marketing"
---

## Purpose

Design custom animated GIFs that bring personality, celebration, and visual communication to Slack and other messaging platforms. This skill generates optimized GIFs (128x128 for emoji reactions, 480x480 for message GIFs) with strategic frame design, smooth animations, and cohesive color palettes. Perfect for team culture, custom reactions, status indicators, celebration animations, and visual responses that make messaging more expressive and fun.

## When to Use

- Creating a custom team emoji reaction that captures your company culture or inside jokes
- Designing a celebratory GIF for when milestones are reached or deals are closed
- Building a library of custom status indicators (online, in a meeting, focusing, away)
- Creating fun reaction options for common team responses ("got it", "needs review", "approved")
- Designing animated visual responses that replace text in fast-paced team conversations
- Building visual branding elements (animated logo, mascot, or icon) for team channels
- Creating holiday-themed or seasonal GIFs that reinforce team identity throughout the year

## Instructions

### 1. Define the GIF Purpose and Emotion

- Clarify the intent: Is this a reaction (quick emoji), a celebration, a status indicator, or a branded element?
- Identify the emotional tone: Playful, professional, energetic, calming, witty, celebratory?
- Determine use case: How often will this be used? By who? In which channels?
- Consider audience: Is this for internal team culture or client-facing communication? Adjust tone accordingly.
- Set technical constraints: 128x128px for emoji (file size limit 5MB), 480x480px for message GIFs (typically under 10MB)
- Plan animation duration: Emoji reactions should be snappy (0.8–2 seconds), message GIFs can be longer (2–5 seconds)

### 2. Sketch Animation Concept and Key Frames

- Storyboard the movement: What's the opening state, peak moment, and ending state?
- Identify key frames: How many frames do you need to convey smooth motion? (10–30 fps typical)
- Plan the animation style: Shake, pulse, bounce, rotation, fade, slide, zoom, particle burst, or custom
- Design for loops: If the GIF loops infinitely, ensure first and last frames blend seamlessly
- Consider easing: Linear motion feels mechanical; ease-in/ease-out feels natural; bounce adds personality
- Sketch rough geometry: What basic shapes or elements comprise the visual? (circles, lines, text, icons)

### 3. Select Color Palette

- Choose 4–6 core colors that match team brand or evoke the desired emotion
- Limit palette to 48–128 colors total (GIF limitation; smaller file size)
- Plan for contrast: Ensure animation elements pop against any Slack theme (light or dark)
- Test accessibility: Avoid pure red/green combos for colorblind viewers; use complementary pairs instead
- Design color transitions: If the GIF cycles through colors, plan harmonious gradients or shifts
- Lock the palette: Every color should feel intentional, not random

### 4. Build Animation Frames

- Create base frame: Starting position, colors, typography if needed
- Develop in-between frames: Smooth transitions between key moments (easing handles most of this)
- Adjust timing: Earlier frames might hold longer to build anticipation; climax frames move faster
- Layer elements: Foreground (animated element), mid-ground (supporting shapes), background (context)
- Use solid fills: Avoid gradients or textures that won't compress well in GIF
- Maintain consistency: Line weights, font sizes, spacing should stay constant across frames

### 5. Choose Animation Technique

- **Shake:** Side-to-side or vertical oscillation (energetic, attention-grabbing)
- **Pulse:** Scale or opacity increase/decrease in rhythm (heartbeat effect, alertness)
- **Bounce:** Vertical drop and spring (playful, dynamic)
- **Rotation:** 360° or partial spin (celebratory, transformative)
- **Fade:** Opacity transitions (smooth, subtle)
- **Slide:** Linear movement across canvas (directional, flowing)
- **Zoom:** Scale animation in/out (focus, emphasis)
- **Particle burst:** Exploding elements or confetti (celebratory, impact)
- **Easing functions:** linear (constant), ease_in (slow start), ease_out (slow end), bounce_out (playful), elastic_out (stretch), back_out (overshoot)

### 6. Optimize for GIF Format

- Render at target resolution: 128x128 for emoji, 480x480 for message GIFs
- Export frame sequence: PNG or JPG frames (lossless if possible)
- Color reduction: Convert to indexed color (256 colors max) and dither if needed
- Frame rate: 10–15 FPS for emoji (fast loops), 15–30 FPS for message GIFs
- File size target: Emoji < 500KB, message GIFs < 5MB (Slack limits)
- Optimization: Use tools like ImageOptim or FFmpeg to compress without losing quality
- Dithering: Ordered dithering (Bayer) preserves color accuracy better than diffusion dithering

### 7. Test and Finalize

- Preview in Slack: Upload and test appearance in both light and dark themes
- Check loop behavior: Does it start/end seamlessly? Any jank on the first loop?
- Test on mobile: How does it render at actual size on phones?
- Verify file size: Is it within platform limits? Can it load quickly?
- Get team feedback: Does the animation convey the intended emotion and energy?
- Version control: Save source files (PSD, SVG, or animation project) for future variations

## Output Format

```
GIF Artifact Specification

Metadata:
- Filename: {{name}}.gif
- Dimensions: {{width}}x{{height}} pixels
- Resolution: 72 DPI (screen standard)
- Color mode: Indexed color (8-bit)
- Frame count: {{total_frames}}
- Frame rate: {{fps}} FPS
- Duration: {{duration}} seconds ({{duration}} / {{fps}} = frame count)
- File size: {{size_kb}} KB

Animation Specification:
- Animation type: {{type}} (shake, pulse, bounce, rotation, fade, slide, zoom, burst)
- Easing function: {{easing}} (linear, ease_in, ease_out, bounce_out, elastic_out, back_out)
- Starting state: {{description}}
- Peak moment: {{description}}
- Ending state: {{description}}

Color Palette (Indexed):
- Color 1: {{hex}} (primary use)
- Color 2: {{hex}} (secondary use)
- Color 3: {{hex}} (accent)
- Color 4–6: [additional colors]

Technical Notes:
- Dithering: {{type}} (ordered/diffusion/none)
- Compression: {{method}} (lzw/rle)
- Loop behavior: {{infinite/finite}} (frame 1 connects to frame {{loop_frame}})

Usage:
- Emoji size: 128x128
- Message GIF size: 480x480
- Slack upload: Emoji > Custom Emoji, or Message > Reactions > Custom Emoji
- Alternative platforms: Discord, Teams, Slack threads, direct messages
```

## Example

**Input Scenario:** Create a custom celebration GIF for the engineering team at Velocity when they ship a major feature. The team uses "ship" as their rallying cry. Want an animated sailing ship that waves and comes into view.

**GIF Name:** velocity-ship-celebration.gif

**Animation Concept:**
- Purpose: Celebratory reaction when features ship
- Emotion: Energetic, playful, team pride
- Dimensions: 480x480px (message GIF)
- Duration: 2.5 seconds (21 frames at 8.4 FPS for smooth loops)
- Easing: ease_out for entry, bounce for sail wave

**Key Frames & Animation Breakdown:**

```
Frame 1 (0.0s): Fade-in start
- Ship on left side, 20% opacity
- Sail at 0° rotation
- Water baseline

Frame 5 (0.6s): Slide in + Bounce begins
- Ship slides to center-left (animation: 0-100% x-position)
- Opacity: 20% → 100%
- Sail rotates 5° forward
- Water shows ripple

Frame 10 (1.2s): Peak moment (sail wave)
- Ship centered
- Sail rotates 15° (right), then -10° (left) in bounce motion
- Smaller sail elements (pennants) rotate independently
- Spray particles begin (bounce effect)

Frame 15 (1.8s): Sail wave climax
- Sail reaches full 20° rotation right
- Spray particles explode outward (scale: 1 → 1.3)
- Water ripples expand
- Color shift: hull stays solid, sail gets slight glow

Frame 18 (2.1s): Wind down
- Sail settles to 5° position
- Spray particles fade (opacity: 1 → 0)
- Water ripples fade
- Pause briefly before loop

Frame 21 (2.5s): Return to start
- Ship remains centered but bounces slightly
- Sail at 0° rotation
- Opacity stays 100%
- Loop back to Frame 5 for seamless repeat
```

**Color Palette (6 colors):**
- Deep water blue (CMYK: 100, 80, 0, 20) — #001a4d
- Sail white (CMYK: 0, 0, 0, 0) — #ffffff
- Hull brown (CMYK: 20, 70, 100, 10) — #8b4513
- Accent gold (CMYK: 0, 30, 100, 0) — #ffd700
- Spray cyan (CMYK: 100, 0, 20, 0) — #00d4ff
- Background (transparent for Slack)

**Frame Details (simplified SVG structure):**

```
Frame 1:
<svg viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg">
  <!-- Background water -->
  <rect width="480" height="240" y="240" fill="#001a4d" opacity="0.1"/>

  <!-- Ship hull (left side, fading in) -->
  <ellipse cx="100" cy="380" rx="40" ry="30" fill="#8b4513" opacity="0.2"/>

  <!-- Sail -->
  <polygon points="100,280 120,220 100,240" fill="#ffffff" opacity="0.2" transform="rotate(0 100 240)"/>
</svg>

Frame 10 (Peak):
<svg viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg">
  <!-- Background water with ripples -->
  <circle cx="240" cy="350" r="30" fill="none" stroke="#00d4ff" stroke-width="2" opacity="0.4"/>
  <circle cx="240" cy="350" r="50" fill="none" stroke="#00d4ff" stroke-width="1" opacity="0.2"/>

  <!-- Ship hull (centered) -->
  <ellipse cx="240" cy="380" rx="40" ry="30" fill="#8b4513"/>
  <circle cx="240" cy="320" r="8" fill="#ffd700"/> <!-- cabin detail -->

  <!-- Sail (waving, 15° rotation) -->
  <polygon points="240,280 270,200 240,240" fill="#ffffff" transform="rotate(15 240 240)"/>

  <!-- Pennant (counter-rotation) -->
  <polygon points="265,200 280,195 275,210" fill="#ffd700" transform="rotate(-20 275 200)"/>

  <!-- Spray burst -->
  <circle cx="260" cy="350" r="3" fill="#00d4ff" opacity="0.8"/>
  <circle cx="220" cy="355" r="2" fill="#00d4ff" opacity="0.6"/>
  <circle cx="280" cy="360" r="2.5" fill="#00d4ff" opacity="0.7"/>
</svg>

[Frames 2-4, 6-9, 11-21 interpolated with easing between key frames...]
```

**Export Settings:**
- Dimensions: 480x480px
- Frame rate: 8.4 FPS (21 frames ÷ 2.5 seconds)
- Color reduction: Indexed to 16 colors (ship + water + spray + background)
- Dithering: Ordered Bayer (preserves sail white and water blue)
- Compression: LZW (lossless)
- File size: ~180 KB (well under 5MB limit)

**Testing Checklist:**
- [x] Preview in Slack light theme (white background)
- [x] Preview in Slack dark theme (dark background)
- [x] Loop seamlessly (frame 21 → frame 5)
- [x] Mobile preview on iPhone (test at actual 480x480 size)
- [x] File size under 5MB
- [x] Team feedback: "This makes us want to ship stuff!" ✓

**Usage Instructions:**
- Upload to Slack workspace: Admin > Emoji > Custom Emoji > Upload "velocity-ship-celebration.gif"
- Rename: :ship-celebration:
- Share in #engineering channel with celebration message
- Optional: Create variation for :ship-approved: or :ship-reviewed:

## Edge Cases

- **Platform differences:** Slack, Discord, and Teams have different size/format specs. Design primary for Slack; test on other platforms if needed.
- **Dark vs. light themes:** Test GIF appearance on both light and dark Slack themes. If text or light elements disappear, add outlines or invert colors.
- **Colorblind accessibility:** Avoid pure red/green combinations. Use blue/orange or blue/yellow for maximum visibility to colorblind users.
- **Slow networks:** Large GIFs may load slowly or fail on mobile. Prioritize file size; test on 3G connections.
- **Animation smoothness:** At lower frame rates (8 FPS), motion can look jittery. Test actual frame rate in Slack before finalizing.
- **Animated text:** Avoid text in small GIFs (128x128); it becomes illegible. Use icons or abstract shapes instead for emoji reactions.
- **Repeated use:** If the GIF is used 10+ times daily, ensure it doesn't get visually tiring. Avoid harsh flashing or overly intense animations.

Now what? Upload to Slack, share with your team, gather reactions (literally and figuratively), create variations for related moments, and build a library of custom GIFs that reflect your team's personality.
