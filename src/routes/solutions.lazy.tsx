import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/solutions")({
  component: () => <div>Solutions Page Placeholder</div>,
});
