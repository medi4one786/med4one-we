import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/refund")({
  component: () => <div>Refund Page Placeholder</div>,
});
