import { createLazyFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { Bot, BarChart4, Zap } from "lucide-react";

export const Route = createLazyFileRoute("/bi")({
  component: BI,
});

function BI() {
  return (
    <div className="flex flex-col min-h-screen pt-32 pb-24">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center space-y-6 mb-20">
          <h1 className="text-4xl md:text-6xl font-bold">From Data to Decisions.</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Don't just collect data. Turn it into decisions.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            { label: "Revenue", value: "₹48,574" },
            { label: "Gross Profit", value: "₹9,522" },
            { label: "Inventory Value", value: "₹8.4L" },
            { label: "Low Stock", value: "24" },
            { label: "Expiring Soon", value: "12" },
            { label: "Orders", value: "18" },
          ].map((item) => (
            <div key={item.label} className="p-8 rounded-2xl border bg-card shadow-sm">
              <div className="text-sm text-muted-foreground mb-2">{item.label}</div>
              <div className="text-3xl font-bold">{item.value}</div>
            </div>
          ))}
        </div>

        <div className="p-8 rounded-3xl bg-muted/50 border shadow-inner">
          <h3 className="text-xl font-bold mb-8">Key Analytics Modules</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {["Sales trends", "Gross margin", "Product performance", "Fast-moving medicines", "Slow-moving medicines", "Inventory value", "Expiry value", "Customer trends", "Staff performance", "Store performance"].map((item) => (
              <div key={item} className="p-4 rounded-xl bg-white border font-medium">{item}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
