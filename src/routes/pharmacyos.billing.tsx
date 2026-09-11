import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/pharmacyos/billing")({
  head: () => ({
    meta: [
      { title: "Billing & POS | Med4One PharmacyOS" },
      {
        name: "description",
        content:
          "Bill medicines in seconds with Med4One PharmacyOS: live stock, automatic GST, held bills and invoices saved to your pharmacy account.",
      },
      { property: "og:title", content: "Billing & POS | Med4One PharmacyOS" },
      { property: "og:description", content: "Fast pharmacy billing with live stock and automatic tax in PharmacyOS." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});
