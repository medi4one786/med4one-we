import { createLazyFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/enterprise")({
  component: Enterprise,
});

function Enterprise() {
  return (
    <div className="flex flex-col min-h-screen pt-32 pb-24">
      <div className="container px-4 md:px-6 mx-auto text-center space-y-12">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold">Technology That Grows With Your Business.</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Built for ambitious healthcare organizations needing scalable technology, centralized control and flexible integrations.</p>
        </div>

        <div className="max-w-4xl mx-auto border-2 border-dashed rounded-[3rem] p-12 bg-muted/20">
          <div className="text-sm font-bold text-slate-500 mb-8">ENTERPRISE ARCHITECTURE</div>
          <div className="grid grid-cols-3 gap-8 mb-8">
            <div className="p-6 bg-white rounded-2xl shadow-sm border">Stores</div>
            <div className="p-6 bg-white rounded-2xl shadow-sm border">BI</div>
            <div className="p-6 bg-white rounded-2xl shadow-sm border">AI</div>
          </div>
          <div className="h-12 w-0.5 bg-slate-300 mx-auto" />
          <div className="py-4 px-10 bg-primary text-white rounded-2xl inline-block font-bold">MED4ONE API</div>
          <div className="h-12 w-0.5 bg-slate-300 mx-auto" />
          <div className="grid grid-cols-3 gap-8">
            <div className="p-4 border rounded-xl">Payments</div>
            <div className="p-4 border rounded-xl">Accounting</div>
            <div className="p-4 border rounded-xl">Services</div>
          </div>
        </div>

        <Button size="lg" className="h-14 px-10 text-lg font-bold" asChild>
          <Link to="/contact">Talk to Enterprise Sales</Link>
        </Button>
      </div>
    </div>
  );
}
