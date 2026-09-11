import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/pharmacyos/ai")({
  head: () => ({
    meta: [
      { title: "AI Assist | Med4One PharmacyOS" },
      {
        name: "description",
        content:
          "AI Assist inside Med4One PharmacyOS reads your live stock, expiry and billing data to surface reorder, expiry and margin actions.",
      },
      { property: "og:title", content: "AI Assist | Med4One PharmacyOS" },
      { property: "og:description", content: "Live AI guidance on reorders, expiry risk and margins." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});
