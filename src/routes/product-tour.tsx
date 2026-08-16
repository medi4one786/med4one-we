import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/product-tour")({
  head: () => ({
    meta: [
      { title: "Product Tour | Med4One" },
      { name: "description", content: "Take a visual tour of Med4One PharmacyOS." },
      { property: "og:url", content: "https://med4oneai.lovable.app/product-tour" },
    ],
    links: [{ rel: "canonical", href: "https://med4oneai.lovable.app/product-tour" }],
  }),
});
