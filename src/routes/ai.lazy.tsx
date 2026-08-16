import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/ai")({
  component: () => <div>Ai Page Placeholder</div>,
});
