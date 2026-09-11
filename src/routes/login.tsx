import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Login | Med4One PharmacyOS" },
      { name: "description", content: "Sign in to your Med4One PharmacyOS account to manage billing, inventory, analytics and your pharmacy operations." },
      { property: "og:title", content: "Login | Med4One PharmacyOS" },
      { property: "og:description", content: "Sign in to your Med4One PharmacyOS account to manage billing, inventory, analytics and your pharmacy operations." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.med4one.com/login" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.med4one.com/login" }],
  }),
});
