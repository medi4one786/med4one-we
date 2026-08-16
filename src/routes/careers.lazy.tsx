import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/careers")({
  component: () => <div>Careers Page Placeholder</div>,
});
