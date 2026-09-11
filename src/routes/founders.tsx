import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/founders")({
  head: () => ({
    meta: [
      { title: "Founders | Med4One Health Services Pvt Ltd" },
      {
        name: "description",
        content:
          "Meet the founding story behind Med4One Health Services Pvt Ltd — why PharmacyOS was built, the founding principles and the leadership responsibilities that guide the company.",
      },
      { property: "og:title", content: "Founders | Med4One Health Services" },
      {
        property: "og:description",
        content: "The founding story and principles behind Med4One and PharmacyOS.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.med4one.com/founders" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.med4one.com/founders" }],
  }),
});
