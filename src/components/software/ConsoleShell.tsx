import type { ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Loader2, Lock, Bot, BarChart3, Building2, LayoutDashboard } from "lucide-react";
import { Button } from "@/components/ui/button";

const consoles = [
  { name: "PharmacyOS", href: "/pharmacyos/billing", icon: LayoutDashboard },
  { name: "AI", href: "/ai", icon: Bot },
  { name: "Business Intelligence", href: "/bi", icon: BarChart3 },
  { name: "Multi-Store", href: "/multi-store", icon: Building2 },
] as const;

export function ConsoleShell({
  eyebrow,
  title,
  subtitle,
  loading,
  requiresAuth,
  error,
  children,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  loading?: boolean;
  requiresAuth?: boolean;
  error?: string | null;
  children: ReactNode;
}) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  return (
    <div className="min-h-screen bg-muted/30 pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="pt-4 space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">{eyebrow}</span>
          <h1 className="text-2xl font-bold md:text-3xl">{title}</h1>
          <p className="max-w-2xl text-sm text-muted-foreground">{subtitle}</p>
        </div>

        <nav className="mt-6 flex gap-2 overflow-x-auto rounded-2xl border border-border bg-card p-2">
          {consoles.map((item) => {
            const active = pathname.startsWith(item.href) || (item.href === "/pharmacyos/billing" && pathname.startsWith("/pharmacyos"));
            return (
              <Link
                key={item.href}
                to={item.href}
                className={`inline-flex items-center gap-2 whitespace-nowrap rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors ${
                  active ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted"
                }`}
              >
                <item.icon className="h-4 w-4" />
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="mt-6">
          {loading ? (
            <div className="flex min-h-[40vh] items-center justify-center rounded-3xl border border-border bg-card">
              <Loader2 className="h-6 w-6 animate-spin text-primary" />
            </div>
          ) : requiresAuth ? (
            <div className="mx-auto max-w-md space-y-4 rounded-3xl border border-border bg-card p-10 text-center shadow-sm">
              <Lock className="mx-auto h-10 w-10 text-primary" />
              <h2 className="text-xl font-bold">Sign in to see your live data</h2>
              <p className="text-sm text-muted-foreground">
                This console reads your pharmacy's own stock, billing and prescription records.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                <Button asChild>
                  <Link to="/login">Sign in</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/book-demo">Book a demo</Link>
                </Button>
              </div>
            </div>
          ) : error ? (
            <div className="rounded-3xl border border-destructive/30 bg-card p-10 text-center text-sm text-destructive">
              {error}
            </div>
          ) : (
            children
          )}
        </div>
      </div>
    </div>
  );
}

export function StatGrid({ items }: { items: { label: string; value: string; hint?: string }[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <div key={item.label} className="rounded-2xl border border-border bg-card p-5">
          <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{item.label}</div>
          <div className="mt-2 text-2xl font-bold">{item.value}</div>
          {item.hint && <div className="mt-1 text-xs text-muted-foreground">{item.hint}</div>}
        </div>
      ))}
    </div>
  );
}
