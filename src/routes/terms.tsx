import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | Med4One" },
      { name: "description", content: "The terms governing use of Med4One PharmacyOS, AI features, subscriptions and related services provided by Med4One Health Services Pvt Ltd." },
      { property: "og:title", content: "Terms & Conditions | Med4One" },
      { property: "og:description", content: "The terms governing use of Med4One PharmacyOS, AI features, subscriptions and related services provided by Med4One Health Services Pvt Ltd." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.med4one.com/terms" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.med4one.com/terms" }],
  }),
});
