import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ArrowLeft,
  Receipt,
  Boxes,
  FileText,
  BrainCircuit,
  LineChart,
  LayoutGrid,
  Check,
} from "lucide-react";
import posHero from "@/assets/pharmacyos/pos-hero.webp";
import posShowcase from "@/assets/pharmacyos/pos-showcase.webp";
import aiImg from "@/assets/solutions/ai.webp";
import biImg from "@/assets/solutions/bi.webp";
import multistoreImg from "@/assets/solutions/multistore.webp";

export const Route = createLazyFileRoute("/product-tour")({
  component: ProductTour,
});

const steps = [
  {
    id: "billing",
    label: "Billing & POS",
    icon: Receipt,
    title: "Start at the counter",
    desc: "Scan, bill and print in seconds. Every invoice updates stock, ledgers and reports the moment it is saved.",
    points: ["Barcode-fast billing", "GST-ready invoices", "Returns & credit notes", "Daily cash summary"],
    image: posHero,
    href: "/pharmacyos/billing" as const,
  },
  {
    id: "inventory",
    label: "Inventory",
    icon: Boxes,
    title: "Know every batch and expiry",
    desc: "Track stock by batch, watch expiry windows and reorder before a shelf runs empty.",
    points: ["Batch & expiry tracking", "Low-stock alerts", "Supplier purchase orders", "Stock valuation"],
    image: posShowcase,
    href: "/pharmacyos/inventory" as const,
  },
  {
    id: "prescriptions",
    label: "Prescriptions",
    icon: FileText,
    title: "Keep prescriptions in order",
    desc: "Store prescriptions against patients, keep the dispensing queue clean and retrieve history instantly.",
    points: ["Patient history", "Dispensing queue", "Doctor records", "Refill tracking"],
    image: posShowcase,
    href: "/pharmacyos/prescriptions" as const,
  },
  {
    id: "ai",
    label: "AI Assistant",
    icon: BrainCircuit,
    title: "Ask your business questions",
    desc: "The assistant reads your own operating data and answers in plain language, with reorder and margin guidance.",
    points: ["Plain-language answers", "Demand signals", "Reorder guidance", "Margin insight"],
    image: aiImg,
    href: "/pharmacyos/ai" as const,
  },
  {
    id: "bi",
    label: "Intelligence",
    icon: LineChart,
    title: "Understand the whole picture",
    desc: "Dashboards for sales trends, product performance and inventory value — the numbers behind the decisions.",
    points: ["Sales trends", "Product performance", "Gross margin", "Inventory value"],
    image: biImg,
    href: "/bi" as const,
  },
  {
    id: "multi-store",
    label: "Multi-Store",
    icon: LayoutGrid,
    title: "Scale across your network",
    desc: "Compare branches side by side, share stock visibility and control access role by role.",
    points: ["Store comparison", "Central dashboard", "Shared stock view", "Role-based access"],
    image: multistoreImg,
    href: "/multi-store" as const,
  },
];

function ProductTour() {
  const [active, setActive] = useState(0);
  const step = steps[active]!;

  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative pt-32 pb-16 lg:pt-44 lg:pb-20 overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-0 left-1/2 w-[700px] h-[700px] bg-primary/20 blur-[130px] rounded-full -translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="container px-4 md:px-6 mx-auto relative z-10 text-center max-w-3xl space-y-6">
          <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium border border-white/10">
            Guided Product Tour
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Walk through Med4One,
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              module by module.
            </span>
          </h1>
          <p className="text-lg text-slate-300">
            Follow the same path your team takes each day — from the billing counter to network-wide intelligence.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex gap-2 overflow-x-auto pb-4 -mx-1 px-1 mb-10 snap-x">
            {steps.map((s, i) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setActive(i)}
                aria-current={i === active}
                className={`snap-start shrink-0 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  i === active
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card text-muted-foreground border-border hover:text-foreground"
                }`}
              >
                <s.icon className="h-4 w-4" />
                {s.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
              className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center"
            >
              <div>
                <p className="text-sm font-medium text-primary mb-3">
                  Step {active + 1} of {steps.length}
                </p>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4">{step.title}</h2>
                <p className="text-lg text-muted-foreground mb-6">{step.desc}</p>
                <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                  {step.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3">
                  <Button variant="outline" asChild>
                    <Link to={step.href}>
                      Open {step.label} <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      onClick={() => setActive((a) => Math.max(0, a - 1))}
                      disabled={active === 0}
                      aria-label="Previous step"
                    >
                      <ArrowLeft className="h-4 w-4" />
                    </Button>
                    <Button
                      onClick={() => setActive((a) => Math.min(steps.length - 1, a + 1))}
                      disabled={active === steps.length - 1}
                    >
                      Next step <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden border border-border shadow-xl">
                <img
                  src={step.image}
                  alt={`${step.label} screen in Med4One PharmacyOS`}
                  width={1280}
                  height={720}
                  loading="lazy"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <section className="py-20 bg-slate-950 text-white">
        <div className="container px-4 md:px-6 mx-auto text-center max-w-3xl space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Ready to see it with your own data?</h2>
          <p className="text-slate-300 text-lg">
            Book a walkthrough with our team, or browse the full products overview first.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button size="lg" asChild>
              <Link to="/book-demo">
                Book a demo <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/5 text-white border-white/20" asChild>
              <Link to="/products">Products overview</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
