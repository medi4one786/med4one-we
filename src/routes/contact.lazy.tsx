import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/contact")({
  component: () => <div>Contact Page Placeholder</div>,
});
