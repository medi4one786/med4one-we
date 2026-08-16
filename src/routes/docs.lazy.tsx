import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/docs")({
  component: () => <div>Docs Page Placeholder</div>,
});
