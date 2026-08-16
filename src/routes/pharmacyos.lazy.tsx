import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/pharmacyos")({
  component: () => <div>Pharmacyos Page Placeholder</div>,
});
