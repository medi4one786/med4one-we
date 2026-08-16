import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/book-demo")({
  component: () => <div>Book Demo Page Placeholder</div>,
});
