import { motion } from "framer-motion";

/* ---------- shared primitives ---------- */

function WindowChrome({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2 border-b border-border/70 bg-muted/40 px-4 py-2.5">
      <span className="h-2.5 w-2.5 rounded-full bg-border" />
      <span className="h-2.5 w-2.5 rounded-full bg-border" />
      <span className="h-2.5 w-2.5 rounded-full bg-border" />
      <span className="ml-3 truncate text-[10px] font-medium tracking-wide text-muted-foreground">
        {label}
      </span>
    </div>
  );
}

function Bar({ value, tone = "primary" }: { value: number; tone?: "primary" | "accent" }) {
  return (
    <div className="flex h-full items-end">
      <div
        className={`w-full rounded-t-sm ${tone === "primary" ? "bg-primary/80" : "bg-accent-foreground/40"}`}
        style={{ height: `${value}%` }}
      />
    </div>
  );
}

function Sparkline() {
  return (
    <svg viewBox="0 0 200 60" className="h-full w-full" preserveAspectRatio="none" aria-hidden="true">
      <polyline
        points="0,48 25,40 50,44 75,28 100,32 125,18 150,22 175,10 200,14"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="text-primary"
        strokeLinecap="round"
      />
      <polyline
        points="0,54 25,50 50,52 75,44 100,46 125,38 150,42 175,34 200,36"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="4 4"
        className="text-muted-foreground/50"
      />
    </svg>
  );
}

/* ---------- PharmacyOS dashboard UI ---------- */

export function PharmacyOSScreen({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex h-full flex-col bg-background">
      <WindowChrome label="Med4One PharmacyOS — Dashboard" />
      <div className="grid min-h-0 flex-1 grid-cols-[auto_minmax(0,1fr)]">
        <aside className="hidden w-40 shrink-0 flex-col gap-1 border-r border-border/70 bg-muted/25 p-3 sm:flex">
          {["Dashboard", "Billing", "Inventory", "Purchasing", "Customers", "Reports"].map(
            (item, i) => (
              <div
                key={item}
                className={`rounded-md px-2.5 py-1.5 text-[10px] font-medium ${
                  i === 0 ? "bg-primary/10 text-primary" : "text-muted-foreground"
                }`}
              >
                {item}
              </div>
            ),
          )}
        </aside>
        <div className="flex min-w-0 flex-col gap-3 p-3 sm:p-4">
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {[
              { k: "Today's Sales", v: "₹1,24,850" },
              { k: "Bills", v: "312" },
              { k: "Gross Margin", v: "21.4%" },
            ].map((c) => (
              <div key={c.k} className="rounded-lg border border-border/70 bg-card p-2.5 sm:p-3">
                <p className="truncate text-[9px] uppercase tracking-wide text-muted-foreground">
                  {c.k}
                </p>
                <p className="mt-1 truncate text-xs font-semibold text-foreground sm:text-sm">
                  {c.v}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-3 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
            <div className="rounded-lg border border-border/70 bg-card p-3">
              <div className="mb-2 flex items-center justify-between">
                <p className="text-[10px] font-semibold text-foreground">Sales &amp; Purchases</p>
                <p className="text-[9px] text-muted-foreground">Last 14 days</p>
              </div>
              <div className="h-20 sm:h-24">
                <Sparkline />
              </div>
            </div>
            <div className="rounded-lg border border-border/70 bg-card p-3">
              <p className="mb-2 text-[10px] font-semibold text-foreground">Batch &amp; Expiry</p>
              <div className="grid h-20 grid-cols-6 items-end gap-1 sm:h-24">
                {[35, 55, 40, 72, 48, 88].map((v, i) => (
                  <Bar key={i} value={v} tone={i % 2 ? "accent" : "primary"} />
                ))}
              </div>
            </div>
          </div>

          {!compact && (
            <div className="flex min-h-0 flex-1 flex-col rounded-lg border border-border/70 bg-card">
              <div className="grid grid-cols-4 gap-2 border-b border-border/70 px-3 py-2 text-[9px] uppercase tracking-wide text-muted-foreground">
                <span>Item</span>
                <span>Batch</span>
                <span>Expiry</span>
                <span className="text-right">Stock</span>
              </div>
              {[
                ["Amoxicillin 500mg", "B-2214", "08/2027", "142"],
                ["Metformin 500mg", "M-8871", "01/2028", "76"],
                ["Pantoprazole 40mg", "P-4402", "11/2026", "28"],
              ].map((row) => (
                <div
                  key={row[1]}
                  className="grid grid-cols-4 gap-2 border-b border-border/40 px-3 py-2 text-[10px] text-foreground/80 last:border-0"
                >
                  <span className="truncate">{row[0]}</span>
                  <span className="truncate text-muted-foreground">{row[1]}</span>
                  <span className="truncate text-muted-foreground">{row[2]}</span>
                  <span className="text-right font-medium">{row[3]}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ---------- Analytics / BI screen ---------- */

export function AnalyticsScreen() {
  const metrics = [
    { k: "Sales", v: "₹38.2L" },
    { k: "Profit", v: "₹6.9L" },
    { k: "Margin", v: "18.1%" },
    { k: "Inventory", v: "₹12.4L" },
  ];
  return (
    <div className="flex h-full flex-col bg-background">
      <WindowChrome label="Med4One Business Intelligence" />
      <div className="min-h-0 flex-1 space-y-3 p-3 sm:p-5">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
          {metrics.map((m) => (
            <div key={m.k} className="rounded-lg border border-border/70 bg-card p-3">
              <p className="text-[9px] uppercase tracking-wide text-muted-foreground">{m.k}</p>
              <p className="mt-1 text-sm font-semibold text-foreground">{m.v}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
          <div className="rounded-lg border border-border/70 bg-card p-3 lg:col-span-2">
            <p className="mb-3 text-[10px] font-semibold text-foreground">Revenue vs Purchasing</p>
            <div className="grid h-28 grid-cols-12 items-end gap-1 sm:h-36">
              {[42, 58, 51, 66, 48, 74, 62, 81, 70, 88, 76, 94].map((v, i) => (
                <Bar key={i} value={v} tone={i % 3 === 2 ? "accent" : "primary"} />
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <div className="rounded-lg border border-border/70 bg-card p-3">
              <p className="text-[10px] font-semibold text-foreground">Expiry Exposure</p>
              <div className="mt-2 space-y-2">
                {[
                  ["0–30 days", 24],
                  ["31–90 days", 46],
                  ["91–180 days", 68],
                ].map(([label, w]) => (
                  <div key={label as string}>
                    <p className="mb-1 text-[9px] text-muted-foreground">{label}</p>
                    <div className="h-1.5 w-full rounded-full bg-muted">
                      <div
                        className="h-1.5 rounded-full bg-primary/70"
                        style={{ width: `${w as number}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-lg border border-border/70 bg-card p-3">
              <p className="text-[10px] font-semibold text-foreground">Customer Trends</p>
              <div className="mt-2 h-12">
                <Sparkline />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Device frames ---------- */

export function DesktopFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full">
      <div className="overflow-hidden rounded-xl border border-border bg-card shadow-[0_30px_80px_-40px_rgba(15,23,42,0.45)]">
        <div className="aspect-[16/9]">{children}</div>
      </div>
      <div className="mx-auto h-2 w-1/3 rounded-b-lg bg-muted" />
    </div>
  );
}

export function TabletFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-2xl border-[6px] border-foreground/85 bg-card shadow-[0_20px_50px_-25px_rgba(15,23,42,0.5)]">
      <div className="aspect-[4/3]">{children}</div>
    </div>
  );
}

export function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-[150px] overflow-hidden rounded-[1.75rem] border-[7px] border-foreground/85 bg-card shadow-[0_20px_50px_-25px_rgba(15,23,42,0.5)] sm:w-[170px]">
      <div className="aspect-[9/17]">{children}</div>
    </div>
  );
}

export function PhoneScreen() {
  return (
    <div className="flex h-full flex-col bg-background">
      <div className="flex items-center justify-between border-b border-border/70 px-3 py-2">
        <span className="text-[9px] font-semibold text-foreground">PharmacyOS</span>
        <span className="text-[8px] text-muted-foreground">Store 01</span>
      </div>
      <div className="min-h-0 flex-1 space-y-2 p-3">
        <div className="rounded-lg border border-border/70 bg-card p-2.5">
          <p className="text-[8px] uppercase tracking-wide text-muted-foreground">Today</p>
          <p className="text-[11px] font-semibold text-foreground">₹1,24,850</p>
          <div className="mt-2 h-8">
            <Sparkline />
          </div>
        </div>
        {["New Bill", "Stock Check", "Expiry Alerts"].map((a) => (
          <div
            key={a}
            className="rounded-md border border-border/70 bg-card px-2.5 py-2 text-[9px] font-medium text-foreground/80"
          >
            {a}
          </div>
        ))}
        <div className="rounded-md bg-primary px-2.5 py-2 text-center text-[9px] font-semibold text-primary-foreground">
          Sync Complete
        </div>
      </div>
    </div>
  );
}

/* ---------- AI assistant panel (dark section) ---------- */

export function AIAssistantPanel() {
  const messages = [
    { role: "user", text: "Which medicines are likely to run out next week?" },
    {
      role: "ai",
      text: "14 items are trending below their reorder point, led by Pantoprazole 40mg and Amoxicillin 500mg.",
    },
    { role: "user", text: "Why did my margin decrease this month?" },
    {
      role: "ai",
      text: "Margin moved from 21.4% to 18.1%, mainly on higher purchase cost in two fast-moving categories.",
    },
  ];
  return (
    <div className="overflow-hidden rounded-xl border border-primary-foreground/15 bg-primary-foreground/[0.04] backdrop-blur">
      <div className="flex items-center justify-between border-b border-primary-foreground/10 px-4 py-3">
        <p className="text-xs font-semibold text-primary-foreground">AI Business Assistant</p>
        <span className="text-[10px] text-primary-foreground/50">Med4One AI</span>
      </div>
      <div className="space-y-3 p-4">
        {messages.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className={m.role === "user" ? "flex justify-end" : "flex justify-start"}
          >
            <p
              className={`max-w-[85%] rounded-lg px-3 py-2 text-[11px] leading-relaxed sm:text-xs ${
                m.role === "user"
                  ? "bg-primary-foreground/10 text-primary-foreground"
                  : "border border-primary-foreground/10 bg-primary-foreground/[0.03] text-primary-foreground/75"
              }`}
            >
              {m.text}
            </p>
          </motion.div>
        ))}
        <div className="mt-2 flex items-center gap-2 rounded-lg border border-primary-foreground/10 px-3 py-2">
          <span className="text-[11px] text-primary-foreground/40">Ask about your pharmacy…</span>
        </div>
      </div>
    </div>
  );
}