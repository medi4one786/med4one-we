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
              <span>Technology That Makes Healthcare Smarter</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground"
            >
              We’re Building the <span className="text-primary">Digital Future</span> of Healthcare.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl"
            >
              Med4One brings pharmacy, healthcare, technology and artificial intelligence together to create a smarter, simpler and more connected healthcare ecosystem.
            </motion.p>
          </div>
        </div>
      </section>

      {/* 2. Who We Are Section */}
      <section className="py-24 bg-muted/30">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Technology Built Around Real Healthcare.</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Med4One is a healthcare technology company focused on making everyday healthcare operations simpler, smarter and more connected.
                </p>
                <p>
                  We combine modern software, automation, analytics and AI to help pharmacies and healthcare businesses spend less time managing complexity and more time serving people.
                </p>
              </div>
              <div className="pt-4">
                <Button size="lg" asChild>
                  <Link to="/pharmacyos">Explore Our Ecosystem</Link>
                </Button>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative p-8 rounded-3xl bg-background border shadow-xl"
            >
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Cpu className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Intelligence First</h4>
                    <p className="text-muted-foreground">We don't just process data; we create actionable intelligence for better patient care.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0">
                    <Network className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Connected Ecosystem</h4>
                    <p className="text-muted-foreground">Breaking down silos between pharmacies, clinics, and patients.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Bot className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Automation for Care</h4>
                    <p className="text-muted-foreground">Automating complexity so you can focus on the human side of healthcare.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision */}
      <section className="py-24 bg-background overflow-hidden relative">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 md:p-12 rounded-3xl bg-primary/5 border border-primary/10 space-y-6"
            >
              <div className="h-14 w-14 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold">Make Healthcare Technology Simple. Intelligent. Accessible.</h3>
              <p className="text-lg text-muted-foreground italic">
                “Our mission is simple: make powerful healthcare technology accessible, intuitive and useful for every healthcare business.”
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 md:p-12 rounded-3xl bg-accent/5 border border-accent/10 space-y-6"
            >
              <div className="h-14 w-14 rounded-2xl bg-accent text-accent-foreground flex items-center justify-center">
                <Eye className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold">A Connected Healthcare Ecosystem, Powered by Intelligence.</h3>
              <p className="text-lg text-muted-foreground italic">
                “Our vision is to create a connected healthcare ecosystem where technology quietly works behind the scenes, helping every decision become faster, smarter and better.”
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Transactions to Intelligence */}
      <section className="py-24 bg-slate-950 text-white overflow-hidden">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold tracking-tight"
            >
              From Transactions to Intelligence.
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-6 text-xl text-slate-300"
            >
              <p>Every purchase, every sale, every customer interaction and every business decision creates valuable information.</p>
              <p className="text-accent font-semibold text-2xl">Med4One connects that information, turns it into intelligence and puts it to work.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Closing CTA */}
      <section className="py-24 border-t">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-4xl mx-auto rounded-3xl bg-primary/5 border border-primary/20 p-8 md:p-16 text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">We’re Not Just Building Software. We’re Building What Comes Next.</h2>
            <p className="text-lg text-muted-foreground">
              We’re not just building another pharmacy software platform. We’re building the technology infrastructure for a smarter, more connected future of healthcare.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="h-12 px-10" asChild>
                <Link to="/get-started">Join the Future</Link>
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-10" asChild>
                <Link to="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
