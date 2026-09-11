import { useEffect, useMemo, useState } from "react";
import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { Activity, AlertTriangle, Boxes, IndianRupee, Receipt, RefreshCw, Stethoscope } from "lucide-react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PharmacyOSWorkspace, PanelHeader } from "@/components/pharmacyos/PharmacyOSWorkspace";
import { usePharmacyData, inr } from "@/hooks/usePharmacyData";

export const Route = createLazyFileRoute("/pharmacyos/dashboard")({
  component: DashboardWorkspace,
});

const dayKey = (iso: string) => new Date(iso).toISOString().slice(0, 10);
const dayLabel = (key: string) =>
  new Date(key).toLocaleDateString("en-IN", { day: "2-digit", month: "short" });
const timeLabel = (iso: string) =>
  new Date(iso).toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" });

function DashboardWorkspace() {
  const { medicines, invoices, prescriptions, loading, error, user, refresh } = usePharmacyData();
  const [refreshing, setRefreshing] = useState(false);
  const [tickerIndex, setTickerIndex] = useState(0);

  // Live polling so the dashboard reflects new bills and prescriptions.
  useEffect(() => {
    if (!user) return;
    const id = window.setInterval(() => {
      void refresh();
    }, 20000);
    return () => window.clearInterval(id);
  }, [user, refresh]);

  const today = new Date().toISOString().slice(0, 10);

  const todayInvoices = invoices.filter((inv) => dayKey(inv.created_at) === today);
  const todayRevenue = todayInvoices
    .filter((inv) => inv.status === "completed")
    .reduce((sum, inv) => sum + Number(inv.total), 0);

  const pendingRx = prescriptions.filter((rx) => rx.status !== "dispensed");
  const lowStock = medicines.filter((m) => m.stock_qty <= m.reorder_level);
  const stockValue = medicines.reduce((sum, m) => sum + m.stock_qty * Number(m.cost_price), 0);

  const revenueSeries = useMemo(() => {
    const buckets = new Map<string, number>();
    for (let i = 6; i >= 0; i -= 1) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      buckets.set(d.toISOString().slice(0, 10), 0);
    }
    invoices
      .filter((inv) => inv.status === "completed")
      .forEach((inv) => {
        const key = dayKey(inv.created_at);
        if (buckets.has(key)) buckets.set(key, (buckets.get(key) ?? 0) + Number(inv.total));
      });
    return Array.from(buckets.entries()).map(([key, value]) => ({ day: dayLabel(key), revenue: Math.round(value) }));
  }, [invoices]);

  const stockSeries = useMemo(
    () =>
      [...medicines]
        .sort((a, b) => a.stock_qty - b.stock_qty)
        .slice(0, 6)
        .map((m) => ({ name: m.name.length > 14 ? `${m.name.slice(0, 13)}…` : m.name, stock: m.stock_qty, reorder: m.reorder_level })),
    [medicines],
  );

  const ticker = useMemo(() => {
    const events = [
      ...invoices.slice(0, 8).map((inv) => ({
        at: inv.created_at,
        text: `Invoice ${inv.invoice_number} · ${inr(Number(inv.total))} · ${inv.status}`,
      })),
      ...prescriptions.slice(0, 8).map((rx) => ({
        at: rx.received_at,
        text: `Prescription ${rx.prescription_number} · ${rx.patient_name} · ${rx.status}`,
      })),
      ...lowStock.slice(0, 5).map((m) => ({
        at: new Date().toISOString(),
        text: `Low stock · ${m.name} · ${m.stock_qty} left (reorder at ${m.reorder_level})`,
      })),
    ].sort((a, b) => new Date(b.at).getTime() - new Date(a.at).getTime());
    return events.slice(0, 12);
  }, [invoices, prescriptions, lowStock]);

  useEffect(() => {
    if (ticker.length < 2) return;
    const id = window.setInterval(() => setTickerIndex((i) => (i + 1) % ticker.length), 3500);
    return () => window.clearInterval(id);
  }, [ticker.length]);

  const onRefresh = async () => {
    setRefreshing(true);
    try {
      await refresh();
    } finally {
      setRefreshing(false);
    }
  };

  const kpis = [
    { label: "Revenue today", value: inr(todayRevenue), icon: IndianRupee, note: `${todayInvoices.length} bills today` },
    { label: "Invoices (recent)", value: String(invoices.length), icon: Receipt, note: "Last 25 bills synced" },
    { label: "Prescriptions pending", value: String(pendingRx.length), icon: Stethoscope, note: `${prescriptions.length} in queue` },
    { label: "Stock value", value: inr(stockValue), icon: Boxes, note: `${medicines.length} products tracked` },
  ];

  const currentTick = ticker[tickerIndex % Math.max(ticker.length, 1)];

  return (
    <PharmacyOSWorkspace
      title="Dashboard"
      subtitle="Live invoices, prescriptions and stock levels from your own pharmacy workspace."
      loading={loading}
      requiresAuth={!user}
      error={error}
    >
      <div className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border bg-card px-4 py-3">
          <div className="flex min-w-0 items-center gap-3">
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-70" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Live</span>
            <p key={tickerIndex} className="animate-in fade-in slide-in-from-bottom-1 truncate text-sm">
              {currentTick ? (
                <>
                  <span className="text-muted-foreground">{timeLabel(currentTick.at)} · </span>
                  {currentTick.text}
                </>
              ) : (
                "No activity yet — create a bill in Billing to see live events."
              )}
            </p>
          </div>
          <Button variant="outline" size="sm" onClick={onRefresh} disabled={refreshing}>
            <RefreshCw className={`mr-2 h-4 w-4 ${refreshing ? "animate-spin" : ""}`} /> Refresh
          </Button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {kpis.map((kpi) => (
            <div key={kpi.label} className="rounded-2xl border border-border bg-card p-5">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">{kpi.label}</span>
                <kpi.icon className="h-4 w-4 text-primary" />
              </div>
              <div className="mt-2 text-2xl font-bold">{kpi.value}</div>
              <div className="mt-1 text-xs text-muted-foreground">{kpi.note}</div>
            </div>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-5">
            <PanelHeader title="Revenue · last 7 days" description="Completed invoices only." />
            <div className="mt-4 h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={revenueSeries}>
                  <defs>
                    <linearGradient id="rev" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity={0.35} />
                      <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-border" vertical={false} />
                  <XAxis dataKey="day" tickLine={false} axisLine={false} fontSize={12} />
                  <YAxis tickLine={false} axisLine={false} fontSize={12} width={60} />
                  <Tooltip formatter={(value: number) => inr(value)} />
                  <Area type="monotone" dataKey="revenue" stroke="hsl(var(--primary))" fill="url(#rev)" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-5">
            <PanelHeader title="Lowest stock levels" description="Stock versus reorder level." />
            <div className="mt-4 h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={stockSeries}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-border" vertical={false} />
                  <XAxis dataKey="name" tickLine={false} axisLine={false} fontSize={11} interval={0} />
                  <YAxis tickLine={false} axisLine={false} fontSize={12} width={40} />
                  <Tooltip />
                  <Bar dataKey="stock" fill="hsl(var(--primary))" radius={[6, 6, 0, 0]} />
                  <Bar dataKey="reorder" fill="hsl(var(--muted-foreground))" radius={[6, 6, 0, 0]} opacity={0.35} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-border bg-card p-5 lg:col-span-2">
            <PanelHeader
              title="Latest invoices"
              description="Straight from your billing module."
              action={
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/pharmacyos/billing">Open Billing</Link>
                </Button>
              }
            />
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="text-left text-xs uppercase tracking-wider text-muted-foreground">
                  <tr>
                    <th className="pb-2">Invoice</th>
                    <th className="pb-2">Time</th>
                    <th className="pb-2 text-right">Total</th>
                    <th className="pb-2 text-right">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {invoices.slice(0, 8).map((inv) => (
                    <tr key={inv.id} className="border-t border-border">
                      <td className="py-2.5 font-medium">{inv.invoice_number}</td>
                      <td className="py-2.5 text-muted-foreground">{timeLabel(inv.created_at)}</td>
                      <td className="py-2.5 text-right font-semibold">{inr(Number(inv.total))}</td>
                      <td className="py-2.5 text-right">
                        <Badge variant={inv.status === "completed" ? "default" : "secondary"}>{inv.status}</Badge>
                      </td>
                    </tr>
                  ))}
                  {!invoices.length && (
                    <tr>
                      <td colSpan={4} className="py-6 text-center text-muted-foreground">
                        No invoices yet.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-5">
              <PanelHeader
                title="Prescription queue"
                action={
                  <Button variant="ghost" size="sm" asChild>
                    <Link to="/pharmacyos/prescriptions">Review</Link>
                  </Button>
                }
              />
              <ul className="mt-4 space-y-3">
                {prescriptions.slice(0, 5).map((rx) => (
                  <li key={rx.id} className="flex items-center justify-between gap-3 text-sm">
                    <div className="min-w-0">
                      <div className="truncate font-medium">{rx.patient_name}</div>
                      <div className="truncate text-xs text-muted-foreground">{rx.prescription_number}</div>
                    </div>
                    <Badge variant="secondary">{rx.status}</Badge>
                  </li>
                ))}
                {!prescriptions.length && <li className="text-sm text-muted-foreground">Queue is empty.</li>}
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5">
              <PanelHeader
                title="Stock alerts"
                action={
                  <Button variant="ghost" size="sm" asChild>
                    <Link to="/pharmacyos/inventory">Inventory</Link>
                  </Button>
                }
              />
              <ul className="mt-4 space-y-3">
                {lowStock.slice(0, 5).map((m) => (
                  <li key={m.id} className="flex items-center justify-between gap-3 text-sm">
                    <div className="flex min-w-0 items-center gap-2">
                      <AlertTriangle className="h-4 w-4 shrink-0 text-amber-500" />
                      <span className="truncate">{m.name}</span>
                    </div>
                    <span className="shrink-0 font-semibold">{m.stock_qty} left</span>
                  </li>
                ))}
                {!lowStock.length && (
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Activity className="h-4 w-4 text-primary" /> All products above reorder level.
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PharmacyOSWorkspace>
  );
}
