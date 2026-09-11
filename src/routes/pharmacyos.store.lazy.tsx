import { useEffect, useMemo, useState } from "react";
import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { Loader2, PackagePlus, Save, Store as StoreIcon, Truck } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { PharmacyOSWorkspace, PanelHeader } from "@/components/pharmacyos/PharmacyOSWorkspace";
import { usePharmacyStore, type StoreDraft } from "@/hooks/usePharmacyStore";
import { usePharmacyData, inr } from "@/hooks/usePharmacyData";

export const Route = createLazyFileRoute("/pharmacyos/store")({
  component: StoreWorkspace,
});

const emptyMedicine = {
  name: "",
  product_code: "",
  batch: "",
  expiry_date: "",
  mrp: "",
  cost_price: "",
  stock_qty: "",
  reorder_level: "10",
  tax_percent: "12",
};

function StoreWorkspace() {
  const { store, loading, error, user, needsSetup, saveStore, addMedicine } = usePharmacyStore();
  const { medicines, refresh: refreshMedicines } = usePharmacyData();
  const [draft, setDraft] = useState<StoreDraft>({});
  const [savingStore, setSavingStore] = useState(false);
  const [product, setProduct] = useState(emptyMedicine);
  const [addingProduct, setAddingProduct] = useState(false);

  useEffect(() => {
    if (!store) return;
    setDraft({
      name: store.name,
      tagline: store.tagline ?? "",
      address: store.address ?? "",
      city: store.city ?? "",
      state: store.state ?? "",
      pincode: store.pincode ?? "",
      phone: store.phone ?? "",
      email: store.email ?? "",
      gst_number: store.gst_number ?? "",
      licence_number: store.licence_number ?? "",
    });
  }, [store]);

  const stockValue = useMemo(
    () => medicines.reduce((sum, medicine) => sum + medicine.cost_price * medicine.stock_qty, 0),
    [medicines],
  );
  const lowStock = medicines.filter((medicine) => medicine.stock_qty <= medicine.reorder_level).length;

  const set = (key: keyof StoreDraft) => (value: string) => setDraft((prev) => ({ ...prev, [key]: value }));

  const submitStore = async () => {
    if (!draft.name?.trim()) {
      toast.error("Your store needs a name.");
      return;
    }
    setSavingStore(true);
    try {
      await saveStore(draft);
      toast.success("Store details saved.");
    } catch (saveError) {
      toast.error(saveError instanceof Error ? saveError.message : "Could not save your store.");
    } finally {
      setSavingStore(false);
    }
  };

  const submitProduct = async () => {
    if (!product.name.trim() || !product.product_code.trim() || !product.expiry_date) {
      toast.error("Product name, code and expiry date are required.");
      return;
    }
    setAddingProduct(true);
    try {
      await addMedicine({
        name: product.name.trim(),
        product_code: product.product_code.trim(),
        batch: product.batch.trim() || "B-1",
        expiry_date: product.expiry_date,
        mrp: Number(product.mrp) || 0,
        cost_price: Number(product.cost_price) || 0,
        stock_qty: Number(product.stock_qty) || 0,
        reorder_level: Number(product.reorder_level) || 10,
        tax_percent: Number(product.tax_percent) || 0,
      });
      setProduct(emptyMedicine);
      await refreshMedicines();
      toast.success("Product added to your catalogue.");
    } catch (addError) {
      toast.error(addError instanceof Error ? addError.message : "Could not add the product.");
    } finally {
      setAddingProduct(false);
    }
  };

  return (
    <PharmacyOSWorkspace
      title="My Pharmacy Store"
      subtitle="Create your store, keep your licence details current and build your product catalogue."
      loading={loading}
      requiresAuth={!loading && !user}
      error={error}
    >
      <div className="space-y-6">
        {needsSetup && (
          <div className="rounded-2xl border border-primary/30 bg-primary/5 p-5 text-sm">
            <p className="font-semibold">Finish setting up your store</p>
            <p className="mt-1 text-muted-foreground">
              Add your store name, address and licence details below. These appear on invoices and purchase orders.
            </p>
          </div>
        )}

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Store code", value: store?.code ?? "—" },
            { label: "Products", value: String(medicines.length) },
            { label: "Low stock", value: String(lowStock) },
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
            title="Store profile"
            description="Saved to your pharmacy record and used across billing and orders."
            action={
              <Button onClick={() => void submitStore()} disabled={savingStore}>
                {savingStore ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Save className="mr-2 h-4 w-4" />}
                Save store
              </Button>
            }
          />

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <Field label="Store name" value={draft.name ?? ""} onChange={set("name")} placeholder="Med4One Pharmacy" />
            <Field label="Tagline" value={draft.tagline ?? ""} onChange={set("tagline")} placeholder="Your neighbourhood chemist" />
            <div className="md:col-span-2 space-y-2">
              <Label htmlFor="store-address">Address</Label>
              <Textarea
                id="store-address"
                value={draft.address ?? ""}
                onChange={(event) => set("address")(event.target.value)}
                placeholder="Shop number, street, landmark"
                className="min-h-24 rounded-xl"
              />
            </div>
            <Field label="City" value={draft.city ?? ""} onChange={set("city")} />
            <Field label="State" value={draft.state ?? ""} onChange={set("state")} />
            <Field label="PIN code" value={draft.pincode ?? ""} onChange={set("pincode")} />
            <Field label="Phone" value={draft.phone ?? ""} onChange={set("phone")} placeholder="10-digit number" />
            <Field label="Email" value={draft.email ?? ""} onChange={set("email")} type="email" />
            <Field label="GST number" value={draft.gst_number ?? ""} onChange={set("gst_number")} />
            <Field label="Drug licence number" value={draft.licence_number ?? ""} onChange={set("licence_number")} />
          </div>
        </div>

        <div className="rounded-3xl border border-border bg-card p-6">
          <PanelHeader
            title="Add a product"
            description="New products appear instantly in billing, inventory and purchase orders."
            action={
              <Button onClick={() => void submitProduct()} disabled={addingProduct}>
                {addingProduct ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <PackagePlus className="mr-2 h-4 w-4" />
                )}
                Add product
              </Button>
            }
          />
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <Field
              label="Product name"
              value={product.name}
              onChange={(value) => setProduct((prev) => ({ ...prev, name: value }))}
              placeholder="Paracetamol 650mg"
            />
            <Field
              label="Product code"
              value={product.product_code}
              onChange={(value) => setProduct((prev) => ({ ...prev, product_code: value }))}
              placeholder="MED-1024"
            />
            <Field
              label="Batch"
              value={product.batch}
              onChange={(value) => setProduct((prev) => ({ ...prev, batch: value }))}
              placeholder="B-2291"
            />
            <Field
              label="Expiry date"
              type="date"
              value={product.expiry_date}
              onChange={(value) => setProduct((prev) => ({ ...prev, expiry_date: value }))}
            />
            <Field
              label="MRP (₹)"
              type="number"
              value={product.mrp}
              onChange={(value) => setProduct((prev) => ({ ...prev, mrp: value }))}
            />
            <Field
              label="Cost price (₹)"
              type="number"
              value={product.cost_price}
              onChange={(value) => setProduct((prev) => ({ ...prev, cost_price: value }))}
            />
            <Field
              label="Opening stock"
              type="number"
              value={product.stock_qty}
              onChange={(value) => setProduct((prev) => ({ ...prev, stock_qty: value }))}
            />
            <Field
              label="Reorder level"
              type="number"
              value={product.reorder_level}
              onChange={(value) => setProduct((prev) => ({ ...prev, reorder_level: value }))}
            />
            <Field
              label="GST %"
              type="number"
              value={product.tax_percent}
              onChange={(value) => setProduct((prev) => ({ ...prev, tax_percent: value }))}
            />
          </div>
        </div>

        <div className="rounded-3xl border border-border bg-card p-6">
          <PanelHeader title="Product catalogue" description="Everything currently listed in your store." />
          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[720px] text-sm">
              <thead className="text-left text-xs uppercase tracking-wide text-muted-foreground">
                <tr>
                  <th className="py-3">Product</th>
                  <th className="py-3">Batch / Expiry</th>
                  <th className="py-3">MRP</th>
                  <th className="py-3">Stock</th>
                </tr>
              </thead>
              <tbody>
                {medicines.map((medicine) => (
                  <tr key={medicine.id} className="border-t border-border/60">
                    <td className="py-3">
                      <div className="font-semibold">{medicine.name}</div>
                      <div className="text-xs text-muted-foreground">{medicine.product_code}</div>
                    </td>
                    <td className="py-3 text-muted-foreground">
                      {medicine.batch} · {new Date(medicine.expiry_date).toLocaleDateString("en-IN")}
                    </td>
                    <td className="py-3">{inr(medicine.mrp)}</td>
                    <td className="py-3">
                      {medicine.stock_qty <= medicine.reorder_level ? (
                        <Badge variant="destructive">{medicine.stock_qty} left</Badge>
                      ) : (
                        <span className="font-semibold">{medicine.stock_qty}</span>
                      )}
                    </td>
                  </tr>
                ))}
                {!medicines.length && (
                  <tr>
                    <td colSpan={4} className="py-8 text-center text-muted-foreground">
                      No products yet — add your first product above.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button variant="outline" asChild>
            <Link to="/pharmacyos/orders">
              <Truck className="mr-2 h-4 w-4" /> Place a supplier order
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/pharmacyos/inventory">
              <StoreIcon className="mr-2 h-4 w-4" /> Manage stock
            </Link>
          </Button>
        </div>
      </div>
    </PharmacyOSWorkspace>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
}) {
  const id = `field-${label.toLowerCase().replace(/[^a-z]+/g, "-")}`;
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        className="h-12 rounded-xl"
      />
    </div>
  );
}
