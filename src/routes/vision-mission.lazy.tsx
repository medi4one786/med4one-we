import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Compass, Heart, Layers, Rocket, ShieldCheck, Sparkles, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createLazyFileRoute("/vision-mission")({
  component: VisionMission,
});

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5 },
};

const missions = [
  {
    icon: Layers,
    title: "Give every pharmacy enterprise-grade software",
    desc: "Billing, inventory, prescriptions and analytics in one platform — priced for independent stores, built for networks.",
  },
  {
    icon: Sparkles,
    title: "Put intelligence inside daily work",
    desc: "AI that guides reorders, expiry risk and margins in the moment, instead of reports nobody has time to read.",
  },
  {
    icon: ShieldCheck,
    title: "Protect health data by design",
    desc: "Consent-based data handling, encryption and role-based access as defaults, not paid add-ons.",
  },
  {
    icon: Rocket,
    title: "Connect the wider healthcare journey",
    desc: "Pharmacies, clinics, distributors and patients working from one connected digital layer.",
  },
];

const principles = [
  { title: "Clarity over complexity", desc: "Software should feel obvious at the counter, even during a rush." },
  { title: "Speed is a feature", desc: "Every screen is designed around seconds saved per transaction." },
  { title: "Own your data", desc: "Your records belong to your pharmacy — exportable, private, always accessible." },
  { title: "Built with pharmacists", desc: "Product decisions come from real counters, not assumptions." },
];

function VisionMission() {
  return (
    <div className="flex min-h-screen flex-col">
      <section className="relative overflow-hidden bg-slate-950 pt-32 pb-24 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-transparent" />
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              Vision & Mission
            </span>
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              Building the digital future of healthcare.
            </h1>
            <p className="text-lg text-slate-300 md:text-xl">
              Med4One Health Services exists to make healthcare businesses run smarter — starting with the pharmacy,
              and extending to the entire connected care journey.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button size="lg" className="h-12 px-8 font-semibold" asChild>
                <Link to="/book-demo">Book a demo</Link>
              </Button>
              <Button size="lg" variant="outline" className="h-12 border-white/20 bg-transparent px-8 text-white hover:bg-white/10" asChild>
                <Link to="/about">About Med4One</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto grid gap-8 px-4 md:px-6 lg:grid-cols-2">
          <motion.div {...fadeUp} className="rounded-3xl border border-border bg-card p-10 shadow-sm">
            <Compass className="h-9 w-9 text-primary" />
            <h2 className="mt-6 text-2xl font-bold md:text-3xl">Our Vision</h2>
            <p className="mt-4 text-muted-foreground">
              A healthcare ecosystem where every pharmacy, clinic and care provider runs on connected, intelligent
              technology — where information moves instantly, decisions are informed, and patients are served faster and
              more safely.
            </p>
          </motion.div>

          <motion.div {...fadeUp} className="rounded-3xl border border-border bg-card p-10 shadow-sm">
            <Target className="h-9 w-9 text-primary" />
            <h2 className="mt-6 text-2xl font-bold md:text-3xl">Our Mission</h2>
            <p className="mt-4 text-muted-foreground">
              To build software that removes the operational friction in healthcare businesses — accurate billing,
              controlled inventory, clear prescriptions and honest analytics — so healthcare teams can spend their time
              on care, not paperwork.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-muted/40 py-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...fadeUp} className="max-w-2xl space-y-4">
            <h2 className="text-3xl font-bold md:text-4xl">How we pursue the mission</h2>
            <p className="text-muted-foreground">Four commitments that shape every release of the Med4One platform.</p>
          </motion.div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {missions.map((item) => (
              <motion.div key={item.title} {...fadeUp} className="rounded-3xl border border-border bg-card p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-6 text-xl font-bold">{item.title}</h3>
                <p className="mt-3 text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...fadeUp} className="max-w-2xl space-y-4">
            <h2 className="text-3xl font-bold md:text-4xl">The principles we build by</h2>
            <p className="text-muted-foreground">
              Med4One is engineered around the realities of a busy pharmacy counter.
            </p>
          </motion.div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((item) => (
              <motion.div key={item.title} {...fadeUp} className="rounded-2xl border border-border bg-card p-6">
                <Heart className="h-6 w-6 text-primary" />
                <h3 className="mt-4 font-bold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-24 text-white">
        <div className="container mx-auto px-4 text-center md:px-6">
          <motion.div {...fadeUp} className="mx-auto max-w-2xl space-y-6">
            <h2 className="text-3xl font-bold md:text-5xl">Build the future with us.</h2>
            <p className="text-slate-300">
              See how the Med4One platform works today — and where we are taking connected healthcare next.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="h-12 px-8 font-semibold" asChild>
                <Link to="/book-demo">
                  Book a demo <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-12 border-white/20 bg-transparent px-8 text-white hover:bg-white/10" asChild>
                <Link to="/careers">Join the team</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
