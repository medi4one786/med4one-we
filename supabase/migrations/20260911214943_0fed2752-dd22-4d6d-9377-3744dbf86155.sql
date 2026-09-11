REVOKE ALL ON FUNCTION public.create_purchase_order(uuid, uuid, jsonb, date, text) FROM PUBLIC, anon;
REVOKE ALL ON FUNCTION public.receive_purchase_order(uuid) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.create_purchase_order(uuid, uuid, jsonb, date, text) TO authenticated, service_role;
GRANT EXECUTE ON FUNCTION public.receive_purchase_order(uuid) TO authenticated, service_role;