import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/get-started")({
  component: () => <div>Get Started Page Placeholder</div>,
});
