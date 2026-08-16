# Blog Implementation Plan

Create a premium, modern Blog ecosystem for Med4One Health Services Pvt Ltd, featuring a search-enabled insights hub and a professional editorial article template.

## User Review Required

> [!IMPORTANT]
> - The initial articles are high-quality placeholders as requested.
> - Images use relevant professional healthcare-tech stock photography.
> - Newsletter subscription is a UI mockup (requires backend integration for real storage).

## Proposed Changes

### Content & Data
- Create `src/lib/blog/types.ts` for blog data structures.
- Create `src/lib/blog/data.ts` with 10 initial high-quality article placeholders covering AI, PharmacyOS, and Business Intelligence.

### Routing & Components
- Implement `src/routes/blog.tsx` and `src/routes/blog.lazy.tsx` for the main insights hub.
- Implement `src/routes/blog.$slug.tsx` and `src/routes/blog.$slug.lazy.tsx` for the professional article template.

### Features
- **Insights Hub**: Hero with search, category filters (Pharmacy Management, AI, etc.), featured article spotlight, and a responsive 3-column article grid.
- **Article Template**: SEO-optimized layout with reading time, table of contents, social sharing, and related article suggestions.
- **Lead Generation**: Newsletter subscription section and final CTA for demo bookings.
- **Design**: Premium navy/teal palette with generous whitespace and subtle Framer Motion animations.

## Technical Details
- **Tech Stack**: TanStack Start v1, React 19, Tailwind CSS v4, Lucide icons.
- **Performance**: Route-level lazy loading for both the hub and article pages.
- **SEO**: Dynamic head metadata for each article (title, description, OG tags).
- **Navigation**: Full integration with existing site navigation (Solutions/Resources dropdowns).
