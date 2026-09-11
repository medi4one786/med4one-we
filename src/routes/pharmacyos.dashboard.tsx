import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/pharmacyos/dashboard")({
  head: () => ({
    meta: [
      { title: "PharmacyOS Dashboard — Live Invoices, Prescriptions & Stock | Med4One" },
      {
        name: "description",
        content:
          "Live PharmacyOS dashboard from Med4One: today's invoices, prescription queue, stock levels, revenue charts and a real-time activity ticker.",
      },
      { property: "og:title", content: "PharmacyOS Dashboard — Live Pharmacy Operations | Med4One" },
      {
        property: "og:description",
        content:
          "Track billing, prescriptions and stock in real time with the Med4One PharmacyOS dashboard.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});
