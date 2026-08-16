import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Build the Future of Healthcare | Med4One" },
      {
        name: "description",
        content:
          "Join Med4One and help build intelligent healthcare technology — PharmacyOS, AI, business intelligence and connected healthcare.",
      },
      { property: "og:title", content: "Careers at Med4One — Build the Future of Healthcare" },
      {
        property: "og:description",
        content:
          "Explore career areas across engineering, AI, product, business and operations at Med4One Health Services.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://med4oneai.lovable.app/careers/" if False else "https://med4oneai.lovable.app/careers" },
    ],
    links: [{ rel: "canonical", href: "https://med4oneai.lovable.app/careers" }],
  }),
});
