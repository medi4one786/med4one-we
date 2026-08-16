import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/help")({
  component: () => <div>Help Page Placeholder</div>,
});
