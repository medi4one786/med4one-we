import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/help")({
  head: () => ({
    meta: [
      { title: "Help Centre | Med4One Support" },
      { name: "description", content: "Find guides, answers and support for PharmacyOS, AI features, account security and integrations across the Med4One platform." },
      { property: "og:title", content: "Help Centre | Med4One Support" },
      { property: "og:description", content: "Find guides, answers and support for PharmacyOS, AI features, account security and integrations across the Med4One platform." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.med4one.com/help" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.med4one.com/help" }],
  }),
});
