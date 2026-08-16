import { createLazyFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
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

export const Route = createLazyFileRoute("/pharmacyos")({
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
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2000" 
            alt="Modern Healthcare Facility" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/80 to-slate-950" />
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
                  <Link to="/get-started">Start Free Trial</Link>
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-8 border-white/20 text-white hover:bg-white/10">
                  Watch Demo
                </Button>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur-xl shadow-2xl overflow-hidden aspect-[16/10]">
                <img 
                  src="https://images.unsplash.com/photo-1587854692152-cbe660dbbb88?auto=format&fit=crop&q=80&w=1200" 
                  alt="Pharmacist using Med4One" 
                  className="w-full h-full object-cover opacity-90"
                />
                {/* Floating UI Element */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[70%] bg-slate-950/80 backdrop-blur-md rounded-xl border border-white/10 shadow-2xl p-6 hidden md:block">
                  <div className="flex items-center justify-between mb-6">
                    <div className="h-6 w-32 bg-white/10 rounded" />
                    <div className="h-8 w-8 rounded-full bg-primary/20" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-20 bg-white/5 rounded-lg border border-white/5" />
                    <div className="h-20 bg-white/5 rounded-lg border border-white/5" />
                    <div className="h-32 col-span-2 bg-white/5 rounded-lg border border-white/5" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center">Core Capabilities</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
            {capabilities.map((cap, i) => (
              <div key={i} className="p-6 rounded-2xl border bg-card hover:shadow-lg transition-all">
                <cap.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-bold mb-2">{cap.title}</h3>
                <p className="text-sm text-muted-foreground">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
