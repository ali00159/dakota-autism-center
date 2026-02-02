# Dakota Autism Center - Design System PRD
## Product Requirements Document: Visual Design System

**Version:** 1.0  
**Last Updated:** January 27, 2026  
**Status:** Draft for Review

---

## 1. Executive Summary

### 1.1 Purpose
This document defines the complete visual design system for Dakota Autism Center's website, serving as the single source of truth for all design decisions, visual standards, and implementation guidelines.

### 1.2 Design Philosophy
Dakota Autism Center's design embodies:
- **70% Warm & Approachable** / **30% Professional & Clinical**
- **Expert credibility** with **modern sensibility**
- **Natural, organic visual language** rooted in growth and nurturing (tree/leaf brand identity)
- **Clean, accessible design** that reduces cognitive load for stressed parents

### 1.3 Visual References
- **Atlas Autism Health** - Modern, clean aesthetic with strong visual hierarchy
- **St. David's MN** - Warm, relationship-focused, sophisticated visual approach

### 1.4 Core Visual Differentiators
- Organic nature motifs (leaves, branches, growth)
- Sophisticated green palette (forest-inspired, not medical)
- Calm, gentle interactions with creative moments
- Modern without being cold, warm without being childish

---

## 2. Brand Colors

### 2.1 Color Palette

#### Primary Colors

**Primary Green** - `#115C47`  
**RGB:** 17, 92, 71  
**HSL:** 166°, 69%, 21%  
**Usage:** Primary brand color, main CTAs, headers, key UI elements  
**Accessibility:** WCAG AA compliant on white background (4.5:1 minimum contrast)

**Secondary Orange** - `#FB9A31`  
**RGB:** 251, 154, 49  
**HSL:** 31°, 96%, 59%  
**Usage:** Secondary CTAs, highlights, warm accents, attention-drawing elements  
**Accessibility:** Ensure sufficient contrast when used for text

**Tertiary Blue** - `#42AEEB`  
**RGB:** 66, 174, 235  
**HSL:** 202°, 81%, 59%  
**Usage:** Informational elements, links, supportive accents  
**Accessibility:** Use for non-critical UI elements or ensure proper contrast

#### Accent & Supporting Colors

**Accent Pink** - `#EA3D6A`  
**RGB:** 234, 61, 106  
**HSL:** 344°, 81%, 58%  
**Usage:** Success states, celebratory moments, playful touches (use sparingly)

**Supporting Light Blue** - `#D4EAFC`  
**RGB:** 212, 234, 252  
**HSL:** 207°, 87%, 91%  
**Usage:** Backgrounds, cards, subtle sections, light overlays

**Darker Neutral** - `#474044`  
**RGB:** 71, 64, 68  
**HSL:** 320°, 5%, 26%  
**Usage:** Body text, headings, dark UI elements  
**Note:** Slightly warmer than pure black for softer reading experience

**White** - `#FFFFFF`  
**RGB:** 255, 255, 255  
**HSL:** 0°, 0%, 100%  
**Usage:** Backgrounds, text on dark backgrounds, whitespace

### 2.2 Extended Palette (Generated from Core Colors)

#### Green Variations
```
Primary Green Tints (lighter):
- #115C47 (base)
- #1A7359 (10% lighter)
- #2D8A6F (20% lighter)
- #4AA087 (30% lighter)
- #7CBBA4 (50% lighter)
- #B2D8CA (75% lighter)
- #E8F4F0 (95% lighter - backgrounds)

Primary Green Shades (darker):
- #115C47 (base)
- #0E4A38 (20% darker)
- #0A3829 (40% darker)
- #07261A (60% darker)
```

#### Neutral Scale
```
Darker Neutral Variations:
- #474044 (base - body text)
- #6B6569 (lighter - secondary text)
- #8F8B8E (lighter - muted text)
- #B3B0B2 (lighter - disabled text)
- #D7D6D6 (lighter - borders)
- #EBEBEB (lighter - subtle backgrounds)
- #F5F5F5 (lighter - section backgrounds)
- #FAFAFA (lighter - page backgrounds)
- #FFFFFF (white)
```

### 2.3 Semantic Color Mapping

#### User Interface States
```
Success: #115C47 (Primary Green)
Warning: #FB9A31 (Secondary Orange)
Error: #EA3D6A (Accent Pink)
Info: #42AEEB (Tertiary Blue)
Neutral: #474044 (Darker Neutral)
```

#### Interactive Elements
```
Primary CTA Background: #115C47
Primary CTA Hover: #0E4A38 (darker green)
Primary CTA Active: #0A3829 (even darker)
Primary CTA Disabled: #B3B0B2 (neutral gray)

Secondary CTA Background: #FB9A31
Secondary CTA Hover: #E8882B (darker orange)
Secondary CTA Active: #D47725 (even darker)

Tertiary CTA Background: transparent
Tertiary CTA Border: #115C47
Tertiary CTA Hover Background: #E8F4F0 (lightest green)
```

#### Links
```
Link Default: #42AEEB (Tertiary Blue)
Link Hover: #2E9DD6 (darker blue)
Link Visited: #7CBBA4 (light green)
Link Active: #115C47 (Primary Green)
```

#### Backgrounds
```
Page Background: #FFFFFF or #FAFAFA
Section Background (Alternate): #F5F5F5
Card Background: #FFFFFF
Card Background (Highlight): #D4EAFC (Supporting Light Blue)
Hero Background Option 1: #E8F4F0 (lightest green)
Hero Background Option 2: White with subtle gradient overlay
```

### 2.4 Color Usage Guidelines

**Do's:**
- Use Primary Green for most important actions and brand moments
- Use Supporting Light Blue for calm, informational sections
- Use Secondary Orange sparingly for emphasis and warmth
- Use Accent Pink very sparingly for celebration/success moments
- Maintain high contrast for all text (minimum 4.5:1 for body, 3:1 for large text)
- Use extended neutral scale for subtle hierarchies

**Don'ts:**
- Don't use all colors equally (creates visual chaos)
- Don't use Accent Pink for large areas (too energetic)
- Don't put body text directly on Secondary Orange or Accent Pink
- Don't use pure black (#000000) - use Darker Neutral (#474044) instead
- Don't mix too many colors in a single section (limit to 2-3)

---

## 3. Typography

### 3.1 Font Families

#### Primary Font: Poppins
**Purpose:** Headings, display text, emphasis, CTAs  
**Weights to Load:**
- 300 (Light) - for large, airy headlines
- 400 (Regular) - for subheadings
- 500 (Medium) - for emphasis in body text
- 600 (SemiBold) - for most headings
- 700 (Bold) - for hero headlines and strong CTAs

**Why Poppins:**
- Geometric sans-serif with warm, friendly character
- Excellent readability at all sizes
- Modern without being cold
- Slightly rounded terminals create approachability
- Strong visual presence for headings

**Font Source:**
```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
```

#### Secondary Font: Work Sans (Primary Recommendation)
**Purpose:** Body text, captions, UI elements, forms  
**Weights to Load:**
- 400 (Regular) - for body text
- 500 (Medium) - for emphasized body text
- 600 (SemiBold) - for UI labels, form labels

**Why Work Sans:**
- Exceptional legibility at small sizes
- Slightly more neutral than Poppins (creates hierarchy)
- Complements Poppins' geometric warmth
- Professional without being sterile
- Excellent for long-form reading

**Font Source:**
```css
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600&display=swap');
```

#### Secondary Font: Lato (Alternative Option)
**Purpose:** Body text, captions, UI elements, forms  
**Weights to Load:**
- 400 (Regular) - for body text
- 700 (Bold) - for emphasized body text

**Why Lato:**
- Time-tested readability
- Warm, humanist sans-serif
- Pairs well with geometric fonts like Poppins
- Widely supported and optimized

**Font Source:**
```css
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');
```

**RECOMMENDATION:** Use **Work Sans** for slightly better hierarchy and modern feel, but **Lato is a solid choice** if preferred for familiarity.

### 3.2 Type Scale

Following a **modular scale** with a **1.250 (Major Third) ratio** for harmonious proportions.

#### Desktop Type Scale

```
Hero Headline (H0): 60px / 66px line-height (Poppins 700)
H1: 48px / 56px line-height (Poppins 600)
H2: 38px / 46px line-height (Poppins 600)
H3: 30px / 38px line-height (Poppins 600)
H4: 24px / 32px line-height (Poppins 500)
H5: 20px / 28px line-height (Poppins 500)
H6: 18px / 26px line-height (Poppins 500)

Body Large: 18px / 28px line-height (Work Sans 400)
Body Regular: 16px / 26px line-height (Work Sans 400)
Body Small: 14px / 22px line-height (Work Sans 400)

Caption: 13px / 20px line-height (Work Sans 400)
Overline/Label: 12px / 18px line-height (Work Sans 600, uppercase, letter-spacing: 0.5px)

Button Large: 18px (Work Sans 600)
Button Regular: 16px (Work Sans 600)
Button Small: 14px (Work Sans 600)
```

#### Mobile Type Scale (Responsive Adjustments)

```
Hero Headline (H0): 40px / 48px line-height
H1: 36px / 44px line-height
H2: 30px / 38px line-height
H3: 24px / 32px line-height
H4: 20px / 28px line-height
H5: 18px / 26px line-height
H6: 16px / 24px line-height

Body Large: 17px / 27px line-height
Body Regular: 16px / 26px line-height (keep same for readability)
Body Small: 14px / 22px line-height

Caption: 13px / 20px line-height
Overline/Label: 11px / 18px line-height

Button sizes remain same (touch targets matter more than font size)
```

### 3.3 Typography CSS Variables

```css
:root {
  /* Font Families */
  --font-primary: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-secondary: 'Work Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  
  /* Font Sizes - Desktop */
  --font-size-h0: 60px;
  --font-size-h1: 48px;
  --font-size-h2: 38px;
  --font-size-h3: 30px;
  --font-size-h4: 24px;
  --font-size-h5: 20px;
  --font-size-h6: 18px;
  --font-size-body-lg: 18px;
  --font-size-body: 16px;
  --font-size-body-sm: 14px;
  --font-size-caption: 13px;
  --font-size-label: 12px;
  
  /* Line Heights */
  --line-height-h0: 66px;
  --line-height-h1: 56px;
  --line-height-h2: 46px;
  --line-height-h3: 38px;
  --line-height-h4: 32px;
  --line-height-h5: 28px;
  --line-height-h6: 26px;
  --line-height-body-lg: 28px;
  --line-height-body: 26px;
  --line-height-body-sm: 22px;
  --line-height-caption: 20px;
  --line-height-label: 18px;
  
  /* Font Weights */
  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  
  /* Letter Spacing */
  --letter-spacing-tight: -0.5px;
  --letter-spacing-normal: 0;
  --letter-spacing-wide: 0.5px;
  --letter-spacing-wider: 1px;
}

/* Mobile Overrides */
@media (max-width: 768px) {
  :root {
    --font-size-h0: 40px;
    --font-size-h1: 36px;
    --font-size-h2: 30px;
    --font-size-h3: 24px;
    --font-size-h4: 20px;
    --font-size-h5: 18px;
    --font-size-h6: 16px;
    --font-size-body-lg: 17px;
    
    --line-height-h0: 48px;
    --line-height-h1: 44px;
    --line-height-h2: 38px;
    --line-height-h3: 32px;
    --line-height-h4: 28px;
    --line-height-h5: 26px;
    --line-height-h6: 24px;
    --line-height-body-lg: 27px;
  }
}
```

### 3.4 Typography Usage Guidelines

#### Headings
```css
h1, .h1 {
  font-family: var(--font-primary);
  font-size: var(--font-size-h1);
  line-height: var(--line-height-h1);
  font-weight: var(--font-weight-semibold);
  color: var(--color-primary);
  letter-spacing: var(--letter-spacing-tight);
  margin-bottom: 24px;
}

/* Hero headlines get special treatment */
.hero-headline {
  font-family: var(--font-primary);
  font-size: var(--font-size-h0);
  line-height: var(--line-height-h0);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
  letter-spacing: var(--letter-spacing-tight);
}
```

#### Body Text
```css
body, p, .body-text {
  font-family: var(--font-secondary);
  font-size: var(--font-size-body);
  line-height: var(--line-height-body);
  font-weight: var(--font-weight-regular);
  color: var(--color-text-primary);
  margin-bottom: 16px;
}

/* For important paragraphs or intros */
.body-large {
  font-size: var(--font-size-body-lg);
  line-height: var(--line-height-body-lg);
  color: var(--color-text-primary);
}
```

#### Text Hierarchy Rules

**DO:**
- Use H1 only once per page (SEO + accessibility)
- Scale down heading sizes in nested sections (H2 → H3 → H4)
- Use Body Large for introduction paragraphs
- Limit line length to 60-75 characters for optimal readability
- Use consistent spacing after headings (24px for H1-H2, 16px for H3-H6)

**DON'T:**
- Skip heading levels (H1 → H3)
- Use headings for styling (use CSS classes instead)
- Create paragraphs longer than 3-4 lines without breaking
- Use more than 2-3 font sizes on a single screen
- Use all caps for long text (accessibility concern)

### 3.5 Readability Optimization

**Line Length:**
- Desktop: 60-75 characters (optimal)
- Mobile: 35-50 characters

**Paragraph Spacing:**
- Between paragraphs: 16px
- After headings: 16-24px
- Before headings: 32-48px (creates visual breathing room)

**Text Alignment:**
- Body text: Left-aligned (never justify on web)
- Headings: Left-aligned or center (contextual)
- CTAs: Center-aligned when standalone

**Contrast Requirements:**
- Body text minimum: 4.5:1 (WCAG AA)
- Large text (18px+): 3:1 (WCAG AA)
- Target: 7:1 or higher for optimal readability

---

## 4. Spacing & Layout

### 4.1 Spacing Scale

Using an **8px base unit** for consistent, harmonious spacing throughout the design.

```
--space-xs: 4px     (0.5 units)
--space-sm: 8px     (1 unit)
--space-md: 16px    (2 units)
--space-lg: 24px    (3 units)
--space-xl: 32px    (4 units)
--space-2xl: 48px   (6 units)
--space-3xl: 64px   (8 units)
--space-4xl: 96px   (12 units)
--space-5xl: 128px  (16 units)
```

### 4.2 Component Spacing

#### Internal Padding (Inside Components)
```
Card Padding: 24px (--space-lg) or 32px (--space-xl)
Button Padding: 12px 24px (vertical, horizontal)
Button Large Padding: 16px 32px
Button Small Padding: 8px 16px
Form Input Padding: 12px 16px
Section Padding (Vertical): 64px (--space-3xl) on desktop, 48px (--space-2xl) on mobile
Section Padding (Horizontal): 24px (--space-lg) or use container constraints
```

#### External Margins (Between Components)
```
Between Paragraphs: 16px (--space-md)
Between Sections: 96px (--space-4xl) on desktop, 64px (--space-3xl) on mobile
Between Cards: 24px (--space-lg)
Between Form Fields: 16px (--space-md)
Between Related Elements: 8px (--space-sm)
After Headings: 16px (--space-md) for H3-H6, 24px (--space-lg) for H1-H2
Before Headings: 32px-48px (--space-xl to --space-2xl)
```

### 4.3 Grid System

**Container Widths:**
```
Max Content Width: 1280px
Comfortable Reading Width: 720px (for long-form content)
Narrow Width: 640px (for forms, focused content)
Full Width: 100% (for hero sections, backgrounds)
```

**Grid Columns:**
```
Desktop: 12 columns
Tablet: 8 columns
Mobile: 4 columns
Gutter: 24px (--space-lg)
```

**Breakpoints:**
```
Mobile: 320px - 767px
Tablet: 768px - 1023px
Desktop: 1024px - 1439px
Large Desktop: 1440px+

CSS Variables:
--breakpoint-mobile: 767px
--breakpoint-tablet: 1023px
--breakpoint-desktop: 1439px
```

### 4.4 Layout Patterns

#### Hero Section
```
Padding Top: 96px (--space-4xl) on desktop, 64px on mobile
Padding Bottom: 96px (--space-4xl) on desktop, 64px on mobile
Min Height: 500px on desktop, 400px on mobile
Content Max Width: 720px (centered or left-aligned)
```

#### Content Section (Standard)
```
Padding Top: 64px (--space-3xl)
Padding Bottom: 64px (--space-3xl)
Content Max Width: 1280px
Internal Content Width: 720px (for text-heavy sections)
```

#### Card Layout
```
Card Padding: 24px or 32px
Card Border Radius: 12px (--radius-lg)
Card Shadow: 0 2px 8px rgba(71, 64, 68, 0.08)
Card Hover Shadow: 0 4px 16px rgba(71, 64, 68, 0.12)
Gap Between Cards: 24px
```

---

## 5. UI Components

### 5.1 Buttons

#### Primary Button
```css
.btn-primary {
  background-color: #115C47;
  color: #FFFFFF;
  font-family: var(--font-secondary);
  font-size: 16px;
  font-weight: 600;
  padding: 12px 24px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(17, 92, 71, 0.2);
}

.btn-primary:hover {
  background-color: #0E4A38;
  box-shadow: 0 4px 8px rgba(17, 92, 71, 0.3);
  transform: translateY(-2px);
}

.btn-primary:active {
  background-color: #0A3829;
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(17, 92, 71, 0.2);
}

.btn-primary:disabled {
  background-color: #B3B0B2;
  cursor: not-allowed;
  box-shadow: none;
}
```

#### Secondary Button
```css
.btn-secondary {
  background-color: #FB9A31;
  color: #FFFFFF;
  font-family: var(--font-secondary);
  font-size: 16px;
  font-weight: 600;
  padding: 12px 24px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(251, 154, 49, 0.2);
}

.btn-secondary:hover {
  background-color: #E8882B;
  box-shadow: 0 4px 8px rgba(251, 154, 49, 0.3);
  transform: translateY(-2px);
}
```

#### Tertiary Button (Outline)
```css
.btn-tertiary {
  background-color: transparent;
  color: #115C47;
  font-family: var(--font-secondary);
  font-size: 16px;
  font-weight: 600;
  padding: 12px 24px;
  border-radius: 8px;
  border: 2px solid #115C47;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-tertiary:hover {
  background-color: #E8F4F0;
  border-color: #0E4A38;
  color: #0E4A38;
}
```

#### Button Sizes
```css
.btn-large {
  font-size: 18px;
  padding: 16px 32px;
  border-radius: 10px;
}

.btn-small {
  font-size: 14px;
  padding: 8px 16px;
  border-radius: 6px;
}
```

### 5.2 Form Elements

#### Text Input
```css
.input-text {
  font-family: var(--font-secondary);
  font-size: 16px;
  padding: 12px 16px;
  border: 2px solid #D7D6D6;
  border-radius: 8px;
  background-color: #FFFFFF;
  color: #474044;
  transition: all 0.3s ease;
  width: 100%;
}

.input-text:focus {
  border-color: #115C47;
  outline: none;
  box-shadow: 0 0 0 3px rgba(17, 92, 71, 0.1);
}

.input-text::placeholder {
  color: #8F8B8E;
}

.input-text:disabled {
  background-color: #F5F5F5;
  cursor: not-allowed;
}
```

#### Select Dropdown
```css
.select {
  font-family: var(--font-secondary);
  font-size: 16px;
  padding: 12px 16px;
  border: 2px solid #D7D6D6;
  border-radius: 8px;
  background-color: #FFFFFF;
  color: #474044;
  cursor: pointer;
  transition: all 0.3s ease;
  appearance: none;
  background-image: url("data:image/svg+xml,..."); /* Custom dropdown arrow */
  background-repeat: no-repeat;
  background-position: right 12px center;
  padding-right: 40px;
}

.select:focus {
  border-color: #115C47;
  outline: none;
  box-shadow: 0 0 0 3px rgba(17, 92, 71, 0.1);
}
```

#### Checkbox / Radio
```css
.checkbox-wrapper, .radio-wrapper {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}

.checkbox, .radio {
  width: 20px;
  height: 20px;
  border: 2px solid #D7D6D6;
  transition: all 0.3s ease;
}

.checkbox {
  border-radius: 4px;
}

.radio {
  border-radius: 50%;
}

.checkbox:checked, .radio:checked {
  background-color: #115C47;
  border-color: #115C47;
}

.checkbox:focus, .radio:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(17, 92, 71, 0.1);
}
```

#### Form Labels
```css
.form-label {
  font-family: var(--font-secondary);
  font-size: 14px;
  font-weight: 600;
  color: #474044;
  margin-bottom: 8px;
  display: block;
}

.form-label-required::after {
  content: "*";
  color: #EA3D6A;
  margin-left: 4px;
}
```

#### Form Helper Text
```css
.form-helper {
  font-family: var(--font-secondary);
  font-size: 13px;
  color: #6B6569;
  margin-top: 4px;
}

.form-error {
  font-family: var(--font-secondary);
  font-size: 13px;
  color: #EA3D6A;
  margin-top: 4px;
}
```

### 5.3 Cards

#### Standard Card
```css
.card {
  background-color: #FFFFFF;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(71, 64, 68, 0.08);
  transition: all 0.3s ease;
}

.card:hover {
  box-shadow: 0 4px 16px rgba(71, 64, 68, 0.12);
  transform: translateY(-4px);
}
```

#### Highlighted Card (with light blue background)
```css
.card-highlight {
  background-color: #D4EAFC;
  border-radius: 12px;
  padding: 24px;
  border: 2px solid #42AEEB;
}
```

#### Card with Image
```css
.card-image {
  background-color: #FFFFFF;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(71, 64, 68, 0.08);
  transition: all 0.3s ease;
}

.card-image img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-image-content {
  padding: 24px;
}

.card-image:hover {
  box-shadow: 0 4px 16px rgba(71, 64, 68, 0.12);
  transform: translateY(-4px);
}
```

### 5.4 Navigation

#### Header Navigation
```
Height: 80px
Background: #FFFFFF
Box Shadow: 0 2px 4px rgba(71, 64, 68, 0.05)
Sticky: Yes (position: sticky; top: 0; z-index: 100)

Logo Height: 40px
Nav Link Font: Work Sans 500, 16px
Nav Link Color: #474044
Nav Link Hover Color: #115C47
Nav Link Active: Underline 3px, #115C47

CTA Button: Primary button style, placed on right
Mobile: Hamburger menu at 768px breakpoint
```

#### Footer
```
Background: #474044 (dark) or #F5F5F5 (light option)
Text Color: #FFFFFF (if dark) or #474044 (if light)
Padding: 64px vertical, 24px horizontal
Border Top: 1px solid #D7D6D6 (if light version)

Footer Links: 14px, Weight 400
Footer Headings: 16px, Weight 600
Footer Layout: Multi-column on desktop, stacked on mobile
```

### 5.5 Badges & Tags

```css
.badge {
  display: inline-block;
  font-family: var(--font-secondary);
  font-size: 13px;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: 16px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.badge-primary {
  background-color: #E8F4F0;
  color: #115C47;
}

.badge-secondary {
  background-color: #FEF3E8;
  color: #FB9A31;
}

.badge-info {
  background-color: #E5F4FC;
  color: #42AEEB;
}
```

---

## 6. Visual Effects

### 6.1 Border Radius

```
--radius-sm: 4px    (small elements, badges)
--radius-md: 8px    (buttons, inputs, small cards)
--radius-lg: 12px   (cards, larger components)
--radius-xl: 16px   (hero sections, large modals)
--radius-2xl: 24px  (special features)
--radius-full: 9999px (circular elements)
```

### 6.2 Shadows

```css
/* Elevation Levels */
--shadow-sm: 0 1px 2px rgba(71, 64, 68, 0.06);
--shadow-md: 0 2px 8px rgba(71, 64, 68, 0.08);
--shadow-lg: 0 4px 16px rgba(71, 64, 68, 0.12);
--shadow-xl: 0 8px 32px rgba(71, 64, 68, 0.16);

/* Colored Shadows (for CTAs) */
--shadow-primary: 0 4px 12px rgba(17, 92, 71, 0.25);
--shadow-secondary: 0 4px 12px rgba(251, 154, 49, 0.25);

/* Focus Shadow */
--shadow-focus: 0 0 0 3px rgba(17, 92, 71, 0.1);
```

**Usage Guidelines:**
- Cards at rest: `--shadow-md`
- Cards on hover: `--shadow-lg`
- Modals/Dialogs: `--shadow-xl`
- Buttons: `--shadow-sm` at rest, `--shadow-primary` on hover
- Dropdowns: `--shadow-lg`
- Never use more than 3 shadow levels on a single page

### 6.3 Opacity

```
--opacity-disabled: 0.5
--opacity-muted: 0.7
--opacity-overlay: 0.8
--opacity-subtle: 0.1
```

---

## 7. Animation & Interaction

### 7.1 Animation Principles

**Core Philosophy:** Calm and gentle with moments of creative delight

**Key Characteristics:**
- **Ease-based timing** (no harsh linear movements)
- **Subtle but noticeable** (not invisible, not overwhelming)
- **Purpose-driven** (every animation serves a functional or emotional purpose)
- **Performant** (CSS-first, GPU-accelerated properties)

### 7.2 Timing & Easing

```css
/* Duration */
--duration-instant: 150ms   (micro-interactions)
--duration-fast: 250ms      (button hovers, small transitions)
--duration-normal: 350ms    (standard transitions)
--duration-slow: 500ms      (page transitions, modals)
--duration-slower: 700ms    (hero animations, emphasis)

/* Easing Functions */
--ease-in: cubic-bezier(0.4, 0, 1, 1)
--ease-out: cubic-bezier(0, 0, 0.2, 1)
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1)
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55)  /* playful moments */
--ease-smooth: cubic-bezier(0.25, 0.46, 0.45, 0.94)    /* calm, gentle */
```

**Default Transition:**
```css
transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
```

### 7.3 Standard Transitions

#### Button Hover
```css
.button {
  transition: all 0.25s ease-out;
}

.button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(17, 92, 71, 0.25);
}

.button:active {
  transform: translateY(0);
  transition: all 0.15s ease-in;
}
```

#### Card Hover
```css
.card {
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(71, 64, 68, 0.12);
}
```

#### Link Underline
```css
.link {
  position: relative;
  text-decoration: none;
  color: #42AEEB;
}

.link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #42AEEB;
  transition: width 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.link:hover::after {
  width: 100%;
}
```

### 7.4 Page Load Animations

#### Fade In Up (for hero content)
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-content {
  animation: fadeInUp 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* Stagger children for sequential reveal */
.hero-content > * {
  animation: fadeInUp 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.hero-content > *:nth-child(1) { animation-delay: 0ms; }
.hero-content > *:nth-child(2) { animation-delay: 150ms; }
.hero-content > *:nth-child(3) { animation-delay: 300ms; }
.hero-content > *:nth-child(4) { animation-delay: 450ms; }
```

#### Fade In (for general content)
```css
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fade-in {
  animation: fadeIn 0.5s ease-out;
}
```

#### Scale In (for cards, emphasis elements)
```css
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.scale-in {
  animation: scaleIn 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
```

### 7.5 Scroll Animations

**Principle:** Elements fade in and slide up as they enter the viewport

**Implementation Suggestion:** Use Intersection Observer API or lightweight library like AOS (Animate On Scroll)

```css
.scroll-fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.scroll-fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}
```

**Stagger Timing:**
- First element: No delay
- Second element: 100ms delay
- Third element: 200ms delay
- Max stagger: 400ms (prevents waiting too long)

### 7.6 Micro-Interactions

#### Form Input Focus
```css
.input:focus {
  transition: all 0.25s ease-out;
  border-color: #115C47;
  box-shadow: 0 0 0 3px rgba(17, 92, 71, 0.1);
}
```

#### Checkbox Check
```css
.checkbox {
  transition: all 0.2s ease-out;
}

.checkbox:checked {
  background-color: #115C47;
  border-color: #115C47;
  animation: checkboxPop 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

@keyframes checkboxPop {
  0% { transform: scale(1); }
  50% { transform: scale(1.15); }
  100% { transform: scale(1); }
}
```

#### Button Loading State
```css
.button-loading {
  position: relative;
  color: transparent;
}

.button-loading::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 16px;
  height: 16px;
  margin: -8px 0 0 -8px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: #FFFFFF;
  border-radius: 50%;
  animation: buttonSpin 0.6s linear infinite;
}

@keyframes buttonSpin {
  to { transform: rotate(360deg); }
}
```

### 7.7 Modal/Overlay Animations

```css
/* Modal backdrop */
.modal-backdrop {
  animation: fadeIn 0.3s ease-out;
}

/* Modal content */
.modal-content {
  animation: modalSlideUp 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

@keyframes modalSlideUp {
  from {
    opacity: 0;
    transform: translateY(50px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
```

### 7.8 Creative Moments

**Principle:** Reserve playful, creative animations for:
- Success states (form submission confirmation)
- Achievement moments (enrollment complete)
- Delightful surprises (Easter eggs, celebrations)

**Example: Success Celebration**
```css
@keyframes successPulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

.success-icon {
  animation: successPulse 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
```

**Example: Gentle Floating Effect (for hero illustrations)**
```css
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.floating-element {
  animation: float 3s ease-in-out infinite;
}
```

### 7.9 Animation Performance Guidelines

**DO:**
- Animate only `transform` and `opacity` (GPU-accelerated)
- Use `will-change` sparingly and only when needed
- Test animations on mobile devices
- Respect `prefers-reduced-motion` for accessibility

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

**DON'T:**
- Animate `width`, `height`, `left`, `top` (causes layout thrashing)
- Use too many concurrent animations (3-5 max)
- Make animations too fast (<150ms feels jarring)
- Make animations too slow (>700ms feels sluggish)

---

## 8. Accessibility Standards

### 8.1 Color Contrast

**WCAG 2.1 Level AA Requirements:**
- Normal text (< 18px): Minimum 4.5:1 contrast ratio
- Large text (≥ 18px or ≥ 14px bold): Minimum 3:1 contrast ratio
- UI components and graphical objects: Minimum 3:1 contrast ratio

**Dakota Autism Center Standards:**
- Target 7:1 for all body text (exceeds AAA)
- Minimum 4.5:1 for all interactive elements
- Test all color combinations with WebAIM Contrast Checker

**Pre-Approved Combinations:**
```
✓ #474044 on #FFFFFF (10.7:1) - Body text on white
✓ #115C47 on #FFFFFF (7.2:1) - Primary on white
✓ #FFFFFF on #115C47 (7.2:1) - White text on primary
✓ #474044 on #D4EAFC (7.8:1) - Text on light blue
✓ #115C47 on #D4EAFC (5.3:1) - Primary on light blue

⚠ #FB9A31 on #FFFFFF (2.3:1) - FAILS, use for large elements only
⚠ #42AEEB on #FFFFFF (2.7:1) - FAILS for text, OK for large UI elements
```

### 8.2 Keyboard Navigation

**Requirements:**
- All interactive elements must be keyboard accessible
- Visible focus indicators (3px outline, primary color)
- Logical tab order
- Skip navigation link for screen readers
- No keyboard traps

**Focus Styles:**
```css
:focus {
  outline: 3px solid #115C47;
  outline-offset: 2px;
}

/* For custom styled elements */
.custom-focus:focus {
  box-shadow: 0 0 0 3px rgba(17, 92, 71, 0.5);
  outline: none;
}
```

### 8.3 Screen Reader Support

**Requirements:**
- Semantic HTML (proper heading hierarchy)
- Alt text for all images
- ARIA labels for icon-only buttons
- Form labels associated with inputs
- Live regions for dynamic content

**Examples:**
```html
<!-- Icon button -->
<button aria-label="Close modal">
  <svg>...</svg>
</button>

<!-- Form input -->
<label for="email">Email Address</label>
<input id="email" type="email" name="email">

<!-- Live region -->
<div role="status" aria-live="polite">
  Form submitted successfully!
</div>
```

### 8.4 Motion & Animation

**Respect User Preferences:**
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### 8.5 Touch Targets

**Minimum Sizes:**
- Buttons: 44px × 44px minimum (mobile)
- Form inputs: 44px height minimum
- Links: Adequate padding (at least 40px × 40px touch area)

### 8.6 Form Accessibility

**Requirements:**
- Labels for all inputs
- Error messages clearly associated with fields
- Required field indicators
- Clear validation feedback
- Disabled state clearly visible

---

## 9. Responsive Design

### 9.1 Breakpoint Strategy

```css
/* Mobile First Approach */

/* Base styles: Mobile (320px - 767px) */
/* Default styles apply here */

/* Tablet (768px - 1023px) */
@media (min-width: 768px) {
  /* Tablet-specific adjustments */
}

/* Desktop (1024px - 1439px) */
@media (min-width: 1024px) {
  /* Desktop styles */
}

/* Large Desktop (1440px+) */
@media (min-width: 1440px) {
  /* Large screen optimizations */
}
```

### 9.2 Responsive Typography

**Fluid Typography (Optional Enhancement):**
```css
/* Fluid font size that scales between viewport widths */
h1 {
  font-size: clamp(36px, 4vw, 48px);
}

h2 {
  font-size: clamp(30px, 3.5vw, 38px);
}

body {
  font-size: clamp(16px, 1.5vw, 18px);
}
```

### 9.3 Image Handling

**Responsive Images:**
```html
<!-- Use srcset for responsive images -->
<img 
  src="image-medium.jpg"
  srcset="image-small.jpg 480w,
          image-medium.jpg 768w,
          image-large.jpg 1024w"
  sizes="(max-width: 768px) 100vw,
         (max-width: 1024px) 50vw,
         33vw"
  alt="Description"
  loading="lazy"
>
```

**Image Optimization:**
- Use WebP format with JPG fallback
- Compress images (aim for <200KB per image)
- Lazy load images below the fold
- Use aspect ratio to prevent layout shift

```css
.image-container {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
}

.image-container img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

### 9.4 Mobile Optimization

**Key Principles:**
- Touch-friendly targets (44px minimum)
- Simplified navigation (hamburger menu)
- Single column layouts
- Increased font sizes
- Generous padding and spacing
- Fast load times (<3 seconds)

**Mobile-Specific Adjustments:**
```css
@media (max-width: 767px) {
  /* Increase touch targets */
  .button {
    min-height: 44px;
    padding: 12px 20px;
  }
  
  /* Stack cards vertically */
  .card-grid {
    grid-template-columns: 1fr;
  }
  
  /* Simplify navigation */
  .nav-links {
    display: none;
  }
  
  .mobile-menu {
    display: block;
  }
}
```

---

## 10. Performance Guidelines

### 10.1 Loading Performance

**Target Metrics:**
- First Contentful Paint: <1.8s
- Largest Contentful Paint: <2.5s
- Time to Interactive: <3.8s
- Cumulative Layout Shift: <0.1

**Strategies:**
- Compress and optimize images
- Lazy load off-screen images
- Use font-display: swap for web fonts
- Minimize JavaScript
- Use CSS for animations (not JS)
- Implement browser caching

### 10.2 Font Loading

```css
@font-face {
  font-family: 'Poppins';
  font-display: swap; /* Prevents FOIT (Flash of Invisible Text) */
  src: url('poppins.woff2') format('woff2');
}
```

### 10.3 Critical CSS

**Inline critical CSS** (above-the-fold styles) in `<head>`:
- Hero section styles
- Navigation styles
- Typography base styles
- Layout grid

**Defer non-critical CSS** via JavaScript or media query trick

---

## 11. Browser Support

### 11.1 Supported Browsers

**Primary Support:**
- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

**Mobile Support:**
- iOS Safari 13+
- Chrome Mobile (last 2 versions)
- Samsung Internet

**Graceful Degradation:**
- Internet Explorer 11: Basic layout and functionality (no advanced CSS features)

### 11.2 Progressive Enhancement

**Approach:**
1. Core content accessible to all browsers
2. Enhanced experience for modern browsers
3. Feature detection for advanced features

**Example:**
```css
/* Fallback */
.card {
  background: #FFFFFF;
}

/* Modern browsers with backdrop-filter support */
@supports (backdrop-filter: blur(10px)) {
  .card-glass {
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(10px);
  }
}
```

---

## 12. Design Tokens (CSS Variables)

### 12.1 Complete Token System

```css
:root {
  /* ========== COLORS ========== */
  
  /* Brand Colors */
  --color-primary: #115C47;
  --color-primary-hover: #0E4A38;
  --color-primary-active: #0A3829;
  --color-primary-light: #E8F4F0;
  
  --color-secondary: #FB9A31;
  --color-secondary-hover: #E8882B;
  
  --color-tertiary: #42AEEB;
  --color-accent: #EA3D6A;
  --color-supporting: #D4EAFC;
  
  /* Neutral Colors */
  --color-dark: #474044;
  --color-gray-700: #6B6569;
  --color-gray-500: #8F8B8E;
  --color-gray-300: #B3B0B2;
  --color-gray-200: #D7D6D6;
  --color-gray-100: #EBEBEB;
  --color-gray-50: #F5F5F5;
  --color-white: #FFFFFF;
  
  /* Semantic Colors */
  --color-success: #115C47;
  --color-warning: #FB9A31;
  --color-error: #EA3D6A;
  --color-info: #42AEEB;
  
  /* Text Colors */
  --color-text-primary: #474044;
  --color-text-secondary: #6B6569;
  --color-text-muted: #8F8B8E;
  --color-text-disabled: #B3B0B2;
  --color-text-inverse: #FFFFFF;
  
  /* Background Colors */
  --color-bg-primary: #FFFFFF;
  --color-bg-secondary: #F5F5F5;
  --color-bg-tertiary: #EBEBEB;
  --color-bg-highlight: #D4EAFC;
  
  /* Border Colors */
  --color-border-light: #EBEBEB;
  --color-border-medium: #D7D6D6;
  --color-border-dark: #B3B0B2;
  
  /* ========== TYPOGRAPHY ========== */
  
  /* Font Families */
  --font-primary: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-secondary: 'Work Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  
  /* Font Sizes */
  --font-size-h0: 60px;
  --font-size-h1: 48px;
  --font-size-h2: 38px;
  --font-size-h3: 30px;
  --font-size-h4: 24px;
  --font-size-h5: 20px;
  --font-size-h6: 18px;
  --font-size-body-lg: 18px;
  --font-size-body: 16px;
  --font-size-body-sm: 14px;
  --font-size-caption: 13px;
  --font-size-label: 12px;
  
  /* Line Heights */
  --line-height-h0: 66px;
  --line-height-h1: 56px;
  --line-height-h2: 46px;
  --line-height-h3: 38px;
  --line-height-h4: 32px;
  --line-height-h5: 28px;
  --line-height-h6: 26px;
  --line-height-body-lg: 28px;
  --line-height-body: 26px;
  --line-height-body-sm: 22px;
  --line-height-caption: 20px;
  --line-height-label: 18px;
  
  /* Font Weights */
  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  
  /* Letter Spacing */
  --letter-spacing-tight: -0.5px;
  --letter-spacing-normal: 0;
  --letter-spacing-wide: 0.5px;
  --letter-spacing-wider: 1px;
  
  /* ========== SPACING ========== */
  
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;
  --space-3xl: 64px;
  --space-4xl: 96px;
  --space-5xl: 128px;
  
  /* ========== SIZING ========== */
  
  /* Container Widths */
  --container-max: 1280px;
  --container-reading: 720px;
  --container-narrow: 640px;
  
  /* Component Heights */
  --header-height: 80px;
  --button-height: 44px;
  --button-height-lg: 52px;
  --button-height-sm: 36px;
  --input-height: 44px;
  
  /* ========== BORDERS ========== */
  
  --border-width: 1px;
  --border-width-medium: 2px;
  --border-width-thick: 3px;
  
  /* ========== BORDER RADIUS ========== */
  
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-2xl: 24px;
  --radius-full: 9999px;
  
  /* ========== SHADOWS ========== */
  
  --shadow-sm: 0 1px 2px rgba(71, 64, 68, 0.06);
  --shadow-md: 0 2px 8px rgba(71, 64, 68, 0.08);
  --shadow-lg: 0 4px 16px rgba(71, 64, 68, 0.12);
  --shadow-xl: 0 8px 32px rgba(71, 64, 68, 0.16);
  --shadow-primary: 0 4px 12px rgba(17, 92, 71, 0.25);
  --shadow-secondary: 0 4px 12px rgba(251, 154, 49, 0.25);
  --shadow-focus: 0 0 0 3px rgba(17, 92, 71, 0.1);
  
  /* ========== Z-INDEX ========== */
  
  --z-dropdown: 100;
  --z-sticky: 200;
  --z-fixed: 300;
  --z-modal-backdrop: 400;
  --z-modal: 500;
  --z-tooltip: 600;
  
  /* ========== TRANSITIONS ========== */
  
  --duration-instant: 150ms;
  --duration-fast: 250ms;
  --duration-normal: 350ms;
  --duration-slow: 500ms;
  --duration-slower: 700ms;
  
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  --ease-smooth: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  
  /* ========== OPACITY ========== */
  
  --opacity-disabled: 0.5;
  --opacity-muted: 0.7;
  --opacity-overlay: 0.8;
  --opacity-subtle: 0.1;
}

/* Mobile Overrides */
@media (max-width: 767px) {
  :root {
    --font-size-h0: 40px;
    --font-size-h1: 36px;
    --font-size-h2: 30px;
    --font-size-h3: 24px;
    --font-size-h4: 20px;
    --font-size-h5: 18px;
    --font-size-h6: 16px;
    --font-size-body-lg: 17px;
    
    --line-height-h0: 48px;
    --line-height-h1: 44px;
    --line-height-h2: 38px;
    --line-height-h3: 32px;
    --line-height-h4: 28px;
    --line-height-h5: 26px;
    --line-height-h6: 24px;
    --line-height-body-lg: 27px;
    
    --space-3xl: 48px;
    --space-4xl: 64px;
  }
}
```

---

## 13. Component Library Structure

### 13.1 Recommended File Organization

```
/design-system
  /foundations
    colors.css
    typography.css
    spacing.css
    shadows.css
    animations.css
  /components
    buttons.css
    forms.css
    cards.css
    navigation.css
    modals.css
    badges.css
  /layouts
    grid.css
    containers.css
    sections.css
  /utilities
    accessibility.css
    responsive.css
    helpers.css
  design-tokens.css (CSS variables)
  main.css (imports all)
```

### 13.2 Component Documentation Template

For each component, document:
1. **Purpose** - What problem does it solve?
2. **Variants** - What variations exist?
3. **States** - Default, hover, active, disabled, etc.
4. **Accessibility** - ARIA attributes, keyboard support
5. **Usage Guidelines** - When to use, when not to use
6. **Code Example** - HTML/CSS implementation
7. **Visual Example** - Screenshot or Figma embed

---

## 14. Quality Assurance

### 14.1 Design QA Checklist

**Typography:**
- [ ] All text is readable (minimum 4.5:1 contrast)
- [ ] Heading hierarchy is logical (no skipped levels)
- [ ] Line length is comfortable (60-75 characters)
- [ ] Font weights are consistent across similar elements

**Colors:**
- [ ] Brand colors used appropriately
- [ ] Contrast ratios meet WCAG AA standards
- [ ] Color alone is not used to convey information

**Spacing:**
- [ ] Spacing follows 8px grid system
- [ ] Whitespace is used effectively
- [ ] Touch targets are minimum 44px

**Interactions:**
- [ ] All interactive elements have hover states
- [ ] Focus states are clearly visible
- [ ] Loading states are implemented
- [ ] Error states are clear and helpful

**Responsiveness:**
- [ ] Design works on mobile (320px+)
- [ ] Design works on tablet (768px+)
- [ ] Design works on desktop (1024px+)
- [ ] Images are responsive and optimized

**Accessibility:**
- [ ] Keyboard navigation works throughout
- [ ] Screen reader tested
- [ ] Color contrast verified
- [ ] Reduced motion respected

**Performance:**
- [ ] Images optimized (<200KB each)
- [ ] Fonts loaded efficiently
- [ ] Animations use GPU-accelerated properties
- [ ] Page load time <3 seconds

---

## 15. Implementation Priorities

### 15.1 Phase 1: Foundation (Week 1-2)
- Set up design tokens (CSS variables)
- Implement typography system
- Create color palette
- Build spacing utilities
- Set up responsive breakpoints

### 15.2 Phase 2: Core Components (Week 3-4)
- Buttons (all variants)
- Form elements
- Cards
- Navigation (header + mobile menu)
- Footer

### 15.3 Phase 3: Advanced Components (Week 5-6)
- Modals/dialogs
- Tooltips
- Badges/tags
- Accordions/FAQs
- Carousels (if needed)

### 15.4 Phase 4: Polish & QA (Week 7-8)
- Animations and transitions
- Accessibility audit
- Performance optimization
- Cross-browser testing
- Documentation completion

---

## 16. Maintenance & Evolution

### 16.1 Design System Governance

**Review Schedule:**
- Quarterly design system review
- Biannual accessibility audit
- Annual major version updates

**Change Process:**
1. Propose change with rationale
2. Review with stakeholders
3. Document in changelog
4. Update all affected components
5. Communicate to development team

### 16.2 Version Control

Use semantic versioning:
- **Major (1.0.0):** Breaking changes
- **Minor (0.1.0):** New features, backwards compatible
- **Patch (0.0.1):** Bug fixes, minor adjustments

### 16.3 Documentation Updates

Keep documentation current with:
- Component usage examples
- Code snippets
- Visual examples (screenshots or Figma embeds)
- Accessibility notes
- Change history

---

## 17. Tools & Resources

### 17.1 Design Tools
- **Figma** - Primary design tool (recommended)
- **Adobe XD** - Alternative design tool
- **Sketch** - Alternative design tool

### 17.2 Development Tools
- **CSS Variables** - For design tokens
- **PostCSS** - For CSS processing
- **Autoprefixer** - For browser compatibility
- **PurgeCSS** - For removing unused CSS

### 17.3 Testing Tools
- **WebAIM Contrast Checker** - Color contrast
- **WAVE** - Accessibility evaluation
- **Lighthouse** - Performance and accessibility
- **BrowserStack** - Cross-browser testing
- **Axe DevTools** - Accessibility testing

### 17.4 Font Resources
- **Google Fonts** - Poppins, Work Sans, Lato
- **Adobe Fonts** - Alternative font sources

### 17.5 Animation Libraries (Optional)
- **AOS (Animate On Scroll)** - Lightweight scroll animations
- **Framer Motion** - Advanced React animations
- **GSAP** - Professional animation library (if needed)

---

## 18. Success Metrics

### 18.1 Design Effectiveness
- User task completion rate
- Time to complete key actions
- User satisfaction scores
- Bounce rate reduction

### 18.2 Technical Performance
- Page load speed (< 3 seconds)
- Time to interactive (< 3.8 seconds)
- Lighthouse score (> 90)
- Accessibility score (100)

### 18.3 Consistency Metrics
- Component reuse rate
- Design token adherence
- Style deviation count (ideally zero)

---

## 19. Appendix

### 19.1 Color Palette Reference Card

**Quick Reference:**
```
Primary Green: #115C47 (use for CTAs, headings, primary actions)
Secondary Orange: #FB9A31 (use for highlights, secondary CTAs)
Tertiary Blue: #42AEEB (use for links, info)
Accent Pink: #EA3D6A (use sparingly for emphasis)
Supporting Light Blue: #D4EAFC (use for backgrounds, cards)
Dark Neutral: #474044 (use for body text)
White: #FFFFFF (use for backgrounds)
```

### 19.2 Typography Quick Reference

**Headings:** Poppins (600 or 700)
**Body Text:** Work Sans (400) or Lato (400)
**Buttons:** Work Sans (600)
**Labels:** Work Sans (600)

### 19.3 Common Patterns

**Hero Section Pattern:**
```
- Background: White or light green (#E8F4F0)
- Heading: H1 (Poppins 700, Primary Green)
- Subheading: Body Large (Work Sans 400, Dark Neutral)
- CTA: Primary Button
- Padding: 96px vertical (desktop), 64px (mobile)
```

**Content Section Pattern:**
```
- Background: White or light gray (#F5F5F5)
- Heading: H2 (Poppins 600, Primary Green)
- Body: Body Regular (Work Sans 400, Dark Neutral)
- Padding: 64px vertical
- Max Width: 1280px
```

**Card Pattern:**
```
- Background: White
- Border Radius: 12px
- Padding: 24px
- Shadow: 0 2px 8px rgba(71, 64, 68, 0.08)
- Hover Shadow: 0 4px 16px rgba(71, 64, 68, 0.12)
- Hover Transform: translateY(-4px)
```

---

## 20. Sign-Off & Approval

**Design System Owner:** [Name]  
**Approved By:** [Stakeholder Names]  
**Date:** [Date]  
**Next Review:** [Date + 3 months]

---

**END OF DOCUMENT**

*This design system PRD serves as the comprehensive guide for all visual design decisions for Dakota Autism Center's website. All designers and developers should refer to this document to ensure consistency and quality across the entire digital experience.*

*For questions or clarifications, contact: [Design Lead Email]*
