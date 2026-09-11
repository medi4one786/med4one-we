import { useState } from "react";
import { createLazyFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Flag, Stethoscope } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PharmacyOSWorkspace, PanelHeader } from "@/components/pharmacyos/PharmacyOSWorkspace";
import { usePharmacyData } from "@/hooks/usePharmacyData";

export const Route = createLazyFileRoute("/pharmacyos/prescriptions")({
  component: PrescriptionsWorkspace,
});

const statusTone: Record<string, "secondary" | "destructive" | "outline"> = {
  review: "outline",
  ready: "secondary",
  flagged: "destructive",
  dispensed: "secondary",
};

function PrescriptionsWorkspace() {
  const { prescriptions, loading, error, user, updatePrescriptionStatus } = usePharmacyData();
  const [filter, setFilter] = useState<string>("all");

  const rows = prescriptions.filter((rx) => filter === "all" || rx.status === filter);

  const setStatus = async (id: string, status: string) => {
    try {
      await updatePrescriptionStatus(id, status);
      toast.success(`Prescription marked ${status}.`);
    } catch (updateError) {
      toast.error(updateError instanceof Error ? updateError.message : "Could not update the prescription.");
    }
  };

  return (
    <PharmacyOSWorkspace
      title="Prescription Workflow"
      subtitle="Verify prescriptions, check item detail and record every decision."
      loading={loading}
      requiresAuth={!loading && !user}
      error={error}
    >
      <div className="space-y-6">
        <div className="flex flex-wrap gap-2">
          {["all", "review", "ready", "flagged", "dispensed"].map((status) => (
            <Button
              key={status}
              size="sm"
              variant={filter === status ? "default" : "outline"}
              onClick={() => setFilter(status)}
              className="capitalize"
            >
              {status}
            </Button>
          ))}
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {rows.map((rx) => (
            <div key={rx.id} className="rounded-3xl border border-border bg-card p-6">
              <PanelHeader
                title={`${rx.prescription_number} · ${rx.patient_name}`}
                description={`${rx.doctor_name} · received ${new Date(rx.received_at).toLocaleDateString("en-IN", {
                  dateStyle: "medium",
                })}`}
                action={<Badge variant={statusTone[rx.status] ?? "outline"}>{rx.status}</Badge>}
              />

              <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                <Stethoscope className="h-3.5 w-3.5 text-primary" />
                Read confidence {rx.confidence}%
              </div>

              <ul className="mt-4 space-y-2">
                {rx.prescription_items.map((item) => (
                  <li key={item.id} className="flex items-center justify-between rounded-xl border border-border px-4 py-3 text-sm">
                    <span className="font-medium">{item.medicine_name}</span>
                    <span className="text-muted-foreground">{item.dosage}</span>
                  </li>
                ))}
                {!rx.prescription_items.length && (
                  <li className="text-sm text-muted-foreground">No items recorded.</li>
                )}
              </ul>

              <div className="mt-5 flex flex-wrap gap-3">
                <Button size="sm" onClick={() => void setStatus(rx.id, "ready")}>
                  <CheckCircle2 className="mr-2 h-4 w-4" /> Mark ready
                </Button>
                <Button size="sm" variant="outline" onClick={() => void setStatus(rx.id, "dispensed")}>
                  Dispensed
                </Button>
                <Button size="sm" variant="ghost" onClick={() => void setStatus(rx.id, "flagged")}>
                  <Flag className="mr-2 h-4 w-4" /> Flag for pharmacist
                </Button>
              </div>
            </div>
          ))}
          {!rows.length && (
            <p className="rounded-3xl border border-border bg-card p-10 text-center text-sm text-muted-foreground">
              No prescriptions in this view.
            </p>
          )}
        </div>
      </div>
    </PharmacyOSWorkspace>
  );
}
