import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/security")({
  head: () => ({
    meta: [
      { title: "Security at Med4One | Built With Security in Mind" },
      {
        name: "description",
        content:
          "Med4One is designed with security, privacy and responsible data management at the core: role-based access, secure authentication, API security and infrastructure monitoring.",
      },
      { property: "og:title", content: "Security at Med4One | Trusted. Responsible. Transparent." },
      {
        property: "og:description",
        content:
          "Protect your data. Control access. Build trust. How Med4One approaches security across authentication, access control, APIs, databases and cloud infrastructure.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://med4oneai.lovable.app/security/" if False else "https://med4oneai.lovable.app/security" },
    ],
    links: [{ rel: "canonical", href: "https://med4oneai.lovable.app/security" }],
  }),
});
