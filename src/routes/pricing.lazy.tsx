import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing | Med4One" },
      { name: "description", content: "Simple, transparent pricing for pharmacies of all sizes." },
    ],
  }),
  component: () => <div>Pricing Page Placeholder</div>,
});
