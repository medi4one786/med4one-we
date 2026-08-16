import { createLazyFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/multi-store")({
  component: MultiStore,
});

function MultiStore() {
  return (
    <div className="flex flex-col min-h-screen pt-32 pb-24">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center space-y-6 mb-20">
          <h1 className="text-4xl md:text-6xl font-bold">One Command Centre. Every Pharmacy.</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Manage your entire pharmacy network from one connected platform.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="p-8 rounded-3xl bg-slate-950 text-white shadow-2xl">
            <h3 className="text-lg font-bold mb-6 text-slate-400">ALL STORES</h3>
            <div className="space-y-4">
              {[
                { name: "Store 01", val: "₹48,574" },
                { name: "Store 02", val: "₹36,240" },
                { name: "Store 03", val: "₹52,890" },
                { name: "Store 04", val: "₹41,230" },
              ].map((s) => (
                <div key={s.name} className="flex justify-between border-b border-white/10 pb-4">
                  <span>{s.name}</span>
                  <span className="font-mono">{s.val}</span>
                </div>
              ))}
              <div className="flex justify-between pt-4 text-xl font-bold text-primary">
                <span>TOTAL</span>
                <span className="font-mono">₹1,78,934</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Centralized Visibility</h2>
            <p className="text-muted-foreground text-lg">Whether you operate two stores or a growing pharmacy network, Med4One provides centralized visibility across your business.</p>
            <div className="grid grid-cols-2 gap-4">
              {["Central Dashboard", "Store Comparison", "Centralized Inventory", "Staff Performance", "Purchasing", "Centralized Reports", "Role-Based Access"].map((f) => (
                <div key={f} className="p-4 bg-muted rounded-xl text-sm font-medium">{f}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
