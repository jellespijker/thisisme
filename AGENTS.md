# AI Developer Guide (AGENTS.md)

Welcome, AI Agent! This repository is **thisisme**, Jelle Spijker's interactive, recruiter-optimized portfolio web application and print-ready CV engine.

To collaborate effectively, prevent build issues, and preserve visual and technical integrity, please follow the guidelines and commands outlined in this guide.

---

## 1. Project Overview

This is a high-density, interactive single-page web app built with **React**, **Vite**, and **TailwindCSS**. It serves two primary targets:
- **Web App**: A modern, interactive portfolio featuring glassmorphic designs, expandable timeline details, filtering, and responsive sections.
- **A4 PDF/Print CV**: A pixel-perfect, double-sided high-density print resume generated directly via browser print engines (`window.print()`).

---

## 2. Directory Map

- `/components`: Visual components composing the interface.
  - `Header.tsx`: Glassmorphic header carrying name, contact info, call-to-actions, and the Executive Profile.
  - `Timeline.tsx`: Unified chronological core routing both **Professional Experience** (Work) and **Education & Courses** (Educational) timelines, with auto-expansion features.
  - `SkillsPanel.tsx`: Tech category grid displaying high-agency capabilities.
  - `ProjectsPanel.tsx`: Condensed cards showcasing real-world software products (such as `ArchGraph-AI` and `UltiMaker Digital Factory`).
  - `ArchitecturePanel.tsx`: Key system-level design initiatives (such as `UltiCortex`).
  - `RecommendationsPanel.tsx`: Inline recruiter feedback cards.
- `constants.ts`: The central data registry. Contains all resume copy, metrics, and technology entries under the SaaS Content Production copywriting system.
- `index.html`: Holds the entry mounting point, Tailwind configurations, Google Fonts, and the comprehensive print media query system (`@media print`).

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

### 4.1 Single Source of Truth
- **Never hardcode copy** inside component render trees. All text, achievements, roles, and technical pills must be configured within the dataset inside `constants.ts`.

### 4.2 Keep Print-Media stylesheet clean (`index.html`)
- All print formatting overrides are scoped inside `@media print` inside `index.html`.
- If modifying paddings, visibility, or grid sizes for screens, double-check that the changes do not break page boundaries or overlap elements during PDF prints.
- Utilize standard spacing utilities (`no-print`, `break-inside-avoid`, etc.) to prevent unwanted element fracturing.

### 4.3 Clean Compilation Mandate
- Always verify that `npm run build` completes with **0 compilation errors** before considering a task completed.
