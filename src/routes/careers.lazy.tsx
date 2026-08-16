import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Bot,
  BarChart3,
  LayoutDashboard,
  Globe,
  Compass,
  Sparkles,
  Users,
  Target,
  ShieldCheck,
  Code2,
  Palette,
  Briefcase,
  HeartHandshake,
  Settings2,
  Wallet,
  Mail,
  Search,
} from "lucide-react";

export const Route = createLazyFileRoute("/careers")({
  component: Careers,
});

const values = [
  { name: "Ownership", desc: "We take responsibility end to end — from idea to impact.", icon: ShieldCheck },
  { name: "Curiosity", desc: "We ask better questions before we build better answers.", icon: Compass },
  { name: "Simplicity", desc: "Healthcare is complex. Our products should never feel that way.", icon: Sparkles },
  { name: "Collaboration", desc: "We build across disciplines, not inside silos.", icon: Users },
  { name: "Impact", desc: "We measure our work by the outcomes it creates for real teams.", icon: Target },
];

const areas = [
  { name: "Engineering & Technology", desc: "Platform, backend, frontend and infrastructure for healthcare-grade systems.", icon: Code2 },
  { name: "AI & Data", desc: "Forecasting, intelligence layers and data pipelines that power decisions.", icon: Bot },
  { name: "Product & Design", desc: "Product thinking and interface craft for complex operational workflows.", icon: Palette },
  { name: "Sales & Business Development", desc: "Bringing the platform to pharmacies, chains and healthcare groups.", icon: Briefcase },
  { name: "Customer Success", desc: "Onboarding, adoption and long-term partnership with our customers.", icon: HeartHandshake },
  { name: "Operations", desc: "Process, delivery and execution across a growing product ecosystem.", icon: Settings2 },
  { name: "Finance & HR", desc: "The systems and people functions that let the company scale well.", icon: Wallet },
];

// No active vacancies are published at this time.
const openings: { title: string; area: string; location: string; type: string }[] = [];

const CAREERS_EMAIL = "careers@med4one.com";

function Careers() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-20 pointer-events-none">
          <div className="absolute top-[-10%] left-[-5%] w-[45%] h-[45%] bg-primary/25 blur-[130px] rounded-full" />
          <div className="absolute bottom-[0%] right-[-5%] w-[40%] h-[40%] bg-accent/25 blur-[130px] rounded-full" />
        </div>

        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs md:text-sm font-medium text-primary"
              >
                <Sparkles className="mr-2 h-4 w-4" />
                <span>Careers at Med4One</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
              >
                Build the Future of Healthcare <span className="text-primary">With Us.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0"
              >
                Join us in building intelligent technology that makes healthcare simpler, smarter and more connected.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Button size="lg" className="h-14 px-8 text-base font-semibold" asChild>
                  <a href={`mailto:${CAREERS_EMAIL}?subject=Application%20%E2%80%94%20Med4One`}>
                    Send Your Resume
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 text-base font-semibold" asChild>
                  <a href="#open-positions">View Open Positions</a>
                </Button>
              </motion.div>
            </div>

            {/* Product-screen visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="relative w-full max-w-xl mx-auto"
            >
              <div className="rounded-3xl border bg-card shadow-2xl overflow-hidden">
                <div className="flex items-center gap-2 border-b px-4 py-3 bg-muted/30">
                  <div className="h-3 w-3 rounded-full bg-muted-foreground/20" />
                  <div className="h-3 w-3 rounded-full bg-muted-foreground/20" />
                  <div className="h-3 w-3 rounded-full bg-muted-foreground/20" />
                  <div className="ml-3 h-4 w-40 rounded bg-muted-foreground/10" />
                </div>
                <div className="p-5 sm:p-6 space-y-5">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {["PharmacyOS", "AI Layer", "Intelligence", "Ecosystem"].map((label, i) => (
                      <div key={i} className="rounded-xl border bg-background p-3">
                        <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</div>
                        <div className="mt-2 h-2 w-full rounded bg-primary/20" />
                      </div>
                    ))}
                  </div>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="sm:col-span-2 rounded-xl border bg-background p-4 h-40">
                      <div className="flex items-center justify-between mb-4">
                        <div className="h-3 w-24 rounded bg-muted-foreground/15" />
                        <BarChart3 className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex items-end gap-2 h-20">
                        {[40, 65, 50, 80, 60, 92, 74].map((h, i) => (
                          <motion.div
                            key={i}
                            initial={{ height: 0 }}
                            whileInView={{ height: `${h}%` }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.06, duration: 0.5 }}
                            className="flex-1 rounded-t bg-primary/30"
                          />
                        ))}
                      </div>
                    </div>
                    <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
                      <div className="flex items-center gap-2 text-primary text-xs font-semibold mb-3">
                        <Bot className="h-4 w-4" />
                        <span>AI Insights</span>
                      </div>
                      <div className="space-y-2">
                        <div className="rounded-lg border bg-background p-2 text-[10px] leading-relaxed">
                          Demand forecast updated across connected stores.
                        </div>
                        <div className="rounded-lg border bg-background p-2 text-[10px] leading-relaxed">
                          Operational health: stable.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 1. Why Med4One */}
      <section className="py-20 md:py-24 bg-muted/20 border-y">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Why Med4One</div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                We’re building a healthcare technology ecosystem — not a single product.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Med4One brings PharmacyOS, AI, business intelligence and connected healthcare together into one
                platform. That means the work here spans real operational depth: the systems pharmacies run on every
                day, the intelligence layer that helps them decide, and the infrastructure that connects it all.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                It’s early, ambitious and deliberately long-term. If you want your work to shape how healthcare
                businesses actually operate, there is a lot of room to build here.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "PharmacyOS", desc: "The operating layer for pharmacy operations.", icon: LayoutDashboard },
                { title: "AI", desc: "Forecasting and intelligence built into workflows.", icon: Bot },
                { title: "Business Intelligence", desc: "Clarity across stores, stock and growth.", icon: BarChart3 },
                { title: "Connected Healthcare", desc: "One ecosystem across the care journey.", icon: Globe },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="p-6 rounded-2xl border bg-background"
                >
                  <div className="h-11 w-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold mb-1.5">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Our Culture */}
      <section className="py-20 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center space-y-4 mb-14 max-w-2xl mx-auto">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Our Culture</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              How we work together
            </h2>
            <p className="text-muted-foreground">Five values that guide how we build, decide and support each other.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {values.map((value, i) => (
              <motion.div
                key={value.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                className="group p-6 rounded-2xl border bg-card hover:border-primary/40 hover:shadow-lg transition-all"
              >
                <div className="h-11 w-11 rounded-xl bg-primary/5 text-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <value.icon className="h-5 w-5" />
                </div>
                <h3 className="font-bold mb-2">{value.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. What We're Building */}
      <section className="py-20 md:py-24 bg-muted/20 border-y">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center space-y-4 mb-14 max-w-2xl mx-auto">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-primary">What We’re Building</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">Career areas at Med4One</h2>
            <p className="text-muted-foreground">
              The disciplines that come together to build an intelligent healthcare platform.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {areas.map((area, i) => (
              <motion.div
                key={area.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                className="p-6 md:p-7 rounded-2xl border bg-background hover:border-primary/40 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="h-11 w-11 shrink-0 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <area.icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold mb-2">{area.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{area.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Open Positions */}
      <section id="open-positions" className="py-20 md:py-24 scroll-mt-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center space-y-4 mb-12 max-w-2xl mx-auto">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Open Positions</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">Current openings</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            {openings.length > 0 ? (
              <div className="divide-y rounded-2xl border bg-card overflow-hidden">
                {openings.map((job) => (
                  <div
                    key={job.title}
                    className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 p-6 sm:flex sm:justify-between"
                  >
                    <div className="min-w-0">
                      <h3 className="font-bold truncate">{job.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {job.area} · {job.location} · {job.type}
                      </p>
                    </div>
                    <Button variant="outline" className="shrink-0" asChild>
                      <a href={`mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent(`Application — ${job.title}`)}`}>
                        Apply
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-3xl border bg-card p-10 md:p-14 text-center"
              >
                <div className="mx-auto h-14 w-14 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-6">
                  <Search className="h-6 w-6" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3">No Open Positions Right Now</h3>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  We’re always interested in meeting talented people who believe in our mission.
                </p>
                <Button className="mt-8 h-12 px-8 font-semibold" asChild>
                  <a href={`mailto:${CAREERS_EMAIL}?subject=Application%20%E2%80%94%20Med4One`}>
                    <Mail className="mr-2 h-4 w-4" />
                    Send Your Resume
                  </a>
                </Button>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* 5. Don't see your role? */}
      <section className="py-20 md:py-24 bg-muted/20 border-y">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-center rounded-3xl border bg-background p-8 md:p-12">
            <div className="space-y-3 min-w-0 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Don’t See Your Role?</h2>
              <p className="text-muted-foreground text-lg">
                Great people don’t always fit into a job description.
              </p>
            </div>
            <Button size="lg" className="h-14 px-8 text-base font-semibold shrink-0" asChild>
              <a href={`mailto:${CAREERS_EMAIL}?subject=Open%20Application%20%E2%80%94%20Med4One`}>
                Send Your Resume
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* 6. Final CTA */}
      <section className="py-20 md:py-28">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="relative max-w-4xl mx-auto rounded-3xl border border-primary/20 bg-primary/5 p-8 md:p-16 text-center space-y-8 overflow-hidden">
            <div className="absolute inset-0 -z-10 opacity-40 pointer-events-none">
              <div className="absolute top-[-30%] left-1/2 -translate-x-1/2 w-[60%] h-[80%] bg-primary/15 blur-[120px] rounded-full" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Your Next Chapter Could Start Here.</h2>
            <p className="text-lg text-muted-foreground">Come build what comes next.</p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
              <Button size="lg" className="h-12 px-10" asChild>
                <a href={`mailto:${CAREERS_EMAIL}?subject=Application%20%E2%80%94%20Med4One`}>
                  Send Your Resume
                </a>
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-10" asChild>
                <Link to="/about">Learn About Med4One</Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground pt-2">
              Careers enquiries only:{" "}
              <a href={`mailto:${CAREERS_EMAIL}`} className="text-primary font-semibold hover:underline">
                {CAREERS_EMAIL}
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
