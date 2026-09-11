import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/media-kit")({
  head: () => ({
    meta: [
      { title: "Media Kit | Med4One Health Services Pvt Ltd" },
      {
        name: "description",
        content:
          "Med4One media kit: product imagery of PharmacyOS, logo files, brand usage guidelines and approved messaging for media and partner use.",
      },
      { property: "og:title", content: "Media Kit | Med4One Health Services" },
      {
        property: "og:description",
        content: "Downloadable Med4One product imagery, logos and brand usage guidelines.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.med4one.com/media-kit" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.med4one.com/media-kit" }],
  }),
});
