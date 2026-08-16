import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  BarChart3, 
  ShieldCheck, 
  Globe,
  Bot,
  Package,
  LayoutDashboard,
  Building2,
  Stethoscope,
  Users,
  Briefcase,
  Layers,
  Sparkles
} from "lucide-react";
import { motion } from "framer-motion";
import promoAsset from "@/assets/med4one-promo.png.asset.json";
import med4oneLogo from "@/assets/med4one-logo.png";
import med4oneLogoWebp from "@/assets/med4one-logo.webp";
import { BookDemoForm } from "@/components/BookDemoForm";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-slate-50/50">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30 pointer-events-none">
          <div className="absolute top-[-10%] left-[-5%] w-[50%] h-[50%] bg-primary/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-[10%] right-[-5%] w-[50%] h-[50%] bg-accent/10 blur-[120px] rounded-full" />
        </div>

        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 lg:space-y-8 flex-1">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-3 px-1 pr-4 py-1 rounded-full bg-white border border-primary/10 shadow-sm"
              >
                <div className="bg-primary/10 p-1 rounded-full">
                  <picture>
                    <source srcSet={med4oneLogoWebp} type="image/webp" />
                    <img src={med4oneLogo} alt="Med4One" className="h-4 w-auto object-contain" />
                  </picture>
                </div>
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-primary">Intelligent Healthcare Ecosystem</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]"
              >
                Powering the Future of <span className="text-primary">Pharmacy & Healthcare</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed"
              >
                Med4One brings PharmacyOS, AI, Business Intelligence and connected healthcare solutions together in one intelligent ecosystem.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2"
              >
                <Button size="lg" className="h-14 px-10 text-base font-bold w-full sm:w-auto rounded-xl shadow-lg shadow-primary/20" asChild>
                  <Link to="/solutions">Explore Med4One</Link>
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-10 text-base font-bold w-full sm:w-auto rounded-xl bg-white/50 backdrop-blur-sm" asChild>
                  <a href="#demo">Book a Demo</a>
                </Button>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex-1 w-full max-w-2xl lg:max-w-3xl"
            >
              <div className="relative group">
                <div className="absolute -inset-4 bg-primary/5 rounded-[2rem] blur-2xl group-hover:bg-primary/10 transition-colors duration-500" />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border bg-white ring-1 ring-slate-900/5 transition-transform duration-500 hover:scale-[1.01]">
                  <img 
                    src={promoAsset.url} 
                    alt="Med4One Ecosystem on Desktop, Laptop, Tablet and Mobile" 
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/5 to-transparent pointer-events-none" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Brand Value Proposition */}
      <section className="py-16 bg-white border-y">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "One Platform", desc: "Unified Healthcare Stack", icon: Layers },
              { label: "AI Powered", desc: "Predictive Intelligence", icon: Bot },
              { label: "Real-time", desc: "Live Operations Data", icon: Zap },
              { label: "Connected", desc: "Seamless Data Flow", icon: Globe },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center space-y-2">
                <div className="h-10 w-10 rounded-full bg-primary/5 flex items-center justify-center text-primary mb-2">
                  <item.icon className="h-5 w-5" />
                </div>
                <h4 className="font-bold text-slate-900">{item.label}</h4>
                <p className="text-xs text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Product Showcase - The Smart Pharmacy */}
      <section className="py-24 bg-slate-50/50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center space-y-4 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-tight mb-2"
            >
              PRODUCT SHOWCASE
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">Everything You Need to Run a Smarter Pharmacy</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">Integrated solutions designed to scale your healthcare business from operations to intelligence.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Med4One PharmacyOS", 
                desc: "The core operating system for modern pharmacy management, billing, and inventory.", 
                icon: LayoutDashboard,
                link: "/pharmacyos"
              },
              { 
                title: "Med4One AI", 
                desc: "Intelligent automation, inventory forecasting, and AI-driven growth insights.", 
                icon: Bot,
                link: "/ai"
              },
              { 
                title: "Business Intelligence", 
                desc: "Deep analytics and data visualization to understand every margin and movement.", 
                icon: BarChart3,
                link: "/bi"
              },
              { 
                title: "Multi-Store Management", 
                desc: "Centralized control for pharmacy chains with real-time sync and reporting.", 
                icon: Globe,
                link: "/multi-store"
              },
              { 
                title: "Enterprise Solutions", 
                desc: "Scalable infrastructure and custom integrations for large healthcare groups.", 
                icon: Building2,
                link: "/enterprise"
              },
              {
                title: "Connected Healthcare",
                desc: "Bridging the gap between pharmacies, patients, and providers in one ecosystem.",
                icon: Users,
                link: "/solutions"
              }
            ].map((solution, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex flex-col p-8 rounded-3xl bg-white border border-slate-200 hover:border-primary/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="h-14 w-14 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <solution.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{solution.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-1">{solution.desc}</p>
                <Link to={solution.link} className="inline-flex items-center text-primary font-bold text-sm group/btn hover:underline">
                  Explore Solution 
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. One Platform Narrative */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight">One Platform. Smarter Healthcare.</h2>
                <p className="text-lg text-slate-600">AI-Powered solutions for Pharmacy Management, Business Intelligence, and Connected Healthcare.</p>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-6 pt-4">
                {[
                  { title: "PharmacyOS", desc: "Smart Pharmacy Management", icon: Package },
                  { title: "AI Solutions", desc: "Intelligent Automation", icon: Bot },
                  { title: "Business Intelligence", desc: "Real-time Growth Insights", icon: BarChart3 },
                  { title: "Connected Healthcare", desc: "Bridging Providers & Patients", icon: Globe }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="h-10 w-10 rounded-xl bg-primary/5 text-primary flex items-center justify-center shrink-0">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{item.title}</h4>
                      <p className="text-xs text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="rounded-xl h-12" asChild>
                  <Link to="/get-started">Join the Future</Link>
                </Button>
                <Button size="lg" variant="ghost" className="rounded-xl h-12" asChild>
                  <Link to="/about">Our Vision <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-10 bg-accent/5 blur-[100px] rounded-full group-hover:bg-accent/10 transition-colors duration-700" />
              <div className="relative rounded-3xl overflow-hidden border bg-slate-50 p-4 shadow-xl">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-sm border border-white">
                  <img 
                    src={promoAsset.url} 
                    alt="Med4One Intelligent Dashboard" 
                    className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Business Scale Section */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary blur-[160px] rounded-full -translate-y-1/2 translate-x-1/2" />
        </div>
        
        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="text-center space-y-4 mb-20">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Built for Every Scale of Healthcare</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">Intelligent workflows tailored for pharmacies, clinics, and enterprise healthcare groups.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { title: "Independent Pharmacies", icon: Building2 },
              { title: "Pharmacy Chains", icon: LayoutDashboard },
              { title: "Clinics & Healthcare", icon: Stethoscope },
              { title: "Healthcare Professionals", icon: Users },
              { title: "Enterprise Groups", icon: Briefcase }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="h-16 w-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <item.icon className="h-8 w-8" />
                </div>
                <h4 className="font-bold text-sm tracking-wide">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Pricing Strip (Compact) */}
      <section className="py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Start Your Digital Transformation</h2>
            <p className="text-slate-600">Choose the plan that fits your business goals. All plans include a 7-day free trial.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: "Basic", price: "999", color: "slate" },
              { name: "Premium", price: "2,999", color: "primary", popular: true },
              { name: "Enterprise", price: "7,999+", color: "slate" }
            ].map((plan, i) => (
              <div key={i} className={`p-8 rounded-3xl border ${plan.popular ? 'border-primary shadow-xl ring-1 ring-primary/50' : 'border-slate-200'} bg-white flex flex-col`}>
                {plan.popular && <span className="text-[10px] font-bold text-primary tracking-widest uppercase mb-4">Most Popular</span>}
                <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1 my-6">
                  <span className="text-4xl font-bold text-slate-900">₹{plan.price}</span>
                  <span className="text-slate-500 text-sm">/mo</span>
                </div>
                <div className="flex items-center justify-center gap-1.5 text-[10px] font-bold text-primary uppercase tracking-wider mb-8">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  7 Days Free Trial
                </div>
                <Button variant={plan.popular ? 'default' : 'outline'} className="w-full rounded-xl" asChild>
                  <Link to="/get-started">Get Started</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Book a Demo Section (Lead Capture) */}
      <section id="demo" className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-30 pointer-events-none">
          <div className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-primary/10 blur-[120px] rounded-full" />
        </div>
        
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase">
                  <Sparkles className="h-3.5 w-3.5" />
                  Experience the Future
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                  Ready to Transform Your <span className="text-primary">Pharmacy Operations?</span>
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
                  Schedule a personalized walkthrough with our experts and discover how Med4One's intelligent ecosystem can drive efficiency, growth, and better patient outcomes.
                </p>
                
                <div className="space-y-4 pt-4">
                  {[
                    "Personalized feature walkthrough",
                    "Custom workflow consultation",
                    "Implementation roadmap discussion",
                    "7-day trial setup support"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="h-5 w-5 rounded-full bg-green-500/10 flex items-center justify-center text-green-600 shrink-0">
                        <CheckCircle2 className="h-3 w-3" />
                      </div>
                      <span className="text-slate-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-primary/5 rounded-[2.5rem] blur-3xl -z-10" />
              <BookDemoForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8. Final Call to Action */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-slate-950/20" />
        <div className="container px-4 md:px-6 mx-auto relative z-10 text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight max-w-3xl mx-auto leading-tight">We’re Not Just Building Software. We’re Building What Comes Next.</h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto font-medium italic">“Med4One — Powering a smarter, more connected healthcare ecosystem.”</p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button size="lg" variant="secondary" className="h-14 px-12 text-lg font-bold rounded-xl shadow-xl" asChild>
              <Link to="/get-started">Start Free Trial</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-12 text-lg font-bold rounded-xl border-white/20 hover:bg-white/10" asChild>
              <a href="#demo">Book a Demo</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
