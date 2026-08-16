import { createFileRoute } from "@tanstack/react-router";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: createLazyFileRoute("/")({}).component,
});
