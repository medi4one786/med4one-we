import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/help")({
  component: () => <div>Help Page Placeholder</div>,
});
