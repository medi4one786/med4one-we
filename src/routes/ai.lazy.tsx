import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/ai")({
  component: () => <div>AI Page Placeholder</div>,
});
