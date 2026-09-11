import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Bot, Boxes, Code2, HeartHandshake, Headphones, MapPin, Palette, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createLazyFileRoute("/team")({
  component: Team,
});

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5 },
};

const groups = [
  {
    icon: Code2,
    name: "Engineering",
    desc: "Builds and runs PharmacyOS — billing, inventory, prescriptions and the data platform behind them.",
    focus: ["Platform reliability", "Offline-tolerant billing", "Secure data architecture"],
  },
  {
    icon: Bot,
    name: "AI & Data",
    desc: "Develops the intelligence layer: demand forecasting, expiry risk, margin insights and prescription reading.",
    focus: ["Forecasting models", "Prescription digitisation", "Insight quality"],
  },
  {
    icon: Palette,
    name: "Product & Design",
    desc: "Turns counter workflows into screens a pharmacist can use during a rush, without training manuals.",
    focus: ["Workflow research", "Interface design", "Accessibility"],
  },
  {
    icon: Boxes,
    name: "Implementation",
    desc: "Migrates stores from legacy billing software, imports existing stock data and gets teams live quickly.",
    focus: ["Data migration", "Store onboarding", "Staff training"],
  },
  {
    icon: Headphones,
    name: "Customer Support",
    desc: "Day-to-day help for pharmacies on call, WhatsApp and email — during business hours when it matters.",
    focus: ["Fast first response", "Issue ownership", "Follow-up till resolved"],
  },
  {
    icon: HeartHandshake,
    name: "Sales & Partnerships",
    desc: "Works with independent pharmacies, multi-store chains and distributors across India.",
    focus: ["Store demos", "Chain rollouts", "Distributor tie-ups"],
  },
];

const values = [
  { title: "Pharmacists first", desc: "If it does not save time at the counter, it does not ship." },
  { title: "Own the outcome", desc: "Whoever picks up an issue stays with it until the pharmacy is unblocked." },
  { title: "Write it down", desc: "Clear documentation so stores and teammates never depend on one person." },
  { title: "Small, senior teams", desc: "Fewer handoffs, faster decisions, higher quality releases." },
];

function Team() {
  return (
    <div className="flex min-h-screen flex-col">
      <section className="relative overflow-hidden bg-slate-950 pt-32 pb-24 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-transparent" />
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              Our Team
            </span>
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              A small team building serious healthcare software.
            </h1>
            <p className="text-lg text-slate-300 md:text-xl">
              Med4One Health Services Pvt Ltd works out of Koramangala, Bangalore, across six focused groups —
              engineering, AI, design, implementation, support and partnerships.
            </p>
            <p className="inline-flex items-center gap-2 text-slate-400">
              <MapPin className="h-4 w-4" /> Koramangala, Bangalore — 560095
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button size="lg" className="h-12 px-8 font-semibold" asChild>
                <Link to="/careers">Open roles</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 border-white/20 bg-transparent px-8 text-white hover:bg-white/10"
                asChild
              >
                <Link to="/founders">Our founders</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...fadeUp} className="max-w-2xl space-y-3">
            <h2 className="text-3xl font-bold md:text-4xl">How the team is organised</h2>
            <p className="text-muted-foreground">
              Each group owns a clear part of the pharmacy experience, from the code behind billing to the person who
              answers your call.
            </p>
          </motion.div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {groups.map((group) => (
              <motion.div
                {...fadeUp}
                key={group.name}
                className="flex flex-col rounded-3xl border border-border bg-card p-8 shadow-sm"
              >
                <group.icon className="h-8 w-8 text-primary" />
                <h3 className="mt-5 text-xl font-bold">{group.name}</h3>
                <p className="mt-2 flex-1 text-muted-foreground">{group.desc}</p>
                <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                  {group.focus.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.h2 {...fadeUp} className="text-3xl font-bold md:text-4xl">
            How we work
          </motion.h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <motion.div {...fadeUp} key={value.title} className="rounded-3xl border border-border bg-card p-8">
                <h3 className="text-lg font-bold">{value.title}</h3>
                <p className="mt-2 text-muted-foreground">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="container mx-auto flex flex-col gap-8 px-4 md:flex-row md:items-center md:justify-between md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold md:text-4xl">Want to join us?</h2>
            <p className="text-slate-300">
              We hire for ownership and curiosity. Send your work to sales@med4one.com if you do not see a matching role.
            </p>
          </div>
          <Button size="lg" className="h-12 px-8 font-semibold" asChild>
            <Link to="/careers">
              See careers <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
