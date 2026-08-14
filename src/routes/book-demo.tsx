import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/book-demo")({
  component: () => <div>Book Demo Page Placeholder</div>,
});
