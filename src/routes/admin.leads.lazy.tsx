import { useEffect, useMemo, useState } from "react";
import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { Download, Loader2, RefreshCw, Search, ShieldAlert } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { useIsAdmin } from "@/hooks/useSession";

export const Route = createLazyFileRoute("/admin/leads")({
  component: LeadConsole,
});

type Lead = {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  pharmacy_name: string;
  message: string | null;
  source: string;
  status: string;
  created_at: string;
};

const STATUSES = ["new", "contacted", "demo_scheduled", "won", "lost"] as const;

const statusLabel: Record<string, string> = {
  new: "New",
  contacted: "Contacted",
  demo_scheduled: "Demo scheduled",
  won: "Won",
  lost: "Lost",
};

function LeadConsole() {
  const { isAdmin, loading, user } = useIsAdmin();
  const [leads, setLeads] = useState<Lead[]>([]);
  const [fetching, setFetching] = useState(true);
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const load = async () => {
    setFetching(true);
    const { data, error } = await supabase
      .from("demo_requests")
      .select("id, full_name, email, phone, pharmacy_name, message, source, status, created_at")
      .order("created_at", { ascending: false });
    setFetching(false);
    if (error) {
      toast.error("Could not load leads.");
      return;
    }
    setLeads((data ?? []) as Lead[]);
  };

  useEffect(() => {
    if (!loading && isAdmin) void load();
  }, [loading, isAdmin]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return leads.filter((lead) => {
      const matchesStatus = statusFilter === "all" || lead.status === statusFilter;
      const matchesQuery =
        !q ||
        [lead.full_name, lead.email, lead.phone, lead.pharmacy_name, lead.source]
          .join(" ")
          .toLowerCase()
          .includes(q);
      return matchesStatus && matchesQuery;
    });
  }, [leads, query, statusFilter]);

  const updateStatus = async (id: string, status: string) => {
    const previous = leads;
    setLeads((prev) => prev.map((lead) => (lead.id === id ? { ...lead, status } : lead)));
    const { error } = await supabase.from("demo_requests").update({ status }).eq("id", id);
    if (error) {
      setLeads(previous);
      toast.error("Could not update the status.");
      return;
    }
    toast.success("Status updated.");
  };

  const exportCsv = () => {
    const header = ["Created", "Name", "Email", "Phone", "Pharmacy", "Source", "Status", "Message"];
    const rows = filtered.map((lead) => [
      new Date(lead.created_at).toISOString(),
      lead.full_name,
      lead.email,
      lead.phone,
      lead.pharmacy_name,
      lead.source,
      lead.status,
      (lead.message ?? "").replace(/\s+/g, " "),
    ]);
    const csv = [header, ...rows]
      .map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(","))
      .join("\n");
    const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = `med4one-leads-${new Date().toISOString().slice(0, 10)}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center pt-28">
        <Loader2 className="h-6 w-6 animate-spin text-primary" />
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="flex min-h-screen items-center justify-center px-4 pt-28 pb-20">
        <div className="max-w-md space-y-4 rounded-3xl border border-border bg-card p-10 text-center shadow-sm">
          <ShieldAlert className="mx-auto h-10 w-10 text-primary" />
          <h1 className="text-2xl font-bold">Med4One team access only</h1>
          <p className="text-sm text-muted-foreground">
            {user
              ? "This console is limited to Med4One administrators."
              : "Sign in with your Med4One admin account to view enquiries."}
          </p>
          <Button asChild>
            <Link to={user ? "/" : "/login"}>{user ? "Back to home" : "Sign in"}</Link>
          </Button>
        </div>
      </div>
    );
  }

  const counts = STATUSES.map((status) => ({
    status,
    count: leads.filter((lead) => lead.status === status).length,
  }));

  return (
    <div className="min-h-screen pt-28 pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold md:text-4xl">Lead console</h1>
            <p className="text-muted-foreground">
              Every Book a Demo enquiry, in one place. {leads.length} total.
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" onClick={() => void load()} disabled={fetching}>
              <RefreshCw className={`mr-2 h-4 w-4 ${fetching ? "animate-spin" : ""}`} /> Refresh
            </Button>
            <Button onClick={exportCsv} disabled={!filtered.length}>
              <Download className="mr-2 h-4 w-4" /> Export CSV
            </Button>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {counts.map((item) => (
            <div key={item.status} className="rounded-2xl border border-border bg-card p-5">
              <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                {statusLabel[item.status]}
              </div>
              <div className="mt-2 text-2xl font-bold">{item.count}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search name, email, phone, pharmacy..."
              className="h-12 rounded-xl pl-10"
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="h-12 w-full rounded-xl sm:w-56">
              <SelectValue placeholder="All statuses" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All statuses</SelectItem>
              {STATUSES.map((status) => (
                <SelectItem key={status} value={status}>
                  {statusLabel[status]}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="mt-6 overflow-x-auto rounded-3xl border border-border bg-card">
          <table className="w-full min-w-[880px] text-sm">
            <thead className="bg-muted/50 text-left text-xs uppercase tracking-wide text-muted-foreground">
              <tr>
                <th className="px-5 py-4">Received</th>
                <th className="px-5 py-4">Contact</th>
                <th className="px-5 py-4">Pharmacy</th>
                <th className="px-5 py-4">Source</th>
                <th className="px-5 py-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {fetching && (
                <tr>
                  <td colSpan={5} className="px-5 py-10 text-center text-muted-foreground">
                    Loading enquiries...
                  </td>
                </tr>
              )}
              {!fetching && !filtered.length && (
                <tr>
                  <td colSpan={5} className="px-5 py-10 text-center text-muted-foreground">
                    No enquiries match this view yet.
                  </td>
                </tr>
              )}
              {filtered.map((lead) => (
                <tr key={lead.id} className="border-t border-border align-top">
                  <td className="px-5 py-4 whitespace-nowrap text-muted-foreground">
                    {new Date(lead.created_at).toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" })}
                  </td>
                  <td className="px-5 py-4">
                    <div className="font-semibold">{lead.full_name}</div>
                    <a href={`mailto:${lead.email}`} className="block text-primary hover:underline">
                      {lead.email}
                    </a>
                    <a href={`tel:+91${lead.phone}`} className="block text-muted-foreground">
                      +91 {lead.phone}
                    </a>
                    {lead.message && <p className="mt-2 max-w-sm text-xs text-muted-foreground">{lead.message}</p>}
                  </td>
                  <td className="px-5 py-4 font-medium">{lead.pharmacy_name}</td>
                  <td className="px-5 py-4">
                    <Badge variant="secondary">{lead.source}</Badge>
                  </td>
                  <td className="px-5 py-4">
                    <Select value={lead.status} onValueChange={(value) => void updateStatus(lead.id, value)}>
                      <SelectTrigger className="h-10 w-44 rounded-xl">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {STATUSES.map((status) => (
                          <SelectItem key={status} value={status}>
                            {statusLabel[status]}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
