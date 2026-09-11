import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/book-demo")({
  head: () => ({
    meta: [
      { title: "Book a Demo | Med4One PharmacyOS" },
      { name: "description", content: "Book a personalised walkthrough of Med4One PharmacyOS and see how intelligent pharmacy technology fits your business." },
      { property: "og:title", content: "Book a Demo | Med4One PharmacyOS" },
      { property: "og:description", content: "Book a personalised walkthrough of Med4One PharmacyOS and see how intelligent pharmacy technology fits your business." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.med4one.com/book-demo" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.med4one.com/book-demo" }],
  }),
});
