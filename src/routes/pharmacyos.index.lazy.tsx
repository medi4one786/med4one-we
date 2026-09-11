import { createLazyFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import posHero from "@/assets/pharmacyos/pos-hero.webp";
import posShowcase from "@/assets/pharmacyos/pos-showcase.webp";

import { 
  CheckCircle2, 
  ArrowRight, 
  Smartphone, 
  Tablet, 
  Laptop, 
  Monitor,
  LayoutGrid,
  Database,
  BriefcaseBusiness,
  Truck,
  Users,
  Search,
  ReceiptText
} from "lucide-react";

export const Route = createLazyFileRoute("/pharmacyos/")({
  component: PharmacyOS,
});

function PharmacyOS() {
  const capabilities = [
    { title: "Billing & POS", icon: ReceiptText, desc: "Fast, accurate and easy pharmacy billing." },
    { title: "Inventory Management", icon: Database, desc: "Track stock, batches, expiry, MRP, purchase rates and availability." },
    { title: "Purchase Management", icon: Truck, desc: "Manage suppliers, purchase invoices and stock replenishment." },
    { title: "Sales Management", icon: LayoutGrid, desc: "Understand sales, margins, products and performance." },
    { title: "Customer Management", icon: Users, desc: "Build a complete view of your pharmacy customers." },
    { title: "Supplier Management", icon: BriefcaseBusiness, desc: "Manage suppliers and purchasing relationships." },
    { title: "GST & Tax", icon: CheckCircle2, desc: "Organize GST-related billing and reporting workflows." },
    { title: "Reports & Analytics", icon: LayoutGrid, desc: "Turn pharmacy data into useful business insights." },
    { title: "Employees & Permissions", icon: Users, desc: "Control users, roles and access." },
    { title: "Prescription Management", icon: Search, desc: "Organize prescription-related workflows." },
    { title: "Multi-Store", icon: LayoutGrid, desc: "Manage multiple locations from one platform." },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative pt-32 pb-20 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 bg-slate-950">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-slate-950" />
        </div>

        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-left">
              <motion.h1 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-4xl md:text-6xl font-bold tracking-tight"
              >
                The Operating System for the <span className="text-primary">Modern Pharmacy.</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg md:text-xl text-slate-300 max-w-xl"
              >
                Run your entire pharmacy from one intelligent platform. Med4One PharmacyOS simplifies operations, maximizes margins, and integrates AI directly into your workflow.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap gap-4"
              >
                <Button size="lg" className="h-12 px-8" asChild>
                  <Link to="/pharmacyos/billing">Open the software</Link>
                </Button>
                <a 
                  href="/#demo" 
                  className="inline-flex items-center justify-center h-12 px-8 border border-white/20 text-white hover:bg-white/10 rounded-md text-sm font-medium transition-colors"
                >
                  Watch Demo
                </a>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl border border-white/10 bg-slate-900/50 shadow-2xl overflow-hidden">
                <img
                  src={posHero}
                  alt="Med4One PharmacyOS billing and inventory software running on a desktop monitor and laptop at a pharmacy counter"
                  width={1440}
                  height={900}
                  className="w-full h-auto"
                />
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-b bg-muted/40 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold">Open a PharmacyOS module</h2>
              <p className="text-sm text-muted-foreground">Working software connected to your pharmacy account.</p>
            </div>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Live Dashboard", href: "/pharmacyos/dashboard" as const, desc: "Invoices, prescriptions and stock live." },
              { name: "Billing & POS", href: "/pharmacyos/billing" as const, desc: "Bill fast with live stock and GST." },

              { name: "Inventory", href: "/pharmacyos/inventory" as const, desc: "Batches, expiry and reorders." },
              { name: "Prescriptions", href: "/pharmacyos/prescriptions" as const, desc: "Review, verify, dispense." },
              { name: "AI Assist", href: "/pharmacyos/ai" as const, desc: "Actions from your own data." },
            ].map((module) => (
              <Link
                key={module.href}
                to={module.href}
                className="group rounded-2xl border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg"
              >
                <h3 className="font-bold">{module.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{module.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Open <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>


      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2 -z-10" />
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Core Capabilities</h2>
              <p className="text-muted-foreground max-w-xl">Everything you need to manage a modern pharmacy business at scale.</p>
            </div>
            <Button variant="ghost" className="text-primary hover:text-primary hover:bg-primary/5" asChild>
              <Link to="/docs" className="flex items-center gap-2">View Documentation <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
            {capabilities.map((cap, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group p-6 rounded-2xl border bg-card hover:border-primary/50 hover:shadow-xl transition-all relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="h-24 w-24 bg-primary/5 rounded-full -mr-12 -mt-12" />
                </div>
                <div className="relative z-10">
                  <cap.icon className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold mb-2 text-lg">{cap.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{cap.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Realistic Product Showcase Section */}
      <section className="py-24 bg-muted/30">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full opacity-30 -z-10" />
              <div className="rounded-2xl border shadow-2xl overflow-hidden bg-slate-900">
                <img
                  src={posShowcase}
                  alt="Med4One PharmacyOS inventory, batch and expiry tracking dashboard on a pharmacy desk"
                  width={1440}
                  height={900}
                  loading="lazy"
                  className="w-full h-auto"
                />
              </div>

              {/* Minimal CSS Placeholder */}
              <div className="absolute -bottom-6 -right-6 backdrop-blur-xl bg-slate-950/90 border border-white/10 p-6 rounded-2xl shadow-xl hidden md:block w-64">
                <div className="flex items-center gap-4 mb-2">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">Inventory Sync</div>
                    <div className="text-xs text-slate-400">System Ready</div>
                  </div>
                </div>
                <div className="text-2xl font-bold text-white">99.9% Accuracy</div>
              </div>
            </div>
            
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Software that understands your business.</h2>
              <div className="space-y-6">
                {[
                  { title: "Smart Stock Forecasting", desc: "Never run out of life-saving medicines with AI-driven inventory predictions." },
                  { title: "Automated GST Reconciliation", desc: "Save hours of accounting work with one-click tax reporting and filing support." },
                  { title: "Real-time Multi-store Sync", desc: "Monitor stock levels and sales performance across all your locations instantly." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="mt-1 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button size="lg" className="h-12 px-8" asChild>
                <Link to="/get-started">Start 7 Days Free Trial</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
