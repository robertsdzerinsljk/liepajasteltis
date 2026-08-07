---
name: Liepājas teltis
description: A soft, garden-inspired system for calm and trustworthy event rental.
colors:
  pavilion-sage: "#8A9271"
  pavilion-sage-hover: "#747C5F"
  header-olive: "#6B7A4A"
  canvas-cream: "#F6F1E7"
  soft-linen: "#EDE4D7"
  pure-surface: "#FFFFFF"
  linen-flax: "#CBB79A"
  driftwood: "#9B8773"
  warm-bark: "#4B4038"
  muted-bark: "#73675D"
  quiet-border: "#DED4C6"
  strong-border: "#B9A78F"
  success: "#6F7B5B"
  warning: "#B4874F"
  error: "#A9534F"
typography:
  display:
    fontFamily: "Georgia, Times New Roman, serif"
    fontSize: "clamp(3.25rem, 5.15vw, 5.05rem)"
    fontWeight: 500
    lineHeight: 0.96
  headline:
    fontFamily: "Georgia, Times New Roman, serif"
    fontSize: "clamp(2.05rem, 4vw, 3.35rem)"
    fontWeight: 500
    lineHeight: 1.05
  title:
    fontFamily: "Inter, Manrope, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.02rem, 1.5vw, 1.2rem)"
    fontWeight: 650
    lineHeight: 1.24
  body:
    fontFamily: "Inter, Manrope, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 500
    lineHeight: 1.65
  label:
    fontFamily: "Inter, Manrope, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 800
    lineHeight: 1.3
    letterSpacing: "0.14em"
rounded:
  subtle: "4px"
  card: "8px"
  control: "12px"
  panel: "18px"
  feature: "30px"
  pill: "999px"
spacing:
  xs: "0.5rem"
  sm: "0.75rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2rem"
  section: "clamp(4rem, 7vw, 6rem)"
components:
  button-primary:
    backgroundColor: "{colors.pavilion-sage}"
    textColor: "{colors.pure-surface}"
    rounded: "{rounded.pill}"
    padding: "0 1.7rem"
    height: "3.15rem"
    typography: "{typography.label}"
  button-primary-hover:
    backgroundColor: "{colors.pavilion-sage-hover}"
    textColor: "{colors.pure-surface}"
    rounded: "{rounded.pill}"
  card:
    backgroundColor: "rgba(255, 255, 255, 0.72)"
    textColor: "{colors.warm-bark}"
    rounded: "{rounded.card}"
    padding: "1rem"
  input:
    backgroundColor: "rgba(255, 255, 255, 0.88)"
    textColor: "{colors.warm-bark}"
    rounded: "{rounded.pill}"
    padding: "0 1rem 0 2.55rem"
    height: "2.75rem"
---

# Design System: Liepājas teltis

## Overview

**Creative North Star: "The Garden Pavilion"**

The system should feel like arriving at a well-prepared outdoor celebration: calm, natural, hospitable, and quietly refined. Warm cream provides daylight and breathing room; muted greens create trust and action; bark and linen tones give the interface the material warmth of wood, canvas, and woven fabric. The atmosphere is soft without becoming fragile and polished without becoming formal.

The interface balances expressive serif display type with practical sans-serif controls and body copy. Imagery, generous spacing, and gently lifted surfaces do the emotional work, while buttons and form controls remain direct and dependable. Decorative dotted fields and diffused gradients may suggest landscape and filtered light, but they remain background texture rather than spectacle.

**Key Characteristics:**

- Warm cream canvases with restrained sage and olive accents.
- Garden-inspired softness grounded by warm brown text.
- Editorial serif moments paired with a highly legible sans-serif utility layer.
- Rounded, tactile controls and lightly elevated cards.
- Calm movement that clarifies hierarchy and interaction.

## Colors

The palette translates canvas, foliage, flax, and weathered wood into a low-chroma interface that stays warm and readable.

### Primary

- **Pavilion Sage:** The default brand accent for icons, emphasis, focus, and primary actions.
- **Deep Pavilion Sage:** The hover and pressed companion that strengthens action without introducing a new hue.
- **Canopy Olive:** The stronger green reserved for navigation, prominent action surfaces, and dense brand moments.

### Secondary

- **Linen Flax:** A warm supporting accent for subtle highlights, borders, and atmospheric gradients.
- **Driftwood:** A muted earthen accent used sparingly in texture and supporting decoration.

### Neutral

- **Canvas Cream:** The dominant page background and source of the system's warmth.
- **Soft Linen:** A gently differentiated neutral for nested surfaces, chips, and hover states.
- **Pure Surface:** White used with transparency for cards, forms, menus, and readable overlays.
- **Warm Bark:** The primary text and dark structural color.
- **Muted Bark:** Secondary copy and metadata.
- **Quiet Border / Strong Border:** Warm divider tones that define surfaces without harsh contrast.

### Named Rules

**The Soft Spectrum Rule.** Stay within warm, low-chroma greens and earth neutrals; hard, flashy, neon, or synthetic high-saturation colors do not belong in this system.

**The Cream Canvas Rule.** Canvas Cream is the default world. Pure white is a lifted material placed on it, not a replacement page background.

## Typography

**Display Font:** Georgia (with Times New Roman and serif fallbacks)  
**Body Font:** Inter (with Manrope, system UI, and sans-serif fallbacks)

**Character:** The serif voice brings occasion, warmth, and hospitality to major messages. The sans-serif voice handles navigation, product facts, forms, and transactional actions with quiet efficiency.

### Hierarchy

- **Display** (500, fluid 3.25–5.05rem, 0.96): Hero and major campaign statements; keep lines short and allow sage emphasis within otherwise bark-colored copy.
- **Headline** (500, fluid 2.05–3.35rem, 1.05): Section introductions and page-level editorial headings.
- **Title** (650, fluid 1.02–1.2rem, 1.24): Product and card names that need compact clarity.
- **Body** (500, around 1rem, 1.65): Explanations and service copy, generally constrained to comfortable reading measures.
- **Label** (800, around 0.72rem, 0.14em tracking, uppercase): Eyebrows, field labels, and compact trust signals.

### Named Rules

**The Occasion and Utility Rule.** Use serif type to evoke the event; use sans-serif type to help the customer organize it.

**The Quiet Label Rule.** Uppercase labels may be tracked and compact, but never louder than the title or action they introduce.

## Layout

Pages use centered content shells between roughly 1100px and 1200px, with fluid inline padding and generous vertical section spacing. Marketing sections alternate between editorial single-column introductions, three-column card grids, and asymmetric two-column compositions. Transactional areas use denser grids but retain generous internal padding.

Desktop card grids commonly use three equal columns. Two-column feature and form layouts collapse near 860–960px; compact navigation and single-column content take over between 640px and 720px. Spacing should scale with `clamp()` where practical, protecting both the open desktop rhythm and the compact mobile reading order.

**The Breathing Room Rule.** Large cream fields are intentional. Do not fill unused space with extra panels, badges, or copy merely to increase density.

## Elevation & Depth

The system is softly layered. Warm ambient shadows lift menus, cards, forms, and floating controls from the cream canvas; warm borders retain structure at rest. Stronger shadows appear on overlays or hover states, while tonal neutrals and translucent white surfaces create most everyday separation.

### Shadow Vocabulary

- **Soft Lift** (`0 8px 24px rgba(75, 64, 56, 0.07)`): Default cards and supporting panels.
- **Strong Lift** (`0 16px 40px rgba(75, 64, 56, 0.11)`): Floating actions, dropdowns, and emphasized surfaces.
- **Focus Halo** (`0 0 0 3px rgba(138, 146, 113, 0.24)`): Accessible keyboard focus paired with a clear outline.

**The Ambient Lift Rule.** Shadows should feel like soft daylight, never glossy black drop shadows or dramatic neon glows.

## Shapes

The recurring form language is softly rounded and tactile. Content cards typically use 8–12px corners; larger controls and panels use 18–30px; action buttons, chips, badges, and icon controls use full pill geometry. Borders are warm and low contrast. Images are clipped inside their parent surface with a slightly smaller radius, reinforcing a layered canvas-and-frame construction.

**The Nested Radius Rule.** Inner media and controls use a radius equal to or slightly smaller than the surface containing them.

## Components

### Buttons

- **Shape:** Fully rounded pill with comfortable horizontal padding and a clear minimum height.
- **Primary:** Sage or canopy olive with white text; uppercase is appropriate for decisive CTAs but not mandatory for small contextual actions.
- **Hover / Focus:** Darken within the same green family and lift by 1–2px; keyboard focus uses a sage outline and halo.
- **Icon controls:** Circular, visually centered, and no smaller than the established 3rem floating-action pattern when fixed to the viewport.

### Chips

- **Style:** Compact pills in Soft Linen or translucent sage, with muted bark copy.
- **State:** Selected filters invert to canopy olive with white text; inactive filters remain quiet and bordered only when structure is needed.

### Cards / Containers

- **Corner Style:** Gentle 8–12px corners for catalog cards; larger feature or form panels may expand to 18–30px.
- **Background:** Translucent or solid white over Canvas Cream.
- **Shadow Strategy:** Soft Lift at rest; a slightly stronger ambient shadow and small upward translation on hover.
- **Border:** A one-pixel warm border prevents white surfaces from dissolving into the background.
- **Internal Padding:** Usually around 1rem for cards and 1.7–2.35rem for feature panels.

### Inputs / Fields

- **Style:** Warm-white fill, warm border, bark text, and pill geometry for single-line fields; multiline fields use an 18px radius.
- **Focus:** Pavilion Sage border with the standard focus halo.
- **Error / Disabled:** Error treatments use muted brick rather than bright red; disabled controls reduce opacity without losing legibility.

### Navigation

The desktop header is a deep olive pavilion canopy with a centered navigation cluster, white brand mark, quiet underlines, and pill-shaped links. Dropdowns return to warm-white surfaces with Soft Linen hover states. Mobile navigation uses the same olive identity in a compact, touch-friendly composition rather than inventing a separate visual language.

### Image Cards

Event and product photography is the primary content signal. Images fill a stable aspect-ratio frame with restrained hover zoom; circular sage badges and concise text blocks provide categorization without obscuring the image.

## Do's and Don'ts

### Do:

- **Do** use Canvas Cream as the environmental background and warm white as a raised material.
- **Do** keep greens muted, natural, and tied to action or brand emphasis.
- **Do** pair editorial serif headlines with practical sans-serif content and controls.
- **Do** use warm borders and ambient shadows together when a surface needs clear separation.
- **Do** preserve generous spacing and let event photography carry visual interest.

### Don't:

- **Don't** introduce neon, electric, or hard flashy colors, even for status or promotional accents.
- **Don't** replace warm bark text with cold black across the interface.
- **Don't** use sharp corners or heavy dark shadows as the default surface language.
- **Don't** overload cream backgrounds with many competing decorative motifs.
- **Don't** make every label uppercase or every surface heavily elevated; hierarchy depends on restraint.
