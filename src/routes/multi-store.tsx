import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/multi-store")({
  head: () => ({
    meta: [
      { title: "Multi-Store Management | Med4One" },
      { name: "description", content: "Run multiple pharmacy branches on one platform with centralised stock visibility, transfers, pricing control and consolidated reporting." },
      { property: "og:title", content: "Multi-Store Management | Med4One" },
      { property: "og:description", content: "Run multiple pharmacy branches on one platform with centralised stock visibility, transfers, pricing control and consolidated reporting." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.med4one.com/multi-store" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.med4one.com/multi-store" }],
  }),
});
