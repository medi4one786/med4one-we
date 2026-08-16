# Performance Optimization Plan

A performance audit revealed an LCP of ~74s in a headless preview environment (likely due to slow first-load in development mode) and a performance score of 42. While real-world performance will be better in production, we can optimize several key areas to ensure the best possible experience.

## Proposed Changes

### 1. Optimize Navigation and Above-the-Fold Rendering
- Add `<link rel="preload">` for the logo assets (WebP and PNG) in `src/routes/__root.tsx` to ensure they start loading immediately.
- Update `Navbar` and `Footer` to use explicit `sizes` attributes for the logo `<source>` to help the browser choose the right resolution.

### 2. Layout and Styling
- Replace large blurred background circles in the Hero section (which can be expensive to paint) with more efficient CSS-only gradients or SVGs where possible.
- Ensure all images have explicit width and height to prevent Layout Shift (CLS), though currently CLS is 0.

### 3. Dependency Management
- Review `lucide-react` usage. Ensure we are not importing the entire library.
- Evaluate `framer-motion` usage to ensure animations are not blocking the main thread.

### 4. Technical Details
- **Preloading:** Add `rel="preload"` to the logo WebP.
- **Resource Hints:** Add `dns-prefetch` for external fonts if any are added later.
- **Component Optimization:** Use `React.memo` for static UI components if they re-render unnecessarily.

## Verification Plan
- Run a follow-up Lighthouse audit after changes.
- Verify LCP (Largest Contentful Paint) improvement in the preview.
- Check bundle size impact.
