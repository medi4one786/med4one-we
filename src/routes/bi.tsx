import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/bi")({
  head: () => ({
    meta: [
      { title: "Business Intelligence | Med4One Pharmacy Analytics" },
      { name: "description", content: "Turn pharmacy data into decisions with Med4One Business Intelligence — sales, margin, inventory and customer analytics in one dashboard." },
      { property: "og:title", content: "Business Intelligence | Med4One Pharmacy Analytics" },
      { property: "og:description", content: "Turn pharmacy data into decisions with Med4One Business Intelligence — sales, margin, inventory and customer analytics in one dashboard." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://med4oneai.lovable.app/bi" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://med4oneai.lovable.app/bi" }],
  }),
});
