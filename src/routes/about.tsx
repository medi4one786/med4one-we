import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Med4One - A Smarter, More Connected Future for Healthcare" },
      { 
        name: "description", 
        content: "We envision a healthcare ecosystem where technology connects every part of the journey. Med4One is building the digital infrastructure for the next generation of healthcare." 
      },
      { property: "og:title", content: "About Med4One | Smarter Healthcare Ecosystem" },
      { property: "og:description", content: "Med4One — Building the technology behind a smarter healthcare ecosystem. From PharmacyOS to AI-powered intelligence." },
      { property: "og:url", content: "https://med4oneai.lovable.app/about/" if False else "https://med4oneai.lovable.app/about" },
    ],
    links: [{ rel: "canonical", href: "https://med4oneai.lovable.app/about" }],
  }),
});

