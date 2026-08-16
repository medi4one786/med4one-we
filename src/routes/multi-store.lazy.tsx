import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/multi-store")({
  component: () => <div>Multi Store Page Placeholder</div>,
});
