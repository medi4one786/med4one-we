import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/product-tour")({
  component: () => <div>Product Tour Page Placeholder</div>,
});
