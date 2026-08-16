import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/bi")({
  component: () => <div>Bi Page Placeholder</div>,
});
