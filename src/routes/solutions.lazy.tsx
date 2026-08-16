import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions | Med4One" },
      { name: "description", content: "Intelligent healthcare solutions for pharmacies, clinics, and enterprises." },
    ],
  }),
  component: () => <div>Solutions Page Placeholder</div>,
});
