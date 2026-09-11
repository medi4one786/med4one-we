import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/account")({
  head: () => ({
    meta: [
      { title: "My Account | Med4One" },
      {
        name: "description",
        content:
          "Manage your Med4One account: update your name, pharmacy details and contact number, and access your PharmacyOS workspace.",
      },
      { property: "og:title", content: "My Account | Med4One" },
      {
        property: "og:description",
        content: "Manage your Med4One profile and pharmacy details in one secure place.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});
