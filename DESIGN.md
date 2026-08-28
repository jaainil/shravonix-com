---
name: Shravonix
description: CCTV dealership & integrator site — the Quotation Sheet world; light, technical, rule-separated.
colors:
  paper: "#f6f7f9"
  card: "#ffffff"
  tint: "#eef1f5"
  navy: "#0c1526"
  navy-2: "#16233c"
  ink: "#101b2e"
  ink-mid: "#47536a"
  ink-low: "#5c6a86"
  blue: "#1d59f0"
  blue-deep: "#123a9e"
  sky: "#0779b8"
  green: "#0e7a45"
  amber: "#9a5b0a"
typography:
  display:
    fontFamily: "Archivo Variable, ui-sans-serif, system-ui, sans-serif"
    fontVariation: "wdth 118"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.015em"
    textTransform: "uppercase"
  headline:
    fontFamily: "Archivo Variable, ui-sans-serif, system-ui, sans-serif"
    fontVariation: "wdth 110"
    fontWeight: 750
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Archivo Variable, ui-sans-serif, system-ui, sans-serif"
    fontVariation: "wdth 100"
    fontWeight: 400
    fontSize: "1rem"
    lineHeight: 1.6
  label:
    fontFamily: "JetBrains Mono Variable, ui-monospace, monospace"
    fontWeight: 400
    fontSize: "0.6875rem"
    letterSpacing: "0.05em"
    textTransform: "uppercase"
rounded:
  sm: "3px"
  md: "6px"
  lg: "8px"
spacing:
  section-y: "4rem (lg: 5–6rem)"
  gutter: "1rem (sm: 1.5rem)"
  plate-pad: "1.25rem–2.25rem"
components:
  button-primary:
    backgroundColor: "{colors.blue}"
    textColor: "#ffffff"
    rounded: "{rounded.md}"
    padding: "0.875rem 1.5rem"
  button-primary-hover:
    backgroundColor: "{colors.blue-deep}"
  button-secondary:
    backgroundColor: "{colors.card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "0.875rem 1.5rem"
  plate-card:
    backgroundColor: "{colors.card}"
    rounded: "0"
    padding: "1.25rem–2.25rem"
  input-field:
    backgroundColor: "{colors.tint}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "0.75rem 1rem"
---

# Design System: Shravonix

## Overview

**Creative North Star: "The Quotation Sheet"**

The site reads like the honest technical document a buyer keeps: white paper grounds, figure-numbered product plates, ruled spec tables, stamp chips for process states. Every surface separates by a hairline rule, never a shadow. The personality is a dealership run by engineers — plain-spoken copy, specs before adjectives, one restrained brand blue doing all structural work.

Density is document-like: tight groups inside plates, generous space between sections, more space above a heading than below. The single motion moment is a camera-lens focus pull on the hero hardware; everything else stays still or reveals once, quietly.

**Key Characteristics:**
- Light-only world; paper (#f6f7f9) ground, white plates, tint (#eef1f5) for insets and fields
- Hairline rules as the only separation device — zero box-shadows
- One accent (Shravonix blue #1d59f0) at CTA weight; deep blue (#123a9e) as the quiet text accent
- Mono (JetBrains Mono) exclusively as a data voice: refs, specs, measurements
- Figure plates with `FIG. 01` refs and rotated stamp chips (`Surveyed`, `AMC ready`)
- Authored SVG hardware renders; no stock photography, no surveillance chrome

## Colors

Cool paper neutrals carry the page; a single engineering blue structures it. State colors (green, amber) speak only for verification and notices.

### Primary
- **Shravonix Blue** (#1d59f0): primary buttons and the focus ring. The one high-attention color on any screen.
- **Deep Blue** (#123a9e): text-level accent — section headline highlights, links, icon accents, active nav. Never a fill at CTA weight.
- **Sky** (#0779b8): reserved tertiary accent (footer tagline context). Use sparingly or not at all.

### Tertiary
- **Signal Green** (#0e7a45): checkmarks and cleared/success stamps only.
- **Notice Amber** (#9a5b0a): the catalog "being populated" notice and the 404 stamp. Never decoration.

### Neutral
- **Paper** (#f6f7f9): page ground.
- **Card White** (#ffffff): plates, figure bodies, input resting on paper sections.
- **Tint** (#eef1f5): inset panels, input fields, hover fills, CTA side panels.
- **Ink Navy** (#101b2e): body and heading text.
- **Ink Mid** (#47536a): secondary text, descriptions.
- **Ink Low** (#5c6a86): micro labels, refs, captions — contrast-corrected to ≥4.5:1 on all three grounds.
- **Navy Panel** (#0c1526): footer only, with paper text and lifted blue tints (#8fb4ff, #b9c4d8, #8b98b3).
- **Seam** (rgba(12,21,38,0.10), strong 0.20): hairline borders everywhere.

### Named Rules
**The One Blue Rule.** Fill-weight blue appears only on the primary action. Everything else blue is text or a 1px line.
**The Rule-Not-Shadow Rule.** Surfaces never separate by shadow; a 1px seam or a tint step is the only depth.

## Typography

**Display Font:** Archivo Variable (width axis), fallback system sans
**Body Font:** Archivo Variable at standard width
**Label/Mono Font:** JetBrains Mono Variable

**Character:** One grotesque family at three widths reads like industrial signage refined for paper; mono is reserved for what a datasheet would set in a machine voice.

### Hierarchy
- **Display** (800, wdth 118, uppercase, clamp ≈2.5rem→4.2rem, lh 0.98, ls −0.015em): page H1s and the closing CTA statement only.
- **Headline** (750, wdth 110, 1.875–2.25rem): section H2s.
- **Title** (750, wdth 110, 1–1.5rem): card and plate titles.
- **Body** (400, 0.875–1.125rem, lh 1.6–1.75, 65–68ch measure): prose and descriptions.
- **Label** (mono, 0.6875rem, ls 0.05em, uppercase, tabular numerals): figure refs, spec keys, tier chips, data strips.

### Named Rules
**The Data-Voice Rule.** Mono never styles prose; if it is not a measurement, reference, or timestamp, it is not mono.

## Layout

Single centered container, `max-w-7xl`, gutters 1rem (1.5rem from `sm`). Sections run `py-14` to `py-24` by breakpoint; more space above a heading than below. Content grids are 12-column with asymmetric splits (7/5 for services, 5/7 for hero and why). Repetitive content renders as hairline-divided rule groups (`.seams`) or `gap-px`-on-seam grids — cells share one border instead of stacking boxes. The coverage strip under the hero is a full-width rule-topped band of mono chips. Mobile collapses every asymmetric grid to a single column; the process rail reflows 4 → 2 → 1 with its numbering intact.

## Elevation & Depth

Flat by doctrine. No box-shadows anywhere; depth is expressed by ground steps (paper → card → tint) and hairline seams. Hover elevation is a border-color shift to blue or a tint fill — never a lift.

### Named Rules
**The Flat-By-Default Rule.** Resting state is flat; state changes recolor edges, they do not raise surfaces.

## Shapes

Sharp document corners on plates and figure bodies (0 radius). Interactive controls round gently: 6px on buttons and inputs, 8px on grouped rule-grids, 3px on chips and stamps. Stamp chips rotate −1.2deg — the one hand-stamped gesture. Plate corners carry two 4px "bolt" dots at top-left/right on feature cards. Icons are a single authored set: 24px, 1.6 stroke, round caps, no fills.

## Components

### Buttons
- **Shape:** 6px radius, no borders on primary.
- **Primary:** Shravonix Blue fill, white text, 0.875rem/1.5rem padding, semibold 14px; trailing arrow icon nudges 2px on hover; hover deepens to #123a9e.
- **Secondary:** card-white fill, seam border, ink text; hover shifts border to blue and text to deep blue. WhatsApp variants swap the hover shift to signal green.

### Chips
- **Style:** mono uppercase 11px, seam border, 3px radius, 2px/6px padding; ink-low text on card.
- **State:** static refs (no selected state in this system); chips never wrap (`white-space: nowrap`).

### Cards / Containers
- **Corner Style:** square, 1px seam border ("plate").
- **Background:** card white; tint for inset side panels.
- **Shadow Strategy:** none — see Elevation.
- **Internal Padding:** 1.25rem (product tiles) to 2.25rem (feature plates).
- **Hover:** border → blue; optional tint fill.

### Figure Plate (signature)
Document chrome for product art: a header strip (`FIG. 01` in bold mono + caption in ink-low mono, optional green stamp right) over a card-white render body. Square corners, seam border.

### Stamp
1.5px currentColor border, 3px radius, mono uppercase, −1.2deg rotation. Green for cleared/positive, amber for notices.

### Inputs / Fields
- **Style:** tint fill, seam-strong border, 6px radius, 1rem padding, ink text.
- **Focus:** border → blue; global `:focus-visible` is a 2px blue outline offset 2px. Caret is blue.
- **Error:** amber text with `role="alert"`; validation is plain-language.

### Navigation
Sticky 64px bar on blurred paper, hairline separators between links, active link in deep blue, blue primary button parked at the right. Mobile: hamburger → full-width menu sheet on card, aria-expanded tracked, Escape closes and returns focus.

### Footer
The one navy surface (#0c1526): four-column directory, mono micro-heads, blue-tint link hover to white. It anchors every page's close.

## Do's and Don'ts

### Do:
- **Do** separate surfaces with 1px seams or tint steps; keep plates square.
- **Do** keep mono for refs, specs, chips and data strips only.
- **Do** reserve fill-blue for the primary action; use deep blue for text accents.
- **Do** use authored SVG renders for hardware; label illustrative art honestly.
- **Do** verify quiet text against ≥4.5:1 on paper, card and tint.

### Don't:
- **Don't** introduce shadows, glow, neon accents or dark mode — the world is paper and rules.
- **Don't** use surveillance costume chrome (REC dots, LIVE badges, CAM-ID chips, timecode clocks); the owner explicitly rejected it.
- **Don't** set prose in uppercase or mono, and never place an eyebrow/kicker above a heading.
- **Don't** fabricate clients, counts, testimonials or brand names; unproven claims ship as marked placeholders only.
