ALTER TABLE public.pharmacies
  ADD COLUMN IF NOT EXISTS address text,
  ADD COLUMN IF NOT EXISTS state text,
  ADD COLUMN IF NOT EXISTS pincode text,
  ADD COLUMN IF NOT EXISTS phone text,
  ADD COLUMN IF NOT EXISTS email text,
  ADD COLUMN IF NOT EXISTS licence_number text,
  ADD COLUMN IF NOT EXISTS tagline text,
  ADD COLUMN IF NOT EXISTS onboarded boolean NOT NULL DEFAULT false;

CREATE TABLE IF NOT EXISTS public.suppliers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  pharmacy_id uuid NOT NULL REFERENCES public.pharmacies(id) ON DELETE CASCADE,
  name text NOT NULL,
  contact_person text,
  phone text,
  email text,
  city text,
  gst_number text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.suppliers TO authenticated;
GRANT ALL ON public.suppliers TO service_role;
ALTER TABLE public.suppliers ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Members manage their suppliers" ON public.suppliers
  FOR ALL TO authenticated
  USING (public.has_pharmacy_access(pharmacy_id, auth.uid()))
  WITH CHECK (public.has_pharmacy_access(pharmacy_id, auth.uid()));

CREATE TABLE IF NOT EXISTS public.purchase_orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  pharmacy_id uuid NOT NULL REFERENCES public.pharmacies(id) ON DELETE CASCADE,
  supplier_id uuid REFERENCES public.suppliers(id) ON DELETE SET NULL,
  order_number text NOT NULL,
  status text NOT NULL DEFAULT 'draft',
  expected_date date,
  notes text,
  total numeric(12,2) NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.purchase_orders TO authenticated;
GRANT ALL ON public.purchase_orders TO service_role;
ALTER TABLE public.purchase_orders ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Members manage their purchase orders" ON public.purchase_orders
  FOR ALL TO authenticated
  USING (public.has_pharmacy_access(pharmacy_id, auth.uid()))
  WITH CHECK (public.has_pharmacy_access(pharmacy_id, auth.uid()));

CREATE TABLE IF NOT EXISTS public.purchase_order_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  purchase_order_id uuid NOT NULL REFERENCES public.purchase_orders(id) ON DELETE CASCADE,
  medicine_id uuid NOT NULL REFERENCES public.medicines(id) ON DELETE CASCADE,
  quantity integer NOT NULL CHECK (quantity > 0),
  cost_price numeric(10,2) NOT NULL DEFAULT 0,
  line_total numeric(12,2) NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.purchase_order_items TO authenticated;
GRANT ALL ON public.purchase_order_items TO service_role;
ALTER TABLE public.purchase_order_items ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Members manage their purchase order items" ON public.purchase_order_items
  FOR ALL TO authenticated
  USING (EXISTS (
    SELECT 1 FROM public.purchase_orders po
    WHERE po.id = purchase_order_items.purchase_order_id
      AND public.has_pharmacy_access(po.pharmacy_id, auth.uid())
  ))
  WITH CHECK (EXISTS (
    SELECT 1 FROM public.purchase_orders po
    WHERE po.id = purchase_order_items.purchase_order_id
      AND public.has_pharmacy_access(po.pharmacy_id, auth.uid())
  ));

CREATE INDEX IF NOT EXISTS suppliers_pharmacy_idx ON public.suppliers(pharmacy_id);
CREATE INDEX IF NOT EXISTS purchase_orders_pharmacy_idx ON public.purchase_orders(pharmacy_id);
CREATE INDEX IF NOT EXISTS purchase_order_items_order_idx ON public.purchase_order_items(purchase_order_id);

CREATE TRIGGER update_suppliers_updated_at BEFORE UPDATE ON public.suppliers
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
CREATE TRIGGER update_purchase_orders_updated_at BEFORE UPDATE ON public.purchase_orders
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

CREATE OR REPLACE FUNCTION public.create_purchase_order(
  _pharmacy_id uuid,
  _supplier_id uuid,
  _items jsonb,
  _expected_date date DEFAULT NULL,
  _notes text DEFAULT NULL
)
RETURNS TABLE(order_id uuid, order_number text, total numeric)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  _order_id uuid;
  _number text;
  _total numeric(12,2) := 0;
  _item jsonb;
  _medicine public.medicines;
  _qty integer;
BEGIN
  IF NOT public.has_pharmacy_access(_pharmacy_id, auth.uid()) THEN
    RAISE EXCEPTION 'Not authorised';
  END IF;

  _number := 'PO-' || to_char(now(), 'YYMMDD') || '-' || lpad(
    ((SELECT count(*) FROM public.purchase_orders WHERE pharmacy_id = _pharmacy_id) + 1)::text, 4, '0');

  INSERT INTO public.purchase_orders (pharmacy_id, supplier_id, order_number, status, expected_date, notes)
  VALUES (_pharmacy_id, _supplier_id, _number, 'placed', _expected_date, _notes)
  RETURNING id INTO _order_id;

  FOR _item IN SELECT * FROM jsonb_array_elements(_items) LOOP
    SELECT * INTO _medicine FROM public.medicines
      WHERE id = (_item->>'medicineId')::uuid AND pharmacy_id = _pharmacy_id;
    IF _medicine.id IS NULL THEN
      CONTINUE;
    END IF;
    _qty := GREATEST(1, (_item->>'quantity')::int);
    INSERT INTO public.purchase_order_items (purchase_order_id, medicine_id, quantity, cost_price, line_total)
    VALUES (_order_id, _medicine.id, _qty, _medicine.cost_price, _medicine.cost_price * _qty);
    _total := _total + (_medicine.cost_price * _qty);
  END LOOP;

  UPDATE public.purchase_orders SET total = _total WHERE id = _order_id;

  RETURN QUERY SELECT _order_id, _number, _total;
END;
$$;

CREATE OR REPLACE FUNCTION public.receive_purchase_order(_order_id uuid)
RETURNS integer
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  _pharmacy_id uuid;
  _status text;
  _units integer := 0;
  _row record;
BEGIN
  SELECT pharmacy_id, status INTO _pharmacy_id, _status FROM public.purchase_orders WHERE id = _order_id;
  IF _pharmacy_id IS NULL OR NOT public.has_pharmacy_access(_pharmacy_id, auth.uid()) THEN
    RAISE EXCEPTION 'Not authorised';
  END IF;
  IF _status = 'received' THEN
    RETURN 0;
  END IF;

  FOR _row IN SELECT medicine_id, quantity FROM public.purchase_order_items WHERE purchase_order_id = _order_id LOOP
    UPDATE public.medicines SET stock_qty = stock_qty + _row.quantity WHERE id = _row.medicine_id;
    INSERT INTO public.stock_movements (pharmacy_id, medicine_id, movement_type, quantity, reference)
    VALUES (_pharmacy_id, _row.medicine_id, 'purchase', _row.quantity, 'Purchase order received');
    _units := _units + _row.quantity;
  END LOOP;

  UPDATE public.purchase_orders SET status = 'received' WHERE id = _order_id;
  RETURN _units;
END;
$$;