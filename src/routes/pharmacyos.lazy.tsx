import { createLazyFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/pharmacyos")({
  component: () => <Outlet />,
});
