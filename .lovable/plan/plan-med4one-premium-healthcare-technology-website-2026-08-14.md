# Plan - Med4One Premium Healthcare Technology Website

Build a premium, enterprise-quality healthcare technology website for Med4One. The design will focus on a "serious healthcare technology + AI" aesthetic, moving away from traditional pharmacy styles towards a modern SaaS/Tech platform.

## User Review Required

> [!IMPORTANT]
> - The pricing data (₹999, ₹2,999, ₹7,999) and office address in Koramangala, Bangalore will be used as provided.
> - The AI feature examples (reorder recommendations, etc.) will be showcased as conceptual product visuals.
> - No fake testimonials or partner logos will be added.

- **Logo & Favicon**: Use the provided logo asset and the already created favicon.
- **Color Palette**: Deep navy, premium blue, healthcare teal/green accents, white, and soft gray.
- **Visuals**: Focus on "showing the software" through realistic device mockups (Dashboard, Billing, Inventory, AI assistant).

## Proposed Changes

### 1. Design System & Styling
- [ ] Update `src/styles.css` with a premium color palette (OKLCH).
- [ ] Define custom animation keyframes for scroll reveals and AI-like transitions.
- [ ] Set up typography tokens (bold headings, clean body text).

### 2. Layout & Global Components
- [ ] **__root.tsx**: Update global head metadata (SEO) and add the premium sticky navigation bar with "Book a Demo" and "Get Started" CTAs.
- [ ] **Footer**: Build the large premium multi-column footer with contact details and location.
- [ ] **WhatsApp**: Add the floating WhatsApp button as requested.

### 3. Page Development
- [ ] **index.tsx (Home)**: Implement the 28-section flow including Hero, Who We Serve, Med4One Ecosystem visual, PharmacyOS deep-dive, AI section, and Pricing.
- [ ] **Solutions**: Create `src/routes/solutions.tsx` highlighting PharmacyOS, AI, BI, etc.
- [ ] **Pricing**: Create `src/routes/pricing.tsx` with the pricing calculator and comparison table.
- [ ] **About**: Create `src/routes/about.tsx` for Vision, Mission, and Values.
- [ ] **Contact**: Create `src/routes/contact.tsx` with the enquiry form and office map.
- [ ] **Product Tour**: Create `src/routes/product-tour.tsx` for a visual exploration of the software.

### 4. Interactive & Visual Features
- [ ] **AI Assistant Interface**: A simulated chat interaction showing intelligent business queries.
- [ ] **Pricing Calculator**: A simple interactive component to estimate plans based on store count.
- [ ] **Software Mockups**: Use generated premium visuals and UI cards to "show" the software functionality (Billing POS, Inventory Command Centre).

### 5. SEO & Polish
- [ ] Configure `robots.txt` and `sitemap.xml`.
- [ ] Ensure all images use `loading="lazy"` and proper `alt` text.
- [ ] Verify mobile responsiveness on all major sections.

## Technical Details
- **Framework**: TanStack Start (React 19).
- **Styling**: Tailwind CSS v4.
- **Icons**: Lucide React.
- **Images**: AI-generated premium healthcare/tech visuals via Lovable AI.
- **Assets**: Managed via `lovable-assets`.
