import { createFileRoute } from "@tanstack/react-router";
import { lazy } from "react";

const Index = lazy(() => import("./index.lazy"));

export const Route = createFileRoute("/")({
  component: Index,
});
