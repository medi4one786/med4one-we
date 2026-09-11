import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Layers,
  BrainCircuit,
  LineChart,
  LayoutGrid,
  Building2,
  Check,
  PlayCircle,
} from "lucide-react";
import pharmacyosImg from "@/assets/solutions/pharmacyos.webp";
import aiImg from "@/assets/solutions/ai.webp";
import biImg from "@/assets/solutions/bi.webp";
import multistoreImg from "@/assets/solutions/multistore.webp";
import enterpriseImg from "@/assets/solutions/enterprise.webp";

export const Route = createLazyFileRoute("/products")({
  component: ProductsOverview,
});

const products = [
  {
    title: "PharmacyOS",
    tagline: "The operating system for the modern pharmacy",
    desc: "Billing, inventory, prescriptions and purchasing in one fast, reliable workspace built for daily counter work.",
    icon: Layers,
    href: "/pharmacyos" as const,
    image: pharmacyosImg,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    features: ["Billing & POS", "Batch & expiry inventory", "Prescription records", "Purchase & suppliers"],
  },
  {
    title: "AI Solutions",
    tagline: "Intelligence behind every decision",
    desc: "An assistant that reads your own operating data to surface demand signals, reorder guidance and margin insight.",
    icon: BrainCircuit,
    href: "/ai" as const,
    image: aiImg,
    color: "text-teal-500",
    bg: "bg-teal-500/10",
    features: ["Business assistant", "Inventory forecasting", "Sales forecasting", "Prescription reading"],
  },
  {
    title: "Business Intelligence",
    tagline: "From data to decisions",
    desc: "Dashboards and reports that explain what happened, why it happened and where the next opportunity sits.",
    icon: LineChart,
    href: "/bi" as const,
    image: biImg,
    color: "text-indigo-500",
    bg: "bg-indigo-500/10",
    features: ["Sales trends", "Gross margin", "Product performance", "Inventory value"],
  },
  {
    title: "Multi-Store",
    tagline: "One command centre, every pharmacy",
    desc: "Compare stores, move stock and apply the same standards across your whole network from a single console.",
    icon: LayoutGrid,
    href: "/multi-store" as const,
    image: multistoreImg,
    color: "text-cyan-500",
    bg: "bg-cyan-500/10",
    features: ["Central dashboard", "Store comparison", "Shared inventory view", "Role-based access"],
  },
  {
    title: "Enterprise",
    tagline: "Technology that grows with your business",
    desc: "Scalable architecture, granular permissions and integration paths for ambitious healthcare organisations.",
    icon: Building2,
    href: "/enterprise" as const,
    image: enterpriseImg,
    color: "text-slate-500",
    bg: "bg-slate-500/10",
    features: ["Scalable architecture", "Advanced permissions", "API connectivity", "Priority support"],
  },
];

function ProductsOverview() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/20 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />
        </div>
        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center space-y-6"
          >
            <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium border border-white/10">
              Products Overview
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              One connected platform.
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Five products that work as one.
              </span>
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Med4One brings pharmacy operations, intelligence and network growth into a single system — so your team
              works in one place and your data stays connected end to end.
            </p>
            <div className="flex flex-wrap gap-3 justify-center pt-2">
              <Button size="lg" asChild>
                <Link to="/product-tour">
                  Take the product tour <PlayCircle className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/5 text-white border-white/20" asChild>
                <Link to="/book-demo">Book a demo</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-4 md:px-6 mx-auto space-y-16 lg:space-y-24">
          {products.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center"
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className={`inline-flex items-center gap-2 rounded-full ${p.bg} px-4 py-1.5 text-sm font-medium mb-5`}>
                  <p.icon className={`h-4 w-4 ${p.color}`} />
                  <span>{p.title}</span>
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4">{p.tagline}</h2>
                <p className="text-muted-foreground text-lg mb-6">{p.desc}</p>
                <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" asChild>
                  <Link to={p.href}>
                    Explore {p.title} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <div className="relative rounded-2xl overflow-hidden border border-border shadow-xl">
                  <img
                    src={p.image}
                    alt={`${p.title} interface preview`}
                    width={1280}
                    height={720}
                    loading="lazy"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent pointer-events-none" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-slate-950 text-white">
        <div className="container px-4 md:px-6 mx-auto text-center max-w-3xl space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">See it working, module by module</h2>
          <p className="text-slate-300 text-lg">
            The guided product tour walks through billing, inventory, prescriptions, intelligence and multi-store
            control in the order your team would use them.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button size="lg" asChild>
              <Link to="/product-tour">
                Start the tour <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/5 text-white border-white/20" asChild>
              <Link to="/pricing">View pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
