import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/faq")({
  component: () => <div>Faq Page Placeholder</div>,
});
