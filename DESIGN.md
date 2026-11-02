---
name: Prackt
description: A snap-out triplicate form printed in white on deep slate, filled in electric blue.
colors:
  electric: "#2e6bff"
  electric-hover: "#2259e8"
  electric-text: "#6ea2ff"
  error: "#ff7a70"
  ground: "#0f141a"
  ground-deep: "#0a0d12"
  sheet: "#19212b"
  copy: "#1f2a37"
  text: "#f4f6f9"
  text-soft: "#a7b2c0"
  hairline: "rgb(255 255 255 / 0.16)"
  hairline-strong: "rgb(255 255 255 / 0.55)"
typography:
  display:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(2.6rem, 5vw, 4.25rem)"
    fontWeight: 850
    lineHeight: 0.92
    letterSpacing: "-0.025em"
    fontVariation: "'wdth' 72"
  headline:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(2rem, 4.4vw, 3.6rem)"
    fontWeight: 850
    lineHeight: 0.95
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 72"
  title:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1.3rem"
    fontWeight: 750
    lineHeight: 1.2
    fontVariation: "'wdth' 80"
  body:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 650
    letterSpacing: "0.08em"
    fontVariation: "'wdth' 85"
  typed:
    fontFamily: "Courier Prime, ui-monospace, monospace"
    fontSize: "1.08rem"
    fontWeight: 400
    lineHeight: 1.6
  stamp:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "2.6rem"
    fontWeight: 850
    lineHeight: 1
    letterSpacing: "0.06em"
    fontVariation: "'wdth' 70"
rounded:
  none: "0px"
  tick-radio: "50%"
spacing:
  gutter: "clamp(16px, 4vw, 56px)"
  cell: "10px 12px 12px"
  sheet: "clamp(18px, 2.4vw, 32px) clamp(20px, 3vw, 44px)"
  container: "1360px"
components:
  button-primary:
    backgroundColor: "{colors.electric}"
    textColor: "{colors.text}"
    rounded: "{rounded.none}"
    padding: "15px 26px 14px"
  button-primary-hover:
    backgroundColor: "{colors.electric-hover}"
    textColor: "{colors.text}"
  button-nav:
    backgroundColor: "{colors.electric}"
    textColor: "{colors.text}"
    rounded: "{rounded.none}"
    padding: "9px 16px 8px"
  button-nav-hover:
    backgroundColor: "{colors.electric-hover}"
    textColor: "{colors.text}"
  button-link:
    textColor: "{colors.electric-text}"
    padding: "4px 0"
  field:
    textColor: "{colors.electric-text}"
    typography: "{typography.typed}"
    rounded: "{rounded.none}"
    padding: "4px 0 3px"
  sheet-top:
    backgroundColor: "{colors.sheet}"
    rounded: "{rounded.none}"
    padding: "{spacing.sheet}"
  sheet-copy:
    backgroundColor: "{colors.copy}"
    rounded: "{rounded.none}"
    padding: "28px 28px 32px 56px"
  form-cell:
    rounded: "{rounded.none}"
    padding: "{spacing.cell}"
  day-selected:
    backgroundColor: "{colors.electric}"
    textColor: "{colors.text}"
  bar-after:
    backgroundColor: "{colors.electric}"
    rounded: "{rounded.none}"
    height: "22px"
  bar-before:
    rounded: "{rounded.none}"
    height: "22px"
  stamp-received:
    textColor: "{colors.electric-text}"
    typography: "{typography.stamp}"
    padding: "6px 14px 4px"
  label:
    textColor: "{colors.text}"
    typography: "{typography.label}"
---

# Design System: Prackt

## Overview

**Creative North Star: "The Service Card"**

The whole system is a snap-out triplicate form, set in a premium dark theme. The page is a deep slate ground; content sits on raised slate sheets laid on top of it: a top sheet you fill in, and a cooler customer copy fanned slightly behind it. Everything printed on the form (rules, labels, headings, the masthead) is crisp white. Everything a person writes onto the form (field entries, dates, data values, the signature) is electric blue in Courier Prime. Solid electric blue is the brand accent and marks the few things you press or choose. Red appears only when something is wrong.

Density is that of a real form. Information sits in boxes drawn with 1px translucent white hairlines, labels are small condensed caps printed above each box, and headlines are heavy and very narrow so they fit the way type fits on a printed form. Depth comes from sheets lifting off the dark ground: a faint lit top edge and a deep black drop shadow, at slight rotations. Motion is physical and rare: entries transfer onto the copy as you type, and on submit the top sheet tears away along its perforation and the copy is stamped RECEIVED.

Corners are square everywhere. There is no rounded card language, no gradient fill, and no photography; the only illustration is drawn data (the before/after load-time bar chart).

**Key Characteristics:**
- Deep slate ground, two raised slate sheets on top of it.
- White printed type, electric-blue filled-in values; solid electric blue for the brand accent.
- Archivo condensed via its width axis for print; Courier Prime for everything typed.
- Hairline-boxed form grids; square corners throughout.
- Perforations, numbered stubs, slight sheet rotations, deep sheet shadows with a lit top edge.
- Red reserved for errors.

## Colors

A dark printed-stationery palette: slate grounds and sheets, white print, one electric blue in two strengths, one error red.

### Primary
- **Electric Blue** (`electric`): the brand accent as a solid fill: the primary button (form foot and close), its compact masthead twin, the selected day, the "new site" bar series and its key swatch, and the text-selection highlight; also the 12% hover wash on open days and the primary button's glow. Any text it carries is white. **Pressed Electric** (`electric-hover`) is the hover state of both buttons only.
- **Electric Ink** (`electric-text`): electric blue lifted for legibility on slate. Anything written onto the form: input text and caret, the live carbon copy, brief values, day numbers, timeline marks (Day 1 … Week 6), service times, contact values, the signature, the "new site" load values. Also the interaction colour for links, the link button, focus outlines, tick marks and hovered tick borders, and the RECEIVED stamp and sample flag.

### Neutral
- **Deep Slate** (`ground`): the page ground, the masthead, and the colour punched through the top sheet's perforation dots.
- **Deepest Slate** (`ground-deep`): the full-bleed band behind the project timeline.
- **Raised Slate** (`sheet`): the top sheet and the sample brief sheet; the interior of unchecked tick boxes.
- **Copy Slate** (`copy`): the customer copy, the closing section below the "Tear here" line, and the mobile carbon strip.
- **Crisp White** (`text`): all printed type: headlines, labels, body copy, nav, the form number, button text.
- **Soft White** (`text-soft`): secondary type (ledes, hints, captions, label asides, weekday and month labels, the chart key), unchecked tick borders, dashed write-in lines, the "old site" load values, and the close's perforation dots.
- **Hairline** (`hairline`) and **Strong Hairline** (`hairline-strong`): translucent white rules. The 16% hairline draws every form cell and data row; the 55% rule closes sheet heads, tops ranked lists and the timeline, and outlines the hatched "old site" bars.

### Error
- **Error Red** (`error`): the invalid-field underline and the error message beneath it. Nothing else.

### Named Rules
**The White Print, Blue Fill Rule.** Printed things are crisp white Archivo; filled-in things are electric-ink Courier Prime. If a value was written by a person (or stands in for one), it is electric blue. If it would be printed on a blank form, it is white.

**The Electric Fill Rule.** Solid electric blue is reserved for the primary action (one per view, plus its compact masthead twin), the one chosen day, and the "after" series of drawn data. Text on it is always white, and it is never used as a section ground, a border colour or decoration.

**The Error-Only Red Rule.** Red appears only on an invalid field and its message. It never marks state, success, selection or decoration; those belong to electric blue.

## Typography

**Display Font:** Archivo (variable, width axis), fallback system-ui, sans-serif. Loaded via `next/font` as `--font-print`.
**Body Font:** Archivo at normal width.
**Label/Mono Font:** Courier Prime 400/700, fallback ui-monospace, monospace. Loaded as `--font-type`.

**Character:** Archivo, condensed with `font-stretch` and set heavy, reads as the typeface printed on the form; Courier Prime reads as the typewriter that filled it in. The width axis is the hierarchy tool: the bigger and more important the line, the narrower it gets.

### Hierarchy
- **Display** (850, `clamp(2.6rem, 5vw, 4.25rem)`, 0.92, width 72%): the hero headline on the top sheet, capped at 16ch.
- **Headline** (850, `clamp(2rem, 4.4vw, 3.6rem)`, 0.95, width 72%): section headings.
- **Ranked headline** (850, width 70%, 0.95): service names scale by rank, from `clamp(3rem, 8vw, 6rem)` for rank 1 down to `clamp(1.5rem, 2.6vw, 2.1rem)` for rank 5. Size encodes how often the service is asked for.
- **Title** (750–800, 1.05–1.35rem, width 78–80%): sheet firm names, copy titles, the wordmark, timeline steps.
- **Body** (400, 1.0625rem, 1.55): running text in white; ledes at ~1.08rem in soft white, measure 44–72ch.
- **Label** (650, 0.68–0.72rem, 0.06–0.08em, uppercase, width 85%): field labels printed above each boxed cell, `dt` terms, chart row labels, day and month abbreviations.
- **Typed** (Courier Prime 400, 0.95–1.6rem): field entries, carbon copy, brief values, load values (0.95rem), day numbers (1.35rem), timeline marks (1.6rem); the signature is the italic.
- **Stamp** (850, 2.6rem, 0.06em, uppercase, width 70%): the RECEIVED stamp only.

### Named Rules
**The Narrow Is Loud Rule.** Emphasis comes from weight plus condensing on the width axis, never from extra colour. Headlines sit at width 70–72%; labels at 85%; buttons at 82%; body at 100%.

**The Typewriter Rule.** Courier Prime is the typewriter and the numbering machine: filled-in values, chart values, form numbers, the "Tear here" mark. It is never used for headings, labels or buttons.

## Layout

Content lives in a 1360px max-width column with a fluid gutter (`clamp(16px, 4vw, 56px)`). The hero is a two-column sheet set (top sheet 7.4fr, customer copy 4.6fr) where the copy overlaps the top sheet's edge by 28px and drops by `clamp(48px, 7vw, 96px)`. Below 960px the copy moves beneath the top sheet, overlapping it by 10px, and a sticky copy-slate "On your copy" strip with a dashed top rule echoes entries at the bottom of the form. After sending, the copy centres at up to 620px wide.

Inside sheets, form content is a 6-column hairline grid; cells span 2/4, 6, or 3/3 and collapse to full width below 640px. The day strip is 12 equal boxes (6 per row below 640px). Data rows (brief meta, contacts, the timeline, services, the signature block) reuse the same box-and-rule logic: 4, 3, 5 or 2 columns of hairline cells that collapse to 2 or 1.

The bar chart is a definition list: a 6rem label column (4.5rem below 640px) beside a track where each pair of bars stacks 4px apart, rows 14px apart; bar length is the value's share of the scale at 80% of the track, leaving room for the value set just past the bar's end.

Vertical rhythm between sections is generous and fluid (`clamp(72px, 10vw, 140px)` below sections); spacing inside sheets is tight (8–14px between label and value, 18–28px between blocks). Breakpoints: 640, 720, 860, 960px.

## Elevation & Depth

Depth is a sheet lifted off a dark desk. Sheets carry a 1px inset white highlight along the top edge and a deep, soft black drop, and sit at small rotations (top sheet flat, customer copy +1.4deg, brief sheet -0.4deg; mobile copy -0.8deg). Ground tone also layers depth: deepest slate under the project timeline, deep slate for the page, raised slate and copy slate for paper. Nothing inside a sheet is elevated except the primary button, which casts a short electric-blue glow. The masthead button sits flat on the ground.

### Shadow Vocabulary
- **Lifted sheet** (`box-shadow: 0 1px 0 rgb(255 255 255 / 0.06) inset, 0 18px 40px -16px rgb(0 0 0 / 0.7)`): every sheet (top sheet, customer copy, brief sheet).
- **Electric glow** (`box-shadow: 0 8px 20px -8px rgb(46 107 255 / 0.55)`; hover `0 12px 24px -10px rgb(46 107 255 / 0.6)`): the full-size primary button only.

### Named Rules
**The Lit Edge Rule.** Shadows belong to sheets and the full-size primary button. Sheets get the lit top edge plus a black drop; the button gets an electric-blue glow. No other element casts a shadow.

## Shapes

Square corners throughout (0px); the only round shapes are radio ticks and perforation dots. Form structure is drawn in 1px translucent white hairlines (`--rule`); sheet heads close with a 1px strong hairline; write-in fields are a 1px dashed soft-white underline. Sheet edges are perforated with a repeating radial-gradient dot row (dots every 9px, punched in the ground colour on the top sheet's foot; every 12px, 2.4px soft-white dots on the "Tear here" line above the close). Unavailable days are struck through with a single -24deg diagonal line; "before" data is hatched with -45deg lines (2px white at 18% on a 6px repeat) inside a strong-hairline outline. The stamp and the sample flag are bordered boxes rotated -2 to -7deg; the signature rotates -3deg. The wordmark glyph is a stroked line drawing (2.2px round-capped stroke), never filled.

## Components

### Buttons
Printed, solid and square.
- **Shape:** square (0px).
- **Primary:** electric-blue fill, white text, Archivo 750 at width 82%, 1.12rem, padding 15px 26px 14px, electric glow. Used for "Book a Discovery Call" at the form foot and in the close. Full width under 640px when it closes the form.
- **Hover / Focus / Active:** hover deepens to pressed electric, lifts 1px and widens the glow (160ms, ease-out curve); active presses 1px down; focus is the global 2px electric-ink outline at 3px offset.
- **Masthead button:** the compact twin: electric fill, white text, Archivo 750 at width 82%, 0.95rem, padding 9px 16px 8px, no glow, no lift. Hover deepens to pressed electric (160ms). Visible at every width.
- **Link button:** text-only, electric ink, weight 600, underlined at 0.2em offset ("Book another").

### Form cells
- **Style:** fieldsets and labels drawn as hairline boxes in the 6-column grid; white label printed at the top of each box; padding 10px 12px 12px.

### Inputs / Fields
- **Style:** no box; transparent background, Courier Prime 1.1rem in electric ink, 1px dashed soft-white underline, square. Placeholder italic in a mid slate-grey. Caret is electric ink.
- **Focus:** underline becomes 1.5px solid electric ink; no outline.
- **Error:** underline becomes 1.5px solid error red; message below in error red, 0.86rem weight 600.

### Tick boxes
- **Style:** custom 18px square (checkbox) or circle (radio), 1.5px soft-white border on raised slate; minimum row height 32px.
- **State:** checked fills with a 10–12px electric-ink dot or clip-path tick that scales in (160ms); hovering the row turns the border electric ink.

### Day strip
The diary as a row of boxes.
- **Style:** each day a hairline box: weekday and month as soft-white labels, date in Courier Prime 1.35rem electric ink.
- **Hover:** 12% electric-blue wash on open days.
- **Selected:** solid electric-blue fill, white text, inner 1.5px white frame at 70% inset 3px.
- **Booked / weekend:** content at 30% white, struck by a -24deg diagonal at 45% white; `not-allowed` cursor.
- **Focus:** 2px electric-ink outline drawn inside the box.

### Navigation
- **Style:** masthead on the slate ground; wordmark (stroked browser-window SVG, a rectangle with a title bar and two text lines, plus "Prackt", Archivo 800 width 80%); links in white 600 at width 88%, gaining a 1px white underline on hover; the masthead button closes the row. Under 640px the links drop away and only the masthead button remains beside the wordmark.

### Sheets (signature)
- **Top sheet:** raised slate, lifted-sheet shadow, header with firm name ("Prackt · Discovery call") and a numbered stub in white Courier Prime, perforated foot.
- **Customer copy:** copy slate, rotated 1.4deg, a definition list of white label / electric-ink value rows separated by hairlines; values appear at 0.88 opacity, fading in from a 2px blur over 420ms as the visitor types.
- **Sent:** the top sheet tears off (translate -6% / -40px, rotate -5deg, fade, 900ms ease-out), the copy settles to 0deg and centres, and the RECEIVED stamp lands (scale 1.6 to 1, rotated -7deg, 380ms after a 420ms delay, resting at 0.92 opacity).
- **Reduced motion:** tear-off becomes a 200ms fade; transfer, settle and stamp animations are removed.

### Sample brief
A filled-in record on its own raised slate sheet at -0.4deg: a headline with the sample flag, a 4-cell hairline meta row (business, old site, pages planned, launch), the load-time bars, owner notes in Courier Prime, and a 2-cell sign-off with a "Prepared by" italic signature.

### Load bars (signature data)
- **Style:** one row per page: condensed uppercase label, then two 22px square bars. "Before" is the hatched, strong-hairline outlined bar with its value in soft-white Courier; "after" is solid electric with its value in electric ink. Values sit 8px past the bar's end at 0.95rem.
- **Key:** small swatches (14 × 10px) of each bar treatment, soft-white text, aligned to the bar track; caption below in soft white, max 68ch. Hidden text names each value's series for screen readers.

### Stamp and flag
- **Stamp:** 3px electric-ink border box, electric-ink uppercase condensed 850, rotated -7deg, 0.92 opacity. Reserved for a completed action.
- **Sample flag:** Courier Prime in electric ink inside a 1.5px electric-ink box, rotated -2deg; marks synthetic or illustrative content.

## Do's and Don'ts

### Do:
- **Do** put content on slate sheets laid on the deep slate ground, with the lifted-sheet shadow and a rotation of no more than about 1.5deg.
- **Do** draw structure with 1px translucent white hairlines and box every field or data value, with a small condensed uppercase white label printed in its top-left.
- **Do** set every filled-in or recorded value in Courier Prime electric ink, and everything printed in white Archivo.
- **Do** keep solid electric blue for the primary action, the selected day and the "after" data series, with white text whenever it carries text.
- **Do** use the width axis for hierarchy: 70–72% for headlines, 85% for labels.
- **Do** use the single ease-out curve (`cubic-bezier(0.16, 1, 0.3, 1)`) for physical paper motion, and provide a reduced-motion fallback for each animation.
- **Do** use perforated dot edges and numbered stubs where one sheet hands off to the next.

### Don't:
- **Don't** round corners on sheets, cells, fields, bars or buttons; only radio ticks and perforation dots are round.
- **Don't** use red for anything except an invalid field and its error message.
- **Don't** set small electric-blue (`electric`) text directly on slate; use electric ink for blue text and keep the solid blue for fills.
- **Don't** set headings, labels or buttons in Courier Prime, or field values in Archivo.
- **Don't** elevate anything inside a sheet except the primary button.
- **Don't** draw form fields as filled, bordered boxes; a field is a write-in line.
