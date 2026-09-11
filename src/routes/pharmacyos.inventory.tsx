import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/pharmacyos/inventory")({
  head: () => ({
    meta: [
      { title: "Inventory & Stock | Med4One PharmacyOS" },
      {
        name: "description",
        content:
          "Track batches, expiry, MRP and reorder levels in Med4One PharmacyOS, and record stock replenishment that saves instantly.",
      },
      { property: "og:title", content: "Inventory & Stock | Med4One PharmacyOS" },
      { property: "og:description", content: "Live pharmacy stock, batch and expiry control in PharmacyOS." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});
