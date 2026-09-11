import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { AlertTriangle, Sparkles, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PharmacyOSWorkspace, PanelHeader } from "@/components/pharmacyos/PharmacyOSWorkspace";
import { usePharmacyData, inr } from "@/hooks/usePharmacyData";
import { buildInsights, computeMetrics } from "@/lib/pharmacy-insights";

export const Route = createLazyFileRoute("/pharmacyos/ai")({
  component: AiWorkspace,
});

const toneStyles = {
  urgent: { icon: AlertTriangle, className: "border-destructive/30 bg-destructive/5" },
  watch: { icon: Sparkles, className: "border-primary/25 bg-primary/5" },
  growth: { icon: TrendingUp, className: "border-border bg-muted/40" },
} as const;

function AiWorkspace() {
  const { medicines, invoices, loading, error, user } = usePharmacyData();
  const metrics = computeMetrics(medicines, invoices);
  const insights = buildInsights(medicines, invoices);

  return (
    <PharmacyOSWorkspace
      title="AI Assist"
      subtitle="Guidance generated from your own live stock, expiry and billing data."
      loading={loading}
      requiresAuth={!loading && !user}
      error={error}
    >
      <div className="space-y-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Recorded revenue", value: inr(metrics.revenue) },
            { label: "Average bill", value: inr(metrics.averageBill) },
            { label: "Average margin", value: `${Math.round(metrics.avgMargin)}%` },
            { label: "Reorder alerts", value: String(metrics.lowStock.length) },
          ].map((card) => (
            <div key={card.label} className="rounded-2xl border border-border bg-card p-5">
              <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{card.label}</div>
              <div className="mt-2 text-2xl font-bold">{card.value}</div>
            </div>
          ))}
        </div>

        <div className="rounded-3xl border border-border bg-card p-6">
          <PanelHeader
            title="Today's recommended actions"
            description="Recalculated every time your data changes."
            action={
              <Button variant="outline" asChild>
                <Link to="/pharmacyos/inventory">Open inventory</Link>
              </Button>
            }
          />
          <div className="mt-5 space-y-4">
            {insights.map((insight) => {
              const tone = toneStyles[insight.tone];
              return (
                <div key={insight.title} className={`flex gap-4 rounded-2xl border p-5 ${tone.className}`}>
                  <tone.icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div className="space-y-1">
                    <h3 className="font-semibold">{insight.title}</h3>
                    <p className="text-sm text-muted-foreground">{insight.detail}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </PharmacyOSWorkspace>
  );
}
