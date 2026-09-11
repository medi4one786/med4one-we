import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/pharmacyos/store")({
  head: () => ({
    meta: [
      { title: "My Pharmacy Store | PharmacyOS by Med4One" },
      {
        name: "description",
        content:
          "Create your pharmacy store inside PharmacyOS: store profile, GST and licence details, contact information and your live product catalogue.",
      },
      { property: "og:title", content: "My Pharmacy Store | PharmacyOS by Med4One" },
      {
        property: "og:description",
        content: "Set up your pharmacy store, add products and keep stock levels accurate in PharmacyOS.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex" },
    ],
  }),
});
