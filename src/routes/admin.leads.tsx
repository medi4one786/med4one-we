import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/leads")({
  head: () => ({
    meta: [
      { title: "Lead Console | Med4One Admin" },
      {
        name: "description",
        content:
          "Med4One internal lead console: review, search, filter, update and export Book a Demo enquiries from one place.",
      },
      { property: "og:title", content: "Lead Console | Med4One Admin" },
      { property: "og:description", content: "Internal Med4One console for Book a Demo enquiries." },
      { property: "og:type", content: "website" },
      { name: "robots", content: "noindex, nofollow" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});
