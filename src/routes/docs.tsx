import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/docs")({
  head: () => ({
    meta: [
      { title: "Documentation | Med4One PharmacyOS Guides" },
      { name: "description", content: "Product documentation for Med4One PharmacyOS covering setup, billing, inventory, reporting and day-to-day pharmacy operations." },
      { property: "og:title", content: "Documentation | Med4One PharmacyOS Guides" },
      { property: "og:description", content: "Product documentation for Med4One PharmacyOS covering setup, billing, inventory, reporting and day-to-day pharmacy operations." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.med4one.com/docs" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.med4one.com/docs" }],
  }),
});
