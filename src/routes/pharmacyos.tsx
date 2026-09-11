import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/pharmacyos")({
  head: () => ({
    meta: [
      { title: "PharmacyOS | Med4One" },
      { name: "description", content: "The modern operating system for your pharmacy." },
      { property: "og:url", content: "https://www.med4one.com/pharmacyos" },
    ],
    links: [{ rel: "canonical", href: "https://www.med4one.com/pharmacyos" }],
  }),
});
