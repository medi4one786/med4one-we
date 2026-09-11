import { useMemo, useState } from "react";
import { createLazyFileRoute } from "@tanstack/react-router";
import { AlertTriangle, Loader2, PackagePlus, Search } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { PharmacyOSWorkspace, PanelHeader } from "@/components/pharmacyos/PharmacyOSWorkspace";
import { usePharmacyData, inr } from "@/hooks/usePharmacyData";

export const Route = createLazyFileRoute("/pharmacyos/inventory")({
  component: InventoryWorkspace,
});

function InventoryWorkspace() {
  const { medicines, loading, error, user, createReorder } = usePharmacyData();
  const [query, setQuery] = useState("");
  const [onlyLow, setOnlyLow] = useState(false);
  const [reorder, setReorder] = useState<Record<string, number>>({});
  const [busy, setBusy] = useState(false);

  const rows = useMemo(() => {
    const q = query.trim().toLowerCase();
    return medicines.filter((medicine) => {
      const matchesQuery =
        !q || medicine.name.toLowerCase().includes(q) || medicine.product_code.toLowerCase().includes(q);
      const matchesLow = !onlyLow || medicine.stock_qty <= medicine.reorder_level;
      return matchesQuery && matchesLow;
    });
  }, [medicines, query, onlyLow]);

  const lowStock = medicines.filter((m) => m.stock_qty <= m.reorder_level).length;
  const stockValue = medicines.reduce((sum, m) => sum + m.cost_price * m.stock_qty, 0);
  const expiringSoon = medicines.filter((m) => {
    const days = (new Date(m.expiry_date).getTime() - Date.now()) / 86_400_000;
    return days < 180;
  }).length;

  const submitReorder = async () => {
    const lines = Object.entries(reorder)
      .filter(([, qty]) => qty > 0)
      .map(([medicineId, quantity]) => ({ medicineId, quantity }));
    if (!lines.length) {
      toast.error("Enter a quantity to receive first.");
      return;
    }
    setBusy(true);
    try {
      const total = await createReorder(lines);
      setReorder({});
      toast.success(`${total} unit(s) added to stock.`);
    } catch (reorderError) {
      toast.error(reorderError instanceof Error ? reorderError.message : "Could not record the reorder.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <PharmacyOSWorkspace
      title="Inventory & Stock"
      subtitle="Batch, expiry and reorder control — every change is written to your pharmacy record."
      loading={loading}
      requiresAuth={!loading && !user}
      error={error}
    >
      <div className="space-y-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Products", value: String(medicines.length) },
            { label: "Low stock", value: String(lowStock) },
            { label: "Expiring in 6 months", value: String(expiringSoon) },
            { label: "Stock value (cost)", value: inr(stockValue) },
          ].map((card) => (
            <div key={card.label} className="rounded-2xl border border-border bg-card p-5">
              <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{card.label}</div>
              <div className="mt-2 text-2xl font-bold">{card.value}</div>
            </div>
          ))}
        </div>

        <div className="rounded-3xl border border-border bg-card p-6">
          <PanelHeader
            title="Stock register"
            description="Enter a receive quantity and save to update stock."
            action={
              <Button onClick={() => void submitReorder()} disabled={busy}>
                {busy ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <PackagePlus className="mr-2 h-4 w-4" />}
                Receive stock
              </Button>
            }
          />

          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search medicines"
                className="h-12 rounded-xl pl-10"
              />
            </div>
            <Button variant={onlyLow ? "default" : "outline"} className="h-12" onClick={() => setOnlyLow(!onlyLow)}>
              <AlertTriangle className="mr-2 h-4 w-4" /> Low stock only
            </Button>
          </div>

          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[820px] text-sm">
              <thead className="text-left text-xs uppercase tracking-wide text-muted-foreground">
                <tr>
                  <th className="py-3">Medicine</th>
                  <th className="py-3">Batch / Expiry</th>
                  <th className="py-3">MRP</th>
                  <th className="py-3">Stock</th>
                  <th className="py-3">Receive</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((medicine) => (
                  <tr key={medicine.id} className="border-t border-border">
                    <td className="py-4">
                      <div className="font-semibold">{medicine.name}</div>
                      <div className="text-xs text-muted-foreground">{medicine.product_code}</div>
                    </td>
                    <td className="py-4 text-muted-foreground">
                      {medicine.batch}
                      <div className="text-xs">
                        {new Date(medicine.expiry_date).toLocaleDateString("en-IN", { month: "short", year: "numeric" })}
                      </div>
                    </td>
                    <td className="py-4 font-mono">{inr(medicine.mrp)}</td>
                    <td className="py-4">
                      <Badge variant={medicine.stock_qty <= medicine.reorder_level ? "destructive" : "secondary"}>
                        {medicine.stock_qty} / min {medicine.reorder_level}
                      </Badge>
                    </td>
                    <td className="py-4">
                      <Input
                        type="number"
                        min={0}
                        value={reorder[medicine.id] ?? ""}
                        onChange={(event) =>
                          setReorder((prev) => ({ ...prev, [medicine.id]: Number(event.target.value) }))
                        }
                        className="h-10 w-24 rounded-xl"
                        placeholder="0"
                      />
                    </td>
                  </tr>
                ))}
                {!rows.length && (
                  <tr>
                    <td colSpan={5} className="py-8 text-center text-muted-foreground">
                      No medicines in this view.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </PharmacyOSWorkspace>
  );
}
