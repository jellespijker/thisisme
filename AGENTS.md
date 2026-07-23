# AI Developer Guide (AGENTS.md)

Welcome, AI Agent! This repository is **thisisme**, Jelle Spijker's interactive, recruiter-optimized portfolio web application and print-ready CV engine.

To collaborate effectively, prevent build issues, and preserve visual and technical integrity, please follow the guidelines and commands outlined in this guide.

---

## 1. Project Overview

This is a high-density, interactive single-page web app built with **React**, **Vite**, and **TailwindCSS v4** (fully bundled — no runtime CDNs). It serves three primary targets:
- **Web App**: A modern, interactive portfolio featuring glassmorphic designs, expandable timeline details, and responsive sections.
- **Function-profile & industry filtering**: Readers (recruiters) can view the CV "as" a target role — Software Architect, Engineering Development Manager, Senior Developer, Senior AI Developer — and/or filter by industry (Cloud & SaaS, AI & Agents, Firmware & Embedded, Manufacturing & 3D Printing, Maritime & Dredging). Filter state is shareable via compact URL tokens designed to be embedded in exported PDFs and motivation letters — `?maritime`, `?architect`, `?ai-dev&ai&cloud-saas` — with friendly aliases (`?cloud`, `?firmware`, `?dev`, …) and the legacy long form (`?profile=…&industries=…`) also accepted (see `PROFILE_ALIASES`/`INDUSTRY_ALIASES` in `utils/filtering.ts`).
- **A4 PDF/Print CV**: A pixel-perfect print resume via `window.print()`. The **complete** CV prints in full; a **focused** (filtered) CV prints in **max 3 A4 pages** through print caps and condensed layout.

---

## 2. Directory Map

- `/components`: Visual components composing the interface.
  - `FilterBar.tsx`: Sticky profile/industry filter controls, share-link copy, and PDF export button (hidden on print).
  - `Header.tsx`: Glassmorphic header carrying name, contact info, call-to-actions, and the profile-specific Executive Profile + pills.
  - `Timeline.tsx`: Unified chronological core routing both **Professional Experience** (Work) and **Education & Courses** (Educational) timelines. Consumes *derived* (filtered) data; renders out-of-focus entries as slim compact rows so the chronology never shows gaps.
  - `SkillsPanel.tsx`, `ProjectsPanel.tsx`, `ArchitecturePanel.tsx`, `RecommendationsPanel.tsx`: Section panels consuming filtered/print-trimmed lists.
- `constants.ts`: **The single source of truth for all CV facts**, plus presentation tags (see §4.1).
- `profiles.ts`: Function-profile and industry registries — labels, header pills, and per-profile executive summaries (rewordings of facts in `constants.ts`).
- `types.ts`: Data model, including `Tagged` (profiles/industries/priority) and `RoleVariant`.
- `/utils`
  - `filtering.ts`: The filter engine. `deriveCV(cvData, filterState)` produces everything the components render: per-role full/compact mode, profile-variant responsibility text, priority-sorted highlights, and `printHidden` flags implementing the 3-page print budget (`PRINT_CAPS`).
  - `telemetry.ts`: Cookie-less visit beacons to a Home Assistant webhook (see `docs/TELEMETRY.md`). Disabled unless `VITE_TELEMETRY_ENDPOINT` is set at build time.
- `index.css`: Tailwind v4 entry (`@theme` tokens for the Medido palette) and the complete `@media print` system, including the `.cv-focused` condensed print rules.
- `index.html`: Minimal shell (fonts + mount point only — styling and scripts are bundled).
- `docs/TELEMETRY.md`: Home Assistant webhook/automation setup for visit telemetry.

---

## 3. Essential Commands

| Task | Command | Description |
|------|---------|-------------|
| Install Dependencies | `npm install` | Restores lockfile-aligned packages. |
| Run Dev Server | `npm run dev` | Spins up local watcher on port 3000 (or 3001 if occupied). |
| Production Build | `npm run build` | Compiles assets into `/dist` (fails if there are TSX/TS errors). |
| Preview Production | `npm run preview` | Spins up server pointing at compiled production bundles. |

---

## 4. Key Engineering & Design Rules

### 4.1 Facts vs. presentation — NEVER invent facts
- **All CV facts live in `constants.ts`** and must stay accurate. Never add achievements, numbers, or titles that are not verified by Jelle.
- Tagging metadata (`profiles`, `industries`, `priority`) and `variants` are **presentation-only**: they decide when an entry is emphasized, compacted, or reordered — never what is claimed.
- `variants` (per-profile `responsibility` rewordings) and the summaries in `profiles.ts` must describe the **exact same facts** as the base text — different emphasis for a target audience, never new claims.
- Tag semantics: `profiles`/`industries` **absent** → relevant everywhere; **empty array** → relevant nowhere (compacted whenever that filter dimension is active). Lower `priority` = shown earlier / kept longer in print.

### 4.2 Single Source of Truth
- **Never hardcode copy** inside component render trees. Resume text belongs in `constants.ts`; profile-level presentation text (pills, summaries) in `profiles.ts`.

### 4.3 Keep the print stylesheet clean (`index.css`)
- All print formatting lives inside `@media print` in `index.css`.
- The focused (filtered) print layout is scoped under `.cv-focused` and MUST keep every function profile at **≤ 3 A4 pages**. Space budgeting knobs: `PRINT_CAPS` in `utils/filtering.ts` (content caps → `printHidden` flags) and the `.cv-focused` density rules (zoom, paddings) in `index.css`.
- Chromium cannot fragment CSS grids across pages — card grids that must flow are converted to wrapping flex rows on print (see `.recommendations-grid` and the `.cv-focused :has(> .project-card)` rules).
- After touching print styles or caps, verify page counts per profile with headless Chromium (`page.pdf({ format: 'A4', preferCSSPageSize: true })`).

### 4.4 Clean Compilation Mandate
- Always verify that `npm run build` completes with **0 compilation errors** before considering a task completed.

### 4.5 Telemetry etiquette
- Telemetry must remain cookie-less, identifier-free across visits, DNT/GPC-respecting, and fire-and-forget (never blocking or breaking the site). Endpoint configuration is build-time only (`VITE_TELEMETRY_ENDPOINT`).
