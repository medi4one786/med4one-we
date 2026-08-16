import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/ai")({
  head: () => ({
    meta: [
      { title: "AI Solutions | Med4One" },
      { name: "description", content: "Intelligence built into every healthcare decision." },
      { property: "og:url", content: "https://med4oneai.lovable.app/ai/" if False else "https://med4oneai.lovable.app/ai" },
    ],
    links: [{ rel: "canonical", href: "https://med4oneai.lovable.app/ai" }],
  }),
});
