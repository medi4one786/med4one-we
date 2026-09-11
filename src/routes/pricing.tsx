import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing | Med4One" },
      { name: "description", content: "Simple, transparent pricing for pharmacies of all sizes." },
      { property: "og:url", content: "https://www.med4one.com/pricing" },
    ],
    links: [{ rel: "canonical", href: "https://www.med4one.com/pricing" }],
  }),
});
