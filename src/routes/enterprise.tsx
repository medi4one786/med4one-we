import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/enterprise")({
  head: () => ({
    meta: [
      { title: "Enterprise Healthcare Platform | Med4One" },
      { name: "description", content: "Med4One Enterprise brings governance, role-based access, integrations and scale to pharmacy chains and healthcare groups." },
      { property: "og:title", content: "Enterprise Healthcare Platform | Med4One" },
      { property: "og:description", content: "Med4One Enterprise brings governance, role-based access, integrations and scale to pharmacy chains and healthcare groups." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.med4one.com/enterprise" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.med4one.com/enterprise" }],
  }),
});
