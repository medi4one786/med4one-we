import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQs | Med4One Frequently Asked Questions" },
      { name: "description", content: "Answers to common questions about Med4One PharmacyOS, pricing, the 7-day free trial, data security, AI features and multi-store support." },
      { property: "og:title", content: "FAQs | Med4One Frequently Asked Questions" },
      { property: "og:description", content: "Answers to common questions about Med4One PharmacyOS, pricing, the 7-day free trial, data security, AI features and multi-store support." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://med4oneai.lovable.app/faq" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://med4oneai.lovable.app/faq" }],
  }),
});
