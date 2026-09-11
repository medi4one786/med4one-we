import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/vision-mission")({
  head: () => ({
    meta: [
      { title: "Vision & Mission | Med4One Health Services" },
      {
        name: "description",
        content:
          "Med4One's vision is a connected digital future for healthcare. Read the mission, principles and long-term commitments behind PharmacyOS and our AI platform.",
      },
      { property: "og:title", content: "Vision & Mission | Med4One Health Services" },
      {
        property: "og:description",
        content: "Building the digital future of healthcare — the Med4One vision, mission and guiding principles.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});
