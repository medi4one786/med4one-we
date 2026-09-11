import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Our Team | Med4One Health Services Pvt Ltd" },
      {
        name: "description",
        content:
          "The Med4One team — engineering, product, implementation, support and sales groups building PharmacyOS for pharmacies across India.",
      },
      { property: "og:title", content: "Our Team | Med4One Health Services" },
      {
        property: "og:description",
        content: "How the Med4One team is organised and how we work with pharmacies every day.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.med4one.com/team" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.med4one.com/team" }],
  }),
});
