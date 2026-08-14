import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/faq")({
  component: () => <div>FAQ Page Placeholder</div>,
});
