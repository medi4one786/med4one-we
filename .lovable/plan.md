# Performance Optimization Plan: Code Splitting & Lazy Loading

Implement route-level code splitting and lazy-loading of non-critical components to reduce the initial JavaScript bundle size and improve page load performance for Med4One.

## User Review Required

> [!IMPORTANT]
> This change splits the application into smaller chunks. The initial page load will be faster, and other parts of the app will load on-demand as you navigate.

- **Initial Load**: Only the core layout and the homepage will load initially.
- **On-Demand Loading**: Pages like "About", "AI Solutions", and "Pricing" will load only when a user clicks on them.
- **Component Lazy Loading**: Non-essential features like the floating WhatsApp button and toast notifications will load in the background after the main content.

## Proposed Changes

### Routing Strategy
- Refactor all content routes in `src/routes/*.tsx` to use TanStack Router's `lazyRouteComponent` pattern.
- Move heavy component logic into corresponding `.lazy.tsx` files.
- Keep SEO metadata and route definitions in the primary route files for optimal search engine visibility.

### Component Optimization
- Use `React.lazy` for non-critical UI components:
    - `WhatsAppButton`: Floating interaction element.
    - `Toaster`: Post-action feedback notifications.
- Implement loading boundaries with `Suspense` to ensure a smooth transition while chunks are being fetched.

### Technical Details
- Update `src/routes/index.tsx` to split the massive homepage component.
- Convert 20+ placeholder routes to the lazy pattern to prevent them from bloating the main bundle.
- Ensure `src/routeTree.gen.ts` correctly reflects the lazy route structure.
- Verify that metadata (titles/descriptions) remains in the eager part of the route for SEO crawlers.

## Verification Plan

### Automated Tests
- Run build check to ensure code splitting didn't break route generation.
- Execute Playwright script to verify homepage rendering and navigation to lazy-loaded routes.
- Check browser console for any chunk loading errors.

### Manual Verification
- Inspect Network tab in browser dev tools to confirm that separate JS chunks are created and loaded only when needed.
- Verify that SEO metadata is still present in the document head on initial load.
