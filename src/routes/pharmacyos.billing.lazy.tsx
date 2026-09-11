import { useMemo, useState } from "react";
import { createLazyFileRoute } from "@tanstack/react-router";
import { Minus, Plus, Search, Trash2, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { PharmacyOSWorkspace, PanelHeader } from "@/components/pharmacyos/PharmacyOSWorkspace";
import { usePharmacyData, inr } from "@/hooks/usePharmacyData";

export const Route = createLazyFileRoute("/pharmacyos/billing")({
  component: BillingWorkspace,
});

function BillingWorkspace() {
  const { medicines, invoices, loading, error, user, completeInvoice } = usePharmacyData();
  const [query, setQuery] = useState("");
  const [cart, setCart] = useState<Record<string, number>>({});
  const [busy, setBusy] = useState(false);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return medicines.filter((m) => !q || m.name.toLowerCase().includes(q) || m.product_code.toLowerCase().includes(q));
  }, [medicines, query]);

  const lines = Object.entries(cart)
    .map(([id, qty]) => {
      const medicine = medicines.find((m) => m.id === id);
      return medicine ? { medicine, qty } : null;
    })
    .filter((line): line is { medicine: (typeof medicines)[number]; qty: number } => Boolean(line));

  const subtotal = lines.reduce((sum, line) => sum + line.medicine.mrp * line.qty, 0);
  const tax = lines.reduce((sum, line) => sum + (line.medicine.mrp * line.qty * line.medicine.tax_percent) / 100, 0);

  const setQty = (id: string, qty: number) =>
    setCart((prev) => {
      const next = { ...prev };
      if (qty <= 0) delete next[id];
      else next[id] = qty;
      return next;
    });

  const submit = async (status: "completed" | "held") => {
    if (!lines.length) {
      toast.error("Add at least one medicine to the bill.");
      return;
    }
    setBusy(true);
    try {
      const invoice = await completeInvoice(
        lines.map((line) => ({ medicineId: line.medicine.id, quantity: line.qty })),
        status,
      );
      setCart({});
      toast.success(
        status === "completed"
          ? `Invoice ${invoice.invoice_number} saved for ${inr(Number(invoice.total))}`
          : `Bill ${invoice.invoice_number} held`,
      );
    } catch (submitError) {
      toast.error(submitError instanceof Error ? submitError.message : "Could not save the bill.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <PharmacyOSWorkspace
      title="Billing & POS"
      subtitle="Search, bill and save invoices — stock and tax update automatically."
      loading={loading}
      requiresAuth={!loading && !user}
      error={error}
    >
      <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
        <div className="space-y-6">
          <div className="rounded-3xl border border-border bg-card p-6">
            <PanelHeader title="Medicine catalogue" description={`${medicines.length} items in stock`} />
            <div className="relative mt-5">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search by name or product code"
                className="h-12 rounded-xl pl-10"
              />
            </div>
            <div className="mt-5 space-y-3">
              {results.map((medicine) => (
                <div
                  key={medicine.id}
                  className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border p-4"
                >
                  <div className="min-w-0">
                    <div className="font-semibold">{medicine.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {medicine.product_code} · Batch {medicine.batch} · GST {medicine.tax_percent}%
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant={medicine.stock_qty <= medicine.reorder_level ? "destructive" : "secondary"}>
                      {medicine.stock_qty} in stock
                    </Badge>
                    <span className="font-mono text-sm">{inr(medicine.mrp)}</span>
                    <Button size="sm" onClick={() => setQty(medicine.id, (cart[medicine.id] ?? 0) + 1)}>
                      Add
                    </Button>
                  </div>
                </div>
              ))}
              {!results.length && (
                <p className="py-6 text-center text-sm text-muted-foreground">No medicines match that search.</p>
              )}
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card p-6">
            <PanelHeader title="Recent invoices" description="Saved to your pharmacy record" />
            <div className="mt-5 divide-y divide-border">
              {invoices.map((invoice) => (
                <div key={invoice.id} className="flex items-center justify-between py-3 text-sm">
                  <div>
                    <div className="font-semibold">{invoice.invoice_number}</div>
                    <div className="text-xs text-muted-foreground">
                      {new Date(invoice.created_at).toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" })}
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant={invoice.status === "held" ? "outline" : "secondary"}>{invoice.status}</Badge>
                    <span className="font-mono">{inr(Number(invoice.total))}</span>
                  </div>
                </div>
              ))}
              {!invoices.length && (
                <p className="py-6 text-center text-sm text-muted-foreground">No invoices yet — create your first bill.</p>
              )}
            </div>
          </div>
        </div>

        <div className="lg:sticky lg:top-28 h-fit rounded-3xl border border-border bg-card p-6">
          <PanelHeader title="Current bill" description={`${lines.length} line item(s)`} />
          <div className="mt-5 space-y-3">
            {lines.map((line) => (
              <div key={line.medicine.id} className="rounded-2xl border border-border p-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <div className="truncate font-semibold">{line.medicine.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {inr(line.medicine.mrp)} × {line.qty}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setQty(line.medicine.id, 0)}
                    className="text-muted-foreground hover:text-destructive"
                    aria-label={`Remove ${line.medicine.name}`}
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <Button size="icon" variant="outline" onClick={() => setQty(line.medicine.id, line.qty - 1)}>
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-10 text-center font-mono">{line.qty}</span>
                  <Button size="icon" variant="outline" onClick={() => setQty(line.medicine.id, line.qty + 1)}>
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
            {!lines.length && <p className="py-6 text-center text-sm text-muted-foreground">Bill is empty.</p>}
          </div>

          <div className="mt-6 space-y-2 border-t border-border pt-5 text-sm">
            <div className="flex justify-between text-muted-foreground">
              <span>Subtotal</span>
              <span className="font-mono">{inr(subtotal)}</span>
            </div>
            <div className="flex justify-between text-muted-foreground">
              <span>GST</span>
              <span className="font-mono">{inr(tax)}</span>
            </div>
            <div className="flex justify-between text-lg font-bold">
              <span>Total</span>
              <span className="font-mono">{inr(subtotal + tax)}</span>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3">
            <Button size="lg" className="h-12 font-semibold" disabled={busy} onClick={() => void submit("completed")}>
              {busy && <Loader2 className="mr-2 h-4 w-4 animate-spin" />} Complete sale
            </Button>
            <Button variant="outline" disabled={busy} onClick={() => void submit("held")}>
              Hold bill
            </Button>
          </div>
        </div>
      </div>
    </PharmacyOSWorkspace>
  );
}
