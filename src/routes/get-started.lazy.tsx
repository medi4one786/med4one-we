import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/get-started")({
  component: () => <div>Get Started Page Placeholder</div>,
});
