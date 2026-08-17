import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ArrowDown,
  LayoutDashboard,
  Bot,
  BarChart3,
  Building2,
  Layers,
  ShieldCheck,
  Zap,
  Sparkles,
  Network,
  Boxes,
  Stethoscope,
} from "lucide-react";
import { motion } from "framer-motion";
import { BookDemoForm } from "@/components/BookDemoForm";
import {
  PharmacyOSScreen,
  AnalyticsScreen,
  PhoneScreen,
  DesktopFrame,
  TabletFrame,
  PhoneFrame,
  AIAssistantPanel,
} from "@/components/home/Mockups";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5 },
};

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  dark?: boolean;
}) {
  return (
    <motion.div
      {...fadeUp}
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <p
          className={`mb-4 text-xs font-semibold uppercase tracking-[0.18em] ${
            dark ? "text-primary-foreground/50" : "text-muted-foreground"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-balance text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl lg:text-[2.75rem] ${
          dark ? "text-primary-foreground" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-base leading-relaxed sm:text-lg ${
            dark ? "text-primary-foreground/65" : "text-muted-foreground"
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}

const products = [
  {
    icon: LayoutDashboard,
    name: "PharmacyOS",
    desc: "Billing, inventory, purchasing, GST, batch and expiry in one connected system.",
    href: "/pharmacyos",
  },
  {
    icon: Bot,
    name: "AI Solutions",
    desc: "Forecasting, prescription reading and an assistant that answers business questions.",
    href: "/ai",
  },
  {
    icon: BarChart3,
    name: "Business Intelligence",
    desc: "Sales, profit, margin and inventory intelligence in clear, decision-ready views.",
    href: "/bi",
  },
  {
    icon: Building2,
    name: "Multi-Store",
    desc: "One command centre for every store, with aggregated stock, staff and performance.",
    href: "/multi-store",
  },
  {
    icon: Layers,
    name: "Enterprise",
    desc: "Roles, controls and structure for pharmacy chains and healthcare groups.",
    href: "/enterprise",
  },
];

const osFeatures = [
  "Billing",
  "Inventory",
  "Purchasing",
  "GST",
  "Batch & Expiry",
  "Customers",
  "Suppliers",
  "Reports",
  "Employees",
  "Multi-Store",
];

const workflow = [
  "Purchase",
  "Inventory",
  "Billing",
  "Stock",
  "Accounts",
  "Reports",
  "Business Intelligence",
];

const aiModules = [
  { name: "AI Business Assistant", desc: "Ask questions about your pharmacy in plain language." },
  { name: "AI Inventory Forecast", desc: "Anticipate demand before stock runs short." },
  { name: "AI Sales Forecast", desc: "See where sales are heading across categories." },
  { name: "AI Prescription OCR", desc: "Turn written prescriptions into structured data." },
  { name: "AI SOP Assistant", desc: "Guided answers on standard operating procedures." },
];

const whyCards = [
  { icon: Network, name: "Connected", desc: "Every module shares one operational source of truth." },
  { icon: Sparkles, name: "Intelligent", desc: "Your own data turned into practical guidance." },
  { icon: Boxes, name: "Scalable", desc: "From a single counter to a multi-city network." },
  { icon: ShieldCheck, name: "Secure", desc: "Role-based access and disciplined data handling." },
  { icon: Zap, name: "Simple", desc: "Designed around how pharmacy teams actually work." },
  { icon: Stethoscope, name: "Future-ready", desc: "Built to extend into wider healthcare workflows." },
];

function Index() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* HERO */}
      <section className="border-b border-border/60 bg-background pb-16 pt-28 lg:pb-24 lg:pt-36">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground"
            >
              Med4One Health Services
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            >
              The intelligent platform for modern pharmacies and healthcare.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 }}
              className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              Run your pharmacy, understand your business and grow your healthcare network — all
              from one connected platform.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18 }}
              className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center"
            >
              <Button size="lg" className="h-12 px-7 text-sm font-semibold" asChild>
                <Link to="/pharmacyos">
                  Explore PharmacyOS <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-7 text-sm font-semibold"
                asChild
              >
                <a href="#demo">Book a Demo</a>
              </Button>
            </motion.div>
          </div>

          {/* Product showcase across devices */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.6 }}
            className="mt-14 lg:mt-20"
          >
            <div className="mx-auto max-w-5xl">
              <DesktopFrame>
                <PharmacyOSScreen />
              </DesktopFrame>
            </div>
            <div className="mx-auto mt-8 grid max-w-4xl grid-cols-1 items-end gap-8 sm:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:max-w-5xl">
              <div className="order-2 sm:order-1">
                <TabletFrame>
                  <AnalyticsScreen />
                </TabletFrame>
              </div>
              <div className="order-1 sm:order-2">
                <PhoneFrame>
                  <PhoneScreen />
                </PhoneFrame>
              </div>
            </div>
            <p className="mt-8 text-center text-xs text-muted-foreground">
              Med4One on desktop, laptop, tablet and mobile — the same connected data everywhere.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ECOSYSTEM */}
      <section className="bg-muted/30 py-20 lg:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            eyebrow="Med4One Ecosystem"
            title="One platform. Every part of your pharmacy."
            description="Five products designed to work as one: run operations, understand performance and scale across locations."
          />
          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p, i) => (
              <motion.article
                key={p.name}
                {...fadeUp}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-5 overflow-hidden rounded-lg border border-border/70 bg-muted/30">
                  <div className="flex h-24 items-center justify-center">
                    <p.icon className="h-8 w-8 text-primary" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground">{p.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {p.desc}
                </p>
                <Link
                  to={p.href}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                >
                  Explore <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* PHARMACYOS */}
      <section className="bg-background py-20 lg:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            eyebrow="PharmacyOS"
            title="Everything your pharmacy needs. One connected system."
            description="A single operating system for daily pharmacy work — from the counter to the back office."
          />
          <div className="mt-14 grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)_minmax(0,1fr)]">
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-1">
              {osFeatures.slice(0, 5).map((f, i) => (
                <motion.div
                  key={f}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  animate={{ y: [0, -3, 0] }}
                  className="rounded-lg border border-border bg-card px-4 py-3 text-sm font-medium text-foreground shadow-sm"
                >
                  {f}
                </motion.div>
              ))}
            </div>
            <motion.div {...fadeUp} className="order-first lg:order-none">
              <DesktopFrame>
                <PharmacyOSScreen />
              </DesktopFrame>
            </motion.div>
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-1">
              {osFeatures.slice(5).map((f, i) => (
                <motion.div
                  key={f}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="rounded-lg border border-border bg-card px-4 py-3 text-sm font-medium text-foreground shadow-sm"
                >
                  {f}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONNECTED WORKFLOW */}
      <section className="bg-muted/30 py-20 lg:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <SectionHeading
              align="left"
              eyebrow="Connected Workflow"
              title="One transaction. Everything stays connected."
              description="When a purchase, sale or return is recorded, the related records move with it. Connected workflows reduce unnecessary data re-entry and help keep operational information synchronized across the business."
            />
            <div className="mx-auto w-full max-w-sm">
              {workflow.map((step, i) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <div
                    className={`flex items-center justify-between rounded-lg border px-4 py-3.5 text-sm font-medium ${
                      i === workflow.length - 1
                        ? "border-primary/30 bg-primary/5 text-primary"
                        : "border-border bg-card text-foreground"
                    }`}
                  >
                    <span className="truncate">{step}</span>
                    <span className="ml-3 shrink-0 text-[10px] tabular-nums text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  {i < workflow.length - 1 && (
                    <div className="flex justify-center py-1.5">
                      <ArrowDown className="h-3.5 w-3.5 text-muted-foreground/60" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI — dark premium */}
      <section className="bg-foreground py-20 lg:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            dark
            eyebrow="Med4One AI"
            title="Your pharmacy data. Now intelligent."
            description="Ask questions in plain language and get answers grounded in your own operational data."
          />
          <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
            <motion.div {...fadeUp}>
              <AIAssistantPanel />
              <div className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {[
                  "What were my top-selling categories?",
                  "Which products are approaching expiry?",
                ].map((q) => (
                  <p
                    key={q}
                    className="rounded-lg border border-primary-foreground/10 px-3 py-2.5 text-xs text-primary-foreground/60"
                  >
                    {q}
                  </p>
                ))}
              </div>
            </motion.div>
            <div className="divide-y divide-primary-foreground/10">
              {aiModules.map((m, i) => (
                <motion.div
                  key={m.name}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="py-5 first:pt-0"
                >
                  <h3 className="text-base font-semibold text-primary-foreground">{m.name}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-primary-foreground/60">
                    {m.desc}
                  </p>
                </motion.div>
              ))}
              <div className="pt-6">
                <Button variant="secondary" className="h-11 px-6 text-sm font-semibold" asChild>
                  <Link to="/ai">
                    Explore AI Solutions <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BUSINESS INTELLIGENCE */}
      <section className="bg-background py-20 lg:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            eyebrow="Business Intelligence"
            title="Know your business before your business tells you."
            description="Sales, profit, margin, inventory, expiry, purchasing and customer trends in one clean analytics workspace."
          />
          <motion.div {...fadeUp} className="mx-auto mt-14 max-w-5xl">
            <DesktopFrame>
              <AnalyticsScreen />
            </DesktopFrame>
          </motion.div>
          <div className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-2">
            {["Sales", "Profit", "Margin", "Inventory", "Expiry", "Purchasing", "Customer Trends"].map(
              (t) => (
                <span
                  key={t}
                  className="rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground"
                >
                  {t}
                </span>
              ),
            )}
          </div>
        </div>
      </section>

      {/* MULTI-STORE */}
      <section className="bg-muted/30 py-20 lg:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            eyebrow="Multi-Store"
            title="One pharmacy or one hundred. One command centre."
            description="Aggregate performance across locations while each store keeps working the way it needs to."
          />
          <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-center lg:gap-14">
            <motion.div
              {...fadeUp}
              className="rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Med4One Command Centre
              </p>
              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {[
                  ["Sales", "₹92.4L"],
                  ["Stock", "₹31.8L"],
                  ["Staff", "48"],
                  ["Purchasing", "₹68.2L"],
                  ["Performance", "+12.6%"],
                  ["Stores", "04"],
                ].map(([k, v]) => (
                  <div key={k} className="rounded-lg border border-border/70 bg-muted/25 p-3">
                    <p className="text-[10px] uppercase tracking-wide text-muted-foreground">{k}</p>
                    <p className="mt-1 truncate text-sm font-semibold text-foreground">{v}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {["Store 01", "Store 02", "Store 03", "Store 04"].map((s, i) => (
                <motion.div
                  key={s}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="rounded-lg border border-border bg-card p-5"
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="truncate text-sm font-semibold text-foreground">{s}</p>
                    <span className="h-2 w-2 shrink-0 rounded-full bg-primary/70" />
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="h-1.5 w-full rounded-full bg-muted">
                      <div
                        className="h-1.5 rounded-full bg-primary/60"
                        style={{ width: `${60 + i * 9}%` }}
                      />
                    </div>
                    <p className="text-[11px] text-muted-foreground">
                      Sales, stock and staff synced to the command centre
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* KLINIK ECOSYSTEM */}
      <section className="bg-background py-20 lg:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            eyebrow="Klinik Ecosystem"
            title="From consultation to pharmacy — connected."
            description="The direction Med4One is building towards: a healthcare journey where clinical and pharmacy systems share the same thread."
          />
          <div className="mt-14 flex flex-col items-stretch justify-center gap-3 md:flex-row md:items-center">
            {["Klinik", "Prescription", "PharmacyOS", "Billing", "Customer"].map((step, i, arr) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex flex-col items-center gap-3 md:flex-row"
              >
                <div className="w-full rounded-lg border border-border bg-card px-5 py-4 text-center text-sm font-semibold text-foreground md:w-auto">
                  {step}
                </div>
                {i < arr.length - 1 && (
                  <>
                    <ArrowDown className="h-4 w-4 text-muted-foreground/60 md:hidden" />
                    <ArrowRight className="hidden h-4 w-4 text-muted-foreground/60 md:block" />
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY MED4ONE */}
      <section className="bg-muted/30 py-20 lg:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            eyebrow="Why Med4One"
            title="Built for the way healthcare businesses actually work."
          />
          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyCards.map((c, i) => (
              <motion.div
                key={c.name}
                {...fadeUp}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="rounded-xl border border-border bg-card p-6"
              >
                <c.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                <h3 className="mt-4 text-base font-semibold text-foreground">{c.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DEMO FORM */}
      <section id="demo" className="scroll-mt-24 bg-background py-20 lg:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
            <SectionHeading
              align="left"
              eyebrow="Book a Demo"
              title="See Med4One with your own pharmacy in mind."
              description="Share a few details and our team will walk you through PharmacyOS, AI and Business Intelligence."
            />
            <motion.div
              {...fadeUp}
              className="rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8"
            >
              <BookDemoForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="border-t border-border/60 bg-muted/40 py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <SectionHeading
            title="Ready to build a smarter pharmacy?"
            description="See how Med4One can transform your pharmacy operations."
          />
          <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Button size="lg" className="h-12 px-7 text-sm font-semibold" asChild>
              <a href="#demo">Book a Demo</a>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-7 text-sm font-semibold" asChild>
              <Link to="/pharmacyos">Explore PharmacyOS</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
