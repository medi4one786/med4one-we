import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Med4One" },
      { name: "description", content: "Transforming healthcare through intelligent technology. Learn about Med4One's vision, mission, and values." },
    ],
  }),
  component: () => <div>About Page Placeholder</div>,
});
