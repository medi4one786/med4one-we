import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { AlertTriangle, Sparkles, TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ConsoleShell, StatGrid } from "@/components/software/ConsoleShell";
import { usePharmacyData, inr } from "@/hooks/usePharmacyData";
import { buildInsights, computeMetrics, daysToExpiry } from "@/lib/pharmacy-insights";

export const Route = createLazyFileRoute("/ai")({
  component: AiConsole,
});

const toneStyles = {
  urgent: { icon: AlertTriangle, className: "border-destructive/30 bg-destructive/5" },
  watch: { icon: Sparkles, className: "border-primary/25 bg-primary/5" },
  growth: { icon: TrendingUp, className: "border-border bg-muted/40" },
} as const;

function AiConsole() {
  const { medicines, invoices, loading, error, user } = usePharmacyData();
  const metrics = computeMetrics(medicines, invoices);
  const insights = buildInsights(medicines, invoices);
  const expiryWatch = [...medicines].sort((a, b) => daysToExpiry(a) - daysToExpiry(b)).slice(0, 6);

  return (
    <ConsoleShell
      eyebrow="Med4One AI"
      title="AI Intelligence Console"
      subtitle="Reorder, expiry and margin intelligence generated from your pharmacy's live records — no manual reports."
      loading={loading}
      requiresAuth={!loading && !user}
      error={error}
    >
      <div className="space-y-6">
        <StatGrid
          items={[
            { label: "Reorder alerts", value: String(metrics.lowStock.length), hint: "At or below reorder level" },
            { label: "Expiry watchlist", value: String(metrics.expiring.length), hint: "Within 6 months" },
            { label: "Average margin", value: `${Math.round(metrics.avgMargin)}%`, hint: "Across catalogue" },
            { label: "Margin locked in stock", value: inr(metrics.potentialMargin) },
          ]}
        />

        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <div className="rounded-3xl border border-border bg-card p-6">
            <h2 className="text-lg font-bold">Recommended actions</h2>
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

          <div className="rounded-3xl border border-border bg-card p-6">
            <h2 className="text-lg font-bold">Expiry watchlist</h2>
            <div className="mt-5 space-y-3">
              {expiryWatch.map((medicine) => {
                const days = daysToExpiry(medicine);
                return (
                  <div key={medicine.id} className="flex items-center justify-between rounded-xl border border-border px-4 py-3 text-sm">
                    <div className="min-w-0">
                      <div className="truncate font-semibold">{medicine.name}</div>
                      <div className="text-xs text-muted-foreground">Batch {medicine.batch}</div>
                    </div>
                    <Badge variant={days < 90 ? "destructive" : "secondary"}>{days} days</Badge>
                  </div>
                );
              })}
              {!expiryWatch.length && <p className="text-sm text-muted-foreground">No stock recorded yet.</p>}
            </div>
            <Button className="mt-6 w-full" asChild>
              <Link to="/pharmacyos/inventory">
                Act in inventory <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </ConsoleShell>
  );
}
