import { useEffect, useState } from "react";
import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ConsoleShell, StatGrid } from "@/components/software/ConsoleShell";
import { supabase } from "@/integrations/supabase/client";
import { usePharmacyData, inr } from "@/hooks/usePharmacyData";
import { computeMetrics } from "@/lib/pharmacy-insights";

export const Route = createLazyFileRoute("/multi-store")({
  component: MultiStoreConsole,
});

type Store = { id: string; name: string; code: string; city: string; is_active: boolean };

function MultiStoreConsole() {
  const { medicines, invoices, loading, error, user, pharmacyId } = usePharmacyData();
  const [stores, setStores] = useState<Store[]>([]);
  const metrics = computeMetrics(medicines, invoices);

  useEffect(() => {
    if (!user) return;
    let active = true;
    supabase
      .from("pharmacies")
      .select("id, name, code, city, is_active")
      .order("created_at")
      .then(({ data }) => {
        if (active && data) setStores(data as Store[]);
      });
    return () => {
      active = false;
    };
  }, [user]);

  return (
    <ConsoleShell
      eyebrow="Multi-Store"
      title="Network Command Centre"
      subtitle="Every location you operate, with the live stock and revenue position of the store you are signed in to."
      loading={loading}
      requiresAuth={!loading && !user}
      error={error}
    >
      <div className="space-y-6">
        <StatGrid
          items={[
            { label: "Locations", value: String(stores.length || 1) },
            { label: "Revenue recorded", value: inr(metrics.revenue) },
            { label: "Inventory value", value: inr(metrics.stockValue) },
            { label: "Reorder alerts", value: String(metrics.lowStock.length) },
          ]}
        />

        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-3xl border border-border bg-card p-6">
            <h2 className="text-lg font-bold">Your locations</h2>
            <div className="mt-5 space-y-3">
              {stores.map((store) => (
                <div
                  key={store.id}
                  className="flex items-center justify-between rounded-2xl border border-border px-4 py-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                      <Building2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">{store.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {store.code} · {store.city}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {store.id === pharmacyId && <Badge>Active</Badge>}
                    <Badge variant={store.is_active ? "secondary" : "outline"}>
                      {store.is_active ? "Live" : "Paused"}
                    </Badge>
                  </div>
                </div>
              ))}
              {!stores.length && (
                <p className="text-sm text-muted-foreground">Your first location is created automatically.</p>
              )}
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card p-6">
            <h2 className="text-lg font-bold">Centralised controls</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Med4One keeps catalogue, pricing and roles consistent across every store you add.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Central catalogue & pricing",
                "Store-wise revenue view",
                "Cross-store stock visibility",
                "Role-based staff access",
                "Consolidated purchase planning",
                "Network-level reporting",
              ].map((item) => (
                <div key={item} className="rounded-xl border border-border bg-muted/40 px-4 py-3 text-sm font-medium">
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <Link to="/contact">
                  Add another location <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/bi">Open analytics</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </ConsoleShell>
  );
}
