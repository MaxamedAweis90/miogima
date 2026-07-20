# MIOGIMA HUB - UI/UX & Page Layout Specifications (v1)

This document dictates layout grids, responsiveness breakpoints, and structural components for the AI agent to implement across all pages.

---

## Global Breakpoint & Layout Standards
*   **Max Width Container:** `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
*   **Typography Scale:** 
    *   Headlines: `text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground`
    *   Subtitles/Body: `text-base sm:text-lg text-muted`
*   **Interactivity:** Smooth transition properties on all structural hover elements (`transition-colors duration-200`).

---

## 1. Global Shell (src/app/layout.tsx)
Holds the uniform corporate shell framework.
*   **Header Navigation Layout:**
    *   `flex items-center justify-between h-20 border-b border-border`
    *   **Desktop:** Left-aligned Logo -> Center row of text links (`About`, `Services`, `Portfolio`, `Join Roster`) -> Right-aligned `Contact Us` button (`bg-accent text-white font-medium px-5 py-2.5 rounded-md hover:bg-accent-hover`).
    *   **Mobile (< 768px):** Hamburger menu icon replacing center links. Right button shifts into drawer layout.
*   **Footer Layout:**
    *   `flex flex-col md:flex-row md:justify-between border-t border-border py-8 text-sm text-muted`
    *   Left side: Copyright notice (© 2026 MIOGIMA). Right side: Inline row for placeholder navigation utilities (`Terms`, `Privacy`).

---

## 2. Home Page (src/app/page.tsx)
Focuses on corporate identity, pillars, and regional field operations.
*   **Hero Section:** 
    *   Split-screen 2-column layout on desktop (`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`).
    *   Left Column: Institutional mission statement + dual CTAs (`Primary: Contact Us`, `Secondary: View Portfolio`).
    *   Right Column: Minimal vector graphic or map indicator highlighting East African footprints (Somalia & Kenya focus).
*   **Pillars Grid:**
    *   `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6`
    *   Renders 4 distinct summary cards highlighting: WASH, Climate, TVET, and MEAL.

---

## 3. About Us Page (src/app/about/page.tsx)
Establishes firm credibility and corporate team hierarchy.
*   **Section 1: The Core Mission:** Single centered column container (`max-w-3xl mx-auto text-center py-16`).
*   **Section 2: Leadership Team Grid:**
    *   `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-12`
    *   Cards features: Profile image placeholder -> Executive name -> Title -> Short expertise summary.

---

## 4. Technical Services Page (src/app/services/page.tsx)
Deep dive breakdown of technical capabilities.
*   **Structural Layout:** Alternating 2-column rows for the 4 core disciplines (`flex flex-col md:flex-row`).
    *   *Row 1 (WASH) & Row 3 (TVET):* Left column description panel, Right column key metrics/bullet panel.
    *   *Row 2 (Climate) & Row 4 (MEAL):* Inverted positions on desktop for high-end visual pacing.
*   **Mobile Responsiveness:** Collapses smoothly down into a clean single-column continuous vertical stack on screens `< 768px`.

---

## 5. Portfolio Grid Page (src/app/portfolio/page.tsx)
Interactive demonstration of institutional projects.
*   **Main Component Layout:**
    *   `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`
    *   Rigid 3-in-a-row layout card design.
*   **Card Element Anatomy:**
    *   Border-enclosed container (`border border-border bg-background rounded-lg overflow-hidden`).
    *   Header image -> Country tag label -> Project title -> Summary data sheet bullet points -> "Read Case Sheet" text action anchor at the bottom.

---

## 6. Join Roster Portal (src/app/join-roster/page.tsx)
Dual-column vetting expert intake intake layout.
*   **Section 1: Value Proposition Banner:**
    *   `grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-border pb-10 mb-12`
    *   Left side: Major headline block. Right side: Descriptive text row clarifying regional screening mechanics.
*   **Section 2: Two-Step Form Board:**
    *   `grid grid-cols-1 lg:grid-cols-2 gap-12 bg-background border border-border rounded-xl p-8`
    *   **Column A (Field Eligibility):** Structured selection block for Primary Skillsets and Years of Sector Experience using custom interactive radio/checkbox lists.
    *   **Column B (Upload Profile):** Strict 2x2 text grid inputs for profile data (Name, Email, Phone, City) followed by twin file attachment drop blocks (`bg-accent text-white`).
*   **Section 3: Bottom Submission Anchor:** Full width text checkbox area spanning both blocks concluding with the primary action button (`w-full bg-accent hover:bg-accent-hover text-white font-semibold py-4 rounded-lg`).

---

## 7. Contact Us Page (src/app/contact/page.tsx)
RFP processing portal.
*   **Layout Scheme:** Balanced split columns (`grid grid-cols-1 lg:grid-cols-5 gap-16`).
    *   **Left Component (2 Columns): Corporate Coordinates:** HQ address, regional operational communication lines, and secure institutional inbox information.
    *   **Right Component (3 Columns): RFP Intake Form:** Secure corporate input fields: Full Name, Institutional Email, Select Service Category dropdown field, text message field, and an interactive submit prompt.