---
name: Hammerwell Piano Care
description: A snap-out triplicate service form on a canary carbon-copy ground.
colors:
  canary: "#f2d04b"
  canary-deep: "#e4bf2f"
  sheet: "#fbfbf7"
  pink: "#f3b3c1"
  pink-deep: "#e597a8"
  print: "#1d5a48"
  print-deep: "#154638"
  print-soft: "#4d7c6d"
  sheet-on-print: "#d6e4dd"
  carbon: "#2b35a0"
  stamp: "#c7352a"
  ink: "#17201c"
  ink-soft: "#3c4a43"
typography:
  display:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(2.6rem, 5.4vw, 4.75rem)"
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
    backgroundColor: "{colors.print}"
    textColor: "{colors.sheet}"
    rounded: "{rounded.none}"
    padding: "15px 26px 14px"
  button-primary-hover:
    backgroundColor: "{colors.print-deep}"
    textColor: "{colors.sheet}"
  button-link:
    textColor: "{colors.carbon}"
    padding: "4px 0"
  field:
    textColor: "{colors.carbon}"
    typography: "{typography.typed}"
    rounded: "{rounded.none}"
    padding: "4px 0 3px"
  sheet-top:
    backgroundColor: "{colors.sheet}"
    rounded: "{rounded.none}"
    padding: "{spacing.sheet}"
  sheet-copy:
    backgroundColor: "{colors.pink}"
    rounded: "{rounded.none}"
    padding: "28px 28px 32px 56px"
  form-cell:
    rounded: "{rounded.none}"
    padding: "{spacing.cell}"
  day-selected:
    backgroundColor: "{colors.carbon}"
    textColor: "{colors.sheet}"
  stamp-received:
    textColor: "{colors.stamp}"
    typography: "{typography.stamp}"
    padding: "6px 14px 4px"
  label:
    textColor: "{colors.print}"
    typography: "{typography.label}"
---

# Design System: Hammerwell Piano Care

## Overview

**Creative North Star: "The Service Card"**

The whole system is a snap-out triplicate form. The page itself is the canary carbon copy; content sits on paper sheets laid on top of it: a cool white top sheet you fill in, a pink customer copy fanned slightly behind it. Everything printed on the form (rules, labels, headings, the masthead) is one form-green ink. Everything a person writes onto the form (field entries, dates, data values, the signature) is carbon blue in Courier Prime. Rubber-stamp red marks state and the technician's hand.

Density is that of a real form. Information sits in boxes drawn with 1px hairlines, labels are small condensed caps printed above each box, and headlines are heavy and very narrow so they fit the way type fits on a printed form. Depth comes from paper: sheets cast soft, warm shadows onto the yellow ground and sit at slight rotations. Motion is physical and rare: entries transfer onto the copy as you type, and on submit the top sheet tears away along its perforation and the copy is stamped.

Corners are square everywhere. There is no rounded card language, no gradient, and no photography; the only illustration is drawn data (the 88-key pitch chart).

**Key Characteristics:**
- Canary ground, white and pink paper sheets on top of it.
- Two inks with fixed meanings: form-green is printed, carbon blue is filled in.
- Archivo condensed via its width axis for print; Courier Prime for everything typed.
- Hairline-boxed form grids; square corners throughout.
- Perforations, numbered stubs, slight sheet rotations, soft paper shadows.
- Stamp red reserved for state and hand marks.

## Colors

A printed-stationery palette: one yellow ground, two paper stocks, two inks, one stamp.

### Primary
- **Form-Green Print Ink** (`print`): every printed element: headings, labels, hairline rules, sheet-head underlines, the masthead mark and nav, the primary button fill, and the full-bleed band behind the visit log. **Deep Print Ink** (`print-deep`) is its pressed/hover state on the primary button only. **Faded Print Ink** (`print-soft`) is secondary printed text: hints, day-of-week labels, label asides, dashed field underlines.

### Secondary
- **Carbon Blue** (`carbon`): anything written onto the form: input text, the live carbon copy, record values, the signature, service durations, contact values. Also the interaction colour: links, focus outlines, selection highlight, hovered tick boxes, the selected day fill, and the "pitch left" chart series.

### Tertiary
- **Rubber-Stamp Red** (`stamp`): state and hand marks only: the RECEIVED stamp, the inner frame on a selected day, field and error messages, invalid field underline, the text caret, the "Sample record" flag, and the "pitch found" chart series.

### Neutral
- **Canary Carbon** (`canary`): the page ground, the perforation dot colour on the top sheet, and the headline colour on the green visit-log band. `canary-deep` is its declared darker stock.
- **Top-Sheet White** (`sheet`): the top sheet and record sheet surface; text on carbon and green fills.
- **Customer-Copy Pink** (`pink`): the customer copy sheet, the closing section, and the mobile carbon strip. `pink-deep` is its declared darker stock.
- **Sheet-on-Print** (`sheet-on-print`): body text on the green visit-log band.
- **Ink** (`ink`) and **Soft Ink** (`ink-soft`): running body copy and ledes, captions, footnotes.

### Named Rules
**The Two Inks Rule.** Printed things are form-green; filled-in things are carbon blue in Courier Prime. If a value was written by a person (or stands in for one), it is carbon. If it would be printed on a blank form, it is green.

**The Stamp Rule.** Stamp red never decorates or carries chrome. It appears only where something has happened or been marked: selected, received, invalid, sampled, measured.

## Typography

**Display Font:** Archivo (variable, width axis), fallback system-ui, sans-serif. Loaded via `next/font` as `--font-print`.
**Body Font:** Archivo at normal width.
**Label/Mono Font:** Courier Prime 400/700, fallback ui-monospace, monospace. Loaded as `--font-type`.

**Character:** Archivo, condensed with `font-stretch` and set heavy, reads as the typeface printed on the form; Courier Prime reads as the typewriter that filled it in. The width axis is the hierarchy tool: the bigger and more important the line, the narrower it gets.

### Hierarchy
- **Display** (850, `clamp(2.6rem, 5.4vw, 4.75rem)`, 0.92, width 72%): the hero headline on the top sheet, capped at 12ch.
- **Headline** (850, `clamp(2rem, 4.4vw, 3.6rem)`, 0.95, width 72%): section headings.
- **Ranked headline** (850, width 70%, 0.95): service names scale by rank, from `clamp(3rem, 8vw, 6rem)` for rank 1 down to `clamp(1.5rem, 2.6vw, 2.1rem)` for rank 5. Size encodes how often the service is needed.
- **Title** (750–800, 1.05–1.35rem, width 78–80%): sheet firm names, copy titles, the wordmark, visit-log steps.
- **Body** (400, 1.0625rem, 1.55): running text; ledes at ~1.08rem in `ink-soft`, measure 44–72ch.
- **Label** (650, 0.68–0.72rem, 0.06–0.08em, uppercase, width 85%): field labels printed above each boxed cell, `dt` terms, day and month abbreviations.
- **Typed** (Courier Prime 400, 1.02–1.6rem): field entries, carbon copy, record values, day numbers (1.35rem), visit-log times (1.6rem); the signature is the italic.
- **Stamp** (850, 2.6rem, 0.06em, uppercase, width 70%): the RECEIVED stamp only.

### Named Rules
**The Narrow Is Loud Rule.** Emphasis comes from weight plus condensing on the width axis, never from extra colour. Headlines sit at width 70–72%; labels at 85%; body at 100%.

**The Typewriter Rule.** Courier Prime is only ever a filled-in value. It is never used for headings, labels or buttons.

## Layout

Content lives in a 1360px max-width column with a fluid gutter (`clamp(16px, 4vw, 56px)`). The hero is a two-column sheet set (top sheet 7.4fr, customer copy 4.6fr) where the copy overlaps the top sheet's edge by 28px and drops by `clamp(48px, 7vw, 96px)`. Below 960px the copy moves beneath the top sheet, overlapping it by 10px, and a sticky pink "On your copy" strip echoes entries at the bottom of the form.

Inside sheets, form content is a 6-column hairline grid; cells span 2/4, 6, or 3/3 and collapse to full width below 640px. The day strip is 12 equal boxes (6 per row below 640px). Data rows (record meta, contacts, visit log, services) reuse the same box-and-rule logic: 4, 3 or 5 columns of hairline cells that collapse to 2 or 1.

Vertical rhythm between sections is generous and fluid (`clamp(72px, 10vw, 140px)` below sections); spacing inside sheets is tight (8–14px between label and value, 18–28px between blocks). Breakpoints: 640, 720, 860, 960px.

## Elevation & Depth

Depth is paper on a desk. Sheets cast one soft, warm-tinted shadow onto the canary ground and sit at small rotations (top sheet flat, pink copy +1.4deg, record sheet -0.4deg; mobile copy -0.8deg). Nothing inside a sheet is elevated except the primary button, which casts a short green-tinted shadow. Carbon text carries a faint 0.6px blue halo to read as transferred ink.

### Shadow Vocabulary
- **Paper on canary** (`box-shadow: 0 1px 1px rgb(60 45 0 / 0.12), 0 14px 32px -12px rgb(70 52 0 / 0.35)`): every sheet (top sheet, customer copy, record sheet).
- **Printed button** (`box-shadow: 0 6px 14px -6px rgb(29 90 72 / 0.6)`; hover `0 10px 18px -8px rgb(29 90 72 / 0.7)`): the primary button only.
- **Carbon transfer** (`text-shadow: 0 0 0.6px rgb(43 53 160 / 0.7)`, opacity 0.88): text on the customer copy.

### Named Rules
**The Paper Only Rule.** Shadows belong to sheets of paper and the one pressable button. Shadows are warm (yellow-brown) on the ground and green under the green button; never neutral grey.

## Shapes

Square corners throughout (0px); the only round shapes are radio ticks and perforation dots. Form structure is drawn in 1px solid form-green hairlines (`--rule`); sheet heads close with a 2px green rule; write-in fields are a 1px dashed `print-soft` underline. Sheet edges are perforated with a repeating radial-gradient dot row (9px pitch on the top sheet's foot, 12px pitch with 2.4px dots on the "Tear here" line above the close). Unavailable days are struck through with a single -24deg diagonal line. Stamps and flags are bordered boxes rotated -2 to -7deg.

## Components

### Buttons
Printed, solid and square.
- **Shape:** square (0px).
- **Primary:** form-green fill, sheet-white text, Archivo 750 at width 82%, 1.12rem, padding 15px 26px 14px, printed-button shadow. Full width under 640px when it closes the form.
- **Hover / Focus / Active:** hover deepens to `print-deep`, lifts 1px and widens the shadow (160ms, ease-out curve); active presses 1px down; focus is the global 2px carbon outline at 3px offset.
- **Link button:** text-only, carbon blue, weight 600, underlined at 0.2em offset ("Fill in another").

### Form cells
- **Style:** fieldsets and labels drawn as hairline boxes in the 6-column grid; label printed at the top of each box; padding 10px 12px 12px.

### Inputs / Fields
- **Style:** no box; transparent background, Courier Prime 1.1rem in carbon, 1px dashed `print-soft` underline, square. Placeholder italic in a mid green-grey. Caret is stamp red.
- **Focus:** underline becomes 1.5px solid carbon; no outline.
- **Error:** underline becomes 1.5px solid stamp red; message below in stamp red, 0.86rem weight 600.

### Tick boxes
- **Style:** custom 18px square (checkbox) or circle (radio), 1.5px form-green border on sheet white; minimum row height 32px.
- **State:** checked fills with a 10–12px carbon dot or clip-path tick that scales in (160ms); hovering the row turns the border carbon.

### Day strip
The diary as a row of boxes.
- **Style:** each day a hairline box: weekday and month as labels, date in Courier Prime 1.35rem carbon.
- **Hover:** 6% carbon wash.
- **Selected:** solid carbon fill, sheet-white text, inner 1.5px stamp-red frame inset 3px.
- **Booked / closed:** content at 38% print, struck by a -24deg diagonal; `not-allowed` cursor.
- **Focus:** 2px carbon outline drawn inside the box.

### Navigation
- **Style:** masthead on the canary ground; wordmark (tuning-fork SVG plus "Hammerwell", Archivo 800 width 80%); links in form-green 600 at width 88%, gaining a 1px green underline on hover. Under 640px only the last link (Contact) remains.

### Sheets (signature)
- **Top sheet:** sheet white, paper shadow, header with firm name and a numbered stub, perforated foot.
- **Customer copy:** pink, rotated 1.4deg, a definition list of label/value rows separated by 35% green hairlines; values appear as carbon ink, fading in from a 2px blur over 420ms as the visitor types.
- **Sent:** the top sheet tears off (translate -6% / -40px, rotate -5deg, fade, 900ms ease-out), the copy settles to 0deg and centres, and the RECEIVED stamp lands (scale 1.6 to 1, rotated -7deg, multiply blend, 380ms after a 420ms delay).
- **Reduced motion:** tear-off becomes a 200ms fade; transfer, settle and stamp animations are removed.

### Stamp and flag
- **Stamp:** bordered 3px stamp-red box, uppercase condensed 850, rotated -7deg, multiply blend at 0.92 opacity. Reserved for a completed action.
- **Sample flag:** Courier Prime in stamp red inside a 1.5px stamp-red box, rotated -2deg; marks synthetic or illustrative content.

## Do's and Don'ts

### Do:
- **Do** put content on paper sheets laid on the canary ground, with the paper-on-canary shadow and a rotation of no more than about 1.5deg.
- **Do** draw structure with 1px form-green hairlines and box every field or data value, with a small condensed uppercase label printed in its top-left.
- **Do** set every filled-in or recorded value in Courier Prime carbon blue, and everything printed in Archivo form-green.
- **Do** use the width axis for hierarchy: 70–72% for headlines, 85% for labels.
- **Do** use the single ease-out curve (`cubic-bezier(0.16, 1, 0.3, 1)`) for physical paper motion, and provide a reduced-motion fallback for each animation.
- **Do** use perforated dot edges and numbered stubs where one sheet hands off to the next.

### Don't:
- **Don't** round corners on sheets, cells, fields or buttons; only radio ticks and perforation dots are round.
- **Don't** use stamp red for decoration, navigation or headings; it marks state and hand marks only.
- **Don't** set headings, labels or buttons in Courier Prime, or field values in Archivo.
- **Don't** use neutral grey shadows or elevate anything inside a sheet except the primary button.
- **Don't** draw form fields as filled, bordered boxes; a field is a write-in line.
