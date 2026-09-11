import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/pharmacyos/orders")({
  head: () => ({
    meta: [
      { title: "Purchase Orders | PharmacyOS by Med4One" },
      {
        name: "description",
        content:
          "Place supplier purchase orders from PharmacyOS, track order status and receive stock straight into your pharmacy inventory.",
      },
      { property: "og:title", content: "Purchase Orders | PharmacyOS by Med4One" },
      {
        property: "og:description",
        content: "Manage suppliers, raise purchase orders and receive stock into inventory in one place.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex" },
    ],
  }),
});
