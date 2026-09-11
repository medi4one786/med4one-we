import { useMemo } from "react";
import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ConsoleShell, StatGrid } from "@/components/software/ConsoleShell";
import { usePharmacyData, inr } from "@/hooks/usePharmacyData";
import { computeMetrics } from "@/lib/pharmacy-insights";

export const Route = createLazyFileRoute("/bi")({
  component: BiConsole,
});

function BiConsole() {
  const { medicines, invoices, loading, error, user } = usePharmacyData();
  const metrics = computeMetrics(medicines, invoices);

  const topStock = useMemo(
    () =>
      [...medicines]
        .map((medicine) => ({
          medicine,
          value: medicine.cost_price * medicine.stock_qty,
          margin: medicine.mrp > 0 ? ((medicine.mrp - medicine.cost_price) / medicine.mrp) * 100 : 0,
        }))
        .sort((a, b) => b.value - a.value)
        .slice(0, 8),
    [medicines],
  );

  const maxValue = topStock[0]?.value ?? 1;

  return (
    <ConsoleShell
      eyebrow="Business Intelligence"
      title="Business Intelligence Console"
      subtitle="Revenue, margin and inventory analytics calculated directly from your saved invoices and stock register."
      loading={loading}
      requiresAuth={!loading && !user}
      error={error}
    >
      <div className="space-y-6">
        <StatGrid
          items={[
            { label: "Recorded revenue", value: inr(metrics.revenue), hint: `${metrics.invoiceCount} completed invoices` },
            { label: "Average bill", value: inr(metrics.averageBill) },
            { label: "Inventory value (cost)", value: inr(metrics.stockValue) },
            { label: "Retail value", value: inr(metrics.retailValue), hint: `Margin ${inr(metrics.potentialMargin)}` },
          ]}
        />

        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <div className="rounded-3xl border border-border bg-card p-6">
            <h2 className="text-lg font-bold">Inventory value by product</h2>
            <p className="text-sm text-muted-foreground">Where your working capital is currently held.</p>
            <div className="mt-6 space-y-4">
              {topStock.map(({ medicine, value, margin }) => (
                <div key={medicine.id} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">{medicine.name}</span>
                    <span className="font-mono text-muted-foreground">{inr(value)}</span>
                  </div>
                  <div className="h-2.5 w-full overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-primary"
                      style={{ width: `${Math.max(4, (value / maxValue) * 100)}%` }}
                    />
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {medicine.stock_qty} units · {Math.round(margin)}% margin
                  </div>
                </div>
              ))}
              {!topStock.length && <p className="text-sm text-muted-foreground">Add stock to see analytics.</p>}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-border bg-card p-6">
              <h2 className="text-lg font-bold">Recent invoices</h2>
              <div className="mt-4 divide-y divide-border">
                {invoices.slice(0, 8).map((invoice) => (
                  <div key={invoice.id} className="flex items-center justify-between py-3 text-sm">
                    <div>
                      <div className="font-semibold">{invoice.invoice_number}</div>
                      <div className="text-xs text-muted-foreground">
                        {new Date(invoice.created_at).toLocaleDateString("en-IN", { dateStyle: "medium" })}
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge variant={invoice.status === "held" ? "outline" : "secondary"}>{invoice.status}</Badge>
                      <span className="font-mono">{inr(Number(invoice.total))}</span>
                    </div>
                  </div>
                ))}
                {!invoices.length && <p className="py-4 text-sm text-muted-foreground">No invoices recorded yet.</p>}
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-card p-6">
              <h2 className="text-lg font-bold">Risk register</h2>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Low stock products</span>
                  <span className="font-semibold">{metrics.lowStock.length}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Expiring within 6 months</span>
                  <span className="font-semibold">{metrics.expiring.length}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Average catalogue margin</span>
                  <span className="font-semibold">{Math.round(metrics.avgMargin)}%</span>
                </li>
              </ul>
              <Button variant="outline" className="mt-6 w-full" asChild>
                <Link to="/ai">
                  See AI recommendations <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </ConsoleShell>
  );
}
