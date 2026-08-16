# Performance Optimization Plan: Code Splitting & Lazy Loading

Implement route-level code splitting and lazy loading of non-critical components to reduce initial JavaScript bundle size and improve page load speed.

## User Review Required

> [!IMPORTANT]
> This change will convert all existing route components to lazy-loaded modules. While this significantly improves initial load performance, it may cause a brief flash of "loading" (or empty space) when navigating to a new route for the first time if the network is slow.

- Do you have a preferred loading indicator (spinner, progress bar) for route transitions?
- Should any specific routes (e.g., /login) be kept in the main bundle for immediate access?

## Proposed Changes

### 1. Route-Level Code Splitting
- Refactor all content routes in `src/routes/*.tsx` to use TanStack Router's `lazyRouteComponent`.
- Move the UI component logic of each route to a separate `.lazy.tsx` file (e.g., `src/routes/about.lazy.tsx`).
- Keep the `Route` declaration and `head` metadata in the original route files to maintain SEO and fast metadata resolution.

### 2. Component Lazy Loading
- Identify non-critical components that aren't immediately visible (e.g., `WhatsAppButton`, `Toaster`).
- Use `React.lazy` to load these components only after the initial page hydration.
- Wrap lazy components in `<Suspense>` with appropriate fallbacks.

### 3. Optimization Checklist
- [ ] Verify that `createServerFn` usage remains intact and follows the "thin wrapper" rule.
- [ ] Ensure that metadata (titles, descriptions) remains in the non-lazy part of the route for SEO.
- [ ] Validate that navigation remains smooth and handles loading states gracefully.

## Technical Details

- **Framework**: TanStack Start v1 / React 19.
- **Pattern**: `lazyRouteComponent` for routes, `React.lazy` for components.
- **Bundle Strategy**: Split large components like `Navbar`, `Footer`, and page-specific content into separate chunks.
