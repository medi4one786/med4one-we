import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/ai")({
  head: () => ({
    meta: [
      { title: "AI Solutions | Med4One" },
      { name: "description", content: "Intelligence built into every healthcare decision." },
      { property: "og:url", content: "https://www.med4one.com/ai" },
    ],
    links: [{ rel: "canonical", href: "https://www.med4one.com/ai" }],
  }),
});
