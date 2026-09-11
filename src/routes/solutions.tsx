import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions | Med4One" },
      { name: "description", content: "Intelligent healthcare solutions for pharmacies, clinics, and enterprises." },
      { property: "og:url", content: "https://www.med4one.com/solutions" },
    ],
    links: [{ rel: "canonical", href: "https://www.med4one.com/solutions" }],
  }),
});
