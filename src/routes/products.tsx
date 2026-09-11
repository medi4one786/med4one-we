import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products Overview | Med4One Healthcare Technology" },
      {
        name: "description",
        content:
          "Explore the complete Med4One product suite — PharmacyOS, AI Solutions, Business Intelligence, Multi-Store and Enterprise — in one overview.",
      },
      { property: "og:title", content: "Products Overview | Med4One" },
      {
        property: "og:description",
        content:
          "One connected platform for pharmacy operations, intelligence and growth. See every Med4One product in one place.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://med4oneai.lovable.app/products" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://med4oneai.lovable.app/products" }],
  }),
});
