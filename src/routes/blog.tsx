import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog & Insights | Med4One Healthcare Technology" },
      { name: "description", content: "Explore ideas, insights and practical knowledge about pharmacy technology, healthcare innovation, AI, and the future of connected healthcare." },
      { property: "og:title", content: "Blog & Insights | Med4One Healthcare Technology" },
      { property: "og:description", content: "Explore ideas, insights and practical knowledge about pharmacy technology, healthcare innovation, AI, and the future of connected healthcare." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});
