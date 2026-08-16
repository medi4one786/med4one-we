import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/ai")({
  head: () => ({
    meta: [
      { title: "AI Solutions | Med4One" },
      { name: "description", content: "Intelligence built into every healthcare decision." },
    ],
  }),
  component: () => <div>AI Page Placeholder</div>,
});
