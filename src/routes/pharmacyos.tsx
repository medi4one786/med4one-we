import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/pharmacyos")({
  head: () => ({
    meta: [
      { title: "PharmacyOS | Med4One" },
      { name: "description", content: "The modern operating system for your pharmacy." },
    ],
  }),
});
