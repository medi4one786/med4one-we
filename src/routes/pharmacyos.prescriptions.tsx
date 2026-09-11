import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/pharmacyos/prescriptions")({
  head: () => ({
    meta: [
      { title: "Prescription Workflow | Med4One PharmacyOS" },
      {
        name: "description",
        content:
          "Review, verify and dispense prescriptions in Med4One PharmacyOS with confidence scores, item-level detail and saved status updates.",
      },
      { property: "og:title", content: "Prescription Workflow | Med4One PharmacyOS" },
      { property: "og:description", content: "Digital prescription review and dispensing inside PharmacyOS." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});
