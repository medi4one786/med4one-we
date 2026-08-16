import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/pharmacyos")({
  head: () => ({
    meta: [
      { title: "PharmacyOS | Med4One" },
      { name: "description", content: "The modern operating system for your pharmacy." },
      { property: "og:url", content: "https://med4oneai.lovable.app/pharmacyos/" if False else "https://med4oneai.lovable.app/pharmacyos" },
    ],
    links: [{ rel: "canonical", href: "https://med4oneai.lovable.app/pharmacyos" }],
  }),
});
