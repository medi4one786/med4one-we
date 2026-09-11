import { useMemo, useState } from "react";
import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { Check, Loader2, Plus, Trash2, Truck } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { PharmacyOSWorkspace, PanelHeader } from "@/components/pharmacyos/PharmacyOSWorkspace";
import { usePharmacyStore } from "@/hooks/usePharmacyStore";
import { usePharmacyData, inr } from "@/hooks/usePharmacyData";

export const Route = createLazyFileRoute("/pharmacyos/orders")({
  component: OrdersWorkspace,
});

const emptySupplier = { name: "", contact_person: "", phone: "", email: "", city: "", gst_number: "" };

function OrdersWorkspace() {
  const { store, suppliers, orders, loading, error, user, saveSupplier, deleteSupplier, placeOrder, receiveOrder } =
    usePharmacyStore();
  const { medicines, refresh: refreshMedicines } = usePharmacyData();

  const [supplier, setSupplier] = useState(emptySupplier);
  const [savingSupplier, setSavingSupplier] = useState(false);
  const [selectedSupplier, setSelectedSupplier] = useState("");
  const [expectedDate, setExpectedDate] = useState("");
  const [notes, setNotes] = useState("");
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [placing, setPlacing] = useState(false);
  const [receivingId, setReceivingId] = useState<string | null>(null);

  const suggested = useMemo(
    () => medicines.filter((medicine) => medicine.stock_qty <= medicine.reorder_level),
    [medicines],
  );

  const orderLines = useMemo(
    () =>
      Object.entries(quantities)
        .filter(([, quantity]) => quantity > 0)
        .map(([medicineId, quantity]) => ({ medicineId, quantity })),
    [quantities],
  );

  const orderTotal = orderLines.reduce((sum, line) => {
    const medicine = medicines.find((item) => item.id === line.medicineId);
    return sum + (medicine ? medicine.cost_price * line.quantity : 0);
  }, 0);

  const submitSupplier = async () => {
    if (!supplier.name.trim()) {
      toast.error("Supplier name is required.");
      return;
    }
    setSavingSupplier(true);
    try {
      await saveSupplier(supplier);
      setSupplier(emptySupplier);
      toast.success("Supplier saved.");
    } catch (saveError) {
      toast.error(saveError instanceof Error ? saveError.message : "Could not save the supplier.");
    } finally {
      setSavingSupplier(false);
    }
  };

  const submitOrder = async () => {
    if (!orderLines.length) {
      toast.error("Add a quantity against at least one product.");
      return;
    }
    setPlacing(true);
    try {
      const result = await placeOrder({
        supplierId: selectedSupplier || null,
        items: orderLines,
        expectedDate: expectedDate || null,
        notes: notes || null,
      });
      setQuantities({});
      setNotes("");
      setExpectedDate("");
      toast.success(`Order ${result.order_number} placed for ${inr(Number(result.total))}.`);
    } catch (orderError) {
      toast.error(orderError instanceof Error ? orderError.message : "Could not place the order.");
    } finally {
      setPlacing(false);
    }
  };

  const markReceived = async (orderId: string) => {
    setReceivingId(orderId);
    try {
      const units = await receiveOrder(orderId);
      await refreshMedicines();
      toast.success(`${units} unit(s) added to stock.`);
    } catch (receiveError) {
      toast.error(receiveError instanceof Error ? receiveError.message : "Could not receive the order.");
    } finally {
      setReceivingId(null);
    }
  };

  const pending = orders.filter((order) => order.status !== "received").length;

  return (
    <PharmacyOSWorkspace
      title="Suppliers & Purchase Orders"
      subtitle="Raise orders with your distributors and receive stock straight into inventory."
      loading={loading}
      requiresAuth={!loading && !user}
      error={error}
    >
      <div className="space-y-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Store", value: store?.name ?? "—" },
            { label: "Suppliers", value: String(suppliers.length) },
            { label: "Open orders", value: String(pending) },
            { label: "Reorder suggestions", value: String(suggested.length) },
          ].map((card) => (
            <div key={card.label} className="rounded-2xl border border-border bg-card p-5">
              <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{card.label}</div>
              <div className="mt-2 truncate text-2xl font-bold">{card.value}</div>
            </div>
          ))}
        </div>

        <div className="rounded-3xl border border-border bg-card p-6">
          <PanelHeader
            title="Add a supplier"
            description="Distributors you buy stock from."
            action={
              <Button onClick={() => void submitSupplier()} disabled={savingSupplier}>
                {savingSupplier ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Plus className="mr-2 h-4 w-4" />}
                Save supplier
              </Button>
            }
          />
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {(
              [
                ["Supplier name", "name"],
                ["Contact person", "contact_person"],
                ["Phone", "phone"],
                ["Email", "email"],
                ["City", "city"],
                ["GST number", "gst_number"],
              ] as const
            ).map(([label, key]) => (
              <div key={key} className="space-y-2">
                <Label htmlFor={`supplier-${key}`}>{label}</Label>
                <Input
                  id={`supplier-${key}`}
                  value={supplier[key]}
                  onChange={(event) => setSupplier((prev) => ({ ...prev, [key]: event.target.value }))}
                  className="h-12 rounded-xl"
                />
              </div>
            ))}
          </div>

          {suppliers.length > 0 && (
            <ul className="mt-6 grid gap-3 md:grid-cols-2">
              {suppliers.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between gap-4 rounded-2xl border border-border/70 p-4"
                >
                  <div className="min-w-0">
                    <div className="truncate font-semibold">{item.name}</div>
                    <div className="truncate text-xs text-muted-foreground">
                      {[item.contact_person, item.phone, item.city].filter(Boolean).join(" · ") || "No contact details"}
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    aria-label={`Remove ${item.name}`}
                    onClick={() => void deleteSupplier(item.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="rounded-3xl border border-border bg-card p-6">
          <PanelHeader
            title="New purchase order"
            description={`Order value ${inr(orderTotal)} · ${orderLines.length} line(s)`}
            action={
              <Button onClick={() => void submitOrder()} disabled={placing}>
                {placing ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Truck className="mr-2 h-4 w-4" />}
                Place order
              </Button>
            }
          />

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <div className="space-y-2">
              <Label htmlFor="order-supplier">Supplier</Label>
              <select
                id="order-supplier"
                value={selectedSupplier}
                onChange={(event) => setSelectedSupplier(event.target.value)}
                className="h-12 w-full rounded-xl border border-input bg-background px-3 text-sm"
              >
                <option value="">No supplier selected</option>
                {suppliers.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="order-date">Expected delivery</Label>
              <Input
                id="order-date"
                type="date"
                value={expectedDate}
                onChange={(event) => setExpectedDate(event.target.value)}
                className="h-12 rounded-xl"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="order-notes">Notes</Label>
              <Textarea
                id="order-notes"
                value={notes}
                onChange={(event) => setNotes(event.target.value)}
                placeholder="Delivery instructions"
                className="min-h-12 rounded-xl"
              />
            </div>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[720px] text-sm">
              <thead className="text-left text-xs uppercase tracking-wide text-muted-foreground">
                <tr>
                  <th className="py-3">Product</th>
                  <th className="py-3">In stock</th>
                  <th className="py-3">Cost price</th>
                  <th className="py-3">Order qty</th>
                </tr>
              </thead>
              <tbody>
                {medicines.map((medicine) => (
                  <tr key={medicine.id} className="border-t border-border/60">
                    <td className="py-3">
                      <div className="font-semibold">{medicine.name}</div>
                      <div className="text-xs text-muted-foreground">{medicine.product_code}</div>
                    </td>
                    <td className="py-3">
                      {medicine.stock_qty <= medicine.reorder_level ? (
                        <Badge variant="destructive">{medicine.stock_qty}</Badge>
                      ) : (
                        medicine.stock_qty
                      )}
                    </td>
                    <td className="py-3">{inr(medicine.cost_price)}</td>
                    <td className="py-3">
                      <Input
                        type="number"
                        min={0}
                        aria-label={`Order quantity for ${medicine.name}`}
                        value={quantities[medicine.id] ?? ""}
                        onChange={(event) =>
                          setQuantities((prev) => ({ ...prev, [medicine.id]: Number(event.target.value) || 0 }))
                        }
                        className="h-10 w-24 rounded-lg"
                      />
                    </td>
                  </tr>
                ))}
                {!medicines.length && (
                  <tr>
                    <td colSpan={4} className="py-8 text-center text-muted-foreground">
                      Add products in{" "}
                      <Link to="/pharmacyos/store" className="font-semibold text-primary">
                        My Store
                      </Link>{" "}
                      before raising an order.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-3xl border border-border bg-card p-6">
          <PanelHeader title="Order history" description="Receive an order to add its quantities into stock." />
          <div className="mt-5 space-y-3">
            {orders.map((order) => (
              <div key={order.id} className="rounded-2xl border border-border/70 p-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <div className="font-semibold">{order.order_number}</div>
                    <div className="text-xs text-muted-foreground">
                      {order.suppliers?.name ?? "No supplier"} ·{" "}
                      {new Date(order.created_at).toLocaleDateString("en-IN")} · {inr(Number(order.total))}
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant={order.status === "received" ? "secondary" : "default"}>{order.status}</Badge>
                    {order.status !== "received" && (
                      <Button size="sm" onClick={() => void markReceived(order.id)} disabled={receivingId === order.id}>
                        {receivingId === order.id ? (
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        ) : (
                          <Check className="mr-2 h-4 w-4" />
                        )}
                        Receive
                      </Button>
                    )}
                  </div>
                </div>
                <ul className="mt-3 grid gap-1 text-xs text-muted-foreground sm:grid-cols-2">
                  {order.purchase_order_items.map((item) => (
                    <li key={item.id}>
                      {item.medicines?.name ?? "Product"} × {item.quantity} — {inr(Number(item.line_total))}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            {!orders.length && <p className="py-6 text-center text-muted-foreground">No purchase orders yet.</p>}
          </div>
        </div>
      </div>
    </PharmacyOSWorkspace>
  );
}
