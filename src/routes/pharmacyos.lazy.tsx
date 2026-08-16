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
      <section className="relative pt-32 pb-20 bg-slate-950 text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">The Operating System for the Modern Pharmacy.</h1>
            <p className="text-lg md:text-xl text-slate-300">Run your entire pharmacy from one intelligent platform.</p>
          </div>
          
          <div className="relative mt-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto items-end">
              <motion.div initial={{ y: 20 }} animate={{ y: 0 }} className="p-4 bg-white/5 rounded-xl border border-white/10 hidden md:block"><Monitor className="h-10 w-10 text-primary" /></motion.div>
              <motion.div initial={{ y: 20 }} animate={{ y: 0 }} transition={{ delay: 0.1 }} className="p-4 bg-white/5 rounded-xl border border-white/10"><Laptop className="h-10 w-10 text-primary" /></motion.div>
              <motion.div initial={{ y: 20 }} animate={{ y: 0 }} transition={{ delay: 0.2 }} className="p-4 bg-white/5 rounded-xl border border-white/10"><Tablet className="h-10 w-10 text-primary" /></motion.div>
              <motion.div initial={{ y: 20 }} animate={{ y: 0 }} transition={{ delay: 0.3 }} className="p-4 bg-white/5 rounded-xl border border-white/10"><Smartphone className="h-10 w-10 text-primary" /></motion.div>
            </div>
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
