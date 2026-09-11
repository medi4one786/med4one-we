import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Med4One" },
      { name: "description", content: "Let's build the future of healthcare together. Contact Med4One." },
      { property: "og:url", content: "https://www.med4one.com/contact" },
    ],
    links: [{ rel: "canonical", href: "https://www.med4one.com/contact" }],
  }),
});
