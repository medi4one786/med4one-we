import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Med4One | Intelligent Healthcare & Pharmacy Technology Platform" },
      {
        name: "description",
        content:
          "Med4One provides intelligent pharmacy and healthcare technology with PharmacyOS, AI-powered business insights, inventory management, billing, analytics and customer engagement.",
      },
      { property: "og:title", content: "Med4One | Intelligent Healthcare Platform" },
      {
        property: "og:description",
        content:
          "Connect pharmacy, healthcare, business and AI in one intelligent ecosystem.",
      },
      { property: "og:url", content: "https://med4oneai.lovable.app" },
    ],
    links: [{ rel: "canonical", href: "https://med4oneai.lovable.app" }],
  }),
});

