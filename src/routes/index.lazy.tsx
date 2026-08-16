import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  CheckCircle2, 
  LayoutDashboard, 
  Zap, 
  BarChart3, 
  ShieldCheck, 
  Smartphone, 
  Globe,
  Bot,
  Package,
  ArrowDownToLine,
  Users,
  Building2,
  Stethoscope,
  Briefcase
} from "lucide-react";
import { motion } from "framer-motion";
import dashboardAsset from "@/assets/pharmacyos-dashboard.png.asset.json";
import aiAsset from "@/assets/pharmacyos-ai-interface.png.asset.json";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-20 pointer-events-none">
          <div className="absolute top-[-5%] left-[-5%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-accent/20 blur-[120px] rounded-full" />
        </div>

        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 lg:space-y-8 flex-1">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs md:text-sm font-medium text-primary"
              >
                <Zap className="mr-2 h-4 w-4" />
                <span>Building the Technology Behind a Smarter Healthcare Ecosystem</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-foreground"
              >
                The Intelligent Healthcare Platform for the <span className="text-primary">Next Generation</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-muted-foreground max-w-xl"
              >
                Med4One brings pharmacy, healthcare, technology and AI together to create a smarter, simpler and more connected healthcare ecosystem.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
              >
                <Button size="lg" className="h-14 px-8 text-base font-semibold w-full sm:w-auto" asChild>
                  <Link to="/get-started">Get Started</Link>
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 text-base font-semibold w-full sm:w-auto" asChild>
                  <Link to="/pharmacyos">Explore PharmacyOS</Link>
                </Button>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex-1 w-full max-w-lg lg:max-w-xl"
            >
              {/* Product Visual: Device Composition */}
              <div className="relative aspect-[4/3] w-full group">
                <div className="absolute inset-0 bg-primary/5 rounded-3xl border shadow-2xl overflow-hidden">
                  <picture>
                    <source srcSet={(await import("@/assets/pharmacyos-ai-interface.png.asset.json")).default.url} type="image/png" />
                    <img 
                      src={(await import("@/assets/pharmacyos-ai-interface.png.asset.json")).default.url}
                      alt="PharmacyOS Dashboard & AI Interface"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </picture>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </div>
                
                {/* Decorative element */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 blur-3xl rounded-full -z-10 animate-pulse" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Hero Product Visual */}
      <section className="py-12 bg-muted/30">
        <div className="container px-4 md:px-6 mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto max-w-6xl aspect-video rounded-2xl overflow-hidden border shadow-2xl bg-background"
          >
            <div className="flex h-full w-full">
              <div className="w-64 border-r bg-muted/10 p-4 hidden md:block">
                <div className="h-8 w-32 bg-muted rounded mb-8" />
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5, 6].map(i => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="h-5 w-5 bg-muted rounded" />
                      <div className="h-4 w-24 bg-muted/60 rounded" />
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex-1 p-8">
                <div className="flex items-center justify-between mb-8">
                  <div className="h-8 w-48 bg-muted rounded" />
                  <div className="flex gap-4">
                    <div className="h-10 w-10 bg-muted rounded-full" />
                    <div className="h-10 w-24 bg-primary/20 rounded-md" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  {['Today\'s Sales', 'Revenue', 'Gross Profit', 'Low Stock'].map((title, i) => (
                    <div key={i} className="p-4 rounded-xl border bg-card">
                      <div className="text-xs text-muted-foreground mb-1">{title}</div>
                      <div className="text-2xl font-bold">
                        {i === 3 ? '12' : `₹${(Math.random() * 50000 + 10000).toLocaleString()}`}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2 p-6 rounded-xl border bg-card h-64">
                    <div className="flex items-center justify-between mb-4">
                      <div className="h-4 w-32 bg-muted rounded" />
                      <div className="h-4 w-24 bg-muted/60 rounded" />
                    </div>
                    <div className="h-full w-full bg-muted/10 rounded" />
                  </div>
                  <div className="p-6 rounded-xl border bg-primary/5 border-primary/20 h-64">
                    <div className="flex items-center gap-2 mb-4 text-primary font-semibold">
                      <Bot className="h-5 w-5" />
                      <span>AI Insights</span>
                    </div>
                    <div className="space-y-4">
                      <div className="p-3 rounded-lg bg-background border text-xs">
                        "Based on recent velocity, reorder 18 products soon."
                      </div>
                      <div className="p-3 rounded-lg bg-background border text-xs">
                        "Sales increased by 12% compared to last week."
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Value Strip */}
      <section className="py-12 border-y bg-background">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-60">
             <div className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-primary" /><span className="text-sm font-semibold">Pharmacy Tech</span></div>
             <div className="flex items-center gap-2"><Bot className="h-5 w-5 text-primary" /><span className="text-sm font-semibold">AI Operations</span></div>
             <div className="flex items-center gap-2"><BarChart3 className="h-5 w-5 text-primary" /><span className="text-sm font-semibold">Business Intelligence</span></div>
             <div className="flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-primary" /><span className="text-sm font-semibold">Secure Infrastructure</span></div>
             <div className="flex items-center gap-2"><Zap className="h-5 w-5 text-primary" /><span className="text-sm font-semibold">Scalable Technology</span></div>
             <div className="flex items-center gap-2"><Globe className="h-5 w-5 text-primary" /><span className="text-sm font-semibold">Connected Healthcare</span></div>
          </div>
        </div>
      </section>

      {/* 4. Who We Serve */}
      <section className="py-24 bg-muted/10">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Built for Every Stage of Healthcare Business</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Intelligent digital workflows tailored for diverse healthcare operational needs.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Independent Pharmacies", desc: "Modern tools to manage everyday pharmacy operations.", icon: Building2 },
              { title: "Pharmacy Chains", desc: "Centralized control across multiple stores.", icon: LayoutDashboard },
              { title: "Clinics & Healthcare", desc: "Connected business and operational technology.", icon: Stethoscope },
              { title: "Healthcare Professionals", desc: "Intelligent digital workflows for daily practice.", icon: Users },
              { title: "Enterprise Groups", desc: "Scalable technology and centralized business intelligence.", icon: Briefcase },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-2xl border bg-background hover:shadow-lg transition-shadow flex flex-col items-center text-center sm:text-left sm:items-start"
              >
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. What is Med4One */}
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">One Platform. A Smarter Healthcare Ecosystem.</h2>
              <p className="text-lg text-muted-foreground">Med4One connects pharmacy operations, healthcare businesses, customers, technology and AI through one intelligent ecosystem.</p>
              <div className="space-y-4 pt-4">
                {['Pharmacy', 'Technology', 'AI', 'Business', 'Healthcare', 'Customer'].map((text, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span className="font-medium">{text}</span>
                  </div>
                ))}
              </div>
              <Button className="mt-6" asChild>
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            
            <div className="relative aspect-square max-w-md mx-auto scale-90 sm:scale-100">
              {/* Circular flow for Desktop, Vertical for Mobile */}
              <div className="hidden sm:block absolute inset-0">
                <div className="absolute inset-0 rounded-full border border-dashed border-primary/20 animate-[spin_30s_linear_infinite]" />
                <div className="absolute inset-8 rounded-full border border-primary/10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-24 w-24 bg-primary text-white rounded-2xl flex items-center justify-center font-bold text-xl shadow-xl shadow-primary/20">
                    Med4One
                  </div>
                </div>
                {[Bot, Smartphone, BarChart3, Package, Users, ShieldCheck].map((Icon, i) => (
                  <div 
                    key={i}
                    className="absolute"
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: `rotate(${i * 60}deg) translate(160px) rotate(-${i * 60}deg)`,
                    }}
                  >
                    <div className="h-12 w-12 bg-background border rounded-full flex items-center justify-center text-primary shadow-md">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Vertical flow for Mobile */}
              <div className="sm:hidden flex flex-col items-center gap-6 py-8">
                <div className="h-20 w-20 bg-primary text-white rounded-xl flex items-center justify-center font-bold text-lg shadow-lg">Med4One</div>
                {[
                  { icon: LayoutDashboard, label: "PharmacyOS" },
                  { icon: Bot, label: "AI Intelligence" },
                  { icon: BarChart3, label: "Business BI" },
                  { icon: Smartphone, label: "Customer Exp" },
                  { icon: Globe, label: "Connected Future" }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center gap-4">
                    <div className="h-0.5 w-6 bg-primary/20" />
                    <div className="flex items-center gap-3 bg-background border rounded-lg px-4 py-3 w-48 shadow-sm">
                      <item.icon className="h-5 w-5 text-primary" />
                      <span className="text-sm font-semibold">{item.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PharmacyOS Features */}
      <section className="py-24 bg-muted/30 overflow-hidden">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Run Your Pharmacy. Smarter. Faster. Better.</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Med4One PharmacyOS is a modern operating system designed to simplify operations while providing real-time visibility.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { title: "Billing & POS", desc: "Fast and accurate pharmacy billing with WhatsApp/SMS receipts.", icon: LayoutDashboard },
              { title: "Inventory Management", desc: "Real-time inventory with batch, expiry and stock level control.", icon: Package },
              { title: "Smart Purchase", desc: "Automated supplier management and intelligent invoice scanning.", icon: ArrowDownToLine },
              { title: "Multi-Store Control", desc: "Manage multiple pharmacies from one centralized command centre.", icon: Globe },
              { title: "AI Business Assistant", desc: "Get answers to your business questions in natural language.", icon: Bot },
              { title: "GST & Tax Ready", desc: "GST-ready reports, HSN information and automated tax reconciliation.", icon: ShieldCheck },
            ].map((feature, i) => (
              <div key={i} className="group p-6 md:p-8 rounded-2xl border bg-background hover:border-primary/50 transition-all shadow-sm">
                <div className="h-12 w-12 rounded-xl bg-primary/5 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Button size="lg" variant="outline" className="px-10" asChild>
              <Link to="/product-tour">Take a Full Product Tour</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 7. AI Section */}
      <section className="py-24 bg-primary text-primary-foreground overflow-hidden">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium">
                <Bot className="mr-2 h-4 w-4" />
                <span>AI-Powered Intelligence</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">Intelligence Built Into Every Decision.</h2>
              <p className="text-lg text-primary-foreground/80">Our AI solutions help you predict demand, optimize stock, and grow your business with data-driven insights.</p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  "Inventory Forecasting",
                  "Sales Prediction",
                  "AI Business Assistant",
                  "Prescription OCR",
                  "Medicine Insights",
                  "Automated Marketing"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              
              <Button size="lg" variant="secondary" className="mt-4" asChild>
                <Link to="/ai">Explore Med4One AI</Link>
              </Button>
            </div>
            
            <div className="relative">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-full bg-accent flex items-center justify-center text-accent-foreground">
                    <Bot className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-sm font-bold">Med4One AI</div>
                    <div className="text-[10px] text-white/60">Always Active</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-end">
                    <div className="bg-primary-foreground/10 rounded-2xl rounded-tr-none px-4 py-2 text-sm max-w-[80%]">
                      "Which medicines should I reorder this week?"
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-white/10 rounded-2xl rounded-tl-none px-4 py-2 text-sm max-w-[80%]">
                      "Based on recent sales velocity and current stock, 18 products may require replenishment. Top recommendations include: Paracetamol 500mg, Cetirizine 10mg."
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-white/10 rounded-2xl rounded-tl-none px-4 py-2 text-sm max-w-[80%]">
                      <div className="flex gap-2 mt-2">
                        <div className="h-2 w-8 bg-accent rounded" />
                        <div className="h-2 w-16 bg-white/20 rounded" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 h-24 w-24 bg-accent/20 blur-3xl rounded-full animate-pulse" />
              <div className="absolute -bottom-6 -left-6 h-32 w-32 bg-primary-foreground/10 blur-3xl rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* 8. Pricing Section */}
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Simple, Transparent Pricing</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Choose the plan that fits your healthcare business size and growth goals.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { name: "Basic", price: "999", desc: "For single pharmacies starting their digital journey.", features: ["Single Store", "Basic Inventory", "GST Billing", "Standard Reports"] },
              { name: "Premium", price: "2,999", desc: "For growing pharmacies and healthcare clinics.", features: ["Up to 3 Stores", "Advanced Inventory", "AI Insights (Basic)", "WhatsApp Integration", "Priority Support"], popular: true },
              { name: "Pro", price: "7,999+", desc: "For enterprise chains and healthcare groups.", features: ["Unlimited Stores", "Custom AI Models", "Dedicated Manager", "Full API Access", "Custom Integration"] },
            ].map((plan, i) => (
              <div 
                key={i} 
                className={`relative p-8 rounded-3xl border flex flex-col ${plan.popular ? 'border-primary ring-1 ring-primary' : 'bg-muted/10'}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-bold">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-6 h-10">{plan.desc}</p>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-4xl font-bold">₹{plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-primary mb-6">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  7 DAYS FREE TRIAL
                </div>
                <div className="space-y-4 mb-8 flex-1">
                  {plan.features.map((f, j) => (
                    <div key={j} className="flex items-center gap-3 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-3 mt-auto">
                  <Button variant={plan.popular ? 'default' : 'outline'} className="w-full" asChild>
                    <Link to="/get-started">
                      Start 7 Days Free Trial
                    </Link>
                  </Button>
                  {plan.name === 'Pro' && (
                    <Button variant="ghost" className="w-full text-muted-foreground" asChild>
                      <Link to="/contact">Talk to Sales</Link>
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center text-muted-foreground text-sm">
            Ready to transform your business? <Link to="/get-started" className="text-primary font-semibold hover:underline">Start your 7-day free trial now.</Link>
          </div>
        </div>
      </section>

      {/* 9. Final Call to Action */}
      <section className="py-24 border-t">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-4xl mx-auto rounded-3xl bg-primary/5 border border-primary/20 p-8 md:p-16 text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">We’re Not Just Building Software. We’re Building What Comes Next.</h2>
            <p className="text-lg text-muted-foreground">Med4One — Building the technology infrastructure for a smarter, more connected future of healthcare.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="h-12 px-10" asChild>
                <Link to="/get-started">Get Started Now</Link>
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-10" asChild>
                <Link to="/book-demo">Book a Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
