import { useCallback, useEffect, useMemo, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useSession } from "@/hooks/useSession";

export type Store = {
  id: string;
  name: string;
  code: string;
  city: string | null;
  state: string | null;
  pincode: string | null;
  address: string | null;
  phone: string | null;
  email: string | null;
  gst_number: string | null;
  licence_number: string | null;
  tagline: string | null;
  onboarded: boolean;
  is_active: boolean;
};

export type StoreDraft = Partial<Omit<Store, "id" | "code" | "onboarded" | "is_active">>;

export type Supplier = {
  id: string;
  name: string;
  contact_person: string | null;
  phone: string | null;
  email: string | null;
  city: string | null;
  gst_number: string | null;
};

export type PurchaseOrderItem = {
  id: string;
  quantity: number;
  cost_price: number;
  line_total: number;
  medicines: { name: string; product_code: string } | null;
};

export type PurchaseOrder = {
  id: string;
  order_number: string;
  status: string;
  expected_date: string | null;
  notes: string | null;
  total: number;
  created_at: string;
  suppliers: { name: string } | null;
  purchase_order_items: PurchaseOrderItem[];
};

export type NewMedicine = {
  name: string;
  product_code: string;
  batch: string;
  expiry_date: string;
  mrp: number;
  cost_price: number;
  stock_qty: number;
  reorder_level: number;
  tax_percent: number;
};

const STORE_FIELDS =
  "id, name, code, city, state, pincode, address, phone, email, gst_number, licence_number, tagline, onboarded, is_active";

export function usePharmacyStore() {
  const { user, loading: sessionLoading } = useSession();
  const [store, setStore] = useState<Store | null>(null);
  const [suppliers, setSuppliers] = useState<Supplier[]>([]);
  const [orders, setOrders] = useState<PurchaseOrder[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadAll = useCallback(async (pharmacyId: string) => {
    const [storeRes, supplierRes, orderRes] = await Promise.all([
      supabase.from("pharmacies").select(STORE_FIELDS).eq("id", pharmacyId).maybeSingle(),
      supabase
        .from("suppliers")
        .select("id, name, contact_person, phone, email, city, gst_number")
        .eq("pharmacy_id", pharmacyId)
        .order("name"),
      supabase
        .from("purchase_orders")
        .select(
          "id, order_number, status, expected_date, notes, total, created_at, suppliers(name), purchase_order_items(id, quantity, cost_price, line_total, medicines(name, product_code))",
        )
        .eq("pharmacy_id", pharmacyId)
        .order("created_at", { ascending: false })
        .limit(50),
    ]);

    if (storeRes.data) setStore(storeRes.data as Store);
    if (supplierRes.data) setSuppliers(supplierRes.data as Supplier[]);
    if (orderRes.data) setOrders(orderRes.data as unknown as PurchaseOrder[]);
  }, []);

  useEffect(() => {
    if (sessionLoading) return;
    if (!user) {
      setLoading(false);
      return;
    }
    let active = true;
    (async () => {
      setLoading(true);
      const { data, error: rpcError } = await supabase.rpc("ensure_pharmacy_workspace");
      if (!active) return;
      if (rpcError || !data) {
        setError("We could not open your store workspace. Please try again.");
        setLoading(false);
        return;
      }
      await loadAll(data as string);
      if (!active) return;
      setLoading(false);
    })();
    return () => {
      active = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, sessionLoading]);

  const refresh = useCallback(async () => {
    if (store?.id) await loadAll(store.id);
  }, [store?.id, loadAll]);

  const saveStore = useCallback(
    async (draft: StoreDraft) => {
      if (!store) throw new Error("Store not ready");
      const { data, error: updateError } = await supabase
        .from("pharmacies")
        .update({ ...draft, onboarded: true })
        .eq("id", store.id)
        .select(STORE_FIELDS)
        .maybeSingle();
      if (updateError) throw new Error(updateError.message);
      if (data) setStore(data as Store);
    },
    [store],
  );

  const addMedicine = useCallback(
    async (medicine: NewMedicine) => {
      if (!store) throw new Error("Store not ready");
      const { error: insertError } = await supabase
        .from("medicines")
        .insert({ ...medicine, pharmacy_id: store.id });
      if (insertError) throw new Error(insertError.message);
    },
    [store],
  );

  const saveSupplier = useCallback(
    async (supplier: Omit<Supplier, "id"> & { id?: string }) => {
      if (!store) throw new Error("Store not ready");
      const payload = { ...supplier, pharmacy_id: store.id };
      const { error: saveError } = supplier.id
        ? await supabase.from("suppliers").update(payload).eq("id", supplier.id)
        : await supabase.from("suppliers").insert(payload);
      if (saveError) throw new Error(saveError.message);
      await refresh();
    },
    [store, refresh],
  );

  const deleteSupplier = useCallback(
    async (id: string) => {
      const { error: deleteError } = await supabase.from("suppliers").delete().eq("id", id);
      if (deleteError) throw new Error(deleteError.message);
      await refresh();
    },
    [refresh],
  );

  const placeOrder = useCallback(
    async (input: {
      supplierId: string | null;
      items: { medicineId: string; quantity: number }[];
      expectedDate?: string | null;
      notes?: string | null;
    }) => {
      if (!store) throw new Error("Store not ready");
      const { data, error: rpcError } = await supabase.rpc("create_purchase_order", {
        _pharmacy_id: store.id,
        _supplier_id: input.supplierId,
        _items: input.items,
        _expected_date: input.expectedDate || null,
        _notes: input.notes || null,
      });
      if (rpcError) throw new Error(rpcError.message);
      await refresh();
      const row = Array.isArray(data) ? data[0] : data;
      return row as { order_id: string; order_number: string; total: number };
    },
    [store, refresh],
  );

  const receiveOrder = useCallback(
    async (orderId: string) => {
      const { data, error: rpcError } = await supabase.rpc("receive_purchase_order", { _order_id: orderId });
      if (rpcError) throw new Error(rpcError.message);
      await refresh();
      return (data as number) ?? 0;
    },
    [refresh],
  );

  const needsSetup = useMemo(() => Boolean(store && !store.onboarded), [store]);

  return {
    user,
    store,
    suppliers,
    orders,
    loading: sessionLoading || loading,
    error,
    needsSetup,
    refresh,
    saveStore,
    addMedicine,
    saveSupplier,
    deleteSupplier,
    placeOrder,
    receiveOrder,
  };
}
