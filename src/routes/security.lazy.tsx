import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/security")({
  component: () => <div>Security Page Placeholder</div>,
});
