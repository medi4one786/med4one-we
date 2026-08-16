import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { 
  Zap, 
  Target, 
  Eye, 
  ArrowRight, 
  CheckCircle2, 
  Bot, 
  Cpu, 
  Network 
} from "lucide-react";
import { motion } from "framer-motion";

export const Route = createLazyFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-20 pointer-events-none overflow-hidden">
          <div className="absolute top-[-5%] left-[-5%] w-[30%] h-[30%] bg-primary/20 blur-[100px] rounded-full" />
          <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-accent/20 blur-[100px] rounded-full" />
        </div>

        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary"
            >
              <Zap className="mr-2 h-4 w-4" />
              <span>Healthcare Is Evolving. We’re Building What Comes Next.</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tight text-foreground leading-tight"
            >
              Building the <span className="text-primary relative inline-block">Digital Future<span className="absolute -bottom-2 left-0 w-full h-1 bg-primary/20 rounded-full"></span></span> of Healthcare.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-2xl text-muted-foreground max-w-3xl leading-relaxed"
            >
              Connecting pharmacy, healthcare, technology and AI to create a smarter, simpler and more connected healthcare ecosystem.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex gap-4 pt-4"
            >
              <div className="h-1 w-12 bg-primary rounded-full" />
              <div className="h-1 w-12 bg-primary/20 rounded-full" />
              <div className="h-1 w-12 bg-primary/20 rounded-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Vision Section */}
      <section className="py-24 bg-muted/30">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 text-center lg:text-left"
            >
              <div className="flex items-center justify-center lg:justify-start gap-2 text-primary font-bold tracking-wider uppercase text-sm">
                <Eye className="h-5 w-5" />
                <span>Our Vision</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">A Smarter, More Connected Future for Healthcare.</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  We envision a healthcare ecosystem where technology connects every part of the journey — from pharmacy and healthcare businesses to professionals and customers — making healthcare simpler, smarter and more accessible.
                </p>
                <p>
                  Our vision is to build the digital infrastructure that powers the next generation of healthcare, where intelligent technology works seamlessly behind the scenes to help businesses make better decisions, serve people better and grow sustainably.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6"
            >
              {[
                { title: "Connect", desc: "Bring healthcare businesses, people, data and technology together.", icon: Network },
                { title: "Simplify", desc: "Remove unnecessary complexity from everyday healthcare operations.", icon: Zap },
                { title: "Intelligent", desc: "Turn data into meaningful insights and better decisions through AI.", icon: Bot },
                { title: "Impact", desc: "Use technology to create measurable value for healthcare businesses and patients.", icon: Target },
              ].map((item, i) => (
                <div key={i} className="p-6 md:p-8 rounded-2xl bg-background border shadow-sm space-y-4 hover:shadow-md transition-shadow">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-bold text-xl">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Mission Section */}
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-4xl mx-auto space-y-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center space-y-4"
            >
              <div className="flex items-center justify-center gap-2 text-accent font-bold tracking-wider uppercase text-sm">
                <Target className="h-5 w-5" />
                <span>Our Mission</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Make Powerful Healthcare Technology Simple for Everyone.</h2>
              <p className="text-xl text-muted-foreground">
                Our mission is to empower pharmacies and healthcare businesses with intelligent, connected and easy-to-use technology that reduces complexity, improves efficiency and enables better decisions.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 md:p-12 rounded-3xl bg-slate-950 text-white space-y-8"
            >
              <p className="text-center text-lg md:text-xl text-slate-300">
                We believe technology should <span className="text-white font-semibold">work for healthcare businesses</span> — not create more work for them.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  "Pharmacy Operations", "AI & Automation", "Business Intelligence", "Customer Engagement",
                  "Multi-Store Management", "Digital Healthcare", "Connected Technology", "One Evolving Ecosystem"
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-slate-400 justify-center md:justify-start">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. What We Are Building */}
      <section className="py-24 bg-muted/30">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center justify-center gap-2 text-primary font-bold tracking-wider uppercase text-sm">
                <Cpu className="h-5 w-5" />
                <span>What We Are Building</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">From Operations to Intelligence.</h2>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-6 text-xl text-muted-foreground"
            >
              <p>Every purchase, every sale, every customer interaction and every business decision creates valuable information.</p>
              
              <div className="flex flex-col items-center gap-4 py-8">
                <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-primary font-bold text-lg sm:text-2xl">
                  <span>Connect</span>
                  <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 shrink-0" />
                  <span>Understand</span>
                  <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 shrink-0" />
                  <span>Intelligence</span>
                </div>
              </div>

              <p className="text-foreground font-medium">
                This is where we differentiate Med4One from traditional pharmacy software.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Why We Exist */}
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-primary">Why We Exist</h2>
                <h3 className="text-2xl md:text-3xl font-semibold">Because Healthcare Should Be Easier to Run — and Better to Experience.</h3>
              </div>
              
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>Healthcare businesses manage enormous amounts of information every day. We believe technology can bring all of this together.</p>
                <div className="grid grid-cols-2 gap-x-8 gap-y-2 py-4">
                  {["Products", "Prescriptions", "Customers", "Purchases", "Inventory", "Sales", "Employees", "Reports"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-primary/5 rounded-3xl p-8 md:p-12 border border-primary/10 grid grid-cols-1 gap-6"
            >
              {[
                "Less manual work.", "Less complexity.", "More visibility.", "Better decisions.", "Better experiences."
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4 text-xl font-medium text-foreground">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Long-Term Ambition & Closing */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10 opacity-50 blur-[120px]" />
        
        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Our Long-Term Ambition</h2>
              <p className="text-xl text-slate-400">From Pharmacy Software to a Healthcare Technology Ecosystem.</p>
            </div>

            <div className="flex flex-col items-center space-y-6">
              {[
                { label: "PharmacyOS", role: "powers operations" },
                { label: "AI", role: "powers intelligence" },
                { label: "Business Intelligence", role: "powers decisions" },
                { label: "Customer Technology", role: "powers engagement" },
                { label: "Connected Healthcare", role: "powers the future" },
              ].map((step, i, arr) => (
                <div key={i} className="flex flex-col items-center gap-4 w-full">
                  <div className="w-full max-w-lg p-5 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-2 group hover:bg-white/10 transition-colors">
                    <span className="font-bold text-lg md:text-xl">{step.label}</span>
                    <span className="text-accent text-sm md:text-base font-medium">{step.role}</span>
                  </div>
                  {i < arr.length - 1 && (
                    <div className="flex flex-col items-center gap-1">
                      <div className="h-8 w-px bg-gradient-to-b from-primary/50 to-transparent" />
                      <div className="text-primary text-[10px]">▼</div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="text-center pt-12 space-y-8">
              <p className="text-2xl font-bold text-slate-200 italic">
                “Med4One — Building the technology behind a smarter healthcare ecosystem.”
              </p>
              
              <div className="space-y-6">
                <h3 className="text-3xl md:text-4xl font-bold">We’re Not Just Building Software. We’re Building What Comes Next.</h3>
                <div className="flex flex-wrap justify-center gap-4 pt-4">
                  <Button size="lg" className="h-12 px-10 bg-primary hover:bg-primary/90" asChild>
                    <Link to="/get-started">Join the Future</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="h-12 px-10 border-white/20 hover:bg-white/10" asChild>
                    <Link to="/contact">Contact Sales</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
