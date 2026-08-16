import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/enterprise")({
  component: () => <div>Enterprise Page Placeholder</div>,
});
