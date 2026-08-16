# Visual Enhancement Plan - Premium Healthcare Imagery

Add premium, professional photos and realistic software mockups to the Hero and key product sections to elevate the "PharmacyOS" experience.

## Proposed Changes

### 1. Hero Section Enhancements
- Replace the placeholder box in the Homepage Hero (`src/routes/index.lazy.tsx`) with a high-fidelity 4-device mockup (Desktop, Tablet, Laptop, Mobile) showing the Med4One dashboard.
- Update the PharmacyOS Hero (`src/routes/pharmacyos.lazy.tsx`) to feature a professional lifestyle image of a pharmacist using a tablet, blended with a clean software interface.

### 2. Product Section Visuals
- Add realistic dashboard screenshots to the "Run Your Pharmacy" section.
- Incorporate AI-themed visuals (clean data visualizations, node graphs) for the AI intelligence sections.
- Add background subtle patterns or high-quality stock photography (healthcare professionals, modern pharmacy interiors) with low opacity to add depth.

### 3. Image Strategy
- Use high-quality, professional imagery from Unsplash/Pexels for lifestyle shots.
- Use high-fidelity generated UI mockups for software demonstrations.
- Ensure all images are optimized (WebP) for performance.

## Technical Details
- **Components**: `src/routes/index.lazy.tsx`, `src/routes/pharmacyos.lazy.tsx`.
- **Assets**: Will use high-quality external URLs for images to ensure premium quality without bloating the repository with binary assets initially.
- **Styling**: Tailwind CSS for masking, overlays, and glassmorphism effects to blend UI with photography.
