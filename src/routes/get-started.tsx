import { createFileRoute } from "@tanstack/react-router";

const title = "Start Your 7-Day Free Trial — Med4One PharmacyOS";
const description =
  "Create your Med4One free trial in under a minute. Tell us your pharmacy size and we'll route you to the right onboarding path — self-serve, guided multi-store, or enterprise.";

export const Route = createFileRoute("/get-started")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://med4oneai.lovable.app/get-started/" if False else "https://med4oneai.lovable.app/get-started" },
    ],
    links: [{ rel: "canonical", href: "https://med4oneai.lovable.app/get-started" }],
  }),
});
