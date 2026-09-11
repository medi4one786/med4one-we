import type { ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  Loader2,
  Lock,
  Receipt,
  Boxes,
  Stethoscope,
  Bot,
  ArrowLeft,
  LayoutDashboard,
  Store,
  Truck,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const modules = [
  { name: "Dashboard", href: "/pharmacyos/dashboard", icon: LayoutDashboard },
  { name: "My Store", href: "/pharmacyos/store", icon: Store },
  { name: "Billing", href: "/pharmacyos/billing", icon: Receipt },
  { name: "Inventory", href: "/pharmacyos/inventory", icon: Boxes },
  { name: "Orders", href: "/pharmacyos/orders", icon: Truck },
  { name: "Prescriptions", href: "/pharmacyos/prescriptions", icon: Stethoscope },
  { name: "AI Assist", href: "/pharmacyos/ai", icon: Bot },
] as const;



export function PanelHeader({
  title,
  description,
  action,
}: {
  title: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4">
      <div className="space-y-1">
        <h2 className="text-xl font-bold">{title}</h2>
        {description && <p className="text-sm text-muted-foreground">{description}</p>}
      </div>
      {action}
    </div>
  );
}

export function PharmacyOSWorkspace({
  title,
  subtitle,
  loading,
  requiresAuth,
  error,
  children,
}: {
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
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4">
          <div className="space-y-1">
            <Link
              to="/pharmacyos"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-primary"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> PharmacyOS
            </Link>
            <h1 className="text-2xl font-bold md:text-3xl">{title}</h1>
            <p className="text-sm text-muted-foreground">{subtitle}</p>
          </div>
        </div>

        <nav className="mt-6 flex gap-2 overflow-x-auto rounded-2xl border border-border bg-card p-2">
          {modules.map((module) => {
            const active = pathname === module.href;
            return (
              <Link
                key={module.href}
                to={module.href}
                className={`inline-flex items-center gap-2 whitespace-nowrap rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors ${
                  active ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted"
                }`}
              >
                <module.icon className="h-4 w-4" />
                {module.name}
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
              <h2 className="text-xl font-bold">Sign in to open your workspace</h2>
              <p className="text-sm text-muted-foreground">
                Your billing, inventory and prescription data is private to your pharmacy account.
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
