import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Med4One" },
      { name: "description", content: "How Med4One Health Services Pvt Ltd collects, uses, stores and protects personal and pharmacy data across its platform and services." },
      { property: "og:title", content: "Privacy Policy | Med4One" },
      { property: "og:description", content: "How Med4One Health Services Pvt Ltd collects, uses, stores and protects personal and pharmacy data across its platform and services." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://med4oneai.lovable.app/privacy" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://med4oneai.lovable.app/privacy" }],
  }),
});
