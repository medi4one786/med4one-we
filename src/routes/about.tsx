import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Med4One - Building the Digital Future of Healthcare" },
      { 
        name: "description", 
        content: "Med4One is a healthcare technology company focused on making everyday healthcare operations simpler, smarter and more connected through AI and innovation." 
      },
      { property: "og:title", content: "About Med4One | The Future of Healthcare Technology" },
      { property: "og:description", content: "We're not just building another pharmacy software platform. We're building the technology infrastructure for a smarter future of healthcare." },
    ],
  }),
});

