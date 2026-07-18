<!-- BEGIN:nextjs-agent-rules -->
# MIOGIMA HUB - Project Context & Architecture Blueprint (v1)

## 1. Project Overview
MIOGIMA HUB is a high-tier institutional consultancy website designed to position the firm for large-scale procurement and requests for proposals (RFPs) from international donors, UN agencies, the World Bank, and INGOs. The firm operates predominantly across East Africa, focusing on regional development, engineering solutions, and governance capacity.

This initial release (Version 1) is targeted exclusively at company executives for evaluation, feedback, and structural approval. All pages use a clean, modern, grid-aligned corporate design.

---

## 2. Core Business Pillars & Services
The consultancy operates across four foundational technical tracks. The website layout and messaging reflect these four disciplines:
*   **WASH Engineering & Infrastructure:** Water supply systems, sanitation infrastructure, and resource sustainability networks.
*   **Climate Adaptation Specialist:** Climate resilience programming, environmental impacts, and sustainable green initiatives.
*   **TVET Trade Instructor & Curriculum:** Technical and Vocational Education and Training frameworks, vocational curriculum engineering, and socio-economic workforce integration.
*   **MEAL Specialist & Project Management:** Monitoring, Evaluation, Accountability, and Learning pipelines paired with rigorous project risk mitigation frameworks.

---

## 3. Targeted Technical Stack
*   **Framework:** Next.js 15 (App Router)
*   **Language:** TypeScript (Strictly typed interfaces, props, and schemas)
*   **Styling:** Tailwind CSS (Utility-first, responsive grid design)
*   **Icons:** Lucide React (Minimalist, lightweight UI icons)
*   **Rendering Strategy:** Static-first generation (SSG) for hyper-fast, elite executive delivery.

---

## 4. Site Architecture & Directory Mapping
The agent must preserve and respect the following directory structure:

```plaintext
src/
├── app/
│   ├── layout.tsx         # Global Frame (Persistent Header Navigation & Corporate Footer)
│   ├── page.tsx           # Home Page (Identity, Pillars, and Geographic Footprint)
│   ├── about/
│   │   └── page.tsx       # About Us (Institutional Background & Leadership)
│   ├── services/
│   │   └── page.tsx       # Technical Services Page (Deep-dives on the 4 pillars)
│   ├── portfolio/
│   │   └── page.tsx       # Interactive Portfolio Grid (3-in-a-row Case Sheets)
│   ├── join-roster/
│   │   └── page.tsx       # Vetted Expert Intake Portal (Two-step static onboarding)
│   └── contact/
│       └── page.tsx       # Contact Us Page (RFP Submissions & Coordinates)
├── components/
│   ├── global/
│   │   ├── Header.tsx     # Layout Header featuring the "Join Roster" callout
│   │   └── Footer.tsx     # Clean Corporate Footer
│   └── ui/                # Atomic design pieces (Cards, Buttons, Inputs)
<!-- END:nextjs-agent-rules -->
