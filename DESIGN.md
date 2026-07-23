# Medido Design System (DESIGN.md)

This document specifies the design tokens, color strategies, typography configurations, and layouts powering the **thisisme** portfolio app. It bridges standard brand aesthetics with high-density print-media requirements.

Tokens are defined as Tailwind v4 `@theme` variables in `index.css` (bundled at build time — no runtime CDN).

---

## 1. Visual Identity & Brand Personality

The style is **Modern Premium** with a leaning toward **Glassmorphism** and clean typography. The brand represents a hybrid mechatronics-software identity, utilizing high-contrast, professional colors to establish immediate credibility with technical recruiters and hiring managers.

---

## 2. Color Palette & Tokens

The theme is centered around the official Medido palette:

```javascript
medido: {
  purple: '#380559',          // Standard action background, heavy contrast text, footer background
  peach: '#FFAD7E',           // Primary accent highlight, interactive gradients, selection fill
  'peach-light': '#FFD6C0',   // Sunken wells, lighter highlight backgrounds
  gray: '#F9FAFB',            // Neutral light backgrounds
  
  // Specific category & status indicators:
  teal: '#00A99D',            
  stone: '#8A959B', 
  orange: '#F15A24',
  pink: '#F4B3CE',
}
```

- **Interactive Accent**: Medido Peach is used for hover gradients, selections, and subtle focus cues.
- **Structural Text**: Medido Purple is the default high-readability text color, replacing generic charcoal or black.

---

## 3. Typography

- **Primary Font Family**: **"Plus Jakarta Sans"** (loaded via Google Fonts).
- **Default Sizes**:
  - Main Heading: `text-5xl md:text-6xl font-extrabold tracking-tight`
  - Section Headers: `text-4xl font-extrabold`
  - Cards & Roles: `text-lg font-bold` or `text-base font-medium`

---

## 4. Spacing & Shape Guidelines

- **Radius Standards**:
  - `rounded-3xl` (24px) for major modules, header grids, and panels.
  - `rounded-full` for chips, CTA buttons, and interactive badges.
- **Shadow Strategy**: 
  - Flat/Minimal for standard print elements.
  - Transparent `backdrop-blur-md` coupled with a thin 1px white border (`border-white/30`) for the floating header, projects, and active panels.

---

## 5. Print Media Layout Architecture

Designing for paper/A4 format requires strict constraints to preserve density and prevent trailing splits:

- **Paged Media**: Scoped to A4 sizes with exact page breaks (`margin: 12mm 15mm 15mm 15mm`).
- **Scale Factor**: Scaled gracefully to a density multiplier (`zoom: 0.78`) to keep visual proportions identical to the desktop screen layouts while consolidating vertical height.
- **Selective Visibility**:
  - Non-essential UI (e.g., footers, floating chat modules, action buttons) are hidden via the `.no-print` class.
  - **Email Me, LinkedIn, and GitHub links** are preserved on print, while the **"Download CV"** action button is specifically excluded.
- **Break Controls**:
  - Components like `.project-card`, `.recommendation-card`, and `.volunteering-item` utilize `break-inside: avoid` to keep blocks completely unified.
  - Timeline details (`.experience-item` and `.education-item`) allow graceful splitting (`break-inside: auto`) provided there are at least 4 trailing lines on each page (`orphans: 4; widows: 4`).
- **Header Columns**: The grid wraps into a stacked flex column on print (`flex-direction: column !important`) with compact vertical spacing (`0.35rem`) to conserve critical vertical space on page 1.

---

## 6. Filtering & the Focused (≤3-page) Print Layout

- **Filter bar**: a sticky, glassy control strip (`FilterBar.tsx`) above the hero. Profile chips use the solid-purple active state; industry chips use the peach active state. The bar is `no-print` — it *drives* the print output rather than appearing in it.
- **Compact timeline rows**: entries outside the active filter render as slim one-line rows (reduced icon, `bg-medido-gray/60` well) so the chronology stays honest and gap-free while spending minimal space — on screen and on paper.
- **Focused print mode** (`.cv-focused` on the app root, active whenever a profile or industry filter is set):
  - Global density: `zoom: 0.68` (vs `0.78` for the complete CV).
  - Card details are force-expanded on print (`.card-details`), independent of on-screen collapse state.
  - Print budget caps (see `PRINT_CAPS` in `utils/filtering.ts`): 4/3/2 highlights per role by recency, 4 projects, 4 certifications (as one-liners), 4 skill categories, education details only for the top 2 matching entries, architecture section only on the architect CV, volunteering only on the manager CV, recommendations screen-only.
  - Card grids that must flow across pages are converted to wrapping flex rows on print (Chromium cannot fragment CSS grid).
  - Target and verified budget: **every function profile prints in exactly ≤3 A4 pages**.
