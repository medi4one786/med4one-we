import { useCallback, useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useSession } from "@/hooks/useSession";

export type Medicine = {
  id: string;
  product_code: string;
  name: string;
  batch: string;
  expiry_date: string;
  mrp: number;
  tax_percent: number;
  stock_qty: number;
  reorder_level: number;
  cost_price: number;
};

export type PrescriptionItem = {
  id: string;
  medicine_name: string;
  dosage: string;
};

export type Prescription = {
  id: string;
  prescription_number: string;
  patient_name: string;
  doctor_name: string;
  status: string;
  confidence: number;
  received_at: string;
  prescription_items: PrescriptionItem[];
};

export type Invoice = {
  id: string;
  invoice_number: string;
  subtotal: number;
  tax_total: number;
  total: number;
  status: string;
  created_at: string;
};

export type CartLine = { medicineId: string; quantity: number };

export function usePharmacyData() {
  const { user, loading: sessionLoading } = useSession();
  const [pharmacyId, setPharmacyId] = useState<string | null>(null);
  const [medicines, setMedicines] = useState<Medicine[]>([]);
  const [prescriptions, setPrescriptions] = useState<Prescription[]>([]);
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const refresh = useCallback(
    async (id?: string) => {
      const target = id ?? pharmacyId;
      if (!target) return;
      const [meds, rx, inv] = await Promise.all([
        supabase
          .from("medicines")
          .select(
            "id, product_code, name, batch, expiry_date, mrp, tax_percent, stock_qty, reorder_level, cost_price",
          )
          .eq("pharmacy_id", target)
          .order("name"),
        supabase
          .from("prescriptions")
          .select(
            "id, prescription_number, patient_name, doctor_name, status, confidence, received_at, prescription_items(id, medicine_name, dosage)",
          )
          .eq("pharmacy_id", target)
          .order("received_at", { ascending: false }),
        supabase
          .from("invoices")
          .select("id, invoice_number, subtotal, tax_total, total, status, created_at")
          .eq("pharmacy_id", target)
          .order("created_at", { ascending: false })
          .limit(25),
      ]);

      if (meds.data) setMedicines(meds.data as Medicine[]);
      if (rx.data) setPrescriptions(rx.data as Prescription[]);
      if (inv.data) setInvoices(inv.data as Invoice[]);
    },
    [pharmacyId],
  );

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
        setError("We could not open your workspace. Please try again.");
        setLoading(false);
        return;
      }
      setPharmacyId(data as string);
      await refresh(data as string);
      if (!active) return;
      setLoading(false);
    })();
    return () => {
      active = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, sessionLoading]);

  const completeInvoice = useCallback(
    async (lines: CartLine[], status: "completed" | "held" = "completed") => {
      if (!pharmacyId) throw new Error("Workspace not ready");
      const { data, error: rpcError } = await supabase.rpc("complete_pharmacy_invoice", {
        _pharmacy_id: pharmacyId,
        _items: lines,
        _status: status,
      });
      if (rpcError) throw new Error(rpcError.message);
      await refresh();
      const row = Array.isArray(data) ? data[0] : data;
      return row as { invoice_id: string; invoice_number: string; total: number };
    },
    [pharmacyId, refresh],
  );

  const createReorder = useCallback(
    async (lines: CartLine[]) => {
      if (!pharmacyId) throw new Error("Workspace not ready");
      const { data, error: rpcError } = await supabase.rpc("create_pharmacy_reorder", {
        _pharmacy_id: pharmacyId,
        _items: lines,
      });
      if (rpcError) throw new Error(rpcError.message);
      await refresh();
      return (data as number) ?? 0;
    },
    [pharmacyId, refresh],
  );

  const updatePrescriptionStatus = useCallback(
    async (id: string, status: string) => {
      const { error: updateError } = await supabase.from("prescriptions").update({ status }).eq("id", id);
      if (updateError) throw new Error(updateError.message);
      setPrescriptions((prev) => prev.map((rx) => (rx.id === id ? { ...rx, status } : rx)));
    },
    [],
  );

  return {
    user,
    pharmacyId,
    medicines,
    prescriptions,
    invoices,
    loading: sessionLoading || loading,
    error,
    refresh,
    completeInvoice,
    createReorder,
    updatePrescriptionStatus,
  };
}

export const inr = (value: number) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(value);
