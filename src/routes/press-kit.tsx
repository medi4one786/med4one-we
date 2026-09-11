import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/press-kit")({
  head: () => ({
    meta: [
      { title: "Press Kit | Med4One Health Services Pvt Ltd" },
      {
        name: "description",
        content:
          "Med4One press kit: company boilerplate, key facts, brand colours, logo downloads and media contact details for journalists and partners.",
      },
      { property: "og:title", content: "Press Kit | Med4One Health Services" },
      {
        property: "og:description",
        content: "Company facts, boilerplate, logos and media contact for Med4One Health Services Pvt Ltd.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.med4one.com/press-kit" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.med4one.com/press-kit" }],
  }),
});
