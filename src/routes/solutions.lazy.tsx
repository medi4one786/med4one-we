import { createLazyFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Layers, 
  BrainCircuit, 
  LineChart, 
  LayoutGrid, 
  Building2,
  CheckCircle2,
  Database
} from "lucide-react";
import { Link } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/solutions")({
  component: Solutions,
});

function Solutions() {
  const narrative = [
    { stage: "Run", solution: "PharmacyOS", note: "Operations", icon: Layers, color: "text-blue-500" },
    { stage: "Understand", solution: "Business Intelligence", note: "Decisions", icon: LineChart, color: "text-indigo-500" },
    { stage: "Predict", solution: "AI Solutions", note: "Intelligence", icon: BrainCircuit, color: "text-teal-500" },
    { stage: "Scale", solution: "Multi-Store", note: "Network", icon: LayoutGrid, color: "text-cyan-500" },
    { stage: "Transform", solution: "Enterprise", note: "Growth", icon: Building2, color: "text-slate-500" },
  ];

  const solutions = [
    {
      id: "pharmacyos",
      title: "PharmacyOS",
      stage: "Run",
      stageNote: "It starts here — every daily operation in one place.",
      tagline: "The Operating System for the Modern Pharmacy.",
      desc: "Run your entire pharmacy from one intelligent platform.",
      icon: Layers,
      href: "/pharmacyos",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      highlights: ["Billing & POS", "Inventory", "Purchasing", "Reports"],
    },
    {
      id: "ai",
      title: "AI Solutions",
      stage: "Predict",
      stageNote: "Once you understand today, Med4One predicts tomorrow.",
      tagline: "Intelligence Behind Every Decision.",
      desc: "Turn your pharmacy data into intelligent actions.",
      icon: BrainCircuit,
      href: "/ai",
      color: "text-teal-500",
      bgColor: "bg-teal-500/10",
      highlights: ["Business Assistant", "Inventory Forecast", "Sales Forecast", "Prescription OCR"],
    },
    {
      id: "bi",
      title: "Business Intelligence",
      stage: "Understand",
      stageNote: "Operations create data. Data creates understanding.",
      tagline: "From Data to Decisions.",
      desc: "See what is happening in your business — and understand why.",
      icon: LineChart,
      href: "/bi",
      color: "text-indigo-500",
      bgColor: "bg-indigo-500/10",
      highlights: ["Sales trends", "Gross margin", "Product performance", "Inventory value"],
    },
    {
      id: "multi-store",
      title: "Multi-Store",
      stage: "Scale",
      stageNote: "What works in one pharmacy now works across your network.",
      tagline: "One Command Centre. Every Pharmacy.",
      desc: "Manage your entire pharmacy network from one connected platform.",
      icon: LayoutGrid,
      href: "/multi-store",
      color: "text-cyan-500",
      bgColor: "bg-cyan-500/10",
      highlights: ["Central dashboard", "Store comparison", "Centralized inventory", "Role-based access"],
    },
    {
      id: "enterprise",
      title: "Enterprise",
      stage: "Transform",
      stageNote: "The final step — technology that reshapes the organization.",
      tagline: "Technology That Grows With Your Business.",
      desc: "Built for ambitious healthcare organizations.",
      icon: Building2,
      href: "/enterprise",
      color: "text-slate-500",
      bgColor: "bg-slate-500/10",
      highlights: ["Scalable architecture", "Advanced permissions", "API connectivity", "Enterprise support"],
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/20 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium border border-white/10 mb-4"
            >
              <Database className="mr-2 h-4 w-4 text-accent" />
              <span>Technology Built Around Healthcare</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold tracking-tight"
            >
              One Ecosystem. <span className="text-primary text-glow">Five Powerful Solutions.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto"
            >
              Med4One brings together pharmacy operations, artificial intelligence, business intelligence, multi-store management and enterprise technology into one connected healthcare platform.
            </motion.p>
          </div>

          {/* Architecture Diagram */}
          <div className="mt-20 max-w-4xl mx-auto hidden md:block">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="relative p-12 bg-white/5 border border-white/10 rounded-[3rem] backdrop-blur-xl"
            >
              <div className="flex flex-col items-center">
                <div className="px-10 py-4 bg-primary rounded-2xl font-black text-xl tracking-[0.2em] shadow-[0_0_30px_rgba(var(--primary-rgb),0.3)]">
                  MED4ONE
                </div>
                
                <div className="h-12 w-0.5 bg-gradient-to-b from-primary to-white/20 my-2" />
                
                <div className="relative w-full">
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-white/20" />
                  <div className="flex justify-between relative">
                    <div className="absolute left-0 top-0 w-0.5 h-8 bg-white/20" />
                    <div className="absolute left-1/2 top-0 w-0.5 h-8 bg-white/20 -translate-x-1/2" />
                    <div className="absolute right-0 top-0 w-0.5 h-8 bg-white/20" />
                  </div>
                </div>

                <div className="grid grid-cols-3 w-full gap-8 mt-8">
                  <div className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center group hover:bg-white/10 transition-colors">
                    <div className="text-primary font-bold mb-1">PharmacyOS</div>
                    <div className="text-[10px] text-white/40 uppercase tracking-widest">Operations</div>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center group hover:bg-white/10 transition-colors">
                    <div className="text-accent font-bold mb-1">AI</div>
                    <div className="text-[10px] text-white/40 uppercase tracking-widest">Intelligence</div>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center group hover:bg-white/10 transition-colors">
                    <div className="text-indigo-400 font-bold mb-1">BI</div>
                    <div className="text-[10px] text-white/40 uppercase tracking-widest">Decisions</div>
                  </div>
                </div>

                <div className="relative w-full mt-8">
                  <div className="flex justify-between relative">
                    <div className="absolute left-0 bottom-0 w-0.5 h-8 bg-white/20" />
                    <div className="absolute left-1/2 bottom-0 w-0.5 h-8 bg-white/20 -translate-x-1/2" />
                    <div className="absolute right-0 bottom-0 w-0.5 h-8 bg-white/20" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/20" />
                </div>

                <div className="h-12 w-0.5 bg-white/20 my-2" />

                <div className="bg-white/5 border border-white/10 px-10 py-4 rounded-2xl text-center hover:bg-white/10 transition-colors">
                  <div className="text-cyan-400 font-bold mb-1">Multi-Store</div>
                  <div className="text-[10px] text-white/40 uppercase tracking-widest">Scale</div>
                </div>

                <div className="h-12 w-0.5 bg-white/20 my-2" />

                <div className="bg-white/5 border border-white/10 px-10 py-4 rounded-2xl text-center hover:bg-white/10 transition-colors">
                  <div className="text-slate-400 font-bold mb-1 text-lg">Enterprise</div>
                  <div className="text-[10px] text-white/40 uppercase tracking-widest">Transform</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions List */}
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6 mx-auto">
          {/* Narrative flow rail */}
          <div className="max-w-6xl mx-auto mb-20 md:mb-28">
            <div className="text-center space-y-3 mb-12">
              <div className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground">The Med4One Journey</div>
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
                Run <span className="text-muted-foreground/40">→</span> Understand <span className="text-muted-foreground/40">→</span> Predict <span className="text-muted-foreground/40">→</span> Scale <span className="text-muted-foreground/40">→</span> Transform
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Five solutions, one continuous story. Each stage builds on the one before it.
              </p>
            </div>

            <div className="relative">
              <div className="hidden md:block absolute top-7 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-blue-500/30 via-teal-500/40 to-slate-400/30" />
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8 relative">
                {narrative.map((step, i) => (
                  <motion.div
                    key={step.stage}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex flex-col items-center text-center gap-3"
                  >
                    <div className={`h-14 w-14 rounded-2xl bg-card border shadow-sm flex items-center justify-center ${step.color} relative z-10`}>
                      <step.icon className="h-6 w-6" />
                    </div>
                    <div className="text-lg font-bold">{step.stage}</div>
                    <div className="text-sm font-medium text-foreground/70">{step.solution}</div>
                    <div className="text-[11px] uppercase tracking-widest text-muted-foreground">{step.note}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-20">
            {solutions.map((solution, i) => (
              <motion.div 
                key={solution.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="group relative"
              >
                {i > 0 && (
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 h-10 w-0.5 bg-gradient-to-b from-transparent to-border" />
                )}
                <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="flex-1 space-y-6">
                    <div className="flex items-center gap-4">
                      <div className={`h-16 w-16 rounded-2xl ${solution.bgColor} ${solution.color} flex items-center justify-center shrink-0`}>
                        <solution.icon className="h-8 w-8" />
                      </div>
                      <div className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] ${solution.bgColor} ${solution.color}`}>
                        <span>Stage {i + 1}</span>
                        <span className="opacity-40">/</span>
                        <span>{solution.stage}</span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h2 className="text-3xl md:text-5xl font-bold tracking-tight group-hover:text-primary transition-colors">
                        {i + 1}. {solution.title}
                      </h2>
                      <h3 className="text-xl md:text-2xl font-semibold text-slate-700">{solution.tagline}</h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {solution.desc}
                      </p>
                      <p className="text-sm font-medium text-foreground/60 border-l-2 border-border pl-4 italic">
                        {solution.stageNote}
                      </p>
                    </div>
                    <Button size="lg" className="h-12 px-8" asChild>
                      <Link to={solution.href} className="flex items-center gap-2">
                        Explore {solution.title} <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  <div className="flex-1 w-full aspect-video bg-muted/30 rounded-[2rem] border border-slate-200 overflow-hidden relative group-hover:shadow-2xl transition-all">
                    <div className={`absolute inset-0 ${solution.bgColor} opacity-60`} />
                    <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
                      <div className="flex items-center justify-between">
                        <div className={`text-[10px] font-bold uppercase tracking-[0.3em] ${solution.color}`}>
                          {solution.stage}
                        </div>
                        <solution.icon className={`h-5 w-5 ${solution.color}`} />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        {solution.highlights.map((item) => (
                          <div
                            key={item}
                            className="rounded-xl bg-background/80 border border-white/40 px-3 py-2.5 text-xs font-semibold text-foreground/80 backdrop-blur-sm"
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky Bottom Section */}
      <section className="py-24 bg-slate-950 text-white overflow-hidden relative">
        <div className="container px-4 md:px-6 mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto space-y-8"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">One Platform. Multiple Possibilities.</h2>
            <p className="text-lg text-slate-300">
              Whether you're running a single pharmacy, managing multiple locations or building a larger healthcare organization, Med4One is designed to evolve with you.
            </p>
            <p className="text-xl font-semibold text-primary">
              Start with what you need today. Build for what comes tomorrow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button size="lg" className="h-14 px-10 text-lg font-bold" asChild>
                <Link to="/pharmacyos">Explore PharmacyOS</Link>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-10 text-lg font-bold border-white/20 hover:bg-white/10" asChild>
                <Link to="/book-demo">Book a Demo</Link>
              </Button>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      </section>
    </div>
  );
}
