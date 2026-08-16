# Med4One Homepage Redesign Plan

Update the homepage with professional promotional imagery and brand-specific content as requested.

## Proposed Changes

### Assets
- Utilize `med4one-promo.png` (via `src/assets/med4one-promo.png.asset.json`) for the Hero and Product Showcase sections.
- Ensure the official Med4One logo is consistently used in the Navbar, Hero, and Footer without modifications.

### `src/routes/index.lazy.tsx`
- **Hero Section**:
    - Update Headline to: "Powering the Future of Pharmacy & Healthcare".
    - Update Supporting text: "Med4One brings PharmacyOS, AI, Business Intelligence and connected healthcare solutions together in one intelligent ecosystem."
    - Update Buttons: "Explore Med4One" and "Book a Demo".
    - Replace abstract mockup with `med4one-promo.png` using a premium presentation (subtle shadows, depth, clean spacing).
- **Product Showcase**:
    - Create a new section "Everything You Need to Run a Smarter Pharmacy".
    - Implement visual cards for:
        1. Med4One PharmacyOS
        2. Med4One AI
        3. Business Intelligence
        4. Multi-Store Management
        5. Enterprise Solutions
    - Each card will feature a professional product image (cropped/positioned from the promo visual or using specific icon-image hybrids), short description, and "Explore Solution →".

### Responsive Design & Style
- **Layout**: Two-column layout for desktop, balanced 2-column for tablet, and single-column for mobile.
- **Visuals**: Modern typography, generous whitespace, subtle gradients, and rounded cards.
- **Cleanup**: Remove generic sections or placeholders that don't fit the new brand-focused narrative.

## Technical Details
- **Assets**: Import `promoAsset from "@/assets/med4one-promo.png.asset.json"`.
- **Components**: Use `framer-motion` for elegant entry animations.
- **Responsive Utilities**: Standard Tailwind breakpoints (`md`, `lg`) to manage column transitions.
- **Logo**: Maintain existing `med4oneLogo` imports in Navbar and Footer.
