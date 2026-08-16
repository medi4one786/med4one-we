import { createLazyFileRoute } from "@tanstack/react-router";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Bot, 
  BrainCircuit, 
  LineChart, 
  Search, 
  Zap, 
  ShieldCheck, 
  CheckCircle2,
  ArrowRight,
  Sparkles,
  BarChart4,
  Cpu,
  Smartphone
} from "lucide-react";
import { Link } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/ai")({
  component: AI,
});

function AI() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/20 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 space-y-8 text-center lg:text-left">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium border border-white/10"
              >
                <Sparkles className="mr-2 h-4 w-4 text-accent" />
                <span>Next-Generation Healthcare Intelligence</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-6xl font-bold tracking-tight"
              >
                Intelligence Built Into <span className="text-primary">Every Decision.</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-slate-300 max-w-2xl"
              >
                Med4One AI helps you predict demand, optimize operations, and grow your healthcare business with data-driven insights.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Button size="lg" className="h-14 px-8 text-base font-semibold" asChild>
                  <Link to="/book-demo">Get AI Demo</Link>
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 text-base font-semibold border-white/20 hover:bg-white/10" asChild>
                  <Link to="/pharmacyos">Explore PharmacyOS</Link>
                </Button>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="flex-1 w-full max-w-sm lg:max-w-md relative"
            >
              <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-4 shadow-2xl backdrop-blur-xl">
                <div className="bg-slate-900 rounded-[2rem] overflow-hidden aspect-[9/19] flex flex-col">
                  {/* AI Mobile Mockup Content */}
                  <div className="p-6 flex-1 space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-accent flex items-center justify-center text-accent-foreground">
                        <Bot className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white">Med4One AI</div>
                        <div className="text-[10px] text-white/60">Ready to assist</div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex justify-end">
                        <div className="bg-primary/20 rounded-2xl rounded-tr-none px-4 py-3 text-sm max-w-[85%] text-slate-200">
                          "Which medicines should I reorder this week?"
                        </div>
                      </div>
                      <div className="flex justify-start">
                        <div className="bg-white/10 rounded-2xl rounded-tl-none px-4 py-3 text-sm max-w-[85%] text-slate-300">
                          Based on velocity and lead times, I recommend reordering:
                          <div className="mt-2 space-y-2">
                            <div className="p-2 rounded bg-white/5 text-xs border border-white/5 flex justify-between">
                              <span>Paracetamol 500mg</span>
                              <span className="text-accent">+24 units</span>
                            </div>
                            <div className="p-2 rounded bg-white/5 text-xs border border-white/5 flex justify-between">
                              <span>Amoxicillin 250mg</span>
                              <span className="text-accent">+12 units</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 border-t border-white/10 bg-white/5">
                    <div className="h-10 w-full rounded-full bg-white/10 flex items-center px-4 text-xs text-slate-400">
                      Ask Med4One AI...
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Features Grid */}
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Powerful Intelligence Modules</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">Specific AI tools designed for pharmacy and healthcare operational excellence.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Inventory Forecasting", desc: "Predict stock requirements based on seasonal trends and sales velocity.", icon: BrainCircuit },
              { title: "Sales Prediction", desc: "Forecast revenue and identify growth opportunities across categories.", icon: LineChart },
              { title: "AI Business Assistant", desc: "Get real-time answers about your business performance in natural language.", icon: Bot },
              { title: "Prescription OCR", desc: "Automatically digitize handwritten prescriptions with high accuracy.", icon: Search },
              { title: "Smart Procurement", desc: "AI-driven purchase recommendations to optimize cash flow and stock.", icon: Zap },
              { title: "Fraud Detection", desc: "Identify anomalies in billing and inventory to prevent revenue leakage.", icon: ShieldCheck },
            ].map((module, i) => (
              <div key={i} className="p-8 rounded-3xl border bg-card hover:shadow-lg transition-all group">
                <div className="h-14 w-14 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <module.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-4">{module.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{module.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Advisor Section */}
      <section className="py-24 bg-muted/30">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="bg-card border rounded-3xl p-8 shadow-xl">
                <div className="flex items-center justify-between mb-8">
                  <div className="font-bold">Business Intelligence Advisor</div>
                  <BarChart4 className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-6">
                  <div className="flex justify-between items-end">
                    <div className="space-y-1">
                      <div className="text-xs text-muted-foreground uppercase tracking-wider">Weekly Performance</div>
                      <div className="text-2xl font-bold">₹1,42,850</div>
                    </div>
                    <div className="text-xs font-bold text-green-500 flex items-center">
                      <Zap className="h-3 w-3 mr-1" /> +12.4%
                    </div>
                  </div>
                  <div className="h-32 w-full bg-primary/5 rounded-xl flex items-end gap-2 p-4">
                    {[40, 60, 45, 90, 75, 85, 100].map((h, i) => (
                      <div key={i} className="flex-1 bg-primary/20 rounded-t-sm" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                  <div className="p-4 rounded-2xl bg-primary/5 border border-primary/10">
                    <div className="flex items-center gap-2 text-primary font-bold text-sm mb-2">
                      <Bot className="h-4 w-4" />
                      Advisor Tip
                    </div>
                    <p className="text-sm text-muted-foreground">
                      "Friday afternoons are your peak pharmacy hours. Consider adding one extra staff member to handle the 40% increase in billing volume."
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Your 24/7 Digital Advisor.</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Med4One AI isn't just a tool; it's a partner that understands your business. It identifies patterns you might miss and suggests actionable improvements to your daily operations.
              </p>
              <ul className="space-y-4 pt-4">
                {[
                  "Optimize staffing based on peak hours",
                  "Identify slow-moving stock for clearance",
                  "Personalize customer offers automatically",
                  "Manage cash flow with predictive purchases"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-medium">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6 mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Ready to add intelligence to your business?</h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Join the forward-thinking healthcare businesses using Med4One AI to drive the next generation of patient care and operational efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" variant="secondary" className="h-14 px-10 text-lg" asChild>
              <Link to="/book-demo text-lg">Book a Demo</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-10 text-lg border-white/20 hover:bg-white/10" asChild>
              <Link to="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

