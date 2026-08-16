import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/pricing")({
  component: () => <div>Pricing Page Placeholder</div>,
});
