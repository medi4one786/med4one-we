import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/refund")({
  head: () => ({
    meta: [
      { title: "Refund & Cancellation Policy | Med4One" },
      { name: "description", content: "Med4One"s refund eligibility, subscription cancellation process and billing timelines for PharmacyOS plans and add-on modules." },
      { property: "og:title", content: "Refund & Cancellation Policy | Med4One" },
      { property: "og:description", content: "Med4One"s refund eligibility, subscription cancellation process and billing timelines for PharmacyOS plans and add-on modules." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://med4oneai.lovable.app/refund" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://med4oneai.lovable.app/refund" }],
  }),
});
